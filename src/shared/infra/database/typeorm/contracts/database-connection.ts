export interface DatabaseConnection {
  connect: (params?: DatabaseConnection.Input) => Promise<void>;
  close: () => Promise<void>;
}

export namespace DatabaseConnection {
  export type Input = {
    host: string;
    database: string;
    port?: number;
    username: string;
    password: string;
  };
}
