import React, {useState} from 'react'
import {motion} from 'framer-motion'
import Artist from './Artist';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

export default function Card({id, name, num, artists, img, audio}) {
    const [isModal, setModal] = useState(false);

    console.log(audio);

    const variants = {
        active: {
            opacity: 1,
            x: 0,
            y:  0,
            scale: 1.5,
            zIndex: 3,
            backgroundColor: "#FF1C49",
            color: "#84E1F5",
            padding: "1rem"
        },
        inActive: {
            opacity: 1,
            x: 0,
            y:0,
            transition:{
                durantion: 1, 
                delay: num * 0.2
            }
        }
      };

    return (
        
        <motion.div key={id}

        initial={{opacity: 0 , x: num % 2 === 0 ? -50 : 50, y: num % 2 === 0 ? -50 : 50}}
        animate={isModal ? "active" : "inActive"}
        variants={variants}

        className='four columns'
        style={
            {
                width: "calc(33.33% - 8px)",
                margin: "4px",
                backgroundColor: '#84E1F5',
                color: "#FF1C49",
                padding: "1rem",
                borderRadius: "15px",
            }
        }
        >
            {isModal ? (<div className="text-right mb-2"><div className="d-inline" style={{cursor:"pointer"}} onClick={() => setModal(false)}>
            <Icon path={mdiClose} size={1} color="white"/>
                </div></div>) : (<div></div>) }
            <div onClick={() => setModal(true)}>
        
                    <div className="four columns">
                    <img src={img} alt="album" height="100px" className="miniAlbum ml-2"/>
                    </div>
                    <div className="eight columns">
                    <h5 className="p-1">{name}</h5>
                    <p className="p-1">{artists[0].name}</p>
            
                    </div>
  
            {isModal ? 
            (<div className="twelve columns text-center mt-3">
            <audio controls src={audio} className="miniAlbum"></audio>
    
            </div>) 
            : (<div></div>) }
            </div>
            
        </motion.div>
    )
}
