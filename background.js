document.addEventListener("DOMContentLoaded", function () {
    const backgrounds = [
        'https://img.picui.cn/free/2024/11/10/6730b909b2c3c.jpg',
        'https://img.picui.cn/free/2024/11/10/6730b90a5d466.jpg',
        'https://img.picui.cn/free/2024/11/10/6730b90a3f2bb.jpg',
        'https://img.picui.cn/free/2024/11/10/6730b90a11119.jpg',
        'https://img.picui.cn/free/2024/11/10/6730b90d8d0f3.jpg',
        'https://img.picui.cn/free/2024/11/10/6730b90e96903.jpg',
        'https://img.picui.cn/free/2024/11/10/6730b90c5f491.png',
        'https://img.picui.cn/free/2024/11/10/6730b9117a872.jpg',
        'https://img.picui.cn/free/2024/11/10/6730b910205dc.jpg'
    ];

    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url(${backgrounds[randomIndex]})`;
});
