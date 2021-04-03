import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Consultoria de projeto',
          category: 'Receitas',
          type: 'deposit',
          value: 14400,
          createdAt: new Date(2021, 10, 20, 19, 45),
        },
        {
          id: 2,
          title: 'Parcela do apartamento',
          category: 'Apartamento',
          type: 'withdraw',
          value: 4500,
          createdAt: new Date(2021, 11, 25, 8, 11),
        }
      ]
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        this.schema.all('transaction')
      ];
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', {
        ...data, 
        createdAt: new Date(),
      });
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
