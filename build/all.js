"use strict";if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var init=function(){function e(e,o,n,t,r,i,u,a,s,c){var d=new THREE.ExtrudeGeometry(e,o),E=new THREE.Mesh(d,new THREE.MeshPhongMaterial({color:n}));E.position.set(t,r,i-75),E.rotation.set(u,a,s),E.scale.set(c,c,c),group.add(E)}container=document.createElement("div"),document.body.appendChild(container),$(container).attr("id","intro-animation");var o=document.createElement("div");container.appendChild(o),scene=new THREE.Scene,(camera=new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,1,7e3)).position.set(-80,0,1100),scene.add(camera);var n=new THREE.PointLight(16777215,1.4);camera.add(n),(group=new THREE.Group).position.y=0,scene.add(group),group.rotation.x=anglito,group.rotation.y=anglito,group.rotation.z=4.2,group.position.x=-200,group.position.y=100;var t=[];t.push(new THREE.Vector2(150,0)),t.push(new THREE.Vector2(0,150)),t.push(new THREE.Vector2(0,450)),t.push(new THREE.Vector2(300,600)),t.push(new THREE.Vector2(600,450)),t.push(new THREE.Vector2(600,150)),t.push(new THREE.Vector2(450,0)),t.push(new THREE.Vector2(450,45)),t.push(new THREE.Vector2(570,165)),t.push(new THREE.Vector2(570,435)),t.push(new THREE.Vector2(300,570)),t.push(new THREE.Vector2(30,435)),t.push(new THREE.Vector2(30,164)),t.push(new THREE.Vector2(150,45));for(u=0;u<t.length;u++)t[u].multiplyScalar(.35);var r=new THREE.Shape(t),i=[];i.push(new THREE.Vector2(900,150)),i.push(new THREE.Vector2(900,-150)),i.push(new THREE.Vector2(600,-300)),i.push(new THREE.Vector2(300,-150)),i.push(new THREE.Vector2(300,150)),i.push(new THREE.Vector2(450,300)),i.push(new THREE.Vector2(450,255)),i.push(new THREE.Vector2(330,135)),i.push(new THREE.Vector2(330,-135)),i.push(new THREE.Vector2(600,-270)),i.push(new THREE.Vector2(870,-135)),i.push(new THREE.Vector2(870,135)),i.push(new THREE.Vector2(750,255)),i.push(new THREE.Vector2(750,300));for(var u=0;u<i.length;u++)i[u].multiplyScalar(.35);var a={amount:8,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:1,bevelThickness:1};e(new THREE.Shape(i),a,16777215,-300,-100,0,0,0,0,1),e(r,a={amount:8,bevelEnabled:!0,bevelSegments:2,steps:2,bevelSize:1,bevelThickness:1},16777215,-300,-100,0,0,0,0,1),(renderer=new THREE.WebGLRenderer({antialias:!0})).setClearColor(16208205),renderer.setPixelRatio(window.devicePixelRatio),renderer.setSize(window.innerWidth,window.innerHeight),container.appendChild(renderer.domElement),document.addEventListener("mousedown",onDocumentMouseDown,!1),document.addEventListener("touchstart",onDocumentTouchStart,!1),document.addEventListener("touchmove",onDocumentTouchMove,!1),window.addEventListener("resize",onWindowResize,!1)},onWindowResize=function(){camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,window.innerHeight)},onDocumentMouseDown=function(e){e.preventDefault(),document.addEventListener("mousemove",onDocumentMouseMove,!1),document.addEventListener("mouseup",onDocumentMouseUp,!1),document.addEventListener("mouseout",onDocumentMouseOut,!1),mouseXOnMouseDown=e.clientX-windowHalfX,targetRotationOnMouseDown=targetRotation},onDocumentMouseMove=function(e){mouseX=e.clientX-windowHalfX,targetRotation=targetRotationOnMouseDown+.02*(mouseX-mouseXOnMouseDown)},onDocumentMouseUp=function e(o){document.removeEventListener("mousemove",onDocumentMouseMove,!1),document.removeEventListener("mouseup",e,!1),document.removeEventListener("mouseout",onDocumentMouseOut,!1)},onDocumentMouseOut=function e(o){document.removeEventListener("mousemove",onDocumentMouseMove,!1),document.removeEventListener("mouseup",onDocumentMouseUp,!1),document.removeEventListener("mouseout",e,!1)},onDocumentTouchStart=function(e){1==e.touches.length&&(e.preventDefault(),mouseXOnMouseDown=e.touches[0].pageX-windowHalfX,targetRotationOnMouseDown=targetRotation)},onDocumentTouchMove=function(e){1==e.touches.length&&(e.preventDefault(),mouseX=e.touches[0].pageX-windowHalfX,targetRotation=targetRotationOnMouseDown+.05*(mouseX-mouseXOnMouseDown))},animate=function e(){requestAnimationFrame(e),render()},render=function(){group.rotation.y>0&&(group.rotation.y-=.05),group.rotation.z>0&&(group.rotation.z-=.05,group.position.x+=2.380952,group.position.y-=1.190475),group.rotation.y<=0&&setTimeout(function(){camera.position.z-=40},500),camera.position.z<=0&&($("#intro-animation").css("opacity","0"),setTimeout(function(){$("#intro-animation").remove()},1200)),renderer.render(scene,camera)},container,anglito=6.28319,camera,scene,renderer,group,targetRotation=0,targetRotationOnMouseDown=0,mouseX=0,mouseXOnMouseDown=0,windowHalfX=window.innerWidth/2;$(document).ready(function(){init(),animate()})}
"use strict";function changePage(e){Math.random();$($(".guidance")[0]).removeClass("visible"),$($(".guidance")[1]).removeClass("visible"),$(".main-content-box").removeClass("visible"),$($(".main-content-box")[e]).addClass("visible"),$($(".main-content-box")[e]).css("animation","clipit 1.3s"),stage=e+1}
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){var e=function(){},o=function(t,e){for(var o in e)null==t[o]&&(t[o]=e[o]);return t},n=function(t,e){return Math.floor(Math.random()*(e-t)+t)},r=function(t,e){var o,r,i,a,c,d,f,l,h=t.width,u=t.height,p=e||6,s=n(2*-p,2*p)*h*+n(-p,p)*4,m=p*p/100*h,y=document.createElement("canvas"),g=y.getContext("2d");for(y.width=h,y.height=u,g.drawImage(t,0,0,h,u),d=g.getImageData(0,0,h,u).data,i=0;i<p;i++)r=n(0,u),c=Math.min(n(1,u/4),u-r),a=h-(o=n(1,m)),g.drawImage(t,0,r,a,c,o,r,a,c),g.drawImage(t,a,r,o,c,0,r,o,c);for(l=(f=g.getImageData(0,0,h,u)).data,i=n(0,3),p=d.length;i<p;i+=4)l[i+s]=d[i];for(i=0;i<p;i++)l[i++]*=2,l[i++]*=2,l[i++]*=2;for(g.putImageData(f,0,0),g.fillStyle="rgb(0,0,0)",i=0;i<u;i+=2)g.fillRect(0,i,h,1);return y},i=function(t,n){(n=o(n||{},{amount:6,complete:e})).onrendered=function(t){n.complete(r(t,n.amount))},html2canvas(t[0]?t:[t],n)};i.replace=function(e,o){var n=(o=o||{}).complete;o.complete=function(o){t&&e instanceof t?e.after(o).detach():(e.parentNode.insertBefore(o,e),e.parentNode.removeChild(e)),n&&n()},i(e,o)},i.transition=function(n,r,a){a=o(a||{},{amount:6,complete:e,delay:300,duration:500,zIndex:1e3,effect:"fade",borderSize:2,borderColor:"green"}),r.insertAfter(n);var c=a.complete,d=n.outerHeight(!0),f=n.outerWidth(!0),l=r.outerHeight(!0),h=r.outerWidth(!0);r.css("overflow");r.detach(),a.complete=function(e){var o=t(e).css("position","absolute"),i=n.offset(),u=t("<div>").css({"border-top":a.borderSize?a.borderSize+"px solid "+a.borderColor:"none",position:"absolute",left:i.left,top:i.top-a.borderSize,width:e.width,height:e.height,overflow:"hidden","z-index":a.zIndex}).html(e).appendTo("body").delay(a.delay),p=t("<div>").css({width:f,height:d,overflow:"hidden",border:"none","box-sizing":"border-box"}).html(r),s={opacity:0},m={duration:a.duration,complete:function(){u.remove(),p.animate({height:l,width:h},{duration:100,complete:function(){r.detach().insertAfter(p),p.remove(),c(),a=o=u=null}})}};"slide"===a.effect&&(s={top:i.top+e.height,height:0},m.step=function(t,e){"top"===e.prop&&o.css("top",e.start-t)}),u.animate(s,m),p.insertAfter(n),n.detach()},i(n,a)},window.glitch=i,t&&(t.fn.glitch=function(e){var o=Array.prototype.splice.call(arguments,1);return e=e||"replace",this.each(function(){e instanceof t?i.transition(t(this),e,o[0]):"function"==typeof e?i(t(this),{complete:e}):"object"==(void 0===e?"undefined":_typeof(e))?i(t(this),e):i.hasOwnProperty(e)?i[e].apply(null,[t(this)].concat(o)):t.error("Method "+e+" does not exist on jQuery.glitch")})})}(window.jQuery);
"use strict";var gulp=require("gulp"),gutil=require("gulp-util"),uglify=require("gulp-uglify"),concat=require("gulp-concat"),babel=require("gulp-babel"),browserify=require("gulp-browserify");gulp.task("js",function(){gulp.src("./*.js").pipe(babel({presets:["es2015"]})).pipe(uglify()).pipe(concat("all.js")).pipe(gulp.dest("./build")).pipe(browserify({insertGlobals:!0,require:["./build/all.js"],debug:!gulp.env.production}))}),gulp.task("default",function(){gulp.run("js")});
"use strict";function randomInt(i,t){return Math.floor(Math.random()*(t-i+1)+i)}function Glitch(){this.on=!0,this.init=function(){if(!1!==this.on){for(page_content=$("glitch").html(),$("body").css("overflow-x","hidden"),linecount=0,this.glitchlines=[];linecount<glitch_lines;)$("body").append('<div class="glitch-line-'+linecount+'">'+page_content+"</div>"),$(".glitch-line-"+linecount).css({height:"100%",width:"100%",position:"absolute",top:"0",left:"0"}).hide(),this.glitchline(".glitch-line-"+linecount,linecount),linecount++;$("body").append('<div class="glitch-div-1">'+page_content+"</div>"),$("body").append('<div class="glitch-div-2">'+page_content+"</div>"),$(".glitch-div-1, .glitch-div-2").css({height:"100%",width:"100%",position:"absolute",top:"0",left:"0"}),this.glitchmove()}},this.stop=function(){for(page_content=$("glitch").html(),$("body").css("overflow-x","hidden"),linecount=0,this.glitchlines=[];linecount<glitch_lines;)$(".glitch-line-"+linecount).remove(),linecount++;$(".glitch-div-1").remove(),$(".glitch-div-2").remove()},this.glitchline=function(i,t){this.glitchlines[t]=new glitchline,this.glitchlines[t].start(i)},this.glitchmove=function(){this.start=function(){selfmove=this,setInterval(function(){setTimeout(function(){selfmove.move()},randomInt(glitch_move_wait_min,glitch_move_wait_max))},randomInt(glitch_move_timer_min,glitch_move_timer_max))},this.move=function(){$(".glitch-div-1").css({left:randomInt(glitch_move_amount_min,glitch_move_amount_max)+"px",top:randomInt(glitch_move_amount_min,glitch_move_amount_max)+"px",opacity:glitch_move_opacity,color:glitch_move_color_1}),$(".glitch-div-2").css({left:randomInt(glitch_move_amount_min,glitch_move_amount_max)+"px",top:randomInt(glitch_move_amount_min,glitch_move_amount_max)+"px",opacity:glitch_move_opacity,color:glitch_move_color_2}),this.moveback()},this.moveback=function(){this.timeout=setTimeout(function(){$(".glitch-div-1, .glitch-div-2").css({left:"0px",top:"0px",color:glitch_move_original_color,opacity:"1"})},randomInt(glitch_move_duration_min,glitch_move_duration_max))}}}function glitchline(){this.start=function(i){selfline=this,this.timeouts=[],setInterval(function(){setTimeout(function(){selfline.add(i)},randomInt(glitch_line_wait_min,glitch_line_wait_max))},randomInt(glitch_line_timer_min,glitch_line_timer_max))},this.add=function(i){$(i).css({height:randomInt(glitch_line_height_min,glitch_line_height_max)+"px",width:randomInt($(window).width()/2,$(window).width())+"px",top:randomInt(0,$(window).height())+"px",left:randomInt(0,$(window).width()/2)+"px",position:"fixed",overflow:"hidden",display:"block",background:"#FFF"}),$(i).scrollTop(randomInt(0,$(window).height())),$(i).scrollLeft(randomInt(0,100)),this.remove(i)},this.remove=function(i){this.timeouts[i]=setTimeout(function(){$(i).hide()},randomInt(glitch_line_duration_min,glitch_line_duration_max))}}var clickCount=0,stage=0,guides=2,readmode=!1,glitch=[],glitch_lines=15,glitch_line_duration_min=100,glitch_line_duration_max=500,glitch_line_timer_min=100,glitch_line_timer_max=500,glitch_line_wait_min=100,glitch_line_wait_max=300,glitch_line_height_min=5,glitch_line_height_max=50,glitch_move_color_1="#08FFF2",glitch_move_color_2="#FC0DFF",glitch_move_original_color="#585E62",glitch_move_opacity=1,glitch_move_duration_min=1e3,glitch_move_duration_max=300,glitch_move_timer_min=100,glitch_move_timer_max=100,glitch_move_wait_min=100,glitch_move_wait_max=200,glitch_move_amount_min=-10,glitch_move_amount_max=10,glitch_autostart=1;$(document).ready(function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(setTimeout(function(){0===stage&&$($(".guidance")[0]).addClass("visible"),$(".fast-fo p").css("opacity","1")},4e3),setTimeout(function(){0===stage&&($($(".guidance")[0]).removeClass("visible"),$($(".guidance")[1]).addClass("visible"))},7300)),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&($($(".guidance")[0]).addClass("visible"),setTimeout(function(){0===stage&&($($(".guidance")[0]).removeClass("visible"),$($(".guidance")[1]).addClass("visible"))},3300)),$("#read-mode svg").click(function(){$("#read-mode p").css("display","none"),!1===readmode?($(".main-content-box .focus").css("background","white"),$(".main-content-box").css("background","white"),$(".main-content-box .focus h1, h2, p, hr").css("color","black"),$(".main-content-box h1").css("color","black"),$(".main-content-box hr").css("border","3px solid black"),readmode=!0):($(".main-content-box .focus").css("background","rgba(247,81,77, 0.7)"),$(".main-content-box").css("background","rgba(247,81,77, 0.5)"),$(".main-content-box .focus h1, h2, p").css("color","white"),$(".main-content-box h1").css("color","white"),$(".main-content-box hr").css("border","3px solid white"),readmode=!1)}),$(".fast-fo").click(function(){var i=0;0===stage&&($("#read-mode").css("opacity","1"),changePage(stage)),$("#intro-animation").css("opacity","0");for(var t=0;t<$(".side-menu ul li").length;t++)$($(".side-menu ul li")[t]).hasClass("visible")||($($(".side-menu ul li")[t]).css("transition-delay",.3*i+"s","-webkit-transition-delay",.3*t+"s"),$($(".side-menu ul li")[t]).addClass("visible"),i++)}),$(window).click(function(){$(".fast-fo p").css("display","none")})});
"use strict";function preload(){Myriad=loadFont("assets/MyriadPro-Semibold.otf")}function setup(){myCanvas=createCanvas(windowWidth,windowHeight),ctx=canvas.getContext("2d"),myCanvas.id("myCanvas");for(var i=1;i<dotNum+1;i++)dots[i]=new Dot(i,i/10*(windowWidth*Math.random()),i/10*(windowHeight*Math.random()))}function draw(){background(247,81,77);for(var i=1;i<dotNum;i++){for(var t=i+1;t<dotNum;t++)colorMode(RGB,255,255,255,1),distance=Math.sqrt((dots[t].x-dots[i].x)*(dots[t].x-dots[i].x)+(dots[t].y-dots[i].y)*(dots[t].y-dots[i].y)),distance<300&&(opacity=1-distance/300,strokeWeight(1),stroke(255,255,255,opacity),line(dots[i].x,dots[i].y,dots[t].x,dots[t].y));dots[i].display(),dots[i].move()}}function Dot(i,t,e){this.number=i,this.x=t,this.y=e,this.xspeed=speedCalculator(),this.yspeed=speedCalculator(),this.size=20,this.display=function(){if(!1===this.mouseIn()&&(push(),fill(255),beginShape(),vertex(this.x,this.y+15),vertex(this.x+15,this.y+7.5),vertex(this.x+15,this.y-7.5),vertex(this.x,this.y-15),vertex(this.x-15,this.y-7.5),vertex(this.x-15,this.y+7.5),vertex(this.x,this.y+15),endShape(),pop()),!0===this.mouseIn()&&!1===checkIn(this.number))switch(push(),push(),fill(255),textSize(16),stroke(244),textFont(Myriad),stage){case 0:text("About Me",this.x-25,this.y-20);break;case 1:text("Education",this.x-25,this.y-20);break;case 2:text("Professional Experience",this.x-25,this.y-20);break;case 3:text("Hobbies",this.x-25,this.y-20);break;case 4:text("Skills",this.x-25,this.y-20);break;case 5:text("Vision",this.x-25,this.y-20);break;case 6:text("Go To Menu",this.x-25,this.y-20)}pop(),noFill(),strokeWeight(3),stroke(255),beginShape(),vertex(this.x,this.y+15),vertex(this.x+15,this.y+7.5),vertex(this.x+15,this.y-7.5),vertex(this.x,this.y-15),vertex(this.x-15,this.y-7.5),vertex(this.x-15,this.y+7.5),vertex(this.x,this.y+15),endShape(),pop()},this.move=function(){if(!0===this.mouseIn()){if(!0!==checkIn(this.number))return;this.x+=this.xspeed,this.y-=this.yspeed,(this.y>=windowHeight||this.y<=0)&&(this.yspeed=-this.yspeed),(this.x>=windowWidth||this.x<=0)&&(this.xspeed=-this.xspeed)}if(!1===this.mouseIn(this.number)){if(!1===checkIn(this.number))return;this.x+=this.xspeed,this.y-=this.yspeed,(this.y>=windowHeight||this.y<=0)&&(this.yspeed=-this.yspeed),(this.x>=windowWidth||this.x<=0)&&(this.xspeed=-this.xspeed)}},this.mouseIn=function(){return mouseX>=this.x-20&&mouseX<=this.x+20&&mouseY>=this.y-20&&mouseY<=this.y+20}}function speedCalculator(){var i=1+Math.random()-.5;return Math.random()<.5?i:-i}function windowResized(){resizeCanvas(windowWidth,windowHeight)}function mousePressed(){for(var i=1;i<dotNum;i++)if(mouseX>=dots[i].x-20&&mouseX<=dots[i].x+20&&mouseY>=dots[i].y-20&&mouseY<=dots[i].y+20){stage<=$($(".main-content-box")).length&&stage++,$($(".guidance")[0]).removeClass("visible"),$($(".guidance")[1]).removeClass("visible");for(var t=1;t<$($(".main-content-box")).length+1;t++)!function(i){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(glitch[i]=new Glitch),1===stage&&1===i?($($(".guidance")[0]).removeClass("visible"),$($(".guidance")[1]).removeClass("visible"),$($(".guidance")[2]).removeClass("visible"),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||glitch[i].init(),$(".main-content-box").removeClass("visible"),$($(".main-content-box")[i-1]).addClass("visible"),$($(".main-content-box")[i-1]).css("animation","clipit 1s"),setTimeout(function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(glitch[i].on=!1,glitch[i].stop()),$("#read-mode").css("opacity","1"),$("#read-bubble").css("opacity","1")},1e3),setTimeout(function(){$("#read-bubble").css("opacity","0")},5e3),$($(".side-menu ul li")[0]).addClass("visible")):stage===i&&(Math.random()<.5?(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||glitch[i].init(),$($(".main-content-box")[i-2]).removeClass("visible"),$($(".main-content-box")[i-1]).addClass("visible"),$($(".main-content-box")[i-1]).css("animation","clipit 1s"),setTimeout(function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(glitch[i].on=!1,glitch[i].stop())},1e3)):($($(".main-content-box")[i-2]).removeClass("visible"),$($(".main-content-box")[i-1]).addClass("visible"),$($(".main-content-box")[i-1]).css("animation","clipit 1.5s")),$($(".side-menu ul li")[i-1]).addClass("visible"))}(t)}}function checkIn(i){for(var t=1;t<dotNum;t++)if(!0===dots[t].mouseIn()&&t!==i)return!0;return!1}var dotNum=20,dots=[],growing=1,progression=0,clicked=!1,entered=!1,Myriad,myCanvas=void 0;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&($("body").css("background","rgba(247,81,77, 1)"),$("glitch").css("background","rgba(247,81,77, 1)"),$("html").css("background","rgba(247,81,77, 1)"));