$(function() {
	// <p /> 텍스트 타이핑 효과 만들기
	const txtPrgFn = function(DOM, idx) {
		let txt = DOM.eq(idx).text().trim();
		let txtArr = [];
		let txtShow = '';
		let num = 0;
    let timeOut = 0;
    
    // <p />내용 Array로 저장
		for (let i = 0; i < txt.length; i++) {
			txtArr[i] = txt.slice(i, 1 + i);
    }
    // 전체 타이핑에 걸리는 시간 계산  *interval 시간보다 1밀리세컨정도 여유 있는게 좋음
    timeOut = txtArr.length * 101;
    // <p /> 내용물 비우기
    DOM.eq(idx).text(txtShow);
    // Array 안의 텍스트 한글자씩 보여주기 
		let intervalId = setInterval(function() {
			if (num < txtArr.length) {
				txtShow += txtArr[num];
				DOM.eq(idx).text(txtShow).show();
				num++;
			} else {
				return;
			}
		}, 100);
		setTimeout(function() {
			clearInterval(intervalId);
		}, timeOut);
  };
  // <p />가 여러개 있는 div로 타이핑 효과 시 
	const txtFn = function(DOM, delay1, delay2, delay3) {
		setTimeout(function() {
			txtPrgFn(DOM, 0);
		}, delay1);
		setTimeout(function() {
			txtPrgFn(DOM, 1);
		}, delay2);
		setTimeout(function() {
			txtPrgFn(DOM, 2);
		}, delay3);
  };
  
	$('.txtBox').stop().fadeIn(2000);
	txtFn($('.txtBox>p'), 2000, 4000, 6000);
	setTimeout(function() {
		$('.scroll').stop().fadeIn();
	}, 8000);
});