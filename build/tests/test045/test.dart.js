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
a[c]=function(){a[c]=function(){H.qQ(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lK(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={le:function le(){},
lg:function(a){return new H.eg(a)},
kG:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
oq:function(a,b,c,d){if(t.F.b(a))return new H.cx(a,b,c.K("@<0>").b1(d).K("cx<1,2>"))
return new H.aT(a,b,c.K("@<0>").b1(d).K("aT<1,2>"))},
il:function(){return new P.c8("No element")},
og:function(){return new P.c8("Too many elements")},
oL:function(a,b){var s=J.aM(a)
if(typeof s!=="number")return s.X()
H.eR(a,0,s-1,b)},
eR:function(a,b,c,d){if(c-b<=32)H.oK(a,b,c,d)
else H.oJ(a,b,c,d)},
oK:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b1(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a1()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
oJ:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a4(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a4(a6+a7,2),d=e-h,c=e+h,b=J.b1(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a1()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a1()
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
if(typeof n!=="number")return n.aj()
if(n<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a1()
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
if(typeof j!=="number")return j.aj()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a1()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a1()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.aj()
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
if(r<g&&q>f){for(;J.G(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.G(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.aj()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}H.eR(a5,r,q,a8)}else H.eR(a5,r,q,a8)},
eg:function eg(a){this.a=a},
p:function p(a){this.a=a},
l:function l(){},
cL:function cL(){},
bb:function bb(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aT:function aT(a,b,c){this.a=a
this.b=b
this.$ti=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.$ti=c},
ek:function ek(a,b){this.a=null
this.b=a
this.c=b},
cP:function cP(a,b,c){this.a=a
this.b=b
this.$ti=c},
b_:function b_(a,b,c){this.a=a
this.b=b
this.$ti=c},
fx:function fx(a,b){this.a=a
this.b=b},
cB:function cB(){},
fo:function fo(){},
ca:function ca(){},
o8:function(){throw H.b(P.B("Cannot modify unmodifiable Map"))},
nu:function(a){var s,r=H.nt(a)
if(r!=null)return r
s="minified:"+a
return s},
nm:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a5(a)
if(typeof s!="string")throw H.b(H.ay(a))
return s},
cW:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mn:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.c(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.b(P.a4(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.D(q,o)|32)>r)return n}return parseInt(a,b)},
eK:function(a){return H.ot(a)},
ot:function(a){var s,r,q
if(a instanceof P.N)return H.am(H.bJ(a),null)
if(J.dE(a)===C.V||t.ak.b(a)){s=C.u(a)
if(H.mm(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.mm(q))return q}}return H.am(H.bJ(a),null)},
mm:function(a){var s=a!=="Object"&&a!==""
return s},
ou:function(){if(!!self.location)return self.location.href
return null},
ml:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oC:function(a){var s,r,q,p=H.d([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.bI(q))throw H.b(H.ay(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aQ(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.ay(q))}return H.ml(p)},
mo:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bI(q))throw H.b(H.ay(q))
if(q<0)throw H.b(H.ay(q))
if(q>65535)return H.oC(a)}return H.ml(a)},
oD:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.iv()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ar:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aQ(s,10))>>>0,56320|s&1023)}}throw H.b(P.a4(a,0,1114111,null,null))},
c4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oB:function(a){var s=H.c4(a).getFullYear()+0
return s},
oz:function(a){var s=H.c4(a).getMonth()+1
return s},
ov:function(a){var s=H.c4(a).getDate()+0
return s},
ow:function(a){var s=H.c4(a).getHours()+0
return s},
oy:function(a){var s=H.c4(a).getMinutes()+0
return s},
oA:function(a){var s=H.c4(a).getSeconds()+0
return s},
ox:function(a){var s=H.c4(a).getMilliseconds()+0
return s},
x:function(a){throw H.b(H.ay(a))},
c:function(a,b){if(a==null)J.aM(a)
throw H.b(H.cl(a,b))},
cl:function(a,b){var s,r,q="index"
if(!H.bI(b))return new P.ag(!0,b,q,null)
s=J.aM(a)
if(!(b<0)){if(typeof s!=="number")return H.x(s)
r=b>=s}else r=!0
if(r)return P.O(b,a,q,null,s)
return P.eL(b,q)},
qx:function(a,b,c){if(a>c)return P.a4(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a4(b,a,c,"end",null)
return new P.ag(!0,b,"end",null)},
ay:function(a){return new P.ag(!0,a,null,null)},
qr:function(a){if(typeof a!="number")throw H.b(H.ay(a))
return a},
b:function(a){var s,r
if(a==null)a=new P.ey()
s=new Error()
s.dartException=a
r=H.qR
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qR:function(){return J.a5(this.dartException)},
q:function(a){throw H.b(a)},
o:function(a){throw H.b(P.b7(a))},
aY:function(a){var s,r,q,p,o,n
a=H.nq(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jo(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
jp:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mA:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mg:function(a,b){return new H.ex(a,b==null?null:b.method)},
lf:function(a,b){var s=b==null,r=s?null:b.method
return new H.ee(a,r,s?null:b.receiver)},
ae:function(a){if(a==null)return new H.iT(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bK(a,a.dartException)
return H.qn(a)},
bK:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qn:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aQ(r,16)&8191)===10)switch(q){case 438:return H.bK(a,H.lf(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bK(a,H.mg(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.nx()
o=$.ny()
n=$.nz()
m=$.nA()
l=$.nD()
k=$.nE()
j=$.nC()
$.nB()
i=$.nG()
h=$.nF()
g=p.an(s)
if(g!=null)return H.bK(a,H.lf(s,g))
else{g=o.an(s)
if(g!=null){g.method="call"
return H.bK(a,H.lf(s,g))}else{g=n.an(s)
if(g==null){g=m.an(s)
if(g==null){g=l.an(s)
if(g==null){g=k.an(s)
if(g==null){g=j.an(s)
if(g==null){g=m.an(s)
if(g==null){g=i.an(s)
if(g==null){g=h.an(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bK(a,H.mg(s,g))}}return H.bK(a,new H.fn(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cX()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bK(a,new P.ag(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cX()
return a},
lN:function(a){var s
if(a==null)return new H.hd(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hd(a)},
qz:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
qH:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.u("Unsupported number of arguments for wrapped closure"))},
ck:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qH)
a.$identity=s
return s},
o7:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.eX().constructor.prototype):Object.create(new H.bP(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aN
if(typeof r!=="number")return r.w()
$.aN=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.m3(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.o3(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.m3(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
o3:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nk,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.o1:H.o0
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
o4:function(a,b,c,d){var s=H.m2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
m3:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.o6(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.o4(r,!p,s,b)
if(r===0){p=$.aN
if(typeof p!=="number")return p.w()
$.aN=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.l4())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aN
if(typeof p!=="number")return p.w()
$.aN=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.l4())+"."+H.f(s)+"("+m+");}")()},
o5:function(a,b,c,d){var s=H.m2,r=H.o2
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
o6:function(a,b){var s,r,q,p,o,n,m=H.l4(),l=$.m0
if(l==null)l=$.m0=H.m_("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.o5(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aN
if(typeof o!=="number")return o.w()
$.aN=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aN
if(typeof o!=="number")return o.w()
$.aN=o+1
return new Function(p+o+"}")()},
lK:function(a,b,c,d,e,f,g){return H.o7(a,b,c,d,!!e,!!f,g)},
o0:function(a,b){return H.hr(v.typeUniverse,H.bJ(a.a),b)},
o1:function(a,b){return H.hr(v.typeUniverse,H.bJ(a.c),b)},
m2:function(a){return a.a},
o2:function(a){return a.c},
l4:function(){var s=$.m1
return s==null?$.m1=H.m_("self"):s},
m_:function(a){var s,r,q,p=new H.bP("self","target","receiver","name"),o=J.ld(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.bN("Field name "+a+" not found."))},
qQ:function(a){throw H.b(new P.dX(a))},
qB:function(a){return v.getIsolateTag(a)},
rY:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qK:function(a){var s,r,q,p,o,n=$.nj.$1(a),m=$.kF[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kL[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ne.$2(a,n)
if(q!=null){m=$.kF[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kL[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kW(s)
$.kF[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kL[n]=s
return s}if(p==="-"){o=H.kW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.no(a,s)
if(p==="*")throw H.b(P.jy(n))
if(v.leafTags[n]===true){o=H.kW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.no(a,s)},
no:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lP(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kW:function(a){return J.lP(a,!1,null,!!a.$iA)},
qL:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kW(s)
else return J.lP(s,c,null,null)},
qF:function(){if(!0===$.lO)return
$.lO=!0
H.qG()},
qG:function(){var s,r,q,p,o,n,m,l
$.kF=Object.create(null)
$.kL=Object.create(null)
H.qE()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.np.$1(o)
if(n!=null){m=H.qL(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qE:function(){var s,r,q,p,o,n,m=C.K()
m=H.cj(C.L,H.cj(C.M,H.cj(C.v,H.cj(C.v,H.cj(C.N,H.cj(C.O,H.cj(C.P(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nj=new H.kH(p)
$.ne=new H.kI(o)
$.np=new H.kJ(n)},
cj:function(a,b){return a(b)||b},
ok:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.a3("Illegal RegExp pattern ("+String(n)+")",a,null))},
nr:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qy:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nq:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lR:function(a,b,c){var s=H.qP(a,b,c)
return s},
qP:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nq(b),'g'),H.qy(c))},
cs:function cs(){},
ct:function ct(a,b,c,d){var _=this
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
ex:function ex(a,b){this.a=a
this.b=b},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a){this.a=a},
iT:function iT(a){this.a=a},
hd:function hd(a){this.a=a
this.b=null},
br:function br(){},
f3:function f3(){},
eX:function eX(){},
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
io:function io(a){this.a=a},
ir:function ir(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cI:function cI(a,b){this.a=a
this.$ti=b},
ej:function ej(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
ed:function ed(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ch:function(a){return a},
b0:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.cl(b,a))},
pB:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.qx(a,b,c))
return b},
cR:function cR(){},
V:function V(){},
c1:function c1(){},
bz:function bz(){},
cS:function cS(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
cT:function cT(){},
c2:function c2(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
oH:function(a,b){var s=b.c
return s==null?b.c=H.ly(a,b.z,!0):s},
mu:function(a,b){var s=b.c
return s==null?b.c=H.du(a,"m9",[b.z]):s},
mv:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mv(a.z)
return s===11||s===12},
oG:function(a){return a.cy},
lM:function(a){return H.lz(v.typeUniverse,a,!1)},
bj:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bj(a,s,a0,a1)
if(r===s)return b
return H.n_(a,r,!0)
case 7:s=b.z
r=H.bj(a,s,a0,a1)
if(r===s)return b
return H.ly(a,r,!0)
case 8:s=b.z
r=H.bj(a,s,a0,a1)
if(r===s)return b
return H.mZ(a,r,!0)
case 9:q=b.Q
p=H.dD(a,q,a0,a1)
if(p===q)return b
return H.du(a,b.z,p)
case 10:o=b.z
n=H.bj(a,o,a0,a1)
m=b.Q
l=H.dD(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lw(a,n,l)
case 11:k=b.z
j=H.bj(a,k,a0,a1)
i=b.Q
h=H.qk(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mY(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dD(a,g,a0,a1)
o=b.z
n=H.bj(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lx(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.hK("Attempted to substitute unexpected RTI kind "+c))}},
dD:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bj(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
ql:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bj(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
qk:function(a,b,c,d){var s,r=b.a,q=H.dD(a,r,c,d),p=b.b,o=H.dD(a,p,c,d),n=b.c,m=H.ql(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fQ()
s.a=q
s.b=o
s.c=m
return s},
d:function(a,b){a[v.arrayRti]=b
return a},
qs:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.nk(s)
return a.$S()}return null},
nl:function(a,b){var s
if(H.mv(b))if(a instanceof H.br){s=H.qs(a)
if(s!=null)return s}return H.bJ(a)},
bJ:function(a){var s
if(a instanceof P.N){s=a.$ti
return s!=null?s:H.lG(a)}if(Array.isArray(a))return H.lE(a)
return H.lG(J.dE(a))},
lE:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dA:function(a){var s=a.$ti
return s!=null?s:H.lG(a)},
lG:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pI(a,s)},
pI:function(a,b){var s=a instanceof H.br?a.__proto__.__proto__.constructor:b,r=H.pj(v.typeUniverse,s.name)
b.$ccache=r
return r},
nk:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lz(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pH:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dz(q,a,H.pM)
if(!H.b2(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dz(q,a,H.pP)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bI
else if(s===t.gR||s===t.H)r=H.pL
else if(s===t.N)r=H.pN
else r=s===t.cJ?H.lH:null
if(r!=null)return H.dz(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.qI)){q.r="$i"+p
return H.dz(q,a,H.pO)}}else if(p===7)return H.dz(q,a,H.pF)
return H.dz(q,a,H.pD)},
dz:function(a,b,c){a.b=c
return a.b(b)},
pG:function(a){var s,r,q=this
if(!H.b2(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.pA
else if(q===t.K)r=H.pz
else r=H.pE
q.a=r
return q.a(a)},
qd:function(a){var s,r=a.y
if(!H.b2(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
pD:function(a){var s=this
if(a==null)return H.qd(s)
return H.W(v.typeUniverse,H.nl(a,s),null,s,null)},
pF:function(a){if(a==null)return!0
return this.z.b(a)},
pO:function(a){var s=this,r=s.r
if(a instanceof P.N)return!!a[r]
return!!J.dE(a)[r]},
rW:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.n8(a,s)},
pE:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.n8(a,s)},
n8:function(a,b){throw H.b(H.p9(H.mQ(a,H.nl(a,b),H.am(b,null))))},
mQ:function(a,b,c){var s=P.i8(a),r=H.am(b==null?H.bJ(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
p9:function(a){return new H.ds("TypeError: "+a)},
a9:function(a,b){return new H.ds("TypeError: "+H.mQ(a,null,b))},
pM:function(a){return a!=null},
pz:function(a){return a},
pP:function(a){return!0},
pA:function(a){return a},
lH:function(a){return!0===a||!1===a},
rI:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a9(a,"bool"))},
rK:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a9(a,"bool"))},
rJ:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a9(a,"bool?"))},
rL:function(a){if(typeof a=="number")return a
throw H.b(H.a9(a,"double"))},
rN:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a9(a,"double"))},
rM:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a9(a,"double?"))},
bI:function(a){return typeof a=="number"&&Math.floor(a)===a},
rO:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a9(a,"int"))},
rQ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a9(a,"int"))},
rP:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a9(a,"int?"))},
pL:function(a){return typeof a=="number"},
rR:function(a){if(typeof a=="number")return a
throw H.b(H.a9(a,"num"))},
rT:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a9(a,"num"))},
rS:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a9(a,"num?"))},
pN:function(a){return typeof a=="string"},
rU:function(a){if(typeof a=="string")return a
throw H.b(H.a9(a,"String"))},
lF:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a9(a,"String"))},
rV:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a9(a,"String?"))},
qg:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.w(r,H.am(a[q],b))
return s},
n9:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.d([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.W,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.c(a6,i)
l=C.a.w(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.w(" extends ",H.am(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.am(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.w(a3,H.am(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.w(a3,H.am(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.lU(H.am(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.f(a1)},
am:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.am(a.z,b)
return s}if(l===7){r=a.z
s=H.am(r,b)
q=r.y
return J.lU(q===11||q===12?C.a.w("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.am(a.z,b))+">"
if(l===9){p=H.qm(a.z)
o=a.Q
return o.length!==0?p+("<"+H.qg(o,b)+">"):p}if(l===11)return H.n9(a,b,null)
if(l===12)return H.n9(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.c(b,n)
return b[n]}return"?"},
qm:function(a){var s,r=H.nt(a)
if(r!=null)return r
s="minified:"+a
return s},
n0:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pj:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lz(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dv(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.du(a,b,q)
n[b]=o
return o}else return m},
ph:function(a,b){return H.n7(a.tR,b)},
pg:function(a,b){return H.n7(a.eT,b)},
lz:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mW(H.mU(a,null,b,c))
r.set(b,s)
return s},
hr:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mW(H.mU(a,b,c,!0))
q.set(c,r)
return r},
pi:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lw(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bi:function(a,b){b.a=H.pG
b.b=H.pH
return b},
dv:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.as(null,null)
s.y=b
s.cy=c
r=H.bi(a,s)
a.eC.set(c,r)
return r},
n_:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.pe(a,b,r,c)
a.eC.set(r,s)
return s},
pe:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b2(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.as(null,null)
q.y=6
q.z=b
q.cy=c
return H.bi(a,q)},
ly:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.pd(a,b,r,c)
a.eC.set(r,s)
return s},
pd:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b2(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.kM(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.kM(q.z))return q
else return H.oH(a,b)}}p=new H.as(null,null)
p.y=7
p.z=b
p.cy=c
return H.bi(a,p)},
mZ:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.pb(a,b,r,c)
a.eC.set(r,s)
return s},
pb:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b2(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.du(a,"m9",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.as(null,null)
q.y=8
q.z=b
q.cy=c
return H.bi(a,q)},
pf:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.as(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bi(a,s)
a.eC.set(q,r)
return r},
hq:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
pa:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
du:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hq(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.as(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bi(a,r)
a.eC.set(p,q)
return q},
lw:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hq(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.as(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bi(a,o)
a.eC.set(q,n)
return n},
mY:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hq(m)
if(j>0){s=l>0?",":""
r=H.hq(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.pa(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.as(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bi(a,o)
a.eC.set(q,r)
return r},
lx:function(a,b,c,d){var s,r=b.cy+("<"+H.hq(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.pc(a,b,c,r,d)
a.eC.set(r,s)
return s},
pc:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bj(a,b,r,0)
m=H.dD(a,c,r,0)
return H.lx(a,n,m,c!==m)}}l=new H.as(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bi(a,l)},
mU:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mW:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.p3(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mV(a,r,g,f,!1)
else if(q===46)r=H.mV(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bh(a.u,a.e,f.pop()))
break
case 94:f.push(H.pf(a.u,f.pop()))
break
case 35:f.push(H.dv(a.u,5,"#"))
break
case 64:f.push(H.dv(a.u,2,"@"))
break
case 126:f.push(H.dv(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.lv(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.du(p,n,o))
else{m=H.bh(p,a.e,n)
switch(m.y){case 11:f.push(H.lx(p,m,o,a.n))
break
default:f.push(H.lw(p,m,o))
break}}break
case 38:H.p4(a,f)
break
case 42:l=a.u
f.push(H.n_(l,H.bh(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.ly(l,H.bh(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mZ(l,H.bh(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fQ()
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
H.lv(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mY(p,H.bh(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.lv(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.p6(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bh(a.u,a.e,h)},
p3:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mV:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.n0(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.oG(o)+'"')
d.push(H.hr(s,o,n))}else d.push(p)
return m},
p4:function(a,b){var s=b.pop()
if(0===s){b.push(H.dv(a.u,1,"0&"))
return}if(1===s){b.push(H.dv(a.u,4,"1&"))
return}throw H.b(P.hK("Unexpected extended operation "+H.f(s)))},
bh:function(a,b,c){if(typeof c=="string")return H.du(a,c,a.sEA)
else if(typeof c=="number")return H.p5(a,b,c)
else return c},
lv:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bh(a,b,c[s])},
p6:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bh(a,b,c[s])},
p5:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.hK("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.hK("Bad index "+c+" for "+b.i(0)))},
W:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b2(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b2(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.W(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.W(a,b.z,c,d,e)
if(p===6){s=d.z
return H.W(a,b,c,s,e)}if(r===8){if(!H.W(a,b.z,c,d,e))return!1
return H.W(a,H.mu(a,b),c,d,e)}if(r===7){s=H.W(a,b.z,c,d,e)
return s}if(p===8){if(H.W(a,b,c,d.z,e))return!0
return H.W(a,b,c,H.mu(a,d),e)}if(p===7){s=H.W(a,b,c,d.z,e)
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
if(!H.W(a,k,c,j,e)||!H.W(a,j,e,k,c))return!1}return H.na(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.na(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pK(a,b,c,d,e)}return!1},
na:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
pK:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.W(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.n0(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.W(a,H.hr(a,b,l[p]),c,r[p],e))return!1
return!0},
kM:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b2(a))if(r!==7)if(!(r===6&&H.kM(a.z)))s=r===8&&H.kM(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qI:function(a){var s
if(!H.b2(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
b2:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
n7:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
as:function as(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fQ:function fQ(){this.c=this.b=this.a=null},
fL:function fL(){},
ds:function ds(a){this.a=a},
nt:function(a){return v.mangledGlobalNames[a]},
qM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hF:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lO==null){H.qF()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.b(P.jy("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.mb()]
if(p!=null)return p
p=H.qK(a)
if(p!=null)return p
if(typeof a=="function")return C.X
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,J.mb(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
mb:function(){var s=$.mS
return s==null?$.mS=v.getIsolateTag("_$dart_js"):s},
oh:function(a,b){if(!H.bI(a))throw H.b(P.lY(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a4(a,0,4294967295,"length",null))
return J.oi(new Array(a),b)},
lc:function(a,b){if(!H.bI(a)||a<0)throw H.b(P.bN("Length must be a non-negative integer: "+H.f(a)))
return H.d(new Array(a),b.K("v<0>"))},
oi:function(a,b){return J.ld(H.d(a,b.K("v<0>")))},
ld:function(a){a.fixed$length=Array
return a},
oj:function(a,b){return J.dJ(a,b)},
dE:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cF.prototype
return J.cE.prototype}if(typeof a=="string")return J.aR.prototype
if(a==null)return J.cG.prototype
if(typeof a=="boolean")return J.ec.prototype
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.N)return a
return J.hF(a)},
qA:function(a){if(typeof a=="number")return J.bx.prototype
if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.N)return a
return J.hF(a)},
b1:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.N)return a
return J.hF(a)},
hE:function(a){if(a==null)return a
if(a.constructor==Array)return J.v.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.N)return a
return J.hF(a)},
ni:function(a){if(typeof a=="number")return J.bx.prototype
if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bE.prototype
return a},
dF:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bE.prototype
return a},
aK:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aD.prototype
return a}if(a instanceof P.N)return a
return J.hF(a)},
lU:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qA(a).w(a,b)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dE(a).p(a,b)},
lV:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ni(a).A(a,b)},
co:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nm(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b1(a).h(a,b)},
l0:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.nm(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hE(a).l(a,b,c)},
nQ:function(a,b){return J.dF(a).D(a,b)},
nR:function(a,b,c){return J.aK(a).fV(a,b,c)},
nS:function(a,b,c,d){return J.aK(a).hg(a,b,c,d)},
nT:function(a,b){return J.dF(a).U(a,b)},
dJ:function(a,b){return J.ni(a).aT(a,b)},
l1:function(a,b){return J.b1(a).C(a,b)},
hI:function(a,b){return J.hE(a).I(a,b)},
nU:function(a,b,c,d){return J.aK(a).hH(a,b,c,d)},
l2:function(a,b){return J.hE(a).G(a,b)},
nV:function(a){return J.aK(a).ghq(a)},
l3:function(a){return J.aK(a).gdg(a)},
nW:function(a){return J.aK(a).gdj(a)},
af:function(a){return J.dE(a).gP(a)},
b3:function(a){return J.hE(a).gN(a)},
aM:function(a){return J.b1(a).gm(a)},
lW:function(a){return J.hE(a).ic(a)},
nX:function(a,b){return J.aK(a).ih(a,b)},
nY:function(a,b,c){return J.dF(a).t(a,b,c)},
nZ:function(a){return J.dF(a).ir(a)},
a5:function(a){return J.dE(a).i(a)},
a:function a(){},
ec:function ec(){},
cG:function cG(){},
ba:function ba(){},
eD:function eD(){},
bE:function bE(){},
aD:function aD(){},
v:function v(a){this.$ti=a},
im:function im(a){this.$ti=a},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bx:function bx(){},
cF:function cF(){},
cE:function cE(){},
aR:function aR(){}},P={
oU:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qo()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.ck(new P.jZ(q),1)).observe(s,{childList:true})
return new P.jY(q,s,r)}else if(self.setImmediate!=null)return P.qp()
return P.qq()},
oV:function(a){self.scheduleImmediate(H.ck(new P.k_(a),0))},
oW:function(a){self.setImmediate(H.ck(new P.k0(a),0))},
oX:function(a){P.lq(C.n,a)},
lq:function(a,b){var s=C.c.a4(a.a,1000)
return P.p7(s<0?0:s,b)},
mz:function(a,b){var s=C.c.a4(a.a,1000)
return P.p8(s<0?0:s,b)},
p7:function(a,b){var s=new P.dr()
s.ew(a,b)
return s},
p8:function(a,b){var s=new P.dr()
s.ex(a,b)
return s},
rG:function(a){return new P.cf(a,1)},
p_:function(){return C.a5},
p0:function(a){return new P.cf(a,3)},
pR:function(a,b){return new P.dn(a,b.K("dn<0>"))},
qc:function(){var s,r
for(s=$.ci;s!=null;s=$.ci){$.dC=null
r=s.b
$.ci=r
if(r==null)$.dB=null
s.a.$0()}},
qj:function(){$.lI=!0
try{P.qc()}finally{$.dC=null
$.lI=!1
if($.ci!=null)$.lT().$1(P.nf())}},
qh:function(a){var s=new P.fy(a),r=$.dB
if(r==null){$.ci=$.dB=s
if(!$.lI)$.lT().$1(P.nf())}else $.dB=r.b=s},
qi:function(a){var s,r,q,p=$.ci
if(p==null){P.qh(a)
$.dC=$.dB
return}s=new P.fy(a)
r=$.dC
if(r==null){s.b=p
$.ci=$.dC=s}else{q=r.b
s.b=q
$.dC=r.b=s
if(q==null)$.dB=s}},
my:function(a,b){var s=$.aJ
if(s===C.f)return P.lq(a,b)
return P.lq(a,s.hr(b))},
oO:function(a,b){var s=$.aJ
if(s===C.f)return P.mz(a,b)
return P.mz(a,s.dc(b,t.aF))},
nb:function(a,b,c,d,e){P.qi(new P.kx(d,e))},
qe:function(a,b,c,d){var s,r=$.aJ
if(r===c)return d.$0()
$.aJ=c
s=r
try{r=d.$0()
return r}finally{$.aJ=s}},
qf:function(a,b,c,d,e){var s,r=$.aJ
if(r===c)return d.$1(e)
$.aJ=c
s=r
try{r=d.$1(e)
return r}finally{$.aJ=s}},
jZ:function jZ(a){this.a=a},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
dr:function dr(){this.c=0},
kh:function kh(a,b){this.a=a
this.b=b},
kg:function kg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cf:function cf(a,b){this.a=a
this.b=b},
bG:function bG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dn:function dn(a,b){this.a=a
this.$ti=b},
fy:function fy(a){this.a=a
this.b=null},
cY:function cY(){},
eZ:function eZ(){},
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
om:function(a,b){return new H.D(a.K("@<0>").b1(b).K("D<1,2>"))},
on:function(a,b,c){return H.qz(a,new H.D(b.K("@<0>").b1(c).K("D<1,2>")))},
lh:function(a,b){return new H.D(a.K("@<0>").b1(b).K("D<1,2>"))},
cJ:function(a){return new P.db(a.K("db<0>"))},
lu:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
p2:function(a,b){var s=new P.dc(a,b)
s.c=a.e
return s},
of:function(a,b,c){var s,r
if(P.lJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.d([],t.s)
$.ad.push(a)
try{P.pQ(a,s)}finally{if(0>=$.ad.length)return H.c($.ad,-1)
$.ad.pop()}r=P.mw(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
lb:function(a,b,c){var s,r
if(P.lJ(a))return b+"..."+c
s=new P.S(b)
$.ad.push(a)
try{r=s
r.a=P.mw(r.a,a,", ")}finally{if(0>=$.ad.length)return H.c($.ad,-1)
$.ad.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lJ:function(a){var s,r
for(s=$.ad.length,r=0;r<s;++r)if(a===$.ad[r])return!0
return!1},
pQ:function(a,b){var s,r,q,p,o,n,m,l=a.gN(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=H.f(l.gB(l))
b.push(s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return H.c(b,-1)
r=b.pop()
if(0>=b.length)return H.c(b,-1)
q=b.pop()}else{p=l.gB(l);++j
if(!l.q()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB(l);++j
for(;l.q();p=o,o=n){n=l.gB(l);++j
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
oo:function(a,b,c){var s=P.om(b,c)
a.G(0,new P.is(s,b,c))
return s},
mc:function(a,b){var s,r,q=P.cJ(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)q.n(0,b.a(a[r]))
return q},
lj:function(a){var s,r={}
if(P.lJ(a))return"{...}"
s=new P.S("")
try{$.ad.push(a)
s.a+="{"
r.a=!0
J.l2(a,new P.iw(r,s))
s.a+="}"}finally{if(0>=$.ad.length)return H.c($.ad,-1)
$.ad.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
db:function db(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k4:function k4(a){this.a=a
this.c=this.b=null},
dc:function dc(a,b){var _=this
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
U:function U(){},
hs:function hs(){},
cO:function cO(){},
cb:function cb(a,b){this.a=a
this.$ti=b},
dj:function dj(){},
dd:function dd(){},
dw:function dw(){},
oR:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oS(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oS:function(a,b,c,d){var s=a?$.nI():$.nH()
if(s==null)return null
if(0===c&&d===b.length)return P.mG(s,b)
return P.mG(s,b.subarray(c,P.bd(c,d,b.length)))},
mG:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ae(r)}return null},
lZ:function(a,b,c,d,e,f){if(C.c.bf(f,4)!==0)throw H.b(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
py:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
px:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.X()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.b1(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.ai()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.c(r,o)
r[o]=n}return r},
jH:function jH(){},
jI:function jI(){},
hP:function hP(){},
hQ:function hQ(){},
dU:function dU(){},
dW:function dW(){},
i5:function i5(){},
ik:function ik(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
ij:function ij(a){this.a=a},
jF:function jF(){},
jJ:function jJ(){},
km:function km(a){this.b=0
this.c=a},
jG:function jG(a){this.a=a},
kl:function kl(a){this.a=a
this.b=16
this.c=0},
kK:function(a,b){var s=H.mn(a,b)
if(s!=null)return s
throw H.b(P.a3(a,null,null))},
oc:function(a){if(a instanceof H.br)return a.i(0)
return"Instance of '"+H.f(H.eK(a))+"'"},
it:function(a,b,c,d){var s,r=c?J.lc(a,d):J.oh(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
li:function(a,b,c){var s,r=H.d([],c.K("v<0>"))
for(s=J.b3(a);s.q();)r.push(s.gB(s))
if(b)return r
return J.ld(r)},
op:function(a,b,c){var s,r,q=J.lc(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.c(q,s)
q[s]=r}return q},
f0:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bd(b,c,r)
if(b<=0){if(typeof c!=="number")return c.aj()
q=c<r}else q=!0
return H.mo(q?s.slice(b,c):s)}if(t.bm.b(a))return H.oD(a,b,P.bd(b,c,a.length))
return P.oM(a,b,c)},
oM:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a4(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a4(c,b,a.length,o,o))
r=J.b3(a)
for(q=0;q<b;++q)if(!r.q())throw H.b(P.a4(b,0,q,o,o))
p=[]
if(s)for(;r.q();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.q())throw H.b(P.a4(c,b,q,o,o))
p.push(r.gB(r))}return H.mo(p)},
oE:function(a){return new H.ed(a,H.ok(a,!1,!0,!1,!1,!1))},
mw:function(a,b,c){var s=J.b3(b)
if(!s.q())return a
if(c.length===0){do a+=H.f(s.gB(s))
while(s.q())}else{a+=H.f(s.gB(s))
for(;s.q();)a=a+c+H.f(s.gB(s))}return a},
mC:function(){var s=H.ou()
if(s!=null)return P.oQ(s)
throw H.b(P.B("'Uri.base' is not supported"))},
kk:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nO().b
if(typeof b!="string")H.q(H.ay(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghG().c1(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.c(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.ar(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
o9:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
oa:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dZ:function(a){if(a>=10)return""+a
return"0"+a},
m5:function(a){return new P.bt(1000*a)},
i8:function(a){if(typeof a=="number"||H.lH(a)||null==a)return J.a5(a)
if(typeof a=="string")return JSON.stringify(a)
return P.oc(a)},
hK:function(a){return new P.dM(a)},
bN:function(a){return new P.ag(!1,null,null,a)},
lY:function(a,b,c){return new P.ag(!0,a,b,c)},
o_:function(a,b){if(a==null)throw H.b(new P.ag(!1,null,b,"Must not be null"))
return a},
mp:function(a){var s=null
return new P.c5(s,s,!1,s,s,a)},
eL:function(a,b){return new P.c5(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.c5(b,c,!0,a,d,"Invalid value")},
bd:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.x(c)
s=a>c}else s=!0
if(s)throw H.b(P.a4(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.x(c)
s=b>c}else s=!0
if(s)throw H.b(P.a4(b,a,c,"end",null))
return b}return c},
mq:function(a,b){if(a<0)throw H.b(P.a4(a,0,null,b,null))
return a},
O:function(a,b,c,d,e){var s=e==null?J.aM(b):e
return new P.ea(s,!0,a,c,"Index out of range")},
B:function(a){return new P.fp(a)},
jy:function(a){return new P.fm(a)},
lo:function(a){return new P.c8(a)},
b7:function(a){return new P.dV(a)},
u:function(a){return new P.fN(a)},
a3:function(a,b,c){return new P.ie(a,b,c)},
lQ:function(a){H.qM(a)},
oQ:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.mB(a4<a4?C.a.t(a5,0,a4):a5,5,a3).ge4()
else if(s===32)return P.mB(C.a.t(a5,5,a4),0,a3).ge4()}r=P.it(8,0,!1,t.S)
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
if(P.nc(a5,0,a4,0,r)>=14){if(7>=r.length)return H.c(r,7)
r[7]=a4}if(1>=r.length)return H.c(r,1)
p=r[1]
if(p>=0)if(P.nc(a5,0,p,20,r)===20){if(7>=r.length)return H.c(r,7)
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
j=!1}else{if(!(l<a4&&l===m+2&&C.a.aa(a5,"..",m)))h=l>m+2&&C.a.aa(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.aa(a5,"file",0)){if(o<=0){if(!C.a.aa(a5,"/",m)){g="file:///"
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
a5=C.a.aV(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.aa(a5,"http",0)){if(q&&n+3===m&&C.a.aa(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aV(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.aa(a5,"https",0)){if(q&&n+4===m&&C.a.aa(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aV(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.t(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.h7(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.pr(a5,0,p)
else{if(p===0)P.cg(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.ps(a5,d,o-1):""
b=P.po(a5,o,n,!1)
q=n+1
if(q<m){a=H.mn(C.a.t(a5,q,m),a3)
a0=P.pq(a==null?H.q(P.a3("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pp(a5,m,l,a3,i,b!=null)
a2=l<k?P.lB(a5,l+1,k,a3):a3
return new P.bH(i,c,b,a0,a1,a2,k<a4?P.pn(a5,k+1,a4):a3)},
mE:function(a){var s=t.N
return C.b.hM(H.d(a.split("&"),t.s),P.lh(s,s),new P.jD(C.e))},
oP:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jA(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.U(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.kK(C.a.t(a,q,r),null)
if(typeof n!=="number")return n.a1()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.c(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.kK(C.a.t(a,q,c),null)
if(typeof n!=="number")return n.a1()
if(n>255)j.$2(k,q)
if(p>=s)return H.c(i,p)
i[p]=n
return i},
mD:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jB(a),b=new P.jC(c,a)
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
else{k=P.oP(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.c(j,g)
j[g]=0
d=g+1
if(d>=i)return H.c(j,d)
j[d]=0
g+=2}else{d=C.c.aQ(f,8)
if(g<0||g>=i)return H.c(j,g)
j[g]=d
d=g+1
if(d>=i)return H.c(j,d)
j[d]=f&255
g+=2}}return j},
n1:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cg:function(a,b,c){throw H.b(P.a3(c,a,b))},
pq:function(a,b){if(a!=null&&a===P.n1(b))return null
return a},
po:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.U(a,b)===91){s=c-1
if(C.a.U(a,s)!==93)P.cg(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.pl(a,r,s)
if(q<s){p=q+1
o=P.n6(a,C.a.aa(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mD(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.U(a,n)===58){q=C.a.bp(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.n6(a,C.a.aa(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mD(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.pu(a,b,c)},
pl:function(a,b,c){var s=C.a.bp(a,"%",b)
return s>=b&&s<c?s:c},
n6:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.S(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.U(a,s)
if(p===37){o=P.lC(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.S("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.cg(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.S("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.U(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.t(a,r,s)
if(i==null){i=new P.S("")
n=i}else n=i
n.a+=j
n.a+=P.lA(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pu:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.U(a,s)
if(o===37){n=P.lC(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.S("")
l=C.a.t(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.t(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.c(C.y,m)
m=(C.y[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.S("")
if(r<s){q.a+=C.a.t(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.c(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.cg(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.U(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.S("")
m=q}else m=q
m.a+=l
m.a+=P.lA(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pr:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.n3(C.a.D(a,b)))P.cg(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.c(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cg(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.pk(r?a.toLowerCase():a)},
pk:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ps:function(a,b,c){return P.dx(a,b,c,C.a_,!1)},
pp:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dx(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a6(s,"/"))s="/"+s
return P.pt(s,e,f)},
pt:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a6(a,"/"))return P.pv(a,!s||c)
return P.pw(a)},
lB:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.bN("Both query and queryParameters specified"))
return P.dx(a,b,c,C.l,!0)}if(d==null)return null
s=new P.S("")
r.a=""
d.G(0,new P.ki(new P.kj(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
pn:function(a,b,c){return P.dx(a,b,c,C.l,!0)},
lC:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.U(a,b+1)
r=C.a.U(a,n)
q=H.kG(s)
p=H.kG(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aQ(o,4)
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.ar(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
lA:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.c(s,0)
s[0]=37
q=C.a.D(k,a>>>4)
if(1>=r)return H.c(s,1)
s[1]=q
q=C.a.D(k,a&15)
if(2>=r)return H.c(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.h6(a,6*o)&63|p
if(n>=r)return H.c(s,n)
s[n]=37
q=n+1
l=C.a.D(k,m>>>4)
if(q>=r)return H.c(s,q)
s[q]=l
l=n+2
q=C.a.D(k,m&15)
if(l>=r)return H.c(s,l)
s[l]=q
n+=3}}return P.f0(s,0,null)},
dx:function(a,b,c,d,e){var s=P.n5(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
n5:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.U(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lC(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.c(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cg(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.U(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.lA(o)}}if(p==null){p=new P.S("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.x(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
n4:function(a){if(C.a.a6(a,"."))return!0
return C.a.dB(a,"/.")!==-1},
pw:function(a){var s,r,q,p,o,n,m
if(!P.n4(a))return a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.G(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.c(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
pv:function(a,b){var s,r,q,p,o,n
if(!P.n4(a))return!b?P.n2(a):a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaA(s)!==".."){if(0>=s.length)return H.c(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.c(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaA(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.c(s,0)
r=P.n2(s[0])
if(0>=s.length)return H.c(s,0)
s[0]=r}return C.b.j(s,"/")},
n2:function(a){var s,r,q,p=a.length
if(p>=2&&P.n3(J.nQ(a,0)))for(s=1;s<p;++s){r=C.a.D(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.af(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.c(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
pm:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.bN("Invalid URL encoding"))}}return s},
lD:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.D(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.t(a,b,c)
else p=new H.p(C.a.t(a,b,c))}else{p=H.d([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.D(a,o)
if(r>127)throw H.b(P.bN("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.b(P.bN("Truncated URI"))
p.push(P.pm(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.c1(p)},
n3:function(a){var s=a|32
return 97<=s&&s<=122},
mB:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.a3(k,a,r))}}if(q<0&&r>b)throw H.b(P.a3(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaA(j)
if(p!==44||r!==n+7||!C.a.aa(a,"base64",n+1))throw H.b(P.a3("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.J.hW(0,a,m,s)
else{l=P.n5(a,m,s,C.l,!0)
if(l!=null)a=C.a.aV(a,m,s,l)}return new P.jz(a,j,c)},
pC:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.op(22,new P.ks(),t.gc),l=new P.kr(m),k=new P.kt(),j=new P.ku(),i=l.$2(0,225)
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
nc:function(a,b,c,d,e){var s,r,q,p,o,n=$.nP()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.c(n,d)
r=n[d]
q=C.a.D(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.c(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.c(e,o)
e[o]=s}return d},
az:function az(){},
ah:function ah(a,b){this.a=a
this.b=b},
X:function X(){},
bt:function bt(a){this.a=a},
i1:function i1(){},
i2:function i2(){},
K:function K(){},
dM:function dM(a){this.a=a},
ey:function ey(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ea:function ea(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fp:function fp(a){this.a=a},
fm:function fm(a){this.a=a},
c8:function c8(a){this.a=a},
dV:function dV(a){this.a=a},
eB:function eB(){},
cX:function cX(){},
dX:function dX(a){this.a=a},
fN:function fN(a){this.a=a},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(){},
k:function k(){},
h:function h(){},
eb:function eb(){},
n:function n(){},
H:function H(){},
ap:function ap(){},
R:function R(){},
N:function N(){},
y:function y(){},
S:function S(a){this.a=a},
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
h7:function h7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fE:function fE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qv:function(a){var s
if(t.v.b(a)){s=J.nW(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.dt(a.data,a.height,a.width)},
qu:function(a){if(a instanceof P.dt)return{data:a.a,height:a.b,width:a.c}
return a},
bk:function(a){var s,r,q,p,o
if(a==null)return null
s=P.lh(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
qt:function(a){var s={}
a.G(0,new P.ky(s))
return s},
kb:function kb(){},
kd:function kd(a,b){this.a=a
this.b=b},
ke:function ke(a,b){this.a=a
this.b=b},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function ky(a){this.a=a},
kc:function kc(a,b){this.a=a
this.b=b},
e5:function e5(a,b){this.a=a
this.b=b},
ic:function ic(){},
id:function id(){},
k3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
p1:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
h5:function h5(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aS:function aS(){},
eh:function eh(){},
aW:function aW(){},
ez:function ez(){},
iU:function iU(){},
c6:function c6(){},
f_:function f_(){},
m:function m(){},
aX:function aX(){},
fc:function fc(){},
fU:function fU(){},
fV:function fV(){},
h1:function h1(){},
h2:function h2(){},
hf:function hf(){},
hg:function hg(){},
ho:function ho(){},
hp:function hp(){},
bf:function bf(){},
hM:function hM(){},
dO:function dO(){},
hN:function hN(a){this.a=a},
dP:function dP(){},
b5:function b5(){},
eA:function eA(){},
fA:function fA(){},
eN:function eN(){},
eV:function eV(){},
hb:function hb(){},
hc:function hc(){}},W={
lX:function(){var s=document.createElement("a")
return s},
l6:function(){var s=document.createElement("canvas")
return s},
ob:function(a,b,c){var s,r=document.body
r.toString
s=C.q.am(r,a,b,c)
s.toString
r=new H.b_(new W.a1(s),new W.i3(),t.ac.K("b_<i.E>"))
return t.h.a(r.gaL(r))},
i4:function(a){return"wheel"},
cy:function(a){var s,r,q="element tag unavailable"
try{s=J.aK(a)
if(typeof s.ge_(a)=="string")q=s.ge_(a)}catch(r){H.ae(r)}return q},
oe:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ae(s)}return q},
k2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mT:function(a,b,c,d){var s=W.k2(W.k2(W.k2(W.k2(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
a_:function(a,b,c,d){var s=new W.fM(a,b,c==null?null:W.nd(new W.k1(c),t.G),!1)
s.hd()
return s},
mR:function(a){var s=W.lX(),r=window.location
s=new W.ce(new W.k8(s,r))
s.en(a)
return s},
oY:function(a,b,c,d){return!0},
oZ:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
mX:function(){var s=t.N,r=P.mc(C.A,s),q=H.d(["TEMPLATE"],t.s)
s=new W.hj(r,P.cJ(s),P.cJ(s),P.cJ(s),null)
s.es(null,new H.cP(C.A,new W.kf(),t.eM),q,null)
return s},
nd:function(a,b){var s=$.aJ
if(s===C.f)return a
return s.dc(a,b)},
r:function r(){},
hJ:function hJ(){},
dK:function dK(){},
dL:function dL(){},
bO:function bO(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
aA:function aA(){},
hU:function hU(){},
J:function J(){},
cu:function cu(){},
hV:function hV(){},
ao:function ao(){},
aO:function aO(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
b8:function b8(){},
i_:function i_(){},
cv:function cv(){},
cw:function cw(){},
e2:function e2(){},
i0:function i0(){},
fB:function fB(a,b){this.a=a
this.b=b},
F:function F(){},
i3:function i3(){},
j:function j(){},
e:function e(){},
ai:function ai(){},
bS:function bS(){},
e4:function e4(){},
e6:function e6(){},
aC:function aC(){},
ii:function ii(){},
bv:function bv(){},
bw:function bw(){},
bU:function bU(){},
bW:function bW(){},
by:function by(){},
iu:function iu(){},
iM:function iM(){},
bZ:function bZ(){},
ep:function ep(){},
iN:function iN(a){this.a=a},
eq:function eq(){},
iO:function iO(a){this.a=a},
aE:function aE(){},
er:function er(){},
aj:function aj(){},
a1:function a1(a){this.a=a},
w:function w(){},
cU:function cU(){},
aF:function aF(){},
eF:function eF(){},
eO:function eO(){},
j1:function j1(a){this.a=a},
eQ:function eQ(){},
at:function at(){},
eS:function eS(){},
aG:function aG(){},
eT:function eT(){},
aH:function aH(){},
eY:function eY(){},
jc:function jc(a){this.a=a},
au:function au(){},
be:function be(){},
cZ:function cZ(){},
f1:function f1(){},
f2:function f2(){},
c9:function c9(){},
av:function av(){},
ac:function ac(){},
f5:function f5(){},
f6:function f6(){},
jj:function jj(){},
aI:function aI(){},
bD:function bD(){},
fb:function fb(){},
jn:function jn(){},
aZ:function aZ(){},
jE:function jE(){},
fu:function fu(){},
bg:function bg(){},
cc:function cc(){},
cd:function cd(){},
fC:function fC(){},
d9:function d9(){},
fR:function fR(){},
de:function de(){},
ha:function ha(){},
hh:function hh(){},
fz:function fz(){},
fJ:function fJ(a){this.a=a},
la:function la(a,b){this.a=a
this.$ti=b},
fM:function fM(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k1:function k1(a){this.a=a},
lt:function lt(a){this.$ti=a},
ce:function ce(a){this.a=a},
M:function M(){},
cV:function cV(a){this.a=a},
iR:function iR(a){this.a=a},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(){},
k9:function k9(){},
ka:function ka(){},
hj:function hj(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kf:function kf(){},
hi:function hi(){},
cC:function cC(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ak:function ak(){},
k8:function k8(a,b){this.a=a
this.b=b},
ht:function ht(a){this.a=a
this.b=!1},
kn:function kn(a){this.a=a},
fD:function fD(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fO:function fO(){},
fP:function fP(){},
fS:function fS(){},
fT:function fT(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h3:function h3(){},
h4:function h4(){},
h6:function h6(){},
dl:function dl(){},
dm:function dm(){},
h8:function h8(){},
h9:function h9(){},
he:function he(){},
hk:function hk(){},
hl:function hl(){},
dp:function dp(){},
dq:function dq(){},
hm:function hm(){},
hn:function hn(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){}},K={
P:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.b(P.u("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.D(a,0)
r=C.a.D(b,0)
if(s>r){q=r
r=s
s=q}return new K.iX(s,r)},
t:function(a){var s=new K.j2()
s.el(a)
return s},
b4:function b4(){},
e8:function e8(){},
ix:function ix(){},
aa:function aa(){this.a=null},
iX:function iX(a,b){this.a=a
this.b=b},
j2:function j2(){this.a=null}},L={
jl:function(){var s=new L.jk()
s.a=new H.D(t.cn)
s.b=new H.D(t.dL)
s.c=P.cJ(t.X)
return s},
eW:function eW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
fa:function fa(a){this.b=a
this.c=null},
jk:function jk(){var _=this
_.d=_.c=_.b=_.a=null},
fd:function fd(a){this.b=a
this.a=this.c=null}},O={
l7:function(a){var s=new O.a6(a.K("a6<0>"))
s.bh(a)
return s},
a6:function a6(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cQ:function cQ(){this.b=this.a=null},
md:function(){var s,r=new O.em(),q=O.l7(t.hc)
r.e=q
q.aZ(r.gf0(),r.gf2())
q=new O.aU(r,"emission")
q.c=new A.a7(!1,!1,!1)
q.f=new V.Y(0,0,0)
r.f=q
q=new O.aU(r,"ambient")
q.c=new A.a7(!1,!1,!1)
q.f=new V.Y(0,0,0)
r.r=q
q=new O.aU(r,"diffuse")
q.c=new A.a7(!1,!1,!1)
q.f=new V.Y(0,0,0)
r.x=q
q=new O.aU(r,"invDiffuse")
q.c=new A.a7(!1,!1,!1)
q.f=new V.Y(0,0,0)
r.y=q
q=new O.iD(r,"specular")
q.c=new A.a7(!1,!1,!1)
q.f=new V.Y(0,0,0)
q.ch=100
r.z=q
q=new O.iz(r,"bump")
q.c=new A.a7(!1,!1,!1)
r.Q=q
r.ch=null
q=new O.aU(r,"reflect")
q.c=new A.a7(!1,!1,!1)
q.f=new V.Y(0,0,0)
r.cx=q
q=new O.iC(r,"refract")
q.c=new A.a7(!1,!1,!1)
q.f=new V.Y(0,0,0)
q.ch=1
r.cy=q
q=new O.iy(r,"alpha")
q.c=new A.a7(!1,!1,!1)
q.f=1
r.db=q
q=new D.cH()
q.bh(t.gj)
q.e=H.d([],t.bb)
q.f=H.d([],t.cP)
q.r=H.d([],t.eb)
q.x=H.d([],t.du)
q.z=q.y=null
q.ct(q.geZ(),q.gfC(),q.gfG())
r.dx=q
s=new O.iB()
s.b=new V.an(0,0,0,0)
s.c=1
s.d=10
s.e=!1
r.dy=s
s=q.y
q=s==null?q.y=D.L():s
q.n(0,r.gfX())
q=r.dx
s=q.z
q=s==null?q.z=D.L():s
q.n(0,r.geu())
r.fr=null
return r},
hZ:function hZ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
em:function em(){var _=this
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
en:function en(){},
iz:function iz(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aU:function aU(a,b){var _=this
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
f4:function f4(){}},E={
l9:function(){var s,r=new E.bu()
r.a=""
r.b=!0
s=O.l7(t.l)
r.y=s
s.aZ(r.ghX(),r.gi_())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sae(0,null)
r.saW(null)
r.saU(null)
return r},
mO:function(){if(J.l1(window.navigator.vendor,"Google"))return C.H
if(J.l1(window.navigator.userAgent,"Firefox"))return C.r
var s=window.navigator.appVersion
if(J.b1(s).C(s,"Trident")||C.a.C(s,"Edge"))return C.t
if(J.l1(window.navigator.appName,"Microsoft"))return C.t
return C.I},
mP:function(){var s=window.navigator.appVersion
if(J.b1(s).C(s,"Win"))return C.a1
if(C.a.C(s,"Mac"))return C.B
if(C.a.C(s,"Linux"))return C.a2
return C.a3},
oF:function(a,b){var s=new E.iY(a)
s.ek(a,b)
return s},
oN:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.mx(a,!0,!0,!0,!1)
s=W.l6()
r=s.style
r.width="100%"
r.height="100%"
J.l3(a).n(0,s)
return E.mx(s,!0,!0,!0,!1)},
mx:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.f8(),n=t.z,m=C.i.cr(a,"webgl2",P.on(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.u("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.oF(m,a)
n=new T.jg(m)
n.b=m.getParameter(3379)
m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.fr(a)
s=new X.ip()
s.d=P.cJ(t.e)
n.b=s
s=new X.iP(n)
s.f=0
s.r=V.bA()
s.x=V.bA()
s.ch=s.Q=1
n.c=s
s=new X.iv(n)
s.r=0
s.x=V.bA()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.jm(n)
s.f=V.bA()
s.r=V.bA()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.d([],t.eG)
s=$.i6
n.Q=(s==null?$.i6=new E.fK(E.mO(),E.mP()):s).a===C.r?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.a_(q,"contextmenu",n.gfb(),!1))
n.z.push(W.a_(a,"focus",n.gfh(),!1))
n.z.push(W.a_(a,"blur",n.gf4(),!1))
n.z.push(W.a_(q,"keyup",n.gfl(),!1))
n.z.push(W.a_(q,"keydown",n.gfj(),!1))
n.z.push(W.a_(a,"mousedown",n.gfp(),!1))
n.z.push(W.a_(a,"mouseup",n.gfu(),!1))
n.z.push(W.a_(a,p,n.gfs(),!1))
r=n.z
W.i4(a)
W.i4(a)
r.push(W.a_(a,W.i4(a),n.gfw(),!1))
n.z.push(W.a_(q,p,n.gfd(),!1))
n.z.push(W.a_(q,"mouseup",n.gff(),!1))
n.z.push(W.a_(q,"pointerlockchange",n.gfA(),!1))
n.z.push(W.a_(a,"touchstart",n.gfQ(),!1))
n.z.push(W.a_(a,"touchend",n.gfM(),!1))
n.z.push(W.a_(a,"touchmove",n.gfO(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ah(Date.now(),!1)
o.db=0
o.cW()
return o},
hR:function hR(){},
bu:function bu(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bQ:function bQ(a){this.b=a},
c3:function c3(a){this.b=a},
fK:function fK(a,b){this.a=a
this.b=b},
iY:function iY(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
f8:function f8(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ji:function ji(a){this.a=a}},Z={
ls:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.ch(c)),35044)
a.bindBuffer(b,null)
return new Z.fv(b,s)},
ax:function(a){return new Z.bF(a)},
fv:function fv(a,b){this.a=a
this.b=b},
dS:function dS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
fw:function fw(a){this.a=a},
cp:function cp(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(a){this.a=a}},D={
L:function(){var s=new D.bR()
s.d=0
return s},
hS:function hS(){},
bR:function bR(){var _=this
_.d=_.c=_.b=_.a=null},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
Z:function Z(){this.b=null},
aP:function aP(){this.b=null},
aQ:function aQ(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dQ:function dQ(){},
e0:function e0(){},
T:function T(){},
cH:function cH(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
eH:function eH(){},
bC:function bC(){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={dT:function dT(a,b){this.a=a
this.b=b},ef:function ef(a,b){this.a=a
this.b=b},ip:function ip(){this.d=this.b=this.a=null},cM:function cM(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},iv:function iv(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},c0:function c0(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iP:function iP(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},eI:function eI(){},d0:function d0(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},jm:function jm(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fr:function fr(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
od:function(a){var s=new X.ig(),r=new V.an(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=V.lm()
s.r=r
return s},
mh:function(a,b){var s,r=new X.eC()
r.c=1.0471975511965976
r.d=0.1
r.e=2000
r.saU(b)
s=r.c
$.C().toString
if(!(Math.abs(s-a)<1e-9)){r.c=a
s=new D.z("fov",s,a)
s.b=!0
r.a3(s)}s=r.d
$.C().toString
if(!(Math.abs(s-0.1)<1e-9)){r.d=0.1
s=new D.z("near",s,0.1)
s.b=!0
r.a3(s)}s=r.e
$.C().toString
if(!(Math.abs(s-2000)<1e-9)){r.e=2000
s=new D.z("far",s,2000)
s.b=!0
r.a3(s)}return r},
hO:function hO(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
l5:function l5(){},
ig:function ig(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eC:function eC(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
jd:function jd(){}},V={
hG:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qS:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bf(a-b,s)
return(a<0?a+s:a)+b},
I:function(a,b,c){if(a==null)return C.a.ao("null",c)
$.C().toString
return C.a.ao(C.d.e3(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cm:function(a,b,c){var s,r,q,p,o,n,m=H.d([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.o)(a),++q){p=V.I(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.c(m,o)
s=C.a.ao(m[o],r)
n=m.length
if(o>=n)return H.c(m,o)
m[o]=s}return m},
dG:function(a){return C.d.io(Math.pow(2,C.W.cd(Math.log(H.qr(a))/Math.log(2))))},
bY:function(){var s=$.mf
return s==null?$.mf=V.aV(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aV:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ll:function(a,b,c){return V.aV(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lk:function(a,b,c,d){return V.aV(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
me:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aV(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
bA:function(){var s=$.mj
return s==null?$.mj=new V.al(0,0):s},
mk:function(){var s=$.aq
return s==null?$.aq=new V.Q(0,0,0):s},
lm:function(){var s=$.mt
return s==null?$.mt=V.ms(0,0,1,1):s},
ms:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eM(a,b,c,d)},
d7:function(){var s=$.mK
return s==null?$.mK=new V.E(0,0,0):s},
oT:function(){var s=$.jK
return s==null?$.jK=new V.E(-1,0,0):s},
mL:function(){var s=$.jL
return s==null?$.jL=new V.E(0,1,0):s},
mM:function(){var s=$.jM
return s==null?$.jM=new V.E(0,0,1):s},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i7:function i7(){},
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
bc:function bc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
al:function al(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eM:function eM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aw:function aw(a,b){this.a=a
this.b=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qN:function(a){P.oO(C.T,new V.kX(a))},
oI:function(a){var s=new V.j7()
s.em(a,!0)
return s},
b6:function b6(){},
kX:function kX(a){this.a=a},
dY:function dY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e7:function e7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e9:function e9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eE:function eE(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iV:function iV(a){this.a=a
this.c=null},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j7:function j7(){this.b=this.a=null},
j9:function j9(a){this.a=a},
j8:function j8(a){this.a=a},
ja:function ja(a){this.a=a},
nn:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6=V.oI("Test 045"),a7=W.l6()
a7.className="pageLargeCanvas"
a7.id=a4
a6.a.appendChild(a7)
s=t.i
a6.d7(H.d(["WIP ([Issue #104|https://github.com/Grant-Nelson/ThreeDart/issues/104]) ","Test of shadow projection with a spot light."],s))
a6.hf(H.d(["shapes"],s))
a6.d7(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a4)
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.oN(r,!0,!0,!0,!1)
p=new X.hO()
p.d=p.c=p.b=p.a=512
p.e=!0
p.f=!1
p.x=p.r=1
p.ch=T.lp(a5)
p.cx=new V.an(0,0,0,1)
p.cy=!0
p.db=2000
p.dx=!0
p.dy=V.lm()
p.saw(0,512)
p.sar(0,512)
o=new V.an(0,0,0,1)
if(!p.cx.p(0,o)){n=p.cx
p.cx=o
m=new D.z("color",n,o)
m.b=!0
p.a3(m)}m=p.db
$.C().toString
if(!(Math.abs(m-2000)<1e-9)){p.db=2000
m=new D.z("depth",m,2000)
m.b=!0
p.a3(m)}m=p.r
$.C().toString
if(!(Math.abs(m-1)<1e-9)){p.r=1
m=new D.z("autoResizeScalarX",m,1)
m.b=!0
p.a3(m)}m=p.x
$.C().toString
if(!(Math.abs(m-1)<1e-9)){p.x=1
m=new D.z("autoResizeScalarY",m,1)
m.b=!0
p.a3(m)}l=V.lm()
if(!J.G(p.dy,l)){n=p.dy
p.dy=l
m=new D.z("region",n,l)
m.b=!0
p.a3(m)}k=U.ih()
k.n(0,U.bs(V.ll(0,0,-4)))
k.n(0,U.mF(!0,q.x))
m=p.ch
j=q.f.hU("../resources/Test.png")
o=new V.Y(1,1,1)
i=new D.bC()
i.r=new V.Y(1,1,1)
i.ch=1.0471975511965976
i.cx=1
i.dx=i.cy=1.5707963267948966
i.db=!0
i.dy=1
i.fx=i.fr=0
i.fy=!0
i.a=V.mk()
i.b=V.mM()
i.c=V.mL()
i.d=V.oT()
n=i.f
i.f=k
k.gu().n(0,i.gb0())
h=new D.z("mover",n,i.f)
h.b=!0
i.V(h)
if(!i.r.p(0,o)){n=i.r
i.r=o
h=new D.z("color",n,o)
h.b=!0
i.V(h)}h=i.x
if(h!==j){if(h!=null)h.gu().J(0,i.gb0())
n=i.x
i.x=j
j.gu().n(0,i.gb0())
j=new D.z("texture",n,i.x)
j.b=!0
i.V(j)}j=i.y
if(j!==m){if(j!=null)j.gu().J(0,i.gb0())
n=i.y
i.y=m
m.gu().n(0,i.gb0())
m=new D.z("shadow",n,i.y)
m.b=!0
i.V(m)}m=i.ch
$.C().toString
if(!(Math.abs(m-0.5)<1e-9)){i.ch=0.5
j=1/(Math.sqrt(2)*Math.tan(i.ch))
i.z=j
i.Q=j*i.cx
m=new D.z("fov",m,i.ch)
m.b=!0
i.V(m)}m=i.cx
$.C().toString
if(!(Math.abs(m-1)<1e-9)){i.cx=1
j=i.z
if(typeof j!=="number")return j.A()
i.Q=j
m=new D.z("ratio",m,1)
m.b=!0
i.V(m)}m=i.cy
$.C().toString
if(!(Math.abs(m-1.5707963267948966)<1e-9)){i.cy=1.5707963267948966
m=new D.z("cutoff",m,1.5707963267948966)
m.b=!0
i.V(m)}m=i.dx
$.C().toString
if(!(Math.abs(m-1.5707963267948966)<1e-9)){i.dx=1.5707963267948966
m=new D.z("coneAngle",m,1.5707963267948966)
m.b=!0
i.V(m)}m=$.mN
if(m==null){m=new V.d8(1,0.00390625,0.0000152587890625,0)
$.mN=m
g=m}else g=m
if(!J.G(i.e,g)){n=i.e
i.e=g
m=new D.z("shadowAdjust",n,g)
m.b=!0
i.V(m)}m=i.dy
$.C().toString
if(!(Math.abs(m-0)<1e-9)){i.dy=0
m=new D.z("attenuation0",m,0)
m.b=!0
i.V(m)}m=i.fr
$.C().toString
if(!(Math.abs(m-0.1)<1e-9)){i.fr=0.1
m=new D.z("attenuation1",m,0.1)
m.b=!0
i.V(m)}m=i.fx
$.C().toString
if(!(Math.abs(m-0)<1e-9)){i.fx=0
m=new D.z("attenuation2",m,0)
m.b=!0
i.V(m)}if(i.db){i.db=!1
m=new D.z("enableCutOff",!0,!1)
m.b=!0
i.V(m)}f=O.md()
f.dx.n(0,i)
m=f.r
m.saG(0,new V.Y(0.1,0.1,0.1))
m=f.x
m.saG(0,new V.Y(0.7,0.7,0.7))
m=f.z
m.saG(0,new V.Y(0.3,0.3,0.3))
m=f.z
m.cZ(new A.a7(!0,!1,!1))
m.d_(100)
e=E.l9()
e.sae(0,F.ns())
d=E.l9()
d.saU(U.bs(V.lk(5,5,5,1)))
m=F.lL(1,a5,a5,1)
m.cc()
d.sae(0,m)
c=U.ih()
c.n(0,U.mF(!1,q.x))
c.n(0,U.bs(V.me(3.141592653589793)))
c.n(0,U.bs(V.ll(0,0,5)))
b=E.l9()
m=U.ih()
m.n(0,U.bs(V.lk(0.1,0.1,0.1,1)))
m.n(0,k)
b.saU(m)
b.sae(0,F.kz(0,!1,!0,40,1))
m=O.md()
j=m.f
j.saG(0,new V.Y(1,1,1))
b.saW(m)
a=M.m8()
a.saW(f)
a.e.n(0,e)
a.e.n(0,d)
a.e.n(0,b)
a.b.saU(c)
m=U.ih()
m.n(0,U.bs(V.lk(-1,1,-1,1)))
j=new U.bX()
j.c=V.bY()
j.d=0
j.a=k
k.gu().n(0,j.gaN())
h=new D.z("mover",a5,j.a)
h.b=!0
j.S(h)
m.n(0,j)
a0=Math.cos(3.141592653589793)
a1=Math.sin(3.141592653589793)
m.n(0,U.bs(V.aV(a0,-a1,0,0,a1,a0,0,0,0,0,1,0,0,0,0,1)))
m.n(0,U.bs(V.ll(0,0,2)))
a2=X.mh(0.5,m)
a3=M.m8()
a3.se0(0,p)
m=new O.hZ()
m.b=1
m.c=10
m.f=m.e=m.d=!1
$.C().toString
if(!(Math.abs(0)<1e-9)){j=new D.z("start",1,1)
j.b=!0
m.a2(j)}j=m.c
$.C().toString
if(!(Math.abs(j-20)<1e-9)){m.c=20
j=new D.z("stop",j,20)
j.b=!0
m.a2(j)}if(!m.f){m.f=!0
j=new D.z("focus",!1,!0)
j.b=!0
m.a2(j)}a3.saW(m)
a3.e.n(0,e)
a3.e.n(0,d)
a3.sdf(a2)
m=H.d([a3,a],t.f2)
j=new M.cq()
j.bh(t.bn)
j.e=!0
j.f=!1
j.r=null
j.aZ(j.gfI(),j.gfK())
j.a7(0,m)
m=q.d
if(m!==j){if(m!=null)m.gu().J(0,q.gcC())
q.d=j
j.gu().n(0,q.gcC())
q.cD()}m=new V.iV("shapes")
s=s.getElementById("shapes")
m.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
m.aR(0,"Cube",new V.kO(e))
m.aR(0,"Cylinder",new V.kP(e))
m.aR(0,"Bar",new V.kQ(e))
m.aR(0,"Cone",new V.kR(e))
m.aR(0,"Sphere",new V.kS(e))
m.d5(0,"Toroid",new V.kT(e),!0)
m.aR(0,"Knot",new V.kU(e))
s=q.Q
if(s==null)s=q.Q=D.L()
m=s.b
s=m==null?s.b=H.d([],t.f):m
s.push(new V.kV(a6,f))
V.qN(q)},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a,b){this.a=a
this.b=b}},U={
m4:function(){var s=new U.hT()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
bs:function(a){var s=new U.cr()
s.a=a
return s},
ih:function(){var s=new U.bT()
s.bh(t.ah)
s.aZ(s.geq(),s.gfE())
s.e=null
s.f=V.bY()
s.r=0
return s},
mF:function(a,b){var s,r,q,p=new U.d6(),o=U.m4()
o.se7(0,!0)
o.sdG(6.283185307179586)
o.sdI(0)
o.sa5(0,0)
o.sdH(100)
o.sW(0)
o.sdi(0.5)
p.b=o
s=p.gaN()
o.gu().n(0,s)
o=U.m4()
o.se7(0,!0)
o.sdG(6.283185307179586)
o.sdI(0)
o.sa5(0,0)
o.sdH(100)
o.sW(0)
o.sdi(0.5)
p.c=o
o.gu().n(0,s)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
r=new X.c_(a,!1,!1)
q=p.d
p.d=r
o=new D.z("modifiers",q,r)
o.b=!0
p.S(o)
o=p.f
if(o!==!1){p.f=!1
o=new D.z("invertX",o,!1)
o.b=!0
p.S(o)}o=p.r
if(o!==!1){p.r=!1
o=new D.z("invertY",o,!1)
o.b=!0
p.S(o)}p.hm(b)
return p},
hT:function hT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cr:function cr(){this.b=this.a=null},
bT:function bT(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
bX:function bX(){var _=this
_.d=_.c=_.b=_.a=null},
a0:function a0(){},
d6:function d6(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
m8:function(){var s,r,q=new M.cz()
q.a=!0
s=O.l7(t.l)
q.e=s
s.aZ(q.gf7(),q.gf9())
q.y=q.x=q.r=q.f=null
r=X.od(null)
q.sdf(null)
q.se0(0,r)
q.saW(null)
return q},
cq:function cq(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cz:function cz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ab:function ab(){}},A={
or:function(a,b){var s=a.b7,r=new A.el(b,s)
r.cB(b,s)
r.ej(a,b)
return r},
os:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="MaterialLight_"+a4.gav(a4)+a5.gav(a5)+a6.gav(a6)+a7.gav(a7)+a8.gav(a8)+a9.gav(a9)+b0.gav(b0)+b1.gav(b1)+b2.gav(b2)+"_"
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
c=$.aL()
if(h){s=$.bn()
c=new Z.bF(c.a|s.a)}if(g){s=$.bm()
c=new Z.bF(c.a|s.a)}if(f){s=$.bl()
c=new Z.bF(c.a|s.a)}return new A.iA(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
kv:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kw:function(a,b,c){var s
A.kv(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hH(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
pW:function(a,b){var s,r=a.a,q=r.a
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
pS:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kw(b,r,"ambient")
b.a+="\n"},
pU:function(a,b){var s,r=a.c
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
pX:function(a,b){var s,r=a.d
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
q2:function(a,b){var s,r=a.e
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
pZ:function(a,b){var s,r,q
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
q0:function(a,b){var s,r=a.r,q=r.a
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
q1:function(a,b){var s,r=a.x,q=r.a
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
pT:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hH(r)
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
if(typeof s!=="number")return s.ai()
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
pV:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hH(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.ai()
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
q_:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hH(r)
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
if(typeof s!=="number")return s.ai()
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
q3:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hH(r)
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
if(typeof s!=="number")return s.ai()
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
if(s==null)s=$.i6=new E.fK(E.mO(),E.mP())
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
pY:function(a,b){var s,r
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
q4:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.S("")
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
A.pW(a,h)
A.pS(a,h)
A.pU(a,h)
A.pX(a,h)
A.q2(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.q0(a,h)
A.q1(a,h)}A.pZ(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pT(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pV(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.q_(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.q3(a,o[m],h)
A.pY(a,h)}o=h.a+="// === Main ===\n"
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
h.a+=k+(p[0].toUpperCase()+C.a.af(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.af(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.af(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.af(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)s=!1
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
q5:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bn+"];\n"
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
q7:function(a,b){var s
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
q6:function(a,b){var s
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
q9:function(a,b){var s,r
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
qa:function(a,b){var s,r
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
q8:function(a,b){var s
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
qb:function(a,b){var s
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
hH:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.a.af(a,1)},
lr:function(a,b,c,d,e){var s=new A.jr(a,c,e)
s.f=d
P.it(d,0,!1,t.e)
return s},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(a){this.a=a},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
e_:function e_(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
el:function el(a,b){var _=this
_.iA=_.iz=_.bo=_.b7=_.bn=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iN=_.iM=_.iL=_.ca=_.c9=_.c8=_.c7=_.c6=_.c5=_.c4=_.c3=_.iK=_.iJ=_.du=_.iI=_.iH=_.dt=_.ds=_.iG=_.iF=_.dr=_.dq=_.iE=_.iD=_.dn=_.iC=_.iB=_.dm=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dR:function dR(a,b){this.a=a
this.b=b},
e1:function e1(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b){this.a=a
this.b=b},
eU:function eU(a,b){this.a=a
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
_.bn=b5
_.b7=b6
_.bo=b7},
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
c7:function c7(){},
fe:function fe(){},
jw:function jw(a){this.a=a},
fg:function fg(a,b,c){this.a=a
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
ff:function ff(a,b,c){this.a=a
this.c=b
this.d=c},
js:function js(a,b,c){this.a=a
this.c=b
this.d=c},
fh:function fh(a,b,c){this.a=a
this.c=b
this.d=c},
fi:function fi(a,b,c){this.a=a
this.c=b
this.d=c},
jx:function jx(a,b,c){this.a=a
this.c=b
this.d=c},
fj:function fj(a,b,c){this.a=a
this.c=b
this.d=c},
d3:function d3(a,b,c){this.a=a
this.c=b
this.d=c},
fk:function fk(a,b,c){this.a=a
this.c=b
this.d=c},
fl:function fl(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lL:function(a,b,c,d){var s=F.ln()
F.dy(s,b,c,d,a,1,0,0,1)
F.dy(s,b,c,d,a,0,1,0,3)
F.dy(s,b,c,d,a,0,0,1,2)
F.dy(s,b,c,d,a,-1,0,0,0)
F.dy(s,b,c,d,a,0,-1,0,0)
F.dy(s,b,c,d,a,0,0,-1,3)
s.az()
return s},
kq:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dy:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.E(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.E(s+a5,r+a3,q+a4)
o=new V.E(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.E(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.kq(g)
j=F.kq(f)
i=F.lS(a1,a2,new F.kp(h,F.kq(e),F.kq(d),j,k,a0),b)
if(i!=null)a.ba(i)},
nh:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0<3)return null
s=F.ln()
r=b?-1:1
q=-6.283185307179586/a0
p=H.d([],t.j)
o=s.a
n=new V.E(0,0,r).H()
p.push(o.hj(new V.bB(a,-1,-1,-1),new V.an(1,1,1,1),new V.Q(0,0,c),new V.E(0,0,r),new V.al(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(typeof i!=="number")return H.x(i)
n=new V.E(k,j,r).H()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
o.toString
e=F.ft(new V.bB(a,-1,-1,-1),null,new V.an(h,f,g,1),new V.Q(k*i,j*i,c),new V.E(0,0,r),new V.al(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.n(0,e)
p.push(e)}s.d.hh(p)
return s},
kz:function(a,b,c,d,e){return F.qw(b,c,1,new F.kA(a,e),d)},
qw:function(a,b,c,d,e){var s,r=null
if(e<3)return r
if(c<1)return r
s=F.lS(c,e,new F.kC(d),r)
if(s==null)return r
s.az()
s.bX()
if(b)s.ba(F.nh(3,!1,1,new F.kD(d),e))
if(a)s.ba(F.nh(1,!0,-1,new F.kE(d),e))
return s},
qO:function(a,b){var s,r,q={}
q.a=s
q.a=null
q.a=new F.kY()
r=F.lL(a,null,new F.kZ(q,1),b)
r.bX()
return r},
ns:function(){return F.ng(15,30,0.5,1,new F.l_())},
qJ:function(){return F.ng(12,120,0.3,1,new F.kN(3,2))},
ng:function(a,b,c,d,e){var s=F.lS(a,b,new F.kB(e,d,b,c),null)
if(s==null)return null
s.az()
s.bX()
return s},
lS:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.ln()
r=H.d([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.ft(e,e,new V.an(n,0,0,1),e,e,new V.al(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.c2(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.ft(e,e,new V.an(h,g,f,1),e,e,new V.al(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.c2(d))}}s.d.hi(a+1,b+1,r)
return s},
cA:function(a,b,c){var s=new F.e3(),r=a.a
if(r==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
s.bT(a)
s.bU(b)
s.h2(c)
s.a.a.d.b.push(s)
s.a.a.Z()
return s},
ol:function(a,b){var s=new F.ei(),r=a.a
if(r==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
s.bT(a)
s.bU(b)
s.a.a.c.b.push(s)
s.a.a.Z()
return s},
ln:function(){var s=new F.j3(),r=new F.jN(s)
r.b=!1
r.c=H.d([],t.j)
s.a=r
r=new F.j6(s)
r.b=H.d([],t.o)
s.b=r
r=new F.j5(s)
r.b=H.d([],t.L)
s.c=r
r=new F.j4(s)
r.b=H.d([],t.b)
s.d=r
s.e=null
return s},
ft:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.fs(),p=new F.jV()
p.b=H.d([],t.o)
q.b=p
p=new F.jR()
s=t.L
p.b=H.d([],s)
p.c=H.d([],s)
q.c=p
p=new F.jO()
s=t.b
p.b=H.d([],s)
p.c=H.d([],s)
p.d=H.d([],s)
q.d=p
h=$.nJ()
q.e=0
p=$.aL()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bn().a)!==0?e:r
q.x=(s&$.bm().a)!==0?b:r
q.y=(s&$.bL().a)!==0?f:r
q.z=(s&$.bM().a)!==0?g:r
q.Q=(s&$.nK().a)!==0?c:r
q.ch=(s&$.cn().a)!==0?i:0
q.cx=(s&$.bl().a)!==0?a:r
return q},
kp:function kp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kA:function kA(a,b){this.a=a
this.b=b},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kY:function kY(){},
kZ:function kZ(a,b){this.a=a
this.b=b},
l_:function l_(){},
kN:function kN(a,b){this.a=a
this.b=b},
kB:function kB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e3:function e3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ib:function ib(){},
jb:function jb(){},
ei:function ei(){this.b=this.a=null},
iq:function iq(){},
jq:function jq(){},
eG:function eG(){this.a=null},
j3:function j3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j4:function j4(a){this.a=a
this.b=null},
j5:function j5(a){this.a=a
this.b=null},
j6:function j6(a){this.a=a
this.b=null},
fs:function fs(){var _=this
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
jV:function jV(){this.b=null}},T={
lp:function(a){var s=new T.jf()
s.a=0
s.b=a
s.d=s.c=!1
s.x=s.r=s.f=s.e=0
return s},
f7:function f7(){},
je:function je(){},
jf:function jf(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jg:function jg(a){var _=this
_.a=a
_.e=_.d=_.b=null},
jh:function jh(a,b,c,d,e,f,g){var _=this
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
H.le.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gP:function(a){return H.cW(a)},
i:function(a){return"Instance of '"+H.f(H.eK(a))+"'"}}
J.ec.prototype={
i:function(a){return String(a)},
gP:function(a){return a?519018:218159},
$iaz:1}
J.cG.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0}}
J.ba.prototype={
gP:function(a){return 0},
i:function(a){return String(a)},
$ima:1}
J.eD.prototype={}
J.bE.prototype={}
J.aD.prototype={
i:function(a){var s=a[$.nw()]
if(s==null)return this.eg(a)
return"JavaScript function for "+H.f(J.a5(s))},
$iaB:1}
J.v.prototype={
cm:function(a,b){if(!!a.fixed$length)H.q(P.B("removeAt"))
if(b<0||b>=a.length)throw H.b(P.eL(b,null))
return a.splice(b,1)[0]},
J:function(a,b){var s
if(!!a.fixed$length)H.q(P.B("remove"))
for(s=0;s<a.length;++s)if(J.G(a[s],b)){a.splice(s,1)
return!0}return!1},
a7:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.B("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.o)(b),++r)a.push(b[r])},
G:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.b7(a))}},
j:function(a,b){var s,r,q=P.it(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.c(q,s)
q[s]=r}return q.join(b)},
hS:function(a){return this.j(a,"")},
hL:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.b7(a))}return s},
hM:function(a,b,c){return this.hL(a,b,c,t.z)},
hK:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.b(P.b7(a))}throw H.b(H.il())},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
ghJ:function(a){if(a.length>0)return a[0]
throw H.b(H.il())},
gaA:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.il())},
d9:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.b(P.b7(a))}return!1},
b_:function(a,b){if(!!a.immutable$list)H.q(P.B("sort"))
H.oL(a,b==null?J.pJ():b)},
ec:function(a){return this.b_(a,null)},
C:function(a,b){var s
for(s=0;s<a.length;++s)if(J.G(a[s],b))return!0
return!1},
i:function(a){return P.lb(a,"[","]")},
gN:function(a){return new J.a2(a,a.length)},
gP:function(a){return H.cW(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.B("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.cl(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.q(P.B("indexed set"))
if(b>=a.length||b<0)throw H.b(H.cl(a,b))
a[b]=c},
$il:1,
$ih:1,
$in:1}
J.im.prototype={}
J.a2.prototype={
gB:function(a){return this.d},
q:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bx.prototype={
aT:function(a,b){var s
if(typeof b!="number")throw H.b(H.ay(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbr(b)
if(this.gbr(a)===s)return 0
if(this.gbr(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbr:function(a){return a===0?1/a<0:a<0},
io:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.B(""+a+".toInt()"))},
cd:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.B(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.B(""+a+".round()"))},
e3:function(a,b){var s
if(b>20)throw H.b(P.a4(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbr(a))return"-"+s
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
bf:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ei:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d1(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.d1(a,b)},
d1:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.B("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aQ:function(a,b){var s
if(a>0)s=this.d0(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
h6:function(a,b){if(b<0)throw H.b(H.ay(b))
return this.d0(a,b)},
d0:function(a,b){return b>31?0:a>>>b},
$iX:1,
$iR:1}
J.cF.prototype={$ik:1}
J.cE.prototype={}
J.aR.prototype={
U:function(a,b){if(b<0)throw H.b(H.cl(a,b))
if(b>=a.length)H.q(H.cl(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.b(H.cl(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!="string")throw H.b(P.lY(b,null,null))
return a+b},
aV:function(a,b,c,d){var s,r,q=P.bd(b,c,a.length)
if(!H.bI(q))H.q(H.ay(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
aa:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a4(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a6:function(a,b){return this.aa(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.eL(b,null))
if(b>c)throw H.b(P.eL(b,null))
if(c>a.length)throw H.b(P.eL(c,null))
return a.substring(b,c)},
af:function(a,b){return this.t(a,b,null)},
ir:function(a){return a.toLowerCase()},
A:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.Q)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ao:function(a,b){var s=b-a.length
if(s<=0)return a
return this.A(" ",s)+a},
bp:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a4(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dB:function(a,b){return this.bp(a,b,0)},
hu:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a4(c,0,s,null,null))
return H.nr(a,b,c)},
C:function(a,b){return this.hu(a,b,0)},
aT:function(a,b){var s
if(typeof b!="string")throw H.b(H.ay(b))
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
$iy:1}
H.eg.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.p.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.U(this.a,b)}}
H.l.prototype={}
H.cL.prototype={
gN:function(a){return new H.bb(this,this.gm(this))},
bz:function(a,b){return this.ef(0,b)}}
H.bb.prototype={
gB:function(a){var s=this.d
return s},
q:function(){var s,r=this,q=r.a,p=J.b1(q),o=p.gm(q)
if(r.b!=o)throw H.b(P.b7(q))
s=r.c
if(typeof o!=="number")return H.x(o)
if(s>=o){r.d=null
return!1}r.d=p.I(q,s);++r.c
return!0}}
H.aT.prototype={
gN:function(a){return new H.ek(J.b3(this.a),this.b)},
gm:function(a){return J.aM(this.a)},
I:function(a,b){return this.b.$1(J.hI(this.a,b))}}
H.cx.prototype={$il:1}
H.ek.prototype={
q:function(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){var s=this.a
return s}}
H.cP.prototype={
gm:function(a){return J.aM(this.a)},
I:function(a,b){return this.b.$1(J.hI(this.a,b))}}
H.b_.prototype={
gN:function(a){return new H.fx(J.b3(this.a),this.b)}}
H.fx.prototype={
q:function(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.cB.prototype={}
H.fo.prototype={
l:function(a,b,c){throw H.b(P.B("Cannot modify an unmodifiable list"))}}
H.ca.prototype={}
H.cs.prototype={
i:function(a){return P.lj(this)},
l:function(a,b,c){H.o8()},
$iH:1}
H.ct.prototype={
gm:function(a){return this.a},
c0:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c0(0,b))return null
return this.cM(b)},
cM:function(a){return this.b[a]},
G:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cM(q))}}}
H.jo.prototype={
an:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.ee.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.fn.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iT.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hd.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.br.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nu(r==null?"unknown":r)+"'"},
$iaB:1,
giu:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f3.prototype={}
H.eX.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nu(s)+"'"}}
H.bP.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bP))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gP:function(a){var s,r=this.c
if(r==null)s=H.cW(this.a)
else s=typeof r!=="object"?J.af(r):H.cW(r)
return(s^H.cW(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eK(s))+"'")}}
H.eP.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.D.prototype={
gm:function(a){return this.a},
gbq:function(a){return this.a===0},
ga_:function(a){return new H.cI(this,H.dA(this).K("cI<1>"))},
git:function(a){var s=this,r=H.dA(s)
return H.oq(s.ga_(s),new H.io(s),r.c,r.Q[1])},
c0:function(a,b){var s=this.b
if(s==null)return!1
return this.eH(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bi(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bi(p,b)
q=r==null?n:r.b
return q}else return o.hQ(b)},
hQ:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cN(p,q.dD(a))
r=q.dE(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cF(s==null?q.b=q.bM():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cF(r==null?q.c=q.bM():r,b,c)}else q.hR(b,c)},
hR:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bM()
s=p.dD(a)
r=p.cN(o,s)
if(r==null)p.bR(o,s,[p.bN(a,b)])
else{q=p.dE(r,a)
if(q>=0)r[q].b=b
else r.push(p.bN(a,b))}},
G:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.b7(s))
r=r.c}},
cF:function(a,b,c){var s=this.bi(a,b)
if(s==null)this.bR(a,b,this.bN(b,c))
else s.b=c},
eS:function(){this.r=this.r+1&67108863},
bN:function(a,b){var s,r=this,q=new H.ir(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.eS()
return q},
dD:function(a){return J.af(a)&0x3ffffff},
dE:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1},
i:function(a){return P.lj(this)},
bi:function(a,b){return a[b]},
cN:function(a,b){return a[b]},
bR:function(a,b,c){a[b]=c},
eL:function(a,b){delete a[b]},
eH:function(a,b){return this.bi(a,b)!=null},
bM:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bR(r,s,r)
this.eL(r,s)
return r}}
H.io.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.dA(this.a).K("2(1)")}}
H.ir.prototype={}
H.cI.prototype={
gm:function(a){return this.a.a},
gN:function(a){var s=this.a,r=new H.ej(s,s.r)
r.c=s.e
return r}}
H.ej.prototype={
gB:function(a){return this.d},
q:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.b7(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kH.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.kI.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kJ.prototype={
$1:function(a){return this.a(a)}}
H.ed.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imr:1}
H.cR.prototype={$icR:1}
H.V.prototype={$iV:1}
H.c1.prototype={
gm:function(a){return a.length},
$iA:1}
H.bz.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]},
l:function(a,b,c){H.b0(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.cS.prototype={
l:function(a,b,c){H.b0(b,a,a.length)
a[b]=c},
$il:1,
$ih:1,
$in:1}
H.es.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.et.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.eu.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.ev.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.ew.prototype={
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.cT.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b0(b,a,a.length)
return a[b]}}
H.c2.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b0(b,a,a.length)
return a[b]},
$ic2:1,
$ibf:1}
H.df.prototype={}
H.dg.prototype={}
H.dh.prototype={}
H.di.prototype={}
H.as.prototype={
K:function(a){return H.hr(v.typeUniverse,this,a)},
b1:function(a){return H.pi(v.typeUniverse,this,a)}}
H.fQ.prototype={}
H.fL.prototype={
i:function(a){return this.a}}
H.ds.prototype={}
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
P.dr.prototype={
ew:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ck(new P.kh(this,b),0),a)
else throw H.b(P.B("`setTimeout()` not found."))},
ex:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ck(new P.kg(this,a,Date.now(),b),0),a)
else throw H.b(P.B("Periodic timer."))},
$id_:1}
P.kh.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.kg.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.ei(s,o)}q.c=p
r.d.$1(q)}}
P.cf.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bG.prototype={
gB:function(a){var s=this.c
if(s==null)return this.b
return s.gB(s)},
q:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.q())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.cf){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.c(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.b3(s)
if(o instanceof P.bG){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dn.prototype={
gN:function(a){return new P.bG(this.a())}}
P.fy.prototype={}
P.cY.prototype={}
P.eZ.prototype={}
P.d_.prototype={}
P.ko.prototype={}
P.kx.prototype={
$0:function(){var s=H.b(this.a)
s.stack=J.a5(this.b)
throw s}}
P.k5.prototype={
ij:function(a){var s,r,q,p=null
try{if(C.f===$.aJ){a.$0()
return}P.qe(p,p,this,a)}catch(q){s=H.ae(q)
r=H.lN(q)
P.nb(p,p,this,s,r)}},
ik:function(a,b){var s,r,q,p=null
try{if(C.f===$.aJ){a.$1(b)
return}P.qf(p,p,this,a,b)}catch(q){s=H.ae(q)
r=H.lN(q)
P.nb(p,p,this,s,r)}},
il:function(a,b){return this.ik(a,b,t.z)},
hr:function(a){return new P.k6(this,a)},
dc:function(a,b){return new P.k7(this,a,b)}}
P.k6.prototype={
$0:function(){return this.a.ij(this.b)}}
P.k7.prototype={
$1:function(a){return this.a.il(this.b,a)},
$S:function(){return this.c.K("~(0)")}}
P.db.prototype={
gN:function(a){var s=new P.dc(this,this.r)
s.c=this.e
return s},
gm:function(a){return this.a},
C:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eG(b)
return r}},
eG:function(a){var s=this.d
if(s==null)return!1
return this.bJ(s[this.bF(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cH(s==null?q.b=P.lu():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cH(r==null?q.c=P.lu():r,b)}else return q.ey(0,b)},
ey:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lu()
s=q.bF(b)
r=p[s]
if(r==null)p[s]=[q.bE(b)]
else{if(q.bJ(r,b)>=0)return!1
r.push(q.bE(b))}return!0},
J:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fT(this.c,b)
else return this.fS(0,b)},
fS:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bF(b)
r=n[s]
q=o.bJ(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d3(p)
return!0},
cH:function(a,b){if(a[b]!=null)return!1
a[b]=this.bE(b)
return!0},
fT:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d3(s)
delete a[b]
return!0},
cI:function(){this.r=1073741823&this.r+1},
bE:function(a){var s,r=this,q=new P.k4(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cI()
return q},
d3:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cI()},
bF:function(a){return J.af(a)&1073741823},
bJ:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1}}
P.k4.prototype={}
P.dc.prototype={
gB:function(a){return this.d},
q:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.b7(q))
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
gN:function(a){return new H.bb(a,this.gm(a))},
I:function(a,b){return this.h(a,b)},
gbq:function(a){return this.gm(a)===0},
iq:function(a,b){var s,r,q,p,o=this
if(o.gbq(a)){s=J.lc(0,H.bJ(a).K("i.E"))
return s}r=o.h(a,0)
q=P.it(o.gm(a),r,!0,H.bJ(a).K("i.E"))
p=1
while(!0){s=o.gm(a)
if(typeof s!=="number")return H.x(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.c(q,p)
q[p]=s;++p}return q},
ip:function(a){return this.iq(a,!0)},
hH:function(a,b,c,d){var s
P.bd(b,c,this.gm(a))
for(s=b;s<c;++s)this.l(a,s,d)},
i:function(a){return P.lb(a,"[","]")}}
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
P.U.prototype={
G:function(a,b){var s,r
for(s=J.b3(this.ga_(a));s.q();){r=s.gB(s)
b.$2(r,this.h(a,r))}},
gm:function(a){return J.aM(this.ga_(a))},
i:function(a){return P.lj(a)},
$iH:1}
P.hs.prototype={
l:function(a,b,c){throw H.b(P.B("Cannot modify unmodifiable map"))}}
P.cO.prototype={
h:function(a,b){return J.co(this.a,b)},
l:function(a,b,c){J.l0(this.a,b,c)},
G:function(a,b){J.l2(this.a,b)},
gm:function(a){return J.aM(this.a)},
i:function(a){return J.a5(this.a)},
$iH:1}
P.cb.prototype={}
P.dj.prototype={
a7:function(a,b){var s
for(s=J.b3(b);s.q();)this.n(0,s.gB(s))},
i:function(a){return P.lb(this,"{","}")},
I:function(a,b){var s,r,q,p="index"
P.o_(b,p)
P.mq(b,p)
for(s=P.p2(this,this.r),r=0;s.q();){q=s.d
if(b===r)return q;++r}throw H.b(P.O(b,this,p,null,r))},
$il:1,
$ih:1}
P.dd.prototype={}
P.dw.prototype={}
P.jH.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ae(r)}return null}}
P.jI.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ae(r)}return null}}
P.hP.prototype={
hW:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bd(a2,a3,a1.length)
if(a3==null)throw H.b(P.mp("Invalid range"))
s=$.nM()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.D(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.kG(C.a.D(a1,l))
h=H.kG(C.a.D(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.c(s,g)
f=s[g]
if(f>=0){g=C.a.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.S("")
e=p}else e=p
d=e.a+=C.a.t(a1,q,r)
e.a=d+H.ar(k)
q=l
continue}}throw H.b(P.a3("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.t(a1,q,a3)
d=e.length
if(o>=0)P.lZ(a1,n,a3,o,m,d)
else{c=C.c.bf(d-1,4)+1
if(c===1)throw H.b(P.a3(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aV(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.lZ(a1,n,a3,o,m,b)
else{c=C.c.bf(b,4)
if(c===1)throw H.b(P.a3(a,a1,a3))
if(c>1)a1=C.a.aV(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hQ.prototype={}
P.dU.prototype={}
P.dW.prototype={}
P.i5.prototype={}
P.ik.prototype={
i:function(a){return this.a}}
P.ij.prototype={
eI:function(a,b,c){var s,r,q,p,o,n,m=null
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
if(p>b)o.a+=C.a.t(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.nY(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.jF.prototype={
ghG:function(){return C.R}}
P.jJ.prototype={
c1:function(a){var s,r,q,p=P.bd(0,null,a.length)
if(p==null)throw H.b(P.mp("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.km(r)
if(q.eN(a,0,p)!==p){J.nT(a,p-1)
q.bW()}return new Uint8Array(r.subarray(0,H.pB(0,q.b,r.length)))}}
P.km.prototype={
bW:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.c(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.c(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.c(r,q)
r[q]=189},
he:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bW()
return!1}},
eN:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.U(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.he(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bW()}else if(p<=2047){o=l.b
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
P.jG.prototype={
c1:function(a){var s=this.a,r=P.oR(s,a,0,null)
if(r!=null)return r
return new P.kl(s).hv(a,0,null,!0)}}
P.kl.prototype={
hv:function(a,b,c,d){var s,r,q,p,o=this,n=P.bd(b,c,J.aM(a))
if(b===n)return""
s=P.px(a,b,n)
if(typeof n!=="number")return n.X()
n-=b
r=o.bG(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.py(q)
o.b=0
throw H.b(P.a3(p,a,b+o.c))}return r},
bG:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.X()
if(c-b>1000){s=C.c.a4(b+c,2)
r=q.bG(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bG(a,s,c,d)}return q.hA(a,b,c,d)},
hA:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.S(""),f=b+1,e=a.length
if(b<0||b>=e)return H.c(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.D("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.D(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.ar(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.ar(j)
break
case 65:g.a+=H.ar(j);--f
break
default:p=g.a+=H.ar(j)
g.a=p+H.ar(j)
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
g.a+=H.ar(a[l])}else g.a+=P.f0(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.ar(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.az.prototype={}
P.ah.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ah&&this.a===b.a&&!0},
aT:function(a,b){return C.c.aT(this.a,b.a)},
gP:function(a){var s=this.a
return(s^C.c.aQ(s,30))&1073741823},
i:function(a){var s=this,r=P.o9(H.oB(s)),q=P.dZ(H.oz(s)),p=P.dZ(H.ov(s)),o=P.dZ(H.ow(s)),n=P.dZ(H.oy(s)),m=P.dZ(H.oA(s)),l=P.oa(H.ox(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.X.prototype={}
P.bt.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bt&&this.a===b.a},
gP:function(a){return C.c.gP(this.a)},
aT:function(a,b){return C.c.aT(this.a,b.a)},
i:function(a){var s,r,q,p=new P.i2(),o=this.a
if(o<0)return"-"+new P.bt(0-o).i(0)
s=p.$1(C.c.a4(o,6e7)%60)
r=p.$1(C.c.a4(o,1e6)%60)
q=new P.i1().$1(o%1e6)
return""+C.c.a4(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
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
P.K.prototype={}
P.dM.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.i8(s)
return"Assertion failed"}}
P.ey.prototype={
i:function(a){return"Throw of null."}}
P.ag.prototype={
gbI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbH:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbI()+o+m
if(!q.a)return l
s=q.gbH()
r=P.i8(q.b)
return l+s+": "+r}}
P.c5.prototype={
gbI:function(){return"RangeError"},
gbH:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.ea.prototype={
gbI:function(){return"RangeError"},
gbH:function(){var s,r=this.b
if(typeof r!=="number")return r.aj()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gm:function(a){return this.f}}
P.fp.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fm.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c8.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dV.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.i8(s)+"."}}
P.eB.prototype={
i:function(a){return"Out of Memory"},
$iK:1}
P.cX.prototype={
i:function(a){return"Stack Overflow"},
$iK:1}
P.dX.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fN.prototype={
i:function(a){return"Exception: "+this.a}}
P.ie.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.t(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.D(d,o)
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
return f+j+h+i+"\n"+C.a.A(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.aB.prototype={}
P.k.prototype={}
P.h.prototype={
bz:function(a,b){return new H.b_(this,b,H.dA(this).K("b_<h.E>"))},
gm:function(a){var s,r=this.gN(this)
for(s=0;r.q();)++s
return s},
gaL:function(a){var s,r=this.gN(this)
if(!r.q())throw H.b(H.il())
s=r.gB(r)
if(r.q())throw H.b(H.og())
return s},
I:function(a,b){var s,r,q
P.mq(b,"index")
for(s=this.gN(this),r=0;s.q();){q=s.gB(s)
if(b===r)return q;++r}throw H.b(P.O(b,this,"index",null,r))},
i:function(a){return P.of(this,"(",")")}}
P.eb.prototype={}
P.n.prototype={$il:1,$ih:1}
P.H.prototype={}
P.ap.prototype={
gP:function(a){return P.N.prototype.gP.call(C.j,this)},
i:function(a){return"null"}}
P.R.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
p:function(a,b){return this===b},
gP:function(a){return H.cW(this)},
i:function(a){return"Instance of '"+H.f(H.eK(this))+"'"},
toString:function(){return this.i(this)}}
P.y.prototype={}
P.S.prototype={
gm:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jD.prototype={
$2:function(a,b){var s,r,q,p=J.dF(b).dB(b,"=")
if(p===-1){if(b!=="")J.l0(a,P.lD(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.af(b,p+1)
q=this.a
J.l0(a,P.lD(s,0,s.length,q,!0),P.lD(r,0,r.length,q,!0))}return a}}
P.jA.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv4 address, "+a,this.a,b))}}
P.jB.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jC.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kK(C.a.t(this.b,a,b),16)
if(typeof s!=="number")return s.aj()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bH.prototype={
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
if(s!=null)o=o+":"+H.f(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.q(H.lg("Field '_text' has been assigned during initialization."))}return o},
gP:function(a){var s=this,r=s.z
if(r==null){r=C.a.gP(s.gbV())
if(s.z==null)s.z=r
else r=H.q(H.lg("Field 'hashCode' has been assigned during initialization."))}return r},
gcl:function(){var s=this,r=s.Q
if(r==null){r=new P.cb(P.mE(s.gbd(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.q(H.lg("Field 'queryParameters' has been assigned during initialization."))}return r},
ge5:function(){return this.b},
gcf:function(a){var s=this.c
if(s==null)return""
if(C.a.a6(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbu:function(a){var s=this.d
return s==null?P.n1(this.a):s},
gbd:function(a){var s=this.f
return s==null?"":s},
gce:function(){var s=this.r
return s==null?"":s},
dY:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a6(s,"/"))s="/"+s
q=s
p=P.lB(null,0,0,b)
return new P.bH(n,l,j,k,q,p,o.r)},
gdv:function(){return this.c!=null},
gdA:function(){return this.f!=null},
gdw:function(){return this.r!=null},
i:function(a){return this.gbV()},
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbA()&&s.c!=null===b.gdv()&&s.b===b.ge5()&&s.gcf(s)===b.gcf(b)&&s.gbu(s)===b.gbu(b)&&s.e===b.gdT(b)&&s.f!=null===b.gdA()&&s.gbd(s)===b.gbd(b)&&s.r!=null===b.gdw()&&s.gce()===b.gce()},
$ifq:1,
gbA:function(){return this.a},
gdT:function(a){return this.e}}
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
else for(s=J.b3(b),r=this.a;s.q();)r.$2(a,s.gB(s))}}
P.jz.prototype={
ge4:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.c(m,0)
s=o.a
m=m[0]+1
r=C.a.bp(s,"?",m)
q=s.length
if(r>=0){p=P.dx(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.fE("data","",n,n,P.dx(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.ks.prototype={
$1:function(a){return new Uint8Array(96)}}
P.kr.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.c(s,a)
s=s[a]
J.nU(s,0,96,b)
return s},
$S:19}
P.kt.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.D(b,q)^96
if(p>=r)return H.c(a,p)
a[p]=c}}}
P.ku.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.D(b,0),r=C.a.D(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.c(a,p)
a[p]=c}}}
P.h7.prototype={
gdv:function(){return this.c>0},
gdz:function(){return this.c>0&&this.d+1<this.e},
gdA:function(){return this.f<this.r},
gdw:function(){return this.r<this.a.length},
gcO:function(){return this.b===4&&C.a.a6(this.a,"http")},
gcP:function(){return this.b===5&&C.a.a6(this.a,"https")},
gbA:function(){var s=this.x
return s==null?this.x=this.eF():s},
eF:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gcO())return"http"
if(s.gcP())return"https"
if(r===4&&C.a.a6(s.a,"file"))return"file"
if(r===7&&C.a.a6(s.a,"package"))return"package"
return C.a.t(s.a,0,r)},
ge5:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcf:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbu:function(a){var s=this
if(s.gdz())return P.kK(C.a.t(s.a,s.d+1,s.e),null)
if(s.gcO())return 80
if(s.gcP())return 443
return 0},
gdT:function(a){return C.a.t(this.a,this.e,this.f)},
gbd:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gce:function(){var s=this.r,r=this.a
return s<r.length?C.a.af(r,s+1):""},
gcl:function(){var s=this
if(s.f>=s.r)return C.a0
return new P.cb(P.mE(s.gbd(s)),t.U)},
dY:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbA(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gdz()?n.gbu(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a6(r,"/"))r="/"+r
p=P.lB(m,0,0,b)
q=n.r
o=q<j.length?C.a.af(j,q+1):m
return new P.bH(l,i,s,h,r,p,o)},
gP:function(a){var s=this.y
return s==null?this.y=C.a.gP(this.a):s},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifq:1}
P.fE.prototype={}
W.r.prototype={}
W.hJ.prototype={
gm:function(a){return a.length}}
W.dK.prototype={
i:function(a){return String(a)}}
W.dL.prototype={
i:function(a){return String(a)}}
W.bO.prototype={$ibO:1}
W.bo.prototype={$ibo:1}
W.bp.prototype={$ibp:1}
W.bq.prototype={
cr:function(a,b,c){if(c!=null)return a.getContext(b,P.qt(c))
return a.getContext(b)},
e9:function(a,b){return this.cr(a,b,null)},
$ibq:1}
W.aA.prototype={
gm:function(a){return a.length}}
W.hU.prototype={
gm:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.cu.prototype={
gm:function(a){return a.length}}
W.hV.prototype={}
W.ao.prototype={}
W.aO.prototype={}
W.hW.prototype={
gm:function(a){return a.length}}
W.hX.prototype={
gm:function(a){return a.length}}
W.hY.prototype={
gm:function(a){return a.length}}
W.b8.prototype={$ib8:1}
W.i_.prototype={
i:function(a){return String(a)}}
W.cv.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.cw.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaw(a))+" x "+H.f(this.gar(a))},
p:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aK(b)
s=a.left==s.gbs(b)&&a.top==s.gbw(b)&&this.gaw(a)==s.gaw(b)&&this.gar(a)==s.gar(b)}else s=!1
return s},
gP:function(a){return W.mT(J.af(a.left),J.af(a.top),J.af(this.gaw(a)),J.af(this.gar(a)))},
gdd:function(a){return a.bottom},
gar:function(a){return a.height},
gbs:function(a){return a.left},
gcp:function(a){return a.right},
gbw:function(a){return a.top},
gaw:function(a){return a.width},
$ia8:1}
W.e2.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.i0.prototype={
gm:function(a){return a.length}}
W.fB.prototype={
gbq:function(a){return this.a.firstElementChild==null},
gm:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var s=this.ip(this)
return new J.a2(s,s.length)}}
W.F.prototype={
ghq:function(a){return new W.fJ(a)},
gdg:function(a){return new W.fB(a,a.children)},
gdh:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.aj()
if(q<0)q=-q*0
if(typeof p!=="number")return p.aj()
if(p<0)p=-p*0
return new P.a8(s,r,q,p,t.I)},
i:function(a){return a.localName},
am:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.m7
if(s==null){s=H.d([],t.Q)
r=new W.cV(s)
s.push(W.mR(null))
s.push(W.mX())
$.m7=r
d=r}else d=s
s=$.m6
if(s==null){s=new W.ht(d)
$.m6=s
c=s}else{s.a=d
c=s}}if($.b9==null){s=document
r=s.implementation.createHTMLDocument("")
$.b9=r
$.l8=r.createRange()
r=$.b9.createElement("base")
t.D.a(r)
r.href=s.baseURI
$.b9.head.appendChild(r)}s=$.b9
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.b9
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.b9.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.C(C.Z,a.tagName)){$.l8.selectNodeContents(q)
s=$.l8
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.b9.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.b9.body)J.lW(q)
c.cs(p)
document.adoptNode(p)
return p},
hy:function(a,b,c){return this.am(a,b,c,null)},
eb:function(a,b){a.textContent=null
a.appendChild(this.am(a,b,null,null))},
ge_:function(a){return a.tagName},
$iF:1}
W.i3.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.e.prototype={
hg:function(a,b,c,d){if(c!=null)this.ez(a,b,c,!1)},
ez:function(a,b,c,d){return a.addEventListener(b,H.ck(c,1),!1)},
$ie:1}
W.ai.prototype={$iai:1}
W.bS.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1,
$ibS:1}
W.e4.prototype={
gm:function(a){return a.length}}
W.e6.prototype={
gm:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.ii.prototype={
gm:function(a){return a.length}}
W.bv.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.bw.prototype={
gdj:function(a){return a.data},
$ibw:1}
W.bU.prototype={$ibU:1}
W.bW.prototype={$ibW:1}
W.by.prototype={$iby:1}
W.iu.prototype={
i:function(a){return String(a)}}
W.iM.prototype={
gm:function(a){return a.length}}
W.bZ.prototype={$ibZ:1}
W.ep.prototype={
h:function(a,b){return P.bk(a.get(b))},
G:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bk(s.value[1]))}},
ga_:function(a){var s=H.d([],t.s)
this.G(a,new W.iN(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
W.iN.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eq.prototype={
h:function(a,b){return P.bk(a.get(b))},
G:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bk(s.value[1]))}},
ga_:function(a){var s=H.d([],t.s)
this.G(a,new W.iO(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
W.iO.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aE.prototype={$iaE:1}
W.er.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.aj.prototype={$iaj:1}
W.a1.prototype={
gaL:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.b(P.lo("No elements"))
if(r>1)throw H.b(P.lo("More than one element"))
s=s.firstChild
s.toString
return s},
a7:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.c(r,b)
s.replaceChild(c,r[b])},
gN:function(a){var s=this.a.childNodes
return new W.cC(s,s.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.c(s,b)
return s[b]}}
W.w.prototype={
ic:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
ih:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nR(s,b,a)}catch(q){H.ae(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.ee(a):s},
fV:function(a,b,c){return a.replaceChild(b,c)},
$iw:1}
W.cU.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.aF.prototype={
gm:function(a){return a.length},
$iaF:1}
W.eF.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.eO.prototype={
h:function(a,b){return P.bk(a.get(b))},
G:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bk(s.value[1]))}},
ga_:function(a){var s=H.d([],t.s)
this.G(a,new W.j1(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
W.j1.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eQ.prototype={
gm:function(a){return a.length}}
W.at.prototype={$iat:1}
W.eS.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.aG.prototype={$iaG:1}
W.eT.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.aH.prototype={
gm:function(a){return a.length},
$iaH:1}
W.eY.prototype={
h:function(a,b){return a.getItem(H.lF(b))},
l:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga_:function(a){var s=H.d([],t.s)
this.G(a,new W.jc(s))
return s},
gm:function(a){return a.length},
$iH:1}
W.jc.prototype={
$2:function(a,b){return this.a.push(a)}}
W.au.prototype={$iau:1}
W.be.prototype={$ibe:1}
W.cZ.prototype={
am:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
s=W.ob("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.a1(r).a7(0,new W.a1(s))
return r}}
W.f1.prototype={
am:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.E.am(s.createElement("table"),b,c,d)
s.toString
s=new W.a1(s)
q=s.gaL(s)
q.toString
s=new W.a1(q)
p=s.gaL(s)
r.toString
p.toString
new W.a1(r).a7(0,new W.a1(p))
return r}}
W.f2.prototype={
am:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.E.am(s.createElement("table"),b,c,d)
s.toString
s=new W.a1(s)
q=s.gaL(s)
r.toString
q.toString
new W.a1(r).a7(0,new W.a1(q))
return r}}
W.c9.prototype={$ic9:1}
W.av.prototype={$iav:1}
W.ac.prototype={$iac:1}
W.f5.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.f6.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.jj.prototype={
gm:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.bD.prototype={$ibD:1}
W.fb.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.jn.prototype={
gm:function(a){return a.length}}
W.aZ.prototype={}
W.jE.prototype={
i:function(a){return String(a)}}
W.fu.prototype={
gm:function(a){return a.length}}
W.bg.prototype={
ghC:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.B("deltaY is not supported"))},
ghB:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.B("deltaX is not supported"))},
$ibg:1}
W.cc.prototype={
fW:function(a,b){return a.requestAnimationFrame(H.ck(b,1))},
eM:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cd.prototype={$icd:1}
W.fC.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.d9.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
p:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.aK(b)
s=a.left==s.gbs(b)&&a.top==s.gbw(b)&&a.width==s.gaw(b)&&a.height==s.gar(b)}else s=!1
return s},
gP:function(a){return W.mT(J.af(a.left),J.af(a.top),J.af(a.width),J.af(a.height))},
gar:function(a){return a.height},
gaw:function(a){return a.width}}
W.fR.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.de.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.ha.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.hh.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$il:1,
$iA:1,
$ih:1,
$in:1}
W.fz.prototype={
G:function(a,b){var s,r,q,p,o
for(s=this.ga_(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
ga_:function(a){var s,r,q,p,o=this.a.attributes,n=H.d([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.c(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fJ.prototype={
h:function(a,b){return this.a.getAttribute(H.lF(b))},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.ga_(this).length}}
W.la.prototype={}
W.fM.prototype={
hd:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nS(s,this.c,r,!1)}}}
W.k1.prototype={
$1:function(a){return this.a.$1(a)}}
W.lt.prototype={}
W.ce.prototype={
en:function(a){var s
if($.da.gbq($.da)){for(s=0;s<262;++s)$.da.l(0,C.Y[s],W.qC())
for(s=0;s<12;++s)$.da.l(0,C.o[s],W.qD())}},
aS:function(a){return $.nN().C(0,W.cy(a))},
ay:function(a,b,c){var s=$.da.h(0,H.f(W.cy(a))+"::"+b)
if(s==null)s=$.da.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iak:1}
W.M.prototype={
gN:function(a){return new W.cC(a,this.gm(a))}}
W.cV.prototype={
aS:function(a){return C.b.d9(this.a,new W.iR(a))},
ay:function(a,b,c){return C.b.d9(this.a,new W.iQ(a,b,c))},
$iak:1}
W.iR.prototype={
$1:function(a){return a.aS(this.a)}}
W.iQ.prototype={
$1:function(a){return a.ay(this.a,this.b,this.c)}}
W.dk.prototype={
es:function(a,b,c,d){var s,r,q
this.a.a7(0,c)
s=b.bz(0,new W.k9())
r=b.bz(0,new W.ka())
this.b.a7(0,s)
q=this.c
q.a7(0,C.w)
q.a7(0,r)},
aS:function(a){return this.a.C(0,W.cy(a))},
ay:function(a,b,c){var s=this,r=W.cy(a),q=s.c
if(q.C(0,H.f(r)+"::"+b))return s.d.hk(c)
else if(q.C(0,"*::"+b))return s.d.hk(c)
else{q=s.b
if(q.C(0,H.f(r)+"::"+b))return!0
else if(q.C(0,"*::"+b))return!0
else if(q.C(0,H.f(r)+"::*"))return!0
else if(q.C(0,"*::*"))return!0}return!1},
$iak:1}
W.k9.prototype={
$1:function(a){return!C.b.C(C.o,a)}}
W.ka.prototype={
$1:function(a){return C.b.C(C.o,a)}}
W.hj.prototype={
ay:function(a,b,c){if(this.eh(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.C(0,b)
return!1}}
W.kf.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.hi.prototype={
aS:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cy(a)==="foreignObject")return!1
if(s)return!0
return!1},
ay:function(a,b,c){if(b==="is"||C.a.a6(b,"on"))return!1
return this.aS(a)},
$iak:1}
W.cC.prototype={
q:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.co(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return this.d}}
W.ak.prototype={}
W.k8.prototype={}
W.ht.prototype={
cs:function(a){var s=this,r=new W.kn(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
b4:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.lW(a)
else b.removeChild(a)},
h0:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.nV(a)
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
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.ae(p)}r="element unprintable"
try{r=J.a5(a)}catch(p){H.ae(p)}try{q=W.cy(a)
this.h_(a,b,n,r,q,m,l)}catch(p){if(H.ae(p) instanceof P.ag)throw p
else{this.b4(a,b)
window
o="Removing corrupted element "+H.f(r)
if(typeof console!="undefined")window.console.warn(o)}}},
h_:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.b4(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aS(a)){m.b4(a,b)
window
s="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.ay(a,"is",g)){m.b4(a,b)
window
s="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.ga_(f)
r=H.d(s.slice(0),H.lE(s).K("v<1>"))
for(q=f.ga_(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.c(r,q)
p=r[q]
o=m.a
n=J.nZ(p)
H.lF(p)
if(!o.ay(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.cs(a.content)}}
W.kn.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.h0(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.b4(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.lo("Corrupt HTML")
throw H.b(q)}}catch(o){H.ae(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.fD.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fO.prototype={}
W.fP.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h6.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.h8.prototype={}
W.h9.prototype={}
W.he.prototype={}
W.hk.prototype={}
W.hl.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.hm.prototype={}
W.hn.prototype={}
W.hu.prototype={}
W.hv.prototype={}
W.hw.prototype={}
W.hx.prototype={}
W.hy.prototype={}
W.hz.prototype={}
W.hA.prototype={}
W.hB.prototype={}
W.hC.prototype={}
W.hD.prototype={}
P.kb.prototype={
cb:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
by:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.lH(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ah)return new Date(a.a)
if(t.fv.b(a))throw H.b(P.jy("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.d.b(a))return a
if(t.bX.b(a))return a
if(t.v.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.cb(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.c(r,s)
r[s]=p
J.l2(a,new P.kd(n,o))
return n.a}if(t.aH.b(a)){s=o.cb(a)
n=o.b
if(s>=n.length)return H.c(n,s)
p=n[s]
if(p!=null)return p
return o.hx(a,s)}if(t.eH.b(a)){s=o.cb(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.c(r,s)
r[s]=p
o.hN(a,new P.ke(n,o))
return n.b}throw H.b(P.jy("structured clone of other type"))},
hx:function(a,b){var s,r=J.b1(a),q=r.gm(a),p=new Array(q),o=this.b
if(b>=o.length)return H.c(o,b)
o[b]=p
if(typeof q!=="number")return H.x(q)
s=0
for(;s<q;++s){o=this.by(r.h(a,s))
if(s>=p.length)return H.c(p,s)
p[s]=o}return p}}
P.kd.prototype={
$2:function(a,b){this.a.a[a]=this.b.by(b)},
$S:3}
P.ke.prototype={
$2:function(a,b){this.a.b[a]=this.b.by(b)},
$S:3}
P.dt.prototype={$ibw:1,
gdj:function(a){return this.a}}
P.ky.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.kc.prototype={
hN:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e5.prototype={
gbj:function(){var s=this.b,r=H.dA(s)
return new H.aT(new H.b_(s,new P.ic(),r.K("b_<i.E>")),new P.id(),r.K("aT<i.E,F>"))},
l:function(a,b,c){var s=this.gbj()
J.nX(s.b.$1(J.hI(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.aM(this.gbj().a)},
h:function(a,b){var s=this.gbj()
return s.b.$1(J.hI(s.a,b))},
gN:function(a){var s=P.li(this.gbj(),!1,t.h)
return new J.a2(s,s.length)}}
P.ic.prototype={
$1:function(a){return t.h.b(a)}}
P.id.prototype={
$1:function(a){return t.h.a(a)}}
P.h5.prototype={
gcp:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.x(r)
return this.$ti.c.a(s+r)},
gdd:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.x(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
p:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.aK(b)
if(s==r.gbs(b)){q=n.b
if(q==r.gbw(b)){p=n.c
if(typeof s!=="number")return s.w()
if(typeof p!=="number")return H.x(p)
o=n.$ti.c
if(o.a(s+p)===r.gcp(b)){s=n.d
if(typeof q!=="number")return q.w()
if(typeof s!=="number")return H.x(s)
r=o.a(q+s)===r.gdd(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gP:function(a){var s,r=this,q=r.a,p=J.af(q),o=r.b,n=J.af(o),m=r.c
if(typeof q!=="number")return q.w()
if(typeof m!=="number")return H.x(m)
s=r.$ti.c
m=C.c.gP(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.w()
if(typeof q!=="number")return H.x(q)
q=C.c.gP(s.a(o+q))
return P.p1(P.k3(P.k3(P.k3(P.k3(0,p),n),m),q))}}
P.a8.prototype={
gbs:function(a){return this.a},
gbw:function(a){return this.b},
gaw:function(a){return this.c},
gar:function(a){return this.d}}
P.aS.prototype={$iaS:1}
P.eh.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.aW.prototype={$iaW:1}
P.ez.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.iU.prototype={
gm:function(a){return a.length}}
P.c6.prototype={$ic6:1}
P.f_.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.m.prototype={
gdg:function(a){return new P.e5(a,new W.a1(a))},
am:function(a,b,c,d){var s,r,q,p,o,n=H.d([],t.Q)
n.push(W.mR(null))
n.push(W.mX())
n.push(new W.hi())
c=new W.ht(new W.cV(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.q.hy(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.a1(q)
o=n.gaL(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.aX.prototype={$iaX:1}
P.fc.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.fU.prototype={}
P.fV.prototype={}
P.h1.prototype={}
P.h2.prototype={}
P.hf.prototype={}
P.hg.prototype={}
P.ho.prototype={}
P.hp.prototype={}
P.bf.prototype={$il:1,$ih:1,$in:1}
P.hM.prototype={
gm:function(a){return a.length}}
P.dO.prototype={
h:function(a,b){return P.bk(a.get(b))},
G:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bk(s.value[1]))}},
ga_:function(a){var s=H.d([],t.s)
this.G(a,new P.hN(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
P.hN.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dP.prototype={
gm:function(a){return a.length}}
P.b5.prototype={}
P.eA.prototype={
gm:function(a){return a.length}}
P.fA.prototype={}
P.eN.prototype={
e1:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.bI(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.v.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.qu(g))
return}if(t.fS.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.bN("Incorrect number or type of arguments"))},
im:function(a,b,c,d,e,f,g){return this.e1(a,b,c,d,e,f,g,null,null,null)}}
P.eV.prototype={
gm:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
s=P.bk(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$il:1,
$ih:1,
$in:1}
P.hb.prototype={}
P.hc.prototype={}
K.b4.prototype={
aJ:function(a,b){return!0},
i:function(a){return"all"}}
K.e8.prototype={
aJ:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aJ(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.ix.prototype={}
K.aa.prototype={
aJ:function(a,b){return!this.ed(0,b)},
i:function(a){return"!["+this.cw(0)+"]"}}
K.iX.prototype={
aJ:function(a,b){if(typeof b!=="number")return H.x(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.ar(this.a),r=H.ar(this.b)
return s+".."+r}}
K.j2.prototype={
el:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.u("May not create a Set with zero characters."))
s=new H.D(t.E)
for(r=new H.bb(a,a.gm(a));r.q();){q=r.d
s.l(0,q,!0)}p=P.li(s.ga_(s),!0,t.e)
C.b.ec(p)
this.a=p},
aJ:function(a,b){return C.b.C(this.a,b)},
i:function(a){return P.f0(this.a,0,null)}}
L.eW.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.fd(this.a.k(0,b))
p.a=H.d([],t.B)
p.c=!1
this.c.push(p)
return p},
hI:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aJ(0,a))return p}return null},
i:function(a){return this.b},
d2:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.C(0,l))m+=" (consume)"
for(l=n.d.c,l=l.ga_(l),l=l.gN(l);l.q();){r=l.gB(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.C(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.f9.prototype={
i:function(a){var s=H.lR(this.b,"\n","\\n"),r=H.lR(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fa.prototype={
aK:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.o)(c),++r){q=c[r]
this.c.l(0,q,b)}},
i:function(a){return this.b}}
L.jk.prototype={
k:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eW(this,b)
s.c=H.d([],t.br)
this.a.l(0,b,s)}return s},
O:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.fa(a)
s.c=new H.D(t.dO)
this.b.l(0,a,s)}return s},
cq:function(a){return this.is(a)},
is:function(a){var s=this
return P.pR(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cq(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.d([],c)
a0=H.d([],c)
a1=H.d([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.cm(a1,0)
else{if(!r.q()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hI(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.f0(a0,0,null)
throw H.b(P.u("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.q(P.B("removeRange"))
P.bd(0,k,a0.length)
a0.splice(0,k-0)
C.b.a7(a1,a0)
a0=H.d([],c)
b=H.d([],c)
d=s.d
q=!s.c.C(0,n.a)?7:8
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
if(d.d!=null){g=P.f0(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.f9(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.C(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.p_()
case 1:return P.p0(o)}}},t.eB)},
i:function(a){var s,r=new P.S(""),q=this.d
if(q!=null)r.a=q.d2()+"\n"
for(q=this.a,q=q.git(q),q=q.gN(q);q.q();){s=q.gB(q)
if(s!=this.d)r.a+=s.d2()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.fd.prototype={
i:function(a){return this.b.b+": "+this.cw(0)}}
O.a6.prototype={
bh:function(a){this.a=H.d([],a.K("v<0*>"))
this.c=this.b=null},
ct:function(a,b,c){this.b=b
this.c=a},
aZ:function(a,b){return this.ct(a,null,b)},
cU:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cQ:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gm:function(a){return this.a.length},
gN:function(a){var s=this.a
return new J.a2(s,s.length)},
I:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.c(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.dA(q).K("v<a6.T*>")
if(q.cU(H.d([b],p))){s=q.a
r=s.length
s.push(b)
q.cQ(r,H.d([b],p))}},
a7:function(a,b){var s,r
if(this.cU(b)){s=this.a
r=s.length
C.b.a7(s,b)
this.cQ(r,b)}},
$ih:1}
O.cQ.prototype={
gm:function(a){return this.a.length},
gu:function(){var s=this.b
return s==null?this.b=D.L():s},
aM:function(){var s=this.b
if(s!=null)s.E(null)},
gY:function(a){var s=this.a
if(s.length>0)return C.b.gaA(s)
else return V.bY()},
dV:function(a){var s=this.a
if(a==null)s.push(V.bY())
else s.push(a)
this.aM()},
ck:function(){var s=this.a
if(s.length>0){s.pop()
this.aM()}}}
E.hR.prototype={}
E.bu.prototype={
cG:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.a2(s,s.length);s.q();){r=s.d
if(r.f==null)r.cG()}},
sae:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gu().J(0,q.gdO())
s=q.c
if(s!=null)s.gu().n(0,q.gdO())
r=new D.z("shape",p,q.c)
r.b=!0
q.as(r)}},
saW:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gu().J(0,q.gdQ())
s=q.f
q.f=a
if(a!=null)a.gu().n(0,q.gdQ())
q.cG()
r=new D.z("technique",s,q.f)
r.b=!0
q.as(r)}},
saU:function(a){var s,r,q=this
if(!J.G(q.r,a)){s=q.r
if(s!=null)s.gu().J(0,q.gdM())
if(a!=null)a.gu().n(0,q.gdM())
q.r=a
r=new D.z("mover",s,a)
r.b=!0
q.as(r)}},
au:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aC(0,b,q):null
if(!J.G(o,q.x)){s=q.x
q.x=o
r=new D.z("matrix",s,o)
r.b=!0
q.as(r)}p=q.f
if(p!=null)p.au(0,b)
for(p=q.y.a,p=new J.a2(p,p.length);p.q();)p.d.au(0,b)},
at:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gY(q))
else o.push(p.A(0,q.gY(q)))
q.aM()
a.dW(r.f)
q=a.dy
s=(q&&C.b).gaA(q)
if(s!=null&&r.d!=null)s.dX(a,r)
for(q=r.y.a,q=new J.a2(q,q.length);q.q();)q.d.at(a)
a.dU()
a.dx.ck()},
as:function(a){var s=this.z
if(s!=null)s.E(a)},
Z:function(){return this.as(null)},
dP:function(a){this.e=null
this.as(a)},
i2:function(){return this.dP(null)},
dR:function(a){this.as(a)},
i3:function(){return this.dR(null)},
dN:function(a){this.as(a)},
i1:function(){return this.dN(null)},
dL:function(a){this.as(a)},
hZ:function(){return this.dL(null)},
hY:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdK(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bR()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.Z()},
i0:function(a,b){var s,r
for(s=b.gN(b),r=this.gdK();s.q();)s.gB(s).gu().J(0,r)
this.Z()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bQ.prototype={
i:function(a){return this.b}}
E.c3.prototype={
i:function(a){return this.b}}
E.fK.prototype={}
E.iY.prototype={
ek:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ah(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cQ()
r=t.h8
s.a=H.d([],r)
s.gu().n(0,new E.iZ(q))
q.cy=s
s=new O.cQ()
s.a=H.d([],r)
s.gu().n(0,new E.j_(q))
q.db=s
s=new O.cQ()
s.a=H.d([],r)
s.gu().n(0,new E.j0(q))
q.dx=s
s=H.d([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.D(t.h9)},
gib:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gY(q)
s=r.db
s=r.z=q.A(0,s.gY(s))
q=s}return q},
ge6:function(){var s,r=this,q=r.cx
if(q==null){q=r.db
q=q.gY(q)
s=r.dx
s=r.cx=q.A(0,s.gY(s))
q=s}return q},
dW:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gaA(s):a)},
dU:function(){var s=this.dy
if(s.length>1)s.pop()},
d8:function(a){var s=a.b
if(s.length===0)throw H.b(P.u("May not cache a shader with no name."))
if(this.fr.c0(0,s))throw H.b(P.u('Shader cache already contains a shader by the name "'+s+'".'))
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
E.f8.prototype={
cE:function(a){this.dZ()},
cD:function(){return this.cE(null)},
ghO:function(){var s,r=this,q=Date.now(),p=C.c.a4(P.m5(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ah(q,!1)
return s/p},
cW:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.A()
if(typeof p!=="number")return H.x(p)
s=C.d.cd(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.A()
r=C.d.cd(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.my(C.n,q.gii())}},
dZ:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.G.eM(s)
r=W.nd(new E.ji(this),t.H)
r.toString
C.G.fW(s,r)}},
ig:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cW()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ah(p,!1)
q.y=P.m5(p-q.r.a).a*0.000001
p=q.cy
C.b.sm(p.a,0)
p.aM()
p=q.db
C.b.sm(p.a,0)
p.aM()
p=q.dx
C.b.sm(p.a,0)
p.aM()
p=q.dy
p.toString
C.b.sm(p,0)
q.dy.push(null)
m.at(n.e)}q=n.Q
if(q!=null)q.E(null)}catch(o){s=H.ae(o)
r=H.lN(o)
P.lQ("Error: "+H.f(s))
P.lQ("Stack: "+H.f(r))
throw H.b(s)}}}
E.ji.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ig()}}}
Z.fv.prototype={}
Z.dS.prototype={
al:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ae(q)
r=P.u('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.fw.prototype={}
Z.cp.prototype={
aI:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
al:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].al(a)},
be:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
at:function(a){var s,r,q,p,o,n=this.b.length
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
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.a5(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(n,", ")+"\nAttrs:   "+C.b.j(p,", ")}}
Z.bV.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eK(this.c))+"'")+"]"}}
Z.bF.prototype={
gcv:function(a){var s=this.a,r=(s&$.aL().a)!==0?3:0
if((s&$.bn().a)!==0)r+=3
if((s&$.bm().a)!==0)r+=3
if((s&$.bL().a)!==0)r+=2
if((s&$.bM().a)!==0)r+=3
if((s&$.dH().a)!==0)r+=3
if((s&$.dI().a)!==0)r+=4
if((s&$.cn().a)!==0)++r
return(s&$.bl().a)!==0?r+4:r},
hl:function(a){var s,r=$.aL(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bn()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bm()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bL()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bM()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dH()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dI()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cn()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bl()
if((q&r.a)!==0)if(s===a)return r
return $.nL()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bF))return!1
return this.a===b.a},
i:function(a){var s=H.d([],t.i),r=this.a
if((r&$.aL().a)!==0)s.push("Pos")
if((r&$.bn().a)!==0)s.push("Norm")
if((r&$.bm().a)!==0)s.push("Binm")
if((r&$.bL().a)!==0)s.push("Txt2D")
if((r&$.bM().a)!==0)s.push("TxtCube")
if((r&$.dH().a)!==0)s.push("Clr3")
if((r&$.dI().a)!==0)s.push("Clr4")
if((r&$.cn().a)!==0)s.push("Weight")
if((r&$.bl().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hS.prototype={}
D.bR.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=H.d([],t.f):s).push(b)},
J:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.C(q,b)
if(q===!0){q=r.a
s=(q&&C.b).J(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.C(q,b)
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
if(a==null){a=new D.Z()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.G(P.li(s,!0,t.dm),new D.i9(o))
s=p.b
if(s!=null){p.b=H.d([],t.f)
C.b.G(s,new D.ia(o))}return!0},
dl:function(){return this.E(null)},
ap:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.E(s)}}}}
D.i9.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.ia.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.Z.prototype={}
D.aP.prototype={}
D.aQ.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dT.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dT))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ef.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ef))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ip.prototype={
i8:function(a){this.d.n(0,a.a)
return!1},
i4:function(a){this.d.J(0,a.a)
return!1}}
X.cM.prototype={}
X.iv.prototype={
b2:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.A()
s=b.b
r=o.ch
if(typeof s!=="number")return s.A()
q=new V.al(m.a+l*k,m.b+s*r)
r=o.a.gbl()
p=new X.c0(a,V.bA(),o.x,r,q)
p.b=!0
o.z=new P.ah(n,!1)
o.x=q
return p},
cj:function(a,b){this.r=a.a
return!1},
bc:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.ea()
if(typeof s!=="number")return s.ai()
this.r=(s&~r)>>>0
return!1},
bb:function(a,b){var s=this.d
if(s==null)return!1
s.E(this.b2(a,b))
return!0},
i9:function(a){return!1},
fo:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cM(c,p.a.gbl(),b)
q.b=!0
r.E(q)
p.y=new P.ah(s,!1)
p.x=V.bA()}}
X.c_.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.c_))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.c0.prototype={}
X.iP.prototype={
bK:function(a,b,c){var s=this,r=new P.ah(Date.now(),!1),q=s.a.gbl(),p=new X.c0(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cj:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.E(this.bK(a,b,!0))
return!0},
bc:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.ea()
if(typeof r!=="number")return r.ai()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.E(s.bK(a,b,!0))
return!0},
bb:function(a,b){var s=this.d
if(s==null)return!1
s.E(this.bK(a,b,!1))
return!0},
ia:function(a,b){return!1}}
X.eI.prototype={}
X.d0.prototype={}
X.jm.prototype={
b2:function(a,b){var s=this,r=new P.ah(Date.now(),!1),q=a.length>0?a[0]:V.bA(),p=s.a.gbl(),o=new X.d0(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
i7:function(a){var s=this.b
if(s==null)return!1
s.E(this.b2(a,!0))
return!0},
i5:function(a){var s=this.c
if(s==null)return!1
s.E(this.b2(a,!0))
return!0},
i6:function(a){var s=this.d
if(s==null)return!1
s.E(this.b2(a,!1))
return!0}}
X.fr.prototype={
gbl:function(){var s=this.a,r=C.i.gdh(s).c
r.toString
s=C.i.gdh(s).d
s.toString
return V.ms(0,0,r,s)},
cK:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.ef(s,new X.c_(r,a.altKey,a.shiftKey))},
aP:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
bS:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
aF:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.X()
if(typeof o!=="number")return H.x(o)
s=r.top
if(typeof p!=="number")return p.X()
if(typeof s!=="number")return H.x(s)
return new V.al(q-o,p-s)},
b3:function(a){return new V.aw(a.movementX,a.movementY)},
bO:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.d([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=C.d.a0(p.pageX)
C.d.a0(p.pageY)
n=k.left
if(typeof n!=="number")return H.x(n)
C.d.a0(p.pageX)
m=C.d.a0(p.pageY)
l=k.top
if(typeof l!=="number")return H.x(l)
j.push(new V.al(o-n,m-l))}return j},
aD:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dT(s,new X.c_(r,a.altKey,a.shiftKey))},
bL:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.X()
if(typeof n!=="number")return H.x(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.X()
if(typeof p!=="number")return H.x(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.x(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.x(p)
p=r<p}else p=!1
return p},
fi:function(a){this.f=!0},
f5:function(a){this.f=!1},
fc:function(a){if(this.f&&this.bL(a))a.preventDefault()},
fm:function(a){var s
if(!this.f)return
s=this.cK(a)
this.b.i8(s)},
fk:function(a){var s
if(!this.f)return
s=this.cK(a)
this.b.i4(s)},
fq:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aP(a)
if(p.x){s=p.aD(a)
r=p.b3(a)
if(p.d.cj(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aD(a)
q=p.aF(a)
if(p.c.cj(s,q))a.preventDefault()},
fv:function(a){var s,r,q,p=this
p.aP(a)
s=p.aD(a)
if(p.x){r=p.b3(a)
if(p.d.bc(s,r))a.preventDefault()
return}if(p.r)return
q=p.aF(a)
if(p.c.bc(s,q))a.preventDefault()},
fg:function(a){var s,r,q,p=this
if(!p.bL(a)){p.aP(a)
s=p.aD(a)
if(p.x){r=p.b3(a)
if(p.d.bc(s,r))a.preventDefault()
return}if(p.r)return
q=p.aF(a)
if(p.c.bc(s,q))a.preventDefault()}},
ft:function(a){var s,r,q,p=this
p.aP(a)
s=p.aD(a)
if(p.x){r=p.b3(a)
if(p.d.bb(s,r))a.preventDefault()
return}if(p.r)return
q=p.aF(a)
if(p.c.bb(s,q))a.preventDefault()},
fe:function(a){var s,r,q,p=this
if(!p.bL(a)){p.aP(a)
s=p.aD(a)
if(p.x){r=p.b3(a)
if(p.d.bb(s,r))a.preventDefault()
return}if(p.r)return
q=p.aF(a)
if(p.c.bb(s,q))a.preventDefault()}},
fz:function(a){var s,r,q=this
q.aP(a)
s=new V.aw((a&&C.F).ghB(a),C.F.ghC(a)).A(0,q.Q)
if(q.x){if(q.d.i9(s))a.preventDefault()
return}if(q.r)return
r=q.aF(a)
if(q.c.ia(s,r))a.preventDefault()},
fB:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aD(q.y)
r=q.aF(q.y)
q.d.fo(s,r,p)}},
fR:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bS(a)
s=r.bO(a)
if(r.e.i7(s))a.preventDefault()},
fN:function(a){var s
this.bS(a)
s=this.bO(a)
if(this.e.i5(s))a.preventDefault()},
fP:function(a){var s
this.bS(a)
s=this.bO(a)
if(this.e.i6(s))a.preventDefault()}}
D.dQ.prototype={$iT:1}
D.e0.prototype={$iT:1}
D.T.prototype={}
D.cH.prototype={
V:function(a){var s=this.y
if(s!=null)s.E(a)},
cT:function(a){var s=this.z
if(s!=null)s.E(a)},
fn:function(){return this.cT(null)},
fD:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(q==null||this.eo(q))return!1}return!0},
f_:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcS(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o instanceof D.bC)this.x.push(o)
n=o.go
if(n==null){n=new D.bR()
n.d=0
o.go=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}s=new D.aP()
s.b=!0
this.V(s)},
fH:function(a,b){var s,r,q
for(s=b.gN(b),r=this.gcS();s.q();){q=s.gB(s)
C.b.J(this.e,q)
q.gu().J(0,r)}s=new D.aQ()
s.b=!0
this.V(s)},
eo:function(a){var s=C.b.C(this.x,a)
return s}}
D.eH.prototype={$iT:1}
D.bC.prototype={
V:function(a){var s=this.go
if(s!=null)s.E(a)},
ep:function(){return this.V(null)},
gac:function(){var s=this.x!=null?1:0,r=this.y!=null?2:0,q=this.db?8:0
return s+r+4+q},
$iT:1}
V.Y.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Y))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.an.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.an))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.i7.prototype={}
V.eo.prototype={
a8:function(a,b){var s=this,r=H.d([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eo))return!1
s=b.a
$.C().toString
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
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.cm(H.d([o.a,o.d,o.r],n),3,0),l=V.cm(H.d([o.b,o.e,o.x],n),3,0),k=V.cm(H.d([o.c,o.f,o.y],n),3,0)
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
V.bc.prototype={
a8:function(a,b){var s=this,r=H.d([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
cg:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.C().toString
if(Math.abs(b3-0)<1e-9)return V.bY()
s=1/b3
r=-l
q=-a2
return V.aV((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
A:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aV(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bx:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.E(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
aY:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.Q(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bc))return!1
s=b.a
$.C().toString
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
F:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.cm(H.d([n.a,n.e,n.y,n.cx],m),3,0),k=V.cm(H.d([n.b,n.f,n.z,n.cy],m),3,0),j=V.cm(H.d([n.c,n.r,n.Q,n.db],m),3,0),i=V.cm(H.d([n.d,n.x,n.ch,n.dx],m),3,0)
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
M:function(){return this.F("")}}
V.al.prototype={
aq:function(a){return new V.aw(a.a-this.a,a.b-this.b)},
p:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.Q.prototype={
w:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
X:function(a,b){return new V.Q(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){return new V.Q(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Q))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.bB.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bB))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.eM.prototype={
gaB:function(){var s=this.c,r=this.d
return s>r?r:s},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eM))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.aw.prototype={
b8:function(a){return Math.sqrt(this.ah(this))},
ah:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.A()
if(typeof p!=="number")return H.x(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.x(r)
return q*p+s*r},
A:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.A()
if(typeof b!=="number")return H.x(b)
s=this.b
if(typeof s!=="number")return s.A()
return new V.aw(r*b,s*b)},
a9:function(a,b){var s,r
$.C().toString
if(Math.abs(b-0)<1e-9){s=$.mH
return s==null?$.mH=new V.aw(0,0):s}s=this.a
if(typeof s!=="number")return s.a9()
r=this.b
if(typeof r!=="number")return r.a9()
return new V.aw(s/b,r/b)},
p:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aw))return!1
s=b.a
r=this.a
$.C().toString
if(typeof s!=="number")return s.X()
if(typeof r!=="number")return H.x(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.X()
if(typeof r!=="number")return H.x(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.E.prototype={
b8:function(a){return Math.sqrt(this.ah(this))},
ah:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ci:function(a,b){return new V.E(V.hG(this.a,a.a,b),V.hG(this.b,a.b,b),V.hG(this.c,a.c,b))},
H:function(){var s=this,r=Math.sqrt(s.ah(s))
if(r===1)return s
return s.a9(0,r)},
aH:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.E(s*r-q*p,q*o-n*r,n*p-s*o)},
w:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.E(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
a9:function(a,b){$.C().toString
if(Math.abs(b-0)<1e-9)return V.d7()
return new V.E(this.a/b,this.b/b,this.c/b)},
dF:function(){$.C().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.E))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.d8.prototype={
b8:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d8))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
U.hT.prototype={
bD:function(a){var s=V.qS(a,this.c,this.b)
return s},
gu:function(){var s=this.y
return s==null?this.y=D.L():s},
S:function(a){var s=this.y
if(s!=null)s.E(a)},
se7:function(a,b){},
sdG:function(a){var s,r=this,q=r.b
$.C().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bD(s)}q=new D.z("maximumLocation",q,r.b)
q.b=!0
r.S(q)}},
sdI:function(a){var s,r=this,q=r.c
$.C().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bD(s)}q=new D.z("minimumLocation",q,r.c)
q.b=!0
r.S(q)}},
sa5:function(a,b){var s,r=this
b=r.bD(b)
s=r.d
$.C().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.z("location",s,b)
s.b=!0
r.S(s)}},
sdH:function(a){var s,r,q=this,p=q.e
$.C().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.z("maximumVelocity",p,a)
p.b=!0
q.S(p)}},
sW:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.C().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.z("velocity",r,a)
r.b=!0
s.S(r)}},
sdi:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.C().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.z("dampening",s,a)
s.b=!0
this.S(s)}},
au:function(a,b){var s,r,q,p=this,o=p.f
$.C().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa5(0,p.d+s*b)
o=p.x
$.C().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sW(s)}}}
U.cr.prototype={
gu:function(){var s=this.b
return s==null?this.b=D.L():s},
aC:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cr))return!1
return J.G(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.bT.prototype={
gu:function(){var s=this.e
return s==null?this.e=D.L():s},
S:function(a){var s=this.e
if(s!=null)s.E(a)},
ak:function(){return this.S(null)},
er:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaN(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gu()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.aP()
s.b=!0
this.S(s)},
fF:function(a,b){var s,r
for(s=b.gN(b),r=this.gaN();s.q();)s.gB(s).gu().J(0,r)
s=new D.aQ()
s.b=!0
this.S(s)},
aC:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.aj()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a2(p,p.length),s=null;p.q();){o=p.d
if(o!=null){r=o.aC(0,b,c)
if(r!=null)s=s==null?r:r.A(0,s)}}q.f=s==null?V.bY():s
p=q.e
if(p!=null)p.ap(0)}return q.f},
p:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bT))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.c(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.c(p,r)
if(!J.G(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$ia0:1}
U.bX.prototype={
gu:function(){var s=this.b
return s==null?this.b=D.L():s},
S:function(a){var s=this.b
if(s!=null)s.E(a)},
ak:function(){return this.S(null)},
aC:function(a,b,c){var s,r=this,q=r.d,p=b.e
if(q<p){r.d=p
q=r.b
if(q!=null)++q.d
q=r.a
q=q==null?null:q.aC(0,b,c)
s=q==null?null:q.cg(0)
r.c=s==null?V.bY():s
q=r.b
if(q!=null)q.ap(0)}return r.c},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bX))return!1
if(!J.G(this.a,b.a))return!1
return!0},
i:function(a){return"Invert"},
$ia0:1}
U.a0.prototype={}
U.d6.prototype={
gu:function(){var s=this.fx
return s==null?this.fx=D.L():s},
S:function(a){var s=this.fx
if(s!=null)s.E(a)},
ak:function(){return this.S(null)},
hm:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.c
r=s.b
s=r==null?s.b=D.L():r
s.n(0,q.geT())
s=q.a.c
r=s.d
s=r==null?s.d=D.L():r
s.n(0,q.geV())
s=q.a.c
r=s.c
s=r==null?s.c=D.L():r
s.n(0,q.geX())
s=q.a.d
r=s.f
s=r==null?s.f=D.L():r
s.n(0,q.geO())
s=q.a.d
r=s.d
s=r==null?s.d=D.L():r
s.n(0,q.geQ())
s=q.a.e
r=s.b
s=r==null?s.b=D.L():r
s.n(0,q.ghb())
s=q.a.e
r=s.d
s=r==null?s.d=D.L():r
s.n(0,q.gh9())
s=q.a.e
r=s.c
s=r==null?s.c=D.L():r
s.n(0,q.gh7())
return!0},
ax:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.R()
s=-s}if(this.r){if(typeof r!=="number")return r.R()
r=-r}return new V.aw(s,r)},
eU:function(a){var s=this
t.c.a(a)
if(!J.G(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
eW:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.aq(a.d)
s=s.ah(s)
r=l.Q
if(typeof r!=="number")return H.x(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ax(a.y.aq(a.d).A(0,2).a9(0,s.gaB()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.R()
q=l.y
if(typeof q!=="number")return H.x(q)
r.sW(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.R()
r=l.x
if(typeof r!=="number")return H.x(r)
q.sW(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.ax(r.aq(q).A(0,2).a9(0,s.gaB()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.x(n)
m=l.cy
if(typeof m!=="number")return H.x(m)
r.sa5(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.x(o)
r=l.db
if(typeof r!=="number")return H.x(r)
m.sa5(0,-n*o+r)
l.b.sW(0)
l.c.sW(0)
l.dx=l.ax(a.z.aq(q).A(0,2).a9(0,s.gaB()))}l.ak()},
eY:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.ah(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.R()
q=p.y
if(typeof q!=="number")return H.x(q)
s.sW(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.R()
s=p.x
if(typeof s!=="number")return H.x(s)
q.sW(-r*10*s)
p.ak()}},
eP:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eR:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.G(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.ax(r.aq(q).A(0,2).a9(0,s.gaB()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.x(n)
m=l.cy
if(typeof m!=="number")return H.x(m)
r.sa5(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.x(o)
r=l.db
if(typeof r!=="number")return H.x(r)
m.sa5(0,-n*o+r)
l.b.sW(0)
l.c.sW(0)
l.dx=l.ax(a.z.aq(q).A(0,2).a9(0,s.gaB()))
l.ak()},
hc:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
ha:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.aq(a.d)
s=s.ah(s)
r=l.Q
if(typeof r!=="number")return H.x(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ax(a.y.aq(a.d).A(0,2).a9(0,s.gaB()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.R()
q=l.y
if(typeof q!=="number")return H.x(q)
r.sW(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.R()
r=l.x
if(typeof r!=="number")return H.x(r)
q.sW(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.ax(r.aq(q).A(0,2).a9(0,s.gaB()))
r=l.c
o=p.a
if(typeof o!=="number")return o.R()
n=l.y
if(typeof n!=="number")return H.x(n)
m=l.cy
if(typeof m!=="number")return H.x(m)
r.sa5(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.R()
o=l.x
if(typeof o!=="number")return H.x(o)
r=l.db
if(typeof r!=="number")return H.x(r)
m.sa5(0,-n*o+r)
l.b.sW(0)
l.c.sW(0)
l.dx=l.ax(a.z.aq(q).A(0,2).a9(0,s.gaB()))}l.ak()},
h8:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.ah(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.R()
q=p.y
if(typeof q!=="number")return H.x(q)
s.sW(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.R()
s=p.x
if(typeof s!=="number")return H.x(s)
q.sW(-r*10*s)
p.ak()}},
aC:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.aj()
if(o<n){p.dy=n
s=b.y
p.c.au(0,s)
p.b.au(0,s)
o=V.me(p.b.d)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.A(0,V.aV(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia0:1}
M.cq.prototype={
gu:function(){var s=this.r
return s==null?this.r=D.L():s},
ab:function(a){var s=this.r
if(s!=null)s.E(a)},
bC:function(){return this.ab(null)},
fJ:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gag(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gu()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.aP()
s.b=!0
this.ab(s)},
fL:function(a,b){var s,r
for(s=b.gN(b),r=this.gag();s.q();)s.gB(s).gu().J(0,r)
s=new D.aQ()
s.b=!0
this.ab(s)},
at:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a2(s,s.length);s.q();){r=s.d
if(r!=null)r.at(a)}q.f=!1},
$iab:1}
M.cz.prototype={
ab:function(a){var s=this.y
if(s!=null)s.E(a)},
bC:function(){return this.ab(null)},
f8:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gag(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bR()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.aP()
s.b=!0
this.ab(s)},
fa:function(a,b){var s,r
for(s=b.gN(b),r=this.gag();s.q();)s.gB(s).gu().J(0,r)
s=new D.aQ()
s.b=!0
this.ab(s)},
sdf:function(a){var s,r,q=this
if(a==null)a=X.mh(1.0471975511965976,null)
s=q.b
if(s!==a){if(s!=null)s.gu().J(0,q.gag())
r=q.b
q.b=a
a.gu().n(0,q.gag())
s=new D.z("camera",r,q.b)
s.b=!0
q.ab(s)}},
se0:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gu().J(0,r.gag())
s=r.c
r.c=b
b.gu().n(0,r.gag())
q=new D.z("target",s,r.c)
q.b=!0
r.ab(q)}},
saW:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gu().J(0,r.gag())
s=r.d
r.d=a
if(a!=null)a.gu().n(0,r.gag())
q=new D.z("technique",s,r.d)
q.b=!0
r.ab(q)}},
gu:function(){var s=this.y
return s==null?this.y=D.L():s},
at:function(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
a0.dW(a.d)
a.c.al(a0)
s=a.b
r=a0.c
q=a0.d
p=s.c
o=s.d
n=s.e
m=n-o
l=1/Math.tan(p*0.5)
k=V.aV(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a0.cy.dV(k)
r=$.mi
if(r==null){r=V.mk()
q=V.mL()
p=$.mI
j=(p==null?$.mI=new V.E(0,0,-1):p).H()
i=q.aH(j).H()
h=j.aH(i)
g=new V.E(r.a,r.b,r.c)
f=i.R(0).ah(g)
e=h.R(0).ah(g)
d=j.R(0).ah(g)
r=V.aV(i.a,h.a,j.a,f,i.b,h.b,j.b,e,i.c,h.c,j.c,d,0,0,0,1)
$.mi=r
c=r}else c=r
r=s.b
if(r!=null){b=r.aC(0,a0,s)
if(b!=null)c=b.A(0,c)}a0.db.dV(c)
s=a.d
if(s!=null)s.au(0,a0)
for(s=a.e.a,s=new J.a2(s,s.length);s.q();)s.d.au(0,a0)
for(s=a.e.a,s=new J.a2(s,s.length);s.q();)s.d.at(a0)
a.b.toString
a0.cy.ck()
a0.db.ck()
a.c.be(a0)
a0.dU()},
$iab:1}
M.ab.prototype={}
A.dN.prototype={}
A.hL.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hE:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dk:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a7.prototype={
gav:function(a){var s=this.a?1:0
return s|0|0},
i:function(a){var s=this.a?1:0
return""+(s|0|0)},
p:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a7))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.e_.prototype={}
A.el.prototype={
ej:function(c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3="Required uniform value, ",c4=", was not defined or used in shader.",c5="uniform mat4 objMat;\n"
c1.z=c6
s=new P.S("")
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
A.q5(c6,s)
A.q7(c6,s)
A.q6(c6,s)
A.q9(c6,s)
A.qa(c6,s)
A.q8(c6,s)
A.qb(c6,s)
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
c1.dC(0,q.charCodeAt(0)==0?q:q,A.q4(c1.z))
c1.Q=c1.x.h(0,"posAttr")
c1.cx=c1.x.h(0,"normAttr")
c1.ch=c1.x.h(0,"binmAttr")
c1.cy=c1.x.h(0,"txt2DAttr")
c1.db=c1.x.h(0,"txtCubeAttr")
c1.dx=c1.x.h(0,"bendAttr")
if(c6.dy)c1.id=t.q.a(c1.y.T(0,"invViewMat"))
if(r)c1.dy=t.q.a(c1.y.T(0,"objMat"))
if(p)c1.fr=t.q.a(c1.y.T(0,"viewObjMat"))
r=t.q
c1.fy=r.a(c1.y.T(0,"projViewObjMat"))
if(c6.go)c1.fx=r.a(c1.y.T(0,"viewMat"))
if(c6.x1)c1.k1=t.O.a(c1.y.T(0,"txt2DMat"))
if(c6.x2)c1.k2=r.a(c1.y.T(0,"txtCubeMat"))
if(c6.y1)c1.k3=r.a(c1.y.T(0,"colorMat"))
c1.r1=H.d([],t.hg)
q=c6.bn
if(q>0){c1.k4=c1.y.T(0,"bendMatCount")
for(l=0;l<q;++l){p=c1.r1
o=c1.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.q(P.u(c3+n+c4))
p.push(r.a(k))}}if(c6.a.a)c1.r2=t.r.a(c1.y.T(0,"emissionClr"))
if(c6.b.a)c1.x1=t.r.a(c1.y.T(0,"ambientClr"))
if(c6.c.a)c1.y2=t.r.a(c1.y.T(0,"diffuseClr"))
if(c6.d.a)c1.bo=t.r.a(c1.y.T(0,"invDiffuseClr"))
r=c6.e.a
if(!r)q=!1
else q=!0
if(q){c1.dn=t.n.a(c1.y.T(0,"shininess"))
if(r)c1.dm=t.r.a(c1.y.T(0,"specularClr"))}if(c6.db){c1.dq=t.p.a(c1.y.T(0,"envSampler"))
if(c6.r.a)c1.dr=t.r.a(c1.y.T(0,"reflectClr"))
r=c6.x.a
if(!r)q=!1
else q=!0
if(q){c1.ds=t.n.a(c1.y.T(0,"refraction"))
if(r)c1.dt=t.r.a(c1.y.T(0,"refractClr"))}}if(c6.y.a)c1.du=t.n.a(c1.y.T(0,"alpha"))
if(c6.k1){r=c6.z
q=r.length
if(q!==0){c1.c3=new H.D(t.J)
c1.c4=new H.D(t.en)
for(p=t.r,o=t.n,n=t.d6,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="barLight"+H.f(h)
f=H.d([],n)
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
if(typeof h!=="number")return h.ai()
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
a4=a3}f.push(new A.d1(k,c,b,a4,a3,a2))}c1.c4.l(0,h,f)
m=c1.c3
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.q(P.u(c3+d+c4))
m.l(0,h,k)}}r=c6.Q
q=r.length
if(q!==0){c1.c5=new H.D(t.J)
c1.c6=new H.D(t.af)
for(p=t.r,o=t.w,n=t.dv,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.f(h)
f=H.d([],n)
for(m=i.b,l=0;l<m;++l){if(typeof h!=="number")return h.ai()
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
f.push(new A.d2(a8,a7,a6,k,c,a9))}c1.c6.l(0,h,f)
m=c1.c5
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.q(P.u(c3+d+c4))
m.l(0,h,k)}}r=c6.ch
q=r.length
if(q!==0){c1.c7=new H.D(t.J)
c1.c8=new H.D(t.gr)
for(p=t.r,o=t.O,n=t.p,m=t.y,e=t.n,d=t.by,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.f(h)
f=H.d([],d)
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
if(typeof h!=="number")return h.ai()
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
a4=a3}f.push(new A.d4(k,c,b2,b,a9,b3,b4,a4,a3,a2))}c1.c8.l(0,h,f)
a5=c1.c7
b0=c1.y
b1=g+"Count"
k=b0.h(0,b1)
if(k==null)H.q(P.u(c3+b1+c4))
a5.l(0,h,k)}}r=c6.cx
q=r.length
if(q!==0){c1.c9=new H.D(t.J)
c1.ca=new H.D(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.w,e=t.fF,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.f(h)
f=H.d([],e)
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
if(typeof h!=="number")return h.ai()
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
f.push(new A.d5(k,c,b,a,a8,a7,b8,b7,b4,c0,b9,a4,a3,a2,a9,b3))}c1.ca.l(0,h,f)
d=c1.c9
a5=c1.y
b0=g+"Count"
k=a5.h(0,b0)
if(k==null)H.q(P.u(c3+b0+c4))
d.l(0,h,k)}}}},
h1:function(a,b){}}
A.dR.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.e1.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eJ.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.eU.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.iA.prototype={
i:function(a){return this.b7}}
A.d1.prototype={}
A.d2.prototype={}
A.d4.prototype={}
A.d5.prototype={}
A.c7.prototype={
cB:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
dC:function(a,b,c){var s,r,q,p=this
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
H.q(P.u("Failed to link shader: "+H.f(q)))}p.h3()
p.h5()},
al:function(a){a.a.useProgram(this.r)
this.x.hE()},
cL:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.b(P.u("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
h3:function(){var s,r,q,p=this,o=H.d([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.x(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dN(n,r.name,q))}p.x=new A.hL(o)},
h5:function(){var s,r,q,p=this,o=H.d([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.x(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hz(r.type,r.size,r.name,q))}p.y=new A.jw(o)},
aO:function(a,b,c){var s=this.a
if(a===1)return new A.fg(s,b,c)
else return A.lr(s,this.r,b,a,c)},
eJ:function(a,b,c){var s=this.a
if(a===1)return new A.fk(s,b,c)
else return A.lr(s,this.r,b,a,c)},
eK:function(a,b,c){var s=this.a
if(a===1)return new A.fl(s,b,c)
else return A.lr(s,this.r,b,a,c)},
bk:function(a,b){return new P.fN(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hz:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aO(b,c,d)
case 5121:return s.aO(b,c,d)
case 5122:return s.aO(b,c,d)
case 5123:return s.aO(b,c,d)
case 5124:return s.aO(b,c,d)
case 5125:return s.aO(b,c,d)
case 5126:return new A.ff(s.a,c,d)
case 35664:return new A.js(s.a,c,d)
case 35665:return new A.fh(s.a,c,d)
case 35666:return new A.fi(s.a,c,d)
case 35667:return new A.jt(s.a,c,d)
case 35668:return new A.ju(s.a,c,d)
case 35669:return new A.jv(s.a,c,d)
case 35674:return new A.jx(s.a,c,d)
case 35675:return new A.fj(s.a,c,d)
case 35676:return new A.d3(s.a,c,d)
case 35678:return s.eJ(b,c,d)
case 35680:return s.eK(b,c,d)
case 35670:throw H.b(s.bk("BOOL",c))
case 35671:throw H.b(s.bk("BOOL_VEC2",c))
case 35672:throw H.b(s.bk("BOOL_VEC3",c))
case 35673:throw H.b(s.bk("BOOL_VEC4",c))
default:throw H.b(P.u("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.fe.prototype={}
A.jw.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
T:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.M()},
M:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.fg.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.jt.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.ju.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jv.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.jr.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.ff.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.js.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.fh.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fi.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jx.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.fj.prototype={
ad:function(a){var s=new Float32Array(H.ch(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.d3.prototype={
ad:function(a){var s=new Float32Array(H.ch(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.fk.prototype={
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fl.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.kp.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.ci(q.b,b).ci(q.d.ci(q.c,b),c)
a.sa5(0,new V.Q(p.a,p.b,p.c))
a.se2(p.H())
q=1-b
s=1-c
a.sda(new V.bB(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)}}
F.kA.prototype={
$2:function(a,b){return V.hG(this.a,this.b,b)}}
F.kC.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hG(-1,1,c),n=this.a.$2(b,c)
if(typeof n!=="number")return H.x(n)
q=-q*n
s=p*n
a.sa5(0,new V.Q(q,s,o))
a.se2(new V.E(q,s,o).H())
a.sda(new V.bB(1-c,2+c,-1,-1))}}
F.kD.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.kE.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kY.prototype={
$2:function(a,b){return 0}}
F.kZ.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.x(r)
s=a.f
r=new V.E(s.a,s.b,s.c).H().A(0,this.b+r)
a.sa5(0,new V.Q(r.a,r.b,r.c))}}
F.l_.prototype={
$1:function(a){return new V.Q(Math.cos(a),Math.sin(a),0)}}
F.kN.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.Q(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)}}
F.kB.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lV(l.$1(m),k)
k=J.lV(l.$1(m+3.141592653589793/n.c),k).X(0,j)
s=new V.E(k.a,k.b,k.c).H()
l=$.mJ
if(l==null){l=new V.E(1,0,0)
$.mJ=l
r=l}else r=l
q=s.aH(!J.G(s,r)?V.mM():r).H()
r=q.aH(s).H()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.A(0,l*k)
k=q.A(0,o*k)
a.sa5(0,j.w(0,new V.Q(l.a-k.a,l.b-k.b,l.c-k.c)))}}
F.e3.prototype={
b5:function(){var s=this
if(!s.gb6()){C.b.J(s.a.a.d.b,s)
s.a.a.Z()}s.bP()
s.bQ()
s.fU()},
bT:function(a){this.a=a
a.d.b.push(this)},
bU:function(a){this.b=a
a.d.c.push(this)},
h2:function(a){this.c=a
a.d.d.push(this)},
bP:function(){var s=this.a
if(s!=null){C.b.J(s.d.b,this)
this.a=null}},
bQ:function(){var s=this.b
if(s!=null){C.b.J(s.d.c,this)
this.b=null}},
fU:function(){var s=this.c
if(s!=null){C.b.J(s.d.d,this)
this.c=null}},
gb6:function(){return this.a==null||this.b==null||this.c==null},
eC:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.d7()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.dF())return p
return q.H()},
eE:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.X(0,n)
q=new V.E(o.a,o.b,o.c).H()
o=r.X(0,n)
return q.aH(new V.E(o.a,o.b,o.c).H()).H()},
c_:function(){var s,r=this
if(r.d!=null)return!0
s=r.eC()
if(s==null){s=r.eE()
if(s==null)return!1}r.d=s
r.a.a.Z()
return!0},
eB:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.d7()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.dF())return p
return q.H()},
eD:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.C().toString
if(Math.abs(p-0)<1e-9){j=b.X(0,e)
o=new V.E(j.a,j.b,j.c).H()
if(q.a-r.a<0)o=o.R(0)}else{n=(j-s.b)/p
j=b.X(0,e).A(0,n).w(0,e).X(0,h)
o=new V.E(j.a,j.b,j.c).H()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.R(0)}j=l.d
if(j!=null){m=j.H()
o=m.aH(o).H().aH(m).H()}return o},
bY:function(){var s,r=this
if(r.e!=null)return!0
s=r.eB()
if(s==null){s=r.eD()
if(s==null)return!1}r.e=s
r.a.a.Z()
return!0},
ght:function(a){var s=this
if(J.G(s.a,s.b))return!0
if(J.G(s.b,s.c))return!0
if(J.G(s.c,s.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
F:function(a){var s,r,q=this
if(q.gb6())return a+"disposed"
s=a+C.a.ao(J.a5(q.a.e),0)+", "+C.a.ao(J.a5(q.b.e),0)+", "+C.a.ao(J.a5(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
M:function(){return this.F("")}}
F.ib.prototype={}
F.jb.prototype={
b9:function(a,b,c){var s,r=b.a
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
F.ei.prototype={
b5:function(){var s=this
if(!s.gb6()){C.b.J(s.a.a.c.b,s)
s.a.a.Z()}s.bP()
s.bQ()},
bT:function(a){this.a=a
a.c.b.push(this)},
bU:function(a){this.b=a
a.c.c.push(this)},
bP:function(){var s=this.a
if(s!=null){C.b.J(s.c.b,this)
this.a=null}},
bQ:function(){var s=this.b
if(s!=null){C.b.J(s.c.c,this)
this.b=null}},
gb6:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
F:function(a){if(this.gb6())return a+"disposed"
return a+C.a.ao(J.a5(this.a.e),0)+", "+C.a.ao(J.a5(this.b.e),0)},
M:function(){return this.F("")}}
F.iq.prototype={}
F.jq.prototype={
b9:function(a,b,c){var s,r=b.a
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
F.eG.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
F:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.ao(J.a5(s.e),0)},
M:function(){return this.F("")}}
F.j3.prototype={
gu:function(){var s=this.e
return s==null?this.e=D.L():s},
ba:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.v()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){p=e[q]
f.a.n(0,p.hw())}f.a.v()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
l=n[m]
f.b.a.a.n(0,l)
m=new F.eG()
if(l.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.E(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.v()
n=n.e
if(typeof n!=="number")return n.w()
n+=s
m=m.c
if(n>=m.length)return H.c(m,n)
i=m[n]
n=f.c.a
n.a.n(0,j)
n.a.n(0,i)
F.ol(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.v()
n=n.e
if(typeof n!=="number")return n.w()
n+=s
m=m.c
if(n>=m.length)return H.c(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.v()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
g=n[m]
m=f.d.a
m.a.n(0,j)
m.a.n(0,i)
m.a.n(0,g)
F.cA(j,i,g)}e=f.e
if(e!=null)e.ap(0)},
az:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.az()||!1
if(!r.a.az())s=!1
q=r.e
if(q!=null)q.ap(0)
return s},
hV:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.a.c
s=H.d(m.slice(0),H.lE(m).K("v<1>"))
for(m=t.j;s.length!==0;){r=C.b.ghJ(s)
C.b.cm(s,0)
if(r!=null){q=H.d([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.c(s,p)
o=s[p]
if(o!=null&&a.b9(0,r,o)){q.push(o)
C.b.cm(s,p)}}if(q.length>1)b.ba(q)}}n.a.v()
n.c.cn()
n.d.cn()
n.b.ie()
n.c.co(new F.jq())
n.d.co(new F.jb())
m=n.e
if(m!=null)m.ap(0)},
bX:function(){this.hV(new F.jS(),new F.iS())},
cc:function(){var s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cc()
for(s=p.a.c.length-1;s>=0;--s){o=p.a.c
if(s>=o.length)return H.c(o,s)
r=o[s]
o=r.r
if(o!=null)r.sdJ(new V.E(-o.a,-o.b,-o.c))
o=r.x
if(o!=null){q=new V.E(-o.a,-o.b,-o.c).H()
if(!J.G(r.x,q)){r.x=q
o=r.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}}o=p.e
if(o!=null)o.ap(0)},
de:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.aL().a)!==0?1:0
if((s&$.bn().a)!==0)++r
if((s&$.bm().a)!==0)++r
if((s&$.bL().a)!==0)++r
if((s&$.bM().a)!==0)++r
if((s&$.dH().a)!==0)++r
if((s&$.dI().a)!==0)++r
if((s&$.cn().a)!==0)++r
if((s&$.bl().a)!==0)++r
q=a6.gcv(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.d(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.d(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.hl(k)
i=j.gcv(j)
if(k>=m)return H.c(n,k)
n[k]=new Z.dS(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.c(g,h)
f=g[h].hT(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.c(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.ch(o)),35044)
s.bindBuffer(a3,null)
a=new Z.cp(new Z.fv(a3,b),n,a6)
a.b=H.d([],t.aZ)
if(a2.b.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.v()
a0.push(m.e)}a1=Z.ls(s,34963,a0)
a.b.push(new Z.bV(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.v()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.c(m,k)
m=m[k].b
m.a.a.v()
a0.push(m.e)}a1=Z.ls(s,34963,a0)
a.b.push(new Z.bV(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.v()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.c(m,k)
m=m[k].b
m.a.a.v()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.c(m,k)
m=m[k].c
m.a.a.v()
a0.push(m.e)}a1=Z.ls(s,34963,a0)
a.b.push(new Z.bV(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.d([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.F(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.F(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.F(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.F(r))}return C.b.j(q,"\n")},
Z:function(){var s=this.e
if(s!=null)s.E(null)}}
F.j4.prototype={
hh:function(a){var s,r,q,p,o,n=H.d([],t.b),m=a.length
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
n.push(F.cA(s,p,o))}}return n},
hi:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.d([],t.b)
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
co:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.c(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.b9(0,n,l)){n.b5()
break}}}}},
cn:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=q.ght(q)
if(r)q.b5()}},
az:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].c_())q=!1
return q},
bZ:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bY())q=!1
return q},
cc:function(){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.b
p.b=p.c
p.c=o
n=p.d
if(n!=null)p.d=new V.E(-n.a,-n.b,-n.c)
n=p.e
if(n!=null)p.e=new V.E(-n.a,-n.b,-n.c)
n=p.a.a.e
if(n!=null)n.E(null)}},
i:function(a){return this.M()},
F:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(a))
return C.b.j(p,"\n")},
M:function(){return this.F("")}}
F.j5.prototype={
gm:function(a){return this.b.length},
co:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.c(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.b9(0,n,l)){n.b5()
break}}}}},
cn:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=J.G(q.a,q.b)
if(r)q.b5()}},
i:function(a){return this.M()},
F:function(a){var s,r,q=H.d([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.c(r,s)
q.push(r[s].F(a+(""+s+". ")))}return C.b.j(q,"\n")},
M:function(){return this.F("")}}
F.j6.prototype={
gm:function(a){return this.b.length},
ie:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.J(q.b.b,r)
q=r.a.a.e
if(q!=null)q.E(null)
q=r.a
if(q!=null){C.b.J(q.b.b,r)
r.a=null}}}},
i:function(a){return this.M()},
F:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(a))
return C.b.j(p,"\n")},
M:function(){return this.F("")}}
F.fs.prototype={
c2:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.ft(s.cx,p,m,r,q,o,n,a,l)},
hw:function(){return this.c2(null)},
sa5:function(a,b){var s
if(!J.G(this.f,b)){this.f=b
s=this.a
if(s!=null)s.Z()}},
sdJ:function(a){var s
a=a==null?null:a.H()
if(!J.G(this.r,a)){this.r=a
s=this.a
if(s!=null)s.Z()}},
se2:function(a){var s
if(!J.G(this.z,a)){this.z=a
s=this.a
if(s!=null)s.Z()}},
sda:function(a){var s
if(!J.G(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.Z()}},
hT:function(a){var s,r,q=this
if(a.p(0,$.aL())){s=q.f
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.bn())){s=q.r
r=t.m
if(s==null)return H.d([0,1,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.bm())){s=q.x
r=t.m
if(s==null)return H.d([0,0,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.bL())){s=q.y
r=t.m
if(s==null)return H.d([0,0],r)
else return H.d([s.a,s.b],r)}else if(a.p(0,$.bM())){s=q.z
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.dH())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.dI())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1,1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else if(a.p(0,$.cn()))return H.d([q.ch],t.m)
else if(a.p(0,$.bl())){s=q.cx
r=t.m
if(s==null)return H.d([-1,-1,-1,-1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else return H.d([],t.m)},
c_:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d7()
r.d.G(0,new F.jX(q))
r.r=q.a.H()
q=r.a
if(q!=null){q.Z()
q=r.a.e
if(q!=null)q.ap(0)}return!0},
bY:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d7()
r.d.G(0,new F.jW(q))
r.x=q.a.H()
q=r.a
if(q!=null){q.Z()
q=r.a.e
if(q!=null)q.ap(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
F:function(a){var s,r,q=this,p="-",o=H.d([],t.i)
o.push(C.a.ao(J.a5(q.e),0))
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
M:function(){return this.F("")}}
F.jX.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.jW.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.jN.prototype={
v:function(){var s,r,q,p
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
s.Z()
return!0},
hj:function(a,b,c,d,e,f){var s=F.ft(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gm:function(a){return this.c.length},
az:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].c_()
return!0},
bZ:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bY()
return!0},
hs:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r.H()
if(!J.G(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}}return!0},
i:function(a){return this.M()},
F:function(a){var s,r,q,p
this.v()
s=H.d([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].F(a))
return C.b.j(s,"\n")},
M:function(){return this.F("")}}
F.jO.prototype={
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
G:function(a,b){var s=this
C.b.G(s.b,b)
C.b.G(s.c,new F.jP(s,b))
C.b.G(s.d,new F.jQ(s,b))},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(""))
return C.b.j(p,"\n")}}
F.jP.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)}}
F.jQ.prototype={
$1:function(a){var s=this.a
if(!J.G(a.a,s)&&!J.G(a.b,s))this.b.$1(a)}}
F.jR.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.c(r,s)
return r[s]}else{if(b<0)return H.c(r,b)
return r[b]}},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(""))
return C.b.j(p,"\n")}}
F.jT.prototype={}
F.jS.prototype={
b9:function(a,b,c){return J.G(b.f,c.f)}}
F.jU.prototype={}
F.iS.prototype={
ba:function(a){var s,r,q,p=V.d7()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.E(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.H()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)a[r].sdJ(p)
return null}}
F.jV.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].F(""))
return C.b.j(p,"\n")}}
O.hZ.prototype={
gu:function(){var s=this.r
return s==null?this.r=D.L():s},
a2:function(a){var s=this.r
if(s!=null)s.E(a)},
au:function(a,b){},
dX:function(a,b){var s,r,q,p,o=this,n=o.a
if(n==null){n=o.f
s="Grey"+(n?"Point":"View")+"Depth"
r=a.fr.h(0,s)
if(r==null){s=a.a
q="Grey"+(n?"Point":"View")+"Depth"
r=new A.e_(s,q)
r.cB(s,q)
n=n?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = length(loc.xyz);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n"
n+="  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n"
r.dC(0,u.s.charCodeAt(0)==0?u.s:u.s,n.charCodeAt(0)==0?n:n)
r.z=r.x.h(0,"posAttr")
n=t.n
r.Q=n.a(r.y.h(0,"width"))
r.ch=n.a(r.y.h(0,"stop"))
n=t.q
r.cx=n.a(r.y.h(0,"viewObjMat"))
r.cy=n.a(r.y.h(0,"projMat"))
a.d8(r)}o.a=r
n=r}s=b.e
if((!(s instanceof Z.cp)?b.e=null:s)==null){n=b.d.de(new Z.fw(a.a),$.aL())
s=n.aI($.aL())
q=o.a
s.e=q.z.c
b.e=n
n=q}n.al(a)
s=o.b
q=o.c
p=n.Q
p.a.uniform1f(p.d,s-q)
q=o.c
s=n.ch
s.a.uniform1f(s.d,q)
q=a.cy
q=q.gY(q)
s=n.cy
s.toString
s.ad(q.a8(0,!0))
q=a.ge6()
n=n.cx
n.toString
n.ad(q.a8(0,!0))
n=b.e
n.al(a)
n.at(a)
n.be(a)
n=o.a
n.toString
a.a.useProgram(null)
n.x.dk()}}
O.em.prototype={
gu:function(){var s=this.fr
return s==null?this.fr=D.L():s},
a2:function(a){var s=this.fr
if(s!=null)s.E(a)},
ev:function(){return this.a2(null)},
cV:function(a){this.a=null
this.a2(a)},
fY:function(){return this.cV(null)},
f1:function(a,b){var s=new D.aP()
s.b=!0
this.a2(s)},
f3:function(a,b){var s=new D.aQ()
s.b=!0
this.a2(s)},
cJ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.D(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gac()
n=d.h(0,p.gac())
d.l(0,o,n==null?1:n)}m=H.d([],t.am)
d.G(0,new O.iE(f,m))
C.b.b_(m,new O.iF())
l=new H.D(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gac()
n=l.h(0,p.gac())
l.l(0,o,n==null?1:n)}k=H.d([],t.M)
l.G(0,new O.iG(f,k))
C.b.b_(k,new O.iH())
j=new H.D(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gac()
n=j.h(0,p.gac())
j.l(0,o,n==null?1:n)}i=H.d([],t.d1)
j.G(0,new O.iI(f,i))
C.b.b_(i,new O.iJ())
h=new H.D(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.o)(e),++q){p=e[q]
r=p.gac()
o=h.h(0,p.gac())
h.l(0,r,o==null?1:o)}g=H.d([],t.cz)
h.G(0,new O.iK(f,g))
C.b.b_(g,new O.iL())
e=C.c.a4(f.e.a.length+3,4)
f.dy.toString
return A.os(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
eA:function(a,b){if(b!=null)if(!C.b.C(a,b)){b.a=a.length
a.push(b)}},
au:function(a,b){var s,r,q,p
for(s=this.dx.a,s=new J.a2(s,s.length);s.q();){r=s.d
r.toString
q=$.aq
r.a=q==null?$.aq=new V.Q(0,0,0):q
q=$.jM
r.b=q==null?$.jM=new V.E(0,0,1):q
q=$.jL
r.c=q==null?$.jL=new V.E(0,1,0):q
q=$.jK
r.d=q==null?$.jK=new V.E(-1,0,0):q
q=r.f
if(q!=null){p=q.aC(0,b,r)
if(p!=null){r.a=p.aY(r.a)
r.b=p.bx(r.b).H()
r.c=p.bx(r.c).H()
r.d=p.bx(r.d).H()}}}},
dX:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cJ()
s=b4.fr.h(0,b3.b7)
if(s==null){s=A.or(b3,b4.a)
b4.d8(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bo
b3=b5.e
if(!(b3 instanceof Z.cp))b3=b5.e=null
if(b3==null||!b3.d.p(0,q)){b3=r.k4
if(b3)b5.d.az()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.bZ()
o.a.bZ()
o=o.e
if(o!=null)o.ap(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.hs()
n=n.e
if(n!=null)n.ap(0)}l=b5.d.de(new Z.fw(b4.a),q)
l.aI($.aL()).e=b2.a.Q.c
if(b3)l.aI($.bn()).e=b2.a.cx.c
if(p)l.aI($.bm()).e=b2.a.ch.c
if(r.r2)l.aI($.bL()).e=b2.a.cy.c
if(o)l.aI($.bM()).e=b2.a.db.c
if(r.ry)l.aI($.bl()).e=b2.a.dx.c
b5.e=l}k=H.d([],t.bw)
b2.a.al(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.gY(p)
b3=b3.dy
b3.toString
b3.ad(p.a8(0,!0))}if(r.fx){b3=b2.a
p=b4.ge6()
b3=b3.fr
b3.toString
b3.ad(p.a8(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gib()
o=b4.dx
o=b4.ch=p.A(0,o.gY(o))
p=o}b3=b3.fy
b3.toString
b3.ad(p.a8(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.gY(p)
b3=b3.fx
b3.toString
b3.ad(p.a8(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ad(C.j.a8(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ad(C.j.a8(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ad(C.j.a8(p,!0))}if(r.bn>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.c(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.c(b3,i)
b3=b3[i]
h=new Float32Array(H.ch(p.a8(0,!0)))
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
b3=b3.bo
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.dn
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.dm
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.z
if(b3.length>0){g=new H.D(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gac()
c=g.h(0,d)
if(c==null)c=0
g.l(0,d,c+1)
b=J.co(b2.a.c4.h(0,d),c)
n=e.gix()
m=$.aq
n=n.aY(m==null?$.aq=new V.Q(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giy()
m=$.aq
n=n.aY(m==null?$.aq=new V.Q(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaG(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.ghF()){n=e.ghn()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gho()
m=b.f
m.a.uniform1f(m.d,n)
n=e.ghp()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.c3.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.gY(p)
a0=new H.D(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gac()
c=a0.h(0,d)
if(c==null)c=0
a0.l(0,d,c+1)
b=J.co(b2.a.c6.h(0,d),c)
n=a.bx(e.ghD(e)).H()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.gaG(e)
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)
e.gaX()
n=e.ghD(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giO()
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gcp(e)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaX()
if(!C.b.C(k,n)){n.a=k.length
k.push(n)}n=e.gaX()
m=n.gbt(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.c5.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.gY(p)
a3=new H.D(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gac()
c=a3.h(0,d)
if(c==null)c=0
a3.l(0,d,c+1)
b=J.co(b2.a.c8.h(0,d),c)
a4=a.A(0,e.gY(e))
n=e.gY(e)
m=$.aq
n=n.aY(m==null?$.aq=new V.Q(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.aq
n=a4.aY(n==null?$.aq=new V.Q(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaG(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaX()
n=a4.cg(0)
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
h=new Float32Array(H.ch(new V.eo(m,a1,a2,a5,a6,a7,a8,a9,n).a8(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gaX()
n=e.gaX()
if(!C.b.C(k,n)){n.a=k.length
k.push(n)}n=e.gaX()
m=n.gbt(n)
if(m){m=b.f
m.toString
a1=n.gbt(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.ghP(n))}e.gcu()
n=e.giw()
m=b.x
m.a.uniform4f(m.d,n.a,n.b,n.c,n.d)
n=e.gcu()
if(!C.b.C(k,n)){n.a=k.length
k.push(n)}n=e.gcu()
m=n.gbt(n)
if(m){m=b.r
m.toString
a1=n.gbt(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.ghP(n))}if(e.ghF()){n=e.ghn()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gho()
m=b.z
m.a.uniform1f(m.d,n)
n=e.ghp()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.c7.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.gY(p)
b1=new H.D(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.o)(p),++f){e=p[f]
d=e.gac()
c=b1.h(0,d)
if(c==null)c=0
b1.l(0,d,c+1)
b=J.co(b2.a.ca.h(0,d),c)
n=e.a
m=b.b
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.b.H()
a2=b.c
a1=n.a
m=n.b
n=n.c
a2.a.uniform3f(a2.d,a1,m,n)
n=a.aY(e.a)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.r
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.x!=null||e.y!=null){n=e.c
m=b.f
m.toString
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.d
a2=b.r
a2.toString
a1=n.a
m=n.b
n=n.c
a2.a.uniform3f(a2.d,a1,m,n)
n=e.z
m=b.x
m.a.uniform1f(m.d,n)
n=e.Q
m=b.y
m.a.uniform1f(m.d,n)}n=e.x
m=n!=null
if(m){if(m)if(!C.b.C(k,n)){n.a=k.length
k.push(n)}n=e.x
m=n!=null
if(m&&n.d){a1=b.dx
a1.toString
m=!m||!n.d
a2=a1.a
a1=a1.d
if(m)a2.uniform1i(a1,0)
else a2.uniform1i(a1,n.a)}}if(e.y!=null){n=e.e
m=b.z
m.toString
a1=n.a
a2=n.b
a5=n.c
n=n.d
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.y
if(n!=null)if(!C.b.C(k,n)){n.a=k.length
k.push(n)}n=e.y
m=n!=null
if(m&&n.d){a1=b.dy
a1.toString
m=!m||!n.d
a2=a1.a
a1=a1.d
if(m)a2.uniform1i(a1,0)
else a2.uniform1i(a1,n.a)}}if(e.db){n=e.cy
m=b.Q
m.a.uniform1f(m.d,n)
n=e.dx
m=b.ch
m.a.uniform1f(m.d,n)}n=e.dy
m=b.cx
m.a.uniform1f(m.d,n)
n=e.fr
m=b.cy
m.a.uniform1f(m.d,n)
n=e.fx
m=b.db
m.a.uniform1f(m.d,n)}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.o)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.c9.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gY(p).cg(0)}b3=b3.id
b3.toString
b3.ad(p.a8(0,!0))}if(r.db){b2.eA(k,b2.ch)
b3=b2.a
p=b2.ch
b3.h1(b3.dq,p)
if(r.r.a){b3=b2.a
p=b2.cx.f
b3=b3.dr
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=r.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.ds
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.dt
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=r.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.du
b3.a.uniform1f(b3.d,o)}b3=b4.a
b3.enable(3042)
b3.blendFunc(770,771)}for(b3=b4.a,i=0;i<k.length;++i){o=k[i]
if(!o.c&&o.d){o.c=!0
b3.activeTexture(33984+o.a)
b3.bindTexture(3553,o.b)}}o=b5.e
o.al(b4)
o.at(b4)
o.be(b4)
if(p)p=!1
else p=!0
if(p)b3.disable(3042)
for(i=0;i<k.length;++i){p=k[i]
if(p.c){p.c=!1
b3.activeTexture(33984+p.a)
b3.bindTexture(3553,null)}}p=b2.a
p.toString
b3.useProgram(null)
p.x.dk()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cJ().b7}}
O.iE.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dR(a,C.c.a4(b+3,4)*4))}}
O.iF.prototype={
$2:function(a,b){return J.dJ(a.a,b.a)}}
O.iG.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.e1(a,C.c.a4(b+3,4)*4))}}
O.iH.prototype={
$2:function(a,b){return J.dJ(a.a,b.a)}}
O.iI.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.eJ(a,C.c.a4(b+3,4)*4))}}
O.iJ.prototype={
$2:function(a,b){return J.dJ(a.a,b.a)}}
O.iK.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.eU(a,C.c.a4(b+3,4)*4))}}
O.iL.prototype={
$2:function(a,b){return J.dJ(a.a,b.a)}}
O.iy.prototype={
aE:function(){var s,r=this
r.cz()
s=r.f
$.C().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.z(r.b,s,1)
s.b=!0
r.a.a2(s)}}}
O.en.prototype={
aE:function(){},
cZ:function(a){var s,r,q=this
if(!q.c.p(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aE()
s=q.a
s.a=null
s.a2(null)}}}
O.iz.prototype={}
O.aU.prototype={
cX:function(a){var s,r,q=this
if(!q.f.p(0,a)){s=q.f
q.f=a
r=new D.z(q.b+".color",s,a)
r.b=!0
q.a.a2(r)}},
aE:function(){this.cz()
this.cX(new V.Y(1,1,1))},
saG:function(a,b){this.cZ(new A.a7(!0,!1,!1))
this.cX(b)}}
O.iB.prototype={}
O.iC.prototype={
aE:function(){var s,r=this
r.cA()
s=r.ch
$.C().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.z(r.b+".refraction",s,1)
s.b=!0
r.a.a2(s)}}}
O.iD.prototype={
d_:function(a){var s=this,r=s.ch
$.C().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.z(s.b+".shininess",r,a)
r.b=!0
s.a.a2(r)}},
aE:function(){this.cA()
this.d_(100)}}
O.f4.prototype={}
T.f7.prototype={}
T.je.prototype={}
T.jf.prototype={
cY:function(){if(!this.d){this.d=!0
var s=this.y
if(s!=null)s.dl()}},
gu:function(){var s=this.y
return s==null?this.y=D.L():s}}
T.jg.prototype={
hU:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=T.lp(o)
W.a_(s,"load",new T.jh(this,r,s,!1,o,!1,!1),!1)
return r},
fZ:function(a,b,c){var s,r,q,p
b=V.dG(b)
s=V.dG(a.width)
r=V.dG(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.l6()
q.width=s
q.height=r
p=C.i.e9(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.qv(p.getImageData(0,0,q.width,q.height))}}}
T.jh.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.b,n=q.c
o.e=n.width
o.f=n.height
s=q.a
r=s.fZ(n,s.b,q.d)
o.r=n.width
o.x=n.height
n=s.a
n.bindTexture(p,q.e)
n.pixelStorei(37440,q.f?1:0)
C.D.im(n,p,0,6408,6408,5121,r)
if(q.r)n.generateMipmap(p)
n.bindTexture(p,null)
o.cY();++s.e}}
X.hO.prototype={
gu:function(){var s=this.fr
return s==null?this.fr=D.L():s},
a3:function(a){var s=this.fr
if(s!=null)s.E(a)},
saw:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
s=new D.z("width",s,b)
s.b=!0
r.a3(s)}},
sar:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
s=new D.z("height",s,b)
s.b=!0
r.a3(s)}},
al:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=3553,d=36161,c=36160
if(g.y==null){s=a.a
r=g.ch
q=g.a
p=g.b
o=s.getParameter(3379)
n=V.dG(q)
m=V.dG(p)
o=V.dG(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
s.bindTexture(e,l)
s.texParameteri(e,10242,33071)
s.texParameteri(e,10243,33071)
s.texParameteri(e,10241,9729)
s.texParameteri(e,10240,9729)
C.D.e1(s,e,0,6408,n,m,0,6408,5121,f)
s.bindTexture(e,f)
k=T.lp(l)
k.e=q
k.f=p
k.r=n
k.x=m
k.cY()
r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
r=r.y
if(r!=null)r.dl()
r=g.ch
q=r.b
g.z=q
g.c=r.r
g.d=r.x
s.bindTexture(e,q)
r=s.createRenderbuffer()
g.Q=r
s.bindRenderbuffer(d,r)
s.renderbufferStorage(d,33189,g.c,g.d)
r=s.createFramebuffer()
g.y=r
s.bindFramebuffer(c,r)
s.framebufferTexture2D(c,36064,e,g.z,0)
s.framebufferRenderbuffer(c,36096,d,g.Q)
s.bindTexture(e,f)
s.bindRenderbuffer(d,f)
s.bindFramebuffer(c,f)}s=a.a
s.bindFramebuffer(c,g.y)
s.enable(2884)
s.enable(2929)
s.depthFunc(513)
r=g.dy
q=r.c
a.c=C.d.a0(q*g.a)
p=r.d
a.d=C.d.a0(p*g.b)
j=r.a
i=g.c
if(typeof i!=="number")return H.x(i)
h=C.d.a0(j*i)
r=r.b
j=g.d
if(typeof j!=="number")return H.x(j)
s.viewport(h,C.d.a0(r*j),C.d.a0(q*i),C.d.a0(p*j))
s.clearDepth(g.db)
r=g.cx
s.clearColor(r.a,r.b,r.c,r.d)
s.clear(16640)},
be:function(a){a.a.bindFramebuffer(36160,null)}}
X.l5.prototype={}
X.ig.prototype={
gu:function(){var s=this.x
return s==null?this.x=D.L():s},
al:function(a){var s,r,q,p,o,n,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
s=m.drawingBufferWidth
r=m.drawingBufferHeight
q=this.r
p=q.a
if(typeof s!=="number")return H.x(s)
o=C.d.a0(p*s)
p=q.b
if(typeof r!=="number")return H.x(r)
n=C.d.a0(p*r)
p=C.d.a0(q.c*s)
a.c=p
q=C.d.a0(q.d*r)
a.d=q
m.viewport(o,n,p,q)
m.clearDepth(this.c)
q=this.a
m.clearColor(q.a,q.b,q.c,q.d)
m.clear(16640)},
be:function(a){}}
X.eC.prototype={
gu:function(){var s=this.f
return s==null?this.f=D.L():s},
a3:function(a){var s=this.f
if(s!=null)s.E(a)},
f6:function(){return this.a3(null)},
saU:function(a){var s,r,q=this
if(!J.G(q.b,a)){s=q.b
if(s!=null)s.gu().J(0,q.gcR())
r=q.b
q.b=a
if(a!=null)a.gu().n(0,q.gcR())
s=new D.z("mover",r,q.b)
s.b=!0
q.a3(s)}}}
X.jd.prototype={}
V.b6.prototype={
bg:function(a){this.b=new P.ij(C.U)
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
m=k.b.eI(o,0,o.length)
l=m==null?o:m
C.S.eb(n,H.lR(l," ","&nbsp;"))
l=n.style
l.color=b
C.b.gaA(k.d).push(n)}},
dS:function(a,b){var s,r,q,p=this
p.d=H.d([],t.u)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bm()
r.toString
q=new H.p(s)
q=new P.bG(r.cq(new H.bb(q,q.gm(q))).a())
for(;q.q();)p.bv(q.gB(q))}}
V.kX.prototype={
$1:function(a){var s=C.d.e3(this.a.ghO(),2)
if(s!=="0.00")P.lQ(s+" fps")}}
V.dY.prototype={
bv:function(a){var s=this
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
bm:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()\\-+*%!&|=.,?:;",i="OpenDoubleStr",h="CloseDoubleStr",g="EscDoubleStr",f="OpenSingleStr",e="CloseSingleStr",d="EscSingleStr",c="Slash",b="Comment",a="EndComment",a0="MLComment",a1="MLCStar",a2="Whitespace",a3=L.jl()
a3.d=a3.k(0,p)
s=a3.k(0,p).j(0,o)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=a3.k(0,o).j(0,o)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.P("0","9")
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=a3.k(0,p).j(0,n)
r=K.P("0","9")
s.a.push(r)
r=a3.k(0,n).j(0,n)
s=K.P("0","9")
r.a.push(s)
s=a3.k(0,n).j(0,m)
r=K.t(new H.p("."))
s.a.push(r)
r=a3.k(0,m).j(0,l)
s=K.P("0","9")
r.a.push(s)
s=a3.k(0,l).j(0,l)
r=K.P("0","9")
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
a3.k(0,i).j(0,i).a.push(new K.b4())
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
a3.k(0,f).j(0,f).a.push(new K.b4())
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
r=new K.aa()
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
r=new K.aa()
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
r.d=r.a.O("Num")
r=a3.k(0,l)
r.d=r.a.O("Num")
r=a3.k(0,k)
r.d=r.a.O("Symbol")
r=a3.k(0,h)
r.d=r.a.O("String")
r=a3.k(0,e)
r.d=r.a.O("String")
r=a3.k(0,a)
r.d=r.a.O(b)
r=a3.k(0,a2)
r.d=r.a.O(a2)
r=a3.k(0,o)
r=r.d=r.a.O(o)
s=t.i
r.aK(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aK(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aK(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a3}}
V.e7.prototype={
bv:function(a){var s=this
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
bm:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()[]\\-+*%!&|=.,?:;",i="Slash",h="Comment",g="EndComment",f="Preprocess",e="EndPreprocess",d="Whitespace",c=L.jl()
c.d=c.k(0,p)
s=c.k(0,p).j(0,o)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=c.k(0,o).j(0,o)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.P("0","9")
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=c.k(0,p).j(0,n)
r=K.P("0","9")
s.a.push(r)
r=c.k(0,n).j(0,n)
s=K.P("0","9")
r.a.push(s)
s=c.k(0,n).j(0,m)
r=K.t(new H.p("."))
s.a.push(r)
r=c.k(0,m).j(0,l)
s=K.P("0","9")
r.a.push(s)
s=c.k(0,l).j(0,l)
r=K.P("0","9")
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
c.k(0,i).j(0,k).a.push(new K.b4())
r=c.k(0,h).j(0,g)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,h).j(0,h)
r=new K.aa()
q=t.B
r.a=H.d([],q)
s.a.push(r)
s=K.t(new H.p("\n"))
r.a.push(s)
s=c.k(0,p).j(0,f)
r=K.t(new H.p("#"))
s.a.push(r)
r=c.k(0,f).j(0,f)
s=new K.aa()
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
s.d=s.a.O("Num")
s=c.k(0,l)
s.d=s.a.O("Num")
s=c.k(0,k)
s.d=s.a.O("Symbol")
s=c.k(0,g)
s.d=s.a.O(h)
s=c.k(0,e)
s.d=s.a.O(f)
s=c.k(0,d)
s.d=s.a.O(d)
s=c.k(0,o)
s=s.d=s.a.O(o)
r=t.i
s.aK(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],r))
s.aK(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],r))
s.aK(0,"Builtin",H.d(["gl_FragColor","gl_Position"],r))
return c}}
V.e9.prototype={
bv:function(a){var s=this,r="#111"
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
bm:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.jl()
j.d=j.k(0,q)
s=j.k(0,q).j(0,p)
r=K.t(new H.p("_"))
s.a.push(r)
r=K.P("a","z")
s.a.push(r)
r=K.P("A","Z")
s.a.push(r)
r=j.k(0,p).j(0,p)
s=K.t(new H.p("_"))
r.a.push(s)
s=K.P("0","9")
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
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
j.k(0,m).j(0,m).a.push(new K.b4())
j.k(0,q).j(0,k).a.push(new K.b4())
s=j.k(0,k).j(0,k)
r=new K.aa()
r.a=H.d([],t.B)
s.a.push(r)
s=K.t(new H.p('</\\-!>=_"'))
r.a.push(s)
s=K.P("a","z")
r.a.push(s)
s=K.P("A","Z")
r.a.push(s)
s=j.k(0,n)
s.d=s.a.O("Symbol")
s=j.k(0,l)
s.d=s.a.O("String")
s=j.k(0,p)
r=s.a.O(p)
s.d=r
r.aK(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],t.i))
r=j.k(0,o)
r.d=r.a.O(o)
r=j.k(0,k)
r.d=r.a.O(k)
return j}}
V.eE.prototype={
dS:function(a,b){this.d=H.d([],t.u)
this.L(C.b.j(b,"\n"),"#111")},
bv:function(a){},
bm:function(){return null}}
V.iV.prototype={
d5:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.mC().gcl().h(0,H.f(s))
if(r==null)if(d){c.$0()
k.d4(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.l3(k.c).n(0,o)
m=W.oe("radio")
m.checked=q
m.name=s
W.a_(m,"change",new V.iW(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.l3(k.c).n(0,p.createElement("br"))},
aR:function(a,b,c){return this.d5(a,b,c,!1)},
d4:function(a){var s,r,q=P.mC(),p=t.X,o=P.oo(q.gcl(),p,p)
o.l(0,this.a,a)
s=q.dY(0,o)
p=window.history
r=s.gbV()
p.toString
p.replaceState(new P.kc([],[]).by(""),"",r)}}
V.iW.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.d4(s.d)}}}
V.j7.prototype={
em:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.a_(o,"scroll",new V.j9(m),!1)},
d7:function(a){var s,r,q,p,o,n,m,l
this.h4()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hS(a)
q.toString
p=new H.p(p)
p=new P.bG(q.cq(new H.bb(p,p.gm(p))).a())
for(;p.q();){q=p.gB(p)
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
if(H.nr(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.c(n,1)
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
e8:function(a){var s,r,q,p=new V.dY("dart")
p.bg("dart")
s=new V.e7("glsl")
s.bg("glsl")
r=new V.e9("html")
r.bg("html")
q=C.b.hK(H.d([p,s,r],t.b7),new V.ja(a))
if(q!=null)return q
p=new V.eE("plain")
p.bg("plain")
return p},
d6:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.d([],t.V)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.dF(q).a6(q,"+")){b2[r]=C.a.af(q,1)
a8.push(1)
s=!0}else if(C.a.a6(q,"-")){b2[r]=C.a.af(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.e8(b0)
p.dS(0,b2)
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
h=W.lX()
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
for(a4=C.b.gN(q);a4.q();)b.appendChild(a4.gB(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
hf:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
h4:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=L.jl()
s.d=s.k(0,o)
r=s.k(0,o).j(0,n)
q=K.t(new H.p("*"))
r.a.push(q)
r.c=!0
r=s.k(0,n).j(0,n)
q=new K.aa()
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
q=new K.aa()
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
q=new K.aa()
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
r=new K.aa()
r.a=H.d([],p)
q.a.push(r)
q=K.t(new H.p("|]"))
r.a.push(q)
q=s.k(0,i).j(0,h)
r=K.t(new H.p("]"))
q.a.push(r)
q.c=!0
q=s.k(0,i).j(0,i)
r=new K.aa()
r.a=H.d([],p)
q.a.push(r)
q=K.t(new H.p("|]"))
r.a.push(q)
s.k(0,o).j(0,g).a.push(new K.b4())
q=s.k(0,g).j(0,g)
r=new K.aa()
r.a=H.d([],p)
q.a.push(r)
q=K.t(new H.p("*_`["))
r.a.push(q)
q=s.k(0,"BoldEnd")
q.d=q.a.O(n)
q=s.k(0,l)
q.d=q.a.O(m)
q=s.k(0,"CodeEnd")
q.d=q.a.O(k)
q=s.k(0,h)
q.d=q.a.O("Link")
q=s.k(0,g)
q.d=q.a.O(g)
this.b=s}}
V.j9.prototype={
$1:function(a){P.my(C.n,new V.j8(this.a))}}
V.j8.prototype={
$0:function(){var s=C.d.a0(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
V.ja.prototype={
$1:function(a){return a.a===this.a}}
V.kO.prototype={
$0:function(){this.a.sae(0,F.lL(1,null,null,1))}}
V.kP.prototype={
$0:function(){this.a.sae(0,F.kz(1,!0,!0,40,1))}}
V.kQ.prototype={
$0:function(){this.a.sae(0,F.kz(0.2,!0,!0,40,0.2))}}
V.kR.prototype={
$0:function(){this.a.sae(0,F.kz(1,!0,!1,40,0))}}
V.kS.prototype={
$0:function(){this.a.sae(0,F.qO(6,6))}}
V.kT.prototype={
$0:function(){this.a.sae(0,F.ns())}}
V.kU.prototype={
$0:function(){this.a.sae(0,F.qJ())}}
V.kV.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a,p=t.s
s.d6("Vertex Shader","glsl",0,H.d((q==null?null:q.c).split("\n"),p))
r=r.a
s.d6("Fragment Shader","glsl",0,H.d((r==null?null:r.d).split("\n"),p))}};(function aliases(){var s=J.a.prototype
s.ee=s.i
s=J.ba.prototype
s.eg=s.i
s=P.h.prototype
s.ef=s.bz
s=W.F.prototype
s.bB=s.am
s=W.dk.prototype
s.eh=s.ay
s=K.e8.prototype
s.ed=s.aJ
s.cw=s.i
s=O.en.prototype
s.cz=s.aE
s=O.aU.prototype
s.cA=s.aE})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pJ","oj",22)
r(P,"qo","oV",8)
r(P,"qp","oW",8)
r(P,"qq","oX",8)
q(P,"nf","qj",9)
r(W,"rZ","i4",23)
p(W,"qC",4,null,["$4"],["oY"],15,0)
p(W,"qD",4,null,["$4"],["oZ"],15,0)
var j
o(j=E.bu.prototype,"gdO",0,0,null,["$1","$0"],["dP","i2"],0,0)
o(j,"gdQ",0,0,null,["$1","$0"],["dR","i3"],0,0)
o(j,"gdM",0,0,null,["$1","$0"],["dN","i1"],0,0)
o(j,"gdK",0,0,null,["$1","$0"],["dL","hZ"],0,0)
n(j,"ghX","hY",4)
n(j,"gi_","i0",4)
o(j=E.f8.prototype,"gcC",0,0,null,["$1","$0"],["cE","cD"],0,0)
m(j,"gii","dZ",9)
l(j=X.fr.prototype,"gfh","fi",5)
l(j,"gf4","f5",5)
l(j,"gfb","fc",2)
l(j,"gfl","fm",10)
l(j,"gfj","fk",10)
l(j,"gfp","fq",2)
l(j,"gfu","fv",2)
l(j,"gff","fg",2)
l(j,"gfs","ft",2)
l(j,"gfd","fe",2)
l(j,"gfw","fz",20)
l(j,"gfA","fB",5)
l(j,"gfQ","fR",6)
l(j,"gfM","fN",6)
l(j,"gfO","fP",6)
o(j=D.cH.prototype,"gcS",0,0,null,["$1","$0"],["cT","fn"],0,0)
l(j,"gfC","fD",21)
n(j,"geZ","f_",11)
n(j,"gfG","fH",11)
o(D.bC.prototype,"gb0",0,0,null,["$1","$0"],["V","ep"],0,0)
k(V.aw.prototype,"gm","b8",7)
k(V.E.prototype,"gm","b8",7)
k(V.d8.prototype,"gm","b8",7)
o(j=U.bT.prototype,"gaN",0,0,null,["$1","$0"],["S","ak"],0,0)
n(j,"geq","er",12)
n(j,"gfE","fF",12)
o(U.bX.prototype,"gaN",0,0,null,["$1","$0"],["S","ak"],0,0)
o(j=U.d6.prototype,"gaN",0,0,null,["$1","$0"],["S","ak"],0,0)
l(j,"geT","eU",1)
l(j,"geV","eW",1)
l(j,"geX","eY",1)
l(j,"geO","eP",1)
l(j,"geQ","eR",1)
l(j,"ghb","hc",1)
l(j,"gh9","ha",1)
l(j,"gh7","h8",1)
o(j=M.cq.prototype,"gag",0,0,null,["$1","$0"],["ab","bC"],0,0)
n(j,"gfI","fJ",13)
n(j,"gfK","fL",13)
o(j=M.cz.prototype,"gag",0,0,null,["$1","$0"],["ab","bC"],0,0)
n(j,"gf7","f8",4)
n(j,"gf9","fa",4)
o(j=O.em.prototype,"geu",0,0,null,["$1","$0"],["a2","ev"],0,0)
o(j,"gfX",0,0,null,["$1","$0"],["cV","fY"],0,0)
n(j,"gf0","f1",14)
n(j,"gf2","f3",14)
o(X.eC.prototype,"gcR",0,0,null,["$1","$0"],["a3","f6"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.N,null)
q(P.N,[H.le,J.a,J.a2,P.K,P.dd,P.h,H.bb,P.eb,H.cB,H.fo,H.cs,H.jo,H.iT,H.hd,H.br,P.U,H.ir,H.ej,H.ed,H.as,H.fQ,P.dr,P.cf,P.bG,P.fy,P.cY,P.eZ,P.d_,P.ko,P.dj,P.k4,P.dc,P.i,P.hs,P.cO,P.dU,P.ik,P.km,P.kl,P.az,P.ah,P.R,P.bt,P.eB,P.cX,P.fN,P.ie,P.aB,P.n,P.H,P.ap,P.y,P.S,P.bH,P.jz,P.h7,W.hV,W.la,W.lt,W.ce,W.M,W.cV,W.dk,W.hi,W.cC,W.ak,W.k8,W.ht,P.kb,P.dt,P.h5,P.bf,K.b4,K.e8,K.ix,K.iX,K.j2,L.eW,L.f9,L.fa,L.jk,O.a6,O.cQ,E.hR,E.bu,E.bQ,E.c3,E.fK,E.iY,E.f8,Z.fv,Z.fw,Z.cp,Z.bV,Z.bF,D.hS,D.bR,D.Z,X.dT,X.ef,X.ip,X.iv,X.c_,X.iP,X.jm,X.fr,D.dQ,D.e0,D.T,D.eH,D.bC,V.Y,V.an,V.i7,V.eo,V.bc,V.al,V.Q,V.bB,V.eM,V.aw,V.E,V.d8,U.bX,U.d6,M.cz,M.ab,A.dN,A.hL,A.a7,A.dR,A.e1,A.eJ,A.eU,A.iA,A.d1,A.d2,A.d4,A.d5,A.fe,A.jw,F.e3,F.ib,F.ei,F.iq,F.eG,F.j3,F.j4,F.j5,F.j6,F.fs,F.jN,F.jO,F.jR,F.jT,F.jU,F.jV,O.f4,O.en,O.iB,T.jg,X.jd,X.l5,X.eC,V.b6,V.iV,V.j7])
q(J.a,[J.ec,J.cG,J.ba,J.v,J.bx,J.aR,H.cR,H.V,W.e,W.hJ,W.bo,W.aO,W.J,W.fD,W.ao,W.hY,W.i_,W.fF,W.cw,W.fH,W.i0,W.j,W.fO,W.aC,W.ii,W.fS,W.bw,W.iu,W.iM,W.fW,W.fX,W.aE,W.fY,W.h_,W.aF,W.h3,W.h6,W.aG,W.h8,W.aH,W.he,W.au,W.hk,W.jj,W.aI,W.hm,W.jn,W.jE,W.hu,W.hw,W.hy,W.hA,W.hC,P.aS,P.fU,P.aW,P.h1,P.iU,P.hf,P.aX,P.ho,P.hM,P.fA,P.eN,P.hb])
q(J.ba,[J.eD,J.bE,J.aD])
r(J.im,J.v)
q(J.bx,[J.cF,J.cE])
q(P.K,[H.eg,H.ex,H.ee,H.fn,H.eP,H.fL,P.dM,P.ey,P.ag,P.fp,P.fm,P.c8,P.dV,P.dX])
r(P.cK,P.dd)
q(P.cK,[H.ca,W.fB,W.a1,P.e5])
r(H.p,H.ca)
q(P.h,[H.l,H.aT,H.b_,P.cD])
q(H.l,[H.cL,H.cI])
r(H.cx,H.aT)
q(P.eb,[H.ek,H.fx])
r(H.cP,H.cL)
r(H.ct,H.cs)
q(H.br,[H.f3,H.io,H.kH,H.kI,H.kJ,P.jZ,P.jY,P.k_,P.k0,P.kh,P.kg,P.kx,P.k6,P.k7,P.is,P.iw,P.jH,P.jI,P.i1,P.i2,P.jD,P.jA,P.jB,P.jC,P.kj,P.ki,P.ks,P.kr,P.kt,P.ku,W.i3,W.iN,W.iO,W.j1,W.jc,W.k1,W.iR,W.iQ,W.k9,W.ka,W.kf,W.kn,P.kd,P.ke,P.ky,P.ic,P.id,P.hN,E.iZ,E.j_,E.j0,E.ji,D.i9,D.ia,F.kp,F.kA,F.kC,F.kD,F.kE,F.kY,F.kZ,F.l_,F.kN,F.kB,F.jX,F.jW,F.jP,F.jQ,O.iE,O.iF,O.iG,O.iH,O.iI,O.iJ,O.iK,O.iL,T.jh,V.kX,V.iW,V.j9,V.j8,V.ja,V.kO,V.kP,V.kQ,V.kR,V.kS,V.kT,V.kU,V.kV])
q(H.f3,[H.eX,H.bP])
r(P.cN,P.U)
q(P.cN,[H.D,W.fz])
r(H.c1,H.V)
q(H.c1,[H.df,H.dh])
r(H.dg,H.df)
r(H.bz,H.dg)
r(H.di,H.dh)
r(H.cS,H.di)
q(H.cS,[H.es,H.et,H.eu,H.ev,H.ew,H.cT,H.c2])
r(H.ds,H.fL)
r(P.dn,P.cD)
r(P.k5,P.ko)
r(P.db,P.dj)
r(P.dw,P.cO)
r(P.cb,P.dw)
q(P.dU,[P.hP,P.i5])
r(P.dW,P.eZ)
q(P.dW,[P.hQ,P.ij,P.jJ,P.jG])
r(P.jF,P.i5)
q(P.R,[P.X,P.k])
q(P.ag,[P.c5,P.ea])
r(P.fE,P.bH)
q(W.e,[W.w,W.e4,W.bZ,W.at,W.dl,W.av,W.ac,W.dp,W.fu,W.cc,P.dP,P.b5])
q(W.w,[W.F,W.aA,W.cd])
q(W.F,[W.r,P.m])
q(W.r,[W.dK,W.dL,W.bO,W.bp,W.bq,W.b8,W.e6,W.bU,W.bW,W.eQ,W.be,W.cZ,W.f1,W.f2,W.c9])
r(W.hU,W.aO)
r(W.cu,W.fD)
q(W.ao,[W.hW,W.hX])
r(W.fG,W.fF)
r(W.cv,W.fG)
r(W.fI,W.fH)
r(W.e2,W.fI)
r(W.ai,W.bo)
r(W.fP,W.fO)
r(W.bS,W.fP)
r(W.fT,W.fS)
r(W.bv,W.fT)
r(W.aZ,W.j)
q(W.aZ,[W.by,W.aj,W.bD])
r(W.ep,W.fW)
r(W.eq,W.fX)
r(W.fZ,W.fY)
r(W.er,W.fZ)
r(W.h0,W.h_)
r(W.cU,W.h0)
r(W.h4,W.h3)
r(W.eF,W.h4)
r(W.eO,W.h6)
r(W.dm,W.dl)
r(W.eS,W.dm)
r(W.h9,W.h8)
r(W.eT,W.h9)
r(W.eY,W.he)
r(W.hl,W.hk)
r(W.f5,W.hl)
r(W.dq,W.dp)
r(W.f6,W.dq)
r(W.hn,W.hm)
r(W.fb,W.hn)
r(W.bg,W.aj)
r(W.hv,W.hu)
r(W.fC,W.hv)
r(W.d9,W.cw)
r(W.hx,W.hw)
r(W.fR,W.hx)
r(W.hz,W.hy)
r(W.de,W.hz)
r(W.hB,W.hA)
r(W.ha,W.hB)
r(W.hD,W.hC)
r(W.hh,W.hD)
r(W.fJ,W.fz)
r(W.fM,P.cY)
r(W.hj,W.dk)
r(P.kc,P.kb)
r(P.a8,P.h5)
r(P.fV,P.fU)
r(P.eh,P.fV)
r(P.h2,P.h1)
r(P.ez,P.h2)
r(P.c6,P.m)
r(P.hg,P.hf)
r(P.f_,P.hg)
r(P.hp,P.ho)
r(P.fc,P.hp)
r(P.dO,P.fA)
r(P.eA,P.b5)
r(P.hc,P.hb)
r(P.eV,P.hc)
q(K.e8,[K.aa,L.fd])
q(E.hR,[Z.dS,A.c7,T.f7])
q(D.Z,[D.aP,D.aQ,D.z,X.eI])
q(X.eI,[X.cM,X.c0,X.d0])
q(O.a6,[D.cH,U.bT,M.cq])
q(D.hS,[U.hT,U.a0])
r(U.cr,U.a0)
q(A.c7,[A.e_,A.el])
q(A.fe,[A.fg,A.jt,A.ju,A.jv,A.jr,A.ff,A.js,A.fh,A.fi,A.jx,A.fj,A.d3,A.fk,A.fl])
r(F.jb,F.ib)
r(F.jq,F.iq)
r(F.jS,F.jT)
r(F.iS,F.jU)
q(O.f4,[O.hZ,O.em])
q(O.en,[O.iy,O.iz,O.aU])
q(O.aU,[O.iC,O.iD])
r(T.je,T.f7)
r(T.jf,T.je)
q(X.jd,[X.hO,X.ig])
q(V.b6,[V.dY,V.e7,V.e9,V.eE])
s(H.ca,H.fo)
s(H.df,P.i)
s(H.dg,H.cB)
s(H.dh,P.i)
s(H.di,H.cB)
s(P.dd,P.i)
s(P.dw,P.hs)
s(W.fD,W.hV)
s(W.fF,P.i)
s(W.fG,W.M)
s(W.fH,P.i)
s(W.fI,W.M)
s(W.fO,P.i)
s(W.fP,W.M)
s(W.fS,P.i)
s(W.fT,W.M)
s(W.fW,P.U)
s(W.fX,P.U)
s(W.fY,P.i)
s(W.fZ,W.M)
s(W.h_,P.i)
s(W.h0,W.M)
s(W.h3,P.i)
s(W.h4,W.M)
s(W.h6,P.U)
s(W.dl,P.i)
s(W.dm,W.M)
s(W.h8,P.i)
s(W.h9,W.M)
s(W.he,P.U)
s(W.hk,P.i)
s(W.hl,W.M)
s(W.dp,P.i)
s(W.dq,W.M)
s(W.hm,P.i)
s(W.hn,W.M)
s(W.hu,P.i)
s(W.hv,W.M)
s(W.hw,P.i)
s(W.hx,W.M)
s(W.hy,P.i)
s(W.hz,W.M)
s(W.hA,P.i)
s(W.hB,W.M)
s(W.hC,P.i)
s(W.hD,W.M)
s(P.fU,P.i)
s(P.fV,W.M)
s(P.h1,P.i)
s(P.h2,W.M)
s(P.hf,P.i)
s(P.hg,W.M)
s(P.ho,P.i)
s(P.hp,W.M)
s(P.fA,P.U)
s(P.hb,P.i)
s(P.hc,W.M)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",X:"double",R:"num",y:"String",az:"bool",ap:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([Z*])","~(Z*)","~(aj*)","ap(@,@)","~(k*,h<bu*>*)","~(j*)","~(bD*)","X*()","~(~())","~()","~(by*)","~(k*,h<T*>*)","~(k*,h<a0*>*)","~(k*,h<ab*>*)","~(k*,h<bc*>*)","az(F,y,y,ce)","@(@)","ap(@)","ap(N?,N?)","bf(@,@)","~(bg*)","az*(h<T*>*)","k(@,@)","y(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.ph(v.typeUniverse,JSON.parse('{"aD":"ba","eD":"ba","bE":"ba","qU":"j","r3":"j","qW":"b5","qV":"e","ra":"e","rc":"e","qT":"m","r4":"m","qX":"r","r7":"r","r5":"w","r2":"w","rC":"ac","r0":"aZ","qY":"aA","rd":"aA","rb":"aj","r6":"bv","r9":"bz","r8":"V","ec":{"az":[]},"ba":{"ma":[],"aB":[]},"v":{"n":["1"],"l":["1"],"h":["1"]},"im":{"v":["1"],"n":["1"],"l":["1"],"h":["1"]},"bx":{"X":[],"R":[]},"cF":{"X":[],"k":[],"R":[]},"cE":{"X":[],"R":[]},"aR":{"y":[]},"eg":{"K":[]},"p":{"i":["k"],"n":["k"],"l":["k"],"h":["k"],"i.E":"k"},"l":{"h":["1"]},"cL":{"l":["1"],"h":["1"]},"aT":{"h":["2"],"h.E":"2"},"cx":{"aT":["1","2"],"l":["2"],"h":["2"],"h.E":"2"},"cP":{"cL":["2"],"l":["2"],"h":["2"],"h.E":"2"},"b_":{"h":["1"],"h.E":"1"},"ca":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cs":{"H":["1","2"]},"ct":{"H":["1","2"]},"ex":{"K":[]},"ee":{"K":[]},"fn":{"K":[]},"br":{"aB":[]},"f3":{"aB":[]},"eX":{"aB":[]},"bP":{"aB":[]},"eP":{"K":[]},"D":{"U":["1","2"],"H":["1","2"]},"cI":{"l":["1"],"h":["1"],"h.E":"1"},"ed":{"mr":[]},"c1":{"A":["1"],"V":[]},"bz":{"i":["X"],"A":["X"],"n":["X"],"V":[],"l":["X"],"h":["X"],"i.E":"X"},"cS":{"i":["k"],"A":["k"],"n":["k"],"V":[],"l":["k"],"h":["k"]},"es":{"i":["k"],"A":["k"],"n":["k"],"V":[],"l":["k"],"h":["k"],"i.E":"k"},"et":{"i":["k"],"A":["k"],"n":["k"],"V":[],"l":["k"],"h":["k"],"i.E":"k"},"eu":{"i":["k"],"A":["k"],"n":["k"],"V":[],"l":["k"],"h":["k"],"i.E":"k"},"ev":{"i":["k"],"A":["k"],"n":["k"],"V":[],"l":["k"],"h":["k"],"i.E":"k"},"ew":{"i":["k"],"A":["k"],"n":["k"],"V":[],"l":["k"],"h":["k"],"i.E":"k"},"cT":{"i":["k"],"A":["k"],"n":["k"],"V":[],"l":["k"],"h":["k"],"i.E":"k"},"c2":{"i":["k"],"bf":[],"A":["k"],"n":["k"],"V":[],"l":["k"],"h":["k"],"i.E":"k"},"fL":{"K":[]},"ds":{"K":[]},"dr":{"d_":[]},"dn":{"h":["1"],"h.E":"1"},"db":{"dj":["1"],"l":["1"],"h":["1"]},"cD":{"h":["1"]},"cK":{"i":["1"],"n":["1"],"l":["1"],"h":["1"]},"cN":{"U":["1","2"],"H":["1","2"]},"U":{"H":["1","2"]},"cO":{"H":["1","2"]},"cb":{"H":["1","2"]},"dj":{"l":["1"],"h":["1"]},"X":{"R":[]},"dM":{"K":[]},"ey":{"K":[]},"ag":{"K":[]},"c5":{"K":[]},"ea":{"K":[]},"fp":{"K":[]},"fm":{"K":[]},"c8":{"K":[]},"dV":{"K":[]},"eB":{"K":[]},"cX":{"K":[]},"dX":{"K":[]},"k":{"R":[]},"n":{"l":["1"],"h":["1"]},"bH":{"fq":[]},"h7":{"fq":[]},"fE":{"fq":[]},"r":{"F":[],"w":[],"e":[]},"dK":{"F":[],"w":[],"e":[]},"dL":{"F":[],"w":[],"e":[]},"bO":{"F":[],"w":[],"e":[]},"bp":{"F":[],"w":[],"e":[]},"bq":{"F":[],"w":[],"e":[]},"aA":{"w":[],"e":[]},"b8":{"F":[],"w":[],"e":[]},"cv":{"i":["a8<R>"],"n":["a8<R>"],"A":["a8<R>"],"l":["a8<R>"],"h":["a8<R>"],"i.E":"a8<R>"},"cw":{"a8":["R"]},"e2":{"i":["y"],"n":["y"],"A":["y"],"l":["y"],"h":["y"],"i.E":"y"},"fB":{"i":["F"],"n":["F"],"l":["F"],"h":["F"],"i.E":"F"},"F":{"w":[],"e":[]},"ai":{"bo":[]},"bS":{"i":["ai"],"n":["ai"],"A":["ai"],"l":["ai"],"h":["ai"],"i.E":"ai"},"e4":{"e":[]},"e6":{"F":[],"w":[],"e":[]},"bv":{"i":["w"],"n":["w"],"A":["w"],"l":["w"],"h":["w"],"i.E":"w"},"bU":{"F":[],"w":[],"e":[]},"bW":{"F":[],"w":[],"e":[]},"by":{"j":[]},"bZ":{"e":[]},"ep":{"U":["y","@"],"H":["y","@"]},"eq":{"U":["y","@"],"H":["y","@"]},"er":{"i":["aE"],"n":["aE"],"A":["aE"],"l":["aE"],"h":["aE"],"i.E":"aE"},"aj":{"j":[]},"a1":{"i":["w"],"n":["w"],"l":["w"],"h":["w"],"i.E":"w"},"w":{"e":[]},"cU":{"i":["w"],"n":["w"],"A":["w"],"l":["w"],"h":["w"],"i.E":"w"},"eF":{"i":["aF"],"n":["aF"],"A":["aF"],"l":["aF"],"h":["aF"],"i.E":"aF"},"eO":{"U":["y","@"],"H":["y","@"]},"eQ":{"F":[],"w":[],"e":[]},"at":{"e":[]},"eS":{"i":["at"],"n":["at"],"A":["at"],"e":[],"l":["at"],"h":["at"],"i.E":"at"},"eT":{"i":["aG"],"n":["aG"],"A":["aG"],"l":["aG"],"h":["aG"],"i.E":"aG"},"eY":{"U":["y","y"],"H":["y","y"]},"be":{"F":[],"w":[],"e":[]},"cZ":{"F":[],"w":[],"e":[]},"f1":{"F":[],"w":[],"e":[]},"f2":{"F":[],"w":[],"e":[]},"c9":{"F":[],"w":[],"e":[]},"av":{"e":[]},"ac":{"e":[]},"f5":{"i":["ac"],"n":["ac"],"A":["ac"],"l":["ac"],"h":["ac"],"i.E":"ac"},"f6":{"i":["av"],"n":["av"],"A":["av"],"e":[],"l":["av"],"h":["av"],"i.E":"av"},"bD":{"j":[]},"fb":{"i":["aI"],"n":["aI"],"A":["aI"],"l":["aI"],"h":["aI"],"i.E":"aI"},"aZ":{"j":[]},"fu":{"e":[]},"bg":{"aj":[],"j":[]},"cc":{"e":[]},"cd":{"w":[],"e":[]},"fC":{"i":["J"],"n":["J"],"A":["J"],"l":["J"],"h":["J"],"i.E":"J"},"d9":{"a8":["R"]},"fR":{"i":["aC?"],"n":["aC?"],"A":["aC?"],"l":["aC?"],"h":["aC?"],"i.E":"aC?"},"de":{"i":["w"],"n":["w"],"A":["w"],"l":["w"],"h":["w"],"i.E":"w"},"ha":{"i":["aH"],"n":["aH"],"A":["aH"],"l":["aH"],"h":["aH"],"i.E":"aH"},"hh":{"i":["au"],"n":["au"],"A":["au"],"l":["au"],"h":["au"],"i.E":"au"},"fz":{"U":["y","y"],"H":["y","y"]},"fJ":{"U":["y","y"],"H":["y","y"]},"ce":{"ak":[]},"cV":{"ak":[]},"dk":{"ak":[]},"hj":{"ak":[]},"hi":{"ak":[]},"dt":{"bw":[]},"e5":{"i":["F"],"n":["F"],"l":["F"],"h":["F"],"i.E":"F"},"a8":{"h5":["1"]},"eh":{"i":["aS"],"n":["aS"],"l":["aS"],"h":["aS"],"i.E":"aS"},"ez":{"i":["aW"],"n":["aW"],"l":["aW"],"h":["aW"],"i.E":"aW"},"c6":{"m":[],"F":[],"w":[],"e":[]},"f_":{"i":["y"],"n":["y"],"l":["y"],"h":["y"],"i.E":"y"},"m":{"F":[],"w":[],"e":[]},"fc":{"i":["aX"],"n":["aX"],"l":["aX"],"h":["aX"],"i.E":"aX"},"bf":{"n":["k"],"l":["k"],"h":["k"]},"dO":{"U":["y","@"],"H":["y","@"]},"dP":{"e":[]},"b5":{"e":[]},"eA":{"e":[]},"eV":{"i":["H<@,@>"],"n":["H<@,@>"],"l":["H<@,@>"],"h":["H<@,@>"],"i.E":"H<@,@>"},"a6":{"h":["1*"],"a6.T":"1"},"aP":{"Z":[]},"aQ":{"Z":[]},"z":{"Z":[]},"cM":{"Z":[]},"c0":{"Z":[]},"eI":{"Z":[]},"d0":{"Z":[]},"dQ":{"T":[]},"e0":{"T":[]},"cH":{"a6":["T*"],"h":["T*"],"a6.T":"T*"},"eH":{"T":[]},"bC":{"T":[]},"cr":{"a0":[]},"bT":{"a6":["a0*"],"a0":[],"h":["a0*"],"a6.T":"a0*"},"bX":{"a0":[]},"d6":{"a0":[]},"cq":{"a6":["ab*"],"ab":[],"h":["ab*"],"a6.T":"ab*"},"cz":{"ab":[]},"e_":{"c7":[]},"el":{"c7":[]},"dY":{"b6":[]},"e7":{"b6":[]},"e9":{"b6":[]},"eE":{"b6":[]}}'))
H.pg(v.typeUniverse,JSON.parse('{"a2":1,"l":1,"bb":1,"ek":2,"fx":1,"cB":1,"fo":1,"ca":1,"cs":2,"ej":1,"c1":1,"bG":1,"cY":1,"eZ":2,"dc":1,"cD":1,"cK":1,"cN":2,"hs":2,"cO":2,"dd":1,"dw":2,"dU":2,"dW":2,"eb":1,"fM":1,"M":1,"cC":1,"aP":1,"aQ":1,"z":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",s:"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"}
var t=(function rtii(){var s=H.lM
return{D:s("bO"),d:s("bo"),Y:s("bp"),F:s("l<@>"),h:s("F"),C:s("K"),G:s("j"),c8:s("ai"),bX:s("bS"),Z:s("aB"),v:s("bw"),fS:s("bU"),gk:s("bW"),Q:s("v<ak>"),s:s("v<y>"),gn:s("v<@>"),t:s("v<k>"),x:s("v<dN*>"),bb:s("v<dQ*>"),am:s("v<dR*>"),g0:s("v<dS*>"),b7:s("v<b6*>"),cP:s("v<e0*>"),M:s("v<e1*>"),k:s("v<b8*>"),b:s("v<e3*>"),aZ:s("v<bV*>"),L:s("v<ei*>"),u:s("v<n<b8*>*>"),B:s("v<ix*>"),h8:s("v<bc*>"),eb:s("v<eH*>"),cS:s("v<al*>"),d1:s("v<eJ*>"),o:s("v<eG*>"),f2:s("v<ab*>"),du:s("v<bC*>"),cz:s("v<eU*>"),eG:s("v<cY<N*>*>"),i:s("v<y*>"),fG:s("v<f4*>"),bw:s("v<f7*>"),br:s("v<fd*>"),fj:s("v<fe*>"),d6:s("v<d1*>"),dv:s("v<d2*>"),hg:s("v<d3*>"),by:s("v<d4*>"),fF:s("v<d5*>"),j:s("v<fs*>"),m:s("v<X*>"),V:s("v<k*>"),f:s("v<~(Z*)*>"),T:s("cG"),eH:s("ma"),g:s("aD"),aU:s("A<@>"),h9:s("D<y*,c7*>"),cn:s("D<y*,eW*>"),dO:s("D<y*,y*>"),dL:s("D<y*,fa*>"),en:s("D<k*,n<d1*>*>"),af:s("D<k*,n<d2*>*>"),gr:s("D<k*,n<d4*>*>"),gb:s("D<k*,n<d5*>*>"),J:s("D<k*,fg*>"),E:s("D<k*,az*>"),a:s("D<k*,k*>"),aH:s("n<@>"),eO:s("H<@,@>"),eM:s("cP<y*,y>"),bK:s("bZ"),bZ:s("cR"),dD:s("V"),bm:s("c2"),P:s("ap"),K:s("N"),I:s("a8<R>"),fv:s("mr"),ew:s("c6"),N:s("y"),g7:s("m"),bY:s("be"),aW:s("c9"),aF:s("d_"),gc:s("bf"),ak:s("bE"),U:s("cb<y,y>"),R:s("fq"),gH:s("cd"),ac:s("a1"),cJ:s("az"),gR:s("X"),z:s("@"),S:s("k"),fr:s("bq*"),l:s("bu*"),gj:s("T*"),dn:s("cM*"),hc:s("bc*"),c:s("c0*"),ah:s("a0*"),A:s("0&*"),_:s("N*"),bn:s("ab*"),X:s("y*"),eB:s("f9*"),eP:s("d0*"),n:s("ff*"),r:s("fh*"),y:s("fi*"),O:s("fj*"),q:s("d3*"),w:s("fk*"),p:s("fl*"),e:s("k*"),dm:s("~(Z*)*"),bG:s("m9<ap>?"),W:s("N?"),H:s("R")}})();(function constants(){var s=hunkHelpers.makeConstList
C.q=W.bp.prototype
C.i=W.bq.prototype
C.S=W.b8.prototype
C.V=J.a.prototype
C.b=J.v.prototype
C.W=J.cE.prototype
C.c=J.cF.prototype
C.j=J.cG.prototype
C.d=J.bx.prototype
C.a=J.aR.prototype
C.X=J.aD.prototype
C.C=J.eD.prototype
C.D=P.eN.prototype
C.E=W.cZ.prototype
C.p=J.bE.prototype
C.F=W.bg.prototype
C.G=W.cc.prototype
C.H=new E.bQ("Browser.chrome")
C.r=new E.bQ("Browser.firefox")
C.t=new E.bQ("Browser.edge")
C.I=new E.bQ("Browser.other")
C.a6=new P.hQ()
C.J=new P.hP()
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
C.e=new P.jF()
C.R=new P.jJ()
C.f=new P.k5()
C.n=new P.bt(0)
C.T=new P.bt(5e6)
C.U=new P.ik("element",!1,!1,!1)
C.k=H.d(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.Y=H.d(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.i)
C.l=H.d(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.m=H.d(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.Z=H.d(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.i)
C.w=H.d(s([]),t.i)
C.a_=H.d(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.x=H.d(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.d(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.y=H.d(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.z=H.d(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.A=H.d(s(["bind","if","ref","repeat","syntax"]),t.i)
C.o=H.d(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.i)
C.a0=new H.ct(0,{},C.w,H.lM("ct<y*,y*>"))
C.a1=new E.c3("OperatingSystem.windows")
C.B=new E.c3("OperatingSystem.mac")
C.a2=new E.c3("OperatingSystem.linux")
C.a3=new E.c3("OperatingSystem.other")
C.a4=new P.jG(!1)
C.a5=new P.cf(null,2)})();(function staticFields(){$.mS=null
$.aN=0
$.m1=null
$.m0=null
$.nj=null
$.ne=null
$.np=null
$.kF=null
$.kL=null
$.lO=null
$.ci=null
$.dB=null
$.dC=null
$.lI=!1
$.aJ=C.f
$.ad=H.d([],H.lM("v<N>"))
$.b9=null
$.l8=null
$.m7=null
$.m6=null
$.da=P.lh(t.N,t.Z)
$.i6=null
$.mf=null
$.mj=null
$.aq=null
$.mt=null
$.mH=null
$.mK=null
$.mJ=null
$.jK=null
$.jL=null
$.jM=null
$.mI=null
$.mN=null
$.mi=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"r1","nw",function(){return H.qB("_$dart_dartClosure")})
s($,"re","nx",function(){return H.aY(H.jp({
toString:function(){return"$receiver$"}}))})
s($,"rf","ny",function(){return H.aY(H.jp({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"rg","nz",function(){return H.aY(H.jp(null))})
s($,"rh","nA",function(){return H.aY(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"rk","nD",function(){return H.aY(H.jp(void 0))})
s($,"rl","nE",function(){return H.aY(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"rj","nC",function(){return H.aY(H.mA(null))})
s($,"ri","nB",function(){return H.aY(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"rn","nG",function(){return H.aY(H.mA(void 0))})
s($,"rm","nF",function(){return H.aY(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"rD","lT",function(){return P.oU()})
s($,"ro","nH",function(){return new P.jH().$0()})
s($,"rp","nI",function(){return new P.jI().$0()})
s($,"rE","nM",function(){return new Int8Array(H.ch(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rH","nO",function(){return P.oE("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rX","nP",function(){return P.pC()})
s($,"rF","nN",function(){return P.mc(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rw","nL",function(){return Z.ax(0)})
s($,"rq","nJ",function(){return Z.ax(511)})
s($,"ry","aL",function(){return Z.ax(1)})
s($,"rx","bn",function(){return Z.ax(2)})
s($,"rs","bm",function(){return Z.ax(4)})
s($,"rz","bL",function(){return Z.ax(8)})
s($,"rA","bM",function(){return Z.ax(16)})
s($,"rt","dH",function(){return Z.ax(32)})
s($,"ru","dI",function(){return Z.ax(64)})
s($,"rv","nK",function(){return Z.ax(96)})
s($,"rB","cn",function(){return Z.ax(128)})
s($,"rr","bl",function(){return Z.ax(256)})
s($,"r_","nv",function(){return new V.i7()})
s($,"qZ","C",function(){return $.nv()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cR,DataView:H.V,ArrayBufferView:H.V,Float32Array:H.bz,Float64Array:H.bz,Int16Array:H.es,Int32Array:H.et,Int8Array:H.eu,Uint16Array:H.ev,Uint32Array:H.ew,Uint8ClampedArray:H.cT,CanvasPixelArray:H.cT,Uint8Array:H.c2,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.hJ,HTMLAnchorElement:W.dK,HTMLAreaElement:W.dL,HTMLBaseElement:W.bO,Blob:W.bo,HTMLBodyElement:W.bp,HTMLCanvasElement:W.bq,CDATASection:W.aA,CharacterData:W.aA,Comment:W.aA,ProcessingInstruction:W.aA,Text:W.aA,CSSPerspective:W.hU,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.cu,MSStyleCSSProperties:W.cu,CSS2Properties:W.cu,CSSImageValue:W.ao,CSSKeywordValue:W.ao,CSSNumericValue:W.ao,CSSPositionValue:W.ao,CSSResourceValue:W.ao,CSSUnitValue:W.ao,CSSURLImageValue:W.ao,CSSStyleValue:W.ao,CSSMatrixComponent:W.aO,CSSRotation:W.aO,CSSScale:W.aO,CSSSkew:W.aO,CSSTranslation:W.aO,CSSTransformComponent:W.aO,CSSTransformValue:W.hW,CSSUnparsedValue:W.hX,DataTransferItemList:W.hY,HTMLDivElement:W.b8,DOMException:W.i_,ClientRectList:W.cv,DOMRectList:W.cv,DOMRectReadOnly:W.cw,DOMStringList:W.e2,DOMTokenList:W.i0,Element:W.F,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ai,FileList:W.bS,FileWriter:W.e4,HTMLFormElement:W.e6,Gamepad:W.aC,History:W.ii,HTMLCollection:W.bv,HTMLFormControlsCollection:W.bv,HTMLOptionsCollection:W.bv,ImageData:W.bw,HTMLImageElement:W.bU,HTMLInputElement:W.bW,KeyboardEvent:W.by,Location:W.iu,MediaList:W.iM,MessagePort:W.bZ,MIDIInputMap:W.ep,MIDIOutputMap:W.eq,MimeType:W.aE,MimeTypeArray:W.er,PointerEvent:W.aj,MouseEvent:W.aj,DragEvent:W.aj,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cU,RadioNodeList:W.cU,Plugin:W.aF,PluginArray:W.eF,RTCStatsReport:W.eO,HTMLSelectElement:W.eQ,SourceBuffer:W.at,SourceBufferList:W.eS,SpeechGrammar:W.aG,SpeechGrammarList:W.eT,SpeechRecognitionResult:W.aH,Storage:W.eY,CSSStyleSheet:W.au,StyleSheet:W.au,HTMLTableCellElement:W.be,HTMLTableDataCellElement:W.be,HTMLTableHeaderCellElement:W.be,HTMLTableElement:W.cZ,HTMLTableRowElement:W.f1,HTMLTableSectionElement:W.f2,HTMLTemplateElement:W.c9,TextTrack:W.av,TextTrackCue:W.ac,VTTCue:W.ac,TextTrackCueList:W.f5,TextTrackList:W.f6,TimeRanges:W.jj,Touch:W.aI,TouchEvent:W.bD,TouchList:W.fb,TrackDefaultList:W.jn,CompositionEvent:W.aZ,FocusEvent:W.aZ,TextEvent:W.aZ,UIEvent:W.aZ,URL:W.jE,VideoTrackList:W.fu,WheelEvent:W.bg,Window:W.cc,DOMWindow:W.cc,Attr:W.cd,CSSRuleList:W.fC,ClientRect:W.d9,DOMRect:W.d9,GamepadList:W.fR,NamedNodeMap:W.de,MozNamedAttrMap:W.de,SpeechRecognitionResultList:W.ha,StyleSheetList:W.hh,SVGLength:P.aS,SVGLengthList:P.eh,SVGNumber:P.aW,SVGNumberList:P.ez,SVGPointList:P.iU,SVGScriptElement:P.c6,SVGStringList:P.f_,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aX,SVGTransformList:P.fc,AudioBuffer:P.hM,AudioParamMap:P.dO,AudioTrackList:P.dP,AudioContext:P.b5,webkitAudioContext:P.b5,BaseAudioContext:P.b5,OfflineAudioContext:P.eA,WebGL2RenderingContext:P.eN,SQLResultSetRowList:P.eV})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.bz.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
W.dl.$nativeSuperclassTag="EventTarget"
W.dm.$nativeSuperclassTag="EventTarget"
W.dp.$nativeSuperclassTag="EventTarget"
W.dq.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(V.nn,[])
else V.nn([])})})()
//# sourceMappingURL=test.dart.js.map
