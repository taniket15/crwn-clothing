import './menu-item.styles.scss';

const MenuItem = ({ id, title, imageUrl, linkUrl, size }) => {
	return (
		<div className={`menu-item ${size}`}>
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></div>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOW NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;
