// Initialize Particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.6, random: true },
    size: { value: 4, random: true },
    line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 3, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
  },
  retina_detect: true
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('active');
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Scroll-to-top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const scrollButton = document.querySelector('.scroll-to-top');
  scrollButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Button click animation
document.querySelectorAll('.download-links a, .contact-form button, .chat-input button').forEach(button => {
  button.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => this.style.transform = 'scale(1)', 200);
  });
});

// Contact form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !emailRegex.test(email) || !message) {
    alert('Please fill in all fields with a valid email.');
    return;
  }
  alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);
  document.getElementById('contact-form').reset();
}

// Live chat simulation
const chatResponses = [
  'Sure, I can help! What do you need assistance with?',
  'WhatsApp offers end-to-end encryption for all chats.',
  'Try downloading the app from the Download section!',
  'For business inquiries, check out the Business section.',
  'Have you explored our Security features?'
];

function toggleChat() {
  const chatBox = document.getElementById('chat-box');
  chatBox.classList.toggle('active');
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const chatBody = document.getElementById('chat-body');
  const message = input.value.trim();

  if (message) {
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.textContent = message;
    chatBody.appendChild(userMessage);

    // Show typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'chat-message typing';
    typingIndicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    chatBody.appendChild(typingIndicator);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simulate bot response
    setTimeout(() => {
      chatBody.removeChild(typingIndicator);
      const botMessage = document.createElement('div');
      botMessage.className = 'chat-message bot';
      botMessage.textContent = chatResponses[Math.floor(Math.random() * chatResponses.length)];
      chatBody.appendChild(botMessage);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1500);

    input.value = '';
  }
}

document.getElementById('chat-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendChatMessage();
  }
});

// Testimonial slider
let slideIndex = 0;
function showSlides() {
  const slides = document.getElementById('testimonial-slides');
  const totalSlides = document.querySelectorAll('.testimonial').length;
  slideIndex = (slideIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
setInterval(showSlides, 5000);

// Scroll-triggered animations
window.addEventListener('scroll', () => {
  document.querySelectorAll('.feature-box, .gallery-item, .testimonial').forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }
  });
});

// Optimized cursor trail effect
let trailCount = 0;
const maxTrails = 10;
function createTrail(e) {
  if (trailCount >= maxTrails) return;
  trailCount++;
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
  document.body.appendChild(trail);
  setTimeout(() => {
    trail.style.transform = 'scale(0)';
    setTimeout(() => {
      trail.remove();
      trailCount--;
    }, 200);
  }, 500);
}

// Debounce mousemove for performance
let lastMove = 0;
document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastMove > 50) {
    createTrail(e);
    lastMove = now;
  }
});

// Keyboard navigation support
document.querySelectorAll('button, a, input, textarea').forEach(element => {
  element.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      element.click();
    }
  });
});