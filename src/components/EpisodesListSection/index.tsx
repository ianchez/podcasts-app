import { useContext } from "react";
import { useRouter, useParams } from 'next/navigation'

import { PodcastDetailContext } from "../../contexts/PodcastDetailProvider";
import { formatDuration } from "../../utils/format";

import './index.css';
import SCREENS from "../../constants/screens";

const useEpisodeNavigation = () => {
  const { push } = useRouter();
  const { id } = useParams();

  if (!id) return () => {};

  return (episodeId: number) => {
    push(SCREENS.PODCAST_DETAIL.SECTIONS.EPISODE_DETAIL.PATH_BUILDER(id, episodeId.toString()));
  };
}

const EpisodesListSection: React.FC<{}> = () => {
  const onEpisodeClickHandler = useEpisodeNavigation();
  const { episodes } = useContext(PodcastDetailContext);

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