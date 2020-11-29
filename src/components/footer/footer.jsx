import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
  return (
    <footer>
      <Container fluid="true" className="padding-tb-1">
        <Grid>
          <Typography variant="body1" align="center">
            © 2020 Javascript 401
          </Typography>
          <Typography variant="body2" align="center">
            React + Redux + Material UI
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
}
