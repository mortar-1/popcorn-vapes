export interface AccountProps {
  username: string;
  password: string;
  profilePictureSrc: string;
  info: string;
  id: string;
}

export type Account = AccountProps | undefined;

export interface AccountContextProps {
  account: Account;
  setAccount: (a: Account) => void;
}

export interface AgeProps {
  age: number;
}

export interface NameProps {
  name: string;
}

export type Name = string;

export interface NameContextProps {
  name: Name;
  setName: (n: Name) => void;
}
