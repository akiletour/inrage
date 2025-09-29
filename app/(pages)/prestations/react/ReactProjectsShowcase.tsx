import ReactProjectShowcase from '@component/items/ReactProjectShowcase'

export default function ReactProjectsShowcase() {
  const projects = [
    {
      title: 'Portfolio inRage (Ce site)',
      description: 'Portfolio personnel développé entièrement avec Next.js 15, TypeScript et Tailwind CSS. Architecture moderne avec App Router, optimisations SEO et performance.',
      technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'WordPress Headless', 'GraphQL'],
      metrics: [
        { label: 'Performance', value: '95/100' },
        { label: 'SEO', value: '98/100' },
        { label: 'Accessibility', value: '94/100' }
      ],
      githubUrl: 'https://github.com/akiletour/inrage',
      codeIcon: (
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      title: 'Dashboard E-commerce',
      description: 'Interface d\'administration pour plateforme e-commerce avec gestion des commandes, statistiques en temps réel et inventaire. Développé avec React et Chart.js.',
      technologies: ['React 18', 'TypeScript', 'Chart.js', 'Material-UI', 'Redux Toolkit'],
      metrics: [
        { label: 'Utilisateurs', value: '500+' },
        { label: 'Commandes/jour', value: '2.5k' },
        { label: 'Uptime', value: '99.9%' }
      ]
    },
    {
      title: 'Application SaaS Marketing',
      description: 'Plateforme SaaS pour gestion de campagnes marketing avec analytics avancés, A/B testing et intégrations multiples. Architecture micro-frontends.',
      technologies: ['Next.js 14', 'React Query', 'Prisma', 'tRPC', 'Stripe'],
      metrics: [
        { label: 'Clients actifs', value: '1.2k' },
        { label: 'API Calls/min', value: '10k' },
        { label: 'Conversion', value: '+25%' }
      ]
    },
    {
      title: 'App Mobile React Native',
      description: 'Application mobile cross-platform pour la gestion de tâches collaboratives avec synchronisation temps réel et notifications push.',
      technologies: ['React Native', 'Expo', 'Firebase', 'TypeScript', 'Zustand'],
      metrics: [
        { label: 'Downloads', value: '15k+' },
        { label: 'Rating', value: '4.8/5' },
        { label: 'Retention', value: '78%' }
      ]
    },
    {
      title: 'Site E-commerce Mode',
      description: 'Boutique en ligne haute performance avec catalogue produits dynamique, panier avancé et checkout optimisé. Intégration Stripe et stock management.',
      technologies: ['Next.js', 'Shopify API', 'Framer Motion', 'Stripe', 'Vercel'],
      metrics: [
        { label: 'Conversion', value: '3.2%' },
        { label: 'Page Speed', value: '0.8s' },
        { label: 'Mobile Score', value: '96/100' }
      ]
    },
    {
      title: 'Plateforme Formation',
      description: 'LMS (Learning Management System) avec player vidéo personnalisé, progression tracking et certification automatique. Interface élève et formateur.',
      technologies: ['React', 'Node.js', 'Video.js', 'PostgreSQL', 'AWS S3'],
      metrics: [
        { label: 'Étudiants', value: '3.5k' },
        { label: 'Cours', value: '250+' },
        { label: 'Complétion', value: '89%' }
      ]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="animate-in slide-in-from-bottom-6 duration-700"
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <ReactProjectShowcase
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            metrics={project.metrics}
            codeIcon={project.codeIcon}
            githubUrl={project.githubUrl}
          />
        </div>
      ))}
    </div>
  )
}