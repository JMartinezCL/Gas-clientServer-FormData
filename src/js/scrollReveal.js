import ScrollReveal from 'scrollreveal';
window.sr = new ScrollReveal();

sr.reveal('.row', { duration:1500, origin:'top', delay: 250, distance: '80px' });
sr.reveal('#user-list', { duration:1500, origin:'top', delay: 500, distance: '100px' });
sr.reveal('#gas-image', { duration:1500, origin:'right', delay: 600, distance: '300px' });
sr.reveal('#gas-text', { duration:1500, origin:'left', delay: 550, distance: '300px' });
sr.reveal('.hr', { duration:1500, origin:'top', delay: 300, distance: '80px' });
sr.reveal('.nav-wrapper',{ duration:2000});