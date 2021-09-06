import React, { useEffect } from 'react'
import { styled} from "frontity"
import { useSpring, animated as anim } from 'react-spring'
import './styles.css'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const MainAnimation = ({state, actions}) => {
    const [{ pos1 }, set] = useSpring({ pos1: [0, 460], config: fast })
    const [{ pos2 }] = useSpring({ pos2: pos1, config: slow })
    const [{ pos3 }] = useSpring({ pos3: pos2, config: slow })
    useEffect(() => {
        const handler = ({ clientX, clientY }) => set({ pos1: [clientX, clientY] })
        window.addEventListener('mousemove', handler)

    },[])


    return (
        <>
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                    <feColorMatrix in="blur" values="
                        0 0 1 0.6   0
                        0 0 0.3 0.4 0
                        1 1 5 4.0   0
                        1 0 0 30 -7
                        " />
                </filter>
            </svg>
            <HooksMain>
                <HooksFilter>
                    <anim.div className="b1" style={{ transform: pos3.interpolate(trans) }} />
                    <anim.div className="b2" style={{ transform: pos2.interpolate(trans) }} />
                    <anim.div className="b3" style={{ transform: pos1.interpolate(trans) }} />
                </HooksFilter>

            </HooksMain>
        </>
    )
}
const HooksFilter = styled.div   `
   position: absolute;
    width: 100%;
    height: 100%;
    filter: url('#goo');

    overflow: hidden;
    .b1,.b2,.b3 {
    position: absolute;
    will-change: transform;
    border-radius: 50%;
    background: #6756a6;
    box-shadow: 10px 10px 5px 0px rgba(103,86,166,0.75);
    opacity: 0.6;
    }
    .b1 {
    width: 170px;
    height: 170px;
    :after {
    content: '';
    position: absolute;
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
}
}

.b2 {
    width: 350px;
    height: 350px;
    :after {
    content: '';
    position: absolute;
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
     top: 70px;
    left: 70px;
    width: 70px;
    height: 70px;
}
}

.b3 {
    width: 200px;
    height: 200px;
    :after {
    content: '';
    position: absolute;
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
     top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
}
}
`
const HooksMain = styled.div   `
 width: 100%;
    height: 100%;
    background: inherit;

    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default MainAnimation
