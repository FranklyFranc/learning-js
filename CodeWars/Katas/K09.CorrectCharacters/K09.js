function correct(string)
{ 
 const chars = {
   '0' : 'O',
   '5' : 'S',
   '1' : 'I',
 }
 string = string.replace(/[051]/g, m => chars[m]);
  
return string;
  
}