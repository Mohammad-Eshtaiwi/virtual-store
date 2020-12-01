import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { remove } from '../../store/cart';
import { increment } from '../../store/products';
import Cart from '../Cart/cart';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  white: { color: '#fff' },
});

function Header({ cart, count, remove, increment }) {
  console.log('Header', cart);
  const classes = useStyles();

  const [state, setState] = useState({
    right: false,
  });
  const toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, right: open });
  };
  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar className="my-nav">
            <Link color="inherit">
              <Typography variant="h6">Our Store</Typography>
            </Link>
            <Button onClick={toggleDrawer(true)} className={classes.white}>
              cart({count})
            </Button>
          </Toolbar>
        </AppBar>
      </header>
      <Cart
        right={state.right}
        toggleDrawer={toggleDrawer}
        cart={cart}
        remove={remove}
        increment={increment}
      />
    </>
  );
}

const mapStateToProps = store => {
  console.log('store', store);
  return {
    cart: store.cart.cart,
    count: store.cart.totalItemsInCart,
  };
};
const mapDispatchToProps = { remove, increment };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
