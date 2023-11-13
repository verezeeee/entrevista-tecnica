export default function verificarSenha(senha) {
  if (!senha) {
    return "Insira uma senha!";
  }
  if (senha.length < 8) {
    return "Sua senha deve ter pelo menos 8 caracteres.";
  }
  if (!/\d/.test(senha)) {
    return "Sua senha deve conter pelo menos um número.";
  }
  if (!/[A-Z]/.test(senha)) {
    return "Sua senha deve conter pelo menos uma letra maiúscula.";
  }
  if (!/[a-z]/.test(senha)) {
    return "Sua senha deve conter pelo menos uma letra minúscula.";
  }
  if (!/\W/.test(senha)) {
    return "Sua senha deve conter pelo menos um caractere especial.";
  }
  return "Senha válida!!";
}
