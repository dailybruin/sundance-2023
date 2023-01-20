import fb from '../images/socials/fb.svg'
import insta from '../images/socials/insta.svg'
import twitter from '../images/socials/twitter.svg'
import tiktok from '../images/socials/tiktok.svg'
import email from '../images/socials/email.svg'

import styled from 'styled-components'
import { mediaQueries } from '../shared/config';


const Container = styled.div`
	background-color: black;
	height: auto;
	color: white;
	padding: 60px 0 10px 0;
    text-align: center;
	h1 {
		margin: 0;
		font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
	}
  /* margin-bottom: 20px; */
`

const Socials = styled.div`
    position: relative;
	margin-top: 20px;
  
	img {

    position: relative;
		margin: 0 20px;
	}
	p {
    position: relative;
		margin: 80px 20px;
		${mediaQueries.mobile} {
			margin: 50px 20px;
		}
	}
`

const Footer = () => {
    return (
        <Container>
        <h1>DAILY BRUIN</h1>
        <Socials>
          <a href="https://www.instagram.com/dailybruin" target="_blank"><img src={insta}/></a>
          <a href="https://www.facebook.com/dailybruin" target="_blank"><img src={fb}/></a>
          <a href="https://www.twitter.com/dailybruin" target="_blank"><img src={twitter}/></a>
          <a href="https://www.tiktok.com/@dailybruin" target="_blank"><img src={tiktok}/></a>
          <a href="http://eepurl.com/cFEiZX" target="_blank"><img src={email}/></a>
          <p>Built with Suzy’s ♥ in Kerckhoff 118 by [developers]. Designed by [designers].</p>
        </Socials>
    </Container>
    )
  }
  
export default Footer;