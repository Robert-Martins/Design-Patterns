import java.util.List;

public class MultiChoiceQuestionFactory implements QuestionFactory {

    public Question createQuestion() {
        return new MultiChoiceQuestion(
                2,
                "How much is 2 + 2?",
                "b",
                List.of(
                        "a - 1",
                        "b - 4",
                        "c - 14"
                )
        );
    }

}
