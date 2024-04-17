import { useContext, useEffect } from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';

import { PodcastsContext } from '../../contexts/podcasts';

const PodcastDetailScreen = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { isLoading, podcasts, podcastDetail, setPodcastId } = useContext(PodcastsContext);
  const selectedPodcast = podcasts.find(podcast => podcast.id.attributes['im:id'] === id);

  useEffect(() => {
    setPodcastId(id ?? '');
  }, [id]);

  // Error handling
  if (isLoading) return <h4>Loading...</h4>;
  if (!podcastDetail || !selectedPodcast) {
    return <h4>Podcast Not Found</h4>;
  }

  return (
    <div className='screen row spaced'>
      <div
        style={{
          alignSelf: 'flex-start',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          padding: '20px',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '20%',
        }}
      >
        <img 
          src={podcastDetail?.artworkUrl600} 
          alt={podcastDetail?.title}
          style={{
            borderRadius: '3%',
            maxWidth: '80%',
            maxHeight: '80%',
          }}
        />

        <hr style={{ borderTop: '1px solid #CCC', margin: '0.8em 0px', width: "100%" }}/>

        <h6 style={{ margin: 0, textAlign: 'left', width: "100%" }}>{podcastDetail?.collectionName}</h6>
        <p style={{ fontSize: '0.5em',margin: 0, textAlign: 'left', width: "100%" }}><i>By {podcastDetail?.artistName}</i></p>

        <hr style={{ borderTop: '1px solid #CCC', margin: '0.8em 0px', width: "100%" }}/>

        <h6 style={{ margin: 0, marginBottom: '1vw', textAlign: 'left', width: "100%" }}>Description:</h6>
        <p style={{ fontSize: '0.5em', textAlign: 'left', width: "100%" }}><i>{selectedPodcast?.summary.label}</i></p>
      </div>

      <Outlet />
    </div>

  );
}

export default PodcastDetailScreen;
