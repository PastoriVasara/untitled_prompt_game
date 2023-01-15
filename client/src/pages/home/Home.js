import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Text from "../../components/UI/Text";
import AnimateButton from "../../components/UI/AnimateButton";
import { Grid } from "@mui/material";
import ImageView from "../../components/UI/ImageView";
import { motion } from "framer-motion"


const Home = () => {
    const [visibleImage, setVisibleImage] = useState(false);
    const debugButton = () => {
        setVisibleImage(!visibleImage);
    }

    return (
        <Grid container spacing={2} sx={{ textAlign: 'center' }}>
            <Grid item xs={12}>
            <Text fontSize={'48px'}> Welcome to untitled_prompt_game</Text>
            </Grid>
            <Grid item xs={12}>
                <AnimateButton Text="Home" Size="large" clickEvent={debugButton}/>
            </Grid>
            <Grid item xs={12}>    
            {   visibleImage 
            ? 
                <motion.div
                initial={{ scale: 0.5 }}
                animate={{scale: 0.9}}
                transition={{
                    type: "spring",
                    duration: 0.5, bounce: 0.4
                }}
                >
                    <ImageView/>
                </motion.div> 
            : 
                null
            }
            </Grid>
        </Grid>
    )

}


export default Home;