import React from 'react';
import './App.css';
import { useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
import Axios from 'axios';
function App() {

const fetchList = () => {
Axios.get('/')
	.then(response => {})
	
}


	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">Gallery of My Life</h1>
			</header>
			<p>Gallery goes here</p>
			<img src="images/goat_small.jpg" />
		</div>
	);
}

export default App;
