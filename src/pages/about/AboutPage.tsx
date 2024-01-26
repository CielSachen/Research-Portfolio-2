import {
  Box,
  Container,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Helmet } from 'react-helmet';

import { assets } from '../../assets';

export function AboutPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const Image = styled('img')((component) => component.theme.unstable_sx({ borderRadius: 8 }));

  const profilePicture = (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      mx: {
        md: 'none',
        xs: 'auto',
      },
      width: {
        md: '50%',
        xs: '100%',
      },
    }}>
      <Image
        alt="Profile Picture"
        src="https://drive.google.com/thumbnail?id=1JqOYV5RB3PZepsBGg2k7wajmMBYZNUp6&sz=w1000"
        sx={{
          mx: 'auto',
          objectFit: 'cover',
          width: '50%',
        }}
      />
    </Box>
  );
  const dostPicture = (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      mb: {
        md: 'none',
        xs: 7,
      },
      mx: {
        md: 'none',
        xs: 'auto',
      },
      width: {
        md: '50%',
        xs: '100%',
      },
    }}>
      <Image
        alt="Campus Picture"
        src={assets.images.dost}
        sx={{
          height: '100%',
          mx: 'auto',
          maxWidth: '100%',
        }}
      />
    </Box>
  );

  return (
    <>
      <Helmet>
        <title>About Me - Research 3</title>
      </Helmet>
      <div className="page-content">
        <Container sx={{
          mb: 5,
          mt: 10,
          mx: 'auto',
        }}>
          <Stack
            direction={{
              md: 'row',
              xs: 'column',
            }}
            spacing={2}
          >
            {matches
              ? null
              : profilePicture}
            <Box sx={{ width: {
              md: '50%',
              xs: '100%',
            } }}>
              <Typography
                fontWeight="bold"
                gutterBottom
                variant="h5"
              >A STEM student studying in De La Salle Santiago Zobel School</Typography>
              <Typography
                gutterBottom
                sx={{ mt: 3 }}
                variant="subtitle1"
              >
                Raphael Panaligan has been studying in De La Salle Zobel for nearly six (6) years, transferring during seventh (7th) grade on the then new Vermosa campus.
                He chose the Science, Technology, Engineering, and Mathematics (STEM) strand as he has a passion for programming or computers in general, and nuclear energy.
              </Typography>
              <Typography variant="subtitle1">
                A generally antisocial person who prefers to stay in their room, he developed a hobby of programming small projects to pass time.
                Beginning from the basics of JavaScript, and now learning React.js with TypeScript and regular Java.
              </Typography>
            </Box>
            {matches
              ? profilePicture
              : null}
          </Stack>
        </Container>
        <Container sx={{
          mb: 10,
          mt: 5,
          mx: 'auto',
        }}>
          <Typography
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 6 }}
            variant="h3"
          >Lasallian Reflection Framework and Challenge Based Learning Phases</Typography>
          <Stack
            direction={{
              md: 'row',
              xs: 'column',
            }}
            spacing={2}
          >
            <Box sx={{ width: {
              md: '50%',
              xs: '100%',
            } }}>
              {matches
                ? null
                : dostPicture}
              <Typography variant="subtitle1">
                My research journey had been long and arduous.
                We encountered many setbacks due to its inherent technicality and just how much time producing the samples for testing takes.
                Time limitations also left us with no choice but to omit a water absorption test.
                We had also forgotten to test regular concrete, having no bottle or can inside, leading us to face difficulties during our defense.
                Despite all of this though, we were able to learn a lot from the research.
                From the construction of water reservoirs to how concrete mixes work, as well as learning how to use analytical tests and interpret their results properly.
              </Typography>
              <Typography
                fontWeight="bold"
                gutterBottom
                sx={{ mt: 3 }}
                variant="h5"
              >Engage Phase/Suri-Nilay</Typography>
              <Typography variant="subtitle1">
              Our group were able to meet with our partner community, Sitio Makabuhay, to gather information about what the community needs.
              One of the community’s needs was a place to store potable water.
              Therefore, our group decided to embark on this project to find a cheaper and environmentally friendly alternative to purely cement water reservoirs.
              </Typography>
              <Typography
                fontWeight="bold"
                gutterBottom
                sx={{ mt: 3 }}
                variant="h5"
              >Investigate Phase/Analysis-Reflection</Typography>
              <Typography variant="subtitle1">
              We gathered data through testing, specifically compressive strength testing, from the Department of Science and Technology (DOST).
              We used cylindrical samples so that they could fit in the compressive strength machines; these samples represented the mixes that we wanted to compare against each other.
              The data given to us was then analyzed using the JAMOVI software, where we found that it is not normally distributed.
              </Typography>
              <Typography
                fontWeight="bold"
                gutterBottom
                sx={{ mt: 3 }}
                variant="h5"
              >Act Phase/Commitment-Action</Typography>
              <Typography variant="subtitle1">We have not been able to provide a chance to present our capstone to our partner community, therefore this section cannot be accomplished until Practical Research 4 in the following term. </Typography>
            </Box>
            {matches
              ? dostPicture
              : null}
          </Stack>
        </Container>
      </div>
    </>
  );
}
