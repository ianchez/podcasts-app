import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import SCREENS from '../../constants/screens';
import Header from './index';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({ push: jest.fn() }),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn().mockReturnValue({ isLoading: false }),
}));

describe('Header', () => {
  it('should render the Header component', () => {
    render(<Header />);

    expect(screen.getByText('Podcaster')).toBeDefined;
  });

  it('should navigate to the home screen when the logo is clicked', () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    render(<Header />);

    const logo = screen.getByText('Podcaster');
    logo.click();

    expect(push).toHaveBeenCalledWith(SCREENS.HOME.PATH);
  });

  it('should show a loading state when the app is loading', () => {
    (useContext as jest.Mock).mockReturnValue({ isLoading: true });

    render(<Header />);

    const loadingStateElement = screen.getByText('Podcaster').nextElementSibling;
    expect(loadingStateElement).toHaveClass('pulsating-circle');
  });
});
