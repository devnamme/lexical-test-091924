import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getNodeByKey } from 'lexical';
import { $isImageNode } from './ImageNode';

export default function ImageComponent({ src, width, height, nodeKey }) {
  const [editor] = useLexicalComposerContext();

  return (
    <div
      className="z-20 inline-block resize overflow-auto"
      style={{
        width,
        height,
      }}
      onMouseUp={(e) => {
        const width = e.target.getBoundingClientRect().width;
        const height = e.target.getBoundingClientRect().height;

        editor.update(() => {
          const node = $getNodeByKey(nodeKey);

          if (!node || !$isImageNode(node)) {
            return;
          }

          node.setWidthAndHeight(width, height);
        });
      }}
    >
      <img
        className="pointer-events-none h-full w-full object-cover object-center align-bottom"
        src={src}
      />
    </div>
  );
}
