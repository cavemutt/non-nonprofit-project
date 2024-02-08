import PropTypes from 'prop-types'
import words from '../assets/tiles.png'



export default function FooterOrgPage({ photoCredit1, photoCredit2 }) {
    return (
        <div className="footer-org-page">
            <p>{photoCredit1} on unsplash</p>
            <p>{photoCredit2} on unsplash</p>
            <p>Hand Coded with Love by Jennifer Lee Dev &copy;2023</p>
            <img src={words} className='image-2' alt="in lifting others we rise" />
        </div>
    )
}

FooterOrgPage.propTypes = {
    photoCredit1: PropTypes.string,
    photoCredit2: PropTypes.string
}