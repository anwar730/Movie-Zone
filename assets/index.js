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

    box.addEventListener("click", () => {
        // console.log(movie)
        let overview=document.createElement('p')
        overview.className="overview"
        overview.innerHTML=`
        <div class="overview-inner">
        <button class="close">X</button>
        <div class="innerbox">
        <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}">
        <div class="info">
        <h1>${movie.title || movie.name}</h1>
        <hr id="movie-hr">
        <p class="descrip">${movie.overview}<p>
        <div class="user-review">
        <form id="cmnt-form">
        <input type="text" id="review" placeholder="Movie Review">
        <button id ="review-btn"type="submit">Submit</button>
        <form>
        
        </div>
        </div>
        </div>
        </div>
        `
        
        document.querySelector('.tr-list').append(overview)
        let reviewbtn=document.querySelector('#cmnt-form')
        let comment=document.createElement('p')
        comment.className="user-comment"
        reviewbtn.addEventListener('submit',(e)=>{
            e.preventDefault()
            // console.log(e.target.review.value)
            comment.textContent=e.target.review.value
        })
        let goback=document.querySelector('.close')
        goback.addEventListener('click',()=>{
            overview.style.display='none'
        })
        document.querySelector('#cmnt-form').append(comment)
 
    })
    });
}



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


