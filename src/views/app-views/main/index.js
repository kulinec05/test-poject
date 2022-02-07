import React, {lazy, Suspense} from 'react';
import Loading from "../../../components/shared-components/Loading";
import {Redirect, Route, Switch} from "react-router-dom";
import {APP_PREFIX_PATH} from "../../../configs/AppConfig";

const Main = ({match}) => {
    return (
        <Suspense fallback={<Loading cover="content"/>}>
            <Switch>
                <Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
            </Switch>
        </Suspense>
    );
};

export default Main;