import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { PodcastDetailContext } from '../../contexts/PodcastDetailProvider';
import { formatDuration } from '../../utils/format';

import './index.css';
import SCREENS from '../../constants/screens';

const useEpisodeNavigation = (podcastId: string) => {
  const { push } = useRouter();

  if (!podcastId) return () => {};

  return (episodeId: number) => {
    push(
      SCREENS.PODCAST_DETAIL.SECTIONS.EPISODE_DETAIL.PATH_BUILDER(podcastId, episodeId.toString()),
    );
  };
};

const EpisodesListSection: React.FC<{ podcastId: string }> = ({ podcastId }) => {
  const onEpisodeClickHandler = useEpisodeNavigation(podcastId);
  const { episodes } = useContext(PodcastDetailContext);

  return (
    <section id="episodes-list-container">
      <div id="list-header">
        <h5>Episodes: {episodes.length}</h5>
      </div>

      <div id="list-content">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tfoot>
            {episodes.map((episode) => (
              <tr key={episode.trackId}>
                <td className="pressable" onClick={() => onEpisodeClickHandler(episode.trackId)}>
                  {episode.trackName}
                </td>
                <td>{new Date(episode.releaseDate).toLocaleDateString()}</td>
                <td>{formatDuration(episode.trackTimeMillis)}</td>
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default EpisodesListSection;
