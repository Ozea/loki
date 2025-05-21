import Image from 'next/image'
import Link from 'next/link'
import { AnchorHTMLAttributes, PropsWithChildren } from 'react'

export function GradientButton({ children, linkProps }: PropsWithChildren<{ linkProps: AnchorHTMLAttributes<HTMLAnchorElement> }>) {
  return (
    <Link
      href={linkProps.href || '#'}
      className="inline-flex gradient-btn items-center px-6 py-2 rounded-full text-black hover:bg-blue-50 transition"
      {...linkProps}
    >
      <span className="mr-2">{children}</span>
      <Image src="/arrow-up.svg" alt="Arrow Right" width={20} height={20} className="ml-2" />
    </Link>
  )
}
