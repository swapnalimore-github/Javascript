const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & Pause Video
function toggleVideoStatus() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

// Upate Play Icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

//Update Progress
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    let mins = Math.floor(video.currentTime / 60);
    if (mins < video.duration) {
        mins = '0' + String(mins);
    }

    let secs = Math.floor(video.currentTime % 60);
    if (secs < video.duration) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`
}

// Set Progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop Video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('click', updateProgress);

play.addEventListener('click', toggleVideoStatus);

progress.addEventListener('click', setVideoProgress);
pause.addEventListener('click', stopVideo);
