import {
  Container,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Helmet } from 'react-helmet';

import { assets } from '../../assets';
import { TitleCard } from '../../components/common';
import { progressReports } from '../../utilities';

export function ProgressReportsPage() {
  return (
    <>
      <Helmet>
        <title>Progress Reports - Research 3</title>
      </Helmet>
      <div className="page-content">
        <TitleCard
          backgroundImage={assets.images.calendarHeroImage}
          linearGradient="to right, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)"
          subtitle="A collection of all the progress reports of my research group's research project."
          title="Progress Reports"
        />
        <Container sx={{ my: 10 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Number</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Link</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {progressReports.map((progressReport, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{progressReport.date}</TableCell>
                    <TableCell>
                      <Link
                        href={progressReport.link}
                        rel="noreferrer"
                        target="_blank"
                      >{progressReport.link}</Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    </>
  );
}
