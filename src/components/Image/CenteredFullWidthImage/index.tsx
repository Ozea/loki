import Image from 'next/image'

export const CenteredFullWidthImage = ({
  imageUrl = '/api/placeholder/1200/800',
  altText = 'Centered image',
  priority = true,
  maxWidth = 'max-w-4xl',
  containerClasses = '',
  imageClasses = '',
  width = 1200,
  height = 800,
}) => {
  return (
    <section className={`w-full flex justify-center ${containerClasses}`}>
      <div className={`relative w-full ${maxWidth} px-4 sm:px-6 lg:px-8`}>
        <Image
          src={imageUrl}
          alt={altText}
          width={width}
          height={height}
          priority={priority}
          className={`w-full h-auto ${imageClasses}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
        />
      </div>
    </section>
  )
}
