import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Bionicles() {

    const bionicles = useSelector(store => store.bionicles);

    console.log('Checking for bionicles', bionicles);

    return(
        <div>
            <h4>Here are your results:</h4>
            {
                bionicles.map(sets => {
                    <h5>{sets.name}</h5>
                })
            }
        </div>
    )
}