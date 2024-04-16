import { useEffect, useState } from 'react'
import usePodcasts from '../../hooks/usePodcasts'

import PodcastsList from '../../components/PodcastsList'

const HomeScreen: React.FC = () => {
  const { isLoading, data } = usePodcasts();
  const [filter, setFilter] = useState('');
  const podcasts = data?.feed.entry || [];

  const onFilterChange = (
    {target}: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilter(target.value);
  }

  return (
    <div className="screen">
      <div className='row'>
        <p>100</p>
        <input
          type='text'
          placeholder='Filter podcasts...'
          value={filter}
          onChange={onFilterChange}
        />
      </div>

      {isLoading
        ? <p>Loading...</p>
        : <PodcastsList podcasts={podcasts} filter={filter} />
      }
    </div>
  )
}

export default HomeScreen
