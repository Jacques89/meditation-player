const app = () => {
  const track = document.querySelector('.track')
  const play = document.querySelector('.play')
  const outline = document.querySelector('.moving-outline circle')
  const video = document.querySelector('.vid-container video')

  // Sounds
  const sounds = document.querySelectorAll('.sound-picker button')
  // Time Display
  const timeDisplay = document.querySelector('.time-display')
  const timeSelect = document.querySelectorAll('.time-select button')
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

  // Sound selection
  timeSelect.forEach(option => {
    option.addEventListener('click', function() {
      fakeDuration = this.getAttribute('data-time')
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
    })
  })

  // stop & start track func
  const checkPlaying = track => {
    const vidPlayPause = track.paused ? video.play() : video.pause()
    play.src = track.paused ? './svg/pause.svg' : './svg/play.svg'
    track.paused ? track.play() && vidPlayPause && play.src  : track.pause() && vidPlayPause && play.src
  }


  // Circle Animation
  track.ontimeupdate = () => {
    let currentTime = track.currentTime
    let elapsed = fakeDuration - currentTime
    let minutes = Math.floor(elapsed / 60)
    let seconds = Math.floor(elapsed % 60)

    // Circle progress
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength
    outline.style.strokeDashoffset = progress

    // Text Animation
    timeDisplay.textContent = `${minutes}:${seconds}`

    // Stop the timer and circle
    if (currentTime >= fakeDuration)  {
      track.pause()
      currentTime = 0
      play.src = './svg/play.svg'
      video.pause()
    }
  }
}


app()