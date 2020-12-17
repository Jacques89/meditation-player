const app = () => {
  const track = document.querySelector('.track')
  const play = document.querySelector('.play')
  const outline = document.querySelector('.moving-outline circle')
  const video = document.querySelector('.vid-container video')

  // Sounds
  const sounds = document.querySelectorAll('.sound-picker button')
  // Time Display
  const timeDisplay = document.querySelector('.time-display')
  // Length of outline
  const outlineLength = outline.getTotalLength()
  // Duration
  let fakeDuration = 600

  outline.style.strokeDasharray = outlineLength
  outline.style.strokeDashoffset = outlineLength

}


app()