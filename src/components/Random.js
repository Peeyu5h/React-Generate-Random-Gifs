import axios from 'axios';
import React from 'react';
import { useState} from 'react';
import { useEffect } from 'react';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState('false');

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     console.log(data)
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);

    // }
    
    // useEffect(() => {
    //     fetchData();
    // }, []);
    
    // function clickHandler(){
    //     fetchData();
    // }

    const {gif, loading, fetchData} = useGif();

    return (
        <div className='w-1/2 bg-green-500 rounded-lg border border-black
            flex flex-col items-center gap-y-5 mt-[15px]'>

            <h1 className='text-2xl mt-[15px] underline font-bold'>A Random Gif</h1>

            {
                loading ? (<Spinner/>) : (<img src={gif} width="450" alt='gif'/>)
            }

            <button onClick={ () => fetchData()} 
            className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">
                Generate
            </button>

        </div>
    );
}

export default Random;
