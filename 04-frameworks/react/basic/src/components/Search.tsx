import React, { FC, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

interface Props {
  placeholder: string;
  filter: string;
  handleSearch: (text: string) => void;
}

export const Search: FC<Props> = (props) => {
  const { placeholder, filter, handleSearch } = props;
  const [value, setValue] = useState(filter);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    handleSearch(value);
  };

  return (
    <TextField
      sx={{ width: "100%", marginBottom: "1rem" }}
      label={placeholder}
      type="search"
      variant="standard"
      onChange={handleChange}
      value={value}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon
              onClick={handleClick}
              sx={{ cursor: "pointer", color: "primary.main" }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};
