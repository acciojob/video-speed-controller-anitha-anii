
  const video = document.querySelector('.player__video');
  const progress = document.querySelector('.progress__filled');
  const playButton = document.querySelector('.player__button');
  const volumeRange = document.querySelector('.player__slider[name="volume"]');
  const playbackSpeedRange = document.querySelector('.player__slider[name="playbackRate"]');
  const skipButtons = document.querySelectorAll('.player__button[data-skip]');


function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = '❚ ❚';
  } else {
    video.pause();
    playButton.textContent = '►';
  }
}

// Function to update the progress bar
function updateProgressBar() {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progress}%`;
}

// Function to handle volume change
function changeVolume() {
  video.volume = volumeRange.value;
}

// Function to handle playback speed change
function changePlaybackSpeed() {
  video.playbackRate = playbackSpeedRange.value;
}

// Function to handle skip buttons
function skipVideo() {
  const skipTime = parseFloat(this.dataset.skip);
  video.currentTime += skipTime;
}

// Add event listeners
playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgressBar);
volumeRange.addEventListener('input', changeVolume);
playbackSpeedRange.addEventListener('input', changePlaybackSpeed);
skipButtons.forEach(button => button.addEventListener('click', skipVideo));

// Set the video source
video.src = 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4';
