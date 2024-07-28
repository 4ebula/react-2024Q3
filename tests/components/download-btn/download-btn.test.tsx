import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DownloadBtnComponent } from '../../../src/components/download-btn/download-btn';
import * as utils from '../../../src/utils/cvs';
import { renderWithStore } from '../../utils/test-utils';

describe('Download button', () => {
  beforeEach(() => {
    global.URL.createObjectURL = jest.fn();
  });

  test('should render', async () => {
    const { container } = render(renderWithStore(<DownloadBtnComponent />));
    const btn = container.querySelector('button');
    await waitFor(() => {
      expect(btn).toBeInTheDocument();
      expect(btn?.textContent).toBe('Download');
    });
  });

  test('should start download', async () => {
    const downloadFn = jest.spyOn(utils, 'convertToCSV');
    const { container } = render(renderWithStore(<DownloadBtnComponent />));
    await waitFor(() => {
      const btn = container.querySelector('button');
      btn?.click();

      expect(downloadFn).toHaveBeenCalled();
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
