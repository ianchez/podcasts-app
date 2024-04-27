import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

import { PodcastDetailContext } from '../../contexts/PodcastDetailProvider';
import { formatDuration } from '../../utils/format';

import './index.css';
import SCREENS from '../../constants/screens';

const ITEMS_PER_PAGE = 20;

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

  const totalPages = Math.ceil(episodes.length / ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPages) return;

    setCurrentPage(nextPage);
  };

  const currentPageEpisodes = episodes.filter((_, index) => {
    const pageStart = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageEnd = currentPage * ITEMS_PER_PAGE;
    return index >= pageStart && index < pageEnd;
  });

  const itemsCountLabel = `${
    currentPage * ITEMS_PER_PAGE > episodes.length ? episodes.length : currentPage * ITEMS_PER_PAGE
  } / ${episodes.length}`;
  const paginationLabel = `Page ${currentPage} / ${totalPages}`;

  const paginationControls = (
    <div id="pagination-controls">
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
