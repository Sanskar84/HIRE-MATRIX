const express = require('express');
const router = express.Router();
const {
  getAllResults,
  getResult,
  createResult,
  updateResult,
  deleteResult,
} = require('../controllers/resultController');

router
.route('/')
.get(getAllResults)
.post(createResult);


router
.route('/id')
.get(getResult)
.patch(updateResult)
.delete(deleteResult);
module.exports = router;