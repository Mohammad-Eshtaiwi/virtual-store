import React from 'react';
import { connect } from 'react-redux';
import { reactivate } from '../../store/sotre-reducer';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    justifyContent: 'flex-start',
  },
});

function Categories(props) {
  console.log('props', props);
  const classes = useStyles();

  const handleChange = name => {
    // setValue(newValue);
    console.log(name);
    console.log(reactivate);
    props.reactivate(name);
  };

  return (
    <section className="categories padding-tb-1">
      <Container>
        <Grid>
          <Typography variant="body1">Browse our Categories</Typography>

          {props.categories.map(category => (
            <Button
              className={category.name === props.activeCategory ? 'active' : ''}
              onClick={() => {
                handleChange(category.name);
              }}
              key={category.name}
            >
              {category.name}
            </Button>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const mapStateToProps = ({ store }) => {
  console.log('store', store);
  return { categories: store.categories, activeCategory: store.activeCategory };
};
const mapDispatchToProps = { reactivate };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
