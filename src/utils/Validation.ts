/* eslint-disable prefer-const */
/*
www.moinho.net
Verify an e-mail address
Verifica se uma endereço de e-mail é válido
Fucntion: isEmail
Return  : true if the e-mail address is valid
Retorno : true se o endereço de e-mail for válido
e-mail  : celso.goya@moinho.net
Author  : Celso Goya
*/

export function isEmail(text: string) {
  let arroba = '@',
    ponto = '.',
    posponto = 0,
    posarroba = 0

  if (text == '') return false

  for (let indice = 0; indice < text.length; indice++) {
    if (text.charAt(indice) == arroba) {
      posarroba = indice
      break
    }
  }

  for (let indice = posarroba; indice < text.length; indice++) {
    if (text.charAt(indice) == ponto) {
      posponto = indice
      break
    }
  }
  if (posponto == 0 || posarroba == 0) return false
  if (posponto == posarroba + 1) return false
  if (posponto + 1 == text.length) return false
  return true
}
export function validarCPF(value: string) {
  const cpf = value.replace(/[^\d]+/g, '')
  if (cpf == '') return false
  // Elimina CPFs invalidos conhecidos
  if (
    cpf.length !== 11 ||
    cpf == '00000000000' ||
    cpf == '11111111111' ||
    cpf == '22222222222' ||
    cpf == '33333333333' ||
    cpf == '44444444444' ||
    cpf == '55555555555' ||
    cpf == '66666666666' ||
    cpf == '77777777777' ||
    cpf == '88888888888' ||
    cpf == '99999999999'
  )
    return false
  // Valida 1o digito
  let add = 0
  for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i)
  let rev = 11 - (add % 11)
  if (rev == 10 || rev == 11) rev = 0
  if (rev !== parseInt(cpf.charAt(9))) return false
  // Valida 2o digito
  add = 0
  for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i)
  rev = 11 - (add % 11)
  if (rev == 10 || rev == 11) rev = 0
  if (rev !== parseInt(cpf.charAt(10))) return false
  return true
}
export function validarCNPJ(cnpj: any) {
  cnpj = cnpj.replace(/[^\d]+/g, '')

  if (cnpj == '') return false

  if (cnpj.length !== 14) return false

  // Elimina CNPJs invalidos conhecidos
  if (
    cnpj == '00000000000000' ||
    cnpj == '11111111111111' ||
    cnpj == '22222222222222' ||
    cnpj == '33333333333333' ||
    cnpj == '44444444444444' ||
    cnpj == '55555555555555' ||
    cnpj == '66666666666666' ||
    cnpj == '77777777777777' ||
    cnpj == '88888888888888' ||
    cnpj == '99999999999999'
  )
    return false

  // Valida DVs
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0, tamanho)
  const digitos = cnpj.substring(tamanho)
  let soma = 0
  let pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--
    if (pos < 2) pos = 9
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado !== digitos.charAt(0)) return false

  tamanho = tamanho + 1
  numeros = cnpj.substring(0, tamanho)
  soma = 0
  pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--
    if (pos < 2) pos = 9
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado !== digitos.charAt(1)) return false

  return true
}
export function cleanObject(object: any) {
  const obj = object
  for (const propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === ''
    ) {
      delete obj[propName]
    }
  }
  return obj
}
