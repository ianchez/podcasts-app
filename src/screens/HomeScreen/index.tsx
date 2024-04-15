import { useState } from 'react'
import usePodcasts from '../../hooks/usePodcasts'

const HomeScreen: () => JSX.Element = () => {
  const { isLoading, data = [] } = usePodcasts();
  const [filter, setFilter] = useState('');

  console.log({data});

  const onFilterChange = (
    {target}: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilter(target.value);
  }

  console.log({filter})

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

      {isLoading && <p>Loading...</p>}
      {data?.feed?.entry && (
        <ul>
          {data.feed.entry.map((podcast: any) => (
            <li key={podcast.id.attributes['im:id']}>{podcast['im:name'].label}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default HomeScreen
