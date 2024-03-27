interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  /**
   * Built-in environment variable.
   * @see Docs https://github.com/chihab/dotenv-run/packages/angular#node_env.
   */
  readonly NODE_ENV: string;
  // Add your environment variables below
  // readonly NG_APP_API_URL: string;
  [key: string]: any;
  readonly API_KEY: string;
  readonly USER_ID: string;
}
