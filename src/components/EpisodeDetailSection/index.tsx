import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PodcastsContext } from '../../contexts/podcasts';

const EpisodeDetailSection: React.FC<{}> = () => {
  const { episodeId } = useParams();
  const { isLoading, episodes } = useContext(PodcastsContext);
  const currentEpisode = episodes.find((item: any) => `${item.trackId}` === episodeId);

  // Error handling
  if (isLoading) return <div>Loading...</div>;
  if (!currentEpisode) return <h4>Episode not found</h4>;

  // Render
  return (
    <div
      style={{
        alignSelf: 'flex-start',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        borderRadius: '4px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        padding: '10px 16px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: '100%',
        width: '72%',
      }}
    >
      <h5
        style={{
          marginTop: 10,
          marginBottom: 10,
          padding: 0,
        }}
      >
        {currentEpisode.trackName}
      </h5>

      <p
        style={{
          fontSize: '0.5em',
          fontStyle: 'italic',
          margin: 0,
          textAlign: 'left',
          width: '100%',
          whiteSpace: 'preserve-breaks',
        }}
        // Episode description could contain HTML tags
        dangerouslySetInnerHTML={{ __html: currentEpisode.description }}
      />

      <hr
        style={{
          borderTop: '1px solid #CCC',
          margin: '0.8em 0px',
          width: '100%',
        }}
      />

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
