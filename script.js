document.addEventListener('DOMContentLoaded', function(){
  var hamb = document.getElementById('hambtn');
  var nav = document.getElementById('navlinks');
  hamb && hamb.addEventListener('click', function(){
    if(nav.style.display === 'flex' || nav.style.display === 'block'){
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
    }
  });

  var form = document.getElementById('contactForm');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('name').value || 'Client';
    alert('Mulțumim ' + name + '! Am primit mesajul tău. Te sunăm în scurt timp.');
    form.reset();
  });
});
