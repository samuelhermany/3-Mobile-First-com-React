function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");

   var elMain = element.querySelector("main");

   var button = document.getElementById("btnMode");
   var elements = document.querySelectorAll("p");
   var elementsT = document.querySelectorAll("h1, h2, strong");

   if (button.innerText === "Dark mode") {
       button.innerText = "Clean mode";
       button.style.backgroundColor = "#ffffff";
       button.style.color = "#333";

       elMain.style.backgroundColor = "#333"

       elements.forEach(el => {
           el.style.color = "#ffffff";
       });

       elementsT.forEach(el => {
           el.style.color = '#007bff';
       });
   }
   else {
       button.innerText = "Dark mode";
       button.style.backgroundColor = "#333";
       button.style.color = "#fff";

       elements.forEach(el => {
           el.style.color = "#333";
       });

       elMain.style.backgroundColor = "#fff"
   }
}

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