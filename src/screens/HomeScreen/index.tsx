import { useContext, useState } from 'react';
import { PodcastsContext } from 'src/contexts/PodcastsProvider';

import LoadingScreen from '../LoadingScreen';
import PodcastsList from 'src/components/PodcastsList';
import './index.css';

const HomeScreen: React.FC<{}> = () => {
  const { isLoading, podcasts } = useContext(PodcastsContext);
  const [filter, setFilter] = useState('');

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="screen">
      <div className="row end">
        <p id="podcasts-counter">{podcasts.length}</p>
        <input
          type="text"
          placeholder="Filter podcasts..."
          value={filter}
          onChange={({ target }) => setFilter(target.value)}
        />
      </div>

      <PodcastsList podcasts={podcasts} filter={filter} />
    </div>
  );
};

export default HomeScreen;
