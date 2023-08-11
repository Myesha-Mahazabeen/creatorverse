import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import CreatorForm from '../components/Form'
import { supabase } from '../client'

function EditCreator() {
    const [creator, setCreator] = useState({ name: "", imageURL: "", description: "", youtube: "", twitter:"", instagram:"" });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getCreator = async () => {
            const {data} = await supabase
                            .from("creators")
                            .select()
                            .eq('id', id);

            setCreator(data[0]);
        }

        getCreator().catch(console.error);
    }, [])

    const updateCreator = async(event) => {
        event.preventDefault();

        const resp = await supabase
        .from('creators')
        .update({ name: creator.name, imageURL: creator.imageURL, description: creator.description, youtube: creator.youtube, twitter: creator.twitter, instagram: creator.instagram })
        .eq('id', id);

        navigate("/");
    }

    const deleteCreator = async(event) => {
        event.preventDefault();

        const resp = await supabase
        .from('creators')
        .delete()
        .eq('id', id);

        setCreator({ name: "", imageURL: "", description: "", youtube: "", twitter:"", instagram:"" });

        navigate("/");
    }

    return (
        <div className="AddEditCreator">
            <CreatorForm creator={creator} setCreator={setCreator} />
            
            <nav>
                <ul>
                    <li>
                        <button onClick={updateCreator}>Submit</button>
                    </li>
                    <li>
                        <button className="delete-button" onClick={deleteCreator}>Delete</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default EditCreator