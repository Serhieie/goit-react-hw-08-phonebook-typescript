import { AiOutlineUserDelete } from 'react-icons/ai';
import { PulseLoader } from 'react-spinners';
import normalizePhoneNumber from 'helpers/numberNormalize';
import { ModalFordelete } from './ModalForDelete';
import { useState } from 'react';
import { useDeleteContactMutation } from '../../../redux/contact/contacts-api';
import { useTheme } from '../../../helpers/hooks/theme-hook';
import { ContactTableItemProps } from './ContactTableItem.types';

//ContactTableItem + Modal window for contact delete
export const ContactTableItem: React.FC<ContactTableItemProps> = ({
  contact,
  index,
}) => {
  const { isThemeDark } = useTheme();
  const windowWidth: number = window.innerWidth;
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = (id: string): void => {
    deleteContact({ id });
    setIsOpen(false);
  };

  const openModal = (): void => {
    setIsOpen(true);
  };

  return (
    <tr
      className={`${
        isThemeDark
          ? ' border-tableBorderColorDark '
          : ' border-tableBorderColor '
      } border-b-2  `}
    >
      <td
        width="5%"
        className={`${
          isThemeDark ? ' bg-lightPartsColorDark ' : ' bg-lightPartsColor '
        }p-1 text-cente pl-4 ssm2:pl-2`}
      >
        {index + 1}
      </td>
      <td
        width="44%"
        className={`${
          isThemeDark ? ' bg-lightPartsColorDark ' : ' bg-lightPartsColor '
        }p-1 text-center  user-selectable  md:text-md   `}
      >
        {contact.name}
      </td>
      <td
        width="42%"
        className={`${
          isThemeDark ? ' bg-lightPartsColorDark ' : ' bg-lightPartsColor '
        }p-1 text-center   md:text-md  user-selectable `}
      >
        {normalizePhoneNumber(contact.number)}
      </td>
      <td
        width="15%"
        className={`${
          isThemeDark ? ' bg-lightPartsColorDark ' : ' bg-lightPartsColor '
        } p-1 text-center   md:text-md   pr-3 1xl2:pr-6 `}
      >
        <button
          id="delete-btn"
          onClick={openModal}
          disabled={isDeleting}
          className={` ${
            isThemeDark
              ? ' bg-buttonColorDark hover:bg-buttonHoverColorDark text-lightPartsColorDark hover:text-darkFontDark'
              : ' bg-buttonColor hover:bg-buttonHoverColor text-lightPartsColor '
          } mx-auto border-none 1xl2:text-lg
           py-1 px-2 min-w-[50px] min-h-[28px] text-xs cursor-pointer 
           duration-300 flex text-center items-center 
            rounded-sm font-light justify-center sm:min-h-[20px] sm:min-w-[30px]`}
        >
          {isDeleting ? (
            <PulseLoader
              color={`${isThemeDark ? '#3f78cc ' : '#F5DEB3 '}`}
              size="2px"
            />
          ) : windowWidth < 768 ? (
            <AiOutlineUserDelete style={{ marginRight: '4px' }} />
          ) : (
            'Delete'
          )}
        </button>
      </td>
      <ModalFordelete
        contact={contact}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleDelete={handleDelete}
      />
    </tr>
  );
};
