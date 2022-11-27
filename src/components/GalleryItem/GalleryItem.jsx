import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css';

function GalleryItem({ image, fetchList }) {

	const [isClicked, setIsClicked] = useState(false);

	const changeDisplay = () => {
		if (isClicked === true) {
			setIsClicked(false)
		} else {
			setIsClicked(true);
		}
	}

	const likeGalleryItem = (id) => {
		axios.put('/gallery/like/' + id)
			.then(response => {
				console.log('liked image', id);
				fetchList();
			}).catch(error => {
				console.log('Error in updating, in Axios.Put in APP.jsx', error)
			});
	}

	return (
		<div className='image-container' onClick={changeDisplay}>
			<div>
				{!isClicked && <img className='image' src={image.path} />}
				{isClicked && <text className='description' src={image.description} />}
			</div>
			<div>
				<button onClick={() => likeGalleryItem(Number(image.id))}>
					Like it!
				</button>
			</div>
			<div className='image-stats'>
				<label> {image.likes} people liked this.</label>
			</div>
		</div >
	)
}




export default GalleryItem;