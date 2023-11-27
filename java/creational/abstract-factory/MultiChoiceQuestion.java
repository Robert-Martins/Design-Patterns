import java.util.List;
import java.util.stream.Collectors;

public class MultiChoiceQuestion extends Question {

    private List<String> alternatives;

    public MultiChoiceQuestion(Integer number, String title, String rightAnswer, List<String> alternatives) {
        super(number, title, rightAnswer);
        this.alternatives = alternatives;
    }

    public String render() {
        return new StringBuilder()
                .append(this.number.toString())
                .append(" - ")
                .append(this.title)
                .append("\n")
                .append("Alternatives: \n")
                .append(
                        String.join("\n", this.alternatives)
                )
                .toString();
    }

}
