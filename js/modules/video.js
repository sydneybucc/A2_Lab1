var video = {
  //varibles at the top as usual
  videoPlayer : document.querySelector('video'),
  vidThumbs : document.querySelector('.vid_thumb'),
  volumeIdicator : document.querySelector('.vol-indicator'),

  //functionality comes next
  volOn(){
    video.videoPlayer.muted = false;
    video.volumeIdicator.classList.replace('fa-volume-off', 'fa-volume-up');
  },

  volOff(){
    video.videoPlayer.muted = true;
    video.volumeIdicator.classList.replace('fa-volume-up', 'fa-volume-off');
  },

  popOverlay () {
    let overlay = document.querySelector('.vid-overlay');
    overlay.classList.add('show-overlay');

    overlay.querySelector('i').addEventListener('click', video.replayVideo);
  },

  replayVideo () {
    //rewind and replay the video from the beginning
    video.videoPlayer.currentTime = 0;
    video.videoPlayer.play();

    let overlay = document.querySelector('.vid-overlay');
    overlay.classList.remove('show-overlay');

    overlay.querySelector('i').removeEventListener('click', video.replayVideo);
  },

  fetchVideoThumbs() {
    //do a db call with the fetch api (and hope it works!)
    let url = "./includes/functions.php?getVideos=true";

    fetch(url) // use the fetch api
      .then((resp) => resp.json()) //resp comes back as JSON, convert to plain object
      .then((data) => {video.loadVideoThumbs(data); })
      .catch(function(error) {
        console.log(error); //catch any errors along the way and report them in
      });
  },

  loadVideoThumbs(data) {
    //make sure this works!
    debugger;
    let thumbHolder = document.querySelector('.video-thumbs');

    data.forEach(thumb => {
      let docFrag =
      `<li class="vid-thumb" role="button" data-videopath="${thumb.path}">
        <img src="images/${thumb.placeholder}" alt="mini commercial" class="responsive">
      </li>`

      thumbHolder.innerHTML += docFrag;
    });

    thumbHolder.querySelectorAll('li').forEach((thumb) => thumb.addEventListener('click', video.loadNewVideo));
  },

  loadNewVideo() {
    //load and play new video source
    let videoPath = "video/" + this.dataset.videopath;

    video.videoPlayer.src = videoPath;
    video.videoPlayer.load();
    video.videoPlayer.play();

    video.volOn();
    let overlay = document.querySelector('.vid-overlay');
    overlay.classList.remove('show-overlay');
  },

  init() {
    console.log('added a video module');
    video.videoPlayer.addEventListener('mouseover', video.volOn, false);
    video.videoPlayer.addEventListener('mouseout', video.volOff);
    video.videoPlayer.addEventListener('ended', video.popOverlay);

    video.fetchVideoThumbs();
  }
}

video.init();
