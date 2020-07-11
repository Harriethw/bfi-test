import React from 'react';
import { render, screen } from '@testing-library/react';
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

})

