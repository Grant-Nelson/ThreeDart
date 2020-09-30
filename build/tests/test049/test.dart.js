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
a[c]=function(){a[c]=function(){H.pI(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.kP(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={ko:function ko(){},
kq:function(a){return new H.dX(a)},
jW:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ni:function(a,b){if(t.Y.b(a))return new H.cj(a,b)
return new H.bs(a,b)},
lb:function(){return new P.eC("No element")},
nE:function(a,b){var s=J.aV(a)
if(typeof s!=="number")return s.n()
H.ev(a,0,s-1,b)},
ev:function(a,b,c,d){if(c-b<=32)H.nD(a,b,c,d)
else H.nC(a,b,c,d)},
nD:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.aT(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.V()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
nC:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a1(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a1(a6+a7,2),d=e-h,c=e+h,b=J.aT(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a3
a3=a2
a2=s}b.l(a5,g,a)
b.l(a5,e,a1)
b.l(a5,f,a3)
b.l(a5,d,b.h(a5,a6))
b.l(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.E(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.a5()
if(n<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.V()
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
if(typeof j!=="number")return j.a5()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.V()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.V()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a5()
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
H.ev(a5,a6,r-2,a8)
H.ev(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.E(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.E(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a5()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}H.ev(a5,r,q,a8)}else H.ev(a5,r,q,a8)},
dX:function dX(a){this.a=a},
O:function O(a){this.a=a},
m:function m(){},
bM:function bM(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bs:function bs(a,b){this.a=a
this.b=b},
cj:function cj(a,b){this.a=a
this.b=b},
e0:function e0(a,b){this.a=null
this.b=a
this.c=b},
cT:function cT(a,b){this.a=a
this.b=b},
f7:function f7(a,b){this.a=a
this.b=b},
ck:function ck(){},
f0:function f0(){},
bW:function bW(){},
n3:function(){throw H.c(P.y("Cannot modify unmodifiable Map"))},
mt:function(a){var s,r=H.ms(a)
if(r!=null)return r
s="minified:"+a
return s},
mk:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
h:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a6(a)
if(typeof s!="string")throw H.c(H.ao(a))
return s},
cF:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
lt:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.b(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a0(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.E(q,o)|32)>r)return n}return parseInt(a,b)},
eo:function(a){return H.nm(a)},
nm:function(a){var s,r,q
if(a instanceof P.L)return H.ae(H.bA(a),null)
if(J.dk(a)===C.R||t.ak.b(a)){s=C.w(a)
if(H.ls(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.ls(q))return q}}return H.ae(H.bA(a),null)},
ls:function(a){var s=a!=="Object"&&a!==""
return s},
nn:function(){if(!!self.location)return self.location.href
return null},
lr:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
nv:function(a){var s,r,q,p=H.d([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){q=a[r]
if(!H.c3(q))throw H.c(H.ao(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aO(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.ao(q))}return H.lr(p)},
lu:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.c3(q))throw H.c(H.ao(q))
if(q<0)throw H.c(H.ao(q))
if(q>65535)return H.nv(a)}return H.lr(a)},
nw:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.io()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aM:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aO(s,10))>>>0,56320|s&1023)}}throw H.c(P.a0(a,0,1114111,null,null))},
bT:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nu:function(a){var s=H.bT(a).getFullYear()+0
return s},
ns:function(a){var s=H.bT(a).getMonth()+1
return s},
no:function(a){var s=H.bT(a).getDate()+0
return s},
np:function(a){var s=H.bT(a).getHours()+0
return s},
nr:function(a){var s=H.bT(a).getMinutes()+0
return s},
nt:function(a){var s=H.bT(a).getSeconds()+0
return s},
nq:function(a){var s=H.bT(a).getMilliseconds()+0
return s},
e:function(a){throw H.c(H.ao(a))},
b:function(a,b){if(a==null)J.aV(a)
throw H.c(H.c7(a,b))},
c7:function(a,b){var s,r,q="index"
if(!H.c3(b))return new P.af(!0,b,q,null)
s=J.aV(a)
if(!(b<0)){if(typeof s!=="number")return H.e(s)
r=b>=s}else r=!0
if(r)return P.M(b,a,q,null,s)
return P.ep(b,q)},
pp:function(a,b,c){if(a>c)return P.a0(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a0(b,a,c,"end",null)
return new P.af(!0,b,"end",null)},
ao:function(a){return new P.af(!0,a,null,null)},
pk:function(a){if(typeof a!="number")throw H.c(H.ao(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.ec()
s=new Error()
s.dartException=a
r=H.pJ
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
pJ:function(){return J.a6(this.dartException)},
q:function(a){throw H.c(a)},
r:function(a){throw H.c(P.bF(a))},
aP:function(a){var s,r,q,p,o,n
a=H.mo(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
iN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lH:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lo:function(a,b){return new H.eb(a,b==null?null:b.method)},
kp:function(a,b){var s=b==null,r=s?null:b.method
return new H.dW(a,r,s?null:b.receiver)},
bb:function(a){if(a==null)return new H.ig(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bB(a,a.dartException)
return H.pg(a)},
bB:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pg:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aO(r,16)&8191)===10)switch(q){case 438:return H.bB(a,H.kp(H.h(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bB(a,H.lo(H.h(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.mw()
o=$.mx()
n=$.my()
m=$.mz()
l=$.mC()
k=$.mD()
j=$.mB()
$.mA()
i=$.mF()
h=$.mE()
g=p.ae(s)
if(g!=null)return H.bB(a,H.kp(s,g))
else{g=o.ae(s)
if(g!=null){g.method="call"
return H.bB(a,H.kp(s,g))}else{g=n.ae(s)
if(g==null){g=m.ae(s)
if(g==null){g=l.ae(s)
if(g==null){g=k.ae(s)
if(g==null){g=j.ae(s)
if(g==null){g=m.ae(s)
if(g==null){g=i.ae(s)
if(g==null){g=h.ae(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bB(a,H.lo(s,g))}}return H.bB(a,new H.f_(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cI()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bB(a,new P.af(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cI()
return a},
kS:function(a){var s
if(a==null)return new H.fN(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fN(a)},
pr:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
pz:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.t("Unsupported number of arguments for wrapped closure"))},
c6:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pz)
a.$identity=s
return s},
n2:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.ix().constructor.prototype):Object.create(new H.cc(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aB
if(typeof r!=="number")return r.p()
$.aB=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.l6(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.mZ(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.l6(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
mZ:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mi,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.mX:H.mW
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
n_:function(a,b,c,d){var s=H.l5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
l6:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.n1(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.n_(r,!p,s,b)
if(r===0){p=$.aB
if(typeof p!=="number")return p.p()
$.aB=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.h(H.kf())+";return "+n+"."+H.h(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aB
if(typeof p!=="number")return p.p()
$.aB=p+1
m+=p
return new Function("return function("+m+"){return this."+H.h(H.kf())+"."+H.h(s)+"("+m+");}")()},
n0:function(a,b,c,d){var s=H.l5,r=H.mY
switch(b?-1:a){case 0:throw H.c(new H.et("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
n1:function(a,b){var s,r,q,p,o,n,m=H.kf(),l=$.l3
if(l==null)l=$.l3=H.l2("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.n0(r,!p,s,b)
if(r===1){p="return function(){return this."+H.h(m)+"."+H.h(s)+"(this."+l+");"
o=$.aB
if(typeof o!=="number")return o.p()
$.aB=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.h(m)+"."+H.h(s)+"(this."+l+", "+n+");"
o=$.aB
if(typeof o!=="number")return o.p()
$.aB=o+1
return new Function(p+o+"}")()},
kP:function(a,b,c,d,e,f,g){return H.n2(a,b,c,d,!!e,!!f,g)},
mW:function(a,b){return H.fZ(v.typeUniverse,H.bA(a.a),b)},
mX:function(a,b){return H.fZ(v.typeUniverse,H.bA(a.c),b)},
l5:function(a){return a.a},
mY:function(a){return a.c},
kf:function(){var s=$.l4
return s==null?$.l4=H.l2("self"):s},
l2:function(a){var s,r,q,p=new H.cc("self","target","receiver","name"),o=J.kn(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bC("Field name "+a+" not found."))},
pI:function(a){throw H.c(new P.dH(a))},
pu:function(a){return v.getIsolateTag(a)},
qR:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pB:function(a){var s,r,q,p,o,n=$.mh.$1(a),m=$.jS[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.k0[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mf.$2(a,n)
if(q!=null){m=$.jS[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.k0[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.k5(s)
$.jS[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.k0[n]=s
return s}if(p==="-"){o=H.k5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.mm(a,s)
if(p==="*")throw H.c(P.iW(n))
if(v.leafTags[n]===true){o=H.k5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.mm(a,s)},
mm:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kV(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
k5:function(a){return J.kV(a,!1,null,!!a.$ix)},
pC:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.k5(s)
else return J.kV(s,c,null,null)},
px:function(){if(!0===$.kT)return
$.kT=!0
H.py()},
py:function(){var s,r,q,p,o,n,m,l
$.jS=Object.create(null)
$.k0=Object.create(null)
H.pw()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mn.$1(o)
if(n!=null){m=H.pC(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
pw:function(){var s,r,q,p,o,n,m=C.I()
m=H.c5(C.J,H.c5(C.K,H.c5(C.x,H.c5(C.x,H.c5(C.L,H.c5(C.M,H.c5(C.N(C.w),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mh=new H.jX(p)
$.mf=new H.jY(o)
$.mn=new H.jZ(n)},
c5:function(a,b){return a(b)||b},
nd:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a_("Illegal RegExp pattern ("+String(n)+")",a,null))},
mp:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
pq:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mo:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mq:function(a,b,c){var s=H.pH(a,b,c)
return s},
pH:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mo(b),'g'),H.pq(c))},
ce:function ce(){},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iM:function iM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eb:function eb(a,b){this.a=a
this.b=b},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(a){this.a=a},
ig:function ig(a){this.a=a},
fN:function fN(a){this.a=a
this.b=null},
bE:function bE(){},
iA:function iA(){},
ix:function ix(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
et:function et(a){this.a=a},
z:function z(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hN:function hN(a){this.a=a},
hQ:function hQ(a,b){this.a=a
this.b=b
this.c=null},
ct:function ct(a){this.a=a},
e_:function e_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
dV:function dV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c2:function(a){return a},
aS:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c7(b,a))},
ou:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.pp(a,b,c))
return b},
cA:function cA(){},
U:function U(){},
bQ:function bQ(){},
bu:function bu(){},
cB:function cB(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
cC:function cC(){},
bR:function bR(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
nA:function(a,b){var s=b.c
return s==null?b.c=H.kE(a,b.z,!0):s},
lA:function(a,b){var s=b.c
return s==null?b.c=H.db(a,"l9",[b.z]):s},
lB:function(a){var s=a.y
if(s===6||s===7||s===8)return H.lB(a.z)
return s===11||s===12},
nz:function(a){return a.cy},
kQ:function(a){return H.kF(v.typeUniverse,a,!1)},
b8:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.b8(a,s,a0,a1)
if(r===s)return b
return H.lZ(a,r,!0)
case 7:s=b.z
r=H.b8(a,s,a0,a1)
if(r===s)return b
return H.kE(a,r,!0)
case 8:s=b.z
r=H.b8(a,s,a0,a1)
if(r===s)return b
return H.lY(a,r,!0)
case 9:q=b.Q
p=H.dj(a,q,a0,a1)
if(p===q)return b
return H.db(a,b.z,p)
case 10:o=b.z
n=H.b8(a,o,a0,a1)
m=b.Q
l=H.dj(a,m,a0,a1)
if(n===o&&l===m)return b
return H.kC(a,n,l)
case 11:k=b.z
j=H.b8(a,k,a0,a1)
i=b.Q
h=H.pd(a,i,a0,a1)
if(j===k&&h===i)return b
return H.lX(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dj(a,g,a0,a1)
o=b.z
n=H.b8(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kD(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.he("Attempted to substitute unexpected RTI kind "+c))}},
dj:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.b8(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pe:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.b8(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pd:function(a,b,c,d){var s,r=b.a,q=H.dj(a,r,c,d),p=b.b,o=H.dj(a,p,c,d),n=b.c,m=H.pe(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fp()
s.a=q
s.b=o
s.c=m
return s},
d:function(a,b){a[v.arrayRti]=b
return a},
pl:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mi(s)
return a.$S()}return null},
mj:function(a,b){var s
if(H.lB(b))if(a instanceof H.bE){s=H.pl(a)
if(s!=null)return s}return H.bA(a)},
bA:function(a){var s
if(a instanceof P.L){s=a.$ti
return s!=null?s:H.kL(a)}if(Array.isArray(a))return H.m7(a)
return H.kL(J.dk(a))},
m7:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
ma:function(a){var s=a.$ti
return s!=null?s:H.kL(a)},
kL:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.oB(a,s)},
oB:function(a,b){var s=a instanceof H.bE?a.__proto__.__proto__.constructor:b,r=H.ob(v.typeUniverse,s.name)
b.$ccache=r
return r},
mi:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kF(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
oA:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dg(q,a,H.oF)
if(!H.aU(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dg(q,a,H.oI)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.c3
else if(s===t.gR||s===t.H)r=H.oE
else if(s===t.N)r=H.oG
else r=s===t.cJ?H.kM:null
if(r!=null)return H.dg(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.pA)){q.r="$i"+p
return H.dg(q,a,H.oH)}}else if(p===7)return H.dg(q,a,H.oy)
return H.dg(q,a,H.ow)},
dg:function(a,b,c){a.b=c
return a.b(b)},
oz:function(a){var s,r,q=this
if(!H.aU(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.ot
else if(q===t.K)r=H.or
else r=H.ox
q.a=r
return q.a(a)},
p6:function(a){var s,r=a.y
if(!H.aU(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
ow:function(a){var s=this
if(a==null)return H.p6(s)
return H.X(v.typeUniverse,H.mj(a,s),null,s,null)},
oy:function(a){if(a==null)return!0
return this.z.b(a)},
oH:function(a){var s=this,r=s.r
if(a instanceof P.L)return!!a[r]
return!!J.dk(a)[r]},
qP:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.m8(a,s)},
ox:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.m8(a,s)},
m8:function(a,b){throw H.c(H.o1(H.lR(a,H.mj(a,b),H.ae(b,null))))},
lR:function(a,b,c){var s=P.hD(a),r=H.ae(b==null?H.bA(a):b,null)
return s+": type '"+H.h(r)+"' is not a subtype of type '"+H.h(c)+"'"},
o1:function(a){return new H.d9("TypeError: "+a)},
a5:function(a,b){return new H.d9("TypeError: "+H.lR(a,null,b))},
oF:function(a){return a!=null},
or:function(a){return a},
oI:function(a){return!0},
ot:function(a){return a},
kM:function(a){return!0===a||!1===a},
qB:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a5(a,"bool"))},
qD:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a5(a,"bool"))},
qC:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a5(a,"bool?"))},
qE:function(a){if(typeof a=="number")return a
throw H.c(H.a5(a,"double"))},
qG:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a5(a,"double"))},
qF:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a5(a,"double?"))},
c3:function(a){return typeof a=="number"&&Math.floor(a)===a},
qH:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a5(a,"int"))},
qJ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a5(a,"int"))},
qI:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a5(a,"int?"))},
oE:function(a){return typeof a=="number"},
qK:function(a){if(typeof a=="number")return a
throw H.c(H.a5(a,"num"))},
qM:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a5(a,"num"))},
qL:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a5(a,"num?"))},
oG:function(a){return typeof a=="string"},
qN:function(a){if(typeof a=="string")return a
throw H.c(H.a5(a,"String"))},
os:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a5(a,"String"))},
qO:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a5(a,"String?"))},
p9:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.p(r,H.ae(a[q],b))
return s},
m9:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.d([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.W,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.b(a6,i)
l=C.a.p(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.p(" extends ",H.ae(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.ae(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.p(a3,H.ae(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.p(a3,H.ae(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.kZ(H.ae(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.h(a1)},
ae:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ae(a.z,b)
return s}if(l===7){r=a.z
s=H.ae(r,b)
q=r.y
return J.kZ(q===11||q===12?C.a.p("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.h(H.ae(a.z,b))+">"
if(l===9){p=H.pf(a.z)
o=a.Q
return o.length!==0?p+("<"+H.p9(o,b)+">"):p}if(l===11)return H.m9(a,b,null)
if(l===12)return H.m9(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.b(b,n)
return b[n]}return"?"},
pf:function(a){var s,r=H.ms(a)
if(r!=null)return r
s="minified:"+a
return s},
m_:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
ob:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kF(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dc(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.db(a,b,q)
n[b]=o
return o}else return m},
o9:function(a,b){return H.m6(a.tR,b)},
o8:function(a,b){return H.m6(a.eT,b)},
kF:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.lW(H.lU(a,null,b,c))
r.set(b,s)
return s},
fZ:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.lW(H.lU(a,b,c,!0))
q.set(c,r)
return r},
oa:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.kC(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b7:function(a,b){b.a=H.oz
b.b=H.oA
return b},
dc:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ai(null,null)
s.y=b
s.cy=c
r=H.b7(a,s)
a.eC.set(c,r)
return r},
lZ:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.o6(a,b,r,c)
a.eC.set(r,s)
return s},
o6:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aU(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ai(null,null)
q.y=6
q.z=b
q.cy=c
return H.b7(a,q)},
kE:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.o5(a,b,r,c)
a.eC.set(r,s)
return s},
o5:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aU(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.k1(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.k1(q.z))return q
else return H.nA(a,b)}}p=new H.ai(null,null)
p.y=7
p.z=b
p.cy=c
return H.b7(a,p)},
lY:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.o3(a,b,r,c)
a.eC.set(r,s)
return s},
o3:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aU(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.db(a,"l9",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.ai(null,null)
q.y=8
q.z=b
q.cy=c
return H.b7(a,q)},
o7:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ai(null,null)
s.y=13
s.z=b
s.cy=q
r=H.b7(a,s)
a.eC.set(q,r)
return r},
fY:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
o2:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
db:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fY(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ai(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.b7(a,r)
a.eC.set(p,q)
return q},
kC:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fY(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ai(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.b7(a,o)
a.eC.set(q,n)
return n},
lX:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fY(m)
if(j>0){s=l>0?",":""
r=H.fY(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.o2(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ai(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.b7(a,o)
a.eC.set(q,r)
return r},
kD:function(a,b,c,d){var s,r=b.cy+("<"+H.fY(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.o4(a,b,c,r,d)
a.eC.set(r,s)
return s},
o4:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.b8(a,b,r,0)
m=H.dj(a,c,r,0)
return H.kD(a,n,m,c!==m)}}l=new H.ai(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.b7(a,l)},
lU:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lW:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.nW(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.lV(a,r,g,f,!1)
else if(q===46)r=H.lV(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.b6(a.u,a.e,f.pop()))
break
case 94:f.push(H.o7(a.u,f.pop()))
break
case 35:f.push(H.dc(a.u,5,"#"))
break
case 64:f.push(H.dc(a.u,2,"@"))
break
case 126:f.push(H.dc(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.kB(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.db(p,n,o))
else{m=H.b6(p,a.e,n)
switch(m.y){case 11:f.push(H.kD(p,m,o,a.n))
break
default:f.push(H.kC(p,m,o))
break}}break
case 38:H.nX(a,f)
break
case 42:l=a.u
f.push(H.lZ(l,H.b6(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.kE(l,H.b6(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.lY(l,H.b6(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fp()
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
H.kB(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.lX(p,H.b6(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.kB(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.nZ(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.b6(a.u,a.e,h)},
nW:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lV:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.m_(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.nz(o)+'"')
d.push(H.fZ(s,o,n))}else d.push(p)
return m},
nX:function(a,b){var s=b.pop()
if(0===s){b.push(H.dc(a.u,1,"0&"))
return}if(1===s){b.push(H.dc(a.u,4,"1&"))
return}throw H.c(P.he("Unexpected extended operation "+H.h(s)))},
b6:function(a,b,c){if(typeof c=="string")return H.db(a,c,a.sEA)
else if(typeof c=="number")return H.nY(a,b,c)
else return c},
kB:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.b6(a,b,c[s])},
nZ:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.b6(a,b,c[s])},
nY:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.he("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.he("Bad index "+c+" for "+b.i(0)))},
X:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aU(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aU(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.X(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.X(a,b.z,c,d,e)
if(p===6){s=d.z
return H.X(a,b,c,s,e)}if(r===8){if(!H.X(a,b.z,c,d,e))return!1
return H.X(a,H.lA(a,b),c,d,e)}if(r===7){s=H.X(a,b.z,c,d,e)
return s}if(p===8){if(H.X(a,b,c,d.z,e))return!0
return H.X(a,b,c,H.lA(a,d),e)}if(p===7){s=H.X(a,b,c,d.z,e)
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
if(!H.X(a,k,c,j,e)||!H.X(a,j,e,k,c))return!1}return H.mb(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.mb(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.oD(a,b,c,d,e)}return!1},
mb:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.X(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.X(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.X(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.X(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.X(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
oD:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.X(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.m_(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.X(a,H.fZ(a,b,l[p]),c,r[p],e))return!1
return!0},
k1:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aU(a))if(r!==7)if(!(r===6&&H.k1(a.z)))s=r===8&&H.k1(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pA:function(a){var s
if(!H.aU(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aU:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
m6:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ai:function ai(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fp:function fp(){this.c=this.b=this.a=null},
fk:function fk(){},
d9:function d9(a){this.a=a},
ms:function(a){return v.mangledGlobalNames[a]},
pD:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ha:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.kT==null){H.px()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.iW("Return interceptor for "+H.h(s(a,o))))}q=a.constructor
p=q==null?null:q[J.ld()]
if(p!=null)return p
p=H.pB(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){Object.defineProperty(q,J.ld(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
ld:function(){var s=$.lS
return s==null?$.lS=v.getIsolateTag("_$dart_js"):s},
na:function(a,b){if(!H.c3(a))throw H.c(P.l_(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a0(a,0,4294967295,"length",null))
return J.nb(new Array(a),b)},
km:function(a,b){if(!H.c3(a)||a<0)throw H.c(P.bC("Length must be a non-negative integer: "+H.h(a)))
return H.d(new Array(a),b.W("u<0>"))},
nb:function(a,b){return J.kn(H.d(a,b.W("u<0>")))},
kn:function(a){a.fixed$length=Array
return a},
nc:function(a,b){return J.dn(a,b)},
dk:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.co.prototype
return J.cn.prototype}if(typeof a=="string")return J.aG.prototype
if(a==null)return J.cp.prototype
if(typeof a=="boolean")return J.dU.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.L)return a
return J.ha(a)},
ps:function(a){if(typeof a=="number")return J.bq.prototype
if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.L)return a
return J.ha(a)},
aT:function(a){if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.L)return a
return J.ha(a)},
jT:function(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.L)return a
return J.ha(a)},
pt:function(a){if(typeof a=="number")return J.bq.prototype
if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bx.prototype
return a},
kR:function(a){if(typeof a=="string")return J.aG.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bx.prototype
return a},
ba:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.L)return a
return J.ha(a)},
kZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ps(a).p(a,b)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dk(a).q(a,b)},
ca:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mk(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aT(a).h(a,b)},
k9:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mk(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jT(a).l(a,b,c)},
mO:function(a,b){return J.kR(a).E(a,b)},
mP:function(a,b,c){return J.ba(a).fV(a,b,c)},
mQ:function(a,b,c,d){return J.ba(a).hf(a,b,c,d)},
mR:function(a,b){return J.kR(a).U(a,b)},
dn:function(a,b){return J.pt(a).aR(a,b)},
ka:function(a,b){return J.aT(a).J(a,b)},
kb:function(a,b){return J.jT(a).H(a,b)},
mS:function(a,b,c,d){return J.ba(a).hC(a,b,c,d)},
kc:function(a,b){return J.jT(a).G(a,b)},
kd:function(a){return J.ba(a).gdi(a)},
mT:function(a){return J.ba(a).gdk(a)},
aa:function(a){return J.dk(a).gP(a)},
bi:function(a){return J.jT(a).gR(a)},
aV:function(a){return J.aT(a).gk(a)},
mU:function(a,b){return J.ba(a).ia(a,b)},
a6:function(a){return J.dk(a).i(a)},
a:function a(){},
dU:function dU(){},
cp:function cp(){},
aX:function aX(){},
eh:function eh(){},
bx:function bx(){},
as:function as(){},
u:function u(a){this.$ti=a},
hM:function hM(a){this.$ti=a},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bq:function bq(){},
co:function co(){},
cn:function cn(){},
aG:function aG(){}},P={
nO:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.ph()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.c6(new P.jn(q),1)).observe(s,{childList:true})
return new P.jm(q,s,r)}else if(self.setImmediate!=null)return P.pi()
return P.pj()},
nP:function(a){self.scheduleImmediate(H.c6(new P.jo(a),0))},
nQ:function(a){self.setImmediate(H.c6(new P.jp(a),0))},
nR:function(a){P.ku(C.o,a)},
ku:function(a,b){var s=C.c.a1(a.a,1000)
return P.o_(s<0?0:s,b)},
lG:function(a,b){var s=C.c.a1(a.a,1000)
return P.o0(s<0?0:s,b)},
o_:function(a,b){var s=new P.d8()
s.eC(a,b)
return s},
o0:function(a,b){var s=new P.d8()
s.eD(a,b)
return s},
qz:function(a){return new P.c_(a,1)},
nS:function(){return C.a1},
nT:function(a){return new P.c_(a,3)},
oK:function(a){return new P.d5(a)},
p5:function(){var s,r
for(s=$.c4;s!=null;s=$.c4){$.di=null
r=s.b
$.c4=r
if(r==null)$.dh=null
s.a.$0()}},
pc:function(){$.kN=!0
try{P.p5()}finally{$.di=null
$.kN=!1
if($.c4!=null)$.kY().$1(P.mg())}},
pa:function(a){var s=new P.f8(a),r=$.dh
if(r==null){$.c4=$.dh=s
if(!$.kN)$.kY().$1(P.mg())}else $.dh=r.b=s},
pb:function(a){var s,r,q,p=$.c4
if(p==null){P.pa(a)
$.di=$.dh
return}s=new P.f8(a)
r=$.di
if(r==null){s.b=p
$.c4=$.di=s}else{q=r.b
s.b=q
$.di=r.b=s
if(q==null)$.dh=s}},
lF:function(a,b){var s=$.aA
if(s===C.i)return P.ku(a,b)
return P.ku(a,s.hi(b))},
nH:function(a,b){var s=$.aA
if(s===C.i)return P.lG(a,b)
return P.lG(a,s.dg(b,t.aF))},
mc:function(a,b,c,d,e){P.pb(new P.jQ(d,e))},
p7:function(a,b,c,d){var s,r=$.aA
if(r===c)return d.$0()
$.aA=c
s=r
try{r=d.$0()
return r}finally{$.aA=s}},
p8:function(a,b,c,d,e){var s,r=$.aA
if(r===c)return d.$1(e)
$.aA=c
s=r
try{r=d.$1(e)
return r}finally{$.aA=s}},
jn:function jn(a){this.a=a},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
d8:function d8(){this.c=0},
jC:function jC(a,b){this.a=a
this.b=b},
jB:function jB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b){this.a=a
this.b=b},
c0:function c0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
d5:function d5(a){this.a=a},
f8:function f8(a){this.a=a
this.b=null},
cJ:function cJ(){},
eE:function eE(){},
cK:function cK(){},
jH:function jH(){},
jQ:function jQ(a,b){this.a=a
this.b=b},
ju:function ju(){},
jv:function jv(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
ne:function(a,b){return new H.z(a.W("@<0>").bB(b).W("z<1,2>"))},
nf:function(a,b,c){return H.pr(a,new H.z(b.W("@<0>").bB(c).W("z<1,2>")))},
le:function(a,b){return new H.z(a.W("@<0>").bB(b).W("z<1,2>"))},
lf:function(a){return new P.cV(a.W("cV<0>"))},
kA:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
nV:function(a,b){var s=new P.cW(a,b)
s.c=a.e
return s},
n9:function(a,b,c){var s,r
if(P.kO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.d([],t.s)
$.a9.push(a)
try{P.oJ(a,s)}finally{if(0>=$.a9.length)return H.b($.a9,-1)
$.a9.pop()}r=P.lD(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kl:function(a,b,c){var s,r
if(P.kO(a))return b+"..."+c
s=new P.V(b)
$.a9.push(a)
try{r=s
r.a=P.lD(r.a,a,", ")}finally{if(0>=$.a9.length)return H.b($.a9,-1)
$.a9.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kO:function(a){var s,r
for(s=$.a9.length,r=0;r<s;++r)if(a===$.a9[r])return!0
return!1},
oJ:function(a,b){var s,r,q,p,o,n,m,l=a.gR(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.A())return
s=H.h(l.gF(l))
b.push(s)
k+=s.length+2;++j}if(!l.A()){if(j<=5)return
if(0>=b.length)return H.b(b,-1)
r=b.pop()
if(0>=b.length)return H.b(b,-1)
q=b.pop()}else{p=l.gF(l);++j
if(!l.A()){if(j<=4){b.push(H.h(p))
return}r=H.h(p)
if(0>=b.length)return H.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gF(l);++j
for(;l.A();p=o,o=n){n=l.gF(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.h(p)
r=H.h(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
ng:function(a,b,c){var s=P.ne(b,c)
a.G(0,new P.hR(s,b,c))
return s},
ks:function(a){var s,r={}
if(P.kO(a))return"{...}"
s=new P.V("")
try{$.a9.push(a)
s.a+="{"
r.a=!0
J.kc(a,new P.hV(r,s))
s.a+="}"}finally{if(0>=$.a9.length)return H.b($.a9,-1)
$.a9.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cV:function cV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jt:function jt(a){this.a=a
this.c=this.b=null},
cW:function cW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cm:function cm(){},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(){},
j:function j(){},
cw:function cw(){},
hV:function hV(a,b){this.a=a
this.b=b},
at:function at(){},
h_:function h_(){},
cx:function cx(){},
bX:function bX(a,b){this.a=a
this.$ti=b},
d2:function d2(){},
cX:function cX(){},
dd:function dd(){},
nK:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.nL(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
nL:function(a,b,c,d){var s=a?$.mH():$.mG()
if(s==null)return null
if(0===c&&d===b.length)return P.lL(s,b)
return P.lL(s,b.subarray(c,P.b1(c,d,b.length)))},
lL:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.bb(r)}return null},
l1:function(a,b,c,d,e,f){if(C.c.bd(f,4)!==0)throw H.c(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a_("Invalid base64 padding, more than two '=' characters",a,b))},
oq:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
op:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.n()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.aT(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.a7()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.b(r,o)
r[o]=n}return r},
j4:function j4(){},
j5:function j5(){},
hi:function hi(){},
hj:function hj(){},
dC:function dC(){},
dG:function dG(){},
hA:function hA(){},
j2:function j2(){},
j6:function j6(){},
jG:function jG(a){this.b=0
this.c=a},
j3:function j3(a){this.a=a},
jF:function jF(a){this.a=a
this.b=16
this.c=0},
k_:function(a,b){var s=H.lt(a,b)
if(s!=null)return s
throw H.c(P.a_(a,null,null))},
n6:function(a){if(a instanceof H.bE)return a.i(0)
return"Instance of '"+H.h(H.eo(a))+"'"},
hS:function(a,b,c,d){var s,r=c?J.km(a,d):J.na(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
kr:function(a,b,c){var s,r=H.d([],c.W("u<0>"))
for(s=J.bi(a);s.A();)r.push(s.gF(s))
if(b)return r
return J.kn(r)},
nh:function(a,b,c){var s,r,q=J.km(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.b(q,s)
q[s]=r}return q},
eG:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.b1(b,c,r)
if(b<=0){if(typeof c!=="number")return c.a5()
q=c<r}else q=!0
return H.lu(q?s.slice(b,c):s)}if(t.bm.b(a))return H.nw(a,b,P.b1(b,c,a.length))
return P.nF(a,b,c)},
nF:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a0(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a0(c,b,a.length,o,o))
r=J.bi(a)
for(q=0;q<b;++q)if(!r.A())throw H.c(P.a0(b,0,q,o,o))
p=[]
if(s)for(;r.A();)p.push(r.gF(r))
else for(q=b;q<c;++q){if(!r.A())throw H.c(P.a0(c,b,q,o,o))
p.push(r.gF(r))}return H.lu(p)},
nx:function(a){return new H.dV(a,H.nd(a,!1,!0,!1,!1,!1))},
lD:function(a,b,c){var s=J.bi(b)
if(!s.A())return a
if(c.length===0){do a+=H.h(s.gF(s))
while(s.A())}else{a+=H.h(s.gF(s))
for(;s.A();)a=a+c+H.h(s.gF(s))}return a},
kw:function(){var s=H.nn()
if(s!=null)return P.nJ(s)
throw H.c(P.y("'Uri.base' is not supported"))},
kK:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.h){s=$.mM().b
if(typeof b!="string")H.q(H.ao(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghB().c2(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.b(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aM(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
n4:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
n5:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dI:function(a){if(a>=10)return""+a
return"0"+a},
l8:function(a){return new P.bn(1000*a)},
hD:function(a){if(typeof a=="number"||H.kM(a)||null==a)return J.a6(a)
if(typeof a=="string")return JSON.stringify(a)
return P.n6(a)},
he:function(a){return new P.dr(a)},
bC:function(a){return new P.af(!1,null,null,a)},
l_:function(a,b,c){return new P.af(!0,a,b,c)},
mV:function(a,b){if(a==null)throw H.c(new P.af(!1,null,b,"Must not be null"))
return a},
lv:function(a){var s=null
return new P.bU(s,s,!1,s,s,a)},
ep:function(a,b){return new P.bU(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.bU(b,c,!0,a,d,"Invalid value")},
b1:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.e(c)
s=a>c}else s=!0
if(s)throw H.c(P.a0(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.e(c)
s=b>c}else s=!0
if(s)throw H.c(P.a0(b,a,c,"end",null))
return b}return c},
lw:function(a,b){if(a<0)throw H.c(P.a0(a,0,null,b,null))
return a},
M:function(a,b,c,d,e){var s=e==null?J.aV(b):e
return new P.dS(s,!0,a,c,"Index out of range")},
y:function(a){return new P.f1(a)},
iW:function(a){return new P.eZ(a)},
bF:function(a){return new P.dF(a)},
t:function(a){return new P.fm(a)},
a_:function(a,b,c){return new P.hJ(a,b,c)},
kX:function(a){H.pD(a)},
nJ:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.E(a5,4)^58)*3|C.a.E(a5,0)^100|C.a.E(a5,1)^97|C.a.E(a5,2)^116|C.a.E(a5,3)^97)>>>0
if(s===0)return P.lI(a4<a4?C.a.t(a5,0,a4):a5,5,a3).geb()
else if(s===32)return P.lI(C.a.t(a5,5,a4),0,a3).geb()}r=P.hS(8,0,!1,t.S)
q=r.length
if(0>=q)return H.b(r,0)
r[0]=0
if(1>=q)return H.b(r,1)
r[1]=-1
if(2>=q)return H.b(r,2)
r[2]=-1
if(7>=q)return H.b(r,7)
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.md(a5,0,a4,0,r)>=14){if(7>=r.length)return H.b(r,7)
r[7]=a4}if(1>=r.length)return H.b(r,1)
p=r[1]
if(p>=0)if(P.md(a5,0,p,20,r)===20){if(7>=r.length)return H.b(r,7)
r[7]=p}q=r.length
if(2>=q)return H.b(r,2)
o=r[2]+1
if(3>=q)return H.b(r,3)
n=r[3]
if(4>=q)return H.b(r,4)
m=r[4]
if(5>=q)return H.b(r,5)
l=r[5]
if(6>=q)return H.b(r,6)
k=r[6]
if(k<l)l=k
if(m<o)m=l
else if(m<=p)m=p+1
if(n<o)n=m
if(7>=q)return H.b(r,7)
j=r[7]<0
if(j)if(o>p+3){i=a3
j=!1}else{q=n>0
if(q&&n+1===m){i=a3
j=!1}else{if(!(l<a4&&l===m+2&&C.a.a3(a5,"..",m)))h=l>m+2&&C.a.a3(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.a3(a5,"file",0)){if(o<=0){if(!C.a.a3(a5,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.t(a5,m,a4)
p-=0
q=s-0
l+=q
k+=q
a4=a5.length
o=7
n=7
m=7}else if(m===l){++k
f=l+1
a5=C.a.aY(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.a3(a5,"http",0)){if(q&&n+3===m&&C.a.a3(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aY(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.a3(a5,"https",0)){if(q&&n+4===m&&C.a.a3(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aY(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.t(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.fH(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.oj(a5,0,p)
else{if(p===0)P.c1(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.ok(a5,d,o-1):""
b=P.og(a5,o,n,!1)
q=n+1
if(q<m){a=H.lt(C.a.t(a5,q,m),a3)
a0=P.oi(a==null?H.q(P.a_("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.oh(a5,m,l,a3,i,b!=null)
a2=l<k?P.kH(a5,l+1,k,a3):a3
return new P.bz(i,c,b,a0,a1,a2,k<a4?P.of(a5,k+1,a4):a3)},
lK:function(a){var s=t.N
return C.b.hG(H.d(a.split("&"),t.s),P.le(s,s),new P.j0(C.h))},
nI:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.iY(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.U(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.k_(C.a.t(a,q,r),null)
if(typeof n!=="number")return n.V()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.b(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.k_(C.a.t(a,q,c),null)
if(typeof n!=="number")return n.V()
if(n>255)j.$2(k,q)
if(p>=s)return H.b(i,p)
i[p]=n
return i},
lJ:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.iZ(a),b=new P.j_(c,a)
if(a.length<2)c.$1("address is too short")
s=H.d([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.U(a,r)
if(n===58){if(r===a0){++r
if(C.a.U(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gaA(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.nI(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.b(j,g)
j[g]=0
d=g+1
if(d>=i)return H.b(j,d)
j[d]=0
g+=2}else{d=C.c.aO(f,8)
if(g<0||g>=i)return H.b(j,g)
j[g]=d
d=g+1
if(d>=i)return H.b(j,d)
j[d]=f&255
g+=2}}return j},
m0:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c1:function(a,b,c){throw H.c(P.a_(c,a,b))},
oi:function(a,b){if(a!=null&&a===P.m0(b))return null
return a},
og:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.U(a,b)===91){s=c-1
if(C.a.U(a,s)!==93)P.c1(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.od(a,r,s)
if(q<s){p=q+1
o=P.m5(a,C.a.a3(a,"25",p)?q+3:p,s,"%25")}else o=""
P.lJ(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.U(a,n)===58){q=C.a.bn(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.m5(a,C.a.a3(a,"25",p)?q+3:p,c,"%25")}else o=""
P.lJ(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.om(a,b,c)},
od:function(a,b,c){var s=C.a.bn(a,"%",b)
return s>=b&&s<c?s:c},
m5:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.V(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.U(a,s)
if(p===37){o=P.kI(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.V("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.c1(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.b(C.j,n)
n=(C.j[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.V("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.U(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.t(a,r,s)
if(i==null){i=new P.V("")
n=i}else n=i
n.a+=j
n.a+=P.kG(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
om:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.U(a,s)
if(o===37){n=P.kI(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.V("")
l=C.a.t(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.t(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.b(C.y,m)
m=(C.y[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.V("")
if(r<s){q.a+=C.a.t(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.b(C.l,m)
m=(C.l[m]&1<<(o&15))!==0}else m=!1
if(m)P.c1(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.U(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.V("")
m=q}else m=q
m.a+=l
m.a+=P.kG(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
oj:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.m2(C.a.E(a,b)))P.c1(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.E(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.b(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(!p)P.c1(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.oc(r?a.toLowerCase():a)},
oc:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ok:function(a,b,c){return P.de(a,b,c,C.V,!1)},
oh:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.de(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a8(s,"/"))s="/"+s
return P.ol(s,e,f)},
ol:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a8(a,"/"))return P.on(a,!s||c)
return P.oo(a)},
kH:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bC("Both query and queryParameters specified"))
return P.de(a,b,c,C.m,!0)}if(d==null)return null
s=new P.V("")
r.a=""
d.G(0,new P.jD(new P.jE(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
of:function(a,b,c){return P.de(a,b,c,C.m,!0)},
kI:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.U(a,b+1)
r=C.a.U(a,n)
q=H.jW(s)
p=H.jW(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aO(o,4)
if(n>=8)return H.b(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aM(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
kG:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.b(s,0)
s[0]=37
q=C.a.E(k,a>>>4)
if(1>=r)return H.b(s,1)
s[1]=q
q=C.a.E(k,a&15)
if(2>=r)return H.b(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.h4(a,6*o)&63|p
if(n>=r)return H.b(s,n)
s[n]=37
q=n+1
l=C.a.E(k,m>>>4)
if(q>=r)return H.b(s,q)
s[q]=l
l=n+2
q=C.a.E(k,m&15)
if(l>=r)return H.b(s,l)
s[l]=q
n+=3}}return P.eG(s,0,null)},
de:function(a,b,c,d,e){var s=P.m4(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
m4:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.U(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.b(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.kI(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.b(C.l,n)
n=(C.l[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.c1(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.U(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.kG(o)}}if(p==null){p=new P.V("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.h(m)
if(typeof l!=="number")return H.e(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
m3:function(a){if(C.a.a8(a,"."))return!0
return C.a.dP(a,"/.")!==-1},
oo:function(a){var s,r,q,p,o,n,m
if(!P.m3(a))return a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.E(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.b(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.u(s,"/")},
on:function(a,b){var s,r,q,p,o,n
if(!P.m3(a))return!b?P.m1(a):a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaA(s)!==".."){if(0>=s.length)return H.b(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.b(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaA(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.b(s,0)
r=P.m1(s[0])
if(0>=s.length)return H.b(s,0)
s[0]=r}return C.b.u(s,"/")},
m1:function(a){var s,r,q,p=a.length
if(p>=2&&P.m2(J.mO(a,0)))for(s=1;s<p;++s){r=C.a.E(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.a9(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.b(C.n,q)
q=(C.n[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
oe:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.E(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bC("Invalid URL encoding"))}}return s},
kJ:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.E(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.h!==d)q=!1
else q=!0
if(q)return C.a.t(a,b,c)
else p=new H.O(C.a.t(a,b,c))}else{p=H.d([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.E(a,o)
if(r>127)throw H.c(P.bC("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bC("Truncated URI"))
p.push(P.oe(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a0.c2(p)},
m2:function(a){var s=a|32
return 97<=s&&s<=122},
lI:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.E(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a_(k,a,r))}}if(q<0&&r>b)throw H.c(P.a_(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.E(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaA(j)
if(p!==44||r!==n+7||!C.a.a3(a,"base64",n+1))throw H.c(P.a_("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.H.hP(0,a,m,s)
else{l=P.m4(a,m,s,C.m,!0)
if(l!=null)a=C.a.aY(a,m,s,l)}return new P.iX(a,j,c)},
ov:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.nh(22,new P.jL(),t.gc),l=new P.jK(m),k=new P.jM(),j=new P.jN(),i=l.$2(0,225)
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
md:function(a,b,c,d,e){var s,r,q,p,o,n=$.mN()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.b(n,d)
r=n[d]
q=C.a.E(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.b(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.b(e,o)
e[o]=s}return d},
ap:function ap(){},
ab:function ab(a,b){this.a=a
this.b=b},
Y:function Y(){},
bn:function bn(a){this.a=a},
hx:function hx(){},
hy:function hy(){},
J:function J(){},
dr:function dr(a){this.a=a},
ec:function ec(){},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bU:function bU(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dS:function dS(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
f1:function f1(a){this.a=a},
eZ:function eZ(a){this.a=a},
eC:function eC(a){this.a=a},
dF:function dF(a){this.a=a},
ef:function ef(){},
cI:function cI(){},
dH:function dH(a){this.a=a},
fm:function fm(a){this.a=a},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
i:function i(){},
dT:function dT(){},
o:function o(){},
G:function G(){},
ah:function ah(){},
P:function P(){},
L:function L(){},
B:function B(){},
V:function V(a){this.a=a},
j0:function j0(a){this.a=a},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
jE:function jE(a,b){this.a=a
this.b=b},
jD:function jD(a){this.a=a},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(){},
jK:function jK(a){this.a=a},
jM:function jM(){},
jN:function jN(){},
fH:function fH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fe:function fe(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
po:function(a){var s
if(t.u.b(a)){s=J.mT(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.da(a.data,a.height,a.width)},
pn:function(a){if(a instanceof P.da)return{data:a.a,height:a.b,width:a.c}
return a},
b9:function(a){var s,r,q,p,o
if(a==null)return null
s=P.le(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
pm:function(a){var s={}
a.G(0,new P.jR(s))
return s},
jx:function jx(){},
jz:function jz(a,b){this.a=a
this.b=b},
jA:function jA(a,b){this.a=a
this.b=b},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
jR:function jR(a){this.a=a},
jy:function jy(a,b){this.a=a
this.b=b},
dP:function dP(a,b){this.a=a
this.b=b},
hH:function hH(){},
hI:function hI(){},
js:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nU:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fF:function fF(){},
a4:function a4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aH:function aH(){},
dY:function dY(){},
aK:function aK(){},
ed:function ed(){},
ih:function ih(){},
eF:function eF(){},
n:function n(){},
aN:function aN(){},
eP:function eP(){},
ft:function ft(){},
fu:function fu(){},
fB:function fB(){},
fC:function fC(){},
fP:function fP(){},
fQ:function fQ(){},
fW:function fW(){},
fX:function fX(){},
b4:function b4(){},
hg:function hg(){},
dt:function dt(){},
hh:function hh(a){this.a=a},
du:function du(){},
aW:function aW(){},
ee:function ee(){},
f9:function f9(){},
er:function er(){},
eA:function eA(){},
fL:function fL(){},
fM:function fM(){}},W={
kh:function(){var s=document.createElement("canvas")
return s},
hz:function(a){return"wheel"},
la:function(a){var s=document.createElement("img")
s.src=a
return s},
n8:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.bb(s)}return q},
jr:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lT:function(a,b,c,d){var s=W.jr(W.jr(W.jr(W.jr(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
W:function(a,b,c,d){var s=new W.fl(a,b,c==null?null:W.me(new W.jq(c),t.G),!1)
s.hb()
return s},
me:function(a,b){var s=$.aA
if(s===C.i)return a
return s.dg(a,b)},
p:function p(){},
hc:function hc(){},
dp:function dp(){},
dq:function dq(){},
bj:function bj(){},
bk:function bk(){},
aq:function aq(){},
hq:function hq(){},
H:function H(){},
cg:function cg(){},
hr:function hr(){},
ag:function ag(){},
aC:function aC(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
ch:function ch(){},
ci:function ci(){},
dK:function dK(){},
hw:function hw(){},
fb:function fb(a,b){this.a=a
this.b=b},
F:function F(){},
k:function k(){},
f:function f(){},
ac:function ac(){},
bH:function bH(){},
dO:function dO(){},
dQ:function dQ(){},
ar:function ar(){},
hL:function hL(){},
bo:function bo(){},
bp:function bp(){},
bJ:function bJ(){},
bL:function bL(){},
dB:function dB(){},
br:function br(){},
hT:function hT(){},
ia:function ia(){},
bO:function bO(){},
e3:function e3(){},
ib:function ib(a){this.a=a},
e4:function e4(){},
ic:function ic(a){this.a=a},
au:function au(){},
e5:function e5(){},
ad:function ad(){},
fa:function fa(a){this.a=a},
w:function w(){},
cD:function cD(){},
av:function av(){},
ej:function ej(){},
es:function es(){},
im:function im(a){this.a=a},
eu:function eu(){},
aj:function aj(){},
ew:function ew(){},
ax:function ax(){},
ex:function ex(){},
ay:function ay(){},
eD:function eD(){},
iy:function iy(a){this.a=a},
ak:function ak(){},
b3:function b3(){},
al:function al(){},
a8:function a8(){},
eI:function eI(){},
eJ:function eJ(){},
iI:function iI(){},
az:function az(){},
bw:function bw(){},
eO:function eO(){},
iL:function iL(){},
aQ:function aQ(){},
j1:function j1(){},
f5:function f5(){},
b5:function b5(){},
bZ:function bZ(){},
fc:function fc(){},
cU:function cU(){},
fq:function fq(){},
cY:function cY(){},
fK:function fK(){},
fR:function fR(){},
kk:function kk(a,b){this.a=a
this.$ti=b},
fl:function fl(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jq:function jq(a){this.a=a},
kz:function kz(a){this.$ti=a},
K:function K(){},
cl:function cl(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
fd:function fd(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fn:function fn(){},
fo:function fo(){},
fr:function fr(){},
fs:function fs(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
fD:function fD(){},
fE:function fE(){},
fG:function fG(){},
d3:function d3(){},
d4:function d4(){},
fI:function fI(){},
fJ:function fJ(){},
fO:function fO(){},
fS:function fS(){},
fT:function fT(){},
d6:function d6(){},
d7:function d7(){},
fU:function fU(){},
fV:function fV(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){}},K={
a1:function(a){var s=new K.io()
s.ep(a)
return s},
hd:function hd(){},
dR:function dR(){},
hW:function hW(){},
b0:function b0(){this.a=null},
io:function io(){this.a=null}},L={eB:function eB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},eN:function eN(a){this.b=a
this.c=null},iJ:function iJ(){var _=this
_.d=_.c=_.b=_.a=null},eQ:function eQ(a){this.b=a
this.a=this.c=null}},O={
ki:function(a){var s=new O.a3(a.W("a3<0>"))
s.bf(a)
return s},
a3:function a3(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cz:function cz(){this.b=this.a=null},
lg:function(){var s,r=new O.e2(),q=O.ki(t.hc)
r.e=q
q.be(r.gf7(),r.gf9())
q=new O.aI(r,"emission")
q.c=new A.Z(!1,!1,!1)
q.f=new V.Q(0,0,0)
r.f=q
q=new O.aI(r,"ambient")
q.c=new A.Z(!1,!1,!1)
q.f=new V.Q(0,0,0)
r.r=q
q=new O.aI(r,"diffuse")
q.c=new A.Z(!1,!1,!1)
q.f=new V.Q(0,0,0)
r.x=q
q=new O.aI(r,"invDiffuse")
q.c=new A.Z(!1,!1,!1)
q.f=new V.Q(0,0,0)
r.y=q
q=new O.i1(r,"specular")
q.c=new A.Z(!1,!1,!1)
q.f=new V.Q(0,0,0)
q.ch=100
r.z=q
q=new O.hY(r,"bump")
q.c=new A.Z(!1,!1,!1)
r.Q=q
r.ch=null
q=new O.aI(r,"reflect")
q.c=new A.Z(!1,!1,!1)
q.f=new V.Q(0,0,0)
r.cx=q
q=new O.i0(r,"refract")
q.c=new A.Z(!1,!1,!1)
q.f=new V.Q(0,0,0)
q.ch=1
r.cy=q
q=new O.hX(r,"alpha")
q.c=new A.Z(!1,!1,!1)
q.f=1
r.db=q
q=new D.cs()
q.bf(t.gj)
q.e=H.d([],t.bb)
q.f=H.d([],t.cP)
q.r=H.d([],t.eb)
q.x=H.d([],t.du)
q.z=q.y=null
q.bx(q.gf5(),q.gfG(),q.gfK())
r.dx=q
s=new O.i_()
s.b=new V.bl(0,0,0,0)
s.c=1
s.d=10
s.e=!1
r.dy=s
s=q.y
q=s==null?q.y=D.I():s
q.m(0,r.gfX())
q=r.dx
s=q.z
q=s==null?q.z=D.I():s
q.m(0,r.gaM())
r.fr=null
return r},
e2:function e2(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(a,b){this.a=a
this.b=b},
i3:function i3(){},
i4:function i4(a,b){this.a=a
this.b=b},
i5:function i5(){},
i6:function i6(a,b){this.a=a
this.b=b},
i7:function i7(){},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(){},
hX:function hX(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cy:function cy(){},
hY:function hY(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aI:function aI(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
i_:function i_(){var _=this
_.e=_.d=_.c=_.b=null},
i0:function i0(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
i1:function i1(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eH:function eH(){}},Y={
pG:function(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.a,d=a1.b,c=a1.c,b=new V.v(e,d,c).I(),a=a2.X(b)
if(a===0)return new Y.b2(f,f,C.e,0)
if(a>0&&!0)return new Y.b2(f,f,C.e,0)
s=a0.a
r=a0.b
q=a0.c
p=a1.d
o=a0.d
n=(p-new V.v(s,r,q).X(b)+o)/a
if(n<0)return new Y.b2(f,f,C.e,n)
if(n>1)return new Y.b2(f,f,C.r,n)
m=a2.a
if(typeof m!=="number")return m.j()
if(typeof s!=="number")return s.p()
m=s+m*n
s=a2.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return r.p()
s=r+s*n
r=a2.c
if(typeof r!=="number")return r.j()
if(typeof q!=="number")return q.p()
r=q+r*n
l=new V.v(e,d,c)
k=l.j(0,p)
p=k.p(0,l.j(0,p-k.X(l)))
c=p.a
d=p.b
p=p.c
if(typeof c!=="number")return H.e(c)
j=m-c
if(typeof d!=="number")return H.e(d)
i=s-d
if(typeof p!=="number")return H.e(p)
h=r-p
g=Math.sqrt(j*j+i*i+h*h)<o?C.q:C.f
return new Y.b2(new V.N(m,s,r),new V.N(c,d,p),g,n)},
pK:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k=null,j=a3.a,i=a3.b,h=a3.c,g=new V.N(j,i,h),f=a4.a,e=a4.b,d=a4.c,c=new V.N(f,e,d),b=c.a4(g),a=a3.d,a0=a+a4.d,a1=a0*a0,a2=b.X(b)
if(a2<a1)return new Y.aO(g,c,k,C.q,0)
s=a6.n(0,a5)
r=Math.sqrt(s.X(s))
q=b.X(s.I())
$.A().toString
if(Math.abs(a2-a1)<1e-9&&q<0)return new Y.aO(k,k,k,C.e,0)
p=q*q+a1-a2
if(p<0)return new Y.aO(k,k,k,C.e,0)
o=q-Math.sqrt(p)
if(o<0)return new Y.aO(k,k,k,C.e,o)
if(o>r)return new Y.aO(k,k,k,C.r,o)
n=o/r
m=a5.a
if(typeof m!=="number")return m.j()
if(typeof j!=="number")return j.p()
m=j+m*n
j=a5.b
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return i.p()
j=i+j*n
i=a5.c
if(typeof i!=="number")return i.j()
if(typeof h!=="number")return h.p()
i=h+i*n
h=a6.a
if(typeof h!=="number")return h.j()
if(typeof f!=="number")return f.p()
h=f+h*n
f=a6.b
if(typeof f!=="number")return f.j()
if(typeof e!=="number")return e.p()
f=e+f*n
e=a6.c
if(typeof e!=="number")return e.j()
if(typeof d!=="number")return d.p()
n=d+e*n
l=a/Math.sqrt(a2)
return new Y.aO(new V.N(m,j,i),new V.N(h,f,n),new V.N((h-m)*l+m,(f-j)*l+j,(n-i)*l+i),C.f,o)},
bV:function bV(a){this.b=a},
dx:function dx(){},
b2:function b2(a,b,c,d){var _=this
_.r=a
_.x=b
_.a=c
_.b=d},
aO:function aO(a,b,c,d,e){var _=this
_.r=a
_.x=b
_.y=c
_.a=d
_.b=e}},E={
kj:function(){var s=null,r=new E.aD()
r.cD(s,!0,s,"",s,s)
return r},
lP:function(){if(J.ka(window.navigator.vendor,"Google"))return C.F
if(J.ka(window.navigator.userAgent,"Firefox"))return C.u
var s=window.navigator.appVersion
if(J.aT(s).J(s,"Trident")||C.a.J(s,"Edge"))return C.v
if(J.ka(window.navigator.appName,"Microsoft"))return C.v
return C.G},
lQ:function(){var s=window.navigator.appVersion
if(J.aT(s).J(s,"Win"))return C.Y
if(C.a.J(s,"Mac"))return C.A
if(C.a.J(s,"Linux"))return C.Z
return C.a_},
ny:function(a,b){var s=new E.ii(a)
s.eo(a,b)
return s},
nG:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.lE(a,!0,!0,!0,!1)
s=W.kh()
r=s.style
r.width="100%"
r.height="100%"
J.kd(a).m(0,s)
return E.lE(s,!0,!0,!0,!1)},
lE:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.eL(),n=t.z,m=C.k.cv(a,"webgl2",P.nf(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.t("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.ny(m,a)
n=new T.iE(m)
n.b=m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.f3(a)
s=new X.hO()
s.d=P.lf(t.e)
n.b=s
s=new X.id(n)
s.f=0
s.r=V.bv()
s.x=V.bv()
s.ch=s.Q=1
n.c=s
s=new X.hU(n)
s.r=0
s.x=V.bv()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.iK(n)
s.f=V.bv()
s.r=V.bv()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.d([],t.eG)
s=$.hB
n.Q=(s==null?$.hB=new E.fj(E.lP(),E.lQ()):s).a===C.u?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.W(q,"contextmenu",n.gfh(),!1))
n.z.push(W.W(a,"focus",n.gfn(),!1))
n.z.push(W.W(a,"blur",n.gfb(),!1))
n.z.push(W.W(q,"keyup",n.gbO(),!1))
n.z.push(W.W(q,"keydown",n.gbz(),!1))
n.z.push(W.W(a,"mousedown",n.gfu(),!1))
n.z.push(W.W(a,"mouseup",n.gfA(),!1))
n.z.push(W.W(a,p,n.gfw(),!1))
r=n.z
W.hz(a)
W.hz(a)
r.push(W.W(a,W.hz(a),n.gfC(),!1))
n.z.push(W.W(q,p,n.gfj(),!1))
n.z.push(W.W(q,"mouseup",n.gfl(),!1))
n.z.push(W.W(q,"pointerlockchange",n.gfE(),!1))
n.z.push(W.W(a,"touchstart",n.gfQ(),!1))
n.z.push(W.W(a,"touchend",n.gfM(),!1))
n.z.push(W.W(a,"touchmove",n.gfO(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ab(Date.now(),!1)
o.db=0
o.cZ()
return o},
hk:function hk(){},
aD:function aD(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bD:function bD(a){this.b=a},
bS:function bS(a){this.b=a},
fj:function fj(a,b){this.a=a
this.b=b},
ii:function ii(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ij:function ij(a){this.a=a},
ik:function ik(a){this.a=a},
il:function il(a){this.a=a},
eL:function eL(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iH:function iH(a){this.a=a}},Z={
ky:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.c2(c)),35044)
a.bindBuffer(b,null)
return new Z.f6(b,s)},
an:function(a){return new Z.aR(a)},
f6:function f6(a,b){this.a=a
this.b=b},
dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jl:function jl(a){this.a=a},
dz:function dz(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a){this.a=a}},D={
I:function(){var s=new D.bG()
s.d=0
return s},
hl:function hl(){},
bG:function bG(){var _=this
_.d=_.c=_.b=_.a=null},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
R:function R(){this.b=null},
aE:function aE(){this.b=null},
aF:function aF(){this.b=null},
C:function C(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
l7:function(a,b){var s,r,q=new D.bm()
q.c=new V.Q(1,1,1)
q.a=V.nN()
q.d=V.kx()
q.e=V.nM()
s=q.b
q.b=b
b.gv().m(0,q.gez())
r=new D.C("mover",s,q.b)
r.b=!0
q.as(r)
if(!q.c.q(0,a)){s=q.c
q.c=a
r=new D.C("color",s,a)
r.b=!0
q.as(r)}return q},
dv:function dv(){},
bm:function bm(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
S:function S(){},
cs:function cs(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
el:function el(){},
ey:function ey(){}},X={
cr:function(){var s=new X.cq()
s.bf(t.g1)
s.f=s.e=null
s.r=!1
s.y=s.x=null
s.bx(s.ges(),s.gev(),s.gex())
return s},
dA:function dA(a,b){this.a=a
this.b=b},
a7:function a7(a,b){this.a=a
this.b=b},
aY:function aY(a){this.c=a
this.b=null},
cq:function cq(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hO:function hO(){this.d=this.b=this.a=null},
cv:function cv(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},
hU:function hU(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},
id:function id(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
em:function em(){},
cL:function cL(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},
iK:function iK(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},
f3:function f3(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
n7:function(a){var s=new X.hK(),r=new V.bl(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.lz
if(r==null){r=V.ly(0,0,1,1)
$.lz=r}s.r=r
return s},
kg:function kg(){},
hK:function hK(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eg:function eg(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
iz:function iz(){}},V={
kU:function(a,b,c){var s
if(c<=0)s=a
else if(c>=1)s=b
else{if(typeof b!=="number")return b.n()
if(typeof a!=="number")return H.e(a)
s=a+c*(b-a)}return s},
pL:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bd(a-b,s)
return(a<0?a+s:a)+b},
D:function(a,b,c){if(a==null)return C.a.af("null",c)
$.A().toString
return C.a.af(C.d.e9(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
c8:function(a,b,c){var s,r,q,p,o,n,m=H.d([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.r)(a),++q){p=V.D(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.b(m,o)
s=C.a.af(m[o],r)
n=m.length
if(o>=n)return H.b(m,o)
m[o]=s}return m},
kW:function(a){return C.d.ih(Math.pow(2,C.S.cd(Math.log(H.pk(a))/Math.log(2))))},
nl:function(){var s=$.li
return s==null?$.li=new V.aZ(1,0,0,0,1,0,0,0,1):s},
lh:function(a){var s=Math.cos(a),r=Math.sin(a)
return new V.aZ(s,0,-r,0,1,0,r,0,s)},
bN:function(){var s=$.ln
return s==null?$.ln=V.b_(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
b_:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ll:function(a,b,c){return V.b_(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lk:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.b_(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
lm:function(a,b,c,d){d=V.kx()
return V.lj(V.kt(),d,new V.v(a,b,c))},
lj:function(a,b,c){var s=c.I(),r=b.b2(s).I(),q=s.b2(r),p=new V.v(a.a,a.b,a.c),o=r.M(0).X(p),n=q.M(0).X(p),m=s.M(0).X(p)
return V.b_(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
bv:function(){var s=$.lq
return s==null?$.lq=new V.aw(0,0):s},
kt:function(){var s=$.aL
return s==null?$.aL=new V.N(0,0,0):s},
ly:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eq(a,b,c,d)},
bY:function(){var s=$.by
return s==null?$.by=new V.v(0,0,0):s},
nM:function(){var s=$.j7
return s==null?$.j7=new V.v(-1,0,0):s},
kx:function(){var s=$.j8
return s==null?$.j8=new V.v(0,1,0):s},
nN:function(){var s=$.j9
return s==null?$.j9=new V.v(0,0,1):s},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hC:function hC(){},
aZ:function aZ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aJ:function aJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ei:function ei(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aw:function aw(a,b){this.a=a
this.b=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
cE:function cE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eq:function eq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am:function am(a,b){this.a=a
this.b=b},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
pE:function(a){P.nH(C.Q,new V.k6(a))},
nB:function(a){var s=new V.it()
s.er(a,!0)
return s},
hm:function hm(a){this.a=a
this.d=this.c=null},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k6:function k6(a){this.a=a},
it:function it(){this.b=this.a=null},
iv:function iv(a){this.a=a},
iu:function iu(a){this.a=a}},U={
dE:function(){var s=new U.ho()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
hp:function(a){var s=new U.cd()
s.sY(0,a)
return s},
ho:function ho(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cd:function cd(){this.b=this.a=null},
bI:function bI(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
T:function T(){},
cR:function cR(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cS:function cS(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dL:function dL(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nj:function(a,b){var s=a.ay,r=new A.e1(b,s)
r.eq(b,s)
r.en(a,b)
return r},
nk:function(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="MaterialLight_"+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+a9.gal(a9)+b0.gal(b0)+b1.gal(b1)+b2.gal(b2)+b3.gal(b3)+b4.gal(b4)+"_"
a0+=a1?"1":"0"
a0+=a2?"1":"0"
a0+=a3?"1":"0"
a0=a0+"0_"+a5
s=b5.length
if(s>0){a0+="_Bar"
for(r=0;r<b5.length;b5.length===s||(0,H.r)(b5),++r)a0+="_"+H.h(b5[r].a)}s=b6.length
if(s>0){a0+="_Dir"
for(r=0;r<b6.length;b6.length===s||(0,H.r)(b6),++r)a0+="_"+H.h(b6[r].a)}s=b7.length
if(s>0){a0+="_Point"
for(r=0;r<b7.length;b7.length===s||(0,H.r)(b7),++r)a0+="_"+H.h(b7[r].a)}s=b8.length
if(s>0){a0+="_Spot"
for(r=0;r<b8.length;b8.length===s||(0,H.r)(b8),++r)a0+="_"+H.h(b8[r].a)}for(s=b5.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b5[r].b
for(o=b6.length,r=0;r<o;++r,p=!0)q+=b6[r].b
for(o=b7.length,r=0;r<o;++r,p=!0)q+=b7[r].b
for(n=b8.length,r=0;r<n;++r,p=!0)q+=b8[r].b
m=b2.a||b2.b||b2.c||b3.a||b3.b||b3.c
l=s>0
if(!(a7.a||a7.b||a7.c))if(!(a8.a||a8.b||a8.c)){s=a9.a||a9.b||a9.c||b0.a||b0.b||b0.c
k=s}else k=!0
else k=!0
s=!b0.a
j=!s||b0.b||b0.c||l||o>0||m
if(!(a8.a||a8.b||a8.c))i=a9.a||a9.b||a9.c||!s||b0.b||b0.c
else i=!0
if(!i)h=b1.a||b1.b||b1.c||m
else h=!0
g=b1.a||b1.b||b1.c
f=a6.b||a7.b||a8.b||a9.b||b0.b||b1.b||b2.b||b3.b||b4.b
e=a6.c||a7.c||a8.c||a9.c||b0.c||b1.c||b2.c||b3.c||b4.c
d=a5>0
c=h||g||j||!1
b=l&&i
a1=a1&&f
a2=a2&&e
a=$.bf()
if(h){s=$.be()
a=new Z.aR(a.a|s.a)}if(g){s=$.bd()
a=new Z.aR(a.a|s.a)}if(f){s=$.bg()
a=new Z.aR(a.a|s.a)}if(e){s=$.bh()
a=new Z.aR(a.a|s.a)}if(d){s=$.bc()
a=new Z.aR(a.a|s.a)}return new A.hZ(a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,q,m,i,m,p,c,!0,b,!1,k,p,j,h,g,f,e,d,a1,a2,a3,!1,a5,a0.charCodeAt(0)==0?a0:a0,a)},
jO:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"
else if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jP:function(a,b,c){var s,r="Txt, txt2D).rgb;\n",q="Txt, txtCube).rgb;\n"
A.jO(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hb(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+q
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+q
a.a=s}a.a=s+"}\n"},
oP:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||r.c))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jO(b,r,"emission")
s=b.a+="\n"
s+="vec3 emissionColor()\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
b.a=r}else if(r.c){r=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   return emissionClr;\n"
b.a=r}else if(r.b){r=s+"   return texture2D(emissionTxt, txt2D).rgb;\n"
b.a=r}else if(r.c){r=s+"   return textureCube(emissionTxt, txtCube).rgb;\n"
b.a=r}else r=s
r+="}\n"
b.a=r
b.a=r+"\n"},
oL:function(a,b){var s,r=a.b
if(!(r.a||r.b||r.c))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jP(b,r,"ambient")
b.a+="\n"},
oN:function(a,b){var s,r=a.c
if(!(r.a||r.b||r.c))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jP(b,r,"diffuse")
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
oQ:function(a,b){var s,r=a.d
if(!(r.a||r.b||r.c))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jP(b,r,"invDiffuse")
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
oW:function(a,b){var s,r=a.e
if(!(r.a||r.b||r.c))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jP(b,r,"specular")
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
oS:function(a,b){var s,r,q,p
if(!a.k4)return
s=b.a+="// === Normal ===\n"
s=b.a=s+"\n"
r=a.f
q=r.b
if(q){s+="uniform sampler2D bumpTxt;\n"
b.a=s
s=b.a=s+"\n"}else if(r.c){s+="uniform samplerCube bumpTxt;\n"
b.a=s
s+="\n"
b.a=s}s+="vec3 normal()\n"
b.a=s
s=b.a=s+"{\n"
p=r.a
if(!(p||q||r.c)||p)s=b.a=s+"   return normalize(normalVec);\n"
else{s=(q?b.a=s+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":b.a=s+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n"
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
oU:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||r.c))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jO(b,r,"reflect")
s=b.a+="\n"
s+="vec3 reflect(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
b.a=r}else if(r.c){r=s+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = reflectClr;\n"
b.a=r}else if(r.b){r=s+"   vec3 scalar = texture2D(reflectTxt, txt2D).rgb;\n"
b.a=r}else if(r.c){r=s+"   vec3 scalar = textureCube(reflectTxt, txtCube).rgb;\n"
b.a=r}else r=s
r+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
oV:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||r.c))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jO(b,r,"refract")
s=b.a+="uniform float refraction;\n"
s+="\n"
b.a=s
s+="vec3 refract(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
b.a=r}else if(r.c){r=s+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = refractClr;\n"
b.a=r}else if(r.b){r=s+"   vec3 scalar = texture2D(refractTxt, txt2D).rgb;\n"
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
oM:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.h(s)
q=A.hb(r)
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
if(typeof s!=="number")return s.a7()
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
s=c.a+="   return "+C.b.u(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=H.d([],p)
s=a.b
if(s.a||s.b||s.c)o.push("ambientColor")
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
s=a.c
if(s.a||s.b||s.c)n.push("diffuse(norm, normDir)")
s=a.d
if(s.a||s.b||s.c)n.push("invDiffuse(norm, normDir)")
s=a.e
if(s.a||s.b||s.c)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.b.u(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.u(o," + ")+");\n"
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
oO:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.h(s)
q=A.hb(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.a7()
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
l=a.b
if(l.a||l.b||l.c)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.d([],p)
p=a.c
if(p.a||p.b||p.c)k.push("diffuse(norm, lit.viewDir)")
p=a.d
if(p.a||p.b||p.c)k.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(p.a||p.b||p.c)k.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.b.u(k," + ")+");\n"}else c.a+="   highLight = "+C.b.u(k," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.b.u(m," + ")+");\n"
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
oT:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.h(s)
q=A.hb(r)
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
if(typeof s!=="number")return s.a7()
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
m=c.a+="   return "+C.b.u(j," * ")+";\n"
m+="}\n"
c.a=m
m+="\n"
c.a=m
m+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=m
c.a=m+"{\n"
j=H.d([],p)
m=a.b
if(m.a||m.b||m.c)j.push("ambientColor")
if(a.dx){c.a+=u.k
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
m=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
m+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=m
c.a=m+"   if(length(intensity) > 0.0001) {\n"
i=H.d([],p)
p=a.c
if(p.a||p.b||p.c)i.push("diffuse(norm, normDir)")
p=a.d
if(p.a||p.b||p.c)i.push("invDiffuse(norm, normDir)")
p=a.e
if(p.a||p.b||p.c)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.b.u(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.b.u(j," + ")+");\n"
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
oX:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.h(s)
q=A.hb(r)
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
if(typeof s!=="number")return s.a7()
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
if(m){s=$.hB
if(s==null)s=$.hB=new E.fj(E.lP(),E.lQ())
p=c.a
if(s.b===C.A){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
p=c.a+="   return "+C.b.u(h," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=p
c.a=p+"{\n"
h=H.d([],s)
p=a.b
if(p.a||p.b||p.c)h.push("ambientColor")
if(a.dx){c.a+=u.k
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
p=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
p+="   if(length(intensity) > 0.0001) {\n"
c.a=p
c.a=p+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=H.d([],s)
s=a.c
if(s.a||s.b||s.c)g.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||s.c)g.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||s.c)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.b.u(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.u(h," + ")+");\n"
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
oR:function(a,b){var s,r
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
s=a.b
if(s.a||s.b||s.c)r.push("ambientColor")
s=a.c
if(s.a||s.b||s.c)r.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||s.c)r.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||s.c)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.b.u(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
oY:function(a){var s,r,q,p,o,n,m,l,k,j="   lightAccum += all",i="precision mediump float;\n\n",h="precision mediump float;\n\nvarying vec3 normalVec;\n",g=new P.V("")
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
A.oP(a,g)
A.oL(a,g)
A.oN(a,g)
A.oQ(a,g)
A.oW(a,g)
r=a.db
if(r){p=g.a+="// === Environmental ===\n"
p+="\n"
g.a=p
p+="uniform samplerCube envSampler;\n"
g.a=p
g.a=p+"\n"
A.oU(a,g)
A.oV(a,g)}A.oS(a,g)
p=g.a+="// === Alpha ===\n"
p=g.a=p+"\n"
o=a.y
n=o.a
if(n){p+="uniform float alpha;\n"
g.a=p}m=o.b
if(m){p+="uniform sampler2D alphaTxt;\n"
g.a=p}o=o.c
p=(o?g.a=p+"uniform samplerCube alphaTxt;\n":p)+"float alphaValue()\n"
g.a=p
p=g.a=p+"{\n"
if(!(n||m||o))p=g.a=p+"   return 1.0;\n"
else if(m||o){if(n){if(m){p+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
g.a=p}else if(o){p+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
g.a=p}}else if(m){p+="   float a = texture2D(alphaTxt, txt2D).a;\n"
g.a=p}else if(o){p+="   float a = textureCube(alphaTxt, txtCube).a;\n"
g.a=p}p+="   if (a <= 0.000001) discard;\n"
g.a=p
p+="   return a;\n"
g.a=p}else if(n){p+="   return alpha;\n"
g.a=p}p+="}\n"
g.a=p
g.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,l=0;l<o.length;o.length===n||(0,H.r)(o),++l)A.oM(a,o[l],g)
for(o=a.Q,n=o.length,l=0;l<o.length;o.length===n||(0,H.r)(o),++l)A.oO(a,o[l],g)
for(o=a.ch,n=o.length,l=0;l<o.length;o.length===n||(0,H.r)(o),++l)A.oT(a,o[l],g)
for(o=a.cx,n=o.length,l=0;l<o.length;o.length===n||(0,H.r)(o),++l)A.oX(a,o[l],g)
A.oR(a,g)}o=g.a+="// === Main ===\n"
o+="\n"
g.a=o
o+="void main()\n"
g.a=o
o+="{\n"
g.a=o
o=g.a=o+"   float alpha = alphaValue();\n"
s=s?g.a=o+"   vec3 norm = normal();\n":o
if(r)g.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
k=H.d([],t.i)
if(p){g.a+=u.o
k.push("lightAccum")
s=a.b
if(s.a||s.b||s.c)g.a+="   setAmbientColor();\n"
s=a.c
if(s.a||s.b||s.c)g.a+="   setDiffuseColor();\n"
s=a.d
if(s.a||s.b||s.c)g.a+="   setInvDiffuseColor();\n"
s=a.e
if(s.a||s.b||s.c)g.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,l=0;l<s.length;s.length===r||(0,H.r)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.b(p,0)
g.a+=j+(p[0].toUpperCase()+C.a.a9(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,l=0;l<s.length;s.length===r||(0,H.r)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.b(p,0)
g.a+=j+(p[0].toUpperCase()+C.a.a9(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,l=0;l<s.length;s.length===r||(0,H.r)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.b(p,0)
g.a+=j+(p[0].toUpperCase()+C.a.a9(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,l=0;l<s.length;s.length===r||(0,H.r)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.b(p,0)
g.a+=j+(p[0].toUpperCase()+C.a.a9(p,1))+"Values(norm);\n"}if(a.cy<=0)g.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(s.a||s.b||s.c)k.push("emissionColor()")
s=a.r
if(s.a||s.b||s.c)k.push("reflect(refl)")
s=a.x
if(s.a||s.b||s.c)k.push("refract(refl)")
if(k.length<=0)k.push("vec3(0.0, 0.0, 0.0)")
s=g.a+="   vec4 objClr = vec4("+C.b.u(k," + ")+", alpha);\n"
if(q)s=g.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
g.a=s
s=g.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
oZ:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aS+"];\n"
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
p0:function(a,b){var s
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
p_:function(a,b){var s
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
p2:function(a,b){var s,r
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
p3:function(a,b){var s,r
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
p1:function(a,b){var s
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
p4:function(a,b){var s
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
hb:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.a9(a,1)},
kv:function(a,b,c,d,e){var s=new A.iP(a,c,e)
s.f=d
P.hS(d,0,!1,t.e)
return s},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
hf:function hf(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
e1:function e1(a,b){var _=this
_.dr=_.dq=_.bm=_.ay=_.aS=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ix=_.iw=_.iv=_.cb=_.ca=_.c9=_.c8=_.c7=_.c6=_.c5=_.c4=_.dK=_.dJ=_.dI=_.dH=_.dG=_.dF=_.dE=_.dD=_.dC=_.dB=_.dA=_.dz=_.dw=_.dv=_.du=_.dt=_.ds=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dw:function dw(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b){this.a=a
this.b=b},
en:function en(a,b){this.a=a
this.b=b},
ez:function ez(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aS=b5
_.ay=b6
_.bm=b7},
cM:function cM(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cN:function cN(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cP:function cP(a,b,c,d,e,f,g,h,i,j){var _=this
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
cQ:function cQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cG:function cG(){},
eR:function eR(){},
iU:function iU(a){this.a=a},
eT:function eT(a,b,c){this.a=a
this.c=b
this.d=c},
iR:function iR(a,b,c){this.a=a
this.c=b
this.d=c},
iS:function iS(a,b,c){this.a=a
this.c=b
this.d=c},
iT:function iT(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
eS:function eS(a,b,c){this.a=a
this.c=b
this.d=c},
iQ:function iQ(a,b,c){this.a=a
this.c=b
this.d=c},
eU:function eU(a,b,c){this.a=a
this.c=b
this.d=c},
eV:function eV(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){this.a=a
this.c=b
this.d=c},
eW:function eW(a,b,c){this.a=a
this.c=b
this.d=c},
cO:function cO(a,b,c){this.a=a
this.c=b
this.d=c},
eX:function eX(a,b,c){this.a=a
this.c=b
this.d=c},
eY:function eY(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jJ:function(a){var s,r=a.a
if(typeof r!=="number")return r.V()
s=r>0?1:0
r=a.b
if(typeof r!=="number")return r.V()
if(r>0)s+=2
r=a.c
if(typeof r!=="number")return r.V()
return(r>0?s+4:s)*2},
df:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.v(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.v(s+a5,r+a3,q+a4)
o=new V.v(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.v(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.jJ(g)
j=F.jJ(f)
i=F.mr(a1,a2,new F.jI(h,F.jJ(e),F.jJ(d),j,k,a0),b)
if(i!=null)a.cl(i)},
pF:function(a,b,c){var s,r,q=null,p={}
p.a=s
p.a=null
p.a=new F.k7()
p=new F.k8(p,b)
r=F.lC()
F.df(r,q,p,c,a,1,0,0,1)
F.df(r,q,p,c,a,0,1,0,3)
F.df(r,q,p,c,a,0,0,1,2)
F.df(r,q,p,c,a,-1,0,0,0)
F.df(r,q,p,c,a,0,-1,0,0)
F.df(r,q,p,c,a,0,0,-1,3)
r.aQ()
r.hO(new F.jf(),new F.ie())
return r},
pv:function(a,b){var s,r={}
r.a=s
r.a=null
r.a=new F.jU()
return F.mr(b,a,new F.jV(r),null)},
mr:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a<1)return null
if(b<1)return null
s=F.lC()
r=H.d([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
m=o.d9(new V.bl(n,0,0,1),new V.aw(p,1))
c.$3(m,p,0)
r.push(m.c3(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=i.d9(new V.bl(h,g,f,1),new V.aw(p,k))
c.$3(m,p,l)
r.push(m.c3(d))}}s.d.hg(a+1,b+1,r)
return s},
dN:function(a,b,c){var s=new F.dM(),r=a.a
if(r==null)H.q(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.q(P.t("May not create a face with vertices attached to different shapes."))
s.fZ(a)
s.h_(b)
s.h0(c)
s.a.a.d.b.push(s)
s.a.a.a2()
return s},
lC:function(){var s=new F.ip(),r=new F.ja(s)
r.b=!1
r.c=H.d([],t.j)
s.a=r
r=new F.is(s)
r.b=H.d([],t.k)
s.b=r
r=new F.ir(s)
r.b=H.d([],t.B)
s.c=r
r=new F.iq(s)
r.b=H.d([],t.b)
s.d=r
s.e=null
return s},
lO:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.f4(),p=new F.ji()
p.b=H.d([],t.k)
q.b=p
p=new F.je()
s=t.B
p.b=H.d([],s)
p.c=H.d([],s)
q.c=p
p=new F.jb()
s=t.b
p.b=H.d([],s)
p.c=H.d([],s)
p.d=H.d([],s)
q.d=p
h=$.mI()
q.e=0
p=$.bf()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.be().a)!==0?e:r
q.x=(s&$.bd().a)!==0?b:r
q.y=(s&$.bg().a)!==0?f:r
q.z=(s&$.bh().a)!==0?g:r
q.Q=(s&$.mJ().a)!==0?c:r
q.ch=(s&$.c9().a)!==0?i:0
q.cx=(s&$.bc().a)!==0?a:r
return q},
jI:function jI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k7:function k7(){},
k8:function k8(a,b){this.a=a
this.b=b},
jU:function jU(){},
jV:function jV(a){this.a=a},
dM:function dM(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(){},
iw:function iw(){},
dZ:function dZ(){this.b=this.a=null},
hP:function hP(){},
iO:function iO(){},
ek:function ek(){this.a=null},
ip:function ip(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iq:function iq(a){this.a=a
this.b=null},
ir:function ir(a){this.a=a
this.b=null},
is:function is(a){this.a=a
this.b=null},
f4:function f4(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jk:function jk(a){this.a=a},
jj:function jj(a){this.a=a},
ja:function ja(a){this.a=a
this.c=this.b=null},
jb:function jb(){this.d=this.c=this.b=null},
jc:function jc(a,b){this.a=a
this.b=b},
jd:function jd(a,b){this.a=a
this.b=b},
je:function je(){this.c=this.b=null},
jg:function jg(){},
jf:function jf(){},
jh:function jh(){},
ie:function ie(){},
ji:function ji(){this.b=null}},T={eK:function eK(){},iB:function iB(){},iC:function iC(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iD:function iD(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iE:function iE(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},iG:function iG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},iF:function iF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},Q={
ml:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6=1000,a7=34067,a8=V.nB("Test 049"),a9=W.kh()
a9.className="pageLargeCanvas"
a9.id=a4
a8.a.appendChild(a9)
s=t.i
a8.da(H.d(["This is an initial test (still has bugs) of a basic sphere physics collision. ","This has sphere/sphere collision and sphere/plane collision. Some of the bugs is that ","the spheres will still pass through eachother and the plane and there are no rotations yet."],s))
a8.he(H.d(["options"],s))
a8.da(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a4)
if(r==null)H.q(P.t("Failed to find an element with the identifier, testCanvas."))
q=E.nG(r,!0,!0,!0,!1)
p=E.kj()
a8=p.y
o=q.f.hN("../resources/Grass.png",!0,!0)
n=U.hp(V.ll(0,-5,0).j(0,V.b_(a6,0,0,0,0,1,0,0,0,0,a6,0,0,0,0,1)).j(0,V.lk(-1.5707963267948966)))
m=O.lg()
l=new V.aZ(a6,0,0,0,a6,0,0,0,1)
if(!J.E(m.b,l)){k=m.b
j=k==null&&!0
if(j)m.a=null
m.b=l
k=new D.C("texture2DMatrix",k,l)
k.b=!0
m.Z(k)}m.dx.m(0,D.l7(new V.Q(1,1,1),U.hp(V.lm(1,-3,-1,a5))))
k=m.r
k.saw(0,new V.Q(0.5,0.5,0.5))
k=m.x
k.saw(0,new V.Q(0.5,0.5,0.5))
m.r.se8(o)
m.x.se8(o)
k=E.kj()
k.sby(0,F.pv(20,20))
k.saB(n)
k.sct(m)
a8.m(0,k)
k=q.f
a8=k.a
i=a8.createTexture()
a8.bindTexture(a7,i)
a8.texParameteri(a7,10242,10497)
a8.texParameteri(a7,10243,10497)
a8.texParameteri(a7,10241,9729)
a8.texParameteri(a7,10240,9729)
a8.bindTexture(a7,a5)
h=new T.iD()
h.a=0
h.b=i
h.c=!1
h.d=0
k.aL(h,i,"../resources/earthColor/posx.png",34069,!1,!1)
k.aL(h,i,"../resources/earthColor/negx.png",34070,!1,!1)
k.aL(h,i,"../resources/earthColor/posy.png",34071,!1,!1)
k.aL(h,i,"../resources/earthColor/negy.png",34072,!1,!1)
k.aL(h,i,"../resources/earthColor/posz.png",34073,!1,!1)
k.aL(h,i,"../resources/earthColor/negz.png",34074,!1,!1)
g=O.lg()
g.dx.m(0,D.l7(new V.Q(1,1,1),U.hp(V.lm(-1,-1,-1,a5))))
k=g.r
k.saw(0,new V.Q(0.5,0.5,0.5))
a8=g.x
a8.saw(0,new V.Q(0.5,0.5,0.5))
g.r.sba(h)
g.x.sba(h)
a8=g.z
k=a8.c
a8.bi(new A.Z(!0,k.b,k.c))
a8.d1(10)
f=new Q.dD()
a8=t.bI
f.b=H.d([],a8)
k=new V.v(0,1,0)
e=Math.sqrt(k.X(k))
k=0/e
f.c=new V.ei(k,1/e,k,-5)
k=t.V
f.d=H.d([],k)
f.e=H.d([],t.D)
f.f=H.d([],a8)
f.r=H.d([],t.cn)
f.x=H.d([],a8)
f.y=H.d([],a8)
f.z=H.d([],k)
d=E.kj()
d.saB(f)
d.sct(g)
k=q.x
c=new U.cS()
a8=X.cr()
a8.ac(39)
a8.ac(68)
j=c.gfp()
a8.gaV().m(0,j)
c.a=a8
a8=X.cr()
a8.ac(37)
a8.ac(65)
a8.gaV().m(0,j)
c.b=a8
a8=X.cr()
a8.ac(81)
a8.gaV().m(0,j)
c.c=a8
a8=X.cr()
a8.ac(69)
a8.gaV().m(0,j)
c.d=a8
a8=X.cr()
a8.ac(40)
a8.ac(83)
a8.gaV().m(0,j)
c.e=a8
a8=X.cr()
a8.ac(38)
a8.ac(87)
a8.gaV().m(0,j)
c.f=a8
a8=U.dE()
a8.sb6(30)
a8.sax(0)
j=c.gaG()
a8.gv().m(0,j)
c.r=a8
a8=U.dE()
a8.sb6(30)
a8.sax(0)
a8.gv().m(0,j)
c.x=a8
a8=U.dE()
a8.sb6(30)
a8.sax(0)
a8.gv().m(0,j)
c.y=a8
c.Q=c.z=null
c.ch=60
c.cx=15
c.cy=0
c.dy=c.dx=c.db=null
c.a.an(k)
c.b.an(k)
c.c.an(k)
c.d.an(k)
c.e.an(k)
c.f.an(k)
a8=q.x
b=new U.cR()
k=U.dE()
k.scu(0,!0)
k.sck(6.283185307179586)
k.scm(0)
k.sa_(0,0)
k.sb6(100)
k.sS(0)
k.sax(0.5)
b.b=k
j=b.gaG()
k.gv().m(0,j)
k=U.dE()
k.scu(0,!0)
k.sck(6.283185307179586)
k.scm(0)
k.sa_(0,0)
k.sb6(100)
k.sS(0)
k.sax(0.5)
b.c=k
k.gv().m(0,j)
b.d=null
b.r=b.f=b.e=!1
b.y=b.x=2.5
b.Q=4
b.ch=b.cx=!1
b.db=b.cy=0
b.dx=null
b.dy=0
b.fx=b.fr=null
a=new X.bt(!1,!1,!1)
a0=b.d
b.d=a
k=new D.C("modifiers",a0,a)
k.b=!0
b.O(k)
k=b.f
if(k!==!1){b.f=!1
k=new D.C("invertX",k,!1)
k.b=!0
b.O(k)}k=b.r
if(k!==!1){b.r=!1
k=new D.C("invertY",k,!1)
k.b=!0
b.O(k)}b.an(a8)
b.b.sck(1.5707963267948966)
b.b.scm(-1.5707963267948966)
b.b.sax(1)
b.c.sax(1)
b.b.scu(0,!1)
b.gv().m(0,new Q.k2(c,b))
a8=H.d([c,b],t.dk)
a1=new U.bI()
a1.bf(t.ah)
a1.be(a1.gf3(),a1.gfI())
a1.bk(0,a8)
a1.e=null
a1.f=V.bN()
a1.r=0
a8=new M.dL()
a8.a=!0
k=O.ki(t.l)
a8.e=k
k.be(a8.gfd(),a8.gff())
a8.y=a8.x=a8.r=a8.f=null
a2=X.n7(a5)
a3=new X.eg()
a3.c=1.0471975511965976
a3.d=0.1
a3.e=2000
a3.saB(a5)
k=a3.c
$.A().toString
if(!(Math.abs(k-1.0471975511965976)<1e-9)){a3.c=1.0471975511965976
k=new D.C("fov",k,1.0471975511965976)
k.b=!0
a3.aJ(k)}k=a3.d
$.A().toString
if(!(Math.abs(k-0.1)<1e-9)){a3.d=0.1
k=new D.C("near",k,0.1)
k.b=!0
a3.aJ(k)}k=a3.e
$.A().toString
if(!(Math.abs(k-2000)<1e-9)){a3.e=2000
k=new D.C("far",k,2000)
k.b=!0
a3.aJ(k)}k=a8.b
if(k!==a3){if(k!=null)k.gv().K(0,a8.gaH())
a0=a8.b
a8.b=a3
a3.gv().m(0,a8.gaH())
k=new D.C("camera",a0,a8.b)
k.b=!0
a8.aI(k)}k=a8.c
if(k!==a2){if(k!=null)k.gv().K(0,a8.gaH())
a0=a8.c
a8.c=a2
a2.gv().m(0,a8.gaH())
k=new D.C("target",a0,a8.c)
k.b=!0
a8.aI(k)}a8.e.m(0,p)
a8.e.m(0,d)
a8.b.saB(a1)
k=q.d
if(k!==a8){if(k!=null)k.gv().K(0,q.gcF())
q.d=a8
a8.gv().m(0,q.gcF())
q.cG()}q.x.b.gdl().m(0,new Q.k3(c,b,d,f))
a8=new V.hm("options")
s=s.getElementById("options")
a8.c=s
if(s==null)H.q("Failed to find options for CheckGroup")
a8.d=H.d([],t.aM)
a8.hd(0,"Mouse Locking",new Q.k4(q),!1)
V.pE(q)},
cb:function cb(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.k1=_.id=_.go=_.fy=null},
dD:function dD(){var _=this
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
k2:function k2(a,b){this.a=a
this.b=b},
k3:function k3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k4:function k4(a){this.a=a}}
var w=[C,H,J,P,W,K,L,O,Y,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ko.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gP:function(a){return H.cF(a)},
i:function(a){return"Instance of '"+H.h(H.eo(a))+"'"}}
J.dU.prototype={
i:function(a){return String(a)},
gP:function(a){return a?519018:218159},
$iap:1}
J.cp.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0}}
J.aX.prototype={
gP:function(a){return 0},
i:function(a){return String(a)},
$ilc:1}
J.eh.prototype={}
J.bx.prototype={}
J.as.prototype={
i:function(a){var s=a[$.mv()]
if(s==null)return this.el(a)
return"JavaScript function for "+H.h(J.a6(s))}}
J.u.prototype={
cp:function(a,b){if(!!a.fixed$length)H.q(P.y("removeAt"))
if(b<0||b>=a.length)throw H.c(P.ep(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var s
if(!!a.fixed$length)H.q(P.y("remove"))
for(s=0;s<a.length;++s)if(J.E(a[s],b)){a.splice(s,1)
return!0}return!1},
bk:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.y("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.r)(b),++r)a.push(b[r])},
G:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bF(a))}},
u:function(a,b){var s,r,q=P.hS(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.h(a[s])
if(s>=q.length)return H.b(q,s)
q[s]=r}return q.join(b)},
hL:function(a){return this.u(a,"")},
hF:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.bF(a))}return s},
hG:function(a,b,c){return this.hF(a,b,c,t.z)},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
ghE:function(a){if(a.length>0)return a[0]
throw H.c(H.lb())},
gaA:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.lb())},
b_:function(a,b){if(!!a.immutable$list)H.q(P.y("sort"))
H.nE(a,b==null?J.oC():b)},
ei:function(a){return this.b_(a,null)},
J:function(a,b){var s
for(s=0;s<a.length;++s)if(J.E(a[s],b))return!0
return!1},
i:function(a){return P.kl(a,"[","]")},
gR:function(a){return new J.a2(a,a.length)},
gP:function(a){return H.cF(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.q(P.y("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.c7(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.q(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c7(a,b))
a[b]=c},
$im:1,
$ii:1,
$io:1}
J.hM.prototype={}
J.a2.prototype={
gF:function(a){return this.d},
A:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.r(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bq.prototype={
aR:function(a,b){var s
if(typeof b!="number")throw H.c(H.ao(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbp(b)
if(this.gbp(a)===s)return 0
if(this.gbp(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbp:function(a){return a===0?1/a<0:a<0},
ih:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.y(""+a+".toInt()"))},
cd:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.y(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
e9:function(a,b){var s
if(b>20)throw H.c(P.a0(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbp(a))return"-"+s
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
bd:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
em:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d5(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.d5(a,b)},
d5:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.y("Result of truncating division is "+H.h(s)+": "+H.h(a)+" ~/ "+b))},
aO:function(a,b){var s
if(a>0)s=this.d4(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
h4:function(a,b){if(b<0)throw H.c(H.ao(b))
return this.d4(a,b)},
d4:function(a,b){return b>31?0:a>>>b},
$iY:1,
$iP:1}
J.co.prototype={$il:1}
J.cn.prototype={}
J.aG.prototype={
U:function(a,b){if(b<0)throw H.c(H.c7(a,b))
if(b>=a.length)H.q(H.c7(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.c7(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!="string")throw H.c(P.l_(b,null,null))
return a+b},
aY:function(a,b,c,d){var s,r,q=P.b1(b,c,a.length)
if(!H.c3(q))H.q(H.ao(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
a3:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a0(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a8:function(a,b){return this.a3(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.ep(b,null))
if(b>c)throw H.c(P.ep(b,null))
if(c>a.length)throw H.c(P.ep(c,null))
return a.substring(b,c)},
a9:function(a,b){return this.t(a,b,null)},
j:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.O)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
af:function(a,b){var s=b-a.length
if(s<=0)return a
return this.j(" ",s)+a},
hY:function(a,b,c){var s=b-a.length
if(s<=0)return a
return a+this.j(c,s)},
bn:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a0(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dP:function(a,b){return this.bn(a,b,0)},
hn:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a0(c,0,s,null,null))
return H.mp(a,b,c)},
J:function(a,b){return this.hn(a,b,0)},
aR:function(a,b){var s
if(typeof b!="string")throw H.c(H.ao(b))
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
gk:function(a){return a.length},
$iB:1}
H.dX.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.O.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return C.a.U(this.a,b)}}
H.m.prototype={}
H.bM.prototype={
gF:function(a){var s=this.d
return s},
A:function(){var s,r=this,q=r.a,p=J.aT(q),o=p.gk(q)
if(r.b!=o)throw H.c(P.bF(q))
s=r.c
if(typeof o!=="number")return H.e(o)
if(s>=o){r.d=null
return!1}r.d=p.H(q,s);++r.c
return!0}}
H.bs.prototype={
gR:function(a){return new H.e0(J.bi(this.a),this.b)},
gk:function(a){return J.aV(this.a)},
H:function(a,b){return this.b.$1(J.kb(this.a,b))}}
H.cj.prototype={$im:1}
H.e0.prototype={
A:function(){var s=this,r=s.b
if(r.A()){s.a=s.c.$1(r.gF(r))
return!0}s.a=null
return!1},
gF:function(a){var s=this.a
return s}}
H.cT.prototype={
gR:function(a){return new H.f7(J.bi(this.a),this.b)}}
H.f7.prototype={
A:function(){var s,r
for(s=this.a,r=this.b;s.A();)if(r.$1(s.gF(s)))return!0
return!1},
gF:function(a){var s=this.a
return s.gF(s)}}
H.ck.prototype={}
H.f0.prototype={
l:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.bW.prototype={}
H.ce.prototype={
i:function(a){return P.ks(this)},
l:function(a,b,c){H.n3()},
$iG:1}
H.cf.prototype={
gk:function(a){return this.a},
c1:function(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c1(0,b))return null
return this.cQ(b)},
cQ:function(a){return this.b[a]},
G:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cQ(q))}}}
H.iM.prototype={
ae:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.eb.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dW.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.h(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.h(r.a)+")"
return q+p+"' on '"+s+"' ("+H.h(r.a)+")"}}
H.f_.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.ig.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fN.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bE.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.mt(r==null?"unknown":r)+"'"},
gim:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iA.prototype={}
H.ix.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.mt(s)+"'"}}
H.cc.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.cc))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gP:function(a){var s,r=this.c
if(r==null)s=H.cF(this.a)
else s=typeof r!=="object"?J.aa(r):H.cF(r)
return(s^H.cF(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.h(H.eo(s))+"'")}}
H.et.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.z.prototype={
gk:function(a){return this.a},
gad:function(a){return new H.ct(this)},
gil:function(a){return H.ni(this.gad(this),new H.hN(this))},
c1:function(a,b){var s=this.b
if(s==null)return!1
return this.eO(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bg(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bg(p,b)
q=r==null?n:r.b
return q}else return o.hJ(b)},
hJ:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cR(p,q.dQ(a))
r=q.dR(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cK(s==null?q.b=q.bL():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cK(r==null?q.c=q.bL():r,b,c)}else q.hK(b,c)},
hK:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bL()
s=p.dQ(a)
r=p.cR(o,s)
if(r==null)p.bT(o,s,[p.bM(a,b)])
else{q=p.dR(r,a)
if(q>=0)r[q].b=b
else r.push(p.bM(a,b))}},
G:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bF(s))
r=r.c}},
cK:function(a,b,c){var s=this.bg(a,b)
if(s==null)this.bT(a,b,this.bM(b,c))
else s.b=c},
bM:function(a,b){var s=this,r=new H.hQ(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dQ:function(a){return J.aa(a)&0x3ffffff},
dR:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.E(a[r].a,b))return r
return-1},
i:function(a){return P.ks(this)},
bg:function(a,b){return a[b]},
cR:function(a,b){return a[b]},
bT:function(a,b,c){a[b]=c},
eR:function(a,b){delete a[b]},
eO:function(a,b){return this.bg(a,b)!=null},
bL:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bT(r,s,r)
this.eR(r,s)
return r}}
H.hN.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.ma(this.a).W("2(1)")}}
H.hQ.prototype={}
H.ct.prototype={
gk:function(a){return this.a.a},
gR:function(a){var s=this.a,r=new H.e_(s,s.r)
r.c=s.e
return r}}
H.e_.prototype={
gF:function(a){return this.d},
A:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bF(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jX.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jY.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jZ.prototype={
$1:function(a){return this.a(a)}}
H.dV.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilx:1}
H.cA.prototype={$icA:1}
H.U.prototype={$iU:1}
H.bQ.prototype={
gk:function(a){return a.length},
$ix:1}
H.bu.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aS(b,a,a.length)
a[b]=c},
$im:1,
$ii:1,
$io:1}
H.cB.prototype={
l:function(a,b,c){H.aS(b,a,a.length)
a[b]=c},
$im:1,
$ii:1,
$io:1}
H.e6.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.e7.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.e8.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.e9.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.ea.prototype={
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.cC.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aS(b,a,a.length)
return a[b]}}
H.bR.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aS(b,a,a.length)
return a[b]},
$ibR:1,
$ib4:1}
H.cZ.prototype={}
H.d_.prototype={}
H.d0.prototype={}
H.d1.prototype={}
H.ai.prototype={
W:function(a){return H.fZ(v.typeUniverse,this,a)},
bB:function(a){return H.oa(v.typeUniverse,this,a)}}
H.fp.prototype={}
H.fk.prototype={
i:function(a){return this.a}}
H.d9.prototype={}
P.jn.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:16}
P.jm.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.jo.prototype={
$0:function(){this.a.$0()}}
P.jp.prototype={
$0:function(){this.a.$0()}}
P.d8.prototype={
eC:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c6(new P.jC(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
eD:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c6(new P.jB(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$icK:1}
P.jC.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jB.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.em(s,o)}q.c=p
r.d.$1(q)}}
P.c_.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.h(this.a)+")"}}
P.c0.prototype={
gF:function(a){var s=this.c
if(s==null)return this.b
return s.gF(s)},
A:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.A())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.c_){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.b(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.bi(s)
if(o instanceof P.c0){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.d5.prototype={
gR:function(a){return new P.c0(this.a())}}
P.f8.prototype={}
P.cJ.prototype={}
P.eE.prototype={}
P.cK.prototype={}
P.jH.prototype={}
P.jQ.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.a6(this.b)
throw s}}
P.ju.prototype={
ic:function(a){var s,r,q,p=null
try{if(C.i===$.aA){a.$0()
return}P.p7(p,p,this,a)}catch(q){s=H.bb(q)
r=H.kS(q)
P.mc(p,p,this,s,r)}},
ie:function(a,b){var s,r,q,p=null
try{if(C.i===$.aA){a.$1(b)
return}P.p8(p,p,this,a,b)}catch(q){s=H.bb(q)
r=H.kS(q)
P.mc(p,p,this,s,r)}},
ig:function(a,b){return this.ie(a,b,t.z)},
hi:function(a){return new P.jv(this,a)},
dg:function(a,b){return new P.jw(this,a,b)}}
P.jv.prototype={
$0:function(){return this.a.ic(this.b)}}
P.jw.prototype={
$1:function(a){return this.a.ig(this.b,a)},
$S:function(){return this.c.W("~(0)")}}
P.cV.prototype={
gR:function(a){var s=new P.cW(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
J:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eL(b)
return r}},
eL:function(a){var s=this.d
if(s==null)return!1
return this.bI(s[this.bE(a)],a)>=0},
m:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cM(s==null?q.b=P.kA():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cM(r==null?q.c=P.kA():r,b)}else return q.eF(0,b)},
eF:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kA()
s=q.bE(b)
r=p[s]
if(r==null)p[s]=[q.bD(b)]
else{if(q.bI(r,b)>=0)return!1
r.push(q.bD(b))}return!0},
K:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fT(this.c,b)
else return this.fS(0,b)},
fS:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bE(b)
r=n[s]
q=o.bI(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d7(p)
return!0},
cM:function(a,b){if(a[b]!=null)return!1
a[b]=this.bD(b)
return!0},
fT:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d7(s)
delete a[b]
return!0},
cU:function(){this.r=1073741823&this.r+1},
bD:function(a){var s,r=this,q=new P.jt(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cU()
return q},
d7:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cU()},
bE:function(a){return J.aa(a)&1073741823},
bI:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.E(a[r].a,b))return r
return-1}}
P.jt.prototype={}
P.cW.prototype={
gF:function(a){return this.d},
A:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bF(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cm.prototype={}
P.hR.prototype={
$2:function(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cu.prototype={$im:1,$ii:1,$io:1}
P.j.prototype={
gR:function(a){return new H.bM(a,this.gk(a))},
H:function(a,b){return this.h(a,b)},
gdS:function(a){return this.gk(a)===0},
ii:function(a){var s,r,q,p,o=this
if(o.gdS(a)){s=J.km(0,H.bA(a).W("j.E"))
return s}r=o.h(a,0)
q=P.hS(o.gk(a),r,!0,H.bA(a).W("j.E"))
p=1
while(!0){s=o.gk(a)
if(typeof s!=="number")return H.e(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.b(q,p)
q[p]=s;++p}return q},
hC:function(a,b,c,d){var s
P.b1(b,c,this.gk(a))
for(s=b;s<c;++s)this.l(a,s,d)},
i:function(a){return P.kl(a,"[","]")}}
P.cw.prototype={}
P.hV.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.h(a)
r.a=s+": "
r.a+=H.h(b)},
$S:17}
P.at.prototype={
G:function(a,b){var s,r
for(s=J.bi(this.gad(a));s.A();){r=s.gF(s)
b.$2(r,this.h(a,r))}},
gk:function(a){return J.aV(this.gad(a))},
i:function(a){return P.ks(a)},
$iG:1}
P.h_.prototype={
l:function(a,b,c){throw H.c(P.y("Cannot modify unmodifiable map"))}}
P.cx.prototype={
h:function(a,b){return J.ca(this.a,b)},
l:function(a,b,c){J.k9(this.a,b,c)},
G:function(a,b){J.kc(this.a,b)},
gk:function(a){return J.aV(this.a)},
i:function(a){return J.a6(this.a)},
$iG:1}
P.bX.prototype={}
P.d2.prototype={
i:function(a){return P.kl(this,"{","}")},
H:function(a,b){var s,r,q,p="index"
P.mV(b,p)
P.lw(b,p)
for(s=P.nV(this,this.r),r=0;s.A();){q=s.d
if(b===r)return q;++r}throw H.c(P.M(b,this,p,null,r))},
$im:1,
$ii:1}
P.cX.prototype={}
P.dd.prototype={}
P.j4.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.bb(r)}return null}}
P.j5.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.bb(r)}return null}}
P.hi.prototype={
hP:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.b1(a2,a3,a1.length)
if(a3==null)throw H.c(P.lv("Invalid range"))
s=$.mL()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.E(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.jW(C.a.E(a1,l))
h=H.jW(C.a.E(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.b(s,g)
f=s[g]
if(f>=0){g=C.a.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.V("")
e=p}else e=p
d=e.a+=C.a.t(a1,q,r)
e.a=d+H.aM(k)
q=l
continue}}throw H.c(P.a_("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.t(a1,q,a3)
d=e.length
if(o>=0)P.l1(a1,n,a3,o,m,d)
else{c=C.c.bd(d-1,4)+1
if(c===1)throw H.c(P.a_(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aY(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.l1(a1,n,a3,o,m,b)
else{c=C.c.bd(b,4)
if(c===1)throw H.c(P.a_(a,a1,a3))
if(c>1)a1=C.a.aY(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hj.prototype={}
P.dC.prototype={}
P.dG.prototype={}
P.hA.prototype={}
P.j2.prototype={
ghB:function(){return C.P}}
P.j6.prototype={
c2:function(a){var s,r,q,p=P.b1(0,null,a.length)
if(p==null)throw H.c(P.lv("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.jG(r)
if(q.eT(a,0,p)!==p){J.mR(a,p-1)
q.bX()}return new Uint8Array(r.subarray(0,H.ou(0,q.b,r.length)))}}
P.jG.prototype={
bX:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.b(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.b(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.b(r,q)
r[q]=189},
hc:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.b(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.b(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.b(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.b(r,p)
r[p]=128|s&63
return!0}else{n.bX()
return!1}},
eT:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.U(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.E(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hc(p,C.a.E(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bX()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.b(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.b(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.b(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.b(s,o)
s[o]=128|p&63}}}return q}}
P.j3.prototype={
c2:function(a){var s=this.a,r=P.nK(s,a,0,null)
if(r!=null)return r
return new P.jF(s).ho(a,0,null,!0)}}
P.jF.prototype={
ho:function(a,b,c,d){var s,r,q,p,o=this,n=P.b1(b,c,J.aV(a))
if(b===n)return""
s=P.op(a,b,n)
if(typeof n!=="number")return n.n()
n-=b
r=o.bF(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.oq(q)
o.b=0
throw H.c(P.a_(p,a,b+o.c))}return r},
bF:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.n()
if(c-b>1000){s=C.c.a1(b+c,2)
r=q.bF(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bF(a,s,c,d)}return q.hs(a,b,c,d)},
hs:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.V(""),f=b+1,e=a.length
if(b<0||b>=e)return H.b(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.E("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.E(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aM(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aM(j)
break
case 65:g.a+=H.aM(j);--f
break
default:p=g.a+=H.aM(j)
g.a=p+H.aM(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(f<0||f>=e)return H.b(a,f)
s=a[f]}o=f+1
if(f<0||f>=e)return H.b(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(o<0||o>=e)return H.b(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(l>=e)return H.b(a,l)
g.a+=H.aM(a[l])}else g.a+=P.eG(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aM(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.ap.prototype={}
P.ab.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
aR:function(a,b){return C.c.aR(this.a,b.a)},
gP:function(a){var s=this.a
return(s^C.c.aO(s,30))&1073741823},
i:function(a){var s=this,r=P.n4(H.nu(s)),q=P.dI(H.ns(s)),p=P.dI(H.no(s)),o=P.dI(H.np(s)),n=P.dI(H.nr(s)),m=P.dI(H.nt(s)),l=P.n5(H.nq(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.Y.prototype={}
P.bn.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bn&&this.a===b.a},
gP:function(a){return C.c.gP(this.a)},
aR:function(a,b){return C.c.aR(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hy(),o=this.a
if(o<0)return"-"+new P.bn(0-o).i(0)
s=p.$1(C.c.a1(o,6e7)%60)
r=p.$1(C.c.a1(o,1e6)%60)
q=new P.hx().$1(o%1e6)
return""+C.c.a1(o,36e8)+":"+H.h(s)+":"+H.h(r)+"."+H.h(q)}}
P.hx.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.hy.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.J.prototype={}
P.dr.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hD(s)
return"Assertion failed"}}
P.ec.prototype={
i:function(a){return"Throw of null."}}
P.af.prototype={
gbH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbG:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbH()+o+m
if(!q.a)return l
s=q.gbG()
r=P.hD(q.b)
return l+s+": "+r}}
P.bU.prototype={
gbH:function(){return"RangeError"},
gbG:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.h(q):""
else if(q==null)s=": Not greater than or equal to "+H.h(r)
else if(q>r)s=": Not in inclusive range "+H.h(r)+".."+H.h(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.h(r)
return s}}
P.dS.prototype={
gbH:function(){return"RangeError"},
gbG:function(){var s,r=this.b
if(typeof r!=="number")return r.a5()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.h(s)},
gk:function(a){return this.f}}
P.f1.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eZ.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.eC.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dF.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hD(s)+"."}}
P.ef.prototype={
i:function(a){return"Out of Memory"},
$iJ:1}
P.cI.prototype={
i:function(a){return"Stack Overflow"},
$iJ:1}
P.dH.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fm.prototype={
i:function(a){return"Exception: "+this.a}}
P.hJ.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.t(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.E(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.U(d,o)
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
i=""}h=C.a.t(d,k,l)
return f+j+h+i+"\n"+C.a.j(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.h(e)+")"):f}}
P.l.prototype={}
P.i.prototype={
gk:function(a){var s,r=this.gR(this)
for(s=0;r.A();)++s
return s},
H:function(a,b){var s,r,q
P.lw(b,"index")
for(s=this.gR(this),r=0;s.A();){q=s.gF(s)
if(b===r)return q;++r}throw H.c(P.M(b,this,"index",null,r))},
i:function(a){return P.n9(this,"(",")")}}
P.dT.prototype={}
P.o.prototype={$im:1,$ii:1}
P.G.prototype={}
P.ah.prototype={
gP:function(a){return P.L.prototype.gP.call(C.p,this)},
i:function(a){return"null"}}
P.P.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
q:function(a,b){return this===b},
gP:function(a){return H.cF(this)},
i:function(a){return"Instance of '"+H.h(H.eo(this))+"'"},
toString:function(){return this.i(this)}}
P.B.prototype={}
P.V.prototype={
gk:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.j0.prototype={
$2:function(a,b){var s,r,q,p=J.kR(b).dP(b,"=")
if(p===-1){if(b!=="")J.k9(a,P.kJ(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.a9(b,p+1)
q=this.a
J.k9(a,P.kJ(s,0,s.length,q,!0),P.kJ(r,0,r.length,q,!0))}return a}}
P.iY.prototype={
$2:function(a,b){throw H.c(P.a_("Illegal IPv4 address, "+a,this.a,b))}}
P.iZ.prototype={
$2:function(a,b){throw H.c(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.j_.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.k_(C.a.t(this.b,a,b),16)
if(typeof s!=="number")return s.a5()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bz.prototype={
gbV:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.h(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.q(H.kq("Field '_text' has been assigned during initialization."))}return o},
gP:function(a){var s=this,r=s.z
if(r==null){r=C.a.gP(s.gbV())
if(s.z==null)s.z=r
else r=H.q(H.kq("Field 'hashCode' has been assigned during initialization."))}return r},
gbs:function(){var s=this,r=s.Q
if(r==null){r=new P.bX(P.lK(s.gb9(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.q(H.kq("Field 'queryParameters' has been assigned during initialization."))}return r},
gec:function(){return this.b},
gcf:function(a){var s=this.c
if(s==null)return""
if(C.a.a8(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbr:function(a){var s=this.d
return s==null?P.m0(this.a):s},
gb9:function(a){var s=this.f
return s==null?"":s},
gce:function(){var s=this.r
return s==null?"":s},
e5:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a8(s,"/"))s="/"+s
q=s
p=P.kH(null,0,0,b)
return new P.bz(n,l,j,k,q,p,o.r)},
gdL:function(){return this.c!=null},
gdO:function(){return this.f!=null},
gdM:function(){return this.r!=null},
i:function(a){return this.gbV()},
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbw()&&s.c!=null===b.gdL()&&s.b===b.gec()&&s.gcf(s)===b.gcf(b)&&s.gbr(s)===b.gbr(b)&&s.e===b.ge1(b)&&s.f!=null===b.gdO()&&s.gb9(s)===b.gb9(b)&&s.r!=null===b.gdM()&&s.gce()===b.gce()},
$if2:1,
gbw:function(){return this.a},
ge1:function(a){return this.e}}
P.jE.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.h(P.kK(C.j,a,C.h,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.h(P.kK(C.j,b,C.h,!0))}}}
P.jD.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.bi(b),r=this.a;s.A();)r.$2(a,s.gF(s))}}
P.iX.prototype={
geb:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.b(m,0)
s=o.a
m=m[0]+1
r=C.a.bn(s,"?",m)
q=s.length
if(r>=0){p=P.de(s,r+1,q,C.m,!1)
q=r}else p=n
m=o.c=new P.fe("data","",n,n,P.de(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.jL.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jK.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.b(s,a)
s=s[a]
J.mS(s,0,96,b)
return s},
$S:18}
P.jM.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.E(b,q)^96
if(p>=r)return H.b(a,p)
a[p]=c}}}
P.jN.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.E(b,0),r=C.a.E(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.b(a,p)
a[p]=c}}}
P.fH.prototype={
gdL:function(){return this.c>0},
gdN:function(){return this.c>0&&this.d+1<this.e},
gdO:function(){return this.f<this.r},
gdM:function(){return this.r<this.a.length},
gcS:function(){return this.b===4&&C.a.a8(this.a,"http")},
gcT:function(){return this.b===5&&C.a.a8(this.a,"https")},
gbw:function(){var s=this.x
return s==null?this.x=this.eM():s},
eM:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gcS())return"http"
if(s.gcT())return"https"
if(r===4&&C.a.a8(s.a,"file"))return"file"
if(r===7&&C.a.a8(s.a,"package"))return"package"
return C.a.t(s.a,0,r)},
gec:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcf:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbr:function(a){var s=this
if(s.gdN())return P.k_(C.a.t(s.a,s.d+1,s.e),null)
if(s.gcS())return 80
if(s.gcT())return 443
return 0},
ge1:function(a){return C.a.t(this.a,this.e,this.f)},
gb9:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gce:function(){var s=this.r,r=this.a
return s<r.length?C.a.a9(r,s+1):""},
gbs:function(){var s=this
if(s.f>=s.r)return C.X
return new P.bX(P.lK(s.gb9(s)),t.U)},
e5:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbw(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gdN()?n.gbr(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a8(r,"/"))r="/"+r
p=P.kH(m,0,0,b)
q=n.r
o=q<j.length?C.a.a9(j,q+1):m
return new P.bz(l,i,s,h,r,p,o)},
gP:function(a){var s=this.y
return s==null?this.y=C.a.gP(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$if2:1}
P.fe.prototype={}
W.p.prototype={}
W.hc.prototype={
gk:function(a){return a.length}}
W.dp.prototype={
i:function(a){return String(a)}}
W.dq.prototype={
i:function(a){return String(a)}}
W.bj.prototype={$ibj:1}
W.bk.prototype={
cv:function(a,b,c){if(c!=null)return a.getContext(b,P.pm(c))
return a.getContext(b)},
ed:function(a,b){return this.cv(a,b,null)},
$ibk:1}
W.aq.prototype={
gk:function(a){return a.length}}
W.hq.prototype={
gk:function(a){return a.length}}
W.H.prototype={$iH:1}
W.cg.prototype={
gk:function(a){return a.length}}
W.hr.prototype={}
W.ag.prototype={}
W.aC.prototype={}
W.hs.prototype={
gk:function(a){return a.length}}
W.ht.prototype={
gk:function(a){return a.length}}
W.hu.prototype={
gk:function(a){return a.length}}
W.hv.prototype={
i:function(a){return String(a)}}
W.ch.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.ci.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gaE(a))+" x "+H.h(this.gaz(a))},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.ba(b)
s=a.left==s.gbq(b)&&a.top==s.gbt(b)&&this.gaE(a)==s.gaE(b)&&this.gaz(a)==s.gaz(b)}else s=!1
return s},
gP:function(a){return W.lT(J.aa(a.left),J.aa(a.top),J.aa(this.gaE(a)),J.aa(this.gaz(a)))},
gdh:function(a){return a.bottom},
gaz:function(a){return a.height},
gbq:function(a){return a.left},
gcs:function(a){return a.right},
gbt:function(a){return a.top},
gaE:function(a){return a.width},
$ia4:1}
W.dK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.hw.prototype={
gk:function(a){return a.length}}
W.fb.prototype={
gdS:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
this.a.replaceChild(c,s[b])},
m:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var s=this.ii(this)
return new J.a2(s,s.length)}}
W.F.prototype={
gdi:function(a){return new W.fb(a,a.children)},
gdj:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.a5()
if(q<0)q=-q*0
if(typeof p!=="number")return p.a5()
if(p<0)p=-p*0
return new P.a4(s,r,q,p,t.q)},
i:function(a){return a.localName},
$iF:1}
W.k.prototype={$ik:1}
W.f.prototype={
hf:function(a,b,c,d){if(c!=null)this.eG(a,b,c,!1)},
eG:function(a,b,c,d){return a.addEventListener(b,H.c6(c,1),!1)},
$if:1}
W.ac.prototype={$iac:1}
W.bH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1,
$ibH:1}
W.dO.prototype={
gk:function(a){return a.length}}
W.dQ.prototype={
gk:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.hL.prototype={
gk:function(a){return a.length}}
W.bo.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.bp.prototype={
gdk:function(a){return a.data},
$ibp:1}
W.bJ.prototype={$ibJ:1}
W.bL.prototype={$ibL:1}
W.dB.prototype={$iF:1,$if:1,$iw:1}
W.br.prototype={$ibr:1}
W.hT.prototype={
i:function(a){return String(a)}}
W.ia.prototype={
gk:function(a){return a.length}}
W.bO.prototype={$ibO:1}
W.e3.prototype={
h:function(a,b){return P.b9(a.get(b))},
G:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b9(s.value[1]))}},
gad:function(a){var s=H.d([],t.s)
this.G(a,new W.ib(s))
return s},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$iG:1}
W.ib.prototype={
$2:function(a,b){return this.a.push(a)}}
W.e4.prototype={
h:function(a,b){return P.b9(a.get(b))},
G:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b9(s.value[1]))}},
gad:function(a){var s=H.d([],t.s)
this.G(a,new W.ic(s))
return s},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$iG:1}
W.ic.prototype={
$2:function(a,b){return this.a.push(a)}}
W.au.prototype={$iau:1}
W.e5.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.ad.prototype={$iad:1}
W.fa.prototype={
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.b(r,b)
s.replaceChild(c,r[b])},
gR:function(a){var s=this.a.childNodes
return new W.cl(s,s.length)},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.b(s,b)
return s[b]}}
W.w.prototype={
ia:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.mP(s,b,a)}catch(q){H.bb(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.ek(a):s},
fV:function(a,b,c){return a.replaceChild(b,c)},
$iw:1}
W.cD.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.av.prototype={
gk:function(a){return a.length},
$iav:1}
W.ej.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.es.prototype={
h:function(a,b){return P.b9(a.get(b))},
G:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b9(s.value[1]))}},
gad:function(a){var s=H.d([],t.s)
this.G(a,new W.im(s))
return s},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$iG:1}
W.im.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eu.prototype={
gk:function(a){return a.length}}
W.aj.prototype={$iaj:1}
W.ew.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.ax.prototype={$iax:1}
W.ex.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.ay.prototype={
gk:function(a){return a.length},
$iay:1}
W.eD.prototype={
h:function(a,b){return a.getItem(H.os(b))},
l:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gad:function(a){var s=H.d([],t.s)
this.G(a,new W.iy(s))
return s},
gk:function(a){return a.length},
$iG:1}
W.iy.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ak.prototype={$iak:1}
W.b3.prototype={$ib3:1}
W.al.prototype={$ial:1}
W.a8.prototype={$ia8:1}
W.eI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.eJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.iI.prototype={
gk:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.bw.prototype={$ibw:1}
W.eO.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.iL.prototype={
gk:function(a){return a.length}}
W.aQ.prototype={}
W.j1.prototype={
i:function(a){return String(a)}}
W.f5.prototype={
gk:function(a){return a.length}}
W.b5.prototype={
ghu:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
ght:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.y("deltaX is not supported"))},
$ib5:1}
W.bZ.prototype={
fW:function(a,b){return a.requestAnimationFrame(H.c6(b,1))},
eS:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fc.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.cU.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.ba(b)
s=a.left==s.gbq(b)&&a.top==s.gbt(b)&&a.width==s.gaE(b)&&a.height==s.gaz(b)}else s=!1
return s},
gP:function(a){return W.lT(J.aa(a.left),J.aa(a.top),J.aa(a.width),J.aa(a.height))},
gaz:function(a){return a.height},
gaE:function(a){return a.width}}
W.fq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.cY.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.fK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.fR.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$ix:1,
$ii:1,
$io:1}
W.kk.prototype={}
W.fl.prototype={
hb:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.mQ(s,this.c,r,!1)}}}
W.jq.prototype={
$1:function(a){return this.a.$1(a)}}
W.kz.prototype={}
W.K.prototype={
gR:function(a){return new W.cl(a,this.gk(a))}}
W.cl.prototype={
A:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.ca(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gF:function(a){return this.d}}
W.fd.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fA.prototype={}
W.fD.prototype={}
W.fE.prototype={}
W.fG.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fO.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h6.prototype={}
W.h7.prototype={}
W.h8.prototype={}
W.h9.prototype={}
P.jx.prototype={
cc:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bv:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.kM(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ab)return new Date(a.a)
if(t.fv.b(a))throw H.c(P.iW("structured clone of RegExp"))
if(t.v.b(a))return a
if(t.F.b(a))return a
if(t.bX.b(a))return a
if(t.u.b(a))return a
if(t.o.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.cc(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.b(r,s)
r[s]=p
J.kc(a,new P.jz(n,o))
return n.a}if(t.aH.b(a)){s=o.cc(a)
n=o.b
if(s>=n.length)return H.b(n,s)
p=n[s]
if(p!=null)return p
return o.hq(a,s)}if(t.eH.b(a)){s=o.cc(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.b(r,s)
r[s]=p
o.hH(a,new P.jA(n,o))
return n.b}throw H.c(P.iW("structured clone of other type"))},
hq:function(a,b){var s,r=J.aT(a),q=r.gk(a),p=new Array(q),o=this.b
if(b>=o.length)return H.b(o,b)
o[b]=p
if(typeof q!=="number")return H.e(q)
s=0
for(;s<q;++s){o=this.bv(r.h(a,s))
if(s>=p.length)return H.b(p,s)
p[s]=o}return p}}
P.jz.prototype={
$2:function(a,b){this.a.a[a]=this.b.bv(b)},
$S:3}
P.jA.prototype={
$2:function(a,b){this.a.b[a]=this.b.bv(b)},
$S:3}
P.da.prototype={$ibp:1,
gdk:function(a){return this.a}}
P.jR.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jy.prototype={
hH:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.dP.prototype={
gbh:function(){return new H.bs(new H.cT(this.b,new P.hH()),new P.hI())},
l:function(a,b,c){var s=this.gbh()
J.mU(s.b.$1(J.kb(s.a,b)),c)},
m:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aV(this.gbh().a)},
h:function(a,b){var s=this.gbh()
return s.b.$1(J.kb(s.a,b))},
gR:function(a){var s=P.kr(this.gbh(),!1,t.h)
return new J.a2(s,s.length)}}
P.hH.prototype={
$1:function(a){return t.h.b(a)}}
P.hI.prototype={
$1:function(a){return t.h.a(a)}}
P.fF.prototype={
gcs:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.e(r)
return this.$ti.c.a(s+r)},
gdh:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.e(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.h(s.a)+", "+H.h(s.b)+") "+H.h(s.c)+" x "+H.h(s.d)},
q:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.q.b(b)){s=n.a
r=J.ba(b)
if(s==r.gbq(b)){q=n.b
if(q==r.gbt(b)){p=n.c
if(typeof s!=="number")return s.p()
if(typeof p!=="number")return H.e(p)
o=n.$ti.c
if(o.a(s+p)===r.gcs(b)){s=n.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.e(s)
r=o.a(q+s)===r.gdh(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gP:function(a){var s,r=this,q=r.a,p=J.aa(q),o=r.b,n=J.aa(o),m=r.c
if(typeof q!=="number")return q.p()
if(typeof m!=="number")return H.e(m)
s=r.$ti.c
m=C.c.gP(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.p()
if(typeof q!=="number")return H.e(q)
q=C.c.gP(s.a(o+q))
return P.nU(P.js(P.js(P.js(P.js(0,p),n),m),q))}}
P.a4.prototype={
gbq:function(a){return this.a},
gbt:function(a){return this.b},
gaE:function(a){return this.c},
gaz:function(a){return this.d}}
P.aH.prototype={$iaH:1}
P.dY.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.aK.prototype={$iaK:1}
P.ed.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.ih.prototype={
gk:function(a){return a.length}}
P.eF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.n.prototype={
gdi:function(a){return new P.dP(a,new W.fa(a))}}
P.aN.prototype={$iaN:1}
P.eP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.ft.prototype={}
P.fu.prototype={}
P.fB.prototype={}
P.fC.prototype={}
P.fP.prototype={}
P.fQ.prototype={}
P.fW.prototype={}
P.fX.prototype={}
P.b4.prototype={$im:1,$ii:1,$io:1}
P.hg.prototype={
gk:function(a){return a.length}}
P.dt.prototype={
h:function(a,b){return P.b9(a.get(b))},
G:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b9(s.value[1]))}},
gad:function(a){var s=H.d([],t.s)
this.G(a,new P.hh(s))
return s},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.y("Not supported"))},
$iG:1}
P.hh.prototype={
$2:function(a,b){return this.a.push(a)}}
P.du.prototype={
gk:function(a){return a.length}}
P.aW.prototype={}
P.ee.prototype={
gk:function(a){return a.length}}
P.f9.prototype={}
P.er.prototype={
e7:function(a,b,c,d,e,f,g){var s
if(t.u.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.pn(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bC("Incorrect number or type of arguments"))}}
P.eA.prototype={
gk:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
s=P.b9(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.fL.prototype={}
P.fM.prototype={}
K.hd.prototype={
aW:function(a,b){return!0},
i:function(a){return"all"}}
K.dR.prototype={
aW:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)if(s[q].aW(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.hW.prototype={}
K.b0.prototype={
aW:function(a,b){return!this.ej(0,b)},
i:function(a){return"!["+this.cA(0)+"]"}}
K.io.prototype={
ep:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.t("May not create a Set with zero characters."))
s=new H.z(t.E)
for(r=new H.bM(a,a.gk(a));r.A();){q=r.d
s.l(0,q,!0)}p=P.kr(s.gad(s),!0,t.e)
C.b.ei(p)
this.a=p},
aW:function(a,b){return C.b.J(this.a,b)},
i:function(a){return P.eG(this.a,0,null)}}
L.eB.prototype={
u:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.eQ(this.a.N(0,b))
p.a=H.d([],t.L)
p.c=!1
this.c.push(p)
return p},
hD:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.aW(0,a))return p}return null},
i:function(a){return this.b},
d6:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.J(0,l))m+=" (consume)"
for(l=n.d.c,l=l.gad(l),l=l.gR(l);l.A();){r=l.gF(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.h(r)+" => ["+H.h(q)+"]")
m=s.c.J(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.r)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.eM.prototype={
i:function(a){var s=H.mq(this.b,"\n","\\n"),r=H.mq(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eN.prototype={
i:function(a){return this.b}}
L.iJ.prototype={
N:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eB(this,b)
s.c=H.d([],t.br)
this.a.l(0,b,s)}return s},
bb:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.eN(a)
s.c=new H.z(t.dO)
this.b.l(0,a,s)}return s},
ea:function(a){return this.ij(a)},
ij:function(a){var s=this
return P.oK(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$ea(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.d([],c)
a0=H.d([],c)
a1=H.d([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.cp(a1,0)
else{if(!r.A()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hD(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.eG(a0,0,null)
throw H.c(P.t("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.q(P.y("removeRange"))
P.b1(0,k,a0.length)
a0.splice(0,k-0)
C.b.bk(a1,a0)
a0=H.d([],c)
b=H.d([],c)
d=s.d
q=!s.c.J(0,n.a)?7:8
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
if(d.d!=null){g=P.eG(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.eM(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.J(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.nS()
case 1:return P.nT(o)}}},t.eB)},
i:function(a){var s,r=new P.V(""),q=this.d
if(q!=null)r.a=q.d6()+"\n"
for(q=this.a,q=q.gil(q),q=q.gR(q);q.A();){s=q.gF(q)
if(s!=this.d)r.a+=s.d6()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.eQ.prototype={
i:function(a){return this.b.b+": "+this.cA(0)}}
O.a3.prototype={
bf:function(a){this.a=H.d([],a.W("u<0*>"))
this.c=this.b=null},
bx:function(a,b,c){this.b=b
this.c=a},
be:function(a,b){return this.bx(a,null,b)},
cX:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cE:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gk:function(a){return this.a.length},
gR:function(a){var s=this.a
return new J.a2(s,s.length)},
H:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.b(s,b)
return s[b]},
m:function(a,b){var s,r,q=this,p=H.ma(q).W("u<a3.T*>")
if(q.cX(H.d([b],p))){s=q.a
r=s.length
s.push(b)
q.cE(r,H.d([b],p))}},
bk:function(a,b){var s,r
if(this.cX(b)){s=this.a
r=s.length
C.b.bk(s,b)
this.cE(r,b)}},
$ii:1}
O.cz.prototype={
gk:function(a){return this.a.length},
gv:function(){var s=this.b
return s==null?this.b=D.I():s},
aF:function(){var s=this.b
if(s!=null)s.C(null)},
gY:function(a){var s=this.a
if(s.length>0)return C.b.gaA(s)
else return V.bN()},
e3:function(a){var s=this.a
if(a==null)s.push(V.bN())
else s.push(a)
this.aF()},
co:function(){var s=this.a
if(s.length>0){s.pop()
this.aF()}}}
Y.bV.prototype={
i:function(a){return this.b}}
Y.dx.prototype={
i:function(a){switch(this.a){case C.q:return"intesected"
case C.e:return"noCollision"
case C.r:return"outOfRange at "+H.h(this.b)
case C.f:return"collision at "+H.h(this.b)
default:return"Unknown collision value"}}}
Y.b2.prototype={
i:function(a){var s=this,r=s.cz(0)
return r+(s.a===C.f?" "+H.h(s.r)+" "+H.h(s.x):"")}}
Y.aO.prototype={
i:function(a){var s=this,r=s.cz(0)
return r+(s.a===C.f?" "+H.h(s.r)+" "+H.h(s.x)+" "+H.h(s.y):"")}}
E.hk.prototype={}
E.aD.prototype={
cD:function(a,b,c,d,e,f){var s,r=this
r.a=d
r.b=!0
r.x=r.r=r.f=r.e=r.d=r.c=null
s=O.ki(t.l)
r.y=s
s.be(r.ghQ(),r.ghT())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sby(0,e)
r.sct(f)
r.saB(c)},
cL:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.a2(s,s.length);s.A();){r=s.d
if(r.f==null)r.cL()}},
sby:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gv().K(0,q.gdY())
s=q.c
if(s!=null)s.gv().m(0,q.gdY())
r=new D.C("shape",p,q.c)
r.b=!0
q.aj(r)}},
sct:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gv().K(0,q.ge_())
s=q.f
q.f=a
if(a!=null)a.gv().m(0,q.ge_())
q.cL()
r=new D.C("technique",s,q.f)
r.b=!0
q.aj(r)}},
saB:function(a){var s,r,q=this
if(!J.E(q.r,a)){s=q.r
if(s!=null)s.gv().K(0,q.gdW())
if(a!=null)a.gv().m(0,q.gdW())
q.r=a
r=new D.C("mover",s,a)
r.b=!0
q.aj(r)}},
ag:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aD(0,b,q):null
if(!J.E(o,q.x)){s=q.x
q.x=o
r=new D.C("matrix",s,o)
r.b=!0
q.aj(r)}p=q.f
if(p!=null)p.ag(0,b)
for(p=q.y.a,p=new J.a2(p,p.length);p.A();)p.d.ag(0,b)},
aX:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gY(q))
else o.push(p.j(0,q.gY(q)))
q.aF()
a.e4(r.f)
q=a.dy
s=(q&&C.b).gaA(q)
if(s!=null&&r.d!=null)s.i9(a,r)
for(q=r.y.a,q=new J.a2(q,q.length);q.A();)q.d.aX(a)
a.e2()
a.dx.co()},
aj:function(a){var s=this.z
if(s!=null)s.C(a)},
a2:function(){return this.aj(null)},
dZ:function(a){this.e=null
this.aj(a)},
hW:function(){return this.dZ(null)},
e0:function(a){this.aj(a)},
hX:function(){return this.e0(null)},
dX:function(a){this.aj(a)},
hV:function(){return this.dX(null)},
dV:function(a){this.aj(a)},
hS:function(){return this.dV(null)},
hR:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdU(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bG()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.a2()},
hU:function(a,b){var s,r
for(s=b.gR(b),r=this.gdU();s.A();)s.gF(s).gv().K(0,r)
this.a2()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bD.prototype={
i:function(a){return this.b}}
E.bS.prototype={
i:function(a){return this.b}}
E.fj.prototype={}
E.ii.prototype={
eo:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ab(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cz()
r=t.p
s.a=H.d([],r)
s.gv().m(0,new E.ij(q))
q.cy=s
s=new O.cz()
s.a=H.d([],r)
s.gv().m(0,new E.ik(q))
q.db=s
s=new O.cz()
s.a=H.d([],r)
s.gv().m(0,new E.il(q))
q.dx=s
s=H.d([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.z(t.h9)},
gi6:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gY(q)
s=r.db
s=r.z=q.j(0,s.gY(s))
q=s}return q},
e4:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gaA(s):a)},
e2:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.ij.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.ik.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.il.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.eL.prototype={
cH:function(a){this.e6()},
cG:function(){return this.cH(null)},
ghI:function(){var s,r=this,q=Date.now(),p=C.c.a1(P.l8(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ab(q,!1)
return s/p},
cZ:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.j()
if(typeof p!=="number")return H.e(p)
s=C.d.cd(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.j()
r=C.d.cd(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.lF(C.o,q.gib())}},
e6:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.E.eS(s)
r=W.me(new E.iH(this),t.H)
r.toString
C.E.fW(s,r)}},
i8:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cZ()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ab(p,!1)
q.y=P.l8(p-q.r.a).a*0.000001
p=q.cy
C.b.sk(p.a,0)
p.aF()
p=q.db
C.b.sk(p.a,0)
p.aF()
p=q.dx
C.b.sk(p.a,0)
p.aF()
p=q.dy
p.toString
C.b.sk(p,0)
q.dy.push(null)
m.aX(n.e)}}catch(o){s=H.bb(o)
r=H.kS(o)
P.kX("Error: "+H.h(s))
P.kX("Stack: "+H.h(r))
throw H.c(s)}}}
E.iH.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.i8()}}}
Z.f6.prototype={}
Z.dy.prototype={
aP:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.bb(q)
r=P.t('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.h(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.h(s.e)+"]"}}
Z.jl.prototype={}
Z.dz.prototype={
aT:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
aP:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].aP(a)},
bu:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aX:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.b(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=t.i,n=H.d([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)n.push(s[q].i(0))
p=H.d([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a6(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.u(n,", ")+"\nAttrs:   "+C.b.u(p,", ")}}
Z.bK.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.h(H.eo(this.c))+"'")+"]"}}
Z.aR.prototype={
gcw:function(a){var s=this.a,r=(s&$.bf().a)!==0?3:0
if((s&$.be().a)!==0)r+=3
if((s&$.bd().a)!==0)r+=3
if((s&$.bg().a)!==0)r+=2
if((s&$.bh().a)!==0)r+=3
if((s&$.dl().a)!==0)r+=3
if((s&$.dm().a)!==0)r+=4
if((s&$.c9().a)!==0)++r
return(s&$.bc().a)!==0?r+4:r},
hh:function(a){var s,r=$.bf(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.be()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bd()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bg()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bh()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dl()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dm()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c9()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bc()
if((q&r.a)!==0)if(s===a)return r
return $.mK()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aR))return!1
return this.a===b.a},
i:function(a){var s=H.d([],t.i),r=this.a
if((r&$.bf().a)!==0)s.push("Pos")
if((r&$.be().a)!==0)s.push("Norm")
if((r&$.bd().a)!==0)s.push("Binm")
if((r&$.bg().a)!==0)s.push("Txt2D")
if((r&$.bh().a)!==0)s.push("TxtCube")
if((r&$.dl().a)!==0)s.push("Clr3")
if((r&$.dm().a)!==0)s.push("Clr4")
if((r&$.c9().a)!==0)s.push("Weight")
if((r&$.bc().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.u(s,"|")}}
D.hl.prototype={}
D.bG.prototype={
m:function(a,b){var s=this.a;(s==null?this.a=H.d([],t.f):s).push(b)},
K:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.J(q,b)
if(q===!0){q=r.a
s=(q&&C.b).K(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.J(q,b)
if(q===!0){q=r.b
s=(q&&C.b).K(q,b)||s}return s},
C:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.R()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.G(P.kr(s,!0,t.dm),new D.hE(o))
s=p.b
if(s!=null){p.b=H.d([],t.f)
C.b.G(s,new D.hF(o))}return!0},
dm:function(){return this.C(null)},
aq:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.C(s)}}}}
D.hE.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.hF.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.R.prototype={}
D.aE.prototype={}
D.aF.prototype={}
D.C.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.dA.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dA))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.a7.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.a7))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.aY.prototype={}
X.cq.prototype={
gaV:function(){var s=this.y
return s==null?this.y=D.I():s},
ac:function(a){this.m(0,new X.a7(a,new X.bt(!1,!1,!1)))},
cI:function(a){},
ew:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){q=a[r]
if(C.b.J(this.a,q))return!1}return!0},
eu:function(a,b){var s=new D.aE()
s.b=!0
this.cI(s)},
ey:function(a,b){var s=new D.aF()
s.b=!0
this.cI(s)},
bA:function(a){var s,r=this
if(!r.r&&a instanceof X.aY){s=a.c
if(C.b.J(r.a,s)){r.r=!0
s=r.y
if(s!=null)s.C(a)}}},
bP:function(a){var s
if(this.r&&a instanceof X.aY){s=a.c
if(C.b.J(this.a,s))this.r=!1}},
an:function(a){var s,r,q=this
if(q.f!=null)return!1
q.f=a
s=a.b
s.gdl().m(0,q.gbz())
r=s.a
s=r==null?s.a=D.I():r
s.m(0,q.gbO())
return!0}}
X.hO.prototype={
i2:function(a){var s,r
this.d.m(0,a.a)
s=this.a
if(s==null)return!1
r=new X.aY(a)
r.b=!0
return s.C(r)},
hZ:function(a){var s,r
this.d.K(0,a.a)
s=this.b
if(s==null)return!1
r=new X.aY(a)
r.b=!0
return s.C(r)},
gdl:function(){var s=this.b
return s==null?this.b=D.I():s}}
X.cv.prototype={}
X.hU.prototype={
b0:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.j()
s=b.b
r=o.ch
if(typeof s!=="number")return s.j()
q=new V.aw(m.a+l*k,m.b+s*r)
r=o.a.gbl()
p=new X.bP(a,V.bv(),o.x,r,q)
p.b=!0
o.z=new P.ab(n,!1)
o.x=q
return p},
cn:function(a,b){this.r=a.a
return!1},
b8:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.ee()
if(typeof s!=="number")return s.a7()
this.r=(s&~r)>>>0
return!1},
b7:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.b0(a,b))
return!0},
i3:function(a){return!1},
ft:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cv(c,p.a.gbl(),b)
q.b=!0
r.C(q)
p.y=new P.ab(s,!1)
p.x=V.bv()}}
X.bt.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.bt))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bP.prototype={}
X.id.prototype={
bJ:function(a,b,c){var s=this,r=new P.ab(Date.now(),!1),q=s.a.gbl(),p=new X.bP(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cn:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.C(this.bJ(a,b,!0))
return!0},
b8:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.ee()
if(typeof r!=="number")return r.a7()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.C(s.bJ(a,b,!0))
return!0},
b7:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.bJ(a,b,!1))
return!0},
i4:function(a,b){return!1}}
X.em.prototype={}
X.cL.prototype={}
X.iK.prototype={
b0:function(a,b){var s=this,r=new P.ab(Date.now(),!1),q=a.length>0?a[0]:V.bv(),p=s.a.gbl(),o=new X.cL(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
i1:function(a){var s=this.b
if(s==null)return!1
s.C(this.b0(a,!0))
return!0},
i_:function(a){var s=this.c
if(s==null)return!1
s.C(this.b0(a,!0))
return!0},
i0:function(a){var s=this.d
if(s==null)return!1
s.C(this.b0(a,!1))
return!0}}
X.f3.prototype={
gbl:function(){var s=this.a,r=C.k.gdj(s).c
r.toString
s=C.k.gdj(s).d
s.toString
return V.ly(0,0,r,s)},
cO:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.a7(s,new X.bt(r,a.altKey,a.shiftKey))},
aN:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
bU:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
av:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.n()
if(typeof o!=="number")return H.e(o)
s=r.top
if(typeof p!=="number")return p.n()
if(typeof s!=="number")return H.e(s)
return new V.aw(q-o,p-s)},
b1:function(a){return new V.am(a.movementX,a.movementY)},
bQ:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.d([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
o=C.d.ak(p.pageX)
C.d.ak(p.pageY)
n=k.left
if(typeof n!=="number")return H.e(n)
C.d.ak(p.pageX)
m=C.d.ak(p.pageY)
l=k.top
if(typeof l!=="number")return H.e(l)
j.push(new V.aw(o-n,m-l))}return j},
at:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dA(s,new X.bt(r,a.altKey,a.shiftKey))},
bK:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.n()
if(typeof n!=="number")return H.e(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.n()
if(typeof p!=="number")return H.e(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.e(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.e(p)
p=r<p}else p=!1
return p},
fo:function(a){this.f=!0},
fc:function(a){this.f=!1},
fi:function(a){if(this.f&&this.bK(a))a.preventDefault()},
bP:function(a){var s
if(!this.f)return
s=this.cO(a)
if(this.b.i2(s))a.preventDefault()},
bA:function(a){var s
if(!this.f)return
s=this.cO(a)
if(this.b.hZ(s))a.preventDefault()},
fv:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aN(a)
if(p.x){s=p.at(a)
r=p.b1(a)
if(p.d.cn(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.at(a)
q=p.av(a)
if(p.c.cn(s,q))a.preventDefault()},
fB:function(a){var s,r,q,p=this
p.aN(a)
s=p.at(a)
if(p.x){r=p.b1(a)
if(p.d.b8(s,r))a.preventDefault()
return}if(p.r)return
q=p.av(a)
if(p.c.b8(s,q))a.preventDefault()},
fm:function(a){var s,r,q,p=this
if(!p.bK(a)){p.aN(a)
s=p.at(a)
if(p.x){r=p.b1(a)
if(p.d.b8(s,r))a.preventDefault()
return}if(p.r)return
q=p.av(a)
if(p.c.b8(s,q))a.preventDefault()}},
fz:function(a){var s,r,q,p=this
p.aN(a)
s=p.at(a)
if(p.x){r=p.b1(a)
if(p.d.b7(s,r))a.preventDefault()
return}if(p.r)return
q=p.av(a)
if(p.c.b7(s,q))a.preventDefault()},
fk:function(a){var s,r,q,p=this
if(!p.bK(a)){p.aN(a)
s=p.at(a)
if(p.x){r=p.b1(a)
if(p.d.b7(s,r))a.preventDefault()
return}if(p.r)return
q=p.av(a)
if(p.c.b7(s,q))a.preventDefault()}},
fD:function(a){var s,r,q=this
q.aN(a)
s=new V.am((a&&C.D).ght(a),C.D.ghu(a)).j(0,q.Q)
if(q.x){if(q.d.i3(s))a.preventDefault()
return}if(q.r)return
r=q.av(a)
if(q.c.i4(s,r))a.preventDefault()},
fF:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.at(q.y)
r=q.av(q.y)
q.d.ft(s,r,p)}},
fR:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bU(a)
s=r.bQ(a)
if(r.e.i1(s))a.preventDefault()},
fN:function(a){var s
this.bU(a)
s=this.bQ(a)
if(this.e.i_(s))a.preventDefault()},
fP:function(a){var s
this.bU(a)
s=this.bQ(a)
if(this.e.i0(s))a.preventDefault()}}
D.dv.prototype={$iS:1}
D.bm.prototype={
as:function(a){var s=this.r
if(s!=null)s.C(a)},
eA:function(){return this.as(null)},
$iS:1}
D.S.prototype={}
D.cs.prototype={
as:function(a){var s=this.y
if(s!=null)s.C(a)},
cW:function(a){var s=this.z
if(s!=null)s.C(a)},
fs:function(){return this.cW(null)},
fH:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){q=a[r]
if(q==null||this.eN(q))return!1}return!0},
f6:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcV(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o instanceof D.bm)this.f.push(o)
n=o.r
if(n==null){n=new D.bG()
n.d=0
o.r=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}s=new D.aE()
s.b=!0
this.as(s)},
fL:function(a,b){var s,r,q
for(s=b.gR(b),r=this.gcV();s.A();){q=s.gF(s)
C.b.K(this.e,q)
q.gv().K(0,r)}s=new D.aF()
s.b=!0
this.as(s)},
eN:function(a){var s=C.b.J(this.f,a)
return s}}
D.el.prototype={$iS:1}
D.ey.prototype={$iS:1}
V.Q.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Q))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.bl.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bl))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.hC.prototype={}
V.aZ.prototype={
a6:function(a,b){var s=this,r=H.d([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
bo:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.a,e=g.e,d=g.y
if(typeof e!=="number")return e.j()
if(typeof d!=="number")return H.e(d)
s=e*d
r=g.f
q=g.x
if(typeof r!=="number")return r.j()
if(typeof q!=="number")return H.e(q)
if(typeof f!=="number")return f.j()
p=g.d
o=g.b
if(typeof o!=="number")return o.j()
n=o*d
m=g.c
if(typeof m!=="number")return H.e(m)
l=q*m
if(typeof p!=="number")return p.j()
k=g.r
j=o*r-e*m
if(typeof k!=="number")return k.j()
i=f*(s-r*q)-p*(n-l)+k*j
$.A().toString
if(Math.abs(i-0)<1e-9)return V.nl()
h=1/i
return new V.aZ((s-q*r)*h,(l-n)*h,j*h,(k*r-p*d)*h,(f*d-k*m)*h,(p*m-f*r)*h,(p*q-k*e)*h,(k*o-f*q)*h,(f*e-p*o)*h)},
ar:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.j()
if(typeof g!=="number")return H.e(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.e(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.e(p)
o=i.d
if(typeof o!=="number")return o.j()
n=i.e
if(typeof n!=="number")return n.j()
m=i.f
if(typeof m!=="number")return m.j()
l=i.r
if(typeof l!=="number")return l.j()
k=i.x
if(typeof k!=="number")return k.j()
j=i.y
if(typeof j!=="number")return j.j()
return new V.v(h*g+s*r+q*p,o*g+n*r+m*p,l*g+k*r+j*p)},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aZ))return!1
s=b.a
r=q.a
$.A().toString
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.d
r=q.d
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.x
r=q.x
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.c8(H.d([o.a,o.d,o.r],n),3,0),l=V.c8(H.d([o.b,o.e,o.x],n),3,0),k=V.c8(H.d([o.c,o.f,o.y],n),3,0)
n=m.length
if(0>=n)return H.b(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.b(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.b(k,0)
s=s+k[0]+",\n"
if(1>=n)return H.b(m,1)
p=" "+m[1]+", "
if(1>=r)return H.b(l,1)
p=p+l[1]+", "
if(1>=q)return H.b(k,1)
p=s+(p+k[1]+",\n")
if(2>=n)return H.b(m,2)
n=" "+m[2]+", "
if(2>=r)return H.b(l,2)
n=n+l[2]+", "
if(2>=q)return H.b(k,2)
return p+(n+k[2]+"]")}}
V.aJ.prototype={
a6:function(a,b){var s=this,r=H.d([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
bo:function(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b1.f
if(typeof b2!=="number")return b2.j()
if(typeof b3!=="number")return H.e(b3)
s=b1.b
r=b1.e
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.e(r)
q=b2*b3-s*r
p=b1.r
if(typeof p!=="number")return H.e(p)
o=b1.c
if(typeof o!=="number")return o.j()
n=b2*p-o*r
m=b1.x
if(typeof m!=="number")return H.e(m)
l=b1.d
if(typeof l!=="number")return l.j()
k=b2*m-l*r
j=s*p-o*b3
i=s*m-l*b3
h=o*m-l*p
g=b1.y
f=b1.cy
if(typeof g!=="number")return g.j()
e=b1.z
d=b1.cx
if(typeof e!=="number")return e.j()
c=g*f-e*d
b=b1.db
a=b1.Q
if(typeof a!=="number")return a.j()
a0=g*b-a*d
a1=b1.dx
a2=b1.ch
if(typeof a2!=="number")return a2.j()
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
$.A().toString
if(Math.abs(a7-0)<1e-9)return V.bN()
a8=1/a7
a9=-r
b0=-d
return V.b_((b3*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(b2*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-b3*a3+m*c)*a8,(-b2*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+b3*a0-p*c)*a8,(b2*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
j:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b5.a
if(typeof b2!=="number")return b2.j()
if(typeof b3!=="number")return H.e(b3)
s=b1.b
r=b5.e
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.e(r)
q=b1.c
p=b5.y
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.e(p)
o=b1.d
n=b5.cx
if(typeof o!=="number")return o.j()
m=b5.b
if(typeof m!=="number")return H.e(m)
l=b5.f
if(typeof l!=="number")return H.e(l)
k=b5.z
if(typeof k!=="number")return H.e(k)
j=b5.cy
i=b5.c
if(typeof i!=="number")return H.e(i)
h=b5.r
if(typeof h!=="number")return H.e(h)
g=b5.Q
if(typeof g!=="number")return H.e(g)
f=b5.db
e=b5.d
if(typeof e!=="number")return H.e(e)
d=b5.x
if(typeof d!=="number")return H.e(d)
c=b5.ch
if(typeof c!=="number")return H.e(c)
b=b5.dx
a=b1.e
if(typeof a!=="number")return a.j()
a0=b1.f
if(typeof a0!=="number")return a0.j()
a1=b1.r
if(typeof a1!=="number")return a1.j()
a2=b1.x
if(typeof a2!=="number")return a2.j()
a3=b1.y
if(typeof a3!=="number")return a3.j()
a4=b1.z
if(typeof a4!=="number")return a4.j()
a5=b1.Q
if(typeof a5!=="number")return a5.j()
a6=b1.ch
if(typeof a6!=="number")return a6.j()
a7=b1.cx
a8=b1.cy
a9=b1.db
b0=b1.dx
return V.b_(b2*b3+s*r+q*p+o*n,b2*m+s*l+q*k+o*j,b2*i+s*h+q*g+o*f,b2*e+s*d+q*c+o*b,a*b3+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*b3+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*b3+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
ar:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.j()
if(typeof g!=="number")return H.e(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.e(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.e(p)
o=i.e
if(typeof o!=="number")return o.j()
n=i.f
if(typeof n!=="number")return n.j()
m=i.r
if(typeof m!=="number")return m.j()
l=i.y
if(typeof l!=="number")return l.j()
k=i.z
if(typeof k!=="number")return k.j()
j=i.Q
if(typeof j!=="number")return j.j()
return new V.v(h*g+s*r+q*p,o*g+n*r+m*p,l*g+k*r+j*p)},
bc:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=a.a
if(typeof e!=="number")return e.j()
if(typeof d!=="number")return H.e(d)
s=f.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.e(r)
q=f.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.e(p)
o=f.d
if(typeof o!=="number")return H.e(o)
n=f.e
if(typeof n!=="number")return n.j()
m=f.f
if(typeof m!=="number")return m.j()
l=f.r
if(typeof l!=="number")return l.j()
k=f.x
if(typeof k!=="number")return H.e(k)
j=f.y
if(typeof j!=="number")return j.j()
i=f.z
if(typeof i!=="number")return i.j()
h=f.Q
if(typeof h!=="number")return h.j()
g=f.ch
if(typeof g!=="number")return H.e(g)
return new V.N(e*d+s*r+q*p+o,n*d+m*r+l*p+k,j*d+i*r+h*p+g)},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aJ))return!1
s=b.a
r=q.a
$.A().toString
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.d
r=q.d
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.x
r=q.x
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.z
r=q.z
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.Q
r=q.Q
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.ch
r=q.ch
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.cx-q.cx)<1e-9))return!1
if(!(Math.abs(b.cy-q.cy)<1e-9))return!1
if(!(Math.abs(b.db-q.db)<1e-9))return!1
if(!(Math.abs(b.dx-q.dx)<1e-9))return!1
return!0},
i:function(a){return this.L()},
D:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.c8(H.d([n.a,n.e,n.y,n.cx],m),3,0),k=V.c8(H.d([n.b,n.f,n.z,n.cy],m),3,0),j=V.c8(H.d([n.c,n.r,n.Q,n.db],m),3,0),i=V.c8(H.d([n.d,n.x,n.ch,n.dx],m),3,0)
m=l.length
if(0>=m)return H.b(l,0)
s="["+l[0]+", "
r=k.length
if(0>=r)return H.b(k,0)
s=s+k[0]+", "
q=j.length
if(0>=q)return H.b(j,0)
s=s+j[0]+", "
p=i.length
if(0>=p)return H.b(i,0)
s=s+i[0]+",\n"
o=a+" "
if(1>=m)return H.b(l,1)
o=o+l[1]+", "
if(1>=r)return H.b(k,1)
o=o+k[1]+", "
if(1>=q)return H.b(j,1)
o=o+j[1]+", "
if(1>=p)return H.b(i,1)
o=s+(o+i[1]+",\n")
s=a+" "
if(2>=m)return H.b(l,2)
s=s+l[2]+", "
if(2>=r)return H.b(k,2)
s=s+k[2]+", "
if(2>=q)return H.b(j,2)
s=s+j[2]+", "
if(2>=p)return H.b(i,2)
s=o+(s+i[2]+",\n")
o=a+" "
if(3>=m)return H.b(l,3)
o=o+l[3]+", "
if(3>=r)return H.b(k,3)
o=o+k[3]+", "
if(3>=q)return H.b(j,3)
o=o+j[3]+", "
if(3>=p)return H.b(i,3)
return s+(o+i[3]+"]")},
L:function(){return this.D("")}}
V.ei.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ei))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.aw.prototype={
a4:function(a){return new V.am(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aw))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.N.prototype={
a4:function(a){var s,r,q,p,o=a.a,n=this.a
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.e(n)
s=a.b
r=this.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
q=a.c
p=this.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.e(p)
return new V.v(o-n,s-r,q-p)},
n:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.e(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.e(p)
return new V.N(o-n,s-r,q-p)},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.N))return!1
s=b.a
r=q.a
$.A().toString
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.cE.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cE))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.eq.prototype={
gap:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eq))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.cH.prototype={
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.cH))return!1
s=b.a
r=q.a
$.A().toString
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.d-q.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.am.prototype={
cg:function(a){return Math.sqrt(this.X(this))},
X:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.e(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.e(r)
return q*p+s*r},
j:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.j()
if(typeof b!=="number")return H.e(b)
s=this.b
if(typeof s!=="number")return s.j()
return new V.am(r*b,s*b)},
a0:function(a,b){var s,r
$.A().toString
if(Math.abs(b-0)<1e-9){s=$.lM
return s==null?$.lM=new V.am(0,0):s}s=this.a
if(typeof s!=="number")return s.a0()
r=this.b
if(typeof r!=="number")return r.a0()
return new V.am(s/b,r/b)},
q:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
s=b.a
r=this.a
$.A().toString
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.v.prototype={
cg:function(a){return Math.sqrt(this.X(this))},
X:function(a){var s,r,q,p,o=this.a,n=a.a
if(typeof o!=="number")return o.j()
if(typeof n!=="number")return H.e(n)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.e(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.e(p)
return o*n+s*r+q*p},
ci:function(a,b){return new V.v(V.kU(this.a,a.a,b),V.kU(this.b,a.b,b),V.kU(this.c,a.c,b))},
I:function(){var s=this,r=Math.sqrt(s.X(s))
if(r===1)return s
return s.a0(0,r)},
b2:function(a){var s,r,q,p,o=this.b,n=a.c
if(typeof o!=="number")return o.j()
if(typeof n!=="number")return H.e(n)
s=this.c
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.e(r)
q=a.a
if(typeof q!=="number")return H.e(q)
p=this.a
if(typeof p!=="number")return p.j()
return new V.v(o*n-s*r,s*q-p*n,p*r-o*q)},
p:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.p()
if(typeof n!=="number")return H.e(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.e(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.e(p)
return new V.v(o+n,s+r,q+p)},
n:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.e(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.e(p)
return new V.v(o-n,s-r,q-p)},
M:function(a){var s,r,q=this.a
if(typeof q!=="number")return q.M()
s=this.b
if(typeof s!=="number")return s.M()
r=this.c
if(typeof r!=="number")return r.M()
return new V.v(-q,-s,-r)},
j:function(a,b){var s,r,q=this.a
if(typeof q!=="number")return q.j()
s=this.b
if(typeof s!=="number")return s.j()
r=this.c
if(typeof r!=="number")return r.j()
return new V.v(q*b,s*b,r*b)},
a0:function(a,b){var s,r,q
$.A().toString
if(Math.abs(b-0)<1e-9)return V.bY()
s=this.a
if(typeof s!=="number")return s.a0()
r=this.b
if(typeof r!=="number")return r.a0()
q=this.c
if(typeof q!=="number")return q.a0()
return new V.v(s/b,r/b,q/b)},
dT:function(){var s=this.a
$.A().toString
if(typeof s!=="number")return H.e(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.b
if(typeof s!=="number")return H.e(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.c
if(typeof s!=="number")return H.e(s)
if(!(Math.abs(0-s)<1e-9))return!1
return!0},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.v))return!1
s=b.a
r=q.a
$.A().toString
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
U.ho.prototype={
bC:function(a){var s=this.a,r=this.c,q=this.b
if(s)return V.pL(a,r,q)
else{if(a<r)s=r
else s=a>q?q:a
return s}},
gv:function(){var s=this.y
return s==null?this.y=D.I():s},
O:function(a){var s=this.y
if(s!=null)s.C(a)},
scu:function(a,b){var s=this.a
if(s!==b){this.a=b
s=new D.C("wrap",s,b)
s.b=!0
this.O(s)}},
sck:function(a){var s,r=this,q=r.b
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bC(s)}q=new D.C("maximumLocation",q,r.b)
q.b=!0
r.O(q)}},
scm:function(a){var s,r=this,q=r.c
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bC(s)}q=new D.C("minimumLocation",q,r.c)
q.b=!0
r.O(q)}},
sa_:function(a,b){var s,r=this
b=r.bC(b==null?0:b)
s=r.d
$.A().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.C("location",s,b)
s.b=!0
r.O(s)}},
sb6:function(a){var s,r,q=this,p=q.e
$.A().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.C("maximumVelocity",p,a)
p.b=!0
q.O(p)}},
sS:function(a){var s=this,r=a==null?0:a,q=s.e
a=-q
if(!(r<a))a=r>q?q:r
r=s.f
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.C("velocity",r,a)
r.b=!0
s.O(r)}},
sax:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.C("dampening",s,a)
s.b=!0
this.O(s)}},
ag:function(a,b){var s,r,q,p=this,o=p.f
$.A().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa_(0,p.d+s*b)
o=p.x
$.A().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sS(s)}}}
U.cd.prototype={
gv:function(){var s=this.b
return s==null?this.b=D.I():s},
sY:function(a,b){var s,r,q,p=this
if(b==null)b=V.bN()
if(!J.E(p.a,b)){s=p.a
p.a=b
r=new D.C("matrix",s,b)
r.b=!0
q=p.b
if(q!=null)q.C(r)}},
aD:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cd))return!1
return J.E(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.bI.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.I():s},
O:function(a){var s=this.e
if(s!=null)s.C(a)},
aa:function(){return this.O(null)},
f4:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaG(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.gv()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.aE()
s.b=!0
this.O(s)},
fJ:function(a,b){var s,r
for(s=b.gR(b),r=this.gaG();s.A();)s.gF(s).gv().K(0,r)
s=new D.aF()
s.b=!0
this.O(s)},
aD:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.a5()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a2(p,p.length),s=null;p.A();){o=p.d
if(o!=null){r=o.aD(0,b,c)
if(r!=null)s=s==null?r:r.j(0,s)}}q.f=s==null?V.bN():s
p=q.e
if(p!=null)p.aq(0)}return q.f},
q:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bI))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.b(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.b(p,r)
if(!J.E(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iT:1}
U.T.prototype={}
U.cR.prototype={
gv:function(){var s=this.fx
return s==null?this.fx=D.I():s},
O:function(a){var s=this.fx
if(s!=null)s.C(a)},
aa:function(){return this.O(null)},
an:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.c
r=s.b
s=r==null?s.b=D.I():r
s.m(0,q.geY())
s=q.a.c
r=s.d
s=r==null?s.d=D.I():r
s.m(0,q.gf_())
s=q.a.c
r=s.c
s=r==null?s.c=D.I():r
s.m(0,q.gf1())
s=q.a.d
r=s.f
s=r==null?s.f=D.I():r
s.m(0,q.geU())
s=q.a.d
r=s.d
s=r==null?s.d=D.I():r
s.m(0,q.geW())
s=q.a.e
r=s.b
s=r==null?s.b=D.I():r
s.m(0,q.gh9())
s=q.a.e
r=s.d
s=r==null?s.d=D.I():r
s.m(0,q.gh7())
s=q.a.e
r=s.c
s=r==null?s.c=D.I():r
s.m(0,q.gh5())
return!0},
am:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.M()
s=-s}if(this.r){if(typeof r!=="number")return r.M()
r=-r}return new V.am(s,r)},
eZ:function(a){var s=this
t.d.a(a)
if(!J.E(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
f0:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a4(a.d)
s=s.X(s)
r=l.Q
if(typeof r!=="number")return H.e(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.am(a.y.a4(a.d).j(0,2).a0(0,s.gap()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.M()
q=l.y
if(typeof q!=="number")return H.e(q)
r.sS(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.M()
r=l.x
if(typeof r!=="number")return H.e(r)
q.sS(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.am(r.a4(q).j(0,2).a0(0,s.gap()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.e(n)
m=l.cy
if(typeof m!=="number")return H.e(m)
r.sa_(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.e(o)
r=l.db
if(typeof r!=="number")return H.e(r)
m.sa_(0,-n*o+r)
l.b.sS(0)
l.c.sS(0)
l.dx=l.am(a.z.a4(q).j(0,2).a0(0,s.gap()))}l.aa()},
f2:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.X(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.M()
q=p.y
if(typeof q!=="number")return H.e(q)
s.sS(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.M()
s=p.x
if(typeof s!=="number")return H.e(s)
q.sS(-r*10*s)
p.aa()}},
eV:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eX:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.E(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.am(r.a4(q).j(0,2).a0(0,s.gap()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.e(n)
m=l.cy
if(typeof m!=="number")return H.e(m)
r.sa_(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.e(o)
r=l.db
if(typeof r!=="number")return H.e(r)
m.sa_(0,-n*o+r)
l.b.sS(0)
l.c.sS(0)
l.dx=l.am(a.z.a4(q).j(0,2).a0(0,s.gap()))
l.aa()},
ha:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
h8:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a4(a.d)
s=s.X(s)
r=l.Q
if(typeof r!=="number")return H.e(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.am(a.y.a4(a.d).j(0,2).a0(0,s.gap()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.M()
q=l.y
if(typeof q!=="number")return H.e(q)
r.sS(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.M()
r=l.x
if(typeof r!=="number")return H.e(r)
q.sS(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.am(r.a4(q).j(0,2).a0(0,s.gap()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.e(n)
m=l.cy
if(typeof m!=="number")return H.e(m)
r.sa_(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.e(o)
r=l.db
if(typeof r!=="number")return H.e(r)
m.sa_(0,-n*o+r)
l.b.sS(0)
l.c.sS(0)
l.dx=l.am(a.z.a4(q).j(0,2).a0(0,s.gap()))}l.aa()},
h6:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.X(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.M()
q=p.y
if(typeof q!=="number")return H.e(q)
s.sS(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.M()
s=p.x
if(typeof s!=="number")return H.e(s)
q.sS(-r*10*s)
p.aa()}},
aD:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.a5()
if(o<n){p.dy=n
s=b.y
p.c.ag(0,s)
p.b.ag(0,s)
o=V.lk(p.b.d)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.j(0,V.b_(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iT:1}
U.cS.prototype={
gv:function(){var s=this.dx
return s==null?this.dx=D.I():s},
O:function(a){var s=this.dx
if(s!=null)s.C(a)},
aa:function(){return this.O(null)},
ga_:function(a){return new V.N(this.r.d,this.x.d,this.y.d)},
fq:function(a){this.O(a)},
bW:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.p()
e+=d}else if(b.r){if(typeof e!=="number")return e.n()
e-=d}else{if(typeof e!=="number")return e.V()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aD:function(a,b,c){var s,r,q,p,o=this,n=o.cy,m=b.e
if(typeof n!=="number")return n.a5()
if(n<m){o.cy=m
o.ga_(o)
s=b.y
if(s>0.1)s=0.1
n=o.ch
if(typeof n!=="number")return n.j()
r=n*s
n=o.cx
if(typeof n!=="number")return n.j()
q=n*s
p=new V.v(o.r.f,o.x.f,o.y.f)
n=o.Q
if(n!=null)p=n.ar(p)
p=new V.v(o.bW(o.a,o.b,r,q,p.a),o.bW(o.c,o.d,r,q,p.b),o.bW(o.e,o.f,r,q,p.c))
n=o.z
if(n!=null)p=n.ar(p)
o.r.sS(p.a)
o.x.sS(p.b)
o.y.sS(p.c)
o.r.ag(0,s)
o.x.ag(0,s)
o.y.ag(0,s)
o.db=V.ll(o.r.d,-o.x.d,o.y.d)}return o.db},
$iT:1}
M.dL.prototype={
aI:function(a){var s=this.y
if(s!=null)s.C(a)},
eB:function(){return this.aI(null)},
fe:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaH(),q=t.f,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bG()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.aE()
s.b=!0
this.aI(s)},
fg:function(a,b){var s,r
for(s=b.gR(b),r=this.gaH();s.A();)s.gF(s).gv().K(0,r)
s=new D.aF()
s.b=!0
this.aI(s)},
gv:function(){var s=this.y
return s==null?this.y=D.I():s},
aX:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.e4(d.d)
s=d.c
s.toString
r=a.a
r.bindFramebuffer(36160,null)
r.enable(2884)
r.enable(2929)
r.depthFunc(513)
q=r.drawingBufferWidth
p=r.drawingBufferHeight
o=s.r
n=o.a
if(typeof q!=="number")return H.e(q)
m=C.d.ak(n*q)
n=o.b
if(typeof p!=="number")return H.e(p)
l=C.d.ak(n*p)
n=C.d.ak(o.c*q)
a.c=n
o=C.d.ak(o.d*p)
a.d=o
r.viewport(m,l,n,o)
r.clearDepth(s.c)
s=s.a
r.clearColor(s.a,s.b,s.c,s.d)
r.clear(16640)
s=d.b
r=a.c
o=a.d
n=s.c
k=s.d
j=s.e
i=j-k
h=1/Math.tan(n*0.5)
g=V.b_(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.e3(g)
r=$.lp
if(r==null){r=V.kt()
o=V.kx()
n=$.lN
r=V.lj(r,o,n==null?$.lN=new V.v(0,0,-1):n)
$.lp=r
f=r}else f=r
r=s.b
if(r!=null){e=r.aD(0,a,s)
if(e!=null)f=e.j(0,f)}a.db.e3(f)
for(s=d.e.a,s=new J.a2(s,s.length);s.A();)s.d.ag(0,a)
for(s=d.e.a,s=new J.a2(s,s.length);s.A();)s.d.aX(a)
d.b.toString
a.cy.co()
a.db.co()
d.c.toString
a.e2()}}
A.ds.prototype={}
A.hf.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hA:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hv:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.Z.prototype={
gal:function(a){var s=this.a?1:0,r=this.b?2:0,q=this.c?4:0
return s|r|q},
i:function(a){var s=this.a?1:0,r=this.b?2:0,q=this.c?4:0
return""+(s|r|q)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.Z))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c}}
A.e1.prototype={
en:function(d7,d8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8="emissionTxt",c9="ambientTxt",d0="diffuseTxt",d1="invDiffuseTxt",d2="specularTxt",d3="reflectTxt",d4="refractTxt",d5="alphaTxt",d6="uniform mat4 objMat;\n"
c4.z=d7
s=new P.V("")
r=d7.fr
if(r){s.a=d6
q=d6}else q=""
p=d7.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=d7.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=d7.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.oZ(d7,s)
A.p0(d7,s)
A.p_(d7,s)
A.p2(d7,s)
A.p3(d7,s)
A.p1(d7,s)
A.p4(d7,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=d7.ry
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
s.a=q}if(d7.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(d7.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(d7.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(d7.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
l=q.charCodeAt(0)==0?q:q
k=A.oY(c4.z)
c4.c=l
c4.d=k
c4.e=c4.cP(l,35633)
c4.f=c4.cP(c4.d,35632)
q=c4.a
o=q.createProgram()
c4.r=o
q.attachShader(o,c4.e)
q.attachShader(c4.r,c4.f)
q.linkProgram(c4.r)
if(!q.getProgramParameter(c4.r,35714)){j=q.getProgramInfoLog(c4.r)
q.deleteProgram(c4.r)
H.q(P.t("Failed to link shader: "+H.h(j)))}c4.h1()
c4.h3()
c4.Q=c4.x.h(0,"posAttr")
c4.cx=c4.x.h(0,"normAttr")
c4.ch=c4.x.h(0,"binmAttr")
c4.cy=c4.x.h(0,"txt2DAttr")
c4.db=c4.x.h(0,"txtCubeAttr")
c4.dx=c4.x.h(0,"bendAttr")
if(d7.dy)c4.id=t.I.a(c4.y.B(0,"invViewMat"))
if(r)c4.dy=t.I.a(c4.y.B(0,"objMat"))
if(p)c4.fr=t.I.a(c4.y.B(0,"viewObjMat"))
r=t.I
c4.fy=r.a(c4.y.B(0,"projViewObjMat"))
if(d7.go)c4.fx=r.a(c4.y.B(0,"viewMat"))
if(d7.x1)c4.k1=t.O.a(c4.y.B(0,"txt2DMat"))
if(d7.x2)c4.k2=r.a(c4.y.B(0,"txtCubeMat"))
if(d7.y1)c4.k3=r.a(c4.y.B(0,"colorMat"))
c4.r1=H.d([],t.hg)
q=d7.aS
if(q>0){c4.k4=c4.y.B(0,"bendMatCount")
for(i=0;i<q;++i){p=c4.r1
o=c4.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.q(P.t(c6+n+c7))
p.push(r.a(h))}}r=d7.a
if(r.a)c4.r2=t.r.a(c4.y.B(0,"emissionClr"))
if(r.b)c4.rx=t.c.a(c4.y.B(0,c8))
else if(r.c)c4.ry=t.Q.a(c4.y.B(0,c8))
r=d7.b
if(r.a)c4.x1=t.r.a(c4.y.B(0,"ambientClr"))
if(r.b)c4.x2=t.c.a(c4.y.B(0,c9))
else if(r.c)c4.y1=t.Q.a(c4.y.B(0,c9))
r=d7.c
if(r.a)c4.y2=t.r.a(c4.y.B(0,"diffuseClr"))
if(r.b)c4.aS=t.c.a(c4.y.B(0,d0))
else if(r.c)c4.ay=t.Q.a(c4.y.B(0,d0))
r=d7.d
if(r.a)c4.bm=t.r.a(c4.y.B(0,"invDiffuseClr"))
if(r.b)c4.dq=t.c.a(c4.y.B(0,d1))
else if(r.c)c4.dr=t.Q.a(c4.y.B(0,d1))
r=d7.e
q=r.a
if(q||r.b||r.c){c4.dv=t.n.a(c4.y.B(0,"shininess"))
if(q)c4.ds=t.r.a(c4.y.B(0,"specularClr"))
if(r.b)c4.dt=t.c.a(c4.y.B(0,d2))
else if(r.c)c4.du=t.Q.a(c4.y.B(0,d2))}r=d7.f
if(r.b)c4.dw=t.c.a(c4.y.B(0,"bumpTxt"))
else if(r.c)c4.dz=t.Q.a(c4.y.B(0,"bumpTxt"))
if(d7.db){r=t.Q
c4.dA=r.a(c4.y.B(0,"envSampler"))
q=d7.r
if(q.a)c4.dB=t.r.a(c4.y.B(0,"reflectClr"))
if(q.b)c4.dC=t.c.a(c4.y.B(0,d3))
else if(q.c)c4.dD=r.a(c4.y.B(0,d3))
q=d7.x
p=q.a
if(p||q.b||q.c){c4.dE=t.n.a(c4.y.B(0,"refraction"))
if(p)c4.dF=t.r.a(c4.y.B(0,"refractClr"))
if(q.b)c4.dG=t.c.a(c4.y.B(0,d4))
else if(q.c)c4.dH=r.a(c4.y.B(0,d4))}}r=d7.y
if(r.a)c4.dI=t.n.a(c4.y.B(0,"alpha"))
if(r.b)c4.dJ=t.c.a(c4.y.B(0,d5))
else if(r.c)c4.dK=t.Q.a(c4.y.B(0,d5))
if(d7.k1){r=d7.z
q=r.length
if(q!==0){c4.c4=new H.z(t.J)
c4.c5=new H.z(t.en)
for(p=t.r,o=t.n,n=t.d6,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=f.a
d="barLight"+H.h(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){b=c4.y
a=d+"s["+i+"].startPnt"
h=b.h(0,a)
if(h==null)H.q(P.t(c6+a+c7))
p.a(h)
b=c4.y
a=d+"s["+i+"].endPnt"
a0=b.h(0,a)
if(a0==null)H.q(P.t(c6+a+c7))
p.a(a0)
b=c4.y
a=d+"s["+i+"].color"
a1=b.h(0,a)
if(a1==null)H.q(P.t(c6+a+c7))
p.a(a1)
if(typeof e!=="number")return e.a7()
if((e&4)!==0){b=c4.y
a=d+"s["+i+"].att0"
a2=b.h(0,a)
if(a2==null)H.q(P.t(c6+a+c7))
o.a(a2)
b=c4.y
a=d+"s["+i+"].att1"
a3=b.h(0,a)
if(a3==null)H.q(P.t(c6+a+c7))
o.a(a3)
b=c4.y
a=d+"s["+i+"].att2"
a4=b.h(0,a)
if(a4==null)H.q(P.t(c6+a+c7))
o.a(a4)
a5=a4
a6=a3
a7=a2}else{a5=c5
a6=a5
a7=a6}c.push(new A.cM(h,a0,a1,a7,a6,a5))}c4.c5.l(0,e,c)
m=c4.c4
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.t(c6+a+c7))
m.l(0,e,h)}}r=d7.Q
q=r.length
if(q!==0){c4.c6=new H.z(t.J)
c4.c7=new H.z(t.af)
for(p=t.r,o=t.c,n=t.dv,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.h(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){if(typeof e!=="number")return e.a7()
b=(e&1)!==0
if(b){a=c4.y
a8=d+"s["+i+"].objUp"
h=a.h(0,a8)
if(h==null)H.q(P.t(c6+a8+c7))
p.a(h)
a=c4.y
a8=d+"s["+i+"].objRight"
a0=a.h(0,a8)
if(a0==null)H.q(P.t(c6+a8+c7))
p.a(a0)
a=c4.y
a8=d+"s["+i+"].objDir"
a1=a.h(0,a8)
if(a1==null)H.q(P.t(c6+a8+c7))
p.a(a1)
a9=a1
b0=a0
b1=h}else{a9=c5
b0=a9
b1=b0}a=c4.y
a8=d+"s["+i+"].viewDir"
h=a.h(0,a8)
if(h==null)H.q(P.t(c6+a8+c7))
p.a(h)
a=c4.y
a8=d+"s["+i+"].color"
a0=a.h(0,a8)
if(a0==null)H.q(P.t(c6+a8+c7))
p.a(a0)
if(b){b=c4.y
a=d+"sTexture2D"+i
a1=b.h(0,a)
if(a1==null)H.q(P.t(c6+a+c7))
o.a(a1)
b2=a1}else b2=c5
c.push(new A.cN(b1,b0,a9,h,a0,b2))}c4.c7.l(0,e,c)
m=c4.c6
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.t(c6+a+c7))
m.l(0,e,h)}}r=d7.ch
q=r.length
if(q!==0){c4.c8=new H.z(t.J)
c4.c9=new H.z(t.gr)
for(p=t.r,o=t.O,n=t.Q,m=t.y,b=t.n,a=t.by,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=f.a
d="pointLight"+H.h(e)
c=H.d([],a)
for(a8=f.b,i=0;i<a8;++i){b3=c4.y
b4=d+"s["+i+"].point"
h=b3.h(0,b4)
if(h==null)H.q(P.t(c6+b4+c7))
p.a(h)
b3=c4.y
b4=d+"s["+i+"].viewPnt"
a0=b3.h(0,b4)
if(a0==null)H.q(P.t(c6+b4+c7))
p.a(a0)
b3=c4.y
b4=d+"s["+i+"].color"
a1=b3.h(0,b4)
if(a1==null)H.q(P.t(c6+b4+c7))
p.a(a1)
if(typeof e!=="number")return e.a7()
if((e&3)!==0){b3=c4.y
b4=d+"s["+i+"].invViewRotMat"
a2=b3.h(0,b4)
if(a2==null)H.q(P.t(c6+b4+c7))
o.a(a2)
b5=a2}else b5=c5
if((e&1)!==0){b3=c4.y
b4=d+"sTextureCube"+i
a2=b3.h(0,b4)
if(a2==null)H.q(P.t(c6+b4+c7))
n.a(a2)
b2=a2}else b2=c5
if((e&2)!==0){b3=c4.y
b4=d+"sShadowCube"+i
a2=b3.h(0,b4)
if(a2==null)H.q(P.t(c6+b4+c7))
n.a(a2)
b3=c4.y
b4=d+"s["+i+"].shadowAdj"
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
m.a(a3)
b6=a2
b7=a3}else{b6=c5
b7=b6}if((e&4)!==0){b3=c4.y
b4=d+"s["+i+"].att0"
a2=b3.h(0,b4)
if(a2==null)H.q(P.t(c6+b4+c7))
b.a(a2)
b3=c4.y
b4=d+"s["+i+"].att1"
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
b.a(a3)
b3=c4.y
b4=d+"s["+i+"].att2"
a4=b3.h(0,b4)
if(a4==null)H.q(P.t(c6+b4+c7))
b.a(a4)
a5=a4
a6=a3
a7=a2}else{a5=c5
a6=a5
a7=a6}c.push(new A.cP(h,a0,b5,a1,b2,b6,b7,a7,a6,a5))}c4.c9.l(0,e,c)
a8=c4.c8
b3=c4.y
b4=d+"Count"
h=b3.h(0,b4)
if(h==null)H.q(P.t(c6+b4+c7))
a8.l(0,e,h)}}r=d7.cx
q=r.length
if(q!==0){c4.ca=new H.z(t.J)
c4.cb=new H.z(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.c,b=t.fF,g=0;g<r.length;r.length===q||(0,H.r)(r),++g){f=r[g]
e=f.a
d="spotLight"+H.h(e)
c=H.d([],b)
for(a=f.b,i=0;i<a;++i){a8=c4.y
b3=d+"s["+i+"].objPnt"
h=a8.h(0,b3)
if(h==null)H.q(P.t(c6+b3+c7))
p.a(h)
a8=c4.y
b3=d+"s["+i+"].objDir"
a0=a8.h(0,b3)
if(a0==null)H.q(P.t(c6+b3+c7))
p.a(a0)
a8=c4.y
b3=d+"s["+i+"].viewPnt"
a1=a8.h(0,b3)
if(a1==null)H.q(P.t(c6+b3+c7))
p.a(a1)
a8=c4.y
b3=d+"s["+i+"].color"
a2=a8.h(0,b3)
if(a2==null)H.q(P.t(c6+b3+c7))
p.a(a2)
if(typeof e!=="number")return e.a7()
if((e&3)!==0){a8=c4.y
b3=d+"s["+i+"].objUp"
a3=a8.h(0,b3)
if(a3==null)H.q(P.t(c6+b3+c7))
p.a(a3)
a8=c4.y
b3=d+"s["+i+"].objRight"
a4=a8.h(0,b3)
if(a4==null)H.q(P.t(c6+b3+c7))
p.a(a4)
a8=c4.y
b3=d+"s["+i+"].tuScalar"
b8=a8.h(0,b3)
if(b8==null)H.q(P.t(c6+b3+c7))
o.a(b8)
a8=c4.y
b3=d+"s["+i+"].tvScalar"
b9=a8.h(0,b3)
if(b9==null)H.q(P.t(c6+b3+c7))
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
if(a3==null)H.q(P.t(c6+b4+c7))
n.a(a3)
b7=a3}else b7=c5
if((e&8)!==0){b3=c4.y
b4=d+"s["+i+"].cutoff"
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
o.a(a3)
b3=c4.y
b4=d+"s["+i+"].coneAngle"
a4=b3.h(0,b4)
if(a4==null)H.q(P.t(c6+b4+c7))
o.a(a4)
c2=a4
c3=a3}else{c2=c5
c3=c2}if((e&4)!==0){b3=c4.y
b4=d+"s["+i+"].att0"
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
o.a(a3)
b3=c4.y
b4=d+"s["+i+"].att1"
a4=b3.h(0,b4)
if(a4==null)H.q(P.t(c6+b4+c7))
o.a(a4)
b3=c4.y
b4=d+"s["+i+"].att2"
b8=b3.h(0,b4)
if(b8==null)H.q(P.t(c6+b4+c7))
o.a(b8)
a5=b8
a6=a4
a7=a3}else{a5=c5
a6=a5
a7=a6}if((e&1)!==0){b3=c4.y
b4=d+"sTexture2D"+i
a3=b3.h(0,b4)
if(a3==null)H.q(P.t(c6+b4+c7))
m.a(a3)
b2=a3}else b2=c5
if(a8){a8=c4.y
b3=d+"sShadow2D"+i
a3=a8.h(0,b3)
if(a3==null)H.q(P.t(c6+b3+c7))
m.a(a3)
b6=a3}else b6=c5
c.push(new A.cQ(h,a0,a1,a2,b1,b0,c1,c0,b7,c3,c2,a7,a6,a5,b2,b6))}c4.cb.l(0,e,c)
a=c4.ca
a8=c4.y
b3=d+"Count"
h=a8.h(0,b3)
if(h==null)H.q(P.t(c6+b3+c7))
a.l(0,e,h)}}}},
ai:function(a,b){if(b!=null&&b.d)a.ef(b)},
ab:function(a,b){if(b!=null&&b.d>=6)a.eg(b)}}
A.dw.prototype={
i:function(a){return"barLight"+H.h(this.a)}}
A.dJ.prototype={
i:function(a){return"dirLight"+H.h(this.a)}}
A.en.prototype={
i:function(a){return"pointLight"+H.h(this.a)}}
A.ez.prototype={
i:function(a){return"spotLight"+H.h(this.a)}}
A.hZ.prototype={
i:function(a){return this.ay}}
A.cM.prototype={}
A.cN.prototype={}
A.cP.prototype={}
A.cQ.prototype={}
A.cG.prototype={
eq:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
cP:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.t("Error compiling shader '"+H.h(q)+"': "+H.h(s)))}return q},
h1:function(){var s,r,q,p=this,o=H.d([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.e(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.ds(n,r.name,q))}p.x=new A.hf(o)},
h3:function(){var s,r,q,p=this,o=H.d([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.e(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hr(r.type,r.size,r.name,q))}p.y=new A.iU(o)},
aK:function(a,b,c){var s=this.a
if(a===1)return new A.eT(s,b,c)
else return A.kv(s,this.r,b,a,c)},
eP:function(a,b,c){var s=this.a
if(a===1)return new A.eX(s,b,c)
else return A.kv(s,this.r,b,a,c)},
eQ:function(a,b,c){var s=this.a
if(a===1)return new A.eY(s,b,c)
else return A.kv(s,this.r,b,a,c)},
bj:function(a,b){return new P.fm(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
hr:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aK(b,c,d)
case 5121:return s.aK(b,c,d)
case 5122:return s.aK(b,c,d)
case 5123:return s.aK(b,c,d)
case 5124:return s.aK(b,c,d)
case 5125:return s.aK(b,c,d)
case 5126:return new A.eS(s.a,c,d)
case 35664:return new A.iQ(s.a,c,d)
case 35665:return new A.eU(s.a,c,d)
case 35666:return new A.eV(s.a,c,d)
case 35667:return new A.iR(s.a,c,d)
case 35668:return new A.iS(s.a,c,d)
case 35669:return new A.iT(s.a,c,d)
case 35674:return new A.iV(s.a,c,d)
case 35675:return new A.eW(s.a,c,d)
case 35676:return new A.cO(s.a,c,d)
case 35678:return s.eP(b,c,d)
case 35680:return s.eQ(b,c,d)
case 35670:throw H.c(s.bj("BOOL",c))
case 35671:throw H.c(s.bj("BOOL_VEC2",c))
case 35672:throw H.c(s.bj("BOOL_VEC3",c))
case 35673:throw H.c(s.bj("BOOL_VEC4",c))
default:throw H.c(P.t("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.eR.prototype={}
A.iU.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
B:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.L()},
L:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.eT.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.iR.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.iS.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.iP.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)}}
A.eS.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.iQ.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.eU.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.eV.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.eW.prototype={
ah:function(a){var s=new Float32Array(H.c2(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.cO.prototype={
ah:function(a){var s=new Float32Array(H.c2(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.eX.prototype={
ef:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.eY.prototype={
eg:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.jI.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.ci(q.b,b).ci(q.d.ci(q.c,b),c)
a.sa_(0,new V.N(p.a,p.b,p.c))
a.sba(p.I())
q=1-b
s=1-c
a.sdf(new V.cE(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
r.f.$3(a,b,c)}}
F.k7.prototype={
$2:function(a,b){return 0}}
F.k8.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.e(r)
s=a.f
r=new V.v(s.a,s.b,s.c).I().j(0,this.b+r)
a.sa_(0,new V.N(r.a,r.b,r.c))}}
F.jU.prototype={
$2:function(a,b){return 0}}
F.jV.prototype={
$3:function(a,b,c){var s,r,q=b*2-1,p=c*2-1
a.sa_(0,new V.N(q,p,this.a.a.$2(b,c)))
a.sba(new V.v(q,p,1).I())
s=1-b
r=1-c
a.sdf(new V.cE(b*c,2+s*c,4+b*r,6+s*r))}}
F.dM.prototype={
b3:function(){var s=this
if(!s.gb4()){C.b.K(s.a.a.d.b,s)
s.a.a.a2()}s.bR()
s.bS()
s.fU()},
fZ:function(a){this.a=a
a.d.b.push(this)},
h_:function(a){this.b=a
a.d.c.push(this)},
h0:function(a){this.c=a
a.d.d.push(this)},
bR:function(){var s=this.a
if(s!=null){C.b.K(s.d.b,this)
this.a=null}},
bS:function(){var s=this.b
if(s!=null){C.b.K(s.d.c,this)
this.b=null}},
fU:function(){var s=this.c
if(s!=null){C.b.K(s.d.d,this)
this.c=null}},
gb4:function(){return this.a==null||this.b==null||this.c==null},
eI:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.bY()
if(n!=null)q=q.p(0,n)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.dT())return p
return q.I()},
eK:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.n(0,n)
q=new V.v(o.a,o.b,o.c).I()
o=r.n(0,n)
return q.b2(new V.v(o.a,o.b,o.c).I()).I()},
c_:function(){var s,r=this
if(r.d!=null)return!0
s=r.eI()
if(s==null){s=r.eK()
if(s==null)return!1}r.d=s
r.a.a.a2()
return!0},
eH:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.bY()
if(n!=null)q=q.p(0,n)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.dT())return p
return q.I()},
eJ:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.A().toString
if(Math.abs(p-0)<1e-9){j=b.n(0,e)
o=new V.v(j.a,j.b,j.c).I()
if(q.a-r.a<0)o=o.M(0)}else{n=(j-s.b)/p
j=b.n(0,e)
i=j.a
if(typeof i!=="number")return i.j()
g=j.b
if(typeof g!=="number")return g.j()
j=j.c
if(typeof j!=="number")return j.j()
f=e.a
if(typeof f!=="number")return H.e(f)
d=e.b
if(typeof d!=="number")return H.e(d)
c=e.c
if(typeof c!=="number")return H.e(c)
c=new V.N(i*n+f,g*n+d,j*n+c).n(0,h)
o=new V.v(c.a,c.b,c.c).I()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.M(0)}j=l.d
if(j!=null){m=j.I()
o=m.b2(o).I().b2(m).I()}return o},
bY:function(){var s,r=this
if(r.e!=null)return!0
s=r.eH()
if(s==null){s=r.eJ()
if(s==null)return!1}r.e=s
r.a.a.a2()
return!0},
ghm:function(a){var s=this
if(J.E(s.a,s.b))return!0
if(J.E(s.b,s.c))return!0
if(J.E(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){var s,r,q=this
if(q.gb4())return a+"disposed"
s=a+C.a.af(J.a6(q.a.e),0)+", "+C.a.af(J.a6(q.b.e),0)+", "+C.a.af(J.a6(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
L:function(){return this.D("")}}
F.hG.prototype={}
F.iw.prototype={
b5:function(a,b,c){var s,r=b.a
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
if(r==s.e){r=b.c
r.a.a.w()
r=r.e
s=c.c
s.a.a.w()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.c
s.a.a.w()
if(r==s.e){r=b.c
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.w()
r=r.e
s=c.c
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
if(r==s.e){r=b.c
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.dZ.prototype={
b3:function(){var s=this
if(!s.gb4()){C.b.K(s.a.a.c.b,s)
s.a.a.a2()}s.bR()
s.bS()},
bR:function(){var s=this.a
if(s!=null){C.b.K(s.c.b,this)
this.a=null}},
bS:function(){var s=this.b
if(s!=null){C.b.K(s.c.c,this)
this.b=null}},
gb4:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){if(this.gb4())return a+"disposed"
return a+C.a.af(J.a6(this.a.e),0)+", "+C.a.af(J.a6(this.b.e),0)},
L:function(){return this.D("")}}
F.hP.prototype={}
F.iO.prototype={
b5:function(a,b,c){var s,r=b.a
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
return r==s.e}else{r=b.a
r.a.a.w()
r=r.e
s=c.b
s.a.a.w()
if(r==s.e){r=b.b
r.a.a.w()
r=r.e
s=c.a
s.a.a.w()
return r==s.e}else return!1}}}
F.ek.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.af(J.a6(s.e),0)},
L:function(){return this.D("")}}
F.ip.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.I():s},
cl:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.w()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){p=e[q]
f.a.m(0,p.hp())}f.a.w()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.w()
m=m.e
if(typeof m!=="number")return m.p()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
l=n[m]
f.b.a.a.m(0,l)
m=new F.ek()
if(l.a==null)H.q(P.t("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.C(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.w()
m=m.e
if(typeof m!=="number")return m.p()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.p()
n+=s
m=m.c
if(n>=m.length)return H.b(m,n)
i=m[n]
n=f.c.a
n.a.m(0,j)
n.a.m(0,i)
n=new F.dZ()
m=j.a
if(m==null)H.q(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(m!=i.a)H.q(P.t("May not create a line with vertices attached to different shapes."))
n.a=j
j.c.b.push(n)
n.b=i
i.c.c.push(n)
n.a.a.c.b.push(n)
n=n.a.a.e
if(n!=null)n.C(null)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.r)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.w()
m=m.e
if(typeof m!=="number")return m.p()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.p()
n+=s
m=m.c
if(n>=m.length)return H.b(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.w()
m=m.e
if(typeof m!=="number")return m.p()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
g=n[m]
m=f.d.a
m.a.m(0,j)
m.a.m(0,i)
m.a.m(0,g)
F.dN(j,i,g)}e=f.e
if(e!=null)e.aq(0)},
aQ:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aQ()||!1
if(!r.a.aQ())s=!1
q=r.e
if(q!=null)q.aq(0)
return s},
hO:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.a.c
s=H.d(m.slice(0),H.m7(m).W("u<1>"))
for(m=t.j;s.length!==0;){r=C.b.ghE(s)
C.b.cp(s,0)
if(r!=null){q=H.d([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.b(s,p)
o=s[p]
if(o!=null&&a.b5(0,r,o)){q.push(o)
C.b.cp(s,p)}}if(q.length>1)b.cl(q)}}n.a.w()
n.c.cq()
n.d.cq()
n.b.i7()
n.c.cr(new F.iO())
n.d.cr(new F.iw())
m=n.e
if(m!=null)m.aq(0)},
hj:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.bf().a)!==0?1:0
if((s&$.be().a)!==0)++r
if((s&$.bd().a)!==0)++r
if((s&$.bg().a)!==0)++r
if((s&$.bh().a)!==0)++r
if((s&$.dl().a)!==0)++r
if((s&$.dm().a)!==0)++r
if((s&$.c9().a)!==0)++r
if((s&$.bc().a)!==0)++r
q=a6.gcw(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.d(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.d(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.hh(k)
i=j.gcw(j)
if(k>=m)return H.b(n,k)
n[k]=new Z.dy(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.b(g,h)
f=g[h].hM(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.b(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.c2(o)),35044)
s.bindBuffer(a3,null)
a=new Z.dz(new Z.f6(a3,b),n,a6)
a.b=H.d([],t.aZ)
if(a2.b.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.w()
a0.push(m.e)}a1=Z.ky(s,34963,a0)
a.b.push(new Z.bK(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.w()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.b(m,k)
m=m[k].b
m.a.a.w()
a0.push(m.e)}a1=Z.ky(s,34963,a0)
a.b.push(new Z.bK(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.w()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.b(m,k)
m=m[k].b
m.a.a.w()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.b(m,k)
m=m[k].c
m.a.a.w()
a0.push(m.e)}a1=Z.ky(s,34963,a0)
a.b.push(new Z.bK(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.d([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.D(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.D(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.D(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.D(r))}return C.b.u(q,"\n")},
a2:function(){var s=this.e
if(s!=null)s.C(null)}}
F.iq.prototype={
hg:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.d([],t.b)
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.b(c,q)
k=c[q];++q
if(q>=l)return H.b(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.b(c,i)
h=c[i]
if(r<0||r>=l)return H.b(c,r)
g=c[r]
l=s.a
if(n){l.m(0,k)
s.a.m(0,j)
s.a.m(0,h)
f.push(F.dN(k,j,h))
s.a.m(0,k)
s.a.m(0,h)
s.a.m(0,g)
f.push(F.dN(k,h,g))}else{l.m(0,j)
s.a.m(0,h)
s.a.m(0,g)
f.push(F.dN(j,h,g))
s.a.m(0,j)
s.a.m(0,g)
s.a.m(0,k)
f.push(F.dN(j,g,k))}n=!n}p=!p}return f},
gk:function(a){return this.b.length},
cr:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.b(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.b5(0,n,l)){n.b3()
break}}}}},
cq:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=q.ghm(q)
if(r)q.b3()}},
aQ:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].c_())q=!1
return q},
bZ:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].bY())q=!1
return q},
i:function(a){return this.L()},
D:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].D(a))
return C.b.u(p,"\n")},
L:function(){return this.D("")}}
F.ir.prototype={
gk:function(a){return this.b.length},
cr:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.b(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.b5(0,n,l)){n.b3()
break}}}}},
cq:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=J.E(q.a,q.b)
if(r)q.b3()}},
i:function(a){return this.L()},
D:function(a){var s,r,q=H.d([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.b(r,s)
q.push(r[s].D(a+(""+s+". ")))}return C.b.u(q,"\n")},
L:function(){return this.D("")}}
F.is.prototype={
gk:function(a){return this.b.length},
i7:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.K(q.b.b,r)
q=r.a.a.e
if(q!=null)q.C(null)
q=r.a
if(q!=null){C.b.K(q.b.b,r)
r.a=null}}}},
i:function(a){return this.L()},
D:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].D(a))
return C.b.u(p,"\n")},
L:function(){return this.D("")}}
F.f4.prototype={
c3:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.lO(s.cx,p,m,r,q,o,n,a,l)},
hp:function(){return this.c3(null)},
sa_:function(a,b){var s
if(!J.E(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a2()}},
sba:function(a){var s
if(!J.E(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a2()}},
sdf:function(a){var s
if(!J.E(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a2()}},
hM:function(a){var s,r,q=this
if(a.q(0,$.bf())){s=q.f
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.be())){s=q.r
r=t.m
if(s==null)return H.d([0,1,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.bd())){s=q.x
r=t.m
if(s==null)return H.d([0,0,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.bg())){s=q.y
r=t.m
if(s==null)return H.d([0,0],r)
else return H.d([s.a,s.b],r)}else if(a.q(0,$.bh())){s=q.z
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.dl())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.dm())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1,1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else if(a.q(0,$.c9()))return H.d([q.ch],t.m)
else if(a.q(0,$.bc())){s=q.cx
r=t.m
if(s==null)return H.d([-1,-1,-1,-1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else return H.d([],t.m)},
c_:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.bY()
r.d.G(0,new F.jk(q))
r.r=q.a.I()
q=r.a
if(q!=null){q.a2()
q=r.a.e
if(q!=null)q.aq(0)}return!0},
bY:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.bY()
r.d.G(0,new F.jj(q))
r.x=q.a.I()
q=r.a
if(q!=null){q.a2()
q=r.a.e
if(q!=null)q.aq(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){var s,r,q=this,p="-",o=H.d([],t.i)
o.push(C.a.af(J.a6(q.e),0))
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
o.push(V.D(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.b.u(o,", ")
return a+"{"+r+"}"},
L:function(){return this.D("")}}
F.jk.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.p(0,r)}}}
F.jj.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.p(0,r)}}}
F.ja.prototype={
w:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.b(s,p)
s[p].e=q;++q}this.b=!1}},
m:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.t("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a2()
return!0},
d9:function(a,b){var s=null,r=F.lO(s,s,a,s,s,b,s,s,0)
this.m(0,r)
return r},
gk:function(a){return this.c.length},
aQ:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].c_()
return!0},
bZ:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].bY()
return!0},
hk:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.z==null){o=p.r.I()
if(!J.E(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.C(null)}}}}return!0},
i:function(a){return this.L()},
D:function(a){var s,r,q,p
this.w()
s=H.d([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p)s.push(r[p].D(a))
return C.b.u(s,"\n")},
L:function(){return this.D("")}}
F.jb.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.b(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.b(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.b(r,b)
return r[b]},
G:function(a,b){var s=this
C.b.G(s.b,b)
C.b.G(s.c,new F.jc(s,b))
C.b.G(s.d,new F.jd(s,b))},
i:function(a){return this.L()},
L:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].D(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].D(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].D(""))
return C.b.u(p,"\n")}}
F.jc.prototype={
$1:function(a){if(!J.E(a.a,this.a))this.b.$1(a)}}
F.jd.prototype={
$1:function(a){var s=this.a
if(!J.E(a.a,s)&&!J.E(a.b,s))this.b.$1(a)}}
F.je.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.b(r,s)
return r[s]}else{if(b<0)return H.b(r,b)
return r[b]}},
i:function(a){return this.L()},
L:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].D(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].D(""))
return C.b.u(p,"\n")}}
F.jg.prototype={}
F.jf.prototype={
b5:function(a,b,c){return J.E(b.f,c.f)}}
F.jh.prototype={}
F.ie.prototype={
cl:function(a){var s,r,q,p,o,n,m,l,k,j,i=V.bY()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null){p=i.a
o=q.a
if(typeof p!=="number")return p.p()
if(typeof o!=="number")return H.e(o)
n=i.b
m=q.b
if(typeof n!=="number")return n.p()
if(typeof m!=="number")return H.e(m)
l=i.c
q=q.c
if(typeof l!=="number")return l.p()
if(typeof q!=="number")return H.e(q)
i=new V.v(p+o,n+m,l+q)}}i=i.I()
for(s=a.length,q=i==null,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){k=a[r]
j=q?null:i.I()
if(!J.E(k.r,j)){k.r=j
p=k.a
if(p!=null){p=p.e
if(p!=null)p.C(null)}}}return null}}
F.ji.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].D(""))
return C.b.u(p,"\n")}}
O.e2.prototype={
gv:function(){var s=this.fr
return s==null?this.fr=D.I():s},
Z:function(a){var s=this.fr
if(s!=null)s.C(a)},
bN:function(){return this.Z(null)},
cY:function(a){this.a=null
this.Z(a)},
fY:function(){return this.cY(null)},
f8:function(a,b){var s=new D.aE()
s.b=!0
this.Z(s)},
fa:function(a,b){var s=new D.aF()
s.b=!0
this.Z(s)},
cN:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.z(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
o=p.gao()
n=d.h(0,p.gao())
d.l(0,o,n==null?1:n)}m=H.d([],t.am)
d.G(0,new O.i2(f,m))
C.b.b_(m,new O.i3())
l=new H.z(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){o=l.h(0,0)
l.l(0,0,o==null?1:o)}k=H.d([],t.M)
l.G(0,new O.i4(f,k))
C.b.b_(k,new O.i5())
j=new H.z(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
o=p.gao()
n=j.h(0,p.gao())
j.l(0,o,n==null?1:n)}i=H.d([],t.d1)
j.G(0,new O.i6(f,i))
C.b.b_(i,new O.i7())
h=new H.z(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.r)(e),++q){p=e[q]
r=p.gao()
o=h.h(0,p.gao())
h.l(0,r,o==null?1:o)}g=H.d([],t.cA)
h.G(0,new O.i8(f,g))
C.b.b_(g,new O.i9())
e=C.c.a1(f.e.a.length+3,4)
s=f.b
f.dy.toString
return A.nk(s!=null,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
T:function(a,b){if(b!=null)if(!C.b.J(a,b)){b.saU(0,a.length)
a.push(b)}},
ag:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a2(s,s.length);s.A();){r=s.d
r.toString
q=$.j9
if(q==null)q=$.j9=new V.v(0,0,1)
r.a=q
p=$.j8
r.d=p==null?$.j8=new V.v(0,1,0):p
p=$.j7
r.e=p==null?$.j7=new V.v(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.ar(q).I()
r.d=o.ar(r.d).I()
r.e=o.ar(r.e).I()}}}},
i9:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cN()
s=b6.fr.h(0,b5.ay)
if(s==null){s=A.nj(b5,b6.a)
r=s.b
if(r.length===0)H.q(P.t("May not cache a shader with no name."))
if(b6.fr.c1(0,r))H.q(P.t('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.l(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.bm
b5=b7.e
if(!(b5 instanceof Z.dz))b5=b7.e=null
if(b5==null||!b5.d.q(0,p)){b5=q.k4
if(b5)b7.d.aQ()
o=q.r1
if(o){n=b7.d
m=n.e
if(m!=null)++m.d
n.d.bZ()
n.a.bZ()
n=n.e
if(n!=null)n.aq(0)}n=q.rx
if(n){m=b7.d
l=m.e
if(l!=null)++l.d
m.a.hk()
m=m.e
if(m!=null)m.aq(0)}k=b7.d.hj(new Z.jl(b6.a),p)
k.aT($.bf()).e=b4.a.Q.c
if(b5)k.aT($.be()).e=b4.a.cx.c
if(o)k.aT($.bd()).e=b4.a.ch.c
if(q.r2)k.aT($.bg()).e=b4.a.cy.c
if(n)k.aT($.bh()).e=b4.a.db.c
if(q.ry)k.aT($.bc()).e=b4.a.dx.c
b7.e=k}j=H.d([],t.bw)
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.hA()
if(q.fr){b5=b4.a
n=b6.dx
n=n.gY(n)
b5=b5.dy
b5.toString
b5.ah(n.a6(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.gY(n)
m=b6.dx
m=b6.cx=n.j(0,m.gY(m))
n=m}b5=b5.fr
b5.toString
b5.ah(n.a6(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.gi6()
m=b6.dx
m=b6.ch=n.j(0,m.gY(m))
n=m}b5=b5.fy
b5.toString
b5.ah(n.a6(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.gY(n)
b5=b5.fx
b5.toString
b5.ah(n.a6(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.ah(n.a6(0,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.ah(C.p.a6(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.ah(C.p.a6(n,!0))}if(q.aS>0){i=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,i)
for(h=0;h<i;++h){b5=b4.a
n=b4.e.a
if(h>=n.length)return H.b(n,h)
n=n[h]
b5=b5.r1
if(h>=b5.length)return H.b(b5,h)
b5=b5[h]
g=new Float32Array(H.c2(n.a6(0,!0)))
b5.a.uniformMatrix4fv(b5.d,!1,g)}}b5=q.a
if(b5.a){n=b4.a
m=b4.f.f
n=n.r2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.T(j,b4.f.d)
b5=b4.a
n=b4.f.d
b5.ai(b5.rx,n)}else if(b5.c){b4.T(j,b4.f.e)
b5=b4.a
n=b4.f.e
b5.ab(b5.ry,n)}if(q.k1){b5=q.b
if(b5.a){n=b4.a
m=b4.r.f
n=n.x1
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.T(j,b4.r.d)
b5=b4.a
n=b4.r.d
b5.ai(b5.x2,n)}else if(b5.c){b4.T(j,b4.r.e)
b5=b4.a
n=b4.r.e
b5.ab(b5.y1,n)}b5=q.c
if(b5.a){n=b4.a
m=b4.x.f
n=n.y2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.T(j,b4.x.d)
b5=b4.a
n=b4.x.d
b5.ai(b5.aS,n)}else if(b5.c){b4.T(j,b4.x.e)
b5=b4.a
n=b4.x.e
b5.ab(b5.ay,n)}b5=q.d
if(b5.a){n=b4.a
m=b4.y.f
n=n.bm
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.T(j,b4.y.d)
b5=b4.a
n=b4.y.d
b5.ai(b5.dq,n)}else if(b5.c){b4.T(j,b4.y.e)
b5=b4.a
n=b4.y.e
b5.ab(b5.dr,n)}b5=q.e
n=b5.a
if(n||b5.b||b5.c){m=b4.a
l=b4.z.ch
m=m.dv
m.a.uniform1f(m.d,l)}if(n){n=b4.a
m=b4.z.f
n=n.ds
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.T(j,b4.z.d)
b5=b4.a
n=b4.z.d
b5.ai(b5.dt,n)}else if(b5.c){b4.T(j,b4.z.e)
b5=b4.a
n=b4.z.e
b5.ab(b5.du,n)}b5=q.z
if(b5.length>0){f=new H.z(t.a)
for(n=b4.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.r)(n),++e){d=n[e]
c=d.gao()
b=f.h(0,c)
if(b==null)b=0
f.l(0,c,b+1)
a=J.ca(b4.a.c5.h(0,c),b)
l=d.gip()
a0=$.aL
l=l.bc(a0==null?$.aL=new V.N(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.giu()
a0=$.aL
l=l.bc(a0==null?$.aL=new V.N(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaw(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.gdn()){l=d.gdc()
a0=a.e
a0.a.uniform1f(a0.d,l)
l=d.gdd()
a0=a.f
a0.a.uniform1f(a0.d,l)
l=d.gde()
a0=a.r
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.r)(b5),++e){m=b5[e].a
i=f.h(0,m)
if(i==null)i=0
m=b4.a.c4.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.Q
if(b5.length>0){n=b6.db
a1=n.gY(n)
a2=new H.z(t.a)
for(n=b4.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.r)(n),++e){d=n[e]
b=a2.h(0,0)
if(b==null)b=0
a2.l(0,0,b+1)
a=J.ca(b4.a.c7.h(0,0),b)
l=a1.ar(d.a).I()
a0=a.e
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.c
a4=a.f
a4.a.uniform3f(a4.d,l.a,l.b,l.c)}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.r)(b5),++e){m=b5[e].a
i=a2.h(0,m)
if(i==null)i=0
m=b4.a.c6.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.ch
if(b5.length>0){n=b6.db
a1=n.gY(n)
a5=new H.z(t.a)
for(n=b4.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.r)(n),++e){d=n[e]
c=d.gao()
b=a5.h(0,c)
if(b==null)b=0
a5.l(0,c,b+1)
a=J.ca(b4.a.c9.h(0,c),b)
a6=a1.j(0,d.gY(d))
l=d.gY(d)
a0=$.aL
l=l.bc(a0==null?$.aL=new V.N(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=$.aL
l=a6.bc(l==null?$.aL=new V.N(0,0,0):l)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaw(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gaC()
l=a6.bo(0)
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
g=new Float32Array(H.c2(new V.aZ(a0,a3,a4,a7,a8,a9,b0,b1,l).a6(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,g)
d.gaC()
l=d.gaC()
if(!C.b.J(j,l)){l.saU(0,j.length)
j.push(l)}l=d.gaC()
a0=l.gcj(l)
if(a0){a0=a.f
a3=l.d
a4=a0.a
a0=a0.d
if(a3<6)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}d.gaZ()
l=d.geh()
a0=a.x
a0.toString
a3=l.ghx(l)
a4=l.ghy(l)
a7=l.ghz()
l=l.ghw()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaZ()
if(!C.b.J(j,l)){l.saU(0,j.length)
j.push(l)}l=d.gaZ()
a0=l.gcj(l)
if(a0){a0=a.r
a3=l.d
a4=a0.a
a0=a0.d
if(a3<6)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}if(d.gdn()){l=d.gdc()
a0=a.y
a0.a.uniform1f(a0.d,l)
l=d.gdd()
a0=a.z
a0.a.uniform1f(a0.d,l)
l=d.gde()
a0=a.Q
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.r)(b5),++e){m=b5[e].a
i=a5.h(0,m)
if(i==null)i=0
m=b4.a.c8.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.cx
if(b5.length>0){n=b6.db
a1=n.gY(n)
b3=new H.z(t.a)
for(n=b4.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.r)(n),++e){d=n[e]
c=d.gao()
b=b3.h(0,c)
if(b==null)b=0
b3.l(0,c,b+1)
a=J.ca(b4.a.cb.h(0,c),b)
l=d.gi5(d)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gis(d).I()
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=a1.bc(d.gi5(d))
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaw(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gaC()
l=d.giA()
a0=a.f
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gcs(d)
a0=a.r
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.giy()
a0=a.x
a0.a.uniform1f(a0.d,l)
l=d.giz()
a0=a.y
a0.a.uniform1f(a0.d,l)
d.gaC()
l=d.gaC()
if(!C.b.J(j,l)){l.saU(0,j.length)
j.push(l)}l=d.gaC()
a0=l.gcj(l)
if(a0){a0=a.dx
a3=l.d
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}d.gaZ()
l=d.geh()
a0=a.z
a0.toString
a3=l.ghx(l)
a4=l.ghy(l)
a7=l.ghz()
l=l.ghw()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaZ()
if(!C.b.J(j,l)){l.saU(0,j.length)
j.push(l)}l=d.gaZ()
a0=l.gcj(l)
if(a0){a0=a.dy
a3=l.d
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}if(d.git()){l=d.gir()
a0=a.Q
a0.a.uniform1f(a0.d,l)
l=d.giq()
a0=a.ch
a0.a.uniform1f(a0.d,l)}if(d.gdn()){l=d.gdc()
a0=a.cx
a0.a.uniform1f(a0.d,l)
l=d.gdd()
a0=a.cy
a0.a.uniform1f(a0.d,l)
l=d.gde()
a0=a.db
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.r)(b5),++e){m=b5[e].a
i=b3.h(0,m)
if(i==null)i=0
m=b4.a.ca.h(0,m)
m.a.uniform1i(m.d,i)}}}b5=q.f
if(b5.b){b4.T(j,b4.Q.d)
b5=b4.a
n=b4.Q.d
b5.ai(b5.dw,n)}else if(b5.c){b4.T(j,b4.Q.e)
b5=b4.a
n=b4.Q.e
b5.ab(b5.dz,n)}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.gY(n).bo(0)}b5=b5.id
b5.toString
b5.ah(n.a6(0,!0))}if(q.db){b4.T(j,b4.ch)
b5=b4.a
n=b4.ch
b5.ab(b5.dA,n)
b5=q.r
if(b5.a){n=b4.a
m=b4.cx.f
n=n.dB
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.T(j,b4.cx.d)
b5=b4.a
n=b4.cx.d
b5.ai(b5.dC,n)}else if(b5.c){b4.T(j,b4.cx.e)
b5=b4.a
n=b4.cx.e
b5.ab(b5.dD,n)}b5=q.x
n=b5.a
if(n||b5.b||b5.c){m=b4.a
l=b4.cy.ch
m=m.dE
m.a.uniform1f(m.d,l)}if(n){n=b4.a
m=b4.cy.f
n=n.dF
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.T(j,b4.cy.d)
b5=b4.a
n=b4.cy.d
b5.ai(b5.dG,n)}else if(b5.c){b4.T(j,b4.cy.e)
b5=b4.a
n=b4.cy.e
b5.ab(b5.dH,n)}}b5=q.y
n=b5.a
m=!n
if(!m||b5.b||b5.c){if(n){n=b4.a
l=b4.db.f
n=n.dI
n.a.uniform1f(n.d,l)}if(b5.b){b4.T(j,b4.db.d)
n=b4.a
l=b4.db.d
n.ai(n.dJ,l)}else if(b5.c){b4.T(j,b4.db.e)
n=b4.a
l=b4.db.e
n.ab(n.dK,l)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].aP(b6)
n=b7.e
n.aP(b6)
n.aX(b6)
n.bu(b6)
if(!m||b5.b||b5.c)o.disable(3042)
for(h=0;h<j.length;++h)j[h].bu(b6)
b5=b4.a
b5.toString
o.useProgram(null)
b5.x.hv()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cN().ay}}
O.i2.prototype={
$2:function(a,b){if(typeof b!=="number")return b.p()
return this.b.push(new A.dw(a,C.c.a1(b+3,4)*4))}}
O.i3.prototype={
$2:function(a,b){return J.dn(a.a,b.a)}}
O.i4.prototype={
$2:function(a,b){if(typeof b!=="number")return b.p()
return this.b.push(new A.dJ(a,C.c.a1(b+3,4)*4))}}
O.i5.prototype={
$2:function(a,b){return J.dn(a.a,b.a)}}
O.i6.prototype={
$2:function(a,b){if(typeof b!=="number")return b.p()
return this.b.push(new A.en(a,C.c.a1(b+3,4)*4))}}
O.i7.prototype={
$2:function(a,b){return J.dn(a.a,b.a)}}
O.i8.prototype={
$2:function(a,b){if(typeof b!=="number")return b.p()
return this.b.push(new A.ez(a,C.c.a1(b+3,4)*4))}}
O.i9.prototype={
$2:function(a,b){return J.dn(a.a,b.a)}}
O.hX.prototype={
au:function(){var s,r=this
r.cB()
s=r.f
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.C(r.b,s,1)
s.b=!0
r.a.Z(s)}}}
O.cy.prototype={
Z:function(a){return this.a.Z(a)},
bN:function(){return this.Z(null)},
au:function(){},
d2:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gv().K(0,r.gaM())
s=r.d
r.d=a
if(a!=null)a.gv().m(0,r.gaM())
q=new D.C(r.b+".texture2D",s,r.d)
q.b=!0
r.a.Z(q)}},
d3:function(a){var s,r=this,q=r.e
if(q!=a){if(q!=null)q.gv().K(0,r.gaM())
s=r.e
r.e=a
if(a!=null)a.gv().m(0,r.gaM())
q=new D.C(r.b+".textureCube",s,r.e)
q.b=!0
r.a.Z(q)}},
bi:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(s.a||s.b||s.c)r=!(a.a||a.b||a.c)
else r=!0
q.c=a
if(r)q.au()
s=q.a
s.a=null
s.Z(null)}},
se8:function(a){var s=this,r=s.c
if(!r.b){s.bi(new A.Z(r.a,!0,!1))
s.d3(null)}s.d2(a)},
sba:function(a){var s=this,r=s.c
if(!r.c){s.bi(new A.Z(r.a,!1,!0))
s.d2(null)}s.d3(a)}}
O.hY.prototype={}
O.aI.prototype={
d0:function(a){var s,r,q=this
if(!q.f.q(0,a)){s=q.f
q.f=a
r=new D.C(q.b+".color",s,a)
r.b=!0
q.a.Z(r)}},
au:function(){this.cB()
this.d0(new V.Q(1,1,1))},
saw:function(a,b){var s=this.c
this.bi(new A.Z(!0,s.b,s.c))
this.d0(b)}}
O.i_.prototype={}
O.i0.prototype={
au:function(){var s,r=this
r.cC()
s=r.ch
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.C(r.b+".refraction",s,1)
s.b=!0
r.a.Z(s)}}}
O.i1.prototype={
d1:function(a){var s=this,r=s.ch
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.C(s.b+".shininess",r,a)
r.b=!0
s.a.Z(r)}},
au:function(){this.cC()
this.d1(100)}}
O.eH.prototype={}
T.eK.prototype={}
T.iB.prototype={}
T.iC.prototype={
saU:function(a,b){this.a=b},
gv:function(){var s=this.y
return s==null?this.y=D.I():s},
aP:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}},
bu:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(3553,null)}}}
T.iD.prototype={
saU:function(a,b){this.a=b},
gv:function(){var s=this.e
return s==null?this.e=D.I():s},
aP:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
bu:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.iE.prototype={
hN:function(a,b,c){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,10497)
p.texParameteri(q,10243,10497)
p.texParameteri(q,10241,9987)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=W.la(a)
r=new T.iC()
r.a=0
r.b=o
r.d=r.c=!1
W.W(s,"load",new T.iG(this,r,s,!1,o,!1,!0),!1)
return r},
aL:function(a,b,c,d,e,f){var s=W.la(c);++this.d
W.W(s,"load",new T.iF(this,s,!1,b,!1,d,a),!1)},
d_:function(a,b,c){var s,r,q,p
b=V.kW(b)
s=V.kW(a.width)
r=V.kW(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.kh()
q.width=s
q.height=r
p=C.k.ed(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.po(p.getImageData(0,0,q.width,q.height))}}}
T.iG.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.d_(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,q.f?1:0)
C.C.e7(o,p,0,6408,6408,5121,r)
if(q.r)o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.dm()}++s.e}}
T.iF.prototype={
$1:function(a){var s=this,r=s.a,q=r.d_(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.C.e7(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.dm()}++r.e}}
X.kg.prototype={}
X.hK.prototype={
gv:function(){var s=this.x
return s==null?this.x=D.I():s}}
X.eg.prototype={
gv:function(){var s=this.f
return s==null?this.f=D.I():s},
aJ:function(a){var s=this.f
if(s!=null)s.C(a)},
eE:function(){return this.aJ(null)},
saB:function(a){var s,r,q=this
if(!J.E(q.b,a)){s=q.b
if(s!=null)s.gv().K(0,q.gcJ())
r=q.b
q.b=a
if(a!=null)a.gv().m(0,q.gcJ())
s=new D.C("mover",r,q.b)
s.b=!0
q.aJ(s)}}}
X.iz.prototype={}
V.hm.prototype={
hd:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if(j.c==null)return
s=j.d.length
r=P.kw().gbs().h(0,j.a)
if(r==null||r.length<=s){q=!0
p=!1}else{if(s>=r.length)return H.b(r,s)
p=r[s]==="1"
q=!1}c.$1(p)
o=document
n=o.createElement("label")
m=n.style
m.whiteSpace="nowrap"
J.kd(j.c).m(0,n)
l=W.n8("checkbox")
l.checked=p
W.W(l,"change",new V.hn(j,c,l,s),!1)
n.children
n.appendChild(l)
k=o.createElement("span")
k.textContent=b
n.children
n.appendChild(k)
J.kd(j.c).m(0,o.createElement("br"))
j.d.push(l)
if(q)j.d8(s,p)},
d8:function(a,b){var s,r,q,p,o,n=this.a,m=P.kw().gbs().h(0,n)
if(m==null)m=""
s=m.length
if(s<a)m=C.a.hY(m,a-s+1,"0")
r=a>0?C.a.t(m,0,a):""
r+=b?"1":"0"
s=a+1
if(s<m.length)r+=C.a.a9(m,s)
q=P.kw()
s=t.X
p=P.ng(q.gbs(),s,s)
p.l(0,n,r)
o=q.e5(0,p)
n=window.history
s=o.gbV()
n.toString
n.replaceState(new P.jy([],[]).bv(""),"",s)}}
V.hn.prototype={
$1:function(a){var s=this,r=s.c
s.b.$1(r.checked)
s.a.d8(s.d,r.checked)}}
V.k6.prototype={
$1:function(a){var s=C.d.e9(this.a.ghI(),2)
if(s!=="0.00")P.kX(s+" fps")}}
V.it.prototype={
er:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.W(o,"scroll",new V.iv(m),!1)},
da:function(a){var s,r,q,p,o,n,m,l
this.h2()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hL(a)
q.toString
p=new H.O(p)
p=new P.c0(q.ea(new H.bM(p,p.gk(p))).a())
for(;p.A();){q=p.gF(p)
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
if(H.mp(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.b(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kK(C.W,q,C.h,!1)
m=s.createElement("a")
m.className="linkPar"
m.href="#"+H.h(l)
m.textContent=q
r.appendChild(m)}break
case"Other":o=s.createElement("div")
o.className="normalPar"
o.textContent=q.b
r.appendChild(o)
break}}this.a.appendChild(r)},
he:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
h2:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=new L.iJ()
s.a=new H.z(t.eF)
s.b=new H.z(t.w)
s.c=P.lf(t.X)
s.d=s.N(0,o)
r=s.N(0,o).u(0,n)
q=K.a1(new H.O("*"))
r.a.push(q)
r.c=!0
r=s.N(0,n).u(0,n)
q=new K.b0()
p=t.L
q.a=H.d([],p)
r.a.push(q)
r=K.a1(new H.O("*"))
q.a.push(r)
r=s.N(0,n).u(0,"BoldEnd")
q=K.a1(new H.O("*"))
r.a.push(q)
r.c=!0
r=s.N(0,o).u(0,m)
q=K.a1(new H.O("_"))
r.a.push(q)
r.c=!0
r=s.N(0,m).u(0,m)
q=new K.b0()
q.a=H.d([],p)
r.a.push(q)
r=K.a1(new H.O("_"))
q.a.push(r)
r=s.N(0,m).u(0,l)
q=K.a1(new H.O("_"))
r.a.push(q)
r.c=!0
r=s.N(0,o).u(0,k)
q=K.a1(new H.O("`"))
r.a.push(q)
r.c=!0
r=s.N(0,k).u(0,k)
q=new K.b0()
q.a=H.d([],p)
r.a.push(q)
r=K.a1(new H.O("`"))
q.a.push(r)
r=s.N(0,k).u(0,"CodeEnd")
q=K.a1(new H.O("`"))
r.a.push(q)
r.c=!0
r=s.N(0,o).u(0,j)
q=K.a1(new H.O("["))
r.a.push(q)
r.c=!0
r=s.N(0,j).u(0,i)
q=K.a1(new H.O("|"))
r.a.push(q)
q=s.N(0,j).u(0,h)
r=K.a1(new H.O("]"))
q.a.push(r)
q.c=!0
q=s.N(0,j).u(0,j)
r=new K.b0()
r.a=H.d([],p)
q.a.push(r)
q=K.a1(new H.O("|]"))
r.a.push(q)
q=s.N(0,i).u(0,h)
r=K.a1(new H.O("]"))
q.a.push(r)
q.c=!0
q=s.N(0,i).u(0,i)
r=new K.b0()
r.a=H.d([],p)
q.a.push(r)
q=K.a1(new H.O("|]"))
r.a.push(q)
s.N(0,o).u(0,g).a.push(new K.hd())
q=s.N(0,g).u(0,g)
r=new K.b0()
r.a=H.d([],p)
q.a.push(r)
q=K.a1(new H.O("*_`["))
r.a.push(q)
q=s.N(0,"BoldEnd")
q.d=q.a.bb(n)
q=s.N(0,l)
q.d=q.a.bb(m)
q=s.N(0,"CodeEnd")
q.d=q.a.bb(k)
q=s.N(0,h)
q.d=q.a.bb("Link")
q=s.N(0,g)
q.d=q.a.bb(g)
this.b=s}}
V.iv.prototype={
$1:function(a){P.lF(C.o,new V.iu(this.a))}}
V.iu.prototype={
$0:function(){var s=C.d.ak(document.documentElement.scrollTop),r=this.a.style,q=H.h(-0.01*s)+"px"
r.top=q}}
Q.cb.prototype={}
Q.dD.prototype={
c0:function(){var s=this
C.b.sk(s.e,0)
C.b.sk(s.f,0)
C.b.sk(s.r,0)
C.b.sk(s.x,0)
C.b.sk(s.y,0)
C.b.sk(s.z,0)},
hl:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this
a0.c0()
s=a0.b.length
r=H.d([],t.gf)
q=H.d([],t.cz)
for(p=Math.abs(1),o=a1,n=0;n<s;++n){m=a0.d
if(n>=m.length)return H.b(m,n)
if(m[n]<=0)continue
m=a0.b
if(n>=m.length)return H.b(m,n)
l=m[n]
k=l.fy.a
j=new V.cH(k.d,k.x,k.ch,p)
m=l.id
i=m.a
if(typeof i!=="number")return i.j()
h=m.b
if(typeof h!=="number")return h.j()
m=m.c
if(typeof m!=="number")return m.j()
g=new V.v(i*a1,h*a1,m*a1)
r.push(j)
q.push(g)
if(l.k1){f=Y.pG(j,a0.c,g)
if(f.a===C.f){m=a0.d
if(n>=m.length)return H.b(m,n)
m[n]=m[n]-1
e=f.b*a1
$.A().toString
if(e-1e-9<o){if(!(Math.abs(e-o)<1e-9)){a0.c0()
o=e}a0.e.push(f)
a0.f.push(l)
if(!C.b.J(a0.z,n))a0.z.push(n)}}}for(d=n-1;d>=0;--d){m=a0.b
if(d>=m.length)return H.b(m,d)
c=m[d]
if(l.k1||c.k1){if(d>=r.length)return H.b(r,d)
b=r[d]
if(d>=q.length)return H.b(q,d)
a=Y.pK(j,b,g,q[d])
if(a.a===C.f){m=a0.d
i=m.length
if(n>=i)return H.b(m,n)
m[n]=m[n]-1
if(d>=i)return H.b(m,d)
m[d]=m[d]-1
e=a.b*a1
$.A().toString
if(e-1e-9<o){if(!(Math.abs(e-o)<1e-9)){a0.c0()
o=e}a0.r.push(a)
a0.x.push(l)
a0.y.push(c)
if(!C.b.J(a0.z,n))a0.z.push(n)
if(!C.b.J(a0.z,d))a0.z.push(d)}}}}}return o},
ik:function(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.c,a5=new V.v(a4.a,a4.b,a4.c).I()
for(s=a3.e.length-1;s>=0;--s){a4=a3.e
if(s>=a4.length)return H.b(a4,s)
r=a4[s]
a4=a3.f
if(s>=a4.length)return H.b(a4,s)
q=a4[s]
a4=q.id
p=a5.a
o=a4.a
if(typeof p!=="number")return p.j()
if(typeof o!=="number")return H.e(o)
n=a5.b
m=a4.b
if(typeof n!=="number")return n.j()
if(typeof m!=="number")return H.e(m)
l=a5.c
a4=a4.c
if(typeof l!=="number")return l.j()
if(typeof a4!=="number")return H.e(a4)
k=p*o+n*m+l*a4
p*=k
n*=k
l*=k
p=(o-p-p)*0.8
n=(m-n-n)*0.8
l=(a4-l-l)*0.8
q.go=r.r
j=Math.sqrt(p*p+n*n+l*l)
$.A().toString
if(0.01<j){q.id=new V.v(p,n,l)
q.k1=!0}else{a4=$.by
q.id=a4==null?$.by=new V.v(0,0,0):a4
q.k1=!1}}for(s=a3.r.length-1;s>=0;--s){a4=a3.r
if(s>=a4.length)return H.b(a4,s)
r=a4[s]
a4=a3.x
if(s>=a4.length)return H.b(a4,s)
i=a4[s]
a4=a3.y
if(s>=a4.length)return H.b(a4,s)
h=a4[s]
a4=r.r
p=r.x
a4.toString
o=p.a
n=a4.a
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.e(n)
n=o-n
o=p.b
m=a4.b
if(typeof o!=="number")return o.n()
if(typeof m!=="number")return H.e(m)
m=o-m
o=p.c
l=a4.c
if(typeof o!=="number")return o.n()
if(typeof l!=="number")return H.e(l)
l=o-l
o=i.id
g=o.a
if(typeof g!=="number")return H.e(g)
f=o.b
if(typeof f!=="number")return H.e(f)
o=o.c
if(typeof o!=="number")return H.e(o)
e=n*g+m*f+l*o
d=h.id
c=d.a
if(typeof c!=="number")return H.e(c)
b=d.b
if(typeof b!=="number")return H.e(b)
d=d.c
if(typeof d!=="number")return H.e(d)
a=n*c+m*b+l*d
a0=a5.a
if(typeof a0!=="number")return a0.j()
a1=a5.b
if(typeof a1!=="number")return a1.j()
a2=a5.c
if(typeof a2!=="number")return a2.j()
g=(g-a0*e+n*a)*0.8
f=(f-a1*e+m*a)*0.8
o=(o-a2*e+l*a)*0.8
n=(c-a0*a+n*e)*0.8
m=(b-a1*a+m*e)*0.8
l=(d-a2*a+l*e)*0.8
i.go=a4
j=Math.sqrt(g*g+f*f+o*o)
$.A().toString
if(0.01<j){i.id=new V.v(g,f,o)
i.k1=!0}else{a4=$.by
i.id=a4==null?$.by=new V.v(0,0,0):a4
i.k1=!1}h.go=p
j=Math.sqrt(n*n+m*m+l*l)
$.A().toString
if(0.01<j){h.id=new V.v(n,m,l)
h.k1=!0}else{a4=$.by
h.id=a4==null?$.by=new V.v(0,0,0):a4
h.k1=!1}}for(s=a3.b.length-1;s>=0;--s){a4=a3.d
if(s>=a4.length)return H.b(a4,s)
if(a4[s]<=0)continue
a4=a3.b
if(s>=a4.length)return H.b(a4,s)
q=a4[s]
if(!C.b.J(a3.z,s)){a4=q.go
p=q.id
o=p.a
if(typeof o!=="number")return o.j()
n=p.b
if(typeof n!=="number")return n.j()
p=p.c
if(typeof p!=="number")return p.j()
m=a4.a
if(typeof m!=="number")return m.p()
l=a4.b
if(typeof l!=="number")return l.p()
a4=a4.c
if(typeof a4!=="number")return a4.p()
q.go=new V.N(m+o*a6,l+n*a6,a4+p*a6)}if(q.k1){a4=q.id
p=$.ke
o=p.a
if(typeof o!=="number")return o.j()
n=p.b
if(typeof n!=="number")return n.j()
p=p.c
if(typeof p!=="number")return p.j()
m=a4.a
if(typeof m!=="number")return m.p()
l=a4.b
if(typeof l!=="number")return l.p()
a4=a4.c
if(typeof a4!=="number")return a4.p()
q.id=new V.v(m+o*a6,l+n*a6,a4+p*a6)}a4=q.id
p=a4.a
if(typeof p!=="number")return p.j()
o=a4.b
if(typeof o!=="number")return o.j()
a4=a4.c
if(typeof a4!=="number")return a4.j()
if(Math.sqrt(p*p+o*o+a4*a4)>10){a4=q.id.I()
p=a4.a
if(typeof p!=="number")return p.j()
o=a4.b
if(typeof o!=="number")return o.j()
a4=a4.c
if(typeof a4!=="number")return a4.j()
q.id=new V.v(p*10,o*10,a4*10)}a4=q.fy
p=q.go
a4.sY(0,new V.aJ(1,0,0,p.a,0,1,0,p.b,0,0,1,p.c,0,0,0,1))}},
aD:function(a,b,c){var s,r,q=this,p=b.y
C.b.sk(q.d,0)
for(s=0;s<q.b.length;++s)q.d.push(20)
while(!0){$.A().toString
if(!(0<p))break
r=q.hl(p)
q.ik(r)
p-=r}return V.bN()},
gv:function(){var s=this.a
return s==null?this.a=D.I():s}}
Q.k2.prototype={
$1:function(a){var s,r=this.a,q=V.lh(-this.b.c.d)
if(!J.E(r.z,q)){s=r.z
r.z=q
r.Q=q.bo(0)
q=new D.C("velocityRotation",s,r.z)
q.b=!0
r.O(q)}}}
Q.k3.prototype={
$1:function(a){var s,r,q=this,p=null
if(t.dT.a(a).c.a===32){s=new Q.cb()
s.cD(p,!0,p,"",p,p)
if($.ke==null)$.ke=new V.v(0,-9.8,0)
r=$.l0
s.sby(0,r==null?$.l0=F.pF(5,1,5):r)
r=U.hp(p)
s.fy=r
s.saB(r)
s.go=V.kt()
s.id=V.bY()
s.k1=!0
r=q.a
s.go=r.ga_(r)
s.id=V.lh(-q.b.c.d).ar(new V.v(0,0,-10))
q.c.y.m(0,s)
q.d.b.push(s)}}}
Q.k4.prototype={
$1:function(a){this.a.x.r=a}};(function aliases(){var s=J.a.prototype
s.ek=s.i
s=J.aX.prototype
s.el=s.i
s=K.dR.prototype
s.ej=s.aW
s.cA=s.i
s=Y.dx.prototype
s.cz=s.i
s=O.cy.prototype
s.cB=s.au
s=O.aI.prototype
s.cC=s.au})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"oC","nc",22)
r(P,"ph","nP",7)
r(P,"pi","nQ",7)
r(P,"pj","nR",7)
q(P,"mg","pc",8)
r(W,"qS","hz",23)
var k
p(k=E.aD.prototype,"gdY",0,0,null,["$1","$0"],["dZ","hW"],0,0)
p(k,"ge_",0,0,null,["$1","$0"],["e0","hX"],0,0)
p(k,"gdW",0,0,null,["$1","$0"],["dX","hV"],0,0)
p(k,"gdU",0,0,null,["$1","$0"],["dV","hS"],0,0)
o(k,"ghQ","hR",4)
o(k,"ghT","hU",4)
p(k=E.eL.prototype,"gcF",0,0,null,["$1","$0"],["cH","cG"],0,0)
n(k,"gib","e6",8)
m(k=X.cq.prototype,"gev","ew",19)
o(k,"ges","eu",9)
o(k,"gex","ey",9)
m(k,"gbz","bA",1)
m(k,"gbO","bP",1)
m(k=X.f3.prototype,"gfn","fo",5)
m(k,"gfb","fc",5)
m(k,"gfh","fi",2)
m(k,"gbO","bP",10)
m(k,"gbz","bA",10)
m(k,"gfu","fv",2)
m(k,"gfA","fB",2)
m(k,"gfl","fm",2)
m(k,"gfw","fz",2)
m(k,"gfj","fk",2)
m(k,"gfC","fD",20)
m(k,"gfE","fF",5)
m(k,"gfQ","fR",6)
m(k,"gfM","fN",6)
m(k,"gfO","fP",6)
p(D.bm.prototype,"gez",0,0,null,["$1","$0"],["as","eA"],0,0)
p(k=D.cs.prototype,"gcV",0,0,null,["$1","$0"],["cW","fs"],0,0)
m(k,"gfG","fH",21)
o(k,"gf5","f6",11)
o(k,"gfK","fL",11)
l(V.am.prototype,"gk","cg",12)
l(V.v.prototype,"gk","cg",12)
p(k=U.bI.prototype,"gaG",0,0,null,["$1","$0"],["O","aa"],0,0)
o(k,"gf3","f4",13)
o(k,"gfI","fJ",13)
p(k=U.cR.prototype,"gaG",0,0,null,["$1","$0"],["O","aa"],0,0)
m(k,"geY","eZ",1)
m(k,"gf_","f0",1)
m(k,"gf1","f2",1)
m(k,"geU","eV",1)
m(k,"geW","eX",1)
m(k,"gh9","ha",1)
m(k,"gh7","h8",1)
m(k,"gh5","h6",1)
p(k=U.cS.prototype,"gaG",0,0,null,["$1","$0"],["O","aa"],0,0)
m(k,"gfp","fq",1)
p(k=M.dL.prototype,"gaH",0,0,null,["$1","$0"],["aI","eB"],0,0)
o(k,"gfd","fe",4)
o(k,"gff","fg",4)
p(k=O.e2.prototype,"gaM",0,0,null,["$1","$0"],["Z","bN"],0,0)
p(k,"gfX",0,0,null,["$1","$0"],["cY","fY"],0,0)
o(k,"gf7","f8",14)
o(k,"gf9","fa",14)
p(O.cy.prototype,"gaM",0,0,null,["$1","$0"],["Z","bN"],0,0)
p(X.eg.prototype,"gcJ",0,0,null,["$1","$0"],["aJ","eE"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.L,null)
q(P.L,[H.ko,J.a,J.a2,P.J,P.cX,P.i,H.bM,P.dT,H.ck,H.f0,H.ce,H.iM,H.ig,H.fN,H.bE,P.at,H.hQ,H.e_,H.dV,H.ai,H.fp,P.d8,P.c_,P.c0,P.f8,P.cJ,P.eE,P.cK,P.jH,P.d2,P.jt,P.cW,P.j,P.h_,P.cx,P.dC,P.jG,P.jF,P.ap,P.ab,P.P,P.bn,P.ef,P.cI,P.fm,P.hJ,P.o,P.G,P.ah,P.B,P.V,P.bz,P.iX,P.fH,W.hr,W.dB,W.kk,W.kz,W.K,W.cl,P.jx,P.da,P.fF,P.b4,K.hd,K.dR,K.hW,K.io,L.eB,L.eM,L.eN,L.iJ,O.a3,O.cz,Y.bV,Y.dx,E.hk,E.aD,E.bD,E.bS,E.fj,E.ii,E.eL,Z.f6,Z.jl,Z.dz,Z.bK,Z.aR,D.hl,D.bG,D.R,X.dA,X.a7,X.hO,X.hU,X.bt,X.id,X.iK,X.f3,D.dv,D.bm,D.S,D.el,D.ey,V.Q,V.bl,V.hC,V.aZ,V.aJ,V.ei,V.aw,V.N,V.cE,V.eq,V.cH,V.am,V.v,U.cR,U.cS,M.dL,A.ds,A.hf,A.Z,A.dw,A.dJ,A.en,A.ez,A.hZ,A.cM,A.cN,A.cP,A.cQ,A.eR,A.iU,F.dM,F.hG,F.dZ,F.hP,F.ek,F.ip,F.iq,F.ir,F.is,F.f4,F.ja,F.jb,F.je,F.jg,F.jh,F.ji,O.eH,O.cy,O.i_,T.iE,X.kg,X.iz,X.eg,V.hm,V.it])
q(J.a,[J.dU,J.cp,J.aX,J.u,J.bq,J.aG,H.cA,H.U,W.f,W.hc,W.bj,W.aC,W.H,W.fd,W.ag,W.hu,W.hv,W.ff,W.ci,W.fh,W.hw,W.k,W.fn,W.ar,W.hL,W.fr,W.bp,W.hT,W.ia,W.fv,W.fw,W.au,W.fx,W.fz,W.av,W.fD,W.fG,W.ax,W.fI,W.ay,W.fO,W.ak,W.fS,W.iI,W.az,W.fU,W.iL,W.j1,W.h0,W.h2,W.h4,W.h6,W.h8,P.aH,P.ft,P.aK,P.fB,P.ih,P.fP,P.aN,P.fW,P.hg,P.f9,P.er,P.fL])
q(J.aX,[J.eh,J.bx,J.as])
r(J.hM,J.u)
q(J.bq,[J.co,J.cn])
q(P.J,[H.dX,H.eb,H.dW,H.f_,H.et,H.fk,P.dr,P.ec,P.af,P.f1,P.eZ,P.eC,P.dF,P.dH])
r(P.cu,P.cX)
q(P.cu,[H.bW,W.fb,W.fa,P.dP])
r(H.O,H.bW)
q(P.i,[H.m,H.bs,H.cT,P.cm])
r(H.cj,H.bs)
q(P.dT,[H.e0,H.f7])
r(H.cf,H.ce)
q(H.bE,[H.iA,H.hN,H.jX,H.jY,H.jZ,P.jn,P.jm,P.jo,P.jp,P.jC,P.jB,P.jQ,P.jv,P.jw,P.hR,P.hV,P.j4,P.j5,P.hx,P.hy,P.j0,P.iY,P.iZ,P.j_,P.jE,P.jD,P.jL,P.jK,P.jM,P.jN,W.ib,W.ic,W.im,W.iy,W.jq,P.jz,P.jA,P.jR,P.hH,P.hI,P.hh,E.ij,E.ik,E.il,E.iH,D.hE,D.hF,F.jI,F.k7,F.k8,F.jU,F.jV,F.jk,F.jj,F.jc,F.jd,O.i2,O.i3,O.i4,O.i5,O.i6,O.i7,O.i8,O.i9,T.iG,T.iF,V.hn,V.k6,V.iv,V.iu,Q.k2,Q.k3,Q.k4])
q(H.iA,[H.ix,H.cc])
r(P.cw,P.at)
r(H.z,P.cw)
r(H.ct,H.m)
r(H.bQ,H.U)
q(H.bQ,[H.cZ,H.d0])
r(H.d_,H.cZ)
r(H.bu,H.d_)
r(H.d1,H.d0)
r(H.cB,H.d1)
q(H.cB,[H.e6,H.e7,H.e8,H.e9,H.ea,H.cC,H.bR])
r(H.d9,H.fk)
r(P.d5,P.cm)
r(P.ju,P.jH)
r(P.cV,P.d2)
r(P.dd,P.cx)
r(P.bX,P.dd)
q(P.dC,[P.hi,P.hA])
r(P.dG,P.eE)
q(P.dG,[P.hj,P.j6,P.j3])
r(P.j2,P.hA)
q(P.P,[P.Y,P.l])
q(P.af,[P.bU,P.dS])
r(P.fe,P.bz)
q(W.f,[W.w,W.dO,W.bO,W.aj,W.d3,W.al,W.a8,W.d6,W.f5,W.bZ,P.du,P.aW])
q(W.w,[W.F,W.aq])
q(W.F,[W.p,P.n])
q(W.p,[W.dp,W.dq,W.bk,W.dQ,W.bJ,W.bL,W.eu,W.b3])
r(W.hq,W.aC)
r(W.cg,W.fd)
q(W.ag,[W.hs,W.ht])
r(W.fg,W.ff)
r(W.ch,W.fg)
r(W.fi,W.fh)
r(W.dK,W.fi)
r(W.ac,W.bj)
r(W.fo,W.fn)
r(W.bH,W.fo)
r(W.fs,W.fr)
r(W.bo,W.fs)
r(W.aQ,W.k)
q(W.aQ,[W.br,W.ad,W.bw])
r(W.e3,W.fv)
r(W.e4,W.fw)
r(W.fy,W.fx)
r(W.e5,W.fy)
r(W.fA,W.fz)
r(W.cD,W.fA)
r(W.fE,W.fD)
r(W.ej,W.fE)
r(W.es,W.fG)
r(W.d4,W.d3)
r(W.ew,W.d4)
r(W.fJ,W.fI)
r(W.ex,W.fJ)
r(W.eD,W.fO)
r(W.fT,W.fS)
r(W.eI,W.fT)
r(W.d7,W.d6)
r(W.eJ,W.d7)
r(W.fV,W.fU)
r(W.eO,W.fV)
r(W.b5,W.ad)
r(W.h1,W.h0)
r(W.fc,W.h1)
r(W.cU,W.ci)
r(W.h3,W.h2)
r(W.fq,W.h3)
r(W.h5,W.h4)
r(W.cY,W.h5)
r(W.h7,W.h6)
r(W.fK,W.h7)
r(W.h9,W.h8)
r(W.fR,W.h9)
r(W.fl,P.cJ)
r(P.jy,P.jx)
r(P.a4,P.fF)
r(P.fu,P.ft)
r(P.dY,P.fu)
r(P.fC,P.fB)
r(P.ed,P.fC)
r(P.fQ,P.fP)
r(P.eF,P.fQ)
r(P.fX,P.fW)
r(P.eP,P.fX)
r(P.dt,P.f9)
r(P.ee,P.aW)
r(P.fM,P.fL)
r(P.eA,P.fM)
q(K.dR,[K.b0,L.eQ])
q(Y.dx,[Y.b2,Y.aO])
q(E.hk,[Z.dy,A.cG,T.eK])
q(D.R,[D.aE,D.aF,D.C,X.aY,X.em])
q(O.a3,[X.cq,D.cs,U.bI])
q(X.em,[X.cv,X.bP,X.cL])
q(D.hl,[U.ho,U.T])
q(U.T,[U.cd,Q.dD])
r(A.e1,A.cG)
q(A.eR,[A.eT,A.iR,A.iS,A.iT,A.iP,A.eS,A.iQ,A.eU,A.eV,A.iV,A.eW,A.cO,A.eX,A.eY])
r(F.iw,F.hG)
r(F.iO,F.hP)
r(F.jf,F.jg)
r(F.ie,F.jh)
r(O.e2,O.eH)
q(O.cy,[O.hX,O.hY,O.aI])
q(O.aI,[O.i0,O.i1])
q(T.eK,[T.iB,T.iD])
r(T.iC,T.iB)
r(X.hK,X.iz)
r(Q.cb,E.aD)
s(H.bW,H.f0)
s(H.cZ,P.j)
s(H.d_,H.ck)
s(H.d0,P.j)
s(H.d1,H.ck)
s(P.cX,P.j)
s(P.dd,P.h_)
s(W.fd,W.hr)
s(W.ff,P.j)
s(W.fg,W.K)
s(W.fh,P.j)
s(W.fi,W.K)
s(W.fn,P.j)
s(W.fo,W.K)
s(W.fr,P.j)
s(W.fs,W.K)
s(W.fv,P.at)
s(W.fw,P.at)
s(W.fx,P.j)
s(W.fy,W.K)
s(W.fz,P.j)
s(W.fA,W.K)
s(W.fD,P.j)
s(W.fE,W.K)
s(W.fG,P.at)
s(W.d3,P.j)
s(W.d4,W.K)
s(W.fI,P.j)
s(W.fJ,W.K)
s(W.fO,P.at)
s(W.fS,P.j)
s(W.fT,W.K)
s(W.d6,P.j)
s(W.d7,W.K)
s(W.fU,P.j)
s(W.fV,W.K)
s(W.h0,P.j)
s(W.h1,W.K)
s(W.h2,P.j)
s(W.h3,W.K)
s(W.h4,P.j)
s(W.h5,W.K)
s(W.h6,P.j)
s(W.h7,W.K)
s(W.h8,P.j)
s(W.h9,W.K)
s(P.ft,P.j)
s(P.fu,W.K)
s(P.fB,P.j)
s(P.fC,W.K)
s(P.fP,P.j)
s(P.fQ,W.K)
s(P.fW,P.j)
s(P.fX,W.K)
s(P.f9,P.at)
s(P.fL,P.j)
s(P.fM,W.K)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",Y:"double",P:"num",B:"String",ap:"bool",ah:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([R*])","~(R*)","~(ad*)","ah(@,@)","~(l*,i<aD*>*)","~(k*)","~(bw*)","~(~())","~()","~(l*,i<a7*>*)","~(br*)","~(l*,i<S*>*)","Y*()","~(l*,i<T*>*)","~(l*,i<aJ*>*)","@(@)","ah(@)","ah(L?,L?)","b4(@,@)","ap*(i<a7*>*)","~(b5*)","ap*(i<S*>*)","l(@,@)","B(f)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.o9(v.typeUniverse,JSON.parse('{"as":"aX","eh":"aX","bx":"aX","pN":"k","pX":"k","pP":"aW","pO":"f","q4":"f","q6":"f","pM":"n","pZ":"n","pQ":"p","q1":"p","q_":"w","pW":"w","qw":"a8","pU":"aQ","pR":"aq","q7":"aq","q5":"ad","q0":"bo","q3":"bu","q2":"U","dU":{"ap":[]},"aX":{"lc":[]},"u":{"o":["1"],"m":["1"],"i":["1"]},"hM":{"u":["1"],"o":["1"],"m":["1"],"i":["1"]},"bq":{"Y":[],"P":[]},"co":{"Y":[],"l":[],"P":[]},"cn":{"Y":[],"P":[]},"aG":{"B":[]},"dX":{"J":[]},"O":{"j":["l"],"o":["l"],"m":["l"],"i":["l"],"j.E":"l"},"m":{"i":["1"]},"bs":{"i":["2"]},"cj":{"m":["2"],"i":["2"]},"cT":{"i":["1"]},"bW":{"j":["1"],"o":["1"],"m":["1"],"i":["1"]},"ce":{"G":["1","2"]},"cf":{"G":["1","2"]},"eb":{"J":[]},"dW":{"J":[]},"f_":{"J":[]},"et":{"J":[]},"z":{"G":["1","2"]},"ct":{"m":["1"],"i":["1"]},"dV":{"lx":[]},"bQ":{"x":["1"],"U":[]},"bu":{"j":["Y"],"x":["Y"],"o":["Y"],"U":[],"m":["Y"],"i":["Y"],"j.E":"Y"},"cB":{"j":["l"],"x":["l"],"o":["l"],"U":[],"m":["l"],"i":["l"]},"e6":{"j":["l"],"x":["l"],"o":["l"],"U":[],"m":["l"],"i":["l"],"j.E":"l"},"e7":{"j":["l"],"x":["l"],"o":["l"],"U":[],"m":["l"],"i":["l"],"j.E":"l"},"e8":{"j":["l"],"x":["l"],"o":["l"],"U":[],"m":["l"],"i":["l"],"j.E":"l"},"e9":{"j":["l"],"x":["l"],"o":["l"],"U":[],"m":["l"],"i":["l"],"j.E":"l"},"ea":{"j":["l"],"x":["l"],"o":["l"],"U":[],"m":["l"],"i":["l"],"j.E":"l"},"cC":{"j":["l"],"x":["l"],"o":["l"],"U":[],"m":["l"],"i":["l"],"j.E":"l"},"bR":{"j":["l"],"b4":[],"x":["l"],"o":["l"],"U":[],"m":["l"],"i":["l"],"j.E":"l"},"fk":{"J":[]},"d9":{"J":[]},"d8":{"cK":[]},"d5":{"i":["1"]},"cV":{"m":["1"],"i":["1"]},"cm":{"i":["1"]},"cu":{"j":["1"],"o":["1"],"m":["1"],"i":["1"]},"cw":{"G":["1","2"]},"at":{"G":["1","2"]},"cx":{"G":["1","2"]},"bX":{"G":["1","2"]},"d2":{"m":["1"],"i":["1"]},"Y":{"P":[]},"dr":{"J":[]},"ec":{"J":[]},"af":{"J":[]},"bU":{"J":[]},"dS":{"J":[]},"f1":{"J":[]},"eZ":{"J":[]},"eC":{"J":[]},"dF":{"J":[]},"ef":{"J":[]},"cI":{"J":[]},"dH":{"J":[]},"l":{"P":[]},"o":{"m":["1"],"i":["1"]},"bz":{"f2":[]},"fH":{"f2":[]},"fe":{"f2":[]},"p":{"F":[],"w":[],"f":[]},"dp":{"F":[],"w":[],"f":[]},"dq":{"F":[],"w":[],"f":[]},"bk":{"F":[],"w":[],"f":[]},"aq":{"w":[],"f":[]},"ch":{"j":["a4<P>"],"o":["a4<P>"],"x":["a4<P>"],"m":["a4<P>"],"i":["a4<P>"],"j.E":"a4<P>"},"ci":{"a4":["P"]},"dK":{"j":["B"],"o":["B"],"x":["B"],"m":["B"],"i":["B"],"j.E":"B"},"fb":{"j":["F"],"o":["F"],"m":["F"],"i":["F"],"j.E":"F"},"F":{"w":[],"f":[]},"ac":{"bj":[]},"bH":{"j":["ac"],"o":["ac"],"x":["ac"],"m":["ac"],"i":["ac"],"j.E":"ac"},"dO":{"f":[]},"dQ":{"F":[],"w":[],"f":[]},"bo":{"j":["w"],"o":["w"],"x":["w"],"m":["w"],"i":["w"],"j.E":"w"},"bJ":{"F":[],"w":[],"f":[]},"bL":{"F":[],"w":[],"f":[]},"dB":{"F":[],"w":[],"f":[]},"br":{"k":[]},"bO":{"f":[]},"e3":{"G":["B","@"]},"e4":{"G":["B","@"]},"e5":{"j":["au"],"o":["au"],"x":["au"],"m":["au"],"i":["au"],"j.E":"au"},"ad":{"k":[]},"fa":{"j":["w"],"o":["w"],"m":["w"],"i":["w"],"j.E":"w"},"w":{"f":[]},"cD":{"j":["w"],"o":["w"],"x":["w"],"m":["w"],"i":["w"],"j.E":"w"},"ej":{"j":["av"],"o":["av"],"x":["av"],"m":["av"],"i":["av"],"j.E":"av"},"es":{"G":["B","@"]},"eu":{"F":[],"w":[],"f":[]},"aj":{"f":[]},"ew":{"j":["aj"],"o":["aj"],"x":["aj"],"f":[],"m":["aj"],"i":["aj"],"j.E":"aj"},"ex":{"j":["ax"],"o":["ax"],"x":["ax"],"m":["ax"],"i":["ax"],"j.E":"ax"},"eD":{"G":["B","B"]},"b3":{"F":[],"w":[],"f":[]},"al":{"f":[]},"a8":{"f":[]},"eI":{"j":["a8"],"o":["a8"],"x":["a8"],"m":["a8"],"i":["a8"],"j.E":"a8"},"eJ":{"j":["al"],"o":["al"],"x":["al"],"f":[],"m":["al"],"i":["al"],"j.E":"al"},"bw":{"k":[]},"eO":{"j":["az"],"o":["az"],"x":["az"],"m":["az"],"i":["az"],"j.E":"az"},"aQ":{"k":[]},"f5":{"f":[]},"b5":{"ad":[],"k":[]},"bZ":{"f":[]},"fc":{"j":["H"],"o":["H"],"x":["H"],"m":["H"],"i":["H"],"j.E":"H"},"cU":{"a4":["P"]},"fq":{"j":["ar?"],"o":["ar?"],"x":["ar?"],"m":["ar?"],"i":["ar?"],"j.E":"ar?"},"cY":{"j":["w"],"o":["w"],"x":["w"],"m":["w"],"i":["w"],"j.E":"w"},"fK":{"j":["ay"],"o":["ay"],"x":["ay"],"m":["ay"],"i":["ay"],"j.E":"ay"},"fR":{"j":["ak"],"o":["ak"],"x":["ak"],"m":["ak"],"i":["ak"],"j.E":"ak"},"da":{"bp":[]},"dP":{"j":["F"],"o":["F"],"m":["F"],"i":["F"],"j.E":"F"},"a4":{"fF":["1"]},"dY":{"j":["aH"],"o":["aH"],"m":["aH"],"i":["aH"],"j.E":"aH"},"ed":{"j":["aK"],"o":["aK"],"m":["aK"],"i":["aK"],"j.E":"aK"},"eF":{"j":["B"],"o":["B"],"m":["B"],"i":["B"],"j.E":"B"},"n":{"F":[],"w":[],"f":[]},"eP":{"j":["aN"],"o":["aN"],"m":["aN"],"i":["aN"],"j.E":"aN"},"b4":{"o":["l"],"m":["l"],"i":["l"]},"dt":{"G":["B","@"]},"du":{"f":[]},"aW":{"f":[]},"ee":{"f":[]},"eA":{"j":["G<@,@>"],"o":["G<@,@>"],"m":["G<@,@>"],"i":["G<@,@>"],"j.E":"G<@,@>"},"a3":{"i":["1*"],"a3.T":"1"},"aE":{"R":[]},"aF":{"R":[]},"C":{"R":[]},"aY":{"R":[]},"cq":{"a3":["a7*"],"i":["a7*"],"a3.T":"a7*"},"cv":{"R":[]},"bP":{"R":[]},"em":{"R":[]},"cL":{"R":[]},"dv":{"S":[]},"bm":{"S":[]},"cs":{"a3":["S*"],"i":["S*"],"a3.T":"S*"},"el":{"S":[]},"ey":{"S":[]},"cd":{"T":[]},"bI":{"a3":["T*"],"T":[],"i":["T*"],"a3.T":"T*"},"cR":{"T":[]},"cS":{"T":[]},"e1":{"cG":[]},"cb":{"aD":[]},"dD":{"T":[]}}'))
H.o8(v.typeUniverse,JSON.parse('{"a2":1,"m":1,"bM":1,"bs":2,"cj":2,"e0":2,"cT":1,"f7":1,"ck":1,"f0":1,"bW":1,"ce":2,"ct":1,"e_":1,"bQ":1,"c0":1,"d5":1,"cJ":1,"eE":2,"cW":1,"cm":1,"cu":1,"cw":2,"at":2,"h_":2,"cx":2,"d2":1,"cX":1,"dd":2,"dC":2,"dG":2,"i":1,"dT":1,"fl":1,"K":1,"cl":1,"aE":1,"aF":1,"C":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.kQ
return{F:s("bj"),Y:s("m<@>"),h:s("F"),C:s("J"),G:s("k"),v:s("ac"),bX:s("bH"),Z:s("pY"),u:s("bp"),fS:s("bJ"),gk:s("bL"),s:s("u<B>"),gn:s("u<@>"),t:s("u<l>"),x:s("u<ds*>"),bI:s("u<cb*>"),bb:s("u<dv*>"),am:s("u<dw*>"),g0:s("u<dy*>"),aM:s("u<dB*>"),cP:s("u<bm*>"),M:s("u<dJ*>"),b:s("u<dM*>"),aZ:s("u<bK*>"),B:s("u<dZ*>"),L:s("u<hW*>"),p:s("u<aJ*>"),dk:s("u<T*>"),eb:s("u<el*>"),cS:s("u<aw*>"),d1:s("u<en*>"),k:s("u<ek*>"),gf:s("u<cH*>"),D:s("u<b2*>"),du:s("u<ey*>"),cA:s("u<ez*>"),eG:s("u<cJ<L*>*>"),i:s("u<B*>"),fG:s("u<eH*>"),bw:s("u<eK*>"),br:s("u<eQ*>"),cn:s("u<aO*>"),fj:s("u<eR*>"),d6:s("u<cM*>"),dv:s("u<cN*>"),hg:s("u<cO*>"),by:s("u<cP*>"),fF:s("u<cQ*>"),cz:s("u<v*>"),j:s("u<f4*>"),m:s("u<Y*>"),V:s("u<l*>"),f:s("u<~(R*)*>"),T:s("cp"),eH:s("lc"),g:s("as"),aU:s("x<@>"),h9:s("z<B*,cG*>"),eF:s("z<B*,eB*>"),dO:s("z<B*,B*>"),w:s("z<B*,eN*>"),en:s("z<l*,o<cM*>*>"),af:s("z<l*,o<cN*>*>"),gr:s("z<l*,o<cP*>*>"),gb:s("z<l*,o<cQ*>*>"),J:s("z<l*,eT*>"),E:s("z<l*,ap*>"),a:s("z<l*,l*>"),aH:s("o<@>"),eO:s("G<@,@>"),bK:s("bO"),o:s("cA"),dD:s("U"),bm:s("bR"),P:s("ah"),K:s("L"),q:s("a4<P>"),fv:s("lx"),N:s("B"),bY:s("b3"),aF:s("cK"),gc:s("b4"),ak:s("bx"),U:s("bX<B,B>"),R:s("f2"),cJ:s("ap"),gR:s("Y"),z:s("@"),S:s("l"),fr:s("bk*"),l:s("aD*"),g1:s("a7*"),dT:s("aY*"),gj:s("S*"),dn:s("cv*"),hc:s("aJ*"),d:s("bP*"),ah:s("T*"),A:s("0&*"),_:s("L*"),X:s("B*"),eB:s("eM*"),eP:s("cL*"),n:s("eS*"),r:s("eU*"),y:s("eV*"),O:s("eW*"),I:s("cO*"),c:s("eX*"),Q:s("eY*"),e:s("l*"),dm:s("~(R*)*"),bG:s("l9<ah>?"),W:s("L?"),H:s("P")}})();(function constants(){var s=hunkHelpers.makeConstList
C.k=W.bk.prototype
C.R=J.a.prototype
C.b=J.u.prototype
C.S=J.cn.prototype
C.c=J.co.prototype
C.p=J.cp.prototype
C.d=J.bq.prototype
C.a=J.aG.prototype
C.T=J.as.prototype
C.B=J.eh.prototype
C.C=P.er.prototype
C.t=J.bx.prototype
C.D=W.b5.prototype
C.E=W.bZ.prototype
C.F=new E.bD("Browser.chrome")
C.u=new E.bD("Browser.firefox")
C.v=new E.bD("Browser.edge")
C.G=new E.bD("Browser.other")
C.a2=new P.hj()
C.H=new P.hi()
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.I=function() {
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
C.N=function(getTagFallback) {
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
C.J=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.K=function(hooks) {
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
C.M=function(hooks) {
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
C.L=function(hooks) {
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
C.x=function(hooks) { return hooks; }

C.O=new P.ef()
C.h=new P.j2()
C.P=new P.j6()
C.i=new P.ju()
C.o=new P.bn(0)
C.Q=new P.bn(5e6)
C.l=H.d(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.m=H.d(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.n=H.d(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.V=H.d(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.W=H.d(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.j=H.d(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.y=H.d(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.z=H.d(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.U=H.d(s([]),t.i)
C.X=new H.cf(0,{},C.U,H.kQ("cf<B*,B*>"))
C.Y=new E.bS("OperatingSystem.windows")
C.A=new E.bS("OperatingSystem.mac")
C.Z=new E.bS("OperatingSystem.linux")
C.a_=new E.bS("OperatingSystem.other")
C.q=new Y.bV("Type.Intesected")
C.e=new Y.bV("Type.NoCollision")
C.r=new Y.bV("Type.OutOfRange")
C.f=new Y.bV("Type.Collision")
C.a0=new P.j3(!1)
C.a1=new P.c_(null,2)})();(function staticFields(){$.lS=null
$.aB=0
$.l4=null
$.l3=null
$.mh=null
$.mf=null
$.mn=null
$.jS=null
$.k0=null
$.kT=null
$.c4=null
$.dh=null
$.di=null
$.kN=!1
$.aA=C.i
$.a9=H.d([],H.kQ("u<L>"))
$.hB=null
$.li=null
$.ln=null
$.lq=null
$.aL=null
$.lz=null
$.lM=null
$.by=null
$.j7=null
$.j8=null
$.j9=null
$.lN=null
$.lp=null
$.ke=null
$.l0=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"pV","mv",function(){return H.pu("_$dart_dartClosure")})
s($,"q8","mw",function(){return H.aP(H.iN({
toString:function(){return"$receiver$"}}))})
s($,"q9","mx",function(){return H.aP(H.iN({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qa","my",function(){return H.aP(H.iN(null))})
s($,"qb","mz",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qe","mC",function(){return H.aP(H.iN(void 0))})
s($,"qf","mD",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qd","mB",function(){return H.aP(H.lH(null))})
s($,"qc","mA",function(){return H.aP(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"qh","mF",function(){return H.aP(H.lH(void 0))})
s($,"qg","mE",function(){return H.aP(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"qx","kY",function(){return P.nO()})
s($,"qi","mG",function(){return new P.j4().$0()})
s($,"qj","mH",function(){return new P.j5().$0()})
s($,"qy","mL",function(){return new Int8Array(H.c2(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"qA","mM",function(){return P.nx("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"qQ","mN",function(){return P.ov()})
s($,"qq","mK",function(){return Z.an(0)})
s($,"qk","mI",function(){return Z.an(511)})
s($,"qs","bf",function(){return Z.an(1)})
s($,"qr","be",function(){return Z.an(2)})
s($,"qm","bd",function(){return Z.an(4)})
s($,"qt","bg",function(){return Z.an(8)})
s($,"qu","bh",function(){return Z.an(16)})
s($,"qn","dl",function(){return Z.an(32)})
s($,"qo","dm",function(){return Z.an(64)})
s($,"qp","mJ",function(){return Z.an(96)})
s($,"qv","c9",function(){return Z.an(128)})
s($,"ql","bc",function(){return Z.an(256)})
s($,"pT","mu",function(){return new V.hC()})
s($,"pS","A",function(){return $.mu()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cA,DataView:H.U,ArrayBufferView:H.U,Float32Array:H.bu,Float64Array:H.bu,Int16Array:H.e6,Int32Array:H.e7,Int8Array:H.e8,Uint16Array:H.e9,Uint32Array:H.ea,Uint8ClampedArray:H.cC,CanvasPixelArray:H.cC,Uint8Array:H.bR,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLBodyElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLDivElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTableElement:W.p,HTMLTableRowElement:W.p,HTMLTableSectionElement:W.p,HTMLTemplateElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.hc,HTMLAnchorElement:W.dp,HTMLAreaElement:W.dq,Blob:W.bj,HTMLCanvasElement:W.bk,CDATASection:W.aq,CharacterData:W.aq,Comment:W.aq,ProcessingInstruction:W.aq,Text:W.aq,CSSPerspective:W.hq,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.cg,MSStyleCSSProperties:W.cg,CSS2Properties:W.cg,CSSImageValue:W.ag,CSSKeywordValue:W.ag,CSSNumericValue:W.ag,CSSPositionValue:W.ag,CSSResourceValue:W.ag,CSSUnitValue:W.ag,CSSURLImageValue:W.ag,CSSStyleValue:W.ag,CSSMatrixComponent:W.aC,CSSRotation:W.aC,CSSScale:W.aC,CSSSkew:W.aC,CSSTranslation:W.aC,CSSTransformComponent:W.aC,CSSTransformValue:W.hs,CSSUnparsedValue:W.ht,DataTransferItemList:W.hu,DOMException:W.hv,ClientRectList:W.ch,DOMRectList:W.ch,DOMRectReadOnly:W.ci,DOMStringList:W.dK,DOMTokenList:W.hw,Element:W.F,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,SubmitEvent:W.k,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ac,FileList:W.bH,FileWriter:W.dO,HTMLFormElement:W.dQ,Gamepad:W.ar,History:W.hL,HTMLCollection:W.bo,HTMLFormControlsCollection:W.bo,HTMLOptionsCollection:W.bo,ImageData:W.bp,HTMLImageElement:W.bJ,HTMLInputElement:W.bL,KeyboardEvent:W.br,Location:W.hT,MediaList:W.ia,MessagePort:W.bO,MIDIInputMap:W.e3,MIDIOutputMap:W.e4,MimeType:W.au,MimeTypeArray:W.e5,PointerEvent:W.ad,MouseEvent:W.ad,DragEvent:W.ad,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,Attr:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cD,RadioNodeList:W.cD,Plugin:W.av,PluginArray:W.ej,RTCStatsReport:W.es,HTMLSelectElement:W.eu,SourceBuffer:W.aj,SourceBufferList:W.ew,SpeechGrammar:W.ax,SpeechGrammarList:W.ex,SpeechRecognitionResult:W.ay,Storage:W.eD,CSSStyleSheet:W.ak,StyleSheet:W.ak,HTMLTableCellElement:W.b3,HTMLTableDataCellElement:W.b3,HTMLTableHeaderCellElement:W.b3,TextTrack:W.al,TextTrackCue:W.a8,VTTCue:W.a8,TextTrackCueList:W.eI,TextTrackList:W.eJ,TimeRanges:W.iI,Touch:W.az,TouchEvent:W.bw,TouchList:W.eO,TrackDefaultList:W.iL,CompositionEvent:W.aQ,FocusEvent:W.aQ,TextEvent:W.aQ,UIEvent:W.aQ,URL:W.j1,VideoTrackList:W.f5,WheelEvent:W.b5,Window:W.bZ,DOMWindow:W.bZ,CSSRuleList:W.fc,ClientRect:W.cU,DOMRect:W.cU,GamepadList:W.fq,NamedNodeMap:W.cY,MozNamedAttrMap:W.cY,SpeechRecognitionResultList:W.fK,StyleSheetList:W.fR,SVGLength:P.aH,SVGLengthList:P.dY,SVGNumber:P.aK,SVGNumberList:P.ed,SVGPointList:P.ih,SVGStringList:P.eF,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGTransform:P.aN,SVGTransformList:P.eP,AudioBuffer:P.hg,AudioParamMap:P.dt,AudioTrackList:P.du,AudioContext:P.aW,webkitAudioContext:P.aW,BaseAudioContext:P.aW,OfflineAudioContext:P.ee,WebGL2RenderingContext:P.er,SQLResultSetRowList:P.eA})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.bu.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
W.d3.$nativeSuperclassTag="EventTarget"
W.d4.$nativeSuperclassTag="EventTarget"
W.d6.$nativeSuperclassTag="EventTarget"
W.d7.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.ml,[])
else Q.ml([])})})()
//# sourceMappingURL=test.dart.js.map
