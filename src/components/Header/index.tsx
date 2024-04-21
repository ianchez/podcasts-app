'use client';

import React, { useContext } from 'react';

import { PodcastsContext } from '../../contexts/PodcastsProvider';
import { PodcastDetailContext } from '../../contexts/PodcastDetailProvider';
import './index.css';

const Header: React.FC<{navigationPath?: string}> = ({navigationPath = '/'}) => {
  // const { state } = useNavigation();
  // const navigate = useNavigate();
  const { isLoading: arePodcastsLoading } = useContext(PodcastsContext);
  const { isLoading: isDetailLoading } = useContext(PodcastDetailContext);

  // const handleLogoClick = () => navigate(navigationPath);
  const handleLogoClick = () => console.log('Logo clicked!');

  const isAppLoading = arePodcastsLoading || isDetailLoading;
  // const showLoadingState = state !== 'idle' || isAppLoading;
  const showLoadingState = isAppLoading;

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
