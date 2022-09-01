/* eslint-disable react/prop-types */
/* eslint-disable complexity */

// adapted from https://github.com/chaoocharles/react-tiptap-editor

import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import {
  FaBold,
  FaHeading,
  FaItalic,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaRedo,
  FaStrikethrough,
  FaUnderline,
  FaUndo,
} from 'react-icons/fa';

import './styles.css';

function MenuBar({ editor }) {
  if (!editor) return null;

  return (
    <div className='menuBar'>
      <div>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={
            editor.isActive('editor-btn bold')
              ? 'is_active editor-btn'
              : 'editor-btn'
          }
        >
          <FaBold />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            editor.isActive('editor-btn italic')
              ? 'is_active editor-btn'
              : 'editor-btn'
          }
        >
          <FaItalic />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={
            editor.isActive('editor-btn underline')
              ? 'is_active editor-btn'
              : 'editor-btn'
          }
        >
          <FaUnderline />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={
            editor.isActive('editor-btn strike')
              ? 'is_active editor-btn'
              : 'editor-btn'
          }
        >
          <FaStrikethrough />
        </button>
        <button
          type='button'
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive('editor-btn heading', { level: 2 })
              ? 'is_active editor-btn'
              : 'editor-btn'
          }
        >
          <FaHeading />
        </button>
        <button
          type='button'
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive('editor-btn heading', { level: 3 })
              ? 'is_active editor-btn'
              : 'editor-btn'
          }
        >
          <FaHeading className='heading3' />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive('editor-btn bulletList')
              ? 'is_active editor-btn'
              : 'editor-btn'
          }
        >
          <FaListUl />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive('editor-btn orderedList')
              ? 'is_active editor-btn'
              : 'editor-btn'
          }
        >
          <FaListOl />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={
            editor.isActive('editor-btn blockquote')
              ? 'is_active editor-btn'
              : 'editor-btn'
          }
        >
          <FaQuoteLeft />
        </button>
      </div>
      <div>
        <button
          type='button'
          onClick={() => editor.chain().focus().undo().run()}
          className='editor-btn'
        >
          <FaUndo />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().redo().run()}
          className='editor-btn'
        >
          <FaRedo />
        </button>
      </div>
    </div>
  );
}

export default function Editor({ setBody, content }) {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content,

    onUpdate: ({ editor }) => setBody(editor.getHTML()),
  });

  return (
    <div className='textEditor'>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
