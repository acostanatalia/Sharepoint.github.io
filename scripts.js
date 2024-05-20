function togglePanel() {
  var panel = document.querySelector('.panel');
  if (panel.style.display === 'block') {
    panel.style.display = 'none';
  } else {
    panel.style.display = 'block';
  }
}



function openLightbox(pdfSrc) {
  var lightbox = document.getElementById('lightbox');
  var pdfEmbed = document.getElementById('pdf-embed');
  pdfEmbed.src = pdfSrc;
  lightbox.style.display = 'block';
}

function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}
