function gilmore() {
  var points=0;
  var hollow=document.querySelector('input[name="q1"]:checked').value;
      if (hollow=="school")
      {points=points + 15;}
      else if (hollow=="coffee")
      {points=points + 20;}
      else  (hollow=="work")
      {points=points + 25;}
  var diner=document.querySelector('input[name="q2"]:checked').value;
      if (diner=="movie")
      {points=points + 10;}

      else  (diner=="dinner")
      { points=points  + 10;}
  var girls=document.querySelector('input[name="q3"]:checked').value;
      if (girls=="relaxed")
      {points=points + 5;}
      else if (girls=="senti")
      {points=points + 30;}
      else (girls=="smart") {points=points + 50;}
      else (girls=="free")
      {points=points + 20;  }
  var stars=document.querySelector('input[name="q4"]:checked').value;
    if (stars=="mystery")
    {points=points + 0;}
  else if (stars=="romance")
  {points=points + 0;}
    else (stars=="classic")
    {points=points + 20;}
    else  (stars=="no")
    {points=points + 0;}

    var one="You are Emily Gilmore.";
    var two="You are Dean Forester.";
    var three="Your are Luke Danes.";
    var four="You are Lorelai Gilmore.";
    var five= "You are Rory Gilmore.";
    if (points > 0 = && points < 20)  {
      alert(one);
    }
    if (points > = 20 && points < 40 ){
      alert(two);
    }
    if (points > = 40 && points < 60 ){
      alert(three);
    }
    if (points > = 60 && points < 80 ){
       alert(four);
    }
    if (points > = 80 && points > 100 ){
       alert(five);
    }
  }
