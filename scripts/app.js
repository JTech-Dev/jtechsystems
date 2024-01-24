const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

// const emailButton = document.getElementById('em-btn');
// emailButton.addEventListener("click", function(e){
//     e.preventDefault();

//     let nameValue = document.getElementById('name').value;
//     let subjectValue = document.getElementById('subject').value;
//     let messageValue = document.getElementById('message').value;
    

//     window.location.href = `mailto:jtechstudiosdev@gmail.com?subject=${nameValue}, ${subjectValue}&body=${messageValue}`;
// })

// $(document).ready(function() {
//     $('.services_img_lg').click(function(e) {
//       $(this).toggleClass('enlarge-img');
//     });
// });

// function fullScreenImg() {
//     let imgContainer = document.querySelectorAll(".services_img_lg");
//     imgContainer.forEach(x => x.classList.toggle("enlarge-img"));
// }

// document.querySelector(".services_img_lg").addEventListener("click", fullScreenImg);