import React from "react"
import LogInPage from "./pages/LogInPage"
import LoggedInPage from "./pages/LoggedInPage"
import MessagesPanel from "./pages/MessagesPanel"
import { Route, Redirect } from "react-router-dom"

export default function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login" exact>
        <LogInPage />
      </Route>
      <Route path="/logged-in" exact>
        <LoggedInPage />
      </Route>
    </div>
  )
}
