import VisualDesign from '@/containers/VisualDesign'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Visual Design Portfolio | Posters & Social Media | Ireland',
  description:
    'Showcasing social media designs, posters, and billboards for brands. Based in Ireland with freelance visual design services available remotely.',
}

export default function VisualDesignPage() {
  return <VisualDesign />
}
