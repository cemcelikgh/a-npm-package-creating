import React from 'react';

import { Button } from 'red-green-blue-buttons';
import 'red-green-blue-buttons/dist/index.css';

const App = () => {
  return(
    <div className='container'>
      <Button text='Default' />
      <Button type='red' text='Red' />
      <Button type='green' text='Green' />
      <Button type='blue' text='Blue' />
    </div>
  )
}

export default App;
