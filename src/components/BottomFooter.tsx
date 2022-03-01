import * as React from "react";
import Paper from '@mui/material/Paper';
import BottomNavigationAction, {BottomNavigationActionClasses} from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import {Link} from "@mui/material";
import {DownloadableLinkComponent} from "./DownloadableLinkComponent";
import {LinkedInDownloadableCV} from "./LinkedInDownloadableCV";


export const BottomFooter = (): JSX.Element => {
    return <>
        <Box sx={{
            display: "flex",
            color: '#FFFFFF',
            top: "auto",
            bottom: 0,
            alignItems: "center",
            width: "50%",
            margin: "0 auto",
            marginTop: '120px'
        }} component="div">
            <Avatar sx={{width: '62px', height: '62px'}} alt="SC" src="../../assets/Image.jpg"/>
            <DownloadableLinkComponent imageName={"medium"} imageText={"Medium"}
                                       imageHref={"https://medium.com/@satarupachakravarty"}/>
            <DownloadableLinkComponent imageName={"github"} imageText={"Github"}
                                       imageHref={"https://github.com/satss"}/>

            <LinkedInDownloadableCV/>
        </Box>
    </>
}
