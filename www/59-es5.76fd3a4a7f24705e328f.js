(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{nD5p:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_nav",(function(){return d})),n.d(t,"ion_nav_link",(function(){return b})),n.d(t,"ion_nav_pop",(function(){return m})),n.d(t,"ion_nav_push",(function(){return g})),n.d(t,"ion_nav_set_root",(function(){return w}));var i=n("mrSG"),r=n("Twl7"),o=n("ttJE"),s=n("wSPg"),a=n("ocqh"),c=n("v7+D"),u=n("YNVt"),h=n("uYVq"),p=function(){function e(e,t){this.component=e,this.params=t,this.state=1}return e.prototype.init=function(e){return Object(i.b)(this,void 0,void 0,(function(){var t,n;return Object(i.e)(this,(function(i){switch(i.label){case 0:return this.state=2,this.element?[3,2]:(t=this.component,n=this,[4,Object(c.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)]);case 1:n.element=i.sent(),i.label=2;case 2:return[2]}}))}))},e.prototype._destroy=function(){Object(s.b)(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3},e}(),v=function(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var i=e.params;if(i===n)return!0;if(!i&&!n)return!0;if(!i||!n)return!1;var r=Object.keys(i),o=Object.keys(n);if(r.length!==o.length)return!1;for(var s=0,a=r;s<a.length;s++){var c=a[s];if(i[c]!==n[c])return!1}return!0},l=function(e,t){return e?e instanceof p?e:new p(e,t):null},d=function(){function e(e){Object(r.l)(this,e),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=Object(r.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(r.d)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(r.d)(this,"ionNavDidChange",3)}return e.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)},e.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},e.prototype.componentWillLoad=function(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var e=Object(r.e)(this);this.swipeGesture=o.b.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()},e.prototype.componentDidLoad=function(){return Object(i.b)(this,void 0,void 0,(function(){var e;return Object(i.e)(this,(function(t){switch(t.label){case 0:return this.rootChanged(),e=this,[4,n.e(2).then(n.bind(null,"itz+"))];case 1:return e.gesture=t.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged(),[2]}}))}))},e.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];Object(u.c)(n.element,a.e),n._destroy()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0},e.prototype.push=function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},i)},e.prototype.insert=function(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:i},r)},e.prototype.insertPages=function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)},e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},e.prototype.popTo=function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)},e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},e.prototype.removeIndex=function(e,t,n,i){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},i)},e.prototype.setRoot=function(e,t,n,i){return this.setPages([{page:e,params:t}],n,i)},e.prototype.setPages=function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},e.prototype.setRouteId=function(e,t,n){var r,o=this,s=this.getActiveSync();if(v(s,e,t))return Promise.resolve({changed:!1,element:s.element});var a,c=new Promise((function(e){return r=e})),u={updateURL:!1,viewIsReady:function(e){var t,n=new Promise((function(e){return t=e}));return r({changed:!0,element:e,markVisible:function(){return Object(i.b)(o,void 0,void 0,(function(){return Object(i.e)(this,(function(e){switch(e.label){case 0:return t(),[4,a];case 1:return e.sent(),[2]}}))}))}}),n}};if("root"===n)a=this.setRoot(e,t,u);else{var h=this.views.find((function(n){return v(n,e,t)}));h?a=this.popTo(h,Object.assign(Object.assign({},u),{direction:"back"})):"forward"===n?a=this.push(e,t,u):"back"===n&&(a=this.setRoot(e,t,Object.assign(Object.assign({},u),{direction:"back",animated:!0})))}return c},e.prototype.getRouteId=function(){return Object(i.b)(this,void 0,void 0,(function(){var e;return Object(i.e)(this,(function(t){return[2,(e=this.getActiveSync())?{id:e.element.tagName,params:e.params,element:e.element}:void 0]}))}))},e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},e.prototype.getLength=function(){return this.views.length},e.prototype.getActiveSync=function(){return this.views[this.views.length-1]},e.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},e.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},e.prototype.queueTrns=function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise((function(t,n){e.resolve=t,e.reject=n}));return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n},e.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}},e.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},e.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},e.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},e.prototype.runTransition=function(e){return Object(i.b)(this,void 0,void 0,(function(){var t,n,r,o;return Object(i.e)(this,(function(i){switch(i.label){case 0:if(i.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&1===n.state?[4,n.init(this.el)]:[3,2];case 1:i.sent(),i.label=2;case 2:return this.postViewInit(n,t,e),(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t?[4,this.transition(n,t,e)]:[3,4];case 3:return r=i.sent(),[3,5];case 4:r={hasCompleted:!0,requiresTransition:!1},i.label=5;case 5:return this.success(r,e),this.ionNavDidChange.emit(),[3,7];case 6:return o=i.sent(),this.failed(o,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}}))}))},e.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(s.b)(void 0!==e.removeStart,"removeView needs removeStart"),Object(s.b)(void 0!==e.removeCount,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var i=e.insertViews;if(i){Object(s.b)(i.length>0,"length can not be zero");var r=i.map((function(e){return e instanceof p?e:"page"in e?l(e.page,e.params):l(e,void 0)})).filter((function(e){return null!==e}));if(0===r.length)throw new Error("invalid views to insert");for(var o=0,a=r;o<a.length;o++){var c=a[o];c.delegate=e.opts.delegate;var u=c.nav;if(u&&u!==this)throw new Error("inserted view was already inserted");if(3===c.state)throw new Error("inserted view was already destroyed")}e.insertViews=r}},e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var i=e.removeStart;if(void 0!==i)for(var r=this.views,o=i+e.removeCount,s=r.length-1;s>=0;s--){var a=r[s];if((s<i||s>=o)&&a!==t)return a}},e.prototype.postViewInit=function(e,t,n){Object(s.b)(t||e,"Both leavingView and enteringView are null"),Object(s.b)(n.resolve,"resolve must be valid"),Object(s.b)(n.reject,"reject must be valid");var i,r=n.opts,o=n.insertViews,c=n.removeStart,h=n.removeCount;if(void 0!==c&&void 0!==h){Object(s.b)(c>=0,"removeStart can not be negative"),Object(s.b)(h>=0,"removeCount can not be negative"),i=[];for(var p=0;p<h;p++)(g=this.views[p+c])&&g!==e&&g!==t&&i.push(g);r.direction=r.direction||"back"}var v=this.views.length+(void 0!==o?o.length:0)-(void 0!==h?h:0);if(Object(s.b)(v>=0,"final balance can not be negative"),0===v)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){for(var l=n.insertStart,d=0,f=o;d<f.length;d++)this.insertViewAt(g=f[d],l),l++;n.enteringRequiresTransition&&(r.direction=r.direction||"forward")}if(i&&i.length>0){for(var b=0,m=i;b<m.length;b++){var g=m[b];Object(u.c)(g.element,a.c),Object(u.c)(g.element,a.d),Object(u.c)(g.element,a.e)}for(var w=0,y=i;w<y.length;w++)this.destroyView(g=y[w])}},e.prototype.transition=function(e,t,n){return Object(i.b)(this,void 0,void 0,(function(){var s,a,c,h,p,v,l,d=this;return Object(i.e)(this,(function(i){switch(i.label){case 0:return a=(s=n.opts).progressAnimation?function(e){return d.sbAni=e}:void 0,c=Object(r.e)(this),h=e.element,p=t&&t.element,v=Object.assign({mode:c,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||s.animationBuilder||o.b.get("navAnimation"),progressCallback:a,animated:this.animated&&o.b.getBoolean("animated",!0),enteringEl:h,leavingEl:p},s),[4,Object(u.e)(v)];case 1:return l=i.sent().hasCompleted,[2,this.transitionFinish(l,e,t,s)]}}))}))},e.prototype.transitionFinish=function(e,t,n,i){var r=e?t:n;return r&&this.cleanup(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}},e.prototype.insertViewAt=function(e,t){var n=this.views,i=n.indexOf(e);i>-1?(Object(s.b)(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(i,1)[0])):(Object(s.b)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))},e.prototype.removeView=function(e){Object(s.b)(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);Object(s.b)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)},e.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},e.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),i=t.length-1;i>=0;i--){var r=t[i],o=r.element;i>n?(Object(u.c)(o,a.e),this.destroyView(r)):i<n&&Object(u.d)(o,!0)}},e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()},e.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},e.prototype.onMove=function(e){this.sbAni&&this.sbAni.progressStep(e)},e.prototype.onEnd=function(e,t,n){var i=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish((function(){i.animationEnabled=!0}),{oneTimeCallback:!0});var r=e?-.001:.001;e?r+=Object(h.b)(new h.a(0,0),new h.a(.32,.72),new h.a(0,1),new h.a(1,1),t):(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),r+=Object(h.b)(new h.a(0,0),new h.a(1,0),new h.a(.68,.28),new h.a(1,1),t)),this.sbAni.progressEnd(e?1:0,r,n)}},e.prototype.render=function(){return Object(r.i)("slot",null)},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),e}(),f=function(e,t,n,i){var r=e.closest("ion-nav");if(r)if("forward"===t){if(void 0!==n)return r.push(n,i,{skipIfBusy:!0})}else if("root"===t){if(void 0!==n)return r.setRoot(n,i,{skipIfBusy:!0})}else if("back"===t)return r.pop({skipIfBusy:!0});return Promise.resolve(!1)},b=function(){function e(e){var t=this;Object(r.l)(this,e),this.routerDirection="forward",this.onClick=function(){return f(t.el,t.routerDirection,t.component,t.componentProps)}}return e.prototype.render=function(){return Object(r.i)(r.a,{onClick:this.onClick})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),e}(),m=function(){function e(e){var t=this;Object(r.l)(this,e),this.pop=function(){return f(t.el,"back")}}return e.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-pop] <ion-nav-pop> is deprecated. Use `<ion-nav-link routerDirection="back">` instead.')},e.prototype.render=function(){return Object(r.i)(r.a,{onClick:this.pop})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),e}(),g=function(){function e(e){var t=this;Object(r.l)(this,e),this.push=function(){return f(t.el,"forward",t.component,t.componentProps)}}return e.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.')},e.prototype.render=function(){return Object(r.i)(r.a,{onClick:this.push})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),e}(),w=function(){function e(e){var t=this;Object(r.l)(this,e),this.setRoot=function(){return f(t.el,"root",t.component,t.componentProps)}}return e.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-set-root] `<ion-nav-set-root component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent" routerDirection="root">` instead.')},e.prototype.render=function(){return Object(r.i)(r.a,{onClick:this.setRoot})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),e}()}}]);