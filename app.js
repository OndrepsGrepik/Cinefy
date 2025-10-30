
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').substring(1);
    document.querySelectorAll('main section').forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
  });
});
document.getElementById('home').style.display = 'block';
