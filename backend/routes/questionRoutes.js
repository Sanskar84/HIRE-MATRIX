const router = express.Router();

router

.route('/')
.get(questionController.getAllQuestions)
.post(questionController.createQuestion);

router

.route('/:id')
.get(questionController.getQuestion)
.patch(questionController.updateQuestion)
.delete(questionController.deleteQuestion);

module.exports = router;