import Image from 'next/image'

export function Illustrations() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="col-span-1">
            <div className="h-75 w-full shadow-md cursor-pointer relative overflow-hidden">
              <Image src="/visual-designs/ill-1.png" alt="Column 1 Cell 1" fill className="object-cover hover:scale-[1.075] duration-200" />
            </div>
          </div>

          <div className="col-span-1">
            <div className="h-75 lg:h-70 w-full shadow-md cursor-pointer relative overflow-hidden">
              <Image src="/visual-designs/ill-2.png" alt="Column 2 Cell 1" fill className="object-cover hover:scale-[1.075] duration-200" />
            </div>
          </div>

          <div className="col-span-1">
            <div className="h-75 lg:h-70 w-full shadow-md cursor-pointer relative overflow-hidden">
              <Image src="/visual-designs/ill-3.png" alt="Column 3 Cell 1" fill className="object-cover hover:scale-[1.075] duration-200" />
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="h-75 w-full shadow-md cursor-pointer relative overflow-hidden">
              <Image src="/visual-designs/ill-4.png" alt="Column 1 Cell 2" fill className="object-cover hover:scale-[1.075] duration-200" />
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="h-80 w-full shadow-md cursor-pointer relative overflow-hidden lg:transform-[translateY(-1.25rem))]">
              <Image src="/visual-designs/ill-5.png" alt="Merged Cell" fill className="object-cover hover:scale-[1.075] duration-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
