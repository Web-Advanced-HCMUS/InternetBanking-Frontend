import { Button, Divider, Grid, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { tokens } from 'theme';

const CardItem = ({ bank_name, bank_no, owner, status, default_card }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleDefaultCard = () => {
    console.log('Default Card');
  };
  return (
    <Box bgcolor={colors.primary[500]} border={2} boxShadow="1px 2px 2px 1px" color={colors.grey[200]} pt={2} pb={1} px={4} borderRadius={5}>
      <Grid container spacing={2} rowSpacing={0.5}>
        <Grid item xs={3}>
          <Typography variant="h5" textAlign="right" fontWeight="bold">
            Bank name:
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h5">{bank_name}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5" textAlign="right" fontWeight="bold">
            Account No:
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h5">{bank_no}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5" textAlign="right" fontWeight="bold">
            Owner Name:
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h5">{owner}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5" textAlign="right" fontWeight="bold">
            Card Status:
          </Typography>
        </Grid>
        <Grid item xs={9} mb={1}>
          <Typography variant="h5">{status}</Typography>
        </Grid>
      </Grid>

      {!!!default_card && (
        <>
          <Divider light />
          <Box display="flex" justifyContent="flex-end" mt={2} mb={1}>
            <Button
              variant="filled"
              sx={{ bgcolor: `${colors.grey[100]} !important`, color: `${colors.blue[800]}`, fontWeight: '800' }}
              onClick={handleDefaultCard}
            >
              SET TO DEFAULT CARD
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CardItem;
