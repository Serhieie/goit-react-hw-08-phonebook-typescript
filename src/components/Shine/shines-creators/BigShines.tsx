import React from 'react';
import { useTheme } from 'helpers/hooks/theme-hook';
import { getRandomNumber } from '../../../helpers/getRandomNumber';
import {
  gradientClasses,
  blurSizes,
  GradientColor,
} from 'helpers/constants/gradient';
import { ShineProps } from '../Shines.types';

const BigShine: React.FC<ShineProps> = ({ left, top, blurSize }) => {
  const { isThemeDark } = useTheme();
  //operations with  helpers static object
  const colorKeys = Object.keys(gradientClasses) as GradientColor[];
  const randomColorKey: GradientColor =
    colorKeys[Math.floor(Math.random() * colorKeys.length)];

  //getting tailwind format classes for color of shinnes from helpers static object
  const randomGradientClasses: string[] = gradientClasses[randomColorKey];

  return (
    <>
      <div
        className={`pointer-events-none w-52 h-52 bg-transparent 
        bg-opacity-50  rounded-lg blur-md absolute
        z-0 ssm:hidden`}
        style={{ left: `${left}px`, top: `${top}px` }}
      >
        <div
          className={`${
            isThemeDark
              ? `${randomGradientClasses[0]} ${randomGradientClasses[1]}`
              : `${randomGradientClasses[0]} ${randomGradientClasses[1]}`
          } absolute top-1/2 left-1/2 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 
          bg-gradient-to-b animate-shine blur-${blurSize} rounded-full pointer-events-none`}
        ></div>
      </div>
    </>
  );
};

interface generateBigShinesArgs {
  count: number;
  isThemeDark: boolean;
}
//generating amount of  Components how many we need
const generateBigShines = ({
  count,
  isThemeDark,
}: generateBigShinesArgs): JSX.Element[] => {
  const shines: JSX.Element[] = [];

  //preventing generation over the screen coordinates
  const paddingLeftRight: number = 10;
  const paddingTopBottom: number = 25;
  const maxWidth: number = window.innerWidth - (paddingLeftRight * 2 + 150);
  const maxHeight: number = window.innerHeight - (paddingTopBottom * 2 + 250);

  // Start generation
  for (let i = 0; i < count; i += 1) {
    const randomBlurIndex: number = getRandomNumber(0, blurSizes.length - 1);
    const blurSize: string = blurSizes[randomBlurIndex];

    let left: number = getRandomNumber(paddingLeftRight, maxWidth);
    let top: number = getRandomNumber(paddingTopBottom, maxHeight);

    shines.push(<BigShine key={i} left={left} top={top} blurSize={blurSize} />);
  }
  return shines;
};

export { generateBigShines };
