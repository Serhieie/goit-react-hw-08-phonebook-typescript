import { HomePageShine } from 'components/Shine/HomePageShine';
import { Helmet } from 'react-helmet';

interface NotLoggedHomeProps {
  isThemeDark: boolean;
}

const NotLoggedHome: React.FC<NotLoggedHomeProps> = ({ isThemeDark }) => {
  return (
    <div className="md:mt-[54px] ssm:mt-[48px] w-full 1xl2:mt-0">
      <Helmet>
        <title>StoneHome</title>
      </Helmet>
      {isThemeDark ? (
        <div
          className={`  bg-dark-book md:bg-mobile-dark-book
          h-[92vh] w-[100%] bg-cover bg-center bg-no-repeat bg-custom-class
           flex -z-30 `}
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <h1
            style={{
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
            className=" font-bigFont bg-gradient-to-r
             from-indigo-500 from-10% via-sky-500 via-30%
              to-emerald-500 to-90%  ssm2:text-4xl  md:text-7xl md3:text-8xl 1xl2:text-9xl self-end md:mb-32 
             md:ml-8 md3:mb-24 md3:ml-40 min-h-10 "
          >
            Stone Contact Book
          </h1>
        </div>
      ) : (
        <div
          className={`h-[92vh]  bg-yellow-book
          md:bg-mobile-yellow-book  mt-100 bg-cover
          bg-center bg-no-repeat bg-custom-class flex -z-30`}
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <h1
            style={{ WebkitBackgroundClip: 'text', color: 'transparent' }}
            className=" font-bigFont bg-gradient-to-r from-amber-200
             from-10% via-orange-400 via-30% to-yellow-600 to-90% 
             ssm2:text-4xl  md:text-7xl md3:text-8xl 1xl2:text-9xl self-end md:mb-32 
             md:ml-8 md3:mb-24 md3:ml-40 min-h-10"
          >
            Stone Contact Book
          </h1>
        </div>
      )}
      <HomePageShine isThemeDark={isThemeDark} />
    </div>
  );
};

export default NotLoggedHome;
