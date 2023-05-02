import React from "react";
import profile from '../Assets/profile.jpg';
import { Box } from "@mui/material";

const imageStyle = { borderRadius: '10px 10px 0 0' }
const Header = () => {
    return (
        <Box component={'header'} width={'fix content'} paddingTop={4}>
            <img src={profile} alt="profile" width="320px" style={imageStyle} />
        </Box>
    )
}

export default Header;