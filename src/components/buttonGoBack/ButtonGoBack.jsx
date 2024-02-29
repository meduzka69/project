import {useNavigate} from 'react-router-dom';

const ButtonGoBack = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn btn-primary"
    >
      Go Back
    </button>
  );
};

export default ButtonGoBack;