var x = document.getElementsByTagName("x");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("该浏览器不支持定位功能!") ;
  }
}

function showPosition(position) {
  var str="纬度：" + position.coords.latitude + "\n经度：" + position.coords.longitude
  var obj={longitude:position.coords.latitude,latitude:position.coords.longitude}
  window.localStorage.setItem("showPosition",JSON.stringify(obj))
  return str
 }

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "用户拒绝对获取地理位置的请求。";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "位置信息是不可用的。";
      break;
    case error.TIMEOUT:
      x.innerHTML = "请求用户地理位置超时。";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "未知错误。";
      break;

  }
}
// getLocation()
export  default getLocation
