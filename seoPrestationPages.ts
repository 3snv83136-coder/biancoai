export interface SEOFaq {
  question: string;
  answer: string;
}

export interface SEOTemoignage {
  title: string;
  text: string;
}

export interface SEOPrestationPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  presentation: string[];
  pourquoi: string[];
  temoignages: SEOTemoignage[];
  zoneTitle: string;
  zoneContent: string[];
  faq: SEOFaq[];
  ctaTitle: string;
  ctaText: string;
  internalLinks: { label: string; to: string }[];
}

export const SEO_PRESTATION_PAGES: Record<string, SEOPrestationPageData> = {
  'institut-beaute-hyeres': {
    slug: 'institut-beaute-hyeres',
    title: 'Institut de beauté à Hyères | Bianco Esthétique',
    metaDescription: 'Institut de beauté haut de gamme à Hyères. Soin du visage, manucure, cils, massages et callus peeling avec Salomé. Prenez rendez-vous.',
    h1: 'Institut de beauté à Hyères — Bianco Esthétique',
    heroSubtitle: 'Offrez-vous une parenthèse de beauté et de bien-être dans un institut intimiste et sophistiqué au cœur de Hyères. Chez Bianco Esthétique, Salomé vous accueille dans un cadre luxueux et apaisant.',
    presentation: [
      'Bianco Esthétique est un institut de beauté situé à Hyères, pensé comme un cocon raffiné où chaque détail compte. La gérante, Salomé, met à votre service son expertise et son sens du geste juste pour créer des soins sur mesure, efficaces et profondément relaxants.',
      'Soin du visage, manucure, extensions de cils, massage californien, callus peeling ou épilation : chaque prestation est réalisée avec précision et douceur, dans une atmosphère chaleureuse qui invite au lâcher-prise.',
      'L\'institut se distingue par une approche globale de la beauté : au-delà du résultat esthétique, Salomé veille à ce que chaque visite soit un moment de reconnexion à soi.',
    ],
    pourquoi: [
      'Expertise de Salomé : formée aux techniques professionnelles, elle maîtrise soins visage, manucures, extensions d\'ongles en gel, extensions de cils et massages californiens.',
      'Produits premium : marques professionnelles sélectionnées pour leur tolérance, efficacité et textures sensorielles.',
      'Cadre luxueux et intimiste : décoration soignée, lumière douce, musique apaisante et cabine parfaitement préparée.',
      'Hygiène irréprochable : désinfection rigoureuse, matériel stérilisé, linge propre à chaque soin.',
      'Résultats visibles : note 5/5 sur Google et 24 avis, clientèle fidèle de Hyères et environs.',
    ],
    temoignages: [
      { title: 'Peau lumineuse et pieds comme neufs', text: 'J\'ai découvert Bianco Esthétique pour un soin du visage et un callus peeling. Salomé a pris le temps de comprendre ma peau. Résultat : teint lumineux, peau douce et pieds incroyablement lissés.' },
      { title: 'Professionnalisme et détente absolue', text: 'Venue pour une manucure suivie d\'un massage californien, j\'ai été bluffée par la propreté de l\'institut et le sérieux de Salomé. Une adresse que je recommande à toutes mes amies.' },
    ],
    zoneTitle: 'Votre institut de beauté à Hyères et alentours',
    zoneContent: [
      'Bianco Esthétique est situé au 3 Avenue Ernest Millet (83400), à 5 minutes du centre-ville. L\'institut accueille une clientèle venant des quartiers de Hyères : Centre-ville, Costebelle, Les Palmiers, le Port, mais aussi de Toulon, La Garde, Carqueiranne, Le Pradet et La Crau.',
      'À 15 minutes de Toulon, 10 minutes de La Garde et de Carqueiranne, l\'accès est simple en voiture.',
    ],
    faq: [
      { question: 'Quels types de soins propose l\'institut à Hyères ?', answer: 'Bianco Esthétique propose des soins du visage, manucure et extensions d\'ongles en gel, extensions de cils, massages californiens, callus peeling et épilations. Chaque soin est personnalisé par Salomé.' },
      { question: 'Comment prendre rendez-vous ?', answer: 'Vous pouvez appeler le 07 49 96 76 91 ou réserver en ligne sur Planity. Salomé vous conseillera sur la durée et le type de soin adapté.' },
      { question: 'L\'institut est-il accessible depuis Toulon ou La Garde ?', answer: 'Oui, à environ 15 minutes de Toulon, 10 minutes de La Garde et de Carqueiranne en voiture. À 5 minutes du centre-ville de Hyères.' },
      { question: 'Pourquoi choisir Bianco Esthétique ?', answer: 'Ambiance intimiste et haut de gamme, expertise de Salomé, protocoles précis, produits professionnels et hygiène irréprochable. Les avis clients soulignent la douceur et les résultats visibles.' },
    ],
    ctaTitle: 'Prendre rendez-vous dans votre institut de beauté à Hyères',
    ctaText: 'Prête à vous offrir un moment rien que pour vous ? Salomé vous accueille sur rendez-vous au 3 Avenue Ernest Millet.',
    internalLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Extensions de cils à Hyères', to: '/extensions-cils-hyeres' },
      { label: 'Massage californien à Hyères', to: '/massage-californien-hyeres' },
      { label: 'Callus peeling & soin des pieds', to: '/callus-peeling-hyeres' },
    ],
  },
  'soin-visage-hyeres': {
    slug: 'soin-visage-hyeres',
    title: 'Soin du visage à Hyères | Bianco Esthétique',
    metaDescription: 'Soin du visage haut de gamme à Hyères avec Salomé chez Bianco Esthétique. Peau lumineuse, repulpée et apaisée. Prenez rendez-vous.',
    h1: 'Soin du visage à Hyères — Bianco Esthétique',
    heroSubtitle: 'Votre peau mérite une attention experte. Chez Bianco Esthétique à Hyères, Salomé vous propose des soins du visage haut de gamme pour retrouver éclat, confort et fermeté.',
    presentation: [
      'Un beau teint commence par une peau équilibrée. À l\'institut Bianco Esthétique à Hyères, chaque soin du visage est pensé comme un rituel sur mesure. Salomé observe votre peau, écoute vos attentes et vous explique le protocole.',
      'Grâce à une gestuelle précise et des actifs ciblés, les soins permettent de lisser le grain de peau, d\'atténuer les signes de fatigue et de redonner de l\'éclat. L\'institut propose une expérience intime, calme et dédiée à votre bien-être.',
      'Que vous prépariez un événement ou souhaitiez un suivi régulier, Salomé adapte la durée et les conseils pour prolonger les résultats à la maison.',
    ],
    pourquoi: [
      'Expertise de Salomé en soins visage : diagnostic personnalisé et protocoles adaptés à chaque type de peau.',
      'Produits professionnels soigneusement sélectionnés pour efficacité et tolérance.',
      'Ambiance apaisante et luxueuse : lumière douce, cabine parfaitement préparée.',
      'Hygiène irréprochable : matériel désinfecté, linge propre à chaque cliente.',
      'Résultats visibles et avis 5/5 : teint plus lumineux, peau plus douce et rebondie.',
    ],
    temoignages: [
      { title: 'Peau douce et lumineuse', text: 'J\'ai découvert Bianco Esthétique pour un soin du visage et un callus peeling. Salomé a tout expliqué étape par étape. Mon teint était lumineux, ma peau incroyablement douce.' },
      { title: 'Résultat visible dès la première séance', text: 'Ma peau était terne. Après un seul soin chez Bianco Esthétique, je me suis découverte avec un teint plus frais et des traits reposés.' },
    ],
    zoneTitle: 'Un soin du visage à Hyères, proche de chez vous',
    zoneContent: [
      'Les soins du visage sont réalisés à Hyères, au 3 Avenue Ernest Millet (83400), à quelques minutes du centre-ville. L\'institut accueille les clientes de Hyères (Centre-ville, Costebelle, Les Palmiers, Port) et des environs.',
      'Environ 15 minutes depuis Toulon, 10 minutes depuis La Garde, Carqueiranne, 15 minutes depuis Le Pradet et 10–15 minutes depuis La Crau.',
    ],
    faq: [
      { question: 'Quel soin du visage choisir ?', answer: 'Salomé propose des soins hydratant, éclat, anti-âge, apaisant pour peaux sensibles ou purifiant. Elle réalise un diagnostic rapide et vous oriente vers le protocole le plus adapté.' },
      { question: 'Combien de temps dure un soin du visage ?', answer: 'En général de 45 minutes à 1h15 selon le protocole. Certains soins express redonnent de l\'éclat en peu de temps.' },
      { question: 'Adapté aux peaux sensibles ?', answer: 'Oui. Salomé sélectionne des produits adaptés et ajuste la gestuelle pour respecter la barrière cutanée.' },
      { question: 'Accessible depuis Toulon ou La Garde ?', answer: 'Oui, à 15 minutes de Toulon, 10 minutes de La Garde et de Carqueiranne en voiture.' },
    ],
    ctaTitle: 'Réserver votre soin du visage à Hyères',
    ctaText: 'Retrouvez une peau plus lumineuse et confortable. Salomé vous accueille sur rendez-vous dans un cadre calme et chaleureux.',
    internalLinks: [
      { label: 'Institut de beauté à Hyères', to: '/institut-beaute-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
    ],
  },
  'manucure-ongles-gel-hyeres': {
    slug: 'manucure-ongles-gel-hyeres',
    title: 'Manucure & ongles en gel à Hyères | Bianco Esthétique',
    metaDescription: 'Manucure et ongles en gel haut de gamme à Hyères avec Salomé. Mains impeccables, tenue longue durée. Prenez rendez-vous.',
    h1: 'Manucure & ongles en gel à Hyères — Bianco Esthétique',
    heroSubtitle: 'Des mains soignées et des ongles élégants. À Hyères, Bianco Esthétique vous propose des manucures précises et des poses d\'ongles en gel réalisées par Salomé avec un sens du détail rare.',
    presentation: [
      'Chez Bianco Esthétique, la manucure ne se limite pas à la pose de vernis. Chaque prestation commence par une mise en beauté complète des mains : limage, soin des cuticules, lissage des contours.',
      'Les ongles en gel permettent une tenue irréprochable et une forme parfaitement maîtrisée. Cette technique renforce les ongles naturels, corrige la forme et offre une surface lisse, prête à recevoir des couleurs nude ou sophistiquées.',
      'L\'ambiance calme et la gestuelle précise de Salomé transforment chaque manucure en moment de détente.',
    ],
    pourquoi: [
      'Travail minutieux et personnalisé : Salomé observe vos ongles et propose une manucure ou une pose qui vous ressemble.',
      'Produits et techniques professionnelles : gels et vernis de haute qualité pour tenue et brillance.',
      'Hygiène irréprochable : outils désinfectés, protocoles stricts.',
      'Résultats longue durée : les clientes soulignent la tenue des poses et la netteté des finitions.',
      'Cadre intimiste et haut de gamme : cabine calme et élégante.',
    ],
    temoignages: [
      { title: 'Résultat magnifique', text: 'Je suis venue pour une pose d\'ongles en gel. La forme est parfaite, la couleur tient sans s\'écailler. Salomé est très douce et maîtrise son sujet.' },
      { title: 'Professionnalisme et propreté', text: 'Entre la manucure et le massage californien, j\'ai passé un moment incroyable. L\'institut est d\'une propreté irréprochable, le travail sur les ongles est minutieux.' },
    ],
    zoneTitle: 'Votre manucure à Hyères et proche de Toulon, La Garde…',
    zoneContent: [
      'Bianco Esthétique est au 3 Avenue Ernest Millet à Hyères (83400), à quelques minutes du centre-ville. Clientèle de Hyères (Centre-ville, Costebelle, Les Palmiers, Port) et des communes voisines.',
      'Environ 15 minutes depuis Toulon, 10 minutes depuis La Garde, Carqueiranne, 15 minutes depuis Le Pradet et 10–15 minutes depuis La Crau.',
    ],
    faq: [
      { question: 'Différence entre manucure classique et ongles en gel ?', answer: 'La manucure classique inclut mise en forme et vernis. Les ongles en gel permettent de corriger la forme, d\'apporter de la longueur et d\'obtenir une tenue longue durée.' },
      { question: 'Combien de temps dure une pose d\'ongles en gel ?', answer: 'La tenue est généralement de 3 à 4 semaines. Salomé recommande un remplissage régulier pour conserver une forme harmonieuse.' },
      { question: 'Les ongles en gel abîment-ils les ongles naturels ?', answer: 'Posés et retirés correctement, non. Salomé prépare l\'ongle en douceur et procède au retrait avec des techniques respectueuses.' },
      { question: 'Accessible depuis Toulon ou La Garde ?', answer: 'Oui, à 15 minutes de Toulon, 10 minutes de La Garde et de Carqueiranne en voiture.' },
    ],
    ctaTitle: 'Réserver votre manucure ou pose d\'ongles en gel à Hyères',
    ctaText: 'Envie de mains impeccables et d\'un moment pour vous ? Bianco Esthétique vous accueille sur rendez-vous.',
    internalLinks: [
      { label: 'Institut de beauté à Hyères', to: '/institut-beaute-hyeres' },
      { label: 'Soin du visage', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
    ],
  },
  'extensions-cils-hyeres': {
    slug: 'extensions-cils-hyeres',
    title: 'Extensions de cils à Hyères | Bianco Esthétique',
    metaDescription: 'Extensions de cils haut de gamme à Hyères : regard intensifié, pose naturelle ou volume avec Salomé. Prenez rendez-vous.',
    h1: 'Extensions de cils à Hyères — Bianco Esthétique',
    heroSubtitle: 'Envie d\'un regard intense sans mascara au quotidien ? À Hyères, Bianco Esthétique vous propose des poses d\'extensions de cils sur mesure, réalisées par Salomé avec précision.',
    presentation: [
      'Les extensions de cils permettent d\'ouvrir le regard et de le structurer. Chez Bianco Esthétique à Hyères, chaque pose est conçue pour mettre en valeur votre regard. Salomé analyse la forme de vos yeux et votre style pour créer un rendu adapté.',
      'La pose se fait cil à cil, en respectant la capacité de vos cils naturels. Les yeux restent fermés, la gestuelle est douce, les produits sont sélectionnés pour leur tolérance.',
      'À la fin de la séance, vous découvrez un regard intensifié mais harmonieux.',
    ],
    pourquoi: [
      'Expertise de Salomé en regard : techniques de pose, courbures et longueurs adaptées.',
      'Travail minutieux et respect du cil naturel : chaque extension est posée avec précision.',
      'Produits professionnels : colles et extensions de qualité, légères et bien tolérées.',
      'Ambiance calme et rassurante : cabine intimiste.',
      'Conseils d\'entretien personnalisés pour conserver un beau résultat.',
    ],
    temoignages: [
      { title: 'Résultat magnifique', text: 'Je suis venue pour des extensions de cils. Le résultat est vraiment magnifique, tout en restant naturel. Salomé maîtrise parfaitement la technique.' },
      { title: 'Travail minutieux', text: 'Nous avons pris le temps de discuter du rendu. Le résultat correspond exactement à ce que j\'imaginais, avec un confort parfait dès le premier jour.' },
    ],
    zoneTitle: 'Votre spécialiste des extensions de cils à Hyères et alentours',
    zoneContent: [
      'Bianco Esthétique se trouve à Hyères, au 3 Avenue Ernest Millet (83400). Clientèle de Hyères (Centre-ville, Costebelle, Les Palmiers, Port) et des environs.',
      'Environ 15 minutes depuis Toulon, 10 minutes depuis La Garde, Carqueiranne, 15 minutes depuis Le Pradet et 10–15 minutes depuis La Crau.',
    ],
    faq: [
      { question: 'Quel type d\'extensions proposez-vous ?', answer: 'Effet naturel, classique, volume plus soutenu ou intensification ciblée. Le choix se fait selon la forme de vos yeux et le résultat souhaité.' },
      { question: 'Combien de temps durent les extensions ?', answer: 'Généralement 3 à 4 semaines. Des remplissages réguliers sont recommandés pour un résultat homogène.' },
      { question: 'Les extensions abîment-elles les cils naturels ?', answer: 'Posées dans les règles de l\'art, non. Salomé respecte la longueur et l\'épaisseur adaptées à votre base de cils.' },
      { question: 'Accessible depuis Toulon ou La Garde ?', answer: 'Oui, à 15 minutes de Toulon, 10 minutes de La Garde et de Carqueiranne en voiture.' },
    ],
    ctaTitle: 'Réserver vos extensions de cils à Hyères',
    ctaText: 'Vous rêvez d\'un regard intensifié dès le réveil ? Confiez vos extensions de cils à Bianco Esthétique.',
    internalLinks: [
      { label: 'Institut de beauté à Hyères', to: '/institut-beaute-hyeres' },
      { label: 'Soin du visage', to: '/soin-visage-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
    ],
  },
  'massage-californien-hyeres': {
    slug: 'massage-californien-hyeres',
    title: 'Massage californien à Hyères | Bianco Esthétique',
    metaDescription: 'Massage californien relaxant à Hyères chez Bianco Esthétique. Lâcher-prise, détente profonde avec Salomé. Réservez votre séance.',
    h1: 'Massage californien à Hyères — Bianco Esthétique',
    heroSubtitle: 'Besoin de ralentir et de relâcher la pression ? À Hyères, Bianco Esthétique vous propose un massage californien enveloppant, pensé comme une parenthèse de bien-être pour le corps et l\'esprit.',
    presentation: [
      'Le massage californien est un massage de relaxation globale aux mouvements lents, amples et fluides. Chez Bianco Esthétique à Hyères, Salomé a imaginé ce rituel comme une invitation à se recentrer et à relâcher les tensions.',
      'Allongé(e) sur la table de massage, dans une cabine chaleureuse, vous laissez les pensées s\'apaiser au fil des effleurages et des pressions légères. Les huiles sélectionnées favorisent une détente musculaire progressive.',
      'Ce massage est recommandé en période de stress, de surcharge émotionnelle ou de grande fatigue.',
    ],
    pourquoi: [
      'Gestuelle maîtrisée : Salomé travaille le dos, les jambes, les bras et la nuque de manière harmonieuse.',
      'Ambiance apaisante et intimiste : musique douce, lumière tamisée, table confortable.',
      'Écoute et personnalisation : échange avant la séance pour adapter l\'intensité et les zones.',
      'Complément idéal des autres soins : combinable à un soin du visage ou une manucure.',
      'Hygiène et confort irréprochables : linge propre, huiles adaptées.',
    ],
    temoignages: [
      { title: 'Professionnalisme et résultat impeccable', text: 'Je suis venue pour une manucure suivie d\'un massage californien. L\'institut est d\'une propreté irréprochable, le massage était doux et enveloppant. Je suis ressortie complètement détendue.' },
      { title: 'Un vrai moment de lâcher-prise', text: 'Le massage de Salomé est un pur moment de bonheur. Les mouvements sont amples, le rythme est parfait. J\'ai rarement aussi bien dormi que la nuit qui a suivi.' },
    ],
    zoneTitle: 'Votre massage californien à Hyères et dans le Var',
    zoneContent: [
      'Bianco Esthétique est au 3 Avenue Ernest Millet à Hyères (83400), à quelques minutes du centre-ville. Clientèle de Hyères et des communes voisines.',
      'Environ 15 minutes depuis Toulon, 10 minutes depuis La Garde, Carqueiranne, 15 minutes depuis Le Pradet et 10–15 minutes depuis La Crau.',
    ],
    faq: [
      { question: 'Qu\'est-ce qu\'un massage californien ?', answer: 'Un massage global du corps, aux mouvements lents et enveloppants, pour relâcher les tensions musculaires et apaiser le mental.' },
      { question: 'Combien de temps dure une séance ?', answer: 'En général environ 60 minutes pour travailler l\'ensemble du corps de façon harmonieuse.' },
      { question: 'À qui s\'adresse le massage californien ?', answer: 'À toute personne qui ressent du stress, de la fatigue ou des tensions et qui souhaite un moment de bien-être.' },
      { question: 'Accessible depuis Toulon ou La Garde ?', answer: 'Oui, à 15 minutes de Toulon, 10 minutes de La Garde et de Carqueiranne en voiture.' },
    ],
    ctaTitle: 'Réserver votre massage californien à Hyères',
    ctaText: 'Offrez-vous un massage californien chez Bianco Esthétique et repartez avec une sensation de légèreté et de bien-être durable.',
    internalLinks: [
      { label: 'Institut de beauté à Hyères', to: '/institut-beaute-hyeres' },
      { label: 'Soin du visage', to: '/soin-visage-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Callus peeling & soin des pieds', to: '/callus-peeling-hyeres' },
    ],
  },
  'callus-peeling-hyeres': {
    slug: 'callus-peeling-hyeres',
    title: 'Callus peeling & soin des pieds à Hyères | Bianco Esthétique',
    metaDescription: 'Callus peeling et soin des pieds à Hyères : talons lissés, peau douce chez Bianco Esthétique. Prenez rendez-vous avec Salomé.',
    h1: 'Callus peeling & soin des pieds à Hyères — Bianco Esthétique',
    heroSubtitle: 'Talons secs, fissurés, callosités ? Offrez à vos pieds un soin complet à Hyères avec le callus peeling de Bianco Esthétique : un protocole professionnel qui lisse la peau et redonne confort.',
    presentation: [
      'Nos pieds nous portent tous les jours. Le callus peeling proposé à Hyères chez Bianco Esthétique cible les zones épaissies (talons, plante du pied) en respectant la peau.',
      'Après un nettoyage et une préparation minutieuse, Salomé applique un produit spécifique. Le temps de pose permet de ramollir les callosités qui sont ensuite retirées en douceur, sans lame. La peau est lissée puis nourrie.',
      'Le soin se termine par des manœuvres relaxantes. Vous repartez avec des pieds visiblement plus nets et agréables au toucher.',
    ],
    pourquoi: [
      'Protocole efficace et respectueux : agit en profondeur sur les callosités sans lame ni coupe agressive.',
      'Expertise de Salomé : elle évalue l\'état de vos pieds et vous donne des conseils pour entretenir le résultat.',
      'Hygiène irréprochable : matériel nettoyé et désinfecté, linge propre.',
      'Confort et détente : au-delà de l\'esthétique, le soin procure une vraie relaxation.',
      'Résultat visible dès la première séance : talons lissés, pieds plus doux.',
    ],
    temoignages: [
      { title: 'Peau douce et pieds comme neufs', text: 'J\'ai découvert Bianco Esthétique pour un callus peeling et un soin du visage. Mes pieds étaient très secs. Après le soin, la différence est incroyable : talons lissés, aucune rugosité.' },
      { title: 'Confort retrouvé', text: 'Je marchais avec une gêne sous le talon. Le callus peeling a vraiment amélioré mon confort : mes chaussures me semblent plus agréables à porter.' },
    ],
    zoneTitle: 'Votre soin des pieds à Hyères et alentours',
    zoneContent: [
      'Bianco Esthétique est au 3 Avenue Ernest Millet à Hyères (83400), à quelques minutes du centre-ville. Clientèle de Hyères (Centre-ville, Costebelle, Les Palmiers, Port) et des environs.',
      'Environ 15 minutes depuis Toulon, 10 minutes depuis La Garde, Carqueiranne, 15 minutes depuis Le Pradet et 10–15 minutes depuis La Crau.',
    ],
    faq: [
      { question: 'Qu\'est-ce que le callus peeling ?', answer: 'Un soin professionnel des pieds qui élimine en douceur les callosités et les talons fissurés, sans lame ni instrument agressif.' },
      { question: 'Combien de temps dure le soin ?', answer: 'En moyenne entre 45 minutes et 1 heure (préparation, traitement, retrait des callosités, limage et phase nourrissante).' },
      { question: 'Le callus peeling est-il douloureux ?', answer: 'Non. Le soin est conçu pour agir en douceur. Vous pouvez ressentir une légère sensation de chaleur ou de picotement, rapidement compensée par le massage.' },
      { question: 'Accessible depuis Toulon ou La Garde ?', answer: 'Oui, à 15 minutes de Toulon, 10 minutes de La Garde et de Carqueiranne en voiture.' },
    ],
    ctaTitle: 'Réserver votre callus peeling & soin des pieds à Hyères',
    ctaText: 'Retrouvez des pieds doux, lisses et confortables. Bianco Esthétique vous accueille sur rendez-vous.',
    internalLinks: [
      { label: 'Institut de beauté à Hyères', to: '/institut-beaute-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
      { label: 'Soin du visage', to: '/soin-visage-hyeres' },
    ],
  },
  'soin-visage-toulon': {
    slug: 'soin-visage-toulon',
    title: 'Soin du visage près de Toulon | Bianco Esthétique Hyères',
    metaDescription: 'Soin du visage près de Toulon, à 15 min, chez Bianco Esthétique à Hyères. Institut haut de gamme, expertise de Salomé. Prenez rendez-vous.',
    h1: 'Soin du visage près de Toulon — Bianco Esthétique à Hyères',
    heroSubtitle: 'Vous habitez Toulon et cherchez un soin du visage haut de gamme dans un environnement calme ? À 15 minutes de Toulon, l\'institut Bianco Esthétique à Hyères vous accueille pour des soins personnalisés par Salomé.',
    presentation: [
      'Quitter quelques instants Toulon pour rejoindre Hyères permet de vivre votre soin du visage dans un cadre plus apaisé. Chez Bianco Esthétique, Salomé a conçu ses protocoles pour les peaux fatiguées, stressées ou sensibles.',
      'Dès votre arrivée depuis Toulon, vous êtes accueilli(e) dans un institut à taille humaine. Diagnostic, choix des produits, durée du massage : tout est ajusté pour révéler un teint plus uniforme et apaiser les sensations d\'inconfort.',
      'Bianco Esthétique devient rapidement votre adresse privilégiée, à quelques kilomètres seulement de Toulon.',
    ],
    pourquoi: [
      'Institut de beauté proche de Toulon : à environ 15 minutes en voiture, au 3 Avenue Ernest Millet à Hyères.',
      'Expertise de Salomé : soins du visage personnalisés, produits adaptés aux peaux sensibles.',
      'Cadre plus calme qu\'en centre-ville : ambiance intimiste et raffinée.',
      'Résultats visibles : les clientes toulonnaises soulignent le teint reposé et les conseils personnalisés.',
      'Combinable avec manucure, callus peeling ou massage pour une demi-journée bien-être.',
    ],
    temoignages: [
      { title: 'Peau lumineuse, pieds comme neufs', text: 'Je viens de Toulon pour mes soins du visage et callus peeling. Le trajet est rapide, l\'accueil toujours parfait. La différence après chaque séance est incroyable.' },
      { title: 'Professionnalisme et propreté', text: 'Je cherchais un institut plus intimiste que ceux du centre de Toulon. Chez Bianco Esthétique, j\'ai trouvé un endroit très propre, calme, et un vrai sens du détail.' },
    ],
    zoneTitle: 'Comment venir de Toulon à Bianco Esthétique à Hyères',
    zoneContent: [
      'L\'institut est au 3 Avenue Ernest Millet à Hyères (83400), à environ 15 minutes de Toulon en voiture. Suivez la direction de Hyères par les grands axes, puis l\'avenue Ernest Millet.',
      'Cette localisation convient aussi aux habitantes de La Garde, La Crau, Carqueiranne ou Le Pradet, toutes à moins de 20 minutes.',
    ],
    faq: [
      { question: 'Où faire un soin du visage près de Toulon ?', answer: 'À 15 minutes de Toulon, l\'institut Bianco Esthétique à Hyères propose des soins du visage haut de gamme réalisés par Salomé, avec diagnostic personnalisé et ambiance intimiste.' },
      { question: 'Combien de temps pour venir de Toulon ?', answer: 'Comptez environ 15 minutes en voiture depuis Toulon pour rejoindre l\'institut au 3 Avenue Ernest Millet à Hyères.' },
      { question: 'Les soins sont-ils adaptés aux peaux sensibles ?', answer: 'Oui. Salomé sélectionne des produits tolérés par les peaux fragiles et adapte la gestuelle.' },
      { question: 'Pourquoi venir à Hyères depuis Toulon ?', answer: 'Pour profiter d\'un institut intimiste et haut de gamme, loin de l\'agitation du centre de Toulon, avec l\'expertise de Salomé et des résultats visibles.' },
    ],
    ctaTitle: 'Réserver votre soin du visage près de Toulon',
    ctaText: 'Vous habitez Toulon et souhaitez offrir à votre peau un soin haut de gamme ? Bianco Esthétique à Hyères vous accueille sur rendez-vous, à 15 minutes de chez vous.',
    internalLinks: [
      { label: 'Institut de beauté à Hyères', to: '/institut-beaute-hyeres' },
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
    ],
  },
};

export const SEO_PRESTATION_SLUGS = Object.keys(SEO_PRESTATION_PAGES);
