import { ReactElement } from "react";
import { Stack } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from '../pages/Home';

const AppRoutes = (): ReactElement => {
    return (
        <Stack>
          <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />} />
          </Routes>
          </BrowserRouter>
        </Stack>
    );
}

export default AppRoutes;