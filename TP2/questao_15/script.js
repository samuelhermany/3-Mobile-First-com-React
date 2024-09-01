function clickMenu(){
   const element = document.getElementById('menu-burger');

   const elementMenu = document.getElementById('menu');
   const estilo = window.getComputedStyle(elementMenu);

   const elementNav = document.getElementById('nav');

   // Verifica o texto atual e troca para o outro texto
   if (element.textContent == 'menu') {
      element.textContent = 'close';
      elementMenu.style.visibility = "visible";
      elementNav.style.height = "278px";
   } else {
      element.textContent = 'menu';
      elementMenu.style.visibility = "hidden";
      elementNav.style.height = "65px";
  }
}

// const mediaQuery = window.matchMedia('(max-width: 768px)');
// const elementNav = document.getElementById('nav');

// // Verifica se a consulta de mídia corresponde
// if (mediaQuery.matches) {
//    elementNav.style.height = "65px";
// } else {
//    elementNav.style.height = "65px";
// }