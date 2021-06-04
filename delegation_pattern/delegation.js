$(function () {
  addEvent();
  delegation_addEvent();
});

function addEvent() {
  // 요소 하나하나에 addEventListener
  for (let index = 1; index <= 4; index++) {
    const id = "li" + index;
    document.getElementById(id).addEventListener("click", function (e) {
      const target = e.target;
      logTargetValue(target);
    });
  }
}
function delegation_addEvent() {
  // 부모에 addEventListener
  document.getElementById("test_ul").addEventListener("click", function (e) {
    const target = e.target;
    logTargetValue(target);
  });
}
function logTargetValue(target) {
  const value = target.getAttribute("value");
  li = {
    li_1: "1번",
    li_2: "2번",
    li_3: "3번",
    li_4: "4번",
    "": "",
  };
  console.log(li[value]);
}
