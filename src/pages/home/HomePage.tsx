import { Box, Container, styled, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

import { assets } from '../../assets';

export function HomePage() {
  const HeroImage = styled('div')((component) => component.theme.unstable_sx({
    backgroundImage: {
      md: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${assets.images.dostHeroImage})`,
      xs: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${assets.images.dostHeroImage})`,
    },
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: {
      md: 'row',
      xs: 'column',
    },
    height: {
      sm: 'calc(100dvh - 64px)',
      xs: 'calc(100dvh - 56px)',
    },
    '@media (orientation: landscape)': {
      height: {
        sm: 'calc(100dvh - 64px)',
        xs: '100%',
      },
      py: {
        sm: 'auto',
        xs: 10,
      },
    },
  }));

  const HeroImageContent = styled('div')((component) => component.theme.unstable_sx({
    color: 'white',
    textAlign: {
      md: 'left',
      xs: 'center',
    },
  }));

  return (
    <>
      <Helmet>
        <title>Research 3</title>
      </Helmet>
      <div className="page-content">
        <HeroImage>
          <Box sx={{ m: 'auto' }}>
            <Container>
              <HeroImageContent>
                <Typography
                  fontWeight="bold"
                  gutterBottom
                  variant="h1"
                >Research 3: Inquiries, Investigations, and Immersion</Typography>
                <Typography
                  fontWeight="normal"
                  variant="h6">STEM Grade 12 Term 2</Typography>
              </HeroImageContent>
            </Container>
          </Box>
        </HeroImage>
      </div>
    </>
  );
}
