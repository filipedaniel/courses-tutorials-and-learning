import React from 'react';
// import Radium from 'radium';
// import styled from 'styled-components';

import classes from './Person.css'


// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 15px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 15px;
//   text-align: center;

//   @media (min-width: 600px) {
//     width: 450px;
//   }`;

const Person = (props) => {
  let name = props.name;
  let age = props.age;

  // const style = {
  //   '@media (min-width: 600px)' : {
  //     width: "450px"
  //   }
  // }

  const rnd = Math.random();
  console.log(rnd);
  if (rnd > 0.7) {
    throw new Error("Something went wrong!");
  }

  return (
    <div className={classes.Person}>
    {/* <StyledDiv> */}
      <p onClick={props.click}>I'm {name} and I'm {age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={name}/>
    {/* </StyledDiv> */}
    </div>
  )
}

export default Person;