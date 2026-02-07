

fetch('../dropmenu.html')
  .then(res => res.text())
  .then(html => {
    const menu = document.getElementById('dropmenu');
    menu.innerHTML = html;

    const current = location.pathname.split('/').pop();

    menu.querySelectorAll('a').forEach(a => {
      if (a.getAttribute('href') === current) {
        a.classList.add('active');
      }
    });
  })
  .catch(err => console.error(err));


fetch('../burger-menu.html')
  .then(res => res.text())
  .then(html => {
    const menu = document.getElementById('burger-menu');
    menu.innerHTML = html;

    const current = location.pathname.split('/').pop();

    menu.querySelectorAll('a.b-link').forEach(a => {
      if (a.getAttribute('href') === current) {
        a.classList.add('active');
      }
    });
  })
  .catch(err => console.error(err));

