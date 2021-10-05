const { response, request } = require('express');

const getUsers = (req = request, res = response) => {
	const { name = 'Digite name', q, saludos = 'Buenas', apiKey } = req.query;
	res.json({
		status: 'ok',
		id: 1,
		msg: 'get api-controllers',
		name,
		q,
		saludos,
		apiKey
	});
};
const putUsers = (req = request, res = response) => {
	const id = req.params.id;
	res.json({
		status: 'ok',
		id: 2,
		msg: 'put api-controllers',
		id
	});
};
const deleteUsers = (req, res = response) => {
	res.json({
		status: 'ok',
		id: 4,
		msg: 'delete api-controllers'
	});
};
const patchUsers = (req, res = response) => {
	res.json({
		status: 'ok',
		id: 3,
		msg: 'patch api-controllers'
	});
};
const postUsers = (req, res = response) => {
	const { name, Mascotas, Estado } = req.body;

	res.json({
		status: 'ok',
		id: 5,
		msg: 'post api-controllers',
		name,
		Mascotas,
		Estado
	});
};

module.exports = { getUsers, patchUsers, putUsers, postUsers, deleteUsers };
