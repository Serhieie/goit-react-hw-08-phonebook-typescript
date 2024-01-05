interface RegistrationErrorsProps {
  error: string;
}

export const RegistrationErrors: React.FC<RegistrationErrorsProps> = ({
  error,
}) => {
  return <p className="error-message">{error}</p>;
};
