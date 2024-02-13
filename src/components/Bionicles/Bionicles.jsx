import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BioniclesList from './BioniclesList';

function Bionicles() {


    return (
        <div>
            <center>
             <BioniclesList />
            </center>

        </div>
    )
}

export default Bionicles;