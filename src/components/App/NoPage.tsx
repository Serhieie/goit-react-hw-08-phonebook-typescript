import { NoPageShine } from '../Shine/NoPageShine';
import { getRandomAvatarPath } from 'helpers/randomAvatar';
import { useMemo } from 'react';
import { useTheme } from 'helpers/hooks/theme-hook';

export const NoPage: React.FC = () => {
  const { isThemeDark } = useTheme();
  const avatarPath: string = useMemo(() => getRandomAvatarPath(), []);

  return (
    <div
      className="select-none mt-0 h-[92vh] flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${avatarPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div className="relative bg-transparent bg-opacity-20 p-14  rounded-[60px] backdrop-filter backdrop-blur-sm">
        <h1
          className={`${
            isThemeDark ? 'text-blue-300' : 'text-yellow-200'
          } font-errorFont md:text-[120px] text-[200px] text-center select-none font-extrabold p-0 mt-10`}
        >
          404
        </h1>
        <p
          className={`${
            isThemeDark ? 'text-blue-300' : 'text-yellow-200'
          } text-lg font-pixel text-center mt-20 px-2`}
        >
          Page not found
        </p>
      </div>
      <NoPageShine />
    </div>
  );
};
