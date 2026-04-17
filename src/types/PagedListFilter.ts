export const DEFAULT_PAGE_NUMBER = 1;
export const DEFAULT_PAGE_SIZE = 10;

export interface PagedListFilter {
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: string;
  searchTerm?: string;
}

export function createPagedListFilter(overrides?: Partial<PagedListFilter>): PagedListFilter {
  return {
    pageNumber: DEFAULT_PAGE_NUMBER,
    pageSize: DEFAULT_PAGE_SIZE,
    ...overrides,
  };
}
