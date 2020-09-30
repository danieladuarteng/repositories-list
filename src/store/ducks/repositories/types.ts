/**
 * Actions types
 */

// ao invés de const usamos enum para facilitar o intelisense da IDE
export enum RepositoriesTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  LOAD_SUCCESS = "@repositories/LOAD_SUCCESS",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE",
}

/**
 * Data types (formats)
 */
export interface Repository {
  id: number;
  name: string;
}

/**
 * State type
 */
export interface RepositoriesState {
  readonly data: Repository[]; // readonly para ser imutável
  readonly loading: boolean;
  readonly error: boolean;
}
