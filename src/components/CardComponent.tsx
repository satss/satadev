import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import * as React from "react";

interface CardComponentProps {
    cardTitle: string;
    cardSecondaryTitle: string;
    description: string;

}

export const CardComponent = ({cardTitle, cardSecondaryTitle, description}: CardComponentProps): JSX.Element => {
    return <>
        <Card sx={{maxWidth: 349, minHeight: 278, borderRadius: 2, backgroundColor: '#2D344A'}}>
            <CardContent>
                <Typography sx={{
                    marginTop: 4,
                    marginLeft: 3,
                    minWidth: 256,
                    minHeight: 19,
                    textAlign: "left",
                    fontSize: 14,
                    textTransform: 'uppercase'
                }} color="#64FFDA" gutterBottom>
                    {cardTitle}
                </Typography>
                <Typography sx={{
                    marginTop: 2,
                    marginLeft: 3,
                    minWidth: 159,
                    minHeight: 28,
                    textAlign: "left",
                    font: "normal normal medium 20px/30px Poppins",
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
