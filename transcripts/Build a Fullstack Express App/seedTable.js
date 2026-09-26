Transcript
0:00
Okay.
0:00
Here's an array with our products.
0:02
Each one is a vinyl record with all of the details we need like title, price, genre, etcetera.
0:08
I want you to use this data to seed our database.
0:11
If we flip over to seed table dot j s, you can see I've done all of the imports you need including bringing in Vinyl from that data dot j s file.
0:21
And so let's check out your challenge.
0:23
I want you to take the data Vinyl imported from data dot j s and add it to our database.
0:28
The keys in the objects align with the columns we've already got in our database.
0:33
The ID column in the database will self populate.
0:35
You do not need to do anything about that.
0:38
For part two, if something goes wrong, you should roll back the process so no data is added.
0:43
When you're done, you can run ctable dot j s and then log table dot j s to check it has worked.
0:49
I have given you plenty of help in hint dot m d if you need it and also I've created this entire try catch.
0:55
There are some things you don't need to do again.
0:58
So we're connecting to the database here.
1:00
I've closed the database down here.
1:02
So you've just got code to write in a couple of places, namely here and here.
1:07
Okay.
1:07
Good luck.
1:08
Go ahead and seed this table.
1:12
Okay.
1:13
Hopefully, you managed to do that just fine.
1:15
Pretty much the same as we saw in the previous scrim, of course, with different SQL commands.
1:20
Let's make a start inside this try block.
1:22
So we want to begin a transaction.
1:25
So let's say await db dot exec and we'll pass in begin transaction.
1:31
And while we're at it, let's end the transaction as well at the bottom and then we can write code in between.
1:37
So we do that with commit.
1:39
Okay.
1:40
So now we need some logic in here.
1:42
We need to do some iteration and we are gonna destructure again.
1:46
So I'll take everything from our data that's title, artist, price, image, year, genre and stock.
1:53
And then here we will await DB dot run because we're gonna do some inserting.
1:59
And let's add some SQL.
2:01
So we will say insert into and then the table is called products.
2:06
In brackets, we want every column.
2:09
Then let's have some values.
2:11
And for these we're using placeholders.
2:13
So we need the same number of question marks.
2:15
We've got one, two, three, four, five, six, seven.
2:18
And now we need the array of values to bind to the placeholders.
2:22
And that is looking pretty good.
2:23
We might just space it out a little bit more.
2:26
So that is part one dealt with.
2:28
Part two, if something goes wrong, roll back the process so no data is added.
2:32
That is pretty straightforward.
2:34
So down here, this is where we will be catching the error.
2:37
Let's say await DB dot exec and we pass in rollback.
2:42
And let's tidy things up a little bit and it's time to save and run our code.
2:47
So we can say node seed table dot j s and it's the moment of truth and it says all records inserted successfully database connection closed.
2:57
That is looking good.
2:58
Let's see if we can run log table dot j s.
3:01
Now in log table, I did make a few changes just to make the table display properly.
3:06
I'm gonna show you why in a second.
3:08
And it looks like we are getting all of our data there.
3:11
So that is perfect.
3:12
We've successfully seeded the database.
3:14
Now I did console dot table display items where I've mapped over just a selection of the items not all of them.
3:21
I'll show you why if we change this to products and we hit save, run it again, we're just getting this formatting problem where our stock column is moved from the far end to the left hand side and it's kind of overlapping and just looking nasty.
3:36
So I just thought if we do this, we'll be able to see things clearly.
3:40
So let's keep it like that and a nice clear layout.
3:43
Okay.
3:44
Great job.
3:44
We have got some data in our database.
3:46
Let's move on.
