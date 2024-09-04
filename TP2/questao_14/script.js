document.getElementById('check').addEventListener('change', function() {
   const icon = document.querySelector('.checkbtn i');
   console.log(icon);

   // Alterna os 3 tracinhos para X
   if (this.checked) {
      console.log(1);
      icon.classList.remove('fas', 'fa-bars');
      icon.classList.add('fa-solid', 'fa-xmark');
      document.querySelector('main').style.visibility = 'hidden';
      document.body.style.overflow = 'hidden';
   // Alterna o X para os 3 tracinhos
   } else {
      icon.classList.remove('fa-solid', 'fa-xmark');
      icon.classList.add('fas', 'fa-bars');
      document.querySelector('main').style.visibility = 'visible';
      document.body.style.overflow = '';
   }
});