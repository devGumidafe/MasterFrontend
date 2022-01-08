import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useTotalPageGitHub } from "../hooks/useTotalPageGitHub";
import { Member } from "./Member";
import { Search } from "../Search";
import { useGitHubContext } from "../context/GitHubProvider";
import { useAxiosGitHub } from "../hooks/useAxiosGitHub";

import List from "@mui/material/List";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Pagination } from "@mui/material";

export const MemberList: FC = () => {
  const { loading, currentPage, setCurrentPage } = useAxiosGitHub();
  const { members, filter, setFilter } = useGitHubContext();
  const { totalPages } = useTotalPageGitHub();

  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setCurrentPage(value);
  };

  const handleSearch = (value: string) => {
    setFilter(value);
  };

  return (
    <>
      <Link to="/">Volver al Home</Link>

      <Search
        placeholder={"Busca una organización"}
        filter={filter}
        handleSearch={handleSearch}
      />

      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {members.map((member) => (
              <Member key={member.id} {...member} />
            ))}
          </List>
        </>
      )}

      <Pagination
        count={totalPages}
        color="primary"
        onChange={handlePage}
        page={currentPage}
        sx={{ marginTop: "1rem" }}
      />
    </>
  );
};
