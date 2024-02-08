import { useState } from 'react';
import PropTypes from 'prop-types'


export default function SignupForm({getData}) {
    const [newOrgName, setNewOrgName] = useState('')
    const [newContactName, setNewContactName] = useState('')
    const [newContactEmail, setNewContactEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newOrgType, setNewOrgType] = useState('')
    const [newDonationUrl, setNewDonationUrl] = useState('')
    const [newWebsiteUrl, setNewWebsiteUrl] = useState('')
    const [newWishlistUrl, setNewWishlistUrl] = useState('')
    const [newDescription, setNewDescription] = useState('')

    function handleSubmitNew(e) {
        const newOrg = {
            orgName: newOrgName,
            contactName: newContactName,
            contactEmail: newContactEmail,
            password: newPassword,
            orgType: newOrgType,
            donationUrl: newDonationUrl ? newDonationUrl : "not available",
            websiteUrl: newWebsiteUrl ? newWebsiteUrl : "not available",
            wishlistUrl: newWishlistUrl ? newWishlistUrl : "not available",
            description: newDescription
        }
        e.preventDefault()
        console.log(newOrg)
        handlePost(newOrg)
        clearFields(['org-name', 'contact-name', 'contact-email', 'org-type', 'password', 'donate-url', 'website-url', 'wishlist-url', 'description'])
    }


    // https://6510b7753ce5d181df5d78c0.mockapi.io/
    const handlePost = async (orgData) => {
        try {
            await fetch('https://6510b7753ce5d181df5d78c0.mockapi.io/companies/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(orgData) 
            })
            .then(getData)
            .then(() => alert("Sign up was successful! Welcome to the Non-NonProfit Project!"))
        } catch (err) {
            console.log(err)
        }

    }

    const clearFields = ([...inputFields]) => {
        inputFields.forEach(field => {
            document.getElementById(field).value = ''

        })
    }

    return (
        <div className="signup-form">
            <form onSubmit={handleSubmitNew}>
                <div>
                        <label htmlFor="org-name">Organization Name : </label>
                        <input required id="org-name" name="orgname" type="text" placeholder="organization name" onChange={e => setNewOrgName(e.target.value)} /><br />
                </div>
                <div>
                    <label htmlFor="contact-name">Contact Name : </label>
                    <input required id="contact-name" type="text" placeholder="name of contact person" onChange={e => setNewContactName(e.target.value)} /><br />
                </div>
                <div>
                    <label htmlFor="password">Choose a Password : </label>
                    <input required id="password" type="password" placeholder="new password" onChange={e => setNewPassword(e.target.value)} /><br />
                </div>
                <div>
                    <label htmlFor="contact-email">Contact Email : </label>
                    <input required id="contact-email" type="email" placeholder="contact email" onChange={e => setNewContactEmail(e.target.value)} /><br />
                </div>
                <div>
                    <label htmlFor="org-type">Type of Organization :</label>
                    <select required id="org-type" onChange={e => {setNewOrgType(e.target.value)}}>
                        <option value="" className='option-fake'>(choose your organization type)</option>
                        <option value="charity">501c3 Charity Organization</option>
                        <option value="applying">currently applying for 501c3 status</option>
                        <option value="helper">Self-funded to help others</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="donate-url">Donation Url : </label>
                    <input id="donate-url" type="text" placeholder="donation url" onChange={e => setNewDonationUrl(e.target.value)} /><br />
                </div>
                <div>
                    <label htmlFor="website-url">Website/Social Media Url : </label>
                    <input id="website-url" type="text" placeholder="website/social media url" onChange={e => setNewWebsiteUrl(e.target.value)} /><br />
                </div>
                <div>
                    <label htmlFor="wishlist-url">Wishlist Url : </label>
                    <input id="wishlist-url" type="text" placeholder="wishlist url" onChange={e => setNewWishlistUrl(e.target.value)} /><br />
                </div>
                <div>
                    <label htmlFor="description">Description/Goals : </label>
                    <textarea id="description" type="text" placeholder="what your organization does" onChange={e => setNewDescription(e.target.value)} /><br />
                </div>
                <button type="submit" className='submit-btn'>Submit</button>
            </form>
        </div>
    )
}

SignupForm.propTypes = {
    getData: PropTypes.func,
    apiData: PropTypes.array
}

// Next Steps :
// need to verify password with second entry
// need to hash password and store separately
// on Org page 
// - login popup to authenticate when update or delete is clicked 
// - action for forgot/reset password needed 