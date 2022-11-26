import React from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';
import list from 'server/modules/gallery.data.js';

function GalleryList(item, list) {

	return (
		<div>
			<h2> Gallery List</h2>
			<div className="list-container">
				<GalleryItem item={item} />
			</div>
		</div>
	);
}

export default GalleryList;
