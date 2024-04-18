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

  const showLoadingState = state !== 'idle' || isLoading;

  return (
    <div className='header'>
      <h5
        className="pressable"
        onClick={handleLogoClick}
      >
        Podcaster
      </h5>

      {showLoadingState && <span className='pulsating-circle' />}
    </div>
  );
}

export default Header;
