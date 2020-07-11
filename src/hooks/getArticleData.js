async function getArticleData () {

    const articleAPI = "https://content-store.explore.bfi.digital/api/articles?page=2";

    const callAPI = async () => {
        return fetch(articleAPI).then(response => {
            return response.json();
        }).catch(function (ex) {
            console.log('parsing failed', ex);
            return ex;
        });
    }

    const articleData = await callAPI();

    console.log(articleData)
    
    return articleData;
}

export { getArticleData}