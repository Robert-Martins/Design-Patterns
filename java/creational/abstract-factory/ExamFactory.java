public class ExamFactory {

    public static Exam createExam(Question ...questions) {
        return new Exam(questions);
    }

}
