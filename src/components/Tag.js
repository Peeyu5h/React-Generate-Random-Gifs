import axios from 'axios';
import React from 'react';
import { useState} from 'react';
import { useEffect } from 'react';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    const [tag, setTag] = useState('car');
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState('false');

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     console.log(data)
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);

    // }
    
    // useEffect(() => {
    //     fetchData();
    // }, []);
    
    const {gif, loading, fetchData} = useGif(tag);
    
    return (
        <div className='w-1/2 bg-blue-500 rounded-lg border border-black
            flex flex-col items-center gap-y-5 mt-[15px]'>

            <h1 className='text-2xl mt-[15px] underline font-bold'>Random {tag} Gif</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450" alt='gif'/>)
            }

            <input
                className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
                onChange={(event) => { setTag(event.target.value)}}
                value={tag}
            />
            
            <button onClick={ () => fetchData(tag)}
            className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">
                Generate
            </button>

        </div>
    );
}

export default Tag;
