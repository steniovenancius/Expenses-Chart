
const graficoSemanal = document.getElementById('semanal')

const week = []

new Chart(graficoSemanal, {
    type: 'bar',
    data: {
        labels: week,
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const endpoint = "../src/data.json"
fetch(endpoint).then((response) => {
    response.json().then((dados) => {
        dados.map((day) => {
            console.log(day);
        })
    })
})