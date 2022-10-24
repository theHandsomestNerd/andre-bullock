import React, {FunctionComponent, useRef} from 'react'
import {Grid, Link} from "@material-ui/core";
import verifiedStamp from "./psychology-today-verified.png"


const PsychologyTodaySeal: FunctionComponent = (props) => {

    // const sealRef: any = useRef()
    // React.useEffect(() => {
    //     const script = document.createElement("script");
    //
    //     script.src = "https://member.psychologytoday.com/verified-seal.js";
    //     script.async = false;
    //
    //     script.setAttribute("data-badge", "13")
    //     script.setAttribute("data-id", "863772")
    //     script.setAttribute("data-code", "aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy9bQkFER0VdL3Byb2ZpbGUvW1BST0ZJTEVfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s=")
    //
    //     const thisRef = sealRef.current
    //     sealRef.current?.appendChild(script);
    //
    //     return () => {
    //         thisRef?.removeChild(script);
    //     };
    // }, [])

    return (
        <Grid item>
                <Link
                    // ref={sealRef}
                    href="https://www.psychologytoday.com/profile/863772" className="sx-verified-seal">
                    <img src={verifiedStamp} alt="verified by psychology today"/>
                </Link>
        </Grid>

    )
}

export default PsychologyTodaySeal