particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
        },
        "onclick": {
          "enable": true,
        },
        "resize": true
      },
      "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          }
      }
    },
    "retina_detect": true
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.main-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function showSection(sectionId) {
        sections.forEach(section => {
          if (section.id === sectionId) {
            section.classList.add('active');
          } else {
            section.classList.remove('active');
          }
        });
    }
  
    function updateActiveLink(activeLink) {
        navLinks.forEach(link => {
            if (link === activeLink) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
        });
    }
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSectionId = this.getAttribute('href').substring(1);
  
        showSection(targetSectionId);
  
        updateActiveLink(this);
  
        window.history.pushState({}, '', `#${targetSectionId}`);
      });
    });
    
    const currentHash = window.location.hash.substring(1) || 'about';
    showSection(currentHash);
    const currentActiveLink = Array.from(navLinks).find(link => link.getAttribute('href').substring(1) === currentHash);
    if(currentActiveLink) {
        updateActiveLink(currentActiveLink);
    } else {
        if(navLinks.length > 0){
            updateActiveLink(navLinks[0]);
        }
    }
  });
  