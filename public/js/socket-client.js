const lbOnline = document.querySelector('#lbOnline');
const lbOffline = document.querySelector('#lbOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
	// console.log('Conectado');
	lbOffline.style.display = 'none';
	lbOnline.style.display = '';
});

socket.on('disconnect', () => {
	// console.log('Desconectado');
	lbOnline.style.display = 'none';
	lbOffline.style.display = '';
});

socket.on('enviar-mensaje', (payload) => {
	console.log(payload);
});

btnEnviar.addEventListener('click', () => {
	const payload = {
		mensaje: txtMensaje.value,
		id: '123456',
		fecha: new Date().getTime(),
	};
	socket.emit('enviar-mensaje', payload, (id) => {
		console.log('Desde el server', id);
	});
});
