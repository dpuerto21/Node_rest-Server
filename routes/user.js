const { Router } = require('express');
const { getUsers, putUsers, deleteUsers, patchUsers, postUsers } = require('../controllers/user.controllers');

const router = Router();

router.get('/', getUsers);

router.put('/:id', putUsers);

router.delete('/', deleteUsers);

router.patch('/', patchUsers);

router.post('/', postUsers);

module.exports = router;
