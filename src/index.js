module.exports = function reverse (n) {
  let x = ''
  n < 0 ? x = n.toString().slice(1) : x = n.toString().slice(0)
  return +(x.split('').reverse().join(''))
}