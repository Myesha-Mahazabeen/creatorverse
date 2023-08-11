import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import Form from '../components/Form';
import { supabase } from '../client';

function AddCreator() {

    const [creator, setCreator] = useState({ name: "", imageURL: "", description: "", youtube: "", twitter:"", instagram:"" });
    const navigate = useNavigate();

    const insertCreator = async(event) => {
        event.preventDefault();

        const resp = await supabase
        .from('creators')
        .insert({ name: creator.name, imageURL: creator.imageURL, description: creator.description, youtube: creator.youtube, twitter: creator.twitter, instagram: creator.instagram })
        .select()

        setCreator({ name: "", imageURL: "", description: "", youtube: "", twitter:"", instagram:"" });

        navigate("/");
    }

    return (
        <div className="AddEditCreator">
            <Form creator={creator} setCreator={setCreator} />

            <button onClick={insertCreator} style={{ backgroundColor: '#2E8B57', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}>Submit</button>

        </div>
    )
}

export default AddCreator