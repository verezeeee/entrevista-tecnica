export function verificarEmail(email) {
  if (!email) {
    return "Insira um email!";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Insira um email válido!";
  }
  return "Email válido!";
}