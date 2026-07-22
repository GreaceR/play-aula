//Definir la información de cada video
export interface Video {
    id: string;
    titulo: string;
    descripcion: string;
    imagenPortada: string; //url de la pelicula o video
    urlVideo: string; // link video por partes
    categoria: 'Biografias'| 'El mundo y los humanos' | 'Entrevistas a profesionales' | 'Ciencias y vida por el mundo' | 'Historias humanas'; //categorias madres
    duracion: string; //2h 45m o los min que indique cada video
}