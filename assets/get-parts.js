//モダンなシステムにしたいからパーツをゲットする関数だよー‼️
export function getParts(data){
  var xhr = new XMLHttpRequest(),
		method = "GET",
		url = `./seen/${data.scope}/index.html`;
	var box = document.querySelector(data.selector);
 
	xhr.open(method, url, true);
	xhr.onreadystatechange = function () {
		if(xhr.readyState === 4 && xhr.status === 200) {
			var restxt=xhr.responseText;//String型で取得
			box.innerHTML=restxt;//完了
		}
	};
	xhr.send();
}