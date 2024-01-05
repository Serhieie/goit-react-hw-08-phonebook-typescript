import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterValue } from '../../redux/filter/filterSlice';
import { getFilterValue } from '../../redux/filter/filter-selectors';
import { getTheme } from '../../redux/theme/theme-selectors';
import { TbUserSearch } from 'react-icons/tb';
import {
  filterInputStyles,
  filterIconStyles,
  filterLabelStules,
} from './Filter-parts-styles/Filter.styles';

export const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const filterValue: string = useSelector(getFilterValue);
  const isThemeDark: boolean = useSelector(getTheme);

  //need for saving in local storage
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(changeFilterValue(value));
  };

  const inputStyles: string = `${
    isThemeDark
      ? ' bg-sky-900 text-darkFontDark placeholder:text-filterPlaceholderColorDark '
      : 'bg-lightPartsColor text-darkFont placeholder:text-filterPlaceholderColor  '
  } ${filterInputStyles}`;

  const iconStyles: string = `
        ${
          !isThemeDark
            ? ' text-filterPlaceholderColor '
            : ' text-filterPlaceholderColorDark '
        } ${filterIconStyles}
        `;

  const labelStyles: string = `${
    isThemeDark ? 'bg-tableHeaderBackgroundDark' : 'bg-filterLabelColor'
  }  ${filterLabelStules}`;

  return (
    <label className={labelStyles}>
      <TbUserSearch className={iconStyles} />
      <input
        placeholder="Enter name for filter"
        type="text"
        value={filterValue}
        onChange={handleInputChange}
        className={inputStyles}
      />
    </label>
  );
};
