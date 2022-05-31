

const CreatePosition = (dm) => {
    return {
        position: 'absolute',
        right: `${dm.right}%`,
        top: `${dm.top}%`,
    }
}

function VinylDimension(Originaldimensions,big){
    const o = Originaldimensions.origin
    let s = big || false

    Originaldimensions.catridge = s ? {
        right: o.right + 5,
        top: o.top + 45,
        height: 55,
        width: 55,
    }: {
        right: o.right ,
        top: o.top + 33,
        height: 55,
        width: 55,
    }
    const mn  =s ? 7 : 3
    Originaldimensions.circleSmall = {
        right: o.right - mn,
        top: o.top - 1,
        rad:s ?  50 : 60 
    }

    Originaldimensions.box = {
        height: 30,
        width:  60,
        pos : {
            top:85,
            right:5 ,
        }
    }
    Originaldimensions.startbtn  = {
        top :70,
        right : 5,
        box : s ? 30:20,
    }
    return Originaldimensions
}
function CreateVinylDimension(mode) {

    const big = mode
    const dimensions = {
        origin: big ? {
            right: 10,
            top: 15,
            height: 150,

        }
        :{
            right: 5,
            top: 10,
            height: 100
        },
        }

        const handTranslation = {
            originTranslate : big ?{
                before: [-35,0,20],
                after : [25,10,-15]
            }:{
                before: [-40,15,20],
                after : [10,10,-10]
            }
        }


        VinylDimension(dimensions)

        const handwidth = {
            ...CreatePosition(dimensions.origin),
            height: `${dimensions.origin.height}px`,
            zIndex: 1,
            transform: `rotate(${big ? 8:-10}deg)`,

        }

        const smallCircle = {
            zIndex: 2,
            border:"1px solid black",
            ...CreatePosition(dimensions.circleSmall),
            width: `${dimensions.circleSmall.rad}px`,
            height: `${dimensions.circleSmall.rad}px`,
            backgroundColor: "white",
        }

        const catridge = {
            ...CreatePosition(dimensions.catridge),
            width: `${dimensions.catridge.width}px`,
            height: `${dimensions.catridge.height}px`,
            zIndex: 3,
        }

        const stbtnDim  = dimensions.startbtn

        const startBtn = {
            height:`${stbtnDim.box}px`,
            width:`${stbtnDim.box}px`,
            border:"1px solid black",
            backgroundColor:"white",

            ...CreatePosition(stbtnDim)
        }

        const b = dimensions.box
        const box = {
            height:`${b.height}px`,
            width:`${b.width}px`,
            borderRadius:"5px",
            border:"1px solid black",
            backgroundColor:"#222222",
            ...CreatePosition(b.pos)
        }

        const subbox = {
            width:`${b.width / 2}px`,
            height:`${(b.height/ 2) - 2.5}px`,
            color:'white',
            padding :"5px",
            fontSize: big ?   '14px' : "12px",
            borderRadius : "5px",
            ...CreatePosition({
                top:b.pos.top + 1,
                right:b.pos.right + 5
            })
        }
            return {catridge,startBtn,hand:handwidth,smallCircle,box,subbox,handTranslation}
    }
    export {CreateVinylDimension}
