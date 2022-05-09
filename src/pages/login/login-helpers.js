import { validateEmail } from "../../util/email";
import { REQUIRED_FIELD_ERROR_STR } from "../../constants";


const validateForm = (email, password) => {
  const errors = {};
  if (!validateEmail(email)) {
    errors.email = 'Por favor ingresa un email válido.';
  }
  if (!email) {
    errors.email = REQUIRED_FIELD_ERROR_STR;
  }
  if (!password) {
    errors.password = REQUIRED_FIELD_ERROR_STR;
  }
  return errors;
}

export { validateForm };
