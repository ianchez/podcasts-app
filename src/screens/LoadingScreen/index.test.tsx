import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LoadingScreen from './index';

describe('LoadingScreen', () => {
  it('renders the heading h4 with the correct message', () => {
    render(<LoadingScreen />);

    const heading = screen.getByRole('heading', { level: 4 });

    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('Loading...');
  });
});
