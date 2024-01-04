import { useSelector } from 'react-redux';
import { getTheme, showPass } from '../../redux/theme/theme-selectors';

export const useTheme = (): { isThemeDark: boolean; showPassword: boolean } => {
  const isThemeDark: boolean = useSelector(getTheme);
  const showPassword: boolean = useSelector(showPass);

  return {
    isThemeDark,
    showPassword,
  };
};
