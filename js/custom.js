// Custom interactions for header and menu
// Shrinks header on scroll and normalizes menu button z-index
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.header');
  if (!header) return;

  // Ensure menu icon stays above content but below modals
  var menuBtn = header.querySelector('.t450__menuicon, .t450__burger');
  if (menuBtn) {
    menuBtn.style.zIndex = '1000';
  }

  // Toggle shrink class based on scroll position
  function onScroll() {
    if (window.scrollY > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  }

  window.addEventListener('scroll', onScroll);
});
