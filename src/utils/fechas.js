const mesesAnio = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const monthsYear = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export const fechaCompleta = (fecha) => {
    const fechas = new Date(fecha);
    return fechas.getDate() + " de " + mesesAnio[fechas.getMonth()] + " de " + fechas.getFullYear();
}

export const fechaFormatoInternacional = (fecha) => {
    const fechas = new Date(fecha);
    let dia = fechas.getDate() < 10 ? `0${fechas.getDate()}` : fechas.getDate();
    let mes = parseInt(fechas.getMonth())+1;
    return dia + "/" + mes + "/" + fechas.getFullYear();
}

export const fechaFormatoCourse = (fecha) => {
    const fechas = new Date(fecha);
    let dia = fechas.getDate() < 10 ? `0${fechas.getDate()}` : fechas.getDate();
    let mes = parseInt(fechas.getMonth())+1;
    return fechas.getFullYear().toString() + "-" + mes.toString() + "-" + dia.toString();
}

export const fechaFormatoCourseRev = (fecha) => {
    const fechas = new Date(fecha);
    let dia = fechas.getDate() < 10 ? `0${fechas.getDate()}` : fechas.getDate();
    let mes = parseInt(fechas.getMonth())+1;
    return dia + "-" + mes + "-" + fechas.getFullYear();
}

export const fechasListBlog = (fecha,lang) => {
    const fechas = new Date(fecha);
    let day = fechas.getDate() < 10 ? `0${fechas.getDate()}` : fechas.getDate();

    if(lang === "en")
        return `${monthsYear[fechas.getMonth()].slice(0,3)} ${day}`;
    else
        return `${day} ${mesesAnio[fechas.getMonth().slice(0,3)]}`;
}