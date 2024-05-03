window.onscroll = function() {glassmorph()};

function glassmorph() {
  if (document.documentElement.scrollTop > 350) {
    document.getElementsByTagName('header')[0].className = 'fixed-top';
    document.getElementsByTagName('header')[0].classList.add('glassmorph');
    document.querySelector('.navbar').classList.remove('navbar-dark');
    document.querySelector('.navbar').classList.add('navbar-light');
    document.querySelector('.logo').classList.add('d-none');
    document.querySelector('.logo-black').classList.remove('d-none');
    document.querySelector('.burger').classList.add('d-none');
    document.querySelector('.burger-black').classList.remove('d-none');
    document.querySelector('.back-to-top').classList.remove('opacity-0');
  } else {
    document.getElementsByTagName('header')[0].classList.remove('fixed-top');
    document.getElementsByTagName('header')[0].classList.remove('glassmorph');
    document.querySelector('.navbar').classList.add('navbar-dark');
    document.querySelector('.navbar').classList.remove('navbar-light');
    document.querySelector('.logo').classList.remove('d-none');
    document.querySelector('.logo-black').classList.add('d-none');
    document.querySelector('.burger').classList.remove('d-none');
    document.querySelector('.burger-black').classList.add('d-none');
    document.querySelector('.back-to-top').classList.add('opacity-0');
    
  }
}

function controllaForm() { 
  let nome = document.getElementById('nome');
  let email = document.getElementById('email');
  let messaggio = document.getElementById('messaggio');
  let checkbox = document.getElementById('checkbox_id');
  const classRequired = 'obbligatorio';

  if (nome.value === '' && nome.className != classRequired ) {
      nome.className = classRequired;
      nome.placeholder = 'Obbligatorio';
  }
  if (email.value === '' && email.className != classRequired ) {
      email.className = classRequired;
      email.placeholder = 'Obbligatorio';
  }
  if (checkbox.checked == false) { 
      checkbox.className = classRequired;
  }

/* ----- CONTROLLO STRINGHE ----- */
  let campiValidi = false;
  
  if (nome.value || messaggio.value || email.value || checkbox.checked) {
      if (nome.value && !nome.value.match(/^[a-z ,.'-]+$/i)) {
          alert('Nel campo nome possono essere inserite solo lettere');
      }
      else if (email.value && !email.value.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g)) {
          alert('Inserisci un indirizzo email valido');
      }
      else if (!messaggio.value) {
        alert('Inserisci un messaggio');
      }
      else if (!checkbox.checked) {
        alert('Accetta Termini e Tiburtina');
      }
      else {
          campiValidi = true;
      }
  }
  
  if (!nome.value || !email.value || !messaggio.value) {
    alert('Compila tutti i campi prima!');
  }
  console.log(campiValidi);
  if (campiValidi && checkbox.checked) {
    alert('Messaggio Inviato! Grazie.\n\nNome: ' + nome.value+ '\nEmail: ' + email.value  + '\nMessaggio: ' + messaggio.value );
  }

}