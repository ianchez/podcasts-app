type PodcastListProps = {
  podcasts: any[];
  filter: string;
}

const PodcastList: React.FC<PodcastListProps> = ({
  podcasts,
  filter = ''
}) => {
  const filteredPodcasts: any[] = podcasts?.filter((podcast: any) => 
    podcast['im:name'].label.toLowerCase().includes(filter.toLowerCase())
  ) || [];

  return (
    <ul>
      {filteredPodcasts.map((podcast: any) => (
        <li key={podcast.id.attributes['im:id']}>
          {podcast['im:name'].label}
        </li>
      ))}
    </ul>
  )
}

export default PodcastList;