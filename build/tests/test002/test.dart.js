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
a[c]=function(){a[c]=function(){H.pZ(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ln"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ln"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.ln(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={kY:function kY(){},
l_:function(a){return new H.dy(a)},
jI:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
o0:function(a,b){if(t.U.b(a))return new H.c3(a,b)
return new H.bc(a,b)},
lO:function(){return new P.e5("No element")},
oj:function(a,b){var s=J.aI(a)
if(typeof s!=="number")return s.v()
H.e0(a,0,s-1,b)},
e0:function(a,b,c,d){if(c-b<=32)H.oi(a,b,c,d)
else H.oh(a,b,c,d)},
oi:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.aG(a);s<=c;++s){q=r.i(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.i(a,p-1),q)
if(typeof o!=="number")return o.Y()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.i(a,n))
p=n}r.l(a,p,q)}},
oh:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.ag(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.ag(a6+a7,2),d=e-h,c=e+h,b=J.aG(a5),a=b.i(a5,g),a0=b.i(a5,d),a1=b.i(a5,e),a2=b.i(a5,c),a3=b.i(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a3
a3=a2
a2=s}b.l(a5,g,a)
b.l(a5,e,a1)
b.l(a5,f,a3)
b.l(a5,d,b.i(a5,a6))
b.l(a5,c,b.i(a5,a7))
r=a6+1
q=a7-1
if(J.u(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.i(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.a0()
if(n<0){if(p!==r){b.l(a5,p,b.i(a5,r))
b.l(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.i(a5,q),a0)
if(typeof n!=="number")return n.Y()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.l(a5,p,b.i(a5,r))
l=r+1
b.l(a5,r,b.i(a5,q))
b.l(a5,q,o)
q=m
r=l
break}else{b.l(a5,p,b.i(a5,q))
b.l(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.i(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.a0()
if(j<0){if(p!==r){b.l(a5,p,b.i(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.Y()
if(i>0)for(;!0;){n=a8.$2(b.i(a5,q),a2)
if(typeof n!=="number")return n.Y()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.i(a5,q),a0)
if(typeof n!=="number")return n.a0()
m=q-1
if(n<0){b.l(a5,p,b.i(a5,r))
l=r+1
b.l(a5,r,b.i(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.i(a5,q))
b.l(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.l(a5,a6,b.i(a5,a4))
b.l(a5,a4,a0)
a4=q+1
b.l(a5,a7,b.i(a5,a4))
b.l(a5,a4,a2)
H.e0(a5,a6,r-2,a8)
H.e0(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.u(a8.$2(b.i(a5,r),a0),0);)++r
for(;J.u(a8.$2(b.i(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.i(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.l(a5,p,b.i(a5,r))
b.l(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.i(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.i(a5,q),a0)
if(typeof n!=="number")return n.a0()
m=q-1
if(n<0){b.l(a5,p,b.i(a5,r))
l=r+1
b.l(a5,r,b.i(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.i(a5,q))
b.l(a5,q,o)}q=m
break}}H.e0(a5,r,q,a8)}else H.e0(a5,r,q,a8)},
dy:function dy(a){this.a=a},
N:function N(a){this.a=a},
j:function j(){},
bA:function bA(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bc:function bc(a,b){this.a=a
this.b=b},
c3:function c3(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=null
this.b=a
this.c=b},
cy:function cy(a,b){this.a=a
this.b=b},
ev:function ev(a,b){this.a=a
this.b=b},
c6:function c6(){},
eo:function eo(){},
bJ:function bJ(){},
nN:function(){throw H.c(P.r("Cannot modify unmodifiable Map"))},
nc:function(a){var s,r=H.nb(a)
if(r!=null)return r
s="minified:"+a
return s},
n2:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a4(a)
if(typeof s!="string")throw H.c(H.au(a))
return s},
cn:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
m3:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.b(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a_(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.H(q,o)|32)>r)return n}return parseInt(a,b)},
dV:function(a){return H.o1(a)},
o1:function(a){var s,r,q
if(a instanceof P.J)return H.ae(H.d_(a),null)
if(J.cZ(a)===C.K||t.u.b(a)){s=C.q(a)
if(H.m2(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.m2(q))return q}}return H.ae(H.d_(a),null)},
m2:function(a){var s=a!=="Object"&&a!==""
return s},
o2:function(){if(!!self.location)return self.location.href
return null},
m1:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oa:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.x)(a),++r){q=a[r]
if(!H.bk(q))throw H.c(H.au(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aA(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.au(q))}return H.m1(p)},
m4:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bk(q))throw H.c(H.au(q))
if(q<0)throw H.c(H.au(q))
if(q>65535)return H.oa(a)}return H.m1(a)},
ob:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.hu()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
az:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aA(s,10))>>>0,56320|s&1023)}}throw H.c(P.a_(a,0,1114111,null,null))},
bH:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o9:function(a){var s=H.bH(a).getFullYear()+0
return s},
o7:function(a){var s=H.bH(a).getMonth()+1
return s},
o3:function(a){var s=H.bH(a).getDate()+0
return s},
o4:function(a){var s=H.bH(a).getHours()+0
return s},
o6:function(a){var s=H.bH(a).getMinutes()+0
return s},
o8:function(a){var s=H.bH(a).getSeconds()+0
return s},
o5:function(a){var s=H.bH(a).getMilliseconds()+0
return s},
e:function(a){throw H.c(H.au(a))},
b:function(a,b){if(a==null)J.aI(a)
throw H.c(H.bm(a,b))},
bm:function(a,b){var s,r,q="index"
if(!H.bk(b))return new P.af(!0,b,q,null)
s=J.aI(a)
if(!(b<0)){if(typeof s!=="number")return H.e(s)
r=b>=s}else r=!0
if(r)return P.I(b,a,q,null,s)
return P.dW(b,q)},
pJ:function(a,b,c){if(a>c)return P.a_(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a_(b,a,c,"end",null)
return new P.af(!0,b,"end",null)},
au:function(a){return new P.af(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.dN()
s=new Error()
s.dartException=a
r=H.q_
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
q_:function(){return J.a4(this.dartException)},
v:function(a){throw H.c(a)},
x:function(a){throw H.c(P.bt(a))},
aD:function(a){var s,r,q,p,o,n
a=H.n8(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.il(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
im:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mj:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lV:function(a,b){return new H.dM(a,b==null?null:b.method)},
kZ:function(a,b){var s=b==null,r=s?null:b.method
return new H.dw(a,r,s?null:b.receiver)},
b0:function(a){if(a==null)return new H.hR(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bo(a,a.dartException)
return H.pD(a)},
bo:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pD:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aA(r,16)&8191)===10)switch(q){case 438:return H.bo(a,H.kZ(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bo(a,H.lV(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.nf()
o=$.ng()
n=$.nh()
m=$.ni()
l=$.nl()
k=$.nm()
j=$.nk()
$.nj()
i=$.no()
h=$.nn()
g=p.ad(s)
if(g!=null)return H.bo(a,H.kZ(s,g))
else{g=o.ad(s)
if(g!=null){g.method="call"
return H.bo(a,H.kZ(s,g))}else{g=n.ad(s)
if(g==null){g=m.ad(s)
if(g==null){g=l.ad(s)
if(g==null){g=k.ad(s)
if(g==null){g=j.ad(s)
if(g==null){g=m.ad(s)
if(g==null){g=i.ad(s)
if(g==null){g=h.ad(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bo(a,H.lV(s,g))}}return H.bo(a,new H.en(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cq()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bo(a,new P.af(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cq()
return a},
lq:function(a){var s
if(a==null)return new H.f9(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.f9(a)},
pL:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
pR:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.y("Unsupported number of arguments for wrapped closure"))},
bR:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pR)
a.$identity=s
return s},
nM:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.i9().constructor.prototype):Object.create(new H.bX(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.av
if(typeof r!=="number")return r.m()
$.av=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lG(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nI(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lG(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nI:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n_,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.nG:H.nF
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nJ:function(a,b,c,d){var s=H.lE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lG:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nL(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nJ(r,!p,s,b)
if(r===0){p=$.av
if(typeof p!=="number")return p.m()
$.av=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.kR())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.av
if(typeof p!=="number")return p.m()
$.av=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.kR())+"."+H.f(s)+"("+m+");}")()},
nK:function(a,b,c,d){var s=H.lE,r=H.nH
switch(b?-1:a){case 0:throw H.c(new H.dZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nL:function(a,b){var s,r,q,p,o,n,m=H.kR(),l=$.lC
if(l==null)l=$.lC=H.lB("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nK(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.av
if(typeof o!=="number")return o.m()
$.av=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.av
if(typeof o!=="number")return o.m()
$.av=o+1
return new Function(p+o+"}")()},
ln:function(a,b,c,d,e,f,g){return H.nM(a,b,c,d,!!e,!!f,g)},
nF:function(a,b){return H.fm(v.typeUniverse,H.d_(a.a),b)},
nG:function(a,b){return H.fm(v.typeUniverse,H.d_(a.c),b)},
lE:function(a){return a.a},
nH:function(a){return a.c},
kR:function(){var s=$.lD
return s==null?$.lD=H.lB("self"):s},
lB:function(a){var s,r,q,p=new H.bX("self","target","receiver","name"),o=J.kX(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bW("Field name "+a+" not found."))},
pZ:function(a){throw H.c(new P.de(a))},
pN:function(a){return v.getIsolateTag(a)},
r7:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pU:function(a){var s,r,q,p,o,n=$.mZ.$1(a),m=$.jD[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jN[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mT.$2(a,n)
if(q!=null){m=$.jD[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jN[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kI(s)
$.jD[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jN[n]=s
return s}if(p==="-"){o=H.kI(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.n6(a,s)
if(p==="*")throw H.c(P.iB(n))
if(v.leafTags[n]===true){o=H.kI(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.n6(a,s)},
n6:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ls(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kI:function(a){return J.ls(a,!1,null,!!a.$ip)},
pV:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kI(s)
else return J.ls(s,c,null,null)},
pP:function(){if(!0===$.lr)return
$.lr=!0
H.pQ()},
pQ:function(){var s,r,q,p,o,n,m,l
$.jD=Object.create(null)
$.jN=Object.create(null)
H.pO()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.n7.$1(o)
if(n!=null){m=H.pV(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
pO:function(){var s,r,q,p,o,n,m=C.B()
m=H.bQ(C.C,H.bQ(C.D,H.bQ(C.r,H.bQ(C.r,H.bQ(C.E,H.bQ(C.F,H.bQ(C.G(C.q),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mZ=new H.jJ(p)
$.mT=new H.jK(o)
$.n7=new H.jL(n)},
bQ:function(a,b){return a(b)||b},
nW:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.Y("Illegal RegExp pattern ("+String(n)+")",a,null))},
n9:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
pK:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n8:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
na:function(a,b,c){var s=H.pY(a,b,c)
return s},
pY:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n8(b),'g'),H.pK(c))},
bZ:function bZ(){},
c_:function c_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
il:function il(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dM:function dM(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a){this.a=a},
hR:function hR(a){this.a=a},
f9:function f9(a){this.a=a
this.b=null},
br:function br(){},
ic:function ic(){},
i9:function i9(){},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dZ:function dZ(a){this.a=a},
P:function P(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hC:function hC(a){this.a=a},
hF:function hF(a,b){this.a=a
this.b=b
this.c=null},
cd:function cd(a){this.a=a},
dB:function dB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jJ:function jJ(a){this.a=a},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
du:function du(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
js:function(a){return a},
aF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bm(b,a))},
pa:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.pJ(a,b,c))
return b},
cj:function cj(){},
R:function R(){},
bE:function bE(){},
bd:function bd(){},
ck:function ck(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
cl:function cl(){},
bF:function bF(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
of:function(a,b){var s=b.c
return s==null?b.c=H.lc(a,b.z,!0):s},
md:function(a,b){var s=b.c
return s==null?b.c=H.cQ(a,"lM",[b.z]):s},
me:function(a){var s=a.y
if(s===6||s===7||s===8)return H.me(a.z)
return s===11||s===12},
oe:function(a){return a.cy},
mX:function(a){return H.ld(v.typeUniverse,a,!1)},
aZ:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aZ(a,s,a0,a1)
if(r===s)return b
return H.mE(a,r,!0)
case 7:s=b.z
r=H.aZ(a,s,a0,a1)
if(r===s)return b
return H.lc(a,r,!0)
case 8:s=b.z
r=H.aZ(a,s,a0,a1)
if(r===s)return b
return H.mD(a,r,!0)
case 9:q=b.Q
p=H.cY(a,q,a0,a1)
if(p===q)return b
return H.cQ(a,b.z,p)
case 10:o=b.z
n=H.aZ(a,o,a0,a1)
m=b.Q
l=H.cY(a,m,a0,a1)
if(n===o&&l===m)return b
return H.la(a,n,l)
case 11:k=b.z
j=H.aZ(a,k,a0,a1)
i=b.Q
h=H.pA(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mC(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cY(a,g,a0,a1)
o=b.z
n=H.aZ(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lb(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fD("Attempted to substitute unexpected RTI kind "+c))}},
cY:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aZ(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pB:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aZ(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pA:function(a,b,c,d){var s,r=b.a,q=H.cY(a,r,c,d),p=b.b,o=H.cY(a,p,c,d),n=b.c,m=H.pB(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eM()
s.a=q
s.b=o
s.c=m
return s},
r9:function(a,b){a[v.arrayRti]=b
return a},
pH:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.n_(s)
return a.$S()}return null},
n1:function(a,b){var s
if(H.me(b))if(a instanceof H.br){s=H.pH(a)
if(s!=null)return s}return H.d_(a)},
d_:function(a){var s
if(a instanceof P.J){s=a.$ti
return s!=null?s:H.lj(a)}if(Array.isArray(a))return H.p6(a)
return H.lj(J.cZ(a))},
p6:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
ph:function(a){var s=a.$ti
return s!=null?s:H.lj(a)},
lj:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pi(a,s)},
pi:function(a,b){var s=a instanceof H.br?a.__proto__.__proto__.constructor:b,r=H.oR(v.typeUniverse,s.name)
b.$ccache=r
return r},
n_:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.ld(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pg:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cV(q,a,H.pm)
if(!H.aH(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.cV(q,a,H.pp)
p=q.y
s=p===6?q.z:q
if(s===t.x)r=H.bk
else if(s===t.v||s===t.H)r=H.pl
else if(s===t.N)r=H.pn
else r=s===t.y?H.lk:null
if(r!=null)return H.cV(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.pS)){q.r="$i"+p
return H.cV(q,a,H.po)}}else if(p===7)return H.cV(q,a,H.pe)
return H.cV(q,a,H.pc)},
cV:function(a,b,c){a.b=c
return a.b(b)},
pf:function(a){var s,r,q=this
if(!H.aH(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.p9
else if(q===t.K)r=H.p7
else r=H.pd
q.a=r
return q.a(a)},
pt:function(a){var s,r=a.y
if(!H.aH(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
pc:function(a){var s=this
if(a==null)return H.pt(s)
return H.T(v.typeUniverse,H.n1(a,s),null,s,null)},
pe:function(a){if(a==null)return!0
return this.z.b(a)},
po:function(a){var s=this,r=s.r
if(a instanceof P.J)return!!a[r]
return!!J.cZ(a)[r]},
r5:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mN(a,s)},
pd:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mN(a,s)},
mN:function(a,b){throw H.c(H.oH(H.mw(a,H.n1(a,b),H.ae(b,null))))},
mw:function(a,b,c){var s=P.h2(a),r=H.ae(b==null?H.d_(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
oH:function(a){return new H.cP("TypeError: "+a)},
a2:function(a,b){return new H.cP("TypeError: "+H.mw(a,null,b))},
pm:function(a){return a!=null},
p7:function(a){return a},
pp:function(a){return!0},
p9:function(a){return a},
lk:function(a){return!0===a||!1===a},
qS:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a2(a,"bool"))},
qU:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a2(a,"bool"))},
qT:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a2(a,"bool?"))},
qV:function(a){if(typeof a=="number")return a
throw H.c(H.a2(a,"double"))},
qX:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a2(a,"double"))},
qW:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a2(a,"double?"))},
bk:function(a){return typeof a=="number"&&Math.floor(a)===a},
qY:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a2(a,"int"))},
r_:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a2(a,"int"))},
qZ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a2(a,"int?"))},
pl:function(a){return typeof a=="number"},
r0:function(a){if(typeof a=="number")return a
throw H.c(H.a2(a,"num"))},
r2:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a2(a,"num"))},
r1:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a2(a,"num?"))},
pn:function(a){return typeof a=="string"},
r3:function(a){if(typeof a=="string")return a
throw H.c(H.a2(a,"String"))},
p8:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a2(a,"String"))},
r4:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a2(a,"String?"))},
pw:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.m(r,H.ae(a[q],b))
return s},
mO:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.O,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.b(a6,i)
l=C.a.m(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.m(" extends ",H.ae(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.ae(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.m(a3,H.ae(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.m(a3,H.ae(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.lw(H.ae(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.f(a1)},
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
return J.lw(q===11||q===12?C.a.m("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.ae(a.z,b))+">"
if(l===9){p=H.pC(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pw(o,b)+">"):p}if(l===11)return H.mO(a,b,null)
if(l===12)return H.mO(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.b(b,n)
return b[n]}return"?"},
pC:function(a){var s,r=H.nb(a)
if(r!=null)return r
s="minified:"+a
return s},
mF:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
oR:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.ld(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cR(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cQ(a,b,q)
n[b]=o
return o}else return m},
oP:function(a,b){return H.mM(a.tR,b)},
oO:function(a,b){return H.mM(a.eT,b)},
ld:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mB(H.mz(a,null,b,c))
r.set(b,s)
return s},
fm:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mB(H.mz(a,b,c,!0))
q.set(c,r)
return r},
oQ:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.la(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aY:function(a,b){b.a=H.pf
b.b=H.pg
return b},
cR:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ak(null,null)
s.y=b
s.cy=c
r=H.aY(a,s)
a.eC.set(c,r)
return r},
mE:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oM(a,b,r,c)
a.eC.set(r,s)
return s},
oM:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aH(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ak(null,null)
q.y=6
q.z=b
q.cy=c
return H.aY(a,q)},
lc:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oL(a,b,r,c)
a.eC.set(r,s)
return s},
oL:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aH(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jO(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jO(q.z))return q
else return H.of(a,b)}}p=new H.ak(null,null)
p.y=7
p.z=b
p.cy=c
return H.aY(a,p)},
mD:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oJ(a,b,r,c)
a.eC.set(r,s)
return s},
oJ:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aH(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cQ(a,"lM",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ak(null,null)
q.y=8
q.z=b
q.cy=c
return H.aY(a,q)},
oN:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ak(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aY(a,s)
a.eC.set(q,r)
return r},
fl:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oI:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cQ:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fl(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ak(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aY(a,r)
a.eC.set(p,q)
return q},
la:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fl(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ak(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aY(a,o)
a.eC.set(q,n)
return n},
mC:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fl(m)
if(j>0){s=l>0?",":""
r=H.fl(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oI(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ak(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aY(a,o)
a.eC.set(q,r)
return r},
lb:function(a,b,c,d){var s,r=b.cy+("<"+H.fl(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oK(a,b,c,r,d)
a.eC.set(r,s)
return s},
oK:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aZ(a,b,r,0)
m=H.cY(a,c,r,0)
return H.lb(a,n,m,c!==m)}}l=new H.ak(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aY(a,l)},
mz:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mB:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.oB(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mA(a,r,g,f,!1)
else if(q===46)r=H.mA(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.aX(a.u,a.e,f.pop()))
break
case 94:f.push(H.oN(a.u,f.pop()))
break
case 35:f.push(H.cR(a.u,5,"#"))
break
case 64:f.push(H.cR(a.u,2,"@"))
break
case 126:f.push(H.cR(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.l9(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cQ(p,n,o))
else{m=H.aX(p,a.e,n)
switch(m.y){case 11:f.push(H.lb(p,m,o,a.n))
break
default:f.push(H.la(p,m,o))
break}}break
case 38:H.oC(a,f)
break
case 42:l=a.u
f.push(H.mE(l,H.aX(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.lc(l,H.aX(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mD(l,H.aX(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.eM()
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
H.l9(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mC(p,H.aX(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.l9(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.oE(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.aX(a.u,a.e,h)},
oB:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mA:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mF(s,o.z)[p]
if(n==null)H.v('No "'+p+'" in "'+H.oe(o)+'"')
d.push(H.fm(s,o,n))}else d.push(p)
return m},
oC:function(a,b){var s=b.pop()
if(0===s){b.push(H.cR(a.u,1,"0&"))
return}if(1===s){b.push(H.cR(a.u,4,"1&"))
return}throw H.c(P.fD("Unexpected extended operation "+H.f(s)))},
aX:function(a,b,c){if(typeof c=="string")return H.cQ(a,c,a.sEA)
else if(typeof c=="number")return H.oD(a,b,c)
else return c},
l9:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aX(a,b,c[s])},
oE:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aX(a,b,c[s])},
oD:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fD("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fD("Bad index "+c+" for "+b.h(0)))},
T:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aH(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aH(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.T(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.T(a,b.z,c,d,e)
if(p===6){s=d.z
return H.T(a,b,c,s,e)}if(r===8){if(!H.T(a,b.z,c,d,e))return!1
return H.T(a,H.md(a,b),c,d,e)}if(r===7){s=H.T(a,b.z,c,d,e)
return s}if(p===8){if(H.T(a,b,c,d.z,e))return!0
return H.T(a,b,c,H.md(a,d),e)}if(p===7){s=H.T(a,b,c,d.z,e)
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
if(!H.T(a,k,c,j,e)||!H.T(a,j,e,k,c))return!1}return H.mP(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.mP(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pk(a,b,c,d,e)}return!1},
mP:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.T(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.T(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.T(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.T(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.T(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pk:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.T(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mF(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.T(a,H.fm(a,b,l[p]),c,r[p],e))return!1
return!0},
jO:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aH(a))if(r!==7)if(!(r===6&&H.jO(a.z)))s=r===8&&H.jO(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pS:function(a){var s
if(!H.aH(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aH:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.O},
mM:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ak:function ak(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eM:function eM(){this.c=this.b=this.a=null},
eH:function eH(){},
cP:function cP(a){this.a=a},
nb:function(a){return v.mangledGlobalNames[a]},
pW:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ls:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fy:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lr==null){H.pP()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.iB("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.lQ()]
if(p!=null)return p
p=H.pU(a)
if(p!=null)return p
if(typeof a=="function")return C.M
s=Object.getPrototypeOf(a)
if(s==null)return C.v
if(s===Object.prototype)return C.v
if(typeof q=="function"){Object.defineProperty(q,J.lQ(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
lQ:function(){var s=$.mx
return s==null?$.mx=v.getIsolateTag("_$dart_js"):s},
nT:function(a){if(!H.bk(a))throw H.c(P.lz(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a_(a,0,4294967295,"length",null))
return J.nU(new Array(a))},
kW:function(a){if(!H.bk(a)||a<0)throw H.c(P.bW("Length must be a non-negative integer: "+H.f(a)))
return new Array(a)},
nU:function(a){return J.kX(a)},
kX:function(a){a.fixed$length=Array
return a},
nV:function(a,b){return J.nB(a,b)},
cZ:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cb.prototype
return J.dt.prototype}if(typeof a=="string")return J.ax.prototype
if(a==null)return J.cc.prototype
if(typeof a=="boolean")return J.ds.prototype
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ar.prototype
return a}if(a instanceof P.J)return a
return J.fy(a)},
pM:function(a){if(typeof a=="number")return J.b9.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ar.prototype
return a}if(a instanceof P.J)return a
return J.fy(a)},
aG:function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ar.prototype
return a}if(a instanceof P.J)return a
return J.fy(a)},
jF:function(a){if(a==null)return a
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ar.prototype
return a}if(a instanceof P.J)return a
return J.fy(a)},
mY:function(a){if(typeof a=="number")return J.b9.prototype
if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.bi.prototype
return a},
lp:function(a){if(typeof a=="string")return J.ax.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.bi.prototype
return a},
bn:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ar.prototype
return a}if(a instanceof P.J)return a
return J.fy(a)},
lw:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pM(a).m(a,b)},
u:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cZ(a).w(a,b)},
lx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mY(a).n(a,b)},
ly:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n2(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aG(a).i(a,b)},
kN:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.n2(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jF(a).l(a,b,c)},
nx:function(a,b){return J.lp(a).H(a,b)},
ny:function(a,b,c){return J.bn(a).f_(a,b,c)},
nz:function(a,b,c,d){return J.bn(a).fw(a,b,c,d)},
nA:function(a,b){return J.lp(a).W(a,b)},
nB:function(a,b){return J.mY(a).aC(a,b)},
kO:function(a,b){return J.aG(a).a3(a,b)},
kP:function(a,b){return J.jF(a).J(a,b)},
nC:function(a,b,c,d){return J.bn(a).fR(a,b,c,d)},
kQ:function(a,b){return J.jF(a).t(a,b)},
d1:function(a){return J.bn(a).gcM(a)},
a8:function(a){return J.cZ(a).gS(a)},
b4:function(a){return J.jF(a).gV(a)},
aI:function(a){return J.aG(a).gk(a)},
nD:function(a,b){return J.bn(a).hl(a,b)},
a4:function(a){return J.cZ(a).h(a)},
a:function a(){},
ds:function ds(){},
cc:function cc(){},
aL:function aL(){},
dS:function dS(){},
bi:function bi(){},
ar:function ar(){},
ah:function ah(){},
dv:function dv(){},
a9:function a9(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b9:function b9(){},
cb:function cb(){},
dt:function dt(){},
ax:function ax(){}},P={
or:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.pE()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bR(new P.j1(q),1)).observe(s,{childList:true})
return new P.j0(q,s,r)}else if(self.setImmediate!=null)return P.pF()
return P.pG()},
os:function(a){self.scheduleImmediate(H.bR(new P.j2(a),0))},
ot:function(a){self.setImmediate(H.bR(new P.j3(a),0))},
ou:function(a){P.l3(C.m,a)},
l3:function(a,b){var s=C.c.ag(a.a,1000)
return P.oF(s<0?0:s,b)},
mi:function(a,b){var s=C.c.ag(a.a,1000)
return P.oG(s<0?0:s,b)},
oF:function(a,b){var s=new P.cO()
s.dB(a,b)
return s},
oG:function(a,b){var s=new P.cO()
s.dC(a,b)
return s},
qQ:function(a){return new P.bM(a,1)},
ox:function(){return C.W},
oy:function(a){return new P.bM(a,3)},
pr:function(a){return new P.cL(a)},
ps:function(){var s,r
for(s=$.bP;s!=null;s=$.bP){$.cX=null
r=s.b
$.bP=r
if(r==null)$.cW=null
s.a.$0()}},
pz:function(){$.ll=!0
try{P.ps()}finally{$.cX=null
$.ll=!1
if($.bP!=null)$.lv().$1(P.mU())}},
px:function(a){var s=new P.ew(a),r=$.cW
if(r==null){$.bP=$.cW=s
if(!$.ll)$.lv().$1(P.mU())}else $.cW=r.b=s},
py:function(a){var s,r,q,p=$.bP
if(p==null){P.px(a)
$.cX=$.cW
return}s=new P.ew(a)
r=$.cX
if(r==null){s.b=p
$.bP=$.cX=s}else{q=r.b
s.b=q
$.cX=r.b=s
if(q==null)$.cW=s}},
mh:function(a,b){var s=$.at
if(s===C.f)return P.l3(a,b)
return P.l3(a,s.fC(b))},
om:function(a,b){var s=$.at
if(s===C.f)return P.mi(a,b)
return P.mi(a,s.cJ(b,t.l))},
mQ:function(a,b,c,d,e){P.py(new P.jt(d,e))},
pu:function(a,b,c,d){var s,r=$.at
if(r===c)return d.$0()
$.at=c
s=r
try{r=d.$0()
return r}finally{$.at=s}},
pv:function(a,b,c,d,e){var s,r=$.at
if(r===c)return d.$1(e)
$.at=c
s=r
try{r=d.$1(e)
return r}finally{$.at=s}},
j1:function j1(a){this.a=a},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
cO:function cO(){this.c=0},
jg:function jg(a,b){this.a=a
this.b=b},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a,b){this.a=a
this.b=b},
bN:function bN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cL:function cL(a){this.a=a},
ew:function ew(a){this.a=a
this.b=null},
e7:function e7(){},
e8:function e8(){},
cr:function cr(){},
jl:function jl(){},
jt:function jt(a,b){this.a=a
this.b=b},
j9:function j9(){},
ja:function ja(a,b){this.a=a
this.b=b},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
nY:function(a,b){return new H.P(a.af("@<0>").bl(b).af("P<1,2>"))},
nZ:function(a,b,c){return H.pL(a,new H.P(b.af("@<0>").bl(c).af("P<1,2>")))},
lR:function(a,b){return new H.P(a.af("@<0>").bl(b).af("P<1,2>"))},
lT:function(a){return new P.cA(a.af("cA<0>"))},
l8:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oA:function(a,b){var s=new P.cB(a,b)
s.c=a.e
return s},
nS:function(a,b,c){var s,r
if(P.lm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a7.push(a)
try{P.pq(a,s)}finally{if(0>=$.a7.length)return H.b($.a7,-1)
$.a7.pop()}r=P.mf(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kV:function(a,b,c){var s,r
if(P.lm(a))return b+"..."+c
s=new P.X(b)
$.a7.push(a)
try{r=s
r.a=P.mf(r.a,a,", ")}finally{if(0>=$.a7.length)return H.b($.a7,-1)
$.a7.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lm:function(a){var s,r
for(s=$.a7.length,r=0;r<s;++r)if(a===$.a7[r])return!0
return!1},
pq:function(a,b){var s,r,q,p,o,n,m,l=a.gV(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.A())return
s=H.f(l.gI(l))
b.push(s)
k+=s.length+2;++j}if(!l.A()){if(j<=5)return
if(0>=b.length)return H.b(b,-1)
r=b.pop()
if(0>=b.length)return H.b(b,-1)
q=b.pop()}else{p=l.gI(l);++j
if(!l.A()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gI(l);++j
for(;l.A();p=o,o=n){n=l.gI(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.f(p)
r=H.f(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
lS:function(a,b,c){var s=P.nY(b,c)
a.t(0,new P.hG(s,b,c))
return s},
l1:function(a){var s,r={}
if(P.lm(a))return"{...}"
s=new P.X("")
try{$.a7.push(a)
s.a+="{"
r.a=!0
J.kQ(a,new P.hK(r,s))
s.a+="}"}finally{if(0>=$.a7.length)return H.b($.a7,-1)
$.a7.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cA:function cA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j8:function j8(a){this.a=a
this.c=this.b=null},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ca:function ca(){},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(){},
C:function C(){},
cg:function cg(){},
hK:function hK(a,b){this.a=a
this.b=b},
as:function as(){},
fn:function fn(){},
ch:function ch(){},
bK:function bK(a,b){this.a=a
this.$ti=b},
cI:function cI(){},
cC:function cC(){},
cS:function cS(){},
op:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oq(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oq:function(a,b,c,d){var s=a?$.nq():$.np()
if(s==null)return null
if(0===c&&d===b.length)return P.mn(s,b)
return P.mn(s,b.subarray(c,P.aQ(c,d,b.length)))},
mn:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.b0(r)}return null},
lA:function(a,b,c,d,e,f){if(C.c.b1(f,4)!==0)throw H.c(P.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.Y("Invalid base64 padding, more than two '=' characters",a,b))},
p5:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
p4:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.v()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.aG(a),o=0;o<s;++o){n=p.i(a,b+o)
if(typeof n!=="number")return n.c8()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.b(r,o)
r[o]=n}return r},
iK:function iK(){},
iL:function iL(){},
fI:function fI(){},
fJ:function fJ(){},
da:function da(){},
dd:function dd(){},
h0:function h0(){},
iI:function iI(){},
iM:function iM(){},
jk:function jk(a){this.b=0
this.c=a},
iJ:function iJ(a){this.a=a},
jj:function jj(a){this.a=a
this.b=16
this.c=0},
jM:function(a,b){var s=H.m3(a,b)
if(s!=null)return s
throw H.c(P.Y(a,null,null))},
nQ:function(a){if(a instanceof H.br)return a.h(0)
return"Instance of '"+H.f(H.dV(a))+"'"},
hH:function(a,b,c){var s,r=c?J.kW(a):J.nT(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
l0:function(a,b){var s,r=[]
for(s=J.b4(a);s.A();)r.push(s.gI(s))
if(b)return r
return J.kX(r)},
o_:function(a,b){var s,r,q=J.kW(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.b(q,s)
q[s]=r}return q},
ea:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.aQ(b,c,r)
if(b<=0){if(typeof c!=="number")return c.a0()
q=c<r}else q=!0
return H.m4(q?s.slice(b,c):s)}if(t.Y.b(a))return H.ob(a,b,P.aQ(b,c,a.length))
return P.ok(a,b,c)},
ok:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a_(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a_(c,b,a.length,o,o))
r=J.b4(a)
for(q=0;q<b;++q)if(!r.A())throw H.c(P.a_(b,0,q,o,o))
p=[]
if(s)for(;r.A();)p.push(r.gI(r))
else for(q=b;q<c;++q){if(!r.A())throw H.c(P.a_(c,b,q,o,o))
p.push(r.gI(r))}return H.m4(p)},
oc:function(a){return new H.du(a,H.nW(a,!1,!0,!1,!1,!1))},
mf:function(a,b,c){var s=J.b4(b)
if(!s.A())return a
if(c.length===0){do a+=H.f(s.gI(s))
while(s.A())}else{a+=H.f(s.gI(s))
for(;s.A();)a=a+c+H.f(s.gI(s))}return a},
er:function(){var s=H.o2()
if(s!=null)return P.oo(s)
throw H.c(P.r("'Uri.base' is not supported"))},
li:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nv().b
if(typeof b!="string")H.v(H.au(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.gfQ().bQ(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.b(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.az(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nO:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nP:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
df:function(a){if(a>=10)return""+a
return"0"+a},
lK:function(a){return new P.b7(1000*a)},
h2:function(a){if(typeof a=="number"||H.lk(a)||null==a)return J.a4(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nQ(a)},
fD:function(a){return new P.d4(a)},
bW:function(a){return new P.af(!1,null,null,a)},
lz:function(a,b,c){return new P.af(!0,a,b,c)},
nE:function(a,b){if(a==null)throw H.c(new P.af(!1,null,b,"Must not be null"))
return a},
m6:function(a){var s=null
return new P.bI(s,s,!1,s,s,a)},
dW:function(a,b){return new P.bI(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.bI(b,c,!0,a,d,"Invalid value")},
aQ:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.e(c)
s=a>c}else s=!0
if(s)throw H.c(P.a_(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.e(c)
s=b>c}else s=!0
if(s)throw H.c(P.a_(b,a,c,"end",null))
return b}return c},
m7:function(a,b){if(a<0)throw H.c(P.a_(a,0,null,b,null))
return a},
I:function(a,b,c,d,e){var s=e==null?J.aI(b):e
return new P.dn(s,!0,a,c,"Index out of range")},
r:function(a){return new P.ep(a)},
iB:function(a){return new P.em(a)},
bt:function(a){return new P.dc(a)},
y:function(a){return new P.eJ(a)},
Y:function(a,b,c){return new P.h8(a,b,c)},
lt:function(a){H.pW(a)},
oo:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.H(a5,4)^58)*3|C.a.H(a5,0)^100|C.a.H(a5,1)^97|C.a.H(a5,2)^116|C.a.H(a5,3)^97)>>>0
if(s===0)return P.mk(a4<a4?C.a.u(a5,0,a4):a5,5,a3).gdi()
else if(s===32)return P.mk(C.a.u(a5,5,a4),0,a3).gdi()}r=P.hH(8,0,!1)
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
if(P.mR(a5,0,a4,0,r)>=14){if(7>=r.length)return H.b(r,7)
r[7]=a4}if(1>=r.length)return H.b(r,1)
p=r[1]
if(p>=0)if(P.mR(a5,0,p,20,r)===20){if(7>=r.length)return H.b(r,7)
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
j=!1}else{if(!(l<a4&&l===m+2&&C.a.a6(a5,"..",m)))h=l>m+2&&C.a.a6(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.a6(a5,"file",0)){if(o<=0){if(!C.a.a6(a5,"/",m)){g="file:///"
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
a5=C.a.aJ(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.a6(a5,"http",0)){if(q&&n+3===m&&C.a.a6(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aJ(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.a6(a5,"https",0)){if(q&&n+4===m&&C.a.a6(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aJ(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.u(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.f3(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.oZ(a5,0,p)
else{if(p===0)P.bO(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.p_(a5,d,o-1):""
b=P.oW(a5,o,n,!1)
q=n+1
if(q<m){a=H.m3(C.a.u(a5,q,m),a3)
a0=P.oY(a==null?H.v(P.Y("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.oX(a5,m,l,a3,i,b!=null)
a2=l<k?P.lf(a5,l+1,k,a3):a3
return new P.bj(i,c,b,a0,a1,a2,k<a4?P.oV(a5,k+1,a4):a3)},
mm:function(a){var s=t.N
return C.b.fX(a.split("&"),P.lR(s,s),new P.iG(C.e))},
on:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.iD(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.W(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.jM(C.a.u(a,q,r),null)
if(typeof n!=="number")return n.Y()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.b(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.jM(C.a.u(a,q,c),null)
if(typeof n!=="number")return n.Y()
if(n>255)j.$2(k,q)
if(p>=s)return H.b(i,p)
i[p]=n
return i},
ml:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.iE(a),b=new P.iF(c,a)
if(a.length<2)c.$1("address is too short")
s=[]
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.W(a,r)
if(n===58){if(r===a0){++r
if(C.a.W(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gar(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.on(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.b(j,g)
j[g]=0
d=g+1
if(d>=i)return H.b(j,d)
j[d]=0
g+=2}else{d=C.c.aA(f,8)
if(g<0||g>=i)return H.b(j,g)
j[g]=d
d=g+1
if(d>=i)return H.b(j,d)
j[d]=f&255
g+=2}}return j},
mG:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bO:function(a,b,c){throw H.c(P.Y(c,a,b))},
oY:function(a,b){if(a!=null&&a===P.mG(b))return null
return a},
oW:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.W(a,b)===91){s=c-1
if(C.a.W(a,s)!==93)P.bO(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.oT(a,r,s)
if(q<s){p=q+1
o=P.mL(a,C.a.a6(a,"25",p)?q+3:p,s,"%25")}else o=""
P.ml(a,r,q)
return C.a.u(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.W(a,n)===58){q=C.a.bc(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mL(a,C.a.a6(a,"25",p)?q+3:p,c,"%25")}else o=""
P.ml(a,b,q)
return"["+C.a.u(a,b,q)+o+"]"}return P.p1(a,b,c)},
oT:function(a,b,c){var s=C.a.bc(a,"%",b)
return s>=b&&s<c?s:c},
mL:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.X(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.W(a,s)
if(p===37){o=P.lg(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.X("")
m=i.a+=C.a.u(a,r,s)
if(n)o=C.a.u(a,s,s+3)
else if(o==="%")P.bO(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.X("")
if(r<s){i.a+=C.a.u(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.W(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.u(a,r,s)
if(i==null){i=new P.X("")
n=i}else n=i
n.a+=j
n.a+=P.le(p)
s+=k
r=s}}}if(i==null)return C.a.u(a,b,c)
if(r<c)i.a+=C.a.u(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
p1:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.W(a,s)
if(o===37){n=P.lg(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.X("")
l=C.a.u(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.u(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.b(C.t,m)
m=(C.t[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.X("")
if(r<s){q.a+=C.a.u(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.b(C.i,m)
m=(C.i[m]&1<<(o&15))!==0}else m=!1
if(m)P.bO(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.W(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.u(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.X("")
m=q}else m=q
m.a+=l
m.a+=P.le(o)
s+=j
r=s}}}}if(q==null)return C.a.u(a,b,c)
if(r<c){l=C.a.u(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
oZ:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mI(C.a.H(a,b)))P.bO(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.H(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.b(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
if(!p)P.bO(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.u(a,b,c)
return P.oS(r?a.toLowerCase():a)},
oS:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p_:function(a,b,c){return P.cT(a,b,c,C.O,!1)},
oX:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.cT(a,b,c,C.u,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.aa(s,"/"))s="/"+s
return P.p0(s,e,f)},
p0:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.aa(a,"/"))return P.p2(a,!s||c)
return P.p3(a)},
lf:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bW("Both query and queryParameters specified"))
return P.cT(a,b,c,C.j,!0)}if(d==null)return null
s=new P.X("")
r.a=""
d.t(0,new P.jh(new P.ji(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
oV:function(a,b,c){return P.cT(a,b,c,C.j,!0)},
lg:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.W(a,b+1)
r=C.a.W(a,n)
q=H.jI(s)
p=H.jI(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aA(o,4)
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.az(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.u(a,b,b+3).toUpperCase()
return null},
le:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.b(s,0)
s[0]=37
q=C.a.H(k,a>>>4)
if(1>=r)return H.b(s,1)
s[1]=q
q=C.a.H(k,a&15)
if(2>=r)return H.b(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.f8(a,6*o)&63|p
if(n>=r)return H.b(s,n)
s[n]=37
q=n+1
l=C.a.H(k,m>>>4)
if(q>=r)return H.b(s,q)
s[q]=l
l=n+2
q=C.a.H(k,m&15)
if(l>=r)return H.b(s,l)
s[l]=q
n+=3}}return P.ea(s,0,null)},
cT:function(a,b,c,d,e){var s=P.mK(a,b,c,d,e)
return s==null?C.a.u(a,b,c):s},
mK:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.W(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.b(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lg(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.b(C.i,n)
n=(C.i[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.bO(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.W(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.le(o)}}if(p==null){p=new P.X("")
n=p}else n=p
n.a+=C.a.u(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.e(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.u(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mJ:function(a){if(C.a.aa(a,"."))return!0
return C.a.cU(a,"/.")!==-1},
p3:function(a){var s,r,q,p,o,n,m
if(!P.mJ(a))return a
s=[]
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.u(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.b(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.D(s,"/")},
p2:function(a,b){var s,r,q,p,o,n
if(!P.mJ(a))return!b?P.mH(a):a
s=[]
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gar(s)!==".."){if(0>=s.length)return H.b(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.b(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gar(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.b(s,0)
r=P.mH(s[0])
if(0>=s.length)return H.b(s,0)
s[0]=r}return C.b.D(s,"/")},
mH:function(a){var s,r,q,p=a.length
if(p>=2&&P.mI(J.nx(a,0)))for(s=1;s<p;++s){r=C.a.H(a,s)
if(r===58)return C.a.u(a,0,s)+"%3A"+C.a.aM(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.b(C.k,q)
q=(C.k[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
oU:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.H(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bW("Invalid URL encoding"))}}return s},
lh:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.H(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.u(a,b,c)
else p=new H.N(C.a.u(a,b,c))}else{p=[]
for(q=a.length,o=b;o<c;++o){r=C.a.H(a,o)
if(r>127)throw H.c(P.bW("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bW("Truncated URI"))
p.push(P.oU(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.V.bQ(p)},
mI:function(a){var s=a|32
return 97<=s&&s<=122},
mk:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=[b-1]
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.H(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.Y(k,a,r))}}if(q<0&&r>b)throw H.c(P.Y(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.H(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gar(j)
if(p!==44||r!==n+7||!C.a.a6(a,"base64",n+1))throw H.c(P.Y("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.A.h3(0,a,m,s)
else{l=P.mK(a,m,s,C.j,!0)
if(l!=null)a=C.a.aJ(a,m,s,l)}return new P.iC(a,j,c)},
pb:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.o_(22,new P.jp()),l=new P.jo(m),k=new P.jq(),j=new P.jr(),i=l.$2(0,225)
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
mR:function(a,b,c,d,e){var s,r,q,p,o,n=$.nw()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.b(n,d)
r=n[d]
q=C.a.H(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.b(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.b(e,o)
e[o]=s}return d},
bl:function bl(){},
ab:function ab(a,b){this.a=a
this.b=b},
a1:function a1(){},
b7:function b7(a){this.a=a},
fY:function fY(){},
fZ:function fZ(){},
G:function G(){},
d4:function d4(a){this.a=a},
dN:function dN(){},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dn:function dn(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ep:function ep(a){this.a=a},
em:function em(a){this.a=a},
e5:function e5(a){this.a=a},
dc:function dc(a){this.a=a},
dQ:function dQ(){},
cq:function cq(){},
de:function de(a){this.a=a},
eJ:function eJ(a){this.a=a},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
h:function h(){},
dr:function dr(){},
l:function l(){},
E:function E(){},
aj:function aj(){},
U:function U(){},
J:function J(){},
z:function z(){},
X:function X(a){this.a=a},
iG:function iG(a){this.a=a},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a,b){this.a=a
this.b=b},
bj:function bj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
ji:function ji(a,b){this.a=a
this.b=b},
jh:function jh(a){this.a=a},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(){},
jo:function jo(a){this.a=a},
jq:function jq(){},
jr:function jr(){},
f3:function f3(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
eC:function eC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
b_:function(a){var s,r,q,p,o
if(a==null)return null
s=P.lR(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.x)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
pI:function(a){var s={}
a.t(0,new P.ju(s))
return s},
jc:function jc(){},
jd:function jd(a,b){this.a=a
this.b=b},
je:function je(a,b){this.a=a
this.b=b},
ju:function ju(a){this.a=a},
fd:function fd(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
h6:function h6(){},
h7:function h7(){},
j7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
f1:function f1(){},
ad:function ad(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bb:function bb(){},
dz:function dz(){},
be:function be(){},
dO:function dO(){},
hT:function hT(){},
e9:function e9(){},
k:function k(){},
bg:function bg(){},
eh:function eh(){},
eQ:function eQ(){},
eR:function eR(){},
eY:function eY(){},
eZ:function eZ(){},
fb:function fb(){},
fc:function fc(){},
fj:function fj(){},
fk:function fk(){},
bh:function bh(){},
fG:function fG(){},
d5:function d5(){},
fH:function fH(a){this.a=a},
d6:function d6(){},
aJ:function aJ(){},
dP:function dP(){},
ex:function ex(){},
e3:function e3(){},
f7:function f7(){},
f8:function f8(){}},W={
lF:function(){var s=document.createElement("canvas")
return s},
h_:function(a){return"wheel"},
lN:function(a){var s,r=document.createElement("input"),q=t.S.a(r)
try{q.type=a}catch(s){H.b0(s)}return q},
j6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
my:function(a,b,c,d){var s=W.j6(W.j6(W.j6(W.j6(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
V:function(a,b,c,d){var s=new W.eI(a,b,c==null?null:W.mS(new W.j5(c),t.D),!1)
s.fh()
return s},
mS:function(a,b){var s=$.at
if(s===C.f)return a
return s.cJ(a,b)},
m:function m(){},
fB:function fB(){},
d2:function d2(){},
d3:function d3(){},
b5:function b5(){},
b6:function b6(){},
ap:function ap(){},
fR:function fR(){},
F:function F(){},
c0:function c0(){},
fS:function fS(){},
ag:function ag(){},
aw:function aw(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
c1:function c1(){},
c2:function c2(){},
dg:function dg(){},
fX:function fX(){},
ez:function ez(a,b){this.a=a
this.b=b},
M:function M(){},
i:function i(){},
d:function d(){},
aq:function aq(){},
bv:function bv(){},
dj:function dj(){},
dl:function dl(){},
aK:function aK(){},
ha:function ha(){},
b8:function b8(){},
c8:function c8(){},
bx:function bx(){},
ba:function ba(){},
hI:function hI(){},
hM:function hM(){},
bB:function bB(){},
dE:function dE(){},
hN:function hN(a){this.a=a},
dF:function dF(){},
hO:function hO(a){this.a=a},
aN:function aN(){},
dG:function dG(){},
ac:function ac(){},
ey:function ey(a){this.a=a},
t:function t(){},
cm:function cm(){},
aP:function aP(){},
dT:function dT(){},
dY:function dY(){},
i0:function i0(a){this.a=a},
e_:function e_(){},
aA:function aA(){},
e1:function e1(){},
aR:function aR(){},
e2:function e2(){},
aS:function aS(){},
e6:function e6(){},
ia:function ia(a){this.a=a},
aB:function aB(){},
aT:function aT(){},
aC:function aC(){},
am:function am(){},
eb:function eb(){},
ec:function ec(){},
ig:function ig(){},
aU:function aU(){},
bf:function bf(){},
eg:function eg(){},
ij:function ij(){},
aE:function aE(){},
iH:function iH(){},
et:function et(){},
aW:function aW(){},
bL:function bL(){},
eA:function eA(){},
cz:function cz(){},
eN:function eN(){},
cD:function cD(){},
f6:function f6(){},
fe:function fe(){},
kU:function kU(a,b){this.a=a
this.$ti=b},
eI:function eI(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j5:function j5(a){this.a=a},
l7:function l7(a){this.$ti=a},
H:function H(){},
c7:function c7(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
eB:function eB(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eK:function eK(){},
eL:function eL(){},
eO:function eO(){},
eP:function eP(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
f_:function f_(){},
f0:function f0(){},
f2:function f2(){},
cJ:function cJ(){},
cK:function cK(){},
f4:function f4(){},
f5:function f5(){},
fa:function fa(){},
ff:function ff(){},
fg:function fg(){},
cM:function cM(){},
cN:function cN(){},
fh:function fh(){},
fi:function fi(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){}},K={
a0:function(a){var s=new K.i1()
s.du(a)
return s},
fC:function fC(){},
dm:function dm(){},
aO:function aO(){this.a=null},
i1:function i1(){this.a=null}},L={e4:function e4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},ef:function ef(a){this.b=a
this.c=null},ih:function ih(){var _=this
_.d=_.c=_.b=_.a=null},ik:function ik(a){this.b=a
this.a=this.c=null}},O={
lH:function(){var s=new O.bs()
s.cc()
return s},
bs:function bs(){this.c=this.b=this.a=null},
ci:function ci(){this.b=this.a=null},
dp:function dp(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ho:function ho(a,b){this.a=a
this.b=b},
hp:function hp(a){this.a=a},
hz:function hz(a,b){this.a=a
this.b=b},
hy:function hy(a){this.a=a},
hA:function hA(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.a=a
this.b=b},
hf:function hf(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
hj:function hj(a,b){this.a=a
this.b=b},
hk:function hk(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
hg:function hg(a){this.a=a},
hh:function hh(a){this.a=a},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
hv:function hv(a){this.a=a},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(a){this.a=a},
hm:function hm(a){this.a=a},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(a){this.a=a},
hc:function hc(a){this.a=a},
hb:function hb(a){this.a=a},
id:function id(){}},E={
ov:function(){if(J.kO(window.navigator.vendor,"Google"))return C.y
if(J.kO(window.navigator.userAgent,"Firefox"))return C.o
var s=window.navigator.appVersion
if(J.aG(s).a3(s,"Trident")||C.a.a3(s,"Edge"))return C.p
if(J.kO(window.navigator.appName,"Microsoft"))return C.p
return C.z},
ow:function(){var s=window.navigator.appVersion
if(J.aG(s).a3(s,"Win"))return C.R
if(C.a.a3(s,"Mac"))return C.S
if(C.a.a3(s,"Linux"))return C.T
return C.U},
od:function(a,b){var s=new E.hX(a)
s.dt(a,b)
return s},
ol:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.mg(a,!0,!0,!0,!1)
s=W.lF()
r=s.style
r.width="100%"
r.height="100%"
J.d1(a).j(0,s)
return E.mg(s,!0,!0,!0,!1)},
mg:function(a,b,c,d,e){var s,r,q,p,o="mousemove",n=new E.ed(),m=t.z,l=C.l.dl(a,"webgl2",P.nZ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m))
if(l==null)H.v(P.y("Failed to get the rendering context for WebGL."))
n.b=a
n.c=l
n.e=E.od(l,a)
l.getParameter(3379)
l.getParameter(34076)
m=new X.es(a)
s=new X.hD()
s.c=new X.ai(!1,!1,!1)
s.d=P.lT(t.e)
m.b=s
s=new X.hP(m)
s.f=0
s.r=V.ay()
s.x=V.ay()
s.ch=s.Q=1
m.c=s
s=new X.hJ(m)
s.r=0
s.x=V.ay()
s.cy=s.cx=s.ch=s.Q=1
m.d=s
s=new X.ii(m)
s.f=V.ay()
s.r=V.ay()
m.e=s
m.x=m.r=m.f=!1
m.y=null
m.z=[]
s=$.lL
if(s==null){r=E.ov()
E.ow()
s=$.lL=new E.j4(r)}m.Q=s.a===C.o?0.16666666666666666:0.005555555555555556
q=m.z
p=document
q.push(W.V(p,"contextmenu",m.geq(),!1))
m.z.push(W.V(a,"focus",m.gex(),!1))
m.z.push(W.V(a,"blur",m.gek(),!1))
m.z.push(W.V(p,"keyup",m.geB(),!1))
m.z.push(W.V(p,"keydown",m.gez(),!1))
m.z.push(W.V(a,"mousedown",m.geE(),!1))
m.z.push(W.V(a,"mouseup",m.geI(),!1))
m.z.push(W.V(a,o,m.geG(),!1))
q=m.z
W.h_(a)
W.h_(a)
q.push(W.V(a,W.h_(a),m.geK(),!1))
m.z.push(W.V(p,o,m.ges(),!1))
m.z.push(W.V(p,"mouseup",m.gev(),!1))
m.z.push(W.V(p,"pointerlockchange",m.geM(),!1))
m.z.push(W.V(a,"touchstart",m.geV(),!1))
m.z.push(W.V(a,"touchend",m.geR(),!1))
m.z.push(W.V(a,"touchmove",m.geT(),!1))
n.x=m
n.ch=!0
n.cx=!1
n.cy=new P.ab(Date.now(),!1)
n.db=0
n.cv()
return n},
fK:function fK(){},
bu:function bu(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bq:function bq(a){this.b=a},
bG:function bG(a){this.b=a},
j4:function j4(a){this.a=a},
hX:function hX(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
i_:function i_(a){this.a=a},
ed:function ed(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
ie:function ie(a){this.a=a}},Z={
l6:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.js(c)),35044)
a.bindBuffer(b,null)
return new Z.eu(b,s)},
ao:function(a){return new Z.cx(a)},
eu:function eu(a,b){this.a=a
this.b=b},
fL:function fL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j_:function j_(a){this.a=a},
d7:function d7(a,b){this.a=a
this.b=null
this.c=b},
d8:function d8(){this.a=null},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a){this.a=a},
n5:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c="controls",b="modifiers",a=V.og("Test 002"),a0=W.lF()
a0.className="pageLargeCanvas"
a0.id=e
a.a.appendChild(a0)
a.cI(["The inspection test is used to check that shapes are built correctly ","and for checking the data provided by the shapes. ","Also it is useful for testing out new generated shape configurations. ","For loaded shape testing see test032."])
a.fv(["controls","shapes","scalars"])
a.cI(["\xab[Back to Tests|../]"])
a=document
s=a.getElementById(e)
if(s==null)H.v(P.y("Failed to find an element with the identifier, testCanvas."))
r=E.ol(s,!0,!0,!0,!1)
q=new E.bu()
q.a=""
q.b=!0
p=O.lH()
q.y=p
p.bj(q.gh4(),q.gh7())
q.dy=q.dx=q.db=q.cy=q.cx=q.ch=q.Q=q.z=null
q.sc9(0,d)
q.saV(d)
p=new U.bw()
p.cc()
p.bj(p.gei(),p.geP())
p.e=null
p.f=V.hL()
p.r=0
o=r.x
n=new U.cu()
m=U.kT()
m.sc7(0,!0)
m.sbX(6.283185307179586)
m.sbZ(0)
m.sT(0,0)
m.sbY(100)
m.sU(0)
m.sbS(0.5)
n.b=m
l=n.gay()
m.gC().j(0,l)
m=U.kT()
m.sc7(0,!0)
m.sbX(6.283185307179586)
m.sbZ(0)
m.sT(0,0)
m.sbY(100)
m.sU(0)
m.sbS(0.5)
n.c=m
m.gC().j(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.ai(!1,!1,!1)
j=n.d
n.d=k
m=new D.q(b,j,k)
m.b=!0
n.O(m)
m=n.f
if(m!==!1){n.f=!1
m=new D.q("invertX",m,!1)
m.b=!0
n.O(m)}m=n.r
if(m!==!0){n.r=!0
m=new D.q("invertY",m,!0)
m.b=!0
n.O(m)}n.aR(o)
p.j(0,n)
o=r.x
n=new U.ct()
m=U.kT()
m.sc7(0,!0)
m.sbX(6.283185307179586)
m.sbZ(0)
m.sT(0,0)
m.sbY(100)
m.sU(0)
m.sbS(0.2)
n.b=m
m.gC().j(0,n.gay())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.ai(!0,!1,!1)
j=n.c
n.c=k
m=new D.q(b,j,k)
m.b=!0
n.O(m)
n.aR(o)
p.j(0,n)
o=r.x
n=new U.cv()
n.c=0.01
n.e=n.d=0
k=new X.ai(!1,!1,!1)
n.b=k
m=new D.q(b,d,k)
m.b=!0
n.O(m)
n.aR(o)
p.j(0,n)
q.saV(p)
i=new O.dp()
i.b=V.mu()
i.c=new V.A(0.2,0.3,0.4,1)
i.d=new V.A(0.1,0.2,0.3,1)
i.e=V.db(0.7)
i.f=V.db(0.3)
i.r=V.db(0.5)
i.x=V.db(0.5)
i.y=new V.A(1,1,1,1)
i.z=V.db(0.8)
i.r1=i.k4=i.k3=i.k2=i.k1=i.id=i.go=i.fy=i.fx=i.fr=i.dy=i.dx=i.db=i.cy=i.cx=i.ch=i.Q=!1
i.r2=1
i.sa8(0.4)
p=new M.dh()
p.a=!0
o=O.lH()
p.e=o
o.bj(p.gem(),p.geo())
p.y=p.x=p.r=p.f=null
h=X.nR(d)
g=new X.dR()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.saV(d)
o=g.c
$.B().toString
if(!(Math.abs(o-1.0471975511965976)<1e-9)){g.c=1.0471975511965976
o=new D.q("fov",o,1.0471975511965976)
o.b=!0
g.av(o)}o=g.d
$.B().toString
if(!(Math.abs(o-0.1)<1e-9)){g.d=0.1
o=new D.q("near",o,0.1)
o.b=!0
g.av(o)}o=g.e
$.B().toString
if(!(Math.abs(o-2000)<1e-9)){g.e=2000
o=new D.q("far",o,2000)
o.b=!0
g.av(o)}o=p.b
if(o!==g){if(o!=null)o.gC().E(0,p.gaj())
j=p.b
p.b=g
g.gC().j(0,p.gaj())
o=new D.q("camera",j,p.b)
o.b=!0
p.an(o)}o=p.c
if(o!==h){if(o!=null)o.gC().E(0,p.gaj())
j=p.c
p.c=h
h.gC().j(0,p.gaj())
o=new D.q("target",j,p.c)
o.b=!0
p.an(o)}p.sde(d)
p.sde(i)
p.e.j(0,q)
o=p.b
f=V.aM(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
n=new U.bY()
n.a=f
o.saV(n)
o=r.d
if(o!==p){if(o!=null)o.gC().E(0,r.gcd())
r.d=p
p.gC().j(0,r.gcd())
r.ce()}p=new V.fN(c)
a=a.getElementById(c)
p.c=a
if(a==null)H.v("Failed to find controls for CheckGroup")
p.d=[]
p.a1(0,"Filled",new Z.jV(i),!0)
p.a1(0,"Wire Frame",new Z.jW(i),!0)
p.p(0,"Vertices",new Z.jX(i))
p.p(0,"Normals",new Z.k7(i))
p.p(0,"Binormals",new Z.ki(i))
p.p(0,"Tangentals",new Z.kt(i))
p.p(0,"Face Centers",new Z.kC(i))
p.p(0,"Face Normals",new Z.kD(i))
p.p(0,"Face Binormals",new Z.kE(i))
p.p(0,"Face Tangentals",new Z.kF(i))
p.p(0,"Colors",new Z.kG(i))
p.p(0,"Textures2D",new Z.jY(i))
p.p(0,"TexturesCube",new Z.jZ(i))
p.p(0,"Weight",new Z.k_(i))
p.p(0,"Bend",new Z.k0(i))
p.a1(0,"Axis",new Z.k1(i),!0)
p.p(0,"AABB",new Z.k2(i))
a=new Z.kH(q)
p=V.m5("shapes")
p.a1(0,"Square",new Z.k3(a),!0)
p.p(0,"Cube",new Z.k4(a))
p.p(0,"Cuboid",new Z.k5(a))
p.p(0,"Cuboid+",new Z.k6(a))
p.p(0,"Disk",new Z.k8(a))
p.p(0,"Disk+",new Z.k9(a))
p.p(0,"Cylinder",new Z.ka(a))
p.p(0,"Cylinder+",new Z.kb(a))
p.p(0,"Cone",new Z.kc(a))
p.p(0,"Cylindrical",new Z.kd(a))
p.p(0,"LatLonSphere",new Z.ke(a))
p.p(0,"LatLonSphere+",new Z.kf(a))
p.p(0,"IsoSphere",new Z.kg(a))
p.p(0,"IsoSphere+",new Z.kh(a))
p.p(0,"Sphere",new Z.kj(a))
p.p(0,"Sphere+",new Z.kk(a))
p.p(0,"Spherical",new Z.kl(a))
p.p(0,"Toroid",new Z.km(a))
p.p(0,"Knot",new Z.kn(a))
p.p(0,"Grid",new Z.ko(a))
p.p(0,"Grid+",new Z.kp(a))
a=V.m5("scalars")
a.p(0,"0.01",new Z.kq(i))
a.p(0,"0.02",new Z.kr(i))
a.p(0,"0.04",new Z.ks(i))
a.p(0,"0.06",new Z.ku(i))
a.p(0,"0.08",new Z.kv(i))
a.p(0,"0.1",new Z.kw(i))
a.p(0,"0.2",new Z.kx(i))
a.a1(0,"0.4",new Z.ky(i),!0)
a.p(0,"0.6",new Z.kz(i))
a.p(0,"0.8",new Z.kA(i))
a.p(0,"1.0",new Z.kB(i))
V.pX(r)},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
k7:function k7(a){this.a=a},
ki:function ki(a){this.a=a},
kt:function kt(a){this.a=a},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
kH:function kH(a){this.a=a},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
jU:function jU(){},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
jT:function jT(){},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
jS:function jS(){},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
jR:function jR(){},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
ks:function ks(a){this.a=a},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a}},D={
O:function(){var s=new D.c4()
s.d=0
return s},
fM:function fM(){},
c4:function c4(){var _=this
_.d=_.c=_.b=_.a=null},
h3:function h3(a){this.a=a},
h4:function h4(a){this.a=a},
W:function W(){this.b=null},
by:function by(){this.b=null},
bz:function bz(){this.b=null},
q:function q(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null}},X={d9:function d9(a,b){this.a=a
this.b=b},dx:function dx(a,b){this.a=a
this.b=b},hD:function hD(){var _=this
_.d=_.c=_.b=_.a=null},cf:function cf(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hJ:function hJ(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},bC:function bC(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hP:function hP(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bD:function bD(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},dU:function dU(){},cs:function cs(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ii:function ii(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},es:function es(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nR:function(a){var s=new X.h9(),r=new V.A(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.ma
if(r==null){r=V.m9(0,0,1,1)
$.ma=r}s.r=r
return s},
kS:function kS(){},
h9:function h9(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dR:function dR(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ib:function ib(){}},V={
lI:function(a,b,c){var s,r,q,p,o,n,m,l
a*=6
s=C.d.bb(a)
r=a-s
q=b*(1-c)
p=b*(1-c*r)
o=b*(1-c*(1-r))
switch(s){case 0:if(b<0)n=0
else n=b>1?1:b
if(o<0)m=0
else m=o>1?1:o
if(q<0)l=0
else l=q>1?1:q
return new V.aa(n,m,l)
case 1:if(p<0)n=0
else n=p>1?1:p
if(b<0)m=0
else m=b>1?1:b
if(q<0)l=0
else l=q>1?1:q
return new V.aa(n,m,l)
case 2:if(q<0)n=0
else n=q>1?1:q
if(b<0)m=0
else m=b>1?1:b
if(o<0)l=0
else l=o>1?1:o
return new V.aa(n,m,l)
case 3:if(q<0)n=0
else n=q>1?1:q
if(p<0)m=0
else m=p>1?1:p
if(b<0)l=0
else l=b>1?1:b
return new V.aa(n,m,l)
case 4:if(o<0)n=0
else n=o>1?1:o
if(q<0)m=0
else m=q>1?1:q
if(b<0)l=0
else l=b>1?1:b
return new V.aa(n,m,l)
default:if(b<0)n=0
else n=b>1?1:b
if(q<0)m=0
else m=q>1?1:q
if(p<0)l=0
else l=p>1?1:p
return new V.aa(n,m,l)}},
db:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.A(a,a,a,1)},
fP:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.A(s,r,q,1)},
lJ:function(a){return new V.A(a.a,a.b,a.c,1)},
fz:function(a,b,c){var s
if(c<=0)s=a
else if(c>=1)s=b
else{if(typeof b!=="number")return b.v()
if(typeof a!=="number")return H.e(a)
s=a+c*(b-a)}return s},
q1:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.b1(a-b,s)
return(a<0?a+s:a)+b},
w:function(a,b,c){if(a==null)return C.a.ae("null",c)
$.B().toString
return C.a.ae(C.d.df(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
jE:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=0,r=0;r<4;++r){q=V.w(a[r],b,c)
s=Math.max(s,q.length)
m.push(q)}for(p=m.length,o=p-1;o>=0;--o,p=n){if(o>=p)return H.b(m,o)
p=C.a.ae(m[o],s)
n=m.length
if(o>=n)return H.b(m,o)
m[o]=p}return m},
hL:function(){var s=$.lU
return s==null?$.lU=V.aM(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aM:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.dD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ay:function(){var s=$.lX
return s==null?$.lX=new V.S(0,0):s},
lZ:function(){var s=$.lY
return s==null?$.lY=new V.D(0,0,0):s},
m0:function(){var s=$.m_
return s==null?$.m_=new V.a5(0,0,0,0):s},
m9:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dX(a,b,c,d)},
mb:function(a,b,c,d,e,f){return new V.co(a,b,c,d,e,f)},
K:function(){var s=$.mt
return s==null?$.mt=new V.n(0,0,0):s},
l5:function(){var s=$.mq
return s==null?$.mq=new V.n(1,0,0):s},
mu:function(){var s=$.mp
return s==null?$.mp=new V.n(0,0,-1):s},
aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},
A:function A(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h1:function h1(){},
dD:function dD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
S:function S(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dX:function dX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
co:function co(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a6:function a6(a,b){this.a=a
this.b=b},
n:function n(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pX:function(a){P.om(C.J,new V.kJ(a))},
m5:function(a){var s=new V.hV(a),r=document.getElementById(a)
s.c=r
if(r==null)H.v("Failed to find "+a+" for RadioGroup")
return s},
og:function(a){var s=new V.i5()
s.dw(a,!0)
return s},
fN:function fN(a){this.a=a
this.d=this.c=null},
fO:function fO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kJ:function kJ(a){this.a=a},
hV:function hV(a){this.a=a
this.c=null},
hW:function hW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i5:function i5(){this.b=this.a=null},
i7:function i7(a){this.a=a},
i6:function i6(a){this.a=a}},U={
kT:function(){var s=new U.fQ()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
fQ:function fQ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bY:function bY(){this.b=this.a=null},
bw:function bw(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
Z:function Z(){},
ct:function ct(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cu:function cu(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cv:function cv(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dh:function dh(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
l4:function(a,b,c,d,e){var s=new A.ir(a,c,e)
s.f=d
P.hH(d,0,!1)
return s},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a){this.a=a},
dq:function dq(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cp:function cp(){},
ip:function ip(){},
iw:function iw(a){this.a=a},
iq:function iq(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ei:function ei(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){this.a=a
this.c=b
this.d=c},
ej:function ej(a,b,c){this.a=a
this.c=b
this.d=c},
ek:function ek(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
el:function el(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
iA:function iA(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jv:function(a,b,c,d){var s=F.Q()
F.cU(s,b,c,d,a,1,0,0,1)
F.cU(s,b,c,d,a,0,1,0,3)
F.cU(s,b,c,d,a,0,0,1,2)
F.cU(s,b,c,d,a,-1,0,0,0)
F.cU(s,b,c,d,a,0,-1,0,0)
F.cU(s,b,c,d,a,0,0,-1,3)
s.ab()
return s},
jn:function(a){var s,r=a.a
if(typeof r!=="number")return r.Y()
s=r>0?1:0
r=a.b
if(typeof r!=="number")return r.Y()
if(r>0)s+=2
r=a.c
if(typeof r!=="number")return r.Y()
return(r>0?s+4:s)*2},
cU:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.n(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.n(s+a5,r+a3,q+a4)
o=new V.n(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.n(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.jn(g)
j=F.jn(f)
i=F.fA(a1,a2,new F.jm(h,F.jn(e),F.jn(d),j,k,a0),b)
if(i!=null)a.aF(i)},
jB:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d==null)d=new F.jC()
if(a0<3)return null
s=F.Q()
r=b?-1:1
q=-6.283185307179586/a0
p=[]
o=s.a
n=new V.n(0,0,r).B()
p.push(o.fA(new V.a5(a,-1,-1,-1),new V.A(1,1,1,1),new V.D(0,0,c),new V.n(0,0,r),new V.S(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(typeof i!=="number")return H.e(i)
n=new V.n(k,j,r).B()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
o.toString
e=F.an(new V.a5(a,-1,-1,-1),null,new V.A(h,f,g,1),new V.D(k*i,j*i,c),new V.n(0,0,r),new V.S(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.j(0,e)
p.push(e)}s.d.cG(p)
return s},
lo:function(a,b,c,d){return F.mV(!0,a,b,new F.jw(1,d),c)},
mV:function(a,b,c,d,e){var s,r=null
if(e<3)return r
if(c<1)return r
s=F.fA(c,e,new F.jy(d),r)
if(s==null)return r
s.ab()
s.b9()
if(b)s.aF(F.jB(3,!1,1,new F.jz(d),e))
s.aF(F.jB(1,!0,-1,new F.jA(d),e))
return s},
n4:function(a,b){var s=F.fA(a,b,new F.jQ(),null)
s.d.bg()
s.ab()
s.b9()
return s},
n3:function(a){var s=F.Q(),r=Math.sqrt(5)/2+0.5,q=F.a3(s,new V.n(-1,r,0)),p=F.a3(s,new V.n(1,r,0)),o=-r,n=F.a3(s,new V.n(-1,o,0)),m=F.a3(s,new V.n(1,o,0)),l=F.a3(s,new V.n(0,-1,o)),k=F.a3(s,new V.n(0,1,o)),j=F.a3(s,new V.n(0,-1,r)),i=F.a3(s,new V.n(0,1,r)),h=F.a3(s,new V.n(r,0,1)),g=F.a3(s,new V.n(r,0,-1)),f=F.a3(s,new V.n(o,0,1)),e=F.a3(s,new V.n(o,0,-1))
F.L(s,q,e,k,a)
F.L(s,q,k,p,a)
F.L(s,q,p,i,a)
F.L(s,q,i,f,a)
F.L(s,q,f,e,a)
F.L(s,p,k,g,a)
F.L(s,k,e,l,a)
F.L(s,e,f,n,a)
F.L(s,f,i,j,a)
F.L(s,i,p,h,a)
F.L(s,m,g,l,a)
F.L(s,m,l,n,a)
F.L(s,m,n,j,a)
F.L(s,m,j,h,a)
F.L(s,m,h,g,a)
F.L(s,l,g,k,a)
F.L(s,n,l,e,a)
F.L(s,j,n,f,a)
F.L(s,h,j,i,a)
F.L(s,g,h,p,a)
s.cZ(new F.cw(),new F.iS())
return s},
a3:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
b=b.B()
s=b.a
r=b.b
q=b.c
p=F.an(h,h,h,new V.D(s,r,q),b,h,h,h,0)
o=a.fS(p,new F.cw())
if(o!=null)return o
if(typeof s!=="number")return s.n()
n=s*0.5+0.5
if(typeof r!=="number")return r.n()
m=r*0.5+0.5
if(typeof q!=="number")return q.n()
l=q*0.5+0.5
if(n<0)n=0
else if(n>1)n=1
if(m<0)m=0
else if(m>1)m=1
if(l<0)l=0
else if(l>1)l=1
p.sa2(0,new V.A(n,m,l,1))
k=Math.sqrt(s*s+r*r)
j=Math.atan2(r,s)/1.5707963267948966
if(j<0)j=-j
i=Math.atan2(k,q)/3.141592653589793
p.sc4(new V.S(j,i<0?-i:i))
a.a.j(0,p)
return p},
L:function(a,b,c,d,e){var s,r,q,p
if(e<=0)a.d.a1(0,b,d,c)
else{s=F.a3(a,b.r.m(0,c.r).n(0,0.5))
r=F.a3(a,c.r.m(0,d.r).n(0,0.5))
q=F.a3(a,d.r.m(0,b.r).n(0,0.5))
p=e-1
F.L(a,b,s,q,p)
F.L(a,s,c,r,p)
F.L(a,r,q,s,p)
F.L(a,q,r,d,p)}},
lu:function(a,b,c){var s,r={}
r.a=b
if(b==null)r.a=new F.kK()
s=F.jv(a,null,new F.kL(r,1),c)
s.b9()
return s},
q0:function(){return F.mW(15,30,0.5,1,new F.kM())},
pT:function(){return F.mW(12,120,0.3,1,new F.jP(3,2))},
mW:function(a,b,c,d,e){var s=F.fA(a,b,new F.jx(e,d,b,c),null)
if(s==null)return null
s.ab()
s.b9()
return s},
n0:function(a,b,c){var s={}
s.a=b
if(b==null)s.a=new F.jG()
return F.fA(c,a,new F.jH(s),null)},
fA:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.Q()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.an(e,e,new V.A(n,0,0,1),e,e,new V.S(p,1),e,e,0)
o.j(0,m)
c.$3(m,p,0)
r.push(m.bR(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.an(e,e,new V.A(h,g,f,1),e,e,new V.S(p,k),e,e,0)
i.j(0,m)
c.$3(m,p,l)
r.push(m.bR(d))}}s.d.fz(a+1,b+1,r)
return s},
c5:function(a,b,c){var s=new F.di(),r=a.a
if(r==null)H.v(P.y(u.j))
if(r!=b.a||r!=c.a)H.v(P.y(u.i))
s.aP(a)
s.aQ(b)
s.cw(c)
s.a.a.d.b.push(s)
s.a.a.P()
return s},
nX:function(a,b){var s,r=new F.dA()
if(a==null)H.v(P.y(u.p))
if(b==null)H.v(P.y(u.m))
s=a.a
if(s==null)H.v(P.y(u.g))
if(s!=b.a)H.v(P.y(u.q))
r.aP(a)
r.aQ(b)
r.a.a.c.b.push(r)
r.a.a.P()
return r},
l2:function(a){var s=new F.hS()
if(a.a==null)H.v(P.y("May not create a point with a vertex which is not attached to a shape."))
s.f2(a)
s.a.a.b.b.push(s)
s.a.a.P()
return s},
Q:function(){var s=new F.al(),r=new F.iO(s)
r.b=!1
r.c=[]
s.a=r
r=new F.i4(s)
r.b=[]
s.b=r
r=new F.i3(s)
r.b=[]
s.c=r
r=new F.i2(s)
r.b=[]
s.d=r
return s},
an:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.iN(),p=new F.iX()
p.b=[]
q.b=p
p=new F.iT()
p.b=[]
p.c=[]
q.c=p
p=new F.iP()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.nr()
q.e=0
p=$.b3()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.b2().a)!==0?e:r
q.x=(s&$.b1().a)!==0?b:r
q.y=(s&$.bT().a)!==0?f:r
q.z=(s&$.bU().a)!==0?g:r
q.Q=(s&$.ns().a)!==0?c:r
q.ch=(s&$.bV().a)!==0?i:0
q.cx=(s&$.bS().a)!==0?a:r
return q},
jm:function jm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jC:function jC(){},
jw:function jw(a,b){this.a=a
this.b=b},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
jA:function jA(a){this.a=a},
jQ:function jQ(){},
kK:function kK(){},
kL:function kL(a,b){this.a=a
this.b=b},
kM:function kM(){},
jP:function jP(a,b){this.a=a
this.b=b},
jx:function jx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jG:function jG(){},
jH:function jH(a){this.a=a},
di:function di(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h5:function h5(){},
i8:function i8(){},
dA:function dA(){this.b=this.a=null},
hE:function hE(){},
io:function io(){},
hS:function hS(){this.a=null},
al:function al(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(a){this.a=a
this.b=null},
i3:function i3(a){this.a=a
this.b=null},
i4:function i4(a){this.a=a
this.b=null},
iN:function iN(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iZ:function iZ(a){this.a=a},
iY:function iY(a){this.a=a},
iO:function iO(a){this.a=a
this.c=this.b=null},
iP:function iP(){this.d=this.c=this.b=null},
iQ:function iQ(a,b){this.a=a
this.b=b},
iR:function iR(a,b){this.a=a
this.b=b},
iT:function iT(){this.c=this.b=null},
iU:function iU(){},
cw:function cw(){},
iV:function iV(){},
hU:function hU(){this.b=this.a=null},
iW:function iW(){},
iS:function iS(){},
hQ:function hQ(){},
iX:function iX(){this.b=null}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kY.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gS:function(a){return H.cn(a)},
h:function(a){return"Instance of '"+H.f(H.dV(a))+"'"}}
J.ds.prototype={
h:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$ibl:1}
J.cc.prototype={
w:function(a,b){return null==b},
h:function(a){return"null"},
gS:function(a){return 0}}
J.aL.prototype={
gS:function(a){return 0},
h:function(a){return String(a)},
$ilP:1}
J.dS.prototype={}
J.bi.prototype={}
J.ar.prototype={
h:function(a){var s=a[$.ne()]
if(s==null)return this.dr(a)
return"JavaScript function for "+H.f(J.a4(s))}}
J.ah.prototype={
c1:function(a,b){if(!!a.fixed$length)H.v(P.r("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dW(b,null))
return a.splice(b,1)[0]},
E:function(a,b){var s
if(!!a.fixed$length)H.v(P.r("remove"))
for(s=0;s<a.length;++s)if(J.u(a[s],b)){a.splice(s,1)
return!0}return!1},
fu:function(a,b){var s,r
if(!!a.fixed$length)H.v(P.r("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.x)(b),++r)a.push(b[r])},
t:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bt(a))}},
D:function(a,b){var s,r,q=P.hH(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.b(q,s)
q[s]=r}return q.join(b)},
h1:function(a){return this.D(a,"")},
fW:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.bt(a))}return s},
fX:function(a,b,c){return this.fW(a,b,c,t.z)},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
gfU:function(a){if(a.length>0)return a[0]
throw H.c(H.lO())},
gar:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.lO())},
a3:function(a,b){var s
for(s=0;s<a.length;++s)if(J.u(a[s],b))return!0
return!1},
h:function(a){return P.kV(a,"[","]")},
gV:function(a){return new J.a9(a,a.length)},
gS:function(a){return H.cn(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.v(P.r("set length"))
a.length=b},
i:function(a,b){if(!H.bk(b))throw H.c(H.bm(a,b))
if(b>=a.length||b<0)throw H.c(H.bm(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.v(P.r("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bm(a,b))
a[b]=c},
$ij:1,
$ih:1,
$il:1}
J.dv.prototype={}
J.a9.prototype={
gI:function(a){return this.d},
A:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.x(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.b9.prototype={
aC:function(a,b){var s
if(typeof b!="number")throw H.c(H.au(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbd(b)
if(this.gbd(a)===s)return 0
if(this.gbd(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbd:function(a){return a===0?1/a<0:a<0},
bb:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.r(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.r(""+a+".round()"))},
df:function(a,b){var s
if(b>20)throw H.c(P.a_(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbd(a))return"-"+s
return s},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
b1:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ds:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cA(a,b)},
ag:function(a,b){return(a|0)===a?a/b|0:this.cA(a,b)},
cA:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.r("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aA:function(a,b){var s
if(a>0)s=this.cz(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
f8:function(a,b){if(b<0)throw H.c(H.au(b))
return this.cz(a,b)},
cz:function(a,b){return b>31?0:a>>>b},
$ia1:1,
$iU:1}
J.cb.prototype={$io:1}
J.dt.prototype={}
J.ax.prototype={
W:function(a,b){if(b<0)throw H.c(H.bm(a,b))
if(b>=a.length)H.v(H.bm(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.bm(a,b))
return a.charCodeAt(b)},
m:function(a,b){if(typeof b!="string")throw H.c(P.lz(b,null,null))
return a+b},
aJ:function(a,b,c,d){var s,r,q=P.aQ(b,c,a.length)
if(!H.bk(q))H.v(H.au(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
a6:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a_(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
aa:function(a,b){return this.a6(a,b,0)},
u:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dW(b,null))
if(b>c)throw H.c(P.dW(b,null))
if(c>a.length)throw H.c(P.dW(c,null))
return a.substring(b,c)},
aM:function(a,b){return this.u(a,b,null)},
n:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.H)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ae:function(a,b){var s=b-a.length
if(s<=0)return a
return this.n(" ",s)+a},
hb:function(a,b,c){var s=b-a.length
if(s<=0)return a
return a+this.n(c,s)},
bc:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a_(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
cU:function(a,b){return this.bc(a,b,0)},
fH:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a_(c,0,s,null,null))
return H.n9(a,b,c)},
a3:function(a,b){return this.fH(a,b,0)},
aC:function(a,b){var s
if(typeof b!="string")throw H.c(H.au(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
h:function(a){return a},
gS:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gk:function(a){return a.length},
$iz:1}
H.dy.prototype={
h:function(a){var s="LateInitializationError: "+this.a
return s}}
H.N.prototype={
gk:function(a){return this.a.length},
i:function(a,b){return C.a.W(this.a,b)}}
H.j.prototype={}
H.bA.prototype={
gI:function(a){var s=this.d
return s},
A:function(){var s,r=this,q=r.a,p=J.aG(q),o=p.gk(q)
if(r.b!=o)throw H.c(P.bt(q))
s=r.c
if(typeof o!=="number")return H.e(o)
if(s>=o){r.d=null
return!1}r.d=p.J(q,s);++r.c
return!0}}
H.bc.prototype={
gV:function(a){return new H.dC(J.b4(this.a),this.b)},
gk:function(a){return J.aI(this.a)},
J:function(a,b){return this.b.$1(J.kP(this.a,b))}}
H.c3.prototype={$ij:1}
H.dC.prototype={
A:function(){var s=this,r=s.b
if(r.A()){s.a=s.c.$1(r.gI(r))
return!0}s.a=null
return!1},
gI:function(a){var s=this.a
return s}}
H.cy.prototype={
gV:function(a){return new H.ev(J.b4(this.a),this.b)}}
H.ev.prototype={
A:function(){var s,r
for(s=this.a,r=this.b;s.A();)if(r.$1(s.gI(s)))return!0
return!1},
gI:function(a){var s=this.a
return s.gI(s)}}
H.c6.prototype={}
H.eo.prototype={
l:function(a,b,c){throw H.c(P.r("Cannot modify an unmodifiable list"))}}
H.bJ.prototype={}
H.bZ.prototype={
h:function(a){return P.l1(this)},
l:function(a,b,c){H.nN()},
$iE:1}
H.c_.prototype={
gk:function(a){return this.a},
bP:function(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bP(0,b))return null
return this.cp(b)},
cp:function(a){return this.b[a]},
t:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cp(q))}}}
H.il.prototype={
ad:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dM.prototype={
h:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dw.prototype={
h:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.en.prototype={
h:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hR.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.f9.prototype={
h:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.br.prototype={
h:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nc(r==null?"unknown":r)+"'"},
ght:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ic.prototype={}
H.i9.prototype={
h:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nc(s)+"'"}}
H.bX.prototype={
w:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bX))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gS:function(a){var s,r=this.c
if(r==null)s=H.cn(this.a)
else s=typeof r!=="object"?J.a8(r):H.cn(r)
return(s^H.cn(this.b))>>>0},
h:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.dV(s))+"'")}}
H.dZ.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.P.prototype={
gk:function(a){return this.a},
gac:function(a){return new H.cd(this)},
ghs:function(a){return H.o0(this.gac(this),new H.hC(this))},
bP:function(a,b){var s=this.b
if(s==null)return!1
return this.dW(s,b)},
i:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b4(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b4(p,b)
q=r==null?n:r.b
return q}else return o.h_(b)},
h_:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cq(p,q.cV(a))
r=q.cW(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cj(s==null?q.b=q.bB():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cj(r==null?q.c=q.bB():r,b,c)}else q.h0(b,c)},
h0:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bB()
s=p.cV(a)
r=p.cq(o,s)
if(r==null)p.bG(o,s,[p.bC(a,b)])
else{q=p.cW(r,a)
if(q>=0)r[q].b=b
else r.push(p.bC(a,b))}},
t:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bt(s))
r=r.c}},
cj:function(a,b,c){var s=this.b4(a,b)
if(s==null)this.bG(a,b,this.bC(b,c))
else s.b=c},
bC:function(a,b){var s=this,r=new H.hF(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
cV:function(a){return J.a8(a)&0x3ffffff},
cW:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.u(a[r].a,b))return r
return-1},
h:function(a){return P.l1(this)},
b4:function(a,b){return a[b]},
cq:function(a,b){return a[b]},
bG:function(a,b,c){a[b]=c},
dZ:function(a,b){delete a[b]},
dW:function(a,b){return this.b4(a,b)!=null},
bB:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bG(r,s,r)
this.dZ(r,s)
return r}}
H.hC.prototype={
$1:function(a){return this.a.i(0,a)},
$S:function(){return H.ph(this.a).af("2(1)")}}
H.hF.prototype={}
H.cd.prototype={
gk:function(a){return this.a.a},
gV:function(a){var s=this.a,r=new H.dB(s,s.r)
r.c=s.e
return r}}
H.dB.prototype={
gI:function(a){return this.d},
A:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bt(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jJ.prototype={
$1:function(a){return this.a(a)},
$S:13}
H.jK.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jL.prototype={
$1:function(a){return this.a(a)}}
H.du.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im8:1}
H.cj.prototype={$icj:1}
H.R.prototype={$iR:1}
H.bE.prototype={
gk:function(a){return a.length},
$ip:1}
H.bd.prototype={
i:function(a,b){H.aF(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$il:1}
H.ck.prototype={
l:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$il:1}
H.dH.prototype={
i:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.dI.prototype={
i:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.dJ.prototype={
i:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.dK.prototype={
i:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.dL.prototype={
i:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.cl.prototype={
gk:function(a){return a.length},
i:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.bF.prototype={
gk:function(a){return a.length},
i:function(a,b){H.aF(b,a,a.length)
return a[b]},
$ibF:1,
$ibh:1}
H.cE.prototype={}
H.cF.prototype={}
H.cG.prototype={}
H.cH.prototype={}
H.ak.prototype={
af:function(a){return H.fm(v.typeUniverse,this,a)},
bl:function(a){return H.oQ(v.typeUniverse,this,a)}}
H.eM.prototype={}
H.eH.prototype={
h:function(a){return this.a}}
H.cP.prototype={}
P.j1.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:14}
P.j0.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.j2.prototype={
$0:function(){this.a.$0()}}
P.j3.prototype={
$0:function(){this.a.$0()}}
P.cO.prototype={
dB:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bR(new P.jg(this,b),0),a)
else throw H.c(P.r("`setTimeout()` not found."))},
dC:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bR(new P.jf(this,a,Date.now(),b),0),a)
else throw H.c(P.r("Periodic timer."))},
$icr:1}
P.jg.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jf.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.ds(s,o)}q.c=p
r.d.$1(q)}}
P.bM.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bN.prototype={
gI:function(a){var s=this.c
if(s==null)return this.b
return s.gI(s)},
A:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.A())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bM){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.b(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.b4(s)
if(o instanceof P.bN){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cL.prototype={
gV:function(a){return new P.bN(this.a())}}
P.ew.prototype={}
P.e7.prototype={}
P.e8.prototype={}
P.cr.prototype={}
P.jl.prototype={}
P.jt.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.a4(this.b)
throw s}}
P.j9.prototype={
hn:function(a){var s,r,q,p=null
try{if(C.f===$.at){a.$0()
return}P.pu(p,p,this,a)}catch(q){s=H.b0(q)
r=H.lq(q)
P.mQ(p,p,this,s,r)}},
ho:function(a,b){var s,r,q,p=null
try{if(C.f===$.at){a.$1(b)
return}P.pv(p,p,this,a,b)}catch(q){s=H.b0(q)
r=H.lq(q)
P.mQ(p,p,this,s,r)}},
hp:function(a,b){return this.ho(a,b,t.z)},
fC:function(a){return new P.ja(this,a)},
cJ:function(a,b){return new P.jb(this,a,b)}}
P.ja.prototype={
$0:function(){return this.a.hn(this.b)}}
P.jb.prototype={
$1:function(a){return this.a.hp(this.b,a)},
$S:function(){return this.c.af("~(0)")}}
P.cA.prototype={
gV:function(a){var s=new P.cB(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
a3:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.dV(b)
return r}},
dV:function(a){var s=this.d
if(s==null)return!1
return this.bs(s[this.bo(a)],a)>=0},
j:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cm(s==null?q.b=P.l8():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cm(r==null?q.c=P.l8():r,b)}else return q.dG(0,b)},
dG:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.l8()
s=q.bo(b)
r=p[s]
if(r==null)p[s]=[q.bn(b)]
else{if(q.bs(r,b)>=0)return!1
r.push(q.bn(b))}return!0},
E:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.eY(this.c,b)
else return this.eX(0,b)},
eX:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bo(b)
r=n[s]
q=o.bs(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cC(p)
return!0},
cm:function(a,b){if(a[b]!=null)return!1
a[b]=this.bn(b)
return!0},
eY:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cC(s)
delete a[b]
return!0},
ct:function(){this.r=1073741823&this.r+1},
bn:function(a){var s,r=this,q=new P.j8(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.ct()
return q},
cC:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.ct()},
bo:function(a){return J.a8(a)&1073741823},
bs:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.u(a[r].a,b))return r
return-1}}
P.j8.prototype={}
P.cB.prototype={
gI:function(a){return this.d},
A:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bt(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.ca.prototype={}
P.hG.prototype={
$2:function(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:4}
P.ce.prototype={$ij:1,$ih:1,$il:1}
P.C.prototype={
gV:function(a){return new H.bA(a,this.gk(a))},
J:function(a,b){return this.i(a,b)},
gcX:function(a){return this.gk(a)===0},
c5:function(a){var s,r,q,p,o=this
if(o.gcX(a)){s=J.kW(0)
return s}r=o.i(a,0)
q=P.hH(o.gk(a),r,!0)
p=1
while(!0){s=o.gk(a)
if(typeof s!=="number")return H.e(s)
if(!(p<s))break
s=o.i(a,p)
if(p>=q.length)return H.b(q,p)
q[p]=s;++p}return q},
fR:function(a,b,c,d){var s
P.aQ(b,c,this.gk(a))
for(s=b;s<c;++s)this.l(a,s,d)},
h:function(a){return P.kV(a,"[","]")}}
P.cg.prototype={}
P.hK.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:15}
P.as.prototype={
t:function(a,b){var s,r
for(s=J.b4(this.gac(a));s.A();){r=s.gI(s)
b.$2(r,this.i(a,r))}},
gk:function(a){return J.aI(this.gac(a))},
h:function(a){return P.l1(a)},
$iE:1}
P.fn.prototype={
l:function(a,b,c){throw H.c(P.r("Cannot modify unmodifiable map"))}}
P.ch.prototype={
i:function(a,b){return J.ly(this.a,b)},
l:function(a,b,c){J.kN(this.a,b,c)},
t:function(a,b){J.kQ(this.a,b)},
gk:function(a){return J.aI(this.a)},
h:function(a){return J.a4(this.a)},
$iE:1}
P.bK.prototype={}
P.cI.prototype={
h:function(a){return P.kV(this,"{","}")},
J:function(a,b){var s,r,q,p="index"
P.nE(b,p)
P.m7(b,p)
for(s=P.oA(this,this.r),r=0;s.A();){q=s.d
if(b===r)return q;++r}throw H.c(P.I(b,this,p,null,r))},
$ij:1,
$ih:1}
P.cC.prototype={}
P.cS.prototype={}
P.iK.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.b0(r)}return null}}
P.iL.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.b0(r)}return null}}
P.fI.prototype={
h3:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.aQ(a2,a3,a1.length)
if(a3==null)throw H.c(P.m6("Invalid range"))
s=$.nu()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.H(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.jI(C.a.H(a1,l))
h=H.jI(C.a.H(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.b(s,g)
f=s[g]
if(f>=0){g=C.a.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.X("")
e=p}else e=p
d=e.a+=C.a.u(a1,q,r)
e.a=d+H.az(k)
q=l
continue}}throw H.c(P.Y("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.u(a1,q,a3)
d=e.length
if(o>=0)P.lA(a1,n,a3,o,m,d)
else{c=C.c.b1(d-1,4)+1
if(c===1)throw H.c(P.Y(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aJ(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.lA(a1,n,a3,o,m,b)
else{c=C.c.b1(b,4)
if(c===1)throw H.c(P.Y(a,a1,a3))
if(c>1)a1=C.a.aJ(a1,a3,a3,c===2?"==":"=")}return a1}}
P.fJ.prototype={}
P.da.prototype={}
P.dd.prototype={}
P.h0.prototype={}
P.iI.prototype={
gfQ:function(){return C.I}}
P.iM.prototype={
bQ:function(a){var s,r,q,p=P.aQ(0,null,a.length)
if(p==null)throw H.c(P.m6("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.jk(r)
if(q.e8(a,0,p)!==p){J.nA(a,p-1)
q.bI()}return new Uint8Array(r.subarray(0,H.pa(0,q.b,r.length)))}}
P.jk.prototype={
bI:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.b(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.b(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.b(r,q)
r[q]=189},
ft:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bI()
return!1}},
e8:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.W(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.H(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.ft(p,C.a.H(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bI()}else if(p<=2047){o=l.b
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
P.iJ.prototype={
bQ:function(a){var s=this.a,r=P.op(s,a,0,null)
if(r!=null)return r
return new P.jj(s).fI(a,0,null,!0)}}
P.jj.prototype={
fI:function(a,b,c,d){var s,r,q,p,o=this,n=P.aQ(b,c,J.aI(a))
if(b===n)return""
s=P.p4(a,b,n)
if(typeof n!=="number")return n.v()
n-=b
r=o.bp(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.p5(q)
o.b=0
throw H.c(P.Y(p,a,b+o.c))}return r},
bp:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.v()
if(c-b>1000){s=C.c.ag(b+c,2)
r=q.bp(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bp(a,s,c,d)}return q.fL(a,b,c,d)},
fL:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.X(""),f=b+1,e=a.length
if(b<0||b>=e)return H.b(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.H("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.H(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.az(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.az(j)
break
case 65:g.a+=H.az(j);--f
break
default:p=g.a+=H.az(j)
g.a=p+H.az(j)
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
g.a+=H.az(a[l])}else g.a+=P.ea(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.az(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.bl.prototype={}
P.ab.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
aC:function(a,b){return C.c.aC(this.a,b.a)},
gS:function(a){var s=this.a
return(s^C.c.aA(s,30))&1073741823},
h:function(a){var s=this,r=P.nO(H.o9(s)),q=P.df(H.o7(s)),p=P.df(H.o3(s)),o=P.df(H.o4(s)),n=P.df(H.o6(s)),m=P.df(H.o8(s)),l=P.nP(H.o5(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.a1.prototype={}
P.b7.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.b7&&this.a===b.a},
gS:function(a){return C.c.gS(this.a)},
aC:function(a,b){return C.c.aC(this.a,b.a)},
h:function(a){var s,r,q,p=new P.fZ(),o=this.a
if(o<0)return"-"+new P.b7(0-o).h(0)
s=p.$1(C.c.ag(o,6e7)%60)
r=p.$1(C.c.ag(o,1e6)%60)
q=new P.fY().$1(o%1e6)
return""+C.c.ag(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
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
P.G.prototype={}
P.d4.prototype={
h:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.h2(s)
return"Assertion failed"}}
P.dN.prototype={
h:function(a){return"Throw of null."}}
P.af.prototype={
gbr:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbq:function(){return""},
h:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbr()+o+m
if(!q.a)return l
s=q.gbq()
r=P.h2(q.b)
return l+s+": "+r}}
P.bI.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.dn.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var s,r=this.b
if(typeof r!=="number")return r.a0()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gk:function(a){return this.f}}
P.ep.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.em.prototype={
h:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.e5.prototype={
h:function(a){return"Bad state: "+this.a}}
P.dc.prototype={
h:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h2(s)+"."}}
P.dQ.prototype={
h:function(a){return"Out of Memory"},
$iG:1}
P.cq.prototype={
h:function(a){return"Stack Overflow"},
$iG:1}
P.de.prototype={
h:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.eJ.prototype={
h:function(a){return"Exception: "+this.a}}
P.h8.prototype={
h:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.u(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.H(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.W(d,o)
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
return f+j+h+i+"\n"+C.a.n(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.o.prototype={}
P.h.prototype={
gk:function(a){var s,r=this.gV(this)
for(s=0;r.A();)++s
return s},
J:function(a,b){var s,r,q
P.m7(b,"index")
for(s=this.gV(this),r=0;s.A();){q=s.gI(s)
if(b===r)return q;++r}throw H.c(P.I(b,this,"index",null,r))},
h:function(a){return P.nS(this,"(",")")}}
P.dr.prototype={}
P.l.prototype={$ij:1,$ih:1}
P.E.prototype={}
P.aj.prototype={
gS:function(a){return P.J.prototype.gS.call(C.L,this)},
h:function(a){return"null"}}
P.U.prototype={}
P.J.prototype={constructor:P.J,$iJ:1,
w:function(a,b){return this===b},
gS:function(a){return H.cn(this)},
h:function(a){return"Instance of '"+H.f(H.dV(this))+"'"},
toString:function(){return this.h(this)}}
P.z.prototype={}
P.X.prototype={
gk:function(a){return this.a.length},
h:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.iG.prototype={
$2:function(a,b){var s,r,q,p=J.lp(b).cU(b,"=")
if(p===-1){if(b!=="")J.kN(a,P.lh(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.u(b,0,p)
r=C.a.aM(b,p+1)
q=this.a
J.kN(a,P.lh(s,0,s.length,q,!0),P.lh(r,0,r.length,q,!0))}return a}}
P.iD.prototype={
$2:function(a,b){throw H.c(P.Y("Illegal IPv4 address, "+a,this.a,b))}}
P.iE.prototype={
$2:function(a,b){throw H.c(P.Y("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iF.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.jM(C.a.u(this.b,a,b),16)
if(typeof s!=="number")return s.a0()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bj.prototype={
gb6:function(){var s,r,q,p=this,o=p.x
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
else o=H.v(H.l_("Field '_text' has been assigned during initialization."))}return o},
gS:function(a){var s=this,r=s.z
if(r==null){r=C.a.gS(s.gb6())
if(s.z==null)s.z=r
else r=H.v(H.l_("Field 'hashCode' has been assigned during initialization."))}return r},
gaH:function(){var s=this,r=s.Q
if(r==null){r=new P.bK(P.mm(s.gaY(s)),t.Q)
if(s.Q==null)s.Q=r
else r=H.v(H.l_("Field 'queryParameters' has been assigned during initialization."))}return r},
gdj:function(){return this.b},
gbV:function(a){var s=this.c
if(s==null)return""
if(C.a.aa(s,"["))return C.a.u(s,1,s.length-1)
return s},
gbf:function(a){var s=this.d
return s==null?P.mG(this.a):s},
gaY:function(a){var s=this.f
return s==null?"":s},
gbU:function(){var s=this.r
return s==null?"":s},
c3:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.aa(s,"/"))s="/"+s
q=s
p=P.lf(null,0,0,b)
return new P.bj(n,l,j,k,q,p,o.r)},
gcQ:function(){return this.c!=null},
gcT:function(){return this.f!=null},
gcR:function(){return this.r!=null},
h:function(a){return this.gb6()},
w:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbi()&&s.c!=null===b.gcQ()&&s.b===b.gdj()&&s.gbV(s)===b.gbV(b)&&s.gbf(s)===b.gbf(b)&&s.e===b.gd7(b)&&s.f!=null===b.gcT()&&s.gaY(s)===b.gaY(b)&&s.r!=null===b.gcR()&&s.gbU()===b.gbU()},
$ieq:1,
gbi:function(){return this.a},
gd7:function(a){return this.e}}
P.ji.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.li(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.li(C.h,b,C.e,!0))}}}
P.jh.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.b4(b),r=this.a;s.A();)r.$2(a,s.gI(s))}}
P.iC.prototype={
gdi:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.b(m,0)
s=o.a
m=m[0]+1
r=C.a.bc(s,"?",m)
q=s.length
if(r>=0){p=P.cT(s,r+1,q,C.j,!1)
q=r}else p=n
m=o.c=new P.eC("data","",n,n,P.cT(s,m,q,C.u,!1),p,n)}return m},
h:function(a){var s,r=this.b
if(0>=r.length)return H.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.jp.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jo.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.b(s,a)
s=s[a]
J.nC(s,0,96,b)
return s},
$S:16}
P.jq.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.H(b,q)^96
if(p>=r)return H.b(a,p)
a[p]=c}}}
P.jr.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.H(b,0),r=C.a.H(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.b(a,p)
a[p]=c}}}
P.f3.prototype={
gcQ:function(){return this.c>0},
gcS:function(){return this.c>0&&this.d+1<this.e},
gcT:function(){return this.f<this.r},
gcR:function(){return this.r<this.a.length},
gcr:function(){return this.b===4&&C.a.aa(this.a,"http")},
gcs:function(){return this.b===5&&C.a.aa(this.a,"https")},
gbi:function(){var s=this.x
return s==null?this.x=this.dU():s},
dU:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gcr())return"http"
if(s.gcs())return"https"
if(r===4&&C.a.aa(s.a,"file"))return"file"
if(r===7&&C.a.aa(s.a,"package"))return"package"
return C.a.u(s.a,0,r)},
gdj:function(){var s=this.c,r=this.b+3
return s>r?C.a.u(this.a,r,s-1):""},
gbV:function(a){var s=this.c
return s>0?C.a.u(this.a,s,this.d):""},
gbf:function(a){var s=this
if(s.gcS())return P.jM(C.a.u(s.a,s.d+1,s.e),null)
if(s.gcr())return 80
if(s.gcs())return 443
return 0},
gd7:function(a){return C.a.u(this.a,this.e,this.f)},
gaY:function(a){var s=this.f,r=this.r
return s<r?C.a.u(this.a,s+1,r):""},
gbU:function(){var s=this.r,r=this.a
return s<r.length?C.a.aM(r,s+1):""},
gaH:function(){var s=this
if(s.f>=s.r)return C.Q
return new P.bK(P.mm(s.gaY(s)),t.Q)},
c3:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbi(),k=l==="file",j=n.c,i=j>0?C.a.u(n.a,n.b+3,j):"",h=n.gcS()?n.gbf(n):m
j=n.c
if(j>0)s=C.a.u(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.u(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.aa(r,"/"))r="/"+r
p=P.lf(m,0,0,b)
q=n.r
o=q<j.length?C.a.aM(j,q+1):m
return new P.bj(l,i,s,h,r,p,o)},
gS:function(a){var s=this.y
return s==null?this.y=C.a.gS(this.a):s},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.h(0)},
h:function(a){return this.a},
$ieq:1}
P.eC.prototype={}
W.m.prototype={}
W.fB.prototype={
gk:function(a){return a.length}}
W.d2.prototype={
h:function(a){return String(a)}}
W.d3.prototype={
h:function(a){return String(a)}}
W.b5.prototype={$ib5:1}
W.b6.prototype={
dl:function(a,b,c){var s=a.getContext(b,P.pI(c))
return s},
$ib6:1}
W.ap.prototype={
gk:function(a){return a.length}}
W.fR.prototype={
gk:function(a){return a.length}}
W.F.prototype={$iF:1}
W.c0.prototype={
gk:function(a){return a.length}}
W.fS.prototype={}
W.ag.prototype={}
W.aw.prototype={}
W.fT.prototype={
gk:function(a){return a.length}}
W.fU.prototype={
gk:function(a){return a.length}}
W.fV.prototype={
gk:function(a){return a.length}}
W.fW.prototype={
h:function(a){return String(a)}}
W.c1.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.c2.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gat(a))+" x "+H.f(this.gaq(a))},
w:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.bn(b)
s=a.left==s.gbe(b)&&a.top==s.gbh(b)&&this.gat(a)==s.gat(b)&&this.gaq(a)==s.gaq(b)}else s=!1
return s},
gS:function(a){return W.my(J.a8(a.left),J.a8(a.top),J.a8(this.gat(a)),J.a8(this.gaq(a)))},
gcK:function(a){return a.bottom},
gaq:function(a){return a.height},
gbe:function(a){return a.left},
gdd:function(a){return a.right},
gbh:function(a){return a.top},
gat:function(a){return a.width},
$iad:1}
W.dg.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.fX.prototype={
gk:function(a){return a.length}}
W.ez.prototype={
gcX:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
i:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
this.a.replaceChild(c,s[b])},
j:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var s=this.c5(this)
return new J.a9(s,s.length)}}
W.M.prototype={
gcM:function(a){return new W.ez(a,a.children)},
gcN:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.a0()
if(q<0)q=-q*0
if(typeof p!=="number")return p.a0()
if(p<0)p=-p*0
return new P.ad(s,r,q,p,t.q)},
h:function(a){return a.localName},
$iM:1}
W.i.prototype={$ii:1}
W.d.prototype={
fw:function(a,b,c,d){if(c!=null)this.dH(a,b,c,!1)},
dH:function(a,b,c,d){return a.addEventListener(b,H.bR(c,1),!1)},
$id:1}
W.aq.prototype={$iaq:1}
W.bv.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1,
$ibv:1}
W.dj.prototype={
gk:function(a){return a.length}}
W.dl.prototype={
gk:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.ha.prototype={
gk:function(a){return a.length}}
W.b8.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.c8.prototype={$ic8:1}
W.bx.prototype={$ibx:1}
W.ba.prototype={$iba:1}
W.hI.prototype={
h:function(a){return String(a)}}
W.hM.prototype={
gk:function(a){return a.length}}
W.bB.prototype={$ibB:1}
W.dE.prototype={
i:function(a,b){return P.b_(a.get(b))},
t:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b_(s.value[1]))}},
gac:function(a){var s=[]
this.t(a,new W.hN(s))
return s},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.r("Not supported"))},
$iE:1}
W.hN.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dF.prototype={
i:function(a,b){return P.b_(a.get(b))},
t:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b_(s.value[1]))}},
gac:function(a){var s=[]
this.t(a,new W.hO(s))
return s},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.r("Not supported"))},
$iE:1}
W.hO.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aN.prototype={$iaN:1}
W.dG.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.ac.prototype={$iac:1}
W.ey.prototype={
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.b(r,b)
s.replaceChild(c,r[b])},
gV:function(a){var s=this.a.childNodes
return new W.c7(s,s.length)},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.b(s,b)
return s[b]}}
W.t.prototype={
hl:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.ny(s,b,a)}catch(q){H.b0(q)}return a},
h:function(a){var s=a.nodeValue
return s==null?this.dq(a):s},
f_:function(a,b,c){return a.replaceChild(b,c)},
$it:1}
W.cm.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.aP.prototype={
gk:function(a){return a.length},
$iaP:1}
W.dT.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.dY.prototype={
i:function(a,b){return P.b_(a.get(b))},
t:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b_(s.value[1]))}},
gac:function(a){var s=[]
this.t(a,new W.i0(s))
return s},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.r("Not supported"))},
$iE:1}
W.i0.prototype={
$2:function(a,b){return this.a.push(a)}}
W.e_.prototype={
gk:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.e1.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.aR.prototype={$iaR:1}
W.e2.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.aS.prototype={
gk:function(a){return a.length},
$iaS:1}
W.e6.prototype={
i:function(a,b){return a.getItem(H.p8(b))},
l:function(a,b,c){a.setItem(b,c)},
t:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gac:function(a){var s=[]
this.t(a,new W.ia(s))
return s},
gk:function(a){return a.length},
$iE:1}
W.ia.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aB.prototype={$iaB:1}
W.aT.prototype={$iaT:1}
W.aC.prototype={$iaC:1}
W.am.prototype={$iam:1}
W.eb.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.ec.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.ig.prototype={
gk:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.bf.prototype={$ibf:1}
W.eg.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.ij.prototype={
gk:function(a){return a.length}}
W.aE.prototype={}
W.iH.prototype={
h:function(a){return String(a)}}
W.et.prototype={
gk:function(a){return a.length}}
W.aW.prototype={
gfN:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.r("deltaY is not supported"))},
gfM:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.r("deltaX is not supported"))},
$iaW:1}
W.bL.prototype={
f1:function(a,b){return a.requestAnimationFrame(H.bR(b,1))},
e_:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.eA.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.cz.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
w:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.bn(b)
s=a.left==s.gbe(b)&&a.top==s.gbh(b)&&a.width==s.gat(b)&&a.height==s.gaq(b)}else s=!1
return s},
gS:function(a){return W.my(J.a8(a.left),J.a8(a.top),J.a8(a.width),J.a8(a.height))},
gaq:function(a){return a.height},
gat:function(a){return a.width}}
W.eN.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.cD.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.f6.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.fe.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ij:1,
$ip:1,
$ih:1,
$il:1}
W.kU.prototype={}
W.eI.prototype={
fh:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nz(s,this.c,r,!1)}}}
W.j5.prototype={
$1:function(a){return this.a.$1(a)}}
W.l7.prototype={}
W.H.prototype={
gV:function(a){return new W.c7(a,this.gk(a))}}
W.c7.prototype={
A:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.ly(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gI:function(a){return this.d}}
W.eB.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f2.prototype={}
W.cJ.prototype={}
W.cK.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.fa.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
P.jc.prototype={
bT:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
b0:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.lk(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ab)return new Date(a.a)
if(t.W.b(a))throw H.c(P.iB("structured clone of RegExp"))
if(t.L.b(a))return a
if(t.d.b(a))return a
if(t.I.b(a))return a
if(t.s.b(a))return a
if(t.o.b(a)||t.t.b(a)||t.M.b(a))return a
if(t.f.b(a)){s=o.bT(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.b(r,s)
r[s]=p
J.kQ(a,new P.jd(n,o))
return n.a}if(t.j.b(a)){s=o.bT(a)
n=o.b
if(s>=n.length)return H.b(n,s)
p=n[s]
if(p!=null)return p
return o.fJ(a,s)}if(t.m.b(a)){s=o.bT(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.b(r,s)
r[s]=p
o.fY(a,new P.je(n,o))
return n.b}throw H.c(P.iB("structured clone of other type"))},
fJ:function(a,b){var s,r=J.aG(a),q=r.gk(a),p=new Array(q),o=this.b
if(b>=o.length)return H.b(o,b)
o[b]=p
if(typeof q!=="number")return H.e(q)
s=0
for(;s<q;++s){o=this.b0(r.i(a,s))
if(s>=p.length)return H.b(p,s)
p[s]=o}return p}}
P.jd.prototype={
$2:function(a,b){this.a.a[a]=this.b.b0(b)},
$S:4}
P.je.prototype={
$2:function(a,b){this.a.b[a]=this.b.b0(b)},
$S:4}
P.ju.prototype={
$2:function(a,b){this.a[a]=b},
$S:4}
P.fd.prototype={
fY:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.dk.prototype={
gb5:function(){return new H.bc(new H.cy(this.b,new P.h6()),new P.h7())},
l:function(a,b,c){var s=this.gb5()
J.nD(s.b.$1(J.kP(s.a,b)),c)},
j:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aI(this.gb5().a)},
i:function(a,b){var s=this.gb5()
return s.b.$1(J.kP(s.a,b))},
gV:function(a){var s=P.l0(this.gb5(),!1)
return new J.a9(s,s.length)}}
P.h6.prototype={
$1:function(a){return t.h.b(a)}}
P.h7.prototype={
$1:function(a){return t.h.a(a)}}
P.f1.prototype={
gdd:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.e(r)
return this.$ti.c.a(s+r)},
gcK:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.e(r)
return this.$ti.c.a(s+r)},
h:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
w:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.q.b(b)){s=n.a
r=J.bn(b)
if(s==r.gbe(b)){q=n.b
if(q==r.gbh(b)){p=n.c
if(typeof s!=="number")return s.m()
if(typeof p!=="number")return H.e(p)
o=n.$ti.c
if(o.a(s+p)===r.gdd(b)){s=n.d
if(typeof q!=="number")return q.m()
if(typeof s!=="number")return H.e(s)
r=o.a(q+s)===r.gcK(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gS:function(a){var s,r=this,q=r.a,p=J.a8(q),o=r.b,n=J.a8(o),m=r.c
if(typeof q!=="number")return q.m()
if(typeof m!=="number")return H.e(m)
s=r.$ti.c
m=C.c.gS(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.m()
if(typeof q!=="number")return H.e(q)
q=C.c.gS(s.a(o+q))
return P.oz(P.j7(P.j7(P.j7(P.j7(0,p),n),m),q))}}
P.ad.prototype={
gbe:function(a){return this.a},
gbh:function(a){return this.b},
gat:function(a){return this.c},
gaq:function(a){return this.d}}
P.bb.prototype={$ibb:1}
P.dz.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ij:1,
$ih:1,
$il:1}
P.be.prototype={$ibe:1}
P.dO.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ij:1,
$ih:1,
$il:1}
P.hT.prototype={
gk:function(a){return a.length}}
P.e9.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ij:1,
$ih:1,
$il:1}
P.k.prototype={
gcM:function(a){return new P.dk(a,new W.ey(a))}}
P.bg.prototype={$ibg:1}
P.eh.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ij:1,
$ih:1,
$il:1}
P.eQ.prototype={}
P.eR.prototype={}
P.eY.prototype={}
P.eZ.prototype={}
P.fb.prototype={}
P.fc.prototype={}
P.fj.prototype={}
P.fk.prototype={}
P.bh.prototype={$ij:1,$ih:1,$il:1}
P.fG.prototype={
gk:function(a){return a.length}}
P.d5.prototype={
i:function(a,b){return P.b_(a.get(b))},
t:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.b_(s.value[1]))}},
gac:function(a){var s=[]
this.t(a,new P.fH(s))
return s},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.r("Not supported"))},
$iE:1}
P.fH.prototype={
$2:function(a,b){return this.a.push(a)}}
P.d6.prototype={
gk:function(a){return a.length}}
P.aJ.prototype={}
P.dP.prototype={
gk:function(a){return a.length}}
P.ex.prototype={}
P.e3.prototype={
gk:function(a){return a.length},
i:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
s=P.b_(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
J:function(a,b){return this.i(a,b)},
$ij:1,
$ih:1,
$il:1}
P.f7.prototype={}
P.f8.prototype={}
K.fC.prototype={
aD:function(a,b){return!0},
h:function(a){return"all"}}
K.dm.prototype={
aD:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)if(s[q].aD(0,b))return!0
return!1},
h:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.x)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.h(0)}return q}}
K.aO.prototype={
aD:function(a,b){return!this.dn(0,b)},
h:function(a){return"!["+this.cb(0)+"]"}}
K.i1.prototype={
du:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.y("May not create a Set with zero characters."))
s=new H.P(t.E)
for(r=new H.bA(a,a.gk(a));r.A();){q=r.d
s.l(0,q,!0)}p=P.l0(s.gac(s),!0)
if(!!p.immutable$list)H.v(P.r("sort"))
H.oj(p,J.pj())
this.a=p},
aD:function(a,b){return C.b.a3(this.a,b)},
h:function(a){return P.ea(this.a,0,null)}}
L.e4.prototype={
D:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.ik(this.a.N(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
fT:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
if(p.aD(0,a))return p}return null},
h:function(a){return this.b},
cB:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.a3(0,l))m+=" (consume)"
for(l=n.d.c,l=l.gac(l),l=l.gV(l);l.A();){r=l.gI(l)
m+="\n"
q=n.d.c.i(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.a3(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.x)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.h(0))}return m.charCodeAt(0)==0?m:m}}
L.ee.prototype={
h:function(a){var s=H.na(this.b,"\n","\\n"),r=H.na(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.ef.prototype={
h:function(a){return this.b}}
L.ih.prototype={
N:function(a,b){var s=this.a.i(0,b)
if(s==null){s=new L.e4(this,b)
s.c=[]
this.a.l(0,b,s)}return s},
b_:function(a){var s=this.b.i(0,a)
if(s==null){s=new L.ef(a)
s.c=new H.P(t.i)
this.b.l(0,a,s)}return s},
dg:function(a){return this.hq(a)},
hq:function(a){var s=this
return P.pr(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$dg(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.b.c1(a0,0)
else{if(!r.A()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.fT(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.ea(b,0,null)
throw H.c(P.y("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.v(P.r("removeRange"))
P.aQ(0,k,b.length)
b.splice(0,k-0)
C.b.fu(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.a3(0,n.a)?7:8
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
if(d.d!=null){g=P.ea(c,0,null)
f=d.d
e=f.c.i(0,g)
n=new L.ee(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.a3(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.ox()
case 1:return P.oy(o)}}},t.ag)},
h:function(a){var s,r=new P.X(""),q=this.d
if(q!=null)r.a=q.cB()+"\n"
for(q=this.a,q=q.ghs(q),q=q.gV(q);q.A();){s=q.gI(q)
if(s!=this.d)r.a+=s.cB()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.ik.prototype={
h:function(a){return this.b.b+": "+this.cb(0)}}
O.bs.prototype={
cc:function(){this.a=[]
this.c=this.b=null},
bj:function(a,b){this.b=null
this.c=a},
eO:function(a){return!0},
dz:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gk:function(a){return this.a.length},
gV:function(a){var s=this.a
return new J.a9(s,s.length)},
J:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.b(s,b)
return s[b]},
j:function(a,b){var s,r
if(this.eO([b])){s=this.a
r=s.length
s.push(b)
this.dz(r,[b])}},
$ih:1}
O.ci.prototype={
gk:function(a){return this.a.length},
gC:function(){var s=this.b
return s==null?this.b=D.O():s},
au:function(){var s=this.b
if(s!=null)s.K(null)},
gal:function(a){var s=this.a
if(s.length>0)return C.b.gar(s)
else return V.hL()},
d9:function(a){var s=this.a
if(a==null)s.push(V.hL())
else s.push(a)
this.au()},
c0:function(){var s=this.a
if(s.length>0){s.pop()
this.au()}}}
E.fK.prototype={}
E.bu.prototype={
sc9:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gC().E(0,q.gd4())
s=q.c
if(s!=null)s.gC().j(0,q.gd4())
r=new D.q("shape",p,q.c)
r.b=!0
q.as(r)}},
saV:function(a){var s,r,q=this
if(!J.u(q.r,a)){s=q.r
if(s!=null)s.gC().E(0,q.gd2())
if(a!=null)a.gC().j(0,q.gd2())
q.r=a
r=new D.q("mover",s,a)
r.b=!0
q.as(r)}},
aK:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aL(0,b,q):null
if(!J.u(o,q.x)){s=q.x
q.x=o
r=new D.q("matrix",s,o)
r.b=!0
q.as(r)}for(p=q.y.a,p=new J.a9(p,p.length);p.A();)p.d.aK(0,b)},
aI:function(a){var s,r,q,p,o,n,m=this,l="Inspection",k="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n",j=2929,i=a.dx,h=m.x,g=i.a
if(h==null)g.push(i.gal(i))
else g.push(h.n(0,i.gal(i)))
i.au()
a.da(m.f)
i=a.dy
s=(i&&C.b).gar(i)
if(s!=null&&m.d!=null){if(s.a==null){r=a.fr.i(0,l)
if(r==null){i=a.a
r=new A.dq(i,l)
r.dv(i,l)
r.c=k
r.d="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
r.e=r.co(k,35633)
r.f=r.co(r.d,35632)
h=i.createProgram()
r.r=h
i.attachShader(h,r.e)
i.attachShader(r.r,r.f)
i.linkProgram(r.r)
if(!i.getProgramParameter(r.r,35714)){q=i.getProgramInfoLog(r.r)
i.deleteProgram(r.r)
H.v(P.y("Failed to link shader: "+H.f(q)))}r.f3()
r.f5()
r.z=r.x.i(0,"posAttr")
r.Q=r.x.i(0,"normAttr")
r.ch=r.x.i(0,"clrAttr")
r.cx=r.x.i(0,"binmAttr")
r.cy=t.r.a(r.y.i(0,"lightVec"))
i=t.b_
r.db=i.a(r.y.i(0,"ambientClr"))
r.dx=i.a(r.y.i(0,"diffuseClr"))
r.dy=t.n.a(r.y.i(0,"weightScalar"))
i=t.cP
r.fr=i.a(r.y.i(0,"viewMat"))
r.fx=i.a(r.y.i(0,"viewObjMatrix"))
r.fy=i.a(r.y.i(0,"projViewObjMatrix"))
if(a.fr.bP(0,l))H.v(P.y('Shader cache already contains a shader by the name "Inspection".'))
a.fr.l(0,l,r)}s.a=r}if(m.e==null){m.d.ab()
i=m.d
h=i.e
if(h!=null)++h.d
i.d.bN()
i.a.bN()
i=i.e
if(i!=null)i.am(0)
i=m.d
h=i.e
if(h!=null)++h.d
i.a.fE()
i=i.e
if(i!=null)i.am(0)
i=new Z.d8()
i.a=new H.P(t.k)
m.e=i}i=s.a
h=a.a
h.useProgram(i.r)
i.x.fP()
g=s.r2
p=i.dy
p.a.uniform1f(p.d,g)
g=s.b
p=i.cy
p.toString
o=g.a
n=g.b
g=g.c
p.a.uniform3f(p.d,o,n,g)
g=a.db
g=g.gal(g)
n=i.fr
n.toString
n.bk(g.c6(0,!0))
g=a.cx
if(g==null){g=a.db
g=g.gal(g)
p=a.dx
p=a.cx=g.n(0,p.gal(p))
g=p}p=i.fx
p.toString
p.bk(g.c6(0,!0))
g=a.ch
if(g==null){g=a.z
if(g==null){g=a.cy
g=g.gal(g)
p=a.db
p=a.z=g.n(0,p.gal(p))
g=p}p=a.dx
p=a.ch=g.n(0,p.gal(p))
g=p}i=i.fy
i.toString
i.bk(g.c6(0,!0))
i=m.e
if(i instanceof Z.d8){h.blendFunc(1,1)
if(m.c==null){h.disable(j)
h.enable(3042)
h.blendFunc(1,1)
if(s.k3)s.cu(a,i,m.d,"Axis",s.gck(),s.z,s.y)
if(s.k4)s.cu(a,i,m.d,"AABB",s.gci(),s.z,s.y)
h.enable(j)
h.blendFunc(770,771)}else{h.enable(j)
h.enable(3042)
h.blendFunc(770,771)
if(s.Q)s.a_(a,i,m.c,"shapeFill",s.gf6(),s.d,s.c)
if(s.id)s.a_(a,i,m.c,"colorFill",s.gdS(),s.x,s.r)
if(s.k1)s.a_(a,i,m.c,"txt2DColor",s.gfi(),s.x,s.r)
if(s.k2)s.a_(a,i,m.c,"weight",s.gfo(),s.x,s.r)
if(s.r1)s.a_(a,i,m.c,"bend1",s.gdM(),s.x,s.r)
h.disable(j)
h.blendFunc(1,1)
if(s.cx)s.a_(a,i,m.c,"vertices",s.gfm(),s.f,s.e)
if(s.fr)s.a_(a,i,m.c,"faceCenters",s.ge2(),s.f,s.e)
if(s.ch)s.a_(a,i,m.c,"wireFrame",s.gfq(),s.f,s.e)
if(s.cy)s.a_(a,i,m.c,"normals",s.geg(),s.f,s.e)
if(s.db)s.a_(a,i,m.c,"binormals",s.gdO(),s.f,s.e)
if(s.dx)s.a_(a,i,m.c,"tangentals",s.gf9(),s.f,s.e)
if(s.dy)s.a_(a,i,m.c,"textureCube",s.gfk(),s.f,s.e)
if(s.fx)s.a_(a,i,m.c,"faceNormals",s.ge4(),s.f,s.e)
if(s.fy)s.a_(a,i,m.c,"faceBinormals",s.ge0(),s.x,s.r)
if(s.go)s.a_(a,i,m.c,"faceTangentals",s.ge6(),s.x,s.r)
if(s.k3)s.a_(a,i,m.c,"Axis",s.gck(),s.z,s.y)
if(s.k4)s.a_(a,i,m.c,"AABB",s.gci(),s.z,s.y)
h.enable(j)
h.blendFunc(770,771)}}else m.e=null
i=s.a
i.toString
h.useProgram(null)
i.x.fO()}for(i=m.y.a,i=new J.a9(i,i.length);i.A();)i.d.aI(a)
a.d8()
a.dx.c0()},
as:function(a){var s=this.z
if(s!=null)s.K(a)},
P:function(){return this.as(null)},
d5:function(a){this.e=null
this.as(a)},
ha:function(){return this.d5(null)},
d3:function(a){this.as(a)},
h9:function(){return this.d3(null)},
d1:function(a){this.as(a)},
h6:function(){return this.d1(null)},
h5:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gd0(),q=0;q<b.length;b.length===s||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c4()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.P()},
h8:function(a,b){var s,r
for(s=b.gV(b),r=this.gd0();s.A();)s.gI(s).gC().E(0,r)
this.P()},
h:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bq.prototype={
h:function(a){return this.b}}
E.bG.prototype={
h:function(a){return this.b}}
E.j4.prototype={}
E.hX.prototype={
dt:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.ab(Date.now(),!1)
r.y=0
r.cx=r.ch=r.z=null
s=new O.ci()
s.a=[]
s.gC().j(0,new E.hY(r))
r.cy=s
s=new O.ci()
s.a=[]
s.gC().j(0,new E.hZ(r))
r.db=s
s=new O.ci()
s.a=[]
s.gC().j(0,new E.i_(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.P(t.G)},
da:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gar(s):a)},
d8:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.hY.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.hZ.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.z=null}}
E.i_.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.ed.prototype={
cf:function(a){this.dc()},
ce:function(){return this.cf(null)},
gfZ:function(){var s,r=this,q=Date.now(),p=C.c.ag(P.lK(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ab(q,!1)
return s/p},
cv:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.n()
if(typeof p!=="number")return H.e(p)
s=C.d.bb(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.n()
r=C.d.bb(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.mh(C.m,q.ghm())}},
dc:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.x.e_(s)
r=W.mS(new E.ie(this),t.H)
r.toString
C.x.f1(s,r)}},
hk:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cv()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ab(p,!1)
q.y=P.lK(p-q.r.a).a*0.000001
p=q.cy
C.b.sk(p.a,0)
p.au()
p=q.db
C.b.sk(p.a,0)
p.au()
p=q.dx
C.b.sk(p.a,0)
p.au()
p=q.dy
p.toString
C.b.sk(p,0)
q.dy.push(null)
m.aI(n.e)}}catch(o){s=H.b0(o)
r=H.lq(o)
P.lt("Error: "+H.f(s))
P.lt("Stack: "+H.f(r))
throw H.c(s)}}}
E.ie.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hk()}}}
Z.eu.prototype={}
Z.fL.prototype={
bL:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.b0(q)
r=P.y('Failed to bind buffer attribute "'+p.a.h(0)+'": '+H.f(s))
throw H.c(r)}},
h:function(a){var s=this
return"["+s.a.h(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.j_.prototype={}
Z.d7.prototype={
ba:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
bL:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].bL(a)},
hr:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aI:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.b(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
d6:function(a){this.bL(a)
this.aI(a)
this.hr(a)},
h:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)o.push(s[q].h(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.a4(s[q]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.D(o,", ")+"\nAttrs:   "+C.b.D(p,", ")}}
Z.d8.prototype={}
Z.c9.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.dV(this.c))+"'")+"]"}}
Z.cx.prototype={
gca:function(a){var s=this.a,r=(s&$.b3().a)!==0?3:0
if((s&$.b2().a)!==0)r+=3
if((s&$.b1().a)!==0)r+=3
if((s&$.bT().a)!==0)r+=2
if((s&$.bU().a)!==0)r+=3
if((s&$.bp().a)!==0)r+=3
if((s&$.d0().a)!==0)r+=4
if((s&$.bV().a)!==0)++r
return(s&$.bS().a)!==0?r+4:r},
fB:function(a){var s,r=$.b3(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.b2()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b1()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bT()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bU()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bp()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d0()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bV()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bS()
if((q&r.a)!==0)if(s===a)return r
return $.nt()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cx))return!1
return this.a===b.a},
h:function(a){var s=[],r=this.a
if((r&$.b3().a)!==0)s.push("Pos")
if((r&$.b2().a)!==0)s.push("Norm")
if((r&$.b1().a)!==0)s.push("Binm")
if((r&$.bT().a)!==0)s.push("Txt2D")
if((r&$.bU().a)!==0)s.push("TxtCube")
if((r&$.bp().a)!==0)s.push("Clr3")
if((r&$.d0().a)!==0)s.push("Clr4")
if((r&$.bV().a)!==0)s.push("Weight")
if((r&$.bS().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.D(s,"|")}}
D.fM.prototype={}
D.c4.prototype={
j:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
E:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.a3(q,b)
if(q===!0){q=r.a
s=(q&&C.b).E(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.a3(q,b)
if(q===!0){q=r.b
s=(q&&C.b).E(q,b)||s}return s},
K:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.W()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.t(P.l0(s,!0),new D.h3(o))
s=p.b
if(s!=null){p.b=[]
C.b.t(s,new D.h4(o))}return!0},
am:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.K(s)}}}}
D.h3.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.h4.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.W.prototype={}
D.by.prototype={}
D.bz.prototype={}
D.q.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.d9.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d9))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.dx.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dx))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.hD.prototype={
hg:function(a){this.c=a.b
this.d.j(0,a.a)
return!1},
hc:function(a){this.c=a.b
this.d.E(0,a.a)
return!1}}
X.cf.prototype={}
X.hJ.prototype={
aN:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.n()
s=b.b
r=o.ch
if(typeof s!=="number")return s.n()
q=m.m(0,new V.S(l*k,s*r))
r=o.a.gaB()
p=new X.bC(a,V.ay(),o.x,r,q)
p.b=!0
o.z=new P.ab(n,!1)
o.x=q
return p},
c_:function(a,b){this.r=a.a
return!1},
aX:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dm()
if(typeof s!=="number")return s.c8()
this.r=(s&~r)>>>0
return!1},
aW:function(a,b){var s=this.d
if(s==null)return!1
s.K(this.aN(a,b))
return!0},
hh:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaB()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.n()
o=a.b
n=m.cy
if(typeof o!=="number")return o.n()
r=new X.bD(new V.a6(q*p,o*n),s,r)
r.b=!0
l.K(r)
return!0},
eD:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cf(c,p.a.gaB(),b)
q.b=!0
r.K(q)
p.y=new P.ab(s,!1)
p.x=V.ay()}}
X.ai.prototype={
w:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.ai))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
h:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bC.prototype={}
X.hP.prototype={
bt:function(a,b,c){var s=this,r=new P.ab(Date.now(),!1),q=s.a.gaB(),p=new X.bC(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
c_:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.K(this.bt(a,b,!0))
return!0},
aX:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dm()
if(typeof r!=="number")return r.c8()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.K(s.bt(a,b,!0))
return!0},
aW:function(a,b){var s=this.d
if(s==null)return!1
s.K(this.bt(a,b,!1))
return!0},
hi:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaB()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.n()
p=a.b
o=n.ch
if(typeof p!=="number")return p.n()
s=new X.bD(new V.a6(r*q,p*o),s,b)
s.b=!0
m.K(s)
return!0},
gcO:function(){var s=this.b
return s==null?this.b=D.O():s},
gdh:function(){var s=this.c
return s==null?this.c=D.O():s},
gd_:function(){var s=this.d
return s==null?this.d=D.O():s}}
X.bD.prototype={}
X.dU.prototype={}
X.cs.prototype={}
X.ii.prototype={
aN:function(a,b){var s=this,r=new P.ab(Date.now(),!1),q=a.length>0?a[0]:V.ay(),p=s.a.gaB(),o=new X.cs(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
hf:function(a){var s=this.b
if(s==null)return!1
s.K(this.aN(a,!0))
return!0},
hd:function(a){var s=this.c
if(s==null)return!1
s.K(this.aN(a,!0))
return!0},
he:function(a){var s=this.d
if(s==null)return!1
s.K(this.aN(a,!1))
return!0}}
X.es.prototype={
gaB:function(){var s=this.a,r=C.l.gcN(s).c
r.toString
s=C.l.gcN(s).d
s.toString
return V.m9(0,0,r,s)},
cn:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.dx(s,new X.ai(r,a.altKey,a.shiftKey))},
az:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ai(r,a.altKey,a.shiftKey)},
bH:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ai(r,a.altKey,a.shiftKey)},
ap:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.v()
if(typeof o!=="number")return H.e(o)
s=r.top
if(typeof p!=="number")return p.v()
if(typeof s!=="number")return H.e(s)
return new V.S(q-o,p-s)},
aO:function(a){return new V.a6(a.movementX,a.movementY)},
bD:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
o=C.d.ai(p.pageX)
C.d.ai(p.pageY)
n=k.left
if(typeof n!=="number")return H.e(n)
C.d.ai(p.pageX)
m=C.d.ai(p.pageY)
l=k.top
if(typeof l!=="number")return H.e(l)
j.push(new V.S(o-n,m-l))}return j},
ao:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.d9(s,new X.ai(r,a.altKey,a.shiftKey))},
bu:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.v()
if(typeof n!=="number")return H.e(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.v()
if(typeof p!=="number")return H.e(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.e(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.e(p)
p=r<p}else p=!1
return p},
ey:function(a){this.f=!0},
el:function(a){this.f=!1},
er:function(a){if(this.f&&this.bu(a))a.preventDefault()},
eC:function(a){var s
if(!this.f)return
s=this.cn(a)
this.b.hg(s)},
eA:function(a){var s
if(!this.f)return
s=this.cn(a)
this.b.hc(s)},
eF:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.az(a)
if(p.x){s=p.ao(a)
r=p.aO(a)
if(p.d.c_(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.ao(a)
q=p.ap(a)
if(p.c.c_(s,q))a.preventDefault()},
eJ:function(a){var s,r,q,p=this
p.az(a)
s=p.ao(a)
if(p.x){r=p.aO(a)
if(p.d.aX(s,r))a.preventDefault()
return}if(p.r)return
q=p.ap(a)
if(p.c.aX(s,q))a.preventDefault()},
ew:function(a){var s,r,q,p=this
if(!p.bu(a)){p.az(a)
s=p.ao(a)
if(p.x){r=p.aO(a)
if(p.d.aX(s,r))a.preventDefault()
return}if(p.r)return
q=p.ap(a)
if(p.c.aX(s,q))a.preventDefault()}},
eH:function(a){var s,r,q,p=this
p.az(a)
s=p.ao(a)
if(p.x){r=p.aO(a)
if(p.d.aW(s,r))a.preventDefault()
return}if(p.r)return
q=p.ap(a)
if(p.c.aW(s,q))a.preventDefault()},
eu:function(a){var s,r,q,p=this
if(!p.bu(a)){p.az(a)
s=p.ao(a)
if(p.x){r=p.aO(a)
if(p.d.aW(s,r))a.preventDefault()
return}if(p.r)return
q=p.ap(a)
if(p.c.aW(s,q))a.preventDefault()}},
eL:function(a){var s,r,q=this
q.az(a)
s=new V.a6((a&&C.w).gfM(a),C.w.gfN(a)).n(0,q.Q)
if(q.x){if(q.d.hh(s))a.preventDefault()
return}if(q.r)return
r=q.ap(a)
if(q.c.hi(s,r))a.preventDefault()},
eN:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ao(q.y)
r=q.ap(q.y)
q.d.eD(s,r,p)}},
eW:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bH(a)
s=r.bD(a)
if(r.e.hf(s))a.preventDefault()},
eS:function(a){var s
this.bH(a)
s=this.bD(a)
if(this.e.hd(s))a.preventDefault()},
eU:function(a){var s
this.bH(a)
s=this.bD(a)
if(this.e.he(s))a.preventDefault()}}
V.aa.prototype={
m:function(a,b){var s=this.a+b.a,r=this.b+b.b,q=this.c+b.c
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aa(s,r,q)},
w:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aa))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
V.A.prototype={
c5:function(a){var s=this
return[s.a,s.b,s.c,s.d]},
w:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.A))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+", "+V.w(s.d,3,0)+"]"}}
V.h1.prototype={}
V.dD.prototype={
c6:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
n:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b5.a
if(typeof b2!=="number")return b2.n()
if(typeof b3!=="number")return H.e(b3)
s=b1.b
r=b5.e
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
q=b1.c
p=b5.y
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.e(p)
o=b1.d
n=b5.cx
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
d=b5.x
c=b5.ch
b=b5.dx
a=b1.e
if(typeof a!=="number")return a.n()
a0=b1.f
if(typeof a0!=="number")return a0.n()
a1=b1.r
if(typeof a1!=="number")return a1.n()
a2=b1.x
a3=b1.y
if(typeof a3!=="number")return a3.n()
a4=b1.z
if(typeof a4!=="number")return a4.n()
a5=b1.Q
if(typeof a5!=="number")return a5.n()
a6=b1.ch
a7=b1.cx
a8=b1.cy
a9=b1.db
b0=b1.dx
return V.aM(b2*b3+s*r+q*p+o*n,b2*m+s*l+q*k+o*j,b2*i+s*h+q*g+o*f,b2*e+s*d+q*c+o*b,a*b3+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*b3+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*b3+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
w:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.dD))return!1
s=b.a
r=q.a
$.B().toString
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.d-q.d)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.x-q.x)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.z
r=q.z
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.Q
r=q.Q
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.ch-q.ch)<1e-9))return!1
if(!(Math.abs(b.cx-q.cx)<1e-9))return!1
if(!(Math.abs(b.cy-q.cy)<1e-9))return!1
if(!(Math.abs(b.db-q.db)<1e-9))return!1
if(!(Math.abs(b.dx-q.dx)<1e-9))return!1
return!0},
h:function(a){return this.M()},
G:function(a){var s,r,q,p,o,n=this,m=V.jE([n.a,n.e,n.y,n.cx],3,0),l=V.jE([n.b,n.f,n.z,n.cy],3,0),k=V.jE([n.c,n.r,n.Q,n.db],3,0),j=V.jE([n.d,n.x,n.ch,n.dx],3,0),i=m.length
if(0>=i)return H.b(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.b(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.b(k,0)
s=s+k[0]+", "
p=j.length
if(0>=p)return H.b(j,0)
s=s+j[0]+",\n"
o=a+" "
if(1>=i)return H.b(m,1)
o=o+m[1]+", "
if(1>=r)return H.b(l,1)
o=o+l[1]+", "
if(1>=q)return H.b(k,1)
o=o+k[1]+", "
if(1>=p)return H.b(j,1)
o=s+(o+j[1]+",\n")
s=a+" "
if(2>=i)return H.b(m,2)
s=s+m[2]+", "
if(2>=r)return H.b(l,2)
s=s+l[2]+", "
if(2>=q)return H.b(k,2)
s=s+k[2]+", "
if(2>=p)return H.b(j,2)
s=o+(s+j[2]+",\n")
o=a+" "
if(3>=i)return H.b(m,3)
o=o+m[3]+", "
if(3>=r)return H.b(l,3)
o=o+l[3]+", "
if(3>=q)return H.b(k,3)
o=o+k[3]+", "
if(3>=p)return H.b(j,3)
return s+(o+j[3]+"]")},
M:function(){return this.G("")}}
V.S.prototype={
a5:function(a){return new V.a6(a.a-this.a,a.b-this.b)},
m:function(a,b){return new V.S(this.a+b.a,this.b+b.b)},
F:function(a,b){$.B().toString
if(Math.abs(b-0)<1e-9)return V.ay()
return new V.S(this.a/b,this.b/b)},
w:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.D.prototype={
m:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.m()
if(typeof n!=="number")return H.e(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.e(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.e(p)
return new V.D(o+n,s+r,q+p)},
v:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.v()
if(typeof n!=="number")return H.e(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.v()
if(typeof p!=="number")return H.e(p)
return new V.D(o-n,s-r,q-p)},
n:function(a,b){var s,r,q=this.a
if(typeof q!=="number")return q.n()
s=this.b
if(typeof s!=="number")return s.n()
r=this.c
if(typeof r!=="number")return r.n()
return new V.D(q*b,s*b,r*b)},
F:function(a,b){var s,r,q
$.B().toString
if(Math.abs(b-0)<1e-9)return V.lZ()
s=this.a
if(typeof s!=="number")return s.F()
r=this.b
if(typeof r!=="number")return r.F()
q=this.c
if(typeof q!=="number")return q.F()
return new V.D(s/b,r/b,q/b)},
w:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.D))return!1
s=b.a
r=q.a
$.B().toString
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
V.a5.prototype={
w:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a5))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+", "+V.w(s.d,3,0)+"]"}}
V.dX.prototype={
ga9:function(){var s=this.c,r=this.d
return s>r?r:s},
w:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dX))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+", "+V.w(s.d,3,0)+"]"}}
V.co.prototype={
w:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.co))return!1
s=b.a
r=q.a
$.B().toString
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.d-q.d)<1e-9))return!1
if(!(Math.abs(b.e-q.e)<1e-9))return!1
if(!(Math.abs(b.f-q.f)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+", "+V.w(s.d,3,0)+", "+V.w(s.e,3,0)+", "+V.w(s.f,3,0)+"]"}}
V.a6.prototype={
aU:function(a){return Math.sqrt(this.a4(this))},
a4:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.e(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
return q*p+s*r},
n:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.n()
if(typeof b!=="number")return H.e(b)
s=this.b
if(typeof s!=="number")return s.n()
return new V.a6(r*b,s*b)},
F:function(a,b){var s,r
$.B().toString
if(Math.abs(b-0)<1e-9){s=$.mo
return s==null?$.mo=new V.a6(0,0):s}s=this.a
if(typeof s!=="number")return s.F()
r=this.b
if(typeof r!=="number")return r.F()
return new V.a6(s/b,r/b)},
w:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
s=b.a
r=this.a
$.B().toString
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.n.prototype={
aU:function(a){return Math.sqrt(this.a4(this))},
a4:function(a){var s,r,q,p,o=this.a,n=a.a
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.e(n)
s=this.b
r=a.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.e(p)
return o*n+s*r+q*p},
bW:function(a,b){return new V.n(V.fz(this.a,a.a,b),V.fz(this.b,a.b,b),V.fz(this.c,a.c,b))},
B:function(){var s=this,r=Math.sqrt(s.a4(s))
if(r===1)return s
return s.F(0,r)},
ah:function(a){var s,r,q,p,o=this.b,n=a.c
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.e(n)
s=this.c
r=a.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
q=a.a
if(typeof q!=="number")return H.e(q)
p=this.a
if(typeof p!=="number")return p.n()
return new V.n(o*n-s*r,s*q-p*n,p*r-o*q)},
m:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.m()
if(typeof n!=="number")return H.e(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.e(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.e(p)
return new V.n(o+n,s+r,q+p)},
L:function(a){var s,r,q=this.a
if(typeof q!=="number")return q.L()
s=this.b
if(typeof s!=="number")return s.L()
r=this.c
if(typeof r!=="number")return r.L()
return new V.n(-q,-s,-r)},
n:function(a,b){var s,r,q=this.a
if(typeof q!=="number")return q.n()
s=this.b
if(typeof s!=="number")return s.n()
r=this.c
if(typeof r!=="number")return r.n()
return new V.n(q*b,s*b,r*b)},
F:function(a,b){var s,r,q
$.B().toString
if(Math.abs(b-0)<1e-9)return V.K()
s=this.a
if(typeof s!=="number")return s.F()
r=this.b
if(typeof r!=="number")return r.F()
q=this.c
if(typeof q!=="number")return q.F()
return new V.n(s/b,r/b,q/b)},
cY:function(){var s=this.a
$.B().toString
if(typeof s!=="number")return H.e(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.b
if(typeof s!=="number")return H.e(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.c
if(typeof s!=="number")return H.e(s)
if(!(Math.abs(0-s)<1e-9))return!1
return!0},
w:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.n))return!1
s=b.a
r=q.a
$.B().toString
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.e(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
V.aV.prototype={
aU:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
F:function(a,b){var s,r=this
$.B().toString
if(Math.abs(b-0)<1e-9){s=$.mv
return s==null?$.mv=new V.aV(0,0,0,0):s}return new V.aV(r.a/b,r.b/b,r.c/b,r.d/b)},
w:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aV))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+", "+V.w(s.d,3,0)+"]"}}
U.fQ.prototype={
bm:function(a){var s=V.q1(a,this.c,this.b)
return s},
gC:function(){var s=this.y
return s==null?this.y=D.O():s},
O:function(a){var s=this.y
if(s!=null)s.K(a)},
sc7:function(a,b){},
sbX:function(a){var s,r=this,q=r.b
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bm(s)}q=new D.q("maximumLocation",q,r.b)
q.b=!0
r.O(q)}},
sbZ:function(a){var s,r=this,q=r.c
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bm(s)}q=new D.q("minimumLocation",q,r.c)
q.b=!0
r.O(q)}},
sT:function(a,b){var s,r=this
b=r.bm(b)
s=r.d
$.B().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.q("location",s,b)
s.b=!0
r.O(s)}},
sbY:function(a){var s,r,q=this,p=q.e
$.B().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.q("maximumVelocity",p,a)
p.b=!0
q.O(p)}},
sU:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.q("velocity",r,a)
r.b=!0
s.O(r)}},
sbS:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.B().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.q("dampening",s,a)
s.b=!0
this.O(s)}},
aK:function(a,b){var s,r,q,p=this,o=p.f
$.B().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sT(0,p.d+s*b)
o=p.x
$.B().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sU(s)}}}
U.bY.prototype={
gC:function(){var s=this.b
return s==null?this.b=D.O():s},
aL:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bY))return!1
return J.u(this.a,b.a)},
h:function(a){return"Constant: "+this.a.G("          ")}}
U.bw.prototype={
gC:function(){var s=this.e
return s==null?this.e=D.O():s},
O:function(a){var s=this.e
if(s!=null)s.K(a)},
a7:function(){return this.O(null)},
ej:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gay(),q=0;q<b.length;b.length===s||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.gC()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.by()
s.b=!0
this.O(s)},
eQ:function(a,b){var s,r
for(s=b.gV(b),r=this.gay();s.A();)s.gI(s).gC().E(0,r)
s=new D.bz()
s.b=!0
this.O(s)},
aL:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.a0()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a9(p,p.length),s=null;p.A();){o=p.d
if(o!=null){r=o.aL(0,b,c)
if(r!=null)s=s==null?r:r.n(0,s)}}q.f=s==null?V.hL():s
p=q.e
if(p!=null)p.am(0)}return q.f},
w:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bw))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.b(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.b(p,r)
if(!J.u(q,p[r]))return!1}return!0},
h:function(a){return"Group"},
$iZ:1}
U.Z.prototype={}
U.ct.prototype={
gC:function(){var s=this.cy
return s==null?this.cy=D.O():s},
O:function(a){var s=this.cy
if(s!=null)s.K(a)},
a7:function(){return this.O(null)},
aR:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gcO().j(0,s.gbv())
s.a.c.gd_().j(0,s.gbx())
s.a.c.gdh().j(0,s.gbz())
return!0},
bw:function(a){var s=this
if(!J.u(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
by:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.y)return
if(l.x){s=a.y.a5(a.d)
s=s.a4(s)
r=l.r
if(typeof r!=="number")return H.e(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a5(a.d).n(0,2).F(0,s.ga9())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.n()
q=l.e
if(typeof q!=="number")return H.e(q)
r.sU(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a5(q).n(0,2).F(0,s.ga9())
r=l.b
o=p.a
if(typeof o!=="number")return o.L()
n=l.e
if(typeof n!=="number")return H.e(n)
m=l.z
if(typeof m!=="number")return H.e(m)
r.sT(0,-o*n+m)
l.b.sU(0)
l.Q=a.z.a5(q).n(0,2).F(0,s.ga9())}l.a7()},
bA:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a4(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.n()
q=p.e
if(typeof q!=="number")return H.e(q)
s.sU(r*10*q)
p.a7()}},
aL:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.a0()
if(o<n){p.ch=n
s=b.y
p.b.aK(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.aM(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iZ:1}
U.cu.prototype={
gC:function(){var s=this.fx
return s==null?this.fx=D.O():s},
O:function(a){var s=this.fx
if(s!=null)s.K(a)},
a7:function(){return this.O(null)},
aR:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gcO().j(0,q.gbv())
q.a.c.gd_().j(0,q.gbx())
q.a.c.gdh().j(0,q.gbz())
s=q.a.d
r=s.f
s=r==null?s.f=D.O():r
s.j(0,q.ge9())
s=q.a.d
r=s.d
s=r==null?s.d=D.O():r
s.j(0,q.geb())
s=q.a.e
r=s.b
s=r==null?s.b=D.O():r
s.j(0,q.gff())
s=q.a.e
r=s.d
s=r==null?s.d=D.O():r
s.j(0,q.gfd())
s=q.a.e
r=s.c
s=r==null?s.c=D.O():r
s.j(0,q.gfb())
return!0},
ak:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.L()
s=-s}if(this.r){if(typeof r!=="number")return r.L()
r=-r}return new V.a6(s,r)},
bw:function(a){var s=this
t.c.a(a)
if(!J.u(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
by:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a5(a.d)
s=s.a4(s)
r=l.Q
if(typeof r!=="number")return H.e(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ak(a.y.a5(a.d).n(0,2).F(0,s.ga9()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.L()
q=l.y
if(typeof q!=="number")return H.e(q)
r.sU(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.L()
r=l.x
if(typeof r!=="number")return H.e(r)
q.sU(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.ak(r.a5(q).n(0,2).F(0,s.ga9()))
r=l.c
o=p.a
if(typeof o!=="number")return o.L()
n=l.y
if(typeof n!=="number")return H.e(n)
m=l.cy
if(typeof m!=="number")return H.e(m)
r.sT(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.L()
o=l.x
if(typeof o!=="number")return H.e(o)
r=l.db
if(typeof r!=="number")return H.e(r)
m.sT(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.ak(a.z.a5(q).n(0,2).F(0,s.ga9()))}l.a7()},
bA:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a4(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.L()
q=p.y
if(typeof q!=="number")return H.e(q)
s.sU(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.L()
s=p.x
if(typeof s!=="number")return H.e(s)
q.sU(-r*10*s)
p.a7()}},
ea:function(a){var s=this
if(t.J.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
ec:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.u(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.ak(r.a5(q).n(0,2).F(0,s.ga9()))
r=l.c
o=p.a
if(typeof o!=="number")return o.L()
n=l.y
if(typeof n!=="number")return H.e(n)
m=l.cy
if(typeof m!=="number")return H.e(m)
r.sT(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.L()
o=l.x
if(typeof o!=="number")return H.e(o)
r=l.db
if(typeof r!=="number")return H.e(r)
m.sT(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.ak(a.z.a5(q).n(0,2).F(0,s.ga9()))
l.a7()},
fg:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fe:function(a){var s,r,q,p,o,n,m,l=this
t.ap.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a5(a.d)
s=s.a4(s)
r=l.Q
if(typeof r!=="number")return H.e(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ak(a.y.a5(a.d).n(0,2).F(0,s.ga9()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.L()
q=l.y
if(typeof q!=="number")return H.e(q)
r.sU(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.L()
r=l.x
if(typeof r!=="number")return H.e(r)
q.sU(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.ak(r.a5(q).n(0,2).F(0,s.ga9()))
r=l.c
o=p.a
if(typeof o!=="number")return o.L()
n=l.y
if(typeof n!=="number")return H.e(n)
m=l.cy
if(typeof m!=="number")return H.e(m)
r.sT(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.L()
o=l.x
if(typeof o!=="number")return H.e(o)
r=l.db
if(typeof r!=="number")return H.e(r)
m.sT(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.ak(a.z.a5(q).n(0,2).F(0,s.ga9()))}l.a7()},
fc:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a4(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.L()
q=p.y
if(typeof q!=="number")return H.e(q)
s.sU(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.L()
s=p.x
if(typeof s!=="number")return H.e(s)
q.sU(-r*10*s)
p.a7()}},
aL:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.a0()
if(o<n){p.dy=n
s=b.y
p.c.aK(0,s)
p.b.aK(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.aM(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.n(0,V.aM(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iZ:1}
U.cv.prototype={
gC:function(){var s=this.r
return s==null?this.r=D.O():s},
O:function(a){var s=this.r
if(s!=null)s.K(a)},
aR:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.O():r
r=p.gee()
s.j(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.O():q).j(0,r)
return!0},
ef:function(a){var s,r,q,p,o=this
if(!J.u(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.n()
p=s+r*q
if(s!==p){o.d=p
s=new D.q("zoom",s,p)
s.b=!0
o.O(s)}},
aL:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aM(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iZ:1}
M.dh.prototype={
an:function(a){var s=this.y
if(s!=null)s.K(a)},
dA:function(){return this.an(null)},
en:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaj(),q=0;q<b.length;b.length===s||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c4()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.by()
s.b=!0
this.an(s)},
ep:function(a,b){var s,r
for(s=b.gV(b),r=this.gaj();s.A();)s.gI(s).gC().E(0,r)
s=new D.bz()
s.b=!0
this.an(s)},
sde:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gC().E(0,r.gaj())
s=r.d
r.d=a
if(a!=null)a.gC().j(0,r.gaj())
q=new D.q("technique",s,r.d)
q.b=!0
r.an(q)}},
gC:function(){var s=this.y
return s==null?this.y=D.O():s},
aI:function(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a4.da(a3.d)
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
if(typeof q!=="number")return H.e(q)
m=C.d.ai(n*q)
n=o.b
if(typeof p!=="number")return H.e(p)
l=C.d.ai(n*p)
n=C.d.ai(o.c*q)
a4.c=n
o=C.d.ai(o.d*p)
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
g=V.aM(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a4.cy.d9(g)
r=$.lW
if(r==null){r=V.lZ()
o=$.mr
if(o==null)o=$.mr=new V.n(0,1,0)
f=V.mu().B()
e=o.ah(f).B()
d=f.ah(e)
c=new V.n(r.a,r.b,r.c)
b=e.L(0).a4(c)
a=d.L(0).a4(c)
a0=f.L(0).a4(c)
r=V.aM(e.a,d.a,f.a,b,e.b,d.b,f.b,a,e.c,d.c,f.c,a0,0,0,0,1)
$.lW=r
a1=r}else a1=r
s=s.b
if(s!=null){a2=s.a
if(a2!=null)a1=a2.n(0,a1)}a4.db.d9(a1)
for(s=a3.e.a,s=new J.a9(s,s.length);s.A();)s.d.aK(0,a4)
for(s=a3.e.a,s=new J.a9(s,s.length);s.A();)s.d.aI(a4)
a3.b.toString
a4.cy.c0()
a4.db.c0()
a3.c.toString
a4.d8()}}
A.fE.prototype={}
A.fF.prototype={
i:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fP:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
fO:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.dq.prototype={}
A.cp.prototype={
dv:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
co:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.y("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
f3:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.e(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.fE(n,r.name,q))}p.x=new A.fF(o)},
f5:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.e(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.fK(r.type,r.size,r.name,q))}p.y=new A.iw(o)},
ax:function(a,b,c){var s=this.a
if(a===1)return new A.iq(s,b,c)
else return A.l4(s,this.r,b,a,c)},
dX:function(a,b,c){var s=this.a
if(a===1)return new A.iz(s,b,c)
else return A.l4(s,this.r,b,a,c)},
dY:function(a,b,c){var s=this.a
if(a===1)return new A.iA(s,b,c)
else return A.l4(s,this.r,b,a,c)},
b7:function(a,b){return new P.eJ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
fK:function(a,b,c,d){var s=this
switch(a){case 5120:return s.ax(b,c,d)
case 5121:return s.ax(b,c,d)
case 5122:return s.ax(b,c,d)
case 5123:return s.ax(b,c,d)
case 5124:return s.ax(b,c,d)
case 5125:return s.ax(b,c,d)
case 5126:return new A.ei(s.a,c,d)
case 35664:return new A.is(s.a,c,d)
case 35665:return new A.ej(s.a,c,d)
case 35666:return new A.ek(s.a,c,d)
case 35667:return new A.it(s.a,c,d)
case 35668:return new A.iu(s.a,c,d)
case 35669:return new A.iv(s.a,c,d)
case 35674:return new A.ix(s.a,c,d)
case 35675:return new A.iy(s.a,c,d)
case 35676:return new A.el(s.a,c,d)
case 35678:return s.dX(b,c,d)
case 35680:return s.dY(b,c,d)
case 35670:throw H.c(s.b7("BOOL",c))
case 35671:throw H.c(s.b7("BOOL_VEC2",c))
case 35672:throw H.c(s.b7("BOOL_VEC3",c))
case 35673:throw H.c(s.b7("BOOL_VEC4",c))
default:throw H.c(P.y("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.ip.prototype={}
A.iw.prototype={
i:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
h:function(a){return this.M()},
M:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.x)(s),++p)q+=s[p].h(0)+"\n"
return q}}
A.iq.prototype={
h:function(a){return"Uniform1i: "+H.f(this.c)}}
A.it.prototype={
h:function(a){return"Uniform2i: "+H.f(this.c)}}
A.iu.prototype={
h:function(a){return"Uniform3i: "+H.f(this.c)}}
A.iv.prototype={
h:function(a){return"Uniform4i: "+H.f(this.c)}}
A.ir.prototype={
h:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.ei.prototype={
h:function(a){return"Uniform1f: "+H.f(this.c)}}
A.is.prototype={
h:function(a){return"Uniform2f: "+H.f(this.c)}}
A.ej.prototype={
h:function(a){return"Uniform3f: "+H.f(this.c)}}
A.ek.prototype={
b2:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
h:function(a){return"Uniform4f: "+H.f(this.c)}}
A.ix.prototype={
h:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.iy.prototype={
h:function(a){return"UniformMat3: "+H.f(this.c)}}
A.el.prototype={
bk:function(a){var s=new Float32Array(H.js(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
h:function(a){return"UniformMat4: "+H.f(this.c)}}
A.iz.prototype={
h:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.iA.prototype={
h:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.jm.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.bW(q.b,b).bW(q.d.bW(q.c,b),c)
a.sT(0,new V.D(p.a,p.b,p.c))
a.saZ(p.B())
q=1-b
s=1-c
a.sbK(new V.a5(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)}}
F.jC.prototype={
$1:function(a){return 1}}
F.jw.prototype={
$2:function(a,b){return V.fz(this.a,this.b,b)}}
F.jy.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.fz(-1,1,c),n=this.a.$2(b,c)
if(typeof n!=="number")return H.e(n)
q=-q*n
s=p*n
a.sT(0,new V.D(q,s,o))
a.saZ(new V.n(q,s,o).B())
a.sbK(new V.a5(1-c,2+c,-1,-1))}}
F.jz.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jA.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.jQ.prototype={
$3:function(a,b,c){var s=c*3.141592653589793,r=Math.sin(s),q=b*6.283185307179586
q=new V.n(Math.cos(q)*r,Math.cos(s),Math.sin(q)*r).B()
a.sT(0,new V.D(q.a,q.b,q.c))}}
F.kK.prototype={
$2:function(a,b){return 0}}
F.kL.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.e(r)
s=a.f
r=new V.n(s.a,s.b,s.c).B().n(0,this.b+r)
a.sT(0,new V.D(r.a,r.b,r.c))}}
F.kM.prototype={
$1:function(a){return new V.D(Math.cos(a),Math.sin(a),0)}}
F.jP.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.D(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)}}
F.jx.prototype={
$3:function(a,b,c){var s,r,q,p,o,n,m,l,k=this,j=b*6.283185307179586,i=k.a,h=k.b,g=J.lx(i.$1(j),h)
h=J.lx(i.$1(j+3.141592653589793/k.c),h).v(0,g)
s=new V.n(h.a,h.b,h.c).B()
r=V.l5()
if(!J.u(s,r)){i=$.ms
if(i==null){i=new V.n(0,0,1)
$.ms=i
r=i}else r=i}q=s.ah(r).B()
r=q.ah(s).B()
p=c*6.283185307179586
i=Math.cos(p)
h=k.d
o=Math.sin(p)
i=r.n(0,i*h)
h=q.n(0,o*h)
o=i.a
n=h.a
if(typeof o!=="number")return o.v()
if(typeof n!=="number")return H.e(n)
m=i.b
l=h.b
if(typeof m!=="number")return m.v()
if(typeof l!=="number")return H.e(l)
i=i.c
h=h.c
if(typeof i!=="number")return i.v()
if(typeof h!=="number")return H.e(h)
a.sT(0,g.m(0,new V.D(o-n,m-l,i-h)))}}
F.jG.prototype={
$2:function(a,b){return 0}}
F.jH.prototype={
$3:function(a,b,c){var s,r,q=b*2-1,p=c*2-1
a.sT(0,new V.D(q,p,this.a.a.$2(b,c)))
a.saZ(new V.n(q,p,1).B())
s=1-b
r=1-c
a.sbK(new V.a5(b*c,2+s*c,4+b*r,6+s*r))}}
F.di.prototype={
aS:function(){var s=this
if(!s.gaT()){C.b.E(s.a.a.d.b,s)
s.a.a.P()}s.bE()
s.bF()
s.eZ()},
aP:function(a){this.a=a
a.d.b.push(this)},
aQ:function(a){this.b=a
a.d.c.push(this)},
cw:function(a){this.c=a
a.d.d.push(this)},
bE:function(){var s=this.a
if(s!=null){C.b.E(s.d.b,this)
this.a=null}},
bF:function(){var s=this.b
if(s!=null){C.b.E(s.d.c,this)
this.b=null}},
eZ:function(){var s=this.c
if(s!=null){C.b.E(s.d.d,this)
this.c=null}},
gaT:function(){return this.a==null||this.b==null||this.c==null},
dJ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.K()
if(n!=null)q=q.m(0,n)
if(s!=null)q=q.m(0,s)
if(r!=null)q=q.m(0,r)
if(q.cY())return p
return q.B()},
dR:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.v(0,n)
q=new V.n(o.a,o.b,o.c).B()
o=r.v(0,n)
return q.ah(new V.n(o.a,o.b,o.c).B()).B()},
bO:function(){var s,r=this
if(r.d!=null)return!0
s=r.dJ()
if(s==null){s=r.dR()
if(s==null)return!1}r.d=s
r.a.a.P()
return!0},
dI:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.K()
if(n!=null)q=q.m(0,n)
if(s!=null)q=q.m(0,s)
if(r!=null)q=q.m(0,r)
if(q.cY())return p
return q.B()},
dQ:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.B().toString
if(Math.abs(p-0)<1e-9){j=b.v(0,e)
o=new V.n(j.a,j.b,j.c).B()
if(q.a-r.a<0)o=o.L(0)}else{n=(j-s.b)/p
j=b.v(0,e).n(0,n).m(0,e).v(0,h)
o=new V.n(j.a,j.b,j.c).B()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.L(0)}j=l.d
if(j!=null){m=j.B()
o=m.ah(o).B().ah(m).B()}return o},
bM:function(){var s,r=this
if(r.e!=null)return!0
s=r.dI()
if(s==null){s=r.dQ()
if(s==null)return!1}r.e=s
r.a.a.P()
return!0},
aw:function(a,b){var s=b.a
if(s==null)throw H.c(P.y("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==s)throw H.c(P.y("May not replace a face's vertex with a vertex attached to a different shape."))},
gfG:function(a){var s=this
if(J.u(s.a,s.b))return!0
if(J.u(s.b,s.c))return!0
if(J.u(s.c,s.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
G:function(a){var s,r,q=this
if(q.gaT())return a+"disposed"
s=a+C.a.ae(J.a4(q.a.e),0)+", "+C.a.ae(J.a4(q.b.e),0)+", "+C.a.ae(J.a4(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.h(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.h(0)+"}"):s+"-}"},
M:function(){return this.G("")}}
F.h5.prototype={}
F.i8.prototype={
aE:function(a,b,c){var s,r=b.a
r.a.a.q()
r=r.e
s=c.a
s.a.a.q()
if(r==s.e){r=b.b
r.a.a.q()
r=r.e
s=c.b
s.a.a.q()
if(r==s.e){r=b.c
r.a.a.q()
r=r.e
s=c.c
s.a.a.q()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.q()
r=r.e
s=c.b
s.a.a.q()
if(r==s.e){r=b.b
r.a.a.q()
r=r.e
s=c.c
s.a.a.q()
if(r==s.e){r=b.c
r.a.a.q()
r=r.e
s=c.a
s.a.a.q()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.q()
r=r.e
s=c.c
s.a.a.q()
if(r==s.e){r=b.b
r.a.a.q()
r=r.e
s=c.a
s.a.a.q()
if(r==s.e){r=b.c
r.a.a.q()
r=r.e
s=c.b
s.a.a.q()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.dA.prototype={
aS:function(){var s=this
if(!s.gaT()){C.b.E(s.a.a.c.b,s)
s.a.a.P()}s.bE()
s.bF()},
aP:function(a){this.a=a
a.c.b.push(this)},
aQ:function(a){this.b=a
a.c.c.push(this)},
bE:function(){var s=this.a
if(s!=null){C.b.E(s.c.b,this)
this.a=null}},
bF:function(){var s=this.b
if(s!=null){C.b.E(s.c.c,this)
this.b=null}},
gaT:function(){return this.a==null||this.b==null},
aw:function(a,b){var s=b.a
if(s==null)throw H.c(P.y("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==s)throw H.c(P.y("May not replace a line's vertex with a vertex attached to a different shape."))},
w:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
G:function(a){if(this.gaT())return a+"disposed"
return a+C.a.ae(J.a4(this.a.e),0)+", "+C.a.ae(J.a4(this.b.e),0)},
M:function(){return this.G("")}}
F.hE.prototype={}
F.io.prototype={
aE:function(a,b,c){var s,r=b.a
r.a.a.q()
r=r.e
s=c.a
s.a.a.q()
if(r==s.e){r=b.b
r.a.a.q()
r=r.e
s=c.b
s.a.a.q()
return r==s.e}else{r=b.a
r.a.a.q()
r=r.e
s=c.b
s.a.a.q()
if(r==s.e){r=b.b
r.a.a.q()
r=r.e
s=c.a
s.a.a.q()
return r==s.e}else return!1}}}
F.hS.prototype={
f2:function(a){this.a=a
a.b.b.push(this)},
w:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
G:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.ae(J.a4(s.e),0)},
M:function(){return this.G("")}}
F.al.prototype={
gC:function(){var s=this.e
return s==null?this.e=D.O():s},
aF:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.q()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.x)(e),++q){p=e[q]
f.a.j(0,p.X())}f.a.q()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.x)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.m()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
l=n[m]
f.b.a.a.j(0,l)
F.l2(l)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.x)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.m()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.m()
n+=s
m=m.c
if(n>=m.length)return H.b(m,n)
i=m[n]
n=f.c.a
n.a.j(0,j)
n.a.j(0,i)
F.nX(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.x)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.m()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.q()
n=n.e
if(typeof n!=="number")return n.m()
n+=s
m=m.c
if(n>=m.length)return H.b(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.q()
m=m.e
if(typeof m!=="number")return m.m()
m+=s
n=n.c
if(m>=n.length)return H.b(n,m)
g=n[m]
m=f.d.a
m.a.j(0,j)
m.a.j(0,i)
m.a.j(0,g)
F.c5(j,i,g)}e=f.e
if(e!=null)e.am(0)},
ab:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.ab()||!1
if(!r.a.ab())s=!1
q=r.e
if(q!=null)q.am(0)
return s},
fF:function(){var s,r,q,p,o,n,m,l,k,j=this.cL(),i=new V.n(j.d,j.e,j.f),h=Math.sqrt(i.a4(i))
if(h<=0)h=1
i=j.a
s=j.b
r=j.c
q=new F.hU()
q.a=1/h
q.b=new V.D(i,s,r)
for(p=this.a.c.length-1;p>=0;--p){i=this.a.c
if(p>=i.length)return H.b(i,p)
o=i[p]
i=q.b
s=o.f
r=i.a
n=s.a
if(typeof r!=="number")return r.v()
if(typeof n!=="number")return H.e(n)
m=r-n
n=i.b
r=s.b
if(typeof n!=="number")return n.v()
if(typeof r!=="number")return H.e(r)
l=n-r
i=i.c
s=s.c
if(typeof i!=="number")return i.v()
if(typeof s!=="number")return H.e(s)
k=i-s
s=Math.sqrt(m*m+l*l+k*k)*q.a
if(o.ch!==s){o.ch=s
i=o.a
if(i!=null){i=i.e
if(i!=null)i.K(null)}}}},
cL:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a.c,f=g.length
if(f<=0){g=$.mc
return g==null?$.mc=V.mb(0,0,0,0,0,0):g}s=g[0].f
r=V.mb(s.a,s.b,s.c,0,0,0)
for(q=f-1;q>=1;--q){s=g[q].f
p=s.a
o=s.b
s=s.c
n=r.d
m=r.a
if(typeof p!=="number")return p.a0()
if(typeof m!=="number")return H.e(m)
if(p<m){n+=m-p
l=p}else{if(p>m+n)n=p-m
l=m}k=r.e
p=r.b
if(typeof o!=="number")return o.a0()
if(typeof p!=="number")return H.e(p)
if(o<p){k+=p-o
j=o}else{if(o>p+k)k=o-p
j=p}i=r.f
p=r.c
if(typeof s!=="number")return s.a0()
if(typeof p!=="number")return H.e(p)
if(s<p){i+=p-s
h=s}else{if(s>p+i)i=s-p
h=p}r=new V.co(l,j,h,n,k,i)}return r},
fS:function(a,b){var s,r,q,p=this.a.c.length
for(s=0;s<p;++s){r=this.a.c
if(s>=r.length)return H.b(r,s)
q=r[s]
if(b.aE(0,a,q))return q}return null},
f0:function(a,b){var s,r,q,p,o,n
this.a.j(0,a)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.x)(b),++r){q=b[r]
for(;p=q.d,p.b.length+p.c.length+p.d.length>0;){p=p.i(0,0)
o=p.a
if(o==null||p.b==null||p.c==null)H.v(P.y("May not replace a face's vertex when the point has been disposed."))
if(J.u(o,q)){p.aw(q,a)
o=p.a
if(o!=null){C.b.E(o.d.b,p)
p.a=null}p.a=a
a.d.b.push(p)
n=1}else n=0
if(J.u(p.b,q)){p.aw(q,a)
o=p.b
if(o!=null){C.b.E(o.d.c,p)
p.b=null}p.b=a
a.d.c.push(p);++n}if(J.u(p.c,q)){p.aw(q,a)
o=p.c
if(o!=null){C.b.E(o.d.d,p)
p.c=null}p.c=a
a.d.d.push(p);++n}if(n>0){p=p.a.a.e
if(p!=null)p.K(null)}}for(;p=q.c,p.b.length+p.c.length>0;){p=p.i(0,0)
o=p.a
if(o==null||p.b==null)H.v(P.y("May not replace a line's vertex when the point has been disposed."))
if(J.u(o,q)){p.aw(q,a)
o=p.a
if(o!=null){C.b.E(o.c.b,p)
p.a=null}p.a=a
a.c.b.push(p)
n=1}else n=0
if(J.u(p.b,q)){p.aw(q,a)
o=p.b
if(o!=null){C.b.E(o.c.c,p)
p.b=null}p.b=a
a.c.c.push(p);++n}if(n>0){p=p.a.a.e
if(p!=null)p.K(null)}}for(;p=q.b.b,p.length>0;){p=p[0]
o=p.a
if(o==null)H.v(P.y("May not replace a point's vertex when the point has been disposed."))
if(J.u(o,q)){if(a.a==null)H.v(P.y("May not replace a point's vertex with a vertex which is not attached to a shape."))
o=p.a
if(o!=null){C.b.E(o.b.b,p)
p.a=null}p.a=a
a.b.b.push(p)
n=1}else n=0
if(n>0){p=p.a.a.e
if(p!=null)p.K(null)}}this.a.E(0,q)}},
cZ:function(a,b){var s,r,q,p,o,n,m=this,l=m.e
if(l!=null)++l.d
s=m.a.c.slice(0)
for(;s.length!==0;){r=C.b.gfU(s)
C.b.c1(s,0)
if(r!=null){q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.b(s,p)
o=s[p]
if(o!=null&&a.aE(0,r,o)){q.push(o)
C.b.c1(s,p)}}if(q.length>1){n=b.aF(q)
if(n!=null){m.f0(n,q)
s.push(n)}}}}m.a.q()
m.c.bg()
m.d.bg()
m.b.hj()
m.c.c2(new F.io())
m.d.c2(new F.i8())
l=m.e
if(l!=null)l.am(0)},
b9:function(){this.cZ(new F.cw(),new F.hQ())},
fD:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length,a2=a5.a,a3=(a2&$.b3().a)!==0?1:0
if((a2&$.b2().a)!==0)++a3
if((a2&$.b1().a)!==0)++a3
if((a2&$.bT().a)!==0)++a3
if((a2&$.bU().a)!==0)++a3
if((a2&$.bp().a)!==0)++a3
if((a2&$.d0().a)!==0)++a3
if((a2&$.bV().a)!==0)++a3
if((a2&$.bS().a)!==0)++a3
s=a5.gca(a5)
r=s*4
a2=a1*s
q=new Array(a2)
q.fixed$length=Array
p=new Array(a3)
p.fixed$length=Array
for(o=0,n=0;n<a3;++n){m=a5.fB(n)
l=m.gca(m)
p[n]=new Z.fL(m,l,o*4,r)
for(k=0;k<a1;++k){j=a.a.c
if(k>=j.length)return H.b(j,k)
i=j[k].h2(m)
h=o+k*s
for(j=i.length,g=0;g<j;++g){f=i[g]
if(h<0||h>=a2)return H.b(q,h)
q[h]=f;++h}}o+=l}a2=a4.a
e=a2.createBuffer()
a2.bindBuffer(a0,e)
a2.bufferData(a0,new Float32Array(H.js(q)),35044)
a2.bindBuffer(a0,null)
d=new Z.d7(new Z.eu(a0,e),p)
d.b=[]
if(a.b.b.length!==0){c=[]
for(n=0;j=a.b.b,n<j.length;++n){j=j[n].a
j.a.a.q()
c.push(j.e)}b=Z.l6(a2,34963,c)
d.b.push(new Z.c9(0,c.length,b))}if(a.c.b.length!==0){c=[]
for(n=0;j=a.c.b,n<j.length;++n){j=j[n].a
j.a.a.q()
c.push(j.e)
j=a.c.b
if(n>=j.length)return H.b(j,n)
j=j[n].b
j.a.a.q()
c.push(j.e)}b=Z.l6(a2,34963,c)
d.b.push(new Z.c9(1,c.length,b))}if(a.d.b.length!==0){c=[]
for(n=0;j=a.d.b,n<j.length;++n){j=j[n].a
j.a.a.q()
c.push(j.e)
j=a.d.b
if(n>=j.length)return H.b(j,n)
j=j[n].b
j.a.a.q()
c.push(j.e)
j=a.d.b
if(n>=j.length)return H.b(j,n)
j=j[n].c
j.a.a.q()
c.push(j.e)}b=Z.l6(a2,34963,c)
d.b.push(new Z.c9(4,c.length,b))}return d},
h:function(a){var s=this,r="   ",q=[]
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.G(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.G(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.G(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.G(r))}return C.b.D(q,"\n")},
P:function(){var s=this.e
if(s!=null)s.K(null)}}
F.i2.prototype={
a1:function(a,b,c,d){var s,r=this.a
r.a.j(0,b)
r.a.j(0,c)
r.a.j(0,d)
s=new F.di()
r=b.a
if(r==null)H.v(P.y(u.j))
if(r!=c.a||r!=d.a)H.v(P.y(u.i))
s.aP(b)
s.aQ(c)
s.cw(d)
s.a.a.d.b.push(s)
s.a.a.P()
return s},
cG:function(a){var s,r,q,p,o,n=[],m=a.length
if(m>0){s=a[0]
for(r=this.a,q=2;q<m;++q){p=q-1
o=a.length
if(p>=o)return H.b(a,p)
p=a[p]
if(q>=o)return H.b(a,q)
o=a[q]
r.a.j(0,s)
r.a.j(0,p)
r.a.j(0,o)
n.push(F.c5(s,p,o))}}return n},
fz:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
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
if(n){l.j(0,k)
s.a.j(0,j)
s.a.j(0,h)
f.push(F.c5(k,j,h))
s.a.j(0,k)
s.a.j(0,h)
s.a.j(0,g)
f.push(F.c5(k,h,g))}else{l.j(0,j)
s.a.j(0,h)
s.a.j(0,g)
f.push(F.c5(j,h,g))
s.a.j(0,j)
s.a.j(0,g)
s.a.j(0,k)
f.push(F.c5(j,g,k))}n=!n}p=!p}return f},
gk:function(a){return this.b.length},
c2:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.b(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.i(0,o)
for(m=o-1;m>=0;--m){l=p.d.i(0,m)
if(a.aE(0,n,l)){n.aS()
break}}}}},
bg:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=q.gfG(q)
if(r)q.aS()}},
ab:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.x)(s),++p)if(!s[p].bO())q=!1
return q},
bN:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.x)(s),++p)if(!s[p].bM())q=!1
return q},
h:function(a){return this.M()},
G:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].G(a))
return C.b.D(p,"\n")},
M:function(){return this.G("")}}
F.i3.prototype={
p:function(a,b,c){var s,r=this.a
r.a.j(0,b)
r.a.j(0,c)
r=new F.dA()
if(b==null)H.v(P.y(u.p))
if(c==null)H.v(P.y(u.m))
s=b.a
if(s==null)H.v(P.y(u.g))
if(s!=c.a)H.v(P.y(u.q))
r.aP(b)
r.aQ(c)
r.a.a.c.b.push(r)
r.a.a.P()
return r},
gk:function(a){return this.b.length},
c2:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.b(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.i(0,o)
for(m=o-1;m>=0;--m){l=p.c.i(0,m)
if(a.aE(0,n,l)){n.aS()
break}}}}},
bg:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=J.u(q.a,q.b)
if(r)q.aS()}},
h:function(a){return this.M()},
G:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.b(r,s)
q.push(r[s].G(a+(""+s+". ")))}return C.b.D(q,"\n")},
M:function(){return this.G("")}}
F.i4.prototype={
gk:function(a){return this.b.length},
hj:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.b(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.E(q.b.b,r)
q=r.a.a.e
if(q!=null)q.K(null)
q=r.a
if(q!=null){C.b.E(q.b.b,r)
r.a=null}}}},
h:function(a){return this.M()},
G:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].G(a))
return C.b.D(p,"\n")},
M:function(){return this.G("")}}
F.iN.prototype={
bR:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.an(s.cx,p,m,r,q,o,n,a,l)},
X:function(){return this.bR(null)},
sT:function(a,b){var s
if(!J.u(this.f,b)){this.f=b
s=this.a
if(s!=null)s.P()}},
saG:function(a){var s
a=a==null?null:a.B()
if(!J.u(this.r,a)){this.r=a
s=this.a
if(s!=null)s.P()}},
sR:function(a){var s
a=a==null?null:a.B()
if(!J.u(this.x,a)){this.x=a
s=this.a
if(s!=null)s.P()}},
sc4:function(a){var s
if(!J.u(this.y,a)){this.y=a
s=this.a
if(s!=null)s.P()}},
saZ:function(a){var s
if(!J.u(this.z,a)){this.z=a
s=this.a
if(s!=null)s.P()}},
sa2:function(a,b){var s
if(!J.u(this.Q,b)){this.Q=b
s=this.a
if(s!=null)s.P()}},
sdk:function(a,b){var s
if(this.ch!==b){this.ch=b
s=this.a
if(s!=null)s.P()}},
sbK:function(a){var s
if(!J.u(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.P()}},
h2:function(a){var s,r=this
if(a.w(0,$.b3())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.w(0,$.b2())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.w(0,$.b1())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.w(0,$.bT())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.w(0,$.bU())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.w(0,$.bp())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.w(0,$.d0())){s=r.Q
if(s==null)return[1,1,1,1]
else return s.c5(0)}else if(a.w(0,$.bV()))return[r.ch]
else if(a.w(0,$.bS())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
bO:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.K()
r.d.t(0,new F.iZ(q))
r.r=q.a.B()
q=r.a
if(q!=null){q.P()
q=r.a.e
if(q!=null)q.am(0)}return!0},
bM:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.K()
r.d.t(0,new F.iY(q))
r.x=q.a.B()
q=r.a
if(q!=null){q.P()
q=r.a.e
if(q!=null)q.am(0)}return!0},
cP:function(a){var s,r,q,p=this.c.b.length
for(s=0;s<p;++s){r=this.c.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=q.b
r.a.a.q()
r=r.e
a.a.a.q()
if(r==a.e)return q}return null},
fV:function(a){var s=this.cP(a)
if(s!=null)return s
return a.cP(this)},
w:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.M()},
G:function(a){var s,r,q=this,p="-",o=[]
o.push(C.a.ae(J.a4(q.e),0))
s=q.f
if(s!=null)o.push(s.h(0))
else o.push(p)
s=q.r
if(s!=null)o.push(s.h(0))
else o.push(p)
s=q.x
if(s!=null)o.push(s.h(0))
else o.push(p)
s=q.y
if(s!=null)o.push(s.h(0))
else o.push(p)
s=q.z
if(s!=null)o.push(s.h(0))
else o.push(p)
s=q.Q
if(s!=null)o.push(s.h(0))
else o.push(p)
o.push(V.w(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.h(0))
else o.push(p)
r=C.b.D(o,", ")
return a+"{"+r+"}"},
M:function(){return this.G("")}}
F.iZ.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.m(0,r)}}}
F.iY.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.m(0,r)}}}
F.iO.prototype={
q:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.b(s,p)
s[p].e=q;++q}this.b=!1}},
j:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.y("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.P()
return!0},
cH:function(a,b,c,d,e,f,g){var s=F.an(a,null,b,c,d,e,f,g,0)
this.j(0,s)
return s},
fA:function(a,b,c,d,e,f){return this.cH(a,b,c,d,e,f,null)},
b8:function(a,b,c,d,e,f){return this.cH(a,b,c,null,d,e,f)},
bJ:function(a,b,c){var s=null,r=F.an(s,s,s,new V.D(a,b,c),s,s,s,s,0)
this.j(0,r)
return r},
gk:function(a){return this.c.length},
E:function(a,b){var s,r
if(b==null)return!1
s=this.a
if(b.a!==s)return!1
if(b.b.b.length===0){r=b.c
if(r.b.length===0&&r.c.length===0){r=b.d
r=r.b.length===0&&r.c.length===0&&r.d.length===0}else r=!1}else r=!1
if(!r)throw H.c(P.y("May not remove a vertex without first making it empty."))
b.a=null
C.b.E(this.c,b)
s.P()
return this.b=!0},
ab:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)s[q].bO()
return!0},
bN:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)s[q].bM()
return!0},
fE:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
if(p.z==null){o=p.r.B()
if(!J.u(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.K(null)}}}}return!0},
h:function(a){return this.M()},
G:function(a){var s,r,q,p
this.q()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.x)(r),++p)s.push(r[p].G(a))
return C.b.D(s,"\n")},
M:function(){return this.G("")}}
F.iP.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.b(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.b(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.b(r,b)
return r[b]},
t:function(a,b){var s=this
C.b.t(s.b,b)
C.b.t(s.c,new F.iQ(s,b))
C.b.t(s.d,new F.iR(s,b))},
h:function(a){return this.M()},
M:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].G(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].G(""))
return C.b.D(p,"\n")}}
F.iQ.prototype={
$1:function(a){if(!J.u(a.a,this.a))this.b.$1(a)}}
F.iR.prototype={
$1:function(a){var s=this.a
if(!J.u(a.a,s)&&!J.u(a.b,s))this.b.$1(a)}}
F.iT.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.b(r,s)
return r[s]}else{if(b<0)return H.b(r,b)
return r[b]}},
h:function(a){return this.M()},
M:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].G(""))
return C.b.D(p,"\n")}}
F.iU.prototype={}
F.cw.prototype={
aE:function(a,b,c){return J.u(b.f,c.f)}}
F.iV.prototype={}
F.hU.prototype={}
F.iW.prototype={}
F.iS.prototype={
aF:function(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=null
for(s=a9.length,r=a8,q=r,p=q,o=p,n=o,m=n,l=0,k=0,j=0,i=0,h=0,g=0,f=0;f<s;++f){e=a9[f]
d=e.f
if(d!=null){if(m==null)m=d
else{c=m.a
b=d.a
if(typeof c!=="number")return c.m()
if(typeof b!=="number")return H.e(b)
a=m.b
a0=d.b
if(typeof a!=="number")return a.m()
if(typeof a0!=="number")return H.e(a0)
a1=m.c
a2=d.c
if(typeof a1!=="number")return a1.m()
if(typeof a2!=="number")return H.e(a2)
m=new V.D(c+b,a+a0,a1+a2)}++l}a3=e.r
if(a3!=null)if(n==null)n=a3
else{c=n.a
b=a3.a
if(typeof c!=="number")return c.m()
if(typeof b!=="number")return H.e(b)
a=n.b
a0=a3.b
if(typeof a!=="number")return a.m()
if(typeof a0!=="number")return H.e(a0)
a1=n.c
a2=a3.c
if(typeof a1!=="number")return a1.m()
if(typeof a2!=="number")return H.e(a2)
n=new V.n(c+b,a+a0,a1+a2)}a4=e.x
if(a4!=null)if(o==null)o=a4
else{c=o.a
b=a4.a
if(typeof c!=="number")return c.m()
if(typeof b!=="number")return H.e(b)
a=o.b
a0=a4.b
if(typeof a!=="number")return a.m()
if(typeof a0!=="number")return H.e(a0)
a1=o.c
a2=a4.c
if(typeof a1!=="number")return a1.m()
if(typeof a2!=="number")return H.e(a2)
o=new V.n(c+b,a+a0,a1+a2)}a5=e.y
if(a5!=null){q=q==null?a5:new V.S(q.a+a5.a,q.b+a5.b);++j}a6=e.z
if(a6!=null){if(r==null)r=a6
else{c=r.a
b=a6.a
if(typeof c!=="number")return c.m()
if(typeof b!=="number")return H.e(b)
a=r.b
a0=a6.b
if(typeof a!=="number")return a.m()
if(typeof a0!=="number")return H.e(a0)
a1=r.c
a2=a6.c
if(typeof a1!=="number")return a1.m()
if(typeof a2!=="number")return H.e(a2)
r=new V.n(c+b,a+a0,a1+a2)}++i}c=e.Q
if(c!=null){b=c.a
a=c.b
a0=c.c
c=c.d
if(p==null){c=[b,a,a0,c]
p=new V.aV(c[0],c[1],c[2],c[3])}else{c=[b,a,a0,c]
b=c[0]
a=c[1]
a0=c[2]
c=c[3]
p=new V.aV(p.a+b,p.b+a,p.c+a0,p.d+c)}++k}c=e.ch
if(typeof c!=="number")return H.e(c)
g+=c;++h}a7=F.an(a8,a8,a8,a8,a8,a8,a8,a8,0)
if(l<=0||m==null)a7.sT(0,a8)
else a7.sT(0,m.F(0,l))
if(n==null)a7.saG(a8)
else a7.saG(n.B())
if(o==null)a7.sR(a8)
else a7.sR(o.B())
if(j<=0||q==null)a7.sc4(a8)
else a7.sc4(q.F(0,j))
if(i<=0||r==null)a7.saZ(a8)
else a7.saZ(r.F(0,i))
if(k<=0||p==null)a7.sa2(0,a8)
else{s=p.F(0,k)
s=[s.a,s.b,s.c,s.d]
c=s[0]
b=s[1]
a=s[2]
s=s[3]
if(c<0)c=0
else if(c>1)c=1
if(b<0)b=0
else if(b>1)b=1
if(a<0)a=0
else if(a>1)a=1
if(s<0)s=0
else if(s>1)s=1
a7.sa2(0,new V.A(c,b,a,s))}if(h<=0)a7.sdk(0,0)
else a7.sdk(0,g/h)
return a7}}
F.hQ.prototype={
aF:function(a){var s,r,q,p,o,n,m,l,k=V.K()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null){p=k.a
o=q.a
if(typeof p!=="number")return p.m()
if(typeof o!=="number")return H.e(o)
n=k.b
m=q.b
if(typeof n!=="number")return n.m()
if(typeof m!=="number")return H.e(m)
l=k.c
q=q.c
if(typeof l!=="number")return l.m()
if(typeof q!=="number")return H.e(q)
k=new V.n(p+o,n+m,l+q)}}k=k.B()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.x)(a),++r)a[r].saG(k)
return null}}
F.iX.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.M()},
M:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].G(""))
return C.b.D(p,"\n")}}
O.dp.prototype={
gC:function(){var s=this.rx
return s==null?this.rx=D.O():s},
Z:function(a){var s=this.rx
if(s!=null)s.K(a)},
sa8:function(a){var s=this.r2
$.B().toString
if(!(Math.abs(s-a)<1e-9)){this.r2=a
s=new D.q("vectorScale",s,a)
s.b=!0
this.Z(s)}},
a_:function(a,b,c,d,e,f,g){var s,r=b.a.i(0,d)
if(r==null){r=this.cl(a,e.$1(c))
b.a.l(0,d,r)}s=this.a
s.db.b2(f)
s.dx.b2(g)
r.d6(a)},
cu:function(a,b,c,d,e,f,g){var s,r=b.a.i(0,d)
if(r==null){r=this.cl(a,e.$1(c))
b.a.l(0,d,r)}s=this.a
s.db.b2(f)
s.dx.b2(g)
r.d6(a)},
cl:function(a,b){var s=this,r=$.b3(),q=$.b2(),p=b.fD(new Z.j_(a.a),new Z.cx(r.a|q.a|$.b1().a|$.bp().a))
p.ba($.b3()).e=s.a.z.c
p.ba($.b2()).e=s.a.Q.c
p.ba($.bp()).e=s.a.ch.c
p.ba($.b1()).e=s.a.cx.c
return p},
f7:function(a){var s=F.Q()
C.b.t(a.a.c,new O.ho(s,new V.A(1,1,1,1)))
C.b.t(a.d.b,new O.hp(s))
return s},
cF:function(a,b){var s,r={}
r.a=b
s=F.Q()
r.a=new V.A(0,0.7,1,1)
C.b.t(a.a.c,new O.hz(r,s))
r=new O.hy(s)
C.b.t(a.c.b,new O.hA(s,r))
C.b.t(a.d.b,new O.hB(s,r))
return s},
fs:function(a){return this.cF(a,null)},
fn:function(a){var s=F.Q()
C.b.t(a.a.c,new O.hu(new V.A(1,1,1,1),s))
return s},
eh:function(a){var s=F.Q()
C.b.t(a.a.c,new O.hn(new V.A(1,1,0.3,1),s))
return s},
dP:function(a){var s=F.Q()
C.b.t(a.a.c,new O.hf(new V.A(1,0.3,0.3,1),s))
return s},
fa:function(a){var s=F.Q()
C.b.t(a.a.c,new O.hq(new V.A(1,0.3,1,1),s))
return s},
fl:function(a){var s=F.Q()
C.b.t(a.a.c,new O.ht(new V.A(1,0.3,0.3,1),s))
return s},
e3:function(a){var s=F.Q()
C.b.t(a.d.b,new O.hj(new V.A(1,1,0.3,1),s))
return s},
e5:function(a){var s=F.Q()
C.b.t(a.d.b,new O.hk(new V.A(1,1,0.3,1),s))
return s},
e1:function(a){var s=F.Q()
C.b.t(a.d.b,new O.hi(new V.A(1,0.3,0.3,1),s))
return s},
e7:function(a){var s=F.Q()
C.b.t(a.d.b,new O.hl(new V.A(1,0.3,1,1),s))
return s},
dT:function(a){var s=F.Q()
C.b.t(a.a.c,new O.hg(s))
C.b.t(a.d.b,new O.hh(s))
return s},
fj:function(a){var s=F.Q()
C.b.t(a.a.c,new O.hr(s))
C.b.t(a.d.b,new O.hs(s))
return s},
fp:function(a){var s,r,q={},p=F.Q(),o=a.a.c
if(o.length<1)return p
q.a=q.b=o[0].ch
C.b.t(o,new O.hv(q))
o=q.a
s=q.b
if(typeof o!=="number")return o.v()
if(typeof s!=="number")return H.e(s)
r=o-s
q.c=r
if(r<=0)q.c=1
C.b.t(a.a.c,new O.hw(q,p))
C.b.t(a.d.b,new O.hx(p))
return p},
ed:function(a){var s={}
s.a=0
C.b.t(a.a.c,new O.hm(s))
return C.d.bb((s.a+1.5)*0.5)},
b3:function(a,b){var s
if(a<0)return new V.aa(0,0,0)
else{s=Math.floor((a+0.5)*0.5)
return V.lI(s/b,a-s*2,1)}},
dN:function(a){var s=this.ed(a),r=F.Q()
C.b.t(a.a.c,new O.hd(this,s,r))
C.b.t(a.d.b,new O.he(r))
return r},
dK:function(a){return this.dL(a)},
dL:function(a){var s=F.Q(),r=new O.hc(s)
r.$3(1,0,0)
r.$3(0,1,0)
r.$3(0,0,1)
return s},
dE:function(a){return this.dF(a)},
dF:function(a){var s,r,q,p,o,n,m,l,k,j=a.cL(),i=F.Q(),h=new O.hb(i),g=j.a,f=j.b,e=j.c,d=h.$3(g,f,e),c=j.d
if(typeof g!=="number")return g.m()
c=g+c
s=h.$3(c,f,e)
r=j.e
if(typeof f!=="number")return f.m()
r=f+r
q=h.$3(c,r,e)
p=h.$3(g,r,e)
o=j.f
if(typeof e!=="number")return e.m()
o=e+o
n=h.$3(g,f,o)
m=h.$3(c,f,o)
l=h.$3(c,r,o)
k=h.$3(g,r,o)
i.c.p(0,d,s)
i.c.p(0,s,q)
i.c.p(0,q,p)
i.c.p(0,p,d)
i.c.p(0,n,m)
i.c.p(0,m,l)
i.c.p(0,l,k)
i.c.p(0,k,n)
i.c.p(0,d,n)
i.c.p(0,s,m)
i.c.p(0,q,l)
i.c.p(0,p,k)
return i}}
O.ho.prototype={
$1:function(a){var s=this.a.a,r=a.X()
r.sa2(0,this.b)
r.sR(V.K())
s.j(0,r)}}
O.hp.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.a,n=a.a
n.a.a.q()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
s=o[n]
n=p.a
o=a.b
o.a.a.q()
o=o.e
n=n.c
if(o>>>0!==o||o>=n.length)return H.b(n,o)
r=n[o]
o=p.a
n=a.c
n.a.a.q()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
q=o[n]
p.d.a1(0,s,r,q)}}
O.hz.prototype={
$1:function(a){var s=this.b.a,r=a.X()
r.sa2(0,this.a.a)
r.sR(V.K())
s.j(0,r)}}
O.hy.prototype={
$2:function(a,b){if(a.fV(b)==null)this.a.c.p(0,a,b)}}
O.hA.prototype={
$1:function(a){var s,r=this.a,q=r.a,p=a.a
p.a.a.q()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r=r.a
p=a.b
p.a.a.q()
p=p.e
r=r.c
if(p>>>0!==p||p>=r.length)return H.b(r,p)
this.b.$2(s,r[p])}}
O.hB.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.a,n=a.a
n.a.a.q()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
s=o[n]
n=p.a
o=a.b
o.a.a.q()
o=o.e
n=n.c
if(o>>>0!==o||o>=n.length)return H.b(n,o)
r=n[o]
p=p.a
o=a.c
o.a.a.q()
o=o.e
p=p.c
if(o>>>0!==o||o>=p.length)return H.b(p,o)
q=p[o]
o=this.b
o.$2(s,r)
o.$2(r,q)
o.$2(q,s)}}
O.hu.prototype={
$1:function(a){var s,r=a.X()
r.sa2(0,this.a)
r.sR(V.K())
s=this.b
s.a.j(0,r)
s.b.a.a.j(0,r)
F.l2(r)}}
O.hn.prototype={
$1:function(a){var s,r,q=a.X()
q.sa2(0,this.a)
q.sR(V.K())
s=q.X()
s.sR(q.r)
r=this.b
r.a.j(0,q)
r.a.j(0,s)
r.c.p(0,q,s)}}
O.hf.prototype={
$1:function(a){var s,r,q=a.X()
q.sa2(0,this.a)
q.sR(V.K())
s=q.X()
s.sR(a.x)
r=this.b
r.a.j(0,q)
r.a.j(0,s)
r.c.p(0,q,s)}}
O.hq.prototype={
$1:function(a){var s,r,q=a.X()
q.sa2(0,this.a)
q.sR(V.K())
s=q.X()
s.sR(a.x.ah(a.r).L(0))
r=this.b
r.a.j(0,q)
r.a.j(0,s)
r.c.p(0,q,s)}}
O.ht.prototype={
$1:function(a){var s,r,q=a.X()
q.sa2(0,this.a)
q.sR(V.K())
s=q.X()
s.sR(a.z)
r=this.b
r.a.j(0,q)
r.a.j(0,s)
r.c.p(0,q,s)}}
O.hj.prototype={
$1:function(a){var s=null,r=a.a.f.m(0,a.b.f).m(0,a.c.f).F(0,3),q=a.d,p=F.an(s,V.K(),this.a,r,q,s,s,s,0)
q=this.b
q.a.j(0,p)
q.b.a.a.j(0,p)
F.l2(p)}}
O.hk.prototype={
$1:function(a){var s=null,r=a.a.f.m(0,a.b.f).m(0,a.c.f).F(0,3),q=a.d,p=F.an(s,V.K(),this.a,r,q,s,s,s,0),o=p.X()
o.sR(a.d)
q=this.b
q.a.j(0,p)
q.a.j(0,o)
q.c.p(0,p,o)}}
O.hi.prototype={
$1:function(a){var s=null,r=a.a.f.m(0,a.b.f).m(0,a.c.f).F(0,3),q=a.d,p=F.an(s,V.K(),this.a,r,q,s,s,s,0),o=p.X()
o.sR(a.e)
q=this.b
q.a.j(0,p)
q.a.j(0,o)
q.c.p(0,p,o)}}
O.hl.prototype={
$1:function(a){var s=null,r=a.a.f.m(0,a.b.f).m(0,a.c.f).F(0,3),q=a.d,p=F.an(s,V.K(),this.a,r,q,s,s,s,0),o=p.X()
o.sR(a.e.ah(a.d).L(0))
q=this.b
q.a.j(0,p)
q.a.j(0,o)
q.c.p(0,p,o)}}
O.hg.prototype={
$1:function(a){var s=this.a.a,r=a.X()
r.sR(V.K())
s.j(0,r)}}
O.hh.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.a,n=a.a
n.a.a.q()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
s=o[n]
n=p.a
o=a.b
o.a.a.q()
o=o.e
n=n.c
if(o>>>0!==o||o>=n.length)return H.b(n,o)
r=n[o]
o=p.a
n=a.c
n.a.a.q()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
q=o[n]
p.d.a1(0,s,r,q)}}
O.hr.prototype={
$1:function(a){var s,r,q=a.y,p=this.a.a,o=a.X(),n=q.a,m=q.b
if(n<0)n=0
else if(n>1)n=1
s=m<0
if(s)r=0
else r=m>1?1:m
if(s)m=0
else if(m>1)m=1
o.sa2(0,new V.A(n,r,m,1))
o.sR(V.K())
p.j(0,o)}}
O.hs.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.a,n=a.a
n.a.a.q()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
s=o[n]
n=p.a
o=a.b
o.a.a.q()
o=o.e
n=n.c
if(o>>>0!==o||o>=n.length)return H.b(n,o)
r=n[o]
o=p.a
n=a.c
n.a.a.q()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
q=o[n]
p.d.a1(0,s,r,q)}}
O.hv.prototype={
$1:function(a){var s=this.a,r=s.b,q=a.ch
if(typeof r!=="number")return r.Y()
if(typeof q!=="number")return H.e(q)
if(r>q)s.b=q
r=s.a
if(typeof r!=="number")return r.a0()
if(r<q)s.a=q}}
O.hw.prototype={
$1:function(a){var s,r=a.ch,q=this.a,p=q.b
if(typeof r!=="number")return r.v()
if(typeof p!=="number")return H.e(p)
s=V.lI((r-p)/q.c*5/6,1,1)
q=this.b.a
p=a.X()
p.sR(V.K())
p.sa2(0,V.lJ(s))
q.j(0,p)}}
O.hx.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.a,n=a.a
n.a.a.q()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
s=o[n]
n=p.a
o=a.b
o.a.a.q()
o=o.e
n=n.c
if(o>>>0!==o||o>=n.length)return H.b(n,o)
r=n[o]
o=p.a
n=a.c
n.a.a.q()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
q=o[n]
p.d.a1(0,s,r,q)}}
O.hm.prototype={
$1:function(a){var s,r,q=a.cx
if(q==null)q=V.m0()
s=this.a
r=Math.max(s.a,q.a)
s.a=r
r=Math.max(r,q.b)
s.a=r
r=Math.max(r,q.c)
s.a=r
s.a=Math.max(r,q.d)}}
O.hd.prototype={
$1:function(a){var s,r,q,p=a.cx
if(p==null)p=V.m0()
s=this.a
r=this.b
q=new V.aa(0,0,0).m(0,s.b3(p.a,r)).m(0,s.b3(p.b,r)).m(0,s.b3(p.c,r)).m(0,s.b3(p.d,r))
r=this.c.a
s=a.X()
s.sR(V.K())
s.sa2(0,V.lJ(q))
r.j(0,s)}}
O.he.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.a,n=a.a
n.a.a.q()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
s=o[n]
n=p.a
o=a.b
o.a.a.q()
o=o.e
n=n.c
if(o>>>0!==o||o>=n.length)return H.b(n,o)
r=n[o]
o=p.a
n=a.c
n.a.a.q()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
q=o[n]
p.d.a1(0,s,r,q)}}
O.hc.prototype={
$3:function(a,b,c){var s,r,q=a>1?1:a,p=b>1?1:b,o=c>1?1:c,n=new V.A(q,p,o,1)
q=this.a
s=q.a.bJ(0,0,0)
s.sR(V.K())
s.saG(V.l5())
s.sa2(0,n)
r=q.a.bJ(a,b,c)
r.sR(V.K())
r.saG(V.l5())
r.sa2(0,n)
q.c.p(0,s,r)}}
O.hb.prototype={
$3:function(a,b,c){var s=this.a.a.bJ(a,b,c)
s.sR(V.K())
s.saG(new V.n(a,b,c))
return s}}
O.id.prototype={}
X.kS.prototype={}
X.h9.prototype={
gC:function(){var s=this.x
return s==null?this.x=D.O():s}}
X.dR.prototype={
gC:function(){var s=this.f
return s==null?this.f=D.O():s},
av:function(a){var s=this.f
if(s!=null)s.K(a)},
dD:function(){return this.av(null)},
saV:function(a){var s,r,q=this
if(!J.u(q.b,a)){s=q.b
if(s!=null)s.gC().E(0,q.gcg())
r=q.b
q.b=a
if(a!=null)a.gC().j(0,q.gcg())
s=new D.q("mover",r,q.b)
s.b=!0
q.av(s)}}}
X.ib.prototype={}
V.fN.prototype={
a1:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if(j.c==null)return
s=j.d.length
r=P.er().gaH().i(0,j.a)
if(r==null||r.length<=s){q=d
p=!0}else{if(s>=r.length)return H.b(r,s)
q=r[s]==="1"
p=!1}c.$1(q)
o=document
n=o.createElement("label")
m=n.style
m.whiteSpace="nowrap"
J.d1(j.c).j(0,n)
l=W.lN("checkbox")
l.checked=q
W.V(l,"change",new V.fO(j,c,l,s),!1)
n.children
n.appendChild(l)
k=o.createElement("span")
k.textContent=b
n.children
n.appendChild(k)
J.d1(j.c).j(0,o.createElement("br"))
j.d.push(l)
if(p)j.cE(s,q)},
p:function(a,b,c){return this.a1(a,b,c,!1)},
cE:function(a,b){var s,r,q,p,o,n=this.a,m=P.er().gaH().i(0,n)
if(m==null)m=""
s=m.length
if(s<a)m=C.a.hb(m,a-s+1,"0")
r=a>0?C.a.u(m,0,a):""
r+=b?"1":"0"
s=a+1
if(s<m.length)r+=C.a.aM(m,s)
q=P.er()
s=t.X
p=P.lS(q.gaH(),s,s)
p.l(0,n,r)
o=q.c3(0,p)
n=window.history
s=o.gb6()
n.toString
n.replaceState(new P.fd([],[]).b0(""),"",s)}}
V.fO.prototype={
$1:function(a){var s=this,r=s.c
s.b.$1(r.checked)
s.a.cE(s.d,r.checked)}}
V.kJ.prototype={
$1:function(a){var s=C.d.df(this.a.gfZ(),2)
if(s!=="0.00")P.lt(s+" fps")}}
V.hV.prototype={
a1:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.er().gaH().i(0,H.f(s))
if(r==null)if(d){c.$0()
k.cD(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.d1(k.c).j(0,o)
m=W.lN("radio")
m.checked=q
m.name=s
W.V(m,"change",new V.hW(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.d1(k.c).j(0,p.createElement("br"))},
p:function(a,b,c){return this.a1(a,b,c,!1)},
cD:function(a){var s,r,q=P.er(),p=t.X,o=P.lS(q.gaH(),p,p)
o.l(0,this.a,a)
s=q.c3(0,o)
p=window.history
r=s.gb6()
p.toString
p.replaceState(new P.fd([],[]).b0(""),"",r)}}
V.hW.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.cD(s.d)}}}
V.i5.prototype={
dw:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.V(o,"scroll",new V.i7(m),!1)},
cI:function(a){var s,r,q,p,o,n,m,l
this.f4()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.h1(a)
q.toString
p=new H.N(p)
p=new P.bN(q.dg(new H.bA(p,p.gk(p))).a())
for(;p.A();){q=p.gI(p)
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
if(H.n9(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.b(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.li(C.P,q,C.e,!1)
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
fv:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
k.id="shellTable"
s=k.style
s.width="100%"
s.padding="0px"
s.marginLeft=m
s.marginRight=m
this.a.appendChild(k)
r=k.insertRow(-1)
s=t.a
q=s.a(r.insertCell(-1)).style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=m
q.marginRight=m
for(p=0;p<3;++p){o=l.createElement("div")
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
f4:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=new L.ih()
s.a=new H.P(t.V)
s.b=new H.P(t.w)
s.c=P.lT(t.X)
s.d=s.N(0,p)
r=s.N(0,p).D(0,o)
q=K.a0(new H.N("*"))
r.a.push(q)
r.c=!0
r=s.N(0,o).D(0,o)
q=new K.aO()
q.a=[]
r.a.push(q)
r=K.a0(new H.N("*"))
q.a.push(r)
r=s.N(0,o).D(0,"BoldEnd")
q=K.a0(new H.N("*"))
r.a.push(q)
r.c=!0
r=s.N(0,p).D(0,n)
q=K.a0(new H.N("_"))
r.a.push(q)
r.c=!0
r=s.N(0,n).D(0,n)
q=new K.aO()
q.a=[]
r.a.push(q)
r=K.a0(new H.N("_"))
q.a.push(r)
r=s.N(0,n).D(0,m)
q=K.a0(new H.N("_"))
r.a.push(q)
r.c=!0
r=s.N(0,p).D(0,l)
q=K.a0(new H.N("`"))
r.a.push(q)
r.c=!0
r=s.N(0,l).D(0,l)
q=new K.aO()
q.a=[]
r.a.push(q)
r=K.a0(new H.N("`"))
q.a.push(r)
r=s.N(0,l).D(0,"CodeEnd")
q=K.a0(new H.N("`"))
r.a.push(q)
r.c=!0
r=s.N(0,p).D(0,k)
q=K.a0(new H.N("["))
r.a.push(q)
r.c=!0
r=s.N(0,k).D(0,j)
q=K.a0(new H.N("|"))
r.a.push(q)
q=s.N(0,k).D(0,i)
r=K.a0(new H.N("]"))
q.a.push(r)
q.c=!0
q=s.N(0,k).D(0,k)
r=new K.aO()
r.a=[]
q.a.push(r)
q=K.a0(new H.N("|]"))
r.a.push(q)
q=s.N(0,j).D(0,i)
r=K.a0(new H.N("]"))
q.a.push(r)
q.c=!0
q=s.N(0,j).D(0,j)
r=new K.aO()
r.a=[]
q.a.push(r)
q=K.a0(new H.N("|]"))
r.a.push(q)
s.N(0,p).D(0,h).a.push(new K.fC())
q=s.N(0,h).D(0,h)
r=new K.aO()
r.a=[]
q.a.push(r)
q=K.a0(new H.N("*_`["))
r.a.push(q)
q=s.N(0,"BoldEnd")
q.d=q.a.b_(o)
q=s.N(0,m)
q.d=q.a.b_(n)
q=s.N(0,"CodeEnd")
q.d=q.a.b_(l)
q=s.N(0,i)
q.d=q.a.b_("Link")
q=s.N(0,h)
q.d=q.a.b_(h)
this.b=s}}
V.i7.prototype={
$1:function(a){P.mh(C.m,new V.i6(this.a))}}
V.i6.prototype={
$0:function(){var s=C.d.ai(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
Z.jV.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.Q!==a){r.Q=a
s=new D.q("showFilled",!a,a)
s.b=!0
r.Z(s)}}}
Z.jW.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.ch!==a){r.ch=a
s=new D.q("showWireFrame",!a,a)
s.b=!0
r.Z(s)}}}
Z.jX.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.cx!==a){r.cx=a
s=new D.q("showVertices",!a,a)
s.b=!0
r.Z(s)}}}
Z.k7.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.cy!==a){r.cy=a
s=new D.q("showNormals",!a,a)
s.b=!0
r.Z(s)}}}
Z.ki.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.db!==a){r.db=a
s=new D.q("showBinormals",!a,a)
s.b=!0
r.Z(s)}}}
Z.kt.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.dx!==a){r.dx=a
s=new D.q("showTangentals",!a,a)
s.b=!0
r.Z(s)}}}
Z.kC.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.fr!==a){r.fr=a
s=new D.q("showFaceCenters",!a,a)
s.b=!0
r.Z(s)}}}
Z.kD.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.fx!==a){r.fx=a
s=new D.q("showFaceNormals",!a,a)
s.b=!0
r.Z(s)}}}
Z.kE.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.fy!==a){r.fy=a
s=new D.q("showFaceBinormals",!a,a)
s.b=!0
r.Z(s)}}}
Z.kF.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.go!==a){r.go=a
s=new D.q("showFaceTangentals",!a,a)
s.b=!0
r.Z(s)}}}
Z.kG.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.id!==a){r.id=a
s=new D.q("showColorFill",!a,a)
s.b=!0
r.Z(s)}}}
Z.jY.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.k1!==a){r.k1=a
s=new D.q("showTxt2DColor",!a,a)
s.b=!0
r.Z(s)}}}
Z.jZ.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.dy!==a){r.dy=a
s=new D.q("showTxtCube",!a,a)
s.b=!0
r.Z(s)}}}
Z.k_.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.k2!==a){r.k2=a
s=new D.q("showWeight",!a,a)
s.b=!0
r.Z(s)}}}
Z.k0.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.r1!==a){r.r1=a
s=new D.q("showBend",!a,a)
s.b=!0
r.Z(s)}}}
Z.k1.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.k3!==a){r.k3=a
s=new D.q("showAxis",!a,a)
s.b=!0
r.Z(s)}}}
Z.k2.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.k4!==a){r.k4=a
s=new D.q("showAABB",!a,a)
s.b=!0
r.Z(s)}}}
Z.kH.prototype={
$1:function(a){a.fF()
this.a.sc9(0,a)}}
Z.k3.prototype={
$0:function(){var s,r,q,p,o=null,n=F.Q(),m=n.a,l=new V.n(-1,-1,1).B(),k=m.b8(new V.a5(1,2,4,6),V.fP(255,0,0),new V.D(-1,-1,0),new V.S(0,1),l,o)
l=n.a
m=new V.n(1,-1,1).B()
s=l.b8(new V.a5(0,3,4,6),V.fP(0,0,255),new V.D(1,-1,0),new V.S(1,1),m,o)
m=n.a
l=new V.n(1,1,1).B()
r=m.b8(new V.a5(0,2,5,6),V.fP(0,128,0),new V.D(1,1,0),new V.S(1,0),l,o)
l=n.a
m=V.ay()
q=new V.n(-1,1,1).B()
p=l.b8(new V.a5(0,2,4,7),V.fP(255,255,0),new V.D(-1,1,0),m,q,o)
n.d.cG([k,s,r,p])
n.ab()
this.a.$1(n)}}
Z.k4.prototype={
$0:function(){this.a.$1(F.jv(1,null,null,1))}}
Z.k5.prototype={
$0:function(){this.a.$1(F.jv(8,null,null,8))}}
Z.k6.prototype={
$0:function(){this.a.$1(F.jv(15,null,new Z.jU(),15))}}
Z.jU.prototype={
$3:function(a,b,c){var s=Math.cos(c*4*3.141592653589793+3.141592653589793),r=Math.cos(b*4*3.141592653589793+3.141592653589793),q=a.f,p=new V.n(q.a,q.b,q.c).B()
q=a.f
r=p.n(0,s*0.1+r*0.1)
a.sT(0,q.m(0,new V.D(r.a,r.b,r.c)))}}
Z.k8.prototype={
$0:function(){this.a.$1(F.jB(-1,!1,0,null,8))}}
Z.k9.prototype={
$0:function(){this.a.$1(F.jB(-1,!1,0,null,30))}}
Z.ka.prototype={
$0:function(){this.a.$1(F.lo(!0,1,8,1))}}
Z.kb.prototype={
$0:function(){this.a.$1(F.lo(!0,8,16,1))}}
Z.kc.prototype={
$0:function(){this.a.$1(F.lo(!1,1,12,0))}}
Z.kd.prototype={
$0:function(){this.a.$1(F.mV(!0,!0,25,new Z.jT(),50))}}
Z.jT.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}}
Z.ke.prototype={
$0:function(){this.a.$1(F.n4(10,20))}}
Z.kf.prototype={
$0:function(){this.a.$1(F.n4(20,40))}}
Z.kg.prototype={
$0:function(){this.a.$1(F.n3(2))}}
Z.kh.prototype={
$0:function(){this.a.$1(F.n3(3))}}
Z.kj.prototype={
$0:function(){this.a.$1(F.lu(6,null,6))}}
Z.kk.prototype={
$0:function(){this.a.$1(F.lu(10,null,10))}}
Z.kl.prototype={
$0:function(){this.a.$1(F.lu(10,new Z.jS(),10))}}
Z.jS.prototype={
$2:function(a,b){var s=a-0.5,r=b-0.5
return Math.cos(Math.sqrt(s*s+r*r)*3.141592653589793)*0.3}}
Z.km.prototype={
$0:function(){this.a.$1(F.q0())}}
Z.kn.prototype={
$0:function(){this.a.$1(F.pT())}}
Z.ko.prototype={
$0:function(){this.a.$1(F.n0(4,null,4))}}
Z.kp.prototype={
$0:function(){this.a.$1(F.n0(16,new Z.jR(),16))}}
Z.jR.prototype={
$2:function(a,b){return Math.sin(a*8)*Math.cos(b*8)*0.3}}
Z.kq.prototype={
$0:function(){this.a.sa8(0.01)}}
Z.kr.prototype={
$0:function(){this.a.sa8(0.02)}}
Z.ks.prototype={
$0:function(){this.a.sa8(0.04)}}
Z.ku.prototype={
$0:function(){this.a.sa8(0.06)}}
Z.kv.prototype={
$0:function(){this.a.sa8(0.08)}}
Z.kw.prototype={
$0:function(){this.a.sa8(0.1)}}
Z.kx.prototype={
$0:function(){this.a.sa8(0.2)}}
Z.ky.prototype={
$0:function(){this.a.sa8(0.4)}}
Z.kz.prototype={
$0:function(){this.a.sa8(0.6)}}
Z.kA.prototype={
$0:function(){this.a.sa8(0.8)}}
Z.kB.prototype={
$0:function(){this.a.sa8(1)}};(function aliases(){var s=J.a.prototype
s.dq=s.h
s=J.aL.prototype
s.dr=s.h
s=K.dm.prototype
s.dn=s.aD
s.cb=s.h})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"pj","nV",19)
r(P,"pE","os",9)
r(P,"pF","ot",9)
r(P,"pG","ou",9)
q(P,"mU","pz",10)
r(W,"r8","h_",20)
var k
p(k=E.bu.prototype,"gd4",0,0,null,["$1","$0"],["d5","ha"],2,0)
p(k,"gd2",0,0,null,["$1","$0"],["d3","h9"],2,0)
p(k,"gd0",0,0,null,["$1","$0"],["d1","h6"],2,0)
o(k,"gh4","h5",5)
o(k,"gh7","h8",5)
p(k=E.ed.prototype,"gcd",0,0,null,["$1","$0"],["cf","ce"],2,0)
n(k,"ghm","dc",10)
m(k=X.es.prototype,"gex","ey",6)
m(k,"gek","el",6)
m(k,"geq","er",3)
m(k,"geB","eC",11)
m(k,"gez","eA",11)
m(k,"geE","eF",3)
m(k,"geI","eJ",3)
m(k,"gev","ew",3)
m(k,"geG","eH",3)
m(k,"ges","eu",3)
m(k,"geK","eL",17)
m(k,"geM","eN",6)
m(k,"geV","eW",7)
m(k,"geR","eS",7)
m(k,"geT","eU",7)
l(V.a6.prototype,"gk","aU",8)
l(V.n.prototype,"gk","aU",8)
l(V.aV.prototype,"gk","aU",8)
p(k=U.bw.prototype,"gay",0,0,null,["$1","$0"],["O","a7"],2,0)
o(k,"gei","ej",12)
o(k,"geP","eQ",12)
p(k=U.ct.prototype,"gay",0,0,null,["$1","$0"],["O","a7"],2,0)
m(k,"gbv","bw",1)
m(k,"gbx","by",1)
m(k,"gbz","bA",1)
p(k=U.cu.prototype,"gay",0,0,null,["$1","$0"],["O","a7"],2,0)
m(k,"gbv","bw",1)
m(k,"gbx","by",1)
m(k,"gbz","bA",1)
m(k,"ge9","ea",1)
m(k,"geb","ec",1)
m(k,"gff","fg",1)
m(k,"gfd","fe",1)
m(k,"gfb","fc",1)
m(U.cv.prototype,"gee","ef",1)
p(k=M.dh.prototype,"gaj",0,0,null,["$1","$0"],["an","dA"],2,0)
o(k,"gem","en",5)
o(k,"geo","ep",5)
m(k=O.dp.prototype,"gf6","f7",0)
p(k,"gfq",0,1,null,["$2$color","$1"],["cF","fs"],18,0)
m(k,"gfm","fn",0)
m(k,"geg","eh",0)
m(k,"gdO","dP",0)
m(k,"gf9","fa",0)
m(k,"gfk","fl",0)
m(k,"ge2","e3",0)
m(k,"ge4","e5",0)
m(k,"ge0","e1",0)
m(k,"ge6","e7",0)
m(k,"gdS","dT",0)
m(k,"gfi","fj",0)
m(k,"gfo","fp",0)
m(k,"gdM","dN",0)
m(k,"gck","dK",0)
m(k,"gci","dE",0)
p(X.dR.prototype,"gcg",0,0,null,["$1","$0"],["av","dD"],2,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.J,null)
q(P.J,[H.kY,J.a,J.a9,P.G,P.cC,P.h,H.bA,P.dr,H.c6,H.eo,H.bZ,H.il,H.hR,H.f9,H.br,P.as,H.hF,H.dB,H.du,H.ak,H.eM,P.cO,P.bM,P.bN,P.ew,P.e7,P.e8,P.cr,P.jl,P.cI,P.j8,P.cB,P.C,P.fn,P.ch,P.da,P.jk,P.jj,P.bl,P.ab,P.U,P.b7,P.dQ,P.cq,P.eJ,P.h8,P.l,P.E,P.aj,P.z,P.X,P.bj,P.iC,P.f3,W.fS,W.kU,W.l7,W.H,W.c7,P.jc,P.f1,P.bh,K.fC,K.dm,K.i1,L.e4,L.ee,L.ef,L.ih,O.bs,O.ci,E.fK,E.bu,E.bq,E.bG,E.j4,E.hX,E.ed,Z.eu,Z.j_,Z.d7,Z.d8,Z.c9,Z.cx,D.fM,D.c4,D.W,X.d9,X.dx,X.hD,X.hJ,X.ai,X.hP,X.ii,X.es,V.aa,V.A,V.h1,V.dD,V.S,V.D,V.a5,V.dX,V.co,V.a6,V.n,V.aV,U.ct,U.cu,U.cv,M.dh,A.fE,A.fF,A.ip,A.iw,F.di,F.h5,F.dA,F.hE,F.hS,F.al,F.i2,F.i3,F.i4,F.iN,F.iO,F.iP,F.iT,F.iU,F.iV,F.iW,F.iX,O.id,X.kS,X.ib,X.dR,V.fN,V.hV,V.i5])
q(J.a,[J.ds,J.cc,J.aL,J.ah,J.b9,J.ax,H.cj,H.R,W.d,W.fB,W.b5,W.aw,W.F,W.eB,W.ag,W.fV,W.fW,W.eD,W.c2,W.eF,W.fX,W.i,W.eK,W.aK,W.ha,W.eO,W.c8,W.hI,W.hM,W.eS,W.eT,W.aN,W.eU,W.eW,W.aP,W.f_,W.f2,W.aR,W.f4,W.aS,W.fa,W.aB,W.ff,W.ig,W.aU,W.fh,W.ij,W.iH,W.fo,W.fq,W.fs,W.fu,W.fw,P.bb,P.eQ,P.be,P.eY,P.hT,P.fb,P.bg,P.fj,P.fG,P.ex,P.f7])
q(J.aL,[J.dS,J.bi,J.ar])
r(J.dv,J.ah)
q(J.b9,[J.cb,J.dt])
q(P.G,[H.dy,H.dM,H.dw,H.en,H.dZ,H.eH,P.d4,P.dN,P.af,P.ep,P.em,P.e5,P.dc,P.de])
r(P.ce,P.cC)
q(P.ce,[H.bJ,W.ez,W.ey,P.dk])
r(H.N,H.bJ)
q(P.h,[H.j,H.bc,H.cy,P.ca])
r(H.c3,H.bc)
q(P.dr,[H.dC,H.ev])
r(H.c_,H.bZ)
q(H.br,[H.ic,H.hC,H.jJ,H.jK,H.jL,P.j1,P.j0,P.j2,P.j3,P.jg,P.jf,P.jt,P.ja,P.jb,P.hG,P.hK,P.iK,P.iL,P.fY,P.fZ,P.iG,P.iD,P.iE,P.iF,P.ji,P.jh,P.jp,P.jo,P.jq,P.jr,W.hN,W.hO,W.i0,W.ia,W.j5,P.jd,P.je,P.ju,P.h6,P.h7,P.fH,E.hY,E.hZ,E.i_,E.ie,D.h3,D.h4,F.jm,F.jC,F.jw,F.jy,F.jz,F.jA,F.jQ,F.kK,F.kL,F.kM,F.jP,F.jx,F.jG,F.jH,F.iZ,F.iY,F.iQ,F.iR,O.ho,O.hp,O.hz,O.hy,O.hA,O.hB,O.hu,O.hn,O.hf,O.hq,O.ht,O.hj,O.hk,O.hi,O.hl,O.hg,O.hh,O.hr,O.hs,O.hv,O.hw,O.hx,O.hm,O.hd,O.he,O.hc,O.hb,V.fO,V.kJ,V.hW,V.i7,V.i6,Z.jV,Z.jW,Z.jX,Z.k7,Z.ki,Z.kt,Z.kC,Z.kD,Z.kE,Z.kF,Z.kG,Z.jY,Z.jZ,Z.k_,Z.k0,Z.k1,Z.k2,Z.kH,Z.k3,Z.k4,Z.k5,Z.k6,Z.jU,Z.k8,Z.k9,Z.ka,Z.kb,Z.kc,Z.kd,Z.jT,Z.ke,Z.kf,Z.kg,Z.kh,Z.kj,Z.kk,Z.kl,Z.jS,Z.km,Z.kn,Z.ko,Z.kp,Z.jR,Z.kq,Z.kr,Z.ks,Z.ku,Z.kv,Z.kw,Z.kx,Z.ky,Z.kz,Z.kA,Z.kB])
q(H.ic,[H.i9,H.bX])
r(P.cg,P.as)
r(H.P,P.cg)
r(H.cd,H.j)
r(H.bE,H.R)
q(H.bE,[H.cE,H.cG])
r(H.cF,H.cE)
r(H.bd,H.cF)
r(H.cH,H.cG)
r(H.ck,H.cH)
q(H.ck,[H.dH,H.dI,H.dJ,H.dK,H.dL,H.cl,H.bF])
r(H.cP,H.eH)
r(P.cL,P.ca)
r(P.j9,P.jl)
r(P.cA,P.cI)
r(P.cS,P.ch)
r(P.bK,P.cS)
q(P.da,[P.fI,P.h0])
r(P.dd,P.e8)
q(P.dd,[P.fJ,P.iM,P.iJ])
r(P.iI,P.h0)
q(P.U,[P.a1,P.o])
q(P.af,[P.bI,P.dn])
r(P.eC,P.bj)
q(W.d,[W.t,W.dj,W.bB,W.aA,W.cJ,W.aC,W.am,W.cM,W.et,W.bL,P.d6,P.aJ])
q(W.t,[W.M,W.ap])
q(W.M,[W.m,P.k])
q(W.m,[W.d2,W.d3,W.b6,W.dl,W.bx,W.e_,W.aT])
r(W.fR,W.aw)
r(W.c0,W.eB)
q(W.ag,[W.fT,W.fU])
r(W.eE,W.eD)
r(W.c1,W.eE)
r(W.eG,W.eF)
r(W.dg,W.eG)
r(W.aq,W.b5)
r(W.eL,W.eK)
r(W.bv,W.eL)
r(W.eP,W.eO)
r(W.b8,W.eP)
r(W.aE,W.i)
q(W.aE,[W.ba,W.ac,W.bf])
r(W.dE,W.eS)
r(W.dF,W.eT)
r(W.eV,W.eU)
r(W.dG,W.eV)
r(W.eX,W.eW)
r(W.cm,W.eX)
r(W.f0,W.f_)
r(W.dT,W.f0)
r(W.dY,W.f2)
r(W.cK,W.cJ)
r(W.e1,W.cK)
r(W.f5,W.f4)
r(W.e2,W.f5)
r(W.e6,W.fa)
r(W.fg,W.ff)
r(W.eb,W.fg)
r(W.cN,W.cM)
r(W.ec,W.cN)
r(W.fi,W.fh)
r(W.eg,W.fi)
r(W.aW,W.ac)
r(W.fp,W.fo)
r(W.eA,W.fp)
r(W.cz,W.c2)
r(W.fr,W.fq)
r(W.eN,W.fr)
r(W.ft,W.fs)
r(W.cD,W.ft)
r(W.fv,W.fu)
r(W.f6,W.fv)
r(W.fx,W.fw)
r(W.fe,W.fx)
r(W.eI,P.e7)
r(P.fd,P.jc)
r(P.ad,P.f1)
r(P.eR,P.eQ)
r(P.dz,P.eR)
r(P.eZ,P.eY)
r(P.dO,P.eZ)
r(P.fc,P.fb)
r(P.e9,P.fc)
r(P.fk,P.fj)
r(P.eh,P.fk)
r(P.d5,P.ex)
r(P.dP,P.aJ)
r(P.f8,P.f7)
r(P.e3,P.f8)
q(K.dm,[K.aO,L.ik])
q(E.fK,[Z.fL,A.cp])
q(D.W,[D.by,D.bz,D.q,X.dU])
q(X.dU,[X.cf,X.bC,X.bD,X.cs])
q(D.fM,[U.fQ,U.Z])
r(U.bY,U.Z)
r(U.bw,O.bs)
r(A.dq,A.cp)
q(A.ip,[A.iq,A.it,A.iu,A.iv,A.ir,A.ei,A.is,A.ej,A.ek,A.ix,A.iy,A.el,A.iz,A.iA])
r(F.i8,F.h5)
r(F.io,F.hE)
r(F.cw,F.iU)
r(F.hU,F.iV)
q(F.iW,[F.iS,F.hQ])
r(O.dp,O.id)
r(X.h9,X.ib)
s(H.bJ,H.eo)
s(H.cE,P.C)
s(H.cF,H.c6)
s(H.cG,P.C)
s(H.cH,H.c6)
s(P.cC,P.C)
s(P.cS,P.fn)
s(W.eB,W.fS)
s(W.eD,P.C)
s(W.eE,W.H)
s(W.eF,P.C)
s(W.eG,W.H)
s(W.eK,P.C)
s(W.eL,W.H)
s(W.eO,P.C)
s(W.eP,W.H)
s(W.eS,P.as)
s(W.eT,P.as)
s(W.eU,P.C)
s(W.eV,W.H)
s(W.eW,P.C)
s(W.eX,W.H)
s(W.f_,P.C)
s(W.f0,W.H)
s(W.f2,P.as)
s(W.cJ,P.C)
s(W.cK,W.H)
s(W.f4,P.C)
s(W.f5,W.H)
s(W.fa,P.as)
s(W.ff,P.C)
s(W.fg,W.H)
s(W.cM,P.C)
s(W.cN,W.H)
s(W.fh,P.C)
s(W.fi,W.H)
s(W.fo,P.C)
s(W.fp,W.H)
s(W.fq,P.C)
s(W.fr,W.H)
s(W.fs,P.C)
s(W.ft,W.H)
s(W.fu,P.C)
s(W.fv,W.H)
s(W.fw,P.C)
s(W.fx,W.H)
s(P.eQ,P.C)
s(P.eR,W.H)
s(P.eY,P.C)
s(P.eZ,W.H)
s(P.fb,P.C)
s(P.fc,W.H)
s(P.fj,P.C)
s(P.fk,W.H)
s(P.ex,P.as)
s(P.f7,P.C)
s(P.f8,W.H)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",a1:"double",U:"num",z:"String",bl:"bool",aj:"Null",l:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["al*(al*)","~(W*)","~([W*])","~(ac*)","aj(@,@)","~(o*,h<bu*>*)","~(i*)","~(bf*)","a1*()","~(~())","~()","~(ba*)","~(o*,h<Z*>*)","@(@)","aj(@)","aj(J?,J?)","bh(@,@)","~(aW*)","al*(al*{color:A*})","o(@,@)","z(d)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oP(v.typeUniverse,JSON.parse('{"ar":"aL","dS":"aL","bi":"aL","q3":"i","qd":"i","q5":"aJ","q4":"d","ql":"d","qn":"d","q2":"k","qf":"k","q6":"m","qi":"m","qg":"t","qc":"t","qN":"am","qa":"aE","q7":"ap","qo":"ap","qm":"ac","qh":"b8","qk":"bd","qj":"R","ds":{"bl":[]},"aL":{"lP":[]},"ah":{"l":["1"],"j":["1"],"h":["1"]},"dv":{"l":["1"],"j":["1"],"h":["1"]},"b9":{"a1":[],"U":[]},"cb":{"a1":[],"o":[],"U":[]},"dt":{"a1":[],"U":[]},"ax":{"z":[]},"dy":{"G":[]},"N":{"l":["o"],"j":["o"],"h":["o"]},"j":{"h":["1"]},"bc":{"h":["2"]},"c3":{"j":["2"],"h":["2"]},"cy":{"h":["1"]},"bJ":{"l":["1"],"j":["1"],"h":["1"]},"bZ":{"E":["1","2"]},"c_":{"E":["1","2"]},"dM":{"G":[]},"dw":{"G":[]},"en":{"G":[]},"dZ":{"G":[]},"P":{"E":["1","2"]},"cd":{"j":["1"],"h":["1"]},"du":{"m8":[]},"bE":{"p":["1"],"R":[]},"bd":{"p":["a1"],"l":["a1"],"R":[],"j":["a1"],"h":["a1"]},"ck":{"p":["o"],"l":["o"],"R":[],"j":["o"],"h":["o"]},"dH":{"p":["o"],"l":["o"],"R":[],"j":["o"],"h":["o"]},"dI":{"p":["o"],"l":["o"],"R":[],"j":["o"],"h":["o"]},"dJ":{"p":["o"],"l":["o"],"R":[],"j":["o"],"h":["o"]},"dK":{"p":["o"],"l":["o"],"R":[],"j":["o"],"h":["o"]},"dL":{"p":["o"],"l":["o"],"R":[],"j":["o"],"h":["o"]},"cl":{"p":["o"],"l":["o"],"R":[],"j":["o"],"h":["o"]},"bF":{"bh":[],"p":["o"],"l":["o"],"R":[],"j":["o"],"h":["o"]},"eH":{"G":[]},"cP":{"G":[]},"cO":{"cr":[]},"cL":{"h":["1"]},"cA":{"j":["1"],"h":["1"]},"ca":{"h":["1"]},"ce":{"l":["1"],"j":["1"],"h":["1"]},"cg":{"E":["1","2"]},"as":{"E":["1","2"]},"ch":{"E":["1","2"]},"bK":{"E":["1","2"]},"cI":{"j":["1"],"h":["1"]},"a1":{"U":[]},"d4":{"G":[]},"dN":{"G":[]},"af":{"G":[]},"bI":{"G":[]},"dn":{"G":[]},"ep":{"G":[]},"em":{"G":[]},"e5":{"G":[]},"dc":{"G":[]},"dQ":{"G":[]},"cq":{"G":[]},"de":{"G":[]},"o":{"U":[]},"l":{"j":["1"],"h":["1"]},"bj":{"eq":[]},"f3":{"eq":[]},"eC":{"eq":[]},"m":{"M":[],"t":[],"d":[]},"d2":{"M":[],"t":[],"d":[]},"d3":{"M":[],"t":[],"d":[]},"b6":{"M":[],"t":[],"d":[]},"ap":{"t":[],"d":[]},"c1":{"l":["ad<U>"],"p":["ad<U>"],"j":["ad<U>"],"h":["ad<U>"]},"c2":{"ad":["U"]},"dg":{"l":["z"],"p":["z"],"j":["z"],"h":["z"]},"ez":{"l":["M"],"j":["M"],"h":["M"]},"M":{"t":[],"d":[]},"aq":{"b5":[]},"bv":{"l":["aq"],"p":["aq"],"j":["aq"],"h":["aq"]},"dj":{"d":[]},"dl":{"M":[],"t":[],"d":[]},"b8":{"l":["t"],"p":["t"],"j":["t"],"h":["t"]},"bx":{"M":[],"t":[],"d":[]},"ba":{"i":[]},"bB":{"d":[]},"dE":{"E":["z","@"]},"dF":{"E":["z","@"]},"dG":{"l":["aN"],"p":["aN"],"j":["aN"],"h":["aN"]},"ac":{"i":[]},"ey":{"l":["t"],"j":["t"],"h":["t"]},"t":{"d":[]},"cm":{"l":["t"],"p":["t"],"j":["t"],"h":["t"]},"dT":{"l":["aP"],"p":["aP"],"j":["aP"],"h":["aP"]},"dY":{"E":["z","@"]},"e_":{"M":[],"t":[],"d":[]},"aA":{"d":[]},"e1":{"l":["aA"],"p":["aA"],"d":[],"j":["aA"],"h":["aA"]},"e2":{"l":["aR"],"p":["aR"],"j":["aR"],"h":["aR"]},"e6":{"E":["z","z"]},"aT":{"M":[],"t":[],"d":[]},"aC":{"d":[]},"am":{"d":[]},"eb":{"l":["am"],"p":["am"],"j":["am"],"h":["am"]},"ec":{"l":["aC"],"p":["aC"],"d":[],"j":["aC"],"h":["aC"]},"bf":{"i":[]},"eg":{"l":["aU"],"p":["aU"],"j":["aU"],"h":["aU"]},"aE":{"i":[]},"et":{"d":[]},"aW":{"ac":[],"i":[]},"bL":{"d":[]},"eA":{"l":["F"],"p":["F"],"j":["F"],"h":["F"]},"cz":{"ad":["U"]},"eN":{"l":["aK?"],"p":["aK?"],"j":["aK?"],"h":["aK?"]},"cD":{"l":["t"],"p":["t"],"j":["t"],"h":["t"]},"f6":{"l":["aS"],"p":["aS"],"j":["aS"],"h":["aS"]},"fe":{"l":["aB"],"p":["aB"],"j":["aB"],"h":["aB"]},"dk":{"l":["M"],"j":["M"],"h":["M"]},"ad":{"f1":["1"]},"dz":{"l":["bb"],"j":["bb"],"h":["bb"]},"dO":{"l":["be"],"j":["be"],"h":["be"]},"e9":{"l":["z"],"j":["z"],"h":["z"]},"k":{"M":[],"t":[],"d":[]},"eh":{"l":["bg"],"j":["bg"],"h":["bg"]},"bh":{"l":["o"],"j":["o"],"h":["o"]},"d5":{"E":["z","@"]},"d6":{"d":[]},"aJ":{"d":[]},"dP":{"d":[]},"e3":{"l":["E<@,@>"],"j":["E<@,@>"],"h":["E<@,@>"]},"bs":{"h":["1*"]},"by":{"W":[]},"bz":{"W":[]},"q":{"W":[]},"cf":{"W":[]},"bC":{"W":[]},"bD":{"W":[]},"dU":{"W":[]},"cs":{"W":[]},"bY":{"Z":[]},"bw":{"Z":[],"h":["Z*"]},"ct":{"Z":[]},"cu":{"Z":[]},"cv":{"Z":[]},"dq":{"cp":[]}}'))
H.oO(v.typeUniverse,JSON.parse('{"ah":1,"dv":1,"a9":1,"j":1,"bA":1,"bc":2,"c3":2,"dC":2,"cy":1,"ev":1,"c6":1,"eo":1,"bJ":1,"bZ":2,"cd":1,"dB":1,"bE":1,"bN":1,"cL":1,"e7":1,"e8":2,"cB":1,"ca":1,"ce":1,"C":1,"cg":2,"as":2,"fn":2,"ch":2,"cI":1,"cC":1,"cS":2,"da":2,"dd":2,"h":1,"dr":1,"l":1,"eI":1,"H":1,"c7":1,"bs":1,"by":1,"bz":1,"q":1}'))
var u={j:"May not create a face with a first vertex which is not attached to a shape.",i:"May not create a face with vertices attached to different shapes.",m:"May not create a line with a null end vertex.",p:"May not create a line with a null start vertex.",g:"May not create a line with a start vertex which is not attached to a shape.",q:"May not create a line with vertices attached to different shapes."}
var t=(function rtii(){var s=H.mX
return{d:s("b5"),U:s("j<@>"),h:s("M"),C:s("G"),D:s("i"),L:s("aq"),I:s("bv"),Z:s("qe"),s:s("c8"),S:s("bx"),b:s("ah<@>"),T:s("cc"),m:s("lP"),g:s("ar"),p:s("p<@>"),k:s("P<z*,d7*>"),G:s("P<z*,cp*>"),V:s("P<z*,e4*>"),i:s("P<z*,z*>"),w:s("P<z*,ef*>"),E:s("P<o*,bl*>"),j:s("l<@>"),f:s("E<@,@>"),M:s("bB"),o:s("cj"),t:s("R"),Y:s("bF"),P:s("aj"),K:s("J"),q:s("ad<U>"),W:s("m8"),N:s("z"),a:s("aT"),l:s("cr"),u:s("bi"),Q:s("bK<z,z>"),R:s("eq"),y:s("bl"),v:s("a1"),z:s("@"),x:s("o"),B:s("b6*"),J:s("cf*"),c:s("bC*"),F:s("bD*"),A:s("0&*"),_:s("J*"),X:s("z*"),ag:s("ee*"),ap:s("cs*"),n:s("ei*"),r:s("ej*"),b_:s("ek*"),cP:s("el*"),e:s("o*"),bc:s("lM<aj>?"),O:s("J?"),H:s("U")}})();(function constants(){var s=hunkHelpers.makeConstList
C.l=W.b6.prototype
C.K=J.a.prototype
C.b=J.ah.prototype
C.c=J.cb.prototype
C.L=J.cc.prototype
C.d=J.b9.prototype
C.a=J.ax.prototype
C.M=J.ar.prototype
C.v=J.dS.prototype
C.n=J.bi.prototype
C.w=W.aW.prototype
C.x=W.bL.prototype
C.y=new E.bq("Browser.chrome")
C.o=new E.bq("Browser.firefox")
C.p=new E.bq("Browser.edge")
C.z=new E.bq("Browser.other")
C.X=new P.fJ()
C.A=new P.fI()
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=function() {
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
C.G=function(getTagFallback) {
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
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.F=function(hooks) {
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
C.E=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.H=new P.dQ()
C.e=new P.iI()
C.I=new P.iM()
C.f=new P.j9()
C.m=new P.b7(0)
C.J=new P.b7(5e6)
C.i=s([0,0,32776,33792,1,10240,0,0])
C.j=s([0,0,65490,45055,65535,34815,65534,18431])
C.k=s([0,0,26624,1023,65534,2047,65534,2047])
C.O=s([0,0,32722,12287,65534,34815,65534,18431])
C.P=s([0,0,65498,45055,65535,34815,65534,18431])
C.h=s([0,0,24576,1023,65534,34815,65534,18431])
C.t=s([0,0,32754,11263,65534,34815,65534,18431])
C.u=s([0,0,65490,12287,65535,34815,65534,18431])
C.N=s([])
C.Q=new H.c_(0,{},C.N,H.mX("c_<z*,z*>"))
C.R=new E.bG("OperatingSystem.windows")
C.S=new E.bG("OperatingSystem.mac")
C.T=new E.bG("OperatingSystem.linux")
C.U=new E.bG("OperatingSystem.other")
C.V=new P.iJ(!1)
C.W=new P.bM(null,2)})();(function staticFields(){$.mx=null
$.av=0
$.lD=null
$.lC=null
$.mZ=null
$.mT=null
$.n7=null
$.jD=null
$.jN=null
$.lr=null
$.bP=null
$.cW=null
$.cX=null
$.ll=!1
$.at=C.f
$.a7=[]
$.lL=null
$.lU=null
$.lX=null
$.lY=null
$.m_=null
$.ma=null
$.mc=null
$.mo=null
$.mt=null
$.mq=null
$.mr=null
$.ms=null
$.mp=null
$.mv=null
$.lW=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"qb","ne",function(){return H.pN("_$dart_dartClosure")})
s($,"qp","nf",function(){return H.aD(H.im({
toString:function(){return"$receiver$"}}))})
s($,"qq","ng",function(){return H.aD(H.im({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qr","nh",function(){return H.aD(H.im(null))})
s($,"qs","ni",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qv","nl",function(){return H.aD(H.im(void 0))})
s($,"qw","nm",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"qu","nk",function(){return H.aD(H.mj(null))})
s($,"qt","nj",function(){return H.aD(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"qy","no",function(){return H.aD(H.mj(void 0))})
s($,"qx","nn",function(){return H.aD(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"qO","lv",function(){return P.or()})
s($,"qz","np",function(){return new P.iK().$0()})
s($,"qA","nq",function(){return new P.iL().$0()})
s($,"qP","nu",function(){return new Int8Array(H.js([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2]))})
s($,"qR","nv",function(){return P.oc("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"r6","nw",function(){return P.pb()})
s($,"qH","nt",function(){return Z.ao(0)})
s($,"qB","nr",function(){return Z.ao(511)})
s($,"qJ","b3",function(){return Z.ao(1)})
s($,"qI","b2",function(){return Z.ao(2)})
s($,"qD","b1",function(){return Z.ao(4)})
s($,"qK","bT",function(){return Z.ao(8)})
s($,"qL","bU",function(){return Z.ao(16)})
s($,"qE","bp",function(){return Z.ao(32)})
s($,"qF","d0",function(){return Z.ao(64)})
s($,"qG","ns",function(){return Z.ao(96)})
s($,"qM","bV",function(){return Z.ao(128)})
s($,"qC","bS",function(){return Z.ao(256)})
s($,"q9","nd",function(){return new V.h1()})
s($,"q8","B",function(){return $.nd()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cj,DataView:H.R,ArrayBufferView:H.R,Float32Array:H.bd,Float64Array:H.bd,Int16Array:H.dH,Int32Array:H.dI,Int8Array:H.dJ,Uint16Array:H.dK,Uint32Array:H.dL,Uint8ClampedArray:H.cl,CanvasPixelArray:H.cl,Uint8Array:H.bF,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLBodyElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLDivElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableColElement:W.m,HTMLTableElement:W.m,HTMLTableRowElement:W.m,HTMLTableSectionElement:W.m,HTMLTemplateElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.fB,HTMLAnchorElement:W.d2,HTMLAreaElement:W.d3,Blob:W.b5,HTMLCanvasElement:W.b6,CDATASection:W.ap,CharacterData:W.ap,Comment:W.ap,ProcessingInstruction:W.ap,Text:W.ap,CSSPerspective:W.fR,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.c0,MSStyleCSSProperties:W.c0,CSS2Properties:W.c0,CSSImageValue:W.ag,CSSKeywordValue:W.ag,CSSNumericValue:W.ag,CSSPositionValue:W.ag,CSSResourceValue:W.ag,CSSUnitValue:W.ag,CSSURLImageValue:W.ag,CSSStyleValue:W.ag,CSSMatrixComponent:W.aw,CSSRotation:W.aw,CSSScale:W.aw,CSSSkew:W.aw,CSSTranslation:W.aw,CSSTransformComponent:W.aw,CSSTransformValue:W.fT,CSSUnparsedValue:W.fU,DataTransferItemList:W.fV,DOMException:W.fW,ClientRectList:W.c1,DOMRectList:W.c1,DOMRectReadOnly:W.c2,DOMStringList:W.dg,DOMTokenList:W.fX,Element:W.M,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aq,FileList:W.bv,FileWriter:W.dj,HTMLFormElement:W.dl,Gamepad:W.aK,History:W.ha,HTMLCollection:W.b8,HTMLFormControlsCollection:W.b8,HTMLOptionsCollection:W.b8,ImageData:W.c8,HTMLInputElement:W.bx,KeyboardEvent:W.ba,Location:W.hI,MediaList:W.hM,MessagePort:W.bB,MIDIInputMap:W.dE,MIDIOutputMap:W.dF,MimeType:W.aN,MimeTypeArray:W.dG,PointerEvent:W.ac,MouseEvent:W.ac,DragEvent:W.ac,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,Attr:W.t,DocumentType:W.t,Node:W.t,NodeList:W.cm,RadioNodeList:W.cm,Plugin:W.aP,PluginArray:W.dT,RTCStatsReport:W.dY,HTMLSelectElement:W.e_,SourceBuffer:W.aA,SourceBufferList:W.e1,SpeechGrammar:W.aR,SpeechGrammarList:W.e2,SpeechRecognitionResult:W.aS,Storage:W.e6,CSSStyleSheet:W.aB,StyleSheet:W.aB,HTMLTableCellElement:W.aT,HTMLTableDataCellElement:W.aT,HTMLTableHeaderCellElement:W.aT,TextTrack:W.aC,TextTrackCue:W.am,VTTCue:W.am,TextTrackCueList:W.eb,TextTrackList:W.ec,TimeRanges:W.ig,Touch:W.aU,TouchEvent:W.bf,TouchList:W.eg,TrackDefaultList:W.ij,CompositionEvent:W.aE,FocusEvent:W.aE,TextEvent:W.aE,UIEvent:W.aE,URL:W.iH,VideoTrackList:W.et,WheelEvent:W.aW,Window:W.bL,DOMWindow:W.bL,CSSRuleList:W.eA,ClientRect:W.cz,DOMRect:W.cz,GamepadList:W.eN,NamedNodeMap:W.cD,MozNamedAttrMap:W.cD,SpeechRecognitionResultList:W.f6,StyleSheetList:W.fe,SVGLength:P.bb,SVGLengthList:P.dz,SVGNumber:P.be,SVGNumberList:P.dO,SVGPointList:P.hT,SVGStringList:P.e9,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bg,SVGTransformList:P.eh,AudioBuffer:P.fG,AudioParamMap:P.d5,AudioTrackList:P.d6,AudioContext:P.aJ,webkitAudioContext:P.aJ,BaseAudioContext:P.aJ,OfflineAudioContext:P.dP,SQLResultSetRowList:P.e3})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.bd.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
W.cJ.$nativeSuperclassTag="EventTarget"
W.cK.$nativeSuperclassTag="EventTarget"
W.cM.$nativeSuperclassTag="EventTarget"
W.cN.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Z.n5,[])
else Z.n5([])})})()
//# sourceMappingURL=test.dart.js.map
