// global variables
const sections = document.querySelectorAll('section');
const menu = document.getElementById('navbar__list');

// create navbar section menu
  sections.forEach((section) => {
    navName = section.getAttribute('data-nav');
    li = document.createElement('li');
    li.innerHTML = `<a class="navlink" href="#${section.id}">${navName}</a>`;
    menu.appendChild(li);
  })

// smooth scroll
  document.getElementById('navbar').addEventListener('click', function (scroll) {
    scroll.preventDefault();
    const toPage = scroll.target;
    if (toPage.classList.contains('navlink')) {
        const linkid = toPage.getAttribute('href').slice(1);
        document.getElementById(linkid).scrollIntoView({ behavior: 'smooth' });
  }
});

//  active and disabled class section

function addClass(section) {
  const getId = section.getAttribute("id");
  document.querySelector(`#${getId}`).classList.add('your-active-class');
}

function removeClass(section) {
  const getId = section.getAttribute("id");
  document.querySelector(`#${getId}`).classList.remove('your-active-class');
}

// function to make the transparent box move when scroll
const activeSection = function () {
     sections.forEach(function(section) {
     let getElem = section.getBoundingClientRect();
     if (getElem.top > 0 && getElem.top < window.innerHeight) {
          addClass(section)
         } else {
          removeClass(section)
      };
   });
  };
window.addEventListener('scroll', activeSection);



