//Variáveis
const graficoSemanal = document.getElementById("semanal");
//Endereço do data json
const endpoint = "../src/data.json";

//Importação com fetchApi
fetch(endpoint)
.then((response) => response.json())
.then((data) => {
  const infos = new Chart(graficoSemanal, {
    type: "bar",
    data: {
      labels: data.map((infos) => infos.day),
      datasets: [
        {
          data: data.map((infos) => infos.amount),
          backgroundColor: ["hsl(10, 79%, 65%)"],
          borderRadius: 8,
          hoverBackgroundColor: "hsl(10, 79%, 75%)",
        },
      ],
    },
    options: {
      scales: {
        y: {
          tickes: {
            display: false
          },
          grid: {
            display: false,
            drawTicks: false,
            drawBorder: false 
          }
        },
        x: {
          grid: {
            offset: false,
            display: false,
            drawBorder: false,
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
})