import React from "react";
import Routes from "../routes/Index";
import NavBar from "./NavBar";
import FooterNav from "./FooterNav";


export default class App extends React.Component {

    render() {
        return (
            <>
                <NavBar />
                <Routes />
                <FooterNav />

            </>
        )

    }
}