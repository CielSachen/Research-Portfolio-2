import { Home } from '@mui/icons-material';
import { Button, Container, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page not Found</title>
      </Helmet>
      <div className="page-content">
        <Container sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          my: 10,
          textAlign: 'center',
        }}>
          <Typography
            color="primary"
            fontWeight="bold"
            gutterBottom
            variant="h1"
          >404</Typography>
          <Typography
            gutterBottom
            variant="h4"
          >Page Not Found</Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
          >The page you are looking for doesn&apos;t exist or another error occurred.</Typography>
          <Button
            component={Link}
            disableElevation
            startIcon={<Home />}
            replace
            sx={{ mt: 2 }}
            to="/"
            variant="contained"
          >RETURN TO HOMEPAGE</Button>
        </Container>
      </div>
    </>
  );
}
