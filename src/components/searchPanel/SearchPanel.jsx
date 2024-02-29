import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const SearchPanel = (props) => {
  const {
    listCategory,
    filters,
    onChange,
    onClear
  } = props;

  const {
    product,
    priceFrom,
    priceTo,
    category
  } = filters;

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <Box component="form" className="frmSearch">
      <TextField
        label="Search..."
        type="search"
        name="product"
        value={product || ''}
        onChange={onChange}
      />
      
      <TextField
        label="Price from..."
        inputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]*'
        }}
        name="priceFrom"
        value={priceFrom || ''}
        onChange={onChange}
        style={{width: '120px'}}
      />

      <TextField
        label="Price to..."
        inputProps={{
          inputMode: 'numeric',
          pattern: '[0-9]*'
        }}
        name="priceTo"
        value={priceTo || ''}
        onChange={onChange}
        style={{width: '120px'}}
      />

      {listCategory?.length  &&
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel id="multiple-select-label">Category</InputLabel>
          <Select
            labelId="multiple-select-label"
            id="multiple-select"
            multiple
            name="category"
            value={category || []}
            onChange={onChange}
            input={<OutlinedInput label="Category" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {listCategory?.map(categoryItem => {
              return <MenuItem value={categoryItem} key={categoryItem}>
                      <Checkbox checked={category?.indexOf(categoryItem) > -1} />
                      <ListItemText primary={categoryItem} />
                    </MenuItem>
            })
            }
          </Select>
        </FormControl>
      }

      <Button
        variant="contained"
        onClick={onClear}
      >
        Clear
      </Button>
    </Box>
  );
};

export default SearchPanel;