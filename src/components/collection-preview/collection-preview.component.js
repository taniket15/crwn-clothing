import CollectionItem from "../collection-item";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, routeName, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, i) => i < 4)
          .map(({ id, ...restProps }) => (
            <CollectionItem key={id} {...restProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
