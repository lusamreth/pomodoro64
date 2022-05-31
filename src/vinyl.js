import {useState, useContext} from 'react'
import { motion } from 'framer-motion'
import './vinyl.css'
import {CreateVinylDimension} from './vinyl.styling'


function AnimationComponent(prop){
    let dim = prop.dimensions
    const aniState = !prop.playstate
    const originInput = prop.origin.originTranslate
    console.log(originInput)
    const before = originInput.before

    const originTranslate = {
        x : before[0], 
        y : before[1],
        rotate  :before[2] 
    }

    const nullOrigin = {
        x : 0,  
        y : 0, 
        rotate : 0
    }

    const variants = {
        origin : nullOrigin,
        translator : (inps) => ({
            x : originTranslate.x - inps[0], 
            y : originTranslate.y  - inps[1], 
            rotate : originTranslate.rotate- inps[2]
        })
    } 
    const shadowWrap = {
        filter: "drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5))"
    }

    return (<div className="player">
        <div className="hand-wrapper" style={{...shadowWrap, ...dim.hand}}>
            <motion.ui className="hand backshadow" 
            // transition={{times:[0,0.1,1]}}
                variants={variants}
                custom={[0,0,0]}
                animate={
                    aniState ? 'origin' : 'translator'
            }
            style={{...dim.hand, ...{
                clipPath: "polygon(50% 1%, 100% 5%, 14% 100%, 0 100%)",
                padding: "18px",
                zIndex: 1,
                backgroundColor: "#360F0C",
            }}}></motion.ui>
        </div>

        <div className="catridge-wrapper" style={{...shadowWrap, ...dim.catridge}}>
            <motion.ui className="catridge" 
                // transition={{times:[0,0.7,1] ,duration:0.95 }}
                variants={variants}
                custom={originInput.after}
                animate={
                aniState ? 'origin' : 'translator'
            } style={{...dim.catridge, ...{
                border:"1px solid black",
                backgroundColor: "#ED6034",
                clipPath: "polygon(58% 30%, 91% 18%, 77% 74%, 40% 98%)",
            }}}>
            </motion.ui>
        </div>

        <div className="start-btn circle" style={dim.startBtn}></div>
        <div className="circle backshadow" style={dim.smallCircle}></div>
        <div className="box backshadow" style={dim.box}></div>
    </div >)

}


function SideTurnTable(prop) {
    return (
        <AnimationComponent 
            origin={prop.vinylDimension.handTranslation} 
            playstate = {prop.playstate}
            dimensions={prop.vinylDimension}/>
    )
}

export {SideTurnTable,}
