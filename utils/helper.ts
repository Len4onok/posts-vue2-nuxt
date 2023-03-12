import { amountSymbols } from "~/utils/config";

export const generateRandomString = ():string => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let string = ''
  for (let k = 0; k < amountSymbols; k++) {
    string += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return string
}


