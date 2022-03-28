import H from 'next/head'
import React from 'react'

const Head = () => {
    return (
        <H>
            <link key="font-api" rel="preconnect" href="https://fonts.googleapis.com" />
            <link key="static" rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link key="inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@471&display=swap" rel="stylesheet" />
        </H>
    )
}

export default Head