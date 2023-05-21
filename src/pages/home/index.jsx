import React from "react";
import SearchInput from "../../components/searchInput";
import Card from "../../components/card";
import { HomeBody, HomeContent } from "./style";


export const Home = () => {  

  return (
    <HomeBody>
      <HomeContent>
      <Card>
        <h2>Análise climática</h2>
        <SearchInput label="Pesquisar" onSearch={(e)=>{console.log(e)}}/>

      </Card>
      </HomeContent>
    </HomeBody>
  );
};
