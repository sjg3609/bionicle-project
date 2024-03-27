import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Card, IconButton, CardContent, Typography, Button, Modal } from '@mui/material';


function BioniclesList() {

    const bionicles = useSelector(store => store.bionicles);


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
                            <div className="results">
                                <Card key={sets.id}
                                    sx={{
                                        boxShadow: 4,
                                        width: '650px',
                                        height: '550px',
                                    }}>
                                    <h3>{sets.name}</h3>
                                    <img src={sets.set_img_url}  height='65%' width='fit-content'></img>
                                </Card>
                                <br />
                            </div>
                        )
                    })
                )

            }
        </div>
    )
}


export default BioniclesList;