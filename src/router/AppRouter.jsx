import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PageLoader from "@/components/PageLoader";
import Setup from "@/pages/settings/Setup";

const Dashboard = lazy(() =>
  import(/*webpackChunkName:'DashboardPage'*/ "@/pages/Dashboard")
);
const Admin = lazy(() =>
  import(/*webpackChunkName:'AdminPage'*/ "@/pages/Admin")
);

const Customer = lazy(() =>
  import(/*webpackChunkName:'CustomerPage'*/ "@/pages/Customer")
);

const SelectCustomer = lazy(() =>
  import(/*webpackChunkName:'SelectCustomerPage'*/ "@/pages/SelectCustomer")
);
const ClientsAll = lazy(() =>
  import(/*webpackChunkName:'ClientsAll'*/ "@/pages/SAN_Clients/ClientsAll")
);
const AutomationRule = lazy(() =>
  import(/*webpackChunkName:'AutomationRule'*/ "@/pages/SAN_Clients/AutomationRule")
);
const NewAppoinments = lazy(() =>
  import(/*webpackChunkName:'NewAppoinments'*/ "@/pages/SAN_Clients/NewAppointment")
);
const UserDetails = lazy(() =>
  import(/*webpackChunkName:'UserDetails'*/ "@/pages/SAN_Clients/User")
);
const AddProduct = lazy(() =>
  import(/*webpackChunkName:'AddProduct'*/ "@/pages/SAN_Clients/AddProduct")
);
const SelectChannel = lazy(() =>
  import(/*webpackChunkName:'SelectChannel'*/ "@/pages/SAN_Clients/SelectChannel")
);

const Lead = lazy(() => import(/*webpackChunkName:'LeadPage'*/ "@/pages/Lead"));
const Product = lazy(() =>
  import(/*webpackChunkName:'ProductPage'*/ "@/pages/Product")
);

const Logout = lazy(() =>
  import(/*webpackChunkName:'LogoutPage'*/ "@/pages/Logout")
);
const NotFound = lazy(() =>
  import(/*webpackChunkName:'NotFoundPage'*/ "@/pages/NotFound")
);

export default function AppRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <PrivateRoute path="/" component={Dashboard} exact />
          <PrivateRoute component={Customer} path="/customer" exact />
          <PrivateRoute
            component={SelectCustomer}
            path="/selectcustomer"
            exact
          />
          <PrivateRoute component={Lead} path="/lead" exact />
          <PrivateRoute component={Product} path="/product" exact />
          <PrivateRoute component={Setup} path="/setup" exact />
          <PrivateRoute component={Admin} path="/admin" exact />
          <PrivateRoute component={ClientsAll} path="/clientsall" exact />
          <PrivateRoute component={AutomationRule} path="/automation" exact />
          <PrivateRoute component={NewAppoinments} path="/newAppoinment" exact />
          <PrivateRoute component={UserDetails} path="/user" exact />
          <PrivateRoute component={AddProduct} path="/addProduct" exact />
          <PrivateRoute component={SelectChannel} path="/selectChannel" exact />

          <PrivateRoute component={Logout} path="/logout" exact />
          <PublicRoute path="/login" render={() => <Redirect to="/" />} />
          <Route
            path="*"
            component={NotFound}
            render={() => <Redirect to="/notfound" />}
          />
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}
