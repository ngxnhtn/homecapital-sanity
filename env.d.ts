declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SANITY_DATASET: string;
      SANITY_PROJECT_ID: string;
      SANITY_API_VERSION: string;
    }
  }
}

export {};
