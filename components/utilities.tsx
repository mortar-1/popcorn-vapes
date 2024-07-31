import { Dispatch } from "react";

const setErrorIfEmpty = (state: string, errorSetter: Dispatch<boolean>) => {
  let empty = state === "";
  errorSetter(empty);
  return empty;
};

const getCurrentYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};

const letter = "A-zÄäÖöÅåÜü";
const fullName = `^[${letter}]+[ ][${letter}]+[ ]?[\\-${letter}]+?[ ]?`;

const utilities = {
  setErrorIfEmpty,
  getCurrentYear,
  patterns: {
    letter,
    fullName,
  },
};

export default utilities;
