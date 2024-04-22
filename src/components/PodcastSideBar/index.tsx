import { Podcast, PodcastDetail } from 'src/constants/types';
import Image from 'next/image';

type PodcastSideBarProps = {
  podcastDetail: PodcastDetail;
  selectedPodcast: Podcast;
  onSideBarClick: () => void;
};

const PodcastSideBar: React.FC<PodcastSideBarProps> = ({
  podcastDetail,
  selectedPodcast,
  onSideBarClick,
}) => (
  <section id="side-bar-container">
    <Image
      className="pressable"
      role="button"
      onClick={onSideBarClick}
      src={podcastDetail.artworkUrl600}
      alt={podcastDetail.collectionName}
    />

    <hr />

    <h6 className="pressable" role="button" onClick={onSideBarClick}>
      {podcastDetail.collectionName}
    </h6>
    <p>
      <i>By {podcastDetail.artistName}</i>
    </p>

    <hr />

    <h6 id="description">Description:</h6>
    <p>
      <i>{selectedPodcast.summary.label}</i>
    </p>
  </section>
);

export default PodcastSideBar;
