import React, { FC, useContext, useState } from "react";
import { MemberEntity } from "../../model/MemberEntity";
import { GitHubContext } from "./GitHubContext";

export const GitHubProvider: FC = (props) => {
  const [filter, setFilter] = useState("lemoncode");
  const [members, setMembers] = useState<MemberEntity[]>([]);

  return (
    <GitHubContext.Provider value={{ filter, setFilter, members, setMembers }}>
      {props.children}
    </GitHubContext.Provider>
  );
};

export const useGitHubContext = () => {
  return useContext(GitHubContext);
};
