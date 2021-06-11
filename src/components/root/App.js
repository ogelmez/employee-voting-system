import { Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import EmployeeList  from "../employee-list/EmployeeList";
const EmployeeDetail = lazy(() => import("../employee-detail/EmployeeDetail"));
function App() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <Switch>
        <Route exact path={["/", "/employees"]} component={EmployeeList} />
        <Route exact path="/employee/:id" component={EmployeeDetail} />
      </Switch>
    </Suspense>
  );
}

export default App;
