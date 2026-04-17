---
name: generate-api-client
description: Generate TypeScript API client files for this Next.js project from an OpenAPI spec, following the patterns in src/api/. Trigger whenever the user wants to create, add, or generate API client files or typed wrapper functions for backend endpoints — including phrases like "tạo api client", "generate api client", "tạo client cho api", "tạo api cho [resource]", "add api for [endpoint]", "tạo api users", or any request to wrap a backend route in a typed function. Use this skill even if the user only mentions a tag name (e.g. "Users", "Roles") without explicitly saying "api client".
---

# Generate API Client

Follow these steps in order. Do not skip steps or batch them — each step may affect the next.

**Language rule**: detect the language of the user's message and use that same language for all output — confirmation tables, questions, status messages, and error messages. If the user writes in Vietnamese, respond in Vietnamese; if English, respond in English; etc.

## Step 1 — Parse user intent

From the user's message, determine:
- **Scope**: are they asking for a **full tag group** (e.g. "create api client for Users") or **specific endpoint(s)** (e.g. "tạo api cho GetUsers, DeleteUser")?
- **Tag name(s)** or **operationId(s)** mentioned (case-insensitive match is fine).

Keep this determination in mind for Step 4.

## Step 2 — Check API_DOCS_URL

Read `.env` at the project root. Look for `API_DOCS_URL`.

If not found or the value is empty, ask the user:
> `API_DOCS_URL` is not configured. Please provide the URL to the OpenAPI JSON spec (e.g., `http://localhost:5178/openapi/v1.json`)?

