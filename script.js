document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  const video = document.querySelector('.player__video');
  const progress = document.querySelector('.progress__filled');
  const playButton = document.querySelector('.player__button');
  const volumeRange = document.querySelector('.player__slider[name="volume"]');
  const playbackSpeedRange = document.querySelector('.player__slider[name="playbackRate"]');
  const skipButtons = document.querySelectorAll('.player__button[data-skip]');

// Add event listeners
video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgress);
volumeRange.addEventListener('input', updateVolume);
playbackSpeedRange.addEventListener('input', updatePlaybackSpeed);
skipButtons.forEach(button => button.addEventListener('click', skip));

// Function to toggle play/pause
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// Function to update play/pause button
function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  playButton.textContent = icon;
}

// Function to update progress bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.flexBasis = `${percent}%`;
}

// Function to update volume
function updateVolume() {
  video.volume = volumeRange.value;
}

// Function to update playback speed
function updatePlaybackSpeed() {
  video.playbackRate = playbackSpeedRange.value;
}

// Function to skip forward or backward
function skip() {
  const skipTime = parseFloat(this.dataset.skip);
  video.currentTime += skipTime;
}
	  });