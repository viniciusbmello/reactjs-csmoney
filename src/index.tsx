import { StrictMode } from 'react';
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
          title: 'Freelance RocketSeat',
          type: 'deposit',
          category: 'Dev',
          amount: 2000,
          createdAt: new Date(Date.now() - Math.random() * 10 ** 9),
        },
        {
          id: 2,
          title: 'House Rent',
          type: 'withdraw',
          category: 'Bills',
          amount: 900,
          createdAt: new Date(Date.now() - Math.random() * 10 ** 9),
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => this.schema.all('transaction'));
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
