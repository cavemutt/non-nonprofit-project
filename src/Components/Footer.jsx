import PropTypes from 'prop-types'

export default function Footer({ photoCredit }) {
    return (
        <div className="footer">
            <p>photo by {photoCredit} on unsplash</p>
            <p>Hand Coded with Love by Jennifer Lee Dev &copy;2023</p>
        </div>
    )
}

Footer.propTypes = {
    photoCredit: PropTypes.string
}