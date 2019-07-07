import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact={true} path="/" component={Landing} />
          <Route path="/surveys" component={Dashboard} />
        </div>
      </Router>
    </div>
  );
}

export default App;
