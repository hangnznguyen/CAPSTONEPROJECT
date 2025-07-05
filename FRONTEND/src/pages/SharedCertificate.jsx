// pages/SharedCertificate.jsx
import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import Certificate from '../components/Certificate';

export default function SharedCertificate() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const name = params.get('name') || 'Anonymous';
  const score = parseInt(params.get('score')) || 0;

  return (
    <Box sx={{ py: 6 }}>
      <Certificate name={name} score={score} />
      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Box>
    </Box>
  );
}
