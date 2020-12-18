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

  // play sounds
  play.addEventListener('click', () => {
    checkPlaying(track)
  })

  // stop & start track func
  const checkPlaying = track => {
    play.src = track.paused ? './svg/pause.svg' : './svg/play.svg'
    track.paused ? track.play() && play.src && video.play : track.pause() && play.src && video.pause()
  }

}


app()