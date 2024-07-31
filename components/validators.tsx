import UTILS from "./utilities";

const nameValidator = (value: string) => {
  const fullNameRegExp = new RegExp(UTILS.patterns.fullName);
  if (!fullNameRegExp.test(value)) return "Koko nimi vaaditaan";
  return false;
};

const emailValidator = (value: string) => {
  if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(value))
    return "Sähköposti vaaditaan";
  return false;
};

const validators = {
  nameValidator,
  emailValidator,
};

export default validators;
