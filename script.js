var nam=new Array();
nam[0]="Yaakov";
nam[1]="John";
nam[2]="Jen";
nam[3 ]="Jason";
nam[4]="paul";
nam[5]="Frank";
nam[6]="Larry";
nam[7]="paula";
nam[8]="laura";
nam[9]="Jim";
for(i=0;i<nam.length;i++)
{
  if(nam[i].charAt(0)==='j' || nam[i].charAt(0)==='J')
  console.log("GoodBye "+nam[i]);
  else
  console.log("Hello "+nam[i]);
}
