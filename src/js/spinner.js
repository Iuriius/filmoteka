import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const addSpinner = function addSpinner() {
  Loading.custom('Loading your movies...', {
        svgSize: '100px',
  });
};

export const removeSpinner = function removeSpinner() {
  Loading.remove();
};