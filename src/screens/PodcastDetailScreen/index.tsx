import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PodcastsContext } from '../../contexts/podcasts';

const PodcastDetailScreen = () => {
  const { id } = useParams();
  const { episodes, podcasts, podcastDetail, setPodcastId } = useContext(PodcastsContext);
  const selectedPodcast = podcasts.find(podcast => podcast.id.attributes['im:id'] === id);
  console.log({selectedPodcast});
  console.log({episodes});

  useEffect(() => {
    setPodcastId(id ?? '');
  }, [id]);

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

      <div
        style={{
          // boxSizing: 'border-box',
          alignSelf: 'flex-start',
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '74%',
        }}
      >
        <div
          style={{
            border: '1px solid #ccc',
            boxSizing: 'border-box',
            borderRadius: '4px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            marginBottom: '4vw',
            padding: '10px 16px',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
          }}
        >
          <h5>Episodes: {episodes.length}</h5>
        </div>

        <div
          style={{
            border: '1px solid #ccc',
            boxSizing: 'border-box',
            borderRadius: '4px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            padding: '10px 16px',
            flexDirection: 'row',
            alignItems: 'space-between',
            justifyContent: 'flex-start',
            width: '100%',
          }}
        >
          <table
            style={{
              width: '100%',
            }}
          >
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
            {episodes.map(episode => (
              <tr>
                <td>{episode.trackName}</td>
                <td>{new Date(episode.releaseDate).toLocaleDateString()}</td>
                <td>{episode.trackTimeMillis / 1000}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>

  );
}

export default PodcastDetailScreen;
