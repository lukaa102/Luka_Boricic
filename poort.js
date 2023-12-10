function prikaziRecenzije(recenzije, container) {

    recenzije.sort((a, b) => (a.lajkovi - a.dislajkovi) < (b.lajkovi - b.dislajkovi) ? 1 : -1);
    recenzije.forEach(recenzija => {
      const div = document.createElement('div');
      div.classList.add('d-flex', 'flex-column', 'p-1', 'text-center', 'bg-secondary');
      div.style.setProperty('--bs-bg-opacity', '.25');

      div.innerHTML = `
        <p>${recenzija.tekst}</p>
        <p>Korisnik: ${recenzija.korisnik}</p>
        <p>Lajkovi-dislajkovi: ${recenzija.lajkovi - recenzija.dislajkovi}</p>
      `;

      container.appendChild(div);
    });
  }