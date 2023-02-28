export const generateRandomCnpj = (): string => {
  const cnpjNumbers = generateNumbers()
  const cnpjFormatted = cnpjNumbers.replace(/^(\d{2})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3/0001-$4')
  return cnpjFormatted
}

const generateNumbers = (): string => {
  const arrayWith10Numbers = Array.from({ length: 10 }, () => `${Math.floor(10 * Math.random())}`)
  return arrayWith10Numbers.join('')
}
