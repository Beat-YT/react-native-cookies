declare module '@react-native-cookies/cookies' {
  export interface Cookie {
    name: string;
    value: string;
    path?: string;
    domain?: string;
    version?: string;
    expires?: string;
    secure?: boolean;
    httpOnly?: boolean;
  }

  export interface Cookies {
    [key: string]: Cookie;
  }

  export interface CookieManagerStatic {
    set(url: string, cookie: Cookie, useWebKit?: boolean): Promise<boolean>;
    setFromResponse(url: string, cookie: string): Promise<boolean>;

    get(url: string, useWebKit?: boolean): Promise<Cookies>;
    getFromResponse(url: string): Promise<Cookies>;

    clearAll(useWebKit?: boolean): Promise<boolean>;
    
    /**
     * @platform android
     */
    flush(): Promise<void>;
    removeSessionCookies(): Promise<boolean>;

    /**
     * @platform ios
     */
    getAll(useWebKit?: boolean): Promise<Cookies>;
    
    clearByName(
      url: string,
      name: string,
      useWebKit?: boolean,
    ): Promise<boolean>;


    getString(url: string, useWebKit?: boolean): Promise<string>;
  }

  const CookieManager: CookieManagerStatic;

  export default CookieManager;
}
