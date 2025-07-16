import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  CircularProgress,
  Grow,
  TextField,
  Autocomplete,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import fallbackCountries from '../data/fallbackCountries.js';

const API_URL =
  'https://restcountries.com/v2/all?fields=name,alpha2Code,capital,flags,population,region,currencies';

const getFlagEmoji = (code) =>
  code
    ? String.fromCodePoint(
        ...[...code.toUpperCase()].map((c) => 0x1f1a5 + c.charCodeAt(0))
      )
    : '';

export default function Explore() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || '';

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error('Invalid data');
        setCountries(data);
        setFiltered(data);
      } catch {
        setCountries(fallbackCountries);
        setFiltered(fallbackCountries);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const applyFilters = (search, region, sortKey) => {
    let list = [...countries];
    if (region) list = list.filter((c) => c.region === region);
    if (search)
      list = list.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    if (sortKey === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    if (sortKey === 'population')
      list.sort((a, b) => (b.population || 0) - (a.population || 0));
    setFiltered(list);
  };

  const handleSearchInput = (_, value) => {
    setSearchValue(value);
    applyFilters(value, regionFilter, sortBy);
  };
  const handleSearchSelect = (_, option) => {
    const name = option?.name || '';
    setSearchValue(name);
    applyFilters(name, regionFilter, sortBy);
  };
  const handleRegionChange = (e) => {
    const region = e.target.value;
    setRegionFilter(region);
    applyFilters(searchValue, region, sortBy);
  };
  const handleSortChange = (e) => {
    const s = e.target.value;
    setSortBy(s);
    applyFilters(searchValue, regionFilter, s);
  };

  const openCountry = (c) => {
    setSelectedCountry(c);
    setOpenModal(true);
  };
  const closeCountry = () => setOpenModal(false);

  const regions = Array.from(new Set(countries.map((c) => c.region))).filter(
    Boolean
  );

  return (
    <Box
      sx={{
        py: 5,
        background: 'linear-gradient(to right,#e0f7fa,#fff3e0)',
        minHeight: '100vh',
      }}
    >
      <Container>
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography variant="h3" fontWeight="bold" color="primary.main">
            Explore Countries
          </Typography>
          <IconButton onClick={() => navigate('/')}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </Box>

        {userName && (
          <Grow in timeout={1500}>
            <Typography
              variant="h5"
              color="secondary.main"
              sx={{
                mb: 4,
                fontWeight: 'medium',
                fontFamily: '"Comic Sans MS", cursive',
                letterSpacing: '0.05em',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              🎉 Hey <strong>{userName}</strong>! Get ready to dive deep into the
              world and sharpen your geography skills! 🌍✨
            </Typography>
          </Grow>
        )}

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Autocomplete
              freeSolo
              disableClearable
              options={countries}
              inputValue={searchValue}
              onInputChange={handleSearchInput}
              onChange={handleSearchSelect}
              getOptionLabel={(opt) => opt.name}
              renderOption={(props, opt) => (
                <li
                  {...props}
                  key={opt.alpha2Code}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <img
                    src={opt.flags.png}
                    alt=""
                    width={24}
                    style={{ marginRight: 8 }}
                  />
                  {opt.name}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Countries"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 3 }}
                />
              )}
            />

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
              <FormControl sx={{ minWidth: 200 }}>
                <InputLabel>Sort By</InputLabel>
                <Select value={sortBy} label="Sort By" onChange={handleSortChange}>
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="name">Name (A–Z)</MenuItem>
                  <MenuItem value="population">Population</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 200 }}>
                <InputLabel>Filter by Region</InputLabel>
                <Select
                  value={regionFilter}
                  label="Filter by Region"
                  onChange={handleRegionChange}
                >
                  <MenuItem value="">All</MenuItem>
                  {regions.map((r) => (
                    <MenuItem key={r} value={r}>
                      {r}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {/* Country cards */}
            <Grid
              container
              spacing={3}
              justifyContent="space-between"
            >
              {filtered.map((c) => (
                <Grid
                  item
                  key={c.alpha2Code}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Card
                    onClick={() => openCountry(c)}
                    sx={{
                      cursor: 'pointer',
                      bgcolor: '#fff3e0',
                      transition: 'transform .3s',
                      '&:hover': { transform: 'scale(1.05)', boxShadow: 4 },
                      borderRadius: 3,
                      width: '100%',
                      maxWidth: 300,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={c.flags.png}
                      alt={c.name}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">
                        {getFlagEmoji(c.alpha2Code)} {c.name}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Capital:</strong> {c.capital || 'N/A'}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Population:</strong> {c.population?.toLocaleString() || 'N/A'}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Currency:</strong> {c.currencies?.[0]?.name || 'N/A'}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Dialog open={openModal} onClose={closeCountry}>
              <DialogTitle>
                {selectedCountry?.name} {getFlagEmoji(selectedCountry?.alpha2Code)}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <strong>Capital:</strong> {selectedCountry?.capital || 'N/A'}
                  <br />
                  <strong>Region:</strong> {selectedCountry?.region || 'N/A'}
                  <br />
                  <strong>Population:</strong> {selectedCountry?.population?.toLocaleString() || 'N/A'}
                  <br />
                  <strong>Currency:</strong> {selectedCountry?.currencies?.[0]?.name || 'N/A'}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeCountry} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </>
        )}
      </Container>
    </Box>
  );
}
