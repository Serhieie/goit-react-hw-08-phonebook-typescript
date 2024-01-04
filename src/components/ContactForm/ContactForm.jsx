import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { schema } from '../../helpers/constants';
import { succesMessage, nameCheckerError } from 'helpers/notiflix';
import { Inputs } from './ContactFormInput/ContactFormInput';
import normalizePhoneNumber from 'helpers/numberNormalize';
import normalizeName from 'helpers/nameNormalize';
import { FormButton } from './FormButton/FormButton';
import { ErrorMessages } from './ErrorMessages/ErrorMessages';
import {
  useGetAllContactsQuery,
  usePostContactMutation,
} from '../../redux/contact/contacts-api';

const initialValues = {
  name: '',
  phone: '',
};

export function ContactForm({ isThemeDark }) {
  const { data } = useGetAllContactsQuery();
  const [addContact, { isLoading }] = usePostContactMutation();

  const handleSubmit = (values, { resetForm }) => {
    const { name, phone } = values;

    let someNum = normalizePhoneNumber(phone);
    let normName = normalizeName(name);

    //Cheking contact wich already exist
    const isNameExists =
      Array.isArray(data) &&
      data.some(contact => {
        return contact.name.toLowerCase() === normName.toLowerCase();
      });
    const isPhoneExists =
      Array.isArray(data) &&
      data.some(contact => {
        return normalizePhoneNumber(contact.number) === someNum;
      });
    if (isNameExists && isPhoneExists) {
      return nameCheckerError();
    }

    //adding contact
    addContact({ name: normName, number: someNum });
    succesMessage();
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form
        autoComplete="off"
        className={`${
          isThemeDark
            ? ' shadow-shadowBoxDark from-smallWraperGradient1Dark to-smallWraperGradient2Dark '
            : ' from-smallWraperGradient1 shadow-shadowBox to-smallWraperGradient2 '
        }  flex gap-2 flex-col w-1/3 py-20 pr-7 pl-5 rounded-sm
          shadow-lg bg-gradient-to-tr md:py-12 md:px-5 md:min-h-0 md:w-[99%]
          transition-all  overflow-hidden ssm2:w-12/12 ssm2:py-6 ssm2:m-0 ssm2:pt-16`}
      >
        <h1 className="text-center text-3xl m-0 md:text-xl md2:text-xl font-normal">
          Add Contact Field
        </h1>
        <Inputs isThemeDark={isThemeDark} />
        <ErrorMessages />
        <FormButton isLoading={isLoading} isThemeDark={isThemeDark} />
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  isThemeDark: PropTypes.bool.isRequired,
};
