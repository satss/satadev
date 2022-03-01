import * as React from "react";
import {Grid, Paper} from "@mui/material";
import {CardComponent} from "./CardComponent";


const FixedCardContainer = (): JSX.Element => {
    return (<>
        <CardComponent cardTitle={"1"} cardSecondaryTitle={"dsgfsd"} description={"jdkahfk"}></CardComponent>
        <div style={{marginTop: "65px", marginLeft: "20px"}}>
            <CardComponent cardTitle={"2"} cardSecondaryTitle={"dsgfsd"}
                           description={"jdkahfk"}></CardComponent>
        </div>
    </>)
}

const arr = [{
    cardTitle: '',
    cardSecondaryTitle: '',
    description: ''
}]


export const ProjectComponent = (): JSX.Element => {
    return <>
        <div style={{alignItems: "center", width: "40%", margin: "0 auto"}}>
            <Grid
                container
                direction="row"
                justifyContent={"space-between"}
                alignItems="center">
                <FixedCardContainer/>
                <div style={{marginTop: "-40px"}}>
                    <CardComponent cardTitle={"3"} cardSecondaryTitle={"dsgfsd"}
                                   description={"jdkahfk"}></CardComponent>
                </div>
                <div style={{marginTop: "15px"}}>
                    <CardComponent cardTitle={"4"} cardSecondaryTitle={"dsgfsd"}
                                   description={"jdkahfk"}></CardComponent>
                </div>
                <div style={{marginTop: "-40px"}}>
                    <CardComponent cardTitle={"5"} cardSecondaryTitle={"dsgfsd"}
                                   description={"jdkahfk"}></CardComponent>
                </div>
                <div style={{marginTop: "15px"}}>
                    <CardComponent cardTitle={"6"} cardSecondaryTitle={"dsgfsd"}
                                   description={"jdkahfk"}></CardComponent>
                </div>
                <div style={{marginTop: "-40px"}}>
                    <CardComponent cardTitle={"3"} cardSecondaryTitle={"dsgfsd"}
                                   description={"jdkahfk"}></CardComponent>
                </div>
                <div style={{marginTop: "15px"}}>
                    <CardComponent cardTitle={"4"} cardSecondaryTitle={"dsgfsd"}
                                   description={"jdkahfk"}></CardComponent>
                </div>
            </Grid>
        </div>

    </>
}
