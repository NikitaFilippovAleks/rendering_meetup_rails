import { Button, IconButton, Stack, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from "react"
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from "react-router-dom";

export const CounterPage = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <Stack>
      <Stack>
        <Typography>Count is: {count}</Typography>
      </Stack>

      <Stack sx={{ flexDirection: 'row' }}>
        <IconButton onClick={() => setCount((prev) => prev + 1)} sx={{ color: 'white' }}>
          <AddIcon />
        </IconButton>

        <IconButton onClick={() => setCount((prev) => prev - 1)} sx={{ color: 'white' }}>
          <RemoveIcon />
        </IconButton>
      </Stack>

      <Button onClick={() => navigate('/')}>
        Go back
      </Button>
    </Stack>
  )
}
