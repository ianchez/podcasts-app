const SCREENS = {
  HOME: {
    PATH: '/',
  },
  PODCAST_DETAIL: {
    PATH: '/podcast/:id',
    PATH_BUILDER: (id: string) => `/podcast/${id}`,
    SECTIONS: {
      EPISODES_LIST: {
        PATH: '/podcast/:id',
        PATH_BUILDER: (id: string) => `/podcast/${id}`,
      },
      EPISODE_DETAIL: {
        PATH: '/podcast/:id/episode/:episodeId',
        PATH_BUILDER: (id: string, episodeId: string) => `/podcast/${id}/episode/${episodeId}`,
      },
    },
  },
} as const;

export default SCREENS;
