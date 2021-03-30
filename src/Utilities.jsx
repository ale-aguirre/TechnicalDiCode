export const numberWithCommas = (num) => {
  if (num !== undefined) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
};

export const key = "AIzaSyAHtSF_YHOex9Dn9O1FeWTa9KV4cfItJEk";
