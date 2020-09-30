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
a[c]=function(){a[c]=function(){H.qJ(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lA(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={l6:function l6(){},
l8:function(a){return new H.ec(a)},
ky:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
oi:function(a,b,c,d){if(t.G.b(a))return new H.cq(a,b,c.J("@<0>").aZ(d).J("cq<1,2>"))
return new H.aO(a,b,c.J("@<0>").aZ(d).J("aO<1,2>"))},
ic:function(){return new P.c2("No element")},
o8:function(){return new P.c2("Too many elements")},
oE:function(a,b){var s=J.aI(a)
if(typeof s!=="number")return s.X()
H.eM(a,0,s-1,b)},
eM:function(a,b,c,d){if(c-b<=32)H.oD(a,b,c,d)
else H.oC(a,b,c,d)},
oD:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.aY(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a0()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
oC:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a1(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a1(a6+a7,2),d=e-h,c=e+h,b=J.aY(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
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
if(typeof n!=="number")return n.aa()
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
if(typeof j!=="number")return j.aa()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a0()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a0()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.aa()
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
if(typeof n!=="number")return n.aa()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}H.eM(a5,r,q,a8)}else H.eM(a5,r,q,a8)},
ec:function ec(a){this.a=a},
p:function p(a){this.a=a},
k:function k(){},
cD:function cD(){},
b9:function b9(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aO:function aO(a,b,c){this.a=a
this.b=b
this.$ti=c},
cq:function cq(a,b,c){this.a=a
this.b=b
this.$ti=c},
eg:function eg(a,b){this.a=null
this.b=a
this.c=b},
cH:function cH(a,b,c){this.a=a
this.b=b
this.$ti=c},
aW:function aW(a,b,c){this.a=a
this.b=b
this.$ti=c},
fs:function fs(a,b){this.a=a
this.b=b},
ct:function ct(){},
fk:function fk(){},
c4:function c4(){},
o0:function(){throw H.b(P.A("Cannot modify unmodifiable Map"))},
nm:function(a){var s,r=H.nl(a)
if(r!=null)return r
s="minified:"+a
return s},
ne:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a5(a)
if(typeof s!="string")throw H.b(H.av(a))
return s},
cQ:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mf:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.c(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.b(P.a4(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.C(q,o)|32)>r)return n}return parseInt(a,b)},
eF:function(a){return H.om(a)},
om:function(a){var s,r,q
if(a instanceof P.M)return H.al(H.bH(a),null)
if(J.dA(a)===C.U||t.ak.b(a)){s=C.t(a)
if(H.me(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.me(q))return q}}return H.al(H.bH(a),null)},
me:function(a){var s=a!=="Object"&&a!==""
return s},
on:function(){if(!!self.location)return self.location.href
return null},
md:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
ov:function(a){var s,r,q,p=H.d([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.cc(q))throw H.b(H.av(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aQ(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.av(q))}return H.md(p)},
mg:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cc(q))throw H.b(H.av(q))
if(q<0)throw H.b(H.av(q))
if(q>65535)return H.ov(a)}return H.md(a)},
ow:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.iw()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ao:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aQ(s,10))>>>0,56320|s&1023)}}throw H.b(P.a4(a,0,1114111,null,null))},
c_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ou:function(a){var s=H.c_(a).getFullYear()+0
return s},
os:function(a){var s=H.c_(a).getMonth()+1
return s},
oo:function(a){var s=H.c_(a).getDate()+0
return s},
op:function(a){var s=H.c_(a).getHours()+0
return s},
or:function(a){var s=H.c_(a).getMinutes()+0
return s},
ot:function(a){var s=H.c_(a).getSeconds()+0
return s},
oq:function(a){var s=H.c_(a).getMilliseconds()+0
return s},
y:function(a){throw H.b(H.av(a))},
c:function(a,b){if(a==null)J.aI(a)
throw H.b(H.cg(a,b))},
cg:function(a,b){var s,r,q="index"
if(!H.cc(b))return new P.ae(!0,b,q,null)
s=J.aI(a)
if(!(b<0)){if(typeof s!=="number")return H.y(s)
r=b>=s}else r=!0
if(r)return P.N(b,a,q,null,s)
return P.eG(b,q)},
qq:function(a,b,c){if(a>c)return P.a4(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a4(b,a,c,"end",null)
return new P.ae(!0,b,"end",null)},
av:function(a){return new P.ae(!0,a,null,null)},
qk:function(a){if(typeof a!="number")throw H.b(H.av(a))
return a},
b:function(a){var s,r
if(a==null)a=new P.et()
s=new Error()
s.dartException=a
r=H.qK
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qK:function(){return J.a5(this.dartException)},
q:function(a){throw H.b(a)},
o:function(a){throw H.b(P.b3(a))},
aU:function(a){var s,r,q,p,o,n
a=H.ni(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jg(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
jh:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mt:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
m9:function(a,b){return new H.es(a,b==null?null:b.method)},
l7:function(a,b){var s=b==null,r=s?null:b.method
return new H.ea(a,r,s?null:b.receiver)},
ac:function(a){if(a==null)return new H.iL(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bI(a,a.dartException)
return H.qg(a)},
bI:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qg:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aQ(r,16)&8191)===10)switch(q){case 438:return H.bI(a,H.l7(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bI(a,H.m9(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.np()
o=$.nq()
n=$.nr()
m=$.ns()
l=$.nv()
k=$.nw()
j=$.nu()
$.nt()
i=$.ny()
h=$.nx()
g=p.af(s)
if(g!=null)return H.bI(a,H.l7(s,g))
else{g=o.af(s)
if(g!=null){g.method="call"
return H.bI(a,H.l7(s,g))}else{g=n.af(s)
if(g==null){g=m.af(s)
if(g==null){g=l.af(s)
if(g==null){g=k.af(s)
if(g==null){g=j.af(s)
if(g==null){g=m.af(s)
if(g==null){g=i.af(s)
if(g==null){g=h.af(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bI(a,H.m9(s,g))}}return H.bI(a,new H.fj(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cT()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bI(a,new P.ae(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cT()
return a},
lD:function(a){var s
if(a==null)return new H.h8(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.h8(a)},
qs:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
qA:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.u("Unsupported number of arguments for wrapped closure"))},
cf:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qA)
a.$identity=s
return s},
o_:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.eT().constructor.prototype):Object.create(new H.bM(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aJ
if(typeof r!=="number")return r.v()
$.aJ=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lV(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nW(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lV(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nW:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nc,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.nU:H.nT
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
nX:function(a,b,c,d){var s=H.lU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lV:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nZ(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nX(r,!p,s,b)
if(r===0){p=$.aJ
if(typeof p!=="number")return p.v()
$.aJ=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.kY())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aJ
if(typeof p!=="number")return p.v()
$.aJ=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.kY())+"."+H.f(s)+"("+m+");}")()},
nY:function(a,b,c,d){var s=H.lU,r=H.nV
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
nZ:function(a,b){var s,r,q,p,o,n,m=H.kY(),l=$.lS
if(l==null)l=$.lS=H.lR("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nY(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aJ
if(typeof o!=="number")return o.v()
$.aJ=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aJ
if(typeof o!=="number")return o.v()
$.aJ=o+1
return new Function(p+o+"}")()},
lA:function(a,b,c,d,e,f,g){return H.o_(a,b,c,d,!!e,!!f,g)},
nT:function(a,b){return H.hm(v.typeUniverse,H.bH(a.a),b)},
nU:function(a,b){return H.hm(v.typeUniverse,H.bH(a.c),b)},
lU:function(a){return a.a},
nV:function(a){return a.c},
kY:function(){var s=$.lT
return s==null?$.lT=H.lR("self"):s},
lR:function(a){var s,r,q,p=new H.bM("self","target","receiver","name"),o=J.l5(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.bK("Field name "+a+" not found."))},
qJ:function(a){throw H.b(new P.dU(a))},
qu:function(a){return v.getIsolateTag(a)},
rQ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qD:function(a){var s,r,q,p,o,n=$.nb.$1(a),m=$.kx[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kD[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.n5.$2(a,n)
if(q!=null){m=$.kx[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kD[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kO(s)
$.kx[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kD[n]=s
return s}if(p==="-"){o=H.kO(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ng(a,s)
if(p==="*")throw H.b(P.jq(n))
if(v.leafTags[n]===true){o=H.kO(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ng(a,s)},
ng:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lF(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kO:function(a){return J.lF(a,!1,null,!!a.$iz)},
qE:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kO(s)
else return J.lF(s,c,null,null)},
qy:function(){if(!0===$.lE)return
$.lE=!0
H.qz()},
qz:function(){var s,r,q,p,o,n,m,l
$.kx=Object.create(null)
$.kD=Object.create(null)
H.qx()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nh.$1(o)
if(n!=null){m=H.qE(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qx:function(){var s,r,q,p,o,n,m=C.J()
m=H.ce(C.K,H.ce(C.L,H.ce(C.u,H.ce(C.u,H.ce(C.M,H.ce(C.N,H.ce(C.O(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nb=new H.kz(p)
$.n5=new H.kA(o)
$.nh=new H.kB(n)},
ce:function(a,b){return a(b)||b},
oc:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.a2("Illegal RegExp pattern ("+String(n)+")",a,null))},
nj:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qr:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ni:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lI:function(a,b,c){var s=H.qI(a,b,c)
return s},
qI:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ni(b),'g'),H.qr(c))},
cl:function cl(){},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jg:function jg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
es:function es(a,b){this.a=a
this.b=b},
ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},
fj:function fj(a){this.a=a},
iL:function iL(a){this.a=a},
h8:function h8(a){this.a=a
this.b=null},
bs:function bs(){},
f_:function f_(){},
eT:function eT(){},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(a){this.a=a},
C:function C(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ie:function ie(a){this.a=a},
ii:function ii(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cA:function cA(a,b){this.a=a
this.$ti=b},
ef:function ef(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
e9:function e9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cb:function(a){return a},
aX:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.cg(b,a))},
pu:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.qq(a,b,c))
return b},
cL:function cL(){},
X:function X(){},
bX:function bX(){},
bA:function bA(){},
cM:function cM(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
cN:function cN(){},
bY:function bY(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
oA:function(a,b){var s=b.c
return s==null?b.c=H.lo(a,b.z,!0):s},
mn:function(a,b){var s=b.c
return s==null?b.c=H.dq(a,"m1",[b.z]):s},
mo:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mo(a.z)
return s===11||s===12},
oz:function(a){return a.cy},
lC:function(a){return H.lp(v.typeUniverse,a,!1)},
bi:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bi(a,s,a0,a1)
if(r===s)return b
return H.mR(a,r,!0)
case 7:s=b.z
r=H.bi(a,s,a0,a1)
if(r===s)return b
return H.lo(a,r,!0)
case 8:s=b.z
r=H.bi(a,s,a0,a1)
if(r===s)return b
return H.mQ(a,r,!0)
case 9:q=b.Q
p=H.dz(a,q,a0,a1)
if(p===q)return b
return H.dq(a,b.z,p)
case 10:o=b.z
n=H.bi(a,o,a0,a1)
m=b.Q
l=H.dz(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lm(a,n,l)
case 11:k=b.z
j=H.bi(a,k,a0,a1)
i=b.Q
h=H.qd(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mP(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dz(a,g,a0,a1)
o=b.z
n=H.bi(a,o,a0,a1)
if(f===g&&n===o)return b
return H.ln(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.hF("Attempted to substitute unexpected RTI kind "+c))}},
dz:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bi(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qe:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bi(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
qd:function(a,b,c,d){var s,r=b.a,q=H.dz(a,r,c,d),p=b.b,o=H.dz(a,p,c,d),n=b.c,m=H.qe(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fL()
s.a=q
s.b=o
s.c=m
return s},
d:function(a,b){a[v.arrayRti]=b
return a},
ql:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.nc(s)
return a.$S()}return null},
nd:function(a,b){var s
if(H.mo(b))if(a instanceof H.bs){s=H.ql(a)
if(s!=null)return s}return H.bH(a)},
bH:function(a){var s
if(a instanceof P.M){s=a.$ti
return s!=null?s:H.lw(a)}if(Array.isArray(a))return H.lu(a)
return H.lw(J.dA(a))},
lu:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dw:function(a){var s=a.$ti
return s!=null?s:H.lw(a)},
lw:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pB(a,s)},
pB:function(a,b){var s=a instanceof H.bs?a.__proto__.__proto__.constructor:b,r=H.pc(v.typeUniverse,s.name)
b.$ccache=r
return r},
nc:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lp(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pA:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dv(q,a,H.pF)
if(!H.aZ(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dv(q,a,H.pI)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cc
else if(s===t.gR||s===t.H)r=H.pE
else if(s===t.N)r=H.pG
else r=s===t.cJ?H.lx:null
if(r!=null)return H.dv(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.qB)){q.r="$i"+p
return H.dv(q,a,H.pH)}}else if(p===7)return H.dv(q,a,H.py)
return H.dv(q,a,H.pw)},
dv:function(a,b,c){a.b=c
return a.b(b)},
pz:function(a){var s,r,q=this
if(!H.aZ(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.pt
else if(q===t.K)r=H.ps
else r=H.px
q.a=r
return q.a(a)},
q6:function(a){var s,r=a.y
if(!H.aZ(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
pw:function(a){var s=this
if(a==null)return H.q6(s)
return H.Y(v.typeUniverse,H.nd(a,s),null,s,null)},
py:function(a){if(a==null)return!0
return this.z.b(a)},
pH:function(a){var s=this,r=s.r
if(a instanceof P.M)return!!a[r]
return!!J.dA(a)[r]},
rO:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.n_(a,s)},
px:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.n_(a,s)},
n_:function(a,b){throw H.b(H.p2(H.mH(a,H.nd(a,b),H.al(b,null))))},
mH:function(a,b,c){var s=P.i1(a),r=H.al(b==null?H.bH(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
p2:function(a){return new H.dn("TypeError: "+a)},
a7:function(a,b){return new H.dn("TypeError: "+H.mH(a,null,b))},
pF:function(a){return a!=null},
ps:function(a){return a},
pI:function(a){return!0},
pt:function(a){return a},
lx:function(a){return!0===a||!1===a},
rA:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a7(a,"bool"))},
rC:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a7(a,"bool"))},
rB:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a7(a,"bool?"))},
rD:function(a){if(typeof a=="number")return a
throw H.b(H.a7(a,"double"))},
rF:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a7(a,"double"))},
rE:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a7(a,"double?"))},
cc:function(a){return typeof a=="number"&&Math.floor(a)===a},
rG:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a7(a,"int"))},
rI:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a7(a,"int"))},
rH:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a7(a,"int?"))},
pE:function(a){return typeof a=="number"},
rJ:function(a){if(typeof a=="number")return a
throw H.b(H.a7(a,"num"))},
rL:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a7(a,"num"))},
rK:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a7(a,"num?"))},
pG:function(a){return typeof a=="string"},
rM:function(a){if(typeof a=="string")return a
throw H.b(H.a7(a,"String"))},
lv:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a7(a,"String"))},
rN:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a7(a,"String?"))},
q9:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.v(r,H.al(a[q],b))
return s},
n0:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
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
a2+=J.lL(H.al(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
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
return J.lL(q===11||q===12?C.a.v("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.al(a.z,b))+">"
if(l===9){p=H.qf(a.z)
o=a.Q
return o.length!==0?p+("<"+H.q9(o,b)+">"):p}if(l===11)return H.n0(a,b,null)
if(l===12)return H.n0(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.c(b,n)
return b[n]}return"?"},
qf:function(a){var s,r=H.nl(a)
if(r!=null)return r
s="minified:"+a
return s},
mS:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pc:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lp(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dr(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dq(a,b,q)
n[b]=o
return o}else return m},
pa:function(a,b){return H.mZ(a.tR,b)},
p9:function(a,b){return H.mZ(a.eT,b)},
lp:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mN(H.mL(a,null,b,c))
r.set(b,s)
return s},
hm:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mN(H.mL(a,b,c,!0))
q.set(c,r)
return r},
pb:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lm(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bh:function(a,b){b.a=H.pz
b.b=H.pA
return b},
dr:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ap(null,null)
s.y=b
s.cy=c
r=H.bh(a,s)
a.eC.set(c,r)
return r},
mR:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.p7(a,b,r,c)
a.eC.set(r,s)
return s},
p7:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aZ(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ap(null,null)
q.y=6
q.z=b
q.cy=c
return H.bh(a,q)},
lo:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.p6(a,b,r,c)
a.eC.set(r,s)
return s},
p6:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aZ(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.kE(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.kE(q.z))return q
else return H.oA(a,b)}}p=new H.ap(null,null)
p.y=7
p.z=b
p.cy=c
return H.bh(a,p)},
mQ:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.p4(a,b,r,c)
a.eC.set(r,s)
return s},
p4:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aZ(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dq(a,"m1",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.ap(null,null)
q.y=8
q.z=b
q.cy=c
return H.bh(a,q)},
p8:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ap(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bh(a,s)
a.eC.set(q,r)
return r},
hl:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
p3:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dq:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hl(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ap(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bh(a,r)
a.eC.set(p,q)
return q},
lm:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hl(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ap(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bh(a,o)
a.eC.set(q,n)
return n},
mP:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hl(m)
if(j>0){s=l>0?",":""
r=H.hl(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.p3(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ap(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bh(a,o)
a.eC.set(q,r)
return r},
ln:function(a,b,c,d){var s,r=b.cy+("<"+H.hl(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.p5(a,b,c,r,d)
a.eC.set(r,s)
return s},
p5:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bi(a,b,r,0)
m=H.dz(a,c,r,0)
return H.ln(a,n,m,c!==m)}}l=new H.ap(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bh(a,l)},
mL:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mN:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.oX(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mM(a,r,g,f,!1)
else if(q===46)r=H.mM(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bg(a.u,a.e,f.pop()))
break
case 94:f.push(H.p8(a.u,f.pop()))
break
case 35:f.push(H.dr(a.u,5,"#"))
break
case 64:f.push(H.dr(a.u,2,"@"))
break
case 126:f.push(H.dr(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.ll(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dq(p,n,o))
else{m=H.bg(p,a.e,n)
switch(m.y){case 11:f.push(H.ln(p,m,o,a.n))
break
default:f.push(H.lm(p,m,o))
break}}break
case 38:H.oY(a,f)
break
case 42:l=a.u
f.push(H.mR(l,H.bg(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.lo(l,H.bg(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mQ(l,H.bg(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fL()
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
H.ll(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mP(p,H.bg(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.ll(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.p_(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bg(a.u,a.e,h)},
oX:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mM:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mS(s,o.z)[p]
if(n==null)H.q('No "'+p+'" in "'+H.oz(o)+'"')
d.push(H.hm(s,o,n))}else d.push(p)
return m},
oY:function(a,b){var s=b.pop()
if(0===s){b.push(H.dr(a.u,1,"0&"))
return}if(1===s){b.push(H.dr(a.u,4,"1&"))
return}throw H.b(P.hF("Unexpected extended operation "+H.f(s)))},
bg:function(a,b,c){if(typeof c=="string")return H.dq(a,c,a.sEA)
else if(typeof c=="number")return H.oZ(a,b,c)
else return c},
ll:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bg(a,b,c[s])},
p_:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bg(a,b,c[s])},
oZ:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.hF("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.hF("Bad index "+c+" for "+b.i(0)))},
Y:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aZ(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aZ(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.Y(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.Y(a,b.z,c,d,e)
if(p===6){s=d.z
return H.Y(a,b,c,s,e)}if(r===8){if(!H.Y(a,b.z,c,d,e))return!1
return H.Y(a,H.mn(a,b),c,d,e)}if(r===7){s=H.Y(a,b.z,c,d,e)
return s}if(p===8){if(H.Y(a,b,c,d.z,e))return!0
return H.Y(a,b,c,H.mn(a,d),e)}if(p===7){s=H.Y(a,b,c,d.z,e)
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
if(!H.Y(a,k,c,j,e)||!H.Y(a,j,e,k,c))return!1}return H.n1(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.n1(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pD(a,b,c,d,e)}return!1},
n1:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
pD:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.Y(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mS(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.Y(a,H.hm(a,b,l[p]),c,r[p],e))return!1
return!0},
kE:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aZ(a))if(r!==7)if(!(r===6&&H.kE(a.z)))s=r===8&&H.kE(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qB:function(a){var s
if(!H.aZ(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aZ:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
mZ:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ap:function ap(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fL:function fL(){this.c=this.b=this.a=null},
fG:function fG(){},
dn:function dn(a){this.a=a},
nl:function(a){return v.mangledGlobalNames[a]},
qF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hA:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lE==null){H.qy()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.b(P.jq("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.m3()]
if(p!=null)return p
p=H.qD(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,J.m3(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
m3:function(){var s=$.mJ
return s==null?$.mJ=v.getIsolateTag("_$dart_js"):s},
o9:function(a,b){if(!H.cc(a))throw H.b(P.lP(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a4(a,0,4294967295,"length",null))
return J.oa(new Array(a),b)},
l4:function(a,b){if(!H.cc(a)||a<0)throw H.b(P.bK("Length must be a non-negative integer: "+H.f(a)))
return H.d(new Array(a),b.J("w<0>"))},
oa:function(a,b){return J.l5(H.d(a,b.J("w<0>")))},
l5:function(a){a.fixed$length=Array
return a},
ob:function(a,b){return J.dE(a,b)},
dA:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cx.prototype
return J.cw.prototype}if(typeof a=="string")return J.aM.prototype
if(a==null)return J.cy.prototype
if(typeof a=="boolean")return J.e8.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.M)return a
return J.hA(a)},
qt:function(a){if(typeof a=="number")return J.by.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.M)return a
return J.hA(a)},
aY:function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.M)return a
return J.hA(a)},
hz:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.M)return a
return J.hA(a)},
na:function(a){if(typeof a=="number")return J.by.prototype
if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bE.prototype
return a},
dB:function(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bE.prototype
return a},
aH:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.M)return a
return J.hA(a)},
lL:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qt(a).v(a,b)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dA(a).p(a,b)},
lM:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.na(a).A(a,b)},
cj:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ne(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aY(a).h(a,b)},
kU:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.ne(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hz(a).l(a,b,c)},
nI:function(a,b){return J.dB(a).C(a,b)},
nJ:function(a,b,c){return J.aH(a).fS(a,b,c)},
nK:function(a,b,c,d){return J.aH(a).hd(a,b,c,d)},
nL:function(a,b){return J.dB(a).U(a,b)},
dE:function(a,b){return J.na(a).aS(a,b)},
kV:function(a,b){return J.aY(a).D(a,b)},
hD:function(a,b){return J.hz(a).H(a,b)},
nM:function(a,b,c,d){return J.aH(a).hG(a,b,c,d)},
kW:function(a,b){return J.hz(a).F(a,b)},
nN:function(a){return J.aH(a).ghk(a)},
kX:function(a){return J.aH(a).gda(a)},
nO:function(a){return J.aH(a).gde(a)},
ad:function(a){return J.dA(a).gS(a)},
b_:function(a){return J.hz(a).gR(a)},
aI:function(a){return J.aY(a).gm(a)},
lN:function(a){return J.hz(a).ib(a)},
nP:function(a,b){return J.aH(a).ih(a,b)},
nQ:function(a,b,c){return J.dB(a).q(a,b,c)},
nR:function(a){return J.dB(a).ir(a)},
a5:function(a){return J.dA(a).i(a)},
a:function a(){},
e8:function e8(){},
cy:function cy(){},
b8:function b8(){},
ey:function ey(){},
bE:function bE(){},
aA:function aA(){},
w:function w(a){this.$ti=a},
id:function id(a){this.$ti=a},
a8:function a8(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
by:function by(){},
cx:function cx(){},
cw:function cw(){},
aM:function aM(){}},P={
oN:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qh()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cf(new P.jS(q),1)).observe(s,{childList:true})
return new P.jR(q,s,r)}else if(self.setImmediate!=null)return P.qi()
return P.qj()},
oO:function(a){self.scheduleImmediate(H.cf(new P.jT(a),0))},
oP:function(a){self.setImmediate(H.cf(new P.jU(a),0))},
oQ:function(a){P.lf(C.m,a)},
lf:function(a,b){var s=C.c.a1(a.a,1000)
return P.p0(s<0?0:s,b)},
ms:function(a,b){var s=C.c.a1(a.a,1000)
return P.p1(s<0?0:s,b)},
p0:function(a,b){var s=new P.dm()
s.eu(a,b)
return s},
p1:function(a,b){var s=new P.dm()
s.ev(a,b)
return s},
ry:function(a){return new P.c9(a,1)},
oT:function(){return C.a5},
oU:function(a){return new P.c9(a,3)},
pK:function(a,b){return new P.dj(a,b.J("dj<0>"))},
q5:function(){var s,r
for(s=$.cd;s!=null;s=$.cd){$.dy=null
r=s.b
$.cd=r
if(r==null)$.dx=null
s.a.$0()}},
qc:function(){$.ly=!0
try{P.q5()}finally{$.dy=null
$.ly=!1
if($.cd!=null)$.lK().$1(P.n6())}},
qa:function(a){var s=new P.ft(a),r=$.dx
if(r==null){$.cd=$.dx=s
if(!$.ly)$.lK().$1(P.n6())}else $.dx=r.b=s},
qb:function(a){var s,r,q,p=$.cd
if(p==null){P.qa(a)
$.dy=$.dx
return}s=new P.ft(a)
r=$.dy
if(r==null){s.b=p
$.cd=$.dy=s}else{q=r.b
s.b=q
$.dy=r.b=s
if(q==null)$.dx=s}},
mr:function(a,b){var s=$.aG
if(s===C.f)return P.lf(a,b)
return P.lf(a,s.hl(b))},
oH:function(a,b){var s=$.aG
if(s===C.f)return P.ms(a,b)
return P.ms(a,s.d8(b,t.aF))},
n2:function(a,b,c,d,e){P.qb(new P.kq(d,e))},
q7:function(a,b,c,d){var s,r=$.aG
if(r===c)return d.$0()
$.aG=c
s=r
try{r=d.$0()
return r}finally{$.aG=s}},
q8:function(a,b,c,d,e){var s,r=$.aG
if(r===c)return d.$1(e)
$.aG=c
s=r
try{r=d.$1(e)
return r}finally{$.aG=s}},
jS:function jS(a){this.a=a},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
dm:function dm(){this.c=0},
ka:function ka(a,b){this.a=a
this.b=b},
k9:function k9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c9:function c9(a,b){this.a=a
this.b=b},
bF:function bF(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dj:function dj(a,b){this.a=a
this.$ti=b},
ft:function ft(a){this.a=a
this.b=null},
cV:function cV(){},
eV:function eV(){},
cX:function cX(){},
kh:function kh(){},
kq:function kq(a,b){this.a=a
this.b=b},
jZ:function jZ(){},
k_:function k_(a,b){this.a=a
this.b=b},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
oe:function(a,b){return new H.C(a.J("@<0>").aZ(b).J("C<1,2>"))},
of:function(a,b,c){return H.qs(a,new H.C(b.J("@<0>").aZ(c).J("C<1,2>")))},
l9:function(a,b){return new H.C(a.J("@<0>").aZ(b).J("C<1,2>"))},
cB:function(a){return new P.d7(a.J("d7<0>"))},
lk:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oW:function(a,b){var s=new P.d8(a,b)
s.c=a.e
return s},
o7:function(a,b,c){var s,r
if(P.lz(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.d([],t.s)
$.ab.push(a)
try{P.pJ(a,s)}finally{if(0>=$.ab.length)return H.c($.ab,-1)
$.ab.pop()}r=P.mp(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
l3:function(a,b,c){var s,r
if(P.lz(a))return b+"..."+c
s=new P.S(b)
$.ab.push(a)
try{r=s
r.a=P.mp(r.a,a,", ")}finally{if(0>=$.ab.length)return H.c($.ab,-1)
$.ab.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lz:function(a){var s,r
for(s=$.ab.length,r=0;r<s;++r)if(a===$.ab[r])return!0
return!1},
pJ:function(a,b){var s,r,q,p,o,n,m,l=a.gR(a),k=0,j=0
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
og:function(a,b,c){var s=P.oe(b,c)
a.F(0,new P.ij(s,b,c))
return s},
m4:function(a,b){var s,r,q=P.cB(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)q.n(0,b.a(a[r]))
return q},
lb:function(a){var s,r={}
if(P.lz(a))return"{...}"
s=new P.S("")
try{$.ab.push(a)
s.a+="{"
r.a=!0
J.kW(a,new P.io(r,s))
s.a+="}"}finally{if(0>=$.ab.length)return H.c($.ab,-1)
$.ab.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d7:function d7(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jY:function jY(a){this.a=a
this.c=this.b=null},
d8:function d8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cv:function cv(){},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(){},
i:function i(){},
cF:function cF(){},
io:function io(a,b){this.a=a
this.b=b},
W:function W(){},
hn:function hn(){},
cG:function cG(){},
c5:function c5(a,b){this.a=a
this.$ti=b},
df:function df(){},
d9:function d9(){},
ds:function ds(){},
oK:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oL(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oL:function(a,b,c,d){var s=a?$.nA():$.nz()
if(s==null)return null
if(0===c&&d===b.length)return P.mz(s,b)
return P.mz(s,b.subarray(c,P.bb(c,d,b.length)))},
mz:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ac(r)}return null},
lQ:function(a,b,c,d,e,f){if(C.c.bd(f,4)!==0)throw H.b(P.a2("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a2("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a2("Invalid base64 padding, more than two '=' characters",a,b))},
pr:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pq:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.X()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.aY(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.a9()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.c(r,o)
r[o]=n}return r},
jz:function jz(){},
jA:function jA(){},
hJ:function hJ(){},
hK:function hK(){},
dQ:function dQ(){},
dT:function dT(){},
hZ:function hZ(){},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
ia:function ia(a){this.a=a},
jx:function jx(){},
jB:function jB(){},
kf:function kf(a){this.b=0
this.c=a},
jy:function jy(a){this.a=a},
ke:function ke(a){this.a=a
this.b=16
this.c=0},
kC:function(a,b){var s=H.mf(a,b)
if(s!=null)return s
throw H.b(P.a2(a,null,null))},
o4:function(a){if(a instanceof H.bs)return a.i(0)
return"Instance of '"+H.f(H.eF(a))+"'"},
ik:function(a,b,c,d){var s,r=c?J.l4(a,d):J.o9(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
la:function(a,b,c){var s,r=H.d([],c.J("w<0>"))
for(s=J.b_(a);s.t();)r.push(s.gB(s))
if(b)return r
return J.l5(r)},
oh:function(a,b,c){var s,r,q=J.l4(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.c(q,s)
q[s]=r}return q},
eX:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bb(b,c,r)
if(b<=0){if(typeof c!=="number")return c.aa()
q=c<r}else q=!0
return H.mg(q?s.slice(b,c):s)}if(t.bm.b(a))return H.ow(a,b,P.bb(b,c,a.length))
return P.oF(a,b,c)},
oF:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a4(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a4(c,b,a.length,o,o))
r=J.b_(a)
for(q=0;q<b;++q)if(!r.t())throw H.b(P.a4(b,0,q,o,o))
p=[]
if(s)for(;r.t();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.t())throw H.b(P.a4(c,b,q,o,o))
p.push(r.gB(r))}return H.mg(p)},
ox:function(a){return new H.e9(a,H.oc(a,!1,!0,!1,!1,!1))},
mp:function(a,b,c){var s=J.b_(b)
if(!s.t())return a
if(c.length===0){do a+=H.f(s.gB(s))
while(s.t())}else{a+=H.f(s.gB(s))
for(;s.t();)a=a+c+H.f(s.gB(s))}return a},
mv:function(){var s=H.on()
if(s!=null)return P.oJ(s)
throw H.b(P.A("'Uri.base' is not supported"))},
kd:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nG().b
if(typeof b!="string")H.q(H.av(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghF().c2(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.c(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.ao(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
o1:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
o2:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dW:function(a){if(a>=10)return""+a
return"0"+a},
lY:function(a){return new P.bu(1000*a)},
i1:function(a){if(typeof a=="number"||H.lx(a)||null==a)return J.a5(a)
if(typeof a=="string")return JSON.stringify(a)
return P.o4(a)},
hF:function(a){return new P.dH(a)},
bK:function(a){return new P.ae(!1,null,null,a)},
lP:function(a,b,c){return new P.ae(!0,a,b,c)},
nS:function(a,b){if(a==null)throw H.b(new P.ae(!1,null,b,"Must not be null"))
return a},
mh:function(a){var s=null
return new P.c0(s,s,!1,s,s,a)},
eG:function(a,b){return new P.c0(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.c0(b,c,!0,a,d,"Invalid value")},
bb:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.y(c)
s=a>c}else s=!0
if(s)throw H.b(P.a4(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.y(c)
s=b>c}else s=!0
if(s)throw H.b(P.a4(b,a,c,"end",null))
return b}return c},
mi:function(a,b){if(a<0)throw H.b(P.a4(a,0,null,b,null))
return a},
N:function(a,b,c,d,e){var s=e==null?J.aI(b):e
return new P.e6(s,!0,a,c,"Index out of range")},
A:function(a){return new P.fl(a)},
jq:function(a){return new P.fi(a)},
le:function(a){return new P.c2(a)},
b3:function(a){return new P.dR(a)},
u:function(a){return new P.fI(a)},
a2:function(a,b,c){return new P.i7(a,b,c)},
lH:function(a){H.qF(a)},
oJ:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.C(a5,4)^58)*3|C.a.C(a5,0)^100|C.a.C(a5,1)^97|C.a.C(a5,2)^116|C.a.C(a5,3)^97)>>>0
if(s===0)return P.mu(a4<a4?C.a.q(a5,0,a4):a5,5,a3).ge2()
else if(s===32)return P.mu(C.a.q(a5,5,a4),0,a3).ge2()}r=P.ik(8,0,!1,t.S)
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
if(P.n3(a5,0,a4,0,r)>=14){if(7>=r.length)return H.c(r,7)
r[7]=a4}if(1>=r.length)return H.c(r,1)
p=r[1]
if(p>=0)if(P.n3(a5,0,p,20,r)===20){if(7>=r.length)return H.c(r,7)
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
a5=C.a.aW(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.a5(a5,"http",0)){if(q&&n+3===m&&C.a.a5(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aW(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.a5(a5,"https",0)){if(q&&n+4===m&&C.a.a5(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aW(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.q(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.h2(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.pk(a5,0,p)
else{if(p===0)P.ca(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.pl(a5,d,o-1):""
b=P.ph(a5,o,n,!1)
q=n+1
if(q<m){a=H.mf(C.a.q(a5,q,m),a3)
a0=P.pj(a==null?H.q(P.a2("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pi(a5,m,l,a3,i,b!=null)
a2=l<k?P.lr(a5,l+1,k,a3):a3
return new P.bG(i,c,b,a0,a1,a2,k<a4?P.pg(a5,k+1,a4):a3)},
mx:function(a){var s=t.N
return C.b.hL(H.d(a.split("&"),t.s),P.l9(s,s),new P.jv(C.e))},
oI:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.js(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.U(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.kC(C.a.q(a,q,r),null)
if(typeof n!=="number")return n.a0()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.c(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.kC(C.a.q(a,q,c),null)
if(typeof n!=="number")return n.a0()
if(n>255)j.$2(k,q)
if(p>=s)return H.c(i,p)
i[p]=n
return i},
mw:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jt(a),b=new P.ju(c,a)
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
l=C.b.gav(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.oI(a,q,a1)
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
mT:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ca:function(a,b,c){throw H.b(P.a2(c,a,b))},
pj:function(a,b){if(a!=null&&a===P.mT(b))return null
return a},
ph:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.U(a,b)===91){s=c-1
if(C.a.U(a,s)!==93)P.ca(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.pe(a,r,s)
if(q<s){p=q+1
o=P.mY(a,C.a.a5(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mw(a,r,q)
return C.a.q(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.U(a,n)===58){q=C.a.bo(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mY(a,C.a.a5(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mw(a,b,q)
return"["+C.a.q(a,b,q)+o+"]"}return P.pn(a,b,c)},
pe:function(a,b,c){var s=C.a.bo(a,"%",b)
return s>=b&&s<c?s:c},
mY:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.S(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.U(a,s)
if(p===37){o=P.ls(a,s,!0)
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
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.U(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.q(a,r,s)
if(i==null){i=new P.S("")
n=i}else n=i
n.a+=j
n.a+=P.lq(p)
s+=k
r=s}}}if(i==null)return C.a.q(a,b,c)
if(r<c)i.a+=C.a.q(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pn:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.U(a,s)
if(o===37){n=P.ls(a,s,!0)
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
if(m>=8)return H.c(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.ca(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.U(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.q(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.S("")
m=q}else m=q
m.a+=l
m.a+=P.lq(o)
s+=j
r=s}}}}if(q==null)return C.a.q(a,b,c)
if(r<c){l=C.a.q(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pk:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mV(C.a.C(a,b)))P.ca(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.C(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.c(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.ca(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.q(a,b,c)
return P.pd(r?a.toLowerCase():a)},
pd:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pl:function(a,b,c){return P.dt(a,b,c,C.Z,!1)},
pi:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dt(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a3(s,"/"))s="/"+s
return P.pm(s,e,f)},
pm:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a3(a,"/"))return P.po(a,!s||c)
return P.pp(a)},
lr:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.bK("Both query and queryParameters specified"))
return P.dt(a,b,c,C.k,!0)}if(d==null)return null
s=new P.S("")
r.a=""
d.F(0,new P.kb(new P.kc(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
pg:function(a,b,c){return P.dt(a,b,c,C.k,!0)},
ls:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.U(a,b+1)
r=C.a.U(a,n)
q=H.ky(s)
p=H.ky(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aQ(o,4)
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.ao(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.q(a,b,b+3).toUpperCase()
return null},
lq:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.h3(a,6*o)&63|p
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
n+=3}}return P.eX(s,0,null)},
dt:function(a,b,c,d,e){var s=P.mX(a,b,c,d,e)
return s==null?C.a.q(a,b,c):s},
mX:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.U(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.ls(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.c(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ca(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.U(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.lq(o)}}if(p==null){p=new P.S("")
n=p}else n=p
n.a+=C.a.q(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.y(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.q(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mW:function(a){if(C.a.a3(a,"."))return!0
return C.a.dB(a,"/.")!==-1},
pp:function(a){var s,r,q,p,o,n,m
if(!P.mW(a))return a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.G(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.c(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
po:function(a,b){var s,r,q,p,o,n
if(!P.mW(a))return!b?P.mU(a):a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gav(s)!==".."){if(0>=s.length)return H.c(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.c(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gav(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.c(s,0)
r=P.mU(s[0])
if(0>=s.length)return H.c(s,0)
s[0]=r}return C.b.j(s,"/")},
mU:function(a){var s,r,q,p=a.length
if(p>=2&&P.mV(J.nI(a,0)))for(s=1;s<p;++s){r=C.a.C(a,s)
if(r===58)return C.a.q(a,0,s)+"%3A"+C.a.a6(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.c(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
pf:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.C(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.bK("Invalid URL encoding"))}}return s},
lt:function(a,b,c,d,e){var s,r,q,p,o=b
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
p.push(P.pf(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.c2(p)},
mV:function(a){var s=a|32
return 97<=s&&s<=122},
mu:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.C(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.a2(k,a,r))}}if(q<0&&r>b)throw H.b(P.a2(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.C(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gav(j)
if(p!==44||r!==n+7||!C.a.a5(a,"base64",n+1))throw H.b(P.a2("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.I.hV(0,a,m,s)
else{l=P.mX(a,m,s,C.k,!0)
if(l!=null)a=C.a.aW(a,m,s,l)}return new P.jr(a,j,c)},
pv:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.oh(22,new P.kl(),t.gc),l=new P.kk(m),k=new P.km(),j=new P.kn(),i=l.$2(0,225)
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
n3:function(a,b,c,d,e){var s,r,q,p,o,n=$.nH()
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
aw:function aw(){},
ag:function ag(a,b){this.a=a
this.b=b},
Z:function Z(){},
bu:function bu(a){this.a=a},
hV:function hV(){},
hW:function hW(){},
K:function K(){},
dH:function dH(a){this.a=a},
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
e6:function e6(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fl:function fl(a){this.a=a},
fi:function fi(a){this.a=a},
c2:function c2(a){this.a=a},
dR:function dR(a){this.a=a},
ew:function ew(){},
cT:function cT(){},
dU:function dU(a){this.a=a},
fI:function fI(a){this.a=a},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(){},
l:function l(){},
h:function h(){},
e7:function e7(){},
n:function n(){},
I:function I(){},
an:function an(){},
R:function R(){},
M:function M(){},
x:function x(){},
S:function S(a){this.a=a},
jv:function jv(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kc:function kc(a,b){this.a=a
this.b=b},
kb:function kb(a){this.a=a},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
kl:function kl(){},
kk:function kk(a){this.a=a},
km:function km(){},
kn:function kn(){},
h2:function h2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fz:function fz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qo:function(a){var s
if(t.v.b(a)){s=J.nO(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.dp(a.data,a.height,a.width)},
qn:function(a){if(a instanceof P.dp)return{data:a.a,height:a.b,width:a.c}
return a},
bj:function(a){var s,r,q,p,o
if(a==null)return null
s=P.l9(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
qm:function(a){var s={}
a.F(0,new P.kr(s))
return s},
k4:function k4(){},
k6:function k6(a,b){this.a=a
this.b=b},
k7:function k7(a,b){this.a=a
this.b=b},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
kr:function kr(a){this.a=a},
k5:function k5(a,b){this.a=a
this.b=b},
e1:function e1(a,b){this.a=a
this.b=b},
i5:function i5(){},
i6:function i6(){},
jX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oV:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
h0:function h0(){},
a6:function a6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aN:function aN(){},
ed:function ed(){},
aR:function aR(){},
eu:function eu(){},
iM:function iM(){},
c1:function c1(){},
eW:function eW(){},
m:function m(){},
aT:function aT(){},
f8:function f8(){},
fP:function fP(){},
fQ:function fQ(){},
fX:function fX(){},
fY:function fY(){},
ha:function ha(){},
hb:function hb(){},
hj:function hj(){},
hk:function hk(){},
bd:function bd(){},
hH:function hH(){},
dJ:function dJ(){},
hI:function hI(a){this.a=a},
dK:function dK(){},
b1:function b1(){},
ev:function ev(){},
fv:function fv(){},
eI:function eI(){},
eR:function eR(){},
h6:function h6(){},
h7:function h7(){}},W={
lO:function(){var s=document.createElement("a")
return s},
l_:function(){var s=document.createElement("canvas")
return s},
o3:function(a,b,c){var s,r=document.body
r.toString
s=C.p.ae(r,a,b,c)
s.toString
r=new H.aW(new W.a0(s),new W.hX(),t.ac.J("aW<i.E>"))
return t.h.a(r.gaL(r))},
hY:function(a){return"wheel"},
cr:function(a){var s,r,q="element tag unavailable"
try{s=J.aH(a)
if(typeof s.gdZ(a)=="string")q=s.gdZ(a)}catch(r){H.ac(r)}return q},
o6:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ac(s)}return q},
jW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mK:function(a,b,c,d){var s=W.jW(W.jW(W.jW(W.jW(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
a_:function(a,b,c,d){var s=new W.fH(a,b,c==null?null:W.n4(new W.jV(c),t.aD),!1)
s.ha()
return s},
mI:function(a){var s=W.lO(),r=window.location
s=new W.c8(new W.k1(s,r))
s.ep(a)
return s},
oR:function(a,b,c,d){return!0},
oS:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
mO:function(){var s=t.N,r=P.m4(C.A,s),q=H.d(["TEMPLATE"],t.s)
s=new W.he(r,P.cB(s),P.cB(s),P.cB(s),null)
s.es(null,new H.cH(C.A,new W.k8(),t.eM),q,null)
return s},
n4:function(a,b){var s=$.aG
if(s===C.f)return a
return s.d8(a,b)},
r:function r(){},
hE:function hE(){},
dF:function dF(){},
dG:function dG(){},
bL:function bL(){},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
ax:function ax(){},
hO:function hO(){},
J:function J(){},
cn:function cn(){},
hP:function hP(){},
am:function am(){},
aL:function aL(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
b4:function b4(){},
hT:function hT(){},
co:function co(){},
cp:function cp(){},
dY:function dY(){},
hU:function hU(){},
fw:function fw(a,b){this.a=a
this.b=b},
D:function D(){},
hX:function hX(){},
j:function j(){},
e:function e(){},
ah:function ah(){},
bP:function bP(){},
e0:function e0(){},
e2:function e2(){},
az:function az(){},
i9:function i9(){},
bw:function bw(){},
bx:function bx(){},
bR:function bR(){},
bT:function bT(){},
bz:function bz(){},
il:function il(){},
iE:function iE(){},
bU:function bU(){},
ek:function ek(){},
iF:function iF(a){this.a=a},
el:function el(){},
iG:function iG(a){this.a=a},
aB:function aB(){},
em:function em(){},
ai:function ai(){},
a0:function a0(a){this.a=a},
v:function v(){},
cO:function cO(){},
aC:function aC(){},
eA:function eA(){},
eJ:function eJ(){},
iU:function iU(a){this.a=a},
eL:function eL(){},
aq:function aq(){},
eN:function eN(){},
aD:function aD(){},
eO:function eO(){},
aE:function aE(){},
eU:function eU(){},
j4:function j4(a){this.a=a},
ar:function ar(){},
bc:function bc(){},
cW:function cW(){},
eY:function eY(){},
eZ:function eZ(){},
c3:function c3(){},
as:function as(){},
aa:function aa(){},
f1:function f1(){},
f2:function f2(){},
jb:function jb(){},
aF:function aF(){},
bD:function bD(){},
f7:function f7(){},
jf:function jf(){},
aV:function aV(){},
jw:function jw(){},
fq:function fq(){},
bf:function bf(){},
c6:function c6(){},
c7:function c7(){},
fx:function fx(){},
d5:function d5(){},
fM:function fM(){},
da:function da(){},
h5:function h5(){},
hc:function hc(){},
fu:function fu(){},
fE:function fE(a){this.a=a},
l2:function l2(a,b){this.a=a
this.$ti=b},
fH:function fH(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jV:function jV(a){this.a=a},
lj:function lj(a){this.$ti=a},
c8:function c8(a){this.a=a},
L:function L(){},
cP:function cP(a){this.a=a},
iJ:function iJ(a){this.a=a},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(){},
k2:function k2(){},
k3:function k3(){},
he:function he(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k8:function k8(){},
hd:function hd(){},
cu:function cu(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aj:function aj(){},
k1:function k1(a,b){this.a=a
this.b=b},
ho:function ho(a){this.a=a
this.b=!1},
kg:function kg(a){this.a=a},
fy:function fy(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fJ:function fJ(){},
fK:function fK(){},
fN:function fN(){},
fO:function fO(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fZ:function fZ(){},
h_:function h_(){},
h1:function h1(){},
dh:function dh(){},
di:function di(){},
h3:function h3(){},
h4:function h4(){},
h9:function h9(){},
hf:function hf(){},
hg:function hg(){},
dk:function dk(){},
dl:function dl(){},
hh:function hh(){},
hi:function hi(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){}},K={
O:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.b(P.u("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.C(a,0)
r=C.a.C(b,0)
if(s>r){q=r
r=s
s=q}return new K.iP(s,r)},
t:function(a){var s=new K.iV()
s.el(a)
return s},
b0:function b0(){},
e4:function e4(){},
ip:function ip(){},
a9:function a9(){this.a=null},
iP:function iP(a,b){this.a=a
this.b=b},
iV:function iV(){this.a=null},
nf:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0=V.oB("Test 026"),a1=W.l_()
a1.className="pageLargeCanvas"
a1.id=b
a0.a.appendChild(a1)
s=t.i
a0.d2(H.d(["Test of the Material Lighting shader with a textured directional light. ","The texturing of the directional light is being modified with a matrix. ","The texture matrix is updated using the pre-update methods. ","Use Ctrl plus the mouse to move the center object."],s))
a0.hc(H.d(["shapes"],s))
a0.d2(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(b)
if(r==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
q=E.oG(r,!0,!0,!0,!1)
p=D.lX()
p.sag(U.dS(V.m7(0.3,0.4,1,a)))
o=D.lX()
o.sag(U.dS(V.m7(-0.3,-0.4,-1,a)))
o.sad(0,new V.T(0.125,0.125,0.125))
n=new O.eh()
m=O.l0(t.hc)
n.e=m
m.be(n.gf1(),n.gf3())
m=new O.aP(n,"emission")
m.c=new A.a1(!1,!1,!1)
m.f=new V.T(0,0,0)
n.f=m
m=new O.aP(n,"ambient")
m.c=new A.a1(!1,!1,!1)
m.f=new V.T(0,0,0)
n.r=m
m=new O.aP(n,"diffuse")
m.c=new A.a1(!1,!1,!1)
m.f=new V.T(0,0,0)
n.x=m
m=new O.aP(n,"invDiffuse")
m.c=new A.a1(!1,!1,!1)
m.f=new V.T(0,0,0)
n.y=m
m=new O.iv(n,"specular")
m.c=new A.a1(!1,!1,!1)
m.f=new V.T(0,0,0)
m.ch=100
n.z=m
m=new O.ir(n,"bump")
m.c=new A.a1(!1,!1,!1)
n.Q=m
n.ch=null
m=new O.aP(n,"reflect")
m.c=new A.a1(!1,!1,!1)
m.f=new V.T(0,0,0)
n.cx=m
m=new O.iu(n,"refract")
m.c=new A.a1(!1,!1,!1)
m.f=new V.T(0,0,0)
m.ch=1
n.cy=m
m=new O.iq(n,"alpha")
m.c=new A.a1(!1,!1,!1)
m.f=1
n.db=m
m=new D.cz()
m.bA(t.gj)
m.e=H.d([],t.bb)
m.f=H.d([],t.cP)
m.r=H.d([],t.eb)
m.x=H.d([],t.du)
m.z=m.y=null
m.cu(m.gf_(),m.gfD(),m.gfH())
n.dx=m
l=new O.it()
l.b=new V.aK(0,0,0,0)
l.c=1
l.d=10
l.e=!1
n.dy=l
l=m.y
m=l==null?m.y=D.P():l
m.n(0,n.gfU())
m=n.dx
l=m.z
m=l==null?m.z=D.P():l
m.n(0,n.gbj())
n.fr=null
n.dx.n(0,p)
n.dx.n(0,o)
n.f.sad(0,new V.T(0,0,0))
m=n.r
m.sad(0,new V.T(0.1,0.1,0.1))
m=n.x
m.sad(0,new V.T(0.8,0.8,0.8))
m=n.z
m.sad(0,new V.T(0.2,0.2,0.2))
m=n.z
m.bQ(new A.a1(!0,m.c.b,!1))
m.cV(100)
m=n.x
l=q.f.hT("../resources/Test.png",!0)
k=m.c
if(!k.b)m.bQ(new A.a1(k.a,!0,!1))
k=m.d
if(k!==l){if(k!=null)k.gw().L(0,m.gbj())
j=m.d
m.d=l
l.gw().n(0,m.gbj())
l=new D.E(m.b+".texture2D",j,m.d)
l.b=!0
m.a.V(l)}i=E.m0()
i.sag(U.my(!0,q.x))
i.sal(0,F.nk())
h=E.m0()
h.sag(U.dS(V.aQ(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
m=F.lB(1,a,a,1)
m.cd()
h.sal(0,m)
g=new U.bQ()
g.bA(t.ah)
g.be(g.geY(),g.gfF())
g.e=null
g.f=V.ej()
g.r=0
g.n(0,U.my(!1,q.x))
g.n(0,U.dS(V.lc(3.141592653589793)))
g.n(0,U.dS(V.aQ(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
f=U.mm(0.5,0.7,0.3)
e=U.mm(0,0.1,0)
m=new M.dZ()
m.a=!0
l=O.l0(t.l)
m.e=l
l.be(m.gf7(),m.gf9())
m.y=m.x=m.r=m.f=null
d=X.o5(a)
c=new X.ex()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.sag(a)
l=c.c
$.F().toString
if(!(Math.abs(l-1.0471975511965976)<1e-9)){c.c=1.0471975511965976
l=new D.E("fov",l,1.0471975511965976)
l.b=!0
c.aN(l)}l=c.d
$.F().toString
if(!(Math.abs(l-0.1)<1e-9)){c.d=0.1
l=new D.E("near",l,0.1)
l.b=!0
c.aN(l)}l=c.e
$.F().toString
if(!(Math.abs(l-2000)<1e-9)){c.e=2000
l=new D.E("far",l,2000)
l.b=!0
c.aN(l)}l=m.b
if(l!==c){if(l!=null)l.gw().L(0,m.gaq())
j=m.b
m.b=c
c.gw().n(0,m.gaq())
l=new D.E("camera",j,m.b)
l.b=!0
m.az(l)}l=m.c
if(l!==d){if(l!=null)l.gw().L(0,m.gaq())
j=m.c
m.c=d
d.gw().n(0,m.gaq())
l=new D.E("target",j,m.c)
l.b=!0
m.az(l)}m.se_(a)
m.se_(n)
m.e.n(0,i)
m.e.n(0,h)
m.b.sag(g)
l=m.f
if(l==null)l=m.f=D.P()
l.n(0,new K.kG(n,f,e))
l=q.d
if(l!==m){if(l!=null)l.gw().L(0,q.gcB())
q.d=m
m.gw().n(0,q.gcB())
q.cC()}m=new V.iN("shapes")
s=s.getElementById("shapes")
m.c=s
if(s==null)H.q("Failed to find shapes for RadioGroup")
m.b2(0,"Cube",new K.kH(i))
m.b2(0,"Cylinder",new K.kI(i))
m.b2(0,"Cone",new K.kJ(i))
m.b2(0,"Sphere",new K.kK(i))
m.d0(0,"Toroid",new K.kL(i),!0)
m.b2(0,"Knot",new K.kM(i))
s=q.Q
if(s==null)s=q.Q=D.P()
m=s.b
s=m==null?s.b=H.d([],t.f):m
s.push(new K.kN(a0,n))
V.qG(q)},
kG:function kG(a,b,c){this.a=a
this.b=b
this.c=c},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a,b){this.a=a
this.b=b}},L={
jd:function(){var s=new L.jc()
s.a=new H.C(t.cn)
s.b=new H.C(t.w)
s.c=P.cB(t.X)
return s},
eS:function eS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(a){this.b=a
this.c=null},
jc:function jc(){var _=this
_.d=_.c=_.b=_.a=null},
f9:function f9(a){this.b=a
this.a=this.c=null}},O={
l0:function(a){var s=new O.af(a.J("af<0>"))
s.bA(a)
return s},
af:function af(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cK:function cK(){this.b=this.a=null},
eh:function eh(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(){},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(){},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(){},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(){},
iq:function iq(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cI:function cI(){},
ir:function ir(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aP:function aP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
it:function it(){var _=this
_.e=_.d=_.c=_.b=null},
iu:function iu(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iv:function iv(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f0:function f0(){}},E={
m0:function(){var s,r=new E.bv()
r.a=""
r.b=!0
s=O.l0(t.l)
r.y=s
s.be(r.ghW(),r.ghZ())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sal(0,null)
r.sag(null)
return r},
mF:function(){if(J.kV(window.navigator.vendor,"Google"))return C.G
if(J.kV(window.navigator.userAgent,"Firefox"))return C.q
var s=window.navigator.appVersion
if(J.aY(s).D(s,"Trident")||C.a.D(s,"Edge"))return C.r
if(J.kV(window.navigator.appName,"Microsoft"))return C.r
return C.H},
mG:function(){var s=window.navigator.appVersion
if(J.aY(s).D(s,"Win"))return C.a0
if(C.a.D(s,"Mac"))return C.B
if(C.a.D(s,"Linux"))return C.a1
return C.a2},
oy:function(a,b){var s=new E.iQ(a)
s.ek(a,b)
return s},
oG:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.mq(a,!0,!0,!0,!1)
s=W.l_()
r=s.style
r.width="100%"
r.height="100%"
J.kX(a).n(0,s)
return E.mq(s,!0,!0,!0,!1)},
mq:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.f4(),n=t.z,m=C.i.cs(a,"webgl2",P.of(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.q(P.u("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.oy(m,a)
n=new T.j8(m)
n.b=m.getParameter(3379)
m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.fn(a)
s=new X.ig()
s.d=P.cB(t.e)
n.b=s
s=new X.iH(n)
s.f=0
s.r=V.bB()
s.x=V.bB()
s.ch=s.Q=1
n.c=s
s=new X.im(n)
s.r=0
s.x=V.bB()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.je(n)
s.f=V.bB()
s.r=V.bB()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.d([],t.eG)
s=$.i_
n.Q=(s==null?$.i_=new E.fF(E.mF(),E.mG()):s).a===C.q?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.a_(q,"contextmenu",n.gfb(),!1))
n.z.push(W.a_(a,"focus",n.gfh(),!1))
n.z.push(W.a_(a,"blur",n.gf5(),!1))
n.z.push(W.a_(q,"keyup",n.gfl(),!1))
n.z.push(W.a_(q,"keydown",n.gfj(),!1))
n.z.push(W.a_(a,"mousedown",n.gfp(),!1))
n.z.push(W.a_(a,"mouseup",n.gfu(),!1))
n.z.push(W.a_(a,p,n.gfs(),!1))
r=n.z
W.hY(a)
W.hY(a)
r.push(W.a_(a,W.hY(a),n.gfw(),!1))
n.z.push(W.a_(q,p,n.gfd(),!1))
n.z.push(W.a_(q,"mouseup",n.gff(),!1))
n.z.push(W.a_(q,"pointerlockchange",n.gfA(),!1))
n.z.push(W.a_(a,"touchstart",n.gfN(),!1))
n.z.push(W.a_(a,"touchend",n.gfJ(),!1))
n.z.push(W.a_(a,"touchmove",n.gfL(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ag(Date.now(),!1)
o.db=0
o.cT()
return o},
hL:function hL(){},
bv:function bv(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bN:function bN(a){this.b=a},
bZ:function bZ(a){this.b=a},
fF:function fF(a,b){this.a=a
this.b=b},
iQ:function iQ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
cU:function cU(a){this.c=a
this.b=null},
f4:function f4(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ja:function ja(a){this.a=a}},Z={
li:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cb(c)),35044)
a.bindBuffer(b,null)
return new Z.fr(b,s)},
au:function(a){return new Z.be(a)},
fr:function fr(a,b){this.a=a
this.b=b},
dN:function dN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jQ:function jQ(a){this.a=a},
dO:function dO(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bS:function bS(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(a){this.a=a}},D={
P:function(){var s=new D.bO()
s.d=0
return s},
hM:function hM(){},
bO:function bO(){var _=this
_.d=_.c=_.b=_.a=null},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
U:function U(){this.b=null},
b6:function b6(){this.b=null},
b7:function b7(){this.b=null},
E:function E(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
lX:function(){var s=new D.bt()
s.c=new V.T(1,1,1)
s.a=V.mE()
s.d=V.lh()
s.e=V.oM()
s.sag(null)
s.sad(0,null)
return s},
dL:function dL(){},
bt:function bt(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
V:function V(){},
cz:function cz(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
eC:function eC(){},
eP:function eP(){}},X={dP:function dP(a,b){this.a=a
this.b=b},eb:function eb(a,b){this.a=a
this.b=b},ig:function ig(){this.d=this.b=this.a=null},cE:function cE(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},im:function im(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},bW:function bW(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iH:function iH(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},eD:function eD(){},cY:function cY(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},je:function je(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fn:function fn(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
o5:function(a){var s=new X.i8(),r=new V.aK(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.ml
if(r==null){r=V.mk(0,0,1,1)
$.ml=r}s.r=r
return s},
kZ:function kZ(){},
i8:function i8(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ex:function ex(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
j5:function j5(){}},V={
hB:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
kT:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bd(a-b,s)
return(a<0?a+s:a)+b},
H:function(a,b,c){if(a==null)return C.a.ah("null",c)
$.F().toString
return C.a.ah(C.d.e1(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
ch:function(a,b,c){var s,r,q,p,o,n,m=H.d([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.o)(a),++q){p=V.H(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.c(m,o)
s=C.a.ah(m[o],r)
n=m.length
if(o>=n)return H.c(m,o)
m[o]=s}return m},
lG:function(a){return C.d.io(Math.pow(2,C.V.ce(Math.log(H.qk(a))/Math.log(2))))},
ol:function(a){return new V.cJ(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q)},
ej:function(){var s=$.m8
return s==null?$.m8=V.aQ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aQ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ba(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lc:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aQ(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
m6:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aQ(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
m7:function(a,b,c,d){d=V.lh()
return V.m5(V.mc(),d,new V.B(a,b,c))},
m5:function(a,b,c){var s=c.G(),r=b.aD(s).G(),q=s.aD(r),p=new V.B(a.a,a.b,a.c),o=r.T(0).a7(p),n=q.T(0).a7(p),m=s.T(0).a7(p)
return V.aQ(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
bB:function(){var s=$.mb
return s==null?$.mb=new V.ak(0,0):s},
mc:function(){var s=$.aS
return s==null?$.aS=new V.Q(0,0,0):s},
mk:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eH(a,b,c,d)},
d4:function(){var s=$.mD
return s==null?$.mD=new V.B(0,0,0):s},
oM:function(){var s=$.jC
return s==null?$.jC=new V.B(-1,0,0):s},
lh:function(){var s=$.jD
return s==null?$.jD=new V.B(0,1,0):s},
mE:function(){var s=$.jE
return s==null?$.jE=new V.B(0,0,1):s},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i0:function i0(){},
cJ:function cJ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ba:function ba(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
at:function at(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
qG:function(a){P.oH(C.S,new V.kP(a))},
oB:function(a){var s=new V.j_()
s.en(a,!0)
return s},
b2:function b2(){},
kP:function kP(a){this.a=a},
dV:function dV(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e3:function e3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e5:function e5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ez:function ez(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iN:function iN(a){this.a=a
this.c=null},
iO:function iO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j_:function j_(){this.b=this.a=null},
j1:function j1(a){this.a=a},
j0:function j0(a){this.a=a},
j2:function j2(a){this.a=a}},U={
lW:function(){var s=new U.hN()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
dS:function(a){var s=new U.ck()
s.a=a
return s},
mm:function(a,b,c){var s,r=new U.cR()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.se5(0)
r.sdS(0,0)
r.sdY(0)
s=r.d
$.F().toString
if(!(Math.abs(s-c)<1e-9)){r.d=c
s=new D.E("deltaYaw",s,c)
s.b=!0
r.P(s)}s=r.e
$.F().toString
if(!(Math.abs(s-a)<1e-9)){r.e=a
s=new D.E("deltaPitch",s,a)
s.b=!0
r.P(s)}s=r.f
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.f=b
s=new D.E("deltaRoll",s,b)
s.b=!0
r.P(s)}return r},
my:function(a,b){var s,r,q,p=new U.d3(),o=U.lW()
o.se4(0,!0)
o.sdG(6.283185307179586)
o.sdI(0)
o.sa2(0,0)
o.sdH(100)
o.sW(0)
o.sdd(0.5)
p.b=o
s=p.gbg()
o.gw().n(0,s)
o=U.lW()
o.se4(0,!0)
o.sdG(6.283185307179586)
o.sdI(0)
o.sa2(0,0)
o.sdH(100)
o.sW(0)
o.sdd(0.5)
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
p.P(o)
o=p.f
if(o!==!1){p.f=!1
o=new D.E("invertX",o,!1)
o.b=!0
p.P(o)}o=p.r
if(o!==!1){p.r=!1
o=new D.E("invertY",o,!1)
o.b=!0
p.P(o)}p.hj(b)
return p},
hN:function hN(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ck:function ck(){this.b=this.a=null},
bQ:function bQ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a3:function a3(){},
cR:function cR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d3:function d3(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dZ:function dZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
oj:function(a,b){var s=a.b5,r=new A.ei(b,s)
r.em(b,s)
r.ej(a,b)
return r},
ok:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gao(a5)+a6.gao(a6)+a7.gao(a7)+a8.gao(a8)+a9.gao(a9)+b0.gao(b0)+b1.gao(b1)+b2.gao(b2)+b3.gao(b3)+"_"
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
b=$.bn()
if(h){s=$.bm()
b=new Z.be(b.a|s.a)}if(g){s=$.bl()
b=new Z.be(b.a|s.a)}if(f){s=$.bo()
b=new Z.be(b.a|s.a)}if(e){s=$.bk()
b=new Z.be(b.a|s.a)}return new A.is(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
ko:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kp:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.ko(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hC(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
pP:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.ko(b,r,"emission")
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
pL:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kp(b,r,"ambient")
b.a+="\n"},
pN:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kp(b,r,"diffuse")
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
pQ:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kp(b,r,"invDiffuse")
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
pW:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kp(b,r,"specular")
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
pS:function(a,b){var s,r,q
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
pU:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.ko(b,r,"reflect")
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
pV:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.ko(b,r,"refract")
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
pM:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hC(r)
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
if(typeof s!=="number")return s.a9()
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
n=H.d([],p)
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
pO:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hC(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.a9()
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
if(l.a||l.b||!1)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.d([],p)
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
pT:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hC(r)
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
if(typeof s!=="number")return s.a9()
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
i=H.d([],p)
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
pX:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hC(r)
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
if(typeof s!=="number")return s.a9()
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
if(m){s=$.i_
if(s==null)s=$.i_=new E.fF(E.mF(),E.mG())
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
g=H.d([],s)
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
pR:function(a,b){var s,r
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
pY:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.S("")
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
A.pP(a,h)
A.pL(a,h)
A.pN(a,h)
A.pQ(a,h)
A.pW(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.pU(a,h)
A.pV(a,h)}A.pS(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pM(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pO(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pT(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.o)(o),++m)A.pX(a,o[m],h)
A.pR(a,h)}o=h.a+="// === Main ===\n"
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
s=a.b
if(s.a||s.b||!1)h.a+="   setAmbientColor();\n"
s=a.c
if(s.a||s.b||!1)h.a+="   setDiffuseColor();\n"
s=a.d
if(s.a||s.b||!1)h.a+="   setInvDiffuseColor();\n"
s=a.e
if(s.a||s.b||!1)h.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a6(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a6(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a6(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.o)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.a6(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
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
pZ:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aT+"];\n"
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
q0:function(a,b){var s
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
q_:function(a,b){var s
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
q2:function(a,b){var s,r
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
q3:function(a,b){var s,r
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
q1:function(a,b){var s
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
q4:function(a,b){var s
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
hC:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.a.a6(a,1)},
lg:function(a,b,c,d,e){var s=new A.jj(a,c,e)
s.f=d
P.ik(d,0,!1,t.e)
return s},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
hG:function hG(a){this.a=a},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(a,b){var _=this
_.iD=_.dg=_.bn=_.b5=_.aT=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iL=_.iK=_.iJ=_.cb=_.ca=_.c9=_.c8=_.c7=_.c6=_.c5=_.c4=_.iI=_.du=_.dt=_.iH=_.ds=_.dr=_.dq=_.iG=_.dn=_.dm=_.dl=_.iF=_.dk=_.dj=_.iE=_.di=_.dh=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dM:function dM(a,b){this.a=a
this.b=b},
dX:function dX(a,b){this.a=a
this.b=b},
eE:function eE(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
is:function is(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aT=b5
_.b5=b6
_.bn=b7},
cZ:function cZ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d_:function d_(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d1:function d1(a,b,c,d,e,f,g,h,i,j){var _=this
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
d2:function d2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cS:function cS(){},
fa:function fa(){},
jo:function jo(a){this.a=a},
fc:function fc(a,b,c){this.a=a
this.c=b
this.d=c},
jl:function jl(a,b,c){this.a=a
this.c=b
this.d=c},
jm:function jm(a,b,c){this.a=a
this.c=b
this.d=c},
jn:function jn(a,b,c){this.a=a
this.c=b
this.d=c},
jj:function jj(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
fb:function fb(a,b,c){this.a=a
this.c=b
this.d=c},
jk:function jk(a,b,c){this.a=a
this.c=b
this.d=c},
fd:function fd(a,b,c){this.a=a
this.c=b
this.d=c},
fe:function fe(a,b,c){this.a=a
this.c=b
this.d=c},
jp:function jp(a,b,c){this.a=a
this.c=b
this.d=c},
ff:function ff(a,b,c){this.a=a
this.c=b
this.d=c},
d0:function d0(a,b,c){this.a=a
this.c=b
this.d=c},
fg:function fg(a,b,c){this.a=a
this.c=b
this.d=c},
fh:function fh(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lB:function(a,b,c,d){var s=F.ld()
F.du(s,b,c,d,a,1,0,0,1)
F.du(s,b,c,d,a,0,1,0,3)
F.du(s,b,c,d,a,0,0,1,2)
F.du(s,b,c,d,a,-1,0,0,0)
F.du(s,b,c,d,a,0,-1,0,0)
F.du(s,b,c,d,a,0,0,-1,3)
s.at()
return s},
kj:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
du:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.B(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.B(s+a5,r+a3,q+a4)
o=new V.B(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.B(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.kj(g)
j=F.kj(f)
i=F.lJ(a1,a2,new F.ki(h,F.kj(e),F.kj(d),j,k,a0),b)
if(i!=null)a.b8(i)},
n9:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0<3)return null
s=F.ld()
r=b?-1:1
q=-6.283185307179586/a0
p=H.d([],t.j)
o=s.a
n=new V.B(0,0,r).G()
p.push(o.hg(new V.bC(a,-1,-1,-1),new V.aK(1,1,1,1),new V.Q(0,0,c),new V.B(0,0,r),new V.ak(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(typeof i!=="number")return H.y(i)
n=new V.B(k,j,r).G()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
o.toString
e=F.fp(new V.bC(a,-1,-1,-1),null,new V.aK(h,f,g,1),new V.Q(k*i,j*i,c),new V.B(0,0,r),new V.ak(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.n(0,e)
p.push(e)}s.d.he(p)
return s},
n7:function(a,b,c){return F.qp(!0,a,1,new F.ks(1,c),b)},
qp:function(a,b,c,d,e){var s,r=null
if(e<3)return r
if(c<1)return r
s=F.lJ(c,e,new F.ku(d),r)
if(s==null)return r
s.at()
s.bX()
if(b)s.b8(F.n9(3,!1,1,new F.kv(d),e))
s.b8(F.n9(1,!0,-1,new F.kw(d),e))
return s},
qH:function(a,b){var s,r,q={}
q.a=s
q.a=null
q.a=new F.kQ()
r=F.lB(a,null,new F.kR(q,1),b)
r.bX()
return r},
nk:function(){return F.n8(15,30,0.5,1,new F.kS())},
qC:function(){return F.n8(12,120,0.3,1,new F.kF(3,2))},
n8:function(a,b,c,d,e){var s=F.lJ(a,b,new F.kt(e,d,b,c),null)
if(s==null)return null
s.at()
s.bX()
return s},
lJ:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.ld()
r=H.d([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.fp(e,e,new V.aK(n,0,0,1),e,e,new V.ak(p,1),e,e,0)
o.n(0,m)
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
i.toString
m=F.fp(e,e,new V.aK(h,g,f,1),e,e,new V.ak(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.c3(d))}}s.d.hf(a+1,b+1,r)
return s},
cs:function(a,b,c){var s=new F.e_(),r=a.a
if(r==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
s.bT(a)
s.bU(b)
s.h_(c)
s.a.a.d.b.push(s)
s.a.a.Y()
return s},
od:function(a,b){var s=new F.ee(),r=a.a
if(r==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
s.bT(a)
s.bU(b)
s.a.a.c.b.push(s)
s.a.a.Y()
return s},
ld:function(){var s=new F.iW(),r=new F.jF(s)
r.b=!1
r.c=H.d([],t.j)
s.a=r
r=new F.iZ(s)
r.b=H.d([],t.o)
s.b=r
r=new F.iY(s)
r.b=H.d([],t.L)
s.c=r
r=new F.iX(s)
r.b=H.d([],t.b)
s.d=r
s.e=null
return s},
fp:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.fo(),p=new F.jN()
p.b=H.d([],t.o)
q.b=p
p=new F.jJ()
s=t.L
p.b=H.d([],s)
p.c=H.d([],s)
q.c=p
p=new F.jG()
s=t.b
p.b=H.d([],s)
p.c=H.d([],s)
p.d=H.d([],s)
q.d=p
h=$.nB()
q.e=0
p=$.bn()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.bm().a)!==0?e:r
q.x=(s&$.bl().a)!==0?b:r
q.y=(s&$.bo().a)!==0?f:r
q.z=(s&$.bJ().a)!==0?g:r
q.Q=(s&$.nC().a)!==0?c:r
q.ch=(s&$.ci().a)!==0?i:0
q.cx=(s&$.bk().a)!==0?a:r
return q},
ki:function ki(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ks:function ks(a,b){this.a=a
this.b=b},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
kQ:function kQ(){},
kR:function kR(a,b){this.a=a
this.b=b},
kS:function kS(){},
kF:function kF(a,b){this.a=a
this.b=b},
kt:function kt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e_:function e_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i4:function i4(){},
j3:function j3(){},
ee:function ee(){this.b=this.a=null},
ih:function ih(){},
ji:function ji(){},
eB:function eB(){this.a=null},
iW:function iW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iX:function iX(a){this.a=a
this.b=null},
iY:function iY(a){this.a=a
this.b=null},
iZ:function iZ(a){this.a=a
this.b=null},
fo:function fo(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jP:function jP(a){this.a=a},
jO:function jO(a){this.a=a},
jF:function jF(a){this.a=a
this.c=this.b=null},
jG:function jG(){this.d=this.c=this.b=null},
jH:function jH(a,b){this.a=a
this.b=b},
jI:function jI(a,b){this.a=a
this.b=b},
jJ:function jJ(){this.c=this.b=null},
jL:function jL(){},
jK:function jK(){},
jM:function jM(){},
iK:function iK(){},
jN:function jN(){this.b=null}},T={f3:function f3(){},j6:function j6(){},j7:function j7(){var _=this
_.y=_.d=_.c=_.b=_.a=null},j8:function j8(a){var _=this
_.a=a
_.e=_.d=_.b=null},j9:function j9(a,b,c,d,e,f,g){var _=this
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
H.l6.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gS:function(a){return H.cQ(a)},
i:function(a){return"Instance of '"+H.f(H.eF(a))+"'"}}
J.e8.prototype={
i:function(a){return String(a)},
gS:function(a){return a?519018:218159},
$iaw:1}
J.cy.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0}}
J.b8.prototype={
gS:function(a){return 0},
i:function(a){return String(a)},
$im2:1}
J.ey.prototype={}
J.bE.prototype={}
J.aA.prototype={
i:function(a){var s=a[$.no()]
if(s==null)return this.eg(a)
return"JavaScript function for "+H.f(J.a5(s))},
$iay:1}
J.w.prototype={
cn:function(a,b){if(!!a.fixed$length)H.q(P.A("removeAt"))
if(b<0||b>=a.length)throw H.b(P.eG(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var s
if(!!a.fixed$length)H.q(P.A("remove"))
for(s=0;s<a.length;++s)if(J.G(a[s],b)){a.splice(s,1)
return!0}return!1},
ac:function(a,b){var s,r
if(!!a.fixed$length)H.q(P.A("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.o)(b),++r)a.push(b[r])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.b3(a))}},
j:function(a,b){var s,r,q=P.ik(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.c(q,s)
q[s]=r}return q.join(b)},
hR:function(a){return this.j(a,"")},
hK:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.b3(a))}return s},
hL:function(a,b,c){return this.hK(a,b,c,t.z)},
hJ:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.b(P.b3(a))}throw H.b(H.ic())},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
ghI:function(a){if(a.length>0)return a[0]
throw H.b(H.ic())},
gav:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.ic())},
d3:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.b(P.b3(a))}return!1},
aY:function(a,b){if(!!a.immutable$list)H.q(P.A("sort"))
H.oE(a,b==null?J.pC():b)},
ec:function(a){return this.aY(a,null)},
D:function(a,b){var s
for(s=0;s<a.length;++s)if(J.G(a[s],b))return!0
return!1},
i:function(a){return P.l3(a,"[","]")},
gR:function(a){return new J.a8(a,a.length)},
gS:function(a){return H.cQ(a)},
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
J.id.prototype={}
J.a8.prototype={
gB:function(a){return this.d},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.by.prototype={
aS:function(a,b){var s
if(typeof b!="number")throw H.b(H.av(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbq(b)
if(this.gbq(a)===s)return 0
if(this.gbq(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbq:function(a){return a===0?1/a<0:a<0},
io:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.A(""+a+".toInt()"))},
ce:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.A(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.A(""+a+".round()"))},
e1:function(a,b){var s
if(b>20)throw H.b(P.a4(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbq(a))return"-"+s
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
bd:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ei:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cX(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.cX(a,b)},
cX:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.A("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aQ:function(a,b){var s
if(a>0)s=this.cW(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
h3:function(a,b){if(b<0)throw H.b(H.av(b))
return this.cW(a,b)},
cW:function(a,b){return b>31?0:a>>>b},
$iZ:1,
$iR:1}
J.cx.prototype={$il:1}
J.cw.prototype={}
J.aM.prototype={
U:function(a,b){if(b<0)throw H.b(H.cg(a,b))
if(b>=a.length)H.q(H.cg(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.b(H.cg(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!="string")throw H.b(P.lP(b,null,null))
return a+b},
aW:function(a,b,c,d){var s,r,q=P.bb(b,c,a.length)
if(!H.cc(q))H.q(H.av(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
a5:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a4(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a3:function(a,b){return this.a5(a,b,0)},
q:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.eG(b,null))
if(b>c)throw H.b(P.eG(b,null))
if(c>a.length)throw H.b(P.eG(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.q(a,b,null)},
ir:function(a){return a.toLowerCase()},
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
bo:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a4(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dB:function(a,b){return this.bo(a,b,0)},
hp:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a4(c,0,s,null,null))
return H.nj(a,b,c)},
D:function(a,b){return this.hp(a,b,0)},
aS:function(a,b){var s
if(typeof b!="string")throw H.b(H.av(b))
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
$ix:1}
H.ec.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.p.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.U(this.a,b)}}
H.k.prototype={}
H.cD.prototype={
gR:function(a){return new H.b9(this,this.gm(this))},
bx:function(a,b){return this.ef(0,b)}}
H.b9.prototype={
gB:function(a){var s=this.d
return s},
t:function(){var s,r=this,q=r.a,p=J.aY(q),o=p.gm(q)
if(r.b!=o)throw H.b(P.b3(q))
s=r.c
if(typeof o!=="number")return H.y(o)
if(s>=o){r.d=null
return!1}r.d=p.H(q,s);++r.c
return!0}}
H.aO.prototype={
gR:function(a){return new H.eg(J.b_(this.a),this.b)},
gm:function(a){return J.aI(this.a)},
H:function(a,b){return this.b.$1(J.hD(this.a,b))}}
H.cq.prototype={$ik:1}
H.eg.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){var s=this.a
return s}}
H.cH.prototype={
gm:function(a){return J.aI(this.a)},
H:function(a,b){return this.b.$1(J.hD(this.a,b))}}
H.aW.prototype={
gR:function(a){return new H.fs(J.b_(this.a),this.b)}}
H.fs.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.ct.prototype={}
H.fk.prototype={
l:function(a,b,c){throw H.b(P.A("Cannot modify an unmodifiable list"))}}
H.c4.prototype={}
H.cl.prototype={
i:function(a){return P.lb(this)},
l:function(a,b,c){H.o0()},
$iI:1}
H.cm.prototype={
gm:function(a){return this.a},
c1:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c1(0,b))return null
return this.cM(b)},
cM:function(a){return this.b[a]},
F:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cM(q))}}}
H.jg.prototype={
af:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.ea.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.f(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.f(r.a)+")"
return q+p+"' on '"+s+"' ("+H.f(r.a)+")"}}
H.fj.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iL.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.h8.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bs.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nm(r==null?"unknown":r)+"'"},
$iay:1,
giv:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f_.prototype={}
H.eT.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nm(s)+"'"}}
H.bM.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bM))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gS:function(a){var s,r=this.c
if(r==null)s=H.cQ(this.a)
else s=typeof r!=="object"?J.ad(r):H.cQ(r)
return(s^H.cQ(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eF(s))+"'")}}
H.eK.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.C.prototype={
gm:function(a){return this.a},
gbp:function(a){return this.a===0},
gZ:function(a){return new H.cA(this,H.dw(this).J("cA<1>"))},
giu:function(a){var s=this,r=H.dw(s)
return H.oi(s.gZ(s),new H.ie(s),r.c,r.Q[1])},
c1:function(a,b){var s=this.b
if(s==null)return!1
return this.eG(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bh(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bh(p,b)
q=r==null?n:r.b
return q}else return o.hP(b)},
hP:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cN(p,q.dC(a))
r=q.dD(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cG(s==null?q.b=q.bK():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cG(r==null?q.c=q.bK():r,b,c)}else q.hQ(b,c)},
hQ:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bK()
s=p.dC(a)
r=p.cN(o,s)
if(r==null)p.bR(o,s,[p.bL(a,b)])
else{q=p.dD(r,a)
if(q>=0)r[q].b=b
else r.push(p.bL(a,b))}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.b3(s))
r=r.c}},
cG:function(a,b,c){var s=this.bh(a,b)
if(s==null)this.bR(a,b,this.bL(b,c))
else s.b=c},
eR:function(){this.r=this.r+1&67108863},
bL:function(a,b){var s,r=this,q=new H.ii(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.eR()
return q},
dC:function(a){return J.ad(a)&0x3ffffff},
dD:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1},
i:function(a){return P.lb(this)},
bh:function(a,b){return a[b]},
cN:function(a,b){return a[b]},
bR:function(a,b,c){a[b]=c},
eK:function(a,b){delete a[b]},
eG:function(a,b){return this.bh(a,b)!=null},
bK:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bR(r,s,r)
this.eK(r,s)
return r}}
H.ie.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.dw(this.a).J("2(1)")}}
H.ii.prototype={}
H.cA.prototype={
gm:function(a){return this.a.a},
gR:function(a){var s=this.a,r=new H.ef(s,s.r)
r.c=s.e
return r}}
H.ef.prototype={
gB:function(a){return this.d},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.b3(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kz.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.kA.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kB.prototype={
$1:function(a){return this.a(a)}}
H.e9.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imj:1}
H.cL.prototype={$icL:1}
H.X.prototype={$iX:1}
H.bX.prototype={
gm:function(a){return a.length},
$iz:1}
H.bA.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aX(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.cM.prototype={
l:function(a,b,c){H.aX(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.en.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.eo.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.ep.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.eq.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.er.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.cN.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.bY.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aX(b,a,a.length)
return a[b]},
$ibY:1,
$ibd:1}
H.db.prototype={}
H.dc.prototype={}
H.dd.prototype={}
H.de.prototype={}
H.ap.prototype={
J:function(a){return H.hm(v.typeUniverse,this,a)},
aZ:function(a){return H.pb(v.typeUniverse,this,a)}}
H.fL.prototype={}
H.fG.prototype={
i:function(a){return this.a}}
H.dn.prototype={}
P.jS.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:16}
P.jR.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.jT.prototype={
$0:function(){this.a.$0()}}
P.jU.prototype={
$0:function(){this.a.$0()}}
P.dm.prototype={
eu:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cf(new P.ka(this,b),0),a)
else throw H.b(P.A("`setTimeout()` not found."))},
ev:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cf(new P.k9(this,a,Date.now(),b),0),a)
else throw H.b(P.A("Periodic timer."))},
$icX:1}
P.ka.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.k9.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.ei(s,o)}q.c=p
r.d.$1(q)}}
P.c9.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bF.prototype={
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
else{o=J.b_(s)
if(o instanceof P.bF){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dj.prototype={
gR:function(a){return new P.bF(this.a())}}
P.ft.prototype={}
P.cV.prototype={}
P.eV.prototype={}
P.cX.prototype={}
P.kh.prototype={}
P.kq.prototype={
$0:function(){var s=H.b(this.a)
s.stack=J.a5(this.b)
throw s}}
P.jZ.prototype={
ij:function(a){var s,r,q,p=null
try{if(C.f===$.aG){a.$0()
return}P.q7(p,p,this,a)}catch(q){s=H.ac(q)
r=H.lD(q)
P.n2(p,p,this,s,r)}},
ik:function(a,b){var s,r,q,p=null
try{if(C.f===$.aG){a.$1(b)
return}P.q8(p,p,this,a,b)}catch(q){s=H.ac(q)
r=H.lD(q)
P.n2(p,p,this,s,r)}},
il:function(a,b){return this.ik(a,b,t.z)},
hl:function(a){return new P.k_(this,a)},
d8:function(a,b){return new P.k0(this,a,b)}}
P.k_.prototype={
$0:function(){return this.a.ij(this.b)}}
P.k0.prototype={
$1:function(a){return this.a.il(this.b,a)},
$S:function(){return this.c.J("~(0)")}}
P.d7.prototype={
gR:function(a){var s=new P.d8(this,this.r)
s.c=this.e
return s},
gm:function(a){return this.a},
D:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eD(b)
return r}},
eD:function(a){var s=this.d
if(s==null)return!1
return this.bH(s[this.bD(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cH(s==null?q.b=P.lk():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cH(r==null?q.c=P.lk():r,b)}else return q.ex(0,b)},
ex:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lk()
s=q.bD(b)
r=p[s]
if(r==null)p[s]=[q.bC(b)]
else{if(q.bH(r,b)>=0)return!1
r.push(q.bC(b))}return!0},
L:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fQ(this.c,b)
else return this.fP(0,b)},
fP:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bD(b)
r=n[s]
q=o.bH(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cZ(p)
return!0},
cH:function(a,b){if(a[b]!=null)return!1
a[b]=this.bC(b)
return!0},
fQ:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cZ(s)
delete a[b]
return!0},
cI:function(){this.r=1073741823&this.r+1},
bC:function(a){var s,r=this,q=new P.jY(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cI()
return q},
cZ:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cI()},
bD:function(a){return J.ad(a)&1073741823},
bH:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1}}
P.jY.prototype={}
P.d8.prototype={
gB:function(a){return this.d},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.b3(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cv.prototype={}
P.ij.prototype={
$2:function(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cC.prototype={$ik:1,$ih:1,$in:1}
P.i.prototype={
gR:function(a){return new H.b9(a,this.gm(a))},
H:function(a,b){return this.h(a,b)},
gbp:function(a){return this.gm(a)===0},
iq:function(a,b){var s,r,q,p,o=this
if(o.gbp(a)){s=J.l4(0,H.bH(a).J("i.E"))
return s}r=o.h(a,0)
q=P.ik(o.gm(a),r,!0,H.bH(a).J("i.E"))
p=1
while(!0){s=o.gm(a)
if(typeof s!=="number")return H.y(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.c(q,p)
q[p]=s;++p}return q},
ip:function(a){return this.iq(a,!0)},
hG:function(a,b,c,d){var s
P.bb(b,c,this.gm(a))
for(s=b;s<c;++s)this.l(a,s,d)},
i:function(a){return P.l3(a,"[","]")}}
P.cF.prototype={}
P.io.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:17}
P.W.prototype={
F:function(a,b){var s,r
for(s=J.b_(this.gZ(a));s.t();){r=s.gB(s)
b.$2(r,this.h(a,r))}},
gm:function(a){return J.aI(this.gZ(a))},
i:function(a){return P.lb(a)},
$iI:1}
P.hn.prototype={
l:function(a,b,c){throw H.b(P.A("Cannot modify unmodifiable map"))}}
P.cG.prototype={
h:function(a,b){return J.cj(this.a,b)},
l:function(a,b,c){J.kU(this.a,b,c)},
F:function(a,b){J.kW(this.a,b)},
gm:function(a){return J.aI(this.a)},
i:function(a){return J.a5(this.a)},
$iI:1}
P.c5.prototype={}
P.df.prototype={
ac:function(a,b){var s
for(s=J.b_(b);s.t();)this.n(0,s.gB(s))},
i:function(a){return P.l3(this,"{","}")},
H:function(a,b){var s,r,q,p="index"
P.nS(b,p)
P.mi(b,p)
for(s=P.oW(this,this.r),r=0;s.t();){q=s.d
if(b===r)return q;++r}throw H.b(P.N(b,this,p,null,r))},
$ik:1,
$ih:1}
P.d9.prototype={}
P.ds.prototype={}
P.jz.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ac(r)}return null}}
P.jA.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ac(r)}return null}}
P.hJ.prototype={
hV:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bb(a2,a3,a1.length)
if(a3==null)throw H.b(P.mh("Invalid range"))
s=$.nE()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.C(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.ky(C.a.C(a1,l))
h=H.ky(C.a.C(a1,l+1))
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
d=e.a+=C.a.q(a1,q,r)
e.a=d+H.ao(k)
q=l
continue}}throw H.b(P.a2("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.q(a1,q,a3)
d=e.length
if(o>=0)P.lQ(a1,n,a3,o,m,d)
else{c=C.c.bd(d-1,4)+1
if(c===1)throw H.b(P.a2(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aW(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.lQ(a1,n,a3,o,m,b)
else{c=C.c.bd(b,4)
if(c===1)throw H.b(P.a2(a,a1,a3))
if(c>1)a1=C.a.aW(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hK.prototype={}
P.dQ.prototype={}
P.dT.prototype={}
P.hZ.prototype={}
P.ib.prototype={
i:function(a){return this.a}}
P.ia.prototype={
eH:function(a,b,c){var s,r,q,p,o,n,m=null
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
if(c>b)o.a+=J.nQ(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.jx.prototype={
ghF:function(){return C.Q}}
P.jB.prototype={
c2:function(a){var s,r,q,p=P.bb(0,null,a.length)
if(p==null)throw H.b(P.mh("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.kf(r)
if(q.eM(a,0,p)!==p){J.nL(a,p-1)
q.bW()}return new Uint8Array(r.subarray(0,H.pu(0,q.b,r.length)))}}
P.kf.prototype={
bW:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.c(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.c(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.c(r,q)
r[q]=189},
hb:function(a,b){var s,r,q,p,o,n=this
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
eM:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.U(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.C(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hb(p,C.a.C(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
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
P.jy.prototype={
c2:function(a){var s=this.a,r=P.oK(s,a,0,null)
if(r!=null)return r
return new P.ke(s).hq(a,0,null,!0)}}
P.ke.prototype={
hq:function(a,b,c,d){var s,r,q,p,o=this,n=P.bb(b,c,J.aI(a))
if(b===n)return""
s=P.pq(a,b,n)
if(typeof n!=="number")return n.X()
n-=b
r=o.bE(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.pr(q)
o.b=0
throw H.b(P.a2(p,a,b+o.c))}return r},
bE:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.X()
if(c-b>1000){s=C.c.a1(b+c,2)
r=q.bE(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bE(a,s,c,d)}return q.hv(a,b,c,d)},
hv:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.S(""),f=b+1,e=a.length
if(b<0||b>=e)return H.c(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.C("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.C(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.ao(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.ao(j)
break
case 65:g.a+=H.ao(j);--f
break
default:p=g.a+=H.ao(j)
g.a=p+H.ao(j)
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
g.a+=H.ao(a[l])}else g.a+=P.eX(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.ao(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.aw.prototype={}
P.ag.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.ag&&this.a===b.a&&!0},
aS:function(a,b){return C.c.aS(this.a,b.a)},
gS:function(a){var s=this.a
return(s^C.c.aQ(s,30))&1073741823},
i:function(a){var s=this,r=P.o1(H.ou(s)),q=P.dW(H.os(s)),p=P.dW(H.oo(s)),o=P.dW(H.op(s)),n=P.dW(H.or(s)),m=P.dW(H.ot(s)),l=P.o2(H.oq(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.Z.prototype={}
P.bu.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bu&&this.a===b.a},
gS:function(a){return C.c.gS(this.a)},
aS:function(a,b){return C.c.aS(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hW(),o=this.a
if(o<0)return"-"+new P.bu(0-o).i(0)
s=p.$1(C.c.a1(o,6e7)%60)
r=p.$1(C.c.a1(o,1e6)%60)
q=new P.hV().$1(o%1e6)
return""+C.c.a1(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.hV.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.hW.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.K.prototype={}
P.dH.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.i1(s)
return"Assertion failed"}}
P.et.prototype={
i:function(a){return"Throw of null."}}
P.ae.prototype={
gbG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbF:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbG()+o+m
if(!q.a)return l
s=q.gbF()
r=P.i1(q.b)
return l+s+": "+r}}
P.c0.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.e6.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var s,r=this.b
if(typeof r!=="number")return r.aa()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.f(s)},
gm:function(a){return this.f}}
P.fl.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fi.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c2.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dR.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.i1(s)+"."}}
P.ew.prototype={
i:function(a){return"Out of Memory"},
$iK:1}
P.cT.prototype={
i:function(a){return"Stack Overflow"},
$iK:1}
P.dU.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fI.prototype={
i:function(a){return"Exception: "+this.a}}
P.i7.prototype={
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
i=""}h=C.a.q(d,k,l)
return f+j+h+i+"\n"+C.a.A(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.ay.prototype={}
P.l.prototype={}
P.h.prototype={
bx:function(a,b){return new H.aW(this,b,H.dw(this).J("aW<h.E>"))},
gm:function(a){var s,r=this.gR(this)
for(s=0;r.t();)++s
return s},
gaL:function(a){var s,r=this.gR(this)
if(!r.t())throw H.b(H.ic())
s=r.gB(r)
if(r.t())throw H.b(H.o8())
return s},
H:function(a,b){var s,r,q
P.mi(b,"index")
for(s=this.gR(this),r=0;s.t();){q=s.gB(s)
if(b===r)return q;++r}throw H.b(P.N(b,this,"index",null,r))},
i:function(a){return P.o7(this,"(",")")}}
P.e7.prototype={}
P.n.prototype={$ik:1,$ih:1}
P.I.prototype={}
P.an.prototype={
gS:function(a){return P.M.prototype.gS.call(C.v,this)},
i:function(a){return"null"}}
P.R.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
p:function(a,b){return this===b},
gS:function(a){return H.cQ(this)},
i:function(a){return"Instance of '"+H.f(H.eF(this))+"'"},
toString:function(){return this.i(this)}}
P.x.prototype={}
P.S.prototype={
gm:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jv.prototype={
$2:function(a,b){var s,r,q,p=J.dB(b).dB(b,"=")
if(p===-1){if(b!=="")J.kU(a,P.lt(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.q(b,0,p)
r=C.a.a6(b,p+1)
q=this.a
J.kU(a,P.lt(s,0,s.length,q,!0),P.lt(r,0,r.length,q,!0))}return a}}
P.js.prototype={
$2:function(a,b){throw H.b(P.a2("Illegal IPv4 address, "+a,this.a,b))}}
P.jt.prototype={
$2:function(a,b){throw H.b(P.a2("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.ju.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kC(C.a.q(this.b,a,b),16)
if(typeof s!=="number")return s.aa()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bG.prototype={
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
else o=H.q(H.l8("Field '_text' has been assigned during initialization."))}return o},
gS:function(a){var s=this,r=s.z
if(r==null){r=C.a.gS(s.gbV())
if(s.z==null)s.z=r
else r=H.q(H.l8("Field 'hashCode' has been assigned during initialization."))}return r},
gcm:function(){var s=this,r=s.Q
if(r==null){r=new P.c5(P.mx(s.gbb(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.q(H.l8("Field 'queryParameters' has been assigned during initialization."))}return r},
ge3:function(){return this.b},
gcg:function(a){var s=this.c
if(s==null)return""
if(C.a.a3(s,"["))return C.a.q(s,1,s.length-1)
return s},
gbs:function(a){var s=this.d
return s==null?P.mT(this.a):s},
gbb:function(a){var s=this.f
return s==null?"":s},
gcf:function(){var s=this.r
return s==null?"":s},
dW:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a3(s,"/"))s="/"+s
q=s
p=P.lr(null,0,0,b)
return new P.bG(n,l,j,k,q,p,o.r)},
gdv:function(){return this.c!=null},
gdA:function(){return this.f!=null},
gdw:function(){return this.r!=null},
i:function(a){return this.gbV()},
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gby()&&s.c!=null===b.gdv()&&s.b===b.ge3()&&s.gcg(s)===b.gcg(b)&&s.gbs(s)===b.gbs(b)&&s.e===b.gdR(b)&&s.f!=null===b.gdA()&&s.gbb(s)===b.gbb(b)&&s.r!=null===b.gdw()&&s.gcf()===b.gcf()},
$ifm:1,
gby:function(){return this.a},
gdR:function(a){return this.e}}
P.kc.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.kd(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.kd(C.h,b,C.e,!0))}}}
P.kb.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.b_(b),r=this.a;s.t();)r.$2(a,s.gB(s))}}
P.jr.prototype={
ge2:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.c(m,0)
s=o.a
m=m[0]+1
r=C.a.bo(s,"?",m)
q=s.length
if(r>=0){p=P.dt(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fz("data","",n,n,P.dt(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kl.prototype={
$1:function(a){return new Uint8Array(96)}}
P.kk.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.c(s,a)
s=s[a]
J.nM(s,0,96,b)
return s},
$S:18}
P.km.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.C(b,q)^96
if(p>=r)return H.c(a,p)
a[p]=c}}}
P.kn.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.C(b,0),r=C.a.C(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.c(a,p)
a[p]=c}}}
P.h2.prototype={
gdv:function(){return this.c>0},
gdz:function(){return this.c>0&&this.d+1<this.e},
gdA:function(){return this.f<this.r},
gdw:function(){return this.r<this.a.length},
gcO:function(){return this.b===4&&C.a.a3(this.a,"http")},
gcP:function(){return this.b===5&&C.a.a3(this.a,"https")},
gby:function(){var s=this.x
return s==null?this.x=this.eE():s},
eE:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gcO())return"http"
if(s.gcP())return"https"
if(r===4&&C.a.a3(s.a,"file"))return"file"
if(r===7&&C.a.a3(s.a,"package"))return"package"
return C.a.q(s.a,0,r)},
ge3:function(){var s=this.c,r=this.b+3
return s>r?C.a.q(this.a,r,s-1):""},
gcg:function(a){var s=this.c
return s>0?C.a.q(this.a,s,this.d):""},
gbs:function(a){var s=this
if(s.gdz())return P.kC(C.a.q(s.a,s.d+1,s.e),null)
if(s.gcO())return 80
if(s.gcP())return 443
return 0},
gdR:function(a){return C.a.q(this.a,this.e,this.f)},
gbb:function(a){var s=this.f,r=this.r
return s<r?C.a.q(this.a,s+1,r):""},
gcf:function(){var s=this.r,r=this.a
return s<r.length?C.a.a6(r,s+1):""},
gcm:function(){var s=this
if(s.f>=s.r)return C.a_
return new P.c5(P.mx(s.gbb(s)),t.U)},
dW:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gby(),k=l==="file",j=n.c,i=j>0?C.a.q(n.a,n.b+3,j):"",h=n.gdz()?n.gbs(n):m
j=n.c
if(j>0)s=C.a.q(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.q(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a3(r,"/"))r="/"+r
p=P.lr(m,0,0,b)
q=n.r
o=q<j.length?C.a.a6(j,q+1):m
return new P.bG(l,i,s,h,r,p,o)},
gS:function(a){var s=this.y
return s==null?this.y=C.a.gS(this.a):s},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifm:1}
P.fz.prototype={}
W.r.prototype={}
W.hE.prototype={
gm:function(a){return a.length}}
W.dF.prototype={
i:function(a){return String(a)}}
W.dG.prototype={
i:function(a){return String(a)}}
W.bL.prototype={$ibL:1}
W.bp.prototype={$ibp:1}
W.bq.prototype={$ibq:1}
W.br.prototype={
cs:function(a,b,c){if(c!=null)return a.getContext(b,P.qm(c))
return a.getContext(b)},
e7:function(a,b){return this.cs(a,b,null)},
$ibr:1}
W.ax.prototype={
gm:function(a){return a.length}}
W.hO.prototype={
gm:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.cn.prototype={
gm:function(a){return a.length}}
W.hP.prototype={}
W.am.prototype={}
W.aL.prototype={}
W.hQ.prototype={
gm:function(a){return a.length}}
W.hR.prototype={
gm:function(a){return a.length}}
W.hS.prototype={
gm:function(a){return a.length}}
W.b4.prototype={$ib4:1}
W.hT.prototype={
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
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaK(a))+" x "+H.f(this.gaE(a))},
p:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aH(b)
s=a.left==s.gbr(b)&&a.top==s.gbu(b)&&this.gaK(a)==s.gaK(b)&&this.gaE(a)==s.gaE(b)}else s=!1
return s},
gS:function(a){return W.mK(J.ad(a.left),J.ad(a.top),J.ad(this.gaK(a)),J.ad(this.gaE(a)))},
gd9:function(a){return a.bottom},
gaE:function(a){return a.height},
gbr:function(a){return a.left},
gcq:function(a){return a.right},
gbu:function(a){return a.top},
gaK:function(a){return a.width},
$ia6:1}
W.dY.prototype={
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
W.hU.prototype={
gm:function(a){return a.length}}
W.fw.prototype={
gbp:function(a){return this.a.firstElementChild==null},
gm:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var s=this.ip(this)
return new J.a8(s,s.length)}}
W.D.prototype={
ghk:function(a){return new W.fE(a)},
gda:function(a){return new W.fw(a,a.children)},
gdc:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.aa()
if(q<0)q=-q*0
if(typeof p!=="number")return p.aa()
if(p<0)p=-p*0
return new P.a6(s,r,q,p,t.q)},
i:function(a){return a.localName},
ae:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.m_
if(s==null){s=H.d([],t.Q)
r=new W.cP(s)
s.push(W.mI(null))
s.push(W.mO())
$.m_=r
d=r}else d=s
s=$.lZ
if(s==null){s=new W.ho(d)
$.lZ=s
c=s}else{s.a=d
c=s}}if($.b5==null){s=document
r=s.implementation.createHTMLDocument("")
$.b5=r
$.l1=r.createRange()
r=$.b5.createElement("base")
t.D.a(r)
r.href=s.baseURI
$.b5.head.appendChild(r)}s=$.b5
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.b5
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.b5.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.D(C.Y,a.tagName)){$.l1.selectNodeContents(q)
s=$.l1
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.b5.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.b5.body)J.lN(q)
c.ct(p)
document.adoptNode(p)
return p},
ht:function(a,b,c){return this.ae(a,b,c,null)},
e9:function(a,b){a.textContent=null
a.appendChild(this.ae(a,b,null,null))},
gdZ:function(a){return a.tagName},
$iD:1}
W.hX.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.e.prototype={
hd:function(a,b,c,d){if(c!=null)this.ey(a,b,c,!1)},
ey:function(a,b,c,d){return a.addEventListener(b,H.cf(c,1),!1)},
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
W.e0.prototype={
gm:function(a){return a.length}}
W.e2.prototype={
gm:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.i9.prototype={
gm:function(a){return a.length}}
W.bw.prototype={
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
W.bx.prototype={
gde:function(a){return a.data},
$ibx:1}
W.bR.prototype={$ibR:1}
W.bT.prototype={$ibT:1}
W.bz.prototype={$ibz:1}
W.il.prototype={
i:function(a){return String(a)}}
W.iE.prototype={
gm:function(a){return a.length}}
W.bU.prototype={$ibU:1}
W.ek.prototype={
h:function(a,b){return P.bj(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bj(s.value[1]))}},
gZ:function(a){var s=H.d([],t.s)
this.F(a,new W.iF(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iI:1}
W.iF.prototype={
$2:function(a,b){return this.a.push(a)}}
W.el.prototype={
h:function(a,b){return P.bj(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bj(s.value[1]))}},
gZ:function(a){var s=H.d([],t.s)
this.F(a,new W.iG(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iI:1}
W.iG.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aB.prototype={$iaB:1}
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
gaL:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.b(P.le("No elements"))
if(r>1)throw H.b(P.le("More than one element"))
s=s.firstChild
s.toString
return s},
ac:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.c(r,b)
s.replaceChild(c,r[b])},
gR:function(a){var s=this.a.childNodes
return new W.cu(s,s.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.c(s,b)
return s[b]}}
W.v.prototype={
ib:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
ih:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nJ(s,b,a)}catch(q){H.ac(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.ee(a):s},
fS:function(a,b,c){return a.replaceChild(b,c)},
$iv:1}
W.cO.prototype={
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
W.aC.prototype={
gm:function(a){return a.length},
$iaC:1}
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
h:function(a,b){return P.bj(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bj(s.value[1]))}},
gZ:function(a){var s=H.d([],t.s)
this.F(a,new W.iU(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iI:1}
W.iU.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eL.prototype={
gm:function(a){return a.length}}
W.aq.prototype={$iaq:1}
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
W.aD.prototype={$iaD:1}
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
W.aE.prototype={
gm:function(a){return a.length},
$iaE:1}
W.eU.prototype={
h:function(a,b){return a.getItem(H.lv(b))},
l:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gZ:function(a){var s=H.d([],t.s)
this.F(a,new W.j4(s))
return s},
gm:function(a){return a.length},
$iI:1}
W.j4.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ar.prototype={$iar:1}
W.bc.prototype={$ibc:1}
W.cW.prototype={
ae:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bz(a,b,c,d)
s=W.o3("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.a0(r).ac(0,new W.a0(s))
return r}}
W.eY.prototype={
ae:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bz(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.ae(s.createElement("table"),b,c,d)
s.toString
s=new W.a0(s)
q=s.gaL(s)
q.toString
s=new W.a0(q)
p=s.gaL(s)
r.toString
p.toString
new W.a0(r).ac(0,new W.a0(p))
return r}}
W.eZ.prototype={
ae:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bz(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.ae(s.createElement("table"),b,c,d)
s.toString
s=new W.a0(s)
q=s.gaL(s)
r.toString
q.toString
new W.a0(r).ac(0,new W.a0(q))
return r}}
W.c3.prototype={$ic3:1}
W.as.prototype={$ias:1}
W.aa.prototype={$iaa:1}
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
W.f2.prototype={
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
W.jb.prototype={
gm:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.bD.prototype={$ibD:1}
W.f7.prototype={
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
W.jf.prototype={
gm:function(a){return a.length}}
W.aV.prototype={}
W.jw.prototype={
i:function(a){return String(a)}}
W.fq.prototype={
gm:function(a){return a.length}}
W.bf.prototype={
ghx:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.A("deltaY is not supported"))},
ghw:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.A("deltaX is not supported"))},
$ibf:1}
W.c6.prototype={
fT:function(a,b){return a.requestAnimationFrame(H.cf(b,1))},
eL:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.c7.prototype={$ic7:1}
W.fx.prototype={
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
W.d5.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
p:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aH(b)
s=a.left==s.gbr(b)&&a.top==s.gbu(b)&&a.width==s.gaK(b)&&a.height==s.gaE(b)}else s=!1
return s},
gS:function(a){return W.mK(J.ad(a.left),J.ad(a.top),J.ad(a.width),J.ad(a.height))},
gaE:function(a){return a.height},
gaK:function(a){return a.width}}
W.fM.prototype={
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
W.da.prototype={
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
W.h5.prototype={
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
W.hc.prototype={
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
W.fu.prototype={
F:function(a,b){var s,r,q,p,o
for(s=this.gZ(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
gZ:function(a){var s,r,q,p,o=this.a.attributes,n=H.d([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.c(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fE.prototype={
h:function(a,b){return this.a.getAttribute(H.lv(b))},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.gZ(this).length}}
W.l2.prototype={}
W.fH.prototype={
ha:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nK(s,this.c,r,!1)}}}
W.jV.prototype={
$1:function(a){return this.a.$1(a)}}
W.lj.prototype={}
W.c8.prototype={
ep:function(a){var s
if($.d6.gbp($.d6)){for(s=0;s<262;++s)$.d6.l(0,C.X[s],W.qv())
for(s=0;s<12;++s)$.d6.l(0,C.n[s],W.qw())}},
aR:function(a){return $.nF().D(0,W.cr(a))},
as:function(a,b,c){var s=$.d6.h(0,H.f(W.cr(a))+"::"+b)
if(s==null)s=$.d6.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaj:1}
W.L.prototype={
gR:function(a){return new W.cu(a,this.gm(a))}}
W.cP.prototype={
aR:function(a){return C.b.d3(this.a,new W.iJ(a))},
as:function(a,b,c){return C.b.d3(this.a,new W.iI(a,b,c))},
$iaj:1}
W.iJ.prototype={
$1:function(a){return a.aR(this.a)}}
W.iI.prototype={
$1:function(a){return a.as(this.a,this.b,this.c)}}
W.dg.prototype={
es:function(a,b,c,d){var s,r,q
this.a.ac(0,c)
s=b.bx(0,new W.k2())
r=b.bx(0,new W.k3())
this.b.ac(0,s)
q=this.c
q.ac(0,C.w)
q.ac(0,r)},
aR:function(a){return this.a.D(0,W.cr(a))},
as:function(a,b,c){var s=this,r=W.cr(a),q=s.c
if(q.D(0,H.f(r)+"::"+b))return s.d.hh(c)
else if(q.D(0,"*::"+b))return s.d.hh(c)
else{q=s.b
if(q.D(0,H.f(r)+"::"+b))return!0
else if(q.D(0,"*::"+b))return!0
else if(q.D(0,H.f(r)+"::*"))return!0
else if(q.D(0,"*::*"))return!0}return!1},
$iaj:1}
W.k2.prototype={
$1:function(a){return!C.b.D(C.n,a)}}
W.k3.prototype={
$1:function(a){return C.b.D(C.n,a)}}
W.he.prototype={
as:function(a,b,c){if(this.eh(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.D(0,b)
return!1}}
W.k8.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.hd.prototype={
aR:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cr(a)==="foreignObject")return!1
if(s)return!0
return!1},
as:function(a,b,c){if(b==="is"||C.a.a3(b,"on"))return!1
return this.aR(a)},
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
W.k1.prototype={}
W.ho.prototype={
ct:function(a){var s=this,r=new W.kg(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
b1:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.lN(a)
else b.removeChild(a)},
fY:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.nN(a)
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
try{r=J.a5(a)}catch(p){H.ac(p)}try{q=W.cr(a)
this.fX(a,b,n,r,q,m,l)}catch(p){if(H.ac(p) instanceof P.ae)throw p
else{this.b1(a,b)
window
o="Removing corrupted element "+H.f(r)
if(typeof console!="undefined")window.console.warn(o)}}},
fX:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.b1(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aR(a)){m.b1(a,b)
window
s="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.as(a,"is",g)){m.b1(a,b)
window
s="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.gZ(f)
r=H.d(s.slice(0),H.lu(s).J("w<1>"))
for(q=f.gZ(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.c(r,q)
p=r[q]
o=m.a
n=J.nR(p)
H.lv(p)
if(!o.as(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.ct(a.content)}}
W.kg.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.fY(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.b1(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.le("Corrupt HTML")
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
W.fy.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fC.prototype={}
W.fD.prototype={}
W.fJ.prototype={}
W.fK.prototype={}
W.fN.prototype={}
W.fO.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h1.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h9.prototype={}
W.hf.prototype={}
W.hg.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.hh.prototype={}
W.hi.prototype={}
W.hp.prototype={}
W.hq.prototype={}
W.hr.prototype={}
W.hs.prototype={}
W.ht.prototype={}
W.hu.prototype={}
W.hv.prototype={}
W.hw.prototype={}
W.hx.prototype={}
W.hy.prototype={}
P.k4.prototype={
cc:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bw:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.lx(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ag)return new Date(a.a)
if(t.fv.b(a))throw H.b(P.jq("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.F.b(a))return a
if(t.bX.b(a))return a
if(t.v.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.cc(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.c(r,s)
r[s]=p
J.kW(a,new P.k6(n,o))
return n.a}if(t.aH.b(a)){s=o.cc(a)
n=o.b
if(s>=n.length)return H.c(n,s)
p=n[s]
if(p!=null)return p
return o.hs(a,s)}if(t.eH.b(a)){s=o.cc(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.c(r,s)
r[s]=p
o.hM(a,new P.k7(n,o))
return n.b}throw H.b(P.jq("structured clone of other type"))},
hs:function(a,b){var s,r=J.aY(a),q=r.gm(a),p=new Array(q),o=this.b
if(b>=o.length)return H.c(o,b)
o[b]=p
if(typeof q!=="number")return H.y(q)
s=0
for(;s<q;++s){o=this.bw(r.h(a,s))
if(s>=p.length)return H.c(p,s)
p[s]=o}return p}}
P.k6.prototype={
$2:function(a,b){this.a.a[a]=this.b.bw(b)},
$S:3}
P.k7.prototype={
$2:function(a,b){this.a.b[a]=this.b.bw(b)},
$S:3}
P.dp.prototype={$ibx:1,
gde:function(a){return this.a}}
P.kr.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.k5.prototype={
hM:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e1.prototype={
gbi:function(){var s=this.b,r=H.dw(s)
return new H.aO(new H.aW(s,new P.i5(),r.J("aW<i.E>")),new P.i6(),r.J("aO<i.E,D>"))},
l:function(a,b,c){var s=this.gbi()
J.nP(s.b.$1(J.hD(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.aI(this.gbi().a)},
h:function(a,b){var s=this.gbi()
return s.b.$1(J.hD(s.a,b))},
gR:function(a){var s=P.la(this.gbi(),!1,t.h)
return new J.a8(s,s.length)}}
P.i5.prototype={
$1:function(a){return t.h.b(a)}}
P.i6.prototype={
$1:function(a){return t.h.a(a)}}
P.h0.prototype={
gcq:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.y(r)
return this.$ti.c.a(s+r)},
gd9:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.y(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
p:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.q.b(b)){s=n.a
r=J.aH(b)
if(s==r.gbr(b)){q=n.b
if(q==r.gbu(b)){p=n.c
if(typeof s!=="number")return s.v()
if(typeof p!=="number")return H.y(p)
o=n.$ti.c
if(o.a(s+p)===r.gcq(b)){s=n.d
if(typeof q!=="number")return q.v()
if(typeof s!=="number")return H.y(s)
r=o.a(q+s)===r.gd9(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gS:function(a){var s,r=this,q=r.a,p=J.ad(q),o=r.b,n=J.ad(o),m=r.c
if(typeof q!=="number")return q.v()
if(typeof m!=="number")return H.y(m)
s=r.$ti.c
m=C.c.gS(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.v()
if(typeof q!=="number")return H.y(q)
q=C.c.gS(s.a(o+q))
return P.oV(P.jX(P.jX(P.jX(P.jX(0,p),n),m),q))}}
P.a6.prototype={
gbr:function(a){return this.a},
gbu:function(a){return this.b},
gaK:function(a){return this.c},
gaE:function(a){return this.d}}
P.aN.prototype={$iaN:1}
P.ed.prototype={
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
P.iM.prototype={
gm:function(a){return a.length}}
P.c1.prototype={$ic1:1}
P.eW.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.m.prototype={
gda:function(a){return new P.e1(a,new W.a0(a))},
ae:function(a,b,c,d){var s,r,q,p,o,n=H.d([],t.Q)
n.push(W.mI(null))
n.push(W.mO())
n.push(new W.hd())
c=new W.ho(new W.cP(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.p.ht(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.a0(q)
o=n.gaL(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.aT.prototype={$iaT:1}
P.f8.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.fP.prototype={}
P.fQ.prototype={}
P.fX.prototype={}
P.fY.prototype={}
P.ha.prototype={}
P.hb.prototype={}
P.hj.prototype={}
P.hk.prototype={}
P.bd.prototype={$ik:1,$ih:1,$in:1}
P.hH.prototype={
gm:function(a){return a.length}}
P.dJ.prototype={
h:function(a,b){return P.bj(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bj(s.value[1]))}},
gZ:function(a){var s=H.d([],t.s)
this.F(a,new P.hI(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.A("Not supported"))},
$iI:1}
P.hI.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dK.prototype={
gm:function(a){return a.length}}
P.b1.prototype={}
P.ev.prototype={
gm:function(a){return a.length}}
P.fv.prototype={}
P.eI.prototype={
im:function(a,b,c,d,e,f,g){var s
if(t.v.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.qn(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.bK("Incorrect number or type of arguments"))}}
P.eR.prototype={
gm:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.b(P.N(b,a,null,null,null))
s=P.bj(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.A("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.h6.prototype={}
P.h7.prototype={}
K.b0.prototype={
aF:function(a,b){return!0},
i:function(a){return"all"}}
K.e4.prototype={
aF:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aF(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.ip.prototype={}
K.a9.prototype={
aF:function(a,b){return!this.ed(0,b)},
i:function(a){return"!["+this.cw(0)+"]"}}
K.iP.prototype={
aF:function(a,b){if(typeof b!=="number")return H.y(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.ao(this.a),r=H.ao(this.b)
return s+".."+r}}
K.iV.prototype={
el:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.u("May not create a Set with zero characters."))
s=new H.C(t.E)
for(r=new H.b9(a,a.gm(a));r.t();){q=r.d
s.l(0,q,!0)}p=P.la(s.gZ(s),!0,t.e)
C.b.ec(p)
this.a=p},
aF:function(a,b){return C.b.D(this.a,b)},
i:function(a){return P.eX(this.a,0,null)}}
L.eS.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.f9(this.a.k(0,b))
p.a=H.d([],t.B)
p.c=!1
this.c.push(p)
return p},
hH:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aF(0,a))return p}return null},
i:function(a){return this.b},
cY:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.D(0,l))m+=" (consume)"
for(l=n.d.c,l=l.gZ(l),l=l.gR(l);l.t();){r=l.gB(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.D(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.f5.prototype={
i:function(a){var s=H.lI(this.b,"\n","\\n"),r=H.lI(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.f6.prototype={
aH:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.o)(c),++r){q=c[r]
this.c.l(0,q,b)}},
i:function(a){return this.b}}
L.jc.prototype={
k:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eS(this,b)
s.c=H.d([],t.br)
this.a.l(0,b,s)}return s},
O:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.f6(a)
s.c=new H.C(t.dO)
this.b.l(0,a,s)}return s},
cr:function(a){return this.is(a)},
is:function(a){var s=this
return P.pK(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cr(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.d([],c)
a0=H.d([],c)
a1=H.d([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.cn(a1,0)
else{if(!r.t()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hH(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.eX(a0,0,null)
throw H.b(P.u("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.q(P.A("removeRange"))
P.bb(0,k,a0.length)
a0.splice(0,k-0)
C.b.ac(a1,a0)
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
if(d.d!=null){g=P.eX(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.f5(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.D(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.oT()
case 1:return P.oU(o)}}},t.eB)},
i:function(a){var s,r=new P.S(""),q=this.d
if(q!=null)r.a=q.cY()+"\n"
for(q=this.a,q=q.giu(q),q=q.gR(q);q.t();){s=q.gB(q)
if(s!=this.d)r.a+=s.cY()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.f9.prototype={
i:function(a){return this.b.b+": "+this.cw(0)}}
O.af.prototype={
bA:function(a){this.a=H.d([],a.J("w<0*>"))
this.c=this.b=null},
cu:function(a,b,c){this.b=b
this.c=a},
be:function(a,b){return this.cu(a,null,b)},
fC:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
eo:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gm:function(a){return this.a.length},
gR:function(a){var s=this.a
return new J.a8(s,s.length)},
H:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.c(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.dw(q).J("w<af.T*>")
if(q.fC(H.d([b],p))){s=q.a
r=s.length
s.push(b)
q.eo(r,H.d([b],p))}},
$ih:1}
O.cK.prototype={
gm:function(a){return this.a.length},
gw:function(){var s=this.b
return s==null?this.b=D.P():s},
aM:function(){var s=this.b
if(s!=null)s.I(null)},
ga_:function(a){var s=this.a
if(s.length>0)return C.b.gav(s)
else return V.ej()},
dU:function(a){var s=this.a
if(a==null)s.push(V.ej())
else s.push(a)
this.aM()},
cl:function(){var s=this.a
if(s.length>0){s.pop()
this.aM()}}}
E.hL.prototype={}
E.bv.prototype={
sal:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gw().L(0,q.gdO())
s=q.c
if(s!=null)s.gw().n(0,q.gdO())
r=new D.E("shape",p,q.c)
r.b=!0
q.aG(r)}},
sag:function(a){var s,r,q=this
if(!J.G(q.r,a)){s=q.r
if(s!=null)s.gw().L(0,q.gdM())
if(a!=null)a.gw().n(0,q.gdM())
q.r=a
r=new D.E("mover",s,a)
r.b=!0
q.aG(r)}},
aJ:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.ax(0,b,q):null
if(!J.G(o,q.x)){s=q.x
q.x=o
r=new D.E("matrix",s,o)
r.b=!0
q.aG(r)}for(p=q.y.a,p=new J.a8(p,p.length);p.t();)p.d.aJ(0,b)},
aV:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga_(q))
else o.push(p.A(0,q.ga_(q)))
q.aM()
a.dV(r.f)
q=a.dy
s=(q&&C.b).gav(q)
if(s!=null&&r.d!=null)s.ig(a,r)
for(q=r.y.a,q=new J.a8(q,q.length);q.t();)q.d.aV(a)
a.dT()
a.dx.cl()},
aG:function(a){var s=this.z
if(s!=null)s.I(a)},
Y:function(){return this.aG(null)},
dP:function(a){this.e=null
this.aG(a)},
i1:function(){return this.dP(null)},
dN:function(a){this.aG(a)},
i0:function(){return this.dN(null)},
dL:function(a){this.aG(a)},
hY:function(){return this.dL(null)},
hX:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdK(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bO()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.Y()},
i_:function(a,b){var s,r
for(s=b.gR(b),r=this.gdK();s.t();)s.gB(s).gw().L(0,r)
this.Y()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bN.prototype={
i:function(a){return this.b}}
E.bZ.prototype={
i:function(a){return this.b}}
E.fF.prototype={}
E.iQ.prototype={
ek:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ag(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cK()
r=t.h8
s.a=H.d([],r)
s.gw().n(0,new E.iR(q))
q.cy=s
s=new O.cK()
s.a=H.d([],r)
s.gw().n(0,new E.iS(q))
q.db=s
s=new O.cK()
s.a=H.d([],r)
s.gw().n(0,new E.iT(q))
q.dx=s
s=H.d([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.C(t.h9)},
gia:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga_(q)
s=r.db
s=r.z=q.A(0,s.ga_(s))
q=s}return q},
dV:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gav(s):a)},
dT:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.iR.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.iS.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.iT.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.cU.prototype={}
E.f4.prototype={
cD:function(a){this.dX()},
cC:function(){return this.cD(null)},
ghN:function(){var s,r=this,q=Date.now(),p=C.c.a1(P.lY(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ag(q,!1)
return s/p},
cT:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.A()
if(typeof p!=="number")return H.y(p)
s=C.d.ce(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.A()
r=C.d.ce(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.mr(C.m,q.gii())}},
dX:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.F.eL(s)
r=W.n4(new E.ja(this),t.H)
r.toString
C.F.fT(s,r)}},
ie:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cT()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ag(p,!1)
q.y=P.lY(p-q.r.a).a*0.000001
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
m.aV(n.e)}q=n.Q
if(q!=null)q.I(null)}catch(o){s=H.ac(o)
r=H.lD(o)
P.lH("Error: "+H.f(s))
P.lH("Stack: "+H.f(r))
throw H.b(s)}}}
E.ja.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ie()}}}
Z.fr.prototype={}
Z.dN.prototype={
bY:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ac(q)
r=P.u('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.jQ.prototype={}
Z.dO.prototype={
aU:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
bY:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].bY(a)},
it:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aV:function(a){var s,r,q,p,o,n=this.b.length
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
Z.bS.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eF(this.c))+"'")+"]"}}
Z.be.prototype={
gcv:function(a){var s=this.a,r=(s&$.bn().a)!==0?3:0
if((s&$.bm().a)!==0)r+=3
if((s&$.bl().a)!==0)r+=3
if((s&$.bo().a)!==0)r+=2
if((s&$.bJ().a)!==0)r+=3
if((s&$.dC().a)!==0)r+=3
if((s&$.dD().a)!==0)r+=4
if((s&$.ci().a)!==0)++r
return(s&$.bk().a)!==0?r+4:r},
hi:function(a){var s,r=$.bn(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bm()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bl()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bo()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bJ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dC()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dD()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ci()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bk()
if((q&r.a)!==0)if(s===a)return r
return $.nD()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.be))return!1
return this.a===b.a},
i:function(a){var s=H.d([],t.i),r=this.a
if((r&$.bn().a)!==0)s.push("Pos")
if((r&$.bm().a)!==0)s.push("Norm")
if((r&$.bl().a)!==0)s.push("Binm")
if((r&$.bo().a)!==0)s.push("Txt2D")
if((r&$.bJ().a)!==0)s.push("TxtCube")
if((r&$.dC().a)!==0)s.push("Clr3")
if((r&$.dD().a)!==0)s.push("Clr4")
if((r&$.ci().a)!==0)s.push("Weight")
if((r&$.bk().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hM.prototype={}
D.bO.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=H.d([],t.f):s).push(b)},
L:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.D(q,b)
if(q===!0){q=r.a
s=(q&&C.b).L(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.D(q,b)
if(q===!0){q=r.b
s=(q&&C.b).L(q,b)||s}return s},
I:function(a){var s,r,q,p=this,o={}
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
return!0}if(!r)C.b.F(P.la(s,!0,t.dm),new D.i2(o))
s=p.b
if(s!=null){p.b=H.d([],t.f)
C.b.F(s,new D.i3(o))}return!0},
hD:function(){return this.I(null)},
ai:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.I(s)}}}}
D.i2.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.i3.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.U.prototype={}
D.b6.prototype={}
D.b7.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dP.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dP))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.eb.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eb))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ig.prototype={
i6:function(a){this.d.n(0,a.a)
return!1},
i2:function(a){this.d.L(0,a.a)
return!1}}
X.cE.prototype={}
X.im.prototype={
b_:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.A()
s=b.b
r=o.ch
if(typeof s!=="number")return s.A()
q=new V.ak(m.a+l*k,m.b+s*r)
r=o.a.gbl()
p=new X.bW(a,V.bB(),o.x,r,q)
p.b=!0
o.z=new P.ag(n,!1)
o.x=q
return p},
ck:function(a,b){this.r=a.a
return!1},
ba:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.e8()
if(typeof s!=="number")return s.a9()
this.r=(s&~r)>>>0
return!1},
b9:function(a,b){var s=this.d
if(s==null)return!1
s.I(this.b_(a,b))
return!0},
i7:function(a){return!1},
fo:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cE(c,p.a.gbl(),b)
q.b=!0
r.I(q)
p.y=new P.ag(s,!1)
p.x=V.bB()}}
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
X.iH.prototype={
bI:function(a,b,c){var s=this,r=new P.ag(Date.now(),!1),q=s.a.gbl(),p=new X.bW(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
ck:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.I(this.bI(a,b,!0))
return!0},
ba:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.e8()
if(typeof r!=="number")return r.a9()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.I(s.bI(a,b,!0))
return!0},
b9:function(a,b){var s=this.d
if(s==null)return!1
s.I(this.bI(a,b,!1))
return!0},
i8:function(a,b){return!1}}
X.eD.prototype={}
X.cY.prototype={}
X.je.prototype={
b_:function(a,b){var s=this,r=new P.ag(Date.now(),!1),q=a.length>0?a[0]:V.bB(),p=s.a.gbl(),o=new X.cY(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
i5:function(a){var s=this.b
if(s==null)return!1
s.I(this.b_(a,!0))
return!0},
i3:function(a){var s=this.c
if(s==null)return!1
s.I(this.b_(a,!0))
return!0},
i4:function(a){var s=this.d
if(s==null)return!1
s.I(this.b_(a,!1))
return!0}}
X.fn.prototype={
gbl:function(){var s=this.a,r=C.i.gdc(s).c
r.toString
s=C.i.gdc(s).d
s.toString
return V.mk(0,0,r,s)},
cK:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.eb(s,new X.bV(r,a.altKey,a.shiftKey))},
aP:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
bS:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
aC:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.X()
if(typeof o!=="number")return H.y(o)
s=r.top
if(typeof p!=="number")return p.X()
if(typeof s!=="number")return H.y(s)
return new V.ak(q-o,p-s)},
b0:function(a){return new V.at(a.movementX,a.movementY)},
bN:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.d([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=C.d.an(p.pageX)
C.d.an(p.pageY)
n=k.left
if(typeof n!=="number")return H.y(n)
C.d.an(p.pageX)
m=C.d.an(p.pageY)
l=k.top
if(typeof l!=="number")return H.y(l)
j.push(new V.ak(o-n,m-l))}return j},
aA:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dP(s,new X.bV(r,a.altKey,a.shiftKey))},
bJ:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.X()
if(typeof n!=="number")return H.y(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.X()
if(typeof p!=="number")return H.y(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.y(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.y(p)
p=r<p}else p=!1
return p},
fi:function(a){this.f=!0},
f6:function(a){this.f=!1},
fc:function(a){if(this.f&&this.bJ(a))a.preventDefault()},
fm:function(a){var s
if(!this.f)return
s=this.cK(a)
this.b.i6(s)},
fk:function(a){var s
if(!this.f)return
s=this.cK(a)
this.b.i2(s)},
fq:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aP(a)
if(p.x){s=p.aA(a)
r=p.b0(a)
if(p.d.ck(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aA(a)
q=p.aC(a)
if(p.c.ck(s,q))a.preventDefault()},
fv:function(a){var s,r,q,p=this
p.aP(a)
s=p.aA(a)
if(p.x){r=p.b0(a)
if(p.d.ba(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.c.ba(s,q))a.preventDefault()},
fg:function(a){var s,r,q,p=this
if(!p.bJ(a)){p.aP(a)
s=p.aA(a)
if(p.x){r=p.b0(a)
if(p.d.ba(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.c.ba(s,q))a.preventDefault()}},
ft:function(a){var s,r,q,p=this
p.aP(a)
s=p.aA(a)
if(p.x){r=p.b0(a)
if(p.d.b9(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.c.b9(s,q))a.preventDefault()},
fe:function(a){var s,r,q,p=this
if(!p.bJ(a)){p.aP(a)
s=p.aA(a)
if(p.x){r=p.b0(a)
if(p.d.b9(s,r))a.preventDefault()
return}if(p.r)return
q=p.aC(a)
if(p.c.b9(s,q))a.preventDefault()}},
fz:function(a){var s,r,q=this
q.aP(a)
s=new V.at((a&&C.E).ghw(a),C.E.ghx(a)).A(0,q.Q)
if(q.x){if(q.d.i7(s))a.preventDefault()
return}if(q.r)return
r=q.aC(a)
if(q.c.i8(s,r))a.preventDefault()},
fB:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aA(q.y)
r=q.aC(q.y)
q.d.fo(s,r,p)}},
fO:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bS(a)
s=r.bN(a)
if(r.e.i5(s))a.preventDefault()},
fK:function(a){var s
this.bS(a)
s=this.bN(a)
if(this.e.i3(s))a.preventDefault()},
fM:function(a){var s
this.bS(a)
s=this.bN(a)
if(this.e.i4(s))a.preventDefault()}}
D.dL.prototype={$iV:1}
D.bt.prototype={
ay:function(a){var s=this.r
if(s!=null)s.I(a)},
eq:function(){return this.ay(null)},
sag:function(a){var s,r,q=this
if(!J.G(q.b,a)){s=q.b
if(s!=null)s.gw().L(0,q.gcE())
r=q.b
q.b=a
if(a!=null)a.gw().n(0,q.gcE())
s=new D.E("mover",r,q.b)
s.b=!0
q.ay(s)}},
sad:function(a,b){var s,r,q=this
if(b==null)b=new V.T(1,1,1)
if(!q.c.p(0,b)){s=q.c
q.c=b
r=new D.E("color",s,b)
r.b=!0
q.ay(r)}},
$iV:1}
D.V.prototype={}
D.cz.prototype={
ay:function(a){var s=this.y
if(s!=null)s.I(a)},
cR:function(a){var s=this.z
if(s!=null)s.I(a)},
fn:function(){return this.cR(null)},
fE:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(q==null||this.eF(q))return!1}return!0},
f0:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcQ(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o instanceof D.bt)this.f.push(o)
n=o.r
if(n==null){n=new D.bO()
n.d=0
o.r=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}s=new D.b6()
s.b=!0
this.ay(s)},
fI:function(a,b){var s,r,q
for(s=b.gR(b),r=this.gcQ();s.t();){q=s.gB(s)
C.b.L(this.e,q)
q.gw().L(0,r)}s=new D.b7()
s.b=!0
this.ay(s)},
eF:function(a){var s=C.b.D(this.f,a)
return s}}
D.eC.prototype={$iV:1}
D.eP.prototype={$iV:1}
V.T.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.T))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.aK.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aK))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+"]"}}
V.i0.prototype={}
V.cJ.prototype={
a8:function(a,b){var s=this,r=H.d([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cJ))return!1
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
V.ba.prototype={
a8:function(a,b){var s=this,r=H.d([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
dE:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.F().toString
if(Math.abs(b3-0)<1e-9)return V.ej()
s=1/b3
r=-l
q=-a2
return V.aQ((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
A:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aQ(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bv:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.B(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bc:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.Q(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ba))return!1
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
i:function(a){return this.N()},
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
N:function(){return this.E("")}}
V.ak.prototype={
aj:function(a){return new V.at(a.a-this.a,a.b-this.b)},
p:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.Q.prototype={
v:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
X:function(a,b){return new V.Q(this.a-b.a,this.b-b.b,this.c-b.c)},
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
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.bC.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bC))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+"]"}}
V.eH.prototype={
gaw:function(){var s=this.c,r=this.d
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
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+"]"}}
V.at.prototype={
ci:function(a){return Math.sqrt(this.a7(this))},
a7:function(a){var s,r,q=this.a,p=a.a
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
return new V.at(r*b,s*b)},
a4:function(a,b){var s,r
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.mA
return s==null?$.mA=new V.at(0,0):s}s=this.a
if(typeof s!=="number")return s.a4()
r=this.b
if(typeof r!=="number")return r.a4()
return new V.at(s/b,r/b)},
p:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.at))return!1
s=b.a
r=this.a
$.F().toString
if(typeof s!=="number")return s.X()
if(typeof r!=="number")return H.y(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.X()
if(typeof r!=="number")return H.y(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.B.prototype={
ci:function(a){return Math.sqrt(this.a7(this))},
a7:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cj:function(a,b){return new V.B(V.hB(this.a,a.a,b),V.hB(this.b,a.b,b),V.hB(this.c,a.c,b))},
G:function(){var s=this,r=Math.sqrt(s.a7(s))
if(r===1)return s
return s.a4(0,r)},
aD:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.B(s*r-q*p,q*o-n*r,n*p-s*o)},
v:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.B(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.B(this.a*b,this.b*b,this.c*b)},
a4:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.d4()
return new V.B(this.a/b,this.b/b,this.c/b)},
dF:function(){$.F().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.B))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
U.hN.prototype={
bB:function(a){var s=V.kT(a,this.c,this.b)
return s},
gw:function(){var s=this.y
return s==null?this.y=D.P():s},
P:function(a){var s=this.y
if(s!=null)s.I(a)},
se4:function(a,b){},
sdG:function(a){var s,r=this,q=r.b
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bB(s)}q=new D.E("maximumLocation",q,r.b)
q.b=!0
r.P(q)}},
sdI:function(a){var s,r=this,q=r.c
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bB(s)}q=new D.E("minimumLocation",q,r.c)
q.b=!0
r.P(q)}},
sa2:function(a,b){var s,r=this
b=r.bB(b)
s=r.d
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.E("location",s,b)
s.b=!0
r.P(s)}},
sdH:function(a){var s,r,q=this,p=q.e
$.F().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.E("maximumVelocity",p,a)
p.b=!0
q.P(p)}},
sW:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.E("velocity",r,a)
r.b=!0
s.P(r)}},
sdd:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.E("dampening",s,a)
s.b=!0
this.P(s)}},
aJ:function(a,b){var s,r,q,p=this,o=p.f
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
s=q}p.sW(s)}}}
U.ck.prototype={
gw:function(){var s=this.b
return s==null?this.b=D.P():s},
ax:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ck))return!1
return J.G(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.bQ.prototype={
gw:function(){var s=this.e
return s==null?this.e=D.P():s},
P:function(a){var s=this.e
if(s!=null)s.I(a)},
ap:function(){return this.P(null)},
eZ:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gbg(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.gw()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.b6()
s.b=!0
this.P(s)},
fG:function(a,b){var s,r
for(s=b.gR(b),r=this.gbg();s.t();)s.gB(s).gw().L(0,r)
s=new D.b7()
s.b=!0
this.P(s)},
ax:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.aa()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a8(p,p.length),s=null;p.t();){o=p.d
if(o!=null){r=o.ax(0,b,c)
if(r!=null)s=s==null?r:r.A(0,s)}}q.f=s==null?V.ej():s
p=q.e
if(p!=null)p.ai(0)}return q.f},
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
$ia3:1}
U.a3.prototype={}
U.cR.prototype={
gw:function(){var s=this.y
return s==null?this.y=D.P():s},
P:function(a){var s=this.y
if(s!=null)s.I(a)},
se5:function(a){var s
a=V.kT(a,0,6.283185307179586)
s=this.a
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.E("yaw",s,a)
s.b=!0
this.P(s)}},
sdS:function(a,b){var s
b=V.kT(b,0,6.283185307179586)
s=this.b
$.F().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.E("pitch",s,b)
s.b=!0
this.P(s)}},
sdY:function(a){var s
a=V.kT(a,0,6.283185307179586)
s=this.c
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.E("roll",s,a)
s.b=!0
this.P(s)}},
ax:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(p<o){q.r=o
p=q.y
if(p!=null)++p.d
q.se5(q.a+q.d*b.y)
q.sdS(0,q.b+q.e*b.y)
q.sdY(q.c+q.f*b.y)
p=q.c
s=Math.cos(p)
r=Math.sin(p)
q.x=V.aQ(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).A(0,V.m6(q.b)).A(0,V.lc(q.a))
p=q.y
if(p!=null)p.ai(0)}return q.x},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.cR))return!1
s=q.a
r=b.a
$.F().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+"], ["+V.H(s.d,3,0)+", "+V.H(s.e,3,0)+", "+V.H(s.f,3,0)+"]"}}
U.d3.prototype={
gw:function(){var s=this.fx
return s==null?this.fx=D.P():s},
P:function(a){var s=this.fx
if(s!=null)s.I(a)},
ap:function(){return this.P(null)},
hj:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.c
r=s.b
s=r==null?s.b=D.P():r
s.n(0,q.geS())
s=q.a.c
r=s.d
s=r==null?s.d=D.P():r
s.n(0,q.geU())
s=q.a.c
r=s.c
s=r==null?s.c=D.P():r
s.n(0,q.geW())
s=q.a.d
r=s.f
s=r==null?s.f=D.P():r
s.n(0,q.geN())
s=q.a.d
r=s.d
s=r==null?s.d=D.P():r
s.n(0,q.geP())
s=q.a.e
r=s.b
s=r==null?s.b=D.P():r
s.n(0,q.gh8())
s=q.a.e
r=s.d
s=r==null?s.d=D.P():r
s.n(0,q.gh6())
s=q.a.e
r=s.c
s=r==null?s.c=D.P():r
s.n(0,q.gh4())
return!0},
ar:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.T()
s=-s}if(this.r){if(typeof r!=="number")return r.T()
r=-r}return new V.at(s,r)},
eT:function(a){var s=this
t.d.a(a)
if(!J.G(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
eV:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.aj(a.d)
s=s.a7(s)
r=l.Q
if(typeof r!=="number")return H.y(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ar(a.y.aj(a.d).A(0,2).a4(0,s.gaw()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.T()
q=l.y
if(typeof q!=="number")return H.y(q)
r.sW(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.T()
r=l.x
if(typeof r!=="number")return H.y(r)
q.sW(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.ar(r.aj(q).A(0,2).a4(0,s.gaw()))
r=l.c
o=p.a
if(typeof o!=="number")return o.T()
n=l.y
if(typeof n!=="number")return H.y(n)
m=l.cy
if(typeof m!=="number")return H.y(m)
r.sa2(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.T()
o=l.x
if(typeof o!=="number")return H.y(o)
r=l.db
if(typeof r!=="number")return H.y(r)
m.sa2(0,-n*o+r)
l.b.sW(0)
l.c.sW(0)
l.dx=l.ar(a.z.aj(q).A(0,2).a4(0,s.gaw()))}l.ap()},
eX:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a7(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.T()
q=p.y
if(typeof q!=="number")return H.y(q)
s.sW(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.T()
s=p.x
if(typeof s!=="number")return H.y(s)
q.sW(-r*10*s)
p.ap()}},
eO:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eQ:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.G(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.ar(r.aj(q).A(0,2).a4(0,s.gaw()))
r=l.c
o=p.a
if(typeof o!=="number")return o.T()
n=l.y
if(typeof n!=="number")return H.y(n)
m=l.cy
if(typeof m!=="number")return H.y(m)
r.sa2(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.T()
o=l.x
if(typeof o!=="number")return H.y(o)
r=l.db
if(typeof r!=="number")return H.y(r)
m.sa2(0,-n*o+r)
l.b.sW(0)
l.c.sW(0)
l.dx=l.ar(a.z.aj(q).A(0,2).a4(0,s.gaw()))
l.ap()},
h9:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
h7:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.aj(a.d)
s=s.a7(s)
r=l.Q
if(typeof r!=="number")return H.y(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ar(a.y.aj(a.d).A(0,2).a4(0,s.gaw()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.T()
q=l.y
if(typeof q!=="number")return H.y(q)
r.sW(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.T()
r=l.x
if(typeof r!=="number")return H.y(r)
q.sW(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.ar(r.aj(q).A(0,2).a4(0,s.gaw()))
r=l.c
o=p.a
if(typeof o!=="number")return o.T()
n=l.y
if(typeof n!=="number")return H.y(n)
m=l.cy
if(typeof m!=="number")return H.y(m)
r.sa2(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.T()
o=l.x
if(typeof o!=="number")return H.y(o)
r=l.db
if(typeof r!=="number")return H.y(r)
m.sa2(0,-n*o+r)
l.b.sW(0)
l.c.sW(0)
l.dx=l.ar(a.z.aj(q).A(0,2).a4(0,s.gaw()))}l.ap()},
h5:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a7(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.T()
q=p.y
if(typeof q!=="number")return H.y(q)
s.sW(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.T()
s=p.x
if(typeof s!=="number")return H.y(s)
q.sW(-r*10*s)
p.ap()}},
ax:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.aa()
if(q<p){r.dy=p
s=b.y
r.c.aJ(0,s)
r.b.aJ(0,s)
r.fr=V.lc(r.b.d).A(0,V.m6(r.c.d))}return r.fr},
$ia3:1}
M.dZ.prototype={
az:function(a){var s=this.y
if(s!=null)s.I(a)},
er:function(){return this.az(null)},
f8:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaq(),q=t.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bO()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.b6()
s.b=!0
this.az(s)},
fa:function(a,b){var s,r
for(s=b.gR(b),r=this.gaq();s.t();)s.gB(s).gw().L(0,r)
s=new D.b7()
s.b=!0
this.az(s)},
se_:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gw().L(0,r.gaq())
s=r.d
r.d=a
if(a!=null)a.gw().n(0,r.gaq())
q=new D.E("technique",s,r.d)
q.b=!0
r.az(q)}},
gw:function(){var s=this.y
return s==null?this.y=D.P():s},
aV:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=new E.cU(a)
c.b=!0
s=d.f
if(s!=null)s.I(c)
a.dV(d.d)
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
if(typeof q!=="number")return H.y(q)
m=C.d.an(n*q)
n=o.b
if(typeof p!=="number")return H.y(p)
l=C.d.an(n*p)
n=C.d.an(o.c*q)
a.c=n
o=C.d.an(o.d*p)
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
g=V.aQ(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.dU(g)
r=$.ma
if(r==null){r=V.mc()
o=V.lh()
n=$.mB
r=V.m5(r,o,n==null?$.mB=new V.B(0,0,-1):n)
$.ma=r
f=r}else f=r
r=s.b
if(r!=null){e=r.ax(0,a,s)
if(e!=null)f=e.A(0,f)}a.db.dU(f)
s=d.d
if(s!=null)s.aJ(0,a)
for(s=d.e.a,s=new J.a8(s,s.length);s.t();)s.d.aJ(0,a)
for(s=d.e.a,s=new J.a8(s,s.length);s.t();)s.d.aV(a)
d.b.toString
a.cy.cl()
a.db.cl()
d.c.toString
a.dT()}}
A.dI.prototype={}
A.hG.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hE:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hy:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a1.prototype={
gao:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.a1))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.ei.prototype={
ej:function(c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8="uniform mat4 objMat;\n"
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
A.pZ(c9,s)
A.q0(c9,s)
A.q_(c9,s)
A.q2(c9,s)
A.q3(c9,s)
A.q1(c9,s)
A.q4(c9,s)
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
k=A.pY(c4.z)
c4.c=l
c4.d=k
c4.e=c4.cL(l,35633)
c4.f=c4.cL(c4.d,35632)
q=c4.a
o=q.createProgram()
c4.r=o
q.attachShader(o,c4.e)
q.attachShader(c4.r,c4.f)
q.linkProgram(c4.r)
if(!q.getProgramParameter(c4.r,35714)){j=q.getProgramInfoLog(c4.r)
q.deleteProgram(c4.r)
H.q(P.u("Failed to link shader: "+H.f(j)))}c4.h0()
c4.h2()
c4.Q=c4.x.h(0,"posAttr")
c4.cx=c4.x.h(0,"normAttr")
c4.ch=c4.x.h(0,"binmAttr")
c4.cy=c4.x.h(0,"txt2DAttr")
c4.db=c4.x.h(0,"txtCubeAttr")
c4.dx=c4.x.h(0,"bendAttr")
if(c9.dy)c4.id=t.I.a(c4.y.K(0,"invViewMat"))
if(r)c4.dy=t.I.a(c4.y.K(0,"objMat"))
if(p)c4.fr=t.I.a(c4.y.K(0,"viewObjMat"))
r=t.I
c4.fy=r.a(c4.y.K(0,"projViewObjMat"))
if(c9.go)c4.fx=r.a(c4.y.K(0,"viewMat"))
if(c9.x1)c4.k1=t.O.a(c4.y.K(0,"txt2DMat"))
if(c9.x2)c4.k2=r.a(c4.y.K(0,"txtCubeMat"))
if(c9.y1)c4.k3=r.a(c4.y.K(0,"colorMat"))
c4.r1=H.d([],t.hg)
q=c9.aT
if(q>0){c4.k4=c4.y.K(0,"bendMatCount")
for(i=0;i<q;++i){p=c4.r1
o=c4.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.q(P.u(c6+n+c7))
p.push(r.a(h))}}r=c9.a
if(r.a)c4.r2=t.r.a(c4.y.K(0,"emissionClr"))
if(r.b)c4.rx=t.c.a(c4.y.K(0,"emissionTxt"))
r=c9.b
if(r.a)c4.x1=t.r.a(c4.y.K(0,"ambientClr"))
if(r.b)c4.x2=t.c.a(c4.y.K(0,"ambientTxt"))
r=c9.c
if(r.a)c4.y2=t.r.a(c4.y.K(0,"diffuseClr"))
if(r.b)c4.aT=t.c.a(c4.y.K(0,"diffuseTxt"))
r=c9.d
if(r.a)c4.bn=t.r.a(c4.y.K(0,"invDiffuseClr"))
if(r.b)c4.dg=t.c.a(c4.y.K(0,"invDiffuseTxt"))
r=c9.e
q=r.a
if(q||r.b||!1){c4.dj=t.n.a(c4.y.K(0,"shininess"))
if(q)c4.dh=t.r.a(c4.y.K(0,"specularClr"))
if(r.b)c4.di=t.c.a(c4.y.K(0,"specularTxt"))}if(c9.f.b)c4.dk=t.c.a(c4.y.K(0,"bumpTxt"))
if(c9.db){c4.dl=t.p.a(c4.y.K(0,"envSampler"))
r=c9.r
if(r.a)c4.dm=t.r.a(c4.y.K(0,"reflectClr"))
if(r.b)c4.dn=t.c.a(c4.y.K(0,"reflectTxt"))
r=c9.x
q=r.a
if(q||r.b||!1){c4.dq=t.n.a(c4.y.K(0,"refraction"))
if(q)c4.dr=t.r.a(c4.y.K(0,"refractClr"))
if(r.b)c4.ds=t.c.a(c4.y.K(0,"refractTxt"))}}r=c9.y
if(r.a)c4.dt=t.n.a(c4.y.K(0,"alpha"))
if(r.b)c4.du=t.c.a(c4.y.K(0,"alphaTxt"))
if(c9.k1){r=c9.z
q=r.length
if(q!==0){c4.c4=new H.C(t.J)
c4.c5=new H.C(t.en)
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
if(typeof e!=="number")return e.a9()
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
a7=a6}c.push(new A.cZ(h,a0,a1,a7,a6,a5))}c4.c5.l(0,e,c)
m=c4.c4
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.u(c6+a+c7))
m.l(0,e,h)}}r=c9.Q
q=r.length
if(q!==0){c4.c6=new H.C(t.J)
c4.c7=new H.C(t.af)
for(p=t.r,o=t.c,n=t.dv,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.f(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){if(typeof e!=="number")return e.a9()
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
c.push(new A.d_(b1,b0,a9,h,a0,b2))}c4.c7.l(0,e,c)
m=c4.c6
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.q(P.u(c6+a+c7))
m.l(0,e,h)}}r=c9.ch
q=r.length
if(q!==0){c4.c8=new H.C(t.J)
c4.c9=new H.C(t.gr)
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
if(typeof e!=="number")return e.a9()
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
a7=a6}c.push(new A.d1(h,a0,b5,a1,b2,b6,b7,a7,a6,a5))}c4.c9.l(0,e,c)
a8=c4.c8
b3=c4.y
b4=d+"Count"
h=b3.h(0,b4)
if(h==null)H.q(P.u(c6+b4+c7))
a8.l(0,e,h)}}r=c9.cx
q=r.length
if(q!==0){c4.ca=new H.C(t.J)
c4.cb=new H.C(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.c,b=t.fF,g=0;g<r.length;r.length===q||(0,H.o)(r),++g){f=r[g]
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
if(typeof e!=="number")return e.a9()
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
c.push(new A.d2(h,a0,a1,a2,b1,b0,c1,c0,b7,c3,c2,a7,a6,a5,b2,b6))}c4.cb.l(0,e,c)
a=c4.ca
a8=c4.y
b3=d+"Count"
h=a8.h(0,b3)
if(h==null)H.q(P.u(c6+b3+c7))
a.l(0,e,h)}}}},
am:function(a,b){if(b!=null&&b.d)a.ea(b)},
fZ:function(a,b){}}
A.dM.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.dX.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eE.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.eQ.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.is.prototype={
i:function(a){return this.b5}}
A.cZ.prototype={}
A.d_.prototype={}
A.d1.prototype={}
A.d2.prototype={}
A.cS.prototype={
em:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
cL:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.b(P.u("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
h0:function(){var s,r,q,p=this,o=H.d([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.y(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dI(n,r.name,q))}p.x=new A.hG(o)},
h2:function(){var s,r,q,p=this,o=H.d([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.y(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hu(r.type,r.size,r.name,q))}p.y=new A.jo(o)},
aO:function(a,b,c){var s=this.a
if(a===1)return new A.fc(s,b,c)
else return A.lg(s,this.r,b,a,c)},
eI:function(a,b,c){var s=this.a
if(a===1)return new A.fg(s,b,c)
else return A.lg(s,this.r,b,a,c)},
eJ:function(a,b,c){var s=this.a
if(a===1)return new A.fh(s,b,c)
else return A.lg(s,this.r,b,a,c)},
bk:function(a,b){return new P.fI(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hu:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aO(b,c,d)
case 5121:return s.aO(b,c,d)
case 5122:return s.aO(b,c,d)
case 5123:return s.aO(b,c,d)
case 5124:return s.aO(b,c,d)
case 5125:return s.aO(b,c,d)
case 5126:return new A.fb(s.a,c,d)
case 35664:return new A.jk(s.a,c,d)
case 35665:return new A.fd(s.a,c,d)
case 35666:return new A.fe(s.a,c,d)
case 35667:return new A.jl(s.a,c,d)
case 35668:return new A.jm(s.a,c,d)
case 35669:return new A.jn(s.a,c,d)
case 35674:return new A.jp(s.a,c,d)
case 35675:return new A.ff(s.a,c,d)
case 35676:return new A.d0(s.a,c,d)
case 35678:return s.eI(b,c,d)
case 35680:return s.eJ(b,c,d)
case 35670:throw H.b(s.bk("BOOL",c))
case 35671:throw H.b(s.bk("BOOL_VEC2",c))
case 35672:throw H.b(s.bk("BOOL_VEC3",c))
case 35673:throw H.b(s.bk("BOOL_VEC4",c))
default:throw H.b(P.u("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.fa.prototype={}
A.jo.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
K:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.N()},
N:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.fc.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.jl.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.jm.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.jn.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.jj.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.fb.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.jk.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.fd.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fe.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jp.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.ff.prototype={
ak:function(a){var s=new Float32Array(H.cb(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.d0.prototype={
ak:function(a){var s=new Float32Array(H.cb(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.fg.prototype={
ea:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fh.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.ki.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cj(q.b,b).cj(q.d.cj(q.c,b),c)
a.sa2(0,new V.Q(p.a,p.b,p.c))
a.se0(p.G())
q=1-b
s=1-c
a.sd7(new V.bC(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)}}
F.ks.prototype={
$2:function(a,b){return V.hB(this.a,this.b,b)}}
F.ku.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hB(-1,1,c),n=this.a.$2(b,c)
if(typeof n!=="number")return H.y(n)
q=-q*n
s=p*n
a.sa2(0,new V.Q(q,s,o))
a.se0(new V.B(q,s,o).G())
a.sd7(new V.bC(1-c,2+c,-1,-1))}}
F.kv.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.kw.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kQ.prototype={
$2:function(a,b){return 0}}
F.kR.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.y(r)
s=a.f
r=new V.B(s.a,s.b,s.c).G().A(0,this.b+r)
a.sa2(0,new V.Q(r.a,r.b,r.c))}}
F.kS.prototype={
$1:function(a){return new V.Q(Math.cos(a),Math.sin(a),0)}}
F.kF.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.Q(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)}}
F.kt.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lM(l.$1(m),k)
k=J.lM(l.$1(m+3.141592653589793/n.c),k).X(0,j)
s=new V.B(k.a,k.b,k.c).G()
l=$.mC
if(l==null){l=new V.B(1,0,0)
$.mC=l
r=l}else r=l
q=s.aD(!J.G(s,r)?V.mE():r).G()
r=q.aD(s).G()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.A(0,l*k)
k=q.A(0,o*k)
a.sa2(0,j.v(0,new V.Q(l.a-k.a,l.b-k.b,l.c-k.c)))}}
F.e_.prototype={
b3:function(){var s=this
if(!s.gb4()){C.b.L(s.a.a.d.b,s)
s.a.a.Y()}s.bO()
s.bP()
s.fR()},
bT:function(a){this.a=a
a.d.b.push(this)},
bU:function(a){this.b=a
a.d.c.push(this)},
h_:function(a){this.c=a
a.d.d.push(this)},
bO:function(){var s=this.a
if(s!=null){C.b.L(s.d.b,this)
this.a=null}},
bP:function(){var s=this.b
if(s!=null){C.b.L(s.d.c,this)
this.b=null}},
fR:function(){var s=this.c
if(s!=null){C.b.L(s.d.d,this)
this.c=null}},
gb4:function(){return this.a==null||this.b==null||this.c==null},
eA:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.d4()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.dF())return p
return q.G()},
eC:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.X(0,n)
q=new V.B(o.a,o.b,o.c).G()
o=r.X(0,n)
return q.aD(new V.B(o.a,o.b,o.c).G()).G()},
c0:function(){var s,r=this
if(r.d!=null)return!0
s=r.eA()
if(s==null){s=r.eC()
if(s==null)return!1}r.d=s
r.a.a.Y()
return!0},
ez:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.d4()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.dF())return p
return q.G()},
eB:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.F().toString
if(Math.abs(p-0)<1e-9){j=b.X(0,e)
o=new V.B(j.a,j.b,j.c).G()
if(q.a-r.a<0)o=o.T(0)}else{n=(j-s.b)/p
j=b.X(0,e).A(0,n).v(0,e).X(0,h)
o=new V.B(j.a,j.b,j.c).G()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.T(0)}j=l.d
if(j!=null){m=j.G()
o=m.aD(o).G().aD(m).G()}return o},
bZ:function(){var s,r=this
if(r.e!=null)return!0
s=r.ez()
if(s==null){s=r.eB()
if(s==null)return!1}r.e=s
r.a.a.Y()
return!0},
gho:function(a){var s=this
if(J.G(s.a,s.b))return!0
if(J.G(s.b,s.c))return!0
if(J.G(s.c,s.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){var s,r,q=this
if(q.gb4())return a+"disposed"
s=a+C.a.ah(J.a5(q.a.e),0)+", "+C.a.ah(J.a5(q.b.e),0)+", "+C.a.ah(J.a5(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
N:function(){return this.E("")}}
F.i4.prototype={}
F.j3.prototype={
b7:function(a,b,c){var s,r=b.a
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
F.ee.prototype={
b3:function(){var s=this
if(!s.gb4()){C.b.L(s.a.a.c.b,s)
s.a.a.Y()}s.bO()
s.bP()},
bT:function(a){this.a=a
a.c.b.push(this)},
bU:function(a){this.b=a
a.c.c.push(this)},
bO:function(){var s=this.a
if(s!=null){C.b.L(s.c.b,this)
this.a=null}},
bP:function(){var s=this.b
if(s!=null){C.b.L(s.c.c,this)
this.b=null}},
gb4:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){if(this.gb4())return a+"disposed"
return a+C.a.ah(J.a5(this.a.e),0)+", "+C.a.ah(J.a5(this.b.e),0)},
N:function(){return this.E("")}}
F.ih.prototype={}
F.ji.prototype={
b7:function(a,b,c){var s,r=b.a
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
i:function(a){return this.N()},
E:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.ah(J.a5(s.e),0)},
N:function(){return this.E("")}}
F.iW.prototype={
gw:function(){var s=this.e
return s==null?this.e=D.P():s},
b8:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.u()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){p=e[q]
f.a.n(0,p.hr())}f.a.u()
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
if(n!=null)n.I(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){k=e[q]
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
F.od(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.o)(e),++q){h=e[q]
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
if(e!=null)e.ai(0)},
at:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.at()||!1
if(!r.a.at())s=!1
q=r.e
if(q!=null)q.ai(0)
return s},
hU:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.a.c
s=H.d(m.slice(0),H.lu(m).J("w<1>"))
for(m=t.j;s.length!==0;){r=C.b.ghI(s)
C.b.cn(s,0)
if(r!=null){q=H.d([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.c(s,p)
o=s[p]
if(o!=null&&a.b7(0,r,o)){q.push(o)
C.b.cn(s,p)}}if(q.length>1)b.b8(q)}}n.a.u()
n.c.co()
n.d.co()
n.b.ic()
n.c.cp(new F.ji())
n.d.cp(new F.j3())
m=n.e
if(m!=null)m.ai(0)},
bX:function(){this.hU(new F.jK(),new F.iK())},
cd:function(){var s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cd()
for(s=p.a.c.length-1;s>=0;--s){o=p.a.c
if(s>=o.length)return H.c(o,s)
r=o[s]
o=r.r
if(o!=null)r.sdJ(new V.B(-o.a,-o.b,-o.c))
o=r.x
if(o!=null){q=new V.B(-o.a,-o.b,-o.c).G()
if(!J.G(r.x,q)){r.x=q
o=r.a
if(o!=null){o=o.e
if(o!=null)o.I(null)}}}}o=p.e
if(o!=null)o.ai(0)},
hm:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.bn().a)!==0?1:0
if((s&$.bm().a)!==0)++r
if((s&$.bl().a)!==0)++r
if((s&$.bo().a)!==0)++r
if((s&$.bJ().a)!==0)++r
if((s&$.dC().a)!==0)++r
if((s&$.dD().a)!==0)++r
if((s&$.ci().a)!==0)++r
if((s&$.bk().a)!==0)++r
q=a6.gcv(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.d(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.d(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.hi(k)
i=j.gcv(j)
if(k>=m)return H.c(n,k)
n[k]=new Z.dN(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.c(g,h)
f=g[h].hS(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.c(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.cb(o)),35044)
s.bindBuffer(a3,null)
a=new Z.dO(new Z.fr(a3,b),n,a6)
a.b=H.d([],t.aZ)
if(a2.b.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.u()
a0.push(m.e)}a1=Z.li(s,34963,a0)
a.b.push(new Z.bS(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.u()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.c(m,k)
m=m[k].b
m.a.a.u()
a0.push(m.e)}a1=Z.li(s,34963,a0)
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
a0.push(m.e)}a1=Z.li(s,34963,a0)
a.b.push(new Z.bS(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.d([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.E(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.E(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.E(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.E(r))}return C.b.j(q,"\n")},
Y:function(){var s=this.e
if(s!=null)s.I(null)}}
F.iX.prototype={
he:function(a){var s,r,q,p,o,n=H.d([],t.b),m=a.length
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
hf:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.d([],t.b)
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
cp:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.c(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.b7(0,n,l)){n.b3()
break}}}}},
co:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=q.gho(q)
if(r)q.b3()}},
at:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].c0())q=!1
return q},
c_:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bZ())q=!1
return q},
cd:function(){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.b
p.b=p.c
p.c=o
n=p.d
if(n!=null)p.d=new V.B(-n.a,-n.b,-n.c)
n=p.e
if(n!=null)p.e=new V.B(-n.a,-n.b,-n.c)
n=p.a.a.e
if(n!=null)n.I(null)}},
i:function(a){return this.N()},
E:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(a))
return C.b.j(p,"\n")},
N:function(){return this.E("")}}
F.iY.prototype={
gm:function(a){return this.b.length},
cp:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.c(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.b7(0,n,l)){n.b3()
break}}}}},
co:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=J.G(q.a,q.b)
if(r)q.b3()}},
i:function(a){return this.N()},
E:function(a){var s,r,q=H.d([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.c(r,s)
q.push(r[s].E(a+(""+s+". ")))}return C.b.j(q,"\n")},
N:function(){return this.E("")}}
F.iZ.prototype={
gm:function(a){return this.b.length},
ic:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.L(q.b.b,r)
q=r.a.a.e
if(q!=null)q.I(null)
q=r.a
if(q!=null){C.b.L(q.b.b,r)
r.a=null}}}},
i:function(a){return this.N()},
E:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(a))
return C.b.j(p,"\n")},
N:function(){return this.E("")}}
F.fo.prototype={
c3:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fp(s.cx,p,m,r,q,o,n,a,l)},
hr:function(){return this.c3(null)},
sa2:function(a,b){var s
if(!J.G(this.f,b)){this.f=b
s=this.a
if(s!=null)s.Y()}},
sdJ:function(a){var s
a=a==null?null:a.G()
if(!J.G(this.r,a)){this.r=a
s=this.a
if(s!=null)s.Y()}},
se0:function(a){var s
if(!J.G(this.z,a)){this.z=a
s=this.a
if(s!=null)s.Y()}},
sd7:function(a){var s
if(!J.G(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.Y()}},
hS:function(a){var s,r,q=this
if(a.p(0,$.bn())){s=q.f
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.bm())){s=q.r
r=t.m
if(s==null)return H.d([0,1,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.bl())){s=q.x
r=t.m
if(s==null)return H.d([0,0,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.bo())){s=q.y
r=t.m
if(s==null)return H.d([0,0],r)
else return H.d([s.a,s.b],r)}else if(a.p(0,$.bJ())){s=q.z
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.dC())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.p(0,$.dD())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1,1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else if(a.p(0,$.ci()))return H.d([q.ch],t.m)
else if(a.p(0,$.bk())){s=q.cx
r=t.m
if(s==null)return H.d([-1,-1,-1,-1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else return H.d([],t.m)},
c0:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d4()
r.d.F(0,new F.jP(q))
r.r=q.a.G()
q=r.a
if(q!=null){q.Y()
q=r.a.e
if(q!=null)q.ai(0)}return!0},
bZ:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d4()
r.d.F(0,new F.jO(q))
r.x=q.a.G()
q=r.a
if(q!=null){q.Y()
q=r.a.e
if(q!=null)q.ai(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
E:function(a){var s,r,q=this,p="-",o=H.d([],t.i)
o.push(C.a.ah(J.a5(q.e),0))
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
N:function(){return this.E("")}}
F.jP.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.jO.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.jF.prototype={
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
hg:function(a,b,c,d,e,f){var s=F.fp(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gm:function(a){return this.c.length},
at:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].c0()
return!0},
c_:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bZ()
return!0},
hn:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r.G()
if(!J.G(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.I(null)}}}}return!0},
i:function(a){return this.N()},
E:function(a){var s,r,q,p
this.u()
s=H.d([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].E(a))
return C.b.j(s,"\n")},
N:function(){return this.E("")}}
F.jG.prototype={
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
C.b.F(s.c,new F.jH(s,b))
C.b.F(s.d,new F.jI(s,b))},
i:function(a){return this.N()},
N:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
F.jH.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)}}
F.jI.prototype={
$1:function(a){var s=this.a
if(!J.G(a.a,s)&&!J.G(a.b,s))this.b.$1(a)}}
F.jJ.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.c(r,s)
return r[s]}else{if(b<0)return H.c(r,b)
return r[b]}},
i:function(a){return this.N()},
N:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
F.jL.prototype={}
F.jK.prototype={
b7:function(a,b,c){return J.G(b.f,c.f)}}
F.jM.prototype={}
F.iK.prototype={
b8:function(a){var s,r,q,p=V.d4()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.B(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.G()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)a[r].sdJ(p)
return null}}
F.jN.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].E(""))
return C.b.j(p,"\n")}}
O.eh.prototype={
gw:function(){var s=this.fr
return s==null?this.fr=D.P():s},
V:function(a){var s=this.fr
if(s!=null)s.I(a)},
bM:function(){return this.V(null)},
cS:function(a){this.a=null
this.V(a)},
fV:function(){return this.cS(null)},
f2:function(a,b){var s=new D.b6()
s.b=!0
this.V(s)},
f4:function(a,b){var s=new D.b7()
s.b=!0
this.V(s)},
cJ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.C(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gau()
n=d.h(0,p.gau())
d.l(0,o,n==null?1:n)}m=H.d([],t.am)
d.F(0,new O.iw(f,m))
C.b.aY(m,new O.ix())
l=new H.C(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){o=l.h(0,0)
l.l(0,0,o==null?1:o)}k=H.d([],t.M)
l.F(0,new O.iy(f,k))
C.b.aY(k,new O.iz())
j=new H.C(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.gau()
n=j.h(0,p.gau())
j.l(0,o,n==null?1:n)}i=H.d([],t.d1)
j.F(0,new O.iA(f,i))
C.b.aY(i,new O.iB())
h=new H.C(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.o)(e),++q){p=e[q]
r=p.gau()
o=h.h(0,p.gau())
h.l(0,r,o==null?1:o)}g=H.d([],t.cz)
h.F(0,new O.iC(f,g))
C.b.aY(g,new O.iD())
e=C.c.a1(f.e.a.length+3,4)
s=f.b
r=f.d
f.dy.toString
return A.ok(s!=null,!1,r!=null,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
ab:function(a,b){if(b!=null)if(!C.b.D(a,b)){b.a=a.length
a.push(b)}},
aJ:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a8(s,s.length);s.t();){r=s.d
r.toString
q=$.jE
if(q==null)q=$.jE=new V.B(0,0,1)
r.a=q
p=$.jD
r.d=p==null?$.jD=new V.B(0,1,0):p
p=$.jC
r.e=p==null?$.jC=new V.B(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bv(q).G()
r.d=o.bv(r.d).G()
r.e=o.bv(r.e).G()}}}},
ig:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cJ()
s=b6.fr.h(0,b5.b5)
if(s==null){s=A.oj(b5,b6.a)
r=s.b
if(r.length===0)H.q(P.u("May not cache a shader with no name."))
if(b6.fr.c1(0,r))H.q(P.u('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.l(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.bn
b5=b7.e
if(!(b5 instanceof Z.dO))b5=b7.e=null
if(b5==null||!b5.d.p(0,p)){b5=q.k4
if(b5)b7.d.at()
o=q.r1
if(o){n=b7.d
m=n.e
if(m!=null)++m.d
n.d.c_()
n.a.c_()
n=n.e
if(n!=null)n.ai(0)}n=q.rx
if(n){m=b7.d
l=m.e
if(l!=null)++l.d
m.a.hn()
m=m.e
if(m!=null)m.ai(0)}k=b7.d.hm(new Z.jQ(b6.a),p)
k.aU($.bn()).e=b4.a.Q.c
if(b5)k.aU($.bm()).e=b4.a.cx.c
if(o)k.aU($.bl()).e=b4.a.ch.c
if(q.r2)k.aU($.bo()).e=b4.a.cy.c
if(n)k.aU($.bJ()).e=b4.a.db.c
if(q.ry)k.aU($.bk()).e=b4.a.dx.c
b7.e=k}j=H.d([],t.bw)
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.hE()
if(q.fr){b5=b4.a
n=b6.dx
n=n.ga_(n)
b5=b5.dy
b5.toString
b5.ak(n.a8(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.ga_(n)
m=b6.dx
m=b6.cx=n.A(0,m.ga_(m))
n=m}b5=b5.fr
b5.toString
b5.ak(n.a8(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.gia()
m=b6.dx
m=b6.ch=n.A(0,m.ga_(m))
n=m}b5=b5.fy
b5.toString
b5.ak(n.a8(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.ga_(n)
b5=b5.fx
b5.toString
b5.ak(n.a8(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.ak(n.a8(0,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.ak(C.v.a8(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.ak(n.a8(0,!0))}if(q.aT>0){i=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,i)
for(h=0;h<i;++h){b5=b4.a
n=b4.e.a
if(h>=n.length)return H.c(n,h)
n=n[h]
b5=b5.r1
if(h>=b5.length)return H.c(b5,h)
b5=b5[h]
g=new Float32Array(H.cb(n.a8(0,!0)))
b5.a.uniformMatrix4fv(b5.d,!1,g)}}b5=q.a
if(b5.a){n=b4.a
m=b4.f.f
n=n.r2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.ab(j,b4.f.d)
b5=b4.a
n=b4.f.d
b5.am(b5.rx,n)}if(q.k1){b5=q.b
if(b5.a){n=b4.a
m=b4.r.f
n=n.x1
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.ab(j,b4.r.d)
b5=b4.a
n=b4.r.d
b5.am(b5.x2,n)}b5=q.c
if(b5.a){n=b4.a
m=b4.x.f
n=n.y2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.ab(j,b4.x.d)
b5=b4.a
n=b4.x.d
b5.am(b5.aT,n)}b5=q.d
if(b5.a){n=b4.a
m=b4.y.f
n=n.bn
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.ab(j,b4.y.d)
b5=b4.a
n=b4.y.d
b5.am(b5.dg,n)}b5=q.e
n=b5.a
if(n||b5.b||!1){m=b4.a
l=b4.z.ch
m=m.dj
m.a.uniform1f(m.d,l)}if(n){n=b4.a
m=b4.z.f
n=n.dh
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.ab(j,b4.z.d)
b5=b4.a
n=b4.z.d
b5.am(b5.di,n)}b5=q.z
if(b5.length>0){f=new H.C(t.a)
for(n=b4.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.gau()
b=f.h(0,c)
if(b==null)b=0
f.l(0,c,b+1)
a=J.cj(b4.a.c5.h(0,c),b)
l=d.gix()
a0=$.aS
l=l.bc(a0==null?$.aS=new V.Q(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.giC()
a0=$.aS
l=l.bc(a0==null?$.aS=new V.Q(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gad(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.gdf()){l=d.gd4()
a0=a.e
a0.a.uniform1f(a0.d,l)
l=d.gd5()
a0=a.f
a0.a.uniform1f(a0.d,l)
l=d.gd6()
a0=a.r
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=f.h(0,m)
if(i==null)i=0
m=b4.a.c4.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.Q
if(b5.length>0){n=b6.db
a1=n.ga_(n)
a2=new H.C(t.a)
for(n=b4.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
b=a2.h(0,0)
if(b==null)b=0
a2.l(0,0,b+1)
a=J.cj(b4.a.c7.h(0,0),b)
l=a1.bv(d.a).G()
a0=a.e
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.c
a4=a.f
a4.a.uniform3f(a4.d,l.a,l.b,l.c)}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=a2.h(0,m)
if(i==null)i=0
m=b4.a.c6.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.ch
if(b5.length>0){n=b6.db
a1=n.ga_(n)
a5=new H.C(t.a)
for(n=b4.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.gau()
b=a5.h(0,c)
if(b==null)b=0
a5.l(0,c,b+1)
a=J.cj(b4.a.c9.h(0,c),b)
a6=a1.A(0,d.ga_(d))
l=d.ga_(d)
a0=$.aS
l=l.bc(a0==null?$.aS=new V.Q(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=$.aS
l=a6.bc(l==null?$.aS=new V.Q(0,0,0):l)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gad(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gaI()
l=a6.dE(0)
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
g=new Float32Array(H.cb(new V.cJ(a0,a3,a4,a7,a8,a9,b0,b1,l).a8(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,g)
d.gaI()
l=d.gaI()
if(!C.b.D(j,l)){l.a=j.length
j.push(l)}l=d.gaI()
a0=l.gb6(l)
if(a0){a0=a.f
a0.toString
a3=l.gb6(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.ghO(l))}d.gaX()
l=d.geb()
a0=a.x
a0.toString
a3=l.ghA(l)
a4=l.ghB(l)
a7=l.ghC()
l=l.ghz()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaX()
if(!C.b.D(j,l)){l.a=j.length
j.push(l)}l=d.gaX()
a0=l.gb6(l)
if(a0){a0=a.r
a0.toString
a3=l.gb6(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.ghO(l))}if(d.gdf()){l=d.gd4()
a0=a.y
a0.a.uniform1f(a0.d,l)
l=d.gd5()
a0=a.z
a0.a.uniform1f(a0.d,l)
l=d.gd6()
a0=a.Q
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=a5.h(0,m)
if(i==null)i=0
m=b4.a.c8.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.cx
if(b5.length>0){n=b6.db
a1=n.ga_(n)
b3=new H.C(t.a)
for(n=b4.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.o)(n),++e){d=n[e]
c=d.gau()
b=b3.h(0,c)
if(b==null)b=0
b3.l(0,c,b+1)
a=J.cj(b4.a.cb.h(0,c),b)
l=d.gi9(d)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.giA(d).G()
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=a1.bc(d.gi9(d))
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gad(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gaI()
l=d.giO()
a0=a.f
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gcq(d)
a0=a.r
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.giM()
a0=a.x
a0.a.uniform1f(a0.d,l)
l=d.giN()
a0=a.y
a0.a.uniform1f(a0.d,l)
d.gaI()
l=d.gaI()
if(!C.b.D(j,l)){l.a=j.length
j.push(l)}l=d.gaI()
a0=l.gb6(l)
if(a0){a0=a.dx
a3=l.d
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}d.gaX()
l=d.geb()
a0=a.z
a0.toString
a3=l.ghA(l)
a4=l.ghB(l)
a7=l.ghC()
l=l.ghz()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaX()
if(!C.b.D(j,l)){l.a=j.length
j.push(l)}l=d.gaX()
a0=l.gb6(l)
if(a0){a0=a.dy
a3=l.d
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}if(d.giB()){l=d.giz()
a0=a.Q
a0.a.uniform1f(a0.d,l)
l=d.giy()
a0=a.ch
a0.a.uniform1f(a0.d,l)}if(d.gdf()){l=d.gd4()
a0=a.cx
a0.a.uniform1f(a0.d,l)
l=d.gd5()
a0=a.cy
a0.a.uniform1f(a0.d,l)
l=d.gd6()
a0=a.db
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.o)(b5),++e){m=b5[e].a
i=b3.h(0,m)
if(i==null)i=0
m=b4.a.ca.h(0,m)
m.a.uniform1i(m.d,i)}}}if(q.f.b){b4.ab(j,b4.Q.d)
b5=b4.a
n=b4.Q.d
b5.am(b5.dk,n)}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.ga_(n).dE(0)}b5=b5.id
b5.toString
b5.ak(n.a8(0,!0))}if(q.db){b4.ab(j,b4.ch)
b5=b4.a
n=b4.ch
b5.fZ(b5.dl,n)
b5=q.r
if(b5.a){n=b4.a
m=b4.cx.f
n=n.dm
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.ab(j,b4.cx.d)
b5=b4.a
n=b4.cx.d
b5.am(b5.dn,n)}b5=q.x
n=b5.a
if(n||b5.b||!1){m=b4.a
l=b4.cy.ch
m=m.dq
m.a.uniform1f(m.d,l)}if(n){n=b4.a
m=b4.cy.f
n=n.dr
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.ab(j,b4.cy.d)
b5=b4.a
n=b4.cy.d
b5.am(b5.ds,n)}}b5=q.y
n=b5.a
m=!n
if(!m||b5.b||!1){if(n){n=b4.a
l=b4.db.f
n=n.dt
n.a.uniform1f(n.d,l)}if(b5.b){b4.ab(j,b4.db.d)
n=b4.a
l=b4.db.d
n.am(n.du,l)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h){n=j[h]
if(!n.c&&n.d){n.c=!0
o.activeTexture(33984+n.a)
o.bindTexture(3553,n.b)}}n=b7.e
n.bY(b6)
n.aV(b6)
n.it(b6)
if(!m||b5.b||!1)o.disable(3042)
for(h=0;h<j.length;++h){b5=j[h]
if(b5.c){b5.c=!1
o.activeTexture(33984+b5.a)
o.bindTexture(3553,null)}}b5=b4.a
b5.toString
o.useProgram(null)
b5.x.hy()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cJ().b5}}
O.iw.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.dM(a,C.c.a1(b+3,4)*4))}}
O.ix.prototype={
$2:function(a,b){return J.dE(a.a,b.a)}}
O.iy.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.dX(a,C.c.a1(b+3,4)*4))}}
O.iz.prototype={
$2:function(a,b){return J.dE(a.a,b.a)}}
O.iA.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.eE(a,C.c.a1(b+3,4)*4))}}
O.iB.prototype={
$2:function(a,b){return J.dE(a.a,b.a)}}
O.iC.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.eQ(a,C.c.a1(b+3,4)*4))}}
O.iD.prototype={
$2:function(a,b){return J.dE(a.a,b.a)}}
O.iq.prototype={
aB:function(){var s,r=this
r.cz()
s=r.f
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.E(r.b,s,1)
s.b=!0
r.a.V(s)}}}
O.cI.prototype={
V:function(a){return this.a.V(a)},
bM:function(){return this.V(null)},
aB:function(){},
bQ:function(a){var s,r,q=this
if(!q.c.p(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aB()
s=q.a
s.a=null
s.V(null)}}}
O.ir.prototype={}
O.aP.prototype={
cU:function(a){var s,r,q=this
if(!q.f.p(0,a)){s=q.f
q.f=a
r=new D.E(q.b+".color",s,a)
r.b=!0
q.a.V(r)}},
aB:function(){this.cz()
this.cU(new V.T(1,1,1))},
sad:function(a,b){this.bQ(new A.a1(!0,this.c.b,!1))
this.cU(b)}}
O.it.prototype={}
O.iu.prototype={
aB:function(){var s,r=this
r.cA()
s=r.ch
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.E(r.b+".refraction",s,1)
s.b=!0
r.a.V(s)}}}
O.iv.prototype={
cV:function(a){var s=this,r=s.ch
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.E(s.b+".shininess",r,a)
r.b=!0
s.a.V(r)}},
aB:function(){this.cA()
this.cV(100)}}
O.f0.prototype={}
T.f3.prototype={}
T.j6.prototype={}
T.j7.prototype={
gw:function(){var s=this.y
return s==null?this.y=D.P():s}}
T.j8.prototype={
hT:function(a,b){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,10497)
p.texParameteri(q,10243,10497)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.j7()
r.a=0
r.b=o
r.d=r.c=!1
W.a_(s,"load",new T.j9(this,r,s,!1,o,!1,!1),!1)
return r},
fW:function(a,b,c){var s,r,q,p
b=V.lG(b)
s=V.lG(a.width)
r=V.lG(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.l_()
q.width=s
q.height=r
p=C.i.e7(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.qo(p.getImageData(0,0,q.width,q.height))}}}
T.j9.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.fW(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,q.f?1:0)
C.a3.im(o,p,0,6408,6408,5121,r)
if(q.r)o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.hD()}++s.e}}
X.kZ.prototype={}
X.i8.prototype={
gw:function(){var s=this.x
return s==null?this.x=D.P():s}}
X.ex.prototype={
gw:function(){var s=this.f
return s==null?this.f=D.P():s},
aN:function(a){var s=this.f
if(s!=null)s.I(a)},
ew:function(){return this.aN(null)},
sag:function(a){var s,r,q=this
if(!J.G(q.b,a)){s=q.b
if(s!=null)s.gw().L(0,q.gcF())
r=q.b
q.b=a
if(a!=null)a.gw().n(0,q.gcF())
s=new D.E("mover",r,q.b)
s.b=!0
q.aN(s)}}}
X.j5.prototype={}
V.b2.prototype={
bf:function(a){this.b=new P.ia(C.T)
this.c=null
this.d=H.d([],t.u)},
M:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.d([],t.k))
s=a.split("\n")
for(j=s.length,r=t.k,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.d([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.eH(o,0,o.length)
l=m==null?o:m
C.R.e9(n,H.lI(l," ","&nbsp;"))
l=n.style
l.color=b
C.b.gav(k.d).push(n)}},
dQ:function(a,b){var s,r,q,p=this
p.d=H.d([],t.u)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bm()
r.toString
q=new H.p(s)
q=new P.bF(r.cr(new H.b9(q,q.gm(q))).a())
for(;q.t();)p.bt(q.gB(q))}}
V.kP.prototype={
$1:function(a){var s=C.d.e1(this.a.ghN(),2)
if(s!=="0.00")P.lH(s+" fps")}}
V.dV.prototype={
bt:function(a){var s=this
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
bm:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()\\-+*%!&|=.,?:;",i="OpenDoubleStr",h="CloseDoubleStr",g="EscDoubleStr",f="OpenSingleStr",e="CloseSingleStr",d="EscSingleStr",c="Slash",b="Comment",a="EndComment",a0="MLComment",a1="MLCStar",a2="Whitespace",a3=L.jd()
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
a3.k(0,i).j(0,i).a.push(new K.b0())
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
a3.k(0,f).j(0,f).a.push(new K.b0())
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
r.aH(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aH(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aH(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a3}}
V.e3.prototype={
bt:function(a){var s=this
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
bm:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()[]\\-+*%!&|=.,?:;",i="Slash",h="Comment",g="EndComment",f="Preprocess",e="EndPreprocess",d="Whitespace",c=L.jd()
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
c.k(0,i).j(0,k).a.push(new K.b0())
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
s.aH(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],r))
s.aH(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],r))
s.aH(0,"Builtin",H.d(["gl_FragColor","gl_Position"],r))
return c}}
V.e5.prototype={
bt:function(a){var s=this,r="#111"
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
bm:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.jd()
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
j.k(0,m).j(0,m).a.push(new K.b0())
j.k(0,q).j(0,k).a.push(new K.b0())
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
s.d=s.a.O("Symbol")
s=j.k(0,l)
s.d=s.a.O("String")
s=j.k(0,p)
r=s.a.O(p)
s.d=r
r.aH(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],t.i))
r=j.k(0,o)
r.d=r.a.O(o)
r=j.k(0,k)
r.d=r.a.O(k)
return j}}
V.ez.prototype={
dQ:function(a,b){this.d=H.d([],t.u)
this.M(C.b.j(b,"\n"),"#111")},
bt:function(a){},
bm:function(){return null}}
V.iN.prototype={
d0:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.mv().gcm().h(0,H.f(s))
if(r==null)if(d){c.$0()
k.d_(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.kX(k.c).n(0,o)
m=W.o6("radio")
m.checked=q
m.name=s
W.a_(m,"change",new V.iO(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.kX(k.c).n(0,p.createElement("br"))},
b2:function(a,b,c){return this.d0(a,b,c,!1)},
d_:function(a){var s,r,q=P.mv(),p=t.X,o=P.og(q.gcm(),p,p)
o.l(0,this.a,a)
s=q.dW(0,o)
p=window.history
r=s.gbV()
p.toString
p.replaceState(new P.k5([],[]).bw(""),"",r)}}
V.iO.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.d_(s.d)}}}
V.j_.prototype={
en:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.a_(o,"scroll",new V.j1(m),!1)},
d2:function(a){var s,r,q,p,o,n,m,l
this.h1()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hR(a)
q.toString
p=new H.p(p)
p=new P.bF(q.cr(new H.b9(p,p.gm(p))).a())
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
if(H.nj(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.c(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kd(C.x,q,C.e,!1)
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
e6:function(a){var s,r,q,p=new V.dV("dart")
p.bf("dart")
s=new V.e3("glsl")
s.bf("glsl")
r=new V.e5("html")
r.bf("html")
q=C.b.hJ(H.d([p,s,r],t.b7),new V.j2(a))
if(q!=null)return q
p=new V.ez("plain")
p.bf("plain")
return p},
d1:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.d([],t.V)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.dB(q).a3(q,"+")){b2[r]=C.a.a6(q,1)
a8.push(1)
s=!0}else if(C.a.a3(q,"-")){b2[r]=C.a.a6(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.e6(b0)
p.dQ(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.kd(C.x,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lO()
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
for(a4=C.b.gR(q);a4.t();)b.appendChild(a4.gB(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
hc:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
h1:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=L.jd()
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
s.k(0,o).j(0,g).a.push(new K.b0())
q=s.k(0,g).j(0,g)
r=new K.a9()
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
V.j1.prototype={
$1:function(a){P.mr(C.m,new V.j0(this.a))}}
V.j0.prototype={
$0:function(){var s=C.d.an(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
V.j2.prototype={
$1:function(a){return a.a===this.a}}
K.kG.prototype={
$1:function(a){var s,r,q,p,o=t.c1.a(a).c,n=this.a,m=this.b.ax(0,o,null)
if(!J.G(n.d,m)){s=n.d
r=s==null
q=m==null
if(!(!r&&q))r=r&&!q
else r=!0
if(r)n.a=null
n.d=m
m=new D.E("colorMatrix",s,m)
m.b=!0
n.V(m)}p=V.ol(this.c.ax(0,o,null))
if(!J.G(n.b,p)){m=n.b
s=m==null&&!0
if(s)n.a=null
n.b=p
m=new D.E("texture2DMatrix",m,p)
m.b=!0
n.V(m)}}}
K.kH.prototype={
$0:function(){this.a.sal(0,F.lB(1,null,null,1))}}
K.kI.prototype={
$0:function(){this.a.sal(0,F.n7(!0,40,1))}}
K.kJ.prototype={
$0:function(){this.a.sal(0,F.n7(!1,40,0))}}
K.kK.prototype={
$0:function(){this.a.sal(0,F.qH(6,6))}}
K.kL.prototype={
$0:function(){this.a.sal(0,F.nk())}}
K.kM.prototype={
$0:function(){this.a.sal(0,F.qC())}}
K.kN.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a,p=t.s
s.d1("Vertex Shader","glsl",0,H.d((q==null?null:q.c).split("\n"),p))
r=r.a
s.d1("Fragment Shader","glsl",0,H.d((r==null?null:r.d).split("\n"),p))}};(function aliases(){var s=J.a.prototype
s.ee=s.i
s=J.b8.prototype
s.eg=s.i
s=P.h.prototype
s.ef=s.bx
s=W.D.prototype
s.bz=s.ae
s=W.dg.prototype
s.eh=s.as
s=K.e4.prototype
s.ed=s.aF
s.cw=s.i
s=O.cI.prototype
s.cz=s.aB
s=O.aP.prototype
s.cA=s.aB})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pC","ob",21)
r(P,"qh","oO",7)
r(P,"qi","oP",7)
r(P,"qj","oQ",7)
q(P,"n6","qc",8)
r(W,"rR","hY",22)
p(W,"qv",4,null,["$4"],["oR"],14,0)
p(W,"qw",4,null,["$4"],["oS"],14,0)
var j
o(j=E.bv.prototype,"gdO",0,0,null,["$1","$0"],["dP","i1"],0,0)
o(j,"gdM",0,0,null,["$1","$0"],["dN","i0"],0,0)
o(j,"gdK",0,0,null,["$1","$0"],["dL","hY"],0,0)
n(j,"ghW","hX",4)
n(j,"ghZ","i_",4)
o(j=E.f4.prototype,"gcB",0,0,null,["$1","$0"],["cD","cC"],0,0)
m(j,"gii","dX",8)
l(j=X.fn.prototype,"gfh","fi",5)
l(j,"gf5","f6",5)
l(j,"gfb","fc",2)
l(j,"gfl","fm",9)
l(j,"gfj","fk",9)
l(j,"gfp","fq",2)
l(j,"gfu","fv",2)
l(j,"gff","fg",2)
l(j,"gfs","ft",2)
l(j,"gfd","fe",2)
l(j,"gfw","fz",19)
l(j,"gfA","fB",5)
l(j,"gfN","fO",6)
l(j,"gfJ","fK",6)
l(j,"gfL","fM",6)
o(D.bt.prototype,"gcE",0,0,null,["$1","$0"],["ay","eq"],0,0)
o(j=D.cz.prototype,"gcQ",0,0,null,["$1","$0"],["cR","fn"],0,0)
l(j,"gfD","fE",20)
n(j,"gf_","f0",10)
n(j,"gfH","fI",10)
k(V.at.prototype,"gm","ci",11)
k(V.B.prototype,"gm","ci",11)
o(j=U.bQ.prototype,"gbg",0,0,null,["$1","$0"],["P","ap"],0,0)
n(j,"geY","eZ",12)
n(j,"gfF","fG",12)
o(j=U.d3.prototype,"gbg",0,0,null,["$1","$0"],["P","ap"],0,0)
l(j,"geS","eT",1)
l(j,"geU","eV",1)
l(j,"geW","eX",1)
l(j,"geN","eO",1)
l(j,"geP","eQ",1)
l(j,"gh8","h9",1)
l(j,"gh6","h7",1)
l(j,"gh4","h5",1)
o(j=M.dZ.prototype,"gaq",0,0,null,["$1","$0"],["az","er"],0,0)
n(j,"gf7","f8",4)
n(j,"gf9","fa",4)
o(j=O.eh.prototype,"gbj",0,0,null,["$1","$0"],["V","bM"],0,0)
o(j,"gfU",0,0,null,["$1","$0"],["cS","fV"],0,0)
n(j,"gf1","f2",13)
n(j,"gf3","f4",13)
o(O.cI.prototype,"gbj",0,0,null,["$1","$0"],["V","bM"],0,0)
o(X.ex.prototype,"gcF",0,0,null,["$1","$0"],["aN","ew"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.M,null)
q(P.M,[H.l6,J.a,J.a8,P.K,P.d9,P.h,H.b9,P.e7,H.ct,H.fk,H.cl,H.jg,H.iL,H.h8,H.bs,P.W,H.ii,H.ef,H.e9,H.ap,H.fL,P.dm,P.c9,P.bF,P.ft,P.cV,P.eV,P.cX,P.kh,P.df,P.jY,P.d8,P.i,P.hn,P.cG,P.dQ,P.ib,P.kf,P.ke,P.aw,P.ag,P.R,P.bu,P.ew,P.cT,P.fI,P.i7,P.ay,P.n,P.I,P.an,P.x,P.S,P.bG,P.jr,P.h2,W.hP,W.l2,W.lj,W.c8,W.L,W.cP,W.dg,W.hd,W.cu,W.aj,W.k1,W.ho,P.k4,P.dp,P.h0,P.bd,K.b0,K.e4,K.ip,K.iP,K.iV,L.eS,L.f5,L.f6,L.jc,O.af,O.cK,E.hL,E.bv,E.bN,E.bZ,E.fF,E.iQ,D.U,E.f4,Z.fr,Z.jQ,Z.dO,Z.bS,Z.be,D.hM,D.bO,X.dP,X.eb,X.ig,X.im,X.bV,X.iH,X.je,X.fn,D.dL,D.bt,D.V,D.eC,D.eP,V.T,V.aK,V.i0,V.cJ,V.ba,V.ak,V.Q,V.bC,V.eH,V.at,V.B,U.d3,M.dZ,A.dI,A.hG,A.a1,A.dM,A.dX,A.eE,A.eQ,A.is,A.cZ,A.d_,A.d1,A.d2,A.fa,A.jo,F.e_,F.i4,F.ee,F.ih,F.eB,F.iW,F.iX,F.iY,F.iZ,F.fo,F.jF,F.jG,F.jJ,F.jL,F.jM,F.jN,O.f0,O.cI,O.it,T.j8,X.kZ,X.j5,X.ex,V.b2,V.iN,V.j_])
q(J.a,[J.e8,J.cy,J.b8,J.w,J.by,J.aM,H.cL,H.X,W.e,W.hE,W.bp,W.aL,W.J,W.fy,W.am,W.hS,W.hT,W.fA,W.cp,W.fC,W.hU,W.j,W.fJ,W.az,W.i9,W.fN,W.bx,W.il,W.iE,W.fR,W.fS,W.aB,W.fT,W.fV,W.aC,W.fZ,W.h1,W.aD,W.h3,W.aE,W.h9,W.ar,W.hf,W.jb,W.aF,W.hh,W.jf,W.jw,W.hp,W.hr,W.ht,W.hv,W.hx,P.aN,P.fP,P.aR,P.fX,P.iM,P.ha,P.aT,P.hj,P.hH,P.fv,P.eI,P.h6])
q(J.b8,[J.ey,J.bE,J.aA])
r(J.id,J.w)
q(J.by,[J.cx,J.cw])
q(P.K,[H.ec,H.es,H.ea,H.fj,H.eK,H.fG,P.dH,P.et,P.ae,P.fl,P.fi,P.c2,P.dR,P.dU])
r(P.cC,P.d9)
q(P.cC,[H.c4,W.fw,W.a0,P.e1])
r(H.p,H.c4)
q(P.h,[H.k,H.aO,H.aW,P.cv])
q(H.k,[H.cD,H.cA])
r(H.cq,H.aO)
q(P.e7,[H.eg,H.fs])
r(H.cH,H.cD)
r(H.cm,H.cl)
q(H.bs,[H.f_,H.ie,H.kz,H.kA,H.kB,P.jS,P.jR,P.jT,P.jU,P.ka,P.k9,P.kq,P.k_,P.k0,P.ij,P.io,P.jz,P.jA,P.hV,P.hW,P.jv,P.js,P.jt,P.ju,P.kc,P.kb,P.kl,P.kk,P.km,P.kn,W.hX,W.iF,W.iG,W.iU,W.j4,W.jV,W.iJ,W.iI,W.k2,W.k3,W.k8,W.kg,P.k6,P.k7,P.kr,P.i5,P.i6,P.hI,E.iR,E.iS,E.iT,E.ja,D.i2,D.i3,F.ki,F.ks,F.ku,F.kv,F.kw,F.kQ,F.kR,F.kS,F.kF,F.kt,F.jP,F.jO,F.jH,F.jI,O.iw,O.ix,O.iy,O.iz,O.iA,O.iB,O.iC,O.iD,T.j9,V.kP,V.iO,V.j1,V.j0,V.j2,K.kG,K.kH,K.kI,K.kJ,K.kK,K.kL,K.kM,K.kN])
q(H.f_,[H.eT,H.bM])
r(P.cF,P.W)
q(P.cF,[H.C,W.fu])
r(H.bX,H.X)
q(H.bX,[H.db,H.dd])
r(H.dc,H.db)
r(H.bA,H.dc)
r(H.de,H.dd)
r(H.cM,H.de)
q(H.cM,[H.en,H.eo,H.ep,H.eq,H.er,H.cN,H.bY])
r(H.dn,H.fG)
r(P.dj,P.cv)
r(P.jZ,P.kh)
r(P.d7,P.df)
r(P.ds,P.cG)
r(P.c5,P.ds)
q(P.dQ,[P.hJ,P.hZ])
r(P.dT,P.eV)
q(P.dT,[P.hK,P.ia,P.jB,P.jy])
r(P.jx,P.hZ)
q(P.R,[P.Z,P.l])
q(P.ae,[P.c0,P.e6])
r(P.fz,P.bG)
q(W.e,[W.v,W.e0,W.bU,W.aq,W.dh,W.as,W.aa,W.dk,W.fq,W.c6,P.dK,P.b1])
q(W.v,[W.D,W.ax,W.c7])
q(W.D,[W.r,P.m])
q(W.r,[W.dF,W.dG,W.bL,W.bq,W.br,W.b4,W.e2,W.bR,W.bT,W.eL,W.bc,W.cW,W.eY,W.eZ,W.c3])
r(W.hO,W.aL)
r(W.cn,W.fy)
q(W.am,[W.hQ,W.hR])
r(W.fB,W.fA)
r(W.co,W.fB)
r(W.fD,W.fC)
r(W.dY,W.fD)
r(W.ah,W.bp)
r(W.fK,W.fJ)
r(W.bP,W.fK)
r(W.fO,W.fN)
r(W.bw,W.fO)
r(W.aV,W.j)
q(W.aV,[W.bz,W.ai,W.bD])
r(W.ek,W.fR)
r(W.el,W.fS)
r(W.fU,W.fT)
r(W.em,W.fU)
r(W.fW,W.fV)
r(W.cO,W.fW)
r(W.h_,W.fZ)
r(W.eA,W.h_)
r(W.eJ,W.h1)
r(W.di,W.dh)
r(W.eN,W.di)
r(W.h4,W.h3)
r(W.eO,W.h4)
r(W.eU,W.h9)
r(W.hg,W.hf)
r(W.f1,W.hg)
r(W.dl,W.dk)
r(W.f2,W.dl)
r(W.hi,W.hh)
r(W.f7,W.hi)
r(W.bf,W.ai)
r(W.hq,W.hp)
r(W.fx,W.hq)
r(W.d5,W.cp)
r(W.hs,W.hr)
r(W.fM,W.hs)
r(W.hu,W.ht)
r(W.da,W.hu)
r(W.hw,W.hv)
r(W.h5,W.hw)
r(W.hy,W.hx)
r(W.hc,W.hy)
r(W.fE,W.fu)
r(W.fH,P.cV)
r(W.he,W.dg)
r(P.k5,P.k4)
r(P.a6,P.h0)
r(P.fQ,P.fP)
r(P.ed,P.fQ)
r(P.fY,P.fX)
r(P.eu,P.fY)
r(P.c1,P.m)
r(P.hb,P.ha)
r(P.eW,P.hb)
r(P.hk,P.hj)
r(P.f8,P.hk)
r(P.dJ,P.fv)
r(P.ev,P.b1)
r(P.h7,P.h6)
r(P.eR,P.h7)
q(K.e4,[K.a9,L.f9])
q(D.U,[E.cU,D.b6,D.b7,D.E,X.eD])
q(E.hL,[Z.dN,A.cS,T.f3])
q(X.eD,[X.cE,X.bW,X.cY])
q(O.af,[D.cz,U.bQ])
q(D.hM,[U.hN,U.a3])
q(U.a3,[U.ck,U.cR])
r(A.ei,A.cS)
q(A.fa,[A.fc,A.jl,A.jm,A.jn,A.jj,A.fb,A.jk,A.fd,A.fe,A.jp,A.ff,A.d0,A.fg,A.fh])
r(F.j3,F.i4)
r(F.ji,F.ih)
r(F.jK,F.jL)
r(F.iK,F.jM)
r(O.eh,O.f0)
q(O.cI,[O.iq,O.ir,O.aP])
q(O.aP,[O.iu,O.iv])
r(T.j6,T.f3)
r(T.j7,T.j6)
r(X.i8,X.j5)
q(V.b2,[V.dV,V.e3,V.e5,V.ez])
s(H.c4,H.fk)
s(H.db,P.i)
s(H.dc,H.ct)
s(H.dd,P.i)
s(H.de,H.ct)
s(P.d9,P.i)
s(P.ds,P.hn)
s(W.fy,W.hP)
s(W.fA,P.i)
s(W.fB,W.L)
s(W.fC,P.i)
s(W.fD,W.L)
s(W.fJ,P.i)
s(W.fK,W.L)
s(W.fN,P.i)
s(W.fO,W.L)
s(W.fR,P.W)
s(W.fS,P.W)
s(W.fT,P.i)
s(W.fU,W.L)
s(W.fV,P.i)
s(W.fW,W.L)
s(W.fZ,P.i)
s(W.h_,W.L)
s(W.h1,P.W)
s(W.dh,P.i)
s(W.di,W.L)
s(W.h3,P.i)
s(W.h4,W.L)
s(W.h9,P.W)
s(W.hf,P.i)
s(W.hg,W.L)
s(W.dk,P.i)
s(W.dl,W.L)
s(W.hh,P.i)
s(W.hi,W.L)
s(W.hp,P.i)
s(W.hq,W.L)
s(W.hr,P.i)
s(W.hs,W.L)
s(W.ht,P.i)
s(W.hu,W.L)
s(W.hv,P.i)
s(W.hw,W.L)
s(W.hx,P.i)
s(W.hy,W.L)
s(P.fP,P.i)
s(P.fQ,W.L)
s(P.fX,P.i)
s(P.fY,W.L)
s(P.ha,P.i)
s(P.hb,W.L)
s(P.hj,P.i)
s(P.hk,W.L)
s(P.fv,P.W)
s(P.h6,P.i)
s(P.h7,W.L)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",Z:"double",R:"num",x:"String",aw:"bool",an:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([U*])","~(U*)","~(ai*)","an(@,@)","~(l*,h<bv*>*)","~(j*)","~(bD*)","~(~())","~()","~(bz*)","~(l*,h<V*>*)","Z*()","~(l*,h<a3*>*)","~(l*,h<ba*>*)","aw(D,x,x,c8)","@(@)","an(@)","an(M?,M?)","bd(@,@)","~(bf*)","aw*(h<V*>*)","l(@,@)","x(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pa(v.typeUniverse,JSON.parse('{"aA":"b8","ey":"b8","bE":"b8","qM":"j","qW":"j","qO":"b1","qN":"e","r2":"e","r4":"e","qL":"m","qX":"m","qP":"r","r_":"r","qY":"v","qV":"v","ru":"aa","qT":"aV","qQ":"ax","r5":"ax","r3":"ai","qZ":"bw","r1":"bA","r0":"X","e8":{"aw":[]},"b8":{"m2":[],"ay":[]},"w":{"n":["1"],"k":["1"],"h":["1"]},"id":{"w":["1"],"n":["1"],"k":["1"],"h":["1"]},"by":{"Z":[],"R":[]},"cx":{"Z":[],"l":[],"R":[]},"cw":{"Z":[],"R":[]},"aM":{"x":[]},"ec":{"K":[]},"p":{"i":["l"],"n":["l"],"k":["l"],"h":["l"],"i.E":"l"},"k":{"h":["1"]},"cD":{"k":["1"],"h":["1"]},"aO":{"h":["2"],"h.E":"2"},"cq":{"aO":["1","2"],"k":["2"],"h":["2"],"h.E":"2"},"cH":{"cD":["2"],"k":["2"],"h":["2"],"h.E":"2"},"aW":{"h":["1"],"h.E":"1"},"c4":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"cl":{"I":["1","2"]},"cm":{"I":["1","2"]},"es":{"K":[]},"ea":{"K":[]},"fj":{"K":[]},"bs":{"ay":[]},"f_":{"ay":[]},"eT":{"ay":[]},"bM":{"ay":[]},"eK":{"K":[]},"C":{"W":["1","2"],"I":["1","2"]},"cA":{"k":["1"],"h":["1"],"h.E":"1"},"e9":{"mj":[]},"bX":{"z":["1"],"X":[]},"bA":{"i":["Z"],"z":["Z"],"n":["Z"],"X":[],"k":["Z"],"h":["Z"],"i.E":"Z"},"cM":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"]},"en":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"eo":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"ep":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"eq":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"er":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"cN":{"i":["l"],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"bY":{"i":["l"],"bd":[],"z":["l"],"n":["l"],"X":[],"k":["l"],"h":["l"],"i.E":"l"},"fG":{"K":[]},"dn":{"K":[]},"dm":{"cX":[]},"dj":{"h":["1"],"h.E":"1"},"d7":{"df":["1"],"k":["1"],"h":["1"]},"cv":{"h":["1"]},"cC":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"cF":{"W":["1","2"],"I":["1","2"]},"W":{"I":["1","2"]},"cG":{"I":["1","2"]},"c5":{"I":["1","2"]},"df":{"k":["1"],"h":["1"]},"Z":{"R":[]},"dH":{"K":[]},"et":{"K":[]},"ae":{"K":[]},"c0":{"K":[]},"e6":{"K":[]},"fl":{"K":[]},"fi":{"K":[]},"c2":{"K":[]},"dR":{"K":[]},"ew":{"K":[]},"cT":{"K":[]},"dU":{"K":[]},"l":{"R":[]},"n":{"k":["1"],"h":["1"]},"bG":{"fm":[]},"h2":{"fm":[]},"fz":{"fm":[]},"r":{"D":[],"v":[],"e":[]},"dF":{"D":[],"v":[],"e":[]},"dG":{"D":[],"v":[],"e":[]},"bL":{"D":[],"v":[],"e":[]},"bq":{"D":[],"v":[],"e":[]},"br":{"D":[],"v":[],"e":[]},"ax":{"v":[],"e":[]},"b4":{"D":[],"v":[],"e":[]},"co":{"i":["a6<R>"],"n":["a6<R>"],"z":["a6<R>"],"k":["a6<R>"],"h":["a6<R>"],"i.E":"a6<R>"},"cp":{"a6":["R"]},"dY":{"i":["x"],"n":["x"],"z":["x"],"k":["x"],"h":["x"],"i.E":"x"},"fw":{"i":["D"],"n":["D"],"k":["D"],"h":["D"],"i.E":"D"},"D":{"v":[],"e":[]},"ah":{"bp":[]},"bP":{"i":["ah"],"n":["ah"],"z":["ah"],"k":["ah"],"h":["ah"],"i.E":"ah"},"e0":{"e":[]},"e2":{"D":[],"v":[],"e":[]},"bw":{"i":["v"],"n":["v"],"z":["v"],"k":["v"],"h":["v"],"i.E":"v"},"bR":{"D":[],"v":[],"e":[]},"bT":{"D":[],"v":[],"e":[]},"bz":{"j":[]},"bU":{"e":[]},"ek":{"W":["x","@"],"I":["x","@"]},"el":{"W":["x","@"],"I":["x","@"]},"em":{"i":["aB"],"n":["aB"],"z":["aB"],"k":["aB"],"h":["aB"],"i.E":"aB"},"ai":{"j":[]},"a0":{"i":["v"],"n":["v"],"k":["v"],"h":["v"],"i.E":"v"},"v":{"e":[]},"cO":{"i":["v"],"n":["v"],"z":["v"],"k":["v"],"h":["v"],"i.E":"v"},"eA":{"i":["aC"],"n":["aC"],"z":["aC"],"k":["aC"],"h":["aC"],"i.E":"aC"},"eJ":{"W":["x","@"],"I":["x","@"]},"eL":{"D":[],"v":[],"e":[]},"aq":{"e":[]},"eN":{"i":["aq"],"n":["aq"],"z":["aq"],"e":[],"k":["aq"],"h":["aq"],"i.E":"aq"},"eO":{"i":["aD"],"n":["aD"],"z":["aD"],"k":["aD"],"h":["aD"],"i.E":"aD"},"eU":{"W":["x","x"],"I":["x","x"]},"bc":{"D":[],"v":[],"e":[]},"cW":{"D":[],"v":[],"e":[]},"eY":{"D":[],"v":[],"e":[]},"eZ":{"D":[],"v":[],"e":[]},"c3":{"D":[],"v":[],"e":[]},"as":{"e":[]},"aa":{"e":[]},"f1":{"i":["aa"],"n":["aa"],"z":["aa"],"k":["aa"],"h":["aa"],"i.E":"aa"},"f2":{"i":["as"],"n":["as"],"z":["as"],"e":[],"k":["as"],"h":["as"],"i.E":"as"},"bD":{"j":[]},"f7":{"i":["aF"],"n":["aF"],"z":["aF"],"k":["aF"],"h":["aF"],"i.E":"aF"},"aV":{"j":[]},"fq":{"e":[]},"bf":{"ai":[],"j":[]},"c6":{"e":[]},"c7":{"v":[],"e":[]},"fx":{"i":["J"],"n":["J"],"z":["J"],"k":["J"],"h":["J"],"i.E":"J"},"d5":{"a6":["R"]},"fM":{"i":["az?"],"n":["az?"],"z":["az?"],"k":["az?"],"h":["az?"],"i.E":"az?"},"da":{"i":["v"],"n":["v"],"z":["v"],"k":["v"],"h":["v"],"i.E":"v"},"h5":{"i":["aE"],"n":["aE"],"z":["aE"],"k":["aE"],"h":["aE"],"i.E":"aE"},"hc":{"i":["ar"],"n":["ar"],"z":["ar"],"k":["ar"],"h":["ar"],"i.E":"ar"},"fu":{"W":["x","x"],"I":["x","x"]},"fE":{"W":["x","x"],"I":["x","x"]},"c8":{"aj":[]},"cP":{"aj":[]},"dg":{"aj":[]},"he":{"aj":[]},"hd":{"aj":[]},"dp":{"bx":[]},"e1":{"i":["D"],"n":["D"],"k":["D"],"h":["D"],"i.E":"D"},"a6":{"h0":["1"]},"ed":{"i":["aN"],"n":["aN"],"k":["aN"],"h":["aN"],"i.E":"aN"},"eu":{"i":["aR"],"n":["aR"],"k":["aR"],"h":["aR"],"i.E":"aR"},"c1":{"m":[],"D":[],"v":[],"e":[]},"eW":{"i":["x"],"n":["x"],"k":["x"],"h":["x"],"i.E":"x"},"m":{"D":[],"v":[],"e":[]},"f8":{"i":["aT"],"n":["aT"],"k":["aT"],"h":["aT"],"i.E":"aT"},"bd":{"n":["l"],"k":["l"],"h":["l"]},"dJ":{"W":["x","@"],"I":["x","@"]},"dK":{"e":[]},"b1":{"e":[]},"ev":{"e":[]},"eR":{"i":["I<@,@>"],"n":["I<@,@>"],"k":["I<@,@>"],"h":["I<@,@>"],"i.E":"I<@,@>"},"af":{"h":["1*"],"af.T":"1"},"cU":{"U":[]},"b6":{"U":[]},"b7":{"U":[]},"E":{"U":[]},"cE":{"U":[]},"bW":{"U":[]},"eD":{"U":[]},"cY":{"U":[]},"dL":{"V":[]},"bt":{"V":[]},"cz":{"af":["V*"],"h":["V*"],"af.T":"V*"},"eC":{"V":[]},"eP":{"V":[]},"ck":{"a3":[]},"bQ":{"af":["a3*"],"a3":[],"h":["a3*"],"af.T":"a3*"},"cR":{"a3":[]},"d3":{"a3":[]},"ei":{"cS":[]},"dV":{"b2":[]},"e3":{"b2":[]},"e5":{"b2":[]},"ez":{"b2":[]}}'))
H.p9(v.typeUniverse,JSON.parse('{"a8":1,"k":1,"b9":1,"eg":2,"fs":1,"ct":1,"fk":1,"c4":1,"cl":2,"ef":1,"bX":1,"bF":1,"cV":1,"eV":2,"d8":1,"cv":1,"cC":1,"cF":2,"hn":2,"cG":2,"d9":1,"ds":2,"dQ":2,"dT":2,"e7":1,"fH":1,"L":1,"cu":1,"b6":1,"b7":1,"E":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.lC
return{D:s("bL"),F:s("bp"),Y:s("bq"),G:s("k<@>"),h:s("D"),C:s("K"),aD:s("j"),c8:s("ah"),bX:s("bP"),Z:s("ay"),v:s("bx"),fS:s("bR"),gk:s("bT"),Q:s("w<aj>"),s:s("w<x>"),gn:s("w<@>"),t:s("w<l>"),x:s("w<dI*>"),bb:s("w<dL*>"),am:s("w<dM*>"),g0:s("w<dN*>"),b7:s("w<b2*>"),cP:s("w<bt*>"),M:s("w<dX*>"),k:s("w<b4*>"),b:s("w<e_*>"),aZ:s("w<bS*>"),L:s("w<ee*>"),u:s("w<n<b4*>*>"),B:s("w<ip*>"),h8:s("w<ba*>"),eb:s("w<eC*>"),cS:s("w<ak*>"),d1:s("w<eE*>"),o:s("w<eB*>"),du:s("w<eP*>"),cz:s("w<eQ*>"),eG:s("w<cV<M*>*>"),i:s("w<x*>"),fG:s("w<f0*>"),bw:s("w<f3*>"),br:s("w<f9*>"),fj:s("w<fa*>"),d6:s("w<cZ*>"),dv:s("w<d_*>"),hg:s("w<d0*>"),by:s("w<d1*>"),fF:s("w<d2*>"),j:s("w<fo*>"),m:s("w<Z*>"),V:s("w<l*>"),f:s("w<~(U*)*>"),T:s("cy"),eH:s("m2"),g:s("aA"),aU:s("z<@>"),h9:s("C<x*,cS*>"),cn:s("C<x*,eS*>"),dO:s("C<x*,x*>"),w:s("C<x*,f6*>"),en:s("C<l*,n<cZ*>*>"),af:s("C<l*,n<d_*>*>"),gr:s("C<l*,n<d1*>*>"),gb:s("C<l*,n<d2*>*>"),J:s("C<l*,fc*>"),E:s("C<l*,aw*>"),a:s("C<l*,l*>"),aH:s("n<@>"),eO:s("I<@,@>"),eM:s("cH<x*,x>"),bK:s("bU"),bZ:s("cL"),dD:s("X"),bm:s("bY"),P:s("an"),K:s("M"),q:s("a6<R>"),fv:s("mj"),ew:s("c1"),N:s("x"),g7:s("m"),bY:s("bc"),aW:s("c3"),aF:s("cX"),gc:s("bd"),ak:s("bE"),U:s("c5<x,x>"),R:s("fm"),gH:s("c7"),ac:s("a0"),cJ:s("aw"),gR:s("Z"),z:s("@"),S:s("l"),fr:s("br*"),l:s("bv*"),gj:s("V*"),dn:s("cE*"),hc:s("ba*"),d:s("bW*"),ah:s("a3*"),A:s("0&*"),_:s("M*"),c1:s("cU*"),X:s("x*"),eB:s("f5*"),eP:s("cY*"),n:s("fb*"),r:s("fd*"),y:s("fe*"),O:s("ff*"),I:s("d0*"),c:s("fg*"),p:s("fh*"),e:s("l*"),dm:s("~(U*)*"),bG:s("m1<an>?"),W:s("M?"),H:s("R")}})();(function constants(){var s=hunkHelpers.makeConstList
C.p=W.bq.prototype
C.i=W.br.prototype
C.R=W.b4.prototype
C.U=J.a.prototype
C.b=J.w.prototype
C.V=J.cw.prototype
C.c=J.cx.prototype
C.v=J.cy.prototype
C.d=J.by.prototype
C.a=J.aM.prototype
C.W=J.aA.prototype
C.C=J.ey.prototype
C.a3=P.eI.prototype
C.D=W.cW.prototype
C.o=J.bE.prototype
C.E=W.bf.prototype
C.F=W.c6.prototype
C.G=new E.bN("Browser.chrome")
C.q=new E.bN("Browser.firefox")
C.r=new E.bN("Browser.edge")
C.H=new E.bN("Browser.other")
C.a6=new P.hK()
C.I=new P.hJ()
C.t=function getTagFallback(o) {
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
C.u=function(hooks) { return hooks; }

C.P=new P.ew()
C.e=new P.jx()
C.Q=new P.jB()
C.f=new P.jZ()
C.m=new P.bu(0)
C.S=new P.bu(5e6)
C.T=new P.ib("element",!1,!1,!1)
C.j=H.d(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.X=H.d(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.i)
C.k=H.d(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.l=H.d(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.Y=H.d(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.i)
C.w=H.d(s([]),t.i)
C.Z=H.d(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.x=H.d(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.d(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.y=H.d(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.z=H.d(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.A=H.d(s(["bind","if","ref","repeat","syntax"]),t.i)
C.n=H.d(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.i)
C.a_=new H.cm(0,{},C.w,H.lC("cm<x*,x*>"))
C.a0=new E.bZ("OperatingSystem.windows")
C.B=new E.bZ("OperatingSystem.mac")
C.a1=new E.bZ("OperatingSystem.linux")
C.a2=new E.bZ("OperatingSystem.other")
C.a4=new P.jy(!1)
C.a5=new P.c9(null,2)})();(function staticFields(){$.mJ=null
$.aJ=0
$.lT=null
$.lS=null
$.nb=null
$.n5=null
$.nh=null
$.kx=null
$.kD=null
$.lE=null
$.cd=null
$.dx=null
$.dy=null
$.ly=!1
$.aG=C.f
$.ab=H.d([],H.lC("w<M>"))
$.b5=null
$.l1=null
$.m_=null
$.lZ=null
$.d6=P.l9(t.N,t.Z)
$.i_=null
$.m8=null
$.mb=null
$.aS=null
$.ml=null
$.mA=null
$.mD=null
$.mC=null
$.jC=null
$.jD=null
$.jE=null
$.mB=null
$.ma=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"qU","no",function(){return H.qu("_$dart_dartClosure")})
s($,"r6","np",function(){return H.aU(H.jh({
toString:function(){return"$receiver$"}}))})
s($,"r7","nq",function(){return H.aU(H.jh({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"r8","nr",function(){return H.aU(H.jh(null))})
s($,"r9","ns",function(){return H.aU(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"rc","nv",function(){return H.aU(H.jh(void 0))})
s($,"rd","nw",function(){return H.aU(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"rb","nu",function(){return H.aU(H.mt(null))})
s($,"ra","nt",function(){return H.aU(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"rf","ny",function(){return H.aU(H.mt(void 0))})
s($,"re","nx",function(){return H.aU(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"rv","lK",function(){return P.oN()})
s($,"rg","nz",function(){return new P.jz().$0()})
s($,"rh","nA",function(){return new P.jA().$0()})
s($,"rw","nE",function(){return new Int8Array(H.cb(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rz","nG",function(){return P.ox("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rP","nH",function(){return P.pv()})
s($,"rx","nF",function(){return P.m4(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"ro","nD",function(){return Z.au(0)})
s($,"ri","nB",function(){return Z.au(511)})
s($,"rq","bn",function(){return Z.au(1)})
s($,"rp","bm",function(){return Z.au(2)})
s($,"rk","bl",function(){return Z.au(4)})
s($,"rr","bo",function(){return Z.au(8)})
s($,"rs","bJ",function(){return Z.au(16)})
s($,"rl","dC",function(){return Z.au(32)})
s($,"rm","dD",function(){return Z.au(64)})
s($,"rn","nC",function(){return Z.au(96)})
s($,"rt","ci",function(){return Z.au(128)})
s($,"rj","bk",function(){return Z.au(256)})
s($,"qS","nn",function(){return new V.i0()})
s($,"qR","F",function(){return $.nn()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cL,DataView:H.X,ArrayBufferView:H.X,Float32Array:H.bA,Float64Array:H.bA,Int16Array:H.en,Int32Array:H.eo,Int8Array:H.ep,Uint16Array:H.eq,Uint32Array:H.er,Uint8ClampedArray:H.cN,CanvasPixelArray:H.cN,Uint8Array:H.bY,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.hE,HTMLAnchorElement:W.dF,HTMLAreaElement:W.dG,HTMLBaseElement:W.bL,Blob:W.bp,HTMLBodyElement:W.bq,HTMLCanvasElement:W.br,CDATASection:W.ax,CharacterData:W.ax,Comment:W.ax,ProcessingInstruction:W.ax,Text:W.ax,CSSPerspective:W.hO,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.cn,MSStyleCSSProperties:W.cn,CSS2Properties:W.cn,CSSImageValue:W.am,CSSKeywordValue:W.am,CSSNumericValue:W.am,CSSPositionValue:W.am,CSSResourceValue:W.am,CSSUnitValue:W.am,CSSURLImageValue:W.am,CSSStyleValue:W.am,CSSMatrixComponent:W.aL,CSSRotation:W.aL,CSSScale:W.aL,CSSSkew:W.aL,CSSTranslation:W.aL,CSSTransformComponent:W.aL,CSSTransformValue:W.hQ,CSSUnparsedValue:W.hR,DataTransferItemList:W.hS,HTMLDivElement:W.b4,DOMException:W.hT,ClientRectList:W.co,DOMRectList:W.co,DOMRectReadOnly:W.cp,DOMStringList:W.dY,DOMTokenList:W.hU,Element:W.D,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ah,FileList:W.bP,FileWriter:W.e0,HTMLFormElement:W.e2,Gamepad:W.az,History:W.i9,HTMLCollection:W.bw,HTMLFormControlsCollection:W.bw,HTMLOptionsCollection:W.bw,ImageData:W.bx,HTMLImageElement:W.bR,HTMLInputElement:W.bT,KeyboardEvent:W.bz,Location:W.il,MediaList:W.iE,MessagePort:W.bU,MIDIInputMap:W.ek,MIDIOutputMap:W.el,MimeType:W.aB,MimeTypeArray:W.em,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,DocumentType:W.v,Node:W.v,NodeList:W.cO,RadioNodeList:W.cO,Plugin:W.aC,PluginArray:W.eA,RTCStatsReport:W.eJ,HTMLSelectElement:W.eL,SourceBuffer:W.aq,SourceBufferList:W.eN,SpeechGrammar:W.aD,SpeechGrammarList:W.eO,SpeechRecognitionResult:W.aE,Storage:W.eU,CSSStyleSheet:W.ar,StyleSheet:W.ar,HTMLTableCellElement:W.bc,HTMLTableDataCellElement:W.bc,HTMLTableHeaderCellElement:W.bc,HTMLTableElement:W.cW,HTMLTableRowElement:W.eY,HTMLTableSectionElement:W.eZ,HTMLTemplateElement:W.c3,TextTrack:W.as,TextTrackCue:W.aa,VTTCue:W.aa,TextTrackCueList:W.f1,TextTrackList:W.f2,TimeRanges:W.jb,Touch:W.aF,TouchEvent:W.bD,TouchList:W.f7,TrackDefaultList:W.jf,CompositionEvent:W.aV,FocusEvent:W.aV,TextEvent:W.aV,UIEvent:W.aV,URL:W.jw,VideoTrackList:W.fq,WheelEvent:W.bf,Window:W.c6,DOMWindow:W.c6,Attr:W.c7,CSSRuleList:W.fx,ClientRect:W.d5,DOMRect:W.d5,GamepadList:W.fM,NamedNodeMap:W.da,MozNamedAttrMap:W.da,SpeechRecognitionResultList:W.h5,StyleSheetList:W.hc,SVGLength:P.aN,SVGLengthList:P.ed,SVGNumber:P.aR,SVGNumberList:P.eu,SVGPointList:P.iM,SVGScriptElement:P.c1,SVGStringList:P.eW,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aT,SVGTransformList:P.f8,AudioBuffer:P.hH,AudioParamMap:P.dJ,AudioTrackList:P.dK,AudioContext:P.b1,webkitAudioContext:P.b1,BaseAudioContext:P.b1,OfflineAudioContext:P.ev,WebGL2RenderingContext:P.eI,SQLResultSetRowList:P.eR})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bX.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.bA.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
W.dh.$nativeSuperclassTag="EventTarget"
W.di.$nativeSuperclassTag="EventTarget"
W.dk.$nativeSuperclassTag="EventTarget"
W.dl.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.nf,[])
else K.nf([])})})()
//# sourceMappingURL=test.dart.js.map
