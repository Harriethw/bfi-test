import React, { useState } from 'react';
import { useArticleData } from '../../hooks/useArticleData';
import './styles/tabs.scss';

export default function Tabs() {
    //TODO: only call api with tab title when clicked?
    const data = useArticleData('review').concat(useArticleData('video'));

    const [activeTab, setActiveTab] = useState(0);

    const selectTab = (event, index) => {
        event.preventDefault();
        setActiveTab(index);
    }

    const TabHeaders = () => data.map((section, index) => {
        const { tabTitle } = section;
        const activeClass = index === activeTab && 'active';

        return (<button
            className={`${activeClass}`}
            onClick={(e) => selectTab(e, index)}
            key={index}
            data-testid={`tab-${index}`}>
            {tabTitle}
        </button>)
    })

    const TabContent = () => data.map((section, sectionIndex) => {
        const { results } = section;
        const content = results.map((result, index) => {
            const listItem = <>
                <a href={result.url}>{result.title}</a>
                <p>{result.summary.replace('&#39;', "'")}</p>
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