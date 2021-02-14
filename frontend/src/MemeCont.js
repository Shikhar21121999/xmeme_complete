import React from 'react'
import MemeCmp from './MemeCmp'

export default function MeneCont({memearr,setLength}) {
    // accepts an array of memes an renders 
    // them using memecomponenet
    
    console.log(memearr)
    return (
        memearr.map(meme =>
            <MemeCmp key={meme.id} meme={meme} setLength={setLength}/>
        )
    )
}
