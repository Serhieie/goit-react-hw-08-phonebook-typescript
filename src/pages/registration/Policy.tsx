import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/theme-selectors';

interface PolicyProps {
  windowSize: { height: number; width: number };
}

export const Policy: React.FC<PolicyProps> = ({ windowSize }) => {
  const isThemeDark: boolean = useSelector(getTheme);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  //just stilization of checkbox
  const handleCheckboxChange = (): void => {
    setIsChecked(prevState => !prevState);
  };

  const widthClass: string = ` ${
    windowSize.height > 460 ? 'md3:mt-9' : 'md3:mt-2'
  }  mt-10 w-full max-w-[500px] mx-auto flex relative 1xl2:mt-3`;
  const checkBoxStyle: string = `${
    isThemeDark
      ? 'border-none checked:bg-lightPartsColorDark bg-sky-700'
      : 'border-darkFont checked:bg-buttonColor bg-lightPartsColor'
  } mr-4 mt-0.5   appearance-none rounded border checked:border-transparent
        focus:outline-none`;

  return (
    <div className={widthClass}>
      <input
        className={checkBoxStyle}
        style={{ flex: 'none', width: '24px', height: '24px' }}
        name="user-privacy"
        type="checkbox"
        id="user-privacy"
        value="true"
        required
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isChecked && (
        <span className="absolute top-1 left-0.5 pointer-events-none p-0.5 w-full">
          <FaCheck size={16} className="pointer-events-none" />
        </span>
      )}

      <label htmlFor="user-privacy">
        I accept the terms and conditions of the{' '}
        <span
          className={`${
            isThemeDark ? 'text-teal-400' : 'text-teal-600'
          } ml-2 cursor-pointer`}
        >
          Privacy Policy
        </span>
      </label>
    </div>
  );
};
