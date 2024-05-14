document.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.querySelector(".video-container");
  const video = videoContainer.querySelector("video");
  const thumbnail = videoContainer.querySelector("img");
  // 비디오 일시정지 상태에서 썸네일 보이기
  video.addEventListener("pause", function () {
    thumbnail.style.display = "block";
  });

  // 비디오 재생 상태에서 썸네일 숨기기
  videoContainer.addEventListener("play", function () {
    thumbnail.style.display = "none";
  });

  // 비디오 재생 상태에서 비디오 재생
  videoContainer.addEventListener("mouseenter", function () {
    if (video.paused) {
      video.play();
    }
  });

  // 마우스 떼면 비디오 일시정지
  videoContainer.addEventListener("mouseleave", function () {
    if (!video.paused) {
      video.pause();
    }
  });
});
