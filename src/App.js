import { useEffect, useState } from "react";
import { Layout } from "./Layout/Layout";
import { Router } from "./routes/Router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/reducers/auth.reducer";

function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    // local login
    const user = { username: 'sajjad', password: '123' }
    dispatch(login(user))
  }, [])
  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
