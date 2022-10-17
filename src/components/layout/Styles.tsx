import {makeStyles, Theme} from "@material-ui/core";
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";

export const useThwStyles = makeStyles({
    fullscreen: {
        width: 'calc(100vw)',
        height: 'calc(100vh)',
        position: "relative"
    },
    fullscreenPlus: {
        width: 'calc(100vw)',
        height: 'calc(100vh)',
        position: "relative"
    },
    endAdornedInput: {
        "& .MuiFilledInput-adornedEnd": {
                paddingRight: 0
            },
        "& .MuiOutlinedInput-adornedEnd": {
            paddingRight: 0
        }
    },
    spacer: {
        marginBottom: "40px"
    },
    fullscreenOverlay: {
        position: "absolute",
        backgroundColor: `rgba(0, 0, 0, .5)`
    },
    fullScreenImage: {
        position: "relative",
        backgroundImage: (props:any)=>`url(${props.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: TransformHWTheme.palette.background.default
    },
    fullSection: {
        width: 'calc(100vw)',
        height: '100%',
        position: "relative",
        zIndex: 0
    },
    fullSectionOverlay: {
        position: "absolute",
        backgroundColor: `rgba(0, 0, 0, .3)`,
        minHeight: '512px',
        height: '100%',
        width: "100%",
        zIndex:1
    },
})

export default {useThwStyles}