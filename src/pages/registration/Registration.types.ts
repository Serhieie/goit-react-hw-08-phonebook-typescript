export interface InputProps {
  isThemeDark?: boolean;
  widthClass?: string;
  withInputClass: string;
  fieldsStyle: string;
}

export interface RegLogInputsProps {
  windowSize: { height: number; width: number };
  isThemeDark: boolean;
}

export interface initialValuesTypes {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegistrationFormButtonProps {
  isLoading: boolean;
  isThemeDark: boolean;
}
