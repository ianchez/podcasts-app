import React, { useContext } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';

import { PodcastsContext } from '../../contexts/podcasts';
import './index.css';

const Header: React.FC<{}> = () => {
  const { state } = useNavigation();
  const navigate = useNavigate();
  const { isLoading } = useContext(PodcastsContext);
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
      {(state !== 'idle' || isLoading) &&
        <span className='pulsating-circle' />
      }
    </div>
  );
}

export default Header;
