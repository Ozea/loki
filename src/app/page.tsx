import { GradientButton } from '@/components/Button/Gradient'
import Header from '@/components/Header'
import { DesignApproach } from '@/containers/DesignApproach'
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
      </main>
    </div>
  )
}
