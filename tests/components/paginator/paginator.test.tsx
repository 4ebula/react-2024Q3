import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PaginatorComponent } from '../../../src/components/paginator/paginator';

describe('PaginatorComponent', () => {
  test('should render', async () => {
    const pages = 1;
    const offset = 0;
    const setOffset = () => {};
    const { container } = render(
      <PaginatorComponent pages={pages} offset={offset} setOffset={setOffset}>
        <div></div>
      </PaginatorComponent>,
    );
    await waitFor(() => {
      const paginator = container.querySelector('.paginator');
      expect(paginator).toBeInTheDocument();
    });
  });

  describe('should display amount of pages', () => {
    let pages = 1;
    const offset = 0;
    const setOffset = () => {};

    test('on 1', async () => {
      pages = 1;
      const { container } = render(
        <PaginatorComponent pages={pages} offset={offset} setOffset={setOffset}>
          <div></div>
        </PaginatorComponent>,
      );

      await waitFor(() => {
        const pagesContainer = container
          .querySelector('.paginator')
          ?.querySelector('.pages');
        const pageEls = pagesContainer?.querySelectorAll('li');
        expect(pageEls!.length).toBe(pages);
      });
    });

    test('on 3', async () => {
      pages = 3;
      const { container } = render(
        <PaginatorComponent pages={pages} offset={offset} setOffset={setOffset}>
          <div></div>
        </PaginatorComponent>,
      );

      await waitFor(() => {
        const pagesContainer = container
          .querySelector('.paginator')
          ?.querySelector('.pages');
        const pageEls = pagesContainer?.querySelectorAll('li');
        expect(pageEls!.length).toBe(pages);
      });
    });

    test('on 10 should display first 5', async () => {
      pages = 10;
      const { container } = render(
        <PaginatorComponent pages={pages} offset={offset} setOffset={setOffset}>
          <div></div>
        </PaginatorComponent>,
      );

      await waitFor(() => {
        const pagesContainer = container
          .querySelector('.paginator')
          ?.querySelector('.pages');
        const pageEls = pagesContainer?.querySelectorAll('li');
        expect(pageEls!.length).toBe(5);
      });
    });
  });

  test('should change offset', async () => {
    const pages = 10;
    const offset = 0;
    const setOffset = jest.fn();
    const { container } = render(
      <PaginatorComponent pages={pages} offset={offset} setOffset={setOffset}>
        <div></div>
      </PaginatorComponent>,
    );

    await waitFor(() => {
      const controls = container
        .querySelector('.paginator')
        ?.querySelectorAll('.control');
      const [backBtn, forwardBtn] = [...controls!];
      expect(backBtn.classList).toContain('disabled');

      (forwardBtn as HTMLDivElement).click();
      expect(setOffset).toHaveBeenCalled();
    });
  });
});
