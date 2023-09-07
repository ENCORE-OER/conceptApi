export const escapeRegExp = (string: string)=> {
  return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}