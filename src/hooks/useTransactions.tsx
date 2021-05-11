import { useContext, createContext, useEffect, useState, ReactNode, ReactElement } from 'react';
import { api } from '../services/api';

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<ITransaction, 'id' | 'createdAt'>;

interface ITransactionContextData {
  transactions: ITransaction[];
  // eslint-disable-next-line no-unused-vars
  createTransaction: (transaction: TransactionInput) => void;
}

const TransactionsContext = createContext<ITransactionContextData>(
  {} as ITransactionContextData,
);

interface AuxProps {
  children: ReactNode;
}

export function TransactionsProvider({
  children,
}: AuxProps): ReactElement {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(
    transactionInput: TransactionInput,
  ): Promise<void> {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    setTransactions([...transactions, response.data.transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(): ITransactionContextData {
  const context = useContext(TransactionsContext);

  return context;
}
