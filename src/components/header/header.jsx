import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default class Header extends Component {
  render() {
    return (
      <header>
        <AppBar position="static">
          <Toolbar className="my-nav">
            <Link color="inherit">
              <Typography variant="h6">Our Store</Typography>
            </Link>
            <Link color="inherit">Cart(0)</Link>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}
