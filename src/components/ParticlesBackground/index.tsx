'use client'

import { useCallback, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticlesBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (!init) {
    return <></>
  }

  return (
    // <Particles
    //   id="tsparticles"
    //   options={{
    //     fullScreen: {
    //       enable: false,
    //     },
    //     background: {
    //       color: {
    //         value: 'transparent',
    //       },
    //     },
    //     fpsLimit: 60,
    //     interactivity: {
    //       events: {
    //         onHover: {
    //           enable: true,
    //           mode: 'grab',
    //         },
    //         resize: {
    //           enable: true,
    //         },
    //       },
    //       modes: {
    //         grab: {
    //           distance: 140,
    //           links: {
    //             opacity: 0.5,
    //           },
    //         },
    //       },
    //     },
    //     particles: {
    //       color: {
    //         value: '#7e22ce',
    //       },
    //       links: {
    //         color: '#ec4899',
    //         distance: 150,
    //         enable: true,
    //         opacity: 0.3,
    //         width: 1,
    //       },
    //       move: {
    //         direction: 'none',
    //         enable: true,
    //         outModes: {
    //           default: 'bounce',
    //         },
    //         random: false,
    //         speed: 1,
    //         straight: false,
    //       },
    //       number: {
    //         density: {
    //           enable: true,
    //           height: 800,
    //         },
    //         value: 80,
    //       },
    //       opacity: {
    //         value: 0.5,
    //       },
    //       shape: {
    //         type: 'circle',
    //       },
    //       size: {
    //         value: { min: 1, max: 3 },
    //       },
    //     },
    //     detectRetina: true,
    //   }}
    // />

    <Particles
      id="tsparticles"
      className="h-full "
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ['#ABA7F9', '#4ca48a', '#4494B9', '#171748'],
          },
          links: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              height: 800,
            },
            value: 60,
          },
          opacity: {
            value: {
              min: 0.1,
              max: 0.4,
            },
            animation: {
              enable: true,
              speed: 1,
              startValue: 'random',
              sync: false,
            },
          },
          shape: {
            type: ['circle', 'star', 'polygon'],
            options: {
              star: {
                sides: 5,
              },
              polygon: {
                sides: 6,
              },
            },
          },
          size: {
            value: {
              min: 1,
              max: 4,
            },
            animation: {
              enable: true,
              speed: 2,
              startValue: 'random',
              sync: false,
            },
          },
          twinkle: {
            lines: {
              enable: true,
              frequency: 0.05,
              opacity: 0.7,
            },
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
