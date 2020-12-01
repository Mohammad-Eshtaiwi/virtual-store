import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { rerender, decrement } from '../../store/products';
import { add } from '../../store/cart';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Products(props) {
  console.log('products', props);
  const classes = useStyles();
  useEffect(() => {
    props.rerender(props.activeCategory);
  }, [props.activeCategory]);

  return (
    <Container>
      <Grid container spacing={3}>
        {props.productsToDisplay.map(product => (
          <Grid item xs={12} md={3} key={product.name}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={product.image} title={product.name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, expedita!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    props.add(product);
                    props.decrement(product);
                  }}
                >
                  Add To Cart
                </Button>
                <Button size="small" color="primary">
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const mapStateToProps = store => {
  console.log('store', store);
  return {
    productsToDisplay: store.products.productsToDisplay,
    activeCategory: store.categories.activeCategory,
  };
};
const mapDispatchToProps = { rerender, add, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
