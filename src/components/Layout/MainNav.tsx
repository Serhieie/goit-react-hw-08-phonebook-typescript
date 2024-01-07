import { NavLink } from 'react-router-dom';
import { MainNavTypes } from './Layout.types';
import { navLinkStyles } from './Layout-parts-styles/NavLink.styles';

export const MainNav: React.FC<MainNavTypes> = ({
  isThemeDark,
  isLoggedIn,
}) => {
  const navStyles: string = `${
    isThemeDark
      ? 'text-blue-300 after:bg-blue-500 '
      : 'text-filterTextColor after:bg-filterTextColor '
  } ${({ isActive }: { isActive: boolean }): string =>
    isActive ? 'active' : ''} 
        ${navLinkStyles}`;

  return (
    <div
      className="flex gap-12 ml-auto md:mr-[35%] 
    md:justify-center md:mx-auto ssm:gap-4"
    >
      <NavLink className={navStyles} to="/home">
        Home
        <span className="w-full absolute scale-x-0 top-8 bg-transparent"></span>
      </NavLink>
      {isLoggedIn ? (
        <NavLink className={navStyles} to="/contacts">
          Contacts
          <span className="w-full absolute scale-x-0 top-8 bg-transparent"></span>
        </NavLink>
      ) : null}
    </div>
  );
};
