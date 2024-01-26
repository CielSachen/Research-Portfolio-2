import { OpenInNew } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Tab,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { type SyntheticEvent, useState } from 'react';
import { Helmet } from 'react-helmet';

import { assets } from '../../assets';
import { TitleCard } from '../../components/common';
import { quizizzes, summatives, worksheets } from '../../utilities';

export function AssessmentsPage() {
  const [value, setValue] = useState('1');

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title>Assessments - Research 3</title>
      </Helmet>
      <div className="page-content">
        <TitleCard
          backgroundImage={assets.images.classroomHeroImage}
          subtitle="A collection of all the assessments taken for Research 3."
          title="Assessments"
        />
        <Box sx={{ my: 10 }}>
          <TabContext value={value}>
            <Box sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}>
              <TabList
                onChange={handleChange}
                variant="fullWidth"
              >
                <Tab label="Formative" value="1" />
                <Tab label="Summative" value="2" />
                <Tab label="Proposal Defense" value="3" />
                <Tab label="Final Defense" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Container sx={{ mt: 10 }}>
                <Typography
                  fontWeight="bold"
                  gutterBottom
                  sx={{ mb: 6 }}
                  variant="h3"
                >Worksheets</Typography>
                <Grid
                  container
                  spacing={1}
                >
                  {worksheets.map((worksheet, index) => (
                    <Grid
                      key={index}
                      sm={6}
                      xs={12}
                    >
                      <Card sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                      }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography
                            color="text.secondary"
                            gutterBottom
                          >{worksheet.deadline}</Typography>
                          <Typography
                            fontWeight="bold"
                            gutterBottom
                            variant="h6"
                          >{worksheet.name}</Typography>
                          <Typography
                            color="text.secondary"
                            gutterBottom
                          >{worksheet.score}/{worksheet.points}</Typography>
                          <Typography
                            gutterBottom
                            sx={{ whiteSpace: 'pre-wrap' }}
                            variant="body2"
                          >{worksheet.description}</Typography>
                          <Grid
                            container
                            spacing={0.5}
                          >
                          </Grid>
                        </CardContent>
                        <CardActions>
                          <Button
                            endIcon={<OpenInNew />}
                            href={worksheet.link}
                            rel="noreferrer"
                            target="_blank"
                          >VIEW GOOGLE DOCS</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Typography
                  fontWeight="bold"
                  gutterBottom
                  sx={{ my: 6 }}
                  variant="h3"
                >Quizizzes</Typography>
                <Grid
                  container
                  spacing={1}
                >
                  {quizizzes.map((quizizz, index) => (
                    <Grid
                      key={index}
                      sm={6}
                      xs={12}
                    >
                      <Card sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                      }}>
                        <CardContent>
                          <Typography
                            color="text.secondary"
                            gutterBottom
                          >November 13, 2023</Typography>
                          <Typography
                            fontWeight="bold"
                            gutterBottom
                            variant="h6"
                          >{quizizz.name}</Typography>
                          <Typography
                            color="text.secondary"
                            gutterBottom
                          >100/100</Typography>
                          <Typography
                            gutterBottom
                            sx={{ whiteSpace: 'pre-wrap' }}
                            variant="body2"
                          >{quizizz.description}</Typography>
                          <Grid
                            container
                            spacing={0.5}
                          >
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </TabPanel>
            <TabPanel value="2">
              <Container sx={{ mt: 10 }}>
                <Typography
                  fontWeight="bold"
                  gutterBottom
                  sx={{ mb: 6 }}
                  variant="h3"
                >Written Works</Typography>
                <Grid
                  container
                  spacing={1}
                >
                  {summatives.map((summative, index) => (
                    <Grid
                      key={index}
                      sm={6}
                      xs={12}
                    >
                      <Card sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                      }}>
                        <CardContent>
                          <Typography
                            color="text.secondary"
                            gutterBottom
                          >{summative.takenDate}</Typography>
                          <Typography
                            fontWeight="bold"
                            gutterBottom
                            variant="h6"
                          >{summative.name}</Typography>
                          <Typography
                            color="text.secondary"
                            gutterBottom
                          >{summative.score}/{summative.points}</Typography>
                          <Typography
                            gutterBottom
                            sx={{ whiteSpace: 'pre-wrap' }}
                            variant="body2"
                          >{summative.description}</Typography>
                          <Grid
                            container
                            spacing={0.5}
                          >
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </TabPanel>
            <TabPanel value="3">
              <Container sx={{ mt: 10 }}>
                <object
                  data={assets.pdfs.proposalDefensePresentation}
                  height="550px"
                  type="application/pdf"
                  width="100%"
                />
              </Container>
            </TabPanel>
            <TabPanel value="4">
              <Container sx={{ mt: 10 }}>
                <object
                  data={assets.pdfs.finalDefensePresentation}
                  height="550px"
                  type="application/pdf"
                  width="100%"
                />
              </Container>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
}
