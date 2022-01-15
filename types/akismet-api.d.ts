declare module 'akismet-api' {
  interface AkismetClientOptions {
    key: string
    blog: string
  }

  interface AkismetComment {
    ip: string
    useragent: string
    content: string
    email: string
    name: string
  }

  export class AkismetClient {
    constructor(options: AkismetClientOptions);

    verifyKey(callback?: () => void): Promise<boolean>;

    checkSpam(comment: AkismetComment, callback?: () => void): Promise<boolean>;
  }
}
