import React from 'react';
import { Provider } from 'react-redux'
import styles from './index.module.css';
import Table from './components/table';



function App() {
  return (
    <>
    <div className={styles.column}>
    <Table/>
    </div>
    </>
  );
}

export default App;
