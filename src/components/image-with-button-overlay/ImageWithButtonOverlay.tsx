import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Button, Grid, PropTypes, Typography} from '@material-ui/core'
import CssFadeToColor from "../css-fade-to-color/CssFadeToColor";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {SanityImageSource} from "@sanity/asset-utils";
import {CssFadeToColorDirectionEnum} from "../css-fade-to-color/CssFadeToColorDirectionEnum";
import {ImageWithButtonOverlayAligmentEnum} from "./ImageWithButtonOverlayAligmentEnum";
import {Navigate} from "react-router-dom";

export const useStyles = makeStyles((theme: Theme) => ({
    contentBullets: {
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    fromColor?: string
    toColor?: string
    isResponsive?: boolean
    direction?: CssFadeToColorDirectionEnum
    imageSrc: SanityImageSource
    imageAltText?: string
    ctaButtonLink?: string
    ctaButtonText?: string
    variant?: 'text' | 'contained' | 'outlined'
    height: number
    buttonAlignment?: ImageWithButtonOverlayAligmentEnum
    buttonColor?: PropTypes.Color
    learnMoreLink?: string
}


const ImageWIthButtonOverlay: FunctionComponent<IProps> = (props) => {
    const getButtonAlignment = ()=>{
        switch (props.buttonAlignment){
            case ImageWithButtonOverlayAligmentEnum.RIGHT:
                return 'flex-end'
            case ImageWithButtonOverlayAligmentEnum.LEFT:
                return 'flex-start'
            case ImageWithButtonOverlayAligmentEnum.CENTER:
            default:
                return 'center'
        }
    }

    return (
        <Button fullWidth
                variant='text'
                href={props.learnMoreLink}
                style={{padding: 0}}
        ><Grid item container direction='column'
              style={{position: "relative", cursor:"pointer"}}>
            {props.toColor &&
                props.direction !== undefined &&
                <CssFadeToColor toColor={props.toColor}
                                direction={props.direction}
                                isResponsive={props.isResponsive}/>}
            <Grid item container style={{
                backgroundImage: `url(${urlFor(props.imageSrc).height(props.height).url() ?? ''})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: props.height
            }}>
            </Grid>
            <Grid container item style={{
                position: "absolute",
                bottom: 32,
                left: 0,
                paddingRight: "32px"
            }} justifyContent={getButtonAlignment()}>
                {props.ctaButtonLink && <Button variant={props.variant ? props.variant : 'outlined'}
                         color={props.buttonColor ? props.buttonColor : 'primary'}
                         href={props.ctaButtonLink ?? ''}
                         style={{
                             color: "#FAFAFA"
                         }}
                >
                    <Typography variant='button'
                                color='secondary'>{props.ctaButtonText}</Typography>
                </Button>}
            </Grid>
        </Grid></Button>
    )
}

export default ImageWIthButtonOverlay