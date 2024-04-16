import './index.css';
import { useNavigate } from 'react-router-dom';

const Header: () => JSX.Element = () => {
  const navigate = useNavigate();
  const handleLogoClick: () => void = () => {
    navigate('/')
  };

  return (
    <div className='header'>
      <h5
        className="pressable"
        onClick={handleLogoClick}
      >
          Podcaster
      </h5>
    </div>
  );
}

export default Header;
