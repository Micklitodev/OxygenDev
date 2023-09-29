export type Recipes = {
  description: string;
  name: string;
};

export interface UserInput {
  name: string;
  description: string;
}

// components/ui

export interface LabelProps {
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