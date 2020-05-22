const action = (on) =>{
  return {
    type: 'TURN_ON_OR_OFF',
    on
  }
}

export default action;