Wait for the user's reply. Once they provide the URL:
1. Append `API_DOCS_URL=<provided_url>` to the `.env` file (create the file if it doesn't exist).
2. Confirm: "Saved `API_DOCS_URL` to `.env`." then continue to Step 3 using that URL.

## Step 3 — Fetch OpenAPI spec

Run:
```bash
curl -s <API_DOCS_URL value from .env>
```

Parse the JSON. You need:
- `paths`: each path → methods → `tags`, `operationId`, `parameters`, `requestBody`, `responses`
- `components.schemas`: schema definitions referenced by `$ref`

## Step 4 — Filter endpoints

Apply the scope from Step 1:
- **Full tag**: include every endpoint whose `tags` array contains that tag name
- **Specific endpoint**: match by `operationId` or path substring

## Step 5 — Show confirmation table

Display the endpoints you're about to generate:

| # | Method | Path | OperationId | Description | File |
|---|--------|------|-------------|-------------|------|
| 1 | POST | /api/auth/login | Login | Authenticate user and return tokens | src/api/auth/login.ts |
| … | … | … | … | … | … |

The **Description** column: prefer `summary`, fall back to `description` from the OpenAPI spec. If neither exists, write a short description yourself based on the method, path, and operationId. For paginated endpoints (detected by request/response shape — see Step 6), append " _(paginated)_" to the description.

Also list any index files that will be created or updated (e.g. `src/api/users/index.ts`, `src/api/index.ts`).

Note any files that **already exist** — those will be skipped.

Then ask: **"Confirm creating the above files or not?? (yes/no)"**

Wait for the user's reply before proceeding.

## Step 6 — Generate files

Only run this step after the user confirms.

### 6 — Immediately after user confirms

Use `TodoWrite` to create a todo list with every file that will be **created** or **updated** (one item per file). Include endpoint files, index files, and `src/api/index.ts`. Label each item clearly — prefix new files and updated files. Mark items as `in_progress` → `done` as you go — do not batch; update each item immediately after writing its file.

### 6a. Endpoint files

For each endpoint, create `src/api/{tag_lowercase}/{operationId_camelCase}.ts`.

Skip files that already exist — note them with "already exists, skipped".

**DTO naming rule**: Always name DTOs using the `operationId` in PascalCase:
- Request body interface → `{OperationId}Request` (e.g. `CreateUserRequest`, `LoginRequest`)
- Response interface → `{OperationId}Response` (e.g. `CreateUserResponse`, `LoginResponse`)
- For paginated responses where `PagedList<T>` wraps an item → `{OperationId}ResponseItem` (e.g. `GetUsersResponseItem`)

**Derive types from the OpenAPI schema:**
- Required fields → non-nullable (e.g. `firstName: string`)
- Optional / nullable fields → `field?: string | null` or `field?: string`
- `format: uuid` → `string`
- `format: date` or `format: date-time` → `string`
- Array → `field: ItemType[]`
- `$ref` → inline the referenced schema properties (don't import from another file)

**Standard endpoint pattern** (authenticated, uses axiosInstance directly):
```typescript
import axiosInstance from "@/api/axiosInstance";

export interface GetUserByIdResponse {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  username?: string | null;
  email?: string | null;
  createdAt: string;
}

export const getUserById = async (id: string): Promise<GetUserByIdResponse> => {
  const r = await axiosInstance.get<GetUserByIdResponse>(`/api/users/${id}`);
  return r.data;
};
```

**Paginated endpoints** — detect when: the request accepts `pageNumber`/`pageSize`/`sortBy`/`sortDirection`/`searchTerm` fields, OR the response shape matches `PagedList` (`items`, `pageNumber`, `pageSize`, `totalItems`, `totalPages`, `hasNextPage`, `hasPreviousPage`). When paginated:
- **Request**: import and use `PagedListFilter` from `@/types/PagedListFilter` — do **not** define a custom request interface
- **Response**: import and use `PagedList<TItem>` from `@/types/PagedList` — do **not** redefine the wrapper fields; define only the item interface as `{OperationId}ResponseItem`

```typescript
import axiosInstance from "@/api/axiosInstance";
import { PagedListFilter } from "@/types/PagedListFilter";
import { PagedList } from "@/types/PagedList";

export interface GetUsersResponseItem {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  username?: string | null;
  email?: string | null;
  createdAt: string;
}

export const getUsers = async (params?: PagedListFilter): Promise<PagedList<GetUsersResponseItem>> => {
  const r = await axiosInstance.get<PagedList<GetUsersResponseItem>>("/api/users", { params });
  return r.data;
};
```

**Unauthenticated endpoints** (login, register, refresh-token): receive `axios: AxiosInstance` as first parameter and strip the Authorization header. Follow the exact pattern in `src/api/auth/login.ts`:
```typescript
import { AxiosInstance } from "axios";

export interface LoginRequest { ... }
export interface LoginResponse { ... }  // or reuse TokenResponse from @/types/TokenResponse

export const login = async (axios: AxiosInstance, data: LoginRequest): Promise<LoginResponse> => {
  const r = await axios.post<LoginResponse>("/api/auth/login", data, {
    headers: { Authorization: undefined },
  });
  return r.data;
};
```

**`TokenResponse`** is already defined at `@/types/TokenResponse` — import and reuse it instead of redefining. Check if a type already exists in `src/types/` before defining a new one.

**DELETE endpoints**: no request body; take `id: string` as a function param; return `void`.
```typescript
export const deleteUser = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/api/users/${id}`);
};
```

**PUT/GET with path param**: include `id: string` as a named param in the function signature.

### 6b. Index file

Create or update `src/api/{tag_lowercase}/index.ts` to wrap all endpoints for that tag:

```typescript
import axiosInstance from "../axiosInstance";
import { getUsers } from "./getUsers";
import { getUserById } from "./getUserById";
import { createUser, CreateUserRequest } from "./createUser";
import { updateUser, UpdateUserRequest } from "./updateUser";
import { deleteUser } from "./deleteUser";
import { PagedListFilter } from "@/types/PagedListFilter";

const usersApi = {
  getUsers: (params?: PagedListFilter) => getUsers(params),
  getUserById: (id: string) => getUserById(id),
  createUser: (data: CreateUserRequest) => createUser(data),
  updateUser: (id: string, data: UpdateUserRequest) => updateUser(id, data),
  deleteUser: (id: string) => deleteUser(id),
};

export default usersApi;
```

For unauthenticated endpoints, bind `axiosInstance` in the index wrapper:
```typescript
login: (data: LoginRequest) => login(axiosInstance, data),
```

### 6c. Update src/api/index.ts

Read the current `src/api/index.ts`. Add the new tag only if it's not already imported:

```typescript
import authApi from "./auth";
import usersApi from "./users";
import rolesApi from "./roles";

const mainApi = {
  auth: authApi,
  users: usersApi,
  roles: rolesApi,
};

export default mainApi;
```

## Conventions to follow

- DTOs live **inside** each endpoint file — no separate `types.ts`
- No comments explaining what the code does
- No extra error handling — `axiosInstance` already handles 401 and logging
- No feature flags or backwards-compat shims
- Inline `$ref` schemas rather than importing cross-file
- For paginated endpoints, always import `PagedListFilter` from `@/types/PagedListFilter` (request) and `PagedList<T>` from `@/types/PagedList` (response) — never redefine these shapes inline
