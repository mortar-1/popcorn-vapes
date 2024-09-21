import UTILS from './utilities';

const nameValidator = (value: string) => {
  const fullNameRegExp = new RegExp(UTILS.patterns.fullName);
  if (!fullNameRegExp.test(value)) return 'Full name needed';
  return false;
};

const emailValidator = (value: string) => {
  const emailRegExp = new RegExp(UTILS.patterns.email);
  if (!emailRegExp.test(value)) return 'Email needed';
  return false;
};

const validators = {
  nameValidator,
  emailValidator
};

export default validators;
