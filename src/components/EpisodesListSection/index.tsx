import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PodcastsContext } from "../../contexts/podcasts";
import { formatDuration } from "../../utils/format";

const EpisodesListSection: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { episodes } = useContext(PodcastsContext);

  const onEpisodeClickHandler = (episodeId: number) => {
    navigate('/podcast/' + id + '/episode/' + episodeId);
  }

  return (
    <div
      style={{
        // boxSizing: 'border-box',
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '72%',
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
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tfoot>
            {episodes.map(episode => (
              <tr
                key={episode.trackId}
                className='pressable'
                onClick={() => onEpisodeClickHandler(episode.trackId)}
              >
                <td>{episode.trackName}</td>
                <td>{new Date(episode.releaseDate).toLocaleDateString()}</td>
                <td>{formatDuration(episode.trackTimeMillis)}</td>
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default EpisodesListSection;