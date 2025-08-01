const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const hoverSign = document.querySelector('.hover-sign');
const videoList = [video1, video2, video3];

// Hover play/pause with hover-sign effect (for desktop)
videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
    hoverSign.classList.add("active");
  });

  video.addEventListener("mouseout", function () {
    video.pause();
    hoverSign.classList.remove("active");
    video.currentTime = 0;
  });
});

// Sidebar toggle logic
menu.addEventListener("click", function () {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function () {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});

// Auto-close sidebar on menu link click (for mobile UX)
document.querySelectorAll(".sidebar ul li a").forEach(link => {
  link.addEventListener("click", () => {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
  });
});

// Mobile-friendly: autoplay videos when they scroll into view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const video = entry.target;
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  });
}, { threshold: 0.5 });

// Observe all project videos
videoList.forEach(video => {
  observer.observe(video);
});
