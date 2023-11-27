public class App {

    public static void main(String[] args) {
        System.out.println(
                ExamFactory.createExam(
                        new EssayQuestionFactory().createQuestion(),
                        new MultiChoiceQuestionFactory().createQuestion(),
                        new ShortAnswerFactory().createQuestion()
                )
        );
    }

}
