import { renderHook } from '@testing-library/react';
import usePodcasts from '../usePodcasts';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn().mockReturnValue({
    data: { isLoading: false, data: undefined },
    isLoading: false,
  }),
}));

describe('usePodcastsHook', () => {
  it('should return the correct values', () => {
    const { result } = renderHook(() => usePodcasts());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.podcasts).toEqual([]);
  });
});
