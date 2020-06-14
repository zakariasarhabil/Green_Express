const express = require('express');
const PortfolioController = require('./../controllers/PortfolioController');

const router = express.Router();

//router.get('/create', PortfolioController.createPortfolio);
router.get('', PortfolioController.getAllPortfolios);
router.post('', PortfolioController.storePortfolio);
router.put('/:id', PortfolioController.updatePortfolio);
//router.get('/:id/edit', PortfolioController.editPortfolio)
router.get('/:id', PortfolioController.showOnePortfolio)
router.patch('/:id', PortfolioController.patchPortfolio)
router.delete('/:id', PortfolioController.deletePortfolio)

module.exports = router;