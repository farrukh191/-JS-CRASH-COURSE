// fetch API function
(async function () {
    const response = await fetch('./assets/API/data.json');
    const result = await response.json();
    let display_movie = document.getElementById('movies_listing');


    let movie_genre = document.getElementById('genre');
    let movie_year = document.getElementById('Year');
    let movie_language = document.getElementById('language');
    let movie_rating = document.getElementById('rating');

    // display search item
    const displaySearch = (data) => {
        console.log(data);
        // data.forEach((movie, index) => {
        //     const item = `
        //     <tr key=${index}>
        //     <td>${index + 1}</td>
        //     <td>
        //         <div class='d-flex align-items-center'>
        //             <img src=${`https://image.tmdb.org/t/p/w45/${movie.poster_path}`} alt=${movie.poster_path}>
        //             <div class='discription ps-3'>
        //                 <h6 class='movie_title text-primary mb-1'>${movie.title}</h6>
        //                 <span class='badge text-bg-primary me-2 px-3'>${movie.certification}</span>
        //                 <span class='genre'>Action, Science Fiction</span>
        //                 <span class='runtime'>113</span>
        //             </div>
        //         </div>
        //     </td>
        //     <td>${movie.release_date.substr(0, 4)}</td>
        // </tr>
        //     `;
        //     display_movie.appendChild(item);
        // })
    }

    const search_Function = () => {
        let genre = movie_genre.value;
        let year = movie_year.value;
        let language = movie_language.value;
        let rating = movie_rating.value;

        // filter array
       const filtered_movie = result.filter(function(result){
        return (result.vote_average == rating || result.original_language == language)
       });
        displaySearch(filtered_movie)
    }
    document.getElementById('search_movie_form').addEventListener('change', search_Function);

})()