import { tavily } from '@tavily/core';

const client = tavily({ apiKey: process.env.TAVILY_API_KEY});

export default async function jobSearch(query : string){
    const webSearch = await client.search(query,{
        searchDepth : 'advanced',
        maxResults : 5
    });
    const webSearchResult = webSearch.results;
    return webSearchResult;
}