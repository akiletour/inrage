export const CASES = [
  {
    title: 'Extranet client ou espace adhérent',
    text: 'Vos clients, vos adhérents ou vos revendeurs se connectent, consultent leurs documents, passent commande, suivent un dossier. Chaque compte voit ce qui le concerne, les droits sont gérés finement, et l’espace est relié à vos outils existants plutôt que d’en créer un de plus.',
  },
  {
    title: 'Outil interne de gestion',
    text: 'Devis, planning, stocks, interventions, suivi de production : le tableur partagé qui a grandi jusqu’à devenir ingérable devient une application avec des règles métier, un historique et des exports. Symfony est fait pour ce genre de logique, pas un CMS.',
  },
  {
    title: 'API et connecteurs',
    text: 'Une API documentée avec API Platform pour alimenter une application mobile, un site Next.js ou un partenaire. Des connecteurs entre votre ERP, votre boutique Prestashop ou WooCommerce et votre logiciel de gestion, avec un journal de chaque échange. Quand il faut du temps réel, Mercure pousse les mises à jour sans rechargement.',
  },
  {
    title: 'Logiciel en ligne, produit SaaS',
    text: 'Une application avec des abonnés, des paiements récurrents, des factures, des rôles et une interface soignée. J’en exploite une moi-même, Invoicer, et je sais ce que coûte un produit qui doit tenir tous les jours de l’année.',
  },
  {
    title: 'Reprise et montée de version',
    text: 'Une application Symfony 3 ou 4 développée par une agence disparue, plus personne pour la faire évoluer, et une version de PHP qui n’est plus maintenue. J’audite le code et les dépendances, je monte vers une LTS maintenue, puis les évolutions reprennent sur une base saine.',
  },
]

export const STACK = [
  'Symfony en version LTS, PHP récent, Doctrine pour la base de données, et les composants Symfony plutôt que des bibliothèques exotiques, pour qu’un autre développeur s’y retrouve.',
  'API Platform quand il faut une API, Mercure quand il faut du temps réel, Symfony Console pour les traitements planifiés et les imports.',
  'Twig pour les interfaces classiques, React et Next.js quand l’interface demande plus : Invoicer tourne sur Symfony 7.4 derrière un front Next.js 16.',
  'Code versionné sur Git, déploiements automatisés sur une pré-production protégée, images Docker scannées avant d’être déployées.',
  'Hébergement sur mes serveurs en France, supervisés et sauvegardés chaque nuit, ou sur votre infrastructure si vous en avez une.',
]

export const STEPS = [
  {
    title: 'Atelier et spécifications',
    text: 'Nous partons de votre processus réel, pas d’une liste de fonctionnalités. Qui fait quoi, dans quel ordre, avec quelles exceptions. J’écris les spécifications si vous n’en avez pas, et le devis les suit poste par poste.',
  },
  {
    title: 'Architecture et écrans',
    text: 'Modèle de données, rôles, échanges avec vos autres logiciels. Ludovic Boussion dessine les écrans sur Figma ou Adobe XD quand l’interface le mérite ; pour un outil interne, des maquettes simples validées ensemble suffisent souvent.',
  },
  {
    title: 'Développement par lots',
    text: 'Un premier périmètre utilisable en quelques semaines, puis des lots testés sur pré-production avant chaque mise en ligne. Vous utilisez l’application pendant qu’elle se construit, et ce que vous découvrez à l’usage entre dans le lot suivant.',
  },
  {
    title: 'Mise en production et reprise des données',
    text: 'Import de l’existant, tableurs compris, formation des utilisateurs, bascule planifiée. Rien ne se perd en route.',
  },
  {
    title: 'Maintenance',
    text: 'Mises à jour de Symfony et des dépendances, surveillance, sauvegardes, correctifs et évolutions. Une application métier vit des années, elle a besoin de quelqu’un qui la connaît.',
  },
]

export const FAQ = [
  {
    question: 'Symfony ou WordPress pour mon projet ?',
    answer:
      'WordPress quand le cœur du projet est du contenu que vous publiez vous-même. Symfony quand le cœur est un processus métier : gestion de commandes, extranet client, outil interne, API reliée à d’autres logiciels. Les deux peuvent cohabiter, par exemple un site WordPress adossé à une application Symfony.',
  },
  {
    question: 'Combien coûte une application métier sur mesure ?',
    answer:
      'Tout dépend du périmètre, et c’est pour ça que je commence par un atelier et des spécifications écrites. Le devis est chiffré poste par poste, découpé en lots, et le premier lot utilisable se situe en général en quelques semaines de travail. Vous savez ce que coûte chaque fonctionnalité et vous décidez de l’ordre.',
  },
  {
    question: 'Freelance ou agence Symfony : quelle différence ?',
    answer:
      'Avec moi, la personne qui spécifie l’application est celle qui la développe, l’héberge et la maintient. Pas de chef de projet entre nous, pas de développeur junior qui change en cours de route. Pour le design, Ludovic Boussion, graphiste UI/UX, intervient quand l’interface le demande. Et je travaille aussi en renfort d’agences, en marque blanche.',
  },
  {
    question: 'Pouvez-vous reprendre une application Symfony existante ?',
    answer:
      'Oui. Je commence par un audit du code, des dépendances et de la version de Symfony, puis je propose une montée de version vers une LTS maintenue avant toute évolution fonctionnelle. Les applications en Symfony 3 ou 4 sont les cas les plus fréquents.',
  },
  {
    question: 'Combien de temps dure le développement d’une application ?',
    answer:
      'Un premier périmètre utilisable est livré en quelques semaines, puis l’application évolue par lots, chacun testé sur pré-production avant sa mise en ligne. Le découpage est défini avec vous au démarrage, à partir d’un cahier des charges ou d’un atelier.',
  },
  {
    question: 'Symfony ou Laravel ?',
    answer:
      'Les deux sont de bons frameworks PHP. Je développe avec Symfony depuis 2012 parce que ses versions LTS, ses composants et API Platform conviennent aux applications qui doivent durer et s’interfacer avec d’autres systèmes. Si vous avez déjà une application Laravel, je peux la reprendre, mais je ne vous ferai pas migrer pour le plaisir.',
  },
  {
    question: 'Où est hébergée l’application ?',
    answer:
      'Sur mes serveurs en France, supervisés et sauvegardés chaque nuit, ou sur votre infrastructure si vous en avez une. Les données ne quittent pas le pays, ce qui simplifie votre conformité au RGPD.',
  },
  {
    question: 'Intervenez-vous pour des agences ?',
    answer:
      'Oui, en renfort Symfony sur une mission ou dans la durée : API, back-office, connecteurs, montées de version. Je m’intègre à vos outils et vos clients ne voient que vous.',
  },
]
