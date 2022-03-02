import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import * as React from "react";
import {useEffect, useState} from "react";

interface CardComponentProps {
    cardTitle: string;
    cardSecondaryTitle: string;
    description: string;

}

export const CardComponent = ({cardTitle, cardSecondaryTitle, description}: CardComponentProps): JSX.Element => {

    const [marginTopVal, setMarginTopVal] = useState<string>('1%');

    useEffect(() => {
        if (cardTitle % 2 == 0) {
            setMarginTopVal('4%')
        }
    })


    return <>
        <Card
            sx={{marginTop: marginTopVal, width: "45%", height: 278, borderRadius: 2, backgroundColor: '#2D344A'}}>
            <CardContent>
                <Typography sx={{
                    marginTop: '8%',
                    marginLeft: '10%',
                    minWidth: '40%',
                    minHeight: '10%',
                    textAlign: "left",
                    fontSize: '90%',
                    textTransform: 'uppercase'
                }} color="#64FFDA" gutterBottom>
                    {cardTitle}
                </Typography>
                <Typography sx={{
                    marginTop: '8%',
                    marginLeft: '8%',
                    minWidth: '40%',
                    minHeight: '20%',
                    textAlign: "left",
                    textTransform: 'uppercase'
                }} color="#FFFFFF" variant="h5" component="div">
                    sdhfdgj
                </Typography>
                <Typography sx={{
                    marginTop: 3,
                    marginLeft: 3,
                    letterSpacing: "0.56px",
                    minWidth: 159,
                    minHeight: 28,
                    textAlign: "left",
                    font: "normal normal medium 15px/21px Poppins"
                }} color="#FFFFFF">
                    adjectivesdfhgfsd
                    sdjhsfsduksdfsd
                    sdbfhksfdijhbsdhbhfds
                </Typography>
            </CardContent>
        </Card>
    </>
}
