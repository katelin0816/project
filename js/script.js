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
    const images = document.images;
    let loaded = 0;
    const total = images.length;

    function checkDone() {
    loaded++;
    if (loaded === total) {
        document.getElementById('page-loading').style.display = 'none';
    }
    }

    Array.from(images).forEach(img => {
    if (img.complete) {
        checkDone();
    } else {
        img.addEventListener('load', checkDone);
        img.addEventListener('error', checkDone);
    }
    });

})();