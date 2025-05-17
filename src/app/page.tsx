import { GradientButton } from '@/components/Button/Gradient'
import Header from '@/components/Header'
import { DesignApproach } from '@/containers/DesignApproach'
import Footer from '@/containers/Footer'
import WorkExperience from '@/containers/WorkExperience'
import WorkTogether from '@/containers/WorkTogether'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-white flex flex-col text-black">
      <Header />

      <main>
        <section className="min-h-screen flex items-center container mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Making Your Brand <span className="text-transparent bg-clip-text text-gradient">Shine</span>
                <br />
                <span className="font-normal">
                  with Great <span className="text-transparent bg-clip-text text-gradient font-bold">Design</span>
                </span>
              </h1>
              <p className="mb-8 max-w-lg">
                Specialising in Branding, Graphic Design, Logo Creation, Custom Web Design and Marketing Social media for Modern Businesses.
              </p>

              <GradientButton href="/get-started">Get Started</GradientButton>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-full">
                <Image src="/hero-image.svg" alt="Hero Image" width={600} height={400} className="w-full h-auto" priority />
              </div>
            </div>
          </div>
        </section>

        <WorkExperience />

        <WorkTogether />

        <DesignApproach />

        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-700 mb-6">
                Let&apos;s work together{' '}
                <span className="whitespace-nowrap font-normal">
                  with <span className="text-gradient">me</span>
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Based in Dublin, Ireland, I help businesses create impactful brands and social media strategies. Let's bring your vision to life with
                designs and content that make a lasting impression!
              </p>
            </div>

            <div className="w-full md:w-auto">
              <GradientButton href="/get-started">Get Started</GradientButton>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}
