function togglePanel() {
  var panel = document.querySelector('.panel');
  if (panel.style.display === 'block') {
    panel.style.display = 'none';
  } else {
    panel.style.display = 'block';
  }
}


function togglePanel2() {
  var panel = document.querySelector('.panel2');
  if (panel.style.display === 'block') {
    panel.style.display = 'none';
  } else {
    panel.style.display = 'block';
  }
}


function togglePanel3() {
  var panel = document.querySelector('.panel3');
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
