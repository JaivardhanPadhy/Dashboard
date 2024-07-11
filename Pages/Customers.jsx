import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, 
Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../Data/dummy';
import { Header } from '../Components';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-white'>
      <Header category="Page" title="Customers"/>

      <GridComponent width="auto" dataSource={customersData} 
      allowPaging 
      allowSorting toolbar={['Delete']}
      editSettings={{allowDeleting:true,allowEditing:true}}>
        <ColumnsDirective>
         {customersGrid.map((item,index)=>(
          <ColumnDirective key={index} {...item}/>
          
         ))}
        </ColumnsDirective>
        <Inject services={[Page,Toolbar,Selection,Edit,Sort,Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers