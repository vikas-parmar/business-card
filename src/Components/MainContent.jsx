import React from "react"
import { Box, Button, Link, Stack, Typography } from "@mui/material"
import { Email } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const MainContent = () => {
    return (
        <Box component={'div'} width={'320px'} sx={{backgroundColor:"#262626"}} >
            <Box component={'div'} textAlign="center" >
                <Typography variant="h4" fontWeight={700} color={'white'}>
                    Vikas Parmar
                </Typography>
                <Typography variant="subtitle1" sx={{ color:"#f3bf99", fontWeight: 400}}>
                    Frontend Developer
                </Typography>
                <Typography variant="caption"  gutterBottom>
                    <Link href="https://vikasparmar.vercel.app/" underline="none" target="_blank" rel="noopener">
                        vikasparmar.website
                    </Link>
                </Typography>
            </Box>
            <Stack spacing={4} direction="row" justifyContent="center" alignItems="stretch" my={2} >
                <Link href="mailto:vkparmar003@gmail.com" underline="none">
                    <Button variant="outlined" sx={{background: 'white'}}  startIcon={<Email />}> Email</Button>
                </Link>
                <Link href="https://www.linkedin.com/in/vikas-parmar" underline="none">
                    <Button variant="contained"startIcon={<LinkedInIcon />}> LinkedIn</Button>
                </Link>
            </Stack>
            <Box component={'div'}  display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant="h5" color={'white'} fontWeight={600}>
                    About
                </Typography>
                <Typography variant="caption" color={'white'} width='300px' textAlign='justify' gutterBottom>
                    I am a frontend developer with a particular interest in making things simple and
                    automating daily tasks. I try to keep up with security and best practices, and am
                    always looking for new things to learn.
                </Typography>
                <Typography variant="h5" color={'white'} fontWeight={600} gutterBottom>
                    Interests
                </Typography>
                <Typography variant="caption" color={'white'} width='300px' textAlign='justify' gutterBottom>
                    Reading books. Travel geek. Food expert. Music scholar. Internet fanatic. Entrepreneur.
                    Pop culture ninja. Coffee fanatic.
                </Typography>
            </Box>
        </Box>
    )
}
export default MainContent;