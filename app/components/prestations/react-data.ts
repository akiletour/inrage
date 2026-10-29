import { RouteLink } from '@lib/router'

export const CASES = [
  {
    title: 'Interface d’application : tableau de bord, back-office, SaaS',
    text: 'Quand l’utilisateur passe sa journée dans l’outil, l’interface doit répondre instantanément, se mettre à jour sans recharger et rester lisible sous la charge. React est fait pour ça. Invoicer, le logiciel de facturation que j’édite, est une interface Next.js posée sur une API Symfony.',
  },
  {
    title: 'Site Next.js rapide et référencé',
    text: 'Un site qui doit charger en moins d’une seconde, être parfaitement lu par Google et piloter ses contenus depuis WordPress en mode headless ou depuis des fichiers. Next.js rend les pages côté serveur, ce que ne fait pas une application React classique. Le site que vous lisez est construit ainsi, et son code est public.',
    href: 'https://github.com/akiletour/inrage',
    hrefText: 'Le code de ce site sur GitHub',
  },
  {
    title: 'Application mobile React Native',
    text: 'Une application iOS et Android à partir d’une seule base de code, qui partage l’API et la logique de la partie web. Pour un commerce, une association, un outil de terrain pour vos équipes. Vous gardez un seul interlocuteur pour le site, l’application et le serveur derrière.',
  },
  {
    title: 'Front sur une API existante',
    text: 'Vous avez déjà un back-office Symfony, un Prestashop, un WordPress ou un logiciel métier avec une API. Je construis l’interface React qui les exploite, REST ou GraphQL, avec Mercure quand il faut du temps réel. Et quand l’API n’existe pas, je la construis en Symfony.',
    href: RouteLink.prestationSymfony,
    hrefText: 'Développement d’API avec Symfony',
  },
  {
    title: 'Reprise et modernisation',
    text: 'Une application React ou Angular de 2018 que plus personne n’ose mettre à jour, un site jQuery qui plafonne, un front qui ne passe pas Lighthouse. J’audite, je migre vers Next.js et TypeScript par étapes, et je mesure les gains avant et après.',
  },
]

export const PROOFS = [
  {
    title: 'Invoicer',
    text: 'Logiciel de facturation pour auto-entrepreneurs : Next.js 16 et React 19 côté interface, Symfony 7.4 côté API. Stripe Connect, Bridge, Pennylane. Des abonnés qui l’utilisent tous les jours depuis 2017.',
    image: 'invoicer',
    href: RouteLink.portfolioProject('application-web', 'invoicer'),
  },
  {
    title: 'Outil de picking d’entrepôt',
    text: 'Application mobile en React et Redux pour les préparateurs de commandes de Parapharmacie Moins Chère : plan de l’entrepôt, emplacements des produits, expéditions, base de données temps réel.',
    image: 'picking',
    href: RouteLink.portfolioProject(
      'application-web',
      'outil-de-picking-dentrepot'
    ),
  },
  {
    title: 'Ce site',
    text: 'Next.js 16, Tailwind, contenus en MDX, animations GSAP, déployé en conteneur sur mon infrastructure. Le code source est public, erreurs comprises.',
    image: 'site',
    href: 'https://github.com/akiletour/inrage',
  },
]

export const STACK = [
  'TypeScript partout, React et Next.js à jour, Tailwind pour les styles : des choix courants, documentés, qu’un autre développeur reprend sans formation.',
  'Rendu côté serveur ou statique avec Next.js quand le référencement compte, application cliente quand l’interface prime, React Native quand il faut un téléphone.',
  'Accessibilité RGAA et responsive dès la maquette, performance mesurée avec Lighthouse avant chaque mise en ligne.',
  'Tracking Google Tag Manager et GA4 branché proprement côté code, avec le consentement géré, pour que vos données soient justes.',
  'Code versionné sur Git, déploiements automatisés sur une pré-production protégée, images Docker scannées, hébergement sur mes serveurs en France ou sur votre infrastructure.',
]

