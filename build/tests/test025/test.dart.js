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
a[c]=function(){a[c]=function(){H.qF(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lx(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={l5:function l5(){},
l7:function(a){return new H.ea(a)},
kx:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
of:function(a,b,c,d){if(t.F.b(a))return new H.cq(a,b,c.I("@<0>").aW(d).I("cq<1,2>"))
return new H.aP(a,b,c.I("@<0>").aW(d).I("aP<1,2>"))},
ib:function(){return new P.c2("No element")},
o5:function(){return new P.c2("Too many elements")},
oA:function(a,b){var s=J.aJ(a)
if(typeof s!=="number")return s.W()
H.eM(a,0,s-1,b)},
eM:function(a,b,c,d){if(c-b<=32)H.oz(a,b,c,d)
else H.oy(a,b,c,d)},
oz:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.aX(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a0()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
oy:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a1(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a1(a6+a7,2),d=e-h,c=e+h,b=J.aX(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a0()
if(a4>0){s=a3
a3=a2
a2=s}b.l(a5,g,a)
b.l(a5,e,a1)
b.l(a5,f,a3)
b.l(a5,d,b.h(a5,a6))
b.l(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.G(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.ab()
if(n<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a0()
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
if(typeof j!=="number")return j.ab()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a0()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a0()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ab()
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
H.eM(a5,a6,r-2,a8)
H.eM(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.G(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.G(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ab()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}H.eM(a5,r,q,a8)}else H.eM(a5,r,q,a8)},
ea:function ea(a){this.a=a},
p:function p(a){this.a=a},
k:function k(){},
cD:function cD(){},
b8:function b8(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aP:function aP(a,b,c){this.a=a
this.b=b
this.$ti=c},
cq:function cq(a,b,c){this.a=a
this.b=b
this.$ti=c},
ee:function ee(a,b){this.a=null
this.b=a
this.c=b},
cH:function cH(a,b,c){this.a=a
this.b=b
this.$ti=c},
aV:function aV(a,b,c){this.a=a
this.b=b
this.$ti=c},
fr:function fr(a,b){this.a=a
this.b=b},
ct:function ct(){},
fj:function fj(){},
c4:function c4(){},
nY:function(){throw H.b(P.A("Cannot modify unmodifiable Map"))},
nj:function(a){var s,r=H.ni(a)
if(r!=null)return r
s="minified:"+a
return s},
nb:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a3(a)
if(typeof s!="string")throw H.b(H.aw(a))
return s},
cO:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mc:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.c(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.b(P.a2(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.C(q,o)|32)>r)return n}return parseInt(a,b)},
eF:function(a){return H.oi(a)},
oi:function(a){var s,r,q
if(a instanceof P.M)return H.al(H.bG(a),null)
if(J.dx(a)===C.U||t.ak.b(a)){s=C.u(a)
if(H.mb(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.mb(q))return q}}return H.al(H.bG(a),null)},
mb:function(a){var s=a!=="Object"&&a!==""
return s},
oj:function(){if(!!self.location)return self.location.href
return null},
ma:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
or:function(a){var s,r,q,p=H.d([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.cc(q))throw H.b(H.aw(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aL(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.aw(q))}return H.ma(p)},
md:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cc(q))throw H.b(H.aw(q))
if(q<0)throw H.b(H.aw(q))
if(q>65535)return H.or(a)}return H.ma(a)},
os:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.ij()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ap:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aL(s,10))>>>0,56320|s&1023)}}throw H.b(P.a2(a,0,1114111,null,null))},
c_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oq:function(a){var s=H.c_(a).getFullYear()+0
return s},
oo:function(a){var s=H.c_(a).getMonth()+1
return s},
ok:function(a){var s=H.c_(a).getDate()+0
return s},
ol:function(a){var s=H.c_(a).getHours()+0
return s},
on:function(a){var s=H.c_(a).getMinutes()+0
return s},
op:function(a){var s=H.c_(a).getSeconds()+0
return s},
om:function(a){var s=H.c_(a).getMilliseconds()+0
return s},
y:function(a){throw H.b(H.aw(a))},
c:function(a,b){if(a==null)J.aJ(a)
throw H.b(H.cg(a,b))},
cg:function(a,b){var s,r,q="index"
if(!H.cc(b))return new P.ae(!0,b,q,null)
s=J.aJ(a)
if(!(b<0)){if(typeof s!=="number")return H.y(s)
r=b>=s}else r=!0
if(r)return P.N(b,a,q,null,s)
return P.eG(b,q)},
qm:function(a,b,c){if(a>c)return P.a2(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a2(b,a,c,"end",null)
return new P.ae(!0,b,"end",null)},
aw:function(a){return new P.ae(!0,a,null,null)},
qg:function(a){if(typeof a!="number")throw H.b(H.aw(a))
return a},
b:function(a){var s,r
if(a==null)a=new P.et()
s=new Error()
s.dartException=a
r=H.qG
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qG:function(){return J.a3(this.dartException)},
q:function(a){throw H.b(a)},
o:function(a){throw H.b(P.b2(a))},
aT:function(a){var s,r,q,p,o,n
a=H.nf(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jf(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
jg:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mp:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
m6:function(a,b){return new H.es(a,b==null?null:b.method)},
l6:function(a,b){var s=b==null,r=s?null:b.method
return new H.e8(a,r,s?null:b.receiver)},
ac:function(a){if(a==null)return new H.iK(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bH(a,a.dartException)
return H.qc(a)},
bH:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qc:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aL(r,16)&8191)===10)switch(q){case 438:return H.bH(a,H.l6(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bH(a,H.m6(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.nm()
o=$.nn()
n=$.no()
m=$.np()
l=$.ns()
k=$.nt()
j=$.nr()
$.nq()
i=$.nv()
h=$.nu()
g=p.ag(s)
if(g!=null)return H.bH(a,H.l6(s,g))
else{g=o.ag(s)
if(g!=null){g.method="call"
return H.bH(a,H.l6(s,g))}else{g=n.ag(s)
if(g==null){g=m.ag(s)
if(g==null){g=l.ag(s)
if(g==null){g=k.ag(s)
if(g==null){g=j.ag(s)
if(g==null){g=m.ag(s)
if(g==null){g=i.ag(s)
if(g==null){g=h.ag(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bH(a,H.m6(s,g))}}return H.bH(a,new H.fi(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cQ()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bH(a,new P.ae(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cQ()
return a},
lB:function(a){var s
if(a==null)return new H.h7(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.h7(a)},
qo:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
qw:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.u("Unsupported number of arguments for wrapped closure"))},
cf:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qw)
a.$identity=s
return s},
nX:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.eS().constructor.prototype):Object.create(new H.bM(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aK
if(typeof r!=="number")return r.v()
$.aK=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lT(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nT(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lT(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nT:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n9,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.nR:H.nQ
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
nU:function(a,b,c,d){var s=H.lS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lT:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nW(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nU(r,!p,s,b)
if(r===0){p=$.aK
if(typeof p!=="number")return p.v()
$.aK=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.kV())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aK
if(typeof p!=="number")return p.v()
$.aK=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.kV())+"."+H.f(s)+"("+m+");}")()},
nV:function(a,b,c,d){var s=H.lS,r=H.nS
switch(b?-1:a){case 0:throw H.b(new H.eK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nW:function(a,b){var s,r,q,p,o,n,m=H.kV(),l=$.lQ
if(l==null)l=$.lQ=H.lP("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nV(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aK
if(typeof o!=="number")return o.v()
$.aK=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aK
if(typeof o!=="number")return o.v()
$.aK=o+1
return new Function(p+o+"}")()},
lx:function(a,b,c,d,e,f,g){return H.nX(a,b,c,d,!!e,!!f,g)},
nQ:function(a,b){return H.hl(v.typeUniverse,H.bG(a.a),b)},
nR:function(a,b){return H.hl(v.typeUniverse,H.bG(a.c),b)},
lS:function(a){return a.a},
nS:function(a){return a.c},
kV:function(){var s=$.lR
return s==null?$.lR=H.lP("self"):s},
lP:function(a){var s,r,q,p=new H.bM("self","target","receiver","name"),o=J.l4(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.bK("Field name "+a+" not found."))},
qF:function(a){throw H.b(new P.dR(a))},
qq:function(a){return v.getIsolateTag(a)},
rN:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qz:function(a){var s,r,q,p,o,n=$.n8.$1(a),m=$.kw[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kC[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.n3.$2(a,n)
if(q!=null){m=$.kw[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kC[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kM(s)
$.kw[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kC[n]=s
return s}if(p==="-"){o=H.kM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nd(a,s)
if(p==="*")throw H.b(P.jp(n))
if(v.leafTags[n]===true){o=H.kM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nd(a,s)},
nd:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lD(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kM:function(a){return J.lD(a,!1,null,!!a.$iz)},
qA:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kM(s)
else return J.lD(s,c,null,null)},
qu:function(){if(!0===$.lC)return
$.lC=!0
H.qv()},
qv:function(){var s,r,q,p,o,n,m,l
$.kw=Object.create(null)
$.kC=Object.create(null)
H.qt()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ne.$1(o)
if(n!=null){m=H.qA(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qt:function(){var s,r,q,p,o,n,m=C.J()
m=H.ce(C.K,H.ce(C.L,H.ce(C.v,H.ce(C.v,H.ce(C.M,H.ce(C.N,H.ce(C.O(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.n8=new H.ky(p)
$.n3=new H.kz(o)
$.ne=new H.kA(n)},
ce:function(a,b){return a(b)||b},
o9:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.a1("Illegal RegExp pattern ("+String(n)+")",a,null))},
ng:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qn:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nf:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lG:function(a,b,c){var s=H.qE(a,b,c)
return s},
qE:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nf(b),'g'),H.qn(c))},
cl:function cl(){},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jf:function jf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
es:function es(a,b){this.a=a
this.b=b},
e8:function e8(a,b,c){this.a=a
this.b=b
this.c=c},
fi:function fi(a){this.a=a},
iK:function iK(a){this.a=a},
h7:function h7(a){this.a=a
this.b=null},
bq:function bq(){},
eZ:function eZ(){},
eS:function eS(){},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(a){this.a=a},
B:function B(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
id:function id(a){this.a=a},
ih:function ih(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cA:function cA(a,b){this.a=a
this.$ti=b},
ed:function ed(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
e7:function e7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cb:function(a){return a},
aW:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.cg(b,a))},
pq:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.qm(a,b,c))
return b},
cJ:function cJ(){},
V:function V(){},
bX:function bX(){},
bx:function bx(){},
cK:function cK(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
cL:function cL(){},
bY:function bY(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
ow:function(a,b){var s=b.c
return s==null?b.c=H.ll(a,b.z,!0):s},
mj:function(a,b){var s=b.c
return s==null?b.c=H.dm(a,"lY",[b.z]):s},
mk:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mk(a.z)
return s===11||s===12},
ov:function(a){return a.cy},
lA:function(a){return H.lm(v.typeUniverse,a,!1)},
bh:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bh(a,s,a0,a1)
if(r===s)return b
return H.mP(a,r,!0)
case 7:s=b.z
r=H.bh(a,s,a0,a1)
if(r===s)return b
return H.ll(a,r,!0)
case 8:s=b.z
r=H.bh(a,s,a0,a1)
if(r===s)return b
return H.mO(a,r,!0)
case 9:q=b.Q
p=H.dw(a,q,a0,a1)
if(p===q)return b
return H.dm(a,b.z,p)
case 10:o=b.z
n=H.bh(a,o,a0,a1)
m=b.Q
l=H.dw(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lj(a,n,l)
case 11:k=b.z
j=H.bh(a,k,a0,a1)
i=b.Q
h=H.q9(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mN(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dw(a,g,a0,a1)
o=b.z
n=H.bh(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lk(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.hE("Attempted to substitute unexpected RTI kind "+c))}},
dw:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bh(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qa:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bh(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
q9:function(a,b,c,d){var s,r=b.a,q=H.dw(a,r,c,d),p=b.b,o=H.dw(a,p,c,d),n=b.c,m=H.qa(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fK()
s.a=q
s.b=o
s.c=m
return s},
d:function(a,b){a[v.arrayRti]=b
return a},
qh:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.n9(s)
return a.$S()}return null},
na:function(a,b){var s
if(H.mk(b))if(a instanceof H.bq){s=H.qh(a)
if(s!=null)return s}return H.bG(a)},
bG:function(a){var s
if(a instanceof P.M){s=a.$ti
return s!=null?s:H.lt(a)}if(Array.isArray(a))return H.lr(a)
return H.lt(J.dx(a))},
lr:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dt:function(a){var s=a.$ti
return s!=null?s:H.lt(a)},
lt:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.px(a,s)},
px:function(a,b){var s=a instanceof H.bq?a.__proto__.__proto__.constructor:b,r=H.p8(v.typeUniverse,s.name)
b.$ccache=r
return r},
n9:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lm(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pw:function(a){var s,r,q=this,p=t.K
if(q===p)return H.ds(q,a,H.pB)
if(!H.aY(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.ds(q,a,H.pE)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cc
else if(s===t.gR||s===t.H)r=H.pA
else if(s===t.N)r=H.pC
else r=s===t.cJ?H.lu:null
if(r!=null)return H.ds(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.qx)){q.r="$i"+p
return H.ds(q,a,H.pD)}}else if(p===7)return H.ds(q,a,H.pu)
return H.ds(q,a,H.ps)},
ds:function(a,b,c){a.b=c
return a.b(b)},
pv:function(a){var s,r,q=this
if(!H.aY(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.pp
else if(q===t.K)r=H.po
else r=H.pt
q.a=r
return q.a(a)},
q2:function(a){var s,r=a.y
if(!H.aY(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
ps:function(a){var s=this
if(a==null)return H.q2(s)
return H.W(v.typeUniverse,H.na(a,s),null,s,null)},
pu:function(a){if(a==null)return!0
return this.z.b(a)},
pD:function(a){var s=this,r=s.r
if(a instanceof P.M)return!!a[r]
return!!J.dx(a)[r]},
rL:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mY(a,s)},
pt:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mY(a,s)},
mY:function(a,b){throw H.b(H.oZ(H.mF(a,H.na(a,b),H.al(b,null))))},
mF:function(a,b,c){var s=P.i0(a),r=H.al(b==null?H.bG(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
oZ:function(a){return new H.dk("TypeError: "+a)},
a8:function(a,b){return new H.dk("TypeError: "+H.mF(a,null,b))},
pB:function(a){return a!=null},
po:function(a){return a},
pE:function(a){return!0},
pp:function(a){return a},
lu:function(a){return!0===a||!1===a},
rx:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a8(a,"bool"))},
rz:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a8(a,"bool"))},
ry:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a8(a,"bool?"))},
rA:function(a){if(typeof a=="number")return a
throw H.b(H.a8(a,"double"))},
rC:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"double"))},
rB:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"double?"))},
cc:function(a){return typeof a=="number"&&Math.floor(a)===a},
rD:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a8(a,"int"))},
rF:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a8(a,"int"))},
rE:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a8(a,"int?"))},
pA:function(a){return typeof a=="number"},
rG:function(a){if(typeof a=="number")return a
throw H.b(H.a8(a,"num"))},
rI:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"num"))},
rH:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a8(a,"num?"))},
pC:function(a){return typeof a=="string"},
rJ:function(a){if(typeof a=="string")return a
throw H.b(H.a8(a,"String"))},
ls:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a8(a,"String"))},
rK:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a8(a,"String?"))},
q5:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.v(r,H.al(a[q],b))
return s},
mZ:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.d([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.W,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.c(a6,i)
l=C.a.v(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.v(" extends ",H.al(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.al(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.v(a3,H.al(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.v(a3,H.al(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.lJ(H.al(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.f(a1)},
al:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.al(a.z,b)
return s}if(l===7){r=a.z
s=H.al(r,b)
q=r.y
return J.lJ(q===11||q===12?C.a.v("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.al(a.z,b))+">"
if(l===9){p=H.qb(a.z)
o=a.Q
return o.length!==0?p+("<"+H.q5(o,b)+">"):p}if(l===11)return H.mZ(a,b,null)
if(l===12)return H.mZ(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.c(b,n)
return b[n]}return"?"},
qb:function(a){var s,r=H.ni(a)
if(r!=null)return r
s="minified:"+a
return s},
mQ:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
p8:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lm(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dn(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dm(a,b,q)
n[b]=o
return o}else return m},
p6:function(a,b){return H.mX(a.tR,b)},
p5:function(a,b){return H.mX(a.eT,b)},
lm:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mL(H.mJ(a,null,b,c))
r.set(b,s)
return s},
hl:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mL(H.mJ(a,b,c,!0))
q.set(c,r)
return r},
p7:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lj(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bg:function(a,b){b.a=H.pv
b.b=H.pw
return b},
dn:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aq(null,null)
s.y=b
s.cy=c
r=H.bg(a,s)
a.eC.set(c,r)
return r},
mP:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.p3(a,b,r,c)
a.eC.set(r,s)
return s},
p3:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aY(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aq(null,null)
q.y=6
q.z=b
q.cy=c
return H.bg(a,q)},
ll:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.p2(a,b,r,c)
a.eC.set(r,s)
return s},
p2:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aY(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.kD(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.kD(q.z))return q
else return H.ow(a,b)}}p=new H.aq(null,null)
p.y=7
p.z=b
p.cy=c
return H.bg(a,p)},
mO:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.p0(a,b,r,c)
a.eC.set(r,s)
return s},
p0:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aY(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dm(a,"lY",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.aq(null,null)
q.y=8
q.z=b
q.cy=c
return H.bg(a,q)},
p4:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aq(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bg(a,s)
a.eC.set(q,r)
return r},
hk:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
p_:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dm:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hk(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aq(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bg(a,r)
a.eC.set(p,q)
return q},
lj:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hk(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aq(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bg(a,o)
a.eC.set(q,n)
return n},
mN:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hk(m)
if(j>0){s=l>0?",":""
r=H.hk(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.p_(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aq(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bg(a,o)
a.eC.set(q,r)
return r},
lk:function(a,b,c,d){var s,r=b.cy+("<"+H.hk(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.p1(a,b,c,r,d)
a.eC.set(r,s)
return s},
p1:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bh(a,b,r,0)
m=H.dw(a,c,r,0)
return H.lk(a,n,m,c!==m)}}l=new H.aq(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bg(a,l)},
mJ:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mL:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.oT(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mK(a,r,g,f,!1)
else if(q===46)r=H.mK(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bf(a.u,a.e,f.pop()))
break
case 94:f.push(H.p4(a.u,f.pop()))
break
case 35:f.push(H.dn(a.u,5,"#"))
break
case 64:f.push(H.dn(a.u,2,"@"))
break
case 126:f.push(H.dn(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.li(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dm(p,n,o))
else{m=H.bf(p,a.e,n)
switch(m.y){case 11:f.push(H.lk(p,m,o,a.n))
break
default:f.push(H.lj(p,m,o))
break}}break
case 38:H.oU(a,f)
break
case 42:l=a.u
f.push(H.mP(l,H.bf(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.ll(l,H.bf(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mO(l,H.bf(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fK()
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
H.li(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mN(p,H.bf(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.li(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.oW(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bf(a.u,a.e,h)},
oT:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mK:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mQ(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.ov(o)+'"')
d.push(H.hl(s,o,n))}else d.push(p)
return m},
oU:function(a,b){var s=b.pop()
if(0===s){b.push(H.dn(a.u,1,"0&"))
return}if(1===s){b.push(H.dn(a.u,4,"1&"))
return}throw H.b(P.hE("Unexpected extended operation "+H.f(s)))},
bf:function(a,b,c){if(typeof c=="string")return H.dm(a,c,a.sEA)
else if(typeof c=="number")return H.oV(a,b,c)
else return c},
li:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bf(a,b,c[s])},
oW:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bf(a,b,c[s])},
oV:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.hE("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.hE("Bad index "+c+" for "+b.i(0)))},
W:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aY(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aY(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.W(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.W(a,b.z,c,d,e)
if(p===6){s=d.z
return H.W(a,b,c,s,e)}if(r===8){if(!H.W(a,b.z,c,d,e))return!1
return H.W(a,H.mj(a,b),c,d,e)}if(r===7){s=H.W(a,b.z,c,d,e)
return s}if(p===8){if(H.W(a,b,c,d.z,e))return!0
return H.W(a,b,c,H.mj(a,d),e)}if(p===7){s=H.W(a,b,c,d.z,e)
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
if(!H.W(a,k,c,j,e)||!H.W(a,j,e,k,c))return!1}return H.n_(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.n_(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pz(a,b,c,d,e)}return!1},
n_:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.W(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.W(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.W(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.W(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.W(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pz:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.W(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mQ(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.W(a,H.hl(a,b,l[p]),c,r[p],e))return!1
return!0},
kD:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aY(a))if(r!==7)if(!(r===6&&H.kD(a.z)))s=r===8&&H.kD(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qx:function(a){var s
if(!H.aY(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aY:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
mX:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aq:function aq(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fK:function fK(){this.c=this.b=this.a=null},
fF:function fF(){},
dk:function dk(a){this.a=a},
ni:function(a){return v.mangledGlobalNames[a]},
qB:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hz:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lC==null){H.qu()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.b(P.jp("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.m_()]
if(p!=null)return p
p=H.qz(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,J.m_(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
m_:function(){var s=$.mH
return s==null?$.mH=v.getIsolateTag("_$dart_js"):s},
o6:function(a,b){if(!H.cc(a))throw H.b(P.lN(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a2(a,0,4294967295,"length",null))
return J.o7(new Array(a),b)},
l3:function(a,b){if(!H.cc(a)||a<0)throw H.b(P.bK("Length must be a non-negative integer: "+H.f(a)))
return H.d(new Array(a),b.I("w<0>"))},
o7:function(a,b){return J.l4(H.d(a,b.I("w<0>")))},
l4:function(a){a.fixed$length=Array
return a},
o8:function(a,b){return J.dB(a,b)},
dx:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cx.prototype
return J.cw.prototype}if(typeof a=="string")return J.aN.prototype
if(a==null)return J.cy.prototype
if(typeof a=="boolean")return J.e6.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.M)return a
return J.hz(a)},
qp:function(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.M)return a
return J.hz(a)},
aX:function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.M)return a
return J.hz(a)},
hy:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.M)return a
return J.hz(a)},
n7:function(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bC.prototype
return a},
dy:function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bC.prototype
return a},
aI:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.M)return a
return J.hz(a)},
lJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qp(a).v(a,b)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dx(a).p(a,b)},
lK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n7(a).A(a,b)},
cj:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nb(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aX(a).h(a,b)},
kR:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.nb(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hy(a).l(a,b,c)},
nF:function(a,b){return J.dy(a).C(a,b)},
nG:function(a,b,c){return J.aI(a).fF(a,b,c)},
nH:function(a,b,c,d){return J.aI(a).h0(a,b,c,d)},
nI:function(a,b){return J.dy(a).T(a,b)},
dB:function(a,b){return J.n7(a).aN(a,b)},
kS:function(a,b){return J.aX(a).D(a,b)},
hC:function(a,b){return J.hy(a).H(a,b)},
nJ:function(a,b,c,d){return J.aI(a).hu(a,b,c,d)},
kT:function(a,b){return J.hy(a).F(a,b)},
nK:function(a){return J.aI(a).gha(a)},
kU:function(a){return J.aI(a).gd5(a)},
nL:function(a){return J.aI(a).gd8(a)},
ad:function(a){return J.dx(a).gP(a)},
aZ:function(a){return J.hy(a).gO(a)},
aJ:function(a){return J.aX(a).gm(a)},
lL:function(a){return J.hy(a).i_(a)},
nM:function(a,b){return J.aI(a).i3(a,b)},
nN:function(a,b,c){return J.dy(a).q(a,b,c)},
nO:function(a){return J.dy(a).ic(a)},
a3:function(a){return J.dx(a).i(a)},
a:function a(){},
e6:function e6(){},
cy:function cy(){},
b7:function b7(){},
ey:function ey(){},
bC:function bC(){},
aB:function aB(){},
w:function w(a){this.$ti=a},
ic:function ic(a){this.$ti=a},
a4:function a4(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bv:function bv(){},
cx:function cx(){},
cw:function cw(){},
aN:function aN(){}},P={
oJ:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qd()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cf(new P.jR(q),1)).observe(s,{childList:true})
return new P.jQ(q,s,r)}else if(self.setImmediate!=null)return P.qe()
return P.qf()},
oK:function(a){self.scheduleImmediate(H.cf(new P.jS(a),0))},
oL:function(a){self.setImmediate(H.cf(new P.jT(a),0))},
oM:function(a){P.ld(C.n,a)},
ld:function(a,b){var s=C.c.a1(a.a,1000)
return P.oX(s<0?0:s,b)},
mo:function(a,b){var s=C.c.a1(a.a,1000)
return P.oY(s<0?0:s,b)},
oX:function(a,b){var s=new P.dj()
s.eg(a,b)
return s},
oY:function(a,b){var s=new P.dj()
s.eh(a,b)
return s},
rv:function(a){return new P.c9(a,1)},
oP:function(){return C.a5},
oQ:function(a){return new P.c9(a,3)},
pG:function(a,b){return new P.dg(a,b.I("dg<0>"))},
q1:function(){var s,r
for(s=$.cd;s!=null;s=$.cd){$.dv=null
r=s.b
$.cd=r
if(r==null)$.du=null
s.a.$0()}},
q8:function(){$.lv=!0
try{P.q1()}finally{$.dv=null
$.lv=!1
if($.cd!=null)$.lI().$1(P.n4())}},
q6:function(a){var s=new P.fs(a),r=$.du
if(r==null){$.cd=$.du=s
if(!$.lv)$.lI().$1(P.n4())}else $.du=r.b=s},
q7:function(a){var s,r,q,p=$.cd
if(p==null){P.q6(a)
$.dv=$.du
return}s=new P.fs(a)
r=$.dv
if(r==null){s.b=p
$.cd=$.dv=s}else{q=r.b
s.b=q
$.dv=r.b=s
if(q==null)$.du=s}},
mn:function(a,b){var s=$.aH
if(s===C.f)return P.ld(a,b)
return P.ld(a,s.hb(b))},
oD:function(a,b){var s=$.aH
if(s===C.f)return P.mo(a,b)
return P.mo(a,s.d3(b,t.aF))},
n0:function(a,b,c,d,e){P.q7(new P.kp(d,e))},
q3:function(a,b,c,d){var s,r=$.aH
if(r===c)return d.$0()
$.aH=c
s=r
try{r=d.$0()
return r}finally{$.aH=s}},
q4:function(a,b,c,d,e){var s,r=$.aH
if(r===c)return d.$1(e)
$.aH=c
s=r
try{r=d.$1(e)
return r}finally{$.aH=s}},
jR:function jR(a){this.a=a},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
dj:function dj(){this.c=0},
k9:function k9(a,b){this.a=a
this.b=b},
k8:function k8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c9:function c9(a,b){this.a=a
this.b=b},
bE:function bE(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dg:function dg(a,b){this.a=a
this.$ti=b},
fs:function fs(a){this.a=a
this.b=null},
cR:function cR(){},
eU:function eU(){},
cT:function cT(){},
kg:function kg(){},
kp:function kp(a,b){this.a=a
this.b=b},
jY:function jY(){},
jZ:function jZ(a,b){this.a=a
this.b=b},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
ob:function(a,b){return new H.B(a.I("@<0>").aW(b).I("B<1,2>"))},
oc:function(a,b,c){return H.qo(a,new H.B(b.I("@<0>").aW(c).I("B<1,2>")))},
l8:function(a,b){return new H.B(a.I("@<0>").aW(b).I("B<1,2>"))},
cB:function(a){return new P.d4(a.I("d4<0>"))},
lh:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oS:function(a,b){var s=new P.d5(a,b)
s.c=a.e
return s},
o4:function(a,b,c){var s,r
if(P.lw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.d([],t.s)
$.ab.push(a)
try{P.pF(a,s)}finally{if(0>=$.ab.length)return H.c($.ab,-1)
$.ab.pop()}r=P.ml(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
l2:function(a,b,c){var s,r
if(P.lw(a))return b+"..."+c
s=new P.S(b)
$.ab.push(a)
try{r=s
r.a=P.ml(r.a,a,", ")}finally{if(0>=$.ab.length)return H.c($.ab,-1)
$.ab.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lw:function(a){var s,r
for(s=$.ab.length,r=0;r<s;++r)if(a===$.ab[r])return!0
return!1},
pF:function(a,b){var s,r,q,p,o,n,m,l=a.gO(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.f(l.gB(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.c(b,-1)
r=b.pop()
if(0>=b.length)return H.c(b,-1)
q=b.pop()}else{p=l.gB(l);++j
if(!l.t()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB(l);++j
for(;l.t();p=o,o=n){n=l.gB(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.f(p)
r=H.f(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
od:function(a,b,c){var s=P.ob(b,c)
a.F(0,new P.ii(s,b,c))
return s},
m0:function(a,b){var s,r,q=P.cB(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)q.n(0,b.a(a[r]))
return q},
la:function(a){var s,r={}
if(P.lw(a))return"{...}"
s=new P.S("")
try{$.ab.push(a)
s.a+="{"
r.a=!0
J.kT(a,new P.im(r,s))
s.a+="}"}finally{if(0>=$.ab.length)return H.c($.ab,-1)
$.ab.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d4:function d4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jX:function jX(a){this.a=a
this.c=this.b=null},
d5:function d5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cv:function cv(){},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(){},
i:function i(){},
cF:function cF(){},
im:function im(a,b){this.a=a
this.b=b},
U:function U(){},
hm:function hm(){},
cG:function cG(){},
c5:function c5(a,b){this.a=a
this.$ti=b},
dc:function dc(){},
d6:function d6(){},
dp:function dp(){},
oG:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oH(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oH:function(a,b,c,d){var s=a?$.nx():$.nw()
if(s==null)return null
if(0===c&&d===b.length)return P.mv(s,b)
return P.mv(s,b.subarray(c,P.bb(c,d,b.length)))},
mv:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ac(r)}return null},
lO:function(a,b,c,d,e,f){if(C.c.ba(f,4)!==0)throw H.b(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a1("Invalid base64 padding, more than two '=' characters",a,b))},
pn:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pm:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.W()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.aX(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.aa()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.c(r,o)
r[o]=n}return r},
jy:function jy(){},
jz:function jz(){},
hI:function hI(){},
hJ:function hJ(){},
dN:function dN(){},
dQ:function dQ(){},
hY:function hY(){},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
i9:function i9(a){this.a=a},
jw:function jw(){},
jA:function jA(){},
ke:function ke(a){this.b=0
this.c=a},
jx:function jx(a){this.a=a},
kd:function kd(a){this.a=a
this.b=16
this.c=0},
kB:function(a,b){var s=H.mc(a,b)
if(s!=null)return s
throw H.b(P.a1(a,null,null))},
o1:function(a){if(a instanceof H.bq)return a.i(0)
return"Instance of '"+H.f(H.eF(a))+"'"},
ij:function(a,b,c,d){var s,r=c?J.l3(a,d):J.o6(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
l9:function(a,b,c){var s,r=H.d([],c.I("w<0>"))
for(s=J.aZ(a);s.t();)r.push(s.gB(s))
if(b)return r
return J.l4(r)},
oe:function(a,b,c){var s,r,q=J.l3(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.c(q,s)
q[s]=r}return q},
eW:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bb(b,c,r)
if(b<=0){if(typeof c!=="number")return c.ab()
q=c<r}else q=!0
return H.md(q?s.slice(b,c):s)}if(t.bm.b(a))return H.os(a,b,P.bb(b,c,a.length))
return P.oB(a,b,c)},
oB:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a2(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a2(c,b,a.length,o,o))
r=J.aZ(a)
for(q=0;q<b;++q)if(!r.t())throw H.b(P.a2(b,0,q,o,o))
p=[]
if(s)for(;r.t();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.t())throw H.b(P.a2(c,b,q,o,o))
p.push(r.gB(r))}return H.md(p)},
ot:function(a){return new H.e7(a,H.o9(a,!1,!0,!1,!1,!1))},
ml:function(a,b,c){var s=J.aZ(b)
if(!s.t())return a
if(c.length===0){do a+=H.f(s.gB(s))
while(s.t())}else{a+=H.f(s.gB(s))
for(;s.t();)a=a+c+H.f(s.gB(s))}return a},
mr:function(){var s=H.oj()
if(s!=null)return P.oF(s)
throw H.b(P.A("'Uri.base' is not supported"))},
kc:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nD().b
if(typeof b!="string")H.q(H.aw(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ght().c_(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.c(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.ap(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nZ:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
o_:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dT:function(a){if(a>=10)return""+a
return"0"+a},
lV:function(a){return new P.br(1000*a)},
i0:function(a){if(typeof a=="number"||H.lu(a)||null==a)return J.a3(a)
if(typeof a=="string")return JSON.stringify(a)
return P.o1(a)},
hE:function(a){return new P.dE(a)},
bK:function(a){return new P.ae(!1,null,null,a)},
lN:function(a,b,c){return new P.ae(!0,a,b,c)},
nP:function(a,b){if(a==null)throw H.b(new P.ae(!1,null,b,"Must not be null"))
return a},
me:function(a){var s=null
return new P.c0(s,s,!1,s,s,a)},
eG:function(a,b){return new P.c0(null,null,!0,a,b,"Value not in range")},
a2:function(a,b,c,d,e){return new P.c0(b,c,!0,a,d,"Invalid value")},
bb:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.y(c)
s=a>c}else s=!0
if(s)throw H.b(P.a2(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.y(c)
s=b>c}else s=!0
if(s)throw H.b(P.a2(b,a,c,"end",null))
return b}return c},
mf:function(a,b){if(a<0)throw H.b(P.a2(a,0,null,b,null))
return a},
N:function(a,b,c,d,e){var s=e==null?J.aJ(b):e
return new P.e4(s,!0,a,c,"Index out of range")},
A:function(a){return new P.fk(a)},
jp:function(a){return new P.fh(a)},
lc:function(a){return new P.c2(a)},
b2:function(a){return new P.dO(a)},
u:function(a){return new P.fH(a)},
a1:function(a,b,c){return new P.i6(a,b,c)},
lF:function(a){H.qB(a)},
oF:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.C(a5,4)^58)*3|C.a.C(a5,0)^100|C.a.C(a5,1)^97|C.a.C(a5,2)^116|C.a.C(a5,3)^97)>>>0
if(s===0)return P.mq(a4<a4?C.a.q(a5,0,a4):a5,5,a3).gdQ()
else if(s===32)return P.mq(C.a.q(a5,5,a4),0,a3).gdQ()}r=P.ij(8,0,!1,t.S)
q=r.length
if(0>=q)return H.c(r,0)
r[0]=0
if(1>=q)return H.c(r,1)
r[1]=-1
if(2>=q)return H.c(r,2)
r[2]=-1
if(7>=q)return H.c(r,7)
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.n1(a5,0,a4,0,r)>=14){if(7>=r.length)return H.c(r,7)
r[7]=a4}if(1>=r.length)return H.c(r,1)
p=r[1]
if(p>=0)if(P.n1(a5,0,p,20,r)===20){if(7>=r.length)return H.c(r,7)
r[7]=p}q=r.length
if(2>=q)return H.c(r,2)
o=r[2]+1
if(3>=q)return H.c(r,3)
n=r[3]
if(4>=q)return H.c(r,4)
m=r[4]
if(5>=q)return H.c(r,5)
l=r[5]
if(6>=q)return H.c(r,6)
k=r[6]
if(k<l)l=k
if(m<o)m=l
else if(m<=p)m=p+1
if(n<o)n=m
if(7>=q)return H.c(r,7)
j=r[7]<0
if(j)if(o>p+3){i=a3
j=!1}else{q=n>0
if(q&&n+1===m){i=a3
j=!1}else{if(!(l<a4&&l===m+2&&C.a.a5(a5,"..",m)))h=l>m+2&&C.a.a5(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.a5(a5,"file",0)){if(o<=0){if(!C.a.a5(a5,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.q(a5,m,a4)
p-=0
q=s-0
l+=q
k+=q
a4=a5.length
o=7
n=7
m=7}else if(m===l){++k
f=l+1
a5=C.a.aR(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.a5(a5,"http",0)){if(q&&n+3===m&&C.a.a5(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aR(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.a5(a5,"https",0)){if(q&&n+4===m&&C.a.a5(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aR(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.q(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.h1(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.pg(a5,0,p)
else{if(p===0)P.ca(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.ph(a5,d,o-1):""
b=P.pd(a5,o,n,!1)
q=n+1
if(q<m){a=H.mc(C.a.q(a5,q,m),a3)
a0=P.pf(a==null?H.q(P.a1("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pe(a5,m,l,a3,i,b!=null)
a2=l<k?P.lo(a5,l+1,k,a3):a3
return new P.bF(i,c,b,a0,a1,a2,k<a4?P.pc(a5,k+1,a4):a3)},
mt:function(a){var s=t.N
return C.b.hz(H.d(a.split("&"),t.s),P.l8(s,s),new P.ju(C.e))},
oE:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jr(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.T(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.kB(C.a.q(a,q,r),null)
if(typeof n!=="number")return n.a0()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.c(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.kB(C.a.q(a,q,c),null)
if(typeof n!=="number")return n.a0()
if(n>255)j.$2(k,q)
if(p>=s)return H.c(i,p)
i[p]=n
return i},
ms:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.js(a),b=new P.jt(c,a)
if(a.length<2)c.$1("address is too short")
s=H.d([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.T(a,r)
if(n===58){if(r===a0){++r
if(C.a.T(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gat(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.oE(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.c(j,g)
j[g]=0
d=g+1
if(d>=i)return H.c(j,d)
j[d]=0
g+=2}else{d=C.c.aL(f,8)
if(g<0||g>=i)return H.c(j,g)
j[g]=d
d=g+1
if(d>=i)return H.c(j,d)
j[d]=f&255
g+=2}}return j},
mR:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ca:function(a,b,c){throw H.b(P.a1(c,a,b))},
pf:function(a,b){if(a!=null&&a===P.mR(b))return null
return a},
pd:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.T(a,b)===91){s=c-1
if(C.a.T(a,s)!==93)P.ca(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.pa(a,r,s)
if(q<s){p=q+1
o=P.mW(a,C.a.a5(a,"25",p)?q+3:p,s,"%25")}else o=""
P.ms(a,r,q)
return C.a.q(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.T(a,n)===58){q=C.a.bl(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mW(a,C.a.a5(a,"25",p)?q+3:p,c,"%25")}else o=""
P.ms(a,b,q)
return"["+C.a.q(a,b,q)+o+"]"}return P.pj(a,b,c)},
pa:function(a,b,c){var s=C.a.bl(a,"%",b)
return s>=b&&s<c?s:c},
mW:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.S(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.T(a,s)
if(p===37){o=P.lp(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.S("")
m=i.a+=C.a.q(a,r,s)
if(n)o=C.a.q(a,s,s+3)
else if(o==="%")P.ca(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.S("")
if(r<s){i.a+=C.a.q(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.T(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.q(a,r,s)
if(i==null){i=new P.S("")
n=i}else n=i
n.a+=j
n.a+=P.ln(p)
s+=k
r=s}}}if(i==null)return C.a.q(a,b,c)
if(r<c)i.a+=C.a.q(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pj:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.T(a,s)
if(o===37){n=P.lp(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.S("")
l=C.a.q(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.q(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.c(C.y,m)
m=(C.y[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.S("")
if(r<s){q.a+=C.a.q(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.c(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.ca(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.T(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.q(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.S("")
m=q}else m=q
m.a+=l
m.a+=P.ln(o)
s+=j
r=s}}}}if(q==null)return C.a.q(a,b,c)
if(r<c){l=C.a.q(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pg:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mT(C.a.C(a,b)))P.ca(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.C(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.c(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.ca(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.q(a,b,c)
return P.p9(r?a.toLowerCase():a)},
p9:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ph:function(a,b,c){return P.dq(a,b,c,C.Z,!1)},
pe:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dq(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a3(s,"/"))s="/"+s
return P.pi(s,e,f)},
pi:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a3(a,"/"))return P.pk(a,!s||c)
return P.pl(a)},
lo:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.bK("Both query and queryParameters specified"))
return P.dq(a,b,c,C.l,!0)}if(d==null)return null
s=new P.S("")
r.a=""
d.F(0,new P.ka(new P.kb(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
pc:function(a,b,c){return P.dq(a,b,c,C.l,!0)},
lp:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.T(a,b+1)
r=C.a.T(a,n)
q=H.kx(s)
p=H.kx(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aL(o,4)
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.ap(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.q(a,b,b+3).toUpperCase()
return null},
ln:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.c(s,0)
s[0]=37
q=C.a.C(k,a>>>4)
if(1>=r)return H.c(s,1)
s[1]=q
q=C.a.C(k,a&15)
if(2>=r)return H.c(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.fR(a,6*o)&63|p
if(n>=r)return H.c(s,n)
s[n]=37
q=n+1
l=C.a.C(k,m>>>4)
if(q>=r)return H.c(s,q)
s[q]=l
l=n+2
q=C.a.C(k,m&15)
if(l>=r)return H.c(s,l)
s[l]=q
n+=3}}return P.eW(s,0,null)},
dq:function(a,b,c,d,e){var s=P.mV(a,b,c,d,e)
return s==null?C.a.q(a,b,c):s},
mV:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.T(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lp(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.c(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ca(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.T(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.ln(o)}}if(p==null){p=new P.S("")
n=p}else n=p
n.a+=C.a.q(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.y(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.q(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mU:function(a){if(C.a.a3(a,"."))return!0
return C.a.dl(a,"/.")!==-1},
pl:function(a){var s,r,q,p,o,n,m
if(!P.mU(a))return a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.G(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.c(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
pk:function(a,b){var s,r,q,p,o,n
if(!P.mU(a))return!b?P.mS(a):a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gat(s)!==".."){if(0>=s.length)return H.c(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.c(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gat(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.c(s,0)
r=P.mS(s[0])
if(0>=s.length)return H.c(s,0)
s[0]=r}return C.b.j(s,"/")},
mS:function(a){var s,r,q,p=a.length
if(p>=2&&P.mT(J.nF(a,0)))for(s=1;s<p;++s){r=C.a.C(a,s)
if(r===58)return C.a.q(a,0,s)+"%3A"+C.a.a7(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.c(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
pb:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.C(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.bK("Invalid URL encoding"))}}return s},
lq:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.C(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.q(a,b,c)
else p=new H.p(C.a.q(a,b,c))}else{p=H.d([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.C(a,o)
if(r>127)throw H.b(P.bK("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.b(P.bK("Truncated URI"))
p.push(P.pb(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.c_(p)},
mT:function(a){var s=a|32
return 97<=s&&s<=122},
mq:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.C(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.a1(k,a,r))}}if(q<0&&r>b)throw H.b(P.a1(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.C(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gat(j)
if(p!==44||r!==n+7||!C.a.a5(a,"base64",n+1))throw H.b(P.a1("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.I.hJ(0,a,m,s)
else{l=P.mV(a,m,s,C.l,!0)
if(l!=null)a=C.a.aR(a,m,s,l)}return new P.jq(a,j,c)},
pr:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.oe(22,new P.kk(),t.gc),l=new P.kj(m),k=new P.kl(),j=new P.km(),i=l.$2(0,225)
k.$3(i,s,1)
k.$3(i,r,14)
k.$3(i,q,34)
k.$3(i,p,3)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(14,225)
k.$3(i,s,1)
k.$3(i,r,15)
k.$3(i,q,34)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(15,225)
k.$3(i,s,1)
k.$3(i,"%",225)
k.$3(i,q,34)
k.$3(i,p,9)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(1,225)
k.$3(i,s,1)
k.$3(i,q,34)
k.$3(i,p,10)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(2,235)
k.$3(i,s,139)
k.$3(i,p,131)
k.$3(i,r,146)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(3,235)
k.$3(i,s,11)
k.$3(i,p,68)
k.$3(i,r,18)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(4,229)
k.$3(i,s,5)
j.$3(i,"AZ",229)
k.$3(i,q,102)
k.$3(i,"@",68)
k.$3(i,"[",232)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(5,229)
k.$3(i,s,5)
j.$3(i,"AZ",229)
k.$3(i,q,102)
k.$3(i,"@",68)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(6,231)
j.$3(i,"19",7)
k.$3(i,"@",68)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(7,231)
j.$3(i,"09",7)
k.$3(i,"@",68)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
k.$3(l.$2(8,8),"]",5)
i=l.$2(9,235)
k.$3(i,s,11)
k.$3(i,r,16)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(16,235)
k.$3(i,s,11)
k.$3(i,r,17)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(17,235)
k.$3(i,s,11)
k.$3(i,p,9)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(10,235)
k.$3(i,s,11)
k.$3(i,r,18)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(18,235)
k.$3(i,s,11)
k.$3(i,r,19)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(19,235)
k.$3(i,s,11)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(11,235)
k.$3(i,s,11)
k.$3(i,p,10)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(12,236)
k.$3(i,s,12)
k.$3(i,o,12)
k.$3(i,n,205)
i=l.$2(13,237)
k.$3(i,s,13)
k.$3(i,o,13)
j.$3(l.$2(20,245),"az",21)
i=l.$2(21,245)
j.$3(i,"az",21)
j.$3(i,"09",21)
k.$3(i,"+-.",21)
return m},
n1:function(a,b,c,d,e){var s,r,q,p,o,n=$.nE()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.c(n,d)
r=n[d]
q=C.a.C(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.c(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.c(e,o)
e[o]=s}return d},
ax:function ax(){},
ag:function ag(a,b){this.a=a
this.b=b},
X:function X(){},
br:function br(a){this.a=a},
hU:function hU(){},
hV:function hV(){},
K:function K(){},
dE:function dE(a){this.a=a},
et:function et(){},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c0:function c0(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e4:function e4(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fk:function fk(a){this.a=a},
fh:function fh(a){this.a=a},
c2:function c2(a){this.a=a},
dO:function dO(a){this.a=a},
ew:function ew(){},
cQ:function cQ(){},
dR:function dR(a){this.a=a},
fH:function fH(a){this.a=a},
i6:function i6(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(){},
l:function l(){},
h:function h(){},
e5:function e5(){},
n:function n(){},
H:function H(){},
an:function an(){},
R:function R(){},
M:function M(){},
x:function x(){},
S:function S(a){this.a=a},
ju:function ju(a){this.a=a},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a,b){this.a=a
this.b=b},
bF:function bF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kb:function kb(a,b){this.a=a
this.b=b},
ka:function ka(a){this.a=a},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function kk(){},
kj:function kj(a){this.a=a},
kl:function kl(){},
km:function km(){},
h1:function h1(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fy:function fy(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qk:function(a){var s
if(t.v.b(a)){s=J.nL(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.dl(a.data,a.height,a.width)},
qj:function(a){if(a instanceof P.dl)return{data:a.a,height:a.b,width:a.c}
return a},
bi:function(a){var s,r,q,p,o
if(a==null)return null
s=P.l8(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
qi:function(a){var s={}
a.F(0,new P.kq(s))
return s},
k3:function k3(){},
k5:function k5(a,b){this.a=a
this.b=b},
k6:function k6(a,b){this.a=a
this.b=b},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
kq:function kq(a){this.a=a},
k4:function k4(a,b){this.a=a
this.b=b},
e_:function e_(a,b){this.a=a
this.b=b},
i4:function i4(){},
i5:function i5(){},
jW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oR:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
h_:function h_(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aO:function aO(){},
eb:function eb(){},
aR:function aR(){},
eu:function eu(){},
iL:function iL(){},
c1:function c1(){},
eV:function eV(){},
m:function m(){},
aS:function aS(){},
f7:function f7(){},
fO:function fO(){},
fP:function fP(){},
fW:function fW(){},
fX:function fX(){},
h9:function h9(){},
ha:function ha(){},
hi:function hi(){},
hj:function hj(){},
bd:function bd(){},
hG:function hG(){},
dG:function dG(){},
hH:function hH(a){this.a=a},
dH:function dH(){},
b0:function b0(){},
ev:function ev(){},
fu:function fu(){},
eI:function eI(){},
eQ:function eQ(){},
h5:function h5(){},
h6:function h6(){}},W={
lM:function(){var s=document.createElement("a")
return s},
kX:function(){var s=document.createElement("canvas")
return s},
o0:function(a,b,c){var s,r=document.body
r.toString
s=C.q.af(r,a,b,c)
s.toString
r=new H.aV(new W.a0(s),new W.hW(),t.ac.I("aV<i.E>"))
return t.h.a(r.gaG(r))},
hX:function(a){return"wheel"},
cr:function(a){var s,r,q="element tag unavailable"
try{s=J.aI(a)
if(typeof s.gdN(a)=="string")q=s.gdN(a)}catch(r){H.ac(r)}return q},
o3:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ac(s)}return q},
jV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mI:function(a,b,c,d){var s=W.jV(W.jV(W.jV(W.jV(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
a_:function(a,b,c,d){var s=new W.fG(a,b,c==null?null:W.n2(new W.jU(c),t.G),!1)
s.fY()
return s},
mG:function(a){var s=W.lM(),r=window.location
s=new W.c8(new W.k0(s,r))
s.e8(a)
return s},
oN:function(a,b,c,d){return!0},
oO:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
mM:function(){var s=t.N,r=P.m0(C.A,s),q=H.d(["TEMPLATE"],t.s)
s=new W.hd(r,P.cB(s),P.cB(s),P.cB(s),null)
s.ed(null,new H.cH(C.A,new W.k7(),t.eM),q,null)
return s},
n2:function(a,b){var s=$.aH
if(s===C.f)return a
return s.d3(a,b)},
r:function r(){},
hD:function hD(){},
dC:function dC(){},
dD:function dD(){},
bL:function bL(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
ay:function ay(){},
hN:function hN(){},
J:function J(){},
cn:function cn(){},
hO:function hO(){},
am:function am(){},
aM:function aM(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
b3:function b3(){},
hS:function hS(){},
co:function co(){},
cp:function cp(){},
dW:function dW(){},
hT:function hT(){},
fv:function fv(a,b){this.a=a
this.b=b},
D:function D(){},
hW:function hW(){},
j:function j(){},
e:function e(){},
ah:function ah(){},
bP:function bP(){},
dZ:function dZ(){},
e0:function e0(){},
aA:function aA(){},
i8:function i8(){},
bt:function bt(){},
bu:function bu(){},
bR:function bR(){},
bT:function bT(){},
bw:function bw(){},
ik:function ik(){},
iD:function iD(){},
bU:function bU(){},
ek:function ek(){},
iE:function iE(a){this.a=a},
el:function el(){},
iF:function iF(a){this.a=a},
aC:function aC(){},
em:function em(){},
ai:function ai(){},
a0:function a0(a){this.a=a},
v:function v(){},
cM:function cM(){},
aD:function aD(){},
eA:function eA(){},
eJ:function eJ(){},
iT:function iT(a){this.a=a},
eL:function eL(){},
ar:function ar(){},
eN:function eN(){},
aE:function aE(){},
eO:function eO(){},
aF:function aF(){},
eT:function eT(){},
j3:function j3(a){this.a=a},
as:function as(){},
bc:function bc(){},
cS:function cS(){},
eX:function eX(){},
eY:function eY(){},
c3:function c3(){},
at:function at(){},
aa:function aa(){},
f0:function f0(){},
f1:function f1(){},
ja:function ja(){},
aG:function aG(){},
bB:function bB(){},
f6:function f6(){},
je:function je(){},
aU:function aU(){},
jv:function jv(){},
fp:function fp(){},
be:function be(){},
c6:function c6(){},
c7:function c7(){},
fw:function fw(){},
d2:function d2(){},
fL:function fL(){},
d7:function d7(){},
h4:function h4(){},
hb:function hb(){},
ft:function ft(){},
fD:function fD(a){this.a=a},
l0:function l0(a,b){this.a=a
this.$ti=b},
fG:function fG(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jU:function jU(a){this.a=a},
lg:function lg(a){this.$ti=a},
c8:function c8(a){this.a=a},
L:function L(){},
cN:function cN(a){this.a=a},
iI:function iI(a){this.a=a},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
dd:function dd(){},
k1:function k1(){},
k2:function k2(){},
hd:function hd(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k7:function k7(){},
hc:function hc(){},
cu:function cu(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aj:function aj(){},
k0:function k0(a,b){this.a=a
this.b=b},
hn:function hn(a){this.a=a
this.b=!1},
kf:function kf(a){this.a=a},
fx:function fx(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fI:function fI(){},
fJ:function fJ(){},
fM:function fM(){},
fN:function fN(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fY:function fY(){},
fZ:function fZ(){},
h0:function h0(){},
de:function de(){},
df:function df(){},
h2:function h2(){},
h3:function h3(){},
h8:function h8(){},
he:function he(){},
hf:function hf(){},
dh:function dh(){},
di:function di(){},
hg:function hg(){},
hh:function hh(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){}},K={
O:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.b(P.u("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.C(a,0)
r=C.a.C(b,0)
if(s>r){q=r
r=s
s=q}return new K.iO(s,r)},
t:function(a){var s=new K.iU()
s.e5(a)
return s},
b_:function b_(){},
e2:function e2(){},
io:function io(){},
a9:function a9(){this.a=null},
iO:function iO(a,b){this.a=a
this.b=b},
iU:function iU(){this.a=null}},L={
jc:function(){var s=new L.jb()
s.a=new H.B(t.cn)
s.b=new H.B(t.dL)
s.c=P.cB(t.X)
return s},
eR:function eR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a){this.b=a
this.c=null},
jb:function jb(){var _=this
_.d=_.c=_.b=_.a=null},
f8:function f8(a){this.b=a
this.a=this.c=null},
nc:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0=V.ox("Test 025"),a1=W.kX()
a1.className="pageLargeCanvas"
a1.id=b
a0.a.appendChild(a1)
s=t.i
a0.d0(H.d(["Test of the Material Lighting shader with a textured spot light. ","Use Ctrl plus the mouse to move the light."],s))
a0.h_(H.d(["shapes"],s))
a0.d0(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(b)
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.oC(r,!0,!0,!0,!1)
p=U.l1()
p.n(0,U.dP(V.m4(0,0,-2.5)))
p.n(0,U.mu(!0,q.x))
o=new V.Y(1,1,1)
n=q.f.hH("../resources/Test.png")
m=new D.bA()
m.r=new V.Y(1,1,1)
m.ch=1.0471975511965976
m.cx=1
m.dx=m.cy=1.5707963267948966
m.db=!0
m.dy=1
m.fx=m.fr=0
m.fy=!0
m.a=V.m9()
m.b=V.mB()
m.c=V.mA()
m.d=V.oI()
l=m.f
m.f=p
p.gw().n(0,m.gbK())
k=new D.E("mover",l,m.f)
k.b=!0
m.X(k)
if(!m.r.p(0,o)){l=m.r
m.r=o
k=new D.E("color",l,o)
k.b=!0
m.X(k)}k=m.x
if(k!==n){if(k!=null)k.gw().K(0,m.gbK())
l=m.x
m.x=n
n.gw().n(0,m.gbK())
n=new D.E("texture",l,m.x)
n.b=!0
m.X(n)}n=m.ch
$.F().toString
if(!(Math.abs(n-0.5)<1e-9)){m.ch=0.5
k=1/(Math.sqrt(2)*Math.tan(m.ch))
m.z=k
m.Q=k*m.cx
n=new D.E("fov",n,m.ch)
n.b=!0
m.X(n)}n=m.cx
$.F().toString
if(!(Math.abs(n-1)<1e-9)){m.cx=1
k=m.z
if(typeof k!=="number")return k.A()
m.Q=k
n=new D.E("ratio",n,1)
n.b=!0
m.X(n)}n=m.cy
$.F().toString
if(!(Math.abs(n-1.5707963267948966)<1e-9)){m.cy=1.5707963267948966
n=new D.E("cutoff",n,1.5707963267948966)
n.b=!0
m.X(n)}n=m.dx
$.F().toString
if(!(Math.abs(n-1.5707963267948966)<1e-9)){m.dx=1.5707963267948966
n=new D.E("coneAngle",n,1.5707963267948966)
n.b=!0
m.X(n)}n=$.mC
if(n==null){n=new V.d1(1,0.00390625,0.0000152587890625,0)
$.mC=n
j=n}else j=n
if(!J.G(m.e,j)){l=m.e
m.e=j
n=new D.E("shadowAdjust",l,j)
n.b=!0
m.X(n)}n=m.dy
$.F().toString
if(!(Math.abs(n-0.5)<1e-9)){m.dy=0.5
n=new D.E("attenuation0",n,0.5)
n.b=!0
m.X(n)}n=m.fr
$.F().toString
if(!(Math.abs(n-0.05)<1e-9)){m.fr=0.05
n=new D.E("attenuation1",n,0.05)
n.b=!0
m.X(n)}n=m.fx
$.F().toString
if(!(Math.abs(n-0.05)<1e-9)){m.fx=0.05
n=new D.E("attenuation2",n,0.05)
n.b=!0
m.X(n)}i=O.m1()
i.dx.n(0,m)
n=i.r
n.saA(0,new V.Y(0.05,0.05,0.05))
n=i.x
n.saA(0,new V.Y(0.7,0.7,0.7))
n=i.z
n.saA(0,new V.Y(0.3,0.3,0.3))
n=i.z
n.cS(new A.a5(!0,!1,!1))
n.cT(100)
h=E.l_()
h.sac(0,F.nh())
g=E.l_()
g.saP(U.dP(V.m3(3,3,3,1)))
n=F.ly(1,a,a,1)
n.ca()
g.sac(0,n)
f=U.l1()
f.n(0,U.mu(!1,q.x))
f.n(0,U.dP(V.m2(3.141592653589793)))
f.n(0,U.dP(V.m4(0,0,5)))
e=E.l_()
n=U.l1()
n.n(0,U.dP(V.m3(0.1,0.1,0.1,1)))
n.n(0,p)
e.saP(n)
e.sac(0,F.lz(0,!1,!0,40,1))
n=O.m1()
k=n.f
k.saA(0,new V.Y(1,1,1))
e.sb9(n)
n=new M.dX()
n.a=!0
k=O.kY(t.l)
n.e=k
k.bb(n.geV(),n.geX())
n.y=n.x=n.r=n.f=null
d=X.o2(a)
c=new X.ex()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.saP(a)
k=c.c
$.F().toString
if(!(Math.abs(k-1.0471975511965976)<1e-9)){c.c=1.0471975511965976
k=new D.E("fov",k,1.0471975511965976)
k.b=!0
c.aI(k)}k=c.d
$.F().toString
if(!(Math.abs(k-0.1)<1e-9)){c.d=0.1
k=new D.E("near",k,0.1)
k.b=!0
c.aI(k)}k=c.e
$.F().toString
if(!(Math.abs(k-2000)<1e-9)){c.e=2000
k=new D.E("far",k,2000)
k.b=!0
c.aI(k)}k=n.b
if(k!==c){if(k!=null)k.gw().K(0,n.gap())
l=n.b
n.b=c
c.gw().n(0,n.gap())
k=new D.E("camera",l,n.b)
k.b=!0
n.aw(k)}k=n.c
if(k!==d){if(k!=null)k.gw().K(0,n.gap())
l=n.c
n.c=d
d.gw().n(0,n.gap())
k=new D.E("target",l,n.c)
k.b=!0
n.aw(k)}n.sb9(a)
n.sb9(i)
n.e.n(0,h)
n.e.n(0,g)
n.e.n(0,e)
n.b.saP(f)
k=q.d
if(k!==n){if(k!=null)k.gw().K(0,q.gcw())
q.d=n
n.gw().n(0,q.gcw())
q.cz()}n=new V.iM("shapes")
s=s.getElementById("shapes")
n.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
n.b_(0,"Cube",new L.kF(h))
n.b_(0,"Cylinder",new L.kG(h))
n.b_(0,"Cone",new L.kH(h))
n.b_(0,"Sphere",new L.kI(h))
n.cZ(0,"Toroid",new L.kJ(h),!0)
n.b_(0,"Knot",new L.kK(h))
s=q.Q
if(s==null)s=q.Q=D.P()
n=s.b
s=n==null?s.b=H.d([],t.f):n
s.push(new L.kL(a0,i))
V.qC(q)},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a,b){this.a=a
this.b=b}},O={
kY:function(a){var s=new O.af(a.I("af<0>"))
s.by(a)
return s},
af:function af(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cI:function cI(){this.b=this.a=null},
m1:function(){var s,r=new O.eg(),q=O.kY(t.hc)
r.e=q
q.bb(r.geO(),r.geQ())
q=new O.aQ(r,"emission")
q.c=new A.a5(!1,!1,!1)
q.f=new V.Y(0,0,0)
r.f=q
q=new O.aQ(r,"ambient")
q.c=new A.a5(!1,!1,!1)
q.f=new V.Y(0,0,0)
r.r=q
q=new O.aQ(r,"diffuse")
q.c=new A.a5(!1,!1,!1)
q.f=new V.Y(0,0,0)
r.x=q
q=new O.aQ(r,"invDiffuse")
q.c=new A.a5(!1,!1,!1)
q.f=new V.Y(0,0,0)
r.y=q
q=new O.iu(r,"specular")
q.c=new A.a5(!1,!1,!1)
q.f=new V.Y(0,0,0)
q.ch=100
r.z=q
q=new O.iq(r,"bump")
q.c=new A.a5(!1,!1,!1)
r.Q=q
r.ch=null
q=new O.aQ(r,"reflect")
q.c=new A.a5(!1,!1,!1)
q.f=new V.Y(0,0,0)
r.cx=q
q=new O.it(r,"refract")
q.c=new A.a5(!1,!1,!1)
q.f=new V.Y(0,0,0)
q.ch=1
r.cy=q
q=new O.ip(r,"alpha")
q.c=new A.a5(!1,!1,!1)
q.f=1
r.db=q
q=new D.cz()
q.by(t.gj)
q.e=H.d([],t.bb)
q.f=H.d([],t.cP)
q.r=H.d([],t.eb)
q.x=H.d([],t.du)
q.z=q.y=null
q.cq(q.geM(),q.gfn(),q.gfs())
r.dx=q
s=new O.is()
s.b=new V.aL(0,0,0,0)
s.c=1
s.d=10
s.e=!1
r.dy=s
s=q.y
q=s==null?q.y=D.P():s
q.n(0,r.gfH())
q=r.dx
s=q.z
q=s==null?q.z=D.P():s
q.n(0,r.gee())
r.fr=null
return r},
eg:function eg(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(){},
ix:function ix(a,b){this.a=a
this.b=b},
iy:function iy(){},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(){},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(){},
ip:function ip(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eh:function eh(){},
iq:function iq(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aQ:function aQ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
is:function is(){var _=this
_.e=_.d=_.c=_.b=null},
it:function it(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iu:function iu(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f_:function f_(){}},E={
l_:function(){var s,r=new E.bs()
r.a=""
r.b=!0
s=O.kY(t.l)
r.y=s
s.bb(r.ghK(),r.ghN())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sac(0,null)
r.sb9(null)
r.saP(null)
return r},
mD:function(){if(J.kS(window.navigator.vendor,"Google"))return C.G
if(J.kS(window.navigator.userAgent,"Firefox"))return C.r
var s=window.navigator.appVersion
if(J.aX(s).D(s,"Trident")||C.a.D(s,"Edge"))return C.t
if(J.kS(window.navigator.appName,"Microsoft"))return C.t
return C.H},
mE:function(){var s=window.navigator.appVersion
if(J.aX(s).D(s,"Win"))return C.a0
if(C.a.D(s,"Mac"))return C.B
if(C.a.D(s,"Linux"))return C.a1
return C.a2},
ou:function(a,b){var s=new E.iP(a)
s.e4(a,b)
return s},
oC:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.mm(a,!0,!0,!0,!1)
s=W.kX()
r=s.style
r.width="100%"
r.height="100%"
J.kU(a).n(0,s)
return E.mm(s,!0,!0,!0,!1)},
mm:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.f3(),n=t.z,m=C.i.co(a,"webgl2",P.oc(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.u("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.ou(m,a)
n=new T.j7(m)
n.b=m.getParameter(3379)
m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.fm(a)
s=new X.ie()
s.d=P.cB(t.e)
n.b=s
s=new X.iG(n)
s.f=0
s.r=V.by()
s.x=V.by()
s.ch=s.Q=1
n.c=s
s=new X.il(n)
s.r=0
s.x=V.by()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.jd(n)
s.f=V.by()
s.r=V.by()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.d([],t.eG)
s=$.hZ
n.Q=(s==null?$.hZ=new E.fE(E.mD(),E.mE()):s).a===C.r?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.a_(q,"contextmenu",n.geZ(),!1))
n.z.push(W.a_(a,"focus",n.gf4(),!1))
n.z.push(W.a_(a,"blur",n.geS(),!1))
n.z.push(W.a_(q,"keyup",n.gf8(),!1))
n.z.push(W.a_(q,"keydown",n.gf6(),!1))
n.z.push(W.a_(a,"mousedown",n.gfc(),!1))
n.z.push(W.a_(a,"mouseup",n.gfg(),!1))
n.z.push(W.a_(a,p,n.gfe(),!1))
r=n.z
W.hX(a)
W.hX(a)
r.push(W.a_(a,W.hX(a),n.gfi(),!1))
n.z.push(W.a_(q,p,n.gf0(),!1))
n.z.push(W.a_(q,"mouseup",n.gf2(),!1))
n.z.push(W.a_(q,"pointerlockchange",n.gfk(),!1))
n.z.push(W.a_(a,"touchstart",n.gfA(),!1))
n.z.push(W.a_(a,"touchend",n.gfu(),!1))
n.z.push(W.a_(a,"touchmove",n.gfw(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ag(Date.now(),!1)
o.db=0
o.cQ()
return o},
hK:function hK(){},
bs:function bs(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bN:function bN(a){this.b=a},
bZ:function bZ(a){this.b=a},
fE:function fE(a,b){this.a=a
this.b=b},
iP:function iP(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
f3:function f3(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
j9:function j9(a){this.a=a}},Z={
lf:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cb(c)),35044)
a.bindBuffer(b,null)
return new Z.fq(b,s)},
av:function(a){return new Z.bD(a)},
fq:function fq(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jP:function jP(a){this.a=a},
dL:function dL(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bS:function bS(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(a){this.a=a}},D={
P:function(){var s=new D.bO()
s.d=0
return s},
hL:function hL(){},
bO:function bO(){var _=this
_.d=_.c=_.b=_.a=null},
i1:function i1(a){this.a=a},
i2:function i2(a){this.a=a},
Z:function Z(){this.b=null},
b5:function b5(){this.b=null},
b6:function b6(){this.b=null},
E:function E(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dI:function dI(){},
dU:function dU(){},
T:function T(){},
cz:function cz(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
eC:function eC(){},
bA:function bA(){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={dM:function dM(a,b){this.a=a
this.b=b},e9:function e9(a,b){this.a=a
this.b=b},ie:function ie(){this.d=this.b=this.a=null},cE:function cE(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},il:function il(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},bW:function bW(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iG:function iG(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},eD:function eD(){},cU:function cU(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},jd:function jd(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fm:function fm(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
o2:function(a){var s=new X.i7(),r=new V.aL(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.mi
if(r==null){r=V.mh(0,0,1,1)
$.mi=r}s.r=r
return s},
kW:function kW(){},
i7:function i7(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ex:function ex(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
j4:function j4(){}},V={
hA:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qH:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.ba(a-b,s)
return(a<0?a+s:a)+b},
I:function(a,b,c){if(a==null)return C.a.ah("null",c)
$.F().toString
return C.a.ah(C.d.dP(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
ch:function(a,b,c){var s,r,q,p,o,n,m=H.d([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.o)(a),++q){p=V.I(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.c(m,o)
s=C.a.ah(m[o],r)
n=m.length
if(o>=n)return H.c(m,o)
m[o]=s}return m},
lE:function(a){return C.d.i9(Math.pow(2,C.V.cb(Math.log(H.qg(a))/Math.log(2))))},
ej:function(){var s=$.m5
return s==null?$.m5=V.ba(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ba:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m4:function(a,b,c){return V.ba(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
m3:function(a,b,c,d){return V.ba(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
m2:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.ba(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
by:function(){var s=$.m8
return s==null?$.m8=new V.ak(0,0):s},
m9:function(){var s=$.ao
return s==null?$.ao=new V.Q(0,0,0):s},
mh:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eH(a,b,c,d)},
d0:function(){var s=$.mz
return s==null?$.mz=new V.C(0,0,0):s},
oI:function(){var s=$.jB
return s==null?$.jB=new V.C(-1,0,0):s},
mA:function(){var s=$.jC
return s==null?$.jC=new V.C(0,1,0):s},
mB:function(){var s=$.jD
return s==null?$.jD=new V.C(0,0,1):s},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i_:function i_(){},
ei:function ei(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
b9:function b9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ak:function ak(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
au:function au(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qC:function(a){P.oD(C.S,new V.kN(a))},
ox:function(a){var s=new V.iZ()
s.e7(a,!0)
return s},
b1:function b1(){},
kN:function kN(a){this.a=a},
dS:function dS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e1:function e1(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e3:function e3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ez:function ez(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iM:function iM(a){this.a=a
this.c=null},
iN:function iN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iZ:function iZ(){this.b=this.a=null},
j0:function j0(a){this.a=a},
j_:function j_(a){this.a=a},
j1:function j1(a){this.a=a}},U={
lU:function(){var s=new U.hM()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
dP:function(a){var s=new U.ck()
s.a=a
return s},
l1:function(){var s=new U.bQ()
s.by(t.ah)
s.bb(s.gea(),s.gfp())
s.e=null
s.f=V.ej()
s.r=0
return s},
mu:function(a,b){var s,r,q,p=new U.d_(),o=U.lU()
o.sdS(0,!0)
o.sds(6.283185307179586)
o.sdu(0)
o.sa2(0,0)
o.sdt(100)
o.sV(0)
o.sd7(0.5)
p.b=o
s=p.gbd()
o.gw().n(0,s)
o=U.lU()
o.sdS(0,!0)
o.sds(6.283185307179586)
o.sdu(0)
o.sa2(0,0)
o.sdt(100)
o.sV(0)
o.sd7(0.5)
p.c=o
o.gw().n(0,s)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
r=new X.bV(a,!1,!1)
q=p.d
p.d=r
o=new D.E("modifiers",q,r)
o.b=!0
p.U(o)
o=p.f
if(o!==!1){p.f=!1
o=new D.E("invertX",o,!1)
o.b=!0
p.U(o)}o=p.r
if(o!==!1){p.r=!1
o=new D.E("invertY",o,!1)
o.b=!0
p.U(o)}p.h6(b)
return p},
hM:function hM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ck:function ck(){this.b=this.a=null},
bQ:function bQ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a6:function a6(){},
d_:function d_(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dX:function dX(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
og:function(a,b){var s=a.b2,r=new A.ef(b,s)
r.e6(b,s)
r.e3(a,b)
return r},
oh:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="MaterialLight_"+a4.gan(a4)+a5.gan(a5)+a6.gan(a6)+a7.gan(a7)+a8.gan(a8)+a9.gan(a9)+b0.gan(b0)+b1.gan(b1)+b2.gan(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.o)(b3),++r)b+="_"+H.f(b3[r].a)}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.o)(b4),++r)b+="_"+H.f(b4[r].a)}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.o)(b5),++r)b+="_"+H.f(b5[r].a)}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.o)(b6),++r)b+="_"+H.f(b6[r].a)}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
for(o=b4.length,r=0;r<o;++r,p=!0)q+=b4[r].b
for(o=b5.length,r=0;r<o;++r,p=!0)q+=b5[r].b
for(n=b6.length,r=0;r<n;++r,p=!0)q+=b6[r].b
if(!b0.a)n=!1
else n=!0
if(!n)if(!b1.a)m=!1
else m=!0
else m=!0
l=s>0
if(!a5.a)s=!1
else s=!0
if(!s){if(!a6.a)s=!1
else s=!0
if(!s){if(!a7.a)s=!1
else s=!0
if(!s)if(!a8.a)s=!1
else s=!0
else s=!0
k=s}else k=!0}else k=!0
s=!a8.a
if(s)n=!1
else n=!0
j=n||l||o>0||m
if(!a6.a)o=!1
else o=!0
if(!o){if(!a7.a)o=!1
else o=!0
if(!o){if(s)s=!1
else s=!0
i=s}else i=!0}else i=!0
if(!i){if(!a9.a)s=!1
else s=!0
h=s||m}else h=!0
if(!a9.a)g=!1
else g=!0
f=a3>0
e=h||g||j||!1
d=l&&i
c=$.bm()
if(h){s=$.bl()
c=new Z.bD(c.a|s.a)}if(g){s=$.bk()
c=new Z.bD(c.a|s.a)}if(f){s=$.bj()
c=new Z.bD(c.a|s.a)}return new A.ir(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
kn:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
ko:function(a,b,c){var s
A.kn(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hB(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
pL:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kn(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
pH:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.ko(b,r,"ambient")
b.a+="\n"},
pJ:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.ko(b,r,"diffuse")
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
pM:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.ko(b,r,"invDiffuse")
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
pS:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.ko(b,r,"specular")
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
pO:function(a,b){var s,r,q
if(!a.k4)return
s=b.a+="// === Normal ===\n"
s+="\n"
b.a=s
s+="vec3 normal()\n"
b.a=s
s=b.a=s+"{\n"
r=a.f.a
if(!r)q=!1
else q=!0
if(!q||r)s=b.a=s+"   return normalize(normalVec);\n"
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
pQ:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kn(b,r,"reflect")
r=b.a+="\n"
r+="vec3 reflect(vec3 refl)\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   vec3 scalar = reflectClr;\n"
b.a=r}r+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
pR:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kn(b,r,"refract")
r=b.a+="uniform float refraction;\n"
r+="\n"
b.a=r
r+="vec3 refract(vec3 refl)\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   vec3 scalar = refractClr;\n"
b.a=r}r+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=r
r+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
pI:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hB(r)
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
if(typeof s!=="number")return s.aa()
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
c.a=p+"\n"}p=t.i
o=H.d([],p)
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.b.j(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=H.d([],p)
if(!a.b.a)s=!1
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
n=H.d([],p)
if(!a.c.a)s=!1
else s=!0
if(s)n.push("diffuse(norm, normDir)")
if(!a.d.a)s=!1
else s=!0
if(s)n.push("invDiffuse(norm, normDir)")
if(!a.e.a)s=!1
else s=!0
if(s)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.b.j(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.j(o," + ")+");\n"
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
pK:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hB(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.aa()
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
p=c.a+="uniform "+q+" "+r+"s["+j+"];\n"
if(s)for(o=0;o<j;++o)p=c.a+="uniform sampler2D "+r+"sTexture2D"+o+";\n"
p+="\n"
c.a=p
n=s?", sampler2D txt2D":""
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+n+")\n"
c.a=p
c.a=p+"{\n"
p=t.i
m=H.d([],p)
if(!a.b.a)l=!1
else l=!0
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.d([],p)
if(!a.c.a)p=!1
else p=!0
if(p)k.push("diffuse(norm, lit.viewDir)")
if(!a.d.a)p=!1
else p=!0
if(p)k.push("invDiffuse(norm, lit.viewDir)")
if(!a.e.a)p=!1
else p=!0
if(p)k.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.b.j(k," + ")+");\n"}else c.a+="   highLight = "+C.b.j(k," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.b.j(m," + ")+");\n"
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
if(s){for(s=p,o=0;o<j;++o){c.a+="   if("+r+"Count <= "+o+") return lightAccum;\n"
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+o+"], "+r+"sTexture2D"+o+");\n"}j=s}else{j=c.a+="   for(int i = 0; i < "+j+"; ++i)\n"
j+="   {\n"
c.a=j
j+="      if(i >= "+r+"Count) break;\n"
c.a=j
j+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=j
j=c.a=j+"   }\n"}j+="   return lightAccum;\n"
c.a=j
j+="}\n"
c.a=j
c.a=j+"\n"},
pP:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hB(r)
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
if(typeof s!=="number")return s.aa()
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
c.a=p+"\n"}p=t.i
j=H.d([],p)
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
m=c.a+="   return "+C.b.j(j," * ")+";\n"
m+="}\n"
c.a=m
m+="\n"
c.a=m
m+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=m
c.a=m+"{\n"
j=H.d([],p)
if(!a.b.a)m=!1
else m=!0
if(m)j.push("ambientColor")
if(a.dx){c.a+=u.k
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
m=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
m+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=m
c.a=m+"   if(length(intensity) > 0.0001) {\n"
i=H.d([],p)
if(!a.c.a)p=!1
else p=!0
if(p)i.push("diffuse(norm, normDir)")
if(!a.d.a)p=!1
else p=!0
if(p)i.push("invDiffuse(norm, normDir)")
if(!a.e.a)p=!1
else p=!0
if(p)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.b.j(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.b.j(j," + ")+");\n"
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
pT:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hB(r)
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
if(typeof s!=="number")return s.aa()
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
if(m){s=$.hZ
if(s==null)s=$.hZ=new E.fE(E.mD(),E.mE())
p=c.a
if(s.b===C.B){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=s+"\n"}s=t.i
h=H.d([],s)
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
p=c.a+="   return "+C.b.j(h," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=p
c.a=p+"{\n"
h=H.d([],s)
if(!a.b.a)p=!1
else p=!0
if(p)h.push("ambientColor")
if(a.dx){c.a+=u.k
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
p=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
p+="   if(length(intensity) > 0.0001) {\n"
c.a=p
c.a=p+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=H.d([],s)
if(!a.c.a)s=!1
else s=!0
if(s)g.push("diffuse(norm, litVec)")
if(!a.d.a)s=!1
else s=!0
if(s)g.push("invDiffuse(norm, litVec)")
if(!a.e.a)s=!1
else s=!0
if(s)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.b.j(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.j(h," + ")+");\n"
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
pN:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.d([],t.i)
if(!a.b.a)s=!1
else s=!0
if(s)r.push("ambientColor")
if(!a.c.a)s=!1
else s=!0
if(s)r.push("diffuse(norm, litVec)")
if(!a.d.a)s=!1
else s=!0
if(s)r.push("invDiffuse(norm, litVec)")
if(!a.e.a)s=!1
else s=!0
if(s)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.b.j(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
pU:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.S("")
h.a="precision mediump float;\n"
h.a=j
s=a.k4
if(s){h.a=i
r=i}else r=j
if(a.r1){r+="varying vec3 binormalVec;\n"
h.a=r}if(a.r2){r+="varying vec2 txt2D;\n"
h.a=r}if(a.rx){r+="varying vec3 txtCube;\n"
h.a=r}if(a.k2){r+="varying vec3 objPos;\n"
h.a=r}r=h.a=(a.k3?h.a=r+"varying vec3 viewPos;\n":r)+"\n"
q=a.y1
if(q){r+="uniform mat4 colorMat;\n"
h.a=r}if(a.go){r+="uniform mat4 viewMat;\n"
h.a=r}if(a.dy)r=h.a=r+"uniform mat4 invViewMat;\n"
h.a=r+"\n"
A.pL(a,h)
A.pH(a,h)
A.pJ(a,h)
A.pM(a,h)
A.pS(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.pQ(a,h)
A.pR(a,h)}A.pO(a,h)
p=h.a+="// === Alpha ===\n"
p=h.a=p+"\n"
o=a.y.a
if(o)p=h.a=p+"uniform float alpha;\n"
p+="float alphaValue()\n"
h.a=p
p=h.a=p+"{\n"
if(!o)n=!1
else n=!0
if(!n)p=h.a=p+"   return 1.0;\n"
else if(o){p+="   return alpha;\n"
h.a=p}p+="}\n"
h.a=p
h.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pI(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pK(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pP(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pT(a,o[m],h)
A.pN(a,h)}o=h.a+="// === Main ===\n"
o+="\n"
h.a=o
o+="void main()\n"
h.a=o
o+="{\n"
h.a=o
o=h.a=o+"   float alpha = alphaValue();\n"
s=s?h.a=o+"   vec3 norm = normal();\n":o
if(r)h.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=H.d([],t.i)
if(p){h.a+=u.o
l.push("lightAccum")
if(!a.b.a)s=!1
else s=!0
if(s)h.a+="   setAmbientColor();\n"
if(!a.c.a)s=!1
else s=!0
if(s)h.a+="   setDiffuseColor();\n"
if(!a.d.a)s=!1
else s=!0
if(s)h.a+="   setInvDiffuseColor();\n"
if(!a.e.a)s=!1
else s=!0
if(s)h.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a7(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a7(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a7(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a7(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)s=!1
else s=!0
if(s)l.push("emissionColor()")
if(!a.r.a)s=!1
else s=!0
if(s)l.push("reflect(refl)")
if(!a.x.a)s=!1
else s=!0
if(s)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.b.j(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
pV:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bj+"];\n"
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
pX:function(a,b){var s
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
pW:function(a,b){var s
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
pZ:function(a,b){var s,r
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
q_:function(a,b){var s,r
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
pY:function(a,b){var s
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
q0:function(a,b){var s
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
hB:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.a.a7(a,1)},
le:function(a,b,c,d,e){var s=new A.ji(a,c,e)
s.f=d
P.ij(d,0,!1,t.e)
return s},
dF:function dF(a,b,c){this.a=a
this.b=b
this.c=c},
hF:function hF(a){this.a=a},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
ef:function ef(a,b){var _=this
_.ip=_.io=_.bk=_.b2=_.bj=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iC=_.iB=_.iA=_.c8=_.c7=_.c6=_.c5=_.c4=_.c3=_.c2=_.c1=_.iz=_.iy=_.dg=_.ix=_.iw=_.df=_.de=_.iv=_.iu=_.dd=_.dc=_.it=_.is=_.da=_.ir=_.iq=_.d9=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dJ:function dJ(a,b){this.a=a
this.b=b},
dV:function dV(a,b){this.a=a
this.b=b},
eE:function eE(a,b){this.a=a
this.b=b},
eP:function eP(a,b){this.a=a
this.b=b},
ir:function ir(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bj=b5
_.b2=b6
_.bk=b7},
cV:function cV(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cW:function cW(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cY:function cY(a,b,c,d,e,f,g,h,i,j){var _=this
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
cZ:function cZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cP:function cP(){},
f9:function f9(){},
jn:function jn(a){this.a=a},
fb:function fb(a,b,c){this.a=a
this.c=b
this.d=c},
jk:function jk(a,b,c){this.a=a
this.c=b
this.d=c},
jl:function jl(a,b,c){this.a=a
this.c=b
this.d=c},
jm:function jm(a,b,c){this.a=a
this.c=b
this.d=c},
ji:function ji(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
fa:function fa(a,b,c){this.a=a
this.c=b
this.d=c},
jj:function jj(a,b,c){this.a=a
this.c=b
this.d=c},
fc:function fc(a,b,c){this.a=a
this.c=b
this.d=c},
fd:function fd(a,b,c){this.a=a
this.c=b
this.d=c},
jo:function jo(a,b,c){this.a=a
this.c=b
this.d=c},
fe:function fe(a,b,c){this.a=a
this.c=b
this.d=c},
cX:function cX(a,b,c){this.a=a
this.c=b
this.d=c},
ff:function ff(a,b,c){this.a=a
this.c=b
this.d=c},
fg:function fg(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ly:function(a,b,c,d){var s=F.lb()
F.dr(s,b,c,d,a,1,0,0,1)
F.dr(s,b,c,d,a,0,1,0,3)
F.dr(s,b,c,d,a,0,0,1,2)
F.dr(s,b,c,d,a,-1,0,0,0)
F.dr(s,b,c,d,a,0,-1,0,0)
F.dr(s,b,c,d,a,0,0,-1,3)
s.as()
return s},
ki:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dr:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.C(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.C(s+a5,r+a3,q+a4)
o=new V.C(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.C(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.ki(g)
j=F.ki(f)
i=F.lH(a1,a2,new F.kh(h,F.ki(e),F.ki(d),j,k,a0),b)
if(i!=null)a.b5(i)},
n6:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0<3)return null
s=F.lb()
r=b?-1:1
q=-6.283185307179586/a0
p=H.d([],t.j)
o=s.a
n=new V.C(0,0,r).G()
p.push(o.h3(new V.bz(a,-1,-1,-1),new V.aL(1,1,1,1),new V.Q(0,0,c),new V.C(0,0,r),new V.ak(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(typeof i!=="number")return H.y(i)
n=new V.C(k,j,r).G()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
o.toString
e=F.fo(new V.bz(a,-1,-1,-1),null,new V.aL(h,f,g,1),new V.Q(k*i,j*i,c),new V.C(0,0,r),new V.ak(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.n(0,e)
p.push(e)}s.d.h1(p)
return s},
lz:function(a,b,c,d,e){return F.ql(b,c,1,new F.kr(a,e),d)},
ql:function(a,b,c,d,e){var s,r=null
if(e<3)return r
if(c<1)return r
s=F.lH(c,e,new F.kt(d),r)
if(s==null)return r
s.as()
s.bU()
if(b)s.b5(F.n6(3,!1,1,new F.ku(d),e))
if(a)s.b5(F.n6(1,!0,-1,new F.kv(d),e))
return s},
qD:function(a,b){var s,r,q={}
q.a=s
q.a=null
q.a=new F.kO()
r=F.ly(a,null,new F.kP(q,1),b)
r.bU()
return r},
nh:function(){return F.n5(15,30,0.5,1,new F.kQ())},
qy:function(){return F.n5(12,120,0.3,1,new F.kE(3,2))},
n5:function(a,b,c,d,e){var s=F.lH(a,b,new F.ks(e,d,b,c),null)
if(s==null)return null
s.as()
s.bU()
return s},
lH:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.lb()
r=H.d([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.fo(e,e,new V.aL(n,0,0,1),e,e,new V.ak(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.c0(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.fo(e,e,new V.aL(h,g,f,1),e,e,new V.ak(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.c0(d))}}s.d.h2(a+1,b+1,r)
return s},
cs:function(a,b,c){var s=new F.dY(),r=a.a
if(r==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
s.bQ(a)
s.bR(b)
s.fN(c)
s.a.a.d.b.push(s)
s.a.a.Y()
return s},
oa:function(a,b){var s=new F.ec(),r=a.a
if(r==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
s.bQ(a)
s.bR(b)
s.a.a.c.b.push(s)
s.a.a.Y()
return s},
lb:function(){var s=new F.iV(),r=new F.jE(s)
r.b=!1
r.c=H.d([],t.j)
s.a=r
r=new F.iY(s)
r.b=H.d([],t.o)
s.b=r
r=new F.iX(s)
r.b=H.d([],t.L)
s.c=r
r=new F.iW(s)
r.b=H.d([],t.b)
s.d=r
s.e=null
return s},
fo:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.fn(),p=new F.jM()
p.b=H.d([],t.o)
q.b=p
p=new F.jI()
s=t.L
p.b=H.d([],s)
p.c=H.d([],s)
q.c=p
p=new F.jF()
s=t.b
p.b=H.d([],s)
p.c=H.d([],s)
p.d=H.d([],s)
q.d=p
h=$.ny()
q.e=0
p=$.bm()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bl().a)!==0?e:r
q.x=(s&$.bk().a)!==0?b:r
q.y=(s&$.bI().a)!==0?f:r
q.z=(s&$.bJ().a)!==0?g:r
q.Q=(s&$.nz().a)!==0?c:r
q.ch=(s&$.ci().a)!==0?i:0
q.cx=(s&$.bj().a)!==0?a:r
return q},
kh:function kh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kr:function kr(a,b){this.a=a
this.b=b},
kt:function kt(a){this.a=a},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
kO:function kO(){},
kP:function kP(a,b){this.a=a
this.b=b},
kQ:function kQ(){},
kE:function kE(a,b){this.a=a
this.b=b},
ks:function ks(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dY:function dY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i3:function i3(){},
j2:function j2(){},
ec:function ec(){this.b=this.a=null},
ig:function ig(){},
jh:function jh(){},
eB:function eB(){this.a=null},
iV:function iV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iW:function iW(a){this.a=a
this.b=null},
iX:function iX(a){this.a=a
this.b=null},
iY:function iY(a){this.a=a
this.b=null},
fn:function fn(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jO:function jO(a){this.a=a},
jN:function jN(a){this.a=a},
jE:function jE(a){this.a=a
this.c=this.b=null},
jF:function jF(){this.d=this.c=this.b=null},
jG:function jG(a,b){this.a=a
this.b=b},
jH:function jH(a,b){this.a=a
this.b=b},
jI:function jI(){this.c=this.b=null},
jK:function jK(){},
jJ:function jJ(){},
jL:function jL(){},
iJ:function iJ(){},
jM:function jM(){this.b=null}},T={f2:function f2(){},j5:function j5(){},j6:function j6(){var _=this
_.y=_.d=_.c=_.b=_.a=null},j7:function j7(a){var _=this
_.a=a
_.e=_.d=_.b=null},j8:function j8(a,b,c,d,e,f,g){var _=this
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
H.l5.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gP:function(a){return H.cO(a)},
i:function(a){return"Instance of '"+H.f(H.eF(a))+"'"}}
J.e6.prototype={
i:function(a){return String(a)},
gP:function(a){return a?519018:218159},
$iax:1}
J.cy.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0}}
J.b7.prototype={
gP:function(a){return 0},
i:function(a){return String(a)},
$ilZ:1}
J.ey.prototype={}
J.bC.prototype={}
J.aB.prototype={
i:function(a){var s=a[$.nl()]
if(s==null)return this.e0(a)
return"JavaScript function for "+H.f(J.a3(s))},
$iaz:1}
J.w.prototype={
cj:function(a,b){if(!!a.fixed$length)H.q(P.A("removeAt"))
if(b<0||b>=a.length)throw H.b(P.eG(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var s
if(!!a.fixed$length)H.q(P.A("remove"))
for(s=0;s<a.length;++s)if(J.G(a[s],b)){a.splice(s,1)
return!0}return!1},
ae:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.A("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.o)(b),++r)a.push(b[r])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.b2(a))}},
j:function(a,b){var s,r,q=P.ij(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.c(q,s)
q[s]=r}return q.join(b)},
hF:function(a){return this.j(a,"")},
hy:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.b2(a))}return s},
hz:function(a,b,c){return this.hy(a,b,c,t.z)},
hx:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.b(P.b2(a))}throw H.b(H.ib())},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
ghw:function(a){if(a.length>0)return a[0]
throw H.b(H.ib())},
gat:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.ib())},
d1:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.b(P.b2(a))}return!1},
aV:function(a,b){if(!!a.immutable$list)H.q(P.A("sort"))
H.oA(a,b==null?J.py():b)},
dX:function(a){return this.aV(a,null)},
D:function(a,b){var s
for(s=0;s<a.length;++s)if(J.G(a[s],b))return!0
return!1},
i:function(a){return P.l2(a,"[","]")},
gO:function(a){return new J.a4(a,a.length)},
gP:function(a){return H.cO(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.A("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.cg(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.q(P.A("indexed set"))
if(b>=a.length||b<0)throw H.b(H.cg(a,b))
a[b]=c},
$ik:1,
$ih:1,
$in:1}
J.ic.prototype={}
J.a4.prototype={
gB:function(a){return this.d},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bv.prototype={
aN:function(a,b){var s
if(typeof b!="number")throw H.b(H.aw(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbn(b)
if(this.gbn(a)===s)return 0
if(this.gbn(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbn:function(a){return a===0?1/a<0:a<0},
i9:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.A(""+a+".toInt()"))},
cb:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.A(""+a+".floor()"))},
am:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.A(""+a+".round()"))},
dP:function(a,b){var s
if(b>20)throw H.b(P.a2(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbn(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gP:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
ba:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
e2:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cV(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.cV(a,b)},
cV:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.A("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aL:function(a,b){var s
if(a>0)s=this.cU(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fR:function(a,b){if(b<0)throw H.b(H.aw(b))
return this.cU(a,b)},
cU:function(a,b){return b>31?0:a>>>b},
$iX:1,
$iR:1}
J.cx.prototype={$il:1}
J.cw.prototype={}
J.aN.prototype={
T:function(a,b){if(b<0)throw H.b(H.cg(a,b))
if(b>=a.length)H.q(H.cg(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.b(H.cg(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!="string")throw H.b(P.lN(b,null,null))
return a+b},
aR:function(a,b,c,d){var s,r,q=P.bb(b,c,a.length)
if(!H.cc(q))H.q(H.aw(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
a5:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a2(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a3:function(a,b){return this.a5(a,b,0)},
q:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.eG(b,null))
if(b>c)throw H.b(P.eG(b,null))
if(c>a.length)throw H.b(P.eG(c,null))
return a.substring(b,c)},
a7:function(a,b){return this.q(a,b,null)},
ic:function(a){return a.toLowerCase()},
A:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.P)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ah:function(a,b){var s=b-a.length
if(s<=0)return a
return this.A(" ",s)+a},
bl:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a2(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dl:function(a,b){return this.bl(a,b,0)},
hf:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a2(c,0,s,null,null))
return H.ng(a,b,c)},
D:function(a,b){return this.hf(a,b,0)},
aN:function(a,b){var s
if(typeof b!="string")throw H.b(H.aw(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gP:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gm:function(a){return a.length},
$ix:1}
H.ea.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.p.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.T(this.a,b)}}
H.k.prototype={}
H.cD.prototype={
gO:function(a){return new H.b8(this,this.gm(this))},
bv:function(a,b){return this.e_(0,b)}}
H.b8.prototype={
gB:function(a){var s=this.d
return s},
t:function(){var s,r=this,q=r.a,p=J.aX(q),o=p.gm(q)
if(r.b!=o)throw H.b(P.b2(q))
s=r.c
if(typeof o!=="number")return H.y(o)
if(s>=o){r.d=null
return!1}r.d=p.H(q,s);++r.c
return!0}}
H.aP.prototype={
gO:function(a){return new H.ee(J.aZ(this.a),this.b)},
gm:function(a){return J.aJ(this.a)},
H:function(a,b){return this.b.$1(J.hC(this.a,b))}}
H.cq.prototype={$ik:1}
H.ee.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){var s=this.a
return s}}
H.cH.prototype={
gm:function(a){return J.aJ(this.a)},
H:function(a,b){return this.b.$1(J.hC(this.a,b))}}
H.aV.prototype={
gO:function(a){return new H.fr(J.aZ(this.a),this.b)}}
H.fr.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.ct.prototype={}
H.fj.prototype={
l:function(a,b,c){throw H.b(P.A("Cannot modify an unmodifiable list"))}}
H.c4.prototype={}
H.cl.prototype={
i:function(a){return P.la(this)},
l:function(a,b,c){H.nY()},
$iH:1}
H.cm.prototype={
gm:function(a){return this.a},
bZ:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bZ(0,b))return null
return this.cJ(b)},
cJ:function(a){return this.b[a]},
F:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cJ(q))}}}
H.jf.prototype={
ag:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.es.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.e8.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.fi.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iK.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.h7.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bq.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nj(r==null?"unknown":r)+"'"},
$iaz:1,
gii:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.eZ.prototype={}
H.eS.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nj(s)+"'"}}
H.bM.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bM))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gP:function(a){var s,r=this.c
if(r==null)s=H.cO(this.a)
else s=typeof r!=="object"?J.ad(r):H.cO(r)
return(s^H.cO(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eF(s))+"'")}}
H.eK.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.B.prototype={
gm:function(a){return this.a},
gbm:function(a){return this.a===0},
gZ:function(a){return new H.cA(this,H.dt(this).I("cA<1>"))},
gih:function(a){var s=this,r=H.dt(s)
return H.of(s.gZ(s),new H.id(s),r.c,r.Q[1])},
bZ:function(a,b){var s=this.b
if(s==null)return!1
return this.es(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.be(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.be(p,b)
q=r==null?n:r.b
return q}else return o.hD(b)},
hD:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cK(p,q.dm(a))
r=q.dn(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cC(s==null?q.b=q.bI():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cC(r==null?q.c=q.bI():r,b,c)}else q.hE(b,c)},
hE:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bI()
s=p.dm(a)
r=p.cK(o,s)
if(r==null)p.bO(o,s,[p.bJ(a,b)])
else{q=p.dn(r,a)
if(q>=0)r[q].b=b
else r.push(p.bJ(a,b))}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.b2(s))
r=r.c}},
cC:function(a,b,c){var s=this.be(a,b)
if(s==null)this.bO(a,b,this.bJ(b,c))
else s.b=c},
eE:function(){this.r=this.r+1&67108863},
bJ:function(a,b){var s,r=this,q=new H.ih(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.eE()
return q},
dm:function(a){return J.ad(a)&0x3ffffff},
dn:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1},
i:function(a){return P.la(this)},
be:function(a,b){return a[b]},
cK:function(a,b){return a[b]},
bO:function(a,b,c){a[b]=c},
ex:function(a,b){delete a[b]},
es:function(a,b){return this.be(a,b)!=null},
bI:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bO(r,s,r)
this.ex(r,s)
return r}}
H.id.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.dt(this.a).I("2(1)")}}
H.ih.prototype={}
H.cA.prototype={
gm:function(a){return this.a.a},
gO:function(a){var s=this.a,r=new H.ed(s,s.r)
r.c=s.e
return r}}
H.ed.prototype={
gB:function(a){return this.d},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.b2(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.ky.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.kz.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kA.prototype={
$1:function(a){return this.a(a)}}
H.e7.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$img:1}
H.cJ.prototype={$icJ:1}
H.V.prototype={$iV:1}
H.bX.prototype={
gm:function(a){return a.length},
$iz:1}
H.bx.prototype={
h:function(a,b){H.aW(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aW(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.cK.prototype={
l:function(a,b,c){H.aW(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.en.prototype={
h:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.eo.prototype={
h:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.ep.prototype={
h:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.eq.prototype={
h:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.er.prototype={
h:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.cL.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aW(b,a,a.length)
return a[b]}}
H.bY.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aW(b,a,a.length)
return a[b]},
$ibY:1,
$ibd:1}
H.d8.prototype={}
H.d9.prototype={}
H.da.prototype={}
H.db.prototype={}
H.aq.prototype={
I:function(a){return H.hl(v.typeUniverse,this,a)},
aW:function(a){return H.p7(v.typeUniverse,this,a)}}
H.fK.prototype={}
H.fF.prototype={
i:function(a){return this.a}}
H.dk.prototype={}
P.jR.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:16}
P.jQ.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.jS.prototype={
$0:function(){this.a.$0()}}
P.jT.prototype={
$0:function(){this.a.$0()}}
P.dj.prototype={
eg:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cf(new P.k9(this,b),0),a)
else throw H.b(P.A("`setTimeout()` not found."))},
eh:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cf(new P.k8(this,a,Date.now(),b),0),a)
else throw H.b(P.A("Periodic timer."))},
$icT:1}
P.k9.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.k8.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.e2(s,o)}q.c=p
r.d.$1(q)}}
P.c9.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bE.prototype={
gB:function(a){var s=this.c
if(s==null)return this.b
return s.gB(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.c9){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.c(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aZ(s)
if(o instanceof P.bE){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dg.prototype={
gO:function(a){return new P.bE(this.a())}}
P.fs.prototype={}
P.cR.prototype={}
P.eU.prototype={}
P.cT.prototype={}
P.kg.prototype={}
P.kp.prototype={
$0:function(){var s=H.b(this.a)
s.stack=J.a3(this.b)
throw s}}
P.jY.prototype={
i5:function(a){var s,r,q,p=null
try{if(C.f===$.aH){a.$0()
return}P.q3(p,p,this,a)}catch(q){s=H.ac(q)
r=H.lB(q)
P.n0(p,p,this,s,r)}},
i6:function(a,b){var s,r,q,p=null
try{if(C.f===$.aH){a.$1(b)
return}P.q4(p,p,this,a,b)}catch(q){s=H.ac(q)
r=H.lB(q)
P.n0(p,p,this,s,r)}},
i7:function(a,b){return this.i6(a,b,t.z)},
hb:function(a){return new P.jZ(this,a)},
d3:function(a,b){return new P.k_(this,a,b)}}
P.jZ.prototype={
$0:function(){return this.a.i5(this.b)}}
P.k_.prototype={
$1:function(a){return this.a.i7(this.b,a)},
$S:function(){return this.c.I("~(0)")}}
P.d4.prototype={
gO:function(a){var s=new P.d5(this,this.r)
s.c=this.e
return s},
gm:function(a){return this.a},
D:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.er(b)
return r}},
er:function(a){var s=this.d
if(s==null)return!1
return this.bF(s[this.bB(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cE(s==null?q.b=P.lh():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cE(r==null?q.c=P.lh():r,b)}else return q.ej(0,b)},
ej:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lh()
s=q.bB(b)
r=p[s]
if(r==null)p[s]=[q.bA(b)]
else{if(q.bF(r,b)>=0)return!1
r.push(q.bA(b))}return!0},
K:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fD(this.c,b)
else return this.fC(0,b)},
fC:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bB(b)
r=n[s]
q=o.bF(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cX(p)
return!0},
cE:function(a,b){if(a[b]!=null)return!1
a[b]=this.bA(b)
return!0},
fD:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cX(s)
delete a[b]
return!0},
cF:function(){this.r=1073741823&this.r+1},
bA:function(a){var s,r=this,q=new P.jX(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cF()
return q},
cX:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cF()},
bB:function(a){return J.ad(a)&1073741823},
bF:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1}}
P.jX.prototype={}
P.d5.prototype={
gB:function(a){return this.d},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.b2(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cv.prototype={}
P.ii.prototype={
$2:function(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cC.prototype={$ik:1,$ih:1,$in:1}
P.i.prototype={
gO:function(a){return new H.b8(a,this.gm(a))},
H:function(a,b){return this.h(a,b)},
gbm:function(a){return this.gm(a)===0},
ib:function(a,b){var s,r,q,p,o=this
if(o.gbm(a)){s=J.l3(0,H.bG(a).I("i.E"))
return s}r=o.h(a,0)
q=P.ij(o.gm(a),r,!0,H.bG(a).I("i.E"))
p=1
while(!0){s=o.gm(a)
if(typeof s!=="number")return H.y(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.c(q,p)
q[p]=s;++p}return q},
ia:function(a){return this.ib(a,!0)},
hu:function(a,b,c,d){var s
P.bb(b,c,this.gm(a))
for(s=b;s<c;++s)this.l(a,s,d)},
i:function(a){return P.l2(a,"[","]")}}
P.cF.prototype={}
P.im.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:17}
P.U.prototype={
F:function(a,b){var s,r
for(s=J.aZ(this.gZ(a));s.t();){r=s.gB(s)
b.$2(r,this.h(a,r))}},
gm:function(a){return J.aJ(this.gZ(a))},
i:function(a){return P.la(a)},
$iH:1}
P.hm.prototype={
l:function(a,b,c){throw H.b(P.A("Cannot modify unmodifiable map"))}}
P.cG.prototype={
h:function(a,b){return J.cj(this.a,b)},
l:function(a,b,c){J.kR(this.a,b,c)},
F:function(a,b){J.kT(this.a,b)},
gm:function(a){return J.aJ(this.a)},
i:function(a){return J.a3(this.a)},
$iH:1}
P.c5.prototype={}
P.dc.prototype={
ae:function(a,b){var s
for(s=J.aZ(b);s.t();)this.n(0,s.gB(s))},
i:function(a){return P.l2(this,"{","}")},
H:function(a,b){var s,r,q,p="index"
P.nP(b,p)
P.mf(b,p)
for(s=P.oS(this,this.r),r=0;s.t();){q=s.d
if(b===r)return q;++r}throw H.b(P.N(b,this,p,null,r))},
$ik:1,
$ih:1}
P.d6.prototype={}
P.dp.prototype={}
P.jy.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ac(r)}return null}}
P.jz.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ac(r)}return null}}
P.hI.prototype={
hJ:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bb(a2,a3,a1.length)
if(a3==null)throw H.b(P.me("Invalid range"))
s=$.nB()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.C(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.kx(C.a.C(a1,l))
h=H.kx(C.a.C(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.c(s,g)
f=s[g]
if(f>=0){g=C.a.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.S("")
e=p}else e=p
d=e.a+=C.a.q(a1,q,r)
e.a=d+H.ap(k)
q=l
continue}}throw H.b(P.a1("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.q(a1,q,a3)
d=e.length
if(o>=0)P.lO(a1,n,a3,o,m,d)
else{c=C.c.ba(d-1,4)+1
if(c===1)throw H.b(P.a1(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aR(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.lO(a1,n,a3,o,m,b)
else{c=C.c.ba(b,4)
if(c===1)throw H.b(P.a1(a,a1,a3))
if(c>1)a1=C.a.aR(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hJ.prototype={}
P.dN.prototype={}
P.dQ.prototype={}
P.hY.prototype={}
P.ia.prototype={
i:function(a){return this.a}}
P.i9.prototype={
eu:function(a,b,c){var s,r,q,p,o,n,m=null
for(s=this.a,r=s.e,q=s.d,s=s.c,p=b,o=m;p<c;++p){if(p>=a.length)return H.c(a,p)
switch(a[p]){case"&":n="&amp;"
break
case'"':n=s?"&quot;":m
break
case"'":n=q?"&#39;":m
break
case"<":n="&lt;"
break
case">":n="&gt;"
break
case"/":n=r?"&#47;":m
break
default:n=m}if(n!=null){if(o==null)o=new P.S("")
if(p>b)o.a+=C.a.q(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.nN(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.jw.prototype={
ght:function(){return C.Q}}
P.jA.prototype={
c_:function(a){var s,r,q,p=P.bb(0,null,a.length)
if(p==null)throw H.b(P.me("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.ke(r)
if(q.ez(a,0,p)!==p){J.nI(a,p-1)
q.bT()}return new Uint8Array(r.subarray(0,H.pq(0,q.b,r.length)))}}
P.ke.prototype={
bT:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.c(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.c(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.c(r,q)
r[q]=189},
fZ:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.c(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.c(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.c(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.c(r,p)
r[p]=128|s&63
return!0}else{n.bT()
return!1}},
ez:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.T(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.C(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fZ(p,C.a.C(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bT()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.c(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.c(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.c(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.c(s,o)
s[o]=128|p&63}}}return q}}
P.jx.prototype={
c_:function(a){var s=this.a,r=P.oG(s,a,0,null)
if(r!=null)return r
return new P.kd(s).hg(a,0,null,!0)}}
P.kd.prototype={
hg:function(a,b,c,d){var s,r,q,p,o=this,n=P.bb(b,c,J.aJ(a))
if(b===n)return""
s=P.pm(a,b,n)
if(typeof n!=="number")return n.W()
n-=b
r=o.bC(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.pn(q)
o.b=0
throw H.b(P.a1(p,a,b+o.c))}return r},
bC:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.W()
if(c-b>1000){s=C.c.a1(b+c,2)
r=q.bC(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bC(a,s,c,d)}return q.hl(a,b,c,d)},
hl:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.S(""),f=b+1,e=a.length
if(b<0||b>=e)return H.c(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.C("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.C(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.ap(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.ap(j)
break
case 65:g.a+=H.ap(j);--f
break
default:p=g.a+=H.ap(j)
g.a=p+H.ap(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(f<0||f>=e)return H.c(a,f)
s=a[f]}o=f+1
if(f<0||f>=e)return H.c(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(o<0||o>=e)return H.c(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(l>=e)return H.c(a,l)
g.a+=H.ap(a[l])}else g.a+=P.eW(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.ap(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.ax.prototype={}
P.ag.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ag&&this.a===b.a&&!0},
aN:function(a,b){return C.c.aN(this.a,b.a)},
gP:function(a){var s=this.a
return(s^C.c.aL(s,30))&1073741823},
i:function(a){var s=this,r=P.nZ(H.oq(s)),q=P.dT(H.oo(s)),p=P.dT(H.ok(s)),o=P.dT(H.ol(s)),n=P.dT(H.on(s)),m=P.dT(H.op(s)),l=P.o_(H.om(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.X.prototype={}
P.br.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.br&&this.a===b.a},
gP:function(a){return C.c.gP(this.a)},
aN:function(a,b){return C.c.aN(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hV(),o=this.a
if(o<0)return"-"+new P.br(0-o).i(0)
s=p.$1(C.c.a1(o,6e7)%60)
r=p.$1(C.c.a1(o,1e6)%60)
q=new P.hU().$1(o%1e6)
return""+C.c.a1(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.hU.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.hV.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.K.prototype={}
P.dE.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.i0(s)
return"Assertion failed"}}
P.et.prototype={
i:function(a){return"Throw of null."}}
P.ae.prototype={
gbE:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbD:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbE()+o+m
if(!q.a)return l
s=q.gbD()
r=P.i0(q.b)
return l+s+": "+r}}
P.c0.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.e4.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var s,r=this.b
if(typeof r!=="number")return r.ab()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gm:function(a){return this.f}}
P.fk.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fh.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c2.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dO.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.i0(s)+"."}}
P.ew.prototype={
i:function(a){return"Out of Memory"},
$iK:1}
P.cQ.prototype={
i:function(a){return"Stack Overflow"},
$iK:1}
P.dR.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fH.prototype={
i:function(a){return"Exception: "+this.a}}
P.i6.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.q(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.C(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.T(d,o)
if(n===10||n===13){m=o
break}}if(m-q>78)if(e-q<75){l=q+75
k=q
j=""
i="..."}else{if(m-e<75){k=m-75
l=m
i=""}else{k=e-36
l=e+36
i="..."}j="..."}else{l=m
k=q
j=""
i=""}h=C.a.q(d,k,l)
return f+j+h+i+"\n"+C.a.A(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.az.prototype={}
P.l.prototype={}
P.h.prototype={
bv:function(a,b){return new H.aV(this,b,H.dt(this).I("aV<h.E>"))},
gm:function(a){var s,r=this.gO(this)
for(s=0;r.t();)++s
return s},
gaG:function(a){var s,r=this.gO(this)
if(!r.t())throw H.b(H.ib())
s=r.gB(r)
if(r.t())throw H.b(H.o5())
return s},
H:function(a,b){var s,r,q
P.mf(b,"index")
for(s=this.gO(this),r=0;s.t();){q=s.gB(s)
if(b===r)return q;++r}throw H.b(P.N(b,this,"index",null,r))},
i:function(a){return P.o4(this,"(",")")}}
P.e5.prototype={}
P.n.prototype={$ik:1,$ih:1}
P.H.prototype={}
P.an.prototype={
gP:function(a){return P.M.prototype.gP.call(C.j,this)},
i:function(a){return"null"}}
P.R.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
p:function(a,b){return this===b},
gP:function(a){return H.cO(this)},
i:function(a){return"Instance of '"+H.f(H.eF(this))+"'"},
toString:function(){return this.i(this)}}
P.x.prototype={}
P.S.prototype={
gm:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.ju.prototype={
$2:function(a,b){var s,r,q,p=J.dy(b).dl(b,"=")
if(p===-1){if(b!=="")J.kR(a,P.lq(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.q(b,0,p)
r=C.a.a7(b,p+1)
q=this.a
J.kR(a,P.lq(s,0,s.length,q,!0),P.lq(r,0,r.length,q,!0))}return a}}
P.jr.prototype={
$2:function(a,b){throw H.b(P.a1("Illegal IPv4 address, "+a,this.a,b))}}
P.js.prototype={
$2:function(a,b){throw H.b(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jt.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kB(C.a.q(this.b,a,b),16)
if(typeof s!=="number")return s.ab()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bF.prototype={
gbS:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.f(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.q(H.l7("Field '_text' has been assigned during initialization."))}return o},
gP:function(a){var s=this,r=s.z
if(r==null){r=C.a.gP(s.gbS())
if(s.z==null)s.z=r
else r=H.q(H.l7("Field 'hashCode' has been assigned during initialization."))}return r},
gci:function(){var s=this,r=s.Q
if(r==null){r=new P.c5(P.mt(s.gb8(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.q(H.l7("Field 'queryParameters' has been assigned during initialization."))}return r},
gdR:function(){return this.b},
gcd:function(a){var s=this.c
if(s==null)return""
if(C.a.a3(s,"["))return C.a.q(s,1,s.length-1)
return s},
gbq:function(a){var s=this.d
return s==null?P.mR(this.a):s},
gb8:function(a){var s=this.f
return s==null?"":s},
gcc:function(){var s=this.r
return s==null?"":s},
dL:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a3(s,"/"))s="/"+s
q=s
p=P.lo(null,0,0,b)
return new P.bF(n,l,j,k,q,p,o.r)},
gdh:function(){return this.c!=null},
gdk:function(){return this.f!=null},
gdi:function(){return this.r!=null},
i:function(a){return this.gbS()},
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbw()&&s.c!=null===b.gdh()&&s.b===b.gdR()&&s.gcd(s)===b.gcd(b)&&s.gbq(s)===b.gbq(b)&&s.e===b.gdH(b)&&s.f!=null===b.gdk()&&s.gb8(s)===b.gb8(b)&&s.r!=null===b.gdi()&&s.gcc()===b.gcc()},
$ifl:1,
gbw:function(){return this.a},
gdH:function(a){return this.e}}
P.kb.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.kc(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.kc(C.h,b,C.e,!0))}}}
P.ka.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aZ(b),r=this.a;s.t();)r.$2(a,s.gB(s))}}
P.jq.prototype={
gdQ:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.c(m,0)
s=o.a
m=m[0]+1
r=C.a.bl(s,"?",m)
q=s.length
if(r>=0){p=P.dq(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.fy("data","",n,n,P.dq(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kk.prototype={
$1:function(a){return new Uint8Array(96)}}
P.kj.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.c(s,a)
s=s[a]
J.nJ(s,0,96,b)
return s},
$S:18}
P.kl.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.C(b,q)^96
if(p>=r)return H.c(a,p)
a[p]=c}}}
P.km.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.C(b,0),r=C.a.C(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.c(a,p)
a[p]=c}}}
P.h1.prototype={
gdh:function(){return this.c>0},
gdj:function(){return this.c>0&&this.d+1<this.e},
gdk:function(){return this.f<this.r},
gdi:function(){return this.r<this.a.length},
gcL:function(){return this.b===4&&C.a.a3(this.a,"http")},
gcM:function(){return this.b===5&&C.a.a3(this.a,"https")},
gbw:function(){var s=this.x
return s==null?this.x=this.eq():s},
eq:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gcL())return"http"
if(s.gcM())return"https"
if(r===4&&C.a.a3(s.a,"file"))return"file"
if(r===7&&C.a.a3(s.a,"package"))return"package"
return C.a.q(s.a,0,r)},
gdR:function(){var s=this.c,r=this.b+3
return s>r?C.a.q(this.a,r,s-1):""},
gcd:function(a){var s=this.c
return s>0?C.a.q(this.a,s,this.d):""},
gbq:function(a){var s=this
if(s.gdj())return P.kB(C.a.q(s.a,s.d+1,s.e),null)
if(s.gcL())return 80
if(s.gcM())return 443
return 0},
gdH:function(a){return C.a.q(this.a,this.e,this.f)},
gb8:function(a){var s=this.f,r=this.r
return s<r?C.a.q(this.a,s+1,r):""},
gcc:function(){var s=this.r,r=this.a
return s<r.length?C.a.a7(r,s+1):""},
gci:function(){var s=this
if(s.f>=s.r)return C.a_
return new P.c5(P.mt(s.gb8(s)),t.U)},
dL:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbw(),k=l==="file",j=n.c,i=j>0?C.a.q(n.a,n.b+3,j):"",h=n.gdj()?n.gbq(n):m
j=n.c
if(j>0)s=C.a.q(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.q(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a3(r,"/"))r="/"+r
p=P.lo(m,0,0,b)
q=n.r
o=q<j.length?C.a.a7(j,q+1):m
return new P.bF(l,i,s,h,r,p,o)},
gP:function(a){var s=this.y
return s==null?this.y=C.a.gP(this.a):s},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifl:1}
P.fy.prototype={}
W.r.prototype={}
W.hD.prototype={
gm:function(a){return a.length}}
W.dC.prototype={
i:function(a){return String(a)}}
W.dD.prototype={
i:function(a){return String(a)}}
W.bL.prototype={$ibL:1}
W.bn.prototype={$ibn:1}
W.bo.prototype={$ibo:1}
W.bp.prototype={
co:function(a,b,c){if(c!=null)return a.getContext(b,P.qi(c))
return a.getContext(b)},
dU:function(a,b){return this.co(a,b,null)},
$ibp:1}
W.ay.prototype={
gm:function(a){return a.length}}
W.hN.prototype={
gm:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.cn.prototype={
gm:function(a){return a.length}}
W.hO.prototype={}
W.am.prototype={}
W.aM.prototype={}
W.hP.prototype={
gm:function(a){return a.length}}
W.hQ.prototype={
gm:function(a){return a.length}}
W.hR.prototype={
gm:function(a){return a.length}}
W.b3.prototype={$ib3:1}
W.hS.prototype={
i:function(a){return String(a)}}
W.co.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.cp.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaF(a))+" x "+H.f(this.gaC(a))},
p:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aI(b)
s=a.left==s.gbo(b)&&a.top==s.gbs(b)&&this.gaF(a)==s.gaF(b)&&this.gaC(a)==s.gaC(b)}else s=!1
return s},
gP:function(a){return W.mI(J.ad(a.left),J.ad(a.top),J.ad(this.gaF(a)),J.ad(this.gaC(a)))},
gd4:function(a){return a.bottom},
gaC:function(a){return a.height},
gbo:function(a){return a.left},
gcm:function(a){return a.right},
gbs:function(a){return a.top},
gaF:function(a){return a.width},
$ia7:1}
W.dW.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.hT.prototype={
gm:function(a){return a.length}}
W.fv.prototype={
gbm:function(a){return this.a.firstElementChild==null},
gm:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var s=this.ia(this)
return new J.a4(s,s.length)}}
W.D.prototype={
gha:function(a){return new W.fD(a)},
gd5:function(a){return new W.fv(a,a.children)},
gd6:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.ab()
if(q<0)q=-q*0
if(typeof p!=="number")return p.ab()
if(p<0)p=-p*0
return new P.a7(s,r,q,p,t.q)},
i:function(a){return a.localName},
af:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lX
if(s==null){s=H.d([],t.Q)
r=new W.cN(s)
s.push(W.mG(null))
s.push(W.mM())
$.lX=r
d=r}else d=s
s=$.lW
if(s==null){s=new W.hn(d)
$.lW=s
c=s}else{s.a=d
c=s}}if($.b4==null){s=document
r=s.implementation.createHTMLDocument("")
$.b4=r
$.kZ=r.createRange()
r=$.b4.createElement("base")
t.D.a(r)
r.href=s.baseURI
$.b4.head.appendChild(r)}s=$.b4
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.b4
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.b4.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.D(C.Y,a.tagName)){$.kZ.selectNodeContents(q)
s=$.kZ
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.b4.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.b4.body)J.lL(q)
c.cp(p)
document.adoptNode(p)
return p},
hj:function(a,b,c){return this.af(a,b,c,null)},
dW:function(a,b){a.textContent=null
a.appendChild(this.af(a,b,null,null))},
gdN:function(a){return a.tagName},
$iD:1}
W.hW.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.e.prototype={
h0:function(a,b,c,d){if(c!=null)this.ek(a,b,c,!1)},
ek:function(a,b,c,d){return a.addEventListener(b,H.cf(c,1),!1)},
$ie:1}
W.ah.prototype={$iah:1}
W.bP.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1,
$ibP:1}
W.dZ.prototype={
gm:function(a){return a.length}}
W.e0.prototype={
gm:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.i8.prototype={
gm:function(a){return a.length}}
W.bt.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.bu.prototype={
gd8:function(a){return a.data},
$ibu:1}
W.bR.prototype={$ibR:1}
W.bT.prototype={$ibT:1}
W.bw.prototype={$ibw:1}
W.ik.prototype={
i:function(a){return String(a)}}
W.iD.prototype={
gm:function(a){return a.length}}
W.bU.prototype={$ibU:1}
W.ek.prototype={
h:function(a,b){return P.bi(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bi(s.value[1]))}},
gZ:function(a){var s=H.d([],t.s)
this.F(a,new W.iE(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iH:1}
W.iE.prototype={
$2:function(a,b){return this.a.push(a)}}
W.el.prototype={
h:function(a,b){return P.bi(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bi(s.value[1]))}},
gZ:function(a){var s=H.d([],t.s)
this.F(a,new W.iF(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iH:1}
W.iF.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aC.prototype={$iaC:1}
W.em.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.ai.prototype={$iai:1}
W.a0.prototype={
gaG:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.b(P.lc("No elements"))
if(r>1)throw H.b(P.lc("More than one element"))
s=s.firstChild
s.toString
return s},
ae:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.c(r,b)
s.replaceChild(c,r[b])},
gO:function(a){var s=this.a.childNodes
return new W.cu(s,s.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.c(s,b)
return s[b]}}
W.v.prototype={
i_:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
i3:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nG(s,b,a)}catch(q){H.ac(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dZ(a):s},
fF:function(a,b,c){return a.replaceChild(b,c)},
$iv:1}
W.cM.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aD.prototype={
gm:function(a){return a.length},
$iaD:1}
W.eA.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.eJ.prototype={
h:function(a,b){return P.bi(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bi(s.value[1]))}},
gZ:function(a){var s=H.d([],t.s)
this.F(a,new W.iT(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iH:1}
W.iT.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eL.prototype={
gm:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.eN.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aE.prototype={$iaE:1}
W.eO.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.aF.prototype={
gm:function(a){return a.length},
$iaF:1}
W.eT.prototype={
h:function(a,b){return a.getItem(H.ls(b))},
l:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gZ:function(a){var s=H.d([],t.s)
this.F(a,new W.j3(s))
return s},
gm:function(a){return a.length},
$iH:1}
W.j3.prototype={
$2:function(a,b){return this.a.push(a)}}
W.as.prototype={$ias:1}
W.bc.prototype={$ibc:1}
W.cS.prototype={
af:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bx(a,b,c,d)
s=W.o0("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.a0(r).ae(0,new W.a0(s))
return r}}
W.eX.prototype={
af:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bx(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.af(s.createElement("table"),b,c,d)
s.toString
s=new W.a0(s)
q=s.gaG(s)
q.toString
s=new W.a0(q)
p=s.gaG(s)
r.toString
p.toString
new W.a0(r).ae(0,new W.a0(p))
return r}}
W.eY.prototype={
af:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bx(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.af(s.createElement("table"),b,c,d)
s.toString
s=new W.a0(s)
q=s.gaG(s)
r.toString
q.toString
new W.a0(r).ae(0,new W.a0(q))
return r}}
W.c3.prototype={$ic3:1}
W.at.prototype={$iat:1}
W.aa.prototype={$iaa:1}
W.f0.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.f1.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.ja.prototype={
gm:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.bB.prototype={$ibB:1}
W.f6.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.je.prototype={
gm:function(a){return a.length}}
W.aU.prototype={}
W.jv.prototype={
i:function(a){return String(a)}}
W.fp.prototype={
gm:function(a){return a.length}}
W.be.prototype={
ghn:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.A("deltaY is not supported"))},
ghm:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.A("deltaX is not supported"))},
$ibe:1}
W.c6.prototype={
fG:function(a,b){return a.requestAnimationFrame(H.cf(b,1))},
ey:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.c7.prototype={$ic7:1}
W.fw.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.d2.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
p:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aI(b)
s=a.left==s.gbo(b)&&a.top==s.gbs(b)&&a.width==s.gaF(b)&&a.height==s.gaC(b)}else s=!1
return s},
gP:function(a){return W.mI(J.ad(a.left),J.ad(a.top),J.ad(a.width),J.ad(a.height))},
gaC:function(a){return a.height},
gaF:function(a){return a.width}}
W.fL.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.d7.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.h4.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.hb.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iz:1,
$ih:1,
$in:1}
W.ft.prototype={
F:function(a,b){var s,r,q,p,o
for(s=this.gZ(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
gZ:function(a){var s,r,q,p,o=this.a.attributes,n=H.d([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.c(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fD.prototype={
h:function(a,b){return this.a.getAttribute(H.ls(b))},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.gZ(this).length}}
W.l0.prototype={}
W.fG.prototype={
fY:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nH(s,this.c,r,!1)}}}
W.jU.prototype={
$1:function(a){return this.a.$1(a)}}
W.lg.prototype={}
W.c8.prototype={
e8:function(a){var s
if($.d3.gbm($.d3)){for(s=0;s<262;++s)$.d3.l(0,C.X[s],W.qr())
for(s=0;s<12;++s)$.d3.l(0,C.o[s],W.qs())}},
aM:function(a){return $.nC().D(0,W.cr(a))},
ar:function(a,b,c){var s=$.d3.h(0,H.f(W.cr(a))+"::"+b)
if(s==null)s=$.d3.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaj:1}
W.L.prototype={
gO:function(a){return new W.cu(a,this.gm(a))}}
W.cN.prototype={
aM:function(a){return C.b.d1(this.a,new W.iI(a))},
ar:function(a,b,c){return C.b.d1(this.a,new W.iH(a,b,c))},
$iaj:1}
W.iI.prototype={
$1:function(a){return a.aM(this.a)}}
W.iH.prototype={
$1:function(a){return a.ar(this.a,this.b,this.c)}}
W.dd.prototype={
ed:function(a,b,c,d){var s,r,q
this.a.ae(0,c)
s=b.bv(0,new W.k1())
r=b.bv(0,new W.k2())
this.b.ae(0,s)
q=this.c
q.ae(0,C.w)
q.ae(0,r)},
aM:function(a){return this.a.D(0,W.cr(a))},
ar:function(a,b,c){var s=this,r=W.cr(a),q=s.c
if(q.D(0,H.f(r)+"::"+b))return s.d.h4(c)
else if(q.D(0,"*::"+b))return s.d.h4(c)
else{q=s.b
if(q.D(0,H.f(r)+"::"+b))return!0
else if(q.D(0,"*::"+b))return!0
else if(q.D(0,H.f(r)+"::*"))return!0
else if(q.D(0,"*::*"))return!0}return!1},
$iaj:1}
W.k1.prototype={
$1:function(a){return!C.b.D(C.o,a)}}
W.k2.prototype={
$1:function(a){return C.b.D(C.o,a)}}
W.hd.prototype={
ar:function(a,b,c){if(this.e1(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.D(0,b)
return!1}}
W.k7.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.hc.prototype={
aM:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cr(a)==="foreignObject")return!1
if(s)return!0
return!1},
ar:function(a,b,c){if(b==="is"||C.a.a3(b,"on"))return!1
return this.aM(a)},
$iaj:1}
W.cu.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cj(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return this.d}}
W.aj.prototype={}
W.k0.prototype={}
W.hn.prototype={
cp:function(a){var s=this,r=new W.kf(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
aZ:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.lL(a)
else b.removeChild(a)},
fL:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.nK(a)
l=m.a.getAttribute("is")
s=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var k=c.childNodes
if(c.lastChild&&c.lastChild!==k[k.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var j=0
if(c.children)j=c.children.length
for(var i=0;i<j;i++){var h=c.children[i]
if(h.id=='attributes'||h.name=='attributes'||h.id=='lastChild'||h.name=='lastChild'||h.id=='previousSibling'||h.name=='previousSibling'||h.id=='children'||h.name=='children')return true}return false}(a)
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.ac(p)}r="element unprintable"
try{r=J.a3(a)}catch(p){H.ac(p)}try{q=W.cr(a)
this.fK(a,b,n,r,q,m,l)}catch(p){if(H.ac(p) instanceof P.ae)throw p
else{this.aZ(a,b)
window
o="Removing corrupted element "+H.f(r)
if(typeof console!="undefined")window.console.warn(o)}}},
fK:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.aZ(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aM(a)){m.aZ(a,b)
window
s="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.ar(a,"is",g)){m.aZ(a,b)
window
s="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.gZ(f)
r=H.d(s.slice(0),H.lr(s).I("w<1>"))
for(q=f.gZ(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.c(r,q)
p=r[q]
o=m.a
n=J.nO(p)
H.ls(p)
if(!o.ar(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.cp(a.content)}}
W.kf.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.fL(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aZ(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.lc("Corrupt HTML")
throw H.b(q)}}catch(o){H.ac(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.fx.prototype={}
W.fz.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fC.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h0.prototype={}
W.de.prototype={}
W.df.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h8.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.hg.prototype={}
W.hh.prototype={}
W.ho.prototype={}
W.hp.prototype={}
W.hq.prototype={}
W.hr.prototype={}
W.hs.prototype={}
W.ht.prototype={}
W.hu.prototype={}
W.hv.prototype={}
W.hw.prototype={}
W.hx.prototype={}
P.k3.prototype={
c9:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bu:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.lu(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ag)return new Date(a.a)
if(t.fv.b(a))throw H.b(P.jp("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.d.b(a))return a
if(t.bX.b(a))return a
if(t.v.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.c9(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.c(r,s)
r[s]=p
J.kT(a,new P.k5(n,o))
return n.a}if(t.aH.b(a)){s=o.c9(a)
n=o.b
if(s>=n.length)return H.c(n,s)
p=n[s]
if(p!=null)return p
return o.hi(a,s)}if(t.eH.b(a)){s=o.c9(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.c(r,s)
r[s]=p
o.hA(a,new P.k6(n,o))
return n.b}throw H.b(P.jp("structured clone of other type"))},
hi:function(a,b){var s,r=J.aX(a),q=r.gm(a),p=new Array(q),o=this.b
if(b>=o.length)return H.c(o,b)
o[b]=p
if(typeof q!=="number")return H.y(q)
s=0
for(;s<q;++s){o=this.bu(r.h(a,s))
if(s>=p.length)return H.c(p,s)
p[s]=o}return p}}
P.k5.prototype={
$2:function(a,b){this.a.a[a]=this.b.bu(b)},
$S:3}
P.k6.prototype={
$2:function(a,b){this.a.b[a]=this.b.bu(b)},
$S:3}
P.dl.prototype={$ibu:1,
gd8:function(a){return this.a}}
P.kq.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.k4.prototype={
hA:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e_.prototype={
gbf:function(){var s=this.b,r=H.dt(s)
return new H.aP(new H.aV(s,new P.i4(),r.I("aV<i.E>")),new P.i5(),r.I("aP<i.E,D>"))},
l:function(a,b,c){var s=this.gbf()
J.nM(s.b.$1(J.hC(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.aJ(this.gbf().a)},
h:function(a,b){var s=this.gbf()
return s.b.$1(J.hC(s.a,b))},
gO:function(a){var s=P.l9(this.gbf(),!1,t.h)
return new J.a4(s,s.length)}}
P.i4.prototype={
$1:function(a){return t.h.b(a)}}
P.i5.prototype={
$1:function(a){return t.h.a(a)}}
P.h_.prototype={
gcm:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.y(r)
return this.$ti.c.a(s+r)},
gd4:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.y(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
p:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.q.b(b)){s=n.a
r=J.aI(b)
if(s==r.gbo(b)){q=n.b
if(q==r.gbs(b)){p=n.c
if(typeof s!=="number")return s.v()
if(typeof p!=="number")return H.y(p)
o=n.$ti.c
if(o.a(s+p)===r.gcm(b)){s=n.d
if(typeof q!=="number")return q.v()
if(typeof s!=="number")return H.y(s)
r=o.a(q+s)===r.gd4(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gP:function(a){var s,r=this,q=r.a,p=J.ad(q),o=r.b,n=J.ad(o),m=r.c
if(typeof q!=="number")return q.v()
if(typeof m!=="number")return H.y(m)
s=r.$ti.c
m=C.c.gP(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.v()
if(typeof q!=="number")return H.y(q)
q=C.c.gP(s.a(o+q))
return P.oR(P.jW(P.jW(P.jW(P.jW(0,p),n),m),q))}}
P.a7.prototype={
gbo:function(a){return this.a},
gbs:function(a){return this.b},
gaF:function(a){return this.c},
gaC:function(a){return this.d}}
P.aO.prototype={$iaO:1}
P.eb.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.aR.prototype={$iaR:1}
P.eu.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.iL.prototype={
gm:function(a){return a.length}}
P.c1.prototype={$ic1:1}
P.eV.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.m.prototype={
gd5:function(a){return new P.e_(a,new W.a0(a))},
af:function(a,b,c,d){var s,r,q,p,o,n=H.d([],t.Q)
n.push(W.mG(null))
n.push(W.mM())
n.push(new W.hc())
c=new W.hn(new W.cN(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.q.hj(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.a0(q)
o=n.gaG(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.aS.prototype={$iaS:1}
P.f7.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.fO.prototype={}
P.fP.prototype={}
P.fW.prototype={}
P.fX.prototype={}
P.h9.prototype={}
P.ha.prototype={}
P.hi.prototype={}
P.hj.prototype={}
P.bd.prototype={$ik:1,$ih:1,$in:1}
P.hG.prototype={
gm:function(a){return a.length}}
P.dG.prototype={
h:function(a,b){return P.bi(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bi(s.value[1]))}},
gZ:function(a){var s=H.d([],t.s)
this.F(a,new P.hH(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iH:1}
P.hH.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dH.prototype={
gm:function(a){return a.length}}
P.b0.prototype={}
P.ev.prototype={
gm:function(a){return a.length}}
P.fu.prototype={}
P.eI.prototype={
i8:function(a,b,c,d,e,f,g){var s
if(t.v.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.qj(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.bK("Incorrect number or type of arguments"))}}
P.eQ.prototype={
gm:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
s=P.bi(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.h5.prototype={}
P.h6.prototype={}
K.b_.prototype={
aD:function(a,b){return!0},
i:function(a){return"all"}}
K.e2.prototype={
aD:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aD(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.io.prototype={}
K.a9.prototype={
aD:function(a,b){return!this.dY(0,b)},
i:function(a){return"!["+this.ct(0)+"]"}}
K.iO.prototype={
aD:function(a,b){if(typeof b!=="number")return H.y(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.ap(this.a),r=H.ap(this.b)
return s+".."+r}}
K.iU.prototype={
e5:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.u("May not create a Set with zero characters."))
s=new H.B(t.E)
for(r=new H.b8(a,a.gm(a));r.t();){q=r.d
s.l(0,q,!0)}p=P.l9(s.gZ(s),!0,t.e)
C.b.dX(p)
this.a=p},
aD:function(a,b){return C.b.D(this.a,b)},
i:function(a){return P.eW(this.a,0,null)}}
L.eR.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.f8(this.a.k(0,b))
p.a=H.d([],t.B)
p.c=!1
this.c.push(p)
return p},
hv:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aD(0,a))return p}return null},
i:function(a){return this.b},
cW:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.D(0,l))m+=" (consume)"
for(l=n.d.c,l=l.gZ(l),l=l.gO(l);l.t();){r=l.gB(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.D(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.f4.prototype={
i:function(a){var s=H.lG(this.b,"\n","\\n"),r=H.lG(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.f5.prototype={
aE:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.o)(c),++r){q=c[r]
this.c.l(0,q,b)}},
i:function(a){return this.b}}
L.jb.prototype={
k:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eR(this,b)
s.c=H.d([],t.br)
this.a.l(0,b,s)}return s},
N:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.f5(a)
s.c=new H.B(t.dO)
this.b.l(0,a,s)}return s},
cn:function(a){return this.ie(a)},
ie:function(a){var s=this
return P.pG(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cn(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.d([],c)
a0=H.d([],c)
a1=H.d([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.cj(a1,0)
else{if(!r.t()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hv(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.eW(a0,0,null)
throw H.b(P.u("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.q(P.A("removeRange"))
P.bb(0,k,a0.length)
a0.splice(0,k-0)
C.b.ae(a1,a0)
a0=H.d([],c)
b=H.d([],c)
d=s.d
q=!s.c.D(0,n.a)?7:8
break
case 7:q=9
return n
case 9:case 8:m=l
n=null
k=0
q=5
break
case 6:if(!h.c)b.push(j)
d=h.b
if(d.d!=null){g=P.eW(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.f4(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.D(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.oP()
case 1:return P.oQ(o)}}},t.eB)},
i:function(a){var s,r=new P.S(""),q=this.d
if(q!=null)r.a=q.cW()+"\n"
for(q=this.a,q=q.gih(q),q=q.gO(q);q.t();){s=q.gB(q)
if(s!=this.d)r.a+=s.cW()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.f8.prototype={
i:function(a){return this.b.b+": "+this.ct(0)}}
O.af.prototype={
by:function(a){this.a=H.d([],a.I("w<0*>"))
this.c=this.b=null},
cq:function(a,b,c){this.b=b
this.c=a},
bb:function(a,b){return this.cq(a,null,b)},
fm:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
eL:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gm:function(a){return this.a.length},
gO:function(a){var s=this.a
return new J.a4(s,s.length)},
H:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.c(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.dt(q).I("w<af.T*>")
if(q.fm(H.d([b],p))){s=q.a
r=s.length
s.push(b)
q.eL(r,H.d([b],p))}},
$ih:1}
O.cI.prototype={
gm:function(a){return this.a.length},
gw:function(){var s=this.b
return s==null?this.b=D.P():s},
aH:function(){var s=this.b
if(s!=null)s.J(null)},
ga_:function(a){var s=this.a
if(s.length>0)return C.b.gat(s)
else return V.ej()},
dJ:function(a){var s=this.a
if(a==null)s.push(V.ej())
else s.push(a)
this.aH()},
cg:function(){var s=this.a
if(s.length>0){s.pop()
this.aH()}}}
E.hK.prototype={}
E.bs.prototype={
cD:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.a4(s,s.length);s.t();){r=s.d
if(r.f==null)r.cD()}},
sac:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gw().K(0,q.gdC())
s=q.c
if(s!=null)s.gw().n(0,q.gdC())
r=new D.E("shape",p,q.c)
r.b=!0
q.ak(r)}},
sb9:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gw().K(0,q.gdE())
s=q.f
q.f=a
if(a!=null)a.gw().n(0,q.gdE())
q.cD()
r=new D.E("technique",s,q.f)
r.b=!0
q.ak(r)}},
saP:function(a){var s,r,q=this
if(!J.G(q.r,a)){s=q.r
if(s!=null)s.gw().K(0,q.gdA())
if(a!=null)a.gw().n(0,q.gdA())
q.r=a
r=new D.E("mover",s,a)
r.b=!0
q.ak(r)}},
av:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aU(0,b,q):null
if(!J.G(o,q.x)){s=q.x
q.x=o
r=new D.E("matrix",s,o)
r.b=!0
q.ak(r)}p=q.f
if(p!=null)p.av(0,b)
for(p=q.y.a,p=new J.a4(p,p.length);p.t();)p.d.av(0,b)},
aQ:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga_(q))
else o.push(p.A(0,q.ga_(q)))
q.aH()
a.dK(r.f)
q=a.dy
s=(q&&C.b).gat(q)
if(s!=null&&r.d!=null)s.i2(a,r)
for(q=r.y.a,q=new J.a4(q,q.length);q.t();)q.d.aQ(a)
a.dI()
a.dx.cg()},
ak:function(a){var s=this.z
if(s!=null)s.J(a)},
Y:function(){return this.ak(null)},
dD:function(a){this.e=null
this.ak(a)},
hQ:function(){return this.dD(null)},
dF:function(a){this.ak(a)},
hR:function(){return this.dF(null)},
dB:function(a){this.ak(a)},
hP:function(){return this.dB(null)},
dz:function(a){this.ak(a)},
hM:function(){return this.dz(null)},
hL:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdw(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bO()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.Y()},
hO:function(a,b){var s,r
for(s=b.gO(b),r=this.gdw();s.t();)s.gB(s).gw().K(0,r)
this.Y()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bN.prototype={
i:function(a){return this.b}}
E.bZ.prototype={
i:function(a){return this.b}}
E.fE.prototype={}
E.iP.prototype={
e4:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ag(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cI()
r=t.h8
s.a=H.d([],r)
s.gw().n(0,new E.iQ(q))
q.cy=s
s=new O.cI()
s.a=H.d([],r)
s.gw().n(0,new E.iR(q))
q.db=s
s=new O.cI()
s.a=H.d([],r)
s.gw().n(0,new E.iS(q))
q.dx=s
s=H.d([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.B(t.h9)},
ghZ:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga_(q)
s=r.db
s=r.z=q.A(0,s.ga_(s))
q=s}return q},
dK:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gat(s):a)},
dI:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.iQ.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.iR.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.iS.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.f3.prototype={
cA:function(a){this.dM()},
cz:function(){return this.cA(null)},
ghB:function(){var s,r=this,q=Date.now(),p=C.c.a1(P.lV(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ag(q,!1)
return s/p},
cQ:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.A()
if(typeof p!=="number")return H.y(p)
s=C.d.cb(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.A()
r=C.d.cb(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.mn(C.n,q.gi4())}},
dM:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.F.ey(s)
r=W.n2(new E.j9(this),t.H)
r.toString
C.F.fG(s,r)}},
i1:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cQ()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ag(p,!1)
q.y=P.lV(p-q.r.a).a*0.000001
p=q.cy
C.b.sm(p.a,0)
p.aH()
p=q.db
C.b.sm(p.a,0)
p.aH()
p=q.dx
C.b.sm(p.a,0)
p.aH()
p=q.dy
p.toString
C.b.sm(p,0)
q.dy.push(null)
m.aQ(n.e)}q=n.Q
if(q!=null)q.J(null)}catch(o){s=H.ac(o)
r=H.lB(o)
P.lF("Error: "+H.f(s))
P.lF("Stack: "+H.f(r))
throw H.b(s)}}}
E.j9.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.i1()}}}
Z.fq.prototype={}
Z.dK.prototype={
bV:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ac(q)
r=P.u('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.jP.prototype={}
Z.dL.prototype={
aO:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
bV:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].bV(a)},
ig:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aQ:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.c(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=t.i,n=H.d([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)n.push(s[q].i(0))
p=H.d([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a3(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(n,", ")+"\nAttrs:   "+C.b.j(p,", ")}}
Z.bS.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eF(this.c))+"'")+"]"}}
Z.bD.prototype={
gcs:function(a){var s=this.a,r=(s&$.bm().a)!==0?3:0
if((s&$.bl().a)!==0)r+=3
if((s&$.bk().a)!==0)r+=3
if((s&$.bI().a)!==0)r+=2
if((s&$.bJ().a)!==0)r+=3
if((s&$.dz().a)!==0)r+=3
if((s&$.dA().a)!==0)r+=4
if((s&$.ci().a)!==0)++r
return(s&$.bj().a)!==0?r+4:r},
h5:function(a){var s,r=$.bm(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bl()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bk()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bI()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bJ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dz()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dA()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ci()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bj()
if((q&r.a)!==0)if(s===a)return r
return $.nA()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bD))return!1
return this.a===b.a},
i:function(a){var s=H.d([],t.i),r=this.a
if((r&$.bm().a)!==0)s.push("Pos")
if((r&$.bl().a)!==0)s.push("Norm")
if((r&$.bk().a)!==0)s.push("Binm")
if((r&$.bI().a)!==0)s.push("Txt2D")
if((r&$.bJ().a)!==0)s.push("TxtCube")
if((r&$.dz().a)!==0)s.push("Clr3")
if((r&$.dA().a)!==0)s.push("Clr4")
if((r&$.ci().a)!==0)s.push("Weight")
if((r&$.bj().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hL.prototype={}
D.bO.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=H.d([],t.f):s).push(b)},
K:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.D(q,b)
if(q===!0){q=r.a
s=(q&&C.b).K(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.D(q,b)
if(q===!0){q=r.b
s=(q&&C.b).K(q,b)||s}return s},
J:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.Z()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.F(P.l9(s,!0,t.dm),new D.i1(o))
s=p.b
if(s!=null){p.b=H.d([],t.f)
C.b.F(s,new D.i2(o))}return!0},
hq:function(){return this.J(null)},
al:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.J(s)}}}}
D.i1.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.i2.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.Z.prototype={}
D.b5.prototype={}
D.b6.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dM.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dM))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.e9.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e9))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ie.prototype={
hW:function(a){this.d.n(0,a.a)
return!1},
hS:function(a){this.d.K(0,a.a)
return!1}}
X.cE.prototype={}
X.il.prototype={
aX:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.A()
s=b.b
r=o.ch
if(typeof s!=="number")return s.A()
q=new V.ak(m.a+l*k,m.b+s*r)
r=o.a.gbh()
p=new X.bW(a,V.by(),o.x,r,q)
p.b=!0
o.z=new P.ag(n,!1)
o.x=q
return p},
cf:function(a,b){this.r=a.a
return!1},
b7:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dV()
if(typeof s!=="number")return s.aa()
this.r=(s&~r)>>>0
return!1},
b6:function(a,b){var s=this.d
if(s==null)return!1
s.J(this.aX(a,b))
return!0},
hX:function(a){return!1},
fb:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cE(c,p.a.gbh(),b)
q.b=!0
r.J(q)
p.y=new P.ag(s,!1)
p.x=V.by()}}
X.bV.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.bV))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bW.prototype={}
X.iG.prototype={
bG:function(a,b,c){var s=this,r=new P.ag(Date.now(),!1),q=s.a.gbh(),p=new X.bW(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cf:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.J(this.bG(a,b,!0))
return!0},
b7:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dV()
if(typeof r!=="number")return r.aa()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.J(s.bG(a,b,!0))
return!0},
b6:function(a,b){var s=this.d
if(s==null)return!1
s.J(this.bG(a,b,!1))
return!0},
hY:function(a,b){return!1}}
X.eD.prototype={}
X.cU.prototype={}
X.jd.prototype={
aX:function(a,b){var s=this,r=new P.ag(Date.now(),!1),q=a.length>0?a[0]:V.by(),p=s.a.gbh(),o=new X.cU(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
hV:function(a){var s=this.b
if(s==null)return!1
s.J(this.aX(a,!0))
return!0},
hT:function(a){var s=this.c
if(s==null)return!1
s.J(this.aX(a,!0))
return!0},
hU:function(a){var s=this.d
if(s==null)return!1
s.J(this.aX(a,!1))
return!0}}
X.fm.prototype={
gbh:function(){var s=this.a,r=C.i.gd6(s).c
r.toString
s=C.i.gd6(s).d
s.toString
return V.mh(0,0,r,s)},
cH:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.e9(s,new X.bV(r,a.altKey,a.shiftKey))},
aK:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
bP:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
az:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.W()
if(typeof o!=="number")return H.y(o)
s=r.top
if(typeof p!=="number")return p.W()
if(typeof s!=="number")return H.y(s)
return new V.ak(q-o,p-s)},
aY:function(a){return new V.au(a.movementX,a.movementY)},
bL:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.d([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=C.d.am(p.pageX)
C.d.am(p.pageY)
n=k.left
if(typeof n!=="number")return H.y(n)
C.d.am(p.pageX)
m=C.d.am(p.pageY)
l=k.top
if(typeof l!=="number")return H.y(l)
j.push(new V.ak(o-n,m-l))}return j},
ax:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dM(s,new X.bV(r,a.altKey,a.shiftKey))},
bH:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.W()
if(typeof n!=="number")return H.y(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.W()
if(typeof p!=="number")return H.y(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.y(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.y(p)
p=r<p}else p=!1
return p},
f5:function(a){this.f=!0},
eT:function(a){this.f=!1},
f_:function(a){if(this.f&&this.bH(a))a.preventDefault()},
f9:function(a){var s
if(!this.f)return
s=this.cH(a)
this.b.hW(s)},
f7:function(a){var s
if(!this.f)return
s=this.cH(a)
this.b.hS(s)},
fd:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aK(a)
if(p.x){s=p.ax(a)
r=p.aY(a)
if(p.d.cf(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.ax(a)
q=p.az(a)
if(p.c.cf(s,q))a.preventDefault()},
fh:function(a){var s,r,q,p=this
p.aK(a)
s=p.ax(a)
if(p.x){r=p.aY(a)
if(p.d.b7(s,r))a.preventDefault()
return}if(p.r)return
q=p.az(a)
if(p.c.b7(s,q))a.preventDefault()},
f3:function(a){var s,r,q,p=this
if(!p.bH(a)){p.aK(a)
s=p.ax(a)
if(p.x){r=p.aY(a)
if(p.d.b7(s,r))a.preventDefault()
return}if(p.r)return
q=p.az(a)
if(p.c.b7(s,q))a.preventDefault()}},
ff:function(a){var s,r,q,p=this
p.aK(a)
s=p.ax(a)
if(p.x){r=p.aY(a)
if(p.d.b6(s,r))a.preventDefault()
return}if(p.r)return
q=p.az(a)
if(p.c.b6(s,q))a.preventDefault()},
f1:function(a){var s,r,q,p=this
if(!p.bH(a)){p.aK(a)
s=p.ax(a)
if(p.x){r=p.aY(a)
if(p.d.b6(s,r))a.preventDefault()
return}if(p.r)return
q=p.az(a)
if(p.c.b6(s,q))a.preventDefault()}},
fj:function(a){var s,r,q=this
q.aK(a)
s=new V.au((a&&C.E).ghm(a),C.E.ghn(a)).A(0,q.Q)
if(q.x){if(q.d.hX(s))a.preventDefault()
return}if(q.r)return
r=q.az(a)
if(q.c.hY(s,r))a.preventDefault()},
fl:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ax(q.y)
r=q.az(q.y)
q.d.fb(s,r,p)}},
fB:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bP(a)
s=r.bL(a)
if(r.e.hV(s))a.preventDefault()},
fv:function(a){var s
this.bP(a)
s=this.bL(a)
if(this.e.hT(s))a.preventDefault()},
fz:function(a){var s
this.bP(a)
s=this.bL(a)
if(this.e.hU(s))a.preventDefault()}}
D.dI.prototype={$iT:1}
D.dU.prototype={$iT:1}
D.T.prototype={}
D.cz.prototype={
X:function(a){var s=this.y
if(s!=null)s.J(a)},
cO:function(a){var s=this.z
if(s!=null)s.J(a)},
fa:function(){return this.cO(null)},
fo:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(q==null||this.e9(q))return!1}return!0},
eN:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcN(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o instanceof D.bA)this.x.push(o)
n=o.go
if(n==null){n=new D.bO()
n.d=0
o.go=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}s=new D.b5()
s.b=!0
this.X(s)},
ft:function(a,b){var s,r,q
for(s=b.gO(b),r=this.gcN();s.t();){q=s.gB(s)
C.b.K(this.e,q)
q.gw().K(0,r)}s=new D.b6()
s.b=!0
this.X(s)},
e9:function(a){var s=C.b.D(this.x,a)
return s}}
D.eC.prototype={$iT:1}
D.bA.prototype={
X:function(a){var s=this.go
if(s!=null)s.J(a)},
eU:function(){return this.X(null)},
ga6:function(){var s=this.x!=null?1:0
return s+4+8},
$iT:1}
V.Y.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Y))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.aL.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aL))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.i_.prototype={}
V.ei.prototype={
a9:function(a,b){var s=this,r=H.d([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ei))return!1
s=b.a
$.F().toString
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
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.ch(H.d([o.a,o.d,o.r],n),3,0),l=V.ch(H.d([o.b,o.e,o.x],n),3,0),k=V.ch(H.d([o.c,o.f,o.y],n),3,0)
n=m.length
if(0>=n)return H.c(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.c(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.c(k,0)
s=s+k[0]+",\n"
if(1>=n)return H.c(m,1)
p=" "+m[1]+", "
if(1>=r)return H.c(l,1)
p=p+l[1]+", "
if(1>=q)return H.c(k,1)
p=s+(p+k[1]+",\n")
if(2>=n)return H.c(m,2)
n=" "+m[2]+", "
if(2>=r)return H.c(l,2)
n=n+l[2]+", "
if(2>=q)return H.c(k,2)
return p+(n+k[2]+"]")}}
V.b9.prototype={
a9:function(a,b){var s=this,r=H.d([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
dq:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.F().toString
if(Math.abs(b3-0)<1e-9)return V.ej()
s=1/b3
r=-l
q=-a2
return V.ba((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
A:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.ba(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bt:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.C(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
aT:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.Q(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b9))return!1
s=b.a
$.F().toString
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
i:function(a){return this.M()},
E:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.ch(H.d([n.a,n.e,n.y,n.cx],m),3,0),k=V.ch(H.d([n.b,n.f,n.z,n.cy],m),3,0),j=V.ch(H.d([n.c,n.r,n.Q,n.db],m),3,0),i=V.ch(H.d([n.d,n.x,n.ch,n.dx],m),3,0)
m=l.length
if(0>=m)return H.c(l,0)
s="["+l[0]+", "
r=k.length
if(0>=r)return H.c(k,0)
s=s+k[0]+", "
q=j.length
if(0>=q)return H.c(j,0)
s=s+j[0]+", "
p=i.length
if(0>=p)return H.c(i,0)
s=s+i[0]+",\n"
o=a+" "
if(1>=m)return H.c(l,1)
o=o+l[1]+", "
if(1>=r)return H.c(k,1)
o=o+k[1]+", "
if(1>=q)return H.c(j,1)
o=o+j[1]+", "
if(1>=p)return H.c(i,1)
o=s+(o+i[1]+",\n")
s=a+" "
if(2>=m)return H.c(l,2)
s=s+l[2]+", "
if(2>=r)return H.c(k,2)
s=s+k[2]+", "
if(2>=q)return H.c(j,2)
s=s+j[2]+", "
if(2>=p)return H.c(i,2)
s=o+(s+i[2]+",\n")
o=a+" "
if(3>=m)return H.c(l,3)
o=o+l[3]+", "
if(3>=r)return H.c(k,3)
o=o+k[3]+", "
if(3>=q)return H.c(j,3)
o=o+j[3]+", "
if(3>=p)return H.c(i,3)
return s+(o+i[3]+"]")},
M:function(){return this.E("")}}
V.ak.prototype={
ai:function(a){return new V.au(a.a-this.a,a.b-this.b)},
p:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.Q.prototype={
v:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
W:function(a,b){return new V.Q(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){return new V.Q(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Q))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.bz.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bz))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.eH.prototype={
gau:function(){var s=this.c,r=this.d
return s>r?r:s},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eH))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.au.prototype={
b3:function(a){return Math.sqrt(this.a8(this))},
a8:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.A()
if(typeof p!=="number")return H.y(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.y(r)
return q*p+s*r},
A:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.A()
if(typeof b!=="number")return H.y(b)
s=this.b
if(typeof s!=="number")return s.A()
return new V.au(r*b,s*b)},
a4:function(a,b){var s,r
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.mw
return s==null?$.mw=new V.au(0,0):s}s=this.a
if(typeof s!=="number")return s.a4()
r=this.b
if(typeof r!=="number")return r.a4()
return new V.au(s/b,r/b)},
p:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
s=b.a
r=this.a
$.F().toString
if(typeof s!=="number")return s.W()
if(typeof r!=="number")return H.y(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.W()
if(typeof r!=="number")return H.y(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.C.prototype={
b3:function(a){return Math.sqrt(this.a8(this))},
a8:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ce:function(a,b){return new V.C(V.hA(this.a,a.a,b),V.hA(this.b,a.b,b),V.hA(this.c,a.c,b))},
G:function(){var s=this,r=Math.sqrt(s.a8(s))
if(r===1)return s
return s.a4(0,r)},
aB:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.C(s*r-q*p,q*o-n*r,n*p-s*o)},
v:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.C(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
a4:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.d0()
return new V.C(this.a/b,this.b/b,this.c/b)},
dr:function(){$.F().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.C))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.d1.prototype={
b3:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d1))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
U.hM.prototype={
bz:function(a){var s=V.qH(a,this.c,this.b)
return s},
gw:function(){var s=this.y
return s==null?this.y=D.P():s},
U:function(a){var s=this.y
if(s!=null)s.J(a)},
sdS:function(a,b){},
sds:function(a){var s,r=this,q=r.b
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bz(s)}q=new D.E("maximumLocation",q,r.b)
q.b=!0
r.U(q)}},
sdu:function(a){var s,r=this,q=r.c
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bz(s)}q=new D.E("minimumLocation",q,r.c)
q.b=!0
r.U(q)}},
sa2:function(a,b){var s,r=this
b=r.bz(b)
s=r.d
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.E("location",s,b)
s.b=!0
r.U(s)}},
sdt:function(a){var s,r,q=this,p=q.e
$.F().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.E("maximumVelocity",p,a)
p.b=!0
q.U(p)}},
sV:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.E("velocity",r,a)
r.b=!0
s.U(r)}},
sd7:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.E("dampening",s,a)
s.b=!0
this.U(s)}},
av:function(a,b){var s,r,q,p=this,o=p.f
$.F().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa2(0,p.d+s*b)
o=p.x
$.F().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sV(s)}}}
U.ck.prototype={
gw:function(){var s=this.b
return s==null?this.b=D.P():s},
aU:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ck))return!1
return J.G(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.bQ.prototype={
gw:function(){var s=this.e
return s==null?this.e=D.P():s},
U:function(a){var s=this.e
if(s!=null)s.J(a)},
ao:function(){return this.U(null)},
eb:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gbd(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gw()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.b5()
s.b=!0
this.U(s)},
fq:function(a,b){var s,r
for(s=b.gO(b),r=this.gbd();s.t();)s.gB(s).gw().K(0,r)
s=new D.b6()
s.b=!0
this.U(s)},
aU:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.ab()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a4(p,p.length),s=null;p.t();){o=p.d
if(o!=null){r=o.aU(0,b,c)
if(r!=null)s=s==null?r:r.A(0,s)}}q.f=s==null?V.ej():s
p=q.e
if(p!=null)p.al(0)}return q.f},
p:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bQ))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.c(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.c(p,r)
if(!J.G(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$ia6:1}
U.a6.prototype={}
U.d_.prototype={
gw:function(){var s=this.fx
return s==null?this.fx=D.P():s},
U:function(a){var s=this.fx
if(s!=null)s.J(a)},
ao:function(){return this.U(null)},
h6:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.c
r=s.b
s=r==null?s.b=D.P():r
s.n(0,q.geF())
s=q.a.c
r=s.d
s=r==null?s.d=D.P():r
s.n(0,q.geH())
s=q.a.c
r=s.c
s=r==null?s.c=D.P():r
s.n(0,q.geJ())
s=q.a.d
r=s.f
s=r==null?s.f=D.P():r
s.n(0,q.geA())
s=q.a.d
r=s.d
s=r==null?s.d=D.P():r
s.n(0,q.geC())
s=q.a.e
r=s.b
s=r==null?s.b=D.P():r
s.n(0,q.gfW())
s=q.a.e
r=s.d
s=r==null?s.d=D.P():r
s.n(0,q.gfU())
s=q.a.e
r=s.c
s=r==null?s.c=D.P():r
s.n(0,q.gfS())
return!0},
aq:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.R()
s=-s}if(this.r){if(typeof r!=="number")return r.R()
r=-r}return new V.au(s,r)},
eG:function(a){var s=this
t.c.a(a)
if(!J.G(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
eI:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.ai(a.d)
s=s.a8(s)
r=l.Q
if(typeof r!=="number")return H.y(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aq(a.y.ai(a.d).A(0,2).a4(0,s.gau()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.R()
q=l.y
if(typeof q!=="number")return H.y(q)
r.sV(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.R()
r=l.x
if(typeof r!=="number")return H.y(r)
q.sV(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aq(r.ai(q).A(0,2).a4(0,s.gau()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.y(n)
m=l.cy
if(typeof m!=="number")return H.y(m)
r.sa2(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.y(o)
r=l.db
if(typeof r!=="number")return H.y(r)
m.sa2(0,-n*o+r)
l.b.sV(0)
l.c.sV(0)
l.dx=l.aq(a.z.ai(q).A(0,2).a4(0,s.gau()))}l.ao()},
eK:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a8(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.R()
q=p.y
if(typeof q!=="number")return H.y(q)
s.sV(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.R()
s=p.x
if(typeof s!=="number")return H.y(s)
q.sV(-r*10*s)
p.ao()}},
eB:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eD:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.G(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.aq(r.ai(q).A(0,2).a4(0,s.gau()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.y(n)
m=l.cy
if(typeof m!=="number")return H.y(m)
r.sa2(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.y(o)
r=l.db
if(typeof r!=="number")return H.y(r)
m.sa2(0,-n*o+r)
l.b.sV(0)
l.c.sV(0)
l.dx=l.aq(a.z.ai(q).A(0,2).a4(0,s.gau()))
l.ao()},
fX:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fV:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.ai(a.d)
s=s.a8(s)
r=l.Q
if(typeof r!=="number")return H.y(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aq(a.y.ai(a.d).A(0,2).a4(0,s.gau()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.R()
q=l.y
if(typeof q!=="number")return H.y(q)
r.sV(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.R()
r=l.x
if(typeof r!=="number")return H.y(r)
q.sV(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aq(r.ai(q).A(0,2).a4(0,s.gau()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.y(n)
m=l.cy
if(typeof m!=="number")return H.y(m)
r.sa2(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.y(o)
r=l.db
if(typeof r!=="number")return H.y(r)
m.sa2(0,-n*o+r)
l.b.sV(0)
l.c.sV(0)
l.dx=l.aq(a.z.ai(q).A(0,2).a4(0,s.gau()))}l.ao()},
fT:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a8(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.R()
q=p.y
if(typeof q!=="number")return H.y(q)
s.sV(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.R()
s=p.x
if(typeof s!=="number")return H.y(s)
q.sV(-r*10*s)
p.ao()}},
aU:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.ab()
if(o<n){p.dy=n
s=b.y
p.c.av(0,s)
p.b.av(0,s)
o=V.m2(p.b.d)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.A(0,V.ba(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia6:1}
M.dX.prototype={
aw:function(a){var s=this.y
if(s!=null)s.J(a)},
ec:function(){return this.aw(null)},
eW:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gap(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bO()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.b5()
s.b=!0
this.aw(s)},
eY:function(a,b){var s,r
for(s=b.gO(b),r=this.gap();s.t();)s.gB(s).gw().K(0,r)
s=new D.b6()
s.b=!0
this.aw(s)},
sb9:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gw().K(0,r.gap())
s=r.d
r.d=a
if(a!=null)a.gw().n(0,r.gap())
q=new D.E("technique",s,r.d)
q.b=!0
r.aw(q)}},
gw:function(){var s=this.y
return s==null?this.y=D.P():s},
aQ:function(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a4.dK(a3.d)
s=a3.c
s.toString
r=a4.a
r.bindFramebuffer(36160,null)
r.enable(2884)
r.enable(2929)
r.depthFunc(513)
q=r.drawingBufferWidth
p=r.drawingBufferHeight
o=s.r
n=o.a
if(typeof q!=="number")return H.y(q)
m=C.d.am(n*q)
n=o.b
if(typeof p!=="number")return H.y(p)
l=C.d.am(n*p)
n=C.d.am(o.c*q)
a4.c=n
o=C.d.am(o.d*p)
a4.d=o
r.viewport(m,l,n,o)
r.clearDepth(s.c)
s=s.a
r.clearColor(s.a,s.b,s.c,s.d)
r.clear(16640)
s=a3.b
r=a4.c
o=a4.d
n=s.c
k=s.d
j=s.e
i=j-k
h=1/Math.tan(n*0.5)
g=V.ba(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a4.cy.dJ(g)
r=$.m7
if(r==null){r=V.m9()
o=V.mA()
n=$.mx
f=(n==null?$.mx=new V.C(0,0,-1):n).G()
e=o.aB(f).G()
d=f.aB(e)
c=new V.C(r.a,r.b,r.c)
b=e.R(0).a8(c)
a=d.R(0).a8(c)
a0=f.R(0).a8(c)
r=V.ba(e.a,d.a,f.a,b,e.b,d.b,f.b,a,e.c,d.c,f.c,a0,0,0,0,1)
$.m7=r
a1=r}else a1=r
r=s.b
if(r!=null){a2=r.aU(0,a4,s)
if(a2!=null)a1=a2.A(0,a1)}a4.db.dJ(a1)
s=a3.d
if(s!=null)s.av(0,a4)
for(s=a3.e.a,s=new J.a4(s,s.length);s.t();)s.d.av(0,a4)
for(s=a3.e.a,s=new J.a4(s,s.length);s.t();)s.d.aQ(a4)
a3.b.toString
a4.cy.cg()
a4.db.cg()
a3.c.toString
a4.dI()}}
A.dF.prototype={}
A.hF.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hr:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hp:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a5.prototype={
gan:function(a){var s=this.a?1:0
return s|0|0},
i:function(a){var s=this.a?1:0
return""+(s|0|0)},
p:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a5))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.ef.prototype={
e3:function(c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8="uniform mat4 objMat;\n"
c4.z=c9
s=new P.S("")
r=c9.fr
if(r){s.a=c8
q=c8}else q=""
p=c9.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c9.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c9.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.pV(c9,s)
A.pX(c9,s)
A.pW(c9,s)
A.pZ(c9,s)
A.q_(c9,s)
A.pY(c9,s)
A.q0(c9,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c9.ry
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
s.a=q}if(c9.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c9.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c9.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c9.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
l=q.charCodeAt(0)==0?q:q
k=A.pU(c4.z)
c4.c=l
c4.d=k
c4.e=c4.cI(l,35633)
c4.f=c4.cI(c4.d,35632)
q=c4.a
o=q.createProgram()
c4.r=o
q.attachShader(o,c4.e)
q.attachShader(c4.r,c4.f)
q.linkProgram(c4.r)
if(!q.getProgramParameter(c4.r,35714)){j=q.getProgramInfoLog(c4.r)
q.deleteProgram(c4.r)
H.q(P.u("Failed to link shader: "+H.f(j)))}c4.fO()
c4.fQ()
c4.Q=c4.x.h(0,"posAttr")
c4.cx=c4.x.h(0,"normAttr")
c4.ch=c4.x.h(0,"binmAttr")
c4.cy=c4.x.h(0,"txt2DAttr")
c4.db=c4.x.h(0,"txtCubeAttr")
c4.dx=c4.x.h(0,"bendAttr")
if(c9.dy)c4.id=t.I.a(c4.y.S(0,"invViewMat"))
if(r)c4.dy=t.I.a(c4.y.S(0,"objMat"))
if(p)c4.fr=t.I.a(c4.y.S(0,"viewObjMat"))
r=t.I
c4.fy=r.a(c4.y.S(0,"projViewObjMat"))
if(c9.go)c4.fx=r.a(c4.y.S(0,"viewMat"))
if(c9.x1)c4.k1=t.O.a(c4.y.S(0,"txt2DMat"))
if(c9.x2)c4.k2=r.a(c4.y.S(0,"txtCubeMat"))
if(c9.y1)c4.k3=r.a(c4.y.S(0,"colorMat"))
c4.r1=H.d([],t.hg)
q=c9.bj
if(q>0){c4.k4=c4.y.S(0,"bendMatCount")
for(i=0;i<q;++i){p=c4.r1
o=c4.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.q(P.u(c6+n+c7))
p.push(r.a(h))}}if(c9.a.a)c4.r2=t.r.a(c4.y.S(0,"emissionClr"))
if(c9.b.a)c4.x1=t.r.a(c4.y.S(0,"ambientClr"))
if(c9.c.a)c4.y2=t.r.a(c4.y.S(0,"diffuseClr"))
if(c9.d.a)c4.bk=t.r.a(c4.y.S(0,"invDiffuseClr"))
r=c9.e.a
if(!r)q=!1
else q=!0
if(q){c4.da=t.n.a(c4.y.S(0,"shininess"))
if(r)c4.d9=t.r.a(c4.y.S(0,"specularClr"))}if(c9.db){c4.dc=t.p.a(c4.y.S(0,"envSampler"))
if(c9.r.a)c4.dd=t.r.a(c4.y.S(0,"reflectClr"))
r=c9.x.a
if(!r)q=!1
else q=!0
if(q){c4.de=t.n.a(c4.y.S(0,"refraction"))
if(r)c4.df=t.r.a(c4.y.S(0,"refractClr"))}}if(c9.y.a)c4.dg=t.n.a(c4.y.S(0,"alpha"))
if(c9.k1){r=c9.z
q=r.length
if(q!==0){c4.c1=new H.B(t.J)
c4.c2=new H.B(t.en)
for(p=t.r,o=t.n,n=t.d6,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="barLight"+H.f(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){b=c4.y
a=d+"s["+i+"].startPnt"
h=b.h(0,a)
if(h==null)H.q(P.u(c6+a+c7))
p.a(h)
b=c4.y
a=d+"s["+i+"].endPnt"
a0=b.h(0,a)
if(a0==null)H.q(P.u(c6+a+c7))
p.a(a0)
b=c4.y
a=d+"s["+i+"].color"
a1=b.h(0,a)
if(a1==null)H.q(P.u(c6+a+c7))
p.a(a1)
if(typeof e!=="number")return e.aa()
if((e&4)!==0){b=c4.y
a=d+"s["+i+"].att0"
a2=b.h(0,a)
if(a2==null)H.q(P.u(c6+a+c7))
o.a(a2)
b=c4.y
a=d+"s["+i+"].att1"
a3=b.h(0,a)
if(a3==null)H.q(P.u(c6+a+c7))
o.a(a3)
b=c4.y
a=d+"s["+i+"].att2"
a4=b.h(0,a)
if(a4==null)H.q(P.u(c6+a+c7))
o.a(a4)
a5=a4
a6=a3
a7=a2}else{a5=c5
a6=a5
a7=a6}c.push(new A.cV(h,a0,a1,a7,a6,a5))}c4.c2.l(0,e,c)
m=c4.c1
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.u(c6+a+c7))
m.l(0,e,h)}}r=c9.Q
q=r.length
if(q!==0){c4.c3=new H.B(t.J)
c4.c4=new H.B(t.af)
for(p=t.r,o=t.w,n=t.dv,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.f(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){if(typeof e!=="number")return e.aa()
b=(e&1)!==0
if(b){a=c4.y
a8=d+"s["+i+"].objUp"
h=a.h(0,a8)
if(h==null)H.q(P.u(c6+a8+c7))
p.a(h)
a=c4.y
a8=d+"s["+i+"].objRight"
a0=a.h(0,a8)
if(a0==null)H.q(P.u(c6+a8+c7))
p.a(a0)
a=c4.y
a8=d+"s["+i+"].objDir"
a1=a.h(0,a8)
if(a1==null)H.q(P.u(c6+a8+c7))
p.a(a1)
a9=a1
b0=a0
b1=h}else{a9=c5
b0=a9
b1=b0}a=c4.y
a8=d+"s["+i+"].viewDir"
h=a.h(0,a8)
if(h==null)H.q(P.u(c6+a8+c7))
p.a(h)
a=c4.y
a8=d+"s["+i+"].color"
a0=a.h(0,a8)
if(a0==null)H.q(P.u(c6+a8+c7))
p.a(a0)
if(b){b=c4.y
a=d+"sTexture2D"+i
a1=b.h(0,a)
if(a1==null)H.q(P.u(c6+a+c7))
o.a(a1)
b2=a1}else b2=c5
c.push(new A.cW(b1,b0,a9,h,a0,b2))}c4.c4.l(0,e,c)
m=c4.c3
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.u(c6+a+c7))
m.l(0,e,h)}}r=c9.ch
q=r.length
if(q!==0){c4.c5=new H.B(t.J)
c4.c6=new H.B(t.gr)
for(p=t.r,o=t.O,n=t.p,m=t.y,b=t.n,a=t.by,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="pointLight"+H.f(e)
c=H.d([],a)
for(a8=f.b,i=0;i<a8;++i){b3=c4.y
b4=d+"s["+i+"].point"
h=b3.h(0,b4)
if(h==null)H.q(P.u(c6+b4+c7))
p.a(h)
b3=c4.y
b4=d+"s["+i+"].viewPnt"
a0=b3.h(0,b4)
if(a0==null)H.q(P.u(c6+b4+c7))
p.a(a0)
b3=c4.y
b4=d+"s["+i+"].color"
a1=b3.h(0,b4)
if(a1==null)H.q(P.u(c6+b4+c7))
p.a(a1)
if(typeof e!=="number")return e.aa()
if((e&3)!==0){b3=c4.y
b4=d+"s["+i+"].invViewRotMat"
a2=b3.h(0,b4)
if(a2==null)H.q(P.u(c6+b4+c7))
o.a(a2)
b5=a2}else b5=c5
if((e&1)!==0){b3=c4.y
b4=d+"sTextureCube"+i
a2=b3.h(0,b4)
if(a2==null)H.q(P.u(c6+b4+c7))
n.a(a2)
b2=a2}else b2=c5
if((e&2)!==0){b3=c4.y
b4=d+"sShadowCube"+i
a2=b3.h(0,b4)
if(a2==null)H.q(P.u(c6+b4+c7))
n.a(a2)
b3=c4.y
b4=d+"s["+i+"].shadowAdj"
a3=b3.h(0,b4)
if(a3==null)H.q(P.u(c6+b4+c7))
m.a(a3)
b6=a2
b7=a3}else{b6=c5
b7=b6}if((e&4)!==0){b3=c4.y
b4=d+"s["+i+"].att0"
a2=b3.h(0,b4)
if(a2==null)H.q(P.u(c6+b4+c7))
b.a(a2)
b3=c4.y
b4=d+"s["+i+"].att1"
a3=b3.h(0,b4)
if(a3==null)H.q(P.u(c6+b4+c7))
b.a(a3)
b3=c4.y
b4=d+"s["+i+"].att2"
a4=b3.h(0,b4)
if(a4==null)H.q(P.u(c6+b4+c7))
b.a(a4)
a5=a4
a6=a3
a7=a2}else{a5=c5
a6=a5
a7=a6}c.push(new A.cY(h,a0,b5,a1,b2,b6,b7,a7,a6,a5))}c4.c6.l(0,e,c)
a8=c4.c5
b3=c4.y
b4=d+"Count"
h=b3.h(0,b4)
if(h==null)H.q(P.u(c6+b4+c7))
a8.l(0,e,h)}}r=c9.cx
q=r.length
if(q!==0){c4.c7=new H.B(t.J)
c4.c8=new H.B(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.w,b=t.fF,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="spotLight"+H.f(e)
c=H.d([],b)
for(a=f.b,i=0;i<a;++i){a8=c4.y
b3=d+"s["+i+"].objPnt"
h=a8.h(0,b3)
if(h==null)H.q(P.u(c6+b3+c7))
p.a(h)
a8=c4.y
b3=d+"s["+i+"].objDir"
a0=a8.h(0,b3)
if(a0==null)H.q(P.u(c6+b3+c7))
p.a(a0)
a8=c4.y
b3=d+"s["+i+"].viewPnt"
a1=a8.h(0,b3)
if(a1==null)H.q(P.u(c6+b3+c7))
p.a(a1)
a8=c4.y
b3=d+"s["+i+"].color"
a2=a8.h(0,b3)
if(a2==null)H.q(P.u(c6+b3+c7))
p.a(a2)
if(typeof e!=="number")return e.aa()
if((e&3)!==0){a8=c4.y
b3=d+"s["+i+"].objUp"
a3=a8.h(0,b3)
if(a3==null)H.q(P.u(c6+b3+c7))
p.a(a3)
a8=c4.y
b3=d+"s["+i+"].objRight"
a4=a8.h(0,b3)
if(a4==null)H.q(P.u(c6+b3+c7))
p.a(a4)
a8=c4.y
b3=d+"s["+i+"].tuScalar"
b8=a8.h(0,b3)
if(b8==null)H.q(P.u(c6+b3+c7))
o.a(b8)
a8=c4.y
b3=d+"s["+i+"].tvScalar"
b9=a8.h(0,b3)
if(b9==null)H.q(P.u(c6+b3+c7))
o.a(b9)
c0=b9
c1=b8
b0=a4
b1=a3}else{c0=c5
c1=c0
b0=c1
b1=b0}a8=(e&2)!==0
if(a8){b3=c4.y
b4=d+"s["+i+"].shadowAdj"
a3=b3.h(0,b4)
if(a3==null)H.q(P.u(c6+b4+c7))
n.a(a3)
b7=a3}else b7=c5
if((e&8)!==0){b3=c4.y
b4=d+"s["+i+"].cutoff"
a3=b3.h(0,b4)
if(a3==null)H.q(P.u(c6+b4+c7))
o.a(a3)
b3=c4.y
b4=d+"s["+i+"].coneAngle"
a4=b3.h(0,b4)
if(a4==null)H.q(P.u(c6+b4+c7))
o.a(a4)
c2=a4
c3=a3}else{c2=c5
c3=c2}if((e&4)!==0){b3=c4.y
b4=d+"s["+i+"].att0"
a3=b3.h(0,b4)
if(a3==null)H.q(P.u(c6+b4+c7))
o.a(a3)
b3=c4.y
b4=d+"s["+i+"].att1"
a4=b3.h(0,b4)
if(a4==null)H.q(P.u(c6+b4+c7))
o.a(a4)
b3=c4.y
b4=d+"s["+i+"].att2"
b8=b3.h(0,b4)
if(b8==null)H.q(P.u(c6+b4+c7))
o.a(b8)
a5=b8
a6=a4
a7=a3}else{a5=c5
a6=a5
a7=a6}if((e&1)!==0){b3=c4.y
b4=d+"sTexture2D"+i
a3=b3.h(0,b4)
if(a3==null)H.q(P.u(c6+b4+c7))
m.a(a3)
b2=a3}else b2=c5
if(a8){a8=c4.y
b3=d+"sShadow2D"+i
a3=a8.h(0,b3)
if(a3==null)H.q(P.u(c6+b3+c7))
m.a(a3)
b6=a3}else b6=c5
c.push(new A.cZ(h,a0,a1,a2,b1,b0,c1,c0,b7,c3,c2,a7,a6,a5,b2,b6))}c4.c8.l(0,e,c)
a=c4.c7
a8=c4.y
b3=d+"Count"
h=a8.h(0,b3)
if(h==null)H.q(P.u(c6+b3+c7))
a.l(0,e,h)}}}},
fM:function(a,b){}}
A.dJ.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.dV.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eE.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.eP.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.ir.prototype={
i:function(a){return this.b2}}
A.cV.prototype={}
A.cW.prototype={}
A.cY.prototype={}
A.cZ.prototype={}
A.cP.prototype={
e6:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
cI:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.b(P.u("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
fO:function(){var s,r,q,p=this,o=H.d([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.y(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dF(n,r.name,q))}p.x=new A.hF(o)},
fQ:function(){var s,r,q,p=this,o=H.d([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.y(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hk(r.type,r.size,r.name,q))}p.y=new A.jn(o)},
aJ:function(a,b,c){var s=this.a
if(a===1)return new A.fb(s,b,c)
else return A.le(s,this.r,b,a,c)},
ev:function(a,b,c){var s=this.a
if(a===1)return new A.ff(s,b,c)
else return A.le(s,this.r,b,a,c)},
ew:function(a,b,c){var s=this.a
if(a===1)return new A.fg(s,b,c)
else return A.le(s,this.r,b,a,c)},
bg:function(a,b){return new P.fH(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hk:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aJ(b,c,d)
case 5121:return s.aJ(b,c,d)
case 5122:return s.aJ(b,c,d)
case 5123:return s.aJ(b,c,d)
case 5124:return s.aJ(b,c,d)
case 5125:return s.aJ(b,c,d)
case 5126:return new A.fa(s.a,c,d)
case 35664:return new A.jj(s.a,c,d)
case 35665:return new A.fc(s.a,c,d)
case 35666:return new A.fd(s.a,c,d)
case 35667:return new A.jk(s.a,c,d)
case 35668:return new A.jl(s.a,c,d)
case 35669:return new A.jm(s.a,c,d)
case 35674:return new A.jo(s.a,c,d)
case 35675:return new A.fe(s.a,c,d)
case 35676:return new A.cX(s.a,c,d)
case 35678:return s.ev(b,c,d)
case 35680:return s.ew(b,c,d)
case 35670:throw H.b(s.bg("BOOL",c))
case 35671:throw H.b(s.bg("BOOL_VEC2",c))
case 35672:throw H.b(s.bg("BOOL_VEC3",c))
case 35673:throw H.b(s.bg("BOOL_VEC4",c))
default:throw H.b(P.u("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.f9.prototype={}
A.jn.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
S:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.M()},
M:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.fb.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.jk.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.jl.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jm.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.ji.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.fa.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.jj.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.fc.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fd.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jo.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.fe.prototype={
aj:function(a){var s=new Float32Array(H.cb(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.cX.prototype={
aj:function(a){var s=new Float32Array(H.cb(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.ff.prototype={
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fg.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.kh.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.ce(q.b,b).ce(q.d.ce(q.c,b),c)
a.sa2(0,new V.Q(p.a,p.b,p.c))
a.sdO(p.G())
q=1-b
s=1-c
a.sd2(new V.bz(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)}}
F.kr.prototype={
$2:function(a,b){return V.hA(this.a,this.b,b)}}
F.kt.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hA(-1,1,c),n=this.a.$2(b,c)
if(typeof n!=="number")return H.y(n)
q=-q*n
s=p*n
a.sa2(0,new V.Q(q,s,o))
a.sdO(new V.C(q,s,o).G())
a.sd2(new V.bz(1-c,2+c,-1,-1))}}
F.ku.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.kv.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kO.prototype={
$2:function(a,b){return 0}}
F.kP.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.y(r)
s=a.f
r=new V.C(s.a,s.b,s.c).G().A(0,this.b+r)
a.sa2(0,new V.Q(r.a,r.b,r.c))}}
F.kQ.prototype={
$1:function(a){return new V.Q(Math.cos(a),Math.sin(a),0)}}
F.kE.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.Q(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)}}
F.ks.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lK(l.$1(m),k)
k=J.lK(l.$1(m+3.141592653589793/n.c),k).W(0,j)
s=new V.C(k.a,k.b,k.c).G()
l=$.my
if(l==null){l=new V.C(1,0,0)
$.my=l
r=l}else r=l
q=s.aB(!J.G(s,r)?V.mB():r).G()
r=q.aB(s).G()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.A(0,l*k)
k=q.A(0,o*k)
a.sa2(0,j.v(0,new V.Q(l.a-k.a,l.b-k.b,l.c-k.c)))}}
F.dY.prototype={
b0:function(){var s=this
if(!s.gb1()){C.b.K(s.a.a.d.b,s)
s.a.a.Y()}s.bM()
s.bN()
s.fE()},
bQ:function(a){this.a=a
a.d.b.push(this)},
bR:function(a){this.b=a
a.d.c.push(this)},
fN:function(a){this.c=a
a.d.d.push(this)},
bM:function(){var s=this.a
if(s!=null){C.b.K(s.d.b,this)
this.a=null}},
bN:function(){var s=this.b
if(s!=null){C.b.K(s.d.c,this)
this.b=null}},
fE:function(){var s=this.c
if(s!=null){C.b.K(s.d.d,this)
this.c=null}},
gb1:function(){return this.a==null||this.b==null||this.c==null},
en:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.d0()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.dr())return p
return q.G()},
ep:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.W(0,n)
q=new V.C(o.a,o.b,o.c).G()
o=r.W(0,n)
return q.aB(new V.C(o.a,o.b,o.c).G()).G()},
bY:function(){var s,r=this
if(r.d!=null)return!0
s=r.en()
if(s==null){s=r.ep()
if(s==null)return!1}r.d=s
r.a.a.Y()
return!0},
em:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.d0()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.dr())return p
return q.G()},
eo:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.F().toString
if(Math.abs(p-0)<1e-9){j=b.W(0,e)
o=new V.C(j.a,j.b,j.c).G()
if(q.a-r.a<0)o=o.R(0)}else{n=(j-s.b)/p
j=b.W(0,e).A(0,n).v(0,e).W(0,h)
o=new V.C(j.a,j.b,j.c).G()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.R(0)}j=l.d
if(j!=null){m=j.G()
o=m.aB(o).G().aB(m).G()}return o},
bW:function(){var s,r=this
if(r.e!=null)return!0
s=r.em()
if(s==null){s=r.eo()
if(s==null)return!1}r.e=s
r.a.a.Y()
return!0},
ghe:function(a){var s=this
if(J.G(s.a,s.b))return!0
if(J.G(s.b,s.c))return!0
if(J.G(s.c,s.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var s,r,q=this
if(q.gb1())return a+"disposed"
s=a+C.a.ah(J.a3(q.a.e),0)+", "+C.a.ah(J.a3(q.b.e),0)+", "+C.a.ah(J.a3(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
M:function(){return this.E("")}}
F.i3.prototype={}
F.j2.prototype={
b4:function(a,b,c){var s,r=b.a
r.a.a.u()
r=r.e
s=c.a
s.a.a.u()
if(r==s.e){r=b.b
r.a.a.u()
r=r.e
s=c.b
s.a.a.u()
if(r==s.e){r=b.c
r.a.a.u()
r=r.e
s=c.c
s.a.a.u()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.u()
r=r.e
s=c.b
s.a.a.u()
if(r==s.e){r=b.b
r.a.a.u()
r=r.e
s=c.c
s.a.a.u()
if(r==s.e){r=b.c
r.a.a.u()
r=r.e
s=c.a
s.a.a.u()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.u()
r=r.e
s=c.c
s.a.a.u()
if(r==s.e){r=b.b
r.a.a.u()
r=r.e
s=c.a
s.a.a.u()
if(r==s.e){r=b.c
r.a.a.u()
r=r.e
s=c.b
s.a.a.u()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.ec.prototype={
b0:function(){var s=this
if(!s.gb1()){C.b.K(s.a.a.c.b,s)
s.a.a.Y()}s.bM()
s.bN()},
bQ:function(a){this.a=a
a.c.b.push(this)},
bR:function(a){this.b=a
a.c.c.push(this)},
bM:function(){var s=this.a
if(s!=null){C.b.K(s.c.b,this)
this.a=null}},
bN:function(){var s=this.b
if(s!=null){C.b.K(s.c.c,this)
this.b=null}},
gb1:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){if(this.gb1())return a+"disposed"
return a+C.a.ah(J.a3(this.a.e),0)+", "+C.a.ah(J.a3(this.b.e),0)},
M:function(){return this.E("")}}
F.ig.prototype={}
F.jh.prototype={
b4:function(a,b,c){var s,r=b.a
r.a.a.u()
r=r.e
s=c.a
s.a.a.u()
if(r==s.e){r=b.b
r.a.a.u()
r=r.e
s=c.b
s.a.a.u()
return r==s.e}else{r=b.a
r.a.a.u()
r=r.e
s=c.b
s.a.a.u()
if(r==s.e){r=b.b
r.a.a.u()
r=r.e
s=c.a
s.a.a.u()
return r==s.e}else return!1}}}
F.eB.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.ah(J.a3(s.e),0)},
M:function(){return this.E("")}}
F.iV.prototype={
gw:function(){var s=this.e
return s==null?this.e=D.P():s},
b5:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.u()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){p=e[q]
f.a.n(0,p.hh())}f.a.u()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.u()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
l=n[m]
f.b.a.a.n(0,l)
m=new F.eB()
if(l.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.J(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.u()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.u()
n=n.e
if(typeof n!=="number")return n.v()
n+=s
m=m.c
if(n>=m.length)return H.c(m,n)
i=m[n]
n=f.c.a
n.a.n(0,j)
n.a.n(0,i)
F.oa(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.u()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.u()
n=n.e
if(typeof n!=="number")return n.v()
n+=s
m=m.c
if(n>=m.length)return H.c(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.u()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
g=n[m]
m=f.d.a
m.a.n(0,j)
m.a.n(0,i)
m.a.n(0,g)
F.cs(j,i,g)}e=f.e
if(e!=null)e.al(0)},
as:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.as()||!1
if(!r.a.as())s=!1
q=r.e
if(q!=null)q.al(0)
return s},
hI:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.a.c
s=H.d(m.slice(0),H.lr(m).I("w<1>"))
for(m=t.j;s.length!==0;){r=C.b.ghw(s)
C.b.cj(s,0)
if(r!=null){q=H.d([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.c(s,p)
o=s[p]
if(o!=null&&a.b4(0,r,o)){q.push(o)
C.b.cj(s,p)}}if(q.length>1)b.b5(q)}}n.a.u()
n.c.ck()
n.d.ck()
n.b.i0()
n.c.cl(new F.jh())
n.d.cl(new F.j2())
m=n.e
if(m!=null)m.al(0)},
bU:function(){this.hI(new F.jJ(),new F.iJ())},
ca:function(){var s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.ca()
for(s=p.a.c.length-1;s>=0;--s){o=p.a.c
if(s>=o.length)return H.c(o,s)
r=o[s]
o=r.r
if(o!=null)r.sdv(new V.C(-o.a,-o.b,-o.c))
o=r.x
if(o!=null){q=new V.C(-o.a,-o.b,-o.c).G()
if(!J.G(r.x,q)){r.x=q
o=r.a
if(o!=null){o=o.e
if(o!=null)o.J(null)}}}}o=p.e
if(o!=null)o.al(0)},
hc:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.bm().a)!==0?1:0
if((s&$.bl().a)!==0)++r
if((s&$.bk().a)!==0)++r
if((s&$.bI().a)!==0)++r
if((s&$.bJ().a)!==0)++r
if((s&$.dz().a)!==0)++r
if((s&$.dA().a)!==0)++r
if((s&$.ci().a)!==0)++r
if((s&$.bj().a)!==0)++r
q=a6.gcs(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.d(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.d(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.h5(k)
i=j.gcs(j)
if(k>=m)return H.c(n,k)
n[k]=new Z.dK(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.c(g,h)
f=g[h].hG(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.c(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.cb(o)),35044)
s.bindBuffer(a3,null)
a=new Z.dL(new Z.fq(a3,b),n,a6)
a.b=H.d([],t.aZ)
if(a2.b.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.u()
a0.push(m.e)}a1=Z.lf(s,34963,a0)
a.b.push(new Z.bS(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.u()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.c(m,k)
m=m[k].b
m.a.a.u()
a0.push(m.e)}a1=Z.lf(s,34963,a0)
a.b.push(new Z.bS(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.u()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.c(m,k)
m=m[k].b
m.a.a.u()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.c(m,k)
m=m[k].c
m.a.a.u()
a0.push(m.e)}a1=Z.lf(s,34963,a0)
a.b.push(new Z.bS(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.d([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.E(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.E(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.E(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.E(r))}return C.b.j(q,"\n")},
Y:function(){var s=this.e
if(s!=null)s.J(null)}}
F.iW.prototype={
h1:function(a){var s,r,q,p,o,n=H.d([],t.b),m=a.length
if(m>0){s=a[0]
for(r=this.a,q=2;q<m;++q){p=q-1
o=a.length
if(p>=o)return H.c(a,p)
p=a[p]
if(q>=o)return H.c(a,q)
o=a[q]
r.a.n(0,s)
r.a.n(0,p)
r.a.n(0,o)
n.push(F.cs(s,p,o))}}return n},
h2:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.d([],t.b)
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.c(c,q)
k=c[q];++q
if(q>=l)return H.c(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.c(c,i)
h=c[i]
if(r<0||r>=l)return H.c(c,r)
g=c[r]
l=s.a
if(n){l.n(0,k)
s.a.n(0,j)
s.a.n(0,h)
f.push(F.cs(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cs(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cs(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.cs(j,g,k))}n=!n}p=!p}return f},
gm:function(a){return this.b.length},
cl:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.c(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.b4(0,n,l)){n.b0()
break}}}}},
ck:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=q.ghe(q)
if(r)q.b0()}},
as:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bY())q=!1
return q},
bX:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bW())q=!1
return q},
ca:function(){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.b
p.b=p.c
p.c=o
n=p.d
if(n!=null)p.d=new V.C(-n.a,-n.b,-n.c)
n=p.e
if(n!=null)p.e=new V.C(-n.a,-n.b,-n.c)
n=p.a.a.e
if(n!=null)n.J(null)}},
i:function(a){return this.M()},
E:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(a))
return C.b.j(p,"\n")},
M:function(){return this.E("")}}
F.iX.prototype={
gm:function(a){return this.b.length},
cl:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.c(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.b4(0,n,l)){n.b0()
break}}}}},
ck:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=J.G(q.a,q.b)
if(r)q.b0()}},
i:function(a){return this.M()},
E:function(a){var s,r,q=H.d([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.c(r,s)
q.push(r[s].E(a+(""+s+". ")))}return C.b.j(q,"\n")},
M:function(){return this.E("")}}
F.iY.prototype={
gm:function(a){return this.b.length},
i0:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.K(q.b.b,r)
q=r.a.a.e
if(q!=null)q.J(null)
q=r.a
if(q!=null){C.b.K(q.b.b,r)
r.a=null}}}},
i:function(a){return this.M()},
E:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(a))
return C.b.j(p,"\n")},
M:function(){return this.E("")}}
F.fn.prototype={
c0:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fo(s.cx,p,m,r,q,o,n,a,l)},
hh:function(){return this.c0(null)},
sa2:function(a,b){var s
if(!J.G(this.f,b)){this.f=b
s=this.a
if(s!=null)s.Y()}},
sdv:function(a){var s
a=a==null?null:a.G()
if(!J.G(this.r,a)){this.r=a
s=this.a
if(s!=null)s.Y()}},
sdO:function(a){var s
if(!J.G(this.z,a)){this.z=a
s=this.a
if(s!=null)s.Y()}},
sd2:function(a){var s
if(!J.G(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.Y()}},
hG:function(a){var s,r,q=this
if(a.p(0,$.bm())){s=q.f
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.bl())){s=q.r
r=t.m
if(s==null)return H.d([0,1,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.bk())){s=q.x
r=t.m
if(s==null)return H.d([0,0,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.bI())){s=q.y
r=t.m
if(s==null)return H.d([0,0],r)
else return H.d([s.a,s.b],r)}else if(a.p(0,$.bJ())){s=q.z
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.dz())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.dA())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1,1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else if(a.p(0,$.ci()))return H.d([q.ch],t.m)
else if(a.p(0,$.bj())){s=q.cx
r=t.m
if(s==null)return H.d([-1,-1,-1,-1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else return H.d([],t.m)},
bY:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d0()
r.d.F(0,new F.jO(q))
r.r=q.a.G()
q=r.a
if(q!=null){q.Y()
q=r.a.e
if(q!=null)q.al(0)}return!0},
bW:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d0()
r.d.F(0,new F.jN(q))
r.x=q.a.G()
q=r.a
if(q!=null){q.Y()
q=r.a.e
if(q!=null)q.al(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var s,r,q=this,p="-",o=H.d([],t.i)
o.push(C.a.ah(J.a3(q.e),0))
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
o.push(V.I(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.b.j(o,", ")
return a+"{"+r+"}"},
M:function(){return this.E("")}}
F.jO.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.jN.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.jE.prototype={
u:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.c(s,p)
s[p].e=q;++q}this.b=!1}},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.u("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.Y()
return!0},
h3:function(a,b,c,d,e,f){var s=F.fo(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gm:function(a){return this.c.length},
as:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bY()
return!0},
bX:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bW()
return!0},
hd:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r.G()
if(!J.G(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.J(null)}}}}return!0},
i:function(a){return this.M()},
E:function(a){var s,r,q,p
this.u()
s=H.d([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].E(a))
return C.b.j(s,"\n")},
M:function(){return this.E("")}}
F.jF.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.c(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.c(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.c(r,b)
return r[b]},
F:function(a,b){var s=this
C.b.F(s.b,b)
C.b.F(s.c,new F.jG(s,b))
C.b.F(s.d,new F.jH(s,b))},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
F.jG.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)}}
F.jH.prototype={
$1:function(a){var s=this.a
if(!J.G(a.a,s)&&!J.G(a.b,s))this.b.$1(a)}}
F.jI.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.c(r,s)
return r[s]}else{if(b<0)return H.c(r,b)
return r[b]}},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
F.jK.prototype={}
F.jJ.prototype={
b4:function(a,b,c){return J.G(b.f,c.f)}}
F.jL.prototype={}
F.iJ.prototype={
b5:function(a){var s,r,q,p=V.d0()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.C(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.G()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)a[r].sdv(p)
return null}}
F.jM.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
O.eg.prototype={
gw:function(){var s=this.fr
return s==null?this.fr=D.P():s},
ad:function(a){var s=this.fr
if(s!=null)s.J(a)},
ef:function(){return this.ad(null)},
cP:function(a){this.a=null
this.ad(a)},
fI:function(){return this.cP(null)},
eP:function(a,b){var s=new D.b5()
s.b=!0
this.ad(s)},
eR:function(a,b){var s=new D.b6()
s.b=!0
this.ad(s)},
cG:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.B(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.ga6()
n=d.h(0,p.ga6())
d.l(0,o,n==null?1:n)}m=H.d([],t.am)
d.F(0,new O.iv(f,m))
C.b.aV(m,new O.iw())
l=new H.B(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.ga6()
n=l.h(0,p.ga6())
l.l(0,o,n==null?1:n)}k=H.d([],t.M)
l.F(0,new O.ix(f,k))
C.b.aV(k,new O.iy())
j=new H.B(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.ga6()
n=j.h(0,p.ga6())
j.l(0,o,n==null?1:n)}i=H.d([],t.d1)
j.F(0,new O.iz(f,i))
C.b.aV(i,new O.iA())
h=new H.B(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.o)(e),++q){p=e[q]
r=p.ga6()
o=h.h(0,p.ga6())
h.l(0,r,o==null?1:o)}g=H.d([],t.cz)
h.F(0,new O.iB(f,g))
C.b.aV(g,new O.iC())
e=C.c.a1(f.e.a.length+3,4)
f.dy.toString
return A.oh(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
el:function(a,b){if(b!=null)if(!C.b.D(a,b)){b.a=a.length
a.push(b)}},
av:function(a,b){var s,r,q,p
for(s=this.dx.a,s=new J.a4(s,s.length);s.t();){r=s.d
r.toString
q=$.ao
r.a=q==null?$.ao=new V.Q(0,0,0):q
q=$.jD
r.b=q==null?$.jD=new V.C(0,0,1):q
q=$.jC
r.c=q==null?$.jC=new V.C(0,1,0):q
q=$.jB
r.d=q==null?$.jB=new V.C(-1,0,0):q
q=r.f
if(q!=null){p=q.aU(0,b,r)
if(p!=null){r.a=p.aT(r.a)
r.b=p.bt(r.b).G()
r.c=p.bt(r.c).G()
r.d=p.bt(r.d).G()}}}},
i2:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cG()
s=b6.fr.h(0,b5.b2)
if(s==null){s=A.og(b5,b6.a)
r=s.b
if(r.length===0)H.q(P.u("May not cache a shader with no name."))
if(b6.fr.bZ(0,r))H.q(P.u('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.l(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.bk
b5=b7.e
if(!(b5 instanceof Z.dL))b5=b7.e=null
if(b5==null||!b5.d.p(0,p)){b5=q.k4
if(b5)b7.d.as()
o=q.r1
if(o){n=b7.d
m=n.e
if(m!=null)++m.d
n.d.bX()
n.a.bX()
n=n.e
if(n!=null)n.al(0)}n=q.rx
if(n){m=b7.d
l=m.e
if(l!=null)++l.d
m.a.hd()
m=m.e
if(m!=null)m.al(0)}k=b7.d.hc(new Z.jP(b6.a),p)
k.aO($.bm()).e=b4.a.Q.c
if(b5)k.aO($.bl()).e=b4.a.cx.c
if(o)k.aO($.bk()).e=b4.a.ch.c
if(q.r2)k.aO($.bI()).e=b4.a.cy.c
if(n)k.aO($.bJ()).e=b4.a.db.c
if(q.ry)k.aO($.bj()).e=b4.a.dx.c
b7.e=k}j=H.d([],t.bw)
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.hr()
if(q.fr){b5=b4.a
n=b6.dx
n=n.ga_(n)
b5=b5.dy
b5.toString
b5.aj(n.a9(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.ga_(n)
m=b6.dx
m=b6.cx=n.A(0,m.ga_(m))
n=m}b5=b5.fr
b5.toString
b5.aj(n.a9(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.ghZ()
m=b6.dx
m=b6.ch=n.A(0,m.ga_(m))
n=m}b5=b5.fy
b5.toString
b5.aj(n.a9(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.ga_(n)
b5=b5.fx
b5.toString
b5.aj(n.a9(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.aj(C.j.a9(n,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.aj(C.j.a9(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.aj(C.j.a9(n,!0))}if(q.bj>0){i=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,i)
for(h=0;h<i;++h){b5=b4.a
n=b4.e.a
if(h>=n.length)return H.c(n,h)
n=n[h]
b5=b5.r1
if(h>=b5.length)return H.c(b5,h)
b5=b5[h]
g=new Float32Array(H.cb(n.a9(0,!0)))
b5.a.uniformMatrix4fv(b5.d,!1,g)}}if(q.a.a){b5=b4.a
n=b4.f.f
b5=b5.r2
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}if(q.k1){if(q.b.a){b5=b4.a
n=b4.r.f
b5=b5.x1
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}if(q.c.a){b5=b4.a
n=b4.x.f
b5=b5.y2
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}if(q.d.a){b5=b4.a
n=b4.y.f
b5=b5.bk
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.e.a
if(!b5)n=!1
else n=!0
if(n){n=b4.a
m=b4.z.ch
n=n.da
n.a.uniform1f(n.d,m)}if(b5){b5=b4.a
n=b4.z.f
b5=b5.d9
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.z
if(b5.length>0){f=new H.B(t.a)
for(n=b4.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.ga6()
b=f.h(0,c)
if(b==null)b=0
f.l(0,c,b+1)
a=J.cj(b4.a.c2.h(0,c),b)
l=d.gil()
a0=$.ao
l=l.aT(a0==null?$.ao=new V.Q(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gim()
a0=$.ao
l=l.aT(a0==null?$.ao=new V.Q(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaA(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.ghs()){l=d.gh7()
a0=a.e
a0.a.uniform1f(a0.d,l)
l=d.gh8()
a0=a.f
a0.a.uniform1f(a0.d,l)
l=d.gh9()
a0=a.r
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=f.h(0,m)
if(i==null)i=0
m=b4.a.c1.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.Q
if(b5.length>0){n=b6.db
a1=n.ga_(n)
a2=new H.B(t.a)
for(n=b4.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.ga6()
b=a2.h(0,c)
if(b==null)b=0
a2.l(0,c,b+1)
a=J.cj(b4.a.c4.h(0,c),b)
l=a1.bt(d.gho(d)).G()
a0=a.e
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.gaA(d)
a4=a.f
a4.a.uniform3f(a4.d,l.a,l.b,l.c)
d.gaS()
l=d.gho(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.giD()
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gcm(d)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaS()
if(!C.b.D(j,l)){l.a=j.length
j.push(l)}l=d.gaS()
a0=l.gbp(l)
if(a0){a0=a.r
a3=l.d
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=a2.h(0,m)
if(i==null)i=0
m=b4.a.c3.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.ch
if(b5.length>0){n=b6.db
a1=n.ga_(n)
a5=new H.B(t.a)
for(n=b4.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.ga6()
b=a5.h(0,c)
if(b==null)b=0
a5.l(0,c,b+1)
a=J.cj(b4.a.c6.h(0,c),b)
a6=a1.A(0,d.ga_(d))
l=d.ga_(d)
a0=$.ao
l=l.aT(a0==null?$.ao=new V.Q(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=$.ao
l=a6.aT(l==null?$.ao=new V.Q(0,0,0):l)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaA(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gaS()
l=a6.dq(0)
a0=l.a
a3=l.b
a4=l.c
a7=l.e
a8=l.f
a9=l.r
b0=l.y
b1=l.z
l=l.Q
b2=a.d
b2.toString
g=new Float32Array(H.cb(new V.ei(a0,a3,a4,a7,a8,a9,b0,b1,l).a9(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,g)
d.gaS()
l=d.gaS()
if(!C.b.D(j,l)){l.a=j.length
j.push(l)}l=d.gaS()
a0=l.gbp(l)
if(a0){a0=a.f
a0.toString
a3=l.gbp(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.ghC(l))}d.gcr()
l=d.gik()
a0=a.x
a0.a.uniform4f(a0.d,l.a,l.b,l.c,l.d)
l=d.gcr()
if(!C.b.D(j,l)){l.a=j.length
j.push(l)}l=d.gcr()
a0=l.gbp(l)
if(a0){a0=a.r
a0.toString
a3=l.gbp(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.ghC(l))}if(d.ghs()){l=d.gh7()
a0=a.y
a0.a.uniform1f(a0.d,l)
l=d.gh8()
a0=a.z
a0.a.uniform1f(a0.d,l)
l=d.gh9()
a0=a.Q
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=a5.h(0,m)
if(i==null)i=0
m=b4.a.c5.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.cx
if(b5.length>0){n=b6.db
a1=n.ga_(n)
b3=new H.B(t.a)
for(n=b4.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.ga6()
b=b3.h(0,c)
if(b==null)b=0
b3.l(0,c,b+1)
a=J.cj(b4.a.c8.h(0,c),b)
l=d.a
a0=a.b
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.b.G()
a4=a.c
a3=l.a
a0=l.b
l=l.c
a4.a.uniform3f(a4.d,a3,a0,l)
l=a1.aT(d.a)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.r
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.x!=null||!1){l=d.c
a0=a.f
a0.toString
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.d
a4=a.r
a4.toString
a3=l.a
a0=l.b
l=l.c
a4.a.uniform3f(a4.d,a3,a0,l)
l=d.z
a0=a.x
a0.a.uniform1f(a0.d,l)
l=d.Q
a0=a.y
a0.a.uniform1f(a0.d,l)}l=d.x
a0=l!=null
if(a0){if(a0)if(!C.b.D(j,l)){l.a=j.length
j.push(l)}l=d.x
a0=l!=null
if(a0&&l.d){a3=a.dx
a3.toString
a0=!a0||!l.d
a4=a3.a
a3=a3.d
if(a0)a4.uniform1i(a3,0)
else a4.uniform1i(a3,l.a)}}l=d.cy
a0=a.Q
a0.a.uniform1f(a0.d,l)
l=d.dx
a0=a.ch
a0.a.uniform1f(a0.d,l)
l=d.dy
a0=a.cx
a0.a.uniform1f(a0.d,l)
l=d.fr
a0=a.cy
a0.a.uniform1f(a0.d,l)
l=d.fx
a0=a.db
a0.a.uniform1f(a0.d,l)}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=b3.h(0,m)
if(i==null)i=0
m=b4.a.c7.h(0,m)
m.a.uniform1i(m.d,i)}}}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.ga_(n).dq(0)}b5=b5.id
b5.toString
b5.aj(n.a9(0,!0))}if(q.db){b4.el(j,b4.ch)
b5=b4.a
n=b4.ch
b5.fM(b5.dc,n)
if(q.r.a){b5=b4.a
n=b4.cx.f
b5=b5.dd
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.x.a
if(!b5)n=!1
else n=!0
if(n){n=b4.a
m=b4.cy.ch
n=n.de
n.a.uniform1f(n.d,m)}if(b5){b5=b4.a
n=b4.cy.f
b5=b5.df
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}}b5=q.y.a
n=!b5
if(n)m=!1
else m=!0
if(m){if(b5){b5=b4.a
m=b4.db.f
b5=b5.dg
b5.a.uniform1f(b5.d,m)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h){b5=j[h]
if(!b5.c&&b5.d){b5.c=!0
o.activeTexture(33984+b5.a)
o.bindTexture(3553,b5.b)}}b5=b7.e
b5.bV(b6)
b5.aQ(b6)
b5.ig(b6)
if(n)b5=!1
else b5=!0
if(b5)o.disable(3042)
for(h=0;h<j.length;++h){b5=j[h]
if(b5.c){b5.c=!1
o.activeTexture(33984+b5.a)
o.bindTexture(3553,null)}}b5=b4.a
b5.toString
o.useProgram(null)
b5.x.hp()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cG().b2}}
O.iv.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.dJ(a,C.c.a1(b+3,4)*4))}}
O.iw.prototype={
$2:function(a,b){return J.dB(a.a,b.a)}}
O.ix.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.dV(a,C.c.a1(b+3,4)*4))}}
O.iy.prototype={
$2:function(a,b){return J.dB(a.a,b.a)}}
O.iz.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.eE(a,C.c.a1(b+3,4)*4))}}
O.iA.prototype={
$2:function(a,b){return J.dB(a.a,b.a)}}
O.iB.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.eP(a,C.c.a1(b+3,4)*4))}}
O.iC.prototype={
$2:function(a,b){return J.dB(a.a,b.a)}}
O.ip.prototype={
ay:function(){var s,r=this
r.cu()
s=r.f
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.E(r.b,s,1)
s.b=!0
r.a.ad(s)}}}
O.eh.prototype={
ay:function(){},
cS:function(a){var s,r,q=this
if(!q.c.p(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.ay()
s=q.a
s.a=null
s.ad(null)}}}
O.iq.prototype={}
O.aQ.prototype={
cR:function(a){var s,r,q=this
if(!q.f.p(0,a)){s=q.f
q.f=a
r=new D.E(q.b+".color",s,a)
r.b=!0
q.a.ad(r)}},
ay:function(){this.cu()
this.cR(new V.Y(1,1,1))},
saA:function(a,b){this.cS(new A.a5(!0,!1,!1))
this.cR(b)}}
O.is.prototype={}
O.it.prototype={
ay:function(){var s,r=this
r.cv()
s=r.ch
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.E(r.b+".refraction",s,1)
s.b=!0
r.a.ad(s)}}}
O.iu.prototype={
cT:function(a){var s=this,r=s.ch
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.E(s.b+".shininess",r,a)
r.b=!0
s.a.ad(r)}},
ay:function(){this.cv()
this.cT(100)}}
O.f_.prototype={}
T.f2.prototype={}
T.j5.prototype={}
T.j6.prototype={
gw:function(){var s=this.y
return s==null?this.y=D.P():s}}
T.j7.prototype={
hH:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.j6()
r.a=0
r.b=o
r.d=r.c=!1
W.a_(s,"load",new T.j8(this,r,s,!1,o,!1,!1),!1)
return r},
fJ:function(a,b,c){var s,r,q,p
b=V.lE(b)
s=V.lE(a.width)
r=V.lE(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.kX()
q.width=s
q.height=r
p=C.i.dU(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.qk(p.getImageData(0,0,q.width,q.height))}}}
T.j8.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.fJ(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,q.f?1:0)
C.a3.i8(o,p,0,6408,6408,5121,r)
if(q.r)o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.hq()}++s.e}}
X.kW.prototype={}
X.i7.prototype={
gw:function(){var s=this.x
return s==null?this.x=D.P():s}}
X.ex.prototype={
gw:function(){var s=this.f
return s==null?this.f=D.P():s},
aI:function(a){var s=this.f
if(s!=null)s.J(a)},
ei:function(){return this.aI(null)},
saP:function(a){var s,r,q=this
if(!J.G(q.b,a)){s=q.b
if(s!=null)s.gw().K(0,q.gcB())
r=q.b
q.b=a
if(a!=null)a.gw().n(0,q.gcB())
s=new D.E("mover",r,q.b)
s.b=!0
q.aI(s)}}}
X.j4.prototype={}
V.b1.prototype={
bc:function(a){this.b=new P.i9(C.T)
this.c=null
this.d=H.d([],t.u)},
L:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.d([],t.k))
s=a.split("\n")
for(j=s.length,r=t.k,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.d([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.eu(o,0,o.length)
l=m==null?o:m
C.R.dW(n,H.lG(l," ","&nbsp;"))
l=n.style
l.color=b
C.b.gat(k.d).push(n)}},
dG:function(a,b){var s,r,q,p=this
p.d=H.d([],t.u)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bi()
r.toString
q=new H.p(s)
q=new P.bE(r.cn(new H.b8(q,q.gm(q))).a())
for(;q.t();)p.br(q.gB(q))}}
V.kN.prototype={
$1:function(a){var s=C.d.dP(this.a.ghB(),2)
if(s!=="0.00")P.lF(s+" fps")}}
V.dS.prototype={
br:function(a){var s=this
switch(a.a){case"Class":s.L(a.b,"#551")
break
case"Comment":s.L(a.b,"#777")
break
case"Id":s.L(a.b,"#111")
break
case"Num":s.L(a.b,"#191")
break
case"Reserved":s.L(a.b,"#119")
break
case"String":s.L(a.b,"#171")
break
case"Symbol":s.L(a.b,"#616")
break
case"Type":s.L(a.b,"#B11")
break
case"Whitespace":s.L(a.b,"#111")
break}},
bi:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()\\-+*%!&|=.,?:;",i="OpenDoubleStr",h="CloseDoubleStr",g="EscDoubleStr",f="OpenSingleStr",e="CloseSingleStr",d="EscSingleStr",c="Slash",b="Comment",a="EndComment",a0="MLComment",a1="MLCStar",a2="Whitespace",a3=L.jc()
a3.d=a3.k(0,p)
s=a3.k(0,p).j(0,o)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.O("a","z")
s.a.push(r)
r=K.O("A","Z")
s.a.push(r)
r=a3.k(0,o).j(0,o)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.O("0","9")
r.a.push(s)
s=K.O("a","z")
r.a.push(s)
s=K.O("A","Z")
r.a.push(s)
s=a3.k(0,p).j(0,n)
r=K.O("0","9")
s.a.push(r)
r=a3.k(0,n).j(0,n)
s=K.O("0","9")
r.a.push(s)
s=a3.k(0,n).j(0,m)
r=K.t(new H.p("."))
s.a.push(r)
r=a3.k(0,m).j(0,l)
s=K.O("0","9")
r.a.push(s)
s=a3.k(0,l).j(0,l)
r=K.O("0","9")
s.a.push(r)
r=a3.k(0,p).j(0,k)
s=K.t(new H.p(j))
r.a.push(s)
s=a3.k(0,k).j(0,k)
r=K.t(new H.p(j))
s.a.push(r)
r=a3.k(0,p).j(0,i)
s=K.t(new H.p('"'))
r.a.push(s)
s=a3.k(0,i).j(0,h)
r=K.t(new H.p('"'))
s.a.push(r)
r=a3.k(0,i).j(0,g)
s=K.t(new H.p("\\"))
r.a.push(s)
s=a3.k(0,g).j(0,i)
r=K.t(new H.p('"'))
s.a.push(r)
a3.k(0,i).j(0,i).a.push(new K.b_())
r=a3.k(0,p).j(0,f)
s=K.t(new H.p("'"))
r.a.push(s)
s=a3.k(0,f).j(0,e)
r=K.t(new H.p("'"))
s.a.push(r)
r=a3.k(0,f).j(0,d)
s=K.t(new H.p("\\"))
r.a.push(s)
s=a3.k(0,d).j(0,f)
r=K.t(new H.p("'"))
s.a.push(r)
a3.k(0,f).j(0,f).a.push(new K.b_())
r=a3.k(0,p).j(0,c)
s=K.t(new H.p("/"))
r.a.push(s)
s=a3.k(0,c).j(0,b)
r=K.t(new H.p("/"))
s.a.push(r)
r=a3.k(0,b).j(0,a)
s=K.t(new H.p("\n"))
r.a.push(s)
s=a3.k(0,b).j(0,b)
r=new K.a9()
q=t.B
r.a=H.d([],q)
s.a.push(r)
s=K.t(new H.p("\n"))
r.a.push(s)
s=a3.k(0,c).j(0,a0)
r=K.t(new H.p("*"))
s.a.push(r)
r=a3.k(0,a0).j(0,a1)
s=K.t(new H.p("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a0)
r=new K.a9()
r.a=H.d([],q)
s.a.push(r)
s=K.t(new H.p("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a)
r=K.t(new H.p("/"))
s.a.push(r)
r=a3.k(0,p).j(0,a2)
s=K.t(new H.p(" \n\t"))
r.a.push(s)
s=a3.k(0,a2).j(0,a2)
r=K.t(new H.p(" \n\t"))
s.a.push(r)
r=a3.k(0,n)
r.d=r.a.N("Num")
r=a3.k(0,l)
r.d=r.a.N("Num")
r=a3.k(0,k)
r.d=r.a.N("Symbol")
r=a3.k(0,h)
r.d=r.a.N("String")
r=a3.k(0,e)
r.d=r.a.N("String")
r=a3.k(0,a)
r.d=r.a.N(b)
r=a3.k(0,a2)
r.d=r.a.N(a2)
r=a3.k(0,o)
r=r.d=r.a.N(o)
s=t.i
r.aE(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aE(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aE(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a3}}
V.e1.prototype={
br:function(a){var s=this
switch(a.a){case"Builtin":s.L(a.b,"#411")
break
case"Comment":s.L(a.b,"#777")
break
case"Id":s.L(a.b,"#111")
break
case"Num":s.L(a.b,"#191")
break
case"Preprocess":s.L(a.b,"#737")
break
case"Reserved":s.L(a.b,"#119")
break
case"Symbol":s.L(a.b,"#611")
break
case"Type":s.L(a.b,"#171")
break
case"Whitespace":s.L(a.b,"#111")
break}},
bi:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()[]\\-+*%!&|=.,?:;",i="Slash",h="Comment",g="EndComment",f="Preprocess",e="EndPreprocess",d="Whitespace",c=L.jc()
c.d=c.k(0,p)
s=c.k(0,p).j(0,o)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.O("a","z")
s.a.push(r)
r=K.O("A","Z")
s.a.push(r)
r=c.k(0,o).j(0,o)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.O("0","9")
r.a.push(s)
s=K.O("a","z")
r.a.push(s)
s=K.O("A","Z")
r.a.push(s)
s=c.k(0,p).j(0,n)
r=K.O("0","9")
s.a.push(r)
r=c.k(0,n).j(0,n)
s=K.O("0","9")
r.a.push(s)
s=c.k(0,n).j(0,m)
r=K.t(new H.p("."))
s.a.push(r)
r=c.k(0,m).j(0,l)
s=K.O("0","9")
r.a.push(s)
s=c.k(0,l).j(0,l)
r=K.O("0","9")
s.a.push(r)
r=c.k(0,p).j(0,k)
s=K.t(new H.p(j))
r.a.push(s)
s=c.k(0,k).j(0,k)
r=K.t(new H.p(j))
s.a.push(r)
r=c.k(0,p).j(0,i)
s=K.t(new H.p("/"))
r.a.push(s)
s=c.k(0,i).j(0,h)
r=K.t(new H.p("/"))
s.a.push(r)
c.k(0,i).j(0,k).a.push(new K.b_())
r=c.k(0,h).j(0,g)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,h).j(0,h)
r=new K.a9()
q=t.B
r.a=H.d([],q)
s.a.push(r)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,p).j(0,f)
r=K.t(new H.p("#"))
s.a.push(r)
r=c.k(0,f).j(0,f)
s=new K.a9()
s.a=H.d([],q)
r.a.push(s)
r=K.t(new H.p("\n"))
s.a.push(r)
r=c.k(0,f).j(0,e)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,p).j(0,d)
r=K.t(new H.p(" \n\t"))
s.a.push(r)
r=c.k(0,d).j(0,d)
s=K.t(new H.p(" \n\t"))
r.a.push(s)
s=c.k(0,n)
s.d=s.a.N("Num")
s=c.k(0,l)
s.d=s.a.N("Num")
s=c.k(0,k)
s.d=s.a.N("Symbol")
s=c.k(0,g)
s.d=s.a.N(h)
s=c.k(0,e)
s.d=s.a.N(f)
s=c.k(0,d)
s.d=s.a.N(d)
s=c.k(0,o)
s=s.d=s.a.N(o)
r=t.i
s.aE(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],r))
s.aE(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],r))
s.aE(0,"Builtin",H.d(["gl_FragColor","gl_Position"],r))
return c}}
V.e3.prototype={
br:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.L(a.b,"#911")
s.L("=",r)
break
case"Id":s.L(a.b,r)
break
case"Other":s.L(a.b,r)
break
case"Reserved":s.L(a.b,"#119")
break
case"String":s.L(a.b,"#171")
break
case"Symbol":s.L(a.b,"#616")
break}},
bi:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.jc()
j.d=j.k(0,q)
s=j.k(0,q).j(0,p)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.O("a","z")
s.a.push(r)
r=K.O("A","Z")
s.a.push(r)
r=j.k(0,p).j(0,p)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.O("0","9")
r.a.push(s)
s=K.O("a","z")
r.a.push(s)
s=K.O("A","Z")
r.a.push(s)
s=j.k(0,p).j(0,o)
r=K.t(new H.p("="))
s.a.push(r)
s.c=!0
s=j.k(0,q).j(0,n)
r=K.t(new H.p("</\\-!>="))
s.a.push(r)
r=j.k(0,n).j(0,n)
s=K.t(new H.p("</\\-!>="))
r.a.push(s)
s=j.k(0,q).j(0,m)
r=K.t(new H.p('"'))
s.a.push(r)
r=j.k(0,m).j(0,l)
s=K.t(new H.p('"'))
r.a.push(s)
s=j.k(0,m).j(0,"EscStr")
r=K.t(new H.p("\\"))
s.a.push(r)
r=j.k(0,"EscStr").j(0,m)
s=K.t(new H.p('"'))
r.a.push(s)
j.k(0,m).j(0,m).a.push(new K.b_())
j.k(0,q).j(0,k).a.push(new K.b_())
s=j.k(0,k).j(0,k)
r=new K.a9()
r.a=H.d([],t.B)
s.a.push(r)
s=K.t(new H.p('</\\-!>=_"'))
r.a.push(s)
s=K.O("a","z")
r.a.push(s)
s=K.O("A","Z")
r.a.push(s)
s=j.k(0,n)
s.d=s.a.N("Symbol")
s=j.k(0,l)
s.d=s.a.N("String")
s=j.k(0,p)
r=s.a.N(p)
s.d=r
r.aE(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],t.i))
r=j.k(0,o)
r.d=r.a.N(o)
r=j.k(0,k)
r.d=r.a.N(k)
return j}}
V.ez.prototype={
dG:function(a,b){this.d=H.d([],t.u)
this.L(C.b.j(b,"\n"),"#111")},
br:function(a){},
bi:function(){return null}}
V.iM.prototype={
cZ:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.mr().gci().h(0,H.f(s))
if(r==null)if(d){c.$0()
k.cY(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.kU(k.c).n(0,o)
m=W.o3("radio")
m.checked=q
m.name=s
W.a_(m,"change",new V.iN(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.kU(k.c).n(0,p.createElement("br"))},
b_:function(a,b,c){return this.cZ(a,b,c,!1)},
cY:function(a){var s,r,q=P.mr(),p=t.X,o=P.od(q.gci(),p,p)
o.l(0,this.a,a)
s=q.dL(0,o)
p=window.history
r=s.gbS()
p.toString
p.replaceState(new P.k4([],[]).bu(""),"",r)}}
V.iN.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.cY(s.d)}}}
V.iZ.prototype={
e7:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.a_(o,"scroll",new V.j0(m),!1)},
d0:function(a){var s,r,q,p,o,n,m,l
this.fP()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hF(a)
q.toString
p=new H.p(p)
p=new P.bE(q.cn(new H.b8(p,p.gm(p))).a())
for(;p.t();){q=p.gB(p)
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
if(H.ng(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.c(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kc(C.x,q,C.e,!1)
m=s.createElement("a")
m.className="linkPar"
m.href="#"+H.f(l)
m.textContent=q
r.appendChild(m)}break
case"Other":o=s.createElement("div")
o.className="normalPar"
o.textContent=q.b
r.appendChild(o)
break}}this.a.appendChild(r)},
dT:function(a){var s,r,q,p=new V.dS("dart")
p.bc("dart")
s=new V.e1("glsl")
s.bc("glsl")
r=new V.e3("html")
r.bc("html")
q=C.b.hx(H.d([p,s,r],t.b7),new V.j1(a))
if(q!=null)return q
p=new V.ez("plain")
p.bc("plain")
return p},
d_:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.d([],t.V)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.dy(q).a3(q,"+")){b2[r]=C.a.a7(q,1)
a8.push(1)
s=!0}else if(C.a.a3(q,"-")){b2[r]=C.a.a7(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.dT(b0)
p.dG(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.kc(C.x,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lM()
h.href="#"+H.f(l)
h.textContent=a9
i.appendChild(h)
j.appendChild(i)
k.appendChild(j)
m.appendChild(k)
if(s)for(g=b1,f=g,r=0;e=p.d,r<e.length;++r){q=e[r]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className="codeLineNums codeLineLight"
b=o.createElement("td")
b.className=a6
if(r>=a8.length)return H.c(a8,r)
a=a8[r]
if(a===0){++f;++g
c.textContent=""+f
b.textContent=""+g}else if(a>0){d.className="codeTableRow codeLineLightGreen"
c.className="codeLineNums codeLineGreen codeLineCenter"
b.className="codeLineNums codeLineGreen";++g
c.textContent="+"
b.textContent=""+g}else if(a<0){d.className="codeTableRow codeLineLightRed"
c.className="codeLineNums codeLineRed"
b.className="codeLineNums codeLineRed codeLineCenter";++f
c.textContent=""+f
b.textContent="-"}a0=o.createElement("td")
a0.className=a7
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.o)(q),++a1)a0.appendChild(q[a1])
d.appendChild(c)
d.appendChild(b)
d.appendChild(a0)
m.appendChild(d)}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.o)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.b.gO(q);a4.t();)b.appendChild(a4.gB(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
h_:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
k.id="shellTable"
s=k.style
s.width="100%"
s.padding="0px"
s.marginLeft=m
s.marginRight=m
this.a.appendChild(k)
r=k.insertRow(-1)
s=t.bY
q=s.a(r.insertCell(-1)).style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=m
q.marginRight=m
for(p=0;p<1;++p){o=l.createElement("div")
o.id=a[p]
q=o.style
q.textAlign="left"
q=o.style
q.verticalAlign="top"
n=s.a(r.insertCell(-1))
q=n.style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=m
q.marginRight=m
n.appendChild(o)}},
fP:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=L.jc()
s.d=s.k(0,o)
r=s.k(0,o).j(0,n)
q=K.t(new H.p("*"))
r.a.push(q)
r.c=!0
r=s.k(0,n).j(0,n)
q=new K.a9()
p=t.B
q.a=H.d([],p)
r.a.push(q)
r=K.t(new H.p("*"))
q.a.push(r)
r=s.k(0,n).j(0,"BoldEnd")
q=K.t(new H.p("*"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,m)
q=K.t(new H.p("_"))
r.a.push(q)
r.c=!0
r=s.k(0,m).j(0,m)
q=new K.a9()
q.a=H.d([],p)
r.a.push(q)
r=K.t(new H.p("_"))
q.a.push(r)
r=s.k(0,m).j(0,l)
q=K.t(new H.p("_"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,k)
q=K.t(new H.p("`"))
r.a.push(q)
r.c=!0
r=s.k(0,k).j(0,k)
q=new K.a9()
q.a=H.d([],p)
r.a.push(q)
r=K.t(new H.p("`"))
q.a.push(r)
r=s.k(0,k).j(0,"CodeEnd")
q=K.t(new H.p("`"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,j)
q=K.t(new H.p("["))
r.a.push(q)
r.c=!0
r=s.k(0,j).j(0,i)
q=K.t(new H.p("|"))
r.a.push(q)
q=s.k(0,j).j(0,h)
r=K.t(new H.p("]"))
q.a.push(r)
q.c=!0
q=s.k(0,j).j(0,j)
r=new K.a9()
r.a=H.d([],p)
q.a.push(r)
q=K.t(new H.p("|]"))
r.a.push(q)
q=s.k(0,i).j(0,h)
r=K.t(new H.p("]"))
q.a.push(r)
q.c=!0
q=s.k(0,i).j(0,i)
r=new K.a9()
r.a=H.d([],p)
q.a.push(r)
q=K.t(new H.p("|]"))
r.a.push(q)
s.k(0,o).j(0,g).a.push(new K.b_())
q=s.k(0,g).j(0,g)
r=new K.a9()
r.a=H.d([],p)
q.a.push(r)
q=K.t(new H.p("*_`["))
r.a.push(q)
q=s.k(0,"BoldEnd")
q.d=q.a.N(n)
q=s.k(0,l)
q.d=q.a.N(m)
q=s.k(0,"CodeEnd")
q.d=q.a.N(k)
q=s.k(0,h)
q.d=q.a.N("Link")
q=s.k(0,g)
q.d=q.a.N(g)
this.b=s}}
V.j0.prototype={
$1:function(a){P.mn(C.n,new V.j_(this.a))}}
V.j_.prototype={
$0:function(){var s=C.d.am(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
V.j1.prototype={
$1:function(a){return a.a===this.a}}
L.kF.prototype={
$0:function(){this.a.sac(0,F.ly(1,null,null,1))}}
L.kG.prototype={
$0:function(){this.a.sac(0,F.lz(1,!0,!0,40,1))}}
L.kH.prototype={
$0:function(){this.a.sac(0,F.lz(1,!0,!1,40,0))}}
L.kI.prototype={
$0:function(){this.a.sac(0,F.qD(6,6))}}
L.kJ.prototype={
$0:function(){this.a.sac(0,F.nh())}}
L.kK.prototype={
$0:function(){this.a.sac(0,F.qy())}}
L.kL.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a,p=t.s
s.d_("Vertex Shader","glsl",0,H.d((q==null?null:q.c).split("\n"),p))
r=r.a
s.d_("Fragment Shader","glsl",0,H.d((r==null?null:r.d).split("\n"),p))}};(function aliases(){var s=J.a.prototype
s.dZ=s.i
s=J.b7.prototype
s.e0=s.i
s=P.h.prototype
s.e_=s.bv
s=W.D.prototype
s.bx=s.af
s=W.dd.prototype
s.e1=s.ar
s=K.e2.prototype
s.dY=s.aD
s.ct=s.i
s=O.eh.prototype
s.cu=s.ay
s=O.aQ.prototype
s.cv=s.ay})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"py","o8",21)
r(P,"qd","oK",8)
r(P,"qe","oL",8)
r(P,"qf","oM",8)
q(P,"n4","q8",9)
r(W,"rO","hX",22)
p(W,"qr",4,null,["$4"],["oN"],14,0)
p(W,"qs",4,null,["$4"],["oO"],14,0)
var j
o(j=E.bs.prototype,"gdC",0,0,null,["$1","$0"],["dD","hQ"],0,0)
o(j,"gdE",0,0,null,["$1","$0"],["dF","hR"],0,0)
o(j,"gdA",0,0,null,["$1","$0"],["dB","hP"],0,0)
o(j,"gdw",0,0,null,["$1","$0"],["dz","hM"],0,0)
n(j,"ghK","hL",4)
n(j,"ghN","hO",4)
o(j=E.f3.prototype,"gcw",0,0,null,["$1","$0"],["cA","cz"],0,0)
m(j,"gi4","dM",9)
l(j=X.fm.prototype,"gf4","f5",5)
l(j,"geS","eT",5)
l(j,"geZ","f_",2)
l(j,"gf8","f9",10)
l(j,"gf6","f7",10)
l(j,"gfc","fd",2)
l(j,"gfg","fh",2)
l(j,"gf2","f3",2)
l(j,"gfe","ff",2)
l(j,"gf0","f1",2)
l(j,"gfi","fj",19)
l(j,"gfk","fl",5)
l(j,"gfA","fB",6)
l(j,"gfu","fv",6)
l(j,"gfw","fz",6)
o(j=D.cz.prototype,"gcN",0,0,null,["$1","$0"],["cO","fa"],0,0)
l(j,"gfn","fo",20)
n(j,"geM","eN",11)
n(j,"gfs","ft",11)
o(D.bA.prototype,"gbK",0,0,null,["$1","$0"],["X","eU"],0,0)
k(V.au.prototype,"gm","b3",7)
k(V.C.prototype,"gm","b3",7)
k(V.d1.prototype,"gm","b3",7)
o(j=U.bQ.prototype,"gbd",0,0,null,["$1","$0"],["U","ao"],0,0)
n(j,"gea","eb",12)
n(j,"gfp","fq",12)
o(j=U.d_.prototype,"gbd",0,0,null,["$1","$0"],["U","ao"],0,0)
l(j,"geF","eG",1)
l(j,"geH","eI",1)
l(j,"geJ","eK",1)
l(j,"geA","eB",1)
l(j,"geC","eD",1)
l(j,"gfW","fX",1)
l(j,"gfU","fV",1)
l(j,"gfS","fT",1)
o(j=M.dX.prototype,"gap",0,0,null,["$1","$0"],["aw","ec"],0,0)
n(j,"geV","eW",4)
n(j,"geX","eY",4)
o(j=O.eg.prototype,"gee",0,0,null,["$1","$0"],["ad","ef"],0,0)
o(j,"gfH",0,0,null,["$1","$0"],["cP","fI"],0,0)
n(j,"geO","eP",13)
n(j,"geQ","eR",13)
o(X.ex.prototype,"gcB",0,0,null,["$1","$0"],["aI","ei"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.M,null)
q(P.M,[H.l5,J.a,J.a4,P.K,P.d6,P.h,H.b8,P.e5,H.ct,H.fj,H.cl,H.jf,H.iK,H.h7,H.bq,P.U,H.ih,H.ed,H.e7,H.aq,H.fK,P.dj,P.c9,P.bE,P.fs,P.cR,P.eU,P.cT,P.kg,P.dc,P.jX,P.d5,P.i,P.hm,P.cG,P.dN,P.ia,P.ke,P.kd,P.ax,P.ag,P.R,P.br,P.ew,P.cQ,P.fH,P.i6,P.az,P.n,P.H,P.an,P.x,P.S,P.bF,P.jq,P.h1,W.hO,W.l0,W.lg,W.c8,W.L,W.cN,W.dd,W.hc,W.cu,W.aj,W.k0,W.hn,P.k3,P.dl,P.h_,P.bd,K.b_,K.e2,K.io,K.iO,K.iU,L.eR,L.f4,L.f5,L.jb,O.af,O.cI,E.hK,E.bs,E.bN,E.bZ,E.fE,E.iP,E.f3,Z.fq,Z.jP,Z.dL,Z.bS,Z.bD,D.hL,D.bO,D.Z,X.dM,X.e9,X.ie,X.il,X.bV,X.iG,X.jd,X.fm,D.dI,D.dU,D.T,D.eC,D.bA,V.Y,V.aL,V.i_,V.ei,V.b9,V.ak,V.Q,V.bz,V.eH,V.au,V.C,V.d1,U.d_,M.dX,A.dF,A.hF,A.a5,A.dJ,A.dV,A.eE,A.eP,A.ir,A.cV,A.cW,A.cY,A.cZ,A.f9,A.jn,F.dY,F.i3,F.ec,F.ig,F.eB,F.iV,F.iW,F.iX,F.iY,F.fn,F.jE,F.jF,F.jI,F.jK,F.jL,F.jM,O.f_,O.eh,O.is,T.j7,X.kW,X.j4,X.ex,V.b1,V.iM,V.iZ])
q(J.a,[J.e6,J.cy,J.b7,J.w,J.bv,J.aN,H.cJ,H.V,W.e,W.hD,W.bn,W.aM,W.J,W.fx,W.am,W.hR,W.hS,W.fz,W.cp,W.fB,W.hT,W.j,W.fI,W.aA,W.i8,W.fM,W.bu,W.ik,W.iD,W.fQ,W.fR,W.aC,W.fS,W.fU,W.aD,W.fY,W.h0,W.aE,W.h2,W.aF,W.h8,W.as,W.he,W.ja,W.aG,W.hg,W.je,W.jv,W.ho,W.hq,W.hs,W.hu,W.hw,P.aO,P.fO,P.aR,P.fW,P.iL,P.h9,P.aS,P.hi,P.hG,P.fu,P.eI,P.h5])
q(J.b7,[J.ey,J.bC,J.aB])
r(J.ic,J.w)
q(J.bv,[J.cx,J.cw])
q(P.K,[H.ea,H.es,H.e8,H.fi,H.eK,H.fF,P.dE,P.et,P.ae,P.fk,P.fh,P.c2,P.dO,P.dR])
r(P.cC,P.d6)
q(P.cC,[H.c4,W.fv,W.a0,P.e_])
r(H.p,H.c4)
q(P.h,[H.k,H.aP,H.aV,P.cv])
q(H.k,[H.cD,H.cA])
r(H.cq,H.aP)
q(P.e5,[H.ee,H.fr])
r(H.cH,H.cD)
r(H.cm,H.cl)
q(H.bq,[H.eZ,H.id,H.ky,H.kz,H.kA,P.jR,P.jQ,P.jS,P.jT,P.k9,P.k8,P.kp,P.jZ,P.k_,P.ii,P.im,P.jy,P.jz,P.hU,P.hV,P.ju,P.jr,P.js,P.jt,P.kb,P.ka,P.kk,P.kj,P.kl,P.km,W.hW,W.iE,W.iF,W.iT,W.j3,W.jU,W.iI,W.iH,W.k1,W.k2,W.k7,W.kf,P.k5,P.k6,P.kq,P.i4,P.i5,P.hH,E.iQ,E.iR,E.iS,E.j9,D.i1,D.i2,F.kh,F.kr,F.kt,F.ku,F.kv,F.kO,F.kP,F.kQ,F.kE,F.ks,F.jO,F.jN,F.jG,F.jH,O.iv,O.iw,O.ix,O.iy,O.iz,O.iA,O.iB,O.iC,T.j8,V.kN,V.iN,V.j0,V.j_,V.j1,L.kF,L.kG,L.kH,L.kI,L.kJ,L.kK,L.kL])
q(H.eZ,[H.eS,H.bM])
r(P.cF,P.U)
q(P.cF,[H.B,W.ft])
r(H.bX,H.V)
q(H.bX,[H.d8,H.da])
r(H.d9,H.d8)
r(H.bx,H.d9)
r(H.db,H.da)
r(H.cK,H.db)
q(H.cK,[H.en,H.eo,H.ep,H.eq,H.er,H.cL,H.bY])
r(H.dk,H.fF)
r(P.dg,P.cv)
r(P.jY,P.kg)
r(P.d4,P.dc)
r(P.dp,P.cG)
r(P.c5,P.dp)
q(P.dN,[P.hI,P.hY])
r(P.dQ,P.eU)
q(P.dQ,[P.hJ,P.i9,P.jA,P.jx])
r(P.jw,P.hY)
q(P.R,[P.X,P.l])
q(P.ae,[P.c0,P.e4])
r(P.fy,P.bF)
q(W.e,[W.v,W.dZ,W.bU,W.ar,W.de,W.at,W.aa,W.dh,W.fp,W.c6,P.dH,P.b0])
q(W.v,[W.D,W.ay,W.c7])
q(W.D,[W.r,P.m])
q(W.r,[W.dC,W.dD,W.bL,W.bo,W.bp,W.b3,W.e0,W.bR,W.bT,W.eL,W.bc,W.cS,W.eX,W.eY,W.c3])
r(W.hN,W.aM)
r(W.cn,W.fx)
q(W.am,[W.hP,W.hQ])
r(W.fA,W.fz)
r(W.co,W.fA)
r(W.fC,W.fB)
r(W.dW,W.fC)
r(W.ah,W.bn)
r(W.fJ,W.fI)
r(W.bP,W.fJ)
r(W.fN,W.fM)
r(W.bt,W.fN)
r(W.aU,W.j)
q(W.aU,[W.bw,W.ai,W.bB])
r(W.ek,W.fQ)
r(W.el,W.fR)
r(W.fT,W.fS)
r(W.em,W.fT)
r(W.fV,W.fU)
r(W.cM,W.fV)
r(W.fZ,W.fY)
r(W.eA,W.fZ)
r(W.eJ,W.h0)
r(W.df,W.de)
r(W.eN,W.df)
r(W.h3,W.h2)
r(W.eO,W.h3)
r(W.eT,W.h8)
r(W.hf,W.he)
r(W.f0,W.hf)
r(W.di,W.dh)
r(W.f1,W.di)
r(W.hh,W.hg)
r(W.f6,W.hh)
r(W.be,W.ai)
r(W.hp,W.ho)
r(W.fw,W.hp)
r(W.d2,W.cp)
r(W.hr,W.hq)
r(W.fL,W.hr)
r(W.ht,W.hs)
r(W.d7,W.ht)
r(W.hv,W.hu)
r(W.h4,W.hv)
r(W.hx,W.hw)
r(W.hb,W.hx)
r(W.fD,W.ft)
r(W.fG,P.cR)
r(W.hd,W.dd)
r(P.k4,P.k3)
r(P.a7,P.h_)
r(P.fP,P.fO)
r(P.eb,P.fP)
r(P.fX,P.fW)
r(P.eu,P.fX)
r(P.c1,P.m)
r(P.ha,P.h9)
r(P.eV,P.ha)
r(P.hj,P.hi)
r(P.f7,P.hj)
r(P.dG,P.fu)
r(P.ev,P.b0)
r(P.h6,P.h5)
r(P.eQ,P.h6)
q(K.e2,[K.a9,L.f8])
q(E.hK,[Z.dK,A.cP,T.f2])
q(D.Z,[D.b5,D.b6,D.E,X.eD])
q(X.eD,[X.cE,X.bW,X.cU])
q(O.af,[D.cz,U.bQ])
q(D.hL,[U.hM,U.a6])
r(U.ck,U.a6)
r(A.ef,A.cP)
q(A.f9,[A.fb,A.jk,A.jl,A.jm,A.ji,A.fa,A.jj,A.fc,A.fd,A.jo,A.fe,A.cX,A.ff,A.fg])
r(F.j2,F.i3)
r(F.jh,F.ig)
r(F.jJ,F.jK)
r(F.iJ,F.jL)
r(O.eg,O.f_)
q(O.eh,[O.ip,O.iq,O.aQ])
q(O.aQ,[O.it,O.iu])
r(T.j5,T.f2)
r(T.j6,T.j5)
r(X.i7,X.j4)
q(V.b1,[V.dS,V.e1,V.e3,V.ez])
s(H.c4,H.fj)
s(H.d8,P.i)
s(H.d9,H.ct)
s(H.da,P.i)
s(H.db,H.ct)
s(P.d6,P.i)
s(P.dp,P.hm)
s(W.fx,W.hO)
s(W.fz,P.i)
s(W.fA,W.L)
s(W.fB,P.i)
s(W.fC,W.L)
s(W.fI,P.i)
s(W.fJ,W.L)
s(W.fM,P.i)
s(W.fN,W.L)
s(W.fQ,P.U)
s(W.fR,P.U)
s(W.fS,P.i)
s(W.fT,W.L)
s(W.fU,P.i)
s(W.fV,W.L)
s(W.fY,P.i)
s(W.fZ,W.L)
s(W.h0,P.U)
s(W.de,P.i)
s(W.df,W.L)
s(W.h2,P.i)
s(W.h3,W.L)
s(W.h8,P.U)
s(W.he,P.i)
s(W.hf,W.L)
s(W.dh,P.i)
s(W.di,W.L)
s(W.hg,P.i)
s(W.hh,W.L)
s(W.ho,P.i)
s(W.hp,W.L)
s(W.hq,P.i)
s(W.hr,W.L)
s(W.hs,P.i)
s(W.ht,W.L)
s(W.hu,P.i)
s(W.hv,W.L)
s(W.hw,P.i)
s(W.hx,W.L)
s(P.fO,P.i)
s(P.fP,W.L)
s(P.fW,P.i)
s(P.fX,W.L)
s(P.h9,P.i)
s(P.ha,W.L)
s(P.hi,P.i)
s(P.hj,W.L)
s(P.fu,P.U)
s(P.h5,P.i)
s(P.h6,W.L)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",X:"double",R:"num",x:"String",ax:"bool",an:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([Z*])","~(Z*)","~(ai*)","an(@,@)","~(l*,h<bs*>*)","~(j*)","~(bB*)","X*()","~(~())","~()","~(bw*)","~(l*,h<T*>*)","~(l*,h<a6*>*)","~(l*,h<b9*>*)","ax(D,x,x,c8)","@(@)","an(@)","an(M?,M?)","bd(@,@)","~(be*)","ax*(h<T*>*)","l(@,@)","x(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.p6(v.typeUniverse,JSON.parse('{"aB":"b7","ey":"b7","bC":"b7","qJ":"j","qT":"j","qL":"b0","qK":"e","r_":"e","r1":"e","qI":"m","qU":"m","qM":"r","qX":"r","qV":"v","qS":"v","rr":"aa","qQ":"aU","qN":"ay","r2":"ay","r0":"ai","qW":"bt","qZ":"bx","qY":"V","e6":{"ax":[]},"b7":{"lZ":[],"az":[]},"w":{"n":["1"],"k":["1"],"h":["1"]},"ic":{"w":["1"],"n":["1"],"k":["1"],"h":["1"]},"bv":{"X":[],"R":[]},"cx":{"X":[],"l":[],"R":[]},"cw":{"X":[],"R":[]},"aN":{"x":[]},"ea":{"K":[]},"p":{"i":["l"],"n":["l"],"k":["l"],"h":["l"],"i.E":"l"},"k":{"h":["1"]},"cD":{"k":["1"],"h":["1"]},"aP":{"h":["2"],"h.E":"2"},"cq":{"aP":["1","2"],"k":["2"],"h":["2"],"h.E":"2"},"cH":{"cD":["2"],"k":["2"],"h":["2"],"h.E":"2"},"aV":{"h":["1"],"h.E":"1"},"c4":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"cl":{"H":["1","2"]},"cm":{"H":["1","2"]},"es":{"K":[]},"e8":{"K":[]},"fi":{"K":[]},"bq":{"az":[]},"eZ":{"az":[]},"eS":{"az":[]},"bM":{"az":[]},"eK":{"K":[]},"B":{"U":["1","2"],"H":["1","2"]},"cA":{"k":["1"],"h":["1"],"h.E":"1"},"e7":{"mg":[]},"bX":{"z":["1"],"V":[]},"bx":{"i":["X"],"z":["X"],"n":["X"],"V":[],"k":["X"],"h":["X"],"i.E":"X"},"cK":{"i":["l"],"z":["l"],"n":["l"],"V":[],"k":["l"],"h":["l"]},"en":{"i":["l"],"z":["l"],"n":["l"],"V":[],"k":["l"],"h":["l"],"i.E":"l"},"eo":{"i":["l"],"z":["l"],"n":["l"],"V":[],"k":["l"],"h":["l"],"i.E":"l"},"ep":{"i":["l"],"z":["l"],"n":["l"],"V":[],"k":["l"],"h":["l"],"i.E":"l"},"eq":{"i":["l"],"z":["l"],"n":["l"],"V":[],"k":["l"],"h":["l"],"i.E":"l"},"er":{"i":["l"],"z":["l"],"n":["l"],"V":[],"k":["l"],"h":["l"],"i.E":"l"},"cL":{"i":["l"],"z":["l"],"n":["l"],"V":[],"k":["l"],"h":["l"],"i.E":"l"},"bY":{"i":["l"],"bd":[],"z":["l"],"n":["l"],"V":[],"k":["l"],"h":["l"],"i.E":"l"},"fF":{"K":[]},"dk":{"K":[]},"dj":{"cT":[]},"dg":{"h":["1"],"h.E":"1"},"d4":{"dc":["1"],"k":["1"],"h":["1"]},"cv":{"h":["1"]},"cC":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"cF":{"U":["1","2"],"H":["1","2"]},"U":{"H":["1","2"]},"cG":{"H":["1","2"]},"c5":{"H":["1","2"]},"dc":{"k":["1"],"h":["1"]},"X":{"R":[]},"dE":{"K":[]},"et":{"K":[]},"ae":{"K":[]},"c0":{"K":[]},"e4":{"K":[]},"fk":{"K":[]},"fh":{"K":[]},"c2":{"K":[]},"dO":{"K":[]},"ew":{"K":[]},"cQ":{"K":[]},"dR":{"K":[]},"l":{"R":[]},"n":{"k":["1"],"h":["1"]},"bF":{"fl":[]},"h1":{"fl":[]},"fy":{"fl":[]},"r":{"D":[],"v":[],"e":[]},"dC":{"D":[],"v":[],"e":[]},"dD":{"D":[],"v":[],"e":[]},"bL":{"D":[],"v":[],"e":[]},"bo":{"D":[],"v":[],"e":[]},"bp":{"D":[],"v":[],"e":[]},"ay":{"v":[],"e":[]},"b3":{"D":[],"v":[],"e":[]},"co":{"i":["a7<R>"],"n":["a7<R>"],"z":["a7<R>"],"k":["a7<R>"],"h":["a7<R>"],"i.E":"a7<R>"},"cp":{"a7":["R"]},"dW":{"i":["x"],"n":["x"],"z":["x"],"k":["x"],"h":["x"],"i.E":"x"},"fv":{"i":["D"],"n":["D"],"k":["D"],"h":["D"],"i.E":"D"},"D":{"v":[],"e":[]},"ah":{"bn":[]},"bP":{"i":["ah"],"n":["ah"],"z":["ah"],"k":["ah"],"h":["ah"],"i.E":"ah"},"dZ":{"e":[]},"e0":{"D":[],"v":[],"e":[]},"bt":{"i":["v"],"n":["v"],"z":["v"],"k":["v"],"h":["v"],"i.E":"v"},"bR":{"D":[],"v":[],"e":[]},"bT":{"D":[],"v":[],"e":[]},"bw":{"j":[]},"bU":{"e":[]},"ek":{"U":["x","@"],"H":["x","@"]},"el":{"U":["x","@"],"H":["x","@"]},"em":{"i":["aC"],"n":["aC"],"z":["aC"],"k":["aC"],"h":["aC"],"i.E":"aC"},"ai":{"j":[]},"a0":{"i":["v"],"n":["v"],"k":["v"],"h":["v"],"i.E":"v"},"v":{"e":[]},"cM":{"i":["v"],"n":["v"],"z":["v"],"k":["v"],"h":["v"],"i.E":"v"},"eA":{"i":["aD"],"n":["aD"],"z":["aD"],"k":["aD"],"h":["aD"],"i.E":"aD"},"eJ":{"U":["x","@"],"H":["x","@"]},"eL":{"D":[],"v":[],"e":[]},"ar":{"e":[]},"eN":{"i":["ar"],"n":["ar"],"z":["ar"],"e":[],"k":["ar"],"h":["ar"],"i.E":"ar"},"eO":{"i":["aE"],"n":["aE"],"z":["aE"],"k":["aE"],"h":["aE"],"i.E":"aE"},"eT":{"U":["x","x"],"H":["x","x"]},"bc":{"D":[],"v":[],"e":[]},"cS":{"D":[],"v":[],"e":[]},"eX":{"D":[],"v":[],"e":[]},"eY":{"D":[],"v":[],"e":[]},"c3":{"D":[],"v":[],"e":[]},"at":{"e":[]},"aa":{"e":[]},"f0":{"i":["aa"],"n":["aa"],"z":["aa"],"k":["aa"],"h":["aa"],"i.E":"aa"},"f1":{"i":["at"],"n":["at"],"z":["at"],"e":[],"k":["at"],"h":["at"],"i.E":"at"},"bB":{"j":[]},"f6":{"i":["aG"],"n":["aG"],"z":["aG"],"k":["aG"],"h":["aG"],"i.E":"aG"},"aU":{"j":[]},"fp":{"e":[]},"be":{"ai":[],"j":[]},"c6":{"e":[]},"c7":{"v":[],"e":[]},"fw":{"i":["J"],"n":["J"],"z":["J"],"k":["J"],"h":["J"],"i.E":"J"},"d2":{"a7":["R"]},"fL":{"i":["aA?"],"n":["aA?"],"z":["aA?"],"k":["aA?"],"h":["aA?"],"i.E":"aA?"},"d7":{"i":["v"],"n":["v"],"z":["v"],"k":["v"],"h":["v"],"i.E":"v"},"h4":{"i":["aF"],"n":["aF"],"z":["aF"],"k":["aF"],"h":["aF"],"i.E":"aF"},"hb":{"i":["as"],"n":["as"],"z":["as"],"k":["as"],"h":["as"],"i.E":"as"},"ft":{"U":["x","x"],"H":["x","x"]},"fD":{"U":["x","x"],"H":["x","x"]},"c8":{"aj":[]},"cN":{"aj":[]},"dd":{"aj":[]},"hd":{"aj":[]},"hc":{"aj":[]},"dl":{"bu":[]},"e_":{"i":["D"],"n":["D"],"k":["D"],"h":["D"],"i.E":"D"},"a7":{"h_":["1"]},"eb":{"i":["aO"],"n":["aO"],"k":["aO"],"h":["aO"],"i.E":"aO"},"eu":{"i":["aR"],"n":["aR"],"k":["aR"],"h":["aR"],"i.E":"aR"},"c1":{"m":[],"D":[],"v":[],"e":[]},"eV":{"i":["x"],"n":["x"],"k":["x"],"h":["x"],"i.E":"x"},"m":{"D":[],"v":[],"e":[]},"f7":{"i":["aS"],"n":["aS"],"k":["aS"],"h":["aS"],"i.E":"aS"},"bd":{"n":["l"],"k":["l"],"h":["l"]},"dG":{"U":["x","@"],"H":["x","@"]},"dH":{"e":[]},"b0":{"e":[]},"ev":{"e":[]},"eQ":{"i":["H<@,@>"],"n":["H<@,@>"],"k":["H<@,@>"],"h":["H<@,@>"],"i.E":"H<@,@>"},"af":{"h":["1*"],"af.T":"1"},"b5":{"Z":[]},"b6":{"Z":[]},"E":{"Z":[]},"cE":{"Z":[]},"bW":{"Z":[]},"eD":{"Z":[]},"cU":{"Z":[]},"dI":{"T":[]},"dU":{"T":[]},"cz":{"af":["T*"],"h":["T*"],"af.T":"T*"},"eC":{"T":[]},"bA":{"T":[]},"ck":{"a6":[]},"bQ":{"af":["a6*"],"a6":[],"h":["a6*"],"af.T":"a6*"},"d_":{"a6":[]},"ef":{"cP":[]},"dS":{"b1":[]},"e1":{"b1":[]},"e3":{"b1":[]},"ez":{"b1":[]}}'))
H.p5(v.typeUniverse,JSON.parse('{"a4":1,"k":1,"b8":1,"ee":2,"fr":1,"ct":1,"fj":1,"c4":1,"cl":2,"ed":1,"bX":1,"bE":1,"cR":1,"eU":2,"d5":1,"cv":1,"cC":1,"cF":2,"hm":2,"cG":2,"d6":1,"dp":2,"dN":2,"dQ":2,"e5":1,"fG":1,"L":1,"cu":1,"b5":1,"b6":1,"E":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.lA
return{D:s("bL"),d:s("bn"),Y:s("bo"),F:s("k<@>"),h:s("D"),C:s("K"),G:s("j"),c8:s("ah"),bX:s("bP"),Z:s("az"),v:s("bu"),fS:s("bR"),gk:s("bT"),Q:s("w<aj>"),s:s("w<x>"),gn:s("w<@>"),t:s("w<l>"),x:s("w<dF*>"),bb:s("w<dI*>"),am:s("w<dJ*>"),g0:s("w<dK*>"),b7:s("w<b1*>"),cP:s("w<dU*>"),M:s("w<dV*>"),k:s("w<b3*>"),b:s("w<dY*>"),aZ:s("w<bS*>"),L:s("w<ec*>"),u:s("w<n<b3*>*>"),B:s("w<io*>"),h8:s("w<b9*>"),eb:s("w<eC*>"),cS:s("w<ak*>"),d1:s("w<eE*>"),o:s("w<eB*>"),du:s("w<bA*>"),cz:s("w<eP*>"),eG:s("w<cR<M*>*>"),i:s("w<x*>"),fG:s("w<f_*>"),bw:s("w<f2*>"),br:s("w<f8*>"),fj:s("w<f9*>"),d6:s("w<cV*>"),dv:s("w<cW*>"),hg:s("w<cX*>"),by:s("w<cY*>"),fF:s("w<cZ*>"),j:s("w<fn*>"),m:s("w<X*>"),V:s("w<l*>"),f:s("w<~(Z*)*>"),T:s("cy"),eH:s("lZ"),g:s("aB"),aU:s("z<@>"),h9:s("B<x*,cP*>"),cn:s("B<x*,eR*>"),dO:s("B<x*,x*>"),dL:s("B<x*,f5*>"),en:s("B<l*,n<cV*>*>"),af:s("B<l*,n<cW*>*>"),gr:s("B<l*,n<cY*>*>"),gb:s("B<l*,n<cZ*>*>"),J:s("B<l*,fb*>"),E:s("B<l*,ax*>"),a:s("B<l*,l*>"),aH:s("n<@>"),eO:s("H<@,@>"),eM:s("cH<x*,x>"),bK:s("bU"),bZ:s("cJ"),dD:s("V"),bm:s("bY"),P:s("an"),K:s("M"),q:s("a7<R>"),fv:s("mg"),ew:s("c1"),N:s("x"),g7:s("m"),bY:s("bc"),aW:s("c3"),aF:s("cT"),gc:s("bd"),ak:s("bC"),U:s("c5<x,x>"),R:s("fl"),gH:s("c7"),ac:s("a0"),cJ:s("ax"),gR:s("X"),z:s("@"),S:s("l"),fr:s("bp*"),l:s("bs*"),gj:s("T*"),dn:s("cE*"),hc:s("b9*"),c:s("bW*"),ah:s("a6*"),A:s("0&*"),_:s("M*"),X:s("x*"),eB:s("f4*"),eP:s("cU*"),n:s("fa*"),r:s("fc*"),y:s("fd*"),O:s("fe*"),I:s("cX*"),w:s("ff*"),p:s("fg*"),e:s("l*"),dm:s("~(Z*)*"),bG:s("lY<an>?"),W:s("M?"),H:s("R")}})();(function constants(){var s=hunkHelpers.makeConstList
C.q=W.bo.prototype
C.i=W.bp.prototype
C.R=W.b3.prototype
C.U=J.a.prototype
C.b=J.w.prototype
C.V=J.cw.prototype
C.c=J.cx.prototype
C.j=J.cy.prototype
C.d=J.bv.prototype
C.a=J.aN.prototype
C.W=J.aB.prototype
C.C=J.ey.prototype
C.a3=P.eI.prototype
C.D=W.cS.prototype
C.p=J.bC.prototype
C.E=W.be.prototype
C.F=W.c6.prototype
C.G=new E.bN("Browser.chrome")
C.r=new E.bN("Browser.firefox")
C.t=new E.bN("Browser.edge")
C.H=new E.bN("Browser.other")
C.a6=new P.hJ()
C.I=new P.hI()
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.J=function() {
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
C.O=function(getTagFallback) {
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
C.K=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.L=function(hooks) {
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
C.N=function(hooks) {
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
C.M=function(hooks) {
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
C.v=function(hooks) { return hooks; }

C.P=new P.ew()
C.e=new P.jw()
C.Q=new P.jA()
C.f=new P.jY()
C.n=new P.br(0)
C.S=new P.br(5e6)
C.T=new P.ia("element",!1,!1,!1)
C.k=H.d(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.X=H.d(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.i)
C.l=H.d(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.m=H.d(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.Y=H.d(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.i)
C.w=H.d(s([]),t.i)
C.Z=H.d(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.x=H.d(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.d(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.y=H.d(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.z=H.d(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.A=H.d(s(["bind","if","ref","repeat","syntax"]),t.i)
C.o=H.d(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.i)
C.a_=new H.cm(0,{},C.w,H.lA("cm<x*,x*>"))
C.a0=new E.bZ("OperatingSystem.windows")
C.B=new E.bZ("OperatingSystem.mac")
C.a1=new E.bZ("OperatingSystem.linux")
C.a2=new E.bZ("OperatingSystem.other")
C.a4=new P.jx(!1)
C.a5=new P.c9(null,2)})();(function staticFields(){$.mH=null
$.aK=0
$.lR=null
$.lQ=null
$.n8=null
$.n3=null
$.ne=null
$.kw=null
$.kC=null
$.lC=null
$.cd=null
$.du=null
$.dv=null
$.lv=!1
$.aH=C.f
$.ab=H.d([],H.lA("w<M>"))
$.b4=null
$.kZ=null
$.lX=null
$.lW=null
$.d3=P.l8(t.N,t.Z)
$.hZ=null
$.m5=null
$.m8=null
$.ao=null
$.mi=null
$.mw=null
$.mz=null
$.my=null
$.jB=null
$.jC=null
$.jD=null
$.mx=null
$.mC=null
$.m7=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"qR","nl",function(){return H.qq("_$dart_dartClosure")})
s($,"r3","nm",function(){return H.aT(H.jg({
toString:function(){return"$receiver$"}}))})
s($,"r4","nn",function(){return H.aT(H.jg({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"r5","no",function(){return H.aT(H.jg(null))})
s($,"r6","np",function(){return H.aT(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"r9","ns",function(){return H.aT(H.jg(void 0))})
s($,"ra","nt",function(){return H.aT(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"r8","nr",function(){return H.aT(H.mp(null))})
s($,"r7","nq",function(){return H.aT(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"rc","nv",function(){return H.aT(H.mp(void 0))})
s($,"rb","nu",function(){return H.aT(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"rs","lI",function(){return P.oJ()})
s($,"rd","nw",function(){return new P.jy().$0()})
s($,"re","nx",function(){return new P.jz().$0()})
s($,"rt","nB",function(){return new Int8Array(H.cb(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rw","nD",function(){return P.ot("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rM","nE",function(){return P.pr()})
s($,"ru","nC",function(){return P.m0(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rl","nA",function(){return Z.av(0)})
s($,"rf","ny",function(){return Z.av(511)})
s($,"rn","bm",function(){return Z.av(1)})
s($,"rm","bl",function(){return Z.av(2)})
s($,"rh","bk",function(){return Z.av(4)})
s($,"ro","bI",function(){return Z.av(8)})
s($,"rp","bJ",function(){return Z.av(16)})
s($,"ri","dz",function(){return Z.av(32)})
s($,"rj","dA",function(){return Z.av(64)})
s($,"rk","nz",function(){return Z.av(96)})
s($,"rq","ci",function(){return Z.av(128)})
s($,"rg","bj",function(){return Z.av(256)})
s($,"qP","nk",function(){return new V.i_()})
s($,"qO","F",function(){return $.nk()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cJ,DataView:H.V,ArrayBufferView:H.V,Float32Array:H.bx,Float64Array:H.bx,Int16Array:H.en,Int32Array:H.eo,Int8Array:H.ep,Uint16Array:H.eq,Uint32Array:H.er,Uint8ClampedArray:H.cL,CanvasPixelArray:H.cL,Uint8Array:H.bY,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.hD,HTMLAnchorElement:W.dC,HTMLAreaElement:W.dD,HTMLBaseElement:W.bL,Blob:W.bn,HTMLBodyElement:W.bo,HTMLCanvasElement:W.bp,CDATASection:W.ay,CharacterData:W.ay,Comment:W.ay,ProcessingInstruction:W.ay,Text:W.ay,CSSPerspective:W.hN,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.cn,MSStyleCSSProperties:W.cn,CSS2Properties:W.cn,CSSImageValue:W.am,CSSKeywordValue:W.am,CSSNumericValue:W.am,CSSPositionValue:W.am,CSSResourceValue:W.am,CSSUnitValue:W.am,CSSURLImageValue:W.am,CSSStyleValue:W.am,CSSMatrixComponent:W.aM,CSSRotation:W.aM,CSSScale:W.aM,CSSSkew:W.aM,CSSTranslation:W.aM,CSSTransformComponent:W.aM,CSSTransformValue:W.hP,CSSUnparsedValue:W.hQ,DataTransferItemList:W.hR,HTMLDivElement:W.b3,DOMException:W.hS,ClientRectList:W.co,DOMRectList:W.co,DOMRectReadOnly:W.cp,DOMStringList:W.dW,DOMTokenList:W.hT,Element:W.D,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ah,FileList:W.bP,FileWriter:W.dZ,HTMLFormElement:W.e0,Gamepad:W.aA,History:W.i8,HTMLCollection:W.bt,HTMLFormControlsCollection:W.bt,HTMLOptionsCollection:W.bt,ImageData:W.bu,HTMLImageElement:W.bR,HTMLInputElement:W.bT,KeyboardEvent:W.bw,Location:W.ik,MediaList:W.iD,MessagePort:W.bU,MIDIInputMap:W.ek,MIDIOutputMap:W.el,MimeType:W.aC,MimeTypeArray:W.em,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,DocumentType:W.v,Node:W.v,NodeList:W.cM,RadioNodeList:W.cM,Plugin:W.aD,PluginArray:W.eA,RTCStatsReport:W.eJ,HTMLSelectElement:W.eL,SourceBuffer:W.ar,SourceBufferList:W.eN,SpeechGrammar:W.aE,SpeechGrammarList:W.eO,SpeechRecognitionResult:W.aF,Storage:W.eT,CSSStyleSheet:W.as,StyleSheet:W.as,HTMLTableCellElement:W.bc,HTMLTableDataCellElement:W.bc,HTMLTableHeaderCellElement:W.bc,HTMLTableElement:W.cS,HTMLTableRowElement:W.eX,HTMLTableSectionElement:W.eY,HTMLTemplateElement:W.c3,TextTrack:W.at,TextTrackCue:W.aa,VTTCue:W.aa,TextTrackCueList:W.f0,TextTrackList:W.f1,TimeRanges:W.ja,Touch:W.aG,TouchEvent:W.bB,TouchList:W.f6,TrackDefaultList:W.je,CompositionEvent:W.aU,FocusEvent:W.aU,TextEvent:W.aU,UIEvent:W.aU,URL:W.jv,VideoTrackList:W.fp,WheelEvent:W.be,Window:W.c6,DOMWindow:W.c6,Attr:W.c7,CSSRuleList:W.fw,ClientRect:W.d2,DOMRect:W.d2,GamepadList:W.fL,NamedNodeMap:W.d7,MozNamedAttrMap:W.d7,SpeechRecognitionResultList:W.h4,StyleSheetList:W.hb,SVGLength:P.aO,SVGLengthList:P.eb,SVGNumber:P.aR,SVGNumberList:P.eu,SVGPointList:P.iL,SVGScriptElement:P.c1,SVGStringList:P.eV,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aS,SVGTransformList:P.f7,AudioBuffer:P.hG,AudioParamMap:P.dG,AudioTrackList:P.dH,AudioContext:P.b0,webkitAudioContext:P.b0,BaseAudioContext:P.b0,OfflineAudioContext:P.ev,WebGL2RenderingContext:P.eI,SQLResultSetRowList:P.eQ})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bX.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"
W.dh.$nativeSuperclassTag="EventTarget"
W.di.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(L.nc,[])
else L.nc([])})})()
//# sourceMappingURL=test.dart.js.map
