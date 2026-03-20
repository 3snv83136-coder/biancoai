export interface SEOGeoFaq {
  question: string;
  answer: string;
}

export interface SEOGeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  geoName: string;
  geoLat: number;
  geoLng: number;
  distanceFromInstitut: string;
  presentation: string[];
  whyUs: string[];
  servicesHighlight: string[];
  accessInfo: string[];
  faq: SEOGeoFaq[];
  ctaTitle: string;
  ctaText: string;
  nearbyPages: { label: string; to: string }[];
  prestationLinks: { label: string; to: string }[];
}

export const SEO_GEO_PAGES: Record<string, SEOGeoPageData> = {

  // ============================================================
  // QUARTIERS DE HYERES
  // ============================================================

  'institut-beaute-centre-ville-hyeres': {
    slug: 'institut-beaute-centre-ville-hyeres',
    title: 'Institut de beaute centre-ville Hyeres | Bianco Esthetique',
    metaDescription: 'Votre institut de beaute au coeur du centre-ville de Hyeres. Soins visage, cils, manucure, massage. A 5 min a pied du centre. Reservez chez Bianco Esthetique.',
    h1: 'Institut de beaute au centre-ville de Hyeres',
    heroSubtitle: 'Bianco Esthetique vous accueille a deux pas du centre-ville de Hyeres, au 3 Avenue Ernest Millet. Un cocon de beaute intimiste et raffile pour vos soins du visage, extensions de cils, manucures et massages.',
    geoName: 'Centre-ville de Hyeres',
    geoLat: 43.1204,
    geoLng: 6.1286,
    distanceFromInstitut: '5 minutes a pied',
    presentation: [
      'Situe a proximite immediate du centre-ville de Hyeres, Bianco Esthetique est votre institut de beaute de quartier, accessible en quelques minutes a pied depuis la place Massillon, la rue Gambetta ou le marche couvert.',
      'Salome vous accueille dans un cadre elegamment decore, loin de l\'agitation du centre, pour des soins personnalises qui allient expertise professionnelle et detente absolue.',
      'Que vous habitiez dans les ruelles du vieux Hyeres, pres du parc Olbius Riquier ou du casino, votre institut est a portee de main pour une pause beaute au quotidien.',
    ],
    whyUs: [
      'A 5 minutes a pied du centre historique de Hyeres',
      'Institut intimiste et calme, ideal pour une pause entre deux courses en centre-ville',
      'Stationnement facile a proximite (parking gratuit Avenue Ernest Millet)',
      'Soins personnalises par Salome, estheticienne experte',
      'Produits professionnels haut de gamme',
    ],
    servicesHighlight: [
      'Soin du visage eclat et anti-age',
      'Extensions de cils cil a cil et volume mixte',
      'Manucure et pose d\'ongles en gel',
      'Massage californien relaxant',
      'Callus peeling et beaute des pieds',
      'Drainage lymphatique methode bresilienne',
    ],
    accessInfo: [
      'Adresse : 3 Avenue Ernest Millet, 83400 Hyeres',
      'Depuis le centre-ville : 5 minutes a pied en direction du sud par l\'avenue Gambetta',
      'En voiture : parking gratuit a proximite de l\'institut',
      'Bus : arret "Ernest Millet" lignes 39 et 67',
    ],
    faq: [
      { question: 'Ou se trouve l\'institut par rapport au centre-ville de Hyeres ?', answer: 'Bianco Esthetique est situe au 3 Avenue Ernest Millet, a seulement 5 minutes a pied du centre historique de Hyeres, pres du parc Olbius Riquier.' },
      { question: 'Y a-t-il un parking pres de l\'institut ?', answer: 'Oui, un parking gratuit est disponible a proximite immediate de l\'institut. Vous pouvez aussi stationner le long de l\'avenue Ernest Millet.' },
      { question: 'Quels soins proposez-vous ?', answer: 'Soins du visage, extensions de cils, manucure et ongles en gel, massage californien, callus peeling, drainage lymphatique et epilations. Tous les soins sont personnalises.' },
      { question: 'Faut-il prendre rendez-vous ?', answer: 'Oui, nous vous recommandons de reserver sur Planity ou par telephone au 07 49 96 76 91 pour garantir votre creneau.' },
    ],
    ctaTitle: 'Votre institut a deux pas du centre-ville',
    ctaText: 'Reservez votre soin chez Bianco Esthetique et profitez d\'un moment de beaute et de detente au coeur de Hyeres.',
    nearbyPages: [
      { label: 'Costebelle', to: '/institut-beaute-costebelle-hyeres' },
      { label: 'Les Palmiers', to: '/institut-beaute-les-palmiers-hyeres' },
      { label: 'Le Port', to: '/institut-beaute-port-hyeres' },
      { label: 'Giens', to: '/institut-beaute-giens-hyeres' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
      { label: 'Callus peeling & pieds', to: '/callus-peeling-hyeres' },
    ],
  },

  'institut-beaute-costebelle-hyeres': {
    slug: 'institut-beaute-costebelle-hyeres',
    title: 'Institut de beaute Costebelle Hyeres | Bianco Esthetique',
    metaDescription: 'Institut de beaute pres de Costebelle a Hyeres. Soins visage, cils, massage, manucure. A 5 min en voiture du quartier Costebelle. Bianco Esthetique.',
    h1: 'Institut de beaute pres de Costebelle a Hyeres',
    heroSubtitle: 'Vous habitez Costebelle ? Bianco Esthetique, votre institut de beaute de proximite, est a seulement 5 minutes en voiture. Soins visage, cils, massage et manucure dans un cadre raffine.',
    geoName: 'Costebelle, Hyeres',
    geoLat: 43.1083,
    geoLng: 6.1350,
    distanceFromInstitut: '5 minutes en voiture',
    presentation: [
      'Le quartier residentiel de Costebelle, repute pour son calme et sa vegetation luxuriante, est a quelques minutes de Bianco Esthetique. Descendre l\'avenue de Costebelle en direction du centre vous mene directement a l\'institut.',
      'Salome propose dans son espace intime des soins sur mesure adaptes a chaque type de peau et a chaque envie : eclat du teint, regard sublime, mains soignees ou detente profonde.',
      'Apres une balade sur la colline de Costebelle ou une visite a la villa Noailles, offrez-vous un moment de beaute chez Bianco Esthetique.',
    ],
    whyUs: [
      'A 5 minutes en voiture depuis Costebelle',
      'Acces rapide par l\'avenue de Costebelle puis l\'avenue Ernest Millet',
      'Institut calme et intimiste, dans l\'esprit du quartier Costebelle',
      'Soins visage, cils, ongles, massage et drainage lymphatique',
      'Note 5/5 sur Google — clientele fidele du quartier',
    ],
    servicesHighlight: [
      'Soin du visage personnalise',
      'Extensions de cils naturelles',
      'Manucure semi-permanent et gel',
      'Massage californien',
      'Callus peeling pieds',
      'Drainage lymphatique',
    ],
    accessInfo: [
      'Depuis Costebelle : descendre l\'avenue de Costebelle, tourner sur l\'avenue Ernest Millet (5 min)',
      'Parking gratuit devant l\'institut',
      'Bus : ligne 39 arret "Ernest Millet"',
    ],
    faq: [
      { question: 'Quelle est la distance entre Costebelle et l\'institut ?', answer: 'Bianco Esthetique est a environ 5 minutes en voiture depuis le quartier de Costebelle, via l\'avenue de Costebelle.' },
      { question: 'Avez-vous des clientes de Costebelle ?', answer: 'Oui, de nombreuses clientes viennent du quartier de Costebelle pour profiter de nos soins dans un cadre proche et accessible.' },
      { question: 'Quels sont vos horaires ?', answer: 'L\'institut est ouvert du lundi au vendredi de 10h a 18h. Ferme le samedi et le dimanche.' },
    ],
    ctaTitle: 'A 5 min de Costebelle',
    ctaText: 'Reservez votre soin et profitez d\'un institut de beaute tout pres de chez vous.',
    nearbyPages: [
      { label: 'Centre-ville Hyeres', to: '/institut-beaute-centre-ville-hyeres' },
      { label: 'L\'Almanarre', to: '/institut-beaute-almanarre-hyeres' },
      { label: 'Carqueiranne', to: '/institut-beaute-carqueiranne' },
      { label: 'Le Pradet', to: '/institut-beaute-le-pradet' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
      { label: 'Callus peeling & pieds', to: '/callus-peeling-hyeres' },
    ],
  },

  'institut-beaute-les-palmiers-hyeres': {
    slug: 'institut-beaute-les-palmiers-hyeres',
    title: 'Institut de beaute Les Palmiers Hyeres | Bianco Esthetique',
    metaDescription: 'Institut de beaute proche du quartier Les Palmiers a Hyeres. Soins esthetiques haut de gamme a 3 min. Extensions cils, manucure, massage. Bianco Esthetique.',
    h1: 'Institut de beaute pres des Palmiers a Hyeres',
    heroSubtitle: 'Le quartier Les Palmiers est l\'un des plus proches de Bianco Esthetique. En 3 minutes, rejoignez votre institut pour des soins du visage, cils, ongles et massages dans une ambiance cocon.',
    geoName: 'Les Palmiers, Hyeres',
    geoLat: 43.1155,
    geoLng: 6.1230,
    distanceFromInstitut: '3 minutes en voiture',
    presentation: [
      'Le quartier des Palmiers, avec ses larges avenues et sa proximite du centre, est le voisin direct de Bianco Esthetique. En quelques minutes a pied ou en voiture, vous accedez a un institut ou chaque soin est un moment privilege.',
      'Salome met son savoir-faire au service de votre beaute dans un cadre soigne et apaisant, parfait pour une pause detente pres de chez vous.',
    ],
    whyUs: [
      'Le quartier le plus proche de l\'institut : 3 minutes',
      'Accessible a pied depuis Les Palmiers',
      'Tous les soins beaute en un seul lieu',
      'Ambiance chaleureuse et personnel attentionne',
      'Produits professionnels et hygiene irreprochable',
    ],
    servicesHighlight: [
      'Soin visage eclat',
      'Extensions de cils volume',
      'Beaute des mains et des pieds',
      'Massage californien',
      'Drainage lymphatique',
    ],
    accessInfo: [
      'Depuis Les Palmiers : 3 minutes en voiture ou 8 minutes a pied par l\'avenue des Palmiers',
      'Parking gratuit sur place',
    ],
    faq: [
      { question: 'L\'institut est-il accessible a pied depuis Les Palmiers ?', answer: 'Oui, en environ 8 minutes a pied par l\'avenue des Palmiers, ou 3 minutes en voiture.' },
      { question: 'Proposez-vous des soins express a l\'heure du dejeuner ?', answer: 'Oui, Salome peut adapter certains soins en format express pour une pause beaute rapide entre midi et deux.' },
    ],
    ctaTitle: 'Votre institut au coin de la rue',
    ctaText: 'Depuis Les Palmiers, votre soin beaute est a 3 minutes. Reservez maintenant.',
    nearbyPages: [
      { label: 'Centre-ville Hyeres', to: '/institut-beaute-centre-ville-hyeres' },
      { label: 'Costebelle', to: '/institut-beaute-costebelle-hyeres' },
      { label: 'Le Port', to: '/institut-beaute-port-hyeres' },
      { label: 'La Crau', to: '/institut-beaute-la-crau' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
      { label: 'Callus peeling & pieds', to: '/callus-peeling-hyeres' },
    ],
  },

  'institut-beaute-port-hyeres': {
    slug: 'institut-beaute-port-hyeres',
    title: 'Institut de beaute Le Port de Hyeres | Bianco Esthetique',
    metaDescription: 'Institut de beaute pres du Port de Hyeres et de la Tour Fondue. Soins visage, cils, ongles, massage. A 10 min du port. Bianco Esthetique.',
    h1: 'Institut de beaute pres du Port de Hyeres',
    heroSubtitle: 'Vous frequentez le port de Hyeres ou la presqu\'ile de Giens ? Bianco Esthetique est a 10 minutes pour vos soins de beaute dans un cadre intimiste et professionnel.',
    geoName: 'Le Port, Hyeres',
    geoLat: 43.0823,
    geoLng: 6.1539,
    distanceFromInstitut: '10 minutes en voiture',
    presentation: [
      'Le port de Hyeres, point de depart vers les iles d\'Or (Porquerolles, Port-Cros, Le Levant), est a 10 minutes de Bianco Esthetique. Avant ou apres une traversee, offrez-vous un soin de beaute chez Salome.',
      'L\'institut propose une gamme complete de prestations pour sublimer votre beaute : soins visage, extensions de cils, manucure, massage et drainage lymphatique.',
    ],
    whyUs: [
      'A 10 min du port de Hyeres par la route du sel',
      'Ideal avant ou apres une traversee vers les iles',
      'Soins complets : visage, cils, ongles, corps',
      'Cadre intimiste et parking facile',
      'Salome, estheticienne passionnee et experte',
    ],
    servicesHighlight: [
      'Soin visage bonne mine avant les vacances',
      'Pose de cils pour un regard sans maquillage',
      'Manucure longue tenue',
      'Massage relaxant apres une journee en mer',
      'Callus peeling pour des pieds parfaits en ete',
    ],
    accessInfo: [
      'Depuis le Port : prendre la route du sel puis l\'avenue Ernest Millet (10 min)',
      'Depuis la Tour Fondue : 15 minutes par la route de Giens',
      'Parking gratuit sur place',
    ],
    faq: [
      { question: 'Combien de temps faut-il depuis le port de Hyeres ?', answer: 'Environ 10 minutes en voiture par la route du sel, puis l\'avenue Ernest Millet.' },
      { question: 'Peut-on venir avant une traversee vers Porquerolles ?', answer: 'Bien sur ! Un soin express visage ou une retouche cils est tout a fait possible avant votre depart. Reservez pour garantir le timing.' },
    ],
    ctaTitle: 'Beaute et detente pres du port',
    ctaText: 'A 10 minutes du port de Hyeres, Bianco Esthetique vous accueille pour vos soins de beaute.',
    nearbyPages: [
      { label: 'Giens', to: '/institut-beaute-giens-hyeres' },
      { label: 'L\'Almanarre', to: '/institut-beaute-almanarre-hyeres' },
      { label: 'Centre-ville Hyeres', to: '/institut-beaute-centre-ville-hyeres' },
      { label: 'Carqueiranne', to: '/institut-beaute-carqueiranne' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
      { label: 'Callus peeling & pieds', to: '/callus-peeling-hyeres' },
    ],
  },

  'institut-beaute-almanarre-hyeres': {
    slug: 'institut-beaute-almanarre-hyeres',
    title: 'Institut de beaute L\'Almanarre Hyeres | Bianco Esthetique',
    metaDescription: 'Institut de beaute proche de L\'Almanarre a Hyeres. Soins visage, cils, massage, drainage. A 10 min de la plage. Reservez chez Bianco Esthetique.',
    h1: 'Institut de beaute pres de L\'Almanarre a Hyeres',
    heroSubtitle: 'Vous vivez ou surfez a L\'Almanarre ? Bianco Esthetique est votre institut de beaute a 10 minutes, pour prendre soin de votre peau apres la plage et le vent.',
    geoName: 'L\'Almanarre, Hyeres',
    geoLat: 43.0750,
    geoLng: 6.1280,
    distanceFromInstitut: '10 minutes en voiture',
    presentation: [
      'L\'Almanarre, celebre pour sa plage de kitesurf et ses etendues sauvages, est a 10 minutes de Bianco Esthetique. Apres une session sur l\'eau ou une balade au bord du sel, votre peau merite une attention particuliere.',
      'Salome propose des soins adaptes aux peaux exposees au soleil, au vent et au sel : hydratation profonde, eclat du teint, beaute des mains et des pieds.',
    ],
    whyUs: [
      'A 10 minutes de la plage de L\'Almanarre',
      'Soins adaptes aux peaux exposees (soleil, vent, sel)',
      'Soin visage hydratant apres la plage',
      'Callus peeling ideal apres la saison plage',
      'Ambiance cocooning pour decompresser apres le sport',
    ],
    servicesHighlight: [
      'Soin visage hydratation et reparation',
      'Callus peeling pieds',
      'Massage californien detente',
      'Extensions de cils waterproof',
      'Manucure semi-permanent longue tenue',
    ],
    accessInfo: [
      'Depuis L\'Almanarre : remonter la route du sel vers Hyeres centre, puis avenue Ernest Millet (10 min)',
      'Parking gratuit a l\'institut',
    ],
    faq: [
      { question: 'L\'institut est-il loin de L\'Almanarre ?', answer: 'Non, a seulement 10 minutes en voiture en remontant vers le centre de Hyeres.' },
      { question: 'Proposez-vous des soins apres-plage ?', answer: 'Oui, Salome propose des soins visage hydratants et reparateurs, ideaux apres une exposition au soleil et au sel.' },
    ],
    ctaTitle: 'Prenez soin de vous apres la plage',
    ctaText: 'A 10 min de L\'Almanarre, Bianco Esthetique prend soin de votre peau.',
    nearbyPages: [
      { label: 'Giens', to: '/institut-beaute-giens-hyeres' },
      { label: 'Le Port', to: '/institut-beaute-port-hyeres' },
      { label: 'Costebelle', to: '/institut-beaute-costebelle-hyeres' },
      { label: 'La Londe', to: '/institut-beaute-la-londe-les-maures' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
      { label: 'Callus peeling & pieds', to: '/callus-peeling-hyeres' },
    ],
  },

  'institut-beaute-giens-hyeres': {
    slug: 'institut-beaute-giens-hyeres',
    title: 'Institut de beaute Giens Hyeres | Bianco Esthetique',
    metaDescription: 'Institut de beaute pres de la presqu\'ile de Giens a Hyeres. Soins visage, cils, massage, manucure. A 15 min de Giens. Bianco Esthetique.',
    h1: 'Institut de beaute pres de Giens a Hyeres',
    heroSubtitle: 'Depuis la presqu\'ile de Giens, rejoignez Bianco Esthetique en 15 minutes pour des soins de beaute professionnels dans un ecrin de douceur.',
    geoName: 'Giens, Hyeres',
    geoLat: 43.0392,
    geoLng: 6.1383,
    distanceFromInstitut: '15 minutes en voiture',
    presentation: [
      'La presqu\'ile de Giens, joyau naturel de Hyeres, est a 15 minutes de route de Bianco Esthetique. Que vous soyez resident ou en vacances, offrez-vous un soin de beaute entre deux plongees ou randonnees.',
      'Salome vous accueille dans son institut pour des soins adaptes : hydratation du visage apres le grand air, beaute des mains, pose de cils naturelle et massage decontractant.',
    ],
    whyUs: [
      'L\'institut le plus proche de la presqu\'ile de Giens (15 min)',
      'Soins adaptes a une vie au grand air',
      'Ideal en complement de vacances sur la presqu\'ile',
      'Parking facile et acces rapide depuis la route de Giens',
      'Ambiance calme et professionnelle',
    ],
    servicesHighlight: [
      'Soin visage eclat et protection',
      'Extensions de cils pour un regard naturel en vacances',
      'Manucure longue tenue',
      'Massage californien apres la randonnee',
      'Beaute des pieds',
    ],
    accessInfo: [
      'Depuis Giens : prendre la route de Giens vers Hyeres centre, puis avenue Ernest Millet (15 min)',
      'Depuis la Tour Fondue : environ 20 minutes',
      'Parking gratuit sur place',
    ],
    faq: [
      { question: 'Combien de temps entre Giens et l\'institut ?', answer: 'Environ 15 minutes en voiture par la route de Giens. 20 minutes depuis la Tour Fondue.' },
      { question: 'Acceptez-vous les clientes en vacances sur Giens ?', answer: 'Absolument ! Beaucoup de clientes en sejour sur la presqu\'ile viennent pour un soin ponctuel. Reservez a l\'avance en haute saison.' },
    ],
    ctaTitle: 'Beaute et vacances a Giens',
    ctaText: 'Depuis la presqu\'ile, offrez-vous un soin chez Bianco Esthetique a 15 minutes.',
    nearbyPages: [
      { label: 'L\'Almanarre', to: '/institut-beaute-almanarre-hyeres' },
      { label: 'Le Port', to: '/institut-beaute-port-hyeres' },
      { label: 'Centre-ville Hyeres', to: '/institut-beaute-centre-ville-hyeres' },
      { label: 'Carqueiranne', to: '/institut-beaute-carqueiranne' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
      { label: 'Callus peeling & pieds', to: '/callus-peeling-hyeres' },
    ],
  },

  // ============================================================
  // VILLES LIMITROPHES
  // ============================================================

  'institut-beaute-toulon': {
    slug: 'institut-beaute-toulon',
    title: 'Institut de beaute pres de Toulon | Bianco Esthetique Hyeres',
    metaDescription: 'Institut de beaute a 20 min de Toulon. Soins visage, extensions cils, massage californien, manucure, drainage. Bianco Esthetique a Hyeres.',
    h1: 'Institut de beaute pres de Toulon — Bianco Esthetique',
    heroSubtitle: 'Depuis Toulon, rejoignez Bianco Esthetique a Hyeres en 20 minutes par l\'autoroute A570. Un institut intimiste pour des soins haut de gamme loin de l\'agitation urbaine.',
    geoName: 'Toulon',
    geoLat: 43.1242,
    geoLng: 5.9280,
    distanceFromInstitut: '20 minutes en voiture',
    presentation: [
      'Vous habitez Toulon et cherchez un institut de beaute qui allie expertise, cadre raffine et tranquillite ? Bianco Esthetique a Hyeres est a seulement 20 minutes par l\'A570.',
      'Loin du rythme intense de Toulon, Salome vous accueille dans un espace cocon pour des soins du visage, extensions de cils, manucures, massages californiens et drainage lymphatique methode bresilienne.',
      'De nombreuses Toulonnaises ont deja adopte Bianco Esthetique pour la qualite de ses soins, l\'attention portee a chaque cliente et le cadre paisible de l\'institut.',
    ],
    whyUs: [
      'A 20 minutes de Toulon par l\'A570, sortie Hyeres centre',
      'Un cadre calme et intimiste, loin de la ville',
      'Expertise de Salome reconnue par les clientes toulonnaises',
      'Parking gratuit et facile (plus simple qu\'en centre-ville de Toulon)',
      'Note 5/5 sur Google — 24 avis',
    ],
    servicesHighlight: [
      'Soin du visage anti-age et eclat',
      'Extensions de cils cil a cil et volume mixte',
      'Manucure et ongles en gel',
      'Massage californien 1h',
      'Drainage lymphatique corps entier',
      'Callus peeling et beaute des pieds',
    ],
    accessInfo: [
      'Depuis Toulon centre : autoroute A570 direction Hyeres, sortie Hyeres centre (20 min)',
      'Depuis Toulon Est (La Garde) : D98 puis A570 (15 min)',
      'Parking gratuit devant l\'institut',
      'Adresse : 3 Avenue Ernest Millet, 83400 Hyeres',
    ],
    faq: [
      { question: 'Combien de temps faut-il depuis Toulon ?', answer: 'Environ 20 minutes par l\'autoroute A570 depuis le centre de Toulon. 15 minutes depuis Toulon Est ou La Garde.' },
      { question: 'Pourquoi venir a Hyeres plutot que rester a Toulon ?', answer: 'Bianco Esthetique offre un cadre calme et intimiste, un parking gratuit et facile, et une attention personnalisee que l\'on ne trouve pas toujours dans les grandes villes. Le deplacement vaut le detour.' },
      { question: 'Avez-vous des clientes de Toulon ?', answer: 'Oui, une partie importante de notre clientele vient de Toulon et de ses environs. Elles apprecient le calme de l\'institut et la qualite des soins.' },
      { question: 'Puis-je reserver en ligne ?', answer: 'Oui, reservez directement sur Planity ou appelez le 07 49 96 76 91.' },
    ],
    ctaTitle: 'Toulonnaises, offrez-vous un soin d\'exception',
    ctaText: 'A 20 min de Toulon, Bianco Esthetique vous accueille pour une parenthese beaute dans un cadre paisible.',
    nearbyPages: [
      { label: 'La Garde', to: '/institut-beaute-la-garde' },
      { label: 'La Valette-du-Var', to: '/institut-beaute-la-valette-du-var' },
      { label: 'Le Pradet', to: '/institut-beaute-le-pradet' },
      { label: 'Centre-ville Hyeres', to: '/institut-beaute-centre-ville-hyeres' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Toulon', to: '/soin-visage-toulon' },
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
    ],
  },

  'institut-beaute-la-garde': {
    slug: 'institut-beaute-la-garde',
    title: 'Institut de beaute pres de La Garde | Bianco Esthetique Hyeres',
    metaDescription: 'Institut de beaute a 10 min de La Garde. Soins visage, cils, massage, manucure, drainage lymphatique. Bianco Esthetique a Hyeres.',
    h1: 'Institut de beaute pres de La Garde — Bianco Esthetique',
    heroSubtitle: 'Depuis La Garde, rejoignez Bianco Esthetique a Hyeres en seulement 10 minutes. Un institut de beaute intimiste pour des soins professionnels et personnalises.',
    geoName: 'La Garde',
    geoLat: 43.1246,
    geoLng: 6.0108,
    distanceFromInstitut: '10 minutes en voiture',
    presentation: [
      'La Garde, commune limitrophe de Hyeres, est a seulement 10 minutes de Bianco Esthetique. Un trajet court pour acceder a un institut de beaute haut de gamme dans un cadre apaisant.',
      'Que vous travailliez au centre commercial Grand Var ou que vous habitiez dans les quartiers residentiels de La Garde, Salome vous accueille pour des soins sur mesure.',
      'Extensions de cils, soins du visage, manucure, massage californien ou drainage lymphatique : chaque prestation est realisee avec precision et douceur.',
    ],
    whyUs: [
      'A 10 minutes de La Garde par la D98',
      'Plus calme et plus intimiste qu\'un institut de centre commercial',
      'Soins personnalises par une estheticienne experte',
      'Parking facile et gratuit',
      'Gamme complete de soins beaute et bien-etre',
    ],
    servicesHighlight: [
      'Soin du visage eclat et hydratation',
      'Extensions de cils',
      'Manucure et ongles en gel',
      'Massage californien',
      'Drainage lymphatique',
      'Callus peeling',
    ],
    accessInfo: [
      'Depuis La Garde : D98 direction Hyeres, puis avenue Ernest Millet (10 min)',
      'Depuis le centre commercial Grand Var : 12 minutes',
      'Parking gratuit sur place',
    ],
    faq: [
      { question: 'Quelle est la distance entre La Garde et l\'institut ?', answer: 'Bianco Esthetique est a environ 10 minutes en voiture depuis La Garde, par la D98 direction Hyeres.' },
      { question: 'C\'est plus pratique que les instituts de Toulon ?', answer: 'Oui, Bianco Esthetique offre un cadre calme, un parking gratuit et une attention personnalisee. Le trajet depuis La Garde est souvent plus rapide qu\'aller en centre-ville de Toulon.' },
    ],
    ctaTitle: 'A 10 min de La Garde',
    ctaText: 'Reservez votre soin beaute chez Bianco Esthetique, votre institut pres de La Garde.',
    nearbyPages: [
      { label: 'Toulon', to: '/institut-beaute-toulon' },
      { label: 'La Valette-du-Var', to: '/institut-beaute-la-valette-du-var' },
      { label: 'Le Pradet', to: '/institut-beaute-le-pradet' },
      { label: 'Centre-ville Hyeres', to: '/institut-beaute-centre-ville-hyeres' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
    ],
  },

  'institut-beaute-carqueiranne': {
    slug: 'institut-beaute-carqueiranne',
    title: 'Institut de beaute pres de Carqueiranne | Bianco Esthetique',
    metaDescription: 'Institut de beaute a 10 min de Carqueiranne. Soins visage, extensions cils, massage, manucure. Bianco Esthetique a Hyeres.',
    h1: 'Institut de beaute pres de Carqueiranne',
    heroSubtitle: 'Depuis Carqueiranne, votre institut de beaute Bianco Esthetique est a 10 minutes. Soins du visage, cils, ongles, massage et drainage dans un cadre raffine.',
    geoName: 'Carqueiranne',
    geoLat: 43.0964,
    geoLng: 6.0746,
    distanceFromInstitut: '10 minutes en voiture',
    presentation: [
      'Carqueiranne, petite commune cotiere entre Hyeres et Le Pradet, est a 10 minutes de Bianco Esthetique. Un trajet agreable le long de la cote pour rejoindre votre institut de beaute.',
      'Salome accueille regulierement des clientes de Carqueiranne qui apprecient le cadre intime de l\'institut, la qualite des soins et la facilite d\'acces.',
    ],
    whyUs: [
      'A 10 minutes de Carqueiranne par la route cotiere',
      'Institut intimiste et calme',
      'Soins personnalises et produits professionnels',
      'Parking gratuit et facile',
      'Clientele fidele de Carqueiranne',
    ],
    servicesHighlight: [
      'Soin du visage',
      'Extensions de cils',
      'Manucure et gel',
      'Massage californien',
      'Drainage lymphatique',
    ],
    accessInfo: [
      'Depuis Carqueiranne : suivre la D559 direction Hyeres, puis avenue Ernest Millet (10 min)',
      'Parking gratuit sur place',
    ],
    faq: [
      { question: 'Combien de temps depuis Carqueiranne ?', answer: 'Environ 10 minutes en voiture par la route cotiere D559.' },
      { question: 'L\'institut est-il ouvert le samedi ?', answer: 'Non, l\'institut est ouvert du lundi au vendredi de 10h a 18h. Reservez en semaine pour profiter d\'un creneau.' },
    ],
    ctaTitle: 'Votre institut pres de Carqueiranne',
    ctaText: 'A 10 minutes, Bianco Esthetique vous attend pour vos soins beaute.',
    nearbyPages: [
      { label: 'Le Pradet', to: '/institut-beaute-le-pradet' },
      { label: 'La Garde', to: '/institut-beaute-la-garde' },
      { label: 'Costebelle', to: '/institut-beaute-costebelle-hyeres' },
      { label: 'Centre-ville Hyeres', to: '/institut-beaute-centre-ville-hyeres' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
    ],
  },

  'institut-beaute-le-pradet': {
    slug: 'institut-beaute-le-pradet',
    title: 'Institut de beaute pres du Pradet | Bianco Esthetique Hyeres',
    metaDescription: 'Institut de beaute a 12 min du Pradet. Soins visage, cils, massage, manucure, drainage. Bianco Esthetique a Hyeres.',
    h1: 'Institut de beaute pres du Pradet',
    heroSubtitle: 'Du Pradet a Bianco Esthetique, 12 minutes suffisent pour acceder a un institut de beaute haut de gamme. Soins visage, cils, ongles et massages par Salome.',
    geoName: 'Le Pradet',
    geoLat: 43.1061,
    geoLng: 6.0236,
    distanceFromInstitut: '12 minutes en voiture',
    presentation: [
      'Le Pradet, charmante commune littorale entre Toulon et Hyeres, est a 12 minutes de Bianco Esthetique. Un institut de beaute intimiste ou Salome vous accueille pour des soins personnalises.',
      'Apres une balade sur les sentiers du littoral pradetan, offrez-vous un moment de beaute et de detente chez Bianco Esthetique.',
    ],
    whyUs: [
      'A 12 minutes du Pradet',
      'Cadre plus calme et intimiste que les instituts de Toulon',
      'Expertise reconnue en soins visage, cils et massage',
      'Parking gratuit',
      'Reservation facile sur Planity',
    ],
    servicesHighlight: [
      'Soin du visage',
      'Extensions de cils',
      'Manucure semi-permanent',
      'Massage californien',
      'Drainage lymphatique',
      'Beaute des pieds',
    ],
    accessInfo: [
      'Depuis Le Pradet : D559 direction Hyeres via Carqueiranne (12 min)',
      'Ou par l\'A570 sortie Hyeres centre',
      'Parking gratuit sur place',
    ],
    faq: [
      { question: 'Comment venir depuis Le Pradet ?', answer: 'Par la route cotiere D559 via Carqueiranne (12 min) ou par l\'A570 sortie Hyeres centre.' },
      { question: 'Vaut-il mieux venir ici ou aller a Toulon ?', answer: 'Bianco Esthetique est plus proche du Pradet que le centre de Toulon, avec parking gratuit et un cadre plus intimiste.' },
    ],
    ctaTitle: 'Depuis Le Pradet, 12 min pour votre soin',
    ctaText: 'Reservez chez Bianco Esthetique, votre institut accessible et professionnel.',
    nearbyPages: [
      { label: 'Carqueiranne', to: '/institut-beaute-carqueiranne' },
      { label: 'La Garde', to: '/institut-beaute-la-garde' },
      { label: 'Toulon', to: '/institut-beaute-toulon' },
      { label: 'Centre-ville Hyeres', to: '/institut-beaute-centre-ville-hyeres' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
    ],
  },

  'institut-beaute-la-crau': {
    slug: 'institut-beaute-la-crau',
    title: 'Institut de beaute pres de La Crau | Bianco Esthetique Hyeres',
    metaDescription: 'Institut de beaute a 10 min de La Crau. Soins visage, cils, massage, manucure. Bianco Esthetique a Hyeres vous accueille.',
    h1: 'Institut de beaute pres de La Crau',
    heroSubtitle: 'La Crau est a seulement 10 minutes de Bianco Esthetique. Rejoignez votre institut de beaute pour des soins visage, cils, massage et manucure dans un cadre raffine.',
    geoName: 'La Crau',
    geoLat: 43.1497,
    geoLng: 6.0731,
    distanceFromInstitut: '10 minutes en voiture',
    presentation: [
      'La Crau, commune voisine de Hyeres au nord, est parfaitement connectee a Bianco Esthetique en 10 minutes par la D554. Un acces direct et rapide pour vos soins de beaute.',
      'Les habitantes de La Crau apprecient la proximite de l\'institut, le calme du quartier et la qualite des prestations de Salome.',
    ],
    whyUs: [
      'A 10 minutes de La Crau par la D554',
      'L\'institut de beaute le plus proche pour les Crauvoises',
      'Soins complets et personnalises',
      'Parking gratuit et acces simple',
      'Ambiance chaleureuse',
    ],
    servicesHighlight: [
      'Soin du visage',
      'Extensions de cils',
      'Manucure et ongles en gel',
      'Massage californien',
      'Drainage lymphatique',
    ],
    accessInfo: [
      'Depuis La Crau : D554 direction Hyeres centre, puis avenue Ernest Millet (10 min)',
      'Parking gratuit sur place',
    ],
    faq: [
      { question: 'Quelle route prendre depuis La Crau ?', answer: 'La D554 direction Hyeres centre, puis suivre les panneaux vers l\'avenue Ernest Millet. 10 minutes de trajet.' },
      { question: 'Y a-t-il d\'autres clientes de La Crau ?', answer: 'Oui, La Crau fait partie de notre zone de chalandise principale. De nombreuses clientes viennent regulierement.' },
    ],
    ctaTitle: 'La Crau — Hyeres en 10 min',
    ctaText: 'Votre institut de beaute est tout pres. Reservez maintenant.',
    nearbyPages: [
      { label: 'Centre-ville Hyeres', to: '/institut-beaute-centre-ville-hyeres' },
      { label: 'Les Palmiers', to: '/institut-beaute-les-palmiers-hyeres' },
      { label: 'La Garde', to: '/institut-beaute-la-garde' },
      { label: 'Cuers', to: '/institut-beaute-cuers' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
    ],
  },

  'institut-beaute-la-londe-les-maures': {
    slug: 'institut-beaute-la-londe-les-maures',
    title: 'Institut de beaute pres de La Londe-les-Maures | Bianco Esthetique',
    metaDescription: 'Institut de beaute a 15 min de La Londe-les-Maures. Soins visage, cils, massage. Bianco Esthetique a Hyeres.',
    h1: 'Institut de beaute pres de La Londe-les-Maures',
    heroSubtitle: 'Depuis La Londe-les-Maures, Bianco Esthetique est a 15 minutes. Votre institut de beaute pour des soins du visage, extensions de cils, massage et manucure.',
    geoName: 'La Londe-les-Maures',
    geoLat: 43.1383,
    geoLng: 6.2339,
    distanceFromInstitut: '15 minutes en voiture',
    presentation: [
      'La Londe-les-Maures, entre vignobles et littoral, est a 15 minutes de Bianco Esthetique par la D98. Un trajet agreable pour acceder a un institut de beaute professionnel et chaleureux.',
      'Salome accueille les Londaises pour des soins complets : visage, cils, ongles, massage et drainage lymphatique, dans un cadre intimiste.',
    ],
    whyUs: [
      'A 15 minutes de La Londe-les-Maures',
      'L\'institut haut de gamme le plus accessible depuis l\'est de Hyeres',
      'Soins personnalises et produits professionnels',
      'Parking gratuit',
      'Cadre calme et raffine',
    ],
    servicesHighlight: [
      'Soin du visage',
      'Extensions de cils',
      'Manucure',
      'Massage californien',
      'Drainage lymphatique',
    ],
    accessInfo: [
      'Depuis La Londe-les-Maures : D98 direction Hyeres (15 min)',
      'Parking gratuit sur place',
    ],
    faq: [
      { question: 'Combien de temps depuis La Londe ?', answer: 'Environ 15 minutes par la D98 en direction de Hyeres.' },
      { question: 'C\'est l\'institut le plus proche de La Londe ?', answer: 'Bianco Esthetique a Hyeres est l\'un des instituts de beaute haut de gamme les plus proches de La Londe-les-Maures.' },
    ],
    ctaTitle: 'Depuis La Londe, 15 min pour la beaute',
    ctaText: 'Reservez votre soin chez Bianco Esthetique a Hyeres.',
    nearbyPages: [
      { label: 'Centre-ville Hyeres', to: '/institut-beaute-centre-ville-hyeres' },
      { label: 'Bormes-les-Mimosas', to: '/institut-beaute-bormes-les-mimosas' },
      { label: 'Cuers', to: '/institut-beaute-cuers' },
      { label: 'Le Port Hyeres', to: '/institut-beaute-port-hyeres' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
    ],
  },

  'institut-beaute-bormes-les-mimosas': {
    slug: 'institut-beaute-bormes-les-mimosas',
    title: 'Institut de beaute pres de Bormes-les-Mimosas | Bianco Esthetique',
    metaDescription: 'Institut de beaute a 25 min de Bormes-les-Mimosas. Soins visage, cils, massage, manucure. Bianco Esthetique a Hyeres.',
    h1: 'Institut de beaute pres de Bormes-les-Mimosas',
    heroSubtitle: 'Depuis Bormes-les-Mimosas, Bianco Esthetique a Hyeres est a 25 minutes. Un institut de beaute qui vaut le detour pour des soins professionnels et un cadre d\'exception.',
    geoName: 'Bormes-les-Mimosas',
    geoLat: 43.1517,
    geoLng: 6.3422,
    distanceFromInstitut: '25 minutes en voiture',
    presentation: [
      'Bormes-les-Mimosas, village fleuri classe parmi les plus beaux de France, est a 25 minutes de Bianco Esthetique. Le trajet par la D98 longe la cote et les vignobles.',
      'Salome propose des soins de beaute adaptes a toutes : soin visage, extensions de cils, manucure, massage californien et drainage lymphatique.',
    ],
    whyUs: [
      'A 25 minutes de Bormes-les-Mimosas',
      'Institut recommande par des clientes de Bormes',
      'Soins haut de gamme dans un cadre intimiste',
      'Parking gratuit et acces facile',
    ],
    servicesHighlight: [
      'Soin du visage',
      'Extensions de cils',
      'Manucure',
      'Massage californien',
      'Drainage lymphatique',
    ],
    accessInfo: [
      'Depuis Bormes-les-Mimosas : D98 via La Londe-les-Maures puis Hyeres (25 min)',
      'Parking gratuit sur place',
    ],
    faq: [
      { question: 'Est-ce que le trajet depuis Bormes vaut le coup ?', answer: 'Nos clientes de Bormes disent que oui ! L\'expertise de Salome, le cadre intime et la qualite des soins justifient le deplacement de 25 minutes.' },
    ],
    ctaTitle: 'Depuis Bormes, un institut qui vaut le detour',
    ctaText: 'Reservez votre soin chez Bianco Esthetique a Hyeres.',
    nearbyPages: [
      { label: 'La Londe-les-Maures', to: '/institut-beaute-la-londe-les-maures' },
      { label: 'Centre-ville Hyeres', to: '/institut-beaute-centre-ville-hyeres' },
      { label: 'Le Port Hyeres', to: '/institut-beaute-port-hyeres' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
    ],
  },

  'institut-beaute-la-valette-du-var': {
    slug: 'institut-beaute-la-valette-du-var',
    title: 'Institut de beaute pres de La Valette-du-Var | Bianco Esthetique',
    metaDescription: 'Institut de beaute a 15 min de La Valette-du-Var. Soins visage, cils, massage, manucure. Bianco Esthetique a Hyeres.',
    h1: 'Institut de beaute pres de La Valette-du-Var',
    heroSubtitle: 'Depuis La Valette-du-Var, Bianco Esthetique est a 15 minutes. Un institut de beaute intimiste pour des soins personnalises par Salome.',
    geoName: 'La Valette-du-Var',
    geoLat: 43.1375,
    geoLng: 5.9819,
    distanceFromInstitut: '15 minutes en voiture',
    presentation: [
      'La Valette-du-Var, situee entre Toulon et Hyeres, est a 15 minutes de Bianco Esthetique par l\'A570. Un acces rapide pour un institut de beaute haut de gamme.',
      'Salome propose des soins complets dans un cadre calme et soigne, ideal pour s\'evader du quotidien urbain.',
    ],
    whyUs: [
      'A 15 minutes de La Valette-du-Var par l\'A570',
      'Institut calme et personnel, loin des centres commerciaux',
      'Soins sur mesure et produits professionnels',
      'Parking gratuit',
    ],
    servicesHighlight: [
      'Soin du visage',
      'Extensions de cils',
      'Manucure',
      'Massage californien',
      'Drainage lymphatique',
    ],
    accessInfo: [
      'Depuis La Valette-du-Var : A570 direction Hyeres, sortie centre (15 min)',
      'Parking gratuit sur place',
    ],
    faq: [
      { question: 'Comment venir depuis La Valette ?', answer: 'Par l\'A570 direction Hyeres, sortie centre. Environ 15 minutes de trajet.' },
    ],
    ctaTitle: 'Depuis La Valette, 15 min de beaute',
    ctaText: 'Reservez votre soin chez Bianco Esthetique a Hyeres.',
    nearbyPages: [
      { label: 'Toulon', to: '/institut-beaute-toulon' },
      { label: 'La Garde', to: '/institut-beaute-la-garde' },
      { label: 'Le Pradet', to: '/institut-beaute-le-pradet' },
      { label: 'Centre-ville Hyeres', to: '/institut-beaute-centre-ville-hyeres' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
    ],
  },

  'institut-beaute-sollies-pont': {
    slug: 'institut-beaute-sollies-pont',
    title: 'Institut de beaute pres de Sollies-Pont | Bianco Esthetique',
    metaDescription: 'Institut de beaute a 20 min de Sollies-Pont. Soins visage, cils, massage. Bianco Esthetique a Hyeres.',
    h1: 'Institut de beaute pres de Sollies-Pont',
    heroSubtitle: 'Depuis Sollies-Pont, Bianco Esthetique a Hyeres est a 20 minutes. Un institut de beaute professionnel et intimiste pour tous vos soins.',
    geoName: 'Sollies-Pont',
    geoLat: 43.1906,
    geoLng: 6.0419,
    distanceFromInstitut: '20 minutes en voiture',
    presentation: [
      'Sollies-Pont, au nord de Hyeres, est a 20 minutes de Bianco Esthetique par la D554 puis l\'A570. Un institut de beaute qui vaut le deplacement pour la qualite de ses soins et son ambiance chaleureuse.',
    ],
    whyUs: [
      'A 20 minutes de Sollies-Pont',
      'Institut haut de gamme et intimiste',
      'Soins personnalises',
      'Parking gratuit',
    ],
    servicesHighlight: [
      'Soin du visage',
      'Extensions de cils',
      'Manucure',
      'Massage californien',
      'Drainage lymphatique',
    ],
    accessInfo: [
      'Depuis Sollies-Pont : D554 puis A570 direction Hyeres (20 min)',
      'Parking gratuit sur place',
    ],
    faq: [
      { question: 'Comment venir depuis Sollies-Pont ?', answer: 'Par la D554 vers La Crau, puis l\'A570 ou la D98 direction Hyeres centre. 20 minutes environ.' },
    ],
    ctaTitle: 'Sollies-Pont — Hyeres en 20 min',
    ctaText: 'Reservez votre soin beaute chez Bianco Esthetique.',
    nearbyPages: [
      { label: 'La Crau', to: '/institut-beaute-la-crau' },
      { label: 'Cuers', to: '/institut-beaute-cuers' },
      { label: 'La Garde', to: '/institut-beaute-la-garde' },
      { label: 'Centre-ville Hyeres', to: '/institut-beaute-centre-ville-hyeres' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
    ],
  },

  'institut-beaute-cuers': {
    slug: 'institut-beaute-cuers',
    title: 'Institut de beaute pres de Cuers | Bianco Esthetique Hyeres',
    metaDescription: 'Institut de beaute a 20 min de Cuers. Soins visage, cils, massage, manucure. Bianco Esthetique a Hyeres.',
    h1: 'Institut de beaute pres de Cuers',
    heroSubtitle: 'Depuis Cuers, Bianco Esthetique a Hyeres est a 20 minutes. Un institut de beaute intimiste pour des soins professionnels et personnalises.',
    geoName: 'Cuers',
    geoLat: 43.2375,
    geoLng: 6.0703,
    distanceFromInstitut: '20 minutes en voiture',
    presentation: [
      'Cuers, charmante commune du centre Var, est a 20 minutes de Bianco Esthetique par la D97 et l\'A570. Un institut ou Salome vous accueille pour des soins de beaute d\'exception.',
    ],
    whyUs: [
      'A 20 minutes de Cuers',
      'Institut raffine et professionnel',
      'Soins sur mesure',
      'Parking gratuit et facile',
    ],
    servicesHighlight: [
      'Soin du visage',
      'Extensions de cils',
      'Manucure et gel',
      'Massage californien',
      'Drainage lymphatique',
    ],
    accessInfo: [
      'Depuis Cuers : D97 direction La Crau, puis Hyeres centre (20 min)',
      'Parking gratuit sur place',
    ],
    faq: [
      { question: 'Combien de temps depuis Cuers ?', answer: 'Environ 20 minutes par la D97 via La Crau puis Hyeres centre.' },
    ],
    ctaTitle: 'Depuis Cuers, un soin d\'exception',
    ctaText: 'Reservez chez Bianco Esthetique a Hyeres, a 20 minutes de Cuers.',
    nearbyPages: [
      { label: 'La Crau', to: '/institut-beaute-la-crau' },
      { label: 'Sollies-Pont', to: '/institut-beaute-sollies-pont' },
      { label: 'Centre-ville Hyeres', to: '/institut-beaute-centre-ville-hyeres' },
    ],
    prestationLinks: [
      { label: 'Soin du visage à Hyères', to: '/soin-visage-hyeres' },
      { label: 'Extensions de cils', to: '/extensions-cils-hyeres' },
      { label: 'Manucure & ongles en gel', to: '/manucure-ongles-gel-hyeres' },
      { label: 'Massage californien', to: '/massage-californien-hyeres' },
    ],
  },
};