export const STEPS = [
  {
    title: 'Cadrage',
    text: 'Ce que l’interface doit permettre, pour qui, sur quels appareils, avec quelle API derrière. Le devis arrive sous 24 heures, découpé en lots.',
  },
  {
    title: 'Maquettes et parcours',
    text: 'Ludovic Boussion, graphiste UI/UX, dessine les écrans et les parcours sur Figma ou Adobe XD. Pour une application, c’est l’étape qui évite le plus de retours.',
  },
  {
    title: 'Développement par lots',
    text: 'Un premier périmètre utilisable en quelques semaines sur une pré-production protégée, puis des lots que vous testez au fur et à mesure.',
  },
  {
    title: 'Mise en ligne',
    text: 'Déploiement, nom de domaine, tracking, redirections si vous remplacez un site existant. Pour une application mobile, préparation de la publication sur les stores.',
  },
  {
    title: 'Suivi',
    text: 'Mises à jour de React, Next.js et des dépendances, surveillance, correctifs et évolutions. Un front vit avec son API, je suis les deux.',
  },
]

export const FAQ = [
  {
    question: 'React ou WordPress pour mon site ?',
    answer:
      'WordPress quand le site est d’abord un support de contenus que vous publiez vous-même et que le budget est celui d’un site vitrine. React et Next.js quand l’interface est le produit : application, tableau de bord, site qui doit charger instantanément ou piloter des contenus depuis plusieurs sources. Les deux se combinent : WordPress en back-office, Next.js devant.',
  },
  {
    question: 'Qu’apporte Next.js par rapport à React seul ?',
    answer:
      'Le rendu côté serveur et la génération statique : vos pages existent en HTML avant que le navigateur n’exécute un script, donc Google les lit et elles s’affichent vite. Next.js apporte aussi le routage, l’optimisation des images et des polices, et un cadre de déploiement propre. Pour un site public, c’est la bonne base.',
  },
  {
    question: 'Combien coûte une application React ou Next.js ?',
    answer:
      'Tout dépend du nombre d’écrans et de ce qu’il y a derrière. Je chiffre poste par poste après un cadrage, découpé en lots, et le premier lot utilisable représente en général quelques semaines de travail. Vous décidez de l’ordre et vous pouvez arrêter après chaque lot.',
  },
  {
    question: 'React Native ou une application native ?',
    answer:
      'React Native couvre iOS et Android avec une seule base de code et partage la logique avec votre application web : c’est le bon choix pour la plupart des applications métier, de commerce ou d’association. Une application native se justifie pour des besoins très spécifiques au matériel, et je vous le dirai si c’est votre cas.',
  },
  {
    question: 'Pouvez-vous reprendre une application React existante ?',
    answer:
      'Oui. J’audite le code, les dépendances et les performances, puis je propose un plan par étapes : montée de version, passage à TypeScript, migration vers Next.js si le référencement ou la vitesse le demandent. Les évolutions reprennent sur une base saine.',
  },
  {
    question: 'Une application React est-elle bien référencée ?',
    answer:
      'Une application React classique est rendue dans le navigateur et se référence mal. Avec Next.js, les pages sont rendues côté serveur ou générées à l’avance, avec les balises, les données structurées et les performances attendues par Google. Ce site en est la démonstration.',
  },
  {
    question: 'Travaillez-vous avec des agences ?',
    answer:
      'Oui, en renfort React, Next.js ou React Native, en marque blanche : à partir de vos maquettes, dans votre dépôt et vos outils, sur une mission ou dans la durée. Vos clients ne voient que vous.',
  },
  {
    question: 'Intervenez-vous à La Rochelle ou à distance ?',
    answer:
      'Les deux. Je suis basé à La Rochelle et je travaille avec des entreprises de Charente-Maritime comme avec des groupes et des agences partout en France, en visio et sur vos outils. Je me déplace quand le projet le justifie.',
  },
]
