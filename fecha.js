const fecha = new Date();
console.log(fecha);

const fechaNacimiento = new Date(1994, 02, 04);
console.log(fechaNacimiento);

const hoy = (fecha > fechaNacimiento);
console.log(hoy);

const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

const mesNacimiento = fechaNacimiento.getMonth()+1;
console.log(mesNacimiento);

const añoNacimiento = fechaNacimiento.getFullYear();
console.log(añoNacimiento);