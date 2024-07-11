import React from 'react'
import {ChartComponent,SeriesCollectionDirective,SeriesDirectice,
  Inject,Legend,Category,StackingColumnSeries,Tooltip,
  Series,
  SeriesDirective} from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries,stackedPrimaryXAxis,stackedPrimaryYAxis } from '../../Data/dummy';  

const Stacked = ({height,width}) => {
  return (
    <ChartComponent
    width={width}
    height={height}
    id='charts'
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    legendSettings={{background:'white'}}>
      <Inject
      services={[Legend,Category,StackingColumnSeries,Tooltip]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index)=>
          <SeriesDirective key={index} {...item}/>
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
