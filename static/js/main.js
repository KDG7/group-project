var clearInput = function(obj) {
    obj.parentNode.querySelector('input').value = ""
}
function showContent(content) {
    var contentA = document.getElementById("intro_res_box1");
    var contentB = document.getElementById("intro_res_box2");
    var contentC = document.getElementById("intro_res_box3");


    // 내용 숨김
    contentA.style.display = "none";
    contentB.style.display = "none";
    contentC.style.display = "none";

    // 선택한 내용 보이기
    if (content === "A") {
        contentA.style.display = "block";
    } else if (content === "B") {
        contentB.style.display = "block";
    } else if (content === "C") {
        contentC.style.display = "block";
    }
}