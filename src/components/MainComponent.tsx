import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {TranslationButton} from "./TranslationButton";
import {useTranslation} from 'react-i18next';


export const MainComponent = (): JSX.Element => {
    const {t} = useTranslation();

    return <>
        <TranslationButton/>
        <Typography sx={{
            fontSize: "50px",
            opacity: 1,
            textAlign: 'left', paddingTop: '300px',
            paddingLeft: '175px', height: '70px',
        }} variant={"h6"} color={"#64FFDA"}>Hola,</Typography>

        <Typography sx={{
            fontSize: "52px",
            textAlign: 'left', paddingTop: '83px',
            paddingLeft: '175px', width: '1696px', height: '76px'
        }} variant={"h1"} color={"#FFFFFF"}>{t('general.nameTitle')}</Typography>
        <Typography sx={{
            fontSize: "16px",
            width: '980px',
            textAlign: 'left', paddingTop: '83px',
            paddingLeft: '175px', height: '71px',
            opacity: 1,
        }} color={"#8892B0"}>
            {t('general.info')}
        </Typography>
    </>
}
