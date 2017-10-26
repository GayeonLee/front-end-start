var str = 'hello world';
 ar Str = 'hello1';

console.log(str);

var isMan = true;

if (isMan) {
   console.log('남자다')
}

else {
   console.log('여자다')
}

for(var count=0; count<5; count++){
     console.log(count);
}

function printHello(name){
   console.log('hello ' + name);
}

printHello('world');


var person = {
   name: 'aji',
   age: 11,
   cry: function(){
    console.log('으앙!!')
    }
}

console.log(person);

//변화하는 과정 천천히 살펴보기 = setInterval(함수이름, 시간(단위ms))
setInterval(function() {
  console.log(1)
}, 1000);
