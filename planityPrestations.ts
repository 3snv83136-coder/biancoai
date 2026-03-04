export interface PlanityPrestation {
  title: string;
  duration: string;
  price: string;
}

export interface PlanityCategory {
  label: string;
  items: PlanityPrestation[];
}

/** Prestations listées sur Planity – résumé pour la page Nos prestations */
export const planityPrestations: PlanityCategory[] = [
  {
    label: 'Soins corps',
    items: [
      { title: 'Soin 100% sur-mesure – 1H', duration: '1h15', price: 'de 52 € à 130 €' },
      { title: 'Soin signature Indonésie ancestrale', duration: '1h15', price: '90 €' },
      { title: 'Modelage relaxant', duration: '45 min', price: '40 €' },
      { title: 'Modelage californien 1h', duration: '1h15', price: '80 €' },
      { title: 'Modelage californien 1h30', duration: '1h45', price: '98 €' },
      { title: 'Soin du dos (gommage + massage)', duration: '50 min', price: '55 €' },
      { title: 'Gommage avec évasion au choix – 30 min', duration: '45 min', price: '52 €' },
      { title: 'Modelage avec évasion au choix – 50 min', duration: '1h05', price: '75 €' },
      { title: 'Gommage + Modelage avec évasion au choix – 1h05', duration: '1h25', price: '102 €' },
      { title: 'Gommage + Enveloppement évasion au choix – 50 min', duration: '1h05', price: '75 €' },
      { title: 'Enveloppement + Modelage évasion au choix – 1h10', duration: '1h20', price: '102 €' },
      { title: 'Enveloppement évasion au choix – 30 min', duration: '40 min', price: '52 €' },
      { title: 'Gommage + Enveloppement + Modelage – 1h30', duration: '1h45', price: '130 €' },
      { title: 'Extension du soin – 20 min', duration: '20 min', price: '25 €' },
    ],
  },
  {
    label: 'Soins visage',
    items: [
      { title: 'Soin fondamental', duration: '55 min', price: '63 €' },
      { title: 'Traitement intensif hydratant', duration: '1h30', price: '92 €' },
      { title: 'Traitement intensif jeunesse', duration: '1h30', price: '92 €' },
      { title: 'Soin éclat fraîcheur certifié bio', duration: '45 min', price: '53 €' },
      { title: 'Soin saisonnier Automne/Hiver prune-framboise', duration: '50 min', price: '63 €' },
      { title: 'Traitement intensif défense éclat DX Glow', duration: '1h30', price: '92 €' },
      { title: 'Soin saisonnier Printemps/Été Citron Méditerranéen', duration: '55 min', price: '63 €' },
      { title: 'Soin saisonnier Automne/Hiver Figue-Cumin', duration: '50 min', price: '63 €' },
    ],
  },
  {
    label: 'Beauté des mains',
    items: [
      { title: 'Soin express des ongles', duration: '30 min', price: '20 €' },
      { title: 'Pose de semi-permanent', duration: '45 min', price: '28 €' },
      { title: 'Dépose semi-permanent', duration: '30 min', price: '15 €' },
      { title: 'Dépose + pose semi-permanent', duration: '1h', price: '40 €' },
      { title: 'Soin des mains (gommage + masque + cuticules)', duration: '45 min', price: '36 €' },
      { title: 'Pose en gel', duration: '1h45', price: '52 €' },
      { title: 'Remplissage 2 semaines (gel)', duration: '1h10', price: '37 €' },
      { title: 'Remplissage 3 semaines (gel)', duration: '1h10', price: '42 €' },
      { title: 'Dépose gel', duration: '45 min', price: '20 €' },
      { title: 'Gainage', duration: '30 min', price: '20 €' },
      { title: 'French', duration: '30 min', price: '5 €' },
      { title: 'Babyboomer', duration: '30 min', price: '5 €' },
      { title: 'Nail Art', duration: '30 min', price: 'de 10 € à 30 €' },
      { title: "Réparation d'un ongle", duration: '20 min', price: '5 €' },
    ],
  },
  {
    label: 'Maquillage',
    items: [
      { title: 'Maquillage jour', duration: '45 min', price: '40 €' },
      { title: 'Maquillage soir', duration: '50 min', price: '55 €' },
      { title: 'Maquillage mariée', duration: '1h', price: 'Sur devis' },
    ],
  },
  {
    label: 'Beauté des pieds',
    items: [
      { title: 'Soin express des ongles pieds', duration: '30 min', price: '15 €' },
      { title: 'Pose semi-permanent pieds', duration: '45 min', price: '25 €' },
      { title: 'Dépose semi-permanent pieds', duration: '30 min', price: '13 €' },
      { title: 'Dépose + pose semi-permanent pieds', duration: '1h', price: '35 €' },
      { title: 'Soin des pieds (gommage + masque + cuticules)', duration: '40 min', price: '35 €' },
      { title: 'Calluspeeling', duration: '45 min', price: '50 €' },
    ],
  },
  {
    label: 'Beauté du regard',
    items: [
      { title: 'Teinture cils', duration: '30 min', price: '15 €' },
      { title: 'Épilation sourcils', duration: '30 min', price: '12 €' },
      { title: 'Browlift', duration: '50 min', price: '40 €' },
      { title: 'Teinture sourcils', duration: '30 min', price: '15 €' },
      { title: 'Teinture + épilation', duration: '30 min', price: '25 €' },
      { title: 'Browlift + teinture', duration: '30 min', price: '50 €' },
      { title: 'Browlift + épilation', duration: '50 min', price: '50 €' },
      { title: 'Browlift + teinture + épilation', duration: '1h', price: '65 €' },
      { title: 'Épilation lèvres', duration: '15 min', price: '12 €' },
    ],
  },
  {
    label: 'Extensions de cils',
    items: [
      { title: 'Cil à cil – Pose complète', duration: '1h30', price: '70 €' },
      { title: 'Cil à cil – Remplissage 2 semaines', duration: '1h', price: '50 €' },
      { title: 'Cil à cil – Remplissage 3 semaines', duration: '1h10', price: '60 €' },
      { title: 'Volume mixte – Pose complète', duration: '1h30', price: '80 €' },
      { title: 'Volume mixte – Remplissage 2 semaines', duration: '1h', price: '60 €' },
      { title: 'Volume mixte – Remplissage 3 semaines', duration: '1h10', price: '70 €' },
      { title: 'Volume russe – Pose complète', duration: '1h40', price: '90 €' },
      { title: 'Volume russe – Remplissage 2 semaines', duration: '1h', price: '70 €' },
      { title: 'Volume russe – Remplissage 3 semaines', duration: '1h10', price: '80 €' },
      { title: 'Girly Pic – Pose complète', duration: '1h40', price: '90 €' },
      { title: 'Girly Pic – Remplissage 2 semaines', duration: '1h', price: '70 €' },
      { title: 'Girly Pic – Remplissage 3 semaines', duration: '1h10', price: '80 €' },
      { title: 'Dépose cils', duration: '30 min', price: '12 €' },
    ],
  },
  {
    label: 'Drainage lymphatique méthode brésilienne',
    items: [
      { title: 'Drainage lymphatique jambes', duration: '35 min', price: '85 €' },
      { title: 'Drainage lymphatique jambes + ventre', duration: '45 min', price: '95 €' },
      { title: 'Drainage lymphatique corps entier', duration: '1h15', price: '115 €' },
    ],
  },
  {
    label: 'Cure drainage lymphatique (5 séances + 1 offerte)',
    items: [
      { title: 'Cure jambes', duration: '35 min', price: '425 €' },
      { title: 'Cure jambes et ventre', duration: '45 min', price: '475 €' },
      { title: 'Cure corps entier', duration: '1h15', price: '575 €' },
    ],
  },
];
