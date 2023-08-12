declare global {
  interface AppEnvironment {
    NODE_ENV: string
    MAILCHIMP_SIGNUP_URL: string
  }
  interface Window {
    ENV: AppEnvironment
  }
  namespace NodeJS {
    interface ProcessEnv extends AppEnvironment {

    }
  }
}

export {}