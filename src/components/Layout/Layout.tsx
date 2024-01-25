import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/theme-selectors';
import { Header } from './Header';
import { SuspenseLoader } from '../SuspenseLoader/SuspenseLoader';
import { layoutWrapperStyles } from './Layout-parts-styles/Layout.styles';

const Layout: React.FC = () => {
  const isThemeDark: boolean = useSelector(getTheme);

  const wrapperStyles = `${
    isThemeDark
      ? ' text-darkFontDark from-gradientColor1Dark to-gradientColor2Dark '
      : ' text-darkFont  from-gradientColor1 to-gradientColor2 '
  }
    ${layoutWrapperStyles}`;

  return (
    <div className={wrapperStyles}>
      <Header />
      <main className="w-full ssm:mt-6 md:mt-20 md3:mt-12 relative ">
        <Suspense fallback={<SuspenseLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
