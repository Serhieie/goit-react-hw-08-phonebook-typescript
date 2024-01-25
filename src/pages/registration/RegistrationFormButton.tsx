import { PulseLoader } from 'react-spinners';
import { useTheme } from 'helpers/hooks/theme-hook';
import { RegistrationFormButtonProps } from './Registration.types';
import { registrationSubmitBtnStyles } from './Registration.styles';

export const RegistrationFormButton: React.FC<RegistrationFormButtonProps> = ({
  isLoading,
}) => {
  const { isThemeDark } = useTheme();
  const btnStyles: string = `${
    isThemeDark
      ? ' shadow-none hover:bg-buttonHoverColorDark text-buttonTextColorDark hover:text-lightPartsColorDark bg-buttonColorDark'
      : '  shadow-shadowBox hover:bg-buttonHoverColor text-buttonTextColor bg-buttonColor'
  } ${registrationSubmitBtnStyles}`;

  return (
    <button type="submit" disabled={isLoading} className={btnStyles}>
      {isLoading ? (
        <PulseLoader
          color={`${isThemeDark ? '#3f78cc ' : '#F5DEB3 '}`}
          size="6px"
        />
      ) : (
        <>Registration</>
      )}
    </button>
  );
};
