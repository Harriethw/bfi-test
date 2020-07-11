import { useState, useEffect } from 'react';
import axios from 'axios';

const useArticleData = (type) => {

    const apiLink = `https://content-store.explore.bfi.digital/api/articles?type=${type}&page=1&size=5`;

    const [tabData, setTabData] = useState([]);

    //TODO: error handling/loading state

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(apiLink);
            setTabData(tabData => tabData.concat({ tabTitle: result.data.data[0].type.name, results: result.data.data }));
        }

        fetchData();
    }, [apiLink]);

    return tabData;
}

export { useArticleData }