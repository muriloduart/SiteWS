const personagensContador = document.getElementById("personagens");
const luasContador = document.getElementById("luas");
const planetasContador = document.getElementById("planetas");
const navesContador = document.getElementById("naves");

preencherContadores();
preeecherTabela();


function preencherContadores() {

    Promise.all([
        swapiGet('people/'), 
        swapiGet('vehicles/'),
        swapiGet('planets/'),
        swapiGet('starships/')
    ]).then(function (results) {
        personagensContador.innerHTML = results[0].data.count;
        luasContador.innerHTML = results[1].data.count;
        planetasContador.innerHTML = results[2].data.count;
        navesContador.innerHTML = results[3].data.count;

    });
}

async function preeecherTabela(){
    const response = await swapiGet('films/');
    const tableData = response.data.results;
    console.log(tableData);
    
    tableData.forEach((film) => {
        $('#filmsTable').append(`<tr>
        <td>${film.title}</td>
        <td>${moment(film.release_date).format("DD/MM/YYYY")}</td>
        <td>${film.director}</td>
        <td>${film.episode_id}</td>
        </tr>`);
    })
}

function swapiGet(params) {
    return axios.get(`https://swapi.dev/api/${params}`);
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(desenhaGrafico);

async function desenhaGrafico() {
const response = await swapiGet('vehicles/');
const vehiclesArray = response.data.results;
console.log(vehiclesArray);

const dataArray = [];
dataArray.push(['Veiculos', 'Passageiros']);
vehiclesArray.forEach( (vehicle) => {
    dataArray.push([vehicle.name, Number(vehicle.passengers)]);
})

  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
    title: 'Capacidades de Humanos por Veículos',
    legend: "none"
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

