function toggleCheckbox() {
   const checkbox = document.getElementById('check');
   const icon = document.querySelector('.checkbtn i');
//    alert("passou 01");

   if (checkbox.checked) {
    // alert("passou 02");
       icon.classList.remove('fas', 'fa-bars');
       icon.classList.add('fa-solid', 'fa-xmark');
       document.querySelector('main').style.visibility = 'hidden';
       document.body.style.overflow = 'hidden';
   } else {
    // alert("passou 03");
       icon.classList.remove('fa-solid', 'fa-xmark');
       icon.classList.add('fas', 'fa-bars');
       document.querySelector('main').style.visibility = 'visible';
       document.body.style.overflow = '';
   }
}