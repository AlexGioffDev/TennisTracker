import {getNews} from '../Services/api'
import { Article } from '@/Models/NewsI';
// import { Tournament } from "@/Models/TournamentI"
// import { getTournaments } from "@/Services/api"

import tournamentsData from '../Mocks/tournaments.mock.json'

export default async function Home() {

  const news = await getNews();
  const articles: Article[] = news['articles']
  //console.log(tournamentsData.tournaments)
  console.log(articles)

  return (
    <p>Hello</p>
 )
}
