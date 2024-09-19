import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND } from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND, REDO_COMMAND, UNDO_COMMAND } from 'lexical';
import { useRef } from 'react';
import { EncodeBase64 } from '../base-64';
import { INSERT_IMAGE_COMMAND } from './ImagePlugin';

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  const imageInputRef = useRef(null);
  const onUploadImage = async (event) => {
    if (event.target.files.length > 0) {
      const base64 = await EncodeBase64(event.target.files[0]);

      editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
        src: base64,
      });
    }
  };

  return (
    <div className="flex flex-row flex-wrap items-center gap-1 bg-grey-dd px-3 py-2 text-grey-66">
      <ToolbarButton
        onClick={() => {
          editor.dispatchCommand(UNDO_COMMAND, undefined);
        }}
      >
        undo
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          editor.dispatchCommand(REDO_COMMAND, undefined);
        }}
      >
        redo
      </ToolbarButton>

      <ToolbarButton
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        }}
      >
        B
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
        }}
      >
        I
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
        }}
      >
        U
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
        }}
      >
        strike
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'subscript');
        }}
      >
        sub
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'superscript');
        }}
      >
        sup
      </ToolbarButton>

      <ToolbarButton
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
        }}
      >
        left
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
        }}
      >
        center
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
        }}
      >
        right
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
        }}
      >
        justify
      </ToolbarButton>

      <ToolbarButton
        onClick={() => {
          editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
        }}
      >
        ul
      </ToolbarButton>
      <ToolbarButton
        onClick={() => {
          editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
        }}
      >
        ol
      </ToolbarButton>

      <ToolbarButton>link</ToolbarButton>
      <ToolbarButton
        onClick={() => {
          imageInputRef.current.value = [];
          imageInputRef.current.click();
        }}
      >
        img
      </ToolbarButton>
      <input
        type="file"
        hidden
        ref={imageInputRef}
        accept="image/*"
        onChange={onUploadImage}
      />
      <ToolbarButton
        onClick={() => {
          // editor.update(() => {
          //   const tableNode = $createTableNodeWithDimensions(3, 3, false);
          //   $insertNodes([tableNode]);
          // });
          // editor.dispatchCommand(INSERT_TABLE_COMMAND, {
          //   rows: 3,
          //   columns: 3,
          //   includeHeaders: true,
          // });
        }}
      >
        table
      </ToolbarButton>
    </div>
  );
}

const ToolbarButton = ({ onClick = () => {}, children }) => {
  return (
    <button
      className="min-w-[32px] rounded border border-grey-88 bg-wht p-2"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};
