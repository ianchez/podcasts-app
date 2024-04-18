import { useNavigate } from "react-router-dom";
import { Podcast } from "../../constants/types";

import './index.css';

const PodcastCard: React.FC<{podcast: Podcast}> = ({podcast}) => {
  const navigate = useNavigate();

  const onEpisodeClickHandler = () => {
    const id = podcast.id.attributes['im:id'] || '';
    navigate(`/podcast/${id}`);
  };

  return (
    <div className='podcast-item'>
      <span className="transparent" />
      <div
        className='pressable shifted-container'
        onClick={onEpisodeClickHandler}
      >
        <img
          src={podcast['im:image'][2].label}
          alt={podcast['im:name'].label}
        />
        <h5>{podcast['im:name'].label}</h5>
        <p>Author: {podcast['im:artist'].label}</p>
      </div>
    </div>
  );
}

export default PodcastCard;
