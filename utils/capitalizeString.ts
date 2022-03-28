
export const capitalize = (text: string): string => {
  text = text.toLowerCase();
  text = text[0].toUpperCase() + text.slice(1)
  return text
}