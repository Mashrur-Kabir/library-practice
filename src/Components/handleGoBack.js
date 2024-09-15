import { useNavigate } from "react-router-dom";

const useGoBack = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return handleBack;
};

export default useGoBack;