import {toast as _toast} from '@zerodevx/svelte-toast'

export const uppercaseArr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

export const lowercaseArr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]
export const numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export const symbolsArr = [
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '?',
  '/',
  '-',
  '+',
]

// * The maximum is exclusive and the minimum is inclusive
export function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

export const toast = (htmlStr, type = 'success') =>
  _toast.push(htmlStr, {
    theme: {
      '--toastBackground': 'var(--dark-gray)',
      '--toastBarBackground': getToastBarBg(type),
    },
  })

const getToastBarBg = type => {
  switch (type) {
    case 'success':
      return '#2F855A'
    case 'error':
      return '#C53030'
  }
}
