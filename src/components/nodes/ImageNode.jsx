import { DecoratorNode } from 'lexical';
import ImageComponent from './ImageComponent';

export class ImageNode extends DecoratorNode {
  __src;
  __width;
  __height;

  static getType() {
    return 'image';
  }

  static clone(node) {
    return new ImageNode(node.__src, node.__width, node.__height, node.__key);
  }

  constructor(src, width = '300px', height = 'auto', key) {
    super(key);
    this.__src = src;
    this.__width = width;
    this.__height = height;
  }

  createDOM() {
    const element = document.createElement('span');
    return element;
  }

  exportDOM() {
    const element = document.createElement('img');
    element.setAttribute('src', this.getLatest().__src);
    element.style.width = `${this.getLatest().__width}px`;
    element.style.height = `${this.getLatest().__height}px`;

    return { element };
  }

  static importDOM() {
    return {
      img: (node) => {
        return {
          conversion: convertImageElement,
          priority: 0,
        };
      },
    };
  }

  updateDOM() {
    return false;
  }

  static importJSON(serializedNode) {
    const { src } = serializedNode;
    const node = $createImageNode({ src });
    return node;
  }

  exportJSON() {
    return {
      version: 1,
      type: 'image',
      src: this.getLatest().__src,
      width: this.getLatest().__width,
      height: this.getLatest().__height,
    };
  }

  decorate() {
    return (
      <ImageComponent
        src={this.getLatest().__src}
        width={this.getLatest().__width}
        height={this.getLatest().__height}
        nodeKey={this.getKey()}
      />
    );
  }

  setWidthAndHeight(width, height) {
    const writable = this.getWritable();
    writable.__width = width;
    writable.__height = height;
  }
}

export function $createImageNode({ src, width, height }) {
  return new ImageNode(src, width, height);
}

export function $isImageNode(node) {
  return node instanceof ImageNode;
}

const convertImageElement = (domNode) => {
  if (domNode instanceof HTMLImageElement) {
    const { src, width, height } = domNode;
    const node = $createImageNode(src, width, height);
    return { node };
  }

  return null;
};
