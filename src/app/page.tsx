import Home from '@/containers/Home'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Branding, Web & Graphic Designer in Ireland | Remote Services',
  description:
    'Creative designer offering branding, web design, marketing, and graphic services. Based in Ireland. Available for remote freelance and contract work.',
}

export default function HomePage() {
  return <Home />
}
