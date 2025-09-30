import CTASection from '@component/ui/CTASection'

export default function LocalAdvantagesCTA() {
  return (
    <CTASection
      title="Pourquoi choisir un développeur e-commerce local à La Rochelle ?"
      className="relative"
    >
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        <div className="space-y-8">
          <h3 className="font-semibold text-orange text-lg lg:text-xl">Proximité et disponibilité</h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-light leading-relaxed">
            Basé à La Rochelle, je suis disponible pour des rendez-vous en présentiel dans toute la Charente-Maritime.
            Cette proximité facilite les échanges et garantit une meilleure compréhension de vos enjeux business.
          </p>
        </div>
        <div className="space-y-8">
          <h3 className="font-semibold text-orange text-lg lg:text-xl">Expertise technique avancée</h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-light leading-relaxed">
            7 ans d&apos;expérience en développement e-commerce avec une spécialisation sur les migrations complexes
            et les optimisations de performance. Code propre et maintenable garanti.
          </p>
        </div>
      </div>
    </CTASection>
  )
}