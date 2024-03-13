import { boot } from 'quasar/wrappers'
import { useAuthStore } from 'src/stores/auth'
import axios from 'axios'
import { Notify, LoadingBar, LocalStorage} from 'quasar';
import { useRouter } from 'vue-router';

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
    baseURL: process.env.API_BASE_URL || 'http://localhost:8000',
    withCredentials: true,
 })


export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api
  const router = useRouter()
  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  api.interceptors.request.use(
    async (config) => {
      const authStore = useAuthStore();
      const token = authStore.token;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401 && error.response.data.message === 'Unauthenticated.') {
        LocalStorage.clear()
        router.push('/login');
      }

      return Promise.reject(error);
    }
  );

  api.interceptors.request.use((config) => {
    LoadingBar.start();
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      LoadingBar.stop();
      return response;
    },
    (error) => {
      LoadingBar.stop();
      return Promise.reject(error);
    }
  );

})

export { api }
