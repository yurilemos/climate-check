import React from "react";
import SearchInput from "../../components/searchInput";
import Card from "../../components/card";
import { HomeBody } from "./style";


export const Home = () => {  

  return (
    <HomeBody>
      <Card>
        <h2>Análise climática</h2>
        <SearchInput label="Pesquisar" onSearch={(e)=>{console.log(e)}}/>

      </Card>
    </HomeBody>
  );
};
