import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $insertNodes, COMMAND_PRIORITY_EDITOR, createCommand } from 'lexical';
import { useEffect } from 'react';
import { $createImageNode, ImageNode } from '../../components/nodes/ImageNode';

export default function ImagePlugin() {
  const [editor] = useLexicalComposerContext();

  if (!editor.hasNodes([ImageNode])) {
    throw new Error('Not registered');
  }

  useEffect(() => {
    editor.registerCommand(
      INSERT_IMAGE_COMMAND,
      (payload) => {
        const node = $createImageNode(payload);
        $insertNodes([node]);
        return true;
      },
      COMMAND_PRIORITY_EDITOR
    );
  }, [editor]);

  return null;
}

export const INSERT_IMAGE_COMMAND = createCommand('INSERT_IMAGE_COMMAND');
