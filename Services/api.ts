import {NewsApiResponse} from '../Models/NewsI'
import { TournamentApiResponse } from '@/Models/TournamentI';

export async function getNews(): Promise<NewsApiResponse>{
  const apiKey = process.env.NEWS_API
  const url = `https://newsapi.org/v2/everything?q=tennis&pageSize=100&apiKey=${apiKey}&sources=bbc-sport,espn&sortBy=relevancy&searchIn=description,content`

  try {
    const response = await fetch(url);
    const data: NewsApiResponse = await response.json();

    return data
  } catch (error) {
    throw new Error("Unable to get News")
  }

}

export async function getTournaments(): Promise<TournamentApiResponse>{
  const apiKey = process.env.TENNIS_API
  const url = 'https://ultimate-tennis1.p.rapidapi.com/tournament_list/atp/2023/atp';
  const headers = new Headers();
  if(apiKey){
     headers.append('X-RapidAPI-Key', apiKey);
  }
   headers.append('X-RapidAPI-Host', 'ultimate-tennis1.p.rapidapi.com');
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers
    })
    const result: TournamentApiResponse = await response.json();
    return result;
  } catch (error) {
    throw new Error("Unable to get the Tournament List")
  }
}
