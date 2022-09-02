import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { Editor } from '../../templates';

describe('Templates', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterAll(() => act(() => root?.unmount()));

  describe('<Editor />', () => {
    let editor: HTMLDivElement | null | undefined;
    let menuBar: HTMLDivElement | null | undefined;
    let firstGroupOfButtons: Element | null | undefined;
    let secondGroupOfButtons: Element | null | undefined;

    const onUpdate = jest.fn();

    beforeEach(() => {
      act(() => {
        root?.render(
          <Editor
            setBody={onUpdate}
            content={''}
          />
        );
      });

      editor = container?.querySelector('.textEditor');
      menuBar = container?.querySelector('.menuBar');
      firstGroupOfButtons = menuBar?.children[0];
      secondGroupOfButtons = menuBar?.children[1];
    });

    it('should render a div', () => {
      expect(editor).toBeTruthy();
      expect(editor?.children.length).toBe(2);
    });

    it('should render the MenuBar', () => {
      expect(menuBar).toBeTruthy();
      expect(menuBar?.children.length).toBe(2);
      expect(firstGroupOfButtons?.children.length).toBe(9);
      expect(secondGroupOfButtons?.children.length).toBe(2);
    });
  });
});
