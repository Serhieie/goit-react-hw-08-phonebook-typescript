import { ContactForm } from '../../components/ContactForm/ContactForm';
import { FilterAndTable } from '../../components/App/FilterAndTable';
import { useGetAllContactsQuery } from '../../redux/contact/contacts-api';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Contacts: React.FC = () => {
  const { data, isLoading, error } = useGetAllContactsQuery(undefined);
  const isError: boolean = !!error;
  return (
    <div
      className="flex gap-4 sm:gap-0 justify-around mx-auto 
    w-11/12   p-14 md3:p-4 1xl2:mt-5  ssm:pt-4  rounded shadow-xl
    md:flex-col md:items-center md:text-base md:px-1.5 md:w-11/12
    text-xl min-h-482 ssm:min-h-762 select-none 
    bg-gradient-to-tl 
      relative ssm2:w-[100%] ssm2:p-0  ssm2:m-0 "
    >
      <Helmet>
        <title>Stone-Contacts</title>
      </Helmet>
      <ContactForm />
      <FilterAndTable data={data} error={isError} isLoading={isLoading} />
    </div>
  );
};

Contacts.propTypes = {
  isThemeDark: PropTypes.bool.isRequired,
};

export default Contacts;
