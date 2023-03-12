export const languages = [
  {
    value: 'en',
    label: 'English',
    img: require('~/assets/img/english.webp')
  },
  {
    value: 'ru',
    label: 'Русский',
    img: require('~/assets/img/russian.webp')
  }
]
export type TLanguage = {
  value: string,
  label: string,
  img: string
}
