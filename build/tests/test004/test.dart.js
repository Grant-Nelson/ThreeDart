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
a[c]=function(){a[c]=function(){H.n2(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.j7"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.j7"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.j7(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={iM:function iM(){},
li:function(a,b){if(t.O.b(a))return new H.bN(a,b)
return new H.aS(a,b)},
fH:function(){return new P.bn("No element")},
lc:function(){return new P.bn("Too many elements")},
lB:function(a,b){var s=J.aF(a)
if(typeof s!=="number")return s.R()
H.dz(a,0,s-1,b)},
dz:function(a,b,c,d){if(c-b<=32)H.lA(a,b,c,d)
else H.lz(a,b,c,d)},
lA:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b4(a);s<=c;++s){q=r.j(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.j(a,p-1),q)
if(typeof o!=="number")return o.L()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.j(a,n))
p=n}r.m(a,p,q)}},
lz:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.Y(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.Y(a6+a7,2),d=e-h,c=e+h,b=J.b4(a5),a=b.j(a5,g),a0=b.j(a5,d),a1=b.j(a5,e),a2=b.j(a5,c),a3=b.j(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.L()
if(a4>0){s=a3
a3=a2
a2=s}b.m(a5,g,a)
b.m(a5,e,a1)
b.m(a5,f,a3)
b.m(a5,d,b.j(a5,a6))
b.m(a5,c,b.j(a5,a7))
r=a6+1
q=a7-1
if(J.F(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.j(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.a7()
if(n<0){if(p!==r){b.m(a5,p,b.j(a5,r))
b.m(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.j(a5,q),a0)
if(typeof n!=="number")return n.L()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.m(a5,p,b.j(a5,r))
l=r+1
b.m(a5,r,b.j(a5,q))
b.m(a5,q,o)
q=m
r=l
break}else{b.m(a5,p,b.j(a5,q))
b.m(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.j(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.a7()
if(j<0){if(p!==r){b.m(a5,p,b.j(a5,r))
b.m(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.L()
if(i>0)for(;!0;){n=a8.$2(b.j(a5,q),a2)
if(typeof n!=="number")return n.L()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.j(a5,q),a0)
if(typeof n!=="number")return n.a7()
m=q-1
if(n<0){b.m(a5,p,b.j(a5,r))
l=r+1
b.m(a5,r,b.j(a5,q))
b.m(a5,q,o)
r=l}else{b.m(a5,p,b.j(a5,q))
b.m(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.m(a5,a6,b.j(a5,a4))
b.m(a5,a4,a0)
a4=q+1
b.m(a5,a7,b.j(a5,a4))
b.m(a5,a4,a2)
H.dz(a5,a6,r-2,a8)
H.dz(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.F(a8.$2(b.j(a5,r),a0),0);)++r
for(;J.F(a8.$2(b.j(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.j(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.m(a5,p,b.j(a5,r))
b.m(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.j(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.j(a5,q),a0)
if(typeof n!=="number")return n.a7()
m=q-1
if(n<0){b.m(a5,p,b.j(a5,r))
l=r+1
b.m(a5,r,b.j(a5,q))
b.m(a5,q,o)
r=l}else{b.m(a5,p,b.j(a5,q))
b.m(a5,q,o)}q=m
break}}H.dz(a5,r,q,a8)}else H.dz(a5,r,q,a8)},
l:function l(a){this.a=a},
i:function i(){},
bY:function bY(){},
aq:function aq(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aS:function aS(a,b){this.a=a
this.b=b},
bN:function bN(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b){this.a=null
this.b=a
this.c=b},
c_:function c_(a,b){this.a=a
this.b=b},
b0:function b0(a,b){this.a=a
this.b=b},
e_:function e_(a,b){this.a=a
this.b=b},
bQ:function bQ(){},
dU:function dU(){},
br:function br(){},
kw:function(a){var s,r=H.kv(a)
if(r!=null)return r
s="minified:"+a
return s},
mV:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
d:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a3(a)
if(typeof s!="string")throw H.c(H.b2(a))
return s},
c7:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dt:function(a){return H.lj(a)},
lj:function(a){var s,r,q
if(a instanceof P.B)return H.W(H.cC(a),null)
if(J.cB(a)===C.K||t.o.b(a)){s=C.n(a)
if(H.jK(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.jK(q))return q}}return H.W(H.cC(a),null)},
jK:function(a){var s=a!=="Object"&&a!==""
return s},
jJ:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
ls:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.u)(a),++r){q=a[r]
if(!H.cx(q))throw H.c(H.b2(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.av(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.b2(q))}return H.jJ(p)},
lr:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cx(q))throw H.c(H.b2(q))
if(q<0)throw H.c(H.b2(q))
if(q>65535)return H.ls(a)}return H.jJ(a)},
iQ:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.av(s,10))>>>0,56320|s&1023)}throw H.c(P.au(a,0,1114111,null,null))},
bk:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lq:function(a){var s=H.bk(a).getFullYear()+0
return s},
lo:function(a){var s=H.bk(a).getMonth()+1
return s},
lk:function(a){var s=H.bk(a).getDate()+0
return s},
ll:function(a){var s=H.bk(a).getHours()+0
return s},
ln:function(a){var s=H.bk(a).getMinutes()+0
return s},
lp:function(a){var s=H.bk(a).getSeconds()+0
return s},
lm:function(a){var s=H.bk(a).getMilliseconds()+0
return s},
G:function(a){throw H.c(H.b2(a))},
e:function(a,b){if(a==null)J.aF(a)
throw H.c(H.bA(a,b))},
bA:function(a,b){var s,r,q="index"
if(!H.cx(b))return new P.T(!0,b,q,null)
s=J.aF(a)
if(!(b<0)){if(typeof s!=="number")return H.G(s)
r=b>=s}else r=!0
if(r)return P.z(b,a,q,null,s)
return P.du(b,q)},
mJ:function(a,b,c){if(a>c)return P.au(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.au(b,a,c,"end",null)
return new P.T(!0,b,"end",null)},
b2:function(a){return new P.T(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.dj()
s=new Error()
s.dartException=a
r=H.n3
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
n3:function(){return J.a3(this.dartException)},
N:function(a){throw H.c(a)},
u:function(a){throw H.c(P.aJ(a))},
ag:function(a){var s,r,q,p,o,n
a=H.kt(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.hw(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
hx:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
jT:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jF:function(a,b){return new H.di(a,b==null?null:b.method)},
iN:function(a,b){var s=b==null,r=s?null:b.method
return new H.d4(a,r,s?null:b.receiver)},
ak:function(a){if(a==null)return new H.h0(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.b6(a,a.dartException)
return H.mB(a)},
b6:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
mB:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.av(r,16)&8191)===10)switch(q){case 438:return H.b6(a,H.iN(H.d(s)+" (Error "+q+")",e))
case 445:case 5007:return H.b6(a,H.jF(H.d(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.kz()
o=$.kA()
n=$.kB()
m=$.kC()
l=$.kF()
k=$.kG()
j=$.kE()
$.kD()
i=$.kI()
h=$.kH()
g=p.U(s)
if(g!=null)return H.b6(a,H.iN(s,g))
else{g=o.U(s)
if(g!=null){g.method="call"
return H.b6(a,H.iN(s,g))}else{g=n.U(s)
if(g==null){g=m.U(s)
if(g==null){g=l.U(s)
if(g==null){g=k.U(s)
if(g==null){g=j.U(s)
if(g==null){g=m.U(s)
if(g==null){g=i.U(s)
if(g==null){g=h.U(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.b6(a,H.jF(s,g))}}return H.b6(a,new H.dT(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.c9()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.b6(a,new P.T(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.c9()
return a},
j9:function(a){var s
if(a==null)return new H.eC(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.eC(a)},
mL:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
mU:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.O("Unsupported number of arguments for wrapped closure"))},
bz:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mU)
a.$identity=s
return s},
l5:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.hj().constructor.prototype):Object.create(new H.bH(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aa
if(typeof r!=="number")return r.J()
$.aa=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.jr(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.l1(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jr(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
l1:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ko,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.l_:H.kZ
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
l2:function(a,b,c,d){var s=H.jp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jr:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.l4(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.l2(r,!p,s,b)
if(r===0){p=$.aa
if(typeof p!=="number")return p.J()
$.aa=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.d(H.iG())+";return "+n+"."+H.d(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aa
if(typeof p!=="number")return p.J()
$.aa=p+1
m+=p
return new Function("return function("+m+"){return this."+H.d(H.iG())+"."+H.d(s)+"("+m+");}")()},
l3:function(a,b,c,d){var s=H.jp,r=H.l0
switch(b?-1:a){case 0:throw H.c(new H.dw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
l4:function(a,b){var s,r,q,p,o,n,m=H.iG(),l=$.jn
if(l==null)l=$.jn=H.jm("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.l3(r,!p,s,b)
if(r===1){p="return function(){return this."+H.d(m)+"."+H.d(s)+"(this."+l+");"
o=$.aa
if(typeof o!=="number")return o.J()
$.aa=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.d(m)+"."+H.d(s)+"(this."+l+", "+n+");"
o=$.aa
if(typeof o!=="number")return o.J()
$.aa=o+1
return new Function(p+o+"}")()},
j7:function(a,b,c,d,e,f,g){return H.l5(a,b,c,d,!!e,!!f,g)},
kZ:function(a,b){return H.eQ(v.typeUniverse,H.cC(a.a),b)},
l_:function(a,b){return H.eQ(v.typeUniverse,H.cC(a.c),b)},
jp:function(a){return a.a},
l0:function(a){return a.c},
iG:function(){var s=$.jo
return s==null?$.jo=H.jm("self"):s},
jm:function(a){var s,r,q,p=new H.bH("self","target","receiver","name"),o=J.iL(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.jk("Field name "+a+" not found."))},
n2:function(a){throw H.c(new P.cP(a))},
mO:function(a){return v.getIsolateTag(a)},
o5:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mX:function(a){var s,r,q,p,o,n=$.kn.$1(a),m=$.it[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iz[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.kk.$2(a,n)
if(q!=null){m=$.it[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iz[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.iC(s)
$.it[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iz[n]=s
return s}if(p==="-"){o=H.iC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kr(a,s)
if(p==="*")throw H.c(P.jU(n))
if(v.leafTags[n]===true){o=H.iC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kr(a,s)},
kr:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jb(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
iC:function(a){return J.jb(a,!1,null,!!a.$in)},
mY:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.iC(s)
else return J.jb(s,c,null,null)},
mS:function(){if(!0===$.ja)return
$.ja=!0
H.mT()},
mT:function(){var s,r,q,p,o,n,m,l
$.it=Object.create(null)
$.iz=Object.create(null)
H.mR()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ks.$1(o)
if(n!=null){m=H.mY(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
mR:function(){var s,r,q,p,o,n,m=C.y()
m=H.by(C.z,H.by(C.A,H.by(C.o,H.by(C.o,H.by(C.B,H.by(C.C,H.by(C.D(C.n),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kn=new H.iw(p)
$.kk=new H.ix(o)
$.ks=new H.iy(n)},
by:function(a,b){return a(b)||b},
lg:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.fA("Illegal RegExp pattern ("+String(n)+")",a))},
ku:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
mK:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kt:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jd:function(a,b,c){var s=H.n0(a,b,c)
return s},
n0:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kt(b),'g'),H.mK(c))},
hw:function hw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
di:function di(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a){this.a=a},
h0:function h0(a){this.a=a},
eC:function eC(a){this.a=a
this.b=null},
b9:function b9(){},
hn:function hn(){},
hj:function hj(){},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dw:function dw(a){this.a=a},
K:function K(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fK:function fK(a){this.a=a},
fN:function fN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ap:function ap(a){this.a=a},
d7:function d7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iw:function iw(a){this.a=a},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j3:function(a){return a},
ai:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bA(b,a))},
m9:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.mJ(a,b,c))
return b},
c3:function c3(){},
bh:function bh(){},
aU:function aU(){},
c2:function c2(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
c4:function c4(){},
dh:function dh(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
ck:function ck(){},
lx:function(a,b){var s=b.c
return s==null?b.c=H.j0(a,b.z,!0):s},
jN:function(a,b){var s=b.c
return s==null?b.c=H.cu(a,"jy",[b.z]):s},
jO:function(a){var s=a.y
if(s===6||s===7||s===8)return H.jO(a.z)
return s===11||s===12},
lw:function(a){return a.cy},
mM:function(a){return H.j1(v.typeUniverse,a,!1)},
aB:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aB(a,s,a0,a1)
if(r===s)return b
return H.ka(a,r,!0)
case 7:s=b.z
r=H.aB(a,s,a0,a1)
if(r===s)return b
return H.j0(a,r,!0)
case 8:s=b.z
r=H.aB(a,s,a0,a1)
if(r===s)return b
return H.k9(a,r,!0)
case 9:q=b.Q
p=H.cA(a,q,a0,a1)
if(p===q)return b
return H.cu(a,b.z,p)
case 10:o=b.z
n=H.aB(a,o,a0,a1)
m=b.Q
l=H.cA(a,m,a0,a1)
if(n===o&&l===m)return b
return H.iZ(a,n,l)
case 11:k=b.z
j=H.aB(a,k,a0,a1)
i=b.Q
h=H.my(a,i,a0,a1)
if(j===k&&h===i)return b
return H.k8(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cA(a,g,a0,a1)
o=b.z
n=H.aB(a,o,a0,a1)
if(f===g&&n===o)return b
return H.j_(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.f4("Attempted to substitute unexpected RTI kind "+c))}},
cA:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aB(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
mz:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aB(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
my:function(a,b,c,d){var s,r=b.a,q=H.cA(a,r,c,d),p=b.b,o=H.cA(a,p,c,d),n=b.c,m=H.mz(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.ee()
s.a=q
s.b=o
s.c=m
return s},
o7:function(a,b){a[v.arrayRti]=b
return a},
mG:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.ko(s)
return a.$S()}return null},
kp:function(a,b){var s
if(H.jO(b))if(a instanceof H.b9){s=H.mG(a)
if(s!=null)return s}return H.cC(a)},
cC:function(a){var s
if(a instanceof P.B){s=a.$ti
return s!=null?s:H.j4(a)}if(Array.isArray(a))return H.m6(a)
return H.j4(J.cB(a))},
m6:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
mf:function(a){var s=a.$ti
return s!=null?s:H.j4(a)},
j4:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.mg(a,s)},
mg:function(a,b){var s=a instanceof H.b9?a.__proto__.__proto__.constructor:b,r=H.m5(v.typeUniverse,s.name)
b.$ccache=r
return r},
ko:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.j1(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
me:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cw(q,a,H.mk)
if(!H.aj(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.cw(q,a,H.mn)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cx
else if(s===t.W||s===t.H)r=H.mj
else if(s===t.N)r=H.ml
else r=s===t.v?H.kg:null
if(r!=null)return H.cw(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.mW)){q.r="$i"+p
return H.cw(q,a,H.mm)}}else if(p===7)return H.cw(q,a,H.mc)
return H.cw(q,a,H.ma)},
cw:function(a,b,c){a.b=c
return a.b(b)},
md:function(a){var s,r,q=this
if(!H.aj(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.m8
else if(q===t.K)r=H.m7
else r=H.mb
q.a=r
return q.a(a)},
mr:function(a){var s,r=a.y
if(!H.aj(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
ma:function(a){var s=this
if(a==null)return H.mr(s)
return H.I(v.typeUniverse,H.kp(a,s),null,s,null)},
mc:function(a){if(a==null)return!0
return this.z.b(a)},
mm:function(a){var s=this,r=s.r
if(a instanceof P.B)return!!a[r]
return!!J.cB(a)[r]},
o4:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ke(a,s)},
mb:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ke(a,s)},
ke:function(a,b){throw H.c(H.lW(H.k0(a,H.kp(a,b),H.W(b,null))))},
k0:function(a,b,c){var s=P.fs(a),r=H.W(b==null?H.cC(a):b,null)
return s+": type '"+H.d(r)+"' is not a subtype of type '"+H.d(c)+"'"},
lW:function(a){return new H.ct("TypeError: "+a)},
P:function(a,b){return new H.ct("TypeError: "+H.k0(a,null,b))},
mk:function(a){return a!=null},
m7:function(a){return a},
mn:function(a){return!0},
m8:function(a){return a},
kg:function(a){return!0===a||!1===a},
nR:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.P(a,"bool"))},
nT:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.P(a,"bool"))},
nS:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.P(a,"bool?"))},
nU:function(a){if(typeof a=="number")return a
throw H.c(H.P(a,"double"))},
nW:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.P(a,"double"))},
nV:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.P(a,"double?"))},
cx:function(a){return typeof a=="number"&&Math.floor(a)===a},
nX:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.P(a,"int"))},
nZ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.P(a,"int"))},
nY:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.P(a,"int?"))},
mj:function(a){return typeof a=="number"},
o_:function(a){if(typeof a=="number")return a
throw H.c(H.P(a,"num"))},
o1:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.P(a,"num"))},
o0:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.P(a,"num?"))},
ml:function(a){return typeof a=="string"},
o2:function(a){if(typeof a=="string")return a
throw H.c(H.P(a,"String"))},
j2:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.P(a,"String"))},
o3:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.P(a,"String?"))},
mu:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.J(r,H.W(a[q],b))
return s},
kf:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.e(a6,i)
l=C.b.J(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.b.J(" extends ",H.W(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.W(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.J(a3,H.W(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.J(a3,H.W(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.jg(H.W(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.d(a1)},
W:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.W(a.z,b)
return s}if(l===7){r=a.z
s=H.W(r,b)
q=r.y
return J.jg(q===11||q===12?C.b.J("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.d(H.W(a.z,b))+">"
if(l===9){p=H.mA(a.z)
o=a.Q
return o.length!==0?p+("<"+H.mu(o,b)+">"):p}if(l===11)return H.kf(a,b,null)
if(l===12)return H.kf(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
mA:function(a){var s,r=H.kv(a)
if(r!=null)return r
s="minified:"+a
return s},
kb:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
m5:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.j1(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cv(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cu(a,b,q)
n[b]=o
return o}else return m},
m3:function(a,b){return H.kd(a.tR,b)},
m2:function(a,b){return H.kd(a.eT,b)},
j1:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.k6(H.k4(a,null,b,c))
r.set(b,s)
return s},
eQ:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.k6(H.k4(a,b,c,!0))
q.set(c,r)
return r},
m4:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.iZ(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aA:function(a,b){b.a=H.md
b.b=H.me
return b},
cv:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.a1(null,null)
s.y=b
s.cy=c
r=H.aA(a,s)
a.eC.set(c,r)
return r},
ka:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.m0(a,b,r,c)
a.eC.set(r,s)
return s},
m0:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aj(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.a1(null,null)
q.y=6
q.z=b
q.cy=c
return H.aA(a,q)},
j0:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.m_(a,b,r,c)
a.eC.set(r,s)
return s},
m_:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aj(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.iA(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.iA(q.z))return q
else return H.lx(a,b)}}p=new H.a1(null,null)
p.y=7
p.z=b
p.cy=c
return H.aA(a,p)},
k9:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.lY(a,b,r,c)
a.eC.set(r,s)
return s},
lY:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aj(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cu(a,"jy",[b])
else if(b===t.P||b===t.T)return t.R}q=new H.a1(null,null)
q.y=8
q.z=b
q.cy=c
return H.aA(a,q)},
m1:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.a1(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aA(a,s)
a.eC.set(q,r)
return r},
eP:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
lX:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cu:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.eP(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.a1(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aA(a,r)
a.eC.set(p,q)
return q},
iZ:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.eP(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a1(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aA(a,o)
a.eC.set(q,n)
return n},
k8:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.eP(m)
if(j>0){s=l>0?",":""
r=H.eP(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.lX(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a1(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aA(a,o)
a.eC.set(q,r)
return r},
j_:function(a,b,c,d){var s,r=b.cy+("<"+H.eP(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.lZ(a,b,c,r,d)
a.eC.set(r,s)
return s},
lZ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aB(a,b,r,0)
m=H.cA(a,c,r,0)
return H.j_(a,n,m,c!==m)}}l=new H.a1(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aA(a,l)},
k4:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
k6:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.lQ(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.k5(a,r,g,f,!1)
else if(q===46)r=H.k5(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.az(a.u,a.e,f.pop()))
break
case 94:f.push(H.m1(a.u,f.pop()))
break
case 35:f.push(H.cv(a.u,5,"#"))
break
case 64:f.push(H.cv(a.u,2,"@"))
break
case 126:f.push(H.cv(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.iY(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cu(p,n,o))
else{m=H.az(p,a.e,n)
switch(m.y){case 11:f.push(H.j_(p,m,o,a.n))
break
default:f.push(H.iZ(p,m,o))
break}}break
case 38:H.lR(a,f)
break
case 42:l=a.u
f.push(H.ka(l,H.az(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.j0(l,H.az(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.k9(l,H.az(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.ee()
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
H.iY(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.k8(p,H.az(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.iY(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.lT(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.az(a.u,a.e,h)},
lQ:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
k5:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.kb(s,o.z)[p]
if(n==null)H.N('No "'+p+'" in "'+H.lw(o)+'"')
d.push(H.eQ(s,o,n))}else d.push(p)
return m},
lR:function(a,b){var s=b.pop()
if(0===s){b.push(H.cv(a.u,1,"0&"))
return}if(1===s){b.push(H.cv(a.u,4,"1&"))
return}throw H.c(P.f4("Unexpected extended operation "+H.d(s)))},
az:function(a,b,c){if(typeof c=="string")return H.cu(a,c,a.sEA)
else if(typeof c=="number")return H.lS(a,b,c)
else return c},
iY:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.az(a,b,c[s])},
lT:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.az(a,b,c[s])},
lS:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.f4("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.f4("Bad index "+c+" for "+b.h(0)))},
I:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aj(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aj(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.I(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.I(a,b.z,c,d,e)
if(p===6){s=d.z
return H.I(a,b,c,s,e)}if(r===8){if(!H.I(a,b.z,c,d,e))return!1
return H.I(a,H.jN(a,b),c,d,e)}if(r===7){s=H.I(a,b.z,c,d,e)
return s}if(p===8){if(H.I(a,b,c,d.z,e))return!0
return H.I(a,b,c,H.jN(a,d),e)}if(p===7){s=H.I(a,b,c,d.z,e)
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
if(!H.I(a,k,c,j,e)||!H.I(a,j,e,k,c))return!1}return H.kh(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.kh(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.mi(a,b,c,d,e)}return!1},
kh:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.I(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.I(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.I(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.I(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.I(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
mi:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.I(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.kb(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.I(a,H.eQ(a,b,l[p]),c,r[p],e))return!1
return!0},
iA:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aj(a))if(r!==7)if(!(r===6&&H.iA(a.z)))s=r===8&&H.iA(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mW:function(a){var s
if(!H.aj(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aj:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kd:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
a1:function a1(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
ee:function ee(){this.c=this.b=this.a=null},
e9:function e9(){},
ct:function ct(a){this.a=a},
kv:function(a){return v.mangledGlobalNames[a]},
mZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jb:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f1:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.ja==null){H.mS()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.jU("Return interceptor for "+H.d(s(a,o))))}q=a.constructor
p=q==null?null:q[J.jA()]
if(p!=null)return p
p=H.mX(a)
if(p!=null)return p
if(typeof a=="function")return C.M
s=Object.getPrototypeOf(a)
if(s==null)return C.r
if(s===Object.prototype)return C.r
if(typeof q=="function"){Object.defineProperty(q,J.jA(),{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
jA:function(){var s=$.k2
return s==null?$.k2=v.getIsolateTag("_$dart_js"):s},
ld:function(a){if(!H.cx(a))throw H.c(P.jl(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.au(a,0,4294967295,"length",null))
return J.le(new Array(a))},
jz:function(a){if(!H.cx(a)||a<0)throw H.c(P.jk("Length must be a non-negative integer: "+H.d(a)))
return new Array(a)},
le:function(a){return J.iL(a)},
iL:function(a){a.fixed$length=Array
return a},
lf:function(a,b){return J.kR(a,b)},
cB:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bT.prototype
return J.d2.prototype}if(typeof a=="string")return J.ae.prototype
if(a==null)return J.bU.prototype
if(typeof a=="boolean")return J.fI.prototype
if(a.constructor==Array)return J.Z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof P.B)return a
return J.f1(a)},
mN:function(a){if(typeof a=="number")return J.aP.prototype
if(typeof a=="string")return J.ae.prototype
if(a==null)return a
if(a.constructor==Array)return J.Z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof P.B)return a
return J.f1(a)},
b4:function(a){if(typeof a=="string")return J.ae.prototype
if(a==null)return a
if(a.constructor==Array)return J.Z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof P.B)return a
return J.f1(a)},
iv:function(a){if(a==null)return a
if(a.constructor==Array)return J.Z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof P.B)return a
return J.f1(a)},
km:function(a){if(typeof a=="number")return J.aP.prototype
if(typeof a=="string")return J.ae.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.b_.prototype
return a},
j8:function(a){if(typeof a=="string")return J.ae.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.b_.prototype
return a},
b5:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof P.B)return a
return J.f1(a)},
jg:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.mN(a).J(a,b)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cB(a).q(a,b)},
jh:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.km(a).H(a,b)},
kO:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mV(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b4(a).j(a,b)},
kP:function(a,b,c){return J.b5(a).ds(a,b,c)},
kQ:function(a,b,c,d){return J.b5(a).dG(a,b,c,d)},
kR:function(a,b){return J.km(a).ae(a,b)},
iF:function(a,b){return J.b4(a).w(a,b)},
f2:function(a,b){return J.iv(a).t(a,b)},
kS:function(a,b){return J.iv(a).E(a,b)},
kT:function(a){return J.b5(a).gdK(a)},
kU:function(a){return J.b5(a).gbx(a)},
X:function(a){return J.cB(a).gK(a)},
aE:function(a){return J.iv(a).gF(a)},
aF:function(a){return J.b4(a).gk(a)},
ji:function(a){return J.iv(a).ek(a)},
kV:function(a,b){return J.b5(a).en(a,b)},
kW:function(a,b,c){return J.j8(a).aq(a,b,c)},
kX:function(a){return J.j8(a).ev(a)},
a3:function(a){return J.cB(a).h(a)},
a:function a(){},
fI:function fI(){},
bU:function bU(){},
aQ:function aQ(){},
dp:function dp(){},
b_:function b_(){},
a5:function a5(){},
Z:function Z(){},
d3:function d3(){},
U:function U(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aP:function aP(){},
bT:function bT(){},
d2:function d2(){},
ae:function ae(){}},P={
lF:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.mC()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bz(new P.i3(q),1)).observe(s,{childList:true})
return new P.i2(q,s,r)}else if(self.setImmediate!=null)return P.mD()
return P.mE()},
lG:function(a){self.scheduleImmediate(H.bz(new P.i4(a),0))},
lH:function(a){self.setImmediate(H.bz(new P.i5(a),0))},
lI:function(a){P.iU(C.h,a)},
iU:function(a,b){var s=C.c.Y(a.a,1000)
return P.lU(s<0?0:s,b)},
jS:function(a,b){var s=C.c.Y(a.a,1000)
return P.lV(s<0?0:s,b)},
lU:function(a,b){var s=new P.cs()
s.cp(a,b)
return s},
lV:function(a,b){var s=new P.cs()
s.cq(a,b)
return s},
nP:function(a){return new P.bw(a,1)},
lN:function(){return C.U},
lO:function(a){return new P.bw(a,3)},
mp:function(a){return new P.cp(a)},
mq:function(){var s,r
for(s=$.bx;s!=null;s=$.bx){$.cz=null
r=s.b
$.bx=r
if(r==null)$.cy=null
s.a.$0()}},
mx:function(){$.j5=!0
try{P.mq()}finally{$.cz=null
$.j5=!1
if($.bx!=null)$.jf().$1(P.kl())}},
mv:function(a){var s=new P.e0(a),r=$.cy
if(r==null){$.bx=$.cy=s
if(!$.j5)$.jf().$1(P.kl())}else $.cy=r.b=s},
mw:function(a){var s,r,q,p=$.bx
if(p==null){P.mv(a)
$.cz=$.cy
return}s=new P.e0(a)
r=$.cz
if(r==null){s.b=p
$.bx=$.cz=s}else{q=r.b
s.b=q
$.cz=r.b=s
if(q==null)$.cy=s}},
jR:function(a,b){var s=$.a9
if(s===C.e)return P.iU(a,b)
return P.iU(a,s.dL(b))},
lD:function(a,b){var s=$.a9
if(s===C.e)return P.jS(a,b)
return P.jS(a,s.bw(b,t.G))},
ki:function(a,b,c,d,e){P.mw(new P.iq(d,e))},
ms:function(a,b,c,d){var s,r=$.a9
if(r===c)return d.$0()
$.a9=c
s=r
try{r=d.$0()
return r}finally{$.a9=s}},
mt:function(a,b,c,d,e){var s,r=$.a9
if(r===c)return d.$1(e)
$.a9=c
s=r
try{r=d.$1(e)
return r}finally{$.a9=s}},
i3:function i3(a){this.a=a},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
cs:function cs(){this.c=0},
il:function il(a,b){this.a=a
this.b=b},
ik:function ik(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bw:function bw(a,b){this.a=a
this.b=b},
b1:function b1(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cp:function cp(a){this.a=a},
e0:function e0(a){this.a=a
this.b=null},
dE:function dE(){},
dF:function dF(){},
cb:function cb(){},
ip:function ip(){},
iq:function iq(a,b){this.a=a
this.b=b},
ic:function ic(){},
id:function id(a,b){this.a=a
this.b=b},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
lh:function(a,b,c){return H.mL(a,new H.K(b.a1("@<0>").bi(c).a1("K<1,2>")))},
jB:function(a,b){return new H.K(a.a1("@<0>").bi(b).a1("K<1,2>"))},
bV:function(a){return new P.cd(a.a1("cd<0>"))},
iX:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
lP:function(a,b){var s=new P.ce(a,b)
s.c=a.e
return s},
lb:function(a,b,c){var s,r
if(P.j6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.S.push(a)
try{P.mo(a,s)}finally{if(0>=$.S.length)return H.e($.S,-1)
$.S.pop()}r=P.jP(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
iK:function(a,b,c){var s,r
if(P.j6(a))return b+"..."+c
s=new P.bo(b)
$.S.push(a)
try{r=s
r.a=P.jP(r.a,a,", ")}finally{if(0>=$.S.length)return H.e($.S,-1)
$.S.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
j6:function(a){var s,r
for(s=$.S.length,r=0;r<s;++r)if(a===$.S[r])return!0
return!1},
mo:function(a,b){var s,r,q,p,o,n,m,l=a.gF(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.p())return
s=H.d(l.gv(l))
b.push(s)
k+=s.length+2;++j}if(!l.p()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gv(l);++j
if(!l.p()){if(j<=4){b.push(H.d(p))
return}r=H.d(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gv(l);++j
for(;l.p();p=o,o=n){n=l.gv(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.d(p)
r=H.d(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
jC:function(a,b){var s,r,q=P.bV(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.u)(a),++r)q.n(0,b.a(a[r]))
return q},
jD:function(a){var s,r={}
if(P.j6(a))return"{...}"
s=new P.bo("")
try{$.S.push(a)
s.a+="{"
r.a=!0
J.kS(a,new P.fQ(r,s))
s.a+="}"}finally{if(0>=$.S.length)return H.e($.S,-1)
$.S.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cd:function cd(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ib:function ib(a){this.a=a
this.c=this.b=null},
ce:function ce(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bS:function bS(){},
bX:function bX(){},
t:function t(){},
d9:function d9(){},
fQ:function fQ(a,b){this.a=a
this.b=b},
af:function af(){},
cl:function cl(){},
cf:function cf(){},
cM:function cM(){},
cO:function cO(){},
fq:function fq(){},
fF:function fF(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fE:function fE(a){this.a=a},
hO:function hO(){},
hP:function hP(){},
im:function im(a){this.b=0
this.c=a},
l9:function(a){if(a instanceof H.b9)return a.h(0)
return"Instance of '"+H.d(H.dt(a))+"'"},
iO:function(a,b,c){var s,r=c?J.jz(a):J.ld(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iP:function(a,b){var s,r=[]
for(s=J.aE(a);s.p();)r.push(s.gv(s))
if(b)return r
return J.iL(r)},
iT:function(a){var s,r=a,q=r.length,p=P.iR(0,null,q)
if(typeof p!=="number")return p.a7()
s=p<q
return H.lr(s?r.slice(0,p):r)},
lt:function(a){return new H.fJ(a,H.lg(a,!1,!0,!1,!1,!1))},
jP:function(a,b,c){var s=J.aE(b)
if(!s.p())return a
if(c.length===0){do a+=H.d(s.gv(s))
while(s.p())}else{a+=H.d(s.gv(s))
for(;s.p();)a=a+c+H.d(s.gv(s))}return a},
kc:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.f){s=$.kN().b
s=s.test(b)}else s=!1
if(s)return b
r=C.F.dP(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.iQ(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
l6:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
l7:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cR:function(a){if(a>=10)return""+a
return"0"+a},
ju:function(a){return new P.aL(1000*a)},
fs:function(a){if(typeof a=="number"||H.kg(a)||null==a)return J.a3(a)
if(typeof a=="string")return JSON.stringify(a)
return P.l9(a)},
f4:function(a){return new P.cH(a)},
jk:function(a){return new P.T(!1,null,null,a)},
jl:function(a,b,c){return new P.T(!0,a,b,c)},
kY:function(a,b){if(a==null)throw H.c(new P.T(!1,null,b,"Must not be null"))
return a},
du:function(a,b){return new P.bl(null,null,!0,a,b,"Value not in range")},
au:function(a,b,c,d,e){return new P.bl(b,c,!0,a,d,"Invalid value")},
iR:function(a,b,c){var s
if(typeof c!=="number")return H.G(c)
s=a>c
if(s)throw H.c(P.au(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.G(c)
s=b>c}else s=!0
if(s)throw H.c(P.au(b,a,c,"end",null))
return b}return c},
jL:function(a,b){if(a<0)throw H.c(P.au(a,0,null,b,null))
return a},
z:function(a,b,c,d,e){var s=e==null?J.aF(b):e
return new P.d0(s,!0,a,c,"Index out of range")},
q:function(a){return new P.dV(a)},
jU:function(a){return new P.dS(a)},
iS:function(a){return new P.bn(a)},
aJ:function(a){return new P.cN(a)},
O:function(a){return new P.eb(a)},
jc:function(a){H.mZ(a)},
b3:function b3(){},
aK:function aK(a,b){this.a=a
this.b=b},
Q:function Q(){},
aL:function aL(a){this.a=a},
fm:function fm(){},
fn:function fn(){},
y:function y(){},
cH:function cH(a){this.a=a},
dj:function dj(){},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bl:function bl(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
d0:function d0(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dV:function dV(a){this.a=a},
dS:function dS(a){this.a=a},
bn:function bn(a){this.a=a},
cN:function cN(a){this.a=a},
dm:function dm(){},
c9:function c9(){},
cP:function cP(a){this.a=a},
eb:function eb(a){this.a=a},
fA:function fA(a,b){this.a=a
this.b=b},
fC:function fC(){},
p:function p(){},
f:function f(){},
d1:function d1(){},
bW:function bW(){},
d8:function d8(){},
a0:function a0(){},
J:function J(){},
B:function B(){},
C:function C(){},
bo:function bo(a){this.a=a},
aC:function(a){var s,r,q,p,o
if(a==null)return null
s=P.jB(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.u)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
mH:function(a){var s={}
a.E(0,new P.ir(s))
return s},
ir:function ir(a){this.a=a},
cW:function cW(a,b){this.a=a
this.b=b},
fy:function fy(){},
fz:function fz(){},
ev:function ev(){},
a7:function a7(){},
bg:function bg(){},
d6:function d6(){},
bi:function bi(){},
dk:function dk(){},
h1:function h1(){},
bm:function bm(){},
dG:function dG(){},
j:function j(){},
bq:function bq(){},
dP:function dP(){},
ej:function ej(){},
ek:function ek(){},
er:function er(){},
es:function es(){},
eE:function eE(){},
eF:function eF(){},
eN:function eN(){},
eO:function eO(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(a){this.a=a},
cI:function cI(){},
am:function am(){},
dl:function dl(){},
e1:function e1(){},
dC:function dC(){},
eA:function eA(){},
eB:function eB(){}},W={
jj:function(){var s=document.createElement("a")
return s},
jq:function(){var s=document.createElement("canvas")
return s},
l8:function(a,b,c){var s,r=document.body
r.toString
s=C.k.T(r,a,b,c)
s.toString
r=new H.b0(new W.L(s),new W.fo())
return t.h.a(r.ga8(r))},
fp:function(a){return"wheel"},
bO:function(a){var s,r,q="element tag unavailable"
try{s=J.b5(a)
if(typeof s.gbW(a)=="string")q=s.gbW(a)}catch(r){H.ak(r)}return q},
ia:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k3:function(a,b,c,d){var s=W.ia(W.ia(W.ia(W.ia(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
M:function(a,b,c,d){var s=W.kj(new W.i9(c),t.D)
if(s!=null&&!0)J.kQ(a,b,s,!1)
return new W.ea(a,b,s,!1)},
k1:function(a){var s=W.jj(),r=window.location
s=new W.bv(new W.ig(s,r))
s.cl(a)
return s},
lL:function(a,b,c,d){return!0},
lM:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
k7:function(){var s=t.N
s=new W.eI(P.jC(C.q,s),P.bV(s),P.bV(s),P.bV(s),null)
s.co(null,new H.c_(C.q,new W.ij()),["TEMPLATE"],null)
return s},
kj:function(a,b){var s=$.a9
if(s===C.e)return a
return s.bw(a,b)},
k:function k(){},
f3:function f3(){},
cF:function cF(){},
cG:function cG(){},
b7:function b7(){},
cJ:function cJ(){},
aG:function aG(){},
aH:function aH(){},
a4:function a4(){},
fd:function fd(){},
x:function x(){},
bJ:function bJ(){},
fe:function fe(){},
Y:function Y(){},
ab:function ab(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
bK:function bK(){},
fk:function fk(){},
bL:function bL(){},
bM:function bM(){},
cS:function cS(){},
fl:function fl(){},
e2:function e2(a,b){this.a=a
this.b=b},
r:function r(){},
fo:function fo(){},
h:function h(){},
b:function b(){},
aM:function aM(){},
cU:function cU(){},
cV:function cV(){},
cX:function cX(){},
aN:function aN(){},
fD:function fD(){},
aO:function aO(){},
aR:function aR(){},
fO:function fO(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(a){this.a=a},
fV:function fV(){},
fW:function fW(a){this.a=a},
aT:function aT(){},
db:function db(){},
V:function V(){},
L:function L(a){this.a=a},
o:function o(){},
c5:function c5(){},
aV:function aV(){},
dr:function dr(){},
h7:function h7(){},
h8:function h8(a){this.a=a},
dx:function dx(){},
av:function av(){},
dA:function dA(){},
aW:function aW(){},
dB:function dB(){},
aX:function aX(){},
hk:function hk(){},
hl:function hl(a){this.a=a},
aw:function aw(){},
ca:function ca(){},
dH:function dH(){},
dI:function dI(){},
bp:function bp(){},
ax:function ax(){},
a8:function a8(){},
dJ:function dJ(){},
dK:function dK(){},
hq:function hq(){},
aY:function aY(){},
aZ:function aZ(){},
dO:function dO(){},
hu:function hu(){},
ah:function ah(){},
hN:function hN(){},
dY:function dY(){},
ay:function ay(){},
bt:function bt(){},
bu:function bu(){},
e3:function e3(){},
cc:function cc(){},
ef:function ef(){},
cg:function cg(){},
ez:function ez(){},
eG:function eG(){},
i6:function i6(){},
i7:function i7(a){this.a=a},
iJ:function iJ(a,b){this.a=a
this.$ti=b},
ea:function ea(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
i9:function i9(a){this.a=a},
iW:function iW(a){this.$ti=a},
bv:function bv(a){this.a=a},
v:function v(){},
c6:function c6(a){this.a=a},
fZ:function fZ(a){this.a=a},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
cm:function cm(){},
ih:function ih(){},
ii:function ii(){},
eI:function eI(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ij:function ij(){},
eH:function eH(){},
bR:function bR(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
a_:function a_(){},
ig:function ig(a,b){this.a=a
this.b=b},
eR:function eR(a){this.a=a
this.b=!1},
io:function io(a){this.a=a},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
ec:function ec(){},
ed:function ed(){},
eh:function eh(){},
ei:function ei(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
et:function et(){},
eu:function eu(){},
ew:function ew(){},
cn:function cn(){},
co:function co(){},
ex:function ex(){},
ey:function ey(){},
eD:function eD(){},
eJ:function eJ(){},
eK:function eK(){},
cq:function cq(){},
cr:function cr(){},
eL:function eL(){},
eM:function eM(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){}},K={
A:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.O("The given low and high character strings for a Range must have one and only one characters."))
s=C.b.as(a,0)
r=C.b.as(b,0)
if(s>r){q=r
r=s
s=q}return new K.h2(s,r)},
m:function(a){var s=new K.h9()
s.cg(a)
return s},
al:function al(){},
cZ:function cZ(){},
R:function R(){this.a=null},
h2:function h2(a,b){this.a=a
this.b=b},
h9:function h9(){this.a=null}},L={
hs:function(){var s=new L.hr()
s.a=new H.K(t.V)
s.b=new H.K(t.w)
s.c=P.bV(t.Q)
return s},
dD:function dD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dM:function dM(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a){this.b=a
this.c=null},
hr:function hr(){var _=this
_.d=_.c=_.b=_.a=null},
hv:function hv(a){this.b=a
this.a=this.c=null}},O={
js:function(){var s=new O.ba()
s.bb()
return s},
ba:function ba(){this.c=this.b=this.a=null},
c0:function c0(){this.b=this.a=null},
fi:function fi(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ho:function ho(){}},E={
ao:function(a,b){var s,r,q,p,o=new E.bc()
o.a=""
o.b=!0
s=O.js()
o.y=s
s.aF(o.ge6(),o.ge9())
o.dy=o.dx=o.db=o.cy=o.cx=o.ch=o.Q=o.z=null
s=o.c
if(s!=b){o.d=o.c=b
o.e=null
if(s!=null)s.gu().I(0,o.gbN())
r=o.c
if(r!=null)r.gu().n(0,o.gbN())
q=new D.D("shape",s,o.c)
q.b=!0
o.a4(q)}if(!J.F(o.r,a)){p=o.r
if(p!=null)p.gu().I(0,o.gbL())
a.gu().n(0,o.gbL())
o.r=a
q=new D.D("mover",p,a)
q.b=!0
o.a4(q)}return o},
lJ:function(){if(J.iF(window.navigator.vendor,"Google"))return C.w
if(J.iF(window.navigator.userAgent,"Firefox"))return C.l
var s=window.navigator.appVersion
if(J.b4(s).w(s,"Trident")||C.b.w(s,"Edge"))return C.m
if(J.iF(window.navigator.appName,"Microsoft"))return C.m
return C.x},
lK:function(){var s=window.navigator.appVersion
if(J.b4(s).w(s,"Win"))return C.Q
if(C.b.w(s,"Mac"))return C.R
if(C.b.w(s,"Linux"))return C.S
return C.T},
lv:function(a,b){var s=new E.h3(a)
s.cf(a,b)
return s},
lC:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.jQ(a,!0,!0,!0,!1)
s=W.jq()
r=s.style
r.width="100%"
r.height="100%"
J.kU(a).n(0,s)
return E.jQ(s,!0,!0,!0,!1)},
jQ:function(a,b,c,d,e){var s,r,q,p,o="mousemove",n=new E.dL(),m=t.z,l=C.G.c5(a,"webgl2",P.lh(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m))
if(l==null)H.N(P.O("Failed to get the rendering context for WebGL."))
n.b=a
n.c=l
n.e=E.lv(l,a)
l.getParameter(3379)
l.getParameter(34076)
m=new X.dW(a)
s=new X.fL()
s.d=P.bV(t.e)
m.b=s
s=new X.fX(m)
s.f=0
s.r=V.ds()
s.x=V.ds()
s.ch=s.Q=1
m.c=s
s=new X.fP(m)
s.r=0
s.x=V.ds()
s.cy=s.cx=s.ch=s.Q=1
m.d=s
s=new X.ht(m)
s.f=V.ds()
s.r=V.ds()
m.e=s
m.x=m.r=m.f=!1
m.y=null
m.z=[]
s=$.jx
if(s==null){r=E.lJ()
E.lK()
s=$.jx=new E.i8(r)}m.Q=s.a===C.l?0.16666666666666666:0.005555555555555556
q=m.z
p=document
q.push(W.M(p,"contextmenu",m.gcP(),!1))
m.z.push(W.M(a,"focus",m.gcV(),!1))
m.z.push(W.M(a,"blur",m.gcJ(),!1))
m.z.push(W.M(p,"keyup",m.gcZ(),!1))
m.z.push(W.M(p,"keydown",m.gcX(),!1))
m.z.push(W.M(a,"mousedown",m.gd1(),!1))
m.z.push(W.M(a,"mouseup",m.gd5(),!1))
m.z.push(W.M(a,o,m.gd3(),!1))
q=m.z
W.fp(a)
W.fp(a)
q.push(W.M(a,W.fp(a),m.gd7(),!1))
m.z.push(W.M(p,o,m.gcR(),!1))
m.z.push(W.M(p,"mouseup",m.gcT(),!1))
m.z.push(W.M(p,"pointerlockchange",m.gd9(),!1))
m.z.push(W.M(a,"touchstart",m.gdj(),!1))
m.z.push(W.M(a,"touchend",m.gdf(),!1))
m.z.push(W.M(a,"touchmove",m.gdh(),!1))
n.ch=!0
n.cx=!1
n.cy=new P.aK(Date.now(),!1)
n.db=0
n.bo()
return n},
fa:function fa(){},
bc:function bc(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
b8:function b8(a){this.b=a},
bj:function bj(a){this.b=a},
i8:function i8(a){this.a=a},
h3:function h3(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h4:function h4(a){this.a=a},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
dL:function dL(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.e=_.d=_.c=_.b=null},
hp:function hp(a){this.a=a}},Z={
lE:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.j3(c)),35044)
a.bindBuffer(b,null)
return new Z.dZ(b,s)},
a2:function(a){return new Z.dX(a)},
dZ:function dZ(a,b){this.a=a
this.b=b},
fb:function fb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
i1:function i1(a){this.a=a},
cK:function cK(a,b){this.a=a
this.b=null
this.c=b},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
dX:function dX(a){this.a=a}},D={
ac:function(){var s=new D.bP()
s.d=0
return s},
fc:function fc(){},
bP:function bP(){var _=this
_.d=_.c=_.b=_.a=null},
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
ad:function ad(){this.b=null},
be:function be(){this.b=null},
bf:function bf(){this.b=null},
D:function D(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null}},X={cL:function cL(a,b){this.a=a
this.b=b},d5:function d5(a,b){this.a=a
this.b=b},fL:function fL(){this.d=this.b=this.a=null},fP:function fP(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},fX:function fX(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ht:function ht(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dW:function dW(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
la:function(a){var s=new X.fB(),r=V.mF(1)
s.a=new V.bb(0,0,0,r)
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.jM
if(r==null){r=V.lu(0,0,1,1)
$.jM=r}s.r=r
return s},
iH:function iH(){},
fB:function fB(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dn:function dn(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hm:function hm(){}},V={
mF:function(a){var s
if(a<0)s=0
else s=a>1?1:a
return s},
je:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.c6(a-b,s)
return(a<0?a+s:a)+b},
w:function(a,b,c){if(a==null)return C.b.a5("null",c)
$.E().toString
return C.b.a5(C.d.bZ(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
iu:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=0,r=0;r<4;++r){q=V.w(a[r],b,c)
s=Math.max(s,q.length)
m.push(q)}for(p=m.length,o=p-1;o>=0;--o,p=n){if(o>=p)return H.e(m,o)
p=C.b.a5(m[o],s)
n=m.length
if(o>=n)return H.e(m,o)
m[o]=p}return m},
fR:function(){var s=$.jE
return s==null?$.jE=V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.da(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ds:function(){var s=$.jH
return s==null?$.jH=new V.as(0,0):s},
lu:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dv(a,b,c,d)},
hQ:function(){var s=$.jZ
return s==null?$.jZ=new V.H(0,0,0):s},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fr:function fr(){},
da:function da(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
as:function as(a,b){this.a=a
this.b=b},
at:function at(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b){this.a=a
this.b=b},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
n_:function(a){P.lD(C.I,new V.iD(a))},
ly:function(a){var s=new V.he()
s.cj(a,!0)
return s},
aI:function aI(){},
iD:function iD(a){this.a=a},
cQ:function cQ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cY:function cY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
d_:function d_(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dq:function dq(a){var _=this
_.a=a
_.d=_.c=_.b=null},
he:function he(){this.b=this.a=null},
hg:function hg(a){this.a=a},
hf:function hf(a){this.a=a},
hh:function hh(a){this.a=a}},U={
jt:function(a){var s=new U.bI()
s.a=a
return s},
bI:function bI(){this.b=this.a=null},
bd:function bd(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a6:function a6(){},
c8:function c8(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cT:function cT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
iV:function(a,b,c,d,e){var s=new A.hB(a,c,e)
s.f=d
P.iO(d,0,!1)
return s},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(a){this.a=a},
fj:function fj(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dy:function dy(){},
hz:function hz(){},
hI:function hI(a){this.a=a},
hA:function hA(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
hF:function hF(a,b,c){this.a=a
this.c=b
this.d=c},
hH:function hH(a,b,c){this.a=a
this.c=b
this.d=c},
hB:function hB(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
dQ:function dQ(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){this.a=a
this.c=b
this.d=c},
hG:function hG(a,b,c){this.a=a
this.c=b
this.d=c},
hJ:function hJ(a,b,c){this.a=a
this.c=b
this.d=c},
hK:function hK(a,b,c){this.a=a
this.c=b
this.d=c},
dR:function dR(a,b,c){this.a=a
this.c=b
this.d=c},
hL:function hL(a,b,c){this.a=a
this.c=b
this.d=c},
hM:function hM(a,b,c){this.a=a
this.c=b
this.d=c}},F={
n4:function(a,b){return F.mI(15,30,b,a,new F.iE())},
mI:function(a,b,c,d,e){var s,r=F.n1(a,b,new F.is(e,d,b,c))
if(r==null)return null
s=r.e
if(s!=null)++s.d
r.d.aX()
r.a.aX()
s=r.e
if(s!=null)s.ap(0)
r.e5(new F.hX(),new F.h_())
return r},
n1:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=new F.ha()
r=new F.hS(s)
r.b=!1
r.c=[]
s.a=r
r=new F.hd()
r.b=[]
s.b=r
r=new F.hc(s)
r.b=[]
s.c=r
r=new F.hb(s)
r.b=[]
s.d=r
q=[]
for(p=0;p<=b;++p){o=p/b
r=s.a
if(o<0)n=0
else n=o>1?1:o
m=r.bt(new V.bb(n,0,0,1),new V.as(o,1))
c.$3(m,o,0)
q.push(m.bz(e))}for(p=1;p<=a;++p){l=p/a
for(r=l>1,n=l<0,k=1-l,j=0;j<=b;++j){o=j/b
i=s.a
if(o<0)h=0
else h=o>1?1:o
if(n)g=0
else g=r?1:l
if(n)f=0
else f=r?1:l
m=i.bt(new V.bb(h,g,f,1),new V.as(o,k))
c.$3(m,o,l)
q.push(m.bz(e))}}s.d.dH(a+1,b+1,q)
return s},
fw:function(a,b,c){var s=new F.fv(),r=a.a
if(r==null)H.N(P.O("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.N(P.O("May not create a face with vertices attached to different shapes."))
s.dw(a)
s.dz(b)
s.dA(c)
s.a.a.d.b.push(s)
s.a.a.V()
return s},
k_:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.hR(),p=new F.i_()
p.b=[]
q.b=p
p=new F.hW()
p.b=[]
p.c=[]
q.c=p
p=new F.hT()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.kJ()
q.e=0
p=$.aD()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bD().a)!==0?e:r
q.x=(s&$.bC().a)!==0?b:r
q.y=(s&$.bE().a)!==0?f:r
q.z=(s&$.bF().a)!==0?g:r
q.Q=(s&$.kK().a)!==0?c:r
q.ch=(s&$.bG().a)!==0?i:0
q.cx=(s&$.bB().a)!==0?a:r
return q},
iE:function iE(){},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fv:function fv(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fx:function fx(){},
hi:function hi(){},
fM:function fM(){},
hy:function hy(){},
ha:function ha(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hb:function hb(a){this.a=a
this.b=null},
hc:function hc(a){this.a=a
this.b=null},
hd:function hd(){this.b=null},
hR:function hR(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i0:function i0(a){this.a=a},
hS:function hS(a){this.a=a
this.c=this.b=null},
hT:function hT(){this.d=this.c=this.b=null},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
hW:function hW(){this.c=this.b=null},
hY:function hY(){},
hX:function hX(){},
hZ:function hZ(){},
h_:function h_(){},
i_:function i_(){this.b=null}},R={
kq:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="testCanvas",a3=V.ly("Test 004"),a4=W.jq()
a4.className="pageLargeCanvas"
a4.id=a2
a3.a.appendChild(a4)
a3.bu(["Test of repeat use of a single mover and shape. There are 9 rings ","moving at the same speed, however the second one is attached to ","the first, the third to the second, and so on."])
a3.bu(["\xab[Back to Tests|../]"])
s=new U.c8()
s.r=s.f=s.e=s.d=s.c=s.b=s.a=0
s.sc1(0)
s.sbQ(0,0)
s.sbV(0)
s.sbC(0.1)
s.sbA(0.21)
s.sbB(0.32)
s.sbC(0.51)
s.sbA(0.71)
s.sbB(0.92)
r=new U.bd()
r.bb()
r.aF(r.gcH(),r.gdd())
r.e=null
r.f=V.fR()
r.r=0
r.n(0,U.jt(V.ar(0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1)))
r.n(0,s)
q=F.n4(2,0.2)
p=E.ao(r,q)
o=E.ao(r,q)
o.y.n(0,p)
n=E.ao(r,q)
n.y.n(0,o)
m=E.ao(r,q)
m.y.n(0,n)
l=E.ao(r,q)
l.y.n(0,m)
k=E.ao(r,q)
k.y.n(0,l)
j=E.ao(r,q)
j.y.n(0,k)
i=E.ao(r,q)
i.y.n(0,j)
h=E.ao(r,q)
h.y.n(0,i)
g=new O.fi()
g.b=1
g.c=10
g.f=g.e=g.d=!1
$.E().toString
if(!(Math.abs(-2)<1e-9)){g.b=3
f=new D.D("start",1,3)
f.b=!0
g.aQ(f)}f=g.c
$.E().toString
if(!(Math.abs(f-6)<1e-9)){g.c=6
f=new D.D("stop",f,6)
f.b=!0
g.aQ(f)}if(!g.d){g.d=!0
g.a=null
f=new D.D("grey",!1,!0)
f.b=!0
g.aQ(f)}e=new M.cT()
e.a=!0
f=O.js()
e.e=f
f.aF(e.gcL(),e.gcN())
e.y=e.x=e.r=e.f=null
d=X.la(null)
c=new X.dn()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.sbI(null)
f=c.c
$.E().toString
if(!(Math.abs(f-1.0471975511965976)<1e-9)){c.c=1.0471975511965976
f=new D.D("fov",f,1.0471975511965976)
f.b=!0
c.aa(f)}f=c.d
$.E().toString
if(!(Math.abs(f-0.1)<1e-9)){c.d=0.1
f=new D.D("near",f,0.1)
f.b=!0
c.aa(f)}f=c.e
$.E().toString
if(!(Math.abs(f-2000)<1e-9)){c.e=2000
f=new D.D("far",f,2000)
f.b=!0
c.aa(f)}f=e.b
if(f!==c){if(f!=null)f.gu().I(0,e.gX())
b=e.b
e.b=c
c.gu().n(0,e.gX())
f=new D.D("camera",b,e.b)
f.b=!0
e.a_(f)}f=e.c
if(f!==d){if(f!=null)f.gu().I(0,e.gX())
b=e.c
e.c=d
d.gu().n(0,e.gX())
f=new D.D("target",b,e.c)
f.b=!0
e.a_(f)}e.sbX(null)
e.sbX(g)
e.e.n(0,h)
e.b.sbI(U.jt(V.ar(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a=document.getElementById(a2)
if(a==null)H.N(P.O("Failed to find an element with the identifier, testCanvas."))
a0=E.lC(a,!0,!0,!0,!1)
f=a0.d
if(f!==e){if(f!=null)f.gu().I(0,a0.gbc())
a0.d=e
e.gu().n(0,a0.gbc())
a0.bd()}f=a0.Q
if(f==null)f=a0.Q=D.ac()
a1=f.b
f=a1==null?f.b=[]:a1
f.push(new R.iB(a3,g))
V.n_(a0)},
iB:function iB(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,R]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iM.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gK:function(a){return H.c7(a)},
h:function(a){return"Instance of '"+H.d(H.dt(a))+"'"}}
J.fI.prototype={
h:function(a){return String(a)},
gK:function(a){return a?519018:218159}}
J.bU.prototype={
q:function(a,b){return null==b},
h:function(a){return"null"},
gK:function(a){return 0}}
J.aQ.prototype={
gK:function(a){return 0},
h:function(a){return String(a)}}
J.dp.prototype={}
J.b_.prototype={}
J.a5.prototype={
h:function(a){var s=a[$.ky()]
if(s==null)return this.cc(a)
return"JavaScript function for "+H.d(J.a3(s))}}
J.Z.prototype={
b2:function(a,b){if(!!a.fixed$length)H.N(P.q("removeAt"))
if(b<0||b>=a.length)throw H.c(P.du(b,null))
return a.splice(b,1)[0]},
I:function(a,b){var s
if(!!a.fixed$length)H.N(P.q("remove"))
for(s=0;s<a.length;++s)if(J.F(a[s],b)){a.splice(s,1)
return!0}return!1},
S:function(a,b){var s,r
if(!!a.fixed$length)H.N(P.q("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.u)(b),++r)a.push(b[r])},
E:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aJ(a))}},
l:function(a,b){var s,r,q=P.iO(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.d(a[s])
if(s>=q.length)return H.e(q,s)
q[s]=r}return q.join(b)},
e2:function(a){return this.l(a,"")},
dZ:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aJ(a))}throw H.c(H.fH())},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gdY:function(a){if(a.length>0)return a[0]
throw H.c(H.fH())},
gaA:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.fH())},
bv:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aJ(a))}return!1},
w:function(a,b){var s
for(s=0;s<a.length;++s)if(J.F(a[s],b))return!0
return!1},
h:function(a){return P.iK(a,"[","]")},
gF:function(a){return new J.U(a,a.length)},
gK:function(a){return H.c7(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.N(P.q("set length"))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.bA(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.N(P.q("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bA(a,b))
a[b]=c},
$ii:1,
$if:1}
J.d3.prototype={}
J.U.prototype={
gv:function(a){return this.d},
p:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.u(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.aP.prototype={
ae:function(a,b){var s
if(typeof b!="number")throw H.c(H.b2(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaz(b)
if(this.gaz(a)===s)return 0
if(this.gaz(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaz:function(a){return a===0?1/a<0:a<0},
bE:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.q(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.q(""+a+".round()"))},
bZ:function(a,b){var s
if(b>20)throw H.c(P.au(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaz(a))return"-"+s
return s},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
c6:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ce:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bp(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.bp(a,b)},
bp:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.q("Result of truncating division is "+H.d(s)+": "+H.d(a)+" ~/ "+b))},
av:function(a,b){var s
if(a>0)s=this.dE(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dE:function(a,b){return b>31?0:a>>>b},
$iQ:1,
$iJ:1}
J.bT.prototype={$ip:1}
J.d2.prototype={}
J.ae.prototype={
aY:function(a,b){if(b<0)throw H.c(H.bA(a,b))
if(b>=a.length)H.N(H.bA(a,b))
return a.charCodeAt(b)},
as:function(a,b){if(b>=a.length)throw H.c(H.bA(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(typeof b!="string")throw H.c(P.jl(b,null,null))
return a+b},
aG:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
aq:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.du(b,null))
if(b>c)throw H.c(P.du(b,null))
if(c>a.length)throw H.c(P.du(c,null))
return a.substring(b,c)},
b9:function(a,b){return this.aq(a,b,null)},
ev:function(a){return a.toLowerCase()},
H:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.E)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
a5:function(a,b){var s=b-a.length
if(s<=0)return a
return this.H(" ",s)+a},
dN:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.au(c,0,s,null,null))
return H.ku(a,b,c)},
w:function(a,b){return this.dN(a,b,0)},
ae:function(a,b){var s
if(typeof b!="string")throw H.c(H.b2(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
h:function(a){return a},
gK:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gk:function(a){return a.length},
$iC:1}
H.l.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.b.aY(this.a,b)}}
H.i.prototype={}
H.bY.prototype={
gF:function(a){return new H.aq(this,this.gk(this))},
aD:function(a,b){return this.cb(0,b)}}
H.aq.prototype={
gv:function(a){var s=this.d
return s},
p:function(){var s,r=this,q=r.a,p=J.b4(q),o=p.gk(q)
if(r.b!=o)throw H.c(P.aJ(q))
s=r.c
if(typeof o!=="number")return H.G(o)
if(s>=o){r.d=null
return!1}r.d=p.t(q,s);++r.c
return!0}}
H.aS.prototype={
gF:function(a){return new H.bZ(J.aE(this.a),this.b)},
gk:function(a){return J.aF(this.a)},
t:function(a,b){return this.b.$1(J.f2(this.a,b))}}
H.bN.prototype={$ii:1}
H.bZ.prototype={
p:function(){var s=this,r=s.b
if(r.p()){s.a=s.c.$1(r.gv(r))
return!0}s.a=null
return!1},
gv:function(a){var s=this.a
return s}}
H.c_.prototype={
gk:function(a){return J.aF(this.a)},
t:function(a,b){return this.b.$1(J.f2(this.a,b))}}
H.b0.prototype={
gF:function(a){return new H.e_(J.aE(this.a),this.b)}}
H.e_.prototype={
p:function(){var s,r
for(s=this.a,r=this.b;s.p();)if(r.$1(s.gv(s)))return!0
return!1},
gv:function(a){var s=this.a
return s.gv(s)}}
H.bQ.prototype={}
H.dU.prototype={
m:function(a,b,c){throw H.c(P.q("Cannot modify an unmodifiable list"))}}
H.br.prototype={}
H.hw.prototype={
U:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.di.prototype={
h:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.d4.prototype={
h:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.d(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.d(r.a)+")"
return q+p+"' on '"+s+"' ("+H.d(r.a)+")"}}
H.dT.prototype={
h:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.h0.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.eC.prototype={
h:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.b9.prototype={
h:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.kw(r==null?"unknown":r)+"'"},
gez:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hn.prototype={}
H.hj.prototype={
h:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.kw(s)+"'"}}
H.bH.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bH))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gK:function(a){var s,r=this.c
if(r==null)s=H.c7(this.a)
else s=typeof r!=="object"?J.X(r):H.c7(r)
return(s^H.c7(this.b))>>>0},
h:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.dt(s))+"'")}}
H.dw.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.K.prototype={
gk:function(a){return this.a},
gM:function(a){return new H.ap(this)},
gey:function(a){return H.li(new H.ap(this),new H.fK(this))},
dO:function(a,b){var s=this.b
if(s==null)return!1
return this.cz(s,b)},
j:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.at(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.at(p,b)
q=r==null?n:r.b
return q}else return o.e0(b)},
e0:function(a){var s,r,q=this.d
if(q==null)return null
s=this.bn(q,J.X(a)&0x3ffffff)
r=this.bF(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.bh(s==null?m.b=m.aO():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.bh(r==null?m.c=m.aO():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aO()
p=J.X(b)&0x3ffffff
o=m.bn(q,p)
if(o==null)m.aS(q,p,[m.aP(b,c)])
else{n=m.bF(o,b)
if(n>=0)o[n].b=c
else o.push(m.aP(b,c))}}},
E:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aJ(s))
r=r.c}},
bh:function(a,b,c){var s=this.at(a,b)
if(s==null)this.aS(a,b,this.aP(b,c))
else s.b=c},
cG:function(){this.r=this.r+1&67108863},
aP:function(a,b){var s,r=this,q=new H.fN(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.cG()
return q},
bF:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.F(a[r].a,b))return r
return-1},
h:function(a){return P.jD(this)},
at:function(a,b){return a[b]},
bn:function(a,b){return a[b]},
aS:function(a,b,c){a[b]=c},
cD:function(a,b){delete a[b]},
cz:function(a,b){return this.at(a,b)!=null},
aO:function(){var s="<non-identifier-key>",r=Object.create(null)
this.aS(r,s,r)
this.cD(r,s)
return r}}
H.fK.prototype={
$1:function(a){return this.a.j(0,a)},
$S:function(){return H.mf(this.a).a1("2(1)")}}
H.fN.prototype={}
H.ap.prototype={
gk:function(a){return this.a.a},
gF:function(a){var s=this.a,r=new H.d7(s,s.r)
r.c=s.e
return r}}
H.d7.prototype={
gv:function(a){return this.d},
p:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aJ(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.iw.prototype={
$1:function(a){return this.a(a)},
$S:11}
H.ix.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iy.prototype={
$1:function(a){return this.a(a)}}
H.fJ.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.c3.prototype={}
H.bh.prototype={
gk:function(a){return a.length},
$in:1}
H.aU.prototype={
j:function(a,b){H.ai(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ai(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.c2.prototype={
m:function(a,b,c){H.ai(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.dc.prototype={
j:function(a,b){H.ai(b,a,a.length)
return a[b]}}
H.dd.prototype={
j:function(a,b){H.ai(b,a,a.length)
return a[b]}}
H.de.prototype={
j:function(a,b){H.ai(b,a,a.length)
return a[b]}}
H.df.prototype={
j:function(a,b){H.ai(b,a,a.length)
return a[b]}}
H.dg.prototype={
j:function(a,b){H.ai(b,a,a.length)
return a[b]}}
H.c4.prototype={
gk:function(a){return a.length},
j:function(a,b){H.ai(b,a,a.length)
return a[b]}}
H.dh.prototype={
gk:function(a){return a.length},
j:function(a,b){H.ai(b,a,a.length)
return a[b]}}
H.ch.prototype={}
H.ci.prototype={}
H.cj.prototype={}
H.ck.prototype={}
H.a1.prototype={
a1:function(a){return H.eQ(v.typeUniverse,this,a)},
bi:function(a){return H.m4(v.typeUniverse,this,a)}}
H.ee.prototype={}
H.e9.prototype={
h:function(a){return this.a}}
H.ct.prototype={}
P.i3.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:12}
P.i2.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.i4.prototype={
$0:function(){this.a.$0()}}
P.i5.prototype={
$0:function(){this.a.$0()}}
P.cs.prototype={
cp:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bz(new P.il(this,b),0),a)
else throw H.c(P.q("`setTimeout()` not found."))},
cq:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bz(new P.ik(this,a,Date.now(),b),0),a)
else throw H.c(P.q("Periodic timer."))},
$icb:1}
P.il.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.ik.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.ce(s,o)}q.c=p
r.d.$1(q)}}
P.bw.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.b1.prototype={
gv:function(a){var s=this.c
if(s==null)return this.b
return s.gv(s)},
p:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.p())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bw){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aE(s)
if(o instanceof P.b1){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cp.prototype={
gF:function(a){return new P.b1(this.a())}}
P.e0.prototype={}
P.dE.prototype={}
P.dF.prototype={}
P.cb.prototype={}
P.ip.prototype={}
P.iq.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.a3(this.b)
throw s}}
P.ic.prototype={
ep:function(a){var s,r,q,p=null
try{if(C.e===$.a9){a.$0()
return}P.ms(p,p,this,a)}catch(q){s=H.ak(q)
r=H.j9(q)
P.ki(p,p,this,s,r)}},
eq:function(a,b){var s,r,q,p=null
try{if(C.e===$.a9){a.$1(b)
return}P.mt(p,p,this,a,b)}catch(q){s=H.ak(q)
r=H.j9(q)
P.ki(p,p,this,s,r)}},
er:function(a,b){return this.eq(a,b,t.z)},
dL:function(a){return new P.id(this,a)},
bw:function(a,b){return new P.ie(this,a,b)}}
P.id.prototype={
$0:function(){return this.a.ep(this.b)}}
P.ie.prototype={
$1:function(a){return this.a.er(this.b,a)},
$S:function(){return this.c.a1("~(0)")}}
P.cd.prototype={
gF:function(a){var s=new P.ce(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
w:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.cw(b)
return r}},
cw:function(a){var s=this.d
if(s==null)return!1
return this.aM(s[this.aJ(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bj(s==null?q.b=P.iX():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bj(r==null?q.c=P.iX():r,b)}else return q.cs(0,b)},
cs:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.iX()
s=q.aJ(b)
r=p[s]
if(r==null)p[s]=[q.aI(b)]
else{if(q.aM(r,b)>=0)return!1
r.push(q.aI(b))}return!0},
I:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.dm(this.c,b)
else return this.dl(0,b)},
dl:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.aJ(b)
r=n[s]
q=o.aM(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.br(p)
return!0},
bj:function(a,b){if(a[b]!=null)return!1
a[b]=this.aI(b)
return!0},
dm:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.br(s)
delete a[b]
return!0},
bk:function(){this.r=1073741823&this.r+1},
aI:function(a){var s,r=this,q=new P.ib(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.bk()
return q},
br:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.bk()},
aJ:function(a){return J.X(a)&1073741823},
aM:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.F(a[r].a,b))return r
return-1}}
P.ib.prototype={}
P.ce.prototype={
gv:function(a){return this.d},
p:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aJ(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.bS.prototype={}
P.bX.prototype={$ii:1,$if:1}
P.t.prototype={
gF:function(a){return new H.aq(a,this.gk(a))},
t:function(a,b){return this.j(a,b)},
gbG:function(a){return this.gk(a)===0},
eu:function(a,b){var s,r,q,p,o=this
if(o.gbG(a)){s=J.jz(0)
return s}r=o.j(a,0)
q=P.iO(o.gk(a),r,!0)
p=1
while(!0){s=o.gk(a)
if(typeof s!=="number")return H.G(s)
if(!(p<s))break
s=o.j(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s;++p}return q},
es:function(a){return this.eu(a,!0)},
h:function(a){return P.iK(a,"[","]")}}
P.d9.prototype={}
P.fQ.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.d(a)
r.a=s+": "
r.a+=H.d(b)},
$S:13}
P.af.prototype={
E:function(a,b){var s,r
for(s=J.aE(this.gM(a));s.p();){r=s.gv(s)
b.$2(r,this.j(a,r))}},
gk:function(a){return J.aF(this.gM(a))},
h:function(a){return P.jD(a)}}
P.cl.prototype={
S:function(a,b){var s
for(s=J.aE(b);s.p();)this.n(0,s.gv(s))},
h:function(a){return P.iK(this,"{","}")},
t:function(a,b){var s,r,q,p="index"
P.kY(b,p)
P.jL(b,p)
for(s=P.lP(this,this.r),r=0;s.p();){q=s.d
if(b===r)return q;++r}throw H.c(P.z(b,this,p,null,r))},
$ii:1,
$if:1}
P.cf.prototype={}
P.cM.prototype={}
P.cO.prototype={}
P.fq.prototype={}
P.fF.prototype={
h:function(a){return this.a}}
P.fE.prototype={
cA:function(a,b,c){var s,r,q,p,o,n,m=null
for(s=this.a,r=s.e,q=s.d,s=s.c,p=b,o=m;p<c;++p){if(p>=a.length)return H.e(a,p)
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
default:n=m}if(n!=null){if(o==null)o=new P.bo("")
if(p>b)o.a+=C.b.aq(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.kW(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.hO.prototype={}
P.hP.prototype={
dP:function(a){var s,r,q,p=null,o=P.iR(0,p,a.length)
if(o==null)throw H.c(new P.bl(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.im(r)
if(q.cF(a,0,o)!==o){C.b.aY(a,o-1)
q.aU()}return new Uint8Array(r.subarray(0,H.m9(0,q.b,r.length)))}}
P.im.prototype={
aU:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
dF:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.e(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.e(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.e(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.e(r,p)
r[p]=128|s&63
return!0}else{n.aU()
return!1}},
cF:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.aY(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.as(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.dF(p,C.b.as(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.aU()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.e(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.e(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.e(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.e(s,o)
s[o]=128|p&63}}}return q}}
P.b3.prototype={}
P.aK.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aK&&this.a===b.a&&!0},
ae:function(a,b){return C.c.ae(this.a,b.a)},
gK:function(a){var s=this.a
return(s^C.c.av(s,30))&1073741823},
h:function(a){var s=this,r=P.l6(H.lq(s)),q=P.cR(H.lo(s)),p=P.cR(H.lk(s)),o=P.cR(H.ll(s)),n=P.cR(H.ln(s)),m=P.cR(H.lp(s)),l=P.l7(H.lm(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.Q.prototype={}
P.aL.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aL&&this.a===b.a},
gK:function(a){return C.c.gK(this.a)},
ae:function(a,b){return C.c.ae(this.a,b.a)},
h:function(a){var s,r,q,p=new P.fn(),o=this.a
if(o<0)return"-"+new P.aL(0-o).h(0)
s=p.$1(C.c.Y(o,6e7)%60)
r=p.$1(C.c.Y(o,1e6)%60)
q=new P.fm().$1(o%1e6)
return""+C.c.Y(o,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
P.fm.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fn.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.y.prototype={}
P.cH.prototype={
h:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.fs(s)
return"Assertion failed"}}
P.dj.prototype={
h:function(a){return"Throw of null."}}
P.T.prototype={
gaL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaK:function(){return""},
h:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gaL()+o+m
if(!q.a)return l
s=q.gaK()
r=P.fs(q.b)
return l+s+": "+r}}
P.bl.prototype={
gaL:function(){return"RangeError"},
gaK:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.d(q):""
else if(q==null)s=": Not greater than or equal to "+H.d(r)
else if(q>r)s=": Not in inclusive range "+H.d(r)+".."+H.d(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.d(r)
return s}}
P.d0.prototype={
gaL:function(){return"RangeError"},
gaK:function(){var s,r=this.b
if(typeof r!=="number")return r.a7()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.d(s)},
gk:function(a){return this.f}}
P.dV.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.dS.prototype={
h:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bn.prototype={
h:function(a){return"Bad state: "+this.a}}
P.cN.prototype={
h:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fs(s)+"."}}
P.dm.prototype={
h:function(a){return"Out of Memory"},
$iy:1}
P.c9.prototype={
h:function(a){return"Stack Overflow"},
$iy:1}
P.cP.prototype={
h:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.eb.prototype={
h:function(a){return"Exception: "+this.a}}
P.fA.prototype={
h:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.aq(q,0,75)+"..."
return r+"\n"+q}}
P.fC.prototype={}
P.p.prototype={}
P.f.prototype={
aD:function(a,b){return new H.b0(this,b)},
gk:function(a){var s,r=this.gF(this)
for(s=0;r.p();)++s
return s},
ga8:function(a){var s,r=this.gF(this)
if(!r.p())throw H.c(H.fH())
s=r.gv(r)
if(r.p())throw H.c(H.lc())
return s},
t:function(a,b){var s,r,q
P.jL(b,"index")
for(s=this.gF(this),r=0;s.p();){q=s.gv(s)
if(b===r)return q;++r}throw H.c(P.z(b,this,"index",null,r))},
h:function(a){return P.lb(this,"(",")")}}
P.d1.prototype={}
P.bW.prototype={$ii:1,$if:1}
P.d8.prototype={}
P.a0.prototype={
gK:function(a){return P.B.prototype.gK.call(C.L,this)},
h:function(a){return"null"}}
P.J.prototype={}
P.B.prototype={constructor:P.B,$iB:1,
q:function(a,b){return this===b},
gK:function(a){return H.c7(this)},
h:function(a){return"Instance of '"+H.d(H.dt(this))+"'"},
toString:function(){return this.h(this)}}
P.C.prototype={}
P.bo.prototype={
gk:function(a){return this.a.length},
h:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.k.prototype={}
W.f3.prototype={
gk:function(a){return a.length}}
W.cF.prototype={
h:function(a){return String(a)}}
W.cG.prototype={
h:function(a){return String(a)}}
W.b7.prototype={$ib7:1}
W.cJ.prototype={}
W.aG.prototype={$iaG:1}
W.aH.prototype={
c5:function(a,b,c){var s=a.getContext(b,P.mH(c))
return s},
$iaH:1}
W.a4.prototype={
gk:function(a){return a.length}}
W.fd.prototype={
gk:function(a){return a.length}}
W.x.prototype={$ix:1}
W.bJ.prototype={
gk:function(a){return a.length}}
W.fe.prototype={}
W.Y.prototype={}
W.ab.prototype={}
W.ff.prototype={
gk:function(a){return a.length}}
W.fg.prototype={
gk:function(a){return a.length}}
W.fh.prototype={
gk:function(a){return a.length}}
W.bK.prototype={}
W.fk.prototype={
h:function(a){return String(a)}}
W.bL.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.bM.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gah(a))+" x "+H.d(this.gaf(a))},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.b5(b)
s=a.left==s.gbH(b)&&a.top==s.gc_(b)&&this.gah(a)==s.gah(b)&&this.gaf(a)==s.gaf(b)}else s=!1
return s},
gK:function(a){return W.k3(J.X(a.left),J.X(a.top),J.X(this.gah(a)),J.X(this.gaf(a)))},
gaf:function(a){return a.height},
gbH:function(a){return a.left},
gc_:function(a){return a.top},
gah:function(a){return a.width},
$ia7:1}
W.cS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.fl.prototype={
gk:function(a){return a.length}}
W.e2.prototype={
gbG:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
j:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gF:function(a){var s=this.es(this)
return new J.U(s,s.length)}}
W.r.prototype={
gdK:function(a){return new W.i7(a)},
gbx:function(a){return new W.e2(a,a.children)},
h:function(a){return a.localName},
T:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.jw
if(s==null){s=[]
r=new W.c6(s)
s.push(W.k1(null))
s.push(W.k7())
$.jw=r
d=r}else d=s
s=$.jv
if(s==null){s=new W.eR(d)
$.jv=s
c=s}else{s.a=d
c=s}}if($.an==null){s=document
r=s.implementation.createHTMLDocument("")
$.an=r
$.iI=r.createRange()
r=$.an.createElement("base")
t.y.a(r)
r.href=s.baseURI
$.an.head.appendChild(r)}s=$.an
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.an
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.an.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.O,a.tagName)){$.iI.selectNodeContents(q)
s=$.iI
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.an.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.an.body)J.ji(q)
c.b6(p)
document.adoptNode(p)
return p},
dQ:function(a,b,c){return this.T(a,b,c,null)},
c8:function(a,b){a.textContent=null
a.appendChild(this.T(a,b,null,null))},
gbW:function(a){return a.tagName},
$ir:1}
W.fo.prototype={
$1:function(a){return t.h.b(a)}}
W.h.prototype={$ih:1}
W.b.prototype={
dG:function(a,b,c,d){if(c!=null)this.ct(a,b,c,!1)},
ct:function(a,b,c,d){return a.addEventListener(b,H.bz(c,1),!1)},
$ib:1}
W.aM.prototype={$iaM:1}
W.cU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.cV.prototype={
gk:function(a){return a.length}}
W.cX.prototype={
gk:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.fD.prototype={
gk:function(a){return a.length}}
W.aO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.aR.prototype={$iaR:1}
W.fO.prototype={
h:function(a){return String(a)}}
W.fS.prototype={
gk:function(a){return a.length}}
W.fT.prototype={
j:function(a,b){return P.aC(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aC(s.value[1]))}},
gM:function(a){var s=[]
this.E(a,new W.fU(s))
return s},
gk:function(a){return a.size}}
W.fU.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fV.prototype={
j:function(a,b){return P.aC(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aC(s.value[1]))}},
gM:function(a){var s=[]
this.E(a,new W.fW(s))
return s},
gk:function(a){return a.size}}
W.fW.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aT.prototype={$iaT:1}
W.db.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.V.prototype={$iV:1}
W.L.prototype={
ga8:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.iS("No elements"))
if(r>1)throw H.c(P.iS("More than one element"))
s=s.firstChild
s.toString
return s},
S:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b])},
gF:function(a){var s=this.a.childNodes
return new W.bR(s,s.length)},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.o.prototype={
ek:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
en:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.kP(s,b,a)}catch(q){H.ak(q)}return a},
h:function(a){var s=a.nodeValue
return s==null?this.ca(a):s},
ds:function(a,b,c){return a.replaceChild(b,c)},
$io:1}
W.c5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.aV.prototype={
gk:function(a){return a.length},
$iaV:1}
W.dr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.h7.prototype={
j:function(a,b){return P.aC(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aC(s.value[1]))}},
gM:function(a){var s=[]
this.E(a,new W.h8(s))
return s},
gk:function(a){return a.size}}
W.h8.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dx.prototype={
gk:function(a){return a.length}}
W.av.prototype={$iav:1}
W.dA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.aW.prototype={$iaW:1}
W.dB.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.aX.prototype={
gk:function(a){return a.length},
$iaX:1}
W.hk.prototype={
j:function(a,b){return a.getItem(H.j2(b))},
E:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gM:function(a){var s=[]
this.E(a,new W.hl(s))
return s},
gk:function(a){return a.length}}
W.hl.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.ca.prototype={
T:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
s=W.l8("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.L(r).S(0,new W.L(s))
return r}}
W.dH.prototype={
T:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.t.T(s.createElement("table"),b,c,d)
s.toString
s=new W.L(s)
q=s.ga8(s)
q.toString
s=new W.L(q)
p=s.ga8(s)
r.toString
p.toString
new W.L(r).S(0,new W.L(p))
return r}}
W.dI.prototype={
T:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.t.T(s.createElement("table"),b,c,d)
s.toString
s=new W.L(s)
q=s.ga8(s)
r.toString
q.toString
new W.L(r).S(0,new W.L(q))
return r}}
W.bp.prototype={$ibp:1}
W.ax.prototype={$iax:1}
W.a8.prototype={$ia8:1}
W.dJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.dK.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.hq.prototype={
gk:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.aZ.prototype={$iaZ:1}
W.dO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.hu.prototype={
gk:function(a){return a.length}}
W.ah.prototype={}
W.hN.prototype={
h:function(a){return String(a)}}
W.dY.prototype={
gk:function(a){return a.length}}
W.ay.prototype={
gdT:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.q("deltaY is not supported"))},
gdS:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.q("deltaX is not supported"))},
$iay:1}
W.bt.prototype={
dt:function(a,b){return a.requestAnimationFrame(H.bz(b,1))},
cE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bu.prototype={$ibu:1}
W.e3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.cc.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.b5(b)
s=a.left==s.gbH(b)&&a.top==s.gc_(b)&&a.width==s.gah(b)&&a.height==s.gaf(b)}else s=!1
return s},
gK:function(a){return W.k3(J.X(a.left),J.X(a.top),J.X(a.width),J.X(a.height))},
gaf:function(a){return a.height},
gah:function(a){return a.width}}
W.ef.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.cg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.ez.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.eG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$in:1,
$if:1}
W.i6.prototype={
E:function(a,b){var s,r,q,p,o
for(s=this.gM(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.u)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
gM:function(a){var s,r,q,p,o=this.a.attributes,n=[]
for(s=o.length,r=t.x,q=0;q<s;++q){if(q>=o.length)return H.e(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.i7.prototype={
j:function(a,b){return this.a.getAttribute(H.j2(b))},
gk:function(a){return this.gM(this).length}}
W.iJ.prototype={}
W.ea.prototype={}
W.i9.prototype={
$1:function(a){return this.a.$1(a)}}
W.iW.prototype={}
W.bv.prototype={
cl:function(a){var s
if($.eg.a===0){for(s=0;s<262;++s)$.eg.m(0,C.N[s],W.mP())
for(s=0;s<12;++s)$.eg.m(0,C.i[s],W.mQ())}},
ad:function(a){return $.kM().w(0,W.bO(a))},
Z:function(a,b,c){var s=$.eg.j(0,H.d(W.bO(a))+"::"+b)
if(s==null)s=$.eg.j(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$ia_:1}
W.v.prototype={
gF:function(a){return new W.bR(a,this.gk(a))}}
W.c6.prototype={
ad:function(a){return C.a.bv(this.a,new W.fZ(a))},
Z:function(a,b,c){return C.a.bv(this.a,new W.fY(a,b,c))},
$ia_:1}
W.fZ.prototype={
$1:function(a){return a.ad(this.a)}}
W.fY.prototype={
$1:function(a){return a.Z(this.a,this.b,this.c)}}
W.cm.prototype={
co:function(a,b,c,d){var s,r,q
this.a.S(0,c)
s=b.aD(0,new W.ih())
r=b.aD(0,new W.ii())
this.b.S(0,s)
q=this.c
q.S(0,C.P)
q.S(0,r)},
ad:function(a){return this.a.w(0,W.bO(a))},
Z:function(a,b,c){var s=this,r=W.bO(a),q=s.c
if(q.w(0,H.d(r)+"::"+b))return s.d.dI(c)
else if(q.w(0,"*::"+b))return s.d.dI(c)
else{q=s.b
if(q.w(0,H.d(r)+"::"+b))return!0
else if(q.w(0,"*::"+b))return!0
else if(q.w(0,H.d(r)+"::*"))return!0
else if(q.w(0,"*::*"))return!0}return!1},
$ia_:1}
W.ih.prototype={
$1:function(a){return!C.a.w(C.i,a)}}
W.ii.prototype={
$1:function(a){return C.a.w(C.i,a)}}
W.eI.prototype={
Z:function(a,b,c){if(this.cd(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.w(0,b)
return!1}}
W.ij.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.eH.prototype={
ad:function(a){var s
if(t.Y.b(a))return!1
s=t.u.b(a)
if(s&&W.bO(a)==="foreignObject")return!1
if(s)return!0
return!1},
Z:function(a,b,c){if(b==="is"||C.b.aG(b,"on"))return!1
return this.ad(a)},
$ia_:1}
W.bR.prototype={
p:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.kO(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gv:function(a){return this.d}}
W.a_.prototype={}
W.ig.prototype={}
W.eR.prototype={
b6:function(a){var s=this,r=new W.io(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
aj:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.ji(a)
else b.removeChild(a)},
dv:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.kT(a)
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
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.ak(p)}r="element unprintable"
try{r=J.a3(a)}catch(p){H.ak(p)}try{q=W.bO(a)
this.du(a,b,n,r,q,m,l)}catch(p){if(H.ak(p) instanceof P.T)throw p
else{this.aj(a,b)
window
o="Removing corrupted element "+H.d(r)
if(typeof console!="undefined")window.console.warn(o)}}},
du:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.aj(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.ad(a)){m.aj(a,b)
window
s="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.Z(a,"is",g)){m.aj(a,b)
window
s="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}r=f.gM(f).slice(0)
for(q=f.gM(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.e(r,q)
p=r[q]
o=m.a
n=J.kX(p)
H.j2(p)
if(!o.Z(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.d(e)+" "+p+'="'+H.d(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.f.b(a))m.b6(a.content)}}
W.io.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.dv(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aj(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.iS("Corrupt HTML")
throw H.c(q)}}catch(o){H.ak(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ew.prototype={}
W.cn.prototype={}
W.co.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eD.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.cq.prototype={}
W.cr.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
P.ir.prototype={
$2:function(a,b){this.a[a]=b},
$S:14}
P.cW.prototype={
gau:function(){return new H.aS(new H.b0(this.b,new P.fy()),new P.fz())},
m:function(a,b,c){var s=this.gau()
J.kV(s.b.$1(J.f2(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aF(this.gau().a)},
j:function(a,b){var s=this.gau()
return s.b.$1(J.f2(s.a,b))},
gF:function(a){var s=P.iP(this.gau(),!1)
return new J.U(s,s.length)}}
P.fy.prototype={
$1:function(a){return t.h.b(a)}}
P.fz.prototype={
$1:function(a){return t.h.a(a)}}
P.ev.prototype={}
P.a7.prototype={}
P.bg.prototype={$ibg:1}
P.d6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){return this.j(a,b)},
$ii:1,
$if:1}
P.bi.prototype={$ibi:1}
P.dk.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){return this.j(a,b)},
$ii:1,
$if:1}
P.h1.prototype={
gk:function(a){return a.length}}
P.bm.prototype={$ibm:1}
P.dG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){return this.j(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gbx:function(a){return new P.cW(a,new W.L(a))},
T:function(a,b,c,d){var s,r,q,p,o,n=[]
n.push(W.k1(null))
n.push(W.k7())
n.push(new W.eH())
c=new W.eR(new W.c6(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.k.dQ(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.L(q)
o=n.ga8(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$ij:1}
P.bq.prototype={$ibq:1}
P.dP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){return this.j(a,b)},
$ii:1,
$if:1}
P.ej.prototype={}
P.ek.prototype={}
P.er.prototype={}
P.es.prototype={}
P.eE.prototype={}
P.eF.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.f7.prototype={
gk:function(a){return a.length}}
P.f8.prototype={
j:function(a,b){return P.aC(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aC(s.value[1]))}},
gM:function(a){var s=[]
this.E(a,new P.f9(s))
return s},
gk:function(a){return a.size}}
P.f9.prototype={
$2:function(a,b){return this.a.push(a)}}
P.cI.prototype={
gk:function(a){return a.length}}
P.am.prototype={}
P.dl.prototype={
gk:function(a){return a.length}}
P.e1.prototype={}
P.dC.prototype={
gk:function(a){return a.length},
j:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
s=P.aC(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.q("Cannot assign element of immutable List."))},
t:function(a,b){return this.j(a,b)},
$ii:1,
$if:1}
P.eA.prototype={}
P.eB.prototype={}
K.al.prototype={
a3:function(a,b){return!0},
h:function(a){return"all"}}
K.cZ.prototype={
a3:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)if(s[q].a3(0,b))return!0
return!1},
h:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.u)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.h(0)}return q}}
K.R.prototype={
a3:function(a,b){return!this.c9(0,b)},
h:function(a){return"!["+this.ba(0)+"]"}}
K.h2.prototype={
a3:function(a,b){if(typeof b!=="number")return H.G(b)
return this.a<=b&&this.b>=b},
h:function(a){var s=H.iQ(this.a),r=H.iQ(this.b)
return s+".."+r}}
K.h9.prototype={
cg:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.O("May not create a Set with zero characters."))
s=new H.K(t.E)
for(r=new H.aq(a,a.gk(a));r.p();){q=r.d
s.m(0,q,!0)}p=P.iP(new H.ap(s),!0)
if(!!p.immutable$list)H.N(P.q("sort"))
H.lB(p,J.mh())
this.a=p},
a3:function(a,b){return C.a.w(this.a,b)},
h:function(a){return P.iT(this.a)}}
L.dD.prototype={
l:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.hv(this.a.i(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
dX:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
if(p.a3(0,a))return p}return null},
h:function(a){return this.b},
bq:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.w(0,l))m+=" (consume)"
for(l=new H.ap(n.d.c),l=l.gF(l);l.p();){r=l.d
m+="\n"
q=n.d.c.j(0,r)
r=m+("  -- "+H.d(r)+" => ["+H.d(q)+"]")
m=s.c.w(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.u)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.h(0))}return m.charCodeAt(0)==0?m:m}}
L.dM.prototype={
h:function(a){var s=H.jd(this.b,"\n","\\n"),r=H.jd(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.dN.prototype={
a6:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.u)(c),++r){q=c[r]
this.c.m(0,q,b)}},
h:function(a){return this.b}}
L.hr.prototype={
i:function(a,b){var s=this.a.j(0,b)
if(s==null){s=new L.dD(this,b)
s.c=[]
this.a.m(0,b,s)}return s},
C:function(a){var s=this.b.j(0,a)
if(s==null){s=new L.dN(a)
s.c=new H.K(t.i)
this.b.m(0,a,s)}return s},
b5:function(a){return this.ew(a)},
ew:function(a){var s=this
return P.mp(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$b5(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.b2(a0,0)
else{if(!r.p()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.dX(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.iT(b)
throw H.c(P.O("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.N(P.q("removeRange"))
P.iR(0,k,b.length)
b.splice(0,k-0)
C.a.S(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.w(0,n.a)?7:8
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
if(d.d!=null){g=P.iT(c)
f=d.d
e=f.c.j(0,g)
n=new L.dM(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.w(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.lN()
case 1:return P.lO(o)}}},t.j)},
h:function(a){var s,r=new P.bo(""),q=this.d
if(q!=null)r.a=q.bq()+"\n"
for(q=this.a,q=q.gey(q),q=new H.bZ(J.aE(q.a),q.b);q.p();){s=q.a
if(s!=this.d)r.a+=s.bq()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.hv.prototype={
h:function(a){return this.b.b+": "+this.ba(0)}}
O.ba.prototype={
bb:function(){this.a=[]
this.c=this.b=null},
aF:function(a,b){this.b=null
this.c=a},
dc:function(a){return!0},
ck:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gk:function(a){return this.a.length},
gF:function(a){var s=this.a
return new J.U(s,s.length)},
t:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
n:function(a,b){var s,r
if(this.dc([b])){s=this.a
r=s.length
s.push(b)
this.ck(r,[b])}},
$if:1}
O.c0.prototype={
gk:function(a){return this.a.length},
gu:function(){var s=this.b
return s==null?this.b=D.ac():s},
a9:function(){var s=this.b
if(s!=null)s.P(null)},
gam:function(a){var s=this.a
if(s.length>0)return C.a.gaA(s)
else return V.fR()},
bS:function(a){var s=this.a
if(a==null)s.push(V.fR())
else s.push(a)
this.a9()},
b1:function(){var s=this.a
if(s.length>0){s.pop()
this.a9()}}}
E.fa.prototype={}
E.bc.prototype={
c0:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aC(0,b,q):null
if(!J.F(o,q.x)){s=q.x
q.x=o
r=new D.D("matrix",s,o)
r.b=!0
q.a4(r)}for(p=q.y.a,p=new J.U(p,p.length);p.p();)p.d.c0(0,b)},
ag:function(a){var s,r,q,p,o,n=this,m=a.dx,l=n.x,k=m.a
if(l==null)k.push(m.gam(m))
else k.push(l.H(0,m.gam(m)))
m.a9()
a.bT(n.f)
m=a.dy
s=(m&&C.a).gaA(m)
if(s!=null&&n.d!=null){m=s.a
if(m==null){m=s.d
l=m?"High":"Grey"
l+="ViewDepth"
r=a.fr.j(0,l)
if(r==null){l=a.a
k=m?"High":"Grey"
k+="ViewDepth"
r=new A.fj(l,k)
r.ci(l,k)
q=u.c.charCodeAt(0)==0?u.c:u.c
p=(m?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n   vec3 clr = vec3(f, f, f);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n")+"  gl_FragColor = vec4(clr, 1.0);\n}\n"
r.c=q
r.d=p.charCodeAt(0)==0?p:p
r.e=r.bm(q,35633)
r.f=r.bm(r.d,35632)
q=l.createProgram()
r.r=q
l.attachShader(q,r.e)
l.attachShader(r.r,r.f)
l.linkProgram(r.r)
if(!l.getProgramParameter(r.r,35714)){o=l.getProgramInfoLog(r.r)
l.deleteProgram(r.r)
H.N(P.O("Failed to link shader: "+H.d(o)))}r.dB()
r.dD()
r.z=r.x.j(0,"posAttr")
m=t.n
r.Q=m.a(r.y.j(0,"width"))
r.ch=m.a(r.y.j(0,"stop"))
m=t.I
r.cx=m.a(r.y.j(0,"viewObjMat"))
r.cy=m.a(r.y.j(0,"projMat"))
if(k.length===0)H.N(P.O("May not cache a shader with no name."))
if(a.fr.dO(0,k))H.N(P.O('Shader cache already contains a shader by the name "'+k+'".'))
a.fr.m(0,k,r)}s.a=r
m=r}l=n.e
if((!(l instanceof Z.cK)?n.e=null:l)==null){m=n.d.dM(new Z.i1(a.a),$.aD())
l=m.dW($.aD())
k=s.a
l.e=k.z.c
n.e=m
m=k}l=a.a
l.useProgram(m.r)
m.x.dV()
k=s.b
q=s.c
p=m.Q
p.a.uniform1f(p.d,k-q)
q=s.c
k=m.ch
k.a.uniform1f(k.d,q)
q=a.cy
q=q.gam(q)
k=m.cy
k.toString
k.b7(q.bY(0,!0))
k=a.cx
if(k==null){k=a.db
k=k.gam(k)
q=a.dx
q=a.cx=k.H(0,q.gam(q))
k=q}m=m.cx
m.toString
m.b7(k.bY(0,!0))
m=n.e
m.aV(a)
m.ag(a)
m.ex(a)
m=s.a
m.toString
l.useProgram(null)
m.x.dU()}for(m=n.y.a,m=new J.U(m,m.length);m.p();)m.d.ag(a)
a.bR()
a.dx.b1()},
a4:function(a){var s=this.z
if(s!=null)s.P(a)},
V:function(){return this.a4(null)},
bO:function(a){this.e=null
this.a4(a)},
ec:function(){return this.bO(null)},
bM:function(a){this.a4(a)},
eb:function(){return this.bM(null)},
bK:function(a){this.a4(a)},
e8:function(){return this.bK(null)},
e7:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gbJ(),q=0;q<b.length;b.length===s||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bP()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.V()},
ea:function(a,b){var s,r
for(s=b.gF(b),r=this.gbJ();s.p();)s.gv(s).gu().I(0,r)
this.V()},
h:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.b8.prototype={
h:function(a){return this.b}}
E.bj.prototype={
h:function(a){return this.b}}
E.i8.prototype={}
E.h3.prototype={
cf:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.aK(Date.now(),!1)
r.y=0
r.cx=null
s=new O.c0()
s.a=[]
s.gu().n(0,new E.h4(r))
r.cy=s
s=new O.c0()
s.a=[]
s.gu().n(0,new E.h5(r))
r.db=s
s=new O.c0()
s.a=[]
s.gu().n(0,new E.h6(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.K(t.F)},
bT:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gaA(s):a)},
bR:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.h4.prototype={
$1:function(a){}}
E.h5.prototype={
$1:function(a){this.a.cx=null}}
E.h6.prototype={
$1:function(a){this.a.cx=null}}
E.dL.prototype={
be:function(a){this.bU()},
bd:function(){return this.be(null)},
ge_:function(){var s,r=this,q=Date.now(),p=C.c.Y(P.ju(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.aK(q,!1)
return s/p},
bo:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.H()
if(typeof p!=="number")return H.G(p)
s=C.d.bE(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.H()
r=C.d.bE(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.jR(C.h,q.geo())}},
bU:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.v.cE(s)
r=W.kj(new E.hp(this),t.H)
r.toString
C.v.dt(s,r)}},
em:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.bo()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.aK(p,!1)
q.y=P.ju(p-q.r.a).a*0.000001
p=q.cy
C.a.sk(p.a,0)
p.a9()
p=q.db
C.a.sk(p.a,0)
p.a9()
p=q.dx
C.a.sk(p.a,0)
p.a9()
p=q.dy
p.toString
C.a.sk(p,0)
q.dy.push(null)
m.ag(n.e)}q=n.Q
if(q!=null)q.P(null)}catch(o){s=H.ak(o)
r=H.j9(o)
P.jc("Error: "+H.d(s))
P.jc("Stack: "+H.d(r))
throw H.c(s)}}}
E.hp.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.em()}}}
Z.dZ.prototype={}
Z.fb.prototype={
aV:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ak(q)
r=P.O('Failed to bind buffer attribute "'+p.a.h(0)+'": '+H.d(s))
throw H.c(r)}},
h:function(a){var s=this
return"["+s.a.h(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.d(s.e)+"]"}}
Z.i1.prototype={}
Z.cK.prototype={
dW:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
aV:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].aV(a)},
ex:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
ag:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.e(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
h:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)o.push(s[q].h(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.a3(s[q]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.l(o,", ")+"\nAttrs:   "+C.a.l(p,", ")}}
Z.fG.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.dt(this.c))+"'")+"]"}}
Z.dX.prototype={
gb8:function(a){var s=this.a,r=(s&$.aD().a)!==0?3:0
if((s&$.bD().a)!==0)r+=3
if((s&$.bC().a)!==0)r+=3
if((s&$.bE().a)!==0)r+=2
if((s&$.bF().a)!==0)r+=3
if((s&$.cD().a)!==0)r+=3
if((s&$.cE().a)!==0)r+=4
if((s&$.bG().a)!==0)++r
return(s&$.bB().a)!==0?r+4:r},
dJ:function(a){var s,r=$.aD(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bD()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bC()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bE()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bF()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cD()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cE()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bG()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bB()
if((q&r.a)!==0)if(s===a)return r
return $.kL()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.dX))return!1
return this.a===b.a},
h:function(a){var s=[],r=this.a
if((r&$.aD().a)!==0)s.push("Pos")
if((r&$.bD().a)!==0)s.push("Norm")
if((r&$.bC().a)!==0)s.push("Binm")
if((r&$.bE().a)!==0)s.push("Txt2D")
if((r&$.bF().a)!==0)s.push("TxtCube")
if((r&$.cD().a)!==0)s.push("Clr3")
if((r&$.cE().a)!==0)s.push("Clr4")
if((r&$.bG().a)!==0)s.push("Weight")
if((r&$.bB().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.l(s,"|")}}
D.fc.prototype={}
D.bP.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
I:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.w(q,b)
if(q===!0){q=r.a
s=(q&&C.a).I(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.w(q,b)
if(q===!0){q=r.b
s=(q&&C.a).I(q,b)||s}return s},
P:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.ad()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.E(P.iP(s,!0),new D.ft(o))
s=p.b
if(s!=null){p.b=[]
C.a.E(s,new D.fu(o))}return!0},
ap:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.P(s)}}}}
D.ft.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.fu.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.ad.prototype={}
D.be.prototype={}
D.bf.prototype={}
D.D.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cL.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cL))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.d5.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d5))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.fL.prototype={
eh:function(a){this.d.n(0,a.a)
return!1},
ed:function(a){this.d.I(0,a.a)
return!1}}
X.fP.prototype={
b0:function(a,b){this.r=a.a
return!1},
ao:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.c7()
if(typeof s!=="number")return s.c2()
this.r=(s&~r)>>>0
return!1},
an:function(a,b){return!1},
ei:function(a){return!1},
d0:function(a,b,c){return}}
X.c1.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.c1))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
h:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.fX.prototype={
b0:function(a,b){this.f=a.a
return!1},
ao:function(a,b){var s=this.f,r=a.a
if(typeof r!=="number")return r.c7()
if(typeof s!=="number")return s.c2()
this.f=(s&~r)>>>0
return!1},
an:function(a,b){return!1},
ej:function(a,b){return!1}}
X.ht.prototype={
eg:function(a){return!1},
ee:function(a){return!1},
ef:function(a){return!1}}
X.dW.prototype={
bl:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.d5(s,new X.c1(r,a.altKey,a.shiftKey))},
ac:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
aT:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
a2:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.R()
if(typeof o!=="number")return H.G(o)
s=r.top
if(typeof p!=="number")return p.R()
if(typeof s!=="number")return H.G(s)
return new V.as(q-o,p-s)},
ai:function(a){return new V.bs(a.movementX,a.movementY)},
aR:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
o=C.d.W(p.pageX)
C.d.W(p.pageY)
n=k.left
if(typeof n!=="number")return H.G(n)
C.d.W(p.pageX)
m=C.d.W(p.pageY)
l=k.top
if(typeof l!=="number")return H.G(l)
j.push(new V.as(o-n,m-l))}return j},
a0:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.cL(s,new X.c1(r,a.altKey,a.shiftKey))},
aN:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.R()
if(typeof n!=="number")return H.G(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.R()
if(typeof p!=="number")return H.G(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.G(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.G(p)
p=r<p}else p=!1
return p},
cW:function(a){this.f=!0},
cK:function(a){this.f=!1},
cQ:function(a){if(this.f&&this.aN(a))a.preventDefault()},
d_:function(a){var s
if(!this.f)return
s=this.bl(a)
this.b.eh(s)},
cY:function(a){var s
if(!this.f)return
s=this.bl(a)
this.b.ed(s)},
d2:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.ac(a)
if(p.x){s=p.a0(a)
r=p.ai(a)
if(p.d.b0(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.a0(a)
q=p.a2(a)
if(p.c.b0(s,q))a.preventDefault()},
d6:function(a){var s,r,q,p=this
p.ac(a)
s=p.a0(a)
if(p.x){r=p.ai(a)
if(p.d.ao(s,r))a.preventDefault()
return}if(p.r)return
q=p.a2(a)
if(p.c.ao(s,q))a.preventDefault()},
cU:function(a){var s,r,q,p=this
if(!p.aN(a)){p.ac(a)
s=p.a0(a)
if(p.x){r=p.ai(a)
if(p.d.ao(s,r))a.preventDefault()
return}if(p.r)return
q=p.a2(a)
if(p.c.ao(s,q))a.preventDefault()}},
d4:function(a){var s,r,q,p=this
p.ac(a)
s=p.a0(a)
if(p.x){r=p.ai(a)
if(p.d.an(s,r))a.preventDefault()
return}if(p.r)return
q=p.a2(a)
if(p.c.an(s,q))a.preventDefault()},
cS:function(a){var s,r,q,p=this
if(!p.aN(a)){p.ac(a)
s=p.a0(a)
if(p.x){r=p.ai(a)
if(p.d.an(s,r))a.preventDefault()
return}if(p.r)return
q=p.a2(a)
if(p.c.an(s,q))a.preventDefault()}},
d8:function(a){var s,r,q,p,o,n=this
n.ac(a)
s=(a&&C.u).gdS(a)
r=C.u.gdT(a)
q=n.Q
if(typeof s!=="number")return s.H()
if(typeof q!=="number")return H.G(q)
if(typeof r!=="number")return r.H()
p=new V.bs(s*q,r*q)
if(n.x){if(n.d.ei(p))a.preventDefault()
return}if(n.r)return
o=n.a2(a)
if(n.c.ej(p,o))a.preventDefault()},
da:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.a0(q.y)
r=q.a2(q.y)
q.d.d0(s,r,p)}},
dk:function(a){var s,r=this
r.a.focus()
r.f=!0
r.aT(a)
s=r.aR(a)
if(r.e.eg(s))a.preventDefault()},
dg:function(a){var s
this.aT(a)
s=this.aR(a)
if(this.e.ee(s))a.preventDefault()},
di:function(a){var s
this.aT(a)
s=this.aR(a)
if(this.e.ef(s))a.preventDefault()}}
V.bb.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bb))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+", "+V.w(s.d,3,0)+"]"}}
V.fr.prototype={}
V.da.prototype={
bY:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
H:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.ar(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.da))return!1
s=b.a
$.E().toString
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
h:function(a){return this.G()},
B:function(a){var s,r,q,p,o,n=this,m=V.iu([n.a,n.e,n.y,n.cx],3,0),l=V.iu([n.b,n.f,n.z,n.cy],3,0),k=V.iu([n.c,n.r,n.Q,n.db],3,0),j=V.iu([n.d,n.x,n.ch,n.dx],3,0),i=m.length
if(0>=i)return H.e(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.e(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.e(k,0)
s=s+k[0]+", "
p=j.length
if(0>=p)return H.e(j,0)
s=s+j[0]+",\n"
o=a+" "
if(1>=i)return H.e(m,1)
o=o+m[1]+", "
if(1>=r)return H.e(l,1)
o=o+l[1]+", "
if(1>=q)return H.e(k,1)
o=o+k[1]+", "
if(1>=p)return H.e(j,1)
o=s+(o+j[1]+",\n")
s=a+" "
if(2>=i)return H.e(m,2)
s=s+m[2]+", "
if(2>=r)return H.e(l,2)
s=s+l[2]+", "
if(2>=q)return H.e(k,2)
s=s+k[2]+", "
if(2>=p)return H.e(j,2)
s=o+(s+j[2]+",\n")
o=a+" "
if(3>=i)return H.e(m,3)
o=o+m[3]+", "
if(3>=r)return H.e(l,3)
o=o+l[3]+", "
if(3>=q)return H.e(k,3)
o=o+k[3]+", "
if(3>=p)return H.e(j,3)
return s+(o+j[3]+"]")},
G:function(){return this.B("")}}
V.as.prototype={
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.at.prototype={
R:function(a,b){return new V.at(this.a-b.a,this.b-b.b,this.c-b.c)},
H:function(a,b){return new V.at(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.at))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
V.dv.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dv))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+", "+V.w(s.d,3,0)+"]"}}
V.bs.prototype={
aZ:function(a){var s,r=this.a
if(typeof r!=="number")return r.H()
s=this.b
if(typeof s!=="number")return s.H()
return Math.sqrt(r*r+s*s)},
q:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bs))return!1
s=b.a
r=this.a
$.E().toString
if(typeof s!=="number")return s.R()
if(typeof r!=="number")return H.G(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.R()
if(typeof r!=="number")return H.G(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.H.prototype={
aZ:function(a){return Math.sqrt(this.al(this))},
al:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
N:function(){var s=this,r=Math.sqrt(s.al(s))
if(r===1)return s
return s.c3(0,r)},
ak:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.H(s*r-q*p,q*o-n*r,n*p-s*o)},
J:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
aE:function(a){return new V.H(-this.a,-this.b,-this.c)},
H:function(a,b){return new V.H(this.a*b,this.b*b,this.c*b)},
c3:function(a,b){$.E().toString
if(Math.abs(b-0)<1e-9)return V.hQ()
return new V.H(this.a/b,this.b/b,this.c/b)},
e1:function(){$.E().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.H))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
U.bI.prototype={
gu:function(){var s=this.b
return s==null?this.b=D.ac():s},
aC:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bI))return!1
return J.F(this.a,b.a)},
h:function(a){return"Constant: "+this.a.B("          ")}}
U.bd.prototype={
gu:function(){var s=this.e
return s==null?this.e=D.ac():s},
O:function(a){var s=this.e
if(s!=null)s.P(a)},
cm:function(){return this.O(null)},
cI:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gbf(),q=0;q<b.length;b.length===s||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gu()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.be()
s.b=!0
this.O(s)},
de:function(a,b){var s,r
for(s=b.gF(b),r=this.gbf();s.p();)s.gv(s).gu().I(0,r)
s=new D.bf()
s.b=!0
this.O(s)},
aC:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.a7()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.U(p,p.length),s=null;p.p();){o=p.d
if(o!=null){r=o.aC(0,b,c)
if(r!=null)s=s==null?r:r.H(0,s)}}q.f=s==null?V.fR():s
p=q.e
if(p!=null)p.ap(0)}return q.f},
q:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bd))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.e(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.e(p,r)
if(!J.F(q,p[r]))return!1}return!0},
h:function(a){return"Group"},
$ia6:1}
U.a6.prototype={}
U.c8.prototype={
gu:function(){var s=this.y
return s==null?this.y=D.ac():s},
O:function(a){var s=this.y
if(s!=null)s.P(a)},
sc1:function(a){var s
a=V.je(a,0,6.283185307179586)
s=this.a
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.D("yaw",s,a)
s.b=!0
this.O(s)}},
sbQ:function(a,b){var s
b=V.je(b,0,6.283185307179586)
s=this.b
$.E().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.D("pitch",s,b)
s.b=!0
this.O(s)}},
sbV:function(a){var s
a=V.je(a,0,6.283185307179586)
s=this.c
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.D("roll",s,a)
s.b=!0
this.O(s)}},
sbC:function(a){var s=this.d
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.d=a
s=new D.D("deltaYaw",s,a)
s.b=!0
this.O(s)}},
sbA:function(a){var s=this.e
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.e=a
s=new D.D("deltaPitch",s,a)
s.b=!0
this.O(s)}},
sbB:function(a){var s=this.f
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.f=a
s=new D.D("deltaRoll",s,a)
s.b=!0
this.O(s)}},
aC:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(p<o){q.r=o
p=q.y
if(p!=null)++p.d
q.sc1(q.a+q.d*b.y)
q.sbQ(0,q.b+q.e*b.y)
q.sbV(q.c+q.f*b.y)
p=q.c
s=Math.cos(p)
r=Math.sin(p)
p=V.ar(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
o=q.b
s=Math.cos(o)
r=Math.sin(o)
p=p.H(0,V.ar(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
o=q.a
s=Math.cos(o)
r=Math.sin(o)
q.x=p.H(0,V.ar(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
p=q.y
if(p!=null)p.ap(0)}return q.x},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.c8))return!1
s=q.a
r=b.a
$.E().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
h:function(a){var s=this
return"Rotator: ["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+"], ["+V.w(s.d,3,0)+", "+V.w(s.e,3,0)+", "+V.w(s.f,3,0)+"]"}}
M.cT.prototype={
a_:function(a){var s=this.y
if(s!=null)s.P(a)},
cn:function(){return this.a_(null)},
cM:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gX(),q=0;q<b.length;b.length===s||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bP()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.be()
s.b=!0
this.a_(s)},
cO:function(a,b){var s,r
for(s=b.gF(b),r=this.gX();s.p();)s.gv(s).gu().I(0,r)
s=new D.bf()
s.b=!0
this.a_(s)},
sbX:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gu().I(0,r.gX())
s=r.d
r.d=a
if(a!=null)a.gu().n(0,r.gX())
q=new D.D("technique",s,r.d)
q.b=!0
r.a_(q)}},
gu:function(){var s=this.y
return s==null?this.y=D.ac():s},
ag:function(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a4.bT(a3.d)
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
if(typeof q!=="number")return H.G(q)
m=C.d.W(n*q)
n=o.b
if(typeof p!=="number")return H.G(p)
l=C.d.W(n*p)
n=C.d.W(o.c*q)
a4.c=n
o=C.d.W(o.d*p)
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
g=V.ar(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a4.cy.bS(g)
r=$.jG
if(r==null){r=$.jI
if(r==null)r=$.jI=new V.at(0,0,0)
o=$.jX
if(o==null)o=$.jX=new V.H(0,1,0)
n=$.jV
f=(n==null?$.jV=new V.H(0,0,-1):n).N()
e=o.ak(f).N()
d=f.ak(e)
c=new V.H(r.a,r.b,r.c)
b=e.aE(0).al(c)
a=d.aE(0).al(c)
a0=f.aE(0).al(c)
r=V.ar(e.a,d.a,f.a,b,e.b,d.b,f.b,a,e.c,d.c,f.c,a0,0,0,0,1)
$.jG=r
a1=r}else a1=r
s=s.b
if(s!=null){a2=s.a
if(a2!=null)a1=a2.H(0,a1)}a4.db.bS(a1)
for(s=a3.e.a,s=new J.U(s,s.length);s.p();)s.d.c0(0,a4)
for(s=a3.e.a,s=new J.U(s,s.length);s.p();)s.d.ag(a4)
a3.b.toString
a4.cy.b1()
a4.db.b1()
a3.c.toString
a4.bR()}}
A.f5.prototype={}
A.f6.prototype={
j:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
dV:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dU:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.fj.prototype={}
A.dy.prototype={
ci:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
bm:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.O("Error compiling shader '"+H.d(q)+"': "+H.d(s)))}return q},
dB:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.G(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.f5(n,r.name,q))}p.x=new A.f6(o)},
dD:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.G(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.dR(r.type,r.size,r.name,q))}p.y=new A.hI(o)},
ab:function(a,b,c){var s=this.a
if(a===1)return new A.hA(s,b,c)
else return A.iV(s,this.r,b,a,c)},
cB:function(a,b,c){var s=this.a
if(a===1)return new A.hL(s,b,c)
else return A.iV(s,this.r,b,a,c)},
cC:function(a,b,c){var s=this.a
if(a===1)return new A.hM(s,b,c)
else return A.iV(s,this.r,b,a,c)},
aw:function(a,b){return new P.eb(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
dR:function(a,b,c,d){var s=this
switch(a){case 5120:return s.ab(b,c,d)
case 5121:return s.ab(b,c,d)
case 5122:return s.ab(b,c,d)
case 5123:return s.ab(b,c,d)
case 5124:return s.ab(b,c,d)
case 5125:return s.ab(b,c,d)
case 5126:return new A.dQ(s.a,c,d)
case 35664:return new A.hC(s.a,c,d)
case 35665:return new A.hE(s.a,c,d)
case 35666:return new A.hG(s.a,c,d)
case 35667:return new A.hD(s.a,c,d)
case 35668:return new A.hF(s.a,c,d)
case 35669:return new A.hH(s.a,c,d)
case 35674:return new A.hJ(s.a,c,d)
case 35675:return new A.hK(s.a,c,d)
case 35676:return new A.dR(s.a,c,d)
case 35678:return s.cB(b,c,d)
case 35680:return s.cC(b,c,d)
case 35670:throw H.c(s.aw("BOOL",c))
case 35671:throw H.c(s.aw("BOOL_VEC2",c))
case 35672:throw H.c(s.aw("BOOL_VEC3",c))
case 35673:throw H.c(s.aw("BOOL_VEC4",c))
default:throw H.c(P.O("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.hz.prototype={}
A.hI.prototype={
j:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
h:function(a){return this.G()},
G:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.u)(s),++p)q+=s[p].h(0)+"\n"
return q}}
A.hA.prototype={
h:function(a){return"Uniform1i: "+H.d(this.c)}}
A.hD.prototype={
h:function(a){return"Uniform2i: "+H.d(this.c)}}
A.hF.prototype={
h:function(a){return"Uniform3i: "+H.d(this.c)}}
A.hH.prototype={
h:function(a){return"Uniform4i: "+H.d(this.c)}}
A.hB.prototype={
h:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.dQ.prototype={
h:function(a){return"Uniform1f: "+H.d(this.c)}}
A.hC.prototype={
h:function(a){return"Uniform2f: "+H.d(this.c)}}
A.hE.prototype={
h:function(a){return"Uniform3f: "+H.d(this.c)}}
A.hG.prototype={
h:function(a){return"Uniform4f: "+H.d(this.c)}}
A.hJ.prototype={
h:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.hK.prototype={
h:function(a){return"UniformMat3: "+H.d(this.c)}}
A.dR.prototype={
b7:function(a){var s=new Float32Array(H.j3(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
h:function(a){return"UniformMat4: "+H.d(this.c)}}
A.hL.prototype={
h:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.hM.prototype={
h:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.iE.prototype={
$1:function(a){return new V.at(Math.cos(a),Math.sin(a),0)}}
F.is.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.jh(l.$1(m),k)
k=J.jh(l.$1(m+3.141592653589793/n.c),k).R(0,j)
s=new V.H(k.a,k.b,k.c).N()
l=$.jW
if(l==null){l=new V.H(1,0,0)
$.jW=l
r=l}else r=l
if(!J.F(s,r)){l=$.jY
if(l==null){l=new V.H(0,0,1)
$.jY=l
r=l}else r=l}q=s.ak(r).N()
r=q.ak(s).N()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.H(0,l*k)
k=q.H(0,o*k)
k=new V.at(j.a+(l.a-k.a),j.b+(l.b-k.b),j.c+(l.c-k.c))
if(!J.F(a.f,k)){a.f=k
l=a.a
if(l!=null)l.V()}}}
F.fv.prototype={
ay:function(){var s=this
if(!s.gbD()){C.a.I(s.a.a.d.b,s)
s.a.a.V()}s.dn()
s.dq()
s.dr()},
dw:function(a){this.a=a
a.d.b.push(this)},
dz:function(a){this.b=a
a.d.c.push(this)},
dA:function(a){this.c=a
a.d.d.push(this)},
dn:function(){var s=this.a
if(s!=null){C.a.I(s.d.b,this)
this.a=null}},
dq:function(){var s=this.b
if(s!=null){C.a.I(s.d.c,this)
this.b=null}},
dr:function(){var s=this.c
if(s!=null){C.a.I(s.d.d,this)
this.c=null}},
gbD:function(){return this.a==null||this.b==null||this.c==null},
cu:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.hQ()
if(n!=null)q=q.J(0,n)
if(s!=null)q=q.J(0,s)
if(r!=null)q=q.J(0,r)
if(q.e1())return p
return q.N()},
cv:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.R(0,n)
q=new V.H(o.a,o.b,o.c).N()
o=r.R(0,n)
return q.ak(new V.H(o.a,o.b,o.c).N()).N()},
aW:function(){var s,r=this
if(r.d!=null)return!0
s=r.cu()
if(s==null){s=r.cv()
if(s==null)return!1}r.d=s
r.a.a.V()
return!0},
gby:function(a){var s=this
if(J.F(s.a,s.b))return!0
if(J.F(s.b,s.c))return!0
if(J.F(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.G()},
B:function(a){var s,r,q=this
if(q.gbD())return a+"disposed"
s=a+C.b.a5(J.a3(q.a.e),0)+", "+C.b.a5(J.a3(q.b.e),0)+", "+C.b.a5(J.a3(q.c.e),0)+" {"
r=q.d
s=(r!=null?s+(r.h(0)+", "):s+"-, ")+"-}"
return s},
G:function(){return this.B("")}}
F.fx.prototype={}
F.hi.prototype={
b_:function(a,b,c){var s,r=b.a
r.a.a.D()
r=r.e
s=c.a
s.a.a.D()
if(r==s.e){r=b.b
r.a.a.D()
r=r.e
s=c.b
s.a.a.D()
if(r==s.e){r=b.c
r.a.a.D()
r=r.e
s=c.c
s.a.a.D()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.D()
r=r.e
s=c.b
s.a.a.D()
if(r==s.e){r=b.b
r.a.a.D()
r=r.e
s=c.c
s.a.a.D()
if(r==s.e){r=b.c
r.a.a.D()
r=r.e
s=c.a
s.a.a.D()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.D()
r=r.e
s=c.c
s.a.a.D()
if(r==s.e){r=b.b
r.a.a.D()
r=r.e
s=c.a
s.a.a.D()
if(r==s.e){r=b.c
r.a.a.D()
r=r.e
s=c.b
s.a.a.D()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.fM.prototype={}
F.hy.prototype={}
F.ha.prototype={
gu:function(){var s=this.e
return s==null?this.e=D.ac():s},
e5:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.a.c.slice(0)
for(;s.length!==0;){r=C.a.gdY(s)
C.a.b2(s,0)
if(r!=null){q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.e(s,p)
o=s[p]
if(o!=null&&a.b_(0,r,o)){q.push(o)
C.a.b2(s,p)}}if(q.length>1)b.e4(q)}}n.a.D()
n.c.b3()
n.d.b3()
n.b.el()
n.c.b4(new F.hy())
n.d.b4(new F.hi())
m=n.e
if(m!=null)m.ap(0)},
dM:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.aD().a)!==0?1:0
if((s&$.bD().a)!==0)++r
if((s&$.bC().a)!==0)++r
if((s&$.bE().a)!==0)++r
if((s&$.bF().a)!==0)++r
if((s&$.cD().a)!==0)++r
if((s&$.cE().a)!==0)++r
if((s&$.bG().a)!==0)++r
if((s&$.bB().a)!==0)++r
q=a5.gb8(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.dJ(l)
j=k.gb8(k)
n[l]=new Z.fb(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.e(h,i)
g=h[i].e3(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.e(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.j3(o)),35044)
s.bindBuffer(a2,null)
b=new Z.cK(new Z.dZ(a2,c),n)
b.b=[]
a1.b.toString
a1.c.toString
if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.D()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.D()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].c
h.a.a.D()
a.push(h.e)}a0=Z.lE(s,34963,a)
b.b.push(new Z.fG(4,a.length,a0))}return b},
h:function(a){var s=this,r=[]
if(s.a.c.length!==0){r.push("Vertices:")
r.push(s.a.B("   "))}s.b.toString
s.c.toString
if(s.d.b.length!==0){r.push("Faces:")
r.push(s.d.B("   "))}return C.a.l(r,"\n")},
V:function(){var s=this.e
if(s!=null)s.P(null)}}
F.hb.prototype={
dH:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.e(c,q)
k=c[q];++q
if(q>=l)return H.e(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.e(c,i)
h=c[i]
if(r<0||r>=l)return H.e(c,r)
g=c[r]
l=s.a
if(n){l.n(0,k)
s.a.n(0,j)
s.a.n(0,h)
f.push(F.fw(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.fw(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.fw(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.fw(j,g,k))}n=!n}p=!p}return f},
gk:function(a){return this.b.length},
b4:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.e(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.j(0,o)
for(m=o-1;m>=0;--m){l=p.d.j(0,m)
if(a.b_(0,n,l)){n.ay()
break}}}}},
b3:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.gby(q)
if(r)q.ay()}},
aX:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.u)(s),++p)if(!s[p].aW())q=!1
return q},
h:function(a){return this.G()},
B:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)p.push(s[q].B(a))
return C.a.l(p,"\n")},
G:function(){return this.B("")}}
F.hc.prototype={
gk:function(a){return 0},
b4:function(a){var s,r,q,p,o
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.e(q,r)
p=q[r]
p.c.toString
o=-1
for(;!1;--o)p.c.j(0,o)}},
b3:function(){var s,r,q
for(s=-1;!1;--s){r=this.b
return H.e(r,s)
q=r[s]
r=q.gby(q)
if(r)q.ay()}},
h:function(a){return this.G()},
B:function(a){var s,r,q=[]
for(s=0;!1;++s){r=this.b
if(s>=0)return H.e(r,s)
q.push(r[s].B(a+(""+s+". ")))}return C.a.l(q,"\n")},
G:function(){return this.B("")}}
F.hd.prototype={
gk:function(a){return 0},
el:function(){var s,r
for(s=-1;!1;--s){r=this.b
return H.e(r,s)
r=r[s].geB()
r=r.geA(r)
if(r.gk(r).L(0,1)){r=this.b
return H.e(r,s)
r[s].ay()}}},
h:function(a){return this.G()},
B:function(a){var s,r,q=[]
for(s=this.b,r=0;!1;++r){if(r>=0)return H.e(s,r)
q.push(s[r].B(a))}return C.a.l(q,"\n")},
G:function(){return this.B("")}}
F.hR.prototype={
bz:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.k_(s.cx,p,m,r,q,o,n,a,l)},
e3:function(a){var s,r=this
if(a.q(0,$.aD())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.q(0,$.bD())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.q(0,$.bC()))return[0,0,1]
else if(a.q(0,$.bE())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.q(0,$.bF()))return[0,0,0]
else if(a.q(0,$.cD())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.q(0,$.cE())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.q(0,$.bG()))return[r.ch]
else if(a.q(0,$.bB()))return[-1,-1,-1,-1]
else return[]},
aW:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.hQ()
r.d.E(0,new F.i0(q))
r.r=q.a.N()
q=r.a
if(q!=null){q.V()
q=r.a.e
if(q!=null)q.ap(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.G()},
B:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.a5(J.a3(q.e),0))
s=q.f
if(s!=null)o.push(s.h(0))
else o.push(p)
s=q.r
if(s!=null)o.push(s.h(0))
else o.push(p)
o.push(p)
s=q.y
if(s!=null)o.push(s.h(0))
else o.push(p)
o.push(p)
s=q.Q
if(s!=null)o.push(s.h(0))
else o.push(p)
o.push(V.w(q.ch,3,0))
o.push(p)
r=C.a.l(o,", ")
return a+"{"+r+"}"},
G:function(){return this.B("")}}
F.i0.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.J(0,r)}}}
F.hS.prototype={
D:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.e(s,p)
s[p].e=q;++q}this.b=!1}},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.O("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.V()
return!0},
bt:function(a,b){var s=null,r=F.k_(s,s,a,s,s,b,s,s,0)
this.n(0,r)
return r},
gk:function(a){return this.c.length},
aX:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)s[q].aW()
return!0},
h:function(a){return this.G()},
B:function(a){var s,r,q,p
this.D()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.u)(r),++p)s.push(r[p].B(a))
return C.a.l(s,"\n")},
G:function(){return this.B("")}}
F.hT.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.e(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.e(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.e(r,b)
return r[b]},
E:function(a,b){var s=this
C.a.E(s.b,b)
C.a.E(s.c,new F.hU(s,b))
C.a.E(s.d,new F.hV(s,b))},
h:function(a){return this.G()},
G:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)p.push(s[q].B(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q)p.push(s[q].B(""))
return C.a.l(p,"\n")}}
F.hU.prototype={
$1:function(a){if(!J.F(a.a,this.a))this.b.$1(a)}}
F.hV.prototype={
$1:function(a){var s=this.a
if(!J.F(a.a,s)&&!J.F(a.b,s))this.b.$1(a)}}
F.hW.prototype={
gk:function(a){return 0},
j:function(a,b){var s,r
if(b>=0){s=this.c
r=b-0
if(r>=0)return H.e(s,r)
return s[r]}else{s=this.b
return H.e(s,b)
return s[b]}},
h:function(a){return this.G()},
G:function(){var s,r,q=[]
for(s=this.b,r=0;!1;++r){if(r>=0)return H.e(s,r)
q.push(s[r].B(""))}for(s=this.c,r=0;!1;++r){if(r>=0)return H.e(s,r)
q.push(s[r].B(""))}return C.a.l(q,"\n")}}
F.hY.prototype={}
F.hX.prototype={
b_:function(a,b,c){return J.F(b.f,c.f)}}
F.hZ.prototype={}
F.h_.prototype={
e4:function(a){var s,r,q,p,o,n,m=V.hQ()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)m=new V.H(m.a+q.a,m.b+q.b,m.c+q.c)}m=m.N()
for(s=a.length,q=m==null,r=0;r<a.length;a.length===s||(0,H.u)(a),++r){p=a[r]
o=q?null:m.N()
if(!J.F(p.r,o)){p.r=o
n=p.a
if(n!=null){n=n.e
if(n!=null)n.P(null)}}}return null}}
F.i_.prototype={
gk:function(a){return 0},
h:function(a){return this.G()},
G:function(){var s,r,q=[]
for(s=this.b,r=0;!1;++r){if(r>=0)return H.e(s,r)
q.push(s[r].B(""))}return C.a.l(q,"\n")}}
O.fi.prototype={
gu:function(){var s=this.r
return s==null?this.r=D.ac():s},
aQ:function(a){var s=this.r
if(s!=null)s.P(a)}}
O.ho.prototype={}
X.iH.prototype={}
X.fB.prototype={
gu:function(){var s=this.x
return s==null?this.x=D.ac():s}}
X.dn.prototype={
gu:function(){var s=this.f
return s==null?this.f=D.ac():s},
aa:function(a){var s=this.f
if(s!=null)s.P(a)},
cr:function(){return this.aa(null)},
sbI:function(a){var s,r,q=this
if(!J.F(q.b,a)){s=q.b
if(s!=null)s.gu().I(0,q.gbg())
r=q.b
q.b=a
if(a!=null)a.gu().n(0,q.gbg())
s=new D.D("mover",r,q.b)
s.b=!0
q.aa(s)}}}
X.hm.prototype={}
V.aI.prototype={
ar:function(a){this.b=new P.fE(C.J)
this.c=null
this.d=[]},
A:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.length===0)k.push([])
s=a.split("\n")
for(k=s.length,r=!0,q=0;q<k;++q){p=s[q]
if(r)r=!1
else l.d.push([])
o=document.createElement("div")
o.className="codePart"
n=l.b.cA(p,0,p.length)
m=n==null?p:n
C.H.c8(o,H.jd(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.gaA(l.d).push(o)}},
bP:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.l(b,"\n")
r=p.c
if(r==null)r=p.c=p.ax()
r.toString
q=new H.l(s)
q=new P.b1(r.b5(new H.aq(q,q.gk(q))).a())
for(;q.p();)p.aB(q.gv(q))}}
V.iD.prototype={
$1:function(a){var s=C.d.bZ(this.a.ge_(),2)
if(s!=="0.00")P.jc(s+" fps")}}
V.cQ.prototype={
aB:function(a){var s=this
switch(a.a){case"Class":s.A(a.b,"#551")
break
case"Comment":s.A(a.b,"#777")
break
case"Id":s.A(a.b,"#111")
break
case"Num":s.A(a.b,"#191")
break
case"Reserved":s.A(a.b,"#119")
break
case"String":s.A(a.b,"#171")
break
case"Symbol":s.A(a.b,"#616")
break
case"Type":s.A(a.b,"#B11")
break
case"Whitespace":s.A(a.b,"#111")
break}},
ax:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.hs()
a2.d=a2.i(0,q)
s=a2.i(0,q).l(0,p)
r=K.m(new H.l("_"))
s.a.push(r)
r=K.A("a","z")
s.a.push(r)
r=K.A("A","Z")
s.a.push(r)
r=a2.i(0,p).l(0,p)
s=K.m(new H.l("_"))
r.a.push(s)
s=K.A("0","9")
r.a.push(s)
s=K.A("a","z")
r.a.push(s)
s=K.A("A","Z")
r.a.push(s)
s=a2.i(0,q).l(0,o)
r=K.A("0","9")
s.a.push(r)
r=a2.i(0,o).l(0,o)
s=K.A("0","9")
r.a.push(s)
s=a2.i(0,o).l(0,n)
r=K.m(new H.l("."))
s.a.push(r)
r=a2.i(0,n).l(0,m)
s=K.A("0","9")
r.a.push(s)
s=a2.i(0,m).l(0,m)
r=K.A("0","9")
s.a.push(r)
r=a2.i(0,q).l(0,l)
s=K.m(new H.l(k))
r.a.push(s)
s=a2.i(0,l).l(0,l)
r=K.m(new H.l(k))
s.a.push(r)
r=a2.i(0,q).l(0,j)
s=K.m(new H.l('"'))
r.a.push(s)
s=a2.i(0,j).l(0,i)
r=K.m(new H.l('"'))
s.a.push(r)
r=a2.i(0,j).l(0,h)
s=K.m(new H.l("\\"))
r.a.push(s)
s=a2.i(0,h).l(0,j)
r=K.m(new H.l('"'))
s.a.push(r)
a2.i(0,j).l(0,j).a.push(new K.al())
r=a2.i(0,q).l(0,g)
s=K.m(new H.l("'"))
r.a.push(s)
s=a2.i(0,g).l(0,f)
r=K.m(new H.l("'"))
s.a.push(r)
r=a2.i(0,g).l(0,e)
s=K.m(new H.l("\\"))
r.a.push(s)
s=a2.i(0,e).l(0,g)
r=K.m(new H.l("'"))
s.a.push(r)
a2.i(0,g).l(0,g).a.push(new K.al())
r=a2.i(0,q).l(0,d)
s=K.m(new H.l("/"))
r.a.push(s)
s=a2.i(0,d).l(0,c)
r=K.m(new H.l("/"))
s.a.push(r)
r=a2.i(0,c).l(0,b)
s=K.m(new H.l("\n"))
r.a.push(s)
s=a2.i(0,c).l(0,c)
r=new K.R()
r.a=[]
s.a.push(r)
s=K.m(new H.l("\n"))
r.a.push(s)
s=a2.i(0,d).l(0,a)
r=K.m(new H.l("*"))
s.a.push(r)
r=a2.i(0,a).l(0,a0)
s=K.m(new H.l("*"))
r.a.push(s)
s=a2.i(0,a0).l(0,a)
r=new K.R()
r.a=[]
s.a.push(r)
s=K.m(new H.l("*"))
r.a.push(s)
s=a2.i(0,a0).l(0,b)
r=K.m(new H.l("/"))
s.a.push(r)
r=a2.i(0,q).l(0,a1)
s=K.m(new H.l(" \n\t"))
r.a.push(s)
s=a2.i(0,a1).l(0,a1)
r=K.m(new H.l(" \n\t"))
s.a.push(r)
r=a2.i(0,o)
r.d=r.a.C("Num")
r=a2.i(0,m)
r.d=r.a.C("Num")
r=a2.i(0,l)
r.d=r.a.C("Symbol")
r=a2.i(0,i)
r.d=r.a.C("String")
r=a2.i(0,f)
r.d=r.a.C("String")
r=a2.i(0,b)
r.d=r.a.C(c)
r=a2.i(0,a1)
r.d=r.a.C(a1)
r=a2.i(0,p)
r=r.d=r.a.C(p)
r.a6(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.a6(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.a6(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.cY.prototype={
aB:function(a){var s=this
switch(a.a){case"Builtin":s.A(a.b,"#411")
break
case"Comment":s.A(a.b,"#777")
break
case"Id":s.A(a.b,"#111")
break
case"Num":s.A(a.b,"#191")
break
case"Preprocess":s.A(a.b,"#737")
break
case"Reserved":s.A(a.b,"#119")
break
case"Symbol":s.A(a.b,"#611")
break
case"Type":s.A(a.b,"#171")
break
case"Whitespace":s.A(a.b,"#111")
break}},
ax:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.hs()
d.d=d.i(0,q)
s=d.i(0,q).l(0,p)
r=K.m(new H.l("_"))
s.a.push(r)
r=K.A("a","z")
s.a.push(r)
r=K.A("A","Z")
s.a.push(r)
r=d.i(0,p).l(0,p)
s=K.m(new H.l("_"))
r.a.push(s)
s=K.A("0","9")
r.a.push(s)
s=K.A("a","z")
r.a.push(s)
s=K.A("A","Z")
r.a.push(s)
s=d.i(0,q).l(0,o)
r=K.A("0","9")
s.a.push(r)
r=d.i(0,o).l(0,o)
s=K.A("0","9")
r.a.push(s)
s=d.i(0,o).l(0,n)
r=K.m(new H.l("."))
s.a.push(r)
r=d.i(0,n).l(0,m)
s=K.A("0","9")
r.a.push(s)
s=d.i(0,m).l(0,m)
r=K.A("0","9")
s.a.push(r)
r=d.i(0,q).l(0,l)
s=K.m(new H.l(k))
r.a.push(s)
s=d.i(0,l).l(0,l)
r=K.m(new H.l(k))
s.a.push(r)
r=d.i(0,q).l(0,j)
s=K.m(new H.l("/"))
r.a.push(s)
s=d.i(0,j).l(0,i)
r=K.m(new H.l("/"))
s.a.push(r)
d.i(0,j).l(0,l).a.push(new K.al())
r=d.i(0,i).l(0,h)
s=K.m(new H.l("\n"))
r.a.push(s)
s=d.i(0,i).l(0,i)
r=new K.R()
r.a=[]
s.a.push(r)
s=K.m(new H.l("\n"))
r.a.push(s)
s=d.i(0,q).l(0,g)
r=K.m(new H.l("#"))
s.a.push(r)
r=d.i(0,g).l(0,g)
s=new K.R()
s.a=[]
r.a.push(s)
r=K.m(new H.l("\n"))
s.a.push(r)
r=d.i(0,g).l(0,f)
s=K.m(new H.l("\n"))
r.a.push(s)
s=d.i(0,q).l(0,e)
r=K.m(new H.l(" \n\t"))
s.a.push(r)
r=d.i(0,e).l(0,e)
s=K.m(new H.l(" \n\t"))
r.a.push(s)
s=d.i(0,o)
s.d=s.a.C("Num")
s=d.i(0,m)
s.d=s.a.C("Num")
s=d.i(0,l)
s.d=s.a.C("Symbol")
s=d.i(0,h)
s.d=s.a.C(i)
s=d.i(0,f)
s.d=s.a.C(g)
s=d.i(0,e)
s.d=s.a.C(e)
s=d.i(0,p)
s=s.d=s.a.C(p)
s.a6(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.a6(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.a6(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.d_.prototype={
aB:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.A(a.b,"#911")
s.A("=",r)
break
case"Id":s.A(a.b,r)
break
case"Other":s.A(a.b,r)
break
case"Reserved":s.A(a.b,"#119")
break
case"String":s.A(a.b,"#171")
break
case"Symbol":s.A(a.b,"#616")
break}},
ax:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.hs()
j.d=j.i(0,q)
s=j.i(0,q).l(0,p)
r=K.m(new H.l("_"))
s.a.push(r)
r=K.A("a","z")
s.a.push(r)
r=K.A("A","Z")
s.a.push(r)
r=j.i(0,p).l(0,p)
s=K.m(new H.l("_"))
r.a.push(s)
s=K.A("0","9")
r.a.push(s)
s=K.A("a","z")
r.a.push(s)
s=K.A("A","Z")
r.a.push(s)
s=j.i(0,p).l(0,o)
r=K.m(new H.l("="))
s.a.push(r)
s.c=!0
s=j.i(0,q).l(0,n)
r=K.m(new H.l("</\\-!>="))
s.a.push(r)
r=j.i(0,n).l(0,n)
s=K.m(new H.l("</\\-!>="))
r.a.push(s)
s=j.i(0,q).l(0,m)
r=K.m(new H.l('"'))
s.a.push(r)
r=j.i(0,m).l(0,l)
s=K.m(new H.l('"'))
r.a.push(s)
s=j.i(0,m).l(0,"EscStr")
r=K.m(new H.l("\\"))
s.a.push(r)
r=j.i(0,"EscStr").l(0,m)
s=K.m(new H.l('"'))
r.a.push(s)
j.i(0,m).l(0,m).a.push(new K.al())
j.i(0,q).l(0,k).a.push(new K.al())
s=j.i(0,k).l(0,k)
r=new K.R()
r.a=[]
s.a.push(r)
s=K.m(new H.l('</\\-!>=_"'))
r.a.push(s)
s=K.A("a","z")
r.a.push(s)
s=K.A("A","Z")
r.a.push(s)
s=j.i(0,n)
s.d=s.a.C("Symbol")
s=j.i(0,l)
s.d=s.a.C("String")
s=j.i(0,p)
r=s.a.C(p)
s.d=r
r.a6(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.i(0,o)
r.d=r.a.C(o)
r=j.i(0,k)
r.d=r.a.C(k)
return j}}
V.dq.prototype={
bP:function(a,b){this.d=[]
this.A(C.a.l(b,"\n"),"#111")},
aB:function(a){},
ax:function(){return null}}
V.he.prototype={
cj:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.M(o,"scroll",new V.hg(m),!1)},
bu:function(a){var s,r,q,p,o,n,m,l
this.dC()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.e2(a)
q.toString
p=new H.l(p)
p=new P.b1(q.b5(new H.aq(p,p.gk(p))).a())
for(;p.p();){q=p.gv(p)
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
if(H.ku(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.e(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kc(C.p,q,C.f,!1)
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
c4:function(a){var s,r,q,p=new V.cQ("dart")
p.ar("dart")
s=new V.cY("glsl")
s.ar("glsl")
r=new V.d_("html")
r.ar("html")
q=C.a.dZ([p,s,r],new V.hh(a))
if(q!=null)return q
p=new V.dq("plain")
p.ar("plain")
return p},
bs:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.j8(q).aG(q,"+")){b2[r]=C.b.b9(q,1)
a8.push(1)
s=!0}else if(C.b.aG(q,"-")){b2[r]=C.b.b9(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.c4(b0)
p.bP(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.kc(C.p,a9,C.f,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.jj()
h.href="#"+l
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
if(r>=a8.length)return H.e(a8,r)
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.u)(q),++a1)a0.appendChild(q[a1])
d.appendChild(c)
d.appendChild(b)
d.appendChild(a0)
m.appendChild(d)}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.u)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.a.gF(q);a4.p();)b.appendChild(a4.gv(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
dC:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=L.hs()
s.d=s.i(0,p)
r=s.i(0,p).l(0,o)
q=K.m(new H.l("*"))
r.a.push(q)
r.c=!0
r=s.i(0,o).l(0,o)
q=new K.R()
q.a=[]
r.a.push(q)
r=K.m(new H.l("*"))
q.a.push(r)
r=s.i(0,o).l(0,"BoldEnd")
q=K.m(new H.l("*"))
r.a.push(q)
r.c=!0
r=s.i(0,p).l(0,n)
q=K.m(new H.l("_"))
r.a.push(q)
r.c=!0
r=s.i(0,n).l(0,n)
q=new K.R()
q.a=[]
r.a.push(q)
r=K.m(new H.l("_"))
q.a.push(r)
r=s.i(0,n).l(0,m)
q=K.m(new H.l("_"))
r.a.push(q)
r.c=!0
r=s.i(0,p).l(0,l)
q=K.m(new H.l("`"))
r.a.push(q)
r.c=!0
r=s.i(0,l).l(0,l)
q=new K.R()
q.a=[]
r.a.push(q)
r=K.m(new H.l("`"))
q.a.push(r)
r=s.i(0,l).l(0,"CodeEnd")
q=K.m(new H.l("`"))
r.a.push(q)
r.c=!0
r=s.i(0,p).l(0,k)
q=K.m(new H.l("["))
r.a.push(q)
r.c=!0
r=s.i(0,k).l(0,j)
q=K.m(new H.l("|"))
r.a.push(q)
q=s.i(0,k).l(0,i)
r=K.m(new H.l("]"))
q.a.push(r)
q.c=!0
q=s.i(0,k).l(0,k)
r=new K.R()
r.a=[]
q.a.push(r)
q=K.m(new H.l("|]"))
r.a.push(q)
q=s.i(0,j).l(0,i)
r=K.m(new H.l("]"))
q.a.push(r)
q.c=!0
q=s.i(0,j).l(0,j)
r=new K.R()
r.a=[]
q.a.push(r)
q=K.m(new H.l("|]"))
r.a.push(q)
s.i(0,p).l(0,h).a.push(new K.al())
q=s.i(0,h).l(0,h)
r=new K.R()
r.a=[]
q.a.push(r)
q=K.m(new H.l("*_`["))
r.a.push(q)
q=s.i(0,"BoldEnd")
q.d=q.a.C(o)
q=s.i(0,m)
q.d=q.a.C(n)
q=s.i(0,"CodeEnd")
q.d=q.a.C(l)
q=s.i(0,i)
q.d=q.a.C("Link")
q=s.i(0,h)
q.d=q.a.C(h)
this.b=s}}
V.hg.prototype={
$1:function(a){P.jR(C.h,new V.hf(this.a))}}
V.hf.prototype={
$0:function(){var s=C.d.W(document.documentElement.scrollTop),r=this.a.style,q=H.d(-0.01*s)+"px"
r.top=q}}
V.hh.prototype={
$1:function(a){return a.a===this.a}}
R.iB.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a
s.bs("Vertex Shader","glsl",0,(q==null?null:q.c).split("\n"))
r=r.a
s.bs("Fragment Shader","glsl",0,(r==null?null:r.d).split("\n"))}};(function aliases(){var s=J.a.prototype
s.ca=s.h
s=J.aQ.prototype
s.cc=s.h
s=P.f.prototype
s.cb=s.aD
s=W.r.prototype
s.aH=s.T
s=W.cm.prototype
s.cd=s.Z
s=K.cZ.prototype
s.c9=s.a3
s.ba=s.h})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"mh","lf",16)
r(P,"mC","lG",5)
r(P,"mD","lH",5)
r(P,"mE","lI",5)
q(P,"kl","mx",6)
r(W,"o6","fp",17)
p(W,"mP",4,null,["$4"],["lL"],10,0)
p(W,"mQ",4,null,["$4"],["lM"],10,0)
var j
o(j=E.bc.prototype,"gbN",0,0,null,["$1","$0"],["bO","ec"],0,0)
o(j,"gbL",0,0,null,["$1","$0"],["bM","eb"],0,0)
o(j,"gbJ",0,0,null,["$1","$0"],["bK","e8"],0,0)
n(j,"ge6","e7",2)
n(j,"ge9","ea",2)
o(j=E.dL.prototype,"gbc",0,0,null,["$1","$0"],["be","bd"],0,0)
m(j,"geo","bU",6)
l(j=X.dW.prototype,"gcV","cW",3)
l(j,"gcJ","cK",3)
l(j,"gcP","cQ",1)
l(j,"gcZ","d_",7)
l(j,"gcX","cY",7)
l(j,"gd1","d2",1)
l(j,"gd5","d6",1)
l(j,"gcT","cU",1)
l(j,"gd3","d4",1)
l(j,"gcR","cS",1)
l(j,"gd7","d8",15)
l(j,"gd9","da",3)
l(j,"gdj","dk",4)
l(j,"gdf","dg",4)
l(j,"gdh","di",4)
k(V.bs.prototype,"gk","aZ",8)
k(V.H.prototype,"gk","aZ",8)
o(j=U.bd.prototype,"gbf",0,0,null,["$1","$0"],["O","cm"],0,0)
n(j,"gcH","cI",9)
n(j,"gdd","de",9)
o(j=M.cT.prototype,"gX",0,0,null,["$1","$0"],["a_","cn"],0,0)
n(j,"gcL","cM",2)
n(j,"gcN","cO",2)
o(X.dn.prototype,"gbg",0,0,null,["$1","$0"],["aa","cr"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.B,null)
q(P.B,[H.iM,J.a,J.U,P.cf,P.f,H.aq,P.d1,H.bQ,H.dU,H.hw,P.y,H.h0,H.eC,H.b9,P.af,H.fN,H.d7,H.fJ,H.a1,H.ee,P.cs,P.bw,P.b1,P.e0,P.dE,P.dF,P.cb,P.ip,P.cl,P.ib,P.ce,P.t,P.cM,P.fF,P.im,P.b3,P.aK,P.J,P.aL,P.dm,P.c9,P.eb,P.fA,P.fC,P.bW,P.d8,P.a0,P.C,P.bo,W.fe,W.iJ,W.iW,W.bv,W.v,W.c6,W.cm,W.eH,W.bR,W.a_,W.ig,W.eR,P.ev,K.al,K.cZ,K.h2,K.h9,L.dD,L.dM,L.dN,L.hr,O.ba,O.c0,E.fa,E.bc,E.b8,E.bj,E.i8,E.h3,E.dL,Z.dZ,Z.i1,Z.cK,Z.fG,Z.dX,D.fc,D.bP,D.ad,X.cL,X.d5,X.fL,X.fP,X.c1,X.fX,X.ht,X.dW,V.bb,V.fr,V.da,V.as,V.at,V.dv,V.bs,V.H,M.cT,A.f5,A.f6,A.hz,A.hI,F.fv,F.fx,F.fM,F.ha,F.hb,F.hc,F.hd,F.hR,F.hS,F.hT,F.hW,F.hY,F.hZ,F.i_,O.ho,X.iH,X.hm,X.dn,V.aI,V.he])
q(J.a,[J.fI,J.bU,J.aQ,J.Z,J.aP,J.ae,H.c3,W.b,W.f3,W.cJ,W.ab,W.x,W.e4,W.Y,W.fh,W.fk,W.e5,W.bM,W.e7,W.fl,W.h,W.ec,W.aN,W.fD,W.eh,W.fO,W.fS,W.el,W.em,W.aT,W.en,W.ep,W.aV,W.et,W.ew,W.aW,W.ex,W.aX,W.eD,W.aw,W.eJ,W.hq,W.aY,W.eL,W.hu,W.hN,W.eS,W.eU,W.eW,W.eY,W.f_,P.bg,P.ej,P.bi,P.er,P.h1,P.eE,P.bq,P.eN,P.f7,P.e1,P.eA])
q(J.aQ,[J.dp,J.b_,J.a5])
r(J.d3,J.Z)
q(J.aP,[J.bT,J.d2])
r(P.bX,P.cf)
q(P.bX,[H.br,W.e2,W.L,P.cW])
r(H.l,H.br)
q(P.f,[H.i,H.aS,H.b0,P.bS])
q(H.i,[H.bY,H.ap])
r(H.bN,H.aS)
q(P.d1,[H.bZ,H.e_])
r(H.c_,H.bY)
q(P.y,[H.di,H.d4,H.dT,H.dw,H.e9,P.cH,P.dj,P.T,P.dV,P.dS,P.bn,P.cN,P.cP])
q(H.b9,[H.hn,H.fK,H.iw,H.ix,H.iy,P.i3,P.i2,P.i4,P.i5,P.il,P.ik,P.iq,P.id,P.ie,P.fQ,P.fm,P.fn,W.fo,W.fU,W.fW,W.h8,W.hl,W.i9,W.fZ,W.fY,W.ih,W.ii,W.ij,W.io,P.ir,P.fy,P.fz,P.f9,E.h4,E.h5,E.h6,E.hp,D.ft,D.fu,F.iE,F.is,F.i0,F.hU,F.hV,V.iD,V.hg,V.hf,V.hh,R.iB])
q(H.hn,[H.hj,H.bH])
r(P.d9,P.af)
q(P.d9,[H.K,W.i6])
r(H.bh,H.c3)
q(H.bh,[H.ch,H.cj])
r(H.ci,H.ch)
r(H.aU,H.ci)
r(H.ck,H.cj)
r(H.c2,H.ck)
q(H.c2,[H.dc,H.dd,H.de,H.df,H.dg,H.c4,H.dh])
r(H.ct,H.e9)
r(P.cp,P.bS)
r(P.ic,P.ip)
r(P.cd,P.cl)
r(P.cO,P.dF)
r(P.fq,P.cM)
q(P.cO,[P.fE,P.hP])
r(P.hO,P.fq)
q(P.J,[P.Q,P.p])
q(P.T,[P.bl,P.d0])
q(W.b,[W.o,W.cV,W.av,W.cn,W.ax,W.a8,W.cq,W.dY,W.bt,P.cI,P.am])
q(W.o,[W.r,W.a4,W.bu])
q(W.r,[W.k,P.j])
q(W.k,[W.cF,W.cG,W.b7,W.aG,W.aH,W.bK,W.cX,W.dx,W.ca,W.dH,W.dI,W.bp])
r(W.fd,W.ab)
r(W.bJ,W.e4)
q(W.Y,[W.ff,W.fg])
r(W.e6,W.e5)
r(W.bL,W.e6)
r(W.e8,W.e7)
r(W.cS,W.e8)
r(W.aM,W.cJ)
r(W.ed,W.ec)
r(W.cU,W.ed)
r(W.ei,W.eh)
r(W.aO,W.ei)
r(W.ah,W.h)
q(W.ah,[W.aR,W.V,W.aZ])
r(W.fT,W.el)
r(W.fV,W.em)
r(W.eo,W.en)
r(W.db,W.eo)
r(W.eq,W.ep)
r(W.c5,W.eq)
r(W.eu,W.et)
r(W.dr,W.eu)
r(W.h7,W.ew)
r(W.co,W.cn)
r(W.dA,W.co)
r(W.ey,W.ex)
r(W.dB,W.ey)
r(W.hk,W.eD)
r(W.eK,W.eJ)
r(W.dJ,W.eK)
r(W.cr,W.cq)
r(W.dK,W.cr)
r(W.eM,W.eL)
r(W.dO,W.eM)
r(W.ay,W.V)
r(W.eT,W.eS)
r(W.e3,W.eT)
r(W.cc,W.bM)
r(W.eV,W.eU)
r(W.ef,W.eV)
r(W.eX,W.eW)
r(W.cg,W.eX)
r(W.eZ,W.eY)
r(W.ez,W.eZ)
r(W.f0,W.f_)
r(W.eG,W.f0)
r(W.i7,W.i6)
r(W.ea,P.dE)
r(W.eI,W.cm)
r(P.a7,P.ev)
r(P.ek,P.ej)
r(P.d6,P.ek)
r(P.es,P.er)
r(P.dk,P.es)
r(P.bm,P.j)
r(P.eF,P.eE)
r(P.dG,P.eF)
r(P.eO,P.eN)
r(P.dP,P.eO)
r(P.f8,P.e1)
r(P.dl,P.am)
r(P.eB,P.eA)
r(P.dC,P.eB)
q(K.cZ,[K.R,L.hv])
q(E.fa,[Z.fb,A.dy])
q(D.ad,[D.be,D.bf,D.D])
r(U.a6,D.fc)
q(U.a6,[U.bI,U.c8])
r(U.bd,O.ba)
r(A.fj,A.dy)
q(A.hz,[A.hA,A.hD,A.hF,A.hH,A.hB,A.dQ,A.hC,A.hE,A.hG,A.hJ,A.hK,A.dR,A.hL,A.hM])
r(F.hi,F.fx)
r(F.hy,F.fM)
r(F.hX,F.hY)
r(F.h_,F.hZ)
r(O.fi,O.ho)
r(X.fB,X.hm)
q(V.aI,[V.cQ,V.cY,V.d_,V.dq])
s(H.br,H.dU)
s(H.ch,P.t)
s(H.ci,H.bQ)
s(H.cj,P.t)
s(H.ck,H.bQ)
s(P.cf,P.t)
s(W.e4,W.fe)
s(W.e5,P.t)
s(W.e6,W.v)
s(W.e7,P.t)
s(W.e8,W.v)
s(W.ec,P.t)
s(W.ed,W.v)
s(W.eh,P.t)
s(W.ei,W.v)
s(W.el,P.af)
s(W.em,P.af)
s(W.en,P.t)
s(W.eo,W.v)
s(W.ep,P.t)
s(W.eq,W.v)
s(W.et,P.t)
s(W.eu,W.v)
s(W.ew,P.af)
s(W.cn,P.t)
s(W.co,W.v)
s(W.ex,P.t)
s(W.ey,W.v)
s(W.eD,P.af)
s(W.eJ,P.t)
s(W.eK,W.v)
s(W.cq,P.t)
s(W.cr,W.v)
s(W.eL,P.t)
s(W.eM,W.v)
s(W.eS,P.t)
s(W.eT,W.v)
s(W.eU,P.t)
s(W.eV,W.v)
s(W.eW,P.t)
s(W.eX,W.v)
s(W.eY,P.t)
s(W.eZ,W.v)
s(W.f_,P.t)
s(W.f0,W.v)
s(P.ej,P.t)
s(P.ek,W.v)
s(P.er,P.t)
s(P.es,W.v)
s(P.eE,P.t)
s(P.eF,W.v)
s(P.eN,P.t)
s(P.eO,W.v)
s(P.e1,P.af)
s(P.eA,P.t)
s(P.eB,W.v)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{p:"int",Q:"double",J:"num",C:"String",b3:"bool",a0:"Null",bW:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([ad*])","~(V*)","~(p*,f<bc*>*)","~(h*)","~(aZ*)","~(~())","~()","~(aR*)","Q*()","~(p*,f<a6*>*)","b3(r,C,C,bv)","@(@)","a0(@)","a0(B?,B?)","a0(@,@)","~(ay*)","p(@,@)","C(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.m3(v.typeUniverse,JSON.parse('{"a5":"aQ","dp":"aQ","b_":"aQ","n6":"h","ng":"h","n8":"am","n7":"b","nm":"b","no":"b","n5":"j","nh":"j","n9":"k","nk":"k","ni":"o","nf":"o","nM":"a8","nd":"ah","na":"a4","np":"a4","nn":"V","nj":"aO","nl":"aU","Z":{"i":["1"],"f":["1"]},"d3":{"i":["1"],"f":["1"]},"aP":{"Q":[],"J":[]},"bT":{"Q":[],"p":[],"J":[]},"d2":{"Q":[],"J":[]},"ae":{"C":[]},"l":{"i":["p"],"f":["p"]},"i":{"f":["1"]},"bY":{"i":["1"],"f":["1"]},"aS":{"f":["2"]},"bN":{"i":["2"],"f":["2"]},"c_":{"i":["2"],"f":["2"]},"b0":{"f":["1"]},"br":{"i":["1"],"f":["1"]},"di":{"y":[]},"d4":{"y":[]},"dT":{"y":[]},"dw":{"y":[]},"ap":{"i":["1"],"f":["1"]},"bh":{"n":["1"]},"aU":{"n":["Q"],"i":["Q"],"f":["Q"]},"c2":{"n":["p"],"i":["p"],"f":["p"]},"dc":{"n":["p"],"i":["p"],"f":["p"]},"dd":{"n":["p"],"i":["p"],"f":["p"]},"de":{"n":["p"],"i":["p"],"f":["p"]},"df":{"n":["p"],"i":["p"],"f":["p"]},"dg":{"n":["p"],"i":["p"],"f":["p"]},"c4":{"n":["p"],"i":["p"],"f":["p"]},"dh":{"n":["p"],"i":["p"],"f":["p"]},"e9":{"y":[]},"ct":{"y":[]},"cs":{"cb":[]},"cp":{"f":["1"]},"cd":{"i":["1"],"f":["1"]},"bS":{"f":["1"]},"bX":{"i":["1"],"f":["1"]},"cl":{"i":["1"],"f":["1"]},"Q":{"J":[]},"cH":{"y":[]},"dj":{"y":[]},"T":{"y":[]},"bl":{"y":[]},"d0":{"y":[]},"dV":{"y":[]},"dS":{"y":[]},"bn":{"y":[]},"cN":{"y":[]},"dm":{"y":[]},"c9":{"y":[]},"cP":{"y":[]},"p":{"J":[]},"bW":{"i":["1"],"f":["1"]},"k":{"r":[],"o":[],"b":[]},"cF":{"r":[],"o":[],"b":[]},"cG":{"r":[],"o":[],"b":[]},"b7":{"r":[],"o":[],"b":[]},"aG":{"r":[],"o":[],"b":[]},"aH":{"r":[],"o":[],"b":[]},"a4":{"o":[],"b":[]},"bK":{"r":[],"o":[],"b":[]},"bL":{"n":["a7<J>"],"i":["a7<J>"],"f":["a7<J>"]},"bM":{"a7":["J"]},"cS":{"n":["C"],"i":["C"],"f":["C"]},"e2":{"i":["r"],"f":["r"]},"r":{"o":[],"b":[]},"cU":{"n":["aM"],"i":["aM"],"f":["aM"]},"cV":{"b":[]},"cX":{"r":[],"o":[],"b":[]},"aO":{"n":["o"],"i":["o"],"f":["o"]},"aR":{"h":[]},"db":{"n":["aT"],"i":["aT"],"f":["aT"]},"V":{"h":[]},"L":{"i":["o"],"f":["o"]},"o":{"b":[]},"c5":{"n":["o"],"i":["o"],"f":["o"]},"dr":{"n":["aV"],"i":["aV"],"f":["aV"]},"dx":{"r":[],"o":[],"b":[]},"av":{"b":[]},"dA":{"n":["av"],"b":[],"i":["av"],"f":["av"]},"dB":{"n":["aW"],"i":["aW"],"f":["aW"]},"ca":{"r":[],"o":[],"b":[]},"dH":{"r":[],"o":[],"b":[]},"dI":{"r":[],"o":[],"b":[]},"bp":{"r":[],"o":[],"b":[]},"ax":{"b":[]},"a8":{"b":[]},"dJ":{"n":["a8"],"i":["a8"],"f":["a8"]},"dK":{"n":["ax"],"b":[],"i":["ax"],"f":["ax"]},"aZ":{"h":[]},"dO":{"n":["aY"],"i":["aY"],"f":["aY"]},"ah":{"h":[]},"dY":{"b":[]},"ay":{"V":[],"h":[]},"bt":{"b":[]},"bu":{"o":[],"b":[]},"e3":{"n":["x"],"i":["x"],"f":["x"]},"cc":{"a7":["J"]},"ef":{"n":["aN?"],"i":["aN?"],"f":["aN?"]},"cg":{"n":["o"],"i":["o"],"f":["o"]},"ez":{"n":["aX"],"i":["aX"],"f":["aX"]},"eG":{"n":["aw"],"i":["aw"],"f":["aw"]},"bv":{"a_":[]},"c6":{"a_":[]},"cm":{"a_":[]},"eI":{"a_":[]},"eH":{"a_":[]},"cW":{"i":["r"],"f":["r"]},"a7":{"ev":["1"]},"d6":{"i":["bg"],"f":["bg"]},"dk":{"i":["bi"],"f":["bi"]},"bm":{"j":[],"r":[],"o":[],"b":[]},"dG":{"i":["C"],"f":["C"]},"j":{"r":[],"o":[],"b":[]},"dP":{"i":["bq"],"f":["bq"]},"cI":{"b":[]},"am":{"b":[]},"dl":{"b":[]},"dC":{"i":["d8<@,@>"],"f":["d8<@,@>"]},"ba":{"f":["1*"]},"be":{"ad":[]},"bf":{"ad":[]},"D":{"ad":[]},"bI":{"a6":[]},"bd":{"a6":[],"f":["a6*"]},"c8":{"a6":[]},"cQ":{"aI":[]},"cY":{"aI":[]},"d_":{"aI":[]},"dq":{"aI":[]}}'))
H.m2(v.typeUniverse,JSON.parse('{"Z":1,"d3":1,"U":1,"i":1,"bY":1,"aq":1,"aS":2,"bN":2,"bZ":2,"c_":2,"b0":1,"e_":1,"bQ":1,"dU":1,"br":1,"ap":1,"d7":1,"bh":1,"b1":1,"cp":1,"dE":1,"dF":2,"ce":1,"bS":1,"bX":1,"t":1,"d9":2,"af":2,"cl":1,"cf":1,"cM":2,"cO":2,"f":1,"d1":1,"bW":1,"ea":1,"v":1,"bR":1,"ba":1,"be":1,"bf":1,"D":1}'))
var u={c:"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"}
var t=(function rtii(){var s=H.mM
return{y:s("b7"),t:s("aG"),O:s("i<@>"),h:s("r"),C:s("y"),D:s("h"),Z:s("fC"),b:s("Z<@>"),T:s("bU"),g:s("a5"),p:s("n<@>"),F:s("K<C*,dy*>"),V:s("K<C*,dD*>"),i:s("K<C*,C*>"),w:s("K<C*,dN*>"),E:s("K<p*,b3*>"),P:s("a0"),K:s("B"),q:s("a7<J>"),Y:s("bm"),N:s("C"),u:s("j"),f:s("bp"),G:s("cb"),o:s("b_"),x:s("bu"),v:s("b3"),W:s("Q"),z:s("@"),S:s("p"),B:s("aH*"),A:s("0&*"),_:s("B*"),Q:s("C*"),j:s("dM*"),n:s("dQ*"),I:s("dR*"),e:s("p*"),R:s("jy<a0>?"),X:s("B?"),H:s("J")}})();(function constants(){var s=hunkHelpers.makeConstList
C.k=W.aG.prototype
C.G=W.aH.prototype
C.H=W.bK.prototype
C.K=J.a.prototype
C.a=J.Z.prototype
C.c=J.bT.prototype
C.L=J.bU.prototype
C.d=J.aP.prototype
C.b=J.ae.prototype
C.M=J.a5.prototype
C.r=J.dp.prototype
C.t=W.ca.prototype
C.j=J.b_.prototype
C.u=W.ay.prototype
C.v=W.bt.prototype
C.w=new E.b8("Browser.chrome")
C.l=new E.b8("Browser.firefox")
C.m=new E.b8("Browser.edge")
C.x=new E.b8("Browser.other")
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=function() {
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
C.D=function(getTagFallback) {
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
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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
C.C=function(hooks) {
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
C.B=function(hooks) {
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

C.E=new P.dm()
C.f=new P.hO()
C.F=new P.hP()
C.e=new P.ic()
C.h=new P.aL(0)
C.I=new P.aL(5e6)
C.J=new P.fF("element",!1,!1,!1)
C.N=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.O=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.P=s([])
C.p=s([0,0,65498,45055,65535,34815,65534,18431])
C.q=s(["bind","if","ref","repeat","syntax"])
C.i=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.Q=new E.bj("OperatingSystem.windows")
C.R=new E.bj("OperatingSystem.mac")
C.S=new E.bj("OperatingSystem.linux")
C.T=new E.bj("OperatingSystem.other")
C.U=new P.bw(null,2)})();(function staticFields(){$.k2=null
$.aa=0
$.jo=null
$.jn=null
$.kn=null
$.kk=null
$.ks=null
$.it=null
$.iz=null
$.ja=null
$.bx=null
$.cy=null
$.cz=null
$.j5=!1
$.a9=C.e
$.S=[]
$.an=null
$.iI=null
$.jw=null
$.jv=null
$.eg=P.jB(t.N,t.Z)
$.jx=null
$.jE=null
$.jH=null
$.jI=null
$.jM=null
$.jZ=null
$.jW=null
$.jX=null
$.jY=null
$.jV=null
$.jG=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"ne","ky",function(){return H.mO("_$dart_dartClosure")})
s($,"nq","kz",function(){return H.ag(H.hx({
toString:function(){return"$receiver$"}}))})
s($,"nr","kA",function(){return H.ag(H.hx({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"ns","kB",function(){return H.ag(H.hx(null))})
s($,"nt","kC",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"nw","kF",function(){return H.ag(H.hx(void 0))})
s($,"nx","kG",function(){return H.ag(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"nv","kE",function(){return H.ag(H.jT(null))})
s($,"nu","kD",function(){return H.ag(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"nz","kI",function(){return H.ag(H.jT(void 0))})
s($,"ny","kH",function(){return H.ag(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"nN","jf",function(){return P.lF()})
s($,"nQ","kN",function(){return P.lt("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"nO","kM",function(){return P.jC(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"nG","kL",function(){return Z.a2(0)})
s($,"nA","kJ",function(){return Z.a2(511)})
s($,"nI","aD",function(){return Z.a2(1)})
s($,"nH","bD",function(){return Z.a2(2)})
s($,"nC","bC",function(){return Z.a2(4)})
s($,"nJ","bE",function(){return Z.a2(8)})
s($,"nK","bF",function(){return Z.a2(16)})
s($,"nD","cD",function(){return Z.a2(32)})
s($,"nE","cE",function(){return Z.a2(64)})
s($,"nF","kK",function(){return Z.a2(96)})
s($,"nL","bG",function(){return Z.a2(128)})
s($,"nB","bB",function(){return Z.a2(256)})
s($,"nc","kx",function(){return new V.fr()})
s($,"nb","E",function(){return $.kx()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c3,ArrayBufferView:H.c3,Float32Array:H.aU,Float64Array:H.aU,Int16Array:H.dc,Int32Array:H.dd,Int8Array:H.de,Uint16Array:H.df,Uint32Array:H.dg,Uint8ClampedArray:H.c4,CanvasPixelArray:H.c4,Uint8Array:H.dh,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.f3,HTMLAnchorElement:W.cF,HTMLAreaElement:W.cG,HTMLBaseElement:W.b7,Blob:W.cJ,HTMLBodyElement:W.aG,HTMLCanvasElement:W.aH,CDATASection:W.a4,CharacterData:W.a4,Comment:W.a4,ProcessingInstruction:W.a4,Text:W.a4,CSSPerspective:W.fd,CSSCharsetRule:W.x,CSSConditionRule:W.x,CSSFontFaceRule:W.x,CSSGroupingRule:W.x,CSSImportRule:W.x,CSSKeyframeRule:W.x,MozCSSKeyframeRule:W.x,WebKitCSSKeyframeRule:W.x,CSSKeyframesRule:W.x,MozCSSKeyframesRule:W.x,WebKitCSSKeyframesRule:W.x,CSSMediaRule:W.x,CSSNamespaceRule:W.x,CSSPageRule:W.x,CSSRule:W.x,CSSStyleRule:W.x,CSSSupportsRule:W.x,CSSViewportRule:W.x,CSSStyleDeclaration:W.bJ,MSStyleCSSProperties:W.bJ,CSS2Properties:W.bJ,CSSImageValue:W.Y,CSSKeywordValue:W.Y,CSSNumericValue:W.Y,CSSPositionValue:W.Y,CSSResourceValue:W.Y,CSSUnitValue:W.Y,CSSURLImageValue:W.Y,CSSStyleValue:W.Y,CSSMatrixComponent:W.ab,CSSRotation:W.ab,CSSScale:W.ab,CSSSkew:W.ab,CSSTranslation:W.ab,CSSTransformComponent:W.ab,CSSTransformValue:W.ff,CSSUnparsedValue:W.fg,DataTransferItemList:W.fh,HTMLDivElement:W.bK,DOMException:W.fk,ClientRectList:W.bL,DOMRectList:W.bL,DOMRectReadOnly:W.bM,DOMStringList:W.cS,DOMTokenList:W.fl,Element:W.r,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aM,FileList:W.cU,FileWriter:W.cV,HTMLFormElement:W.cX,Gamepad:W.aN,History:W.fD,HTMLCollection:W.aO,HTMLFormControlsCollection:W.aO,HTMLOptionsCollection:W.aO,KeyboardEvent:W.aR,Location:W.fO,MediaList:W.fS,MIDIInputMap:W.fT,MIDIOutputMap:W.fV,MimeType:W.aT,MimeTypeArray:W.db,PointerEvent:W.V,MouseEvent:W.V,DragEvent:W.V,Document:W.o,DocumentFragment:W.o,HTMLDocument:W.o,ShadowRoot:W.o,XMLDocument:W.o,DocumentType:W.o,Node:W.o,NodeList:W.c5,RadioNodeList:W.c5,Plugin:W.aV,PluginArray:W.dr,RTCStatsReport:W.h7,HTMLSelectElement:W.dx,SourceBuffer:W.av,SourceBufferList:W.dA,SpeechGrammar:W.aW,SpeechGrammarList:W.dB,SpeechRecognitionResult:W.aX,Storage:W.hk,CSSStyleSheet:W.aw,StyleSheet:W.aw,HTMLTableElement:W.ca,HTMLTableRowElement:W.dH,HTMLTableSectionElement:W.dI,HTMLTemplateElement:W.bp,TextTrack:W.ax,TextTrackCue:W.a8,VTTCue:W.a8,TextTrackCueList:W.dJ,TextTrackList:W.dK,TimeRanges:W.hq,Touch:W.aY,TouchEvent:W.aZ,TouchList:W.dO,TrackDefaultList:W.hu,CompositionEvent:W.ah,FocusEvent:W.ah,TextEvent:W.ah,UIEvent:W.ah,URL:W.hN,VideoTrackList:W.dY,WheelEvent:W.ay,Window:W.bt,DOMWindow:W.bt,Attr:W.bu,CSSRuleList:W.e3,ClientRect:W.cc,DOMRect:W.cc,GamepadList:W.ef,NamedNodeMap:W.cg,MozNamedAttrMap:W.cg,SpeechRecognitionResultList:W.ez,StyleSheetList:W.eG,SVGLength:P.bg,SVGLengthList:P.d6,SVGNumber:P.bi,SVGNumberList:P.dk,SVGPointList:P.h1,SVGScriptElement:P.bm,SVGStringList:P.dG,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bq,SVGTransformList:P.dP,AudioBuffer:P.f7,AudioParamMap:P.f8,AudioTrackList:P.cI,AudioContext:P.am,webkitAudioContext:P.am,BaseAudioContext:P.am,OfflineAudioContext:P.dl,SQLResultSetRowList:P.dC})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.bh.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.aU.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
W.cn.$nativeSuperclassTag="EventTarget"
W.co.$nativeSuperclassTag="EventTarget"
W.cq.$nativeSuperclassTag="EventTarget"
W.cr.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(R.kq,[])
else R.kq([])})})()
//# sourceMappingURL=test.dart.js.map
