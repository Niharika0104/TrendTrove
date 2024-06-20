import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#112D4E', 
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
            margin: '2',
          padding: '2px', 
          minWidth: '150px', 
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#112D4E', 
            color: '#ffffff', 
          },
        },
      },
    },
  },
});

function SortOptions({ onSortChange, selectedSort }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="sort-options relative mb-4 z-10">
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value)}
            label="Sort By"
          >
            <MenuItem value="">
              <em>Default</em>
            </MenuItem>
            <MenuItem value="price-asc">Price: Low to High</MenuItem>
            <MenuItem value="price-desc">Price: High to Low</MenuItem>
            <MenuItem value="discount-asc">Discount: Low to High</MenuItem>
            <MenuItem value="discount-desc">Discount: High to Low</MenuItem>
            <MenuItem value="brand-asc">Brand: A to Z</MenuItem>
            <MenuItem value="brand-desc">Brand: Z to A</MenuItem>
          </Select>
        </FormControl>
      </div>
    </ThemeProvider>
  );
}

export default SortOptions;
