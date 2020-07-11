import React from 'react';
import { render, screen, act, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import each from 'jest-each';
import Tabs from './Tabs';
import { useArticleData } from '../../hooks/useArticleData';
import * as mockData from './mockData/mockArticles.json'

jest.mock('../../hooks/useArticleData');

const renderPage = async () => {
    useArticleData.mockImplementation((type) => {
        if (type === 'review'){
            return [mockData.default[0]];
        } else return [mockData.default[1]]
    })

    render(<Tabs />);
    await waitForElement(() => screen.getByText('Review'));
    await waitForElement(() => screen.getByText('Video'));
}

describe('Tabs behaviour', () => {

    each(mockData.default).it('renders tab title', async (article) => {
        await renderPage();
        let heading = screen.getByText(article.tabTitle);
        expect(heading).toBeInTheDocument();
    });

    it('renders only the first tab links at start', async() => {
        await renderPage();
        const firstLink = mockData.default[0].results[0].title;
        const hiddenLink = mockData.default[1].results[0].title
        expect(screen.getByText(firstLink)).toBeInTheDocument();
        expect(screen.getByText(hiddenLink)).not.toBeVisible();
    })

    it('renders correct links when tab clicked', async () => {
        await renderPage();
        const firstLink = mockData.default[0].results[0].title;
        const hiddenLink = mockData.default[1].results[0].title;
        expect(screen.getByTestId('tab-1')).toBeInTheDocument();

        act(() => {
        userEvent.click(screen.getByTestId('tab-1'));
        });
        expect(screen.getByText(hiddenLink)).toBeVisible();
        expect(screen.getByText(firstLink)).not.toBeVisible();
    })

    it('shows summary text', async () => {
        await renderPage();
        expect(screen.getByText(/Psychology for all the family/)).toBeInTheDocument();
    })

})

