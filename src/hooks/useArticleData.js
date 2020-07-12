import { useState, useEffect } from 'react';
import axios from 'axios';

const useArticleData = (type) => {

    const apiLink = `https://content-store.explore.bfi.digital/api/articles?type=${type}&page=1&size=5`;

    const [tabData, setTabData] = useState([]);

    //TODO: error handling/loading state

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(apiLink);
            setTabData(tabData => tabData.concat({ tabTitle: type, results: result.data.data }));
        }

        if (tabData.length === 0) {
            fetchData();
        } else if (!tabData.some(e => e.tabTitle === type)) {
            fetchData();
        }
    }, [apiLink, tabData, type]);

    return tabData;
}

export { useArticleData }