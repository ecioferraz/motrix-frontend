import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { PostForm } from '../../templates';

const TITLE_INPUT = 'input[name="title"]';
const EDITOR = 'div[class="textEditor"]';
const BUTTON = 'button[name="Enviar"]';

describe('Templates', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;
  
  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });
  
  afterAll(() => act(() => root?.unmount()));
  
  describe('<PostForm />', () => {
    let postForm: HTMLFormElement | null | undefined;
    
    beforeEach(() => {
      act(() => {
        root?.render(
          <BrowserRouter>
            <PostForm />
          </BrowserRouter>
        );
      });

      postForm = container?.querySelector('form');
    });

    it('should render a form', () => {
      expect(postForm).toBeTruthy();
      expect(postForm?.children.length).toBe(3);
    });

    it('should render a <TextInput /> for the post title', () => {
      const textInput = postForm?.querySelector(TITLE_INPUT);

      expect(textInput).toBeTruthy();
      expect(textInput).toBeInstanceOf(HTMLInputElement);

    });

    it('should render a <Editor />', () => {
      const editor = postForm?.querySelector(EDITOR);

      expect(editor).toBeTruthy();
      expect(editor).toBeInstanceOf(HTMLDivElement);
    });

    it('should render a <Button />', () => {
      const button = postForm?.querySelector(BUTTON);

      expect(button).toBeTruthy();
      expect(button).toBeInstanceOf(HTMLButtonElement);
    });
  });
});
