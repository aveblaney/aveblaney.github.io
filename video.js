function playAvatarVideo() {
  const video = document.getElementById('avatar-video');
  
  if (!video) return;

  // Reset video position, play, and fade in
  video.currentTime = 0;
  video.classList.add('playing');
  video.play().catch(err => console.log('Autoplay issue:', err));

  // Fade out back to image once video ends
  video.onended = () => {
    video.classList.remove('playing');
  };
}