import { useEffect, useRef } from 'react'

/**
 * Marca el elemento con `is-revealed` la primera vez que entra en pantalla,
 * para que CSS dispare su animacion de aparicion.
 *
 * Se revela una sola vez: el contenido no debe parpadear al volver a pasar
 * por encima. Con `prefers-reduced-motion` o sin IntersectionObserver se
 * muestra de inmediato.
 */
export function useRevealOnEnter<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = () => el.classList.add('is-revealed')

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      reveal()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        reveal()
        observer.disconnect()
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
