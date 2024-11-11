document.addEventListener("DOMContentLoaded", function () {
    // 站点运行时间
    const startDate = new Date("2024-01-01T00:00:00"); // 网站上线时间
    setInterval(function () {
        const now = new Date();
        const diff = now - startDate;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        document.getElementById("runtime").textContent = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
    }, 1000);

    // 模拟访问人数
    const visitorCount = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("visitor-count").textContent = visitorCount;

    // 获取访问 IP (这里用模拟 IP 地址示例)
    document.getElementById("user-ip").textContent = "123.45.67.89"; // 实际项目中应通过服务器获取
});
