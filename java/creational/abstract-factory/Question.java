public abstract class Question {

    protected Integer number;

    protected String title;

    protected String rightAnswer;

    public Question(Integer number, String title, String rightAnswer) {
        this.number = number;
        this.title = title;
        this.rightAnswer = rightAnswer;
    }

    public abstract String render();

}
