export type ServiceTheme = 'head-spa' | 'massage' | 'visage' | 'ongles' | 'maquillage';

export interface ServiceSection {
  title: string;
  content: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceCta {
  text: string;
  button: string;
}

export interface Service {
  id: string;
  query: string;
  city: string;
  theme: ServiceTheme;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: ServiceSection[];
  faq: ServiceFaq[];
  cta: ServiceCta;
}

export const services: Service[] = [
  {
    id: 'head-spa-japonais-hyeres-reservation-en-ligne',
    query: 'head spa japonais Hyères réservation en ligne',
    city: 'Hyères',
    theme: 'head-spa',
    title: 'Head spa japonais à Hyères : réservez en ligne',
    metaTitle: 'Head spa japonais Hyères – Réservation en ligne | Institut',
    metaDescription: 'Réservez votre head spa japonais à Hyères en ligne. Rituel crânien inspiré du Japon pour détendre nuque et cuir chevelu. Institut de beauté Hyères.',
    intro: 'Le head spa japonais s\'invite à Hyères pour vous offrir une parenthèse de bien-être unique. Inspiré des rituels ancestraux nippons, ce soin combine massage crânien, travail du cuir chevelu et relaxation profonde. Idéal après une semaine chargée ou pour retrouver une sensation de légèreté, il s\'adapte à tous les types de cheveux et ne nécessite aucun prérequis. Notre institut vous accueille dans un cadre apaisant pour une expérience authentique, avec réservation simple et rapide en ligne selon vos disponibilités.',
    sections: [
      {
        title: 'Conseils pour profiter au mieux de votre head spa',
        content: 'Pour optimiser votre séance, arrivez détendue et évitez les coiffures trop serrées le jour du soin. Une tenue confortable est recommandée. Si vous portez des lentilles, vous pourrez les retirer pendant le massage. Nous vous conseillons de ne pas prévoir d\'activité intense juste après : laissez le corps et l\'esprit prolonger la détente. Enfin, si vous avez des zones sensibles ou des antécédents particuliers, n\'hésitez pas à nous en parler avant le début du rituel pour un soin totalement personnalisé.'
      },
      {
        title: 'Déroulé du rituel head spa japonais',
        content: 'La séance débute par un temps d\'échange pour cerner vos attentes. Puis vous vous installez confortablement pour un enchaînement de pressions et effleurages sur le crâne, la nuque et les épaules, avec des huiles ou brumes adaptées à votre cuir chevelu. Les gestes sont lents et enveloppants, dans le respect des traditions japonaises. La séance se termine par un moment de repos pour intégrer les bienfaits. La durée totale varie selon la formule choisie ; notre équipe vous indique les options au moment de la réservation.'
      },
      {
        title: 'Pour qui est fait le head spa japonais ?',
        content: 'Ce soin s\'adresse à toute personne souhaitant évacuer les tensions au niveau de la tête et du cou, ou simplement s\'offrir un instant de lâcher-prise. Il convient aux femmes et aux hommes, et peut être proposé en cadeau pour une occasion spéciale. Les personnes stressées, celles qui travaillent sur écran ou qui ont le cuir chevelu sensible trouvent dans ce rituel un vrai soulagement. Aucun effet médical n\'est revendiqué : il s\'agit d\'un soin bien-être et détente.'
      }
    ],
    faq: [
      { question: 'Comment réserver un head spa japonais à Hyères ?', answer: 'La réservation se fait en ligne sur notre outil ou par téléphone. Choisissez le créneau qui vous convient et validez votre rendez-vous. Vous recevez une confirmation par email ou SMS.' },
      { question: 'Combien de temps dure une séance de head spa ?', answer: 'Les formules varient entre 45 minutes et 1h15 selon l\'option choisie. La durée exacte est indiquée lors de la prise de rendez-vous.' },
      { question: 'Le head spa est-il adapté aux cheveux gras ou secs ?', answer: 'Oui. Les produits et le protocole sont adaptés à votre type de cuir chevelu pour un confort optimal pendant et après le soin.' },
      { question: 'Puis-je offrir un head spa en cadeau ?', answer: 'Absolument. Vous pouvez réserver pour une tierce personne ou acheter un bon cadeau valable pour un head spa à Hyères.' },
      { question: 'Faut-il se laver les cheveux avant le soin ?', answer: 'Non, ce n\'est pas obligatoire. Le soin peut être réalisé sur cheveux secs ou légèrement humides selon le protocole proposé.' }
    ],
    cta: { text: 'Réservez votre head spa japonais à Hyères en quelques clics.', button: 'Réserver en ligne' }
  },
  {
    id: 'head-spa-hyeres-prix-rituel-1h',
    query: 'head spa Hyères prix rituel 1h',
    city: 'Hyères',
    theme: 'head-spa',
    title: 'Head spa à Hyères : prix du rituel 1h',
    metaTitle: 'Head spa Hyères – Prix rituel 1h | Institut beauté',
    metaDescription: 'Découvrez les tarifs du head spa 1h à Hyères. Rituel crânien et cuir chevelu pour la détente. Transparence des prix et réservation en ligne.',
    intro: 'Vous cherchez le prix d\'un rituel head spa d\'une heure à Hyères ? Notre institut propose des formules claires et détaillées pour un soin crânien et cuir chevelu d\'environ 1h. Ce rituel associe massage de la tête, de la nuque et des épaules à des soins du cuir chevelu pour une détente profonde. Les tarifs sont communiqués à l\'avance et peuvent varier selon les options (huiles, durée légèrement supérieure). Nous privilégions la transparence pour que vous puissiez choisir en toute sérénité.',
    sections: [
      {
        title: 'Conseils avant votre rituel head spa 1h',
        content: 'Prévoyez d\'arriver quelques minutes en avance pour vous détendre en salle d\'attente. Évitez les repas lourds juste avant et les boissons excitantes. Une tenue confortable facilite la relaxation. Si vous avez des zones à éviter ou des préférences (pression plus douce ou plus tonique), signalez-le au début de la séance. Après le soin, prenez le temps de vous réhydrater et de ne pas enchaîner tout de suite avec une activité stressante.'
      },
      {
        title: 'Comment se déroule le rituel d\'une heure ?',
        content: 'Après un court échange, vous vous installez en position assise ou semi-allongée. Le praticien enchaîne des manœuvres sur le crâne, les tempes, la nuque et les épaules, en utilisant des produits adaptés à votre cuir chevelu. L\'ambiance est calme, avec une musique douce si vous le souhaitez. La séance d\'environ 1h se termine par un temps de repos. Vous repartez avec des conseils d\'entretien si besoin.'
      },
      {
        title: 'À qui s\'adresse le head spa 1h ?',
        content: 'Le rituel 1h convient à tous ceux qui veulent une vraie pause bien-être sans engagement long. Idéal pour les personnes stressées, les travailleurs sur écran ou simplement pour s\'accorder un moment de douceur. Hommes et femmes peuvent en profiter. Le soin est purement bien-être et ne se substitue à aucun traitement médical.'
      }
    ],
    faq: [
      { question: 'Quel est le prix du head spa 1h à Hyères ?', answer: 'Les tarifs du rituel head spa d\'environ 1h sont indiqués sur notre page réservation ou communiqués par téléphone. Ils peuvent varier selon les options choisies.' },
      { question: 'Le prix inclut-il les produits utilisés ?', answer: 'Oui, les produits appliqués pendant le soin (huiles, brumes, etc.) sont inclus dans le tarif du rituel.' },
      { question: 'Peut-on payer en plusieurs fois ?', answer: 'Les moyens de paiement acceptés (CB, espèces, etc.) sont indiqués à l\'accueil. Pour un règlement en plusieurs fois, renseignez-vous auprès de l\'institut.' },
      { question: 'Annulation ou report : quelle politique ?', answer: 'Toute annulation ou report doit être signalé dans les délais indiqués lors de la réservation pour éviter des frais.' },
      { question: 'Le head spa 1h suffit-il pour une première fois ?', answer: 'Oui, une séance d\'1h permet de découvrir le head spa et d\'en ressentir les bienfaits. Vous pourrez ensuite ajuster la fréquence selon vos envies.' }
    ],
    cta: { text: 'Consultez nos tarifs et réservez votre rituel head spa 1h à Hyères.', button: 'Voir les prix et réserver' }
  },
  {
    id: 'head-spa-duo-hyeres-idee-cadeau',
    query: 'head spa duo Hyères idée cadeau',
    city: 'Hyères',
    theme: 'head-spa',
    title: 'Head spa duo à Hyères : l\'idée cadeau bien-être',
    metaTitle: 'Head spa duo Hyères – Cadeau bien-être à deux',
    metaDescription: 'Offrez un head spa duo à Hyères. Idée cadeau originale pour un moment à deux : rituel crânien et détente. Réservation et bons cadeaux.',
    intro: 'Le head spa en duo à Hyères est une idée cadeau originale pour partager un moment de bien-être à deux. Que ce soit pour une fête, un anniversaire ou simplement pour faire plaisir, ce rituel crânien et cuir chevelu se vit à deux dans un cadre apaisant. Chaque personne bénéficie de sa propre séance, dans la même pièce ou en cabines voisines selon l\'organisation de l\'institut. C\'est l\'occasion de se retrouver et de déconnecter ensemble. Les formules duo sont conçues pour que les deux participants profitent pleinement du soin.',
    sections: [
      {
        title: 'Conseils pour offrir un head spa duo',
        content: 'Vérifiez les disponibilités à deux avant d\'acheter un bon cadeau et précisez bien qu\'il s\'agit d\'une formule duo. Choisissez une date qui convient aux deux personnes pour éviter les reports. Le bon cadeau peut être personnalisé avec un message. Pensez à indiquer si l\'un des deux a des contre-indications ou des préférences (pression, parfum). Enfin, réservez suffisamment à l\'avance pour les périodes de fêtes.'
      },
      {
        title: 'Déroulé d\'une séance head spa duo',
        content: 'Les deux participants sont accueillis et installés pour le rituel. Les séances se déroulent en parallèle, avec un praticien par personne ou un enchaînement adapté selon l\'institut. Chacun reçoit le même type de soin : massage crânien, travail du cuir chevelu, détente nuque et épaules. La durée est identique pour les deux. À la fin, un temps de repos peut être partagé avec une infusion ou une eau. L\'expérience reste individuelle tout en étant vécue à deux.'
      },
      {
        title: 'Pour qui offrir un head spa duo ?',
        content: 'Le head spa duo convient aux couples, amis, mère-fille ou collègues qui souhaitent s\'offrir une pause bien-être ensemble. C\'est un cadeau apprécié pour la Saint-Valentin, un anniversaire ou un départ en retraite. Aucune condition physique particulière n\'est requise ; le soin est adapté à chaque personne. Idéal pour celles et ceux qui aiment les cadeaux expérience plutôt que les objets.'
      }
    ],
    faq: [
      { question: 'Comment offrir un head spa duo à Hyères ?', answer: 'Vous pouvez acheter un bon cadeau ou réserver directement pour deux personnes. Précisez que c\'est pour un duo lors de la réservation.' },
      { question: 'Les deux personnes font-elles le soin en même temps ?', answer: 'Oui, les séances duo sont prévues pour que les deux participants vivent le soin en parallèle, dans le même créneau.' },
      { question: 'Le bon cadeau duo a-t-il une durée de validité ?', answer: 'La validité du bon cadeau est indiquée au moment de l\'achat. En général, il est utilisable pendant plusieurs mois.' },
      { question: 'Peut-on choisir des dates différentes pour chaque personne ?', answer: 'Non, le duo est prévu pour une même date et un même créneau. Les deux personnes doivent être présentes ensemble.' },
      { question: 'Que faire si l\'un des deux doit annuler ?', answer: 'En cas d\'annulation d\'une personne, contactez l\'institut pour reporter la séance ou adapter la formule selon la politique en vigueur.' }
    ],
    cta: { text: 'Offrez un head spa duo à Hyères : réservez ou commandez un bon cadeau.', button: 'Réserver ou offrir' }
  },
  {
    id: 'head-spa-carqueiranne-massage-cranien-anti-stress',
    query: 'head spa Carqueiranne massage crânien anti-stress',
    city: 'Carqueiranne',
    theme: 'head-spa',
    title: 'Head spa à Carqueiranne : massage crânien anti-stress',
    metaTitle: 'Head spa Carqueiranne – Massage crânien anti-stress',
    metaDescription: 'Head spa et massage crânien anti-stress à Carqueiranne. Détente de la tête, nuque et épaules. Institut bien-être près de Hyères. Réservation.',
    intro: 'À Carqueiranne, le head spa avec massage crânien anti-stress vous offre une vraie pause pour libérer les tensions de la tête et du cou. Ce soin combine des manœuvres douces et enveloppantes sur le crâne, les tempes, la nuque et les épaules, pour un effet apaisant durable. Idéal après une période de stress ou de travail intense, il ne prétend pas guérir mais contribue à une sensation de légèreté et de calme. Notre institut, à proximité de Hyères, vous reçoit dans un cadre propice à la détente.',
    sections: [
      {
        title: 'Conseils pour maximiser l\'effet anti-stress',
        content: 'Pour renforcer les bienfaits du massage crânien, évitez les écrans et les sollicitations intenses juste avant la séance. Arrivez à l\'heure pour ne pas vous précipiter. Après le soin, buvez de l\'eau et évitez si possible les sources de stress immédiates. Une respiration lente et consciente pendant le soin aide à lâcher prise. Si vous avez des zones très tendues, signalez-les au praticien pour un travail ciblé.'
      },
      {
        title: 'Déroulé du massage crânien head spa',
        content: 'La séance commence par un échange court sur vos attentes et d\'éventuelles contre-indications. Vous vous installez confortablement, puis le praticien enchaîne des pressions et des effleurages sur le crâne, la nuque et les épaules, avec des huiles ou brumes adaptées. Les gestes sont lents et réguliers pour favoriser la détente. La séance se termine par un moment de repos. La durée totale vous est indiquée au moment de la réservation.'
      },
      {
        title: 'Pour qui est ce head spa anti-stress ?',
        content: 'Ce soin s\'adresse à toute personne ressentant des tensions au niveau de la tête, de la nuque ou des épaules, souvent liées au stress ou au travail sur écran. Il convient aux adultes, femmes et hommes. Le head spa est un soin bien-être uniquement ; en cas de pathologie ou de douleur chronique, un avis médical reste recommandé.'
      }
    ],
    faq: [
      { question: 'Où se trouve l\'institut proposant le head spa à Carqueiranne ?', answer: 'L\'institut est situé à Carqueiranne, à proximité de Hyères. L\'adresse exacte et les accès sont communiqués lors de la réservation.' },
      { question: 'Le massage crânien est-il douloureux ?', answer: 'Non. Les pressions sont adaptées à votre sensibilité. Vous pouvez demander plus de douceur ou plus de tonus à tout moment.' },
      { question: 'Combien de séances pour sentir un effet anti-stress ?', answer: 'Une séance procure déjà une détente. Pour un effet plus durable, des rendez-vous réguliers peuvent être envisagés selon vos besoins.' },
      { question: 'Faut-il des cheveux propres pour le head spa ?', answer: 'Des cheveux propres ou du jour sont recommandés pour le confort, mais ce n\'est pas obligatoire. Le soin s\'adapte à votre situation.' },
      { question: 'Peut-on venir en couple ou à deux ?', answer: 'Renseignez-vous auprès de l\'institut pour les formules duo. Certains créneaux permettent des séances à deux sur réservation.' }
    ],
    cta: { text: 'Réservez votre head spa et massage crânien anti-stress à Carqueiranne.', button: 'Réserver' }
  },
  {
    id: 'head-spa-la-londe-les-maures-soin-cuir-chevelu',
    query: 'head spa La Londe-les-Maures soin cuir chevelu',
    city: 'La Londe-les-Maures',
    theme: 'head-spa',
    title: 'Head spa à La Londe-les-Maures : soin cuir chevelu',
    metaTitle: 'Head spa La Londe-les-Maures – Soin cuir chevelu',
    metaDescription: 'Head spa et soin du cuir chevelu à La Londe-les-Maures. Rituel crânien et hydratation du cuir chevelu. Institut bien-être près de Hyères.',
    intro: 'Le head spa à La Londe-les-Maures intègre un soin spécifique du cuir chevelu pour nourrir et apaiser cette zone souvent négligée. Le rituel associe massage crânien et application de produits adaptés (huiles, sérums ou brumes) pour un cuir chevelu plus confortable et des cheveux en meilleure forme. Idéal en cas de tiraillements, de sécheresse ou simplement pour une routine bien-être, ce soin ne revendique aucun effet médical mais participe au confort quotidien. L\'institut vous accueille dans un cadre calme.',
    sections: [
      {
        title: 'Conseils pour entretenir son cuir chevelu',
        content: 'Entre les séances, utilisez des shampooings doux adaptés à votre type de cuir chevelu et évitez les lavages trop agressifs. Limitez la chaleur excessive (sèche-cheveux très chaud) et les coiffures qui tirent. Une alimentation équilibrée et une bonne hydratation soutiennent la santé du cuir chevelu. Si vous avez des pellicules ou des irritations persistantes, un avis médical ou dermatologique peut compléter le soin bien-être.'
      },
      {
        title: 'Déroulé du soin cuir chevelu en head spa',
        content: 'Après un court échange, vous êtes installée confortablement. Le praticien procède à un massage du crâne et du cuir chevelu, puis applique les produits choisis selon votre besoin (hydratation, apaisement, etc.). Les gestes stimulent la microcirculation et favorisent la pénétration des actifs. La séance inclut aussi nuque et épaules pour une détente globale. Un temps de pause termine le soin. La durée et les produits utilisés vous sont précisés à la réservation.'
      },
      {
        title: 'Pour qui est ce soin cuir chevelu ?',
        content: 'Ce head spa convient à toute personne souhaitant prendre soin de son cuir chevelu et s\'offrir un moment de détente. Il est adapté aux cuirs chevelus normaux, secs ou sensibles. Les hommes et les femmes peuvent en bénéficier. Le soin reste cosmétique et bien-être ; il ne remplace pas un traitement prescrit par un médecin ou un dermatologue.'
      }
    ],
    faq: [
      { question: 'Quels produits sont utilisés pour le soin cuir chevelu ?', answer: 'Les produits (huiles, sérums, brumes) sont choisis selon votre type de cuir chevelu et vos attentes. Ils sont généralement sans sulfates agressifs.' },
      { question: 'Le soin laisse-t-il les cheveux gras ?', answer: 'Les formulations sont pensées pour être absorbées ou légères. Vous pouvez repartir sans lavage immédiat dans la plupart des cas.' },
      { question: 'Combien de temps dure la séance ?', answer: 'La durée varie selon la formule (souvent entre 45 min et 1h). Elle est indiquée au moment de la réservation.' },
      { question: 'À quelle fréquence faire un head spa cuir chevelu ?', answer: 'Une séance par mois ou tous les deux mois peut suffire pour l\'entretien. Vous pouvez adapter selon votre ressenti et votre budget.' },
      { question: 'L\'institut est-il facile d\'accès depuis Hyères ?', answer: 'La Londe-les-Maures est à proximité de Hyères. Les accès et le stationnement vous sont indiqués lors de la prise de rendez-vous.' }
    ],
    cta: { text: 'Réservez votre head spa et soin cuir chevelu à La Londe-les-Maures.', button: 'Réserver' }
  },
  {
    id: 'head-spa-la-crau-rituel-detente-nuque-epaules',
    query: 'head spa La Crau rituel détente nuque épaules',
    city: 'La Crau',
    theme: 'head-spa',
    title: 'Head spa à La Crau : rituel détente nuque et épaules',
    metaTitle: 'Head spa La Crau – Rituel détente nuque et épaules',
    metaDescription: 'Head spa à La Crau pour détendre nuque et épaules. Rituel crânien anti-tensions. Institut bien-être près de Hyères. Réservation en ligne.',
    intro: 'Le head spa à La Crau propose un rituel centré sur la détente de la nuque et des épaules, zones souvent crispées par le stress ou le travail. Ce soin associe massage crânien et travail ciblé sur le haut du dos pour une sensation de relâchement durable. L\'ambiance est calme et bienveillante, propice au lâcher-prise. Idéal pour les personnes qui accumulent des tensions au bureau ou dans la vie quotidienne, ce rituel ne prétend pas soigner mais accompagner votre bien-être.',
    sections: [
      { title: 'Conseils pour préserver nuque et épaules', content: 'Au quotidien, pensez à faire des pauses si vous travaillez sur écran et à ajuster la hauteur de votre bureau. Évitez les positions statiques prolongées et les courants d\'air sur la nuque. Avant le soin, arrivez détendue ; après, buvez de l\'eau et évitez les efforts intenses. Des étirements doux peuvent compléter les bienfaits du head spa.' },
      { title: 'Déroulé du rituel nuque et épaules', content: 'Vous vous installez confortablement, généralement assise ou semi-allongée. Le praticien enchaîne des manœuvres sur le crâne, puis se concentre sur la nuque et les épaules avec des pressions adaptées. Les produits utilisés (huiles ou crèmes) favorisent le glissement et la détente. La séance se termine par un court temps de repos. La durée vous est indiquée à la réservation.' },
      { title: 'Pour qui est ce rituel ?', content: 'Ce head spa convient à tous ceux qui ressentent des tensions dans le haut du corps, sans distinction d\'âge ou de genre. Il s\'agit d\'un soin bien-être uniquement. En cas de douleur aiguë ou de pathologie connue, un avis médical est recommandé avant la séance.' }
    ],
    faq: [
      { question: 'Où réserver un head spa à La Crau ?', answer: 'La réservation se fait en ligne ou par téléphone. L\'adresse de l\'institut à La Crau vous est communiquée lors de la confirmation.' },
      { question: 'Le soin est-il adapté aux cervicales sensibles ?', answer: 'Les pressions sont adaptées à votre sensibilité. Signalez toute fragilité au praticien pour un soin personnalisé et en toute sécurité.' },
      { question: 'Combien de temps dure le rituel ?', answer: 'La durée varie selon la formule (souvent 45 min à 1h). Elle est précisée au moment de la réservation.' },
      { question: 'Faut-il se déshabiller pour le head spa ?', answer: 'Non. Seuls le haut du corps peut être découvert pour le travail sur les épaules, ou vous restez habillée avec des vêtements amples.' },
      { question: 'Peut-on venir après le travail ?', answer: 'Oui, le head spa est idéal en fin de journée pour évacuer les tensions accumulées. Réservez un créneau qui vous convient.' }
    ],
    cta: { text: 'Réservez votre rituel head spa nuque et épaules à La Crau.', button: 'Réserver' }
  },
  {
    id: 'head-spa-le-pradet-soin-cuir-chevelu-pellicules',
    query: 'head spa Le Pradet soin cuir chevelu pellicules',
    city: 'Le Pradet',
    theme: 'head-spa',
    title: 'Head spa au Pradet : soin cuir chevelu et pellicules',
    metaTitle: 'Head spa Le Pradet – Soin cuir chevelu pellicules',
    metaDescription: 'Head spa au Pradet avec soin du cuir chevelu et accompagnement pellicules. Rituel apaisant. Institut bien-être près de Hyères. Réservation.',
    intro: 'Au Pradet, le head spa inclut un soin du cuir chevelu adapté aux personnes qui souffrent de pellicules ou d\'inconfort. Le rituel associe massage crânien et application de produits apaisants pour calmer les démangeaisons et adoucir le cuir chevelu. Ce soin est purement cosmétique et bien-être ; il ne remplace pas un traitement médical en cas de pathologie. Il peut toutefois compléter une routine capillaire pour un confort au quotidien.',
    sections: [
      { title: 'Conseils pour limiter les pellicules', content: 'Utilisez des shampooings doux et adaptés aux cuirs chevelus sensibles. Évitez l\'eau trop chaude et les lavages excessifs. Limitez les produits agressifs (colorations, lissages) en période de crise. Une alimentation équilibrée et une bonne hydratation aident. Le head spa avec soin cuir chevelu peut s\'inscrire dans une routine régulière pour un mieux-être.' },
      { title: 'Déroulé du soin anti-pellicules', content: 'Après un échange sur votre situation, vous êtes installée pour le head spa. Le praticien masse le crâne et le cuir chevelu, puis applique des produits apaisants et purifiants. Les gestes sont doux pour ne pas irriter. La séance inclut nuque et épaules. Un temps de repos termine le soin. Les produits utilisés vous sont expliqués.' },
      { title: 'Pour qui est ce soin ?', content: 'Ce head spa s\'adresse aux personnes qui ont un cuir chevelu à pellicules ou irrité et qui cherchent un moment de confort. Il ne traite pas les pathologies dermatologiques ; en cas de doute, consultez un médecin ou un dermatologue.' }
    ],
    faq: [
      { question: 'Le soin élimine-t-il les pellicules définitivement ?', answer: 'Le soin apporte un confort et peut réduire les désagréments. Les pellicules peuvent avoir plusieurs causes ; un suivi médical peut être nécessaire.' },
      { question: 'Quels produits sont utilisés ?', answer: 'Des produits apaisants et adaptés aux cuirs chevelus sensibles ou à tendance pelliculaire sont utilisés. Ils sont généralement sans sulfates agressifs.' },
      { question: 'Combien de séances sont recommandées ?', answer: 'Une séance procure déjà du soulagement. La fréquence peut être adaptée selon votre ressenti (par exemple une fois par mois).' },
      { question: 'Le soin est-il douloureux ?', answer: 'Non, les gestes sont doux. Si vous avez des zones très sensibles, signalez-les au praticien.' },
      { question: 'L\'institut est-il proche de Hyères ?', answer: 'Le Pradet est à proximité de Hyères. L\'adresse exacte et les accès sont indiqués lors de la réservation.' }
    ],
    cta: { text: 'Réservez votre head spa soin cuir chevelu au Pradet.', button: 'Réserver' }
  },
  {
    id: 'head-spa-toulon-rituel-japonais-premium',
    query: 'head spa Toulon rituel japonais premium',
    city: 'Toulon',
    theme: 'head-spa',
    title: 'Head spa à Toulon : rituel japonais premium',
    metaTitle: 'Head spa Toulon – Rituel japonais premium',
    metaDescription: 'Head spa rituel japonais premium à Toulon. Soin crânien et cuir chevelu inspiré du Japon. Institut bien-être. Réservation en ligne.',
    intro: 'À Toulon, le head spa premium s\'inspire des rituels japonais pour vous offrir une expérience haut de gamme. Ce soin allie techniques de massage crânien traditionnelles, soin du cuir chevelu et moment de pure détente dans un cadre soigné. Les produits sélectionnés et le protocole prolongé permettent une immersion totale. Idéal pour une occasion spéciale ou pour s\'offrir un moment d\'exception, ce rituel ne revendique aucun effet médical mais une expérience bien-être unique.',
    sections: [
      { title: 'Conseils pour vivre le rituel premium', content: 'Prévoyez du temps avant et après pour ne pas courir. Évitez les écrans et le stress juste avant. Laissez-vous guider par le praticien et respirez lentement. Après la séance, hydratez-vous et évitez les activités brutales. Le rituel premium est conçu pour une déconnexion totale.' },
      { title: 'Déroulé du rituel japonais premium', content: 'L\'accueil est personnalisé, puis vous entrez dans une ambiance apaisante. Le rituel enchaîne brossage du cuir chevelu, massage crânien, application de soins et travail sur nuque et épaules. La durée est plus longue qu\'un head spa classique pour une détente profonde. Un temps de repos avec thé ou infusion peut clore la séance.' },
      { title: 'Pour qui est le rituel premium ?', content: 'Ce soin s\'adresse à toute personne en quête d\'un moment d\'exception et prête à s\'offrir une parenthèse longue et qualitative. Hommes et femmes, tous âges, peuvent en profiter. C\'est un soin bien-être uniquement.' }
    ],
    faq: [
      { question: 'Quelle est la différence avec un head spa classique ?', answer: 'Le rituel premium est plus long et inclut des étapes supplémentaires (produits, protocole, cadre) pour une expérience plus complète.' },
      { question: 'Combien de temps dure le rituel premium ?', answer: 'La durée est indiquée sur la fiche du soin, souvent entre 1h et 1h30. Elle vous est confirmée à la réservation.' },
      { question: 'Quels produits sont utilisés ?', answer: 'Des soins de qualité, souvent d\'inspiration japonaise ou à base d\'ingrédients naturels, sont utilisés pour le crâne et le cuir chevelu.' },
      { question: 'Peut-on offrir ce rituel en cadeau ?', answer: 'Oui, le rituel premium est une idée cadeau appréciée. Des bons cadeaux sont disponibles sur demande ou en ligne.' },
      { question: 'Où se trouve l\'institut à Toulon ?', answer: 'L\'adresse exacte à Toulon vous est communiquée lors de la réservation. Le lieu est facilement accessible.' }
    ],
    cta: { text: 'Réservez votre rituel head spa japonais premium à Toulon.', button: 'Réserver' }
  },
  {
    id: 'head-spa-pierrefeu-du-var-soin-cuir-chevelu-hydratant',
    query: 'head spa Pierrefeu-du-Var soin cuir chevelu hydratant',
    city: 'Pierrefeu-du-Var',
    theme: 'head-spa',
    title: 'Head spa à Pierrefeu-du-Var : soin cuir chevelu hydratant',
    metaTitle: 'Head spa Pierrefeu-du-Var – Soin cuir chevelu hydratant',
    metaDescription: 'Head spa à Pierrefeu-du-Var avec soin cuir chevelu hydratant. Rituel crânien et nutrition du cuir chevelu. Institut bien-être. Réservation.',
    intro: 'À Pierrefeu-du-Var, le head spa propose un soin cuir chevelu hydratant pour nourrir et apaiser les cuirs chevelus secs ou déshydratés. Le rituel associe massage crânien et application de produits riches pour redonner confort et souplesse. Idéal après l\'été, le chauffage ou les agressions du quotidien, ce soin participe au bien-être capillaire sans prétention médicale. L\'institut vous accueille dans un cadre calme et nature.',
    sections: [
      { title: 'Conseils pour un cuir chevelu hydraté', content: 'Utilisez des shampooings et après-shampooings adaptés aux cuirs chevelus secs. Évitez l\'eau trop chaude et les brushings agressifs. Une à deux séances head spa hydratant par mois peuvent compléter votre routine. Buvez suffisamment et protégez vos cheveux du soleil et du vent si besoin.' },
      { title: 'Déroulé du soin hydratant', content: 'Vous êtes installée confortablement. Le praticien effectue un massage du crâne puis applique des soins hydratants sur le cuir chevelu. Les gestes favorisent la pénétration des actifs. Nuque et épaules sont aussi travaillées. La séance se termine par un temps de repos. La durée vous est indiquée à la réservation.' },
      { title: 'Pour qui est ce soin hydratant ?', content: 'Ce head spa convient aux personnes dont le cuir chevelu est sec, tiraille ou déshydraté. Hommes et femmes peuvent en bénéficier. Le soin est cosmétique et bien-être uniquement.' }
    ],
    faq: [
      { question: 'Les cheveux restent-ils gras après le soin ?', answer: 'Les formulations hydratantes sont choisies pour être absorbées. Vous pouvez généralement repartir sans lavage immédiat.' },
      { question: 'À quelle fréquence faire le soin ?', answer: 'Une séance par mois ou tous les deux mois est souvent suffisante. Vous pouvez adapter selon votre ressenti.' },
      { question: 'Le soin convient-il aux cheveux colorés ?', answer: 'Oui, les produits sont en général compatibles avec les colorations. Précisez votre situation au praticien pour un soin adapté.' },
      { question: 'Où réserver à Pierrefeu-du-Var ?', answer: 'La réservation se fait en ligne ou par téléphone. L\'adresse de l\'institut vous est communiquée à la confirmation.' },
      { question: 'Combien de temps dure la séance ?', answer: 'La durée varie selon la formule (souvent 45 min à 1h). Elle est précisée au moment de la réservation.' }
    ],
    cta: { text: 'Réservez votre head spa soin cuir chevelu hydratant à Pierrefeu-du-Var.', button: 'Réserver' }
  },
  {
    id: 'head-spa-la-valette-du-var-massage-cranien-relaxation',
    query: 'head spa La Valette-du-Var massage crânien relaxation',
    city: 'La Valette-du-Var',
    theme: 'head-spa',
    title: 'Head spa à La Valette-du-Var : massage crânien relaxation',
    metaTitle: 'Head spa La Valette-du-Var – Massage crânien relaxation',
    metaDescription: 'Head spa à La Valette-du-Var avec massage crânien et relaxation. Détente de la tête et du cou. Institut bien-être près de Toulon. Réservation.',
    intro: 'À La Valette-du-Var, le head spa met l\'accent sur le massage crânien et la relaxation. Ce soin vous permet de vous recentrer et de libérer les tensions de la tête et de la nuque dans un cadre apaisant. Les gestes sont lents et enveloppants pour une détente profonde. Idéal après une semaine chargée ou pour retrouver le calme, ce rituel ne prétend pas soigner mais accompagner votre bien-être au quotidien.',
    sections: [
      { title: 'Conseils pour une relaxation optimale', content: 'Arrivez à l\'heure pour ne pas vous stresser. Éteignez ou mettez en silencieux votre téléphone. Pendant le soin, respirez lentement et laissez-vous aller. Après la séance, évitez les sollicitations intenses et hydratez-vous. Une petite marche douce peut prolonger la détente.' },
      { title: 'Déroulé du massage crânien', content: 'Après un court échange, vous vous installez. Le praticien travaille le crâne, les tempes, la nuque et les épaules avec des pressions adaptées. Les produits utilisés (huiles ou brumes) favorisent la détente. La séance se termine par un moment de repos. La durée vous est indiquée à la réservation.' },
      { title: 'Pour qui est ce head spa ?', content: 'Ce soin s\'adresse à toute personne en quête de relaxation et de détente au niveau de la tête et du cou. Hommes et femmes, tous âges. Soin bien-être uniquement.' }
    ],
    faq: [
      { question: 'Le massage crânien fait-il mal ?', answer: 'Non. Les pressions sont douces à modérées et adaptées à votre sensibilité. Vous pouvez demander plus de douceur à tout moment.' },
      { question: 'Combien de temps dure la séance ?', answer: 'La durée varie (souvent 45 min à 1h). Elle est indiquée au moment de la réservation.' },
      { question: 'Peut-on s\'endormir pendant le soin ?', answer: 'Oui, beaucoup de personnes se laissent aller jusqu\'à un état de semi-sommeil. C\'est le signe d\'une bonne détente.' },
      { question: 'L\'institut est-il proche de Toulon ?', answer: 'La Valette-du-Var est à proximité de Toulon. L\'adresse et les accès vous sont communiqués à la réservation.' },
      { question: 'Faut-il réserver à l\'avance ?', answer: 'Il est conseillé de réserver pour garantir votre créneau, surtout en période de forte demande.' }
    ],
    cta: { text: 'Réservez votre head spa massage crânien à La Valette-du-Var.', button: 'Réserver' }
  },
  {
    id: 'massage-relaxant-hyeres-institut-de-beaute',
    query: 'massage relaxant Hyères institut de beauté',
    city: 'Hyères',
    theme: 'massage',
    title: 'Massage relaxant à Hyères en institut de beauté',
    metaTitle: 'Massage relaxant Hyères – Institut de beauté',
    metaDescription: 'Massage relaxant à Hyères dans un institut de beauté. Détente du corps, huiles et ambiance apaisante. Réservation en ligne. Bien-être Hyères.',
    intro: 'Le massage relaxant à Hyères en institut de beauté vous offre une parenthèse de détente dans un cadre soigné. Ce soin utilise des huiles ou crèmes pour des manœuvres enveloppantes sur le dos, les jambes et les bras, selon la formule choisie. L\'objectif est le lâcher-prise et la récupération, sans prétention thérapeutique. Notre institut vous accueille pour une séance adaptée à vos besoins, avec réservation simple en ligne.',
    sections: [
      { title: 'Conseils pour un massage relaxant réussi', content: 'Arrivez à l\'heure et prévoyez un moment de calme après la séance. Signalez au praticien vos zones sensibles ou contre-indications. Une tenue confortable est recommandée ; vous serez couverte pendant le soin. Évitez les repas lourds juste avant. Après le massage, buvez de l\'eau pour favoriser l\'élimination et prolonger la détente.' },
      { title: 'Déroulé d\'une séance de massage relaxant', content: 'Après un court échange, vous vous installez sur la table de massage. Le praticien applique des huiles ou crèmes et enchaîne des manœuvres fluides sur tout le corps ou les zones choisies. La pression est adaptée à votre demande (douce ou plus tonique). La séance se termine par un temps de repos. La durée (souvent 1h ou 1h30) vous est indiquée à la réservation.' },
      { title: 'Pour qui est le massage relaxant ?', content: 'Ce massage s\'adresse à toute personne en quête de détente, sans distinction d\'âge ou de genre. Il convient particulièrement après une période de stress ou de fatigue. En cas de pathologie, grossesse ou douleur aiguë, un avis médical est recommandé avant la séance.' }
    ],
    faq: [
      { question: 'Faut-il se déshabiller pour le massage ?', answer: 'Vous restez en sous-vêtements ou en tenue confortable. Vous êtes couverte par un drap ou une serviette pendant tout le soin.' },
      { question: 'Combien de temps dure la séance ?', answer: 'Les formules varient souvent entre 45 min et 1h30. La durée exacte est indiquée lors de la réservation.' },
      { question: 'Quelles huiles sont utilisées ?', answer: 'Des huiles ou crèmes neutres ou parfumées sont utilisées. Vous pouvez signaler des allergies ou préférences au début.' },
      { question: 'Le massage est-il mixte ?', answer: 'Hommes et femmes peuvent réserver. Le soin est réalisé par un professionnel dans le respect de l\'intimité.' },
      { question: 'Comment réserver à Hyères ?', answer: 'La réservation se fait en ligne ou par téléphone. Choisissez votre créneau et validez ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre massage relaxant à Hyères en institut de beauté.', button: 'Réserver' }
  },
  {
    id: 'massage-californien-hyeres-1h-avis',
    query: 'massage californien Hyères 1h avis',
    city: 'Hyères',
    theme: 'massage',
    title: 'Massage californien 1h à Hyères : avis et réservation',
    metaTitle: 'Massage californien Hyères 1h – Avis et réservation',
    metaDescription: 'Massage californien 1h à Hyères. Technique enveloppante et détente. Avis clients et réservation en ligne. Institut bien-être Hyères.',
    intro: 'Le massage californien d\'une heure à Hyères est une technique de massage corps entier aux gestes longs et enveloppants. Il favorise la détente musculaire et le lâcher-prise. Les avis de nos clientes soulignent souvent la qualité de l\'accueil et la sensation de bien-être durable. Ce soin ne revendique aucun effet médical ; il s\'inscrit dans une démarche bien-être. Vous pouvez réserver en ligne en choisissant un créneau d\'1h.',
    sections: [
      { title: 'Conseils avant et après votre massage californien', content: 'Prévoyez d\'arriver un peu en avance pour vous détendre. Évitez les repas copieux et l\'alcool avant la séance. Après le massage, hydratez-vous et évitez les efforts intenses. Les avis recommandent de ne pas enchaîner tout de suite avec des tâches stressantes pour prolonger les bienfaits.' },
      { title: 'Déroulé du massage californien 1h', content: 'Vous vous installez sur la table, recouverte d\'un drap. Le praticien utilise des huiles pour des manœuvres fluides et longues sur le dos, les jambes, les bras et si besoin le ventre. La pression est généralement douce à moyenne. L\'ambiance est calme. La séance d\'1h se termine par un court temps de repos.' },
      { title: 'Pour qui est le massage californien ?', content: 'Ce massage convient à tous ceux qui recherchent une détente profonde sans pression forte. Idéal pour une première expérience de massage en institut. Hommes et femmes, tous âges. Soin bien-être uniquement.' }
    ],
    faq: [
      { question: 'Quelle différence entre massage californien et suédois ?', answer: 'Le californien privilégie des gestes longs et enveloppants ; le suédois est souvent plus tonique et structuré. Les deux visent la détente.' },
      { question: 'Les avis sont-ils disponibles en ligne ?', answer: 'Vous pouvez consulter les avis sur notre site ou sur les plateformes de réservation. Ils reflètent l\'expérience de nos clientes.' },
      { question: 'Puis-je choisir la pression du massage ?', answer: 'Oui, indiquez au praticien si vous préférez une pression plus douce ou plus appuyée. Il s\'adapte à votre ressenti.' },
      { question: 'Le massage 1h inclut-il tout le corps ?', answer: 'Oui, en 1h le praticien peut traiter l\'ensemble du corps (dos, jambes, bras, épaules) avec des gestes fluides.' },
      { question: 'Comment laisser un avis après la séance ?', answer: 'Vous pouvez recevoir un lien par email pour laisser un avis, ou le faire directement sur la plateforme de réservation.' }
    ],
    cta: { text: 'Réservez votre massage californien 1h à Hyères et consultez les avis.', button: 'Réserver' }
  },
  {
    id: 'massage-aux-huiles-hyeres-detente-profonde',
    query: 'massage aux huiles Hyères détente profonde',
    city: 'Hyères',
    theme: 'massage',
    title: 'Massage aux huiles à Hyères : détente profonde',
    metaTitle: 'Massage aux huiles Hyères – Détente profonde',
    metaDescription: 'Massage aux huiles à Hyères pour une détente profonde. Soin corps en institut. Huiles naturelles et gestes enveloppants. Réservation Hyères.',
    intro: 'Le massage aux huiles à Hyères est conçu pour une détente profonde du corps et de l\'esprit. Des huiles végétales ou des mélanges adaptés sont utilisés pour faciliter les manœuvres et nourrir la peau. Les gestes sont fluides et enveloppants, sur le dos, les jambes et les membres. Ce soin ne prétend pas soigner mais offrir une vraie pause bien-être. L\'institut vous accueille dans une ambiance apaisante.',
    sections: [
      { title: 'Conseils pour une détente maximale', content: 'Signalez toute allergie aux huiles ou aux parfums avant le soin. Arrivez détendue et évitez les écrans juste avant. Après le massage, prenez le temps de vous réhydrater et de ne pas enchaîner avec une activité stressante. Les huiles utilisées vous sont présentées en début de séance.' },
      { title: 'Déroulé du massage aux huiles', content: 'Vous vous installez sur la table, recouverte. Le praticien applique les huiles et enchaîne des manœuvres sur l\'ensemble du corps ou les zones choisies. La durée varie (souvent 1h à 1h30). L\'ambiance est tamisée et calme. La séance se termine par un moment de repos pour intégrer les bienfaits.' },
      { title: 'Pour qui est ce massage ?', content: 'Ce massage s\'adresse à toute personne en quête de détente profonde. Il convient aux femmes et aux hommes. En cas de grossesse ou pathologie, un avis médical est recommandé.' }
    ],
    faq: [
      { question: 'Quelles huiles sont utilisées ?', answer: 'Des huiles végétales (amande douce, jojoba, etc.) ou des mélanges adaptés. Vous pouvez demander des huiles neutres en cas d\'allergie.' },
      { question: 'Les huiles tachent-elles les vêtements ?', answer: 'Les huiles sont absorbées ou essuyées en fin de séance. Il est rare qu\'elles tachent ; un temps de repos permet une meilleure pénétration.' },
      { question: 'Combien de temps dure la séance ?', answer: 'La durée est indiquée à la réservation, souvent entre 1h et 1h30 pour une détente complète.' },
      { question: 'Peut-on choisir le parfum des huiles ?', answer: 'Oui, selon les options de l\'institut. Vous pouvez demander des huiles peu ou pas parfumées.' },
      { question: 'Le massage est-il bon pour la peau ?', answer: 'Les huiles nourrissent et adoucissent la peau. Le soin reste un massage bien-être, pas un traitement dermatologique.' }
    ],
    cta: { text: 'Réservez votre massage aux huiles et détente profonde à Hyères.', button: 'Réserver' }
  },
  {
    id: 'massage-dos-nuque-hyeres-tensions',
    query: 'massage dos nuque Hyères tensions',
    city: 'Hyères',
    theme: 'massage',
    title: 'Massage dos et nuque à Hyères contre les tensions',
    metaTitle: 'Massage dos nuque Hyères – Soulager les tensions',
    metaDescription: 'Massage dos et nuque à Hyères pour soulager les tensions. Institut de beauté. Détente du haut du corps. Réservation en ligne.',
    intro: 'Le massage dos et nuque à Hyères cible les zones souvent crispées par le stress ou le travail. Ce soin associe des manœuvres sur le dos, les épaules et la nuque pour une sensation de relâchement. Il ne prétend pas guérir mais accompagner votre bien-être et réduire la sensation de tension. Notre institut vous reçoit pour une séance adaptée à votre sensibilité.',
    sections: [
      { title: 'Conseils pour limiter les tensions au quotidien', content: 'Faites des pauses si vous travaillez sur écran. Ajustez votre poste de travail et évitez les courants d\'air sur la nuque. Des étirements doux peuvent compléter le massage. Après la séance, hydratez-vous et évitez les positions statiques prolongées.' },
      { title: 'Déroulé du massage dos et nuque', content: 'Vous vous installez sur la table, le dos découvert et couvert d\'un drap. Le praticien travaille les muscles du dos, des épaules et de la nuque avec des pressions adaptées. La durée est souvent de 30 à 45 min pour une séance ciblée, ou plus si combinée à d\'autres zones.' },
      { title: 'Pour qui est ce massage ?', content: 'Ce soin convient à toute personne ressentant des tensions dans le haut du corps. En cas de douleur aiguë ou pathologie, un avis médical est recommandé avant la séance.' }
    ],
    faq: [
      { question: 'Le massage dos nuque est-il douloureux ?', answer: 'Les pressions sont adaptées à votre sensibilité. Vous pouvez demander plus de douceur ou plus d\'intensité à tout moment.' },
      { question: 'Combien de séances pour sentir un mieux ?', answer: 'Une séance apporte déjà du soulagement. Pour un effet durable, des séances régulières peuvent être envisagées.' },
      { question: 'Faut-il se déshabiller ?', answer: 'Seul le haut du corps est découvert (dos, nuque, épaules). Vous restez en sous-vêtements et êtes couverte par un drap.' },
      { question: 'Peut-on venir avec un torticolis ?', answer: 'En cas de torticolis ou douleur aiguë, consultez d\'abord un médecin. Le massage bien-être ne remplace pas un avis médical.' },
      { question: 'Comment réserver à Hyères ?', answer: 'La réservation se fait en ligne ou par téléphone. Choisissez votre créneau et validez ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre massage dos et nuque à Hyères.', button: 'Réserver' }
  },
  {
    id: 'massage-femme-enceinte-hyeres-institut',
    query: 'massage femme enceinte Hyères institut',
    city: 'Hyères',
    theme: 'massage',
    title: 'Massage femme enceinte à Hyères en institut',
    metaTitle: 'Massage femme enceinte Hyères – Institut adapté',
    metaDescription: 'Massage pour femme enceinte à Hyères en institut. Soin adapté à la grossesse, détente en sécurité. Réservation. Institut bien-être Hyères.',
    intro: 'Le massage pour femme enceinte à Hyères est proposé dans notre institut avec des protocoles adaptés à la grossesse. Les positions (côté, assise ou avec coussins) et les manœuvres sont choisies pour votre confort et votre sécurité. Ce soin vise la détente et le bien-être, sans prétention médicale. Il est recommandé d\'avoir l\'accord de votre médecin ou sage-femme avant de réserver, surtout au premier trimestre.',
    sections: [
      { title: 'Conseils pour une séance en toute sérénité', content: 'Demandez l\'avis de votre médecin ou sage-femme avant de réserver. Signalez votre terme et d\'éventuelles contre-indications. Prévoyez une tenue confortable et arrivez à l\'heure. Après le massage, hydratez-vous. Évitez les séances en cas de fièvre, contractions ou saignements.' },
      { title: 'Déroulé du massage femme enceinte', content: 'Vous êtes installée en position latérale ou semi-assise avec des coussins. Le praticien travaille le dos, les jambes et les pieds en évitant certaines zones (ventre, points d\'acupressure contre-indiqués). Les huiles utilisées sont adaptées à la grossesse. La durée est souvent de 45 min à 1h.' },
      { title: 'Pour qui est ce massage ?', content: 'Ce soin s\'adresse aux femmes enceintes à partir du deuxième trimestre en général, sauf contre-indication médicale. Chaque situation est évaluée individuellement.' }
    ],
    faq: [
      { question: 'À partir de quel mois peut-on faire le massage ?', answer: 'Souvent à partir du 2e trimestre, après avis médical. Certains instituts proposent des protocoles dès le 1er trimestre ; renseignez-vous.' },
      { question: 'Le massage est-il dangereux pour le bébé ?', answer: 'Non, les protocoles sont adaptés et évitent les zones et techniques contre-indiquées. L\'accord du médecin ou de la sage-femme est toutefois recommandé.' },
      { question: 'Quelle position pendant le massage ?', answer: 'Vous êtes en position latérale ou semi-assise, avec des coussins pour le confort. Jamais sur le ventre.' },
      { question: 'Les huiles sont-elles sans risque ?', answer: 'Des huiles adaptées à la grossesse sont utilisées. Signalez toute allergie ou produit à éviter.' },
      { question: 'Comment réserver ?', answer: 'Indiquez que vous êtes enceinte lors de la réservation pour que l\'institut prépare la séance adaptée.' }
    ],
    cta: { text: 'Réservez votre massage femme enceinte à Hyères en institut.', button: 'Réserver' }
  },
  {
    id: 'massage-duo-carqueiranne-institut-bien-etre',
    query: 'massage duo Carqueiranne institut bien-être',
    city: 'Carqueiranne',
    theme: 'massage',
    title: 'Massage duo à Carqueiranne en institut bien-être',
    metaTitle: 'Massage duo Carqueiranne – Institut bien-être',
    metaDescription: 'Massage en duo à Carqueiranne en institut bien-être. Séance à deux, détente partagée. Réservation. Proche Hyères.',
    intro: 'Le massage en duo à Carqueiranne vous permet de vivre une séance de bien-être à deux dans un institut dédié. Chaque personne dispose de son propre praticien et de sa table, dans la même pièce ou en cabines voisines. C\'est l\'occasion de partager un moment de détente en couple ou entre amis. Les formules (relaxant, californien, etc.) et durées sont adaptées au duo. Réservation en ligne possible.',
    sections: [
      { title: 'Conseils pour une séance duo réussie', content: 'Réservez pour deux en précisant que c\'est un massage duo. Choisissez une formule et une durée qui conviennent aux deux. Arrivez ensemble à l\'heure. Signalez toute contre-indication ou préférence (pression, zones à éviter) pour chaque personne.' },
      { title: 'Déroulé du massage duo', content: 'Les deux participants sont accueillis et installés sur deux tables. Les séances se déroulent en parallèle, avec un praticien par personne. Le type de massage et la durée sont identiques pour les deux. À la fin, un temps de repos peut être partagé avec une boisson. L\'expérience reste individuelle tout en étant vécue à deux.' },
      { title: 'Pour qui est le massage duo ?', content: 'Le massage duo convient aux couples, amis ou proches qui souhaitent s\'offrir une pause bien-être ensemble. Hommes et femmes, tous âges. Idée cadeau appréciée pour un anniversaire ou une fête.' }
    ],
    faq: [
      { question: 'Les deux massages ont-ils lieu en même temps ?', answer: 'Oui, les deux séances se déroulent en parallèle dans le même créneau horaire.' },
      { question: 'Peut-on choisir des massages différents ?', answer: 'Selon l\'institut, vous pouvez parfois choisir des formules différentes (ex. relaxant pour l\'un, pierres chaudes pour l\'autre). Renseignez-vous à la réservation.' },
      { question: 'Le duo coûte-t-il plus cher ?', answer: 'Le tarif duo est souvent indiqué comme tel (deux personnes, un créneau). Consultez les tarifs sur la page réservation.' },
      { question: 'Où se trouve l\'institut à Carqueiranne ?', answer: 'L\'adresse exacte vous est communiquée lors de la réservation. Carqueiranne est à proximité de Hyères.' },
      { question: 'Peut-on offrir un massage duo en cadeau ?', answer: 'Oui, les bons cadeaux duo sont disponibles. Commandez ou réservez pour deux et précisez que c\'est un cadeau si besoin.' }
    ],
    cta: { text: 'Réservez votre massage duo à Carqueiranne en institut bien-être.', button: 'Réserver' }
  },
  {
    id: 'massage-relaxant-la-crau-reservation-rapide',
    query: 'massage relaxant La Crau réservation rapide',
    city: 'La Crau',
    theme: 'massage',
    title: 'Massage relaxant à La Crau : réservation rapide',
    metaTitle: 'Massage relaxant La Crau – Réservation rapide',
    metaDescription: 'Massage relaxant à La Crau avec réservation rapide. Institut bien-être. Détente et disponibilités. Proche Hyères.',
    intro: 'Le massage relaxant à La Crau est accessible via une réservation rapide en ligne ou par téléphone. Notre institut propose des créneaux réguliers pour une détente du corps et de l\'esprit. Le soin utilise des huiles et des manœuvres enveloppantes pour un lâcher-prise durable. Idéal pour décompresser après une semaine chargée, sans prise de tête : vous choisissez votre créneau et vous validez en quelques clics.',
    sections: [
      { title: 'Conseils pour réserver rapidement', content: 'Consultez les disponibilités en ligne pour voir les créneaux du jour ou de la semaine. En cas d\'urgence bien-être, appelez pour un dernier créneau. Précisez la durée souhaitée (45 min, 1h, 1h30) pour une réservation adaptée. Annulation ou report : respectez les délais indiqués pour libérer le créneau.' },
      { title: 'Déroulé du massage relaxant', content: 'Vous êtes accueillie et installée sur la table. Le praticien enchaîne des manœuvres fluides sur tout le corps ou les zones demandées. La séance se déroule dans le calme. À la fin, un temps de repos est prévu. La durée correspond à ce que vous avez réservé.' },
      { title: 'Pour qui est ce massage ?', content: 'Ce massage s\'adresse à toute personne en quête de détente rapide et accessible. Réservation simple, séance adaptée à tous. Soin bien-être uniquement.' }
    ],
    faq: [
      { question: 'Comment réserver rapidement à La Crau ?', answer: 'Utilisez la réservation en ligne pour voir les créneaux disponibles et réserver en quelques clics, ou appelez l\'institut.' },
      { question: 'Y a-t-il des créneaux le jour même ?', answer: 'Selon l\'affluence, des créneaux peuvent être disponibles le jour même. Consultez les disponibilités en ligne ou par téléphone.' },
      { question: 'Puis-je annuler ou reporter ?', answer: 'Oui, dans les délais indiqués lors de la réservation. Une annulation tardive peut entraîner des frais selon la politique de l\'institut.' },
      { question: 'La Crau est-il proche de Hyères ?', answer: 'Oui, La Crau est à proximité de Hyères. L\'adresse exacte vous est communiquée à la réservation.' },
      { question: 'Combien de temps dure le massage ?', answer: 'Les durées varient (souvent 45 min à 1h30). Choisissez la formule qui vous convient lors de la réservation.' }
    ],
    cta: { text: 'Réservez rapidement votre massage relaxant à La Crau.', button: 'Réserver' }
  },
  {
    id: 'massage-pierres-chaudes-le-pradet-institut',
    query: 'massage pierres chaudes Le Pradet institut',
    city: 'Le Pradet',
    theme: 'massage',
    title: 'Massage pierres chaudes au Pradet en institut',
    metaTitle: 'Massage pierres chaudes Le Pradet – Institut',
    metaDescription: 'Massage aux pierres chaudes au Pradet en institut. Détente profonde et chaleur. Bien-être. Réservation. Proche Hyères.',
    intro: 'Le massage aux pierres chaudes au Pradet est proposé en institut pour une détente profonde. Des pierres volcaniques chauffées sont posées sur le corps et utilisées pour des manœuvres enveloppantes. La chaleur diffuse favorise la décontraction musculaire et une sensation de bien-être. Ce soin ne prétend pas soigner mais offrir une expérience relaxante unique. L\'institut vous accueille dans un cadre apaisant.',
    sections: [
      { title: 'Conseils pour profiter du massage pierres chaudes', content: 'Signalez si vous avez des problèmes de circulation ou une sensibilité à la chaleur. Arrivez à l\'heure pour ne pas vous précipiter. Après la séance, hydratez-vous. Le soin est déconseillé en cas de fièvre, plaie ouverte ou grossesse sans avis médical.' },
      { title: 'Déroulé du massage aux pierres chaudes', content: 'Vous vous installez sur la table. Les pierres sont chauffées puis posées sur le dos, le ventre ou les jambes, et utilisées pour des manœuvres de massage. La température est contrôlée pour votre confort. La séance dure souvent 1h à 1h15. Un temps de repos termine le soin.' },
      { title: 'Pour qui est ce massage ?', content: 'Ce massage convient à toute personne en quête de détente et de chaleur bienfaisante. En cas de pathologie (cardiovasculaire, grossesse, etc.), un avis médical est recommandé.' }
    ],
    faq: [
      { question: 'Les pierres sont-elles vraiment chaudes ?', answer: 'Oui, elles sont chauffées à une température agréable et contrôlée (souvent autour de 50 °C). La sensation est enveloppante, pas brûlante.' },
      { question: 'Le massage est-il adapté en été ?', answer: 'Oui, la salle peut être climatisée. La chaleur des pierres reste localisée et agréable.' },
      { question: 'Combien de temps dure la séance ?', answer: 'La durée est souvent de 1h à 1h15. Elle est indiquée lors de la réservation.' },
      { question: 'Où réserver au Pradet ?', answer: 'La réservation se fait en ligne ou par téléphone. L\'adresse de l\'institut au Pradet vous est communiquée à la confirmation.' },
      { question: 'Faut-il une tenue particulière ?', answer: 'Vous restez en sous-vêtements et êtes couverte par un drap. Aucune tenue spéciale n\'est requise.' }
    ],
    cta: { text: 'Réservez votre massage pierres chaudes au Pradet en institut.', button: 'Réserver' }
  },
  {
    id: 'massage-drainage-corps-toulon-institut',
    query: 'massage drainage corps Toulon institut',
    city: 'Toulon',
    theme: 'massage',
    title: 'Massage drainage du corps à Toulon en institut',
    metaTitle: 'Massage drainage corps Toulon – Institut',
    metaDescription: 'Massage drainage du corps à Toulon en institut. Stimulation circulatoire et sensation de légèreté. Bien-être. Réservation.',
    intro: 'Le massage drainage du corps à Toulon en institut vise à stimuler la circulation et à procurer une sensation de légèreté. Les manœuvres sont spécifiques (effleurages directionnels, pressions douces) pour favoriser le retour circulatoire. Ce soin ne prétend pas soigner les pathologies veineuses ou lymphatiques ; il s\'inscrit dans une démarche bien-être. Idéal après une période de sédentarité ou pour se sentir plus légère.',
    sections: [
      { title: 'Conseils pour optimiser les effets du drainage', content: 'Hydratez-vous bien avant et après la séance. Évitez les repas lourds juste avant. Après le massage, une marche douce peut compléter les bienfaits. En cas de pathologie circulatoire ou lymphatique, un avis médical est indispensable avant de réserver.' },
      { title: 'Déroulé du massage drainage corps', content: 'Vous vous installez sur la table. Le praticien effectue des manœuvres de drainage sur les jambes, le ventre et parfois les bras, selon le protocole. Les gestes sont fluides et directionnels. La durée est souvent de 45 min à 1h. Un temps de repos peut terminer la séance.' },
      { title: 'Pour qui est ce massage ?', content: 'Ce soin s\'adresse aux personnes qui recherchent une sensation de légèreté et un soutien circulatoire bien-être. Il ne remplace pas un drainage lymphatique médical ou un avis phlébologique.' }
    ],
    faq: [
      { question: 'Le drainage institut remplace-t-il le drainage médical ?', answer: 'Non. Le massage drainage en institut est un soin bien-être. En cas de pathologie, le drainage doit être prescrit et réalisé par un professionnel de santé.' },
      { question: 'Combien de séances pour sentir un effet ?', answer: 'Une séance apporte déjà une sensation de légèreté. Des séances régulières peuvent renforcer le confort.' },
      { question: 'Y a-t-il des contre-indications ?', answer: 'Oui : infections, fièvre, thrombose, cancer en cours de traitement, etc. En cas de doute, consultez votre médecin.' },
      { question: 'La séance est-elle douloureuse ?', answer: 'Non, les manœuvres sont douces et progressives. Vous pouvez signaler toute sensibilité au praticien.' },
      { question: 'Où réserver à Toulon ?', answer: 'La réservation se fait en ligne ou par téléphone. L\'adresse de l\'institut à Toulon vous est communiquée à la confirmation.' }
    ],
    cta: { text: 'Réservez votre massage drainage du corps à Toulon en institut.', button: 'Réserver' }
  },
  {
    id: 'massage-detente-pierrefeu-du-var-institut',
    query: 'massage détente Pierrefeu-du-Var institut',
    city: 'Pierrefeu-du-Var',
    theme: 'massage',
    title: 'Massage détente à Pierrefeu-du-Var en institut',
    metaTitle: 'Massage détente Pierrefeu-du-Var – Institut',
    metaDescription: 'Massage détente à Pierrefeu-du-Var en institut. Relaxation du corps. Bien-être. Réservation. Proche Hyères.',
    intro: 'Le massage détente à Pierrefeu-du-Var en institut vous offre une pause bien-être dans un cadre calme. Ce soin associe des manœuvres fluides et des huiles pour une relaxation du corps et de l\'esprit. Idéal pour décompresser ou s\'accorder un moment de douceur, il ne prétend pas soigner mais accompagner votre quotidien. L\'institut vous accueille avec des créneaux adaptés à vos disponibilités.',
    sections: [
      { title: 'Conseils pour une détente optimale', content: 'Arrivez à l\'heure et prévoyez un moment de calme après la séance. Signalez vos préférences (pression, zones à éviter). Hydratez-vous après le massage. Évitez les activités intenses juste après pour prolonger les bienfaits.' },
      { title: 'Déroulé du massage détente', content: 'Vous vous installez sur la table. Le praticien applique des huiles et enchaîne des manœuvres sur tout le corps ou les zones choisies. L\'ambiance est apaisante. La durée varie (souvent 45 min à 1h30). La séance se termine par un temps de repos.' },
      { title: 'Pour qui est ce massage ?', content: 'Ce massage s\'adresse à toute personne en quête de détente. Hommes et femmes, tous âges. Soin bien-être uniquement.' }
    ],
    faq: [
      { question: 'Où se trouve l\'institut à Pierrefeu-du-Var ?', answer: 'L\'adresse exacte vous est communiquée lors de la réservation. Pierrefeu-du-Var est à proximité de Hyères.' },
      { question: 'Combien de temps dure la séance ?', answer: 'La durée est indiquée à la réservation, souvent entre 45 min et 1h30.' },
      { question: 'Quel type de massage est proposé ?', answer: 'Un massage relaxant corps entier, avec huiles et gestes enveloppants. Le détail est précisé sur la fiche du soin.' },
      { question: 'Comment réserver ?', answer: 'Réservation en ligne ou par téléphone. Choisissez votre créneau et validez ; vous recevez une confirmation.' },
      { question: 'Peut-on venir en couple ?', answer: 'Renseignez-vous pour les formules duo. Certains instituts proposent des séances à deux sur réservation.' }
    ],
    cta: { text: 'Réservez votre massage détente à Pierrefeu-du-Var en institut.', button: 'Réserver' }
  },
  {
    id: 'massage-kobido-hyeres-lifting-naturel',
    query: 'massage kobido Hyères lifting naturel',
    city: 'Hyères',
    theme: 'massage',
    title: 'Massage kobido à Hyères : lifting naturel du visage',
    metaTitle: 'Massage kobido Hyères – Lifting naturel visage',
    metaDescription: 'Massage kobido à Hyères pour un lifting naturel du visage. Technique japonaise anti-âge bien-être. Institut. Réservation.',
    intro: 'Le massage kobido à Hyères est une technique d\'origine japonaise qui vise à tonifier le visage et à redonner de l\'éclat par des manœuvres précises et rythmées. Souvent présenté comme un « lifting naturel », il ne prétend pas modifier durablement les traits mais contribuer à une sensation de fermeté et de fraîcheur. Ce soin est purement bien-être et cosmétique. Notre institut vous propose des séances sur mesure.',
    sections: [
      { title: 'Conseils pour prolonger les effets du kobido', content: 'Hydratez votre peau au quotidien et protégez-la du soleil. Évitez de toucher ou de masser trop fort le visage après la séance. Une alimentation équilibrée et un bon sommeil soutiennent l\'éclat de la peau. Le kobido peut être répété régulièrement pour un entretien bien-être.' },
      { title: 'Déroulé d\'une séance kobido', content: 'Vous êtes installée confortablement, visage démaquillé. Le praticien enchaîne des manœuvres spécifiques sur le visage, le cou et parfois le décolleté : tapotements, pressions, lissages. La séance dure souvent 45 min à 1h. Elle se termine par un temps de repos et éventuellement l\'application d\'un soin.' },
      { title: 'Pour qui est le kobido ?', content: 'Ce soin s\'adresse à toute personne souhaitant tonifier et illuminer le visage sans acte médical. Hommes et femmes, tous âges. Effet bien-être et cosmétique uniquement.' }
    ],
    faq: [
      { question: 'Le kobido remplace-t-il un lifting chirurgical ?', answer: 'Non. Le kobido est un soin bien-être qui peut donner une sensation de fermeté et d\'éclat. Il ne modifie pas la structure du visage.' },
      { question: 'Combien de séances pour voir un effet ?', answer: 'Une séance apporte déjà une sensation de fraîcheur. Des séances régulières (par ex. mensuelles) peuvent renforcer le confort et l\'éclat.' },
      { question: 'Le massage est-il douloureux ?', answer: 'Non, les manœuvres sont toniques mais agréables. Vous pouvez demander moins d\'intensité si besoin.' },
      { question: 'Faut-il venir sans maquillage ?', answer: 'Oui, le visage est démaquillé en début de séance. Du démaquillant peut vous être proposé sur place.' },
      { question: 'Comment réserver à Hyères ?', answer: 'La réservation se fait en ligne ou par téléphone. Choisissez votre créneau kobido et validez ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre massage kobido et lifting naturel à Hyères.', button: 'Réserver' }
  },
  {
    id: 'kobido-hyeres-prix-seance-1h',
    query: 'kobido Hyères prix séance 1h',
    city: 'Hyères',
    theme: 'visage',
    title: 'Kobido à Hyères : prix d\'une séance 1h',
    metaTitle: 'Kobido Hyères – Prix séance 1h | Institut',
    metaDescription: 'Kobido à Hyères : tarifs d\'une séance d\'1h. Massage visage japonais, tonification et éclat. Institut bien-être. Réservation.',
    intro: 'Vous cherchez le prix d\'une séance de kobido d\'une heure à Hyères ? Notre institut propose des tarifs clairs pour ce massage du visage d\'inspiration japonaise. La séance d\'1h inclut le démaquillage, les manœuvres de tonification sur le visage et le cou, et un temps de repos. Les prix sont communiqués à l\'avance ; des forfaits peuvent être disponibles pour plusieurs séances. Le kobido est un soin bien-être, sans prétention médicale.',
    sections: [
      { title: 'Conseils pour réserver votre séance kobido 1h', content: 'Vérifiez les tarifs sur notre page ou par téléphone. Précisez que vous souhaitez une séance d\'1h. Arrivez sans maquillage ou prévoyez du temps pour le démaquillage sur place. Après la séance, hydratez votre peau. Une séance par mois peut suffire pour un entretien bien-être.' },
      { title: 'Déroulé de la séance kobido 1h', content: 'La séance débute par un démaquillage puis l\'installation en position confortable. Le praticien enchaîne les manœuvres kobido sur le visage, le cou et éventuellement le décolleté. La durée totale est d\'environ 1h. Un soin ou une brume peut être appliqué en fin de séance. Vous repartez avec des conseils d\'entretien si besoin.' },
      { title: 'Pour qui est la séance kobido 1h ?', content: 'Ce soin s\'adresse à toute personne souhaitant tonifier et illuminer le visage. Hommes et femmes, tous âges. Le kobido est un soin cosmétique et bien-être uniquement.' }
    ],
    faq: [
      { question: 'Quel est le prix d\'une séance kobido 1h à Hyères ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone. Ils peuvent varier selon les options (soin final, etc.).' },
      { question: 'Le prix inclut-il le démaquillage ?', answer: 'Oui, le démaquillage et les produits utilisés pendant la séance sont en général inclus dans le tarif.' },
      { question: 'Existe-t-il des forfaits plusieurs séances ?', answer: 'Certains instituts proposent des forfaits 3 ou 5 séances à tarif préférentiel. Renseignez-vous à l\'accueil ou en ligne.' },
      { question: 'Puis-je payer en plusieurs fois ?', answer: 'Les moyens de paiement sont indiqués à l\'institut. Pour un règlement en plusieurs fois, renseignez-vous sur place.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne en choisissant « Kobido 1h » ou par téléphone. Vous recevez une confirmation avec le tarif.' }
    ],
    cta: { text: 'Consultez les prix et réservez votre séance kobido 1h à Hyères.', button: 'Voir les prix et réserver' }
  },
  {
    id: 'drainage-lymphatique-visage-hyeres-poches-cernes',
    query: 'drainage lymphatique visage Hyères poches cernes',
    city: 'Hyères',
    theme: 'visage',
    title: 'Drainage lymphatique visage à Hyères : poches et cernes',
    metaTitle: 'Drainage lymphatique visage Hyères – Poches cernes',
    metaDescription: 'Drainage lymphatique du visage à Hyères pour atténuer poches et cernes. Soin bien-être, décongestion. Institut. Réservation.',
    intro: 'Le drainage lymphatique du visage à Hyères vise à décongestionner les tissus et à atténuer l\'aspect des poches et des cernes. Les manœuvres sont douces et directionnelles pour stimuler la circulation lymphatique. Ce soin est purement bien-être et cosmétique ; il ne prétend pas soigner les pathologies. Il peut toutefois apporter un confort et un teint plus frais. Notre institut vous propose des séances sur mesure.',
    sections: [
      { title: 'Conseils pour limiter poches et cernes au quotidien', content: 'Dormez suffisamment et sur le dos si possible. Limitez le sel et l\'alcool le soir. Protégez le contour des yeux avec une crème adaptée. Le drainage visage peut être complété par des séances régulières pour un effet de fraîcheur maintenu. En cas de cernes ou poches persistants, un avis médical ou dermatologique peut être utile.' },
      { title: 'Déroulé du drainage lymphatique visage', content: 'Vous êtes installée, visage démaquillé. Le praticien effectue des manœuvres de drainage sur le visage, le contour des yeux et le cou. Les gestes sont lents et précis. La séance dure souvent 30 à 45 min. Un soin hydratant ou un masque peut compléter le soin. Vous repartez avec des conseils d\'entretien.' },
      { title: 'Pour qui est ce soin ?', content: 'Ce soin s\'adresse à toute personne souhaitant décongestionner le visage et atténuer l\'aspect des poches et cernes. Il ne remplace pas un avis médical en cas de pathologie.' }
    ],
    faq: [
      { question: 'Le drainage visage supprime-t-il les cernes ?', answer: 'Le soin peut atténuer l\'aspect des cernes et poches par la décongestion. Les résultats varient selon les personnes et ne sont pas garantis.' },
      { question: 'Combien de séances sont recommandées ?', answer: 'Une à deux séances par mois peuvent aider à maintenir un teint frais. Vous adaptez selon votre ressenti et votre budget.' },
      { question: 'Y a-t-il des contre-indications ?', answer: 'Oui : infections, fièvre, cancer en cours de traitement, etc. En cas de doute, consultez votre médecin avant de réserver.' },
      { question: 'Le soin est-il douloureux ?', answer: 'Non, les manœuvres sont douces. Vous pouvez signaler toute sensibilité au praticien.' },
      { question: 'Comment réserver à Hyères ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Drainage lymphatique visage » et votre créneau ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre drainage lymphatique visage à Hyères.', button: 'Réserver' }
  },
  {
    id: 'soin-visage-anti-age-hyeres-institut',
    query: 'soin visage anti-âge Hyères institut',
    city: 'Hyères',
    theme: 'visage',
    title: 'Soin visage anti-âge à Hyères en institut',
    metaTitle: 'Soin visage anti-âge Hyères – Institut',
    metaDescription: 'Soin visage anti-âge à Hyères en institut. Hydratation, fermeté et éclat. Soins cosmétiques bien-être. Réservation.',
    intro: 'Le soin visage anti-âge à Hyères en institut associe nettoyage, gommage ou exfoliation douce, massage et application de soins ciblés (sérums, masques) pour nourrir la peau et lui redonner éclat et confort. Ces soins sont cosmétiques et bien-être ; ils ne prétendent pas effacer les rides ni modifier la structure de la peau. Ils contribuent à une routine de soin qualitative. Notre institut vous accueille pour une séance personnalisée.',
    sections: [
      { title: 'Conseils pour une peau qui vieillit bien', content: 'Protégez votre peau du soleil au quotidien. Hydratez matin et soir avec des produits adaptés à votre type de peau. Une alimentation équilibrée et un bon sommeil soutiennent l\'éclat. Les soins en institut peuvent compléter votre routine une à deux fois par mois selon vos envies.' },
      { title: 'Déroulé du soin anti-âge en institut', content: 'Après un court diagnostic de peau, vous êtes installée. Le soin enchaîne démaquillage, nettoyage, gommage ou exfoliation, massage du visage et application de sérums et masques. La durée est souvent de 1h à 1h15. Vous repartez avec des conseils et éventuellement des recommandations de produits.' },
      { title: 'Pour qui est ce soin ?', content: 'Ce soin s\'adresse à toute personne souhaitant prendre soin de sa peau et préserver son éclat. Hommes et femmes, à partir de 25-30 ans selon les besoins. Soin cosmétique uniquement.' }
    ],
    faq: [
      { question: 'Le soin anti-âge enlève-t-il les rides ?', answer: 'Non. Le soin nourrit et hydrate la peau pour un confort et un éclat optimaux. Il ne modifie pas durablement les rides.' },
      { question: 'À quelle fréquence faire le soin ?', answer: 'Une séance par mois ou tous les deux mois est souvent suffisante pour un entretien régulier. Vous adaptez selon votre peau et votre budget.' },
      { question: 'Quels produits sont utilisés ?', answer: 'Des soins adaptés à votre type de peau et à vos attentes (hydratation, fermeté, éclat). Les marques et actifs vous sont présentés en début de séance.' },
      { question: 'Faut-il venir sans maquillage ?', answer: 'Vous pouvez venir maquillée ; le démaquillage est fait en début de séance. Du démaquillant est fourni si besoin.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Soin visage anti-âge » et votre créneau ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre soin visage anti-âge à Hyères en institut.', button: 'Réserver' }
  },
  {
    id: 'soin-visage-eclat-hyeres-avant-evenement',
    query: 'soin visage éclat Hyères avant événement',
    city: 'Hyères',
    theme: 'visage',
    title: 'Soin visage éclat à Hyères avant un événement',
    metaTitle: 'Soin visage éclat Hyères – Avant événement',
    metaDescription: 'Soin visage éclat à Hyères avant un événement. Teint frais et lumineux pour le jour J. Institut. Réservation.',
    intro: 'Le soin visage éclat à Hyères est idéal avant un événement (mariage, soirée, photo) pour un teint frais et lumineux. Il associe nettoyage, gommage doux, massage et masque pour illuminer la peau. Planifiez la séance 24 à 48 h avant l\'événement pour laisser la peau s\'apaiser et profiter pleinement de l\'éclat. Ce soin est cosmétique et bien-être ; il ne prétend pas modifier durablement la peau.',
    sections: [
      { title: 'Conseils pour préparer sa peau avant un événement', content: 'Réservez votre soin 24 à 48 h avant le jour J pour éviter toute réaction ou rougeur le jour même. Hydratez bien votre peau les jours précédents. Évitez le soleil intense et les gommages agressifs juste avant. Le jour de l\'événement, maquillez-vous sur une peau propre et hydratée.' },
      { title: 'Déroulé du soin éclat avant événement', content: 'Vous êtes installée, visage démaquillé. Le soin enchaîne nettoyage, gommage léger, massage du visage et application d\'un masque éclat. La durée est souvent de 45 min à 1h. Vous repartez avec un teint frais et des conseils pour le jour J.' },
      { title: 'Pour qui est ce soin ?', content: 'Ce soin s\'adresse à toute personne qui souhaite préparer sa peau avant un événement important. Hommes et femmes, tous âges. Soin cosmétique uniquement.' }
    ],
    faq: [
      { question: 'Combien de temps avant l\'événement faire le soin ?', answer: 'Idéalement 24 à 48 h avant. Ainsi la peau a le temps de s\'apaiser et l\'éclat est optimal le jour J.' },
      { question: 'Peut-on se maquiller juste après ?', answer: 'Oui, vous pouvez vous maquiller après le soin. Attendez quelques minutes que les produits pénètrent si besoin.' },
      { question: 'Le soin convient-il aux peaux sensibles ?', answer: 'Oui, les produits et le protocole peuvent être adaptés. Signalez votre type de peau lors de la réservation.' },
      { question: 'Combien coûte le soin ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone en précisant la date de votre événement pour choisir le bon créneau.' }
    ],
    cta: { text: 'Réservez votre soin visage éclat avant événement à Hyères.', button: 'Réserver' }
  },
  {
    id: 'soin-visage-peau-sensible-carqueiranne-institut',
    query: 'soin visage peau sensible Carqueiranne institut',
    city: 'Carqueiranne',
    theme: 'visage',
    title: 'Soin visage peau sensible à Carqueiranne en institut',
    metaTitle: 'Soin visage peau sensible Carqueiranne – Institut',
    metaDescription: 'Soin visage pour peaux sensibles à Carqueiranne en institut. Protocole doux, apaisant. Réservation. Proche Hyères.',
    intro: 'Le soin visage pour peaux sensibles à Carqueiranne en institut est conçu pour apaiser et protéger les peaux réactives. Les produits sont choisis pour limiter les irritations (sans parfum agressif, formules douces) et le protocole évite les gestes trop appuyés. Ce soin ne prétend pas traiter les pathologies dermatologiques mais offrir un moment de confort. L\'institut vous accueille pour une séance personnalisée.',
    sections: [
      { title: 'Conseils pour les peaux sensibles', content: 'Utilisez des produits doux et évitez les gommages agressifs. Protégez-vous du soleil et du froid. Signalez à l\'institut vos allergies ou produits à éviter. Une séance en institut peut compléter votre routine avec des soins adaptés.' },
      { title: 'Déroulé du soin peau sensible', content: 'Après un échange sur votre peau, vous êtes installée. Le soin enchaîne démaquillage doux, nettoyage, massage léger et application de soins apaisants (masque, crème). Les gestes sont lents et enveloppants. La durée est souvent de 45 min à 1h. Vous repartez avec des conseils pour votre routine.' },
      { title: 'Pour qui est ce soin ?', content: 'Ce soin s\'adresse aux personnes dont la peau est sensible, réactive ou facilement irritée. En cas de pathologie (eczéma, rosacée sévère), un avis dermatologique est recommandé.' }
    ],
    faq: [
      { question: 'Quels produits sont utilisés pour les peaux sensibles ?', answer: 'Des soins formulés pour peaux sensibles, souvent sans parfum ou à base d\'ingrédients apaisants. Les produits vous sont présentés en début de séance.' },
      { question: 'Le soin peut-il provoquer des réactions ?', answer: 'Le protocole est conçu pour limiter les réactions. Signalez toute allergie connue pour adapter les produits.' },
      { question: 'Où se trouve l\'institut à Carqueiranne ?', answer: 'L\'adresse exacte vous est communiquée lors de la réservation. Carqueiranne est à proximité de Hyères.' },
      { question: 'Combien de temps dure la séance ?', answer: 'La durée est souvent de 45 min à 1h. Elle est indiquée au moment de la réservation.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Précisez « peau sensible » pour que l\'institut prépare le bon protocole.' }
    ],
    cta: { text: 'Réservez votre soin visage peau sensible à Carqueiranne.', button: 'Réserver' }
  },
  {
    id: 'soin-visage-hydratant-la-londe-les-maures',
    query: 'soin visage hydratant La Londe-les-Maures',
    city: 'La Londe-les-Maures',
    theme: 'visage',
    title: 'Soin visage hydratant à La Londe-les-Maures',
    metaTitle: 'Soin visage hydratant La Londe-les-Maures',
    metaDescription: 'Soin visage hydratant à La Londe-les-Maures. Nourriture et confort de la peau. Institut. Réservation. Proche Hyères.',
    intro: 'Le soin visage hydratant à La Londe-les-Maures vise à nourrir et apaiser la peau pour un confort durable. Il associe nettoyage, application de soins riches (sérums, masques) et massage pour favoriser la pénétration des actifs. Idéal après l\'été, le chauffage ou pour les peaux qui tiraillent. Ce soin est cosmétique et bien-être. L\'institut vous accueille dans un cadre calme.',
    sections: [
      { title: 'Conseils pour une peau bien hydratée', content: 'Buvez suffisamment et utilisez une crème adaptée à votre type de peau. Évitez l\'eau trop chaude et les savons agressifs. En hiver, protégez votre peau du froid. Un soin hydratant en institut une fois par mois peut compléter votre routine.' },
      { title: 'Déroulé du soin hydratant', content: 'Vous êtes installée, visage démaquillé. Le soin enchaîne nettoyage, application de sérums et masques hydratants, et massage du visage. La durée est souvent de 45 min à 1h. Vous repartez avec la peau confortable et des conseils d\'entretien.' },
      { title: 'Pour qui est ce soin ?', content: 'Ce soin s\'adresse à toute personne dont la peau manque de confort ou est déshydratée. Hommes et femmes, tous âges. Soin cosmétique uniquement.' }
    ],
    faq: [
      { question: 'Le soin convient-il aux peaux grasses ?', answer: 'Oui, l\'hydratation peut être adaptée (textures légères) pour les peaux mixtes ou grasses. Précisez votre type de peau.' },
      { question: 'Combien de temps dure la séance ?', answer: 'La durée est souvent de 45 min à 1h. Elle est indiquée au moment de la réservation.' },
      { question: 'Où réserver à La Londe-les-Maures ?', answer: 'La réservation se fait en ligne ou par téléphone. L\'adresse de l\'institut vous est communiquée à la confirmation.' },
      { question: 'Les produits sont-ils adaptés aux allergies ?', answer: 'Signalez vos allergies lors de la réservation. L\'institut pourra proposer des produits sans allergènes connus.' },
      { question: 'À quelle fréquence faire le soin ?', answer: 'Une séance par mois ou tous les deux mois peut suffire pour maintenir une bonne hydratation. Vous adaptez selon votre ressenti.' }
    ],
    cta: { text: 'Réservez votre soin visage hydratant à La Londe-les-Maures.', button: 'Réserver' }
  },
  {
    id: 'kobido-la-valette-du-var-institut',
    query: 'kobido La Valette-du-Var institut',
    city: 'La Valette-du-Var',
    theme: 'visage',
    title: 'Kobido à La Valette-du-Var en institut',
    metaTitle: 'Kobido La Valette-du-Var – Institut',
    metaDescription: 'Kobido à La Valette-du-Var en institut. Massage visage japonais, tonification. Bien-être. Réservation. Proche Toulon.',
    intro: 'Le kobido à La Valette-du-Var en institut vous propose un massage du visage d\'inspiration japonaise pour tonifier et illuminer le teint. Les manœuvres sont rythmées et précises sur le visage, le cou et parfois le décolleté. Ce soin est purement bien-être et cosmétique ; il ne prétend pas modifier durablement les traits. L\'institut vous accueille à proximité de Toulon pour une séance personnalisée.',
    sections: [
      { title: 'Conseils pour profiter du kobido', content: 'Arrivez sans maquillage ou prévoyez du temps pour le démaquillage. Après la séance, hydratez votre peau. Des séances régulières (par ex. mensuelles) peuvent renforcer la sensation de fermeté et d\'éclat.' },
      { title: 'Déroulé de la séance kobido', content: 'Vous êtes installée confortablement. Le praticien enchaîne les manœuvres kobido sur le visage et le cou. La séance dure souvent 45 min à 1h. Un soin ou une brume peut être appliqué en fin de séance. Vous repartez détendue avec un teint frais.' },
      { title: 'Pour qui est le kobido ?', content: 'Ce soin s\'adresse à toute personne souhaitant tonifier et illuminer le visage. Hommes et femmes, tous âges. Soin bien-être et cosmétique uniquement.' }
    ],
    faq: [
      { question: 'Où se trouve l\'institut à La Valette-du-Var ?', answer: 'L\'adresse exacte vous est communiquée lors de la réservation. La Valette-du-Var est à proximité de Toulon.' },
      { question: 'Le kobido est-il douloureux ?', answer: 'Non, les manœuvres sont toniques mais agréables. Vous pouvez demander moins d\'intensité si besoin.' },
      { question: 'Combien de temps dure la séance ?', answer: 'La durée est souvent de 45 min à 1h. Elle est indiquée au moment de la réservation.' },
      { question: 'Faut-il une préparation particulière ?', answer: 'Venir le visage démaquillé est idéal. Aucune autre préparation n\'est nécessaire.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Kobido » et votre créneau ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre séance kobido à La Valette-du-Var en institut.', button: 'Réserver' }
  },
  {
    id: 'drainage-lymphatique-visage-toulon-institut',
    query: 'drainage lymphatique visage Toulon institut',
    city: 'Toulon',
    theme: 'visage',
    title: 'Drainage lymphatique visage à Toulon en institut',
    metaTitle: 'Drainage lymphatique visage Toulon – Institut',
    metaDescription: 'Drainage lymphatique du visage à Toulon en institut. Décongestion, teint frais. Soin bien-être. Réservation.',
    intro: 'Le drainage lymphatique du visage à Toulon en institut vise à décongestionner les tissus et à redonner un teint frais. Les manœuvres sont douces et directionnelles. Ce soin est bien-être et cosmétique ; il ne prétend pas soigner les pathologies. Il peut compléter une routine de soin pour un confort au quotidien. L\'institut vous reçoit pour une séance sur mesure.',
    sections: [
      { title: 'Conseils pour optimiser les effets', content: 'Hydratez votre peau après la séance. Évitez le soleil intense et l\'alcool en excès. Des séances régulières peuvent maintenir un teint décongestionné. En cas de pathologie, un avis médical est recommandé avant de réserver.' },
      { title: 'Déroulé du drainage visage', content: 'Vous êtes installée, visage démaquillé. Le praticien effectue des manœuvres de drainage sur le visage, le contour des yeux et le cou. La séance dure souvent 30 à 45 min. Un soin hydratant peut compléter le soin. Vous repartez avec des conseils.' },
      { title: 'Pour qui est ce soin ?', content: 'Ce soin s\'adresse à toute personne souhaitant décongestionner le visage. Il ne remplace pas un drainage médical prescrit par un professionnel de santé.' }
    ],
    faq: [
      { question: 'Le drainage visage a-t-il des contre-indications ?', answer: 'Oui : infections, fièvre, cancer en cours de traitement, etc. En cas de doute, consultez votre médecin.' },
      { question: 'Combien de séances pour un effet visible ?', answer: 'Une séance apporte déjà une sensation de fraîcheur. Des séances régulières peuvent renforcer l\'effet.' },
      { question: 'Où réserver à Toulon ?', answer: 'La réservation se fait en ligne ou par téléphone. L\'adresse de l\'institut à Toulon vous est communiquée à la confirmation.' },
      { question: 'Le soin est-il douloureux ?', answer: 'Non, les manœuvres sont douces. Vous pouvez signaler toute sensibilité au praticien.' },
      { question: 'Combien coûte la séance ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone.' }
    ],
    cta: { text: 'Réservez votre drainage lymphatique visage à Toulon en institut.', button: 'Réserver' }
  },
  {
    id: 'soin-visage-purifiant-sollies-pont-institut',
    query: 'soin visage purifiant Solliès-Pont institut',
    city: 'Solliès-Pont',
    theme: 'visage',
    title: 'Soin visage purifiant à Solliès-Pont en institut',
    metaTitle: 'Soin visage purifiant Solliès-Pont – Institut',
    metaDescription: 'Soin visage purifiant à Solliès-Pont en institut. Nettoyage en profondeur, pores et imperfections. Réservation.',
    intro: 'Le soin visage purifiant à Solliès-Pont en institut vise à nettoyer la peau en profondeur et à affiner le grain de peau. Il associe nettoyage, gommage ou exfoliation douce, extraction des comédons si nécessaire et application de soins purifiants. Ce soin est cosmétique et bien-être ; il ne traite pas l\'acné sévère mais peut améliorer le confort des peaux à imperfections. L\'institut vous accueille pour une séance personnalisée.',
    sections: [
      { title: 'Conseils pour les peaux à imperfections', content: 'Nettoyez votre peau matin et soir avec des produits adaptés. Évitez de toucher votre visage avec les mains sales. Protégez-vous du soleil. Un soin purifiant en institut une fois par mois peut compléter votre routine. En cas d\'acné sévère, un suivi dermatologique est recommandé.' },
      { title: 'Déroulé du soin purifiant', content: 'Vous êtes installée, visage démaquillé. Le soin enchaîne nettoyage, gommage, extraction douce des comédons si besoin, et application d\'un masque purifiant. La durée est souvent de 45 min à 1h. Vous repartez avec la peau propre et des conseils d\'entretien.' },
      { title: 'Pour qui est ce soin ?', content: 'Ce soin s\'adresse aux peaux mixtes ou grasses, à tendance acnéique ou avec pores dilatés. Hommes et femmes. Soin cosmétique uniquement.' }
    ],
    faq: [
      { question: 'Le soin purifiant convient-il à l\'acné ?', answer: 'Il peut améliorer le confort des peaux à imperfections. Pour l\'acné sévère, un suivi dermatologique est recommandé.' },
      { question: 'L\'extraction des comédons est-elle douloureuse ?', answer: 'L\'extraction est réalisée avec soin. Vous pouvez signaler votre sensibilité ; le praticien adaptera l\'intensité.' },
      { question: 'Où se trouve l\'institut à Solliès-Pont ?', answer: 'L\'adresse exacte vous est communiquée lors de la réservation. Solliès-Pont est à proximité de Hyères et Toulon.' },
      { question: 'Combien de temps dure la séance ?', answer: 'La durée est souvent de 45 min à 1h. Elle est indiquée au moment de la réservation.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Soin purifiant » et votre créneau ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre soin visage purifiant à Solliès-Pont en institut.', button: 'Réserver' }
  },
  {
    id: 'vernis-semi-permanent-hyeres-tenue-3-semaines',
    query: 'vernis semi-permanent Hyères tenue 3 semaines',
    city: 'Hyères',
    theme: 'ongles',
    title: 'Vernis semi-permanent à Hyères : tenue 3 semaines',
    metaTitle: 'Vernis semi-permanent Hyères – Tenue 3 semaines',
    metaDescription: 'Vernis semi-permanent à Hyères avec tenue jusqu\'à 3 semaines. Pose en institut. Brillant et résistant. Réservation.',
    intro: 'Le vernis semi-permanent à Hyères en institut offre une tenue jusqu\'à 3 semaines avec un rendu brillant et soigné. La pose inclut préparation des ongles, base, couleur et top coat, le tout séché sous lampe UV ou LED. Ce soin est purement esthétique. Idéal pour des ongles parfaits sans repasser par la case vernis tous les jours. Notre institut vous propose des couleurs variées et un rendu professionnel.',
    sections: [
      { title: 'Conseils pour prolonger la tenue du semi-permanent', content: 'Évitez de vous ronger les ongles ou de les utiliser comme outils. Portez des gants pour le ménage et le jardin. Hydratez les cuticules avec une huile ou crème. Un remplissage ou une nouvelle pose après 3 semaines évite de laisser le vernis s\'écailler. En cas de décollement précoce, l\'institut pourra vous conseiller.' },
      { title: 'Déroulé de la pose semi-permanent', content: 'Les ongles sont limés, les cuticules repoussées, puis dégraissés. Une base est appliquée, suivie de la couleur (une ou deux couches) et du top coat. Chaque couche est séchée sous lampe. La pose dure souvent 45 min à 1h. Vous repartez avec des ongles secs et brillants.' },
      { title: 'Pour qui est le vernis semi-permanent ?', content: 'Ce soin s\'adresse à toute personne souhaitant des ongles manucurés avec une tenue longue durée. Hommes et femmes. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'La tenue est-elle vraiment de 3 semaines ?', answer: 'En moyenne oui, selon votre mode de vie et la qualité de la pose. Certaines clientes gardent le vernis 2 à 4 semaines.' },
      { question: 'Faut-il enlever le vernis avant une nouvelle pose ?', answer: 'Oui, le vernis précédent est retiré (dissolution ou limage) avant une nouvelle pose pour un rendu propre.' },
      { question: 'Le semi-permanent abîme-t-il les ongles ?', answer: 'Une pose et un dépose corrects limitent les risques. Hydrater les ongles et faire des pauses entre les poses peut aider.' },
      { question: 'Combien coûte la pose à Hyères ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Vernis semi-permanent » et votre créneau ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre pose vernis semi-permanent à Hyères.', button: 'Réserver' }
  },
  {
    id: 'ongles-en-gel-hyeres-pose-complete-naturelle',
    query: 'ongles en gel Hyères pose complète naturelle',
    city: 'Hyères',
    theme: 'ongles',
    title: 'Ongles en gel à Hyères : pose complète naturelle',
    metaTitle: 'Ongles en gel Hyères – Pose complète naturelle',
    metaDescription: 'Pose d\'ongles en gel à Hyères, rendu naturel. Extension ou renforcement. Institut. Réservation.',
    intro: 'La pose d\'ongles en gel à Hyères en institut permet d\'obtenir un rendu naturel, soit en extension soit en renforcement des ongles naturels. Le gel est appliqué puis polymérisé sous lampe UV/LED pour un résultat durable et brillant. Ce soin est esthétique ; il ne prétend pas soigner les ongles abîmés mais les embellir. Notre institut vous propose des poses sur mesure, naturelles ou plus travaillées.',
    sections: [
      { title: 'Conseils pour entretenir vos ongles en gel', content: 'Évitez de cogner ou d\'utiliser vos ongles comme outils. Un remplissage est conseillé toutes les 2 à 3 semaines pour garder un rendu propre. Hydratez les cuticules. En cas de décollement ou d\'inconfort, revenez à l\'institut pour un retrait ou une correction en douceur.' },
      { title: 'Déroulé de la pose gel complète', content: 'Les ongles sont préparés (limés, dégraissés). Le gel est appliqué en couches (base, construction si extension, couleur si souhaitée, top coat) et séché sous lampe à chaque étape. La pose complète dure souvent 1h à 1h30. Vous repartez avec des ongles secs et résistants.' },
      { title: 'Pour qui est la pose gel ?', content: 'Ce soin s\'adresse à toute personne souhant des ongles longs ou renforcés avec un rendu naturel. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'Quelle différence entre gel et acrylique ?', answer: 'Le gel est souvent plus souple et plus naturel au toucher. L\'acrylique est plus dur. Les deux permettent des extensions.' },
      { question: 'La pose abîme-t-elle les ongles naturels ?', answer: 'Une pose et un retrait corrects limitent les dégâts. Des pauses entre les poses et l\'hydratation aident à préserver les ongles.' },
      { question: 'Combien de temps dure la pose ?', answer: 'La pose complète dure souvent 1h à 1h30. Un remplissage est plus rapide (environ 45 min à 1h).' },
      { question: 'Peut-on avoir un rendu vraiment naturel ?', answer: 'Oui, les teintes nude, transparentes ou très légères donnent un rendu naturel. Vous pouvez en discuter avec la prothésiste.' },
      { question: 'Comment réserver à Hyères ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Pose gel » ou « Extension gel » et votre créneau.' }
    ],
    cta: { text: 'Réservez votre pose ongles en gel à Hyères.', button: 'Réserver' }
  },
  {
    id: 'remplissage-gel-hyeres-rdv-rapide',
    query: 'remplissage gel Hyères rdv rapide',
    city: 'Hyères',
    theme: 'ongles',
    title: 'Remplissage gel à Hyères : rendez-vous rapide',
    metaTitle: 'Remplissage gel Hyères – RDV rapide',
    metaDescription: 'Remplissage d\'ongles en gel à Hyères avec créneaux rapides. Entretien des extensions. Institut. Réservation.',
    intro: 'Le remplissage gel à Hyères est proposé avec des créneaux de rendez-vous rapides pour entretenir vos extensions ou renforts en gel. La séance consiste à combler la repousse à la base de l\'ongle et à repolir pour un rendu impeccable. Plus court qu\'une pose complète, le remplissage permet de garder des ongles soignés sans repartir de zéro. Notre institut vous propose des disponibilités adaptées à votre emploi du temps.',
    sections: [
      { title: 'Conseils pour garder vos ongles entre deux remplissages', content: 'Évitez de tirer ou de cogner vos ongles. Hydratez les cuticules. Planifiez un remplissage toutes les 2 à 3 semaines pour éviter que la repousse ne se voit trop et que le gel ne se décolle.' },
      { title: 'Déroulé du remplissage gel', content: 'La prothésiste lime légèrement la surface du gel existant, nettoie la zone de repousse, applique le nouveau gel et polit. La séance dure souvent 45 min à 1h. Vous repartez avec des ongles uniformes et brillants.' },
      { title: 'Pour qui est le remplissage ?', content: 'Ce soin s\'adresse aux personnes qui ont déjà une pose gel (extension ou renfort) et qui souhaitent l\'entretenir. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'Combien de temps entre deux remplissages ?', answer: 'En général toutes les 2 à 3 semaines, selon la pousse de vos ongles et votre préférence.' },
      { question: 'Puis-je réserver rapidement ?', answer: 'Oui, des créneaux « rdv rapide » ou du jour même peuvent être disponibles. Consultez les disponibilités en ligne ou par téléphone.' },
      { question: 'Le remplissage coûte-t-il moins cher que la pose ?', answer: 'Oui, le tarif du remplissage est en général inférieur à celui d\'une pose complète. Les prix sont indiqués sur la page réservation.' },
      { question: 'Faut-il venir avec les ongles déjà en gel ?', answer: 'Oui, le remplissage s\'effectue sur une pose gel existante. Si vous n\'avez plus de gel, une nouvelle pose complète sera proposée.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Remplissage gel » et un créneau ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez rapidement votre remplissage gel à Hyères.', button: 'Réserver' }
  },
  {
    id: 'french-manucure-hyeres-institut',
    query: 'french manucure Hyères institut',
    city: 'Hyères',
    theme: 'ongles',
    title: 'French manucure à Hyères en institut',
    metaTitle: 'French manucure Hyères – Institut',
    metaDescription: 'French manucure à Hyères en institut. Blanc et nude, rendu classique et élégant. Réservation.',
    intro: 'La french manucure à Hyères en institut vous offre le classique blanc et nude pour un rendu élégant et intemporel. Elle peut être réalisée au vernis classique ou en semi-permanent pour une tenue prolongée. La pose inclut préparation des ongles, base, tip blanc et corps nude, puis top coat. Ce soin est purement esthétique. Notre institut vous propose une french soignée et adaptée à la forme de vos ongles.',
    sections: [
      { title: 'Conseils pour garder une french impeccable', content: 'Évitez les chocs et l\'utilisation des ongles comme outils. En semi-permanent, la tenue peut aller jusqu\'à 3 semaines. Hydratez les cuticules. Une nouvelle pose ou un remplissage selon le type de pose vous permet de garder un rendu toujours net.' },
      { title: 'Déroulé de la french manucure', content: 'Les ongles sont préparés (limés, cuticules repoussées, dégraissés). La base est appliquée, puis le tip blanc au bord et le nude sur le corps de l\'ongle. Le top coat scelle le tout. En semi-permanent, chaque couche est séchée sous lampe. La séance dure souvent 45 min à 1h.' },
      { title: 'Pour qui est la french manucure ?', content: 'Ce soin s\'adresse à toute personne qui aime le look épuré et élégant de la french. Hommes et femmes. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'French au vernis classique ou semi-permanent ?', answer: 'Les deux sont possibles. Le classique tient environ une semaine ; le semi-permanent jusqu\'à 3 semaines. À vous de choisir selon votre mode de vie.' },
      { question: 'La french convient-elle aux ongles courts ?', answer: 'Oui, la french peut être adaptée aux ongles courts. Le tip blanc peut être plus fin pour un rendu proportionné.' },
      { question: 'Combien coûte la french à Hyères ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone. Ils peuvent varier selon vernis classique ou semi-permanent.' },
      { question: 'Peut-on avoir une french colorée ?', answer: 'Oui, des variantes existent (french colorée, french inversée). Renseignez-vous auprès de l\'institut.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « French manucure » et votre créneau ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre french manucure à Hyères en institut.', button: 'Réserver' }
  },
  {
    id: 'nail-art-hyeres-discret-chic',
    query: 'nail art Hyères discret chic',
    city: 'Hyères',
    theme: 'ongles',
    title: 'Nail art à Hyères : discret et chic',
    metaTitle: 'Nail art Hyères – Discret et chic',
    metaDescription: 'Nail art discret et chic à Hyères. Décors sobres, élégants. Institut. Réservation.',
    intro: 'Le nail art discret et chic à Hyères en institut propose des décors sobres et élégants : lignes fines, points, motifs minimalistes ou french revisitée. L\'objectif est un rendu raffiné sans être trop chargé. Les techniques (sticker, dessin au pinceau, strass discrets) sont adaptées à vos envies. Ce soin est purement esthétique. Notre institut vous accompagne pour un nail art qui vous ressemble.',
    sections: [
      { title: 'Conseils pour un nail art qui dure', content: 'En semi-permanent, le nail art tient jusqu\'à 3 semaines. Évitez les chocs et l\'utilisation des ongles comme outils. Hydratez les cuticules. Pour changer de motif, une nouvelle pose ou un décapage sera nécessaire.' },
      { title: 'Déroulé de la pose nail art', content: 'Après préparation des ongles, la base et la couleur de fond sont posées. Le décor (lignes, points, motifs) est réalisé au pinceau ou avec des accessoires. Le top coat scelle le tout. En semi-permanent, séchage sous lampe. La séance dure souvent 1h à 1h15 selon la complexité.' },
      { title: 'Pour qui est le nail art discret ?', content: 'Ce soin s\'adresse à toute personne qui souhaite un peu de fantaisie tout en restant élégante. Hommes et femmes. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'Quels motifs sont proposés en discret chic ?', answer: 'Lignes fines, points, french twist, motifs géométriques légers, strass discrets. Vous pouvez apporter une idée ou une photo pour vous inspirer.' },
      { question: 'Le nail art coûte-t-il plus cher ?', answer: 'Un supplément par rapport à une pose unie peut être appliqué selon la complexité du décor. Les tarifs sont indiqués à l\'institut ou en ligne.' },
      { question: 'Combien de temps dure la séance ?', answer: 'La séance dure souvent 1h à 1h15 selon le motif. Elle est indiquée au moment de la réservation.' },
      { question: 'Puis-je choisir les couleurs ?', answer: 'Oui, une large palette est disponible. Vous choisissez la base et les détails avec la prothésiste.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Précisez « Nail art » et décrivez votre idée si vous en avez une ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre nail art discret et chic à Hyères.', button: 'Réserver' }
  },
  {
    id: 'babyboomer-ongles-hyeres-prix',
    query: 'babyboomer ongles Hyères prix',
    city: 'Hyères',
    theme: 'ongles',
    title: 'Babyboomer ongles à Hyères : prix et réservation',
    metaTitle: 'Babyboomer ongles Hyères – Prix et réservation',
    metaDescription: 'Babyboomer ongles à Hyères. Dégradé nude et blanc, prix et réservation. Institut. Manucure tendance.',
    intro: 'Le babyboomer à Hyères est une tendance manucure : dégradé entre le nude et le blanc pour un effet « glow » naturel. Il peut être réalisé en vernis classique ou en semi-permanent. Vous cherchez le prix : les tarifs sont communiqués sur notre page réservation ou par téléphone. La pose inclut préparation des ongles, dégradé (nude vers blanc) et top coat. Ce soin est purement esthétique. Notre institut vous propose un babyboomer soigné.',
    sections: [
      { title: 'Conseils pour garder un babyboomer parfait', content: 'En semi-permanent, la tenue peut aller jusqu\'à 3 semaines. Évitez les chocs. Hydratez les cuticules. Pour un rendu toujours net, planifiez une nouvelle pose ou un remplissage selon le type de pose.' },
      { title: 'Déroulé de la pose babyboomer', content: 'Les ongles sont préparés. Le dégradé est réalisé au pinceau ou à l\'éponge (nude à la base, blanc en bord libre). Le top coat scelle le tout. En semi-permanent, séchage sous lampe. La séance dure souvent 45 min à 1h.' },
      { title: 'Pour qui est le babyboomer ?', content: 'Ce soin s\'adresse à toute personne qui aime le rendu naturel et lumineux. Très tendance, il convient à tous les âges et toutes les occasions. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'Quel est le prix du babyboomer à Hyères ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone. Ils peuvent varier selon vernis classique ou semi-permanent.' },
      { question: 'Babyboomer et french : quelle différence ?', answer: 'La french a un tip blanc net ; le babyboomer est un dégradé doux entre nude et blanc pour un effet plus naturel.' },
      { question: 'Combien de temps tient le babyboomer ?', answer: 'En vernis classique environ une semaine ; en semi-permanent jusqu\'à 3 semaines.' },
      { question: 'Peut-on avoir des couleurs ?', answer: 'Oui, des variantes existent (babyboomer rosé, coloré). Renseignez-vous auprès de l\'institut.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Babyboomer » et votre créneau ; vous recevez une confirmation avec le tarif.' }
    ],
    cta: { text: 'Consultez les prix et réservez votre babyboomer à Hyères.', button: 'Voir les prix et réserver' }
  },
  {
    id: 'beaute-des-pieds-hyeres-callosites',
    query: 'beauté des pieds Hyères callosités',
    city: 'Hyères',
    theme: 'ongles',
    title: 'Beauté des pieds à Hyères : callosités et soin',
    metaTitle: 'Beauté des pieds Hyères – Callosités et soin',
    metaDescription: 'Beauté des pieds à Hyères. Soin des callosités, pédicure. Institut. Réservation.',
    intro: 'La beauté des pieds à Hyères en institut inclut le soin des callosités, le limage des cors et un travail sur la peau des pieds pour un confort et un rendu soigné. La pédicure peut être complétée par une pose de vernis classique ou semi-permanent. Ce soin est esthétique et bien-être ; il ne traite pas les pathologies podologiques. Notre institut vous accueille pour des pieds doux et soignés.',
    sections: [
      { title: 'Conseils pour des pieds confortables', content: 'Portez des chaussures adaptées et évitez les frottements répétés. Hydratez vos pieds quotidiennement. Un gommage doux à la maison peut compléter les soins en institut. En cas de plaie, mycose ou douleur persistante, un avis podologique ou médical est recommandé.' },
      { title: 'Déroulé du soin beauté des pieds', content: 'Vos pieds sont trempés dans un bain tiède, puis les callosités et cors sont traités avec des instruments adaptés (lime, râpe). La peau est gommée et hydratée. Les ongles sont coupés et limés. Une pose de vernis peut terminer le soin. La séance dure souvent 45 min à 1h.' },
      { title: 'Pour qui est ce soin ?', content: 'Ce soin s\'adresse à toute personne souhaitant prendre soin de ses pieds et atténuer les callosités. Il ne remplace pas un suivi podologique en cas de pathologie.' }
    ],
    faq: [
      { question: 'Le soin des callosités est-il douloureux ?', answer: 'Le traitement est réalisé avec soin. Vous pouvez signaler toute sensibilité ; le praticien adaptera la pression. Les callosités sont progressivement réduites.' },
      { question: 'Pédicure et vernis : c\'est inclus ?', answer: 'Selon la formule, la pédicure peut être seule ou avec pose de vernis (classique ou semi-permanent). Les tarifs sont détaillés sur la page réservation.' },
      { question: 'Combien de temps dure la séance ?', answer: 'La séance dure souvent 45 min à 1h. Avec vernis semi-permanent, compter jusqu\'à 1h15.' },
      { question: 'À quelle fréquence venir ?', answer: 'Une séance par mois ou tous les deux mois peut suffire pour l\'entretien. Vous adaptez selon l\'état de vos pieds.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Beauté des pieds » ou « Pédicure » et votre créneau ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre soin beauté des pieds à Hyères.', button: 'Réserver' }
  },
  {
    id: 'pedicure-vernis-semi-permanent-carqueiranne',
    query: 'pédicure + vernis semi-permanent Carqueiranne',
    city: 'Carqueiranne',
    theme: 'ongles',
    title: 'Pédicure et vernis semi-permanent à Carqueiranne',
    metaTitle: 'Pédicure vernis semi-permanent Carqueiranne',
    metaDescription: 'Pédicure et vernis semi-permanent à Carqueiranne. Soin des pieds et tenue longue durée. Institut. Réservation.',
    intro: 'La pédicure avec vernis semi-permanent à Carqueiranne en institut associe soin des pieds (bain, gommage, travail des callosités, coupe et lime des ongles) et pose de vernis semi-permanent pour une tenue jusqu\'à 3 semaines. Idéal pour des pieds soignés et colorés sans repasser par la case vernis chaque semaine. Ce soin est esthétique et bien-être. L\'institut vous accueille à proximité de Hyères.',
    sections: [
      { title: 'Conseils pour garder vos pieds et le vernis', content: 'Évitez de marcher pieds nus juste après la pose pour laisser le vernis bien sécher. Hydratez les pieds et les cuticules. Le vernis semi-permanent tient jusqu\'à 3 semaines ; une nouvelle séance permettra de refaire pédicure et pose.' },
      { title: 'Déroulé pédicure + semi-permanent', content: 'Vos pieds sont trempés, puis soignés (callosités, gommage, hydratation, ongles). Ensuite la base, la couleur et le top coat sont appliqués et séchés sous lampe. La séance dure souvent 1h à 1h15. Vous repartez avec des pieds doux et des ongles colorés.' },
      { title: 'Pour qui est ce soin ?', content: 'Ce soin s\'adresse à toute personne qui souhaite allier soin des pieds et vernis longue tenue. Soin esthétique et bien-être uniquement.' }
    ],
    faq: [
      { question: 'Le vernis semi-permanent tient-il sur les ongles des pieds ?', answer: 'Oui, la tenue peut aller jusqu\'à 3 semaines. Elle peut varier selon la qualité de la pose et votre mode de vie (chaussures, marche).' },
      { question: 'Où se trouve l\'institut à Carqueiranne ?', answer: 'L\'adresse exacte vous est communiquée lors de la réservation. Carqueiranne est à proximité de Hyères.' },
      { question: 'Combien coûte la pédicure + semi-permanent ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone.' },
      { question: 'Combien de temps dure la séance ?', answer: 'La séance dure souvent 1h à 1h15. Elle est indiquée au moment de la réservation.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Pédicure + vernis semi-permanent » et votre créneau.' }
    ],
    cta: { text: 'Réservez votre pédicure et vernis semi-permanent à Carqueiranne.', button: 'Réserver' }
  },
  {
    id: 'pose-gel-la-crau-prothesiste-ongulaire',
    query: 'pose gel La Crau prothésiste ongulaire',
    city: 'La Crau',
    theme: 'ongles',
    title: 'Pose gel à La Crau chez une prothésiste ongulaire',
    metaTitle: 'Pose gel La Crau – Prothésiste ongulaire',
    metaDescription: 'Pose d\'ongles en gel à La Crau par prothésiste ongulaire. Extension, renfort. Institut. Réservation.',
    intro: 'La pose d\'ongles en gel à La Crau est réalisée par une prothésiste ongulaire formée. Extension ou renfort en gel pour un rendu naturel et durable. Le gel est appliqué en couches et polymérisé sous lampe. Ce soin est esthétique ; il ne prétend pas soigner les ongles mais les embellir. L\'institut vous accueille à proximité de Hyères pour une pose soignée.',
    sections: [
      { title: 'Conseils pour entretenir votre pose gel', content: 'Un remplissage est conseillé toutes les 2 à 3 semaines. Évitez les chocs et l\'utilisation des ongles comme outils. Hydratez les cuticules. En cas de décollement, revenez à l\'institut pour un retrait ou une correction en douceur.' },
      { title: 'Déroulé de la pose chez la prothésiste', content: 'La prothésiste prépare les ongles, applique le gel (base, construction si extension, top coat) et sèche sous lampe à chaque étape. La pose complète dure souvent 1h à 1h30. Vous repartez avec des ongles secs et résistants, un rendu naturel ou plus travaillé selon votre choix.' },
      { title: 'Pour qui est la pose gel ?', content: 'Ce soin s\'adresse à toute personne souhaitant des ongles longs ou renforcés. La prothésiste s\'adapte à la forme et à la longueur désirées. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'La prothésiste est-elle diplômée ?', answer: 'Notre équipe est formée à la pose gel et à la prothésie ongulaire. Renseignez-vous auprès de l\'institut pour les diplômes et formations.' },
      { question: 'Où se trouve l\'institut à La Crau ?', answer: 'L\'adresse exacte vous est communiquée lors de la réservation. La Crau est à proximité de Hyères.' },
      { question: 'Combien coûte la pose gel ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone. Le remplissage est en général moins cher que la pose complète.' },
      { question: 'Combien de temps dure la pose ?', answer: 'La pose complète dure souvent 1h à 1h30. Le remplissage est plus rapide (environ 45 min à 1h).' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Pose gel » et votre créneau ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre pose gel à La Crau chez notre prothésiste ongulaire.', button: 'Réserver' }
  },
  {
    id: 'vernis-semi-permanent-le-pradet-institut',
    query: 'vernis semi-permanent Le Pradet institut',
    city: 'Le Pradet',
    theme: 'ongles',
    title: 'Vernis semi-permanent au Pradet en institut',
    metaTitle: 'Vernis semi-permanent Le Pradet – Institut',
    metaDescription: 'Vernis semi-permanent au Pradet en institut. Pose soignée, tenue 3 semaines. Réservation.',
    intro: 'Le vernis semi-permanent au Pradet en institut vous propose une pose soignée avec une tenue jusqu\'à 3 semaines. La séance inclut préparation des ongles, base, couleur et top coat, séchage sous lampe. Ce soin est purement esthétique. L\'institut vous accueille à proximité de Hyères pour des ongles parfaits sans repasser par la case vernis tous les jours.',
    sections: [
      { title: 'Conseils pour prolonger la tenue', content: 'Évitez les chocs et l\'utilisation des ongles comme outils. Hydratez les cuticules. Une nouvelle pose ou un décapage après 3 semaines évite que le vernis s\'écaille. En cas de décollement précoce, l\'institut pourra vous conseiller.' },
      { title: 'Déroulé de la pose au Pradet', content: 'Les ongles sont préparés (limés, cuticules repoussées, dégraissés). Base, couleur (une ou deux couches) et top coat sont appliqués et séchés sous lampe. La pose dure souvent 45 min à 1h. Vous repartez avec des ongles secs et brillants.' },
      { title: 'Pour qui est ce soin ?', content: 'Ce soin s\'adresse à toute personne souhaitant des ongles manucurés avec une tenue longue durée. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'Où se trouve l\'institut au Pradet ?', answer: 'L\'adresse exacte vous est communiquée lors de la réservation. Le Pradet est à proximité de Hyères.' },
      { question: 'Combien de temps tient le vernis ?', answer: 'En moyenne 3 semaines, selon votre mode de vie et la qualité de la pose.' },
      { question: 'Quelles couleurs sont disponibles ?', answer: 'Une large palette est proposée. Vous choisissez sur place ou lors de la réservation si l\'institut propose un choix en ligne.' },
      { question: 'Combien coûte la pose ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Vernis semi-permanent » et votre créneau ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre vernis semi-permanent au Pradet en institut.', button: 'Réserver' }
  },
  {
    id: 'maquillage-mariee-hyeres-essai-jour-j',
    query: 'maquillage mariée Hyères essai + jour J',
    city: 'Hyères',
    theme: 'maquillage',
    title: 'Maquillage mariée à Hyères : essai et jour J',
    metaTitle: 'Maquillage mariée Hyères – Essai et jour J',
    metaDescription: 'Maquillage mariée à Hyères : essai et jour J. Tenue longue durée, naturel ou glamour. Institut. Réservation.',
    intro: 'Le maquillage mariée à Hyères en institut inclut un essai et le jour J pour un rendu parfait et une tenue longue durée. Lors de l\'essai, nous définissons avec vous le style (naturel, romantique, glamour), les couleurs et la cohérence avec votre robe et votre coiffure. Le jour J, le maquillage est reproduit et renforcé pour tenir toute la journée et les photos. Ce soin est purement esthétique. Notre institut vous accompagne pour un jour inoubliable.',
    sections: [
      { title: 'Conseils pour préparer l\'essai et le jour J', content: 'Apportez des photos ou des idées à l\'essai. Précisez l\'heure de la cérémonie et si vous avez une coiffure prévue le jour J. Hydratez bien votre peau les jours précédents. Évitez les soins agressifs ou les nouveautés cosmétiques juste avant. Le jour J, arrivez le visage propre et hydraté.' },
      { title: 'Déroulé de l\'essai et du jour J', content: 'L\'essai dure souvent 1h à 1h30 : échange sur vos envies, pose du maquillage, ajustements. Vous repartez avec des photos et des notes pour le jour J. Le jour J, le maquillage est posé dans le calme (souvent 1h à 1h30). Tenue longue durée et fixateur sont utilisés pour une tenue parfaite.' },
      { title: 'Pour qui est le maquillage mariée ?', content: 'Ce soin s\'adresse aux mariées qui souhaitent un maquillage professionnel, tenace et photogénique. L\'essai permet de valider le rendu avant le grand jour. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'Combien de temps avant le mariage faire l\'essai ?', answer: 'Idéalement 1 à 3 mois avant pour réserver les créneaux. L\'essai peut être fait jusqu\'à quelques semaines avant le jour J.' },
      { question: 'Le maquillage tient-il toute la journée ?', answer: 'Oui, des produits longue tenue et un fixateur sont utilisés. Vous recevrez aussi des conseils pour les retouches si besoin.' },
      { question: 'Puis-je avoir un essai sans m\'engager pour le jour J ?', answer: 'Renseignez-vous auprès de l\'institut. Certains proposent un essai payant déductible si vous réservez le jour J.' },
      { question: 'L\'institut se déplace-t-il le jour J ?', answer: 'Selon l\'institut, un déplacement à domicile ou sur le lieu du mariage peut être possible. Renseignez-vous et précisez l\'adresse.' },
      { question: 'Comment réserver ?', answer: 'Réservez l\'essai en ligne ou par téléphone, puis confirmez le jour J après validation du rendu. Vous recevez une confirmation pour les deux.' }
    ],
    cta: { text: 'Réservez votre essai et jour J maquillage mariée à Hyères.', button: 'Réserver' }
  },
  {
    id: 'maquillage-soiree-hyeres-tenue-longue-duree',
    query: 'maquillage soirée Hyères tenue longue durée',
    city: 'Hyères',
    theme: 'maquillage',
    title: 'Maquillage soirée à Hyères : tenue longue durée',
    metaTitle: 'Maquillage soirée Hyères – Tenue longue durée',
    metaDescription: 'Maquillage soirée à Hyères avec tenue longue durée. Glamour, smokey, paillettes. Institut. Réservation.',
    intro: 'Le maquillage soirée à Hyères en institut est conçu pour une tenue longue durée : smokey, glamour, paillettes ou nude sophistiqué selon vos envies. Des produits résistants et un fixateur assurent un rendu impeccable jusqu\'au bout de la nuit. Ce soin est purement esthétique. Notre institut vous propose des créneaux adaptés à l\'heure de votre soirée pour partir maquillée en toute confiance.',
    sections: [
      { title: 'Conseils pour un maquillage soirée réussi', content: 'Réservez selon l\'heure de votre soirée (souvent 1h à 1h30 avant le départ). Hydratez votre peau la veille et le jour même. Arrivez le visage propre et hydraté. Vous recevrez des conseils pour les retouches (léger encre à lèvres, poudre) si besoin en cours de soirée.' },
      { title: 'Déroulé de la séance maquillage soirée', content: 'Après un court échange sur le style souhaité, le maquillage est posé : teint, yeux (fumé, liner, paillettes…), lèvres, fixateur. La séance dure souvent 45 min à 1h. Vous repartez prête pour votre soirée avec un rendu tenace et photogénique.' },
      { title: 'Pour qui est ce maquillage ?', content: 'Ce soin s\'adresse à toute personne qui a une soirée, un gala, un anniversaire ou un événement et qui souhaite un maquillage professionnel. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'Le maquillage tient-il vraiment toute la soirée ?', answer: 'Oui, des produits longue tenue et un fixateur sont utilisés. Des retouches légères (lèvres, poudre) peuvent être conseillées selon la durée.' },
      { question: 'Quels styles sont proposés ?', answer: 'Smokey, glamour, paillettes, nude sophistiqué, couleur… Vous pouvez apporter une photo pour vous inspirer.' },
      { question: 'Combien de temps avant la soirée réserver ?', answer: 'Planifiez la séance 1h à 1h30 avant votre départ pour avoir le temps et ne pas vous précipiter.' },
      { question: 'Combien coûte le maquillage soirée ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Maquillage soirée » et l\'horaire qui correspond à votre soirée ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre maquillage soirée à Hyères.', button: 'Réserver' }
  },
  {
    id: 'maquillage-invitee-mariage-hyeres-rdv',
    query: 'maquillage invitée mariage Hyères rdv',
    city: 'Hyères',
    theme: 'maquillage',
    title: 'Maquillage invitée mariage à Hyères : prise de rdv',
    metaTitle: 'Maquillage invitée mariage Hyères – RDV',
    metaDescription: 'Maquillage invitée mariage à Hyères. Prise de rendez-vous en ligne. Mise en beauté pour le jour du mariage.',
    intro: 'Le maquillage invitée mariage à Hyères en institut vous permet de prendre rendez-vous facilement pour être au top le jour du mariage. Que vous soyez demoiselle d\'honneur ou invitée, nous proposons une mise en beauté adaptée : naturel raffiné, romantique ou un peu plus glamour, selon la tenue et l\'ambiance. La prise de rdv se fait en ligne ou par téléphone. Ce soin est purement esthétique. Notre institut vous accueille avec des créneaux adaptés aux horaires des mariages.',
    sections: [
      { title: 'Conseils pour réserver votre rdv invitée mariage', content: 'Réservez suffisamment à l\'avance, surtout en haute saison des mariages. Précisez l\'heure de la cérémonie pour choisir un créneau cohérent (souvent 1h à 1h30 avant). Hydratez votre peau la veille. Arrivez le visage propre et hydraté. Vous pouvez apporter une photo de votre tenue pour adapter le maquillage.' },
      { title: 'Déroulé de la séance invitée mariage', content: 'Après un court échange sur vos envies et votre tenue, le maquillage est posé : teint unifié, yeux (naturel ou plus travaillé), lèvres, fixateur. La séance dure souvent 45 min à 1h. Vous repartez prête pour le mariage avec un rendu tenace et élégant.' },
      { title: 'Pour qui est ce maquillage ?', content: 'Ce soin s\'adresse aux invitées et demoiselles d\'honneur qui souhaitent un maquillage professionnel pour un mariage. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'Comment prendre rdv pour le maquillage invitée mariage ?', answer: 'Réservez en ligne ou par téléphone. Choisissez un créneau qui laisse le temps d\'arriver au mariage (souvent 1h à 1h30 avant l\'heure prévue).' },
      { question: 'Le maquillage est-il adapté aux photos ?', answer: 'Oui, le teint et les contours sont travaillés pour un rendu photogénique. Un fixateur évite les brillances.' },
      { question: 'Puis-je venir avec ma robe pour assortir ?', answer: 'Oui, vous pouvez apporter une photo ou décrire votre tenue pour que le maquillage soit harmonisé.' },
      { question: 'Combien coûte la séance ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone.' },
      { question: 'Annulation ou report ?', answer: 'Toute annulation ou report doit être signalé dans les délais indiqués lors de la réservation pour libérer le créneau.' }
    ],
    cta: { text: 'Prenez rdv pour votre maquillage invitée mariage à Hyères.', button: 'Prendre rendez-vous' }
  },
  {
    id: 'maquillage-naturel-hyeres-shooting-photo',
    query: 'maquillage naturel Hyères shooting photo',
    city: 'Hyères',
    theme: 'maquillage',
    title: 'Maquillage naturel à Hyères pour shooting photo',
    metaTitle: 'Maquillage naturel Hyères – Shooting photo',
    metaDescription: 'Maquillage naturel à Hyères pour shooting photo. Teint frais, photogénique. Institut. Réservation.',
    intro: 'Le maquillage naturel à Hyères pour shooting photo est pensé pour un rendu frais et photogénique sans surcharge. Teint unifié, regard souligné mais discret, lèvres naturelles : l\'objectif est de sublimer vos traits pour l’objectif tout en gardant un aspect « vous ». Ce soin est purement esthétique. Notre institut vous propose des créneaux adaptés à l\'heure de votre shooting pour arriver maquillée et sereine.',
    sections: [
      { title: 'Conseils pour un maquillage shooting réussi', content: 'Précisez le type de shooting (portrait, pro, couple…) et si le photographe a des consignes. Hydratez bien votre peau la veille. Arrivez le visage propre et hydraté. Évitez les nouveautés cosmétiques juste avant pour limiter les réactions. Le maquillage naturel reste adaptable aux retouches du photographe.' },
      { title: 'Déroulé de la séance maquillage shooting', content: 'Après un échange sur le type de shooting, le maquillage est posé : teint lumineux, léger contouring si besoin, yeux naturels (mascara, liner discret), lèvres nude ou rosé. La séance dure souvent 45 min à 1h. Vous repartez prête pour le shooting avec un rendu qui tient et qui photographie bien.' },
      { title: 'Pour qui est ce maquillage ?', content: 'Ce soin s\'adresse à toute personne qui a un shooting photo (portrait, pro, anniversaire…) et qui souhaite un maquillage naturel et photogénique. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'Le maquillage naturel tient-il pendant tout le shooting ?', answer: 'Oui, des produits tenaces et un fixateur sont utilisés. Vous pouvez prévoir une retouche légère si le shooting est très long.' },
      { question: 'Faut-il prévenir le photographe ?', answer: 'Vous pouvez indiquer à votre photographe que vous passez en institut pour un maquillage naturel ; il pourra adapter ses conseils si besoin.' },
      { question: 'Combien de temps avant le shooting réserver ?', answer: 'Planifiez la séance juste avant le shooting (souvent 1h avant) pour un rendu frais.' },
      { question: 'Combien coûte la séance ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Maquillage naturel / shooting » et l\'horaire adapté ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre maquillage naturel pour shooting à Hyères.', button: 'Réserver' }
  },
  {
    id: 'maquillage-mariee-toulon-deplacement-possible',
    query: 'maquillage mariée Toulon déplacement possible',
    city: 'Toulon',
    theme: 'maquillage',
    title: 'Maquillage mariée à Toulon : déplacement possible',
    metaTitle: 'Maquillage mariée Toulon – Déplacement possible',
    metaDescription: 'Maquillage mariée à Toulon. Essai et jour J, déplacement à domicile ou sur lieu possible. Institut. Réservation.',
    intro: 'Le maquillage mariée à Toulon en institut inclut un essai et le jour J, avec déplacement possible à votre domicile ou sur le lieu du mariage. Ainsi vous pouvez rester sereine le matin du grand jour sans vous déplacer. L\'essai se fait en institut pour définir le style et les couleurs. Ce soin est purement esthétique. Notre équipe s\'adapte à votre organisation pour un jour parfait.',
    sections: [
      { title: 'Conseils pour organiser essai et jour J avec déplacement', content: 'Lors de la réservation, précisez l\'adresse du déplacement et l\'heure souhaitée le jour J. Vérifiez les conditions (tarif déplacement, créneau minimum). Pour l\'essai, venez en institut avec des idées ou des photos. Hydratez votre peau les jours précédents. Le jour J, prévoyez un espace calme et une bonne lumière pour la maquilleuse.' },
      { title: 'Déroulé essai en institut et jour J en déplacement', content: 'L\'essai a lieu en institut (1h à 1h30) : échange, pose du maquillage, ajustements. Le jour J, la maquilleuse se déplace à l\'heure convenue et reproduit le maquillage validé. Tenue longue durée et fixateur sont utilisés. Vous êtes prête sans quitter votre lieu de préparation.' },
      { title: 'Pour qui est ce service ?', content: 'Ce soin s\'adresse aux mariées qui préfèrent être maquillées sur place (domicile, hôtel, lieu du mariage). Idéal pour gagner du temps et rester zen. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'Le déplacement est-il inclus dans le tarif ?', answer: 'Selon l\'institut, un forfait déplacement peut s\'appliquer au-delà d\'une certaine distance. Renseignez-vous lors de la réservation.' },
      { question: 'Jusqu\'où vous déplacez-vous ?', answer: 'La zone de déplacement (Toulon, agglomération, environs) est indiquée par l\'institut. Précisez votre adresse pour confirmer.' },
      { question: 'Faut-il prévoir une table et une chaise ?', answer: 'Oui, un espace avec une table et une chaise, et une bonne lumière, est idéal pour la maquilleuse.' },
      { question: 'Combien de temps avant l\'heure de la cérémonie ?', answer: 'La maquilleuse arrive souvent 1h30 à 2h avant l\'heure prévue pour avoir le temps et ne pas vous stresser.' },
      { question: 'Comment réserver ?', answer: 'Réservez l\'essai en institut, puis confirmez le jour J avec déplacement. Indiquez l\'adresse et l\'heure ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre maquillage mariée à Toulon avec déplacement possible.', button: 'Réserver' }
  },
  {
    id: 'maquillage-evenement-carqueiranne-institut',
    query: 'maquillage événement Carqueiranne institut',
    city: 'Carqueiranne',
    theme: 'maquillage',
    title: 'Maquillage événement à Carqueiranne en institut',
    metaTitle: 'Maquillage événement Carqueiranne – Institut',
    metaDescription: 'Maquillage pour événement à Carqueiranne en institut. Soirée, fête, anniversaire. Réservation.',
    intro: 'Le maquillage événement à Carqueiranne en institut vous propose une mise en beauté pour toute occasion : soirée, fête, anniversaire, séminaire. Le style est adapté à votre tenue et à l\'ambiance (glamour, naturel, coloré). Des produits tenaces et un fixateur assurent un rendu impeccable. Ce soin est purement esthétique. L\'institut vous accueille à proximité de Hyères avec des créneaux adaptés à vos horaires.',
    sections: [
      { title: 'Conseils pour un maquillage événement réussi', content: 'Réservez selon l\'heure de votre événement (souvent 1h à 1h30 avant le départ). Hydratez votre peau la veille. Arrivez le visage propre et hydraté. Vous pouvez apporter une photo de votre tenue pour harmoniser le maquillage. Prévoir une retouche lèvres ou poudre en poche si la soirée est longue.' },
      { title: 'Déroulé de la séance maquillage événement', content: 'Après un court échange sur l\'événement et vos envies, le maquillage est posé : teint, yeux, lèvres, fixateur. La séance dure souvent 45 min à 1h. Vous repartez prête pour votre événement avec un rendu tenace et soigné.' },
      { title: 'Pour qui est ce maquillage ?', content: 'Ce soin s\'adresse à toute personne qui a un événement (soirée, fête, anniversaire…) et qui souhaite un maquillage professionnel. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'Où se trouve l\'institut à Carqueiranne ?', answer: 'L\'adresse exacte vous est communiquée lors de la réservation. Carqueiranne est à proximité de Hyères.' },
      { question: 'Quels styles sont proposés ?', answer: 'Naturel, glamour, smokey, paillettes, couleur… Vous choisissez selon votre tenue et l\'ambiance de l\'événement.' },
      { question: 'Combien de temps dure la séance ?', answer: 'La séance dure souvent 45 min à 1h. Elle est indiquée au moment de la réservation.' },
      { question: 'Combien coûte le maquillage événement ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Maquillage événement » et l\'horaire qui correspond à votre soirée ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre maquillage événement à Carqueiranne en institut.', button: 'Réserver' }
  },
  {
    id: 'maquillage-la-londe-les-maures-mise-en-beaute-express',
    query: 'maquillage La Londe-les-Maures mise en beauté express',
    city: 'La Londe-les-Maures',
    theme: 'maquillage',
    title: 'Maquillage à La Londe-les-Maures : mise en beauté express',
    metaTitle: 'Maquillage La Londe-les-Maures – Mise en beauté express',
    metaDescription: 'Mise en beauté express à La Londe-les-Maures. Maquillage rapide, efficace. Institut. Réservation.',
    intro: 'La mise en beauté express à La Londe-les-Maures en institut est un maquillage rapide et efficace pour celles qui ont peu de temps. Teint unifié, regard souligné, lèvres : en 30 à 45 minutes vous repartez maquillée et prête pour votre journée ou votre soirée. Ce soin est purement esthétique. L\'institut vous accueille à proximité de Hyères avec des créneaux adaptés aux emplois du temps chargés.',
    sections: [
      { title: 'Conseils pour une mise en beauté express', content: 'Arrivez le visage propre et hydraté pour gagner du temps. Indiquez le style souhaité (naturel, travail, soirée léger) en début de séance. Si vous avez un créneau serré, précisez-le à la réservation pour que l\'institut réserve la durée adaptée.' },
      { title: 'Déroulé de la mise en beauté express', content: 'Pas de longue discussion : on enchaîne directement sur le teint, les yeux et les lèvres. Les produits sont choisis pour un rendu rapide et tenace. La séance dure 30 à 45 min. Vous repartez maquillée et prête en un minimum de temps.' },
      { title: 'Pour qui est ce soin ?', content: 'Ce soin s\'adresse à toute personne qui a peu de temps mais qui souhaite un maquillage soigné (travail, déjeuner, sortie rapide). Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'Combien de temps dure la séance express ?', answer: 'En général 30 à 45 minutes. La durée est indiquée au moment de la réservation.' },
      { question: 'Le maquillage express tient-il bien ?', answer: 'Oui, des produits tenaces sont utilisés. Pour une tenue très longue, un fixateur peut être proposé en option.' },
      { question: 'Où se trouve l\'institut à La Londe-les-Maures ?', answer: 'L\'adresse exacte vous est communiquée lors de la réservation. La Londe-les-Maures est à proximité de Hyères.' },
      { question: 'Combien coûte la mise en beauté express ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone. L\'express est souvent proposé à un tarif adapté.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Mise en beauté express » et un créneau ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre mise en beauté express à La Londe-les-Maures.', button: 'Réserver' }
  },
  {
    id: 'maquillage-la-valette-du-var-ceremonie',
    query: 'maquillage La Valette-du-Var cérémonie',
    city: 'La Valette-du-Var',
    theme: 'maquillage',
    title: 'Maquillage cérémonie à La Valette-du-Var',
    metaTitle: 'Maquillage cérémonie La Valette-du-Var',
    metaDescription: 'Maquillage pour cérémonie à La Valette-du-Var. Mariage, baptême, événement. Institut. Réservation.',
    intro: 'Le maquillage cérémonie à La Valette-du-Var en institut vous propose une mise en beauté adaptée aux événements solennels : mariage, baptême, remise de diplôme ou autre cérémonie. Le rendu est élégant, tenace et photogénique. Ce soin est purement esthétique. L\'institut vous accueille à proximité de Toulon avec des créneaux adaptés aux horaires des cérémonies.',
    sections: [
      { title: 'Conseils pour un maquillage cérémonie', content: 'Réservez selon l\'heure de la cérémonie (souvent 1h à 1h30 avant). Hydratez votre peau la veille. Arrivez le visage propre et hydraté. Précisez le type de cérémonie et votre tenue pour adapter le style (discret, romantique, classique).' },
      { title: 'Déroulé de la séance maquillage cérémonie', content: 'Après un échange sur la cérémonie et vos envies, le maquillage est posé : teint lumineux, regard souligné, lèvres élégantes, fixateur. La séance dure souvent 45 min à 1h. Vous repartez prête pour la cérémonie avec un rendu tenace et adapté à l\'occasion.' },
      { title: 'Pour qui est ce maquillage ?', content: 'Ce soin s\'adresse à toute personne qui a une cérémonie (mariage, baptême, autre) et qui souhaite un maquillage professionnel et durable. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'Où se trouve l\'institut à La Valette-du-Var ?', answer: 'L\'adresse exacte vous est communiquée lors de la réservation. La Valette-du-Var est à proximité de Toulon.' },
      { question: 'Le maquillage tient-il pendant toute la cérémonie ?', answer: 'Oui, des produits tenaces et un fixateur sont utilisés pour un rendu durable et photogénique.' },
      { question: 'Combien de temps dure la séance ?', answer: 'La séance dure souvent 45 min à 1h. Elle est indiquée au moment de la réservation.' },
      { question: 'Combien coûte le maquillage cérémonie ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Maquillage cérémonie » et l\'horaire adapté ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre maquillage cérémonie à La Valette-du-Var.', button: 'Réserver' }
  },
  {
    id: 'cours-auto-maquillage-hyeres-debutant',
    query: 'cours d\'auto-maquillage Hyères débutant',
    city: 'Hyères',
    theme: 'maquillage',
    title: 'Cours d\'auto-maquillage à Hyères pour débutant',
    metaTitle: 'Cours auto-maquillage Hyères – Débutant',
    metaDescription: 'Cours d\'auto-maquillage à Hyères pour débutants. Apprendre les bases, produits et gestes. Institut. Réservation.',
    intro: 'Le cours d\'auto-maquillage à Hyères pour débutant vous permet d\'apprendre les bases : choix des produits, outils, ordre des étapes et gestes pour un maquillage du quotidien réussi. La séance est personnalisée selon votre type de peau, votre morphologie et vos envies. Ce service est pédagogique et esthétique ; il ne prétend pas former des professionnels mais vous rendre autonome. Notre institut vous accueille pour un cours à votre rythme.',
    sections: [
      { title: 'Conseils pour progresser après le cours', content: 'Pratiquez régulièrement avec les produits conseillés. Notez les étapes et les produits utilisés pendant le cours. N\'hésitez pas à poser des questions par la suite (email ou prochain rdv). Un cours de perfectionnement peut être envisagé après quelques semaines de pratique.' },
      { title: 'Déroulé du cours débutant', content: 'Le cours débute par un échange sur votre routine actuelle et vos objectifs. Puis les bases sont expliquées : teint, yeux, lèvres. Vous vous maquillez sous les conseils de la professionnelle, ou elle vous montre sur vous. La durée est souvent 1h à 1h30. Vous repartez avec des conseils écrits ou une liste de produits si besoin.' },
      { title: 'Pour qui est ce cours ?', content: 'Ce cours s\'adresse aux débutantes (et débutants) qui souhaitent apprendre à se maquiller au quotidien. Aucun prérequis. Service pédagogique et esthétique uniquement.' }
    ],
    faq: [
      { question: 'Faut-il apporter ses propres produits ?', answer: 'Vous pouvez apporter les vôtres pour apprendre avec ce que vous avez, ou utiliser les produits de l\'institut. Renseignez-vous lors de la réservation.' },
      { question: 'Le cours est-il individuel ou en groupe ?', answer: 'Selon l\'institut, le cours peut être individuel ou en petit groupe. Précisez votre préférence lors de la réservation.' },
      { question: 'Combien de temps dure le cours ?', answer: 'Le cours dure souvent 1h à 1h30. La durée est indiquée au moment de la réservation.' },
      { question: 'Combien coûte le cours ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Cours auto-maquillage débutant » et votre créneau ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre cours d\'auto-maquillage débutant à Hyères.', button: 'Réserver' }
  },
  {
    id: 'rehaussement-maquillage-leger-hyeres-avant-soiree',
    query: 'rehaussement + maquillage léger Hyères avant soirée',
    city: 'Hyères',
    theme: 'maquillage',
    title: 'Rehaussement de cils et maquillage léger à Hyères avant soirée',
    metaTitle: 'Rehaussement cils + maquillage léger Hyères – Soirée',
    metaDescription: 'Rehaussement de cils et maquillage léger à Hyères avant une soirée. Regard ouvert, teint frais. Institut. Réservation.',
    intro: 'Le rehaussement de cils associé à un maquillage léger à Hyères en institut est idéal avant une soirée : le rehaussement ouvre le regard sans pose d\'extensions, et le maquillage léger (teint, lèvres, peut-être un peu de liner) complète le rendu sans surcharge. Vous repartez fraîche et prête en environ 1h à 1h15. Ce soin est purement esthétique. Notre institut vous propose des créneaux adaptés à l\'heure de votre soirée.',
    sections: [
      { title: 'Conseils pour un rehaussement et maquillage avant soirée', content: 'Réservez 1h à 1h15 avant votre départ. Arrivez sans maquillage des yeux (ou prévoyez le démaquillage sur place). Après le rehaussement, évitez l\'eau et le frottement des yeux pendant les heures qui suivent. Le maquillage léger est posé après le rehaussement pour un rendu cohérent.' },
      { title: 'Déroulé rehaussement + maquillage léger', content: 'Le rehaussement des cils est réalisé en premier (permanent des cils pour les courber vers le haut). Puis le maquillage léger est posé : teint, légère touche aux yeux si besoin, lèvres. La séance dure souvent 1h à 1h15. Vous repartez avec le regard ouvert et un teint frais.' },
      { title: 'Pour qui est ce soin ?', content: 'Ce soin s\'adresse à toute personne qui a une soirée et qui souhaite un regard mis en valeur sans extensions, avec un maquillage discret. Soin esthétique uniquement.' }
    ],
    faq: [
      { question: 'Le rehaussement tient-il toute la soirée ?', answer: 'Oui, le rehaussement (permanent des cils) tient plusieurs semaines. Le maquillage léger est tenace avec les produits utilisés.' },
      { question: 'Rehaussement et extensions : quelle différence ?', answer: 'Le rehaussement courbe vos cils naturels sans ajout. Les extensions ajoutent des cils. Les deux peuvent être proposés ; ici c\'est rehaussement + maquillage léger.' },
      { question: 'Combien de temps avant la soirée réserver ?', answer: 'Planifiez la séance 1h à 1h15 avant votre départ pour avoir le temps et ne pas vous précipiter.' },
      { question: 'Combien coûte le soin ?', answer: 'Les tarifs sont indiqués sur notre page réservation ou communiqués par téléphone. Un forfait rehaussement + maquillage peut être proposé.' },
      { question: 'Comment réserver ?', answer: 'Réservez en ligne ou par téléphone. Choisissez « Rehaussement + maquillage léger » et l\'horaire adapté à votre soirée ; vous recevez une confirmation.' }
    ],
    cta: { text: 'Réservez votre rehaussement et maquillage léger avant soirée à Hyères.', button: 'Réserver' }
  }
];
