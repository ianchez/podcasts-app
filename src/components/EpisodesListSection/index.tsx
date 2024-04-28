import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { PodcastDetailContext } from 'src/contexts/PodcastDetailProvider';
import { formatDuration } from 'src/utils/format';
import usePagination from 'src/hooks/usePagination';

import SCREENS from 'src/constants/screens';
import { Episode } from 'src/constants/types';

import './index.css';

const useEpisodesNavigation = (podcastId: string) => {
  const { push } = useRouter();

  if (!podcastId) return () => {};

  return (episodeId: number) => {
    push(
      SCREENS.PODCAST_DETAIL.SECTIONS.EPISODE_DETAIL.PATH_BUILDER(podcastId, episodeId.toString()),
    );
  };
};

const useEpisodesPagination = (episodes: Episode[]) => {
  const {
    currentPage,
    itemsCountLabel,
    itemsPerPage,
    paginationLabel,
    totalPages,
    handlePageChange,
  } = usePagination(episodes.length);

  const currentPageEpisodes = episodes.filter((_, index) => {
    const pageStart = (currentPage - 1) * itemsPerPage;
    const pageEnd = currentPage * itemsPerPage;
    return index >= pageStart && index < pageEnd;
  });

  const paginationControls = (
    <div className="pagination-controls">
      <button disabled={currentPage <= 1} onClick={() => handlePageChange(currentPage - 1)}>
        Previous Page
      </button>
      <p>{paginationLabel}</p>
      <button
        disabled={currentPage >= totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next Page
      </button>
    </div>
  );

  return { currentPageEpisodes, itemsCountLabel, paginationControls };
};

const EpisodesListSection: React.FC<{ podcastId: string }> = ({ podcastId }) => {
  const onEpisodeClickHandler = useEpisodesNavigation(podcastId);
  const { episodes } = useContext(PodcastDetailContext);

  const { currentPageEpisodes, itemsCountLabel, paginationControls } =
    useEpisodesPagination(episodes);

  return (
    <section id="episodes-list-container">
      <header id="list-header">
        <h5>Episodes: {episodes.length}</h5>
        <p>{itemsCountLabel}</p>
      </header>

      {paginationControls}

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
            {currentPageEpisodes.map((episode) => (
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

      {paginationControls}
    </section>
  );
};

export default EpisodesListSection;
