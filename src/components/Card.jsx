import React from 'react';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import './Card.css'; 

function Card(creator) {
    return (
        <article className="CreatorCard" style={{ 
            backgroundImage: `url( ${creator.imageURL} )`
        }}>
            <div className="overlay"></div>
            <div className="card-header-name">
                <h3>{creator.name}</h3>
                {creator.youtube && (
                    <Link to={'https://www.youtube.com/' + creator.youtube} target='_blank'>
                        <FaYoutube style={{ fontSize: '24px',color: 'red', marginRight: '10px' }} />
                    </Link>
                )}
                {creator.twitter && (
                    <Link to={'https://www.twitter.com/' + creator.twitter} target='_blank'>
                        <FaTwitter style={{fontSize: '24px', color: '#0096FF', marginRight: '10px' }} />
                    </Link>
                )}
                {creator.instagram && (
                    <Link to={'https://www.instagram.com/' + creator.instagram} target='_blank'>
                        <FaInstagram style={{ fontSize: '24px',color: '#FF00FF', marginRight: '10px' }} />
                    </Link>
                )}
                <Link to={'/' + creator.creatorId}>
                    <FaInfoCircle style={{ fontSize: '24px',color: '#7DF9FF', marginRight: '10px' }} />
                </Link>
            </div>
            <div className="card-description">
                <p>{creator.description}</p>
            </div>
        </article>
    );
}

export default Card;
