import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

axiosInstance.interceptors.request.use(async (config) => {
  if (typeof window === 'undefined') {
    // Next Server: gọi thẳng backend, đính token từ cookie
    const { cookies } = await import('next/headers');
    const cookieStore = await cookies();
    const token = cookieStore.get('accessToken')?.value;
    config.baseURL = process.env.API_URL;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } else {
    // Client: gọi qua Next.js proxy
    config.baseURL = window.location.origin;
    config.withCredentials = true; // đảm bảo cookie được gửi đi
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') // Next Server đã thử refresh nhưng không thành công
        window.location.href = '/login';
    }
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
