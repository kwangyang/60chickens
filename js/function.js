

$(document).ready(function(){
//약식 준비핸들러
$(function(){
   
   const $indicator = $('.slides > .slides-pagination > li > a');
   const $container = $('.slides > .slides-container');
	const $btnPrev = $('.prev');
	const $btnNext = $('.next');
   
   let nowIdx = 0;
   
   //마우스 오버했을때
   $indicator.on('mouseover', function(evt){
      evt.preventDefault();
   
      nowIdx = $indicator.index(this);
   
      //활성화표시
      $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
      
      //컨테이너이동
      $container.stop().animate({
         left : -1130*nowIdx
      });
   });

   //이전버튼에 대한 클릭이벤트 구문
   $btnPrev.on('click', function(evt){
      evt.preventDefault();

  
      if(nowIdx > 0){
         nowIdx--;
      }else{
         nowIdx = 9;
      }

      //인디케이터 활성화표시
      $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

      //컨테이너 이동
      $container.stop().animate({
         left:-1130*nowIdx
      });

   });

   //다음버튼에 대한 클릭이벤트 구문
   $btnNext.on('click', function(evt){
      evt.preventDefault();

  
      if(nowIdx<9){
         nowIdx++;
      }else{
         nowIdx=0;
      }

      $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

      $container.stop().animate({
         left:-1130*nowIdx
      });
   });
});

// --------------------------------------------------------------------
   

const $left = $('.detail>.index>#mnu');
const $right = $('.detail>.index>#stry>a');
const $brandLf = $('.detail>.menu');
const $brandRt = $('.detail>.brandstory');
   
   $right.on('click', function(evt){
      evt.preventDefault();

      // $brandRt.show();
  
});

});
