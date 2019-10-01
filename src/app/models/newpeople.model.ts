export class NewPeople {

    id: Number;
    name: String; 
    height: Number; 
    mass: Number; 
    hair_color: String;
    skin_color: String; 
    eye_color: String; 
    birth_year: String; 
    gender: String; 
    homeworld: String; 
    films: [];
    species: [];
    vehicles: [];
    starships: [];
    created: Date;
    edited: Date;
    url: String;

    constructor(res: any) {
        this.id = this.getIdFromUrl(res.url);
        this.name = res.name; 
        this.height = res.height; 
        this.mass = res.mass; 
        this.hair_color = res.hair_color;
        this.skin_color = res.skin_color; 
        this.eye_color = res.eye_color; 
        this.birth_year = res.birth_year; 
        this.gender = res.gender; 
        this.homeworld = res.homeworld; 
        this.films = res.films.map(res => this.getIdFromUrl(res));
        this.species = res.species;
        this.vehicles = res.vehicles;
        this.starships = res.starships;
        this.created = res.created;
        this.edited = res.edited;
        this.url = res.url;
    }

    getIdFromUrl(url: string) {
        const urlArray = url.split('/');
        return +urlArray[urlArray.length-2];
    }

}