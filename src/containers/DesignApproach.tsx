import Image from 'next/image'

export function DesignApproach() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center text-center mb-5">
        <span className="gradient-background text-center block h-[5px] w-[70px] bg-black" />
        <h2 className="text-3xl font-bold px-5 mb-12 text-gray-900 text-center mt-3">
          My design and <br />
          <span className="font-normal">
            development <span className="text-gradient font-bold">apporach</span>
          </span>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logo Design */}
        <div className="bg-[#FAFAFA] rounded-xl p-8 shadow-sm">
          <div className="flex items-start">
            <div className="bg-[#ABA7F9] p-2 rounded-lg mr-4">
              <Image src="/logo-design-approach.svg" alt="Website Design" width={125} height={125} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Logo Design</h2>
              <p className="text-gray-600">
                I create lasting first impressions with unique and professional logos. My custom logo design services capture the essence of your
                brand, ensuring your visual identity is both memorable and meaningful.
              </p>
            </div>
          </div>
        </div>

        {/* Branding */}
        <div className="bg-[#FAFAFA] rounded-xl p-8 shadow-sm">
          <div className="flex items-start">
            <div className="bg-[#6CE4C0] p-2 rounded-lg mr-4">
              <Image src="/branding-approach.svg" alt="Website Design" width={125} height={125} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Branding</h2>
              <p className="text-gray-600">
                I build strong, memorable brand identities. My comprehensive branding services ensure your business stands out with a cohesive and
                impactful brand strategy that resonates with your target audience.
              </p>
            </div>
          </div>
        </div>

        {/* UI/UX Design */}
        <div className="bg-[#FAFAFA] rounded-xl p-8 shadow-sm">
          <div className="flex items-start">
            <div className="bg-[#4494B9] p-2 rounded-lg mr-4">
              <Image src="/ui-ux-design-approach.svg" alt="Website Design" width={125} height={125} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">UI/UX Design</h2>
              <p className="text-gray-600">
                I enhance user satisfaction with intuitive and engaging interfaces. My UI/UX design services focus on creating seamless and enjoyable
                user experiences that keep your audience coming back.
              </p>
            </div>
          </div>
        </div>

        {/* Graphic Design */}
        <div className="bg-[#FAFAFA] rounded-xl p-8 shadow-sm">
          <div className="flex items-start">
            <div className="bg-[#ABA7F9] p-2 rounded-lg mr-4">
              <Image src="/graphic-design-approach.svg" alt="Website Design" width={125} height={125} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Graphic Design</h2>
              <p className="text-gray-600">
                I create visually compelling designs that capture attention and communicate your brand&apos;s message effectively. From logos to marketing
                materials, my designs ensure consistency and professionalism across all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Management - Centered in a new row */}
      <div className="mt-8 flex justify-center">
        <div className="bg-[#FAFAFA] rounded-xl p-8 shadow-sm max-w-2xl">
          <div className="flex items-start">
            <div className="bg-[#4494B9] p-2 rounded-lg mr-4">
              <Image src="/social-media-approach.svg" alt="Website Design" width={125} height={125} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Social Media Management</h2>
              <p className="text-gray-600">
                I develop content and strategies that drive growth and interaction on TikTok and Instagram. By crafting creative posts, trends, and
                campaigns, I help brands connect with their audience and build a strong online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
