import { Podcast, PodcastDetail } from 'src/constants/types';
import Image from 'next/image';

import './index.css';

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
  <aside id="side-bar-container">
    <div id="img-container">
      <Image
        fill
        className="pressable"
        role="button"
        onClick={onSideBarClick}
        src={podcastDetail.artworkUrl600}
        alt={podcastDetail.collectionName}
        quality={100}
        sizes="(max-width: 850px) 152px, 30vw"
      />
    </div>

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
  </aside>
);

export const PodcastSideBarSkeleton: React.FC<{}> = () => (
  <aside id="side-bar-container" className="skeleton">
    <div id="img-container">
      <div id="img-skeleton" />
    </div>

    <hr />

    <h6>Title ...</h6>
    <p>
      <i>By ...</i>
    </p>

    <hr />

    <h6 id="description">Description:</h6>
    <p>
      <i>...</i> <br />
      <i>...</i> <br />
      <i>...</i> <br />
      <i>...</i> <br />
      <i>...</i> <br />
    </p>
  </aside>
);

export default PodcastSideBar;
