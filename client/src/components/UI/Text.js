import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Text = styled(Typography, {
    shouldForwardProp: prop => prop !== 'primary' && prop !== 'dark' && prop !== 'secondary' && prop !== 'dropShadow' && prop !== 'dropShadowParams'
})
    (({ primary, secondary, dark, dropShadow, dropShadowParams, theme }) => {
        let dropShadowColor = theme.palette.primary.white;
        if (!dropShadowParams) dropShadowParams = '2px 2px 0px'
        let textColor = theme.palette.primary.white;
        if (primary) {
            textColor = dark ? theme.palette.primary.dark : theme.palette.primary.main;
        } else if (secondary) {
            textColor = dark ? theme.palette.secondary.dark : theme.palette.secondary.main;
        } else {
            dropShadowColor = theme.palette.primary.main;
        }

        return ({
            color: textColor,
            textShadow: dropShadow ? `${dropShadowParams} ${dropShadowColor}` : '',
        })
    });

export default Text;