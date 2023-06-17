import React from 'react';
import topIcon from '../../assets/icons/top.png';
import styled from 'styled-components';
import { colors } from '../../utils/theme/theme';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

const Div = styled(motion.div)`

    &#top {
        background-color: rgb(${props => props.theme.colorA});
        display: flex;
        align-items: center;
        justify-content: center;
        width: 0;
        height: 0;
        color: rgb(${colors.DARK});
        cursor: pointer;
        border: none;
        border-radius: 50%;
        transform: translateX(50vw) translateY(100vh);
        left: 0;
        top: 0;
        position: fixed;
        font-size: 3rem;
        padding: 0;
        z-index: 99999;
        box-shadow: 0 .5rem rgb(${colors.DARK});
        opacity: 0;
        -webkit-transition: all 1s cubic-bezier(0.99, 0.42, 0.05, 0.71);
        transition: all 1s cubic-bezier(0.99, 0.42, 0.05, 0.71);
    }
    
    &#top.top-visible {
        transform: translateX(80vw) translateY(80vh);
        left: 0;
        top: 0;
        width: 8vw;
        height: 8vw;
        opacity: 1;
        -webkit-transition: all 1s cubic-bezier(0.99, 0.42, 0.05, 0.71);
        transition: all 1s cubic-bezier(0.99, 0.42, 0.05, 0.71);
    }

`;

const Img = styled.img`

    border-radius: 50%;
    height: inherit;
    opacity: .4;
    
`;

const variants = {
    visible: {
        position: 'fixed',
        x: '80vw',
        y: '80vh',
        left: 0,
        top: 0,
        width: '8vw',
        height: '8vw',
        opacity: 1,
        scale: 1,
        transition: {
            duration: .3,
            ease: [0.99, 0.42, 0.05, 0.71],
            type: 'spring',
        }
    },
    invisible: {
        position: 'fixed',
        x: '80vw',
        y: '150vh',
        opacity: 0,
        scale: 0.5,
        transition: {
            duration: 1,
            ease: [0.99, 0.42, 0.05, 0.71],
            type: 'spring',
        }
    }
};

function TopButton() {
    const {scrollYProgress} = useScroll();
    const [visible, setVisible] = useState(false);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setVisible(latest > 0);
    })

    function scrollTop() {
        const interval = setInterval(() => {
            const value = 100;
            if (document.documentElement.scrollTop - value > 0) {
                document.documentElement.scrollTop -= value;
            } else {
                document.documentElement.scrollTop = 0;
                clearInterval(interval);
            }
        }, 1);
    }
    
  return (
    <AnimatePresence>
        {
            visible ? 
            <Div key={"change"} className='top-visible' variants={variants} initial={'invisible'} animate={'visible'} exit={'invisible'} onClick={scrollTop} id='top'>
                <Img src={topIcon} alt='Rolar ao topo' />
            </Div> : 
            <></>
        }
    </AnimatePresence>
  );
}

export default TopButton;