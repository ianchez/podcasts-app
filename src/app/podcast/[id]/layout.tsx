'use client';

import { useParams } from 'next/navigation';

import PodcastDetailScreen from 'src/screens/PodcastDetailScreen';

const PodcastLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { id } = useParams<{ id: string }>();

  return <PodcastDetailScreen id={id}>{children}</PodcastDetailScreen>;
};

export default PodcastLayout;
