const navbar = document.getElementById('navbar');

navbar.style.backgroundColor = '#e4dede';
navbar.style.position = 'fixed';
navbar.style.top = 0;
navbar.style.width = '100%';
navbar.style.display = 'flex';
navbar.style.justifyContent = 'space-evenly';
navbar.style.alignItems = 'center';
navbar.style.padding = '20px';
navbar.style.zIndex = 1;

const links = navbar.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
  links[i].style.color = '#fff';
  links[i].style.textDecoration = 'none';
  links[i].style.margin = '0 10px';
  links[i].style.fontSize = '20px';
}

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    // navbar.style.boxShadow = '0 2px 2px rgba(0,0,0,0.2)';
    navbar.style.transition = 'all 0.3s ease-in-out';
  } else {
    navbar.style.boxShadow = 'none';
  }
});