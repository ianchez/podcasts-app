import { renderHook } from '@testing-library/react';
import usePodcastDetailById from '../usePodcastDetailById';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn().mockReturnValue({
    data: { isLoading: false, data: undefined },
    isLoading: false,
  }),
}));

describe('usePodcastsHook', () => {
  it('should return the correct values when no id is passed', () => {
    const { result } = renderHook(() => usePodcastDetailById(''));

    expect(result.current.isLoading).toBe(false);
    expect(result.current.podcastDetail).toEqual(undefined);
    expect(result.current.episodes).toEqual([]);
  });
});
