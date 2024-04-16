import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PodcastsContext } from '../../contexts/podcasts';

const PodcastDetailScreen = () => {
  const { id } = useParams();
  const { podcasts, podcastDetail, setPodcastId } = useContext(PodcastsContext);
  const selectedPodcast = podcasts.find(podcast => podcast.id.attributes['im:id'] === id);
  console.log({selectedPodcast});

  useEffect(() => {
    setPodcastId(id ?? '');
  }, [id]);

  return (
    <div className='screen'>
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          padding: '20px',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '30%',
        }}
      >
        <img 
          src={podcastDetail?.artworkUrl600} 
          alt={podcastDetail?.title}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />

        <hr style={{ borderTop: '1px solid #CCC', margin: '0.8em 0px', width: "100%" }}/>

        <h6 style={{ margin: 0, textAlign: 'left', width: "100%" }}>{podcastDetail?.collectionName}</h6>
        <p style={{ fontSize: '0.5em',margin: 0, textAlign: 'left', width: "100%" }}><i>By {podcastDetail?.artistName}</i></p>

        <hr style={{ borderTop: '1px solid #CCC', margin: '0.8em 0px', width: "100%" }}/>

        <h6 style={{ margin: 0, textAlign: 'left', width: "100%" }}>Description</h6>
        <p style={{ fontSize: '0.5em', textAlign: 'left', width: "100%" }}><i>{selectedPodcast?.summary.label}</i></p>
      </div>
    </div>
  );
}

export default PodcastDetailScreen;
