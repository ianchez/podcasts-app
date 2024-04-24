import { useContext, useState } from 'react';
import { PodcastsContext } from 'src/contexts/PodcastsProvider';

import { PodcastCardSkeleton } from 'src/components/PodcastCard';
import PodcastsList from 'src/components/PodcastsList';
import { Podcast } from 'src/constants/types';

import './index.css';

const HomeScreen: React.FC<{}> = () => {
  const { isLoading, podcasts } = useContext(PodcastsContext);
  const [filter, setFilter] = useState('');

  const podcastComponent = isLoading ? PodcastCardSkeleton : undefined;
  const data = isLoading ? (Array.from({ length: 12 }) as Podcast[]) : podcasts;

  return (
    <div className="screen">
      <div className="row end">
        <p id="podcasts-counter">{podcasts.length}</p>
        <input
          type="text"
          placeholder={isLoading ? 'Loading...' : 'Filter podcasts...'}
          value={filter}
          onChange={({ target }) => setFilter(target.value)}
          disabled={isLoading}
        />
      </div>

      <PodcastsList podcasts={data} filter={filter} PodcastComponent={podcastComponent} />
    </div>
  );
};

export default HomeScreen;
