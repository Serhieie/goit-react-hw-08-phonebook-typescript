import { settings, settings2 } from 'helpers/deleteModalSettings';
import { useRef } from 'react';
import { useTheme } from 'helpers/hooks/theme-hook';
import Modal, { Styles } from 'react-modal';
import { ModalFordeleteProps } from './ContactTableItem.types';

Modal.setAppElement('#root');

export const ModalFordelete: React.FC<ModalFordeleteProps> = ({
  contact,
  modalIsOpen,
  closeModal,
  handleDelete,
}) => {
  const { isThemeDark } = useTheme();
  const subtitle = useRef<HTMLHeadingElement>(null);
  return (
    <Modal
      style={isThemeDark ? (settings2 as Styles) : (settings as Styles)}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Delete Confirmation"
      className="md:w-[290px] md:p-6 md3:w-[420px] md3:p-12"
    >
      <h2
        ref={subtitle}
        className={`${
          isThemeDark ? 'text-darkFontDark' : 'text-darkFont'
        } text-center   text-2xl md:text-sm `}
      >
        Delete contact{' '}
        <span className="font-bold text-green-700">{contact.name}</span>?
      </h2>
      <div
        className="flex jusrify-center items-center mx-auto mt-10 
             md:mt-6 gap-1 "
      >
        <button
          onClick={() => handleDelete(contact.id)}
          className={`${
            isThemeDark
              ? ' bg-deleteBtnColorDark hover:bg-deleteBtnHoverColorDark text-darkFontDark '
              : ' bg-deleteBtnColor hover:bg-deleteBtnHoverColor text-lightPartsColor '
          }text-4  
            border-none py-3 px-10 rounded-0.5 cursor-pointer 
            duration-300 mx-auto  md:py-2 md:px-5
             font-light 2xl:text-xl`}
        >
          Delete
        </button>
        <button
          onClick={closeModal}
          className={`${
            isThemeDark
              ? ' bg-buttonColorDark text-darkFontDark hover:text-lightPartsColorDark hover:bg-buttonHoverColorDark '
              : ' bg-buttonColor text-lightPartsColor hover:bg-buttonHoverColor '
          }text-4  
            border-none py-3 px-10 rounded-0.5 cursor-pointer 
            duration-300 mx-auto  md:py-2 md:px-5
            font-light 2xl:text-xl`}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};
