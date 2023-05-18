// import {getNews} from '../Services/api'
// import { Article } from '@/Models/NewsI';
// import { Tournament } from "@/Models/TournamentI"
// import { getTournaments } from "@/Services/api"


// import tournamentsData from '../Mocks/tournaments.mock.json'
import newsData from '../Mocks/news.mock.json'


export default async function Home() {

  return (
    <>
      <div className='col-start-2 col-end-12  pt-8  flex flex-col  items-center'>
        <h1 style={{wordSpacing: '-.2rem'}} className='uppercase text-3xl text-justify  font-bold text-[#208e4e] mb-2'>{newsData.news[0].title}</h1>
        <img src={newsData.news[0].urlToImage ? newsData.news[0].urlToImage : "/placeholder-image.webp"} alt="prova" className='object-cover w-full ' />
        <p className='mt-4 text-xl w-full text-justify'>{newsData.news[0].content.replace(/\[.*?\]/gm, "")}</p>
      </div>
      <div className='col-start-2 col-end-12   py-3 overflow-auto flex flex-col'>
          <hr  className='h-1 w-full bg-[var(--secondary-color)]'/>     
          <div className='mt-4  h-full w-full grid grid-cols-6 overflow-auto gap-y-4 max-h-[410px]'>
            {
              newsData.news.slice(1).map(article => (
                <div className='col-span-full flex justify-between items-center border-b-[1px] last:border-b-0 border-[var(--secondary-color)] py-4 px-2'>
                   <h2 className='uppercase text-lg font-bold text-[#208e4e] w-[70%]'>{article.title.replace(/\s\|\s.*$/gm, "")}</h2>
                  <img src={article.urlToImage ? article.urlToImage : "/placeholder-image.webp"} className='-object-cover w-[25%] h-[100%]' />   
                </div>
              ))
            }
          </div>
      </div>
    </>
 )
}

