import { Container, styled, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface Props {
  backgroundImage: string;
  children?: ReactNode;
  linearGradient?: string;
  subtitle: string;
  title: string;
}

export function TitleCard(props: Props) {
  const Card = styled('div')((component) => component.theme.unstable_sx({
    backgroundImage: props.linearGradient
      ? `linear-gradient(${props.linearGradient}), url(${props.backgroundImage})`
      : `url(${props.backgroundImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: 8,
    display: 'flex',
    height: {
      sm: '60dvh',
      xs: '100%',
    },
    m: 1,
  }));

  return (
    <Card>
      <Container sx={{
        color: 'white',
        my: {
          sm: 'auto',
          xs: 5,
        },
      }}>
        <Typography
          fontWeight="bold"
          variant="h1"
        >{props.title}</Typography>
        <Typography
          fontWeight="normal"
          variant="h6"
        >{props.subtitle}</Typography>
        {props.children
          ? props.children
          : null}
      </Container>
    </Card>
  );
}
