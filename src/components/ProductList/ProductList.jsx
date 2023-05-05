import React from "react";

function ProductListView() {
  const products = ['orange', 'apple', 'watermelon'];

  const list = []

  for (const [i, product] of products.entries()) {
    list.push(<li>{product}</li>)   ;
   console.log('Index' + i);
  }

  const list1 = []
  
    products.forEach((product) => {
      list1.push(<li>{product}</li>)
    })

  return (
    <div>
      <h1> Product List with For Loop </h1>
<hr/>
      {list}

      <h1> Product List with forEach Loop </h1>
<hr/>
      {list1}
    </div>

    
  )
}

export  default ProductListView;
