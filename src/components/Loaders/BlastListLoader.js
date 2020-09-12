import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    width={700}
    height={700}
    viewBox="0 0 700 700"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="21" y="67" rx="3" ry="3" width="611" height="31" />
    <rect x="126" y="19" rx="3" ry="3" width="274" height="21" />
    <rect x="19" y="18" rx="3" ry="3" width="94" height="23" />
    <rect x="23" y="117" rx="3" ry="3" width="611" height="64" />
    <rect x="23" y="195" rx="3" ry="3" width="611" height="64" />
    <rect x="23" y="273" rx="3" ry="3" width="611" height="64" />
    <rect x="23" y="351" rx="3" ry="3" width="611" height="64" />
    <rect x="23" y="429" rx="3" ry="3" width="611" height="64" />
    <rect x="23" y="507" rx="3" ry="3" width="611" height="64" />
    <rect x="23" y="585" rx="3" ry="3" width="611" height="64" />
  </ContentLoader>
);

export default MyLoader;
