import styled from 'styled-components';
import { string } from 'prop-types';

import CircleProgressBarBase from './CircleProgressBarBase';

const GPA = styled(CircleProgressBarBase)`
  max-width: ${props => props.maxSize};
  vertical-align: middle;
  .chart-text {
    fill: ${props => props.textColor};
    transform: translateY(0.25em);
  }
  .chart-number {
    font-size: 0.6em;
    line-height: 1;
    text-anchor: middle;
    transform: translateY(-0.05em);
  }
  .chart-label {
    font-size: 0.2em;
    text-transform: uppercase;
    text-anchor: middle;
    transform: translateY(0.7em);
  }
  .figure-key [class*='shape-'] {
    margin-right: 8px;
  }
  .figure-key-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .figure-key-list li {
    margin: 5px auto;
  }
  .shape-circle {
    display: inline-block;
    vertical-align: middle;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: ${props => props.strokeColor};
    text-transform: capitalize;
  }
`;

GPA.propTypes = {
  textColor: string,
  strokeColor: string,
  maxSize: string
};

GPA.defaultProps = {
  textColor: 'black',
  strokeColor: 'blueviolet',
  maxSize: '100vh'
};

export default GPA;

// import * as React from "react"
// import "GPA.css"

// function GPA(props){

//     return(
//         <svg
//         height={props.radius * 2}
//         width={props.radius * 2}
//        >
//         <circle
//           stroke="black"
//           fill="transparent"
//           strokeWidth={ props.stroke }
//           strokeDasharray={ ((props.radius - props.stroke * 2) * 2 * Math.PI) + ' ' + ((props.radius - props.stroke * 2) * 2 * Math.PI) }
//           styles={ ((props.radius - props.stroke * 2) * 2 * Math.PI) - props.progress / 100 * ((props.radius - props.stroke * 2) * 2 * Math.PI) }
//           r={ props.radius - props.stroke * 2 }
//           cx={ props.radius }
//           cy={ props.radius }
//          />
//       </svg>
//     )
// }

// export default GPA;