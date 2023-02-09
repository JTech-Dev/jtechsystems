const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

// Head
// class MainHead extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `
//         <head>
//         <meta charset="UTF-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="keywords" content="POS, Point of Sale, Caja Registradora" />
//         <meta
//           name="description"
//           content="This website focuses on Point Of Sales systems"
//         />
//         <title>JTech Studios | Home</title>
//         <link rel="stylesheet" href="/styles.css" />
//         <link rel="stylesheet" href="/font-awesome/css/all.css" />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//         `
//     }
// }

// customElements.define('main-head', MainHead)

// Navbar
// class MainNavbar extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `
//         <nav class="navbar">
//             <div class="navbar_container">
//             <a href="/" id="navbar_logo"
//                 ><i class="fa-solid fa-signature logo_icon"></i> JTECH STUDIOS
//             </a>
//             <div class="navbar_toggle" id="mobile-menu">
//                 <span class="bar"></span>
//                 <span class="bar"></span>
//                 <span class="bar"></span>
//             </div>
//             <ul class="navbar_menu">
//                 <li class="navbar_item">
//                 <a href="/pages/index.html" class="navbar_links">Home</a>
//                 </li>
//                 <li class="navbar_item">
//                 <a href="/pages/services.html" class="navbar_links">Services</a>
//                 </li>
//                 <li class="navbar_item">
//                 <a href="/pages/product.html" class="navbar_links">Products</a>
//                 </li>
//                 <li class="navbar_btn">
//                 <a href="/" class="button">Sign Up</a>
//                 </li>
//             </ul>
//             </div>
//         </nav>
//         `
//     }
// }

// customElements.define('main-navbar', MainNavbar)

// // Footer
// class MainFooter extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `
//         <div class="footer_container">
//             <div class="footer_links">
//             <div class="footer_link-wrapper">
//                 <div class="footer_link-items">
//                 <h2>Help</h2>
//                 <a
//                     href="mailto: jtechstudiosdev@gmail.com?subject=About your products&body=Hi"
//                     >Email Us</a
//                 >
//                 <a href="/">Get demo</a>
//                 <a href="/">See Videos</a>
//                 <a href="/">Ask a Quote</a>
//                 </div>
//                 <div class="footer_link-items">
//                 <h2>Products</h2>
//                 <a href="/">BlazePOS</a>
//                 <a href="/">DroidPOS</a>
//                 <a href="/">Blazing Chef</a>
//                 <a href="/">Blaze Scan</a>
//                 </div>
//                 <div class="footer_link-items">
//                 <h2>About</h2>
//                 <a href="/">About Us</a>
//                 <a href="/">Terms of Services</a>
//                 </div>
//             </div>
//         </div>
  
//         <div class="social_media">
//           <div class="social_media-wrap">
//             <div class="footer_logo">
//               <a href="/" id="footer_logo"
//                 ><i class="fa-solid fa-signature logo_icon"></i>JTECH</a
//               >
//             </div>
//             <p class="website_rights">
//               © JTECH STUDIOS 2023. All rights reserved
//             </p>
//             <div class="social_icons">
//               <a href="/" class="social_icon-link" target="_blank">
//                 <i class="fab fa-facebook"></i>
//               </a>
//               <a href="/" class="social_icon-link" target="_blank">
//                 <i class="fab fa-instagram"></i>
//               </a>
//               <a href="/" class="social_icon-link" target="_blank">
//                 <i class="fab fa-twitter"></i>
//               </a>
//               <a href="/" class="social_icon-link" target="_blank">
//                 <i class="fab fa-youtube"></i>
//               </a>
//               <a href="/" class="social_icon-link" target="_blank">
//                 <i class="fab fa-linkedin"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//         `
//     }
// }

// customElements.define('main-footer', MainFooter)