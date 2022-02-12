# MERN-Lab6
insertn.js was the initial code to insert user documents to the users collection and initial todo documents

DB(schema):
==> users
/* 1 */
{
    "_id" : ObjectId("62079bb68afa9e2c39ad8b33"),
    "username" : "Giuseppe",
    "password" : "4271",
    "firstname" : "joe",
    "age" : 24
}

/* 2 */
{
    "_id" : ObjectId("6207a04c645f6c5892a959a2"),
    "username" : "Yasser221",
    "password" : "yasssor",
    "firstname" : "Yasser"
}

==>todos:
/* 1 */
{
    "_id" : ObjectId("62079bb68afa9e2c39ad8b35"),
    "user" : ObjectId("62079bb68afa9e2c39ad8b33"),
    "title" : "Bring home list",
    "status" : "to-do"
}

/* 2 */
{
    "_id" : ObjectId("6207ba203741074893b55807"),
    "user" : ObjectId("62079bb68afa9e2c39ad8b33"),
    "title" : "Study List",
    "status" : "to-do"
}

/* 3 */
{
    "_id" : ObjectId("6207bcfc098d92243f314d4d"),
    "user" : ObjectId("6207a04c645f6c5892a959a2"),
    "title" : "Food reminders",
    "status" : "to-do"
}

/* 4 */
{
    "_id" : ObjectId("6207bd3b098d92243f314d52"),
    "user" : ObjectId("62079bb68afa9e2c39ad8b33"),
    "title" : "Studyies",
    "status" : "to-do"
}

/* 5 */
{
    "_id" : ObjectId("6207c01225667f7a3dd221fc"),
    "user" : ObjectId("6207a04c645f6c5892a959a2"),
    "title" : "Billisss",
    "status" : "Pay the bill"
}
