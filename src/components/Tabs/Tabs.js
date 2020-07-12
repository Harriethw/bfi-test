import React, { useState } from 'react';
import { useArticleData } from '../../hooks/useArticleData';
import './styles/tabs.scss';

export default function Tabs() {
    const tabTitles = [
        { title: 'Review', key: 'review' },
        { title: 'Video', key: 'video' }
    ];
    const [activeTab, setActiveTab] = useState(0);

    const data = useArticleData(tabTitles[activeTab].key);

    const selectTab = (event, index) => {
        event.preventDefault();
        setActiveTab(index);
    }

    const TabHeaders = () => tabTitles.map((tabTitle, index) => {
        const activeClass = index === activeTab && 'active';

        return (<button
            className={`${activeClass}`}
            onClick={(e) => selectTab(e, index)}
            key={index}
            data-testid={`tab-${index}`}>
            {tabTitle.title}
        </button>)
    })

    //TODO function to format summary text
    const TabContent = () => data.map((section, sectionIndex) => {
        const { results } = section;
        const content = results.map((result, index) => {
            const listItem = <>
                <a href={result.url}>{result.title}</a>
                <p>{result.summary.replace(/&#39;/g, "'")}</p>
            </>;
            return (<div key={index}>
                <ol style={{ display: sectionIndex === activeTab ? 'block' : 'none' }}>
                    {index + 1}. {listItem}
                </ol>
            </div>)
        })
        return content;
    })

    return (<>
        <div className="tab-container">
            <div className="row--button"><TabHeaders /></div>
            <div className="row--content"><TabContent /></div>
        </div>
    </>)
};