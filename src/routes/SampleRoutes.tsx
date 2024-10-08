import SideBarLayout from '@/components/navigation/SideBarLayout';
import ConditionalComponent from '@/components/sample/ConditionalComponent';
import EffectComponent from '@/components/sample/EffectComponent';
import FormComponent from '@/components/sample/FormComponent';
import ListComponent from '@/components/sample/ListComponent';
import StateComponent from '@/components/sample/StateComponent';

import { lazy } from 'react';

// project import

const XmlGenerator = lazy(() => import('@/pages/sample/xml-generator/xmlGenerator'));
const ExcelGenerator = lazy(() => import('@/pages/sample/excel-generator/excelGenerator'));
const TicTacToePage = lazy(() => import('@/pages/sample/tic-tac-toe/TicTacToePage'));
const StyledLogin = lazy(() => import('@/pages/sample/styled-login/StyledLogin'));

// ==============================|| AUTH ROUTING ||============================== //

const SampleRoutes = {
  path: '/',
  element: <SideBarLayout />,
  children: [
    {
      path: '/xml-generator',
      element: <XmlGenerator />
    },
    {
      path: '/excel-generator',
      element: <ExcelGenerator />
    },
    { path: '/state', element: <StateComponent /> },
    { path: '/effect', element: <EffectComponent /> },
    { path: '/form', element: <FormComponent /> },
    { path: '/list', element: <ListComponent /> },
    { path: '/conditional', element: <ConditionalComponent /> },
    { path: '/toc-tac-toe', element: <TicTacToePage /> },
    { path: '/styled-login', element: <StyledLogin /> }
  ]
};

export default SampleRoutes;