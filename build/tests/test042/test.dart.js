(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var s=0;s<a.length;s++){var r=a[s]
var q=Object.keys(r)
for(var p=0;p<q.length;p++){var o=q[p]
var n=r[o]
if(typeof n=='function')n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){H.oa(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jX(this,a,b,c,true,false,e).prototype
return s}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var s=[]
for(var r=0;r<h.length;r++){var q=h[r]
if(typeof q=='string')q=a[q]
q.$callName=g[r]
s.push(q)}var q=s[0]
q.$R=e
q.$D=f
var p=i
if(typeof p=="number")p+=x
var o=h[0]
q.$stubName=o
var n=tearOff(s,j||0,p,c,o,d)
a[b]=n
if(c)q.$tearOff=n}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var s=0;s<w.length;s++){if(w[s]==C)continue
if(w[s][a])return w[s][a]}}var C={},H={jC:function jC(){},
m1:function(a,b){if(t.O.b(a))return new H.bY(a,b)
return new H.b5(a,b)},
kg:function(){return new P.dZ("No element")},
mn:function(a,b){var s=J.bi(a)
if(typeof s!=="number")return s.a8()
H.dU(a,0,s-1,b)},
dU:function(a,b,c,d){if(c-b<=32)H.mm(a,b,c,d)
else H.ml(a,b,c,d)},
mm:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.be(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a7()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
ml:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.d.a0(a7-a6+1,6),g=a6+h,f=a7-h,e=C.d.a0(a6+a7,2),d=e-h,c=e+h,b=J.be(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a7()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a7()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a7()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a7()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a7()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a7()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a7()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a7()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a7()
if(a4>0){s=a3
a3=a2
a2=s}b.l(a5,g,a)
b.l(a5,e,a1)
b.l(a5,f,a3)
b.l(a5,d,b.h(a5,a6))
b.l(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.v(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.ag()
if(n<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a7()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
q=m
r=l
break}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.ag()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a7()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a7()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ag()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.l(a5,a6,b.h(a5,a4))
b.l(a5,a4,a0)
a4=q+1
b.l(a5,a7,b.h(a5,a4))
b.l(a5,a4,a2)
H.dU(a5,a6,r-2,a8)
H.dU(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.v(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.v(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ag()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}H.dU(a5,r,q,a8)}else H.dU(a5,r,q,a8)},
H:function H(a){this.a=a},
i:function i(){},
br:function br(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b5:function b5(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.b=b},
cb:function cb(a,b){this.a=null
this.b=a
this.c=b},
cw:function cw(a,b){this.a=a
this.b=b},
eu:function eu(a,b){this.a=a
this.b=b},
c0:function c0(){},
eo:function eo(){},
bD:function bD(){},
ll:function(a){var s,r=H.lk(a)
if(r!=null)return r
s="minified:"+a
return s},
o2:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
e:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a1(a)
if(typeof s!="string")throw H.c(H.az(a))
return s},
ck:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dM:function(a){return H.m5(a)},
m5:function(a){var s,r,q
if(a instanceof P.G)return H.a3(H.cX(a),null)
if(J.cW(a)===C.K||t.o.b(a)){s=C.n(a)
if(H.kt(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.kt(q))return q}}return H.a3(H.cX(a),null)},
kt:function(a){var s=a!=="Object"&&a!==""
return s},
ks:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mf:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.m)(a),++r){q=a[r]
if(!H.bJ(q))throw H.c(H.az(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.d.ba(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.az(q))}return H.ks(p)},
me:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bJ(q))throw H.c(H.az(q))
if(q<0)throw H.c(H.az(q))
if(q>65535)return H.mf(a)}return H.ks(a)},
md:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.d.ba(s,10))>>>0,56320|s&1023)}throw H.c(P.au(a,0,1114111,null,null))},
by:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mc:function(a){var s=H.by(a).getFullYear()+0
return s},
ma:function(a){var s=H.by(a).getMonth()+1
return s},
m6:function(a){var s=H.by(a).getDate()+0
return s},
m7:function(a){var s=H.by(a).getHours()+0
return s},
m9:function(a){var s=H.by(a).getMinutes()+0
return s},
mb:function(a){var s=H.by(a).getSeconds()+0
return s},
m8:function(a){var s=H.by(a).getMilliseconds()+0
return s},
p:function(a){throw H.c(H.az(a))},
d:function(a,b){if(a==null)J.bi(a)
throw H.c(H.bN(a,b))},
bN:function(a,b){var s,r,q="index"
if(!H.bJ(b))return new P.a5(!0,b,q,null)
s=J.bi(a)
if(!(b<0)){if(typeof s!=="number")return H.p(s)
r=b>=s}else r=!0
if(r)return P.F(b,a,q,null,s)
return P.dN(b,q)},
nS:function(a,b,c){if(a>c)return P.au(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.au(b,a,c,"end",null)
return new P.a5(!0,b,"end",null)},
az:function(a){return new P.a5(!0,a,null,null)},
nM:function(a){if(typeof a!="number")throw H.c(H.az(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.dE()
s=new Error()
s.dartException=a
r=H.ob
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
ob:function(){return J.a1(this.dartException)},
o:function(a){throw H.c(a)},
m:function(a){throw H.c(P.bS(a))},
av:function(a){var s,r,q,p,o,n
a=H.lg(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.it(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
iu:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kD:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kp:function(a,b){return new H.dD(a,b==null?null:b.method)},
jD:function(a,b){var s=b==null,r=s?null:b.method
return new H.dp(a,r,s?null:b.receiver)},
fx:function(a){if(a==null)return new H.hN(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bg(a,a.dartException)
return H.nI(a)},
bg:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nI:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.d.ba(r,16)&8191)===10)switch(q){case 438:return H.bg(a,H.jD(H.e(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bg(a,H.kp(H.e(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.lo()
o=$.lp()
n=$.lq()
m=$.lr()
l=$.lu()
k=$.lv()
j=$.lt()
$.ls()
i=$.lx()
h=$.lw()
g=p.aj(s)
if(g!=null)return H.bg(a,H.jD(s,g))
else{g=o.aj(s)
if(g!=null){g.method="call"
return H.bg(a,H.jD(s,g))}else{g=n.aj(s)
if(g==null){g=m.aj(s)
if(g==null){g=l.aj(s)
if(g==null){g=k.aj(s)
if(g==null){g=j.aj(s)
if(g==null){g=m.aj(s)
if(g==null){g=i.aj(s)
if(g==null){g=h.aj(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bg(a,H.kp(s,g))}}return H.bg(a,new H.en(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cn()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bg(a,new P.a5(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cn()
return a},
jZ:function(a){var s
if(a==null)return new H.f7(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.f7(a)},
nU:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
o1:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.n("Unsupported number of arguments for wrapped closure"))},
bM:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o1)
a.$identity=s
return s},
lQ:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.i8().constructor.prototype):Object.create(new H.bQ(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ak
if(typeof r!=="number")return r.A()
$.ak=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.k9(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lM(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.k9(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lM:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lb,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lK:H.lJ
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
lN:function(a,b,c,d){var s=H.k8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
k9:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lP(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lN(r,!p,s,b)
if(r===0){p=$.ak
if(typeof p!=="number")return p.A()
$.ak=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.e(H.ju())+";return "+n+"."+H.e(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ak
if(typeof p!=="number")return p.A()
$.ak=p+1
m+=p
return new Function("return function("+m+"){return this."+H.e(H.ju())+"."+H.e(s)+"("+m+");}")()},
lO:function(a,b,c,d){var s=H.k8,r=H.lL
switch(b?-1:a){case 0:throw H.c(new H.dR("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lP:function(a,b){var s,r,q,p,o,n,m=H.ju(),l=$.k6
if(l==null)l=$.k6=H.k5("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lO(r,!p,s,b)
if(r===1){p="return function(){return this."+H.e(m)+"."+H.e(s)+"(this."+l+");"
o=$.ak
if(typeof o!=="number")return o.A()
$.ak=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.e(m)+"."+H.e(s)+"(this."+l+", "+n+");"
o=$.ak
if(typeof o!=="number")return o.A()
$.ak=o+1
return new Function(p+o+"}")()},
jX:function(a,b,c,d,e,f,g){return H.lQ(a,b,c,d,!!e,!!f,g)},
lJ:function(a,b){return H.fj(v.typeUniverse,H.cX(a.a),b)},
lK:function(a,b){return H.fj(v.typeUniverse,H.cX(a.c),b)},
k8:function(a){return a.a},
lL:function(a){return a.c},
ju:function(){var s=$.k7
return s==null?$.k7=H.k5("self"):s},
k5:function(a){var s,r,q,p=new H.bQ("self","target","receiver","name"),o=J.jB(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.jt("Field name "+a+" not found."))},
oa:function(a){throw H.c(new P.db(a))},
nY:function(a){return v.getIsolateTag(a)},
pc:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
o4:function(a){var s,r,q,p,o,n=$.la.$1(a),m=$.jg[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jk[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.l5.$2(a,n)
if(q!=null){m=$.jg[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jk[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jm(s)
$.jg[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jk[n]=s
return s}if(p==="-"){o=H.jm(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.le(a,s)
if(p==="*")throw H.c(P.kE(n))
if(v.leafTags[n]===true){o=H.jm(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.le(a,s)},
le:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.k0(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jm:function(a){return J.k0(a,!1,null,!!a.$it)},
o5:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jm(s)
else return J.k0(s,c,null,null)},
o_:function(){if(!0===$.k_)return
$.k_=!0
H.o0()},
o0:function(){var s,r,q,p,o,n,m,l
$.jg=Object.create(null)
$.jk=Object.create(null)
H.nZ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lf.$1(o)
if(n!=null){m=H.o5(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nZ:function(){var s,r,q,p,o,n,m=C.A()
m=H.bL(C.B,H.bL(C.C,H.bL(C.o,H.bL(C.o,H.bL(C.D,H.bL(C.E,H.bL(C.F(C.n),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.la=new H.jh(p)
$.l5=new H.ji(o)
$.lf=new H.jj(n)},
bL:function(a,b){return a(b)||b},
lY:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.ha("Illegal RegExp pattern ("+String(n)+")",a))},
lh:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nT:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lg:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
li:function(a,b,c){var s=H.o9(a,b,c)
return s},
o9:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lg(b),'g'),H.nT(c))},
it:function it(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dD:function dD(a,b){this.a=a
this.b=b},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a){this.a=a},
hN:function hN(a){this.a=a},
f7:function f7(a){this.a=a
this.b=null},
bk:function bk(){},
ic:function ic(){},
i8:function i8(){},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dR:function dR(a){this.a=a},
u:function u(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hi:function hi(a){this.a=a},
hm:function hm(a,b){this.a=a
this.b=b
this.c=null},
aE:function aE(a){this.a=a},
ds:function ds(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
hh:function hh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bI:function(a){return a},
ay:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bN(b,a))},
mW:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nS(a,b,c))
return b},
ch:function ch(){},
bu:function bu(){},
b7:function b7(){},
cg:function cg(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
ci:function ci(){},
dC:function dC(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
mj:function(a,b){var s=b.c
return s==null?b.c=H.jS(a,b.z,!0):s},
kv:function(a,b){var s=b.c
return s==null?b.c=H.cP(a,"kd",[b.z]):s},
kw:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kw(a.z)
return s===11||s===12},
mi:function(a){return a.cy},
nV:function(a){return H.jT(v.typeUniverse,a,!1)},
aQ:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aQ(a,s,a0,a1)
if(r===s)return b
return H.kX(a,r,!0)
case 7:s=b.z
r=H.aQ(a,s,a0,a1)
if(r===s)return b
return H.jS(a,r,!0)
case 8:s=b.z
r=H.aQ(a,s,a0,a1)
if(r===s)return b
return H.kW(a,r,!0)
case 9:q=b.Q
p=H.cV(a,q,a0,a1)
if(p===q)return b
return H.cP(a,b.z,p)
case 10:o=b.z
n=H.aQ(a,o,a0,a1)
m=b.Q
l=H.cV(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jQ(a,n,l)
case 11:k=b.z
j=H.aQ(a,k,a0,a1)
i=b.Q
h=H.nF(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kV(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cV(a,g,a0,a1)
o=b.z
n=H.aQ(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jR(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fA("Attempted to substitute unexpected RTI kind "+c))}},
cV:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aQ(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nG:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aQ(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nF:function(a,b,c,d){var s,r=b.a,q=H.cV(a,r,c,d),p=b.b,o=H.cV(a,p,c,d),n=b.c,m=H.nG(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eL()
s.a=q
s.b=o
s.c=m
return s},
pe:function(a,b){a[v.arrayRti]=b
return a},
nN:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lb(s)
return a.$S()}return null},
lc:function(a,b){var s
if(H.kw(b))if(a instanceof H.bk){s=H.nN(a)
if(s!=null)return s}return H.cX(a)},
cX:function(a){var s
if(a instanceof P.G){s=a.$ti
return s!=null?s:H.jU(a)}if(Array.isArray(a))return H.mS(a)
return H.jU(J.cW(a))},
mS:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n1:function(a){var s=a.$ti
return s!=null?s:H.jU(a)},
jU:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.n2(a,s)},
n2:function(a,b){var s=a instanceof H.bk?a.__proto__.__proto__.constructor:b,r=H.mQ(v.typeUniverse,s.name)
b.$ccache=r
return r},
lb:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jT(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
n0:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cS(q,a,H.n6)
if(!H.aA(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.cS(q,a,H.n9)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bJ
else if(s===t.Y||s===t.H)r=H.n5
else if(s===t.R)r=H.n7
else r=s===t.v?H.l1:null
if(r!=null)return H.cS(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.o3)){q.r="$i"+p
return H.cS(q,a,H.n8)}}else if(p===7)return H.cS(q,a,H.mZ)
return H.cS(q,a,H.mX)},
cS:function(a,b,c){a.b=c
return a.b(b)},
n_:function(a){var s,r,q=this
if(!H.aA(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.mV
else if(q===t.K)r=H.mT
else r=H.mY
q.a=r
return q.a(a)},
ny:function(a){var s,r=a.y
if(!H.aA(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
mX:function(a){var s=this
if(a==null)return H.ny(s)
return H.L(v.typeUniverse,H.lc(a,s),null,s,null)},
mZ:function(a){if(a==null)return!0
return this.z.b(a)},
n8:function(a){var s=this,r=s.r
if(a instanceof P.G)return!!a[r]
return!!J.cW(a)[r]},
pb:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.l_(a,s)},
mY:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.l_(a,s)},
l_:function(a,b){throw H.c(H.mG(H.kP(a,H.lc(a,b),H.a3(b,null))))},
kP:function(a,b,c){var s=P.h3(a),r=H.a3(b==null?H.cX(a):b,null)
return s+": type '"+H.e(r)+"' is not a subtype of type '"+H.e(c)+"'"},
mG:function(a){return new H.cN("TypeError: "+a)},
X:function(a,b){return new H.cN("TypeError: "+H.kP(a,null,b))},
n6:function(a){return a!=null},
mT:function(a){return a},
n9:function(a){return!0},
mV:function(a){return a},
l1:function(a){return!0===a||!1===a},
oY:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.X(a,"bool"))},
p_:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.X(a,"bool"))},
oZ:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.X(a,"bool?"))},
p0:function(a){if(typeof a=="number")return a
throw H.c(H.X(a,"double"))},
p2:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.X(a,"double"))},
p1:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.X(a,"double?"))},
bJ:function(a){return typeof a=="number"&&Math.floor(a)===a},
p3:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.X(a,"int"))},
p5:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.X(a,"int"))},
p4:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.X(a,"int?"))},
n5:function(a){return typeof a=="number"},
p6:function(a){if(typeof a=="number")return a
throw H.c(H.X(a,"num"))},
p8:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.X(a,"num"))},
p7:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.X(a,"num?"))},
n7:function(a){return typeof a=="string"},
p9:function(a){if(typeof a=="string")return a
throw H.c(H.X(a,"String"))},
mU:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.X(a,"String"))},
pa:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.X(a,"String?"))},
nB:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.c.A(r,H.a3(a[q],b))
return s},
l0:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.d(a6,i)
l=C.c.A(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.c.A(" extends ",H.a3(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.a3(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.c.A(a3,H.a3(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.c.A(a3,H.a3(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.k3(H.a3(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.e(a1)},
a3:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a3(a.z,b)
return s}if(l===7){r=a.z
s=H.a3(r,b)
q=r.y
return J.k3(q===11||q===12?C.c.A("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.e(H.a3(a.z,b))+">"
if(l===9){p=H.nH(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nB(o,b)+">"):p}if(l===11)return H.l0(a,b,null)
if(l===12)return H.l0(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
nH:function(a){var s,r=H.lk(a)
if(r!=null)return r
s="minified:"+a
return s},
kY:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mQ:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jT(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cQ(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cP(a,b,q)
n[b]=o
return o}else return m},
mO:function(a,b){return H.kZ(a.tR,b)},
mN:function(a,b){return H.kZ(a.eT,b)},
jT:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.kU(H.kS(a,null,b,c))
r.set(b,s)
return s},
fj:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.kU(H.kS(a,b,c,!0))
q.set(c,r)
return r},
mP:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jQ(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aP:function(a,b){b.a=H.n_
b.b=H.n0
return b},
cQ:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ad(null,null)
s.y=b
s.cy=c
r=H.aP(a,s)
a.eC.set(c,r)
return r},
kX:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mL(a,b,r,c)
a.eC.set(r,s)
return s},
mL:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aA(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ad(null,null)
q.y=6
q.z=b
q.cy=c
return H.aP(a,q)},
jS:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mK(a,b,r,c)
a.eC.set(r,s)
return s},
mK:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aA(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jl(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jl(q.z))return q
else return H.mj(a,b)}}p=new H.ad(null,null)
p.y=7
p.z=b
p.cy=c
return H.aP(a,p)},
kW:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mI(a,b,r,c)
a.eC.set(r,s)
return s},
mI:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aA(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cP(a,"kd",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ad(null,null)
q.y=8
q.z=b
q.cy=c
return H.aP(a,q)},
mM:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ad(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aP(a,s)
a.eC.set(q,r)
return r},
fi:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mH:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cP:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fi(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ad(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aP(a,r)
a.eC.set(p,q)
return q},
jQ:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fi(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ad(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aP(a,o)
a.eC.set(q,n)
return n},
kV:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fi(m)
if(j>0){s=l>0?",":""
r=H.fi(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mH(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ad(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aP(a,o)
a.eC.set(q,r)
return r},
jR:function(a,b,c,d){var s,r=b.cy+("<"+H.fi(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mJ(a,b,c,r,d)
a.eC.set(r,s)
return s},
mJ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aQ(a,b,r,0)
m=H.cV(a,c,r,0)
return H.jR(a,n,m,c!==m)}}l=new H.ad(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aP(a,l)},
kS:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kU:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.mA(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kT(a,r,g,f,!1)
else if(q===46)r=H.kT(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.aO(a.u,a.e,f.pop()))
break
case 94:f.push(H.mM(a.u,f.pop()))
break
case 35:f.push(H.cQ(a.u,5,"#"))
break
case 64:f.push(H.cQ(a.u,2,"@"))
break
case 126:f.push(H.cQ(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.jP(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cP(p,n,o))
else{m=H.aO(p,a.e,n)
switch(m.y){case 11:f.push(H.jR(p,m,o,a.n))
break
default:f.push(H.jQ(p,m,o))
break}}break
case 38:H.mB(a,f)
break
case 42:l=a.u
f.push(H.kX(l,H.aO(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.jS(l,H.aO(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.kW(l,H.aO(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.eL()
j=p.sEA
i=p.sEA
n=f.pop()
if(typeof n=="number")switch(n){case-1:j=f.pop()
break
case-2:i=f.pop()
break
default:f.push(n)
break}else f.push(n)
o=f.splice(a.p)
H.jP(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.kV(p,H.aO(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.jP(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.mD(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.aO(a.u,a.e,h)},
mA:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kT:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.kY(s,o.z)[p]
if(n==null)H.o('No "'+p+'" in "'+H.mi(o)+'"')
d.push(H.fj(s,o,n))}else d.push(p)
return m},
mB:function(a,b){var s=b.pop()
if(0===s){b.push(H.cQ(a.u,1,"0&"))
return}if(1===s){b.push(H.cQ(a.u,4,"1&"))
return}throw H.c(P.fA("Unexpected extended operation "+H.e(s)))},
aO:function(a,b,c){if(typeof c=="string")return H.cP(a,c,a.sEA)
else if(typeof c=="number")return H.mC(a,b,c)
else return c},
jP:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aO(a,b,c[s])},
mD:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aO(a,b,c[s])},
mC:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fA("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fA("Bad index "+c+" for "+b.i(0)))},
L:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aA(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aA(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.L(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.L(a,b.z,c,d,e)
if(p===6){s=d.z
return H.L(a,b,c,s,e)}if(r===8){if(!H.L(a,b.z,c,d,e))return!1
return H.L(a,H.kv(a,b),c,d,e)}if(r===7){s=H.L(a,b.z,c,d,e)
return s}if(p===8){if(H.L(a,b,c,d.z,e))return!0
return H.L(a,b,c,H.kv(a,d),e)}if(p===7){s=H.L(a,b,c,d.z,e)
return s}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Z)return!0
if(p===12){if(b===t.g)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.L(a,k,c,j,e)||!H.L(a,j,e,k,c))return!1}return H.l2(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.l2(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.n4(a,b,c,d,e)}return!1},
l2:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.L(a3,a4.z,a5,a6.z,a7))return!1
s=a4.Q
r=a6.Q
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!H.L(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.L(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.L(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!H.L(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
n4:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.L(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.kY(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.L(a,H.fj(a,b,l[p]),c,r[p],e))return!1
return!0},
jl:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aA(a))if(r!==7)if(!(r===6&&H.jl(a.z)))s=r===8&&H.jl(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
o3:function(a){var s
if(!H.aA(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aA:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kZ:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ad:function ad(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eL:function eL(){this.c=this.b=this.a=null},
eG:function eG(){},
cN:function cN(a){this.a=a},
lk:function(a){return v.mangledGlobalNames[a]},
o6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k0:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fu:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.k_==null){H.o_()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.kE("Return interceptor for "+H.e(s(a,o))))}q=a.constructor
p=q==null?null:q[J.ki()]
if(p!=null)return p
p=H.o4(a)
if(p!=null)return p
if(typeof a=="function")return C.M
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){Object.defineProperty(q,J.ki(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
ki:function(){var s=$.kQ
return s==null?$.kQ=v.getIsolateTag("_$dart_js"):s},
lV:function(a){if(!H.bJ(a))throw H.c(P.k4(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.au(a,0,4294967295,"length",null))
return J.lW(new Array(a))},
kh:function(a){if(!H.bJ(a)||a<0)throw H.c(P.jt("Length must be a non-negative integer: "+H.e(a)))
return new Array(a)},
lW:function(a){return J.jB(a)},
jB:function(a){a.fixed$length=Array
return a},
lX:function(a,b){return J.d1(a,b)},
cW:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c6.prototype
return J.c5.prototype}if(typeof a=="string")return J.aD.prototype
if(a==null)return J.c7.prototype
if(typeof a=="boolean")return J.hg.prototype
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
return a}if(a instanceof P.G)return a
return J.fu(a)},
nW:function(a){if(typeof a=="number")return J.b2.prototype
if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
return a}if(a instanceof P.G)return a
return J.fu(a)},
be:function(a){if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
return a}if(a instanceof P.G)return a
return J.fu(a)},
jY:function(a){if(a==null)return a
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
return a}if(a instanceof P.G)return a
return J.fu(a)},
nX:function(a){if(typeof a=="number")return J.b2.prototype
if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(!(a instanceof P.G))return J.bC.prototype
return a},
bf:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
return a}if(a instanceof P.G)return a
return J.fu(a)},
k3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nW(a).A(a,b)},
v:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cW(a).p(a,b)},
d0:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o2(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.be(a).h(a,b)},
lC:function(a,b,c){return J.bf(a).fC(a,b,c)},
lD:function(a,b,c,d){return J.bf(a).fT(a,b,c,d)},
d1:function(a,b){return J.nX(a).aO(a,b)},
jr:function(a,b){return J.be(a).L(a,b)},
js:function(a,b){return J.jY(a).F(a,b)},
lE:function(a,b){return J.jY(a).I(a,b)},
lF:function(a){return J.bf(a).gd6(a)},
lG:function(a){return J.bf(a).gd9(a)},
Z:function(a){return J.cW(a).gS(a)},
bh:function(a){return J.jY(a).gN(a)},
bi:function(a){return J.be(a).gj(a)},
lH:function(a,b){return J.bf(a).hB(a,b)},
a1:function(a){return J.cW(a).i(a)},
a:function a(){},
hg:function hg(){},
c7:function c7(){},
b3:function b3(){},
dJ:function dJ(){},
bC:function bC(){},
ag:function ag(){},
a8:function a8(){},
dn:function dn(){},
R:function R(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b2:function b2(){},
c6:function c6(){},
c5:function c5(){},
aD:function aD(){}},P={
ms:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nJ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bM(new P.iT(q),1)).observe(s,{childList:true})
return new P.iS(q,s,r)}else if(self.setImmediate!=null)return P.nK()
return P.nL()},
mt:function(a){self.scheduleImmediate(H.bM(new P.iU(a),0))},
mu:function(a){self.setImmediate(H.bM(new P.iV(a),0))},
mv:function(a){P.jK(C.j,a)},
jK:function(a,b){var s=C.d.a0(a.a,1000)
return P.mE(s<0?0:s,b)},
kC:function(a,b){var s=C.d.a0(a.a,1000)
return P.mF(s<0?0:s,b)},
mE:function(a,b){var s=new P.cM()
s.ee(a,b)
return s},
mF:function(a,b){var s=new P.cM()
s.ef(a,b)
return s},
oW:function(a){return new P.bG(a,1)},
mw:function(){return C.R},
mx:function(a){return new P.bG(a,3)},
nb:function(a){return new P.cJ(a)},
nx:function(){var s,r
for(s=$.bK;s!=null;s=$.bK){$.cU=null
r=s.b
$.bK=r
if(r==null)$.cT=null
s.a.$0()}},
nE:function(){$.jV=!0
try{P.nx()}finally{$.cU=null
$.jV=!1
if($.bK!=null)$.k2().$1(P.l6())}},
nC:function(a){var s=new P.ev(a),r=$.cT
if(r==null){$.bK=$.cT=s
if(!$.jV)$.k2().$1(P.l6())}else $.cT=r.b=s},
nD:function(a){var s,r,q,p=$.bK
if(p==null){P.nC(a)
$.cU=$.cT
return}s=new P.ev(a)
r=$.cU
if(r==null){s.b=p
$.bK=$.cU=s}else{q=r.b
s.b=q
$.cU=r.b=s
if(q==null)$.cT=s}},
kB:function(a,b){var s=$.aj
if(s===C.e)return P.jK(a,b)
return P.jK(a,s.h_(b))},
mr:function(a,b){var s=$.aj
if(s===C.e)return P.kC(a,b)
return P.kC(a,s.d3(b,t.W))},
l3:function(a,b,c,d,e){P.nD(new P.ja(d,e))},
nz:function(a,b,c,d){var s,r=$.aj
if(r===c)return d.$0()
$.aj=c
s=r
try{r=d.$0()
return r}finally{$.aj=s}},
nA:function(a,b,c,d,e){var s,r=$.aj
if(r===c)return d.$1(e)
$.aj=c
s=r
try{r=d.$1(e)
return r}finally{$.aj=s}},
iT:function iT(a){this.a=a},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
cM:function cM(){this.c=0},
j3:function j3(a,b){this.a=a
this.b=b},
j2:function j2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bG:function bG(a,b){this.a=a
this.b=b},
bH:function bH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cJ:function cJ(a){this.a=a},
ev:function ev(a){this.a=a
this.b=null},
e_:function e_(){},
e0:function e0(){},
co:function co(){},
j5:function j5(){},
ja:function ja(a,b){this.a=a
this.b=b},
j_:function j_(){},
j0:function j0(a,b){this.a=a
this.b=b},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
m0:function(a,b,c){return H.nU(a,new H.u(b.ax("@<0>").cF(c).ax("u<1,2>")))},
m_:function(a,b){return new H.u(a.ax("@<0>").cF(b).ax("u<1,2>"))},
kj:function(a){return new P.cy(a.ax("cy<0>"))},
jO:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mz:function(a,b){var s=new P.cz(a,b)
s.c=a.e
return s},
lU:function(a,b,c){var s,r
if(P.jW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a0.push(a)
try{P.na(a,s)}finally{if(0>=$.a0.length)return H.d($.a0,-1)
$.a0.pop()}r=P.kx(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jA:function(a,b,c){var s,r
if(P.jW(a))return b+"..."+c
s=new P.aK(b)
$.a0.push(a)
try{r=s
r.a=P.kx(r.a,a,", ")}finally{if(0>=$.a0.length)return H.d($.a0,-1)
$.a0.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jW:function(a){var s,r
for(s=$.a0.length,r=0;r<s;++r)if(a===$.a0[r])return!0
return!1},
na:function(a,b){var s,r,q,p,o,n,m,l=a.gN(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.e(l.gH(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gH(l);++j
if(!l.u()){if(j<=4){b.push(H.e(p))
return}r=H.e(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gH(l);++j
for(;l.u();p=o,o=n){n=l.gH(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.e(p)
r=H.e(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
kk:function(a){var s,r={}
if(P.jW(a))return"{...}"
s=new P.aK("")
try{$.a0.push(a)
s.a+="{"
r.a=!0
J.lE(a,new P.hp(r,s))
s.a+="}"}finally{if(0>=$.a0.length)return H.d($.a0,-1)
$.a0.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cy:function cy(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iZ:function iZ(a){this.a=a
this.c=this.b=null},
cz:function cz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c4:function c4(){},
c9:function c9(){},
B:function B(){},
du:function du(){},
hp:function hp(a,b){this.a=a
this.b=b},
ar:function ar(){},
cG:function cG(){},
cA:function cA(){},
d8:function d8(){},
da:function da(){},
h0:function h0(){},
iE:function iE(){},
iF:function iF(){},
j4:function j4(a){this.b=0
this.c=a},
lT:function(a){if(a instanceof H.bk)return a.i(0)
return"Instance of '"+H.e(H.dM(a))+"'"},
jE:function(a,b,c){var s,r=c?J.kh(a):J.lV(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jF:function(a,b){var s,r=[]
for(s=J.bh(a);s.u();)r.push(s.gH(s))
if(b)return r
return J.jB(r)},
jI:function(a){var s,r=a,q=r.length,p=P.jH(0,null,q)
if(typeof p!=="number")return p.ag()
s=p<q
return H.me(s?r.slice(0,p):r)},
mg:function(a){return new H.hh(a,H.lY(a,!1,!0,!1,!1,!1))},
kx:function(a,b,c){var s=J.bh(b)
if(!s.u())return a
if(c.length===0){do a+=H.e(s.gH(s))
while(s.u())}else{a+=H.e(s.gH(s))
for(;s.u();)a=a+c+H.e(s.gH(s))}return a},
mR:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.p){s=$.lB().b
s=s.test(b)}else s=!1
if(s)return b
r=C.H.h4(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.md(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lR:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dc:function(a){if(a>=10)return""+a
return"0"+a},
kb:function(a){return new P.aY(1000*a)},
h3:function(a){if(typeof a=="number"||H.l1(a)||null==a)return J.a1(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lT(a)},
fA:function(a){return new P.d4(a)},
jt:function(a){return new P.a5(!1,null,null,a)},
k4:function(a,b,c){return new P.a5(!0,a,b,c)},
lI:function(a,b){if(a==null)throw H.c(new P.a5(!1,null,b,"Must not be null"))
return a},
dN:function(a,b){return new P.bz(null,null,!0,a,b,"Value not in range")},
au:function(a,b,c,d,e){return new P.bz(b,c,!0,a,d,"Invalid value")},
jH:function(a,b,c){var s
if(typeof c!=="number")return H.p(c)
s=a>c
if(s)throw H.c(P.au(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.p(c)
s=b>c}else s=!0
if(s)throw H.c(P.au(b,a,c,"end",null))
return b}return c},
ku:function(a,b){if(a<0)throw H.c(P.au(a,0,null,b,null))
return a},
F:function(a,b,c,d,e){var s=e==null?J.bi(b):e
return new P.dl(s,!0,a,c,"Index out of range")},
w:function(a){return new P.ep(a)},
kE:function(a){return new P.em(a)},
bS:function(a){return new P.d9(a)},
n:function(a){return new P.eI(a)},
k1:function(a){H.o6(a)},
bd:function bd(){},
a7:function a7(a,b){this.a=a
this.b=b},
Y:function Y(){},
aY:function aY(a){this.a=a},
fY:function fY(){},
fZ:function fZ(){},
E:function E(){},
d4:function d4(a){this.a=a},
dE:function dE(){},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dl:function dl(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ep:function ep(a){this.a=a},
em:function em(a){this.a=a},
dZ:function dZ(a){this.a=a},
d9:function d9(a){this.a=a},
dH:function dH(){},
cn:function cn(){},
db:function db(a){this.a=a},
eI:function eI(a){this.a=a},
ha:function ha(a,b){this.a=a
this.b=b},
q:function q(){},
f:function f(){},
dm:function dm(){},
aq:function aq(){},
dt:function dt(){},
aa:function aa(){},
N:function N(){},
G:function G(){},
K:function K(){},
aK:function aK(a){this.a=a},
nQ:function(a){var s
if(t.s.b(a)){s=J.lG(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.cO(a.data,a.height,a.width)},
nP:function(a){if(a instanceof P.cO)return{data:a.a,height:a.b,width:a.c}
return a},
aR:function(a){var s,r,q,p,o
if(a==null)return null
s=P.m_(t.R,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.m)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
nO:function(a){var s={}
a.I(0,new P.jb(s))
return s},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a){this.a=a},
dh:function dh(a,b){this.a=a
this.b=b},
h8:function h8(){},
h9:function h9(){},
iY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
my:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
f0:function f0(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bq:function bq(){},
dr:function dr(){},
bv:function bv(){},
dF:function dF(){},
hQ:function hQ(){},
e1:function e1(){},
j:function j(){},
bB:function bB(){},
e9:function e9(){},
eP:function eP(){},
eQ:function eQ(){},
eX:function eX(){},
eY:function eY(){},
f9:function f9(){},
fa:function fa(){},
fg:function fg(){},
fh:function fh(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(a){this.a=a},
d5:function d5(){},
aC:function aC(){},
dG:function dG(){},
ew:function ew(){},
dQ:function dQ(){},
dX:function dX(){},
f5:function f5(){},
f6:function f6(){}},W={
jw:function(){var s=document.createElement("canvas")
return s},
h_:function(a){return"wheel"},
iX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kR:function(a,b,c,d){var s=W.iX(W.iX(W.iX(W.iX(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
Q:function(a,b,c,d){var s=W.l4(new W.iW(c),t.D)
if(s!=null&&!0)J.lD(a,b,s,!1)
return new W.eH(a,b,s,!1)},
l4:function(a,b){var s=$.aj
if(s===C.e)return a
return s.d3(a,b)},
k:function k(){},
fy:function fy(){},
d2:function d2(){},
d3:function d3(){},
d6:function d6(){},
aX:function aX(){},
af:function af(){},
fQ:function fQ(){},
D:function D(){},
bV:function bV(){},
fR:function fR(){},
a6:function a6(){},
al:function al(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fW:function fW(){},
bW:function bW(){},
bX:function bX(){},
dd:function dd(){},
fX:function fX(){},
ey:function ey(a,b){this.a=a
this.b=b},
J:function J(){},
h:function h(){},
b:function b(){},
aZ:function aZ(){},
df:function df(){},
dg:function dg(){},
di:function di(){},
b_:function b_(){},
he:function he(){},
b0:function b0(){},
b1:function b1(){},
bp:function bp(){},
b4:function b4(){},
hn:function hn(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(a){this.a=a},
hJ:function hJ(){},
hK:function hK(a){this.a=a},
b6:function b6(){},
dw:function dw(){},
a2:function a2(){},
ex:function ex(a){this.a=a},
y:function y(){},
cj:function cj(){},
b8:function b8(){},
dK:function dK(){},
hW:function hW(){},
hX:function hX(a){this.a=a},
dS:function dS(){},
aJ:function aJ(){},
dV:function dV(){},
b9:function b9(){},
dW:function dW(){},
ba:function ba(){},
i9:function i9(){},
ia:function ia(a){this.a=a},
aL:function aL(){},
aM:function aM(){},
ai:function ai(){},
e2:function e2(){},
e3:function e3(){},
io:function io(){},
bb:function bb(){},
bc:function bc(){},
e8:function e8(){},
ir:function ir(){},
aw:function aw(){},
iD:function iD(){},
es:function es(){},
aN:function aN(){},
bF:function bF(){},
ez:function ez(){},
cx:function cx(){},
eM:function eM(){},
cB:function cB(){},
f4:function f4(){},
fb:function fb(){},
jz:function jz(a,b){this.a=a
this.$ti=b},
eH:function eH(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iW:function iW(a){this.a=a},
jN:function jN(a){this.$ti=a},
C:function C(){},
c1:function c1(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eJ:function eJ(){},
eK:function eK(){},
eN:function eN(){},
eO:function eO(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eZ:function eZ(){},
f_:function f_(){},
f1:function f1(){},
cH:function cH(){},
cI:function cI(){},
f2:function f2(){},
f3:function f3(){},
f8:function f8(){},
fc:function fc(){},
fd:function fd(){},
cK:function cK(){},
cL:function cL(){},
fe:function fe(){},
ff:function ff(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){}},K={
S:function(a){var s=new K.hY()
s.e8(a)
return s},
fz:function fz(){},
dk:function dk(){},
aH:function aH(){this.a=null},
hY:function hY(){this.a=null}},L={dY:function dY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},e6:function e6(a,b,c){this.a=a
this.b=b
this.c=c},e7:function e7(a){this.b=a
this.c=null},ip:function ip(){var _=this
_.d=_.c=_.b=_.a=null},is:function is(a){this.b=a
this.a=this.c=null}},O={
fM:function(){var s=new O.bl()
s.b7()
return s},
bl:function bl(){this.c=this.b=this.a=null},
ce:function ce(){this.b=this.a=null},
ke:function(a,b){var s,r,q,p=new O.dj()
p.r=0
p.scn(null)
p.sbP(null)
if(a==null){s=$.kF
if(s==null){s=new V.T(1,0)
$.kF=s
r=s}else r=s}else r=a
if(!J.v(p.d,r)){q=p.d
p.d=r
s=new D.l("blurDirection",q,r)
s.b=!0
p.w(s)}p.sd8(b)
p.sbQ(null)
p.sbR(0)
return p},
hr:function(){var s,r=new O.dv(),q=O.fM()
r.e=q
q.aF(r.geF(),r.geH())
q=new O.as(r,"emission")
q.c=new A.V(!1,!1,!1)
q.f=new V.M(0,0,0)
r.f=q
q=new O.as(r,"ambient")
q.c=new A.V(!1,!1,!1)
q.f=new V.M(0,0,0)
r.r=q
q=new O.as(r,"diffuse")
q.c=new A.V(!1,!1,!1)
q.f=new V.M(0,0,0)
r.x=q
q=new O.as(r,"invDiffuse")
q.c=new A.V(!1,!1,!1)
q.f=new V.M(0,0,0)
r.y=q
q=new O.hx(r,"specular")
q.c=new A.V(!1,!1,!1)
q.f=new V.M(0,0,0)
q.ch=100
r.z=q
q=new O.ht(r,"bump")
q.c=new A.V(!1,!1,!1)
r.Q=q
r.ch=null
q=new O.as(r,"reflect")
q.c=new A.V(!1,!1,!1)
q.f=new V.M(0,0,0)
r.cx=q
q=new O.hw(r,"refract")
q.c=new A.V(!1,!1,!1)
q.f=new V.M(0,0,0)
q.ch=1
r.cy=q
q=new O.hs(r,"alpha")
q.c=new A.V(!1,!1,!1)
q.f=1
r.db=q
q=new D.c8()
q.b7()
q.e=[]
q.f=[]
q.r=[]
q.x=[]
q.z=q.y=null
q.cq(q.geD(),q.gfg(),q.gfk())
r.dx=q
s=new O.hv()
s.b=new V.U(0,0,0,0)
s.c=1
s.d=10
s.e=!1
r.dy=s
s=q.y
q=s==null?q.y=D.A():s
q.k(0,r.gfE())
q=r.dx
s=q.z
q=s==null?q.z=D.A():s
q.k(0,r.ga_())
r.fr=null
return r},
kz:function(){var s,r,q,p=new O.e4()
p.a=new V.U(0,0,0,0)
s=O.fM()
p.c=s
s.aF(p.geV(),p.geX())
p.d=0
p.e=null
p.r=p.f=C.i
r=new V.U(0,0,0,0)
if(!p.a.p(0,r)){q=p.a
p.a=r
s=new D.l("backColor",q,r)
s.b=!0
p.w(s)}p.sd4(C.i)
return p},
jJ:function(a,b){var s,r,q,p,o=new O.bA(),n=o.a
o.a=b
b.gm().k(0,o.ga_())
s=new D.l("texture",n,o.a)
s.b=!0
o.w(s)
r=a==null?V.aG():a
if(!J.v(o.b,r)){n=o.b
o.b=r
s=new D.l("colorMatrix",n,r)
s.b=!0
o.w(s)}q=V.dP()
if(!J.v(o.c,q)){n=o.c
o.c=q
s=new D.l("source",n,q)
s.b=!0
o.w(s)}p=V.dP()
if(!J.v(o.d,p)){n=o.d
o.d=p
s=new D.l("destination",n,p)
s.b=!0
o.w(s)}if(o.e!==!1){o.e=!1
s=new D.l("flip",!0,!1)
s.b=!0
o.w(s)}o.f=null
return o},
dj:function dj(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dv:function dv(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(){},
hA:function hA(a,b){this.a=a
this.b=b},
hB:function hB(){},
hC:function hC(a,b){this.a=a
this.b=b},
hD:function hD(){},
hE:function hE(a,b){this.a=a
this.b=b},
hF:function hF(){},
hs:function hs(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cc:function cc(){},
ht:function ht(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
as:function as(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hv:function hv(){var _=this
_.e=_.d=_.c=_.b=null},
hw:function hw(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hx:function hx(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
id:function id(){},
e4:function e4(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bA:function bA(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
de:function(){var s,r=new E.bn()
r.a=""
r.b=!0
s=O.fM()
r.y=s
s.aF(r.ghi(),r.ghl())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.saG(0,null)
r.saf(null)
r.sau(null)
return r},
kN:function(){if(J.jr(window.navigator.vendor,"Google"))return C.y
if(J.jr(window.navigator.userAgent,"Firefox"))return C.l
var s=window.navigator.appVersion
if(J.be(s).L(s,"Trident")||C.c.L(s,"Edge"))return C.m
if(J.jr(window.navigator.appName,"Microsoft"))return C.m
return C.z},
kO:function(){var s=window.navigator.appVersion
if(J.be(s).L(s,"Win"))return C.O
if(C.c.L(s,"Mac"))return C.t
if(C.c.L(s,"Linux"))return C.P
return C.Q},
mh:function(a,b){var s=new E.hS(a)
s.e7(a,b)
return s},
mq:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.kA(a,!0,!0,!0,!1)
s=W.jw()
r=s.style
r.width="100%"
r.height="100%"
J.lF(a).k(0,s)
return E.kA(s,!0,!0,!0,!1)},
kA:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.e5(),n=t.z,m=C.f.cp(a,"webgl2",P.m0(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.o(P.n("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.mh(m,a)
n=new T.ik(m)
m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.eq(a)
s=new X.hj()
s.c=new X.a9(!1,!1,!1)
s.d=P.kj(t.e)
n.b=s
s=new X.hL(n)
s.f=0
s.r=V.aI()
s.x=V.aI()
s.ch=s.Q=1
n.c=s
s=new X.ho(n)
s.r=0
s.x=V.aI()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.iq(n)
s.f=V.aI()
s.r=V.aI()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.h1
n.Q=(s==null?$.h1=new E.eF(E.kN(),E.kO()):s).a===C.l?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.Q(q,"contextmenu",n.geP(),!1))
n.z.push(W.Q(a,"focus",n.geZ(),!1))
n.z.push(W.Q(a,"blur",n.geJ(),!1))
n.z.push(W.Q(q,"keyup",n.gf2(),!1))
n.z.push(W.Q(q,"keydown",n.gf0(),!1))
n.z.push(W.Q(a,"mousedown",n.gf6(),!1))
n.z.push(W.Q(a,"mouseup",n.gfa(),!1))
n.z.push(W.Q(a,p,n.gf8(),!1))
r=n.z
W.h_(a)
W.h_(a)
r.push(W.Q(a,W.h_(a),n.gfc(),!1))
n.z.push(W.Q(q,p,n.geR(),!1))
n.z.push(W.Q(q,"mouseup",n.geT(),!1))
n.z.push(W.Q(q,"pointerlockchange",n.gfe(),!1))
n.z.push(W.Q(a,"touchstart",n.gfv(),!1))
n.z.push(W.Q(a,"touchend",n.gfq(),!1))
n.z.push(W.Q(a,"touchmove",n.gft(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.a7(Date.now(),!1)
o.db=0
o.cS()
return o},
fJ:function fJ(){},
bn:function bn(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bj:function bj(a){this.b=a},
bw:function bw(a){this.b=a},
eF:function eF(a,b){this.a=a
this.b=b},
hS:function hS(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hT:function hT(a){this.a=a},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
e5:function e5(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
im:function im(a){this.a=a}},Z={
jM:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.bI(c)),35044)
a.bindBuffer(b,null)
return new Z.et(b,s)},
ae:function(a){return new Z.ax(a)},
et:function et(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
cv:function cv(a){this.a=a},
aW:function aW(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
c3:function c3(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(a){this.a=a}},D={
A:function(){var s=new D.am()
s.d=0
return s},
fL:function fL(){},
am:function am(){var _=this
_.d=_.c=_.b=_.a=null},
h4:function h4(a){this.a=a},
h5:function h5(a){this.a=a},
O:function O(){this.b=null},
an:function an(){this.b=null},
ao:function ao(){this.b=null},
l:function l(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ap:function ap(){},
c8:function c8(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
bx:function bx(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={d7:function d7(a,b){this.a=a
this.b=b},dq:function dq(a,b){this.a=a
this.b=b},hj:function hj(){var _=this
_.d=_.c=_.b=_.a=null},ca:function ca(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ho:function ho(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},bs:function bs(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hL:function hL(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bt:function bt(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},dL:function dL(){},cp:function cp(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iq:function iq(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eq:function eq(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fH:function(a,b,c,d){var s,r,q,p,o=new X.fG()
o.d=o.c=o.b=o.a=512
o.e=!0
o.f=!1
o.x=o.r=1
o.ch=T.ky(null)
o.cx=new V.U(0,0,0,1)
o.cy=!0
o.db=2000
o.dx=!0
o.dy=V.dP()
o.sam(0,512)
o.sai(0,512)
s=new V.U(0,0,0,1)
if(!o.cx.p(0,s)){r=o.cx
o.cx=s
q=new D.l("color",r,s)
q.b=!0
o.V(q)}if(o.cy!==d){o.cy=d
q=new D.l("clearColor",!d,d)
q.b=!0
o.V(q)}q=o.db
$.r().toString
if(!(Math.abs(q-2000)<1e-9)){o.db=2000
q=new D.l("depth",q,2000)
q.b=!0
o.V(q)}if(!o.f){o.f=!0
q=new D.l("autoResize",!1,!0)
q.b=!0
o.V(q)}q=o.r
$.r().toString
if(!(Math.abs(q-b)<1e-9)){o.r=b
q=new D.l("autoResizeScalarX",q,b)
q.b=!0
o.V(q)}q=o.x
$.r().toString
if(!(Math.abs(q-c)<1e-9)){o.x=c
q=new D.l("autoResizeScalarY",q,c)
q.b=!0
o.V(q)}p=V.dP()
if(!J.v(o.dy,p)){r=o.dy
o.dy=p
q=new D.l("region",r,p)
q.b=!0
o.V(q)}return o},
kc:function(a){var s=new X.hb(),r=new V.U(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=V.dP()
s.r=r
return s},
fG:function fG(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jv:function jv(){},
hb:function hb(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hf:function hf(){this.b=this.a=null},
dI:function dI(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ib:function ib(){}},V={
fN:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.U(s,r,q,1)},
fv:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
jq:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.b.dW(a-b,s)
return(a<0?a+s:a)+b},
z:function(a,b,c){if(a==null)return C.c.ak("null",c)
$.r().toString
return C.c.ak(C.b.dS(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bO:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.m)(a),++q){p=V.z(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.d(m,o)
s=C.c.ak(m[o],r)
n=m.length
if(o>=n)return H.d(m,o)
m[o]=s}return m},
cY:function(a){return C.b.hH(Math.pow(2,C.L.c8(Math.log(H.nM(a))/Math.log(2))))},
aG:function(){var s=$.cf
return s==null?$.cf=V.ah(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ah:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ko:function(a,b,c,d){return V.ah(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
jG:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.ah(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
km:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.ah(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
kn:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.ah(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)},
aI:function(){var s=$.kr
return s==null?$.kr=new V.W(0,0):s},
m4:function(){var s=$.at
return s==null?$.at=new V.I(0,0,0):s},
dP:function(){var s=$.cl
return s==null?$.cl=V.hR(0,0,1,1):s},
hR:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dO(a,b,c,d)},
cu:function(){var s=$.kK
return s==null?$.kK=new V.x(0,0,0):s},
kM:function(){var s=$.kL
return s==null?$.kL=new V.bE(1,0.00390625,0.0000152587890625,0):s},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
U:function U(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h2:function h2(){},
cd:function cd(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aF:function aF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p},
W:function W(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dO:function dO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b){this.a=a
this.b=b},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o7:function(a){P.mr(C.J,new V.jn(a))},
mk:function(a){var s=new V.i3()
s.e9(a,!0)
return s},
jn:function jn(a){this.a=a},
i3:function i3(){this.b=this.a=null},
i5:function i5(a){this.a=a},
i4:function i4(a){this.a=a}},U={
jx:function(){var s=new U.fO()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
jy:function(a){var s=new U.bT()
s.a=a
return s},
kf:function(){var s=new U.bo()
s.b7()
s.aF(s.gec(),s.gfi())
s.e=null
s.f=V.aG()
s.r=0
return s},
fO:function fO(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bT:function bT(){this.b=this.a=null},
bo:function bo(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
P:function P(){},
cm:function cm(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cr:function cr(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cs:function cs(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ct:function ct(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
ka:function(a){var s=new M.bR()
s.b7()
s.e=!0
s.f=!1
s.r=null
s.aF(s.gfm(),s.gfo())
if(a!=null)s.bc(0,a)
return s},
fP:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null,g=new M.bU()
g.a=!0
s=E.de()
r=F.i_()
q=r.a
p=new V.x(-1,-1,1).G()
o=q.bd(new V.ab(1,2,4,6),V.fN(255,0,0),new V.I(-1,-1,0),new V.W(0,1),p,h)
p=r.a
q=new V.x(1,-1,1).G()
n=p.bd(new V.ab(0,3,4,6),V.fN(0,0,255),new V.I(1,-1,0),new V.W(1,1),q,h)
q=r.a
p=new V.x(1,1,1).G()
m=q.bd(new V.ab(0,2,5,6),V.fN(0,128,0),new V.I(1,1,0),new V.W(1,0),p,h)
p=r.a
q=V.aI()
l=new V.x(-1,1,1).G()
k=p.bd(new V.ab(0,2,4,7),V.fN(255,255,0),new V.I(-1,1,0),q,l,h)
r.d.cZ([o,n,m,k])
r.at()
s.saG(0,r)
g.e=s
j=new X.hf()
i=g.b
g.b=j
j.gm().k(0,g.gR())
s=new D.l("camera",i,g.b)
s.b=!0
g.O(s)
g.saQ(0,a)
g.saf(b)
return g},
bR:function bR(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
bU:function bU(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bZ:function bZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c2:function c2(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a_:function a_(){},
ld:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8="testCanvas",b9=null,c0="../resources/StarsCan.png",c1="../resources/Stars.png",c2="modifiers",c3=V.mk("Test 042"),c4=W.jw()
c4.className="pageLargeCanvas"
c4.id=b8
c3.a.appendChild(c4)
c3.d0(["Test of the Blum effect technique."])
c3.d0(["\xab[Back to Tests|../]"])
s=document.getElementById(b8)
if(s==null)H.o(P.n("Failed to find an element with the identifier, testCanvas."))
r=E.mq(s,!0,!0,!0,!1)
q=U.kf()
c3=new U.cm()
c3.r=c3.f=c3.e=c3.d=c3.c=c3.b=c3.a=0
c3.sdU(0)
c3.sdN(0,0)
c3.sdQ(0)
p=c3.d
$.r().toString
if(!(Math.abs(p-0)<1e-9)){c3.d=0
p=new D.l("deltaYaw",p,0)
p.b=!0
c3.D(p)}p=c3.e
$.r().toString
if(!(Math.abs(p-0)<1e-9)){c3.e=0
p=new D.l("deltaPitch",p,0)
p.b=!0
c3.D(p)}p=c3.f
$.r().toString
if(!(Math.abs(p-0.5)<1e-9)){c3.f=0.5
p=new D.l("deltaRoll",p,0.5)
p.b=!0
c3.D(p)}q.k(0,c3)
q.k(0,U.jy(V.jG(1.5707963267948966)))
o=E.de()
o.sau(q)
o.saG(0,F.o8(0.6))
c3=O.hr()
c3.f.saA(0,new V.M(1,1,1))
o.saf(c3)
n=r.f.dB(c0,c0,c0,c0,c0,c0)
m=E.de()
m.sau(q)
m.saG(0,F.l8(1.2,16,1.2))
c3=O.hr()
c3.x.saD(n)
c3.db.saD(n)
m.saf(c3)
l=E.de()
l.sau(q)
c3=F.l8(1.2,16,1.2)
c3.bg()
l.saG(0,c3)
c3=O.hr()
p=c3.r
p.saA(0,new V.M(0.6,0.6,0.6))
c3.x.saD(n)
c3.db.saD(n)
l.saf(c3)
k=r.f.dB(c1,c1,c1,c1,c1,c1)
j=new D.bx()
j.c=new V.M(1,1,1)
j.r=1
j.y=j.x=0
j.z=!0
j.a=V.aG()
i=j.b
j.b=q
q.gm().k(0,j.gbo())
c3=new D.l("mover",i,j.b)
c3.b=!0
j.a9(c3)
h=new V.M(1,1,1)
if(!j.c.p(0,h)){i=j.c
j.c=h
c3=new D.l("color",i,h)
c3.b=!0
j.a9(c3)}c3=j.d
if(c3!==k){if(c3!=null)c3.gm().B(0,j.gbo())
i=j.d
j.d=k
k.gm().k(0,j.gbo())
c3=new D.l("texture",i,j.d)
c3.b=!0
j.a9(c3)}g=V.kM()
if(!J.v(j.f,g)){i=j.f
j.f=g
c3=new D.l("shadowAdjust",i,g)
c3.b=!0
j.a9(c3)}c3=j.r
$.r().toString
if(!(Math.abs(c3-0.5)<1e-9)){j.r=0.5
c3=new D.l("attenuation0",c3,0.5)
c3.b=!0
j.a9(c3)}c3=j.x
$.r().toString
if(!(Math.abs(c3-0.05)<1e-9)){j.x=0.05
c3=new D.l("attenuation1",c3,0.05)
c3.b=!0
j.a9(c3)}c3=j.y
$.r().toString
if(!(Math.abs(c3-0.025)<1e-9)){j.y=0.025
c3=new D.l("attenuation2",c3,0.025)
c3.b=!0
j.a9(c3)}f=E.de()
f.sau(U.jy(V.ko(10,10,10,1)))
c3=F.l7(1,b9,b9,1)
c3.bg()
f.saG(0,c3)
e=U.kf()
c3=r.x
p=new U.cs()
d=U.jx()
d.sco(0,!0)
d.scc(6.283185307179586)
d.sce(0)
d.sY(0,0)
d.scd(100)
d.sP(0)
d.sbY(0.5)
p.b=d
c=p.gaL()
d.gm().k(0,c)
d=U.jx()
d.sco(0,!0)
d.scc(6.283185307179586)
d.sce(0)
d.sY(0,0)
d.scd(100)
d.sP(0)
d.sbY(0.5)
p.c=d
d.gm().k(0,c)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
b=new X.a9(!1,!1,!1)
i=p.d
p.d=b
d=new D.l(c2,i,b)
d.b=!0
p.D(d)
d=p.f
if(d!==!1){p.f=!1
d=new D.l("invertX",d,!1)
d.b=!0
p.D(d)}d=p.r
if(d!==!1){p.r=!1
d=new D.l("invertY",d,!1)
d.b=!0
p.D(d)}p.aW(c3)
e.k(0,p)
c3=r.x
p=new U.cr()
d=U.jx()
d.sco(0,!0)
d.scc(6.283185307179586)
d.sce(0)
d.sY(0,0)
d.scd(100)
d.sP(0)
d.sbY(0.2)
p.b=d
d.gm().k(0,p.gaL())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
b=new X.a9(!0,!1,!1)
i=p.c
p.c=b
d=new D.l(c2,i,b)
d.b=!0
p.D(d)
p.aW(c3)
e.k(0,p)
c3=r.x
p=new U.ct()
p.c=0.01
p.e=p.d=0
b=new X.a9(!1,!1,!1)
p.b=b
d=new D.l(c2,b9,b)
d.b=!0
p.D(d)
p.aW(c3)
e.k(0,p)
e.k(0,U.jy(V.ah(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a=O.hr()
a.dx.k(0,j)
c3=a.r
c3.saA(0,new V.M(0.05,0.05,0.05))
c3=a.x
c3.saA(0,new V.M(0.7,0.7,0.7))
a0=X.fH(!0,1,1,!0)
a1=new M.bZ()
a1.a=!0
c3=O.fM()
a1.e=c3
c3.aF(a1.geL(),a1.geN())
a1.y=a1.x=a1.r=a1.f=null
a2=X.kc(b9)
a3=new X.dI()
a3.c=1.0471975511965976
a3.d=0.1
a3.e=2000
a3.sau(b9)
c3=a3.c
$.r().toString
if(!(Math.abs(c3-1.0471975511965976)<1e-9)){a3.c=1.0471975511965976
c3=new D.l("fov",c3,1.0471975511965976)
c3.b=!0
a3.V(c3)}c3=a3.d
$.r().toString
if(!(Math.abs(c3-0.1)<1e-9)){a3.d=0.1
c3=new D.l("near",c3,0.1)
c3.b=!0
a3.V(c3)}c3=a3.e
$.r().toString
if(!(Math.abs(c3-2000)<1e-9)){a3.e=2000
c3=new D.l("far",c3,2000)
c3.b=!0
a3.V(c3)}c3=a1.b
if(c3!==a3){if(c3!=null)c3.gm().B(0,a1.gR())
i=a1.b
a1.b=a3
a3.gm().k(0,a1.gR())
c3=new D.l("camera",i,a1.b)
c3.b=!0
a1.O(c3)}a1.saQ(0,a2)
a1.saf(b9)
a1.saf(a)
a1.e.k(0,f)
a1.e.k(0,o)
a1.e.k(0,l)
a1.e.k(0,m)
a1.b.sau(e)
a1.saQ(0,a0)
a4=X.fH(!0,1,1,!1)
a5=O.kz()
c3=a5.c
p=a0.ch
c3.k(0,O.jJ(V.ah(3,3,3,-8,3,3,3,-8,3,3,3,-8,0,0,0,1),p))
a6=M.fP(b9,b9)
a6.saQ(0,a4)
a6.saf(a5)
a7=M.ka(b9)
for(a8=a4,a9=0;a9<4;++a9,a8=b0){b0=X.fH(!0,0.25,0.25,!1)
c3=new V.bE(10,10,10,1)
p=a8.ch
d=a4.ch
b1=new M.c2()
b1.a=!0
b1.c=X.fH(!0,1,1,!1)
c=O.ke(b9,b9)
b2=c.x
if(b2==null){b2=new D.am()
b2.d=0
c.x=b2}b3=b1.gR()
b4=b2.a;(b4==null?b2.a=[]:b4).push(b3)
b1.d=c
b1.e=M.fP(b1.c,c)
c=b1.c.ch
b2=$.kG
c=O.ke(b2==null?$.kG=new V.T(0,1):b2,c)
b2=c.x
if(b2==null){b2=new D.am()
b2.d=0
c.x=b2}b4=b2.a;(b4==null?b2.a=[]:b4).push(b3)
b1.f=c
b1.r=M.fP(b9,c)
b1.d.sbR(0)
b1.f.sbR(0)
b1.d.sd8(p)
b1.d.sbQ(d)
b1.f.sbQ(d)
b1.d.scn(b9)
b1.f.scn(b9)
b1.d.sbP(c3)
b1.f.sbP(c3)
b1.r.saQ(0,b0)
if(a7.bF([b1])){c3=a7.a
b5=c3.length
c3.push(b1)
c3=a7.c
if(c3!=null)c3.$2(b5,[b1])}}b6=O.kz()
b6.sd4(C.r)
b6.c.k(0,O.jJ(b9,a0.ch))
b6.c.k(0,O.jJ(b9,a8.ch))
b7=M.fP(b9,b9)
b7.saf(b6)
c3=M.ka([a1,a6,a7,b7])
p=r.d
if(p!==c3){if(p!=null)p.gm().B(0,r.gcA())
r.d=c3
c3.gm().k(0,r.gcA())
r.cB()}V.o7(r)}},A={
m2:function(a,b){var s=a.aB,r=new A.hq(b,s)
r.bn(b,s)
r.e6(a,b)
return r},
m3:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gar(a5)+a6.gar(a6)+a7.gar(a7)+a8.gar(a8)+a9.gar(a9)+b0.gar(b0)+b1.gar(b1)+b2.gar(b2)+b3.gar(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.m)(b4),++r)a+="_"+H.e(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.m)(b5),++r)a+="_"+H.e(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.m)(b6),++r)a+="_"+H.e(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.m)(b7),++r)a+="_"+H.e(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
for(o=b5.length,r=0;r<o;++r,p=!0)q+=b5[r].b
for(o=b6.length,r=0;r<o;++r,p=!0)q+=b6[r].b
for(n=b7.length,r=0;r<n;++r,p=!0)q+=b7[r].b
if(!b1.a)n=b1.c
else n=!0
if(!n)if(!b2.a){n=b2.c
m=n}else m=!0
else m=!0
l=s>0
if(!a6.a)s=a6.c
else s=!0
if(!s){if(!a7.a)s=a7.c
else s=!0
if(!s){if(!a8.a)s=a8.c
else s=!0
if(!s)if(!a9.a)s=a9.c
else s=!0
else s=!0
k=s}else k=!0}else k=!0
s=!a9.a
if(s)n=a9.c
else n=!0
j=n||l||o>0||m
if(!a7.a)o=a7.c
else o=!0
if(!o){if(!a8.a)o=a8.c
else o=!0
if(!o){if(s)s=a9.c
else s=!0
i=s}else i=!0}else i=!0
if(!i){if(!b0.a)s=b0.c
else s=!0
h=s||m}else h=!0
if(!b0.a)g=b0.c
else g=!0
f=a5.c||a6.c||a7.c||a8.c||a9.c||b0.c||b1.c||b2.c||b3.c
e=a4>0
d=h||g||j||!1
c=l&&i
a1=a1&&f
b=$.a4()
if(h){s=$.aU()
b=new Z.ax(b.a|s.a)}if(g){s=$.aT()
b=new Z.ax(b.a|s.a)}if(f){s=$.aV()
b=new Z.ax(b.a|s.a)}if(e){s=$.aS()
b=new Z.ax(b.a|s.a)}return new A.hu(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
j8:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
j9:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.j8(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fw(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
ng:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.j8(b,r,"emission")
s=b.a+="\n"
s+="vec3 emissionColor()\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.c){r=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   return emissionClr;\n"
b.a=r}else if(r.c){r=s+"   return textureCube(emissionTxt, txtCube).rgb;\n"
b.a=r}else r=s
r+="}\n"
b.a=r
b.a=r+"\n"},
nc:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.j9(b,r,"ambient")
b.a+="\n"},
ne:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.j9(b,r,"diffuse")
r=b.a+="\n"
r+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = dot(norm, -litVec);\n"
b.a=r
r+=u.e
b.a=r
r+="   return diffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
nh:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.j9(b,r,"invDiffuse")
r=b.a+="\n"
r+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=r
r+=u.e
b.a=r
r+="   return invDiffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
nn:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.j9(b,r,"specular")
r=b.a+="\n"
r+="vec3 specular(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=r
r+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
b.a=r
r+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
b.a=r
r+=u.e
b.a=r
r+="   return specularColor*pow(scalar, shininess);\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
nj:function(a,b){var s,r,q
if(!a.k4)return
s=b.a+="// === Normal ===\n"
s=b.a=s+"\n"
if(a.f.c){s+="uniform samplerCube bumpTxt;\n"
b.a=s
s+="\n"
b.a=s}s+="vec3 normal()\n"
b.a=s
s=b.a=s+"{\n"
r=a.f
q=r.a
if(!q)r=r.c
else r=!0
if(!r||q)s=b.a=s+"   return normalize(normalVec);\n"
else{s+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
b.a=s
s+="   vec3 n = normalize(normalVec);\n"
b.a=s
s+="   vec3 b = normalize(binormalVec);\n"
b.a=s
s+="   vec3 c = normalize(cross(b, n));\n"
b.a=s
s+="   b = cross(n, c);\n"
b.a=s
s+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
b.a=s
s+="                   -c.x, -c.y, -c.z,\n"
b.a=s
s+="                    n.x,  n.y,  n.z);\n"
b.a=s
s=b.a=s+"   return mat * normalize(2.0*color - 1.0);\n"}s+="}\n"
b.a=s
b.a=s+"\n"},
nl:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.j8(b,r,"reflect")
s=b.a+="\n"
s+="vec3 reflect(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.c){r=s+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = reflectClr;\n"
b.a=r}else if(r.c){r=s+"   vec3 scalar = textureCube(reflectTxt, txtCube).rgb;\n"
b.a=r}else r=s
r+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
nm:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.j8(b,r,"refract")
s=b.a+="uniform float refraction;\n"
s+="\n"
b.a=s
s+="vec3 refract(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.c){r=s+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = refractClr;\n"
b.a=r}else if(r.c){r=s+"   vec3 scalar = textureCube(refractTxt, txtCube).rgb;\n"
b.a=r}else r=s
r+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=r
r+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
nd:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.e(s)
q=A.fw(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 startPnt;\n"
c.a=p
p+="   vec3 endPnt;\n"
c.a=p
p=c.a=p+"   vec3 color;\n"
if(typeof s!=="number")return s.an()
s=(s&4)!==0
if(s){p+="   float att0;\n"
c.a=p
p+="   float att1;\n"
c.a=p
p=c.a=p+"   float att2;\n"}p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+m+"];\n"
p+="\n"
c.a=p
p+="vec3 "+r+"ClosestPoint("+q+" lit)\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 lineVec = lit.endPnt - lit.startPnt;\n"
c.a=p
p+="   float lineLen2 = dot(lineVec, lineVec);\n"
c.a=p
p+="   if(lineLen2 <= 0.0001) return lit.startPnt;\n"
c.a=p
p+="   float t = dot(objPos - lit.startPnt, lineVec)/lineLen2;\n"
c.a=p
p+="   if(t <= 0.0) return lit.startPnt;\n"
c.a=p
p+="   if(t >= 1.0) return lit.endPnt;\n"
c.a=p
p+="   return lit.startPnt + t*lineVec;\n"
c.a=p
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Intensity(vec3 normDir, vec3 litPnt, "+q+" lit)\n"
c.a=p
p+="{\n"
c.a=p
if(s){p+="   float dist = length(objPos - litPnt);\n"
c.a=p
p+=u.u
c.a=p
p+=u.z
c.a=p
c.a=p+"\n"}o=[]
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.a.q(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=[]
s=a.b
if(!s.a)s=s.c
else s=!0
if(s)o.push("ambientColor")
if(a.dx){c.a+=u.k
o.push("highLight")
s=c.a+="   vec3 litPnt  = "+r+"ClosestPoint(lit);\n"
s+="   vec3 litView = (viewMat*vec4(litPnt, 1.0)).xyz;\n"
c.a=s
s+="   vec3 normDir = normalize(viewPos - litView);\n"
c.a=s
s+="   vec3 intensity = "+r+"Intensity(normDir, litPnt, lit);\n"
c.a=s
c.a=s+"   if(length(intensity) > 0.0001) {\n"
n=[]
s=a.c
if(!s.a)s=s.c
else s=!0
if(s)n.push("diffuse(norm, normDir)")
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)n.push("invDiffuse(norm, normDir)")
s=a.e
if(!s.a)s=s.c
else s=!0
if(s)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.a.q(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.q(o," + ")+");\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=s
s+="{\n"
c.a=s
c.a=s+u.o
m=c.a+="   for(int i = 0; i < "+m+"; ++i)\n"
m+="   {\n"
c.a=m
m+="      if(i >= "+r+"Count) break;\n"
c.a=m
m+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=m
m+="   }\n"
c.a=m
m+="   return lightAccum;\n"
c.a=m
m+="}\n"
c.a=m
c.a=m+"\n"},
nf:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.e(s)
q=A.fw(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.an()
s=(s&1)!==0
if(s){p+="   vec3 objUp;\n"
c.a=p
p+="   vec3 objRight;\n"
c.a=p
p=c.a=p+"   vec3 objDir;\n"}p+="   vec3 viewDir;\n"
c.a=p
p+="   vec3 color;\n"
c.a=p
p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+k+"];\n"
if(s)for(o=0;o<k;++o)p=c.a+="uniform sampler2D "+r+"sTexture2D"+o+";\n"
p+="\n"
c.a=p
n=s?", sampler2D txt2D":""
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+n+")\n"
c.a=p
c.a=p+"{\n"
m=[]
p=a.b
if(!p.a)p=p.c
else p=!0
if(p)m.push("ambientColor")
if(a.dx){c.a+=u.k
l=[]
p=a.c
if(!p.a)p=p.c
else p=!0
if(p)l.push("diffuse(norm, lit.viewDir)")
p=a.d
if(!p.a)p=p.c
else p=!0
if(p)l.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(!p.a)p=p.c
else p=!0
if(p)l.push("specular(norm, lit.viewDir)")
if(s){p=c.a+="   vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
p+="   float tu = dot(offset, lit.objUp);\n"
c.a=p
p+="   float tv = dot(offset, lit.objRight);\n"
c.a=p
p+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=p
p+="   vec3 intensity = texture2D(txt2D, txtLoc).xyz;\n"
c.a=p
c.a=p+"   if(length(intensity) > 0.0001)\n"
c.a+="      highLight = intensity*("+C.a.q(l," + ")+");\n"}else c.a+="   highLight = "+C.a.q(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.q(m," + ")+");\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=p
p+="{\n"
c.a=p
p+=u.o
c.a=p
if(s){for(s=p,o=0;o<k;++o){c.a+="   if("+r+"Count <= "+o+") return lightAccum;\n"
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+o+"], "+r+"sTexture2D"+o+");\n"}k=s}else{k=c.a+="   for(int i = 0; i < "+k+"; ++i)\n"
k+="   {\n"
c.a=k
k+="      if(i >= "+r+"Count) break;\n"
c.a=k
k+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=k
k=c.a=k+"   }\n"}k+="   return lightAccum;\n"
c.a=k
k+="}\n"
c.a=k
c.a=k+"\n"},
nk:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.e(s)
q=A.fw(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 point;\n"
c.a=p
p+="   vec3 viewPnt;\n"
c.a=p
p=c.a=p+"   vec3 color;\n"
if(typeof s!=="number")return s.an()
o=(s&3)!==0
if(o){p+="   mat3 invViewRotMat;\n"
c.a=p}n=(s&2)!==0
if(n){p+="   vec4 shadowAdj;\n"
c.a=p}m=(s&4)!==0
if(m){p+="   float att0;\n"
c.a=p
p+="   float att1;\n"
c.a=p
p=c.a=p+"   float att2;\n"}p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+h+"];\n"
s=(s&1)!==0
if(s)for(l=0;l<h;++l)p=c.a+="uniform samplerCube "+r+"sTextureCube"+l+";\n"
p+="\n"
c.a=p
k=s?", samplerCube txtCube":""
if(n)k+=", samplerCube shadowCube"
p+="vec3 "+r+"Intensity(vec3 normDir, "+q+" lit"+k+")\n"
c.a=p
p+="{\n"
c.a=p
p=c.a=p+"   float dist = length(objPos - lit.point);\n"
if(m){p+=u.u
c.a=p
p+=u.z
c.a=p
p+="\n"
c.a=p}if(o)p=c.a=p+"   vec3 invNormDir = lit.invViewRotMat*normDir;\n"
if(n){p+="   float depth = dot(textureCube(shadowCube, invNormDir), lit.shadowAdj);\n"
c.a=p
p+=u.v
c.a=p
p+=u.q
c.a=p
c.a=p+"\n"}j=[]
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
p=c.a+="   return "+C.a.q(j," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=p
c.a=p+"{\n"
j=[]
p=a.b
if(!p.a)p=p.c
else p=!0
if(p)j.push("ambientColor")
if(a.dx){c.a+=u.k
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
p=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
p+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=p
c.a=p+"   if(length(intensity) > 0.0001) {\n"
i=[]
p=a.c
if(!p.a)p=p.c
else p=!0
if(p)i.push("diffuse(norm, normDir)")
p=a.d
if(!p.a)p=p.c
else p=!0
if(p)i.push("invDiffuse(norm, normDir)")
p=a.e
if(!p.a)p=p.c
else p=!0
if(p)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.a.q(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.q(j," + ")+");\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=p
p+="{\n"
c.a=p
p+=u.o
c.a=p
if(o){for(l=0;l<h;++l){c.a+="   if("+r+"Count <= "+l+") return lightAccum;\n"
k=s?", "+r+"sTextureCube"+l:""
if(n)k+=", "+r+"sShadowCube"+l
p=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+l+"]"+k+");\n"}h=p}else{h=c.a+="   for(int i = 0; i < "+h+"; ++i)\n"
h+="   {\n"
c.a=h
h+="      if(i >= "+r+"Count) break;\n"
c.a=h
h+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=h
h=c.a=h+"   }\n"}h+="   return lightAccum;\n"
c.a=h
h+="}\n"
c.a=h
c.a=h+"\n"},
no:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.e(s)
q=A.fw(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 objPnt;\n"
c.a=p
p+="   vec3 objDir;\n"
c.a=p
p+="   vec3 viewPnt;\n"
c.a=p
p=c.a=p+"   vec3 color;\n"
if(typeof s!=="number")return s.an()
o=(s&3)!==0
if(o){p+="   vec3 objUp;\n"
c.a=p
p+="   vec3 objRight;\n"
c.a=p
p+="   float tuScalar;\n"
c.a=p
p+="   float tvScalar;\n"
c.a=p}n=(s&2)!==0
if(n){p+="   vec4 shadowAdj;\n"
c.a=p}m=(s&8)!==0
if(m){p+="   float cutoff;\n"
c.a=p
p+="   float coneAngle;\n"
c.a=p}l=(s&4)!==0
if(l){p+="   float att0;\n"
c.a=p
p+="   float att1;\n"
c.a=p
p=c.a=p+"   float att2;\n"}p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+e+"];\n"
k=(s&1)!==0
if(k)for(j=0;j<e;++j)p=c.a+=f+r+"sTexture2D"+j+";\n"
if(n)for(j=0;j<e;++j)p=c.a+=f+r+"sShadow2D"+j+";\n"
p+="\n"
c.a=p
i=k?", sampler2D txt2D":""
if(n)i+=", sampler2D shadow2D"
p+="vec3 "+r+"Intensity("+q+" lit"+i+")\n"
c.a=p
p+="{\n"
c.a=p
p=c.a=p+"   vec3 dir = objPos - lit.objPnt;\n"
if((s&6)!==0){s=p+"   float dist = length(dir);\n"
c.a=s}else s=p
if(l){s+=u.u
c.a=s
s+=u.z
c.a=s
s=c.a=s+"\n"}s+="   vec3 normDir = normalize(dir);\n"
c.a=s
s+="   float zScale = dot(normDir, lit.objDir);\n"
c.a=s
s+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
if(m){s=$.h1
if(s==null)s=$.h1=new E.eF(E.kN(),E.kO())
p=c.a
if(s.b===C.t){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
c.a=s
s=c.a=s+"   float angle = atan(crossMag, zScale);\n"}else s=c.a=p+"   float angle = acos(zScale);\n"
s+="   float scale = (lit.cutoff-angle) / (lit.cutoff-lit.coneAngle);\n"
c.a=s
s+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
s+="   if(scale >= 1.0) scale = 1.0;\n"
c.a=s
s+="\n"
c.a=s}if(o){s+="   normDir = normDir / zScale;\n"
c.a=s
s+="   float tu = 0.5 - dot(normDir, lit.objRight)*lit.tuScalar;\n"
c.a=s
s+="   if((tu < 0.0) || (tu > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
s+="   float tv = dot(normDir, lit.objUp)*lit.tvScalar + 0.5;\n"
c.a=s
s+="   if((tv < 0.0) || (tv > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
s+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=s
s=c.a=s+"\n"}if(n){s+="   float depth = dot(texture2D(shadow2D, vec2(txtLoc.x, 1.0-txtLoc.y)), lit.shadowAdj);\n"
c.a=s
s+=u.v
c.a=s
s+=u.q
c.a=s
c.a=s+"\n"}h=[]
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
s=c.a+="   return "+C.a.q(h," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=s
c.a=s+"{\n"
h=[]
s=a.b
if(!s.a)s=s.c
else s=!0
if(s)h.push("ambientColor")
if(a.dx){c.a+=u.k
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
s=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
s+="   if(length(intensity) > 0.0001) {\n"
c.a=s
c.a=s+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=[]
s=a.c
if(!s.a)s=s.c
else s=!0
if(s)g.push("diffuse(norm, litVec)")
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)g.push("invDiffuse(norm, litVec)")
s=a.e
if(!s.a)s=s.c
else s=!0
if(s)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.a.q(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.q(h," + ")+");\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=s
s+="{\n"
c.a=s
s+=u.o
c.a=s
if(o){for(j=0;j<e;++j){c.a+="   if("+r+"Count <= "+j+") return lightAccum;\n"
i=k?", "+r+"sTexture2D"+j:""
if(n)i+=", "+r+"sShadow2D"+j
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+j+"]"+i+");\n"}e=s}else{e=c.a+="   for(int i = 0; i < "+e+"; ++i)\n"
e+="   {\n"
c.a=e
e+="      if(i >= "+r+"Count) break;\n"
c.a=e
e+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=e
e=c.a=e+"   }\n"}e+="   return lightAccum;\n"
c.a=e
e+="}\n"
c.a=e
c.a=e+"\n"},
ni:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=[]
s=a.b
if(!s.a)s=s.c
else s=!0
if(s)r.push("ambientColor")
s=a.c
if(!s.a)s=s.c
else s=!0
if(s)r.push("diffuse(norm, litVec)")
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)r.push("invDiffuse(norm, litVec)")
s=a.e
if(!s.a)s=s.c
else s=!0
if(s)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.a.q(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
np:function(a){var s,r,q,p,o,n,m,l,k,j="   lightAccum += all",i="precision mediump float;\n\n",h="precision mediump float;\n\nvarying vec3 normalVec;\n",g=new P.aK("")
g.a="precision mediump float;\n"
g.a=i
s=a.k4
if(s){g.a=h
r=h}else r=i
if(a.r1){r+="varying vec3 binormalVec;\n"
g.a=r}if(a.r2){r+="varying vec2 txt2D;\n"
g.a=r}if(a.rx){r+="varying vec3 txtCube;\n"
g.a=r}if(a.k2){r+="varying vec3 objPos;\n"
g.a=r}r=g.a=(a.k3?g.a=r+"varying vec3 viewPos;\n":r)+"\n"
q=a.y1
if(q){r+="uniform mat4 colorMat;\n"
g.a=r}if(a.go){r+="uniform mat4 viewMat;\n"
g.a=r}if(a.dy)r=g.a=r+"uniform mat4 invViewMat;\n"
g.a=r+"\n"
A.ng(a,g)
A.nc(a,g)
A.ne(a,g)
A.nh(a,g)
A.nn(a,g)
r=a.db
if(r){p=g.a+="// === Environmental ===\n"
p+="\n"
g.a=p
p+="uniform samplerCube envSampler;\n"
g.a=p
g.a=p+"\n"
A.nl(a,g)
A.nm(a,g)}A.nj(a,g)
p=g.a+="// === Alpha ===\n"
p=g.a=p+"\n"
o=a.y
n=o.a
if(n){p+="uniform float alpha;\n"
g.a=p}o=o.c
p=(o?g.a=p+"uniform samplerCube alphaTxt;\n":p)+"float alphaValue()\n"
g.a=p
p=g.a=p+"{\n"
if(!n)m=o
else m=!0
if(!m)p=g.a=p+"   return 1.0;\n"
else if(o){if(n){p+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
g.a=p}else{p+="   float a = textureCube(alphaTxt, txtCube).a;\n"
g.a=p}p+="   if (a <= 0.000001) discard;\n"
g.a=p
p+="   return a;\n"
g.a=p}else if(n){p+="   return alpha;\n"
g.a=p}p+="}\n"
g.a=p
g.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,l=0;l<o.length;o.length===n||(0,H.m)(o),++l)A.nd(a,o[l],g)
for(o=a.Q,n=o.length,l=0;l<o.length;o.length===n||(0,H.m)(o),++l)A.nf(a,o[l],g)
for(o=a.ch,n=o.length,l=0;l<o.length;o.length===n||(0,H.m)(o),++l)A.nk(a,o[l],g)
for(o=a.cx,n=o.length,l=0;l<o.length;o.length===n||(0,H.m)(o),++l)A.no(a,o[l],g)
A.ni(a,g)}o=g.a+="// === Main ===\n"
o+="\n"
g.a=o
o+="void main()\n"
g.a=o
o+="{\n"
g.a=o
o=g.a=o+"   float alpha = alphaValue();\n"
if(s){s=o+"   vec3 norm = normal();\n"
g.a=s}else s=o
if(r)s=g.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
k=[]
if(p){g.a=s+u.o
k.push("lightAccum")
s=a.b
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setAmbientColor();\n"
s=a.c
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setDiffuseColor();\n"
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setInvDiffuseColor();\n"
s=a.e
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,l=0;l<s.length;s.length===r||(0,H.m)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.d(p,0)
g.a+=j+(p[0].toUpperCase()+C.c.aT(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,l=0;l<s.length;s.length===r||(0,H.m)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.d(p,0)
g.a+=j+(p[0].toUpperCase()+C.c.aT(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,l=0;l<s.length;s.length===r||(0,H.m)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.d(p,0)
g.a+=j+(p[0].toUpperCase()+C.c.aT(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,l=0;l<s.length;s.length===r||(0,H.m)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.d(p,0)
g.a+=j+(p[0].toUpperCase()+C.c.aT(p,1))+"Values(norm);\n"}if(a.cy<=0)g.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(!s.a)s=s.c
else s=!0
if(s)k.push("emissionColor()")
s=a.r
if(!s.a)s=s.c
else s=!0
if(s)k.push("reflect(refl)")
s=a.x
if(!s.a)s=s.c
else s=!0
if(s)k.push("refract(refl)")
if(k.length<=0)k.push("vec3(0.0, 0.0, 0.0)")
s=g.a+="   vec4 objClr = vec4("+C.a.q(k," + ")+", alpha);\n"
if(q)s=g.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
g.a=s
s=g.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
nq:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.be+"];\n"
s+="attribute vec4 bendAttr;\n"
b.a=s
s+="\n"
b.a=s
s+="float weightSum;\n"
b.a=s
s=b.a=s+"vec3 bendPos;\n"
r=a.k4
if(r){s+="vec3 bendNorm;\n"
b.a=s}q=a.r1
s=(q?b.a=s+"vec3 bendBinm;\n":s)+"\n"
b.a=s
s+="void adjustBend(float bendVal)\n"
b.a=s
s+="{\n"
b.a=s
s+="   if(bendVal >= 0.0)\n"
b.a=s
s+="   {\n"
b.a=s
s+="      int index = int(floor((bendVal + 0.5)*0.5));\n"
b.a=s
s+="      if(index < bendMatCount)\n"
b.a=s
s+="      {\n"
b.a=s
s+="         float weight = clamp(bendVal - float(index)*2.0, 0.0, 1.0);\n"
b.a=s
s+="         mat4 m = bendValues[index].mat;\n"
b.a=s
s+="         weightSum += weight;\n"
b.a=s
s=b.a=s+"         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
if(r){s+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
b.a=s}s=(q?b.a=s+"         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n":s)+"      }\n"
b.a=s
s+="   }\n"
b.a=s
s+="}\n"
b.a=s
s+="\n"
b.a=s
s+="void setupBendData()\n"
b.a=s
s+="{\n"
b.a=s
s=b.a=s+"   bendPos = vec3(0.0, 0.0, 0.0);\n"
if(r){s+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
b.a=s}s=(q?b.a=s+"   bendBinm = vec3(0.0, 0.0, 0.0);\n":s)+"   weightSum = 0.0;\n"
b.a=s
s+="   adjustBend(bendAttr.x);\n"
b.a=s
s+="   adjustBend(bendAttr.y);\n"
b.a=s
s+="   adjustBend(bendAttr.z);\n"
b.a=s
s+="   adjustBend(bendAttr.w);\n"
b.a=s
s+="   if(weightSum < 1.0)\n"
b.a=s
s+="   {\n"
b.a=s
s+="      float weight = 1.0 - weightSum;\n"
b.a=s
s=b.a=s+"      bendPos += posAttr*weight;\n"
if(r){s+="      bendNorm += normAttr*weight;\n"
b.a=s}s=(q?b.a=s+"      bendBinm += binmAttr*weight;\n":s)+"   }\n"
b.a=s
s+="   else\n"
b.a=s
s+="   {\n"
b.a=s
s+="      bendPos = bendPos/weightSum;\n"
b.a=s
s=b.a=s+"   }\n"
if(r){s+="   bendNorm = normalize(bendNorm);\n"
b.a=s}s=(q?b.a=s+"   bendBinm = normalize(bendBinm);\n":s)+"}\n"
b.a=s
b.a=s+"\n"},
ns:function(a,b){var s
if(!a.k4)return
s=b.a+="varying vec3 normalVec;\n"
s+="\n"
b.a=s
s+="vec3 getNorm()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return normalize((viewObjMat*vec4("+(a.ry?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
nr:function(a,b){var s
if(!a.r1)return
s=b.a+="varying vec3 binormalVec;\n"
s+="\n"
b.a=s
s+="vec3 getBinm()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return normalize((viewObjMat*vec4("+(a.ry?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
nu:function(a,b){var s,r
if(!a.r2)return
s=a.x1
if(s)b.a+="uniform mat3 txt2DMat;\n"
r=b.a+="attribute vec2 txt2DAttr;\n"
r+="varying vec2 txt2D;\n"
b.a=r
r+="\n"
b.a=r
r+="vec2 getTxt2D()\n"
b.a=r
r=b.a=r+"{\n"
r=(s?b.a=r+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n":b.a=r+"   return txt2DAttr;\n")+"}\n"
b.a=r
b.a=r+"\n"},
nv:function(a,b){var s,r
if(!a.rx)return
s=a.x2
if(s)b.a+="uniform mat4 txtCubeMat;\n"
r=b.a+="attribute vec3 txtCubeAttr;\n"
r+="varying vec3 txtCube;\n"
b.a=r
r+="\n"
b.a=r
r+="vec3 getTxtCube()\n"
b.a=r
r=b.a=r+"{\n"
r=(s?b.a=r+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":b.a=r+"   return txtCubeAttr;\n")+"}\n"
b.a=r
b.a=r+"\n"},
nt:function(a,b){var s
if(!a.k2)return
s=b.a+="varying vec3 objPos;\n"
s+="\n"
b.a=s
s+="vec3 getObjPos()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return (objMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
nw:function(a,b){var s
if(!a.k3)return
s=b.a+="varying vec3 viewPos;\n"
s+="\n"
b.a=s
s+="vec3 getViewPos()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return (viewObjMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
fw:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.c.aT(a,1)},
mp:function(a,b){var s,r,q,p
for(s=0,r="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";s<a;++s)r=r+("uniform sampler2D txt"+s+";\n")+("uniform mat4 clrMat"+s+";\n")+("uniform vec2 srcLoc"+s+";\n")+("uniform vec2 srcSize"+s+";\n")+("uniform vec2 destLoc"+s+";\n")+("uniform vec2 destSize"+s+";\n")+("uniform int flip"+s+";\n")
r+="\nvec4 clrAccum;\n"
q=b===C.I
r=(q||b===C.q?r+"float colorCount;\n":r)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.r)r+="      clrAccum += color;\n"
else if(b===C.i)r+="      clrAccum = mix(clrAccum, color, color.a);\n"
else r=q?r+"      clrAccum += color;\n      colorCount += 1.0;\n":r+"      clrAccum = color;\n      colorCount = 1.0;\n"
r+="   }\n}\n\nvoid layoutAll()\n{\n"
p=b===C.q
if(p)for(s=a-1;s>=0;--s)r=r+("   if(txtCount > "+s+")\n")+"   {\n"+("     layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(s=0;s<a;++s)r=r+("   if(txtCount <= "+s+") return;\n")+("   layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")
r+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(q)r+="   colorCount = 1.0;\n"
else if(p)r+="   colorCount = 0.0;\n"
r+="   layoutAll();\n"
r=(q?r+"   clrAccum = clrAccum/colorCount;\n":r)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return r.charCodeAt(0)==0?r:r},
mo:function(a,b,c){var s="TextureLayout_"+a+"_"+C.d.i(b.a),r=new A.ij(c,s)
r.bn(c,s)
r.ea(a,b,c)
return r},
jL:function(a,b,c,d,e){var s=new A.ix(a,c,e)
s.f=d
P.jE(d,0,!1)
return s},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a){this.a=a},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hd:function hd(a,b){this.a=a
this.b=b},
hq:function hq(a,b){var _=this
_.dg=_.hS=_.bf=_.aB=_.be=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.i_=_.hZ=_.hY=_.c7=_.c6=_.c5=_.c4=_.c3=_.c2=_.c1=_.c0=_.du=_.hX=_.dt=_.ds=_.hW=_.dr=_.dq=_.dn=_.hV=_.dm=_.dl=_.dk=_.hU=_.dj=_.di=_.hT=_.dh=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fI:function fI(a,b){this.a=a
this.b=b},
fV:function fV(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p
_.dy=q
_.fr=r
_.fx=s
_.fy=a0
_.go=a1
_.id=a2
_.k1=a3
_.k2=a4
_.k3=a5
_.k4=a6
_.r1=a7
_.r2=a8
_.rx=a9
_.ry=b0
_.x1=b1
_.x2=b2
_.y1=b3
_.y2=b4
_.be=b5
_.aB=b6
_.bf=b7},
ee:function ee(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ef:function ef(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ei:function ei(a,b,c,d,e,f,g,h,i,j){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j},
el:function el(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=l
_.cy=m
_.db=n
_.dx=o
_.dy=p},
dT:function dT(){},
bm:function bm(a,b){this.a=a
this.b=b},
ij:function ij(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iw:function iw(){},
iB:function iB(a){this.a=a},
cq:function cq(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
iA:function iA(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ea:function ea(a,b,c){this.a=a
this.c=b
this.d=c},
eb:function eb(a,b,c){this.a=a
this.c=b
this.d=c},
ec:function ec(a,b,c){this.a=a
this.c=b
this.d=c},
ed:function ed(a,b,c){this.a=a
this.c=b
this.d=c},
iC:function iC(a,b,c){this.a=a
this.c=b
this.d=c},
eg:function eg(a,b,c){this.a=a
this.c=b
this.d=c},
eh:function eh(a,b,c){this.a=a
this.c=b
this.d=c},
ej:function ej(a,b,c){this.a=a
this.c=b
this.d=c},
ek:function ek(a,b,c){this.a=a
this.c=b
this.d=c}},F={
l7:function(a,b,c,d){var s=F.i_()
F.cR(s,b,c,d,a,1,0,0,1)
F.cR(s,b,c,d,a,0,1,0,3)
F.cR(s,b,c,d,a,0,0,1,2)
F.cR(s,b,c,d,a,-1,0,0,0)
F.cR(s,b,c,d,a,0,-1,0,0)
F.cR(s,b,c,d,a,0,0,-1,3)
s.at()
return s},
j7:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cR:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.x(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.x(s+a5,r+a3,q+a4)
o=new V.x(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.x(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.j7(g)
j=F.j7(f)
i=F.lj(a1,a2,new F.j6(h,F.j7(e),F.j7(d),j,k,a0),b)
if(i!=null)a.b1(i)},
l9:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0<3)return null
s=F.i_()
r=b?-1:1
q=-6.283185307179586/a0
p=[]
o=s.a
n=new V.x(0,0,r).G()
p.push(o.fV(new V.ab(a,-1,-1,-1),new V.U(1,1,1,1),new V.I(0,0,c),new V.x(0,0,r),new V.W(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(typeof i!=="number")return H.p(i)
n=new V.x(k,j,r).G()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
o.toString
e=F.er(new V.ab(a,-1,-1,-1),null,new V.U(h,f,g,1),new V.I(k*i,j*i,c),new V.x(0,0,r),new V.W(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.k(0,e)
p.push(e)}s.d.cZ(p)
return s},
l8:function(a,b,c){return F.nR(!0,!0,1,new F.jc(a,c),b)},
nR:function(a,b,c,d,e){var s,r=null
if(e<3)return r
if(c<1)return r
s=F.lj(c,e,new F.jd(d),r)
if(s==null)return r
s.at()
s.d1()
s.b1(F.l9(3,!1,1,new F.je(d),e))
s.b1(F.l9(1,!0,-1,new F.jf(d),e))
return s},
o8:function(a){var s,r,q={}
q.a=s
q.a=null
q.a=new F.jo()
r=F.l7(8,null,new F.jp(q,a),8)
r.d1()
return r},
lj:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.i_()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.er(e,e,new V.U(n,0,0,1),e,e,new V.W(p,1),e,e,0)
o.k(0,m)
c.$3(m,p,0)
r.push(m.bX(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.er(e,e,new V.U(h,g,f,1),e,e,new V.W(p,k),e,e,0)
i.k(0,m)
c.$3(m,p,l)
r.push(m.bX(d))}}s.d.fU(a+1,b+1,r)
return s},
c_:function(a,b,c){var s=new F.h6(),r=a.a
if(r==null)H.o(P.n("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.o(P.n("May not create a face with vertices attached to different shapes."))
s.bL(a)
s.bM(b)
s.fH(c)
s.a.a.d.b.push(s)
s.a.a.X()
return s},
lZ:function(a,b){var s=new F.hk(),r=a.a
if(r==null)H.o(P.n("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.o(P.n("May not create a line with vertices attached to different shapes."))
s.bL(a)
s.bM(b)
s.a.a.c.b.push(s)
s.a.a.X()
return s},
i_:function(){var s=new F.hZ(),r=new F.iH(s)
r.b=!1
r.c=[]
s.a=r
r=new F.i2(s)
r.b=[]
s.b=r
r=new F.i1(s)
r.b=[]
s.c=r
r=new F.i0(s)
r.b=[]
s.d=r
return s},
er:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.iG(),p=new F.iP()
p.b=[]
q.b=p
p=new F.iL()
p.b=[]
p.c=[]
q.c=p
p=new F.iI()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.ly()
q.e=0
p=$.a4()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aU().a)!==0?e:r
q.x=(s&$.aT().a)!==0?b:r
q.y=(s&$.aB().a)!==0?f:r
q.z=(s&$.aV().a)!==0?g:r
q.Q=(s&$.lz().a)!==0?c:r
q.ch=(s&$.bP().a)!==0?i:0
q.cx=(s&$.aS().a)!==0?a:r
return q},
j6:function j6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jc:function jc(a,b){this.a=a
this.b=b},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
jo:function jo(){},
jp:function jp(a,b){this.a=a
this.b=b},
h6:function h6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h7:function h7(){},
i6:function i6(){},
hk:function hk(){this.b=this.a=null},
hl:function hl(){},
iv:function iv(){},
hO:function hO(){this.a=null},
hZ:function hZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i0:function i0(a){this.a=a
this.b=null},
i1:function i1(a){this.a=a
this.b=null},
i2:function i2(a){this.a=a
this.b=null},
iG:function iG(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iR:function iR(a){this.a=a},
iQ:function iQ(a){this.a=a},
iH:function iH(a){this.a=a
this.c=this.b=null},
iI:function iI(){this.d=this.c=this.b=null},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(a,b){this.a=a
this.b=b},
iL:function iL(){this.c=this.b=null},
iN:function iN(){},
iM:function iM(){},
iO:function iO(){},
hM:function hM(){},
iP:function iP(){this.b=null}},T={
ky:function(a){var s=new T.ih()
s.a=0
s.b=a
s.d=s.c=!1
s.x=s.r=s.f=s.e=0
return s},
ie:function ie(){},
ig:function ig(){},
ih:function ih(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(a){var _=this
_.a=a
_.e=_.d=_.c=null},
il:function il(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jC.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gS:function(a){return H.ck(a)},
i:function(a){return"Instance of '"+H.e(H.dM(a))+"'"}}
J.hg.prototype={
i:function(a){return String(a)},
gS:function(a){return a?519018:218159}}
J.c7.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0}}
J.b3.prototype={
gS:function(a){return 0},
i:function(a){return String(a)}}
J.dJ.prototype={}
J.bC.prototype={}
J.ag.prototype={
i:function(a){var s=a[$.ln()]
if(s==null)return this.e4(a)
return"JavaScript function for "+H.e(J.a1(s))}}
J.a8.prototype={
cj:function(a,b){if(!!a.fixed$length)H.o(P.w("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dN(b,null))
return a.splice(b,1)[0]},
B:function(a,b){var s
if(!!a.fixed$length)H.o(P.w("remove"))
for(s=0;s<a.length;++s)if(J.v(a[s],b)){a.splice(s,1)
return!0}return!1},
bc:function(a,b){var s,r
if(!!a.fixed$length)H.o(P.w("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.m)(b),++r)a.push(b[r])},
I:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bS(a))}},
q:function(a,b){var s,r,q=P.jE(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.e(a[s])
if(s>=q.length)return H.d(q,s)
q[s]=r}return q.join(b)},
hf:function(a){return this.q(a,"")},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ct:function(a,b){var s=a.length
if(b>s)throw H.c(P.au(b,0,s,"start",null))
if(b===s)return[]
return a.slice(b,s)},
ghc:function(a){if(a.length>0)return a[0]
throw H.c(H.kg())},
gca:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.kg())},
aS:function(a,b){if(!!a.immutable$list)H.o(P.w("sort"))
H.mn(a,b==null?J.n3():b)},
e1:function(a){return this.aS(a,null)},
L:function(a,b){var s
for(s=0;s<a.length;++s)if(J.v(a[s],b))return!0
return!1},
i:function(a){return P.jA(a,"[","]")},
gN:function(a){return new J.R(a,a.length)},
gS:function(a){return H.ck(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.o(P.w("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bN(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.o(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bN(a,b))
a[b]=c},
$ii:1,
$if:1}
J.dn.prototype={}
J.R.prototype={
gH:function(a){return this.d},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.m(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.b2.prototype={
aO:function(a,b){var s
if(typeof b!="number")throw H.c(H.az(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbh(b)
if(this.gbh(a)===s)return 0
if(this.gbh(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbh:function(a){return a===0?1/a<0:a<0},
hH:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.w(""+a+".toInt()"))},
c8:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.w(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.w(""+a+".round()"))},
dS:function(a,b){var s
if(b>20)throw H.c(P.au(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbh(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
n:function(a,b){if(typeof b!="number")throw H.c(H.az(b))
return a*b},
dW:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
e5:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cW(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cW(a,b)},
cW:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.w("Result of truncating division is "+H.e(s)+": "+H.e(a)+" ~/ "+b))},
ba:function(a,b){var s
if(a>0)s=this.fL(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fL:function(a,b){return b>31?0:a>>>b},
$iY:1,
$iN:1}
J.c6.prototype={$iq:1}
J.c5.prototype={}
J.aD.prototype={
bW:function(a,b){if(b<0)throw H.c(H.bN(a,b))
if(b>=a.length)H.o(H.bN(a,b))
return a.charCodeAt(b)},
cH:function(a,b){if(b>=a.length)throw H.c(H.bN(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!="string")throw H.c(P.k4(b,null,null))
return a+b},
cu:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dN(b,null))
if(b>c)throw H.c(P.dN(b,null))
if(c>a.length)throw H.c(P.dN(c,null))
return a.substring(b,c)},
aT:function(a,b){return this.cu(a,b,null)},
n:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.G)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ak:function(a,b){var s=b-a.length
if(s<=0)return a
return this.n(" ",s)+a},
h2:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.au(c,0,s,null,null))
return H.lh(a,b,c)},
L:function(a,b){return this.h2(a,b,0)},
aO:function(a,b){var s
if(typeof b!="string")throw H.c(H.az(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gS:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gj:function(a){return a.length},
$iK:1}
H.H.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.c.bW(this.a,b)}}
H.i.prototype={}
H.br.prototype={
gH:function(a){var s=this.d
return s},
u:function(){var s,r=this,q=r.a,p=J.be(q),o=p.gj(q)
if(r.b!=o)throw H.c(P.bS(q))
s=r.c
if(typeof o!=="number")return H.p(o)
if(s>=o){r.d=null
return!1}r.d=p.F(q,s);++r.c
return!0}}
H.b5.prototype={
gN:function(a){return new H.cb(J.bh(this.a),this.b)},
gj:function(a){return J.bi(this.a)},
F:function(a,b){return this.b.$1(J.js(this.a,b))}}
H.bY.prototype={$ii:1}
H.cb.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gH(r))
return!0}s.a=null
return!1},
gH:function(a){var s=this.a
return s}}
H.cw.prototype={
gN:function(a){return new H.eu(J.bh(this.a),this.b)}}
H.eu.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gH(s)))return!0
return!1},
gH:function(a){var s=this.a
return s.gH(s)}}
H.c0.prototype={}
H.eo.prototype={
l:function(a,b,c){throw H.c(P.w("Cannot modify an unmodifiable list"))}}
H.bD.prototype={}
H.it.prototype={
aj:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
H.dD.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dp.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.e(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.e(r.a)+")"
return q+p+"' on '"+s+"' ("+H.e(r.a)+")"}}
H.en.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hN.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.f7.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bk.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.ll(r==null?"unknown":r)+"'"},
ghL:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ic.prototype={}
H.i8.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.ll(s)+"'"}}
H.bQ.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bQ))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gS:function(a){var s,r=this.c
if(r==null)s=H.ck(this.a)
else s=typeof r!=="object"?J.Z(r):H.ck(r)
return(s^H.ck(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.dM(s))+"'")}}
H.dR.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.u.prototype={
gj:function(a){return this.a},
gaC:function(a){return new H.aE(this)},
ghK:function(a){return H.m1(new H.aE(this),new H.hi(this))},
h3:function(a,b){var s=this.b
if(s==null)return!1
return this.ep(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b8(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b8(p,b)
q=r==null?n:r.b
return q}else return o.he(b)},
he:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cM(q,J.Z(a)&0x3ffffff)
r=this.dv(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cE(s==null?m.b=m.bD():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cE(r==null?m.c=m.bD():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bD()
p=J.Z(b)&0x3ffffff
o=m.cM(q,p)
if(o==null)m.bJ(q,p,[m.bE(b,c)])
else{n=m.dv(o,b)
if(n>=0)o[n].b=c
else o.push(m.bE(b,c))}}},
I:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bS(s))
r=r.c}},
cE:function(a,b,c){var s=this.b8(a,b)
if(s==null)this.bJ(a,b,this.bE(b,c))
else s.b=c},
bE:function(a,b){var s=this,r=new H.hm(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dv:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1},
i:function(a){return P.kk(this)},
b8:function(a,b){return a[b]},
cM:function(a,b){return a[b]},
bJ:function(a,b,c){a[b]=c},
es:function(a,b){delete a[b]},
ep:function(a,b){return this.b8(a,b)!=null},
bD:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bJ(r,s,r)
this.es(r,s)
return r}}
H.hi.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.n1(this.a).ax("2(1)")}}
H.hm.prototype={}
H.aE.prototype={
gj:function(a){return this.a.a},
gN:function(a){var s=this.a,r=new H.ds(s,s.r)
r.c=s.e
return r}}
H.ds.prototype={
gH:function(a){return this.d},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bS(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jh.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.ji.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jj.prototype={
$1:function(a){return this.a(a)}}
H.hh.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.ch.prototype={}
H.bu.prototype={
gj:function(a){return a.length},
$it:1}
H.b7.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]},
l:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.cg.prototype={
l:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.dx.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dy.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dz.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dA.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dB.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.ci.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dC.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.cC.prototype={}
H.cD.prototype={}
H.cE.prototype={}
H.cF.prototype={}
H.ad.prototype={
ax:function(a){return H.fj(v.typeUniverse,this,a)},
cF:function(a){return H.mP(v.typeUniverse,this,a)}}
H.eL.prototype={}
H.eG.prototype={
i:function(a){return this.a}}
H.cN.prototype={}
P.iT.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:16}
P.iS.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.iU.prototype={
$0:function(){this.a.$0()}}
P.iV.prototype={
$0:function(){this.a.$0()}}
P.cM.prototype={
ee:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bM(new P.j3(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))},
ef:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bM(new P.j2(this,a,Date.now(),b),0),a)
else throw H.c(P.w("Periodic timer."))},
$ico:1}
P.j3.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.j2.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.d.e5(s,o)}q.c=p
r.d.$1(q)}}
P.bG.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bH.prototype={
gH:function(a){var s=this.c
if(s==null)return this.b
return s.gH(s)},
u:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.u())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bG){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.bh(s)
if(o instanceof P.bH){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cJ.prototype={
gN:function(a){return new P.bH(this.a())}}
P.ev.prototype={}
P.e_.prototype={}
P.e0.prototype={}
P.co.prototype={}
P.j5.prototype={}
P.ja.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.a1(this.b)
throw s}}
P.j_.prototype={
hD:function(a){var s,r,q,p=null
try{if(C.e===$.aj){a.$0()
return}P.nz(p,p,this,a)}catch(q){s=H.fx(q)
r=H.jZ(q)
P.l3(p,p,this,s,r)}},
hE:function(a,b){var s,r,q,p=null
try{if(C.e===$.aj){a.$1(b)
return}P.nA(p,p,this,a,b)}catch(q){s=H.fx(q)
r=H.jZ(q)
P.l3(p,p,this,s,r)}},
hF:function(a,b){return this.hE(a,b,t.z)},
h_:function(a){return new P.j0(this,a)},
d3:function(a,b){return new P.j1(this,a,b)}}
P.j0.prototype={
$0:function(){return this.a.hD(this.b)}}
P.j1.prototype={
$1:function(a){return this.a.hF(this.b,a)},
$S:function(){return this.c.ax("~(0)")}}
P.cy.prototype={
gN:function(a){var s=new P.cz(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
L:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.en(b)
return r}},
en:function(a){var s=this.d
if(s==null)return!1
return this.bu(s[this.br(a)],a)>=0},
k:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cI(s==null?q.b=P.jO():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cI(r==null?q.c=P.jO():r,b)}else return q.eh(0,b)},
eh:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jO()
s=q.br(b)
r=p[s]
if(r==null)p[s]=[q.bq(b)]
else{if(q.bu(r,b)>=0)return!1
r.push(q.bq(b))}return!0},
B:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fA(this.c,b)
else return this.fz(0,b)},
fz:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.br(b)
r=n[s]
q=o.bu(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cY(p)
return!0},
cI:function(a,b){if(a[b]!=null)return!1
a[b]=this.bq(b)
return!0},
fA:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cY(s)
delete a[b]
return!0},
cN:function(){this.r=1073741823&this.r+1},
bq:function(a){var s,r=this,q=new P.iZ(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cN()
return q},
cY:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cN()},
br:function(a){return J.Z(a)&1073741823},
bu:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.v(a[r].a,b))return r
return-1}}
P.iZ.prototype={}
P.cz.prototype={
gH:function(a){return this.d},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bS(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.c4.prototype={}
P.c9.prototype={$ii:1,$if:1}
P.B.prototype={
gN:function(a){return new H.br(a,this.gj(a))},
F:function(a,b){return this.h(a,b)},
gdz:function(a){return this.gj(a)===0},
hI:function(a){var s,r,q,p,o=this
if(o.gdz(a)){s=J.kh(0)
return s}r=o.h(a,0)
q=P.jE(o.gj(a),r,!0)
p=1
while(!0){s=o.gj(a)
if(typeof s!=="number")return H.p(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s;++p}return q},
i:function(a){return P.jA(a,"[","]")}}
P.du.prototype={}
P.hp.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.e(a)
r.a=s+": "
r.a+=H.e(b)},
$S:17}
P.ar.prototype={
I:function(a,b){var s,r
for(s=J.bh(this.gaC(a));s.u();){r=s.gH(s)
b.$2(r,this.h(a,r))}},
gj:function(a){return J.bi(this.gaC(a))},
i:function(a){return P.kk(a)}}
P.cG.prototype={
i:function(a){return P.jA(this,"{","}")},
F:function(a,b){var s,r,q,p="index"
P.lI(b,p)
P.ku(b,p)
for(s=P.mz(this,this.r),r=0;s.u();){q=s.d
if(b===r)return q;++r}throw H.c(P.F(b,this,p,null,r))},
$ii:1,
$if:1}
P.cA.prototype={}
P.d8.prototype={}
P.da.prototype={}
P.h0.prototype={}
P.iE.prototype={}
P.iF.prototype={
h4:function(a){var s,r,q,p=null,o=P.jH(0,p,a.length)
if(o==null)throw H.c(new P.bz(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.j4(r)
if(q.ev(a,0,o)!==o){C.c.bW(a,o-1)
q.bN()}return new Uint8Array(r.subarray(0,H.mW(0,q.b,r.length)))}}
P.j4.prototype={
bN:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
fS:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.d(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.d(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=128|s&63
return!0}else{n.bN()
return!1}},
ev:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.c.bW(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.c.cH(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fS(p,C.c.cH(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bN()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.d(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.d(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=128|p&63}}}return q}}
P.bd.prototype={}
P.a7.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
aO:function(a,b){return C.d.aO(this.a,b.a)},
gS:function(a){var s=this.a
return(s^C.d.ba(s,30))&1073741823},
i:function(a){var s=this,r=P.lR(H.mc(s)),q=P.dc(H.ma(s)),p=P.dc(H.m6(s)),o=P.dc(H.m7(s)),n=P.dc(H.m9(s)),m=P.dc(H.mb(s)),l=P.lS(H.m8(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.Y.prototype={}
P.aY.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aY&&this.a===b.a},
gS:function(a){return C.d.gS(this.a)},
aO:function(a,b){return C.d.aO(this.a,b.a)},
i:function(a){var s,r,q,p=new P.fZ(),o=this.a
if(o<0)return"-"+new P.aY(0-o).i(0)
s=p.$1(C.d.a0(o,6e7)%60)
r=p.$1(C.d.a0(o,1e6)%60)
q=new P.fY().$1(o%1e6)
return""+C.d.a0(o,36e8)+":"+H.e(s)+":"+H.e(r)+"."+H.e(q)}}
P.fY.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fZ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.E.prototype={}
P.d4.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.h3(s)
return"Assertion failed"}}
P.dE.prototype={
i:function(a){return"Throw of null."}}
P.a5.prototype={
gbt:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbs:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbt()+o+m
if(!q.a)return l
s=q.gbs()
r=P.h3(q.b)
return l+s+": "+r}}
P.bz.prototype={
gbt:function(){return"RangeError"},
gbs:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.e(q):""
else if(q==null)s=": Not greater than or equal to "+H.e(r)
else if(q>r)s=": Not in inclusive range "+H.e(r)+".."+H.e(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.e(r)
return s}}
P.dl.prototype={
gbt:function(){return"RangeError"},
gbs:function(){var s,r=this.b
if(typeof r!=="number")return r.ag()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.e(s)},
gj:function(a){return this.f}}
P.ep.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.em.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.dZ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.d9.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h3(s)+"."}}
P.dH.prototype={
i:function(a){return"Out of Memory"},
$iE:1}
P.cn.prototype={
i:function(a){return"Stack Overflow"},
$iE:1}
P.db.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.eI.prototype={
i:function(a){return"Exception: "+this.a}}
P.ha.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.c.cu(q,0,75)+"..."
return r+"\n"+q}}
P.q.prototype={}
P.f.prototype={
gj:function(a){var s,r=this.gN(this)
for(s=0;r.u();)++s
return s},
F:function(a,b){var s,r,q
P.ku(b,"index")
for(s=this.gN(this),r=0;s.u();){q=s.gH(s)
if(b===r)return q;++r}throw H.c(P.F(b,this,"index",null,r))},
i:function(a){return P.lU(this,"(",")")}}
P.dm.prototype={}
P.aq.prototype={$ii:1,$if:1}
P.dt.prototype={}
P.aa.prototype={
gS:function(a){return P.G.prototype.gS.call(C.h,this)},
i:function(a){return"null"}}
P.N.prototype={}
P.G.prototype={constructor:P.G,$iG:1,
p:function(a,b){return this===b},
gS:function(a){return H.ck(this)},
i:function(a){return"Instance of '"+H.e(H.dM(this))+"'"},
toString:function(){return this.i(this)}}
P.K.prototype={}
P.aK.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.k.prototype={}
W.fy.prototype={
gj:function(a){return a.length}}
W.d2.prototype={
i:function(a){return String(a)}}
W.d3.prototype={
i:function(a){return String(a)}}
W.d6.prototype={}
W.aX.prototype={
cp:function(a,b,c){if(c!=null)return a.getContext(b,P.nO(c))
return a.getContext(b)},
dV:function(a,b){return this.cp(a,b,null)},
$iaX:1}
W.af.prototype={
gj:function(a){return a.length}}
W.fQ.prototype={
gj:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bV.prototype={
gj:function(a){return a.length}}
W.fR.prototype={}
W.a6.prototype={}
W.al.prototype={}
W.fS.prototype={
gj:function(a){return a.length}}
W.fT.prototype={
gj:function(a){return a.length}}
W.fU.prototype={
gj:function(a){return a.length}}
W.fW.prototype={
i:function(a){return String(a)}}
W.bW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.bX.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gam(a))+" x "+H.e(this.gai(a))},
p:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bf(b)
s=a.left==s.gbi(b)&&a.top==s.gbl(b)&&this.gam(a)==s.gam(b)&&this.gai(a)==s.gai(b)}else s=!1
return s},
gS:function(a){return W.kR(J.Z(a.left),J.Z(a.top),J.Z(this.gam(a)),J.Z(this.gai(a)))},
gd5:function(a){return a.bottom},
gai:function(a){return a.height},
gbi:function(a){return a.left},
gbk:function(a){return a.right},
gbl:function(a){return a.top},
gam:function(a){return a.width},
$iac:1}
W.dd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.fX.prototype={
gj:function(a){return a.length}}
W.ey.prototype={
gdz:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b])},
k:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var s=this.hI(this)
return new J.R(s,s.length)}}
W.J.prototype={
gd6:function(a){return new W.ey(a,a.children)},
gd7:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.ag()
if(q<0)q=-q*0
if(typeof p!=="number")return p.ag()
if(p<0)p=-p*0
return new P.ac(s,r,q,p,t.I)},
i:function(a){return a.localName},
$iJ:1}
W.h.prototype={$ih:1}
W.b.prototype={
fT:function(a,b,c,d){if(c!=null)this.ei(a,b,c,!1)},
ei:function(a,b,c,d){return a.addEventListener(b,H.bM(c,1),!1)},
$ib:1}
W.aZ.prototype={$iaZ:1}
W.df.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.dg.prototype={
gj:function(a){return a.length}}
W.di.prototype={
gj:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.he.prototype={
gj:function(a){return a.length}}
W.b0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.b1.prototype={
gd9:function(a){return a.data},
$ib1:1}
W.bp.prototype={$ibp:1}
W.b4.prototype={$ib4:1}
W.hn.prototype={
i:function(a){return String(a)}}
W.hG.prototype={
gj:function(a){return a.length}}
W.hH.prototype={
h:function(a,b){return P.aR(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aR(s.value[1]))}},
gaC:function(a){var s=[]
this.I(a,new W.hI(s))
return s},
gj:function(a){return a.size}}
W.hI.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hJ.prototype={
h:function(a,b){return P.aR(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aR(s.value[1]))}},
gaC:function(a){var s=[]
this.I(a,new W.hK(s))
return s},
gj:function(a){return a.size}}
W.hK.prototype={
$2:function(a,b){return this.a.push(a)}}
W.b6.prototype={$ib6:1}
W.dw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.a2.prototype={$ia2:1}
W.ex.prototype={
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b])},
gN:function(a){var s=this.a.childNodes
return new W.c1(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.y.prototype={
hB:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lC(s,b,a)}catch(q){H.fx(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.e3(a):s},
fC:function(a,b,c){return a.replaceChild(b,c)},
$iy:1}
W.cj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.b8.prototype={
gj:function(a){return a.length},
$ib8:1}
W.dK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.hW.prototype={
h:function(a,b){return P.aR(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aR(s.value[1]))}},
gaC:function(a){var s=[]
this.I(a,new W.hX(s))
return s},
gj:function(a){return a.size}}
W.hX.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dS.prototype={
gj:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.dV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.b9.prototype={$ib9:1}
W.dW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.ba.prototype={
gj:function(a){return a.length},
$iba:1}
W.i9.prototype={
h:function(a,b){return a.getItem(H.mU(b))},
I:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaC:function(a){var s=[]
this.I(a,new W.ia(s))
return s},
gj:function(a){return a.length}}
W.ia.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aL.prototype={$iaL:1}
W.aM.prototype={$iaM:1}
W.ai.prototype={$iai:1}
W.e2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.e3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.io.prototype={
gj:function(a){return a.length}}
W.bb.prototype={$ibb:1}
W.bc.prototype={$ibc:1}
W.e8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.ir.prototype={
gj:function(a){return a.length}}
W.aw.prototype={}
W.iD.prototype={
i:function(a){return String(a)}}
W.es.prototype={
gj:function(a){return a.length}}
W.aN.prototype={
gh8:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.w("deltaY is not supported"))},
gh7:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.w("deltaX is not supported"))},
$iaN:1}
W.bF.prototype={
fD:function(a,b){return a.requestAnimationFrame(H.bM(b,1))},
eu:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ez.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.cx.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bf(b)
s=a.left==s.gbi(b)&&a.top==s.gbl(b)&&a.width==s.gam(b)&&a.height==s.gai(b)}else s=!1
return s},
gS:function(a){return W.kR(J.Z(a.left),J.Z(a.top),J.Z(a.width),J.Z(a.height))},
gai:function(a){return a.height},
gam:function(a){return a.width}}
W.eM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.cB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.f4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.fb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.jz.prototype={}
W.eH.prototype={}
W.iW.prototype={
$1:function(a){return this.a.$1(a)}}
W.jN.prototype={}
W.C.prototype={
gN:function(a){return new W.c1(a,this.gj(a))}}
W.c1.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.d0(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gH:function(a){return this.d}}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f1.prototype={}
W.cH.prototype={}
W.cI.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f8.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.cK.prototype={}
W.cL.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
P.cO.prototype={$ib1:1,
gd9:function(a){return this.a}}
P.jb.prototype={
$2:function(a,b){this.a[a]=b},
$S:18}
P.dh.prototype={
gb9:function(){return new H.b5(new H.cw(this.b,new P.h8()),new P.h9())},
l:function(a,b,c){var s=this.gb9()
J.lH(s.b.$1(J.js(s.a,b)),c)},
k:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bi(this.gb9().a)},
h:function(a,b){var s=this.gb9()
return s.b.$1(J.js(s.a,b))},
gN:function(a){var s=P.jF(this.gb9(),!1)
return new J.R(s,s.length)}}
P.h8.prototype={
$1:function(a){return t.h.b(a)}}
P.h9.prototype={
$1:function(a){return t.h.a(a)}}
P.f0.prototype={
gbk:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.p(r)
return this.$ti.c.a(s+r)},
gd5:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.p(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.e(s.a)+", "+H.e(s.b)+") "+H.e(s.c)+" x "+H.e(s.d)},
p:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.bf(b)
if(s==r.gbi(b)){q=n.b
if(q==r.gbl(b)){p=n.c
if(typeof s!=="number")return s.A()
if(typeof p!=="number")return H.p(p)
o=n.$ti.c
if(o.a(s+p)===r.gbk(b)){s=n.d
if(typeof q!=="number")return q.A()
if(typeof s!=="number")return H.p(s)
r=o.a(q+s)===r.gd5(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gS:function(a){var s,r=this,q=r.a,p=J.Z(q),o=r.b,n=J.Z(o),m=r.c
if(typeof q!=="number")return q.A()
if(typeof m!=="number")return H.p(m)
s=r.$ti.c
m=C.d.gS(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.A()
if(typeof q!=="number")return H.p(q)
q=C.d.gS(s.a(o+q))
return P.my(P.iY(P.iY(P.iY(P.iY(0,p),n),m),q))}}
P.ac.prototype={
gbi:function(a){return this.a},
gbl:function(a){return this.b},
gam:function(a){return this.c},
gai:function(a){return this.d}}
P.bq.prototype={$ibq:1}
P.dr.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.bv.prototype={$ibv:1}
P.dF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.hQ.prototype={
gj:function(a){return a.length}}
P.e1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gd6:function(a){return new P.dh(a,new W.ex(a))}}
P.bB.prototype={$ibB:1}
P.e9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eP.prototype={}
P.eQ.prototype={}
P.eX.prototype={}
P.eY.prototype={}
P.f9.prototype={}
P.fa.prototype={}
P.fg.prototype={}
P.fh.prototype={}
P.fD.prototype={
gj:function(a){return a.length}}
P.fE.prototype={
h:function(a,b){return P.aR(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aR(s.value[1]))}},
gaC:function(a){var s=[]
this.I(a,new P.fF(s))
return s},
gj:function(a){return a.size}}
P.fF.prototype={
$2:function(a,b){return this.a.push(a)}}
P.d5.prototype={
gj:function(a){return a.length}}
P.aC.prototype={}
P.dG.prototype={
gj:function(a){return a.length}}
P.ew.prototype={}
P.dQ.prototype={
dR:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.bJ(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.s.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.nP(g))
return}if(t.k.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.jt("Incorrect number or type of arguments"))},
hG:function(a,b,c,d,e,f,g){return this.dR(a,b,c,d,e,f,g,null,null,null)}}
P.dX.prototype={
gj:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
s=P.aR(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.f5.prototype={}
P.f6.prototype={}
K.fz.prototype={
aP:function(a,b){return!0},
i:function(a){return"all"}}
K.dk.prototype={
aP:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)if(s[q].aP(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.m)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.aH.prototype={
aP:function(a,b){return!this.e2(0,b)},
i:function(a){return"!["+this.cv(0)+"]"}}
K.hY.prototype={
e8:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.n("May not create a Set with zero characters."))
s=new H.u(t.E)
for(r=new H.br(a,a.gj(a));r.u();){q=r.d
s.l(0,q,!0)}p=P.jF(new H.aE(s),!0)
C.a.e1(p)
this.a=p},
aP:function(a,b){return C.a.L(this.a,b)},
i:function(a){return P.jI(this.a)}}
L.dY.prototype={
q:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.is(this.a.K(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
hb:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
if(p.aP(0,a))return p}return null},
i:function(a){return this.b},
cX:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.L(0,l))m+=" (consume)"
for(l=new H.aE(n.d.c),l=l.gN(l);l.u();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.e(r)+" => ["+H.e(q)+"]")
m=s.c.L(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.m)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.e6.prototype={
i:function(a){var s=H.li(this.b,"\n","\\n"),r=H.li(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.e7.prototype={
i:function(a){return this.b}}
L.ip.prototype={
K:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.dY(this,b)
s.c=[]
this.a.l(0,b,s)}return s},
b5:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.e7(a)
s.c=new H.u(t.i)
this.b.l(0,a,s)}return s},
dT:function(a){return this.hJ(a)},
hJ:function(a){var s=this
return P.nb(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$dT(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.cj(a0,0)
else{if(!r.u()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.hb(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.jI(b)
throw H.c(P.n("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.o(P.w("removeRange"))
P.jH(0,k,b.length)
b.splice(0,k-0)
C.a.bc(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.L(0,n.a)?7:8
break
case 7:q=9
return n
case 9:case 8:m=l
n=null
k=0
q=5
break
case 6:if(!h.c)c.push(j)
d=h.b
if(d.d!=null){g=P.jI(c)
f=d.d
e=f.c.h(0,g)
n=new L.e6(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.L(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.mw()
case 1:return P.mx(o)}}},t.j)},
i:function(a){var s,r=new P.aK(""),q=this.d
if(q!=null)r.a=q.cX()+"\n"
for(q=this.a,q=q.ghK(q),q=new H.cb(J.bh(q.a),q.b);q.u();){s=q.a
if(s!=this.d)r.a+=s.cX()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.is.prototype={
i:function(a){return this.b.b+": "+this.cv(0)}}
O.bl.prototype={
b7:function(){this.a=[]
this.c=this.b=null},
cq:function(a,b,c){this.b=b
this.c=a},
aF:function(a,b){return this.cq(a,null,b)},
bF:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cO:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gj:function(a){return this.a.length},
gN:function(a){var s=this.a
return new J.R(s,s.length)},
F:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
k:function(a,b){var s,r
if(this.bF([b])){s=this.a
r=s.length
s.push(b)
this.cO(r,[b])}},
bc:function(a,b){var s,r
if(this.bF(b)){s=this.a
r=s.length
C.a.bc(s,b)
this.cO(r,b)}},
$if:1}
O.ce.prototype={
gj:function(a){return this.a.length},
gm:function(){var s=this.b
return s==null?this.b=D.A():s},
aH:function(){var s=this.b
if(s!=null)s.v(null)},
ga5:function(a){var s=this.a
if(s.length>0)return C.a.gca(s)
else return V.aG()},
bj:function(a){var s=this.a
if(a==null)s.push(V.aG())
else s.push(a)
this.aH()},
b4:function(){var s=this.a
if(s.length>0){s.pop()
this.aH()}}}
E.fJ.prototype={}
E.bn.prototype={
cG:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.R(s,s.length);s.u();){r=s.d
if(r.f==null)r.cG()}},
saG:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gm().B(0,q.gdJ())
s=q.c
if(s!=null)s.gm().k(0,q.gdJ())
r=new D.l("shape",p,q.c)
r.b=!0
q.ap(r)}},
saf:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gm().B(0,q.gdL())
s=q.f
q.f=a
if(a!=null)a.gm().k(0,q.gdL())
q.cG()
r=new D.l("technique",s,q.f)
r.b=!0
q.ap(r)}},
sau:function(a){var s,r,q=this
if(!J.v(q.r,a)){s=q.r
if(s!=null)s.gm().B(0,q.gdH())
if(a!=null)a.gm().k(0,q.gdH())
q.r=a
r=new D.l("mover",s,a)
r.b=!0
q.ap(r)}},
a6:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aq(0,b,q):null
if(!J.v(o,q.x)){s=q.x
q.x=o
r=new D.l("matrix",s,o)
r.b=!0
q.ap(r)}p=q.f
if(p!=null)p.a6(0,b)
for(p=q.y.a,p=new J.R(p,p.length);p.u();)p.d.a6(0,b)},
Z:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga5(q))
else o.push(p.n(0,q.ga5(q)))
q.aH()
a.ci(r.f)
q=a.dy
s=(q&&C.a).gca(q)
if(s!=null&&r.d!=null)s.cm(a,r)
for(q=r.y.a,q=new J.R(q,q.length);q.u();)q.d.Z(a)
a.cg()
a.dx.b4()},
ap:function(a){var s=this.z
if(s!=null)s.v(a)},
X:function(){return this.ap(null)},
dK:function(a){this.e=null
this.ap(a)},
ho:function(){return this.dK(null)},
dM:function(a){this.ap(a)},
hp:function(){return this.dM(null)},
dI:function(a){this.ap(a)},
hn:function(){return this.dI(null)},
dG:function(a){this.ap(a)},
hk:function(){return this.dG(null)},
hj:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdF(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.am()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.X()},
hm:function(a,b){var s,r
for(s=b.gN(b),r=this.gdF();s.u();)s.gH(s).gm().B(0,r)
this.X()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bj.prototype={
i:function(a){return this.b}}
E.bw.prototype={
i:function(a){return this.b}}
E.eF.prototype={}
E.hS.prototype={
e7:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.a7(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.ce()
s.a=[]
s.gm().k(0,new E.hT(r))
r.cy=s
s=new O.ce()
s.a=[]
s.gm().k(0,new E.hU(r))
r.db=s
s=new O.ce()
s.a=[]
s.gm().k(0,new E.hV(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.u(t.G)},
ghy:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga5(q)
s=r.db
s=r.z=q.n(0,s.ga5(s))
q=s}return q},
gdO:function(){var s,r=this,q=r.ch
if(q==null){q=r.ghy()
s=r.dx
s=r.ch=q.n(0,s.ga5(s))
q=s}return q},
ci:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gca(s):a)},
cg:function(){var s=this.dy
if(s.length>1)s.pop()},
bO:function(a){var s=a.b
if(s.length===0)throw H.c(P.n("May not cache a shader with no name."))
if(this.fr.h3(0,s))throw H.c(P.n('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.l(0,s,a)}}
E.hT.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.hU.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.hV.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.e5.prototype={
cC:function(a){this.dP()},
cB:function(){return this.cC(null)},
ghd:function(){var s,r=this,q=Date.now(),p=C.d.a0(P.kb(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a7(q,!1)
return s/p},
cS:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.n()
if(typeof p!=="number")return H.p(p)
s=C.b.c8(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.n()
r=C.b.c8(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.kB(C.j,q.ghC())}},
dP:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.x.eu(s)
r=W.l4(new E.im(this),t.H)
r.toString
C.x.fD(s,r)}},
hA:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cS()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a7(p,!1)
q.y=P.kb(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.aH()
p=q.db
C.a.sj(p.a,0)
p.aH()
p=q.dx
C.a.sj(p.a,0)
p.aH()
p=q.dy
p.toString
C.a.sj(p,0)
q.dy.push(null)
m.Z(n.e)}}catch(o){s=H.fx(o)
r=H.jZ(o)
P.k1("Error: "+H.e(s))
P.k1("Stack: "+H.e(r))
throw H.c(s)}}}
E.im.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hA()}}}
Z.et.prototype={}
Z.fK.prototype={
W:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.fx(q)
r=P.n('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.e(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.e(s.e)+"]"}}
Z.cv.prototype={}
Z.aW.prototype={
ao:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
W:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].W(a)},
aE:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
Z:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)o.push(s[q].i(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.a1(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(o,", ")+"\nAttrs:   "+C.a.q(p,", ")}}
Z.c3.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.dM(this.c))+"'")+"]"}}
Z.ax.prototype={
gcs:function(a){var s=this.a,r=(s&$.a4().a)!==0?3:0
if((s&$.aU().a)!==0)r+=3
if((s&$.aT().a)!==0)r+=3
if((s&$.aB().a)!==0)r+=2
if((s&$.aV().a)!==0)r+=3
if((s&$.cZ().a)!==0)r+=3
if((s&$.d_().a)!==0)r+=4
if((s&$.bP().a)!==0)++r
return(s&$.aS().a)!==0?r+4:r},
fW:function(a){var s,r=$.a4(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aU()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aT()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aB()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aV()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cZ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d_()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aS()
if((q&r.a)!==0)if(s===a)return r
return $.lA()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ax))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.a4().a)!==0)s.push("Pos")
if((r&$.aU().a)!==0)s.push("Norm")
if((r&$.aT().a)!==0)s.push("Binm")
if((r&$.aB().a)!==0)s.push("Txt2D")
if((r&$.aV().a)!==0)s.push("TxtCube")
if((r&$.cZ().a)!==0)s.push("Clr3")
if((r&$.d_().a)!==0)s.push("Clr4")
if((r&$.bP().a)!==0)s.push("Weight")
if((r&$.aS().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.q(s,"|")}}
D.fL.prototype={}
D.am.prototype={
k:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
B:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.L(q,b)
if(q===!0){q=r.a
s=(q&&C.a).B(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.L(q,b)
if(q===!0){q=r.b
s=(q&&C.a).B(q,b)||s}return s},
v:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.O()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.I(P.jF(s,!0),new D.h4(o))
s=p.b
if(s!=null){p.b=[]
C.a.I(s,new D.h5(o))}return!0},
c_:function(){return this.v(null)},
al:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.v(s)}}}}
D.h4.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.h5.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.O.prototype={}
D.an.prototype={}
D.ao.prototype={}
D.l.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.d7.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d7))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.dq.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dq))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.hj.prototype={
hu:function(a){this.c=a.b
this.d.k(0,a.a)
return!1},
hq:function(a){this.c=a.b
this.d.B(0,a.a)
return!1}}
X.ca.prototype={}
X.ho.prototype={
aU:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.n()
s=b.b
r=o.ch
if(typeof s!=="number")return s.n()
q=new V.W(m.a+l*k,m.b+s*r)
r=o.a.gaN()
p=new X.bs(a,V.aI(),o.x,r,q)
p.b=!0
o.z=new P.a7(n,!1)
o.x=q
return p},
cf:function(a,b){this.r=a.a
return!1},
b3:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dX()
if(typeof s!=="number")return s.an()
this.r=(s&~r)>>>0
return!1},
b2:function(a,b){var s=this.d
if(s==null)return!1
s.v(this.aU(a,b))
return!0},
hv:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaN()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.n()
o=a.b
n=m.cy
if(typeof o!=="number")return o.n()
r=new X.bt(new V.T(q*p,o*n),s,r)
r.b=!0
l.v(r)
return!0},
f5:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.ca(c,p.a.gaN(),b)
q.b=!0
r.v(q)
p.y=new P.a7(s,!1)
p.x=V.aI()}}
X.a9.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a9))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bs.prototype={}
X.hL.prototype={
bv:function(a,b,c){var s=this,r=new P.a7(Date.now(),!1),q=s.a.gaN(),p=new X.bs(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cf:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.v(this.bv(a,b,!0))
return!0},
b3:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dX()
if(typeof r!=="number")return r.an()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.v(s.bv(a,b,!0))
return!0},
b2:function(a,b){var s=this.d
if(s==null)return!1
s.v(this.bv(a,b,!1))
return!0},
hw:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaN()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.n()
p=a.b
o=n.ch
if(typeof p!=="number")return p.n()
s=new X.bt(new V.T(r*q,p*o),s,b)
s.b=!0
m.v(s)
return!0},
gdc:function(){var s=this.b
return s==null?this.b=D.A():s},
gbm:function(){var s=this.c
return s==null?this.c=D.A():s},
gdD:function(){var s=this.d
return s==null?this.d=D.A():s}}
X.bt.prototype={}
X.dL.prototype={}
X.cp.prototype={}
X.iq.prototype={
aU:function(a,b){var s=this,r=new P.a7(Date.now(),!1),q=a.length>0?a[0]:V.aI(),p=s.a.gaN(),o=new X.cp(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
ht:function(a){var s=this.b
if(s==null)return!1
s.v(this.aU(a,!0))
return!0},
hr:function(a){var s=this.c
if(s==null)return!1
s.v(this.aU(a,!0))
return!0},
hs:function(a){var s=this.d
if(s==null)return!1
s.v(this.aU(a,!1))
return!0}}
X.eq.prototype={
gaN:function(){var s=this.a,r=C.f.gd7(s).c
r.toString
s=C.f.gd7(s).d
s.toString
return V.hR(0,0,r,s)},
cK:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.dq(s,new X.a9(r,a.altKey,a.shiftKey))},
aM:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a9(r,a.altKey,a.shiftKey)},
bK:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a9(r,a.altKey,a.shiftKey)},
az:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a8()
if(typeof o!=="number")return H.p(o)
s=r.top
if(typeof p!=="number")return p.a8()
if(typeof s!=="number")return H.p(s)
return new V.W(q-o,p-s)},
aV:function(a){return new V.T(a.movementX,a.movementY)},
bG:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
o=C.b.U(p.pageX)
C.b.U(p.pageY)
n=k.left
if(typeof n!=="number")return H.p(n)
C.b.U(p.pageX)
m=C.b.U(p.pageY)
l=k.top
if(typeof l!=="number")return H.p(l)
j.push(new V.W(o-n,m-l))}return j},
aw:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.d7(s,new X.a9(r,a.altKey,a.shiftKey))},
bw:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a8()
if(typeof n!=="number")return H.p(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a8()
if(typeof p!=="number")return H.p(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.p(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.p(p)
p=r<p}else p=!1
return p},
f_:function(a){this.f=!0},
eK:function(a){this.f=!1},
eQ:function(a){if(this.f&&this.bw(a))a.preventDefault()},
f3:function(a){var s
if(!this.f)return
s=this.cK(a)
this.b.hu(s)},
f1:function(a){var s
if(!this.f)return
s=this.cK(a)
this.b.hq(s)},
f7:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aM(a)
if(p.x){s=p.aw(a)
r=p.aV(a)
if(p.d.cf(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aw(a)
q=p.az(a)
if(p.c.cf(s,q))a.preventDefault()},
fb:function(a){var s,r,q,p=this
p.aM(a)
s=p.aw(a)
if(p.x){r=p.aV(a)
if(p.d.b3(s,r))a.preventDefault()
return}if(p.r)return
q=p.az(a)
if(p.c.b3(s,q))a.preventDefault()},
eU:function(a){var s,r,q,p=this
if(!p.bw(a)){p.aM(a)
s=p.aw(a)
if(p.x){r=p.aV(a)
if(p.d.b3(s,r))a.preventDefault()
return}if(p.r)return
q=p.az(a)
if(p.c.b3(s,q))a.preventDefault()}},
f9:function(a){var s,r,q,p=this
p.aM(a)
s=p.aw(a)
if(p.x){r=p.aV(a)
if(p.d.b2(s,r))a.preventDefault()
return}if(p.r)return
q=p.az(a)
if(p.c.b2(s,q))a.preventDefault()},
eS:function(a){var s,r,q,p=this
if(!p.bw(a)){p.aM(a)
s=p.aw(a)
if(p.x){r=p.aV(a)
if(p.d.b2(s,r))a.preventDefault()
return}if(p.r)return
q=p.az(a)
if(p.c.b2(s,q))a.preventDefault()}},
fd:function(a){var s,r,q=this
q.aM(a)
s=new V.T((a&&C.w).gh7(a),C.w.gh8(a)).n(0,q.Q)
if(q.x){if(q.d.hv(s))a.preventDefault()
return}if(q.r)return
r=q.az(a)
if(q.c.hw(s,r))a.preventDefault()},
ff:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aw(q.y)
r=q.az(q.y)
q.d.f5(s,r,p)}},
fw:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bK(a)
s=r.bG(a)
if(r.e.ht(s))a.preventDefault()},
fs:function(a){var s
this.bK(a)
s=this.bG(a)
if(this.e.hr(s))a.preventDefault()},
fu:function(a){var s
this.bK(a)
s=this.bG(a)
if(this.e.hs(s))a.preventDefault()}}
D.ap.prototype={}
D.c8.prototype={
a9:function(a){var s=this.y
if(s!=null)s.v(a)},
cQ:function(a){var s=this.z
if(s!=null)s.v(a)},
f4:function(){return this.cQ(null)},
fh:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.m)(a),++r){q=a[r]
if(q==null||this.eo(q))return!1}return!0},
eE:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcP(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p instanceof D.bx)this.r.push(p)
o=p.Q
if(o==null){o=new D.am()
o.d=0
p.Q=o}n=o.a;(n==null?o.a=[]:n).push(r)}s=new D.an()
s.b=!0
this.a9(s)},
fl:function(a,b){var s,r,q
for(s=b.gN(b),r=this.gcP();s.u();){q=s.gH(s)
C.a.B(this.e,q)
q.gm().B(0,r)}s=new D.ao()
s.b=!0
this.a9(s)},
eo:function(a){var s=C.a.L(this.r,a)
return s}}
D.bx.prototype={
a9:function(a){var s=this.Q
if(s!=null)s.v(a)},
eb:function(){return this.a9(null)},
gab:function(){var s=this.d!=null?1:0
return s+4},
$iap:1}
V.M.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.M))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.U.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.U))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.h2.prototype={}
V.cd.prototype={
a1:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cd))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
if(!(Math.abs(b.e-r.e)<1e-9))return!1
if(!(Math.abs(b.f-r.f)<1e-9))return!1
if(!(Math.abs(b.r-r.r)<1e-9))return!1
if(!(Math.abs(b.x-r.x)<1e-9))return!1
if(!(Math.abs(b.y-r.y)<1e-9))return!1
return!0},
i:function(a){var s,r,q,p,o=this,n=V.bO([o.a,o.d,o.r],3,0),m=V.bO([o.b,o.e,o.x],3,0),l=V.bO([o.c,o.f,o.y],3,0),k=n.length
if(0>=k)return H.d(n,0)
s="["+n[0]+", "
r=m.length
if(0>=r)return H.d(m,0)
s=s+m[0]+", "
q=l.length
if(0>=q)return H.d(l,0)
s=s+l[0]+",\n"
if(1>=k)return H.d(n,1)
p=" "+n[1]+", "
if(1>=r)return H.d(m,1)
p=p+m[1]+", "
if(1>=q)return H.d(l,1)
p=s+(p+l[1]+",\n")
if(2>=k)return H.d(n,2)
k=" "+n[2]+", "
if(2>=r)return H.d(m,2)
k=k+m[2]+", "
if(2>=q)return H.d(l,2)
return p+(k+l[2]+"]")}}
V.aF.prototype={
a1:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
dw:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.r().toString
if(Math.abs(b3-0)<1e-9)return V.aG()
s=1/b3
r=-l
q=-a2
return V.ah((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
n:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.ah(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
b6:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.I(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aF))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
if(!(Math.abs(b.e-r.e)<1e-9))return!1
if(!(Math.abs(b.f-r.f)<1e-9))return!1
if(!(Math.abs(b.r-r.r)<1e-9))return!1
if(!(Math.abs(b.x-r.x)<1e-9))return!1
if(!(Math.abs(b.y-r.y)<1e-9))return!1
if(!(Math.abs(b.z-r.z)<1e-9))return!1
if(!(Math.abs(b.Q-r.Q)<1e-9))return!1
if(!(Math.abs(b.ch-r.ch)<1e-9))return!1
if(!(Math.abs(b.cx-r.cx)<1e-9))return!1
if(!(Math.abs(b.cy-r.cy)<1e-9))return!1
if(!(Math.abs(b.db-r.db)<1e-9))return!1
if(!(Math.abs(b.dx-r.dx)<1e-9))return!1
return!0},
i:function(a){return this.J()},
C:function(a){var s,r,q,p,o,n=this,m=V.bO([n.a,n.e,n.y,n.cx],3,0),l=V.bO([n.b,n.f,n.z,n.cy],3,0),k=V.bO([n.c,n.r,n.Q,n.db],3,0),j=V.bO([n.d,n.x,n.ch,n.dx],3,0),i=m.length
if(0>=i)return H.d(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.d(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.d(k,0)
s=s+k[0]+", "
p=j.length
if(0>=p)return H.d(j,0)
s=s+j[0]+",\n"
o=a+" "
if(1>=i)return H.d(m,1)
o=o+m[1]+", "
if(1>=r)return H.d(l,1)
o=o+l[1]+", "
if(1>=q)return H.d(k,1)
o=o+k[1]+", "
if(1>=p)return H.d(j,1)
o=s+(o+j[1]+",\n")
s=a+" "
if(2>=i)return H.d(m,2)
s=s+m[2]+", "
if(2>=r)return H.d(l,2)
s=s+l[2]+", "
if(2>=q)return H.d(k,2)
s=s+k[2]+", "
if(2>=p)return H.d(j,2)
s=o+(s+j[2]+",\n")
o=a+" "
if(3>=i)return H.d(m,3)
o=o+m[3]+", "
if(3>=r)return H.d(l,3)
o=o+l[3]+", "
if(3>=q)return H.d(k,3)
o=o+k[3]+", "
if(3>=p)return H.d(j,3)
return s+(o+j[3]+"]")},
J:function(){return this.C("")}}
V.W.prototype={
a2:function(a){return new V.T(a.a-this.a,a.b-this.b)},
p:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.I.prototype={
a8:function(a,b){return new V.I(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.I))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.ab.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ab))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.dO.prototype={
gae:function(){var s=this.c,r=this.d
return s>r?r:s},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dO))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.T.prototype={
b_:function(a){return Math.sqrt(this.a4(this))},
a4:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.p(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.p(r)
return q*p+s*r},
n:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.n()
if(typeof b!=="number")return H.p(b)
s=this.b
if(typeof s!=="number")return s.n()
return new V.T(r*b,s*b)},
T:function(a,b){var s,r
$.r().toString
if(Math.abs(b-0)<1e-9){s=$.kH
return s==null?$.kH=new V.T(0,0):s}s=this.a
if(typeof s!=="number")return s.T()
r=this.b
if(typeof r!=="number")return r.T()
return new V.T(s/b,r/b)},
p:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
s=b.a
r=this.a
$.r().toString
if(typeof s!=="number")return s.a8()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a8()
if(typeof r!=="number")return H.p(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.x.prototype={
b_:function(a){return Math.sqrt(this.a4(this))},
a4:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cb:function(a,b){return new V.x(V.fv(this.a,a.a,b),V.fv(this.b,a.b,b),V.fv(this.c,a.c,b))},
G:function(){var s=this,r=Math.sqrt(s.a4(s))
if(r===1)return s
return s.T(0,r)},
aX:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.x(s*r-q*p,q*o-n*r,n*p-s*o)},
A:function(a,b){return new V.x(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.x(-this.a,-this.b,-this.c)},
T:function(a,b){$.r().toString
if(Math.abs(b-0)<1e-9)return V.cu()
return new V.x(this.a/b,this.b/b,this.c/b)},
dA:function(){$.r().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.x))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.bE.prototype={
b_:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bE))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
U.fO.prototype={
bp:function(a){var s=V.jq(a,this.c,this.b)
return s},
gm:function(){var s=this.y
return s==null?this.y=D.A():s},
D:function(a){var s=this.y
if(s!=null)s.v(a)},
sco:function(a,b){},
scc:function(a){var s,r=this,q=r.b
$.r().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bp(s)}q=new D.l("maximumLocation",q,r.b)
q.b=!0
r.D(q)}},
sce:function(a){var s,r=this,q=r.c
$.r().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bp(s)}q=new D.l("minimumLocation",q,r.c)
q.b=!0
r.D(q)}},
sY:function(a,b){var s,r=this
b=r.bp(b)
s=r.d
$.r().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.l("location",s,b)
s.b=!0
r.D(s)}},
scd:function(a){var s,r,q=this,p=q.e
$.r().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.l("maximumVelocity",p,a)
p.b=!0
q.D(p)}},
sP:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.r().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.l("velocity",r,a)
r.b=!0
s.D(r)}},
sbY:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.r().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.l("dampening",s,a)
s.b=!0
this.D(s)}},
a6:function(a,b){var s,r,q,p=this,o=p.f
$.r().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sY(0,p.d+s*b)
o=p.x
$.r().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sP(s)}}}
U.bT.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.A():s},
aq:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bT))return!1
return J.v(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.bo.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.A():s},
D:function(a){var s=this.e
if(s!=null)s.v(a)},
aa:function(){return this.D(null)},
ed:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaL(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.an()
s.b=!0
this.D(s)},
fj:function(a,b){var s,r
for(s=b.gN(b),r=this.gaL();s.u();)s.gH(s).gm().B(0,r)
s=new D.ao()
s.b=!0
this.D(s)},
aq:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.ag()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.R(p,p.length),s=null;p.u();){o=p.d
if(o!=null){r=o.aq(0,b,c)
if(r!=null)s=s==null?r:r.n(0,s)}}q.f=s==null?V.aG():s
p=q.e
if(p!=null)p.al(0)}return q.f},
p:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bo))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.d(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.d(p,r)
if(!J.v(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iP:1}
U.P.prototype={}
U.cm.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.A():s},
D:function(a){var s=this.y
if(s!=null)s.v(a)},
sdU:function(a){var s
a=V.jq(a,0,6.283185307179586)
s=this.a
$.r().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.l("yaw",s,a)
s.b=!0
this.D(s)}},
sdN:function(a,b){var s
b=V.jq(b,0,6.283185307179586)
s=this.b
$.r().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.l("pitch",s,b)
s.b=!0
this.D(s)}},
sdQ:function(a){var s
a=V.jq(a,0,6.283185307179586)
s=this.c
$.r().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.l("roll",s,a)
s.b=!0
this.D(s)}},
aq:function(a,b,c){var s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sdU(s.a+s.d*b.y)
s.sdN(0,s.b+s.e*b.y)
s.sdQ(s.c+s.f*b.y)
s.x=V.kn(s.c).n(0,V.km(s.b)).n(0,V.jG(s.a))
r=s.y
if(r!=null)r.al(0)}return s.x},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.cm))return!1
s=q.a
r=b.a
$.r().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+"], ["+V.z(s.d,3,0)+", "+V.z(s.e,3,0)+", "+V.z(s.f,3,0)+"]"}}
U.cr.prototype={
gm:function(){var s=this.cy
return s==null?this.cy=D.A():s},
D:function(a){var s=this.cy
if(s!=null)s.v(a)},
aa:function(){return this.D(null)},
aW:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gdc().k(0,s.gbx())
s.a.c.gdD().k(0,s.gbz())
s.a.c.gbm().k(0,s.gbB())
return!0},
by:function(a){var s=this
if(!J.v(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bA:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.y)return
if(l.x){s=a.y.a2(a.d)
s=s.a4(s)
r=l.r
if(typeof r!=="number")return H.p(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a2(a.d).n(0,2).T(0,s.gae())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.n()
q=l.e
if(typeof q!=="number")return H.p(q)
r.sP(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a2(q).n(0,2).T(0,s.gae())
r=l.b
o=p.a
if(typeof o!=="number")return o.M()
n=l.e
if(typeof n!=="number")return H.p(n)
m=l.z
if(typeof m!=="number")return H.p(m)
r.sY(0,-o*n+m)
l.b.sP(0)
l.Q=a.z.a2(q).n(0,2).T(0,s.gae())}l.aa()},
bC:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a4(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.n()
q=p.e
if(typeof q!=="number")return H.p(q)
s.sP(r*10*q)
p.aa()}},
aq:function(a,b,c){var s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.ag()
if(q<p){r.ch=p
s=b.y
r.b.a6(0,s)
r.cx=V.kn(r.b.d)}return r.cx},
$iP:1}
U.cs.prototype={
gm:function(){var s=this.fx
return s==null?this.fx=D.A():s},
D:function(a){var s=this.fx
if(s!=null)s.v(a)},
aa:function(){return this.D(null)},
aW:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gdc().k(0,q.gbx())
q.a.c.gdD().k(0,q.gbz())
q.a.c.gbm().k(0,q.gbB())
s=q.a.d
r=s.f
s=r==null?s.f=D.A():r
s.k(0,q.gex())
s=q.a.d
r=s.d
s=r==null?s.d=D.A():r
s.k(0,q.gez())
s=q.a.e
r=s.b
s=r==null?s.b=D.A():r
s.k(0,q.gfQ())
s=q.a.e
r=s.d
s=r==null?s.d=D.A():r
s.k(0,q.gfO())
s=q.a.e
r=s.c
s=r==null?s.c=D.A():r
s.k(0,q.gfM())
return!0},
as:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.M()
s=-s}if(this.r){if(typeof r!=="number")return r.M()
r=-r}return new V.T(s,r)},
by:function(a){var s=this
t.d.a(a)
if(!J.v(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bA:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a2(a.d)
s=s.a4(s)
r=l.Q
if(typeof r!=="number")return H.p(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.as(a.y.a2(a.d).n(0,2).T(0,s.gae()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.M()
q=l.y
if(typeof q!=="number")return H.p(q)
r.sP(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.M()
r=l.x
if(typeof r!=="number")return H.p(r)
q.sP(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.as(r.a2(q).n(0,2).T(0,s.gae()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.p(n)
m=l.cy
if(typeof m!=="number")return H.p(m)
r.sY(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.p(o)
r=l.db
if(typeof r!=="number")return H.p(r)
m.sY(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.as(a.z.a2(q).n(0,2).T(0,s.gae()))}l.aa()},
bC:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a4(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.M()
q=p.y
if(typeof q!=="number")return H.p(q)
s.sP(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.M()
s=p.x
if(typeof s!=="number")return H.p(s)
q.sP(-r*10*s)
p.aa()}},
ey:function(a){var s=this
if(t.x.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eA:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.v(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.as(r.a2(q).n(0,2).T(0,s.gae()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.p(n)
m=l.cy
if(typeof m!=="number")return H.p(m)
r.sY(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.p(o)
r=l.db
if(typeof r!=="number")return H.p(r)
m.sY(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.as(a.z.a2(q).n(0,2).T(0,s.gae()))
l.aa()},
fR:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fP:function(a){var s,r,q,p,o,n,m,l=this
t.m.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a2(a.d)
s=s.a4(s)
r=l.Q
if(typeof r!=="number")return H.p(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.as(a.y.a2(a.d).n(0,2).T(0,s.gae()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.M()
q=l.y
if(typeof q!=="number")return H.p(q)
r.sP(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.M()
r=l.x
if(typeof r!=="number")return H.p(r)
q.sP(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.as(r.a2(q).n(0,2).T(0,s.gae()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.p(n)
m=l.cy
if(typeof m!=="number")return H.p(m)
r.sY(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.p(o)
r=l.db
if(typeof r!=="number")return H.p(r)
m.sY(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.as(a.z.a2(q).n(0,2).T(0,s.gae()))}l.aa()},
fN:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a4(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.M()
q=p.y
if(typeof q!=="number")return H.p(q)
s.sP(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.M()
s=p.x
if(typeof s!=="number")return H.p(s)
q.sP(-r*10*s)
p.aa()}},
aq:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ag()
if(q<p){r.dy=p
s=b.y
r.c.a6(0,s)
r.b.a6(0,s)
r.fr=V.jG(r.b.d).n(0,V.km(r.c.d))}return r.fr},
$iP:1}
U.ct.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.A():s},
D:function(a){var s=this.r
if(s!=null)s.v(a)},
aW:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.A():r
r=p.geB()
s.k(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.A():q).k(0,r)
return!0},
eC:function(a){var s,r,q,p,o=this
if(!J.v(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.n()
p=s+r*q
if(s!==p){o.d=p
s=new D.l("zoom",s,p)
s.b=!0
o.D(s)}},
aq:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.ko(s,s,s,1)}return r.f},
$iP:1}
M.bR.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.A():s},
O:function(a){var s=this.r
if(s!=null)s.v(a)},
av:function(){return this.O(null)},
fn:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gR(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.an()
s.b=!0
this.O(s)},
fp:function(a,b){var s,r
for(s=b.gN(b),r=this.gR();s.u();)s.gH(s).gm().B(0,r)
s=new D.ao()
s.b=!0
this.O(s)},
Z:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.R(s,s.length);s.u();){r=s.d
if(r!=null)r.Z(a)}q.f=!1},
$ia_:1}
M.bU.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.A():s},
O:function(a){var s=this.r
if(s!=null)s.v(a)},
av:function(){return this.O(null)},
saQ:function(a,b){var s,r,q=this
if(b==null)b=X.kc(null)
s=q.c
if(s!==b){if(s!=null)s.gm().B(0,q.gR())
r=q.c
q.c=b
b.gm().k(0,q.gR())
s=new D.l("target",r,q.c)
s.b=!0
q.O(s)}},
saf:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().B(0,r.gR())
s=r.d
r.d=a
if(a!=null)a.gm().k(0,r.gR())
q=new D.l("technique",s,r.d)
q.b=!0
r.O(q)}},
Z:function(a){var s,r,q=this
a.ci(q.d)
q.c.W(a)
q.b.toString
a.cy.bj(V.aG())
s=V.aG()
a.db.bj(s)
r=q.d
if(r!=null)r.a6(0,a)
q.e.a6(0,a)
q.e.Z(a)
q.b.toString
a.cy.b4()
a.db.b4()
q.c.aE(a)
a.cg()},
$ia_:1}
M.bZ.prototype={
O:function(a){var s=this.y
if(s!=null)s.v(a)},
av:function(){return this.O(null)},
eM:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gR(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.am()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.an()
s.b=!0
this.O(s)},
eO:function(a,b){var s,r
for(s=b.gN(b),r=this.gR();s.u();)s.gH(s).gm().B(0,r)
s=new D.ao()
s.b=!0
this.O(s)},
saQ:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gm().B(0,r.gR())
s=r.c
r.c=b
b.gm().k(0,r.gR())
q=new D.l("target",s,r.c)
q.b=!0
r.O(q)}},
saf:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().B(0,r.gR())
s=r.d
r.d=a
if(a!=null)a.gm().k(0,r.gR())
q=new D.l("technique",s,r.d)
q.b=!0
r.O(q)}},
gm:function(){var s=this.y
return s==null?this.y=D.A():s},
Z:function(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
a0.ci(a.d)
a.c.W(a0)
s=a.b
r=a0.c
q=a0.d
p=s.c
o=s.d
n=s.e
m=n-o
l=1/Math.tan(p*0.5)
k=V.ah(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a0.cy.bj(k)
r=$.kq
if(r==null){r=V.m4()
q=$.kJ
if(q==null)q=$.kJ=new V.x(0,1,0)
p=$.kI
j=(p==null?$.kI=new V.x(0,0,-1):p).G()
i=q.aX(j).G()
h=j.aX(i)
g=new V.x(r.a,r.b,r.c)
f=i.M(0).a4(g)
e=h.M(0).a4(g)
d=j.M(0).a4(g)
r=V.ah(i.a,h.a,j.a,f,i.b,h.b,j.b,e,i.c,h.c,j.c,d,0,0,0,1)
$.kq=r
c=r}else c=r
r=s.b
if(r!=null){b=r.aq(0,a0,s)
if(b!=null)c=b.n(0,c)}a0.db.bj(c)
s=a.d
if(s!=null)s.a6(0,a0)
for(s=a.e.a,s=new J.R(s,s.length);s.u();)s.d.a6(0,a0)
for(s=a.e.a,s=new J.R(s,s.length);s.u();)s.d.Z(a0)
a.b.toString
a0.cy.b4()
a0.db.b4()
a.c.aE(a0)
a0.cg()},
$ia_:1}
M.c2.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.A():s},
O:function(a){var s=this.b
if(s!=null)s.v(a)},
av:function(){return this.O(null)},
Z:function(a){var s=this.e
if(s!=null)s.Z(a)
s=this.r
if(s!=null)s.Z(a)},
$ia_:1}
M.a_.prototype={}
A.fB.prototype={}
A.fC.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
h9:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
bZ:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.V.prototype={
gar:function(a){var s=this.a?1:0,r=this.c?4:0
return s|0|r},
i:function(a){var s=this.a?1:0,r=this.c?4:0
return""+(s|0|r)},
p:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.V))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.hc.prototype={
cV:function(a,b){if(b!=null&&b.d)a.dZ(b)}}
A.hd.prototype={
aI:function(a,b,c,d){var s,r,q,p,o=c.length
if(0>=o)return H.d(c,0)
s=c[0]
$.r().toString
r=Math.abs(s-0)<1e-9
if(r){if(0>=d.length)return H.d(d,0)
q=d[0]
d=C.a.ct(d,1)
c=C.a.ct(c,1);--o}else q=0
s=a.a+="vec4 blur"+b+"()\n"
s+="{\n"
a.a=s
if(r)s=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.e(q)+";\n"
else s=a.a=s+"  vec4 color = vec4(0.0);\n"
s=a.a=s+"  vec2 offset;\n"
for(p=0;p<o;++p){if(p>=c.length)return H.d(c,p)
a.a+="  offset = blurScale * "+H.e(c[p])+";\n"
if(p>=d.length)return H.d(d,p)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.e(d[p])+";\n"
if(p>=d.length)return H.d(d,p)
s=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.e(d[p])+";\n"}s+="  return color; \n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i:function(a){return this.b}}
A.hq.prototype={
e6:function(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2="Required uniform value, ",c3=", was not defined or used in shader.",c4="uniform mat4 objMat;\n"
c0.z=c5
s=new P.aK("")
r=c5.fr
if(r){s.a=c4
q=c4}else q=""
p=c5.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c5.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c5.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.nq(c5,s)
A.ns(c5,s)
A.nr(c5,s)
A.nu(c5,s)
A.nv(c5,s)
A.nt(c5,s)
A.nw(c5,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c5.ry
q+="   return projViewObjMat*vec4("+(m?"bendPos":"posAttr")+", 1.0);\n"
s.a=q
q+="}\n"
s.a=q
q+="\n"
s.a=q
q+="void main()\n"
s.a=q
q=s.a=q+"{\n"
if(m){q+="   setupBendData();\n"
s.a=q}if(o){q+="   normalVec = getNorm();\n"
s.a=q}if(n){q+="   binormalVec = getBinm();\n"
s.a=q}if(c5.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c5.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c5.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c5.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
c0.c9(0,q.charCodeAt(0)==0?q:q,A.np(c0.z))
c0.Q=c0.x.h(0,"posAttr")
c0.cx=c0.x.h(0,"normAttr")
c0.ch=c0.x.h(0,"binmAttr")
c0.cy=c0.x.h(0,"txt2DAttr")
c0.db=c0.x.h(0,"txtCubeAttr")
c0.dx=c0.x.h(0,"bendAttr")
if(c5.dy)c0.id=t.q.a(c0.y.E(0,"invViewMat"))
if(r)c0.dy=t.q.a(c0.y.E(0,"objMat"))
if(p)c0.fr=t.q.a(c0.y.E(0,"viewObjMat"))
r=t.q
c0.fy=r.a(c0.y.E(0,"projViewObjMat"))
if(c5.go)c0.fx=r.a(c0.y.E(0,"viewMat"))
if(c5.x1)c0.k1=t.N.a(c0.y.E(0,"txt2DMat"))
if(c5.x2)c0.k2=r.a(c0.y.E(0,"txtCubeMat"))
if(c5.y1)c0.k3=r.a(c0.y.E(0,"colorMat"))
c0.r1=[]
q=c5.be
if(q>0){c0.k4=c0.y.E(0,"bendMatCount")
for(l=0;l<q;++l){p=c0.r1
o=c0.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.o(P.n(c2+n+c3))
p.push(r.a(k))}}r=c5.a
if(r.a)c0.r2=t.r.a(c0.y.E(0,"emissionClr"))
if(r.c)c0.ry=t.Q.a(c0.y.E(0,"emissionTxt"))
r=c5.b
if(r.a)c0.x1=t.r.a(c0.y.E(0,"ambientClr"))
if(r.c)c0.y1=t.Q.a(c0.y.E(0,"ambientTxt"))
r=c5.c
if(r.a)c0.y2=t.r.a(c0.y.E(0,"diffuseClr"))
if(r.c)c0.aB=t.Q.a(c0.y.E(0,"diffuseTxt"))
r=c5.d
if(r.a)c0.bf=t.r.a(c0.y.E(0,"invDiffuseClr"))
if(r.c)c0.dg=t.Q.a(c0.y.E(0,"invDiffuseTxt"))
r=c5.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){c0.dj=t.n.a(c0.y.E(0,"shininess"))
if(q)c0.dh=t.r.a(c0.y.E(0,"specularClr"))
if(r.c)c0.di=t.Q.a(c0.y.E(0,"specularTxt"))}if(c5.f.c)c0.dk=t.Q.a(c0.y.E(0,"bumpTxt"))
if(c5.db){r=t.Q
c0.dl=r.a(c0.y.E(0,"envSampler"))
q=c5.r
if(q.a)c0.dm=t.r.a(c0.y.E(0,"reflectClr"))
if(q.c)c0.dn=r.a(c0.y.E(0,"reflectTxt"))
q=c5.x
p=q.a
if(!p)o=q.c
else o=!0
if(o){c0.dq=t.n.a(c0.y.E(0,"refraction"))
if(p)c0.dr=t.r.a(c0.y.E(0,"refractClr"))
if(q.c)c0.ds=r.a(c0.y.E(0,"refractTxt"))}}r=c5.y
if(r.a)c0.dt=t.n.a(c0.y.E(0,"alpha"))
if(r.c)c0.du=t.Q.a(c0.y.E(0,"alphaTxt"))
if(c5.k1){r=c5.z
q=r.length
if(q!==0){c0.c0=new H.u(t.J)
c0.c1=new H.u(t.u)
for(p=t.r,o=t.n,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="barLight"+H.e(h)
f=[]
for(n=i.b,l=0;l<n;++l){m=c0.y
e=g+"s["+l+"].startPnt"
k=m.h(0,e)
if(k==null)H.o(P.n(c2+e+c3))
p.a(k)
m=c0.y
e=g+"s["+l+"].endPnt"
d=m.h(0,e)
if(d==null)H.o(P.n(c2+e+c3))
p.a(d)
m=c0.y
e=g+"s["+l+"].color"
c=m.h(0,e)
if(c==null)H.o(P.n(c2+e+c3))
p.a(c)
if(typeof h!=="number")return h.an()
if((h&4)!==0){m=c0.y
e=g+"s["+l+"].att0"
b=m.h(0,e)
if(b==null)H.o(P.n(c2+e+c3))
o.a(b)
m=c0.y
e=g+"s["+l+"].att1"
a=m.h(0,e)
if(a==null)H.o(P.n(c2+e+c3))
o.a(a)
m=c0.y
e=g+"s["+l+"].att2"
a0=m.h(0,e)
if(a0==null)H.o(P.n(c2+e+c3))
o.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.ee(k,d,c,a3,a2,a1))}c0.c1.l(0,h,f)
n=c0.c0
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.o(P.n(c2+e+c3))
n.l(0,h,k)}}r=c5.Q
q=r.length
if(q!==0){c0.c2=new H.u(t.J)
c0.c3=new H.u(t.L)
for(p=t.r,o=t.c,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.e(h)
f=[]
for(n=i.b,l=0;l<n;++l){if(typeof h!=="number")return h.an()
m=(h&1)!==0
if(m){e=c0.y
a4=g+"s["+l+"].objUp"
k=e.h(0,a4)
if(k==null)H.o(P.n(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].objRight"
d=e.h(0,a4)
if(d==null)H.o(P.n(c2+a4+c3))
p.a(d)
e=c0.y
a4=g+"s["+l+"].objDir"
c=e.h(0,a4)
if(c==null)H.o(P.n(c2+a4+c3))
p.a(c)
a5=c
a6=d
a7=k}else{a5=c1
a6=a5
a7=a6}e=c0.y
a4=g+"s["+l+"].viewDir"
k=e.h(0,a4)
if(k==null)H.o(P.n(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].color"
d=e.h(0,a4)
if(d==null)H.o(P.n(c2+a4+c3))
p.a(d)
if(m){m=c0.y
e=g+"sTexture2D"+l
c=m.h(0,e)
if(c==null)H.o(P.n(c2+e+c3))
o.a(c)
a8=c}else a8=c1
f.push(new A.ef(a7,a6,a5,k,d,a8))}c0.c3.l(0,h,f)
n=c0.c2
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.o(P.n(c2+e+c3))
n.l(0,h,k)}}r=c5.ch
q=r.length
if(q!==0){c0.c4=new H.u(t.J)
c0.c5=new H.u(t.U)
for(p=t.r,o=t.N,n=t.Q,m=t.y,e=t.n,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.e(h)
f=[]
for(a4=i.b,l=0;l<a4;++l){a9=c0.y
b0=g+"s["+l+"].point"
k=a9.h(0,b0)
if(k==null)H.o(P.n(c2+b0+c3))
p.a(k)
a9=c0.y
b0=g+"s["+l+"].viewPnt"
d=a9.h(0,b0)
if(d==null)H.o(P.n(c2+b0+c3))
p.a(d)
a9=c0.y
b0=g+"s["+l+"].color"
c=a9.h(0,b0)
if(c==null)H.o(P.n(c2+b0+c3))
p.a(c)
if(typeof h!=="number")return h.an()
if((h&3)!==0){a9=c0.y
b0=g+"s["+l+"].invViewRotMat"
b=a9.h(0,b0)
if(b==null)H.o(P.n(c2+b0+c3))
o.a(b)
b1=b}else b1=c1
if((h&1)!==0){a9=c0.y
b0=g+"sTextureCube"+l
b=a9.h(0,b0)
if(b==null)H.o(P.n(c2+b0+c3))
n.a(b)
a8=b}else a8=c1
if((h&2)!==0){a9=c0.y
b0=g+"sShadowCube"+l
b=a9.h(0,b0)
if(b==null)H.o(P.n(c2+b0+c3))
n.a(b)
a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.o(P.n(c2+b0+c3))
m.a(a)
b2=b
b3=a}else{b2=c1
b3=b2}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
b=a9.h(0,b0)
if(b==null)H.o(P.n(c2+b0+c3))
e.a(b)
a9=c0.y
b0=g+"s["+l+"].att1"
a=a9.h(0,b0)
if(a==null)H.o(P.n(c2+b0+c3))
e.a(a)
a9=c0.y
b0=g+"s["+l+"].att2"
a0=a9.h(0,b0)
if(a0==null)H.o(P.n(c2+b0+c3))
e.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.ei(k,d,b1,c,a8,b2,b3,a3,a2,a1))}c0.c5.l(0,h,f)
a4=c0.c4
a9=c0.y
b0=g+"Count"
k=a9.h(0,b0)
if(k==null)H.o(P.n(c2+b0+c3))
a4.l(0,h,k)}}r=c5.cx
q=r.length
if(q!==0){c0.c6=new H.u(t.J)
c0.c7=new H.u(t.M)
for(p=t.r,o=t.n,n=t.y,m=t.c,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.e(h)
f=[]
for(e=i.b,l=0;l<e;++l){a4=c0.y
a9=g+"s["+l+"].objPnt"
k=a4.h(0,a9)
if(k==null)H.o(P.n(c2+a9+c3))
p.a(k)
a4=c0.y
a9=g+"s["+l+"].objDir"
d=a4.h(0,a9)
if(d==null)H.o(P.n(c2+a9+c3))
p.a(d)
a4=c0.y
a9=g+"s["+l+"].viewPnt"
c=a4.h(0,a9)
if(c==null)H.o(P.n(c2+a9+c3))
p.a(c)
a4=c0.y
a9=g+"s["+l+"].color"
b=a4.h(0,a9)
if(b==null)H.o(P.n(c2+a9+c3))
p.a(b)
if(typeof h!=="number")return h.an()
if((h&3)!==0){a4=c0.y
a9=g+"s["+l+"].objUp"
a=a4.h(0,a9)
if(a==null)H.o(P.n(c2+a9+c3))
p.a(a)
a4=c0.y
a9=g+"s["+l+"].objRight"
a0=a4.h(0,a9)
if(a0==null)H.o(P.n(c2+a9+c3))
p.a(a0)
a4=c0.y
a9=g+"s["+l+"].tuScalar"
b4=a4.h(0,a9)
if(b4==null)H.o(P.n(c2+a9+c3))
o.a(b4)
a4=c0.y
a9=g+"s["+l+"].tvScalar"
b5=a4.h(0,a9)
if(b5==null)H.o(P.n(c2+a9+c3))
o.a(b5)
b6=b5
b7=b4
a6=a0
a7=a}else{b6=c1
b7=b6
a6=b7
a7=a6}a4=(h&2)!==0
if(a4){a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.o(P.n(c2+b0+c3))
n.a(a)
b3=a}else b3=c1
if((h&8)!==0){a9=c0.y
b0=g+"s["+l+"].cutoff"
a=a9.h(0,b0)
if(a==null)H.o(P.n(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].coneAngle"
a0=a9.h(0,b0)
if(a0==null)H.o(P.n(c2+b0+c3))
o.a(a0)
b8=a0
b9=a}else{b8=c1
b9=b8}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
a=a9.h(0,b0)
if(a==null)H.o(P.n(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].att1"
a0=a9.h(0,b0)
if(a0==null)H.o(P.n(c2+b0+c3))
o.a(a0)
a9=c0.y
b0=g+"s["+l+"].att2"
b4=a9.h(0,b0)
if(b4==null)H.o(P.n(c2+b0+c3))
o.a(b4)
a1=b4
a2=a0
a3=a}else{a1=c1
a2=a1
a3=a2}if((h&1)!==0){a9=c0.y
b0=g+"sTexture2D"+l
a=a9.h(0,b0)
if(a==null)H.o(P.n(c2+b0+c3))
m.a(a)
a8=a}else a8=c1
if(a4){a4=c0.y
a9=g+"sShadow2D"+l
a=a4.h(0,a9)
if(a==null)H.o(P.n(c2+a9+c3))
m.a(a)
b2=a}else b2=c1
f.push(new A.el(k,d,c,b,a7,a6,b7,b6,b3,b9,b8,a3,a2,a1,a8,b2))}c0.c7.l(0,h,f)
e=c0.c6
a4=c0.y
a9=g+"Count"
k=a4.h(0,a9)
if(k==null)H.o(P.n(c2+a9+c3))
e.l(0,h,k)}}}},
ah:function(a,b){if(b!=null&&b.d>=6)a.e_(b)}}
A.fI.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.fV.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.hP.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.i7.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.hu.prototype={
i:function(a){return this.aB}}
A.ee.prototype={}
A.ef.prototype={}
A.ei.prototype={}
A.el.prototype={}
A.dT.prototype={
bn:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
c9:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.cL(b,35633)
p.f=p.cL(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.o(P.n("Failed to link shader: "+H.e(q)))}p.fI()
p.fK()},
W:function(a){a.a.useProgram(this.r)
this.x.h9()},
cL:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.n("Error compiling shader '"+H.e(q)+"': "+H.e(s)))}return q},
fI:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.p(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.fB(n,r.name,q))}p.x=new A.fC(o)},
fK:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.p(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.h6(r.type,r.size,r.name,q))}p.y=new A.iB(o)},
aJ:function(a,b,c){var s=this.a
if(a===1)return new A.cq(s,b,c)
else return A.jL(s,this.r,b,a,c)},
eq:function(a,b,c){var s=this.a
if(a===1)return new A.ej(s,b,c)
else return A.jL(s,this.r,b,a,c)},
er:function(a,b,c){var s=this.a
if(a===1)return new A.ek(s,b,c)
else return A.jL(s,this.r,b,a,c)},
bb:function(a,b){return new P.eI(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
h6:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aJ(b,c,d)
case 5121:return s.aJ(b,c,d)
case 5122:return s.aJ(b,c,d)
case 5123:return s.aJ(b,c,d)
case 5124:return s.aJ(b,c,d)
case 5125:return s.aJ(b,c,d)
case 5126:return new A.ea(s.a,c,d)
case 35664:return new A.eb(s.a,c,d)
case 35665:return new A.ec(s.a,c,d)
case 35666:return new A.ed(s.a,c,d)
case 35667:return new A.iy(s.a,c,d)
case 35668:return new A.iz(s.a,c,d)
case 35669:return new A.iA(s.a,c,d)
case 35674:return new A.iC(s.a,c,d)
case 35675:return new A.eg(s.a,c,d)
case 35676:return new A.eh(s.a,c,d)
case 35678:return s.eq(b,c,d)
case 35680:return s.er(b,c,d)
case 35670:throw H.c(s.bb("BOOL",c))
case 35671:throw H.c(s.bb("BOOL_VEC2",c))
case 35672:throw H.c(s.bb("BOOL_VEC3",c))
case 35673:throw H.c(s.bb("BOOL_VEC4",c))
default:throw H.c(P.n("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.bm.prototype={
i:function(a){return this.b}}
A.ij.prototype={
ea:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i="Required uniform value, ",h=", was not defined or used in shader."
j.c9(0,u.j.charCodeAt(0)==0?u.j:u.j,A.mp(a,b))
j.z=j.x.h(0,"posAttr")
s=t.l
j.Q=s.a(j.y.E(0,"txtCount"))
j.ch=t.y.a(j.y.E(0,"backClr"))
j.cx=[]
j.cy=[]
j.db=[]
j.dx=[]
j.dy=[]
j.fr=[]
j.fx=[]
for(r=t.t,q=t.q,p=t.c,o=0;o<a;++o){n=j.cx
m=j.y
l="txt"+o
k=m.h(0,l)
if(k==null)H.o(P.n(i+l+h))
n.push(p.a(k))
n=j.cy
m=j.y
l="clrMat"+o
k=m.h(0,l)
if(k==null)H.o(P.n(i+l+h))
n.push(q.a(k))
n=j.db
m=j.y
l="srcLoc"+o
k=m.h(0,l)
if(k==null)H.o(P.n(i+l+h))
n.push(r.a(k))
n=j.dx
m=j.y
l="srcSize"+o
k=m.h(0,l)
if(k==null)H.o(P.n(i+l+h))
n.push(r.a(k))
n=j.dy
m=j.y
l="destLoc"+o
k=m.h(0,l)
if(k==null)H.o(P.n(i+l+h))
n.push(r.a(k))
n=j.fr
m=j.y
l="destSize"+o
k=m.h(0,l)
if(k==null)H.o(P.n(i+l+h))
n.push(r.a(k))
n=j.fx
m=j.y
l="flip"+o
k=m.h(0,l)
if(k==null)H.o(P.n(i+l+h))
n.push(s.a(k))}}}
A.iw.prototype={}
A.iB.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
E:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.n("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.J()},
J:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.m)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cq.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iy.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iz.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iA.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.ea.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.eb.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.ec.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.ed.prototype={
e0:function(a){var s=a.a,r=a.b,q=a.c,p=a.d
return this.a.uniform4f(this.d,s,r,q,p)},
dY:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iC.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.eg.prototype={
ac:function(a){var s=new Float32Array(H.bI(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.eh.prototype={
ac:function(a){var s=new Float32Array(H.bI(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.ej.prototype={
dZ:function(a){var s=a==null||!a.d,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.ek.prototype={
e_:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.j6.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cb(q.b,b).cb(q.d.cb(q.c,b),c)
a.sY(0,new V.I(p.a,p.b,p.c))
a.saD(p.G())
q=1-b
s=1-c
a.sd2(new V.ab(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)}}
F.jc.prototype={
$2:function(a,b){return V.fv(this.a,this.b,b)}}
F.jd.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.fv(-1,1,c),n=this.a.$2(b,c)
if(typeof n!=="number")return H.p(n)
q=-q*n
s=p*n
a.sY(0,new V.I(q,s,o))
a.saD(new V.x(q,s,o).G())
a.sd2(new V.ab(1-c,2+c,-1,-1))}}
F.je.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jf.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.jo.prototype={
$2:function(a,b){return 0}}
F.jp.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.p(r)
s=this.b+r
r=a.f
r=new V.x(r.a,r.b,r.c).G()
a.sY(0,new V.I(r.a*s,r.b*s,r.c*s))}}
F.h6.prototype={
aY:function(){var s=this
if(!s.gaZ()){C.a.B(s.a.a.d.b,s)
s.a.a.X()}s.bH()
s.bI()
s.fB()},
bL:function(a){this.a=a
a.d.b.push(this)},
bM:function(a){this.b=a
a.d.c.push(this)},
fH:function(a){this.c=a
a.d.d.push(this)},
bH:function(){var s=this.a
if(s!=null){C.a.B(s.d.b,this)
this.a=null}},
bI:function(){var s=this.b
if(s!=null){C.a.B(s.d.c,this)
this.b=null}},
fB:function(){var s=this.c
if(s!=null){C.a.B(s.d.d,this)
this.c=null}},
gaZ:function(){return this.a==null||this.b==null||this.c==null},
ek:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cu()
if(n!=null)q=q.A(0,n)
if(s!=null)q=q.A(0,s)
if(r!=null)q=q.A(0,r)
if(q.dA())return p
return q.G()},
em:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a8(0,n)
q=new V.x(o.a,o.b,o.c).G()
o=r.a8(0,n)
return q.aX(new V.x(o.a,o.b,o.c).G()).G()},
bV:function(){var s,r=this
if(r.d!=null)return!0
s=r.ek()
if(s==null){s=r.em()
if(s==null)return!1}r.d=s
r.a.a.X()
return!0},
ej:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cu()
if(n!=null)q=q.A(0,n)
if(s!=null)q=q.A(0,s)
if(r!=null)q=q.A(0,r)
if(q.dA())return p
return q.G()},
el:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.r().toString
if(Math.abs(p-0)<1e-9){j=b.a8(0,e)
o=new V.x(j.a,j.b,j.c).G()
if(q.a-r.a<0)o=o.M(0)}else{n=(j-s.b)/p
j=b.a8(0,e)
j=new V.I(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).a8(0,h)
o=new V.x(j.a,j.b,j.c).G()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.M(0)}j=l.d
if(j!=null){m=j.G()
o=m.aX(o).G().aX(m).G()}return o},
bT:function(){var s,r=this
if(r.e!=null)return!0
s=r.ej()
if(s==null){s=r.el()
if(s==null)return!1}r.e=s
r.a.a.X()
return!0},
gh1:function(a){var s=this
if(J.v(s.a,s.b))return!0
if(J.v(s.b,s.c))return!0
if(J.v(s.c,s.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
C:function(a){var s,r,q=this
if(q.gaZ())return a+"disposed"
s=a+C.c.ak(J.a1(q.a.e),0)+", "+C.c.ak(J.a1(q.b.e),0)+", "+C.c.ak(J.a1(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
J:function(){return this.C("")}}
F.h7.prototype={}
F.i6.prototype={
b0:function(a,b,c){var s,r=b.a
r.a.a.t()
r=r.e
s=c.a
s.a.a.t()
if(r==s.e){r=b.b
r.a.a.t()
r=r.e
s=c.b
s.a.a.t()
if(r==s.e){r=b.c
r.a.a.t()
r=r.e
s=c.c
s.a.a.t()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.t()
r=r.e
s=c.b
s.a.a.t()
if(r==s.e){r=b.b
r.a.a.t()
r=r.e
s=c.c
s.a.a.t()
if(r==s.e){r=b.c
r.a.a.t()
r=r.e
s=c.a
s.a.a.t()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.t()
r=r.e
s=c.c
s.a.a.t()
if(r==s.e){r=b.b
r.a.a.t()
r=r.e
s=c.a
s.a.a.t()
if(r==s.e){r=b.c
r.a.a.t()
r=r.e
s=c.b
s.a.a.t()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.hk.prototype={
aY:function(){var s=this
if(!s.gaZ()){C.a.B(s.a.a.c.b,s)
s.a.a.X()}s.bH()
s.bI()},
bL:function(a){this.a=a
a.c.b.push(this)},
bM:function(a){this.b=a
a.c.c.push(this)},
bH:function(){var s=this.a
if(s!=null){C.a.B(s.c.b,this)
this.a=null}},
bI:function(){var s=this.b
if(s!=null){C.a.B(s.c.c,this)
this.b=null}},
gaZ:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
C:function(a){if(this.gaZ())return a+"disposed"
return a+C.c.ak(J.a1(this.a.e),0)+", "+C.c.ak(J.a1(this.b.e),0)},
J:function(){return this.C("")}}
F.hl.prototype={}
F.iv.prototype={
b0:function(a,b,c){var s,r=b.a
r.a.a.t()
r=r.e
s=c.a
s.a.a.t()
if(r==s.e){r=b.b
r.a.a.t()
r=r.e
s=c.b
s.a.a.t()
return r==s.e}else{r=b.a
r.a.a.t()
r=r.e
s=c.b
s.a.a.t()
if(r==s.e){r=b.b
r.a.a.t()
r=r.e
s=c.a
s.a.a.t()
return r==s.e}else return!1}}}
F.hO.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
C:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.c.ak(J.a1(s.e),0)},
J:function(){return this.C("")}}
F.hZ.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.A():s},
b1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.t()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.m)(e),++q){p=e[q]
f.a.k(0,p.h5())}f.a.t()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.m)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.t()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
l=n[m]
f.b.a.a.k(0,l)
m=new F.hO()
if(l.a==null)H.o(P.n("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.v(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.m)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.t()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.t()
n=n.e
if(typeof n!=="number")return n.A()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.c.a
n.a.k(0,j)
n.a.k(0,i)
F.lZ(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.m)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.t()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.t()
n=n.e
if(typeof n!=="number")return n.A()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.t()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
g=n[m]
m=f.d.a
m.a.k(0,j)
m.a.k(0,i)
m.a.k(0,g)
F.c_(j,i,g)}e=f.e
if(e!=null)e.al(0)},
at:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.at()||!1
if(!r.a.at())s=!1
q=r.e
if(q!=null)q.al(0)
return s},
hh:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.a.c.slice(0)
for(;s.length!==0;){r=C.a.ghc(s)
C.a.cj(s,0)
if(r!=null){q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(o!=null&&a.b0(0,r,o)){q.push(o)
C.a.cj(s,p)}}if(q.length>1)b.b1(q)}}n.a.t()
n.c.ck()
n.d.ck()
n.b.hz()
n.c.cl(new F.iv())
n.d.cl(new F.i6())
m=n.e
if(m!=null)m.al(0)},
d1:function(){this.hh(new F.iM(),new F.hM())},
bg:function(){var s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.bg()
for(s=p.a.c.length-1;s>=0;--s){o=p.a.c
if(s>=o.length)return H.d(o,s)
r=o[s]
o=r.r
if(o!=null)r.sdE(new V.x(-o.a,-o.b,-o.c))
o=r.x
if(o!=null){q=new V.x(-o.a,-o.b,-o.c).G()
if(!J.v(r.x,q)){r.x=q
o=r.a
if(o!=null){o=o.e
if(o!=null)o.v(null)}}}}o=p.e
if(o!=null)o.al(0)},
bS:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.a4().a)!==0?1:0
if((s&$.aU().a)!==0)++r
if((s&$.aT().a)!==0)++r
if((s&$.aB().a)!==0)++r
if((s&$.aV().a)!==0)++r
if((s&$.cZ().a)!==0)++r
if((s&$.d_().a)!==0)++r
if((s&$.bP().a)!==0)++r
if((s&$.aS().a)!==0)++r
q=a5.gcs(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.fW(l)
j=k.gcs(k)
n[l]=new Z.fK(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.d(h,i)
g=h[i].hg(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.d(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.bI(o)),35044)
s.bindBuffer(a2,null)
b=new Z.aW(new Z.et(a2,c),n,a5)
b.b=[]
if(a1.b.b.length!==0){a=[]
for(l=0;h=a1.b.b,l<h.length;++l){h=h[l].a
h.a.a.t()
a.push(h.e)}a0=Z.jM(s,34963,a)
b.b.push(new Z.c3(0,a.length,a0))}if(a1.c.b.length!==0){a=[]
for(l=0;h=a1.c.b,l<h.length;++l){h=h[l].a
h.a.a.t()
a.push(h.e)
h=a1.c.b
if(l>=h.length)return H.d(h,l)
h=h[l].b
h.a.a.t()
a.push(h.e)}a0=Z.jM(s,34963,a)
b.b.push(new Z.c3(1,a.length,a0))}if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.t()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.d(h,l)
h=h[l].b
h.a.a.t()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.d(h,l)
h=h[l].c
h.a.a.t()
a.push(h.e)}a0=Z.jM(s,34963,a)
b.b.push(new Z.c3(4,a.length,a0))}return b},
i:function(a){var s=this,r="   ",q=[]
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.C(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.C(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.C(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.C(r))}return C.a.q(q,"\n")},
X:function(){var s=this.e
if(s!=null)s.v(null)}}
F.i0.prototype={
cZ:function(a){var s,r,q,p,o,n=[],m=a.length
if(m>0){s=a[0]
for(r=this.a,q=2;q<m;++q){p=q-1
o=a.length
if(p>=o)return H.d(a,p)
p=a[p]
if(q>=o)return H.d(a,q)
o=a[q]
r.a.k(0,s)
r.a.k(0,p)
r.a.k(0,o)
n.push(F.c_(s,p,o))}}return n},
fU:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.d(c,q)
k=c[q];++q
if(q>=l)return H.d(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.d(c,i)
h=c[i]
if(r<0||r>=l)return H.d(c,r)
g=c[r]
l=s.a
if(n){l.k(0,k)
s.a.k(0,j)
s.a.k(0,h)
f.push(F.c_(k,j,h))
s.a.k(0,k)
s.a.k(0,h)
s.a.k(0,g)
f.push(F.c_(k,h,g))}else{l.k(0,j)
s.a.k(0,h)
s.a.k(0,g)
f.push(F.c_(j,h,g))
s.a.k(0,j)
s.a.k(0,g)
s.a.k(0,k)
f.push(F.c_(j,g,k))}n=!n}p=!p}return f},
gj:function(a){return this.b.length},
cl:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.b0(0,n,l)){n.aY()
break}}}}},
ck:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.gh1(q)
if(r)q.aY()}},
at:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.m)(s),++p)if(!s[p].bV())q=!1
return q},
bU:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.m)(s),++p)if(!s[p].bT())q=!1
return q},
bg:function(){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
o=p.b
p.b=p.c
p.c=o
n=p.d
if(n!=null)p.d=new V.x(-n.a,-n.b,-n.c)
n=p.e
if(n!=null)p.e=new V.x(-n.a,-n.b,-n.c)
n=p.a.a.e
if(n!=null)n.v(null)}},
i:function(a){return this.J()},
C:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].C(a))
return C.a.q(p,"\n")},
J:function(){return this.C("")}}
F.i1.prototype={
gj:function(a){return this.b.length},
cl:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.b0(0,n,l)){n.aY()
break}}}}},
ck:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=J.v(q.a,q.b)
if(r)q.aY()}},
i:function(a){return this.J()},
C:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q.push(r[s].C(a+(""+s+". ")))}return C.a.q(q,"\n")},
J:function(){return this.C("")}}
F.i2.prototype={
gj:function(a){return this.b.length},
hz:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.a.B(q.b.b,r)
q=r.a.a.e
if(q!=null)q.v(null)
q=r.a
if(q!=null){C.a.B(q.b.b,r)
r.a=null}}}},
i:function(a){return this.J()},
C:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].C(a))
return C.a.q(p,"\n")},
J:function(){return this.C("")}}
F.iG.prototype={
bX:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.er(s.cx,p,m,r,q,o,n,a,l)},
h5:function(){return this.bX(null)},
sY:function(a,b){var s
if(!J.v(this.f,b)){this.f=b
s=this.a
if(s!=null)s.X()}},
sdE:function(a){var s
a=a==null?null:a.G()
if(!J.v(this.r,a)){this.r=a
s=this.a
if(s!=null)s.X()}},
saD:function(a){var s
if(!J.v(this.z,a)){this.z=a
s=this.a
if(s!=null)s.X()}},
sd2:function(a){var s
if(!J.v(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.X()}},
hg:function(a){var s,r=this
if(a.p(0,$.a4())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.p(0,$.aU())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.p(0,$.aT())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.p(0,$.aB())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.p(0,$.aV())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.p(0,$.cZ())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.p(0,$.d_())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.p(0,$.bP()))return[r.ch]
else if(a.p(0,$.aS())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
bV:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cu()
r.d.I(0,new F.iR(q))
r.r=q.a.G()
q=r.a
if(q!=null){q.X()
q=r.a.e
if(q!=null)q.al(0)}return!0},
bT:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cu()
r.d.I(0,new F.iQ(q))
r.x=q.a.G()
q=r.a
if(q!=null){q.X()
q=r.a.e
if(q!=null)q.al(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
C:function(a){var s,r,q=this,p="-",o=[]
o.push(C.c.ak(J.a1(q.e),0))
s=q.f
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.r
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.x
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.y
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.z
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.Q
if(s!=null)o.push(s.i(0))
else o.push(p)
o.push(V.z(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.a.q(o,", ")
return a+"{"+r+"}"},
J:function(){return this.C("")}}
F.iR.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.A(0,r)}}}
F.iQ.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.A(0,r)}}}
F.iH.prototype={
t:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
s[p].e=q;++q}this.b=!1}},
k:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.n("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.X()
return!0},
d_:function(a,b,c,d,e,f,g){var s=F.er(a,null,b,c,d,e,f,g,0)
this.k(0,s)
return s},
bd:function(a,b,c,d,e,f){return this.d_(a,b,c,null,d,e,f)},
fV:function(a,b,c,d,e,f){return this.d_(a,b,c,d,e,f,null)},
gj:function(a){return this.c.length},
at:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)s[q].bV()
return!0},
bU:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)s[q].bT()
return!0},
h0:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
if(p.z==null){o=p.r.G()
if(!J.v(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.v(null)}}}}return!0},
i:function(a){return this.J()},
C:function(a){var s,r,q,p
this.t()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.m)(r),++p)s.push(r[p].C(a))
return C.a.q(s,"\n")},
J:function(){return this.C("")}}
F.iI.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.d(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.d(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.d(r,b)
return r[b]},
I:function(a,b){var s=this
C.a.I(s.b,b)
C.a.I(s.c,new F.iJ(s,b))
C.a.I(s.d,new F.iK(s,b))},
i:function(a){return this.J()},
J:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].C(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].C(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].C(""))
return C.a.q(p,"\n")}}
F.iJ.prototype={
$1:function(a){if(!J.v(a.a,this.a))this.b.$1(a)}}
F.iK.prototype={
$1:function(a){var s=this.a
if(!J.v(a.a,s)&&!J.v(a.b,s))this.b.$1(a)}}
F.iL.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.J()},
J:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].C(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].C(""))
return C.a.q(p,"\n")}}
F.iN.prototype={}
F.iM.prototype={
b0:function(a,b,c){return J.v(b.f,c.f)}}
F.iO.prototype={}
F.hM.prototype={
b1:function(a){var s,r,q,p=V.cu()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.x(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.G()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.m)(a),++r)a[r].sdE(p)
return null}}
F.iP.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.J()},
J:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].C(""))
return C.a.q(p,"\n")}}
O.dj.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.A():s},
w:function(a){var s=this.x
if(s!=null)s.v(a)},
ad:function(){return this.w(null)},
sbR:function(a){var s=this.r
$.r().toString
if(!(Math.abs(s-a)<1e-9)){this.r=a
s=new D.l("blurValue",s,a)
s.b=!0
this.w(s)}},
sd8:function(a){var s,r=this,q=r.e
if(q!=a){if(q!=null)q.gm().B(0,r.ga_())
s=r.e
r.e=a
if(a!=null)a.gm().k(0,r.ga_())
q=new D.l("colorTexture",s,r.e)
q.b=!0
r.w(q)}},
sbQ:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gm().B(0,q.ga_())
s=q.f
q.f=a
if(a!=null)a.gm().k(0,q.ga_())
p=new D.l("blurTexture",s,q.f)
r=p.b=!0
q.w(p)
p=q.f==null
if(!(p&&s!=null))p=!p&&s==null
else p=r
if(p){q.a=null
q.w(null)}}},
scn:function(a){var s,r=this,q=$.kl
if(q==null){q=new V.cd(1,0,0,0,1,0,0,0,1)
$.kl=q
a=q}else a=q
if(!J.v(r.b,a)){s=r.b
r.b=a
q=new D.l("textureMatrix",s,a)
q.b=!0
r.w(q)}},
sbP:function(a){var s,r,q=this
if(a==null)a=V.kM()
if(!J.v(q.c,a)){s=q.c
q.c=a
r=new D.l("blurAdjust",s,a)
r.b=!0
q.w(r)}},
a6:function(a,b){},
a3:function(a,b){if(b!=null)if(!C.a.L(a,b)){b.a=a.length
a.push(b)}},
cm:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a
if(e==null){s=f.f!=null
e="GaussianBlur_"+(s?"1":"0")
r=e.charCodeAt(0)==0?e:e
q=a.fr.h(0,r)
if(q==null){e=a.a
q=new A.hc(e,r)
q.bn(e,r)
p=q.z=new A.hd(s,r)
o=new P.aK("")
o.a="precision mediump float;\n"
o.a="precision mediump float;\n\n"
o.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
if(s){o.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\n"
e=o.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\nuniform vec4 blurAdj;\n"}else e=o.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\n"
e+="uniform vec2 blurScale;\n"
o.a=e
e+="\n"
o.a=e
e+="varying vec2 txt2D;\n"
o.a=e
o.a=e+"\n"
p.aI(o,3,[0.75],[0.5])
p.aI(o,6,[0.42857,2.14286],[0.41667,0.08333])
p.aI(o,9,[0,1.8],[0.5122,0.2439])
p.aI(o,12,[0,1.38462,3.23077],[0.22703,0.31622,0.07027])
p.aI(o,15,[0.9375,2.8125],[0.36184,0.13816])
p.aI(o,18,[0.47368,2.36842,4.26316],[0.29916,0.16318,0.03766])
e=o.a+="void main()\n"
e=o.a=e+"{\n"
e=(s?o.a=e+"   float blurValue = dot(texture2D(blurTxt, txt2D), blurAdj);\n":e)+"   float blurOffset = abs(blurValue);\n"
o.a=e
e+="\n"
o.a=e
e+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
o.a=e
e+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
o.a=e
e+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
o.a=e
e+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
o.a=e
e+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
o.a=e
e+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
o.a=e
e+="   else                       gl_FragColor = blur18();\n"
o.a=e
e=o.a=e+"}\n"
q.c9(0,u.f.charCodeAt(0)==0?u.f:u.f,e.charCodeAt(0)==0?e:e)
q.Q=q.x.h(0,"posAttr")
q.ch=q.x.h(0,"txtAttr")
q.cx=t.q.a(q.y.h(0,"projViewObjMat"))
q.cy=t.N.a(q.y.h(0,"txt2DMat"))
e=t.c
q.dy=e.a(q.y.h(0,"colorTxt"))
q.dx=t.t.a(q.y.h(0,"blurScale"))
n=q.y
if(s){q.fr=e.a(n.h(0,"blurTxt"))
q.db=t.y.a(q.y.h(0,"blurAdj"))}else q.fx=t.n.a(n.h(0,"blurValue"))
a.bO(q)}e=f.a=q
b.e=null}p=e.z
e=b.e
if((!(e instanceof Z.aW)?b.e=null:e)==null){e=b.d
n=$.a4()
m=$.aB()
m=e.bS(new Z.cv(a.a),new Z.ax(n.a|m.a))
m.ao($.a4()).e=f.a.Q.c
m.ao($.aB()).e=f.a.ch.c
b.e=m}l=[]
f.a3(l,f.e)
e=p.a
if(e)f.a3(l,f.f)
for(k=0;k<l.length;++k)l[k].W(a)
n=f.a
n.W(a)
m=f.e
n.cV(n.dy,m)
m=f.b
j=n.cy
j.toString
j.ac(m.a1(0,!0))
m=f.d
j=m.a
i=a.c
if(typeof j!=="number")return j.T()
m=m.b
h=a.d
if(typeof m!=="number")return m.T()
g=n.dx
g.a.uniform2f(g.d,j/i,m/h)
h=a.gdO()
n=n.cx
n.toString
n.ac(h.a1(0,!0))
n=f.a
if(e){e=f.f
n.cV(n.fr,e)
e=f.c
n.db.e0(e)}else{e=f.r
n=n.fx
n.a.uniform1f(n.d,e)}e=b.e
if(e instanceof Z.aW){e.W(a)
e.Z(a)
e.aE(a)}else b.e=null
e=f.a
e.toString
n=a.a
n.useProgram(null)
e.x.bZ()
for(k=0;k<l.length;++k){e=l[k]
if(e.c){e.c=!1
n.activeTexture(33984+e.a)
n.bindTexture(3553,null)}}}}
O.dv.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.A():s},
w:function(a){var s=this.fr
if(s!=null)s.v(a)},
ad:function(){return this.w(null)},
cR:function(a){this.a=null
this.w(a)},
fF:function(){return this.cR(null)},
eG:function(a,b){var s=new D.an()
s.b=!0
this.w(s)},
eI:function(a,b){var s=new D.ao()
s.b=!0
this.w(s)},
cJ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.u(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
o=p.gab()
n=d.h(0,p.gab())
d.l(0,o,n==null?1:n)}m=[]
d.I(0,new O.hy(f,m))
C.a.aS(m,new O.hz())
l=new H.u(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
o=p.gab()
n=l.h(0,p.gab())
l.l(0,o,n==null?1:n)}k=[]
l.I(0,new O.hA(f,k))
C.a.aS(k,new O.hB())
j=new H.u(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
o=p.gab()
n=j.h(0,p.gab())
j.l(0,o,n==null?1:n)}i=[]
j.I(0,new O.hC(f,i))
C.a.aS(i,new O.hD())
h=new H.u(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.m)(e),++q){p=e[q]
r=p.gab()
o=h.h(0,p.gab())
h.l(0,r,o==null?1:o)}g=[]
h.I(0,new O.hE(f,g))
C.a.aS(g,new O.hF())
e=C.d.a0(f.e.a.length+3,4)
f.dy.toString
return A.m3(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
a3:function(a,b){if(b!=null)if(!C.a.L(a,b)){b.a=a.length
a.push(b)}},
a6:function(a,b){var s,r,q
for(s=this.dx.a,s=new J.R(s,s.length);s.u();){r=s.d
r.toString
q=$.cf
r.a=q==null?$.cf=new V.aF(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):q
q=r.b
if(q!=null)r.a=q.aq(0,b,r)}},
cm:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cJ()
s=b4.fr.h(0,b3.aB)
if(s==null){s=A.m2(b3,b4.a)
b4.bO(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bf
b3=b5.e
if(!(b3 instanceof Z.aW))b3=b5.e=null
if(b3==null||!b3.d.p(0,q)){b3=r.k4
if(b3)b5.d.at()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.bU()
o.a.bU()
o=o.e
if(o!=null)o.al(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.h0()
n=n.e
if(n!=null)n.al(0)}l=b5.d.bS(new Z.cv(b4.a),q)
l.ao($.a4()).e=b2.a.Q.c
if(b3)l.ao($.aU()).e=b2.a.cx.c
if(p)l.ao($.aT()).e=b2.a.ch.c
if(r.r2)l.ao($.aB()).e=b2.a.cy.c
if(o)l.ao($.aV()).e=b2.a.db.c
if(r.ry)l.ao($.aS()).e=b2.a.dx.c
b5.e=l}k=[]
b2.a.W(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.ga5(p)
b3=b3.dy
b3.toString
b3.ac(p.a1(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga5(p)
o=b4.dx
o=b4.cx=p.n(0,o.ga5(o))
p=o}b3=b3.fr
b3.toString
b3.ac(p.a1(0,!0))}b3=b2.a
p=b4.gdO()
b3=b3.fy
b3.toString
b3.ac(p.a1(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.ga5(p)
b3=b3.fx
b3.toString
b3.ac(p.a1(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ac(C.h.a1(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ac(C.h.a1(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ac(C.h.a1(p,!0))}if(r.be>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.d(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.d(b3,i)
b3=b3[i]
h=new Float32Array(H.bI(p.a1(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a3(k,b2.f.e)
b3=b2.a
p=b2.f.e
b3.ah(b3.ry,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a3(k,b2.r.e)
b3=b2.a
p=b2.r.e
b3.ah(b3.y1,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a3(k,b2.x.e)
b3=b2.a
p=b2.x.e
b3.ah(b3.aB,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bf
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a3(k,b2.y.e)
b3=b2.a
p=b2.y.e
b3.ah(b3.dg,p)}b3=r.e
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.z.ch
o=o.dj
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.dh
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a3(k,b2.z.e)
b3=b2.a
p=b2.z.e
b3.ah(b3.di,p)}b3=r.z
if(b3.length>0){g=new H.u(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.m)(p),++f){e=p[f]
d=e.gab()
c=g.h(0,d)
if(c==null)c=0
g.l(0,d,c+1)
b=J.d0(b2.a.c1.h(0,d),c)
n=e.ghN()
m=$.at
n=n.b6(m==null?$.at=new V.I(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghR()
m=$.at
n=n.b6(m==null?$.at=new V.I(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaA(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gha()){n=e.gfX()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gfY()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gfZ()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.m)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.c0.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.ga5(p)
a0=new H.u(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.m)(p),++f){e=p[f]
d=e.gab()
c=a0.h(0,d)
if(c==null)c=0
a0.l(0,d,c+1)
b=J.d0(b2.a.c3.h(0,d),c)
n=e.gda(e)
n=new V.x(C.b.n(a.a,n.gdd(n))+C.b.n(a.b,n.gde(n))+C.b.n(a.c,n.gdf()),C.b.n(a.e,n.gdd(n))+C.b.n(a.f,n.gde(n))+C.b.n(a.r,n.gdf()),C.b.n(a.y,n.gdd(n))+C.b.n(a.z,n.gde(n))+C.b.n(a.Q,n.gdf())).G()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.gaA(e)
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)
e.gaR()
n=e.gda(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gbm()
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gbk(e)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaR()
if(!C.a.L(k,n)){n.a=k.length
k.push(n)}n=e.gaR()
m=n.gdC(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.m)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.c2.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.ga5(p)
a3=new H.u(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.m)(p),++f){e=p[f]
d=e.gab()
c=a3.h(0,d)
if(c==null)c=0
a3.l(0,d,c+1)
b=J.d0(b2.a.c5.h(0,d),c)
a4=a.n(0,e.a)
n=e.a
m=$.at
n=n.b6(m==null?$.at=new V.I(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.at
n=a4.b6(n==null?$.at=new V.I(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.c
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.d!=null||!1){n=a4.dw(0)
m=n.a
a1=n.b
a2=n.c
a5=n.e
a6=n.f
a7=n.r
a8=n.y
a9=n.z
n=n.Q
b0=b.d
b0.toString
h=new Float32Array(H.bI(new V.cd(m,a1,a2,a5,a6,a7,a8,a9,n).a1(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)}n=e.d
m=n!=null
if(m){if(m)if(!C.a.L(k,n)){n.a=k.length
k.push(n)}n=e.d
m=n!=null
if(m&&n.d>=6){a1=b.f
a1.toString
m=!m||n.d<6
a2=a1.a
a1=a1.d
if(m)a2.uniform1i(a1,0)
else a2.uniform1i(a1,n.a)}}n=e.r
m=b.y
m.a.uniform1f(m.d,n)
n=e.x
m=b.z
m.a.uniform1f(m.d,n)
n=e.y
m=b.Q
m.a.uniform1f(m.d,n)}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.m)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.c4.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.ga5(p)
b1=new H.u(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.m)(p),++f){e=p[f]
d=e.gab()
c=b1.h(0,d)
if(c==null)c=0
b1.l(0,d,c+1)
b=J.d0(b2.a.c7.h(0,d),c)
n=e.ghx(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gda(e).G()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.b6(e.ghx(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaA(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaR()
n=e.gbm()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gbk(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gi0()
m=b.x
m.a.uniform1f(m.d,n)
n=e.gi1()
m=b.y
m.a.uniform1f(m.d,n)
e.gaR()
n=e.gaR()
if(!C.a.L(k,n)){n.a=k.length
k.push(n)}n=e.gaR()
m=n.gdC(n)
if(m){m=b.dx
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gcr()
n=e.ghM()
m=b.z
m.a.uniform4f(m.d,n.a,n.b,n.c,n.d)
n=e.gcr()
if(!C.a.L(k,n)){n.a=k.length
k.push(n)}n=e.gcr()
m=n.gdC(n)
if(m){m=b.dy
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.ghQ()){n=e.ghP()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.ghO()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gha()){n=e.gfX()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gfY()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gfZ()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.m)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.c6.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.f.c){b2.a3(k,b2.Q.e)
b3=b2.a
p=b2.Q.e
b3.ah(b3.dk,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga5(p).dw(0)}b3=b3.id
b3.toString
b3.ac(p.a1(0,!0))}if(r.db){b2.a3(k,b2.ch)
b3=b2.a
p=b2.ch
b3.ah(b3.dl,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.dm
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a3(k,b2.cx.e)
b3=b2.a
p=b2.cx.e
b3.ah(b3.dn,p)}b3=r.x
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.cy.ch
o=o.dq
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.dr
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a3(k,b2.cy.e)
b3=b2.a
p=b2.cy.e
b3.ah(b3.ds,p)}}b3=r.y
p=b3.a
o=!p
if(o)n=b3.c
else n=!0
if(n){if(p){p=b2.a
n=b2.db.f
p=p.dt
p.a.uniform1f(p.d,n)}if(b3.c){b2.a3(k,b2.db.e)
p=b2.a
n=b2.db.e
p.ah(p.du,n)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(p=b4.a,i=0;i<k.length;++i){n=k[i]
if(!n.c&&n.d>=6){n.c=!0
p.activeTexture(33984+n.a)
p.bindTexture(34067,n.b)}}n=b5.e
n.W(b4)
n.Z(b4)
n.aE(b4)
if(o)b3=b3.c
else b3=!0
if(b3)p.disable(3042)
for(i=0;i<k.length;++i){b3=k[i]
if(b3.c){b3.c=!1
p.activeTexture(33984+b3.a)
p.bindTexture(34067,null)}}b3=b2.a
b3.toString
p.useProgram(null)
b3.x.bZ()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cJ().aB}}
O.hy.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.fI(a,C.d.a0(b+3,4)*4))}}
O.hz.prototype={
$2:function(a,b){return J.d1(a.a,b.a)}}
O.hA.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.fV(a,C.d.a0(b+3,4)*4))}}
O.hB.prototype={
$2:function(a,b){return J.d1(a.a,b.a)}}
O.hC.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.hP(a,C.d.a0(b+3,4)*4))}}
O.hD.prototype={
$2:function(a,b){return J.d1(a.a,b.a)}}
O.hE.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.i7(a,C.d.a0(b+3,4)*4))}}
O.hF.prototype={
$2:function(a,b){return J.d1(a.a,b.a)}}
O.hs.prototype={
ay:function(){var s,r=this
r.cw()
s=r.f
$.r().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.l(r.b,s,1)
s.b=!0
r.a.w(s)}}}
O.cc.prototype={
w:function(a){return this.a.w(a)},
ad:function(){return this.w(null)},
ay:function(){},
cU:function(a){var s,r,q=this
if(!q.c.p(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.ay()
s=q.a
s.a=null
s.w(null)}},
saD:function(a){var s,r=this,q=r.c
if(!q.c)r.cU(new A.V(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gm().B(0,r.ga_())
s=r.e
r.e=a
a.gm().k(0,r.ga_())
q=new D.l(r.b+".textureCube",s,r.e)
q.b=!0
r.a.w(q)}}}
O.ht.prototype={}
O.as.prototype={
cT:function(a){var s,r,q=this
if(!q.f.p(0,a)){s=q.f
q.f=a
r=new D.l(q.b+".color",s,a)
r.b=!0
q.a.w(r)}},
ay:function(){this.cw()
this.cT(new V.M(1,1,1))},
saA:function(a,b){this.cU(new A.V(!0,!1,this.c.c))
this.cT(b)}}
O.hv.prototype={}
O.hw.prototype={
ay:function(){var s,r=this
r.cz()
s=r.ch
$.r().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.l(r.b+".refraction",s,1)
s.b=!0
r.a.w(s)}}}
O.hx.prototype={
ay:function(){var s,r=this
r.cz()
s=r.ch
$.r().toString
if(!(Math.abs(s-100)<1e-9)){r.ch=100
s=new D.l(r.b+".shininess",s,100)
s.b=!0
r.a.w(s)}}}
O.id.prototype={}
O.e4.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.A():s},
w:function(a){var s=this.e
if(s!=null)s.v(a)},
ad:function(){return this.w(null)},
eW:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.ga_(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.am()
o.d=0
p.f=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.ad()},
eY:function(a,b){var s,r
for(s=b.gN(b),r=this.ga_();s.u();)s.gH(s).gm().B(0,r)
this.ad()},
sd4:function(a){var s=this.f
if(s!==a){this.f=a
s=new D.l("blend",s,a)
s.b=!0
this.w(s)}},
a6:function(a,b){},
ew:function(a){a=C.d.a0(a+3,4)*4
if(a<=0)return 4
return a},
cm:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.ew(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}s=h.b
if(s==null){s=h.f
r="TextureLayout_"+g+"_"+C.d.i(s.a)
q=a.fr.h(0,r)
if(q==null){q=A.mo(g,s,a.a)
a.bO(q)}h.b=q
s=q}if(b.e==null){s=b.d.bS(new Z.cv(a.a),$.a4())
r=s.ao($.a4())
p=h.b
r.e=p.z.c
b.e=s
s=p}s.W(a)
o=[]
for(n=0,m=0;s=h.c.a,m<s.length;++m){l=s[m]
if(l!=null&&l.a!=null){s=l.a
if(s!=null)if(!C.a.L(o,s)){s.a=o.length
o.push(s)}s=h.b
r=l.a
s=s.cx
if(n>=s.length)return H.d(s,n)
s=s[n]
p=r==null||!r.d
k=s.a
s=s.d
if(p)k.uniform1i(s,0)
else k.uniform1i(s,r.a)
s=h.b
r=l.b
s=s.cy
if(n>=s.length)return H.d(s,n)
s=s[n]
if(r==null){r=$.cf
if(r==null){r=new V.aF(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.cf=r}}j=new Float32Array(H.bI(r.a1(0,!0)))
s.a.uniformMatrix4fv(s.d,!1,j)
s=h.b
i=l.c
s.toString
if(i==null){r=$.cl
if(r==null){r=V.hR(0,0,1,1)
$.cl=r
i=r}else i=r}r=s.db
if(n>=r.length)return H.d(r,n)
r=r[n]
r.a.uniform2f(r.d,i.a,i.b)
s=s.dx
if(n>=s.length)return H.d(s,n)
s=s[n]
s.a.uniform2f(s.d,i.c,i.d)
s=h.b
i=l.d
s.toString
if(i==null){r=$.cl
if(r==null){r=V.hR(0,0,1,1)
$.cl=r
i=r}else i=r}r=s.dy
if(n>=r.length)return H.d(r,n)
r=r[n]
r.a.uniform2f(r.d,i.a,i.b)
s=s.fr
if(n>=s.length)return H.d(s,n)
s=s[n]
s.a.uniform2f(s.d,i.c,i.d)
s=h.b
r=l.e
s=s.fx
if(n>=s.length)return H.d(s,n)
s=s[n]
r=r?1:0
s.a.uniform1i(s.d,r);++n}}s=h.b.Q
s.a.uniform1i(s.d,n)
s=h.b
r=h.a
s.ch.dY(r)
for(m=0;m<o.length;++m)o[m].W(a)
s=b.e
if(s instanceof Z.aW){s.W(a)
s.Z(a)
s.aE(a)}else b.e=null
s=h.b
s.toString
r=a.a
r.useProgram(null)
s.x.bZ()
for(m=0;m<o.length;++m){s=o[m]
if(s.c){s.c=!1
r.activeTexture(33984+s.a)
r.bindTexture(3553,null)}}}}
O.bA.prototype={
w:function(a){var s=this.f
if(s!=null)s.v(a)},
ad:function(){return this.w(null)}}
T.ie.prototype={}
T.ig.prototype={}
T.ih.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.A():s},
W:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}}}
T.ii.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.A():s}}
T.ik.prototype={
dB:function(a,b,c,d,e,f){var s,r=this,q=34067,p=r.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,10497)
p.texParameteri(q,10243,10497)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null)
s=new T.ii()
s.a=0
s.b=o
s.c=!1
s.d=0
r.aK(s,o,a,34069,!1,!1)
r.aK(s,o,d,34070,!1,!1)
r.aK(s,o,b,34071,!1,!1)
r.aK(s,o,e,34072,!1,!1)
r.aK(s,o,c,34073,!1,!1)
r.aK(s,o,f,34074,!1,!1)
return s},
aK:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.Q(s,"load",new T.il(this,s,!1,b,!1,d,a),!1)},
fG:function(a,b,c){var s,r,q,p
b=V.cY(b)
s=V.cY(a.width)
r=V.cY(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.jw()
q.width=s
q.height=r
p=C.f.dV(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.nQ(p.getImageData(0,0,q.width,q.height))}}}
T.il.prototype={
$1:function(a){var s=this,r=s.a,q=r.fG(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.v.hG(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.c_()}++r.e}}
X.fG.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.A():s},
V:function(a){var s=this.fr
if(s!=null)s.v(a)},
sam:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
s=new D.l("width",s,b)
s.b=!0
r.V(s)}},
sai:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
s=new D.l("height",s,b)
s.b=!0
r.V(s)}},
W:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=3553,c=36161,b=36160
if(f.f){s=a.a
r=s.drawingBufferWidth
q=f.r
if(typeof r!=="number")return r.n()
f.sam(0,C.b.U(r*q))
s=s.drawingBufferHeight
q=f.x
if(typeof s!=="number")return s.n()
f.sai(0,C.b.U(s*q))}if(f.y==null){s=a.a
r=f.ch
q=f.a
p=f.b
o=s.getParameter(3379)
n=V.cY(q)
m=V.cY(p)
o=V.cY(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
s.bindTexture(d,l)
s.texParameteri(d,10242,33071)
s.texParameteri(d,10243,33071)
s.texParameteri(d,10241,9729)
s.texParameteri(d,10240,9729)
C.v.dR(s,d,0,6408,n,m,0,6408,5121,e)
s.bindTexture(d,e)
k=T.ky(l)
k.e=q
k.f=p
k.r=n
k.x=m
if(!k.d){k.d=!0
q=k.y
if(q!=null)q.c_()}r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
r=r.y
if(r!=null)r.c_()
r=f.ch
q=r.b
f.z=q
f.c=r.r
f.d=r.x
s.bindTexture(d,q)
r=s.createRenderbuffer()
f.Q=r
s.bindRenderbuffer(c,r)
s.renderbufferStorage(c,33189,f.c,f.d)
r=s.createFramebuffer()
f.y=r
s.bindFramebuffer(b,r)
s.framebufferTexture2D(b,36064,d,f.z,0)
s.framebufferRenderbuffer(b,36096,c,f.Q)
s.bindTexture(d,e)
s.bindRenderbuffer(c,e)
s.bindFramebuffer(b,e)}s=a.a
s.bindFramebuffer(b,f.y)
s.enable(2884)
s.enable(2929)
s.depthFunc(513)
r=f.dy
q=r.c
a.c=C.b.U(q*f.a)
p=r.d
a.d=C.b.U(p*f.b)
j=r.a
i=f.c
h=C.b.U(j*i)
r=r.b
j=f.d
s.viewport(h,C.b.U(r*j),C.b.U(q*i),C.b.U(p*j))
s.clearDepth(f.db)
if(f.cy){r=f.cx
s.clearColor(r.a,r.b,r.c,r.d)
g=16640}else g=256
if(g>0)s.clear(g)},
aE:function(a){a.a.bindFramebuffer(36160,null)}}
X.jv.prototype={}
X.hb.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.A():s},
W:function(a){var s,r,q,p,o,n,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
s=m.drawingBufferWidth
r=m.drawingBufferHeight
q=this.r
p=q.a
if(typeof s!=="number")return H.p(s)
o=C.b.U(p*s)
p=q.b
if(typeof r!=="number")return H.p(r)
n=C.b.U(p*r)
p=C.b.U(q.c*s)
a.c=p
q=C.b.U(q.d*r)
a.d=q
m.viewport(o,n,p,q)
m.clearDepth(this.c)
q=this.a
m.clearColor(q.a,q.b,q.c,q.d)
m.clear(16640)},
aE:function(a){}}
X.hf.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.A():s}}
X.dI.prototype={
gm:function(){var s=this.f
return s==null?this.f=D.A():s},
V:function(a){var s=this.f
if(s!=null)s.v(a)},
eg:function(){return this.V(null)},
sau:function(a){var s,r,q=this
if(!J.v(q.b,a)){s=q.b
if(s!=null)s.gm().B(0,q.gcD())
r=q.b
q.b=a
if(a!=null)a.gm().k(0,q.gcD())
s=new D.l("mover",r,q.b)
s.b=!0
q.V(s)}}}
X.ib.prototype={}
V.jn.prototype={
$1:function(a){var s=C.b.dS(this.a.ghd(),2)
if(s!=="0.00")P.k1(s+" fps")}}
V.i3.prototype={
e9:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
m.className="scrollTop"
n.appendChild(m)
s=o.createElement("div")
s.className="scrollPage"
n.appendChild(s)
r=o.createElement("div")
r.className="pageCenter"
s.appendChild(r)
if(a.length!==0){o.title=a
q=o.createElement("div")
q.className="pageTitle"
q.textContent=a
r.appendChild(q)}p=o.createElement("div")
this.a=p
r.appendChild(p)
this.b=null
W.Q(o,"scroll",new V.i5(m),!1)},
d0:function(a){var s,r,q,p,o,n,m,l
this.fJ()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.hf(a)
q.toString
p=new H.H(p)
p=new P.bH(q.dT(new H.br(p,p.gj(p))).a())
for(;p.u();){q=p.gH(p)
switch(q.a){case"Bold":o=s.createElement("div")
o.className="boldPar"
o.textContent=q.b
r.appendChild(o)
break
case"Italic":o=s.createElement("div")
o.className="italicPar"
o.textContent=q.b
r.appendChild(o)
break
case"Code":o=s.createElement("div")
o.className="codePar"
o.textContent=q.b
r.appendChild(o)
break
case"Link":q=q.b
if(H.lh(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.d(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.mR(C.N,q,C.p,!1)
m=s.createElement("a")
m.className="linkPar"
m.href="#"+l
m.textContent=q
r.appendChild(m)}break
case"Other":o=s.createElement("div")
o.className="normalPar"
o.textContent=q.b
r.appendChild(o)
break}}this.a.appendChild(r)},
fJ:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=new L.ip()
s.a=new H.u(t.V)
s.b=new H.u(t.w)
s.c=P.kj(t.f)
s.d=s.K(0,p)
r=s.K(0,p).q(0,o)
q=K.S(new H.H("*"))
r.a.push(q)
r.c=!0
r=s.K(0,o).q(0,o)
q=new K.aH()
q.a=[]
r.a.push(q)
r=K.S(new H.H("*"))
q.a.push(r)
r=s.K(0,o).q(0,"BoldEnd")
q=K.S(new H.H("*"))
r.a.push(q)
r.c=!0
r=s.K(0,p).q(0,n)
q=K.S(new H.H("_"))
r.a.push(q)
r.c=!0
r=s.K(0,n).q(0,n)
q=new K.aH()
q.a=[]
r.a.push(q)
r=K.S(new H.H("_"))
q.a.push(r)
r=s.K(0,n).q(0,m)
q=K.S(new H.H("_"))
r.a.push(q)
r.c=!0
r=s.K(0,p).q(0,l)
q=K.S(new H.H("`"))
r.a.push(q)
r.c=!0
r=s.K(0,l).q(0,l)
q=new K.aH()
q.a=[]
r.a.push(q)
r=K.S(new H.H("`"))
q.a.push(r)
r=s.K(0,l).q(0,"CodeEnd")
q=K.S(new H.H("`"))
r.a.push(q)
r.c=!0
r=s.K(0,p).q(0,k)
q=K.S(new H.H("["))
r.a.push(q)
r.c=!0
r=s.K(0,k).q(0,j)
q=K.S(new H.H("|"))
r.a.push(q)
q=s.K(0,k).q(0,i)
r=K.S(new H.H("]"))
q.a.push(r)
q.c=!0
q=s.K(0,k).q(0,k)
r=new K.aH()
r.a=[]
q.a.push(r)
q=K.S(new H.H("|]"))
r.a.push(q)
q=s.K(0,j).q(0,i)
r=K.S(new H.H("]"))
q.a.push(r)
q.c=!0
q=s.K(0,j).q(0,j)
r=new K.aH()
r.a=[]
q.a.push(r)
q=K.S(new H.H("|]"))
r.a.push(q)
s.K(0,p).q(0,h).a.push(new K.fz())
q=s.K(0,h).q(0,h)
r=new K.aH()
r.a=[]
q.a.push(r)
q=K.S(new H.H("*_`["))
r.a.push(q)
q=s.K(0,"BoldEnd")
q.d=q.a.b5(o)
q=s.K(0,m)
q.d=q.a.b5(n)
q=s.K(0,"CodeEnd")
q.d=q.a.b5(l)
q=s.K(0,i)
q.d=q.a.b5("Link")
q=s.K(0,h)
q.d=q.a.b5(h)
this.b=s}}
V.i5.prototype={
$1:function(a){P.kB(C.j,new V.i4(this.a))}}
V.i4.prototype={
$0:function(){var s=C.b.U(document.documentElement.scrollTop),r=this.a.style,q=H.e(-0.01*s)+"px"
r.top=q}};(function aliases(){var s=J.a.prototype
s.e3=s.i
s=J.b3.prototype
s.e4=s.i
s=K.dk.prototype
s.e2=s.aP
s.cv=s.i
s=O.cc.prototype
s.cw=s.ay
s=O.as.prototype
s.cz=s.ay})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"n3","lX",21)
r(P,"nJ","mt",7)
r(P,"nK","mu",7)
r(P,"nL","mv",7)
q(P,"l6","nE",8)
r(W,"pd","h_",22)
var k
p(k=E.bn.prototype,"gdJ",0,0,null,["$1","$0"],["dK","ho"],0,0)
p(k,"gdL",0,0,null,["$1","$0"],["dM","hp"],0,0)
p(k,"gdH",0,0,null,["$1","$0"],["dI","hn"],0,0)
p(k,"gdF",0,0,null,["$1","$0"],["dG","hk"],0,0)
o(k,"ghi","hj",3)
o(k,"ghl","hm",3)
p(k=E.e5.prototype,"gcA",0,0,null,["$1","$0"],["cC","cB"],0,0)
n(k,"ghC","dP",8)
m(k=X.eq.prototype,"geZ","f_",4)
m(k,"geJ","eK",4)
m(k,"geP","eQ",2)
m(k,"gf2","f3",9)
m(k,"gf0","f1",9)
m(k,"gf6","f7",2)
m(k,"gfa","fb",2)
m(k,"geT","eU",2)
m(k,"gf8","f9",2)
m(k,"geR","eS",2)
m(k,"gfc","fd",19)
m(k,"gfe","ff",4)
m(k,"gfv","fw",5)
m(k,"gfq","fs",5)
m(k,"gft","fu",5)
p(k=D.c8.prototype,"gcP",0,0,null,["$1","$0"],["cQ","f4"],0,0)
m(k,"gfg","fh",20)
o(k,"geD","eE",10)
o(k,"gfk","fl",10)
p(D.bx.prototype,"gbo",0,0,null,["$1","$0"],["a9","eb"],0,0)
l(V.T.prototype,"gj","b_",6)
l(V.x.prototype,"gj","b_",6)
l(V.bE.prototype,"gj","b_",6)
p(k=U.bo.prototype,"gaL",0,0,null,["$1","$0"],["D","aa"],0,0)
o(k,"gec","ed",11)
o(k,"gfi","fj",11)
p(k=U.cr.prototype,"gaL",0,0,null,["$1","$0"],["D","aa"],0,0)
m(k,"gbx","by",1)
m(k,"gbz","bA",1)
m(k,"gbB","bC",1)
p(k=U.cs.prototype,"gaL",0,0,null,["$1","$0"],["D","aa"],0,0)
m(k,"gbx","by",1)
m(k,"gbz","bA",1)
m(k,"gbB","bC",1)
m(k,"gex","ey",1)
m(k,"gez","eA",1)
m(k,"gfQ","fR",1)
m(k,"gfO","fP",1)
m(k,"gfM","fN",1)
m(U.ct.prototype,"geB","eC",1)
p(k=M.bR.prototype,"gR",0,0,null,["$1","$0"],["O","av"],0,0)
o(k,"gfm","fn",12)
o(k,"gfo","fp",12)
p(M.bU.prototype,"gR",0,0,null,["$1","$0"],["O","av"],0,0)
p(k=M.bZ.prototype,"gR",0,0,null,["$1","$0"],["O","av"],0,0)
o(k,"geL","eM",3)
o(k,"geN","eO",3)
p(M.c2.prototype,"gR",0,0,null,["$1","$0"],["O","av"],0,0)
p(O.dj.prototype,"ga_",0,0,null,["$1","$0"],["w","ad"],0,0)
p(k=O.dv.prototype,"ga_",0,0,null,["$1","$0"],["w","ad"],0,0)
p(k,"gfE",0,0,null,["$1","$0"],["cR","fF"],0,0)
o(k,"geF","eG",13)
o(k,"geH","eI",13)
p(O.cc.prototype,"ga_",0,0,null,["$1","$0"],["w","ad"],0,0)
p(k=O.e4.prototype,"ga_",0,0,null,["$1","$0"],["w","ad"],0,0)
o(k,"geV","eW",14)
o(k,"geX","eY",14)
p(O.bA.prototype,"ga_",0,0,null,["$1","$0"],["w","ad"],0,0)
p(X.dI.prototype,"gcD",0,0,null,["$1","$0"],["V","eg"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.G,null)
q(P.G,[H.jC,J.a,J.R,P.cA,P.f,H.br,P.dm,H.c0,H.eo,H.it,P.E,H.hN,H.f7,H.bk,P.ar,H.hm,H.ds,H.hh,H.ad,H.eL,P.cM,P.bG,P.bH,P.ev,P.e_,P.e0,P.co,P.j5,P.cG,P.iZ,P.cz,P.B,P.d8,P.j4,P.bd,P.a7,P.N,P.aY,P.dH,P.cn,P.eI,P.ha,P.aq,P.dt,P.aa,P.K,P.aK,W.fR,W.jz,W.jN,W.C,W.c1,P.cO,P.f0,K.fz,K.dk,K.hY,L.dY,L.e6,L.e7,L.ip,O.bl,O.ce,E.fJ,E.bn,E.bj,E.bw,E.eF,E.hS,E.e5,Z.et,Z.cv,Z.aW,Z.c3,Z.ax,D.fL,D.am,D.O,X.d7,X.dq,X.hj,X.ho,X.a9,X.hL,X.iq,X.eq,D.ap,D.bx,V.M,V.U,V.h2,V.cd,V.aF,V.W,V.I,V.ab,V.dO,V.T,V.x,V.bE,U.cr,U.cs,U.ct,M.bU,M.bZ,M.c2,M.a_,A.fB,A.fC,A.V,A.hd,A.fI,A.fV,A.hP,A.i7,A.hu,A.ee,A.ef,A.ei,A.el,A.bm,A.iw,A.iB,F.h6,F.h7,F.hk,F.hl,F.hO,F.hZ,F.i0,F.i1,F.i2,F.iG,F.iH,F.iI,F.iL,F.iN,F.iO,F.iP,O.id,O.cc,O.hv,O.bA,T.ik,X.ib,X.jv,X.hf,X.dI,V.i3])
q(J.a,[J.hg,J.c7,J.b3,J.a8,J.b2,J.aD,H.ch,W.b,W.fy,W.d6,W.al,W.D,W.eA,W.a6,W.fU,W.fW,W.eB,W.bX,W.eD,W.fX,W.h,W.eJ,W.b_,W.he,W.eN,W.b1,W.hn,W.hG,W.eR,W.eS,W.b6,W.eT,W.eV,W.b8,W.eZ,W.f1,W.b9,W.f2,W.ba,W.f8,W.aL,W.fc,W.io,W.bb,W.fe,W.ir,W.iD,W.fk,W.fm,W.fo,W.fq,W.fs,P.bq,P.eP,P.bv,P.eX,P.hQ,P.f9,P.bB,P.fg,P.fD,P.ew,P.dQ,P.f5])
q(J.b3,[J.dJ,J.bC,J.ag])
r(J.dn,J.a8)
q(J.b2,[J.c6,J.c5])
r(P.c9,P.cA)
q(P.c9,[H.bD,W.ey,W.ex,P.dh])
r(H.H,H.bD)
q(P.f,[H.i,H.b5,H.cw,P.c4])
r(H.bY,H.b5)
q(P.dm,[H.cb,H.eu])
q(P.E,[H.dD,H.dp,H.en,H.dR,H.eG,P.d4,P.dE,P.a5,P.ep,P.em,P.dZ,P.d9,P.db])
q(H.bk,[H.ic,H.hi,H.jh,H.ji,H.jj,P.iT,P.iS,P.iU,P.iV,P.j3,P.j2,P.ja,P.j0,P.j1,P.hp,P.fY,P.fZ,W.hI,W.hK,W.hX,W.ia,W.iW,P.jb,P.h8,P.h9,P.fF,E.hT,E.hU,E.hV,E.im,D.h4,D.h5,F.j6,F.jc,F.jd,F.je,F.jf,F.jo,F.jp,F.iR,F.iQ,F.iJ,F.iK,O.hy,O.hz,O.hA,O.hB,O.hC,O.hD,O.hE,O.hF,T.il,V.jn,V.i5,V.i4])
q(H.ic,[H.i8,H.bQ])
r(P.du,P.ar)
r(H.u,P.du)
r(H.aE,H.i)
r(H.bu,H.ch)
q(H.bu,[H.cC,H.cE])
r(H.cD,H.cC)
r(H.b7,H.cD)
r(H.cF,H.cE)
r(H.cg,H.cF)
q(H.cg,[H.dx,H.dy,H.dz,H.dA,H.dB,H.ci,H.dC])
r(H.cN,H.eG)
r(P.cJ,P.c4)
r(P.j_,P.j5)
r(P.cy,P.cG)
r(P.da,P.e0)
r(P.h0,P.d8)
r(P.iE,P.h0)
r(P.iF,P.da)
q(P.N,[P.Y,P.q])
q(P.a5,[P.bz,P.dl])
q(W.b,[W.y,W.dg,W.aJ,W.cH,W.aM,W.ai,W.cK,W.es,W.bF,P.d5,P.aC])
q(W.y,[W.J,W.af])
q(W.J,[W.k,P.j])
q(W.k,[W.d2,W.d3,W.aX,W.di,W.bp,W.dS])
r(W.fQ,W.al)
r(W.bV,W.eA)
q(W.a6,[W.fS,W.fT])
r(W.eC,W.eB)
r(W.bW,W.eC)
r(W.eE,W.eD)
r(W.dd,W.eE)
r(W.aZ,W.d6)
r(W.eK,W.eJ)
r(W.df,W.eK)
r(W.eO,W.eN)
r(W.b0,W.eO)
r(W.aw,W.h)
q(W.aw,[W.b4,W.a2,W.bc])
r(W.hH,W.eR)
r(W.hJ,W.eS)
r(W.eU,W.eT)
r(W.dw,W.eU)
r(W.eW,W.eV)
r(W.cj,W.eW)
r(W.f_,W.eZ)
r(W.dK,W.f_)
r(W.hW,W.f1)
r(W.cI,W.cH)
r(W.dV,W.cI)
r(W.f3,W.f2)
r(W.dW,W.f3)
r(W.i9,W.f8)
r(W.fd,W.fc)
r(W.e2,W.fd)
r(W.cL,W.cK)
r(W.e3,W.cL)
r(W.ff,W.fe)
r(W.e8,W.ff)
r(W.aN,W.a2)
r(W.fl,W.fk)
r(W.ez,W.fl)
r(W.cx,W.bX)
r(W.fn,W.fm)
r(W.eM,W.fn)
r(W.fp,W.fo)
r(W.cB,W.fp)
r(W.fr,W.fq)
r(W.f4,W.fr)
r(W.ft,W.fs)
r(W.fb,W.ft)
r(W.eH,P.e_)
r(P.ac,P.f0)
r(P.eQ,P.eP)
r(P.dr,P.eQ)
r(P.eY,P.eX)
r(P.dF,P.eY)
r(P.fa,P.f9)
r(P.e1,P.fa)
r(P.fh,P.fg)
r(P.e9,P.fh)
r(P.fE,P.ew)
r(P.dG,P.aC)
r(P.f6,P.f5)
r(P.dX,P.f6)
q(K.dk,[K.aH,L.is])
q(E.fJ,[Z.fK,A.dT,T.ie])
q(D.O,[D.an,D.ao,D.l,X.dL])
q(X.dL,[X.ca,X.bs,X.bt,X.cp])
q(O.bl,[D.c8,U.bo,M.bR])
q(D.fL,[U.fO,U.P])
q(U.P,[U.bT,U.cm])
q(A.dT,[A.hc,A.hq,A.ij])
q(A.iw,[A.cq,A.iy,A.iz,A.iA,A.ix,A.ea,A.eb,A.ec,A.ed,A.iC,A.eg,A.eh,A.ej,A.ek])
r(F.i6,F.h7)
r(F.iv,F.hl)
r(F.iM,F.iN)
r(F.hM,F.iO)
q(O.id,[O.dj,O.dv,O.e4])
q(O.cc,[O.hs,O.ht,O.as])
q(O.as,[O.hw,O.hx])
q(T.ie,[T.ig,T.ii])
r(T.ih,T.ig)
q(X.ib,[X.fG,X.hb])
s(H.bD,H.eo)
s(H.cC,P.B)
s(H.cD,H.c0)
s(H.cE,P.B)
s(H.cF,H.c0)
s(P.cA,P.B)
s(W.eA,W.fR)
s(W.eB,P.B)
s(W.eC,W.C)
s(W.eD,P.B)
s(W.eE,W.C)
s(W.eJ,P.B)
s(W.eK,W.C)
s(W.eN,P.B)
s(W.eO,W.C)
s(W.eR,P.ar)
s(W.eS,P.ar)
s(W.eT,P.B)
s(W.eU,W.C)
s(W.eV,P.B)
s(W.eW,W.C)
s(W.eZ,P.B)
s(W.f_,W.C)
s(W.f1,P.ar)
s(W.cH,P.B)
s(W.cI,W.C)
s(W.f2,P.B)
s(W.f3,W.C)
s(W.f8,P.ar)
s(W.fc,P.B)
s(W.fd,W.C)
s(W.cK,P.B)
s(W.cL,W.C)
s(W.fe,P.B)
s(W.ff,W.C)
s(W.fk,P.B)
s(W.fl,W.C)
s(W.fm,P.B)
s(W.fn,W.C)
s(W.fo,P.B)
s(W.fp,W.C)
s(W.fq,P.B)
s(W.fr,W.C)
s(W.fs,P.B)
s(W.ft,W.C)
s(P.eP,P.B)
s(P.eQ,W.C)
s(P.eX,P.B)
s(P.eY,W.C)
s(P.f9,P.B)
s(P.fa,W.C)
s(P.fg,P.B)
s(P.fh,W.C)
s(P.ew,P.ar)
s(P.f5,P.B)
s(P.f6,W.C)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{q:"int",Y:"double",N:"num",K:"String",bd:"bool",aa:"Null",aq:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([O*])","~(O*)","~(a2*)","~(q*,f<bn*>*)","~(h*)","~(bc*)","Y*()","~(~())","~()","~(b4*)","~(q*,f<ap*>*)","~(q*,f<P*>*)","~(q*,f<a_*>*)","~(q*,f<aF*>*)","~(q*,f<bA*>*)","@(@)","aa(@)","aa(G?,G?)","aa(@,@)","~(aN*)","bd*(f<ap*>*)","q(@,@)","K(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mO(v.typeUniverse,JSON.parse('{"ag":"b3","dJ":"b3","bC":"b3","od":"h","on":"h","of":"aC","oe":"b","ou":"b","ow":"b","oc":"j","op":"j","og":"k","os":"k","oq":"y","om":"y","oU":"ai","ok":"aw","oh":"af","ox":"af","ov":"a2","or":"b0","ot":"b7","a8":{"i":["1"],"f":["1"]},"dn":{"i":["1"],"f":["1"]},"b2":{"Y":[],"N":[]},"c6":{"Y":[],"q":[],"N":[]},"c5":{"Y":[],"N":[]},"aD":{"K":[]},"H":{"i":["q"],"f":["q"]},"i":{"f":["1"]},"b5":{"f":["2"]},"bY":{"i":["2"],"f":["2"]},"cw":{"f":["1"]},"bD":{"i":["1"],"f":["1"]},"dD":{"E":[]},"dp":{"E":[]},"en":{"E":[]},"dR":{"E":[]},"aE":{"i":["1"],"f":["1"]},"bu":{"t":["1"]},"b7":{"t":["Y"],"i":["Y"],"f":["Y"]},"cg":{"t":["q"],"i":["q"],"f":["q"]},"dx":{"t":["q"],"i":["q"],"f":["q"]},"dy":{"t":["q"],"i":["q"],"f":["q"]},"dz":{"t":["q"],"i":["q"],"f":["q"]},"dA":{"t":["q"],"i":["q"],"f":["q"]},"dB":{"t":["q"],"i":["q"],"f":["q"]},"ci":{"t":["q"],"i":["q"],"f":["q"]},"dC":{"t":["q"],"i":["q"],"f":["q"]},"eG":{"E":[]},"cN":{"E":[]},"cM":{"co":[]},"cJ":{"f":["1"]},"cy":{"i":["1"],"f":["1"]},"c4":{"f":["1"]},"c9":{"i":["1"],"f":["1"]},"cG":{"i":["1"],"f":["1"]},"Y":{"N":[]},"d4":{"E":[]},"dE":{"E":[]},"a5":{"E":[]},"bz":{"E":[]},"dl":{"E":[]},"ep":{"E":[]},"em":{"E":[]},"dZ":{"E":[]},"d9":{"E":[]},"dH":{"E":[]},"cn":{"E":[]},"db":{"E":[]},"q":{"N":[]},"aq":{"i":["1"],"f":["1"]},"k":{"J":[],"y":[],"b":[]},"d2":{"J":[],"y":[],"b":[]},"d3":{"J":[],"y":[],"b":[]},"aX":{"J":[],"y":[],"b":[]},"af":{"y":[],"b":[]},"bW":{"t":["ac<N>"],"i":["ac<N>"],"f":["ac<N>"]},"bX":{"ac":["N"]},"dd":{"t":["K"],"i":["K"],"f":["K"]},"ey":{"i":["J"],"f":["J"]},"J":{"y":[],"b":[]},"df":{"t":["aZ"],"i":["aZ"],"f":["aZ"]},"dg":{"b":[]},"di":{"J":[],"y":[],"b":[]},"b0":{"t":["y"],"i":["y"],"f":["y"]},"bp":{"J":[],"y":[],"b":[]},"b4":{"h":[]},"dw":{"t":["b6"],"i":["b6"],"f":["b6"]},"a2":{"h":[]},"ex":{"i":["y"],"f":["y"]},"y":{"b":[]},"cj":{"t":["y"],"i":["y"],"f":["y"]},"dK":{"t":["b8"],"i":["b8"],"f":["b8"]},"dS":{"J":[],"y":[],"b":[]},"aJ":{"b":[]},"dV":{"t":["aJ"],"b":[],"i":["aJ"],"f":["aJ"]},"dW":{"t":["b9"],"i":["b9"],"f":["b9"]},"aM":{"b":[]},"ai":{"b":[]},"e2":{"t":["ai"],"i":["ai"],"f":["ai"]},"e3":{"t":["aM"],"b":[],"i":["aM"],"f":["aM"]},"bc":{"h":[]},"e8":{"t":["bb"],"i":["bb"],"f":["bb"]},"aw":{"h":[]},"es":{"b":[]},"aN":{"a2":[],"h":[]},"bF":{"b":[]},"ez":{"t":["D"],"i":["D"],"f":["D"]},"cx":{"ac":["N"]},"eM":{"t":["b_?"],"i":["b_?"],"f":["b_?"]},"cB":{"t":["y"],"i":["y"],"f":["y"]},"f4":{"t":["ba"],"i":["ba"],"f":["ba"]},"fb":{"t":["aL"],"i":["aL"],"f":["aL"]},"cO":{"b1":[]},"dh":{"i":["J"],"f":["J"]},"ac":{"f0":["1"]},"dr":{"i":["bq"],"f":["bq"]},"dF":{"i":["bv"],"f":["bv"]},"e1":{"i":["K"],"f":["K"]},"j":{"J":[],"y":[],"b":[]},"e9":{"i":["bB"],"f":["bB"]},"d5":{"b":[]},"aC":{"b":[]},"dG":{"b":[]},"dX":{"i":["dt<@,@>"],"f":["dt<@,@>"]},"bl":{"f":["1*"]},"an":{"O":[]},"ao":{"O":[]},"l":{"O":[]},"ca":{"O":[]},"bs":{"O":[]},"bt":{"O":[]},"dL":{"O":[]},"cp":{"O":[]},"c8":{"f":["ap*"]},"bx":{"ap":[]},"bT":{"P":[]},"bo":{"P":[],"f":["P*"]},"cm":{"P":[]},"cr":{"P":[]},"cs":{"P":[]},"ct":{"P":[]},"bR":{"a_":[],"f":["a_*"]},"bU":{"a_":[]},"bZ":{"a_":[]},"c2":{"a_":[]}}'))
H.mN(v.typeUniverse,JSON.parse('{"a8":1,"dn":1,"R":1,"i":1,"br":1,"b5":2,"bY":2,"cb":2,"cw":1,"eu":1,"c0":1,"eo":1,"bD":1,"aE":1,"ds":1,"bu":1,"bH":1,"cJ":1,"e_":1,"e0":2,"cz":1,"c4":1,"c9":1,"B":1,"du":2,"ar":2,"cG":1,"cA":1,"d8":2,"da":2,"f":1,"dm":1,"aq":1,"eH":1,"C":1,"c1":1,"bl":1,"an":1,"ao":1,"l":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",j:"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",f:"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"}
var t=(function rtii(){var s=H.nV
return{O:s("i<@>"),h:s("J"),C:s("E"),D:s("h"),Z:s("oo"),s:s("b1"),k:s("bp"),b:s("a8<@>"),T:s("c7"),g:s("ag"),p:s("t<@>"),G:s("u<K*,dT*>"),V:s("u<K*,dY*>"),i:s("u<K*,K*>"),w:s("u<K*,e7*>"),u:s("u<q*,aq<ee*>*>"),L:s("u<q*,aq<ef*>*>"),U:s("u<q*,aq<ei*>*>"),M:s("u<q*,aq<el*>*>"),J:s("u<q*,cq*>"),E:s("u<q*,bd*>"),a:s("u<q*,q*>"),P:s("aa"),K:s("G"),I:s("ac<N>"),R:s("K"),W:s("co"),o:s("bC"),v:s("bd"),Y:s("Y"),z:s("@"),S:s("q"),B:s("aX*"),x:s("ca*"),d:s("bs*"),F:s("bt*"),A:s("0&*"),_:s("G*"),f:s("K*"),j:s("e6*"),m:s("cp*"),n:s("ea*"),l:s("cq*"),t:s("eb*"),r:s("ec*"),y:s("ed*"),N:s("eg*"),q:s("eh*"),c:s("ej*"),Q:s("ek*"),e:s("q*"),bc:s("kd<aa>?"),X:s("G?"),H:s("N")}})();(function constants(){var s=hunkHelpers.makeConstList
C.f=W.aX.prototype
C.K=J.a.prototype
C.a=J.a8.prototype
C.L=J.c5.prototype
C.d=J.c6.prototype
C.h=J.c7.prototype
C.b=J.b2.prototype
C.c=J.aD.prototype
C.M=J.ag.prototype
C.u=J.dJ.prototype
C.v=P.dQ.prototype
C.k=J.bC.prototype
C.w=W.aN.prototype
C.x=W.bF.prototype
C.y=new E.bj("Browser.chrome")
C.l=new E.bj("Browser.firefox")
C.m=new E.bj("Browser.edge")
C.z=new E.bj("Browser.other")
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.A=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.F=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.E=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.D=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.o=function(hooks) { return hooks; }

C.G=new P.dH()
C.p=new P.iE()
C.H=new P.iF()
C.e=new P.j_()
C.q=new A.bm(0,"ColorBlendType.Overwrite")
C.r=new A.bm(1,"ColorBlendType.Additive")
C.I=new A.bm(2,"ColorBlendType.Average")
C.i=new A.bm(3,"ColorBlendType.AlphaBlend")
C.j=new P.aY(0)
C.J=new P.aY(5e6)
C.N=s([0,0,65498,45055,65535,34815,65534,18431])
C.O=new E.bw("OperatingSystem.windows")
C.t=new E.bw("OperatingSystem.mac")
C.P=new E.bw("OperatingSystem.linux")
C.Q=new E.bw("OperatingSystem.other")
C.R=new P.bG(null,2)})();(function staticFields(){$.kQ=null
$.ak=0
$.k7=null
$.k6=null
$.la=null
$.l5=null
$.lf=null
$.jg=null
$.jk=null
$.k_=null
$.bK=null
$.cT=null
$.cU=null
$.jV=!1
$.aj=C.e
$.a0=[]
$.h1=null
$.kl=null
$.cf=null
$.kr=null
$.at=null
$.cl=null
$.kH=null
$.kF=null
$.kG=null
$.kK=null
$.kJ=null
$.kI=null
$.kL=null
$.kq=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"ol","ln",function(){return H.nY("_$dart_dartClosure")})
s($,"oy","lo",function(){return H.av(H.iu({
toString:function(){return"$receiver$"}}))})
s($,"oz","lp",function(){return H.av(H.iu({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"oA","lq",function(){return H.av(H.iu(null))})
s($,"oB","lr",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"oE","lu",function(){return H.av(H.iu(void 0))})
s($,"oF","lv",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"oD","lt",function(){return H.av(H.kD(null))})
s($,"oC","ls",function(){return H.av(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"oH","lx",function(){return H.av(H.kD(void 0))})
s($,"oG","lw",function(){return H.av(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"oV","k2",function(){return P.ms()})
s($,"oX","lB",function(){return P.mg("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"oO","lA",function(){return Z.ae(0)})
s($,"oI","ly",function(){return Z.ae(511)})
s($,"oQ","a4",function(){return Z.ae(1)})
s($,"oP","aU",function(){return Z.ae(2)})
s($,"oK","aT",function(){return Z.ae(4)})
s($,"oR","aB",function(){return Z.ae(8)})
s($,"oS","aV",function(){return Z.ae(16)})
s($,"oL","cZ",function(){return Z.ae(32)})
s($,"oM","d_",function(){return Z.ae(64)})
s($,"oN","lz",function(){return Z.ae(96)})
s($,"oT","bP",function(){return Z.ae(128)})
s($,"oJ","aS",function(){return Z.ae(256)})
s($,"oj","lm",function(){return new V.h2()})
s($,"oi","r",function(){return $.lm()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.ch,ArrayBufferView:H.ch,Float32Array:H.b7,Float64Array:H.b7,Int16Array:H.dx,Int32Array:H.dy,Int8Array:H.dz,Uint16Array:H.dA,Uint32Array:H.dB,Uint8ClampedArray:H.ci,CanvasPixelArray:H.ci,Uint8Array:H.dC,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.fy,HTMLAnchorElement:W.d2,HTMLAreaElement:W.d3,Blob:W.d6,HTMLCanvasElement:W.aX,CDATASection:W.af,CharacterData:W.af,Comment:W.af,ProcessingInstruction:W.af,Text:W.af,CSSPerspective:W.fQ,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bV,MSStyleCSSProperties:W.bV,CSS2Properties:W.bV,CSSImageValue:W.a6,CSSKeywordValue:W.a6,CSSNumericValue:W.a6,CSSPositionValue:W.a6,CSSResourceValue:W.a6,CSSUnitValue:W.a6,CSSURLImageValue:W.a6,CSSStyleValue:W.a6,CSSMatrixComponent:W.al,CSSRotation:W.al,CSSScale:W.al,CSSSkew:W.al,CSSTranslation:W.al,CSSTransformComponent:W.al,CSSTransformValue:W.fS,CSSUnparsedValue:W.fT,DataTransferItemList:W.fU,DOMException:W.fW,ClientRectList:W.bW,DOMRectList:W.bW,DOMRectReadOnly:W.bX,DOMStringList:W.dd,DOMTokenList:W.fX,Element:W.J,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aZ,FileList:W.df,FileWriter:W.dg,HTMLFormElement:W.di,Gamepad:W.b_,History:W.he,HTMLCollection:W.b0,HTMLFormControlsCollection:W.b0,HTMLOptionsCollection:W.b0,ImageData:W.b1,HTMLImageElement:W.bp,KeyboardEvent:W.b4,Location:W.hn,MediaList:W.hG,MIDIInputMap:W.hH,MIDIOutputMap:W.hJ,MimeType:W.b6,MimeTypeArray:W.dw,PointerEvent:W.a2,MouseEvent:W.a2,DragEvent:W.a2,Document:W.y,DocumentFragment:W.y,HTMLDocument:W.y,ShadowRoot:W.y,XMLDocument:W.y,Attr:W.y,DocumentType:W.y,Node:W.y,NodeList:W.cj,RadioNodeList:W.cj,Plugin:W.b8,PluginArray:W.dK,RTCStatsReport:W.hW,HTMLSelectElement:W.dS,SourceBuffer:W.aJ,SourceBufferList:W.dV,SpeechGrammar:W.b9,SpeechGrammarList:W.dW,SpeechRecognitionResult:W.ba,Storage:W.i9,CSSStyleSheet:W.aL,StyleSheet:W.aL,TextTrack:W.aM,TextTrackCue:W.ai,VTTCue:W.ai,TextTrackCueList:W.e2,TextTrackList:W.e3,TimeRanges:W.io,Touch:W.bb,TouchEvent:W.bc,TouchList:W.e8,TrackDefaultList:W.ir,CompositionEvent:W.aw,FocusEvent:W.aw,TextEvent:W.aw,UIEvent:W.aw,URL:W.iD,VideoTrackList:W.es,WheelEvent:W.aN,Window:W.bF,DOMWindow:W.bF,CSSRuleList:W.ez,ClientRect:W.cx,DOMRect:W.cx,GamepadList:W.eM,NamedNodeMap:W.cB,MozNamedAttrMap:W.cB,SpeechRecognitionResultList:W.f4,StyleSheetList:W.fb,SVGLength:P.bq,SVGLengthList:P.dr,SVGNumber:P.bv,SVGNumberList:P.dF,SVGPointList:P.hQ,SVGStringList:P.e1,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.bB,SVGTransformList:P.e9,AudioBuffer:P.fD,AudioParamMap:P.fE,AudioTrackList:P.d5,AudioContext:P.aC,webkitAudioContext:P.aC,BaseAudioContext:P.aC,OfflineAudioContext:P.dG,WebGL2RenderingContext:P.dQ,SQLResultSetRowList:P.dX})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bu.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.b7.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
W.cH.$nativeSuperclassTag="EventTarget"
W.cI.$nativeSuperclassTag="EventTarget"
W.cK.$nativeSuperclassTag="EventTarget"
W.cL.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.ld,[])
else M.ld([])})})()
//# sourceMappingURL=test.dart.js.map
