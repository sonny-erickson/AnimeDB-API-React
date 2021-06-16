import React from 'react'

function SideBar({ topAnime }) {
    return (
        <aside>
            <nav>
                <h3>Top top</h3>
                {/* Warning -> ne pas confondre les () et les {} */}
                {topAnime.map(anime =>(
                 <a  
                    href={anime.url}
                    key={anime.mal_id}
                    target="_blank"
                    rel="noreferrer">
                    {anime.title}    
                </a>
                ))}
                
                
               
            </nav>
        </aside>
    )
}

export default SideBar
