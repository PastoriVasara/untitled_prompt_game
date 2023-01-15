import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { duration } from "@mui/material";

const MotionButton = motion(Button);

function AnimateButton({Text,Size,clickEvent}) {
  return (
    <MotionButton
    size={Size}
    onClick ={clickEvent}
    initial={{ backgroundColor: "#690375" }}
    animate={{ backgroundColor: "#AE847E" }}
    whileHover={{ 
      scale: 1.1,
      duration: 0.5,
    }}
    whileTap={{
      backgroundColor: "#CB429F",
      scale: 0.9,
      delay: 0
    }}
    variant="contained"
    >
      {Text}
    </MotionButton>
  );
}

export default AnimateButton;