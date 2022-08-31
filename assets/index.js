document.addEventListener('DOMContentLoaded',()=>{


function getAllTrendingMovies(){
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=d3b69953f79121feef98281a3e589d66')
    .then(response=>(response.json()))
    // .then (data=>console.log(data.results))
    .then(data=>{
        renderOneMovie(data.results)
        
    })
}

function renderOneMovie(movies){
    movies.forEach(movie => {
    // console.log(movie)

    let box=document.createElement('li')
    box.className="trend-list"
    box.innerHTML=`
    <img id="trend-imgs"src ="https://image.tmdb.org/t/p/w500${movie.backdrop_path}">
    <h4>${movie.title || movie.name}</h4>
    <p>Release date: ${movie.release_date || movie.first_air_date}</p>
    <p>Vote Count:${movie.vote_count}</p>
    `
    document.querySelector('.tr-list').append(box)
    });
}
// function getOverview(){
//     let overvie=document.getElementById('trend-imgs')
//     overvie.addEventListener('click', () => {
//         console.log(done)
//     })
// }
// getOverview()


// function trendingInfo(overviews){
//     let info=document.querySelector('#trend-imgs')
//     function getEachInfo()  { 
//         overviews.forEach(overview=>{
//         let trendBox=document.createElement('div')
//         trendBox.className="trend-box"
//         trendBox.innerHTML=`
//         <img id="trend_box"src ="https://image.tmdb.org/t/p/w500${overview.backdrop_path}">
//         <p>MOvie OverView: ${overview.overview}

//         `
//         trendBox.style.display='none'
//         document.querySelector('.trending').appendChild(trendBox)
// })}
//     info.addEventListener('click',(getEachInfo()))
        
    
//     }


function initialize(){
    getAllTrendingMovies()

}
initialize()

function emailAddress(){
    let email=document.querySelector('#form')
    let p=document.createElement('p')
    p.className="thanks-p"
    
    email.addEventListener("submit",(e)=>{
        e.preventDefault()
        // console.log("done")
         

         p.textContent='Thank you for subscribing. Please check your Email for more informtion'
        email.reset()
        

    })
    
    document.querySelector('#form').append(p)
}
emailAddress()

// let genre=document.querySelector(".gen-img")
// genre.addEventListener('click',(e)=>{
//     // console.log('click')

// })

// function getGenre(){
//     co
// }
})
