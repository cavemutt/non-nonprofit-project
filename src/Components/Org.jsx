import { useState } from 'react';
import PropTypes from 'prop-types'


export default function Org({ getData, orgData }) {
    const [updateOrg, setUpdateOrg] = useState([])
    const [isToUpdate, setIsToUpdate] = useState(false)
    const [updateOrgName, setUpdateOrgName] = useState(updateOrg.orgName)
    const [updateContactName, setUpdateContactName] = useState(updateOrg.contactName)
    const [updateOrgType, setUpdateOrgType] = useState(updateOrg.orgType)
    const [updateContactEmail, setUpdateContactEmail] = useState(updateOrg.contactEmail)
    const [updateDonateUrl, setUpdateDonateUrl] = useState(updateOrg.donationUrl)
    const [updateWebsiteUrl, setUpdateWebsiteUrl] = useState(updateOrg.websiteUrl)
    const [updateWishlistUrl, setUpdateWishlistUrl] = useState(updateOrg.wishlistUrl)
    const [updateDescription, setUpdateDescription] = useState(updateOrg.description)
    const [updatePassword, setUpdatePassword] = useState(updateOrg.password)
    
    const handleDelete = async (id) => {
        console.log(id)
        try {
            await fetch(`https://6510b7753ce5d181df5d78c0.mockapi.io/companies/${id}`, {
                method: 'DELETE'
            }
            )
            .then(data => data.json()) 
            .then(getData)       
        } catch(err) {
            console.log(err)
        }
    }

    async function handleUpdate(e, id) {
        e.preventDefault()
        isToUpdate ? setIsToUpdate(false) : setIsToUpdate(true)
        try {
            await fetch(`https://6510b7753ce5d181df5d78c0.mockapi.io/companies/${id}`)
            .then(data => data.json())
            .then(data => setUpdateOrg(data))
        } catch (err) {
            console.log('update error ', err)
        }

    }


    async function handleUpdateReq(e) {
        const updatedOrg = {
            id: updateOrg.id,
            orgName: updateOrgName,
            contactName: updateContactName,
            orgType: updateOrgType,
            password: updatePassword,
            contactEmail: updateContactEmail,
            donationUrl: updateDonateUrl,
            websiteUrl: updateWebsiteUrl,
            wishlistUrl: updateWishlistUrl,
            description: updateDescription
        }
        e.preventDefault()
        await fetch(`https://6510b7753ce5d181df5d78c0.mockapi.io/companies/${updateOrg.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedOrg)
        })
        .then(alert('updated'))
        .then(getData)
        .then(() => setIsToUpdate(false))
        .catch(error => console.log('update req error ', error))
    }

    return (
        <>
        <div className='org-container-each'>
            <div>
                <p className='id'>Id# <span>{orgData.id}</span></p>
                <p>ORGANIZATION: <span className='org-name'>{orgData.orgName}</span></p>
            </div>
            <p className='contact'>CONTACT: <span>{orgData.contactName}: {orgData.contactEmail}</span></p>
            <p className='org-description'>WHAT WE DO: <span>{orgData.description}</span></p>
            <p className='type'>ORG TYPE: <span>{orgData.orgType}</span></p>
            {orgData.donationUrl == "not available" ? 
                <p className='donate'>DONATE AT: <span><small>{orgData.donationUrl}</small></span></p> :
                <p className='donate'>DONATE AT: <span><a href='{orgData.donationUrl}' target='_blank'>{orgData.donationUrl}</a></span></p>
            }
            {orgData.websiteUrl == "not available" ?
                <p className='website'>WEBSITE/SOCIAL MEDIA: <span><small>{orgData.websiteUrl}</small></span></p> :
                <p className='website'>WEBSITE/SOCIAL MEDIA: <span><a href='{orgData.websiteUrl}' target='_blank'>{orgData.websiteUrl}</a></span></p>
            }
            {orgData.wishlistUrl == "not available" ?
                <p className='wishlist'>OUR WISH LIST: <span><small>{orgData.wishlistUrl}</small></span></p> :
                <p className='wishlist'>OUR WISH LIST: <span><a href='{orgData.wishlistUrl}' target='_blank'>{orgData.wishlistUrl}</a></span></p>
            }
            <div className='is-yours'>
                <p>Is this your organization?</p>
                <button onClick={e => handleUpdate(e, orgData.id)}>Update</button>
                <button onClick={() => handleDelete(orgData.id)}>Delete</button>                
            </div>
        </div>
        {isToUpdate ? 
            <div className="update-container">
                <h3 className="update-h3">Make updates below :</h3>
                <div className='update-form'>
                    <form onSubmit={handleUpdateReq}>
                        <div>
                            <p>Org Id# : {updateOrg.id}</p>
                            <label htmlFor="update-name">Organization Name : </label>
                            <input value={updateOrgName || updateOrg.orgName} id="update-name" type="text" onChange={e => setUpdateOrgName(e.target.value)} />
                            <br />
                            <label htmlFor="update-contact">Contact Name : </label>
                            <input value={updateContactName || updateOrg.contactName} id="update-contact" type="text" onChange={e => setUpdateContactName(e.target.value)} />
                            <br />
                            <label htmlFor="update-contact-email">Contact Phone : </label>
                            <input value={updateContactEmail || updateOrg.contactEmail} id="update-contact-email" type="text" onChange={e => setUpdateContactEmail(e.target.value)} />
                            <br />
                            <label htmlFor="update-donate-url">Donation Url : </label>
                            <input value={updateDonateUrl || updateOrg.donationUrl} id="update-donate-url" type="text" onChange={e => setUpdateDonateUrl(e.target.value)} />
                            <br />
                            <label htmlFor="update-website-url">Website/Social Media Url : </label>
                            <input value={updateWebsiteUrl || updateOrg.websiteUrl} id="update-website-url" type="text" onChange={e => setUpdateWebsiteUrl(e.target.value)} />
                            <br />
                            <label htmlFor="update-wishlist-url">Wishlist Url : </label>
                            <input value={updateWishlistUrl || updateOrg.wishlistUrl} id="update-wishlist-url" type="text" onChange={e => setUpdateWishlistUrl(e.target.value)} />
                            <br />
                            <label htmlFor="update-description">Description : </label>
                            <textarea value={updateDescription || updateOrg.description} id="update-description" type="text" onChange={e => setUpdateDescription(e.target.value)} />
                            <br />
                            <div className='password-container'>
                            <label htmlFor="update-password">Description : </label>
                            <textarea value={updatePassword || updateOrg.password} id="update-description" type="text" onChange={e => setUpdatePassword(e.target.value)} />
                            <br />
                            </div>
                                
                            <label htmlFor="update-type">Type of Organization :</label>
                        </div>
                        <div>
                            <select id="update-type" defaultValue={updateOrgType || updateOrg.orgType} value={updateOrgType || updateOrg.orgType} onChange={e => setUpdateOrgType(e.target.value)}>
                                <option value="charity">501c3 Charity Organization</option>
                                <option value="applying">currently applying for 501c3 status</option>
                                <option value="helper">Self-funded to help others</option>
                            </select>
                            <br />
                            <br />
                            <button type="submit" className='submit-btn'>Update</button>
                        </div>
                    </form>                   
                </div>
            </div>
         : null}
        </>
    )
}

Org.propTypes = {
    getData: PropTypes.func,
    orgData: PropTypes.object,
    id: PropTypes.number,
    orgName: PropTypes.string,
    contactName: PropTypes.string,
    contactEmail: PropTypes.string,
    orgType: PropTypes.string,
    description: PropTypes.string,
    websiteUrl: PropTypes.string,
    donationUrl: PropTypes.string,
    wishlistUrl: PropTypes.string
}