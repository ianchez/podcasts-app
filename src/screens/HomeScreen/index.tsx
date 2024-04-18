import { useContext, useState } from 'react';
import { PodcastsContext } from '../../contexts/podcasts';

import PodcastsList from '../../components/PodcastsList';
import './index.css';

const HomeScreen: React.FC<{}> = () => {
  const { isLoading, podcasts } = useContext(PodcastsContext);
  const [filter, setFilter] = useState('');

  return (
    <div className="screen">
      <div className='row end'>
        <p id='podcasts-counter'>{podcasts.length}</p>
        <input
          type='text'
          placeholder='Filter podcasts...'
          value={filter}
          onChange={({target}) => setFilter(target.value)}
        />
      </div>

      {isLoading
        ? <p>Loading...</p>
        : <PodcastsList podcasts={podcasts} filter={filter} />
      }
    </div>
  );
};

export default HomeScreen;
