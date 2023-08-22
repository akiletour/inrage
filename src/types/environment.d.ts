declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      BACKEND_URL: string;
      WORDPRESS_API_URL: string;
      AKISMET_API_KEY: string;

      // Mailjet API
      MJ_APIKEY_PUBLIC: string;
      MJ_APIKEY_PRIVATE: string;
    }
  }
}
