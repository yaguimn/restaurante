import express from 'express';
import ReservaController from '../controllers/ReservaController.js';
import FaleController from '../controllers/FaleController.js';
import menuController from '../controllers/menuController.js';

const router = express.Router();

// Rota para a página inicial
router.get('/', (req, res) => {
    res.render('Base');
});

// Rotas de Reserva
router.get('/reserva/new', ReservaController.showFormReserva);
router.post('/reserva/add', ReservaController.addNewReserva);

// Rotas de Fale Conosco
router.get('/fale/new', FaleController.showFormFale);
router.post("/fale/add", FaleController.addNewFale);

// Rotas de Cardápio
router.get('/cardapio', menuController.getMenu);

export default router;
