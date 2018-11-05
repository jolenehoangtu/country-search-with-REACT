export const startsWith = (arr, searchWord) => {
  return arr.filter(country => country.toLowerCase().startsWith(searchWord))
}

export const includes = (arr, searchWord) => {
  return arr.filter(country => country.toLowerCase().includes(searchWord))
}
