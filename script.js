// Automatically update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// IMAGE LIGHTBOX MODAL ZOOM LOGIC
document.querySelectorAll('.figure-card img, .obs-thumb').forEach(img => {
  img.addEventListener('click', function() {
    let modal = document.getElementById('image-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'image-modal';
      modal.innerHTML = '<span class="modal-close">&times;</span><img id="modal-img" src="" alt="Zoomed view">';
      document.body.appendChild(modal);
      
      modal.addEventListener('click', closeModal);
    }
    const modalImg = document.getElementById('modal-img');
    modalImg.src = this.src;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  const modal = document.getElementById('image-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
