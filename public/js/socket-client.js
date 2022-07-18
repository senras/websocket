const lbOnline = document.querySelector('#lbOnline');
const lbOffline = document.querySelector('#lbOffline');
const socket = io();

socket.on('connect', () => {
	console.log('Conectado');
	lbOffline.style.display = 'none';
	lbOnline.style.display = '';
});

socket.on('disconnect', () => {
	console.log('Desconectado');
	lbOnline.style.display = 'none';
	lbOffline.style.display = '';
});
