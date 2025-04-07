// Em '../../actions/formValidation.ts'
export function emailValidation(node: HTMLInputElement) {
  // Função para validar o formato do email
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  // Função para atualizar o estado de validação do input
  const validate = () => {
    const isValid = validateEmail(node.value);

    if (!isValid && node.value) {
      node.setCustomValidity('Por favor, insira um email válido');
      node.classList.add('invalid');
    } else {
      node.setCustomValidity('');
      node.classList.remove('invalid');
    }
  };

  // Validar quando o valor muda
  node.addEventListener('input', validate);
  node.addEventListener('blur', validate);

  return {
    destroy() {
      // Limpar os event listeners quando o componente for destruído
      node.removeEventListener('input', validate);
      node.removeEventListener('blur', validate);
    }
  };
}

// Podemos criar mais validações para outros tipos
export function passwordValidation(node: HTMLInputElement) {
  // Implementação para validação de senha
  // ...
}