import { Person } from "./Person"

(() => {
    const person: Person = Person.builder()
                            .withName("Robert")
                            .withEmail("robert@robert.com")
                            .withAge(22)
                            .withIsNaturalPerson(true)
                            .withPersonAction(() => console.log("Altered action"))
                            .build();
    person.personAction();
})();