export function textShortener (text, n) {
  let cut = text.indexOf(' ', n)
  if (cut === -1) return text
  return (text.length > n ? text.substring(0, cut) + ' ...' : text)
}
