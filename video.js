function playAvatarVideo() {
  const video = document.getElementById('avatar-video');
  
  if (!video) return;

  video.currentTime = 0;
  video.classList.add('playing');
  video.play().catch(err => console.log('Autoplay issue:', err));

  video.onended = () => {
    video.classList.remove('playing');
  };
}