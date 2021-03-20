import React from 'react'
import Part from './Parts'

export default function Specs(props) {
  console.log(props.features);
  return (
    <li key={props.key} className="feature__item">
    <div className={props.featureClass}
      
      onClick={() => props.updateFeature(props.key2, props.item)}>
        { props.name }
        ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
          .format(props.cost) })
    </div>
    <Part featureName = {featureName} features = {features} featureHash = {featureHash} />
  </li>
  )
}