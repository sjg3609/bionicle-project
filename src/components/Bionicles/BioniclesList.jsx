import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function BioniclesList() {

    const bionicles = useSelector(store => store.bionicles);

    console.log('Checking for bionicles', bionicles.results);


    return (
        <div className="bionicleList">
            {
                bionicles.length === 0 ? (
                    <h4>
                        Please search for your bionicles, the results will show here
                    </h4>
                ) : (
                    bionicles.results.map(sets => (
                        <h2>{sets.set_img_url}</h2>
                        // <p>{sets.name}</p>
                    ))
                )

            }
        </div>
    )
}


export default BioniclesList;