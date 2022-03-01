import * as React from "react";
import {ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {useState} from "react";
import {useTranslation} from "react-i18next";

export const TranslationButton = (): JSX.Element => {
    const {i18n} = useTranslation();

    const [firstButtonColor, setFirstButtonColor] = useState<string>('#64FFDA');
    const [secondButtonColor, setSecondButtonColor] = useState<string>('#FFFFFF');

    const handleOnFirstBUttonClick = () => {
        if (firstButtonColor !== '#64FFDA') {
            i18n.changeLanguage("en");
            setFirstButtonColor('#64FFDA');
            setSecondButtonColor('#FFFFFF');
        }
    }
    const handleOnSeconfButtonClick = () => {
        if (secondButtonColor !== '#64FFDA') {
            i18n.changeLanguage("de");
            setSecondButtonColor('#64FFDA')
            setFirstButtonColor('#FFFFFF')
        }
    }

    const buttons = [<Button key="one" sx={{color: firstButtonColor}} onClick={handleOnFirstBUttonClick}>EN</Button>,
        <Button key="two" sx={{color: secondButtonColor}} onClick={handleOnSeconfButtonClick}>DE</Button>];

    return <>
        <Grid container justifyContent="flex-end">
            <ButtonGroup variant={'text'} sx={{marginRight: '90px', marginTop: '43px'}}>
                {buttons}
            </ButtonGroup>
        </Grid>
    </>
}
