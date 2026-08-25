declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      AKISMET_API_KEY: string

      // Mailjet API
      MJ_APIKEY_PUBLIC: string
      MJ_APIKEY_PRIVATE: string
    }
  }
}
