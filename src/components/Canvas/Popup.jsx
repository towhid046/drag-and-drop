const Popup = ({ text, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-gray-800 mb-4">{text}</p>
        <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
