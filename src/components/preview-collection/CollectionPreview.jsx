import React from "react";
import { PreviewCollectionItem } from "../preview-collection-item/PreviewCollectionItem";
import "./CollectionPreview.scss";

export const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...itemProps }) => (
            <PreviewCollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};
