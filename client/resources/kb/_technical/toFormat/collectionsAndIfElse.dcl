function myFunction2(World world, Person me)
--> local Person you,Collection friends
--> domains Void
--> action {
    if(world.contains(you)==    false) {
        friends = []
    }   else   if     (world.isEmpty() == true)    {
        assertFalse("I'm here, World shouldn't be empty")
    }else     {
        friends= [you   ,   me, [personA,personB, [personC,      personD, personE]]  ,   personF]
    }
    callFunction("arg1",   otherFunction()  ,    thirdFunction("arg2","arg3"     ,"arg4", {a   ,  b,c,d,{e    ,   f,g}}))
};
