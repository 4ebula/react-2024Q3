import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DownloadBtnComponent } from '../../../src/components/download-btn/download-btn';
import * as utils from '../../../src/utils/cvs';
import { renderWithStore } from '../../utils/test-utils';

describe('Download button', () => {
  beforeEach(() => {
    global.URL.createObjectURL = jest.fn();
  });

  test('should render', () => {
    const { container } = render(renderWithStore(<DownloadBtnComponent />));
    const btn = container.querySelector('button');
    expect(btn).toBeInTheDocument();
    expect(btn?.textContent).toBe('Download');
  });

  test('should start download', () => {
    const downloadFn = jest.spyOn(utils, 'downloadCSV');
    const { container } = render(renderWithStore(<DownloadBtnComponent />));
    const btn = container.querySelector('button');
    btn?.click();

    expect(downloadFn).toHaveBeenCalled();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
