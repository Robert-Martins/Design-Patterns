public class ShortAnswerQuestion extends Question {

    private Integer maxAnswerLength;

    public ShortAnswerQuestion(Integer number, String title, String rightAnswer, Integer maxAnswerLength) {
        super(number, title, rightAnswer);
        this.maxAnswerLength = maxAnswerLength;
    }

    public String render() {
        return new StringBuilder()
                .append(this.number.toString())
                .append(" - ")
                .append(this.title)
                .append("\n")
                .append("Right a maximum of ")
                .append(this.maxAnswerLength)
                .append(" characters")
                .toString();
    }

}
