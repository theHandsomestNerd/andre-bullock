import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Button, Grid, Typography, useMediaQuery} from '@material-ui/core'
import {urlFor} from '../abReplica/static-pages/cmsStaticPagesClient'
import {ThwAboutProprietorSectionType} from "../BlockContentTypes";
import TransformHWTheme from "../../theme/transform-hw/TransformHWTheme";
import MediaQueries from "../layout/MediaQueries";
import CssFadeToColor from "../css-fade-to-color/CssFadeToColor";
import {CssFadeToColorDirectionEnum} from "../css-fade-to-color/CssFadeToColorDirectionEnum";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '521px',
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5)
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: ThwAboutProprietorSectionType
}

const AboutTheProprietorSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(TransformHWTheme)
    return (
        <Grid container item className={classes.root} xs={11}>
            <Grid container item justifyContent='space-around'>
                <Grid item xs={12} md={5} lg={4} container justifyContent='center' alignContent='center'
                      alignItems='center' style={{minWidth: "max-content"}}>
                    <Grid item style={{overflow: "hidden", position: "relative"}} container justifyContent='center'>
                        <Grid item container style={{position: "relative"}} justifyContent='center'>
                            <CssFadeToColor toColor={"rgba(255,255,255,.94)"}
                                            direction={CssFadeToColorDirectionEnum.RIGHT} isResponsive/>
                            <img alt={props.sectionData.proprietorImageAltText}
                                 src={urlFor(props.sectionData.proprietorImage).height(545).url() ?? ''}/>

                            <Grid justifyContent='center' container item style={{
                                position: "absolute",
                                bottom: 32,
                                left: 0
                            }}>
                                <Grid item>
                                    <Button variant='outlined' color='primary'
                                            href={props.sectionData.ctaButtonLink ?? ''}
                                            style={{
                                                color: "#FAFAFA"
                                            }}
                                    >
                                        {props.sectionData.ctaButtonText}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} lg={7} container direction='column' alignContent='space-between' spacing={2}>
                    <Grid container item style={{minHeight: "549px"}} direction='column' spacing={4}>
                        <Grid container item direction='column'>
                            <Grid item>
                                <Typography variant='h4'
                                            color='secondary'
                                            noWrap
                                            style={{fontWeight: 550}}>{props.sectionData.proprietorName}</Typography>
                            </Grid>
                            <Grid item>

                                <Typography variant='body1' color='primary'
                                            style={{fontStyle: "italic"}}>{props.sectionData.proprietorTitle}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container>
                            <Grid item>
                                <Typography variant='body1'
                                            color='secondary' gutterBottom>{props.sectionData.contentText}</Typography>
                            </Grid>
                            <Grid item container justifyContent='flex-end'
                                  style={{marginTop: TransformHWTheme.spacing(2.5)}}>
                                <img alt={props.sectionData.proprietorSignatureImageAltText}
                                     src={urlFor(props.sectionData.proprietorSignatureImage).height(70).url() ?? ''}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AboutTheProprietorSection