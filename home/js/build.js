function init(section) {

    // construir Navbar
    document.getElementById("body").innerHTML = `<nav class="barra-navegacion">
            <ul>
                <li><a  href="catalogo.html">Tienda</a></li>
                <li>
                    <a href="index.html" class="logo">
                        <img width="150" height="150" src="imgs/logo2.png">
                    </a>
                </li>
                <li><a href="biblioteca.html">Mis Juegos</a></li>

            </ul>
        </nav>`;

    // construir contenido

    switch (section) {
        case "Tienda":
            initStore();
            break;

        case "Biblioteca":
            initLibrary();
            break;

        case "Perfil":
            initProfile();
            break;

        case "Juego":
            initGame();
            break;

        default:
            initStore();
    }

    // construir footer
    document.getElementById("body").innerHTML += `
    <!-- Footer -->
    <footer class="text-muted" id="footer">
        <div class="container text-center">
            <p> UNIVERSIDAD DISTRITAL</p>
        </div>
    </footer>`;
}

function initStore() {
    document.getElementById("body").innerHTML += `<div id="particles-js" class="">  </div> <div class="contenedor container-fluid my-2 p-md-5" id="contenido"></div>`;
    document.getElementById("contenido").innerHTML = `
    <!-- Contenido -->
    <div class="container-fluid my-2 p-md-5" id="contenido">



        <!-- Catalogo -->
        <div class="container my5">
            <div class="container m-1">
                <h1 class="titulo"><font size="20" face="Comic Sans MS, Arial,MS Sans Serif">Catálogo</font></h1>
            </div>
            <div class="album py-2">
                <div class="container">
                    <div class="row" id="catalog"></div>
                </div>
            </div>
        </div>

    </div>`;


    user = JSON.parse(localStorage.getItem('user'));
    games = JSON.parse(localStorage.getItem('games'));
    idsSug = getSuggest(user);
    suggest = "";
    indicators = "";
    i = 0;


    // construir catalogo

    catalog = "";
    i = 0;
    games.forEach(game => {
        catalog += `
        <div class="col-md-4 py-3">
            <div class="card mb-4 bg-dark h-100">
                <img src="../`+game.name+`/capturas/fondo.png" alt="">
                <div class="card-body">
                    <div class="title airmill">`+game.name+`</div>
                    <p class="card-text">`+game.description+`</p>
                    <div class="d-flex justify-content-between align-items-end">
                        <div class="price">$`+game.price+` COL</div>
                        <a href="juego.html"><button onclick="setGame(`+i+`)" class="btn btn-outline-light">Ver&rarr;</button></a>
                    </div>
                </div>
            </div>
        </div>`;
        i++;
    });
    document.getElementById("catalog").innerHTML = catalog;
}

