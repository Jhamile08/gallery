import { useEffect, useRef } from 'react'

/** Duracion de una vuelta completa, en ms. Debe coincidir con gallery.css. */
const ORBIT_MS = 2200
/** Desfase maximo entre la pieza mas central y la mas lejana, en ms. */
const MAX_STAGGER_MS = 260
/**
 * Radio maximo de la orbita, en px. Sin tope, las piezas de las esquinas
 * giran a ~900px del centro y pasan media animacion fuera de cuadro. Con el
 * tope, cada pieza orbita un punto que esta a lo sumo a esta distancia en
 * direccion al centro del collage: todas quedan a la vista y giran al unisono.
 * Subelo para un barrido mas amplio.
 */
const MAX_RADIUS_PX = 260

/**
 * Hace que los hijos del contenedor describan una orbita cada vez que este
 * entra en pantalla, y terminen exactamente en su posicion original.
 *
 * Cada hijo gira alrededor de un punto situado en direccion al centro del
 * contenedor (a MAX_RADIUS_PX como mucho), de modo que todas las piezas giran
 * al unisono y el conjunto se lee como un remolino alrededor de la galeria.
 *
 * El giro lo resuelve CSS (ver `.collage.is-orbiting` en gallery.css); aqui
 * solo se mide ese vector por hijo y se publica como variables CSS.
 */
export function useOrbitOnEnter<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    // Bajo 800px el collage es un mosaico vertical: orbitar ahi mandaria las
    // piezas lejisimos y no aporta nada.
    const compact = window.matchMedia('(max-width: 800px)')

    const measure = () => {
      const children = Array.from(container.children) as HTMLElement[]
      const box = container.getBoundingClientRect()
      const centerX = box.left + box.width / 2
      const centerY = box.top + box.height / 2

      const offsets = children.map((el) => {
        const rect = el.getBoundingClientRect()
        const x = centerX - (rect.left + rect.width / 2)
        const y = centerY - (rect.top + rect.height / 2)
        const distance = Math.hypot(x, y)
        // Se conserva la direccion hacia el centro, se acota la magnitud.
        const k = distance > MAX_RADIUS_PX ? MAX_RADIUS_PX / distance : 1
        return { el, x: x * k, y: y * k, distance }
      })

      const farthest = Math.max(...offsets.map((o) => o.distance), 1)

      for (const { el, x, y, distance } of offsets) {
        el.style.setProperty('--orbit-x', `${x}px`)
        el.style.setProperty('--orbit-y', `${y}px`)
        // Las piezas del borde salen un poco despues: deja una estela.
        el.style.setProperty(
          '--orbit-delay',
          `${Math.round((distance / farthest) * MAX_STAGGER_MS)}ms`
        )
      }
    }

    let timer: number | undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // Al salir se limpia, para que la orbita se repita en la proxima visita.
          container.classList.remove('is-orbiting')
          return
        }
        if (reduceMotion.matches || compact.matches) return
        if (container.classList.contains('is-orbiting')) return

        measure()
        container.classList.add('is-orbiting')

        // Terminada la vuelta, se suelta el will-change de los hijos.
        window.clearTimeout(timer)
        timer = window.setTimeout(() => {
          container.classList.remove('is-orbiting')
        }, ORBIT_MS + MAX_STAGGER_MS)
      },
      { threshold: 0.2 }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
      window.clearTimeout(timer)
    }
  }, [])

  return ref
}
