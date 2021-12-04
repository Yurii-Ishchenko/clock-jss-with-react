export const getTime = time => {
  const hours = (time % (1000 * 60 * 60 * 12)) / (1000 * 60 * 60);
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  return { hours, mins, secs };
};
