import { validate } from "email-validator";

export function verificarEmail(email) {
  validate(email);
  return validate(email);
}
