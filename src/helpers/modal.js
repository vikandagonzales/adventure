export const modalOpen = () => {
  document.querySelector('html').classList.add('is-clipped');
};

export const modalClose = () => {
  document.querySelector('html').classList.remove('is-clipped');
};