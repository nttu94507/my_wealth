"use client"

import React, { useEffect } from "react"

const AdsBenner = ({ dataAdSlot, dataAdFormat, dataFullWidthResponsive }) => {
    return (

        useEffect(() => {
            try {
                ((window.adsbygoogle = window.adsbygoogle || [])).push(
                    {}
                );
            } catch (error) {
                console.log(error.messgae)
            }

        }, []),

        <ins
            className='adsbygoogle'
            style={{ display: 'block' }}
            data-ad-client="ca-pub-3603375896756600"
            data-ad-slot="5155409746"
            data-ad-format="auto"
            data-full-width-responsive="true"
        >
        </ins>
    )
}

export default AdsBenner