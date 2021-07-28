import React from 'react'
import Navigator from "./components/common/Navigator"
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom"
import "./assets/scss/base.scss"
import PageRenderer from "./components/common/Page-renderer"
const user = {
    firstName:"Ma",
    lastName:"Xuan"
}


export default function App() {
    return (
        <BrowserRouter>
            <Navigator user={user} />
            <Switch >
                <React.Fragment>
                    <Route path="/:page"  component={PageRenderer} />
                    <Route path="/" render={()=><Redirect to="/home"/> }/>   
                </React.Fragment>
            </Switch>
    </BrowserRouter>
    )
}
