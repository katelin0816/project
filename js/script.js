$(document).ready(function () {

    //BURGER MENU//
    var body = document.body;
    var burgerMenu = document.getElementsByClassName('b-menu')[0];
    var burgerContain = document.getElementsByClassName('b-container')[0];
    var burgerNav = document.getElementsByClassName('b-nav')[0];

    burgerMenu.addEventListener('click', function toggleClasses() {
        [body, burgerContain, burgerNav].forEach(function (el) {
            el.classList.toggle('open');
        });
    }, false);


    //上一頁下一頁//
    var match = location.pathname.match(/p_(\d+)\.html$/);
    var pageNumber = match ? parseInt(match[1]) : 1;

    var maxPage = 21; // ← 在這裡直接設定總頁數

    $('a.next').click(function() {
        pageNumber = (pageNumber < maxPage) ? pageNumber + 1 : 1; // 環狀跳轉
        window.location.href = "p_" + pageNumber + ".html";
        return false;
    });

    $('a.prev').click(function() {
        pageNumber = (pageNumber > 1) ? pageNumber - 1 : maxPage; // 環狀跳轉
        window.location.href = "p_" + pageNumber + ".html";
        return false;
    });

    //loading//
    const loadingEl = document.getElementById('img-loading');
    const imgs = Array.from(document.images);

    // 只計算「實際會載的圖片」（排除 lazy 還沒進 viewport 的）
    const loadingImgs = imgs.filter(img =>
    img.loading !== 'lazy' || img.getBoundingClientRect().top < window.innerHeight
    );

    let remaining = loadingImgs.length;

    if (remaining === 0) {
    loadingEl.style.display = 'none';
    }

    loadingImgs.forEach(img => {
    if (img.complete) {
        done();
    } else {
        img.addEventListener('load', done, { once: true });
        img.addEventListener('error', done, { once: true });
    }
    });

    function done() {
    remaining--;
    if (remaining === 0) {
        loadingEl.style.display = 'none';
    }
    }



})();