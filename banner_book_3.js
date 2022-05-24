(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,960);


(lib.bg_book = function() {
	this.initialize(img.bg_book);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,264,264);


(lib.book_slots_01 = function() {
	this.initialize(img.book_slots_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,1174);


(lib.book_slots_02 = function() {
	this.initialize(img.book_slots_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,1174);


(lib.book_slots_03 = function() {
	this.initialize(img.book_slots_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,1174);


(lib.book_slots_04 = function() {
	this.initialize(img.book_slots_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,1174);


(lib.book_slots_05 = function() {
	this.initialize(img.book_slots_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,1174);


(lib.book_slots_win = function() {
	this.initialize(img.book_slots_win);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,117);


(lib.btn_spin = function() {
	this.initialize(img.btn_spin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,110);


(lib.btn_spin_down = function() {
	this.initialize(img.btn_spin_down);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,110);


(lib.coins = function() {
	this.initialize(img.coins);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,779,430);


(lib.slot_machine = function() {
	this.initialize(img.slot_machine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,400);


(lib.txt_app = function() {
	this.initialize(img.txt_app);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,330);


(lib.txt_bonus = function() {
	this.initialize(img.txt_bonus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,516,90);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.slot__win_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.book_slots_win();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slot__win_1, new cjs.Rectangle(0,0,117,117), null);


(lib.animation_txt_app = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt_app
	this.instance = new lib.txt_app();
	this.instance.setTransform(-320,-165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-165,640,330);


(lib.animation_slot_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// layer1
	this.instance = new lib.book_slots_02();
	this.instance.setTransform(-60,-2935);

	this.instance_1 = new lib.book_slots_02();
	this.instance_1.setTransform(-59,-1761);

	this.instance_2 = new lib.book_slots_02();
	this.instance_2.setTransform(-58.5,-587);

	this.instance_3 = new lib.book_slots_02();
	this.instance_3.setTransform(-58.5,587);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-2935,118.5,4696);


(lib.animation_slot_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.book_slots_03();
	this.instance.setTransform(-60,-2935);

	this.instance_1 = new lib.book_slots_03();
	this.instance_1.setTransform(-59,-1761);

	this.instance_2 = new lib.book_slots_03();
	this.instance_2.setTransform(-58.5,-587);

	this.instance_3 = new lib.book_slots_03();
	this.instance_3.setTransform(-58.5,587);

	this.instance_4 = new lib.book_slots_03();
	this.instance_4.setTransform(-58.5,-1761);

	this.instance_5 = new lib.book_slots_03();
	this.instance_5.setTransform(-58.5,-587);

	this.instance_6 = new lib.book_slots_03();
	this.instance_6.setTransform(-58.5,587);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-2935,118.5,4696);


(lib.animation_slot_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.book_slots_04();
	this.instance.setTransform(-60,-2935);

	this.instance_1 = new lib.book_slots_04();
	this.instance_1.setTransform(-59,-1761);

	this.instance_2 = new lib.book_slots_04();
	this.instance_2.setTransform(-58.5,-587);

	this.instance_3 = new lib.book_slots_04();
	this.instance_3.setTransform(-58.5,587);

	this.instance_4 = new lib.book_slots_04();
	this.instance_4.setTransform(-58.5,-1761);

	this.instance_5 = new lib.book_slots_04();
	this.instance_5.setTransform(-58.5,-587);

	this.instance_6 = new lib.book_slots_04();
	this.instance_6.setTransform(-58.5,587);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-2935,118.5,4696);


(lib.animation_slot_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.book_slots_05();
	this.instance.setTransform(-60,-2935);

	this.instance_1 = new lib.book_slots_05();
	this.instance_1.setTransform(-59,-1761);

	this.instance_2 = new lib.book_slots_05();
	this.instance_2.setTransform(-58.5,-587);

	this.instance_3 = new lib.book_slots_05();
	this.instance_3.setTransform(-58.5,587);

	this.instance_4 = new lib.book_slots_05();
	this.instance_4.setTransform(-58.5,-1761);

	this.instance_5 = new lib.book_slots_05();
	this.instance_5.setTransform(-58.5,-587);

	this.instance_6 = new lib.book_slots_05();
	this.instance_6.setTransform(-58.5,587);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-2935,118.5,4696);


(lib.animation_slot_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.book_slots_01();
	this.instance.setTransform(-60,-2935);

	this.instance_1 = new lib.book_slots_01();
	this.instance_1.setTransform(-59,-1761);

	this.instance_2 = new lib.book_slots_01();
	this.instance_2.setTransform(-58.5,-587);

	this.instance_3 = new lib.book_slots_01();
	this.instance_3.setTransform(-58.5,587);

	this.instance_4 = new lib.book_slots_01();
	this.instance_4.setTransform(-58.5,-1761);

	this.instance_5 = new lib.book_slots_01();
	this.instance_5.setTransform(-58.5,-587);

	this.instance_6 = new lib.book_slots_01();
	this.instance_6.setTransform(-58.5,587);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-2935,118.5,4696);


(lib.animation_light_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,51,0.439)","rgba(204,204,0,0)"],[0,1],0,0,0,0,0,29.7).s().p("AjQDQQhWhWAAh6QAAh6BWhWQBXhWB5AAQB6AABWBWQBXBWAAB6QAAB6hXBWQhWBXh6AAQh5AAhXhXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-29.5,59,59);


(lib.animation_coins = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.coins();
	this.instance.setTransform(399.8,173.95,0.9866,1,174.0513);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-409.1,-253.7,808.9000000000001,507.29999999999995);


(lib.animation_btn_light_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.439)","rgba(255,255,51,0.439)","#FFFF33","rgba(255,255,255,0.439)","#FFFFFF","rgba(204,204,0,0)"],[0,0,0,0,0,1],0,0,0,0,0,167.5).s().p("AySBKQnkgeAAgsQAAgrHkgeQHlgfKtAAQKuAAHkAfQHlAeAAArQAAAsnlAeQnkAfquAAQqtAAnlgfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.5,-10.5,331,21);


(lib.animation_book_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.bg_book();
	this.instance.setTransform(-62.85,-16.85,0.3485,0.3485,-29.9982);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-62.8,125.6,125.6);


(lib.animation_book_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.bg_book();
	this.instance.setTransform(-14.4,-120.25,0.6486,0.6486,38.1874);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.2,-120.2,240.4,240.4);


(lib.animation_book_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.bg_book();
	this.instance.setTransform(-143.65,-38.5,0.7966,0.7966,-29.9992);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.6,-143.6,287.29999999999995,287.29999999999995);


(lib.lights = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// light_2
	this.instance = new lib.animation_light_1("synched",0);
	this.instance.setTransform(114,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},4).to({startPosition:0},4).to({scaleX:0.4746,scaleY:0.4746},3).to({scaleX:1,scaleY:1},4).to({scaleX:0.4746,scaleY:0.4746},4).to({scaleX:1,scaleY:1},4).to({startPosition:0},3).to({startPosition:0},4).to({scaleX:0.4746,scaleY:0.4746},3).to({scaleX:1,scaleY:1},4).to({scaleX:0.4746,scaleY:0.4746},4).to({scaleX:1,scaleY:1},4).to({startPosition:0},4).to({startPosition:0},4).to({scaleX:0.4746,scaleY:0.4746},3).to({scaleX:1,scaleY:1},4).to({scaleX:0.4746,scaleY:0.4746},4).to({scaleX:1,scaleY:1},4).to({startPosition:0},2).to({startPosition:0},4).to({scaleX:0.4746,scaleY:0.4746},3).to({scaleX:1,scaleY:1},4).to({scaleX:0.4746,scaleY:0.4746},4).to({scaleX:1,scaleY:1},4).to({startPosition:0},2).to({startPosition:0},4).to({scaleX:0.4746,scaleY:0.4746},3).to({scaleX:1,scaleY:1},4).to({scaleX:0.4746,scaleY:0.4746},4).to({scaleX:1,scaleY:1},4).to({startPosition:0},3).to({startPosition:0},4).to({scaleX:0.4746,scaleY:0.4746},3).to({scaleX:1,scaleY:1},4).to({scaleX:0.4746,scaleY:0.4746},4).to({scaleX:1,scaleY:1},4).to({scaleX:0.4746,scaleY:0.4746},4).to({scaleX:1,scaleY:1},4).to({startPosition:0},4).wait(1));

	// light_1
	this.instance_1 = new lib.animation_light_1("synched",0);
	this.instance_1.setTransform(-116.25,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.5,scaleY:0.5},4).to({scaleX:1,scaleY:1},5).to({scaleX:0.5,scaleY:0.5},3).to({scaleX:1,scaleY:1},5).to({scaleX:0.5,scaleY:0.5},4).to({scaleX:1,scaleY:1},5).to({scaleX:0.5,scaleY:0.5},2).to({scaleX:1,scaleY:1},5).to({startPosition:0},2).to({scaleX:0.5,scaleY:0.5},4).to({scaleX:1,scaleY:1},5).to({scaleX:0.5,scaleY:0.5},3).to({scaleX:1,scaleY:1},5).to({scaleX:0.5,scaleY:0.5},4).to({scaleX:1,scaleY:1},5).to({scaleX:0.5,scaleY:0.5},2).to({scaleX:1,scaleY:1},5).to({startPosition:0},4).to({scaleX:0.5,scaleY:0.5},4).to({scaleX:1,scaleY:1},5).to({scaleX:0.5,scaleY:0.5},3).to({scaleX:1,scaleY:1},5).to({scaleX:0.5,scaleY:0.5},4).to({scaleX:1,scaleY:1},5).to({scaleX:0.5,scaleY:0.5},2).to({scaleX:1,scaleY:1},5).to({startPosition:0},2).to({scaleX:0.5,scaleY:0.5},4).to({scaleX:1,scaleY:1},5).to({scaleX:0.5,scaleY:0.5},3).to({scaleX:1,scaleY:1},5).to({scaleX:0.5,scaleY:0.5},4).to({scaleX:1,scaleY:1},5).to({scaleX:0.5,scaleY:0.5},2).to({startPosition:0},1).to({scaleX:1,scaleY:1},5).to({startPosition:0},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.7,-29.5,289.2,59);


(lib.btn_lights = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn_light_2
	this.instance = new lib.animation_btn_light_1("synched",0);
	this.instance.setTransform(217,238,1,0.4762,0,0,0,0,0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regY:0.3,scaleY:0.475,x:165.95,y:238.05,alpha:1},10).to({scaleY:0.4764,x:-12.8,y:237.95},35).to({regY:0.2,scaleY:0.4762,x:-69,alpha:0},11).to({_off:true},1).wait(15));

	// btn_light_1
	this.instance_1 = new lib.animation_btn_light_1("synched",0);
	this.instance_1.setTransform(-54.6,139.8,1,0.3809,0,0,0,-0.6,1.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:2.1,y:139.95,alpha:1},10).to({x:189.25,y:140.1},33).to({regX:0,regY:0.2,x:246,y:140,alpha:0},10).to({_off:true},1).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234.5,0,646,243);


(lib.books = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// book_1
	this.instance = new lib.animation_book_1("synched",0);
	this.instance.setTransform(40.05,-11.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,regY:-0.1,scaleX:1.0725,scaleY:1.0725,rotation:6.4767,x:29.65,y:-23.85},43,cjs.Ease.quadInOut).to({regX:0.1,scaleX:1.0442,scaleY:1.0442,rotation:-2.2202,x:24.05,y:-18},44,cjs.Ease.quadInOut).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:40.05,y:-11.95},57,cjs.Ease.quadInOut).wait(1));

	// book_2
	this.instance_1 = new lib.animation_book_2("synched",0);
	this.instance_1.setTransform(-350.8,-40.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.1,regY:-0.1,scaleX:1.156,scaleY:1.156,rotation:-4.5032,x:-350.9,y:-20.9},69,cjs.Ease.quadInOut).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-350.8,y:-40.8},75,cjs.Ease.quadInOut).wait(1));

	// book_3
	this.instance_2 = new lib.animation_book_3("synched",0);
	this.instance_2.setTransform(-243,-20.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-14.9992,y:-20.8},53,cjs.Ease.quadInOut).to({regX:-0.1,rotation:7.5319,x:-243.1,y:-20.75},50,cjs.Ease.quadInOut).to({regX:0,rotation:0,x:-243,y:-20.85},41,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-488.1,-172.2,671.8,305.79999999999995);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.animation_txt_app("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-320,-165,640,330), null);


(lib.btn_spin_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn_lights
	this.instance = new lib.btn_lights();
	this.instance.setTransform(-89.45,-191.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// btn_spin_up
	this.instance_1 = new lib.btn_spin();
	this.instance_1.setTransform(-190,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2));

	// btn_spin_down
	this.instance_2 = new lib.btn_spin_down();
	this.instance_2.setTransform(-190,-55);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190,-55,380,110);


// stage content:
(lib.banner_book_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,50,102,210,254];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.btn1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(1);
			this.btn1.mouseEnabled=false;
		//	this.btn_spin_down.gotoAndStop(3);
		//	this.btn_lights.gotoAndStop(3);
		
		
		}
	}
	this.frame_50 = function() {
		this.stop();
		
		this.btn2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(51);
			this.btn2.mouseEnabled=false;
		
		}
	}
	this.frame_102 = function() {
		this.stop();
		
		this.btn3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(103);
			this.btn3.mouseEnabled=false;
		
		}
	}
	this.frame_210 = function() {
		this.txt_app_w.cursor = "pointer";
		this.txt_app_w.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
		
			window.open("Android":mraid.open("https://play.google.com/store/apps/details?id=yourgame"); break;, "_blank");
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
	}
	this.frame_254 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50).call(this.frame_50).wait(52).call(this.frame_102).wait(108).call(this.frame_210).wait(44).call(this.frame_254).wait(1));

	// app
	this.instance = new lib.animation_txt_app("synched",0);
	this.instance.setTransform(320,480,0.067,0.067);
	this.instance._off = true;

	this.txt_app_w = new lib.Символ1();
	this.txt_app_w.name = "txt_app_w";
	this.txt_app_w.setTransform(320,480);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},199).to({state:[{t:this.instance}]},7).to({state:[{t:this.txt_app_w}]},4).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199).to({_off:false},0).to({scaleX:1.2374,scaleY:1.2374},7,cjs.Ease.quadInOut).to({_off:true,scaleX:1,scaleY:1,mode:"independent"},4,cjs.Ease.quadInOut).wait(45));

	// coins__8___копия
	this.instance_1 = new lib.animation_coins("synched",0);
	this.instance_1.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(228).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5871,scaleY:0.5871,x:321.75,y:547,alpha:0.2454},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6345,scaleY:0.6345,rotation:-2.5198,x:344.65,y:484.6},0).wait(1).to({scaleX:0.6552,scaleY:0.6552,rotation:-4.8348,x:365.9,y:451.1},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,rotation:-6.4874,x:381,y:427.2},0).wait(1).to({scaleX:0.6784,scaleY:0.6784,rotation:-7.4375,x:389.7,y:413.5},0).wait(1).to({regX:0.1,regY:0,scaleX:0.6818,scaleY:0.6818,rotation:-7.8107,x:396.35,y:407.85},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6899,scaleY:0.6899,rotation:-7.937,x:389.85,y:416.05},0).wait(1).to({scaleX:0.7074,scaleY:0.7074,rotation:-8.2064,x:382.8,y:432.7},0).wait(1).to({scaleX:0.7352,scaleY:0.7352,rotation:-8.6355,x:371.65,y:459.3},0).wait(1).to({scaleX:0.7744,scaleY:0.7744,rotation:-9.2408,x:355.9,y:496.75},0).wait(1).to({scaleX:0.8261,scaleY:0.8261,rotation:-10.0374,x:335.2,y:546.15},0).wait(1).to({scaleX:0.8908,scaleY:0.8908,rotation:-11.0357,x:309.2,y:607.95},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.9685,scaleY:0.9685,rotation:-12.2364,x:282.6,y:681.6},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.991,scaleY:0.991,rotation:-12.5995,x:307.8,y:721.15,alpha:0.2872},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-12.7459,x:324.5,y:735.95,alpha:0},0).to({_off:true},3).wait(8));

	// coins__7___копия
	this.instance_2 = new lib.animation_coins("synched",0);
	this.instance_2.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(223).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5871,scaleY:0.5871,x:321.75,y:547,alpha:0.2454},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6345,scaleY:0.6345,rotation:2.4997,x:302.15,y:481.8},0).wait(1).to({scaleX:0.6552,scaleY:0.6552,rotation:4.7963,x:284.3,y:445.8},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,rotation:6.4357,x:271.55,y:420.1},0).wait(1).to({scaleX:0.6784,scaleY:0.6784,rotation:7.3782,x:264.25,y:405.3},0).wait(1).to({regX:0.1,regY:0,scaleX:0.6818,scaleY:0.6818,rotation:7.7485,x:264.55,y:400.1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6979,scaleY:0.6979,rotation:6.6388,x:267.4,y:416.95},0).wait(1).to({scaleX:0.7459,scaleY:0.7459,rotation:3.3468,x:285.55,y:468.55},0).wait(1).to({scaleX:0.826,scaleY:0.826,rotation:-2.1613,x:315.85,y:554.8},0).wait(1).to({scaleX:0.9108,scaleY:0.9108,rotation:-7.9863,x:348,y:646.15},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.9686,scaleY:0.9686,rotation:-11.9529,x:374.55,y:707.65},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.9794,scaleY:0.9794,rotation:-12.9966,x:374,y:718.2,alpha:0.6574},0).wait(1).to({scaleX:0.9877,scaleY:0.9877,rotation:-13.8035,x:377.2,y:725.75,alpha:0.3925},0).wait(1).to({scaleX:0.9938,scaleY:0.9938,rotation:-14.3933,x:379.5,y:731.3,alpha:0.1989},0).wait(1).to({scaleX:0.9978,scaleY:0.9978,rotation:-14.7857,x:380.95,y:735,alpha:0.0701},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-14.9992,x:386.5,y:735.95,alpha:0},0).to({_off:true},7).wait(8));

	// coins__6___копия
	this.instance_3 = new lib.animation_coins("synched",0);
	this.instance_3.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(219).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5828,scaleY:0.5828,x:321.75,y:551.55,alpha:0.1131},0).wait(1).to({scaleX:0.5934,scaleY:0.5934,x:321.7,y:540.4,alpha:0.4368},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6345,scaleY:0.6345,rotation:-4.1282,x:315.7,y:493.15},0).wait(1).to({scaleX:0.6552,scaleY:0.6552,rotation:-7.9208,x:310.3,y:467.5},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,rotation:-10.6284,x:306.45,y:449.3},0).wait(1).to({scaleX:0.6784,scaleY:0.6784,rotation:-12.1849,x:304.25,y:438.75},0).wait(1).to({regX:0.1,scaleX:0.6818,scaleY:0.6818,rotation:-12.7964,x:306.55,y:434.1},0).wait(1).to({regX:-4.7,scaleX:0.6922,scaleY:0.6922,rotation:-11.7868,x:303.2,y:444.65},0).wait(1).to({scaleX:0.7155,scaleY:0.7155,rotation:-9.5295,x:302.95,y:466.75},0).wait(1).to({scaleX:0.7533,scaleY:0.7533,rotation:-5.8605,x:302.45,y:502.65},0).wait(1).to({scaleX:0.8074,scaleY:0.8074,rotation:-0.6183,x:301.75,y:553.9},0).wait(1).to({scaleX:0.879,scaleY:0.879,rotation:6.3236,x:300.95,y:621.65},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.9686,scaleY:0.9686,rotation:14.9987,x:304.55,y:707.6},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.9852,scaleY:0.9852,rotation:17.625,x:294.8,y:720.9,alpha:0.4726},0).wait(1).to({scaleX:0.9953,scaleY:0.9953,rotation:19.2359,x:291.55,y:729.9,alpha:0.1491},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:19.9781,x:294.5,y:735.95,alpha:0},0).to({_off:true},11).wait(8));

	// coins_5___копия
	this.instance_4 = new lib.animation_coins("synched",0);
	this.instance_4.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(214).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5871,scaleY:0.5871,x:321.75,y:547,alpha:0.2454},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6488,scaleY:0.6488,rotation:9.0832,x:342.65,y:479.8},0).wait(1).to({scaleX:0.6734,scaleY:0.6734,rotation:15.1457,x:356.7,y:452.25},0).wait(1).to({regX:0.1,scaleX:0.6818,scaleY:0.6818,rotation:17.2021,x:364.55,y:444.05},0).wait(1).to({regX:-4.7,scaleX:0.6905,scaleY:0.6905,rotation:16.6816,x:360.85,y:451.05},0).wait(1).to({scaleX:0.7141,scaleY:0.7141,rotation:15.2617,x:359.2,y:472.85},0).wait(1).to({scaleX:0.7556,scaleY:0.7556,rotation:12.7734,x:356.35,y:511.05},0).wait(1).to({scaleX:0.8133,scaleY:0.8133,rotation:9.3113,x:352.4,y:564.25},0).wait(1).to({scaleX:0.8766,scaleY:0.8766,rotation:5.5187,x:348.1,y:622.55},0).wait(1).to({scaleX:0.9307,scaleY:0.9307,rotation:2.2708,x:344.4,y:672.55},0).wait(1).to({regX:0,regY:0,scaleX:0.9686,scaleY:0.9686,rotation:0,x:346.5,y:707.5},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.9851,scaleY:0.9851,x:352.35,y:722.35,alpha:0.4726},0).wait(1).to({scaleX:0.9953,scaleY:0.9953,x:358.75,y:731.55,alpha:0.1491},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:366.5,y:735.95,alpha:0},0).to({_off:true},18).wait(8));

	// coins__4___копия
	this.instance_5 = new lib.animation_coins("synched",0);
	this.instance_5.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(207).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5871,scaleY:0.5871,x:321.75,y:547,alpha:0.2454},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6345,scaleY:0.6345,rotation:-4.1282,x:352.45,y:493.7},0).wait(1).to({scaleX:0.6552,scaleY:0.6552,rotation:-7.9208,x:380.75,y:468.6},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,rotation:-10.6284,x:400.95,y:450.75},0).wait(1).to({scaleX:0.6784,scaleY:0.6784,rotation:-12.1849,x:412.6,y:440.4},0).wait(1).to({regX:0.1,scaleX:0.6818,scaleY:0.6818,rotation:-12.7964,x:420.35,y:435.85},0).wait(1).to({regX:-4.7,scaleX:0.6899,scaleY:0.6899,rotation:-12.4315,x:413.65,y:444.25},0).wait(1).to({scaleX:0.7074,scaleY:0.7074,rotation:-11.6523,x:406.15,y:460.75},0).wait(1).to({scaleX:0.7352,scaleY:0.7352,rotation:-10.4117,x:394.15,y:487.05},0).wait(1).to({scaleX:0.7744,scaleY:0.7744,rotation:-8.6616,x:377.3,y:524.1},0).wait(1).to({scaleX:0.8261,scaleY:0.8261,rotation:-6.3583,x:355.1,y:572.9},0).wait(1).to({scaleX:0.8908,scaleY:0.8908,rotation:-3.4717,x:327.25,y:634},0).wait(1).to({regX:0,regY:0,scaleX:0.9686,scaleY:0.9686,rotation:0,x:298.5,y:707.5},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.991,scaleY:0.991,x:299.5,y:727.6,alpha:0.2872},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:306.5,y:735.95,alpha:0},0).to({_off:true},1).wait(31));

	// coins__3___копия
	this.instance_6 = new lib.animation_coins("synched",0);
	this.instance_6.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(202).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5871,scaleY:0.5871,x:321.75,y:547,alpha:0.2454},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6345,scaleY:0.6345,rotation:2.4997,x:303.4,y:478.6},0).wait(1).to({scaleX:0.6552,scaleY:0.6552,rotation:4.7963,x:286.8,y:439.65},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,rotation:6.4357,x:274.85,y:411.8},0).wait(1).to({scaleX:0.6784,scaleY:0.6784,rotation:7.3782,x:268.05,y:395.8},0).wait(1).to({regX:0.1,regY:0,scaleX:0.6818,scaleY:0.6818,rotation:7.7485,x:268.55,y:390.1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6979,scaleY:0.6979,rotation:7.3121,x:267.6,y:406.5},0).wait(1).to({scaleX:0.7459,scaleY:0.7459,rotation:6.0173,x:274.35,y:456.6},0).wait(1).to({scaleX:0.826,scaleY:0.826,rotation:3.851,x:285.7,y:540.35},0).wait(1).to({scaleX:0.9108,scaleY:0.9108,rotation:1.5601,x:297.65,y:629.05},0).wait(1).to({regX:0,regY:0,scaleX:0.9686,scaleY:0.9686,rotation:0,x:310.5,y:689.5},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.9793,scaleY:0.9793,x:300.4,y:705.25,alpha:0.6574},0).wait(1).to({scaleX:0.9877,scaleY:0.9877,x:296.05,y:717.55,alpha:0.3925},0).wait(1).to({scaleX:0.9937,scaleY:0.9937,x:292.95,y:726.55,alpha:0.1989},0).wait(1).to({scaleX:0.9978,scaleY:0.9978,x:290.85,y:732.5,alpha:0.0701},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:294.5,y:735.95,alpha:0},0).to({_off:true},5).wait(31));

	// coins__2___копия
	this.instance_7 = new lib.animation_coins("synched",0);
	this.instance_7.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(198).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5828,scaleY:0.5828,x:321.75,y:551.55,alpha:0.1131},0).wait(1).to({scaleX:0.5934,scaleY:0.5934,x:321.7,y:540.4,alpha:0.4368},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6345,scaleY:0.6345,rotation:-4.1282,x:296.35,y:490.55},0).wait(1).to({scaleX:0.6552,scaleY:0.6552,rotation:-7.9208,x:273.15,y:462.55},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,rotation:-10.6284,x:256.6,y:442.65},0).wait(1).to({scaleX:0.6784,scaleY:0.6784,rotation:-12.1849,x:247.1,y:431.15},0).wait(1).to({regX:0.1,scaleX:0.6818,scaleY:0.6818,rotation:-12.7964,x:246.55,y:426.1},0).wait(1).to({regX:-4.7,scaleX:0.6922,scaleY:0.6922,rotation:-12.3316,x:246.85,y:437},0).wait(1).to({scaleX:0.7155,scaleY:0.7155,rotation:-11.2924,x:254.7,y:459.8},0).wait(1).to({scaleX:0.7533,scaleY:0.7533,rotation:-9.6032,x:267.4,y:496.9},0).wait(1).to({scaleX:0.8074,scaleY:0.8074,rotation:-7.1898,x:285.6,y:549.8},0).wait(1).to({scaleX:0.8791,scaleY:0.8791,rotation:-3.9939,x:309.7,y:619.95},0).wait(1).to({regX:0,regY:0,scaleX:0.9686,scaleY:0.9686,rotation:0,x:344.5,y:707.5},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.9851,scaleY:0.9851,x:336.65,y:722.35,alpha:0.4726},0).wait(1).to({scaleX:0.9953,scaleY:0.9953,x:334.65,y:731.55,alpha:0.1491},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:338.5,y:735.95,alpha:0},0).to({_off:true},9).wait(31));

	// coins___копия__2
	this.instance_8 = new lib.animation_coins("synched",0);
	this.instance_8.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(193).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5871,scaleY:0.5871,x:321.75,y:547,alpha:0.2454},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6488,scaleY:0.6488,rotation:9.0832,x:357.4,y:463.95},0).wait(1).to({scaleX:0.6734,scaleY:0.6734,rotation:15.1457,x:381.35,y:425.85},0).wait(1).to({regX:0.1,scaleX:0.6818,scaleY:0.6818,rotation:17.2021,x:392.55,y:414.05},0).wait(1).to({regX:-4.7,scaleX:0.6905,scaleY:0.6905,rotation:16.6816,x:387.3,y:421.95},0).wait(1).to({scaleX:0.7141,scaleY:0.7141,rotation:15.2617,x:381.55,y:446.25},0).wait(1).to({scaleX:0.7556,scaleY:0.7556,rotation:12.7734,x:371.5,y:488.8},0).wait(1).to({scaleX:0.8133,scaleY:0.8133,rotation:9.3113,x:357.5,y:548},0).wait(1).to({scaleX:0.8766,scaleY:0.8766,rotation:5.5187,x:342.1,y:612.9},0).wait(1).to({scaleX:0.9307,scaleY:0.9307,rotation:2.2708,x:329,y:668.6},0).wait(1).to({regX:0,regY:0,scaleX:0.9686,scaleY:0.9686,rotation:0,x:324.5,y:707.5},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.9851,scaleY:0.9851,x:330.35,y:722.35,alpha:0.4726},0).wait(1).to({scaleX:0.9953,scaleY:0.9953,x:336.75,y:731.55,alpha:0.1491},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:344.5,y:735.95,alpha:0},0).to({_off:true},16).wait(31));

	// coins__8
	this.instance_9 = new lib.animation_coins("synched",0);
	this.instance_9.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(188).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5871,scaleY:0.5871,x:321.75,y:547,alpha:0.2454},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6345,scaleY:0.6345,rotation:-4.1282,x:336.95,y:487.9},0).wait(1).to({scaleX:0.6552,scaleY:0.6552,rotation:-7.9208,x:351,y:457.45},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,rotation:-10.6284,x:361.1,y:435.8},0).wait(1).to({scaleX:0.6784,scaleY:0.6784,rotation:-12.1849,x:366.9,y:423.25},0).wait(1).to({regX:0.1,scaleX:0.6818,scaleY:0.6818,rotation:-12.7964,x:372.35,y:417.85},0).wait(1).to({regX:-4.7,scaleX:0.6899,scaleY:0.6899,rotation:-12.4315,x:367.75,y:426.8},0).wait(1).to({scaleX:0.7074,scaleY:0.7074,rotation:-11.6523,x:364.75,y:444.4},0).wait(1).to({scaleX:0.7352,scaleY:0.7352,rotation:-10.4117,x:359.95,y:472.4},0).wait(1).to({scaleX:0.7744,scaleY:0.7744,rotation:-8.6616,x:353.2,y:511.95},0).wait(1).to({scaleX:0.8261,scaleY:0.8261,rotation:-6.3583,x:344.35,y:564},0).wait(1).to({scaleX:0.8908,scaleY:0.8908,rotation:-3.4717,x:333.15,y:629.15},0).wait(1).to({regX:0,regY:0,scaleX:0.9686,scaleY:0.9686,rotation:0,x:324.5,y:707.5},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.991,scaleY:0.991,x:319.8,y:727.6,alpha:0.2872},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:324.5,y:735.95,alpha:0},0).to({_off:true},3).wait(48));

	// coins__7
	this.instance_10 = new lib.animation_coins("synched",0);
	this.instance_10.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(183).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5871,scaleY:0.5871,x:321.75,y:547,alpha:0.2454},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6345,scaleY:0.6345,rotation:2.4997,x:303.4,y:487.6},0).wait(1).to({scaleX:0.6552,scaleY:0.6552,rotation:4.7963,x:286.8,y:456.95},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,rotation:6.4357,x:274.85,y:435.05},0).wait(1).to({scaleX:0.6784,scaleY:0.6784,rotation:7.3782,x:268.05,y:422.45},0).wait(1).to({regX:0.1,regY:0,scaleX:0.6818,scaleY:0.6818,rotation:7.7485,x:268.55,y:418.1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6979,scaleY:0.6979,rotation:7.3121,x:268.35,y:433.95},0).wait(1).to({scaleX:0.7459,scaleY:0.7459,rotation:6.0173,x:277.45,y:482.35},0).wait(1).to({scaleX:0.826,scaleY:0.826,rotation:3.851,x:292.75,y:563.3},0).wait(1).to({scaleX:0.9108,scaleY:0.9108,rotation:1.5601,x:308.8,y:649.05},0).wait(1).to({regX:0,regY:0,scaleX:0.9686,scaleY:0.9686,rotation:0,x:324.5,y:707.5},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.9793,scaleY:0.9793,x:319.85,y:717.1,alpha:0.6574},0).wait(1).to({scaleX:0.9877,scaleY:0.9877,x:319.8,y:724.65,alpha:0.3925},0).wait(1).to({scaleX:0.9937,scaleY:0.9937,y:730.15,alpha:0.1989},0).wait(1).to({scaleX:0.9978,scaleY:0.9978,x:319.75,y:733.8,alpha:0.0701},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:324.5,y:735.95,alpha:0},0).to({_off:true},7).wait(48));

	// coins__6
	this.instance_11 = new lib.animation_coins("synched",0);
	this.instance_11.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(179).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5828,scaleY:0.5828,x:321.75,y:551.55,alpha:0.1131},0).wait(1).to({scaleX:0.5934,scaleY:0.5934,x:321.7,y:540.4,alpha:0.4368},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6345,scaleY:0.6345,rotation:-4.1282,x:321.55,y:497.65},0).wait(1).to({scaleX:0.6552,scaleY:0.6552,rotation:-7.9208,x:321.45,y:476.2},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,rotation:-10.6284,x:321.4,y:460.9},0).wait(1).to({scaleX:0.6784,scaleY:0.6784,rotation:-12.1849,y:452.1},0).wait(1).to({regX:0.1,scaleX:0.6818,scaleY:0.6818,rotation:-12.7964,x:324.55,y:448.1},0).wait(1).to({regX:-4.7,scaleX:0.6922,scaleY:0.6922,rotation:-12.3316,x:321.25,y:458.2},0).wait(1).to({scaleX:0.7155,scaleY:0.7155,rotation:-11.2924,x:321.15,y:479.2},0).wait(1).to({scaleX:0.7533,scaleY:0.7533,rotation:-9.6032,x:320.95,y:513.4},0).wait(1).to({scaleX:0.8074,scaleY:0.8074,rotation:-7.1898,x:320.7,y:562.15},0).wait(1).to({scaleX:0.8791,scaleY:0.8791,rotation:-3.9939,x:320.3,y:626.8},0).wait(1).to({regX:0,regY:0,scaleX:0.9686,scaleY:0.9686,rotation:0,x:324.5,y:707.5},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.9851,scaleY:0.9851,x:319.8,y:722.35,alpha:0.4726},0).wait(1).to({scaleX:0.9953,scaleY:0.9953,x:319.75,y:731.55,alpha:0.1491},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:324.5,y:735.95,alpha:0},0).to({_off:true},11).wait(48));

	// coins_5
	this.instance_12 = new lib.animation_coins("synched",0);
	this.instance_12.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(174).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5871,scaleY:0.5871,x:321.75,y:547,alpha:0.2454},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6488,scaleY:0.6488,rotation:9.0832,x:321.5,y:481.9},0).wait(1).to({scaleX:0.6734,scaleY:0.6734,rotation:15.1457,y:455.8},0).wait(1).to({regX:0.1,scaleX:0.6818,scaleY:0.6818,rotation:17.2021,x:324.55,y:448.05},0).wait(1).to({regX:-4.7,scaleX:0.6905,scaleY:0.6905,rotation:16.6816,x:321.35,y:454.95},0).wait(1).to({scaleX:0.7141,scaleY:0.7141,rotation:15.2617,x:321.2,y:476.4},0).wait(1).to({scaleX:0.7556,scaleY:0.7556,rotation:12.7734,x:321,y:514.05},0).wait(1).to({scaleX:0.8133,scaleY:0.8133,rotation:9.3113,x:320.7,y:566.4},0).wait(1).to({scaleX:0.8766,scaleY:0.8766,rotation:5.5187,x:320.3,y:623.8},0).wait(1).to({scaleX:0.9307,scaleY:0.9307,rotation:2.2708,x:320.05,y:673.05},0).wait(1).to({regX:0,regY:0,scaleX:0.9686,scaleY:0.9686,rotation:0,x:324.5,y:707.5},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.9851,scaleY:0.9851,x:319.8,y:722.35,alpha:0.4726},0).wait(1).to({scaleX:0.9953,scaleY:0.9953,x:319.75,y:731.55,alpha:0.1491},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:324.5,y:735.95,alpha:0},0).to({_off:true},18).wait(48));

	// coins__4
	this.instance_13 = new lib.animation_coins("synched",0);
	this.instance_13.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(168).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5871,scaleY:0.5871,x:321.75,y:547,alpha:0.2454},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6345,scaleY:0.6345,rotation:-4.1282,x:336.95,y:487.9},0).wait(1).to({scaleX:0.6552,scaleY:0.6552,rotation:-7.9208,x:351,y:457.45},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,rotation:-10.6284,x:361.1,y:435.8},0).wait(1).to({scaleX:0.6784,scaleY:0.6784,rotation:-12.1849,x:366.9,y:423.25},0).wait(1).to({regX:0.1,scaleX:0.6818,scaleY:0.6818,rotation:-12.7964,x:372.35,y:417.85},0).wait(1).to({regX:-4.7,scaleX:0.6899,scaleY:0.6899,rotation:-12.4315,x:367.75,y:426.8},0).wait(1).to({scaleX:0.7074,scaleY:0.7074,rotation:-11.6523,x:364.75,y:444.4},0).wait(1).to({scaleX:0.7352,scaleY:0.7352,rotation:-10.4117,x:359.95,y:472.4},0).wait(1).to({scaleX:0.7744,scaleY:0.7744,rotation:-8.6616,x:353.2,y:511.95},0).wait(1).to({scaleX:0.8261,scaleY:0.8261,rotation:-6.3583,x:344.35,y:564},0).wait(1).to({scaleX:0.8908,scaleY:0.8908,rotation:-3.4717,x:333.15,y:629.15},0).wait(1).to({regX:0,regY:0,scaleX:0.9686,scaleY:0.9686,rotation:0,x:324.5,y:707.5},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.991,scaleY:0.991,x:319.8,y:727.6,alpha:0.2872},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:324.5,y:735.95,alpha:0},0).to({_off:true},1).wait(70));

	// coins__3
	this.instance_14 = new lib.animation_coins("synched",0);
	this.instance_14.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(163).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5871,scaleY:0.5871,x:321.75,y:547,alpha:0.2454},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6345,scaleY:0.6345,rotation:2.4997,x:303.4,y:487.6},0).wait(1).to({scaleX:0.6552,scaleY:0.6552,rotation:4.7963,x:286.8,y:456.95},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,rotation:6.4357,x:274.85,y:435.05},0).wait(1).to({scaleX:0.6784,scaleY:0.6784,rotation:7.3782,x:268.05,y:422.45},0).wait(1).to({regX:0.1,regY:0,scaleX:0.6818,scaleY:0.6818,rotation:7.7485,x:268.55,y:418.1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6979,scaleY:0.6979,rotation:7.3121,x:268.35,y:433.95},0).wait(1).to({scaleX:0.7459,scaleY:0.7459,rotation:6.0173,x:277.45,y:482.35},0).wait(1).to({scaleX:0.826,scaleY:0.826,rotation:3.851,x:292.75,y:563.3},0).wait(1).to({scaleX:0.9108,scaleY:0.9108,rotation:1.5601,x:308.8,y:649.05},0).wait(1).to({regX:0,regY:0,scaleX:0.9686,scaleY:0.9686,rotation:0,x:324.5,y:707.5},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.9793,scaleY:0.9793,x:319.85,y:717.1,alpha:0.6574},0).wait(1).to({scaleX:0.9877,scaleY:0.9877,x:319.8,y:724.65,alpha:0.3925},0).wait(1).to({scaleX:0.9937,scaleY:0.9937,y:730.15,alpha:0.1989},0).wait(1).to({scaleX:0.9978,scaleY:0.9978,x:319.75,y:733.8,alpha:0.0701},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:324.5,y:735.95,alpha:0},0).to({_off:true},5).wait(70));

	// coins__2
	this.instance_15 = new lib.animation_coins("synched",0);
	this.instance_15.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(159).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5828,scaleY:0.5828,x:321.75,y:551.55,alpha:0.1131},0).wait(1).to({scaleX:0.5934,scaleY:0.5934,x:321.7,y:540.4,alpha:0.4368},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6345,scaleY:0.6345,rotation:-4.1282,x:321.55,y:497.65},0).wait(1).to({scaleX:0.6552,scaleY:0.6552,rotation:-7.9208,x:321.45,y:476.2},0).wait(1).to({scaleX:0.6699,scaleY:0.6699,rotation:-10.6284,x:321.4,y:460.9},0).wait(1).to({scaleX:0.6784,scaleY:0.6784,rotation:-12.1849,y:452.1},0).wait(1).to({regX:0.1,scaleX:0.6818,scaleY:0.6818,rotation:-12.7964,x:324.55,y:448.1},0).wait(1).to({regX:-4.7,scaleX:0.6922,scaleY:0.6922,rotation:-12.3316,x:321.25,y:458.2},0).wait(1).to({scaleX:0.7155,scaleY:0.7155,rotation:-11.2924,x:321.15,y:479.2},0).wait(1).to({scaleX:0.7533,scaleY:0.7533,rotation:-9.6032,x:320.95,y:513.4},0).wait(1).to({scaleX:0.8074,scaleY:0.8074,rotation:-7.1898,x:320.7,y:562.15},0).wait(1).to({scaleX:0.8791,scaleY:0.8791,rotation:-3.9939,x:320.3,y:626.8},0).wait(1).to({regX:0,regY:0,scaleX:0.9686,scaleY:0.9686,rotation:0,x:324.5,y:707.5},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.9851,scaleY:0.9851,x:319.8,y:722.35,alpha:0.4726},0).wait(1).to({scaleX:0.9953,scaleY:0.9953,x:319.75,y:731.55,alpha:0.1491},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:324.5,y:735.95,alpha:0},0).to({_off:true},9).wait(70));

	// coins
	this.instance_16 = new lib.animation_coins("synched",0);
	this.instance_16.setTransform(324.55,555.55,0.5791,0.5791,0,0,0,0.1,0.1);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(154).to({_off:false},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.5871,scaleY:0.5871,x:321.75,y:547,alpha:0.2454},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.6119,scaleY:0.6119,x:324.55,y:521.15,alpha:1},0).to({scaleX:0.6488,scaleY:0.6488,rotation:9.0815,x:324.65,y:482.55},1).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.6734,scaleY:0.6734,rotation:15.1453,x:321.5,y:455.8},0).wait(1).to({regX:0.1,scaleX:0.6818,scaleY:0.6818,rotation:17.2021,x:324.55,y:448.05},0).wait(1).to({regX:-4.7,scaleX:0.6905,scaleY:0.6905,rotation:16.6816,x:321.35,y:454.95},0).wait(1).to({scaleX:0.7141,scaleY:0.7141,rotation:15.2617,x:321.2,y:476.4},0).wait(1).to({scaleX:0.7556,scaleY:0.7556,rotation:12.7734,x:321,y:514.05},0).wait(1).to({scaleX:0.8133,scaleY:0.8133,rotation:9.3113,x:320.7,y:566.4},0).wait(1).to({scaleX:0.8766,scaleY:0.8766,rotation:5.5187,x:320.3,y:623.8},0).wait(1).to({scaleX:0.9307,scaleY:0.9307,rotation:2.2708,x:320.05,y:673.05},0).wait(1).to({regX:0,regY:0,scaleX:0.9686,scaleY:0.9686,rotation:0,x:324.5,y:707.5},0).wait(1).to({regX:-4.7,regY:-0.1,scaleX:0.9851,scaleY:0.9851,x:319.8,y:722.35,alpha:0.4726},0).wait(1).to({scaleX:0.9953,scaleY:0.9953,x:319.75,y:731.55,alpha:0.1491},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:324.5,y:735.95,alpha:0},0).to({_off:true},16).wait(70));

	// win5
	this.instance_17 = new lib.slot__win_1();
	this.instance_17.setTransform(568.5,481.5,1,1,0,0,0,58.5,58.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(169).to({_off:false},0).to({regX:58.6,scaleX:1.5804,scaleY:1.5804,x:571.1,y:481.55},4).to({scaleX:1.0598,scaleY:1.0598,x:572.1},4).to({_off:true},1).wait(77));

	// win4
	this.instance_18 = new lib.slot__win_1();
	this.instance_18.setTransform(445.85,481.5,1,1,0,0,0,58.5,58.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(165).to({_off:false},0).to({regX:58.6,regY:58.6,scaleX:1.5468,scaleY:1.5468,x:445.55,y:481.65},4).to({regY:58.5,scaleX:1.0598,scaleY:1.0598,x:442.9,y:481.55},4).to({_off:true},1).wait(81));

	// win3
	this.instance_19 = new lib.slot__win_1();
	this.instance_19.setTransform(319.9,481.5,1,1,0,0,0,58.5,58.5);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(161).to({_off:false},0).to({regX:58.6,scaleX:1.5804,scaleY:1.5804,x:321,y:481.55},4).to({scaleX:1.0598,scaleY:1.0598,x:319.45},4).to({_off:true},1).wait(85));

	// win2
	this.instance_20 = new lib.slot__win_1();
	this.instance_20.setTransform(192.45,481.5,1,1,0,0,0,58.5,58.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(157).to({_off:false},0).to({regY:58.6,scaleX:1.5475,scaleY:1.5475,x:194.95,y:481.65},4).to({regX:58.6,regY:58.5,scaleX:1.0598,scaleY:1.0598,x:196.05,y:481.55},4).to({_off:true},1).wait(89));

	// win1
	this.instance_21 = new lib.slot__win_1();
	this.instance_21.setTransform(69.5,481.5,1,1,0,0,0,58.5,58.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(153).to({_off:false},0).to({scaleX:1.5126,scaleY:1.5126,x:69.55},4).to({regX:58.6,scaleX:1.0598,scaleY:1.0598,y:481.55},4).to({_off:true},1).wait(27).to({_off:false,regX:58.5,scaleX:1,scaleY:1,x:568.5,y:481.5},0).to({regX:58.6,scaleX:1.5804,scaleY:1.5804,x:571.1,y:481.55},4).to({scaleX:1.0598,scaleY:1.0598,x:572.1},4).to({_off:true},1).wait(57));

	// win9
	this.instance_22 = new lib.slot__win_1();
	this.instance_22.setTransform(445.85,481.5,1,1,0,0,0,58.5,58.5);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(185).to({_off:false},0).to({regX:58.6,regY:58.6,scaleX:1.5468,scaleY:1.5468,x:445.55,y:481.65},4).to({regY:58.5,scaleX:1.0598,scaleY:1.0598,x:442.9,y:481.55},4).to({_off:true},1).wait(61));

	// win8
	this.instance_23 = new lib.slot__win_1();
	this.instance_23.setTransform(319.9,481.5,1,1,0,0,0,58.5,58.5);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(181).to({_off:false},0).to({regX:58.6,scaleX:1.5804,scaleY:1.5804,x:321,y:481.55},4).to({scaleX:1.0598,scaleY:1.0598,x:319.45},4).to({_off:true},1).wait(65));

	// win7
	this.instance_24 = new lib.slot__win_1();
	this.instance_24.setTransform(192.45,481.5,1,1,0,0,0,58.5,58.5);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(177).to({_off:false},0).to({regY:58.6,scaleX:1.5475,scaleY:1.5475,x:194.95,y:481.65},4).to({regX:58.6,regY:58.5,scaleX:1.0598,scaleY:1.0598,x:196.05,y:481.55},4).to({_off:true},1).wait(69));

	// win6
	this.instance_25 = new lib.slot__win_1();
	this.instance_25.setTransform(69.5,481.5,1,1,0,0,0,58.5,58.5);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(173).to({_off:false},0).to({scaleX:1.5126,scaleY:1.5126,x:69.55},4).to({regX:58.6,scaleX:1.0598,scaleY:1.0598,y:481.55},4).to({_off:true},1).wait(73));

	// slot_machine
	this.instance_26 = new lib.slot_machine();
	this.instance_26.setTransform(0,280);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(255));

	// slots_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egw/AcwMAAAg5fMBh/AAAMAAAA5fg");
	mask.setTransform(319.575,480.125);

	// slot_5
	this.instance_27 = new lib.animation_slot_4("synched",0);
	this.instance_27.setTransform(568.5,-1104);

	var maskedShapeInstanceList = [this.instance_27];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(1).to({startPosition:0},0).to({y:1556},43).to({y:1478.85},5).to({startPosition:0},1).to({y:-869.15},1).to({y:2028.5},46).to({y:1948.5},4).to({startPosition:0},1).to({y:-399.25},1).to({x:570,y:2968},46).to({y:2888},4).wait(102));

	// slot_4
	this.instance_28 = new lib.animation_slot_3("synched",0);
	this.instance_28.setTransform(445.5,-1104);

	var maskedShapeInstanceList = [this.instance_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({startPosition:0},0).to({y:1556},40).to({y:1478.85},5).to({startPosition:0},4).to({y:-869.15},1).to({y:2028.5},43).to({y:1948.5},4).to({startPosition:0},4).to({y:-399.25},1).to({y:3086},43).to({y:3006},4).wait(105));

	// slot_3
	this.instance_29 = new lib.animation_slot_2("synched",0);
	this.instance_29.setTransform(320.5,-1104);

	var maskedShapeInstanceList = [this.instance_29];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1).to({startPosition:0},0).to({y:1556},37).to({y:1478.85},5).to({startPosition:0},7).to({y:-869.15},1).to({y:2028.5},40).to({y:1948.5},4).to({startPosition:0},7).to({y:-399.25},1).to({y:2968},40).to({y:2888},4).wait(108));

	// slot_2
	this.instance_30 = new lib.animation_slot_1("synched",0);
	this.instance_30.setTransform(194.5,-1104);

	var maskedShapeInstanceList = [this.instance_30];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({startPosition:0},0).to({y:1556},34).to({y:1478.85},5).to({startPosition:0},10).to({y:-869.15},1).to({y:2028.5},37).to({y:1948.5},4).to({startPosition:0},10).to({y:-399.25},1).to({y:3086},37).to({y:3006},4).wait(111));

	// slot_1
	this.slot1 = new lib.animation_slot_5();
	this.slot1.name = "slot1";
	this.slot1.setTransform(71.5,-1104);

	var maskedShapeInstanceList = [this.slot1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.slot1).wait(1).to({y:1556},31).to({y:1478.85},5).wait(13).to({y:-869.15},1).to({y:2028.5},34).to({y:1948.5},4).wait(13).to({y:-399.25},1).to({y:3203},34).to({y:3123},4).wait(114));

	// btn_spin__3
	this.btn3 = new lib.btn_spin_1();
	this.btn3.name = "btn3";
	this.btn3.setTransform(320,758);
	this.btn3._off = true;
	new cjs.ButtonHelper(this.btn3, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn3).wait(102).to({_off:false},0).wait(153));

	// btn_spin__2
	this.btn2 = new lib.btn_spin_1();
	this.btn2.name = "btn2";
	this.btn2.setTransform(320,758);
	this.btn2._off = true;
	new cjs.ButtonHelper(this.btn2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(50).to({_off:false},0).to({_off:true},52).wait(153));

	// btn_spin
	this.btn1 = new lib.btn_spin_1();
	this.btn1.name = "btn1";
	this.btn1.setTransform(320,758);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn1).to({_off:true},50).wait(205));

	// books
	this.instance_31 = new lib.books();
	this.instance_31.setTransform(468,156);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(255));

	// lights
	this.instance_32 = new lib.lights();
	this.instance_32.setTransform(316.3,218.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(255));

	// txt_bonus
	this.instance_33 = new lib.txt_bonus();
	this.instance_33.setTransform(62,841);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(255));

	// bg
	this.instance_34 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(255));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(179.5,475,638.2,600.3);
// library properties:
lib.properties = {
	id: '3CD7B650EF02A149B9A9F982F406F5EE',
	width: 640,
	height: 960,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.png", id:"bg"},
		{src:"images/bg_book.png", id:"bg_book"},
		{src:"images/book_slots_01.png", id:"book_slots_01"},
		{src:"images/book_slots_02.png", id:"book_slots_02"},
		{src:"images/book_slots_03.png", id:"book_slots_03"},
		{src:"images/book_slots_04.png", id:"book_slots_04"},
		{src:"images/book_slots_05.png", id:"book_slots_05"},
		{src:"images/book_slots_win.png", id:"book_slots_win"},
		{src:"images/btn_spin.png", id:"btn_spin"},
		{src:"images/btn_spin_down.png", id:"btn_spin_down"},
		{src:"images/coins.png", id:"coins"},
		{src:"images/slot_machine.png", id:"slot_machine"},
		{src:"images/txt_app.png", id:"txt_app"},
		{src:"images/txt_bonus.png", id:"txt_bonus"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3CD7B650EF02A149B9A9F982F406F5EE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;