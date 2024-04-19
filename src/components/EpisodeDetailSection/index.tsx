import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PodcastDetailContext } from '../../contexts/PodcastDetailProvider';

import './index.css';

const EpisodeDetailSection: React.FC<{}> = () => {
  const { episodeId } = useParams();
  const { isLoading, episodes } = useContext(PodcastDetailContext);
  const currentEpisode = episodes.find((item: any) => `${item.trackId}` === episodeId);

  // Error handling
  if (isLoading) return <div>Loading...</div>;
  if (!currentEpisode) return <h4>Episode not found</h4>;

  // Render
  return (
    <div id='episode-detail-container'>
      <h5>{currentEpisode.trackName}</h5>

      <p
        id='episode-description'
        // Episode description could contain HTML tags
        dangerouslySetInnerHTML={{ __html: currentEpisode.description }}
      />

      <hr />

      <audio
        controls
        controlsList='nodownload'
        style={{
          marginBottom: '1vw',
          width: '100%',
        }}
      >
        <source src={currentEpisode.episodeUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default EpisodeDetailSection;
