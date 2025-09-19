"use client"

import { motion, useScroll } from "motion/react"

export function ScrollLinked() {
    const { scrollYProgress } = useScroll()

    return (
        <>
            <motion.div
                id="scroll-indicator"
                className="bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: "64px",
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    backgroundColor: "",
                    zIndex:50,
                }}
            />
        </>
    )
}

export default function Gestures() {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={box}
        />
    )
}

