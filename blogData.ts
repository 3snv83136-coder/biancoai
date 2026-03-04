export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  content: { heading: string; body: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'head-spa-hyeres-rituel-bien-etre-cuir-chevelu',
    title: 'Head Spa à Hyères : le rituel bien-être pour votre cuir chevelu',
    date: '2026-03-01',
    readingTime: '5 min',
    excerpt:
      'Découverte du head spa à Hyères : un soin dédié au cuir chevelu qui détend en profondeur, relance la microcirculation et améliore la qualité des cheveux.',
    coverImage:
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=70&w=900',
    tags: ['Head spa', 'Cuir chevelu', 'Bien-être'],
    metaTitle: 'Head spa Hyères : rituel cuir chevelu | Bianco Esthétique',
    metaDescription:
      'Tout savoir sur le head spa à Hyères chez Bianco Esthétique : massage crânien, détente profonde, cuir chevelu apaisé et cheveux revitalisés.',
    content: [
      {
        heading: "Qu'est-ce que le head spa ?",
        body:
          "Né au Japon, le head spa est un rituel complet dédié au cuir chevelu. Il associe massage crânien, manœuvres ciblées sur la nuque et les épaules, et parfois un travail avec des soins spécifiques. À Hyères, chez Bianco Esthétique, ce moment est pensé comme une parenthèse pour relâcher les tensions accumulées au niveau de la tête et du haut du dos.",
      },
      {
        heading: 'Les bienfaits du head spa à Hyères',
        body:
          "Au-delà de la détente immédiate, le head spa stimule la microcirculation du cuir chevelu, favorise un meilleur apport en nutriments et peut contribuer à une chevelure plus dense et plus brillante. C'est aussi un allié précieux pour les personnes sujettes au stress, aux maux de tête de tension ou aux épaules crispées.",
      },
      {
        heading: 'Pour qui est fait ce rituel ?',
        body:
          "Le head spa convient aussi bien aux femmes qu'aux hommes, quel que soit le type de cheveux. Il est particulièrement intéressant si vous travaillez longtemps sur écran, si vous avez du mal à déconnecter ou si vous ressentez souvent des tensions au niveau de la nuque. Un head spa à Hyères peut être offert en bon cadeau pour un proche en quête d'un vrai moment de lâcher-prise.",
      },
    ],
  },
  {
    slug: 'drainage-lymphatique-bresilien-hyeres-jambes-legeres',
    title: 'Drainage lymphatique brésilien à Hyères : des jambes plus légères',
    date: '2026-02-20',
    readingTime: '6 min',
    excerpt:
      'Le drainage lymphatique méthode brésilienne est devenu un incontournable pour alléger les jambes, affiner la silhouette et relancer la circulation.',
    coverImage:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=70&w=900',
    tags: ['Drainage lymphatique', 'Jambes lourdes', 'Silhouette'],
    metaTitle: 'Drainage lymphatique brésilien Hyères | Bianco Esthétique',
    metaDescription:
      'Pourquoi choisir le drainage lymphatique brésilien à Hyères ? Explications, bienfaits sur les jambes lourdes et conseils avant/après séance.',
    content: [
      {
        heading: 'Une méthode venue du Brésil',
        body:
          "Le drainage lymphatique brésilien est une technique manuelle qui allie précision, rythme soutenu et travail en profondeur sur les trajets lymphatiques. À Hyères, cette méthode est pratiquée chez Bianco Esthétique pour aider le corps à dégonfler, affiner visuellement la silhouette et retrouver une sensation de légèreté.",
      },
      {
        heading: 'Les bienfaits pour les jambes lourdes',
        body:
          "En stimulant le système lymphatique, ce soin aide à drainer les excès d'eau et les toxines. Les jambes paraissent moins gonflées, la peau plus lisse, et la sensation de lourdeur diminue. C'est un soin particulièrement apprécié en cas de station debout prolongée, de chaleur ou de retour veineux paresseux.",
      },
      {
        heading: 'Comment se préparer à un drainage lymphatique ?',
        body:
          'La veille et le jour du rendez-vous, il est recommandé de bien vous hydrater, de limiter le sel et l’alcool, et de prévoir des vêtements confortables. Après la séance, continuez à boire de l’eau et évitez les repas trop lourds afin d’accompagner le travail du corps.',
      },
    ],
  },
  {
    slug: 'extensions-de-cils-hyeres-conseils-entretien',
    title: 'Extensions de cils à Hyères : comment bien les choisir et les entretenir ?',
    date: '2026-02-10',
    readingTime: '5 min',
    excerpt:
      "Les extensions de cils permettent d'ouvrir le regard sans maquillage. Encore faut-il choisir la bonne technique et adopter les bons gestes d'entretien.",
    coverImage:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=70&w=900',
    tags: ['Extensions de cils', 'Beauté du regard'],
    metaTitle: 'Extensions de cils Hyères : cil à cil, mixte, volume | Bianco Esthétique',
    metaDescription:
      'Tout savoir sur les extensions de cils à Hyères : choisir entre cil à cil, mixte ou volume, durée de vie, remplissages et conseils d’entretien.',
    content: [
      {
        heading: 'Choisir la technique adaptée à votre regard',
        body:
          "À Hyères, Bianco Esthétique propose plusieurs techniques : cil à cil pour un rendu naturel, volume mixte pour intensifier le regard et volume plus soutenu pour un effet plus sophistiqué. Le choix dépend de la densité de vos cils naturels, de la forme de vos yeux et de votre style au quotidien.",
      },
      {
        heading: "Les bonnes habitudes après la pose d'extensions",
        body:
          "Les 24 premières heures sont essentielles : il faut éviter l'eau chaude, la vapeur et les frottements. Au quotidien, on privilégie un démaquillage doux sans corps gras, on ne frotte pas les yeux et on brosse les cils avec un goupillon propre. Ces gestes simples prolongent la tenue des extensions entre chaque remplissage.",
      },
      {
        heading: 'Quand programmer les remplissages ?',
        body:
          "En moyenne, un remplissage se prévoit toutes les 2 à 3 semaines, selon votre cycle de repousse. À Hyères, votre esthéticienne peut vous conseiller un rythme adapté pour garder un résultat harmonieux sans fragiliser vos cils naturels.",
      },
    ],
  },
  {
    slug: 'soin-visage-hyeres-routine-eclat-peau',
    title: 'Soin visage à Hyères : booster l’éclat de votre peau',
    date: '2026-01-28',
    readingTime: '4 min',
    excerpt:
      'Entre le soleil, le vent marin et le quotidien, la peau peut manquer d’éclat. Un soin visage ciblé permet de réhydrater, lisser et unifier le teint.',
    coverImage:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=70&w=900',
    tags: ['Soin visage', 'Éclat', 'Hydratation'],
    metaTitle: 'Soin visage Hyères : retrouver une peau lumineuse | Bianco Esthétique',
    metaDescription:
      'Pourquoi faire un soin visage à Hyères ? Étapes clés du soin, bénéfices sur l’éclat du teint et conseils pour prolonger les effets à la maison.',
    content: [
      {
        heading: 'Un protocole sur-mesure selon votre peau',
        body:
          "Lors d’un soin visage, la première étape consiste à analyser votre peau : déshydratée, sensible, mixte, sujette aux taches… À partir de là, le protocole est adapté avec un nettoyage en douceur, une phase de traitement ciblé et un masque approprié. L’objectif : retrouver un teint plus uniforme et reposé.",
      },
      {
        heading: "Les bénéfices d'un soin visage régulier",
        body:
          "En institut, les manœuvres manuelles permettent de stimuler la microcirculation et le renouvellement cellulaire. Associées à des actifs professionnels, elles offrent des résultats visibles plus rapidement qu’une routine maison seule. Une cure de soins visage à Hyères peut être idéale avant un événement ou un changement de saison.",
      },
      {
        heading: 'Prolonger les effets chez soi',
        body:
          'Après le soin, votre esthéticienne vous conseille une routine simple et réaliste : nettoyage adapté, hydratation quotidienne, protection solaire et éventuellement un sérum ciblé. Ce suivi permet d’ancrer les bénéfices dans la durée et de garder une peau lumineuse plus longtemps.',
      },
    ],
  },
  {
    slug: 'beaute-des-pieds-hyeres-preparer-ete',
    title: 'Beauté des pieds à Hyères : préparer vos pieds pour l’été',
    date: '2026-01-15',
    readingTime: '4 min',
    excerpt:
      'Callosités, ongles abîmés ou vernis qui s’écaille vite : un soin beauté des pieds en institut permet de repartir sur de bonnes bases avant l’été.',
    coverImage:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=70&w=900',
    tags: ['Beauté des pieds', 'Ongles', 'Pédicure'],
    metaTitle: 'Beauté des pieds Hyères : soin et vernis longue tenue | Bianco Esthétique',
    metaDescription:
      'Zoom sur la beauté des pieds à Hyères : déroulé d’un soin complet, intérêt du vernis semi-permanent et conseils pour garder des pieds nets au quotidien.',
    content: [
      {
        heading: 'Un soin complet pour des pieds nets',
        body:
          "En cabine, la beauté des pieds commence par un bain émollient, un travail minutieux des cuticules et des callosités, puis un limage précis de l’ongle. La peau est plus douce, l’ongle propre et prêt à recevoir un vernis classique ou semi-permanent.",
      },
      {
        heading: 'Pourquoi choisir le semi-permanent ?',
        body:
          "Le vernis semi-permanent sur les pieds est idéal pour les vacances, les sandales et les chaussures ouvertes. Sa tenue est longue (plusieurs semaines) et la brillance reste intacte. À Hyères, Bianco Esthétique propose des teintes intemporelles mais aussi des couleurs plus audacieuses selon vos envies.",
      },
      {
        heading: 'Entretenir vos pieds entre deux rendez-vous',
        body:
          "À la maison, hydratez vos pieds régulièrement, portez des chaussures adaptées et évitez de couper les cuticules vous-même. Un passage en institut à chaque changement de saison permet de conserver des pieds soignés toute l’année.",
      },
    ],
  },
];

