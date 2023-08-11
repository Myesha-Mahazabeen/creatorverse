import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client';
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

function ViewCreator() {
    const [creator, setCreator] = useState({ name: "", imageUrl: "", description: "", youtube: "", twitter:"", instagram:"" });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getCreator = async () => {
            
            console.log(id)
            const { data } = await supabase
                .from("creators")
                .select()
                .eq('id', id);

            
            if (data && data.length != 0) {
                setCreator(data[0]);
            }
        }

        getCreator().catch(console.error);
    }, [])

    const deleteCreator = async(event) => {
        event.preventDefault();

        const resp = await supabase
        .from('creators')
        .delete()
        .eq('id', id);

        navigate("/");
    }

    return (
        <div className="ViewCreator">
            <section className="creator-image">
                <img src={creator.imageURL} alt={creator.name}/>
            </section>

            <section className="creator-info">
                <h2>{creator.name}</h2>
                <p>{creator.description}</p>
                {
                    creator.youtube &&
                    <Link to={'https://www.youtube.com/' + creator.youtube} target='_blank'>
                        <button className="social-button" style={{ backgroundColor: 'red' }}>
                            <FaYoutube />
                            {/* @{creator.youtube} */}
                        </button>
                    </Link>
                }
                {
                    creator.twitter &&
                    <Link to={'https://www.twitter.com/' + creator.twitter} target='_blank'>
                        <button className="social-button" style={{ backgroundColor: '#0096FF' }}>
                            <FaTwitter />
                            {/* @{creator.twitter} */}
                        </button>
                    </Link>
                }
                {
                    creator.instagram &&
                    <Link to={'https://www.instagram.com/' + creator.instagram} target='_blank'>
                        <button className="social-button" style={{ backgroundColor: '#FF00FF' }}>
                            <FaInstagram />
                            {/* @{creator.instagram} */}
                        </button>
                    </Link>
                }
            </section>

            <nav className="modify-creator">
                <ul>
                    <li>
                        <Link to={'/edit/' + id}>
                            <button role='button'>Edit</button>
                        </Link>
                    </li>
                    <li>
                        <button role='button' className="delete-button" onClick={deleteCreator}>Delete</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default ViewCreator