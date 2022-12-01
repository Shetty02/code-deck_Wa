import React from 'react'
import { Header,TextArea,Console } from './InputConsole'
import {BiExport} from 'react-icons/bi'
import styled from 'styled-components';

 const AnchorTag = styled.a`
    text-decoration: none;    
    `

function OutputConsole({currentOutput}) {

  return (
    <Console>
      <Header>
        Output:
        <AnchorTag
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(
            currentOutput
          )}`        
        }
          download="output.txt"
        >
          <BiExport /> Export Output
        </AnchorTag>
      </Header>
      <TextArea
        value={currentOutput}
        disabled
      />
    </Console>
  );
}

export default OutputConsole