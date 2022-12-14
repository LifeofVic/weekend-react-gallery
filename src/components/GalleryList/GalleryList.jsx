import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList({ list, fetchList }) {
	return (
		<>
			<div id="gallery-list">
				{list.map(item => (
					<div key={item.id}>
						<GalleryItem image={item} fetchList={fetchList} />
					</div>
				))}
			</div>
		</>
	);
}

export default GalleryList;
