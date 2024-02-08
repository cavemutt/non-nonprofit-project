import PropTypes from 'prop-types'
import OrgTable from './OrgTable'
import hands from '../assets/reachingHands.png'
import FooterOrgPage from './FooterOrgPage'

export default function Organizations({ getData, apiData }) {
    return (
        <div className='orgs-page'>
            <img src={hands} className='image-1' alt="hands reaching towards each other" />
            <h1>Organizations You Can Help Now!</h1>
            <OrgTable getData={getData} apiData={apiData} />
            <FooterOrgPage photoCredit1='"Hands" photo by Austin Kehmeier' photoCredit2='"Tiles" photo by Brett Jordan' />
        </div>
    )
}

Organizations.propTypes = {
    getData: PropTypes.func,
    apiData: PropTypes.array
}