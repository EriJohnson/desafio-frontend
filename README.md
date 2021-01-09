# Desafio-Frontend

## Como rodar o projeto

### Backend

Para rodar o projeto, é necessário primeiro instalar o json-server:

`npm install -g json-server`

Após isso, vá até a pasta "rest-api" e rode o comando: 

`json-server --watch events.json`

Isso irá disponibilizar uma api REST rodando no endereço http://localhost:3000/events.

OBS.: É importante rodar primeiro o backend, pois irá rodar na porta 3000, ou seja, a mesma porta do frontend, mas rodando o frontend por segundo, o React irá 
reconhece que já tem algo rodando na porta 3000 e irá sugerir de rodar enm uma outra porta automaticamente.

### Frontend

Vá até a pasta "agenda" e rode o seguinte comando para instalar todas dependências do projeto:

`npm install`

Após ter instalado todos dependências, basta rodar o seguinte comando para iniciar o projeto:

`npm start`

O projeto provavelmente irá rodar na porta 3001. Ao iniciar, será exibido a semana atual. Para visualizar os eventos cadastrados vá até o mês de fevereiro de 2020.

OBS.: Os eventos aparecem em fevereiro porque a API de datas do JavaScript começa a contar os meses do zero e os eventos estão cadastrados com o mês 01, portanto
os eventos acabaram sendo cadastrados em fevereiro de 2020.

## Considerações finais

Praticamente não foi utilizado CSS pois foi utilizado a biblioteca [React Scheduler](https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/appointments/#react-scheduler---appointments) a qual já possui sua estilização própria baseada em [Material-UI](https://material-ui.com/pt/).
