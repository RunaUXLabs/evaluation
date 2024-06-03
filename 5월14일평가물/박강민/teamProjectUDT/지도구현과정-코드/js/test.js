// 기본 지도 설정
var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(36.6350069986794, 127.457807092028), //지도의 중심좌표.
  level: 12, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options),
  customOverlay = new kakao.maps.CustomOverlay({}),
  infowindow = new kakao.maps.InfoWindow({ removable: true }); //지도 생성 및 객체 리턴
// 이 위까지가 기본설정 끝
