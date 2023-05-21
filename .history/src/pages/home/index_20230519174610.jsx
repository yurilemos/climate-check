import React from "react";
import SearchInput from "../../components/searchInput";
import Card from "../../components/card";


export const Home = () => {  

  return (
    <div>
      <Card>
        <h2>Análise climática</h2>
        <SearchInput label="Pesquisar" onSearch={(e)=>{console.log(e)}}/>

      </Card>
    </div>
  );
};
