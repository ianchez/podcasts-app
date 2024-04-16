import { useContext, useState } from 'react'
import { PodcastsContext } from '../../contexts/podcasts'

import PodcastsList from '../../components/PodcastsList'

const HomeScreen: React.FC = () => {
  const { isLoading, podcasts } = useContext(PodcastsContext);
  const [filter, setFilter] = useState('');

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
