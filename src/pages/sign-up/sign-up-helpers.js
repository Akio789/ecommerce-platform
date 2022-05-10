import {
  REQUIRED_FIELD_ERROR_STR,
  INVALID_EMAIL_ERROR_STR
} from "../../constants";
import { validateEmail } from "../../util/email";

const PASSWORDS_DONT_MATCH_ERROR_STR = 'Las contraseñas no concuerdan.';

const validateForm = (email, password, confirmPassword) => {
  const errors = {};
  if (!validateEmail(email)) {
    errors.email = INVALID_EMAIL_ERROR_STR;
  }
  if (!email) {
    errors.email = REQUIRED_FIELD_ERROR_STR;
  }
  if (!password) {
    errors.password = REQUIRED_FIELD_ERROR_STR;
  }
  if (!confirmPassword) {
    errors.confirmPassword = REQUIRED_FIELD_ERROR_STR;
  }
  if (password !== confirmPassword) {
    errors.confirmPassword = PASSWORDS_DONT_MATCH_ERROR_STR
  }
  return errors;
}

export { validateForm };