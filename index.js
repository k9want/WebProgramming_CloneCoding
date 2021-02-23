var blue_button = document.querySelectorAll('.interactive ul li button i');

console.log(blue_button);

function interactiveButton_0()
{
  blue_button[0].classList.toggle('active');
  console.log('Like');
}

blue_button[0].addEventListener('click', interactiveButton_0);


function interactiveButton_1()
{
  blue_button[1].classList.toggle('active');
  var click = document.querySelector('.dislike');

  // 단순하게 문자열 비교로 했던 코드 
  // console.log(click.textContent);
  // console.log(typeof(click.textContent));
  // console.log(click.innerHTML);
  // if(click.textContent === '0'){
  //   click.innerHTML = 1;
  // }else {
  //   click.innerHTML = 0;
  // }
  // console.log('DisLike');

  // 개선한 코드 어느 숫자에서 적용가능한 코드로 개선 
  click_number = Number(click.innerHTML);

  if(blue_button[1].classList.contains('active')){
    console.log('add'); 
    // console.log(click_number, typeof(click_number));
    click_number -= 1;
    click.innerHTML = click_number;
  }else {
    
    click_number += 1;
    click.innerHTML = click_number;
    console.log('minus');
  }
  console.log('DisLike');

}

blue_button[1].addEventListener('click', interactiveButton_1);

function interactiveButton_2()
{
  blue_button[2].classList.toggle('active');
  alert('Share');
}

blue_button[2].addEventListener('click', interactiveButton_2);


function interactiveButton_4()
{
  blue_button[3].classList.toggle('active');
  alert('Save');
}

blue_button[3].addEventListener('click', interactiveButton_4);


function interactiveButton_5()
{
  blue_button[4].classList.toggle('active');
  alert('Report');
}

blue_button[4].addEventListener('click', interactiveButton_5);




var subscribe = document.querySelector('.subscribe');

function subscribeclick()
{


  if(subscribe.textContent === '구독'){
    subscribe.innerHTML = '구독 중';
  }else {
    subscribe.innerHTML = '구독';
    subscribe.classList.add('active');
  }
  
  alert('구독 버튼 클릭');
}

subscribe.addEventListener('click', subscribeclick);
