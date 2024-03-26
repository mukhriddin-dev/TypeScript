export interface USER<T> {
  passwod: T;
  user_name: T;
  hash_key: T;
  is_auth: boolean;
}

export interface PERMISSION {
  isAdmin: boolean;
  isSuper: boolean;
}

export interface ADMIN extends USER<string | number> {
  role: string;
  permission: PERMISSION;
}

export interface ACCOUNT<T> {
  login: string;
  passwod: string;
  id: T;
}

export interface USER_INFO {
  full_name: string;
  age: number;
}

export interface USER_INFO1 {
  full_name: string;
  age: boolean;
}
