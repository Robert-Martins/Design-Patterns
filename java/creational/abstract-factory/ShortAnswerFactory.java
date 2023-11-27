public class ShortAnswerFactory implements QuestionFactory {

    public Question createQuestion() {
        return new ShortAnswerQuestion(
                3,
                "How Software Engineer is speeled in Portuguese?",
                "Engenheiro de Software",
                20
        );
    }

}
