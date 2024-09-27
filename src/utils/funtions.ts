export const smoothscroll = () => {
  var currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(smoothscroll);
    window.scrollTo(0, currentScroll - currentScroll / 5);
  }
};

export const convertNameItem = (str = "") => {
  if (str.length > 18) {
    return str.substring(0, 18) + "...";
  }
  return str;
};

export const convertString = (str = "", length: number) => {
  if (str.length > length) {
    return str.substring(0, length) + "...";
  }
  return str;
};

export const upperCaseFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const splitEpisode = (str: string) => {
  const arr = str ? str.split("-") : [];
  if (arr.length) {
    return arr[arr.length - 1];
  }
  return "";
};
