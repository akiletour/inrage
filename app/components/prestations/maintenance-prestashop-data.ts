import type { Plan, PlanRow } from './PlanTable'

export const PLANS: Plan[] = [
  { name: 'Sérénité', price: '39 € HT par mois' },
  { name: 'Avancée', price: '55 € HT par mois' },
]

export const CHECKS = [
  'Page d’accueil',
  'Catégorie et fiche produit',
  'Création de compte',
  'Connexion client',
  'Ajout au panier',
  'Page de paiement',
  'Intégrité des fichiers',
  'Base de données',
]

export const ROWS: PlanRow[] = [
  {
    name: 'Sauvegarde de vos données',
    excerpt:
      'Base de données et fichiers, sur des serveurs en France distincts de votre hébergement.',
    values: ['1 fois|par jour', '2 fois|par jour'],
  },
  {
    name: 'Mises à jour de Prestashop, du thème et des modules',
    excerpt: 'Modules du marketplace et de vos éditeurs compris, après test.',
    values: [true, true],
  },
  {
    name: 'Supervision logicielle',
    excerpt:
      'Scan de sécurité toutes les heures et surveillance des mises à jour disponibles, rapport dans la console.',
    values: [true, true],
  },
  {
    name: 'Certificat SSL',
    excerpt:
      'Installation, configuration et adaptation de la boutique pour le HTTPS si besoin.',
    values: [true, true],
  },
  {
    name: 'Environnement de pré-production',
    excerpt:
      'Les mises à jour et les développements passent sur une copie de la boutique avant la production.',
    values: [false, true],
  },
  {
    name: 'Supervision du tunnel d’achat',
    excerpt:
      'Un robot teste toutes les heures l’inscription, la connexion et le panier.',
    values: [false, true],
  },
  {
    name: 'Astreinte',
    excerpt:
      'Sérénité : de 9 h à 19 h du lundi au vendredi. Avancée : 24 h sur 24, 365 jours par an.',
    values: ['9 h à 19 h|en semaine', '24 h/24'],
  },
  {
    name: 'Délai d’intervention garanti',
    excerpt: 'Compté à partir de la déclaration de l’incident dans la console.',
    values: ['4 h', '2 h'],
  },
  {
    name: 'Heures de développement incluses',
    excerpt:
      'Chaque mois, pour corriger ou faire évoluer la boutique. Le nombre d’heures se personnalise.',
    values: ['1 heure', '4 heures'],
  },
  {
    name: 'Engagement',
    excerpt: 'Durée du contrat de maintenance.',
    values: ['12 mois', '12 mois'],
  },
]

export const WATCH = [
  {
    title: 'Les pages, toutes les heures',
    text: 'Un robot parcourt l’accueil, les catégories, des fiches produits et les pages de contact, et compare leur contenu à la version attendue. Un script injecté dans le pied de page, une redirection ajoutée dans un module : je le vois à la passe suivante, pas quand un client m’écrit.',
  },
  {
    title: 'Le tunnel d’achat',
    text: 'Sur le forfait Avancée, le robot crée un compte, se connecte, ajoute un produit au panier et vérifie que le paiement se présente. C’est la seule façon de savoir qu’une boutique encaisse encore après une mise à jour de module ou de passerelle.',
  },
  {
    title: 'Les fichiers et la base de données',
    text: 'Les fichiers de Prestashop et des modules sont comparés à leur empreinte d’origine, la base est contrôlée contre les modifications non prévues. Les tentatives d’injection dans les formulaires et les connexions suspectes au back-office sont bloquées avant d’atteindre la boutique.',
  },
]

export const FAQ = [
  {
    question: 'Quelles versions de Prestashop prenez-vous en charge ?',
    answer:
      'Les boutiques de Prestashop 1.6 à 9. Pour une version ancienne, la prise en charge commence par un audit des modules et du thème, puis par un plan de migration vers une version maintenue, sur pré-production, avant toute bascule.',
  },
  {
    question: 'Les mises à jour de modules tiers sont-elles comprises ?',
    answer:
      'Oui. Les modules du marketplace Prestashop et de vos éditeurs sont mis à jour dans le cadre du forfait, après test sur pré-production. Si une mise à jour demande une adaptation du thème ou d’un module sur mesure, elle est prise sur les heures de développement incluses.',
  },
  {
    question:
      'Ma boutique a été développée par une autre agence, est-ce un problème ?',
    answer:
      'Non, c’est le cas de la plupart des boutiques que je reprends. La prise en charge commence par un état des lieux : accès, hébergement, modules, sauvegardes, puis une remise à niveau complète avant la surveillance au quotidien.',
  },
  {
    question: 'Que se passe-t-il si la boutique tombe pendant un week-end ?',
    answer:
      'Sur le forfait Avancée, l’astreinte couvre 24 h sur 24 et 365 jours par an, avec un délai d’intervention garanti de 2 h après la déclaration dans la console. Sur le forfait Sérénité, l’astreinte va de 9 h à 19 h en semaine, avec un délai de 4 h.',
  },
  {
    question: 'Combien coûte la maintenance d’une boutique Prestashop ?',
    answer:
      '39 € HT par mois pour le forfait Sérénité, 55 € HT par mois pour le forfait Avancée, engagement 12 mois, heures de développement incluses. Une grosse boutique ou des besoins réguliers de développement se chiffrent sur devis, avec un volume d’heures adapté.',
  },
  {
    question: 'Travaillez-vous avec des boutiques hors de La Rochelle ?',
    answer:
      'Oui, la majorité des boutiques Prestashop que je maintiens sont ailleurs en France. La maintenance se fait à distance, à travers la console et vos accès, et je me déplace quand un projet le justifie.',
  },
]
