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
a[c]=function(){a[c]=function(){H.r1(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lV(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={lr:function lr(){},
lt:function(a){return new H.eh(a)},
kL:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
oE:function(a,b,c,d){if(t.gw.b(a))return new H.cx(a,b,c.K("@<0>").b9(d).K("cx<1,2>"))
return new H.aU(a,b,c.K("@<0>").b9(d).K("aU<1,2>"))},
ip:function(){return new P.c7("No element")},
ou:function(){return new P.c7("Too many elements")},
oZ:function(a,b){var s=J.aN(a)
if(typeof s!=="number")return s.a_()
H.eT(a,0,s-1,b)},
eT:function(a,b,c,d){if(c-b<=32)H.oY(a,b,c,d)
else H.oX(a,b,c,d)},
oY:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b3(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a7()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
oX:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a8(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a8(a6+a7,2),d=e-h,c=e+h,b=J.b3(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
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
H.eT(a5,a6,r-2,a8)
H.eT(a5,q+2,a7,a8)
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
break}}H.eT(a5,r,q,a8)}else H.eT(a5,r,q,a8)},
eh:function eh(a){this.a=a},
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
el:function el(a,b){this.a=null
this.b=a
this.c=b},
cP:function cP(a,b,c){this.a=a
this.b=b
this.$ti=c},
b1:function b1(a,b,c){this.a=a
this.b=b
this.$ti=c},
fA:function fA(a,b){this.a=a
this.b=b},
cB:function cB(){},
fr:function fr(){},
c9:function c9(){},
on:function(){throw H.b(P.B("Cannot modify unmodifiable Map"))},
nJ:function(a){var s,r=H.nI(a)
if(r!=null)return r
s="minified:"+a
return s},
nA:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a7(a)
if(typeof s!="string")throw H.b(H.az(a))
return s},
cX:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mB:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.b(P.a5(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.E(q,o)|32)>r)return n}return parseInt(a,b)},
eK:function(a){return H.oH(a)},
oH:function(a){var s,r,q
if(a instanceof P.N)return H.ao(H.bK(a),null)
if(J.dH(a)===C.V||t.ak.b(a)){s=C.u(a)
if(H.mA(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.mA(q))return q}}return H.ao(H.bK(a),null)},
mA:function(a){var s=a!=="Object"&&a!==""
return s},
oI:function(){if(!!self.location)return self.location.href
return null},
mz:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oQ:function(a){var s,r,q,p=H.c([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.bJ(q))throw H.b(H.az(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aW(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.az(q))}return H.mz(p)},
mC:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bJ(q))throw H.b(H.az(q))
if(q<0)throw H.b(H.az(q))
if(q>65535)return H.oQ(a)}return H.mz(a)},
oR:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.iG()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
at:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aW(s,10))>>>0,56320|s&1023)}}throw H.b(P.a5(a,0,1114111,null,null))},
c3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oP:function(a){var s=H.c3(a).getFullYear()+0
return s},
oN:function(a){var s=H.c3(a).getMonth()+1
return s},
oJ:function(a){var s=H.c3(a).getDate()+0
return s},
oK:function(a){var s=H.c3(a).getHours()+0
return s},
oM:function(a){var s=H.c3(a).getMinutes()+0
return s},
oO:function(a){var s=H.c3(a).getSeconds()+0
return s},
oL:function(a){var s=H.c3(a).getMilliseconds()+0
return s},
v:function(a){throw H.b(H.az(a))},
d:function(a,b){if(a==null)J.aN(a)
throw H.b(H.ck(a,b))},
ck:function(a,b){var s,r,q="index"
if(!H.bJ(b))return new P.ai(!0,b,q,null)
s=J.aN(a)
if(!(b<0)){if(typeof s!=="number")return H.v(s)
r=b>=s}else r=!0
if(r)return P.P(b,a,q,null,s)
return P.eL(b,q)},
qK:function(a,b,c){if(a>c)return P.a5(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a5(b,a,c,"end",null)
return new P.ai(!0,b,"end",null)},
az:function(a){return new P.ai(!0,a,null,null)},
qF:function(a){if(typeof a!="number")throw H.b(H.az(a))
return a},
b:function(a){var s,r
if(a==null)a=new P.ey()
s=new Error()
s.dartException=a
r=H.r2
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
r2:function(){return J.a7(this.dartException)},
q:function(a){throw H.b(a)},
o:function(a){throw H.b(P.b9(a))},
b_:function(a){var s,r,q,p,o,n
a=H.nE(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.c([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jt(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
ju:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mP:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mv:function(a,b){return new H.ex(a,b==null?null:b.method)},
ls:function(a,b){var s=b==null,r=s?null:b.method
return new H.ef(a,r,s?null:b.receiver)},
ag:function(a){if(a==null)return new H.iW(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bL(a,a.dartException)
return H.qB(a)},
bL:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qB:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aW(r,16)&8191)===10)switch(q){case 438:return H.bL(a,H.ls(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bL(a,H.mv(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.nM()
o=$.nN()
n=$.nO()
m=$.nP()
l=$.nS()
k=$.nT()
j=$.nR()
$.nQ()
i=$.nV()
h=$.nU()
g=p.ap(s)
if(g!=null)return H.bL(a,H.ls(s,g))
else{g=o.ap(s)
if(g!=null){g.method="call"
return H.bL(a,H.ls(s,g))}else{g=n.ap(s)
if(g==null){g=m.ap(s)
if(g==null){g=l.ap(s)
if(g==null){g=k.ap(s)
if(g==null){g=j.ap(s)
if(g==null){g=m.ap(s)
if(g==null){g=i.ap(s)
if(g==null){g=h.ap(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bL(a,H.mv(s,g))}}return H.bL(a,new H.fq(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cZ()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bL(a,new P.ai(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cZ()
return a},
lX:function(a){var s
if(a==null)return new H.hg(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hg(a)},
qM:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
qU:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.u("Unsupported number of arguments for wrapped closure"))},
cj:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qU)
a.$identity=s
return s},
om:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.f_().constructor.prototype):Object.create(new H.bP(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aO
if(typeof r!=="number")return r.A()
$.aO=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.md(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.oi(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.md(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
oi:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ny,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.og:H.of
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
oj:function(a,b,c,d){var s=H.mc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
md:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.ol(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.oj(r,!p,s,b)
if(r===0){p=$.aO
if(typeof p!=="number")return p.A()
$.aO=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.lf())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aO
if(typeof p!=="number")return p.A()
$.aO=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.lf())+"."+H.f(s)+"("+m+");}")()},
ok:function(a,b,c,d){var s=H.mc,r=H.oh
switch(b?-1:a){case 0:throw H.b(new H.eP("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
ol:function(a,b){var s,r,q,p,o,n,m=H.lf(),l=$.ma
if(l==null)l=$.ma=H.m9("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.ok(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aO
if(typeof o!=="number")return o.A()
$.aO=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aO
if(typeof o!=="number")return o.A()
$.aO=o+1
return new Function(p+o+"}")()},
lV:function(a,b,c,d,e,f,g){return H.om(a,b,c,d,!!e,!!f,g)},
of:function(a,b){return H.hu(v.typeUniverse,H.bK(a.a),b)},
og:function(a,b){return H.hu(v.typeUniverse,H.bK(a.c),b)},
mc:function(a){return a.a},
oh:function(a){return a.c},
lf:function(){var s=$.mb
return s==null?$.mb=H.m9("self"):s},
m9:function(a){var s,r,q,p=new H.bP("self","target","receiver","name"),o=J.lq(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.bN("Field name "+a+" not found."))},
r1:function(a){throw H.b(new P.e_(a))},
qO:function(a){return v.getIsolateTag(a)},
t8:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qX:function(a){var s,r,q,p,o,n=$.nx.$1(a),m=$.kK[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kQ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.nq.$2(a,n)
if(q!=null){m=$.kK[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kQ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.l5(s)
$.kK[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kQ[n]=s
return s}if(p==="-"){o=H.l5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nC(a,s)
if(p==="*")throw H.b(P.jD(n))
if(v.leafTags[n]===true){o=H.l5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nC(a,s)},
nC:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lZ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
l5:function(a){return J.lZ(a,!1,null,!!a.$iA)},
qY:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.l5(s)
else return J.lZ(s,c,null,null)},
qS:function(){if(!0===$.lY)return
$.lY=!0
H.qT()},
qT:function(){var s,r,q,p,o,n,m,l
$.kK=Object.create(null)
$.kQ=Object.create(null)
H.qR()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nD.$1(o)
if(n!=null){m=H.qY(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qR:function(){var s,r,q,p,o,n,m=C.K()
m=H.ci(C.L,H.ci(C.M,H.ci(C.v,H.ci(C.v,H.ci(C.N,H.ci(C.O,H.ci(C.P(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nx=new H.kM(p)
$.nq=new H.kN(o)
$.nD=new H.kO(n)},
ci:function(a,b){return a(b)||b},
oy:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.a3("Illegal RegExp pattern ("+String(n)+")",a,null))},
nG:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qL:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nE:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m0:function(a,b,c){var s=H.r0(a,b,c)
return s},
r0:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nE(b),'g'),H.qL(c))},
cr:function cr(){},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jt:function jt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ex:function ex(a,b){this.a=a
this.b=b},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
fq:function fq(a){this.a=a},
iW:function iW(a){this.a=a},
hg:function hg(a){this.a=a
this.b=null},
bw:function bw(){},
f6:function f6(){},
f_:function f_(){},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eP:function eP(a){this.a=a},
D:function D(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ir:function ir(a){this.a=a},
iu:function iu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cI:function cI(a,b){this.a=a
this.$ti=b},
ek:function ek(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
ee:function ee(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cg:function(a){return a},
b2:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.ck(b,a))},
pP:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.qK(a,b,c))
return b},
cS:function cS(){},
X:function X(){},
c0:function c0(){},
bE:function bE(){},
cT:function cT(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
cU:function cU(){},
c1:function c1(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
oV:function(a,b){var s=b.c
return s==null?b.c=H.lJ(a,b.z,!0):s},
mI:function(a,b){var s=b.c
return s==null?b.c=H.dx(a,"mj",[b.z]):s},
mJ:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mJ(a.z)
return s===11||s===12},
oU:function(a){return a.cy},
lW:function(a){return H.lK(v.typeUniverse,a,!1)},
bn:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.nb(a,r,!0)
case 7:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.lJ(a,r,!0)
case 8:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.na(a,r,!0)
case 9:q=b.Q
p=H.dG(a,q,a0,a1)
if(p===q)return b
return H.dx(a,b.z,p)
case 10:o=b.z
n=H.bn(a,o,a0,a1)
m=b.Q
l=H.dG(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lH(a,n,l)
case 11:k=b.z
j=H.bn(a,k,a0,a1)
i=b.Q
h=H.qy(a,i,a0,a1)
if(j===k&&h===i)return b
return H.n9(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dG(a,g,a0,a1)
o=b.z
n=H.bn(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lI(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.hN("Attempted to substitute unexpected RTI kind "+c))}},
dG:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bn(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qz:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bn(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
qy:function(a,b,c,d){var s,r=b.a,q=H.dG(a,r,c,d),p=b.b,o=H.dG(a,p,c,d),n=b.c,m=H.qz(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fT()
s.a=q
s.b=o
s.c=m
return s},
c:function(a,b){a[v.arrayRti]=b
return a},
qG:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.ny(s)
return a.$S()}return null},
nz:function(a,b){var s
if(H.mJ(b))if(a instanceof H.bw){s=H.qG(a)
if(s!=null)return s}return H.bK(a)},
bK:function(a){var s
if(a instanceof P.N){s=a.$ti
return s!=null?s:H.lR(a)}if(Array.isArray(a))return H.lP(a)
return H.lR(J.dH(a))},
lP:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dD:function(a){var s=a.$ti
return s!=null?s:H.lR(a)},
lR:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pW(a,s)},
pW:function(a,b){var s=a instanceof H.bw?a.__proto__.__proto__.constructor:b,r=H.px(v.typeUniverse,s.name)
b.$ccache=r
return r},
ny:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lK(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pV:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dC(q,a,H.q_)
if(!H.b4(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dC(q,a,H.q2)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bJ
else if(s===t.gR||s===t.H)r=H.pZ
else if(s===t.N)r=H.q0
else r=s===t.cJ?H.lS:null
if(r!=null)return H.dC(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.qV)){q.r="$i"+p
return H.dC(q,a,H.q1)}}else if(p===7)return H.dC(q,a,H.pT)
return H.dC(q,a,H.pR)},
dC:function(a,b,c){a.b=c
return a.b(b)},
pU:function(a){var s,r,q=this
if(!H.b4(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.pO
else if(q===t.K)r=H.pN
else r=H.pS
q.a=r
return q.a(a)},
qr:function(a){var s,r=a.y
if(!H.b4(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
pR:function(a){var s=this
if(a==null)return H.qr(s)
return H.Y(v.typeUniverse,H.nz(a,s),null,s,null)},
pT:function(a){if(a==null)return!0
return this.z.b(a)},
q1:function(a){var s=this,r=s.r
if(a instanceof P.N)return!!a[r]
return!!J.dH(a)[r]},
t6:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.nk(a,s)},
pS:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.nk(a,s)},
nk:function(a,b){throw H.b(H.pn(H.n1(a,H.nz(a,b),H.ao(b,null))))},
n1:function(a,b,c){var s=P.ib(a),r=H.ao(b==null?H.bK(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
pn:function(a){return new H.dv("TypeError: "+a)},
ab:function(a,b){return new H.dv("TypeError: "+H.n1(a,null,b))},
q_:function(a){return a!=null},
pN:function(a){return a},
q2:function(a){return!0},
pO:function(a){return a},
lS:function(a){return!0===a||!1===a},
rT:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.ab(a,"bool"))},
rV:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.ab(a,"bool"))},
rU:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.ab(a,"bool?"))},
rW:function(a){if(typeof a=="number")return a
throw H.b(H.ab(a,"double"))},
rY:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ab(a,"double"))},
rX:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ab(a,"double?"))},
bJ:function(a){return typeof a=="number"&&Math.floor(a)===a},
rZ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.ab(a,"int"))},
t0:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.ab(a,"int"))},
t_:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.ab(a,"int?"))},
pZ:function(a){return typeof a=="number"},
t1:function(a){if(typeof a=="number")return a
throw H.b(H.ab(a,"num"))},
t3:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ab(a,"num"))},
t2:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ab(a,"num?"))},
q0:function(a){return typeof a=="string"},
t4:function(a){if(typeof a=="string")return a
throw H.b(H.ab(a,"String"))},
lQ:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.ab(a,"String"))},
t5:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.ab(a,"String?"))},
qu:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.A(r,H.ao(a[q],b))
return s},
nl:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.c([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.W,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.d(a6,i)
l=C.a.A(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.A(" extends ",H.ao(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.ao(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.A(a3,H.ao(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.A(a3,H.ao(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.m3(H.ao(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.f(a1)},
ao:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ao(a.z,b)
return s}if(l===7){r=a.z
s=H.ao(r,b)
q=r.y
return J.m3(q===11||q===12?C.a.A("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.ao(a.z,b))+">"
if(l===9){p=H.qA(a.z)
o=a.Q
return o.length!==0?p+("<"+H.qu(o,b)+">"):p}if(l===11)return H.nl(a,b,null)
if(l===12)return H.nl(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
qA:function(a){var s,r=H.nI(a)
if(r!=null)return r
s="minified:"+a
return s},
nc:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
px:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lK(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dy(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dx(a,b,q)
n[b]=o
return o}else return m},
pv:function(a,b){return H.nj(a.tR,b)},
pu:function(a,b){return H.nj(a.eT,b)},
lK:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.n7(H.n5(a,null,b,c))
r.set(b,s)
return s},
hu:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.n7(H.n5(a,b,c,!0))
q.set(c,r)
return r},
pw:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lH(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bm:function(a,b){b.a=H.pU
b.b=H.pV
return b},
dy:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.au(null,null)
s.y=b
s.cy=c
r=H.bm(a,s)
a.eC.set(c,r)
return r},
nb:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.ps(a,b,r,c)
a.eC.set(r,s)
return s},
ps:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b4(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.au(null,null)
q.y=6
q.z=b
q.cy=c
return H.bm(a,q)},
lJ:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.pr(a,b,r,c)
a.eC.set(r,s)
return s},
pr:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b4(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.kR(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.kR(q.z))return q
else return H.oV(a,b)}}p=new H.au(null,null)
p.y=7
p.z=b
p.cy=c
return H.bm(a,p)},
na:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.pp(a,b,r,c)
a.eC.set(r,s)
return s},
pp:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b4(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dx(a,"mj",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.au(null,null)
q.y=8
q.z=b
q.cy=c
return H.bm(a,q)},
pt:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.au(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bm(a,s)
a.eC.set(q,r)
return r},
ht:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
po:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dx:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.ht(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.au(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bm(a,r)
a.eC.set(p,q)
return q},
lH:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.ht(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.au(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bm(a,o)
a.eC.set(q,n)
return n},
n9:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.ht(m)
if(j>0){s=l>0?",":""
r=H.ht(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.po(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.au(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bm(a,o)
a.eC.set(q,r)
return r},
lI:function(a,b,c,d){var s,r=b.cy+("<"+H.ht(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.pq(a,b,c,r,d)
a.eC.set(r,s)
return s},
pq:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bn(a,b,r,0)
m=H.dG(a,c,r,0)
return H.lI(a,n,m,c!==m)}}l=new H.au(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bm(a,l)},
n5:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
n7:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.ph(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.n6(a,r,g,f,!1)
else if(q===46)r=H.n6(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bl(a.u,a.e,f.pop()))
break
case 94:f.push(H.pt(a.u,f.pop()))
break
case 35:f.push(H.dy(a.u,5,"#"))
break
case 64:f.push(H.dy(a.u,2,"@"))
break
case 126:f.push(H.dy(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.lG(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dx(p,n,o))
else{m=H.bl(p,a.e,n)
switch(m.y){case 11:f.push(H.lI(p,m,o,a.n))
break
default:f.push(H.lH(p,m,o))
break}}break
case 38:H.pi(a,f)
break
case 42:l=a.u
f.push(H.nb(l,H.bl(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.lJ(l,H.bl(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.na(l,H.bl(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fT()
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
H.lG(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.n9(p,H.bl(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.lG(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.pk(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bl(a.u,a.e,h)},
ph:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
n6:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.nc(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.oU(o)+'"')
d.push(H.hu(s,o,n))}else d.push(p)
return m},
pi:function(a,b){var s=b.pop()
if(0===s){b.push(H.dy(a.u,1,"0&"))
return}if(1===s){b.push(H.dy(a.u,4,"1&"))
return}throw H.b(P.hN("Unexpected extended operation "+H.f(s)))},
bl:function(a,b,c){if(typeof c=="string")return H.dx(a,c,a.sEA)
else if(typeof c=="number")return H.pj(a,b,c)
else return c},
lG:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bl(a,b,c[s])},
pk:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bl(a,b,c[s])},
pj:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.hN("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.hN("Bad index "+c+" for "+b.i(0)))},
Y:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
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
if(q)if(H.Y(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.Y(a,b.z,c,d,e)
if(p===6){s=d.z
return H.Y(a,b,c,s,e)}if(r===8){if(!H.Y(a,b.z,c,d,e))return!1
return H.Y(a,H.mI(a,b),c,d,e)}if(r===7){s=H.Y(a,b.z,c,d,e)
return s}if(p===8){if(H.Y(a,b,c,d.z,e))return!0
return H.Y(a,b,c,H.mI(a,d),e)}if(p===7){s=H.Y(a,b,c,d.z,e)
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
if(!H.Y(a,k,c,j,e)||!H.Y(a,j,e,k,c))return!1}return H.nm(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.nm(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pY(a,b,c,d,e)}return!1},
nm:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.Y(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.Y(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.Y(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.Y(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.Y(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pY:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.Y(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.nc(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.Y(a,H.hu(a,b,l[p]),c,r[p],e))return!1
return!0},
kR:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b4(a))if(r!==7)if(!(r===6&&H.kR(a.z)))s=r===8&&H.kR(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qV:function(a){var s
if(!H.b4(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
b4:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
nj:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
au:function au(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fT:function fT(){this.c=this.b=this.a=null},
fO:function fO(){},
dv:function dv(a){this.a=a},
nI:function(a){return v.mangledGlobalNames[a]},
qZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hI:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lY==null){H.qS()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.b(P.jD("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.mm()]
if(p!=null)return p
p=H.qX(a)
if(p!=null)return p
if(typeof a=="function")return C.X
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,J.mm(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
mm:function(){var s=$.n3
return s==null?$.n3=v.getIsolateTag("_$dart_js"):s},
ov:function(a,b){if(!H.bJ(a))throw H.b(P.m7(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a5(a,0,4294967295,"length",null))
return J.ow(new Array(a),b)},
lp:function(a,b){if(!H.bJ(a)||a<0)throw H.b(P.bN("Length must be a non-negative integer: "+H.f(a)))
return H.c(new Array(a),b.K("w<0>"))},
ow:function(a,b){return J.lq(H.c(a,b.K("w<0>")))},
lq:function(a){a.fixed$length=Array
return a},
ox:function(a,b){return J.dM(a,b)},
dH:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cF.prototype
return J.cE.prototype}if(typeof a=="string")return J.aS.prototype
if(a==null)return J.cG.prototype
if(typeof a=="boolean")return J.ed.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.N)return a
return J.hI(a)},
qN:function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.N)return a
return J.hI(a)},
b3:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.N)return a
return J.hI(a)},
hH:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.N)return a
return J.hI(a)},
nw:function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bG.prototype
return a},
dI:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bG.prototype
return a},
aL:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.N)return a
return J.hI(a)},
m3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qN(a).A(a,b)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dH(a).q(a,b)},
m4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nw(a).t(a,b)},
cn:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nA(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b3(a).h(a,b)},
lb:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.nA(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hH(a).l(a,b,c)},
o4:function(a,b){return J.dI(a).E(a,b)},
o5:function(a,b,c){return J.aL(a).hb(a,b,c)},
o6:function(a,b,c,d){return J.aL(a).hx(a,b,c,d)},
o7:function(a,b){return J.dI(a).W(a,b)},
dM:function(a,b){return J.nw(a).b0(a,b)},
lc:function(a,b){return J.b3(a).F(a,b)},
hL:function(a,b){return J.hH(a).J(a,b)},
o8:function(a,b,c,d){return J.aL(a).hV(a,b,c,d)},
ld:function(a,b){return J.hH(a).I(a,b)},
o9:function(a){return J.aL(a).ghC(a)},
le:function(a){return J.aL(a).gdH(a)},
oa:function(a){return J.aL(a).gdJ(a)},
ah:function(a){return J.dH(a).gS(a)},
b5:function(a){return J.hH(a).gP(a)},
aN:function(a){return J.b3(a).gm(a)},
m5:function(a){return J.hH(a).iq(a)},
ob:function(a,b){return J.aL(a).it(a,b)},
oc:function(a,b,c){return J.dI(a).u(a,b,c)},
od:function(a){return J.dI(a).iC(a)},
a7:function(a){return J.dH(a).i(a)},
a:function a(){},
ed:function ed(){},
cG:function cG(){},
bc:function bc(){},
eD:function eD(){},
bG:function bG(){},
aE:function aE(){},
w:function w(a){this.$ti=a},
iq:function iq(a){this.$ti=a},
a8:function a8(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bC:function bC(){},
cF:function cF(){},
cE:function cE(){},
aS:function aS(){}},P={
p7:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qC()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cj(new P.k3(q),1)).observe(s,{childList:true})
return new P.k2(q,s,r)}else if(self.setImmediate!=null)return P.qD()
return P.qE()},
p8:function(a){self.scheduleImmediate(H.cj(new P.k4(a),0))},
p9:function(a){self.setImmediate(H.cj(new P.k5(a),0))},
pa:function(a){P.lA(C.n,a)},
lA:function(a,b){var s=C.c.a8(a.a,1000)
return P.pl(s<0?0:s,b)},
mO:function(a,b){var s=C.c.a8(a.a,1000)
return P.pm(s<0?0:s,b)},
pl:function(a,b){var s=new P.du()
s.eR(a,b)
return s},
pm:function(a,b){var s=new P.du()
s.eS(a,b)
return s},
rR:function(a){return new P.ce(a,1)},
pd:function(){return C.a5},
pe:function(a){return new P.ce(a,3)},
q4:function(a,b){return new P.dr(a,b.K("dr<0>"))},
qq:function(){var s,r
for(s=$.ch;s!=null;s=$.ch){$.dF=null
r=s.b
$.ch=r
if(r==null)$.dE=null
s.a.$0()}},
qx:function(){$.lT=!0
try{P.qq()}finally{$.dF=null
$.lT=!1
if($.ch!=null)$.m2().$1(P.nr())}},
qv:function(a){var s=new P.fB(a),r=$.dE
if(r==null){$.ch=$.dE=s
if(!$.lT)$.m2().$1(P.nr())}else $.dE=r.b=s},
qw:function(a){var s,r,q,p=$.ch
if(p==null){P.qv(a)
$.dF=$.dE
return}s=new P.fB(a)
r=$.dF
if(r==null){s.b=p
$.ch=$.dF=s}else{q=r.b
s.b=q
$.dF=r.b=s
if(q==null)$.dE=s}},
mN:function(a,b){var s=$.aK
if(s===C.f)return P.lA(a,b)
return P.lA(a,s.hD(b))},
p1:function(a,b){var s=$.aK
if(s===C.f)return P.mO(a,b)
return P.mO(a,s.dE(b,t.aF))},
nn:function(a,b,c,d,e){P.qw(new P.kC(d,e))},
qs:function(a,b,c,d){var s,r=$.aK
if(r===c)return d.$0()
$.aK=c
s=r
try{r=d.$0()
return r}finally{$.aK=s}},
qt:function(a,b,c,d,e){var s,r=$.aK
if(r===c)return d.$1(e)
$.aK=c
s=r
try{r=d.$1(e)
return r}finally{$.aK=s}},
k3:function k3(a){this.a=a},
k2:function k2(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
du:function du(){this.c=0},
km:function km(a,b){this.a=a
this.b=b},
kl:function kl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ce:function ce(a,b){this.a=a
this.b=b},
bH:function bH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dr:function dr(a,b){this.a=a
this.$ti=b},
fB:function fB(a){this.a=a
this.b=null},
d_:function d_(){},
f1:function f1(){},
d1:function d1(){},
kt:function kt(){},
kC:function kC(a,b){this.a=a
this.b=b},
ka:function ka(){},
kb:function kb(a,b){this.a=a
this.b=b},
kc:function kc(a,b,c){this.a=a
this.b=b
this.c=c},
oA:function(a,b){return new H.D(a.K("@<0>").b9(b).K("D<1,2>"))},
oB:function(a,b,c){return H.qM(a,new H.D(b.K("@<0>").b9(c).K("D<1,2>")))},
lu:function(a,b){return new H.D(a.K("@<0>").b9(b).K("D<1,2>"))},
cJ:function(a){return new P.de(a.K("de<0>"))},
lF:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
pg:function(a,b){var s=new P.df(a,b)
s.c=a.e
return s},
ot:function(a,b,c){var s,r
if(P.lU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.c([],t.s)
$.af.push(a)
try{P.q3(a,s)}finally{if(0>=$.af.length)return H.d($.af,-1)
$.af.pop()}r=P.mK(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
lo:function(a,b,c){var s,r
if(P.lU(a))return b+"..."+c
s=new P.T(b)
$.af.push(a)
try{r=s
r.a=P.mK(r.a,a,", ")}finally{if(0>=$.af.length)return H.d($.af,-1)
$.af.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lU:function(a){var s,r
for(s=$.af.length,r=0;r<s;++r)if(a===$.af[r])return!0
return!1},
q3:function(a,b){var s,r,q,p,o,n,m,l=a.gP(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.v())return
s=H.f(l.gB(l))
b.push(s)
k+=s.length+2;++j}if(!l.v()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gB(l);++j
if(!l.v()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB(l);++j
for(;l.v();p=o,o=n){n=l.gB(l);++j
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
oC:function(a,b,c){var s=P.oA(b,c)
a.I(0,new P.iv(s,b,c))
return s},
mn:function(a,b){var s,r,q=P.cJ(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)q.n(0,b.a(a[r]))
return q},
lw:function(a){var s,r={}
if(P.lU(a))return"{...}"
s=new P.T("")
try{$.af.push(a)
s.a+="{"
r.a=!0
J.ld(a,new P.iz(r,s))
s.a+="}"}finally{if(0>=$.af.length)return H.d($.af,-1)
$.af.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
de:function de(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k9:function k9(a){this.a=a
this.c=this.b=null},
df:function df(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cD:function cD(){},
iv:function iv(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(){},
i:function i(){},
cN:function cN(){},
iz:function iz(a,b){this.a=a
this.b=b},
W:function W(){},
hv:function hv(){},
cO:function cO(){},
ca:function ca(a,b){this.a=a
this.$ti=b},
dm:function dm(){},
dg:function dg(){},
dz:function dz(){},
p4:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.p5(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
p5:function(a,b,c,d){var s=a?$.nX():$.nW()
if(s==null)return null
if(0===c&&d===b.length)return P.mU(s,b)
return P.mU(s,b.subarray(c,P.bg(c,d,b.length)))},
mU:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ag(r)}return null},
m8:function(a,b,c,d,e,f){if(C.c.bo(f,4)!==0)throw H.b(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
pM:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pL:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.a_()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.b3(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.al()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.d(r,o)
r[o]=n}return r},
jM:function jM(){},
jN:function jN(){},
hS:function hS(){},
hT:function hT(){},
dX:function dX(){},
dZ:function dZ(){},
i8:function i8(){},
im:function im(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
il:function il(a){this.a=a},
jK:function jK(){},
jO:function jO(){},
kr:function kr(a){this.b=0
this.c=a},
jL:function jL(a){this.a=a},
kq:function kq(a){this.a=a
this.b=16
this.c=0},
kP:function(a,b){var s=H.mB(a,b)
if(s!=null)return s
throw H.b(P.a3(a,null,null))},
or:function(a){if(a instanceof H.bw)return a.i(0)
return"Instance of '"+H.f(H.eK(a))+"'"},
iw:function(a,b,c,d){var s,r=c?J.lp(a,d):J.ov(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
lv:function(a,b,c){var s,r=H.c([],c.K("w<0>"))
for(s=J.b5(a);s.v();)r.push(s.gB(s))
if(b)return r
return J.lq(r)},
oD:function(a,b,c){var s,r,q=J.lp(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
f3:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bg(b,c,r)
if(b<=0){if(typeof c!=="number")return c.ah()
q=c<r}else q=!0
return H.mC(q?s.slice(b,c):s)}if(t.bm.b(a))return H.oR(a,b,P.bg(b,c,a.length))
return P.p_(a,b,c)},
p_:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a5(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a5(c,b,a.length,o,o))
r=J.b5(a)
for(q=0;q<b;++q)if(!r.v())throw H.b(P.a5(b,0,q,o,o))
p=[]
if(s)for(;r.v();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.v())throw H.b(P.a5(c,b,q,o,o))
p.push(r.gB(r))}return H.mC(p)},
oS:function(a){return new H.ee(a,H.oy(a,!1,!0,!1,!1,!1))},
mK:function(a,b,c){var s=J.b5(b)
if(!s.v())return a
if(c.length===0){do a+=H.f(s.gB(s))
while(s.v())}else{a+=H.f(s.gB(s))
for(;s.v();)a=a+c+H.f(s.gB(s))}return a},
mR:function(){var s=H.oI()
if(s!=null)return P.p3(s)
throw H.b(P.B("'Uri.base' is not supported"))},
kp:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.o2().b
if(typeof b!="string")H.q(H.az(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghU().cg(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.at(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
oo:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
op:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
e1:function(a){if(a>=10)return""+a
return"0"+a},
me:function(a){return new P.by(1000*a)},
ib:function(a){if(typeof a=="number"||H.lS(a)||null==a)return J.a7(a)
if(typeof a=="string")return JSON.stringify(a)
return P.or(a)},
hN:function(a){return new P.dP(a)},
bN:function(a){return new P.ai(!1,null,null,a)},
m7:function(a,b,c){return new P.ai(!0,a,b,c)},
oe:function(a,b){if(a==null)throw H.b(new P.ai(!1,null,b,"Must not be null"))
return a},
mD:function(a){var s=null
return new P.c4(s,s,!1,s,s,a)},
eL:function(a,b){return new P.c4(null,null,!0,a,b,"Value not in range")},
a5:function(a,b,c,d,e){return new P.c4(b,c,!0,a,d,"Invalid value")},
bg:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.v(c)
s=a>c}else s=!0
if(s)throw H.b(P.a5(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
s=b>c}else s=!0
if(s)throw H.b(P.a5(b,a,c,"end",null))
return b}return c},
mE:function(a,b){if(a<0)throw H.b(P.a5(a,0,null,b,null))
return a},
P:function(a,b,c,d,e){var s=e==null?J.aN(b):e
return new P.eb(s,!0,a,c,"Index out of range")},
B:function(a){return new P.fs(a)},
jD:function(a){return new P.fp(a)},
lz:function(a){return new P.c7(a)},
b9:function(a){return new P.dY(a)},
u:function(a){return new P.fQ(a)},
a3:function(a,b,c){return new P.ii(a,b,c)},
m_:function(a){H.qZ(a)},
p3:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.E(a5,4)^58)*3|C.a.E(a5,0)^100|C.a.E(a5,1)^97|C.a.E(a5,2)^116|C.a.E(a5,3)^97)>>>0
if(s===0)return P.mQ(a4<a4?C.a.u(a5,0,a4):a5,5,a3).geo()
else if(s===32)return P.mQ(C.a.u(a5,5,a4),0,a3).geo()}r=P.iw(8,0,!1,t.S)
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
if(P.no(a5,0,a4,0,r)>=14){if(7>=r.length)return H.d(r,7)
r[7]=a4}if(1>=r.length)return H.d(r,1)
p=r[1]
if(p>=0)if(P.no(a5,0,p,20,r)===20){if(7>=r.length)return H.d(r,7)
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
a5=C.a.b2(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.ae(a5,"http",0)){if(q&&n+3===m&&C.a.ae(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.b2(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.ae(a5,"https",0)){if(q&&n+4===m&&C.a.ae(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.b2(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.u(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.ha(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.pF(a5,0,p)
else{if(p===0)P.cf(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.pG(a5,d,o-1):""
b=P.pC(a5,o,n,!1)
q=n+1
if(q<m){a=H.mB(C.a.u(a5,q,m),a3)
a0=P.pE(a==null?H.q(P.a3("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pD(a5,m,l,a3,i,b!=null)
a2=l<k?P.lM(a5,l+1,k,a3):a3
return new P.bI(i,c,b,a0,a1,a2,k<a4?P.pB(a5,k+1,a4):a3)},
mT:function(a){var s=t.N
return C.b.i_(H.c(a.split("&"),t.s),P.lu(s,s),new P.jI(C.e))},
p2:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jF(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.W(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.kP(C.a.u(a,q,r),null)
if(typeof n!=="number")return n.a7()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.d(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.kP(C.a.u(a,q,c),null)
if(typeof n!=="number")return n.a7()
if(n>255)j.$2(k,q)
if(p>=s)return H.d(i,p)
i[p]=n
return i},
mS:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jG(a),b=new P.jH(c,a)
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
l=C.b.gaD(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.p2(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.d(j,g)
j[g]=0
d=g+1
if(d>=i)return H.d(j,d)
j[d]=0
g+=2}else{d=C.c.aW(f,8)
if(g<0||g>=i)return H.d(j,g)
j[g]=d
d=g+1
if(d>=i)return H.d(j,d)
j[d]=f&255
g+=2}}return j},
nd:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cf:function(a,b,c){throw H.b(P.a3(c,a,b))},
pE:function(a,b){if(a!=null&&a===P.nd(b))return null
return a},
pC:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.W(a,b)===91){s=c-1
if(C.a.W(a,s)!==93)P.cf(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.pz(a,r,s)
if(q<s){p=q+1
o=P.ni(a,C.a.ae(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mS(a,r,q)
return C.a.u(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.W(a,n)===58){q=C.a.bx(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.ni(a,C.a.ae(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mS(a,b,q)
return"["+C.a.u(a,b,q)+o+"]"}return P.pI(a,b,c)},
pz:function(a,b,c){var s=C.a.bx(a,"%",b)
return s>=b&&s<c?s:c},
ni:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.T(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.W(a,s)
if(p===37){o=P.lN(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.T("")
m=i.a+=C.a.u(a,r,s)
if(n)o=C.a.u(a,s,s+3)
else if(o==="%")P.cf(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.T("")
if(r<s){i.a+=C.a.u(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.W(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.u(a,r,s)
if(i==null){i=new P.T("")
n=i}else n=i
n.a+=j
n.a+=P.lL(p)
s+=k
r=s}}}if(i==null)return C.a.u(a,b,c)
if(r<c)i.a+=C.a.u(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pI:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.W(a,s)
if(o===37){n=P.lN(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.T("")
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
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.T("")
if(r<s){q.a+=C.a.u(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.cf(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.W(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.u(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.T("")
m=q}else m=q
m.a+=l
m.a+=P.lL(o)
s+=j
r=s}}}}if(q==null)return C.a.u(a,b,c)
if(r<c){l=C.a.u(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pF:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.nf(C.a.E(a,b)))P.cf(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.E(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cf(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.u(a,b,c)
return P.py(r?a.toLowerCase():a)},
py:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pG:function(a,b,c){return P.dA(a,b,c,C.a_,!1)},
pD:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dA(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.ab(s,"/"))s="/"+s
return P.pH(s,e,f)},
pH:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.ab(a,"/"))return P.pJ(a,!s||c)
return P.pK(a)},
lM:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.bN("Both query and queryParameters specified"))
return P.dA(a,b,c,C.l,!0)}if(d==null)return null
s=new P.T("")
r.a=""
d.I(0,new P.kn(new P.ko(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
pB:function(a,b,c){return P.dA(a,b,c,C.l,!0)},
lN:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.W(a,b+1)
r=C.a.W(a,n)
q=H.kL(s)
p=H.kL(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aW(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.at(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.u(a,b,b+3).toUpperCase()
return null},
lL:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.d(s,0)
s[0]=37
q=C.a.E(k,a>>>4)
if(1>=r)return H.d(s,1)
s[1]=q
q=C.a.E(k,a&15)
if(2>=r)return H.d(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.hn(a,6*o)&63|p
if(n>=r)return H.d(s,n)
s[n]=37
q=n+1
l=C.a.E(k,m>>>4)
if(q>=r)return H.d(s,q)
s[q]=l
l=n+2
q=C.a.E(k,m&15)
if(l>=r)return H.d(s,l)
s[l]=q
n+=3}}return P.f3(s,0,null)},
dA:function(a,b,c,d,e){var s=P.nh(a,b,c,d,e)
return s==null?C.a.u(a,b,c):s},
nh:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.W(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lN(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cf(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.W(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.lL(o)}}if(p==null){p=new P.T("")
n=p}else n=p
n.a+=C.a.u(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.v(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.u(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
ng:function(a){if(C.a.ab(a,"."))return!0
return C.a.e3(a,"/.")!==-1},
pK:function(a){var s,r,q,p,o,n,m
if(!P.ng(a))return a
s=H.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.J(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
pJ:function(a,b){var s,r,q,p,o,n
if(!P.ng(a))return!b?P.ne(a):a
s=H.c([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaD(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaD(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.ne(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
ne:function(a){var s,r,q,p=a.length
if(p>=2&&P.nf(J.o4(a,0)))for(s=1;s<p;++s){r=C.a.E(a,s)
if(r===58)return C.a.u(a,0,s)+"%3A"+C.a.ai(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
pA:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.E(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.bN("Invalid URL encoding"))}}return s},
lO:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.E(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.u(a,b,c)
else p=new H.p(C.a.u(a,b,c))}else{p=H.c([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.E(a,o)
if(r>127)throw H.b(P.bN("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.b(P.bN("Truncated URI"))
p.push(P.pA(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cg(p)},
nf:function(a){var s=a|32
return 97<=s&&s<=122},
mQ:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.c([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.E(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.a3(k,a,r))}}if(q<0&&r>b)throw H.b(P.a3(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.E(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaD(j)
if(p!==44||r!==n+7||!C.a.ae(a,"base64",n+1))throw H.b(P.a3("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.J.i7(0,a,m,s)
else{l=P.nh(a,m,s,C.l,!0)
if(l!=null)a=C.a.b2(a,m,s,l)}return new P.jE(a,j,c)},
pQ:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.oD(22,new P.kx(),t.gc),l=new P.kw(m),k=new P.ky(),j=new P.kz(),i=l.$2(0,225)
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
no:function(a,b,c,d,e){var s,r,q,p,o,n=$.o3()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.d(n,d)
r=n[d]
q=C.a.E(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.d(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.d(e,o)
e[o]=s}return d},
aA:function aA(){},
ak:function ak(a,b){this.a=a
this.b=b},
Z:function Z(){},
by:function by(a){this.a=a},
i4:function i4(){},
i5:function i5(){},
L:function L(){},
dP:function dP(a){this.a=a},
ey:function ey(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c4:function c4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eb:function eb(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fs:function fs(a){this.a=a},
fp:function fp(a){this.a=a},
c7:function c7(a){this.a=a},
dY:function dY(a){this.a=a},
eB:function eB(){},
cZ:function cZ(){},
e_:function e_(a){this.a=a},
fQ:function fQ(a){this.a=a},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(){},
k:function k(){},
h:function h(){},
ec:function ec(){},
n:function n(){},
I:function I(){},
ar:function ar(){},
R:function R(){},
N:function N(){},
y:function y(){},
T:function T(a){this.a=a},
jI:function jI(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
jH:function jH(a,b){this.a=a
this.b=b},
bI:function bI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
ko:function ko(a,b){this.a=a
this.b=b},
kn:function kn(a){this.a=a},
jE:function jE(a,b,c){this.a=a
this.b=b
this.c=c},
kx:function kx(){},
kw:function kw(a){this.a=a},
ky:function ky(){},
kz:function kz(){},
ha:function ha(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fH:function fH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qJ:function(a){var s
if(t.v.b(a)){s=J.oa(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.dw(a.data,a.height,a.width)},
qI:function(a){if(a instanceof P.dw)return{data:a.a,height:a.b,width:a.c}
return a},
bo:function(a){var s,r,q,p,o
if(a==null)return null
s=P.lu(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
qH:function(a){var s={}
a.I(0,new P.kD(s))
return s},
kg:function kg(){},
ki:function ki(a,b){this.a=a
this.b=b},
kj:function kj(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function kD(a){this.a=a},
kh:function kh(a,b){this.a=a
this.b=b},
e6:function e6(a,b){this.a=a
this.b=b},
ig:function ig(){},
ih:function ih(){},
k8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
pf:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
h8:function h8(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aT:function aT(){},
ei:function ei(){},
aX:function aX(){},
ez:function ez(){},
iX:function iX(){},
c5:function c5(){},
f2:function f2(){},
m:function m(){},
aZ:function aZ(){},
ff:function ff(){},
fX:function fX(){},
fY:function fY(){},
h4:function h4(){},
h5:function h5(){},
hi:function hi(){},
hj:function hj(){},
hr:function hr(){},
hs:function hs(){},
bi:function bi(){},
hP:function hP(){},
dR:function dR(){},
hQ:function hQ(a){this.a=a},
dS:function dS(){},
b7:function b7(){},
eA:function eA(){},
fD:function fD(){},
eN:function eN(){},
eY:function eY(){},
he:function he(){},
hf:function hf(){}},W={
m6:function(){var s=document.createElement("a")
return s},
lh:function(){var s=document.createElement("canvas")
return s},
oq:function(a,b,c){var s,r=document.body
r.toString
s=C.q.ao(r,a,b,c)
s.toString
r=new H.b1(new W.a1(s),new W.i6(),t.ac.K("b1<i.E>"))
return t.h.a(r.gaP(r))},
i7:function(a){return"wheel"},
cy:function(a){var s,r,q="element tag unavailable"
try{s=J.aL(a)
if(typeof s.gek(a)=="string")q=s.gek(a)}catch(r){H.ag(r)}return q},
os:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ag(s)}return q},
k7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
n4:function(a,b,c,d){var s=W.k7(W.k7(W.k7(W.k7(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
a0:function(a,b,c,d){var s=new W.fP(a,b,c==null?null:W.np(new W.k6(c),t.aD),!1)
s.hu()
return s},
n2:function(a){var s=W.m6(),r=window.location
s=new W.cd(new W.kd(s,r))
s.eK(a)
return s},
pb:function(a,b,c,d){return!0},
pc:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
n8:function(){var s=t.N,r=P.mn(C.A,s),q=H.c(["TEMPLATE"],t.s)
s=new W.hm(r,P.cJ(s),P.cJ(s),P.cJ(s),null)
s.eQ(null,new H.cP(C.A,new W.kk(),t.eM),q,null)
return s},
np:function(a,b){var s=$.aK
if(s===C.f)return a
return s.dE(a,b)},
r:function r(){},
hM:function hM(){},
dN:function dN(){},
dO:function dO(){},
bO:function bO(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
aB:function aB(){},
hY:function hY(){},
K:function K(){},
cu:function cu(){},
hZ:function hZ(){},
ap:function ap(){},
aP:function aP(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
ba:function ba(){},
i2:function i2(){},
cv:function cv(){},
cw:function cw(){},
e3:function e3(){},
i3:function i3(){},
fE:function fE(a,b){this.a=a
this.b=b},
F:function F(){},
i6:function i6(){},
j:function j(){},
e:function e(){},
al:function al(){},
bS:function bS(){},
e5:function e5(){},
e7:function e7(){},
aD:function aD(){},
ik:function ik(){},
bA:function bA(){},
bB:function bB(){},
bU:function bU(){},
bW:function bW(){},
bD:function bD(){},
ix:function ix(){},
iP:function iP(){},
bY:function bY(){},
ep:function ep(){},
iQ:function iQ(a){this.a=a},
eq:function eq(){},
iR:function iR(a){this.a=a},
aF:function aF(){},
er:function er(){},
am:function am(){},
a1:function a1(a){this.a=a},
x:function x(){},
cV:function cV(){},
aG:function aG(){},
eF:function eF(){},
eO:function eO(){},
j4:function j4(a){this.a=a},
eQ:function eQ(){},
av:function av(){},
eU:function eU(){},
aH:function aH(){},
eV:function eV(){},
aI:function aI(){},
f0:function f0(){},
jg:function jg(a){this.a=a},
aw:function aw(){},
bh:function bh(){},
d0:function d0(){},
f4:function f4(){},
f5:function f5(){},
c8:function c8(){},
ax:function ax(){},
ad:function ad(){},
f8:function f8(){},
f9:function f9(){},
jo:function jo(){},
aJ:function aJ(){},
bF:function bF(){},
fe:function fe(){},
js:function js(){},
b0:function b0(){},
jJ:function jJ(){},
fx:function fx(){},
bk:function bk(){},
cb:function cb(){},
cc:function cc(){},
fF:function fF(){},
dc:function dc(){},
fU:function fU(){},
dh:function dh(){},
hd:function hd(){},
hk:function hk(){},
fC:function fC(){},
fM:function fM(a){this.a=a},
ln:function ln(a,b){this.a=a
this.$ti=b},
fP:function fP(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k6:function k6(a){this.a=a},
lE:function lE(a){this.$ti=a},
cd:function cd(a){this.a=a},
M:function M(){},
cW:function cW(a){this.a=a},
iU:function iU(a){this.a=a},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(){},
ke:function ke(){},
kf:function kf(){},
hm:function hm(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kk:function kk(){},
hl:function hl(){},
cC:function cC(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
an:function an(){},
kd:function kd(a,b){this.a=a
this.b=b},
hw:function hw(a){this.a=a
this.b=!1},
ks:function ks(a){this.a=a},
fG:function fG(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
fR:function fR(){},
fS:function fS(){},
fV:function fV(){},
fW:function fW(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h6:function h6(){},
h7:function h7(){},
h9:function h9(){},
dp:function dp(){},
dq:function dq(){},
hb:function hb(){},
hc:function hc(){},
hh:function hh(){},
hn:function hn(){},
ho:function ho(){},
ds:function ds(){},
dt:function dt(){},
hp:function hp(){},
hq:function hq(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){}},K={
Q:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.b(P.u("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.E(a,0)
r=C.a.E(b,0)
if(s>r){q=r
r=s
s=q}return new K.j_(s,r)},
t:function(a){var s=new K.j5()
s.eI(a)
return s},
b6:function b6(){},
e9:function e9(){},
iA:function iA(){},
ac:function ac(){this.a=null},
j_:function j_(a,b){this.a=a
this.b=b},
j5:function j5(){this.a=null}},L={
jq:function(){var s=new L.jp()
s.a=new H.D(t.cn)
s.b=new H.D(t.w)
s.c=P.cJ(t.X)
return s},
eZ:function eZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fc:function fc(a,b,c){this.a=a
this.b=b
this.c=c},
fd:function fd(a){this.b=a
this.c=null},
jp:function jp(){var _=this
_.d=_.c=_.b=_.a=null},
fg:function fg(a){this.b=a
this.a=this.c=null}},O={
li:function(a){var s=new O.a9(a.K("a9<0>"))
s.bq(a)
return s},
a9:function a9(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cR:function cR(){this.b=this.a=null},
mo:function(){var s,r=new O.en(),q=O.li(t.hc)
r.e=q
q.b4(r.gfi(),r.gfk())
q=new O.aV(r,"emission")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a_(0,0,0)
r.f=q
q=new O.aV(r,"ambient")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a_(0,0,0)
r.r=q
q=new O.aV(r,"diffuse")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a_(0,0,0)
r.x=q
q=new O.aV(r,"invDiffuse")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a_(0,0,0)
r.y=q
q=new O.iG(r,"specular")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a_(0,0,0)
q.ch=100
r.z=q
q=new O.iC(r,"bump")
q.c=new A.a2(!1,!1,!1)
r.Q=q
r.ch=null
q=new O.aV(r,"reflect")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a_(0,0,0)
r.cx=q
q=new O.iF(r,"refract")
q.c=new A.a2(!1,!1,!1)
q.f=new V.a_(0,0,0)
q.ch=1
r.cy=q
q=new O.iB(r,"alpha")
q.c=new A.a2(!1,!1,!1)
q.f=1
r.db=q
q=new D.cH()
q.bq(t.gj)
q.e=H.c([],t.bb)
q.f=H.c([],t.cP)
q.r=H.c([],t.eb)
q.x=H.c([],t.du)
q.z=q.y=null
q.cT(q.gfg(),q.gfT(),q.gfX())
r.dx=q
s=new O.iE()
s.b=new V.aj(0,0,0,0)
s.c=1
s.d=10
s.e=!1
r.dy=s
s=q.y
q=s==null?q.y=D.G():s
q.n(0,r.ghd())
q=r.dx
s=q.z
q=s==null?q.z=D.G():s
q.n(0,r.gaR())
r.fr=null
return r},
en:function en(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(){},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(){},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(){},
iB:function iB(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cQ:function cQ(){},
iC:function iC(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aV:function aV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iE:function iE(){var _=this
_.e=_.d=_.c=_.b=null},
iF:function iF(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iG:function iG(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eR:function eR(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f7:function f7(){}},E={
lm:function(){var s,r=new E.bz()
r.a=""
r.b=!0
s=O.li(t.l)
r.y=s
s.b4(r.gi8(),r.gib())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.saa(0,null)
return r},
n_:function(){if(J.lc(window.navigator.vendor,"Google"))return C.H
if(J.lc(window.navigator.userAgent,"Firefox"))return C.r
var s=window.navigator.appVersion
if(J.b3(s).F(s,"Trident")||C.a.F(s,"Edge"))return C.t
if(J.lc(window.navigator.appName,"Microsoft"))return C.t
return C.I},
n0:function(){var s=window.navigator.appVersion
if(J.b3(s).F(s,"Win"))return C.a1
if(C.a.F(s,"Mac"))return C.B
if(C.a.F(s,"Linux"))return C.a2
return C.a3},
oT:function(a,b){var s=new E.j0(a)
s.eH(a,b)
return s},
p0:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.mM(a,!0,!0,!0,!1)
s=W.lh()
r=s.style
r.width="100%"
r.height="100%"
J.le(a).n(0,s)
return E.mM(s,!0,!0,!0,!1)},
mM:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.fb(),n=t.z,m=C.i.cR(a,"webgl2",P.oB(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.u("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.oT(m,a)
n=new T.jl(m)
m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.fu(a)
s=new X.is()
s.c=new X.aq(!1,!1,!1)
s.d=P.cJ(t.e)
n.b=s
s=new X.iS(n)
s.f=0
s.r=V.bf()
s.x=V.bf()
s.ch=s.Q=1
n.c=s
s=new X.iy(n)
s.r=0
s.x=V.bf()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.jr(n)
s.f=V.bf()
s.r=V.bf()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.c([],t.eG)
s=$.i9
n.Q=(s==null?$.i9=new E.fN(E.n_(),E.n0()):s).a===C.r?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.a0(q,"contextmenu",n.gft(),!1))
n.z.push(W.a0(a,"focus",n.gfB(),!1))
n.z.push(W.a0(a,"blur",n.gfm(),!1))
n.z.push(W.a0(q,"keyup",n.gfF(),!1))
n.z.push(W.a0(q,"keydown",n.gfD(),!1))
n.z.push(W.a0(a,"mousedown",n.gfJ(),!1))
n.z.push(W.a0(a,"mouseup",n.gfN(),!1))
n.z.push(W.a0(a,p,n.gfL(),!1))
r=n.z
W.i7(a)
W.i7(a)
r.push(W.a0(a,W.i7(a),n.gfP(),!1))
n.z.push(W.a0(q,p,n.gfv(),!1))
n.z.push(W.a0(q,"mouseup",n.gfz(),!1))
n.z.push(W.a0(q,"pointerlockchange",n.gfR(),!1))
n.z.push(W.a0(a,"touchstart",n.gh6(),!1))
n.z.push(W.a0(a,"touchend",n.gh2(),!1))
n.z.push(W.a0(a,"touchmove",n.gh4(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ak(Date.now(),!1)
o.db=0
o.dh()
return o},
hU:function hU(){},
bz:function bz(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bQ:function bQ(a){this.b=a},
c2:function c2(a){this.b=a},
fN:function fN(a,b){this.a=a
this.b=b},
j0:function j0(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
fb:function fb(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
jn:function jn(a){this.a=a}},Z={
lD:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cg(c)),35044)
a.bindBuffer(b,null)
return new Z.fy(b,s)},
ay:function(a){return new Z.bj(a)},
fy:function fy(a,b){this.a=a
this.b=b},
dV:function dV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
fz:function fz(a){this.a=a},
co:function co(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a){this.a=a}},D={
G:function(){var s=new D.bR()
s.d=0
return s},
hV:function hV(){},
bR:function bR(){var _=this
_.d=_.c=_.b=_.a=null},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
U:function U(){this.b=null},
aQ:function aQ(){this.b=null},
aR:function aR(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dT:function dT(){},
bx:function bx(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
V:function V(){},
cH:function cH(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
eH:function eH(){},
eW:function eW(){}},X={dW:function dW(a,b){this.a=a
this.b=b},eg:function eg(a,b){this.a=a
this.b=b},is:function is(){var _=this
_.d=_.c=_.b=_.a=null},cM:function cM(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},iy:function iy(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aq:function aq(a,b,c){this.a=a
this.b=b
this.c=c},bZ:function bZ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iS:function iS(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c_:function c_(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eI:function eI(){},d2:function d2(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},jr:function jr(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fu:function fu(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mi:function(a){var s=new X.ij(),r=new V.aj(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=V.ly()
s.r=r
return s},
lx:function(a){var s,r,q=new X.eC()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gp().n(0,q.geT())
r=new D.z("mover",s,q.b)
r.b=!0
q.a1(r)}r=q.c
$.E().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.z("fov",r,1.0471975511965976)
r.b=!0
q.a1(r)}r=q.d
$.E().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.z("near",r,0.1)
r.b=!0
q.a1(r)}r=q.e
$.E().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.z("far",r,2000)
r.b=!0
q.a1(r)}return q},
hR:function hR(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
lg:function lg(){},
ij:function ij(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
io:function io(){this.b=this.a=null},
eC:function eC(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
jh:function jh(){}},V={
hW:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aj(s,r,q,1)},
hJ:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
la:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bo(a-b,s)
return(a<0?a+s:a)+b},
H:function(a,b,c){if(a==null)return C.a.aq("null",c)
$.E().toString
return C.a.aq(C.d.en(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cl:function(a,b,c){var s,r,q,p,o,n,m=H.c([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.o)(a),++q){p=V.H(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.d(m,o)
s=C.a.aq(m[o],r)
n=m.length
if(o>=n)return H.d(m,o)
m[o]=s}return m},
dJ:function(a){return C.d.iz(Math.pow(2,C.W.cu(Math.log(H.qF(a))/Math.log(2))))},
bX:function(){var s=$.mu
return s==null?$.mu=V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.be(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mt:function(a,b,c){return V.aW(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mq:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aW(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
mr:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aW(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
ms:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aW(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)},
mp:function(a,b,c){var s=c.D(),r=b.aI(s).D(),q=s.aI(r),p=new V.C(a.a,a.b,a.c),o=r.T(0).ad(p),n=q.T(0).ad(p),m=s.T(0).ad(p)
return V.aW(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
bf:function(){var s=$.mx
return s==null?$.mx=new V.a4(0,0):s},
my:function(){var s=$.aY
return s==null?$.aY=new V.O(0,0,0):s},
ly:function(){var s=$.mH
return s==null?$.mH=V.mG(0,0,1,1):s},
mG:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eM(a,b,c,d)},
db:function(){var s=$.mY
return s==null?$.mY=new V.C(0,0,0):s},
p6:function(){var s=$.jP
return s==null?$.jP=new V.C(-1,0,0):s},
lC:function(){var s=$.jQ
return s==null?$.jQ=new V.C(0,1,0):s},
mZ:function(){var s=$.jR
return s==null?$.jR=new V.C(0,0,1):s},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ia:function ia(){},
eo:function eo(a,b,c,d,e,f,g,h,i){var _=this
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
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eM:function eM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ae:function ae(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
r_:function(a){P.p1(C.T,new V.l6(a))},
oW:function(a){var s=new V.jb()
s.eJ(a,!0)
return s},
b8:function b8(){},
l6:function l6(a){this.a=a},
e0:function e0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e8:function e8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ea:function ea(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eE:function eE(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iY:function iY(a){this.a=a
this.c=null},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jb:function jb(){this.b=this.a=null},
jd:function jd(a){this.a=a},
jc:function jc(a){this.a=a},
je:function je(a){this.a=a},
nB:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2="testCanvas",b3=null,b4=34067,b5="modifiers",b6=V.oW("Test 027"),b7=W.lh()
b7.className="pageLargeCanvas"
b7.id=b2
b6.a.appendChild(b7)
s=t.i
b6.dv(H.c(["Test of a back buffer target for rendering to a texture. ","That back buffer texture is applied to a box."],s))
b6.hw(H.c(["shapes"],s))
b6.dv(H.c(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(b2)
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.p0(r,!0,!0,!0,!1)
p=U.mk()
o=new U.cY()
o.r=o.f=o.e=o.d=o.c=o.b=o.a=0
o.seq(0)
o.sef(0,0)
o.sej(0)
n=o.d
$.E().toString
if(!(Math.abs(n-0.1)<1e-9)){o.d=0.1
n=new D.z("deltaYaw",n,0.1)
n.b=!0
o.H(n)}n=o.e
$.E().toString
if(!(Math.abs(n-0.21)<1e-9)){o.e=0.21
n=new D.z("deltaPitch",n,0.21)
n.b=!0
o.H(n)}n=o.f
$.E().toString
if(!(Math.abs(n-0.32)<1e-9)){o.f=0.32
n=new D.z("deltaRoll",n,0.32)
n.b=!0
o.H(n)}p.n(0,o)
p.n(0,U.lk(V.mt(0,0,5)))
m=X.lx(p)
l=new X.hR()
l.d=l.c=l.b=l.a=512
l.e=!0
l.f=!1
l.x=l.r=1
l.ch=T.mL(b3)
l.cx=new V.aj(0,0,0,1)
l.cy=!0
l.db=2000
l.dx=!0
l.dy=V.ly()
l.say(0,512)
l.sat(0,512)
k=new V.aj(0,0,0,1)
if(!l.cx.q(0,k)){j=l.cx
l.cx=k
o=new D.z("color",j,k)
o.b=!0
l.a1(o)}if(l.cy){l.cy=!1
o=new D.z("clearColor",!0,!1)
o.b=!0
l.a1(o)}o=l.db
$.E().toString
if(!(Math.abs(o-2000)<1e-9)){l.db=2000
o=new D.z("depth",o,2000)
o.b=!0
l.a1(o)}o=l.r
$.E().toString
if(!(Math.abs(o-1)<1e-9)){l.r=1
o=new D.z("autoResizeScalarX",o,1)
o.b=!0
l.a1(o)}o=l.x
$.E().toString
if(!(Math.abs(o-1)<1e-9)){l.x=1
o=new D.z("autoResizeScalarY",o,1)
o.b=!0
l.a1(o)}i=V.ly()
if(!J.J(l.dy,i)){j=l.dy
l.dy=i
o=new D.z("region",j,i)
o.b=!0
l.a1(o)}o=q.f
n=o.a
h=n.createTexture()
n.bindTexture(b4,h)
n.texParameteri(b4,10242,10497)
n.texParameteri(b4,10243,10497)
n.texParameteri(b4,10241,9729)
n.texParameteri(b4,10240,9729)
n.bindTexture(b4,b3)
g=new T.jk()
g.a=0
g.b=h
g.c=!1
g.d=0
o.aT(g,h,"../resources/maskonaive/posx.jpg",34069,!1,!1)
o.aT(g,h,"../resources/maskonaive/negx.jpg",34070,!1,!1)
o.aT(g,h,"../resources/maskonaive/posy.jpg",34071,!1,!1)
o.aT(g,h,"../resources/maskonaive/negy.jpg",34072,!1,!1)
o.aT(g,h,"../resources/maskonaive/posz.jpg",34073,!1,!1)
o.aT(g,h,"../resources/maskonaive/negz.jpg",34074,!1,!1)
f=new M.ct()
f.a=!0
o=E.lm()
e=F.j7()
n=e.a
d=new V.C(-1,-1,1).D()
c=n.bu(new V.as(1,2,4,6),V.hW(255,0,0),new V.O(-1,-1,0),new V.a4(0,1),d,b3)
d=e.a
n=new V.C(1,-1,1).D()
b=d.bu(new V.as(0,3,4,6),V.hW(0,0,255),new V.O(1,-1,0),new V.a4(1,1),n,b3)
n=e.a
d=new V.C(1,1,1).D()
a=n.bu(new V.as(0,2,5,6),V.hW(0,128,0),new V.O(1,1,0),new V.a4(1,0),d,b3)
d=e.a
n=V.bf()
a0=new V.C(-1,1,1).D()
a1=d.bu(new V.as(0,2,4,7),V.hW(255,255,0),new V.O(-1,1,0),n,a0,b3)
e.d.dt(H.c([c,b,a,a1],t.j))
e.as()
o.saa(0,e)
f.e=o
f.saY(b3)
f.sbm(0,b3)
f.sb3(b3)
o=new O.eR()
o.b=1.0471975511965976
o.d=new V.a_(1,1,1)
j=o.c
o.c=g
g.gp().n(0,o.gaR())
n=new D.z("boxTexture",j,o.c)
n.b=!0
o.V(n)
f.sb3(o)
f.sbm(0,l)
f.saY(m)
a2=E.lm()
a2.saa(0,F.nH())
a3=O.mo()
o=a3.dx
a4=V.lC()
n=U.lk(V.mp(V.my(),a4,new V.C(0,-1,-1)))
k=new V.a_(1,1,1)
d=new D.bx()
d.c=new V.a_(1,1,1)
d.a=V.mZ()
d.d=V.lC()
d.e=V.p6()
j=d.b
d.b=n
n.gp().n(0,d.geM())
n=new D.z("mover",j,d.b)
n.b=!0
d.aE(n)
if(!d.c.q(0,k)){j=d.c
d.c=k
n=new D.z("color",j,k)
n.b=!0
d.aE(n)}o.n(0,d)
o=a3.r
o.sb_(0,new V.a_(0,0,1))
o=a3.x
o.sb_(0,new V.a_(0,1,0))
o=a3.z
o.sb_(0,new V.a_(1,0,0))
o=a3.z
o.c4(new A.a2(!0,o.c.b,!1))
o.dj(10)
a5=M.mh()
a5.saY(m)
a5.sb3(a3)
a5.sbm(0,l)
a5.e.n(0,a2)
a6=U.mk()
o=q.x
n=new U.d9()
d=U.lj()
d.scQ(0,!0)
d.scD(6.283185307179586)
d.scF(0)
d.sZ(0,0)
d.scE(100)
d.sU(0)
d.scj(0.5)
n.b=d
a0=n.gaU()
d.gp().n(0,a0)
d=U.lj()
d.scQ(0,!0)
d.scD(6.283185307179586)
d.scF(0)
d.sZ(0,0)
d.scE(100)
d.sU(0)
d.scj(0.5)
n.c=d
d.gp().n(0,a0)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
a7=new X.aq(!1,!1,!1)
j=n.d
n.d=a7
d=new D.z(b5,j,a7)
d.b=!0
n.H(d)
d=n.f
if(d!==!1){n.f=!1
d=new D.z("invertX",d,!1)
d.b=!0
n.H(d)}d=n.r
if(d!==!1){n.r=!1
d=new D.z("invertY",d,!1)
d.b=!0
n.H(d)}n.bd(o)
a6.n(0,n)
o=q.x
n=new U.d8()
d=U.lj()
d.scQ(0,!0)
d.scD(6.283185307179586)
d.scF(0)
d.sZ(0,0)
d.scE(100)
d.sU(0)
d.scj(0.2)
n.b=d
d.gp().n(0,n.gaU())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
a7=new X.aq(!0,!1,!1)
j=n.c
n.c=a7
d=new D.z(b5,j,a7)
d.b=!0
n.H(d)
n.bd(o)
a6.n(0,n)
o=q.x
n=new U.da()
n.c=0.01
n.e=n.d=0
a7=new X.aq(!1,!1,!1)
n.b=a7
d=new D.z(b5,b3,a7)
d.b=!0
n.H(d)
n.bd(o)
a6.n(0,n)
a6.n(0,U.lk(V.mt(0,0,5)))
a8=X.lx(a6)
a9=E.lm()
a9.saa(0,F.kE(1,b3,b3,1))
b0=O.mo()
o=b0.f
n=l.ch
d=o.c
if(!d.b)o.c4(new A.a2(d.a,!0,!1))
d=o.d
if(d!==n){if(d!=null)d.gp().L(0,o.gaR())
j=o.d
o.d=n
n.gp().n(0,o.gaR())
n=new D.z(o.b+".texture2D",j,o.d)
n.b=!0
o.a.V(n)}b1=M.mh()
b1.saY(a8)
b1.sb3(b0)
b1.e.n(0,a9)
o=H.c([f,a5,b1],t.f2)
n=new M.cp()
n.bq(t.bn)
n.e=!0
n.f=!1
n.r=null
n.b4(n.gfZ(),n.gh0())
n.ac(0,o)
o=q.d
if(o!==n){if(o!=null)o.gp().L(0,q.gcZ())
q.d=n
n.gp().n(0,q.gcZ())
q.d_()}o=new V.iY("shapes")
s=s.getElementById("shapes")
o.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
o.dr(0,"Cube",new V.kW(a9),!0)
o.aA(0,"Cuboid",new V.kX(a9))
o.aA(0,"Cylinder",new V.kY(a9))
o.aA(0,"Cone",new V.kZ(a9))
o.aA(0,"Cylindrical",new V.l_(a9))
o.aA(0,"Sphere",new V.l0(a9))
o.aA(0,"Spherical",new V.l1(a9))
o.aA(0,"Toroid",new V.l2(a9))
o.aA(0,"Knot",new V.l3(a9))
s=q.Q
if(s==null)s=q.Q=D.G()
o=s.b
s=o==null?s.b=H.c([],t.f):o
s.push(new V.l4(b6,b0))
V.r_(q)},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kV:function kV(){},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
kU:function kU(){},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
kT:function kT(){},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a,b){this.a=a
this.b=b}},U={
lj:function(){var s=new U.hX()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
lk:function(a){var s=new U.cq()
s.a=a
return s},
mk:function(){var s=new U.bT()
s.bq(t.ah)
s.b4(s.geO(),s.gfV())
s.e=null
s.f=V.bX()
s.r=0
return s},
hX:function hX(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cq:function cq(){this.b=this.a=null},
bT:function bT(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
S:function S(){},
cY:function cY(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d8:function d8(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d9:function d9(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
mh:function(){var s,r,q=new M.cz()
q.a=!0
s=O.li(t.l)
q.e=s
s.b4(q.gfo(),q.gfq())
q.y=q.x=q.r=q.f=null
r=X.mi(null)
q.saY(null)
q.sbm(0,r)
q.sb3(null)
return q},
cp:function cp(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ct:function ct(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cz:function cz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a6:function a6(){}},A={
oF:function(a,b){var s=a.bg,r=new A.em(b,s)
r.cY(b,s)
r.eG(a,b)
return r},
oG:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gax(a5)+a6.gax(a6)+a7.gax(a7)+a8.gax(a8)+a9.gax(a9)+b0.gax(b0)+b1.gax(b1)+b2.gax(b2)+b3.gax(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.o)(b4),++r)a+="_"+H.f(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.o)(b5),++r)a+="_"+H.f(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.o)(b6),++r)a+="_"+H.f(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.o)(b7),++r)a+="_"+H.f(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
for(o=b5.length,r=0;r<o;++r,p=!0)q+=b5[r].b
for(o=b6.length,r=0;r<o;++r,p=!0)q+=b6[r].b
for(n=b7.length,r=0;r<n;++r,p=!0)q+=b7[r].b
m=b1.a||b1.b||!1||b2.a||b2.b||!1
l=s>0
if(!(a6.a||a6.b||!1))if(!(a7.a||a7.b||!1)){s=a8.a||a8.b||!1||a9.a||a9.b||!1
k=s}else k=!0
else k=!0
s=!a9.a
j=!s||a9.b||!1||l||o>0||m
if(!(a7.a||a7.b||!1))i=a8.a||a8.b||!1||!s||a9.b||!1
else i=!0
if(!i)h=b0.a||b0.b||!1||m
else h=!0
g=b0.a||b0.b||!1
f=a5.b||a6.b||a7.b||a8.b||a9.b||b0.b||b1.b||b2.b||b3.b
e=a4>0
d=h||g||j||!1
c=l&&i
a0=a0&&f
b=$.aM()
if(h){s=$.br()
b=new Z.bj(b.a|s.a)}if(g){s=$.bq()
b=new Z.bj(b.a|s.a)}if(f){s=$.bs()
b=new Z.bj(b.a|s.a)}if(e){s=$.bp()
b=new Z.bj(b.a|s.a)}return new A.iD(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
kA:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kB:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.kA(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hK(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
q9:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kA(b,r,"emission")
s=b.a+="\n"
s+="vec3 emissionColor()\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
b.a=r}else{r=s+"   return emissionClr;\n"
b.a=r}else if(r.b){r=s+"   return texture2D(emissionTxt, txt2D).rgb;\n"
b.a=r}else r=s
r+="}\n"
b.a=r
b.a=r+"\n"},
q5:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kB(b,r,"ambient")
b.a+="\n"},
q7:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kB(b,r,"diffuse")
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
qa:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kB(b,r,"invDiffuse")
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
qg:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kB(b,r,"specular")
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
qc:function(a,b){var s,r,q
if(!a.k4)return
s=b.a+="// === Normal ===\n"
s=b.a=s+"\n"
r=a.f
q=r.b
if(q){s+="uniform sampler2D bumpTxt;\n"
b.a=s
s=b.a=s+"\n"}s+="vec3 normal()\n"
b.a=s
s=b.a=s+"{\n"
r=r.a
if(!(r||q||!1)||r)s=b.a=s+"   return normalize(normalVec);\n"
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
qe:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kA(b,r,"reflect")
s=b.a+="\n"
s+="vec3 reflect(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = reflectClr;\n"
b.a=r}else if(r.b){r=s+"   vec3 scalar = texture2D(reflectTxt, txt2D).rgb;\n"
b.a=r}else r=s
r+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
qf:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kA(b,r,"refract")
s=b.a+="uniform float refraction;\n"
s+="\n"
b.a=s
s+="vec3 refract(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = refractClr;\n"
b.a=r}else if(r.b){r=s+"   vec3 scalar = texture2D(refractTxt, txt2D).rgb;\n"
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
q6:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hK(r)
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
s=a.b
if(s.a||s.b||!1)o.push("ambientColor")
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
if(s.a||s.b||!1)n.push("diffuse(norm, normDir)")
s=a.d
if(s.a||s.b||!1)n.push("invDiffuse(norm, normDir)")
s=a.e
if(s.a||s.b||!1)n.push("specular(norm, normDir)")
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
q8:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hK(r)
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
l=a.b
if(l.a||l.b||!1)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.c([],p)
p=a.c
if(p.a||p.b||!1)k.push("diffuse(norm, lit.viewDir)")
p=a.d
if(p.a||p.b||!1)k.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(p.a||p.b||!1)k.push("specular(norm, lit.viewDir)")
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
qd:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hK(r)
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
m=a.b
if(m.a||m.b||!1)j.push("ambientColor")
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
if(p.a||p.b||!1)i.push("diffuse(norm, normDir)")
p=a.d
if(p.a||p.b||!1)i.push("invDiffuse(norm, normDir)")
p=a.e
if(p.a||p.b||!1)i.push("specular(norm, normDir)")
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
qh:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hK(r)
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
if(m){s=$.i9
if(s==null)s=$.i9=new E.fN(E.n_(),E.n0())
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
if(p.a||p.b||!1)h.push("ambientColor")
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
if(s.a||s.b||!1)g.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)g.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)g.push("specular(norm, litVec)")
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
qb:function(a,b){var s,r
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
if(s.a||s.b||!1)r.push("ambientColor")
s=a.c
if(s.a||s.b||!1)r.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)r.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.b.j(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
qi:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.T("")
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
A.q9(a,h)
A.q5(a,h)
A.q7(a,h)
A.qa(a,h)
A.qg(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.qe(a,h)
A.qf(a,h)}A.qc(a,h)
p=h.a+="// === Alpha ===\n"
p=h.a=p+"\n"
o=a.y
n=o.a
if(n){p+="uniform float alpha;\n"
h.a=p}o=o.b
if(o)p=h.a=p+"uniform sampler2D alphaTxt;\n"
p+="float alphaValue()\n"
h.a=p
p=h.a=p+"{\n"
if(!(n||o||!1))p=h.a=p+"   return 1.0;\n"
else if(o||!1){if(n){if(o){p+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
h.a=p}}else if(o){p+="   float a = texture2D(alphaTxt, txt2D).a;\n"
h.a=p}p+="   if (a <= 0.000001) discard;\n"
h.a=p
p+="   return a;\n"
h.a=p}else if(n){p+="   return alpha;\n"
h.a=p}p+="}\n"
h.a=p
h.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.q6(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.q8(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.qd(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.qh(a,o[m],h)
A.qb(a,h)}o=h.a+="// === Main ===\n"
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
s=a.b
if(s.a||s.b||!1)h.a+="   setAmbientColor();\n"
s=a.c
if(s.a||s.b||!1)h.a+="   setDiffuseColor();\n"
s=a.d
if(s.a||s.b||!1)h.a+="   setInvDiffuseColor();\n"
s=a.e
if(s.a||s.b||!1)h.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ai(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ai(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ai(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ai(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(s.a||s.b||!1)l.push("emissionColor()")
s=a.r
if(s.a||s.b||!1)l.push("reflect(refl)")
s=a.x
if(s.a||s.b||!1)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.b.j(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
qj:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.b1+"];\n"
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
ql:function(a,b){var s
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
qk:function(a,b){var s
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
qn:function(a,b){var s,r
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
qo:function(a,b){var s,r
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
qm:function(a,b){var s
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
qp:function(a,b){var s
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
hK:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ai(a,1)},
lB:function(a,b,c,d,e){var s=new A.jw(a,c,e)
s.f=d
P.iw(d,0,!1,t.e)
return s},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function hO(a){this.a=a},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a,b){var _=this
_.iN=_.dN=_.bw=_.bg=_.b1=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iV=_.iU=_.iT=_.cs=_.cr=_.cq=_.cp=_.co=_.cn=_.cm=_.cl=_.iS=_.dZ=_.dY=_.iR=_.dX=_.dW=_.dV=_.iQ=_.dU=_.dT=_.dS=_.iP=_.dR=_.dQ=_.iO=_.dP=_.dO=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dU:function dU(a,b){this.a=a
this.b=b},
e2:function e2(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
iD:function iD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.b1=b5
_.bg=b6
_.bw=b7},
d3:function d3(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d4:function d4(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d6:function d6(a,b,c,d,e,f,g,h,i,j){var _=this
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
d7:function d7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
c6:function c6(){},
eS:function eS(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fh:function fh(){},
jB:function jB(a){this.a=a},
fj:function fj(a,b,c){this.a=a
this.c=b
this.d=c},
jy:function jy(a,b,c){this.a=a
this.c=b
this.d=c},
jz:function jz(a,b,c){this.a=a
this.c=b
this.d=c},
jA:function jA(a,b,c){this.a=a
this.c=b
this.d=c},
jw:function jw(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
fi:function fi(a,b,c){this.a=a
this.c=b
this.d=c},
jx:function jx(a,b,c){this.a=a
this.c=b
this.d=c},
fk:function fk(a,b,c){this.a=a
this.c=b
this.d=c},
fl:function fl(a,b,c){this.a=a
this.c=b
this.d=c},
jC:function jC(a,b,c){this.a=a
this.c=b
this.d=c},
fm:function fm(a,b,c){this.a=a
this.c=b
this.d=c},
d5:function d5(a,b,c){this.a=a
this.c=b
this.d=c},
fn:function fn(a,b,c){this.a=a
this.c=b
this.d=c},
fo:function fo(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kE:function(a,b,c,d){var s=F.j7()
F.dB(s,b,c,d,a,1,0,0,1)
F.dB(s,b,c,d,a,0,1,0,3)
F.dB(s,b,c,d,a,0,0,1,2)
F.dB(s,b,c,d,a,-1,0,0,0)
F.dB(s,b,c,d,a,0,-1,0,0)
F.dB(s,b,c,d,a,0,0,-1,3)
s.as()
return s},
kv:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dB:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.C(f,e+a3,d+a4)
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
h.d=g}k=F.kv(g)
j=F.kv(f)
i=F.m1(a1,a2,new F.ku(h,F.kv(e),F.kv(d),j,k,a0),b)
if(i!=null)a.bi(i)},
nv:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0<3)return null
s=F.j7()
r=b?-1:1
q=-6.283185307179586/a0
p=H.c([],t.j)
o=s.a
n=new V.C(0,0,r).D()
p.push(o.hz(new V.as(a,-1,-1,-1),new V.aj(1,1,1,1),new V.O(0,0,c),new V.C(0,0,r),new V.a4(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(typeof i!=="number")return H.v(i)
n=new V.C(k,j,r).D()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
o.toString
e=F.fw(new V.as(a,-1,-1,-1),null,new V.aj(h,f,g,1),new V.O(k*i,j*i,c),new V.C(0,0,r),new V.a4(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.n(0,e)
p.push(e)}s.d.dt(p)
return s},
ns:function(a,b,c,d){return F.nt(!0,a,b,new F.kF(1,d),c)},
nt:function(a,b,c,d,e){var s,r=null
if(e<3)return r
if(c<1)return r
s=F.m1(c,e,new F.kH(d),r)
if(s==null)return r
s.as()
s.cb()
if(b)s.bi(F.nv(3,!1,1,new F.kI(d),e))
s.bi(F.nv(1,!0,-1,new F.kJ(d),e))
return s},
nF:function(a,b,c){var s,r={}
r.a=b
if(b==null)r.a=new F.l7()
s=F.kE(a,null,new F.l8(r,1),c)
s.cb()
return s},
nH:function(){return F.nu(15,30,0.5,1,new F.l9())},
qW:function(){return F.nu(12,120,0.3,1,new F.kS(3,2))},
nu:function(a,b,c,d,e){var s=F.m1(a,b,new F.kG(e,d,b,c),null)
if(s==null)return null
s.as()
s.cb()
return s},
m1:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.j7()
r=H.c([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.fw(e,e,new V.aj(n,0,0,1),e,e,new V.a4(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.ci(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.fw(e,e,new V.aj(h,g,f,1),e,e,new V.a4(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.ci(d))}}s.d.hy(a+1,b+1,r)
return s},
cA:function(a,b,c){var s=new F.e4(),r=a.a
if(r==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
s.c7(a)
s.c8(b)
s.hj(c)
s.a.a.d.b.push(s)
s.a.a.a5()
return s},
oz:function(a,b){var s=new F.ej(),r=a.a
if(r==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
s.c7(a)
s.c8(b)
s.a.a.c.b.push(s)
s.a.a.a5()
return s},
j7:function(){var s=new F.j6(),r=new F.jS(s)
r.b=!1
r.c=H.c([],t.j)
s.a=r
r=new F.ja(s)
r.b=H.c([],t.p)
s.b=r
r=new F.j9(s)
r.b=H.c([],t.L)
s.c=r
r=new F.j8(s)
r.b=H.c([],t.b)
s.d=r
s.e=null
return s},
fw:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.fv(),p=new F.k_()
p.b=H.c([],t.p)
q.b=p
p=new F.jW()
s=t.L
p.b=H.c([],s)
p.c=H.c([],s)
q.c=p
p=new F.jT()
s=t.b
p.b=H.c([],s)
p.c=H.c([],s)
p.d=H.c([],s)
q.d=p
h=$.nY()
q.e=0
p=$.aM()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.br().a)!==0?e:r
q.x=(s&$.bq().a)!==0?b:r
q.y=(s&$.bs().a)!==0?f:r
q.z=(s&$.bM().a)!==0?g:r
q.Q=(s&$.nZ().a)!==0?c:r
q.ch=(s&$.cm().a)!==0?i:0
q.cx=(s&$.bp().a)!==0?a:r
return q},
ku:function ku(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kF:function kF(a,b){this.a=a
this.b=b},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
l7:function l7(){},
l8:function l8(a,b){this.a=a
this.b=b},
l9:function l9(){},
kS:function kS(a,b){this.a=a
this.b=b},
kG:function kG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e4:function e4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(){},
jf:function jf(){},
ej:function ej(){this.b=this.a=null},
it:function it(){},
jv:function jv(){},
eG:function eG(){this.a=null},
j6:function j6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j8:function j8(a){this.a=a
this.b=null},
j9:function j9(a){this.a=a
this.b=null},
ja:function ja(a){this.a=a
this.b=null},
fv:function fv(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
k1:function k1(a){this.a=a},
k0:function k0(a){this.a=a},
jS:function jS(a){this.a=a
this.c=this.b=null},
jT:function jT(){this.d=this.c=this.b=null},
jU:function jU(a,b){this.a=a
this.b=b},
jV:function jV(a,b){this.a=a
this.b=b},
jW:function jW(){this.c=this.b=null},
jY:function jY(){},
jX:function jX(){},
jZ:function jZ(){},
iV:function iV(){},
k_:function k_(){this.b=null}},T={
mL:function(a){var s=new T.jj()
s.a=0
s.b=a
s.d=s.c=!1
s.x=s.r=s.f=s.e=0
return s},
fa:function fa(){},
ji:function ji(){},
jj:function jj(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jk:function jk(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
jl:function jl(a){var _=this
_.a=a
_.e=_.d=_.c=null},
jm:function jm(a,b,c,d,e,f,g){var _=this
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
H.lr.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gS:function(a){return H.cX(a)},
i:function(a){return"Instance of '"+H.f(H.eK(a))+"'"}}
J.ed.prototype={
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$iaA:1}
J.cG.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0}}
J.bc.prototype={
gS:function(a){return 0},
i:function(a){return String(a)},
$iml:1}
J.eD.prototype={}
J.bG.prototype={}
J.aE.prototype={
i:function(a){var s=a[$.nL()]
if(s==null)return this.eD(a)
return"JavaScript function for "+H.f(J.a7(s))},
$iaC:1}
J.w.prototype={
cK:function(a,b){if(!!a.fixed$length)H.q(P.B("removeAt"))
if(b<0||b>=a.length)throw H.b(P.eL(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var s
if(!!a.fixed$length)H.q(P.B("remove"))
for(s=0;s<a.length;++s)if(J.J(a[s],b)){a.splice(s,1)
return!0}return!1},
ac:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.B("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.o)(b),++r)a.push(b[r])},
I:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.b9(a))}},
j:function(a,b){var s,r,q=P.iw(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.d(q,s)
q[s]=r}return q.join(b)},
i4:function(a){return this.j(a,"")},
hZ:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.b9(a))}return s},
i_:function(a,b,c){return this.hZ(a,b,c,t.z)},
hY:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.b(P.b9(a))}throw H.b(H.ip())},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghX:function(a){if(a.length>0)return a[0]
throw H.b(H.ip())},
gaD:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.ip())},
dz:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.b(P.b9(a))}return!1},
b6:function(a,b){if(!!a.immutable$list)H.q(P.B("sort"))
H.oZ(a,b==null?J.pX():b)},
ez:function(a){return this.b6(a,null)},
F:function(a,b){var s
for(s=0;s<a.length;++s)if(J.J(a[s],b))return!0
return!1},
i:function(a){return P.lo(a,"[","]")},
gP:function(a){return new J.a8(a,a.length)},
gS:function(a){return H.cX(a)},
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
J.iq.prototype={}
J.a8.prototype={
gB:function(a){return this.d},
v:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bC.prototype={
b0:function(a,b){var s
if(typeof b!="number")throw H.b(H.az(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbz(b)
if(this.gbz(a)===s)return 0
if(this.gbz(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbz:function(a){return a===0?1/a<0:a<0},
iz:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.B(""+a+".toInt()"))},
cu:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.B(""+a+".floor()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.B(""+a+".round()"))},
en:function(a,b){var s
if(b>20)throw H.b(P.a5(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbz(a))return"-"+s
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
bo:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eF:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dl(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.dl(a,b)},
dl:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.B("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aW:function(a,b){var s
if(a>0)s=this.dk(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hn:function(a,b){if(b<0)throw H.b(H.az(b))
return this.dk(a,b)},
dk:function(a,b){return b>31?0:a>>>b},
$iZ:1,
$iR:1}
J.cF.prototype={$ik:1}
J.cE.prototype={}
J.aS.prototype={
W:function(a,b){if(b<0)throw H.b(H.ck(a,b))
if(b>=a.length)H.q(H.ck(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.b(H.ck(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!="string")throw H.b(P.m7(b,null,null))
return a+b},
b2:function(a,b,c,d){var s,r,q=P.bg(b,c,a.length)
if(!H.bJ(q))H.q(H.az(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
ae:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a5(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
ab:function(a,b){return this.ae(a,b,0)},
u:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.eL(b,null))
if(b>c)throw H.b(P.eL(b,null))
if(c>a.length)throw H.b(P.eL(c,null))
return a.substring(b,c)},
ai:function(a,b){return this.u(a,b,null)},
iC:function(a){return a.toLowerCase()},
t:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.Q)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aq:function(a,b){var s=b-a.length
if(s<=0)return a
return this.t(" ",s)+a},
bx:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a5(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
e3:function(a,b){return this.bx(a,b,0)},
hG:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a5(c,0,s,null,null))
return H.nG(a,b,c)},
F:function(a,b){return this.hG(a,b,0)},
b0:function(a,b){var s
if(typeof b!="string")throw H.b(H.az(b))
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
$iy:1}
H.eh.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.p.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.W(this.a,b)}}
H.l.prototype={}
H.cL.prototype={
gP:function(a){return new H.bd(this,this.gm(this))},
bI:function(a,b){return this.eC(0,b)}}
H.bd.prototype={
gB:function(a){var s=this.d
return s},
v:function(){var s,r=this,q=r.a,p=J.b3(q),o=p.gm(q)
if(r.b!=o)throw H.b(P.b9(q))
s=r.c
if(typeof o!=="number")return H.v(o)
if(s>=o){r.d=null
return!1}r.d=p.J(q,s);++r.c
return!0}}
H.aU.prototype={
gP:function(a){return new H.el(J.b5(this.a),this.b)},
gm:function(a){return J.aN(this.a)},
J:function(a,b){return this.b.$1(J.hL(this.a,b))}}
H.cx.prototype={$il:1}
H.el.prototype={
v:function(){var s=this,r=s.b
if(r.v()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){var s=this.a
return s}}
H.cP.prototype={
gm:function(a){return J.aN(this.a)},
J:function(a,b){return this.b.$1(J.hL(this.a,b))}}
H.b1.prototype={
gP:function(a){return new H.fA(J.b5(this.a),this.b)}}
H.fA.prototype={
v:function(){var s,r
for(s=this.a,r=this.b;s.v();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.cB.prototype={}
H.fr.prototype={
l:function(a,b,c){throw H.b(P.B("Cannot modify an unmodifiable list"))}}
H.c9.prototype={}
H.cr.prototype={
i:function(a){return P.lw(this)},
l:function(a,b,c){H.on()},
$iI:1}
H.cs.prototype={
gm:function(a){return this.a},
cf:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cf(0,b))return null
return this.d7(b)},
d7:function(a){return this.b[a]},
I:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.d7(q))}}}
H.jt.prototype={
ap:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.ex.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.ef.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.fq.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iW.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hg.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bw.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nJ(r==null?"unknown":r)+"'"},
$iaC:1,
giF:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f6.prototype={}
H.f_.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nJ(s)+"'"}}
H.bP.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bP))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gS:function(a){var s,r=this.c
if(r==null)s=H.cX(this.a)
else s=typeof r!=="object"?J.ah(r):H.cX(r)
return(s^H.cX(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eK(s))+"'")}}
H.eP.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.D.prototype={
gm:function(a){return this.a},
gby:function(a){return this.a===0},
ga3:function(a){return new H.cI(this,H.dD(this).K("cI<1>"))},
giE:function(a){var s=this,r=H.dD(s)
return H.oE(s.ga3(s),new H.ir(s),r.c,r.Q[1])},
cf:function(a,b){var s=this.b
if(s==null)return!1
return this.f2(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.br(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.br(p,b)
q=r==null?n:r.b
return q}else return o.i2(b)},
i2:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.d8(p,q.e5(a))
r=q.e6(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.d1(s==null?q.b=q.c_():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.d1(r==null?q.c=q.c_():r,b,c)}else q.i3(b,c)},
i3:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.c_()
s=p.e5(a)
r=p.d8(o,s)
if(r==null)p.c5(o,s,[p.c0(a,b)])
else{q=p.e6(r,a)
if(q>=0)r[q].b=b
else r.push(p.c0(a,b))}},
I:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.b9(s))
r=r.c}},
d1:function(a,b,c){var s=this.br(a,b)
if(s==null)this.c5(a,b,this.c0(b,c))
else s.b=c},
fd:function(){this.r=this.r+1&67108863},
c0:function(a,b){var s,r=this,q=new H.iu(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.fd()
return q},
e5:function(a){return J.ah(a)&0x3ffffff},
e6:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1},
i:function(a){return P.lw(this)},
br:function(a,b){return a[b]},
d8:function(a,b){return a[b]},
c5:function(a,b,c){a[b]=c},
f6:function(a,b){delete a[b]},
f2:function(a,b){return this.br(a,b)!=null},
c_:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c5(r,s,r)
this.f6(r,s)
return r}}
H.ir.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.dD(this.a).K("2(1)")}}
H.iu.prototype={}
H.cI.prototype={
gm:function(a){return this.a.a},
gP:function(a){var s=this.a,r=new H.ek(s,s.r)
r.c=s.e
return r}}
H.ek.prototype={
gB:function(a){return this.d},
v:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.b9(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kM.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.kN.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kO.prototype={
$1:function(a){return this.a(a)}}
H.ee.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imF:1}
H.cS.prototype={$icS:1}
H.X.prototype={$iX:1}
H.c0.prototype={
gm:function(a){return a.length},
$iA:1}
H.bE.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]},
l:function(a,b,c){H.b2(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.cT.prototype={
l:function(a,b,c){H.b2(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.es.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.et.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.eu.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.ev.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.ew.prototype={
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.cU.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b2(b,a,a.length)
return a[b]}}
H.c1.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b2(b,a,a.length)
return a[b]},
$ic1:1,
$ibi:1}
H.di.prototype={}
H.dj.prototype={}
H.dk.prototype={}
H.dl.prototype={}
H.au.prototype={
K:function(a){return H.hu(v.typeUniverse,this,a)},
b9:function(a){return H.pw(v.typeUniverse,this,a)}}
H.fT.prototype={}
H.fO.prototype={
i:function(a){return this.a}}
H.dv.prototype={}
P.k3.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
P.k2.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.k4.prototype={
$0:function(){this.a.$0()}}
P.k5.prototype={
$0:function(){this.a.$0()}}
P.du.prototype={
eR:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cj(new P.km(this,b),0),a)
else throw H.b(P.B("`setTimeout()` not found."))},
eS:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cj(new P.kl(this,a,Date.now(),b),0),a)
else throw H.b(P.B("Periodic timer."))},
$id1:1}
P.km.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.kl.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eF(s,o)}q.c=p
r.d.$1(q)}}
P.ce.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bH.prototype={
gB:function(a){var s=this.c
if(s==null)return this.b
return s.gB(s)},
v:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.v())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.ce){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.b5(s)
if(o instanceof P.bH){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dr.prototype={
gP:function(a){return new P.bH(this.a())}}
P.fB.prototype={}
P.d_.prototype={}
P.f1.prototype={}
P.d1.prototype={}
P.kt.prototype={}
P.kC.prototype={
$0:function(){var s=H.b(this.a)
s.stack=J.a7(this.b)
throw s}}
P.ka.prototype={
iv:function(a){var s,r,q,p=null
try{if(C.f===$.aK){a.$0()
return}P.qs(p,p,this,a)}catch(q){s=H.ag(q)
r=H.lX(q)
P.nn(p,p,this,s,r)}},
iw:function(a,b){var s,r,q,p=null
try{if(C.f===$.aK){a.$1(b)
return}P.qt(p,p,this,a,b)}catch(q){s=H.ag(q)
r=H.lX(q)
P.nn(p,p,this,s,r)}},
ix:function(a,b){return this.iw(a,b,t.z)},
hD:function(a){return new P.kb(this,a)},
dE:function(a,b){return new P.kc(this,a,b)}}
P.kb.prototype={
$0:function(){return this.a.iv(this.b)}}
P.kc.prototype={
$1:function(a){return this.a.ix(this.b,a)},
$S:function(){return this.c.K("~(0)")}}
P.de.prototype={
gP:function(a){var s=new P.df(this,this.r)
s.c=this.e
return s},
gm:function(a){return this.a},
F:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.f1(b)
return r}},
f1:function(a){var s=this.d
if(s==null)return!1
return this.bR(s[this.bN(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.d2(s==null?q.b=P.lF():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.d2(r==null?q.c=P.lF():r,b)}else return q.eV(0,b)},
eV:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lF()
s=q.bN(b)
r=p[s]
if(r==null)p[s]=[q.bM(b)]
else{if(q.bR(r,b)>=0)return!1
r.push(q.bM(b))}return!0},
L:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.h9(this.c,b)
else return this.h8(0,b)},
h8:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bN(b)
r=n[s]
q=o.bR(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dn(p)
return!0},
d2:function(a,b){if(a[b]!=null)return!1
a[b]=this.bM(b)
return!0},
h9:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dn(s)
delete a[b]
return!0},
d3:function(){this.r=1073741823&this.r+1},
bM:function(a){var s,r=this,q=new P.k9(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.d3()
return q},
dn:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.d3()},
bN:function(a){return J.ah(a)&1073741823},
bR:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1}}
P.k9.prototype={}
P.df.prototype={
gB:function(a){return this.d},
v:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.b9(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cD.prototype={}
P.iv.prototype={
$2:function(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cK.prototype={$il:1,$ih:1,$in:1}
P.i.prototype={
gP:function(a){return new H.bd(a,this.gm(a))},
J:function(a,b){return this.h(a,b)},
gby:function(a){return this.gm(a)===0},
iB:function(a,b){var s,r,q,p,o=this
if(o.gby(a)){s=J.lp(0,H.bK(a).K("i.E"))
return s}r=o.h(a,0)
q=P.iw(o.gm(a),r,!0,H.bK(a).K("i.E"))
p=1
while(!0){s=o.gm(a)
if(typeof s!=="number")return H.v(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s;++p}return q},
iA:function(a){return this.iB(a,!0)},
hV:function(a,b,c,d){var s
P.bg(b,c,this.gm(a))
for(s=b;s<c;++s)this.l(a,s,d)},
i:function(a){return P.lo(a,"[","]")}}
P.cN.prototype={}
P.iz.prototype={
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
for(s=J.b5(this.ga3(a));s.v();){r=s.gB(s)
b.$2(r,this.h(a,r))}},
gm:function(a){return J.aN(this.ga3(a))},
i:function(a){return P.lw(a)},
$iI:1}
P.hv.prototype={
l:function(a,b,c){throw H.b(P.B("Cannot modify unmodifiable map"))}}
P.cO.prototype={
h:function(a,b){return J.cn(this.a,b)},
l:function(a,b,c){J.lb(this.a,b,c)},
I:function(a,b){J.ld(this.a,b)},
gm:function(a){return J.aN(this.a)},
i:function(a){return J.a7(this.a)},
$iI:1}
P.ca.prototype={}
P.dm.prototype={
ac:function(a,b){var s
for(s=J.b5(b);s.v();)this.n(0,s.gB(s))},
i:function(a){return P.lo(this,"{","}")},
J:function(a,b){var s,r,q,p="index"
P.oe(b,p)
P.mE(b,p)
for(s=P.pg(this,this.r),r=0;s.v();){q=s.d
if(b===r)return q;++r}throw H.b(P.P(b,this,p,null,r))},
$il:1,
$ih:1}
P.dg.prototype={}
P.dz.prototype={}
P.jM.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ag(r)}return null}}
P.jN.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ag(r)}return null}}
P.hS.prototype={
i7:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bg(a2,a3,a1.length)
if(a3==null)throw H.b(P.mD("Invalid range"))
s=$.o0()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.E(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.kL(C.a.E(a1,l))
h=H.kL(C.a.E(a1,l+1))
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
d=e.a+=C.a.u(a1,q,r)
e.a=d+H.at(k)
q=l
continue}}throw H.b(P.a3("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.u(a1,q,a3)
d=e.length
if(o>=0)P.m8(a1,n,a3,o,m,d)
else{c=C.c.bo(d-1,4)+1
if(c===1)throw H.b(P.a3(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.b2(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.m8(a1,n,a3,o,m,b)
else{c=C.c.bo(b,4)
if(c===1)throw H.b(P.a3(a,a1,a3))
if(c>1)a1=C.a.b2(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hT.prototype={}
P.dX.prototype={}
P.dZ.prototype={}
P.i8.prototype={}
P.im.prototype={
i:function(a){return this.a}}
P.il.prototype={
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
default:n=m}if(n!=null){if(o==null)o=new P.T("")
if(p>b)o.a+=C.a.u(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.oc(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.jK.prototype={
ghU:function(){return C.R}}
P.jO.prototype={
cg:function(a){var s,r,q,p=P.bg(0,null,a.length)
if(p==null)throw H.b(P.mD("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.kr(r)
if(q.f8(a,0,p)!==p){J.o7(a,p-1)
q.ca()}return new Uint8Array(r.subarray(0,H.pP(0,q.b,r.length)))}}
P.kr.prototype={
ca:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
hv:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.ca()
return!1}},
f8:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.W(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.E(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hv(p,C.a.E(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.ca()}else if(p<=2047){o=l.b
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
P.jL.prototype={
cg:function(a){var s=this.a,r=P.p4(s,a,0,null)
if(r!=null)return r
return new P.kq(s).hH(a,0,null,!0)}}
P.kq.prototype={
hH:function(a,b,c,d){var s,r,q,p,o=this,n=P.bg(b,c,J.aN(a))
if(b===n)return""
s=P.pL(a,b,n)
if(typeof n!=="number")return n.a_()
n-=b
r=o.bO(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.pM(q)
o.b=0
throw H.b(P.a3(p,a,b+o.c))}return r},
bO:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.a_()
if(c-b>1000){s=C.c.a8(b+c,2)
r=q.bO(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bO(a,s,c,d)}return q.hM(a,b,c,d)},
hM:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.T(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.E("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.E(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.at(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.at(j)
break
case 65:g.a+=H.at(j);--f
break
default:p=g.a+=H.at(j)
g.a=p+H.at(j)
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
g.a+=H.at(a[l])}else g.a+=P.f3(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.at(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.aA.prototype={}
P.ak.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ak&&this.a===b.a&&!0},
b0:function(a,b){return C.c.b0(this.a,b.a)},
gS:function(a){var s=this.a
return(s^C.c.aW(s,30))&1073741823},
i:function(a){var s=this,r=P.oo(H.oP(s)),q=P.e1(H.oN(s)),p=P.e1(H.oJ(s)),o=P.e1(H.oK(s)),n=P.e1(H.oM(s)),m=P.e1(H.oO(s)),l=P.op(H.oL(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.Z.prototype={}
P.by.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.by&&this.a===b.a},
gS:function(a){return C.c.gS(this.a)},
b0:function(a,b){return C.c.b0(this.a,b.a)},
i:function(a){var s,r,q,p=new P.i5(),o=this.a
if(o<0)return"-"+new P.by(0-o).i(0)
s=p.$1(C.c.a8(o,6e7)%60)
r=p.$1(C.c.a8(o,1e6)%60)
q=new P.i4().$1(o%1e6)
return""+C.c.a8(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.i4.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.i5.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.L.prototype={}
P.dP.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.ib(s)
return"Assertion failed"}}
P.ey.prototype={
i:function(a){return"Throw of null."}}
P.ai.prototype={
gbQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbP:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbQ()+o+m
if(!q.a)return l
s=q.gbP()
r=P.ib(q.b)
return l+s+": "+r}}
P.c4.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.eb.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var s,r=this.b
if(typeof r!=="number")return r.ah()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gm:function(a){return this.f}}
P.fs.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fp.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c7.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dY.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ib(s)+"."}}
P.eB.prototype={
i:function(a){return"Out of Memory"},
$iL:1}
P.cZ.prototype={
i:function(a){return"Stack Overflow"},
$iL:1}
P.e_.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fQ.prototype={
i:function(a){return"Exception: "+this.a}}
P.ii.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.u(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.E(d,o)
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
return f+j+h+i+"\n"+C.a.t(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.aC.prototype={}
P.k.prototype={}
P.h.prototype={
bI:function(a,b){return new H.b1(this,b,H.dD(this).K("b1<h.E>"))},
gm:function(a){var s,r=this.gP(this)
for(s=0;r.v();)++s
return s},
gaP:function(a){var s,r=this.gP(this)
if(!r.v())throw H.b(H.ip())
s=r.gB(r)
if(r.v())throw H.b(H.ou())
return s},
J:function(a,b){var s,r,q
P.mE(b,"index")
for(s=this.gP(this),r=0;s.v();){q=s.gB(s)
if(b===r)return q;++r}throw H.b(P.P(b,this,"index",null,r))},
i:function(a){return P.ot(this,"(",")")}}
P.ec.prototype={}
P.n.prototype={$il:1,$ih:1}
P.I.prototype={}
P.ar.prototype={
gS:function(a){return P.N.prototype.gS.call(C.j,this)},
i:function(a){return"null"}}
P.R.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
q:function(a,b){return this===b},
gS:function(a){return H.cX(this)},
i:function(a){return"Instance of '"+H.f(H.eK(this))+"'"},
toString:function(){return this.i(this)}}
P.y.prototype={}
P.T.prototype={
gm:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jI.prototype={
$2:function(a,b){var s,r,q,p=J.dI(b).e3(b,"=")
if(p===-1){if(b!=="")J.lb(a,P.lO(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.u(b,0,p)
r=C.a.ai(b,p+1)
q=this.a
J.lb(a,P.lO(s,0,s.length,q,!0),P.lO(r,0,r.length,q,!0))}return a}}
P.jF.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv4 address, "+a,this.a,b))}}
P.jG.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jH.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kP(C.a.u(this.b,a,b),16)
if(typeof s!=="number")return s.ah()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bI.prototype={
gc9:function(){var s,r,q,p=this,o=p.x
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
else o=H.q(H.lt("Field '_text' has been assigned during initialization."))}return o},
gS:function(a){var s=this,r=s.z
if(r==null){r=C.a.gS(s.gc9())
if(s.z==null)s.z=r
else r=H.q(H.lt("Field 'hashCode' has been assigned during initialization."))}return r},
gcJ:function(){var s=this,r=s.Q
if(r==null){r=new P.ca(P.mT(s.gbl(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.q(H.lt("Field 'queryParameters' has been assigned during initialization."))}return r},
gep:function(){return this.b},
gcw:function(a){var s=this.c
if(s==null)return""
if(C.a.ab(s,"["))return C.a.u(s,1,s.length-1)
return s},
gbC:function(a){var s=this.d
return s==null?P.nd(this.a):s},
gbl:function(a){var s=this.f
return s==null?"":s},
gcv:function(){var s=this.r
return s==null?"":s},
eh:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.ab(s,"/"))s="/"+s
q=s
p=P.lM(null,0,0,b)
return new P.bI(n,l,j,k,q,p,o.r)},
ge_:function(){return this.c!=null},
ge2:function(){return this.f!=null},
ge0:function(){return this.r!=null},
i:function(a){return this.gc9()},
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbJ()&&s.c!=null===b.ge_()&&s.b===b.gep()&&s.gcw(s)===b.gcw(b)&&s.gbC(s)===b.gbC(b)&&s.e===b.gee(b)&&s.f!=null===b.ge2()&&s.gbl(s)===b.gbl(b)&&s.r!=null===b.ge0()&&s.gcv()===b.gcv()},
$ift:1,
gbJ:function(){return this.a},
gee:function(a){return this.e}}
P.ko.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.kp(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.kp(C.h,b,C.e,!0))}}}
P.kn.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.b5(b),r=this.a;s.v();)r.$2(a,s.gB(s))}}
P.jE.prototype={
geo:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bx(s,"?",m)
q=s.length
if(r>=0){p=P.dA(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.fH("data","",n,n,P.dA(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kx.prototype={
$1:function(a){return new Uint8Array(96)}}
P.kw.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
J.o8(s,0,96,b)
return s},
$S:19}
P.ky.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.E(b,q)^96
if(p>=r)return H.d(a,p)
a[p]=c}}}
P.kz.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.E(b,0),r=C.a.E(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.d(a,p)
a[p]=c}}}
P.ha.prototype={
ge_:function(){return this.c>0},
ge1:function(){return this.c>0&&this.d+1<this.e},
ge2:function(){return this.f<this.r},
ge0:function(){return this.r<this.a.length},
gd9:function(){return this.b===4&&C.a.ab(this.a,"http")},
gda:function(){return this.b===5&&C.a.ab(this.a,"https")},
gbJ:function(){var s=this.x
return s==null?this.x=this.f0():s},
f0:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gd9())return"http"
if(s.gda())return"https"
if(r===4&&C.a.ab(s.a,"file"))return"file"
if(r===7&&C.a.ab(s.a,"package"))return"package"
return C.a.u(s.a,0,r)},
gep:function(){var s=this.c,r=this.b+3
return s>r?C.a.u(this.a,r,s-1):""},
gcw:function(a){var s=this.c
return s>0?C.a.u(this.a,s,this.d):""},
gbC:function(a){var s=this
if(s.ge1())return P.kP(C.a.u(s.a,s.d+1,s.e),null)
if(s.gd9())return 80
if(s.gda())return 443
return 0},
gee:function(a){return C.a.u(this.a,this.e,this.f)},
gbl:function(a){var s=this.f,r=this.r
return s<r?C.a.u(this.a,s+1,r):""},
gcv:function(){var s=this.r,r=this.a
return s<r.length?C.a.ai(r,s+1):""},
gcJ:function(){var s=this
if(s.f>=s.r)return C.a0
return new P.ca(P.mT(s.gbl(s)),t.U)},
eh:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbJ(),k=l==="file",j=n.c,i=j>0?C.a.u(n.a,n.b+3,j):"",h=n.ge1()?n.gbC(n):m
j=n.c
if(j>0)s=C.a.u(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.u(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.ab(r,"/"))r="/"+r
p=P.lM(m,0,0,b)
q=n.r
o=q<j.length?C.a.ai(j,q+1):m
return new P.bI(l,i,s,h,r,p,o)},
gS:function(a){var s=this.y
return s==null?this.y=C.a.gS(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ift:1}
P.fH.prototype={}
W.r.prototype={}
W.hM.prototype={
gm:function(a){return a.length}}
W.dN.prototype={
i:function(a){return String(a)}}
W.dO.prototype={
i:function(a){return String(a)}}
W.bO.prototype={$ibO:1}
W.bt.prototype={$ibt:1}
W.bu.prototype={$ibu:1}
W.bv.prototype={
cR:function(a,b,c){if(c!=null)return a.getContext(b,P.qH(c))
return a.getContext(b)},
es:function(a,b){return this.cR(a,b,null)},
$ibv:1}
W.aB.prototype={
gm:function(a){return a.length}}
W.hY.prototype={
gm:function(a){return a.length}}
W.K.prototype={$iK:1}
W.cu.prototype={
gm:function(a){return a.length}}
W.hZ.prototype={}
W.ap.prototype={}
W.aP.prototype={}
W.i_.prototype={
gm:function(a){return a.length}}
W.i0.prototype={
gm:function(a){return a.length}}
W.i1.prototype={
gm:function(a){return a.length}}
W.ba.prototype={$iba:1}
W.i2.prototype={
i:function(a){return String(a)}}
W.cv.prototype={
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
W.cw.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gay(a))+" x "+H.f(this.gat(a))},
q:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aL(b)
s=a.left==s.gbA(b)&&a.top==s.gbF(b)&&this.gay(a)==s.gay(b)&&this.gat(a)==s.gat(b)}else s=!1
return s},
gS:function(a){return W.n4(J.ah(a.left),J.ah(a.top),J.ah(this.gay(a)),J.ah(this.gat(a)))},
gdF:function(a){return a.bottom},
gat:function(a){return a.height},
gbA:function(a){return a.left},
gcN:function(a){return a.right},
gbF:function(a){return a.top},
gay:function(a){return a.width},
$iaa:1}
W.e3.prototype={
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
W.i3.prototype={
gm:function(a){return a.length}}
W.fE.prototype={
gby:function(a){return this.a.firstElementChild==null},
gm:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var s=this.iA(this)
return new J.a8(s,s.length)}}
W.F.prototype={
ghC:function(a){return new W.fM(a)},
gdH:function(a){return new W.fE(a,a.children)},
gdI:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.ah()
if(q<0)q=-q*0
if(typeof p!=="number")return p.ah()
if(p<0)p=-p*0
return new P.aa(s,r,q,p,t.I)},
i:function(a){return a.localName},
ao:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.mg
if(s==null){s=H.c([],t.o)
r=new W.cW(s)
s.push(W.n2(null))
s.push(W.n8())
$.mg=r
d=r}else d=s
s=$.mf
if(s==null){s=new W.hw(d)
$.mf=s
c=s}else{s.a=d
c=s}}if($.bb==null){s=document
r=s.implementation.createHTMLDocument("")
$.bb=r
$.ll=r.createRange()
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
$.bb.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.F(C.Z,a.tagName)){$.ll.selectNodeContents(q)
s=$.ll
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.bb.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.bb.body)J.m5(q)
c.cS(p)
document.adoptNode(p)
return p},
hK:function(a,b,c){return this.ao(a,b,c,null)},
ev:function(a,b){a.textContent=null
a.appendChild(this.ao(a,b,null,null))},
gek:function(a){return a.tagName},
$iF:1}
W.i6.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.e.prototype={
hx:function(a,b,c,d){if(c!=null)this.eW(a,b,c,!1)},
eW:function(a,b,c,d){return a.addEventListener(b,H.cj(c,1),!1)},
$ie:1}
W.al.prototype={$ial:1}
W.bS.prototype={
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
$ibS:1}
W.e5.prototype={
gm:function(a){return a.length}}
W.e7.prototype={
gm:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.ik.prototype={
gm:function(a){return a.length}}
W.bA.prototype={
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
W.bB.prototype={
gdJ:function(a){return a.data},
$ibB:1}
W.bU.prototype={$ibU:1}
W.bW.prototype={$ibW:1}
W.bD.prototype={$ibD:1}
W.ix.prototype={
i:function(a){return String(a)}}
W.iP.prototype={
gm:function(a){return a.length}}
W.bY.prototype={$ibY:1}
W.ep.prototype={
h:function(a,b){return P.bo(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga3:function(a){var s=H.c([],t.s)
this.I(a,new W.iQ(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iI:1}
W.iQ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eq.prototype={
h:function(a,b){return P.bo(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga3:function(a){var s=H.c([],t.s)
this.I(a,new W.iR(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iI:1}
W.iR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aF.prototype={$iaF:1}
W.er.prototype={
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
W.am.prototype={$iam:1}
W.a1.prototype={
gaP:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.b(P.lz("No elements"))
if(r>1)throw H.b(P.lz("More than one element"))
s=s.firstChild
s.toString
return s},
ac:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b])},
gP:function(a){var s=this.a.childNodes
return new W.cC(s,s.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.x.prototype={
iq:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
it:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.o5(s,b,a)}catch(q){H.ag(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eB(a):s},
hb:function(a,b,c){return a.replaceChild(b,c)},
$ix:1}
W.cV.prototype={
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
W.aG.prototype={
gm:function(a){return a.length},
$iaG:1}
W.eF.prototype={
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
W.eO.prototype={
h:function(a,b){return P.bo(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga3:function(a){var s=H.c([],t.s)
this.I(a,new W.j4(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iI:1}
W.j4.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eQ.prototype={
gm:function(a){return a.length}}
W.av.prototype={$iav:1}
W.eU.prototype={
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
W.aH.prototype={$iaH:1}
W.eV.prototype={
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
W.f0.prototype={
h:function(a,b){return a.getItem(H.lQ(b))},
l:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga3:function(a){var s=H.c([],t.s)
this.I(a,new W.jg(s))
return s},
gm:function(a){return a.length},
$iI:1}
W.jg.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.bh.prototype={$ibh:1}
W.d0.prototype={
ao:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
s=W.oq("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.a1(r).ac(0,new W.a1(s))
return r}}
W.f4.prototype={
ao:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.E.ao(s.createElement("table"),b,c,d)
s.toString
s=new W.a1(s)
q=s.gaP(s)
q.toString
s=new W.a1(q)
p=s.gaP(s)
r.toString
p.toString
new W.a1(r).ac(0,new W.a1(p))
return r}}
W.f5.prototype={
ao:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bK(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.E.ao(s.createElement("table"),b,c,d)
s.toString
s=new W.a1(s)
q=s.gaP(s)
r.toString
q.toString
new W.a1(r).ac(0,new W.a1(q))
return r}}
W.c8.prototype={$ic8:1}
W.ax.prototype={$iax:1}
W.ad.prototype={$iad:1}
W.f8.prototype={
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
W.f9.prototype={
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
W.jo.prototype={
gm:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.bF.prototype={$ibF:1}
W.fe.prototype={
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
W.js.prototype={
gm:function(a){return a.length}}
W.b0.prototype={}
W.jJ.prototype={
i:function(a){return String(a)}}
W.fx.prototype={
gm:function(a){return a.length}}
W.bk.prototype={
ghO:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.B("deltaY is not supported"))},
ghN:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.B("deltaX is not supported"))},
$ibk:1}
W.cb.prototype={
hc:function(a,b){return a.requestAnimationFrame(H.cj(b,1))},
f7:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cc.prototype={$icc:1}
W.fF.prototype={
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
W.dc.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aL(b)
s=a.left==s.gbA(b)&&a.top==s.gbF(b)&&a.width==s.gay(b)&&a.height==s.gat(b)}else s=!1
return s},
gS:function(a){return W.n4(J.ah(a.left),J.ah(a.top),J.ah(a.width),J.ah(a.height))},
gat:function(a){return a.height},
gay:function(a){return a.width}}
W.fU.prototype={
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
W.hd.prototype={
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
W.hk.prototype={
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
W.fC.prototype={
I:function(a,b){var s,r,q,p,o
for(s=this.ga3(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
ga3:function(a){var s,r,q,p,o=this.a.attributes,n=H.c([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.d(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fM.prototype={
h:function(a,b){return this.a.getAttribute(H.lQ(b))},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.ga3(this).length}}
W.ln.prototype={}
W.fP.prototype={
hu:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.o6(s,this.c,r,!1)}}}
W.k6.prototype={
$1:function(a){return this.a.$1(a)}}
W.lE.prototype={}
W.cd.prototype={
eK:function(a){var s
if($.dd.gby($.dd)){for(s=0;s<262;++s)$.dd.l(0,C.Y[s],W.qP())
for(s=0;s<12;++s)$.dd.l(0,C.o[s],W.qQ())}},
aX:function(a){return $.o1().F(0,W.cy(a))},
aB:function(a,b,c){var s=$.dd.h(0,H.f(W.cy(a))+"::"+b)
if(s==null)s=$.dd.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$ian:1}
W.M.prototype={
gP:function(a){return new W.cC(a,this.gm(a))}}
W.cW.prototype={
aX:function(a){return C.b.dz(this.a,new W.iU(a))},
aB:function(a,b,c){return C.b.dz(this.a,new W.iT(a,b,c))},
$ian:1}
W.iU.prototype={
$1:function(a){return a.aX(this.a)}}
W.iT.prototype={
$1:function(a){return a.aB(this.a,this.b,this.c)}}
W.dn.prototype={
eQ:function(a,b,c,d){var s,r,q
this.a.ac(0,c)
s=b.bI(0,new W.ke())
r=b.bI(0,new W.kf())
this.b.ac(0,s)
q=this.c
q.ac(0,C.w)
q.ac(0,r)},
aX:function(a){return this.a.F(0,W.cy(a))},
aB:function(a,b,c){var s=this,r=W.cy(a),q=s.c
if(q.F(0,H.f(r)+"::"+b))return s.d.hA(c)
else if(q.F(0,"*::"+b))return s.d.hA(c)
else{q=s.b
if(q.F(0,H.f(r)+"::"+b))return!0
else if(q.F(0,"*::"+b))return!0
else if(q.F(0,H.f(r)+"::*"))return!0
else if(q.F(0,"*::*"))return!0}return!1},
$ian:1}
W.ke.prototype={
$1:function(a){return!C.b.F(C.o,a)}}
W.kf.prototype={
$1:function(a){return C.b.F(C.o,a)}}
W.hm.prototype={
aB:function(a,b,c){if(this.eE(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.F(0,b)
return!1}}
W.kk.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.hl.prototype={
aX:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cy(a)==="foreignObject")return!1
if(s)return!0
return!1},
aB:function(a,b,c){if(b==="is"||C.a.ab(b,"on"))return!1
return this.aX(a)},
$ian:1}
W.cC.prototype={
v:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cn(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return this.d}}
W.an.prototype={}
W.kd.prototype={}
W.hw.prototype={
cS:function(a){var s=this,r=new W.ks(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
bc:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.m5(a)
else b.removeChild(a)},
hh:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.o9(a)
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
this.hg(a,b,n,r,q,m,l)}catch(p){if(H.ag(p) instanceof P.ai)throw p
else{this.bc(a,b)
window
o="Removing corrupted element "+H.f(r)
if(typeof console!="undefined")window.console.warn(o)}}},
hg:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.bc(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aX(a)){m.bc(a,b)
window
s="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.aB(a,"is",g)){m.bc(a,b)
window
s="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.ga3(f)
r=H.c(s.slice(0),H.lP(s).K("w<1>"))
for(q=f.ga3(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.d(r,q)
p=r[q]
o=m.a
n=J.od(p)
H.lQ(p)
if(!o.aB(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.cS(a.content)}}
W.ks.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.hh(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.bc(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.lz("Corrupt HTML")
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
W.fG.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fK.prototype={}
W.fL.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h6.prototype={}
W.h7.prototype={}
W.h9.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.hb.prototype={}
W.hc.prototype={}
W.hh.prototype={}
W.hn.prototype={}
W.ho.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.hp.prototype={}
W.hq.prototype={}
W.hx.prototype={}
W.hy.prototype={}
W.hz.prototype={}
W.hA.prototype={}
W.hB.prototype={}
W.hC.prototype={}
W.hD.prototype={}
W.hE.prototype={}
W.hF.prototype={}
W.hG.prototype={}
P.kg.prototype={
ct:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bH:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.lS(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ak)return new Date(a.a)
if(t.fv.b(a))throw H.b(P.jD("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.G.b(a))return a
if(t.bX.b(a))return a
if(t.v.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.ct(a)
r=o.b
q=r.length
if(s>=q)return H.d(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.ld(a,new P.ki(n,o))
return n.a}if(t.aH.b(a)){s=o.ct(a)
n=o.b
if(s>=n.length)return H.d(n,s)
p=n[s]
if(p!=null)return p
return o.hJ(a,s)}if(t.eH.b(a)){s=o.ct(a)
r=o.b
q=r.length
if(s>=q)return H.d(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.d(r,s)
r[s]=p
o.i0(a,new P.kj(n,o))
return n.b}throw H.b(P.jD("structured clone of other type"))},
hJ:function(a,b){var s,r=J.b3(a),q=r.gm(a),p=new Array(q),o=this.b
if(b>=o.length)return H.d(o,b)
o[b]=p
if(typeof q!=="number")return H.v(q)
s=0
for(;s<q;++s){o=this.bH(r.h(a,s))
if(s>=p.length)return H.d(p,s)
p[s]=o}return p}}
P.ki.prototype={
$2:function(a,b){this.a.a[a]=this.b.bH(b)},
$S:3}
P.kj.prototype={
$2:function(a,b){this.a.b[a]=this.b.bH(b)},
$S:3}
P.dw.prototype={$ibB:1,
gdJ:function(a){return this.a}}
P.kD.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.kh.prototype={
i0:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e6.prototype={
gbs:function(){var s=this.b,r=H.dD(s)
return new H.aU(new H.b1(s,new P.ig(),r.K("b1<i.E>")),new P.ih(),r.K("aU<i.E,F>"))},
l:function(a,b,c){var s=this.gbs()
J.ob(s.b.$1(J.hL(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.aN(this.gbs().a)},
h:function(a,b){var s=this.gbs()
return s.b.$1(J.hL(s.a,b))},
gP:function(a){var s=P.lv(this.gbs(),!1,t.h)
return new J.a8(s,s.length)}}
P.ig.prototype={
$1:function(a){return t.h.b(a)}}
P.ih.prototype={
$1:function(a){return t.h.a(a)}}
P.h8.prototype={
gcN:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
gdF:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
q:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.aL(b)
if(s==r.gbA(b)){q=n.b
if(q==r.gbF(b)){p=n.c
if(typeof s!=="number")return s.A()
if(typeof p!=="number")return H.v(p)
o=n.$ti.c
if(o.a(s+p)===r.gcN(b)){s=n.d
if(typeof q!=="number")return q.A()
if(typeof s!=="number")return H.v(s)
r=o.a(q+s)===r.gdF(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gS:function(a){var s,r=this,q=r.a,p=J.ah(q),o=r.b,n=J.ah(o),m=r.c
if(typeof q!=="number")return q.A()
if(typeof m!=="number")return H.v(m)
s=r.$ti.c
m=C.c.gS(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.A()
if(typeof q!=="number")return H.v(q)
q=C.c.gS(s.a(o+q))
return P.pf(P.k8(P.k8(P.k8(P.k8(0,p),n),m),q))}}
P.aa.prototype={
gbA:function(a){return this.a},
gbF:function(a){return this.b},
gay:function(a){return this.c},
gat:function(a){return this.d}}
P.aT.prototype={$iaT:1}
P.ei.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.aX.prototype={$iaX:1}
P.ez.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.iX.prototype={
gm:function(a){return a.length}}
P.c5.prototype={$ic5:1}
P.f2.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.m.prototype={
gdH:function(a){return new P.e6(a,new W.a1(a))},
ao:function(a,b,c,d){var s,r,q,p,o,n=H.c([],t.o)
n.push(W.n2(null))
n.push(W.n8())
n.push(new W.hl())
c=new W.hw(new W.cW(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.q.hK(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.a1(q)
o=n.gaP(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.aZ.prototype={$iaZ:1}
P.ff.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.fX.prototype={}
P.fY.prototype={}
P.h4.prototype={}
P.h5.prototype={}
P.hi.prototype={}
P.hj.prototype={}
P.hr.prototype={}
P.hs.prototype={}
P.bi.prototype={$il:1,$ih:1,$in:1}
P.hP.prototype={
gm:function(a){return a.length}}
P.dR.prototype={
h:function(a,b){return P.bo(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga3:function(a){var s=H.c([],t.s)
this.I(a,new P.hQ(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iI:1}
P.hQ.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dS.prototype={
gm:function(a){return a.length}}
P.b7.prototype={}
P.eA.prototype={
gm:function(a){return a.length}}
P.fD.prototype={}
P.eN.prototype={
el:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.bJ(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.v.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.qI(g))
return}if(t.fS.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.bN("Incorrect number or type of arguments"))},
iy:function(a,b,c,d,e,f,g){return this.el(a,b,c,d,e,f,g,null,null,null)}}
P.eY.prototype={
gm:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.b(P.P(b,a,null,null,null))
s=P.bo(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.he.prototype={}
P.hf.prototype={}
K.b6.prototype={
aK:function(a,b){return!0},
i:function(a){return"all"}}
K.e9.prototype={
aK:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aK(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.iA.prototype={}
K.ac.prototype={
aK:function(a,b){return!this.eA(0,b)},
i:function(a){return"!["+this.cV(0)+"]"}}
K.j_.prototype={
aK:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.at(this.a),r=H.at(this.b)
return s+".."+r}}
K.j5.prototype={
eI:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.u("May not create a Set with zero characters."))
s=new H.D(t.E)
for(r=new H.bd(a,a.gm(a));r.v();){q=r.d
s.l(0,q,!0)}p=P.lv(s.ga3(s),!0,t.e)
C.b.ez(p)
this.a=p},
aK:function(a,b){return C.b.F(this.a,b)},
i:function(a){return P.f3(this.a,0,null)}}
L.eZ.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.fg(this.a.k(0,b))
p.a=H.c([],t.B)
p.c=!1
this.c.push(p)
return p},
hW:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aK(0,a))return p}return null},
i:function(a){return this.b},
dm:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.F(0,l))m+=" (consume)"
for(l=n.d.c,l=l.ga3(l),l=l.gP(l);l.v();){r=l.gB(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.F(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.fc.prototype={
i:function(a){var s=H.m0(this.b,"\n","\\n"),r=H.m0(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fd.prototype={
aM:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.o)(c),++r){q=c[r]
this.c.l(0,q,b)}},
i:function(a){return this.b}}
L.jp.prototype={
k:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eZ(this,b)
s.c=H.c([],t.br)
this.a.l(0,b,s)}return s},
R:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.fd(a)
s.c=new H.D(t.dO)
this.b.l(0,a,s)}return s},
cO:function(a){return this.iD(a)},
iD:function(a){var s=this
return P.q4(function(){var r=a
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
else{if(!r.v()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hW(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.f3(a0,0,null)
throw H.b(P.u("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.q(P.B("removeRange"))
P.bg(0,k,a0.length)
a0.splice(0,k-0)
C.b.ac(a1,a0)
a0=H.c([],c)
b=H.c([],c)
d=s.d
q=!s.c.F(0,n.a)?7:8
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
if(d.d!=null){g=P.f3(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.fc(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.F(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.pd()
case 1:return P.pe(o)}}},t.eB)},
i:function(a){var s,r=new P.T(""),q=this.d
if(q!=null)r.a=q.dm()+"\n"
for(q=this.a,q=q.giE(q),q=q.gP(q);q.v();){s=q.gB(q)
if(s!=this.d)r.a+=s.dm()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.fg.prototype={
i:function(a){return this.b.b+": "+this.cV(0)}}
O.a9.prototype={
bq:function(a){this.a=H.c([],a.K("w<0*>"))
this.c=this.b=null},
cT:function(a,b,c){this.b=b
this.c=a},
b4:function(a,b){return this.cT(a,null,b)},
df:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
dc:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gm:function(a){return this.a.length},
gP:function(a){var s=this.a
return new J.a8(s,s.length)},
J:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.dD(q).K("w<a9.T*>")
if(q.df(H.c([b],p))){s=q.a
r=s.length
s.push(b)
q.dc(r,H.c([b],p))}},
ac:function(a,b){var s,r
if(this.df(b)){s=this.a
r=s.length
C.b.ac(s,b)
this.dc(r,b)}},
$ih:1}
O.cR.prototype={
gm:function(a){return this.a.length},
gp:function(){var s=this.b
return s==null?this.b=D.G():s},
aQ:function(){var s=this.b
if(s!=null)s.C(null)},
ga4:function(a){var s=this.a
if(s.length>0)return C.b.gaD(s)
else return V.bX()},
bE:function(a){var s=this.a
if(a==null)s.push(V.bX())
else s.push(a)
this.aQ()},
aL:function(){var s=this.a
if(s.length>0){s.pop()
this.aQ()}}}
E.hU.prototype={}
E.bz.prototype={
saa:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gp().L(0,q.geb())
s=q.c
if(s!=null)s.gp().n(0,q.geb())
r=new D.z("shape",p,q.c)
r.b=!0
q.bB(r)}},
aw:function(a,b){var s
for(s=this.y.a,s=new J.a8(s,s.length);s.v();)s.d.aw(0,b)},
ak:function(a){var s,r=this,q=a.dx
q.a.push(q.ga4(q))
q.aQ()
a.cI(r.f)
q=a.dy
s=(q&&C.b).gaD(q)
if(s!=null&&r.d!=null)s.eg(a,r)
for(q=r.y.a,q=new J.a8(q,q.length);q.v();)q.d.ak(a)
a.cH()
a.dx.aL()},
bB:function(a){var s=this.z
if(s!=null)s.C(a)},
a5:function(){return this.bB(null)},
ec:function(a){this.e=null
this.bB(a)},
ie:function(){return this.ec(null)},
ea:function(a){this.bB(a)},
ia:function(){return this.ea(null)},
i9:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ge9(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bR()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}this.a5()},
ic:function(a,b){var s,r
for(s=b.gP(b),r=this.ge9();s.v();)s.gB(s).gp().L(0,r)
this.a5()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bQ.prototype={
i:function(a){return this.b}}
E.c2.prototype={
i:function(a){return this.b}}
E.fN.prototype={}
E.j0.prototype={
eH:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ak(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cR()
r=t.h8
s.a=H.c([],r)
s.gp().n(0,new E.j1(q))
q.cy=s
s=new O.cR()
s.a=H.c([],r)
s.gp().n(0,new E.j2(q))
q.db=s
s=new O.cR()
s.a=H.c([],r)
s.gp().n(0,new E.j3(q))
q.dx=s
s=H.c([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.D(t.h9)},
gip:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga4(q)
s=r.db
s=r.z=q.t(0,s.ga4(s))
q=s}return q},
cI:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gaD(s):a)},
cH:function(){var s=this.dy
if(s.length>1)s.pop()},
dw:function(a){var s=a.b
if(s.length===0)throw H.b(P.u("May not cache a shader with no name."))
if(this.fr.cf(0,s))throw H.b(P.u('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.l(0,s,a)}}
E.j1.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.j2.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.j3.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.fb.prototype={
d0:function(a){this.ei()},
d_:function(){return this.d0(null)},
gi1:function(){var s,r=this,q=Date.now(),p=C.c.a8(P.me(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ak(q,!1)
return s/p},
dh:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.t()
if(typeof p!=="number")return H.v(p)
s=C.d.cu(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.t()
r=C.d.cu(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.mN(C.n,q.giu())}},
ei:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.G.f7(s)
r=W.np(new E.jn(this),t.H)
r.toString
C.G.hc(s,r)}},
is:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.dh()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ak(p,!1)
q.y=P.me(p-q.r.a).a*0.000001
p=q.cy
C.b.sm(p.a,0)
p.aQ()
p=q.db
C.b.sm(p.a,0)
p.aQ()
p=q.dx
C.b.sm(p.a,0)
p.aQ()
p=q.dy
p.toString
C.b.sm(p,0)
q.dy.push(null)
m.ak(n.e)}q=n.Q
if(q!=null)q.C(null)}catch(o){s=H.ag(o)
r=H.lX(o)
P.m_("Error: "+H.f(s))
P.m_("Stack: "+H.f(r))
throw H.b(s)}}}
E.jn.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.is()}}}
Z.fy.prototype={}
Z.dV.prototype={
a2:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ag(q)
r=P.u('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.fz.prototype={}
Z.co.prototype={
aJ:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
a2:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].a2(a)},
av:function(a){var s,r,q
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
Z.bV.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eK(this.c))+"'")+"]"}}
Z.bj.prototype={
gcU:function(a){var s=this.a,r=(s&$.aM().a)!==0?3:0
if((s&$.br().a)!==0)r+=3
if((s&$.bq().a)!==0)r+=3
if((s&$.bs().a)!==0)r+=2
if((s&$.bM().a)!==0)r+=3
if((s&$.dK().a)!==0)r+=3
if((s&$.dL().a)!==0)r+=4
if((s&$.cm().a)!==0)++r
return(s&$.bp().a)!==0?r+4:r},
hB:function(a){var s,r=$.aM(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.br()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bq()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bs()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bM()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dK()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dL()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cm()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bp()
if((q&r.a)!==0)if(s===a)return r
return $.o_()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bj))return!1
return this.a===b.a},
i:function(a){var s=H.c([],t.i),r=this.a
if((r&$.aM().a)!==0)s.push("Pos")
if((r&$.br().a)!==0)s.push("Norm")
if((r&$.bq().a)!==0)s.push("Binm")
if((r&$.bs().a)!==0)s.push("Txt2D")
if((r&$.bM().a)!==0)s.push("TxtCube")
if((r&$.dK().a)!==0)s.push("Clr3")
if((r&$.dL().a)!==0)s.push("Clr4")
if((r&$.cm().a)!==0)s.push("Weight")
if((r&$.bp().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hV.prototype={}
D.bR.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=H.c([],t.f):s).push(b)},
L:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.F(q,b)
if(q===!0){q=r.a
s=(q&&C.b).L(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.F(q,b)
if(q===!0){q=r.b
s=(q&&C.b).L(q,b)||s}return s},
C:function(a){var s,r,q,p=this,o={}
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
return!0}if(!r)C.b.I(P.lv(s,!0,t.dm),new D.ic(o))
s=p.b
if(s!=null){p.b=H.c([],t.f)
C.b.I(s,new D.id(o))}return!0},
ck:function(){return this.C(null)},
au:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.C(s)}}}}
D.ic.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.id.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.U.prototype={}
D.aQ.prototype={}
D.aR.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dW.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dW))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.eg.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eg))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.is.prototype={
ik:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
ig:function(a){this.c=a.b
this.d.L(0,a.a)
return!1}}
X.cM.prototype={}
X.iy.prototype={
ba:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.t()
s=b.b
r=o.ch
if(typeof s!=="number")return s.t()
q=new V.a4(m.a+l*k,m.b+s*r)
r=o.a.gaZ()
p=new X.bZ(a,V.bf(),o.x,r,q)
p.b=!0
o.z=new P.ak(n,!1)
o.x=q
return p},
cG:function(a,b){this.r=a.a
return!1},
bk:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.eu()
if(typeof s!=="number")return s.al()
this.r=(s&~r)>>>0
return!1},
bj:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.ba(a,b))
return!0},
il:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaZ()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.t()
o=a.b
n=m.cy
if(typeof o!=="number")return o.t()
r=new X.c_(new V.ae(q*p,o*n),s,r)
r.b=!0
l.C(r)
return!0},
fI:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cM(c,p.a.gaZ(),b)
q.b=!0
r.C(q)
p.y=new P.ak(s,!1)
p.x=V.bf()}}
X.aq.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.aq))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bZ.prototype={}
X.iS.prototype={
bS:function(a,b,c){var s=this,r=new P.ak(Date.now(),!1),q=s.a.gaZ(),p=new X.bZ(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cG:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.C(this.bS(a,b,!0))
return!0},
bk:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.eu()
if(typeof r!=="number")return r.al()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.C(s.bS(a,b,!0))
return!0},
bj:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.bS(a,b,!1))
return!0},
im:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaZ()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.t()
p=a.b
o=n.ch
if(typeof p!=="number")return p.t()
s=new X.c_(new V.ae(r*q,p*o),s,b)
s.b=!0
m.C(s)
return!0},
gdL:function(){var s=this.b
return s==null?this.b=D.G():s},
gcP:function(){var s=this.c
return s==null?this.c=D.G():s},
ge8:function(){var s=this.d
return s==null?this.d=D.G():s}}
X.c_.prototype={}
X.eI.prototype={}
X.d2.prototype={}
X.jr.prototype={
ba:function(a,b){var s=this,r=new P.ak(Date.now(),!1),q=a.length>0?a[0]:V.bf(),p=s.a.gaZ(),o=new X.d2(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
ij:function(a){var s=this.b
if(s==null)return!1
s.C(this.ba(a,!0))
return!0},
ih:function(a){var s=this.c
if(s==null)return!1
s.C(this.ba(a,!0))
return!0},
ii:function(a){var s=this.d
if(s==null)return!1
s.C(this.ba(a,!1))
return!0}}
X.fu.prototype={
gaZ:function(){var s=this.a,r=C.i.gdI(s).c
r.toString
s=C.i.gdI(s).d
s.toString
return V.mG(0,0,r,s)},
d5:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.eg(s,new X.aq(r,a.altKey,a.shiftKey))},
aV:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.aq(r,a.altKey,a.shiftKey)},
c6:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.aq(r,a.altKey,a.shiftKey)},
aH:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a_()
if(typeof o!=="number")return H.v(o)
s=r.top
if(typeof p!=="number")return p.a_()
if(typeof s!=="number")return H.v(s)
return new V.a4(q-o,p-s)},
bb:function(a){return new V.ae(a.movementX,a.movementY)},
c1:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.c([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=C.d.a6(p.pageX)
C.d.a6(p.pageY)
n=k.left
if(typeof n!=="number")return H.v(n)
C.d.a6(p.pageX)
m=C.d.a6(p.pageY)
l=k.top
if(typeof l!=="number")return H.v(l)
j.push(new V.a4(o-n,m-l))}return j},
aF:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dW(s,new X.aq(r,a.altKey,a.shiftKey))},
bT:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a_()
if(typeof n!=="number")return H.v(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a_()
if(typeof p!=="number")return H.v(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.v(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.v(p)
p=r<p}else p=!1
return p},
fC:function(a){this.f=!0},
fn:function(a){this.f=!1},
fu:function(a){if(this.f&&this.bT(a))a.preventDefault()},
fG:function(a){var s
if(!this.f)return
s=this.d5(a)
this.b.ik(s)},
fE:function(a){var s
if(!this.f)return
s=this.d5(a)
this.b.ig(s)},
fK:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aV(a)
if(p.x){s=p.aF(a)
r=p.bb(a)
if(p.d.cG(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aF(a)
q=p.aH(a)
if(p.c.cG(s,q))a.preventDefault()},
fO:function(a){var s,r,q,p=this
p.aV(a)
s=p.aF(a)
if(p.x){r=p.bb(a)
if(p.d.bk(s,r))a.preventDefault()
return}if(p.r)return
q=p.aH(a)
if(p.c.bk(s,q))a.preventDefault()},
fA:function(a){var s,r,q,p=this
if(!p.bT(a)){p.aV(a)
s=p.aF(a)
if(p.x){r=p.bb(a)
if(p.d.bk(s,r))a.preventDefault()
return}if(p.r)return
q=p.aH(a)
if(p.c.bk(s,q))a.preventDefault()}},
fM:function(a){var s,r,q,p=this
p.aV(a)
s=p.aF(a)
if(p.x){r=p.bb(a)
if(p.d.bj(s,r))a.preventDefault()
return}if(p.r)return
q=p.aH(a)
if(p.c.bj(s,q))a.preventDefault()},
fw:function(a){var s,r,q,p=this
if(!p.bT(a)){p.aV(a)
s=p.aF(a)
if(p.x){r=p.bb(a)
if(p.d.bj(s,r))a.preventDefault()
return}if(p.r)return
q=p.aH(a)
if(p.c.bj(s,q))a.preventDefault()}},
fQ:function(a){var s,r,q=this
q.aV(a)
s=new V.ae((a&&C.F).ghN(a),C.F.ghO(a)).t(0,q.Q)
if(q.x){if(q.d.il(s))a.preventDefault()
return}if(q.r)return
r=q.aH(a)
if(q.c.im(s,r))a.preventDefault()},
fS:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aF(q.y)
r=q.aH(q.y)
q.d.fI(s,r,p)}},
h7:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c6(a)
s=r.c1(a)
if(r.e.ij(s))a.preventDefault()},
h3:function(a){var s
this.c6(a)
s=this.c1(a)
if(this.e.ih(s))a.preventDefault()},
h5:function(a){var s
this.c6(a)
s=this.c1(a)
if(this.e.ii(s))a.preventDefault()}}
D.dT.prototype={$iV:1}
D.bx.prototype={
aE:function(a){var s=this.r
if(s!=null)s.C(a)},
eN:function(){return this.aE(null)},
$iV:1}
D.V.prototype={}
D.cH.prototype={
aE:function(a){var s=this.y
if(s!=null)s.C(a)},
de:function(a){var s=this.z
if(s!=null)s.C(a)},
fH:function(){return this.de(null)},
fU:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(q==null||this.eL(q))return!1}return!0},
fh:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdd(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o instanceof D.bx)this.f.push(o)
n=o.r
if(n==null){n=new D.bR()
n.d=0
o.r=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}s=new D.aQ()
s.b=!0
this.aE(s)},
fY:function(a,b){var s,r,q
for(s=b.gP(b),r=this.gdd();s.v();){q=s.gB(s)
C.b.L(this.e,q)
q.gp().L(0,r)}s=new D.aR()
s.b=!0
this.aE(s)},
eL:function(a){var s=C.b.F(this.f,a)
return s}}
D.eH.prototype={$iV:1}
D.eW.prototype={$iV:1}
V.a_.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a_))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.aj.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aj))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+"]"}}
V.ia.prototype={}
V.eo.prototype={
ag:function(a,b){var s=this,r=H.c([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eo))return!1
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
cz:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.E().toString
if(Math.abs(b3-0)<1e-9)return V.bX()
s=1/b3
r=-l
q=-a2
return V.aW((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
t:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aW(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bG:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.C(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bn:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.O(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.be))return!1
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
i:function(a){return this.O()},
G:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.cl(H.c([n.a,n.e,n.y,n.cx],m),3,0),k=V.cl(H.c([n.b,n.f,n.z,n.cy],m),3,0),j=V.cl(H.c([n.c,n.r,n.Q,n.db],m),3,0),i=V.cl(H.c([n.d,n.x,n.ch,n.dx],m),3,0)
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
O:function(){return this.G("")}}
V.a4.prototype={
a9:function(a){return new V.ae(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.O.prototype={
A:function(a,b){return new V.O(this.a+b.a,this.b+b.b,this.c+b.c)},
a_:function(a,b){return new V.O(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.O(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.as.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.as))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+"]"}}
V.eM.prototype={
gaj:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eM))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+"]"}}
V.ae.prototype={
cA:function(a){return Math.sqrt(this.ad(this))},
ad:function(a){var s,r,q=this.a,p=a.a
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
return new V.ae(r*b,s*b)},
a0:function(a,b){var s,r
$.E().toString
if(Math.abs(b-0)<1e-9){s=$.mV
return s==null?$.mV=new V.ae(0,0):s}s=this.a
if(typeof s!=="number")return s.a0()
r=this.b
if(typeof r!=="number")return r.a0()
return new V.ae(s/b,r/b)},
q:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
s=b.a
r=this.a
$.E().toString
if(typeof s!=="number")return s.a_()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a_()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.C.prototype={
cA:function(a){return Math.sqrt(this.ad(this))},
ad:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cB:function(a,b){return new V.C(V.hJ(this.a,a.a,b),V.hJ(this.b,a.b,b),V.hJ(this.c,a.c,b))},
D:function(){var s=this,r=Math.sqrt(s.ad(s))
if(r===1)return s
return s.a0(0,r)},
aI:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.C(s*r-q*p,q*o-n*r,n*p-s*o)},
A:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.C(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
a0:function(a,b){$.E().toString
if(Math.abs(b-0)<1e-9)return V.db()
return new V.C(this.a/b,this.b/b,this.c/b)},
e7:function(){$.E().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.C))return!1
s=b.a
$.E().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
U.hX.prototype={
bL:function(a){var s=V.la(a,this.c,this.b)
return s},
gp:function(){var s=this.y
return s==null?this.y=D.G():s},
H:function(a){var s=this.y
if(s!=null)s.C(a)},
scQ:function(a,b){},
scD:function(a){var s,r=this,q=r.b
$.E().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bL(s)}q=new D.z("maximumLocation",q,r.b)
q.b=!0
r.H(q)}},
scF:function(a){var s,r=this,q=r.c
$.E().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bL(s)}q=new D.z("minimumLocation",q,r.c)
q.b=!0
r.H(q)}},
sZ:function(a,b){var s,r=this
b=r.bL(b)
s=r.d
$.E().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.z("location",s,b)
s.b=!0
r.H(s)}},
scE:function(a){var s,r,q=this,p=q.e
$.E().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.z("maximumVelocity",p,a)
p.b=!0
q.H(p)}},
sU:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.E().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.z("velocity",r,a)
r.b=!0
s.H(r)}},
scj:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.z("dampening",s,a)
s.b=!0
this.H(s)}},
aw:function(a,b){var s,r,q,p=this,o=p.f
$.E().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sZ(0,p.d+s*b)
o=p.x
$.E().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sU(s)}}}
U.cq.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.G():s},
aO:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cq))return!1
return J.J(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.bT.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.G():s},
H:function(a){var s=this.e
if(s!=null)s.C(a)},
af:function(){return this.H(null)},
eP:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaU(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gp()
m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.aQ()
s.b=!0
this.H(s)},
fW:function(a,b){var s,r
for(s=b.gP(b),r=this.gaU();s.v();)s.gB(s).gp().L(0,r)
s=new D.aR()
s.b=!0
this.H(s)},
aO:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.ah()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a8(p,p.length),s=null;p.v();){o=p.d
if(o!=null){r=o.aO(0,b,c)
if(r!=null)s=s==null?r:r.t(0,s)}}q.f=s==null?V.bX():s
p=q.e
if(p!=null)p.au(0)}return q.f},
q:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bT))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.d(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.d(p,r)
if(!J.J(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iS:1}
U.S.prototype={}
U.cY.prototype={
gp:function(){var s=this.y
return s==null?this.y=D.G():s},
H:function(a){var s=this.y
if(s!=null)s.C(a)},
seq:function(a){var s
a=V.la(a,0,6.283185307179586)
s=this.a
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.z("yaw",s,a)
s.b=!0
this.H(s)}},
sef:function(a,b){var s
b=V.la(b,0,6.283185307179586)
s=this.b
$.E().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.z("pitch",s,b)
s.b=!0
this.H(s)}},
sej:function(a){var s
a=V.la(a,0,6.283185307179586)
s=this.c
$.E().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.z("roll",s,a)
s.b=!0
this.H(s)}},
aO:function(a,b,c){var s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.seq(s.a+s.d*b.y)
s.sef(0,s.b+s.e*b.y)
s.sej(s.c+s.f*b.y)
s.x=V.ms(s.c).t(0,V.mr(s.b)).t(0,V.mq(s.a))
r=s.y
if(r!=null)r.au(0)}return s.x},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.cY))return!1
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
i:function(a){var s=this
return"Rotator: ["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+"], ["+V.H(s.d,3,0)+", "+V.H(s.e,3,0)+", "+V.H(s.f,3,0)+"]"}}
U.d8.prototype={
gp:function(){var s=this.cy
return s==null?this.cy=D.G():s},
H:function(a){var s=this.cy
if(s!=null)s.C(a)},
af:function(){return this.H(null)},
bd:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gdL().n(0,s.gbU())
s.a.c.ge8().n(0,s.gbW())
s.a.c.gcP().n(0,s.gbY())
return!0},
bV:function(a){var s=this
if(!J.J(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bX:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.y)return
if(l.x){s=a.y.a9(a.d)
s=s.ad(s)
r=l.r
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a9(a.d).t(0,2).a0(0,s.gaj())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.t()
q=l.e
if(typeof q!=="number")return H.v(q)
r.sU(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a9(q).t(0,2).a0(0,s.gaj())
r=l.b
o=p.a
if(typeof o!=="number")return o.T()
n=l.e
if(typeof n!=="number")return H.v(n)
m=l.z
if(typeof m!=="number")return H.v(m)
r.sZ(0,-o*n+m)
l.b.sU(0)
l.Q=a.z.a9(q).t(0,2).a0(0,s.gaj())}l.af()},
bZ:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.ad(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.t()
q=p.e
if(typeof q!=="number")return H.v(q)
s.sU(r*10*q)
p.af()}},
aO:function(a,b,c){var s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.ah()
if(q<p){r.ch=p
s=b.y
r.b.aw(0,s)
r.cx=V.ms(r.b.d)}return r.cx},
$iS:1}
U.d9.prototype={
gp:function(){var s=this.fx
return s==null?this.fx=D.G():s},
H:function(a){var s=this.fx
if(s!=null)s.C(a)},
af:function(){return this.H(null)},
bd:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gdL().n(0,q.gbU())
q.a.c.ge8().n(0,q.gbW())
q.a.c.gcP().n(0,q.gbY())
s=q.a.d
r=s.f
s=r==null?s.f=D.G():r
s.n(0,q.gf9())
s=q.a.d
r=s.d
s=r==null?s.d=D.G():r
s.n(0,q.gfb())
s=q.a.e
r=s.b
s=r==null?s.b=D.G():r
s.n(0,q.ghs())
s=q.a.e
r=s.d
s=r==null?s.d=D.G():r
s.n(0,q.ghq())
s=q.a.e
r=s.c
s=r==null?s.c=D.G():r
s.n(0,q.gho())
return!0},
az:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.T()
s=-s}if(this.r){if(typeof r!=="number")return r.T()
r=-r}return new V.ae(s,r)},
bV:function(a){var s=this
t.d.a(a)
if(!J.J(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bX:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a9(a.d)
s=s.ad(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.az(a.y.a9(a.d).t(0,2).a0(0,s.gaj()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.T()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sU(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.T()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sU(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.az(r.a9(q).t(0,2).a0(0,s.gaj()))
r=l.c
o=p.a
if(typeof o!=="number")return o.T()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sZ(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.T()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sZ(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.az(a.z.a9(q).t(0,2).a0(0,s.gaj()))}l.af()},
bZ:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.ad(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.T()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sU(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.T()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sU(-r*10*s)
p.af()}},
fa:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
fc:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.J(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.az(r.a9(q).t(0,2).a0(0,s.gaj()))
r=l.c
o=p.a
if(typeof o!=="number")return o.T()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sZ(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.T()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sZ(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.az(a.z.a9(q).t(0,2).a0(0,s.gaj()))
l.af()},
ht:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hr:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a9(a.d)
s=s.ad(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.az(a.y.a9(a.d).t(0,2).a0(0,s.gaj()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.T()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sU(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.T()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sU(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.az(r.a9(q).t(0,2).a0(0,s.gaj()))
r=l.c
o=p.a
if(typeof o!=="number")return o.T()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sZ(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.T()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sZ(0,-n*o+r)
l.b.sU(0)
l.c.sU(0)
l.dx=l.az(a.z.a9(q).t(0,2).a0(0,s.gaj()))}l.af()},
hp:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.ad(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.T()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sU(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.T()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sU(-r*10*s)
p.af()}},
aO:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ah()
if(q<p){r.dy=p
s=b.y
r.c.aw(0,s)
r.b.aw(0,s)
r.fr=V.mq(r.b.d).t(0,V.mr(r.c.d))}return r.fr},
$iS:1}
U.da.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.G():s},
H:function(a){var s=this.r
if(s!=null)s.C(a)},
bd:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.G():r
r=p.gfe()
s.n(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.G():q).n(0,r)
return!0},
ff:function(a){var s,r,q,p,o=this
if(!J.J(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.t()
p=s+r*q
if(s!==p){o.d=p
s=new D.z("zoom",s,p)
s.b=!0
o.H(s)}},
aO:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aW(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iS:1}
M.cp.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.G():s},
Y:function(a){var s=this.r
if(s!=null)s.C(a)},
b7:function(){return this.Y(null)},
h_:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gX(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gp()
m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.aQ()
s.b=!0
this.Y(s)},
h1:function(a,b){var s,r
for(s=b.gP(b),r=this.gX();s.v();)s.gB(s).gp().L(0,r)
s=new D.aR()
s.b=!0
this.Y(s)},
ak:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a8(s,s.length);s.v();){r=s.d
if(r!=null)r.ak(a)}q.f=!1},
$ia6:1}
M.ct.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.G():s},
Y:function(a){var s=this.r
if(s!=null)s.C(a)},
b7:function(){return this.Y(null)},
saY:function(a){var s,r,q=this
if(a==null)a=new X.io()
s=q.b
if(s!==a){if(s!=null)s.gp().L(0,q.gX())
r=q.b
q.b=a
a.gp().n(0,q.gX())
s=new D.z("camera",r,q.b)
s.b=!0
q.Y(s)}},
sbm:function(a,b){var s,r,q=this
if(b==null)b=X.mi(null)
s=q.c
if(s!==b){if(s!=null)s.gp().L(0,q.gX())
r=q.c
q.c=b
b.gp().n(0,q.gX())
s=new D.z("target",r,q.c)
s.b=!0
q.Y(s)}},
sb3:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gp().L(0,r.gX())
s=r.d
r.d=a
if(a!=null)a.gp().n(0,r.gX())
q=new D.z("technique",s,r.d)
q.b=!0
r.Y(q)}},
ak:function(a){var s=this
a.cI(s.d)
s.c.a2(a)
s.b.a2(a)
s.e.aw(0,a)
s.e.ak(a)
s.b.av(a)
s.c.av(a)
a.cH()},
$ia6:1}
M.cz.prototype={
Y:function(a){var s=this.y
if(s!=null)s.C(a)},
b7:function(){return this.Y(null)},
fp:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gX(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bR()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.c([],q):m).push(r)}}s=new D.aQ()
s.b=!0
this.Y(s)},
fs:function(a,b){var s,r
for(s=b.gP(b),r=this.gX();s.v();)s.gB(s).gp().L(0,r)
s=new D.aR()
s.b=!0
this.Y(s)},
saY:function(a){var s,r,q=this
if(a==null)a=X.lx(null)
s=q.b
if(s!==a){if(s!=null)s.gp().L(0,q.gX())
r=q.b
q.b=a
a.gp().n(0,q.gX())
s=new D.z("camera",r,q.b)
s.b=!0
q.Y(s)}},
sbm:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gp().L(0,r.gX())
s=r.c
r.c=b
b.gp().n(0,r.gX())
q=new D.z("target",s,r.c)
q.b=!0
r.Y(q)}},
sb3:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gp().L(0,r.gX())
s=r.d
r.d=a
if(a!=null)a.gp().n(0,r.gX())
q=new D.z("technique",s,r.d)
q.b=!0
r.Y(q)}},
gp:function(){var s=this.y
return s==null?this.y=D.G():s},
ak:function(a){var s,r=this
a.cI(r.d)
r.c.a2(a)
r.b.a2(a)
s=r.d
if(s!=null)s.aw(0,a)
for(s=r.e.a,s=new J.a8(s,s.length);s.v();)s.d.aw(0,a)
for(s=r.e.a,s=new J.a8(s,s.length);s.v();)s.d.ak(a)
r.b.toString
a.cy.aL()
a.db.aL()
r.c.av(a)
a.cH()},
$ia6:1}
M.a6.prototype={}
A.dQ.prototype={}
A.hO.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hT:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dK:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a2.prototype={
gax:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.a2))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.em.prototype={
eG:function(c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3="Required uniform value, ",c4=", was not defined or used in shader.",c5="uniform mat4 objMat;\n"
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
A.qj(c6,s)
A.ql(c6,s)
A.qk(c6,s)
A.qn(c6,s)
A.qo(c6,s)
A.qm(c6,s)
A.qp(c6,s)
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
c1.e4(0,q.charCodeAt(0)==0?q:q,A.qi(c1.z))
c1.Q=c1.x.h(0,"posAttr")
c1.cx=c1.x.h(0,"normAttr")
c1.ch=c1.x.h(0,"binmAttr")
c1.cy=c1.x.h(0,"txt2DAttr")
c1.db=c1.x.h(0,"txtCubeAttr")
c1.dx=c1.x.h(0,"bendAttr")
if(c6.dy)c1.id=t.q.a(c1.y.M(0,"invViewMat"))
if(r)c1.dy=t.q.a(c1.y.M(0,"objMat"))
if(p)c1.fr=t.q.a(c1.y.M(0,"viewObjMat"))
r=t.q
c1.fy=r.a(c1.y.M(0,"projViewObjMat"))
if(c6.go)c1.fx=r.a(c1.y.M(0,"viewMat"))
if(c6.x1)c1.k1=t.O.a(c1.y.M(0,"txt2DMat"))
if(c6.x2)c1.k2=r.a(c1.y.M(0,"txtCubeMat"))
if(c6.y1)c1.k3=r.a(c1.y.M(0,"colorMat"))
c1.r1=H.c([],t.hg)
q=c6.b1
if(q>0){c1.k4=c1.y.M(0,"bendMatCount")
for(l=0;l<q;++l){p=c1.r1
o=c1.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.q(P.u(c3+n+c4))
p.push(r.a(k))}}r=c6.a
if(r.a)c1.r2=t.r.a(c1.y.M(0,"emissionClr"))
if(r.b)c1.rx=t.c.a(c1.y.M(0,"emissionTxt"))
r=c6.b
if(r.a)c1.x1=t.r.a(c1.y.M(0,"ambientClr"))
if(r.b)c1.x2=t.c.a(c1.y.M(0,"ambientTxt"))
r=c6.c
if(r.a)c1.y2=t.r.a(c1.y.M(0,"diffuseClr"))
if(r.b)c1.b1=t.c.a(c1.y.M(0,"diffuseTxt"))
r=c6.d
if(r.a)c1.bw=t.r.a(c1.y.M(0,"invDiffuseClr"))
if(r.b)c1.dN=t.c.a(c1.y.M(0,"invDiffuseTxt"))
r=c6.e
q=r.a
if(q||r.b||!1){c1.dQ=t.n.a(c1.y.M(0,"shininess"))
if(q)c1.dO=t.r.a(c1.y.M(0,"specularClr"))
if(r.b)c1.dP=t.c.a(c1.y.M(0,"specularTxt"))}if(c6.f.b)c1.dR=t.c.a(c1.y.M(0,"bumpTxt"))
if(c6.db){c1.dS=t.Q.a(c1.y.M(0,"envSampler"))
r=c6.r
if(r.a)c1.dT=t.r.a(c1.y.M(0,"reflectClr"))
if(r.b)c1.dU=t.c.a(c1.y.M(0,"reflectTxt"))
r=c6.x
q=r.a
if(q||r.b||!1){c1.dV=t.n.a(c1.y.M(0,"refraction"))
if(q)c1.dW=t.r.a(c1.y.M(0,"refractClr"))
if(r.b)c1.dX=t.c.a(c1.y.M(0,"refractTxt"))}}r=c6.y
if(r.a)c1.dY=t.n.a(c1.y.M(0,"alpha"))
if(r.b)c1.dZ=t.c.a(c1.y.M(0,"alphaTxt"))
if(c6.k1){r=c6.z
q=r.length
if(q!==0){c1.cl=new H.D(t.J)
c1.cm=new H.D(t.en)
for(p=t.r,o=t.n,n=t.d6,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="barLight"+H.f(h)
f=H.c([],n)
for(m=i.b,l=0;l<m;++l){e=c1.y
d=g+"s["+l+"].startPnt"
k=e.h(0,d)
if(k==null)H.q(P.u(c3+d+c4))
p.a(k)
e=c1.y
d=g+"s["+l+"].endPnt"
c=e.h(0,d)
if(c==null)H.q(P.u(c3+d+c4))
p.a(c)
e=c1.y
d=g+"s["+l+"].color"
b=e.h(0,d)
if(b==null)H.q(P.u(c3+d+c4))
p.a(b)
if(typeof h!=="number")return h.al()
if((h&4)!==0){e=c1.y
d=g+"s["+l+"].att0"
a=e.h(0,d)
if(a==null)H.q(P.u(c3+d+c4))
o.a(a)
e=c1.y
d=g+"s["+l+"].att1"
a0=e.h(0,d)
if(a0==null)H.q(P.u(c3+d+c4))
o.a(a0)
e=c1.y
d=g+"s["+l+"].att2"
a1=e.h(0,d)
if(a1==null)H.q(P.u(c3+d+c4))
o.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.d3(k,c,b,a4,a3,a2))}c1.cm.l(0,h,f)
m=c1.cl
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.q(P.u(c3+d+c4))
m.l(0,h,k)}}r=c6.Q
q=r.length
if(q!==0){c1.cn=new H.D(t.J)
c1.co=new H.D(t.af)
for(p=t.r,o=t.c,n=t.dv,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.f(h)
f=H.c([],n)
for(m=i.b,l=0;l<m;++l){if(typeof h!=="number")return h.al()
e=(h&1)!==0
if(e){d=c1.y
a5=g+"s["+l+"].objUp"
k=d.h(0,a5)
if(k==null)H.q(P.u(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].objRight"
c=d.h(0,a5)
if(c==null)H.q(P.u(c3+a5+c4))
p.a(c)
d=c1.y
a5=g+"s["+l+"].objDir"
b=d.h(0,a5)
if(b==null)H.q(P.u(c3+a5+c4))
p.a(b)
a6=b
a7=c
a8=k}else{a6=c2
a7=a6
a8=a7}d=c1.y
a5=g+"s["+l+"].viewDir"
k=d.h(0,a5)
if(k==null)H.q(P.u(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].color"
c=d.h(0,a5)
if(c==null)H.q(P.u(c3+a5+c4))
p.a(c)
if(e){e=c1.y
d=g+"sTexture2D"+l
b=e.h(0,d)
if(b==null)H.q(P.u(c3+d+c4))
o.a(b)
a9=b}else a9=c2
f.push(new A.d4(a8,a7,a6,k,c,a9))}c1.co.l(0,h,f)
m=c1.cn
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.q(P.u(c3+d+c4))
m.l(0,h,k)}}r=c6.ch
q=r.length
if(q!==0){c1.cp=new H.D(t.J)
c1.cq=new H.D(t.gr)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,d=t.by,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.f(h)
f=H.c([],d)
for(a5=i.b,l=0;l<a5;++l){b0=c1.y
b1=g+"s["+l+"].point"
k=b0.h(0,b1)
if(k==null)H.q(P.u(c3+b1+c4))
p.a(k)
b0=c1.y
b1=g+"s["+l+"].viewPnt"
c=b0.h(0,b1)
if(c==null)H.q(P.u(c3+b1+c4))
p.a(c)
b0=c1.y
b1=g+"s["+l+"].color"
b=b0.h(0,b1)
if(b==null)H.q(P.u(c3+b1+c4))
p.a(b)
if(typeof h!=="number")return h.al()
if((h&3)!==0){b0=c1.y
b1=g+"s["+l+"].invViewRotMat"
a=b0.h(0,b1)
if(a==null)H.q(P.u(c3+b1+c4))
o.a(a)
b2=a}else b2=c2
if((h&1)!==0){b0=c1.y
b1=g+"sTextureCube"+l
a=b0.h(0,b1)
if(a==null)H.q(P.u(c3+b1+c4))
n.a(a)
a9=a}else a9=c2
if((h&2)!==0){b0=c1.y
b1=g+"sShadowCube"+l
a=b0.h(0,b1)
if(a==null)H.q(P.u(c3+b1+c4))
n.a(a)
b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
m.a(a0)
b3=a
b4=a0}else{b3=c2
b4=b3}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a=b0.h(0,b1)
if(a==null)H.q(P.u(c3+b1+c4))
e.a(a)
b0=c1.y
b1=g+"s["+l+"].att1"
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
e.a(a0)
b0=c1.y
b1=g+"s["+l+"].att2"
a1=b0.h(0,b1)
if(a1==null)H.q(P.u(c3+b1+c4))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.d6(k,c,b2,b,a9,b3,b4,a4,a3,a2))}c1.cq.l(0,h,f)
a5=c1.cp
b0=c1.y
b1=g+"Count"
k=b0.h(0,b1)
if(k==null)H.q(P.u(c3+b1+c4))
a5.l(0,h,k)}}r=c6.cx
q=r.length
if(q!==0){c1.cr=new H.D(t.J)
c1.cs=new H.D(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.c,e=t.fF,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.f(h)
f=H.c([],e)
for(d=i.b,l=0;l<d;++l){a5=c1.y
b0=g+"s["+l+"].objPnt"
k=a5.h(0,b0)
if(k==null)H.q(P.u(c3+b0+c4))
p.a(k)
a5=c1.y
b0=g+"s["+l+"].objDir"
c=a5.h(0,b0)
if(c==null)H.q(P.u(c3+b0+c4))
p.a(c)
a5=c1.y
b0=g+"s["+l+"].viewPnt"
b=a5.h(0,b0)
if(b==null)H.q(P.u(c3+b0+c4))
p.a(b)
a5=c1.y
b0=g+"s["+l+"].color"
a=a5.h(0,b0)
if(a==null)H.q(P.u(c3+b0+c4))
p.a(a)
if(typeof h!=="number")return h.al()
if((h&3)!==0){a5=c1.y
b0=g+"s["+l+"].objUp"
a0=a5.h(0,b0)
if(a0==null)H.q(P.u(c3+b0+c4))
p.a(a0)
a5=c1.y
b0=g+"s["+l+"].objRight"
a1=a5.h(0,b0)
if(a1==null)H.q(P.u(c3+b0+c4))
p.a(a1)
a5=c1.y
b0=g+"s["+l+"].tuScalar"
b5=a5.h(0,b0)
if(b5==null)H.q(P.u(c3+b0+c4))
o.a(b5)
a5=c1.y
b0=g+"s["+l+"].tvScalar"
b6=a5.h(0,b0)
if(b6==null)H.q(P.u(c3+b0+c4))
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
if(a0==null)H.q(P.u(c3+b1+c4))
n.a(a0)
b4=a0}else b4=c2
if((h&8)!==0){b0=c1.y
b1=g+"s["+l+"].cutoff"
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].coneAngle"
a1=b0.h(0,b1)
if(a1==null)H.q(P.u(c3+b1+c4))
o.a(a1)
b9=a1
c0=a0}else{b9=c2
c0=b9}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].att1"
a1=b0.h(0,b1)
if(a1==null)H.q(P.u(c3+b1+c4))
o.a(a1)
b0=c1.y
b1=g+"s["+l+"].att2"
b5=b0.h(0,b1)
if(b5==null)H.q(P.u(c3+b1+c4))
o.a(b5)
a2=b5
a3=a1
a4=a0}else{a2=c2
a3=a2
a4=a3}if((h&1)!==0){b0=c1.y
b1=g+"sTexture2D"+l
a0=b0.h(0,b1)
if(a0==null)H.q(P.u(c3+b1+c4))
m.a(a0)
a9=a0}else a9=c2
if(a5){a5=c1.y
b0=g+"sShadow2D"+l
a0=a5.h(0,b0)
if(a0==null)H.q(P.u(c3+b0+c4))
m.a(a0)
b3=a0}else b3=c2
f.push(new A.d7(k,c,b,a,a8,a7,b8,b7,b4,c0,b9,a4,a3,a2,a9,b3))}c1.cs.l(0,h,f)
d=c1.cr
a5=c1.y
b0=g+"Count"
k=a5.h(0,b0)
if(k==null)H.q(P.u(c3+b0+c4))
d.l(0,h,k)}}}},
ar:function(a,b){if(b!=null&&b.d)a.ew(b)},
hi:function(a,b){}}
A.dU.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.e2.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eJ.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.eX.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.iD.prototype={
i:function(a){return this.bg}}
A.d3.prototype={}
A.d4.prototype={}
A.d6.prototype={}
A.d7.prototype={}
A.c6.prototype={
cY:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
e4:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.d6(b,35633)
p.f=p.d6(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.q(P.u("Failed to link shader: "+H.f(q)))}p.hk()
p.hm()},
a2:function(a){a.a.useProgram(this.r)
this.x.hT()},
d6:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.b(P.u("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
hk:function(){var s,r,q,p=this,o=H.c([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dQ(n,r.name,q))}p.x=new A.hO(o)},
hm:function(){var s,r,q,p=this,o=H.c([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hL(r.type,r.size,r.name,q))}p.y=new A.jB(o)},
aS:function(a,b,c){var s=this.a
if(a===1)return new A.fj(s,b,c)
else return A.lB(s,this.r,b,a,c)},
f4:function(a,b,c){var s=this.a
if(a===1)return new A.fn(s,b,c)
else return A.lB(s,this.r,b,a,c)},
f5:function(a,b,c){var s=this.a
if(a===1)return new A.fo(s,b,c)
else return A.lB(s,this.r,b,a,c)},
bt:function(a,b){return new P.fQ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hL:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aS(b,c,d)
case 5121:return s.aS(b,c,d)
case 5122:return s.aS(b,c,d)
case 5123:return s.aS(b,c,d)
case 5124:return s.aS(b,c,d)
case 5125:return s.aS(b,c,d)
case 5126:return new A.fi(s.a,c,d)
case 35664:return new A.jx(s.a,c,d)
case 35665:return new A.fk(s.a,c,d)
case 35666:return new A.fl(s.a,c,d)
case 35667:return new A.jy(s.a,c,d)
case 35668:return new A.jz(s.a,c,d)
case 35669:return new A.jA(s.a,c,d)
case 35674:return new A.jC(s.a,c,d)
case 35675:return new A.fm(s.a,c,d)
case 35676:return new A.d5(s.a,c,d)
case 35678:return s.f4(b,c,d)
case 35680:return s.f5(b,c,d)
case 35670:throw H.b(s.bt("BOOL",c))
case 35671:throw H.b(s.bt("BOOL_VEC2",c))
case 35672:throw H.b(s.bt("BOOL_VEC3",c))
case 35673:throw H.b(s.bt("BOOL_VEC4",c))
default:throw H.b(P.u("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.eS.prototype={}
A.fh.prototype={}
A.jB.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
M:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.O()},
O:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.fj.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.jy.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.jz.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jA.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.jw.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.fi.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.jx.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.fk.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fl.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jC.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.fm.prototype={
am:function(a){var s=new Float32Array(H.cg(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.d5.prototype={
am:function(a){var s=new Float32Array(H.cg(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.fn.prototype={
ew:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fo.prototype={
ex:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.ku.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cB(q.b,b).cB(q.d.cB(q.c,b),c)
a.sZ(0,new V.O(p.a,p.b,p.c))
a.sem(p.D())
q=1-b
s=1-c
a.sdD(new V.as(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)}}
F.kF.prototype={
$2:function(a,b){return V.hJ(this.a,this.b,b)}}
F.kH.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hJ(-1,1,c),n=this.a.$2(b,c)
if(typeof n!=="number")return H.v(n)
q=-q*n
s=p*n
a.sZ(0,new V.O(q,s,o))
a.sem(new V.C(q,s,o).D())
a.sdD(new V.as(1-c,2+c,-1,-1))}}
F.kI.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.kJ.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.l7.prototype={
$2:function(a,b){return 0}}
F.l8.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.v(r)
s=a.f
r=new V.C(s.a,s.b,s.c).D().t(0,this.b+r)
a.sZ(0,new V.O(r.a,r.b,r.c))}}
F.l9.prototype={
$1:function(a){return new V.O(Math.cos(a),Math.sin(a),0)}}
F.kS.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.O(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)}}
F.kG.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.m4(l.$1(m),k)
k=J.m4(l.$1(m+3.141592653589793/n.c),k).a_(0,j)
s=new V.C(k.a,k.b,k.c).D()
l=$.mX
if(l==null){l=new V.C(1,0,0)
$.mX=l
r=l}else r=l
q=s.aI(!J.J(s,r)?V.mZ():r).D()
r=q.aI(s).D()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.t(0,l*k)
k=q.t(0,o*k)
a.sZ(0,j.A(0,new V.O(l.a-k.a,l.b-k.b,l.c-k.c)))}}
F.e4.prototype={
be:function(){var s=this
if(!s.gbf()){C.b.L(s.a.a.d.b,s)
s.a.a.a5()}s.c2()
s.c3()
s.ha()},
c7:function(a){this.a=a
a.d.b.push(this)},
c8:function(a){this.b=a
a.d.c.push(this)},
hj:function(a){this.c=a
a.d.d.push(this)},
c2:function(){var s=this.a
if(s!=null){C.b.L(s.d.b,this)
this.a=null}},
c3:function(){var s=this.b
if(s!=null){C.b.L(s.d.c,this)
this.b=null}},
ha:function(){var s=this.c
if(s!=null){C.b.L(s.d.d,this)
this.c=null}},
gbf:function(){return this.a==null||this.b==null||this.c==null},
eY:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.db()
if(n!=null)q=q.A(0,n)
if(s!=null)q=q.A(0,s)
if(r!=null)q=q.A(0,r)
if(q.e7())return p
return q.D()},
f_:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a_(0,n)
q=new V.C(o.a,o.b,o.c).D()
o=r.a_(0,n)
return q.aI(new V.C(o.a,o.b,o.c).D()).D()},
ce:function(){var s,r=this
if(r.d!=null)return!0
s=r.eY()
if(s==null){s=r.f_()
if(s==null)return!1}r.d=s
r.a.a.a5()
return!0},
eX:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.db()
if(n!=null)q=q.A(0,n)
if(s!=null)q=q.A(0,s)
if(r!=null)q=q.A(0,r)
if(q.e7())return p
return q.D()},
eZ:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.E().toString
if(Math.abs(p-0)<1e-9){j=b.a_(0,e)
o=new V.C(j.a,j.b,j.c).D()
if(q.a-r.a<0)o=o.T(0)}else{n=(j-s.b)/p
j=b.a_(0,e).t(0,n).A(0,e).a_(0,h)
o=new V.C(j.a,j.b,j.c).D()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.T(0)}j=l.d
if(j!=null){m=j.D()
o=m.aI(o).D().aI(m).D()}return o},
cc:function(){var s,r=this
if(r.e!=null)return!0
s=r.eX()
if(s==null){s=r.eZ()
if(s==null)return!1}r.e=s
r.a.a.a5()
return!0},
ghF:function(a){var s=this
if(J.J(s.a,s.b))return!0
if(J.J(s.b,s.c))return!0
if(J.J(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var s,r,q=this
if(q.gbf())return a+"disposed"
s=a+C.a.aq(J.a7(q.a.e),0)+", "+C.a.aq(J.a7(q.b.e),0)+", "+C.a.aq(J.a7(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
O:function(){return this.G("")}}
F.ie.prototype={}
F.jf.prototype={
bh:function(a,b,c){var s,r=b.a
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
F.ej.prototype={
be:function(){var s=this
if(!s.gbf()){C.b.L(s.a.a.c.b,s)
s.a.a.a5()}s.c2()
s.c3()},
c7:function(a){this.a=a
a.c.b.push(this)},
c8:function(a){this.b=a
a.c.c.push(this)},
c2:function(){var s=this.a
if(s!=null){C.b.L(s.c.b,this)
this.a=null}},
c3:function(){var s=this.b
if(s!=null){C.b.L(s.c.c,this)
this.b=null}},
gbf:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){if(this.gbf())return a+"disposed"
return a+C.a.aq(J.a7(this.a.e),0)+", "+C.a.aq(J.a7(this.b.e),0)},
O:function(){return this.G("")}}
F.it.prototype={}
F.jv.prototype={
bh:function(a,b,c){var s,r=b.a
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
F.eG.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.aq(J.a7(s.e),0)},
O:function(){return this.G("")}}
F.j6.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.G():s},
bi:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.w()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){p=e[q]
f.a.n(0,p.hI())}f.a.w()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.w()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
l=n[m]
f.b.a.a.n(0,l)
m=new F.eG()
if(l.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.C(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.w()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.A()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.c.a
n.a.n(0,j)
n.a.n(0,i)
F.oz(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.w()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.A()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.w()
m=m.e
if(typeof m!=="number")return m.A()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
g=n[m]
m=f.d.a
m.a.n(0,j)
m.a.n(0,i)
m.a.n(0,g)
F.cA(j,i,g)}e=f.e
if(e!=null)e.au(0)},
as:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.as()||!1
if(!r.a.as())s=!1
q=r.e
if(q!=null)q.au(0)
return s},
i6:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.a.c
s=H.c(m.slice(0),H.lP(m).K("w<1>"))
for(m=t.j;s.length!==0;){r=C.b.ghX(s)
C.b.cK(s,0)
if(r!=null){q=H.c([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(o!=null&&a.bh(0,r,o)){q.push(o)
C.b.cK(s,p)}}if(q.length>1)b.bi(q)}}n.a.w()
n.c.cL()
n.d.cL()
n.b.ir()
n.c.cM(new F.jv())
n.d.cM(new F.jf())
m=n.e
if(m!=null)m.au(0)},
cb:function(){this.i6(new F.jX(),new F.iV())},
dG:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.aM().a)!==0?1:0
if((s&$.br().a)!==0)++r
if((s&$.bq().a)!==0)++r
if((s&$.bs().a)!==0)++r
if((s&$.bM().a)!==0)++r
if((s&$.dK().a)!==0)++r
if((s&$.dL().a)!==0)++r
if((s&$.cm().a)!==0)++r
if((s&$.bp().a)!==0)++r
q=a6.gcU(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.c(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.c(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.hB(k)
i=j.gcU(j)
if(k>=m)return H.d(n,k)
n[k]=new Z.dV(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.d(g,h)
f=g[h].i5(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.d(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.cg(o)),35044)
s.bindBuffer(a3,null)
a=new Z.co(new Z.fy(a3,b),n,a6)
a.b=H.c([],t.aZ)
if(a2.b.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.w()
a0.push(m.e)}a1=Z.lD(s,34963,a0)
a.b.push(new Z.bV(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.w()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.d(m,k)
m=m[k].b
m.a.a.w()
a0.push(m.e)}a1=Z.lD(s,34963,a0)
a.b.push(new Z.bV(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.c([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.w()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.d(m,k)
m=m[k].b
m.a.a.w()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.d(m,k)
m=m[k].c
m.a.a.w()
a0.push(m.e)}a1=Z.lD(s,34963,a0)
a.b.push(new Z.bV(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.c([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.G(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.G(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.G(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.G(r))}return C.b.j(q,"\n")},
a5:function(){var s=this.e
if(s!=null)s.C(null)}}
F.j8.prototype={
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
hy:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.c([],t.b)
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
if(a.bh(0,n,l)){n.be()
break}}}}},
cL:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.ghF(q)
if(r)q.be()}},
as:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].ce())q=!1
return q},
cd:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].cc())q=!1
return q},
i:function(a){return this.O()},
G:function(a){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(a))
return C.b.j(p,"\n")},
O:function(){return this.G("")}}
F.j9.prototype={
gm:function(a){return this.b.length},
cM:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.bh(0,n,l)){n.be()
break}}}}},
cL:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=J.J(q.a,q.b)
if(r)q.be()}},
i:function(a){return this.O()},
G:function(a){var s,r,q=H.c([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q.push(r[s].G(a+(""+s+". ")))}return C.b.j(q,"\n")},
O:function(){return this.G("")}}
F.ja.prototype={
gm:function(a){return this.b.length},
ir:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.L(q.b.b,r)
q=r.a.a.e
if(q!=null)q.C(null)
q=r.a
if(q!=null){C.b.L(q.b.b,r)
r.a=null}}}},
i:function(a){return this.O()},
G:function(a){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(a))
return C.b.j(p,"\n")},
O:function(){return this.G("")}}
F.fv.prototype={
ci:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fw(s.cx,p,m,r,q,o,n,a,l)},
hI:function(){return this.ci(null)},
sZ:function(a,b){var s
if(!J.J(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a5()}},
sem:function(a){var s
if(!J.J(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a5()}},
sdD:function(a){var s
if(!J.J(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a5()}},
i5:function(a){var s,r,q=this
if(a.q(0,$.aM())){s=q.f
r=t.m
if(s==null)return H.c([0,0,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.q(0,$.br())){s=q.r
r=t.m
if(s==null)return H.c([0,1,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.q(0,$.bq())){s=q.x
r=t.m
if(s==null)return H.c([0,0,1],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.q(0,$.bs())){s=q.y
r=t.m
if(s==null)return H.c([0,0],r)
else return H.c([s.a,s.b],r)}else if(a.q(0,$.bM())){s=q.z
r=t.m
if(s==null)return H.c([0,0,0],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.q(0,$.dK())){s=q.Q
r=t.m
if(s==null)return H.c([1,1,1],r)
else return H.c([s.a,s.b,s.c],r)}else if(a.q(0,$.dL())){s=q.Q
r=t.m
if(s==null)return H.c([1,1,1,1],r)
else return H.c([s.a,s.b,s.c,s.d],r)}else if(a.q(0,$.cm()))return H.c([q.ch],t.m)
else if(a.q(0,$.bp())){s=q.cx
r=t.m
if(s==null)return H.c([-1,-1,-1,-1],r)
else return H.c([s.a,s.b,s.c,s.d],r)}else return H.c([],t.m)},
ce:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.db()
r.d.I(0,new F.k1(q))
r.r=q.a.D()
q=r.a
if(q!=null){q.a5()
q=r.a.e
if(q!=null)q.au(0)}return!0},
cc:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.db()
r.d.I(0,new F.k0(q))
r.x=q.a.D()
q=r.a
if(q!=null){q.a5()
q=r.a.e
if(q!=null)q.au(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
G:function(a){var s,r,q=this,p="-",o=H.c([],t.i)
o.push(C.a.aq(J.a7(q.e),0))
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
o.push(V.H(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.b.j(o,", ")
return a+"{"+r+"}"},
O:function(){return this.G("")}}
F.k1.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.A(0,r)}}}
F.k0.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.A(0,r)}}}
F.jS.prototype={
w:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
s[p].e=q;++q}this.b=!1}},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.u("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a5()
return!0},
du:function(a,b,c,d,e,f,g){var s=F.fw(a,null,b,c,d,e,f,g,0)
this.n(0,s)
return s},
bu:function(a,b,c,d,e,f){return this.du(a,b,c,null,d,e,f)},
hz:function(a,b,c,d,e,f){return this.du(a,b,c,d,e,f,null)},
gm:function(a){return this.c.length},
as:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].ce()
return!0},
cd:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].cc()
return!0},
hE:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r.D()
if(!J.J(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.C(null)}}}}return!0},
i:function(a){return this.O()},
G:function(a){var s,r,q,p
this.w()
s=H.c([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].G(a))
return C.b.j(s,"\n")},
O:function(){return this.G("")}}
F.jT.prototype={
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
C.b.I(s.c,new F.jU(s,b))
C.b.I(s.d,new F.jV(s,b))},
i:function(a){return this.O()},
O:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
F.jU.prototype={
$1:function(a){if(!J.J(a.a,this.a))this.b.$1(a)}}
F.jV.prototype={
$1:function(a){var s=this.a
if(!J.J(a.a,s)&&!J.J(a.b,s))this.b.$1(a)}}
F.jW.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.O()},
O:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
F.jY.prototype={}
F.jX.prototype={
bh:function(a,b,c){return J.J(b.f,c.f)}}
F.jZ.prototype={}
F.iV.prototype={
bi:function(a){var s,r,q,p,o,n,m=V.db()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)m=new V.C(m.a+q.a,m.b+q.b,m.c+q.c)}m=m.D()
for(s=a.length,q=m==null,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){p=a[r]
o=q?null:m.D()
if(!J.J(p.r,o)){p.r=o
n=p.a
if(n!=null){n=n.e
if(n!=null)n.C(null)}}}return null}}
F.k_.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var s,r,q,p=H.c([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].G(""))
return C.b.j(p,"\n")}}
O.en.prototype={
gp:function(){var s=this.fr
return s==null?this.fr=D.G():s},
V:function(a){var s=this.fr
if(s!=null)s.C(a)},
b8:function(){return this.V(null)},
dg:function(a){this.a=null
this.V(a)},
he:function(){return this.dg(null)},
fj:function(a,b){var s=new D.aQ()
s.b=!0
this.V(s)},
fl:function(a,b){var s=new D.aR()
s.b=!0
this.V(s)},
d4:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.D(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gaC()
n=d.h(0,p.gaC())
d.l(0,o,n==null?1:n)}m=H.c([],t.am)
d.I(0,new O.iH(f,m))
C.b.b6(m,new O.iI())
l=new H.D(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){o=l.h(0,0)
l.l(0,0,o==null?1:o)}k=H.c([],t.M)
l.I(0,new O.iJ(f,k))
C.b.b6(k,new O.iK())
j=new H.D(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gaC()
n=j.h(0,p.gaC())
j.l(0,o,n==null?1:n)}i=H.c([],t.d1)
j.I(0,new O.iL(f,i))
C.b.b6(i,new O.iM())
h=new H.D(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.o)(e),++q){p=e[q]
r=p.gaC()
o=h.h(0,p.gaC())
h.l(0,r,o==null?1:o)}g=H.c([],t.cz)
h.I(0,new O.iN(f,g))
C.b.b6(g,new O.iO())
e=C.c.a8(f.e.a.length+3,4)
f.dy.toString
return A.oG(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
an:function(a,b){if(b!=null)if(!C.b.F(a,b)){b.a=a.length
a.push(b)}},
aw:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a8(s,s.length);s.v();){r=s.d
r.toString
q=$.jR
if(q==null)q=$.jR=new V.C(0,0,1)
r.a=q
p=$.jQ
r.d=p==null?$.jQ=new V.C(0,1,0):p
p=$.jP
r.e=p==null?$.jP=new V.C(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bG(q).D()
r.d=o.bG(r.d).D()
r.e=o.bG(r.e).D()}}}},
eg:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.d4()
s=b4.fr.h(0,b3.bg)
if(s==null){s=A.oF(b3,b4.a)
b4.dw(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bw
b3=b5.e
if(!(b3 instanceof Z.co))b3=b5.e=null
if(b3==null||!b3.d.q(0,q)){b3=r.k4
if(b3)b5.d.as()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.cd()
o.a.cd()
o=o.e
if(o!=null)o.au(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.hE()
n=n.e
if(n!=null)n.au(0)}l=b5.d.dG(new Z.fz(b4.a),q)
l.aJ($.aM()).e=b2.a.Q.c
if(b3)l.aJ($.br()).e=b2.a.cx.c
if(p)l.aJ($.bq()).e=b2.a.ch.c
if(r.r2)l.aJ($.bs()).e=b2.a.cy.c
if(o)l.aJ($.bM()).e=b2.a.db.c
if(r.ry)l.aJ($.bp()).e=b2.a.dx.c
b5.e=l}k=H.c([],t.bw)
b2.a.a2(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.ga4(p)
b3=b3.dy
b3.toString
b3.am(p.ag(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga4(p)
o=b4.dx
o=b4.cx=p.t(0,o.ga4(o))
p=o}b3=b3.fr
b3.toString
b3.am(p.ag(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gip()
o=b4.dx
o=b4.ch=p.t(0,o.ga4(o))
p=o}b3=b3.fy
b3.toString
b3.am(p.ag(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.ga4(p)
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
b3.am(C.j.ag(p,!0))}if(r.b1>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.d(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.d(b3,i)
b3=b3[i]
h=new Float32Array(H.cg(p.ag(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.an(k,b2.f.d)
b3=b2.a
p=b2.f.d
b3.ar(b3.rx,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.an(k,b2.r.d)
b3=b2.a
p=b2.r.d
b3.ar(b3.x2,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.an(k,b2.x.d)
b3=b2.a
p=b2.x.d
b3.ar(b3.b1,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bw
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.an(k,b2.y.d)
b3=b2.a
p=b2.y.d
b3.ar(b3.dN,p)}b3=r.e
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.z.ch
o=o.dQ
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.dO
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.an(k,b2.z.d)
b3=b2.a
p=b2.z.d
b3.ar(b3.dP,p)}b3=r.z
if(b3.length>0){g=new H.D(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gaC()
c=g.h(0,d)
if(c==null)c=0
g.l(0,d,c+1)
b=J.cn(b2.a.cm.h(0,d),c)
n=e.giH()
m=$.aY
n=n.bn(m==null?$.aY=new V.O(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giM()
m=$.aY
n=n.bn(m==null?$.aY=new V.O(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gb_(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gdM()){n=e.gdA()
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
o=b2.a.cl.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.ga4(p)
a0=new H.D(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
c=a0.h(0,0)
if(c==null)c=0
a0.l(0,0,c+1)
b=J.cn(b2.a.co.h(0,0),c)
n=a.bG(e.a).D()
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
o=b2.a.cn.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.ga4(p)
a3=new H.D(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gaC()
c=a3.h(0,d)
if(c==null)c=0
a3.l(0,d,c+1)
b=J.cn(b2.a.cq.h(0,d),c)
a4=a.t(0,e.ga4(e))
n=e.ga4(e)
m=$.aY
n=n.bn(m==null?$.aY=new V.O(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.aY
n=a4.bn(n==null?$.aY=new V.O(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gb_(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaN()
n=a4.cz(0)
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
h=new Float32Array(H.cg(new V.eo(m,a1,a2,a5,a6,a7,a8,a9,n).ag(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gaN()
n=e.gaN()
if(!C.b.F(k,n)){n.a=k.length
k.push(n)}n=e.gaN()
m=n.gcC(n)
if(m){m=b.f
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gb5()
n=e.gey()
m=b.x
m.toString
a1=n.ghQ(n)
a2=n.ghR(n)
a5=n.ghS()
n=n.ghP()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gb5()
if(!C.b.F(k,n)){n.a=k.length
k.push(n)}n=e.gb5()
m=n.gcC(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gdM()){n=e.gdA()
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
o=b2.a.cp.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.ga4(p)
b1=new H.D(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gaC()
c=b1.h(0,d)
if(c==null)c=0
b1.l(0,d,c+1)
b=J.cn(b2.a.cs.h(0,d),c)
n=e.gio(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giK(e).D()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.bn(e.gio(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gb_(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaN()
n=e.gcP()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gcN(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giW()
m=b.x
m.a.uniform1f(m.d,n)
n=e.giX()
m=b.y
m.a.uniform1f(m.d,n)
e.gaN()
n=e.gaN()
if(!C.b.F(k,n)){n.a=k.length
k.push(n)}n=e.gaN()
m=n.gcC(n)
if(m){m=b.dx
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gb5()
n=e.gey()
m=b.z
m.toString
a1=n.ghQ(n)
a2=n.ghR(n)
a5=n.ghS()
n=n.ghP()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gb5()
if(!C.b.F(k,n)){n.a=k.length
k.push(n)}n=e.gb5()
m=n.gcC(n)
if(m){m=b.dy
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.giL()){n=e.giJ()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.giI()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gdM()){n=e.gdA()
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
o=b2.a.cr.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.f.b){b2.an(k,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.ar(b3.dR,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga4(p).cz(0)}b3=b3.id
b3.toString
b3.am(p.ag(0,!0))}if(r.db){b2.an(k,b2.ch)
b3=b2.a
p=b2.ch
b3.hi(b3.dS,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.dT
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.an(k,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.ar(b3.dU,p)}b3=r.x
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.cy.ch
o=o.dV
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.dW
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.an(k,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.ar(b3.dX,p)}}b3=r.y
p=b3.a
o=!p
if(!o||b3.b||!1){if(p){p=b2.a
n=b2.db.f
p=p.dY
p.a.uniform1f(p.d,n)}if(b3.b){b2.an(k,b2.db.d)
p=b2.a
n=b2.db.d
p.ar(p.dZ,n)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(p=b4.a,i=0;i<k.length;++i){n=k[i]
if(!n.c&&n.d){n.c=!0
p.activeTexture(33984+n.a)
p.bindTexture(3553,n.b)}}n=b5.e
n.a2(b4)
n.ak(b4)
n.av(b4)
if(!o||b3.b||!1)p.disable(3042)
for(i=0;i<k.length;++i){b3=k[i]
if(b3.c){b3.c=!1
p.activeTexture(33984+b3.a)
p.bindTexture(3553,null)}}b3=b2.a
b3.toString
p.useProgram(null)
b3.x.dK()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.d4().bg}}
O.iH.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.dU(a,C.c.a8(b+3,4)*4))}}
O.iI.prototype={
$2:function(a,b){return J.dM(a.a,b.a)}}
O.iJ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.e2(a,C.c.a8(b+3,4)*4))}}
O.iK.prototype={
$2:function(a,b){return J.dM(a.a,b.a)}}
O.iL.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.eJ(a,C.c.a8(b+3,4)*4))}}
O.iM.prototype={
$2:function(a,b){return J.dM(a.a,b.a)}}
O.iN.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.eX(a,C.c.a8(b+3,4)*4))}}
O.iO.prototype={
$2:function(a,b){return J.dM(a.a,b.a)}}
O.iB.prototype={
aG:function(){var s,r=this
r.cW()
s=r.f
$.E().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.z(r.b,s,1)
s.b=!0
r.a.V(s)}}}
O.cQ.prototype={
V:function(a){return this.a.V(a)},
b8:function(){return this.V(null)},
aG:function(){},
c4:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aG()
s=q.a
s.a=null
s.V(null)}}}
O.iC.prototype={}
O.aV.prototype={
di:function(a){var s,r,q=this
if(!q.f.q(0,a)){s=q.f
q.f=a
r=new D.z(q.b+".color",s,a)
r.b=!0
q.a.V(r)}},
aG:function(){this.cW()
this.di(new V.a_(1,1,1))},
sb_:function(a,b){this.c4(new A.a2(!0,this.c.b,!1))
this.di(b)}}
O.iE.prototype={}
O.iF.prototype={
aG:function(){var s,r=this
r.cX()
s=r.ch
$.E().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.z(r.b+".refraction",s,1)
s.b=!0
r.a.V(s)}}}
O.iG.prototype={
dj:function(a){var s=this,r=s.ch
$.E().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.z(s.b+".shininess",r,a)
r.b=!0
s.a.V(r)}},
aG:function(){this.cX()
this.dj(100)}}
O.eR.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.G():s},
V:function(a){var s=this.e
if(s!=null)s.C(a)},
b8:function(){return this.V(null)},
eg:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.eS(r,l)
s.cY(r,l)
s.e4(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.dw(s)}m.a=s}if(b.e==null){r=b.d.dG(new Z.fz(a.a),$.aM())
r.aJ($.aM()).e=m.a.z.c
b.e=r}r=m.c
if(r!=null){r.a=1
if(!r.c&&r.d>=6){r.c=!0
q=a.a
q.activeTexture(33985)
q.bindTexture(34067,r.b)}}r=a.d
q=a.c
p=m.a
p.a2(a)
o=m.b
n=p.Q
n.a.uniform1f(n.d,o)
o=p.ch
o.a.uniform1f(o.d,r/q)
q=m.c
p.cy.ex(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.ga4(q).cz(0)
p=p.db
p.toString
p.am(q.ag(0,!0))
r=b.e
if(r instanceof Z.co){r.a2(a)
r.ak(a)
r.av(a)}else b.e=null
r=m.a
r.toString
q=a.a
q.useProgram(null)
r.x.dK()
r=m.c
if(r!=null)if(r.c){r.c=!1
q.activeTexture(33984+r.a)
q.bindTexture(34067,null)}}}
O.f7.prototype={}
T.fa.prototype={}
T.ji.prototype={}
T.jj.prototype={
gp:function(){var s=this.y
return s==null?this.y=D.G():s}}
T.jk.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.G():s}}
T.jl.prototype={
aT:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.a0(s,"load",new T.jm(this,s,!1,b,!1,d,a),!1)},
hf:function(a,b,c){var s,r,q,p
b=V.dJ(b)
s=V.dJ(a.width)
r=V.dJ(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.lh()
q.width=s
q.height=r
p=C.i.es(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.qJ(p.getImageData(0,0,q.width,q.height))}}}
T.jm.prototype={
$1:function(a){var s=this,r=s.a,q=r.hf(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.D.iy(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.ck()}++r.e}}
X.hR.prototype={
gp:function(){var s=this.fr
return s==null?this.fr=D.G():s},
a1:function(a){var s=this.fr
if(s!=null)s.C(a)},
say:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
s=new D.z("width",s,b)
s.b=!0
r.a1(s)}},
sat:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
s=new D.z("height",s,b)
s.b=!0
r.a1(s)}},
a2:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=3553,c=36161,b=36160
if(f.y==null){s=a.a
r=f.ch
q=f.a
p=f.b
o=s.getParameter(3379)
n=V.dJ(q)
m=V.dJ(p)
o=V.dJ(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
s.bindTexture(d,l)
s.texParameteri(d,10242,33071)
s.texParameteri(d,10243,33071)
s.texParameteri(d,10241,9729)
s.texParameteri(d,10240,9729)
C.D.el(s,d,0,6408,n,m,0,6408,5121,e)
s.bindTexture(d,e)
k=T.mL(l)
k.e=q
k.f=p
k.r=n
k.x=m
if(!k.d){k.d=!0
q=k.y
if(q!=null)q.ck()}r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
r=r.y
if(r!=null)r.ck()
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
a.c=C.d.a6(q*f.a)
p=r.d
a.d=C.d.a6(p*f.b)
j=r.a
i=f.c
h=C.d.a6(j*i)
r=r.b
j=f.d
s.viewport(h,C.d.a6(r*j),C.d.a6(q*i),C.d.a6(p*j))
s.clearDepth(f.db)
if(f.cy){r=f.cx
s.clearColor(r.a,r.b,r.c,r.d)
g=16640}else g=256
if(g>0)s.clear(g)},
av:function(a){a.a.bindFramebuffer(36160,null)}}
X.lg.prototype={}
X.ij.prototype={
gp:function(){var s=this.x
return s==null?this.x=D.G():s},
a2:function(a){var s,r,q,p,o,n,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
s=m.drawingBufferWidth
r=m.drawingBufferHeight
q=this.r
p=q.a
if(typeof s!=="number")return H.v(s)
o=C.d.a6(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.d.a6(p*r)
p=C.d.a6(q.c*s)
a.c=p
q=C.d.a6(q.d*r)
a.d=q
m.viewport(o,n,p,q)
m.clearDepth(this.c)
q=this.a
m.clearColor(q.a,q.b,q.c,q.d)
m.clear(16640)},
av:function(a){}}
X.io.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.G():s},
a2:function(a){var s
a.cy.bE(V.bX())
s=V.bX()
a.db.bE(s)},
av:function(a){a.cy.aL()
a.db.aL()}}
X.eC.prototype={
gp:function(){var s=this.f
return s==null?this.f=D.G():s},
a1:function(a){var s=this.f
if(s!=null)s.C(a)},
eU:function(){return this.a1(null)},
a2:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.aW(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bE(i)
p=$.mw
if(p==null){p=V.my()
o=V.lC()
n=$.mW
p=V.mp(p,o,n==null?$.mW=new V.C(0,0,-1):n)
$.mw=p
s=p}else s=p
p=q.b
if(p!=null){r=p.aO(0,a,q)
if(r!=null)s=r.t(0,s)}a.db.bE(s)},
av:function(a){a.cy.aL()
a.db.aL()}}
X.jh.prototype={}
V.b8.prototype={
bp:function(a){this.b=new P.il(C.U)
this.c=null
this.d=H.c([],t.u)},
N:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.c([],t.k))
s=a.split("\n")
for(j=s.length,r=t.k,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.c([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.f3(o,0,o.length)
l=m==null?o:m
C.S.ev(n,H.m0(l," ","&nbsp;"))
l=n.style
l.color=b
C.b.gaD(k.d).push(n)}},
ed:function(a,b){var s,r,q,p=this
p.d=H.c([],t.u)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bv()
r.toString
q=new H.p(s)
q=new P.bH(r.cO(new H.bd(q,q.gm(q))).a())
for(;q.v();)p.bD(q.gB(q))}}
V.l6.prototype={
$1:function(a){var s=C.d.en(this.a.gi1(),2)
if(s!=="0.00")P.m_(s+" fps")}}
V.e0.prototype={
bD:function(a){var s=this
switch(a.a){case"Class":s.N(a.b,"#551")
break
case"Comment":s.N(a.b,"#777")
break
case"Id":s.N(a.b,"#111")
break
case"Num":s.N(a.b,"#191")
break
case"Reserved":s.N(a.b,"#119")
break
case"String":s.N(a.b,"#171")
break
case"Symbol":s.N(a.b,"#616")
break
case"Type":s.N(a.b,"#B11")
break
case"Whitespace":s.N(a.b,"#111")
break}},
bv:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()\\-+*%!&|=.,?:;",i="OpenDoubleStr",h="CloseDoubleStr",g="EscDoubleStr",f="OpenSingleStr",e="CloseSingleStr",d="EscSingleStr",c="Slash",b="Comment",a="EndComment",a0="MLComment",a1="MLCStar",a2="Whitespace",a3=L.jq()
a3.d=a3.k(0,p)
s=a3.k(0,p).j(0,o)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.Q("a","z")
s.a.push(r)
r=K.Q("A","Z")
s.a.push(r)
r=a3.k(0,o).j(0,o)
s=K.t(new H.p("_"))
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
r=K.t(new H.p("."))
s.a.push(r)
r=a3.k(0,m).j(0,l)
s=K.Q("0","9")
r.a.push(s)
s=a3.k(0,l).j(0,l)
r=K.Q("0","9")
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
a3.k(0,i).j(0,i).a.push(new K.b6())
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
a3.k(0,f).j(0,f).a.push(new K.b6())
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
r=new K.ac()
q=t.B
r.a=H.c([],q)
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
r=new K.ac()
r.a=H.c([],q)
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
r.d=r.a.R("Num")
r=a3.k(0,l)
r.d=r.a.R("Num")
r=a3.k(0,k)
r.d=r.a.R("Symbol")
r=a3.k(0,h)
r.d=r.a.R("String")
r=a3.k(0,e)
r.d=r.a.R("String")
r=a3.k(0,a)
r.d=r.a.R(b)
r=a3.k(0,a2)
r.d=r.a.R(a2)
r=a3.k(0,o)
r=r.d=r.a.R(o)
s=t.i
r.aM(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aM(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aM(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a3}}
V.e8.prototype={
bD:function(a){var s=this
switch(a.a){case"Builtin":s.N(a.b,"#411")
break
case"Comment":s.N(a.b,"#777")
break
case"Id":s.N(a.b,"#111")
break
case"Num":s.N(a.b,"#191")
break
case"Preprocess":s.N(a.b,"#737")
break
case"Reserved":s.N(a.b,"#119")
break
case"Symbol":s.N(a.b,"#611")
break
case"Type":s.N(a.b,"#171")
break
case"Whitespace":s.N(a.b,"#111")
break}},
bv:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()[]\\-+*%!&|=.,?:;",i="Slash",h="Comment",g="EndComment",f="Preprocess",e="EndPreprocess",d="Whitespace",c=L.jq()
c.d=c.k(0,p)
s=c.k(0,p).j(0,o)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.Q("a","z")
s.a.push(r)
r=K.Q("A","Z")
s.a.push(r)
r=c.k(0,o).j(0,o)
s=K.t(new H.p("_"))
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
r=K.t(new H.p("."))
s.a.push(r)
r=c.k(0,m).j(0,l)
s=K.Q("0","9")
r.a.push(s)
s=c.k(0,l).j(0,l)
r=K.Q("0","9")
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
c.k(0,i).j(0,k).a.push(new K.b6())
r=c.k(0,h).j(0,g)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,h).j(0,h)
r=new K.ac()
q=t.B
r.a=H.c([],q)
s.a.push(r)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,p).j(0,f)
r=K.t(new H.p("#"))
s.a.push(r)
r=c.k(0,f).j(0,f)
s=new K.ac()
s.a=H.c([],q)
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
s.d=s.a.R("Num")
s=c.k(0,l)
s.d=s.a.R("Num")
s=c.k(0,k)
s.d=s.a.R("Symbol")
s=c.k(0,g)
s.d=s.a.R(h)
s=c.k(0,e)
s.d=s.a.R(f)
s=c.k(0,d)
s.d=s.a.R(d)
s=c.k(0,o)
s=s.d=s.a.R(o)
r=t.i
s.aM(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],r))
s.aM(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],r))
s.aM(0,"Builtin",H.c(["gl_FragColor","gl_Position"],r))
return c}}
V.ea.prototype={
bD:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.N(a.b,"#911")
s.N("=",r)
break
case"Id":s.N(a.b,r)
break
case"Other":s.N(a.b,r)
break
case"Reserved":s.N(a.b,"#119")
break
case"String":s.N(a.b,"#171")
break
case"Symbol":s.N(a.b,"#616")
break}},
bv:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.jq()
j.d=j.k(0,q)
s=j.k(0,q).j(0,p)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.Q("a","z")
s.a.push(r)
r=K.Q("A","Z")
s.a.push(r)
r=j.k(0,p).j(0,p)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.Q("0","9")
r.a.push(s)
s=K.Q("a","z")
r.a.push(s)
s=K.Q("A","Z")
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
j.k(0,m).j(0,m).a.push(new K.b6())
j.k(0,q).j(0,k).a.push(new K.b6())
s=j.k(0,k).j(0,k)
r=new K.ac()
r.a=H.c([],t.B)
s.a.push(r)
s=K.t(new H.p('</\\-!>=_"'))
r.a.push(s)
s=K.Q("a","z")
r.a.push(s)
s=K.Q("A","Z")
r.a.push(s)
s=j.k(0,n)
s.d=s.a.R("Symbol")
s=j.k(0,l)
s.d=s.a.R("String")
s=j.k(0,p)
r=s.a.R(p)
s.d=r
r.aM(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],t.i))
r=j.k(0,o)
r.d=r.a.R(o)
r=j.k(0,k)
r.d=r.a.R(k)
return j}}
V.eE.prototype={
ed:function(a,b){this.d=H.c([],t.u)
this.N(C.b.j(b,"\n"),"#111")},
bD:function(a){},
bv:function(){return null}}
V.iY.prototype={
dr:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.mR().gcJ().h(0,H.f(s))
if(r==null)if(d){c.$0()
k.dq(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.le(k.c).n(0,o)
m=W.os("radio")
m.checked=q
m.name=s
W.a0(m,"change",new V.iZ(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.le(k.c).n(0,p.createElement("br"))},
aA:function(a,b,c){return this.dr(a,b,c,!1)},
dq:function(a){var s,r,q=P.mR(),p=t.X,o=P.oC(q.gcJ(),p,p)
o.l(0,this.a,a)
s=q.eh(0,o)
p=window.history
r=s.gc9()
p.toString
p.replaceState(new P.kh([],[]).bH(""),"",r)}}
V.iZ.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.dq(s.d)}}}
V.jb.prototype={
eJ:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.a0(o,"scroll",new V.jd(m),!1)},
dv:function(a){var s,r,q,p,o,n,m,l
this.hl()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.i4(a)
q.toString
p=new H.p(p)
p=new P.bH(q.cO(new H.bd(p,p.gm(p))).a())
for(;p.v();){q=p.gB(p)
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
if(H.nG(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.d(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kp(C.x,q,C.e,!1)
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
er:function(a){var s,r,q,p=new V.e0("dart")
p.bp("dart")
s=new V.e8("glsl")
s.bp("glsl")
r=new V.ea("html")
r.bp("html")
q=C.b.hY(H.c([p,s,r],t.b7),new V.je(a))
if(q!=null)return q
p=new V.eE("plain")
p.bp("plain")
return p},
ds:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.c([],t.V)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.dI(q).ab(q,"+")){b2[r]=C.a.ai(q,1)
a8.push(1)
s=!0}else if(C.a.ab(q,"-")){b2[r]=C.a.ai(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.er(b0)
p.ed(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.kp(C.x,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.m6()
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
for(a4=C.b.gP(q);a4.v();)b.appendChild(a4.gB(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
hw:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
hl:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=L.jq()
s.d=s.k(0,o)
r=s.k(0,o).j(0,n)
q=K.t(new H.p("*"))
r.a.push(q)
r.c=!0
r=s.k(0,n).j(0,n)
q=new K.ac()
p=t.B
q.a=H.c([],p)
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
q=new K.ac()
q.a=H.c([],p)
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
q=new K.ac()
q.a=H.c([],p)
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
r=new K.ac()
r.a=H.c([],p)
q.a.push(r)
q=K.t(new H.p("|]"))
r.a.push(q)
q=s.k(0,i).j(0,h)
r=K.t(new H.p("]"))
q.a.push(r)
q.c=!0
q=s.k(0,i).j(0,i)
r=new K.ac()
r.a=H.c([],p)
q.a.push(r)
q=K.t(new H.p("|]"))
r.a.push(q)
s.k(0,o).j(0,g).a.push(new K.b6())
q=s.k(0,g).j(0,g)
r=new K.ac()
r.a=H.c([],p)
q.a.push(r)
q=K.t(new H.p("*_`["))
r.a.push(q)
q=s.k(0,"BoldEnd")
q.d=q.a.R(n)
q=s.k(0,l)
q.d=q.a.R(m)
q=s.k(0,"CodeEnd")
q.d=q.a.R(k)
q=s.k(0,h)
q.d=q.a.R("Link")
q=s.k(0,g)
q.d=q.a.R(g)
this.b=s}}
V.jd.prototype={
$1:function(a){P.mN(C.n,new V.jc(this.a))}}
V.jc.prototype={
$0:function(){var s=C.d.a6(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
V.je.prototype={
$1:function(a){return a.a===this.a}}
V.kW.prototype={
$0:function(){this.a.saa(0,F.kE(1,null,null,1))}}
V.kX.prototype={
$0:function(){this.a.saa(0,F.kE(15,null,new V.kV(),15))}}
V.kV.prototype={
$3:function(a,b,c){var s=Math.cos(c*4*3.141592653589793+3.141592653589793),r=Math.cos(b*4*3.141592653589793+3.141592653589793),q=a.f,p=new V.C(q.a,q.b,q.c).D()
q=a.f
r=p.t(0,s*0.1+r*0.1)
a.sZ(0,q.A(0,new V.O(r.a,r.b,r.c)))}}
V.kY.prototype={
$0:function(){this.a.saa(0,F.ns(!0,1,30,1))}}
V.kZ.prototype={
$0:function(){this.a.saa(0,F.ns(!1,5,30,0))}}
V.l_.prototype={
$0:function(){this.a.saa(0,F.nt(!0,!0,25,new V.kU(),50))}}
V.kU.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}}
V.l0.prototype={
$0:function(){this.a.saa(0,F.nF(6,null,6))}}
V.l1.prototype={
$0:function(){this.a.saa(0,F.nF(10,new V.kT(),10))}}
V.kT.prototype={
$2:function(a,b){var s=a-0.5,r=b-0.5
return Math.cos(Math.sqrt(s*s+r*r)*3.141592653589793)*0.3}}
V.l2.prototype={
$0:function(){this.a.saa(0,F.nH())}}
V.l3.prototype={
$0:function(){this.a.saa(0,F.qW())}}
V.l4.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a,p=t.s
s.ds("Vertex Shader","glsl",0,H.c((q==null?null:q.c).split("\n"),p))
r=r.a
s.ds("Fragment Shader","glsl",0,H.c((r==null?null:r.d).split("\n"),p))}};(function aliases(){var s=J.a.prototype
s.eB=s.i
s=J.bc.prototype
s.eD=s.i
s=P.h.prototype
s.eC=s.bI
s=W.F.prototype
s.bK=s.ao
s=W.dn.prototype
s.eE=s.aB
s=K.e9.prototype
s.eA=s.aK
s.cV=s.i
s=O.cQ.prototype
s.cW=s.aG
s=O.aV.prototype
s.cX=s.aG})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pX","ox",22)
r(P,"qC","p8",7)
r(P,"qD","p9",7)
r(P,"qE","pa",7)
q(P,"nr","qx",8)
r(W,"t9","i7",23)
p(W,"qP",4,null,["$4"],["pb"],15,0)
p(W,"qQ",4,null,["$4"],["pc"],15,0)
var j
o(j=E.bz.prototype,"geb",0,0,null,["$1","$0"],["ec","ie"],0,0)
o(j,"ge9",0,0,null,["$1","$0"],["ea","ia"],0,0)
n(j,"gi8","i9",4)
n(j,"gib","ic",4)
o(j=E.fb.prototype,"gcZ",0,0,null,["$1","$0"],["d0","d_"],0,0)
m(j,"giu","ei",8)
l(j=X.fu.prototype,"gfB","fC",5)
l(j,"gfm","fn",5)
l(j,"gft","fu",2)
l(j,"gfF","fG",9)
l(j,"gfD","fE",9)
l(j,"gfJ","fK",2)
l(j,"gfN","fO",2)
l(j,"gfz","fA",2)
l(j,"gfL","fM",2)
l(j,"gfv","fw",2)
l(j,"gfP","fQ",20)
l(j,"gfR","fS",5)
l(j,"gh6","h7",6)
l(j,"gh2","h3",6)
l(j,"gh4","h5",6)
o(D.bx.prototype,"geM",0,0,null,["$1","$0"],["aE","eN"],0,0)
o(j=D.cH.prototype,"gdd",0,0,null,["$1","$0"],["de","fH"],0,0)
l(j,"gfT","fU",21)
n(j,"gfg","fh",10)
n(j,"gfX","fY",10)
k(V.ae.prototype,"gm","cA",11)
k(V.C.prototype,"gm","cA",11)
o(j=U.bT.prototype,"gaU",0,0,null,["$1","$0"],["H","af"],0,0)
n(j,"geO","eP",12)
n(j,"gfV","fW",12)
o(j=U.d8.prototype,"gaU",0,0,null,["$1","$0"],["H","af"],0,0)
l(j,"gbU","bV",1)
l(j,"gbW","bX",1)
l(j,"gbY","bZ",1)
o(j=U.d9.prototype,"gaU",0,0,null,["$1","$0"],["H","af"],0,0)
l(j,"gbU","bV",1)
l(j,"gbW","bX",1)
l(j,"gbY","bZ",1)
l(j,"gf9","fa",1)
l(j,"gfb","fc",1)
l(j,"ghs","ht",1)
l(j,"ghq","hr",1)
l(j,"gho","hp",1)
l(U.da.prototype,"gfe","ff",1)
o(j=M.cp.prototype,"gX",0,0,null,["$1","$0"],["Y","b7"],0,0)
n(j,"gfZ","h_",13)
n(j,"gh0","h1",13)
o(M.ct.prototype,"gX",0,0,null,["$1","$0"],["Y","b7"],0,0)
o(j=M.cz.prototype,"gX",0,0,null,["$1","$0"],["Y","b7"],0,0)
n(j,"gfo","fp",4)
n(j,"gfq","fs",4)
o(j=O.en.prototype,"gaR",0,0,null,["$1","$0"],["V","b8"],0,0)
o(j,"ghd",0,0,null,["$1","$0"],["dg","he"],0,0)
n(j,"gfi","fj",14)
n(j,"gfk","fl",14)
o(O.cQ.prototype,"gaR",0,0,null,["$1","$0"],["V","b8"],0,0)
o(O.eR.prototype,"gaR",0,0,null,["$1","$0"],["V","b8"],0,0)
o(X.eC.prototype,"geT",0,0,null,["$1","$0"],["a1","eU"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.N,null)
q(P.N,[H.lr,J.a,J.a8,P.L,P.dg,P.h,H.bd,P.ec,H.cB,H.fr,H.cr,H.jt,H.iW,H.hg,H.bw,P.W,H.iu,H.ek,H.ee,H.au,H.fT,P.du,P.ce,P.bH,P.fB,P.d_,P.f1,P.d1,P.kt,P.dm,P.k9,P.df,P.i,P.hv,P.cO,P.dX,P.im,P.kr,P.kq,P.aA,P.ak,P.R,P.by,P.eB,P.cZ,P.fQ,P.ii,P.aC,P.n,P.I,P.ar,P.y,P.T,P.bI,P.jE,P.ha,W.hZ,W.ln,W.lE,W.cd,W.M,W.cW,W.dn,W.hl,W.cC,W.an,W.kd,W.hw,P.kg,P.dw,P.h8,P.bi,K.b6,K.e9,K.iA,K.j_,K.j5,L.eZ,L.fc,L.fd,L.jp,O.a9,O.cR,E.hU,E.bz,E.bQ,E.c2,E.fN,E.j0,E.fb,Z.fy,Z.fz,Z.co,Z.bV,Z.bj,D.hV,D.bR,D.U,X.dW,X.eg,X.is,X.iy,X.aq,X.iS,X.jr,X.fu,D.dT,D.bx,D.V,D.eH,D.eW,V.a_,V.aj,V.ia,V.eo,V.be,V.a4,V.O,V.as,V.eM,V.ae,V.C,U.d8,U.d9,U.da,M.ct,M.cz,M.a6,A.dQ,A.hO,A.a2,A.dU,A.e2,A.eJ,A.eX,A.iD,A.d3,A.d4,A.d6,A.d7,A.fh,A.jB,F.e4,F.ie,F.ej,F.it,F.eG,F.j6,F.j8,F.j9,F.ja,F.fv,F.jS,F.jT,F.jW,F.jY,F.jZ,F.k_,O.f7,O.cQ,O.iE,T.jl,X.jh,X.lg,X.io,X.eC,V.b8,V.iY,V.jb])
q(J.a,[J.ed,J.cG,J.bc,J.w,J.bC,J.aS,H.cS,H.X,W.e,W.hM,W.bt,W.aP,W.K,W.fG,W.ap,W.i1,W.i2,W.fI,W.cw,W.fK,W.i3,W.j,W.fR,W.aD,W.ik,W.fV,W.bB,W.ix,W.iP,W.fZ,W.h_,W.aF,W.h0,W.h2,W.aG,W.h6,W.h9,W.aH,W.hb,W.aI,W.hh,W.aw,W.hn,W.jo,W.aJ,W.hp,W.js,W.jJ,W.hx,W.hz,W.hB,W.hD,W.hF,P.aT,P.fX,P.aX,P.h4,P.iX,P.hi,P.aZ,P.hr,P.hP,P.fD,P.eN,P.he])
q(J.bc,[J.eD,J.bG,J.aE])
r(J.iq,J.w)
q(J.bC,[J.cF,J.cE])
q(P.L,[H.eh,H.ex,H.ef,H.fq,H.eP,H.fO,P.dP,P.ey,P.ai,P.fs,P.fp,P.c7,P.dY,P.e_])
r(P.cK,P.dg)
q(P.cK,[H.c9,W.fE,W.a1,P.e6])
r(H.p,H.c9)
q(P.h,[H.l,H.aU,H.b1,P.cD])
q(H.l,[H.cL,H.cI])
r(H.cx,H.aU)
q(P.ec,[H.el,H.fA])
r(H.cP,H.cL)
r(H.cs,H.cr)
q(H.bw,[H.f6,H.ir,H.kM,H.kN,H.kO,P.k3,P.k2,P.k4,P.k5,P.km,P.kl,P.kC,P.kb,P.kc,P.iv,P.iz,P.jM,P.jN,P.i4,P.i5,P.jI,P.jF,P.jG,P.jH,P.ko,P.kn,P.kx,P.kw,P.ky,P.kz,W.i6,W.iQ,W.iR,W.j4,W.jg,W.k6,W.iU,W.iT,W.ke,W.kf,W.kk,W.ks,P.ki,P.kj,P.kD,P.ig,P.ih,P.hQ,E.j1,E.j2,E.j3,E.jn,D.ic,D.id,F.ku,F.kF,F.kH,F.kI,F.kJ,F.l7,F.l8,F.l9,F.kS,F.kG,F.k1,F.k0,F.jU,F.jV,O.iH,O.iI,O.iJ,O.iK,O.iL,O.iM,O.iN,O.iO,T.jm,V.l6,V.iZ,V.jd,V.jc,V.je,V.kW,V.kX,V.kV,V.kY,V.kZ,V.l_,V.kU,V.l0,V.l1,V.kT,V.l2,V.l3,V.l4])
q(H.f6,[H.f_,H.bP])
r(P.cN,P.W)
q(P.cN,[H.D,W.fC])
r(H.c0,H.X)
q(H.c0,[H.di,H.dk])
r(H.dj,H.di)
r(H.bE,H.dj)
r(H.dl,H.dk)
r(H.cT,H.dl)
q(H.cT,[H.es,H.et,H.eu,H.ev,H.ew,H.cU,H.c1])
r(H.dv,H.fO)
r(P.dr,P.cD)
r(P.ka,P.kt)
r(P.de,P.dm)
r(P.dz,P.cO)
r(P.ca,P.dz)
q(P.dX,[P.hS,P.i8])
r(P.dZ,P.f1)
q(P.dZ,[P.hT,P.il,P.jO,P.jL])
r(P.jK,P.i8)
q(P.R,[P.Z,P.k])
q(P.ai,[P.c4,P.eb])
r(P.fH,P.bI)
q(W.e,[W.x,W.e5,W.bY,W.av,W.dp,W.ax,W.ad,W.ds,W.fx,W.cb,P.dS,P.b7])
q(W.x,[W.F,W.aB,W.cc])
q(W.F,[W.r,P.m])
q(W.r,[W.dN,W.dO,W.bO,W.bu,W.bv,W.ba,W.e7,W.bU,W.bW,W.eQ,W.bh,W.d0,W.f4,W.f5,W.c8])
r(W.hY,W.aP)
r(W.cu,W.fG)
q(W.ap,[W.i_,W.i0])
r(W.fJ,W.fI)
r(W.cv,W.fJ)
r(W.fL,W.fK)
r(W.e3,W.fL)
r(W.al,W.bt)
r(W.fS,W.fR)
r(W.bS,W.fS)
r(W.fW,W.fV)
r(W.bA,W.fW)
r(W.b0,W.j)
q(W.b0,[W.bD,W.am,W.bF])
r(W.ep,W.fZ)
r(W.eq,W.h_)
r(W.h1,W.h0)
r(W.er,W.h1)
r(W.h3,W.h2)
r(W.cV,W.h3)
r(W.h7,W.h6)
r(W.eF,W.h7)
r(W.eO,W.h9)
r(W.dq,W.dp)
r(W.eU,W.dq)
r(W.hc,W.hb)
r(W.eV,W.hc)
r(W.f0,W.hh)
r(W.ho,W.hn)
r(W.f8,W.ho)
r(W.dt,W.ds)
r(W.f9,W.dt)
r(W.hq,W.hp)
r(W.fe,W.hq)
r(W.bk,W.am)
r(W.hy,W.hx)
r(W.fF,W.hy)
r(W.dc,W.cw)
r(W.hA,W.hz)
r(W.fU,W.hA)
r(W.hC,W.hB)
r(W.dh,W.hC)
r(W.hE,W.hD)
r(W.hd,W.hE)
r(W.hG,W.hF)
r(W.hk,W.hG)
r(W.fM,W.fC)
r(W.fP,P.d_)
r(W.hm,W.dn)
r(P.kh,P.kg)
r(P.aa,P.h8)
r(P.fY,P.fX)
r(P.ei,P.fY)
r(P.h5,P.h4)
r(P.ez,P.h5)
r(P.c5,P.m)
r(P.hj,P.hi)
r(P.f2,P.hj)
r(P.hs,P.hr)
r(P.ff,P.hs)
r(P.dR,P.fD)
r(P.eA,P.b7)
r(P.hf,P.he)
r(P.eY,P.hf)
q(K.e9,[K.ac,L.fg])
q(E.hU,[Z.dV,A.c6,T.fa])
q(D.U,[D.aQ,D.aR,D.z,X.eI])
q(X.eI,[X.cM,X.bZ,X.c_,X.d2])
q(O.a9,[D.cH,U.bT,M.cp])
q(D.hV,[U.hX,U.S])
q(U.S,[U.cq,U.cY])
q(A.c6,[A.em,A.eS])
q(A.fh,[A.fj,A.jy,A.jz,A.jA,A.jw,A.fi,A.jx,A.fk,A.fl,A.jC,A.fm,A.d5,A.fn,A.fo])
r(F.jf,F.ie)
r(F.jv,F.it)
r(F.jX,F.jY)
r(F.iV,F.jZ)
q(O.f7,[O.en,O.eR])
q(O.cQ,[O.iB,O.iC,O.aV])
q(O.aV,[O.iF,O.iG])
q(T.fa,[T.ji,T.jk])
r(T.jj,T.ji)
q(X.jh,[X.hR,X.ij])
q(V.b8,[V.e0,V.e8,V.ea,V.eE])
s(H.c9,H.fr)
s(H.di,P.i)
s(H.dj,H.cB)
s(H.dk,P.i)
s(H.dl,H.cB)
s(P.dg,P.i)
s(P.dz,P.hv)
s(W.fG,W.hZ)
s(W.fI,P.i)
s(W.fJ,W.M)
s(W.fK,P.i)
s(W.fL,W.M)
s(W.fR,P.i)
s(W.fS,W.M)
s(W.fV,P.i)
s(W.fW,W.M)
s(W.fZ,P.W)
s(W.h_,P.W)
s(W.h0,P.i)
s(W.h1,W.M)
s(W.h2,P.i)
s(W.h3,W.M)
s(W.h6,P.i)
s(W.h7,W.M)
s(W.h9,P.W)
s(W.dp,P.i)
s(W.dq,W.M)
s(W.hb,P.i)
s(W.hc,W.M)
s(W.hh,P.W)
s(W.hn,P.i)
s(W.ho,W.M)
s(W.ds,P.i)
s(W.dt,W.M)
s(W.hp,P.i)
s(W.hq,W.M)
s(W.hx,P.i)
s(W.hy,W.M)
s(W.hz,P.i)
s(W.hA,W.M)
s(W.hB,P.i)
s(W.hC,W.M)
s(W.hD,P.i)
s(W.hE,W.M)
s(W.hF,P.i)
s(W.hG,W.M)
s(P.fX,P.i)
s(P.fY,W.M)
s(P.h4,P.i)
s(P.h5,W.M)
s(P.hi,P.i)
s(P.hj,W.M)
s(P.hr,P.i)
s(P.hs,W.M)
s(P.fD,P.W)
s(P.he,P.i)
s(P.hf,W.M)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",Z:"double",R:"num",y:"String",aA:"bool",ar:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([U*])","~(U*)","~(am*)","ar(@,@)","~(k*,h<bz*>*)","~(j*)","~(bF*)","~(~())","~()","~(bD*)","~(k*,h<V*>*)","Z*()","~(k*,h<S*>*)","~(k*,h<a6*>*)","~(k*,h<be*>*)","aA(F,y,y,cd)","@(@)","ar(@)","ar(N?,N?)","bi(@,@)","~(bk*)","aA*(h<V*>*)","k(@,@)","y(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pv(v.typeUniverse,JSON.parse('{"aE":"bc","eD":"bc","bG":"bc","r4":"j","re":"j","r6":"b7","r5":"e","rl":"e","rn":"e","r3":"m","rf":"m","r7":"r","ri":"r","rg":"x","rd":"x","rN":"ad","rb":"b0","r8":"aB","ro":"aB","rm":"am","rh":"bA","rk":"bE","rj":"X","ed":{"aA":[]},"bc":{"ml":[],"aC":[]},"w":{"n":["1"],"l":["1"],"h":["1"]},"iq":{"w":["1"],"n":["1"],"l":["1"],"h":["1"]},"bC":{"Z":[],"R":[]},"cF":{"Z":[],"k":[],"R":[]},"cE":{"Z":[],"R":[]},"aS":{"y":[]},"eh":{"L":[]},"p":{"i":["k"],"n":["k"],"l":["k"],"h":["k"],"i.E":"k"},"l":{"h":["1"]},"cL":{"l":["1"],"h":["1"]},"aU":{"h":["2"],"h.E":"2"},"cx":{"aU":["1","2"],"l":["2"],"h":["2"],"h.E":"2"},"cP":{"cL":["2"],"l":["2"],"h":["2"],"h.E":"2"},"b1":{"h":["1"],"h.E":"1"},"c9":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cr":{"I":["1","2"]},"cs":{"I":["1","2"]},"ex":{"L":[]},"ef":{"L":[]},"fq":{"L":[]},"bw":{"aC":[]},"f6":{"aC":[]},"f_":{"aC":[]},"bP":{"aC":[]},"eP":{"L":[]},"D":{"W":["1","2"],"I":["1","2"]},"cI":{"l":["1"],"h":["1"],"h.E":"1"},"ee":{"mF":[]},"c0":{"A":["1"],"X":[]},"bE":{"i":["Z"],"A":["Z"],"n":["Z"],"X":[],"l":["Z"],"h":["Z"],"i.E":"Z"},"cT":{"i":["k"],"A":["k"],"n":["k"],"X":[],"l":["k"],"h":["k"]},"es":{"i":["k"],"A":["k"],"n":["k"],"X":[],"l":["k"],"h":["k"],"i.E":"k"},"et":{"i":["k"],"A":["k"],"n":["k"],"X":[],"l":["k"],"h":["k"],"i.E":"k"},"eu":{"i":["k"],"A":["k"],"n":["k"],"X":[],"l":["k"],"h":["k"],"i.E":"k"},"ev":{"i":["k"],"A":["k"],"n":["k"],"X":[],"l":["k"],"h":["k"],"i.E":"k"},"ew":{"i":["k"],"A":["k"],"n":["k"],"X":[],"l":["k"],"h":["k"],"i.E":"k"},"cU":{"i":["k"],"A":["k"],"n":["k"],"X":[],"l":["k"],"h":["k"],"i.E":"k"},"c1":{"i":["k"],"bi":[],"A":["k"],"n":["k"],"X":[],"l":["k"],"h":["k"],"i.E":"k"},"fO":{"L":[]},"dv":{"L":[]},"du":{"d1":[]},"dr":{"h":["1"],"h.E":"1"},"de":{"dm":["1"],"l":["1"],"h":["1"]},"cD":{"h":["1"]},"cK":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cN":{"W":["1","2"],"I":["1","2"]},"W":{"I":["1","2"]},"cO":{"I":["1","2"]},"ca":{"I":["1","2"]},"dm":{"l":["1"],"h":["1"]},"Z":{"R":[]},"dP":{"L":[]},"ey":{"L":[]},"ai":{"L":[]},"c4":{"L":[]},"eb":{"L":[]},"fs":{"L":[]},"fp":{"L":[]},"c7":{"L":[]},"dY":{"L":[]},"eB":{"L":[]},"cZ":{"L":[]},"e_":{"L":[]},"k":{"R":[]},"n":{"l":["1"],"h":["1"]},"bI":{"ft":[]},"ha":{"ft":[]},"fH":{"ft":[]},"r":{"F":[],"x":[],"e":[]},"dN":{"F":[],"x":[],"e":[]},"dO":{"F":[],"x":[],"e":[]},"bO":{"F":[],"x":[],"e":[]},"bu":{"F":[],"x":[],"e":[]},"bv":{"F":[],"x":[],"e":[]},"aB":{"x":[],"e":[]},"ba":{"F":[],"x":[],"e":[]},"cv":{"i":["aa<R>"],"n":["aa<R>"],"A":["aa<R>"],"l":["aa<R>"],"h":["aa<R>"],"i.E":"aa<R>"},"cw":{"aa":["R"]},"e3":{"i":["y"],"n":["y"],"A":["y"],"l":["y"],"h":["y"],"i.E":"y"},"fE":{"i":["F"],"n":["F"],"l":["F"],"h":["F"],"i.E":"F"},"F":{"x":[],"e":[]},"al":{"bt":[]},"bS":{"i":["al"],"n":["al"],"A":["al"],"l":["al"],"h":["al"],"i.E":"al"},"e5":{"e":[]},"e7":{"F":[],"x":[],"e":[]},"bA":{"i":["x"],"n":["x"],"A":["x"],"l":["x"],"h":["x"],"i.E":"x"},"bU":{"F":[],"x":[],"e":[]},"bW":{"F":[],"x":[],"e":[]},"bD":{"j":[]},"bY":{"e":[]},"ep":{"W":["y","@"],"I":["y","@"]},"eq":{"W":["y","@"],"I":["y","@"]},"er":{"i":["aF"],"n":["aF"],"A":["aF"],"l":["aF"],"h":["aF"],"i.E":"aF"},"am":{"j":[]},"a1":{"i":["x"],"n":["x"],"l":["x"],"h":["x"],"i.E":"x"},"x":{"e":[]},"cV":{"i":["x"],"n":["x"],"A":["x"],"l":["x"],"h":["x"],"i.E":"x"},"eF":{"i":["aG"],"n":["aG"],"A":["aG"],"l":["aG"],"h":["aG"],"i.E":"aG"},"eO":{"W":["y","@"],"I":["y","@"]},"eQ":{"F":[],"x":[],"e":[]},"av":{"e":[]},"eU":{"i":["av"],"n":["av"],"A":["av"],"e":[],"l":["av"],"h":["av"],"i.E":"av"},"eV":{"i":["aH"],"n":["aH"],"A":["aH"],"l":["aH"],"h":["aH"],"i.E":"aH"},"f0":{"W":["y","y"],"I":["y","y"]},"bh":{"F":[],"x":[],"e":[]},"d0":{"F":[],"x":[],"e":[]},"f4":{"F":[],"x":[],"e":[]},"f5":{"F":[],"x":[],"e":[]},"c8":{"F":[],"x":[],"e":[]},"ax":{"e":[]},"ad":{"e":[]},"f8":{"i":["ad"],"n":["ad"],"A":["ad"],"l":["ad"],"h":["ad"],"i.E":"ad"},"f9":{"i":["ax"],"n":["ax"],"A":["ax"],"e":[],"l":["ax"],"h":["ax"],"i.E":"ax"},"bF":{"j":[]},"fe":{"i":["aJ"],"n":["aJ"],"A":["aJ"],"l":["aJ"],"h":["aJ"],"i.E":"aJ"},"b0":{"j":[]},"fx":{"e":[]},"bk":{"am":[],"j":[]},"cb":{"e":[]},"cc":{"x":[],"e":[]},"fF":{"i":["K"],"n":["K"],"A":["K"],"l":["K"],"h":["K"],"i.E":"K"},"dc":{"aa":["R"]},"fU":{"i":["aD?"],"n":["aD?"],"A":["aD?"],"l":["aD?"],"h":["aD?"],"i.E":"aD?"},"dh":{"i":["x"],"n":["x"],"A":["x"],"l":["x"],"h":["x"],"i.E":"x"},"hd":{"i":["aI"],"n":["aI"],"A":["aI"],"l":["aI"],"h":["aI"],"i.E":"aI"},"hk":{"i":["aw"],"n":["aw"],"A":["aw"],"l":["aw"],"h":["aw"],"i.E":"aw"},"fC":{"W":["y","y"],"I":["y","y"]},"fM":{"W":["y","y"],"I":["y","y"]},"cd":{"an":[]},"cW":{"an":[]},"dn":{"an":[]},"hm":{"an":[]},"hl":{"an":[]},"dw":{"bB":[]},"e6":{"i":["F"],"n":["F"],"l":["F"],"h":["F"],"i.E":"F"},"aa":{"h8":["1"]},"ei":{"i":["aT"],"n":["aT"],"l":["aT"],"h":["aT"],"i.E":"aT"},"ez":{"i":["aX"],"n":["aX"],"l":["aX"],"h":["aX"],"i.E":"aX"},"c5":{"m":[],"F":[],"x":[],"e":[]},"f2":{"i":["y"],"n":["y"],"l":["y"],"h":["y"],"i.E":"y"},"m":{"F":[],"x":[],"e":[]},"ff":{"i":["aZ"],"n":["aZ"],"l":["aZ"],"h":["aZ"],"i.E":"aZ"},"bi":{"n":["k"],"l":["k"],"h":["k"]},"dR":{"W":["y","@"],"I":["y","@"]},"dS":{"e":[]},"b7":{"e":[]},"eA":{"e":[]},"eY":{"i":["I<@,@>"],"n":["I<@,@>"],"l":["I<@,@>"],"h":["I<@,@>"],"i.E":"I<@,@>"},"a9":{"h":["1*"],"a9.T":"1"},"aQ":{"U":[]},"aR":{"U":[]},"z":{"U":[]},"cM":{"U":[]},"bZ":{"U":[]},"c_":{"U":[]},"eI":{"U":[]},"d2":{"U":[]},"dT":{"V":[]},"bx":{"V":[]},"cH":{"a9":["V*"],"h":["V*"],"a9.T":"V*"},"eH":{"V":[]},"eW":{"V":[]},"cq":{"S":[]},"bT":{"a9":["S*"],"S":[],"h":["S*"],"a9.T":"S*"},"cY":{"S":[]},"d8":{"S":[]},"d9":{"S":[]},"da":{"S":[]},"cp":{"a9":["a6*"],"a6":[],"h":["a6*"],"a9.T":"a6*"},"ct":{"a6":[]},"cz":{"a6":[]},"em":{"c6":[]},"eS":{"c6":[]},"e0":{"b8":[]},"e8":{"b8":[]},"ea":{"b8":[]},"eE":{"b8":[]}}'))
H.pu(v.typeUniverse,JSON.parse('{"a8":1,"l":1,"bd":1,"el":2,"fA":1,"cB":1,"fr":1,"c9":1,"cr":2,"ek":1,"c0":1,"bH":1,"d_":1,"f1":2,"df":1,"cD":1,"cK":1,"cN":2,"hv":2,"cO":2,"dg":1,"dz":2,"dX":2,"dZ":2,"ec":1,"fP":1,"M":1,"cC":1,"aQ":1,"aR":1,"z":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.lW
return{D:s("bO"),G:s("bt"),Y:s("bu"),gw:s("l<@>"),h:s("F"),C:s("L"),aD:s("j"),c8:s("al"),bX:s("bS"),Z:s("aC"),v:s("bB"),fS:s("bU"),gk:s("bW"),o:s("w<an>"),s:s("w<y>"),gn:s("w<@>"),t:s("w<k>"),x:s("w<dQ*>"),bb:s("w<dT*>"),am:s("w<dU*>"),g0:s("w<dV*>"),b7:s("w<b8*>"),cP:s("w<bx*>"),M:s("w<e2*>"),k:s("w<ba*>"),b:s("w<e4*>"),aZ:s("w<bV*>"),L:s("w<ej*>"),u:s("w<n<ba*>*>"),B:s("w<iA*>"),h8:s("w<be*>"),eb:s("w<eH*>"),cS:s("w<a4*>"),d1:s("w<eJ*>"),p:s("w<eG*>"),f2:s("w<a6*>"),du:s("w<eW*>"),cz:s("w<eX*>"),eG:s("w<d_<N*>*>"),i:s("w<y*>"),fG:s("w<f7*>"),bw:s("w<fa*>"),br:s("w<fg*>"),fj:s("w<fh*>"),d6:s("w<d3*>"),dv:s("w<d4*>"),hg:s("w<d5*>"),by:s("w<d6*>"),fF:s("w<d7*>"),j:s("w<fv*>"),m:s("w<Z*>"),V:s("w<k*>"),f:s("w<~(U*)*>"),T:s("cG"),eH:s("ml"),g:s("aE"),aU:s("A<@>"),h9:s("D<y*,c6*>"),cn:s("D<y*,eZ*>"),dO:s("D<y*,y*>"),w:s("D<y*,fd*>"),en:s("D<k*,n<d3*>*>"),af:s("D<k*,n<d4*>*>"),gr:s("D<k*,n<d6*>*>"),gb:s("D<k*,n<d7*>*>"),J:s("D<k*,fj*>"),E:s("D<k*,aA*>"),a:s("D<k*,k*>"),aH:s("n<@>"),eO:s("I<@,@>"),eM:s("cP<y*,y>"),bK:s("bY"),bZ:s("cS"),dD:s("X"),bm:s("c1"),P:s("ar"),K:s("N"),I:s("aa<R>"),fv:s("mF"),ew:s("c5"),N:s("y"),g7:s("m"),bY:s("bh"),aW:s("c8"),aF:s("d1"),gc:s("bi"),ak:s("bG"),U:s("ca<y,y>"),R:s("ft"),gH:s("cc"),ac:s("a1"),cJ:s("aA"),gR:s("Z"),z:s("@"),S:s("k"),fr:s("bv*"),l:s("bz*"),gj:s("V*"),dn:s("cM*"),hc:s("be*"),d:s("bZ*"),F:s("c_*"),ah:s("S*"),A:s("0&*"),_:s("N*"),bn:s("a6*"),X:s("y*"),eB:s("fc*"),eP:s("d2*"),n:s("fi*"),r:s("fk*"),y:s("fl*"),O:s("fm*"),q:s("d5*"),c:s("fn*"),Q:s("fo*"),e:s("k*"),dm:s("~(U*)*"),bG:s("mj<ar>?"),W:s("N?"),H:s("R")}})();(function constants(){var s=hunkHelpers.makeConstList
C.q=W.bu.prototype
C.i=W.bv.prototype
C.S=W.ba.prototype
C.V=J.a.prototype
C.b=J.w.prototype
C.W=J.cE.prototype
C.c=J.cF.prototype
C.j=J.cG.prototype
C.d=J.bC.prototype
C.a=J.aS.prototype
C.X=J.aE.prototype
C.C=J.eD.prototype
C.D=P.eN.prototype
C.E=W.d0.prototype
C.p=J.bG.prototype
C.F=W.bk.prototype
C.G=W.cb.prototype
C.H=new E.bQ("Browser.chrome")
C.r=new E.bQ("Browser.firefox")
C.t=new E.bQ("Browser.edge")
C.I=new E.bQ("Browser.other")
C.a6=new P.hT()
C.J=new P.hS()
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.K=function() {
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
C.P=function(getTagFallback) {
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
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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
C.O=function(hooks) {
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
C.N=function(hooks) {
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

C.Q=new P.eB()
C.e=new P.jK()
C.R=new P.jO()
C.f=new P.ka()
C.n=new P.by(0)
C.T=new P.by(5e6)
C.U=new P.im("element",!1,!1,!1)
C.k=H.c(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.Y=H.c(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.i)
C.l=H.c(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.m=H.c(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.Z=H.c(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.i)
C.w=H.c(s([]),t.i)
C.a_=H.c(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.x=H.c(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.c(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.y=H.c(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.z=H.c(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.A=H.c(s(["bind","if","ref","repeat","syntax"]),t.i)
C.o=H.c(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.i)
C.a0=new H.cs(0,{},C.w,H.lW("cs<y*,y*>"))
C.a1=new E.c2("OperatingSystem.windows")
C.B=new E.c2("OperatingSystem.mac")
C.a2=new E.c2("OperatingSystem.linux")
C.a3=new E.c2("OperatingSystem.other")
C.a4=new P.jL(!1)
C.a5=new P.ce(null,2)})();(function staticFields(){$.n3=null
$.aO=0
$.mb=null
$.ma=null
$.nx=null
$.nq=null
$.nD=null
$.kK=null
$.kQ=null
$.lY=null
$.ch=null
$.dE=null
$.dF=null
$.lT=!1
$.aK=C.f
$.af=H.c([],H.lW("w<N>"))
$.bb=null
$.ll=null
$.mg=null
$.mf=null
$.dd=P.lu(t.N,t.Z)
$.i9=null
$.mu=null
$.mx=null
$.aY=null
$.mH=null
$.mV=null
$.mY=null
$.mX=null
$.jP=null
$.jQ=null
$.jR=null
$.mW=null
$.mw=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"rc","nL",function(){return H.qO("_$dart_dartClosure")})
s($,"rp","nM",function(){return H.b_(H.ju({
toString:function(){return"$receiver$"}}))})
s($,"rq","nN",function(){return H.b_(H.ju({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"rr","nO",function(){return H.b_(H.ju(null))})
s($,"rs","nP",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"rv","nS",function(){return H.b_(H.ju(void 0))})
s($,"rw","nT",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"ru","nR",function(){return H.b_(H.mP(null))})
s($,"rt","nQ",function(){return H.b_(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"ry","nV",function(){return H.b_(H.mP(void 0))})
s($,"rx","nU",function(){return H.b_(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"rO","m2",function(){return P.p7()})
s($,"rz","nW",function(){return new P.jM().$0()})
s($,"rA","nX",function(){return new P.jN().$0()})
s($,"rP","o0",function(){return new Int8Array(H.cg(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rS","o2",function(){return P.oS("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"t7","o3",function(){return P.pQ()})
s($,"rQ","o1",function(){return P.mn(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rH","o_",function(){return Z.ay(0)})
s($,"rB","nY",function(){return Z.ay(511)})
s($,"rJ","aM",function(){return Z.ay(1)})
s($,"rI","br",function(){return Z.ay(2)})
s($,"rD","bq",function(){return Z.ay(4)})
s($,"rK","bs",function(){return Z.ay(8)})
s($,"rL","bM",function(){return Z.ay(16)})
s($,"rE","dK",function(){return Z.ay(32)})
s($,"rF","dL",function(){return Z.ay(64)})
s($,"rG","nZ",function(){return Z.ay(96)})
s($,"rM","cm",function(){return Z.ay(128)})
s($,"rC","bp",function(){return Z.ay(256)})
s($,"ra","nK",function(){return new V.ia()})
s($,"r9","E",function(){return $.nK()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cS,DataView:H.X,ArrayBufferView:H.X,Float32Array:H.bE,Float64Array:H.bE,Int16Array:H.es,Int32Array:H.et,Int8Array:H.eu,Uint16Array:H.ev,Uint32Array:H.ew,Uint8ClampedArray:H.cU,CanvasPixelArray:H.cU,Uint8Array:H.c1,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.hM,HTMLAnchorElement:W.dN,HTMLAreaElement:W.dO,HTMLBaseElement:W.bO,Blob:W.bt,HTMLBodyElement:W.bu,HTMLCanvasElement:W.bv,CDATASection:W.aB,CharacterData:W.aB,Comment:W.aB,ProcessingInstruction:W.aB,Text:W.aB,CSSPerspective:W.hY,CSSCharsetRule:W.K,CSSConditionRule:W.K,CSSFontFaceRule:W.K,CSSGroupingRule:W.K,CSSImportRule:W.K,CSSKeyframeRule:W.K,MozCSSKeyframeRule:W.K,WebKitCSSKeyframeRule:W.K,CSSKeyframesRule:W.K,MozCSSKeyframesRule:W.K,WebKitCSSKeyframesRule:W.K,CSSMediaRule:W.K,CSSNamespaceRule:W.K,CSSPageRule:W.K,CSSRule:W.K,CSSStyleRule:W.K,CSSSupportsRule:W.K,CSSViewportRule:W.K,CSSStyleDeclaration:W.cu,MSStyleCSSProperties:W.cu,CSS2Properties:W.cu,CSSImageValue:W.ap,CSSKeywordValue:W.ap,CSSNumericValue:W.ap,CSSPositionValue:W.ap,CSSResourceValue:W.ap,CSSUnitValue:W.ap,CSSURLImageValue:W.ap,CSSStyleValue:W.ap,CSSMatrixComponent:W.aP,CSSRotation:W.aP,CSSScale:W.aP,CSSSkew:W.aP,CSSTranslation:W.aP,CSSTransformComponent:W.aP,CSSTransformValue:W.i_,CSSUnparsedValue:W.i0,DataTransferItemList:W.i1,HTMLDivElement:W.ba,DOMException:W.i2,ClientRectList:W.cv,DOMRectList:W.cv,DOMRectReadOnly:W.cw,DOMStringList:W.e3,DOMTokenList:W.i3,Element:W.F,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.al,FileList:W.bS,FileWriter:W.e5,HTMLFormElement:W.e7,Gamepad:W.aD,History:W.ik,HTMLCollection:W.bA,HTMLFormControlsCollection:W.bA,HTMLOptionsCollection:W.bA,ImageData:W.bB,HTMLImageElement:W.bU,HTMLInputElement:W.bW,KeyboardEvent:W.bD,Location:W.ix,MediaList:W.iP,MessagePort:W.bY,MIDIInputMap:W.ep,MIDIOutputMap:W.eq,MimeType:W.aF,MimeTypeArray:W.er,PointerEvent:W.am,MouseEvent:W.am,DragEvent:W.am,Document:W.x,DocumentFragment:W.x,HTMLDocument:W.x,ShadowRoot:W.x,XMLDocument:W.x,DocumentType:W.x,Node:W.x,NodeList:W.cV,RadioNodeList:W.cV,Plugin:W.aG,PluginArray:W.eF,RTCStatsReport:W.eO,HTMLSelectElement:W.eQ,SourceBuffer:W.av,SourceBufferList:W.eU,SpeechGrammar:W.aH,SpeechGrammarList:W.eV,SpeechRecognitionResult:W.aI,Storage:W.f0,CSSStyleSheet:W.aw,StyleSheet:W.aw,HTMLTableCellElement:W.bh,HTMLTableDataCellElement:W.bh,HTMLTableHeaderCellElement:W.bh,HTMLTableElement:W.d0,HTMLTableRowElement:W.f4,HTMLTableSectionElement:W.f5,HTMLTemplateElement:W.c8,TextTrack:W.ax,TextTrackCue:W.ad,VTTCue:W.ad,TextTrackCueList:W.f8,TextTrackList:W.f9,TimeRanges:W.jo,Touch:W.aJ,TouchEvent:W.bF,TouchList:W.fe,TrackDefaultList:W.js,CompositionEvent:W.b0,FocusEvent:W.b0,TextEvent:W.b0,UIEvent:W.b0,URL:W.jJ,VideoTrackList:W.fx,WheelEvent:W.bk,Window:W.cb,DOMWindow:W.cb,Attr:W.cc,CSSRuleList:W.fF,ClientRect:W.dc,DOMRect:W.dc,GamepadList:W.fU,NamedNodeMap:W.dh,MozNamedAttrMap:W.dh,SpeechRecognitionResultList:W.hd,StyleSheetList:W.hk,SVGLength:P.aT,SVGLengthList:P.ei,SVGNumber:P.aX,SVGNumberList:P.ez,SVGPointList:P.iX,SVGScriptElement:P.c5,SVGStringList:P.f2,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aZ,SVGTransformList:P.ff,AudioBuffer:P.hP,AudioParamMap:P.dR,AudioTrackList:P.dS,AudioContext:P.b7,webkitAudioContext:P.b7,BaseAudioContext:P.b7,OfflineAudioContext:P.eA,WebGL2RenderingContext:P.eN,SQLResultSetRowList:P.eY})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
W.dp.$nativeSuperclassTag="EventTarget"
W.dq.$nativeSuperclassTag="EventTarget"
W.ds.$nativeSuperclassTag="EventTarget"
W.dt.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(V.nB,[])
else V.nB([])})})()
//# sourceMappingURL=test.dart.js.map
