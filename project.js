document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-li');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      // e.preventDefault();
      toggleLinkColor(link);
    });
  });

  function toggleLinkColor(link) {
    // Remove 'active-link' class from all links
    links.forEach(link => {
      link.classList.remove('active-link');
      link.classList.add('default-link');
    });
 
    // Toggle 'active-link' class on the clicked link
    link.classList.remove('default-link');
    link.classList.add('active-link');
  }
});

var link1 = document.getElementById("btn1");
var link2 = document.getElementById("btn2");
link1.addEventListener('click', function() {
  window.location.href = 'http://127.0.0.1:5500/login.html';
});
link2.addEventListener('click', function() {
  window.location.href = 'http://127.0.0.1:5500/signup.html';
});
const t = document.querySelectorAll('.card-cover');

document.querySelectorAll('.plus, .plus1').forEach(button => {
  button.addEventListener('click', function() {
    this.classList.toggle('rotate');
  });

  // Loop through each '.card-back' element and add the event listener
  t.forEach(card => {
    card.addEventListener('click', function() {
      this.classList.toggle('hide');
    });
  });
});


document.querySelectorAll('.gallery-button').forEach(button => {
  button.addEventListener('mouseover', function() {
      this.classList.add('enlarge');
  });
  button.addEventListener('mouseout', function() {
      this.classList.remove('enlarge');
  });
}); 
