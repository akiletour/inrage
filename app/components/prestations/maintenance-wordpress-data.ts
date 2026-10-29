import type { Plan, PlanRow } from './PlanTable'

export const PLANS: Plan[] = [
  { name: 'Tranquilité', price: '39 € HT par mois' },
  { name: 'Standard', price: '55 € HT par mois' },
  { name: 'Sérénité', price: '75 € HT par mois' },
]

export const PLAN_HINTS = [
  'Site vitrine, astreinte en semaine, intervention sous 6 h',
  'Pré-production et supervision, intervention sous 4 h',
  'Boutique ou site critique, robot de test, intervention sous 2 h',
]

export const ROWS: PlanRow[] = [
  {
    name: 'Sauvegarde de vos données',
    excerpt:
      'Base de données et fichiers, sur des serveurs en France distincts de votre hébergement.',
    values: ['1 fois|par jour', '1 fois|par jour', '2 fois|par jour'],
  },
  {
    name: 'Mises à jour et montées de version',
    excerpt:
      'WordPress, thème et extensions, appliqués après test, y compris les versions majeures.',
    values: [true, true, true],
  },
  {
    name: 'Analyse de sécurité',
    excerpt:
      'Surveillance quotidienne de 22 points de sécurité de votre installation.',
    values: [true, true, true],
  },
  {
    name: 'Licences iThemes Security Pro et WP Rocket',
    excerpt: 'Sécurité et cache, offertes pendant toute la durée du contrat.',
    values: [true, true, true],
  },
  {
    name: 'Certificat SSL',
    excerpt:
      'Installation, configuration et adaptation du site pour le HTTPS si besoin.',
    values: [true, true, true],
  },
  {
    name: 'Rapport de maintenance mensuel',
    excerpt:
      'Un PDF chaque mois avec les actions menées, les recommandations et les points de vigilance.',
    values: [true, true, true],
  },
  {
    name: 'Supervision logicielle',
    excerpt:
      'Scan de sécurité toutes les heures et surveillance des mises à jour disponibles, rapport dans la console.',
    values: [false, true, true],
  },
  {
    name: 'Environnement de pré-production',
    excerpt:
      'Les mises à jour et les développements passent sur une copie du site avant la production.',
    values: [false, true, true],
  },
  {
    name: 'Montée de version PHP',
    excerpt:
      'Accompagnement pour changer la version de PHP de votre hébergement, selon le thème et l’hébergeur.',
    values: [false, true, true],
  },
  {
    name: 'Supervision proactive',
    excerpt:
      'Un robot parcourt le site toutes les heures et teste que les pages et les formulaires fonctionnent.',
    values: [false, false, true],
  },
  {
    name: 'Astreinte',
    excerpt:
      'Tranquilité : de 9 h à 19 h du lundi au vendredi. Standard et Sérénité : 24 h sur 24, 365 jours par an.',
    values: ['9 h à 19 h|en semaine', '24 h/24', '24 h/24'],
  },
  {
    name: 'Délai d’intervention garanti',
    excerpt: 'Compté à partir de la déclaration de l’incident dans la console.',
    values: ['6 h', '4 h', '2 h'],
  },
  {
    name: 'Heures de développement incluses',
    excerpt:
      'Chaque mois, pour corriger ou faire évoluer le site. Le nombre d’heures se personnalise.',
    values: ['1 heure', '3 heures', '8 heures'],
  },
  {
    name: 'Engagement',
    excerpt: 'Durée du contrat de maintenance.',
    values: ['12 mois', '12 mois', '12 mois'],
  },
]

export const REQUESTS = [
  'Une mise à jour de WordPress ou d’une extension a cassé une page, un formulaire ou le paiement.',
  'Le site affiche une page blanche, une erreur 500 ou un avis de sécurité de l’hébergeur.',
  'Le site a été piraté : redirections, spam, contenus injectés, blocage par Google.',
  'Le site est lent, le cache n’est pas configuré, les images ne sont pas optimisées.',
  'L’hébergeur impose une montée de version PHP et le thème ne la supporte pas.',
  'Personne ne sait plus où sont les accès, les sauvegardes ni le nom de domaine.',
]

export const FAQ = [
  {
    question:
      'Mon site WordPress a été développé par quelqu’un d’autre, pouvez-vous le reprendre ?',
    answer:
      'Oui, c’est le cas de la majorité des sites que je maintiens. La prise en charge commence par un audit du thème, des extensions et de l’hébergement, puis par une mise à jour complète sur un environnement de pré-production avant toute modification en ligne.',
  },
  {
    question: 'Que se passe-t-il si mon site est piraté ou tombe en panne ?',
    answer:
      'Vous déclarez l’incident dans la console et j’interviens dans le délai garanti par votre forfait, de 6 h à 2 h. Le site est restauré depuis la sauvegarde la plus récente, la faille est identifiée et corrigée, puis vous recevez un compte rendu.',
  },
  {
    question: 'À quoi servent les heures de développement incluses ?',
    answer:
      'À tout ce qui n’est pas une mise à jour : corriger un bug du thème, ajouter un bloc ou une page, brancher un outil, régler un formulaire. Le volume se personnalise si vos besoins sont réguliers.',
  },
  {
    question: 'Le forfait couvre-t-il une boutique WooCommerce ?',
    answer:
      'Oui. WooCommerce est une extension de WordPress, ses mises à jour et celles des passerelles de paiement sont comprises. Pour une boutique, je conseille le forfait Sérénité : le robot de supervision teste le site toutes les heures et le délai d’intervention est de 2 h.',
  },
  {
    question: 'Intervenez-vous sur place à La Rochelle ?',
    answer:
      'La maintenance se fait à distance, mais je reçois au 10-14 rue Jean Perrin à La Rochelle et je me déplace dans vos locaux sur l’agglomération et la Charente-Maritime pour la prise en charge, une formation ou un point annuel.',
  },
  {
    question: 'Faut-il un engagement ?',
    answer:
      'Les forfaits sont engagés sur 12 mois, ce qui permet de planifier les mises à jour majeures et la montée de version PHP. Pour une correction isolée sans contrat, la maintenance ponctuelle est facturée à l’heure.',
  },
]
