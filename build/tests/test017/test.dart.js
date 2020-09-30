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
a[c]=function(){a[c]=function(){H.qR(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lP(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={lm:function lm(){},
lo:function(a){return new H.ek(a)},
kJ:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
or:function(a,b,c,d){if(t.G.b(a))return new H.cB(a,b,c.K("@<0>").bb(d).K("cB<1,2>"))
return new H.aW(a,b,c.K("@<0>").bb(d).K("aW<1,2>"))},
ir:function(){return new P.c9("No element")},
oh:function(){return new P.c9("Too many elements")},
oM:function(a,b){var s=J.aP(a)
if(typeof s!=="number")return s.a2()
H.eX(a,0,s-1,b)},
eX:function(a,b,c,d){if(c-b<=32)H.oL(a,b,c,d)
else H.oK(a,b,c,d)},
oL:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b6(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a5()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
oK:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a6(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a6(a6+a7,2),d=e-h,c=e+h,b=J.b6(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a5()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a5()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a5()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a5()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a5()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a5()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a5()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a5()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a5()
if(a4>0){s=a3
a3=a2
a2=s}b.l(a5,g,a)
b.l(a5,e,a1)
b.l(a5,f,a3)
b.l(a5,d,b.h(a5,a6))
b.l(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.F(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.af()
if(n<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a5()
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
if(typeof j!=="number")return j.af()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a5()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a5()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.af()
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
H.eX(a5,a6,r-2,a8)
H.eX(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.F(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.F(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.af()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}H.eX(a5,r,q,a8)}else H.eX(a5,r,q,a8)},
ek:function ek(a){this.a=a},
r:function r(a){this.a=a},
l:function l(){},
cQ:function cQ(){},
bg:function bg(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aW:function aW(a,b,c){this.a=a
this.b=b
this.$ti=c},
cB:function cB(a,b,c){this.a=a
this.b=b
this.$ti=c},
eo:function eo(a,b){this.a=null
this.b=a
this.c=b},
cU:function cU(a,b,c){this.a=a
this.b=b
this.$ti=c},
b4:function b4(a,b,c){this.a=a
this.b=b
this.$ti=c},
fD:function fD(a,b){this.a=a
this.b=b},
cG:function cG(){},
fv:function fv(){},
cb:function cb(){},
oa:function(){throw H.b(P.B("Cannot modify unmodifiable Map"))},
nw:function(a){var s,r=H.nv(a)
if(r!=null)return r
s="minified:"+a
return s},
no:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a8(a)
if(typeof s!="string")throw H.b(H.aB(a))
return s},
d1:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mq:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.b(P.a6(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.F(q,o)|32)>r)return n}return parseInt(a,b)},
eN:function(a){return H.ou(a)},
ou:function(a){var s,r,q
if(a instanceof P.O)return H.aq(H.bM(a),null)
if(J.dM(a)===C.U||t.ak.b(a)){s=C.u(a)
if(H.mp(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.mp(q))return q}}return H.aq(H.bM(a),null)},
mp:function(a){var s=a!=="Object"&&a!==""
return s},
ov:function(){if(!!self.location)return self.location.href
return null},
mo:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oD:function(a){var s,r,q,p=H.c([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.p)(a),++r){q=a[r]
if(!H.ck(q))throw H.b(H.aB(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aZ(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.aB(q))}return H.mo(p)},
mr:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.ck(q))throw H.b(H.aB(q))
if(q<0)throw H.b(H.aB(q))
if(q>65535)return H.oD(a)}return H.mo(a)},
oE:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.iK()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
av:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aZ(s,10))>>>0,56320|s&1023)}}throw H.b(P.a6(a,0,1114111,null,null))},
c5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oC:function(a){var s=H.c5(a).getFullYear()+0
return s},
oA:function(a){var s=H.c5(a).getMonth()+1
return s},
ow:function(a){var s=H.c5(a).getDate()+0
return s},
ox:function(a){var s=H.c5(a).getHours()+0
return s},
oz:function(a){var s=H.c5(a).getMinutes()+0
return s},
oB:function(a){var s=H.c5(a).getSeconds()+0
return s},
oy:function(a){var s=H.c5(a).getMilliseconds()+0
return s},
v:function(a){throw H.b(H.aB(a))},
d:function(a,b){if(a==null)J.aP(a)
throw H.b(H.co(a,b))},
co:function(a,b){var s,r,q="index"
if(!H.ck(b))return new P.ak(!0,b,q,null)
s=J.aP(a)
if(!(b<0)){if(typeof s!=="number")return H.v(s)
r=b>=s}else r=!0
if(r)return P.P(b,a,q,null,s)
return P.eO(b,q)},
qy:function(a,b,c){if(a>c)return P.a6(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a6(b,a,c,"end",null)
return new P.ak(!0,b,"end",null)},
aB:function(a){return new P.ak(!0,a,null,null)},
qs:function(a){if(typeof a!="number")throw H.b(H.aB(a))
return a},
b:function(a){var s,r
if(a==null)a=new P.eB()
s=new Error()
s.dartException=a
r=H.qS
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qS:function(){return J.a8(this.dartException)},
q:function(a){throw H.b(a)},
p:function(a){throw H.b(P.bc(a))},
b2:function(a){var s,r,q,p,o,n
a=H.ns(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.js(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
jt:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mD:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mk:function(a,b){return new H.eA(a,b==null?null:b.method)},
ln:function(a,b){var s=b==null,r=s?null:b.method
return new H.ei(a,r,s?null:b.receiver)},
ai:function(a){if(a==null)return new H.iY(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bN(a,a.dartException)
return H.qo(a)},
bN:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qo:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aZ(r,16)&8191)===10)switch(q){case 438:return H.bN(a,H.ln(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bN(a,H.mk(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.nz()
o=$.nA()
n=$.nB()
m=$.nC()
l=$.nF()
k=$.nG()
j=$.nE()
$.nD()
i=$.nI()
h=$.nH()
g=p.aq(s)
if(g!=null)return H.bN(a,H.ln(s,g))
else{g=o.aq(s)
if(g!=null){g.method="call"
return H.bN(a,H.ln(s,g))}else{g=n.aq(s)
if(g==null){g=m.aq(s)
if(g==null){g=l.aq(s)
if(g==null){g=k.aq(s)
if(g==null){g=j.aq(s)
if(g==null){g=m.aq(s)
if(g==null){g=i.aq(s)
if(g==null){g=h.aq(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bN(a,H.mk(s,g))}}return H.bN(a,new H.fu(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.d2()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bN(a,new P.ak(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.d2()
return a},
lS:function(a){var s
if(a==null)return new H.hj(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hj(a)},
qA:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
qI:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.o("Unsupported number of arguments for wrapped closure"))},
cn:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qI)
a.$identity=s
return s},
o9:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.f3().constructor.prototype):Object.create(new H.bR(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aQ
if(typeof r!=="number")return r.w()
$.aQ=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.m8(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.o5(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.m8(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
o5:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nm,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.o3:H.o2
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
o6:function(a,b,c,d){var s=H.m7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
m8:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.o8(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.o6(r,!p,s,b)
if(r===0){p=$.aQ
if(typeof p!=="number")return p.w()
$.aQ=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.lb())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aQ
if(typeof p!=="number")return p.w()
$.aQ=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.lb())+"."+H.f(s)+"("+m+");}")()},
o7:function(a,b,c,d){var s=H.m7,r=H.o4
switch(b?-1:a){case 0:throw H.b(new H.eS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
o8:function(a,b){var s,r,q,p,o,n,m=H.lb(),l=$.m5
if(l==null)l=$.m5=H.m4("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.o7(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aQ
if(typeof o!=="number")return o.w()
$.aQ=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aQ
if(typeof o!=="number")return o.w()
$.aQ=o+1
return new Function(p+o+"}")()},
lP:function(a,b,c,d,e,f,g){return H.o9(a,b,c,d,!!e,!!f,g)},
o2:function(a,b){return H.hx(v.typeUniverse,H.bM(a.a),b)},
o3:function(a,b){return H.hx(v.typeUniverse,H.bM(a.c),b)},
m7:function(a){return a.a},
o4:function(a){return a.c},
lb:function(){var s=$.m6
return s==null?$.m6=H.m4("self"):s},
m4:function(a){var s,r,q,p=new H.bR("self","target","receiver","name"),o=J.ll(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.bP("Field name "+a+" not found."))},
qR:function(a){throw H.b(new P.e3(a))},
qC:function(a){return v.getIsolateTag(a)},
t_:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qM:function(a){var s,r,q,p,o,n=$.nl.$1(a),m=$.kI[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kO[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.nf.$2(a,n)
if(q!=null){m=$.kI[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kO[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.l1(s)
$.kI[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kO[n]=s
return s}if(p==="-"){o=H.l1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nq(a,s)
if(p==="*")throw H.b(P.jC(n))
if(v.leafTags[n]===true){o=H.l1(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nq(a,s)},
nq:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lU(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
l1:function(a){return J.lU(a,!1,null,!!a.$iA)},
qN:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.l1(s)
else return J.lU(s,c,null,null)},
qG:function(){if(!0===$.lT)return
$.lT=!0
H.qH()},
qH:function(){var s,r,q,p,o,n,m,l
$.kI=Object.create(null)
$.kO=Object.create(null)
H.qF()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nr.$1(o)
if(n!=null){m=H.qN(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qF:function(){var s,r,q,p,o,n,m=C.J()
m=H.cm(C.K,H.cm(C.L,H.cm(C.v,H.cm(C.v,H.cm(C.M,H.cm(C.N,H.cm(C.O(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nl=new H.kK(p)
$.nf=new H.kL(o)
$.nr=new H.kM(n)},
cm:function(a,b){return a(b)||b},
ol:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.a5("Illegal RegExp pattern ("+String(n)+")",a,null))},
nu:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qz:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ns:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lX:function(a,b,c){var s=H.qQ(a,b,c)
return s},
qQ:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ns(b),'g'),H.qz(c))},
cv:function cv(){},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
js:function js(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eA:function eA(a,b){this.a=a
this.b=b},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a){this.a=a},
iY:function iY(a){this.a=a},
hj:function hj(a){this.a=a
this.b=null},
bz:function bz(){},
fa:function fa(){},
f3:function f3(){},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eS:function eS(a){this.a=a},
C:function C(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
it:function it(a){this.a=a},
iw:function iw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cN:function cN(a,b){this.a=a
this.$ti=b},
en:function en(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
eh:function eh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cj:function(a){return a},
b5:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.co(b,a))},
pC:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.qy(a,b,c))
return b},
cX:function cX(){},
Z:function Z(){},
c2:function c2(){},
bH:function bH(){},
cY:function cY(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
cZ:function cZ(){},
c3:function c3(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
oI:function(a,b){var s=b.c
return s==null?b.c=H.lD(a,b.z,!0):s},
mx:function(a,b){var s=b.c
return s==null?b.c=H.dC(a,"me",[b.z]):s},
my:function(a){var s=a.y
if(s===6||s===7||s===8)return H.my(a.z)
return s===11||s===12},
oH:function(a){return a.cy},
lR:function(a){return H.lE(v.typeUniverse,a,!1)},
bq:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bq(a,s,a0,a1)
if(r===s)return b
return H.n0(a,r,!0)
case 7:s=b.z
r=H.bq(a,s,a0,a1)
if(r===s)return b
return H.lD(a,r,!0)
case 8:s=b.z
r=H.bq(a,s,a0,a1)
if(r===s)return b
return H.n_(a,r,!0)
case 9:q=b.Q
p=H.dL(a,q,a0,a1)
if(p===q)return b
return H.dC(a,b.z,p)
case 10:o=b.z
n=H.bq(a,o,a0,a1)
m=b.Q
l=H.dL(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lB(a,n,l)
case 11:k=b.z
j=H.bq(a,k,a0,a1)
i=b.Q
h=H.ql(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mZ(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dL(a,g,a0,a1)
o=b.z
n=H.bq(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lC(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.hQ("Attempted to substitute unexpected RTI kind "+c))}},
dL:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bq(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qm:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bq(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
ql:function(a,b,c,d){var s,r=b.a,q=H.dL(a,r,c,d),p=b.b,o=H.dL(a,p,c,d),n=b.c,m=H.qm(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fW()
s.a=q
s.b=o
s.c=m
return s},
c:function(a,b){a[v.arrayRti]=b
return a},
qt:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.nm(s)
return a.$S()}return null},
nn:function(a,b){var s
if(H.my(b))if(a instanceof H.bz){s=H.qt(a)
if(s!=null)return s}return H.bM(a)},
bM:function(a){var s
if(a instanceof P.O){s=a.$ti
return s!=null?s:H.lL(a)}if(Array.isArray(a))return H.lJ(a)
return H.lL(J.dM(a))},
lJ:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dI:function(a){var s=a.$ti
return s!=null?s:H.lL(a)},
lL:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pJ(a,s)},
pJ:function(a,b){var s=a instanceof H.bz?a.__proto__.__proto__.constructor:b,r=H.pk(v.typeUniverse,s.name)
b.$ccache=r
return r},
nm:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lE(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pI:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dH(q,a,H.pN)
if(!H.b7(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dH(q,a,H.pQ)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.ck
else if(s===t.gR||s===t.p)r=H.pM
else if(s===t.N)r=H.pO
else r=s===t.cJ?H.lM:null
if(r!=null)return H.dH(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.qJ)){q.r="$i"+p
return H.dH(q,a,H.pP)}}else if(p===7)return H.dH(q,a,H.pG)
return H.dH(q,a,H.pE)},
dH:function(a,b,c){a.b=c
return a.b(b)},
pH:function(a){var s,r,q=this
if(!H.b7(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.pB
else if(q===t.K)r=H.pA
else r=H.pF
q.a=r
return q.a(a)},
qe:function(a){var s,r=a.y
if(!H.b7(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
pE:function(a){var s=this
if(a==null)return H.qe(s)
return H.a_(v.typeUniverse,H.nn(a,s),null,s,null)},
pG:function(a){if(a==null)return!0
return this.z.b(a)},
pP:function(a){var s=this,r=s.r
if(a instanceof P.O)return!!a[r]
return!!J.dM(a)[r]},
rY:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.n9(a,s)},
pF:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.n9(a,s)},
n9:function(a,b){throw H.b(H.pa(H.mR(a,H.nn(a,b),H.aq(b,null))))},
mR:function(a,b,c){var s=P.id(a),r=H.aq(b==null?H.bM(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
pa:function(a){return new H.dA("TypeError: "+a)},
ac:function(a,b){return new H.dA("TypeError: "+H.mR(a,null,b))},
pN:function(a){return a!=null},
pA:function(a){return a},
pQ:function(a){return!0},
pB:function(a){return a},
lM:function(a){return!0===a||!1===a},
rK:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.ac(a,"bool"))},
rM:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.ac(a,"bool"))},
rL:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.ac(a,"bool?"))},
rN:function(a){if(typeof a=="number")return a
throw H.b(H.ac(a,"double"))},
rP:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ac(a,"double"))},
rO:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ac(a,"double?"))},
ck:function(a){return typeof a=="number"&&Math.floor(a)===a},
rQ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.ac(a,"int"))},
rS:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.ac(a,"int"))},
rR:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.ac(a,"int?"))},
pM:function(a){return typeof a=="number"},
rT:function(a){if(typeof a=="number")return a
throw H.b(H.ac(a,"num"))},
rV:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ac(a,"num"))},
rU:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ac(a,"num?"))},
pO:function(a){return typeof a=="string"},
rW:function(a){if(typeof a=="string")return a
throw H.b(H.ac(a,"String"))},
lK:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.ac(a,"String"))},
rX:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.ac(a,"String?"))},
qh:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.w(r,H.aq(a[q],b))
return s},
na:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.c([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.W,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.d(a6,i)
l=C.a.w(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.w(" extends ",H.aq(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.aq(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.w(a3,H.aq(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.w(a3,H.aq(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.lZ(H.aq(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.f(a1)},
aq:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.aq(a.z,b)
return s}if(l===7){r=a.z
s=H.aq(r,b)
q=r.y
return J.lZ(q===11||q===12?C.a.w("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.aq(a.z,b))+">"
if(l===9){p=H.qn(a.z)
o=a.Q
return o.length!==0?p+("<"+H.qh(o,b)+">"):p}if(l===11)return H.na(a,b,null)
if(l===12)return H.na(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
qn:function(a){var s,r=H.nv(a)
if(r!=null)return r
s="minified:"+a
return s},
n1:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pk:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lE(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dD(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dC(a,b,q)
n[b]=o
return o}else return m},
pi:function(a,b){return H.n8(a.tR,b)},
ph:function(a,b){return H.n8(a.eT,b)},
lE:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mX(H.mV(a,null,b,c))
r.set(b,s)
return s},
hx:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mX(H.mV(a,b,c,!0))
q.set(c,r)
return r},
pj:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lB(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bp:function(a,b){b.a=H.pH
b.b=H.pI
return b},
dD:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aw(null,null)
s.y=b
s.cy=c
r=H.bp(a,s)
a.eC.set(c,r)
return r},
n0:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.pf(a,b,r,c)
a.eC.set(r,s)
return s},
pf:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b7(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aw(null,null)
q.y=6
q.z=b
q.cy=c
return H.bp(a,q)},
lD:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.pe(a,b,r,c)
a.eC.set(r,s)
return s},
pe:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b7(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.kP(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.kP(q.z))return q
else return H.oI(a,b)}}p=new H.aw(null,null)
p.y=7
p.z=b
p.cy=c
return H.bp(a,p)},
n_:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.pc(a,b,r,c)
a.eC.set(r,s)
return s},
pc:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b7(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dC(a,"me",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.aw(null,null)
q.y=8
q.z=b
q.cy=c
return H.bp(a,q)},
pg:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aw(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bp(a,s)
a.eC.set(q,r)
return r},
hw:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
pb:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dC:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hw(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aw(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bp(a,r)
a.eC.set(p,q)
return q},
lB:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hw(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aw(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bp(a,o)
a.eC.set(q,n)
return n},
mZ:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hw(m)
if(j>0){s=l>0?",":""
r=H.hw(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.pb(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aw(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bp(a,o)
a.eC.set(q,r)
return r},
lC:function(a,b,c,d){var s,r=b.cy+("<"+H.hw(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.pd(a,b,c,r,d)
a.eC.set(r,s)
return s},
pd:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bq(a,b,r,0)
m=H.dL(a,c,r,0)
return H.lC(a,n,m,c!==m)}}l=new H.aw(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bp(a,l)},
mV:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mX:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.p4(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mW(a,r,g,f,!1)
else if(q===46)r=H.mW(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bo(a.u,a.e,f.pop()))
break
case 94:f.push(H.pg(a.u,f.pop()))
break
case 35:f.push(H.dD(a.u,5,"#"))
break
case 64:f.push(H.dD(a.u,2,"@"))
break
case 126:f.push(H.dD(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.lA(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dC(p,n,o))
else{m=H.bo(p,a.e,n)
switch(m.y){case 11:f.push(H.lC(p,m,o,a.n))
break
default:f.push(H.lB(p,m,o))
break}}break
case 38:H.p5(a,f)
break
case 42:l=a.u
f.push(H.n0(l,H.bo(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.lD(l,H.bo(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.n_(l,H.bo(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fW()
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
H.lA(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mZ(p,H.bo(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.lA(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.p7(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bo(a.u,a.e,h)},
p4:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mW:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.n1(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.oH(o)+'"')
d.push(H.hx(s,o,n))}else d.push(p)
return m},
p5:function(a,b){var s=b.pop()
if(0===s){b.push(H.dD(a.u,1,"0&"))
return}if(1===s){b.push(H.dD(a.u,4,"1&"))
return}throw H.b(P.hQ("Unexpected extended operation "+H.f(s)))},
bo:function(a,b,c){if(typeof c=="string")return H.dC(a,c,a.sEA)
else if(typeof c=="number")return H.p6(a,b,c)
else return c},
lA:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bo(a,b,c[s])},
p7:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bo(a,b,c[s])},
p6:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.hQ("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.hQ("Bad index "+c+" for "+b.i(0)))},
a_:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b7(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b7(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.a_(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.a_(a,b.z,c,d,e)
if(p===6){s=d.z
return H.a_(a,b,c,s,e)}if(r===8){if(!H.a_(a,b.z,c,d,e))return!1
return H.a_(a,H.mx(a,b),c,d,e)}if(r===7){s=H.a_(a,b.z,c,d,e)
return s}if(p===8){if(H.a_(a,b,c,d.z,e))return!0
return H.a_(a,b,c,H.mx(a,d),e)}if(p===7){s=H.a_(a,b,c,d.z,e)
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
if(!H.a_(a,k,c,j,e)||!H.a_(a,j,e,k,c))return!1}return H.nb(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.nb(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pL(a,b,c,d,e)}return!1},
nb:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.a_(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.a_(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.a_(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.a_(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.a_(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pL:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.a_(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.n1(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.a_(a,H.hx(a,b,l[p]),c,r[p],e))return!1
return!0},
kP:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b7(a))if(r!==7)if(!(r===6&&H.kP(a.z)))s=r===8&&H.kP(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qJ:function(a){var s
if(!H.b7(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
b7:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
n8:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aw:function aw(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fW:function fW(){this.c=this.b=this.a=null},
fR:function fR(){},
dA:function dA(a){this.a=a},
nv:function(a){return v.mangledGlobalNames[a]},
qO:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lU:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hL:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lT==null){H.qG()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.b(P.jC("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.mg()]
if(p!=null)return p
p=H.qM(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,J.mg(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
mg:function(){var s=$.mT
return s==null?$.mT=v.getIsolateTag("_$dart_js"):s},
oi:function(a,b){if(!H.ck(a))throw H.b(P.m2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a6(a,0,4294967295,"length",null))
return J.oj(new Array(a),b)},
lk:function(a,b){if(!H.ck(a)||a<0)throw H.b(P.bP("Length must be a non-negative integer: "+H.f(a)))
return H.c(new Array(a),b.K("w<0>"))},
oj:function(a,b){return J.ll(H.c(a,b.K("w<0>")))},
ll:function(a){a.fixed$length=Array
return a},
ok:function(a,b){return J.dQ(a,b)},
dM:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cK.prototype
return J.cJ.prototype}if(typeof a=="string")return J.aU.prototype
if(a==null)return J.cL.prototype
if(typeof a=="boolean")return J.eg.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.O)return a
return J.hL(a)},
qB:function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.O)return a
return J.hL(a)},
b6:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.O)return a
return J.hL(a)},
hK:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.O)return a
return J.hL(a)},
nk:function(a){if(typeof a=="number")return J.bF.prototype
if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bJ.prototype
return a},
dN:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bJ.prototype
return a},
aN:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aG.prototype
return a}if(a instanceof P.O)return a
return J.hL(a)},
lZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qB(a).w(a,b)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dM(a).q(a,b)},
m_:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nk(a).t(a,b)},
cr:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.no(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b6(a).h(a,b)},
l7:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.no(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hK(a).l(a,b,c)},
nS:function(a,b){return J.dN(a).F(a,b)},
nT:function(a,b,c){return J.aN(a).hf(a,b,c)},
nU:function(a,b,c,d){return J.aN(a).hA(a,b,c,d)},
nV:function(a,b){return J.dN(a).Y(a,b)},
dQ:function(a,b){return J.nk(a).b1(a,b)},
l8:function(a,b){return J.b6(a).G(a,b)},
hO:function(a,b){return J.hK(a).J(a,b)},
nW:function(a,b,c,d){return J.aN(a).hZ(a,b,c,d)},
l9:function(a,b){return J.hK(a).I(a,b)},
nX:function(a){return J.aN(a).ghF(a)},
la:function(a){return J.aN(a).gdO(a)},
nY:function(a){return J.aN(a).gdQ(a)},
aj:function(a){return J.dM(a).gS(a)},
b8:function(a){return J.hK(a).gO(a)},
aP:function(a){return J.b6(a).gm(a)},
m0:function(a){return J.hK(a).iv(a)},
nZ:function(a,b){return J.aN(a).iy(a,b)},
o_:function(a,b,c){return J.dN(a).u(a,b,c)},
o0:function(a){return J.dN(a).iG(a)},
a8:function(a){return J.dM(a).i(a)},
a:function a(){},
eg:function eg(){},
cL:function cL(){},
bf:function bf(){},
eG:function eG(){},
bJ:function bJ(){},
aG:function aG(){},
w:function w(a){this.$ti=a},
is:function is(a){this.$ti=a},
a9:function a9(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bF:function bF(){},
cK:function cK(){},
cJ:function cJ(){},
aU:function aU(){}},P={
oV:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qp()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cn(new P.k2(q),1)).observe(s,{childList:true})
return new P.k1(q,s,r)}else if(self.setImmediate!=null)return P.qq()
return P.qr()},
oW:function(a){self.scheduleImmediate(H.cn(new P.k3(a),0))},
oX:function(a){self.setImmediate(H.cn(new P.k4(a),0))},
oY:function(a){P.lu(C.n,a)},
lu:function(a,b){var s=C.c.a6(a.a,1000)
return P.p8(s<0?0:s,b)},
mC:function(a,b){var s=C.c.a6(a.a,1000)
return P.p9(s<0?0:s,b)},
p8:function(a,b){var s=new P.dz()
s.eS(a,b)
return s},
p9:function(a,b){var s=new P.dz()
s.eT(a,b)
return s},
rI:function(a){return new P.ch(a,1)},
p0:function(){return C.a5},
p1:function(a){return new P.ch(a,3)},
pS:function(a,b){return new P.dw(a,b.K("dw<0>"))},
qd:function(){var s,r
for(s=$.cl;s!=null;s=$.cl){$.dK=null
r=s.b
$.cl=r
if(r==null)$.dJ=null
s.a.$0()}},
qk:function(){$.lN=!0
try{P.qd()}finally{$.dK=null
$.lN=!1
if($.cl!=null)$.lY().$1(P.ng())}},
qi:function(a){var s=new P.fE(a),r=$.dJ
if(r==null){$.cl=$.dJ=s
if(!$.lN)$.lY().$1(P.ng())}else $.dJ=r.b=s},
qj:function(a){var s,r,q,p=$.cl
if(p==null){P.qi(a)
$.dK=$.dJ
return}s=new P.fE(a)
r=$.dK
if(r==null){s.b=p
$.cl=$.dK=s}else{q=r.b
s.b=q
$.dK=r.b=s
if(q==null)$.dJ=s}},
mB:function(a,b){var s=$.aM
if(s===C.f)return P.lu(a,b)
return P.lu(a,s.hG(b))},
oP:function(a,b){var s=$.aM
if(s===C.f)return P.mC(a,b)
return P.mC(a,s.dK(b,t.aF))},
nc:function(a,b,c,d,e){P.qj(new P.kB(d,e))},
qf:function(a,b,c,d){var s,r=$.aM
if(r===c)return d.$0()
$.aM=c
s=r
try{r=d.$0()
return r}finally{$.aM=s}},
qg:function(a,b,c,d,e){var s,r=$.aM
if(r===c)return d.$1(e)
$.aM=c
s=r
try{r=d.$1(e)
return r}finally{$.aM=s}},
k2:function k2(a){this.a=a},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
dz:function dz(){this.c=0},
kl:function kl(a,b){this.a=a
this.b=b},
kk:function kk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ch:function ch(a,b){this.a=a
this.b=b},
bK:function bK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dw:function dw(a,b){this.a=a
this.$ti=b},
fE:function fE(a){this.a=a
this.b=null},
d3:function d3(){},
f5:function f5(){},
d5:function d5(){},
ks:function ks(){},
kB:function kB(a,b){this.a=a
this.b=b},
k9:function k9(){},
ka:function ka(a,b){this.a=a
this.b=b},
kb:function kb(a,b,c){this.a=a
this.b=b
this.c=c},
on:function(a,b){return new H.C(a.K("@<0>").bb(b).K("C<1,2>"))},
oo:function(a,b,c){return H.qA(a,new H.C(b.K("@<0>").bb(c).K("C<1,2>")))},
lp:function(a,b){return new H.C(a.K("@<0>").bb(b).K("C<1,2>"))},
cO:function(a){return new P.dj(a.K("dj<0>"))},
lz:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
p3:function(a,b){var s=new P.dk(a,b)
s.c=a.e
return s},
og:function(a,b,c){var s,r
if(P.lO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.c([],t.s)
$.ah.push(a)
try{P.pR(a,s)}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}r=P.mz(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
lj:function(a,b,c){var s,r
if(P.lO(a))return b+"..."+c
s=new P.U(b)
$.ah.push(a)
try{r=s
r.a=P.mz(r.a,a,", ")}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lO:function(a){var s,r
for(s=$.ah.length,r=0;r<s;++r)if(a===$.ah[r])return!0
return!1},
pR:function(a,b){var s,r,q,p,o,n,m,l=a.gO(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.v())return
s=H.f(l.gE(l))
b.push(s)
k+=s.length+2;++j}if(!l.v()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gE(l);++j
if(!l.v()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gE(l);++j
for(;l.v();p=o,o=n){n=l.gE(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.f(p)
r=H.f(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
op:function(a,b,c){var s=P.on(b,c)
a.I(0,new P.ix(s,b,c))
return s},
mh:function(a,b){var s,r,q=P.cO(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.p)(a),++r)q.n(0,b.a(a[r]))
return q},
lr:function(a){var s,r={}
if(P.lO(a))return"{...}"
s=new P.U("")
try{$.ah.push(a)
s.a+="{"
r.a=!0
J.l9(a,new P.iB(r,s))
s.a+="}"}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dj:function dj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k8:function k8(a){this.a=a
this.c=this.b=null},
dk:function dk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cI:function cI(){},
ix:function ix(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(){},
i:function i(){},
cS:function cS(){},
iB:function iB(a,b){this.a=a
this.b=b},
X:function X(){},
hy:function hy(){},
cT:function cT(){},
cc:function cc(a,b){this.a=a
this.$ti=b},
ds:function ds(){},
dl:function dl(){},
dE:function dE(){},
oS:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oT(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oT:function(a,b,c,d){var s=a?$.nK():$.nJ()
if(s==null)return null
if(0===c&&d===b.length)return P.mI(s,b)
return P.mI(s,b.subarray(c,P.bi(c,d,b.length)))},
mI:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ai(r)}return null},
m3:function(a,b,c,d,e,f){if(C.c.br(f,4)!==0)throw H.b(P.a5("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a5("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a5("Invalid base64 padding, more than two '=' characters",a,b))},
pz:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
py:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.a2()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.b6(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.aj()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.d(r,o)
r[o]=n}return r},
jL:function jL(){},
jM:function jM(){},
hU:function hU(){},
hV:function hV(){},
e0:function e0(){},
e2:function e2(){},
ia:function ia(){},
ip:function ip(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
io:function io(a){this.a=a},
jJ:function jJ(){},
jN:function jN(){},
kq:function kq(a){this.b=0
this.c=a},
jK:function jK(a){this.a=a},
kp:function kp(a){this.a=a
this.b=16
this.c=0},
kN:function(a,b){var s=H.mq(a,b)
if(s!=null)return s
throw H.b(P.a5(a,null,null))},
oe:function(a){if(a instanceof H.bz)return a.i(0)
return"Instance of '"+H.f(H.eN(a))+"'"},
iy:function(a,b,c,d){var s,r=c?J.lk(a,d):J.oi(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
lq:function(a,b,c){var s,r=H.c([],c.K("w<0>"))
for(s=J.b8(a);s.v();)r.push(s.gE(s))
if(b)return r
return J.ll(r)},
oq:function(a,b,c){var s,r,q=J.lk(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
f7:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bi(b,c,r)
if(b<=0){if(typeof c!=="number")return c.af()
q=c<r}else q=!0
return H.mr(q?s.slice(b,c):s)}if(t.bm.b(a))return H.oE(a,b,P.bi(b,c,a.length))
return P.oN(a,b,c)},
oN:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a6(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a6(c,b,a.length,o,o))
r=J.b8(a)
for(q=0;q<b;++q)if(!r.v())throw H.b(P.a6(b,0,q,o,o))
p=[]
if(s)for(;r.v();)p.push(r.gE(r))
else for(q=b;q<c;++q){if(!r.v())throw H.b(P.a6(c,b,q,o,o))
p.push(r.gE(r))}return H.mr(p)},
oF:function(a){return new H.eh(a,H.ol(a,!1,!0,!1,!1,!1))},
mz:function(a,b,c){var s=J.b8(b)
if(!s.v())return a
if(c.length===0){do a+=H.f(s.gE(s))
while(s.v())}else{a+=H.f(s.gE(s))
for(;s.v();)a=a+c+H.f(s.gE(s))}return a},
mF:function(){var s=H.ov()
if(s!=null)return P.oR(s)
throw H.b(P.B("'Uri.base' is not supported"))},
ko:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nQ().b
if(typeof b!="string")H.q(H.aB(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghY().cn(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.av(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
ob:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
oc:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
e5:function(a){if(a>=10)return""+a
return"0"+a},
ma:function(a){return new P.bB(1000*a)},
id:function(a){if(typeof a=="number"||H.lM(a)||null==a)return J.a8(a)
if(typeof a=="string")return JSON.stringify(a)
return P.oe(a)},
hQ:function(a){return new P.dT(a)},
bP:function(a){return new P.ak(!1,null,null,a)},
m2:function(a,b,c){return new P.ak(!0,a,b,c)},
o1:function(a,b){if(a==null)throw H.b(new P.ak(!1,null,b,"Must not be null"))
return a},
ms:function(a){var s=null
return new P.c6(s,s,!1,s,s,a)},
eO:function(a,b){return new P.c6(null,null,!0,a,b,"Value not in range")},
a6:function(a,b,c,d,e){return new P.c6(b,c,!0,a,d,"Invalid value")},
bi:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.v(c)
s=a>c}else s=!0
if(s)throw H.b(P.a6(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
s=b>c}else s=!0
if(s)throw H.b(P.a6(b,a,c,"end",null))
return b}return c},
mt:function(a,b){if(a<0)throw H.b(P.a6(a,0,null,b,null))
return a},
P:function(a,b,c,d,e){var s=e==null?J.aP(b):e
return new P.ee(s,!0,a,c,"Index out of range")},
B:function(a){return new P.fw(a)},
jC:function(a){return new P.ft(a)},
lt:function(a){return new P.c9(a)},
bc:function(a){return new P.e1(a)},
o:function(a){return new P.fT(a)},
a5:function(a,b,c){return new P.ik(a,b,c)},
lW:function(a){H.qO(a)},
oR:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.F(a5,4)^58)*3|C.a.F(a5,0)^100|C.a.F(a5,1)^97|C.a.F(a5,2)^116|C.a.F(a5,3)^97)>>>0
if(s===0)return P.mE(a4<a4?C.a.u(a5,0,a4):a5,5,a3).gev()
else if(s===32)return P.mE(C.a.u(a5,5,a4),0,a3).gev()}r=P.iy(8,0,!1,t.S)
q=r.length
if(0>=q)return H.d(r,0)
r[0]=0
if(1>=q)return H.d(r,1)
r[1]=-1
if(2>=q)return H.d(r,2)
r[2]=-1
if(7>=q)return H.d(r,7)
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.nd(a5,0,a4,0,r)>=14){if(7>=r.length)return H.d(r,7)
r[7]=a4}if(1>=r.length)return H.d(r,1)
p=r[1]
if(p>=0)if(P.nd(a5,0,p,20,r)===20){if(7>=r.length)return H.d(r,7)
r[7]=p}q=r.length
if(2>=q)return H.d(r,2)
o=r[2]+1
if(3>=q)return H.d(r,3)
n=r[3]
if(4>=q)return H.d(r,4)
m=r[4]
if(5>=q)return H.d(r,5)
l=r[5]
if(6>=q)return H.d(r,6)
k=r[6]
if(k<l)l=k
if(m<o)m=l
else if(m<=p)m=p+1
if(n<o)n=m
if(7>=q)return H.d(r,7)
j=r[7]<0
if(j)if(o>p+3){i=a3
j=!1}else{q=n>0
if(q&&n+1===m){i=a3
j=!1}else{if(!(l<a4&&l===m+2&&C.a.ac(a5,"..",m)))h=l>m+2&&C.a.ac(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.ac(a5,"file",0)){if(o<=0){if(!C.a.ac(a5,"/",m)){g="file:///"
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
a5=C.a.b4(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.ac(a5,"http",0)){if(q&&n+3===m&&C.a.ac(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.b4(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.ac(a5,"https",0)){if(q&&n+4===m&&C.a.ac(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.b4(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.u(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.hd(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.ps(a5,0,p)
else{if(p===0)P.ci(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.pt(a5,d,o-1):""
b=P.pp(a5,o,n,!1)
q=n+1
if(q<m){a=H.mq(C.a.u(a5,q,m),a3)
a0=P.pr(a==null?H.q(P.a5("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pq(a5,m,l,a3,i,b!=null)
a2=l<k?P.lG(a5,l+1,k,a3):a3
return new P.bL(i,c,b,a0,a1,a2,k<a4?P.po(a5,k+1,a4):a3)},
mH:function(a){var s=t.N
return C.b.i4(H.c(a.split("&"),t.s),P.lp(s,s),new P.jH(C.e))},
oQ:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jE(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.Y(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.kN(C.a.u(a,q,r),null)
if(typeof n!=="number")return n.a5()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.d(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.kN(C.a.u(a,q,c),null)
if(typeof n!=="number")return n.a5()
if(n>255)j.$2(k,q)
if(p>=s)return H.d(i,p)
i[p]=n
return i},
mG:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jF(a),b=new P.jG(c,a)
if(a.length<2)c.$1("address is too short")
s=H.c([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.Y(a,r)
if(n===58){if(r===a0){++r
if(C.a.Y(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gaB(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.oQ(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.d(j,g)
j[g]=0
d=g+1
if(d>=i)return H.d(j,d)
j[d]=0
g+=2}else{d=C.c.aZ(f,8)
if(g<0||g>=i)return H.d(j,g)
j[g]=d
d=g+1
if(d>=i)return H.d(j,d)
j[d]=f&255
g+=2}}return j},
n2:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ci:function(a,b,c){throw H.b(P.a5(c,a,b))},
pr:function(a,b){if(a!=null&&a===P.n2(b))return null
return a},
pp:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.Y(a,b)===91){s=c-1
if(C.a.Y(a,s)!==93)P.ci(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.pm(a,r,s)
if(q<s){p=q+1
o=P.n7(a,C.a.ac(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mG(a,r,q)
return C.a.u(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.Y(a,n)===58){q=C.a.bF(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.n7(a,C.a.ac(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mG(a,b,q)
return"["+C.a.u(a,b,q)+o+"]"}return P.pv(a,b,c)},
pm:function(a,b,c){var s=C.a.bF(a,"%",b)
return s>=b&&s<c?s:c},
n7:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.U(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.Y(a,s)
if(p===37){o=P.lH(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.U("")
m=i.a+=C.a.u(a,r,s)
if(n)o=C.a.u(a,s,s+3)
else if(o==="%")P.ci(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.U("")
if(r<s){i.a+=C.a.u(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.Y(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.u(a,r,s)
if(i==null){i=new P.U("")
n=i}else n=i
n.a+=j
n.a+=P.lF(p)
s+=k
r=s}}}if(i==null)return C.a.u(a,b,c)
if(r<c)i.a+=C.a.u(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pv:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.Y(a,s)
if(o===37){n=P.lH(a,s,!0)
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
if(m>=8)return H.d(C.y,m)
m=(C.y[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.U("")
if(r<s){q.a+=C.a.u(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.ci(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.Y(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.u(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.U("")
m=q}else m=q
m.a+=l
m.a+=P.lF(o)
s+=j
r=s}}}}if(q==null)return C.a.u(a,b,c)
if(r<c){l=C.a.u(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
ps:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.n4(C.a.F(a,b)))P.ci(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.F(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.ci(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.u(a,b,c)
return P.pl(r?a.toLowerCase():a)},
pl:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pt:function(a,b,c){return P.dF(a,b,c,C.Z,!1)},
pq:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dF(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a8(s,"/"))s="/"+s
return P.pu(s,e,f)},
pu:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a8(a,"/"))return P.pw(a,!s||c)
return P.px(a)},
lG:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.bP("Both query and queryParameters specified"))
return P.dF(a,b,c,C.l,!0)}if(d==null)return null
s=new P.U("")
r.a=""
d.I(0,new P.km(new P.kn(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
po:function(a,b,c){return P.dF(a,b,c,C.l,!0)},
lH:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.Y(a,b+1)
r=C.a.Y(a,n)
q=H.kJ(s)
p=H.kJ(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aZ(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.av(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.u(a,b,b+3).toUpperCase()
return null},
lF:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.d(s,0)
s[0]=37
q=C.a.F(k,a>>>4)
if(1>=r)return H.d(s,1)
s[1]=q
q=C.a.F(k,a&15)
if(2>=r)return H.d(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.hq(a,6*o)&63|p
if(n>=r)return H.d(s,n)
s[n]=37
q=n+1
l=C.a.F(k,m>>>4)
if(q>=r)return H.d(s,q)
s[q]=l
l=n+2
q=C.a.F(k,m&15)
if(l>=r)return H.d(s,l)
s[l]=q
n+=3}}return P.f7(s,0,null)},
dF:function(a,b,c,d,e){var s=P.n6(a,b,c,d,e)
return s==null?C.a.u(a,b,c):s},
n6:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.Y(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lH(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ci(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.Y(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.lF(o)}}if(p==null){p=new P.U("")
n=p}else n=p
n.a+=C.a.u(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.v(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.u(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
n5:function(a){if(C.a.a8(a,"."))return!0
return C.a.ea(a,"/.")!==-1},
px:function(a){var s,r,q,p,o,n,m
if(!P.n5(a))return a
s=H.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.F(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
pw:function(a,b){var s,r,q,p,o,n
if(!P.n5(a))return!b?P.n3(a):a
s=H.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaB(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaB(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.n3(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
n3:function(a){var s,r,q,p=a.length
if(p>=2&&P.n4(J.nS(a,0)))for(s=1;s<p;++s){r=C.a.F(a,s)
if(r===58)return C.a.u(a,0,s)+"%3A"+C.a.ag(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
pn:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.F(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.bP("Invalid URL encoding"))}}return s},
lI:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.F(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.u(a,b,c)
else p=new H.r(C.a.u(a,b,c))}else{p=H.c([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.F(a,o)
if(r>127)throw H.b(P.bP("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.b(P.bP("Truncated URI"))
p.push(P.pn(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cn(p)},
n4:function(a){var s=a|32
return 97<=s&&s<=122},
mE:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.F(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.a5(k,a,r))}}if(q<0&&r>b)throw H.b(P.a5(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.F(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaB(j)
if(p!==44||r!==n+7||!C.a.ac(a,"base64",n+1))throw H.b(P.a5("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.I.ic(0,a,m,s)
else{l=P.n6(a,m,s,C.l,!0)
if(l!=null)a=C.a.b4(a,m,s,l)}return new P.jD(a,j,c)},
pD:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.oq(22,new P.kw(),t.gc),l=new P.kv(m),k=new P.kx(),j=new P.ky(),i=l.$2(0,225)
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
nd:function(a,b,c,d,e){var s,r,q,p,o,n=$.nR()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.d(n,d)
r=n[d]
q=C.a.F(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.d(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.d(e,o)
e[o]=s}return d},
aC:function aC(){},
am:function am(a,b){this.a=a
this.b=b},
a0:function a0(){},
bB:function bB(a){this.a=a},
i6:function i6(){},
i7:function i7(){},
M:function M(){},
dT:function dT(a){this.a=a},
eB:function eB(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ee:function ee(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fw:function fw(a){this.a=a},
ft:function ft(a){this.a=a},
c9:function c9(a){this.a=a},
e1:function e1(a){this.a=a},
eE:function eE(){},
d2:function d2(){},
e3:function e3(a){this.a=a},
fT:function fT(a){this.a=a},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(){},
k:function k(){},
h:function h(){},
ef:function ef(){},
n:function n(){},
H:function H(){},
at:function at(){},
S:function S(){},
O:function O(){},
z:function z(){},
U:function U(a){this.a=a},
jH:function jH(a){this.a=a},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a,b){this.a=a
this.b=b},
bL:function bL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kn:function kn(a,b){this.a=a
this.b=b},
km:function km(a){this.a=a},
jD:function jD(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(){},
kv:function kv(a){this.a=a},
kx:function kx(){},
ky:function ky(){},
hd:function hd(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fK:function fK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qw:function(a){var s
if(t.v.b(a)){s=J.nY(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.dB(a.data,a.height,a.width)},
qv:function(a){if(a instanceof P.dB)return{data:a.a,height:a.b,width:a.c}
return a},
br:function(a){var s,r,q,p,o
if(a==null)return null
s=P.lp(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.p)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
qu:function(a){var s={}
a.I(0,new P.kC(s))
return s},
kf:function kf(){},
kh:function kh(a,b){this.a=a
this.b=b},
ki:function ki(a,b){this.a=a
this.b=b},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
kC:function kC(a){this.a=a},
kg:function kg(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
ii:function ii(){},
ij:function ij(){},
k7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
p2:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hb:function hb(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aV:function aV(){},
el:function el(){},
aZ:function aZ(){},
eC:function eC(){},
iZ:function iZ(){},
c7:function c7(){},
f6:function f6(){},
m:function m(){},
b1:function b1(){},
fj:function fj(){},
h_:function h_(){},
h0:function h0(){},
h7:function h7(){},
h8:function h8(){},
hl:function hl(){},
hm:function hm(){},
hu:function hu(){},
hv:function hv(){},
bk:function bk(){},
hS:function hS(){},
dV:function dV(){},
hT:function hT(a){this.a=a},
dW:function dW(){},
ba:function ba(){},
eD:function eD(){},
fG:function fG(){},
eQ:function eQ(){},
f1:function f1(){},
hh:function hh(){},
hi:function hi(){}},W={
m1:function(){var s=document.createElement("a")
return s},
ld:function(){var s=document.createElement("canvas")
return s},
od:function(a,b,c){var s,r=document.body
r.toString
s=C.q.ap(r,a,b,c)
s.toString
r=new H.b4(new W.a3(s),new W.i8(),t.ac.K("b4<i.E>"))
return t.h.a(r.gaR(r))},
i9:function(a){return"wheel"},
cC:function(a){var s,r,q="element tag unavailable"
try{s=J.aN(a)
if(typeof s.ges(a)=="string")q=s.ges(a)}catch(r){H.ai(r)}return q},
of:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ai(s)}return q},
k6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mU:function(a,b,c,d){var s=W.k6(W.k6(W.k6(W.k6(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
a2:function(a,b,c,d){var s=new W.fS(a,b,c==null?null:W.ne(new W.k5(c),t.aD),!1)
s.hx()
return s},
mS:function(a){var s=W.m1(),r=window.location
s=new W.cg(new W.kc(s,r))
s.eO(a)
return s},
oZ:function(a,b,c,d){return!0},
p_:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
mY:function(){var s=t.N,r=P.mh(C.A,s),q=H.c(["TEMPLATE"],t.s)
s=new W.hp(r,P.cO(s),P.cO(s),P.cO(s),null)
s.eR(null,new H.cU(C.A,new W.kj(),t.eM),q,null)
return s},
ne:function(a,b){var s=$.aM
if(s===C.f)return a
return s.dK(a,b)},
t:function t(){},
hP:function hP(){},
dR:function dR(){},
dS:function dS(){},
bQ:function bQ(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
aD:function aD(){},
i_:function i_(){},
L:function L(){},
cy:function cy(){},
i0:function i0(){},
ar:function ar(){},
aR:function aR(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
bd:function bd(){},
i4:function i4(){},
cz:function cz(){},
cA:function cA(){},
e7:function e7(){},
i5:function i5(){},
fH:function fH(a,b){this.a=a
this.b=b},
D:function D(){},
i8:function i8(){},
j:function j(){},
e:function e(){},
an:function an(){},
bU:function bU(){},
e8:function e8(){},
ea:function ea(){},
aF:function aF(){},
im:function im(){},
bD:function bD(){},
bE:function bE(){},
bW:function bW(){},
bY:function bY(){},
bG:function bG(){},
iz:function iz(){},
iR:function iR(){},
c_:function c_(){},
es:function es(){},
iS:function iS(a){this.a=a},
et:function et(){},
iT:function iT(a){this.a=a},
aH:function aH(){},
eu:function eu(){},
ao:function ao(){},
a3:function a3(a){this.a=a},
x:function x(){},
d_:function d_(){},
aI:function aI(){},
eI:function eI(){},
eR:function eR(){},
j6:function j6(a){this.a=a},
eT:function eT(){},
ax:function ax(){},
eY:function eY(){},
aJ:function aJ(){},
eZ:function eZ(){},
aK:function aK(){},
f4:function f4(){},
jh:function jh(a){this.a=a},
ay:function ay(){},
bj:function bj(){},
d4:function d4(){},
f8:function f8(){},
f9:function f9(){},
ca:function ca(){},
az:function az(){},
af:function af(){},
fc:function fc(){},
fd:function fd(){},
jn:function jn(){},
aL:function aL(){},
bI:function bI(){},
fi:function fi(){},
jr:function jr(){},
b3:function b3(){},
jI:function jI(){},
fA:function fA(){},
bn:function bn(){},
ce:function ce(){},
cf:function cf(){},
fI:function fI(){},
dh:function dh(){},
fX:function fX(){},
dm:function dm(){},
hg:function hg(){},
hn:function hn(){},
fF:function fF(){},
fP:function fP(a){this.a=a},
lh:function lh(a,b){this.a=a
this.$ti=b},
fS:function fS(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k5:function k5(a){this.a=a},
ly:function ly(a){this.$ti=a},
cg:function cg(a){this.a=a},
N:function N(){},
d0:function d0(a){this.a=a},
iW:function iW(a){this.a=a},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
dt:function dt(){},
kd:function kd(){},
ke:function ke(){},
hp:function hp(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kj:function kj(){},
ho:function ho(){},
cH:function cH(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ap:function ap(){},
kc:function kc(a,b){this.a=a
this.b=b},
hz:function hz(a){this.a=a
this.b=!1},
kr:function kr(a){this.a=a},
fJ:function fJ(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
fU:function fU(){},
fV:function fV(){},
fY:function fY(){},
fZ:function fZ(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
h9:function h9(){},
ha:function ha(){},
hc:function hc(){},
du:function du(){},
dv:function dv(){},
he:function he(){},
hf:function hf(){},
hk:function hk(){},
hq:function hq(){},
hr:function hr(){},
dx:function dx(){},
dy:function dy(){},
hs:function hs(){},
ht:function ht(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){}},K={
Q:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.b(P.o("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.F(a,0)
r=C.a.F(b,0)
if(s>r){q=r
r=s
s=q}return new K.j1(s,r)},
u:function(a){var s=new K.j7()
s.eM(a)
return s},
b9:function b9(){},
ec:function ec(){},
iC:function iC(){},
ae:function ae(){this.a=null},
j1:function j1(a,b){this.a=a
this.b=b},
j7:function j7(){this.a=null}},L={
jp:function(){var s=new L.jo()
s.a=new H.C(t.cn)
s.b=new H.C(t.dL)
s.c=P.cO(t.X)
return s},
f2:function f2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a){this.b=a
this.c=null},
jo:function jo(){var _=this
_.d=_.c=_.b=_.a=null},
fk:function fk(a){this.b=a
this.a=this.c=null}},O={
le:function(a){var s=new O.aa(a.K("aa<0>"))
s.bt(a)
return s},
aa:function aa(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cW:function cW(){this.b=this.a=null},
ep:function ep(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(){},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(){},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(){},
iP:function iP(a,b){this.a=a
this.b=b},
iQ:function iQ(){},
iD:function iD(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cV:function cV(){},
iE:function iE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aX:function aX(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iG:function iG(){var _=this
_.e=_.d=_.c=_.b=null},
iH:function iH(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iI:function iI(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eV:function eV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fb:function fb(){}},E={
md:function(){var s,r=new E.bC()
r.a=""
r.b=!0
s=O.le(t.l)
r.y=s
s.b6(r.gie(),r.gii())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sab(0,null)
return r},
mP:function(){if(J.l8(window.navigator.vendor,"Google"))return C.G
if(J.l8(window.navigator.userAgent,"Firefox"))return C.r
var s=window.navigator.appVersion
if(J.b6(s).G(s,"Trident")||C.a.G(s,"Edge"))return C.t
if(J.l8(window.navigator.appName,"Microsoft"))return C.t
return C.H},
mQ:function(){var s=window.navigator.appVersion
if(J.b6(s).G(s,"Win"))return C.a0
if(C.a.G(s,"Mac"))return C.B
if(C.a.G(s,"Linux"))return C.a1
return C.a2},
oG:function(a,b){var s=new E.j2(a)
s.eL(a,b)
return s},
oO:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.mA(a,!0,!0,!0,!1)
s=W.ld()
r=s.style
r.width="100%"
r.height="100%"
J.la(a).n(0,s)
return E.mA(s,!0,!0,!0,!1)},
mA:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.ff(),n=t.z,m=C.i.cW(a,"webgl2",P.oo(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.o("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.oG(m,a)
n=new T.jk(m)
m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.fy(a)
s=new X.iu()
s.c=new X.as(!1,!1,!1)
s.d=P.cO(t.e)
n.b=s
s=new X.iU(n)
s.f=0
s.r=V.b_()
s.x=V.b_()
s.ch=s.Q=1
n.c=s
s=new X.iA(n)
s.r=0
s.x=V.b_()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.jq(n)
s.f=V.b_()
s.r=V.b_()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.c([],t.eG)
s=$.ib
n.Q=(s==null?$.ib=new E.fQ(E.mP(),E.mQ()):s).a===C.r?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.a2(q,"contextmenu",n.gfz(),!1))
n.z.push(W.a2(a,"focus",n.gfF(),!1))
n.z.push(W.a2(a,"blur",n.gfo(),!1))
n.z.push(W.a2(q,"keyup",n.gfJ(),!1))
n.z.push(W.a2(q,"keydown",n.gfH(),!1))
n.z.push(W.a2(a,"mousedown",n.gfN(),!1))
n.z.push(W.a2(a,"mouseup",n.gfR(),!1))
n.z.push(W.a2(a,p,n.gfP(),!1))
r=n.z
W.i9(a)
W.i9(a)
r.push(W.a2(a,W.i9(a),n.gfT(),!1))
n.z.push(W.a2(q,p,n.gfB(),!1))
n.z.push(W.a2(q,"mouseup",n.gfD(),!1))
n.z.push(W.a2(q,"pointerlockchange",n.gfV(),!1))
n.z.push(W.a2(a,"touchstart",n.gha(),!1))
n.z.push(W.a2(a,"touchend",n.gh6(),!1))
n.z.push(W.a2(a,"touchmove",n.gh8(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.am(Date.now(),!1)
o.db=0
o.dn()
return o},
hW:function hW(){},
bC:function bC(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bS:function bS(a){this.b=a},
c4:function c4(a){this.b=a},
fQ:function fQ(a,b){this.a=a
this.b=b},
j2:function j2(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
ff:function ff(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
jm:function jm(a){this.a=a}},Z={
lx:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cj(c)),35044)
a.bindBuffer(b,null)
return new Z.fB(b,s)},
aA:function(a){return new Z.bm(a)},
fB:function fB(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
fC:function fC(a){this.a=a},
cs:function cs(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bX:function bX(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a){this.a=a}},D={
J:function(){var s=new D.bT()
s.d=0
return s},
hX:function hX(){},
bT:function bT(){var _=this
_.d=_.c=_.b=_.a=null},
ie:function ie(a){this.a=a},
ig:function ig(a){this.a=a},
V:function V(){this.b=null},
aS:function aS(){this.b=null},
aT:function aT(){this.b=null},
E:function E(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dX:function dX(){},
bA:function bA(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
W:function W(){},
cM:function cM(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
eK:function eK(){},
f_:function f_(){}},X={e_:function e_(a,b){this.a=a
this.b=b},ej:function ej(a,b){this.a=a
this.b=b},iu:function iu(){var _=this
_.d=_.c=_.b=_.a=null},cR:function cR(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},iA:function iA(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},as:function as(a,b,c){this.a=a
this.b=b
this.c=c},c0:function c0(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iU:function iU(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c1:function c1(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eL:function eL(){},d6:function d6(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},jq:function jq(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fy:function fy(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
li:function(a){var s=new X.il(),r=new V.al(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.mw
if(r==null){r=V.mv(0,0,1,1)
$.mw=r}s.r=r
return s},
ml:function(a){var s,r,q=new X.eF()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gp().n(0,q.gfq())
r=new D.E("mover",s,q.b)
r.b=!0
q.ax(r)}r=q.c
$.G().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.E("fov",r,1.0471975511965976)
r.b=!0
q.ax(r)}r=q.d
$.G().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.E("near",r,0.1)
r.b=!0
q.ax(r)}r=q.e
$.G().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.E("far",r,2000)
r.b=!0
q.ax(r)}return q},
lc:function lc(){},
il:function il(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iq:function iq(){this.b=this.a=null},
eF:function eF(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ji:function ji(){}},V={
hY:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.al(s,r,q,1)},
hM:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qU:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.br(a-b,s)
return(a<0?a+s:a)+b},
I:function(a,b,c){if(a==null)return C.a.ar("null",c)
$.G().toString
return C.a.ar(C.d.eu(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cp:function(a,b,c){var s,r,q,p,o,n,m=H.c([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.p)(a),++q){p=V.I(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.d(m,o)
s=C.a.ar(m[o],r)
n=m.length
if(o>=n)return H.d(m,o)
m[o]=s}return m},
lV:function(a){return C.d.iE(Math.pow(2,C.V.cB(Math.log(H.qs(a))/Math.log(2))))},
bZ:function(){var s=$.mj
return s==null?$.mj=V.aY(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aY:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mi:function(a,b,c){var s=c.B(),r=b.aH(s).B(),q=s.aH(r),p=new V.y(a.a,a.b,a.c),o=r.U(0).aa(p),n=q.U(0).aa(p),m=s.U(0).aa(p)
return V.aY(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
b_:function(){var s=$.mn
return s==null?$.mn=new V.T(0,0):s},
ls:function(){var s=$.b0
return s==null?$.b0=new V.K(0,0,0):s},
mv:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eP(a,b,c,d)},
df:function(){var s=$.mM
return s==null?$.mM=new V.y(0,0,0):s},
oU:function(){var s=$.jO
return s==null?$.jO=new V.y(-1,0,0):s},
lw:function(){var s=$.jP
return s==null?$.jP=new V.y(0,1,0):s},
mN:function(){var s=$.jQ
return s==null?$.jQ=new V.y(0,0,1):s},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(){},
er:function er(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bh:function bh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
T:function T(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eP:function eP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ag:function ag(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qP:function(a){P.oP(C.S,new V.l2(a))},
oJ:function(a){var s=new V.jc()
s.eN(a,!0)
return s},
bb:function bb(){},
l2:function l2(a){this.a=a},
e4:function e4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eb:function eb(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ed:function ed(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eH:function eH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
j_:function j_(a){this.a=a
this.c=null},
j0:function j0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jc:function jc(){this.b=this.a=null},
je:function je(a){this.a=a},
jd:function jd(a){this.a=a},
jf:function jf(a){this.a=a}},U={
lf:function(){var s=new U.hZ()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
m9:function(a){var s=new U.cu()
s.a=a
return s},
hZ:function hZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cu:function cu(){this.b=this.a=null},
bV:function bV(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
Y:function Y(){},
dc:function dc(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dd:function dd(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
de:function de(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={ct:function ct(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cx:function cx(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cD:function cD(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},a7:function a7(){}},A={
os:function(a,b){var s=a.aI,r=new A.eq(b,s)
r.d3(b,s)
r.eK(a,b)
return r},
ot:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gav(a5)+a6.gav(a6)+a7.gav(a7)+a8.gav(a8)+a9.gav(a9)+b0.gav(b0)+b1.gav(b1)+b2.gav(b2)+b3.gav(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.p)(b4),++r)a+="_"+H.f(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.p)(b5),++r)a+="_"+H.f(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.p)(b6),++r)a+="_"+H.f(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.p)(b7),++r)a+="_"+H.f(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.aO()
if(h){s=$.bu()
b=new Z.bm(b.a|s.a)}if(g){s=$.bt()
b=new Z.bm(b.a|s.a)}if(f){s=$.bv()
b=new Z.bm(b.a|s.a)}if(e){s=$.bs()
b=new Z.bm(b.a|s.a)}return new A.iF(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
kz:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
kA:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.kz(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hN(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
pX:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kz(b,r,"emission")
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
pT:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kA(b,r,"ambient")
b.a+="\n"},
pV:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kA(b,r,"diffuse")
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
pY:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kA(b,r,"invDiffuse")
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
q3:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kA(b,r,"specular")
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
q_:function(a,b){var s,r,q
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
q1:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kz(b,r,"reflect")
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
q2:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kz(b,r,"refract")
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
pU:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hN(r)
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
if(typeof s!=="number")return s.aj()
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
o=H.c([],p)
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
o=H.c([],p)
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
n=H.c([],p)
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
pW:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hN(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.aj()
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
m=H.c([],p)
l=a.b
if(!l.a)l=l.c
else l=!0
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.c([],p)
p=a.c
if(!p.a)p=p.c
else p=!0
if(p)k.push("diffuse(norm, lit.viewDir)")
p=a.d
if(!p.a)p=p.c
else p=!0
if(p)k.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(!p.a)p=p.c
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
q0:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hN(r)
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
if(typeof s!=="number")return s.aj()
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
j=H.c([],p)
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
j=H.c([],p)
m=a.b
if(!m.a)m=m.c
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
i=H.c([],p)
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
q4:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hN(r)
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
if(typeof s!=="number")return s.aj()
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
if(m){s=$.ib
if(s==null)s=$.ib=new E.fQ(E.mP(),E.mQ())
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
h=H.c([],s)
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
h=H.c([],s)
p=a.b
if(!p.a)p=p.c
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
g=H.c([],s)
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
pZ:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.c([],t.i)
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
s=b.a+="   return "+C.b.j(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
q5:function(a){var s,r,q,p,o,n,m,l,k,j="   lightAccum += all",i="precision mediump float;\n\n",h="precision mediump float;\n\nvarying vec3 normalVec;\n",g=new P.U("")
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
A.pX(a,g)
A.pT(a,g)
A.pV(a,g)
A.pY(a,g)
A.q3(a,g)
r=a.db
if(r){p=g.a+="// === Environmental ===\n"
p+="\n"
g.a=p
p+="uniform samplerCube envSampler;\n"
g.a=p
g.a=p+"\n"
A.q1(a,g)
A.q2(a,g)}A.q_(a,g)
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
if(p){for(o=a.z,n=o.length,l=0;l<o.length;o.length===n||(0,H.p)(o),++l)A.pU(a,o[l],g)
for(o=a.Q,n=o.length,l=0;l<o.length;o.length===n||(0,H.p)(o),++l)A.pW(a,o[l],g)
for(o=a.ch,n=o.length,l=0;l<o.length;o.length===n||(0,H.p)(o),++l)A.q0(a,o[l],g)
for(o=a.cx,n=o.length,l=0;l<o.length;o.length===n||(0,H.p)(o),++l)A.q4(a,o[l],g)
A.pZ(a,g)}o=g.a+="// === Main ===\n"
o+="\n"
g.a=o
o+="void main()\n"
g.a=o
o+="{\n"
g.a=o
o=g.a=o+"   float alpha = alphaValue();\n"
s=s?g.a=o+"   vec3 norm = normal();\n":o
if(r)g.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
k=H.c([],t.i)
if(p){g.a+=u.o
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
for(s=a.z,r=s.length,l=0;l<s.length;s.length===r||(0,H.p)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.d(p,0)
g.a+=j+(p[0].toUpperCase()+C.a.ag(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,l=0;l<s.length;s.length===r||(0,H.p)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.d(p,0)
g.a+=j+(p[0].toUpperCase()+C.a.ag(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,l=0;l<s.length;s.length===r||(0,H.p)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.d(p,0)
g.a+=j+(p[0].toUpperCase()+C.a.ag(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,l=0;l<s.length;s.length===r||(0,H.p)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.d(p,0)
g.a+=j+(p[0].toUpperCase()+C.a.ag(p,1))+"Values(norm);\n"}if(a.cy<=0)g.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
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
s=g.a+="   vec4 objClr = vec4("+C.b.j(k," + ")+", alpha);\n"
if(q)s=g.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
g.a=s
s=g.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
q6:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bD+"];\n"
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
q8:function(a,b){var s
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
q7:function(a,b){var s
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
qa:function(a,b){var s,r
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
qb:function(a,b){var s,r
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
q9:function(a,b){var s
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
qc:function(a,b){var s
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
hN:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ag(a,1)},
lv:function(a,b,c,d,e){var s=new A.jv(a,c,e)
s.f=d
P.iy(d,0,!1,t.e)
return s},
dU:function dU(a,b,c){this.a=a
this.b=b
this.c=c},
hR:function hR(a){this.a=a},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a,b){var _=this
_.dU=_.iR=_.bE=_.aI=_.bD=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iZ=_.iY=_.iX=_.cz=_.cw=_.cv=_.cu=_.ct=_.cs=_.cr=_.cq=_.e5=_.iW=_.e4=_.e3=_.iV=_.e2=_.e1=_.e0=_.iU=_.e_=_.dZ=_.dY=_.iT=_.dX=_.dW=_.iS=_.dV=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dY:function dY(a,b){this.a=a
this.b=b},
e6:function e6(a,b){this.a=a
this.b=b},
eM:function eM(a,b){this.a=a
this.b=b},
f0:function f0(a,b){this.a=a
this.b=b},
iF:function iF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bD=b5
_.aI=b6
_.bE=b7},
d7:function d7(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d8:function d8(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
da:function da(a,b,c,d,e,f,g,h,i,j){var _=this
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
db:function db(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
c8:function c8(){},
eW:function eW(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fl:function fl(){},
jA:function jA(a){this.a=a},
fn:function fn(a,b,c){this.a=a
this.c=b
this.d=c},
jx:function jx(a,b,c){this.a=a
this.c=b
this.d=c},
jy:function jy(a,b,c){this.a=a
this.c=b
this.d=c},
jz:function jz(a,b,c){this.a=a
this.c=b
this.d=c},
jv:function jv(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
fm:function fm(a,b,c){this.a=a
this.c=b
this.d=c},
jw:function jw(a,b,c){this.a=a
this.c=b
this.d=c},
fo:function fo(a,b,c){this.a=a
this.c=b
this.d=c},
fp:function fp(a,b,c){this.a=a
this.c=b
this.d=c},
jB:function jB(a,b,c){this.a=a
this.c=b
this.d=c},
fq:function fq(a,b,c){this.a=a
this.c=b
this.d=c},
d9:function d9(a,b,c){this.a=a
this.c=b
this.d=c},
fr:function fr(a,b,c){this.a=a
this.c=b
this.d=c},
fs:function fs(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lQ:function(a,b,c,d){var s=F.eU()
F.dG(s,b,c,d,a,1,0,0,1)
F.dG(s,b,c,d,a,0,1,0,3)
F.dG(s,b,c,d,a,0,0,1,2)
F.dG(s,b,c,d,a,-1,0,0,0)
F.dG(s,b,c,d,a,0,-1,0,0)
F.dG(s,b,c,d,a,0,0,-1,3)
s.an()
return s},
ku:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dG:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.y(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.y(s+a5,r+a3,q+a4)
o=new V.y(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.y(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.ku(g)
j=F.ku(f)
i=F.l5(a1,a2,new F.kt(h,F.ku(e),F.ku(d),j,k,a0),b)
if(i!=null)a.b3(i)},
nj:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0<3)return null
s=F.eU()
r=b?-1:1
q=-6.283185307179586/a0
p=H.c([],t.j)
o=s.a
n=new V.y(0,0,r).B()
p.push(o.hC(new V.au(a,-1,-1,-1),new V.al(1,1,1,1),new V.K(0,0,c),new V.y(0,0,r),new V.T(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(typeof i!=="number")return H.v(i)
n=new V.y(k,j,r).B()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
o.toString
e=F.cd(new V.au(a,-1,-1,-1),null,new V.al(h,f,g,1),new V.K(k*i,j*i,c),new V.y(0,0,r),new V.T(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.n(0,e)
p.push(e)}s.d.dB(p)
return s},
nh:function(a,b,c){return F.qx(!0,a,1,new F.kD(1,c),b)},
qx:function(a,b,c,d,e){var s,r=null
if(e<3)return r
if(c<1)return r
s=F.l5(c,e,new F.kF(d),r)
if(s==null)return r
s.an()
s.bB()
if(b)s.b3(F.nj(3,!1,1,new F.kG(d),e))
s.b3(F.nj(1,!0,-1,new F.kH(d),e))
return s},
qL:function(a,b){var s=F.l5(a,b,new F.kR(),null)
s.d.bN()
s.an()
s.bB()
return s},
ad:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
b=b.B()
s=b.a
r=b.b
q=b.c
p=F.cd(h,h,h,new V.K(s,r,q),b,h,h,h,0)
o=a.i_(p,new F.dg())
if(o!=null)return o
n=s*0.5+0.5
m=r*0.5+0.5
l=q*0.5+0.5
if(n<0)n=0
else if(n>1)n=1
if(m<0)m=0
else if(m>1)m=1
if(l<0)l=0
else if(l>1)l=1
p.sao(0,new V.al(n,m,l,1))
k=Math.sqrt(s*s+r*r)
j=Math.atan2(r,s)/1.5707963267948966
if(j<0)j=-j
i=Math.atan2(k,q)/3.141592653589793
p.scR(new V.T(j,i<0?-i:i))
a.a.n(0,p)
return p},
R:function(a,b,c,d,e){var s,r,q,p
if(e<=0)a.d.bz(0,b,d,c)
else{s=F.ad(a,b.r.w(0,c.r).t(0,0.5))
r=F.ad(a,c.r.w(0,d.r).t(0,0.5))
q=F.ad(a,d.r.w(0,b.r).t(0,0.5))
p=e-1
F.R(a,b,s,q,p)
F.R(a,s,c,r,p)
F.R(a,r,q,s,p)
F.R(a,q,r,d,p)}},
nt:function(a,b){var s,r,q={}
q.a=s
q.a=null
q.a=new F.l3()
r=F.lQ(a,null,new F.l4(q,1),b)
r.bB()
return r},
qT:function(){return F.ni(15,30,0.5,1,new F.l6())},
qK:function(){return F.ni(12,120,0.3,1,new F.kQ(3,2))},
ni:function(a,b,c,d,e){var s=F.l5(a,b,new F.kE(e,d,b,c),null)
if(s==null)return null
s.an()
s.bB()
return s},
l5:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.eU()
r=H.c([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.cd(e,e,new V.al(n,0,0,1),e,e,new V.T(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.co(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.cd(e,e,new V.al(h,g,f,1),e,e,new V.T(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.co(d))}}s.d.hB(a+1,b+1,r)
return s},
cF:function(a,b,c){var s=new F.cE(),r=a.a
if(r==null)H.q(P.o(u.j))
if(r!=b.a||r!=c.a)H.q(P.o(u.i))
s.bw(a)
s.bx(b)
s.ds(c)
s.a.a.d.b.push(s)
s.a.a.V()
return s},
om:function(a,b){var s=new F.em(),r=a.a
if(r==null)H.q(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.q(P.o("May not create a line with vertices attached to different shapes."))
s.bw(a)
s.bx(b)
s.a.a.c.b.push(s)
s.a.a.V()
return s},
eU:function(){var s=new F.j8(),r=new F.jR(s)
r.b=!1
r.c=H.c([],t.j)
s.a=r
r=new F.jb(s)
r.b=H.c([],t.H)
s.b=r
r=new F.ja(s)
r.b=H.c([],t.L)
s.c=r
r=new F.j9(s)
r.b=H.c([],t.b)
s.d=r
s.e=null
return s},
cd:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.fz(),p=new F.jZ()
p.b=H.c([],t.H)
q.b=p
p=new F.jW()
s=t.L
p.b=H.c([],s)
p.c=H.c([],s)
q.c=p
p=new F.jS()
s=t.b
p.b=H.c([],s)
p.c=H.c([],s)
p.d=H.c([],s)
q.d=p
h=$.nL()
q.e=0
p=$.aO()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bu().a)!==0?e:r
q.x=(s&$.bt().a)!==0?b:r
q.y=(s&$.bO().a)!==0?f:r
q.z=(s&$.bv().a)!==0?g:r
q.Q=(s&$.nM().a)!==0?c:r
q.ch=(s&$.cq().a)!==0?i:0
q.cx=(s&$.bs().a)!==0?a:r
return q},
kt:function kt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kD:function kD(a,b){this.a=a
this.b=b},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kR:function kR(){},
l3:function l3(){},
l4:function l4(a,b){this.a=a
this.b=b},
l6:function l6(){},
kQ:function kQ(a,b){this.a=a
this.b=b},
kE:function kE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cE:function cE(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ih:function ih(){},
jg:function jg(){},
em:function em(){this.b=this.a=null},
iv:function iv(){},
ju:function ju(){},
eJ:function eJ(){this.a=null},
j8:function j8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j9:function j9(a){this.a=a
this.b=null},
ja:function ja(a){this.a=a
this.b=null},
jb:function jb(a){this.a=a
this.b=null},
fz:function fz(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
k0:function k0(a){this.a=a},
k_:function k_(a){this.a=a},
jR:function jR(a){this.a=a
this.c=this.b=null},
jS:function jS(){this.d=this.c=this.b=null},
jT:function jT(a,b){this.a=a
this.b=b},
jU:function jU(a,b){this.a=a
this.b=b},
jW:function jW(){this.c=this.b=null},
jX:function jX(){},
dg:function dg(){},
jY:function jY(){},
jV:function jV(){},
iX:function iX(){},
jZ:function jZ(){this.b=null}},T={fe:function fe(){},jj:function jj(){var _=this
_.e=_.d=_.c=_.b=_.a=null},jk:function jk(a){var _=this
_.a=a
_.e=_.d=_.c=null},jl:function jl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
np:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8="testCanvas",a9=null,b0="modifiers",b1=V.oJ("Test 017"),b2=W.ld()
b2.className="pageLargeCanvas"
b2.id=a8
b1.a.appendChild(b2)
s=t.i
b1.dD(H.c(["A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted."],s))
b1.hz(H.c(["shapes"],s))
b1.dD(H.c(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a8)
if(r==null)H.q(P.o("Failed to find an element with the identifier, testCanvas."))
q=E.oO(r,!0,!0,!0,!1)
p=E.md()
p.sab(0,F.nt(8,8))
o=X.li(a9)
if(o.b){o.b=!1
n=new D.E("clearColor",!0,!1)
n.b=!0
o.ax(n)}m=q.f.eg("../resources/maskonaive",".jpg")
l=q.f.ef("../resources/earthSpecular")
k=q.f.ef("../resources/earthColor")
j=new O.ep()
n=O.le(t.hc)
j.e=n
n.b6(j.gfk(),j.gfm())
n=new O.aX(j,"emission")
n.c=new A.a4(!1,!1,!1)
n.f=new V.a1(0,0,0)
j.f=n
n=new O.aX(j,"ambient")
n.c=new A.a4(!1,!1,!1)
n.f=new V.a1(0,0,0)
j.r=n
n=new O.aX(j,"diffuse")
n.c=new A.a4(!1,!1,!1)
n.f=new V.a1(0,0,0)
j.x=n
n=new O.aX(j,"invDiffuse")
n.c=new A.a4(!1,!1,!1)
n.f=new V.a1(0,0,0)
j.y=n
n=new O.iI(j,"specular")
n.c=new A.a4(!1,!1,!1)
n.f=new V.a1(0,0,0)
n.ch=100
j.z=n
n=new O.iE(j,"bump")
n.c=new A.a4(!1,!1,!1)
j.Q=n
j.ch=null
n=new O.aX(j,"reflect")
n.c=new A.a4(!1,!1,!1)
n.f=new V.a1(0,0,0)
j.cx=n
n=new O.iH(j,"refract")
n.c=new A.a4(!1,!1,!1)
n.f=new V.a1(0,0,0)
n.ch=1
j.cy=n
n=new O.iD(j,"alpha")
n.c=new A.a4(!1,!1,!1)
n.f=1
j.db=n
n=new D.cM()
n.bt(t.gj)
n.e=H.c([],t.bb)
n.f=H.c([],t.cP)
n.r=H.c([],t.af)
n.x=H.c([],t.du)
n.z=n.y=null
n.cY(n.gfi(),n.gfX(),n.gh0())
j.dx=n
i=new O.iG()
i.b=new V.al(0,0,0,0)
i.c=1
i.d=10
i.e=!1
j.dy=i
i=n.y
n=i==null?n.y=D.J():i
n.n(0,j.ghi())
n=j.dx
i=n.z
n=i==null?n.z=D.J():i
i=j.gaU()
n.n(0,i)
j.fr=null
n=j.dx
h=V.lw()
g=U.m9(V.mi(V.ls(),h,new V.y(-1,-1,-1)))
f=new V.a1(1,1,1)
e=new D.bA()
e.c=new V.a1(1,1,1)
e.a=V.mN()
e.d=V.lw()
e.e=V.oU()
d=e.b
e.b=g
g.gp().n(0,e.geP())
g=new D.E("mover",d,e.b)
g.b=!0
e.aD(g)
if(!e.c.q(0,f)){d=e.c
e.c=f
g=new D.E("color",d,f)
g.b=!0
e.aD(g)}n.n(0,e)
n=j.r
n.sao(0,new V.a1(0.5,0.5,0.5))
n=j.x
n.sao(0,new V.a1(0.5,0.5,0.5))
j.r.sat(k)
j.x.sat(k)
j.z.sat(l)
n=j.ch
if(n!==m){if(n!=null)n.gp().C(0,i)
d=j.ch
j.ch=m
m.gp().n(0,i)
n=new D.E("environment",d,j.ch)
n.b=!0
j.X(n)}j.cx.sat(l)
n=j.cx
n.sao(0,new V.a1(0.5,0.5,0.5))
n=j.z
n.cd(new A.a4(!0,!1,n.c.c))
n.dr(10)
c=new U.bV()
c.bt(t.ah)
c.b6(c.gfg(),c.gfZ())
c.e=null
c.f=V.bZ()
c.r=0
n=q.x
i=new U.dd()
g=U.lf()
g.scV(0,!0)
g.scG(6.283185307179586)
g.scI(0)
g.sZ(0,0)
g.scH(100)
g.sW(0)
g.scp(0.5)
i.b=g
e=i.gaT()
g.gp().n(0,e)
g=U.lf()
g.scV(0,!0)
g.scG(6.283185307179586)
g.scI(0)
g.sZ(0,0)
g.scH(100)
g.sW(0)
g.scp(0.5)
i.c=g
g.gp().n(0,e)
i.d=null
i.r=i.f=i.e=!1
i.y=i.x=2.5
i.Q=4
i.ch=i.cx=!1
i.db=i.cy=0
i.dx=null
i.dy=0
i.fx=i.fr=null
b=new X.as(!1,!1,!1)
d=i.d
i.d=b
g=new D.E(b0,d,b)
g.b=!0
i.R(g)
g=i.f
if(g!==!1){i.f=!1
g=new D.E("invertX",g,!1)
g.b=!0
i.R(g)}g=i.r
if(g!==!1){i.r=!1
g=new D.E("invertY",g,!1)
g.b=!0
i.R(g)}i.bf(n)
c.n(0,i)
n=q.x
i=new U.dc()
g=U.lf()
g.scV(0,!0)
g.scG(6.283185307179586)
g.scI(0)
g.sZ(0,0)
g.scH(100)
g.sW(0)
g.scp(0.2)
i.b=g
g.gp().n(0,i.gaT())
i.c=null
i.d=!1
i.e=2.5
i.r=4
i.x=i.y=!1
i.z=0
i.Q=null
i.ch=0
i.cy=i.cx=null
b=new X.as(!0,!1,!1)
d=i.c
i.c=b
g=new D.E(b0,d,b)
g.b=!0
i.R(g)
i.bf(n)
c.n(0,i)
n=q.x
i=new U.de()
i.c=0.01
i.e=i.d=0
b=new X.as(!1,!1,!1)
i.b=b
g=new D.E(b0,a9,b)
g.b=!0
i.R(g)
i.bf(n)
c.n(0,i)
c.n(0,U.m9(V.aY(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a=X.ml(c)
a0=new M.cx()
a0.a=!0
n=E.md()
a1=F.eU()
i=a1.a
g=new V.y(-1,-1,1).B()
a2=i.bA(new V.au(1,2,4,6),V.hY(255,0,0),new V.K(-1,-1,0),new V.T(0,1),g,a9)
g=a1.a
i=new V.y(1,-1,1).B()
a3=g.bA(new V.au(0,3,4,6),V.hY(0,0,255),new V.K(1,-1,0),new V.T(1,1),i,a9)
i=a1.a
g=new V.y(1,1,1).B()
a4=i.bA(new V.au(0,2,5,6),V.hY(0,128,0),new V.K(1,1,0),new V.T(1,0),g,a9)
g=a1.a
i=V.b_()
e=new V.y(-1,1,1).B()
a5=g.bA(new V.au(0,2,4,7),V.hY(255,255,0),new V.K(-1,1,0),i,e,a9)
a1.d.dB(H.c([a2,a3,a4,a5],t.j))
a1.an()
n.sab(0,a1)
a0.e=n
a0.sbg(a9)
a0.sbo(0,a9)
a0.sbp(a9)
n=new O.eV()
n.b=1.0471975511965976
n.d=new V.a1(1,1,1)
d=n.c
n.c=m
m.gp().n(0,n.gaU())
i=new D.E("boxTexture",d,n.c)
i.b=!0
n.X(i)
a0.sbp(n)
a0.sbo(0,o)
a0.sbg(a)
a6=new M.cD()
a6.a=!0
n=O.le(t.l)
a6.e=n
n.b6(a6.gft(),a6.gfv())
a6.y=a6.x=a6.r=a6.f=null
a7=X.li(a9)
a6.sbg(a9)
a6.sbo(0,a7)
a6.sbp(a9)
a6.sbg(a)
a6.sbp(j)
a6.sbo(0,o)
a6.e.n(0,p)
n=H.c([a0,a6],t.f2)
i=new M.ct()
i.bt(t.bn)
i.e=!0
i.f=!1
i.r=null
i.b6(i.gh2(),i.gh4())
i.a9(0,n)
n=q.d
if(n!==i){if(n!=null)n.gp().C(0,q.gd5())
q.d=i
i.gp().n(0,q.gd5())
q.d6()}n=new V.j_("shapes")
s=s.getElementById("shapes")
n.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
n.ay(0,"Cube",new T.kS(p))
n.ay(0,"Cuboid",new T.kT(p))
n.ay(0,"Cylinder",new T.kU(p))
n.ay(0,"Cone",new T.kV(p))
n.ay(0,"LatLonSphere",new T.kW(p))
n.ay(0,"IsoSphere",new T.kX(p))
n.bz(0,"Sphere",new T.kY(p),!0)
n.ay(0,"Toroid",new T.kZ(p))
n.ay(0,"Knot",new T.l_(p))
s=q.Q
if(s==null)s=q.Q=D.J()
n=s.b
s=n==null?s.b=H.c([],t.f):n
s.push(new T.l0(b1,j))
V.qP(q)},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lm.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gS:function(a){return H.d1(a)},
i:function(a){return"Instance of '"+H.f(H.eN(a))+"'"}}
J.eg.prototype={
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$iaC:1}
J.cL.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0}}
J.bf.prototype={
gS:function(a){return 0},
i:function(a){return String(a)},
$imf:1}
J.eG.prototype={}
J.bJ.prototype={}
J.aG.prototype={
i:function(a){var s=a[$.ny()]
if(s==null)return this.eH(a)
return"JavaScript function for "+H.f(J.a8(s))},
$iaE:1}
J.w.prototype={
cO:function(a,b){if(!!a.fixed$length)H.q(P.B("removeAt"))
if(b<0||b>=a.length)throw H.b(P.eO(b,null))
return a.splice(b,1)[0]},
C:function(a,b){var s
if(!!a.fixed$length)H.q(P.B("remove"))
for(s=0;s<a.length;++s)if(J.F(a[s],b)){a.splice(s,1)
return!0}return!1},
a9:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.B("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.p)(b),++r)a.push(b[r])},
I:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.bc(a))}},
j:function(a,b){var s,r,q=P.iy(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.d(q,s)
q[s]=r}return q.join(b)},
ia:function(a){return this.j(a,"")},
i3:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.bc(a))}return s},
i4:function(a,b,c){return this.i3(a,b,c,t.z)},
i2:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.b(P.bc(a))}throw H.b(H.ir())},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gi1:function(a){if(a.length>0)return a[0]
throw H.b(H.ir())},
gaB:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.ir())},
dF:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.b(P.bc(a))}return!1},
b8:function(a,b){if(!!a.immutable$list)H.q(P.B("sort"))
H.oM(a,b==null?J.pK():b)},
eD:function(a){return this.b8(a,null)},
G:function(a,b){var s
for(s=0;s<a.length;++s)if(J.F(a[s],b))return!0
return!1},
i:function(a){return P.lj(a,"[","]")},
gO:function(a){return new J.a9(a,a.length)},
gS:function(a){return H.d1(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.B("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.co(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.q(P.B("indexed set"))
if(b>=a.length||b<0)throw H.b(H.co(a,b))
a[b]=c},
$il:1,
$ih:1,
$in:1}
J.is.prototype={}
J.a9.prototype={
gE:function(a){return this.d},
v:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.p(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bF.prototype={
b1:function(a,b){var s
if(typeof b!="number")throw H.b(H.aB(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbH(b)
if(this.gbH(a)===s)return 0
if(this.gbH(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbH:function(a){return a===0?1/a<0:a<0},
iE:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.B(""+a+".toInt()"))},
cB:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.B(""+a+".floor()"))},
as:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.B(""+a+".round()"))},
eu:function(a,b){var s
if(b>20)throw H.b(P.a6(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbH(a))return"-"+s
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
br:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eJ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.du(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.du(a,b)},
du:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.B("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aZ:function(a,b){var s
if(a>0)s=this.dt(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hq:function(a,b){if(b<0)throw H.b(H.aB(b))
return this.dt(a,b)},
dt:function(a,b){return b>31?0:a>>>b},
$ia0:1,
$iS:1}
J.cK.prototype={$ik:1}
J.cJ.prototype={}
J.aU.prototype={
Y:function(a,b){if(b<0)throw H.b(H.co(a,b))
if(b>=a.length)H.q(H.co(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.b(H.co(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!="string")throw H.b(P.m2(b,null,null))
return a+b},
b4:function(a,b,c,d){var s,r,q=P.bi(b,c,a.length)
if(!H.ck(q))H.q(H.aB(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
ac:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a6(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a8:function(a,b){return this.ac(a,b,0)},
u:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.eO(b,null))
if(b>c)throw H.b(P.eO(b,null))
if(c>a.length)throw H.b(P.eO(c,null))
return a.substring(b,c)},
ag:function(a,b){return this.u(a,b,null)},
iG:function(a){return a.toLowerCase()},
t:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.P)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ar:function(a,b){var s=b-a.length
if(s<=0)return a
return this.t(" ",s)+a},
bF:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a6(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ea:function(a,b){return this.bF(a,b,0)},
hJ:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a6(c,0,s,null,null))
return H.nu(a,b,c)},
G:function(a,b){return this.hJ(a,b,0)},
b1:function(a,b){var s
if(typeof b!="string")throw H.b(H.aB(b))
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
gm:function(a){return a.length},
$iz:1}
H.ek.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.r.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.Y(this.a,b)}}
H.l.prototype={}
H.cQ.prototype={
gO:function(a){return new H.bg(this,this.gm(this))},
bR:function(a,b){return this.eG(0,b)}}
H.bg.prototype={
gE:function(a){var s=this.d
return s},
v:function(){var s,r=this,q=r.a,p=J.b6(q),o=p.gm(q)
if(r.b!=o)throw H.b(P.bc(q))
s=r.c
if(typeof o!=="number")return H.v(o)
if(s>=o){r.d=null
return!1}r.d=p.J(q,s);++r.c
return!0}}
H.aW.prototype={
gO:function(a){return new H.eo(J.b8(this.a),this.b)},
gm:function(a){return J.aP(this.a)},
J:function(a,b){return this.b.$1(J.hO(this.a,b))}}
H.cB.prototype={$il:1}
H.eo.prototype={
v:function(){var s=this,r=s.b
if(r.v()){s.a=s.c.$1(r.gE(r))
return!0}s.a=null
return!1},
gE:function(a){var s=this.a
return s}}
H.cU.prototype={
gm:function(a){return J.aP(this.a)},
J:function(a,b){return this.b.$1(J.hO(this.a,b))}}
H.b4.prototype={
gO:function(a){return new H.fD(J.b8(this.a),this.b)}}
H.fD.prototype={
v:function(){var s,r
for(s=this.a,r=this.b;s.v();)if(r.$1(s.gE(s)))return!0
return!1},
gE:function(a){var s=this.a
return s.gE(s)}}
H.cG.prototype={}
H.fv.prototype={
l:function(a,b,c){throw H.b(P.B("Cannot modify an unmodifiable list"))}}
H.cb.prototype={}
H.cv.prototype={
i:function(a){return P.lr(this)},
l:function(a,b,c){H.oa()},
$iH:1}
H.cw.prototype={
gm:function(a){return this.a},
cm:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cm(0,b))return null
return this.df(b)},
df:function(a){return this.b[a]},
I:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.df(q))}}}
H.js.prototype={
aq:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.eA.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.ei.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.fu.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iY.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hj.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bz.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nw(r==null?"unknown":r)+"'"},
$iaE:1,
giJ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fa.prototype={}
H.f3.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nw(s)+"'"}}
H.bR.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bR))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gS:function(a){var s,r=this.c
if(r==null)s=H.d1(this.a)
else s=typeof r!=="object"?J.aj(r):H.d1(r)
return(s^H.d1(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eN(s))+"'")}}
H.eS.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.C.prototype={
gm:function(a){return this.a},
gbG:function(a){return this.a===0},
ga3:function(a){return new H.cN(this,H.dI(this).K("cN<1>"))},
giI:function(a){var s=this,r=H.dI(s)
return H.or(s.ga3(s),new H.it(s),r.c,r.Q[1])},
cm:function(a,b){var s=this.b
if(s==null)return!1
return this.f2(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bu(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bu(p,b)
q=r==null?n:r.b
return q}else return o.i8(b)},
i8:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.dg(p,q.ec(a))
r=q.ed(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.d8(s==null?q.b=q.c8():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.d8(r==null?q.c=q.c8():r,b,c)}else q.i9(b,c)},
i9:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.c8()
s=p.ec(a)
r=p.dg(o,s)
if(r==null)p.ce(o,s,[p.c9(a,b)])
else{q=p.ed(r,a)
if(q>=0)r[q].b=b
else r.push(p.c9(a,b))}},
I:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.bc(s))
r=r.c}},
d8:function(a,b,c){var s=this.bu(a,b)
if(s==null)this.ce(a,b,this.c9(b,c))
else s.b=c},
fd:function(){this.r=this.r+1&67108863},
c9:function(a,b){var s,r=this,q=new H.iw(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.fd()
return q},
ec:function(a){return J.aj(a)&0x3ffffff},
ed:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.F(a[r].a,b))return r
return-1},
i:function(a){return P.lr(this)},
bu:function(a,b){return a[b]},
dg:function(a,b){return a[b]},
ce:function(a,b,c){a[b]=c},
f6:function(a,b){delete a[b]},
f2:function(a,b){return this.bu(a,b)!=null},
c8:function(){var s="<non-identifier-key>",r=Object.create(null)
this.ce(r,s,r)
this.f6(r,s)
return r}}
H.it.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.dI(this.a).K("2(1)")}}
H.iw.prototype={}
H.cN.prototype={
gm:function(a){return this.a.a},
gO:function(a){var s=this.a,r=new H.en(s,s.r)
r.c=s.e
return r}}
H.en.prototype={
gE:function(a){return this.d},
v:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.bc(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kK.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.kL.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kM.prototype={
$1:function(a){return this.a(a)}}
H.eh.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imu:1}
H.cX.prototype={$icX:1}
H.Z.prototype={$iZ:1}
H.c2.prototype={
gm:function(a){return a.length},
$iA:1}
H.bH.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]},
l:function(a,b,c){H.b5(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.cY.prototype={
l:function(a,b,c){H.b5(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.ev.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.ew.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.ex.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.ey.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.ez.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.cZ.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.c3.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b5(b,a,a.length)
return a[b]},
$ic3:1,
$ibk:1}
H.dn.prototype={}
H.dp.prototype={}
H.dq.prototype={}
H.dr.prototype={}
H.aw.prototype={
K:function(a){return H.hx(v.typeUniverse,this,a)},
bb:function(a){return H.pj(v.typeUniverse,this,a)}}
H.fW.prototype={}
H.fR.prototype={
i:function(a){return this.a}}
H.dA.prototype={}
P.k2.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
P.k1.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.k3.prototype={
$0:function(){this.a.$0()}}
P.k4.prototype={
$0:function(){this.a.$0()}}
P.dz.prototype={
eS:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cn(new P.kl(this,b),0),a)
else throw H.b(P.B("`setTimeout()` not found."))},
eT:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cn(new P.kk(this,a,Date.now(),b),0),a)
else throw H.b(P.B("Periodic timer."))},
$id5:1}
P.kl.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.kk.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eJ(s,o)}q.c=p
r.d.$1(q)}}
P.ch.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bK.prototype={
gE:function(a){var s=this.c
if(s==null)return this.b
return s.gE(s)},
v:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.v())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.ch){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.b8(s)
if(o instanceof P.bK){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dw.prototype={
gO:function(a){return new P.bK(this.a())}}
P.fE.prototype={}
P.d3.prototype={}
P.f5.prototype={}
P.d5.prototype={}
P.ks.prototype={}
P.kB.prototype={
$0:function(){var s=H.b(this.a)
s.stack=J.a8(this.b)
throw s}}
P.k9.prototype={
iA:function(a){var s,r,q,p=null
try{if(C.f===$.aM){a.$0()
return}P.qf(p,p,this,a)}catch(q){s=H.ai(q)
r=H.lS(q)
P.nc(p,p,this,s,r)}},
iB:function(a,b){var s,r,q,p=null
try{if(C.f===$.aM){a.$1(b)
return}P.qg(p,p,this,a,b)}catch(q){s=H.ai(q)
r=H.lS(q)
P.nc(p,p,this,s,r)}},
iC:function(a,b){return this.iB(a,b,t.z)},
hG:function(a){return new P.ka(this,a)},
dK:function(a,b){return new P.kb(this,a,b)}}
P.ka.prototype={
$0:function(){return this.a.iA(this.b)}}
P.kb.prototype={
$1:function(a){return this.a.iC(this.b,a)},
$S:function(){return this.c.K("~(0)")}}
P.dj.prototype={
gO:function(a){var s=new P.dk(this,this.r)
s.c=this.e
return s},
gm:function(a){return this.a},
G:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.f_(b)
return r}},
f_:function(a){var s=this.d
if(s==null)return!1
return this.c_(s[this.bW(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.d9(s==null?q.b=P.lz():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.d9(r==null?q.c=P.lz():r,b)}else return q.eU(0,b)},
eU:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lz()
s=q.bW(b)
r=p[s]
if(r==null)p[s]=[q.bV(b)]
else{if(q.c_(r,b)>=0)return!1
r.push(q.bV(b))}return!0},
C:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.hd(this.c,b)
else return this.hc(0,b)},
hc:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bW(b)
r=n[s]
q=o.c_(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dw(p)
return!0},
d9:function(a,b){if(a[b]!=null)return!1
a[b]=this.bV(b)
return!0},
hd:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dw(s)
delete a[b]
return!0},
da:function(){this.r=1073741823&this.r+1},
bV:function(a){var s,r=this,q=new P.k8(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.da()
return q},
dw:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.da()},
bW:function(a){return J.aj(a)&1073741823},
c_:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.F(a[r].a,b))return r
return-1}}
P.k8.prototype={}
P.dk.prototype={
gE:function(a){return this.d},
v:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.bc(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cI.prototype={}
P.ix.prototype={
$2:function(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cP.prototype={$il:1,$ih:1,$in:1}
P.i.prototype={
gO:function(a){return new H.bg(a,this.gm(a))},
J:function(a,b){return this.h(a,b)},
gbG:function(a){return this.gm(a)===0},
iF:function(a,b){var s,r,q,p,o=this
if(o.gbG(a)){s=J.lk(0,H.bM(a).K("i.E"))
return s}r=o.h(a,0)
q=P.iy(o.gm(a),r,!0,H.bM(a).K("i.E"))
p=1
while(!0){s=o.gm(a)
if(typeof s!=="number")return H.v(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s;++p}return q},
cS:function(a){return this.iF(a,!0)},
hZ:function(a,b,c,d){var s
P.bi(b,c,this.gm(a))
for(s=b;s<c;++s)this.l(a,s,d)},
i:function(a){return P.lj(a,"[","]")}}
P.cS.prototype={}
P.iB.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:18}
P.X.prototype={
I:function(a,b){var s,r
for(s=J.b8(this.ga3(a));s.v();){r=s.gE(s)
b.$2(r,this.h(a,r))}},
gm:function(a){return J.aP(this.ga3(a))},
i:function(a){return P.lr(a)},
$iH:1}
P.hy.prototype={
l:function(a,b,c){throw H.b(P.B("Cannot modify unmodifiable map"))}}
P.cT.prototype={
h:function(a,b){return J.cr(this.a,b)},
l:function(a,b,c){J.l7(this.a,b,c)},
I:function(a,b){J.l9(this.a,b)},
gm:function(a){return J.aP(this.a)},
i:function(a){return J.a8(this.a)},
$iH:1}
P.cc.prototype={}
P.ds.prototype={
a9:function(a,b){var s
for(s=J.b8(b);s.v();)this.n(0,s.gE(s))},
i:function(a){return P.lj(this,"{","}")},
J:function(a,b){var s,r,q,p="index"
P.o1(b,p)
P.mt(b,p)
for(s=P.p3(this,this.r),r=0;s.v();){q=s.d
if(b===r)return q;++r}throw H.b(P.P(b,this,p,null,r))},
$il:1,
$ih:1}
P.dl.prototype={}
P.dE.prototype={}
P.jL.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ai(r)}return null}}
P.jM.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ai(r)}return null}}
P.hU.prototype={
ic:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bi(a2,a3,a1.length)
if(a3==null)throw H.b(P.ms("Invalid range"))
s=$.nO()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.F(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.kJ(C.a.F(a1,l))
h=H.kJ(C.a.F(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.d(s,g)
f=s[g]
if(f>=0){g=C.a.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.U("")
e=p}else e=p
d=e.a+=C.a.u(a1,q,r)
e.a=d+H.av(k)
q=l
continue}}throw H.b(P.a5("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.u(a1,q,a3)
d=e.length
if(o>=0)P.m3(a1,n,a3,o,m,d)
else{c=C.c.br(d-1,4)+1
if(c===1)throw H.b(P.a5(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.b4(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.m3(a1,n,a3,o,m,b)
else{c=C.c.br(b,4)
if(c===1)throw H.b(P.a5(a,a1,a3))
if(c>1)a1=C.a.b4(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hV.prototype={}
P.e0.prototype={}
P.e2.prototype={}
P.ia.prototype={}
P.ip.prototype={
i:function(a){return this.a}}
P.io.prototype={
f3:function(a,b,c){var s,r,q,p,o,n,m=null
for(s=this.a,r=s.e,q=s.d,s=s.c,p=b,o=m;p<c;++p){if(p>=a.length)return H.d(a,p)
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
default:n=m}if(n!=null){if(o==null)o=new P.U("")
if(p>b)o.a+=C.a.u(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.o_(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.jJ.prototype={
ghY:function(){return C.Q}}
P.jN.prototype={
cn:function(a){var s,r,q,p=P.bi(0,null,a.length)
if(p==null)throw H.b(P.ms("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.kq(r)
if(q.f8(a,0,p)!==p){J.nV(a,p-1)
q.ci()}return new Uint8Array(r.subarray(0,H.pC(0,q.b,r.length)))}}
P.kq.prototype={
ci:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
hy:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.ci()
return!1}},
f8:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.Y(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.F(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hy(p,C.a.F(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.ci()}else if(p<=2047){o=l.b
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
P.jK.prototype={
cn:function(a){var s=this.a,r=P.oS(s,a,0,null)
if(r!=null)return r
return new P.kp(s).hK(a,0,null,!0)}}
P.kp.prototype={
hK:function(a,b,c,d){var s,r,q,p,o=this,n=P.bi(b,c,J.aP(a))
if(b===n)return""
s=P.py(a,b,n)
if(typeof n!=="number")return n.a2()
n-=b
r=o.bX(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.pz(q)
o.b=0
throw H.b(P.a5(p,a,b+o.c))}return r},
bX:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.a2()
if(c-b>1000){s=C.c.a6(b+c,2)
r=q.bX(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bX(a,s,c,d)}return q.hP(a,b,c,d)},
hP:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.U(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.F("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.F(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.av(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.av(j)
break
case 65:g.a+=H.av(j);--f
break
default:p=g.a+=H.av(j)
g.a=p+H.av(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(f<0||f>=e)return H.d(a,f)
s=a[f]}o=f+1
if(f<0||f>=e)return H.d(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(o<0||o>=e)return H.d(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(l>=e)return H.d(a,l)
g.a+=H.av(a[l])}else g.a+=P.f7(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.av(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.aC.prototype={}
P.am.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.am&&this.a===b.a&&!0},
b1:function(a,b){return C.c.b1(this.a,b.a)},
gS:function(a){var s=this.a
return(s^C.c.aZ(s,30))&1073741823},
i:function(a){var s=this,r=P.ob(H.oC(s)),q=P.e5(H.oA(s)),p=P.e5(H.ow(s)),o=P.e5(H.ox(s)),n=P.e5(H.oz(s)),m=P.e5(H.oB(s)),l=P.oc(H.oy(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.a0.prototype={}
P.bB.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bB&&this.a===b.a},
gS:function(a){return C.c.gS(this.a)},
b1:function(a,b){return C.c.b1(this.a,b.a)},
i:function(a){var s,r,q,p=new P.i7(),o=this.a
if(o<0)return"-"+new P.bB(0-o).i(0)
s=p.$1(C.c.a6(o,6e7)%60)
r=p.$1(C.c.a6(o,1e6)%60)
q=new P.i6().$1(o%1e6)
return""+C.c.a6(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.i6.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.i7.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.M.prototype={}
P.dT.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.id(s)
return"Assertion failed"}}
P.eB.prototype={
i:function(a){return"Throw of null."}}
P.ak.prototype={
gbZ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbY:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbZ()+o+m
if(!q.a)return l
s=q.gbY()
r=P.id(q.b)
return l+s+": "+r}}
P.c6.prototype={
gbZ:function(){return"RangeError"},
gbY:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.ee.prototype={
gbZ:function(){return"RangeError"},
gbY:function(){var s,r=this.b
if(typeof r!=="number")return r.af()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gm:function(a){return this.f}}
P.fw.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ft.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c9.prototype={
i:function(a){return"Bad state: "+this.a}}
P.e1.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.id(s)+"."}}
P.eE.prototype={
i:function(a){return"Out of Memory"},
$iM:1}
P.d2.prototype={
i:function(a){return"Stack Overflow"},
$iM:1}
P.e3.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fT.prototype={
i:function(a){return"Exception: "+this.a}}
P.ik.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.u(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.F(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.Y(d,o)
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
return f+j+h+i+"\n"+C.a.t(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.aE.prototype={}
P.k.prototype={}
P.h.prototype={
bR:function(a,b){return new H.b4(this,b,H.dI(this).K("b4<h.E>"))},
gm:function(a){var s,r=this.gO(this)
for(s=0;r.v();)++s
return s},
gaR:function(a){var s,r=this.gO(this)
if(!r.v())throw H.b(H.ir())
s=r.gE(r)
if(r.v())throw H.b(H.oh())
return s},
J:function(a,b){var s,r,q
P.mt(b,"index")
for(s=this.gO(this),r=0;s.v();){q=s.gE(s)
if(b===r)return q;++r}throw H.b(P.P(b,this,"index",null,r))},
i:function(a){return P.og(this,"(",")")}}
P.ef.prototype={}
P.n.prototype={$il:1,$ih:1}
P.H.prototype={}
P.at.prototype={
gS:function(a){return P.O.prototype.gS.call(C.j,this)},
i:function(a){return"null"}}
P.S.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
q:function(a,b){return this===b},
gS:function(a){return H.d1(this)},
i:function(a){return"Instance of '"+H.f(H.eN(this))+"'"},
toString:function(){return this.i(this)}}
P.z.prototype={}
P.U.prototype={
gm:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jH.prototype={
$2:function(a,b){var s,r,q,p=J.dN(b).ea(b,"=")
if(p===-1){if(b!=="")J.l7(a,P.lI(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.u(b,0,p)
r=C.a.ag(b,p+1)
q=this.a
J.l7(a,P.lI(s,0,s.length,q,!0),P.lI(r,0,r.length,q,!0))}return a}}
P.jE.prototype={
$2:function(a,b){throw H.b(P.a5("Illegal IPv4 address, "+a,this.a,b))}}
P.jF.prototype={
$2:function(a,b){throw H.b(P.a5("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jG.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kN(C.a.u(this.b,a,b),16)
if(typeof s!=="number")return s.af()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bL.prototype={
gcg:function(){var s,r,q,p=this,o=p.x
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
else o=H.q(H.lo("Field '_text' has been assigned during initialization."))}return o},
gS:function(a){var s=this,r=s.z
if(r==null){r=C.a.gS(s.gcg())
if(s.z==null)s.z=r
else r=H.q(H.lo("Field 'hashCode' has been assigned during initialization."))}return r},
gcN:function(){var s=this,r=s.Q
if(r==null){r=new P.cc(P.mH(s.gbn(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.q(H.lo("Field 'queryParameters' has been assigned during initialization."))}return r},
gew:function(){return this.b},
gcD:function(a){var s=this.c
if(s==null)return""
if(C.a.a8(s,"["))return C.a.u(s,1,s.length-1)
return s},
gbK:function(a){var s=this.d
return s==null?P.n2(this.a):s},
gbn:function(a){var s=this.f
return s==null?"":s},
gcC:function(){var s=this.r
return s==null?"":s},
eq:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a8(s,"/"))s="/"+s
q=s
p=P.lG(null,0,0,b)
return new P.bL(n,l,j,k,q,p,o.r)},
ge6:function(){return this.c!=null},
ge9:function(){return this.f!=null},
ge7:function(){return this.r!=null},
i:function(a){return this.gcg()},
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbS()&&s.c!=null===b.ge6()&&s.b===b.gew()&&s.gcD(s)===b.gcD(b)&&s.gbK(s)===b.gbK(b)&&s.e===b.geo(b)&&s.f!=null===b.ge9()&&s.gbn(s)===b.gbn(b)&&s.r!=null===b.ge7()&&s.gcC()===b.gcC()},
$ifx:1,
gbS:function(){return this.a},
geo:function(a){return this.e}}
P.kn.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.ko(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.ko(C.h,b,C.e,!0))}}}
P.km.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.b8(b),r=this.a;s.v();)r.$2(a,s.gE(s))}}
P.jD.prototype={
gev:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bF(s,"?",m)
q=s.length
if(r>=0){p=P.dF(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.fK("data","",n,n,P.dF(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kw.prototype={
$1:function(a){return new Uint8Array(96)}}
P.kv.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
J.nW(s,0,96,b)
return s},
$S:19}
P.kx.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.F(b,q)^96
if(p>=r)return H.d(a,p)
a[p]=c}}}
P.ky.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.F(b,0),r=C.a.F(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.d(a,p)
a[p]=c}}}
P.hd.prototype={
ge6:function(){return this.c>0},
ge8:function(){return this.c>0&&this.d+1<this.e},
ge9:function(){return this.f<this.r},
ge7:function(){return this.r<this.a.length},
gdh:function(){return this.b===4&&C.a.a8(this.a,"http")},
gdi:function(){return this.b===5&&C.a.a8(this.a,"https")},
gbS:function(){var s=this.x
return s==null?this.x=this.f0():s},
f0:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gdh())return"http"
if(s.gdi())return"https"
if(r===4&&C.a.a8(s.a,"file"))return"file"
if(r===7&&C.a.a8(s.a,"package"))return"package"
return C.a.u(s.a,0,r)},
gew:function(){var s=this.c,r=this.b+3
return s>r?C.a.u(this.a,r,s-1):""},
gcD:function(a){var s=this.c
return s>0?C.a.u(this.a,s,this.d):""},
gbK:function(a){var s=this
if(s.ge8())return P.kN(C.a.u(s.a,s.d+1,s.e),null)
if(s.gdh())return 80
if(s.gdi())return 443
return 0},
geo:function(a){return C.a.u(this.a,this.e,this.f)},
gbn:function(a){var s=this.f,r=this.r
return s<r?C.a.u(this.a,s+1,r):""},
gcC:function(){var s=this.r,r=this.a
return s<r.length?C.a.ag(r,s+1):""},
gcN:function(){var s=this
if(s.f>=s.r)return C.a_
return new P.cc(P.mH(s.gbn(s)),t.U)},
eq:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbS(),k=l==="file",j=n.c,i=j>0?C.a.u(n.a,n.b+3,j):"",h=n.ge8()?n.gbK(n):m
j=n.c
if(j>0)s=C.a.u(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.u(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a8(r,"/"))r="/"+r
p=P.lG(m,0,0,b)
q=n.r
o=q<j.length?C.a.ag(j,q+1):m
return new P.bL(l,i,s,h,r,p,o)},
gS:function(a){var s=this.y
return s==null?this.y=C.a.gS(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifx:1}
P.fK.prototype={}
W.t.prototype={}
W.hP.prototype={
gm:function(a){return a.length}}
W.dR.prototype={
i:function(a){return String(a)}}
W.dS.prototype={
i:function(a){return String(a)}}
W.bQ.prototype={$ibQ:1}
W.bw.prototype={$ibw:1}
W.bx.prototype={$ibx:1}
W.by.prototype={
cW:function(a,b,c){if(c!=null)return a.getContext(b,P.qu(c))
return a.getContext(b)},
ez:function(a,b){return this.cW(a,b,null)},
$iby:1}
W.aD.prototype={
gm:function(a){return a.length}}
W.i_.prototype={
gm:function(a){return a.length}}
W.L.prototype={$iL:1}
W.cy.prototype={
gm:function(a){return a.length}}
W.i0.prototype={}
W.ar.prototype={}
W.aR.prototype={}
W.i1.prototype={
gm:function(a){return a.length}}
W.i2.prototype={
gm:function(a){return a.length}}
W.i3.prototype={
gm:function(a){return a.length}}
W.bd.prototype={$ibd:1}
W.i4.prototype={
i:function(a){return String(a)}}
W.cz.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.cA.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaQ(a))+" x "+H.f(this.gaK(a))},
q:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aN(b)
s=a.left==s.gbI(b)&&a.top==s.gbO(b)&&this.gaQ(a)==s.gaQ(b)&&this.gaK(a)==s.gaK(b)}else s=!1
return s},
gS:function(a){return W.mU(J.aj(a.left),J.aj(a.top),J.aj(this.gaQ(a)),J.aj(this.gaK(a)))},
gdM:function(a){return a.bottom},
gaK:function(a){return a.height},
gbI:function(a){return a.left},
gcQ:function(a){return a.right},
gbO:function(a){return a.top},
gaQ:function(a){return a.width},
$iab:1}
W.e7.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.i5.prototype={
gm:function(a){return a.length}}
W.fH.prototype={
gbG:function(a){return this.a.firstElementChild==null},
gm:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var s=this.cS(this)
return new J.a9(s,s.length)}}
W.D.prototype={
ghF:function(a){return new W.fP(a)},
gdO:function(a){return new W.fH(a,a.children)},
gdP:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.af()
if(q<0)q=-q*0
if(typeof p!=="number")return p.af()
if(p<0)p=-p*0
return new P.ab(s,r,q,p,t.I)},
i:function(a){return a.localName},
ap:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.mc
if(s==null){s=H.c([],t.o)
r=new W.d0(s)
s.push(W.mS(null))
s.push(W.mY())
$.mc=r
d=r}else d=s
s=$.mb
if(s==null){s=new W.hz(d)
$.mb=s
c=s}else{s.a=d
c=s}}if($.be==null){s=document
r=s.implementation.createHTMLDocument("")
$.be=r
$.lg=r.createRange()
r=$.be.createElement("base")
t.D.a(r)
r.href=s.baseURI
$.be.head.appendChild(r)}s=$.be
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.be
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.be.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.G(C.Y,a.tagName)){$.lg.selectNodeContents(q)
s=$.lg
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.be.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.be.body)J.m0(q)
c.cX(p)
document.adoptNode(p)
return p},
hN:function(a,b,c){return this.ap(a,b,c,null)},
eB:function(a,b){a.textContent=null
a.appendChild(this.ap(a,b,null,null))},
ges:function(a){return a.tagName},
$iD:1}
W.i8.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.e.prototype={
hA:function(a,b,c,d){if(c!=null)this.eV(a,b,c,!1)},
eV:function(a,b,c,d){return a.addEventListener(b,H.cn(c,1),!1)},
$ie:1}
W.an.prototype={$ian:1}
W.bU.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1,
$ibU:1}
W.e8.prototype={
gm:function(a){return a.length}}
W.ea.prototype={
gm:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.im.prototype={
gm:function(a){return a.length}}
W.bD.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.bE.prototype={
gdQ:function(a){return a.data},
$ibE:1}
W.bW.prototype={$ibW:1}
W.bY.prototype={$ibY:1}
W.bG.prototype={$ibG:1}
W.iz.prototype={
i:function(a){return String(a)}}
W.iR.prototype={
gm:function(a){return a.length}}
W.c_.prototype={$ic_:1}
W.es.prototype={
h:function(a,b){return P.br(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.br(s.value[1]))}},
ga3:function(a){var s=H.c([],t.s)
this.I(a,new W.iS(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
W.iS.prototype={
$2:function(a,b){return this.a.push(a)}}
W.et.prototype={
h:function(a,b){return P.br(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.br(s.value[1]))}},
ga3:function(a){var s=H.c([],t.s)
this.I(a,new W.iT(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
W.iT.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aH.prototype={$iaH:1}
W.eu.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.ao.prototype={$iao:1}
W.a3.prototype={
gaR:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.b(P.lt("No elements"))
if(r>1)throw H.b(P.lt("More than one element"))
s=s.firstChild
s.toString
return s},
a9:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b])},
gO:function(a){var s=this.a.childNodes
return new W.cH(s,s.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.x.prototype={
iv:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
iy:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nT(s,b,a)}catch(q){H.ai(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eF(a):s},
hf:function(a,b,c){return a.replaceChild(b,c)},
$ix:1}
W.d_.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.aI.prototype={
gm:function(a){return a.length},
$iaI:1}
W.eI.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.eR.prototype={
h:function(a,b){return P.br(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.br(s.value[1]))}},
ga3:function(a){var s=H.c([],t.s)
this.I(a,new W.j6(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
W.j6.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eT.prototype={
gm:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.eY.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.aJ.prototype={$iaJ:1}
W.eZ.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.aK.prototype={
gm:function(a){return a.length},
$iaK:1}
W.f4.prototype={
h:function(a,b){return a.getItem(H.lK(b))},
l:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga3:function(a){var s=H.c([],t.s)
this.I(a,new W.jh(s))
return s},
gm:function(a){return a.length},
$iH:1}
W.jh.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ay.prototype={$iay:1}
W.bj.prototype={$ibj:1}
W.d4.prototype={
ap:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
s=W.od("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.a3(r).a9(0,new W.a3(s))
return r}}
W.f8.prototype={
ap:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.ap(s.createElement("table"),b,c,d)
s.toString
s=new W.a3(s)
q=s.gaR(s)
q.toString
s=new W.a3(q)
p=s.gaR(s)
r.toString
p.toString
new W.a3(r).a9(0,new W.a3(p))
return r}}
W.f9.prototype={
ap:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.ap(s.createElement("table"),b,c,d)
s.toString
s=new W.a3(s)
q=s.gaR(s)
r.toString
q.toString
new W.a3(r).a9(0,new W.a3(q))
return r}}
W.ca.prototype={$ica:1}
W.az.prototype={$iaz:1}
W.af.prototype={$iaf:1}
W.fc.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.fd.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.jn.prototype={
gm:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.bI.prototype={$ibI:1}
W.fi.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.jr.prototype={
gm:function(a){return a.length}}
W.b3.prototype={}
W.jI.prototype={
i:function(a){return String(a)}}
W.fA.prototype={
gm:function(a){return a.length}}
W.bn.prototype={
ghR:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.B("deltaY is not supported"))},
ghQ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.B("deltaX is not supported"))},
$ibn:1}
W.ce.prototype={
hh:function(a,b){return a.requestAnimationFrame(H.cn(b,1))},
f7:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cf.prototype={$icf:1}
W.fI.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.dh.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aN(b)
s=a.left==s.gbI(b)&&a.top==s.gbO(b)&&a.width==s.gaQ(b)&&a.height==s.gaK(b)}else s=!1
return s},
gS:function(a){return W.mU(J.aj(a.left),J.aj(a.top),J.aj(a.width),J.aj(a.height))},
gaK:function(a){return a.height},
gaQ:function(a){return a.width}}
W.fX.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.dm.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.hg.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.hn.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.fF.prototype={
I:function(a,b){var s,r,q,p,o
for(s=this.ga3(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.p)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
ga3:function(a){var s,r,q,p,o=this.a.attributes,n=H.c([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.d(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fP.prototype={
h:function(a,b){return this.a.getAttribute(H.lK(b))},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.ga3(this).length}}
W.lh.prototype={}
W.fS.prototype={
hx:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nU(s,this.c,r,!1)}}}
W.k5.prototype={
$1:function(a){return this.a.$1(a)}}
W.ly.prototype={}
W.cg.prototype={
eO:function(a){var s
if($.di.gbG($.di)){for(s=0;s<262;++s)$.di.l(0,C.X[s],W.qD())
for(s=0;s<12;++s)$.di.l(0,C.o[s],W.qE())}},
b_:function(a){return $.nP().G(0,W.cC(a))},
az:function(a,b,c){var s=$.di.h(0,H.f(W.cC(a))+"::"+b)
if(s==null)s=$.di.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iap:1}
W.N.prototype={
gO:function(a){return new W.cH(a,this.gm(a))}}
W.d0.prototype={
b_:function(a){return C.b.dF(this.a,new W.iW(a))},
az:function(a,b,c){return C.b.dF(this.a,new W.iV(a,b,c))},
$iap:1}
W.iW.prototype={
$1:function(a){return a.b_(this.a)}}
W.iV.prototype={
$1:function(a){return a.az(this.a,this.b,this.c)}}
W.dt.prototype={
eR:function(a,b,c,d){var s,r,q
this.a.a9(0,c)
s=b.bR(0,new W.kd())
r=b.bR(0,new W.ke())
this.b.a9(0,s)
q=this.c
q.a9(0,C.w)
q.a9(0,r)},
b_:function(a){return this.a.G(0,W.cC(a))},
az:function(a,b,c){var s=this,r=W.cC(a),q=s.c
if(q.G(0,H.f(r)+"::"+b))return s.d.hD(c)
else if(q.G(0,"*::"+b))return s.d.hD(c)
else{q=s.b
if(q.G(0,H.f(r)+"::"+b))return!0
else if(q.G(0,"*::"+b))return!0
else if(q.G(0,H.f(r)+"::*"))return!0
else if(q.G(0,"*::*"))return!0}return!1},
$iap:1}
W.kd.prototype={
$1:function(a){return!C.b.G(C.o,a)}}
W.ke.prototype={
$1:function(a){return C.b.G(C.o,a)}}
W.hp.prototype={
az:function(a,b,c){if(this.eI(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.G(0,b)
return!1}}
W.kj.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.ho.prototype={
b_:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cC(a)==="foreignObject")return!1
if(s)return!0
return!1},
az:function(a,b,c){if(b==="is"||C.a.a8(b,"on"))return!1
return this.b_(a)},
$iap:1}
W.cH.prototype={
v:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cr(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gE:function(a){return this.d}}
W.ap.prototype={}
W.kc.prototype={}
W.hz.prototype={
cX:function(a){var s=this,r=new W.kr(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
be:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.m0(a)
else b.removeChild(a)},
hm:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.nX(a)
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
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.ai(p)}r="element unprintable"
try{r=J.a8(a)}catch(p){H.ai(p)}try{q=W.cC(a)
this.hl(a,b,n,r,q,m,l)}catch(p){if(H.ai(p) instanceof P.ak)throw p
else{this.be(a,b)
window
o="Removing corrupted element "+H.f(r)
if(typeof console!="undefined")window.console.warn(o)}}},
hl:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.be(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.b_(a)){m.be(a,b)
window
s="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.az(a,"is",g)){m.be(a,b)
window
s="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.ga3(f)
r=H.c(s.slice(0),H.lJ(s).K("w<1>"))
for(q=f.ga3(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.d(r,q)
p=r[q]
o=m.a
n=J.o0(p)
H.lK(p)
if(!o.az(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.cX(a.content)}}
W.kr.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.hm(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.be(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.lt("Corrupt HTML")
throw H.b(q)}}catch(o){H.ai(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.fJ.prototype={}
W.fL.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fO.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h6.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.hc.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.hk.prototype={}
W.hq.prototype={}
W.hr.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.hs.prototype={}
W.ht.prototype={}
W.hA.prototype={}
W.hB.prototype={}
W.hC.prototype={}
W.hD.prototype={}
W.hE.prototype={}
W.hF.prototype={}
W.hG.prototype={}
W.hH.prototype={}
W.hI.prototype={}
W.hJ.prototype={}
P.kf.prototype={
cA:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bQ:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.lM(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.am)return new Date(a.a)
if(t.fv.b(a))throw H.b(P.jC("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.d.b(a))return a
if(t.bX.b(a))return a
if(t.v.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.cA(a)
r=o.b
q=r.length
if(s>=q)return H.d(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.l9(a,new P.kh(n,o))
return n.a}if(t.aH.b(a)){s=o.cA(a)
n=o.b
if(s>=n.length)return H.d(n,s)
p=n[s]
if(p!=null)return p
return o.hM(a,s)}if(t.eH.b(a)){s=o.cA(a)
r=o.b
q=r.length
if(s>=q)return H.d(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.d(r,s)
r[s]=p
o.i5(a,new P.ki(n,o))
return n.b}throw H.b(P.jC("structured clone of other type"))},
hM:function(a,b){var s,r=J.b6(a),q=r.gm(a),p=new Array(q),o=this.b
if(b>=o.length)return H.d(o,b)
o[b]=p
if(typeof q!=="number")return H.v(q)
s=0
for(;s<q;++s){o=this.bQ(r.h(a,s))
if(s>=p.length)return H.d(p,s)
p[s]=o}return p}}
P.kh.prototype={
$2:function(a,b){this.a.a[a]=this.b.bQ(b)},
$S:3}
P.ki.prototype={
$2:function(a,b){this.a.b[a]=this.b.bQ(b)},
$S:3}
P.dB.prototype={$ibE:1,
gdQ:function(a){return this.a}}
P.kC.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.kg.prototype={
i5:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e9.prototype={
gbv:function(){var s=this.b,r=H.dI(s)
return new H.aW(new H.b4(s,new P.ii(),r.K("b4<i.E>")),new P.ij(),r.K("aW<i.E,D>"))},
l:function(a,b,c){var s=this.gbv()
J.nZ(s.b.$1(J.hO(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.aP(this.gbv().a)},
h:function(a,b){var s=this.gbv()
return s.b.$1(J.hO(s.a,b))},
gO:function(a){var s=P.lq(this.gbv(),!1,t.h)
return new J.a9(s,s.length)}}
P.ii.prototype={
$1:function(a){return t.h.b(a)}}
P.ij.prototype={
$1:function(a){return t.h.a(a)}}
P.hb.prototype={
gcQ:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
gdM:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
q:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.aN(b)
if(s==r.gbI(b)){q=n.b
if(q==r.gbO(b)){p=n.c
if(typeof s!=="number")return s.w()
if(typeof p!=="number")return H.v(p)
o=n.$ti.c
if(o.a(s+p)===r.gcQ(b)){s=n.d
if(typeof q!=="number")return q.w()
if(typeof s!=="number")return H.v(s)
r=o.a(q+s)===r.gdM(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gS:function(a){var s,r=this,q=r.a,p=J.aj(q),o=r.b,n=J.aj(o),m=r.c
if(typeof q!=="number")return q.w()
if(typeof m!=="number")return H.v(m)
s=r.$ti.c
m=C.c.gS(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.w()
if(typeof q!=="number")return H.v(q)
q=C.c.gS(s.a(o+q))
return P.p2(P.k7(P.k7(P.k7(P.k7(0,p),n),m),q))}}
P.ab.prototype={
gbI:function(a){return this.a},
gbO:function(a){return this.b},
gaQ:function(a){return this.c},
gaK:function(a){return this.d}}
P.aV.prototype={$iaV:1}
P.el.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.aZ.prototype={$iaZ:1}
P.eC.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.iZ.prototype={
gm:function(a){return a.length}}
P.c7.prototype={$ic7:1}
P.f6.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.m.prototype={
gdO:function(a){return new P.e9(a,new W.a3(a))},
ap:function(a,b,c,d){var s,r,q,p,o,n=H.c([],t.o)
n.push(W.mS(null))
n.push(W.mY())
n.push(new W.ho())
c=new W.hz(new W.d0(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.q.hN(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.a3(q)
o=n.gaR(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.b1.prototype={$ib1:1}
P.fj.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.h_.prototype={}
P.h0.prototype={}
P.h7.prototype={}
P.h8.prototype={}
P.hl.prototype={}
P.hm.prototype={}
P.hu.prototype={}
P.hv.prototype={}
P.bk.prototype={$il:1,$ih:1,$in:1}
P.hS.prototype={
gm:function(a){return a.length}}
P.dV.prototype={
h:function(a,b){return P.br(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.br(s.value[1]))}},
ga3:function(a){var s=H.c([],t.s)
this.I(a,new P.hT(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
P.hT.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dW.prototype={
gm:function(a){return a.length}}
P.ba.prototype={}
P.eD.prototype={
gm:function(a){return a.length}}
P.fG.prototype={}
P.eQ.prototype={
iD:function(a,b,c,d,e,f,g){var s
if(t.v.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.qv(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.bP("Incorrect number or type of arguments"))}}
P.f1.prototype={
gm:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
s=P.br(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.hh.prototype={}
P.hi.prototype={}
K.b9.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"}}
K.ec.prototype={
aL:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)if(s[q].aL(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.p)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.iC.prototype={}
K.ae.prototype={
aL:function(a,b){return!this.eE(0,b)},
i:function(a){return"!["+this.d0(0)+"]"}}
K.j1.prototype={
aL:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.av(this.a),r=H.av(this.b)
return s+".."+r}}
K.j7.prototype={
eM:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.o("May not create a Set with zero characters."))
s=new H.C(t.E)
for(r=new H.bg(a,a.gm(a));r.v();){q=r.d
s.l(0,q,!0)}p=P.lq(s.ga3(s),!0,t.e)
C.b.eD(p)
this.a=p},
aL:function(a,b){return C.b.G(this.a,b)},
i:function(a){return P.f7(this.a,0,null)}}
L.f2.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.fk(this.a.k(0,b))
p.a=H.c([],t.B)
p.c=!1
this.c.push(p)
return p},
i0:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
if(p.aL(0,a))return p}return null},
i:function(a){return this.b},
dv:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.G(0,l))m+=" (consume)"
for(l=n.d.c,l=l.ga3(l),l=l.gO(l);l.v();){r=l.gE(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.G(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.p)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.fg.prototype={
i:function(a){var s=H.lX(this.b,"\n","\\n"),r=H.lX(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fh.prototype={
aN:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.p)(c),++r){q=c[r]
this.c.l(0,q,b)}},
i:function(a){return this.b}}
L.jo.prototype={
k:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.f2(this,b)
s.c=H.c([],t.br)
this.a.l(0,b,s)}return s},
P:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.fh(a)
s.c=new H.C(t.dO)
this.b.l(0,a,s)}return s},
cT:function(a){return this.iH(a)},
iH:function(a){var s=this
return P.pS(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cT(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.c([],c)
a0=H.c([],c)
a1=H.c([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.cO(a1,0)
else{if(!r.v()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.i0(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.f7(a0,0,null)
throw H.b(P.o("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.q(P.B("removeRange"))
P.bi(0,k,a0.length)
a0.splice(0,k-0)
C.b.a9(a1,a0)
a0=H.c([],c)
b=H.c([],c)
d=s.d
q=!s.c.G(0,n.a)?7:8
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
if(d.d!=null){g=P.f7(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.fg(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.G(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.p0()
case 1:return P.p1(o)}}},t.eB)},
i:function(a){var s,r=new P.U(""),q=this.d
if(q!=null)r.a=q.dv()+"\n"
for(q=this.a,q=q.giI(q),q=q.gO(q);q.v();){s=q.gE(q)
if(s!=this.d)r.a+=s.dv()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.fk.prototype={
i:function(a){return this.b.b+": "+this.d0(0)}}
O.aa.prototype={
bt:function(a){this.a=H.c([],a.K("w<0*>"))
this.c=this.b=null},
cY:function(a,b,c){this.b=b
this.c=a},
b6:function(a,b){return this.cY(a,null,b)},
dl:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
d4:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gm:function(a){return this.a.length},
gO:function(a){var s=this.a
return new J.a9(s,s.length)},
J:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.dI(q).K("w<aa.T*>")
if(q.dl(H.c([b],p))){s=q.a
r=s.length
s.push(b)
q.d4(r,H.c([b],p))}},
a9:function(a,b){var s,r
if(this.dl(b)){s=this.a
r=s.length
C.b.a9(s,b)
this.d4(r,b)}},
$ih:1}
O.cW.prototype={
gm:function(a){return this.a.length},
gp:function(){var s=this.b
return s==null?this.b=D.J():s},
aS:function(){var s=this.b
if(s!=null)s.D(null)},
ga4:function(a){var s=this.a
if(s.length>0)return C.b.gaB(s)
else return V.bZ()},
bM:function(a){var s=this.a
if(a==null)s.push(V.bZ())
else s.push(a)
this.aS()},
aM:function(){var s=this.a
if(s.length>0){s.pop()
this.aS()}}}
E.hW.prototype={}
E.bC.prototype={
sab:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gp().C(0,q.gel())
s=q.c
if(s!=null)s.gp().n(0,q.gel())
r=new D.E("shape",p,q.c)
r.b=!0
q.bJ(r)}},
au:function(a,b){var s
for(s=this.y.a,s=new J.a9(s,s.length);s.v();)s.d.au(0,b)},
ai:function(a){var s,r=this,q=a.dx
q.a.push(q.ga4(q))
q.aS()
a.cM(r.f)
q=a.dy
s=(q&&C.b).gaB(q)
if(s!=null&&r.d!=null)s.ep(a,r)
for(q=r.y.a,q=new J.a9(q,q.length);q.v();)q.d.ai(a)
a.cL()
a.dx.aM()},
bJ:function(a){var s=this.z
if(s!=null)s.D(a)},
V:function(){return this.bJ(null)},
em:function(a){this.e=null
this.bJ(a)},
ik:function(){return this.em(null)},
ek:function(a){this.bJ(a)},
ih:function(){return this.ek(null)},
ig:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gej(),q=t.f,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bT()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}this.V()},
ij:function(a,b){var s,r
for(s=b.gO(b),r=this.gej();s.v();)s.gE(s).gp().C(0,r)
this.V()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bS.prototype={
i:function(a){return this.b}}
E.c4.prototype={
i:function(a){return this.b}}
E.fQ.prototype={}
E.j2.prototype={
eL:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.am(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cW()
r=t.h8
s.a=H.c([],r)
s.gp().n(0,new E.j3(q))
q.cy=s
s=new O.cW()
s.a=H.c([],r)
s.gp().n(0,new E.j4(q))
q.db=s
s=new O.cW()
s.a=H.c([],r)
s.gp().n(0,new E.j5(q))
q.dx=s
s=H.c([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.C(t.h9)},
giu:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga4(q)
s=r.db
s=r.z=q.t(0,s.ga4(s))
q=s}return q},
cM:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gaB(s):a)},
cL:function(){var s=this.dy
if(s.length>1)s.pop()},
dE:function(a){var s=a.b
if(s.length===0)throw H.b(P.o("May not cache a shader with no name."))
if(this.fr.cm(0,s))throw H.b(P.o('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.l(0,s,a)}}
E.j3.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.j4.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.j5.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.ff.prototype={
d7:function(a){this.er()},
d6:function(){return this.d7(null)},
gi6:function(){var s,r=this,q=Date.now(),p=C.c.a6(P.ma(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.am(q,!1)
return s/p},
dn:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.t()
if(typeof p!=="number")return H.v(p)
s=C.d.cB(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.t()
r=C.d.cB(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.mB(C.n,q.giz())}},
er:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.F.f7(s)
r=W.ne(new E.jm(this),t.p)
r.toString
C.F.hh(s,r)}},
ix:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.dn()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.am(p,!1)
q.y=P.ma(p-q.r.a).a*0.000001
p=q.cy
C.b.sm(p.a,0)
p.aS()
p=q.db
C.b.sm(p.a,0)
p.aS()
p=q.dx
C.b.sm(p.a,0)
p.aS()
p=q.dy
p.toString
C.b.sm(p,0)
q.dy.push(null)
m.ai(n.e)}q=n.Q
if(q!=null)q.D(null)}catch(o){s=H.ai(o)
r=H.lS(o)
P.lW("Error: "+H.f(s))
P.lW("Stack: "+H.f(r))
throw H.b(s)}}}
E.jm.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ix()}}}
Z.fB.prototype={}
Z.dZ.prototype={
a1:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ai(q)
r=P.o('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.fC.prototype={}
Z.cs.prototype={
aJ:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
a1:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].a1(a)},
aP:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
ai:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=t.i,n=H.c([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)n.push(s[q].i(0))
p=H.c([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a8(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(n,", ")+"\nAttrs:   "+C.b.j(p,", ")}}
Z.bX.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eN(this.c))+"'")+"]"}}
Z.bm.prototype={
gd_:function(a){var s=this.a,r=(s&$.aO().a)!==0?3:0
if((s&$.bu().a)!==0)r+=3
if((s&$.bt().a)!==0)r+=3
if((s&$.bO().a)!==0)r+=2
if((s&$.bv().a)!==0)r+=3
if((s&$.dO().a)!==0)r+=3
if((s&$.dP().a)!==0)r+=4
if((s&$.cq().a)!==0)++r
return(s&$.bs().a)!==0?r+4:r},
hE:function(a){var s,r=$.aO(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bu()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bt()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bO()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bv()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dO()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cq()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bs()
if((q&r.a)!==0)if(s===a)return r
return $.nN()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bm))return!1
return this.a===b.a},
i:function(a){var s=H.c([],t.i),r=this.a
if((r&$.aO().a)!==0)s.push("Pos")
if((r&$.bu().a)!==0)s.push("Norm")
if((r&$.bt().a)!==0)s.push("Binm")
if((r&$.bO().a)!==0)s.push("Txt2D")
if((r&$.bv().a)!==0)s.push("TxtCube")
if((r&$.dO().a)!==0)s.push("Clr3")
if((r&$.dP().a)!==0)s.push("Clr4")
if((r&$.cq().a)!==0)s.push("Weight")
if((r&$.bs().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hX.prototype={}
D.bT.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=H.c([],t.f):s).push(b)},
C:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.G(q,b)
if(q===!0){q=r.a
s=(q&&C.b).C(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.G(q,b)
if(q===!0){q=r.b
s=(q&&C.b).C(q,b)||s}return s},
D:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.V()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.I(P.lq(s,!0,t.dm),new D.ie(o))
s=p.b
if(s!=null){p.b=H.c([],t.f)
C.b.I(s,new D.ig(o))}return!0},
hW:function(){return this.D(null)},
aC:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.D(s)}}}}
D.ie.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.ig.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.V.prototype={}
D.aS.prototype={}
D.aT.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.e_.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.e_))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ej.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ej))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.iu.prototype={
iq:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
il:function(a){this.c=a.b
this.d.C(0,a.a)
return!1}}
X.cR.prototype={}
X.iA.prototype={
bc:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.t()
s=b.b
r=o.ch
if(typeof s!=="number")return s.t()
q=m.w(0,new V.T(l*k,s*r))
r=o.a.gb0()
p=new X.c0(a,V.b_(),o.x,r,q)
p.b=!0
o.z=new P.am(n,!1)
o.x=q
return p},
cK:function(a,b){this.r=a.a
return!1},
bm:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.eA()
if(typeof s!=="number")return s.aj()
this.r=(s&~r)>>>0
return!1},
bl:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.bc(a,b))
return!0},
ir:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gb0()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.t()
o=a.b
n=m.cy
if(typeof o!=="number")return o.t()
r=new X.c1(new V.ag(q*p,o*n),s,r)
r.b=!0
l.D(r)
return!0},
fM:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cR(c,p.a.gb0(),b)
q.b=!0
r.D(q)
p.y=new P.am(s,!1)
p.x=V.b_()}}
X.as.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.as))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.c0.prototype={}
X.iU.prototype={
c0:function(a,b,c){var s=this,r=new P.am(Date.now(),!1),q=s.a.gb0(),p=new X.c0(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cK:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.D(this.c0(a,b,!0))
return!0},
bm:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.eA()
if(typeof r!=="number")return r.aj()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.D(s.c0(a,b,!0))
return!0},
bl:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.c0(a,b,!1))
return!0},
is:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gb0()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.t()
p=a.b
o=n.ch
if(typeof p!=="number")return p.t()
s=new X.c1(new V.ag(r*q,p*o),s,b)
s.b=!0
m.D(s)
return!0},
gdS:function(){var s=this.b
return s==null?this.b=D.J():s},
gcU:function(){var s=this.c
return s==null?this.c=D.J():s},
gei:function(){var s=this.d
return s==null?this.d=D.J():s}}
X.c1.prototype={}
X.eL.prototype={}
X.d6.prototype={}
X.jq.prototype={
bc:function(a,b){var s=this,r=new P.am(Date.now(),!1),q=a.length>0?a[0]:V.b_(),p=s.a.gb0(),o=new X.d6(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
ip:function(a){var s=this.b
if(s==null)return!1
s.D(this.bc(a,!0))
return!0},
im:function(a){var s=this.c
if(s==null)return!1
s.D(this.bc(a,!0))
return!0},
io:function(a){var s=this.d
if(s==null)return!1
s.D(this.bc(a,!1))
return!0}}
X.fy.prototype={
gb0:function(){var s=this.a,r=C.i.gdP(s).c
r.toString
s=C.i.gdP(s).d
s.toString
return V.mv(0,0,r,s)},
dd:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.ej(s,new X.as(r,a.altKey,a.shiftKey))},
aY:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.as(r,a.altKey,a.shiftKey)},
cf:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.as(r,a.altKey,a.shiftKey)},
aG:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a2()
if(typeof o!=="number")return H.v(o)
s=r.top
if(typeof p!=="number")return p.a2()
if(typeof s!=="number")return H.v(s)
return new V.T(q-o,p-s)},
bd:function(a){return new V.ag(a.movementX,a.movementY)},
ca:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.c([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
o=C.d.as(p.pageX)
C.d.as(p.pageY)
n=k.left
if(typeof n!=="number")return H.v(n)
C.d.as(p.pageX)
m=C.d.as(p.pageY)
l=k.top
if(typeof l!=="number")return H.v(l)
j.push(new V.T(o-n,m-l))}return j},
aE:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.e_(s,new X.as(r,a.altKey,a.shiftKey))},
c1:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a2()
if(typeof n!=="number")return H.v(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a2()
if(typeof p!=="number")return H.v(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.v(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.v(p)
p=r<p}else p=!1
return p},
fG:function(a){this.f=!0},
fp:function(a){this.f=!1},
fA:function(a){if(this.f&&this.c1(a))a.preventDefault()},
fK:function(a){var s
if(!this.f)return
s=this.dd(a)
this.b.iq(s)},
fI:function(a){var s
if(!this.f)return
s=this.dd(a)
this.b.il(s)},
fO:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aY(a)
if(p.x){s=p.aE(a)
r=p.bd(a)
if(p.d.cK(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aE(a)
q=p.aG(a)
if(p.c.cK(s,q))a.preventDefault()},
fS:function(a){var s,r,q,p=this
p.aY(a)
s=p.aE(a)
if(p.x){r=p.bd(a)
if(p.d.bm(s,r))a.preventDefault()
return}if(p.r)return
q=p.aG(a)
if(p.c.bm(s,q))a.preventDefault()},
fE:function(a){var s,r,q,p=this
if(!p.c1(a)){p.aY(a)
s=p.aE(a)
if(p.x){r=p.bd(a)
if(p.d.bm(s,r))a.preventDefault()
return}if(p.r)return
q=p.aG(a)
if(p.c.bm(s,q))a.preventDefault()}},
fQ:function(a){var s,r,q,p=this
p.aY(a)
s=p.aE(a)
if(p.x){r=p.bd(a)
if(p.d.bl(s,r))a.preventDefault()
return}if(p.r)return
q=p.aG(a)
if(p.c.bl(s,q))a.preventDefault()},
fC:function(a){var s,r,q,p=this
if(!p.c1(a)){p.aY(a)
s=p.aE(a)
if(p.x){r=p.bd(a)
if(p.d.bl(s,r))a.preventDefault()
return}if(p.r)return
q=p.aG(a)
if(p.c.bl(s,q))a.preventDefault()}},
fU:function(a){var s,r,q=this
q.aY(a)
s=new V.ag((a&&C.E).ghQ(a),C.E.ghR(a)).t(0,q.Q)
if(q.x){if(q.d.ir(s))a.preventDefault()
return}if(q.r)return
r=q.aG(a)
if(q.c.is(s,r))a.preventDefault()},
fW:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aE(q.y)
r=q.aG(q.y)
q.d.fM(s,r,p)}},
hb:function(a){var s,r=this
r.a.focus()
r.f=!0
r.cf(a)
s=r.ca(a)
if(r.e.ip(s))a.preventDefault()},
h7:function(a){var s
this.cf(a)
s=this.ca(a)
if(this.e.im(s))a.preventDefault()},
h9:function(a){var s
this.cf(a)
s=this.ca(a)
if(this.e.io(s))a.preventDefault()}}
D.dX.prototype={$iW:1}
D.bA.prototype={
aD:function(a){var s=this.r
if(s!=null)s.D(a)},
eQ:function(){return this.aD(null)},
$iW:1}
D.W.prototype={}
D.cM.prototype={
aD:function(a){var s=this.y
if(s!=null)s.D(a)},
dk:function(a){var s=this.z
if(s!=null)s.D(a)},
fL:function(){return this.dk(null)},
fY:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.p)(a),++r){q=a[r]
if(q==null||this.f1(q))return!1}return!0},
fj:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdj(),q=t.f,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p]
if(o instanceof D.bA)this.f.push(o)
n=o.r
if(n==null){n=new D.bT()
n.d=0
o.r=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}s=new D.aS()
s.b=!0
this.aD(s)},
h1:function(a,b){var s,r,q
for(s=b.gO(b),r=this.gdj();s.v();){q=s.gE(s)
C.b.C(this.e,q)
q.gp().C(0,r)}s=new D.aT()
s.b=!0
this.aD(s)},
f1:function(a){var s=C.b.G(this.f,a)
return s}}
D.eK.prototype={$iW:1}
D.f_.prototype={$iW:1}
V.a1.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.al.prototype={
cS:function(a){var s=this
return H.c([s.a,s.b,s.c,s.d],t.m)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.al))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.ic.prototype={}
V.er.prototype={
ae:function(a,b){var s=this,r=H.c([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.er))return!1
s=b.a
$.G().toString
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
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.cp(H.c([o.a,o.d,o.r],n),3,0),l=V.cp(H.c([o.b,o.e,o.x],n),3,0),k=V.cp(H.c([o.c,o.f,o.y],n),3,0)
n=m.length
if(0>=n)return H.d(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.d(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.d(k,0)
s=s+k[0]+",\n"
if(1>=n)return H.d(m,1)
p=" "+m[1]+", "
if(1>=r)return H.d(l,1)
p=p+l[1]+", "
if(1>=q)return H.d(k,1)
p=s+(p+k[1]+",\n")
if(2>=n)return H.d(m,2)
n=" "+m[2]+", "
if(2>=r)return H.d(l,2)
n=n+l[2]+", "
if(2>=q)return H.d(k,2)
return p+(n+k[2]+"]")}}
V.bh.prototype={
ae:function(a,b){var s=this,r=H.c([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
cE:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.G().toString
if(Math.abs(b3-0)<1e-9)return V.bZ()
s=1/b3
r=-l
q=-a2
return V.aY((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
t:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aY(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bP:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.y(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bq:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.K(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bh))return!1
s=b.a
$.G().toString
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
i:function(a){return this.N()},
H:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.cp(H.c([n.a,n.e,n.y,n.cx],m),3,0),k=V.cp(H.c([n.b,n.f,n.z,n.cy],m),3,0),j=V.cp(H.c([n.c,n.r,n.Q,n.db],m),3,0),i=V.cp(H.c([n.d,n.x,n.ch,n.dx],m),3,0)
m=l.length
if(0>=m)return H.d(l,0)
s="["+l[0]+", "
r=k.length
if(0>=r)return H.d(k,0)
s=s+k[0]+", "
q=j.length
if(0>=q)return H.d(j,0)
s=s+j[0]+", "
p=i.length
if(0>=p)return H.d(i,0)
s=s+i[0]+",\n"
o=a+" "
if(1>=m)return H.d(l,1)
o=o+l[1]+", "
if(1>=r)return H.d(k,1)
o=o+k[1]+", "
if(1>=q)return H.d(j,1)
o=o+j[1]+", "
if(1>=p)return H.d(i,1)
o=s+(o+i[1]+",\n")
s=a+" "
if(2>=m)return H.d(l,2)
s=s+l[2]+", "
if(2>=r)return H.d(k,2)
s=s+k[2]+", "
if(2>=q)return H.d(j,2)
s=s+j[2]+", "
if(2>=p)return H.d(i,2)
s=o+(s+i[2]+",\n")
o=a+" "
if(3>=m)return H.d(l,3)
o=o+l[3]+", "
if(3>=r)return H.d(k,3)
o=o+k[3]+", "
if(3>=q)return H.d(j,3)
o=o+j[3]+", "
if(3>=p)return H.d(i,3)
return s+(o+i[3]+"]")},
N:function(){return this.H("")}}
V.T.prototype={
a7:function(a){return new V.ag(a.a-this.a,a.b-this.b)},
w:function(a,b){return new V.T(this.a+b.a,this.b+b.b)},
T:function(a,b){$.G().toString
if(Math.abs(b-0)<1e-9)return V.b_()
return new V.T(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.K.prototype={
w:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
a2:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
T:function(a,b){$.G().toString
if(Math.abs(b-0)<1e-9)return V.ls()
return new V.K(this.a/b,this.b/b,this.c/b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.K))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.au.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.au))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.eP.prototype={
gah:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eP))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.ag.prototype={
bj:function(a){return Math.sqrt(this.aa(this))},
aa:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.t()
if(typeof p!=="number")return H.v(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.v(r)
return q*p+s*r},
t:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.t()
if(typeof b!=="number")return H.v(b)
s=this.b
if(typeof s!=="number")return s.t()
return new V.ag(r*b,s*b)},
T:function(a,b){var s,r
$.G().toString
if(Math.abs(b-0)<1e-9){s=$.mJ
return s==null?$.mJ=new V.ag(0,0):s}s=this.a
if(typeof s!=="number")return s.T()
r=this.b
if(typeof r!=="number")return r.T()
return new V.ag(s/b,r/b)},
q:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
s=b.a
r=this.a
$.G().toString
if(typeof s!=="number")return s.a2()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a2()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.y.prototype={
bj:function(a){return Math.sqrt(this.aa(this))},
aa:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cF:function(a,b){return new V.y(V.hM(this.a,a.a,b),V.hM(this.b,a.b,b),V.hM(this.c,a.c,b))},
B:function(){var s=this,r=Math.sqrt(s.aa(s))
if(r===1)return s
return s.T(0,r)},
aH:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.y(s*r-q*p,q*o-n*r,n*p-s*o)},
w:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
U:function(a){return new V.y(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.y(this.a*b,this.b*b,this.c*b)},
T:function(a,b){$.G().toString
if(Math.abs(b-0)<1e-9)return V.df()
return new V.y(this.a/b,this.b/b,this.c/b)},
ee:function(){$.G().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.y))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.bl.prototype={
bj:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
T:function(a,b){var s,r=this
$.G().toString
if(Math.abs(b-0)<1e-9){s=$.mO
return s==null?$.mO=new V.bl(0,0,0,0):s}return new V.bl(r.a/b,r.b/b,r.c/b,r.d/b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bl))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
U.hZ.prototype={
bU:function(a){var s=V.qU(a,this.c,this.b)
return s},
gp:function(){var s=this.y
return s==null?this.y=D.J():s},
R:function(a){var s=this.y
if(s!=null)s.D(a)},
scV:function(a,b){},
scG:function(a){var s,r=this,q=r.b
$.G().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bU(s)}q=new D.E("maximumLocation",q,r.b)
q.b=!0
r.R(q)}},
scI:function(a){var s,r=this,q=r.c
$.G().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bU(s)}q=new D.E("minimumLocation",q,r.c)
q.b=!0
r.R(q)}},
sZ:function(a,b){var s,r=this
b=r.bU(b)
s=r.d
$.G().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.E("location",s,b)
s.b=!0
r.R(s)}},
scH:function(a){var s,r,q=this,p=q.e
$.G().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.E("maximumVelocity",p,a)
p.b=!0
q.R(p)}},
sW:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.G().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.E("velocity",r,a)
r.b=!0
s.R(r)}},
scp:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.G().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.E("dampening",s,a)
s.b=!0
this.R(s)}},
au:function(a,b){var s,r,q,p=this,o=p.f
$.G().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sZ(0,p.d+s*b)
o=p.x
$.G().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sW(s)}}}
U.cu.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.J():s},
b5:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cu))return!1
return J.F(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.bV.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.J():s},
R:function(a){var s=this.e
if(s!=null)s.D(a)},
ad:function(){return this.R(null)},
fh:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaT(),q=t.f,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p]
if(o!=null){n=o.gp()
m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.aS()
s.b=!0
this.R(s)},
h_:function(a,b){var s,r
for(s=b.gO(b),r=this.gaT();s.v();)s.gE(s).gp().C(0,r)
s=new D.aT()
s.b=!0
this.R(s)},
b5:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.af()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a9(p,p.length),s=null;p.v();){o=p.d
if(o!=null){r=o.b5(0,b,c)
if(r!=null)s=s==null?r:r.t(0,s)}}q.f=s==null?V.bZ():s
p=q.e
if(p!=null)p.aC(0)}return q.f},
q:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bV))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.d(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.d(p,r)
if(!J.F(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iY:1}
U.Y.prototype={}
U.dc.prototype={
gp:function(){var s=this.cy
return s==null?this.cy=D.J():s},
R:function(a){var s=this.cy
if(s!=null)s.D(a)},
ad:function(){return this.R(null)},
bf:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gdS().n(0,s.gc2())
s.a.c.gei().n(0,s.gc4())
s.a.c.gcU().n(0,s.gc6())
return!0},
c3:function(a){var s=this
if(!J.F(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
c5:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.y)return
if(l.x){s=a.y.a7(a.d)
s=s.aa(s)
r=l.r
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a7(a.d).t(0,2).T(0,s.gah())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.t()
q=l.e
if(typeof q!=="number")return H.v(q)
r.sW(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a7(q).t(0,2).T(0,s.gah())
r=l.b
o=p.a
if(typeof o!=="number")return o.U()
n=l.e
if(typeof n!=="number")return H.v(n)
m=l.z
if(typeof m!=="number")return H.v(m)
r.sZ(0,-o*n+m)
l.b.sW(0)
l.Q=a.z.a7(q).t(0,2).T(0,s.gah())}l.ad()},
c7:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.aa(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.t()
q=p.e
if(typeof q!=="number")return H.v(q)
s.sW(r*10*q)
p.ad()}},
b5:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.af()
if(o<n){p.ch=n
s=b.y
p.b.au(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.aY(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iY:1}
U.dd.prototype={
gp:function(){var s=this.fx
return s==null?this.fx=D.J():s},
R:function(a){var s=this.fx
if(s!=null)s.D(a)},
ad:function(){return this.R(null)},
bf:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gdS().n(0,q.gc2())
q.a.c.gei().n(0,q.gc4())
q.a.c.gcU().n(0,q.gc6())
s=q.a.d
r=s.f
s=r==null?s.f=D.J():r
s.n(0,q.gf9())
s=q.a.d
r=s.d
s=r==null?s.d=D.J():r
s.n(0,q.gfb())
s=q.a.e
r=s.b
s=r==null?s.b=D.J():r
s.n(0,q.ghv())
s=q.a.e
r=s.d
s=r==null?s.d=D.J():r
s.n(0,q.ght())
s=q.a.e
r=s.c
s=r==null?s.c=D.J():r
s.n(0,q.ghr())
return!0},
aw:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.U()
s=-s}if(this.r){if(typeof r!=="number")return r.U()
r=-r}return new V.ag(s,r)},
c3:function(a){var s=this
t.c.a(a)
if(!J.F(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
c5:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a7(a.d)
s=s.aa(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aw(a.y.a7(a.d).t(0,2).T(0,s.gah()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.U()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sW(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.U()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sW(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aw(r.a7(q).t(0,2).T(0,s.gah()))
r=l.c
o=p.a
if(typeof o!=="number")return o.U()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sZ(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.U()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sZ(0,-n*o+r)
l.b.sW(0)
l.c.sW(0)
l.dx=l.aw(a.z.a7(q).t(0,2).T(0,s.gah()))}l.ad()},
c7:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.aa(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.U()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sW(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.U()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sW(-r*10*s)
p.ad()}},
fa:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
fc:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.F(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.aw(r.a7(q).t(0,2).T(0,s.gah()))
r=l.c
o=p.a
if(typeof o!=="number")return o.U()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sZ(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.U()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sZ(0,-n*o+r)
l.b.sW(0)
l.c.sW(0)
l.dx=l.aw(a.z.a7(q).t(0,2).T(0,s.gah()))
l.ad()},
hw:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hu:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a7(a.d)
s=s.aa(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aw(a.y.a7(a.d).t(0,2).T(0,s.gah()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.U()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sW(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.U()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sW(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aw(r.a7(q).t(0,2).T(0,s.gah()))
r=l.c
o=p.a
if(typeof o!=="number")return o.U()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sZ(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.U()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sZ(0,-n*o+r)
l.b.sW(0)
l.c.sW(0)
l.dx=l.aw(a.z.a7(q).t(0,2).T(0,s.gah()))}l.ad()},
hs:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.aa(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.U()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sW(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.U()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sW(-r*10*s)
p.ad()}},
b5:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.af()
if(o<n){p.dy=n
s=b.y
p.c.au(0,s)
p.b.au(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.aY(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.t(0,V.aY(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iY:1}
U.de.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.J():s},
R:function(a){var s=this.r
if(s!=null)s.D(a)},
bf:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.J():r
r=p.gfe()
s.n(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.J():q).n(0,r)
return!0},
ff:function(a){var s,r,q,p,o=this
if(!J.F(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.t()
p=s+r*q
if(s!==p){o.d=p
s=new D.E("zoom",s,p)
s.b=!0
o.R(s)}},
b5:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aY(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iY:1}
M.ct.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.J():s},
a0:function(a){var s=this.r
if(s!=null)s.D(a)},
b9:function(){return this.a0(null)},
h3:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ga_(),q=t.f,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p]
if(o!=null){n=o.gp()
m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.aS()
s.b=!0
this.a0(s)},
h5:function(a,b){var s,r
for(s=b.gO(b),r=this.ga_();s.v();)s.gE(s).gp().C(0,r)
s=new D.aT()
s.b=!0
this.a0(s)},
ai:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a9(s,s.length);s.v();){r=s.d
if(r!=null)r.ai(a)}q.f=!1},
$ia7:1}
M.cx.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.J():s},
a0:function(a){var s=this.r
if(s!=null)s.D(a)},
b9:function(){return this.a0(null)},
sbg:function(a){var s,r,q=this
if(a==null)a=new X.iq()
s=q.b
if(s!==a){if(s!=null)s.gp().C(0,q.ga_())
r=q.b
q.b=a
a.gp().n(0,q.ga_())
s=new D.E("camera",r,q.b)
s.b=!0
q.a0(s)}},
sbo:function(a,b){var s,r,q=this
if(b==null)b=X.li(null)
s=q.c
if(s!==b){if(s!=null)s.gp().C(0,q.ga_())
r=q.c
q.c=b
b.gp().n(0,q.ga_())
s=new D.E("target",r,q.c)
s.b=!0
q.a0(s)}},
sbp:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gp().C(0,r.ga_())
s=r.d
r.d=a
if(a!=null)a.gp().n(0,r.ga_())
q=new D.E("technique",s,r.d)
q.b=!0
r.a0(q)}},
ai:function(a){var s=this
a.cM(s.d)
s.c.a1(a)
s.b.a1(a)
s.e.au(0,a)
s.e.ai(a)
s.b.aP(a)
s.c.toString
a.cL()},
$ia7:1}
M.cD.prototype={
a0:function(a){var s=this.y
if(s!=null)s.D(a)},
b9:function(){return this.a0(null)},
fu:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ga_(),q=t.f,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bT()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.aS()
s.b=!0
this.a0(s)},
fw:function(a,b){var s,r
for(s=b.gO(b),r=this.ga_();s.v();)s.gE(s).gp().C(0,r)
s=new D.aT()
s.b=!0
this.a0(s)},
sbg:function(a){var s,r,q=this
if(a==null)a=X.ml(null)
s=q.b
if(s!==a){if(s!=null)s.gp().C(0,q.ga_())
r=q.b
q.b=a
a.gp().n(0,q.ga_())
s=new D.E("camera",r,q.b)
s.b=!0
q.a0(s)}},
sbo:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gp().C(0,r.ga_())
s=r.c
r.c=b
b.gp().n(0,r.ga_())
q=new D.E("target",s,r.c)
q.b=!0
r.a0(q)}},
sbp:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gp().C(0,r.ga_())
s=r.d
r.d=a
if(a!=null)a.gp().n(0,r.ga_())
q=new D.E("technique",s,r.d)
q.b=!0
r.a0(q)}},
gp:function(){var s=this.y
return s==null?this.y=D.J():s},
ai:function(a){var s,r=this
a.cM(r.d)
r.c.a1(a)
r.b.a1(a)
s=r.d
if(s!=null)s.au(0,a)
for(s=r.e.a,s=new J.a9(s,s.length);s.v();)s.d.au(0,a)
for(s=r.e.a,s=new J.a9(s,s.length);s.v();)s.d.ai(a)
r.b.toString
a.cy.aM()
a.db.aM()
r.c.toString
a.cL()},
$ia7:1}
M.a7.prototype={}
A.dU.prototype={}
A.hR.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hX:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dR:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a4.prototype={
gav:function(a){var s=this.a?1:0,r=this.c?4:0
return s|0|r},
i:function(a){var s=this.a?1:0,r=this.c?4:0
return""+(s|0|r)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a4))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.eq.prototype={
eK:function(c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3="Required uniform value, ",c4=", was not defined or used in shader.",c5="uniform mat4 objMat;\n"
c1.z=c6
s=new P.U("")
r=c6.fr
if(r){s.a=c5
q=c5}else q=""
p=c6.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c6.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c6.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.q6(c6,s)
A.q8(c6,s)
A.q7(c6,s)
A.qa(c6,s)
A.qb(c6,s)
A.q9(c6,s)
A.qc(c6,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c6.ry
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
s.a=q}if(c6.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c6.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c6.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c6.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
c1.eb(0,q.charCodeAt(0)==0?q:q,A.q5(c1.z))
c1.Q=c1.x.h(0,"posAttr")
c1.cx=c1.x.h(0,"normAttr")
c1.ch=c1.x.h(0,"binmAttr")
c1.cy=c1.x.h(0,"txt2DAttr")
c1.db=c1.x.h(0,"txtCubeAttr")
c1.dx=c1.x.h(0,"bendAttr")
if(c6.dy)c1.id=t.q.a(c1.y.L(0,"invViewMat"))
if(r)c1.dy=t.q.a(c1.y.L(0,"objMat"))
if(p)c1.fr=t.q.a(c1.y.L(0,"viewObjMat"))
r=t.q
c1.fy=r.a(c1.y.L(0,"projViewObjMat"))
if(c6.go)c1.fx=r.a(c1.y.L(0,"viewMat"))
if(c6.x1)c1.k1=t.O.a(c1.y.L(0,"txt2DMat"))
if(c6.x2)c1.k2=r.a(c1.y.L(0,"txtCubeMat"))
if(c6.y1)c1.k3=r.a(c1.y.L(0,"colorMat"))
c1.r1=H.c([],t.hg)
q=c6.bD
if(q>0){c1.k4=c1.y.L(0,"bendMatCount")
for(l=0;l<q;++l){p=c1.r1
o=c1.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.q(P.o(c3+n+c4))
p.push(r.a(k))}}r=c6.a
if(r.a)c1.r2=t.r.a(c1.y.L(0,"emissionClr"))
if(r.c)c1.ry=t.Q.a(c1.y.L(0,"emissionTxt"))
r=c6.b
if(r.a)c1.x1=t.r.a(c1.y.L(0,"ambientClr"))
if(r.c)c1.y1=t.Q.a(c1.y.L(0,"ambientTxt"))
r=c6.c
if(r.a)c1.y2=t.r.a(c1.y.L(0,"diffuseClr"))
if(r.c)c1.aI=t.Q.a(c1.y.L(0,"diffuseTxt"))
r=c6.d
if(r.a)c1.bE=t.r.a(c1.y.L(0,"invDiffuseClr"))
if(r.c)c1.dU=t.Q.a(c1.y.L(0,"invDiffuseTxt"))
r=c6.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){c1.dX=t.n.a(c1.y.L(0,"shininess"))
if(q)c1.dV=t.r.a(c1.y.L(0,"specularClr"))
if(r.c)c1.dW=t.Q.a(c1.y.L(0,"specularTxt"))}if(c6.f.c)c1.dY=t.Q.a(c1.y.L(0,"bumpTxt"))
if(c6.db){r=t.Q
c1.dZ=r.a(c1.y.L(0,"envSampler"))
q=c6.r
if(q.a)c1.e_=t.r.a(c1.y.L(0,"reflectClr"))
if(q.c)c1.e0=r.a(c1.y.L(0,"reflectTxt"))
q=c6.x
p=q.a
if(!p)o=q.c
else o=!0
if(o){c1.e1=t.n.a(c1.y.L(0,"refraction"))
if(p)c1.e2=t.r.a(c1.y.L(0,"refractClr"))
if(q.c)c1.e3=r.a(c1.y.L(0,"refractTxt"))}}r=c6.y
if(r.a)c1.e4=t.n.a(c1.y.L(0,"alpha"))
if(r.c)c1.e5=t.Q.a(c1.y.L(0,"alphaTxt"))
if(c6.k1){r=c6.z
q=r.length
if(q!==0){c1.cq=new H.C(t.J)
c1.cr=new H.C(t.en)
for(p=t.r,o=t.n,n=t.d6,j=0;j<r.length;r.length===q||(0,H.p)(r),++j){i=r[j]
h=i.a
g="barLight"+H.f(h)
f=H.c([],n)
for(m=i.b,l=0;l<m;++l){e=c1.y
d=g+"s["+l+"].startPnt"
k=e.h(0,d)
if(k==null)H.q(P.o(c3+d+c4))
p.a(k)
e=c1.y
d=g+"s["+l+"].endPnt"
c=e.h(0,d)
if(c==null)H.q(P.o(c3+d+c4))
p.a(c)
e=c1.y
d=g+"s["+l+"].color"
b=e.h(0,d)
if(b==null)H.q(P.o(c3+d+c4))
p.a(b)
if(typeof h!=="number")return h.aj()
if((h&4)!==0){e=c1.y
d=g+"s["+l+"].att0"
a=e.h(0,d)
if(a==null)H.q(P.o(c3+d+c4))
o.a(a)
e=c1.y
d=g+"s["+l+"].att1"
a0=e.h(0,d)
if(a0==null)H.q(P.o(c3+d+c4))
o.a(a0)
e=c1.y
d=g+"s["+l+"].att2"
a1=e.h(0,d)
if(a1==null)H.q(P.o(c3+d+c4))
o.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.d7(k,c,b,a4,a3,a2))}c1.cr.l(0,h,f)
m=c1.cq
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.q(P.o(c3+d+c4))
m.l(0,h,k)}}r=c6.Q
q=r.length
if(q!==0){c1.cs=new H.C(t.J)
c1.ct=new H.C(t.bj)
for(p=t.r,o=t.w,n=t.dv,j=0;j<r.length;r.length===q||(0,H.p)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.f(h)
f=H.c([],n)
for(m=i.b,l=0;l<m;++l){if(typeof h!=="number")return h.aj()
e=(h&1)!==0
if(e){d=c1.y
a5=g+"s["+l+"].objUp"
k=d.h(0,a5)
if(k==null)H.q(P.o(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].objRight"
c=d.h(0,a5)
if(c==null)H.q(P.o(c3+a5+c4))
p.a(c)
d=c1.y
a5=g+"s["+l+"].objDir"
b=d.h(0,a5)
if(b==null)H.q(P.o(c3+a5+c4))
p.a(b)
a6=b
a7=c
a8=k}else{a6=c2
a7=a6
a8=a7}d=c1.y
a5=g+"s["+l+"].viewDir"
k=d.h(0,a5)
if(k==null)H.q(P.o(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].color"
c=d.h(0,a5)
if(c==null)H.q(P.o(c3+a5+c4))
p.a(c)
if(e){e=c1.y
d=g+"sTexture2D"+l
b=e.h(0,d)
if(b==null)H.q(P.o(c3+d+c4))
o.a(b)
a9=b}else a9=c2
f.push(new A.d8(a8,a7,a6,k,c,a9))}c1.ct.l(0,h,f)
m=c1.cs
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.q(P.o(c3+d+c4))
m.l(0,h,k)}}r=c6.ch
q=r.length
if(q!==0){c1.cu=new H.C(t.J)
c1.cv=new H.C(t.gr)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,d=t.by,j=0;j<r.length;r.length===q||(0,H.p)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.f(h)
f=H.c([],d)
for(a5=i.b,l=0;l<a5;++l){b0=c1.y
b1=g+"s["+l+"].point"
k=b0.h(0,b1)
if(k==null)H.q(P.o(c3+b1+c4))
p.a(k)
b0=c1.y
b1=g+"s["+l+"].viewPnt"
c=b0.h(0,b1)
if(c==null)H.q(P.o(c3+b1+c4))
p.a(c)
b0=c1.y
b1=g+"s["+l+"].color"
b=b0.h(0,b1)
if(b==null)H.q(P.o(c3+b1+c4))
p.a(b)
if(typeof h!=="number")return h.aj()
if((h&3)!==0){b0=c1.y
b1=g+"s["+l+"].invViewRotMat"
a=b0.h(0,b1)
if(a==null)H.q(P.o(c3+b1+c4))
o.a(a)
b2=a}else b2=c2
if((h&1)!==0){b0=c1.y
b1=g+"sTextureCube"+l
a=b0.h(0,b1)
if(a==null)H.q(P.o(c3+b1+c4))
n.a(a)
a9=a}else a9=c2
if((h&2)!==0){b0=c1.y
b1=g+"sShadowCube"+l
a=b0.h(0,b1)
if(a==null)H.q(P.o(c3+b1+c4))
n.a(a)
b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.q(P.o(c3+b1+c4))
m.a(a0)
b3=a
b4=a0}else{b3=c2
b4=b3}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a=b0.h(0,b1)
if(a==null)H.q(P.o(c3+b1+c4))
e.a(a)
b0=c1.y
b1=g+"s["+l+"].att1"
a0=b0.h(0,b1)
if(a0==null)H.q(P.o(c3+b1+c4))
e.a(a0)
b0=c1.y
b1=g+"s["+l+"].att2"
a1=b0.h(0,b1)
if(a1==null)H.q(P.o(c3+b1+c4))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.da(k,c,b2,b,a9,b3,b4,a4,a3,a2))}c1.cv.l(0,h,f)
a5=c1.cu
b0=c1.y
b1=g+"Count"
k=b0.h(0,b1)
if(k==null)H.q(P.o(c3+b1+c4))
a5.l(0,h,k)}}r=c6.cx
q=r.length
if(q!==0){c1.cw=new H.C(t.J)
c1.cz=new H.C(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.w,e=t.fF,j=0;j<r.length;r.length===q||(0,H.p)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.f(h)
f=H.c([],e)
for(d=i.b,l=0;l<d;++l){a5=c1.y
b0=g+"s["+l+"].objPnt"
k=a5.h(0,b0)
if(k==null)H.q(P.o(c3+b0+c4))
p.a(k)
a5=c1.y
b0=g+"s["+l+"].objDir"
c=a5.h(0,b0)
if(c==null)H.q(P.o(c3+b0+c4))
p.a(c)
a5=c1.y
b0=g+"s["+l+"].viewPnt"
b=a5.h(0,b0)
if(b==null)H.q(P.o(c3+b0+c4))
p.a(b)
a5=c1.y
b0=g+"s["+l+"].color"
a=a5.h(0,b0)
if(a==null)H.q(P.o(c3+b0+c4))
p.a(a)
if(typeof h!=="number")return h.aj()
if((h&3)!==0){a5=c1.y
b0=g+"s["+l+"].objUp"
a0=a5.h(0,b0)
if(a0==null)H.q(P.o(c3+b0+c4))
p.a(a0)
a5=c1.y
b0=g+"s["+l+"].objRight"
a1=a5.h(0,b0)
if(a1==null)H.q(P.o(c3+b0+c4))
p.a(a1)
a5=c1.y
b0=g+"s["+l+"].tuScalar"
b5=a5.h(0,b0)
if(b5==null)H.q(P.o(c3+b0+c4))
o.a(b5)
a5=c1.y
b0=g+"s["+l+"].tvScalar"
b6=a5.h(0,b0)
if(b6==null)H.q(P.o(c3+b0+c4))
o.a(b6)
b7=b6
b8=b5
a7=a1
a8=a0}else{b7=c2
b8=b7
a7=b8
a8=a7}a5=(h&2)!==0
if(a5){b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.q(P.o(c3+b1+c4))
n.a(a0)
b4=a0}else b4=c2
if((h&8)!==0){b0=c1.y
b1=g+"s["+l+"].cutoff"
a0=b0.h(0,b1)
if(a0==null)H.q(P.o(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].coneAngle"
a1=b0.h(0,b1)
if(a1==null)H.q(P.o(c3+b1+c4))
o.a(a1)
b9=a1
c0=a0}else{b9=c2
c0=b9}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a0=b0.h(0,b1)
if(a0==null)H.q(P.o(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].att1"
a1=b0.h(0,b1)
if(a1==null)H.q(P.o(c3+b1+c4))
o.a(a1)
b0=c1.y
b1=g+"s["+l+"].att2"
b5=b0.h(0,b1)
if(b5==null)H.q(P.o(c3+b1+c4))
o.a(b5)
a2=b5
a3=a1
a4=a0}else{a2=c2
a3=a2
a4=a3}if((h&1)!==0){b0=c1.y
b1=g+"sTexture2D"+l
a0=b0.h(0,b1)
if(a0==null)H.q(P.o(c3+b1+c4))
m.a(a0)
a9=a0}else a9=c2
if(a5){a5=c1.y
b0=g+"sShadow2D"+l
a0=a5.h(0,b0)
if(a0==null)H.q(P.o(c3+b0+c4))
m.a(a0)
b3=a0}else b3=c2
f.push(new A.db(k,c,b,a,a8,a7,b8,b7,b4,c0,b9,a4,a3,a2,a9,b3))}c1.cz.l(0,h,f)
d=c1.cw
a5=c1.y
b0=g+"Count"
k=a5.h(0,b0)
if(k==null)H.q(P.o(c3+b0+c4))
d.l(0,h,k)}}}},
am:function(a,b){if(b!=null&&b.d>=6)a.cZ(b)}}
A.dY.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.e6.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eM.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.f0.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.iF.prototype={
i:function(a){return this.aI}}
A.d7.prototype={}
A.d8.prototype={}
A.da.prototype={}
A.db.prototype={}
A.c8.prototype={
d3:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
eb:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.de(b,35633)
p.f=p.de(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.q(P.o("Failed to link shader: "+H.f(q)))}p.hn()
p.hp()},
a1:function(a){a.a.useProgram(this.r)
this.x.hX()},
de:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.b(P.o("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
hn:function(){var s,r,q,p=this,o=H.c([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dU(n,r.name,q))}p.x=new A.hR(o)},
hp:function(){var s,r,q,p=this,o=H.c([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hO(r.type,r.size,r.name,q))}p.y=new A.jA(o)},
aW:function(a,b,c){var s=this.a
if(a===1)return new A.fn(s,b,c)
else return A.lv(s,this.r,b,a,c)},
f4:function(a,b,c){var s=this.a
if(a===1)return new A.fr(s,b,c)
else return A.lv(s,this.r,b,a,c)},
f5:function(a,b,c){var s=this.a
if(a===1)return new A.fs(s,b,c)
else return A.lv(s,this.r,b,a,c)},
by:function(a,b){return new P.fT(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hO:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aW(b,c,d)
case 5121:return s.aW(b,c,d)
case 5122:return s.aW(b,c,d)
case 5123:return s.aW(b,c,d)
case 5124:return s.aW(b,c,d)
case 5125:return s.aW(b,c,d)
case 5126:return new A.fm(s.a,c,d)
case 35664:return new A.jw(s.a,c,d)
case 35665:return new A.fo(s.a,c,d)
case 35666:return new A.fp(s.a,c,d)
case 35667:return new A.jx(s.a,c,d)
case 35668:return new A.jy(s.a,c,d)
case 35669:return new A.jz(s.a,c,d)
case 35674:return new A.jB(s.a,c,d)
case 35675:return new A.fq(s.a,c,d)
case 35676:return new A.d9(s.a,c,d)
case 35678:return s.f4(b,c,d)
case 35680:return s.f5(b,c,d)
case 35670:throw H.b(s.by("BOOL",c))
case 35671:throw H.b(s.by("BOOL_VEC2",c))
case 35672:throw H.b(s.by("BOOL_VEC3",c))
case 35673:throw H.b(s.by("BOOL_VEC4",c))
default:throw H.b(P.o("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.eW.prototype={}
A.fl.prototype={}
A.jA.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
L:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.N()},
N:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.p)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.fn.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.jx.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.jy.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jz.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.jv.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.fm.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.jw.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.fo.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fp.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jB.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.fq.prototype={
ak:function(a){var s=new Float32Array(H.cj(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.d9.prototype={
ak:function(a){var s=new Float32Array(H.cj(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.fr.prototype={
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fs.prototype={
cZ:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.kt.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cF(q.b,b).cF(q.d.cF(q.c,b),c)
a.sZ(0,new V.K(p.a,p.b,p.c))
a.sat(p.B())
q=1-b
s=1-c
a.sdJ(new V.au(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)}}
F.kD.prototype={
$2:function(a,b){return V.hM(this.a,this.b,b)}}
F.kF.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hM(-1,1,c),n=this.a.$2(b,c)
if(typeof n!=="number")return H.v(n)
q=-q*n
s=p*n
a.sZ(0,new V.K(q,s,o))
a.sat(new V.y(q,s,o).B())
a.sdJ(new V.au(1-c,2+c,-1,-1))}}
F.kG.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.kH.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kR.prototype={
$3:function(a,b,c){var s=c*3.141592653589793,r=Math.sin(s),q=b*6.283185307179586
q=new V.y(Math.cos(q)*r,Math.cos(s),Math.sin(q)*r).B()
a.sZ(0,new V.K(q.a,q.b,q.c))}}
F.l3.prototype={
$2:function(a,b){return 0}}
F.l4.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.v(r)
s=a.f
r=new V.y(s.a,s.b,s.c).B().t(0,this.b+r)
a.sZ(0,new V.K(r.a,r.b,r.c))}}
F.l6.prototype={
$1:function(a){return new V.K(Math.cos(a),Math.sin(a),0)}}
F.kQ.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.K(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)}}
F.kE.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.m_(l.$1(m),k)
k=J.m_(l.$1(m+3.141592653589793/n.c),k).a2(0,j)
s=new V.y(k.a,k.b,k.c).B()
l=$.mL
if(l==null){l=new V.y(1,0,0)
$.mL=l
r=l}else r=l
q=s.aH(!J.F(s,r)?V.mN():r).B()
r=q.aH(s).B()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.t(0,l*k)
k=q.t(0,o*k)
a.sZ(0,j.w(0,new V.K(l.a-k.a,l.b-k.b,l.c-k.c)))}}
F.cE.prototype={
bh:function(){var s=this
if(!s.gbi()){C.b.C(s.a.a.d.b,s)
s.a.a.V()}s.cb()
s.cc()
s.he()},
bw:function(a){this.a=a
a.d.b.push(this)},
bx:function(a){this.b=a
a.d.c.push(this)},
ds:function(a){this.c=a
a.d.d.push(this)},
cb:function(){var s=this.a
if(s!=null){C.b.C(s.d.b,this)
this.a=null}},
cc:function(){var s=this.b
if(s!=null){C.b.C(s.d.c,this)
this.b=null}},
he:function(){var s=this.c
if(s!=null){C.b.C(s.d.d,this)
this.c=null}},
gbi:function(){return this.a==null||this.b==null||this.c==null},
eX:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.df()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.ee())return p
return q.B()},
eZ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a2(0,n)
q=new V.y(o.a,o.b,o.c).B()
o=r.a2(0,n)
return q.aH(new V.y(o.a,o.b,o.c).B()).B()},
cl:function(){var s,r=this
if(r.d!=null)return!0
s=r.eX()
if(s==null){s=r.eZ()
if(s==null)return!1}r.d=s
r.a.a.V()
return!0},
eW:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.df()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.ee())return p
return q.B()},
eY:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.G().toString
if(Math.abs(p-0)<1e-9){j=b.a2(0,e)
o=new V.y(j.a,j.b,j.c).B()
if(q.a-r.a<0)o=o.U(0)}else{n=(j-s.b)/p
j=b.a2(0,e).t(0,n).w(0,e).a2(0,h)
o=new V.y(j.a,j.b,j.c).B()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.U(0)}j=l.d
if(j!=null){m=j.B()
o=m.aH(o).B().aH(m).B()}return o},
cj:function(){var s,r=this
if(r.e!=null)return!0
s=r.eW()
if(s==null){s=r.eY()
if(s==null)return!1}r.e=s
r.a.a.V()
return!0},
aV:function(a,b){var s=b.a
if(s==null)throw H.b(P.o("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==s)throw H.b(P.o("May not replace a face's vertex with a vertex attached to a different shape."))},
ghI:function(a){var s=this
if(J.F(s.a,s.b))return!0
if(J.F(s.b,s.c))return!0
if(J.F(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
H:function(a){var s,r,q=this
if(q.gbi())return a+"disposed"
s=a+C.a.ar(J.a8(q.a.e),0)+", "+C.a.ar(J.a8(q.b.e),0)+", "+C.a.ar(J.a8(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
N:function(){return this.H("")}}
F.ih.prototype={}
F.jg.prototype={
b2:function(a,b,c){var s,r=b.a
r.a.a.A()
r=r.e
s=c.a
s.a.a.A()
if(r==s.e){r=b.b
r.a.a.A()
r=r.e
s=c.b
s.a.a.A()
if(r==s.e){r=b.c
r.a.a.A()
r=r.e
s=c.c
s.a.a.A()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.A()
r=r.e
s=c.b
s.a.a.A()
if(r==s.e){r=b.b
r.a.a.A()
r=r.e
s=c.c
s.a.a.A()
if(r==s.e){r=b.c
r.a.a.A()
r=r.e
s=c.a
s.a.a.A()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.A()
r=r.e
s=c.c
s.a.a.A()
if(r==s.e){r=b.b
r.a.a.A()
r=r.e
s=c.a
s.a.a.A()
if(r==s.e){r=b.c
r.a.a.A()
r=r.e
s=c.b
s.a.a.A()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.em.prototype={
bh:function(){var s=this
if(!s.gbi()){C.b.C(s.a.a.c.b,s)
s.a.a.V()}s.cb()
s.cc()},
bw:function(a){this.a=a
a.c.b.push(this)},
bx:function(a){this.b=a
a.c.c.push(this)},
cb:function(){var s=this.a
if(s!=null){C.b.C(s.c.b,this)
this.a=null}},
cc:function(){var s=this.b
if(s!=null){C.b.C(s.c.c,this)
this.b=null}},
gbi:function(){return this.a==null||this.b==null},
aV:function(a,b){var s=b.a
if(s==null)throw H.b(P.o("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==s)throw H.b(P.o("May not replace a line's vertex with a vertex attached to a different shape."))},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
H:function(a){if(this.gbi())return a+"disposed"
return a+C.a.ar(J.a8(this.a.e),0)+", "+C.a.ar(J.a8(this.b.e),0)},
N:function(){return this.H("")}}
F.iv.prototype={}
F.ju.prototype={
b2:function(a,b,c){var s,r=b.a
r.a.a.A()
r=r.e
s=c.a
s.a.a.A()
if(r==s.e){r=b.b
r.a.a.A()
r=r.e
s=c.b
s.a.a.A()
return r==s.e}else{r=b.a
r.a.a.A()
r=r.e
s=c.b
s.a.a.A()
if(r==s.e){r=b.b
r.a.a.A()
r=r.e
s=c.a
s.a.a.A()
return r==s.e}else return!1}}}
F.eJ.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
H:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.ar(J.a8(s.e),0)},
N:function(){return this.H("")}}
F.j8.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.J():s},
b3:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.A()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.p)(e),++q){p=e[q]
f.a.n(0,p.hL())}f.a.A()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.p)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.A()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
l=n[m]
f.b.a.a.n(0,l)
m=new F.eJ()
if(l.a==null)H.q(P.o("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.D(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.p)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.A()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.w()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.c.a
n.a.n(0,j)
n.a.n(0,i)
F.om(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.p)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.A()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.w()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.A()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
g=n[m]
m=f.d.a
m.a.n(0,j)
m.a.n(0,i)
m.a.n(0,g)
F.cF(j,i,g)}e=f.e
if(e!=null)e.aC(0)},
an:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.an()||!1
if(!r.a.an())s=!1
q=r.e
if(q!=null)q.aC(0)
return s},
i_:function(a,b){var s,r,q,p=this.a.c.length
for(s=0;s<p;++s){r=this.a.c
if(s>=r.length)return H.d(r,s)
q=r[s]
if(b.b2(0,a,q))return q}return null},
hg:function(a,b){var s,r,q,p,o,n
this.a.n(0,a)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.p)(b),++r){q=b[r]
for(;p=q.d,p.b.length+p.c.length+p.d.length>0;){p=p.h(0,0)
o=p.a
if(o==null||p.b==null||p.c==null)H.q(P.o("May not replace a face's vertex when the point has been disposed."))
if(J.F(o,q)){p.aV(q,a)
o=p.a
if(o!=null){C.b.C(o.d.b,p)
p.a=null}p.a=a
a.d.b.push(p)
n=1}else n=0
if(J.F(p.b,q)){p.aV(q,a)
o=p.b
if(o!=null){C.b.C(o.d.c,p)
p.b=null}p.b=a
a.d.c.push(p);++n}if(J.F(p.c,q)){p.aV(q,a)
o=p.c
if(o!=null){C.b.C(o.d.d,p)
p.c=null}p.c=a
a.d.d.push(p);++n}if(n>0){p=p.a.a.e
if(p!=null)p.D(null)}}for(;p=q.c,p.b.length+p.c.length>0;){p=p.h(0,0)
o=p.a
if(o==null||p.b==null)H.q(P.o("May not replace a line's vertex when the point has been disposed."))
if(J.F(o,q)){p.aV(q,a)
o=p.a
if(o!=null){C.b.C(o.c.b,p)
p.a=null}p.a=a
a.c.b.push(p)
n=1}else n=0
if(J.F(p.b,q)){p.aV(q,a)
o=p.b
if(o!=null){C.b.C(o.c.c,p)
p.b=null}p.b=a
a.c.c.push(p);++n}if(n>0){p=p.a.a.e
if(p!=null)p.D(null)}}for(;p=q.b.b,p.length>0;){p=p[0]
o=p.a
if(o==null)H.q(P.o("May not replace a point's vertex when the point has been disposed."))
if(J.F(o,q)){if(a.a==null)H.q(P.o("May not replace a point's vertex with a vertex which is not attached to a shape."))
o=p.a
if(o!=null){C.b.C(o.b.b,p)
p.a=null}p.a=a
a.b.b.push(p)
n=1}else n=0
if(n>0){p=p.a.a.e
if(p!=null)p.D(null)}}this.a.C(0,q)}},
eh:function(a,b){var s,r,q,p,o,n,m=this,l=m.e
if(l!=null)++l.d
l=m.a.c
s=H.c(l.slice(0),H.lJ(l).K("w<1>"))
for(l=t.j;s.length!==0;){r=C.b.gi1(s)
C.b.cO(s,0)
if(r!=null){q=H.c([],l)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(o!=null&&a.b2(0,r,o)){q.push(o)
C.b.cO(s,p)}}if(q.length>1){n=b.b3(q)
if(n!=null){m.hg(n,q)
s.push(n)}}}}m.a.A()
m.c.bN()
m.d.bN()
m.b.iw()
m.c.cP(new F.ju())
m.d.cP(new F.jg())
l=m.e
if(l!=null)l.aC(0)},
bB:function(){this.eh(new F.dg(),new F.iX())},
dN:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.aO().a)!==0?1:0
if((s&$.bu().a)!==0)++r
if((s&$.bt().a)!==0)++r
if((s&$.bO().a)!==0)++r
if((s&$.bv().a)!==0)++r
if((s&$.dO().a)!==0)++r
if((s&$.dP().a)!==0)++r
if((s&$.cq().a)!==0)++r
if((s&$.bs().a)!==0)++r
q=a6.gd_(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.c(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.c(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.hE(k)
i=j.gd_(j)
if(k>=m)return H.d(n,k)
n[k]=new Z.dZ(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.d(g,h)
f=g[h].ib(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.d(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.cj(o)),35044)
s.bindBuffer(a3,null)
a=new Z.cs(new Z.fB(a3,b),n,a6)
a.b=H.c([],t.aZ)
if(a2.b.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.A()
a0.push(m.e)}a1=Z.lx(s,34963,a0)
a.b.push(new Z.bX(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.A()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.d(m,k)
m=m[k].b
m.a.a.A()
a0.push(m.e)}a1=Z.lx(s,34963,a0)
a.b.push(new Z.bX(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.A()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.d(m,k)
m=m[k].b
m.a.a.A()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.d(m,k)
m=m[k].c
m.a.a.A()
a0.push(m.e)}a1=Z.lx(s,34963,a0)
a.b.push(new Z.bX(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.c([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.H(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.H(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.H(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.H(r))}return C.b.j(q,"\n")},
V:function(){var s=this.e
if(s!=null)s.D(null)}}
F.j9.prototype={
bz:function(a,b,c,d){var s,r=this.a
r.a.n(0,b)
r.a.n(0,c)
r.a.n(0,d)
s=new F.cE()
r=b.a
if(r==null)H.q(P.o(u.j))
if(r!=c.a||r!=d.a)H.q(P.o(u.i))
s.bw(b)
s.bx(c)
s.ds(d)
s.a.a.d.b.push(s)
s.a.a.V()
return s},
dB:function(a){var s,r,q,p,o,n=H.c([],t.b),m=a.length
if(m>0){s=a[0]
for(r=this.a,q=2;q<m;++q){p=q-1
o=a.length
if(p>=o)return H.d(a,p)
p=a[p]
if(q>=o)return H.d(a,q)
o=a[q]
r.a.n(0,s)
r.a.n(0,p)
r.a.n(0,o)
n.push(F.cF(s,p,o))}}return n},
hB:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.c([],t.b)
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
if(n){l.n(0,k)
s.a.n(0,j)
s.a.n(0,h)
f.push(F.cF(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cF(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cF(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.cF(j,g,k))}n=!n}p=!p}return f},
gm:function(a){return this.b.length},
cP:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.b2(0,n,l)){n.bh()
break}}}}},
bN:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.ghI(q)
if(r)q.bh()}},
an:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.p)(s),++p)if(!s[p].cl())q=!1
return q},
ck:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.p)(s),++p)if(!s[p].cj())q=!1
return q},
i:function(a){return this.N()},
H:function(a){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(a))
return C.b.j(p,"\n")},
N:function(){return this.H("")}}
F.ja.prototype={
gm:function(a){return this.b.length},
cP:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.b2(0,n,l)){n.bh()
break}}}}},
bN:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=J.F(q.a,q.b)
if(r)q.bh()}},
i:function(a){return this.N()},
H:function(a){var s,r,q=H.c([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q.push(r[s].H(a+(""+s+". ")))}return C.b.j(q,"\n")},
N:function(){return this.H("")}}
F.jb.prototype={
gm:function(a){return this.b.length},
iw:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.C(q.b.b,r)
q=r.a.a.e
if(q!=null)q.D(null)
q=r.a
if(q!=null){C.b.C(q.b.b,r)
r.a=null}}}},
i:function(a){return this.N()},
H:function(a){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(a))
return C.b.j(p,"\n")},
N:function(){return this.H("")}}
F.fz.prototype={
co:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.cd(s.cx,p,m,r,q,o,n,a,l)},
hL:function(){return this.co(null)},
sZ:function(a,b){var s
if(!J.F(this.f,b)){this.f=b
s=this.a
if(s!=null)s.V()}},
scJ:function(a){var s
a=a==null?null:a.B()
if(!J.F(this.r,a)){this.r=a
s=this.a
if(s!=null)s.V()}},
sdL:function(a){var s
a=a==null?null:a.B()
if(!J.F(this.x,a)){this.x=a
s=this.a
if(s!=null)s.V()}},
scR:function(a){var s
if(!J.F(this.y,a)){this.y=a
s=this.a
if(s!=null)s.V()}},
sat:function(a){var s
if(!J.F(this.z,a)){this.z=a
s=this.a
if(s!=null)s.V()}},
sao:function(a,b){var s
if(!J.F(this.Q,b)){this.Q=b
s=this.a
if(s!=null)s.V()}},
sex:function(a,b){var s
if(this.ch!==b){this.ch=b
s=this.a
if(s!=null)s.V()}},
sdJ:function(a){var s
if(!J.F(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.V()}},
ib:function(a){var s,r,q=this
if(a.q(0,$.aO())){s=q.f
r=t.m
if(s==null)return H.c([0,0,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.q(0,$.bu())){s=q.r
r=t.m
if(s==null)return H.c([0,1,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.q(0,$.bt())){s=q.x
r=t.m
if(s==null)return H.c([0,0,1],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.q(0,$.bO())){s=q.y
r=t.m
if(s==null)return H.c([0,0],r)
else return H.c([s.a,s.b],r)}else if(a.q(0,$.bv())){s=q.z
r=t.m
if(s==null)return H.c([0,0,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.q(0,$.dO())){s=q.Q
r=t.m
if(s==null)return H.c([1,1,1],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.q(0,$.dP())){s=q.Q
if(s==null)return H.c([1,1,1,1],t.m)
else return s.cS(0)}else if(a.q(0,$.cq()))return H.c([q.ch],t.m)
else if(a.q(0,$.bs())){s=q.cx
r=t.m
if(s==null)return H.c([-1,-1,-1,-1],r)
else return H.c([s.a,s.b,s.c,s.d],r)}else return H.c([],t.m)},
cl:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.df()
r.d.I(0,new F.k0(q))
r.r=q.a.B()
q=r.a
if(q!=null){q.V()
q=r.a.e
if(q!=null)q.aC(0)}return!0},
cj:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.df()
r.d.I(0,new F.k_(q))
r.x=q.a.B()
q=r.a
if(q!=null){q.V()
q=r.a.e
if(q!=null)q.aC(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
H:function(a){var s,r,q=this,p="-",o=H.c([],t.i)
o.push(C.a.ar(J.a8(q.e),0))
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
N:function(){return this.H("")}}
F.k0.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.k_.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.jR.prototype={
A:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
s[p].e=q;++q}this.b=!1}},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.o("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.V()
return!0},
dC:function(a,b,c,d,e,f,g){var s=F.cd(a,null,b,c,d,e,f,g,0)
this.n(0,s)
return s},
bA:function(a,b,c,d,e,f){return this.dC(a,b,c,null,d,e,f)},
hC:function(a,b,c,d,e,f){return this.dC(a,b,c,d,e,f,null)},
gm:function(a){return this.c.length},
C:function(a,b){var s,r
if(b==null)return!1
s=this.a
if(b.a!==s)return!1
if(b.b.b.length===0){r=b.c
if(r.b.length===0&&r.c.length===0){r=b.d
r=r.b.length===0&&r.c.length===0&&r.d.length===0}else r=!1}else r=!1
if(!r)throw H.b(P.o("May not remove a vertex without first making it empty."))
b.a=null
C.b.C(this.c,b)
s.V()
return this.b=!0},
an:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)s[q].cl()
return!0},
ck:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)s[q].cj()
return!0},
hH:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
if(p.z==null){o=p.r.B()
if(!J.F(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.D(null)}}}}return!0},
i:function(a){return this.N()},
H:function(a){var s,r,q,p
this.A()
s=H.c([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.p)(r),++p)s.push(r[p].H(a))
return C.b.j(s,"\n")},
N:function(){return this.H("")}}
F.jS.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
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
C.b.I(s.b,b)
C.b.I(s.c,new F.jT(s,b))
C.b.I(s.d,new F.jU(s,b))},
i:function(a){return this.N()},
N:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
F.jT.prototype={
$1:function(a){if(!J.F(a.a,this.a))this.b.$1(a)}}
F.jU.prototype={
$1:function(a){var s=this.a
if(!J.F(a.a,s)&&!J.F(a.b,s))this.b.$1(a)}}
F.jW.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.N()},
N:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
F.jX.prototype={}
F.dg.prototype={
b2:function(a,b,c){return J.F(b.f,c.f)}}
F.jY.prototype={}
F.jV.prototype={
b3:function(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null
for(s=a7.length,r=a6,q=r,p=q,o=p,n=o,m=n,l=0,k=0,j=0,i=0,h=0,g=0,f=0;f<s;++f){e=a7[f]
d=e.f
if(d!=null){m=m==null?d:new V.K(m.a+d.a,m.b+d.b,m.c+d.c);++l}c=e.r
if(c!=null)n=n==null?c:new V.y(n.a+c.a,n.b+c.b,n.c+c.c)
b=e.x
if(b!=null)o=o==null?b:new V.y(o.a+b.a,o.b+b.b,o.c+b.c)
a=e.y
if(a!=null){q=q==null?a:new V.T(q.a+a.a,q.b+a.b);++j}a0=e.z
if(a0!=null){r=r==null?a0:new V.y(r.a+a0.a,r.b+a0.b,r.c+a0.c);++i}a1=e.Q
if(a1!=null){a2=a1.a
a3=a1.b
a4=a1.c
a1=a1.d
if(p==null){a1=[a2,a3,a4,a1]
p=new V.bl(a1[0],a1[1],a1[2],a1[3])}else{a1=[a2,a3,a4,a1]
a2=a1[0]
a3=a1[1]
a4=a1[2]
a1=a1[3]
p=new V.bl(p.a+a2,p.b+a3,p.c+a4,p.d+a1)}++k}a1=e.ch
if(typeof a1!=="number")return H.v(a1)
g+=a1;++h}a5=F.cd(a6,a6,a6,a6,a6,a6,a6,a6,0)
if(l<=0||m==null)a5.sZ(0,a6)
else a5.sZ(0,m.T(0,l))
if(n==null)a5.scJ(a6)
else a5.scJ(n.B())
if(o==null)a5.sdL(a6)
else a5.sdL(o.B())
if(j<=0||q==null)a5.scR(a6)
else a5.scR(q.T(0,j))
if(i<=0||r==null)a5.sat(a6)
else a5.sat(r.T(0,i))
if(k<=0||p==null)a5.sao(0,a6)
else{s=p.T(0,k)
s=[s.a,s.b,s.c,s.d]
a1=s[0]
a2=s[1]
a3=s[2]
s=s[3]
if(a1<0)a1=0
else if(a1>1)a1=1
if(a2<0)a2=0
else if(a2>1)a2=1
if(a3<0)a3=0
else if(a3>1)a3=1
if(s<0)s=0
else if(s>1)s=1
a5.sao(0,new V.al(a1,a2,a3,s))}if(h<=0)a5.sex(0,0)
else a5.sex(0,g/h)
return a5}}
F.iX.prototype={
b3:function(a){var s,r,q,p=V.df()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.y(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.B()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.p)(a),++r)a[r].scJ(p)
return null}}
F.jZ.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
O.ep.prototype={
gp:function(){var s=this.fr
return s==null?this.fr=D.J():s},
X:function(a){var s=this.fr
if(s!=null)s.D(a)},
ba:function(){return this.X(null)},
dm:function(a){this.a=null
this.X(a)},
hj:function(){return this.dm(null)},
fl:function(a,b){var s=new D.aS()
s.b=!0
this.X(s)},
fn:function(a,b){var s=new D.aT()
s.b=!0
this.X(s)},
dc:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.C(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
o=p.gaA()
n=d.h(0,p.gaA())
d.l(0,o,n==null?1:n)}m=H.c([],t.am)
d.I(0,new O.iJ(f,m))
C.b.b8(m,new O.iK())
l=new H.C(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){o=l.h(0,0)
l.l(0,0,o==null?1:o)}k=H.c([],t.M)
l.I(0,new O.iL(f,k))
C.b.b8(k,new O.iM())
j=new H.C(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
o=p.gaA()
n=j.h(0,p.gaA())
j.l(0,o,n==null?1:n)}i=H.c([],t.d1)
j.I(0,new O.iN(f,i))
C.b.b8(i,new O.iO())
h=new H.C(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.p)(e),++q){p=e[q]
r=p.gaA()
o=h.h(0,p.gaA())
h.l(0,r,o==null?1:o)}g=H.c([],t.cz)
h.I(0,new O.iP(f,g))
C.b.b8(g,new O.iQ())
e=C.c.a6(f.e.a.length+3,4)
f.dy.toString
return A.ot(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
al:function(a,b){if(b!=null)if(!C.b.G(a,b)){b.a=a.length
a.push(b)}},
au:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a9(s,s.length);s.v();){r=s.d
r.toString
q=$.jQ
if(q==null)q=$.jQ=new V.y(0,0,1)
r.a=q
p=$.jP
r.d=p==null?$.jP=new V.y(0,1,0):p
p=$.jO
r.e=p==null?$.jO=new V.y(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bP(q).B()
r.d=o.bP(r.d).B()
r.e=o.bP(r.e).B()}}}},
ep:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.dc()
s=b4.fr.h(0,b3.aI)
if(s==null){s=A.os(b3,b4.a)
b4.dE(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bE
b3=b5.e
if(!(b3 instanceof Z.cs))b3=b5.e=null
if(b3==null||!b3.d.q(0,q)){b3=r.k4
if(b3)b5.d.an()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.ck()
o.a.ck()
o=o.e
if(o!=null)o.aC(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.hH()
n=n.e
if(n!=null)n.aC(0)}l=b5.d.dN(new Z.fC(b4.a),q)
l.aJ($.aO()).e=b2.a.Q.c
if(b3)l.aJ($.bu()).e=b2.a.cx.c
if(p)l.aJ($.bt()).e=b2.a.ch.c
if(r.r2)l.aJ($.bO()).e=b2.a.cy.c
if(o)l.aJ($.bv()).e=b2.a.db.c
if(r.ry)l.aJ($.bs()).e=b2.a.dx.c
b5.e=l}k=H.c([],t.bw)
b2.a.a1(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.ga4(p)
b3=b3.dy
b3.toString
b3.ak(p.ae(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga4(p)
o=b4.dx
o=b4.cx=p.t(0,o.ga4(o))
p=o}b3=b3.fr
b3.toString
b3.ak(p.ae(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.giu()
o=b4.dx
o=b4.ch=p.t(0,o.ga4(o))
p=o}b3=b3.fy
b3.toString
b3.ak(p.ae(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.ga4(p)
b3=b3.fx
b3.toString
b3.ak(p.ae(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ak(C.j.ae(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ak(C.j.ae(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ak(C.j.ae(p,!0))}if(r.bD>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.d(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.d(b3,i)
b3=b3[i]
h=new Float32Array(H.cj(p.ae(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.al(k,b2.f.e)
b3=b2.a
p=b2.f.e
b3.am(b3.ry,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.al(k,b2.r.e)
b3=b2.a
p=b2.r.e
b3.am(b3.y1,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.al(k,b2.x.e)
b3=b2.a
p=b2.x.e
b3.am(b3.aI,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bE
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.al(k,b2.y.e)
b3=b2.a
p=b2.y.e
b3.am(b3.dU,p)}b3=r.e
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.z.ch
o=o.dX
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.dV
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.al(k,b2.z.e)
b3=b2.a
p=b2.z.e
b3.am(b3.dW,p)}b3=r.z
if(b3.length>0){g=new H.C(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
d=e.gaA()
c=g.h(0,d)
if(c==null)c=0
g.l(0,d,c+1)
b=J.cr(b2.a.cr.h(0,d),c)
n=e.giL()
m=$.b0
n=n.bq(m==null?$.b0=new V.K(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giQ()
m=$.b0
n=n.bq(m==null?$.b0=new V.K(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gao(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gdT()){n=e.gdG()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gdH()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gdI()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.p)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.cq.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.ga4(p)
a0=new H.C(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
c=a0.h(0,0)
if(c==null)c=0
a0.l(0,0,c+1)
b=J.cr(b2.a.ct.h(0,0),c)
n=a.bP(e.a).B()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.c
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.p)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.cs.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.ga4(p)
a3=new H.C(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
d=e.gaA()
c=a3.h(0,d)
if(c==null)c=0
a3.l(0,d,c+1)
b=J.cr(b2.a.cv.h(0,d),c)
a4=a.t(0,e.ga4(e))
n=e.ga4(e)
m=$.b0
n=n.bq(m==null?$.b0=new V.K(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.b0
n=a4.bq(n==null?$.b0=new V.K(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gao(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaO()
n=a4.cE(0)
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
h=new Float32Array(H.cj(new V.er(m,a1,a2,a5,a6,a7,a8,a9,n).ae(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gaO()
n=e.gaO()
if(!C.b.G(k,n)){n.a=k.length
k.push(n)}n=e.gaO()
m=n.gbk(n)
if(m){m=b.f
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gb7()
n=e.geC()
m=b.x
m.toString
a1=n.ghT(n)
a2=n.ghU(n)
a5=n.ghV()
n=n.ghS()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gb7()
if(!C.b.G(k,n)){n.a=k.length
k.push(n)}n=e.gb7()
m=n.gbk(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gdT()){n=e.gdG()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gdH()
m=b.z
m.a.uniform1f(m.d,n)
n=e.gdI()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.p)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.cu.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.ga4(p)
b1=new H.C(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.p)(p),++f){e=p[f]
d=e.gaA()
c=b1.h(0,d)
if(c==null)c=0
b1.l(0,d,c+1)
b=J.cr(b2.a.cz.h(0,d),c)
n=e.git(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giO(e).B()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.bq(e.git(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gao(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaO()
n=e.gcU()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gcQ(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gj_()
m=b.x
m.a.uniform1f(m.d,n)
n=e.gj0()
m=b.y
m.a.uniform1f(m.d,n)
e.gaO()
n=e.gaO()
if(!C.b.G(k,n)){n.a=k.length
k.push(n)}n=e.gaO()
m=n.gbk(n)
if(m){m=b.dx
m.toString
a1=n.gbk(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.gi7(n))}e.gb7()
n=e.geC()
m=b.z
m.toString
a1=n.ghT(n)
a2=n.ghU(n)
a5=n.ghV()
n=n.ghS()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gb7()
if(!C.b.G(k,n)){n.a=k.length
k.push(n)}n=e.gb7()
m=n.gbk(n)
if(m){m=b.dy
m.toString
a1=n.gbk(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.gi7(n))}if(e.giP()){n=e.giN()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.giM()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gdT()){n=e.gdG()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gdH()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gdI()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.p)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.cw.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.f.c){b2.al(k,b2.Q.e)
b3=b2.a
p=b2.Q.e
b3.am(b3.dY,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga4(p).cE(0)}b3=b3.id
b3.toString
b3.ak(p.ae(0,!0))}if(r.db){b2.al(k,b2.ch)
b3=b2.a
p=b2.ch
b3.am(b3.dZ,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.e_
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.al(k,b2.cx.e)
b3=b2.a
p=b2.cx.e
b3.am(b3.e0,p)}b3=r.x
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.cy.ch
o=o.e1
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.e2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.al(k,b2.cy.e)
b3=b2.a
p=b2.cy.e
b3.am(b3.e3,p)}}b3=r.y
p=b3.a
o=!p
if(o)n=b3.c
else n=!0
if(n){if(p){p=b2.a
n=b2.db.f
p=p.e4
p.a.uniform1f(p.d,n)}if(b3.c){b2.al(k,b2.db.e)
p=b2.a
n=b2.db.e
p.am(p.e5,n)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].a1(b4)
p=b5.e
p.a1(b4)
p.ai(b4)
p.aP(b4)
if(o)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,i=0;i<k.length;++i){p=k[i]
if(p.c){p.c=!1
b3.activeTexture(33984+p.a)
b3.bindTexture(34067,null)}}p=b2.a
p.toString
b3.useProgram(null)
p.x.dR()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.dc().aI}}
O.iJ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dY(a,C.c.a6(b+3,4)*4))}}
O.iK.prototype={
$2:function(a,b){return J.dQ(a.a,b.a)}}
O.iL.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.e6(a,C.c.a6(b+3,4)*4))}}
O.iM.prototype={
$2:function(a,b){return J.dQ(a.a,b.a)}}
O.iN.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.eM(a,C.c.a6(b+3,4)*4))}}
O.iO.prototype={
$2:function(a,b){return J.dQ(a.a,b.a)}}
O.iP.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.f0(a,C.c.a6(b+3,4)*4))}}
O.iQ.prototype={
$2:function(a,b){return J.dQ(a.a,b.a)}}
O.iD.prototype={
aF:function(){var s,r=this
r.d1()
s=r.f
$.G().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.E(r.b,s,1)
s.b=!0
r.a.X(s)}}}
O.cV.prototype={
X:function(a){return this.a.X(a)},
ba:function(){return this.X(null)},
aF:function(){},
cd:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aF()
s=q.a
s.a=null
s.X(null)}},
sat:function(a){var s,r=this,q=r.c
if(!q.c)r.cd(new A.a4(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gp().C(0,r.gaU())
s=r.e
r.e=a
a.gp().n(0,r.gaU())
q=new D.E(r.b+".textureCube",s,r.e)
q.b=!0
r.a.X(q)}}}
O.iE.prototype={}
O.aX.prototype={
dq:function(a){var s,r,q=this
if(!q.f.q(0,a)){s=q.f
q.f=a
r=new D.E(q.b+".color",s,a)
r.b=!0
q.a.X(r)}},
aF:function(){this.d1()
this.dq(new V.a1(1,1,1))},
sao:function(a,b){this.cd(new A.a4(!0,!1,this.c.c))
this.dq(b)}}
O.iG.prototype={}
O.iH.prototype={
aF:function(){var s,r=this
r.d2()
s=r.ch
$.G().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.E(r.b+".refraction",s,1)
s.b=!0
r.a.X(s)}}}
O.iI.prototype={
dr:function(a){var s=this,r=s.ch
$.G().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.E(s.b+".shininess",r,a)
r.b=!0
s.a.X(r)}},
aF:function(){this.d2()
this.dr(100)}}
O.eV.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.J():s},
X:function(a){var s=this.e
if(s!=null)s.D(a)},
ba:function(){return this.X(null)},
ep:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.eW(r,l)
s.d3(r,l)
s.eb(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.dE(s)}m.a=s}if(b.e==null){r=b.d.dN(new Z.fC(a.a),$.aO())
r.aJ($.aO()).e=m.a.z.c
b.e=r}r=m.c
if(r!=null){r.a=1
r.a1(a)}r=a.d
q=a.c
p=m.a
p.a1(a)
o=m.b
n=p.Q
n.a.uniform1f(n.d,o)
o=p.ch
o.a.uniform1f(o.d,r/q)
q=m.c
p.cy.cZ(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.ga4(q).cE(0)
p=p.db
p.toString
p.ak(q.ae(0,!0))
r=b.e
if(r instanceof Z.cs){r.a1(a)
r.ai(a)
r.aP(a)}else b.e=null
r=m.a
r.toString
a.a.useProgram(null)
r.x.dR()
r=m.c
if(r!=null)r.aP(a)}}
O.fb.prototype={}
T.fe.prototype={}
T.jj.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.J():s},
a1:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
aP:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.jk.prototype={
eg:function(a,b){var s,r=this,q=34067,p=a+"/posx"+b,o=a+"/posy"+b,n=a+"/posz"+b,m=a+"/negx"+b,l=a+"/negy"+b,k=a+"/negz"+b,j=r.a,i=j.createTexture()
j.bindTexture(q,i)
j.texParameteri(q,10242,10497)
j.texParameteri(q,10243,10497)
j.texParameteri(q,10241,9729)
j.texParameteri(q,10240,9729)
j.bindTexture(q,null)
s=new T.jj()
s.a=0
s.b=i
s.c=!1
s.d=0
r.aX(s,i,p,34069,!1,!1)
r.aX(s,i,m,34070,!1,!1)
r.aX(s,i,o,34071,!1,!1)
r.aX(s,i,l,34072,!1,!1)
r.aX(s,i,n,34073,!1,!1)
r.aX(s,i,k,34074,!1,!1)
return s},
ef:function(a){return this.eg(a,".png")},
aX:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.a2(s,"load",new T.jl(this,s,!1,b,!1,d,a),!1)},
hk:function(a,b,c){var s,r,q,p
b=V.lV(b)
s=V.lV(a.width)
r=V.lV(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.ld()
q.width=s
q.height=r
p=C.i.ez(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.qw(p.getImageData(0,0,q.width,q.height))}}}
T.jl.prototype={
$1:function(a){var s=this,r=s.a,q=r.hk(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.a3.iD(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.hW()}++r.e}}
X.lc.prototype={}
X.il.prototype={
gp:function(){var s=this.x
return s==null?this.x=D.J():s},
ax:function(a){var s=this.x
if(s!=null)s.D(a)},
a1:function(a){var s,r,q,p,o,n,m,l=this,k=a.a
k.bindFramebuffer(36160,null)
k.enable(2884)
k.enable(2929)
k.depthFunc(513)
s=k.drawingBufferWidth
r=k.drawingBufferHeight
q=l.r
p=q.a
if(typeof s!=="number")return H.v(s)
o=C.d.as(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.d.as(p*r)
p=C.d.as(q.c*s)
a.c=p
q=C.d.as(q.d*r)
a.d=q
k.viewport(o,n,p,q)
k.clearDepth(l.c)
if(l.b){q=l.a
k.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
k.clear(m)}}
X.iq.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.J():s},
a1:function(a){var s
a.cy.bM(V.bZ())
s=V.bZ()
a.db.bM(s)},
aP:function(a){a.cy.aM()
a.db.aM()}}
X.eF.prototype={
gp:function(){var s=this.f
return s==null?this.f=D.J():s},
ax:function(a){var s=this.f
if(s!=null)s.D(a)},
fs:function(){return this.ax(null)},
a1:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.aY(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bM(i)
p=$.mm
if(p==null){p=V.ls()
o=V.lw()
n=$.mK
p=V.mi(p,o,n==null?$.mK=new V.y(0,0,-1):n)
$.mm=p
s=p}else s=p
p=q.b
if(p!=null){r=p.b5(0,a,q)
if(r!=null)s=r.t(0,s)}a.db.bM(s)},
aP:function(a){a.cy.aM()
a.db.aM()}}
X.ji.prototype={}
V.bb.prototype={
bs:function(a){this.b=new P.io(C.T)
this.c=null
this.d=H.c([],t.u)},
M:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.c([],t.k))
s=a.split("\n")
for(j=s.length,r=t.k,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.c([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.f3(o,0,o.length)
l=m==null?o:m
C.R.eB(n,H.lX(l," ","&nbsp;"))
l=n.style
l.color=b
C.b.gaB(k.d).push(n)}},
en:function(a,b){var s,r,q,p=this
p.d=H.c([],t.u)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bC()
r.toString
q=new H.r(s)
q=new P.bK(r.cT(new H.bg(q,q.gm(q))).a())
for(;q.v();)p.bL(q.gE(q))}}
V.l2.prototype={
$1:function(a){var s=C.d.eu(this.a.gi6(),2)
if(s!=="0.00")P.lW(s+" fps")}}
V.e4.prototype={
bL:function(a){var s=this
switch(a.a){case"Class":s.M(a.b,"#551")
break
case"Comment":s.M(a.b,"#777")
break
case"Id":s.M(a.b,"#111")
break
case"Num":s.M(a.b,"#191")
break
case"Reserved":s.M(a.b,"#119")
break
case"String":s.M(a.b,"#171")
break
case"Symbol":s.M(a.b,"#616")
break
case"Type":s.M(a.b,"#B11")
break
case"Whitespace":s.M(a.b,"#111")
break}},
bC:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()\\-+*%!&|=.,?:;",i="OpenDoubleStr",h="CloseDoubleStr",g="EscDoubleStr",f="OpenSingleStr",e="CloseSingleStr",d="EscSingleStr",c="Slash",b="Comment",a="EndComment",a0="MLComment",a1="MLCStar",a2="Whitespace",a3=L.jp()
a3.d=a3.k(0,p)
s=a3.k(0,p).j(0,o)
r=K.u(new H.r("_"))
s.a.push(r)
r=K.Q("a","z")
s.a.push(r)
r=K.Q("A","Z")
s.a.push(r)
r=a3.k(0,o).j(0,o)
s=K.u(new H.r("_"))
r.a.push(s)
s=K.Q("0","9")
r.a.push(s)
s=K.Q("a","z")
r.a.push(s)
s=K.Q("A","Z")
r.a.push(s)
s=a3.k(0,p).j(0,n)
r=K.Q("0","9")
s.a.push(r)
r=a3.k(0,n).j(0,n)
s=K.Q("0","9")
r.a.push(s)
s=a3.k(0,n).j(0,m)
r=K.u(new H.r("."))
s.a.push(r)
r=a3.k(0,m).j(0,l)
s=K.Q("0","9")
r.a.push(s)
s=a3.k(0,l).j(0,l)
r=K.Q("0","9")
s.a.push(r)
r=a3.k(0,p).j(0,k)
s=K.u(new H.r(j))
r.a.push(s)
s=a3.k(0,k).j(0,k)
r=K.u(new H.r(j))
s.a.push(r)
r=a3.k(0,p).j(0,i)
s=K.u(new H.r('"'))
r.a.push(s)
s=a3.k(0,i).j(0,h)
r=K.u(new H.r('"'))
s.a.push(r)
r=a3.k(0,i).j(0,g)
s=K.u(new H.r("\\"))
r.a.push(s)
s=a3.k(0,g).j(0,i)
r=K.u(new H.r('"'))
s.a.push(r)
a3.k(0,i).j(0,i).a.push(new K.b9())
r=a3.k(0,p).j(0,f)
s=K.u(new H.r("'"))
r.a.push(s)
s=a3.k(0,f).j(0,e)
r=K.u(new H.r("'"))
s.a.push(r)
r=a3.k(0,f).j(0,d)
s=K.u(new H.r("\\"))
r.a.push(s)
s=a3.k(0,d).j(0,f)
r=K.u(new H.r("'"))
s.a.push(r)
a3.k(0,f).j(0,f).a.push(new K.b9())
r=a3.k(0,p).j(0,c)
s=K.u(new H.r("/"))
r.a.push(s)
s=a3.k(0,c).j(0,b)
r=K.u(new H.r("/"))
s.a.push(r)
r=a3.k(0,b).j(0,a)
s=K.u(new H.r("\n"))
r.a.push(s)
s=a3.k(0,b).j(0,b)
r=new K.ae()
q=t.B
r.a=H.c([],q)
s.a.push(r)
s=K.u(new H.r("\n"))
r.a.push(s)
s=a3.k(0,c).j(0,a0)
r=K.u(new H.r("*"))
s.a.push(r)
r=a3.k(0,a0).j(0,a1)
s=K.u(new H.r("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a0)
r=new K.ae()
r.a=H.c([],q)
s.a.push(r)
s=K.u(new H.r("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a)
r=K.u(new H.r("/"))
s.a.push(r)
r=a3.k(0,p).j(0,a2)
s=K.u(new H.r(" \n\t"))
r.a.push(s)
s=a3.k(0,a2).j(0,a2)
r=K.u(new H.r(" \n\t"))
s.a.push(r)
r=a3.k(0,n)
r.d=r.a.P("Num")
r=a3.k(0,l)
r.d=r.a.P("Num")
r=a3.k(0,k)
r.d=r.a.P("Symbol")
r=a3.k(0,h)
r.d=r.a.P("String")
r=a3.k(0,e)
r.d=r.a.P("String")
r=a3.k(0,a)
r.d=r.a.P(b)
r=a3.k(0,a2)
r.d=r.a.P(a2)
r=a3.k(0,o)
r=r.d=r.a.P(o)
s=t.i
r.aN(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aN(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aN(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a3}}
V.eb.prototype={
bL:function(a){var s=this
switch(a.a){case"Builtin":s.M(a.b,"#411")
break
case"Comment":s.M(a.b,"#777")
break
case"Id":s.M(a.b,"#111")
break
case"Num":s.M(a.b,"#191")
break
case"Preprocess":s.M(a.b,"#737")
break
case"Reserved":s.M(a.b,"#119")
break
case"Symbol":s.M(a.b,"#611")
break
case"Type":s.M(a.b,"#171")
break
case"Whitespace":s.M(a.b,"#111")
break}},
bC:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()[]\\-+*%!&|=.,?:;",i="Slash",h="Comment",g="EndComment",f="Preprocess",e="EndPreprocess",d="Whitespace",c=L.jp()
c.d=c.k(0,p)
s=c.k(0,p).j(0,o)
r=K.u(new H.r("_"))
s.a.push(r)
r=K.Q("a","z")
s.a.push(r)
r=K.Q("A","Z")
s.a.push(r)
r=c.k(0,o).j(0,o)
s=K.u(new H.r("_"))
r.a.push(s)
s=K.Q("0","9")
r.a.push(s)
s=K.Q("a","z")
r.a.push(s)
s=K.Q("A","Z")
r.a.push(s)
s=c.k(0,p).j(0,n)
r=K.Q("0","9")
s.a.push(r)
r=c.k(0,n).j(0,n)
s=K.Q("0","9")
r.a.push(s)
s=c.k(0,n).j(0,m)
r=K.u(new H.r("."))
s.a.push(r)
r=c.k(0,m).j(0,l)
s=K.Q("0","9")
r.a.push(s)
s=c.k(0,l).j(0,l)
r=K.Q("0","9")
s.a.push(r)
r=c.k(0,p).j(0,k)
s=K.u(new H.r(j))
r.a.push(s)
s=c.k(0,k).j(0,k)
r=K.u(new H.r(j))
s.a.push(r)
r=c.k(0,p).j(0,i)
s=K.u(new H.r("/"))
r.a.push(s)
s=c.k(0,i).j(0,h)
r=K.u(new H.r("/"))
s.a.push(r)
c.k(0,i).j(0,k).a.push(new K.b9())
r=c.k(0,h).j(0,g)
s=K.u(new H.r("\n"))
r.a.push(s)
s=c.k(0,h).j(0,h)
r=new K.ae()
q=t.B
r.a=H.c([],q)
s.a.push(r)
s=K.u(new H.r("\n"))
r.a.push(s)
s=c.k(0,p).j(0,f)
r=K.u(new H.r("#"))
s.a.push(r)
r=c.k(0,f).j(0,f)
s=new K.ae()
s.a=H.c([],q)
r.a.push(s)
r=K.u(new H.r("\n"))
s.a.push(r)
r=c.k(0,f).j(0,e)
s=K.u(new H.r("\n"))
r.a.push(s)
s=c.k(0,p).j(0,d)
r=K.u(new H.r(" \n\t"))
s.a.push(r)
r=c.k(0,d).j(0,d)
s=K.u(new H.r(" \n\t"))
r.a.push(s)
s=c.k(0,n)
s.d=s.a.P("Num")
s=c.k(0,l)
s.d=s.a.P("Num")
s=c.k(0,k)
s.d=s.a.P("Symbol")
s=c.k(0,g)
s.d=s.a.P(h)
s=c.k(0,e)
s.d=s.a.P(f)
s=c.k(0,d)
s.d=s.a.P(d)
s=c.k(0,o)
s=s.d=s.a.P(o)
r=t.i
s.aN(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],r))
s.aN(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],r))
s.aN(0,"Builtin",H.c(["gl_FragColor","gl_Position"],r))
return c}}
V.ed.prototype={
bL:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.M(a.b,"#911")
s.M("=",r)
break
case"Id":s.M(a.b,r)
break
case"Other":s.M(a.b,r)
break
case"Reserved":s.M(a.b,"#119")
break
case"String":s.M(a.b,"#171")
break
case"Symbol":s.M(a.b,"#616")
break}},
bC:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.jp()
j.d=j.k(0,q)
s=j.k(0,q).j(0,p)
r=K.u(new H.r("_"))
s.a.push(r)
r=K.Q("a","z")
s.a.push(r)
r=K.Q("A","Z")
s.a.push(r)
r=j.k(0,p).j(0,p)
s=K.u(new H.r("_"))
r.a.push(s)
s=K.Q("0","9")
r.a.push(s)
s=K.Q("a","z")
r.a.push(s)
s=K.Q("A","Z")
r.a.push(s)
s=j.k(0,p).j(0,o)
r=K.u(new H.r("="))
s.a.push(r)
s.c=!0
s=j.k(0,q).j(0,n)
r=K.u(new H.r("</\\-!>="))
s.a.push(r)
r=j.k(0,n).j(0,n)
s=K.u(new H.r("</\\-!>="))
r.a.push(s)
s=j.k(0,q).j(0,m)
r=K.u(new H.r('"'))
s.a.push(r)
r=j.k(0,m).j(0,l)
s=K.u(new H.r('"'))
r.a.push(s)
s=j.k(0,m).j(0,"EscStr")
r=K.u(new H.r("\\"))
s.a.push(r)
r=j.k(0,"EscStr").j(0,m)
s=K.u(new H.r('"'))
r.a.push(s)
j.k(0,m).j(0,m).a.push(new K.b9())
j.k(0,q).j(0,k).a.push(new K.b9())
s=j.k(0,k).j(0,k)
r=new K.ae()
r.a=H.c([],t.B)
s.a.push(r)
s=K.u(new H.r('</\\-!>=_"'))
r.a.push(s)
s=K.Q("a","z")
r.a.push(s)
s=K.Q("A","Z")
r.a.push(s)
s=j.k(0,n)
s.d=s.a.P("Symbol")
s=j.k(0,l)
s.d=s.a.P("String")
s=j.k(0,p)
r=s.a.P(p)
s.d=r
r.aN(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],t.i))
r=j.k(0,o)
r.d=r.a.P(o)
r=j.k(0,k)
r.d=r.a.P(k)
return j}}
V.eH.prototype={
en:function(a,b){this.d=H.c([],t.u)
this.M(C.b.j(b,"\n"),"#111")},
bL:function(a){},
bC:function(){return null}}
V.j_.prototype={
bz:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.mF().gcN().h(0,H.f(s))
if(r==null)if(d){c.$0()
k.dz(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.la(k.c).n(0,o)
m=W.of("radio")
m.checked=q
m.name=s
W.a2(m,"change",new V.j0(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.la(k.c).n(0,p.createElement("br"))},
ay:function(a,b,c){return this.bz(a,b,c,!1)},
dz:function(a){var s,r,q=P.mF(),p=t.X,o=P.op(q.gcN(),p,p)
o.l(0,this.a,a)
s=q.eq(0,o)
p=window.history
r=s.gcg()
p.toString
p.replaceState(new P.kg([],[]).bQ(""),"",r)}}
V.j0.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.dz(s.d)}}}
V.jc.prototype={
eN:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.a2(o,"scroll",new V.je(m),!1)},
dD:function(a){var s,r,q,p,o,n,m,l
this.ho()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.ia(a)
q.toString
p=new H.r(p)
p=new P.bK(q.cT(new H.bg(p,p.gm(p))).a())
for(;p.v();){q=p.gE(p)
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
if(H.nu(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.d(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.ko(C.x,q,C.e,!1)
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
ey:function(a){var s,r,q,p=new V.e4("dart")
p.bs("dart")
s=new V.eb("glsl")
s.bs("glsl")
r=new V.ed("html")
r.bs("html")
q=C.b.i2(H.c([p,s,r],t.b7),new V.jf(a))
if(q!=null)return q
p=new V.eH("plain")
p.bs("plain")
return p},
dA:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.c([],t.V)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.dN(q).a8(q,"+")){b2[r]=C.a.ag(q,1)
a8.push(1)
s=!0}else if(C.a.a8(q,"-")){b2[r]=C.a.ag(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.ey(b0)
p.en(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.ko(C.x,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.m1()
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
if(r>=a8.length)return H.d(a8,r)
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.p)(q),++a1)a0.appendChild(q[a1])
d.appendChild(c)
d.appendChild(b)
d.appendChild(a0)
m.appendChild(d)}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.p)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.b.gO(q);a4.v();)b.appendChild(a4.gE(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
hz:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
ho:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=L.jp()
s.d=s.k(0,o)
r=s.k(0,o).j(0,n)
q=K.u(new H.r("*"))
r.a.push(q)
r.c=!0
r=s.k(0,n).j(0,n)
q=new K.ae()
p=t.B
q.a=H.c([],p)
r.a.push(q)
r=K.u(new H.r("*"))
q.a.push(r)
r=s.k(0,n).j(0,"BoldEnd")
q=K.u(new H.r("*"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,m)
q=K.u(new H.r("_"))
r.a.push(q)
r.c=!0
r=s.k(0,m).j(0,m)
q=new K.ae()
q.a=H.c([],p)
r.a.push(q)
r=K.u(new H.r("_"))
q.a.push(r)
r=s.k(0,m).j(0,l)
q=K.u(new H.r("_"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,k)
q=K.u(new H.r("`"))
r.a.push(q)
r.c=!0
r=s.k(0,k).j(0,k)
q=new K.ae()
q.a=H.c([],p)
r.a.push(q)
r=K.u(new H.r("`"))
q.a.push(r)
r=s.k(0,k).j(0,"CodeEnd")
q=K.u(new H.r("`"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,j)
q=K.u(new H.r("["))
r.a.push(q)
r.c=!0
r=s.k(0,j).j(0,i)
q=K.u(new H.r("|"))
r.a.push(q)
q=s.k(0,j).j(0,h)
r=K.u(new H.r("]"))
q.a.push(r)
q.c=!0
q=s.k(0,j).j(0,j)
r=new K.ae()
r.a=H.c([],p)
q.a.push(r)
q=K.u(new H.r("|]"))
r.a.push(q)
q=s.k(0,i).j(0,h)
r=K.u(new H.r("]"))
q.a.push(r)
q.c=!0
q=s.k(0,i).j(0,i)
r=new K.ae()
r.a=H.c([],p)
q.a.push(r)
q=K.u(new H.r("|]"))
r.a.push(q)
s.k(0,o).j(0,g).a.push(new K.b9())
q=s.k(0,g).j(0,g)
r=new K.ae()
r.a=H.c([],p)
q.a.push(r)
q=K.u(new H.r("*_`["))
r.a.push(q)
q=s.k(0,"BoldEnd")
q.d=q.a.P(n)
q=s.k(0,l)
q.d=q.a.P(m)
q=s.k(0,"CodeEnd")
q.d=q.a.P(k)
q=s.k(0,h)
q.d=q.a.P("Link")
q=s.k(0,g)
q.d=q.a.P(g)
this.b=s}}
V.je.prototype={
$1:function(a){P.mB(C.n,new V.jd(this.a))}}
V.jd.prototype={
$0:function(){var s=C.d.as(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
V.jf.prototype={
$1:function(a){return a.a===this.a}}
T.kS.prototype={
$0:function(){this.a.sab(0,F.lQ(1,null,null,1))}}
T.kT.prototype={
$0:function(){this.a.sab(0,F.lQ(8,null,null,8))}}
T.kU.prototype={
$0:function(){this.a.sab(0,F.nh(!0,40,1))}}
T.kV.prototype={
$0:function(){this.a.sab(0,F.nh(!1,40,0))}}
T.kW.prototype={
$0:function(){this.a.sab(0,F.qL(10,20))}}
T.kX.prototype={
$0:function(){var s=F.eU(),r=Math.sqrt(5)/2+0.5,q=F.ad(s,new V.y(-1,r,0)),p=F.ad(s,new V.y(1,r,0)),o=-r,n=F.ad(s,new V.y(-1,o,0)),m=F.ad(s,new V.y(1,o,0)),l=F.ad(s,new V.y(0,-1,o)),k=F.ad(s,new V.y(0,1,o)),j=F.ad(s,new V.y(0,-1,r)),i=F.ad(s,new V.y(0,1,r)),h=F.ad(s,new V.y(r,0,1)),g=F.ad(s,new V.y(r,0,-1)),f=F.ad(s,new V.y(o,0,1)),e=F.ad(s,new V.y(o,0,-1))
F.R(s,q,e,k,2)
F.R(s,q,k,p,2)
F.R(s,q,p,i,2)
F.R(s,q,i,f,2)
F.R(s,q,f,e,2)
F.R(s,p,k,g,2)
F.R(s,k,e,l,2)
F.R(s,e,f,n,2)
F.R(s,f,i,j,2)
F.R(s,i,p,h,2)
F.R(s,m,g,l,2)
F.R(s,m,l,n,2)
F.R(s,m,n,j,2)
F.R(s,m,j,h,2)
F.R(s,m,h,g,2)
F.R(s,l,g,k,2)
F.R(s,n,l,e,2)
F.R(s,j,n,f,2)
F.R(s,h,j,i,2)
F.R(s,g,h,p,2)
s.eh(new F.dg(),new F.jV())
this.a.sab(0,s)}}
T.kY.prototype={
$0:function(){this.a.sab(0,F.nt(6,6))}}
T.kZ.prototype={
$0:function(){this.a.sab(0,F.qT())}}
T.l_.prototype={
$0:function(){this.a.sab(0,F.qK())}}
T.l0.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a,p=t.s
s.dA("Vertex Shader","glsl",0,H.c((q==null?null:q.c).split("\n"),p))
r=r.a
s.dA("Fragment Shader","glsl",0,H.c((r==null?null:r.d).split("\n"),p))}};(function aliases(){var s=J.a.prototype
s.eF=s.i
s=J.bf.prototype
s.eH=s.i
s=P.h.prototype
s.eG=s.bR
s=W.D.prototype
s.bT=s.ap
s=W.dt.prototype
s.eI=s.az
s=K.ec.prototype
s.eE=s.aL
s.d0=s.i
s=O.cV.prototype
s.d1=s.aF
s=O.aX.prototype
s.d2=s.aF})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pK","ok",22)
r(P,"qp","oW",8)
r(P,"qq","oX",8)
r(P,"qr","oY",8)
q(P,"ng","qk",9)
r(W,"t0","i9",23)
p(W,"qD",4,null,["$4"],["oZ"],15,0)
p(W,"qE",4,null,["$4"],["p_"],15,0)
var j
o(j=E.bC.prototype,"gel",0,0,null,["$1","$0"],["em","ik"],0,0)
o(j,"gej",0,0,null,["$1","$0"],["ek","ih"],0,0)
n(j,"gie","ig",4)
n(j,"gii","ij",4)
o(j=E.ff.prototype,"gd5",0,0,null,["$1","$0"],["d7","d6"],0,0)
m(j,"giz","er",9)
l(j=X.fy.prototype,"gfF","fG",5)
l(j,"gfo","fp",5)
l(j,"gfz","fA",2)
l(j,"gfJ","fK",10)
l(j,"gfH","fI",10)
l(j,"gfN","fO",2)
l(j,"gfR","fS",2)
l(j,"gfD","fE",2)
l(j,"gfP","fQ",2)
l(j,"gfB","fC",2)
l(j,"gfT","fU",20)
l(j,"gfV","fW",5)
l(j,"gha","hb",6)
l(j,"gh6","h7",6)
l(j,"gh8","h9",6)
o(D.bA.prototype,"geP",0,0,null,["$1","$0"],["aD","eQ"],0,0)
o(j=D.cM.prototype,"gdj",0,0,null,["$1","$0"],["dk","fL"],0,0)
l(j,"gfX","fY",21)
n(j,"gfi","fj",11)
n(j,"gh0","h1",11)
k(V.ag.prototype,"gm","bj",7)
k(V.y.prototype,"gm","bj",7)
k(V.bl.prototype,"gm","bj",7)
o(j=U.bV.prototype,"gaT",0,0,null,["$1","$0"],["R","ad"],0,0)
n(j,"gfg","fh",12)
n(j,"gfZ","h_",12)
o(j=U.dc.prototype,"gaT",0,0,null,["$1","$0"],["R","ad"],0,0)
l(j,"gc2","c3",1)
l(j,"gc4","c5",1)
l(j,"gc6","c7",1)
o(j=U.dd.prototype,"gaT",0,0,null,["$1","$0"],["R","ad"],0,0)
l(j,"gc2","c3",1)
l(j,"gc4","c5",1)
l(j,"gc6","c7",1)
l(j,"gf9","fa",1)
l(j,"gfb","fc",1)
l(j,"ghv","hw",1)
l(j,"ght","hu",1)
l(j,"ghr","hs",1)
l(U.de.prototype,"gfe","ff",1)
o(j=M.ct.prototype,"ga_",0,0,null,["$1","$0"],["a0","b9"],0,0)
n(j,"gh2","h3",13)
n(j,"gh4","h5",13)
o(M.cx.prototype,"ga_",0,0,null,["$1","$0"],["a0","b9"],0,0)
o(j=M.cD.prototype,"ga_",0,0,null,["$1","$0"],["a0","b9"],0,0)
n(j,"gft","fu",4)
n(j,"gfv","fw",4)
o(j=O.ep.prototype,"gaU",0,0,null,["$1","$0"],["X","ba"],0,0)
o(j,"ghi",0,0,null,["$1","$0"],["dm","hj"],0,0)
n(j,"gfk","fl",14)
n(j,"gfm","fn",14)
o(O.cV.prototype,"gaU",0,0,null,["$1","$0"],["X","ba"],0,0)
o(O.eV.prototype,"gaU",0,0,null,["$1","$0"],["X","ba"],0,0)
o(X.eF.prototype,"gfq",0,0,null,["$1","$0"],["ax","fs"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.O,null)
q(P.O,[H.lm,J.a,J.a9,P.M,P.dl,P.h,H.bg,P.ef,H.cG,H.fv,H.cv,H.js,H.iY,H.hj,H.bz,P.X,H.iw,H.en,H.eh,H.aw,H.fW,P.dz,P.ch,P.bK,P.fE,P.d3,P.f5,P.d5,P.ks,P.ds,P.k8,P.dk,P.i,P.hy,P.cT,P.e0,P.ip,P.kq,P.kp,P.aC,P.am,P.S,P.bB,P.eE,P.d2,P.fT,P.ik,P.aE,P.n,P.H,P.at,P.z,P.U,P.bL,P.jD,P.hd,W.i0,W.lh,W.ly,W.cg,W.N,W.d0,W.dt,W.ho,W.cH,W.ap,W.kc,W.hz,P.kf,P.dB,P.hb,P.bk,K.b9,K.ec,K.iC,K.j1,K.j7,L.f2,L.fg,L.fh,L.jo,O.aa,O.cW,E.hW,E.bC,E.bS,E.c4,E.fQ,E.j2,E.ff,Z.fB,Z.fC,Z.cs,Z.bX,Z.bm,D.hX,D.bT,D.V,X.e_,X.ej,X.iu,X.iA,X.as,X.iU,X.jq,X.fy,D.dX,D.bA,D.W,D.eK,D.f_,V.a1,V.al,V.ic,V.er,V.bh,V.T,V.K,V.au,V.eP,V.ag,V.y,V.bl,U.dc,U.dd,U.de,M.cx,M.cD,M.a7,A.dU,A.hR,A.a4,A.dY,A.e6,A.eM,A.f0,A.iF,A.d7,A.d8,A.da,A.db,A.fl,A.jA,F.cE,F.ih,F.em,F.iv,F.eJ,F.j8,F.j9,F.ja,F.jb,F.fz,F.jR,F.jS,F.jW,F.jX,F.jY,F.jZ,O.fb,O.cV,O.iG,T.jk,X.lc,X.ji,X.iq,X.eF,V.bb,V.j_,V.jc])
q(J.a,[J.eg,J.cL,J.bf,J.w,J.bF,J.aU,H.cX,H.Z,W.e,W.hP,W.bw,W.aR,W.L,W.fJ,W.ar,W.i3,W.i4,W.fL,W.cA,W.fN,W.i5,W.j,W.fU,W.aF,W.im,W.fY,W.bE,W.iz,W.iR,W.h1,W.h2,W.aH,W.h3,W.h5,W.aI,W.h9,W.hc,W.aJ,W.he,W.aK,W.hk,W.ay,W.hq,W.jn,W.aL,W.hs,W.jr,W.jI,W.hA,W.hC,W.hE,W.hG,W.hI,P.aV,P.h_,P.aZ,P.h7,P.iZ,P.hl,P.b1,P.hu,P.hS,P.fG,P.eQ,P.hh])
q(J.bf,[J.eG,J.bJ,J.aG])
r(J.is,J.w)
q(J.bF,[J.cK,J.cJ])
q(P.M,[H.ek,H.eA,H.ei,H.fu,H.eS,H.fR,P.dT,P.eB,P.ak,P.fw,P.ft,P.c9,P.e1,P.e3])
r(P.cP,P.dl)
q(P.cP,[H.cb,W.fH,W.a3,P.e9])
r(H.r,H.cb)
q(P.h,[H.l,H.aW,H.b4,P.cI])
q(H.l,[H.cQ,H.cN])
r(H.cB,H.aW)
q(P.ef,[H.eo,H.fD])
r(H.cU,H.cQ)
r(H.cw,H.cv)
q(H.bz,[H.fa,H.it,H.kK,H.kL,H.kM,P.k2,P.k1,P.k3,P.k4,P.kl,P.kk,P.kB,P.ka,P.kb,P.ix,P.iB,P.jL,P.jM,P.i6,P.i7,P.jH,P.jE,P.jF,P.jG,P.kn,P.km,P.kw,P.kv,P.kx,P.ky,W.i8,W.iS,W.iT,W.j6,W.jh,W.k5,W.iW,W.iV,W.kd,W.ke,W.kj,W.kr,P.kh,P.ki,P.kC,P.ii,P.ij,P.hT,E.j3,E.j4,E.j5,E.jm,D.ie,D.ig,F.kt,F.kD,F.kF,F.kG,F.kH,F.kR,F.l3,F.l4,F.l6,F.kQ,F.kE,F.k0,F.k_,F.jT,F.jU,O.iJ,O.iK,O.iL,O.iM,O.iN,O.iO,O.iP,O.iQ,T.jl,V.l2,V.j0,V.je,V.jd,V.jf,T.kS,T.kT,T.kU,T.kV,T.kW,T.kX,T.kY,T.kZ,T.l_,T.l0])
q(H.fa,[H.f3,H.bR])
r(P.cS,P.X)
q(P.cS,[H.C,W.fF])
r(H.c2,H.Z)
q(H.c2,[H.dn,H.dq])
r(H.dp,H.dn)
r(H.bH,H.dp)
r(H.dr,H.dq)
r(H.cY,H.dr)
q(H.cY,[H.ev,H.ew,H.ex,H.ey,H.ez,H.cZ,H.c3])
r(H.dA,H.fR)
r(P.dw,P.cI)
r(P.k9,P.ks)
r(P.dj,P.ds)
r(P.dE,P.cT)
r(P.cc,P.dE)
q(P.e0,[P.hU,P.ia])
r(P.e2,P.f5)
q(P.e2,[P.hV,P.io,P.jN,P.jK])
r(P.jJ,P.ia)
q(P.S,[P.a0,P.k])
q(P.ak,[P.c6,P.ee])
r(P.fK,P.bL)
q(W.e,[W.x,W.e8,W.c_,W.ax,W.du,W.az,W.af,W.dx,W.fA,W.ce,P.dW,P.ba])
q(W.x,[W.D,W.aD,W.cf])
q(W.D,[W.t,P.m])
q(W.t,[W.dR,W.dS,W.bQ,W.bx,W.by,W.bd,W.ea,W.bW,W.bY,W.eT,W.bj,W.d4,W.f8,W.f9,W.ca])
r(W.i_,W.aR)
r(W.cy,W.fJ)
q(W.ar,[W.i1,W.i2])
r(W.fM,W.fL)
r(W.cz,W.fM)
r(W.fO,W.fN)
r(W.e7,W.fO)
r(W.an,W.bw)
r(W.fV,W.fU)
r(W.bU,W.fV)
r(W.fZ,W.fY)
r(W.bD,W.fZ)
r(W.b3,W.j)
q(W.b3,[W.bG,W.ao,W.bI])
r(W.es,W.h1)
r(W.et,W.h2)
r(W.h4,W.h3)
r(W.eu,W.h4)
r(W.h6,W.h5)
r(W.d_,W.h6)
r(W.ha,W.h9)
r(W.eI,W.ha)
r(W.eR,W.hc)
r(W.dv,W.du)
r(W.eY,W.dv)
r(W.hf,W.he)
r(W.eZ,W.hf)
r(W.f4,W.hk)
r(W.hr,W.hq)
r(W.fc,W.hr)
r(W.dy,W.dx)
r(W.fd,W.dy)
r(W.ht,W.hs)
r(W.fi,W.ht)
r(W.bn,W.ao)
r(W.hB,W.hA)
r(W.fI,W.hB)
r(W.dh,W.cA)
r(W.hD,W.hC)
r(W.fX,W.hD)
r(W.hF,W.hE)
r(W.dm,W.hF)
r(W.hH,W.hG)
r(W.hg,W.hH)
r(W.hJ,W.hI)
r(W.hn,W.hJ)
r(W.fP,W.fF)
r(W.fS,P.d3)
r(W.hp,W.dt)
r(P.kg,P.kf)
r(P.ab,P.hb)
r(P.h0,P.h_)
r(P.el,P.h0)
r(P.h8,P.h7)
r(P.eC,P.h8)
r(P.c7,P.m)
r(P.hm,P.hl)
r(P.f6,P.hm)
r(P.hv,P.hu)
r(P.fj,P.hv)
r(P.dV,P.fG)
r(P.eD,P.ba)
r(P.hi,P.hh)
r(P.f1,P.hi)
q(K.ec,[K.ae,L.fk])
q(E.hW,[Z.dZ,A.c8,T.fe])
q(D.V,[D.aS,D.aT,D.E,X.eL])
q(X.eL,[X.cR,X.c0,X.c1,X.d6])
q(O.aa,[D.cM,U.bV,M.ct])
q(D.hX,[U.hZ,U.Y])
r(U.cu,U.Y)
q(A.c8,[A.eq,A.eW])
q(A.fl,[A.fn,A.jx,A.jy,A.jz,A.jv,A.fm,A.jw,A.fo,A.fp,A.jB,A.fq,A.d9,A.fr,A.fs])
r(F.jg,F.ih)
r(F.ju,F.iv)
r(F.dg,F.jX)
q(F.jY,[F.jV,F.iX])
q(O.fb,[O.ep,O.eV])
q(O.cV,[O.iD,O.iE,O.aX])
q(O.aX,[O.iH,O.iI])
r(T.jj,T.fe)
r(X.il,X.ji)
q(V.bb,[V.e4,V.eb,V.ed,V.eH])
s(H.cb,H.fv)
s(H.dn,P.i)
s(H.dp,H.cG)
s(H.dq,P.i)
s(H.dr,H.cG)
s(P.dl,P.i)
s(P.dE,P.hy)
s(W.fJ,W.i0)
s(W.fL,P.i)
s(W.fM,W.N)
s(W.fN,P.i)
s(W.fO,W.N)
s(W.fU,P.i)
s(W.fV,W.N)
s(W.fY,P.i)
s(W.fZ,W.N)
s(W.h1,P.X)
s(W.h2,P.X)
s(W.h3,P.i)
s(W.h4,W.N)
s(W.h5,P.i)
s(W.h6,W.N)
s(W.h9,P.i)
s(W.ha,W.N)
s(W.hc,P.X)
s(W.du,P.i)
s(W.dv,W.N)
s(W.he,P.i)
s(W.hf,W.N)
s(W.hk,P.X)
s(W.hq,P.i)
s(W.hr,W.N)
s(W.dx,P.i)
s(W.dy,W.N)
s(W.hs,P.i)
s(W.ht,W.N)
s(W.hA,P.i)
s(W.hB,W.N)
s(W.hC,P.i)
s(W.hD,W.N)
s(W.hE,P.i)
s(W.hF,W.N)
s(W.hG,P.i)
s(W.hH,W.N)
s(W.hI,P.i)
s(W.hJ,W.N)
s(P.h_,P.i)
s(P.h0,W.N)
s(P.h7,P.i)
s(P.h8,W.N)
s(P.hl,P.i)
s(P.hm,W.N)
s(P.hu,P.i)
s(P.hv,W.N)
s(P.fG,P.X)
s(P.hh,P.i)
s(P.hi,W.N)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",a0:"double",S:"num",z:"String",aC:"bool",at:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([V*])","~(V*)","~(ao*)","at(@,@)","~(k*,h<bC*>*)","~(j*)","~(bI*)","a0*()","~(~())","~()","~(bG*)","~(k*,h<W*>*)","~(k*,h<Y*>*)","~(k*,h<a7*>*)","~(k*,h<bh*>*)","aC(D,z,z,cg)","@(@)","at(@)","at(O?,O?)","bk(@,@)","~(bn*)","aC*(h<W*>*)","k(@,@)","z(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pi(v.typeUniverse,JSON.parse('{"aG":"bf","eG":"bf","bJ":"bf","qW":"j","r5":"j","qY":"ba","qX":"e","rc":"e","re":"e","qV":"m","r6":"m","qZ":"t","r9":"t","r7":"x","r4":"x","rE":"af","r2":"b3","r_":"aD","rf":"aD","rd":"ao","r8":"bD","rb":"bH","ra":"Z","eg":{"aC":[]},"bf":{"mf":[],"aE":[]},"w":{"n":["1"],"l":["1"],"h":["1"]},"is":{"w":["1"],"n":["1"],"l":["1"],"h":["1"]},"bF":{"a0":[],"S":[]},"cK":{"a0":[],"k":[],"S":[]},"cJ":{"a0":[],"S":[]},"aU":{"z":[]},"ek":{"M":[]},"r":{"i":["k"],"n":["k"],"l":["k"],"h":["k"],"i.E":"k"},"l":{"h":["1"]},"cQ":{"l":["1"],"h":["1"]},"aW":{"h":["2"],"h.E":"2"},"cB":{"aW":["1","2"],"l":["2"],"h":["2"],"h.E":"2"},"cU":{"cQ":["2"],"l":["2"],"h":["2"],"h.E":"2"},"b4":{"h":["1"],"h.E":"1"},"cb":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cv":{"H":["1","2"]},"cw":{"H":["1","2"]},"eA":{"M":[]},"ei":{"M":[]},"fu":{"M":[]},"bz":{"aE":[]},"fa":{"aE":[]},"f3":{"aE":[]},"bR":{"aE":[]},"eS":{"M":[]},"C":{"X":["1","2"],"H":["1","2"]},"cN":{"l":["1"],"h":["1"],"h.E":"1"},"eh":{"mu":[]},"c2":{"A":["1"],"Z":[]},"bH":{"i":["a0"],"A":["a0"],"n":["a0"],"Z":[],"l":["a0"],"h":["a0"],"i.E":"a0"},"cY":{"i":["k"],"A":["k"],"n":["k"],"Z":[],"l":["k"],"h":["k"]},"ev":{"i":["k"],"A":["k"],"n":["k"],"Z":[],"l":["k"],"h":["k"],"i.E":"k"},"ew":{"i":["k"],"A":["k"],"n":["k"],"Z":[],"l":["k"],"h":["k"],"i.E":"k"},"ex":{"i":["k"],"A":["k"],"n":["k"],"Z":[],"l":["k"],"h":["k"],"i.E":"k"},"ey":{"i":["k"],"A":["k"],"n":["k"],"Z":[],"l":["k"],"h":["k"],"i.E":"k"},"ez":{"i":["k"],"A":["k"],"n":["k"],"Z":[],"l":["k"],"h":["k"],"i.E":"k"},"cZ":{"i":["k"],"A":["k"],"n":["k"],"Z":[],"l":["k"],"h":["k"],"i.E":"k"},"c3":{"i":["k"],"bk":[],"A":["k"],"n":["k"],"Z":[],"l":["k"],"h":["k"],"i.E":"k"},"fR":{"M":[]},"dA":{"M":[]},"dz":{"d5":[]},"dw":{"h":["1"],"h.E":"1"},"dj":{"ds":["1"],"l":["1"],"h":["1"]},"cI":{"h":["1"]},"cP":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cS":{"X":["1","2"],"H":["1","2"]},"X":{"H":["1","2"]},"cT":{"H":["1","2"]},"cc":{"H":["1","2"]},"ds":{"l":["1"],"h":["1"]},"a0":{"S":[]},"dT":{"M":[]},"eB":{"M":[]},"ak":{"M":[]},"c6":{"M":[]},"ee":{"M":[]},"fw":{"M":[]},"ft":{"M":[]},"c9":{"M":[]},"e1":{"M":[]},"eE":{"M":[]},"d2":{"M":[]},"e3":{"M":[]},"k":{"S":[]},"n":{"l":["1"],"h":["1"]},"bL":{"fx":[]},"hd":{"fx":[]},"fK":{"fx":[]},"t":{"D":[],"x":[],"e":[]},"dR":{"D":[],"x":[],"e":[]},"dS":{"D":[],"x":[],"e":[]},"bQ":{"D":[],"x":[],"e":[]},"bx":{"D":[],"x":[],"e":[]},"by":{"D":[],"x":[],"e":[]},"aD":{"x":[],"e":[]},"bd":{"D":[],"x":[],"e":[]},"cz":{"i":["ab<S>"],"n":["ab<S>"],"A":["ab<S>"],"l":["ab<S>"],"h":["ab<S>"],"i.E":"ab<S>"},"cA":{"ab":["S"]},"e7":{"i":["z"],"n":["z"],"A":["z"],"l":["z"],"h":["z"],"i.E":"z"},"fH":{"i":["D"],"n":["D"],"l":["D"],"h":["D"],"i.E":"D"},"D":{"x":[],"e":[]},"an":{"bw":[]},"bU":{"i":["an"],"n":["an"],"A":["an"],"l":["an"],"h":["an"],"i.E":"an"},"e8":{"e":[]},"ea":{"D":[],"x":[],"e":[]},"bD":{"i":["x"],"n":["x"],"A":["x"],"l":["x"],"h":["x"],"i.E":"x"},"bW":{"D":[],"x":[],"e":[]},"bY":{"D":[],"x":[],"e":[]},"bG":{"j":[]},"c_":{"e":[]},"es":{"X":["z","@"],"H":["z","@"]},"et":{"X":["z","@"],"H":["z","@"]},"eu":{"i":["aH"],"n":["aH"],"A":["aH"],"l":["aH"],"h":["aH"],"i.E":"aH"},"ao":{"j":[]},"a3":{"i":["x"],"n":["x"],"l":["x"],"h":["x"],"i.E":"x"},"x":{"e":[]},"d_":{"i":["x"],"n":["x"],"A":["x"],"l":["x"],"h":["x"],"i.E":"x"},"eI":{"i":["aI"],"n":["aI"],"A":["aI"],"l":["aI"],"h":["aI"],"i.E":"aI"},"eR":{"X":["z","@"],"H":["z","@"]},"eT":{"D":[],"x":[],"e":[]},"ax":{"e":[]},"eY":{"i":["ax"],"n":["ax"],"A":["ax"],"e":[],"l":["ax"],"h":["ax"],"i.E":"ax"},"eZ":{"i":["aJ"],"n":["aJ"],"A":["aJ"],"l":["aJ"],"h":["aJ"],"i.E":"aJ"},"f4":{"X":["z","z"],"H":["z","z"]},"bj":{"D":[],"x":[],"e":[]},"d4":{"D":[],"x":[],"e":[]},"f8":{"D":[],"x":[],"e":[]},"f9":{"D":[],"x":[],"e":[]},"ca":{"D":[],"x":[],"e":[]},"az":{"e":[]},"af":{"e":[]},"fc":{"i":["af"],"n":["af"],"A":["af"],"l":["af"],"h":["af"],"i.E":"af"},"fd":{"i":["az"],"n":["az"],"A":["az"],"e":[],"l":["az"],"h":["az"],"i.E":"az"},"bI":{"j":[]},"fi":{"i":["aL"],"n":["aL"],"A":["aL"],"l":["aL"],"h":["aL"],"i.E":"aL"},"b3":{"j":[]},"fA":{"e":[]},"bn":{"ao":[],"j":[]},"ce":{"e":[]},"cf":{"x":[],"e":[]},"fI":{"i":["L"],"n":["L"],"A":["L"],"l":["L"],"h":["L"],"i.E":"L"},"dh":{"ab":["S"]},"fX":{"i":["aF?"],"n":["aF?"],"A":["aF?"],"l":["aF?"],"h":["aF?"],"i.E":"aF?"},"dm":{"i":["x"],"n":["x"],"A":["x"],"l":["x"],"h":["x"],"i.E":"x"},"hg":{"i":["aK"],"n":["aK"],"A":["aK"],"l":["aK"],"h":["aK"],"i.E":"aK"},"hn":{"i":["ay"],"n":["ay"],"A":["ay"],"l":["ay"],"h":["ay"],"i.E":"ay"},"fF":{"X":["z","z"],"H":["z","z"]},"fP":{"X":["z","z"],"H":["z","z"]},"cg":{"ap":[]},"d0":{"ap":[]},"dt":{"ap":[]},"hp":{"ap":[]},"ho":{"ap":[]},"dB":{"bE":[]},"e9":{"i":["D"],"n":["D"],"l":["D"],"h":["D"],"i.E":"D"},"ab":{"hb":["1"]},"el":{"i":["aV"],"n":["aV"],"l":["aV"],"h":["aV"],"i.E":"aV"},"eC":{"i":["aZ"],"n":["aZ"],"l":["aZ"],"h":["aZ"],"i.E":"aZ"},"c7":{"m":[],"D":[],"x":[],"e":[]},"f6":{"i":["z"],"n":["z"],"l":["z"],"h":["z"],"i.E":"z"},"m":{"D":[],"x":[],"e":[]},"fj":{"i":["b1"],"n":["b1"],"l":["b1"],"h":["b1"],"i.E":"b1"},"bk":{"n":["k"],"l":["k"],"h":["k"]},"dV":{"X":["z","@"],"H":["z","@"]},"dW":{"e":[]},"ba":{"e":[]},"eD":{"e":[]},"f1":{"i":["H<@,@>"],"n":["H<@,@>"],"l":["H<@,@>"],"h":["H<@,@>"],"i.E":"H<@,@>"},"aa":{"h":["1*"],"aa.T":"1"},"aS":{"V":[]},"aT":{"V":[]},"E":{"V":[]},"cR":{"V":[]},"c0":{"V":[]},"c1":{"V":[]},"eL":{"V":[]},"d6":{"V":[]},"dX":{"W":[]},"bA":{"W":[]},"cM":{"aa":["W*"],"h":["W*"],"aa.T":"W*"},"eK":{"W":[]},"f_":{"W":[]},"cu":{"Y":[]},"bV":{"aa":["Y*"],"Y":[],"h":["Y*"],"aa.T":"Y*"},"dc":{"Y":[]},"dd":{"Y":[]},"de":{"Y":[]},"ct":{"aa":["a7*"],"a7":[],"h":["a7*"],"aa.T":"a7*"},"cx":{"a7":[]},"cD":{"a7":[]},"eq":{"c8":[]},"eW":{"c8":[]},"e4":{"bb":[]},"eb":{"bb":[]},"ed":{"bb":[]},"eH":{"bb":[]}}'))
H.ph(v.typeUniverse,JSON.parse('{"a9":1,"l":1,"bg":1,"eo":2,"fD":1,"cG":1,"fv":1,"cb":1,"cv":2,"en":1,"c2":1,"bK":1,"d3":1,"f5":2,"dk":1,"cI":1,"cP":1,"cS":2,"hy":2,"cT":2,"dl":1,"dE":2,"e0":2,"e2":2,"ef":1,"fS":1,"N":1,"cH":1,"aS":1,"aT":1,"E":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",j:"May not create a face with a first vertex which is not attached to a shape.",i:"May not create a face with vertices attached to different shapes."}
var t=(function rtii(){var s=H.lR
return{D:s("bQ"),d:s("bw"),Y:s("bx"),G:s("l<@>"),h:s("D"),C:s("M"),aD:s("j"),c8:s("an"),bX:s("bU"),Z:s("aE"),v:s("bE"),fS:s("bW"),gk:s("bY"),o:s("w<ap>"),s:s("w<z>"),gn:s("w<@>"),t:s("w<k>"),x:s("w<dU*>"),bb:s("w<dX*>"),am:s("w<dY*>"),g0:s("w<dZ*>"),b7:s("w<bb*>"),cP:s("w<bA*>"),M:s("w<e6*>"),k:s("w<bd*>"),b:s("w<cE*>"),aZ:s("w<bX*>"),L:s("w<em*>"),u:s("w<n<bd*>*>"),B:s("w<iC*>"),h8:s("w<bh*>"),H:s("w<eJ*>"),cS:s("w<T*>"),d1:s("w<eM*>"),af:s("w<eK*>"),f2:s("w<a7*>"),du:s("w<f_*>"),cz:s("w<f0*>"),eG:s("w<d3<O*>*>"),i:s("w<z*>"),fG:s("w<fb*>"),bw:s("w<fe*>"),br:s("w<fk*>"),fj:s("w<fl*>"),d6:s("w<d7*>"),dv:s("w<d8*>"),hg:s("w<d9*>"),by:s("w<da*>"),fF:s("w<db*>"),j:s("w<fz*>"),m:s("w<a0*>"),V:s("w<k*>"),f:s("w<~(V*)*>"),T:s("cL"),eH:s("mf"),g:s("aG"),aU:s("A<@>"),h9:s("C<z*,c8*>"),cn:s("C<z*,f2*>"),dO:s("C<z*,z*>"),dL:s("C<z*,fh*>"),en:s("C<k*,n<d7*>*>"),bj:s("C<k*,n<d8*>*>"),gr:s("C<k*,n<da*>*>"),gb:s("C<k*,n<db*>*>"),J:s("C<k*,fn*>"),E:s("C<k*,aC*>"),a:s("C<k*,k*>"),aH:s("n<@>"),eO:s("H<@,@>"),eM:s("cU<z*,z>"),bK:s("c_"),bZ:s("cX"),dD:s("Z"),bm:s("c3"),P:s("at"),K:s("O"),I:s("ab<S>"),fv:s("mu"),ew:s("c7"),N:s("z"),g7:s("m"),bY:s("bj"),aW:s("ca"),aF:s("d5"),gc:s("bk"),ak:s("bJ"),U:s("cc<z,z>"),R:s("fx"),gH:s("cf"),ac:s("a3"),cJ:s("aC"),gR:s("a0"),z:s("@"),S:s("k"),fr:s("by*"),l:s("bC*"),gj:s("W*"),dn:s("cR*"),hc:s("bh*"),c:s("c0*"),F:s("c1*"),ah:s("Y*"),A:s("0&*"),_:s("O*"),bn:s("a7*"),X:s("z*"),eB:s("fg*"),eP:s("d6*"),n:s("fm*"),r:s("fo*"),y:s("fp*"),O:s("fq*"),q:s("d9*"),w:s("fr*"),Q:s("fs*"),e:s("k*"),dm:s("~(V*)*"),bG:s("me<at>?"),W:s("O?"),p:s("S")}})();(function constants(){var s=hunkHelpers.makeConstList
C.q=W.bx.prototype
C.i=W.by.prototype
C.R=W.bd.prototype
C.U=J.a.prototype
C.b=J.w.prototype
C.V=J.cJ.prototype
C.c=J.cK.prototype
C.j=J.cL.prototype
C.d=J.bF.prototype
C.a=J.aU.prototype
C.W=J.aG.prototype
C.C=J.eG.prototype
C.a3=P.eQ.prototype
C.D=W.d4.prototype
C.p=J.bJ.prototype
C.E=W.bn.prototype
C.F=W.ce.prototype
C.G=new E.bS("Browser.chrome")
C.r=new E.bS("Browser.firefox")
C.t=new E.bS("Browser.edge")
C.H=new E.bS("Browser.other")
C.a6=new P.hV()
C.I=new P.hU()
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

C.P=new P.eE()
C.e=new P.jJ()
C.Q=new P.jN()
C.f=new P.k9()
C.n=new P.bB(0)
C.S=new P.bB(5e6)
C.T=new P.ip("element",!1,!1,!1)
C.k=H.c(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.X=H.c(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.i)
C.l=H.c(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.m=H.c(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.Y=H.c(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.i)
C.w=H.c(s([]),t.i)
C.Z=H.c(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.x=H.c(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.c(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.y=H.c(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.z=H.c(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.A=H.c(s(["bind","if","ref","repeat","syntax"]),t.i)
C.o=H.c(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.i)
C.a_=new H.cw(0,{},C.w,H.lR("cw<z*,z*>"))
C.a0=new E.c4("OperatingSystem.windows")
C.B=new E.c4("OperatingSystem.mac")
C.a1=new E.c4("OperatingSystem.linux")
C.a2=new E.c4("OperatingSystem.other")
C.a4=new P.jK(!1)
C.a5=new P.ch(null,2)})();(function staticFields(){$.mT=null
$.aQ=0
$.m6=null
$.m5=null
$.nl=null
$.nf=null
$.nr=null
$.kI=null
$.kO=null
$.lT=null
$.cl=null
$.dJ=null
$.dK=null
$.lN=!1
$.aM=C.f
$.ah=H.c([],H.lR("w<O>"))
$.be=null
$.lg=null
$.mc=null
$.mb=null
$.di=P.lp(t.N,t.Z)
$.ib=null
$.mj=null
$.mn=null
$.b0=null
$.mw=null
$.mJ=null
$.mM=null
$.mL=null
$.jO=null
$.jP=null
$.jQ=null
$.mK=null
$.mO=null
$.mm=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"r3","ny",function(){return H.qC("_$dart_dartClosure")})
s($,"rg","nz",function(){return H.b2(H.jt({
toString:function(){return"$receiver$"}}))})
s($,"rh","nA",function(){return H.b2(H.jt({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"ri","nB",function(){return H.b2(H.jt(null))})
s($,"rj","nC",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"rm","nF",function(){return H.b2(H.jt(void 0))})
s($,"rn","nG",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"rl","nE",function(){return H.b2(H.mD(null))})
s($,"rk","nD",function(){return H.b2(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"rp","nI",function(){return H.b2(H.mD(void 0))})
s($,"ro","nH",function(){return H.b2(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"rF","lY",function(){return P.oV()})
s($,"rq","nJ",function(){return new P.jL().$0()})
s($,"rr","nK",function(){return new P.jM().$0()})
s($,"rG","nO",function(){return new Int8Array(H.cj(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rJ","nQ",function(){return P.oF("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rZ","nR",function(){return P.pD()})
s($,"rH","nP",function(){return P.mh(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"ry","nN",function(){return Z.aA(0)})
s($,"rs","nL",function(){return Z.aA(511)})
s($,"rA","aO",function(){return Z.aA(1)})
s($,"rz","bu",function(){return Z.aA(2)})
s($,"ru","bt",function(){return Z.aA(4)})
s($,"rB","bO",function(){return Z.aA(8)})
s($,"rC","bv",function(){return Z.aA(16)})
s($,"rv","dO",function(){return Z.aA(32)})
s($,"rw","dP",function(){return Z.aA(64)})
s($,"rx","nM",function(){return Z.aA(96)})
s($,"rD","cq",function(){return Z.aA(128)})
s($,"rt","bs",function(){return Z.aA(256)})
s($,"r1","nx",function(){return new V.ic()})
s($,"r0","G",function(){return $.nx()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cX,DataView:H.Z,ArrayBufferView:H.Z,Float32Array:H.bH,Float64Array:H.bH,Int16Array:H.ev,Int32Array:H.ew,Int8Array:H.ex,Uint16Array:H.ey,Uint32Array:H.ez,Uint8ClampedArray:H.cZ,CanvasPixelArray:H.cZ,Uint8Array:H.c3,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.hP,HTMLAnchorElement:W.dR,HTMLAreaElement:W.dS,HTMLBaseElement:W.bQ,Blob:W.bw,HTMLBodyElement:W.bx,HTMLCanvasElement:W.by,CDATASection:W.aD,CharacterData:W.aD,Comment:W.aD,ProcessingInstruction:W.aD,Text:W.aD,CSSPerspective:W.i_,CSSCharsetRule:W.L,CSSConditionRule:W.L,CSSFontFaceRule:W.L,CSSGroupingRule:W.L,CSSImportRule:W.L,CSSKeyframeRule:W.L,MozCSSKeyframeRule:W.L,WebKitCSSKeyframeRule:W.L,CSSKeyframesRule:W.L,MozCSSKeyframesRule:W.L,WebKitCSSKeyframesRule:W.L,CSSMediaRule:W.L,CSSNamespaceRule:W.L,CSSPageRule:W.L,CSSRule:W.L,CSSStyleRule:W.L,CSSSupportsRule:W.L,CSSViewportRule:W.L,CSSStyleDeclaration:W.cy,MSStyleCSSProperties:W.cy,CSS2Properties:W.cy,CSSImageValue:W.ar,CSSKeywordValue:W.ar,CSSNumericValue:W.ar,CSSPositionValue:W.ar,CSSResourceValue:W.ar,CSSUnitValue:W.ar,CSSURLImageValue:W.ar,CSSStyleValue:W.ar,CSSMatrixComponent:W.aR,CSSRotation:W.aR,CSSScale:W.aR,CSSSkew:W.aR,CSSTranslation:W.aR,CSSTransformComponent:W.aR,CSSTransformValue:W.i1,CSSUnparsedValue:W.i2,DataTransferItemList:W.i3,HTMLDivElement:W.bd,DOMException:W.i4,ClientRectList:W.cz,DOMRectList:W.cz,DOMRectReadOnly:W.cA,DOMStringList:W.e7,DOMTokenList:W.i5,Element:W.D,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.an,FileList:W.bU,FileWriter:W.e8,HTMLFormElement:W.ea,Gamepad:W.aF,History:W.im,HTMLCollection:W.bD,HTMLFormControlsCollection:W.bD,HTMLOptionsCollection:W.bD,ImageData:W.bE,HTMLImageElement:W.bW,HTMLInputElement:W.bY,KeyboardEvent:W.bG,Location:W.iz,MediaList:W.iR,MessagePort:W.c_,MIDIInputMap:W.es,MIDIOutputMap:W.et,MimeType:W.aH,MimeTypeArray:W.eu,PointerEvent:W.ao,MouseEvent:W.ao,DragEvent:W.ao,Document:W.x,DocumentFragment:W.x,HTMLDocument:W.x,ShadowRoot:W.x,XMLDocument:W.x,DocumentType:W.x,Node:W.x,NodeList:W.d_,RadioNodeList:W.d_,Plugin:W.aI,PluginArray:W.eI,RTCStatsReport:W.eR,HTMLSelectElement:W.eT,SourceBuffer:W.ax,SourceBufferList:W.eY,SpeechGrammar:W.aJ,SpeechGrammarList:W.eZ,SpeechRecognitionResult:W.aK,Storage:W.f4,CSSStyleSheet:W.ay,StyleSheet:W.ay,HTMLTableCellElement:W.bj,HTMLTableDataCellElement:W.bj,HTMLTableHeaderCellElement:W.bj,HTMLTableElement:W.d4,HTMLTableRowElement:W.f8,HTMLTableSectionElement:W.f9,HTMLTemplateElement:W.ca,TextTrack:W.az,TextTrackCue:W.af,VTTCue:W.af,TextTrackCueList:W.fc,TextTrackList:W.fd,TimeRanges:W.jn,Touch:W.aL,TouchEvent:W.bI,TouchList:W.fi,TrackDefaultList:W.jr,CompositionEvent:W.b3,FocusEvent:W.b3,TextEvent:W.b3,UIEvent:W.b3,URL:W.jI,VideoTrackList:W.fA,WheelEvent:W.bn,Window:W.ce,DOMWindow:W.ce,Attr:W.cf,CSSRuleList:W.fI,ClientRect:W.dh,DOMRect:W.dh,GamepadList:W.fX,NamedNodeMap:W.dm,MozNamedAttrMap:W.dm,SpeechRecognitionResultList:W.hg,StyleSheetList:W.hn,SVGLength:P.aV,SVGLengthList:P.el,SVGNumber:P.aZ,SVGNumberList:P.eC,SVGPointList:P.iZ,SVGScriptElement:P.c7,SVGStringList:P.f6,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.b1,SVGTransformList:P.fj,AudioBuffer:P.hS,AudioParamMap:P.dV,AudioTrackList:P.dW,AudioContext:P.ba,webkitAudioContext:P.ba,BaseAudioContext:P.ba,OfflineAudioContext:P.eD,WebGL2RenderingContext:P.eQ,SQLResultSetRowList:P.f1})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.dn.$nativeSuperclassTag="ArrayBufferView"
H.dp.$nativeSuperclassTag="ArrayBufferView"
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.dq.$nativeSuperclassTag="ArrayBufferView"
H.dr.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
W.du.$nativeSuperclassTag="EventTarget"
W.dv.$nativeSuperclassTag="EventTarget"
W.dx.$nativeSuperclassTag="EventTarget"
W.dy.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.np,[])
else T.np([])})})()
//# sourceMappingURL=test.dart.js.map
