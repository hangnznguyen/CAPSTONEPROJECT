import React from 'react';
import { Box, Paper, Typography, Stack, Button } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Certificate = ({ name = '', score = 0 }) => {
  const certRef = React.useRef();

  const handleDownloadPNG = async () => {
    const canvas = await html2canvas(certRef.current, { scale: 2 });
    const link = document.createElement('a');
    link.download = 'QuizTheGlobe_Certificate.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(certRef.current, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('landscape', 'pt', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, (pdfHeight - imgHeight) / 2, pdfWidth, imgHeight);
    pdf.save('QuizTheGlobe_Certificate.pdf');
  };

  const handlePrint = () => {
    const printContent = certRef.current;
    const WinPrint = window.open('', '', 'width=900,height=650');
    WinPrint.document.write('<html><head><title>Print Certificate</title></head><body>');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.write('</body></html>');
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#f0e6f6', minHeight: '100vh' }}>
      <Paper
        ref={certRef}
        elevation={10}
        sx={{
          p: 5,
          mx: 'auto',
          maxWidth: 700,
          borderRadius: 4,
          textAlign: 'center',
          position: 'relative',
          background: 'linear-gradient(135deg, #d1c4e9, #b39ddb)',
          boxShadow: '0 12px 30px rgba(101, 31, 255, 0.2)',
          border: '12px solid #5e35b1',
          fontFamily: "'Cormorant Garamond', serif",
          color: '#311b92',
          userSelect: 'none',
          aspectRatio: '11 / 8.5', // landscape
          '@media print': {
            boxShadow: 'none',
            border: 'none',
            maxWidth: '100%',
            aspectRatio: 'auto',
            pageBreakAfter: 'always',
          },
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ letterSpacing: '0.15em' }}>
          CERTIFICATE OF MASTERY
        </Typography>

        <Typography variant="h5" mb={1}>
          This certificate is proudly awarded to
        </Typography>

        <Typography
          variant="h3"
          fontWeight="bold"
          color="#4527a0"
          sx={{ mb: 3, fontFamily: "'Pacifico', cursive" }}
        >
          {name || 'Your Name Here'}
        </Typography>

        <Typography variant="h6" mb={1}>
          For outstanding achievement in the QuizTheGlobe challenge with a score of
        </Typography>

        <Typography variant="h3" color="#311b92" fontWeight="bold" sx={{ mb: 5 }}>
          {score} Points
        </Typography>

        <Typography
          variant="body1"
          sx={{ fontStyle: 'italic', fontSize: '1.2rem', opacity: 0.8 }}
        >
          "Knowledge is power. Share your wisdom with the world!"
        </Typography>
      </Paper>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="center"
        mt={4}
      >
        <Button variant="contained" color="primary" onClick={handleDownloadPNG}>
          📥 Download PNG
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDownloadPDF}>
          📄 Download PDF
        </Button>
        <Button variant="outlined" color="primary" onClick={handlePrint}>
          🖨️ Print
        </Button>
      </Stack>
    </Box>
  );
};

export default Certificate;
