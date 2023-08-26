

function setAnimationImage(surface){
  surface.texture=LoadAnimationImage.getTexture(
    "https://res.cloudinary.com/mvitello/image/upload/v1689369332/photo/2022.11.14_Ilford_XP2_400_000101670020_ikzwbg.jpg",
  );
}

function setShader() {
  window.ASSETS=[
    "https://raw.githubusercontent.com/mattvitello/geometry/main/assets/shaders/shader.glsl"
  ];
}

function getGeometryAnimationDivId() {
  return "geometry";
}

window.Global={};
window.Class=function(func,type){
  var _this=this;var name=func.toString().match(/function ([^\(]+)/)[1];var TempType=null;if(typeof type==="function"){TempType=type;type=null}
  if(type!=null||type!=undefined){type=type.toLowerCase();}
  if(!type){_this[name]=func;TempType&&TempType()}
  else{if(type=="static"){_this[name]=new func()}
  else if(type=="interface"){_this[name]=(function(){var interfc={};var func2;interfc.instance=function(){func2=new func();return func2;};return interfc;})()}}
};
window.Inherit=function(f,a,d){
  if(typeof d==="undefined"){d=f}
  var c=new a(d,true);var b={};for(var e in c){f[e]=c[e];b[e]=c[e]}
  if(f.__call){f.__call()}
  defer(function(){for(e in c){if((f[e]&&b[e])&&f[e]!==b[e]){f["_"+e]=b[e]}}
    c=b=null;f=a=d=null})
};
window.Namespace=function(a){
  if(typeof a==="string"){window[a]={Class:window.Class}}else{a.Class=window.Class}
};
window.THREAD=false;

Class(
  function HydraObject(a,b,d,c){this._children=new LinkedList();this.__useFragment=c;this._initSelector(a,b,d)},
  function(){
    var a=HydraObject.prototype;a._initSelector=function(b,d,f){if(b&&typeof b!=="string"){this.div=b}
    else{var e=b?b.charAt(0):null;var c=b?b.slice(1):null;if(e!="."&&e!="#"){c=b;e="."}
    if(!f){this._type=d||"div";this.div=document.createElement(this._type);if(e){if(e=="#"){this.div.id=c}
    else{this.div.className=c}}}
    else{if(e!="#"){throw"Hydra Selectors Require #ID"}
    this.div=document.getElementById(c)}}
    this.div.hydraObject=this};a.addChild=a.add=function(d){var c=this.div;var b=function(){if(this.__useFragment){if(!this._fragment){this._fragment=document.createDocumentFragment();var e=this;defer(function(){if(!e._fragment||!e.div){return e._fragment=null}
    e.div.appendChild(e._fragment);e._fragment=null})}c=this._fragment}};if(d.element&&d.element instanceof HydraObject){b();c.appendChild(d.element.div);this._children.push(d.element);d.element._parent=this;d.element.div.parentNode=this.div}
    else{if(d.div){b();c.appendChild(d.div);this._children.push(d);d._parent=this;d.div.parentNode=this.div}
    else{if(d.nodeName){b();c.appendChild(d);d.parentNode=this.div}}}
    return this};a.create=function(b,c){var d=StartRun(b,c);this.addChild(d);if(this.__root){this.__root.__append[b]=d;d.__root=this.__root}return d};
});

Class(
  function Hydra(){
    var initializedHydra=this;
    var listOfFunctions=[];
    this.READY=false;
    this.HASH=window.location.hash.slice(1);
    this.LOCAL=location.hostname.indexOf("local")>-1||location.hostname.split(".")[0]=="10"||location.hostname.split(".")[0]=="192";

    (function(){init()})();
    
    function init(){
      initializedHydra.addEvent="addEventListener";
      initializedHydra.removeEvent="removeEventListener";
      window.addEventListener("geometry-script-loaded", loadAnimation, false);
      window.addEventListener("geometry-script-re-loaded",reloadAnimation, false);
    } 

    function loadAnimation(){
      for(var i=0;i<listOfFunctions.length;i++){
        listOfFunctions[i]()
      }
      listOfFunctions=null;

      initializedHydra.READY=true;
      Hydra.Main=new window.Main();
    }

    function reloadAnimation(){
      listOfFunctions=[];
      this.READY=false;
      this.HASH=window.location.hash.slice(1);
      this.LOCAL=location.hostname.indexOf("local")>-1||location.hostname.split(".")[0]=="10"||location.hostname.split(".")[0]=="192";
      initializedHydra.ready(InitializeGeometryAnimationOnElement);
      loadAnimation();
    }
    
    this.getClassName=function(loadAnimationFunction){
      return loadAnimationFunction.constructor.name || loadAnimationFunction.constructor.toString().match(/function ([^\(]+)/)[1]
    };

    this.ready=function(loadAnimationFunction){
      if(this.READY){return loadAnimationFunction()}
      listOfFunctions.push(loadAnimationFunction)
    };

    this.StartRun=function(element,prop1,prop2){
      return new HydraObject(element,prop1,prop2)
    };
      
    this.StartRun.fn=HydraObject.prototype;
    window.StartRun=this.StartRun;
  },"Static");
  
function InitializeGeometryAnimationOnElement(){
  window.__window=StartRun(window);
  window.__document=StartRun(document);
  window.__body=StartRun(document.getElementById(getGeometryAnimationDivId()));
  window.Stage=__body.create('#geometry');
  Stage.width=document.body.clientWidth||document.documentElement.offsetWidth||window.innerWidth;
  Stage.height=document.body.clientHeight||document.documentElement.offsetHeight||window.innerHeight;

  window.onresize=function(){
    if(!Device.mobile){
      Stage.width=document.body.clientWidth||document.documentElement.offsetWidth||window.innerWidth;
      Stage.height=document.body.clientHeight||
      document.documentElement.offsetHeight||
      window.innerHeight;HydraEvents._fireEvent(HydraEvents.RESIZE)
    }
  }
};

Hydra.ready(InitializeGeometryAnimationOnElement);

Class(
  function MVC(){Inherit(this,Events);var c={};var b={};var a=[];this.classes={};function d(f,e){c[e]={};Object.defineProperty(f,e,{set:function(g){if(c[e]&&c[e].s){c[e].s.call(f,g)}g=null},get:function(){if(c[e]&&c[e].g){return c[e].g.apply(f)}}})}
  this.get=function(f,e){if(!c[f]){d(this,f)}c[f].g=e};this.initClass=function(o,r,q,p,n,m,l,k){if(window.Hydra){Hydra.arguments=arguments}var j=new o(r,q,p,n,m,l,k);if(window.Hydra){Hydra.arguments=null}j.parent=this;var s=arguments[arguments.length-1];if(Array.isArray(s)&&s.length==1&&s[0]instanceof HydraObject){s[0].addChild(j)}
  else{if(this.element&&s!==null){this.element.addChild(j)}}return j};
});

Class(function Controller(a){
  Inherit(this,MVC);a=Hydra.getClassName(a);this.element=this.container=StartRun("#"+a);
});

Class(function Utils(){
    var c=this;this.doRandom=function(e,d){var rand=(e)+((d)-(e))*Math.random();return Math.round(rand)};this.headsTails=function(d,e){return!c.doRandom(0,1)?d:e};this.toRadians=function(d){return d*(Math.PI / 180)};this.touchEvent=function(f){var d={};d.x=0;d.y=0;if(Device.mobile){d.x=f.changedTouches[0].pageX;d.y=f.changedTouches[0].pageY-Mobile.scrollTop}
    else{d.x=f.pageX;d.y=f.pageY}
    return d};this.clamp=function(e,f,d){return Math.min(Math.max(e,f),d)};this.range=function(d,m,g,f,j,l){var e=(((d-m)*(j-f))/(g-m))+f;if(l){return c.clamp(e,Math.min(f,j),Math.max(f,j))}
    return e};String.prototype.strpos=function(e){return this.indexOf(e)!=-1};
},"Static");

Class(function Device(){var g=this;var b;this.agent=navigator.userAgent.toLowerCase();this.detect=function(h){if(typeof h==="string"){h=[h]}
    for(var e=0;e<h.length;e++){if(this.agent.strpos(h[e])){return true}}
    return false};this.mobile=!window._NODE_&&(!!(("ontouchstart"in window)||("onpointerdown"in window))&&this.detect(["ios","iphone","ipad","windows","android","blackberry"]))?{}:false;if(this.mobile&&this.detect("windows")&&!this.detect("touch")){this.mobile=false}
    if(this.mobile){this.mobile.tablet=Math.max(screen.width,screen.height)>800;this.mobile.phone=!this.mobile.tablet}
},"Static");
  
Class(function LinkedList(){
    var a=LinkedList.prototype;this.length=0;this.first=null;this.last=null;this.current=null;this.prev=null;a.push=function(b){if(!this.first){this.first=b;this.last=b;b.__prev=b;b.__next=b}
    else{b.__next=this.first;b.__prev=this.last;this.last.__next=b;this.last=b}this.length++};a.empty=function(){this.first=null;this.last=null;this.current=null;this.prev=null;this.length=0};a.start=function(){this.current=this.first;this.prev=this.current;return this.current};a.next=function(){if(!this.current){return}this.current=this.current.__next;if(this.length==1||this.prev.__next==this.first){return}this.prev=this.current;return this.current};
});

Class(function Pact(){var a=this;Namespace(this);this.create=function(){return new a.Broadcaster(arguments)};},"Static");

Pact.Class(function Broadcaster(e){
  var g=this;var d,f;var b;var c=[];this._fire=this.fire=function(){b=true;var h=arguments;var j=false;Render.nextFrame(function(){var m=c.shift();m.apply(g,h);})};this.exec=function(){a(arguments);return this};this.then=function(h){c.push(h);return this};function a(l){var h=[];var k=l[0];for(var j=1;j<l.length;j++){h.push(l[j])}h.push(g._fire);k.apply(k,h)}a(e)
});

Class(function Render(){var f=this;var c,j,a;var h=[];var o=Date.now();var m=new LinkedList();var l=new LinkedList();var d=m;var e=0;this.TIME=Date.now();this.TARGET_FPS=60;(function(){if(!THREAD){requestAnimationFrame(b);}})();function b(){var q=Date.now();var v=q-o;var s=0;var r=60;if(j){s=q-j;r=1000 / s}
  j=q;f.FPS=r;f.TIME=q;f.DELTA=s;f.TSL=v;for(var p=h.length-1;p>-1;p--){var u=h[p];if(!u){continue}if(u.fps){e+=s>200?0:s;if(e<(1000 / u.fps)){continue}e-=(1000 / u.fps)}u(q,v,s,r,u.frameCount++)}
  if(d.length){g()}if(!THREAD){requestAnimationFrame(b)}}
  function g(){var q=d;d=d==m?l:m;var r=q.start();while(r){var p=r;r();r=q.next();p.__prev=p.__next=p=null}q.empty()}
  function k(){HydraEvents._addEvent(HydraEvents.BROWSER_FOCUS,n,f)}
  function n(p){if(p.type=="focus"){j=Date.now()}}
  this.startRender=this.start=function(s,q){var r=true;var p=h.length-1;if(this.TARGET_FPS<60){q=this.TARGET_FPS}if(typeof q=="number"){s.fps=q}s.frameCount=0;if(h.indexOf(s)==-1){h.push(s)}};this.nextFrame=function(p){d.push(p)};window.defer=this.nextFrame;
},"Static");

Class(function HydraEvents(){var b=[];var a={};this.COMPLETE="hydra_complete";this._addEvent=function(f,g,c){if(this._checkDefinition){this._checkDefinition(f)}
  var d=new Object();d.evt=f;d.object=c;d.callback=g;b.push(d)};this._fireEvent=function(c,f){var e=true;f=f||a;for(var d=0;d<b.length;d++){if(b[d].evt==c){if(e){b[d].callback(f)}
else{return false}}}};
},"Static");

Class(function Events(c){this.events={};var b={};var a={};this.events.subscribe=function(d,e){HydraEvents._addEvent(d,!!e._fire?e._fire:e,c);return e};this.events.fire=function(d,f,e){f=f||a;if(b[d]){f.target=f.target||c;b[d](f);f.target=null}else{if(!e){HydraEvents._fireEvent(d,f)}}};this.events.add=function(d,e){b[d]=!!e._fire?e._fire:e;return e};});

Class(function Mobile(){Inherit(this,MVC);this.scrollTop=0;},"Static");

Class(function Vector2(c,a){var b=Vector2.prototype;this.x=typeof c=="number"?c:0;this.y=typeof a=="number"?a:0;b.clear=function(){this.x=0;this.y=0;return this};b.copy=function(e){this.x=e.x;this.y=e.y;return this};b.subVectors=function(f,e){this.x=f.x-e.x;this.y=f.y-e.y;return this};b.add=function(e){this.x+=e.x;this.y+=e.y;return this};b.divide=function(e){this.x /=e;this.y /=e;return this};b.lengthSq=function(){return(this.x*this.x+this.y*this.y)||0.00001};b.length=function(){return Math.sqrt(this.lengthSq())};b.solveAngle=function(f,e){if(!e){e=this}return Math.atan2(f.y-e.y,f.x-e.x)};},function(){Vector2.__TEMP__=new Vector2()});
Class(function Vector3(d,b,a,e){var c=Vector3.prototype;this.x=typeof d==="number"?d:0;this.y=typeof b==="number"?b:0;this.z=typeof a==="number"?a:0;this.w=typeof e==="number"?e:1;c.clear=function(){this.x=0;this.y=0;this.z=0;this.w=1;return this};c.copyTo=function(g){g.x=this.x;g.y=this.y;g.z=this.z;g.w=this.w;return g};c.copyFrom=function(g){this.x=g.x||0;this.y=g.y||0;this.z=g.z||0;this.w=g.w||1;return this};c.lengthSq=function(){return this.x*this.x+this.y*this.y+this.z*this.z};c.subVectors=function(h,g){this.x=h.x-g.x;this.y=h.y-g.y;this.z=h.z-g.z;return this};c.add=function(g){this.x+=g.x;this.y+=g.y;this.z+=g.z;return this};c.multiply=function(g){this.x*=g;this.y*=g;this.z*=g;return this};c.interp=function(h,l,n,m){if(!Vector3.__TEMP__){Vector3.__TEMP__=new Vector3()}
  m=m||5000;var g=0;var k=TweenManager.Interpolation.convertEase(n);var j=Vector3.__TEMP__;j.subVectors(this,h);var m=Utils.clamp(Utils.range(j.lengthSq(),0,(m*m),1,0),0,1)*(l / 10);g=k(m);this.x+=(h.x-this.x)*g;this.y+=(h.y-this.y)*g;this.z+=(h.z-this.z)*g;};c.addAngleRadius=function(g,h){this.x+=Math.cos(g)*h;this.y+=Math.sin(g)*h;this.z+=Math.sin(g)*h;return this};},function(){Vector3.__TEMP__=new Vector3()}
);

Class(function ParticlePhysics(g){Inherit(this,MVC);var d=this;g=this;this.behaviors=new LinkedList();this.particles=new LinkedList();function f(r){var s=d.particles.start();while(s){var o=d.behaviors.start();o.applyBehavior(s,r);s=d.particles.next()}}
  this.addBehavior=function(o){this.behaviors.push(o);};this.addParticle=function(o){g.type="3D"
    this.particles.push(o);};this.update=function(p){f(1 / 60);}}
);
    
Class(function Particle(j,c,b){this.pos=this.position=j;});

Class(function TweenManager(){Namespace(this);},"Static");
TweenManager.Class(function Interpolation(){this.convertEase=function(j){var g=(function(){switch(j){case"easeInQuad":return TweenManager.Interpolation.Quad.In;break;case"easeInCubic":return TweenManager.Interpolation.Cubic.In;break;case"easeInQuint":return TweenManager.Interpolation.Quint.In;break;case"easeInCirc":return TweenManager.Interpolation.Circ.In;break;case"easeOutQuad":return TweenManager.Interpolation.Quad.Out;break;case"easeOutCubic":return TweenManager.Interpolation.Cubic.Out;break;case"easeOutQuint":return TweenManager.Interpolation.Quint.Out;break;case"easeOutCirc":return TweenManager.Interpolation.Circ.Out;break;}})();return g};this.Quad={In:function(g){return g*g},Out:function(g){return g*(2-g)}};this.Cubic={In:function(g){return g*g*g},Out:function(g){return--g*g*g+1}};this.Quint={In:function(g){return g*g*g*g*g},Out:function(g){return--g*g*g*g*g+1}};this.Circ={In:function(g){return 1-Math.sqrt(1-g*g)},Out:function(g){return Math.sqrt(1- --g*g)}};},"Static");Class(function Shaders(){var d=this;(function(){})();function c(f){var h=f.split("$");h.shift();for(var g=0;g<h.length;g+=2){var e=h[g];var j=h[g+1];d[e]=j}}
  function b(){for(var e in d){var f=d[e];if(typeof f==="string"){d[e]=a(f)}}}
  function a(g){if(!g.strpos("require")){return g}
    g=g.replace(/# require/g,"#require");while(g.strpos("#require")){var f=g.split("#require(");var e=f[1].split(")")[0];e=e.replace(/ /g,"");g=g.replace("#require("+e+")",d[e])}
    return g}
  this.parse=function(contents,asset){if(!contents.strpos("$")){asset=asset.split("/");asset=asset[asset.length-1];d[asset]=contents}
  else{c(contents);b()}};this.getShader=function(e){if(d.FALLBACKS){if(d.FALLBACKS[e]){e=d.FALLBACKS[e]}}
    return d[e]}},"static");
    
Class(function AssetLoader(_assets,_complete,_images){Inherit(this,MVC);var _this=this;var _queue;(function(){_queue=[];_queue.push(_assets[0])
  XHR.get(_queue[0],function(contents){Shaders.parse(contents,_queue[1]);Render.nextFrame(function(){_this.events.fire(HydraEvents.COMPLETE,null,true)})},"text");})();},function(){});
  
Class(function XHR(){this.get=function(f,j,l,h){var k=new XMLHttpRequest();k.open("GET",f,true);k.send();k.onreadystatechange=function(){if(k.readyState==4&&(k.status==200)){var m=k.responseText;j(m)
  k=null}}};},"Static");
    
Class(function AssetUtil(){var d=this;var c={};var b=["!!!"];this.PATH="";function a(g,e){for(var f=0;f<b.length;f++){var h=b[f];if(g.strpos(h)&&e!=h){return false}}return true}
  this.loadAssets=function(j){j=[j];var h=[];h.push(ASSETS[0]);var e=[];var g=h[0];e.push(g.strpos("http")?g:d.PATH+g);return e};},"Static");
  
Class(function ATUtil(){Inherit(this,MVC);var e=this;var a;(function(){c()})();function c(){e.events.subscribe(HydraEvents.RESIZE,b)}
  function b(){if(Device.mobile){e.events.fire("resize")}
  else{clearTimeout(a);e.events.fire("resize")}}},"static");
  
Class(function Shader(f,b,a,d){Inherit(this,MVC);var e=this;this.get("material",function(){var g={};g.vertexShader=Shaders.getShader(f+".vs");g.fragmentShader=Shaders.getShader(b+".fs");g.uniforms=e.uniforms
  d=new THREE.ShaderMaterial(g);return d});});
  
Class(function LoadAnimationImage(){var e=this;var b={};this.getTexture=function(j){if(!b[j]){var f=new Image();f.crossOrigin="";f.src=j;var g=new THREE.Texture(f);f.onload=function(){g.needsUpdate=true;if(g.onload){g.onload();g.onload=null}};b[j]=g;g.minFilter=THREE.LinearFilter}
  return b[j]};},"static");
  
Class(function Container(){Inherit(this,Controller);var g=this;var p;var x=0;var n,f,j;var e;(function(){c();o();})();function c(){p=g.container;Stage.add(p)}
  function o(){var r=g.initClass(Loader);r.events.add(Loader.LOAD_GL,l);r.events.add(HydraEvents.COMPLETE,function(){})}
  function l(u){var v=function(){this.test=function(g){defer(g)};return Pact.create(this.test)};var r=function(){f=g.initClass(Div1);return this.exec(f.test)}
    var t=function(){u.callback()};v().then(r).then(t)}},"interface");
    
Class(function Div1(){Inherit(this,Controller);var g=this;var f;(function(){f=g.initClass(Div2);})();this.test=function(m){f.start();m();};});
Class(function Div2(a){Inherit(this,Controller);var g=this;var c;var b,f;(function(){e();d()})();function e(){c=g.container;}
  function d(){f=g.initClass(Div3,a)}
  this.start=function(){f.start()};});
  
Class(function Loader(){Inherit(this,MVC);var s=this;var r;var b,u,l;var d=0;var g=0;(function(){defer(c);})();function c(){u=s.initClass(AssetLoader,j());u.events.add(HydraEvents.PROGRESS,f);u.events.add(HydraEvents.COMPLETE,k);}
  function j(){var w=AssetUtil.loadAssets(["lib","geometry","shaders"]);return w}
  function f(){}
  function k(){s.events.fire(Loader.LOAD_GL,{callback:p})}
  function p(){s.complete=true;s.events.fire(HydraEvents.COMPLETE)}},function(){});
  
Class(function Div3(){Inherit(this,Controller);var g=this;var l;var k,n,a;var o,m,d,c;(function(){q();p();j()})();function q(){l=g.element;n=new THREE.WebGLRenderer({preserveDrawingBuffer:true});n.setSize(Stage.width,Stage.height);n.autoClear=false;a=new THREE.PerspectiveCamera(45,Stage.width / Stage.height,10,10000);a.position.z=h();l.add(n.domElement)}
  function h(){return 1.3*Stage.height / Math.tan(45 / 2)/ 2}
  function p(){d=g.initClass(Texture,n);m=g.initClass(Plane,d);o=g.initClass(Mesh,d);}
  function f(){o.update();n.clearDepth();n.render(m.scene,a);n.clearDepth();n.render(o.scene,a);}
  function j(){g.events.subscribe("resize",b)}
  function b(){a.position.z=h();a.aspect=Stage.width / Stage.height;a.updateProjectionMatrix();n.setSize(Stage.width,Stage.height);o.resize();}
  this.start=function(){Render.start(f)};});
  
Class(function Texture(){Inherit(this,MVC);var g=this;(function(){setAnimationImage(g)})();});
  
Class(function Plane(b){Inherit(this,MVC);var h=this;var f,g;this.scene=new THREE.Object3D();(function(){e();a();c()})();function e(){g=h.initClass(Shader,"BGImage","BGImage");g.uniforms={aspect:{type:"fv1",value:[]},}}
  function a(){var j=new THREE.PlaneGeometry(Stage.width,Stage.height);f=new THREE.Mesh(j,g.material);h.scene.add(f);f.position.z+=200}
  function c(){var m=Stage.width;var j=m*(720 / 1280);if(j<Stage.height){j=Stage.height;m=j*(1280 / 720)}
    var l=m / Stage.width;var k=j / Stage.height;g.uniforms.aspect.value=[0,0,0,0,0,l,k,0.5,0.5]}}
);
    
Class(function Mesh(g){Inherit(this,MVC);var d=this;var f,a,e,b;var j=[];this.scene=new THREE.Scene();(function(){c();h();l()})();function c(){e=d.initClass(ParticlePhysics);b=d.initClass(HomeSizzleParticleBehavior);e.addBehavior(b)}
  function h(){a=d.initClass(generateMeshShader,g);f=d.initClass(generateMesh,a);k()}
  function k(){f.exec(function(m){d.scene.add(m);j.push(m)})}
  function l(){j.forEach(function(n){var m=new Particle(new Vector3(n.position.x,n.position.y,0));e.addParticle(m);m.mesh=n;n.particle=m})}
  this.update=function(){b.update();e.update();a.update()};this.resize=function(){j.forEach(function(m){d.scene.remove(m);});j=[];k();l()}}
);
    
Class(function generateMesh(a){Inherit(this,MVC);var g=this;var b;var f=new Vector2();var e=new Vector2();function j(){var w=[];var r=(function(){if(Mobile.tablet){return 14}
  if(Mobile.phone){return 7}
  return 20})();var m=r;var t=r;var l=Stage.width / m;var q=Stage.height / t;var v;var u=function(x,y){v.push({x:x,y:y})};var o=function(C){var B=-1;for(var z=0;z<Stage.width*1.1;z+=l){var A=B++%2==0;v=[];if(A){u(z,C+q);u(z+(l / 2),C);u(z+l,C+q)}
else{u(z,C+q);u(z-(l / 2),C);u(z+(l / 2),C);z-=l / 2}
  w.push(v)}};for(var s=0;s<Stage.height;s+=q){o(s)}
  return w}
  function d(triangles){f.clear();triangles.forEach(function(m){f.add(m)});f.divide(3);triangles.centroid=new Vector2().copy(f);var r=new THREE.BufferGeometry();var vertices=new Float32Array(9);var color=new Float32Array(9);for(i=0;i<3;i++){var s=triangles[i];vertices[i*3]=s.x-triangles.centroid.x;vertices[i*3+1]=s.y-triangles.centroid.y;}
    r.addAttribute("position",new THREE.BufferAttribute(vertices,3));var m=Utils.doRandom(10,40)/ 10;r.applyMatrix(new THREE.Matrix4().makeScale(m,m,m));for(i=0;i<triangles.length;i++){var p=vertices[i*3]+triangles.centroid.x;var n=vertices[i*3+1]+triangles.centroid.y;color[i*2]=Utils.range(p,0,Stage.width,0,1);color[i*2+1]=Utils.range(n,0,Stage.height,0,1)}
    r.addAttribute("uv",new THREE.BufferAttribute(color,2));r.centroid=triangles.centroid;return r}
  this.exec=function(m){var l=j();l.forEach(function(p){var geom=d(p);var mesh=new THREE.Mesh(geom,a.material);mesh.centroid=geom.centroid;mesh.locked=geom.locked;mesh.position.x=geom.centroid.x-Stage.width / 2;mesh.position.y=geom.centroid.y-Stage.height / 2;delete geom.centroid;delete geom.locked;m(mesh)})}}
);
  
Class(function generateMeshShader(b){Inherit(this,MVC);var g=this;var f,b,a;(function(){e();d();c()})();function e(){f=g.initClass(Shader,"Speed","Color");f.uniforms={tMap:{type:"t",value:b.texture},aspect:{type:"fv1",value:[]},};g.material=f.material}
  function d(){g.events.subscribe(HydraEvents.RESIZE,c)}
  function c(){var l=Stage.width;var h=l*(720 / 1280);if(h<Stage.height){h=Stage.height;l=h*(1280 / 720)}
    var k=l / Stage.width;var j=h / Stage.height;f.uniforms.aspect.value=[0,0,0,0,0,k,j,0.5,0.5]}
  this.update=function(){f.uniforms.tMap.value=b.texture}});
  
Class(function HomeSizzleParticleBehavior(){Inherit(this,MVC);var f=this;var c=false;var e=0;var b=0;var d=new Vector2();var g=new Vector2();var h=new Vector2();var a=new Vector2();var k=["easeOutQuad","easeOutCubic","easeOutQuint","easeOutCirc"];function j(l){l.target=new Vector3(l.pos.x,l.pos.y,0);l.origin=new Vector2(l.pos.x,l.pos.y);l.dir=Utils.headsTails(-1,1);l.mult=Utils.doRandom(10,100)/ 100;l.rx=Utils.toRadians(Utils.doRandom(0,40));l.ry=Utils.toRadians(Utils.doRandom(0,40));l.rz=Utils.toRadians(Utils.doRandom(0,40));l.ease=k[Utils.doRandom(0,k.length-1)];l.speed=Utils.doRandom(20,40)/ 100}
  this.update=function(m){g.x=Mouse.x-Stage.width / 2;g.y=-(Mouse.y-Stage.height / 2);a.subVectors(Mouse,h).divide(Render.DELTA);h.copy(Mouse);var l=a.length();e=l>0.01?300:0;if(l>5){e=500}
    b+=(e-b)*0.07;if(c){b=500}};this.applyBehavior=function(l){if(!l.target){j(l)}
    d.subVectors(l.origin,g);var n=d.length();if(n<b){var m=Math.atan2(d.y,d.x);l.target.copyFrom(l.origin).addAngleRadius(m,(b-n)*l.mult*1.2);l.target.z=Utils.range(n,0,b,-300,0)}
    else{l.target.copyFrom(l.origin)}
    var o=Utils.range(l.pos.z,0,-300,0,1);l.mesh.rotation.x=l.rx*o*l.dir;l.mesh.rotation.y=l.ry*o*l.dir;l.mesh.rotation.z=l.rz*o*l.dir;l.pos.interp(l.target,l.speed,l.ease);l.pos.copyTo(l.mesh.position)};this.forceRadius=function(l){if(l=="over"){c=true}else{c=false}}}
);

Class(function Mouse(){
  var position=this; var b;
  this.x=0; this.y=0;
  this.lastX=0; this.lastY=0;
  this.moveX=0; this.moveY=0;
  this.autoPreventClicks=false;

  function onMove(moveEvent){
    position.lastX=position.x;
    position.lastY=position.y;
    position.ready=true;

    if(moveEvent.windowsPointer){
      position.x=moveEvent.x;
      position.y=moveEvent.y
    }

    else{
      var touchEvent=Utils.touchEvent(moveEvent);
      position.x=touchEvent.x;
      position.y=touchEvent.y;
    }

    position.moveX=position.x-position.lastX;
    position.moveY=position.y-position.lastY;
  }

  this.capture=function(e,f){
    if(b){return false}
    b=true;
    position.x=e||0;
    position.y=f||0;

    if(!Device.mobile){
      __window.bind("mousemove",onMove)
    }
    else{
      __window.bind("touchmove",onMove);
      __window.bind("touchstart",onMove)}
  };
},"Static");
    
Class(function Main(){(function(){Mouse.capture();Container.instance()})();});

setShader();

function LoadGeometry() {
  var a=!!window.MSGesture;
  var b=function(c){return c};

  StartRun.fn.bind=function(d,j){
    if(!this._events){this._events={}}

    if(a&&this==__window){return Stage.bind(d,j)}

    if(d=="touchstart"){if(!Device.mobile){d="mousedown"}}

    else{
      if(d=="touchmove"){
        if(!Device.mobile){d="mousemove"}
        if(a&&!this.div.msGesture){
          this.div.msGesture=new MSGesture();this.div.msGesture.target=this.div
        }
      }
      else{
        if(d=="touchend"){
          if(!Device.mobile){d="mouseup"}
        }
      }
    }
    
    this._events["bind_"+d]=this._events["bind_"+d]||[];
    var h=this._events["bind_"+d];var g={};var f=this.div;
    g.callback=j;
    g.target=this.div;
    h.push(g);
    
    function c(o){
      if(a&&f.msGesture&&d=="touchstart"){f.msGesture.addPointer(o.pointerId)}var p=Utils.touchEvent(o);if(a){var n=o;o={};o.x=Number(n.pageX||n.clientX);o.y=Number(n.pageY||n.clientY);o.target=n.target;o.currentTarget=n.currentTarget;o.path=[];var m=o.target;while(m){o.path.push(m);m=m.parentElement||null}o.windowsPointer=true}else{o.x=p.x;o.y=p.y}for(var k=0;k<h.length;k++){var l=h[k];if(l.target==o.currentTarget){l.callback(o)}}}if(!this._events["fn_"+d]){this._events["fn_"+d]=c;this.div[Hydra.addEvent](b(d),c,true)
    }
    return this;
  };
}

(function() {
  LoadGeometry();
  var scriptInitializedEvent = new CustomEvent("geometry-script-loaded", { 'isLoaded': true });
  window.dispatchEvent(scriptInitializedEvent);
})();