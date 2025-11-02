import { useNavigate } from "react-router-dom";
import GetStartedModal from "components/Modal/GetStartedModal.js";

const GetStarted = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-brand_secondary min-h-[100vh] flex items-center justify-center">
      <div className="max-w-[800px] w-[90%] text-center">
        <GetStartedModal onClose={() => navigate('/')}/>
      </div>
    </div>
  );
};

export default GetStarted;
