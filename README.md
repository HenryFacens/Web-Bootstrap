# Web-Bootstrap

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="stylesheet" type="text/css" href="./style-main.css">
  <link rel="stylesheet" type="text/css" href="./fix-style.css">
  <link rel="java_charts" type="text/js" href="./charts.js">
  <link rel="java_boots" type="text/js" href="./bootstrap.js">
  <link rel="stylesheet" type="text/css" href="./outrocss.css">
  <link rel="stylesheet" href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css'>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">

  <script src="path/to/chartjs/dist/chart.js"></script>



  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <title>Web's</title>
</head>

<body>
  <nav class="navbar navbar-dark flex-md-nowrap p-0 shadow p-2">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="home_page.html">
      <img src="https://mlogu6g7z5ex.i.optimole.com/BZeHsdU.RF8R~518a6/w:500/h:159/q:90/https://facens.br/wp-content/uploads/2021/03/logo-f-b.png"    class="imgnav" height="40px"></a>
    <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link text-white" href="#">Login</a>
      </li>
    </ul>
  </nav>
  <nav class="container-fluid">
    <div class="sidebar">
      <div class="logo-details">
          <div class="logo_name">Dashboard</div>
          <i class='bx bx-menu' id="btn"></i>
      </div>
      <ul class="nav-list">
          <li>
              <a href="index.html">
                  <i class='bx bx-bar-chart'></i>
                  <span class="links_name" id="start-page">Dashboard</span>
              </a>
              <span class="tooltip">Página inicial</span>
          </li>
          <li>
              <a href="#">
                <i class="bx bx-data"></i>
                  <span class="links_name">Dados</span>
              </a>
              <span class="tooltip">Dados</span>
          </li>
          <li>
              <a href="{% url 'novo_servico' %}">
                  <i class='bx bx-chat'></i>
                  <span class="links_name">Serviços</span>
              </a>
              <span class="tooltip">Serviços</span>
          </li>
          <li>
              <a href="#">
                  <i class='bx bx-folder'></i>
                  <span class="links_name">Agenda</span>
              </a>
              <span class="tooltip">Agenda</span>
          </li>
          <li>
              <a href="#">
                  <i class='bx bx-cog'></i>
                  <span class="links_name">Histórico</span>
              </a>
              <span class="tooltip">Histórico</span>
          </li>
      </ul>
  </div>
  <section class="home-section">
      <div class="coluna-dash d-flex">
        <div class="coluna-dash-inf">
        <h1 class="h2-dash">Dashboard</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2 pl-2 pt-1">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            This week
          </button>
        </div>
      </div>
      <div class="div_grafico_1">

        <div class="div_grafico_um">
        <canvas id="grafico" width="400" height="400"></canvas>
        </div>

        <div class="div_grafico_um" >
        <canvas id="grafico2" width="400" height="400"></canvas>
        </div>

        <div class="div_grafico_um">
          <canvas id="grafico3" width="400" height="400"></canvas>
        </div>
      </div>

    </div>
    <main role="main" class="col-md-9 ml-5 col-lg-10 px-4 border border-primary mt-5 ">
      <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
      <div class="main2">
      <h2>Dados Coletados</h2>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>---------</th>
              <th>---------</th>
              <th>---------</th>
              <th>---------</th>
              <th>---------</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>---------</th>
              <th>---------</th>
              <th>---------</th>
              <th>---------</th>
              <th>---------</th>
            </tr>
            <tr>
              <th>---------</th>
              <th>---------</th>
              <th>---------</th>
              <th>---------</th>
              <th>---------</th>
            </tr>
            <tr>
              <th>---------</th>
              <th>---------</th>
              <th>---------</th>
              <th>---------</th>
              <th>---------</th>
            </tr>
            <tr>
              <th>---------</th>
              <th>---------</th>
              <th>---------</th>
              <th>---------</th>
              <th>---------</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </main> 
  </section>
  </nav>
</body>
<script>
  let grafico_1 = document.getElementById('grafico');
  let grafico = new Chart(grafico_1, {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [50, 90, 50, 100, 75, 46],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
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

  let grafico3 = document.getElementById('grafico3');
  let grafico_3 = new Chart(grafico3, {
      type: 'pie',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
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

  let grafico2 = document.getElementById('grafico2');
  let grafico_2 = new Chart(grafico2, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
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
  </script>
  <script>
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let dashlet = document.querySelector(".h2-dash")

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();
});

searchBtn.addEventListener("click", ()=>{ 
    sidebar.classList.toggle("open");
    menuBtnChange();
});

function menuBtnChange() {
if(sidebar.classList.contains("open")){
  closeBtn.classList.replace("bx-menu", "bx-x");
  dashlet.classList.replace("h2-dash", "h2-dash-sum");
}else {
    closeBtn.classList.replace("bx-x","bx-menu");
    dashlet.classList.replace("h2-dash-sum", "h2-dash");
}
}
  </script>
</html>