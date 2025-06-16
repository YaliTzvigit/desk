
/* Section Modal cards */
const trigger = document.getElementById('previewTrigger');
const preview = document.getElementById('previewBox');

trigger.addEventListener('mouseenter', () => {
  preview.style.display = 'block';
});

trigger.addEventListener('mouseleave', () => {
  preview.style.display = 'none';
});