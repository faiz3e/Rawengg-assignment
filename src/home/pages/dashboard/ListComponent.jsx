import React, { Component, useEffect, useState } from 'react';
import { Button } from '../../../common/components';
import Log from '../../../common/helpers/logger';
import SmartLoaderWrapper from '../../../common/components/SmartLoaderWrapper/SmartLoaderWrapper';

const listComponentSkeleton = React.lazy(() => import('./ListComponentSkeleton'));

const ListComponent = () => {
  const [users, setUser] = useState([]); //?  state data here  

  useEffect(() => {   //? new life cycle hook here 
    LoadUserAsSideEffect()
  }, []); //?   we add dependency here 

  const LoadUserAsSideEffect = (user) => {
    Log.trace('Login componentDidUpdate!', user);
    setTimeout(() => {
      setUser([{ user: 'aaaaaa' }, { user: 'bbbbbb' }, { user: 'ccccccc' }, { user: 'eeeeee' }, { user: 'ddddddd' }])
    }, 2000);
  }

  return (
    <div >
      <SmartLoaderWrapper data={users} iterator={5} skeletonComponent={listComponentSkeleton} >
        {users.length > 0 && users.map((items) => {
          return <div key={items.user} style={{ width: '200px', height: '30px', marginTop: '20px' }}>{items.user}</div>
        })}
      </SmartLoaderWrapper>
    </div>
  )
}

export default ListComponent

