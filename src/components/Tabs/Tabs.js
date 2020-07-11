import React from 'react';

export default function Tabs(props) {

    const { data } = props;

    const TabHeaders = () => {
        return data.map((article, index) => {
            const { tabTitle} = article;
            return (<button key={index}>{tabTitle}</button>)
        })
    }

    return (<><TabHeaders /></>)
};