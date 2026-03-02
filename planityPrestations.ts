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
      { title: 'Soin signature Indonésie ancestrale', duration: '1h15', price: '90 €' },
      { title: 'Modelage relaxant', duration: '45 min', price: '40 €' },
      { title: 'Modelage californien 1h', duration: '1h15', price: '80 €' },
      { title: 'Modelage californien 1h30', duration: '1h45', price: '98 €' },
      { title: 'Soin du dos (gommage + massage)', duration: '50 min', price: '55 €' },
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
