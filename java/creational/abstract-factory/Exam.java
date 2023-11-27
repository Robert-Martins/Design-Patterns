import java.util.List;
import java.util.stream.Collectors;

public class Exam {

    List<Question> questions;

    public Exam(Question ...questions) {
        this.questions = List.of(questions);
    }

    public String toString() {
        return this.questions.stream()
                .map(Question::render)
                .collect(Collectors.joining("\n ============================== \n"));
    }

}
