export interface ActividadesDiarias {
    Id: number;
    Fecha: any;
    Proyecto: number;
    Usuario: number;
    Actividad: number;
    Tiempo: number;
    Descripcion: string;
}

export interface ActividadesDiariasEdit {
    Fecha: any;
    Proyecto: number;
    Usuario: number;
    Actividad: number;
    Tiempo: number;
    Descripcion: string;
}