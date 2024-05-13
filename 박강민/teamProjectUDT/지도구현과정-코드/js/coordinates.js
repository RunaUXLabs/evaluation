var mapOptions = {
  // 맵 옵션 설정
  center: new naver.maps.LatLng(36.6350069986794, 127.457807092028), // 중심 좌표 설정
  zoom: 16, // 줌 레벨 설정
};

// var map = new naver.maps.Map("map", mapOptions); // 맵 객체 생성

$(function () {
  initMap();
});

function initMap() {
  var areaArr = new Array(); // 지역을 담는 배열 ( 지역명/위도경도 )
  areaArr.push(
    /*지역구 이름*/ /*위도*/ /*경도*/
    { location: "강남", lat: "37.4959854", lng: "127.0664091" }, // 강남구 중심좌표
    { location: "강동", lat: "37.5492077", lng: "127.1464824" }, // 강동구 중심좌표
    { location: "강북", lat: "37.6469954", lng: "127.0147158" }, // 강북구 중심좌표
    { location: "강서", lat: "37.5657617", lng: "126.8226561" }, // 강서구 중심좌표
    { location: "관악", lat: "37.4603732", lng: "126.9536086" }, // 관악구 중심좌표
    { location: "광진", lat: "37.5574120", lng: "127.0796211" }, // 광진구 중심좌표
    { location: "구로", lat: "37.4954856", lng: "126.858121" } // 구로구 중심좌표
  );

  let markers = new Array(); // 마커 정보를 담는 배열
  let infoWindows = new Array(); // 정보창을 담는 배열

  // var map = new naver.maps.Map("map", {
  //   center: new naver.maps.LatLng(37.552758094502494, 126.98732600494576), //지도 시작 지점
  //   zoom: 15,
  // });

  var map = new naver.maps.Map("map", mapOptions);

  for (var i = 0; i < areaArr.length; i++) {
    // 지역을 담은 배열의 길이만큼 for문으로 마커와 정보창을 채워주자 !

    var marker = new naver.maps.Marker({
      map: map,
      title: areaArr[i].location, // 지역구 이름
      position: new naver.maps.LatLng(areaArr[i].lat, areaArr[i].lng), // 지역구의 위도 경도 넣기
    });

    /* 정보창 */
    var infoWindow = new naver.maps.InfoWindow({
      content:
        '<div style="width:200px;text-align:center;padding:10px;"><b>' +
        areaArr[i].location +
        "</b><br> - 네이버 지도 - </div>",
    }); // 클릭했을 때 띄워줄 정보 HTML 작성

    markers.push(marker); // 생성한 마커를 배열에 담는다.
    infoWindows.push(infoWindow); // 생성한 정보창을 배열에 담는다.
  }

  function getClickHandler(seq) {
    return function (e) {
      // 마커를 클릭하는 부분
      var marker = markers[seq], // 클릭한 마커의 시퀀스로 찾는다.
        infoWindow = infoWindows[seq]; // 클릭한 마커의 시퀀스로 찾는다

      if (infoWindow.getMap()) {
        infoWindow.close();
      } else {
        infoWindow.open(map, marker); // 표출
      }
    };
  }

  for (var i = 0, ii = markers.length; i < ii; i++) {
    console.log(markers[i], getClickHandler(i));
    naver.maps.Event.addListener(markers[i], "click", getClickHandler(i)); // 클릭한 마커 핸들러
  }
}
