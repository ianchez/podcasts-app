'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { PodcastsContext } from '../../contexts/PodcastsProvider';
import { PodcastDetailContext } from '../../contexts/PodcastDetailProvider';
import SCREENS from '../../constants/screens';
import './index.css';

const Header: React.FC<{ navigationPath?: string }> = ({ navigationPath = SCREENS.HOME.PATH }) => {
  // const { state } = useNavigation();
  const { push } = useRouter();
  const { isLoading: arePodcastsLoading } = useContext(PodcastsContext);
  const { isLoading: isDetailLoading } = useContext(PodcastDetailContext);

  const handleLogoClick = () => push(navigationPath);

  const isAppLoading = arePodcastsLoading || isDetailLoading;
  // const showLoadingState = state !== 'idle' || isAppLoading;
  const showLoadingState = isAppLoading;

  return (
    <div className="header">
      <h5 className="pressable" onClick={handleLogoClick}>
        Podcaster
      </h5>

      {showLoadingState && <span className="pulsating-circle" />}
    </div>
  );
};

export default Header;
