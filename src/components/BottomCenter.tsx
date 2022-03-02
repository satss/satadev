import * as React from "react";
import {Typography, Grid} from "@mui/material";
import {useTranslation, Translation} from 'react-i18next';

export const BottomCenter = (): JSX.Element => {

    return <>
        <Typography variant={"h4"} sx={{
            color: '#64FFDA',
            alignItems: "center", width: "50%", margin: "0 auto",
            marginTop: '370px'
            , textAlign: "center",
            textTransform: 'uppercase'
        }}> Some
            Things I'VE
            built</Typography>

    </>

}
