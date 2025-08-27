"use client"

import { useEffect, useState } from 'react'

const NoSSR = ({ children }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return <>{children}</>
}

export default NoSSR
