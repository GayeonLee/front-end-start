var sum = 0;
var n = 0;

for (isEnd = false; isEnd === false;){
  n = prompt("숫자를 입력하세요.", "여기에 입력");

  if(n===null){
    alert("합은" + sum + "입니다.");
    isEnd = true;
  }
  else {
    sum += parseInt(n, 10);
  }
}

alert(sum);
