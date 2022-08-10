const result = document.querySelector('.result')
const btn = document.querySelector('.btn')

btn.addEventListener('click', palindrome)

function palindrome() {
  const word = document.querySelector('.input-text').value
  let len = word.length

  //separate the front letters 
  let front = word.substring(0, Math.floor(len / 2)).toLowerCase()
  //separate the back letters
  let back = word.substring(len - Math.floor(len / 2)).toLowerCase()

  //flip sides of the back letters
  let flip = back.split('').reverse().join('')

  //check if front letters and back letters are the same 
  if (front == flip) {
    result.innerHTML = `${word.toUpperCase()} is a palindrome`
  } else {
    result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`
  }
}