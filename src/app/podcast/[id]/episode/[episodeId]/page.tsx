'use client';

import { useParams } from 'next/navigation';

import EpisodeDetailSection from 'src/components/EpisodeDetailSection';

const EpisodePage: React.FC<{}> = () => {
  const { episodeId } = useParams<{ episodeId: string }>();

  return <EpisodeDetailSection episodeId={episodeId} />;
};

export default EpisodePage;
