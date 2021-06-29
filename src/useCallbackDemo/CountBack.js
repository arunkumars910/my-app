import React from 'react'

function CountBack({text,count}) {
    console.log(`Count Rendering ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(CountBack)
