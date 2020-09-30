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
a[c]=function(){a[c]=function(){H.qY(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lU(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={ls:function ls(){},
lu:function(a){return new H.ee(a)},
kF:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
oA:function(a,b,c,d){if(t.G.b(a))return new H.cx(a,b,c.K("@<0>").b3(d).K("cx<1,2>"))
return new H.aU(a,b,c.K("@<0>").b3(d).K("aU<1,2>"))},
il:function(){return new P.c6("No element")},
oq:function(){return new P.c6("Too many elements")},
oV:function(a,b){var s=J.aN(a)
if(typeof s!=="number")return s.a0()
H.eR(a,0,s-1,b)},
eR:function(a,b,c,d){if(c-b<=32)H.oU(a,b,c,d)
else H.oT(a,b,c,d)},
oU:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b3(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a7()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
oT:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a8(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a8(a6+a7,2),d=e-h,c=e+h,b=J.b3(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
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
if(J.J(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.ah()
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
if(typeof j!=="number")return j.ah()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a7()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a7()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ah()
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
H.eR(a5,a6,r-2,a8)
H.eR(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.J(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.J(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ah()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}H.eR(a5,r,q,a8)}else H.eR(a5,r,q,a8)},
ee:function ee(a){this.a=a},
p:function p(a){this.a=a},
l:function l(){},
cL:function cL(){},
bd:function bd(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.$ti=c},
ei:function ei(a,b){this.a=null
this.b=a
this.c=b},
cP:function cP(a,b,c){this.a=a
this.b=b
this.$ti=c},
b1:function b1(a,b,c){this.a=a
this.b=b
this.$ti=c},
fy:function fy(a,b){this.a=a
this.b=b},
cB:function cB(){},
fp:function fp(){},
c8:function c8(){},
oj:function(){throw H.b(P.B("Cannot modify unmodifiable Map"))},
nF:function(a){var s,r=H.nE(a)
if(r!=null)return r
s="minified:"+a
return s},
nw:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a7(a)
if(typeof s!="string")throw H.b(H.ay(a))
return s},
cW:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mx:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.b(P.a5(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.F(q,o)|32)>r)return n}return parseInt(a,b)},
eI:function(a){return H.oD(a)},
oD:function(a){var s,r,q
if(a instanceof P.O)return H.an(H.bI(a),null)
if(J.dF(a)===C.U||t.ak.b(a)){s=C.u(a)
if(H.mw(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.mw(q))return q}}return H.an(H.bI(a),null)},
mw:function(a){var s=a!=="Object"&&a!==""
return s},
oE:function(){if(!!self.location)return self.location.href
return null},
mv:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oM:function(a){var s,r,q,p=H.c([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.cg(q))throw H.b(H.ay(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aU(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.ay(q))}return H.mv(p)},
my:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cg(q))throw H.b(H.ay(q))
if(q<0)throw H.b(H.ay(q))
if(q>65535)return H.oM(a)}return H.mv(a)},
oN:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.iy()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
as:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aU(s,10))>>>0,56320|s&1023)}}throw H.b(P.a5(a,0,1114111,null,null))},
c2:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oL:function(a){var s=H.c2(a).getFullYear()+0
return s},
oJ:function(a){var s=H.c2(a).getMonth()+1
return s},
oF:function(a){var s=H.c2(a).getDate()+0
return s},
oG:function(a){var s=H.c2(a).getHours()+0
return s},
oI:function(a){var s=H.c2(a).getMinutes()+0
return s},
oK:function(a){var s=H.c2(a).getSeconds()+0
return s},
oH:function(a){var s=H.c2(a).getMilliseconds()+0
return s},
w:function(a){throw H.b(H.ay(a))},
d:function(a,b){if(a==null)J.aN(a)
throw H.b(H.ck(a,b))},
ck:function(a,b){var s,r,q="index"
if(!H.cg(b))return new P.ai(!0,b,q,null)
s=J.aN(a)
if(!(b<0)){if(typeof s!=="number")return H.w(s)
r=b>=s}else r=!0
if(r)return P.Q(b,a,q,null,s)
return P.eJ(b,q)},
qG:function(a,b,c){if(a>c)return P.a5(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a5(b,a,c,"end",null)
return new P.ai(!0,b,"end",null)},
ay:function(a){return new P.ai(!0,a,null,null)},
qB:function(a){if(typeof a!="number")throw H.b(H.ay(a))
return a},
b:function(a){var s,r
if(a==null)a=new P.ew()
s=new Error()
s.dartException=a
r=H.qZ
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qZ:function(){return J.a7(this.dartException)},
q:function(a){throw H.b(a)},
o:function(a){throw H.b(P.b9(a))},
b_:function(a){var s,r,q,p,o,n
a=H.nA(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jo(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
jp:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mL:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mq:function(a,b){return new H.ev(a,b==null?null:b.method)},
lt:function(a,b){var s=b==null,r=s?null:b.method
return new H.ec(a,r,s?null:b.receiver)},
ag:function(a){if(a==null)return new H.iT(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bJ(a,a.dartException)
return H.qx(a)},
bJ:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qx:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aU(r,16)&8191)===10)switch(q){case 438:return H.bJ(a,H.lt(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bJ(a,H.mq(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.nI()
o=$.nJ()
n=$.nK()
m=$.nL()
l=$.nO()
k=$.nP()
j=$.nN()
$.nM()
i=$.nR()
h=$.nQ()
g=p.ao(s)
if(g!=null)return H.bJ(a,H.lt(s,g))
else{g=o.ao(s)
if(g!=null){g.method="call"
return H.bJ(a,H.lt(s,g))}else{g=n.ao(s)
if(g==null){g=m.ao(s)
if(g==null){g=l.ao(s)
if(g==null){g=k.ao(s)
if(g==null){g=j.ao(s)
if(g==null){g=m.ao(s)
if(g==null){g=i.ao(s)
if(g==null){g=h.ao(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bJ(a,H.mq(s,g))}}return H.bJ(a,new H.fo(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cX()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bJ(a,new P.ai(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cX()
return a},
lX:function(a){var s
if(a==null)return new H.he(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.he(a)},
qI:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
qQ:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.v("Unsupported number of arguments for wrapped closure"))},
cj:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qQ)
a.$identity=s
return s},
oi:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.eY().constructor.prototype):Object.create(new H.bO(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aO
if(typeof r!=="number")return r.B()
$.aO=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.me(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.oe(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.me(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
oe:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nu,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.oc:H.ob
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
of:function(a,b,c,d){var s=H.md
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
me:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.oh(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.of(r,!p,s,b)
if(r===0){p=$.aO
if(typeof p!=="number")return p.B()
$.aO=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.lh())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aO
if(typeof p!=="number")return p.B()
$.aO=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.lh())+"."+H.f(s)+"("+m+");}")()},
og:function(a,b,c,d){var s=H.md,r=H.od
switch(b?-1:a){case 0:throw H.b(new H.eN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
oh:function(a,b){var s,r,q,p,o,n,m=H.lh(),l=$.mb
if(l==null)l=$.mb=H.ma("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.og(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aO
if(typeof o!=="number")return o.B()
$.aO=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aO
if(typeof o!=="number")return o.B()
$.aO=o+1
return new Function(p+o+"}")()},
lU:function(a,b,c,d,e,f,g){return H.oi(a,b,c,d,!!e,!!f,g)},
ob:function(a,b){return H.hs(v.typeUniverse,H.bI(a.a),b)},
oc:function(a,b){return H.hs(v.typeUniverse,H.bI(a.c),b)},
md:function(a){return a.a},
od:function(a){return a.c},
lh:function(){var s=$.mc
return s==null?$.mc=H.ma("self"):s},
ma:function(a){var s,r,q,p=new H.bO("self","target","receiver","name"),o=J.lr(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.bM("Field name "+a+" not found."))},
qY:function(a){throw H.b(new P.dX(a))},
qK:function(a){return v.getIsolateTag(a)},
t5:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qT:function(a){var s,r,q,p,o,n=$.nt.$1(a),m=$.kE[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kK[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.nm.$2(a,n)
if(q!=null){m=$.kE[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kK[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.l8(s)
$.kE[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kK[n]=s
return s}if(p==="-"){o=H.l8(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ny(a,s)
if(p==="*")throw H.b(P.jy(n))
if(v.leafTags[n]===true){o=H.l8(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ny(a,s)},
ny:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lZ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
l8:function(a){return J.lZ(a,!1,null,!!a.$iA)},
qU:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.l8(s)
else return J.lZ(s,c,null,null)},
qO:function(){if(!0===$.lY)return
$.lY=!0
H.qP()},
qP:function(){var s,r,q,p,o,n,m,l
$.kE=Object.create(null)
$.kK=Object.create(null)
H.qN()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nz.$1(o)
if(n!=null){m=H.qU(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qN:function(){var s,r,q,p,o,n,m=C.J()
m=H.ci(C.K,H.ci(C.L,H.ci(C.v,H.ci(C.v,H.ci(C.M,H.ci(C.N,H.ci(C.O(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nt=new H.kG(p)
$.nm=new H.kH(o)
$.nz=new H.kI(n)},
ci:function(a,b){return a(b)||b},
ou:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.a3("Illegal RegExp pattern ("+String(n)+")",a,null))},
nC:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qH:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nA:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m1:function(a,b,c){var s=H.qX(a,b,c)
return s},
qX:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nA(b),'g'),H.qH(c))},
cr:function cr(){},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jo:function jo(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ev:function ev(a,b){this.a=a
this.b=b},
ec:function ec(a,b,c){this.a=a
this.b=b
this.c=c},
fo:function fo(a){this.a=a},
iT:function iT(a){this.a=a},
he:function he(a){this.a=a
this.b=null},
bu:function bu(){},
f4:function f4(){},
eY:function eY(){},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eN:function eN(a){this.a=a},
D:function D(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
io:function io(a){this.a=a},
ir:function ir(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cI:function cI(a,b){this.a=a
this.$ti=b},
eh:function eh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
eb:function eb(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cf:function(a){return a},
b2:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.ck(b,a))},
pL:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.qG(a,b,c))
return b},
cR:function cR(){},
Y:function Y(){},
c_:function c_(){},
bC:function bC(){},
cS:function cS(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
cT:function cT(){},
c0:function c0(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
oR:function(a,b){var s=b.c
return s==null?b.c=H.lI(a,b.z,!0):s},
mF:function(a,b){var s=b.c
return s==null?b.c=H.dv(a,"mk",[b.z]):s},
mG:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mG(a.z)
return s===11||s===12},
oQ:function(a){return a.cy},
lW:function(a){return H.lJ(v.typeUniverse,a,!1)},
bm:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bm(a,s,a0,a1)
if(r===s)return b
return H.n7(a,r,!0)
case 7:s=b.z
r=H.bm(a,s,a0,a1)
if(r===s)return b
return H.lI(a,r,!0)
case 8:s=b.z
r=H.bm(a,s,a0,a1)
if(r===s)return b
return H.n6(a,r,!0)
case 9:q=b.Q
p=H.dE(a,q,a0,a1)
if(p===q)return b
return H.dv(a,b.z,p)
case 10:o=b.z
n=H.bm(a,o,a0,a1)
m=b.Q
l=H.dE(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lG(a,n,l)
case 11:k=b.z
j=H.bm(a,k,a0,a1)
i=b.Q
h=H.qu(a,i,a0,a1)
if(j===k&&h===i)return b
return H.n5(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dE(a,g,a0,a1)
o=b.z
n=H.bm(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lH(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.hL("Attempted to substitute unexpected RTI kind "+c))}},
dE:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bm(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qv:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bm(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
qu:function(a,b,c,d){var s,r=b.a,q=H.dE(a,r,c,d),p=b.b,o=H.dE(a,p,c,d),n=b.c,m=H.qv(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fR()
s.a=q
s.b=o
s.c=m
return s},
c:function(a,b){a[v.arrayRti]=b
return a},
qC:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.nu(s)
return a.$S()}return null},
nv:function(a,b){var s
if(H.mG(b))if(a instanceof H.bu){s=H.qC(a)
if(s!=null)return s}return H.bI(a)},
bI:function(a){var s
if(a instanceof P.O){s=a.$ti
return s!=null?s:H.lQ(a)}if(Array.isArray(a))return H.lO(a)
return H.lQ(J.dF(a))},
lO:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dB:function(a){var s=a.$ti
return s!=null?s:H.lQ(a)},
lQ:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pS(a,s)},
pS:function(a,b){var s=a instanceof H.bu?a.__proto__.__proto__.constructor:b,r=H.pt(v.typeUniverse,s.name)
b.$ccache=r
return r},
nu:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lJ(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pR:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dA(q,a,H.pW)
if(!H.b4(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dA(q,a,H.pZ)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cg
else if(s===t.gR||s===t.H)r=H.pV
else if(s===t.N)r=H.pX
else r=s===t.cJ?H.lR:null
if(r!=null)return H.dA(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.qR)){q.r="$i"+p
return H.dA(q,a,H.pY)}}else if(p===7)return H.dA(q,a,H.pP)
return H.dA(q,a,H.pN)},
dA:function(a,b,c){a.b=c
return a.b(b)},
pQ:function(a){var s,r,q=this
if(!H.b4(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.pK
else if(q===t.K)r=H.pJ
else r=H.pO
q.a=r
return q.a(a)},
qn:function(a){var s,r=a.y
if(!H.b4(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
pN:function(a){var s=this
if(a==null)return H.qn(s)
return H.Z(v.typeUniverse,H.nv(a,s),null,s,null)},
pP:function(a){if(a==null)return!0
return this.z.b(a)},
pY:function(a){var s=this,r=s.r
if(a instanceof P.O)return!!a[r]
return!!J.dF(a)[r]},
t3:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ng(a,s)},
pO:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ng(a,s)},
ng:function(a,b){throw H.b(H.pj(H.mY(a,H.nv(a,b),H.an(b,null))))},
mY:function(a,b,c){var s=P.i8(a),r=H.an(b==null?H.bI(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
pj:function(a){return new H.dt("TypeError: "+a)},
ab:function(a,b){return new H.dt("TypeError: "+H.mY(a,null,b))},
pW:function(a){return a!=null},
pJ:function(a){return a},
pZ:function(a){return!0},
pK:function(a){return a},
lR:function(a){return!0===a||!1===a},
rQ:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.ab(a,"bool"))},
rS:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.ab(a,"bool"))},
rR:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.ab(a,"bool?"))},
rT:function(a){if(typeof a=="number")return a
throw H.b(H.ab(a,"double"))},
rV:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ab(a,"double"))},
rU:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ab(a,"double?"))},
cg:function(a){return typeof a=="number"&&Math.floor(a)===a},
rW:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.ab(a,"int"))},
rY:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.ab(a,"int"))},
rX:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.ab(a,"int?"))},
pV:function(a){return typeof a=="number"},
rZ:function(a){if(typeof a=="number")return a
throw H.b(H.ab(a,"num"))},
t0:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ab(a,"num"))},
t_:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ab(a,"num?"))},
pX:function(a){return typeof a=="string"},
t1:function(a){if(typeof a=="string")return a
throw H.b(H.ab(a,"String"))},
lP:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.ab(a,"String"))},
t2:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.ab(a,"String?"))},
qq:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.B(r,H.an(a[q],b))
return s},
nh:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.c([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.W,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.d(a6,i)
l=C.a.B(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.B(" extends ",H.an(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.an(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.B(a3,H.an(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.B(a3,H.an(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.m4(H.an(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.f(a1)},
an:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.an(a.z,b)
return s}if(l===7){r=a.z
s=H.an(r,b)
q=r.y
return J.m4(q===11||q===12?C.a.B("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.an(a.z,b))+">"
if(l===9){p=H.qw(a.z)
o=a.Q
return o.length!==0?p+("<"+H.qq(o,b)+">"):p}if(l===11)return H.nh(a,b,null)
if(l===12)return H.nh(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
qw:function(a){var s,r=H.nE(a)
if(r!=null)return r
s="minified:"+a
return s},
n8:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pt:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lJ(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dw(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dv(a,b,q)
n[b]=o
return o}else return m},
pr:function(a,b){return H.nf(a.tR,b)},
pq:function(a,b){return H.nf(a.eT,b)},
lJ:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.n3(H.n1(a,null,b,c))
r.set(b,s)
return s},
hs:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.n3(H.n1(a,b,c,!0))
q.set(c,r)
return r},
ps:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lG(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bl:function(a,b){b.a=H.pQ
b.b=H.pR
return b},
dw:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.at(null,null)
s.y=b
s.cy=c
r=H.bl(a,s)
a.eC.set(c,r)
return r},
n7:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.po(a,b,r,c)
a.eC.set(r,s)
return s},
po:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b4(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.at(null,null)
q.y=6
q.z=b
q.cy=c
return H.bl(a,q)},
lI:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.pn(a,b,r,c)
a.eC.set(r,s)
return s},
pn:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b4(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.kL(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.kL(q.z))return q
else return H.oR(a,b)}}p=new H.at(null,null)
p.y=7
p.z=b
p.cy=c
return H.bl(a,p)},
n6:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.pl(a,b,r,c)
a.eC.set(r,s)
return s},
pl:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b4(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dv(a,"mk",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.at(null,null)
q.y=8
q.z=b
q.cy=c
return H.bl(a,q)},
pp:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.at(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bl(a,s)
a.eC.set(q,r)
return r},
hr:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
pk:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dv:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hr(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.at(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bl(a,r)
a.eC.set(p,q)
return q},
lG:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hr(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.at(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bl(a,o)
a.eC.set(q,n)
return n},
n5:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hr(m)
if(j>0){s=l>0?",":""
r=H.hr(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.pk(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.at(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bl(a,o)
a.eC.set(q,r)
return r},
lH:function(a,b,c,d){var s,r=b.cy+("<"+H.hr(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.pm(a,b,c,r,d)
a.eC.set(r,s)
return s},
pm:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bm(a,b,r,0)
m=H.dE(a,c,r,0)
return H.lH(a,n,m,c!==m)}}l=new H.at(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bl(a,l)},
n1:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
n3:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.pd(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.n2(a,r,g,f,!1)
else if(q===46)r=H.n2(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bk(a.u,a.e,f.pop()))
break
case 94:f.push(H.pp(a.u,f.pop()))
break
case 35:f.push(H.dw(a.u,5,"#"))
break
case 64:f.push(H.dw(a.u,2,"@"))
break
case 126:f.push(H.dw(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.lF(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dv(p,n,o))
else{m=H.bk(p,a.e,n)
switch(m.y){case 11:f.push(H.lH(p,m,o,a.n))
break
default:f.push(H.lG(p,m,o))
break}}break
case 38:H.pe(a,f)
break
case 42:l=a.u
f.push(H.n7(l,H.bk(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.lI(l,H.bk(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.n6(l,H.bk(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fR()
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
H.lF(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.n5(p,H.bk(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.lF(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.pg(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bk(a.u,a.e,h)},
pd:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
n2:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.n8(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.oQ(o)+'"')
d.push(H.hs(s,o,n))}else d.push(p)
return m},
pe:function(a,b){var s=b.pop()
if(0===s){b.push(H.dw(a.u,1,"0&"))
return}if(1===s){b.push(H.dw(a.u,4,"1&"))
return}throw H.b(P.hL("Unexpected extended operation "+H.f(s)))},
bk:function(a,b,c){if(typeof c=="string")return H.dv(a,c,a.sEA)
else if(typeof c=="number")return H.pf(a,b,c)
else return c},
lF:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bk(a,b,c[s])},
pg:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bk(a,b,c[s])},
pf:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.hL("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.hL("Bad index "+c+" for "+b.i(0)))},
Z:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b4(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b4(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.Z(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.Z(a,b.z,c,d,e)
if(p===6){s=d.z
return H.Z(a,b,c,s,e)}if(r===8){if(!H.Z(a,b.z,c,d,e))return!1
return H.Z(a,H.mF(a,b),c,d,e)}if(r===7){s=H.Z(a,b.z,c,d,e)
return s}if(p===8){if(H.Z(a,b,c,d.z,e))return!0
return H.Z(a,b,c,H.mF(a,d),e)}if(p===7){s=H.Z(a,b,c,d.z,e)
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
if(!H.Z(a,k,c,j,e)||!H.Z(a,j,e,k,c))return!1}return H.ni(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.ni(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pU(a,b,c,d,e)}return!1},
ni:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.Z(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.Z(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.Z(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.Z(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.Z(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pU:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.Z(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.n8(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.Z(a,H.hs(a,b,l[p]),c,r[p],e))return!1
return!0},
kL:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b4(a))if(r!==7)if(!(r===6&&H.kL(a.z)))s=r===8&&H.kL(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qR:function(a){var s
if(!H.b4(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
b4:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
nf:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
at:function at(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fR:function fR(){this.c=this.b=this.a=null},
fM:function fM(){},
dt:function dt(a){this.a=a},
nE:function(a){return v.mangledGlobalNames[a]},
qV:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hG:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lY==null){H.qO()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.b(P.jy("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.mm()]
if(p!=null)return p
p=H.qT(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,J.mm(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
mm:function(){var s=$.n_
return s==null?$.n_=v.getIsolateTag("_$dart_js"):s},
or:function(a,b){if(!H.cg(a))throw H.b(P.m8(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a5(a,0,4294967295,"length",null))
return J.os(new Array(a),b)},
lq:function(a,b){if(!H.cg(a)||a<0)throw H.b(P.bM("Length must be a non-negative integer: "+H.f(a)))
return H.c(new Array(a),b.K("x<0>"))},
os:function(a,b){return J.lr(H.c(a,b.K("x<0>")))},
lr:function(a){a.fixed$length=Array
return a},
ot:function(a,b){return J.dJ(a,b)},
dF:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cF.prototype
return J.cE.prototype}if(typeof a=="string")return J.aS.prototype
if(a==null)return J.cG.prototype
if(typeof a=="boolean")return J.ea.prototype
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.O)return a
return J.hG(a)},
qJ:function(a){if(typeof a=="number")return J.bA.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.O)return a
return J.hG(a)},
b3:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.O)return a
return J.hG(a)},
hF:function(a){if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.O)return a
return J.hG(a)},
ns:function(a){if(typeof a=="number")return J.bA.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bE.prototype
return a},
dG:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bE.prototype
return a},
aL:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.O)return a
return J.hG(a)},
m4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qJ(a).B(a,b)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dF(a).v(a,b)},
m5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ns(a).w(a,b)},
cn:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nw(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b3(a).h(a,b)},
ld:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.nw(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hF(a).l(a,b,c)},
o0:function(a,b){return J.dG(a).F(a,b)},
o1:function(a,b,c){return J.aL(a).h1(a,b,c)},
o2:function(a,b,c,d){return J.aL(a).hn(a,b,c,d)},
o3:function(a,b){return J.dG(a).W(a,b)},
dJ:function(a,b){return J.ns(a).aX(a,b)},
le:function(a,b){return J.b3(a).G(a,b)},
hJ:function(a,b){return J.hF(a).J(a,b)},
o4:function(a,b,c,d){return J.aL(a).hM(a,b,c,d)},
lf:function(a,b){return J.hF(a).I(a,b)},
o5:function(a){return J.aL(a).ghs(a)},
lg:function(a){return J.aL(a).gdH(a)},
o6:function(a){return J.aL(a).gdK(a)},
ah:function(a){return J.dF(a).gS(a)},
b5:function(a){return J.hF(a).gO(a)},
aN:function(a){return J.b3(a).gm(a)},
m6:function(a){return J.hF(a).ih(a)},
o7:function(a,b){return J.aL(a).ik(a,b)},
o8:function(a,b,c){return J.dG(a).t(a,b,c)},
o9:function(a){return J.dG(a).iu(a)},
a7:function(a){return J.dF(a).i(a)},
a:function a(){},
ea:function ea(){},
cG:function cG(){},
bc:function bc(){},
eB:function eB(){},
bE:function bE(){},
aE:function aE(){},
x:function x(a){this.$ti=a},
im:function im(a){this.$ti=a},
a8:function a8(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bA:function bA(){},
cF:function cF(){},
cE:function cE(){},
aS:function aS(){}},P={
p3:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qy()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cj(new P.jZ(q),1)).observe(s,{childList:true})
return new P.jY(q,s,r)}else if(self.setImmediate!=null)return P.qz()
return P.qA()},
p4:function(a){self.scheduleImmediate(H.cj(new P.k_(a),0))},
p5:function(a){self.setImmediate(H.cj(new P.k0(a),0))},
p6:function(a){P.lz(C.n,a)},
lz:function(a,b){var s=C.c.a8(a.a,1000)
return P.ph(s<0?0:s,b)},
mK:function(a,b){var s=C.c.a8(a.a,1000)
return P.pi(s<0?0:s,b)},
ph:function(a,b){var s=new P.ds()
s.eD(a,b)
return s},
pi:function(a,b){var s=new P.ds()
s.eE(a,b)
return s},
rO:function(a){return new P.cd(a,1)},
p9:function(){return C.a5},
pa:function(a){return new P.cd(a,3)},
q0:function(a,b){return new P.dp(a,b.K("dp<0>"))},
qm:function(){var s,r
for(s=$.ch;s!=null;s=$.ch){$.dD=null
r=s.b
$.ch=r
if(r==null)$.dC=null
s.a.$0()}},
qt:function(){$.lS=!0
try{P.qm()}finally{$.dD=null
$.lS=!1
if($.ch!=null)$.m3().$1(P.nn())}},
qr:function(a){var s=new P.fz(a),r=$.dC
if(r==null){$.ch=$.dC=s
if(!$.lS)$.m3().$1(P.nn())}else $.dC=r.b=s},
qs:function(a){var s,r,q,p=$.ch
if(p==null){P.qr(a)
$.dD=$.dC
return}s=new P.fz(a)
r=$.dD
if(r==null){s.b=p
$.ch=$.dD=s}else{q=r.b
s.b=q
$.dD=r.b=s
if(q==null)$.dC=s}},
mJ:function(a,b){var s=$.aK
if(s===C.f)return P.lz(a,b)
return P.lz(a,s.ht(b))},
oY:function(a,b){var s=$.aK
if(s===C.f)return P.mK(a,b)
return P.mK(a,s.dE(b,t.aF))},
nj:function(a,b,c,d,e){P.qs(new P.kx(d,e))},
qo:function(a,b,c,d){var s,r=$.aK
if(r===c)return d.$0()
$.aK=c
s=r
try{r=d.$0()
return r}finally{$.aK=s}},
qp:function(a,b,c,d,e){var s,r=$.aK
if(r===c)return d.$1(e)
$.aK=c
s=r
try{r=d.$1(e)
return r}finally{$.aK=s}},
jZ:function jZ(a){this.a=a},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
ds:function ds(){this.c=0},
kh:function kh(a,b){this.a=a
this.b=b},
kg:function kg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cd:function cd(a,b){this.a=a
this.b=b},
bG:function bG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dp:function dp(a,b){this.a=a
this.$ti=b},
fz:function fz(a){this.a=a
this.b=null},
cY:function cY(){},
f_:function f_(){},
d_:function d_(){},
ko:function ko(){},
kx:function kx(a,b){this.a=a
this.b=b},
k5:function k5(){},
k6:function k6(a,b){this.a=a
this.b=b},
k7:function k7(a,b,c){this.a=a
this.b=b
this.c=c},
ow:function(a,b){return new H.D(a.K("@<0>").b3(b).K("D<1,2>"))},
ox:function(a,b,c){return H.qI(a,new H.D(b.K("@<0>").b3(c).K("D<1,2>")))},
lv:function(a,b){return new H.D(a.K("@<0>").b3(b).K("D<1,2>"))},
cJ:function(a){return new P.dc(a.K("dc<0>"))},
lE:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
pc:function(a,b){var s=new P.dd(a,b)
s.c=a.e
return s},
op:function(a,b,c){var s,r
if(P.lT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.c([],t.s)
$.af.push(a)
try{P.q_(a,s)}finally{if(0>=$.af.length)return H.d($.af,-1)
$.af.pop()}r=P.mH(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
lp:function(a,b,c){var s,r
if(P.lT(a))return b+"..."+c
s=new P.T(b)
$.af.push(a)
try{r=s
r.a=P.mH(r.a,a,", ")}finally{if(0>=$.af.length)return H.d($.af,-1)
$.af.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lT:function(a){var s,r
for(s=$.af.length,r=0;r<s;++r)if(a===$.af[r])return!0
return!1},
q_:function(a,b){var s,r,q,p,o,n,m,l=a.gO(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.f(l.gC(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.u()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.u();p=o,o=n){n=l.gC(l);++j
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
oy:function(a,b,c){var s=P.ow(b,c)
a.I(0,new P.is(s,b,c))
return s},
mn:function(a,b){var s,r,q=P.cJ(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)q.n(0,b.a(a[r]))
return q},
lx:function(a){var s,r={}
if(P.lT(a))return"{...}"
s=new P.T("")
try{$.af.push(a)
s.a+="{"
r.a=!0
J.lf(a,new P.iw(r,s))
s.a+="}"}finally{if(0>=$.af.length)return H.d($.af,-1)
$.af.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dc:function dc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k4:function k4(a){this.a=a
this.c=this.b=null},
dd:function dd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cD:function cD(){},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(){},
i:function i(){},
cN:function cN(){},
iw:function iw(a,b){this.a=a
this.b=b},
W:function W(){},
ht:function ht(){},
cO:function cO(){},
c9:function c9(a,b){this.a=a
this.$ti=b},
dk:function dk(){},
de:function de(){},
dx:function dx(){},
p0:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.p1(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
p1:function(a,b,c,d){var s=a?$.nT():$.nS()
if(s==null)return null
if(0===c&&d===b.length)return P.mQ(s,b)
return P.mQ(s,b.subarray(c,P.bg(c,d,b.length)))},
mQ:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ag(r)}return null},
m9:function(a,b,c,d,e,f){if(C.c.bl(f,4)!==0)throw H.b(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
pI:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pH:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.a0()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.b3(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.al()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.d(r,o)
r[o]=n}return r},
jH:function jH(){},
jI:function jI(){},
hP:function hP(){},
hQ:function hQ(){},
dU:function dU(){},
dW:function dW(){},
i5:function i5(){},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
ii:function ii(a){this.a=a},
jF:function jF(){},
jJ:function jJ(){},
km:function km(a){this.b=0
this.c=a},
jG:function jG(a){this.a=a},
kl:function kl(a){this.a=a
this.b=16
this.c=0},
kJ:function(a,b){var s=H.mx(a,b)
if(s!=null)return s
throw H.b(P.a3(a,null,null))},
on:function(a){if(a instanceof H.bu)return a.i(0)
return"Instance of '"+H.f(H.eI(a))+"'"},
it:function(a,b,c,d){var s,r=c?J.lq(a,d):J.or(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
lw:function(a,b,c){var s,r=H.c([],c.K("x<0>"))
for(s=J.b5(a);s.u();)r.push(s.gC(s))
if(b)return r
return J.lr(r)},
oz:function(a,b,c){var s,r,q=J.lq(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
f1:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bg(b,c,r)
if(b<=0){if(typeof c!=="number")return c.ah()
q=c<r}else q=!0
return H.my(q?s.slice(b,c):s)}if(t.bm.b(a))return H.oN(a,b,P.bg(b,c,a.length))
return P.oW(a,b,c)},
oW:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a5(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a5(c,b,a.length,o,o))
r=J.b5(a)
for(q=0;q<b;++q)if(!r.u())throw H.b(P.a5(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gC(r))
else for(q=b;q<c;++q){if(!r.u())throw H.b(P.a5(c,b,q,o,o))
p.push(r.gC(r))}return H.my(p)},
oO:function(a){return new H.eb(a,H.ou(a,!1,!0,!1,!1,!1))},
mH:function(a,b,c){var s=J.b5(b)
if(!s.u())return a
if(c.length===0){do a+=H.f(s.gC(s))
while(s.u())}else{a+=H.f(s.gC(s))
for(;s.u();)a=a+c+H.f(s.gC(s))}return a},
mN:function(){var s=H.oE()
if(s!=null)return P.p_(s)
throw H.b(P.B("'Uri.base' is not supported"))},
kk:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nZ().b
if(typeof b!="string")H.q(H.ay(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghL().cj(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.as(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
ok:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
ol:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dZ:function(a){if(a>=10)return""+a
return"0"+a},
mg:function(a){return new P.bw(1000*a)},
i8:function(a){if(typeof a=="number"||H.lR(a)||null==a)return J.a7(a)
if(typeof a=="string")return JSON.stringify(a)
return P.on(a)},
hL:function(a){return new P.dM(a)},
bM:function(a){return new P.ai(!1,null,null,a)},
m8:function(a,b,c){return new P.ai(!0,a,b,c)},
oa:function(a,b){if(a==null)throw H.b(new P.ai(!1,null,b,"Must not be null"))
return a},
mA:function(a){var s=null
return new P.c3(s,s,!1,s,s,a)},
eJ:function(a,b){return new P.c3(null,null,!0,a,b,"Value not in range")},
a5:function(a,b,c,d,e){return new P.c3(b,c,!0,a,d,"Invalid value")},
bg:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.w(c)
s=a>c}else s=!0
if(s)throw H.b(P.a5(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.w(c)
s=b>c}else s=!0
if(s)throw H.b(P.a5(b,a,c,"end",null))
return b}return c},
mB:function(a,b){if(a<0)throw H.b(P.a5(a,0,null,b,null))
return a},
Q:function(a,b,c,d,e){var s=e==null?J.aN(b):e
return new P.e8(s,!0,a,c,"Index out of range")},
B:function(a){return new P.fq(a)},
jy:function(a){return new P.fn(a)},
ly:function(a){return new P.c6(a)},
b9:function(a){return new P.dV(a)},
v:function(a){return new P.fO(a)},
a3:function(a,b,c){return new P.ie(a,b,c)},
m0:function(a){H.qV(a)},
p_:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.F(a5,4)^58)*3|C.a.F(a5,0)^100|C.a.F(a5,1)^97|C.a.F(a5,2)^116|C.a.F(a5,3)^97)>>>0
if(s===0)return P.mM(a4<a4?C.a.t(a5,0,a4):a5,5,a3).geg()
else if(s===32)return P.mM(C.a.t(a5,5,a4),0,a3).geg()}r=P.it(8,0,!1,t.S)
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
if(P.nk(a5,0,a4,0,r)>=14){if(7>=r.length)return H.d(r,7)
r[7]=a4}if(1>=r.length)return H.d(r,1)
p=r[1]
if(p>=0)if(P.nk(a5,0,p,20,r)===20){if(7>=r.length)return H.d(r,7)
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
j=!1}else{if(!(l<a4&&l===m+2&&C.a.ae(a5,"..",m)))h=l>m+2&&C.a.ae(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.ae(a5,"file",0)){if(o<=0){if(!C.a.ae(a5,"/",m)){g="file:///"
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
l=f}i="file"}else if(C.a.ae(a5,"http",0)){if(q&&n+3===m&&C.a.ae(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aY(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.ae(a5,"https",0)){if(q&&n+4===m&&C.a.ae(a5,"443",n+1)){k-=4
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
k-=0}return new P.h8(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.pB(a5,0,p)
else{if(p===0)P.ce(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.pC(a5,d,o-1):""
b=P.py(a5,o,n,!1)
q=n+1
if(q<m){a=H.mx(C.a.t(a5,q,m),a3)
a0=P.pA(a==null?H.q(P.a3("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pz(a5,m,l,a3,i,b!=null)
a2=l<k?P.lL(a5,l+1,k,a3):a3
return new P.bH(i,c,b,a0,a1,a2,k<a4?P.px(a5,k+1,a4):a3)},
mP:function(a){var s=t.N
return C.b.hR(H.c(a.split("&"),t.s),P.lv(s,s),new P.jD(C.e))},
oZ:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jA(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.W(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.kJ(C.a.t(a,q,r),null)
if(typeof n!=="number")return n.a7()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.d(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.kJ(C.a.t(a,q,c),null)
if(typeof n!=="number")return n.a7()
if(n>255)j.$2(k,q)
if(p>=s)return H.d(i,p)
i[p]=n
return i},
mO:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jB(a),b=new P.jC(c,a)
if(a.length<2)c.$1("address is too short")
s=H.c([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.W(a,r)
if(n===58){if(r===a0){++r
if(C.a.W(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gay(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.oZ(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.d(j,g)
j[g]=0
d=g+1
if(d>=i)return H.d(j,d)
j[d]=0
g+=2}else{d=C.c.aU(f,8)
if(g<0||g>=i)return H.d(j,g)
j[g]=d
d=g+1
if(d>=i)return H.d(j,d)
j[d]=f&255
g+=2}}return j},
n9:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ce:function(a,b,c){throw H.b(P.a3(c,a,b))},
pA:function(a,b){if(a!=null&&a===P.n9(b))return null
return a},
py:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.W(a,b)===91){s=c-1
if(C.a.W(a,s)!==93)P.ce(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.pv(a,r,s)
if(q<s){p=q+1
o=P.ne(a,C.a.ae(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mO(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.W(a,n)===58){q=C.a.bw(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.ne(a,C.a.ae(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mO(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.pE(a,b,c)},
pv:function(a,b,c){var s=C.a.bw(a,"%",b)
return s>=b&&s<c?s:c},
ne:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.T(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.W(a,s)
if(p===37){o=P.lM(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.T("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.ce(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.T("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.W(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.t(a,r,s)
if(i==null){i=new P.T("")
n=i}else n=i
n.a+=j
n.a+=P.lK(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pE:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.W(a,s)
if(o===37){n=P.lM(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.T("")
l=C.a.t(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.t(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.y,m)
m=(C.y[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.T("")
if(r<s){q.a+=C.a.t(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.ce(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.W(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.T("")
m=q}else m=q
m.a+=l
m.a+=P.lK(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pB:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.nb(C.a.F(a,b)))P.ce(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.F(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.ce(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.pu(r?a.toLowerCase():a)},
pu:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pC:function(a,b,c){return P.dy(a,b,c,C.Z,!1)},
pz:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dy(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.aa(s,"/"))s="/"+s
return P.pD(s,e,f)},
pD:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.aa(a,"/"))return P.pF(a,!s||c)
return P.pG(a)},
lL:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.bM("Both query and queryParameters specified"))
return P.dy(a,b,c,C.l,!0)}if(d==null)return null
s=new P.T("")
r.a=""
d.I(0,new P.ki(new P.kj(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
px:function(a,b,c){return P.dy(a,b,c,C.l,!0)},
lM:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.W(a,b+1)
r=C.a.W(a,n)
q=H.kF(s)
p=H.kF(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aU(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.as(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
lK:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.hd(a,6*o)&63|p
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
n+=3}}return P.f1(s,0,null)},
dy:function(a,b,c,d,e){var s=P.nd(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
nd:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.W(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lM(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ce(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.W(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.lK(o)}}if(p==null){p=new P.T("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.w(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
nc:function(a){if(C.a.aa(a,"."))return!0
return C.a.dZ(a,"/.")!==-1},
pG:function(a){var s,r,q,p,o,n,m
if(!P.nc(a))return a
s=H.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.J(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
pF:function(a,b){var s,r,q,p,o,n
if(!P.nc(a))return!b?P.na(a):a
s=H.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gay(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gay(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.na(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
na:function(a){var s,r,q,p=a.length
if(p>=2&&P.nb(J.o0(a,0)))for(s=1;s<p;++s){r=C.a.F(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.ai(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
pw:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.F(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.bM("Invalid URL encoding"))}}return s},
lN:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.F(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.t(a,b,c)
else p=new H.p(C.a.t(a,b,c))}else{p=H.c([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.F(a,o)
if(r>127)throw H.b(P.bM("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.b(P.bM("Truncated URI"))
p.push(P.pw(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cj(p)},
nb:function(a){var s=a|32
return 97<=s&&s<=122},
mM:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.F(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.a3(k,a,r))}}if(q<0&&r>b)throw H.b(P.a3(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.F(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gay(j)
if(p!==44||r!==n+7||!C.a.ae(a,"base64",n+1))throw H.b(P.a3("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.I.i_(0,a,m,s)
else{l=P.nd(a,m,s,C.l,!0)
if(l!=null)a=C.a.aY(a,m,s,l)}return new P.jz(a,j,c)},
pM:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.oz(22,new P.ks(),t.gc),l=new P.kr(m),k=new P.kt(),j=new P.ku(),i=l.$2(0,225)
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
nk:function(a,b,c,d,e){var s,r,q,p,o,n=$.o_()
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
az:function az(){},
aj:function aj(a,b){this.a=a
this.b=b},
a_:function a_(){},
bw:function bw(a){this.a=a},
i1:function i1(){},
i2:function i2(){},
M:function M(){},
dM:function dM(a){this.a=a},
ew:function ew(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c3:function c3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e8:function e8(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fq:function fq(a){this.a=a},
fn:function fn(a){this.a=a},
c6:function c6(a){this.a=a},
dV:function dV(a){this.a=a},
ez:function ez(){},
cX:function cX(){},
dX:function dX(a){this.a=a},
fO:function fO(a){this.a=a},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(){},
k:function k(){},
h:function h(){},
e9:function e9(){},
n:function n(){},
G:function G(){},
aq:function aq(){},
S:function S(){},
O:function O(){},
z:function z(){},
T:function T(a){this.a=a},
jD:function jD(a){this.a=a},
jA:function jA(a){this.a=a},
jB:function jB(a){this.a=a},
jC:function jC(a,b){this.a=a
this.b=b},
bH:function bH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kj:function kj(a,b){this.a=a
this.b=b},
ki:function ki(a){this.a=a},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function ks(){},
kr:function kr(a){this.a=a},
kt:function kt(){},
ku:function ku(){},
h8:function h8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fF:function fF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qF:function(a){var s
if(t.v.b(a)){s=J.o6(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.du(a.data,a.height,a.width)},
qE:function(a){if(a instanceof P.du)return{data:a.a,height:a.b,width:a.c}
return a},
bn:function(a){var s,r,q,p,o
if(a==null)return null
s=P.lv(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
qD:function(a){var s={}
a.I(0,new P.ky(s))
return s},
kb:function kb(){},
kd:function kd(a,b){this.a=a
this.b=b},
ke:function ke(a,b){this.a=a
this.b=b},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function ky(a){this.a=a},
kc:function kc(a,b){this.a=a
this.b=b},
e3:function e3(a,b){this.a=a
this.b=b},
ic:function ic(){},
id:function id(){},
k3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
pb:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
h6:function h6(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aT:function aT(){},
ef:function ef(){},
aX:function aX(){},
ex:function ex(){},
iU:function iU(){},
c4:function c4(){},
f0:function f0(){},
m:function m(){},
aZ:function aZ(){},
fd:function fd(){},
fV:function fV(){},
fW:function fW(){},
h2:function h2(){},
h3:function h3(){},
hg:function hg(){},
hh:function hh(){},
hp:function hp(){},
hq:function hq(){},
bi:function bi(){},
hN:function hN(){},
dO:function dO(){},
hO:function hO(a){this.a=a},
dP:function dP(){},
b7:function b7(){},
ey:function ey(){},
fB:function fB(){},
eL:function eL(){},
eW:function eW(){},
hc:function hc(){},
hd:function hd(){}},W={
m7:function(){var s=document.createElement("a")
return s},
lj:function(){var s=document.createElement("canvas")
return s},
om:function(a,b,c){var s,r=document.body
r.toString
s=C.q.an(r,a,b,c)
s.toString
r=new H.b1(new W.a2(s),new W.i3(),t.ac.K("b1<i.E>"))
return t.h.a(r.gaO(r))},
i4:function(a){return"wheel"},
cy:function(a){var s,r,q="element tag unavailable"
try{s=J.aL(a)
if(typeof s.ged(a)=="string")q=s.ged(a)}catch(r){H.ag(r)}return q},
oo:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ag(s)}return q},
k2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
n0:function(a,b,c,d){var s=W.k2(W.k2(W.k2(W.k2(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
a0:function(a,b,c,d){var s=new W.fN(a,b,c==null?null:W.nl(new W.k1(c),t.aD),!1)
s.hk()
return s},
mZ:function(a){var s=W.m7(),r=window.location
s=new W.cc(new W.k8(s,r))
s.ez(a)
return s},
p7:function(a,b,c,d){return!0},
p8:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
n4:function(){var s=t.N,r=P.mn(C.A,s),q=H.c(["TEMPLATE"],t.s)
s=new W.hk(r,P.cJ(s),P.cJ(s),P.cJ(s),null)
s.eC(null,new H.cP(C.A,new W.kf(),t.eM),q,null)
return s},
nl:function(a,b){var s=$.aK
if(s===C.f)return a
return s.dE(a,b)},
t:function t(){},
hK:function hK(){},
dK:function dK(){},
dL:function dL(){},
bN:function bN(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
aA:function aA(){},
hV:function hV(){},
K:function K(){},
cu:function cu(){},
hW:function hW(){},
ao:function ao(){},
aP:function aP(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
ba:function ba(){},
i_:function i_(){},
cv:function cv(){},
cw:function cw(){},
e0:function e0(){},
i0:function i0(){},
fC:function fC(a,b){this.a=a
this.b=b},
E:function E(){},
i3:function i3(){},
j:function j(){},
e:function e(){},
ak:function ak(){},
bR:function bR(){},
e2:function e2(){},
e4:function e4(){},
aD:function aD(){},
ih:function ih(){},
by:function by(){},
bz:function bz(){},
bT:function bT(){},
bV:function bV(){},
bB:function bB(){},
iu:function iu(){},
iM:function iM(){},
bX:function bX(){},
en:function en(){},
iN:function iN(a){this.a=a},
eo:function eo(){},
iO:function iO(a){this.a=a},
aF:function aF(){},
ep:function ep(){},
al:function al(){},
a2:function a2(a){this.a=a},
y:function y(){},
cU:function cU(){},
aG:function aG(){},
eD:function eD(){},
eM:function eM(){},
j1:function j1(a){this.a=a},
eO:function eO(){},
au:function au(){},
eS:function eS(){},
aH:function aH(){},
eT:function eT(){},
aI:function aI(){},
eZ:function eZ(){},
jd:function jd(a){this.a=a},
av:function av(){},
bh:function bh(){},
cZ:function cZ(){},
f2:function f2(){},
f3:function f3(){},
c7:function c7(){},
aw:function aw(){},
ad:function ad(){},
f6:function f6(){},
f7:function f7(){},
jj:function jj(){},
aJ:function aJ(){},
bD:function bD(){},
fc:function fc(){},
jn:function jn(){},
b0:function b0(){},
jE:function jE(){},
fv:function fv(){},
bj:function bj(){},
ca:function ca(){},
cb:function cb(){},
fD:function fD(){},
da:function da(){},
fS:function fS(){},
df:function df(){},
hb:function hb(){},
hi:function hi(){},
fA:function fA(){},
fK:function fK(a){this.a=a},
ln:function ln(a,b){this.a=a
this.$ti=b},
fN:function fN(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k1:function k1(a){this.a=a},
lD:function lD(a){this.$ti=a},
cc:function cc(a){this.a=a},
N:function N(){},
cV:function cV(a){this.a=a},
iR:function iR(a){this.a=a},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(){},
k9:function k9(){},
ka:function ka(){},
hk:function hk(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kf:function kf(){},
hj:function hj(){},
cC:function cC(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
am:function am(){},
k8:function k8(a,b){this.a=a
this.b=b},
hu:function hu(a){this.a=a
this.b=!1},
kn:function kn(a){this.a=a},
fE:function fE(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fP:function fP(){},
fQ:function fQ(){},
fT:function fT(){},
fU:function fU(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
h4:function h4(){},
h5:function h5(){},
h7:function h7(){},
dm:function dm(){},
dn:function dn(){},
h9:function h9(){},
ha:function ha(){},
hf:function hf(){},
hl:function hl(){},
hm:function hm(){},
dq:function dq(){},
dr:function dr(){},
hn:function hn(){},
ho:function ho(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){}},K={
R:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.b(P.v("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.F(a,0)
r=C.a.F(b,0)
if(s>r){q=r
r=s
s=q}return new K.iX(s,r)},
u:function(a){var s=new K.j2()
s.ex(a)
return s},
b6:function b6(){},
e6:function e6(){},
ix:function ix(){},
ac:function ac(){this.a=null},
iX:function iX(a,b){this.a=a
this.b=b},
j2:function j2(){this.a=null}},L={
jl:function(){var s=new L.jk()
s.a=new H.D(t.cn)
s.b=new H.D(t.dL)
s.c=P.cJ(t.X)
return s},
eX:function eX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
fb:function fb(a){this.b=a
this.c=null},
jk:function jk(){var _=this
_.d=_.c=_.b=_.a=null},
fe:function fe(a){this.b=a
this.a=this.c=null}},O={
lk:function(a){var s=new O.a9(a.K("a9<0>"))
s.bn(a)
return s},
a9:function a9(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cQ:function cQ(){this.b=this.a=null},
ej:function ej(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(){},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(){},
iI:function iI(a,b){this.a=a
this.b=b},
iJ:function iJ(){},
iK:function iK(a,b){this.a=a
this.b=b},
iL:function iL(){},
iy:function iy(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
el:function el(){},
iz:function iz(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aV:function aV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iB:function iB(){var _=this
_.e=_.d=_.c=_.b=null},
iC:function iC(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iD:function iD(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eP:function eP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f5:function f5(){}},E={
mj:function(){var s,r=new E.bx()
r.a=""
r.b=!0
s=O.lk(t.l)
r.y=s
s.b_(r.gi0(),r.gi3())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sad(0,null)
return r},
mW:function(){if(J.le(window.navigator.vendor,"Google"))return C.G
if(J.le(window.navigator.userAgent,"Firefox"))return C.r
var s=window.navigator.appVersion
if(J.b3(s).G(s,"Trident")||C.a.G(s,"Edge"))return C.t
if(J.le(window.navigator.appName,"Microsoft"))return C.t
return C.H},
mX:function(){var s=window.navigator.appVersion
if(J.b3(s).G(s,"Win"))return C.a0
if(C.a.G(s,"Mac"))return C.B
if(C.a.G(s,"Linux"))return C.a1
return C.a2},
oP:function(a,b){var s=new E.iY(a)
s.ew(a,b)
return s},
oX:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.mI(a,!0,!0,!0,!1)
s=W.lj()
r=s.style
r.width="100%"
r.height="100%"
J.lg(a).n(0,s)
return E.mI(s,!0,!0,!0,!1)},
mI:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.f9(),n=t.z,m=C.i.cR(a,"webgl2",P.ox(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.v("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.oP(m,a)
n=new T.jg(m)
m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.fs(a)
s=new X.ip()
s.c=new X.ap(!1,!1,!1)
s.d=P.cJ(t.e)
n.b=s
s=new X.iP(n)
s.f=0
s.r=V.bf()
s.x=V.bf()
s.ch=s.Q=1
n.c=s
s=new X.iv(n)
s.r=0
s.x=V.bf()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.jm(n)
s.f=V.bf()
s.r=V.bf()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.c([],t.eG)
s=$.i6
n.Q=(s==null?$.i6=new E.fL(E.mW(),E.mX()):s).a===C.r?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.a0(q,"contextmenu",n.gfi(),!1))
n.z.push(W.a0(a,"focus",n.gfo(),!1))
n.z.push(W.a0(a,"blur",n.gfc(),!1))
n.z.push(W.a0(q,"keyup",n.gft(),!1))
n.z.push(W.a0(q,"keydown",n.gfq(),!1))
n.z.push(W.a0(a,"mousedown",n.gfz(),!1))
n.z.push(W.a0(a,"mouseup",n.gfD(),!1))
n.z.push(W.a0(a,p,n.gfB(),!1))
r=n.z
W.i4(a)
W.i4(a)
r.push(W.a0(a,W.i4(a),n.gfF(),!1))
n.z.push(W.a0(q,p,n.gfk(),!1))
n.z.push(W.a0(q,"mouseup",n.gfm(),!1))
n.z.push(W.a0(q,"pointerlockchange",n.gfH(),!1))
n.z.push(W.a0(a,"touchstart",n.gfX(),!1))
n.z.push(W.a0(a,"touchend",n.gfT(),!1))
n.z.push(W.a0(a,"touchmove",n.gfV(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.aj(Date.now(),!1)
o.db=0
o.di()
return o},
hR:function hR(){},
bx:function bx(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bP:function bP(a){this.b=a},
c1:function c1(a){this.b=a},
fL:function fL(a,b){this.a=a
this.b=b},
iY:function iY(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
f9:function f9(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ji:function ji(a){this.a=a}},Z={
lC:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cf(c)),35044)
a.bindBuffer(b,null)
return new Z.fw(b,s)},
ax:function(a){return new Z.bF(a)},
fw:function fw(a,b){this.a=a
this.b=b},
dS:function dS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
fx:function fx(a){this.a=a},
co:function co(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(a){this.a=a}},D={
I:function(){var s=new D.bQ()
s.d=0
return s},
hS:function hS(){},
bQ:function bQ(){var _=this
_.d=_.c=_.b=_.a=null},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
U:function U(){this.b=null},
aQ:function aQ(){this.b=null},
aR:function aR(){this.b=null},
F:function F(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dQ:function dQ(){},
bv:function bv(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
V:function V(){},
cH:function cH(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
eF:function eF(){},
eU:function eU(){},
nx:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="testCanvas",a7=null,a8=34067,a9="modifiers",b0=V.oS("Test 014"),b1=W.lj()
b1.className="pageLargeCanvas"
b1.id=a6
b0.a.appendChild(b1)
s=t.i
b0.dv(H.c(["Test of Material Lighting shader with different reflections and refractions. No alpha is being used. The background cube maps is being painted onto the object."],s))
b0.hm(H.c(["controls","shapes"],s))
b0.dv(H.c(["\xab[Back to Tests|../]"],s))
r=document.getElementById(a6)
if(r==null)H.q(P.v("Failed to find an element with the identifier, testCanvas."))
q=E.oX(r,!0,!0,!0,!1)
p=X.lo(a7)
p.sdI(0,!1)
o=E.mj()
o.sad(0,F.nD())
s=q.f
n=s.a
m=n.createTexture()
n.bindTexture(a8,m)
n.texParameteri(a8,10242,10497)
n.texParameteri(a8,10243,10497)
n.texParameteri(a8,10241,9729)
n.texParameteri(a8,10240,9729)
n.bindTexture(a8,a7)
l=new T.jf()
l.a=0
l.b=m
l.c=!1
l.d=0
s.aS(l,m,"../resources/maskonaive/posx.jpg",34069,!1,!1)
s.aS(l,m,"../resources/maskonaive/negx.jpg",34070,!1,!1)
s.aS(l,m,"../resources/maskonaive/posy.jpg",34071,!1,!1)
s.aS(l,m,"../resources/maskonaive/negy.jpg",34072,!1,!1)
s.aS(l,m,"../resources/maskonaive/posz.jpg",34073,!1,!1)
s.aS(l,m,"../resources/maskonaive/negz.jpg",34074,!1,!1)
k=new O.ej()
s=O.lk(t.hc)
k.e=s
s.b_(k.gf8(),k.gfa())
s=new O.aV(k,"emission")
s.c=new A.a1(!1,!1,!1)
s.f=new V.r(0,0,0)
k.f=s
s=new O.aV(k,"ambient")
s.c=new A.a1(!1,!1,!1)
s.f=new V.r(0,0,0)
k.r=s
s=new O.aV(k,"diffuse")
s.c=new A.a1(!1,!1,!1)
s.f=new V.r(0,0,0)
k.x=s
s=new O.aV(k,"invDiffuse")
s.c=new A.a1(!1,!1,!1)
s.f=new V.r(0,0,0)
k.y=s
s=new O.iD(k,"specular")
s.c=new A.a1(!1,!1,!1)
s.f=new V.r(0,0,0)
s.ch=100
k.z=s
s=new O.iz(k,"bump")
s.c=new A.a1(!1,!1,!1)
k.Q=s
k.ch=null
s=new O.aV(k,"reflect")
s.c=new A.a1(!1,!1,!1)
s.f=new V.r(0,0,0)
k.cx=s
s=new O.iC(k,"refract")
s.c=new A.a1(!1,!1,!1)
s.f=new V.r(0,0,0)
s.ch=1
k.cy=s
s=new O.iy(k,"alpha")
s.c=new A.a1(!1,!1,!1)
s.f=1
k.db=s
s=new D.cH()
s.bn(t.gj)
s.e=H.c([],t.bb)
s.f=H.c([],t.cP)
s.r=H.c([],t.eb)
s.x=H.c([],t.du)
s.z=s.y=null
s.cT(s.gf6(),s.gfJ(),s.gfN())
k.dx=s
n=new O.iB()
n.b=new V.aB(0,0,0,0)
n.c=1
n.d=10
n.e=!1
k.dy=n
n=s.y
s=n==null?s.y=D.I():n
s.n(0,k.gh3())
s=k.dx
n=s.z
s=n==null?s.z=D.I():n
n=k.gc0()
s.n(0,n)
k.fr=null
s=k.dx
j=V.lB()
i=U.mf(V.mo(V.mu(),j,new V.C(-1,-1,-1)))
h=new V.r(1,1,1)
g=new D.bv()
g.c=new V.r(1,1,1)
g.a=V.mV()
g.d=V.lB()
g.e=V.p2()
f=g.b
g.b=i
i.gq().n(0,g.geA())
i=new D.F("mover",f,g.b)
i.b=!0
g.aA(i)
if(!g.c.v(0,h)){f=g.c
g.c=h
i=new D.F("color",f,h)
i.b=!0
g.aA(i)}s.n(0,g)
s=k.r
s.sp(0,new V.r(0.1,0.1,0.1))
s=k.x
s.sp(0,new V.r(0.1,0.1,0.1))
s=k.z
s.sp(0,new V.r(1,1,1))
s=k.z
s.bq(new A.a1(!0,!1,!1))
s.dk(10)
s=k.ch
if(s!==l){if(s!=null)s.gq().L(0,n)
f=k.ch
k.ch=l
l.gq().n(0,n)
s=new D.F("environment",f,k.ch)
s.b=!0
k.a3(s)}k.cy.saF(0.6)
s=k.cy
s.sp(0,new V.r(0.2,0.3,1))
s=k.cx
s.sp(0,new V.r(0.6,0.6,0.6))
e=new U.bS()
e.bn(t.ah)
e.b_(e.gf4(),e.gfL())
e.e=null
e.f=V.bW()
e.r=0
s=q.x
n=new U.d7()
i=U.ll()
i.scQ(0,!0)
i.scD(6.283185307179586)
i.scF(0)
i.sa_(0,0)
i.scE(100)
i.sU(0)
i.scl(0.5)
n.b=i
g=n.gaQ()
i.gq().n(0,g)
i=U.ll()
i.scQ(0,!0)
i.scD(6.283185307179586)
i.scF(0)
i.sa_(0,0)
i.scE(100)
i.sU(0)
i.scl(0.5)
n.c=i
i.gq().n(0,g)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
d=new X.ap(!1,!1,!1)
f=n.d
n.d=d
i=new D.F(a9,f,d)
i.b=!0
n.R(i)
i=n.f
if(i!==!1){n.f=!1
i=new D.F("invertX",i,!1)
i.b=!0
n.R(i)}i=n.r
if(i!==!1){n.r=!1
i=new D.F("invertY",i,!1)
i.b=!0
n.R(i)}n.b7(s)
e.n(0,n)
s=q.x
n=new U.d6()
i=U.ll()
i.scQ(0,!0)
i.scD(6.283185307179586)
i.scF(0)
i.sa_(0,0)
i.scE(100)
i.sU(0)
i.scl(0.2)
n.b=i
i.gq().n(0,n.gaQ())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
d=new X.ap(!0,!1,!1)
f=n.c
n.c=d
i=new D.F(a9,f,d)
i.b=!0
n.R(i)
n.b7(s)
e.n(0,n)
s=q.x
n=new U.d8()
n.c=0.01
n.e=n.d=0
d=new X.ap(!1,!1,!1)
n.b=d
i=new D.F(a9,a7,d)
i.b=!0
n.R(i)
n.b7(s)
e.n(0,n)
e.n(0,U.mf(V.aW(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.mr(e)
b=new M.ct()
b.a=!0
s=E.mj()
a=F.j4()
n=a.a
i=new V.C(-1,-1,1).E()
a0=n.bs(new V.ar(1,2,4,6),V.hT(255,0,0),new V.P(-1,-1,0),new V.a4(0,1),i,a7)
i=a.a
n=new V.C(1,-1,1).E()
a1=i.bs(new V.ar(0,3,4,6),V.hT(0,0,255),new V.P(1,-1,0),new V.a4(1,1),n,a7)
n=a.a
i=new V.C(1,1,1).E()
a2=n.bs(new V.ar(0,2,5,6),V.hT(0,128,0),new V.P(1,1,0),new V.a4(1,0),i,a7)
i=a.a
n=V.bf()
g=new V.C(-1,1,1).E()
a3=i.bs(new V.ar(0,2,4,7),V.hT(255,255,0),new V.P(-1,1,0),n,g,a7)
a.d.dt(H.c([a0,a1,a2,a3],t.j))
a.aq()
s.sad(0,a)
b.e=s
b.sb8(a7)
b.sbi(0,a7)
b.sbj(a7)
s=new O.eP()
s.b=1.0471975511965976
s.d=new V.r(1,1,1)
f=s.c
s.c=l
l.gq().n(0,s.gc0())
n=new D.F("boxTexture",f,s.c)
n.b=!0
s.a3(n)
b.sbj(s)
b.sbi(0,p)
b.sb8(c)
a4=new M.cz()
a4.a=!0
s=O.lk(t.l)
a4.e=s
s.b_(a4.gfe(),a4.gfg())
a4.y=a4.x=a4.r=a4.f=null
a5=X.lo(a7)
a4.sb8(a7)
a4.sbi(0,a5)
a4.sbj(a7)
a4.sb8(c)
a4.sbj(k)
a4.sbi(0,p)
a4.e.n(0,o)
a4.c.sdI(0,!1)
s=H.c([b,a4],t.f2)
n=new M.cp()
n.bn(t.bn)
n.e=!0
n.f=!1
n.r=null
n.b_(n.gfP(),n.gfR())
n.ab(0,s)
s=q.d
if(s!==n){if(s!=null)s.gq().L(0,q.gd0())
q.d=n
n.gq().n(0,q.gd0())
q.d1()}s=V.mz("controls")
s.cc(0,"Silver",new D.kQ(k),!0)
s.a1(0,"Gold",new D.kR(k))
s.a1(0,"Glass",new D.kS(k))
s.a1(0,"Blue Glass",new D.l0(k))
s.a1(0,"Water Bubble",new D.l1(k))
s.a1(0,"No Reflection",new D.l2(k))
s.a1(0,"Pink Distort",new D.l3(k))
s.a1(0,"Cloak",new D.l4(k))
s.a1(0,"White and Shiny",new D.l5(k))
s=V.mz("shapes")
s.a1(0,"Cube",new D.l6(o))
s.a1(0,"Cuboid",new D.l7(o))
s.a1(0,"Cylinder",new D.kT(o))
s.a1(0,"Cone",new D.kU(o))
s.a1(0,"Cylindrical",new D.kV(o))
s.a1(0,"Sphere",new D.kW(o))
s.a1(0,"Spherical",new D.kX(o))
s.cc(0,"Toroid",new D.kY(o),!0)
s.a1(0,"Knot",new D.kZ(o))
s=q.Q
if(s==null)s=q.Q=D.I()
n=s.b
s=n==null?s.b=H.c([],t.f):n
s.push(new D.l_(b0,k))
V.qW(q)},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
kP:function kP(){},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
kO:function kO(){},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kN:function kN(){},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a,b){this.a=a
this.b=b}},X={dT:function dT(a,b){this.a=a
this.b=b},ed:function ed(a,b){this.a=a
this.b=b},ip:function ip(){var _=this
_.d=_.c=_.b=_.a=null},cM:function cM(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},iv:function iv(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},bY:function bY(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iP:function iP(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bZ:function bZ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eG:function eG(){},d0:function d0(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},jm:function jm(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fs:function fs(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lo:function(a){var s=new X.ig(),r=new V.aB(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.mE
if(r==null){r=V.mD(0,0,1,1)
$.mE=r}s.r=r
return s},
mr:function(a){var s,r,q=new X.eA()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gq().n(0,q.geF())
r=new D.F("mover",s,q.b)
r.b=!0
q.au(r)}r=q.c
$.H().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.F("fov",r,1.0471975511965976)
r.b=!0
q.au(r)}r=q.d
$.H().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.F("near",r,0.1)
r.b=!0
q.au(r)}r=q.e
$.H().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.F("far",r,2000)
r.b=!0
q.au(r)}return q},
li:function li(){},
ig:function ig(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(){this.b=this.a=null},
eA:function eA(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
je:function je(){}},V={
hT:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aB(s,r,q,1)},
hH:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
r_:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bl(a-b,s)
return(a<0?a+s:a)+b},
L:function(a,b,c){if(a==null)return C.a.ap("null",c)
$.H().toString
return C.a.ap(C.d.ef(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cl:function(a,b,c){var s,r,q,p,o,n,m=H.c([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.o)(a),++q){p=V.L(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.d(m,o)
s=C.a.ap(m[o],r)
n=m.length
if(o>=n)return H.d(m,o)
m[o]=s}return m},
m_:function(a){return C.d.ir(Math.pow(2,C.V.cv(Math.log(H.qB(a))/Math.log(2))))},
bW:function(){var s=$.mp
return s==null?$.mp=V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.be(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mo:function(a,b,c){var s=c.E(),r=b.aE(s).E(),q=s.aE(r),p=new V.C(a.a,a.b,a.c),o=r.T(0).ac(p),n=q.T(0).ac(p),m=s.T(0).ac(p)
return V.aW(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
bf:function(){var s=$.mt
return s==null?$.mt=new V.a4(0,0):s},
mu:function(){var s=$.aY
return s==null?$.aY=new V.P(0,0,0):s},
mD:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eK(a,b,c,d)},
d9:function(){var s=$.mU
return s==null?$.mU=new V.C(0,0,0):s},
p2:function(){var s=$.jK
return s==null?$.jK=new V.C(-1,0,0):s},
lB:function(){var s=$.jL
return s==null?$.jL=new V.C(0,1,0):s},
mV:function(){var s=$.jM
return s==null?$.jM=new V.C(0,0,1):s},
r:function r(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i7:function i7(){},
em:function em(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
be:function be(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a4:function a4(a,b){this.a=a
this.b=b},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ae:function ae(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
qW:function(a){P.oY(C.S,new V.l9(a))},
mz:function(a){var s=new V.iV(a),r=document.getElementById(a)
s.c=r
if(r==null)H.q("Failed to find "+a+" for RadioGroup")
return s},
oS:function(a){var s=new V.j8()
s.ey(a,!0)
return s},
b8:function b8(){},
l9:function l9(a){this.a=a},
dY:function dY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e5:function e5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e7:function e7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eC:function eC(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iV:function iV(a){this.a=a
this.c=null},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j8:function j8(){this.b=this.a=null},
ja:function ja(a){this.a=a},
j9:function j9(a){this.a=a},
jb:function jb(a){this.a=a}},U={
ll:function(){var s=new U.hU()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
mf:function(a){var s=new U.cq()
s.a=a
return s},
hU:function hU(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cq:function cq(){this.b=this.a=null},
bS:function bS(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
X:function X(){},
d6:function d6(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d8:function d8(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cp:function cp(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},ct:function ct(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cz:function cz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},a6:function a6(){}},A={
oB:function(a,b){var s=a.bb,r=new A.ek(b,s)
r.cZ(b,s)
r.ev(a,b)
return r},
oC:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="MaterialLight_"+a4.gat(a4)+a5.gat(a5)+a6.gat(a6)+a7.gat(a7)+a8.gat(a8)+a9.gat(a9)+b0.gat(b0)+b1.gat(b1)+b2.gat(b2)+"_"
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
c=$.aM()
if(h){s=$.bq()
c=new Z.bF(c.a|s.a)}if(g){s=$.bp()
c=new Z.bF(c.a|s.a)}if(f){s=$.bo()
c=new Z.bF(c.a|s.a)}return new A.iA(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
kv:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kw:function(a,b,c){var s
A.kv(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hI(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
q5:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kv(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
q1:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kw(b,r,"ambient")
b.a+="\n"},
q3:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kw(b,r,"diffuse")
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
q6:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kw(b,r,"invDiffuse")
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
qc:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kw(b,r,"specular")
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
q8:function(a,b){var s,r,q
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
qa:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kv(b,r,"reflect")
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
qb:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kv(b,r,"refract")
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
q2:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hI(r)
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
if(typeof s!=="number")return s.al()
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
n=H.c([],p)
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
q4:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hI(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.al()
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
if(!a.b.a)l=!1
else l=!0
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.c([],p)
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
q9:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hI(r)
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
if(typeof s!=="number")return s.al()
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
i=H.c([],p)
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
qd:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hI(r)
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
if(typeof s!=="number")return s.al()
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
if(m){s=$.i6
if(s==null)s=$.i6=new E.fL(E.mW(),E.mX())
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
g=H.c([],s)
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
q7:function(a,b){var s,r
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
qe:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.T("")
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
A.q5(a,h)
A.q1(a,h)
A.q3(a,h)
A.q6(a,h)
A.qc(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.qa(a,h)
A.qb(a,h)}A.q8(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.q2(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.q4(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.q9(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.qd(a,o[m],h)
A.q7(a,h)}o=h.a+="// === Main ===\n"
o+="\n"
h.a=o
o+="void main()\n"
h.a=o
o+="{\n"
h.a=o
o=h.a=o+"   float alpha = alphaValue();\n"
s=s?h.a=o+"   vec3 norm = normal();\n":o
if(r)h.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=H.c([],t.i)
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
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ai(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ai(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ai(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ai(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)s=!1
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
qf:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bu+"];\n"
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
qh:function(a,b){var s
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
qg:function(a,b){var s
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
qj:function(a,b){var s,r
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
qk:function(a,b){var s,r
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
qi:function(a,b){var s
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
ql:function(a,b){var s
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
hI:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ai(a,1)},
lA:function(a,b,c,d,e){var s=new A.jr(a,c,e)
s.f=d
P.it(d,0,!1,t.e)
return s},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
hM:function hM(a){this.a=a},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a,b){var _=this
_.iG=_.iF=_.bv=_.bb=_.bu=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iT=_.iS=_.iR=_.ct=_.cs=_.cr=_.cq=_.cp=_.co=_.cn=_.cm=_.iQ=_.iP=_.dU=_.iO=_.iN=_.dT=_.dS=_.iM=_.iL=_.dR=_.dQ=_.iK=_.iJ=_.dP=_.iI=_.iH=_.dO=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dR:function dR(a,b){this.a=a
this.b=b},
e_:function e_(a,b){this.a=a
this.b=b},
eH:function eH(a,b){this.a=a
this.b=b},
eV:function eV(a,b){this.a=a
this.b=b},
iA:function iA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bu=b5
_.bb=b6
_.bv=b7},
d1:function d1(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d2:function d2(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d4:function d4(a,b,c,d,e,f,g,h,i,j){var _=this
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
d5:function d5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
c5:function c5(){},
eQ:function eQ(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ff:function ff(){},
jw:function jw(a){this.a=a},
fh:function fh(a,b,c){this.a=a
this.c=b
this.d=c},
jt:function jt(a,b,c){this.a=a
this.c=b
this.d=c},
ju:function ju(a,b,c){this.a=a
this.c=b
this.d=c},
jv:function jv(a,b,c){this.a=a
this.c=b
this.d=c},
jr:function jr(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
fg:function fg(a,b,c){this.a=a
this.c=b
this.d=c},
js:function js(a,b,c){this.a=a
this.c=b
this.d=c},
fi:function fi(a,b,c){this.a=a
this.c=b
this.d=c},
fj:function fj(a,b,c){this.a=a
this.c=b
this.d=c},
jx:function jx(a,b,c){this.a=a
this.c=b
this.d=c},
fk:function fk(a,b,c){this.a=a
this.c=b
this.d=c},
d3:function d3(a,b,c){this.a=a
this.c=b
this.d=c},
fl:function fl(a,b,c){this.a=a
this.c=b
this.d=c},
fm:function fm(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lV:function(a,b,c,d){var s=F.j4()
F.dz(s,b,c,d,a,1,0,0,1)
F.dz(s,b,c,d,a,0,1,0,3)
F.dz(s,b,c,d,a,0,0,1,2)
F.dz(s,b,c,d,a,-1,0,0,0)
F.dz(s,b,c,d,a,0,-1,0,0)
F.dz(s,b,c,d,a,0,0,-1,3)
s.aq()
return s},
kq:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dz:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.C(f,e+a3,d+a4)
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
h.d=g}k=F.kq(g)
j=F.kq(f)
i=F.m2(a1,a2,new F.kp(h,F.kq(e),F.kq(d),j,k,a0),b)
if(i!=null)a.be(i)},
nr:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0<3)return null
s=F.j4()
r=b?-1:1
q=-6.283185307179586/a0
p=H.c([],t.j)
o=s.a
n=new V.C(0,0,r).E()
p.push(o.hp(new V.ar(a,-1,-1,-1),new V.aB(1,1,1,1),new V.P(0,0,c),new V.C(0,0,r),new V.a4(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(typeof i!=="number")return H.w(i)
n=new V.C(k,j,r).E()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
o.toString
e=F.fu(new V.ar(a,-1,-1,-1),null,new V.aB(h,f,g,1),new V.P(k*i,j*i,c),new V.C(0,0,r),new V.a4(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.n(0,e)
p.push(e)}s.d.dt(p)
return s},
no:function(a,b,c){return F.np(!0,a,1,new F.kz(1,c),b)},
np:function(a,b,c,d,e){var s,r=null
if(e<3)return r
if(c<1)return r
s=F.m2(c,e,new F.kB(d),r)
if(s==null)return r
s.aq()
s.cd()
if(b)s.be(F.nr(3,!1,1,new F.kC(d),e))
s.be(F.nr(1,!0,-1,new F.kD(d),e))
return s},
nB:function(a,b,c){var s,r={}
r.a=b
if(b==null)r.a=new F.la()
s=F.lV(a,null,new F.lb(r,1),c)
s.cd()
return s},
nD:function(){return F.nq(15,30,0.5,1,new F.lc())},
qS:function(){return F.nq(12,120,0.3,1,new F.kM(3,2))},
nq:function(a,b,c,d,e){var s=F.m2(a,b,new F.kA(e,d,b,c),null)
if(s==null)return null
s.aq()
s.cd()
return s},
m2:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.j4()
r=H.c([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.fu(e,e,new V.aB(n,0,0,1),e,e,new V.a4(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.ck(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.fu(e,e,new V.aB(h,g,f,1),e,e,new V.a4(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.ck(d))}}s.d.ho(a+1,b+1,r)
return s},
cA:function(a,b,c){var s=new F.e1(),r=a.a
if(r==null)H.q(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.q(P.v("May not create a face with vertices attached to different shapes."))
s.c8(a)
s.c9(b)
s.h9(c)
s.a.a.d.b.push(s)
s.a.a.a6()
return s},
ov:function(a,b){var s=new F.eg(),r=a.a
if(r==null)H.q(P.v("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.q(P.v("May not create a line with vertices attached to different shapes."))
s.c8(a)
s.c9(b)
s.a.a.c.b.push(s)
s.a.a.a6()
return s},
j4:function(){var s=new F.j3(),r=new F.jN(s)
r.b=!1
r.c=H.c([],t.j)
s.a=r
r=new F.j7(s)
r.b=H.c([],t.p)
s.b=r
r=new F.j6(s)
r.b=H.c([],t.L)
s.c=r
r=new F.j5(s)
r.b=H.c([],t.b)
s.d=r
s.e=null
return s},
fu:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.ft(),p=new F.jV()
p.b=H.c([],t.p)
q.b=p
p=new F.jR()
s=t.L
p.b=H.c([],s)
p.c=H.c([],s)
q.c=p
p=new F.jO()
s=t.b
p.b=H.c([],s)
p.c=H.c([],s)
p.d=H.c([],s)
q.d=p
h=$.nU()
q.e=0
p=$.aM()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bq().a)!==0?e:r
q.x=(s&$.bp().a)!==0?b:r
q.y=(s&$.bK().a)!==0?f:r
q.z=(s&$.bL().a)!==0?g:r
q.Q=(s&$.nV().a)!==0?c:r
q.ch=(s&$.cm().a)!==0?i:0
q.cx=(s&$.bo().a)!==0?a:r
return q},
kp:function kp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kz:function kz(a,b){this.a=a
this.b=b},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
la:function la(){},
lb:function lb(a,b){this.a=a
this.b=b},
lc:function lc(){},
kM:function kM(a,b){this.a=a
this.b=b},
kA:function kA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e1:function e1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ib:function ib(){},
jc:function jc(){},
eg:function eg(){this.b=this.a=null},
iq:function iq(){},
jq:function jq(){},
eE:function eE(){this.a=null},
j3:function j3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j5:function j5(a){this.a=a
this.b=null},
j6:function j6(a){this.a=a
this.b=null},
j7:function j7(a){this.a=a
this.b=null},
ft:function ft(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jX:function jX(a){this.a=a},
jW:function jW(a){this.a=a},
jN:function jN(a){this.a=a
this.c=this.b=null},
jO:function jO(){this.d=this.c=this.b=null},
jP:function jP(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b){this.a=a
this.b=b},
jR:function jR(){this.c=this.b=null},
jT:function jT(){},
jS:function jS(){},
jU:function jU(){},
iS:function iS(){},
jV:function jV(){this.b=null}},T={f8:function f8(){},jf:function jf(){var _=this
_.e=_.d=_.c=_.b=_.a=null},jg:function jg(a){var _=this
_.a=a
_.e=_.d=_.c=null},jh:function jh(a,b,c,d,e,f,g){var _=this
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
H.ls.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gS:function(a){return H.cW(a)},
i:function(a){return"Instance of '"+H.f(H.eI(a))+"'"}}
J.ea.prototype={
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$iaz:1}
J.cG.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0}}
J.bc.prototype={
gS:function(a){return 0},
i:function(a){return String(a)},
$iml:1}
J.eB.prototype={}
J.bE.prototype={}
J.aE.prototype={
i:function(a){var s=a[$.nH()]
if(s==null)return this.er(a)
return"JavaScript function for "+H.f(J.a7(s))},
$iaC:1}
J.x.prototype={
cK:function(a,b){if(!!a.fixed$length)H.q(P.B("removeAt"))
if(b<0||b>=a.length)throw H.b(P.eJ(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var s
if(!!a.fixed$length)H.q(P.B("remove"))
for(s=0;s<a.length;++s)if(J.J(a[s],b)){a.splice(s,1)
return!0}return!1},
ab:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.B("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.o)(b),++r)a.push(b[r])},
I:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.b9(a))}},
j:function(a,b){var s,r,q=P.it(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.d(q,s)
q[s]=r}return q.join(b)},
hX:function(a){return this.j(a,"")},
hQ:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.b9(a))}return s},
hR:function(a,b,c){return this.hQ(a,b,c,t.z)},
hP:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.b(P.b9(a))}throw H.b(H.il())},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghO:function(a){if(a.length>0)return a[0]
throw H.b(H.il())},
gay:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.il())},
dz:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.b(P.b9(a))}return!1},
b1:function(a,b){if(!!a.immutable$list)H.q(P.B("sort"))
H.oV(a,b==null?J.pT():b)},
en:function(a){return this.b1(a,null)},
G:function(a,b){var s
for(s=0;s<a.length;++s)if(J.J(a[s],b))return!0
return!1},
i:function(a){return P.lp(a,"[","]")},
gO:function(a){return new J.a8(a,a.length)},
gS:function(a){return H.cW(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.B("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.ck(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.q(P.B("indexed set"))
if(b>=a.length||b<0)throw H.b(H.ck(a,b))
a[b]=c},
$il:1,
$ih:1,
$in:1}
J.im.prototype={}
J.a8.prototype={
gC:function(a){return this.d},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bA.prototype={
aX:function(a,b){var s
if(typeof b!="number")throw H.b(H.ay(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gby(b)
if(this.gby(a)===s)return 0
if(this.gby(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gby:function(a){return a===0?1/a<0:a<0},
ir:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.B(""+a+".toInt()"))},
cv:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.B(""+a+".floor()"))},
ar:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.B(""+a+".round()"))},
ef:function(a,b){var s
if(b>20)throw H.b(P.a5(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gby(a))return"-"+s
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
bl:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eu:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dm(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.dm(a,b)},
dm:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.B("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aU:function(a,b){var s
if(a>0)s=this.dl(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hd:function(a,b){if(b<0)throw H.b(H.ay(b))
return this.dl(a,b)},
dl:function(a,b){return b>31?0:a>>>b},
$ia_:1,
$iS:1}
J.cF.prototype={$ik:1}
J.cE.prototype={}
J.aS.prototype={
W:function(a,b){if(b<0)throw H.b(H.ck(a,b))
if(b>=a.length)H.q(H.ck(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.b(H.ck(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!="string")throw H.b(P.m8(b,null,null))
return a+b},
aY:function(a,b,c,d){var s,r,q=P.bg(b,c,a.length)
if(!H.cg(q))H.q(H.ay(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
ae:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a5(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
aa:function(a,b){return this.ae(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.eJ(b,null))
if(b>c)throw H.b(P.eJ(b,null))
if(c>a.length)throw H.b(P.eJ(c,null))
return a.substring(b,c)},
ai:function(a,b){return this.t(a,b,null)},
iu:function(a){return a.toLowerCase()},
w:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.P)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ap:function(a,b){var s=b-a.length
if(s<=0)return a
return this.w(" ",s)+a},
bw:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a5(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dZ:function(a,b){return this.bw(a,b,0)},
hw:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a5(c,0,s,null,null))
return H.nC(a,b,c)},
G:function(a,b){return this.hw(a,b,0)},
aX:function(a,b){var s
if(typeof b!="string")throw H.b(H.ay(b))
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
H.ee.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.p.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.W(this.a,b)}}
H.l.prototype={}
H.cL.prototype={
gO:function(a){return new H.bd(this,this.gm(this))},
bH:function(a,b){return this.eq(0,b)}}
H.bd.prototype={
gC:function(a){var s=this.d
return s},
u:function(){var s,r=this,q=r.a,p=J.b3(q),o=p.gm(q)
if(r.b!=o)throw H.b(P.b9(q))
s=r.c
if(typeof o!=="number")return H.w(o)
if(s>=o){r.d=null
return!1}r.d=p.J(q,s);++r.c
return!0}}
H.aU.prototype={
gO:function(a){return new H.ei(J.b5(this.a),this.b)},
gm:function(a){return J.aN(this.a)},
J:function(a,b){return this.b.$1(J.hJ(this.a,b))}}
H.cx.prototype={$il:1}
H.ei.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gC(r))
return!0}s.a=null
return!1},
gC:function(a){var s=this.a
return s}}
H.cP.prototype={
gm:function(a){return J.aN(this.a)},
J:function(a,b){return this.b.$1(J.hJ(this.a,b))}}
H.b1.prototype={
gO:function(a){return new H.fy(J.b5(this.a),this.b)}}
H.fy.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gC(s)))return!0
return!1},
gC:function(a){var s=this.a
return s.gC(s)}}
H.cB.prototype={}
H.fp.prototype={
l:function(a,b,c){throw H.b(P.B("Cannot modify an unmodifiable list"))}}
H.c8.prototype={}
H.cr.prototype={
i:function(a){return P.lx(this)},
l:function(a,b,c){H.oj()},
$iG:1}
H.cs.prototype={
gm:function(a){return this.a},
ci:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.ci(0,b))return null
return this.d9(b)},
d9:function(a){return this.b[a]},
I:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.d9(q))}}}
H.jo.prototype={
ao:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.ev.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.ec.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.fo.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iT.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.he.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bu.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nF(r==null?"unknown":r)+"'"},
$iaC:1,
gix:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f4.prototype={}
H.eY.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nF(s)+"'"}}
H.bO.prototype={
v:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bO))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gS:function(a){var s,r=this.c
if(r==null)s=H.cW(this.a)
else s=typeof r!=="object"?J.ah(r):H.cW(r)
return(s^H.cW(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eI(s))+"'")}}
H.eN.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.D.prototype={
gm:function(a){return this.a},
gbx:function(a){return this.a===0},
ga4:function(a){return new H.cI(this,H.dB(this).K("cI<1>"))},
giw:function(a){var s=this,r=H.dB(s)
return H.oA(s.ga4(s),new H.io(s),r.c,r.Q[1])},
ci:function(a,b){var s=this.b
if(s==null)return!1
return this.eR(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bo(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bo(p,b)
q=r==null?n:r.b
return q}else return o.hV(b)},
hV:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.da(p,q.e0(a))
r=q.e1(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.d3(s==null?q.b=q.bZ():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.d3(r==null?q.c=q.bZ():r,b,c)}else q.hW(b,c)},
hW:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bZ()
s=p.e0(a)
r=p.da(o,s)
if(r==null)p.c6(o,s,[p.c_(a,b)])
else{q=p.e1(r,a)
if(q>=0)r[q].b=b
else r.push(p.c_(a,b))}},
I:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.b9(s))
r=r.c}},
d3:function(a,b,c){var s=this.bo(a,b)
if(s==null)this.c6(a,b,this.c_(b,c))
else s.b=c},
f1:function(){this.r=this.r+1&67108863},
c_:function(a,b){var s,r=this,q=new H.ir(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.f1()
return q},
e0:function(a){return J.ah(a)&0x3ffffff},
e1:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1},
i:function(a){return P.lx(this)},
bo:function(a,b){return a[b]},
da:function(a,b){return a[b]},
c6:function(a,b,c){a[b]=c},
eV:function(a,b){delete a[b]},
eR:function(a,b){return this.bo(a,b)!=null},
bZ:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c6(r,s,r)
this.eV(r,s)
return r}}
H.io.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.dB(this.a).K("2(1)")}}
H.ir.prototype={}
H.cI.prototype={
gm:function(a){return this.a.a},
gO:function(a){var s=this.a,r=new H.eh(s,s.r)
r.c=s.e
return r}}
H.eh.prototype={
gC:function(a){return this.d},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.b9(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kG.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.kH.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kI.prototype={
$1:function(a){return this.a(a)}}
H.eb.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imC:1}
H.cR.prototype={$icR:1}
H.Y.prototype={$iY:1}
H.c_.prototype={
gm:function(a){return a.length},
$iA:1}
H.bC.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]},
l:function(a,b,c){H.b2(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.cS.prototype={
l:function(a,b,c){H.b2(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.eq.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.er.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.es.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.et.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.eu.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.cT.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.c0.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b2(b,a,a.length)
return a[b]},
$ic0:1,
$ibi:1}
H.dg.prototype={}
H.dh.prototype={}
H.di.prototype={}
H.dj.prototype={}
H.at.prototype={
K:function(a){return H.hs(v.typeUniverse,this,a)},
b3:function(a){return H.ps(v.typeUniverse,this,a)}}
H.fR.prototype={}
H.fM.prototype={
i:function(a){return this.a}}
H.dt.prototype={}
P.jZ.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
P.jY.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.k_.prototype={
$0:function(){this.a.$0()}}
P.k0.prototype={
$0:function(){this.a.$0()}}
P.ds.prototype={
eD:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cj(new P.kh(this,b),0),a)
else throw H.b(P.B("`setTimeout()` not found."))},
eE:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cj(new P.kg(this,a,Date.now(),b),0),a)
else throw H.b(P.B("Periodic timer."))},
$id_:1}
P.kh.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.kg.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eu(s,o)}q.c=p
r.d.$1(q)}}
P.cd.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bG.prototype={
gC:function(a){var s=this.c
if(s==null)return this.b
return s.gC(s)},
u:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.u())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.cd){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.b5(s)
if(o instanceof P.bG){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dp.prototype={
gO:function(a){return new P.bG(this.a())}}
P.fz.prototype={}
P.cY.prototype={}
P.f_.prototype={}
P.d_.prototype={}
P.ko.prototype={}
P.kx.prototype={
$0:function(){var s=H.b(this.a)
s.stack=J.a7(this.b)
throw s}}
P.k5.prototype={
im:function(a){var s,r,q,p=null
try{if(C.f===$.aK){a.$0()
return}P.qo(p,p,this,a)}catch(q){s=H.ag(q)
r=H.lX(q)
P.nj(p,p,this,s,r)}},
io:function(a,b){var s,r,q,p=null
try{if(C.f===$.aK){a.$1(b)
return}P.qp(p,p,this,a,b)}catch(q){s=H.ag(q)
r=H.lX(q)
P.nj(p,p,this,s,r)}},
ip:function(a,b){return this.io(a,b,t.z)},
ht:function(a){return new P.k6(this,a)},
dE:function(a,b){return new P.k7(this,a,b)}}
P.k6.prototype={
$0:function(){return this.a.im(this.b)}}
P.k7.prototype={
$1:function(a){return this.a.ip(this.b,a)},
$S:function(){return this.c.K("~(0)")}}
P.dc.prototype={
gO:function(a){var s=new P.dd(this,this.r)
s.c=this.e
return s},
gm:function(a){return this.a},
G:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eO(b)
return r}},
eO:function(a){var s=this.d
if(s==null)return!1
return this.bQ(s[this.bM(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.d4(s==null?q.b=P.lE():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.d4(r==null?q.c=P.lE():r,b)}else return q.eH(0,b)},
eH:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lE()
s=q.bM(b)
r=p[s]
if(r==null)p[s]=[q.bL(b)]
else{if(q.bQ(r,b)>=0)return!1
r.push(q.bL(b))}return!0},
L:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.h_(this.c,b)
else return this.fZ(0,b)},
fZ:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bM(b)
r=n[s]
q=o.bQ(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dq(p)
return!0},
d4:function(a,b){if(a[b]!=null)return!1
a[b]=this.bL(b)
return!0},
h_:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dq(s)
delete a[b]
return!0},
d5:function(){this.r=1073741823&this.r+1},
bL:function(a){var s,r=this,q=new P.k4(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.d5()
return q},
dq:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.d5()},
bM:function(a){return J.ah(a)&1073741823},
bQ:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1}}
P.k4.prototype={}
P.dd.prototype={
gC:function(a){return this.d},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.b9(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cD.prototype={}
P.is.prototype={
$2:function(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cK.prototype={$il:1,$ih:1,$in:1}
P.i.prototype={
gO:function(a){return new H.bd(a,this.gm(a))},
J:function(a,b){return this.h(a,b)},
gbx:function(a){return this.gm(a)===0},
it:function(a,b){var s,r,q,p,o=this
if(o.gbx(a)){s=J.lq(0,H.bI(a).K("i.E"))
return s}r=o.h(a,0)
q=P.it(o.gm(a),r,!0,H.bI(a).K("i.E"))
p=1
while(!0){s=o.gm(a)
if(typeof s!=="number")return H.w(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s;++p}return q},
is:function(a){return this.it(a,!0)},
hM:function(a,b,c,d){var s
P.bg(b,c,this.gm(a))
for(s=b;s<c;++s)this.l(a,s,d)},
i:function(a){return P.lp(a,"[","]")}}
P.cN.prototype={}
P.iw.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:18}
P.W.prototype={
I:function(a,b){var s,r
for(s=J.b5(this.ga4(a));s.u();){r=s.gC(s)
b.$2(r,this.h(a,r))}},
gm:function(a){return J.aN(this.ga4(a))},
i:function(a){return P.lx(a)},
$iG:1}
P.ht.prototype={
l:function(a,b,c){throw H.b(P.B("Cannot modify unmodifiable map"))}}
P.cO.prototype={
h:function(a,b){return J.cn(this.a,b)},
l:function(a,b,c){J.ld(this.a,b,c)},
I:function(a,b){J.lf(this.a,b)},
gm:function(a){return J.aN(this.a)},
i:function(a){return J.a7(this.a)},
$iG:1}
P.c9.prototype={}
P.dk.prototype={
ab:function(a,b){var s
for(s=J.b5(b);s.u();)this.n(0,s.gC(s))},
i:function(a){return P.lp(this,"{","}")},
J:function(a,b){var s,r,q,p="index"
P.oa(b,p)
P.mB(b,p)
for(s=P.pc(this,this.r),r=0;s.u();){q=s.d
if(b===r)return q;++r}throw H.b(P.Q(b,this,p,null,r))},
$il:1,
$ih:1}
P.de.prototype={}
P.dx.prototype={}
P.jH.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ag(r)}return null}}
P.jI.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ag(r)}return null}}
P.hP.prototype={
i_:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bg(a2,a3,a1.length)
if(a3==null)throw H.b(P.mA("Invalid range"))
s=$.nX()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.F(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.kF(C.a.F(a1,l))
h=H.kF(C.a.F(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.d(s,g)
f=s[g]
if(f>=0){g=C.a.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.T("")
e=p}else e=p
d=e.a+=C.a.t(a1,q,r)
e.a=d+H.as(k)
q=l
continue}}throw H.b(P.a3("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.t(a1,q,a3)
d=e.length
if(o>=0)P.m9(a1,n,a3,o,m,d)
else{c=C.c.bl(d-1,4)+1
if(c===1)throw H.b(P.a3(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aY(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.m9(a1,n,a3,o,m,b)
else{c=C.c.bl(b,4)
if(c===1)throw H.b(P.a3(a,a1,a3))
if(c>1)a1=C.a.aY(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hQ.prototype={}
P.dU.prototype={}
P.dW.prototype={}
P.i5.prototype={}
P.ij.prototype={
i:function(a){return this.a}}
P.ii.prototype={
eS:function(a,b,c){var s,r,q,p,o,n,m=null
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
default:n=m}if(n!=null){if(o==null)o=new P.T("")
if(p>b)o.a+=C.a.t(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.o8(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.jF.prototype={
ghL:function(){return C.Q}}
P.jJ.prototype={
cj:function(a){var s,r,q,p=P.bg(0,null,a.length)
if(p==null)throw H.b(P.mA("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.km(r)
if(q.eX(a,0,p)!==p){J.o3(a,p-1)
q.cb()}return new Uint8Array(r.subarray(0,H.pL(0,q.b,r.length)))}}
P.km.prototype={
cb:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
hl:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.cb()
return!1}},
eX:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.W(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.F(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hl(p,C.a.F(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.cb()}else if(p<=2047){o=l.b
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
P.jG.prototype={
cj:function(a){var s=this.a,r=P.p0(s,a,0,null)
if(r!=null)return r
return new P.kl(s).hx(a,0,null,!0)}}
P.kl.prototype={
hx:function(a,b,c,d){var s,r,q,p,o=this,n=P.bg(b,c,J.aN(a))
if(b===n)return""
s=P.pH(a,b,n)
if(typeof n!=="number")return n.a0()
n-=b
r=o.bN(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.pI(q)
o.b=0
throw H.b(P.a3(p,a,b+o.c))}return r},
bN:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.a0()
if(c-b>1000){s=C.c.a8(b+c,2)
r=q.bN(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bN(a,s,c,d)}return q.hC(a,b,c,d)},
hC:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.T(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.F("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.F(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.as(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.as(j)
break
case 65:g.a+=H.as(j);--f
break
default:p=g.a+=H.as(j)
g.a=p+H.as(j)
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
g.a+=H.as(a[l])}else g.a+=P.f1(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.as(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.az.prototype={}
P.aj.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a&&!0},
aX:function(a,b){return C.c.aX(this.a,b.a)},
gS:function(a){var s=this.a
return(s^C.c.aU(s,30))&1073741823},
i:function(a){var s=this,r=P.ok(H.oL(s)),q=P.dZ(H.oJ(s)),p=P.dZ(H.oF(s)),o=P.dZ(H.oG(s)),n=P.dZ(H.oI(s)),m=P.dZ(H.oK(s)),l=P.ol(H.oH(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.a_.prototype={}
P.bw.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.bw&&this.a===b.a},
gS:function(a){return C.c.gS(this.a)},
aX:function(a,b){return C.c.aX(this.a,b.a)},
i:function(a){var s,r,q,p=new P.i2(),o=this.a
if(o<0)return"-"+new P.bw(0-o).i(0)
s=p.$1(C.c.a8(o,6e7)%60)
r=p.$1(C.c.a8(o,1e6)%60)
q=new P.i1().$1(o%1e6)
return""+C.c.a8(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.i1.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.i2.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.M.prototype={}
P.dM.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.i8(s)
return"Assertion failed"}}
P.ew.prototype={
i:function(a){return"Throw of null."}}
P.ai.prototype={
gbP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbO:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbP()+o+m
if(!q.a)return l
s=q.gbO()
r=P.i8(q.b)
return l+s+": "+r}}
P.c3.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.e8.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var s,r=this.b
if(typeof r!=="number")return r.ah()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gm:function(a){return this.f}}
P.fq.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fn.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c6.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dV.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.i8(s)+"."}}
P.ez.prototype={
i:function(a){return"Out of Memory"},
$iM:1}
P.cX.prototype={
i:function(a){return"Stack Overflow"},
$iM:1}
P.dX.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fO.prototype={
i:function(a){return"Exception: "+this.a}}
P.ie.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.t(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.F(d,o)
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
i=""}h=C.a.t(d,k,l)
return f+j+h+i+"\n"+C.a.w(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.aC.prototype={}
P.k.prototype={}
P.h.prototype={
bH:function(a,b){return new H.b1(this,b,H.dB(this).K("b1<h.E>"))},
gm:function(a){var s,r=this.gO(this)
for(s=0;r.u();)++s
return s},
gaO:function(a){var s,r=this.gO(this)
if(!r.u())throw H.b(H.il())
s=r.gC(r)
if(r.u())throw H.b(H.oq())
return s},
J:function(a,b){var s,r,q
P.mB(b,"index")
for(s=this.gO(this),r=0;s.u();){q=s.gC(s)
if(b===r)return q;++r}throw H.b(P.Q(b,this,"index",null,r))},
i:function(a){return P.op(this,"(",")")}}
P.e9.prototype={}
P.n.prototype={$il:1,$ih:1}
P.G.prototype={}
P.aq.prototype={
gS:function(a){return P.O.prototype.gS.call(C.j,this)},
i:function(a){return"null"}}
P.S.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
v:function(a,b){return this===b},
gS:function(a){return H.cW(this)},
i:function(a){return"Instance of '"+H.f(H.eI(this))+"'"},
toString:function(){return this.i(this)}}
P.z.prototype={}
P.T.prototype={
gm:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jD.prototype={
$2:function(a,b){var s,r,q,p=J.dG(b).dZ(b,"=")
if(p===-1){if(b!=="")J.ld(a,P.lN(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.ai(b,p+1)
q=this.a
J.ld(a,P.lN(s,0,s.length,q,!0),P.lN(r,0,r.length,q,!0))}return a}}
P.jA.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv4 address, "+a,this.a,b))}}
P.jB.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jC.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kJ(C.a.t(this.b,a,b),16)
if(typeof s!=="number")return s.ah()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bH.prototype={
gca:function(){var s,r,q,p=this,o=p.x
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
else o=H.q(H.lu("Field '_text' has been assigned during initialization."))}return o},
gS:function(a){var s=this,r=s.z
if(r==null){r=C.a.gS(s.gca())
if(s.z==null)s.z=r
else r=H.q(H.lu("Field 'hashCode' has been assigned during initialization."))}return r},
gcJ:function(){var s=this,r=s.Q
if(r==null){r=new P.c9(P.mP(s.gbh(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.q(H.lu("Field 'queryParameters' has been assigned during initialization."))}return r},
geh:function(){return this.b},
gcz:function(a){var s=this.c
if(s==null)return""
if(C.a.aa(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbB:function(a){var s=this.d
return s==null?P.n9(this.a):s},
gbh:function(a){var s=this.f
return s==null?"":s},
gcw:function(){var s=this.r
return s==null?"":s},
eb:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.aa(s,"/"))s="/"+s
q=s
p=P.lL(null,0,0,b)
return new P.bH(n,l,j,k,q,p,o.r)},
gdV:function(){return this.c!=null},
gdY:function(){return this.f!=null},
gdW:function(){return this.r!=null},
i:function(a){return this.gca()},
v:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbI()&&s.c!=null===b.gdV()&&s.b===b.geh()&&s.gcz(s)===b.gcz(b)&&s.gbB(s)===b.gbB(b)&&s.e===b.ge9(b)&&s.f!=null===b.gdY()&&s.gbh(s)===b.gbh(b)&&s.r!=null===b.gdW()&&s.gcw()===b.gcw()},
$ifr:1,
gbI:function(){return this.a},
ge9:function(a){return this.e}}
P.kj.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.kk(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.kk(C.h,b,C.e,!0))}}}
P.ki.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.b5(b),r=this.a;s.u();)r.$2(a,s.gC(s))}}
P.jz.prototype={
geg:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bw(s,"?",m)
q=s.length
if(r>=0){p=P.dy(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.fF("data","",n,n,P.dy(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.ks.prototype={
$1:function(a){return new Uint8Array(96)}}
P.kr.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
J.o4(s,0,96,b)
return s},
$S:19}
P.kt.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.F(b,q)^96
if(p>=r)return H.d(a,p)
a[p]=c}}}
P.ku.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.F(b,0),r=C.a.F(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.d(a,p)
a[p]=c}}}
P.h8.prototype={
gdV:function(){return this.c>0},
gdX:function(){return this.c>0&&this.d+1<this.e},
gdY:function(){return this.f<this.r},
gdW:function(){return this.r<this.a.length},
gdc:function(){return this.b===4&&C.a.aa(this.a,"http")},
gdd:function(){return this.b===5&&C.a.aa(this.a,"https")},
gbI:function(){var s=this.x
return s==null?this.x=this.eP():s},
eP:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gdc())return"http"
if(s.gdd())return"https"
if(r===4&&C.a.aa(s.a,"file"))return"file"
if(r===7&&C.a.aa(s.a,"package"))return"package"
return C.a.t(s.a,0,r)},
geh:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcz:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbB:function(a){var s=this
if(s.gdX())return P.kJ(C.a.t(s.a,s.d+1,s.e),null)
if(s.gdc())return 80
if(s.gdd())return 443
return 0},
ge9:function(a){return C.a.t(this.a,this.e,this.f)},
gbh:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gcw:function(){var s=this.r,r=this.a
return s<r.length?C.a.ai(r,s+1):""},
gcJ:function(){var s=this
if(s.f>=s.r)return C.a_
return new P.c9(P.mP(s.gbh(s)),t.U)},
eb:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbI(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gdX()?n.gbB(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.aa(r,"/"))r="/"+r
p=P.lL(m,0,0,b)
q=n.r
o=q<j.length?C.a.ai(j,q+1):m
return new P.bH(l,i,s,h,r,p,o)},
gS:function(a){var s=this.y
return s==null?this.y=C.a.gS(this.a):s},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifr:1}
P.fF.prototype={}
W.t.prototype={}
W.hK.prototype={
gm:function(a){return a.length}}
W.dK.prototype={
i:function(a){return String(a)}}
W.dL.prototype={
i:function(a){return String(a)}}
W.bN.prototype={$ibN:1}
W.br.prototype={$ibr:1}
W.bs.prototype={$ibs:1}
W.bt.prototype={
cR:function(a,b,c){if(c!=null)return a.getContext(b,P.qD(c))
return a.getContext(b)},
ej:function(a,b){return this.cR(a,b,null)},
$ibt:1}
W.aA.prototype={
gm:function(a){return a.length}}
W.hV.prototype={
gm:function(a){return a.length}}
W.K.prototype={$iK:1}
W.cu.prototype={
gm:function(a){return a.length}}
W.hW.prototype={}
W.ao.prototype={}
W.aP.prototype={}
W.hX.prototype={
gm:function(a){return a.length}}
W.hY.prototype={
gm:function(a){return a.length}}
W.hZ.prototype={
gm:function(a){return a.length}}
W.ba.prototype={$iba:1}
W.i_.prototype={
i:function(a){return String(a)}}
W.cv.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.cw.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaN(a))+" x "+H.f(this.gaH(a))},
v:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aL(b)
s=a.left==s.gbz(b)&&a.top==s.gbE(b)&&this.gaN(a)==s.gaN(b)&&this.gaH(a)==s.gaH(b)}else s=!1
return s},
gS:function(a){return W.n0(J.ah(a.left),J.ah(a.top),J.ah(this.gaN(a)),J.ah(this.gaH(a)))},
gdF:function(a){return a.bottom},
gaH:function(a){return a.height},
gbz:function(a){return a.left},
gcN:function(a){return a.right},
gbE:function(a){return a.top},
gaN:function(a){return a.width},
$iaa:1}
W.e0.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.i0.prototype={
gm:function(a){return a.length}}
W.fC.prototype={
gbx:function(a){return this.a.firstElementChild==null},
gm:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var s=this.is(this)
return new J.a8(s,s.length)}}
W.E.prototype={
ghs:function(a){return new W.fK(a)},
gdH:function(a){return new W.fC(a,a.children)},
gdJ:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.ah()
if(q<0)q=-q*0
if(typeof p!=="number")return p.ah()
if(p<0)p=-p*0
return new P.aa(s,r,q,p,t.I)},
i:function(a){return a.localName},
an:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.mi
if(s==null){s=H.c([],t.o)
r=new W.cV(s)
s.push(W.mZ(null))
s.push(W.n4())
$.mi=r
d=r}else d=s
s=$.mh
if(s==null){s=new W.hu(d)
$.mh=s
c=s}else{s.a=d
c=s}}if($.bb==null){s=document
r=s.implementation.createHTMLDocument("")
$.bb=r
$.lm=r.createRange()
r=$.bb.createElement("base")
t.D.a(r)
r.href=s.baseURI
$.bb.head.appendChild(r)}s=$.bb
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.bb
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.bb.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.G(C.Y,a.tagName)){$.lm.selectNodeContents(q)
s=$.lm
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.bb.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.bb.body)J.m6(q)
c.cS(p)
document.adoptNode(p)
return p},
hA:function(a,b,c){return this.an(a,b,c,null)},
el:function(a,b){a.textContent=null
a.appendChild(this.an(a,b,null,null))},
ged:function(a){return a.tagName},
$iE:1}
W.i3.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.e.prototype={
hn:function(a,b,c,d){if(c!=null)this.eI(a,b,c,!1)},
eI:function(a,b,c,d){return a.addEventListener(b,H.cj(c,1),!1)},
$ie:1}
W.ak.prototype={$iak:1}
W.bR.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1,
$ibR:1}
W.e2.prototype={
gm:function(a){return a.length}}
W.e4.prototype={
gm:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.ih.prototype={
gm:function(a){return a.length}}
W.by.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.bz.prototype={
gdK:function(a){return a.data},
$ibz:1}
W.bT.prototype={$ibT:1}
W.bV.prototype={$ibV:1}
W.bB.prototype={$ibB:1}
W.iu.prototype={
i:function(a){return String(a)}}
W.iM.prototype={
gm:function(a){return a.length}}
W.bX.prototype={$ibX:1}
W.en.prototype={
h:function(a,b){return P.bn(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bn(s.value[1]))}},
ga4:function(a){var s=H.c([],t.s)
this.I(a,new W.iN(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iG:1}
W.iN.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eo.prototype={
h:function(a,b){return P.bn(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bn(s.value[1]))}},
ga4:function(a){var s=H.c([],t.s)
this.I(a,new W.iO(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iG:1}
W.iO.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aF.prototype={$iaF:1}
W.ep.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.al.prototype={$ial:1}
W.a2.prototype={
gaO:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.b(P.ly("No elements"))
if(r>1)throw H.b(P.ly("More than one element"))
s=s.firstChild
s.toString
return s},
ab:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b])},
gO:function(a){var s=this.a.childNodes
return new W.cC(s,s.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.y.prototype={
ih:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
ik:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.o1(s,b,a)}catch(q){H.ag(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.ep(a):s},
h1:function(a,b,c){return a.replaceChild(b,c)},
$iy:1}
W.cU.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.aG.prototype={
gm:function(a){return a.length},
$iaG:1}
W.eD.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.eM.prototype={
h:function(a,b){return P.bn(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bn(s.value[1]))}},
ga4:function(a){var s=H.c([],t.s)
this.I(a,new W.j1(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iG:1}
W.j1.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eO.prototype={
gm:function(a){return a.length}}
W.au.prototype={$iau:1}
W.eS.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.aH.prototype={$iaH:1}
W.eT.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
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
W.eZ.prototype={
h:function(a,b){return a.getItem(H.lP(b))},
l:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga4:function(a){var s=H.c([],t.s)
this.I(a,new W.jd(s))
return s},
gm:function(a){return a.length},
$iG:1}
W.jd.prototype={
$2:function(a,b){return this.a.push(a)}}
W.av.prototype={$iav:1}
W.bh.prototype={$ibh:1}
W.cZ.prototype={
an:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
s=W.om("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.a2(r).ab(0,new W.a2(s))
return r}}
W.f2.prototype={
an:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.an(s.createElement("table"),b,c,d)
s.toString
s=new W.a2(s)
q=s.gaO(s)
q.toString
s=new W.a2(q)
p=s.gaO(s)
r.toString
p.toString
new W.a2(r).ab(0,new W.a2(p))
return r}}
W.f3.prototype={
an:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bJ(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.an(s.createElement("table"),b,c,d)
s.toString
s=new W.a2(s)
q=s.gaO(s)
r.toString
q.toString
new W.a2(r).ab(0,new W.a2(q))
return r}}
W.c7.prototype={$ic7:1}
W.aw.prototype={$iaw:1}
W.ad.prototype={$iad:1}
W.f6.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.f7.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.jj.prototype={
gm:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.bD.prototype={$ibD:1}
W.fc.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
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
W.b0.prototype={}
W.jE.prototype={
i:function(a){return String(a)}}
W.fv.prototype={
gm:function(a){return a.length}}
W.bj.prototype={
ghE:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.B("deltaY is not supported"))},
ghD:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.B("deltaX is not supported"))},
$ibj:1}
W.ca.prototype={
h2:function(a,b){return a.requestAnimationFrame(H.cj(b,1))},
eW:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cb.prototype={$icb:1}
W.fD.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.da.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
v:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aL(b)
s=a.left==s.gbz(b)&&a.top==s.gbE(b)&&a.width==s.gaN(b)&&a.height==s.gaH(b)}else s=!1
return s},
gS:function(a){return W.n0(J.ah(a.left),J.ah(a.top),J.ah(a.width),J.ah(a.height))},
gaH:function(a){return a.height},
gaN:function(a){return a.width}}
W.fS.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.df.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.hb.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.hi.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.fA.prototype={
I:function(a,b){var s,r,q,p,o
for(s=this.ga4(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
ga4:function(a){var s,r,q,p,o=this.a.attributes,n=H.c([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.d(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fK.prototype={
h:function(a,b){return this.a.getAttribute(H.lP(b))},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.ga4(this).length}}
W.ln.prototype={}
W.fN.prototype={
hk:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.o2(s,this.c,r,!1)}}}
W.k1.prototype={
$1:function(a){return this.a.$1(a)}}
W.lD.prototype={}
W.cc.prototype={
ez:function(a){var s
if($.db.gbx($.db)){for(s=0;s<262;++s)$.db.l(0,C.X[s],W.qL())
for(s=0;s<12;++s)$.db.l(0,C.o[s],W.qM())}},
aV:function(a){return $.nY().G(0,W.cy(a))},
aw:function(a,b,c){var s=$.db.h(0,H.f(W.cy(a))+"::"+b)
if(s==null)s=$.db.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iam:1}
W.N.prototype={
gO:function(a){return new W.cC(a,this.gm(a))}}
W.cV.prototype={
aV:function(a){return C.b.dz(this.a,new W.iR(a))},
aw:function(a,b,c){return C.b.dz(this.a,new W.iQ(a,b,c))},
$iam:1}
W.iR.prototype={
$1:function(a){return a.aV(this.a)}}
W.iQ.prototype={
$1:function(a){return a.aw(this.a,this.b,this.c)}}
W.dl.prototype={
eC:function(a,b,c,d){var s,r,q
this.a.ab(0,c)
s=b.bH(0,new W.k9())
r=b.bH(0,new W.ka())
this.b.ab(0,s)
q=this.c
q.ab(0,C.w)
q.ab(0,r)},
aV:function(a){return this.a.G(0,W.cy(a))},
aw:function(a,b,c){var s=this,r=W.cy(a),q=s.c
if(q.G(0,H.f(r)+"::"+b))return s.d.hq(c)
else if(q.G(0,"*::"+b))return s.d.hq(c)
else{q=s.b
if(q.G(0,H.f(r)+"::"+b))return!0
else if(q.G(0,"*::"+b))return!0
else if(q.G(0,H.f(r)+"::*"))return!0
else if(q.G(0,"*::*"))return!0}return!1},
$iam:1}
W.k9.prototype={
$1:function(a){return!C.b.G(C.o,a)}}
W.ka.prototype={
$1:function(a){return C.b.G(C.o,a)}}
W.hk.prototype={
aw:function(a,b,c){if(this.es(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.G(0,b)
return!1}}
W.kf.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.hj.prototype={
aV:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cy(a)==="foreignObject")return!1
if(s)return!0
return!1},
aw:function(a,b,c){if(b==="is"||C.a.aa(b,"on"))return!1
return this.aV(a)},
$iam:1}
W.cC.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cn(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gC:function(a){return this.d}}
W.am.prototype={}
W.k8.prototype={}
W.hu.prototype={
cS:function(a){var s=this,r=new W.kn(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
b6:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.m6(a)
else b.removeChild(a)},
h7:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.o5(a)
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
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.ag(p)}r="element unprintable"
try{r=J.a7(a)}catch(p){H.ag(p)}try{q=W.cy(a)
this.h6(a,b,n,r,q,m,l)}catch(p){if(H.ag(p) instanceof P.ai)throw p
else{this.b6(a,b)
window
o="Removing corrupted element "+H.f(r)
if(typeof console!="undefined")window.console.warn(o)}}},
h6:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.b6(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aV(a)){m.b6(a,b)
window
s="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.aw(a,"is",g)){m.b6(a,b)
window
s="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.ga4(f)
r=H.c(s.slice(0),H.lO(s).K("x<1>"))
for(q=f.ga4(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.d(r,q)
p=r[q]
o=m.a
n=J.o9(p)
H.lP(p)
if(!o.aw(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.cS(a.content)}}
W.kn.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.h7(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.b6(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.ly("Corrupt HTML")
throw H.b(q)}}catch(o){H.ag(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.fE.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fP.prototype={}
W.fQ.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h7.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.hf.prototype={}
W.hl.prototype={}
W.hm.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.hn.prototype={}
W.ho.prototype={}
W.hv.prototype={}
W.hw.prototype={}
W.hx.prototype={}
W.hy.prototype={}
W.hz.prototype={}
W.hA.prototype={}
W.hB.prototype={}
W.hC.prototype={}
W.hD.prototype={}
W.hE.prototype={}
P.kb.prototype={
cu:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bG:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.lR(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.aj)return new Date(a.a)
if(t.fv.b(a))throw H.b(P.jy("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.d.b(a))return a
if(t.bX.b(a))return a
if(t.v.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.cu(a)
r=o.b
q=r.length
if(s>=q)return H.d(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.lf(a,new P.kd(n,o))
return n.a}if(t.aH.b(a)){s=o.cu(a)
n=o.b
if(s>=n.length)return H.d(n,s)
p=n[s]
if(p!=null)return p
return o.hz(a,s)}if(t.eH.b(a)){s=o.cu(a)
r=o.b
q=r.length
if(s>=q)return H.d(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.d(r,s)
r[s]=p
o.hS(a,new P.ke(n,o))
return n.b}throw H.b(P.jy("structured clone of other type"))},
hz:function(a,b){var s,r=J.b3(a),q=r.gm(a),p=new Array(q),o=this.b
if(b>=o.length)return H.d(o,b)
o[b]=p
if(typeof q!=="number")return H.w(q)
s=0
for(;s<q;++s){o=this.bG(r.h(a,s))
if(s>=p.length)return H.d(p,s)
p[s]=o}return p}}
P.kd.prototype={
$2:function(a,b){this.a.a[a]=this.b.bG(b)},
$S:3}
P.ke.prototype={
$2:function(a,b){this.a.b[a]=this.b.bG(b)},
$S:3}
P.du.prototype={$ibz:1,
gdK:function(a){return this.a}}
P.ky.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.kc.prototype={
hS:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e3.prototype={
gbp:function(){var s=this.b,r=H.dB(s)
return new H.aU(new H.b1(s,new P.ic(),r.K("b1<i.E>")),new P.id(),r.K("aU<i.E,E>"))},
l:function(a,b,c){var s=this.gbp()
J.o7(s.b.$1(J.hJ(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.aN(this.gbp().a)},
h:function(a,b){var s=this.gbp()
return s.b.$1(J.hJ(s.a,b))},
gO:function(a){var s=P.lw(this.gbp(),!1,t.h)
return new J.a8(s,s.length)}}
P.ic.prototype={
$1:function(a){return t.h.b(a)}}
P.id.prototype={
$1:function(a){return t.h.a(a)}}
P.h6.prototype={
gcN:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.B()
if(typeof r!=="number")return H.w(r)
return this.$ti.c.a(s+r)},
gdF:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.B()
if(typeof r!=="number")return H.w(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
v:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.aL(b)
if(s==r.gbz(b)){q=n.b
if(q==r.gbE(b)){p=n.c
if(typeof s!=="number")return s.B()
if(typeof p!=="number")return H.w(p)
o=n.$ti.c
if(o.a(s+p)===r.gcN(b)){s=n.d
if(typeof q!=="number")return q.B()
if(typeof s!=="number")return H.w(s)
r=o.a(q+s)===r.gdF(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gS:function(a){var s,r=this,q=r.a,p=J.ah(q),o=r.b,n=J.ah(o),m=r.c
if(typeof q!=="number")return q.B()
if(typeof m!=="number")return H.w(m)
s=r.$ti.c
m=C.c.gS(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.B()
if(typeof q!=="number")return H.w(q)
q=C.c.gS(s.a(o+q))
return P.pb(P.k3(P.k3(P.k3(P.k3(0,p),n),m),q))}}
P.aa.prototype={
gbz:function(a){return this.a},
gbE:function(a){return this.b},
gaN:function(a){return this.c},
gaH:function(a){return this.d}}
P.aT.prototype={$iaT:1}
P.ef.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.aX.prototype={$iaX:1}
P.ex.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.iU.prototype={
gm:function(a){return a.length}}
P.c4.prototype={$ic4:1}
P.f0.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.m.prototype={
gdH:function(a){return new P.e3(a,new W.a2(a))},
an:function(a,b,c,d){var s,r,q,p,o,n=H.c([],t.o)
n.push(W.mZ(null))
n.push(W.n4())
n.push(new W.hj())
c=new W.hu(new W.cV(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.q.hA(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.a2(q)
o=n.gaO(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.aZ.prototype={$iaZ:1}
P.fd.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.fV.prototype={}
P.fW.prototype={}
P.h2.prototype={}
P.h3.prototype={}
P.hg.prototype={}
P.hh.prototype={}
P.hp.prototype={}
P.hq.prototype={}
P.bi.prototype={$il:1,$ih:1,$in:1}
P.hN.prototype={
gm:function(a){return a.length}}
P.dO.prototype={
h:function(a,b){return P.bn(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bn(s.value[1]))}},
ga4:function(a){var s=H.c([],t.s)
this.I(a,new P.hO(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iG:1}
P.hO.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dP.prototype={
gm:function(a){return a.length}}
P.b7.prototype={}
P.ey.prototype={
gm:function(a){return a.length}}
P.fB.prototype={}
P.eL.prototype={
iq:function(a,b,c,d,e,f,g){var s
if(t.v.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.qE(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.bM("Incorrect number or type of arguments"))}}
P.eW.prototype={
gm:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.b(P.Q(b,a,null,null,null))
s=P.bn(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.hc.prototype={}
P.hd.prototype={}
K.b6.prototype={
aI:function(a,b){return!0},
i:function(a){return"all"}}
K.e6.prototype={
aI:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aI(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.ix.prototype={}
K.ac.prototype={
aI:function(a,b){return!this.eo(0,b)},
i:function(a){return"!["+this.cW(0)+"]"}}
K.iX.prototype={
aI:function(a,b){if(typeof b!=="number")return H.w(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.as(this.a),r=H.as(this.b)
return s+".."+r}}
K.j2.prototype={
ex:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.v("May not create a Set with zero characters."))
s=new H.D(t.E)
for(r=new H.bd(a,a.gm(a));r.u();){q=r.d
s.l(0,q,!0)}p=P.lw(s.ga4(s),!0,t.e)
C.b.en(p)
this.a=p},
aI:function(a,b){return C.b.G(this.a,b)},
i:function(a){return P.f1(this.a,0,null)}}
L.eX.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.fe(this.a.k(0,b))
p.a=H.c([],t.B)
p.c=!1
this.c.push(p)
return p},
hN:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aI(0,a))return p}return null},
i:function(a){return this.b},
dn:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.G(0,l))m+=" (consume)"
for(l=n.d.c,l=l.ga4(l),l=l.gO(l);l.u();){r=l.gC(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.G(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.fa.prototype={
i:function(a){var s=H.m1(this.b,"\n","\\n"),r=H.m1(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fb.prototype={
aK:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.o)(c),++r){q=c[r]
this.c.l(0,q,b)}},
i:function(a){return this.b}}
L.jk.prototype={
k:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eX(this,b)
s.c=H.c([],t.br)
this.a.l(0,b,s)}return s},
P:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.fb(a)
s.c=new H.D(t.dO)
this.b.l(0,a,s)}return s},
cO:function(a){return this.iv(a)},
iv:function(a){var s=this
return P.q0(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cO(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.c([],c)
a0=H.c([],c)
a1=H.c([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.cK(a1,0)
else{if(!r.u()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hN(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.f1(a0,0,null)
throw H.b(P.v("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.q(P.B("removeRange"))
P.bg(0,k,a0.length)
a0.splice(0,k-0)
C.b.ab(a1,a0)
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
if(d.d!=null){g=P.f1(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.fa(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.G(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.p9()
case 1:return P.pa(o)}}},t.eB)},
i:function(a){var s,r=new P.T(""),q=this.d
if(q!=null)r.a=q.dn()+"\n"
for(q=this.a,q=q.giw(q),q=q.gO(q);q.u();){s=q.gC(q)
if(s!=this.d)r.a+=s.dn()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.fe.prototype={
i:function(a){return this.b.b+": "+this.cW(0)}}
O.a9.prototype={
bn:function(a){this.a=H.c([],a.K("x<0*>"))
this.c=this.b=null},
cT:function(a,b,c){this.b=b
this.c=a},
b_:function(a,b){return this.cT(a,null,b)},
dg:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
d_:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gm:function(a){return this.a.length},
gO:function(a){var s=this.a
return new J.a8(s,s.length)},
J:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.dB(q).K("x<a9.T*>")
if(q.dg(H.c([b],p))){s=q.a
r=s.length
s.push(b)
q.d_(r,H.c([b],p))}},
ab:function(a,b){var s,r
if(this.dg(b)){s=this.a
r=s.length
C.b.ab(s,b)
this.d_(r,b)}},
$ih:1}
O.cQ.prototype={
gm:function(a){return this.a.length},
gq:function(){var s=this.b
return s==null?this.b=D.I():s},
aP:function(){var s=this.b
if(s!=null)s.D(null)},
ga5:function(a){var s=this.a
if(s.length>0)return C.b.gay(s)
else return V.bW()},
bD:function(a){var s=this.a
if(a==null)s.push(V.bW())
else s.push(a)
this.aP()},
aJ:function(){var s=this.a
if(s.length>0){s.pop()
this.aP()}}}
E.hR.prototype={}
E.bx.prototype={
sad:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gq().L(0,q.ge6())
s=q.c
if(s!=null)s.gq().n(0,q.ge6())
r=new D.F("shape",p,q.c)
r.b=!0
q.bA(r)}},
as:function(a,b){var s
for(s=this.y.a,s=new J.a8(s,s.length);s.u();)s.d.as(0,b)},
ak:function(a){var s,r=this,q=a.dx
q.a.push(q.ga5(q))
q.aP()
a.cI(r.f)
q=a.dy
s=(q&&C.b).gay(q)
if(s!=null&&r.d!=null)s.ea(a,r)
for(q=r.y.a,q=new J.a8(q,q.length);q.u();)q.d.ak(a)
a.cH()
a.dx.aJ()},
bA:function(a){var s=this.z
if(s!=null)s.D(a)},
a6:function(){return this.bA(null)},
e7:function(a){this.e=null
this.bA(a)},
i5:function(){return this.e7(null)},
e5:function(a){this.bA(a)},
i2:function(){return this.e5(null)},
i1:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ge4(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bQ()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}this.a6()},
i4:function(a,b){var s,r
for(s=b.gO(b),r=this.ge4();s.u();)s.gC(s).gq().L(0,r)
this.a6()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bP.prototype={
i:function(a){return this.b}}
E.c1.prototype={
i:function(a){return this.b}}
E.fL.prototype={}
E.iY.prototype={
ew:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.aj(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cQ()
r=t.h8
s.a=H.c([],r)
s.gq().n(0,new E.iZ(q))
q.cy=s
s=new O.cQ()
s.a=H.c([],r)
s.gq().n(0,new E.j_(q))
q.db=s
s=new O.cQ()
s.a=H.c([],r)
s.gq().n(0,new E.j0(q))
q.dx=s
s=H.c([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.D(t.h9)},
gig:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga5(q)
s=r.db
s=r.z=q.w(0,s.ga5(s))
q=s}return q},
cI:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gay(s):a)},
cH:function(){var s=this.dy
if(s.length>1)s.pop()},
dw:function(a){var s=a.b
if(s.length===0)throw H.b(P.v("May not cache a shader with no name."))
if(this.fr.ci(0,s))throw H.b(P.v('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.l(0,s,a)}}
E.iZ.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.j_.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.j0.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.f9.prototype={
d2:function(a){this.ec()},
d1:function(){return this.d2(null)},
ghT:function(){var s,r=this,q=Date.now(),p=C.c.a8(P.mg(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.aj(q,!1)
return s/p},
di:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.w()
if(typeof p!=="number")return H.w(p)
s=C.d.cv(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.w()
r=C.d.cv(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.mJ(C.n,q.gil())}},
ec:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.F.eW(s)
r=W.nl(new E.ji(this),t.H)
r.toString
C.F.h2(s,r)}},
ij:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.di()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.aj(p,!1)
q.y=P.mg(p-q.r.a).a*0.000001
p=q.cy
C.b.sm(p.a,0)
p.aP()
p=q.db
C.b.sm(p.a,0)
p.aP()
p=q.dx
C.b.sm(p.a,0)
p.aP()
p=q.dy
p.toString
C.b.sm(p,0)
q.dy.push(null)
m.ak(n.e)}q=n.Q
if(q!=null)q.D(null)}catch(o){s=H.ag(o)
r=H.lX(o)
P.m0("Error: "+H.f(s))
P.m0("Stack: "+H.f(r))
throw H.b(s)}}}
E.ji.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ij()}}}
Z.fw.prototype={}
Z.dS.prototype={
Z:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ag(q)
r=P.v('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.fx.prototype={}
Z.co.prototype={
aG:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
Z:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].Z(a)},
aM:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
ak:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=t.i,n=H.c([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)n.push(s[q].i(0))
p=H.c([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a7(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(n,", ")+"\nAttrs:   "+C.b.j(p,", ")}}
Z.bU.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eI(this.c))+"'")+"]"}}
Z.bF.prototype={
gcV:function(a){var s=this.a,r=(s&$.aM().a)!==0?3:0
if((s&$.bq().a)!==0)r+=3
if((s&$.bp().a)!==0)r+=3
if((s&$.bK().a)!==0)r+=2
if((s&$.bL().a)!==0)r+=3
if((s&$.dH().a)!==0)r+=3
if((s&$.dI().a)!==0)r+=4
if((s&$.cm().a)!==0)++r
return(s&$.bo().a)!==0?r+4:r},
hr:function(a){var s,r=$.aM(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bq()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bp()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bK()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bL()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dH()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dI()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cm()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bo()
if((q&r.a)!==0)if(s===a)return r
return $.nW()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bF))return!1
return this.a===b.a},
i:function(a){var s=H.c([],t.i),r=this.a
if((r&$.aM().a)!==0)s.push("Pos")
if((r&$.bq().a)!==0)s.push("Norm")
if((r&$.bp().a)!==0)s.push("Binm")
if((r&$.bK().a)!==0)s.push("Txt2D")
if((r&$.bL().a)!==0)s.push("TxtCube")
if((r&$.dH().a)!==0)s.push("Clr3")
if((r&$.dI().a)!==0)s.push("Clr4")
if((r&$.cm().a)!==0)s.push("Weight")
if((r&$.bo().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hS.prototype={}
D.bQ.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=H.c([],t.f):s).push(b)},
L:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.G(q,b)
if(q===!0){q=r.a
s=(q&&C.b).L(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.G(q,b)
if(q===!0){q=r.b
s=(q&&C.b).L(q,b)||s}return s},
D:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.U()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.I(P.lw(s,!0,t.dm),new D.i9(o))
s=p.b
if(s!=null){p.b=H.c([],t.f)
C.b.I(s,new D.ia(o))}return!0},
hJ:function(){return this.D(null)},
az:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.D(s)}}}}
D.i9.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.ia.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.U.prototype={}
D.aQ.prototype={}
D.aR.prototype={}
D.F.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dT.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dT))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ed.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ed))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ip.prototype={
ia:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
i6:function(a){this.c=a.b
this.d.L(0,a.a)
return!1}}
X.cM.prototype={}
X.iv.prototype={
b4:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.w()
s=b.b
r=o.ch
if(typeof s!=="number")return s.w()
q=new V.a4(m.a+l*k,m.b+s*r)
r=o.a.gaW()
p=new X.bY(a,V.bf(),o.x,r,q)
p.b=!0
o.z=new P.aj(n,!1)
o.x=q
return p},
cG:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.ek()
if(typeof s!=="number")return s.al()
this.r=(s&~r)>>>0
return!1},
bf:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.b4(a,b))
return!0},
ib:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaW()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.w()
o=a.b
n=m.cy
if(typeof o!=="number")return o.w()
r=new X.bZ(new V.ae(q*p,o*n),s,r)
r.b=!0
l.D(r)
return!0},
fw:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cM(c,p.a.gaW(),b)
q.b=!0
r.D(q)
p.y=new P.aj(s,!1)
p.x=V.bf()}}
X.ap.prototype={
v:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.ap))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bY.prototype={}
X.iP.prototype={
bR:function(a,b,c){var s=this,r=new P.aj(Date.now(),!1),q=s.a.gaW(),p=new X.bY(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cG:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.D(this.bR(a,b,!0))
return!0},
bg:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.ek()
if(typeof r!=="number")return r.al()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.D(s.bR(a,b,!0))
return!0},
bf:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.bR(a,b,!1))
return!0},
ic:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaW()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.w()
p=a.b
o=n.ch
if(typeof p!=="number")return p.w()
s=new X.bZ(new V.ae(r*q,p*o),s,b)
s.b=!0
m.D(s)
return!0},
gdM:function(){var s=this.b
return s==null?this.b=D.I():s},
gcP:function(){var s=this.c
return s==null?this.c=D.I():s},
ge3:function(){var s=this.d
return s==null?this.d=D.I():s}}
X.bZ.prototype={}
X.eG.prototype={}
X.d0.prototype={}
X.jm.prototype={
b4:function(a,b){var s=this,r=new P.aj(Date.now(),!1),q=a.length>0?a[0]:V.bf(),p=s.a.gaW(),o=new X.d0(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
i9:function(a){var s=this.b
if(s==null)return!1
s.D(this.b4(a,!0))
return!0},
i7:function(a){var s=this.c
if(s==null)return!1
s.D(this.b4(a,!0))
return!0},
i8:function(a){var s=this.d
if(s==null)return!1
s.D(this.b4(a,!1))
return!0}}
X.fs.prototype={
gaW:function(){var s=this.a,r=C.i.gdJ(s).c
r.toString
s=C.i.gdJ(s).d
s.toString
return V.mD(0,0,r,s)},
d7:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.ed(s,new X.ap(r,a.altKey,a.shiftKey))},
aT:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ap(r,a.altKey,a.shiftKey)},
c7:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ap(r,a.altKey,a.shiftKey)},
aD:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a0()
if(typeof o!=="number")return H.w(o)
s=r.top
if(typeof p!=="number")return p.a0()
if(typeof s!=="number")return H.w(s)
return new V.a4(q-o,p-s)},
b5:function(a){return new V.ae(a.movementX,a.movementY)},
c2:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.c([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=C.d.ar(p.pageX)
C.d.ar(p.pageY)
n=k.left
if(typeof n!=="number")return H.w(n)
C.d.ar(p.pageX)
m=C.d.ar(p.pageY)
l=k.top
if(typeof l!=="number")return H.w(l)
j.push(new V.a4(o-n,m-l))}return j},
aB:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dT(s,new X.ap(r,a.altKey,a.shiftKey))},
bS:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a0()
if(typeof n!=="number")return H.w(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a0()
if(typeof p!=="number")return H.w(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.w(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.w(p)
p=r<p}else p=!1
return p},
fp:function(a){this.f=!0},
fd:function(a){this.f=!1},
fj:function(a){if(this.f&&this.bS(a))a.preventDefault()},
fu:function(a){var s
if(!this.f)return
s=this.d7(a)
this.b.ia(s)},
fs:function(a){var s
if(!this.f)return
s=this.d7(a)
this.b.i6(s)},
fA:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aT(a)
if(p.x){s=p.aB(a)
r=p.b5(a)
if(p.d.cG(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aB(a)
q=p.aD(a)
if(p.c.cG(s,q))a.preventDefault()},
fE:function(a){var s,r,q,p=this
p.aT(a)
s=p.aB(a)
if(p.x){r=p.b5(a)
if(p.d.bg(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.bg(s,q))a.preventDefault()},
fn:function(a){var s,r,q,p=this
if(!p.bS(a)){p.aT(a)
s=p.aB(a)
if(p.x){r=p.b5(a)
if(p.d.bg(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.bg(s,q))a.preventDefault()}},
fC:function(a){var s,r,q,p=this
p.aT(a)
s=p.aB(a)
if(p.x){r=p.b5(a)
if(p.d.bf(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.bf(s,q))a.preventDefault()},
fl:function(a){var s,r,q,p=this
if(!p.bS(a)){p.aT(a)
s=p.aB(a)
if(p.x){r=p.b5(a)
if(p.d.bf(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.bf(s,q))a.preventDefault()}},
fG:function(a){var s,r,q=this
q.aT(a)
s=new V.ae((a&&C.E).ghD(a),C.E.ghE(a)).w(0,q.Q)
if(q.x){if(q.d.ib(s))a.preventDefault()
return}if(q.r)return
r=q.aD(a)
if(q.c.ic(s,r))a.preventDefault()},
fI:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aB(q.y)
r=q.aD(q.y)
q.d.fw(s,r,p)}},
fY:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c7(a)
s=r.c2(a)
if(r.e.i9(s))a.preventDefault()},
fU:function(a){var s
this.c7(a)
s=this.c2(a)
if(this.e.i7(s))a.preventDefault()},
fW:function(a){var s
this.c7(a)
s=this.c2(a)
if(this.e.i8(s))a.preventDefault()}}
D.dQ.prototype={$iV:1}
D.bv.prototype={
aA:function(a){var s=this.r
if(s!=null)s.D(a)},
eB:function(){return this.aA(null)},
$iV:1}
D.V.prototype={}
D.cH.prototype={
aA:function(a){var s=this.y
if(s!=null)s.D(a)},
df:function(a){var s=this.z
if(s!=null)s.D(a)},
fv:function(){return this.df(null)},
fK:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(q==null||this.eQ(q))return!1}return!0},
f7:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gde(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o instanceof D.bv)this.f.push(o)
n=o.r
if(n==null){n=new D.bQ()
n.d=0
o.r=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}s=new D.aQ()
s.b=!0
this.aA(s)},
fO:function(a,b){var s,r,q
for(s=b.gO(b),r=this.gde();s.u();){q=s.gC(s)
C.b.L(this.e,q)
q.gq().L(0,r)}s=new D.aR()
s.b=!0
this.aA(s)},
eQ:function(a){var s=C.b.G(this.f,a)
return s}}
D.eF.prototype={$iV:1}
D.eU.prototype={$iV:1}
V.r.prototype={
v:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.r))return!1
s=b.a
$.H().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.aB.prototype={
v:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aB))return!1
s=b.a
$.H().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.L(s.a,3,0)+", "+V.L(s.b,3,0)+", "+V.L(s.c,3,0)+", "+V.L(s.d,3,0)+"]"}}
V.i7.prototype={}
V.em.prototype={
ag:function(a,b){var s=this,r=H.c([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
v:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.em))return!1
s=b.a
$.H().toString
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
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.cl(H.c([o.a,o.d,o.r],n),3,0),l=V.cl(H.c([o.b,o.e,o.x],n),3,0),k=V.cl(H.c([o.c,o.f,o.y],n),3,0)
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
V.be.prototype={
ag:function(a,b){var s=this,r=H.c([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
cA:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.H().toString
if(Math.abs(b3-0)<1e-9)return V.bW()
s=1/b3
r=-l
q=-a2
return V.aW((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
w:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aW(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bF:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.C(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bk:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.P(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
v:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.be))return!1
s=b.a
$.H().toString
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
H:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.cl(H.c([n.a,n.e,n.y,n.cx],m),3,0),k=V.cl(H.c([n.b,n.f,n.z,n.cy],m),3,0),j=V.cl(H.c([n.c,n.r,n.Q,n.db],m),3,0),i=V.cl(H.c([n.d,n.x,n.ch,n.dx],m),3,0)
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
V.a4.prototype={
a9:function(a){return new V.ae(a.a-this.a,a.b-this.b)},
v:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
s=b.a
$.H().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.P.prototype={
B:function(a,b){return new V.P(this.a+b.a,this.b+b.b,this.c+b.c)},
a0:function(a,b){return new V.P(this.a-b.a,this.b-b.b,this.c-b.c)},
w:function(a,b){return new V.P(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.P))return!1
s=b.a
$.H().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.ar.prototype={
v:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ar))return!1
s=b.a
$.H().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.L(s.a,3,0)+", "+V.L(s.b,3,0)+", "+V.L(s.c,3,0)+", "+V.L(s.d,3,0)+"]"}}
V.eK.prototype={
gaj:function(){var s=this.c,r=this.d
return s>r?r:s},
v:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eK))return!1
s=b.a
$.H().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.L(s.a,3,0)+", "+V.L(s.b,3,0)+", "+V.L(s.c,3,0)+", "+V.L(s.d,3,0)+"]"}}
V.ae.prototype={
cB:function(a){return Math.sqrt(this.ac(this))},
ac:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.w()
if(typeof p!=="number")return H.w(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.w(r)
return q*p+s*r},
w:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.w()
if(typeof b!=="number")return H.w(b)
s=this.b
if(typeof s!=="number")return s.w()
return new V.ae(r*b,s*b)},
a2:function(a,b){var s,r
$.H().toString
if(Math.abs(b-0)<1e-9){s=$.mR
return s==null?$.mR=new V.ae(0,0):s}s=this.a
if(typeof s!=="number")return s.a2()
r=this.b
if(typeof r!=="number")return r.a2()
return new V.ae(s/b,r/b)},
v:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
s=b.a
r=this.a
$.H().toString
if(typeof s!=="number")return s.a0()
if(typeof r!=="number")return H.w(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a0()
if(typeof r!=="number")return H.w(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.C.prototype={
cB:function(a){return Math.sqrt(this.ac(this))},
ac:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cC:function(a,b){return new V.C(V.hH(this.a,a.a,b),V.hH(this.b,a.b,b),V.hH(this.c,a.c,b))},
E:function(){var s=this,r=Math.sqrt(s.ac(s))
if(r===1)return s
return s.a2(0,r)},
aE:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.C(s*r-q*p,q*o-n*r,n*p-s*o)},
B:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.C(-this.a,-this.b,-this.c)},
w:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
a2:function(a,b){$.H().toString
if(Math.abs(b-0)<1e-9)return V.d9()
return new V.C(this.a/b,this.b/b,this.c/b)},
e2:function(){$.H().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
v:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.C))return!1
s=b.a
$.H().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
U.hU.prototype={
bK:function(a){var s=V.r_(a,this.c,this.b)
return s},
gq:function(){var s=this.y
return s==null?this.y=D.I():s},
R:function(a){var s=this.y
if(s!=null)s.D(a)},
scQ:function(a,b){},
scD:function(a){var s,r=this,q=r.b
$.H().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bK(s)}q=new D.F("maximumLocation",q,r.b)
q.b=!0
r.R(q)}},
scF:function(a){var s,r=this,q=r.c
$.H().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bK(s)}q=new D.F("minimumLocation",q,r.c)
q.b=!0
r.R(q)}},
sa_:function(a,b){var s,r=this
b=r.bK(b)
s=r.d
$.H().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.F("location",s,b)
s.b=!0
r.R(s)}},
scE:function(a){var s,r,q=this,p=q.e
$.H().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.F("maximumVelocity",p,a)
p.b=!0
q.R(p)}},
sU:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.H().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.F("velocity",r,a)
r.b=!0
s.R(r)}},
scl:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.H().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.F("dampening",s,a)
s.b=!0
this.R(s)}},
as:function(a,b){var s,r,q,p=this,o=p.f
$.H().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa_(0,p.d+s*b)
o=p.x
$.H().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sU(s)}}}
U.cq.prototype={
gq:function(){var s=this.b
return s==null?this.b=D.I():s},
aZ:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cq))return!1
return J.J(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.bS.prototype={
gq:function(){var s=this.e
return s==null?this.e=D.I():s},
R:function(a){var s=this.e
if(s!=null)s.D(a)},
af:function(){return this.R(null)},
f5:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaQ(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gq()
m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.aQ()
s.b=!0
this.R(s)},
fM:function(a,b){var s,r
for(s=b.gO(b),r=this.gaQ();s.u();)s.gC(s).gq().L(0,r)
s=new D.aR()
s.b=!0
this.R(s)},
aZ:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.ah()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a8(p,p.length),s=null;p.u();){o=p.d
if(o!=null){r=o.aZ(0,b,c)
if(r!=null)s=s==null?r:r.w(0,s)}}q.f=s==null?V.bW():s
p=q.e
if(p!=null)p.az(0)}return q.f},
v:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bS))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.d(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.d(p,r)
if(!J.J(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iX:1}
U.X.prototype={}
U.d6.prototype={
gq:function(){var s=this.cy
return s==null?this.cy=D.I():s},
R:function(a){var s=this.cy
if(s!=null)s.D(a)},
af:function(){return this.R(null)},
b7:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gdM().n(0,s.gbT())
s.a.c.ge3().n(0,s.gbV())
s.a.c.gcP().n(0,s.gbX())
return!0},
bU:function(a){var s=this
if(!J.J(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bW:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.y)return
if(l.x){s=a.y.a9(a.d)
s=s.ac(s)
r=l.r
if(typeof r!=="number")return H.w(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a9(a.d).w(0,2).a2(0,s.gaj())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.w()
q=l.e
if(typeof q!=="number")return H.w(q)
r.sU(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a9(q).w(0,2).a2(0,s.gaj())
r=l.b
o=p.a
if(typeof o!=="number")return o.T()
n=l.e
if(typeof n!=="number")return H.w(n)
m=l.z
if(typeof m!=="number")return H.w(m)
r.sa_(0,-o*n+m)
l.b.sU(0)
l.Q=a.z.a9(q).w(0,2).a2(0,s.gaj())}l.af()},
bY:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.ac(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.w()
q=p.e
if(typeof q!=="number")return H.w(q)
s.sU(r*10*q)
p.af()}},
aZ:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.ah()
if(o<n){p.ch=n
s=b.y
p.b.as(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.aW(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iX:1}
U.d7.prototype={
gq:function(){var s=this.fx
return s==null?this.fx=D.I():s},
R:function(a){var s=this.fx
if(s!=null)s.D(a)},
af:function(){return this.R(null)},
b7:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gdM().n(0,q.gbT())
q.a.c.ge3().n(0,q.gbV())
q.a.c.gcP().n(0,q.gbX())
s=q.a.d
r=s.f
s=r==null?s.f=D.I():r
s.n(0,q.geY())
s=q.a.d
r=s.d
s=r==null?s.d=D.I():r
s.n(0,q.gf_())
s=q.a.e
r=s.b
s=r==null?s.b=D.I():r
s.n(0,q.ghi())
s=q.a.e
r=s.d
s=r==null?s.d=D.I():r
s.n(0,q.ghg())
s=q.a.e
r=s.c
s=r==null?s.c=D.I():r
s.n(0,q.ghe())
return!0},
av:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.T()
s=-s}if(this.r){if(typeof r!=="number")return r.T()
r=-r}return new V.ae(s,r)},
bU:function(a){var s=this
t.c.a(a)
if(!J.J(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bW:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a9(a.d)
s=s.ac(s)
r=l.Q
if(typeof r!=="number")return H.w(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.av(a.y.a9(a.d).w(0,2).a2(0,s.gaj()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.T()
q=l.y
if(typeof q!=="number")return H.w(q)
r.sU(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.T()
r=l.x
if(typeof r!=="number")return H.w(r)
q.sU(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.av(r.a9(q).w(0,2).a2(0,s.gaj()))
r=l.c
o=p.a
if(typeof o!=="number")return o.T()
n=l.y
if(typeof n!=="number")return H.w(n)
m=l.cy
if(typeof m!=="number")return H.w(m)
r.sa_(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.T()
o=l.x
if(typeof o!=="number")return H.w(o)
r=l.db
if(typeof r!=="number")return H.w(r)
m.sa_(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.av(a.z.a9(q).w(0,2).a2(0,s.gaj()))}l.af()},
bY:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.ac(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.T()
q=p.y
if(typeof q!=="number")return H.w(q)
s.sU(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.T()
s=p.x
if(typeof s!=="number")return H.w(s)
q.sU(-r*10*s)
p.af()}},
eZ:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
f0:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.J(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.av(r.a9(q).w(0,2).a2(0,s.gaj()))
r=l.c
o=p.a
if(typeof o!=="number")return o.T()
n=l.y
if(typeof n!=="number")return H.w(n)
m=l.cy
if(typeof m!=="number")return H.w(m)
r.sa_(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.T()
o=l.x
if(typeof o!=="number")return H.w(o)
r=l.db
if(typeof r!=="number")return H.w(r)
m.sa_(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.av(a.z.a9(q).w(0,2).a2(0,s.gaj()))
l.af()},
hj:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hh:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a9(a.d)
s=s.ac(s)
r=l.Q
if(typeof r!=="number")return H.w(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.av(a.y.a9(a.d).w(0,2).a2(0,s.gaj()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.T()
q=l.y
if(typeof q!=="number")return H.w(q)
r.sU(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.T()
r=l.x
if(typeof r!=="number")return H.w(r)
q.sU(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.av(r.a9(q).w(0,2).a2(0,s.gaj()))
r=l.c
o=p.a
if(typeof o!=="number")return o.T()
n=l.y
if(typeof n!=="number")return H.w(n)
m=l.cy
if(typeof m!=="number")return H.w(m)
r.sa_(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.T()
o=l.x
if(typeof o!=="number")return H.w(o)
r=l.db
if(typeof r!=="number")return H.w(r)
m.sa_(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.av(a.z.a9(q).w(0,2).a2(0,s.gaj()))}l.af()},
hf:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.ac(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.T()
q=p.y
if(typeof q!=="number")return H.w(q)
s.sU(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.T()
s=p.x
if(typeof s!=="number")return H.w(s)
q.sU(-r*10*s)
p.af()}},
aZ:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.ah()
if(o<n){p.dy=n
s=b.y
p.c.as(0,s)
p.b.as(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.aW(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.w(0,V.aW(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iX:1}
U.d8.prototype={
gq:function(){var s=this.r
return s==null?this.r=D.I():s},
R:function(a){var s=this.r
if(s!=null)s.D(a)},
b7:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.I():r
r=p.gf2()
s.n(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.I():q).n(0,r)
return!0},
f3:function(a){var s,r,q,p,o=this
if(!J.J(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.w()
p=s+r*q
if(s!==p){o.d=p
s=new D.F("zoom",s,p)
s.b=!0
o.R(s)}},
aZ:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aW(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iX:1}
M.cp.prototype={
gq:function(){var s=this.r
return s==null?this.r=D.I():s},
Y:function(a){var s=this.r
if(s!=null)s.D(a)},
b2:function(){return this.Y(null)},
fQ:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gX(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gq()
m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.aQ()
s.b=!0
this.Y(s)},
fS:function(a,b){var s,r
for(s=b.gO(b),r=this.gX();s.u();)s.gC(s).gq().L(0,r)
s=new D.aR()
s.b=!0
this.Y(s)},
ak:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a8(s,s.length);s.u();){r=s.d
if(r!=null)r.ak(a)}q.f=!1},
$ia6:1}
M.ct.prototype={
gq:function(){var s=this.r
return s==null?this.r=D.I():s},
Y:function(a){var s=this.r
if(s!=null)s.D(a)},
b2:function(){return this.Y(null)},
sb8:function(a){var s,r,q=this
if(a==null)a=new X.ik()
s=q.b
if(s!==a){if(s!=null)s.gq().L(0,q.gX())
r=q.b
q.b=a
a.gq().n(0,q.gX())
s=new D.F("camera",r,q.b)
s.b=!0
q.Y(s)}},
sbi:function(a,b){var s,r,q=this
if(b==null)b=X.lo(null)
s=q.c
if(s!==b){if(s!=null)s.gq().L(0,q.gX())
r=q.c
q.c=b
b.gq().n(0,q.gX())
s=new D.F("target",r,q.c)
s.b=!0
q.Y(s)}},
sbj:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gq().L(0,r.gX())
s=r.d
r.d=a
if(a!=null)a.gq().n(0,r.gX())
q=new D.F("technique",s,r.d)
q.b=!0
r.Y(q)}},
ak:function(a){var s=this
a.cI(s.d)
s.c.Z(a)
s.b.Z(a)
s.e.as(0,a)
s.e.ak(a)
s.b.aM(a)
s.c.toString
a.cH()},
$ia6:1}
M.cz.prototype={
Y:function(a){var s=this.y
if(s!=null)s.D(a)},
b2:function(){return this.Y(null)},
ff:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gX(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bQ()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.aQ()
s.b=!0
this.Y(s)},
fh:function(a,b){var s,r
for(s=b.gO(b),r=this.gX();s.u();)s.gC(s).gq().L(0,r)
s=new D.aR()
s.b=!0
this.Y(s)},
sb8:function(a){var s,r,q=this
if(a==null)a=X.mr(null)
s=q.b
if(s!==a){if(s!=null)s.gq().L(0,q.gX())
r=q.b
q.b=a
a.gq().n(0,q.gX())
s=new D.F("camera",r,q.b)
s.b=!0
q.Y(s)}},
sbi:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gq().L(0,r.gX())
s=r.c
r.c=b
b.gq().n(0,r.gX())
q=new D.F("target",s,r.c)
q.b=!0
r.Y(q)}},
sbj:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gq().L(0,r.gX())
s=r.d
r.d=a
if(a!=null)a.gq().n(0,r.gX())
q=new D.F("technique",s,r.d)
q.b=!0
r.Y(q)}},
gq:function(){var s=this.y
return s==null?this.y=D.I():s},
ak:function(a){var s,r=this
a.cI(r.d)
r.c.Z(a)
r.b.Z(a)
s=r.d
if(s!=null)s.as(0,a)
for(s=r.e.a,s=new J.a8(s,s.length);s.u();)s.d.as(0,a)
for(s=r.e.a,s=new J.a8(s,s.length);s.u();)s.d.ak(a)
r.b.toString
a.cy.aJ()
a.db.aJ()
r.c.toString
a.cH()},
$ia6:1}
M.a6.prototype={}
A.dN.prototype={}
A.hM.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hK:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dL:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a1.prototype={
gat:function(a){var s=this.a?1:0
return s|0|0},
i:function(a){var s=this.a?1:0
return""+(s|0|0)},
v:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a1))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.ek.prototype={
ev:function(c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3="Required uniform value, ",c4=", was not defined or used in shader.",c5="uniform mat4 objMat;\n"
c1.z=c6
s=new P.T("")
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
A.qf(c6,s)
A.qh(c6,s)
A.qg(c6,s)
A.qj(c6,s)
A.qk(c6,s)
A.qi(c6,s)
A.ql(c6,s)
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
c1.e_(0,q.charCodeAt(0)==0?q:q,A.qe(c1.z))
c1.Q=c1.x.h(0,"posAttr")
c1.cx=c1.x.h(0,"normAttr")
c1.ch=c1.x.h(0,"binmAttr")
c1.cy=c1.x.h(0,"txt2DAttr")
c1.db=c1.x.h(0,"txtCubeAttr")
c1.dx=c1.x.h(0,"bendAttr")
if(c6.dy)c1.id=t.q.a(c1.y.V(0,"invViewMat"))
if(r)c1.dy=t.q.a(c1.y.V(0,"objMat"))
if(p)c1.fr=t.q.a(c1.y.V(0,"viewObjMat"))
r=t.q
c1.fy=r.a(c1.y.V(0,"projViewObjMat"))
if(c6.go)c1.fx=r.a(c1.y.V(0,"viewMat"))
if(c6.x1)c1.k1=t.O.a(c1.y.V(0,"txt2DMat"))
if(c6.x2)c1.k2=r.a(c1.y.V(0,"txtCubeMat"))
if(c6.y1)c1.k3=r.a(c1.y.V(0,"colorMat"))
c1.r1=H.c([],t.hg)
q=c6.bu
if(q>0){c1.k4=c1.y.V(0,"bendMatCount")
for(l=0;l<q;++l){p=c1.r1
o=c1.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.q(P.v(c3+n+c4))
p.push(r.a(k))}}if(c6.a.a)c1.r2=t.r.a(c1.y.V(0,"emissionClr"))
if(c6.b.a)c1.x1=t.r.a(c1.y.V(0,"ambientClr"))
if(c6.c.a)c1.y2=t.r.a(c1.y.V(0,"diffuseClr"))
if(c6.d.a)c1.bv=t.r.a(c1.y.V(0,"invDiffuseClr"))
r=c6.e.a
if(!r)q=!1
else q=!0
if(q){c1.dP=t.n.a(c1.y.V(0,"shininess"))
if(r)c1.dO=t.r.a(c1.y.V(0,"specularClr"))}if(c6.db){c1.dQ=t.Q.a(c1.y.V(0,"envSampler"))
if(c6.r.a)c1.dR=t.r.a(c1.y.V(0,"reflectClr"))
r=c6.x.a
if(!r)q=!1
else q=!0
if(q){c1.dS=t.n.a(c1.y.V(0,"refraction"))
if(r)c1.dT=t.r.a(c1.y.V(0,"refractClr"))}}if(c6.y.a)c1.dU=t.n.a(c1.y.V(0,"alpha"))
if(c6.k1){r=c6.z
q=r.length
if(q!==0){c1.cm=new H.D(t.J)
c1.cn=new H.D(t.en)
for(p=t.r,o=t.n,n=t.d6,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="barLight"+H.f(h)
f=H.c([],n)
for(m=i.b,l=0;l<m;++l){e=c1.y
d=g+"s["+l+"].startPnt"
k=e.h(0,d)
if(k==null)H.q(P.v(c3+d+c4))
p.a(k)
e=c1.y
d=g+"s["+l+"].endPnt"
c=e.h(0,d)
if(c==null)H.q(P.v(c3+d+c4))
p.a(c)
e=c1.y
d=g+"s["+l+"].color"
b=e.h(0,d)
if(b==null)H.q(P.v(c3+d+c4))
p.a(b)
if(typeof h!=="number")return h.al()
if((h&4)!==0){e=c1.y
d=g+"s["+l+"].att0"
a=e.h(0,d)
if(a==null)H.q(P.v(c3+d+c4))
o.a(a)
e=c1.y
d=g+"s["+l+"].att1"
a0=e.h(0,d)
if(a0==null)H.q(P.v(c3+d+c4))
o.a(a0)
e=c1.y
d=g+"s["+l+"].att2"
a1=e.h(0,d)
if(a1==null)H.q(P.v(c3+d+c4))
o.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.d1(k,c,b,a4,a3,a2))}c1.cn.l(0,h,f)
m=c1.cm
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.q(P.v(c3+d+c4))
m.l(0,h,k)}}r=c6.Q
q=r.length
if(q!==0){c1.co=new H.D(t.J)
c1.cp=new H.D(t.af)
for(p=t.r,o=t.w,n=t.dv,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.f(h)
f=H.c([],n)
for(m=i.b,l=0;l<m;++l){if(typeof h!=="number")return h.al()
e=(h&1)!==0
if(e){d=c1.y
a5=g+"s["+l+"].objUp"
k=d.h(0,a5)
if(k==null)H.q(P.v(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].objRight"
c=d.h(0,a5)
if(c==null)H.q(P.v(c3+a5+c4))
p.a(c)
d=c1.y
a5=g+"s["+l+"].objDir"
b=d.h(0,a5)
if(b==null)H.q(P.v(c3+a5+c4))
p.a(b)
a6=b
a7=c
a8=k}else{a6=c2
a7=a6
a8=a7}d=c1.y
a5=g+"s["+l+"].viewDir"
k=d.h(0,a5)
if(k==null)H.q(P.v(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].color"
c=d.h(0,a5)
if(c==null)H.q(P.v(c3+a5+c4))
p.a(c)
if(e){e=c1.y
d=g+"sTexture2D"+l
b=e.h(0,d)
if(b==null)H.q(P.v(c3+d+c4))
o.a(b)
a9=b}else a9=c2
f.push(new A.d2(a8,a7,a6,k,c,a9))}c1.cp.l(0,h,f)
m=c1.co
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.q(P.v(c3+d+c4))
m.l(0,h,k)}}r=c6.ch
q=r.length
if(q!==0){c1.cq=new H.D(t.J)
c1.cr=new H.D(t.gr)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,d=t.by,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.f(h)
f=H.c([],d)
for(a5=i.b,l=0;l<a5;++l){b0=c1.y
b1=g+"s["+l+"].point"
k=b0.h(0,b1)
if(k==null)H.q(P.v(c3+b1+c4))
p.a(k)
b0=c1.y
b1=g+"s["+l+"].viewPnt"
c=b0.h(0,b1)
if(c==null)H.q(P.v(c3+b1+c4))
p.a(c)
b0=c1.y
b1=g+"s["+l+"].color"
b=b0.h(0,b1)
if(b==null)H.q(P.v(c3+b1+c4))
p.a(b)
if(typeof h!=="number")return h.al()
if((h&3)!==0){b0=c1.y
b1=g+"s["+l+"].invViewRotMat"
a=b0.h(0,b1)
if(a==null)H.q(P.v(c3+b1+c4))
o.a(a)
b2=a}else b2=c2
if((h&1)!==0){b0=c1.y
b1=g+"sTextureCube"+l
a=b0.h(0,b1)
if(a==null)H.q(P.v(c3+b1+c4))
n.a(a)
a9=a}else a9=c2
if((h&2)!==0){b0=c1.y
b1=g+"sShadowCube"+l
a=b0.h(0,b1)
if(a==null)H.q(P.v(c3+b1+c4))
n.a(a)
b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.q(P.v(c3+b1+c4))
m.a(a0)
b3=a
b4=a0}else{b3=c2
b4=b3}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a=b0.h(0,b1)
if(a==null)H.q(P.v(c3+b1+c4))
e.a(a)
b0=c1.y
b1=g+"s["+l+"].att1"
a0=b0.h(0,b1)
if(a0==null)H.q(P.v(c3+b1+c4))
e.a(a0)
b0=c1.y
b1=g+"s["+l+"].att2"
a1=b0.h(0,b1)
if(a1==null)H.q(P.v(c3+b1+c4))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.d4(k,c,b2,b,a9,b3,b4,a4,a3,a2))}c1.cr.l(0,h,f)
a5=c1.cq
b0=c1.y
b1=g+"Count"
k=b0.h(0,b1)
if(k==null)H.q(P.v(c3+b1+c4))
a5.l(0,h,k)}}r=c6.cx
q=r.length
if(q!==0){c1.cs=new H.D(t.J)
c1.ct=new H.D(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.w,e=t.fF,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.f(h)
f=H.c([],e)
for(d=i.b,l=0;l<d;++l){a5=c1.y
b0=g+"s["+l+"].objPnt"
k=a5.h(0,b0)
if(k==null)H.q(P.v(c3+b0+c4))
p.a(k)
a5=c1.y
b0=g+"s["+l+"].objDir"
c=a5.h(0,b0)
if(c==null)H.q(P.v(c3+b0+c4))
p.a(c)
a5=c1.y
b0=g+"s["+l+"].viewPnt"
b=a5.h(0,b0)
if(b==null)H.q(P.v(c3+b0+c4))
p.a(b)
a5=c1.y
b0=g+"s["+l+"].color"
a=a5.h(0,b0)
if(a==null)H.q(P.v(c3+b0+c4))
p.a(a)
if(typeof h!=="number")return h.al()
if((h&3)!==0){a5=c1.y
b0=g+"s["+l+"].objUp"
a0=a5.h(0,b0)
if(a0==null)H.q(P.v(c3+b0+c4))
p.a(a0)
a5=c1.y
b0=g+"s["+l+"].objRight"
a1=a5.h(0,b0)
if(a1==null)H.q(P.v(c3+b0+c4))
p.a(a1)
a5=c1.y
b0=g+"s["+l+"].tuScalar"
b5=a5.h(0,b0)
if(b5==null)H.q(P.v(c3+b0+c4))
o.a(b5)
a5=c1.y
b0=g+"s["+l+"].tvScalar"
b6=a5.h(0,b0)
if(b6==null)H.q(P.v(c3+b0+c4))
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
if(a0==null)H.q(P.v(c3+b1+c4))
n.a(a0)
b4=a0}else b4=c2
if((h&8)!==0){b0=c1.y
b1=g+"s["+l+"].cutoff"
a0=b0.h(0,b1)
if(a0==null)H.q(P.v(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].coneAngle"
a1=b0.h(0,b1)
if(a1==null)H.q(P.v(c3+b1+c4))
o.a(a1)
b9=a1
c0=a0}else{b9=c2
c0=b9}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a0=b0.h(0,b1)
if(a0==null)H.q(P.v(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].att1"
a1=b0.h(0,b1)
if(a1==null)H.q(P.v(c3+b1+c4))
o.a(a1)
b0=c1.y
b1=g+"s["+l+"].att2"
b5=b0.h(0,b1)
if(b5==null)H.q(P.v(c3+b1+c4))
o.a(b5)
a2=b5
a3=a1
a4=a0}else{a2=c2
a3=a2
a4=a3}if((h&1)!==0){b0=c1.y
b1=g+"sTexture2D"+l
a0=b0.h(0,b1)
if(a0==null)H.q(P.v(c3+b1+c4))
m.a(a0)
a9=a0}else a9=c2
if(a5){a5=c1.y
b0=g+"sShadow2D"+l
a0=a5.h(0,b0)
if(a0==null)H.q(P.v(c3+b0+c4))
m.a(a0)
b3=a0}else b3=c2
f.push(new A.d5(k,c,b,a,a8,a7,b8,b7,b4,c0,b9,a4,a3,a2,a9,b3))}c1.ct.l(0,h,f)
d=c1.cs
a5=c1.y
b0=g+"Count"
k=a5.h(0,b0)
if(k==null)H.q(P.v(c3+b0+c4))
d.l(0,h,k)}}}},
h8:function(a,b){if(b!=null&&b.d>=6)a.cU(b)}}
A.dR.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.e_.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eH.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.eV.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.iA.prototype={
i:function(a){return this.bb}}
A.d1.prototype={}
A.d2.prototype={}
A.d4.prototype={}
A.d5.prototype={}
A.c5.prototype={
cZ:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
e_:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.d8(b,35633)
p.f=p.d8(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.q(P.v("Failed to link shader: "+H.f(q)))}p.ha()
p.hc()},
Z:function(a){a.a.useProgram(this.r)
this.x.hK()},
d8:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.b(P.v("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
ha:function(){var s,r,q,p=this,o=H.c([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.w(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dN(n,r.name,q))}p.x=new A.hM(o)},
hc:function(){var s,r,q,p=this,o=H.c([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.w(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hB(r.type,r.size,r.name,q))}p.y=new A.jw(o)},
aR:function(a,b,c){var s=this.a
if(a===1)return new A.fh(s,b,c)
else return A.lA(s,this.r,b,a,c)},
eT:function(a,b,c){var s=this.a
if(a===1)return new A.fl(s,b,c)
else return A.lA(s,this.r,b,a,c)},
eU:function(a,b,c){var s=this.a
if(a===1)return new A.fm(s,b,c)
else return A.lA(s,this.r,b,a,c)},
br:function(a,b){return new P.fO(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hB:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aR(b,c,d)
case 5121:return s.aR(b,c,d)
case 5122:return s.aR(b,c,d)
case 5123:return s.aR(b,c,d)
case 5124:return s.aR(b,c,d)
case 5125:return s.aR(b,c,d)
case 5126:return new A.fg(s.a,c,d)
case 35664:return new A.js(s.a,c,d)
case 35665:return new A.fi(s.a,c,d)
case 35666:return new A.fj(s.a,c,d)
case 35667:return new A.jt(s.a,c,d)
case 35668:return new A.ju(s.a,c,d)
case 35669:return new A.jv(s.a,c,d)
case 35674:return new A.jx(s.a,c,d)
case 35675:return new A.fk(s.a,c,d)
case 35676:return new A.d3(s.a,c,d)
case 35678:return s.eT(b,c,d)
case 35680:return s.eU(b,c,d)
case 35670:throw H.b(s.br("BOOL",c))
case 35671:throw H.b(s.br("BOOL_VEC2",c))
case 35672:throw H.b(s.br("BOOL_VEC3",c))
case 35673:throw H.b(s.br("BOOL_VEC4",c))
default:throw H.b(P.v("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.eQ.prototype={}
A.ff.prototype={}
A.jw.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
V:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.N()},
N:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.fh.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.jt.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.ju.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jv.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.jr.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.fg.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.js.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.fi.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fj.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jx.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.fk.prototype={
am:function(a){var s=new Float32Array(H.cf(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.d3.prototype={
am:function(a){var s=new Float32Array(H.cf(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.fl.prototype={
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fm.prototype={
cU:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.kp.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cC(q.b,b).cC(q.d.cC(q.c,b),c)
a.sa_(0,new V.P(p.a,p.b,p.c))
a.see(p.E())
q=1-b
s=1-c
a.sdD(new V.ar(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)}}
F.kz.prototype={
$2:function(a,b){return V.hH(this.a,this.b,b)}}
F.kB.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hH(-1,1,c),n=this.a.$2(b,c)
if(typeof n!=="number")return H.w(n)
q=-q*n
s=p*n
a.sa_(0,new V.P(q,s,o))
a.see(new V.C(q,s,o).E())
a.sdD(new V.ar(1-c,2+c,-1,-1))}}
F.kC.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.kD.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.la.prototype={
$2:function(a,b){return 0}}
F.lb.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.w(r)
s=a.f
r=new V.C(s.a,s.b,s.c).E().w(0,this.b+r)
a.sa_(0,new V.P(r.a,r.b,r.c))}}
F.lc.prototype={
$1:function(a){return new V.P(Math.cos(a),Math.sin(a),0)}}
F.kM.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.P(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)}}
F.kA.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.m5(l.$1(m),k)
k=J.m5(l.$1(m+3.141592653589793/n.c),k).a0(0,j)
s=new V.C(k.a,k.b,k.c).E()
l=$.mT
if(l==null){l=new V.C(1,0,0)
$.mT=l
r=l}else r=l
q=s.aE(!J.J(s,r)?V.mV():r).E()
r=q.aE(s).E()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.w(0,l*k)
k=q.w(0,o*k)
a.sa_(0,j.B(0,new V.P(l.a-k.a,l.b-k.b,l.c-k.c)))}}
F.e1.prototype={
b9:function(){var s=this
if(!s.gba()){C.b.L(s.a.a.d.b,s)
s.a.a.a6()}s.c3()
s.c4()
s.h0()},
c8:function(a){this.a=a
a.d.b.push(this)},
c9:function(a){this.b=a
a.d.c.push(this)},
h9:function(a){this.c=a
a.d.d.push(this)},
c3:function(){var s=this.a
if(s!=null){C.b.L(s.d.b,this)
this.a=null}},
c4:function(){var s=this.b
if(s!=null){C.b.L(s.d.c,this)
this.b=null}},
h0:function(){var s=this.c
if(s!=null){C.b.L(s.d.d,this)
this.c=null}},
gba:function(){return this.a==null||this.b==null||this.c==null},
eL:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.d9()
if(n!=null)q=q.B(0,n)
if(s!=null)q=q.B(0,s)
if(r!=null)q=q.B(0,r)
if(q.e2())return p
return q.E()},
eN:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a0(0,n)
q=new V.C(o.a,o.b,o.c).E()
o=r.a0(0,n)
return q.aE(new V.C(o.a,o.b,o.c).E()).E()},
cg:function(){var s,r=this
if(r.d!=null)return!0
s=r.eL()
if(s==null){s=r.eN()
if(s==null)return!1}r.d=s
r.a.a.a6()
return!0},
eK:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.d9()
if(n!=null)q=q.B(0,n)
if(s!=null)q=q.B(0,s)
if(r!=null)q=q.B(0,r)
if(q.e2())return p
return q.E()},
eM:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.H().toString
if(Math.abs(p-0)<1e-9){j=b.a0(0,e)
o=new V.C(j.a,j.b,j.c).E()
if(q.a-r.a<0)o=o.T(0)}else{n=(j-s.b)/p
j=b.a0(0,e).w(0,n).B(0,e).a0(0,h)
o=new V.C(j.a,j.b,j.c).E()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.T(0)}j=l.d
if(j!=null){m=j.E()
o=m.aE(o).E().aE(m).E()}return o},
ce:function(){var s,r=this
if(r.e!=null)return!0
s=r.eK()
if(s==null){s=r.eM()
if(s==null)return!1}r.e=s
r.a.a.a6()
return!0},
ghv:function(a){var s=this
if(J.J(s.a,s.b))return!0
if(J.J(s.b,s.c))return!0
if(J.J(s.c,s.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
H:function(a){var s,r,q=this
if(q.gba())return a+"disposed"
s=a+C.a.ap(J.a7(q.a.e),0)+", "+C.a.ap(J.a7(q.b.e),0)+", "+C.a.ap(J.a7(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
N:function(){return this.H("")}}
F.ib.prototype={}
F.jc.prototype={
bd:function(a,b,c){var s,r=b.a
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
F.eg.prototype={
b9:function(){var s=this
if(!s.gba()){C.b.L(s.a.a.c.b,s)
s.a.a.a6()}s.c3()
s.c4()},
c8:function(a){this.a=a
a.c.b.push(this)},
c9:function(a){this.b=a
a.c.c.push(this)},
c3:function(){var s=this.a
if(s!=null){C.b.L(s.c.b,this)
this.a=null}},
c4:function(){var s=this.b
if(s!=null){C.b.L(s.c.c,this)
this.b=null}},
gba:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
H:function(a){if(this.gba())return a+"disposed"
return a+C.a.ap(J.a7(this.a.e),0)+", "+C.a.ap(J.a7(this.b.e),0)},
N:function(){return this.H("")}}
F.iq.prototype={}
F.jq.prototype={
bd:function(a,b,c){var s,r=b.a
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
F.eE.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
H:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.ap(J.a7(s.e),0)},
N:function(){return this.H("")}}
F.j3.prototype={
gq:function(){var s=this.e
return s==null?this.e=D.I():s},
be:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.A()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){p=e[q]
f.a.n(0,p.hy())}f.a.A()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.A()
m=m.e
if(typeof m!=="number")return m.B()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
l=n[m]
f.b.a.a.n(0,l)
m=new F.eE()
if(l.a==null)H.q(P.v("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.D(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.A()
m=m.e
if(typeof m!=="number")return m.B()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.B()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.c.a
n.a.n(0,j)
n.a.n(0,i)
F.ov(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.A()
m=m.e
if(typeof m!=="number")return m.B()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.B()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.A()
m=m.e
if(typeof m!=="number")return m.B()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
g=n[m]
m=f.d.a
m.a.n(0,j)
m.a.n(0,i)
m.a.n(0,g)
F.cA(j,i,g)}e=f.e
if(e!=null)e.az(0)},
aq:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aq()||!1
if(!r.a.aq())s=!1
q=r.e
if(q!=null)q.az(0)
return s},
hZ:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.a.c
s=H.c(m.slice(0),H.lO(m).K("x<1>"))
for(m=t.j;s.length!==0;){r=C.b.ghO(s)
C.b.cK(s,0)
if(r!=null){q=H.c([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(o!=null&&a.bd(0,r,o)){q.push(o)
C.b.cK(s,p)}}if(q.length>1)b.be(q)}}n.a.A()
n.c.cL()
n.d.cL()
n.b.ii()
n.c.cM(new F.jq())
n.d.cM(new F.jc())
m=n.e
if(m!=null)m.az(0)},
cd:function(){this.hZ(new F.jS(),new F.iS())},
dG:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.aM().a)!==0?1:0
if((s&$.bq().a)!==0)++r
if((s&$.bp().a)!==0)++r
if((s&$.bK().a)!==0)++r
if((s&$.bL().a)!==0)++r
if((s&$.dH().a)!==0)++r
if((s&$.dI().a)!==0)++r
if((s&$.cm().a)!==0)++r
if((s&$.bo().a)!==0)++r
q=a6.gcV(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.c(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.c(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.hr(k)
i=j.gcV(j)
if(k>=m)return H.d(n,k)
n[k]=new Z.dS(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.d(g,h)
f=g[h].hY(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.d(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.cf(o)),35044)
s.bindBuffer(a3,null)
a=new Z.co(new Z.fw(a3,b),n,a6)
a.b=H.c([],t.aZ)
if(a2.b.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.A()
a0.push(m.e)}a1=Z.lC(s,34963,a0)
a.b.push(new Z.bU(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.A()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.d(m,k)
m=m[k].b
m.a.a.A()
a0.push(m.e)}a1=Z.lC(s,34963,a0)
a.b.push(new Z.bU(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.c([],t.V)
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
a0.push(m.e)}a1=Z.lC(s,34963,a0)
a.b.push(new Z.bU(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.c([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.H(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.H(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.H(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.H(r))}return C.b.j(q,"\n")},
a6:function(){var s=this.e
if(s!=null)s.D(null)}}
F.j5.prototype={
dt:function(a){var s,r,q,p,o,n=H.c([],t.b),m=a.length
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
n.push(F.cA(s,p,o))}}return n},
ho:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.c([],t.b)
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
f.push(F.cA(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cA(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cA(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.cA(j,g,k))}n=!n}p=!p}return f},
gm:function(a){return this.b.length},
cM:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.bd(0,n,l)){n.b9()
break}}}}},
cL:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.ghv(q)
if(r)q.b9()}},
aq:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].cg())q=!1
return q},
cf:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].ce())q=!1
return q},
i:function(a){return this.N()},
H:function(a){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].H(a))
return C.b.j(p,"\n")},
N:function(){return this.H("")}}
F.j6.prototype={
gm:function(a){return this.b.length},
cM:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.bd(0,n,l)){n.b9()
break}}}}},
cL:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=J.J(q.a,q.b)
if(r)q.b9()}},
i:function(a){return this.N()},
H:function(a){var s,r,q=H.c([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q.push(r[s].H(a+(""+s+". ")))}return C.b.j(q,"\n")},
N:function(){return this.H("")}}
F.j7.prototype={
gm:function(a){return this.b.length},
ii:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.L(q.b.b,r)
q=r.a.a.e
if(q!=null)q.D(null)
q=r.a
if(q!=null){C.b.L(q.b.b,r)
r.a=null}}}},
i:function(a){return this.N()},
H:function(a){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].H(a))
return C.b.j(p,"\n")},
N:function(){return this.H("")}}
F.ft.prototype={
ck:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fu(s.cx,p,m,r,q,o,n,a,l)},
hy:function(){return this.ck(null)},
sa_:function(a,b){var s
if(!J.J(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a6()}},
see:function(a){var s
if(!J.J(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a6()}},
sdD:function(a){var s
if(!J.J(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a6()}},
hY:function(a){var s,r,q=this
if(a.v(0,$.aM())){s=q.f
r=t.m
if(s==null)return H.c([0,0,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.v(0,$.bq())){s=q.r
r=t.m
if(s==null)return H.c([0,1,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.v(0,$.bp())){s=q.x
r=t.m
if(s==null)return H.c([0,0,1],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.v(0,$.bK())){s=q.y
r=t.m
if(s==null)return H.c([0,0],r)
else return H.c([s.a,s.b],r)}else if(a.v(0,$.bL())){s=q.z
r=t.m
if(s==null)return H.c([0,0,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.v(0,$.dH())){s=q.Q
r=t.m
if(s==null)return H.c([1,1,1],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.v(0,$.dI())){s=q.Q
r=t.m
if(s==null)return H.c([1,1,1,1],r)
else return H.c([s.a,s.b,s.c,s.d],r)}else if(a.v(0,$.cm()))return H.c([q.ch],t.m)
else if(a.v(0,$.bo())){s=q.cx
r=t.m
if(s==null)return H.c([-1,-1,-1,-1],r)
else return H.c([s.a,s.b,s.c,s.d],r)}else return H.c([],t.m)},
cg:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d9()
r.d.I(0,new F.jX(q))
r.r=q.a.E()
q=r.a
if(q!=null){q.a6()
q=r.a.e
if(q!=null)q.az(0)}return!0},
ce:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d9()
r.d.I(0,new F.jW(q))
r.x=q.a.E()
q=r.a
if(q!=null){q.a6()
q=r.a.e
if(q!=null)q.az(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
H:function(a){var s,r,q=this,p="-",o=H.c([],t.i)
o.push(C.a.ap(J.a7(q.e),0))
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
o.push(V.L(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.b.j(o,", ")
return a+"{"+r+"}"},
N:function(){return this.H("")}}
F.jX.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.B(0,r)}}}
F.jW.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.B(0,r)}}}
F.jN.prototype={
A:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
s[p].e=q;++q}this.b=!1}},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.v("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a6()
return!0},
du:function(a,b,c,d,e,f,g){var s=F.fu(a,null,b,c,d,e,f,g,0)
this.n(0,s)
return s},
bs:function(a,b,c,d,e,f){return this.du(a,b,c,null,d,e,f)},
hp:function(a,b,c,d,e,f){return this.du(a,b,c,d,e,f,null)},
gm:function(a){return this.c.length},
aq:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].cg()
return!0},
cf:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].ce()
return!0},
hu:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r.E()
if(!J.J(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.D(null)}}}}return!0},
i:function(a){return this.N()},
H:function(a){var s,r,q,p
this.A()
s=H.c([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].H(a))
return C.b.j(s,"\n")},
N:function(){return this.H("")}}
F.jO.prototype={
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
C.b.I(s.c,new F.jP(s,b))
C.b.I(s.d,new F.jQ(s,b))},
i:function(a){return this.N()},
N:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].H(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].H(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
F.jP.prototype={
$1:function(a){if(!J.J(a.a,this.a))this.b.$1(a)}}
F.jQ.prototype={
$1:function(a){var s=this.a
if(!J.J(a.a,s)&&!J.J(a.b,s))this.b.$1(a)}}
F.jR.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.N()},
N:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].H(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
F.jT.prototype={}
F.jS.prototype={
bd:function(a,b,c){return J.J(b.f,c.f)}}
F.jU.prototype={}
F.iS.prototype={
be:function(a){var s,r,q,p,o,n,m=V.d9()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)m=new V.C(m.a+q.a,m.b+q.b,m.c+q.c)}m=m.E()
for(s=a.length,q=m==null,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){p=a[r]
o=q?null:m.E()
if(!J.J(p.r,o)){p.r=o
n=p.a
if(n!=null){n=n.e
if(n!=null)n.D(null)}}}return null}}
F.jV.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
O.ej.prototype={
gq:function(){var s=this.fr
return s==null?this.fr=D.I():s},
a3:function(a){var s=this.fr
if(s!=null)s.D(a)},
c1:function(){return this.a3(null)},
dh:function(a){this.a=null
this.a3(a)},
h4:function(){return this.dh(null)},
f9:function(a,b){var s=new D.aQ()
s.b=!0
this.a3(s)},
fb:function(a,b){var s=new D.aR()
s.b=!0
this.a3(s)},
d6:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.D(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gax()
n=d.h(0,p.gax())
d.l(0,o,n==null?1:n)}m=H.c([],t.am)
d.I(0,new O.iE(f,m))
C.b.b1(m,new O.iF())
l=new H.D(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){o=l.h(0,0)
l.l(0,0,o==null?1:o)}k=H.c([],t.M)
l.I(0,new O.iG(f,k))
C.b.b1(k,new O.iH())
j=new H.D(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gax()
n=j.h(0,p.gax())
j.l(0,o,n==null?1:n)}i=H.c([],t.d1)
j.I(0,new O.iI(f,i))
C.b.b1(i,new O.iJ())
h=new H.D(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.o)(e),++q){p=e[q]
r=p.gax()
o=h.h(0,p.gax())
h.l(0,r,o==null?1:o)}g=H.c([],t.cz)
h.I(0,new O.iK(f,g))
C.b.b1(g,new O.iL())
e=C.c.a8(f.e.a.length+3,4)
f.dy.toString
return A.oC(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
eJ:function(a,b){if(b!=null)if(!C.b.G(a,b)){b.a=a.length
a.push(b)}},
as:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a8(s,s.length);s.u();){r=s.d
r.toString
q=$.jM
if(q==null)q=$.jM=new V.C(0,0,1)
r.a=q
p=$.jL
r.d=p==null?$.jL=new V.C(0,1,0):p
p=$.jK
r.e=p==null?$.jK=new V.C(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bF(q).E()
r.d=o.bF(r.d).E()
r.e=o.bF(r.e).E()}}}},
ea:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.d6()
s=b4.fr.h(0,b3.bb)
if(s==null){s=A.oB(b3,b4.a)
b4.dw(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bv
b3=b5.e
if(!(b3 instanceof Z.co))b3=b5.e=null
if(b3==null||!b3.d.v(0,q)){b3=r.k4
if(b3)b5.d.aq()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.cf()
o.a.cf()
o=o.e
if(o!=null)o.az(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.hu()
n=n.e
if(n!=null)n.az(0)}l=b5.d.dG(new Z.fx(b4.a),q)
l.aG($.aM()).e=b2.a.Q.c
if(b3)l.aG($.bq()).e=b2.a.cx.c
if(p)l.aG($.bp()).e=b2.a.ch.c
if(r.r2)l.aG($.bK()).e=b2.a.cy.c
if(o)l.aG($.bL()).e=b2.a.db.c
if(r.ry)l.aG($.bo()).e=b2.a.dx.c
b5.e=l}k=H.c([],t.bw)
b2.a.Z(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.ga5(p)
b3=b3.dy
b3.toString
b3.am(p.ag(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga5(p)
o=b4.dx
o=b4.cx=p.w(0,o.ga5(o))
p=o}b3=b3.fr
b3.toString
b3.am(p.ag(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gig()
o=b4.dx
o=b4.ch=p.w(0,o.ga5(o))
p=o}b3=b3.fy
b3.toString
b3.am(p.ag(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.ga5(p)
b3=b3.fx
b3.toString
b3.am(p.ag(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.am(C.j.ag(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.am(C.j.ag(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.am(C.j.ag(p,!0))}if(r.bu>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.d(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.d(b3,i)
b3=b3[i]
h=new Float32Array(H.cf(p.ag(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}if(r.a.a){b3=b2.a
p=b2.f.f
b3=b3.r2
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(r.k1){if(r.b.a){b3=b2.a
p=b2.r.f
b3=b3.x1
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(r.c.a){b3=b2.a
p=b2.x.f
b3=b3.y2
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(r.d.a){b3=b2.a
p=b2.y.f
b3=b3.bv
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.dP
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.dO
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.z
if(b3.length>0){g=new H.D(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gax()
c=g.h(0,d)
if(c==null)c=0
g.l(0,d,c+1)
b=J.cn(b2.a.cn.h(0,d),c)
n=e.giz()
m=$.aY
n=n.bk(m==null?$.aY=new V.P(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giE()
m=$.aY
n=n.bk(m==null?$.aY=new V.P(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gp(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gdN()){n=e.gdA()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gdB()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gdC()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.cm.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.ga5(p)
a0=new H.D(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
c=a0.h(0,0)
if(c==null)c=0
a0.l(0,0,c+1)
b=J.cn(b2.a.cp.h(0,0),c)
n=a.bF(e.a).E()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.c
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.co.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.ga5(p)
a3=new H.D(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gax()
c=a3.h(0,d)
if(c==null)c=0
a3.l(0,d,c+1)
b=J.cn(b2.a.cr.h(0,d),c)
a4=a.w(0,e.ga5(e))
n=e.ga5(e)
m=$.aY
n=n.bk(m==null?$.aY=new V.P(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.aY
n=a4.bk(n==null?$.aY=new V.P(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gp(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaL()
n=a4.cA(0)
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
h=new Float32Array(H.cf(new V.em(m,a1,a2,a5,a6,a7,a8,a9,n).ag(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gaL()
n=e.gaL()
if(!C.b.G(k,n)){n.a=k.length
k.push(n)}n=e.gaL()
m=n.gbc(n)
if(m){m=b.f
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gb0()
n=e.gem()
m=b.x
m.toString
a1=n.ghG(n)
a2=n.ghH(n)
a5=n.ghI()
n=n.ghF()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gb0()
if(!C.b.G(k,n)){n.a=k.length
k.push(n)}n=e.gb0()
m=n.gbc(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gdN()){n=e.gdA()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gdB()
m=b.z
m.a.uniform1f(m.d,n)
n=e.gdC()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.cq.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.ga5(p)
b1=new H.D(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gax()
c=b1.h(0,d)
if(c==null)c=0
b1.l(0,d,c+1)
b=J.cn(b2.a.ct.h(0,d),c)
n=e.gie(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giC(e).E()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.bk(e.gie(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gp(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaL()
n=e.gcP()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gcN(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giU()
m=b.x
m.a.uniform1f(m.d,n)
n=e.giV()
m=b.y
m.a.uniform1f(m.d,n)
e.gaL()
n=e.gaL()
if(!C.b.G(k,n)){n.a=k.length
k.push(n)}n=e.gaL()
m=n.gbc(n)
if(m){m=b.dx
m.toString
a1=n.gbc(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.ghU(n))}e.gb0()
n=e.gem()
m=b.z
m.toString
a1=n.ghG(n)
a2=n.ghH(n)
a5=n.ghI()
n=n.ghF()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gb0()
if(!C.b.G(k,n)){n.a=k.length
k.push(n)}n=e.gb0()
m=n.gbc(n)
if(m){m=b.dy
m.toString
a1=n.gbc(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.ghU(n))}if(e.giD()){n=e.giB()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.giA()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gdN()){n=e.gdA()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gdB()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gdC()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.cs.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga5(p).cA(0)}b3=b3.id
b3.toString
b3.am(p.ag(0,!0))}if(r.db){b2.eJ(k,b2.ch)
b3=b2.a
p=b2.ch
b3.h8(b3.dQ,p)
if(r.r.a){b3=b2.a
p=b2.cx.f
b3=b3.dR
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.dS
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.dT
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=r.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.dU
b3.a.uniform1f(b3.d,o)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].Z(b4)
b3=b5.e
b3.Z(b4)
b3.ak(b4)
b3.aM(b4)
if(p)b3=!1
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,i=0;i<k.length;++i){p=k[i]
if(p.c){p.c=!1
b3.activeTexture(33984+p.a)
b3.bindTexture(34067,null)}}p=b2.a
p.toString
b3.useProgram(null)
p.x.dL()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.d6().bb}}
O.iE.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dR(a,C.c.a8(b+3,4)*4))}}
O.iF.prototype={
$2:function(a,b){return J.dJ(a.a,b.a)}}
O.iG.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.e_(a,C.c.a8(b+3,4)*4))}}
O.iH.prototype={
$2:function(a,b){return J.dJ(a.a,b.a)}}
O.iI.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.eH(a,C.c.a8(b+3,4)*4))}}
O.iJ.prototype={
$2:function(a,b){return J.dJ(a.a,b.a)}}
O.iK.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.eV(a,C.c.a8(b+3,4)*4))}}
O.iL.prototype={
$2:function(a,b){return J.dJ(a.a,b.a)}}
O.iy.prototype={
aC:function(){var s,r=this
r.cX()
s=r.f
$.H().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.F(r.b,s,1)
s.b=!0
r.a.a3(s)}}}
O.el.prototype={
aC:function(){},
bq:function(a){var s,r,q=this
if(!q.c.v(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aC()
s=q.a
s.a=null
s.a3(null)}}}
O.iz.prototype={}
O.aV.prototype={
dj:function(a){var s,r,q=this
if(!q.f.v(0,a)){s=q.f
q.f=a
r=new D.F(q.b+".color",s,a)
r.b=!0
q.a.a3(r)}},
aC:function(){this.cX()
this.dj(new V.r(1,1,1))},
sp:function(a,b){this.bq(new A.a1(!0,!1,!1))
this.dj(b)}}
O.iB.prototype={}
O.iC.prototype={
c5:function(a){var s=this,r=s.ch
$.H().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.F(s.b+".refraction",r,a)
r.b=!0
s.a.a3(r)}},
aC:function(){this.cY()
this.c5(1)},
saF:function(a){var s=this
if(a<=0){s.bq(new A.a1(!1,!1,!1))
s.c5(0)}else{s.bq(new A.a1(!0,!1,!1))
s.c5(a)}}}
O.iD.prototype={
dk:function(a){var s=this,r=s.ch
$.H().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.F(s.b+".shininess",r,a)
r.b=!0
s.a.a3(r)}},
aC:function(){this.cY()
this.dk(100)}}
O.eP.prototype={
gq:function(){var s=this.e
return s==null?this.e=D.I():s},
a3:function(a){var s=this.e
if(s!=null)s.D(a)},
c1:function(){return this.a3(null)},
ea:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.eQ(r,l)
s.cZ(r,l)
s.e_(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.dw(s)}m.a=s}if(b.e==null){r=b.d.dG(new Z.fx(a.a),$.aM())
r.aG($.aM()).e=m.a.z.c
b.e=r}r=m.c
if(r!=null){r.a=1
r.Z(a)}r=a.d
q=a.c
p=m.a
p.Z(a)
o=m.b
n=p.Q
n.a.uniform1f(n.d,o)
o=p.ch
o.a.uniform1f(o.d,r/q)
q=m.c
p.cy.cU(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.ga5(q).cA(0)
p=p.db
p.toString
p.am(q.ag(0,!0))
r=b.e
if(r instanceof Z.co){r.Z(a)
r.ak(a)
r.aM(a)}else b.e=null
r=m.a
r.toString
a.a.useProgram(null)
r.x.dL()
r=m.c
if(r!=null)r.aM(a)}}
O.f5.prototype={}
T.f8.prototype={}
T.jf.prototype={
gq:function(){var s=this.e
return s==null?this.e=D.I():s},
Z:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
aM:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.jg.prototype={
aS:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.a0(s,"load",new T.jh(this,s,!1,b,!1,d,a),!1)},
h5:function(a,b,c){var s,r,q,p
b=V.m_(b)
s=V.m_(a.width)
r=V.m_(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.lj()
q.width=s
q.height=r
p=C.i.ej(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.qF(p.getImageData(0,0,q.width,q.height))}}}
T.jh.prototype={
$1:function(a){var s=this,r=s.a,q=r.h5(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.a3.iq(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.hJ()}++r.e}}
X.li.prototype={}
X.ig.prototype={
gq:function(){var s=this.x
return s==null?this.x=D.I():s},
au:function(a){var s=this.x
if(s!=null)s.D(a)},
sdI:function(a,b){var s
if(this.b){this.b=!1
s=new D.F("clearColor",!0,!1)
s.b=!0
this.au(s)}},
Z:function(a){var s,r,q,p,o,n,m,l=this,k=a.a
k.bindFramebuffer(36160,null)
k.enable(2884)
k.enable(2929)
k.depthFunc(513)
s=k.drawingBufferWidth
r=k.drawingBufferHeight
q=l.r
p=q.a
if(typeof s!=="number")return H.w(s)
o=C.d.ar(p*s)
p=q.b
if(typeof r!=="number")return H.w(r)
n=C.d.ar(p*r)
p=C.d.ar(q.c*s)
a.c=p
q=C.d.ar(q.d*r)
a.d=q
k.viewport(o,n,p,q)
k.clearDepth(l.c)
if(l.b){q=l.a
k.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
k.clear(m)}}
X.ik.prototype={
gq:function(){var s=this.b
return s==null?this.b=D.I():s},
Z:function(a){var s
a.cy.bD(V.bW())
s=V.bW()
a.db.bD(s)},
aM:function(a){a.cy.aJ()
a.db.aJ()}}
X.eA.prototype={
gq:function(){var s=this.f
return s==null?this.f=D.I():s},
au:function(a){var s=this.f
if(s!=null)s.D(a)},
eG:function(){return this.au(null)},
Z:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.aW(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bD(i)
p=$.ms
if(p==null){p=V.mu()
o=V.lB()
n=$.mS
p=V.mo(p,o,n==null?$.mS=new V.C(0,0,-1):n)
$.ms=p
s=p}else s=p
p=q.b
if(p!=null){r=p.aZ(0,a,q)
if(r!=null)s=r.w(0,s)}a.db.bD(s)},
aM:function(a){a.cy.aJ()
a.db.aJ()}}
X.je.prototype={}
V.b8.prototype={
bm:function(a){this.b=new P.ii(C.T)
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
m=k.b.eS(o,0,o.length)
l=m==null?o:m
C.R.el(n,H.m1(l," ","&nbsp;"))
l=n.style
l.color=b
C.b.gay(k.d).push(n)}},
e8:function(a,b){var s,r,q,p=this
p.d=H.c([],t.u)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bt()
r.toString
q=new H.p(s)
q=new P.bG(r.cO(new H.bd(q,q.gm(q))).a())
for(;q.u();)p.bC(q.gC(q))}}
V.l9.prototype={
$1:function(a){var s=C.d.ef(this.a.ghT(),2)
if(s!=="0.00")P.m0(s+" fps")}}
V.dY.prototype={
bC:function(a){var s=this
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
bt:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()\\-+*%!&|=.,?:;",i="OpenDoubleStr",h="CloseDoubleStr",g="EscDoubleStr",f="OpenSingleStr",e="CloseSingleStr",d="EscSingleStr",c="Slash",b="Comment",a="EndComment",a0="MLComment",a1="MLCStar",a2="Whitespace",a3=L.jl()
a3.d=a3.k(0,p)
s=a3.k(0,p).j(0,o)
r=K.u(new H.p("_"))
s.a.push(r)
r=K.R("a","z")
s.a.push(r)
r=K.R("A","Z")
s.a.push(r)
r=a3.k(0,o).j(0,o)
s=K.u(new H.p("_"))
r.a.push(s)
s=K.R("0","9")
r.a.push(s)
s=K.R("a","z")
r.a.push(s)
s=K.R("A","Z")
r.a.push(s)
s=a3.k(0,p).j(0,n)
r=K.R("0","9")
s.a.push(r)
r=a3.k(0,n).j(0,n)
s=K.R("0","9")
r.a.push(s)
s=a3.k(0,n).j(0,m)
r=K.u(new H.p("."))
s.a.push(r)
r=a3.k(0,m).j(0,l)
s=K.R("0","9")
r.a.push(s)
s=a3.k(0,l).j(0,l)
r=K.R("0","9")
s.a.push(r)
r=a3.k(0,p).j(0,k)
s=K.u(new H.p(j))
r.a.push(s)
s=a3.k(0,k).j(0,k)
r=K.u(new H.p(j))
s.a.push(r)
r=a3.k(0,p).j(0,i)
s=K.u(new H.p('"'))
r.a.push(s)
s=a3.k(0,i).j(0,h)
r=K.u(new H.p('"'))
s.a.push(r)
r=a3.k(0,i).j(0,g)
s=K.u(new H.p("\\"))
r.a.push(s)
s=a3.k(0,g).j(0,i)
r=K.u(new H.p('"'))
s.a.push(r)
a3.k(0,i).j(0,i).a.push(new K.b6())
r=a3.k(0,p).j(0,f)
s=K.u(new H.p("'"))
r.a.push(s)
s=a3.k(0,f).j(0,e)
r=K.u(new H.p("'"))
s.a.push(r)
r=a3.k(0,f).j(0,d)
s=K.u(new H.p("\\"))
r.a.push(s)
s=a3.k(0,d).j(0,f)
r=K.u(new H.p("'"))
s.a.push(r)
a3.k(0,f).j(0,f).a.push(new K.b6())
r=a3.k(0,p).j(0,c)
s=K.u(new H.p("/"))
r.a.push(s)
s=a3.k(0,c).j(0,b)
r=K.u(new H.p("/"))
s.a.push(r)
r=a3.k(0,b).j(0,a)
s=K.u(new H.p("\n"))
r.a.push(s)
s=a3.k(0,b).j(0,b)
r=new K.ac()
q=t.B
r.a=H.c([],q)
s.a.push(r)
s=K.u(new H.p("\n"))
r.a.push(s)
s=a3.k(0,c).j(0,a0)
r=K.u(new H.p("*"))
s.a.push(r)
r=a3.k(0,a0).j(0,a1)
s=K.u(new H.p("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a0)
r=new K.ac()
r.a=H.c([],q)
s.a.push(r)
s=K.u(new H.p("*"))
r.a.push(s)
s=a3.k(0,a1).j(0,a)
r=K.u(new H.p("/"))
s.a.push(r)
r=a3.k(0,p).j(0,a2)
s=K.u(new H.p(" \n\t"))
r.a.push(s)
s=a3.k(0,a2).j(0,a2)
r=K.u(new H.p(" \n\t"))
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
r.aK(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aK(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aK(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a3}}
V.e5.prototype={
bC:function(a){var s=this
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
bt:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()[]\\-+*%!&|=.,?:;",i="Slash",h="Comment",g="EndComment",f="Preprocess",e="EndPreprocess",d="Whitespace",c=L.jl()
c.d=c.k(0,p)
s=c.k(0,p).j(0,o)
r=K.u(new H.p("_"))
s.a.push(r)
r=K.R("a","z")
s.a.push(r)
r=K.R("A","Z")
s.a.push(r)
r=c.k(0,o).j(0,o)
s=K.u(new H.p("_"))
r.a.push(s)
s=K.R("0","9")
r.a.push(s)
s=K.R("a","z")
r.a.push(s)
s=K.R("A","Z")
r.a.push(s)
s=c.k(0,p).j(0,n)
r=K.R("0","9")
s.a.push(r)
r=c.k(0,n).j(0,n)
s=K.R("0","9")
r.a.push(s)
s=c.k(0,n).j(0,m)
r=K.u(new H.p("."))
s.a.push(r)
r=c.k(0,m).j(0,l)
s=K.R("0","9")
r.a.push(s)
s=c.k(0,l).j(0,l)
r=K.R("0","9")
s.a.push(r)
r=c.k(0,p).j(0,k)
s=K.u(new H.p(j))
r.a.push(s)
s=c.k(0,k).j(0,k)
r=K.u(new H.p(j))
s.a.push(r)
r=c.k(0,p).j(0,i)
s=K.u(new H.p("/"))
r.a.push(s)
s=c.k(0,i).j(0,h)
r=K.u(new H.p("/"))
s.a.push(r)
c.k(0,i).j(0,k).a.push(new K.b6())
r=c.k(0,h).j(0,g)
s=K.u(new H.p("\n"))
r.a.push(s)
s=c.k(0,h).j(0,h)
r=new K.ac()
q=t.B
r.a=H.c([],q)
s.a.push(r)
s=K.u(new H.p("\n"))
r.a.push(s)
s=c.k(0,p).j(0,f)
r=K.u(new H.p("#"))
s.a.push(r)
r=c.k(0,f).j(0,f)
s=new K.ac()
s.a=H.c([],q)
r.a.push(s)
r=K.u(new H.p("\n"))
s.a.push(r)
r=c.k(0,f).j(0,e)
s=K.u(new H.p("\n"))
r.a.push(s)
s=c.k(0,p).j(0,d)
r=K.u(new H.p(" \n\t"))
s.a.push(r)
r=c.k(0,d).j(0,d)
s=K.u(new H.p(" \n\t"))
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
s.aK(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],r))
s.aK(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],r))
s.aK(0,"Builtin",H.c(["gl_FragColor","gl_Position"],r))
return c}}
V.e7.prototype={
bC:function(a){var s=this,r="#111"
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
bt:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.jl()
j.d=j.k(0,q)
s=j.k(0,q).j(0,p)
r=K.u(new H.p("_"))
s.a.push(r)
r=K.R("a","z")
s.a.push(r)
r=K.R("A","Z")
s.a.push(r)
r=j.k(0,p).j(0,p)
s=K.u(new H.p("_"))
r.a.push(s)
s=K.R("0","9")
r.a.push(s)
s=K.R("a","z")
r.a.push(s)
s=K.R("A","Z")
r.a.push(s)
s=j.k(0,p).j(0,o)
r=K.u(new H.p("="))
s.a.push(r)
s.c=!0
s=j.k(0,q).j(0,n)
r=K.u(new H.p("</\\-!>="))
s.a.push(r)
r=j.k(0,n).j(0,n)
s=K.u(new H.p("</\\-!>="))
r.a.push(s)
s=j.k(0,q).j(0,m)
r=K.u(new H.p('"'))
s.a.push(r)
r=j.k(0,m).j(0,l)
s=K.u(new H.p('"'))
r.a.push(s)
s=j.k(0,m).j(0,"EscStr")
r=K.u(new H.p("\\"))
s.a.push(r)
r=j.k(0,"EscStr").j(0,m)
s=K.u(new H.p('"'))
r.a.push(s)
j.k(0,m).j(0,m).a.push(new K.b6())
j.k(0,q).j(0,k).a.push(new K.b6())
s=j.k(0,k).j(0,k)
r=new K.ac()
r.a=H.c([],t.B)
s.a.push(r)
s=K.u(new H.p('</\\-!>=_"'))
r.a.push(s)
s=K.R("a","z")
r.a.push(s)
s=K.R("A","Z")
r.a.push(s)
s=j.k(0,n)
s.d=s.a.P("Symbol")
s=j.k(0,l)
s.d=s.a.P("String")
s=j.k(0,p)
r=s.a.P(p)
s.d=r
r.aK(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],t.i))
r=j.k(0,o)
r.d=r.a.P(o)
r=j.k(0,k)
r.d=r.a.P(k)
return j}}
V.eC.prototype={
e8:function(a,b){this.d=H.c([],t.u)
this.M(C.b.j(b,"\n"),"#111")},
bC:function(a){},
bt:function(){return null}}
V.iV.prototype={
cc:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.mN().gcJ().h(0,H.f(s))
if(r==null)if(d){c.$0()
k.dr(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.lg(k.c).n(0,o)
m=W.oo("radio")
m.checked=q
m.name=s
W.a0(m,"change",new V.iW(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.lg(k.c).n(0,p.createElement("br"))},
a1:function(a,b,c){return this.cc(a,b,c,!1)},
dr:function(a){var s,r,q=P.mN(),p=t.X,o=P.oy(q.gcJ(),p,p)
o.l(0,this.a,a)
s=q.eb(0,o)
p=window.history
r=s.gca()
p.toString
p.replaceState(new P.kc([],[]).bG(""),"",r)}}
V.iW.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.dr(s.d)}}}
V.j8.prototype={
ey:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.a0(o,"scroll",new V.ja(m),!1)},
dv:function(a){var s,r,q,p,o,n,m,l
this.hb()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hX(a)
q.toString
p=new H.p(p)
p=new P.bG(q.cO(new H.bd(p,p.gm(p))).a())
for(;p.u();){q=p.gC(p)
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
if(H.nC(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.d(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kk(C.x,q,C.e,!1)
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
ei:function(a){var s,r,q,p=new V.dY("dart")
p.bm("dart")
s=new V.e5("glsl")
s.bm("glsl")
r=new V.e7("html")
r.bm("html")
q=C.b.hP(H.c([p,s,r],t.b7),new V.jb(a))
if(q!=null)return q
p=new V.eC("plain")
p.bm("plain")
return p},
ds:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.c([],t.V)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.dG(q).aa(q,"+")){b2[r]=C.a.ai(q,1)
a8.push(1)
s=!0}else if(C.a.aa(q,"-")){b2[r]=C.a.ai(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.ei(b0)
p.e8(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.kk(C.x,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.m7()
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
for(a4=C.b.gO(q);a4.u();)b.appendChild(a4.gC(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
hm:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
for(p=0;p<2;++p){o=l.createElement("div")
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
hb:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=L.jl()
s.d=s.k(0,o)
r=s.k(0,o).j(0,n)
q=K.u(new H.p("*"))
r.a.push(q)
r.c=!0
r=s.k(0,n).j(0,n)
q=new K.ac()
p=t.B
q.a=H.c([],p)
r.a.push(q)
r=K.u(new H.p("*"))
q.a.push(r)
r=s.k(0,n).j(0,"BoldEnd")
q=K.u(new H.p("*"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,m)
q=K.u(new H.p("_"))
r.a.push(q)
r.c=!0
r=s.k(0,m).j(0,m)
q=new K.ac()
q.a=H.c([],p)
r.a.push(q)
r=K.u(new H.p("_"))
q.a.push(r)
r=s.k(0,m).j(0,l)
q=K.u(new H.p("_"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,k)
q=K.u(new H.p("`"))
r.a.push(q)
r.c=!0
r=s.k(0,k).j(0,k)
q=new K.ac()
q.a=H.c([],p)
r.a.push(q)
r=K.u(new H.p("`"))
q.a.push(r)
r=s.k(0,k).j(0,"CodeEnd")
q=K.u(new H.p("`"))
r.a.push(q)
r.c=!0
r=s.k(0,o).j(0,j)
q=K.u(new H.p("["))
r.a.push(q)
r.c=!0
r=s.k(0,j).j(0,i)
q=K.u(new H.p("|"))
r.a.push(q)
q=s.k(0,j).j(0,h)
r=K.u(new H.p("]"))
q.a.push(r)
q.c=!0
q=s.k(0,j).j(0,j)
r=new K.ac()
r.a=H.c([],p)
q.a.push(r)
q=K.u(new H.p("|]"))
r.a.push(q)
q=s.k(0,i).j(0,h)
r=K.u(new H.p("]"))
q.a.push(r)
q.c=!0
q=s.k(0,i).j(0,i)
r=new K.ac()
r.a=H.c([],p)
q.a.push(r)
q=K.u(new H.p("|]"))
r.a.push(q)
s.k(0,o).j(0,g).a.push(new K.b6())
q=s.k(0,g).j(0,g)
r=new K.ac()
r.a=H.c([],p)
q.a.push(r)
q=K.u(new H.p("*_`["))
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
V.ja.prototype={
$1:function(a){P.mJ(C.n,new V.j9(this.a))}}
V.j9.prototype={
$0:function(){var s=C.d.ar(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
V.jb.prototype={
$1:function(a){return a.a===this.a}}
D.kQ.prototype={
$0:function(){var s=this.a,r=s.r
r.sp(0,new V.r(0.1,0.1,0.1))
r=s.x
r.sp(0,new V.r(0.2,0.2,0.2))
r=s.z
r.sp(0,new V.r(1,1,1))
s.cy.sp(0,new V.r(0,0,0))
s=s.cx
s.sp(0,new V.r(1,1,1))}}
D.kR.prototype={
$0:function(){var s=this.a,r=s.r
r.sp(0,new V.r(0.11,0.11,0.1))
r=s.x
r.sp(0,new V.r(0.21,0.21,0.2))
r=s.z
r.sp(0,new V.r(1,1,1))
s.cy.sp(0,new V.r(0,0,0))
s=s.cx
s.sp(0,new V.r(1,0.9,0.5))}}
D.kS.prototype={
$0:function(){var s=this.a,r=s.r
r.sp(0,new V.r(0.1,0.1,0.1))
r=s.x
r.sp(0,new V.r(0.1,0.1,0.1))
r=s.z
r.sp(0,new V.r(1,1,1))
s.cy.saF(0.4)
r=s.cy
r.sp(0,new V.r(0.6,0.6,0.6))
s=s.cx
s.sp(0,new V.r(0.4,0.4,0.4))}}
D.l0.prototype={
$0:function(){var s=this.a,r=s.r
r.sp(0,new V.r(0.1,0.1,0.1))
r=s.x
r.sp(0,new V.r(0.1,0.1,0.1))
r=s.z
r.sp(0,new V.r(1,1,1))
s.cy.saF(0.4)
r=s.cy
r.sp(0,new V.r(0.2,0.3,1))
s=s.cx
s.sp(0,new V.r(0.3,0.3,0.3))}}
D.l1.prototype={
$0:function(){var s=this.a,r=s.r
r.sp(0,new V.r(0.1,0.1,0.1))
r=s.x
r.sp(0,new V.r(0.1,0.1,0.1))
r=s.z
r.sp(0,new V.r(1,1,1))
s.cy.saF(0.6)
r=s.cy
r.sp(0,new V.r(0.8,0.8,0.8))
s=s.cx
s.sp(0,new V.r(0.2,0.2,0.2))}}
D.l2.prototype={
$0:function(){var s=this.a,r=s.r
r.sp(0,new V.r(0.1,0.1,0.1))
r=s.x
r.sp(0,new V.r(0.1,0.1,0.1))
r=s.z
r.sp(0,new V.r(1,1,1))
s.cy.saF(0.6)
r=s.cy
r.sp(0,new V.r(1,1,1))
s.cx.sp(0,new V.r(0,0,0))}}
D.l3.prototype={
$0:function(){var s=this.a,r=s.r
r.sp(0,new V.r(0.1,0.1,0.1))
r=s.x
r.sp(0,new V.r(0.1,0.1,0.1))
r=s.z
r.sp(0,new V.r(1,1,1))
s.cy.saF(0.9)
r=s.cy
r.sp(0,new V.r(1,0.8,0.8))
s.cx.sp(0,new V.r(0,0,0))}}
D.l4.prototype={
$0:function(){var s=this.a,r=s.r
r.sp(0,new V.r(0,0,0))
r=s.x
r.sp(0,new V.r(0.1,0.1,0.1))
r=s.z
r.sp(0,new V.r(0.1,0.1,0.1))
s.cy.saF(0.99)
r=s.cy
r.sp(0,new V.r(0.95,0.95,0.95))
s.cx.sp(0,new V.r(0,0,0))}}
D.l5.prototype={
$0:function(){var s=this.a,r=s.r
r.sp(0,new V.r(0.3,0.3,0.3))
r=s.x
r.sp(0,new V.r(0.5,0.5,0.5))
r=s.z
r.sp(0,new V.r(1,1,1))
s.cy.sp(0,new V.r(0,0,0))
s=s.cx
s.sp(0,new V.r(0.3,0.3,0.3))}}
D.l6.prototype={
$0:function(){this.a.sad(0,F.lV(1,null,null,1))}}
D.l7.prototype={
$0:function(){this.a.sad(0,F.lV(15,null,new D.kP(),15))}}
D.kP.prototype={
$3:function(a,b,c){var s=Math.cos(c*4*3.141592653589793+3.141592653589793),r=Math.cos(b*4*3.141592653589793+3.141592653589793),q=a.f,p=new V.C(q.a,q.b,q.c).E()
q=a.f
r=p.w(0,s*0.1+r*0.1)
a.sa_(0,q.B(0,new V.P(r.a,r.b,r.c)))}}
D.kT.prototype={
$0:function(){this.a.sad(0,F.no(!0,30,1))}}
D.kU.prototype={
$0:function(){this.a.sad(0,F.no(!1,30,0))}}
D.kV.prototype={
$0:function(){this.a.sad(0,F.np(!0,!0,25,new D.kO(),50))}}
D.kO.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}}
D.kW.prototype={
$0:function(){this.a.sad(0,F.nB(6,null,6))}}
D.kX.prototype={
$0:function(){this.a.sad(0,F.nB(10,new D.kN(),10))}}
D.kN.prototype={
$2:function(a,b){var s=a-0.5,r=b-0.5
return Math.cos(Math.sqrt(s*s+r*r)*3.141592653589793)*0.3}}
D.kY.prototype={
$0:function(){this.a.sad(0,F.nD())}}
D.kZ.prototype={
$0:function(){this.a.sad(0,F.qS())}}
D.l_.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a,p=t.s
s.ds("Vertex Shader","glsl",0,H.c((q==null?null:q.c).split("\n"),p))
r=r.a
s.ds("Fragment Shader","glsl",0,H.c((r==null?null:r.d).split("\n"),p))}};(function aliases(){var s=J.a.prototype
s.ep=s.i
s=J.bc.prototype
s.er=s.i
s=P.h.prototype
s.eq=s.bH
s=W.E.prototype
s.bJ=s.an
s=W.dl.prototype
s.es=s.aw
s=K.e6.prototype
s.eo=s.aI
s.cW=s.i
s=O.el.prototype
s.cX=s.aC
s=O.aV.prototype
s.cY=s.aC})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pT","ot",22)
r(P,"qy","p4",7)
r(P,"qz","p5",7)
r(P,"qA","p6",7)
q(P,"nn","qt",8)
r(W,"t6","i4",23)
p(W,"qL",4,null,["$4"],["p7"],15,0)
p(W,"qM",4,null,["$4"],["p8"],15,0)
var j
o(j=E.bx.prototype,"ge6",0,0,null,["$1","$0"],["e7","i5"],0,0)
o(j,"ge4",0,0,null,["$1","$0"],["e5","i2"],0,0)
n(j,"gi0","i1",4)
n(j,"gi3","i4",4)
o(j=E.f9.prototype,"gd0",0,0,null,["$1","$0"],["d2","d1"],0,0)
m(j,"gil","ec",8)
l(j=X.fs.prototype,"gfo","fp",5)
l(j,"gfc","fd",5)
l(j,"gfi","fj",2)
l(j,"gft","fu",9)
l(j,"gfq","fs",9)
l(j,"gfz","fA",2)
l(j,"gfD","fE",2)
l(j,"gfm","fn",2)
l(j,"gfB","fC",2)
l(j,"gfk","fl",2)
l(j,"gfF","fG",20)
l(j,"gfH","fI",5)
l(j,"gfX","fY",6)
l(j,"gfT","fU",6)
l(j,"gfV","fW",6)
o(D.bv.prototype,"geA",0,0,null,["$1","$0"],["aA","eB"],0,0)
o(j=D.cH.prototype,"gde",0,0,null,["$1","$0"],["df","fv"],0,0)
l(j,"gfJ","fK",21)
n(j,"gf6","f7",10)
n(j,"gfN","fO",10)
k(V.ae.prototype,"gm","cB",11)
k(V.C.prototype,"gm","cB",11)
o(j=U.bS.prototype,"gaQ",0,0,null,["$1","$0"],["R","af"],0,0)
n(j,"gf4","f5",12)
n(j,"gfL","fM",12)
o(j=U.d6.prototype,"gaQ",0,0,null,["$1","$0"],["R","af"],0,0)
l(j,"gbT","bU",1)
l(j,"gbV","bW",1)
l(j,"gbX","bY",1)
o(j=U.d7.prototype,"gaQ",0,0,null,["$1","$0"],["R","af"],0,0)
l(j,"gbT","bU",1)
l(j,"gbV","bW",1)
l(j,"gbX","bY",1)
l(j,"geY","eZ",1)
l(j,"gf_","f0",1)
l(j,"ghi","hj",1)
l(j,"ghg","hh",1)
l(j,"ghe","hf",1)
l(U.d8.prototype,"gf2","f3",1)
o(j=M.cp.prototype,"gX",0,0,null,["$1","$0"],["Y","b2"],0,0)
n(j,"gfP","fQ",13)
n(j,"gfR","fS",13)
o(M.ct.prototype,"gX",0,0,null,["$1","$0"],["Y","b2"],0,0)
o(j=M.cz.prototype,"gX",0,0,null,["$1","$0"],["Y","b2"],0,0)
n(j,"gfe","ff",4)
n(j,"gfg","fh",4)
o(j=O.ej.prototype,"gc0",0,0,null,["$1","$0"],["a3","c1"],0,0)
o(j,"gh3",0,0,null,["$1","$0"],["dh","h4"],0,0)
n(j,"gf8","f9",14)
n(j,"gfa","fb",14)
o(O.eP.prototype,"gc0",0,0,null,["$1","$0"],["a3","c1"],0,0)
o(X.eA.prototype,"geF",0,0,null,["$1","$0"],["au","eG"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.O,null)
q(P.O,[H.ls,J.a,J.a8,P.M,P.de,P.h,H.bd,P.e9,H.cB,H.fp,H.cr,H.jo,H.iT,H.he,H.bu,P.W,H.ir,H.eh,H.eb,H.at,H.fR,P.ds,P.cd,P.bG,P.fz,P.cY,P.f_,P.d_,P.ko,P.dk,P.k4,P.dd,P.i,P.ht,P.cO,P.dU,P.ij,P.km,P.kl,P.az,P.aj,P.S,P.bw,P.ez,P.cX,P.fO,P.ie,P.aC,P.n,P.G,P.aq,P.z,P.T,P.bH,P.jz,P.h8,W.hW,W.ln,W.lD,W.cc,W.N,W.cV,W.dl,W.hj,W.cC,W.am,W.k8,W.hu,P.kb,P.du,P.h6,P.bi,K.b6,K.e6,K.ix,K.iX,K.j2,L.eX,L.fa,L.fb,L.jk,O.a9,O.cQ,E.hR,E.bx,E.bP,E.c1,E.fL,E.iY,E.f9,Z.fw,Z.fx,Z.co,Z.bU,Z.bF,D.hS,D.bQ,D.U,X.dT,X.ed,X.ip,X.iv,X.ap,X.iP,X.jm,X.fs,D.dQ,D.bv,D.V,D.eF,D.eU,V.r,V.aB,V.i7,V.em,V.be,V.a4,V.P,V.ar,V.eK,V.ae,V.C,U.d6,U.d7,U.d8,M.ct,M.cz,M.a6,A.dN,A.hM,A.a1,A.dR,A.e_,A.eH,A.eV,A.iA,A.d1,A.d2,A.d4,A.d5,A.ff,A.jw,F.e1,F.ib,F.eg,F.iq,F.eE,F.j3,F.j5,F.j6,F.j7,F.ft,F.jN,F.jO,F.jR,F.jT,F.jU,F.jV,O.f5,O.el,O.iB,T.jg,X.li,X.je,X.ik,X.eA,V.b8,V.iV,V.j8])
q(J.a,[J.ea,J.cG,J.bc,J.x,J.bA,J.aS,H.cR,H.Y,W.e,W.hK,W.br,W.aP,W.K,W.fE,W.ao,W.hZ,W.i_,W.fG,W.cw,W.fI,W.i0,W.j,W.fP,W.aD,W.ih,W.fT,W.bz,W.iu,W.iM,W.fX,W.fY,W.aF,W.fZ,W.h0,W.aG,W.h4,W.h7,W.aH,W.h9,W.aI,W.hf,W.av,W.hl,W.jj,W.aJ,W.hn,W.jn,W.jE,W.hv,W.hx,W.hz,W.hB,W.hD,P.aT,P.fV,P.aX,P.h2,P.iU,P.hg,P.aZ,P.hp,P.hN,P.fB,P.eL,P.hc])
q(J.bc,[J.eB,J.bE,J.aE])
r(J.im,J.x)
q(J.bA,[J.cF,J.cE])
q(P.M,[H.ee,H.ev,H.ec,H.fo,H.eN,H.fM,P.dM,P.ew,P.ai,P.fq,P.fn,P.c6,P.dV,P.dX])
r(P.cK,P.de)
q(P.cK,[H.c8,W.fC,W.a2,P.e3])
r(H.p,H.c8)
q(P.h,[H.l,H.aU,H.b1,P.cD])
q(H.l,[H.cL,H.cI])
r(H.cx,H.aU)
q(P.e9,[H.ei,H.fy])
r(H.cP,H.cL)
r(H.cs,H.cr)
q(H.bu,[H.f4,H.io,H.kG,H.kH,H.kI,P.jZ,P.jY,P.k_,P.k0,P.kh,P.kg,P.kx,P.k6,P.k7,P.is,P.iw,P.jH,P.jI,P.i1,P.i2,P.jD,P.jA,P.jB,P.jC,P.kj,P.ki,P.ks,P.kr,P.kt,P.ku,W.i3,W.iN,W.iO,W.j1,W.jd,W.k1,W.iR,W.iQ,W.k9,W.ka,W.kf,W.kn,P.kd,P.ke,P.ky,P.ic,P.id,P.hO,E.iZ,E.j_,E.j0,E.ji,D.i9,D.ia,F.kp,F.kz,F.kB,F.kC,F.kD,F.la,F.lb,F.lc,F.kM,F.kA,F.jX,F.jW,F.jP,F.jQ,O.iE,O.iF,O.iG,O.iH,O.iI,O.iJ,O.iK,O.iL,T.jh,V.l9,V.iW,V.ja,V.j9,V.jb,D.kQ,D.kR,D.kS,D.l0,D.l1,D.l2,D.l3,D.l4,D.l5,D.l6,D.l7,D.kP,D.kT,D.kU,D.kV,D.kO,D.kW,D.kX,D.kN,D.kY,D.kZ,D.l_])
q(H.f4,[H.eY,H.bO])
r(P.cN,P.W)
q(P.cN,[H.D,W.fA])
r(H.c_,H.Y)
q(H.c_,[H.dg,H.di])
r(H.dh,H.dg)
r(H.bC,H.dh)
r(H.dj,H.di)
r(H.cS,H.dj)
q(H.cS,[H.eq,H.er,H.es,H.et,H.eu,H.cT,H.c0])
r(H.dt,H.fM)
r(P.dp,P.cD)
r(P.k5,P.ko)
r(P.dc,P.dk)
r(P.dx,P.cO)
r(P.c9,P.dx)
q(P.dU,[P.hP,P.i5])
r(P.dW,P.f_)
q(P.dW,[P.hQ,P.ii,P.jJ,P.jG])
r(P.jF,P.i5)
q(P.S,[P.a_,P.k])
q(P.ai,[P.c3,P.e8])
r(P.fF,P.bH)
q(W.e,[W.y,W.e2,W.bX,W.au,W.dm,W.aw,W.ad,W.dq,W.fv,W.ca,P.dP,P.b7])
q(W.y,[W.E,W.aA,W.cb])
q(W.E,[W.t,P.m])
q(W.t,[W.dK,W.dL,W.bN,W.bs,W.bt,W.ba,W.e4,W.bT,W.bV,W.eO,W.bh,W.cZ,W.f2,W.f3,W.c7])
r(W.hV,W.aP)
r(W.cu,W.fE)
q(W.ao,[W.hX,W.hY])
r(W.fH,W.fG)
r(W.cv,W.fH)
r(W.fJ,W.fI)
r(W.e0,W.fJ)
r(W.ak,W.br)
r(W.fQ,W.fP)
r(W.bR,W.fQ)
r(W.fU,W.fT)
r(W.by,W.fU)
r(W.b0,W.j)
q(W.b0,[W.bB,W.al,W.bD])
r(W.en,W.fX)
r(W.eo,W.fY)
r(W.h_,W.fZ)
r(W.ep,W.h_)
r(W.h1,W.h0)
r(W.cU,W.h1)
r(W.h5,W.h4)
r(W.eD,W.h5)
r(W.eM,W.h7)
r(W.dn,W.dm)
r(W.eS,W.dn)
r(W.ha,W.h9)
r(W.eT,W.ha)
r(W.eZ,W.hf)
r(W.hm,W.hl)
r(W.f6,W.hm)
r(W.dr,W.dq)
r(W.f7,W.dr)
r(W.ho,W.hn)
r(W.fc,W.ho)
r(W.bj,W.al)
r(W.hw,W.hv)
r(W.fD,W.hw)
r(W.da,W.cw)
r(W.hy,W.hx)
r(W.fS,W.hy)
r(W.hA,W.hz)
r(W.df,W.hA)
r(W.hC,W.hB)
r(W.hb,W.hC)
r(W.hE,W.hD)
r(W.hi,W.hE)
r(W.fK,W.fA)
r(W.fN,P.cY)
r(W.hk,W.dl)
r(P.kc,P.kb)
r(P.aa,P.h6)
r(P.fW,P.fV)
r(P.ef,P.fW)
r(P.h3,P.h2)
r(P.ex,P.h3)
r(P.c4,P.m)
r(P.hh,P.hg)
r(P.f0,P.hh)
r(P.hq,P.hp)
r(P.fd,P.hq)
r(P.dO,P.fB)
r(P.ey,P.b7)
r(P.hd,P.hc)
r(P.eW,P.hd)
q(K.e6,[K.ac,L.fe])
q(E.hR,[Z.dS,A.c5,T.f8])
q(D.U,[D.aQ,D.aR,D.F,X.eG])
q(X.eG,[X.cM,X.bY,X.bZ,X.d0])
q(O.a9,[D.cH,U.bS,M.cp])
q(D.hS,[U.hU,U.X])
r(U.cq,U.X)
q(A.c5,[A.ek,A.eQ])
q(A.ff,[A.fh,A.jt,A.ju,A.jv,A.jr,A.fg,A.js,A.fi,A.fj,A.jx,A.fk,A.d3,A.fl,A.fm])
r(F.jc,F.ib)
r(F.jq,F.iq)
r(F.jS,F.jT)
r(F.iS,F.jU)
q(O.f5,[O.ej,O.eP])
q(O.el,[O.iy,O.iz,O.aV])
q(O.aV,[O.iC,O.iD])
r(T.jf,T.f8)
r(X.ig,X.je)
q(V.b8,[V.dY,V.e5,V.e7,V.eC])
s(H.c8,H.fp)
s(H.dg,P.i)
s(H.dh,H.cB)
s(H.di,P.i)
s(H.dj,H.cB)
s(P.de,P.i)
s(P.dx,P.ht)
s(W.fE,W.hW)
s(W.fG,P.i)
s(W.fH,W.N)
s(W.fI,P.i)
s(W.fJ,W.N)
s(W.fP,P.i)
s(W.fQ,W.N)
s(W.fT,P.i)
s(W.fU,W.N)
s(W.fX,P.W)
s(W.fY,P.W)
s(W.fZ,P.i)
s(W.h_,W.N)
s(W.h0,P.i)
s(W.h1,W.N)
s(W.h4,P.i)
s(W.h5,W.N)
s(W.h7,P.W)
s(W.dm,P.i)
s(W.dn,W.N)
s(W.h9,P.i)
s(W.ha,W.N)
s(W.hf,P.W)
s(W.hl,P.i)
s(W.hm,W.N)
s(W.dq,P.i)
s(W.dr,W.N)
s(W.hn,P.i)
s(W.ho,W.N)
s(W.hv,P.i)
s(W.hw,W.N)
s(W.hx,P.i)
s(W.hy,W.N)
s(W.hz,P.i)
s(W.hA,W.N)
s(W.hB,P.i)
s(W.hC,W.N)
s(W.hD,P.i)
s(W.hE,W.N)
s(P.fV,P.i)
s(P.fW,W.N)
s(P.h2,P.i)
s(P.h3,W.N)
s(P.hg,P.i)
s(P.hh,W.N)
s(P.hp,P.i)
s(P.hq,W.N)
s(P.fB,P.W)
s(P.hc,P.i)
s(P.hd,W.N)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",a_:"double",S:"num",z:"String",az:"bool",aq:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([U*])","~(U*)","~(al*)","aq(@,@)","~(k*,h<bx*>*)","~(j*)","~(bD*)","~(~())","~()","~(bB*)","~(k*,h<V*>*)","a_*()","~(k*,h<X*>*)","~(k*,h<a6*>*)","~(k*,h<be*>*)","az(E,z,z,cc)","@(@)","aq(@)","aq(O?,O?)","bi(@,@)","~(bj*)","az*(h<V*>*)","k(@,@)","z(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pr(v.typeUniverse,JSON.parse('{"aE":"bc","eB":"bc","bE":"bc","r1":"j","rb":"j","r3":"b7","r2":"e","ri":"e","rk":"e","r0":"m","rc":"m","r4":"t","rf":"t","rd":"y","ra":"y","rK":"ad","r8":"b0","r5":"aA","rl":"aA","rj":"al","re":"by","rh":"bC","rg":"Y","ea":{"az":[]},"bc":{"ml":[],"aC":[]},"x":{"n":["1"],"l":["1"],"h":["1"]},"im":{"x":["1"],"n":["1"],"l":["1"],"h":["1"]},"bA":{"a_":[],"S":[]},"cF":{"a_":[],"k":[],"S":[]},"cE":{"a_":[],"S":[]},"aS":{"z":[]},"ee":{"M":[]},"p":{"i":["k"],"n":["k"],"l":["k"],"h":["k"],"i.E":"k"},"l":{"h":["1"]},"cL":{"l":["1"],"h":["1"]},"aU":{"h":["2"],"h.E":"2"},"cx":{"aU":["1","2"],"l":["2"],"h":["2"],"h.E":"2"},"cP":{"cL":["2"],"l":["2"],"h":["2"],"h.E":"2"},"b1":{"h":["1"],"h.E":"1"},"c8":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cr":{"G":["1","2"]},"cs":{"G":["1","2"]},"ev":{"M":[]},"ec":{"M":[]},"fo":{"M":[]},"bu":{"aC":[]},"f4":{"aC":[]},"eY":{"aC":[]},"bO":{"aC":[]},"eN":{"M":[]},"D":{"W":["1","2"],"G":["1","2"]},"cI":{"l":["1"],"h":["1"],"h.E":"1"},"eb":{"mC":[]},"c_":{"A":["1"],"Y":[]},"bC":{"i":["a_"],"A":["a_"],"n":["a_"],"Y":[],"l":["a_"],"h":["a_"],"i.E":"a_"},"cS":{"i":["k"],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"]},"eq":{"i":["k"],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"],"i.E":"k"},"er":{"i":["k"],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"],"i.E":"k"},"es":{"i":["k"],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"],"i.E":"k"},"et":{"i":["k"],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"],"i.E":"k"},"eu":{"i":["k"],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"],"i.E":"k"},"cT":{"i":["k"],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"],"i.E":"k"},"c0":{"i":["k"],"bi":[],"A":["k"],"n":["k"],"Y":[],"l":["k"],"h":["k"],"i.E":"k"},"fM":{"M":[]},"dt":{"M":[]},"ds":{"d_":[]},"dp":{"h":["1"],"h.E":"1"},"dc":{"dk":["1"],"l":["1"],"h":["1"]},"cD":{"h":["1"]},"cK":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cN":{"W":["1","2"],"G":["1","2"]},"W":{"G":["1","2"]},"cO":{"G":["1","2"]},"c9":{"G":["1","2"]},"dk":{"l":["1"],"h":["1"]},"a_":{"S":[]},"dM":{"M":[]},"ew":{"M":[]},"ai":{"M":[]},"c3":{"M":[]},"e8":{"M":[]},"fq":{"M":[]},"fn":{"M":[]},"c6":{"M":[]},"dV":{"M":[]},"ez":{"M":[]},"cX":{"M":[]},"dX":{"M":[]},"k":{"S":[]},"n":{"l":["1"],"h":["1"]},"bH":{"fr":[]},"h8":{"fr":[]},"fF":{"fr":[]},"t":{"E":[],"y":[],"e":[]},"dK":{"E":[],"y":[],"e":[]},"dL":{"E":[],"y":[],"e":[]},"bN":{"E":[],"y":[],"e":[]},"bs":{"E":[],"y":[],"e":[]},"bt":{"E":[],"y":[],"e":[]},"aA":{"y":[],"e":[]},"ba":{"E":[],"y":[],"e":[]},"cv":{"i":["aa<S>"],"n":["aa<S>"],"A":["aa<S>"],"l":["aa<S>"],"h":["aa<S>"],"i.E":"aa<S>"},"cw":{"aa":["S"]},"e0":{"i":["z"],"n":["z"],"A":["z"],"l":["z"],"h":["z"],"i.E":"z"},"fC":{"i":["E"],"n":["E"],"l":["E"],"h":["E"],"i.E":"E"},"E":{"y":[],"e":[]},"ak":{"br":[]},"bR":{"i":["ak"],"n":["ak"],"A":["ak"],"l":["ak"],"h":["ak"],"i.E":"ak"},"e2":{"e":[]},"e4":{"E":[],"y":[],"e":[]},"by":{"i":["y"],"n":["y"],"A":["y"],"l":["y"],"h":["y"],"i.E":"y"},"bT":{"E":[],"y":[],"e":[]},"bV":{"E":[],"y":[],"e":[]},"bB":{"j":[]},"bX":{"e":[]},"en":{"W":["z","@"],"G":["z","@"]},"eo":{"W":["z","@"],"G":["z","@"]},"ep":{"i":["aF"],"n":["aF"],"A":["aF"],"l":["aF"],"h":["aF"],"i.E":"aF"},"al":{"j":[]},"a2":{"i":["y"],"n":["y"],"l":["y"],"h":["y"],"i.E":"y"},"y":{"e":[]},"cU":{"i":["y"],"n":["y"],"A":["y"],"l":["y"],"h":["y"],"i.E":"y"},"eD":{"i":["aG"],"n":["aG"],"A":["aG"],"l":["aG"],"h":["aG"],"i.E":"aG"},"eM":{"W":["z","@"],"G":["z","@"]},"eO":{"E":[],"y":[],"e":[]},"au":{"e":[]},"eS":{"i":["au"],"n":["au"],"A":["au"],"e":[],"l":["au"],"h":["au"],"i.E":"au"},"eT":{"i":["aH"],"n":["aH"],"A":["aH"],"l":["aH"],"h":["aH"],"i.E":"aH"},"eZ":{"W":["z","z"],"G":["z","z"]},"bh":{"E":[],"y":[],"e":[]},"cZ":{"E":[],"y":[],"e":[]},"f2":{"E":[],"y":[],"e":[]},"f3":{"E":[],"y":[],"e":[]},"c7":{"E":[],"y":[],"e":[]},"aw":{"e":[]},"ad":{"e":[]},"f6":{"i":["ad"],"n":["ad"],"A":["ad"],"l":["ad"],"h":["ad"],"i.E":"ad"},"f7":{"i":["aw"],"n":["aw"],"A":["aw"],"e":[],"l":["aw"],"h":["aw"],"i.E":"aw"},"bD":{"j":[]},"fc":{"i":["aJ"],"n":["aJ"],"A":["aJ"],"l":["aJ"],"h":["aJ"],"i.E":"aJ"},"b0":{"j":[]},"fv":{"e":[]},"bj":{"al":[],"j":[]},"ca":{"e":[]},"cb":{"y":[],"e":[]},"fD":{"i":["K"],"n":["K"],"A":["K"],"l":["K"],"h":["K"],"i.E":"K"},"da":{"aa":["S"]},"fS":{"i":["aD?"],"n":["aD?"],"A":["aD?"],"l":["aD?"],"h":["aD?"],"i.E":"aD?"},"df":{"i":["y"],"n":["y"],"A":["y"],"l":["y"],"h":["y"],"i.E":"y"},"hb":{"i":["aI"],"n":["aI"],"A":["aI"],"l":["aI"],"h":["aI"],"i.E":"aI"},"hi":{"i":["av"],"n":["av"],"A":["av"],"l":["av"],"h":["av"],"i.E":"av"},"fA":{"W":["z","z"],"G":["z","z"]},"fK":{"W":["z","z"],"G":["z","z"]},"cc":{"am":[]},"cV":{"am":[]},"dl":{"am":[]},"hk":{"am":[]},"hj":{"am":[]},"du":{"bz":[]},"e3":{"i":["E"],"n":["E"],"l":["E"],"h":["E"],"i.E":"E"},"aa":{"h6":["1"]},"ef":{"i":["aT"],"n":["aT"],"l":["aT"],"h":["aT"],"i.E":"aT"},"ex":{"i":["aX"],"n":["aX"],"l":["aX"],"h":["aX"],"i.E":"aX"},"c4":{"m":[],"E":[],"y":[],"e":[]},"f0":{"i":["z"],"n":["z"],"l":["z"],"h":["z"],"i.E":"z"},"m":{"E":[],"y":[],"e":[]},"fd":{"i":["aZ"],"n":["aZ"],"l":["aZ"],"h":["aZ"],"i.E":"aZ"},"bi":{"n":["k"],"l":["k"],"h":["k"]},"dO":{"W":["z","@"],"G":["z","@"]},"dP":{"e":[]},"b7":{"e":[]},"ey":{"e":[]},"eW":{"i":["G<@,@>"],"n":["G<@,@>"],"l":["G<@,@>"],"h":["G<@,@>"],"i.E":"G<@,@>"},"a9":{"h":["1*"],"a9.T":"1"},"aQ":{"U":[]},"aR":{"U":[]},"F":{"U":[]},"cM":{"U":[]},"bY":{"U":[]},"bZ":{"U":[]},"eG":{"U":[]},"d0":{"U":[]},"dQ":{"V":[]},"bv":{"V":[]},"cH":{"a9":["V*"],"h":["V*"],"a9.T":"V*"},"eF":{"V":[]},"eU":{"V":[]},"cq":{"X":[]},"bS":{"a9":["X*"],"X":[],"h":["X*"],"a9.T":"X*"},"d6":{"X":[]},"d7":{"X":[]},"d8":{"X":[]},"cp":{"a9":["a6*"],"a6":[],"h":["a6*"],"a9.T":"a6*"},"ct":{"a6":[]},"cz":{"a6":[]},"ek":{"c5":[]},"eQ":{"c5":[]},"dY":{"b8":[]},"e5":{"b8":[]},"e7":{"b8":[]},"eC":{"b8":[]}}'))
H.pq(v.typeUniverse,JSON.parse('{"a8":1,"l":1,"bd":1,"ei":2,"fy":1,"cB":1,"fp":1,"c8":1,"cr":2,"eh":1,"c_":1,"bG":1,"cY":1,"f_":2,"dd":1,"cD":1,"cK":1,"cN":2,"ht":2,"cO":2,"de":1,"dx":2,"dU":2,"dW":2,"e9":1,"fN":1,"N":1,"cC":1,"aQ":1,"aR":1,"F":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.lW
return{D:s("bN"),d:s("br"),Y:s("bs"),G:s("l<@>"),h:s("E"),C:s("M"),aD:s("j"),c8:s("ak"),bX:s("bR"),Z:s("aC"),v:s("bz"),fS:s("bT"),gk:s("bV"),o:s("x<am>"),s:s("x<z>"),gn:s("x<@>"),t:s("x<k>"),x:s("x<dN*>"),bb:s("x<dQ*>"),am:s("x<dR*>"),g0:s("x<dS*>"),b7:s("x<b8*>"),cP:s("x<bv*>"),M:s("x<e_*>"),k:s("x<ba*>"),b:s("x<e1*>"),aZ:s("x<bU*>"),L:s("x<eg*>"),u:s("x<n<ba*>*>"),B:s("x<ix*>"),h8:s("x<be*>"),eb:s("x<eF*>"),cS:s("x<a4*>"),d1:s("x<eH*>"),p:s("x<eE*>"),f2:s("x<a6*>"),du:s("x<eU*>"),cz:s("x<eV*>"),eG:s("x<cY<O*>*>"),i:s("x<z*>"),fG:s("x<f5*>"),bw:s("x<f8*>"),br:s("x<fe*>"),fj:s("x<ff*>"),d6:s("x<d1*>"),dv:s("x<d2*>"),hg:s("x<d3*>"),by:s("x<d4*>"),fF:s("x<d5*>"),j:s("x<ft*>"),m:s("x<a_*>"),V:s("x<k*>"),f:s("x<~(U*)*>"),T:s("cG"),eH:s("ml"),g:s("aE"),aU:s("A<@>"),h9:s("D<z*,c5*>"),cn:s("D<z*,eX*>"),dO:s("D<z*,z*>"),dL:s("D<z*,fb*>"),en:s("D<k*,n<d1*>*>"),af:s("D<k*,n<d2*>*>"),gr:s("D<k*,n<d4*>*>"),gb:s("D<k*,n<d5*>*>"),J:s("D<k*,fh*>"),E:s("D<k*,az*>"),a:s("D<k*,k*>"),aH:s("n<@>"),eO:s("G<@,@>"),eM:s("cP<z*,z>"),bK:s("bX"),bZ:s("cR"),dD:s("Y"),bm:s("c0"),P:s("aq"),K:s("O"),I:s("aa<S>"),fv:s("mC"),ew:s("c4"),N:s("z"),g7:s("m"),bY:s("bh"),aW:s("c7"),aF:s("d_"),gc:s("bi"),ak:s("bE"),U:s("c9<z,z>"),R:s("fr"),gH:s("cb"),ac:s("a2"),cJ:s("az"),gR:s("a_"),z:s("@"),S:s("k"),fr:s("bt*"),l:s("bx*"),gj:s("V*"),dn:s("cM*"),hc:s("be*"),c:s("bY*"),F:s("bZ*"),ah:s("X*"),A:s("0&*"),_:s("O*"),bn:s("a6*"),X:s("z*"),eB:s("fa*"),eP:s("d0*"),n:s("fg*"),r:s("fi*"),y:s("fj*"),O:s("fk*"),q:s("d3*"),w:s("fl*"),Q:s("fm*"),e:s("k*"),dm:s("~(U*)*"),bG:s("mk<aq>?"),W:s("O?"),H:s("S")}})();(function constants(){var s=hunkHelpers.makeConstList
C.q=W.bs.prototype
C.i=W.bt.prototype
C.R=W.ba.prototype
C.U=J.a.prototype
C.b=J.x.prototype
C.V=J.cE.prototype
C.c=J.cF.prototype
C.j=J.cG.prototype
C.d=J.bA.prototype
C.a=J.aS.prototype
C.W=J.aE.prototype
C.C=J.eB.prototype
C.a3=P.eL.prototype
C.D=W.cZ.prototype
C.p=J.bE.prototype
C.E=W.bj.prototype
C.F=W.ca.prototype
C.G=new E.bP("Browser.chrome")
C.r=new E.bP("Browser.firefox")
C.t=new E.bP("Browser.edge")
C.H=new E.bP("Browser.other")
C.a6=new P.hQ()
C.I=new P.hP()
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

C.P=new P.ez()
C.e=new P.jF()
C.Q=new P.jJ()
C.f=new P.k5()
C.n=new P.bw(0)
C.S=new P.bw(5e6)
C.T=new P.ij("element",!1,!1,!1)
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
C.a_=new H.cs(0,{},C.w,H.lW("cs<z*,z*>"))
C.a0=new E.c1("OperatingSystem.windows")
C.B=new E.c1("OperatingSystem.mac")
C.a1=new E.c1("OperatingSystem.linux")
C.a2=new E.c1("OperatingSystem.other")
C.a4=new P.jG(!1)
C.a5=new P.cd(null,2)})();(function staticFields(){$.n_=null
$.aO=0
$.mc=null
$.mb=null
$.nt=null
$.nm=null
$.nz=null
$.kE=null
$.kK=null
$.lY=null
$.ch=null
$.dC=null
$.dD=null
$.lS=!1
$.aK=C.f
$.af=H.c([],H.lW("x<O>"))
$.bb=null
$.lm=null
$.mi=null
$.mh=null
$.db=P.lv(t.N,t.Z)
$.i6=null
$.mp=null
$.mt=null
$.aY=null
$.mE=null
$.mR=null
$.mU=null
$.mT=null
$.jK=null
$.jL=null
$.jM=null
$.mS=null
$.ms=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"r9","nH",function(){return H.qK("_$dart_dartClosure")})
s($,"rm","nI",function(){return H.b_(H.jp({
toString:function(){return"$receiver$"}}))})
s($,"rn","nJ",function(){return H.b_(H.jp({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"ro","nK",function(){return H.b_(H.jp(null))})
s($,"rp","nL",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"rs","nO",function(){return H.b_(H.jp(void 0))})
s($,"rt","nP",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"rr","nN",function(){return H.b_(H.mL(null))})
s($,"rq","nM",function(){return H.b_(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"rv","nR",function(){return H.b_(H.mL(void 0))})
s($,"ru","nQ",function(){return H.b_(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"rL","m3",function(){return P.p3()})
s($,"rw","nS",function(){return new P.jH().$0()})
s($,"rx","nT",function(){return new P.jI().$0()})
s($,"rM","nX",function(){return new Int8Array(H.cf(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rP","nZ",function(){return P.oO("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"t4","o_",function(){return P.pM()})
s($,"rN","nY",function(){return P.mn(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rE","nW",function(){return Z.ax(0)})
s($,"ry","nU",function(){return Z.ax(511)})
s($,"rG","aM",function(){return Z.ax(1)})
s($,"rF","bq",function(){return Z.ax(2)})
s($,"rA","bp",function(){return Z.ax(4)})
s($,"rH","bK",function(){return Z.ax(8)})
s($,"rI","bL",function(){return Z.ax(16)})
s($,"rB","dH",function(){return Z.ax(32)})
s($,"rC","dI",function(){return Z.ax(64)})
s($,"rD","nV",function(){return Z.ax(96)})
s($,"rJ","cm",function(){return Z.ax(128)})
s($,"rz","bo",function(){return Z.ax(256)})
s($,"r7","nG",function(){return new V.i7()})
s($,"r6","H",function(){return $.nG()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cR,DataView:H.Y,ArrayBufferView:H.Y,Float32Array:H.bC,Float64Array:H.bC,Int16Array:H.eq,Int32Array:H.er,Int8Array:H.es,Uint16Array:H.et,Uint32Array:H.eu,Uint8ClampedArray:H.cT,CanvasPixelArray:H.cT,Uint8Array:H.c0,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.hK,HTMLAnchorElement:W.dK,HTMLAreaElement:W.dL,HTMLBaseElement:W.bN,Blob:W.br,HTMLBodyElement:W.bs,HTMLCanvasElement:W.bt,CDATASection:W.aA,CharacterData:W.aA,Comment:W.aA,ProcessingInstruction:W.aA,Text:W.aA,CSSPerspective:W.hV,CSSCharsetRule:W.K,CSSConditionRule:W.K,CSSFontFaceRule:W.K,CSSGroupingRule:W.K,CSSImportRule:W.K,CSSKeyframeRule:W.K,MozCSSKeyframeRule:W.K,WebKitCSSKeyframeRule:W.K,CSSKeyframesRule:W.K,MozCSSKeyframesRule:W.K,WebKitCSSKeyframesRule:W.K,CSSMediaRule:W.K,CSSNamespaceRule:W.K,CSSPageRule:W.K,CSSRule:W.K,CSSStyleRule:W.K,CSSSupportsRule:W.K,CSSViewportRule:W.K,CSSStyleDeclaration:W.cu,MSStyleCSSProperties:W.cu,CSS2Properties:W.cu,CSSImageValue:W.ao,CSSKeywordValue:W.ao,CSSNumericValue:W.ao,CSSPositionValue:W.ao,CSSResourceValue:W.ao,CSSUnitValue:W.ao,CSSURLImageValue:W.ao,CSSStyleValue:W.ao,CSSMatrixComponent:W.aP,CSSRotation:W.aP,CSSScale:W.aP,CSSSkew:W.aP,CSSTranslation:W.aP,CSSTransformComponent:W.aP,CSSTransformValue:W.hX,CSSUnparsedValue:W.hY,DataTransferItemList:W.hZ,HTMLDivElement:W.ba,DOMException:W.i_,ClientRectList:W.cv,DOMRectList:W.cv,DOMRectReadOnly:W.cw,DOMStringList:W.e0,DOMTokenList:W.i0,Element:W.E,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ak,FileList:W.bR,FileWriter:W.e2,HTMLFormElement:W.e4,Gamepad:W.aD,History:W.ih,HTMLCollection:W.by,HTMLFormControlsCollection:W.by,HTMLOptionsCollection:W.by,ImageData:W.bz,HTMLImageElement:W.bT,HTMLInputElement:W.bV,KeyboardEvent:W.bB,Location:W.iu,MediaList:W.iM,MessagePort:W.bX,MIDIInputMap:W.en,MIDIOutputMap:W.eo,MimeType:W.aF,MimeTypeArray:W.ep,PointerEvent:W.al,MouseEvent:W.al,DragEvent:W.al,Document:W.y,DocumentFragment:W.y,HTMLDocument:W.y,ShadowRoot:W.y,XMLDocument:W.y,DocumentType:W.y,Node:W.y,NodeList:W.cU,RadioNodeList:W.cU,Plugin:W.aG,PluginArray:W.eD,RTCStatsReport:W.eM,HTMLSelectElement:W.eO,SourceBuffer:W.au,SourceBufferList:W.eS,SpeechGrammar:W.aH,SpeechGrammarList:W.eT,SpeechRecognitionResult:W.aI,Storage:W.eZ,CSSStyleSheet:W.av,StyleSheet:W.av,HTMLTableCellElement:W.bh,HTMLTableDataCellElement:W.bh,HTMLTableHeaderCellElement:W.bh,HTMLTableElement:W.cZ,HTMLTableRowElement:W.f2,HTMLTableSectionElement:W.f3,HTMLTemplateElement:W.c7,TextTrack:W.aw,TextTrackCue:W.ad,VTTCue:W.ad,TextTrackCueList:W.f6,TextTrackList:W.f7,TimeRanges:W.jj,Touch:W.aJ,TouchEvent:W.bD,TouchList:W.fc,TrackDefaultList:W.jn,CompositionEvent:W.b0,FocusEvent:W.b0,TextEvent:W.b0,UIEvent:W.b0,URL:W.jE,VideoTrackList:W.fv,WheelEvent:W.bj,Window:W.ca,DOMWindow:W.ca,Attr:W.cb,CSSRuleList:W.fD,ClientRect:W.da,DOMRect:W.da,GamepadList:W.fS,NamedNodeMap:W.df,MozNamedAttrMap:W.df,SpeechRecognitionResultList:W.hb,StyleSheetList:W.hi,SVGLength:P.aT,SVGLengthList:P.ef,SVGNumber:P.aX,SVGNumberList:P.ex,SVGPointList:P.iU,SVGScriptElement:P.c4,SVGStringList:P.f0,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aZ,SVGTransformList:P.fd,AudioBuffer:P.hN,AudioParamMap:P.dO,AudioTrackList:P.dP,AudioContext:P.b7,webkitAudioContext:P.b7,BaseAudioContext:P.b7,OfflineAudioContext:P.ey,WebGL2RenderingContext:P.eL,SQLResultSetRowList:P.eW})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c_.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
W.dm.$nativeSuperclassTag="EventTarget"
W.dn.$nativeSuperclassTag="EventTarget"
W.dq.$nativeSuperclassTag="EventTarget"
W.dr.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(D.nx,[])
else D.nx([])})})()
//# sourceMappingURL=test.dart.js.map
