import * as React from "react";
import {Link, Box} from "@mui/material";


interface DownloadableLinkComponentProps {
    imageName: string;
    imageText: string;
    imageHref: string
}

export const DownloadableLinkComponent = ({
                                              imageName,
                                              imageText,
                                              imageHref
                                          }: DownloadableLinkComponentProps): JSX.Element => {

    return (
        <>
            <div style={{display: 'flex', marginTop: '10px', marginLeft: '30px'}}>
                <img
                    style={{width: '18px', height: '16px', opacity: '1', marginTop: '3px'}}
                    src={`../../assets/${imageName}.png`}
                    alt={"medium"}
                    loading="lazy"
                />
                <Box component="span" sx={{height: '1px', marginLeft: '3px', marginRight: '4px'}}>
                    {imageText}
                </Box>
                <Link underline="hover" href={imageHref}>
                    <img
                        style={{width: '10px', height: '10px', opacity: '1'}}
                        src={'../../assets/icons8-external-link.png'}
                        alt={"link"}
                        loading="lazy"
                    />
                </Link>
            </div>
        </>
    )


}
