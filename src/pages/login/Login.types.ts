export interface LoginInputsProps {
  windowSize: { width: number; height: number };
  isThemeDark: boolean;
}

export interface LoginFormButtonProps {
  windowSize: { height: number; width: number };
  text: string;
  isLoading: boolean;
  isThemeDark: boolean;
}
