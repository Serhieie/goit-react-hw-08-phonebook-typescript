import { getRandomNumber } from '../../../helpers/getRandomNumber';
import {
  gradientClasses,
  blurSizes,
  GradientColor,
} from 'helpers/constants/gradient';
import { ShineProps } from '../Shines.types';

const MediumShine: React.FC<ShineProps> = ({ isThemeDark, left, top }) => {
  //operations with  helpers static object
  const colorKeys = Object.keys(gradientClasses) as GradientColor[];
  const randomColorKey: GradientColor =
    colorKeys[Math.floor(Math.random() * colorKeys.length)];

  //getting tailwind format classes for color of shinnes from helpers static object
  const randomGradientClasses: string[] = gradientClasses[randomColorKey];

  return (
    <>
      <div
        className={`pointer-events-none w-32 h-32 bg-transparent 
        bg-opacity-50  rounded-lg blur-md absolute
        z-0 ssm:hidden`}
        style={{ left: `${left}px`, top: `${top}px` }}
      >
        <div
          className={`${
            isThemeDark
              ? `${randomGradientClasses[0]} ${randomGradientClasses[1]}`
              : `${randomGradientClasses[0]} ${randomGradientClasses[1]}`
          }absolute top-1/2 left-1/2 w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 
          bg-gradient-to-b animate-shine blur-lg rounded-full pointer-events-none`}
        ></div>
      </div>
    </>
  );
};

interface generateMediumShinesArgs {
  count: number;
  isThemeDark: boolean;
}

//generating amount of  Components how many we need
const generateMediumShines = ({
  count,
  isThemeDark,
}: generateMediumShinesArgs): JSX.Element[] => {
  const shines: JSX.Element[] = [];

  //preventing generation over the screen coordinates
  const paddingLeftRight: number = 10;
  const paddingTopBottom: number = 25;
  const maxWidth: number = window.innerWidth - (paddingLeftRight * 2 + 150);
  const maxHeight: number = window.innerHeight - (paddingTopBottom * 2 + 200);

  //generation starts here
  for (let i = 0; i < count; i += 1) {
    const randomBlurIndex: number = getRandomNumber(0, blurSizes.length - 1);
    const blurSize: string = blurSizes[randomBlurIndex];

    let left: number = getRandomNumber(paddingLeftRight, maxWidth);
    let top: number = getRandomNumber(paddingTopBottom, maxHeight);

    shines.push(
      <MediumShine
        key={i}
        isThemeDark={isThemeDark}
        left={left}
        top={top}
        blurSize={blurSize}
      />
    );
  }
  return shines;
};

export { generateMediumShines };
