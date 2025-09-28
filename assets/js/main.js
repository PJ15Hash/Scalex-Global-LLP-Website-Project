
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('menuBtn');
  const mobile = document.getElementById('mobileNav');
  btn && btn.addEventListener('click', function(){
    mobile.classList.toggle('show');
    btn.setAttribute('aria-expanded', mobile.classList.contains('show'));
  });
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior: 'smooth'}); mobile.classList.remove('show'); }
    });
  });
});
