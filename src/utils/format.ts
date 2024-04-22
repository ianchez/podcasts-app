// format milliseconds to 00:00:00 > HH:MM:SS
export const formatDuration = (milliseconds?: number): string => {
  if (!milliseconds) return '00:00';

  const seconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const paddedMinutes = minutes.toString().padStart(2, '0');
  const paddedSeconds = remainingSeconds.toString().padStart(2, '0');

  const minutesAndSeconds = `${paddedMinutes}:${paddedSeconds}`;

  return hours > 0 ? `${hours}:${minutesAndSeconds}` : minutesAndSeconds;
};
