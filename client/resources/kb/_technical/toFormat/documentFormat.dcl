function myFunction(World world, Person me)
--> local Person you
--> domains Void
--> action {
    you = new(Person, firstName, "Peter", lastName, "Pan");
    me.friend := you
    world.execute(me);
    try (
        do {
            timeCounter(myCounter, {
                world.search(you)
                if(world.find(you) == true&&   you.greet(me) == true) {
                    me.talk(you)
                }
            })
        }
        catch(_EXTERNAL_ALERT) {
            lowWarning("Something wrong happened with you.")
        }
    )
};
