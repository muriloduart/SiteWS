

/*const url = "https://swapi.py4e.com/api/films/1/"


function getFilm() {
    var div_film_info = document.getElementById('film-info');
    

    axios.get(url)
    .then(response =>{
        console.log(response);
        const data = response.data.title;
        div_film_info.innerHTML = JSON.stringify(data);
        console.log(data);
        /* let template = '<div>';
        template += '<div class="film-info">';
        template += '';
        template+= '</div>'; 
        div_film_info.innerHTML = template;*/


/*
    })
    .catch(error => console.log(error))
}

getFilm();
*/