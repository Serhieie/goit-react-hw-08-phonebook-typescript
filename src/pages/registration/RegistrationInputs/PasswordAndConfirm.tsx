import { Field, ErrorMessage } from 'formik';
import { useTheme } from 'helpers/hooks/theme-hook';
import { useState } from 'react';
import { PiEyeClosedBold } from 'react-icons/pi';
import { HiMiniEye } from 'react-icons/hi2';
import { InputProps } from '../Registration.types';

export const PasswordAndConfirm: React.FC<InputProps> = ({
  withInputClass,
  fieldsStyle,
}) => {
  const { isThemeDark } = useTheme();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePassword = (field: number): void => {
    if (field === 1) {
      setShowPassword1(prevShowPassword => !prevShowPassword);
    } else if (field === 2) {
      setShowPassword2(prevShowPassword => !prevShowPassword);
    }
  };

  const showPasswordBtnStyles: string = `${
    isThemeDark
      ? ' text-darkFontDark bg-sky-900 placeholder:text-darkFontDark '
      : ' text-darkFont bg-lightPartsColor placeholder:text-darkFont '
  } rounded-r-sm w-12 transition-all`;

  const labelStyles: string = `
    ${withInputClass}
    mt-2 text-xl flex items-center gap-2 md:ml-2 
    md2:text-sm font-light sm:mt-1`;

  return (
    <>
      {' '}
      <label className={labelStyles} htmlFor="user-phone">
        {' '}
        Password{' '}
      </label>
      <div className="flex">
        <Field
          className={`${fieldsStyle}  rounded-l-sm`}
          type={showPassword1 ? 'text' : 'password'}
          name="password"
          id="password"
          min={7}
          placeholder="Enter your password"
          required
        />
        <button
          className={showPasswordBtnStyles}
          type="button"
          onClick={() => togglePassword(1)}
        >
          {showPassword1 ? <HiMiniEye /> : <PiEyeClosedBold />}
        </button>
      </div>
      <div className="text-sm h-4 w-full text-center -mt-2">
        <ErrorMessage
          className=" text-errorMsg text-center m-0 p-0"
          name="password"
          component="div"
        />
      </div>
      <label className={labelStyles} htmlFor="user-confirm-password">
        Confirm Password
      </label>
      <div className="flex">
        <Field
          className={`${fieldsStyle}  rounded-l-sm`}
          type={showPassword2 ? 'text' : 'password'}
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm your password"
          required
        />
        <button
          className={showPasswordBtnStyles}
          type="button"
          onClick={() => togglePassword(2)}
        >
          {showPassword2 ? <HiMiniEye /> : <PiEyeClosedBold />}
        </button>
      </div>
      <div className="text-sm h-4 w-full text-center -mt-2">
        <ErrorMessage
          className=" text-errorMsg text-center m-0 p-0"
          name="confirmPassword"
          component="div"
        />
      </div>
    </>
  );
};
