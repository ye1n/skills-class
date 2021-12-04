window.onload = function() {

    let canvas = document.querySelector("#myCanvas");
    let ctx = canvas.getContext("2d");
    let obstacle1 = { x: 70, y: 150, w: 15, h: 150 };
    let obstacle2 = { x: 85, y: 220, w: 140, h: 15 };
    let obstacle3 = { x: 0, y: 70, w: 120, h: 15 };
    let obstacle4 = { x: 210, y: 70, w: 130, h: 15 };
    let obstacle5 = { x: 200, y: 0, w: 15, h: 150 };
    let obstacle6 = { x: 300, y: 160, w: 15, h: 140 };

    let msg1 = document.querySelector("#msg1")
    let end = document.querySelector("#end");

    let squirrel = new Image();
    squirrel.src = "./image/Da.PNG";

    let doto1 = new Image();
    doto1.src = "./image/doto.PNG";

    // 도토리 좌표와 크기
    let d1x = 10;
    let d1y = 240;
    let d1w = 45;
    let d1h = 50;

    let d2x = 95;
    let d2y = 250;
    let d2w = 50;
    let d2h = 40;

    let d3x = 225;
    let d3y = 15;
    let d3w = 50;
    let d3h = 40;

    let d4x = 330;
    let d4y = 250;
    let d4w = 50;
    let d4h = 40;

    let d5x = 10;
    let d5y = 15;
    let d5w = 50;
    let d5h = 40;

    // 이미지 불러오기

    let doto2 = new Image();
    doto2.src = "./image/doto2.PNG";

    let doto3 = new Image();
    doto3.src = "./image/doto2.PNG";

    let doto4 = new Image();
    doto4.src = "./image/doto2.PNG";

    let doto5 = new Image();
    doto5.src = "./image/doto2.PNG";

    let endimg = new Image();
    endimg.src = "./image/dowda2.jpg";

    let rottenAcorns = new Image();
    rottenAcorns.src = "./image/rottenAcorns.png";

    // 처음 시작 다람쥐 좌표
    let px = 100;
    let py = 150;
    let pw = 45;
    let ph = 55;

    // 이동 속도
    let speed = 5;

    let keyList = [];

    document.addEventListener("keydown", function(e) {
        keyList[e.keyCode] = true;
    });
    document.addEventListener("keyup", function(e) {
        keyList[e.keyCode] = false;
    });

    setInterval(function() {

        ctx.clearRect(0, 0, 400, 300);

        ctx.fillStyle = 'rgb(226,155,122)';
        ctx.fillRect(obstacle1.x, obstacle1.y, obstacle1.w, obstacle1.h);
        ctx.fillStyle = 'rgb(228,206,168)';
        ctx.fillRect(obstacle2.x, obstacle2.y, obstacle2.w, obstacle2.h);
        ctx.fillStyle = 'rgb(238,184,132)';
        ctx.fillRect(obstacle3.x, obstacle3.y, obstacle3.w, obstacle3.h);
        ctx.fillStyle = 'rgb(241,240,209)';
        ctx.fillRect(obstacle4.x, obstacle4.y, obstacle4.w, obstacle4.h);
        ctx.fillStyle = 'rgb(203,129,111)';
        ctx.fillRect(obstacle5.x, obstacle5.y, obstacle5.w, obstacle5.h);
        ctx.fillStyle = 'rgb(238,184,132)';
        ctx.fillRect(obstacle6.x, obstacle6.y, obstacle6.w, obstacle6.h);

        ctx.drawImage(squirrel, px, py, pw, ph);

        ctx.drawImage(doto1, d1x, d1y, d1w, d1h);
        ctx.drawImage(doto2, d2x, d2y, d2w, d2h);
        ctx.drawImage(doto3, d3x, d3y, d3w, d3h);
        ctx.drawImage(doto4, d4x, d4y, d4w, d4h);
        ctx.drawImage(doto5, d5x, d5y, d5w, d5h);

        // 썩은 도토리를 발견했을때
        if ((px < d1x + d1w &&
                py < d1y + d1h &&
                px + pw > d1x &&
                py + ph > d1y) || (px < d2x + d2w &&
                py < d2y + d2h &&
                px + pw > d2x &&
                py + ph > d2y) || (px < d4x + d4w &&
                py < d4y + d4h &&
                px + pw > d4x &&
                py + ph > d4y) || (px < d5x + d5w &&
                py < d5y + d5h &&
                px + pw > d5x &&
                py + ph > d5y)) {

            msg1.innerHTML = "도토리 발견 !!";
            end.innerHTML = "썩은 도토리다";

            setTimeout(function() {
                msg1.innerHTML = "";
                end.innerHTML = "";
            }, 1000);

        } else if (px < d3x + d3w &&
            py < d3y + d3h &&
            px + pw > d3x &&
            py + ph > d3y) {

            keyList = false;

            msg1.innerHTML = "무사히 도토리를 찾았다  !!";
            end.innerHTML = "GAME CLEAR";

            ctx.drawImage(endimg, 0, 0, 400, 300);

            setTimeout(function() {
                location.reload();
            }, 2000);

        };

        // 키를 눌렀을때
        if (keyList[37]) px -= speed;
        if (keyList[39]) px += speed;
        if (keyList[38]) py -= speed;
        if (keyList[40]) py += speed;

        // 다람쥐가 화면 밖으로 나가지 않게
        if (px <= 0) px = 0;
        if (py <= 0) py = 0;
        if (px >= 400 - pw) px = 400 - pw;
        if (py >= 300 - ph) py = 300 - ph;

        // 기둥에 닿았을때
        if ((px < obstacle1.x + obstacle1.w &&
                py < obstacle1.y + obstacle1.h &&
                px + pw > obstacle1.x &&
                py + ph > obstacle1.y) || (px < obstacle2.x + obstacle2.w &&
                py < obstacle2.y + obstacle2.h &&
                px + pw > obstacle2.x &&
                py + ph > obstacle2.y) || (px < obstacle3.x + obstacle3.w &&
                py < obstacle3.y + obstacle3.h &&
                px + pw > obstacle3.x &&
                py + ph > obstacle3.y) || (px < obstacle4.x + obstacle4.w &&
                py < obstacle4.y + obstacle4.h &&
                px + pw > obstacle4.x &&
                py + ph > obstacle4.y) || (px < obstacle5.x + obstacle5.w &&
                py < obstacle5.y + obstacle5.h &&
                px + pw > obstacle5.x &&
                py + ph > obstacle5.y) || (px < obstacle6.x + obstacle6.w &&
                py < obstacle6.y + obstacle6.h &&
                px + pw > obstacle6.x &&
                py + ph > obstacle6.y)) {

            keyList = false;

            msg1.innerHTML = "게임오버";

            ctx.drawImage(rottenAcorns, 0, 0, 400, 300);

            setTimeout(function() {
                location.reload();
            }, 2000);

        }
    }, 1000 / 30);
};