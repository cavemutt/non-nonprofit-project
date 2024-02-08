// import Table from 'react-bootstrap/Table';
// import { useState, useEffect } from 'react';
import Org from './Org';
import PropTypes from 'prop-types'



export default function OrgTable({getData, apiData}) {

    return (
        <div className="orgs-container">
              {console.log('org container ', apiData)} 
                {apiData.map(org => {
                    return (
                        <Org getData={getData} orgData={org} key={org.id}  />
                    )
                })}
      </div>
    )
}

OrgTable.propTypes = {
    getData: PropTypes.func,
    apiData: PropTypes.array
}

// *** the console log above is running twice in a row ***