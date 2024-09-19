import { $generateHtmlFromNodes } from '@lexical/html';
import { ListItemNode, ListNode } from '@lexical/list';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import ImagePlugin from '../../utilities/plugins/ImagePlugin';
import ToolbarPlugin from '../../utilities/plugins/ToolbarPlugin';
import { ImageNode } from '../nodes/ImageNode';
import { InputRoot } from './InputRoot';

export const RichTextInput = ({
  name,
  label,
  form,
  className,
  placeholder = '',
  required = false,
  disabled = false,
}) => {
  const { onChange: _onChange, onBlur: _onBlur, name: _name, ref: _ref } = form.register(name);

  const initialConfig = {
    namespace: name,
    theme,
    onError,
    nodes: [ListNode, ListItemNode, ImageNode],
  };

  return (
    <InputRoot
      name={name}
      label={label}
      form={form}
      required={required}
      disabled={disabled}
      className={className}
    >
      <LexicalComposer initialConfig={initialConfig}>
        <div
          className={`overflow-clip rounded-lg border ${disabled ? 'pointer-events-none border-grey-dd bg-grey-dd' : 'border-grey-88'}`}
        >
          <ToolbarPlugin />

          <div className={`relative border-t ${disabled ? 'border-grey-dd' : 'border-grey-88'}`}>
            <RichTextPlugin
              contentEditable={
                <ContentEditable
                  placeholder={
                    <div
                      className={`pointer-events-none absolute left-3 top-2 ${disabled ? 'text-grey-cc' : 'text-grey-88'}`}
                    >
                      {placeholder}
                    </div>
                  }
                  className="h-[30rem] w-full overflow-y-auto rounded-lg px-3 py-2"
                />
              }
              placeholder={
                <div
                  className={`pointer-events-none absolute left-3 top-2 ${disabled ? 'text-grey-cc' : 'text-grey-88'}`}
                >
                  {placeholder}
                </div>
              }
            />
          </div>
        </div>

        <OnChangePlugin
          onChange={(editorState, editor) => {
            let htmlString;
            editorState.read(() => {
              htmlString = $generateHtmlFromNodes(editor);
            });
            let object = JSON.parse(JSON.stringify(editorState));

            form.setValue(name, JSON.stringify({ ...object, html: htmlString }), {
              shouldDirty: true,
              shouldTouch: true,
            });
            form.trigger(name);

            console.log(JSON.stringify({ ...object, html: htmlString }));
          }}
        />

        <HistoryPlugin />
        <ListPlugin />
        <ImagePlugin />
      </LexicalComposer>
    </InputRoot>
  );
};

const theme = {
  text: {
    bold: 'font-bold',
    italic: 'italic',
    strikethrough: 'line-through',
    underline: 'underline',
  },
  list: {
    ol: 'list-decimal pl-8',
    ul: 'list-disc pl-8',
  },
};

const onError = (error) => {
  console.error(error);
};
