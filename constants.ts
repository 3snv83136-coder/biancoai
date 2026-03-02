import { BusinessInfo, Service, Review, FAQItem, WellnessTip } from './types';

export const FALLBACK_WELLNESS_TIPS: WellnessTip[] = [
  { title: "Hydratation Profonde", content: "Buvez un verre d'eau citronnée tiède chaque matin pour purifier votre teint de l'intérieur." },
  { title: "Sommeil Réparateur", content: "Privilégiez une taie d'oreiller en soie pour protéger vos cils et limiter les marques de fatigue." },
  { title: "Massage Facial", content: "Accordez-vous 2 minutes de massage ascendant lors de votre routine du soir pour stimuler la circulation." },
  { title: "Rituel Détente", content: "Pratiquez la respiration ventrale 5 minutes avant de dormir pour apaiser votre système nerveux." }
];

export const BUSINESS_INFO: BusinessInfo = {
  name: "Bianco Esthétique",
  address: "3 Avenue Ernest Millet, 83400 Hyères, France",
  phone: "07 49 96 76 91",
  hours: {
    "Lundi": "10:00 – 18:00",
    "Mardi": "10:00 – 18:00",
    "Mercredi": "Fermé",
    "Jeudi": "10:00 – 18:00",
    "Vendredi": "10:00 – 18:00",
    "Samedi": "10:30 – 15:30",
    "Dimanche": "Fermé"
  },
  planityUrl: "https://www.planity.com/bianco-esthetique-83400-hyeres",
  instagram: "https://www.instagram.com/bianco_esthetique",
  facebook: "https://www.facebook.com/p/Bianco-Esthétique-61557009986241/"
};

export const SERVICES: Service[] = [
  { id: '1', category: 'Regard', name: 'Cil à cil - Pose complète', description: 'Une pose naturelle pour sublimer votre regard au quotidien.', price: 70, duration: '1h30', highlighted: true },
  { id: '2', category: 'Regard', name: 'Volume mixte - Pose complète', description: 'Un mélange parfait entre naturel et intensité.', price: 80, duration: '2h' },
  { id: '3', category: 'Drainage', name: 'Drainage lymphatique jambes', description: 'Méthode brésilienne pour des jambes légères et sculptées.', price: 85, duration: '45min', highlighted: true },
  { id: '4', category: 'Drainage', name: 'Drainage corps entier', description: 'Soin complet détoxifiant et remodelant.', price: 115, duration: '1h15', highlighted: true },
  { id: '5', category: 'Visage', name: 'Soin éclat visage', description: 'Redonnez de la luminosité et de la fraîcheur à votre peau.', price: 65, duration: '1h' },
  { id: '6', category: 'Mains', name: 'Beauté des mains & Semi-permanent', description: 'Manucure soignée avec pose de vernis longue tenue.', price: 45, duration: '1h' }
];

export const REVIEWS: Review[] = [
  { id: '1', author: 'Sophie L.', rating: 5, content: "Une expérience incroyable. Le drainage lymphatique est bluffant, je me sens tellement plus légère. Accueil très pro !", date: "Il y a 2 semaines" },
  { id: '2', author: 'Marie D.', rating: 5, content: "Pose de cils parfaite, très naturelle comme je le souhaitais. L'institut est magnifique et d'une propreté exemplaire.", date: "Il y a 1 mois" },
  { id: '3', author: 'Julie R.', rating: 5, content: "Meilleure esthéticienne de Hyères ! Douce, à l'écoute et très compétente.", date: "Il y a 2 mois" }
];

export const FAQ_ITEMS: FAQItem[] = [
  { question: "Quelles sont les contre-indications du drainage ?", answer: "Le drainage est déconseillé en cas d'infections aiguës, de fièvre, de problèmes cardiaques non traités ou de phlébite récente. En cas de doute, demandez l'avis de votre médecin." },
  { question: "Combien de temps dure une pose de cils ?", answer: "Comptez entre 1h30 et 2h selon la technique choisie (Cil à cil ou Volume Russe/Mixte) pour une première pose." },
  { question: "Comment se déroule le premier rendez-vous ?", answer: "Nous commençons par un diagnostic personnalisé pour comprendre vos attentes et vérifier l'absence de contre-indications, suivi de votre soin dans une ambiance relaxante." },
  { question: "Proposez-vous des cures ?", answer: "Oui, nous proposons des forfaits avantageux pour le drainage lymphatique (5 ou 10 séances) pour des résultats optimaux sur le long terme." }
];
