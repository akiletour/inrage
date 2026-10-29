import { notFound } from 'next/navigation'

export const metadata = {
  title: 'Page introuvable | inRage',
  robots: { index: false, follow: false },
}

export default function CatchAll() {
  notFound()
}
