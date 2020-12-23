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

  // Different sound selection
  sounds.forEach(sound => {
    sound.addEventListener('click', function() {
      track.src = this.getAttribute('data-sound')
      video.src = this.getAttribute('data-video')
      // checkPlaying(track)
    })
  })

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
    let seconds = Math.floor(elapsed % 60)
    let minutes = Math.floor(elapsed / 60)
    timeDisplay.textContent = `${minutes}:${seconds}`
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength
    outline.style.strokeDashoffset = progress
  
    if (currentTime >= fakeDuration) {
      track.pause()
      track.currentTime = 0
      play.src = "./svg/play.svg"
      video.pause()
    }
  }
}

app()