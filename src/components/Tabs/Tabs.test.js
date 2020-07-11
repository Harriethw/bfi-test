import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import each from 'jest-each';
import Tabs from './Tabs';
import * as mockData from './mockData/mockArticles.json'


const renderPage = () => {
    render(<Tabs data={mockData.default} />)
}

describe('Tabs behaviour', () => {

    each(mockData.default).it('renders tab title', async (article) => {
        renderPage();
        let heading = screen.getByText(article.tabTitle);
        expect(heading).toBeInTheDocument();
    });

    it('renders only the first tab links at start', () => {
        renderPage();
        const firstLink = mockData.default[0].results[0].title;
        const hiddenLink = mockData.default[1].results[0].title
        expect(screen.getByText(firstLink)).toBeInTheDocument();
        expect(screen.getByText(hiddenLink)).not.toBeVisible();
    })

    it('renders correct links when tab clicked', () => {
        renderPage();
        const firstLink = mockData.default[0].results[0].title;
        const hiddenLink = mockData.default[1].results[0].title;
        expect(screen.getByTestId('tab-1')).toBeInTheDocument();

        userEvent.click(screen.getByTestId('tab-1'));
        expect(screen.getByText(hiddenLink)).toBeVisible();
        expect(screen.getByText(firstLink)).not.toBeVisible();
    })

})

