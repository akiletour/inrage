import { RouteLink } from '@lib/router'

export const STAKES = [
  {
    title: 'Une extension oubliée ouvre la porte',
    text: 'La majorité des sites piratés que je récupère l’ont été par une extension ou un module que plus personne ne mettait à jour. La faille est publiée, les robots la cherchent partout, et le site est dans la liste. Redirections vers des pharmacies en ligne, pages de spam indexées, avertissement rouge dans Google : le temps de s’en apercevoir, le référencement a déjà encaissé.',
  },
  {
    title: 'L’hébergeur monte PHP, le thème ne suit pas',
    text: 'Chaque année, les hébergeurs coupent une version de PHP. Le thème acheté en 2017 n’est plus compatible, et un matin le site affiche une page blanche. La maintenance anticipe cette montée de version : test sur une copie du site, correction du thème, puis bascule.',
  },
  {
    title: 'Une mise à jour casse le paiement',
    text: 'Mettre à jour sans tester, c’est jouer le paiement, le formulaire de contact ou la prise de rendez-vous à chaque clic sur « Mettre à jour ». Toutes les mises à jour que j’applique passent d’abord sur un environnement de pré-production, et le site est vérifié avant la mise en production.',
  },
  {
    title: 'Le jour où ça casse, personne n’a les accès',
    text: 'Le prestataire d’origine a disparu, le nom de domaine expire dans trois jours, la sauvegarde la plus récente date de la mise en ligne. Un contrat de maintenance, c’est aussi quelqu’un qui connaît votre site, sait où sont les accès, et répond dans un délai garanti.',
  },
]

export const OFFERS = [
  {
    name: 'Maintenance WordPress',
    price: 'De 39 à 75 € HT par mois',
    text: 'Trois forfaits, Tranquilité, Standard et Sérénité, pour un site vitrine ou une boutique WooCommerce.',
    items: [
      'Mises à jour de WordPress, du thème et des extensions, testées en pré-production',
      'Sauvegardes quotidiennes sur des serveurs en France, distincts de votre hébergement',
      'Scan de sécurité toutes les heures, licences iThemes Security Pro et WP Rocket incluses',
      'Montée de version PHP accompagnée',
      'De 1 à 8 heures de développement incluses chaque mois',
      'Délai d’intervention garanti de 6 h à 2 h, rapport mensuel',
    ],
    href: RouteLink.prestationTmaWordPress,
    hrefText: 'Comparer les forfaits WordPress',
  },
  {
    name: 'Maintenance Prestashop',
    price: 'De 39 à 55 € HT par mois',
    text: 'Deux forfaits, Sérénité et Avancée, pour une boutique de Prestashop 1.6 à 9.',
    items: [
      'Mises à jour de Prestashop, du thème et des modules, testées en pré-production',
      'Sauvegardes quotidiennes ou biquotidiennes en France',
      'Robot qui parcourt le tunnel d’achat toutes les heures : inscription, connexion, panier',
      'Surveillance des fichiers et de la base contre les injections',
      '1 à 4 heures de développement incluses chaque mois',
      'Délai d’intervention garanti de 4 h à 2 h',
    ],
    href: RouteLink.prestationTmaPrestashop,
    hrefText: 'Comparer les forfaits Prestashop',
  },
  {
    name: 'Intervention ponctuelle',
    price: 'À l’heure, sans engagement',
    text: 'Pour un besoin isolé sur WordPress, WooCommerce ou Prestashop, à La Rochelle ou à distance.',
    items: [
      'Correction d’un bug, d’une page blanche ou d’une erreur 500',
      'Remise en route après une mise à jour ratée',
      'Nettoyage d’un site piraté et restauration',
      'Ajout d’un bloc ou d’une fonctionnalité',
      'Diagnostic et temps estimé avant toute intervention',
      'Un forfait proposé seulement si le besoin le justifie',
    ],
    href: RouteLink.prestationTmaOnDemand,
    hrefText: 'Demander un dépannage',
  },
]

