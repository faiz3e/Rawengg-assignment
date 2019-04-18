import React, { Component, memo } from 'react';
import ListComponentSkeleton from '../../../home/pages/dashboard/ListComponentSkeleton';
const SmartLoaderWrapper = (props) => {
  let data = [];
  data = props.data
  const SkeletonComponent = props.skeletonComponent
  return (
    <div>
      {data.length > 0 ? props.children :
        [...Array(props.iterator || 1)].map((e, i) => <div key={i}>
        <SkeletonComponent/>
        </div>)
      }
    </div>
  )
}

function arePropsEqual(prevProps, nextProps) {
  return prevProps === nextProps;
}

export default memo(SmartLoaderWrapper, arePropsEqual)