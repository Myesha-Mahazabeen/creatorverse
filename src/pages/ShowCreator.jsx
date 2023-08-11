import { useState, useEffect } from 'react';
import { supabase } from '../client';
import Card from '../components/Card';

function ShowCreator() {
    const [creatorData, setCreatorData] = useState([])

    useEffect(() => {
        
        const getCreators = async() => {
            const { data } = await supabase
                    .from('creators')
                    .select('*')
                    

           
             if(data.length != 0) {
                console.log(data)
                setCreatorData(data)
             }
        }
        getCreators().catch(console.error);
    }, []);

    return (
        <div className='ShowCreator'>
            {
                creatorData &&
                creatorData.length > 0
                ?   creatorData.map((creator, idx) => <Card   key={idx}
                                                                creatorId={creator.id}
                                                                name={creator.name}
                                                                imageURL={creator.imageURL}
                                                                description={creator.description}
                                                                youtube={creator.youtube}
                                                                twitter={creator.twitter}
                                                                instagram={creator.instagram} />)
                :   <h3 size='md'>Oops! no creators yet. Add your favorite creators &#128578;</h3>
            }
        </div>
    )
}

export default ShowCreator