var tipuesearch = {"pages": [{'title': 'Data', 'text': 'http://mde.tw/cp2019 \n https://dartpad.dev/embed-inline.html?id=93c15af9fa0a3952ac90149c012713b7 \n \n for迴圈程式碼 \n \n 利用 iframe 標註引入 For loop 程式: \n \n Dart 解 Mass-Spring-Damping 模擬中的二階常微分方程式: \n \n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping   Function   Function Parameter   Fat Arrow \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery \n Flutter 程式 \n Flutter0   Flutter1   Flutter2   Flutter3   Flutter4   Flutter Counter   ROC Flag   踩地雷 1   踩地雷 2   踩地雷 3   踩地雷 4 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n', 'tags': '', 'url': 'Data.html'}, {'title': 'Chart', 'text': '\n', 'tags': '', 'url': 'Chart.html'}, {'title': 'Note', 'text': '8444 \n', 'tags': '', 'url': 'Note.html'}, {'title': '工作', 'text': '', 'tags': '', 'url': '工作.html'}, {'title': 'W12', 'text': '\n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping   Function   Function Parameter   Fat Arrow   Temp 1 \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery   temp2 \n Flutter 程式 \n Flutter0   Flutter1   Flutter2   Flutter3   Flutter4   Flutter Counter   ROC Flag   踩地雷 1   踩地雷 2   踩地雷 3   踩地雷 4 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W14', 'text': '\n \n import \'dart:html\';\nimport \'dart:math\' as Math;\n \nCanvasElement canvas;\nCanvasRenderingContext2D ctx;\nint flag_w = 300;\nint flag_h = 200;\nnum circle_x = flag_w / 4;\nnum circle_y = flag_h / 4;\n \nvoid main() {\n  canvas = querySelector(\'#canvas\');\n  ctx = canvas.getContext(\'2d\');\n \n  drawROC(ctx);\n  querySelector("#roc").onClick.listen((e) => drawROC(ctx));\n  querySelector("#usa").onClick.listen((e) => drawUSA(ctx));\n  querySelector("#button").onClick.listen((e) => clearCanvas());\n}\n \nvoid drawUSA(ctx){\n  // 請畫出美國國旗\n  ctx.clearRect(0, 0, flag_w, flag_h);\n  ctx.font = "30px Arial";\n  ctx.strokeStyle = \'rgb(255, 0, 0)\';\n  ctx.strokeText("請畫出美國國旗", flag_w/6, flag_w/4);\n}\n \nvoid drawROC(ctx){\n  // 先畫滿地紅\n  ctx.clearRect(0, 0, flag_w, flag_h);\n  ctx.fillStyle = \'rgb(255, 0, 0)\';\n  ctx.fillRect(0, 0, flag_w, flag_h);\n  // 再畫青天\n  ctx.fillStyle = \'rgb(0, 0, 150)\';\n  ctx.fillRect(0, 0, flag_w / 2, flag_h / 2);\n  // 畫十二道光芒白日\n  ctx.beginPath();\n  num star_radius = flag_w / 8;\n  num angle = 0;\n  for (int i = 0; i < 25; i++) {\n    angle += 5 * Math.pi * 2 / 12;\n    num toX = circle_x + Math.cos(angle) * star_radius;\n    num toY = circle_y + Math.sin(angle) * star_radius;\n    // 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo\n    if (i != 0)\n      ctx.lineTo(toX, toY);\n    else\n      ctx.moveTo(toX, toY);\n  }\n  ctx.closePath();\n  // 將填色設為白色\n  ctx.fillStyle = \'#fff\';\n  ctx.fill();\n  // 白日:藍圈\n  ctx.beginPath();\n  ctx.arc(circle_x, circle_y, flag_w * 17 / 240, 0, Math.pi * 2, true);\n  ctx.closePath();\n  // 填色設為藍色\n  ctx.fillStyle = \'rgb(0, 0, 149)\';\n  ctx.fill();\n  // 白日:白心\n  ctx.beginPath();\n  ctx.arc(circle_x, circle_y, flag_w / 16, 0, Math.pi * 2, true);\n  ctx.closePath();\n  // 填色設為白色\n  ctx.fillStyle = \'#fff\';\n  ctx.fill();\n}\n \nvoid clearCanvas(){\n  ctx.clearRect(0, 0, flag_w, flag_h);\n} \n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping   Function   Function Parameter   Fat Arrow   Temp 1 \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery   temp2 \n Flutter 程式 \n Flutter0   Flutter1   Flutter2   Flutter3   Flutter4   Flutter Counter   ROC Flag   踩地雷 1   踩地雷 2   踩地雷 3   踩地雷 4 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n w13 CF影片 <<  Previous \n  footer  \n \n \n  Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.   Copyright ©\n \nAll rights reserved | This template is made with   by  Colorlib    Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.  \n \n \n  for footer  \n \n  for site wrap  \n \n  <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n', 'tags': '', 'url': 'W14.html'}]};