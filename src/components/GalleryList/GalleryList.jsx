import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList(props) {
	const galleryimage = props.galleryList.map(gallery =>
		<GalleryItem likeGalleryItem={props.likeGalleryItem.id} />
	)
}

export default GalleryList;
