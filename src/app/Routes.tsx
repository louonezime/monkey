import { ReactElement } from "react";
import { Stack } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from '../pages/Home';
import Start from '../pages/Play';

const AppRoutes = (): ReactElement => {
    return (
        <Stack>
          <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/start' element={<Start />} />
          </Routes>
          </BrowserRouter>
        </Stack>
    );
}

export default AppRoutes;