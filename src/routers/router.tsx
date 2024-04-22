import { createBrowserRouter } from 'react-router-dom';

// Screens
import SCREENS from '../constants/screens';
import NotFoundScreen from '../screens/NotFoundScreen';
import RootLayout from '../screens/RootLayout';
import HomeScreen from '../screens/HomeScreen';
import PodcastDetailScreen from '../screens/PodcastDetailScreen';
import ErrorScreen from '../screens/ErrorScreen';

// Sections
import EpisodesListSection from '../components/EpisodesListSection';
import EpisodeDetailSection from '../components/EpisodeDetailSection';

// Forces navigation state to change when navigating to a new route
const loader = () => {
  // Simulate a delay in development mode
  if (process.env.NODE_ENV === 'development') {
    return new Promise(resolve => setTimeout(() => resolve(true), 1000))
  }
  return true;
};

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: SCREENS.HOME.PATH,
        element: <HomeScreen />,
        loader,
      },
      {
        path: SCREENS.PODCAST_DETAIL.PATH,
        element: <PodcastDetailScreen />,
        loader,
        children: [
          {
            path: SCREENS.PODCAST_DETAIL.SECTIONS.EPISODES_LIST.PATH,
            element: <EpisodesListSection />,
            loader,
          },
          {
            path: SCREENS.PODCAST_DETAIL.SECTIONS.EPISODE_DETAIL.PATH,
            element: <EpisodeDetailSection />,
            loader,
          }
        ]
      },
      {
        path: '*',
        element: <NotFoundScreen />
      }
    ]
  }
];

export default createBrowserRouter(routes);
