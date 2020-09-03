function myFunction2(World world, Person me, Person her)
--> local Person you
--> domains Person
--> action {
    you     =new(Person, firstName, "Peter", lastName, "Pan")
    me.friend:=     you;
    world.execute(me)
    if(world.find(you)==true    ||world.find(her) !=false){
        logInfo("Found somebody.")
    }else{
        logWarning("Find nobody")
    }
    return you
};