export const RHYTHM = [
  {
    when: 'Toutes les heures',
    text: 'Un robot parcourt les pages clés de votre site, vérifie que le code source n’a pas été altéré et teste les formulaires. Sur une boutique, il va jusqu’au panier. Si quelque chose casse, je le sais avant vos clients.',
  },
  {
    when: 'Chaque jour',
    text: 'Sauvegarde des fichiers et de la base de données vers des serveurs situés en France, distincts de l’hébergement. Les failles publiées dans la journée sont comparées à la liste des extensions et modules du parc.',
  },
  {
    when: 'Chaque semaine',
    text: 'Les mises à jour disponibles sont appliquées sur une copie du site en pré-production, vérifiées, puis passées en production. Une mise à jour qui casse quelque chose ne sort jamais de la pré-production.',
  },
  {
    when: 'Chaque mois',
    text: 'Vous recevez un rapport PDF des actions menées, des mises à jour passées et des points de vigilance. Les heures de développement incluses servent à corriger ou faire évoluer le site.',
  },
  {
    when: 'Chaque année',
    text: 'Montée de version majeure de WordPress ou de Prestashop, montée de version PHP, renouvellement du certificat et du nom de domaine, point sur l’hébergement et le référencement.',
  },
]

export const CONSOLE_POINTS = [
  {
    title: 'Une demande, une notification, une réponse',
    text: 'Vous décrivez le problème dans la console, je reçois la notification immédiatement et le délai d’intervention garanti par votre forfait commence à courir. Pas de file d’attente, pas de ticket qui attend le lundi.',
  },
  {
    title: 'Vos factures et l’historique au même endroit',
    text: 'Chaque intervention, chaque mise à jour et chaque facture est consignée dans la console. Vous savez ce qui a été fait sur votre site, quand, et ce qu’il reste d’heures incluses.',
  },
  {
    title: 'Un outillage écrit pour 150 sites',
    text: 'Je ne fais pas les mises à jour à la main. Un générateur de scripts WP-CLI prépare chaque intervention à partir des failles publiées et des versions à passer, un outil macOS produit le rapport mensuel. Les interventions sont reproductibles d’un site à l’autre.',
  },
]

export const FAQ = [
  {
    question: 'Qu’appelle-t-on maintenance, TMA ou infogérance d’un site ?',
    answer:
      'Trois mots pour la même chose : garder un site à jour, sauvegardé, surveillé et réparé quand il casse. La TMA, tierce maintenance applicative, désigne le contrat par lequel un prestataire extérieur s’en charge. L’infogérance ajoute la supervision de l’hébergement. Chez inRage, les forfaits couvrent les trois.',
  },
  {
    question: 'Combien coûte la maintenance d’un site internet ?',
    answer:
      'Les forfaits WordPress vont de 39 à 75 € HT par mois et les forfaits Prestashop de 39 à 55 € HT par mois, engagement 12 mois, heures de développement incluses. Une intervention ponctuelle est facturée à l’heure, après un diagnostic et une estimation du temps.',
  },
  {
    question:
      'Forfait de maintenance ou intervention ponctuelle : que choisir ?',
    answer:
      'Le forfait convient à un site qui doit rester en ligne sans interruption : mises à jour planifiées, sauvegardes quotidiennes, surveillance et délai d’intervention garanti. L’intervention ponctuelle, facturée à l’heure, répond à un besoin isolé : corriger un bug, ajouter un bloc, débloquer une mise à jour.',
  },
  {
    question:
      'Mon site a été créé par une autre agence, pouvez-vous le reprendre ?',
    answer:
      'Oui, c’est le cas de la majorité des sites que je maintiens. La prise en charge commence par un état des lieux : accès, hébergement, thème, extensions ou modules, sauvegardes. Puis une remise à niveau complète sur pré-production avant la surveillance au quotidien.',
  },
  {
    question:
      'Mon site n’est ni sous WordPress ni sous Prestashop, pouvez-vous le maintenir ?',
    answer:
      'Oui pour WooCommerce, Symfony et les sites développés sur mesure que j’ai réalisés ou audités. Pour une autre plateforme, un premier échange permet de vérifier ce que je peux prendre en charge, et je vous oriente si ce n’est pas le cas.',
  },
  {
    question: 'Où sont stockées les sauvegardes ?',
    answer:
      'Sur des serveurs situés en France, distincts de l’hébergement de votre site. Une sauvegarde conservée au même endroit que le site ne sert à rien le jour où le serveur tombe ou est compromis. Les restaurations sont testées, pas seulement stockées.',
  },
  {
    question: 'Faut-il aussi changer d’hébergement ?',
    answer:
      'Non, la maintenance s’applique sur votre hébergement actuel. Si celui-ci est en cause dans les lenteurs ou les pannes, je peux héberger le site sur mes serveurs en France, où il est supervisé avec le reste du parc. Les deux prestations restent indépendantes.',
  },
]
