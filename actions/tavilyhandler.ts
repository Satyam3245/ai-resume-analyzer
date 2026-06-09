"use server";
import { tavily } from '@tavily/core';

const client = tavily({ apiKey: process.env.TAVILY_API_KEY});

export default async function jobSearch(query : string){
    // Add the job role here and then call it in the frontend and then store the response 
    // in the useState and make a card in the frontend and then post with the links to it 
    const webSearch = await client.search(`Give me Jobs on ${query}`,{
        searchDepth : 'advanced',
        maxResults : 5
    });
    const webSearchResult = webSearch.results;
    return webSearchResult;
}