import React, {useCallback} from "react";

import { 
  FormControl,
  InputLabel,
  Select,
  MenuItem, 
  TextField, 
  Tooltip
} from "@material-ui/core";

const SearchFilter = (props) => {
  const {
    city,
    category,
    selectedCity,
    selectedCategory,
    selectedSearchQuery
  } = props;

  const debounce = (func, time) => {   // debounce function for search query // 
    let timer;
    return function(...args){
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, time);
    };
  };

  const _setData = (value) => {
    selectedSearchQuery(value)
  }

  const betterFunc = useCallback(debounce(_setData, 2000), []);  // added useCallback to memoize function //

  const _onChangeCity = (e) => {
    selectedCity(e.target.value);
  }

  const _onChangeCategory = (e) => {
    selectedCategory(e.target.value)
  }


  return (
    <>
     <div className="searchFilterContainer">
        <FormControl
            variant="outlined"
            style={{ 
              minWidth: 250, 
              marginRight: "40px" 
            }}
          >
            <InputLabel id="select-city-label">Select city</InputLabel>
            <Select
              labelId="select-city-label"
              id="select-city"
              label="Select city"
              value={city}
              onChange={_onChangeCity}
            >
              <MenuItem value={"JAIPUR"}>JAIPUR</MenuItem>
              <MenuItem value={"DELHI"}>DELHI</MenuItem>
              <MenuItem value={"MUMBAI"}>MUMBAI</MenuItem>
              <MenuItem value={"BANGLORE"}>BANGALORE</MenuItem>
              <MenuItem value={"HYDERABAD"}>HYDERABAD</MenuItem>
            </Select>
          </FormControl>
        <FormControl
            variant="outlined"
            style={{ 
              minWidth: 250, 
              marginRight: "40px" 
            }}
          >
            <InputLabel id="select-category-label">Select Category</InputLabel>
            <Select
              labelId="select-category-label"
              id="select-category"
              label="Select category"
              value={category}
              onChange={_onChangeCategory}
            >
              <MenuItem value="">Select category</MenuItem>
              <MenuItem value={"bank_name"}>Bank Name</MenuItem>
              <MenuItem value={"ifsc"}>IFSC</MenuItem>
              <MenuItem value={"branch"}>Branch Name</MenuItem>
            </Select>
          </FormControl>
          <Tooltip 
          title={category ? "Search your query" : "Please Select Category First"}
          arrow>
          <div className="searchBar">
              <TextField
                disabled={!category}
                fullWidth
                onKeyUp={(e) => {betterFunc(e.target.value)}}
                label="Search"
                variant="outlined"
              />
            </div>
          </Tooltip>
     </div>
    </>
  );
}

export default SearchFilter;
