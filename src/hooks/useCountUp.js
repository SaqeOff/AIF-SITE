import { useEffect, useState } from 'react'

export function useCountUp(end, duration = 2000, start = 0, trigger = true) {
    const [count, setCount] = useState(start)

    useEffect(() => {
        if (!trigger) return

        let startTime = null
        let animationFrame

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)

            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(easeOut * (end - start) + start))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [trigger, end, duration, start])

    return count
}
