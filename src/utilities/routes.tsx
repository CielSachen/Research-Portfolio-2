import {
  AccountBox,
  AccountBoxOutlined,
  Article,
  ArticleOutlined,
  DateRange,
  DateRangeOutlined,
  Grading,
  GradingOutlined,
  Home,
  HomeOutlined,
  OpenInNew,
} from '@mui/icons-material';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import {
  AboutPage,
  AssessmentsPage,
  HomePage,
  NotFoundPage,
  ProgressReportsPage,
} from '../pages';

export interface Route {
  index?: boolean;
  path: string;
  element: ReactNode;
  sidebarProps?: {
    displayText: string;
    icon: ReactNode;
    activeIcon: ReactNode;
    endIcon?: ReactNode;
  };
  children?: Route[];
}

export const routes: Route[] = [
  {
    index: true,
    path: '/',
    element: <HomePage />,
    sidebarProps: {
      displayText: 'Home',
      icon: <HomeOutlined />,
      activeIcon: <Home />,
    },
  },
  {
    path: '/about',
    element: <AboutPage />,
    sidebarProps: {
      displayText: 'About & Reflection',
      icon: <AccountBoxOutlined />,
      activeIcon: <AccountBox />,
    },
  },
  {
    path: 'https://docs.google.com/document/d/1mX-y3i1tyAkUB9QXyzGnZKAQGPm3-U5DHsnLEYH7mEA/edit?usp=sharing',
    element: <Navigate to="/" />,
    sidebarProps: {
      displayText: 'Manuscript',
      icon: <ArticleOutlined />,
      activeIcon: <Article />,
      endIcon: <OpenInNew />,
    },
  },
  {
    path: '/assessments',
    element: <AssessmentsPage />,
    sidebarProps: {
      displayText: 'Assessments',
      icon: <GradingOutlined />,
      activeIcon: <Grading />,
    },
  },
  {
    path: '/progress-report',
    element: <ProgressReportsPage />,
    sidebarProps: {
      displayText: 'Progress Report',
      icon: <DateRangeOutlined />,
      activeIcon: <DateRange />,
    },
  },
  {
    path: '/*',
    element: <NotFoundPage />,
  },
];
