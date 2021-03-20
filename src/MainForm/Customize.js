
import React, { Component } from 'react'
import Specs from './Specs'
import Part from './Parts'

class Customize extends Component {
  
  render(props) {
    return (
      <div className="App">
        <h2>Customize Your Laptop</h2>
        <Specs features = {this.props.features}/>
        {Object.keys(this.props.features).map((feature, index) => 
        <Specs featureHash={feature + '-' + index} 
              selected={this.props.selected} 
              currency={this.props.currency} key={index} 
              featureName={feature} 
              features={this.props.features[feature]} 
              select={this.props.select}/>
              )}
      </div>
    );
  }
}

export default Customize;