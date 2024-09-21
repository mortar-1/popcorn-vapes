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
const email = "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$";

const utilities = {
  setErrorIfEmpty,
  getCurrentYear,
  patterns: {
    letter,
    fullName,
    email,
  },
};

export default utilities;
