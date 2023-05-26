// 

// Get the necessary elements
const video = document.querySelector('.flex');
const progressBar = document.querySelector('.progress__filled');
const playButton = document.querySelector('.player__button');
const volumeSlider = document.querySelector('[name="volume"]');
const playbackSpeedSlider = document.querySelector('[name="playbackRate"]');
const skipButtons = document.querySelectorAll('[data-skip]');

// Add event listeners
video.addEventListener('timeupdate', updateProgress);
playButton.addEventListener('click', togglePlay);
volumeSlider.addEventListener('input', updateVolume);
playbackSpeedSlider.addEventListener('input', updatePlaybackSpeed);
skipButtons.forEach(button => button.addEventListener('click', skip));

// Function to toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = '❚ ❚'; // Change button text to pause symbol
  } else {
    video.pause();
    playButton.textContent = '►'; // Change button text to play symbol
  }
}

// Function to update progress bar
function updateProgress() {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progress}%`;
}

// Function to update volume
function updateVolume() {
  video.volume = this.value;
}

// Function to update playback speed
function updatePlaybackSpeed() {
  video.playbackRate = this.value;
}

// Function to skip forward or backward
function skip() {
  const skipTime = parseFloat(this.dataset.skip);
  video.currentTime += skipTime;
}
