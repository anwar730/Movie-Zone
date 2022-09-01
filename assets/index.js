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
            e.reset()
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

})



function  fetchAction(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=d3b69953f79121feef98281a3e589d66&include_adult=false&page=1&with_genres=28')
    .then(res=>res.json())
    .then (data=>{
        getaction(data.results)
    })
}
fetchAction()
function getaction(actions){
        let actionImg=document.querySelector('#actimg')
        actionImg.addEventListener('click',()=>{
            // console.log('click')
            actions.forEach(action =>{
                // console.log(action.title)
                let actionlist=document.createElement('li')
                actionlist.className="oklist"
                actionlist.textContent=action.title
                let changeheight=document.querySelector('.genre')
                changeheight.style.height="1300px"; 
                actionlist.style.margin="10px 0px 0px 0px"
                
                document.querySelector('#a').append(actionlist)
                
            })
        
        })
}        

function  fetchromance(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=d3b69953f79121feef98281a3e589d66&include_adult=false&page=1&with_genres=10749')
    .then(res=>res.json())
    .then (data=>{
        getromance(data.results)
    })
}
fetchromance()
function getromance(romances){
        let romanceimg=document.querySelector('#romimg')
        romanceimg.addEventListener('click',()=>{
            // console.log('click')
            romances.forEach(romance =>{
                
                let romancelist=document.createElement('li')
                romancelist.className="oklist"
                romancelist.textContent=romance.title
                let changeheight=document.querySelector('.genre')
                changeheight.style.height="1300px" 
                romancelist.style.margin="10px 0px 0px 0px"
                
                document.querySelector('#r').append(romancelist)
                
            })
        
        })
} 
function  fetchscifi(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=d3b69953f79121feef98281a3e589d66&include_adult=false&page=1&with_genres=878')
    .then(res=>res.json())
    .then (data=>{
        getscifi(data.results)
    })
}
fetchscifi()
function getscifi(scifis){
        let scifiImg=document.querySelector('#sciimg')
        scifiImg.addEventListener('click',()=>{
            // console.log('click')
            scifis.forEach(scifi =>{
                
                let scifilist=document.createElement('li')
                scifilist.className="oklist"
                scifilist.textContent=scifi.title
                let changeheight=document.querySelector('.genre')
                changeheight.style.height="1300px" 
                scifilist.style.margin="10px 0px 0px 0px"
                
                document.querySelector('#s').append(scifilist)
                
            })
        
        })
}

function  fetchFamily(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=d3b69953f79121feef98281a3e589d66&include_adult=false&page=1&with_genres=10751')
    .then(res=>res.json())
    .then (data=>{
        getfamily(data.results)
    })
}
fetchFamily()
function getfamily(families){
        let familyImg=document.querySelector('#familyimg')
        familyImg.addEventListener('click',()=>{
            // console.log('click')
            families.forEach(family =>{
                
                let familylist=document.createElement('li')
                familylist.className="oklist"
                familylist.textContent=family.title
                let changeheight=document.querySelector('.genre')
                changeheight.style.height="1300px" 
                familylist.style.margin="10px 0px 0px 0px"
                
                document.querySelector('#f').append(familylist)
                
            })
        
        })
}

function  fetchhorror(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=d3b69953f79121feef98281a3e589d66&include_adult=false&page=1&with_genres=27')
    .then(res=>res.json())
    .then (data=>{
        gethorror(data.results)
    })
}
fetchhorror()
function gethorror(horrors){
        let horrorImg=document.querySelector('#horrorimg')
        horrorImg.addEventListener('click',()=>{
            // console.log('click')
            horrors.forEach(horror =>{
                
                let horrorlist=document.createElement('li')
                horrorlist.className="oklist"
                horrorlist.textContent=horror.title
                let changeheight=document.querySelector('.genre')
                changeheight.style.height="1300px" 
                horrorlist.style.margin="10px 0px 0px 0px"
                document.querySelector('#h').append(horrorlist)
                
            })
        
        })
}
       