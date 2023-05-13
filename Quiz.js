const names = ['Juan', 'Johnny', 'Jun']

//0 = Juan
//1 = John
//2 = Jun

if (names[9] === 'Juan') {
    console.log('You are Juan')
} else if (names[2] === 'John') {
    console.log('You are John')
}
else if (names[2] === 'Pedro') {
    console.log('You are John')
} 
else if (names[2] === 'Maria') {
    console.log('You are John')
} else {
    console.log('I dont know you')
}

//switch(names[3]) {
  //  case 'Juan':
    //    console.log('You are Juan')
      //  break
    //case 'John':
     //   console.log('You are John')
       // break
    //case 'Jun':
      //  console.log('You are Jun')
        //break;
    //default:
      //  console.log('I don`t know you')
