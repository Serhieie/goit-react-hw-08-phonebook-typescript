interface HomePageShineProps {
  isThemeDark: boolean;
}

interface NoPageShineProps {
  isThemeDark: boolean;
}

interface WindowSize {
  height: number;
  width: number;
}

interface RegistrationShineProps {
  isThemeDark: boolean;
  windowSize: WindowSize;
}

interface ShineProps {
  isThemeDark: boolean;
  left: number;
  top: number;
  blurSize: string;
}

export type {
  HomePageShineProps,
  NoPageShineProps,
  RegistrationShineProps,
  ShineProps,
};
