import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const Clients = ({match}) => {
    return (
        <Suspense fallback={<Loading cover="content"/>}>
            <Switch>
                <Route path={`${match.url}/clientlist`} component={lazy(() => import(`./clientlist`))} />
            </Switch>
        </Suspense>
    );
};

export default Clients;