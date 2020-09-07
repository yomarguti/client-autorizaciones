import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    width={550}
    height={500}
    viewBox="0 0 550 500"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="15" y="145" rx="3" ry="3" width="80" height="30" />
    <rect x="115" y="106" rx="3" ry="3" width="330" height="16" />
    <rect x="115" y="86" rx="3" ry="3" width="200" height="16" />
    <rect x="15" y="129" rx="3" ry="3" width="450" height="1" />
    <rect x="15" y="90" rx="3" ry="3" width="80" height="30" />
    <rect x="115" y="141" rx="3" ry="3" width="200" height="16" />
    <rect x="115" y="160" rx="3" ry="3" width="330" height="16" />
    <rect x="15" y="183" rx="3" ry="3" width="450" height="1" />
    <rect x="15" y="198" rx="3" ry="3" width="80" height="30" />
    <rect x="114" y="194" rx="3" ry="3" width="200" height="16" />
    <rect x="115" y="214" rx="3" ry="3" width="330" height="16" />
    <rect x="15" y="237" rx="3" ry="3" width="450" height="1" />
    <rect x="15" y="291" rx="3" ry="3" width="450" height="1" />
    <rect x="15" y="345" rx="3" ry="3" width="450" height="1" />
    <rect x="115" y="248" rx="3" ry="3" width="200" height="16" />
    <rect x="115" y="302" rx="3" ry="3" width="200" height="16" />
    <rect x="115" y="268" rx="3" ry="3" width="330" height="16" />
    <rect x="115" y="322" rx="3" ry="3" width="330" height="16" />
    <rect x="15" y="306" rx="3" ry="3" width="80" height="30" />
    <rect x="15" y="252" rx="3" ry="3" width="80" height="30" />
    <rect x="415" y="362" rx="0" ry="0" width="51" height="10" />
    <rect x="15" y="42" rx="0" ry="0" width="215" height="19" />
  </ContentLoader>
);

export default MyLoader;
