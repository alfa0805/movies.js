AOS.init();
let inputsearch = document.getElementById('input_search');
let navcard = document.getElementById('bignav');


function searinput(movies){
    navcard.innerHTML = ''
    if (movies.length === 0){
        navcard.innerHTML ='<h2>natija topilmadi</h2>'
        return;
    } 
    movies.map((nev_card,index) =>{
        navcard.innerHTML += `
             <div class="nav_card" data-aos="flip-down"style="background-image:url(${nev_card.posterurl});">
                    <div class="nav_year">
                        <p class="nav_number">${nev_card.year}</p>
                        <p class="nav_draem">${nev_card.genres}</p>
                    </div>
                    <h2 class="nav_title">${nev_card.title}</h2>
                     <div class="hover-nav">
                        <h2 class="hover-title">${nev_card.imdbRating}</h2>
                     </div>
            </div>
        `
    })
}
searinput(movies)
inputsearch.addEventListener('input',function(event){
    let text = event.target.value.toLowerCase();
    let moviessearch = movies.filter(item => item.title.toLowerCase().includes(text));
    searinput(moviessearch);
});
