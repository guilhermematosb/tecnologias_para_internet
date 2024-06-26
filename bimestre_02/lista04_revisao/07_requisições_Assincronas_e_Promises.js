// Crie uma função que faz uma requisição a uma API pública, 
// exibe os dados em uma tabela e trata possíveis erros.

async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displayData(data) {
    const table = document.getElementById('dataTable');
    data.forEach(item => {
        const row = table.insertRow();
        Object.values(item).forEach(text => {
            const cell = row.insertCell();
            cell.textContent = text;
        });
    });
}

document.addEventListener('DOMContentLoaded', fetchData);


// Crie uma função que faça uma requisição a uma API pública e exiba os dados em um gráfico utilizando uma biblioteca de gráficos (ex: Chart.js).

async function fetchChartData() {
    try {
        const response = await fetch('https://api.example.com/chartdata');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        renderChart(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function renderChart(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'My Dataset',
                data: data.values,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    });
}

document.addEventListener('DOMContentLoaded', fetchChartData);


// Crie uma função que faz múltiplas requisições a diferentes APIs e exibe os dados combinados.

async function fetchMultipleData() {
    try {
        const [response1, response2] = await Promise.all([
            fetch('https://api.example.com/data1'),
            fetch('https://api.example.com/data2')
        ]);

        if (!response1.ok || !response2.ok) {
            throw new Error('Network response was not ok');
        }

        const data1 = await response1.json();
        const data2 = await response2.json();
        displayCombinedData(data1, data2);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function displayCombinedData(data1, data2) {
    // Combine and display data from data1 and data2
}

document.addEventListener('DOMContentLoaded', fetchMultipleData);
