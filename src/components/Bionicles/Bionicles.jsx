import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Bionicles() {

    const dispatch = useDispatch();
    const [bionicles, setBionicles] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setBionicles(e.target.value);
    }

    const search = () => {
        dispatch({ type: 'FETCH_BIONICLES', payload: bionicles })
    }

    return (
        <div className="bionicles">
            <center>
                <h1>This is will be where my Bionicles are displayed!</h1>
                <input type="search" value={bionicles} onChange={handleChange}/>
                <button onClick={search}>Search</button>

            </center>
        </div>
    )
}

export default Bionicles;