export const numberWithCommas = (num) => {
  if (num !== undefined) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
};

export const key = "AIzaSyAcxJQsa2hAqcD6kVVxys1RGx0Rxesw1TA ";