function initLibrary() {
    user = JSON.parse(localStorage.getItem('user'));

    document.getElementById("body").innerHTML += `<div id="particles-js" class="">  </div> <div class="container-fluid my-2 p-md-5" id="contenido"></div>`;
    document.getElementById("contenido").innerHTML = `


        <!-- Biblioteca -->
        <div class="container my-5">
            <div class="container m-1">
                <h3>Biblioteca</h3>
            </div>
            <div class="album py-2">
                <div class="container" id="library"></div>
            </div>
        </div>`;



    // Construir biblioteca
    library = "";
    user.games.forEach(gameID => {
        game = JSON.parse(localStorage.getItem('games'))[gameID];
        library += `
        <div class="row">
            <div class="card bg-dark w-100 mb-3">
                <div class="row">
                    <div class="col-2">
                        <img src="../`+game.name+`/capturas/100x100.png" alt="" class="d-block h-100">
                    </div>
                    <div class="col">
                        <div class="card-body p-5">
                            <div class="row justify-content-between">
                                <div>
                                    <h2 class="card-title airmill">`+game.name+`</h2>
                                </div>
                                <div>
                                    <a href="juego.html"><button onclick="setGame(`+gameID+`)" class="btn btn-sm btn-outline-light">&larr;ir a la tienda</button></a>
                                    <button onclick="startGame(`+gameID+`)" class="btn btn-lg btn-outline-light">Jugar&rarr;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });
    document.getElementById("library").innerHTML = library;
}

function initProfile(){
    user = JSON.parse(localStorage.getItem('user'));
    document.getElementById("body").innerHTML += `
    <div class="container my-2 p-md-5" id="contenido">
        <!-- Informacion de la Cuenta -->
        <div class="card bg-dark my-5 info">
            <div class="card-body p-md-5">
                <h1 class="card-title"> Información de la Cuenta </h1>
                <div class="card-text px-md-5">
                    <div class="row">
                        <div class="col px-md-5">
                            <div class="row justify-content-between"> <strong>Usuario: </strong> `+user.user+` </div>
                            <div class="row justify-content-between"> <strong>E-mail: </strong> `+user.email+` </div>
                            <div class="row justify-content-between"> <strong>ID: </strong> `+user.id+` </div>
                        </div>
                        <div class="col px-md-5">
                            <div class="row justify-content-between"> <strong>Juegos en Propiedad: </strong> `+user.games.length+` </div>
                            <div class="row justify-content-between"> <strong>Ultimo juego jugado: </strong> `+user.fav_game+` </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Informacion Personal -->
        <div class="card bg-dark my-5 info">
            <div class="card-body p-md-5">
                <h1 class="card-title"> Información Personal </h1>
                <div class="card-text px-md-5">
                    <div class="row">
                        <div class="col px-md-5">
                            <div class="row justify-content-between"> <strong>Nombre: </strong> `+user.name+` </div>
                            <div class="row justify-content-between"> <strong>Edad: </strong> `+user.age+` </div>
                        </div>
                        <div class="col px-md-5">
                            <div class="row justify-content-between"> <strong>Lenguage Preferido: </strong> `+user.language+` </div>
                            <div class="row justify-content-between"> <strong>País: </strong> `+user.location+` </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

function initGame() {
    game = JSON.parse(localStorage.getItem('game'));
    document.getElementById("body").innerHTML += `<div id="particles-js" class="">  </div>  <div class="container-fluid p-0" id="contenido"></div>`;
    document.getElementById("contenido").innerHTML = `
    <!-- Capturas -->
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" id="screenshots"></div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <!-- Informacion -->
    <div class="container my-5">
        <h1 class="display-3 airmill">`+game.name+`</h1>
        <div class="text-justify">
            `+game.description+`
        </div>
        <h3 class="py-3">
            $ `+game.price+` COL
        </h3>
        <div class="btn-group mb-5" role="group">
            <a href="catalogo.html" class="btn btn-outline-light btn-lg">&larr;Volver a el Catalogo</a>
            <a href="biblioteca.html"><button onclick="getGame('`+game.name+`')" class="btn btn-outline-light btn-lg">Comprar &rarr;</button></a>
        </div>

        <!-- Acerca -->
        <div class="my-5">
            <h4 class="my-3">Acerca del Juego:</h4>
            <div class="row">
                <div class="col"> <strong>Desarrollador: </strong><br> `+game.developer+` </div>
                <div class="col"> <strong>Etiquetas: </strong><br> `+game.tags+` </div>
                <div class="col"> <strong>Fecha de Lanzamiento: </strong><br> `+game.date+` </div>
                <div class="col"> <strong>Reseñas: </strong><br> positivas </div>
            </div>
        </div>

        <!-- Requisitos -->
        <div class="my-5">
            <h4 class="my-3">Requisitos:</h4>
            <div class="row">
                <div class="col bg-dark mx-3 p-5">
                    <h5 class="mb-4">Mínimos:</h5>
                    <div class="row justify-content-between"> <strong>Sistema Operativo: </strong> `+game.OS_min+` </div>
                    <div class="row justify-content-between"> <strong>Procesador: </strong> `+game.pro_min+` o equivalente </div>
                    <div class="row justify-content-between"> <strong>RAM: </strong> `+game.ram_min+` usables </div>
                    <div class="row justify-content-between"> <strong>Gráficos: </strong> `+game.gra_min+` o equivalente </div>
                    <div class="row justify-content-between"> <strong>Almacenamiento: </strong> `+game.sto_min+` disponibles </div>
                </div>
                <div class="col bg-dark mx-3 p-5">
                    <h5 class="mb-4">Recomendados:</h5>
                    <div class="row justify-content-between"> <strong>Sistema Operativo: </strong> `+game.OS_rec+` </div>
                    <div class="row justify-content-between"> <strong>Procesador: </strong> `+game.pro_rec+` o equivalente </div>
                    <div class="row justify-content-between"> <strong>RAM: </strong> `+game.ram_rec+` usables </div>
                    <div class="row justify-content-between"> <strong>Gráficos: </strong> `+game.gra_rec+` o equivalente </div>
                    <div class="row justify-content-between"> <strong>Almacenamiento: </strong> `+game.sto_rec+` disponibles </div>
                </div>
            </div>
        </div>
    </div>`;




}

function setGame(i){
    localStorage.setItem('game',JSON.stringify(JSON.parse(localStorage.getItem('games'))[i]));
}
