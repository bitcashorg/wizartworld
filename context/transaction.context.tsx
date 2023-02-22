import { createContext, useContext, useState } from 'react'

// https://docs.onflow.org/fcl/reference/api/#transaction-statuses
/**
 * STATUS CODE  DESCRIPTION <br/>
 * -1 No Active Transaction<br/>
 * 0  Unknown<br/>
 * 1  Transaction Pending - Awaiting Finalization<br/>
 * 2  Transaction Finalized - Awaiting Execution<br/>
 * 3  Transaction Executed - Awaiting Sealing<br/>
 * 4  Transaction Sealed - Transaction Complete. At this point the transaction result has been committed to the blockchain.<br/>
 * 5  Transaction Expired<br/>
 */

export type TransactionContextType = {
  transactionInProgress: boolean
  transactionStatus: number
  txId: string
  initTransactionState: () => void
  setTxId: (txId: string) => void
  setTransactionStatus: (transactionStatus: number) => void
}

const defaultTransactionContext = {
  transactionInProgress: false,
  transactionStatus: 0,
  txId: '',
  initTransactionState: () => {},
  setTxId: (txId: string) => {},
  setTransactionStatus: (transactionStatus: number) => {},
}

export const TransactionContext = createContext<TransactionContextType>(defaultTransactionContext)

export const useTransaction = () => useContext(TransactionContext)

export default function TransactionProvider({ children }: { children: React.ReactNode }) {
  const [transactionInProgress, setTransactionInProgress] = useState(false)
  const [transactionStatus, setTransactionStatus] = useState(-1)
  const [txId, setTxId] = useState('')

  function initTransactionState() {
    setTransactionInProgress(true)
    setTransactionStatus(-1)
  }

  const value: TransactionContextType = {
    transactionInProgress,
    transactionStatus,
    txId,
    initTransactionState,
    setTxId,
    setTransactionStatus,
  }

  console.log('TransactionProvider', value)

  return <TransactionContext.Provider value={value}>{children}</TransactionContext.Provider>
}
