import { generateExtraSmallShines } from './shines-creators/ExtraSmallShine';
import { useTheme } from 'helpers/hooks/theme-hook';
import { generateMediumShines } from './shines-creators/MediumShine';
import { generateBigShines } from './shines-creators/BigShines';
import React, { useState, useEffect } from 'react';

export const NoPageShine: React.FC = () => {
  const { isThemeDark } = useTheme();
  const [smallShines, setSmallShines] = useState<JSX.Element[]>([]);
  const [mediumShines, setMediumShines] = useState<JSX.Element[]>([]);
  const [bigShines, setBigShines] = useState<JSX.Element[]>([]);

  //start to generate shines just for 404 page
  useEffect(() => {
    const generateShines = async () => {
      const small = generateExtraSmallShines({ count: 40, isThemeDark });
      const medium = generateMediumShines({ count: 12, isThemeDark });
      const big = generateBigShines({ count: 5, isThemeDark });

      // Delayed setting of state using setTimeout
      setTimeout(() => {
        setSmallShines(small);
      }, 0);

      setTimeout(() => {
        setMediumShines(medium);
      }, 1000);

      setTimeout(() => {
        setBigShines(big);
      }, 2000);
    };

    generateShines();
  }, [isThemeDark]);

  return (
    <>
      {smallShines}
      {mediumShines}
      {bigShines}
    </>
  );
};
