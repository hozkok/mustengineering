import React, { useState } from 'react';
import { Transition, animated } from 'react-spring/renderprops.cjs';


export default (props) => {
  const { routePath, element } = props;
  const [state, setState] = useState(0);
  console.log('STATE', state);
  return (
    <Transition
      native
      items={routePath}
      from={{ transform: 'translateY(100px)', opacity: 0 }}
      enter={{ transform: 'translateY(0px)', opacity: 1 }}
      leave={{ transform: 'translateY(100px)', opacity: 0 }}
    >
      {item => props => {
        return (
          <animated.div style={props}>
            {element}
          </animated.div>
        );
      }}
    </Transition>
  );
};
