var users = [
    {
      user: 'Isok',
      pass: '1234',
      email: 'isok_gamboa1999@hotmail.com',
      id: '000001',
      games: [0,1,2],
      max_score: 0,
      fav_game: 'ninguno',
      last_game: [0,1],

      name: 'Isaac Gamboa',
      age: 20,
      language: 'Español',
      location: 'España'
    },
    {
      user: 'Daymian',
      pass: '1234',
      email: 'RoaSantiago@gmail.com',
      id: '000002',
      games: [0,1,2],
      max_score: 0,
      fav_game: 'ninguno',
      last_game: [0,1],

      name: 'Nelson Santiago Roa',
      age: 22,
      language: 'Español',
      location: 'España'
  },


];

if(localStorage.getItem('user') != null){
    Nuser = JSON.parse(localStorage.getItem('user'));
    for (let i = 0; i < users.length; i++) {
        if(users[i].name == Nuser.name) users[i] = Nuser;
    }
    localStorage.removeItem('user');
}

localStorage.setItem('users', JSON.stringify(users));

var login = document.getElementById('login');

login.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(login);
    for (let i = 0; i < users.length; i++) {
        if (users[i].user == data.get('user') && users[i].pass == data.get('pass')) {
            localStorage.setItem('user', JSON.stringify(users[i]));
            createGames();
            console.log("correcto");
            setTimeout(ingresar(), 5000);
            return;
        }else{

        }
    }
    console.log("Usuario Invalido");
    localStorage.clear();
})

function ingresar(){
    location = "catalogo.html";
}
