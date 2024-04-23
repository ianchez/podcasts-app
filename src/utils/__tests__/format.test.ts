import { formatDuration } from '../format';

describe('Utils: formatDuration', () => {
  it('should return 00:00 if input is 0', () => {
    expect(formatDuration(0)).toBe('00:00');
  });

  it('should return 00:00 if input is undefined', () => {
    expect(formatDuration()).toBe('00:00');
  });

  it('should return 00:01 if input is 1000', () => {
    expect(formatDuration(1000)).toBe('00:01');
  });

  it('should return 01:01 if input is 61000', () => {
    expect(formatDuration(61000)).toBe('01:01');
  });

  it('should return 01:01:01 if input is 3661000', () => {
    expect(formatDuration(3661000)).toBe('1:01:01');
  });
});
