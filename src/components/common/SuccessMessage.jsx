import { AiOutlineCheckCircle } from "react-icons/ai";

const SuccessMessage = ({ message }) => {
  return (
    <div className="bg-green-100 border-green-500 border-l-4 p-4 flex items-center my-3 rounded-md">
      <div className="text-green-500">
        <AiOutlineCheckCircle size={32} />
      </div>
      <div className="ml-3 text-green-900">
        <p className="text-sm font-semibold">{message}</p>
        <p className="text-xs mt-1">Te contactaremos cuando antes vía mail.</p>
      </div>
    </div>
  );
};

export default SuccessMessage;
