function Game(name, description, price, developer, tags, date, OSmin, pro_min, ram_min, gra_min, sto_min, OSrec, pro_rec, ram_rec, gra_rec, sto_rec) {
    this.name = name;
    this.description = description;
    this.price = price;

    this.developer = developer;
    this.tags = tags;
    this.date = date;

    this.OSmin;
    this.pro_min;
    this.ram_min;
    this.gra_min;
    this.sto_min;

    this.OSrec;
    this.pro_rec;
    this.ram_rec;
    this.gra_rec;
    this.sto_rec;
}

function createGames() {

    var games = [
        {
            name: 'Helicoptero Loco',
            description: 'trata de que tu helicoptero no se estrelle, aguanta lo que mas puedas¡¡¡',
            price: 25000,
            developer: 'Santiago Roa',
            tags: 'accion, destreza',
            date: '24/03/2020',
            OS_min: 'Windows 10 32 bits',
            pro_min: 'Intel Pentium 1.7Ghz',
            ram_min: '2 GB',
            gra_min: 'HD graphics 2000 ',
            sto_min: '100 MB',
            OS_rec: 'Windows 10 64 bits',
            pro_rec: 'Intel core i5 2.7Ghz',
            ram_rec: '4 GB',
            gra_rec: 'HD graphics 570 ',
            sto_rec: '500 MB'
        },
        {
            name: 'Guerra Espacial Z',
            description: 'En nuestra galaxia se produjo una guerra, tienes que salvar a la humanidad antes de que el tiempo se agote, ve por ellos tigre ¡¡¡',
            price: 10000,
            developer: 'Santiago Roa',
            tags: 'plataforma',
            date: '22/03/2003',
            OS_min: 'Windows 7',
            pro_min: 'Intel Core2 Duo E8400, 2.0GHz o AMD Athlon 64 X2 6000+, 2.0GHz',
            ram_min: '1 GB',
            gra_min: 'Geforce 9600 GT o AMD HD 3870 512MB',
            sto_min: '1.95 MB',
            OS_rec: 'Windows / Mac OS',
            pro_rec: 'Intel Core i3 Duo E8400, 2.0GHz o AMD Ryzen3, 4.0GHz',
            ram_rec: '4 GB',
            gra_rec: 'GeForce GTX 1080Ti',
            sto_rec: '50 MB'
        },
        {
            name: 'Tiburoncin',
            description: 'Ayuda a tortugini a encontrar a su padre el cual se fue por unos cigarrillos, tortuguini tendra que atravesar el oceano en contra de furiosas bestias, no dejes que se lo coman¡¡¡¡',
            price: 9900,
            developer: 'Isaac Gamboa',
            tags: 'mar,accion',
            date: '24/03/2020',
            OS_min: 'Windows 7 64 bits',
            pro_min: 'Intel Pentium 1.7Ghz',
            ram_min: '2 GB',
            gra_min: 'HD graphics 2000 ',
            sto_min: '100 MB',
            OS_rec: 'Windows 10 64 bits',
            pro_rec: 'Intel core i5 2.7Ghz',
            ram_rec: '4 GB',
            gra_rec: 'HD graphics 570 ',
            sto_rec: '500 MB'
        },
        {
            name: 'LLorona',
            description: '¿por que la llorona cruzo la calle? ven y averigualo ¡¡¡¡',
            price: 11000,
            developer: 'Alejandro Daza',
            tags: ' aventura, terror',
            date: '21/03/2020',
            OS_min: 'Windows 7',
            pro_min: 'Intel Core2 Duo E8400, 2.0GHz o AMD Athlon 64 X2 6000+, 2.0GHz',
            ram_min: '1 GB',
            gra_min: 'Geforce 9600 GT o AMD HD 3870 512MB',
            sto_min: '1.95 MB',
            OS_rec: 'Windows / Mac OS',
            pro_rec: 'Intel Core i3 Duo E8400, 2.0GHz o AMD Ryzen3, 4.0GHz',
            ram_rec: '4 GB',
            gra_rec: 'GeForce GTX 1080Ti',
            sto_rec: '50 MB'
        },

          ];

    localStorage.setItem('games', JSON.stringify(games));
    console.log("created")
}
