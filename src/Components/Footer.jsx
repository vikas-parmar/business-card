import React from 'react';
import { Link, Stack } from '@mui/material';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <Stack width={"320px"} component={'footer'} spacing={2} direction={'row'} justifyContent={'center'} sx={{backgroundColor: "#262626", borderRadius: "0 0 10px 10px"}} paddingTop={1} marginBottom={4}>

            <Link href="https://www.facebook.com/viksa7111/" underline="none">
                <FacebookIcon fontSize='large' />
            </Link>

            <Link href="https://www.instagram.com/vikasparmar___" underline="none">
                <InstagramIcon fontSize='large' />
            </Link>

            <Link href="https://twitter.com/viksa7111" underline="none">
                <TwitterIcon fontSize='large' />
            </Link>

            <Link href="https://twitter.com/viksa7111" underline="none">
                <LogoDevIcon fontSize='large' />
            </Link>

        </Stack>
    )
}

export default Footer;
