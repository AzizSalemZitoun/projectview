// Open video in new tab
window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('videoBtn').onclick = function() {
    window.open('https://drive.google.com/file/d/1OmggkxdnSIYR24id4dC2oDrh6_n9Qtd9/view?usp=drive_link', '_blank');
  };
  // Team member links
  document.querySelectorAll('.team-list li').forEach(function(li) {
    li.addEventListener('click', function() {
      window.open(li.getAttribute('data-link'), '_blank');
    });
    li.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        window.open(li.getAttribute('data-link'), '_blank');
      }
    });
    li.setAttribute('tabindex', '0');
    li.setAttribute('role', 'button');
    li.setAttribute('aria-label', 'Open GitHub profile');
  });

  // Interactive 3D hover for tech cards
  document.querySelectorAll('.tech-card').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (centerY - y) / 10;
      const rotateY = (x - centerX) / 10;
      card.style.transform = `scale(1.09) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
    });
  });

  // Interactive 3D hover for team cards
  document.querySelectorAll('.team-list li').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (centerY - y) / 8;
      const rotateY = (x - centerX) / 8;
      card.style.transform = `scale(1.09) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
    });
  });

  // Interactive 3D hover for feature cards
  document.querySelectorAll('.feature-list li').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (centerY - y) / 12;
      const rotateY = (x - centerX) / 12;
      card.style.transform = `scale(1.04) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
    });
  });

  // Toggle timeline visibility
  var timelineBtn = document.getElementById('toggle-timeline');
  var timeline = document.getElementById('timeline');
  if (timelineBtn && timeline) {
    timelineBtn.addEventListener('click', function() {
      if (timeline.style.display === 'none') {
        timeline.style.display = 'block';
        timelineBtn.textContent = 'Hide Project Development';
      } else {
        timeline.style.display = 'none';
        timelineBtn.textContent = 'Show Project Development';
      }
    });
  }
});
