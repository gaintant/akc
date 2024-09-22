type ModalProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

const UploadStudentsErrorModal = ({ title, children, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">{title}</h2>
        <div>{children}</div>
        <button
          onClick={onClose}
          className="mt-4 w-full rounded-md bg-red-500 px-4 py-2 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UploadStudentsErrorModal;
