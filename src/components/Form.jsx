import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

function CreatorForm({ creator, setCreator }) {
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator({ ...creator, [name]: value });
    };

    return (
        <div>
            <form id="CreatorForm">
                <label>Name</label>
                <input type="text" id="name" name="name" value={creator.name} onChange={handleChange} required />

                <label>Image
                    <p>Provide a link to an image of the creator. Include the http://</p>
                </label>
                <input type="text" id="image" name="imageURL" value={creator.imageURL} onChange={handleChange} required />

                <label>Description
                    <p>Provide a description of the creator</p>
                </label>
                <textarea rows="3" cols="50" id="description" name="description" value={creator.description} onChange={handleChange} required></textarea>

                <h3>Social Media Links</h3>
                <p>Provide the creator's social media links</p>

                <label>
                    <FaYoutube /> YouTube
                    <p>YouTube channel (without the @)</p>
                </label>
                <input type="text" id="youtube" name="youtube" value={creator.youtube} onChange={handleChange} />

                <label>
                    <FaTwitter /> Twitter
                    <p>Twitter account (without the @)</p>
                </label>
                <input type="text" id="twitter" name="twitter" value={creator.twitter} onChange={handleChange} />

                <label>
                    <FaInstagram /> Instagram
                    <p>Instagram account (without the @)</p>
                </label>
                <input type="text" id="instagram" name="instagram" value={creator.instagram} onChange={handleChange} />
            </form>
        </div>
    );
}

export default CreatorForm;
