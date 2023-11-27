public class EssayQuestionFactory implements QuestionFactory {

    public Question createQuestion() {
        return new EssayQuestion(
                1,
                "What was the First World War?",
                "There is no right answer",
                600
        );
    }

}
