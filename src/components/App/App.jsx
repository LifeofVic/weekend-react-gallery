import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';



function App() {
	const [galleryList, setGalleryList] = useState([]);

	useEffect(() => {
		fetchList();
	}, []);

	const fetchList = () => {
		axios.get('/gallery')
			.then(response => {
				setGalleryList(response.data);
			}).catch(error => {
				alert('error ins Getting GalleryList')
				console.log('Error in Axios.GET in APP.JXS', error);
			});
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Gallery of My Life</h1>
			</header>
			<p>My Gallery</p>
			<GalleryList list={galleryList} fetchList={fetchList} />
		</div>
	);
}

export default App;
