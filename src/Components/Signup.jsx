import PropTypes from 'prop-types'
import Header from './Header';
import SignupForm from './SignupForm';
import Footer from './Footer';

export default function Signup({ getData }) {

    return (
        <div className="signup-page">
            <div className='signup-gradient'></div>
            <Header />
            <SignupForm getData={getData} />
            <Footer photoCredit='Maria Thalassinou' />
        </div>
    )
} 

Signup.propTypes = {
    getData: PropTypes.func,
    apiData: PropTypes.array
}



