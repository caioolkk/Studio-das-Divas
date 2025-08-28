document.addEventListener('DOMContentLoaded', function () {
  console.log('✅ Script carregado com sucesso!');

  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const modal = document.getElementById('booking-modal');
  const openModalBtn = document.getElementById('open-booking');
  const closeModalBtn = document.getElementById('close-modal');
  const sendBtn = document.getElementById('send-whatsapp');
  const clientNameInput = document.getElementById('client-name');
  const serviceCheckboxes = document.querySelectorAll('.service-checkboxes input[type="checkbox"]');

  // Menu Mobile
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Fechar menu ao clicar em link
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // Abrir Modal
  if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  }

  // Fechar Modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Enviar para WhatsApp
  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      const clientName = clientNameInput.value.trim();
      const selectedServices = Array.from(serviceCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

      if (!clientName) {
        alert('Por favor, insira seu nome.');
        clientNameInput.focus();
        return;
      }

      if (selectedServices.length === 0) {
        alert('Por favor, selecione pelo menos um serviço.');
        return;
      }

      const message = `Olá! Meu nome é ${clientName}.\n\nTenho interesse nos serviços:\n${selectedServices.map(s => `✅ ${s}`).join('\n')}\n\nPodem me informar um horário disponível?`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/5581983214472?text=${encodedMessage}`;

      console.log('URL:', whatsappUrl);
      window.open(whatsappUrl, '_blank');

      modal.style.display = 'none';
      clientNameInput.value = '';
      serviceCheckboxes.forEach(cb => cb.checked = false);
    });
  }

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
});