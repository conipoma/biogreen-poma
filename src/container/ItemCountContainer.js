import React from 'react';
import Counter from '../components/ItemCount/ItemCount';

export default class ItemCounterContainer extends React.Component {
	
    constructor(props){
          super(props);
  
          this.state = {
              number:0,
              stock:5
          }
  
          this.onDrecrement = this.onDrecrement.bind(this);
  
      }

      onIncrement = () => {
          if (this.state.stock <= this.state.number) {
              alert('No hay stock dispoble');
          } else {
          this.setState({ number: this.state.number + 1 });
          }; 
      }
  
      onDrecrement = () => {
          if (this.state.number > 0) {
            this.setState({ number: this.state.number - 1 });
          } else {
              alert('No tienes productos agregados')
          }
      }
  
      render(){
          
          return(
              <div>
                  {console.log('Render desde counter container')}
                  {/* <Visualizer number={this.state.number} /> */}
                  <Counter number={this.state.number} increment={this.onIncrement} decrement={this.onDrecrement}/>
              </div>
          )
      }
  }
      