export const PLEDGES = [
  {
    title: 'Aucune donnée ne quitte le pays',
    text: 'Fichiers, base de données, sauvegardes, journaux : tout est stocké sur des serveurs situés en France. Pas de copie chez un géant américain, pas de transfert vers un sous-traitant hors d’Europe. Votre conformité au RGPD s’en trouve simplifiée.',
  },
  {
    title: 'Aucune dépendance à un hyperscaler',
    text: 'L’infrastructure est administrée par inRage, sous Debian, sur des machines que je gère moi-même, pas louée sur une plateforme dont les conditions changent chaque année. Vous savez où sont vos données et qui y a accès.',
  },
  {
    title: 'Un humain, à La Rochelle',
    text: 'Pas de ticket dans une file d’attente. Celui qui répond au téléphone est celui qui a construit votre site et qui surveille ses serveurs, jour et nuit. L’état de l’infrastructure est public, en temps réel, sur status.inrage.fr.',
  },
]

export const PATH = [
  {
    title: 'Le bouclier',
    tools: 'CrowdSec, pare-feu',
    text: 'Les adresses malveillantes signalées par des milliers de serveurs dans le monde sont bloquées avant d’atteindre votre site. Les robots indésirables et les tentatives d’intrusion n’arrivent jamais jusqu’à WordPress ou Prestashop.',
  },
  {
    title: 'Les serveurs',
    tools: 'Docker Swarm, Kubernetes, Debian',
    text: 'Votre site tourne en conteneur sur une grappe de plusieurs machines. Si l’une tombe, les autres prennent la suite sans coupure visible. Chaque image est scannée avec Trivy avant d’être déployée, et un robot vérifie chaque minute que le site répond.',
  },
  {
    title: 'Le coffre',
    tools: 'Sauvegardes séparées, en France',
    text: 'Chaque nuit, une copie complète des fichiers et de la base de données part sur un espace distinct, conservée plusieurs semaines. Les machines elles-mêmes sont sauvegardées, et les restaurations sont testées, pas seulement stockées.',
  },
]

export const COMPARISON = [
  {
    criteria: 'Interlocuteur',
    generic: 'Un support par tickets, séparé de votre développeur',
    inrage: 'La même personne développe, héberge et maintient votre site',
  },
  {
    criteria: 'Supervision',
    generic: 'À votre charge, ou en option',
    inrage: 'Incluse, chaque minute, avec intervention en cas d’alerte',
  },
  {
    criteria: 'Sauvegardes',
    generic: 'Souvent en option, restauration payante',
    inrage: 'Chaque nuit, conservées à part, restauration comprise',
  },
  {
    criteria: 'Panne matérielle',
    generic: 'Site indisponible le temps de la réparation',
    inrage: 'Un autre serveur de la grappe prend le relais',
  },
  {
    criteria: 'Sécurité',
    generic: 'Pare-feu de base',
    inrage: 'Pare-feu, CrowdSec, images scannées avec Trivy',
  },
  {
    criteria: 'Mises à jour du serveur',
    generic: 'À votre charge sur un VPS, figées sur un mutualisé',
    inrage: 'Système, PHP et base de données maintenus chaque semaine',
  },
  {
    criteria: 'Espace de test',
    generic: 'Rarement prévu',
    inrage: 'Une pré-production pour essayer avant de publier',
  },
  {
    criteria: 'Localisation des données',
    generic: 'Variable, parfois hors d’Europe',
    inrage: 'France uniquement, sauvegardes comprises',
  },
  {
    criteria: 'Réglages',
    generic: 'Configuration générique',
    inrage: 'Serveurs réglés pour WordPress, Prestashop, React et Symfony',
  },
]

export const FAQ = [
  {
    question: 'Où sont hébergées mes données ?',
    answer:
      'En France, uniquement. Les serveurs qui font tourner votre site, ceux qui conservent vos sauvegardes et les outils de supervision sont tous situés sur le territoire français. Aucune donnée n’est transférée à l’étranger.',
  },
  {
    question: 'Combien coûte l’hébergement ?',
    answer:
      'Le tarif dépend de la taille de votre site, de son trafic et de vos besoins. Il est établi sur devis, gratuitement et sous 24 heures, et il est souvent couplé à un forfait de maintenance pour couvrir aussi les mises à jour du site lui-même.',
  },
  {
    question: 'Hébergez-vous uniquement les sites que vous avez créés ?',
    answer:
      'Non. J’héberge aussi des sites WordPress, Prestashop, React ou Symfony développés par d’autres, après un audit rapide pour vérifier qu’ils sont sains et compatibles avec un déploiement en conteneur.',
  },
  {
    question: 'Que se passe-t-il si mon site est attaqué ?',
    answer:
      'La plupart des attaques sont bloquées avant d’atteindre votre site par CrowdSec et le pare-feu. Si une tentative passe malgré tout, je suis alerté, j’interviens et, au pire, je restaure la sauvegarde de la veille. En octobre 2026, une faille PHP sous embargo a été corrigée sur tout le parc en une nuit.',
  },
  {
    question: 'Puis-je changer d’hébergeur plus tard ?',
    answer:
      'Oui. Vous restez propriétaire de votre site, de vos données et de votre nom de domaine, qui reste à votre nom. Si vous partez, je vous remets une copie complète et je facilite la transition.',
  },
]
