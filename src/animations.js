import './styles/animations.css';


export const getDelay = (initial=2, range=2) => initial + range * Math.random();

const animateInfinite = (element, animation, delay) => {
    return (
        <div style={{
            animation: `${delay}s ease-in-out 0s infinite alternate ${animation}`,
            zIndex: '0'
        }}>
            {element}
        </div>
    )
}

const animateFrom = (element, animation, delay) => (
    <div style={{
        animation: `${animation} 1s ${delay}s ease forwards`,
        opacity: 0, 
        zIndex: 0,
        position: 'relative'
    }}>
        {element}
    </div>
)

export const upDown = (element, delay=getDelay()) => animateInfinite(element, 'up-down', delay);    

export const leftRight = (element, delay=getDelay()) => animateInfinite(element, 'left-right', delay);  

export const woble = (element) => upDown(leftRight(element));

export const upDownLight = (element, delay=getDelay()) => animateInfinite(element, 'up-down-light', delay);    

export const leftRightLight = (element, delay=getDelay()) => animateInfinite(element, 'left-right-light', delay);  

export const wobleLight = (element) => upDownLight(leftRightLight(element));

export const fromLeft = (element, delayTime) => animateFrom(element, 'from-left', delayTime)

export const fromRight = (element, delayTime) => animateFrom(element, 'from-right', delayTime)

export const fromUp = (element, delayTime) => animateFrom(element, 'from-up', delayTime)

export const fromDown = (element, delayTime) => animateFrom(element, 'from-down', delayTime)

export const fromNothing = (element, delayTime) => animateFrom(element, 'from-nothing', delayTime)