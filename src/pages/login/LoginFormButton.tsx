import { PulseLoader } from 'react-spinners';
import { useTheme } from 'helpers/hooks/theme-hook';
import { LoginFormButtonProps } from './Login.types';

export const LoginFormButton: React.FC<LoginFormButtonProps> = ({
  windowSize,
  text,
  isLoading,
}) => {
  const { isThemeDark } = useTheme();
  //styles for btn
  const themeStyles: string = `
  ${windowSize.height > 460 ? 'md3:mt-24' : 'md3:mt-4  '} 
  ${
    isThemeDark
      ? 'shadow-none hover:bg-buttonHoverColorDark text-buttonTextColorDark hover:text-lightPartsColorDark bg-buttonColorDark'
      : 'shadow-shadowBox hover:bg-buttonHoverColor text-buttonTextColor bg-buttonColor'
  } 
     text-center text-lg md:w-48 font-light w-40 h-11 rounded-sm border-none outline-none 
      mx-auto cursor-pointer shadow-md mt-28 mb-8 flex items-center justify-around transition-all duration-300 
      ssm:w-40 ssm:h-10 md2:text-sm `;

  return (
    <button type="submit" disabled={isLoading} className={themeStyles}>
      {isLoading ? (
        <PulseLoader
          color={`${isThemeDark ? '#3f78cc ' : '#F5DEB3 '}`}
          size="6px"
        />
      ) : (
        <>{text}</>
      )}
    </button>
  );
};
