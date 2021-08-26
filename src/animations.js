import './styles/animations.css';


export const getDelay = (initial=2, range=2) => initial + range * Math.random();

const animateInfinite = (element, animation, delay) => {
    return (
        <div style={{
            animation: `${delay}s ease-in-out 0s infinite alternate ${animation}`,
        }}>
            {element}
        </div>
    )
}

export const upDown = (element, delay=getDelay()) => animateInfinite(element, 'up-down', delay);    

export const leftRight = (element, delay=getDelay()) => animateInfinite(element, 'left-right', delay);  

export const woble = (element) => upDown(leftRight(element));

export const upDownLight = (element, delay=getDelay()) => animateInfinite(element, 'up-down-light', delay);    

export const leftRightLight = (element, delay=getDelay()) => animateInfinite(element, 'left-right-light', delay);  

export const wobleLight = (element) => upDownLight(leftRightLight(element));
