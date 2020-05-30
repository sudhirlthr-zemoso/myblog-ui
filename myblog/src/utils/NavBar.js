// src/components/NavBar.js

import React from "react";
import { useAuth0,Auth0Provider } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import { Grid, Button } from '@material-ui/core';
import Posts from '../components/organisms/blog-Post';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        
          <div>
              <Grid container justify="center" style={{ marginTop: '10px' }}>
                  <Button variant="outlined" color="primary" style={{ textTransform: "none" }} onClick={() => loginWithRedirect({})}>Log in</Button>
              </Grid>
          </div>
        
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
      <span>
        <Link to="/">Home</Link>&nbsp;
        {/* <Link to="/profile">Profile</Link> */}
        <Posts />
      </span>
    )}
    </div>
  );
};

export default NavBar;