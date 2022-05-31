import React, { useLayoutEffect, useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion'
import {SideTurnTable} from './vinyl'
import {CreateVinylDimension} from './vinyl.styling'
// import {  } from 'react-'
import './vinyl.css'
import './main.css'



// <div className="hand handmove" style={handwidth}></div>
// <div className="catridge" style={catridge}></div>

function VinlyStrip(prop) {
    const dimension = prop.dimension
    const strip = {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0)",
        border: "5px solid rgba(255, 255, 255, 0.5)",
        top:`${prop.pos.top}%`,
        left:`${prop.pos.left}%`,
        content: '',
        width: `${dimension}px`,
        height: `${dimension}px`,
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
    }
    return (
        <div className="strip" style={strip}></div>
    )
}


function MainBoard(prop) {
    const [dimensions, setDimensions] = useState([])
    const [small,setSmall]= useState(true)

    const board_width = small ? 300  : 400
    
    const ong = {
        small : {
            iteration : 14,
            spacing: 15, 
            basewidth:1,
        }, 
        big : {
            iteration : 20,
            spacing: 15, 
            basewidth:1,
        }, 

        
    }

    const abubu = small ? ong.small :  ong.big
    useEffect(() => {
        const {spacing ,iteration,basewidth} = abubu
        for (let i = 0; i < iteration; i++) {
            setDimensions(dimen => {
                let newa = i * spacing + basewidth
                return [...dimen, newa]
            })
        }
    }, [])

    const [aniState,setaniState] = useState(false);

    const pos = small ? {
        left: 25,
        top:50,
    }:
    {
        left: 33.3,
        top:50,
    }


    const recordDim = {
        width:`${board_width - 100}px`,
        height:`${board_width - 100}px`,
        animationPlayState: aniState ? "running" : "paused",
    }
    let vinylDimension = CreateVinylDimension(!small)
    return (
        <div className="board glowing" style={{
            width:`${board_width}px`
        }}>
            <div className="vinyl-container" >
                {dimensions.map((dimn, i) => {
                    return <VinlyStrip key={i} dimension={dimn} pos={pos} />
                })}
                <div className="spinning-record circle backshadow" style={recordDim}>
                </div>
            </div>

            <SideTurnTable playstate={aniState} vinylDimension={vinylDimension}/>
            <p className="subbox backshadow" style={{...vinylDimension.subbox , ...{
                backgroundColor: aniState ?  "red":"green" ,
                transform:"translateX(10px)"
            }}} onClick={() => setaniState(!aniState)}>{aniState ? "ON":"OFF"}</p>
        </div>
    )
}

export { MainBoard } 
