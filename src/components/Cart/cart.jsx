import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Button } from '@material-ui/core';
import { increment } from '../../store/products';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  marginNone: {
    margin: 0,
  },
});
function Cart({ right, toggleDrawer, cart, increment, remove }) {
  const classes = useStyles();
  return (
    <SwipeableDrawer
      anchor="right"
      open={right}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      className="cart"
    >
      <List className={classes.list}>
        {cart.length === 0 ? (
          <ListItem button>no items in your cart</ListItem>
        ) : (
          cart.map(item => (
            <ListItem key={item.name}>
              <p className={classes.marginNone}>
                {item.name} {item.count}
              </p>
              <Button
                variant="danger"
                onClick={() => {
                  increment(item.name);
                  remove(item.name);
                }}
              >
                X
              </Button>
            </ListItem>
          ))
        )}
      </List>
    </SwipeableDrawer>
  );
}

export default Cart;
