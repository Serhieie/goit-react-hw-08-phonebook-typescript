import { handleRegistration } from '../../helpers/validateRegistration';
import { RegistrationFormButton } from './RegistrationFormButton';
import { useEffect, useState } from 'react';
import { Policy } from './Policy';
import { RegLogInputs } from './RegistrationInputs/RegistrInputs';
import { RegistrationShine } from 'components/Shine/RegistrationShine';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { registrationSchema } from '../../helpers/constants/schema';
import { useAuth } from '../../helpers/hooks/auth-selector-hook';
import { useTheme } from '../../helpers/hooks/theme-hook';
import { registrationFormStyles } from './Registration.styles';
import { Helmet } from 'react-helmet';
import { initialValuesTypes } from './Registration.types';

//Formik state
const initialValues: initialValuesTypes = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

//Registration form is not have setting to LS option
const Registration: React.FC = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const { isThemeDark } = useTheme();

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  //resize listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = async (
    values: { name: string; email: string; password: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    const { name, email, password } = values;
    const userData = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    };

    //validation for inputs
    handleRegistration(userData, dispatch);
    resetForm();
  };

  const formStyles: string = `
          ${
            windowSize.height > 460
              ? 'md3:w-5/12 pb-16 pt-20 '
              : 'md3:w-10/12  md2:mt-1 pb-8'
          }  
          ${
            isThemeDark
              ? ' shadow-shadowBoxDark from-smallWraperGradient1Dark to-smallWraperGradient2Dark '
              : ' from-smallWraperGradient1 shadow-shadowBox to-smallWraperGradient2 '
          } ${registrationFormStyles} `;

  return (
    <>
      <Helmet>
        <title>StoneBook-Registration</title>
      </Helmet>
      <Formik
        initialValues={initialValues}
        validationSchema={registrationSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form autoComplete="off" className={formStyles}>
          <h1 className="text-center text-4xl m-0 mt-1 md:text-2xl md2:text-2xl font-normal">
            Registration
          </h1>
          <RegLogInputs windowSize={windowSize} />
          <Policy windowSize={windowSize} />
          <RegistrationFormButton isLoading={isRefreshing} />
        </Form>
      </Formik>
      <RegistrationShine windowSize={windowSize} />
    </>
  );
};

export default Registration;
