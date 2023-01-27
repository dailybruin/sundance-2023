import { animateScroll as scroll } from 'react-scroll'
import styled from 'styled-components'

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function transition() {
    window.onload = function () {
        setTimeout(function () {
            scroll.scrollTo(1000);
        }, 5000);
    }
}

let LandingCredit = styled("div")`

font-family: 'Sofia Sans', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: right;
justify-content: right;
`;

if (isMobile()) {
LandingCredit = styled("div")`
font-size: 9px;
line-height: 11px;
`;
}

let changeAR = styled("div")`
aspect-ratio: 16 / 9
`;




const LandingImage = (props) => {
    transition();
    return (
        <div>
                <img src={props.landing_image} alt="Landing Image" style={{ width: '98vw', height: '100vh' }} />
            <LandingCredit>
                <h1>{props.landing_credits}</h1>
            </LandingCredit>
        </div>
    )
}

export default LandingImage;