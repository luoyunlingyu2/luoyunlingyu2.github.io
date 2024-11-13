document.addEventListener("DOMContentLoaded", function () {
    // 显示弹窗
    const popup = document.getElementById("popup");
    popup.style.display = "flex";
});

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
