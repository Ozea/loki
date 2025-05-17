import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-12 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-12">
        {/* Logo and Tagline */}
        <div>
          <div className="flex items-center mb-4">
            <div className="mr-2">
              <Image src="/logo.svg" alt="Footer Logo" width={60} height={60} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">LOKI</h2>
              <p className="text-xs text-gray-600">Beyond Brands, We Build Status</p>
            </div>
          </div>
          <p className="text-gray-700 mt-6 max-w-md">Companies that can help you in developing your company for the future</p>
        </div>

        {/* Services - Column 1 */}
        <div className="md:ml-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Services</h3>

          <div className="flex gap-10">
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  UI/UX Designer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Branding
                </a>
              </li>
            </ul>

            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  SMM
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm mb-4 md:mb-0">© 2025 LOKI. All rights reserved.</p>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          {/* Policy Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-900">
            <Image src="/instagram.svg" alt="Instagram" width={25} height={25} className="text-white" />
          </a>
          <a href="#" aria-label="Email" className="text-gray-600 hover:text-gray-900">
            <Image src="/email.svg" alt="Email" width={25} height={25} className="text-white" />
          </a>
        </div>
      </div>
    </footer>
  )
}
