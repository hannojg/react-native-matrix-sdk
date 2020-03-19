declare module 'react-native-matrix-sdk' {

  export interface Credentials {
    user_id: string;
    home_server: string;
    access_token: string;
    refresh_token: string | undefined;
    device_id: string;
  }

  export interface Error {
    error: string;
  }

  export interface MatrixSdkStatic {
    configure(host: string): void;
    // TODO: actually credentials are returned as string, and not as Credentials Type
    login(username: string, password: string): Promise<Credentials>;
    startSession(): Promise<boolean>;
  }

  const MatrixSdk: MatrixSdkStatic;

  export default MatrixSdk;
}
