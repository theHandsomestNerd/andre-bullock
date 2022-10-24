import React, {FunctionComponent, useEffect, useState} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'

import {Grid, Link, Typography} from '@material-ui/core'
import {SanityMenuGroup, SanityMenuItem} from "../../../sanity/Menu";
import TransformHWTheme from "../../../theme/transform-hw/TransformHWTheme";
import {SanityRef} from "../../../common/sanityIo/Types";
import cmsClient from "../../block-content-ui/cmsClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginRight: theme.spacing(11),
    },
    footerLink: {
        marginBottom: '8px',
        textDecoration: 'none',
        // color: '#FDF3EB',
        '&:hover': {
            textDecoration: 'none',
        },
        textTransform: 'capitalize',
    },
    menuItem: {
        paddingLeft: '32px',
        paddingRight: '32px',
    },
    menuTitle: {
        // color: '#FDF3EB',
        marginBottom: theme.spacing(1),
    },
    popover: {
        boxShadow: 'none',
        borderLeft: `4px solid ${theme.palette.background.default}`,
        borderRadius: 0,
    },
    list: {
        padding: 0,
    },
}))

export type LandingPagesFooterMenuGroupProps = {
    menuGroup: SanityMenuGroup,
}

const ThwFooterMenuGroup: FunctionComponent<LandingPagesFooterMenuGroupProps> = ({menuGroup}) => {
    const classes = useStyles(TransformHWTheme)

    const [menuGroupContents, setMenuGroupContents] = useState<SanityMenuGroup>()
    const [menuItemContents, setMenuItemContents] = useState<SanityMenuItem>()
    // const [realizedLinks, setRealizedLinks] = useState<SanityMenuItem[]>()

    // useEffect(() => {
    //     const realizedLinkPromises = menuGroupContents?.links?.map(async (linkRef) => {
    //         return await cmsClient.fetchRef(linkRef)
    //     }) ?? []
    //
    //     Promise.all(realizedLinkPromises).then((realizedLinks) => {
    //         setRealizedLinks(realizedLinks)
    //     })
    //
    // }, [menuGroupContents])

    useEffect(() => {
        if (menuGroup._type === "menuGroup") {
            setMenuGroupContents(menuGroup)
        } else if (menuGroup._type === "menuItem") {
            setMenuItemContents(menuGroup)
        }
    },[])

    return (
        <Grid container direction="column" spacing={2} className={classes.root}>
            <Grid container item>
                <Typography color='primary' variant="body2"
                            className={classes.menuTitle}>{menuGroupContents && menuGroupContents.menuGroupTitle}</Typography>
            </Grid>
            <Grid item container>
                <Grid container item xs={8} direction='column' spacing={2}>
                    {
                        menuGroup?.links && menuGroup.links.map( (menuLink, index: any) => {
                            return (
                                <Grid key={index} item>
                                    <Link href={menuLink.url} className={classes.footerLink}>
                                        <Typography variant="body1" color='textSecondary' noWrap>
                                            {menuLink.displayText}
                                        </Typography>
                                    </Link>
                                </Grid>
                            )
                        })
                    }
                    {
                        menuItemContents && <Grid item>
                            <Link href={menuItemContents.url} className={classes.footerLink}>
                                <Typography variant="body1" color='textSecondary' noWrap>
                                    {menuItemContents.displayText}
                                </Typography>
                            </Link>
                        </Grid>
                    }
                    {!menuGroupContents && !menuItemContents && <></>}
                </Grid>

            </Grid>
        </Grid>

    )
}

export default ThwFooterMenuGroup