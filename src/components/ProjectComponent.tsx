import * as React from "react";
import {Grid, Paper} from "@mui/material";
import {CardComponent} from "./CardComponent";


const arr = [{
    cardTitle: '',
    cardSecondaryTitle: '',
    description: ''
}]


export const ProjectComponent = (): JSX.Element => {
    return <>
        <div style={{alignItems: "center", width: "40%", margin: "0 auto", marginTop: '5%'}}>
            <Grid
                container
                direction="row"
                justifyContent={"space-around"}>
                <CardComponent cardTitle={"1"} cardSecondaryTitle={"dsgfsd"} description={"jdkahfk"}>
                </CardComponent>
                <CardComponent cardTitle={"2"} cardSecondaryTitle={"dsgfsd"}
                               description={"jdkahfk"}></CardComponent>
                <CardComponent cardTitle={"3"} cardSecondaryTitle={"dsgfsd"}></CardComponent>

                <CardComponent cardTitle={"4"} cardSecondaryTitle={"dsgfsd"}
                               description={"jdkahfk"}></CardComponent>
                <CardComponent cardTitle={"5"} cardSecondaryTitle={"dsgfsd"}
                               description={"jdkahfk"}></CardComponent>
                <CardComponent cardTitle={"6"} cardSecondaryTitle={"dsgfsd"}
                               description={"jdkahfk"}></CardComponent>


            </Grid>
        </div>

    </>
}
