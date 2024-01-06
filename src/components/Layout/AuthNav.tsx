import { NavLink } from 'react-router-dom';
// import { navLinkStyles } from './Layout-parts-styles/NavLink.styles';
import { AuthNavProps } from './Layout.types';

export const AuthNav: React.FC<AuthNavProps> = ({ isThemeDark }) => {
  // const navStyles = `${
  //   isThemeDark
  //     ? 'text-blue-300 after:bg-blue-500 '
  //     : 'text-filterTextColor after:bg-filterTextColor '
  // }
  //   ${navLinkStyles}
  // `;

  const navStyles = `${
    isThemeDark
      ? 'text-blue-300 after:bg-blue-500 '
      : 'text-filterTextColor after:bg-filterTextColor '
  } ${({ isActive }: { isActive: boolean }): string =>
    isActive ? 'active' : ''} 
        md:text-sm ssm:text-xs md3:text-2xl after:bottom-0 py-0 after:opacity-40 relative opacity-50
             hover:opacity-100  duration-[600ms]
             hover:brightness-125 after:transition-all after:duration-300 
             after:content after:absolute after:left-0 after:right-0 after:h-[0.4px] 
             after:rounded-xl after:transform after:origin-bottom 
              after:scale-x-0 hover:after:scale-x-100 hover flex flex-col`;
  return (
    <div className="flex gap-8 w-full">
      <div>
        <NavLink className={navStyles} to="/">
          StoneBook
        </NavLink>
      </div>
      <div className="flex gap-8 ml-auto">
        <NavLink className={navStyles} to="/login">
          Login
          <span className="w-full absolute scale-x-0  top-8 bg-transparent"></span>
        </NavLink>
        <NavLink className={navStyles} to="/registration">
          Registration
        </NavLink>
      </div>
    </div>
  );
};
