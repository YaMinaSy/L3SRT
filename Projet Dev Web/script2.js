// Sélectionner tous les boutons "Ajouter au panier"
const ajouterPanier = document.querySelectorAll('.ajouter-panier');

// Ajouter un événement "click" à chaque bouton
ajouterPanier.forEach(button => {
  button.addEventListener('click', () => {
    // Ajouter le livre au panier (non implémenté)
    console.log('Livre ajouté au panier');
  });
});

// Ajouter un événement "submit" au formulaire
const formulaire = document.querySelector('form');
formulaire.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêcher la soumission par défaut
  // Récupérer les valeurs du formulaire
  const prenom = document.getElementById('prenom').value;
  const adresse = document.getElementById('adresse').value;
  const telephone = document.getElementById('telephone').value;
  const paiement = document.getElementById('paiement').value;

  // Afficher les valeurs dans la console
  console.log(`Prénom : ${prenom}`);
  console.log(`Adresse : ${adresse}`);
  console.log(`Téléphone : ${telephone}`);
  console.log(`Paiement : ${paiement}`);

  // Réinitialiser le formulaire
  formulaire.reset();
});

// Sélectionner le bouton "Retour au début de page"
const retourAuDebut = document.querySelector('.retour-au-debut');

// Ajouter un événement "click" au bouton
retourAuDebut.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
