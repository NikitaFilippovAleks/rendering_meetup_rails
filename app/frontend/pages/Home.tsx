import { Box, Button, Stack } from '@mui/material'
import ReactLogo from '../assets/react.svg'
import RailsLogo from '../assets/rails.svg'
import { useNavigate } from 'react-router-dom'
import React from 'react';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <Stack sx={{ flexDirection: 'row', alignItems: 'center'}}>
          <RailsLogo className="logo react" width={80} height={80} />
        +
        <ReactLogo className="logo react" width={80} height={80} />
      </Stack>

      <Button onClick={() => navigate('/counter')}>Go to counter</Button>
    </Stack>
  )
}
