import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
      secondary: blue[200], 
    },

  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          padding: '0', 
          minWidth: '180px', 
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', 
        },
      },
    },
  },
});

function FilterOptions({ onPriceRangeChange, onDiscountFilterChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [discount, setDiscount] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);

  const handlePriceRangeChange = (event, newValue) => {
    setMinPrice(newValue[0]);
    setMaxPrice(newValue[1]);
  };

  const handleDiscountChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setDiscount(value);
  };

  const applyFilters = () => {
    onPriceRangeChange([minPrice, maxPrice]);
    onDiscountFilterChange(discount);
    setFilterOpen(false); 
  };

  const resetFilters = () => {
    setMinPrice(0);
    setMaxPrice(10000);
    setDiscount(0);
    onPriceRangeChange([0, 10000]);
    onDiscountFilterChange(0); 
    setFilterOpen(false);
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="filter-options relative ">
        <Button
         className="px-12 py-8 rounded-lg"
          onClick={toggleFilter}
          variant="contained"
          color="primary"
          sx={{padding: '12px 48px', borderRadius: '8px' ,color: 'white' , backgroundColor: '#112D4E'}}
        >
          Filter
        </Button>
        {filterOpen && (
          <div className="absolute top-full left-0 bg-white border shadow-lg p-4 rounded-lg mt-2 z-10 cursor-pointer">
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Price Range</label>
              <Slider
                color="primary"
                mx="4px"
                value={[minPrice, maxPrice]}
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
                min={0}
                max={5000}
                step={10}
                marks={[
                  { value: 200, label: '₹200' },
                  { value: 2500, label: '₹2500' },
                  { value: 5000, label: '₹5000' }
                ]}
              />
            </div>
            <div className="mb-4">
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Minimum Discount</InputLabel>
                <Select
                  value={discount}
                  onChange={handleDiscountChange}
                  label="Minimum Discount"
                  
                >
                  <MenuItem  value={0}>All</MenuItem>
                  <MenuItem value={30}>30%</MenuItem>
                  <MenuItem value={40}>40%</MenuItem>
                  <MenuItem value={50}>50%</MenuItem>
                  <MenuItem value={60}>60%</MenuItem>
                  <MenuItem value={70}>70%</MenuItem>
                  <MenuItem value={80}>80%</MenuItem>
                  <MenuItem value={90}>90%</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex justify-between">
              <Button onClick={resetFilters} variant="contained" color='info' className="px-4 mx-4 py-2 rounded-lg">
                Reset
              </Button>
              <Button onClick={applyFilters} variant="contained" color="primary" className="px-4 py-2 rounded-lg">
                Apply
              </Button>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default FilterOptions;
