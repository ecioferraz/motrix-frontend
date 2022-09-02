import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { BlogCard } from '../../templates';

const BODY_MOCK = [
  {
    title: 'test title',
    body: 'test body',
    updatedAt: new Date(),
  },
  {
    title: 'test title2',
    body: 'test body2',
    updatedAt: new Date(),
  },
];

const EDIT_BUTTON = 'button[name="edit"]';
const DELETE_BUTTON = 'button[name="delete"]';
const REDIRECT_LINK = 'a[class="history-link"]';
const TEXT_CARD_SECTION = 'section[class="blog-post"]';

describe('Templates', () => {
  let container: HTMLDivElement | null | undefined;
  let root: Root | null = null;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterAll(() => act(() => root?.unmount()));

  describe('<BlogCard />', () => {
    let blogCard: HTMLDivElement | null | undefined;

    beforeEach(() => {
      act(() => {
        root?.render(
          <BrowserRouter>
            <BlogCard body={BODY_MOCK} title='test title' />
          </BrowserRouter>
        );
      });

      blogCard = container?.querySelector('.blog-card');
    });

    it('should render a <BlogCard />', () => {
      expect(blogCard).toBeTruthy();
      expect(blogCard?.children.length).toBe(3);
    });

    it('should render a edit <Button />', () => {
      const editBtn = blogCard?.querySelector(EDIT_BUTTON);

      expect(editBtn).toBeTruthy();
      expect(editBtn).toBeInstanceOf(HTMLButtonElement);
    });

    it('should render a delete <Button />', () => {
      const deleteBtn = blogCard?.querySelector(DELETE_BUTTON);

      expect(deleteBtn).toBeTruthy();
      expect(deleteBtn).toBeInstanceOf(HTMLButtonElement);
    });

    it('should render a <RedirectLink />', () => {
      const redirectLink = blogCard?.querySelector(REDIRECT_LINK);

      expect(redirectLink).toBeTruthy();
      expect(redirectLink).toBeInstanceOf(HTMLAnchorElement);
    });

    it('should render a section containing <TextCard /> for the post title',
      () => {
        const textCardSection = blogCard?.querySelector(TEXT_CARD_SECTION);

        expect(textCardSection).toBeTruthy();
        expect(textCardSection).toBeInstanceOf(HTMLElement);
      });
  });
});
