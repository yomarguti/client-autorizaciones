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
    <rect x="24" y="144" rx="3" ry="3" width="320" height="241" />
    <rect x="222" y="453" rx="3" ry="3" width="330" height="16" />
    <rect x="20" y="57" rx="3" ry="3" width="274" height="16" />
    <rect x="18" y="11" rx="3" ry="3" width="94" height="33" />
    <rect x="413" y="144" rx="3" ry="3" width="101" height="16" />
    <rect x="413" y="195" rx="3" ry="3" width="119" height="16" />
    <rect x="413" y="170" rx="3" ry="3" width="200" height="16" />
    <rect x="413" y="220" rx="3" ry="3" width="140" height="16" />
    <rect x="413" y="245" rx="3" ry="3" width="200" height="16" />
    <rect x="413" y="295" rx="3" ry="3" width="200" height="16" />
    <rect x="413" y="270" rx="3" ry="3" width="100" height="16" />
    <rect x="413" y="370" rx="3" ry="3" width="180" height="16" />
    <rect x="344" y="423" rx="3" ry="3" width="80" height="14" />
    <rect x="413" y="320" rx="3" ry="3" width="70" height="16" />
    <rect x="413" y="345" rx="3" ry="3" width="70" height="16" />
    <rect x="28" y="530" rx="3" ry="3" width="330" height="16" />
    <rect x="28" y="561" rx="3" ry="3" width="80" height="14" />
    <rect x="28" y="584" rx="3" ry="3" width="566" height="20" />
    <rect x="28" y="631" rx="3" ry="3" width="80" height="14" />
    <rect x="28" y="653" rx="3" ry="3" width="566" height="20" />
  </ContentLoader>
);

export default MyLoader;
