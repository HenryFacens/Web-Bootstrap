let grafico_1 = document.getElementById('grafico-1');
let chart_grafico_1 = new Chart(grafico_1, {
    type: 'line',
    // data: ...
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Chart Title'
            }
        },
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    }
})

let grafico_2 = document.getElementById('grafico-2');
let chart_grafico_2 = new Chart(grafico_2, {
    type: 'line',
    // data: ...
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Chart Title'
            }
        },
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    }
})
 