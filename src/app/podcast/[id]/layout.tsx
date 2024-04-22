'use client';

import React, { useContext, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation'

import { PodcastsContext } from 'src/contexts/PodcastsProvider';
import { PodcastDetailContext } from 'src/contexts/PodcastDetailProvider';
import SCREENS from 'src/constants/screens';

import './layout.css';

const PodcastDetailScreen: React.FC<{children: React.ReactNode}> = ({children}) => {
  const { push } = useRouter();

  const { id } = useParams<{ id: string }>();
  console.log({id});
  const { isLoading: arePodcastsLoading, podcasts } = useContext(PodcastsContext);
  const { isLoading: isDetailLoading, podcastDetail, setPodcastId } = useContext(PodcastDetailContext);
  const selectedPodcast = podcasts.find(podcast => podcast.id.attributes['im:id'] === id);

  useEffect(() => {
    setPodcastId(id ?? '');
  }, [id]);

  const onPodcastDetailClickHandler = () => {
    push(SCREENS.PODCAST_DETAIL.PATH_BUILDER(id ?? ''));
  };

  // Error handling
  if (arePodcastsLoading || isDetailLoading) return <div className='screen'><h4>Loading...</h4></div>;
  if (!podcastDetail || !selectedPodcast) {
    return <div className='screen'><h4>Podcast Not Found</h4></div>;
  }

  const sideBar = (
    <div id='side-bar-container'>
      <img
        className='pressable'
        role='button'
        onClick={onPodcastDetailClickHandler}
        src={podcastDetail.artworkUrl600} 
        alt={podcastDetail.collectionName}
      />

      <hr />

      <h6
        className='pressable'
        role='button'
        onClick={onPodcastDetailClickHandler}
      >
        {podcastDetail.collectionName}
      </h6>
      <p><i>By {podcastDetail.artistName}</i></p>

      <hr />

      <h6 id='description'>Description:</h6>
      <p><i>{selectedPodcast.summary.label}</i></p>
    </div>
  );

  return (
    <div className='row screen spaced'>
      {sideBar}
      {children}
    </div>

  );
}

export default PodcastDetailScreen;
