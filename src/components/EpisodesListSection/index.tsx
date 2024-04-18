import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PodcastsContext } from "../../contexts/podcasts";
import { formatDuration } from "../../utils/format";

import './index.css';

const EpisodesListSection: React.FC<{}> = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { episodes } = useContext(PodcastsContext);

  const onEpisodeClickHandler = (episodeId: number) => {
    navigate('/podcast/' + id + '/episode/' + episodeId);
  }

  return (
    <div id='episodes-list-container'>
      <div id='list-header'>
        <h5>Episodes: {episodes.length}</h5>
      </div>

      <div id='list-content'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tfoot>
            {episodes.map(episode => (
              <tr key={episode.trackId}>
                <td
                  className='pressable'
                  onClick={() => onEpisodeClickHandler(episode.trackId)}
                >
                  {episode.trackName}
                </td>
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