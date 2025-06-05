import Link from 'next/link'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">About This Site</h1>
        <p className="text-xl mb-8 text-center">This is a simple website built with Next.js and Tailwind CSS.</p>
        <div className="flex justify-center">
          <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
