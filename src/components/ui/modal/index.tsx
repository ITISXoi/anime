import { CloseOutlined } from "@ant-design/icons";

interface Props {
  open: boolean;
  onClose: () => void;
  content: JSX.Element;
}

const Modal = (props: Props) => {
  const { open, onClose, content } = props;
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      {open ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-75 transition-opacity cursor-pointer"
            aria-hidden="true"
          ></div>
          <div
            className="fixed inset-0 z-10 w-screen overflow-y-auto"
            onClick={onClose}
          >
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <div
                className="relative w-full transform overflow-hidden p-0 pt-6 text-left shadow-xl transition-all sm:my-8 sm:max-w-2xl"
                onClick={handleModalContentClick}
              >
                {content}
                <div className="absolute -top-1 right-0">
                  <CloseOutlined onClick={onClose} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
