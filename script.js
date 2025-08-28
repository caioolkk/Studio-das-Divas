// script.js

// Menu Mobile
document.getElementById('menu-toggle').addEventListener('click', () => {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.remove('active');
  });
});

// Modal de Agendamento
document.getElementById('open-booking').addEventListener('click', () => {
  document.getElementById('booking-modal').style.display = 'flex';
});

document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('booking-modal').style.display = 'none';
});

window.addEventListener('click', (e) => {
  const modal = document.getElementById('booking-modal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Enviar para WhatsApp
document.getElementById('send-whatsapp').addEventListener('click', () => {
  const clientName = document.getElementById('client-name').value.trim();
  const checkboxes = document.querySelectorAll('.service-checkboxes input[type="checkbox"]:checked');
  const selectedServices = Array.from(checkboxes).map(cb => cb.value);

  if (!clientName) {
    alert('Por favor, insira seu nome.');
    return;
  }

  if (selectedServices.length === 0) {
    alert('Por favor, selecione pelo menos um serviço.');
    return;
  }

  const message = `Olá! Meu nome é ${clientName}.\n\nTenho interesse nos serviços:\n${selectedServices.map(s => `✅ ${s}`).join('\n')}\n\nPodem me informar um horário disponível?`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/5581983214472?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');

  // Fechar modal e limpar
  document.getElementById('booking-modal').style.display = 'none';
  document.getElementById('client-name').value = '';
  checkboxes.forEach(cb => cb.checked = false);
});

// Rolagem Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  });
});