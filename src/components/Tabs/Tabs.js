import React, { useState } from 'react';

export default function Tabs(props) {

    const { data } = props;

    const [activeTab, setActiveTab] = useState(0);

    const selectTab = (event, index) => {
        event.preventDefault();
        setActiveTab(index);
    }

    const TabHeaders = () => data.map((section, index) => {
        const { tabTitle } = section;
        return (<button onClick={(e) => selectTab(e, index)} key={index} data-testid={`tab-${index}`}>{tabTitle}</button>)
    })

    const TabContent = () => data.map((section, sectionIndex) => {
        const { results } = section;
        const content = results.map((result, index) => {
            const listItem = <><a href={result.url}>{result.title}</a><p>{result.summary.replace('&#39;', "'")}</p></>;
            return (<div key={index}><ol style={{ display: sectionIndex === activeTab ? 'block' : 'none' }}>{index + 1}. {listItem} </ol></div>)
        })
        return content;
    })

    return (<><TabHeaders /><TabContent /></>)
};