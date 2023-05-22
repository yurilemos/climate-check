Frontend Challenge result:

Para rodar é necessário uma API key do openweathermap.org e colocar em um arquivo .env com: REACT_APP_API_WEATHER_KEY={API_KEY}

npm install

npm start

node version 14.18.1

O arquivo código que se encontra no src é dividido em alguns pacotes

componets, pages, utils, router

components: componentes que poderiam ser usados para mais de uma página

utils: funções auxiliares usadas no projeto

router: rotas com as respectivas páginas (por enquanto só existe 2 rotas)

pages: pacote em que se encontra o código referente a uma tela, nele também pode possuir outros arquivos: components, hooks
  components são os componentes que são úteis apenas para aquela page
  hooks: arquivo onde está definido as chamadas para uma API.

bibliotecas auxiliares usadas; react-query, axios e ol

A parte extra ficou faltando por conta do curto período de entrega. Por ser um projeto feito em 1 dia, não foi possível implementar a parte de clicar no ponto do mapa e exibir a localização e nem a parte de testes. Tive problemas na configuração então isso acabou dificultando para uma possível implementação, devido ao curto período de entrega, decidir seguir uma ordem de prioridade.