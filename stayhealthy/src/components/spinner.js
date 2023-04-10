import { Spin } from 'antd';
import React from 'react';

export default function Spinner() {
  return (
    <div className='spinner-parent'>
      <Spin size='large'/>
    </div>
  );
}
