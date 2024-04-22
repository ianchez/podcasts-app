'use client';

import { useParams } from 'next/navigation';

import EpisodesListSection from 'src/components/EpisodesListSection';

const PodcastPage: React.FC<{}> = () => {
  const { id } = useParams<{ id: string }>();

  return <EpisodesListSection podcastId={id} />;
};

export default PodcastPage;
