import React from 'react';
import axios from 'axios';

function GalleryItem(item) {

		return (
			<>
				{item.map(item => (
					<section key={item.id} className='list-table'>
						<p>{item.name}</p>
						<p>{item.quantity} {item.unit}</p>
						{item.is_purchased === false && <button id={item.id} type="add" onClick={() => buyItem(item.id)}>Buy</button>}
						{item.is_purchased === false && <button type="delete" onClick={() => deleteItem(item.id)} >Remove</button>}
						{item.is_purchased === true && <label>Purcased</label>}
						{/* <button type="add">Buy</button>
              <button type="delete">Remove</button> */}
					</section>))}
			</>
		)
	}




export default GalleryItem;