import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

const [galleryList, setGalleryList] = useState([]);
const [galleryItem, setGalleryItem] = useState(true);

function App() {
	useEffect(() => {
		fetchList();
	});

	const fetchList = () => {
		axios.get('/gallery')
			.then(response => {
				setGalleryList(response.data)
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
			<p>Gallery goes here</p>
			<img src="images/goat_small.jpg" />
			<GalleryList />
		</div>
	);
}

export default App;
