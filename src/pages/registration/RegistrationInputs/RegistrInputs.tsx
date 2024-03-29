import { NameAndEmail } from './NameAndEmail';
import { useTheme } from 'helpers/hooks/theme-hook';
import { inputsStyles } from '../Registration.styles';
import { RegLogInputsProps } from '../Registration.types';
import { PasswordAndConfirm } from './PasswordAndConfirm';

export const RegLogInputs: React.FC<RegLogInputsProps> = ({ windowSize }) => {
  const { isThemeDark } = useTheme();
  const widthClass = windowSize.height > 460 ? 'md3:mt-2' : 'md3:mt-0';
  const withInputClass = windowSize.height > 460 ? 'md3:mt-2' : 'md3:mt-0';

  const fieldsStyle: string = `${
    isThemeDark
      ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark '
      : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont '
  } ${inputsStyles}`;

  return (
    <>
      <NameAndEmail
        widthClass={widthClass}
        withInputClass={withInputClass}
        fieldsStyle={fieldsStyle}
      />
      <PasswordAndConfirm
        withInputClass={withInputClass}
        fieldsStyle={fieldsStyle}
      />
    </>
  );
};
