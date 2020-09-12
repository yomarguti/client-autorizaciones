import React from 'react';

import NavBar from '../components/NavBar';
import BlastList from '../components/BlastList';

import './Styles/BlastProcess.css';

const BlastProcess = (props) => {
  return (
    <>
      <NavBar />
      <div className="BlastProcess__Container">
        <BlastList processId={props.match.params.processId} />
      </div>
    </>
  );
};

export default BlastProcess;
