import { addListener } from 'nodemon';
import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList(list, fetchList) {
	return (
		<>
			<div id="gallery-list">
				{list.map(item => (
					<div key={item.id}>
						<GalleryItem item={item} fetchList={fetchList} />
					</div>
				))}
			</div>
		</>
	)
}

export default GalleryList;
