import { CLIENTS } from './data'

export default function ClientsMarquee() {
  return (
    <div className="home-marquee mt-12" aria-label="Clients">
      <div className="home-marquee-track">
        {[...CLIENTS, ...CLIENTS].map((client, i) => (
          <span
            key={`${client}-${i}`}
            className="flex items-center gap-12 text-2xl font-medium whitespace-nowrap text-white/85 md:text-3xl"
            aria-hidden={i >= CLIENTS.length ? true : undefined}
          >
            {client}
            <span className="home-dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
