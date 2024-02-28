import React from 'react'

const DefaultLayout = (component) => 
(props) =>
{
  return (
    <div>
      <component {...props}/>
    </div>
  );
}

export default DefaultLayout;