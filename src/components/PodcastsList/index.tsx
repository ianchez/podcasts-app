import { useNavigate } from "react-router-dom";
import { Podcast } from "../../constants/types";

type PodcastListProps = {
  podcasts: Podcast[];
  filter: string;
}

const PodcastList: React.FC<PodcastListProps> = ({
  podcasts,
  filter = ''
}) => {
  const navigate = useNavigate();

  const filteredPodcasts: any[] = podcasts?.filter((podcast: any) => 
    podcast['im:name'].label.toLowerCase().includes(filter.toLowerCase())
  ) || [];

  const onEpisodeClickHandler = (id: string) => {
    navigate(`/podcast/${id}`);
  };

  return (
    <ul>
      {filteredPodcasts.map((podcast: any) => {
        const id = podcast.id.attributes['im:id'] || '';

        return (
          <li className="pressable" key={podcast.id.attributes['im:id']} onClick={() => onEpisodeClickHandler(id)}>
            {podcast['im:name'].label}
          </li>
        );
      })}
    </ul>
  )
}

export default PodcastList;
