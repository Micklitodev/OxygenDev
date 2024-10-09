// components ui
export interface LabelProps {
  className?: string;
  htmlFor: string;
  children?: React.ReactNode;
}

export interface InputProps {
  className?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

//login
export interface LoginInput {
  email: string;
  password: string;
}

//signup
export interface SignUpInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// dashboard component
export interface ProfileComponentProps {
  imageURL?: string;
  name: string;
  bio?: string;
  email: string;
  phone?: string;
  location?: string;
  billcycle?: string;
}

//data types
export type Token = {
  token: string;
};
