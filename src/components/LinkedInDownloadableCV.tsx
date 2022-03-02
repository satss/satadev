import * as React from "react";
import {Link, Box} from "@mui/material";
import {useTranslation} from "react-i18next";

export const LinkedInDownloadableCV = (): JSX.Element => {
    const {t} = useTranslation();
    return (<>
        <Box component={'div'} sx={{marginLeft: '30px', marginTop: '30px', marginBottom: '20px'}}>
            {t('general.linkedIn')} <Link underline={'hover'}
                                          href={'https://www.linkedin.com/in/satarupa-chakravarty-88b13454/    '}>linkedin</Link> {t('general.resumeDownload')}
            <Link underline={'hover'}>{t('general.resume')}</Link>
        </Box>
    </>)
}
