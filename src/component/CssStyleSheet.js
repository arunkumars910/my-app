import React from 'react'
import style from '../css/applyStyles.module.css'

const headingStyles={
    fontSize:'50px',
    color:'blue'
}

function CssStyleSheet({primary}) {
    const css=primary?'primary':'primary2'
    return (
        <div>
            <h1 className={`${css} font-xl`}>CSS styles is applied</h1>
            <h1 className={style.success}>render css module styles</h1>

            <h1 style={headingStyles}>Inline Styles</h1>
        </div>
    )
}

export default CssStyleSheet


//var=true? pick true: pick false