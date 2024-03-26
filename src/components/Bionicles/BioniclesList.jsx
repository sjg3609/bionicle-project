import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Card, IconButton, CardContent, Typography, Button, Modal } from '@mui/material';


function BioniclesList() {

    const bionicles = useSelector(store => store.bionicles);

    console.log('Checking for bionicles', bionicles.results);

    const showDetails = {

    }

    return (
        <div className="bionicleList">
            {
                bionicles.length === 0 ? (
                    <h4>
                        Please search for your bionicles, the results will show here
                    </h4>
                ) : (
                    bionicles.results.map(sets => {
                        return (
                            <Card key={sets.id}>
                                <p>{sets.name}</p>
                                <img src={sets.set_img_url}></img>
                                <br />
                            </Card>
                        )
                    })
                )

            }
        </div>
    )
}


export default BioniclesList;