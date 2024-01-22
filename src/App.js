import React from 'react';
import './store';
import { useSelect } from '@wordpress/data';
import PriceComp from './price';
import DiscComp from './DiscComp';

function App() {

  const total = useSelect((select) => {
    return select('my-shop').getTotal();

  }, []);

  return (
    <div>
      <br />
      <PriceComp />
      <br />
      <DiscComp />
      <br />
      Total: {total}
    </div>
  )
}

export default App;