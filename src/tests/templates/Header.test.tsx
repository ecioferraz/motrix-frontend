import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../templates';

const HOME_LINK = 'a[class="home-link"]';
const UPLOAD_LINK = 'a[class="upload-link"]';

describe('Templates', () => {
  let container: HTMLDivElement | null = null;
  let root: Root | null = null;
  
  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });
  
  afterAll(() => act(() => root?.unmount()));
  
  describe('<Header />', () => {
    let header: HTMLHeadElement | null | undefined;
    
    beforeEach(() => {
      act(() => {
        root?.render(
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        );
      });

      header = container?.querySelector('header');
    });

    it('should render a form', () => {
      expect(header).toBeTruthy();
      expect(header?.children.length).toBe(1);
    });

    it('should render a <RedirectLink /> for the home page', () => {
      const homeLink = header?.querySelector(HOME_LINK);

      expect(homeLink).toBeTruthy();
      expect(homeLink).toBeInstanceOf(HTMLAnchorElement);
    });

    it('should render a <RedirectLink /> for the upload page', () => {
      const homeLink = header?.querySelector(UPLOAD_LINK);

      expect(homeLink).toBeTruthy();
      expect(homeLink).toBeInstanceOf(HTMLAnchorElement);
    });
  });
});
