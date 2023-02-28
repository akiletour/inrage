declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      WORDPRESS_API_URL: string;
    }
  }
}
