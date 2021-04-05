export const numberWithCommas = (num) => {
  if (num !== undefined) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
};

export const key = "AIzaSyB8B3tbT0q4CRBOjPrPDCUHzm_Pf7qiWDU";
