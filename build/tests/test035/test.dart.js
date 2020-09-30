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
a[c]=function(){a[c]=function(){H.pC(b)}
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
kq:function(a){return new H.dM(a)},
jN:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
nh:function(a,b){if(t.Y.b(a))return new H.cb(a,b)
return new H.bm(a,b)},
l8:function(){return new P.er("No element")},
nC:function(a,b){var s=J.aT(a)
if(typeof s!=="number")return s.q()
H.ek(a,0,s-1,b)},
ek:function(a,b,c,d){if(c-b<=32)H.nB(a,b,c,d)
else H.nA(a,b,c,d)},
nB:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.aR(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.V()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
nA:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a_(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a_(a6+a7,2),d=e-h,c=e+h,b=J.aR(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
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
a2=s}b.j(a5,g,a)
b.j(a5,e,a1)
b.j(a5,f,a3)
b.j(a5,d,b.h(a5,a6))
b.j(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.E(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.a4()
if(n<0){if(p!==r){b.j(a5,p,b.h(a5,r))
b.j(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.V()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.j(a5,p,b.h(a5,r))
l=r+1
b.j(a5,r,b.h(a5,q))
b.j(a5,q,o)
q=m
r=l
break}else{b.j(a5,p,b.h(a5,q))
b.j(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.a4()
if(j<0){if(p!==r){b.j(a5,p,b.h(a5,r))
b.j(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.V()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.V()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a4()
m=q-1
if(n<0){b.j(a5,p,b.h(a5,r))
l=r+1
b.j(a5,r,b.h(a5,q))
b.j(a5,q,o)
r=l}else{b.j(a5,p,b.h(a5,q))
b.j(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.j(a5,a6,b.h(a5,a4))
b.j(a5,a4,a0)
a4=q+1
b.j(a5,a7,b.h(a5,a4))
b.j(a5,a4,a2)
H.ek(a5,a6,r-2,a8)
H.ek(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.E(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.E(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.j(a5,p,b.h(a5,r))
b.j(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a4()
m=q-1
if(n<0){b.j(a5,p,b.h(a5,r))
l=r+1
b.j(a5,r,b.h(a5,q))
b.j(a5,q,o)
r=l}else{b.j(a5,p,b.h(a5,q))
b.j(a5,q,o)}q=m
break}}H.ek(a5,r,q,a8)}else H.ek(a5,r,q,a8)},
dM:function dM(a){this.a=a},
N:function N(a){this.a=a},
m:function m(){},
bG:function bG(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bm:function bm(a,b){this.a=a
this.b=b},
cb:function cb(a,b){this.a=a
this.b=b},
dQ:function dQ(a,b){this.a=null
this.b=a
this.c=b},
cM:function cM(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
cd:function cd(){},
eP:function eP(){},
bP:function bP(){},
n1:function(){throw H.c(P.x("Cannot modify unmodifiable Map"))},
ms:function(a){var s,r=H.mr(a)
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
s=J.a5(a)
if(typeof s!="string")throw H.c(H.aA(a))
return s},
cu:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
ln:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.b(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a_(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.D(q,o)|32)>r)return n}return parseInt(a,b)},
ee:function(a){return H.nk(a)},
nk:function(a){var s,r,q
if(a instanceof P.L)return H.ag(H.bu(a),null)
if(J.dc(a)===C.M||t.ak.b(a)){s=C.r(a)
if(H.lm(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.lm(q))return q}}return H.ag(H.bu(a),null)},
lm:function(a){var s=a!=="Object"&&a!==""
return s},
nl:function(){if(!!self.location)return self.location.href
return null},
ll:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
nt:function(a){var s,r,q,p=H.d([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.bW(q))throw H.c(H.aA(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aG(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.aA(q))}return H.ll(p)},
lo:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bW(q))throw H.c(H.aA(q))
if(q<0)throw H.c(H.aA(q))
if(q>65535)return H.nt(a)}return H.ll(a)},
nu:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.hK()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aL:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aG(s,10))>>>0,56320|s&1023)}}throw H.c(P.a_(a,0,1114111,null,null))},
bN:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ns:function(a){var s=H.bN(a).getFullYear()+0
return s},
nq:function(a){var s=H.bN(a).getMonth()+1
return s},
nm:function(a){var s=H.bN(a).getDate()+0
return s},
nn:function(a){var s=H.bN(a).getHours()+0
return s},
np:function(a){var s=H.bN(a).getMinutes()+0
return s},
nr:function(a){var s=H.bN(a).getSeconds()+0
return s},
no:function(a){var s=H.bN(a).getMilliseconds()+0
return s},
f:function(a){throw H.c(H.aA(a))},
b:function(a,b){if(a==null)J.aT(a)
throw H.c(H.c_(a,b))},
c_:function(a,b){var s,r,q="index"
if(!H.bW(b))return new P.ah(!0,b,q,null)
s=J.aT(a)
if(!(b<0)){if(typeof s!=="number")return H.f(s)
r=b>=s}else r=!0
if(r)return P.M(b,a,q,null,s)
return P.ef(b,q)},
pk:function(a,b,c){if(a>c)return P.a_(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a_(b,a,c,"end",null)
return new P.ah(!0,b,"end",null)},
aA:function(a){return new P.ah(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.e3()
s=new Error()
s.dartException=a
r=H.pD
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
pD:function(){return J.a5(this.dartException)},
r:function(a){throw H.c(a)},
q:function(a){throw H.c(P.bA(a))},
aN:function(a){var s,r,q,p,o,n
a=H.mo(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.ix(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
iy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lA:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lh:function(a,b){return new H.e2(a,b==null?null:b.method)},
kp:function(a,b){var s=b==null,r=s?null:b.method
return new H.dK(a,r,s?null:b.receiver)},
b9:function(a){if(a==null)return new H.i3(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bv(a,a.dartException)
return H.pd(a)},
bv:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pd:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aG(r,16)&8191)===10)switch(q){case 438:return H.bv(a,H.kp(H.h(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bv(a,H.lh(H.h(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.mv()
o=$.mw()
n=$.mx()
m=$.my()
l=$.mB()
k=$.mC()
j=$.mA()
$.mz()
i=$.mE()
h=$.mD()
g=p.ab(s)
if(g!=null)return H.bv(a,H.kp(s,g))
else{g=o.ab(s)
if(g!=null){g.method="call"
return H.bv(a,H.kp(s,g))}else{g=n.ab(s)
if(g==null){g=m.ab(s)
if(g==null){g=l.ab(s)
if(g==null){g=k.ab(s)
if(g==null){g=j.ab(s)
if(g==null){g=m.ab(s)
if(g==null){g=i.ab(s)
if(g==null){g=h.ab(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bv(a,H.lh(s,g))}}return H.bv(a,new H.eO(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cy()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bv(a,new P.ah(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cy()
return a},
kS:function(a){var s
if(a==null)return new H.fC(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fC(a)},
pm:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
pt:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.t("Unsupported number of arguments for wrapped closure"))},
bZ:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pt)
a.$identity=s
return s},
n0:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.im().constructor.prototype):Object.create(new H.c4(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aB
if(typeof r!=="number")return r.n()
$.aB=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.l5(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.mX(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.l5(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
mX:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mi,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.mV:H.mU
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
mY:function(a,b,c,d){var s=H.l3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
l5:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.n_(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.mY(r,!p,s,b)
if(r===0){p=$.aB
if(typeof p!=="number")return p.n()
$.aB=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.h(H.kf())+";return "+n+"."+H.h(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aB
if(typeof p!=="number")return p.n()
$.aB=p+1
m+=p
return new Function("return function("+m+"){return this."+H.h(H.kf())+"."+H.h(s)+"("+m+");}")()},
mZ:function(a,b,c,d){var s=H.l3,r=H.mW
switch(b?-1:a){case 0:throw H.c(new H.ei("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
n_:function(a,b){var s,r,q,p,o,n,m=H.kf(),l=$.l1
if(l==null)l=$.l1=H.l0("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.mZ(r,!p,s,b)
if(r===1){p="return function(){return this."+H.h(m)+"."+H.h(s)+"(this."+l+");"
o=$.aB
if(typeof o!=="number")return o.n()
$.aB=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.h(m)+"."+H.h(s)+"(this."+l+", "+n+");"
o=$.aB
if(typeof o!=="number")return o.n()
$.aB=o+1
return new Function(p+o+"}")()},
kP:function(a,b,c,d,e,f,g){return H.n0(a,b,c,d,!!e,!!f,g)},
mU:function(a,b){return H.fO(v.typeUniverse,H.bu(a.a),b)},
mV:function(a,b){return H.fO(v.typeUniverse,H.bu(a.c),b)},
l3:function(a){return a.a},
mW:function(a){return a.c},
kf:function(){var s=$.l2
return s==null?$.l2=H.l0("self"):s},
l0:function(a){var s,r,q,p=new H.c4("self","target","receiver","name"),o=J.kn(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.c3("Field name "+a+" not found."))},
pC:function(a){throw H.c(new P.dv(a))},
po:function(a){return v.getIsolateTag(a)},
qK:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pw:function(a){var s,r,q,p,o,n=$.mh.$1(a),m=$.jJ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jS[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ma.$2(a,n)
if(q!=null){m=$.jJ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jS[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.k3(s)
$.jJ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jS[n]=s
return s}if(p==="-"){o=H.k3(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.mm(a,s)
if(p==="*")throw H.c(P.iH(n))
if(v.leafTags[n]===true){o=H.k3(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.mm(a,s)},
mm:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kU(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
k3:function(a){return J.kU(a,!1,null,!!a.$iw)},
px:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.k3(s)
else return J.kU(s,c,null,null)},
pr:function(){if(!0===$.kT)return
$.kT=!0
H.ps()},
ps:function(){var s,r,q,p,o,n,m,l
$.jJ=Object.create(null)
$.jS=Object.create(null)
H.pq()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mn.$1(o)
if(n!=null){m=H.px(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
pq:function(){var s,r,q,p,o,n,m=C.D()
m=H.bY(C.E,H.bY(C.F,H.bY(C.t,H.bY(C.t,H.bY(C.G,H.bY(C.H,H.bY(C.I(C.r),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mh=new H.jO(p)
$.ma=new H.jP(o)
$.mn=new H.jQ(n)},
bY:function(a,b){return a(b)||b},
nb:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.Z("Illegal RegExp pattern ("+String(n)+")",a,null))},
mp:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
pl:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mo:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mq:function(a,b,c){var s=H.pB(a,b,c)
return s},
pB:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mo(b),'g'),H.pl(c))},
c6:function c6(){},
c7:function c7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ix:function ix(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e2:function e2(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a){this.a=a},
i3:function i3(a){this.a=a},
fC:function fC(a){this.a=a
this.b=null},
bz:function bz(){},
iq:function iq(){},
im:function im(){},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ei:function ei(a){this.a=a},
y:function y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hA:function hA(a){this.a=a},
hD:function hD(a,b){this.a=a
this.b=b
this.c=null},
ck:function ck(a){this.a=a},
dP:function dP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
dJ:function dJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bV:function(a){return a},
aP:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c_(b,a))},
or:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.pk(a,b,c))
return b},
cq:function cq(){},
T:function T(){},
bK:function bK(){},
bn:function bn(){},
cr:function cr(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
cs:function cs(){},
bL:function bL(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
ny:function(a,b){var s=b.c
return s==null?b.c=H.kE(a,b.z,!0):s},
lu:function(a,b){var s=b.c
return s==null?b.c=H.d3(a,"l7",[b.z]):s},
lv:function(a){var s=a.y
if(s===6||s===7||s===8)return H.lv(a.z)
return s===11||s===12},
nx:function(a){return a.cy},
kQ:function(a){return H.kF(v.typeUniverse,a,!1)},
b7:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.b7(a,s,a0,a1)
if(r===s)return b
return H.lV(a,r,!0)
case 7:s=b.z
r=H.b7(a,s,a0,a1)
if(r===s)return b
return H.kE(a,r,!0)
case 8:s=b.z
r=H.b7(a,s,a0,a1)
if(r===s)return b
return H.lU(a,r,!0)
case 9:q=b.Q
p=H.db(a,q,a0,a1)
if(p===q)return b
return H.d3(a,b.z,p)
case 10:o=b.z
n=H.b7(a,o,a0,a1)
m=b.Q
l=H.db(a,m,a0,a1)
if(n===o&&l===m)return b
return H.kC(a,n,l)
case 11:k=b.z
j=H.b7(a,k,a0,a1)
i=b.Q
h=H.pa(a,i,a0,a1)
if(j===k&&h===i)return b
return H.lT(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.db(a,g,a0,a1)
o=b.z
n=H.b7(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kD(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.h4("Attempted to substitute unexpected RTI kind "+c))}},
db:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.b7(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pb:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.b7(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pa:function(a,b,c,d){var s,r=b.a,q=H.db(a,r,c,d),p=b.b,o=H.db(a,p,c,d),n=b.c,m=H.pb(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fe()
s.a=q
s.b=o
s.c=m
return s},
d:function(a,b){a[v.arrayRti]=b
return a},
ph:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mi(s)
return a.$S()}return null},
mj:function(a,b){var s
if(H.lv(b))if(a instanceof H.bz){s=H.ph(a)
if(s!=null)return s}return H.bu(a)},
bu:function(a){var s
if(a instanceof P.L){s=a.$ti
return s!=null?s:H.kL(a)}if(Array.isArray(a))return H.m3(a)
return H.kL(J.dc(a))},
m3:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
jz:function(a){var s=a.$ti
return s!=null?s:H.kL(a)},
kL:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.oy(a,s)},
oy:function(a,b){var s=a instanceof H.bz?a.__proto__.__proto__.constructor:b,r=H.o8(v.typeUniverse,s.name)
b.$ccache=r
return r},
mi:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kF(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ox:function(a){var s,r,q=this,p=t.K
if(q===p)return H.d8(q,a,H.oC)
if(!H.aS(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.d8(q,a,H.oF)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bW
else if(s===t.gR||s===t.H)r=H.oB
else if(s===t.N)r=H.oD
else r=s===t.cJ?H.kM:null
if(r!=null)return H.d8(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.pu)){q.r="$i"+p
return H.d8(q,a,H.oE)}}else if(p===7)return H.d8(q,a,H.ov)
return H.d8(q,a,H.ot)},
d8:function(a,b,c){a.b=c
return a.b(b)},
ow:function(a){var s,r,q=this
if(!H.aS(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.oq
else if(q===t.K)r=H.oo
else r=H.ou
q.a=r
return q.a(a)},
p3:function(a){var s,r=a.y
if(!H.aS(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
ot:function(a){var s=this
if(a==null)return H.p3(s)
return H.V(v.typeUniverse,H.mj(a,s),null,s,null)},
ov:function(a){if(a==null)return!0
return this.z.b(a)},
oE:function(a){var s=this,r=s.r
if(a instanceof P.L)return!!a[r]
return!!J.dc(a)[r]},
qI:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.m4(a,s)},
ou:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.m4(a,s)},
m4:function(a,b){throw H.c(H.nZ(H.lN(a,H.mj(a,b),H.ag(b,null))))},
lN:function(a,b,c){var s=P.hq(a),r=H.ag(b==null?H.bu(a):b,null)
return s+": type '"+H.h(r)+"' is not a subtype of type '"+H.h(c)+"'"},
nZ:function(a){return new H.d2("TypeError: "+a)},
a4:function(a,b){return new H.d2("TypeError: "+H.lN(a,null,b))},
oC:function(a){return a!=null},
oo:function(a){return a},
oF:function(a){return!0},
oq:function(a){return a},
kM:function(a){return!0===a||!1===a},
qu:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a4(a,"bool"))},
qw:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a4(a,"bool"))},
qv:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a4(a,"bool?"))},
qx:function(a){if(typeof a=="number")return a
throw H.c(H.a4(a,"double"))},
qz:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a4(a,"double"))},
qy:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a4(a,"double?"))},
bW:function(a){return typeof a=="number"&&Math.floor(a)===a},
qA:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a4(a,"int"))},
qC:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a4(a,"int"))},
qB:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a4(a,"int?"))},
oB:function(a){return typeof a=="number"},
qD:function(a){if(typeof a=="number")return a
throw H.c(H.a4(a,"num"))},
qF:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a4(a,"num"))},
qE:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a4(a,"num?"))},
oD:function(a){return typeof a=="string"},
qG:function(a){if(typeof a=="string")return a
throw H.c(H.a4(a,"String"))},
op:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a4(a,"String"))},
qH:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a4(a,"String?"))},
p6:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.n(r,H.ag(a[q],b))
return s},
m5:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.d([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.W,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.b(a6,i)
l=C.a.n(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.n(" extends ",H.ag(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.ag(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.n(a3,H.ag(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.n(a3,H.ag(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.kX(H.ag(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.h(a1)},
ag:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ag(a.z,b)
return s}if(l===7){r=a.z
s=H.ag(r,b)
q=r.y
return J.kX(q===11||q===12?C.a.n("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.h(H.ag(a.z,b))+">"
if(l===9){p=H.pc(a.z)
o=a.Q
return o.length!==0?p+("<"+H.p6(o,b)+">"):p}if(l===11)return H.m5(a,b,null)
if(l===12)return H.m5(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.b(b,n)
return b[n]}return"?"},
pc:function(a){var s,r=H.mr(a)
if(r!=null)return r
s="minified:"+a
return s},
lW:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
o8:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kF(a,b,!1)
else if(typeof m=="number"){s=m
r=H.d4(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.d3(a,b,q)
n[b]=o
return o}else return m},
o6:function(a,b){return H.m2(a.tR,b)},
o5:function(a,b){return H.m2(a.eT,b)},
kF:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.lS(H.lQ(a,null,b,c))
r.set(b,s)
return s},
fO:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.lS(H.lQ(a,b,c,!0))
q.set(c,r)
return r},
o7:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.kC(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b6:function(a,b){b.a=H.ow
b.b=H.ox
return b},
d4:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.al(null,null)
s.y=b
s.cy=c
r=H.b6(a,s)
a.eC.set(c,r)
return r},
lV:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.o3(a,b,r,c)
a.eC.set(r,s)
return s},
o3:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aS(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.al(null,null)
q.y=6
q.z=b
q.cy=c
return H.b6(a,q)},
kE:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.o2(a,b,r,c)
a.eC.set(r,s)
return s},
o2:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aS(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jT(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jT(q.z))return q
else return H.ny(a,b)}}p=new H.al(null,null)
p.y=7
p.z=b
p.cy=c
return H.b6(a,p)},
lU:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.o0(a,b,r,c)
a.eC.set(r,s)
return s},
o0:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aS(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.d3(a,"l7",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.al(null,null)
q.y=8
q.z=b
q.cy=c
return H.b6(a,q)},
o4:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.al(null,null)
s.y=13
s.z=b
s.cy=q
r=H.b6(a,s)
a.eC.set(q,r)
return r},
fN:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
o_:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
d3:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fN(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.al(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.b6(a,r)
a.eC.set(p,q)
return q},
kC:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fN(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.al(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.b6(a,o)
a.eC.set(q,n)
return n},
lT:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fN(m)
if(j>0){s=l>0?",":""
r=H.fN(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.o_(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.al(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.b6(a,o)
a.eC.set(q,r)
return r},
kD:function(a,b,c,d){var s,r=b.cy+("<"+H.fN(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.o1(a,b,c,r,d)
a.eC.set(r,s)
return s},
o1:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.b7(a,b,r,0)
m=H.db(a,c,r,0)
return H.kD(a,n,m,c!==m)}}l=new H.al(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.b6(a,l)},
lQ:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lS:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.nT(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.lR(a,r,g,f,!1)
else if(q===46)r=H.lR(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.b5(a.u,a.e,f.pop()))
break
case 94:f.push(H.o4(a.u,f.pop()))
break
case 35:f.push(H.d4(a.u,5,"#"))
break
case 64:f.push(H.d4(a.u,2,"@"))
break
case 126:f.push(H.d4(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.kB(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.d3(p,n,o))
else{m=H.b5(p,a.e,n)
switch(m.y){case 11:f.push(H.kD(p,m,o,a.n))
break
default:f.push(H.kC(p,m,o))
break}}break
case 38:H.nU(a,f)
break
case 42:l=a.u
f.push(H.lV(l,H.b5(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.kE(l,H.b5(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.lU(l,H.b5(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fe()
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
f.push(H.lT(p,H.b5(p,a.e,f.pop()),k))
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
H.nW(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.b5(a.u,a.e,h)},
nT:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lR:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.lW(s,o.z)[p]
if(n==null)H.r('No "'+p+'" in "'+H.nx(o)+'"')
d.push(H.fO(s,o,n))}else d.push(p)
return m},
nU:function(a,b){var s=b.pop()
if(0===s){b.push(H.d4(a.u,1,"0&"))
return}if(1===s){b.push(H.d4(a.u,4,"1&"))
return}throw H.c(P.h4("Unexpected extended operation "+H.h(s)))},
b5:function(a,b,c){if(typeof c=="string")return H.d3(a,c,a.sEA)
else if(typeof c=="number")return H.nV(a,b,c)
else return c},
kB:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.b5(a,b,c[s])},
nW:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.b5(a,b,c[s])},
nV:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.h4("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.h4("Bad index "+c+" for "+b.i(0)))},
V:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aS(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aS(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.V(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.V(a,b.z,c,d,e)
if(p===6){s=d.z
return H.V(a,b,c,s,e)}if(r===8){if(!H.V(a,b.z,c,d,e))return!1
return H.V(a,H.lu(a,b),c,d,e)}if(r===7){s=H.V(a,b.z,c,d,e)
return s}if(p===8){if(H.V(a,b,c,d.z,e))return!0
return H.V(a,b,c,H.lu(a,d),e)}if(p===7){s=H.V(a,b,c,d.z,e)
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
if(!H.V(a,k,c,j,e)||!H.V(a,j,e,k,c))return!1}return H.m6(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.m6(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.oA(a,b,c,d,e)}return!1},
m6:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.V(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.V(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.V(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.V(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.V(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
oA:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.V(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.lW(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.V(a,H.fO(a,b,l[p]),c,r[p],e))return!1
return!0},
jT:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aS(a))if(r!==7)if(!(r===6&&H.jT(a.z)))s=r===8&&H.jT(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pu:function(a){var s
if(!H.aS(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aS:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
m2:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
al:function al(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fe:function fe(){this.c=this.b=this.a=null},
f9:function f9(){},
d2:function d2(a){this.a=a},
mr:function(a){return v.mangledGlobalNames[a]},
py:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kU:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
h_:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.kT==null){H.pr()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.iH("Return interceptor for "+H.h(s(a,o))))}q=a.constructor
p=q==null?null:q[J.la()]
if(p!=null)return p
p=H.pw(a)
if(p!=null)return p
if(typeof a=="function")return C.N
s=Object.getPrototypeOf(a)
if(s==null)return C.x
if(s===Object.prototype)return C.x
if(typeof q=="function"){Object.defineProperty(q,J.la(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
la:function(){var s=$.lO
return s==null?$.lO=v.getIsolateTag("_$dart_js"):s},
n8:function(a,b){if(!H.bW(a))throw H.c(P.kZ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a_(a,0,4294967295,"length",null))
return J.n9(new Array(a),b)},
km:function(a,b){if(!H.bW(a)||a<0)throw H.c(P.c3("Length must be a non-negative integer: "+H.h(a)))
return H.d(new Array(a),b.P("u<0>"))},
n9:function(a,b){return J.kn(H.d(a,b.P("u<0>")))},
kn:function(a){a.fixed$length=Array
return a},
na:function(a,b){return J.df(a,b)},
dc:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ch.prototype
return J.dI.prototype}if(typeof a=="string")return J.aF.prototype
if(a==null)return J.ci.prototype
if(typeof a=="boolean")return J.dH.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.L)return a
return J.h_(a)},
pn:function(a){if(typeof a=="number")return J.bk.prototype
if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.L)return a
return J.h_(a)},
aR:function(a){if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.L)return a
return J.h_(a)},
jK:function(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.L)return a
return J.h_(a)},
mg:function(a){if(typeof a=="number")return J.bk.prototype
if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bq.prototype
return a},
kR:function(a){if(typeof a=="string")return J.aF.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bq.prototype
return a},
bt:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.L)return a
return J.h_(a)},
kX:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pn(a).n(a,b)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dc(a).p(a,b)},
kY:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mg(a).l(a,b)},
c2:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mk(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aR(a).h(a,b)},
ka:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mk(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jK(a).j(a,b,c)},
mN:function(a,b){return J.kR(a).D(a,b)},
mO:function(a,b,c){return J.bt(a).fl(a,b,c)},
mP:function(a,b,c,d){return J.bt(a).fI(a,b,c,d)},
mQ:function(a,b){return J.kR(a).T(a,b)},
df:function(a,b){return J.mg(a).aK(a,b)},
kb:function(a,b){return J.aR(a).R(a,b)},
kc:function(a,b){return J.jK(a).H(a,b)},
mR:function(a,b,c,d){return J.bt(a).h5(a,b,c,d)},
kd:function(a,b){return J.jK(a).G(a,b)},
ke:function(a){return J.bt(a).gd1(a)},
ab:function(a){return J.dc(a).gN(a)},
be:function(a){return J.jK(a).gW(a)},
aT:function(a){return J.aR(a).gk(a)},
mS:function(a,b){return J.bt(a).hB(a,b)},
a5:function(a){return J.dc(a).i(a)},
a:function a(){},
dH:function dH(){},
ci:function ci(){},
aY:function aY(){},
e8:function e8(){},
bq:function bq(){},
as:function as(){},
u:function u(a){this.$ti=a},
hz:function hz(a){this.$ti=a},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bk:function bk(){},
ch:function ch(){},
dI:function dI(){},
aF:function aF(){}},P={
nL:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.pe()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bZ(new P.j8(q),1)).observe(s,{childList:true})
return new P.j7(q,s,r)}else if(self.setImmediate!=null)return P.pf()
return P.pg()},
nM:function(a){self.scheduleImmediate(H.bZ(new P.j9(a),0))},
nN:function(a){self.setImmediate(H.bZ(new P.ja(a),0))},
nO:function(a){P.kv(C.n,a)},
kv:function(a,b){var s=C.c.a_(a.a,1000)
return P.nX(s<0?0:s,b)},
lz:function(a,b){var s=C.c.a_(a.a,1000)
return P.nY(s<0?0:s,b)},
nX:function(a,b){var s=new P.d1()
s.e5(a,b)
return s},
nY:function(a,b){var s=new P.d1()
s.e6(a,b)
return s},
qs:function(a){return new P.bS(a,1)},
nP:function(){return C.W},
nQ:function(a){return new P.bS(a,3)},
oH:function(a){return new P.cZ(a)},
p2:function(){var s,r
for(s=$.bX;s!=null;s=$.bX){$.da=null
r=s.b
$.bX=r
if(r==null)$.d9=null
s.a.$0()}},
p9:function(){$.kN=!0
try{P.p2()}finally{$.da=null
$.kN=!1
if($.bX!=null)$.kW().$1(P.mb())}},
p7:function(a){var s=new P.eY(a),r=$.d9
if(r==null){$.bX=$.d9=s
if(!$.kN)$.kW().$1(P.mb())}else $.d9=r.b=s},
p8:function(a){var s,r,q,p=$.bX
if(p==null){P.p7(a)
$.da=$.d9
return}s=new P.eY(a)
r=$.da
if(r==null){s.b=p
$.bX=$.da=s}else{q=r.b
s.b=q
$.da=r.b=s
if(q==null)$.d9=s}},
ly:function(a,b){var s=$.az
if(s===C.f)return P.kv(a,b)
return P.kv(a,s.fN(b))},
nF:function(a,b){var s=$.az
if(s===C.f)return P.lz(a,b)
return P.lz(a,s.d_(b,t.aF))},
m7:function(a,b,c,d,e){P.p8(new P.jC(d,e))},
p4:function(a,b,c,d){var s,r=$.az
if(r===c)return d.$0()
$.az=c
s=r
try{r=d.$0()
return r}finally{$.az=s}},
p5:function(a,b,c,d,e){var s,r=$.az
if(r===c)return d.$1(e)
$.az=c
s=r
try{r=d.$1(e)
return r}finally{$.az=s}},
j8:function j8(a){this.a=a},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
d1:function d1(){this.c=0},
jn:function jn(a,b){this.a=a
this.b=b},
jm:function jm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bS:function bS(a,b){this.a=a
this.b=b},
bT:function bT(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cZ:function cZ(a){this.a=a},
eY:function eY(a){this.a=a
this.b=null},
cA:function cA(){},
et:function et(){},
cB:function cB(){},
js:function js(){},
jC:function jC(a,b){this.a=a
this.b=b},
jf:function jf(){},
jg:function jg(a,b){this.a=a
this.b=b},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
nd:function(a,b){return new H.y(a.P("@<0>").bl(b).P("y<1,2>"))},
ne:function(a,b,c){return H.pm(a,new H.y(b.P("@<0>").bl(c).P("y<1,2>")))},
lb:function(a,b){return new H.y(a.P("@<0>").bl(b).P("y<1,2>"))},
lc:function(a){return new P.cO(a.P("cO<0>"))},
kA:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
nS:function(a,b){var s=new P.cP(a,b)
s.c=a.e
return s},
n7:function(a,b,c){var s,r
if(P.kO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.d([],t.s)
$.aa.push(a)
try{P.oG(a,s)}finally{if(0>=$.aa.length)return H.b($.aa,-1)
$.aa.pop()}r=P.lw(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kl:function(a,b,c){var s,r
if(P.kO(a))return b+"..."+c
s=new P.U(b)
$.aa.push(a)
try{r=s
r.a=P.lw(r.a,a,", ")}finally{if(0>=$.aa.length)return H.b($.aa,-1)
$.aa.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kO:function(a){var s,r
for(s=$.aa.length,r=0;r<s;++r)if(a===$.aa[r])return!0
return!1},
oG:function(a,b){var s,r,q,p,o,n,m,l=a.gW(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.w())return
s=H.h(l.gI(l))
b.push(s)
k+=s.length+2;++j}if(!l.w()){if(j<=5)return
if(0>=b.length)return H.b(b,-1)
r=b.pop()
if(0>=b.length)return H.b(b,-1)
q=b.pop()}else{p=l.gI(l);++j
if(!l.w()){if(j<=4){b.push(H.h(p))
return}r=H.h(p)
if(0>=b.length)return H.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gI(l);++j
for(;l.w();p=o,o=n){n=l.gI(l);++j
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
nf:function(a,b,c){var s=P.nd(b,c)
a.G(0,new P.hE(s,b,c))
return s},
ks:function(a){var s,r={}
if(P.kO(a))return"{...}"
s=new P.U("")
try{$.aa.push(a)
s.a+="{"
r.a=!0
J.kd(a,new P.hI(r,s))
s.a+="}"}finally{if(0>=$.aa.length)return H.b($.aa,-1)
$.aa.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cO:function cO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
je:function je(a){this.a=a
this.c=this.b=null},
cP:function cP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cg:function cg(){},
hE:function hE(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(){},
i:function i(){},
cn:function cn(){},
hI:function hI(a,b){this.a=a
this.b=b},
at:function at(){},
fP:function fP(){},
co:function co(){},
bQ:function bQ(a,b){this.a=a
this.$ti=b},
cW:function cW(){},
cQ:function cQ(){},
d5:function d5(){},
nI:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.nJ(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
nJ:function(a,b,c,d){var s=a?$.mG():$.mF()
if(s==null)return null
if(0===c&&d===b.length)return P.lF(s,b)
return P.lF(s,b.subarray(c,P.b1(c,d,b.length)))},
lF:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.b9(r)}return null},
l_:function(a,b,c,d,e,f){if(C.c.b4(f,4)!==0)throw H.c(P.Z("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.Z("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.Z("Invalid base64 padding, more than two '=' characters",a,b))},
on:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
om:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.q()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.aR(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.a7()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.b(r,o)
r[o]=n}return r},
iQ:function iQ(){},
iR:function iR(){},
h8:function h8(){},
h9:function h9(){},
ds:function ds(){},
du:function du(){},
hn:function hn(){},
iO:function iO(){},
iS:function iS(){},
jr:function jr(a){this.b=0
this.c=a},
iP:function iP(a){this.a=a},
jq:function jq(a){this.a=a
this.b=16
this.c=0},
jR:function(a,b){var s=H.ln(a,b)
if(s!=null)return s
throw H.c(P.Z(a,null,null))},
n4:function(a){if(a instanceof H.bz)return a.i(0)
return"Instance of '"+H.h(H.ee(a))+"'"},
hF:function(a,b,c,d){var s,r=c?J.km(a,d):J.n8(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
kr:function(a,b,c){var s,r=H.d([],c.P("u<0>"))
for(s=J.be(a);s.w();)r.push(s.gI(s))
if(b)return r
return J.kn(r)},
ng:function(a,b,c){var s,r,q=J.km(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.b(q,s)
q[s]=r}return q},
ev:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.b1(b,c,r)
if(b<=0){if(typeof c!=="number")return c.a4()
q=c<r}else q=!0
return H.lo(q?s.slice(b,c):s)}if(t.bm.b(a))return H.nu(a,b,P.b1(b,c,a.length))
return P.nD(a,b,c)},
nD:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a_(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a_(c,b,a.length,o,o))
r=J.be(a)
for(q=0;q<b;++q)if(!r.w())throw H.c(P.a_(b,0,q,o,o))
p=[]
if(s)for(;r.w();)p.push(r.gI(r))
else for(q=b;q<c;++q){if(!r.w())throw H.c(P.a_(c,b,q,o,o))
p.push(r.gI(r))}return H.lo(p)},
nv:function(a){return new H.dJ(a,H.nb(a,!1,!0,!1,!1,!1))},
lw:function(a,b,c){var s=J.be(b)
if(!s.w())return a
if(c.length===0){do a+=H.h(s.gI(s))
while(s.w())}else{a+=H.h(s.gI(s))
for(;s.w();)a=a+c+H.h(s.gI(s))}return a},
lC:function(){var s=H.nl()
if(s!=null)return P.nH(s)
throw H.c(P.x("'Uri.base' is not supported"))},
kK:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.mL().b
if(typeof b!="string")H.r(H.aA(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.gh4().bS(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.b(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aL(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
n2:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
n3:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dw:function(a){if(a>=10)return""+a
return"0"+a},
l6:function(a){return new P.bh(1000*a)},
hq:function(a){if(typeof a=="number"||H.kM(a)||null==a)return J.a5(a)
if(typeof a=="string")return JSON.stringify(a)
return P.n4(a)},
h4:function(a){return new P.di(a)},
c3:function(a){return new P.ah(!1,null,null,a)},
kZ:function(a,b,c){return new P.ah(!0,a,b,c)},
mT:function(a,b){if(a==null)throw H.c(new P.ah(!1,null,b,"Must not be null"))
return a},
lp:function(a){var s=null
return new P.bO(s,s,!1,s,s,a)},
ef:function(a,b){return new P.bO(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.bO(b,c,!0,a,d,"Invalid value")},
b1:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.f(c)
s=a>c}else s=!0
if(s)throw H.c(P.a_(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.f(c)
s=b>c}else s=!0
if(s)throw H.c(P.a_(b,a,c,"end",null))
return b}return c},
lq:function(a,b){if(a<0)throw H.c(P.a_(a,0,null,b,null))
return a},
M:function(a,b,c,d,e){var s=e==null?J.aT(b):e
return new P.dF(s,!0,a,c,"Index out of range")},
x:function(a){return new P.eQ(a)},
iH:function(a){return new P.eN(a)},
bA:function(a){return new P.dt(a)},
t:function(a){return new P.fb(a)},
Z:function(a,b,c){return new P.hw(a,b,c)},
kV:function(a){H.py(a)},
nH:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.lB(a4<a4?C.a.u(a5,0,a4):a5,5,a3).gdL()
else if(s===32)return P.lB(C.a.u(a5,5,a4),0,a3).gdL()}r=P.hF(8,0,!1,t.S)
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
if(P.m8(a5,0,a4,0,r)>=14){if(7>=r.length)return H.b(r,7)
r[7]=a4}if(1>=r.length)return H.b(r,1)
p=r[1]
if(p>=0)if(P.m8(a5,0,p,20,r)===20){if(7>=r.length)return H.b(r,7)
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
j=!1}else{if(!(l<a4&&l===m+2&&C.a.a2(a5,"..",m)))h=l>m+2&&C.a.a2(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.a2(a5,"file",0)){if(o<=0){if(!C.a.a2(a5,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.u(a5,m,a4)
p-=0
q=s-0
l+=q
k+=q
a4=a5.length
o=7
n=7
m=7}else if(m===l){++k
f=l+1
a5=C.a.aO(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.a2(a5,"http",0)){if(q&&n+3===m&&C.a.a2(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aO(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.a2(a5,"https",0)){if(q&&n+4===m&&C.a.a2(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aO(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.u(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.fw(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.og(a5,0,p)
else{if(p===0)P.bU(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.oh(a5,d,o-1):""
b=P.od(a5,o,n,!1)
q=n+1
if(q<m){a=H.ln(C.a.u(a5,q,m),a3)
a0=P.of(a==null?H.r(P.Z("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.oe(a5,m,l,a3,i,b!=null)
a2=l<k?P.kH(a5,l+1,k,a3):a3
return new P.bs(i,c,b,a0,a1,a2,k<a4?P.oc(a5,k+1,a4):a3)},
lE:function(a){var s=t.N
return C.b.h9(H.d(a.split("&"),t.s),P.lb(s,s),new P.iM(C.e))},
nG:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.iJ(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.T(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.jR(C.a.u(a,q,r),null)
if(typeof n!=="number")return n.V()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.b(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.jR(C.a.u(a,q,c),null)
if(typeof n!=="number")return n.V()
if(n>255)j.$2(k,q)
if(p>=s)return H.b(i,p)
i[p]=n
return i},
lD:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.iK(a),b=new P.iL(c,a)
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
l=C.b.gaw(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.nG(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.b(j,g)
j[g]=0
d=g+1
if(d>=i)return H.b(j,d)
j[d]=0
g+=2}else{d=C.c.aG(f,8)
if(g<0||g>=i)return H.b(j,g)
j[g]=d
d=g+1
if(d>=i)return H.b(j,d)
j[d]=f&255
g+=2}}return j},
lX:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bU:function(a,b,c){throw H.c(P.Z(c,a,b))},
of:function(a,b){if(a!=null&&a===P.lX(b))return null
return a},
od:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.T(a,b)===91){s=c-1
if(C.a.T(a,s)!==93)P.bU(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.oa(a,r,s)
if(q<s){p=q+1
o=P.m1(a,C.a.a2(a,"25",p)?q+3:p,s,"%25")}else o=""
P.lD(a,r,q)
return C.a.u(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.T(a,n)===58){q=C.a.bc(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.m1(a,C.a.a2(a,"25",p)?q+3:p,c,"%25")}else o=""
P.lD(a,b,q)
return"["+C.a.u(a,b,q)+o+"]"}return P.oj(a,b,c)},
oa:function(a,b,c){var s=C.a.bc(a,"%",b)
return s>=b&&s<c?s:c},
m1:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.U(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.T(a,s)
if(p===37){o=P.kI(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.U("")
m=i.a+=C.a.u(a,r,s)
if(n)o=C.a.u(a,s,s+3)
else if(o==="%")P.bU(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.U("")
if(r<s){i.a+=C.a.u(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.T(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.u(a,r,s)
if(i==null){i=new P.U("")
n=i}else n=i
n.a+=j
n.a+=P.kG(p)
s+=k
r=s}}}if(i==null)return C.a.u(a,b,c)
if(r<c)i.a+=C.a.u(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
oj:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.T(a,s)
if(o===37){n=P.kI(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.U("")
l=C.a.u(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.u(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.b(C.u,m)
m=(C.u[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.U("")
if(r<s){q.a+=C.a.u(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.b(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.bU(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.T(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.u(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.U("")
m=q}else m=q
m.a+=l
m.a+=P.kG(o)
s+=j
r=s}}}}if(q==null)return C.a.u(a,b,c)
if(r<c){l=C.a.u(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
og:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.lZ(C.a.D(a,b)))P.bU(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.b(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.bU(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.u(a,b,c)
return P.o9(r?a.toLowerCase():a)},
o9:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oh:function(a,b,c){return P.d6(a,b,c,C.P,!1)},
oe:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.d6(a,b,c,C.v,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a8(s,"/"))s="/"+s
return P.oi(s,e,f)},
oi:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a8(a,"/"))return P.ok(a,!s||c)
return P.ol(a)},
kH:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.c3("Both query and queryParameters specified"))
return P.d6(a,b,c,C.k,!0)}if(d==null)return null
s=new P.U("")
r.a=""
d.G(0,new P.jo(new P.jp(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
oc:function(a,b,c){return P.d6(a,b,c,C.k,!0)},
kI:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.T(a,b+1)
r=C.a.T(a,n)
q=H.jN(s)
p=H.jN(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aG(o,4)
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aL(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.u(a,b,b+3).toUpperCase()
return null},
kG:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.b(s,0)
s[0]=37
q=C.a.D(k,a>>>4)
if(1>=r)return H.b(s,1)
s[1]=q
q=C.a.D(k,a&15)
if(2>=r)return H.b(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.fv(a,6*o)&63|p
if(n>=r)return H.b(s,n)
s[n]=37
q=n+1
l=C.a.D(k,m>>>4)
if(q>=r)return H.b(s,q)
s[q]=l
l=n+2
q=C.a.D(k,m&15)
if(l>=r)return H.b(s,l)
s[l]=q
n+=3}}return P.ev(s,0,null)},
d6:function(a,b,c,d,e){var s=P.m0(a,b,c,d,e)
return s==null?C.a.u(a,b,c):s},
m0:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.T(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.b(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.kI(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.b(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.bU(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.T(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.kG(o)}}if(p==null){p=new P.U("")
n=p}else n=p
n.a+=C.a.u(a,q,r)
n.a+=H.h(m)
if(typeof l!=="number")return H.f(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.u(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
m_:function(a){if(C.a.a8(a,"."))return!0
return C.a.di(a,"/.")!==-1},
ol:function(a){var s,r,q,p,o,n,m
if(!P.m_(a))return a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.E(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.b(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.t(s,"/")},
ok:function(a,b){var s,r,q,p,o,n
if(!P.m_(a))return!b?P.lY(a):a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaw(s)!==".."){if(0>=s.length)return H.b(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.b(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaw(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.b(s,0)
r=P.lY(s[0])
if(0>=s.length)return H.b(s,0)
s[0]=r}return C.b.t(s,"/")},
lY:function(a){var s,r,q,p=a.length
if(p>=2&&P.lZ(J.mN(a,0)))for(s=1;s<p;++s){r=C.a.D(a,s)
if(r===58)return C.a.u(a,0,s)+"%3A"+C.a.ae(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.b(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
ob:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.c3("Invalid URL encoding"))}}return s},
kJ:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.D(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.u(a,b,c)
else p=new H.N(C.a.u(a,b,c))}else{p=H.d([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.D(a,o)
if(r>127)throw H.c(P.c3("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.c3("Truncated URI"))
p.push(P.ob(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.V.bS(p)},
lZ:function(a){var s=a|32
return 97<=s&&s<=122},
lB:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.Z(k,a,r))}}if(q<0&&r>b)throw H.c(P.Z(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaw(j)
if(p!==44||r!==n+7||!C.a.a2(a,"base64",n+1))throw H.c(P.Z("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.C.hh(0,a,m,s)
else{l=P.m0(a,m,s,C.k,!0)
if(l!=null)a=C.a.aO(a,m,s,l)}return new P.iI(a,j,c)},
os:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.ng(22,new P.jw(),t.gc),l=new P.jv(m),k=new P.jx(),j=new P.jy(),i=l.$2(0,225)
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
m8:function(a,b,c,d,e){var s,r,q,p,o,n=$.mM()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.b(n,d)
r=n[d]
q=C.a.D(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.b(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.b(e,o)
e[o]=s}return d},
aQ:function aQ(){},
ac:function ac(a,b){this.a=a
this.b=b},
W:function W(){},
bh:function bh(a){this.a=a},
hk:function hk(){},
hl:function hl(){},
I:function I(){},
di:function di(a){this.a=a},
e3:function e3(){},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dF:function dF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eQ:function eQ(a){this.a=a},
eN:function eN(a){this.a=a},
er:function er(a){this.a=a},
dt:function dt(a){this.a=a},
e6:function e6(){},
cy:function cy(){},
dv:function dv(a){this.a=a},
fb:function fb(a){this.a=a},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
l:function l(){},
j:function j(){},
dG:function dG(){},
o:function o(){},
F:function F(){},
ak:function ak(){},
P:function P(){},
L:function L(){},
B:function B(){},
U:function U(a){this.a=a},
iM:function iM(a){this.a=a},
iJ:function iJ(a){this.a=a},
iK:function iK(a){this.a=a},
iL:function iL(a,b){this.a=a
this.b=b},
bs:function bs(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
jp:function jp(a,b){this.a=a
this.b=b},
jo:function jo(a){this.a=a},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(){},
jv:function jv(a){this.a=a},
jx:function jx(){},
jy:function jy(){},
fw:function fw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
f3:function f3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
b8:function(a){var s,r,q,p,o
if(a==null)return null
s=P.lb(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.j(0,o,a[o])}return s},
pi:function(a){var s={}
a.G(0,new P.jD(s))
return s},
ji:function ji(){},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a,b){this.a=a
this.b=b},
jD:function jD(a){this.a=a},
jj:function jj(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=a
this.b=b},
hu:function hu(){},
hv:function hv(){},
jd:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nR:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
fu:function fu(){},
a3:function a3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aG:function aG(){},
dN:function dN(){},
aJ:function aJ(){},
e4:function e4(){},
i4:function i4(){},
eu:function eu(){},
n:function n(){},
aM:function aM(){},
eD:function eD(){},
fi:function fi(){},
fj:function fj(){},
fq:function fq(){},
fr:function fr(){},
fE:function fE(){},
fF:function fF(){},
fL:function fL(){},
fM:function fM(){},
b3:function b3(){},
h6:function h6(){},
dk:function dk(){},
h7:function h7(a){this.a=a},
dl:function dl(){},
aU:function aU(){},
e5:function e5(){},
eZ:function eZ(){},
ep:function ep(){},
fA:function fA(){},
fB:function fB(){}},W={
l4:function(){var s=document.createElement("canvas")
return s},
hm:function(a){return"wheel"},
n6:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.b9(s)}return q},
jc:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lP:function(a,b,c,d){var s=W.jc(W.jc(W.jc(W.jc(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
Y:function(a,b,c,d){var s=new W.fa(a,b,c==null?null:W.m9(new W.jb(c),t.D),!1)
s.fE()
return s},
m9:function(a,b){var s=$.az
if(s===C.f)return a
return s.d_(a,b)},
p:function p(){},
h2:function h2(){},
dg:function dg(){},
dh:function dh(){},
bf:function bf(){},
bg:function bg(){},
aq:function aq(){},
hd:function hd(){},
G:function G(){},
c8:function c8(){},
he:function he(){},
ai:function ai(){},
aD:function aD(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
c9:function c9(){},
ca:function ca(){},
dy:function dy(){},
hj:function hj(){},
f0:function f0(a,b){this.a=a
this.b=b},
H:function H(){},
k:function k(){},
e:function e(){},
ad:function ad(){},
bC:function bC(){},
dB:function dB(){},
dD:function dD(){},
ar:function ar(){},
hy:function hy(){},
bj:function bj(){},
cf:function cf(){},
bF:function bF(){},
bl:function bl(){},
hG:function hG(){},
hZ:function hZ(){},
bH:function bH(){},
dV:function dV(){},
i_:function i_(a){this.a=a},
dW:function dW(){},
i0:function i0(a){this.a=a},
au:function au(){},
dX:function dX(){},
ae:function ae(){},
f_:function f_(a){this.a=a},
v:function v(){},
ct:function ct(){},
av:function av(){},
e9:function e9(){},
eh:function eh(){},
ib:function ib(a){this.a=a},
ej:function ej(){},
am:function am(){},
el:function el(){},
aw:function aw(){},
em:function em(){},
ax:function ax(){},
es:function es(){},
io:function io(a){this.a=a},
an:function an(){},
b2:function b2(){},
ao:function ao(){},
a8:function a8(){},
ex:function ex(){},
ey:function ey(){},
it:function it(){},
ay:function ay(){},
bp:function bp(){},
eC:function eC(){},
iw:function iw(){},
aO:function aO(){},
iN:function iN(){},
eV:function eV(){},
b4:function b4(){},
bR:function bR(){},
f1:function f1(){},
cN:function cN(){},
ff:function ff(){},
cR:function cR(){},
fz:function fz(){},
fG:function fG(){},
kj:function kj(a,b){this.a=a
this.$ti=b},
fa:function fa(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jb:function jb(a){this.a=a},
kz:function kz(a){this.$ti=a},
K:function K(){},
ce:function ce(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
f2:function f2(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
fc:function fc(){},
fd:function fd(){},
fg:function fg(){},
fh:function fh(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fs:function fs(){},
ft:function ft(){},
fv:function fv(){},
cX:function cX(){},
cY:function cY(){},
fx:function fx(){},
fy:function fy(){},
fD:function fD(){},
fH:function fH(){},
fI:function fI(){},
d_:function d_(){},
d0:function d0(){},
fJ:function fJ(){},
fK:function fK(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){}},K={
a0:function(a){var s=new K.ic()
s.dY(a)
return s},
h3:function h3(){},
dE:function dE(){},
hJ:function hJ(){},
b_:function b_(){this.a=null},
ic:function ic(){this.a=null},
ml:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="testCanvas",a1=null,a2="modifiers",a3=V.nz("Test 035"),a4=W.l4()
a4.className="pageLargeCanvas"
a4.id=a0
a3.a.appendChild(a4)
s=t.i
a3.cW(H.d(["A test of the bending a shape with the Material Light Shader. ","Not all of the shapes have predefined bend values."],s))
a3.fH(H.d(["shapes"],s))
a3.cW(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a0)
if(r==null)H.r(P.t("Failed to find an element with the identifier, testCanvas."))
q=E.nE(r,!0,!0,!0,!1)
p=new E.bi()
p.a=""
p.b=!0
a3=t.b1
o=O.kh(a3)
p.y=o
o.b5(p.ghi(),p.ghl())
p.dy=p.dx=p.db=p.cy=p.cx=p.ch=p.Q=p.z=null
p.scm(0,a1)
p.saZ(a1)
p.saZ(U.bB(a1))
n=new O.dR()
o=O.kh(t.hc)
n.e=o
o.b5(n.gex(),n.gez())
o=new O.aH(n,"emission")
o.c=new A.a2(!1,!1,!1)
o.f=new V.X(0,0,0)
n.f=o
o=new O.aH(n,"ambient")
o.c=new A.a2(!1,!1,!1)
o.f=new V.X(0,0,0)
n.r=o
o=new O.aH(n,"diffuse")
o.c=new A.a2(!1,!1,!1)
o.f=new V.X(0,0,0)
n.x=o
o=new O.aH(n,"invDiffuse")
o.c=new A.a2(!1,!1,!1)
o.f=new V.X(0,0,0)
n.y=o
o=new O.hP(n,"specular")
o.c=new A.a2(!1,!1,!1)
o.f=new V.X(0,0,0)
o.ch=100
n.z=o
o=new O.hL(n,"bump")
o.c=new A.a2(!1,!1,!1)
n.Q=o
n.ch=null
o=new O.aH(n,"reflect")
o.c=new A.a2(!1,!1,!1)
o.f=new V.X(0,0,0)
n.cx=o
o=new O.hO(n,"refract")
o.c=new A.a2(!1,!1,!1)
o.f=new V.X(0,0,0)
o.ch=1
n.cy=o
o=new O.hK(n,"alpha")
o.c=new A.a2(!1,!1,!1)
o.f=1
n.db=o
o=new D.cj()
o.bk(t.gj)
o.e=H.d([],t.bb)
o.f=H.d([],t.cP)
o.r=H.d([],t.eb)
o.x=H.d([],t.du)
o.z=o.y=null
o.cl(o.gev(),o.gf6(),o.gfa())
n.dx=o
m=new O.hN()
m.b=new V.aC(0,0,0,0)
m.c=1
m.d=10
m.e=!1
n.dy=m
m=o.y
o=m==null?o.y=D.J():m
o.m(0,n.gfn())
o=n.dx
m=o.z
o=m==null?o.z=D.J():m
o.m(0,n.geD())
n.fr=null
o=n.dx
l=V.kx()
m=U.bB(V.ld(V.lk(),l,new V.z(1,1,-3)))
k=new V.X(1,1,1)
j=new D.aV()
j.c=new V.X(1,1,1)
j.a=V.lK()
j.d=V.kx()
j.e=V.nK()
i=j.b
j.b=m
m.gA().m(0,j.ge0())
m=new D.A("mover",i,j.b)
m.b=!0
j.ao(m)
if(!j.c.p(0,k)){i=j.c
j.c=k
m=new D.A("color",i,k)
m.b=!0
j.ao(m)}o.m(0,j)
o=n.r
o.saJ(0,new V.X(0,0,1))
o=n.x
o.saJ(0,new V.X(0,1,0))
o=n.z
o.saJ(0,new V.X(1,0,0))
o=n.z
o.cO(new A.a2(!0,!1,!1))
o.cP(10)
n.e.m(0,V.a7())
n.e.m(0,V.a7())
n.e.m(0,V.a7())
n.e.m(0,V.a7())
n.e.m(0,V.a7())
n.e.m(0,V.a7())
n.e.m(0,V.a7())
n.e.m(0,V.a7())
h=U.kk()
o=q.x
m=new U.cJ()
j=U.ki()
j.sck(0,!0)
j.sc7(6.283185307179586)
j.sc9(0)
j.sX(0,0)
j.sc8(100)
j.sO(0)
j.sbU(0.5)
m.b=j
g=m.gaC()
j.gA().m(0,g)
j=U.ki()
j.sck(0,!0)
j.sc7(6.283185307179586)
j.sc9(0)
j.sX(0,0)
j.sc8(100)
j.sO(0)
j.sbU(0.5)
m.c=j
j.gA().m(0,g)
m.d=null
m.r=m.f=m.e=!1
m.y=m.x=2.5
m.Q=4
m.ch=m.cx=!1
m.db=m.cy=0
m.dx=null
m.dy=0
m.fx=m.fr=null
f=new X.aj(!1,!1,!1)
i=m.d
m.d=f
j=new D.A(a2,i,f)
j.b=!0
m.C(j)
j=m.f
if(j!==!1){m.f=!1
j=new D.A("invertX",j,!1)
j.b=!0
m.C(j)}j=m.r
if(j!==!1){m.r=!1
j=new D.A("invertY",j,!1)
j.b=!0
m.C(j)}m.aT(o)
h.m(0,m)
o=q.x
m=new U.cI()
j=U.ki()
j.sck(0,!0)
j.sc7(6.283185307179586)
j.sc9(0)
j.sX(0,0)
j.sc8(100)
j.sO(0)
j.sbU(0.2)
m.b=j
j.gA().m(0,m.gaC())
m.c=null
m.d=!1
m.e=2.5
m.r=4
m.x=m.y=!1
m.z=0
m.Q=null
m.ch=0
m.cy=m.cx=null
f=new X.aj(!0,!1,!1)
i=m.c
m.c=f
j=new D.A(a2,i,f)
j.b=!0
m.C(j)
m.aT(o)
h.m(0,m)
o=q.x
m=new U.cK()
m.c=0.01
m.e=m.d=0
f=new X.aj(!1,!1,!1)
m.b=f
j=new D.A(a2,a1,f)
j.b=!0
m.C(j)
m.aT(o)
h.m(0,m)
h.m(0,U.bB(V.hY(0,0,5)))
e=U.kk()
e.m(0,U.bB(V.hY(0.5,0,0)))
e.m(0,U.cw(0,1.7,0))
e.m(0,U.cw(0.5,0,0))
e.m(0,U.bB(V.kt(0.35)))
e.m(0,U.cw(-0.5,0,0))
e.m(0,U.cw(0,-1.7,0))
e.m(0,U.bB(V.hY(-0.5,0,0)))
d=U.kk()
d.m(0,U.cw(0,-1.4,0))
d.m(0,U.bB(V.hY(0.5,0,0)))
d.m(0,U.cw(0,1.4,0))
c=new M.dz()
c.a=!0
a3=O.kh(a3)
c.e=a3
a3.b5(c.geF(),c.geH())
c.y=c.x=c.r=c.f=null
b=X.n5(a1)
a=new X.e7()
a.c=1.0471975511965976
a.d=0.1
a.e=2000
a.saZ(a1)
a3=a.c
$.C().toString
if(!(Math.abs(a3-1.0471975511965976)<1e-9)){a.c=1.0471975511965976
a3=new D.A("fov",a3,1.0471975511965976)
a3.b=!0
a.aD(a3)}a3=a.d
$.C().toString
if(!(Math.abs(a3-0.1)<1e-9)){a.d=0.1
a3=new D.A("near",a3,0.1)
a3.b=!0
a.aD(a3)}a3=a.e
$.C().toString
if(!(Math.abs(a3-2000)<1e-9)){a.e=2000
a3=new D.A("far",a3,2000)
a3.b=!0
a.aD(a3)}a3=c.b
if(a3!==a){if(a3!=null)a3.gA().J(0,c.gak())
i=c.b
c.b=a
a.gA().m(0,c.gak())
a3=new D.A("camera",i,c.b)
a3.b=!0
c.ap(a3)}a3=c.c
if(a3!==b){if(a3!=null)a3.gA().J(0,c.gak())
i=c.c
c.c=b
b.gA().m(0,c.gak())
a3=new D.A("target",i,c.c)
a3.b=!0
c.ap(a3)}c.sdH(a1)
c.sdH(n)
c.e.m(0,p)
c.b.saZ(h)
a3=c.f
if(a3==null)a3=c.f=D.J()
a3.m(0,new K.jV(e,d,n))
a3=q.d
if(a3!==c){if(a3!=null)a3.gA().J(0,q.gcr())
q.d=c
c.gA().m(0,q.gcr())
q.cs()}a3=new K.k2(p)
o=new V.i5("shapes")
s=s.getElementById("shapes")
o.c=s
if(s==null)H.r("Failed to find shapes for RadioGroup")
o.cV(0,"Cuboid",new K.jW(a3),!0)
o.aH(0,"Cylinder",new K.jX(a3))
o.aH(0,"Cone",new K.jY(a3))
o.aH(0,"Sphere",new K.jZ(a3))
o.aH(0,"Toroid",new K.k_(a3))
o.aH(0,"Knot",new K.k0(a3))
o.aH(0,"Grid",new K.k1(a3))
V.pz(q)},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a}},L={eq:function eq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},eA:function eA(a,b,c){this.a=a
this.b=b
this.c=c},eB:function eB(a){this.b=a
this.c=null},iu:function iu(){var _=this
_.d=_.c=_.b=_.a=null},eE:function eE(a){this.b=a
this.a=this.c=null}},O={
kh:function(a){var s=new O.a1(a.P("a1<0>"))
s.bk(a)
return s},
a1:function a1(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cp:function cp(){this.b=this.a=null},
dR:function dR(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(){},
hS:function hS(a,b){this.a=a
this.b=b},
hT:function hT(){},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(){},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(){},
hK:function hK(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dT:function dT(){},
hL:function hL(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aH:function aH(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hN:function hN(){var _=this
_.e=_.d=_.c=_.b=null},
hO:function hO(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hP:function hP(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ew:function ew(){}},E={
lL:function(){if(J.kb(window.navigator.vendor,"Google"))return C.A
if(J.kb(window.navigator.userAgent,"Firefox"))return C.p
var s=window.navigator.appVersion
if(J.aR(s).R(s,"Trident")||C.a.R(s,"Edge"))return C.q
if(J.kb(window.navigator.appName,"Microsoft"))return C.q
return C.B},
lM:function(){var s=window.navigator.appVersion
if(J.aR(s).R(s,"Win"))return C.S
if(C.a.R(s,"Mac"))return C.w
if(C.a.R(s,"Linux"))return C.T
return C.U},
nw:function(a,b){var s=new E.i7(a)
s.dX(a,b)
return s},
nE:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.lx(a,!0,!0,!0,!1)
s=W.l4()
r=s.style
r.width="100%"
r.height="100%"
J.ke(a).m(0,s)
return E.lx(s,!0,!0,!0,!1)},
lx:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.ez(),n=t.z,m=C.m.dO(a,"webgl2",P.ne(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.r(P.t("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.nw(m,a)
m.getParameter(3379)
m.getParameter(34076)
n=new X.eS(a)
s=new X.hB()
s.c=new X.aj(!1,!1,!1)
s.d=P.lc(t.e)
n.b=s
s=new X.i1(n)
s.f=0
s.r=V.bo()
s.x=V.bo()
s.ch=s.Q=1
n.c=s
s=new X.hH(n)
s.r=0
s.x=V.bo()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.iv(n)
s.f=V.bo()
s.r=V.bo()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.d([],t.eG)
s=$.ho
n.Q=(s==null?$.ho=new E.f8(E.lL(),E.lM()):s).a===C.p?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.Y(q,"contextmenu",n.geJ(),!1))
n.z.push(W.Y(a,"focus",n.geP(),!1))
n.z.push(W.Y(a,"blur",n.geB(),!1))
n.z.push(W.Y(q,"keyup",n.geT(),!1))
n.z.push(W.Y(q,"keydown",n.geR(),!1))
n.z.push(W.Y(a,"mousedown",n.geX(),!1))
n.z.push(W.Y(a,"mouseup",n.gf0(),!1))
n.z.push(W.Y(a,p,n.geZ(),!1))
r=n.z
W.hm(a)
W.hm(a)
r.push(W.Y(a,W.hm(a),n.gf2(),!1))
n.z.push(W.Y(q,p,n.geL(),!1))
n.z.push(W.Y(q,"mouseup",n.geN(),!1))
n.z.push(W.Y(q,"pointerlockchange",n.gf4(),!1))
n.z.push(W.Y(a,"touchstart",n.gfg(),!1))
n.z.push(W.Y(a,"touchend",n.gfc(),!1))
n.z.push(W.Y(a,"touchmove",n.gfe(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ac(Date.now(),!1)
o.db=0
o.cM()
return o},
ha:function ha(){},
bi:function bi(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
by:function by(a){this.b=a},
bM:function bM(a){this.b=a},
f8:function f8(a,b){this.a=a
this.b=b},
i7:function i7(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
cz:function cz(a){this.c=a
this.b=null},
ez:function ez(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
is:function is(a){this.a=a}},Z={
ky:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.bV(c)),35044)
a.bindBuffer(b,null)
return new Z.eW(b,s)},
ap:function(a){return new Z.br(a)},
eW:function eW(a,b){this.a=a
this.b=b},
dp:function dp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j6:function j6(a){this.a=a},
dq:function dq(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a){this.a=a}},D={
J:function(){var s=new D.aE()
s.d=0
return s},
hb:function hb(){},
aE:function aE(){var _=this
_.d=_.c=_.b=_.a=null},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
Q:function Q(){this.b=null},
aW:function aW(){this.b=null},
aX:function aX(){this.b=null},
A:function A(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dm:function dm(){},
aV:function aV(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
S:function S(){},
cj:function cj(){var _=this
_.d=_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
eb:function eb(){},
en:function en(){}},X={dr:function dr(a,b){this.a=a
this.b=b},dL:function dL(a,b){this.a=a
this.b=b},hB:function hB(){var _=this
_.d=_.c=_.b=_.a=null},cm:function cm(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hH:function hH(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},bI:function bI(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},i1:function i1(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bJ:function bJ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ec:function ec(){},cC:function cC(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iv:function iv(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eS:function eS(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
n5:function(a){var s=new X.hx(),r=new V.aC(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.lt
if(r==null){r=V.ls(0,0,1,1)
$.lt=r}s.r=r
return s},
kg:function kg(){},
hx:function hx(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ip:function ip(){}},V={
h0:function(a,b,c){var s
if(c<=0)s=a
else if(c>=1)s=b
else{if(typeof b!=="number")return b.q()
if(typeof a!=="number")return H.f(a)
s=a+c*(b-a)}return s},
k9:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.b4(a-b,s)
return(a<0?a+s:a)+b},
D:function(a,b,c){if(a==null)return C.a.ac("null",c)
$.C().toString
return C.a.ac(C.d.dI(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
c0:function(a,b,c){var s,r,q,p,o,n,m=H.d([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.q)(a),++q){p=V.D(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.b(m,o)
s=C.a.ac(m[o],r)
n=m.length
if(o>=n)return H.b(m,o)
m[o]=s}return m},
a7:function(){var s=$.lg
return s==null?$.lg=V.aI(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aI:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
hY:function(a,b,c){return V.aI(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kt:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aI(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
le:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aI(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
lf:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aI(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)},
ld:function(a,b,c){var s=c.F(),r=b.at(s).F(),q=s.at(r),p=new V.z(a.a,a.b,a.c),o=r.K(0).a1(p),n=q.K(0).a1(p),m=s.K(0).a1(p)
return V.aI(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
bo:function(){var s=$.lj
return s==null?$.lj=new V.af(0,0):s},
lk:function(){var s=$.aK
return s==null?$.aK=new V.O(0,0,0):s},
ls:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eg(a,b,c,d)},
cL:function(){var s=$.lJ
return s==null?$.lJ=new V.z(0,0,0):s},
nK:function(){var s=$.iT
return s==null?$.iT=new V.z(-1,0,0):s},
kx:function(){var s=$.iU
return s==null?$.iU=new V.z(0,1,0):s},
lK:function(){var s=$.iV
return s==null?$.iV=new V.z(0,0,1):s},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hp:function hp(){},
dU:function dU(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aZ:function aZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
af:function af(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eg:function eg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
pz:function(a){P.nF(C.L,new V.k4(a))},
nz:function(a){var s=new V.ii()
s.e_(a,!0)
return s},
k4:function k4(a){this.a=a},
i5:function i5(a){this.a=a
this.c=null},
i6:function i6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ii:function ii(){this.b=this.a=null},
ik:function ik(a){this.a=a},
ij:function ij(a){this.a=a}},U={
ki:function(){var s=new U.hc()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
bB:function(a){var s=new U.c5()
if(a==null)a=V.a7()
if(null!=a)s.a=a
return s},
kk:function(){var s=new U.bD()
s.bk(t.ah)
s.b5(s.ge2(),s.gf8())
s.e=null
s.f=V.a7()
s.r=0
return s},
cw:function(a,b,c){var s,r=new U.cv()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.sdN(0)
r.sdA(0,0)
r.sdG(0)
s=r.d
$.C().toString
if(!(Math.abs(s-c)<1e-9)){r.d=c
s=new D.A("deltaYaw",s,c)
s.b=!0
r.C(s)}s=r.e
$.C().toString
if(!(Math.abs(s-a)<1e-9)){r.e=a
s=new D.A("deltaPitch",s,a)
s.b=!0
r.C(s)}s=r.f
$.C().toString
if(!(Math.abs(s-b)<1e-9)){r.f=b
s=new D.A("deltaRoll",s,b)
s.b=!0
r.C(s)}return r},
hc:function hc(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c5:function c5(){this.b=this.a=null},
bD:function bD(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
R:function R(){},
cv:function cv(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cI:function cI(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cJ:function cJ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cK:function cK(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dz:function dz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
ni:function(a,b){var s=a.aW,r=new A.dS(b,s)
r.dZ(b,s)
r.dW(a,b)
return r},
nj:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="MaterialLight_"+a4.gaj(a4)+a5.gaj(a5)+a6.gaj(a6)+a7.gaj(a7)+a8.gaj(a8)+a9.gaj(a9)+b0.gaj(b0)+b1.gaj(b1)+b2.gaj(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.q)(b3),++r)b+="_"+H.h(b3[r].a)}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.q)(b4),++r)b+="_"+H.h(b4[r].a)}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.q)(b5),++r)b+="_"+H.h(b5[r].a)}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.q)(b6),++r)b+="_"+H.h(b6[r].a)}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
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
c=$.bd()
if(h){s=$.bc()
c=new Z.br(c.a|s.a)}if(g){s=$.bb()
c=new Z.br(c.a|s.a)}if(f){s=$.ba()
c=new Z.br(c.a|s.a)}return new A.hM(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
jA:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jB:function(a,b,c){var s
A.jA(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.h1(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
oM:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jA(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
oI:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jB(b,r,"ambient")
b.a+="\n"},
oK:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jB(b,r,"diffuse")
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
oN:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jB(b,r,"invDiffuse")
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
oT:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jB(b,r,"specular")
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
oP:function(a,b){var s,r,q
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
oR:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jA(b,r,"reflect")
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
oS:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jA(b,r,"refract")
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
oJ:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.h(s)
q=A.h1(r)
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
s=c.a+="   return "+C.b.t(o," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.b.t(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.t(o," + ")+");\n"
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
oL:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.h(s)
q=A.h1(r)
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
c.a+="      highLight = intensity*("+C.b.t(k," + ")+");\n"}else c.a+="   highLight = "+C.b.t(k," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.b.t(m," + ")+");\n"
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
oQ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.h(s)
q=A.h1(r)
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
m=c.a+="   return "+C.b.t(j," * ")+";\n"
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
p=c.a+="      highLight = intensity*("+C.b.t(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.b.t(j," + ")+");\n"
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
oU:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.h(s)
q=A.h1(r)
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
if(m){s=$.ho
if(s==null)s=$.ho=new E.f8(E.lL(),E.lM())
p=c.a
if(s.b===C.w){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
p=c.a+="   return "+C.b.t(h," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.b.t(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.t(h," + ")+");\n"
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
oO:function(a,b){var s,r
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
s=b.a+="   return "+C.b.t(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
oV:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.U("")
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
A.oM(a,h)
A.oI(a,h)
A.oK(a,h)
A.oN(a,h)
A.oT(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.oR(a,h)
A.oS(a,h)}A.oP(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.oJ(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.oL(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.oQ(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.oU(a,o[m],h)
A.oO(a,h)}o=h.a+="// === Main ===\n"
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
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ae(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ae(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ae(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ae(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)s=!1
else s=!0
if(s)l.push("emissionColor()")
if(!a.r.a)s=!1
else s=!0
if(s)l.push("reflect(refl)")
if(!a.x.a)s=!1
else s=!0
if(s)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.b.t(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
oW:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.ba+"];\n"
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
oY:function(a,b){var s
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
oX:function(a,b){var s
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
p_:function(a,b){var s,r
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
p0:function(a,b){var s,r
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
oZ:function(a,b){var s
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
p1:function(a,b){var s
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
h1:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.ae(a,1)},
kw:function(a,b,c,d,e){var s=new A.iA(a,c,e)
s.f=d
P.hF(d,0,!1,t.e)
return s},
dj:function dj(a,b,c){this.a=a
this.b=b
this.c=c},
h5:function h5(a){this.a=a},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a,b){var _=this
_.hS=_.hR=_.bb=_.aW=_.ba=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.i4=_.i3=_.i2=_.c1=_.c0=_.c_=_.bZ=_.bY=_.bX=_.bW=_.bV=_.i1=_.i0=_.dc=_.i_=_.hZ=_.da=_.d9=_.hY=_.hX=_.d8=_.d7=_.hW=_.hV=_.d6=_.hU=_.hT=_.d5=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dn:function dn(a,b){this.a=a
this.b=b},
dx:function dx(a,b){this.a=a
this.b=b},
ed:function ed(a,b){this.a=a
this.b=b},
eo:function eo(a,b){this.a=a
this.b=b},
hM:function hM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.ba=b5
_.aW=b6
_.bb=b7},
cD:function cD(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cE:function cE(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cG:function cG(a,b,c,d,e,f,g,h,i,j){var _=this
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
cH:function cH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cx:function cx(){},
eF:function eF(){},
iF:function iF(a){this.a=a},
eH:function eH(a,b,c){this.a=a
this.c=b
this.d=c},
iC:function iC(a,b,c){this.a=a
this.c=b
this.d=c},
iD:function iD(a,b,c){this.a=a
this.c=b
this.d=c},
iE:function iE(a,b,c){this.a=a
this.c=b
this.d=c},
iA:function iA(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
eG:function eG(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){this.a=a
this.c=b
this.d=c},
eI:function eI(a,b,c){this.a=a
this.c=b
this.d=c},
eJ:function eJ(a,b,c){this.a=a
this.c=b
this.d=c},
iG:function iG(a,b,c){this.a=a
this.c=b
this.d=c},
eK:function eK(a,b,c){this.a=a
this.c=b
this.d=c},
cF:function cF(a,b,c){this.a=a
this.c=b
this.d=c},
eL:function eL(a,b,c){this.a=a
this.c=b
this.d=c},
eM:function eM(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mc:function(a,b,c){var s=null,r=F.ku()
F.d7(r,s,b,c,a,1,0,0,1)
F.d7(r,s,b,c,a,0,1,0,3)
F.d7(r,s,b,c,a,0,0,1,2)
F.d7(r,s,b,c,a,-1,0,0,0)
F.d7(r,s,b,c,a,0,-1,0,0)
F.d7(r,s,b,c,a,0,0,-1,3)
r.af()
return r},
ju:function(a){var s,r=a.a
if(typeof r!=="number")return r.V()
s=r>0?1:0
r=a.b
if(typeof r!=="number")return r.V()
if(r>0)s+=2
r=a.c
if(typeof r!=="number")return r.V()
return(r>0?s+4:s)*2},
d7:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.z(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.z(s+a5,r+a3,q+a4)
o=new V.z(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.z(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.ju(g)
j=F.ju(f)
i=F.k7(a1,a2,new F.jt(h,F.ju(e),F.ju(d),j,k,a0),b)
if(i!=null)a.aY(i)},
mf:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0<3)return null
s=F.ku()
r=b?-1:1
q=-6.283185307179586/a0
p=H.d([],t.j)
o=s.a
n=new V.z(0,0,r).F()
p.push(o.fL(new V.b0(a,-1,-1,-1),new V.aC(1,1,1,1),new V.O(0,0,c),new V.z(0,0,r),new V.af(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(typeof i!=="number")return H.f(i)
n=new V.z(k,j,r).F()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
o.toString
e=F.eU(new V.b0(a,-1,-1,-1),null,new V.aC(h,f,g,1),new V.O(k*i,j*i,c),new V.z(0,0,r),new V.af(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.m(0,e)
p.push(e)}s.d.fJ(p)
return s},
md:function(a,b,c,d){return F.pj(!0,a,b,new F.jE(1,d),c)},
pj:function(a,b,c,d,e){var s,r=null
if(e<3)return r
if(c<1)return r
s=F.k7(c,e,new F.jG(d),r)
if(s==null)return r
s.af()
s.bM()
if(b)s.aY(F.mf(3,!1,1,new F.jH(d),e))
s.aY(F.mf(1,!0,-1,new F.jI(d),e))
return s},
pA:function(a,b){var s,r,q={}
q.a=s
q.a=null
q.a=new F.k5()
r=F.mc(a,new F.k6(q,1),b)
r.bM()
return r},
pE:function(a,b){return F.me(15,30,b,a,new F.k8())},
pv:function(a){return F.me(12,120,a,1,new F.jU(3,2))},
me:function(a,b,c,d,e){var s=F.k7(a,b,new F.jF(e,d,b,c),null)
if(s==null)return null
s.af()
s.bM()
return s},
pp:function(){var s,r={}
r.a=s
r.a=null
r.a=new F.jL()
return F.k7(4,4,new F.jM(r),null)},
k7:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.ku()
r=H.d([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.eU(e,e,new V.aC(n,0,0,1),e,e,new V.af(p,1),e,e,0)
o.m(0,m)
c.$3(m,p,0)
r.push(m.bT(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.eU(e,e,new V.aC(h,g,f,1),e,e,new V.af(p,k),e,e,0)
i.m(0,m)
c.$3(m,p,l)
r.push(m.bT(d))}}s.d.fK(a+1,b+1,r)
return s},
cc:function(a,b,c){var s=new F.dA(),r=a.a
if(r==null)H.r(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.r(P.t("May not create a face with vertices attached to different shapes."))
s.bI(a)
s.bJ(b)
s.fq(c)
s.a.a.d.b.push(s)
s.a.a.Z()
return s},
nc:function(a,b){var s=new F.dO(),r=a.a
if(r==null)H.r(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.r(P.t("May not create a line with vertices attached to different shapes."))
s.bI(a)
s.bJ(b)
s.a.a.c.b.push(s)
s.a.a.Z()
return s},
ku:function(){var s=new F.id(),r=new F.iW(s)
r.b=!1
r.c=H.d([],t.j)
s.a=r
r=new F.ih(s)
r.b=H.d([],t.k)
s.b=r
r=new F.ig(s)
r.b=H.d([],t.B)
s.c=r
r=new F.ie(s)
r.b=H.d([],t.b)
s.d=r
s.e=null
return s},
eU:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.eT(),p=new F.j3()
p.b=H.d([],t.k)
q.b=p
p=new F.j_()
s=t.B
p.b=H.d([],s)
p.c=H.d([],s)
q.c=p
p=new F.iX()
s=t.b
p.b=H.d([],s)
p.c=H.d([],s)
p.d=H.d([],s)
q.d=p
h=$.mH()
q.e=0
p=$.bd()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bc().a)!==0?e:r
q.x=(s&$.bb().a)!==0?b:r
q.y=(s&$.bw().a)!==0?f:r
q.z=(s&$.bx().a)!==0?g:r
q.Q=(s&$.mI().a)!==0?c:r
q.ch=(s&$.c1().a)!==0?i:0
q.cx=(s&$.ba().a)!==0?a:r
return q},
jt:function jt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jE:function jE(a,b){this.a=a
this.b=b},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
k5:function k5(){},
k6:function k6(a,b){this.a=a
this.b=b},
k8:function k8(){},
jU:function jU(a,b){this.a=a
this.b=b},
jF:function jF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jL:function jL(){},
jM:function jM(a){this.a=a},
dA:function dA(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ht:function ht(){},
il:function il(){},
dO:function dO(){this.b=this.a=null},
hC:function hC(){},
iz:function iz(){},
ea:function ea(){this.a=null},
id:function id(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a){this.a=a
this.b=null},
ig:function ig(a){this.a=a
this.b=null},
ih:function ih(a){this.a=a
this.b=null},
eT:function eT(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j5:function j5(a){this.a=a},
j4:function j4(a){this.a=a},
iW:function iW(a){this.a=a
this.c=this.b=null},
iX:function iX(){this.d=this.c=this.b=null},
iY:function iY(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(){this.c=this.b=null},
j1:function j1(){},
j0:function j0(){},
j2:function j2(){},
i2:function i2(){},
j3:function j3(){this.b=null}},T={ir:function ir(){}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ko.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gN:function(a){return H.cu(a)},
i:function(a){return"Instance of '"+H.h(H.ee(a))+"'"}}
J.dH.prototype={
i:function(a){return String(a)},
gN:function(a){return a?519018:218159},
$iaQ:1}
J.ci.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gN:function(a){return 0}}
J.aY.prototype={
gN:function(a){return 0},
i:function(a){return String(a)},
$il9:1}
J.e8.prototype={}
J.bq.prototype={}
J.as.prototype={
i:function(a){var s=a[$.mu()]
if(s==null)return this.dU(a)
return"JavaScript function for "+H.h(J.a5(s))}}
J.u.prototype={
cd:function(a,b){if(!!a.fixed$length)H.r(P.x("removeAt"))
if(b<0||b>=a.length)throw H.c(P.ef(b,null))
return a.splice(b,1)[0]},
J:function(a,b){var s
if(!!a.fixed$length)H.r(P.x("remove"))
for(s=0;s<a.length;++s)if(J.E(a[s],b)){a.splice(s,1)
return!0}return!1},
fG:function(a,b){var s,r
if(!!a.fixed$length)H.r(P.x("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.q)(b),++r)a.push(b[r])},
G:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bA(a))}},
t:function(a,b){var s,r,q=P.hF(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.h(a[s])
if(s>=q.length)return H.b(q,s)
q[s]=r}return q.join(b)},
he:function(a){return this.t(a,"")},
h8:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.bA(a))}return s},
h9:function(a,b,c){return this.h8(a,b,c,t.z)},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
gh7:function(a){if(a.length>0)return a[0]
throw H.c(H.l8())},
gaw:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.l8())},
aQ:function(a,b){if(!!a.immutable$list)H.r(P.x("sort"))
H.nC(a,b==null?J.oz():b)},
dR:function(a){return this.aQ(a,null)},
R:function(a,b){var s
for(s=0;s<a.length;++s)if(J.E(a[s],b))return!0
return!1},
i:function(a){return P.kl(a,"[","]")},
gW:function(a){return new J.a6(a,a.length)},
gN:function(a){return H.cu(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.x("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.c_(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.r(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c_(a,b))
a[b]=c},
$im:1,
$ij:1,
$io:1}
J.hz.prototype={}
J.a6.prototype={
gI:function(a){return this.d},
w:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bk.prototype={
aK:function(a,b){var s
if(typeof b!="number")throw H.c(H.aA(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbd(b)
if(this.gbd(a)===s)return 0
if(this.gbd(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbd:function(a){return a===0?1/a<0:a<0},
dd:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.x(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.x(""+a+".round()"))},
dI:function(a,b){var s
if(b>20)throw H.c(P.a_(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbd(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gN:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
b4:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dV:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cR(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.cR(a,b)},
cR:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.x("Result of truncating division is "+H.h(s)+": "+H.h(a)+" ~/ "+b))},
aG:function(a,b){var s
if(a>0)s=this.cQ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fv:function(a,b){if(b<0)throw H.c(H.aA(b))
return this.cQ(a,b)},
cQ:function(a,b){return b>31?0:a>>>b},
$iW:1,
$iP:1}
J.ch.prototype={$il:1}
J.dI.prototype={}
J.aF.prototype={
T:function(a,b){if(b<0)throw H.c(H.c_(a,b))
if(b>=a.length)H.r(H.c_(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.c_(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!="string")throw H.c(P.kZ(b,null,null))
return a+b},
aO:function(a,b,c,d){var s,r,q=P.b1(b,c,a.length)
if(!H.bW(q))H.r(H.aA(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
a2:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a_(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a8:function(a,b){return this.a2(a,b,0)},
u:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.ef(b,null))
if(b>c)throw H.c(P.ef(b,null))
if(c>a.length)throw H.c(P.ef(c,null))
return a.substring(b,c)},
ae:function(a,b){return this.u(a,b,null)},
l:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.J)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ac:function(a,b){var s=b-a.length
if(s<=0)return a
return this.l(" ",s)+a},
bc:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a_(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
di:function(a,b){return this.bc(a,b,0)},
fR:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a_(c,0,s,null,null))
return H.mp(a,b,c)},
R:function(a,b){return this.fR(a,b,0)},
aK:function(a,b){var s
if(typeof b!="string")throw H.c(H.aA(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gN:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gk:function(a){return a.length},
$iB:1}
H.dM.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.N.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return C.a.T(this.a,b)}}
H.m.prototype={}
H.bG.prototype={
gI:function(a){var s=this.d
return s},
w:function(){var s,r=this,q=r.a,p=J.aR(q),o=p.gk(q)
if(r.b!=o)throw H.c(P.bA(q))
s=r.c
if(typeof o!=="number")return H.f(o)
if(s>=o){r.d=null
return!1}r.d=p.H(q,s);++r.c
return!0}}
H.bm.prototype={
gW:function(a){return new H.dQ(J.be(this.a),this.b)},
gk:function(a){return J.aT(this.a)},
H:function(a,b){return this.b.$1(J.kc(this.a,b))}}
H.cb.prototype={$im:1}
H.dQ.prototype={
w:function(){var s=this,r=s.b
if(r.w()){s.a=s.c.$1(r.gI(r))
return!0}s.a=null
return!1},
gI:function(a){var s=this.a
return s}}
H.cM.prototype={
gW:function(a){return new H.eX(J.be(this.a),this.b)}}
H.eX.prototype={
w:function(){var s,r
for(s=this.a,r=this.b;s.w();)if(r.$1(s.gI(s)))return!0
return!1},
gI:function(a){var s=this.a
return s.gI(s)}}
H.cd.prototype={}
H.eP.prototype={
j:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))}}
H.bP.prototype={}
H.c6.prototype={
i:function(a){return P.ks(this)},
j:function(a,b,c){H.n1()},
$iF:1}
H.c7.prototype={
gk:function(a){return this.a},
bR:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bR(0,b))return null
return this.cC(b)},
cC:function(a){return this.b[a]},
G:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cC(q))}}}
H.ix.prototype={
ab:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.e2.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dK.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.h(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.h(r.a)+")"
return q+p+"' on '"+s+"' ("+H.h(r.a)+")"}}
H.eO.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.i3.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fC.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bz.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.ms(r==null?"unknown":r)+"'"},
ghJ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iq.prototype={}
H.im.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.ms(s)+"'"}}
H.c4.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.c4))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gN:function(a){var s,r=this.c
if(r==null)s=H.cu(this.a)
else s=typeof r!=="object"?J.ab(r):H.cu(r)
return(s^H.cu(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.h(H.ee(s))+"'")}}
H.ei.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.y.prototype={
gk:function(a){return this.a},
gaa:function(a){return new H.ck(this)},
ghI:function(a){return H.nh(this.gaa(this),new H.hA(this))},
bR:function(a,b){var s=this.b
if(s==null)return!1
return this.ei(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b6(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b6(p,b)
q=r==null?n:r.b
return q}else return o.hc(b)},
hc:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cD(p,q.dj(a))
r=q.dk(s,a)
if(r<0)return null
return s[r].b},
j:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cv(s==null?q.b=q.bB():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cv(r==null?q.c=q.bB():r,b,c)}else q.hd(b,c)},
hd:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bB()
s=p.dj(a)
r=p.cD(o,s)
if(r==null)p.bG(o,s,[p.bC(a,b)])
else{q=p.dk(r,a)
if(q>=0)r[q].b=b
else r.push(p.bC(a,b))}},
G:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bA(s))
r=r.c}},
cv:function(a,b,c){var s=this.b6(a,b)
if(s==null)this.bG(a,b,this.bC(b,c))
else s.b=c},
bC:function(a,b){var s=this,r=new H.hD(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dj:function(a){return J.ab(a)&0x3ffffff},
dk:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.E(a[r].a,b))return r
return-1},
i:function(a){return P.ks(this)},
b6:function(a,b){return a[b]},
cD:function(a,b){return a[b]},
bG:function(a,b,c){a[b]=c},
el:function(a,b){delete a[b]},
ei:function(a,b){return this.b6(a,b)!=null},
bB:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bG(r,s,r)
this.el(r,s)
return r}}
H.hA.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.jz(this.a).P("2(1)")}}
H.hD.prototype={}
H.ck.prototype={
gk:function(a){return this.a.a},
gW:function(a){var s=this.a,r=new H.dP(s,s.r)
r.c=s.e
return r}}
H.dP.prototype={
gI:function(a){return this.d},
w:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bA(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jO.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.jP.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jQ.prototype={
$1:function(a){return this.a(a)}}
H.dJ.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilr:1}
H.cq.prototype={$icq:1}
H.T.prototype={$iT:1}
H.bK.prototype={
gk:function(a){return a.length},
$iw:1}
H.bn.prototype={
h:function(a,b){H.aP(b,a,a.length)
return a[b]},
j:function(a,b,c){H.aP(b,a,a.length)
a[b]=c},
$im:1,
$ij:1,
$io:1}
H.cr.prototype={
j:function(a,b,c){H.aP(b,a,a.length)
a[b]=c},
$im:1,
$ij:1,
$io:1}
H.dY.prototype={
h:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.dZ.prototype={
h:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.e_.prototype={
h:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.e0.prototype={
h:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.e1.prototype={
h:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.cs.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.bL.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aP(b,a,a.length)
return a[b]},
$ibL:1,
$ib3:1}
H.cS.prototype={}
H.cT.prototype={}
H.cU.prototype={}
H.cV.prototype={}
H.al.prototype={
P:function(a){return H.fO(v.typeUniverse,this,a)},
bl:function(a){return H.o7(v.typeUniverse,this,a)}}
H.fe.prototype={}
H.f9.prototype={
i:function(a){return this.a}}
H.d2.prototype={}
P.j8.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:15}
P.j7.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.j9.prototype={
$0:function(){this.a.$0()}}
P.ja.prototype={
$0:function(){this.a.$0()}}
P.d1.prototype={
e5:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bZ(new P.jn(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
e6:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bZ(new P.jm(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$icB:1}
P.jn.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jm.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dV(s,o)}q.c=p
r.d.$1(q)}}
P.bS.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.h(this.a)+")"}}
P.bT.prototype={
gI:function(a){var s=this.c
if(s==null)return this.b
return s.gI(s)},
w:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.w())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bS){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.b(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.be(s)
if(o instanceof P.bT){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cZ.prototype={
gW:function(a){return new P.bT(this.a())}}
P.eY.prototype={}
P.cA.prototype={}
P.et.prototype={}
P.cB.prototype={}
P.js.prototype={}
P.jC.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.a5(this.b)
throw s}}
P.jf.prototype={
hD:function(a){var s,r,q,p=null
try{if(C.f===$.az){a.$0()
return}P.p4(p,p,this,a)}catch(q){s=H.b9(q)
r=H.kS(q)
P.m7(p,p,this,s,r)}},
hE:function(a,b){var s,r,q,p=null
try{if(C.f===$.az){a.$1(b)
return}P.p5(p,p,this,a,b)}catch(q){s=H.b9(q)
r=H.kS(q)
P.m7(p,p,this,s,r)}},
hF:function(a,b){return this.hE(a,b,t.z)},
fN:function(a){return new P.jg(this,a)},
d_:function(a,b){return new P.jh(this,a,b)}}
P.jg.prototype={
$0:function(){return this.a.hD(this.b)}}
P.jh.prototype={
$1:function(a){return this.a.hF(this.b,a)},
$S:function(){return this.c.P("~(0)")}}
P.cO.prototype={
gW:function(a){var s=new P.cP(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
R:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ef(b)
return r}},
ef:function(a){var s=this.d
if(s==null)return!1
return this.bs(s[this.bo(a)],a)>=0},
m:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cw(s==null?q.b=P.kA():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cw(r==null?q.c=P.kA():r,b)}else return q.e8(0,b)},
e8:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kA()
s=q.bo(b)
r=p[s]
if(r==null)p[s]=[q.bn(b)]
else{if(q.bs(r,b)>=0)return!1
r.push(q.bn(b))}return!0},
J:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fj(this.c,b)
else return this.fi(0,b)},
fi:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bo(b)
r=n[s]
q=o.bs(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cT(p)
return!0},
cw:function(a,b){if(a[b]!=null)return!1
a[b]=this.bn(b)
return!0},
fj:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cT(s)
delete a[b]
return!0},
cG:function(){this.r=1073741823&this.r+1},
bn:function(a){var s,r=this,q=new P.je(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cG()
return q},
cT:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cG()},
bo:function(a){return J.ab(a)&1073741823},
bs:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.E(a[r].a,b))return r
return-1}}
P.je.prototype={}
P.cP.prototype={
gI:function(a){return this.d},
w:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bA(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cg.prototype={}
P.hE.prototype={
$2:function(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cl.prototype={$im:1,$ij:1,$io:1}
P.i.prototype={
gW:function(a){return new H.bG(a,this.gk(a))},
H:function(a,b){return this.h(a,b)},
gdm:function(a){return this.gk(a)===0},
hG:function(a){var s,r,q,p,o=this
if(o.gdm(a)){s=J.km(0,H.bu(a).P("i.E"))
return s}r=o.h(a,0)
q=P.hF(o.gk(a),r,!0,H.bu(a).P("i.E"))
p=1
while(!0){s=o.gk(a)
if(typeof s!=="number")return H.f(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.b(q,p)
q[p]=s;++p}return q},
h5:function(a,b,c,d){var s
P.b1(b,c,this.gk(a))
for(s=b;s<c;++s)this.j(a,s,d)},
i:function(a){return P.kl(a,"[","]")}}
P.cn.prototype={}
P.hI.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.h(a)
r.a=s+": "
r.a+=H.h(b)},
$S:16}
P.at.prototype={
G:function(a,b){var s,r
for(s=J.be(this.gaa(a));s.w();){r=s.gI(s)
b.$2(r,this.h(a,r))}},
gk:function(a){return J.aT(this.gaa(a))},
i:function(a){return P.ks(a)},
$iF:1}
P.fP.prototype={
j:function(a,b,c){throw H.c(P.x("Cannot modify unmodifiable map"))}}
P.co.prototype={
h:function(a,b){return J.c2(this.a,b)},
j:function(a,b,c){J.ka(this.a,b,c)},
G:function(a,b){J.kd(this.a,b)},
gk:function(a){return J.aT(this.a)},
i:function(a){return J.a5(this.a)},
$iF:1}
P.bQ.prototype={}
P.cW.prototype={
i:function(a){return P.kl(this,"{","}")},
H:function(a,b){var s,r,q,p="index"
P.mT(b,p)
P.lq(b,p)
for(s=P.nS(this,this.r),r=0;s.w();){q=s.d
if(b===r)return q;++r}throw H.c(P.M(b,this,p,null,r))},
$im:1,
$ij:1}
P.cQ.prototype={}
P.d5.prototype={}
P.iQ.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.b9(r)}return null}}
P.iR.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.b9(r)}return null}}
P.h8.prototype={
hh:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.b1(a2,a3,a1.length)
if(a3==null)throw H.c(P.lp("Invalid range"))
s=$.mK()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.D(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.jN(C.a.D(a1,l))
h=H.jN(C.a.D(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.b(s,g)
f=s[g]
if(f>=0){g=C.a.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.U("")
e=p}else e=p
d=e.a+=C.a.u(a1,q,r)
e.a=d+H.aL(k)
q=l
continue}}throw H.c(P.Z("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.u(a1,q,a3)
d=e.length
if(o>=0)P.l_(a1,n,a3,o,m,d)
else{c=C.c.b4(d-1,4)+1
if(c===1)throw H.c(P.Z(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aO(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.l_(a1,n,a3,o,m,b)
else{c=C.c.b4(b,4)
if(c===1)throw H.c(P.Z(a,a1,a3))
if(c>1)a1=C.a.aO(a1,a3,a3,c===2?"==":"=")}return a1}}
P.h9.prototype={}
P.ds.prototype={}
P.du.prototype={}
P.hn.prototype={}
P.iO.prototype={
gh4:function(){return C.K}}
P.iS.prototype={
bS:function(a){var s,r,q,p=P.b1(0,null,a.length)
if(p==null)throw H.c(P.lp("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.jr(r)
if(q.en(a,0,p)!==p){J.mQ(a,p-1)
q.bL()}return new Uint8Array(r.subarray(0,H.or(0,q.b,r.length)))}}
P.jr.prototype={
bL:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.b(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.b(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.b(r,q)
r[q]=189},
fF:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bL()
return!1}},
en:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.T(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fF(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bL()}else if(p<=2047){o=l.b
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
P.iP.prototype={
bS:function(a){var s=this.a,r=P.nI(s,a,0,null)
if(r!=null)return r
return new P.jq(s).fS(a,0,null,!0)}}
P.jq.prototype={
fS:function(a,b,c,d){var s,r,q,p,o=this,n=P.b1(b,c,J.aT(a))
if(b===n)return""
s=P.om(a,b,n)
if(typeof n!=="number")return n.q()
n-=b
r=o.bp(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.on(q)
o.b=0
throw H.c(P.Z(p,a,b+o.c))}return r},
bp:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.q()
if(c-b>1000){s=C.c.a_(b+c,2)
r=q.bp(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bp(a,s,c,d)}return q.fW(a,b,c,d)},
fW:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.U(""),f=b+1,e=a.length
if(b<0||b>=e)return H.b(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.D("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.D(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aL(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aL(j)
break
case 65:g.a+=H.aL(j);--f
break
default:p=g.a+=H.aL(j)
g.a=p+H.aL(j)
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
g.a+=H.aL(a[l])}else g.a+=P.ev(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aL(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.aQ.prototype={}
P.ac.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ac&&this.a===b.a&&!0},
aK:function(a,b){return C.c.aK(this.a,b.a)},
gN:function(a){var s=this.a
return(s^C.c.aG(s,30))&1073741823},
i:function(a){var s=this,r=P.n2(H.ns(s)),q=P.dw(H.nq(s)),p=P.dw(H.nm(s)),o=P.dw(H.nn(s)),n=P.dw(H.np(s)),m=P.dw(H.nr(s)),l=P.n3(H.no(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.W.prototype={}
P.bh.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bh&&this.a===b.a},
gN:function(a){return C.c.gN(this.a)},
aK:function(a,b){return C.c.aK(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hl(),o=this.a
if(o<0)return"-"+new P.bh(0-o).i(0)
s=p.$1(C.c.a_(o,6e7)%60)
r=p.$1(C.c.a_(o,1e6)%60)
q=new P.hk().$1(o%1e6)
return""+C.c.a_(o,36e8)+":"+H.h(s)+":"+H.h(r)+"."+H.h(q)}}
P.hk.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.hl.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.I.prototype={}
P.di.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hq(s)
return"Assertion failed"}}
P.e3.prototype={
i:function(a){return"Throw of null."}}
P.ah.prototype={
gbr:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbq:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbr()+o+m
if(!q.a)return l
s=q.gbq()
r=P.hq(q.b)
return l+s+": "+r}}
P.bO.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.h(q):""
else if(q==null)s=": Not greater than or equal to "+H.h(r)
else if(q>r)s=": Not in inclusive range "+H.h(r)+".."+H.h(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.h(r)
return s}}
P.dF.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var s,r=this.b
if(typeof r!=="number")return r.a4()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.h(s)},
gk:function(a){return this.f}}
P.eQ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eN.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.er.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dt.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hq(s)+"."}}
P.e6.prototype={
i:function(a){return"Out of Memory"},
$iI:1}
P.cy.prototype={
i:function(a){return"Stack Overflow"},
$iI:1}
P.dv.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fb.prototype={
i:function(a){return"Exception: "+this.a}}
P.hw.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.u(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.D(d,o)
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
i=""}h=C.a.u(d,k,l)
return f+j+h+i+"\n"+C.a.l(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.h(e)+")"):f}}
P.l.prototype={}
P.j.prototype={
gk:function(a){var s,r=this.gW(this)
for(s=0;r.w();)++s
return s},
H:function(a,b){var s,r,q
P.lq(b,"index")
for(s=this.gW(this),r=0;s.w();){q=s.gI(s)
if(b===r)return q;++r}throw H.c(P.M(b,this,"index",null,r))},
i:function(a){return P.n7(this,"(",")")}}
P.dG.prototype={}
P.o.prototype={$im:1,$ij:1}
P.F.prototype={}
P.ak.prototype={
gN:function(a){return P.L.prototype.gN.call(C.i,this)},
i:function(a){return"null"}}
P.P.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
p:function(a,b){return this===b},
gN:function(a){return H.cu(this)},
i:function(a){return"Instance of '"+H.h(H.ee(this))+"'"},
toString:function(){return this.i(this)}}
P.B.prototype={}
P.U.prototype={
gk:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.iM.prototype={
$2:function(a,b){var s,r,q,p=J.kR(b).di(b,"=")
if(p===-1){if(b!=="")J.ka(a,P.kJ(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.u(b,0,p)
r=C.a.ae(b,p+1)
q=this.a
J.ka(a,P.kJ(s,0,s.length,q,!0),P.kJ(r,0,r.length,q,!0))}return a}}
P.iJ.prototype={
$2:function(a,b){throw H.c(P.Z("Illegal IPv4 address, "+a,this.a,b))}}
P.iK.prototype={
$2:function(a,b){throw H.c(P.Z("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iL.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.jR(C.a.u(this.b,a,b),16)
if(typeof s!=="number")return s.a4()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bs.prototype={
gbK:function(){var s,r,q,p=this,o=p.x
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
else o=H.r(H.kq("Field '_text' has been assigned during initialization."))}return o},
gN:function(a){var s=this,r=s.z
if(r==null){r=C.a.gN(s.gbK())
if(s.z==null)s.z=r
else r=H.r(H.kq("Field 'hashCode' has been assigned during initialization."))}return r},
gcc:function(){var s=this,r=s.Q
if(r==null){r=new P.bQ(P.lE(s.gb1(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.r(H.kq("Field 'queryParameters' has been assigned during initialization."))}return r},
gdM:function(){return this.b},
gc4:function(a){var s=this.c
if(s==null)return""
if(C.a.a8(s,"["))return C.a.u(s,1,s.length-1)
return s},
gbf:function(a){var s=this.d
return s==null?P.lX(this.a):s},
gb1:function(a){var s=this.f
return s==null?"":s},
gc3:function(){var s=this.r
return s==null?"":s},
dE:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a8(s,"/"))s="/"+s
q=s
p=P.kH(null,0,0,b)
return new P.bs(n,l,j,k,q,p,o.r)},
gde:function(){return this.c!=null},
gdh:function(){return this.f!=null},
gdf:function(){return this.r!=null},
i:function(a){return this.gbK()},
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbj()&&s.c!=null===b.gde()&&s.b===b.gdM()&&s.gc4(s)===b.gc4(b)&&s.gbf(s)===b.gbf(b)&&s.e===b.gdz(b)&&s.f!=null===b.gdh()&&s.gb1(s)===b.gb1(b)&&s.r!=null===b.gdf()&&s.gc3()===b.gc3()},
$ieR:1,
gbj:function(){return this.a},
gdz:function(a){return this.e}}
P.jp.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.h(P.kK(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.h(P.kK(C.h,b,C.e,!0))}}}
P.jo.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.be(b),r=this.a;s.w();)r.$2(a,s.gI(s))}}
P.iI.prototype={
gdL:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.b(m,0)
s=o.a
m=m[0]+1
r=C.a.bc(s,"?",m)
q=s.length
if(r>=0){p=P.d6(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.f3("data","",n,n,P.d6(s,m,q,C.v,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.jw.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jv.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.b(s,a)
s=s[a]
J.mR(s,0,96,b)
return s},
$S:17}
P.jx.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.D(b,q)^96
if(p>=r)return H.b(a,p)
a[p]=c}}}
P.jy.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.D(b,0),r=C.a.D(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.b(a,p)
a[p]=c}}}
P.fw.prototype={
gde:function(){return this.c>0},
gdg:function(){return this.c>0&&this.d+1<this.e},
gdh:function(){return this.f<this.r},
gdf:function(){return this.r<this.a.length},
gcE:function(){return this.b===4&&C.a.a8(this.a,"http")},
gcF:function(){return this.b===5&&C.a.a8(this.a,"https")},
gbj:function(){var s=this.x
return s==null?this.x=this.eg():s},
eg:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gcE())return"http"
if(s.gcF())return"https"
if(r===4&&C.a.a8(s.a,"file"))return"file"
if(r===7&&C.a.a8(s.a,"package"))return"package"
return C.a.u(s.a,0,r)},
gdM:function(){var s=this.c,r=this.b+3
return s>r?C.a.u(this.a,r,s-1):""},
gc4:function(a){var s=this.c
return s>0?C.a.u(this.a,s,this.d):""},
gbf:function(a){var s=this
if(s.gdg())return P.jR(C.a.u(s.a,s.d+1,s.e),null)
if(s.gcE())return 80
if(s.gcF())return 443
return 0},
gdz:function(a){return C.a.u(this.a,this.e,this.f)},
gb1:function(a){var s=this.f,r=this.r
return s<r?C.a.u(this.a,s+1,r):""},
gc3:function(){var s=this.r,r=this.a
return s<r.length?C.a.ae(r,s+1):""},
gcc:function(){var s=this
if(s.f>=s.r)return C.R
return new P.bQ(P.lE(s.gb1(s)),t.U)},
dE:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbj(),k=l==="file",j=n.c,i=j>0?C.a.u(n.a,n.b+3,j):"",h=n.gdg()?n.gbf(n):m
j=n.c
if(j>0)s=C.a.u(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.u(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a8(r,"/"))r="/"+r
p=P.kH(m,0,0,b)
q=n.r
o=q<j.length?C.a.ae(j,q+1):m
return new P.bs(l,i,s,h,r,p,o)},
gN:function(a){var s=this.y
return s==null?this.y=C.a.gN(this.a):s},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ieR:1}
P.f3.prototype={}
W.p.prototype={}
W.h2.prototype={
gk:function(a){return a.length}}
W.dg.prototype={
i:function(a){return String(a)}}
W.dh.prototype={
i:function(a){return String(a)}}
W.bf.prototype={$ibf:1}
W.bg.prototype={
dO:function(a,b,c){var s=a.getContext(b,P.pi(c))
return s},
$ibg:1}
W.aq.prototype={
gk:function(a){return a.length}}
W.hd.prototype={
gk:function(a){return a.length}}
W.G.prototype={$iG:1}
W.c8.prototype={
gk:function(a){return a.length}}
W.he.prototype={}
W.ai.prototype={}
W.aD.prototype={}
W.hf.prototype={
gk:function(a){return a.length}}
W.hg.prototype={
gk:function(a){return a.length}}
W.hh.prototype={
gk:function(a){return a.length}}
W.hi.prototype={
i:function(a){return String(a)}}
W.c9.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.ca.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gaA(a))+" x "+H.h(this.gau(a))},
p:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.bt(b)
s=a.left==s.gbe(b)&&a.top==s.gbg(b)&&this.gaA(a)==s.gaA(b)&&this.gau(a)==s.gau(b)}else s=!1
return s},
gN:function(a){return W.lP(J.ab(a.left),J.ab(a.top),J.ab(this.gaA(a)),J.ab(this.gau(a)))},
gd0:function(a){return a.bottom},
gau:function(a){return a.height},
gbe:function(a){return a.left},
gcg:function(a){return a.right},
gbg:function(a){return a.top},
gaA:function(a){return a.width},
$ia3:1}
W.dy.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.hj.prototype={
gk:function(a){return a.length}}
W.f0.prototype={
gdm:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
return t.h.a(s[b])},
j:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
this.a.replaceChild(c,s[b])},
m:function(a,b){this.a.appendChild(b)
return b},
gW:function(a){var s=this.hG(this)
return new J.a6(s,s.length)}}
W.H.prototype={
gd1:function(a){return new W.f0(a,a.children)},
gd2:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.a4()
if(q<0)q=-q*0
if(typeof p!=="number")return p.a4()
if(p<0)p=-p*0
return new P.a3(s,r,q,p,t.q)},
i:function(a){return a.localName},
$iH:1}
W.k.prototype={$ik:1}
W.e.prototype={
fI:function(a,b,c,d){if(c!=null)this.e9(a,b,c,!1)},
e9:function(a,b,c,d){return a.addEventListener(b,H.bZ(c,1),!1)},
$ie:1}
W.ad.prototype={$iad:1}
W.bC.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1,
$ibC:1}
W.dB.prototype={
gk:function(a){return a.length}}
W.dD.prototype={
gk:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.hy.prototype={
gk:function(a){return a.length}}
W.bj.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.cf.prototype={$icf:1}
W.bF.prototype={$ibF:1}
W.bl.prototype={$ibl:1}
W.hG.prototype={
i:function(a){return String(a)}}
W.hZ.prototype={
gk:function(a){return a.length}}
W.bH.prototype={$ibH:1}
W.dV.prototype={
h:function(a,b){return P.b8(a.get(b))},
G:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b8(s.value[1]))}},
gaa:function(a){var s=H.d([],t.s)
this.G(a,new W.i_(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.x("Not supported"))},
$iF:1}
W.i_.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dW.prototype={
h:function(a,b){return P.b8(a.get(b))},
G:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b8(s.value[1]))}},
gaa:function(a){var s=H.d([],t.s)
this.G(a,new W.i0(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.x("Not supported"))},
$iF:1}
W.i0.prototype={
$2:function(a,b){return this.a.push(a)}}
W.au.prototype={$iau:1}
W.dX.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.ae.prototype={$iae:1}
W.f_.prototype={
j:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.b(r,b)
s.replaceChild(c,r[b])},
gW:function(a){var s=this.a.childNodes
return new W.ce(s,s.length)},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.b(s,b)
return s[b]}}
W.v.prototype={
hB:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.mO(s,b,a)}catch(q){H.b9(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dT(a):s},
fl:function(a,b,c){return a.replaceChild(b,c)},
$iv:1}
W.ct.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.av.prototype={
gk:function(a){return a.length},
$iav:1}
W.e9.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.eh.prototype={
h:function(a,b){return P.b8(a.get(b))},
G:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b8(s.value[1]))}},
gaa:function(a){var s=H.d([],t.s)
this.G(a,new W.ib(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.x("Not supported"))},
$iF:1}
W.ib.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ej.prototype={
gk:function(a){return a.length}}
W.am.prototype={$iam:1}
W.el.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.aw.prototype={$iaw:1}
W.em.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.ax.prototype={
gk:function(a){return a.length},
$iax:1}
W.es.prototype={
h:function(a,b){return a.getItem(H.op(b))},
j:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaa:function(a){var s=H.d([],t.s)
this.G(a,new W.io(s))
return s},
gk:function(a){return a.length},
$iF:1}
W.io.prototype={
$2:function(a,b){return this.a.push(a)}}
W.an.prototype={$ian:1}
W.b2.prototype={$ib2:1}
W.ao.prototype={$iao:1}
W.a8.prototype={$ia8:1}
W.ex.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.ey.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.it.prototype={
gk:function(a){return a.length}}
W.ay.prototype={$iay:1}
W.bp.prototype={$ibp:1}
W.eC.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.iw.prototype={
gk:function(a){return a.length}}
W.aO.prototype={}
W.iN.prototype={
i:function(a){return String(a)}}
W.eV.prototype={
gk:function(a){return a.length}}
W.b4.prototype={
gfY:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.x("deltaY is not supported"))},
gfX:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.x("deltaX is not supported"))},
$ib4:1}
W.bR.prototype={
fm:function(a,b){return a.requestAnimationFrame(H.bZ(b,1))},
em:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.f1.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.cN.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
p:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.bt(b)
s=a.left==s.gbe(b)&&a.top==s.gbg(b)&&a.width==s.gaA(b)&&a.height==s.gau(b)}else s=!1
return s},
gN:function(a){return W.lP(J.ab(a.left),J.ab(a.top),J.ab(a.width),J.ab(a.height))},
gau:function(a){return a.height},
gaA:function(a){return a.width}}
W.ff.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.cR.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.fz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.fG.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$iw:1,
$ij:1,
$io:1}
W.kj.prototype={}
W.fa.prototype={
fE:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.mP(s,this.c,r,!1)}}}
W.jb.prototype={
$1:function(a){return this.a.$1(a)}}
W.kz.prototype={}
W.K.prototype={
gW:function(a){return new W.ce(a,this.gk(a))}}
W.ce.prototype={
w:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.c2(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gI:function(a){return this.d}}
W.f2.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fv.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fD.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.fJ.prototype={}
W.fK.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
P.ji.prototype={
c2:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bi:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.kM(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ac)return new Date(a.a)
if(t.fv.b(a))throw H.c(P.iH("structured clone of RegExp"))
if(t.v.b(a))return a
if(t.d.b(a))return a
if(t.G.b(a))return a
if(t.gb.b(a))return a
if(t.o.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.c2(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.b(r,s)
r[s]=p
J.kd(a,new P.jk(n,o))
return n.a}if(t.aH.b(a)){s=o.c2(a)
n=o.b
if(s>=n.length)return H.b(n,s)
p=n[s]
if(p!=null)return p
return o.fU(a,s)}if(t.eH.b(a)){s=o.c2(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.b(r,s)
r[s]=p
o.ha(a,new P.jl(n,o))
return n.b}throw H.c(P.iH("structured clone of other type"))},
fU:function(a,b){var s,r=J.aR(a),q=r.gk(a),p=new Array(q),o=this.b
if(b>=o.length)return H.b(o,b)
o[b]=p
if(typeof q!=="number")return H.f(q)
s=0
for(;s<q;++s){o=this.bi(r.h(a,s))
if(s>=p.length)return H.b(p,s)
p[s]=o}return p}}
P.jk.prototype={
$2:function(a,b){this.a.a[a]=this.b.bi(b)},
$S:3}
P.jl.prototype={
$2:function(a,b){this.a.b[a]=this.b.bi(b)},
$S:3}
P.jD.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jj.prototype={
ha:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.dC.prototype={
gb7:function(){return new H.bm(new H.cM(this.b,new P.hu()),new P.hv())},
j:function(a,b,c){var s=this.gb7()
J.mS(s.b.$1(J.kc(s.a,b)),c)},
m:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aT(this.gb7().a)},
h:function(a,b){var s=this.gb7()
return s.b.$1(J.kc(s.a,b))},
gW:function(a){var s=P.kr(this.gb7(),!1,t.h)
return new J.a6(s,s.length)}}
P.hu.prototype={
$1:function(a){return t.h.b(a)}}
P.hv.prototype={
$1:function(a){return t.h.a(a)}}
P.fu.prototype={
gcg:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.f(r)
return this.$ti.c.a(s+r)},
gd0:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.f(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.h(s.a)+", "+H.h(s.b)+") "+H.h(s.c)+" x "+H.h(s.d)},
p:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.q.b(b)){s=n.a
r=J.bt(b)
if(s==r.gbe(b)){q=n.b
if(q==r.gbg(b)){p=n.c
if(typeof s!=="number")return s.n()
if(typeof p!=="number")return H.f(p)
o=n.$ti.c
if(o.a(s+p)===r.gcg(b)){s=n.d
if(typeof q!=="number")return q.n()
if(typeof s!=="number")return H.f(s)
r=o.a(q+s)===r.gd0(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gN:function(a){var s,r=this,q=r.a,p=J.ab(q),o=r.b,n=J.ab(o),m=r.c
if(typeof q!=="number")return q.n()
if(typeof m!=="number")return H.f(m)
s=r.$ti.c
m=C.c.gN(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.n()
if(typeof q!=="number")return H.f(q)
q=C.c.gN(s.a(o+q))
return P.nR(P.jd(P.jd(P.jd(P.jd(0,p),n),m),q))}}
P.a3.prototype={
gbe:function(a){return this.a},
gbg:function(a){return this.b},
gaA:function(a){return this.c},
gau:function(a){return this.d}}
P.aG.prototype={$iaG:1}
P.dN.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$im:1,
$ij:1,
$io:1}
P.aJ.prototype={$iaJ:1}
P.e4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$im:1,
$ij:1,
$io:1}
P.i4.prototype={
gk:function(a){return a.length}}
P.eu.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$im:1,
$ij:1,
$io:1}
P.n.prototype={
gd1:function(a){return new P.dC(a,new W.f_(a))}}
P.aM.prototype={$iaM:1}
P.eD.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$im:1,
$ij:1,
$io:1}
P.fi.prototype={}
P.fj.prototype={}
P.fq.prototype={}
P.fr.prototype={}
P.fE.prototype={}
P.fF.prototype={}
P.fL.prototype={}
P.fM.prototype={}
P.b3.prototype={$im:1,$ij:1,$io:1}
P.h6.prototype={
gk:function(a){return a.length}}
P.dk.prototype={
h:function(a,b){return P.b8(a.get(b))},
G:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b8(s.value[1]))}},
gaa:function(a){var s=H.d([],t.s)
this.G(a,new P.h7(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.x("Not supported"))},
$iF:1}
P.h7.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dl.prototype={
gk:function(a){return a.length}}
P.aU.prototype={}
P.e5.prototype={
gk:function(a){return a.length}}
P.eZ.prototype={}
P.ep.prototype={
gk:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
s=P.b8(a.item(b))
s.toString
return s},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$im:1,
$ij:1,
$io:1}
P.fA.prototype={}
P.fB.prototype={}
K.h3.prototype={
aM:function(a,b){return!0},
i:function(a){return"all"}}
K.dE.prototype={
aM:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aM(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.hJ.prototype={}
K.b_.prototype={
aM:function(a,b){return!this.dS(0,b)},
i:function(a){return"!["+this.co(0)+"]"}}
K.ic.prototype={
dY:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.t("May not create a Set with zero characters."))
s=new H.y(t.E)
for(r=new H.bG(a,a.gk(a));r.w();){q=r.d
s.j(0,q,!0)}p=P.kr(s.gaa(s),!0,t.e)
C.b.dR(p)
this.a=p},
aM:function(a,b){return C.b.R(this.a,b)},
i:function(a){return P.ev(this.a,0,null)}}
L.eq.prototype={
t:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.eE(this.a.M(0,b))
p.a=H.d([],t.L)
p.c=!1
this.c.push(p)
return p},
h6:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aM(0,a))return p}return null},
i:function(a){return this.b},
cS:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.R(0,l))m+=" (consume)"
for(l=n.d.c,l=l.gaa(l),l=l.gW(l);l.w();){r=l.gI(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.h(r)+" => ["+H.h(q)+"]")
m=s.c.R(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.q)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.eA.prototype={
i:function(a){var s=H.mq(this.b,"\n","\\n"),r=H.mq(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eB.prototype={
i:function(a){return this.b}}
L.iu.prototype={
M:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eq(this,b)
s.c=H.d([],t.br)
this.a.j(0,b,s)}return s},
b2:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.eB(a)
s.c=new H.y(t.dO)
this.b.j(0,a,s)}return s},
dJ:function(a){return this.hH(a)},
hH:function(a){var s=this
return P.oH(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$dJ(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.d([],c)
a0=H.d([],c)
a1=H.d([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.cd(a1,0)
else{if(!r.w()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.h6(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.ev(a0,0,null)
throw H.c(P.t("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.r(P.x("removeRange"))
P.b1(0,k,a0.length)
a0.splice(0,k-0)
C.b.fG(a1,a0)
a0=H.d([],c)
b=H.d([],c)
d=s.d
q=!s.c.R(0,n.a)?7:8
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
if(d.d!=null){g=P.ev(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.eA(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.R(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.nP()
case 1:return P.nQ(o)}}},t.eB)},
i:function(a){var s,r=new P.U(""),q=this.d
if(q!=null)r.a=q.cS()+"\n"
for(q=this.a,q=q.ghI(q),q=q.gW(q);q.w();){s=q.gI(q)
if(s!=this.d)r.a+=s.cS()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.eE.prototype={
i:function(a){return this.b.b+": "+this.co(0)}}
O.a1.prototype={
bk:function(a){var s=this
s.a=H.d([],a.P("u<0*>"))
s.d=s.c=s.b=null},
cl:function(a,b,c){this.b=b
this.c=a
this.d=c},
b5:function(a,b){return this.cl(a,null,b)},
cK:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cH:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gk:function(a){return this.a.length},
gW:function(a){var s=this.a
return new J.a6(s,s.length)},
H:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.b(s,b)
return s[b]},
m:function(a,b){var s,r,q=this,p=H.jz(q).P("u<a1.T*>")
if(q.cK(H.d([b],p))){s=q.a
r=s.length
s.push(b)
q.cH(r,H.d([b],p))}},
j:function(a,b,c){var s,r,q,p=this,o=p.a
if(b>=o.length)return H.b(o,b)
s=o[b]
if(!J.E(s,c)&&p.cK(H.d([c],H.jz(p).P("u<a1.T*>")))){o=p.a
if(b>=o.length)return H.b(o,b)
o[b]=c
o=H.jz(p).P("u<a1.T*>")
r=H.d([s],o)
q=p.d
if(q!=null)q.$2(b,r)
p.cH(b,H.d([c],o))}},
$ij:1}
O.cp.prototype={
gk:function(a){return this.a.length},
gA:function(){var s=this.b
return s==null?this.b=D.J():s},
aB:function(){var s=this.b
if(s!=null)s.E(null)},
gY:function(a){var s=this.a
if(s.length>0)return C.b.gaw(s)
else return V.a7()},
dC:function(a){var s=this.a
if(a==null)s.push(V.a7())
else s.push(a)
this.aB()},
cb:function(){var s=this.a
if(s.length>0){s.pop()
this.aB()}}}
E.ha.prototype={}
E.bi.prototype={
scm:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gA().J(0,q.gdv())
s=q.c
if(s!=null)s.gA().m(0,q.gdv())
r=new D.A("shape",p,q.c)
r.b=!0
q.ay(r)}},
saZ:function(a){var s,r,q=this
if(!J.E(q.r,a)){s=q.r
if(s!=null)s.gA().J(0,q.gdt())
if(a!=null)a.gA().m(0,q.gdt())
q.r=a
r=new D.A("mover",s,a)
r.b=!0
q.ay(r)}},
an:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.a:null
if(!J.E(o,q.x)){s=q.x
q.x=o
r=new D.A("matrix",s,o)
r.b=!0
q.ay(r)}for(p=q.y.a,p=new J.a6(p,p.length);p.w();)p.d.an(0,b)},
aN:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gY(q))
else o.push(p.l(0,q.gY(q)))
q.aB()
a.dD(r.f)
q=a.dy
s=(q&&C.b).gaw(q)
if(s!=null&&r.d!=null)s.hA(a,r)
for(q=r.y.a,q=new J.a6(q,q.length);q.w();)q.d.aN(a)
a.dB()
a.dx.cb()},
ay:function(a){var s=this.z
if(s!=null)s.E(a)},
Z:function(){return this.ay(null)},
dw:function(a){this.e=null
this.ay(a)},
ho:function(){return this.dw(null)},
du:function(a){this.ay(a)},
hn:function(){return this.du(null)},
ds:function(a){this.ay(a)},
hk:function(){return this.ds(null)},
hj:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdr(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.aE()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.Z()},
hm:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gdr(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aE()
o.d=0
p.z=o}o.J(0,r)}}this.Z()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.by.prototype={
i:function(a){return this.b}}
E.bM.prototype={
i:function(a){return this.b}}
E.f8.prototype={}
E.i7.prototype={
dX:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ac(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cp()
r=t.p
s.a=H.d([],r)
s.gA().m(0,new E.i8(q))
q.cy=s
s=new O.cp()
s.a=H.d([],r)
s.gA().m(0,new E.i9(q))
q.db=s
s=new O.cp()
s.a=H.d([],r)
s.gA().m(0,new E.ia(q))
q.dx=s
s=H.d([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.y(t.h9)},
ghx:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gY(q)
s=r.db
s=r.z=q.l(0,s.gY(s))
q=s}return q},
dD:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gaw(s):a)},
dB:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.i8.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.i9.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.ia.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.cz.prototype={}
E.ez.prototype={
ct:function(a){this.dF()},
cs:function(){return this.ct(null)},
ghb:function(){var s,r=this,q=Date.now(),p=C.c.a_(P.l6(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ac(q,!1)
return s/p},
cM:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.l()
if(typeof p!=="number")return H.f(p)
s=C.d.dd(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.l()
r=C.d.dd(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.ly(C.n,q.ghC())}},
dF:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.z.em(s)
r=W.m9(new E.is(this),t.H)
r.toString
C.z.fm(s,r)}},
hz:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cM()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ac(p,!1)
q.y=P.l6(p-q.r.a).a*0.000001
p=q.cy
C.b.sk(p.a,0)
p.aB()
p=q.db
C.b.sk(p.a,0)
p.aB()
p=q.dx
C.b.sk(p.a,0)
p.aB()
p=q.dy
p.toString
C.b.sk(p,0)
q.dy.push(null)
m.aN(n.e)}}catch(o){s=H.b9(o)
r=H.kS(o)
P.kV("Error: "+H.h(s))
P.kV("Stack: "+H.h(r))
throw H.c(s)}}}
E.is.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hz()}}}
Z.eW.prototype={}
Z.dp.prototype={
b9:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.b9(q)
r=P.t('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.h(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.h(s.e)+"]"}}
Z.j6.prototype={}
Z.dq.prototype={
aL:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
b9:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].b9(a)},
dK:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aN:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.b(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=t.i,n=H.d([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)n.push(s[q].i(0))
p=H.d([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a5(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.t(n,", ")+"\nAttrs:   "+C.b.t(p,", ")}}
Z.bE.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.h(H.ee(this.c))+"'")+"]"}}
Z.br.prototype={
gcn:function(a){var s=this.a,r=(s&$.bd().a)!==0?3:0
if((s&$.bc().a)!==0)r+=3
if((s&$.bb().a)!==0)r+=3
if((s&$.bw().a)!==0)r+=2
if((s&$.bx().a)!==0)r+=3
if((s&$.dd().a)!==0)r+=3
if((s&$.de().a)!==0)r+=4
if((s&$.c1().a)!==0)++r
return(s&$.ba().a)!==0?r+4:r},
fM:function(a){var s,r=$.bd(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bc()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bb()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bw()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bx()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dd()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.de()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c1()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ba()
if((q&r.a)!==0)if(s===a)return r
return $.mJ()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.br))return!1
return this.a===b.a},
i:function(a){var s=H.d([],t.i),r=this.a
if((r&$.bd().a)!==0)s.push("Pos")
if((r&$.bc().a)!==0)s.push("Norm")
if((r&$.bb().a)!==0)s.push("Binm")
if((r&$.bw().a)!==0)s.push("Txt2D")
if((r&$.bx().a)!==0)s.push("TxtCube")
if((r&$.dd().a)!==0)s.push("Clr3")
if((r&$.de().a)!==0)s.push("Clr4")
if((r&$.c1().a)!==0)s.push("Weight")
if((r&$.ba().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.t(s,"|")}}
D.hb.prototype={}
D.aE.prototype={
m:function(a,b){var s=this.a;(s==null?this.a=H.d([],t.f):s).push(b)},
J:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.R(q,b)
if(q===!0){q=r.a
s=(q&&C.b).J(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.R(q,b)
if(q===!0){q=r.b
s=(q&&C.b).J(q,b)||s}return s},
E:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.Q()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.G(P.kr(s,!0,t.dm),new D.hr(o))
s=p.b
if(s!=null){p.b=H.d([],t.f)
C.b.G(s,new D.hs(o))}return!0},
ag:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.E(s)}}}}
D.hr.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.hs.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.Q.prototype={}
D.aW.prototype={}
D.aX.prototype={}
D.A.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.dr.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dr))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.dL.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dL))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.hB.prototype={
ht:function(a){this.c=a.b
this.d.m(0,a.a)
return!1},
hp:function(a){this.c=a.b
this.d.J(0,a.a)
return!1}}
X.cm.prototype={}
X.hH.prototype={
aR:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.l()
s=b.b
r=o.ch
if(typeof s!=="number")return s.l()
q=new V.af(m.a+l*k,m.b+s*r)
r=o.a.gaI()
p=new X.bI(a,V.bo(),o.x,r,q)
p.b=!0
o.z=new P.ac(n,!1)
o.x=q
return p},
ca:function(a,b){this.r=a.a
return!1},
b0:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dP()
if(typeof s!=="number")return s.a7()
this.r=(s&~r)>>>0
return!1},
b_:function(a,b){var s=this.d
if(s==null)return!1
s.E(this.aR(a,b))
return!0},
hu:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaI()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.l()
o=a.b
n=m.cy
if(typeof o!=="number")return o.l()
r=new X.bJ(new V.a9(q*p,o*n),s,r)
r.b=!0
l.E(r)
return!0},
eW:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cm(c,p.a.gaI(),b)
q.b=!0
r.E(q)
p.y=new P.ac(s,!1)
p.x=V.bo()}}
X.aj.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.aj))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bI.prototype={}
X.i1.prototype={
bt:function(a,b,c){var s=this,r=new P.ac(Date.now(),!1),q=s.a.gaI(),p=new X.bI(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
ca:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.E(this.bt(a,b,!0))
return!0},
b0:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dP()
if(typeof r!=="number")return r.a7()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.E(s.bt(a,b,!0))
return!0},
b_:function(a,b){var s=this.d
if(s==null)return!1
s.E(this.bt(a,b,!1))
return!0},
hv:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaI()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.l()
p=a.b
o=n.ch
if(typeof p!=="number")return p.l()
s=new X.bJ(new V.a9(r*q,p*o),s,b)
s.b=!0
m.E(s)
return!0},
gd3:function(){var s=this.b
return s==null?this.b=D.J():s},
gcj:function(){var s=this.c
return s==null?this.c=D.J():s},
gdq:function(){var s=this.d
return s==null?this.d=D.J():s}}
X.bJ.prototype={}
X.ec.prototype={}
X.cC.prototype={}
X.iv.prototype={
aR:function(a,b){var s=this,r=new P.ac(Date.now(),!1),q=a.length>0?a[0]:V.bo(),p=s.a.gaI(),o=new X.cC(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
hs:function(a){var s=this.b
if(s==null)return!1
s.E(this.aR(a,!0))
return!0},
hq:function(a){var s=this.c
if(s==null)return!1
s.E(this.aR(a,!0))
return!0},
hr:function(a){var s=this.d
if(s==null)return!1
s.E(this.aR(a,!1))
return!0}}
X.eS.prototype={
gaI:function(){var s=this.a,r=C.m.gd2(s).c
r.toString
s=C.m.gd2(s).d
s.toString
return V.ls(0,0,r,s)},
cA:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.dL(s,new X.aj(r,a.altKey,a.shiftKey))},
aF:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.aj(r,a.altKey,a.shiftKey)},
bH:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.aj(r,a.altKey,a.shiftKey)},
as:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.q()
if(typeof o!=="number")return H.f(o)
s=r.top
if(typeof p!=="number")return p.q()
if(typeof s!=="number")return H.f(s)
return new V.af(q-o,p-s)},
aS:function(a){return new V.a9(a.movementX,a.movementY)},
bD:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.d([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
o=C.d.ah(p.pageX)
C.d.ah(p.pageY)
n=k.left
if(typeof n!=="number")return H.f(n)
C.d.ah(p.pageX)
m=C.d.ah(p.pageY)
l=k.top
if(typeof l!=="number")return H.f(l)
j.push(new V.af(o-n,m-l))}return j},
aq:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dr(s,new X.aj(r,a.altKey,a.shiftKey))},
bu:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.q()
if(typeof n!=="number")return H.f(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.q()
if(typeof p!=="number")return H.f(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.f(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.f(p)
p=r<p}else p=!1
return p},
eQ:function(a){this.f=!0},
eC:function(a){this.f=!1},
eK:function(a){if(this.f&&this.bu(a))a.preventDefault()},
eU:function(a){var s
if(!this.f)return
s=this.cA(a)
this.b.ht(s)},
eS:function(a){var s
if(!this.f)return
s=this.cA(a)
this.b.hp(s)},
eY:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aF(a)
if(p.x){s=p.aq(a)
r=p.aS(a)
if(p.d.ca(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aq(a)
q=p.as(a)
if(p.c.ca(s,q))a.preventDefault()},
f1:function(a){var s,r,q,p=this
p.aF(a)
s=p.aq(a)
if(p.x){r=p.aS(a)
if(p.d.b0(s,r))a.preventDefault()
return}if(p.r)return
q=p.as(a)
if(p.c.b0(s,q))a.preventDefault()},
eO:function(a){var s,r,q,p=this
if(!p.bu(a)){p.aF(a)
s=p.aq(a)
if(p.x){r=p.aS(a)
if(p.d.b0(s,r))a.preventDefault()
return}if(p.r)return
q=p.as(a)
if(p.c.b0(s,q))a.preventDefault()}},
f_:function(a){var s,r,q,p=this
p.aF(a)
s=p.aq(a)
if(p.x){r=p.aS(a)
if(p.d.b_(s,r))a.preventDefault()
return}if(p.r)return
q=p.as(a)
if(p.c.b_(s,q))a.preventDefault()},
eM:function(a){var s,r,q,p=this
if(!p.bu(a)){p.aF(a)
s=p.aq(a)
if(p.x){r=p.aS(a)
if(p.d.b_(s,r))a.preventDefault()
return}if(p.r)return
q=p.as(a)
if(p.c.b_(s,q))a.preventDefault()}},
f3:function(a){var s,r,q=this
q.aF(a)
s=new V.a9((a&&C.y).gfX(a),C.y.gfY(a)).l(0,q.Q)
if(q.x){if(q.d.hu(s))a.preventDefault()
return}if(q.r)return
r=q.as(a)
if(q.c.hv(s,r))a.preventDefault()},
f5:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aq(q.y)
r=q.as(q.y)
q.d.eW(s,r,p)}},
fh:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bH(a)
s=r.bD(a)
if(r.e.hs(s))a.preventDefault()},
fd:function(a){var s
this.bH(a)
s=this.bD(a)
if(this.e.hq(s))a.preventDefault()},
ff:function(a){var s
this.bH(a)
s=this.bD(a)
if(this.e.hr(s))a.preventDefault()}}
D.dm.prototype={$iS:1}
D.aV.prototype={
ao:function(a){var s=this.r
if(s!=null)s.E(a)},
e1:function(){return this.ao(null)},
$iS:1}
D.S.prototype={}
D.cj.prototype={
ao:function(a){var s=this.y
if(s!=null)s.E(a)},
cJ:function(a){var s=this.z
if(s!=null)s.E(a)},
eV:function(){return this.cJ(null)},
f7:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(q==null||this.eh(q))return!1}return!0},
ew:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcI(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o instanceof D.aV)this.f.push(o)
n=o.r
if(n==null){n=new D.aE()
n.d=0
o.r=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}s=new D.aW()
s.b=!0
this.ao(s)},
fb:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gcI(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q]
if(p instanceof D.aV)C.b.J(this.f,p)
o=p.r
if(o==null){o=new D.aE()
o.d=0
p.r=o}o.J(0,r)}s=new D.aX()
s.b=!0
this.ao(s)},
eh:function(a){var s=C.b.R(this.f,a)
return s}}
D.eb.prototype={$iS:1}
D.en.prototype={$iS:1}
V.X.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.X))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.aC.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aC))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.hp.prototype={}
V.dU.prototype={
a6:function(a,b){var s=this,r=H.d([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.dU))return!1
s=b.a
r=q.a
$.C().toString
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.d
r=q.d
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.x
r=q.x
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.c0(H.d([o.a,o.d,o.r],n),3,0),l=V.c0(H.d([o.b,o.e,o.x],n),3,0),k=V.c0(H.d([o.c,o.f,o.y],n),3,0)
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
V.aZ.prototype={
a6:function(a,b){var s=this,r=H.d([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
dl:function(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b1.f
if(typeof b2!=="number")return b2.l()
if(typeof b3!=="number")return H.f(b3)
s=b1.b
r=b1.e
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=b2*b3-s*r
p=b1.r
if(typeof p!=="number")return H.f(p)
o=b1.c
if(typeof o!=="number")return o.l()
n=b2*p-o*r
m=b1.x
l=b1.d
k=b2*m-l*r
j=s*p-o*b3
i=s*m-l*b3
h=o*m-l*p
g=b1.y
f=b1.cy
if(typeof g!=="number")return g.l()
e=b1.z
d=b1.cx
if(typeof e!=="number")return e.l()
c=g*f-e*d
b=b1.db
a=b1.Q
if(typeof a!=="number")return a.l()
a0=g*b-a*d
a1=b1.dx
a2=b1.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
$.C().toString
if(Math.abs(a7-0)<1e-9)return V.a7()
a8=1/a7
a9=-r
b0=-d
return V.aI((b3*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(b2*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-b3*a3+m*c)*a8,(-b2*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+b3*a0-p*c)*a8,(b2*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
l:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b5.a
if(typeof b2!=="number")return b2.l()
if(typeof b3!=="number")return H.f(b3)
s=b1.b
r=b5.e
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=b1.c
p=b5.y
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
o=b1.d
n=b5.cx
m=b5.b
if(typeof m!=="number")return H.f(m)
l=b5.f
if(typeof l!=="number")return H.f(l)
k=b5.z
if(typeof k!=="number")return H.f(k)
j=b5.cy
i=b5.c
if(typeof i!=="number")return H.f(i)
h=b5.r
if(typeof h!=="number")return H.f(h)
g=b5.Q
if(typeof g!=="number")return H.f(g)
f=b5.db
e=b5.d
d=b5.x
c=b5.ch
b=b5.dx
a=b1.e
if(typeof a!=="number")return a.l()
a0=b1.f
if(typeof a0!=="number")return a0.l()
a1=b1.r
if(typeof a1!=="number")return a1.l()
a2=b1.x
a3=b1.y
if(typeof a3!=="number")return a3.l()
a4=b1.z
if(typeof a4!=="number")return a4.l()
a5=b1.Q
if(typeof a5!=="number")return a5.l()
a6=b1.ch
a7=b1.cx
a8=b1.cy
a9=b1.db
b0=b1.dx
return V.aI(b2*b3+s*r+q*p+o*n,b2*m+s*l+q*k+o*j,b2*i+s*h+q*g+o*f,b2*e+s*d+q*c+o*b,a*b3+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*b3+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*b3+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
bh:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.f(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
o=i.e
if(typeof o!=="number")return o.l()
n=i.f
if(typeof n!=="number")return n.l()
m=i.r
if(typeof m!=="number")return m.l()
l=i.y
if(typeof l!=="number")return l.l()
k=i.z
if(typeof k!=="number")return k.l()
j=i.Q
if(typeof j!=="number")return j.l()
return new V.z(h*g+s*r+q*p,o*g+n*r+m*p,l*g+k*r+j*p)},
b3:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.f(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
o=i.e
if(typeof o!=="number")return o.l()
n=i.f
if(typeof n!=="number")return n.l()
m=i.r
if(typeof m!=="number")return m.l()
l=i.y
if(typeof l!=="number")return l.l()
k=i.z
if(typeof k!=="number")return k.l()
j=i.Q
if(typeof j!=="number")return j.l()
return new V.O(h*g+s*r+q*p+i.d,o*g+n*r+m*p+i.x,l*g+k*r+j*p+i.ch)},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aZ))return!1
s=b.a
r=q.a
$.C().toString
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.d-q.d)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.x-q.x)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.z
r=q.z
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.Q
r=q.Q
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.ch-q.ch)<1e-9))return!1
if(!(Math.abs(b.cx-q.cx)<1e-9))return!1
if(!(Math.abs(b.cy-q.cy)<1e-9))return!1
if(!(Math.abs(b.db-q.db)<1e-9))return!1
if(!(Math.abs(b.dx-q.dx)<1e-9))return!1
return!0},
i:function(a){return this.L()},
B:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.c0(H.d([n.a,n.e,n.y,n.cx],m),3,0),k=V.c0(H.d([n.b,n.f,n.z,n.cy],m),3,0),j=V.c0(H.d([n.c,n.r,n.Q,n.db],m),3,0),i=V.c0(H.d([n.d,n.x,n.ch,n.dx],m),3,0)
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
L:function(){return this.B("")}}
V.af.prototype={
a0:function(a){return new V.a9(a.a-this.a,a.b-this.b)},
p:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.af))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.O.prototype={
n:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.f(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.f(p)
return new V.O(o+n,s+r,q+p)},
q:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.q()
if(typeof n!=="number")return H.f(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.q()
if(typeof p!=="number")return H.f(p)
return new V.O(o-n,s-r,q-p)},
l:function(a,b){var s,r,q=this.a
if(typeof q!=="number")return q.l()
s=this.b
if(typeof s!=="number")return s.l()
r=this.c
if(typeof r!=="number")return r.l()
return new V.O(q*b,s*b,r*b)},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
r=q.a
$.C().toString
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.b0.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b0))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.eg.prototype={
ga5:function(){var s=this.c,r=this.d
return s>r?r:s},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eg))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.a9.prototype={
c5:function(a){return Math.sqrt(this.a1(this))},
a1:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
return q*p+s*r},
l:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.l()
if(typeof b!=="number")return H.f(b)
s=this.b
if(typeof s!=="number")return s.l()
return new V.a9(r*b,s*b)},
U:function(a,b){var s,r
$.C().toString
if(Math.abs(b-0)<1e-9){s=$.lG
return s==null?$.lG=new V.a9(0,0):s}s=this.a
if(typeof s!=="number")return s.U()
r=this.b
if(typeof r!=="number")return r.U()
return new V.a9(s/b,r/b)},
p:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
s=b.a
r=this.a
$.C().toString
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.z.prototype={
c5:function(a){return Math.sqrt(this.a1(this))},
a1:function(a){var s,r,q,p,o=this.a,n=a.a
if(typeof o!=="number")return o.l()
if(typeof n!=="number")return H.f(n)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
return o*n+s*r+q*p},
c6:function(a,b){return new V.z(V.h0(this.a,a.a,b),V.h0(this.b,a.b,b),V.h0(this.c,a.c,b))},
F:function(){var s=this,r=Math.sqrt(s.a1(s))
if(r===1)return s
return s.U(0,r)},
at:function(a){var s,r,q,p,o=this.b,n=a.c
if(typeof o!=="number")return o.l()
if(typeof n!=="number")return H.f(n)
s=this.c
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=a.a
if(typeof q!=="number")return H.f(q)
p=this.a
if(typeof p!=="number")return p.l()
return new V.z(o*n-s*r,s*q-p*n,p*r-o*q)},
n:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.f(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.f(p)
return new V.z(o+n,s+r,q+p)},
K:function(a){var s,r,q=this.a
if(typeof q!=="number")return q.K()
s=this.b
if(typeof s!=="number")return s.K()
r=this.c
if(typeof r!=="number")return r.K()
return new V.z(-q,-s,-r)},
l:function(a,b){var s,r,q=this.a
if(typeof q!=="number")return q.l()
s=this.b
if(typeof s!=="number")return s.l()
r=this.c
if(typeof r!=="number")return r.l()
return new V.z(q*b,s*b,r*b)},
U:function(a,b){var s,r,q
$.C().toString
if(Math.abs(b-0)<1e-9)return V.cL()
s=this.a
if(typeof s!=="number")return s.U()
r=this.b
if(typeof r!=="number")return r.U()
q=this.c
if(typeof q!=="number")return q.U()
return new V.z(s/b,r/b,q/b)},
dn:function(){var s=this.a
$.C().toString
if(typeof s!=="number")return H.f(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.b
if(typeof s!=="number")return H.f(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.c
if(typeof s!=="number")return H.f(s)
if(!(Math.abs(0-s)<1e-9))return!1
return!0},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.z))return!1
s=b.a
r=q.a
$.C().toString
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
U.hc.prototype={
bm:function(a){var s=V.k9(a,this.c,this.b)
return s},
gA:function(){var s=this.y
return s==null?this.y=D.J():s},
C:function(a){var s=this.y
if(s!=null)s.E(a)},
sck:function(a,b){},
sc7:function(a){var s,r=this,q=r.b
$.C().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bm(s)}q=new D.A("maximumLocation",q,r.b)
q.b=!0
r.C(q)}},
sc9:function(a){var s,r=this,q=r.c
$.C().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bm(s)}q=new D.A("minimumLocation",q,r.c)
q.b=!0
r.C(q)}},
sX:function(a,b){var s,r=this
b=r.bm(b)
s=r.d
$.C().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.A("location",s,b)
s.b=!0
r.C(s)}},
sc8:function(a){var s,r,q=this,p=q.e
$.C().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.A("maximumVelocity",p,a)
p.b=!0
q.C(p)}},
sO:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.C().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.A("velocity",r,a)
r.b=!0
s.C(r)}},
sbU:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.C().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.A("dampening",s,a)
s.b=!0
this.C(s)}},
an:function(a,b){var s,r,q,p=this,o=p.f
$.C().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sX(0,p.d+s*b)
o=p.x
$.C().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sO(s)}}}
U.c5.prototype={
gA:function(){var s=this.b
return s==null?this.b=D.J():s},
ai:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c5))return!1
return J.E(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.bD.prototype={
gA:function(){var s=this.e
return s==null?this.e=D.J():s},
C:function(a){var s=this.e
if(s!=null)s.E(a)},
a3:function(){return this.C(null)},
e3:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaC(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gA()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.aW()
s.b=!0
this.C(s)},
f9:function(a,b){var s,r,q,p
for(s=b.length,r=this.gaC(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q]
if(p!=null)p.gA().J(0,r)}s=new D.aX()
s.b=!0
this.C(s)},
ai:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.a4()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a6(p,p.length),s=null;p.w();){o=p.d
if(o!=null){r=o.ai(0,b,c)
if(r!=null)s=s==null?r:r.l(0,s)}}q.f=s==null?V.a7():s
p=q.e
if(p!=null)p.ag(0)}return q.f},
p:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bD))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.b(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.b(p,r)
if(!J.E(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iR:1}
U.R.prototype={}
U.cv.prototype={
gA:function(){var s=this.y
return s==null?this.y=D.J():s},
C:function(a){var s=this.y
if(s!=null)s.E(a)},
sdN:function(a){var s
a=V.k9(a,0,6.283185307179586)
s=this.a
$.C().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.A("yaw",s,a)
s.b=!0
this.C(s)}},
sdA:function(a,b){var s
b=V.k9(b,0,6.283185307179586)
s=this.b
$.C().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.A("pitch",s,b)
s.b=!0
this.C(s)}},
sdG:function(a){var s
a=V.k9(a,0,6.283185307179586)
s=this.c
$.C().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.A("roll",s,a)
s.b=!0
this.C(s)}},
ai:function(a,b,c){var s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sdN(s.a+s.d*b.y)
s.sdA(0,s.b+s.e*b.y)
s.sdG(s.c+s.f*b.y)
s.x=V.lf(s.c).l(0,V.le(s.b)).l(0,V.kt(s.a))
r=s.y
if(r!=null)r.ag(0)}return s.x},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.cv))return!1
s=q.a
r=b.a
$.C().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+"], ["+V.D(s.d,3,0)+", "+V.D(s.e,3,0)+", "+V.D(s.f,3,0)+"]"}}
U.cI.prototype={
gA:function(){var s=this.cy
return s==null?this.cy=D.J():s},
C:function(a){var s=this.cy
if(s!=null)s.E(a)},
a3:function(){return this.C(null)},
aT:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gd3().m(0,s.gbv())
s.a.c.gdq().m(0,s.gbx())
s.a.c.gcj().m(0,s.gbz())
return!0},
bw:function(a){var s=this
if(!J.E(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
by:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.y)return
if(l.x){s=a.y.a0(a.d)
s=s.a1(s)
r=l.r
if(typeof r!=="number")return H.f(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a0(a.d).l(0,2).U(0,s.ga5())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.l()
q=l.e
if(typeof q!=="number")return H.f(q)
r.sO(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a0(q).l(0,2).U(0,s.ga5())
r=l.b
o=p.a
if(typeof o!=="number")return o.K()
n=l.e
if(typeof n!=="number")return H.f(n)
m=l.z
if(typeof m!=="number")return H.f(m)
r.sX(0,-o*n+m)
l.b.sO(0)
l.Q=a.z.a0(q).l(0,2).U(0,s.ga5())}l.a3()},
bA:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a1(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.l()
q=p.e
if(typeof q!=="number")return H.f(q)
s.sO(r*10*q)
p.a3()}},
ai:function(a,b,c){var s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a4()
if(q<p){r.ch=p
s=b.y
r.b.an(0,s)
r.cx=V.lf(r.b.d)}return r.cx},
$iR:1}
U.cJ.prototype={
gA:function(){var s=this.fx
return s==null?this.fx=D.J():s},
C:function(a){var s=this.fx
if(s!=null)s.E(a)},
a3:function(){return this.C(null)},
aT:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gd3().m(0,q.gbv())
q.a.c.gdq().m(0,q.gbx())
q.a.c.gcj().m(0,q.gbz())
s=q.a.d
r=s.f
s=r==null?s.f=D.J():r
s.m(0,q.geo())
s=q.a.d
r=s.d
s=r==null?s.d=D.J():r
s.m(0,q.geq())
s=q.a.e
r=s.b
s=r==null?s.b=D.J():r
s.m(0,q.gfC())
s=q.a.e
r=s.d
s=r==null?s.d=D.J():r
s.m(0,q.gfA())
s=q.a.e
r=s.c
s=r==null?s.c=D.J():r
s.m(0,q.gfw())
return!0},
al:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.K()
s=-s}if(this.r){if(typeof r!=="number")return r.K()
r=-r}return new V.a9(s,r)},
bw:function(a){var s=this
t.c.a(a)
if(!J.E(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
by:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a0(a.d)
s=s.a1(s)
r=l.Q
if(typeof r!=="number")return H.f(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.al(a.y.a0(a.d).l(0,2).U(0,s.ga5()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.K()
q=l.y
if(typeof q!=="number")return H.f(q)
r.sO(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.K()
r=l.x
if(typeof r!=="number")return H.f(r)
q.sO(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.al(r.a0(q).l(0,2).U(0,s.ga5()))
r=l.c
o=p.a
if(typeof o!=="number")return o.K()
n=l.y
if(typeof n!=="number")return H.f(n)
m=l.cy
if(typeof m!=="number")return H.f(m)
r.sX(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.K()
o=l.x
if(typeof o!=="number")return H.f(o)
r=l.db
if(typeof r!=="number")return H.f(r)
m.sX(0,-n*o+r)
l.b.sO(0)
l.c.sO(0)
l.dx=l.al(a.z.a0(q).l(0,2).U(0,s.ga5()))}l.a3()},
bA:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a1(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.K()
q=p.y
if(typeof q!=="number")return H.f(q)
s.sO(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.K()
s=p.x
if(typeof s!=="number")return H.f(s)
q.sO(-r*10*s)
p.a3()}},
ep:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
er:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.E(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.al(r.a0(q).l(0,2).U(0,s.ga5()))
r=l.c
o=p.a
if(typeof o!=="number")return o.K()
n=l.y
if(typeof n!=="number")return H.f(n)
m=l.cy
if(typeof m!=="number")return H.f(m)
r.sX(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.K()
o=l.x
if(typeof o!=="number")return H.f(o)
r=l.db
if(typeof r!=="number")return H.f(r)
m.sX(0,-n*o+r)
l.b.sO(0)
l.c.sO(0)
l.dx=l.al(a.z.a0(q).l(0,2).U(0,s.ga5()))
l.a3()},
fD:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fB:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a0(a.d)
s=s.a1(s)
r=l.Q
if(typeof r!=="number")return H.f(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.al(a.y.a0(a.d).l(0,2).U(0,s.ga5()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.K()
q=l.y
if(typeof q!=="number")return H.f(q)
r.sO(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.K()
r=l.x
if(typeof r!=="number")return H.f(r)
q.sO(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.al(r.a0(q).l(0,2).U(0,s.ga5()))
r=l.c
o=p.a
if(typeof o!=="number")return o.K()
n=l.y
if(typeof n!=="number")return H.f(n)
m=l.cy
if(typeof m!=="number")return H.f(m)
r.sX(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.K()
o=l.x
if(typeof o!=="number")return H.f(o)
r=l.db
if(typeof r!=="number")return H.f(r)
m.sX(0,-n*o+r)
l.b.sO(0)
l.c.sO(0)
l.dx=l.al(a.z.a0(q).l(0,2).U(0,s.ga5()))}l.a3()},
fz:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a1(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.K()
q=p.y
if(typeof q!=="number")return H.f(q)
s.sO(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.K()
s=p.x
if(typeof s!=="number")return H.f(s)
q.sO(-r*10*s)
p.a3()}},
ai:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a4()
if(q<p){r.dy=p
s=b.y
r.c.an(0,s)
r.b.an(0,s)
r.fr=V.kt(r.b.d).l(0,V.le(r.c.d))}return r.fr},
$iR:1}
U.cK.prototype={
gA:function(){var s=this.r
return s==null?this.r=D.J():s},
C:function(a){var s=this.r
if(s!=null)s.E(a)},
aT:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.J():r
r=p.ges()
s.m(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.J():q).m(0,r)
return!0},
eu:function(a){var s,r,q,p,o=this
if(!J.E(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.l()
p=s+r*q
if(s!==p){o.d=p
s=new D.A("zoom",s,p)
s.b=!0
o.C(s)}},
ai:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aI(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iR:1}
M.dz.prototype={
ap:function(a){var s=this.y
if(s!=null)s.E(a)},
e4:function(){return this.ap(null)},
eG:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gak(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.aE()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.aW()
s.b=!0
this.ap(s)},
eI:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gak(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aE()
o.d=0
p.z=o}o.J(0,r)}}s=new D.aX()
s.b=!0
this.ap(s)},
sdH:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gA().J(0,r.gak())
s=r.d
r.d=a
if(a!=null)a.gA().m(0,r.gak())
q=new D.A("technique",s,r.d)
q.b=!0
r.ap(q)}},
gA:function(){var s=this.y
return s==null?this.y=D.J():s},
aN:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=new E.cz(a)
c.b=!0
s=d.f
if(s!=null)s.E(c)
a.dD(d.d)
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
if(typeof q!=="number")return H.f(q)
m=C.d.ah(n*q)
n=o.b
if(typeof p!=="number")return H.f(p)
l=C.d.ah(n*p)
n=C.d.ah(o.c*q)
a.c=n
o=C.d.ah(o.d*p)
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
g=V.aI(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.dC(g)
r=$.li
if(r==null){r=V.lk()
o=V.kx()
n=$.lH
r=V.ld(r,o,n==null?$.lH=new V.z(0,0,-1):n)
$.li=r
f=r}else f=r
r=s.b
if(r!=null){e=r.ai(0,a,s)
if(e!=null)f=e.l(0,f)}a.db.dC(f)
s=d.d
if(s!=null)s.an(0,a)
for(s=d.e.a,s=new J.a6(s,s.length);s.w();)s.d.an(0,a)
for(s=d.e.a,s=new J.a6(s,s.length);s.w();)s.d.aN(a)
d.b.toString
a.cy.cb()
a.db.cb()
d.c.toString
a.dB()}}
A.dj.prototype={}
A.h5.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
h3:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
fZ:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a2.prototype={
gaj:function(a){var s=this.a?1:0
return s|0|0},
i:function(a){var s=this.a?1:0
return""+(s|0|0)},
p:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a2))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.dS.prototype={
dW:function(c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8="uniform mat4 objMat;\n"
c4.z=c9
s=new P.U("")
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
A.oW(c9,s)
A.oY(c9,s)
A.oX(c9,s)
A.p_(c9,s)
A.p0(c9,s)
A.oZ(c9,s)
A.p1(c9,s)
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
k=A.oV(c4.z)
c4.c=l
c4.d=k
c4.e=c4.cB(l,35633)
c4.f=c4.cB(c4.d,35632)
q=c4.a
o=q.createProgram()
c4.r=o
q.attachShader(o,c4.e)
q.attachShader(c4.r,c4.f)
q.linkProgram(c4.r)
if(!q.getProgramParameter(c4.r,35714)){j=q.getProgramInfoLog(c4.r)
q.deleteProgram(c4.r)
H.r(P.t("Failed to link shader: "+H.h(j)))}c4.fs()
c4.fu()
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
q=c9.ba
if(q>0){c4.k4=c4.y.S(0,"bendMatCount")
for(i=0;i<q;++i){p=c4.r1
o=c4.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.r(P.t(c6+n+c7))
p.push(r.a(h))}}if(c9.a.a)c4.r2=t.r.a(c4.y.S(0,"emissionClr"))
if(c9.b.a)c4.x1=t.r.a(c4.y.S(0,"ambientClr"))
if(c9.c.a)c4.y2=t.r.a(c4.y.S(0,"diffuseClr"))
if(c9.d.a)c4.bb=t.r.a(c4.y.S(0,"invDiffuseClr"))
r=c9.e.a
if(!r)q=!1
else q=!0
if(q){c4.d6=t.n.a(c4.y.S(0,"shininess"))
if(r)c4.d5=t.r.a(c4.y.S(0,"specularClr"))}if(c9.db){c4.d7=t.Q.a(c4.y.S(0,"envSampler"))
if(c9.r.a)c4.d8=t.r.a(c4.y.S(0,"reflectClr"))
r=c9.x.a
if(!r)q=!1
else q=!0
if(q){c4.d9=t.n.a(c4.y.S(0,"refraction"))
if(r)c4.da=t.r.a(c4.y.S(0,"refractClr"))}}if(c9.y.a)c4.dc=t.n.a(c4.y.S(0,"alpha"))
if(c9.k1){r=c9.z
q=r.length
if(q!==0){c4.bV=new H.y(t.J)
c4.bW=new H.y(t.en)
for(p=t.r,o=t.n,n=t.d6,g=0;g<r.length;r.length===q||(0,H.q)(r),++g){f=r[g]
e=f.a
d="barLight"+H.h(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){b=c4.y
a=d+"s["+i+"].startPnt"
h=b.h(0,a)
if(h==null)H.r(P.t(c6+a+c7))
p.a(h)
b=c4.y
a=d+"s["+i+"].endPnt"
a0=b.h(0,a)
if(a0==null)H.r(P.t(c6+a+c7))
p.a(a0)
b=c4.y
a=d+"s["+i+"].color"
a1=b.h(0,a)
if(a1==null)H.r(P.t(c6+a+c7))
p.a(a1)
if(typeof e!=="number")return e.a7()
if((e&4)!==0){b=c4.y
a=d+"s["+i+"].att0"
a2=b.h(0,a)
if(a2==null)H.r(P.t(c6+a+c7))
o.a(a2)
b=c4.y
a=d+"s["+i+"].att1"
a3=b.h(0,a)
if(a3==null)H.r(P.t(c6+a+c7))
o.a(a3)
b=c4.y
a=d+"s["+i+"].att2"
a4=b.h(0,a)
if(a4==null)H.r(P.t(c6+a+c7))
o.a(a4)
a5=a4
a6=a3
a7=a2}else{a5=c5
a6=a5
a7=a6}c.push(new A.cD(h,a0,a1,a7,a6,a5))}c4.bW.j(0,e,c)
m=c4.bV
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.r(P.t(c6+a+c7))
m.j(0,e,h)}}r=c9.Q
q=r.length
if(q!==0){c4.bX=new H.y(t.J)
c4.bY=new H.y(t.af)
for(p=t.r,o=t.u,n=t.dv,g=0;g<r.length;r.length===q||(0,H.q)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.h(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){if(typeof e!=="number")return e.a7()
b=(e&1)!==0
if(b){a=c4.y
a8=d+"s["+i+"].objUp"
h=a.h(0,a8)
if(h==null)H.r(P.t(c6+a8+c7))
p.a(h)
a=c4.y
a8=d+"s["+i+"].objRight"
a0=a.h(0,a8)
if(a0==null)H.r(P.t(c6+a8+c7))
p.a(a0)
a=c4.y
a8=d+"s["+i+"].objDir"
a1=a.h(0,a8)
if(a1==null)H.r(P.t(c6+a8+c7))
p.a(a1)
a9=a1
b0=a0
b1=h}else{a9=c5
b0=a9
b1=b0}a=c4.y
a8=d+"s["+i+"].viewDir"
h=a.h(0,a8)
if(h==null)H.r(P.t(c6+a8+c7))
p.a(h)
a=c4.y
a8=d+"s["+i+"].color"
a0=a.h(0,a8)
if(a0==null)H.r(P.t(c6+a8+c7))
p.a(a0)
if(b){b=c4.y
a=d+"sTexture2D"+i
a1=b.h(0,a)
if(a1==null)H.r(P.t(c6+a+c7))
o.a(a1)
b2=a1}else b2=c5
c.push(new A.cE(b1,b0,a9,h,a0,b2))}c4.bY.j(0,e,c)
m=c4.bX
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.r(P.t(c6+a+c7))
m.j(0,e,h)}}r=c9.ch
q=r.length
if(q!==0){c4.bZ=new H.y(t.J)
c4.c_=new H.y(t.gr)
for(p=t.r,o=t.O,n=t.Q,m=t.y,b=t.n,a=t.by,g=0;g<r.length;r.length===q||(0,H.q)(r),++g){f=r[g]
e=f.a
d="pointLight"+H.h(e)
c=H.d([],a)
for(a8=f.b,i=0;i<a8;++i){b3=c4.y
b4=d+"s["+i+"].point"
h=b3.h(0,b4)
if(h==null)H.r(P.t(c6+b4+c7))
p.a(h)
b3=c4.y
b4=d+"s["+i+"].viewPnt"
a0=b3.h(0,b4)
if(a0==null)H.r(P.t(c6+b4+c7))
p.a(a0)
b3=c4.y
b4=d+"s["+i+"].color"
a1=b3.h(0,b4)
if(a1==null)H.r(P.t(c6+b4+c7))
p.a(a1)
if(typeof e!=="number")return e.a7()
if((e&3)!==0){b3=c4.y
b4=d+"s["+i+"].invViewRotMat"
a2=b3.h(0,b4)
if(a2==null)H.r(P.t(c6+b4+c7))
o.a(a2)
b5=a2}else b5=c5
if((e&1)!==0){b3=c4.y
b4=d+"sTextureCube"+i
a2=b3.h(0,b4)
if(a2==null)H.r(P.t(c6+b4+c7))
n.a(a2)
b2=a2}else b2=c5
if((e&2)!==0){b3=c4.y
b4=d+"sShadowCube"+i
a2=b3.h(0,b4)
if(a2==null)H.r(P.t(c6+b4+c7))
n.a(a2)
b3=c4.y
b4=d+"s["+i+"].shadowAdj"
a3=b3.h(0,b4)
if(a3==null)H.r(P.t(c6+b4+c7))
m.a(a3)
b6=a2
b7=a3}else{b6=c5
b7=b6}if((e&4)!==0){b3=c4.y
b4=d+"s["+i+"].att0"
a2=b3.h(0,b4)
if(a2==null)H.r(P.t(c6+b4+c7))
b.a(a2)
b3=c4.y
b4=d+"s["+i+"].att1"
a3=b3.h(0,b4)
if(a3==null)H.r(P.t(c6+b4+c7))
b.a(a3)
b3=c4.y
b4=d+"s["+i+"].att2"
a4=b3.h(0,b4)
if(a4==null)H.r(P.t(c6+b4+c7))
b.a(a4)
a5=a4
a6=a3
a7=a2}else{a5=c5
a6=a5
a7=a6}c.push(new A.cG(h,a0,b5,a1,b2,b6,b7,a7,a6,a5))}c4.c_.j(0,e,c)
a8=c4.bZ
b3=c4.y
b4=d+"Count"
h=b3.h(0,b4)
if(h==null)H.r(P.t(c6+b4+c7))
a8.j(0,e,h)}}r=c9.cx
q=r.length
if(q!==0){c4.c0=new H.y(t.J)
c4.c1=new H.y(t.bR)
for(p=t.r,o=t.n,n=t.y,m=t.u,b=t.fF,g=0;g<r.length;r.length===q||(0,H.q)(r),++g){f=r[g]
e=f.a
d="spotLight"+H.h(e)
c=H.d([],b)
for(a=f.b,i=0;i<a;++i){a8=c4.y
b3=d+"s["+i+"].objPnt"
h=a8.h(0,b3)
if(h==null)H.r(P.t(c6+b3+c7))
p.a(h)
a8=c4.y
b3=d+"s["+i+"].objDir"
a0=a8.h(0,b3)
if(a0==null)H.r(P.t(c6+b3+c7))
p.a(a0)
a8=c4.y
b3=d+"s["+i+"].viewPnt"
a1=a8.h(0,b3)
if(a1==null)H.r(P.t(c6+b3+c7))
p.a(a1)
a8=c4.y
b3=d+"s["+i+"].color"
a2=a8.h(0,b3)
if(a2==null)H.r(P.t(c6+b3+c7))
p.a(a2)
if(typeof e!=="number")return e.a7()
if((e&3)!==0){a8=c4.y
b3=d+"s["+i+"].objUp"
a3=a8.h(0,b3)
if(a3==null)H.r(P.t(c6+b3+c7))
p.a(a3)
a8=c4.y
b3=d+"s["+i+"].objRight"
a4=a8.h(0,b3)
if(a4==null)H.r(P.t(c6+b3+c7))
p.a(a4)
a8=c4.y
b3=d+"s["+i+"].tuScalar"
b8=a8.h(0,b3)
if(b8==null)H.r(P.t(c6+b3+c7))
o.a(b8)
a8=c4.y
b3=d+"s["+i+"].tvScalar"
b9=a8.h(0,b3)
if(b9==null)H.r(P.t(c6+b3+c7))
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
if(a3==null)H.r(P.t(c6+b4+c7))
n.a(a3)
b7=a3}else b7=c5
if((e&8)!==0){b3=c4.y
b4=d+"s["+i+"].cutoff"
a3=b3.h(0,b4)
if(a3==null)H.r(P.t(c6+b4+c7))
o.a(a3)
b3=c4.y
b4=d+"s["+i+"].coneAngle"
a4=b3.h(0,b4)
if(a4==null)H.r(P.t(c6+b4+c7))
o.a(a4)
c2=a4
c3=a3}else{c2=c5
c3=c2}if((e&4)!==0){b3=c4.y
b4=d+"s["+i+"].att0"
a3=b3.h(0,b4)
if(a3==null)H.r(P.t(c6+b4+c7))
o.a(a3)
b3=c4.y
b4=d+"s["+i+"].att1"
a4=b3.h(0,b4)
if(a4==null)H.r(P.t(c6+b4+c7))
o.a(a4)
b3=c4.y
b4=d+"s["+i+"].att2"
b8=b3.h(0,b4)
if(b8==null)H.r(P.t(c6+b4+c7))
o.a(b8)
a5=b8
a6=a4
a7=a3}else{a5=c5
a6=a5
a7=a6}if((e&1)!==0){b3=c4.y
b4=d+"sTexture2D"+i
a3=b3.h(0,b4)
if(a3==null)H.r(P.t(c6+b4+c7))
m.a(a3)
b2=a3}else b2=c5
if(a8){a8=c4.y
b3=d+"sShadow2D"+i
a3=a8.h(0,b3)
if(a3==null)H.r(P.t(c6+b3+c7))
m.a(a3)
b6=a3}else b6=c5
c.push(new A.cH(h,a0,a1,a2,b1,b0,c1,c0,b7,c3,c2,a7,a6,a5,b2,b6))}c4.c1.j(0,e,c)
a=c4.c0
a8=c4.y
b3=d+"Count"
h=a8.h(0,b3)
if(h==null)H.r(P.t(c6+b3+c7))
a.j(0,e,h)}}}},
fp:function(a,b){}}
A.dn.prototype={
i:function(a){return"barLight"+H.h(this.a)}}
A.dx.prototype={
i:function(a){return"dirLight"+H.h(this.a)}}
A.ed.prototype={
i:function(a){return"pointLight"+H.h(this.a)}}
A.eo.prototype={
i:function(a){return"spotLight"+H.h(this.a)}}
A.hM.prototype={
i:function(a){return this.aW}}
A.cD.prototype={}
A.cE.prototype={}
A.cG.prototype={}
A.cH.prototype={}
A.cx.prototype={
dZ:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
cB:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.t("Error compiling shader '"+H.h(q)+"': "+H.h(s)))}return q},
fs:function(){var s,r,q,p=this,o=H.d([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.f(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dj(n,r.name,q))}p.x=new A.h5(o)},
fu:function(){var s,r,q,p=this,o=H.d([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.f(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.fV(r.type,r.size,r.name,q))}p.y=new A.iF(o)},
aE:function(a,b,c){var s=this.a
if(a===1)return new A.eH(s,b,c)
else return A.kw(s,this.r,b,a,c)},
ej:function(a,b,c){var s=this.a
if(a===1)return new A.eL(s,b,c)
else return A.kw(s,this.r,b,a,c)},
ek:function(a,b,c){var s=this.a
if(a===1)return new A.eM(s,b,c)
else return A.kw(s,this.r,b,a,c)},
b8:function(a,b){return new P.fb(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
fV:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aE(b,c,d)
case 5121:return s.aE(b,c,d)
case 5122:return s.aE(b,c,d)
case 5123:return s.aE(b,c,d)
case 5124:return s.aE(b,c,d)
case 5125:return s.aE(b,c,d)
case 5126:return new A.eG(s.a,c,d)
case 35664:return new A.iB(s.a,c,d)
case 35665:return new A.eI(s.a,c,d)
case 35666:return new A.eJ(s.a,c,d)
case 35667:return new A.iC(s.a,c,d)
case 35668:return new A.iD(s.a,c,d)
case 35669:return new A.iE(s.a,c,d)
case 35674:return new A.iG(s.a,c,d)
case 35675:return new A.eK(s.a,c,d)
case 35676:return new A.cF(s.a,c,d)
case 35678:return s.ej(b,c,d)
case 35680:return s.ek(b,c,d)
case 35670:throw H.c(s.b8("BOOL",c))
case 35671:throw H.c(s.b8("BOOL_VEC2",c))
case 35672:throw H.c(s.b8("BOOL_VEC3",c))
case 35673:throw H.c(s.b8("BOOL_VEC4",c))
default:throw H.c(P.t("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.eF.prototype={}
A.iF.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
S:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.L()},
L:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.eH.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.iC.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.iD.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.iE.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.iA.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)}}
A.eG.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.eI.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.eJ.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.iG.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.eK.prototype={
ad:function(a){var s=new Float32Array(H.bV(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.cF.prototype={
ad:function(a){var s=new Float32Array(H.bV(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.eL.prototype={
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.eM.prototype={
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.jt.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.c6(q.b,b).c6(q.d.c6(q.c,b),c)
a.sX(0,new V.O(p.a,p.b,p.c))
a.sci(p.F())
q=1-b
s=1-c
a.sbN(new V.b0(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)}}
F.jE.prototype={
$2:function(a,b){return V.h0(this.a,this.b,b)}}
F.jG.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.h0(-1,1,c),n=this.a.$2(b,c)
if(typeof n!=="number")return H.f(n)
q=-q*n
s=p*n
a.sX(0,new V.O(q,s,o))
a.sci(new V.z(q,s,o).F())
a.sbN(new V.b0(1-c,2+c,-1,-1))}}
F.jH.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jI.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.k5.prototype={
$2:function(a,b){return 0}}
F.k6.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.f(r)
s=a.f
r=new V.z(s.a,s.b,s.c).F().l(0,this.b+r)
a.sX(0,new V.O(r.a,r.b,r.c))}}
F.k8.prototype={
$1:function(a){return new V.O(Math.cos(a),Math.sin(a),0)}}
F.jU.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.O(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)}}
F.jF.prototype={
$3:function(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=b*6.283185307179586,i=k.a,h=k.b,g=J.kY(i.$1(j),h)
h=J.kY(i.$1(j+3.141592653589793/k.c),h).q(0,g)
s=new V.z(h.a,h.b,h.c).F()
i=$.lI
if(i==null){i=new V.z(1,0,0)
$.lI=i
r=i}else r=i
q=s.at(!J.E(s,r)?V.lK():r).F()
r=q.at(s).F()
p=c*6.283185307179586
i=Math.cos(p)
h=k.d
o=Math.sin(p)
i=r.l(0,i*h)
h=q.l(0,o*h)
o=i.a
n=h.a
if(typeof o!=="number")return o.q()
if(typeof n!=="number")return H.f(n)
m=i.b
l=h.b
if(typeof m!=="number")return m.q()
if(typeof l!=="number")return H.f(l)
i=i.c
h=h.c
if(typeof i!=="number")return i.q()
if(typeof h!=="number")return H.f(h)
a.sX(0,g.n(0,new V.O(o-n,m-l,i-h)))}}
F.jL.prototype={
$2:function(a,b){return 0}}
F.jM.prototype={
$3:function(a,b,c){var s,r,q=b*2-1,p=c*2-1
a.sX(0,new V.O(q,p,this.a.a.$2(b,c)))
a.sci(new V.z(q,p,1).F())
s=1-b
r=1-c
a.sbN(new V.b0(b*c,2+s*c,4+b*r,6+s*r))}}
F.dA.prototype={
aU:function(){var s=this
if(!s.gaV()){C.b.J(s.a.a.d.b,s)
s.a.a.Z()}s.bE()
s.bF()
s.fk()},
bI:function(a){this.a=a
a.d.b.push(this)},
bJ:function(a){this.b=a
a.d.c.push(this)},
fq:function(a){this.c=a
a.d.d.push(this)},
bE:function(){var s=this.a
if(s!=null){C.b.J(s.d.b,this)
this.a=null}},
bF:function(){var s=this.b
if(s!=null){C.b.J(s.d.c,this)
this.b=null}},
fk:function(){var s=this.c
if(s!=null){C.b.J(s.d.d,this)
this.c=null}},
gaV:function(){return this.a==null||this.b==null||this.c==null},
ec:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cL()
if(n!=null)q=q.n(0,n)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.dn())return p
return q.F()},
ee:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.q(0,n)
q=new V.z(o.a,o.b,o.c).F()
o=r.q(0,n)
return q.at(new V.z(o.a,o.b,o.c).F()).F()},
bQ:function(){var s,r=this
if(r.d!=null)return!0
s=r.ec()
if(s==null){s=r.ee()
if(s==null)return!1}r.d=s
r.a.a.Z()
return!0},
eb:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cL()
if(n!=null)q=q.n(0,n)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.dn())return p
return q.F()},
ed:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.C().toString
if(Math.abs(p-0)<1e-9){j=b.q(0,e)
o=new V.z(j.a,j.b,j.c).F()
if(q.a-r.a<0)o=o.K(0)}else{n=(j-s.b)/p
j=b.q(0,e).l(0,n).n(0,e).q(0,h)
o=new V.z(j.a,j.b,j.c).F()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.K(0)}j=l.d
if(j!=null){m=j.F()
o=m.at(o).F().at(m).F()}return o},
bO:function(){var s,r=this
if(r.e!=null)return!0
s=r.eb()
if(s==null){s=r.ed()
if(s==null)return!1}r.e=s
r.a.a.Z()
return!0},
gfQ:function(a){var s=this
if(J.E(s.a,s.b))return!0
if(J.E(s.b,s.c))return!0
if(J.E(s.c,s.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var s,r,q=this
if(q.gaV())return a+"disposed"
s=a+C.a.ac(J.a5(q.a.e),0)+", "+C.a.ac(J.a5(q.b.e),0)+", "+C.a.ac(J.a5(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
L:function(){return this.B("")}}
F.ht.prototype={}
F.il.prototype={
aX:function(a,b,c){var s,r=b.a
r.a.a.v()
r=r.e
s=c.a
s.a.a.v()
if(r==s.e){r=b.b
r.a.a.v()
r=r.e
s=c.b
s.a.a.v()
if(r==s.e){r=b.c
r.a.a.v()
r=r.e
s=c.c
s.a.a.v()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.v()
r=r.e
s=c.b
s.a.a.v()
if(r==s.e){r=b.b
r.a.a.v()
r=r.e
s=c.c
s.a.a.v()
if(r==s.e){r=b.c
r.a.a.v()
r=r.e
s=c.a
s.a.a.v()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.v()
r=r.e
s=c.c
s.a.a.v()
if(r==s.e){r=b.b
r.a.a.v()
r=r.e
s=c.a
s.a.a.v()
if(r==s.e){r=b.c
r.a.a.v()
r=r.e
s=c.b
s.a.a.v()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.dO.prototype={
aU:function(){var s=this
if(!s.gaV()){C.b.J(s.a.a.c.b,s)
s.a.a.Z()}s.bE()
s.bF()},
bI:function(a){this.a=a
a.c.b.push(this)},
bJ:function(a){this.b=a
a.c.c.push(this)},
bE:function(){var s=this.a
if(s!=null){C.b.J(s.c.b,this)
this.a=null}},
bF:function(){var s=this.b
if(s!=null){C.b.J(s.c.c,this)
this.b=null}},
gaV:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){if(this.gaV())return a+"disposed"
return a+C.a.ac(J.a5(this.a.e),0)+", "+C.a.ac(J.a5(this.b.e),0)},
L:function(){return this.B("")}}
F.hC.prototype={}
F.iz.prototype={
aX:function(a,b,c){var s,r=b.a
r.a.a.v()
r=r.e
s=c.a
s.a.a.v()
if(r==s.e){r=b.b
r.a.a.v()
r=r.e
s=c.b
s.a.a.v()
return r==s.e}else{r=b.a
r.a.a.v()
r=r.e
s=c.b
s.a.a.v()
if(r==s.e){r=b.b
r.a.a.v()
r=r.e
s=c.a
s.a.a.v()
return r==s.e}else return!1}}}
F.ea.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.ac(J.a5(s.e),0)},
L:function(){return this.B("")}}
F.id.prototype={
gA:function(){var s=this.e
return s==null?this.e=D.J():s},
aY:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.v()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.q)(e),++q){p=e[q]
f.a.m(0,p.fT())}f.a.v()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.q)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.n()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
l=n[m]
f.b.a.a.m(0,l)
m=new F.ea()
if(l.a==null)H.r(P.t("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.E(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.q)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.n()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.v()
n=n.e
if(typeof n!=="number")return n.n()
n+=s
m=m.c
if(n>=m.length)return H.b(m,n)
i=m[n]
n=f.c.a
n.a.m(0,j)
n.a.m(0,i)
F.nc(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.q)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.n()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.v()
n=n.e
if(typeof n!=="number")return n.n()
n+=s
m=m.c
if(n>=m.length)return H.b(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.n()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
g=n[m]
m=f.d.a
m.a.m(0,j)
m.a.m(0,i)
m.a.m(0,g)
F.cc(j,i,g)}e=f.e
if(e!=null)e.ag(0)},
af:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.af()||!1
if(!r.a.af())s=!1
q=r.e
if(q!=null)q.ag(0)
return s},
hg:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.a.c
s=H.d(m.slice(0),H.m3(m).P("u<1>"))
for(m=t.j;s.length!==0;){r=C.b.gh7(s)
C.b.cd(s,0)
if(r!=null){q=H.d([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.b(s,p)
o=s[p]
if(o!=null&&a.aX(0,r,o)){q.push(o)
C.b.cd(s,p)}}if(q.length>1)b.aY(q)}}n.a.v()
n.c.ce()
n.d.ce()
n.b.hy()
n.c.cf(new F.iz())
n.d.cf(new F.il())
m=n.e
if(m!=null)m.ag(0)},
bM:function(){this.hg(new F.j0(),new F.i2())},
fO:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.bd().a)!==0?1:0
if((s&$.bc().a)!==0)++r
if((s&$.bb().a)!==0)++r
if((s&$.bw().a)!==0)++r
if((s&$.bx().a)!==0)++r
if((s&$.dd().a)!==0)++r
if((s&$.de().a)!==0)++r
if((s&$.c1().a)!==0)++r
if((s&$.ba().a)!==0)++r
q=a6.gcn(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.d(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.d(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.fM(k)
i=j.gcn(j)
if(k>=m)return H.b(n,k)
n[k]=new Z.dp(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.b(g,h)
f=g[h].hf(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.b(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.bV(o)),35044)
s.bindBuffer(a3,null)
a=new Z.dq(new Z.eW(a3,b),n,a6)
a.b=H.d([],t.l)
if(a2.b.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.v()
a0.push(m.e)}a1=Z.ky(s,34963,a0)
a.b.push(new Z.bE(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.v()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.b(m,k)
m=m[k].b
m.a.a.v()
a0.push(m.e)}a1=Z.ky(s,34963,a0)
a.b.push(new Z.bE(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.v()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.b(m,k)
m=m[k].b
m.a.a.v()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.b(m,k)
m=m[k].c
m.a.a.v()
a0.push(m.e)}a1=Z.ky(s,34963,a0)
a.b.push(new Z.bE(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.d([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.B(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.B(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.B(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.B(r))}return C.b.t(q,"\n")},
Z:function(){var s=this.e
if(s!=null)s.E(null)}}
F.ie.prototype={
fJ:function(a){var s,r,q,p,o,n=H.d([],t.b),m=a.length
if(m>0){s=a[0]
for(r=this.a,q=2;q<m;++q){p=q-1
o=a.length
if(p>=o)return H.b(a,p)
p=a[p]
if(q>=o)return H.b(a,q)
o=a[q]
r.a.m(0,s)
r.a.m(0,p)
r.a.m(0,o)
n.push(F.cc(s,p,o))}}return n},
fK:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.d([],t.b)
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
f.push(F.cc(k,j,h))
s.a.m(0,k)
s.a.m(0,h)
s.a.m(0,g)
f.push(F.cc(k,h,g))}else{l.m(0,j)
s.a.m(0,h)
s.a.m(0,g)
f.push(F.cc(j,h,g))
s.a.m(0,j)
s.a.m(0,g)
s.a.m(0,k)
f.push(F.cc(j,g,k))}n=!n}p=!p}return f},
gk:function(a){return this.b.length},
cf:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.b(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.aX(0,n,l)){n.aU()
break}}}}},
ce:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=q.gfQ(q)
if(r)q.aU()}},
af:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].bQ())q=!1
return q},
bP:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].bO())q=!1
return q},
i:function(a){return this.L()},
B:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(a))
return C.b.t(p,"\n")},
L:function(){return this.B("")}}
F.ig.prototype={
gk:function(a){return this.b.length},
cf:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.b(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.aX(0,n,l)){n.aU()
break}}}}},
ce:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=J.E(q.a,q.b)
if(r)q.aU()}},
i:function(a){return this.L()},
B:function(a){var s,r,q=H.d([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.b(r,s)
q.push(r[s].B(a+(""+s+". ")))}return C.b.t(q,"\n")},
L:function(){return this.B("")}}
F.ih.prototype={
gk:function(a){return this.b.length},
hy:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.J(q.b.b,r)
q=r.a.a.e
if(q!=null)q.E(null)
q=r.a
if(q!=null){C.b.J(q.b.b,r)
r.a=null}}}},
i:function(a){return this.L()},
B:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(a))
return C.b.t(p,"\n")},
L:function(){return this.B("")}}
F.eT.prototype={
bT:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.eU(s.cx,p,m,r,q,o,n,a,l)},
fT:function(){return this.bT(null)},
sX:function(a,b){var s
if(!J.E(this.f,b)){this.f=b
s=this.a
if(s!=null)s.Z()}},
sci:function(a){var s
if(!J.E(this.z,a)){this.z=a
s=this.a
if(s!=null)s.Z()}},
sbN:function(a){var s
if(!J.E(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.Z()}},
hf:function(a){var s,r,q=this
if(a.p(0,$.bd())){s=q.f
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.bc())){s=q.r
r=t.m
if(s==null)return H.d([0,1,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.bb())){s=q.x
r=t.m
if(s==null)return H.d([0,0,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.bw())){s=q.y
r=t.m
if(s==null)return H.d([0,0],r)
else return H.d([s.a,s.b],r)}else if(a.p(0,$.bx())){s=q.z
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.dd())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.de())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1,1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else if(a.p(0,$.c1()))return H.d([q.ch],t.m)
else if(a.p(0,$.ba())){s=q.cx
r=t.m
if(s==null)return H.d([-1,-1,-1,-1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else return H.d([],t.m)},
bQ:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cL()
r.d.G(0,new F.j5(q))
r.r=q.a.F()
q=r.a
if(q!=null){q.Z()
q=r.a.e
if(q!=null)q.ag(0)}return!0},
bO:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cL()
r.d.G(0,new F.j4(q))
r.x=q.a.F()
q=r.a
if(q!=null){q.Z()
q=r.a.e
if(q!=null)q.ag(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
B:function(a){var s,r,q=this,p="-",o=H.d([],t.i)
o.push(C.a.ac(J.a5(q.e),0))
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
r=C.b.t(o,", ")
return a+"{"+r+"}"},
L:function(){return this.B("")}}
F.j5.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.n(0,r)}}}
F.j4.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.n(0,r)}}}
F.iW.prototype={
v:function(){var s,r,q,p
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
s.Z()
return!0},
fL:function(a,b,c,d,e,f){var s=F.eU(a,null,b,c,d,e,f,null,0)
this.m(0,s)
return s},
gk:function(a){return this.c.length},
af:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].bQ()
return!0},
bP:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].bO()
return!0},
fP:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r.F()
if(!J.E(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}}return!0},
i:function(a){return this.L()},
B:function(a){var s,r,q,p
this.v()
s=H.d([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].B(a))
return C.b.t(s,"\n")},
L:function(){return this.B("")}}
F.iX.prototype={
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
C.b.G(s.c,new F.iY(s,b))
C.b.G(s.d,new F.iZ(s,b))},
i:function(a){return this.L()},
L:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(""))
return C.b.t(p,"\n")}}
F.iY.prototype={
$1:function(a){if(!J.E(a.a,this.a))this.b.$1(a)}}
F.iZ.prototype={
$1:function(a){var s=this.a
if(!J.E(a.a,s)&&!J.E(a.b,s))this.b.$1(a)}}
F.j_.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.b(r,s)
return r[s]}else{if(b<0)return H.b(r,b)
return r[b]}},
i:function(a){return this.L()},
L:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(""))
return C.b.t(p,"\n")}}
F.j1.prototype={}
F.j0.prototype={
aX:function(a,b,c){return J.E(b.f,c.f)}}
F.j2.prototype={}
F.i2.prototype={
aY:function(a){var s,r,q,p,o,n,m,l,k,j,i=V.cL()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null){p=i.a
o=q.a
if(typeof p!=="number")return p.n()
if(typeof o!=="number")return H.f(o)
n=i.b
m=q.b
if(typeof n!=="number")return n.n()
if(typeof m!=="number")return H.f(m)
l=i.c
q=q.c
if(typeof l!=="number")return l.n()
if(typeof q!=="number")return H.f(q)
i=new V.z(p+o,n+m,l+q)}}i=i.F()
for(s=a.length,q=i==null,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){k=a[r]
j=q?null:i.F()
if(!J.E(k.r,j)){k.r=j
p=k.a
if(p!=null){p=p.e
if(p!=null)p.E(null)}}}return null}}
F.j3.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].B(""))
return C.b.t(p,"\n")}}
O.dR.prototype={
gA:function(){var s=this.fr
return s==null?this.fr=D.J():s},
a9:function(a){var s=this.fr
if(s!=null)s.E(a)},
eE:function(){return this.a9(null)},
cL:function(a){this.a=null
this.a9(a)},
fo:function(){return this.cL(null)},
ey:function(a,b){var s=new D.aW()
s.b=!0
this.a9(s)},
eA:function(a,b){var s=new D.aX()
s.b=!0
this.a9(s)},
cz:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.y(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
o=p.gam()
n=d.h(0,p.gam())
d.j(0,o,n==null?1:n)}m=H.d([],t.am)
d.G(0,new O.hQ(f,m))
C.b.aQ(m,new O.hR())
l=new H.y(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){o=l.h(0,0)
l.j(0,0,o==null?1:o)}k=H.d([],t.M)
l.G(0,new O.hS(f,k))
C.b.aQ(k,new O.hT())
j=new H.y(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
o=p.gam()
n=j.h(0,p.gam())
j.j(0,o,n==null?1:n)}i=H.d([],t.d1)
j.G(0,new O.hU(f,i))
C.b.aQ(i,new O.hV())
h=new H.y(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.q)(e),++q){p=e[q]
r=p.gam()
o=h.h(0,p.gam())
h.j(0,r,o==null?1:o)}g=H.d([],t.cz)
h.G(0,new O.hW(f,g))
C.b.aQ(g,new O.hX())
e=C.c.a_(f.e.a.length+3,4)
f.dy.toString
return A.nj(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
ea:function(a,b){},
an:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a6(s,s.length);s.w();){r=s.d
r.toString
q=$.iV
if(q==null)q=$.iV=new V.z(0,0,1)
r.a=q
p=$.iU
r.d=p==null?$.iU=new V.z(0,1,0):p
p=$.iT
r.e=p==null?$.iT=new V.z(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bh(q).F()
r.d=o.bh(r.d).F()
r.e=o.bh(r.e).F()}}}},
hA:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cz()
s=b6.fr.h(0,b5.aW)
if(s==null){s=A.ni(b5,b6.a)
r=s.b
if(r.length===0)H.r(P.t("May not cache a shader with no name."))
if(b6.fr.bR(0,r))H.r(P.t('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.j(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.bb
b5=b7.e
if(!(b5 instanceof Z.dq))b5=b7.e=null
if(b5==null||!b5.d.p(0,p)){b5=q.k4
if(b5)b7.d.af()
o=q.r1
if(o){n=b7.d
m=n.e
if(m!=null)++m.d
n.d.bP()
n.a.bP()
n=n.e
if(n!=null)n.ag(0)}n=q.rx
if(n){m=b7.d
l=m.e
if(l!=null)++l.d
m.a.fP()
m=m.e
if(m!=null)m.ag(0)}k=b7.d.fO(new Z.j6(b6.a),p)
k.aL($.bd()).e=b4.a.Q.c
if(b5)k.aL($.bc()).e=b4.a.cx.c
if(o)k.aL($.bb()).e=b4.a.ch.c
if(q.r2)k.aL($.bw()).e=b4.a.cy.c
if(n)k.aL($.bx()).e=b4.a.db.c
if(q.ry)k.aL($.ba()).e=b4.a.dx.c
b7.e=k}j=H.d([],t.bw)
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.h3()
if(q.fr){b5=b4.a
n=b6.dx
n=n.gY(n)
b5=b5.dy
b5.toString
b5.ad(n.a6(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.gY(n)
m=b6.dx
m=b6.cx=n.l(0,m.gY(m))
n=m}b5=b5.fr
b5.toString
b5.ad(n.a6(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.ghx()
m=b6.dx
m=b6.ch=n.l(0,m.gY(m))
n=m}b5=b5.fy
b5.toString
b5.ad(n.a6(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.gY(n)
b5=b5.fx
b5.toString
b5.ad(n.a6(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.ad(C.i.a6(n,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.ad(C.i.a6(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.ad(C.i.a6(n,!0))}if(q.ba>0){i=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,i)
for(h=0;h<i;++h){b5=b4.a
n=b4.e.a
if(h>=n.length)return H.b(n,h)
n=n[h]
b5=b5.r1
if(h>=b5.length)return H.b(b5,h)
b5=b5[h]
g=new Float32Array(H.bV(n.a6(0,!0)))
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
b5=b5.bb
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.e.a
if(!b5)n=!1
else n=!0
if(n){n=b4.a
m=b4.z.ch
n=n.d6
n.a.uniform1f(n.d,m)}if(b5){b5=b4.a
n=b4.z.f
b5=b5.d5
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.z
if(b5.length>0){f=new H.y(t.a)
for(n=b4.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.q)(n),++e){d=n[e]
c=d.gam()
b=f.h(0,c)
if(b==null)b=0
f.j(0,c,b+1)
a=J.c2(b4.a.bW.h(0,c),b)
l=d.ghL()
a0=$.aK
l=l.b3(a0==null?$.aK=new V.O(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.ghQ()
a0=$.aK
l=l.b3(a0==null?$.aK=new V.O(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaJ(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.gd4()){l=d.gcX()
a0=a.e
a0.a.uniform1f(a0.d,l)
l=d.gcY()
a0=a.f
a0.a.uniform1f(a0.d,l)
l=d.gcZ()
a0=a.r
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.q)(b5),++e){m=b5[e].a
i=f.h(0,m)
if(i==null)i=0
m=b4.a.bV.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.Q
if(b5.length>0){n=b6.db
a1=n.gY(n)
a2=new H.y(t.a)
for(n=b4.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.q)(n),++e){d=n[e]
b=a2.h(0,0)
if(b==null)b=0
a2.j(0,0,b+1)
a=J.c2(b4.a.bY.h(0,0),b)
l=a1.bh(d.a).F()
a0=a.e
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.c
a4=a.f
a4.a.uniform3f(a4.d,l.a,l.b,l.c)}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.q)(b5),++e){m=b5[e].a
i=a2.h(0,m)
if(i==null)i=0
m=b4.a.bX.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.ch
if(b5.length>0){n=b6.db
a1=n.gY(n)
a5=new H.y(t.a)
for(n=b4.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.q)(n),++e){d=n[e]
c=d.gam()
b=a5.h(0,c)
if(b==null)b=0
a5.j(0,c,b+1)
a=J.c2(b4.a.c_.h(0,c),b)
a6=a1.l(0,d.gY(d))
l=d.gY(d)
a0=$.aK
l=l.b3(a0==null?$.aK=new V.O(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=$.aK
l=a6.b3(l==null?$.aK=new V.O(0,0,0):l)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaJ(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gaz()
l=a6.dl(0)
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
g=new Float32Array(H.bV(new V.dU(a0,a3,a4,a7,a8,a9,b0,b1,l).a6(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,g)
d.gaz()
l=d.gaz()
if(!C.b.R(j,l)){l.sav(0,j.length)
j.push(l)}l=d.gaz()
a0=l.gax(l)
if(a0){a0=a.f
a0.toString
a3=l.gax(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gav(l))}d.gaP()
l=d.gdQ()
a0=a.x
a0.toString
a3=l.gh0(l)
a4=l.gh1(l)
a7=l.gh2()
l=l.gh_()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaP()
if(!C.b.R(j,l)){l.sav(0,j.length)
j.push(l)}l=d.gaP()
a0=l.gax(l)
if(a0){a0=a.r
a0.toString
a3=l.gax(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gav(l))}if(d.gd4()){l=d.gcX()
a0=a.y
a0.a.uniform1f(a0.d,l)
l=d.gcY()
a0=a.z
a0.a.uniform1f(a0.d,l)
l=d.gcZ()
a0=a.Q
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.q)(b5),++e){m=b5[e].a
i=a5.h(0,m)
if(i==null)i=0
m=b4.a.bZ.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.cx
if(b5.length>0){n=b6.db
a1=n.gY(n)
b3=new H.y(t.a)
for(n=b4.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.q)(n),++e){d=n[e]
c=d.gam()
b=b3.h(0,c)
if(b==null)b=0
b3.j(0,c,b+1)
a=J.c2(b4.a.c1.h(0,c),b)
l=d.ghw(d)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.ghO(d).F()
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=a1.b3(d.ghw(d))
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaJ(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gaz()
l=d.gcj()
a0=a.f
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gcg(d)
a0=a.r
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gi5()
a0=a.x
a0.a.uniform1f(a0.d,l)
l=d.gi6()
a0=a.y
a0.a.uniform1f(a0.d,l)
d.gaz()
l=d.gaz()
if(!C.b.R(j,l)){l.sav(0,j.length)
j.push(l)}l=d.gaz()
a0=l.gax(l)
if(a0){a0=a.dx
a0.toString
a3=l.gax(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gav(l))}d.gaP()
l=d.gdQ()
a0=a.z
a0.toString
a3=l.gh0(l)
a4=l.gh1(l)
a7=l.gh2()
l=l.gh_()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaP()
if(!C.b.R(j,l)){l.sav(0,j.length)
j.push(l)}l=d.gaP()
a0=l.gax(l)
if(a0){a0=a.dy
a0.toString
a3=l.gax(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gav(l))}if(d.ghP()){l=d.ghN()
a0=a.Q
a0.a.uniform1f(a0.d,l)
l=d.ghM()
a0=a.ch
a0.a.uniform1f(a0.d,l)}if(d.gd4()){l=d.gcX()
a0=a.cx
a0.a.uniform1f(a0.d,l)
l=d.gcY()
a0=a.cy
a0.a.uniform1f(a0.d,l)
l=d.gcZ()
a0=a.db
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.q)(b5),++e){m=b5[e].a
i=b3.h(0,m)
if(i==null)i=0
m=b4.a.c0.h(0,m)
m.a.uniform1i(m.d,i)}}}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.gY(n).dl(0)}b5=b5.id
b5.toString
b5.ad(n.a6(0,!0))}if(q.db){b4.ea(j,b4.ch)
b5=b4.a
n=b4.ch
b5.fp(b5.d7,n)
if(q.r.a){b5=b4.a
n=b4.cx.f
b5=b5.d8
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.x.a
if(!b5)n=!1
else n=!0
if(n){n=b4.a
m=b4.cy.ch
n=n.d9
n.a.uniform1f(n.d,m)}if(b5){b5=b4.a
n=b4.cy.f
b5=b5.da
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}}b5=q.y.a
n=!b5
if(n)m=!1
else m=!0
if(m){if(b5){b5=b4.a
m=b4.db.f
b5=b5.dc
b5.a.uniform1f(b5.d,m)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].b9(b6)
b5=b7.e
b5.b9(b6)
b5.aN(b6)
b5.dK(b6)
if(n)b5=!1
else b5=!0
if(b5)o.disable(3042)
for(h=0;h<j.length;++h)j[h].dK(b6)
b5=b4.a
b5.toString
o.useProgram(null)
b5.x.fZ()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cz().aW}}
O.hQ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.n()
return this.b.push(new A.dn(a,C.c.a_(b+3,4)*4))}}
O.hR.prototype={
$2:function(a,b){return J.df(a.a,b.a)}}
O.hS.prototype={
$2:function(a,b){if(typeof b!=="number")return b.n()
return this.b.push(new A.dx(a,C.c.a_(b+3,4)*4))}}
O.hT.prototype={
$2:function(a,b){return J.df(a.a,b.a)}}
O.hU.prototype={
$2:function(a,b){if(typeof b!=="number")return b.n()
return this.b.push(new A.ed(a,C.c.a_(b+3,4)*4))}}
O.hV.prototype={
$2:function(a,b){return J.df(a.a,b.a)}}
O.hW.prototype={
$2:function(a,b){if(typeof b!=="number")return b.n()
return this.b.push(new A.eo(a,C.c.a_(b+3,4)*4))}}
O.hX.prototype={
$2:function(a,b){return J.df(a.a,b.a)}}
O.hK.prototype={
ar:function(){var s,r=this
r.cp()
s=r.f
$.C().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.A(r.b,s,1)
s.b=!0
r.a.a9(s)}}}
O.dT.prototype={
ar:function(){},
cO:function(a){var s,r,q=this
if(!q.c.p(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.ar()
s=q.a
s.a=null
s.a9(null)}}}
O.hL.prototype={}
O.aH.prototype={
cN:function(a){var s,r,q=this
if(!q.f.p(0,a)){s=q.f
q.f=a
r=new D.A(q.b+".color",s,a)
r.b=!0
q.a.a9(r)}},
ar:function(){this.cp()
this.cN(new V.X(1,1,1))},
saJ:function(a,b){this.cO(new A.a2(!0,!1,!1))
this.cN(b)}}
O.hN.prototype={}
O.hO.prototype={
ar:function(){var s,r=this
r.cq()
s=r.ch
$.C().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.A(r.b+".refraction",s,1)
s.b=!0
r.a.a9(s)}}}
O.hP.prototype={
cP:function(a){var s=this,r=s.ch
$.C().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.A(s.b+".shininess",r,a)
r.b=!0
s.a.a9(r)}},
ar:function(){this.cq()
this.cP(100)}}
O.ew.prototype={}
T.ir.prototype={}
X.kg.prototype={}
X.hx.prototype={
gA:function(){var s=this.x
return s==null?this.x=D.J():s}}
X.e7.prototype={
gA:function(){var s=this.f
return s==null?this.f=D.J():s},
aD:function(a){var s=this.f
if(s!=null)s.E(a)},
e7:function(){return this.aD(null)},
saZ:function(a){var s,r,q=this
if(!J.E(q.b,a)){s=q.b
if(s!=null)s.gA().J(0,q.gcu())
r=q.b
q.b=a
if(a!=null)a.gA().m(0,q.gcu())
s=new D.A("mover",r,q.b)
s.b=!0
q.aD(s)}}}
X.ip.prototype={}
V.k4.prototype={
$1:function(a){var s=C.d.dI(this.a.ghb(),2)
if(s!=="0.00")P.kV(s+" fps")}}
V.i5.prototype={
cV:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.lC().gcc().h(0,H.h(s))
if(r==null)if(d){c.$0()
k.cU(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.ke(k.c).m(0,o)
m=W.n6("radio")
m.checked=q
m.name=s
W.Y(m,"change",new V.i6(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.ke(k.c).m(0,p.createElement("br"))},
aH:function(a,b,c){return this.cV(a,b,c,!1)},
cU:function(a){var s,r,q=P.lC(),p=t.X,o=P.nf(q.gcc(),p,p)
o.j(0,this.a,a)
s=q.dE(0,o)
p=window.history
r=s.gbK()
p.toString
p.replaceState(new P.jj([],[]).bi(""),"",r)}}
V.i6.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.cU(s.d)}}}
V.ii.prototype={
e_:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.Y(o,"scroll",new V.ik(m),!1)},
cW:function(a){var s,r,q,p,o,n,m,l
this.ft()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.he(a)
q.toString
p=new H.N(p)
p=new P.bT(q.dJ(new H.bG(p,p.gk(p))).a())
for(;p.w();){q=p.gI(p)
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
r.appendChild(m)}else{l=P.kK(C.Q,q,C.e,!1)
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
fH:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
ft:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=new L.iu()
s.a=new H.y(t.cn)
s.b=new H.y(t.w)
s.c=P.lc(t.X)
s.d=s.M(0,o)
r=s.M(0,o).t(0,n)
q=K.a0(new H.N("*"))
r.a.push(q)
r.c=!0
r=s.M(0,n).t(0,n)
q=new K.b_()
p=t.L
q.a=H.d([],p)
r.a.push(q)
r=K.a0(new H.N("*"))
q.a.push(r)
r=s.M(0,n).t(0,"BoldEnd")
q=K.a0(new H.N("*"))
r.a.push(q)
r.c=!0
r=s.M(0,o).t(0,m)
q=K.a0(new H.N("_"))
r.a.push(q)
r.c=!0
r=s.M(0,m).t(0,m)
q=new K.b_()
q.a=H.d([],p)
r.a.push(q)
r=K.a0(new H.N("_"))
q.a.push(r)
r=s.M(0,m).t(0,l)
q=K.a0(new H.N("_"))
r.a.push(q)
r.c=!0
r=s.M(0,o).t(0,k)
q=K.a0(new H.N("`"))
r.a.push(q)
r.c=!0
r=s.M(0,k).t(0,k)
q=new K.b_()
q.a=H.d([],p)
r.a.push(q)
r=K.a0(new H.N("`"))
q.a.push(r)
r=s.M(0,k).t(0,"CodeEnd")
q=K.a0(new H.N("`"))
r.a.push(q)
r.c=!0
r=s.M(0,o).t(0,j)
q=K.a0(new H.N("["))
r.a.push(q)
r.c=!0
r=s.M(0,j).t(0,i)
q=K.a0(new H.N("|"))
r.a.push(q)
q=s.M(0,j).t(0,h)
r=K.a0(new H.N("]"))
q.a.push(r)
q.c=!0
q=s.M(0,j).t(0,j)
r=new K.b_()
r.a=H.d([],p)
q.a.push(r)
q=K.a0(new H.N("|]"))
r.a.push(q)
q=s.M(0,i).t(0,h)
r=K.a0(new H.N("]"))
q.a.push(r)
q.c=!0
q=s.M(0,i).t(0,i)
r=new K.b_()
r.a=H.d([],p)
q.a.push(r)
q=K.a0(new H.N("|]"))
r.a.push(q)
s.M(0,o).t(0,g).a.push(new K.h3())
q=s.M(0,g).t(0,g)
r=new K.b_()
r.a=H.d([],p)
q.a.push(r)
q=K.a0(new H.N("*_`["))
r.a.push(q)
q=s.M(0,"BoldEnd")
q.d=q.a.b2(n)
q=s.M(0,l)
q.d=q.a.b2(m)
q=s.M(0,"CodeEnd")
q.d=q.a.b2(k)
q=s.M(0,h)
q.d=q.a.b2("Link")
q=s.M(0,g)
q.d=q.a.b2(g)
this.b=s}}
V.ik.prototype={
$1:function(a){P.ly(C.n,new V.ij(this.a))}}
V.ij.prototype={
$0:function(){var s=C.d.ah(document.documentElement.scrollTop),r=this.a.style,q=H.h(-0.01*s)+"px"
r.top=q}}
K.jV.prototype={
$1:function(a){var s=t.c1.a(a).c,r=this.a.ai(0,s,null),q=this.b.ai(0,s,null),p=this.c
p.e.j(0,0,r)
p.e.j(0,1,q)
p.e.j(0,2,r)
p.e.j(0,3,q)
p.e.j(0,4,r)
p.e.j(0,5,q)
p.e.j(0,6,r)
p.e.j(0,7,q)}}
K.k2.prototype={
$1:function(a){a.af()
this.a.scm(0,a)}}
K.jW.prototype={
$0:function(){this.a.$1(F.mc(30,null,30))}}
K.jX.prototype={
$0:function(){this.a.$1(F.md(!0,100,20,1))}}
K.jY.prototype={
$0:function(){this.a.$1(F.md(!1,30,12,0))}}
K.jZ.prototype={
$0:function(){this.a.$1(F.pA(20,20))}}
K.k_.prototype={
$0:function(){this.a.$1(F.pE(1.5,0.25))}}
K.k0.prototype={
$0:function(){this.a.$1(F.pv(0.1))}}
K.k1.prototype={
$0:function(){this.a.$1(F.pp())}};(function aliases(){var s=J.a.prototype
s.dT=s.i
s=J.aY.prototype
s.dU=s.i
s=K.dE.prototype
s.dS=s.aM
s.co=s.i
s=O.dT.prototype
s.cp=s.ar
s=O.aH.prototype
s.cq=s.ar})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"oz","na",20)
r(P,"pe","nM",7)
r(P,"pf","nN",7)
r(P,"pg","nO",7)
q(P,"mb","p9",8)
r(W,"qL","hm",21)
var k
p(k=E.bi.prototype,"gdv",0,0,null,["$1","$0"],["dw","ho"],0,0)
p(k,"gdt",0,0,null,["$1","$0"],["du","hn"],0,0)
p(k,"gdr",0,0,null,["$1","$0"],["ds","hk"],0,0)
o(k,"ghi","hj",4)
o(k,"ghl","hm",4)
p(k=E.ez.prototype,"gcr",0,0,null,["$1","$0"],["ct","cs"],0,0)
n(k,"ghC","dF",8)
m(k=X.eS.prototype,"geP","eQ",5)
m(k,"geB","eC",5)
m(k,"geJ","eK",2)
m(k,"geT","eU",9)
m(k,"geR","eS",9)
m(k,"geX","eY",2)
m(k,"gf0","f1",2)
m(k,"geN","eO",2)
m(k,"geZ","f_",2)
m(k,"geL","eM",2)
m(k,"gf2","f3",18)
m(k,"gf4","f5",5)
m(k,"gfg","fh",6)
m(k,"gfc","fd",6)
m(k,"gfe","ff",6)
p(D.aV.prototype,"ge0",0,0,null,["$1","$0"],["ao","e1"],0,0)
p(k=D.cj.prototype,"gcI",0,0,null,["$1","$0"],["cJ","eV"],0,0)
m(k,"gf6","f7",19)
o(k,"gev","ew",10)
o(k,"gfa","fb",10)
l(V.a9.prototype,"gk","c5",11)
l(V.z.prototype,"gk","c5",11)
p(k=U.bD.prototype,"gaC",0,0,null,["$1","$0"],["C","a3"],0,0)
o(k,"ge2","e3",12)
o(k,"gf8","f9",12)
p(k=U.cI.prototype,"gaC",0,0,null,["$1","$0"],["C","a3"],0,0)
m(k,"gbv","bw",1)
m(k,"gbx","by",1)
m(k,"gbz","bA",1)
p(k=U.cJ.prototype,"gaC",0,0,null,["$1","$0"],["C","a3"],0,0)
m(k,"gbv","bw",1)
m(k,"gbx","by",1)
m(k,"gbz","bA",1)
m(k,"geo","ep",1)
m(k,"geq","er",1)
m(k,"gfC","fD",1)
m(k,"gfA","fB",1)
m(k,"gfw","fz",1)
m(U.cK.prototype,"ges","eu",1)
p(k=M.dz.prototype,"gak",0,0,null,["$1","$0"],["ap","e4"],0,0)
o(k,"geF","eG",4)
o(k,"geH","eI",4)
p(k=O.dR.prototype,"geD",0,0,null,["$1","$0"],["a9","eE"],0,0)
p(k,"gfn",0,0,null,["$1","$0"],["cL","fo"],0,0)
o(k,"gex","ey",13)
o(k,"gez","eA",13)
p(X.e7.prototype,"gcu",0,0,null,["$1","$0"],["aD","e7"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.L,null)
q(P.L,[H.ko,J.a,J.a6,P.I,P.cQ,P.j,H.bG,P.dG,H.cd,H.eP,H.c6,H.ix,H.i3,H.fC,H.bz,P.at,H.hD,H.dP,H.dJ,H.al,H.fe,P.d1,P.bS,P.bT,P.eY,P.cA,P.et,P.cB,P.js,P.cW,P.je,P.cP,P.i,P.fP,P.co,P.ds,P.jr,P.jq,P.aQ,P.ac,P.P,P.bh,P.e6,P.cy,P.fb,P.hw,P.o,P.F,P.ak,P.B,P.U,P.bs,P.iI,P.fw,W.he,W.kj,W.kz,W.K,W.ce,P.ji,P.fu,P.b3,K.h3,K.dE,K.hJ,K.ic,L.eq,L.eA,L.eB,L.iu,O.a1,O.cp,E.ha,E.bi,E.by,E.bM,E.f8,E.i7,D.Q,E.ez,Z.eW,Z.j6,Z.dq,Z.bE,Z.br,D.hb,D.aE,X.dr,X.dL,X.hB,X.hH,X.aj,X.i1,X.iv,X.eS,D.dm,D.aV,D.S,D.eb,D.en,V.X,V.aC,V.hp,V.dU,V.aZ,V.af,V.O,V.b0,V.eg,V.a9,V.z,U.cI,U.cJ,U.cK,M.dz,A.dj,A.h5,A.a2,A.dn,A.dx,A.ed,A.eo,A.hM,A.cD,A.cE,A.cG,A.cH,A.eF,A.iF,F.dA,F.ht,F.dO,F.hC,F.ea,F.id,F.ie,F.ig,F.ih,F.eT,F.iW,F.iX,F.j_,F.j1,F.j2,F.j3,O.ew,O.dT,O.hN,X.kg,X.ip,X.e7,V.i5,V.ii])
q(J.a,[J.dH,J.ci,J.aY,J.u,J.bk,J.aF,H.cq,H.T,W.e,W.h2,W.bf,W.aD,W.G,W.f2,W.ai,W.hh,W.hi,W.f4,W.ca,W.f6,W.hj,W.k,W.fc,W.ar,W.hy,W.fg,W.cf,W.hG,W.hZ,W.fk,W.fl,W.au,W.fm,W.fo,W.av,W.fs,W.fv,W.aw,W.fx,W.ax,W.fD,W.an,W.fH,W.it,W.ay,W.fJ,W.iw,W.iN,W.fQ,W.fS,W.fU,W.fW,W.fY,P.aG,P.fi,P.aJ,P.fq,P.i4,P.fE,P.aM,P.fL,P.h6,P.eZ,P.fA])
q(J.aY,[J.e8,J.bq,J.as])
r(J.hz,J.u)
q(J.bk,[J.ch,J.dI])
q(P.I,[H.dM,H.e2,H.dK,H.eO,H.ei,H.f9,P.di,P.e3,P.ah,P.eQ,P.eN,P.er,P.dt,P.dv])
r(P.cl,P.cQ)
q(P.cl,[H.bP,W.f0,W.f_,P.dC])
r(H.N,H.bP)
q(P.j,[H.m,H.bm,H.cM,P.cg])
r(H.cb,H.bm)
q(P.dG,[H.dQ,H.eX])
r(H.c7,H.c6)
q(H.bz,[H.iq,H.hA,H.jO,H.jP,H.jQ,P.j8,P.j7,P.j9,P.ja,P.jn,P.jm,P.jC,P.jg,P.jh,P.hE,P.hI,P.iQ,P.iR,P.hk,P.hl,P.iM,P.iJ,P.iK,P.iL,P.jp,P.jo,P.jw,P.jv,P.jx,P.jy,W.i_,W.i0,W.ib,W.io,W.jb,P.jk,P.jl,P.jD,P.hu,P.hv,P.h7,E.i8,E.i9,E.ia,E.is,D.hr,D.hs,F.jt,F.jE,F.jG,F.jH,F.jI,F.k5,F.k6,F.k8,F.jU,F.jF,F.jL,F.jM,F.j5,F.j4,F.iY,F.iZ,O.hQ,O.hR,O.hS,O.hT,O.hU,O.hV,O.hW,O.hX,V.k4,V.i6,V.ik,V.ij,K.jV,K.k2,K.jW,K.jX,K.jY,K.jZ,K.k_,K.k0,K.k1])
q(H.iq,[H.im,H.c4])
r(P.cn,P.at)
r(H.y,P.cn)
r(H.ck,H.m)
r(H.bK,H.T)
q(H.bK,[H.cS,H.cU])
r(H.cT,H.cS)
r(H.bn,H.cT)
r(H.cV,H.cU)
r(H.cr,H.cV)
q(H.cr,[H.dY,H.dZ,H.e_,H.e0,H.e1,H.cs,H.bL])
r(H.d2,H.f9)
r(P.cZ,P.cg)
r(P.jf,P.js)
r(P.cO,P.cW)
r(P.d5,P.co)
r(P.bQ,P.d5)
q(P.ds,[P.h8,P.hn])
r(P.du,P.et)
q(P.du,[P.h9,P.iS,P.iP])
r(P.iO,P.hn)
q(P.P,[P.W,P.l])
q(P.ah,[P.bO,P.dF])
r(P.f3,P.bs)
q(W.e,[W.v,W.dB,W.bH,W.am,W.cX,W.ao,W.a8,W.d_,W.eV,W.bR,P.dl,P.aU])
q(W.v,[W.H,W.aq])
q(W.H,[W.p,P.n])
q(W.p,[W.dg,W.dh,W.bg,W.dD,W.bF,W.ej,W.b2])
r(W.hd,W.aD)
r(W.c8,W.f2)
q(W.ai,[W.hf,W.hg])
r(W.f5,W.f4)
r(W.c9,W.f5)
r(W.f7,W.f6)
r(W.dy,W.f7)
r(W.ad,W.bf)
r(W.fd,W.fc)
r(W.bC,W.fd)
r(W.fh,W.fg)
r(W.bj,W.fh)
r(W.aO,W.k)
q(W.aO,[W.bl,W.ae,W.bp])
r(W.dV,W.fk)
r(W.dW,W.fl)
r(W.fn,W.fm)
r(W.dX,W.fn)
r(W.fp,W.fo)
r(W.ct,W.fp)
r(W.ft,W.fs)
r(W.e9,W.ft)
r(W.eh,W.fv)
r(W.cY,W.cX)
r(W.el,W.cY)
r(W.fy,W.fx)
r(W.em,W.fy)
r(W.es,W.fD)
r(W.fI,W.fH)
r(W.ex,W.fI)
r(W.d0,W.d_)
r(W.ey,W.d0)
r(W.fK,W.fJ)
r(W.eC,W.fK)
r(W.b4,W.ae)
r(W.fR,W.fQ)
r(W.f1,W.fR)
r(W.cN,W.ca)
r(W.fT,W.fS)
r(W.ff,W.fT)
r(W.fV,W.fU)
r(W.cR,W.fV)
r(W.fX,W.fW)
r(W.fz,W.fX)
r(W.fZ,W.fY)
r(W.fG,W.fZ)
r(W.fa,P.cA)
r(P.jj,P.ji)
r(P.a3,P.fu)
r(P.fj,P.fi)
r(P.dN,P.fj)
r(P.fr,P.fq)
r(P.e4,P.fr)
r(P.fF,P.fE)
r(P.eu,P.fF)
r(P.fM,P.fL)
r(P.eD,P.fM)
r(P.dk,P.eZ)
r(P.e5,P.aU)
r(P.fB,P.fA)
r(P.ep,P.fB)
q(K.dE,[K.b_,L.eE])
q(D.Q,[E.cz,D.aW,D.aX,D.A,X.ec])
q(E.ha,[Z.dp,A.cx,T.ir])
q(X.ec,[X.cm,X.bI,X.bJ,X.cC])
q(O.a1,[D.cj,U.bD])
q(D.hb,[U.hc,U.R])
q(U.R,[U.c5,U.cv])
r(A.dS,A.cx)
q(A.eF,[A.eH,A.iC,A.iD,A.iE,A.iA,A.eG,A.iB,A.eI,A.eJ,A.iG,A.eK,A.cF,A.eL,A.eM])
r(F.il,F.ht)
r(F.iz,F.hC)
r(F.j0,F.j1)
r(F.i2,F.j2)
r(O.dR,O.ew)
q(O.dT,[O.hK,O.hL,O.aH])
q(O.aH,[O.hO,O.hP])
r(X.hx,X.ip)
s(H.bP,H.eP)
s(H.cS,P.i)
s(H.cT,H.cd)
s(H.cU,P.i)
s(H.cV,H.cd)
s(P.cQ,P.i)
s(P.d5,P.fP)
s(W.f2,W.he)
s(W.f4,P.i)
s(W.f5,W.K)
s(W.f6,P.i)
s(W.f7,W.K)
s(W.fc,P.i)
s(W.fd,W.K)
s(W.fg,P.i)
s(W.fh,W.K)
s(W.fk,P.at)
s(W.fl,P.at)
s(W.fm,P.i)
s(W.fn,W.K)
s(W.fo,P.i)
s(W.fp,W.K)
s(W.fs,P.i)
s(W.ft,W.K)
s(W.fv,P.at)
s(W.cX,P.i)
s(W.cY,W.K)
s(W.fx,P.i)
s(W.fy,W.K)
s(W.fD,P.at)
s(W.fH,P.i)
s(W.fI,W.K)
s(W.d_,P.i)
s(W.d0,W.K)
s(W.fJ,P.i)
s(W.fK,W.K)
s(W.fQ,P.i)
s(W.fR,W.K)
s(W.fS,P.i)
s(W.fT,W.K)
s(W.fU,P.i)
s(W.fV,W.K)
s(W.fW,P.i)
s(W.fX,W.K)
s(W.fY,P.i)
s(W.fZ,W.K)
s(P.fi,P.i)
s(P.fj,W.K)
s(P.fq,P.i)
s(P.fr,W.K)
s(P.fE,P.i)
s(P.fF,W.K)
s(P.fL,P.i)
s(P.fM,W.K)
s(P.eZ,P.at)
s(P.fA,P.i)
s(P.fB,W.K)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",W:"double",P:"num",B:"String",aQ:"bool",ak:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([Q*])","~(Q*)","~(ae*)","ak(@,@)","~(l*,j<bi*>*)","~(k*)","~(bp*)","~(~())","~()","~(bl*)","~(l*,j<S*>*)","W*()","~(l*,j<R*>*)","~(l*,j<aZ*>*)","@(@)","ak(@)","ak(L?,L?)","b3(@,@)","~(b4*)","aQ*(j<S*>*)","l(@,@)","B(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.o6(v.typeUniverse,JSON.parse('{"as":"aY","e8":"aY","bq":"aY","pG":"k","pQ":"k","pI":"aU","pH":"e","pY":"e","q_":"e","pF":"n","pS":"n","pJ":"p","pV":"p","pT":"v","pP":"v","qp":"a8","pN":"aO","pK":"aq","q0":"aq","pZ":"ae","pU":"bj","pX":"bn","pW":"T","dH":{"aQ":[]},"aY":{"l9":[]},"u":{"o":["1"],"m":["1"],"j":["1"]},"hz":{"u":["1"],"o":["1"],"m":["1"],"j":["1"]},"bk":{"W":[],"P":[]},"ch":{"W":[],"l":[],"P":[]},"dI":{"W":[],"P":[]},"aF":{"B":[]},"dM":{"I":[]},"N":{"i":["l"],"o":["l"],"m":["l"],"j":["l"],"i.E":"l"},"m":{"j":["1"]},"bm":{"j":["2"]},"cb":{"m":["2"],"j":["2"]},"cM":{"j":["1"]},"bP":{"i":["1"],"o":["1"],"m":["1"],"j":["1"]},"c6":{"F":["1","2"]},"c7":{"F":["1","2"]},"e2":{"I":[]},"dK":{"I":[]},"eO":{"I":[]},"ei":{"I":[]},"y":{"F":["1","2"]},"ck":{"m":["1"],"j":["1"]},"dJ":{"lr":[]},"bK":{"w":["1"],"T":[]},"bn":{"i":["W"],"w":["W"],"o":["W"],"T":[],"m":["W"],"j":["W"],"i.E":"W"},"cr":{"i":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"]},"dY":{"i":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"],"i.E":"l"},"dZ":{"i":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"],"i.E":"l"},"e_":{"i":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"],"i.E":"l"},"e0":{"i":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"],"i.E":"l"},"e1":{"i":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"],"i.E":"l"},"cs":{"i":["l"],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"],"i.E":"l"},"bL":{"i":["l"],"b3":[],"w":["l"],"o":["l"],"T":[],"m":["l"],"j":["l"],"i.E":"l"},"f9":{"I":[]},"d2":{"I":[]},"d1":{"cB":[]},"cZ":{"j":["1"]},"cO":{"m":["1"],"j":["1"]},"cg":{"j":["1"]},"cl":{"i":["1"],"o":["1"],"m":["1"],"j":["1"]},"cn":{"F":["1","2"]},"at":{"F":["1","2"]},"co":{"F":["1","2"]},"bQ":{"F":["1","2"]},"cW":{"m":["1"],"j":["1"]},"W":{"P":[]},"di":{"I":[]},"e3":{"I":[]},"ah":{"I":[]},"bO":{"I":[]},"dF":{"I":[]},"eQ":{"I":[]},"eN":{"I":[]},"er":{"I":[]},"dt":{"I":[]},"e6":{"I":[]},"cy":{"I":[]},"dv":{"I":[]},"l":{"P":[]},"o":{"m":["1"],"j":["1"]},"bs":{"eR":[]},"fw":{"eR":[]},"f3":{"eR":[]},"p":{"H":[],"v":[],"e":[]},"dg":{"H":[],"v":[],"e":[]},"dh":{"H":[],"v":[],"e":[]},"bg":{"H":[],"v":[],"e":[]},"aq":{"v":[],"e":[]},"c9":{"i":["a3<P>"],"o":["a3<P>"],"w":["a3<P>"],"m":["a3<P>"],"j":["a3<P>"],"i.E":"a3<P>"},"ca":{"a3":["P"]},"dy":{"i":["B"],"o":["B"],"w":["B"],"m":["B"],"j":["B"],"i.E":"B"},"f0":{"i":["H"],"o":["H"],"m":["H"],"j":["H"],"i.E":"H"},"H":{"v":[],"e":[]},"ad":{"bf":[]},"bC":{"i":["ad"],"o":["ad"],"w":["ad"],"m":["ad"],"j":["ad"],"i.E":"ad"},"dB":{"e":[]},"dD":{"H":[],"v":[],"e":[]},"bj":{"i":["v"],"o":["v"],"w":["v"],"m":["v"],"j":["v"],"i.E":"v"},"bF":{"H":[],"v":[],"e":[]},"bl":{"k":[]},"bH":{"e":[]},"dV":{"F":["B","@"]},"dW":{"F":["B","@"]},"dX":{"i":["au"],"o":["au"],"w":["au"],"m":["au"],"j":["au"],"i.E":"au"},"ae":{"k":[]},"f_":{"i":["v"],"o":["v"],"m":["v"],"j":["v"],"i.E":"v"},"v":{"e":[]},"ct":{"i":["v"],"o":["v"],"w":["v"],"m":["v"],"j":["v"],"i.E":"v"},"e9":{"i":["av"],"o":["av"],"w":["av"],"m":["av"],"j":["av"],"i.E":"av"},"eh":{"F":["B","@"]},"ej":{"H":[],"v":[],"e":[]},"am":{"e":[]},"el":{"i":["am"],"o":["am"],"w":["am"],"e":[],"m":["am"],"j":["am"],"i.E":"am"},"em":{"i":["aw"],"o":["aw"],"w":["aw"],"m":["aw"],"j":["aw"],"i.E":"aw"},"es":{"F":["B","B"]},"b2":{"H":[],"v":[],"e":[]},"ao":{"e":[]},"a8":{"e":[]},"ex":{"i":["a8"],"o":["a8"],"w":["a8"],"m":["a8"],"j":["a8"],"i.E":"a8"},"ey":{"i":["ao"],"o":["ao"],"w":["ao"],"e":[],"m":["ao"],"j":["ao"],"i.E":"ao"},"bp":{"k":[]},"eC":{"i":["ay"],"o":["ay"],"w":["ay"],"m":["ay"],"j":["ay"],"i.E":"ay"},"aO":{"k":[]},"eV":{"e":[]},"b4":{"ae":[],"k":[]},"bR":{"e":[]},"f1":{"i":["G"],"o":["G"],"w":["G"],"m":["G"],"j":["G"],"i.E":"G"},"cN":{"a3":["P"]},"ff":{"i":["ar?"],"o":["ar?"],"w":["ar?"],"m":["ar?"],"j":["ar?"],"i.E":"ar?"},"cR":{"i":["v"],"o":["v"],"w":["v"],"m":["v"],"j":["v"],"i.E":"v"},"fz":{"i":["ax"],"o":["ax"],"w":["ax"],"m":["ax"],"j":["ax"],"i.E":"ax"},"fG":{"i":["an"],"o":["an"],"w":["an"],"m":["an"],"j":["an"],"i.E":"an"},"dC":{"i":["H"],"o":["H"],"m":["H"],"j":["H"],"i.E":"H"},"a3":{"fu":["1"]},"dN":{"i":["aG"],"o":["aG"],"m":["aG"],"j":["aG"],"i.E":"aG"},"e4":{"i":["aJ"],"o":["aJ"],"m":["aJ"],"j":["aJ"],"i.E":"aJ"},"eu":{"i":["B"],"o":["B"],"m":["B"],"j":["B"],"i.E":"B"},"n":{"H":[],"v":[],"e":[]},"eD":{"i":["aM"],"o":["aM"],"m":["aM"],"j":["aM"],"i.E":"aM"},"b3":{"o":["l"],"m":["l"],"j":["l"]},"dk":{"F":["B","@"]},"dl":{"e":[]},"aU":{"e":[]},"e5":{"e":[]},"ep":{"i":["F<@,@>"],"o":["F<@,@>"],"m":["F<@,@>"],"j":["F<@,@>"],"i.E":"F<@,@>"},"a1":{"j":["1*"],"a1.T":"1"},"cz":{"Q":[]},"aW":{"Q":[]},"aX":{"Q":[]},"A":{"Q":[]},"cm":{"Q":[]},"bI":{"Q":[]},"bJ":{"Q":[]},"ec":{"Q":[]},"cC":{"Q":[]},"dm":{"S":[]},"aV":{"S":[]},"cj":{"a1":["S*"],"j":["S*"],"a1.T":"S*"},"eb":{"S":[]},"en":{"S":[]},"c5":{"R":[]},"bD":{"a1":["R*"],"R":[],"j":["R*"],"a1.T":"R*"},"cv":{"R":[]},"cI":{"R":[]},"cJ":{"R":[]},"cK":{"R":[]},"dS":{"cx":[]}}'))
H.o5(v.typeUniverse,JSON.parse('{"a6":1,"m":1,"bG":1,"bm":2,"cb":2,"dQ":2,"cM":1,"eX":1,"cd":1,"eP":1,"bP":1,"c6":2,"ck":1,"dP":1,"bK":1,"bT":1,"cZ":1,"cA":1,"et":2,"cP":1,"cg":1,"cl":1,"cn":2,"at":2,"fP":2,"co":2,"cW":1,"cQ":1,"d5":2,"ds":2,"du":2,"j":1,"dG":1,"fa":1,"K":1,"ce":1,"aW":1,"aX":1,"A":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.kQ
return{d:s("bf"),Y:s("m<@>"),h:s("H"),C:s("I"),D:s("k"),v:s("ad"),G:s("bC"),Z:s("pR"),gb:s("cf"),gk:s("bF"),s:s("u<B>"),gn:s("u<@>"),t:s("u<l>"),x:s("u<dj*>"),bb:s("u<dm*>"),am:s("u<dn*>"),g0:s("u<dp*>"),cP:s("u<aV*>"),M:s("u<dx*>"),b:s("u<dA*>"),l:s("u<bE*>"),B:s("u<dO*>"),L:s("u<hJ*>"),p:s("u<aZ*>"),eb:s("u<eb*>"),cS:s("u<af*>"),d1:s("u<ed*>"),k:s("u<ea*>"),du:s("u<en*>"),cz:s("u<eo*>"),eG:s("u<cA<L*>*>"),i:s("u<B*>"),fG:s("u<ew*>"),bw:s("u<ir*>"),br:s("u<eE*>"),fj:s("u<eF*>"),d6:s("u<cD*>"),dv:s("u<cE*>"),hg:s("u<cF*>"),by:s("u<cG*>"),fF:s("u<cH*>"),j:s("u<eT*>"),m:s("u<W*>"),V:s("u<l*>"),f:s("u<~(Q*)*>"),T:s("ci"),eH:s("l9"),g:s("as"),aU:s("w<@>"),h9:s("y<B*,cx*>"),cn:s("y<B*,eq*>"),dO:s("y<B*,B*>"),w:s("y<B*,eB*>"),en:s("y<l*,o<cD*>*>"),af:s("y<l*,o<cE*>*>"),gr:s("y<l*,o<cG*>*>"),bR:s("y<l*,o<cH*>*>"),J:s("y<l*,eH*>"),E:s("y<l*,aQ*>"),a:s("y<l*,l*>"),aH:s("o<@>"),eO:s("F<@,@>"),bK:s("bH"),o:s("cq"),dD:s("T"),bm:s("bL"),P:s("ak"),K:s("L"),q:s("a3<P>"),fv:s("lr"),N:s("B"),bY:s("b2"),aF:s("cB"),gc:s("b3"),ak:s("bq"),U:s("bQ<B,B>"),R:s("eR"),cJ:s("aQ"),gR:s("W"),z:s("@"),S:s("l"),fr:s("bg*"),b1:s("bi*"),gj:s("S*"),dn:s("cm*"),hc:s("aZ*"),c:s("bI*"),F:s("bJ*"),ah:s("R*"),A:s("0&*"),_:s("L*"),c1:s("cz*"),X:s("B*"),eB:s("eA*"),eP:s("cC*"),n:s("eG*"),r:s("eI*"),y:s("eJ*"),O:s("eK*"),I:s("cF*"),u:s("eL*"),Q:s("eM*"),e:s("l*"),dm:s("~(Q*)*"),bG:s("l7<ak>?"),W:s("L?"),H:s("P")}})();(function constants(){var s=hunkHelpers.makeConstList
C.m=W.bg.prototype
C.M=J.a.prototype
C.b=J.u.prototype
C.c=J.ch.prototype
C.i=J.ci.prototype
C.d=J.bk.prototype
C.a=J.aF.prototype
C.N=J.as.prototype
C.x=J.e8.prototype
C.o=J.bq.prototype
C.y=W.b4.prototype
C.z=W.bR.prototype
C.A=new E.by("Browser.chrome")
C.p=new E.by("Browser.firefox")
C.q=new E.by("Browser.edge")
C.B=new E.by("Browser.other")
C.X=new P.h9()
C.C=new P.h8()
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.D=function() {
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
C.I=function(getTagFallback) {
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
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.H=function(hooks) {
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
C.G=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.J=new P.e6()
C.e=new P.iO()
C.K=new P.iS()
C.f=new P.jf()
C.n=new P.bh(0)
C.L=new P.bh(5e6)
C.j=H.d(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.k=H.d(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.l=H.d(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.P=H.d(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.Q=H.d(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.d(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.u=H.d(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.v=H.d(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.O=H.d(s([]),t.i)
C.R=new H.c7(0,{},C.O,H.kQ("c7<B*,B*>"))
C.S=new E.bM("OperatingSystem.windows")
C.w=new E.bM("OperatingSystem.mac")
C.T=new E.bM("OperatingSystem.linux")
C.U=new E.bM("OperatingSystem.other")
C.V=new P.iP(!1)
C.W=new P.bS(null,2)})();(function staticFields(){$.lO=null
$.aB=0
$.l2=null
$.l1=null
$.mh=null
$.ma=null
$.mn=null
$.jJ=null
$.jS=null
$.kT=null
$.bX=null
$.d9=null
$.da=null
$.kN=!1
$.az=C.f
$.aa=H.d([],H.kQ("u<L>"))
$.ho=null
$.lg=null
$.lj=null
$.aK=null
$.lt=null
$.lG=null
$.lJ=null
$.lI=null
$.iT=null
$.iU=null
$.iV=null
$.lH=null
$.li=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"pO","mu",function(){return H.po("_$dart_dartClosure")})
s($,"q1","mv",function(){return H.aN(H.iy({
toString:function(){return"$receiver$"}}))})
s($,"q2","mw",function(){return H.aN(H.iy({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"q3","mx",function(){return H.aN(H.iy(null))})
s($,"q4","my",function(){return H.aN(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"q7","mB",function(){return H.aN(H.iy(void 0))})
s($,"q8","mC",function(){return H.aN(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"q6","mA",function(){return H.aN(H.lA(null))})
s($,"q5","mz",function(){return H.aN(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"qa","mE",function(){return H.aN(H.lA(void 0))})
s($,"q9","mD",function(){return H.aN(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"qq","kW",function(){return P.nL()})
s($,"qb","mF",function(){return new P.iQ().$0()})
s($,"qc","mG",function(){return new P.iR().$0()})
s($,"qr","mK",function(){return new Int8Array(H.bV(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"qt","mL",function(){return P.nv("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"qJ","mM",function(){return P.os()})
s($,"qj","mJ",function(){return Z.ap(0)})
s($,"qd","mH",function(){return Z.ap(511)})
s($,"ql","bd",function(){return Z.ap(1)})
s($,"qk","bc",function(){return Z.ap(2)})
s($,"qf","bb",function(){return Z.ap(4)})
s($,"qm","bw",function(){return Z.ap(8)})
s($,"qn","bx",function(){return Z.ap(16)})
s($,"qg","dd",function(){return Z.ap(32)})
s($,"qh","de",function(){return Z.ap(64)})
s($,"qi","mI",function(){return Z.ap(96)})
s($,"qo","c1",function(){return Z.ap(128)})
s($,"qe","ba",function(){return Z.ap(256)})
s($,"pM","mt",function(){return new V.hp()})
s($,"pL","C",function(){return $.mt()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cq,DataView:H.T,ArrayBufferView:H.T,Float32Array:H.bn,Float64Array:H.bn,Int16Array:H.dY,Int32Array:H.dZ,Int8Array:H.e_,Uint16Array:H.e0,Uint32Array:H.e1,Uint8ClampedArray:H.cs,CanvasPixelArray:H.cs,Uint8Array:H.bL,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLBodyElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLDivElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLImageElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTableElement:W.p,HTMLTableRowElement:W.p,HTMLTableSectionElement:W.p,HTMLTemplateElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.h2,HTMLAnchorElement:W.dg,HTMLAreaElement:W.dh,Blob:W.bf,HTMLCanvasElement:W.bg,CDATASection:W.aq,CharacterData:W.aq,Comment:W.aq,ProcessingInstruction:W.aq,Text:W.aq,CSSPerspective:W.hd,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.c8,MSStyleCSSProperties:W.c8,CSS2Properties:W.c8,CSSImageValue:W.ai,CSSKeywordValue:W.ai,CSSNumericValue:W.ai,CSSPositionValue:W.ai,CSSResourceValue:W.ai,CSSUnitValue:W.ai,CSSURLImageValue:W.ai,CSSStyleValue:W.ai,CSSMatrixComponent:W.aD,CSSRotation:W.aD,CSSScale:W.aD,CSSSkew:W.aD,CSSTranslation:W.aD,CSSTransformComponent:W.aD,CSSTransformValue:W.hf,CSSUnparsedValue:W.hg,DataTransferItemList:W.hh,DOMException:W.hi,ClientRectList:W.c9,DOMRectList:W.c9,DOMRectReadOnly:W.ca,DOMStringList:W.dy,DOMTokenList:W.hj,Element:W.H,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,SubmitEvent:W.k,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ad,FileList:W.bC,FileWriter:W.dB,HTMLFormElement:W.dD,Gamepad:W.ar,History:W.hy,HTMLCollection:W.bj,HTMLFormControlsCollection:W.bj,HTMLOptionsCollection:W.bj,ImageData:W.cf,HTMLInputElement:W.bF,KeyboardEvent:W.bl,Location:W.hG,MediaList:W.hZ,MessagePort:W.bH,MIDIInputMap:W.dV,MIDIOutputMap:W.dW,MimeType:W.au,MimeTypeArray:W.dX,PointerEvent:W.ae,MouseEvent:W.ae,DragEvent:W.ae,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.ct,RadioNodeList:W.ct,Plugin:W.av,PluginArray:W.e9,RTCStatsReport:W.eh,HTMLSelectElement:W.ej,SourceBuffer:W.am,SourceBufferList:W.el,SpeechGrammar:W.aw,SpeechGrammarList:W.em,SpeechRecognitionResult:W.ax,Storage:W.es,CSSStyleSheet:W.an,StyleSheet:W.an,HTMLTableCellElement:W.b2,HTMLTableDataCellElement:W.b2,HTMLTableHeaderCellElement:W.b2,TextTrack:W.ao,TextTrackCue:W.a8,VTTCue:W.a8,TextTrackCueList:W.ex,TextTrackList:W.ey,TimeRanges:W.it,Touch:W.ay,TouchEvent:W.bp,TouchList:W.eC,TrackDefaultList:W.iw,CompositionEvent:W.aO,FocusEvent:W.aO,TextEvent:W.aO,UIEvent:W.aO,URL:W.iN,VideoTrackList:W.eV,WheelEvent:W.b4,Window:W.bR,DOMWindow:W.bR,CSSRuleList:W.f1,ClientRect:W.cN,DOMRect:W.cN,GamepadList:W.ff,NamedNodeMap:W.cR,MozNamedAttrMap:W.cR,SpeechRecognitionResultList:W.fz,StyleSheetList:W.fG,SVGLength:P.aG,SVGLengthList:P.dN,SVGNumber:P.aJ,SVGNumberList:P.e4,SVGPointList:P.i4,SVGStringList:P.eu,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGTransform:P.aM,SVGTransformList:P.eD,AudioBuffer:P.h6,AudioParamMap:P.dk,AudioTrackList:P.dl,AudioContext:P.aU,webkitAudioContext:P.aU,BaseAudioContext:P.aU,OfflineAudioContext:P.e5,SQLResultSetRowList:P.ep})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.bn.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
W.cX.$nativeSuperclassTag="EventTarget"
W.cY.$nativeSuperclassTag="EventTarget"
W.d_.$nativeSuperclassTag="EventTarget"
W.d0.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.ml,[])
else K.ml([])})})()
//# sourceMappingURL=test.dart.js.map
