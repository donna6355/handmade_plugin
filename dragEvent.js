$(function(){
  $('.drag').on({
    // 마우스 클릭시 마우스의 x,y 값을 받아 이동하는 태그의 값으로 할당
    'mousedown': function () {
        let xVal = 0;
        let yVal = 0;
        // <body /> 안에서 마우스 움직임 추적
        $('body').on('mousemove', function (evt) {
            xVal = evt.clientX;
            yVal = evt.clientY;
            $('span').css({ left: xVal, top: yVal })
        })
    },
    // 마우스 뗄 경우 마우스 움직임 추적 중지
    'mouseup': function () {
        $('body').off('mousemove')
    }
  })
})