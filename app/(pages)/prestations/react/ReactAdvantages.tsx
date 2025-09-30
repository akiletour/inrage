import NextJsAdvantageCard from '@component/items/NextJsAdvantageCard'

export default function ReactAdvantages() {
  const advantages = [
    {
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
        </svg>
      ),
      title: 'Performance Optimisée',
      description:
        'Next.js offre des optimisations automatiques avec le SSR, SSG et le code splitting pour des temps de chargement ultra-rapides.',
      highlight: 'Core Web Vitals',
    },
    {
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: 'SEO Natif',
      description:
        'Le rendu côté serveur et la génération statique garantissent une indexation parfaite par les moteurs de recherche.',
      highlight: 'Google Ready',
    },
    {
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      ),
      title: 'Scalabilité',
      description:
        'Architecture composants modulaire permettant de faire évoluer facilement vos applications avec votre business.',
      highlight: 'Enterprise Ready',
    },
    {
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.24C15.24 5.9 15 6.32 15 7V9H21ZM3 23H5L14 13.91V22H8V19H6V22H0V19C0 18.46 0.22 17.94 0.61 17.55L7.05 11.1L7.55 12.1H9V14C9 14.55 8.78 15.05 8.39 15.44L6 17.83V19H8V16.5L9.5 15H11.24L3 23Z" />
        </svg>
      ),
      title: 'Développement Moderne',
      description:
        'TypeScript intégré, Hot Module Replacement et outils de développement avancés pour une productivité maximale.',
      highlight: 'Developer Experience',
    },
    {
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: 'Écosystème Riche',
      description:
        'Vaste communauté, librairies maintenues et intégrations tierces pour accélérer le développement.',
      highlight: 'Open Source',
    },
    {
      icon: (
        <svg
          className="w-16 h-16 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z" />
        </svg>
      ),
      title: 'Responsive Design',
      description:
        "Composants adaptatifs par défaut et optimisations mobiles intégrées pour toutes les tailles d'écran.",
      highlight: 'Mobile First',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
      {advantages.map((advantage, index) => (
        <div
          key={index}
          className="animate-in slide-in-from-bottom-4 duration-700"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <NextJsAdvantageCard
            icon={advantage.icon}
            title={advantage.title}
            description={advantage.description}
            highlight={advantage.highlight}
          />
        </div>
      ))}
    </div>
  )
}
