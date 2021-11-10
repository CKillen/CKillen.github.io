const projectButton = document.querySelector("#project-button");
const projectSection = document.querySelector('#project-section');
const projects = Array.from(document.querySelectorAll('.project'));
const projectContent = Array.from(document.querySelectorAll('.project-content'));
const projectContentH2 = Array.from(document.querySelectorAll('.project-content h2'))
const projectLinks = Array.from(document.querySelectorAll('.project a'));

document.addEventListener('DOMContentLoaded', function () {
  window.scrollTo(0, 0)
}, false);

document.addEventListener("click", (event) => {
  if(event.target === projectButton) {
    setTimeout(() => {
      let scrollLength = parseInt(projectSection.offsetTop);
      if(projects.length < 3) {
        scrollLength += 225;
      }
      window.scroll({
        top: scrollLength,
        behavior: 'smooth',
      })
      setTimeout(fadeInProjects, 1250, 0)
    }, 1000)
    projectButton.classList.remove('blob-idle')
    projectButton.classList.add('blob-drop')
  }

  if(projectContent.includes(event.target)) {
    clearProjectLinks();
    event.target.parentNode.children[1].classList.remove('slide-left-back')
    event.target.parentNode.children[1].classList.add('slide-left')
    event.target.parentNode.children[2].classList.remove('slide-right-back')
    event.target.parentNode.children[2].classList.add('slide-right')
  }

  if(projectContentH2.includes(event.target)) {
    clearProjectLinks();
    event.target.parentNode.parentNode.children[1].classList.remove('slide-left-back')
    event.target.parentNode.parentNode.children[1].classList.add('slide-left')
    event.target.parentNode.parentNode.children[2].classList.remove('slide-right-back')
    event.target.parentNode.parentNode.children[2].classList.add('slide-right')
  }


  if(event.target === projectSection) {
    projectLinks.forEach(a => {
      if(a.classList.contains('slide-left')) {
        a.classList.add('slide-left-back')
        a.classList.remove('slide-left');
      } 
      if(a.classList.contains('slide-right')) {
        a.classList.add('slide-right-back')
        a.classList.remove('slide-right');
      }
    })    
  }
})

function fadeInProjects(i) {
  if(i < projects.length) {
    projects[i].classList.add('fade-in');
    i++;
    setTimeout(fadeInProjects, 300, i)
  }
  //Run a recursive setTimeout to add fade in to each project in qall 
  //Projects should be in a grid (max of 6 projects) with space around
  //
}

document.addEventListener('mouseover', (event) => {
  if(projects.includes(event.target) || projectContent.includes(event.target)) {
    event.target.parentNode.children[1].classList.remove('slide-left-back')
    event.target.parentNode.children[1].classList.add('slide-left')
    event.target.parentNode.children[2].classList.remove('slide-right-back')
    event.target.parentNode.children[2].classList.add('slide-right')
  }
  if(event.target === projectSection) {
    clearProjectLinks();
  }
})

function clearProjectLinks() {
  projectLinks.forEach(a => {
    if(a.classList.contains('slide-left')) {
      a.classList.add('slide-left-back')
      a.classList.remove('slide-left');
    } 
    if(a.classList.contains('slide-right')) {
      a.classList.add('slide-right-back')
      a.classList.remove('slide-right');
    }
  })    
}
