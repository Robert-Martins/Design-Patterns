public class EssayQuestion extends Question {

    public Integer minAnswerLength;

    public EssayQuestion(Integer number, String title, String rightAnswer, Integer minAnswerLength) {
        super(number, title, rightAnswer);
        this.minAnswerLength = minAnswerLength;
    }

    public String render() {
        return new StringBuilder()
                .append(this.number.toString())
                .append(" - ")
                .append(this.title)
                .append("\n")
                .append("Right at least ")
                .append(this.minAnswerLength)
                .append(" characters")
                .toString();
    }

}
