interface StudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const StudentModal: React.FC<StudentModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative mx-auto w-full max-w-md p-6 sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
        <div className="relative max-h-[90vh] overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
