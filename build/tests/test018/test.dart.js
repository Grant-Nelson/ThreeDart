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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lI(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={lf:function lf(){},
lh:function(a){return new H.eg(a)},
kD:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
oj:function(a,b,c,d){if(t.gw.b(a))return new H.cv(a,b,c.K("@<0>").b4(d).K("cv<1,2>"))
return new H.aR(a,b,c.K("@<0>").b4(d).K("aR<1,2>"))},
ih:function(){return new P.c6("No element")},
o9:function(){return new P.c6("Too many elements")},
oE:function(a,b){var s=J.aM(a)
if(typeof s!=="number")return s.Z()
H.eR(a,0,s-1,b)},
eR:function(a,b,c,d){if(c-b<=32)H.oD(a,b,c,d)
else H.oC(a,b,c,d)},
oD:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b0(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a2()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
oC:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a3(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a3(a6+a7,2),d=e-h,c=e+h,b=J.b0(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a2()
if(a4>0){s=a3
a3=a2
a2=s}b.l(a5,g,a)
b.l(a5,e,a1)
b.l(a5,f,a3)
b.l(a5,d,b.h(a5,a6))
b.l(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.D(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.a9()
if(n<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a2()
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
if(typeof j!=="number")return j.a9()
if(j<0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a2()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a2()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a9()
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
if(r<g&&q>f){for(;J.D(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.D(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.l(a5,p,b.h(a5,r))
b.l(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a9()
m=q-1
if(n<0){b.l(a5,p,b.h(a5,r))
l=r+1
b.l(a5,r,b.h(a5,q))
b.l(a5,q,o)
r=l}else{b.l(a5,p,b.h(a5,q))
b.l(a5,q,o)}q=m
break}}H.eR(a5,r,q,a8)}else H.eR(a5,r,q,a8)},
eg:function eg(a){this.a=a},
r:function r(a){this.a=a},
k:function k(){},
cJ:function cJ(){},
bc:function bc(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aR:function aR(a,b,c){this.a=a
this.b=b
this.$ti=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.$ti=c},
ek:function ek(a,b){this.a=null
this.b=a
this.c=b},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
fw:function fw(a,b){this.a=a
this.b=b},
cz:function cz(){},
fp:function fp(){},
c8:function c8(){},
o1:function(){throw H.b(P.B("Cannot modify unmodifiable Map"))},
nn:function(a){var s,r=H.nm(a)
if(r!=null)return r
s="minified:"+a
return s},
nf:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
f:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a5(a)
if(typeof s!="string")throw H.b(H.az(a))
return s},
cV:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mh:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.c(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.b(P.a4(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.E(q,o)|32)>r)return n}return parseInt(a,b)},
eK:function(a){return H.om(a)},
om:function(a){var s,r,q
if(a instanceof P.N)return H.ao(H.bL(a),null)
if(J.dG(a)===C.U||t.ak.b(a)){s=C.u(a)
if(H.mg(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.mg(q))return q}}return H.ao(H.bL(a),null)},
mg:function(a){var s=a!=="Object"&&a!==""
return s},
on:function(){if(!!self.location)return self.location.href
return null},
mf:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
ov:function(a){var s,r,q,p=H.d([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.ch(q))throw H.b(H.az(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aQ(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.az(q))}return H.mf(p)},
mi:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.ch(q))throw H.b(H.az(q))
if(q<0)throw H.b(H.az(q))
if(q>65535)return H.ov(a)}return H.mf(a)},
ow:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.ix()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
at:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aQ(s,10))>>>0,56320|s&1023)}}throw H.b(P.a4(a,0,1114111,null,null))},
c3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ou:function(a){var s=H.c3(a).getFullYear()+0
return s},
os:function(a){var s=H.c3(a).getMonth()+1
return s},
oo:function(a){var s=H.c3(a).getDate()+0
return s},
op:function(a){var s=H.c3(a).getHours()+0
return s},
or:function(a){var s=H.c3(a).getMinutes()+0
return s},
ot:function(a){var s=H.c3(a).getSeconds()+0
return s},
oq:function(a){var s=H.c3(a).getMilliseconds()+0
return s},
v:function(a){throw H.b(H.az(a))},
c:function(a,b){if(a==null)J.aM(a)
throw H.b(H.cl(a,b))},
cl:function(a,b){var s,r,q="index"
if(!H.ch(b))return new P.ai(!0,b,q,null)
s=J.aM(a)
if(!(b<0)){if(typeof s!=="number")return H.v(s)
r=b>=s}else r=!0
if(r)return P.O(b,a,q,null,s)
return P.eL(b,q)},
qq:function(a,b,c){if(a>c)return P.a4(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a4(b,a,c,"end",null)
return new P.ai(!0,b,"end",null)},
az:function(a){return new P.ai(!0,a,null,null)},
qk:function(a){if(typeof a!="number")throw H.b(H.az(a))
return a},
b:function(a){var s,r
if(a==null)a=new P.ey()
s=new Error()
s.dartException=a
r=H.qK
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qK:function(){return J.a5(this.dartException)},
o:function(a){throw H.b(a)},
q:function(a){throw H.b(P.b6(a))},
aX:function(a){var s,r,q,p,o,n
a=H.nj(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jl(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
jm:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mu:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mc:function(a,b){return new H.ex(a,b==null?null:b.method)},
lg:function(a,b){var s=b==null,r=s?null:b.method
return new H.ee(a,r,s?null:b.receiver)},
ag:function(a){if(a==null)return new H.iP(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bM(a,a.dartException)
return H.qg(a)},
bM:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qg:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aQ(r,16)&8191)===10)switch(q){case 438:return H.bM(a,H.lg(H.f(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bM(a,H.mc(H.f(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.nq()
o=$.nr()
n=$.ns()
m=$.nt()
l=$.nw()
k=$.nx()
j=$.nv()
$.nu()
i=$.nz()
h=$.ny()
g=p.ai(s)
if(g!=null)return H.bM(a,H.lg(s,g))
else{g=o.ai(s)
if(g!=null){g.method="call"
return H.bM(a,H.lg(s,g))}else{g=n.ai(s)
if(g==null){g=m.ai(s)
if(g==null){g=l.ai(s)
if(g==null){g=k.ai(s)
if(g==null){g=j.ai(s)
if(g==null){g=m.ai(s)
if(g==null){g=i.ai(s)
if(g==null){g=h.ai(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bM(a,H.mc(s,g))}}return H.bM(a,new H.fo(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cX()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bM(a,new P.ai(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cX()
return a},
lL:function(a){var s
if(a==null)return new H.hc(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hc(a)},
qs:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
qA:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.p("Unsupported number of arguments for wrapped closure"))},
ck:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qA)
a.$identity=s
return s},
o0:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.eY().constructor.prototype):Object.create(new H.bQ(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aN
if(typeof r!=="number")return r.v()
$.aN=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.m1(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nX(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.m1(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nX:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nd,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.nV:H.nU
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
nY:function(a,b,c,d){var s=H.m0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
m1:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.o_(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nY(r,!p,s,b)
if(r===0){p=$.aN
if(typeof p!=="number")return p.v()
$.aN=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.f(H.l5())+";return "+n+"."+H.f(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aN
if(typeof p!=="number")return p.v()
$.aN=p+1
m+=p
return new Function("return function("+m+"){return this."+H.f(H.l5())+"."+H.f(s)+"("+m+");}")()},
nZ:function(a,b,c,d){var s=H.m0,r=H.nW
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
o_:function(a,b){var s,r,q,p,o,n,m=H.l5(),l=$.lZ
if(l==null)l=$.lZ=H.lY("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nZ(r,!p,s,b)
if(r===1){p="return function(){return this."+H.f(m)+"."+H.f(s)+"(this."+l+");"
o=$.aN
if(typeof o!=="number")return o.v()
$.aN=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.f(m)+"."+H.f(s)+"(this."+l+", "+n+");"
o=$.aN
if(typeof o!=="number")return o.v()
$.aN=o+1
return new Function(p+o+"}")()},
lI:function(a,b,c,d,e,f,g){return H.o0(a,b,c,d,!!e,!!f,g)},
nU:function(a,b){return H.hq(v.typeUniverse,H.bL(a.a),b)},
nV:function(a,b){return H.hq(v.typeUniverse,H.bL(a.c),b)},
m0:function(a){return a.a},
nW:function(a){return a.c},
l5:function(){var s=$.m_
return s==null?$.m_=H.lY("self"):s},
lY:function(a){var s,r,q,p=new H.bQ("self","target","receiver","name"),o=J.le(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.bO("Field name "+a+" not found."))},
qJ:function(a){throw H.b(new P.dZ(a))},
qu:function(a){return v.getIsolateTag(a)},
rS:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qE:function(a){var s,r,q,p,o,n=$.nc.$1(a),m=$.kC[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kI[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.n6.$2(a,n)
if(q!=null){m=$.kC[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kI[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kW(s)
$.kC[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kI[n]=s
return s}if(p==="-"){o=H.kW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nh(a,s)
if(p==="*")throw H.b(P.jv(n))
if(v.leafTags[n]===true){o=H.kW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nh(a,s)},
nh:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lN(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kW:function(a){return J.lN(a,!1,null,!!a.$iA)},
qF:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kW(s)
else return J.lN(s,c,null,null)},
qy:function(){if(!0===$.lM)return
$.lM=!0
H.qz()},
qz:function(){var s,r,q,p,o,n,m,l
$.kC=Object.create(null)
$.kI=Object.create(null)
H.qx()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ni.$1(o)
if(n!=null){m=H.qF(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qx:function(){var s,r,q,p,o,n,m=C.J()
m=H.cj(C.K,H.cj(C.L,H.cj(C.v,H.cj(C.v,H.cj(C.M,H.cj(C.N,H.cj(C.O(C.u),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nc=new H.kE(p)
$.n6=new H.kF(o)
$.ni=new H.kG(n)},
cj:function(a,b){return a(b)||b},
od:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.a3("Illegal RegExp pattern ("+String(n)+")",a,null))},
nl:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qr:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nj:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lQ:function(a,b,c){var s=H.qI(a,b,c)
return s},
qI:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nj(b),'g'),H.qr(c))},
cq:function cq(){},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jl:function jl(a,b,c,d,e,f){var _=this
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
fo:function fo(a){this.a=a},
iP:function iP(a){this.a=a},
hc:function hc(a){this.a=a
this.b=null},
bx:function bx(){},
f4:function f4(){},
eY:function eY(){},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eP:function eP(a){this.a=a},
C:function C(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ij:function ij(a){this.a=a},
im:function im(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cG:function cG(a,b){this.a=a
this.$ti=b},
ej:function ej(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
ed:function ed(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cg:function(a){return a},
b_:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.cl(b,a))},
pu:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.qq(a,b,c))
return b},
cQ:function cQ(){},
Y:function Y(){},
c0:function c0(){},
bF:function bF(){},
cR:function cR(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
cS:function cS(){},
c1:function c1(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
oA:function(a,b){var s=b.c
return s==null?b.c=H.lw(a,b.z,!0):s},
mo:function(a,b){var s=b.c
return s==null?b.c=H.dw(a,"m6",[b.z]):s},
mp:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mp(a.z)
return s===11||s===12},
oz:function(a){return a.cy},
lK:function(a){return H.lx(v.typeUniverse,a,!1)},
bn:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.mS(a,r,!0)
case 7:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.lw(a,r,!0)
case 8:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.mR(a,r,!0)
case 9:q=b.Q
p=H.dF(a,q,a0,a1)
if(p===q)return b
return H.dw(a,b.z,p)
case 10:o=b.z
n=H.bn(a,o,a0,a1)
m=b.Q
l=H.dF(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lu(a,n,l)
case 11:k=b.z
j=H.bn(a,k,a0,a1)
i=b.Q
h=H.qd(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mQ(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dF(a,g,a0,a1)
o=b.z
n=H.bn(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lv(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.hJ("Attempted to substitute unexpected RTI kind "+c))}},
dF:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bn(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qe:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bn(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
qd:function(a,b,c,d){var s,r=b.a,q=H.dF(a,r,c,d),p=b.b,o=H.dF(a,p,c,d),n=b.c,m=H.qe(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fP()
s.a=q
s.b=o
s.c=m
return s},
d:function(a,b){a[v.arrayRti]=b
return a},
ql:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.nd(s)
return a.$S()}return null},
ne:function(a,b){var s
if(H.mp(b))if(a instanceof H.bx){s=H.ql(a)
if(s!=null)return s}return H.bL(a)},
bL:function(a){var s
if(a instanceof P.N){s=a.$ti
return s!=null?s:H.lE(a)}if(Array.isArray(a))return H.lC(a)
return H.lE(J.dG(a))},
lC:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
dC:function(a){var s=a.$ti
return s!=null?s:H.lE(a)},
lE:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pB(a,s)},
pB:function(a,b){var s=a instanceof H.bx?a.__proto__.__proto__.constructor:b,r=H.pc(v.typeUniverse,s.name)
b.$ccache=r
return r},
nd:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lx(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pA:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dB(q,a,H.pF)
if(!H.b1(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dB(q,a,H.pI)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.ch
else if(s===t.gR||s===t.H)r=H.pE
else if(s===t.N)r=H.pG
else r=s===t.cJ?H.lF:null
if(r!=null)return H.dB(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.qB)){q.r="$i"+p
return H.dB(q,a,H.pH)}}else if(p===7)return H.dB(q,a,H.py)
return H.dB(q,a,H.pw)},
dB:function(a,b,c){a.b=c
return a.b(b)},
pz:function(a){var s,r,q=this
if(!H.b1(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.pt
else if(q===t.K)r=H.ps
else r=H.px
q.a=r
return q.a(a)},
q6:function(a){var s,r=a.y
if(!H.b1(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
pw:function(a){var s=this
if(a==null)return H.q6(s)
return H.Z(v.typeUniverse,H.ne(a,s),null,s,null)},
py:function(a){if(a==null)return!0
return this.z.b(a)},
pH:function(a){var s=this,r=s.r
if(a instanceof P.N)return!!a[r]
return!!J.dG(a)[r]},
rQ:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.n0(a,s)},
px:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.n0(a,s)},
n0:function(a,b){throw H.b(H.p2(H.mI(a,H.ne(a,b),H.ao(b,null))))},
mI:function(a,b,c){var s=P.i5(a),r=H.ao(b==null?H.bL(a):b,null)
return s+": type '"+H.f(r)+"' is not a subtype of type '"+H.f(c)+"'"},
p2:function(a){return new H.du("TypeError: "+a)},
a7:function(a,b){return new H.du("TypeError: "+H.mI(a,null,b))},
pF:function(a){return a!=null},
ps:function(a){return a},
pI:function(a){return!0},
pt:function(a){return a},
lF:function(a){return!0===a||!1===a},
rC:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a7(a,"bool"))},
rE:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a7(a,"bool"))},
rD:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a7(a,"bool?"))},
rF:function(a){if(typeof a=="number")return a
throw H.b(H.a7(a,"double"))},
rH:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a7(a,"double"))},
rG:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a7(a,"double?"))},
ch:function(a){return typeof a=="number"&&Math.floor(a)===a},
rI:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a7(a,"int"))},
rK:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a7(a,"int"))},
rJ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a7(a,"int?"))},
pE:function(a){return typeof a=="number"},
rL:function(a){if(typeof a=="number")return a
throw H.b(H.a7(a,"num"))},
rN:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a7(a,"num"))},
rM:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a7(a,"num?"))},
pG:function(a){return typeof a=="string"},
rO:function(a){if(typeof a=="string")return a
throw H.b(H.a7(a,"String"))},
lD:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a7(a,"String"))},
rP:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a7(a,"String?"))},
q9:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.v(r,H.ao(a[q],b))
return s},
n1:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
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
if(!j)l+=C.a.v(" extends ",H.ao(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.ao(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.v(a3,H.ao(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.v(a3,H.ao(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.lS(H.ao(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
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
return J.lS(q===11||q===12?C.a.v("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.f(H.ao(a.z,b))+">"
if(l===9){p=H.qf(a.z)
o=a.Q
return o.length!==0?p+("<"+H.q9(o,b)+">"):p}if(l===11)return H.n1(a,b,null)
if(l===12)return H.n1(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.c(b,n)
return b[n]}return"?"},
qf:function(a){var s,r=H.nm(a)
if(r!=null)return r
s="minified:"+a
return s},
mT:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pc:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lx(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dx(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dw(a,b,q)
n[b]=o
return o}else return m},
pa:function(a,b){return H.n_(a.tR,b)},
p9:function(a,b){return H.n_(a.eT,b)},
lx:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mO(H.mM(a,null,b,c))
r.set(b,s)
return s},
hq:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mO(H.mM(a,b,c,!0))
q.set(c,r)
return r},
pb:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lu(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bm:function(a,b){b.a=H.pz
b.b=H.pA
return b},
dx:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.au(null,null)
s.y=b
s.cy=c
r=H.bm(a,s)
a.eC.set(c,r)
return r},
mS:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.p7(a,b,r,c)
a.eC.set(r,s)
return s},
p7:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b1(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.au(null,null)
q.y=6
q.z=b
q.cy=c
return H.bm(a,q)},
lw:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.p6(a,b,r,c)
a.eC.set(r,s)
return s},
p6:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b1(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.kJ(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.kJ(q.z))return q
else return H.oA(a,b)}}p=new H.au(null,null)
p.y=7
p.z=b
p.cy=c
return H.bm(a,p)},
mR:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.p4(a,b,r,c)
a.eC.set(r,s)
return s},
p4:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b1(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dw(a,"m6",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.au(null,null)
q.y=8
q.z=b
q.cy=c
return H.bm(a,q)},
p8:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.au(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bm(a,s)
a.eC.set(q,r)
return r},
hp:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
p3:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dw:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hp(c)+">"
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
lu:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hp(r)+">")
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
mQ:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hp(m)
if(j>0){s=l>0?",":""
r=H.hp(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.p3(i)
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
lv:function(a,b,c,d){var s,r=b.cy+("<"+H.hp(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.p5(a,b,c,r,d)
a.eC.set(r,s)
return s},
p5:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bn(a,b,r,0)
m=H.dF(a,c,r,0)
return H.lv(a,n,m,c!==m)}}l=new H.au(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bm(a,l)},
mM:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mO:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.oX(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mN(a,r,g,f,!1)
else if(q===46)r=H.mN(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bl(a.u,a.e,f.pop()))
break
case 94:f.push(H.p8(a.u,f.pop()))
break
case 35:f.push(H.dx(a.u,5,"#"))
break
case 64:f.push(H.dx(a.u,2,"@"))
break
case 126:f.push(H.dx(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.lt(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dw(p,n,o))
else{m=H.bl(p,a.e,n)
switch(m.y){case 11:f.push(H.lv(p,m,o,a.n))
break
default:f.push(H.lu(p,m,o))
break}}break
case 38:H.oY(a,f)
break
case 42:l=a.u
f.push(H.mS(l,H.bl(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.lw(l,H.bl(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mR(l,H.bl(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fP()
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
H.lt(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mQ(p,H.bl(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.lt(a.u,a.e,o)
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
return H.bl(a.u,a.e,h)},
oX:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mN:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mT(s,o.z)[p]
if(n==null)H.o('No "'+p+'" in "'+H.oz(o)+'"')
d.push(H.hq(s,o,n))}else d.push(p)
return m},
oY:function(a,b){var s=b.pop()
if(0===s){b.push(H.dx(a.u,1,"0&"))
return}if(1===s){b.push(H.dx(a.u,4,"1&"))
return}throw H.b(P.hJ("Unexpected extended operation "+H.f(s)))},
bl:function(a,b,c){if(typeof c=="string")return H.dw(a,c,a.sEA)
else if(typeof c=="number")return H.oZ(a,b,c)
else return c},
lt:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bl(a,b,c[s])},
p_:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bl(a,b,c[s])},
oZ:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.hJ("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.hJ("Bad index "+c+" for "+b.i(0)))},
Z:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b1(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b1(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.Z(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.Z(a,b.z,c,d,e)
if(p===6){s=d.z
return H.Z(a,b,c,s,e)}if(r===8){if(!H.Z(a,b.z,c,d,e))return!1
return H.Z(a,H.mo(a,b),c,d,e)}if(r===7){s=H.Z(a,b.z,c,d,e)
return s}if(p===8){if(H.Z(a,b,c,d.z,e))return!0
return H.Z(a,b,c,H.mo(a,d),e)}if(p===7){s=H.Z(a,b,c,d.z,e)
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
if(!H.Z(a,k,c,j,e)||!H.Z(a,j,e,k,c))return!1}return H.n2(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.n2(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pD(a,b,c,d,e)}return!1},
n2:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
pD:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.Z(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mT(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.Z(a,H.hq(a,b,l[p]),c,r[p],e))return!1
return!0},
kJ:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b1(a))if(r!==7)if(!(r===6&&H.kJ(a.z)))s=r===8&&H.kJ(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qB:function(a){var s
if(!H.b1(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
b1:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.W},
n_:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
au:function au(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fP:function fP(){this.c=this.b=this.a=null},
fK:function fK(){},
du:function du(a){this.a=a},
nm:function(a){return v.mangledGlobalNames[a]},
qG:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hE:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lM==null){H.qy()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.b(P.jv("Return interceptor for "+H.f(s(a,o))))}q=a.constructor
p=q==null?null:q[J.m8()]
if(p!=null)return p
p=H.qE(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,J.m8(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
m8:function(){var s=$.mK
return s==null?$.mK=v.getIsolateTag("_$dart_js"):s},
oa:function(a,b){if(!H.ch(a))throw H.b(P.lW(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a4(a,0,4294967295,"length",null))
return J.ob(new Array(a),b)},
ld:function(a,b){if(!H.ch(a)||a<0)throw H.b(P.bO("Length must be a non-negative integer: "+H.f(a)))
return H.d(new Array(a),b.K("x<0>"))},
ob:function(a,b){return J.le(H.d(a,b.K("x<0>")))},
le:function(a){a.fixed$length=Array
return a},
oc:function(a,b){return J.dK(a,b)},
dG:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cD.prototype
return J.cC.prototype}if(typeof a=="string")return J.aP.prototype
if(a==null)return J.cE.prototype
if(typeof a=="boolean")return J.ec.prototype
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.N)return a
return J.hE(a)},
qt:function(a){if(typeof a=="number")return J.bD.prototype
if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.N)return a
return J.hE(a)},
b0:function(a){if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.N)return a
return J.hE(a)},
hD:function(a){if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.N)return a
return J.hE(a)},
nb:function(a){if(typeof a=="number")return J.bD.prototype
if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bI.prototype
return a},
dH:function(a){if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bI.prototype
return a},
aL:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.N)return a
return J.hE(a)},
lS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qt(a).v(a,b)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dG(a).q(a,b)},
lT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nb(a).p(a,b)},
co:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nf(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b0(a).h(a,b)},
l1:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.nf(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hD(a).l(a,b,c)},
nJ:function(a,b){return J.dH(a).E(a,b)},
nK:function(a,b,c){return J.aL(a).fV(a,b,c)},
nL:function(a,b,c,d){return J.aL(a).hh(a,b,c,d)},
nM:function(a,b){return J.dH(a).X(a,b)},
dK:function(a,b){return J.nb(a).aU(a,b)},
l2:function(a,b){return J.b0(a).F(a,b)},
hH:function(a,b){return J.hD(a).J(a,b)},
nN:function(a,b,c,d){return J.aL(a).hJ(a,b,c,d)},
l3:function(a,b){return J.hD(a).I(a,b)},
nO:function(a){return J.aL(a).ghn(a)},
l4:function(a){return J.aL(a).gdr(a)},
nP:function(a){return J.aL(a).gdt(a)},
ah:function(a){return J.dG(a).gR(a)},
b2:function(a){return J.hD(a).gP(a)},
aM:function(a){return J.b0(a).gm(a)},
lU:function(a){return J.hD(a).ie(a)},
nQ:function(a,b){return J.aL(a).ij(a,b)},
nR:function(a,b,c){return J.dH(a).t(a,b,c)},
nS:function(a){return J.dH(a).is(a)},
a5:function(a){return J.dG(a).i(a)},
a:function a(){},
ec:function ec(){},
cE:function cE(){},
bb:function bb(){},
eD:function eD(){},
bI:function bI(){},
aE:function aE(){},
x:function x(a){this.$ti=a},
ii:function ii(a){this.$ti=a},
a9:function a9(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bD:function bD(){},
cD:function cD(){},
cC:function cC(){},
aP:function aP(){}},P={
oN:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qh()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.ck(new P.jX(q),1)).observe(s,{childList:true})
return new P.jW(q,s,r)}else if(self.setImmediate!=null)return P.qi()
return P.qj()},
oO:function(a){self.scheduleImmediate(H.ck(new P.jY(a),0))},
oP:function(a){self.setImmediate(H.ck(new P.jZ(a),0))},
oQ:function(a){P.ln(C.n,a)},
ln:function(a,b){var s=C.c.a3(a.a,1000)
return P.p0(s<0?0:s,b)},
mt:function(a,b){var s=C.c.a3(a.a,1000)
return P.p1(s<0?0:s,b)},
p0:function(a,b){var s=new P.dt()
s.eB(a,b)
return s},
p1:function(a,b){var s=new P.dt()
s.eC(a,b)
return s},
rA:function(a){return new P.ce(a,1)},
oT:function(){return C.a5},
oU:function(a){return new P.ce(a,3)},
pK:function(a,b){return new P.dq(a,b.K("dq<0>"))},
q5:function(){var s,r
for(s=$.ci;s!=null;s=$.ci){$.dE=null
r=s.b
$.ci=r
if(r==null)$.dD=null
s.a.$0()}},
qc:function(){$.lG=!0
try{P.q5()}finally{$.dE=null
$.lG=!1
if($.ci!=null)$.lR().$1(P.n7())}},
qa:function(a){var s=new P.fx(a),r=$.dD
if(r==null){$.ci=$.dD=s
if(!$.lG)$.lR().$1(P.n7())}else $.dD=r.b=s},
qb:function(a){var s,r,q,p=$.ci
if(p==null){P.qa(a)
$.dE=$.dD
return}s=new P.fx(a)
r=$.dE
if(r==null){s.b=p
$.ci=$.dE=s}else{q=r.b
s.b=q
$.dE=r.b=s
if(q==null)$.dD=s}},
ms:function(a,b){var s=$.aK
if(s===C.f)return P.ln(a,b)
return P.ln(a,s.ho(b))},
oH:function(a,b){var s=$.aK
if(s===C.f)return P.mt(a,b)
return P.mt(a,s.dm(b,t.aF))},
n3:function(a,b,c,d,e){P.qb(new P.kv(d,e))},
q7:function(a,b,c,d){var s,r=$.aK
if(r===c)return d.$0()
$.aK=c
s=r
try{r=d.$0()
return r}finally{$.aK=s}},
q8:function(a,b,c,d,e){var s,r=$.aK
if(r===c)return d.$1(e)
$.aK=c
s=r
try{r=d.$1(e)
return r}finally{$.aK=s}},
jX:function jX(a){this.a=a},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
dt:function dt(){this.c=0},
kf:function kf(a,b){this.a=a
this.b=b},
ke:function ke(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ce:function ce(a,b){this.a=a
this.b=b},
bJ:function bJ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dq:function dq(a,b){this.a=a
this.$ti=b},
fx:function fx(a){this.a=a
this.b=null},
cY:function cY(){},
f_:function f_(){},
d_:function d_(){},
km:function km(){},
kv:function kv(a,b){this.a=a
this.b=b},
k3:function k3(){},
k4:function k4(a,b){this.a=a
this.b=b},
k5:function k5(a,b,c){this.a=a
this.b=b
this.c=c},
of:function(a,b){return new H.C(a.K("@<0>").b4(b).K("C<1,2>"))},
og:function(a,b,c){return H.qs(a,new H.C(b.K("@<0>").b4(c).K("C<1,2>")))},
li:function(a,b){return new H.C(a.K("@<0>").b4(b).K("C<1,2>"))},
cH:function(a){return new P.dd(a.K("dd<0>"))},
ls:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oW:function(a,b){var s=new P.de(a,b)
s.c=a.e
return s},
o8:function(a,b,c){var s,r
if(P.lH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.d([],t.s)
$.af.push(a)
try{P.pJ(a,s)}finally{if(0>=$.af.length)return H.c($.af,-1)
$.af.pop()}r=P.mq(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
lc:function(a,b,c){var s,r
if(P.lH(a))return b+"..."+c
s=new P.T(b)
$.af.push(a)
try{r=s
r.a=P.mq(r.a,a,", ")}finally{if(0>=$.af.length)return H.c($.af,-1)
$.af.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lH:function(a){var s,r
for(s=$.af.length,r=0;r<s;++r)if(a===$.af[r])return!0
return!1},
pJ:function(a,b){var s,r,q,p,o,n,m,l=a.gP(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.f(l.gC(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.c(b,-1)
r=b.pop()
if(0>=b.length)return H.c(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.u()){if(j<=4){b.push(H.f(p))
return}r=H.f(p)
if(0>=b.length)return H.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.u();p=o,o=n){n=l.gC(l);++j
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
oh:function(a,b,c){var s=P.of(b,c)
a.I(0,new P.io(s,b,c))
return s},
m9:function(a,b){var s,r,q=P.cH(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
lk:function(a){var s,r={}
if(P.lH(a))return"{...}"
s=new P.T("")
try{$.af.push(a)
s.a+="{"
r.a=!0
J.l3(a,new P.is(r,s))
s.a+="}"}finally{if(0>=$.af.length)return H.c($.af,-1)
$.af.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dd:function dd(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k2:function k2(a){this.a=a
this.c=this.b=null},
de:function de(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cB:function cB(){},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(){},
i:function i(){},
cL:function cL(){},
is:function is(a,b){this.a=a
this.b=b},
W:function W(){},
hr:function hr(){},
cM:function cM(){},
c9:function c9(a,b){this.a=a
this.$ti=b},
dl:function dl(){},
df:function df(){},
dy:function dy(){},
oK:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oL(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oL:function(a,b,c,d){var s=a?$.nB():$.nA()
if(s==null)return null
if(0===c&&d===b.length)return P.mz(s,b)
return P.mz(s,b.subarray(c,P.bf(c,d,b.length)))},
mz:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ag(r)}return null},
lX:function(a,b,c,d,e,f){if(C.c.bj(f,4)!==0)throw H.b(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
pr:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pq:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.Z()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.b0(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.ae()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.c(r,o)
r[o]=n}return r},
jE:function jE(){},
jF:function jF(){},
hN:function hN(){},
hO:function hO(){},
dW:function dW(){},
dY:function dY(){},
i2:function i2(){},
ig:function ig(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
ie:function ie(a){this.a=a},
jC:function jC(){},
jG:function jG(){},
kk:function kk(a){this.b=0
this.c=a},
jD:function jD(a){this.a=a},
kj:function kj(a){this.a=a
this.b=16
this.c=0},
kH:function(a,b){var s=H.mh(a,b)
if(s!=null)return s
throw H.b(P.a3(a,null,null))},
o5:function(a){if(a instanceof H.bx)return a.i(0)
return"Instance of '"+H.f(H.eK(a))+"'"},
ip:function(a,b,c,d){var s,r=c?J.ld(a,d):J.oa(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
lj:function(a,b,c){var s,r=H.d([],c.K("x<0>"))
for(s=J.b2(a);s.u();)r.push(s.gC(s))
if(b)return r
return J.le(r)},
oi:function(a,b,c){var s,r,q=J.ld(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.c(q,s)
q[s]=r}return q},
f1:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bf(b,c,r)
if(b<=0){if(typeof c!=="number")return c.a9()
q=c<r}else q=!0
return H.mi(q?s.slice(b,c):s)}if(t.bm.b(a))return H.ow(a,b,P.bf(b,c,a.length))
return P.oF(a,b,c)},
oF:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.b(P.a4(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.b(P.a4(c,b,a.length,o,o))
r=J.b2(a)
for(q=0;q<b;++q)if(!r.u())throw H.b(P.a4(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gC(r))
else for(q=b;q<c;++q){if(!r.u())throw H.b(P.a4(c,b,q,o,o))
p.push(r.gC(r))}return H.mi(p)},
ox:function(a){return new H.ed(a,H.od(a,!1,!0,!1,!1,!1))},
mq:function(a,b,c){var s=J.b2(b)
if(!s.u())return a
if(c.length===0){do a+=H.f(s.gC(s))
while(s.u())}else{a+=H.f(s.gC(s))
for(;s.u();)a=a+c+H.f(s.gC(s))}return a},
mw:function(){var s=H.on()
if(s!=null)return P.oJ(s)
throw H.b(P.B("'Uri.base' is not supported"))},
ki:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nH().b
if(typeof b!="string")H.o(H.az(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.ghI().cd(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.c(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.at(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
o2:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
o3:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
e0:function(a){if(a>=10)return""+a
return"0"+a},
m3:function(a){return new P.bz(1000*a)},
i5:function(a){if(typeof a=="number"||H.lF(a)||null==a)return J.a5(a)
if(typeof a=="string")return JSON.stringify(a)
return P.o5(a)},
hJ:function(a){return new P.dN(a)},
bO:function(a){return new P.ai(!1,null,null,a)},
lW:function(a,b,c){return new P.ai(!0,a,b,c)},
nT:function(a,b){if(a==null)throw H.b(new P.ai(!1,null,b,"Must not be null"))
return a},
mj:function(a){var s=null
return new P.c4(s,s,!1,s,s,a)},
eL:function(a,b){return new P.c4(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.c4(b,c,!0,a,d,"Invalid value")},
bf:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.v(c)
s=a>c}else s=!0
if(s)throw H.b(P.a4(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
s=b>c}else s=!0
if(s)throw H.b(P.a4(b,a,c,"end",null))
return b}return c},
mk:function(a,b){if(a<0)throw H.b(P.a4(a,0,null,b,null))
return a},
O:function(a,b,c,d,e){var s=e==null?J.aM(b):e
return new P.ea(s,!0,a,c,"Index out of range")},
B:function(a){return new P.fq(a)},
jv:function(a){return new P.fn(a)},
lm:function(a){return new P.c6(a)},
b6:function(a){return new P.dX(a)},
p:function(a){return new P.fM(a)},
a3:function(a,b,c){return new P.ib(a,b,c)},
lP:function(a){H.qG(a)},
oJ:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.E(a5,4)^58)*3|C.a.E(a5,0)^100|C.a.E(a5,1)^97|C.a.E(a5,2)^116|C.a.E(a5,3)^97)>>>0
if(s===0)return P.mv(a4<a4?C.a.t(a5,0,a4):a5,5,a3).ge9()
else if(s===32)return P.mv(C.a.t(a5,5,a4),0,a3).ge9()}r=P.ip(8,0,!1,t.S)
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
if(P.n4(a5,0,a4,0,r)>=14){if(7>=r.length)return H.c(r,7)
r[7]=a4}if(1>=r.length)return H.c(r,1)
p=r[1]
if(p>=0)if(P.n4(a5,0,p,20,r)===20){if(7>=r.length)return H.c(r,7)
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
j=!1}else{if(!(l<a4&&l===m+2&&C.a.a7(a5,"..",m)))h=l>m+2&&C.a.a7(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.a7(a5,"file",0)){if(o<=0){if(!C.a.a7(a5,"/",m)){g="file:///"
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
a5=C.a.b_(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.a7(a5,"http",0)){if(q&&n+3===m&&C.a.a7(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.b_(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.a7(a5,"https",0)){if(q&&n+4===m&&C.a.a7(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.b_(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.t(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.h6(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.pk(a5,0,p)
else{if(p===0)P.cf(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.pl(a5,d,o-1):""
b=P.ph(a5,o,n,!1)
q=n+1
if(q<m){a=H.mh(C.a.t(a5,q,m),a3)
a0=P.pj(a==null?H.o(P.a3("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pi(a5,m,l,a3,i,b!=null)
a2=l<k?P.lz(a5,l+1,k,a3):a3
return new P.bK(i,c,b,a0,a1,a2,k<a4?P.pg(a5,k+1,a4):a3)},
my:function(a){var s=t.N
return C.b.hP(H.d(a.split("&"),t.s),P.li(s,s),new P.jA(C.e))},
oI:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jx(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.X(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.kH(C.a.t(a,q,r),null)
if(typeof n!=="number")return n.a2()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.c(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.kH(C.a.t(a,q,c),null)
if(typeof n!=="number")return n.a2()
if(n>255)j.$2(k,q)
if(p>=s)return H.c(i,p)
i[p]=n
return i},
mx:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jy(a),b=new P.jz(c,a)
if(a.length<2)c.$1("address is too short")
s=H.d([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.X(a,r)
if(n===58){if(r===a0){++r
if(C.a.X(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gau(s)
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
mU:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cf:function(a,b,c){throw H.b(P.a3(c,a,b))},
pj:function(a,b){if(a!=null&&a===P.mU(b))return null
return a},
ph:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.X(a,b)===91){s=c-1
if(C.a.X(a,s)!==93)P.cf(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.pe(a,r,s)
if(q<s){p=q+1
o=P.mZ(a,C.a.a7(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mx(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.X(a,n)===58){q=C.a.bv(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mZ(a,C.a.a7(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mx(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.pn(a,b,c)},
pe:function(a,b,c){var s=C.a.bv(a,"%",b)
return s>=b&&s<c?s:c},
mZ:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.T(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.X(a,s)
if(p===37){o=P.lA(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.T("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.cf(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.T("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.X(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.t(a,r,s)
if(i==null){i=new P.T("")
n=i}else n=i
n.a+=j
n.a+=P.ly(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pn:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.X(a,s)
if(o===37){n=P.lA(a,s,!0)
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
if(m>=8)return H.c(C.y,m)
m=(C.y[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.T("")
if(r<s){q.a+=C.a.t(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.c(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.cf(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.X(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.T("")
m=q}else m=q
m.a+=l
m.a+=P.ly(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pk:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mW(C.a.E(a,b)))P.cf(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.E(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.c(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cf(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.pd(r?a.toLowerCase():a)},
pd:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pl:function(a,b,c){return P.dz(a,b,c,C.Z,!1)},
pi:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dz(a,b,c,C.z,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a5(s,"/"))s="/"+s
return P.pm(s,e,f)},
pm:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a5(a,"/"))return P.po(a,!s||c)
return P.pp(a)},
lz:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.b(P.bO("Both query and queryParameters specified"))
return P.dz(a,b,c,C.l,!0)}if(d==null)return null
s=new P.T("")
r.a=""
d.I(0,new P.kg(new P.kh(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
pg:function(a,b,c){return P.dz(a,b,c,C.l,!0)},
lA:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.X(a,b+1)
r=C.a.X(a,n)
q=H.kD(s)
p=H.kD(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aQ(o,4)
if(n>=8)return H.c(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.at(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
ly:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.c(s,0)
s[0]=37
q=C.a.E(k,a>>>4)
if(1>=r)return H.c(s,1)
s[1]=q
q=C.a.E(k,a&15)
if(2>=r)return H.c(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.h7(a,6*o)&63|p
if(n>=r)return H.c(s,n)
s[n]=37
q=n+1
l=C.a.E(k,m>>>4)
if(q>=r)return H.c(s,q)
s[q]=l
l=n+2
q=C.a.E(k,m&15)
if(l>=r)return H.c(s,l)
s[l]=q
n+=3}}return P.f1(s,0,null)},
dz:function(a,b,c,d,e){var s=P.mY(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
mY:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.X(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lA(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.c(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cf(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.X(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.ly(o)}}if(p==null){p=new P.T("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.f(m)
if(typeof l!=="number")return H.v(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mX:function(a){if(C.a.a5(a,"."))return!0
return C.a.dM(a,"/.")!==-1},
pp:function(a){var s,r,q,p,o,n,m
if(!P.mX(a))return a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.D(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.c(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
po:function(a,b){var s,r,q,p,o,n
if(!P.mX(a))return!b?P.mV(a):a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gau(s)!==".."){if(0>=s.length)return H.c(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.c(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gau(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.c(s,0)
r=P.mV(s[0])
if(0>=s.length)return H.c(s,0)
s[0]=r}return C.b.j(s,"/")},
mV:function(a){var s,r,q,p=a.length
if(p>=2&&P.mW(J.nJ(a,0)))for(s=1;s<p;++s){r=C.a.E(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.ab(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.c(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
pf:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.E(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.b(P.bO("Invalid URL encoding"))}}return s},
lB:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.E(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.t(a,b,c)
else p=new H.r(C.a.t(a,b,c))}else{p=H.d([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.E(a,o)
if(r>127)throw H.b(P.bO("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.b(P.bO("Truncated URI"))
p.push(P.pf(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cd(p)},
mW:function(a){var s=a|32
return 97<=s&&s<=122},
mv:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.E(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.b(P.a3(k,a,r))}}if(q<0&&r>b)throw H.b(P.a3(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.E(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gau(j)
if(p!==44||r!==n+7||!C.a.a7(a,"base64",n+1))throw H.b(P.a3("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.I.hX(0,a,m,s)
else{l=P.mY(a,m,s,C.l,!0)
if(l!=null)a=C.a.b_(a,m,s,l)}return new P.jw(a,j,c)},
pv:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.oi(22,new P.kq(),t.gc),l=new P.kp(m),k=new P.kr(),j=new P.ks(),i=l.$2(0,225)
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
n4:function(a,b,c,d,e){var s,r,q,p,o,n=$.nI()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.c(n,d)
r=n[d]
q=C.a.E(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.c(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.c(e,o)
e[o]=s}return d},
aA:function aA(){},
ak:function ak(a,b){this.a=a
this.b=b},
a_:function a_(){},
bz:function bz(a){this.a=a},
hZ:function hZ(){},
i_:function i_(){},
K:function K(){},
dN:function dN(a){this.a=a},
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
ea:function ea(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fq:function fq(a){this.a=a},
fn:function fn(a){this.a=a},
c6:function c6(a){this.a=a},
dX:function dX(a){this.a=a},
eB:function eB(){},
cX:function cX(){},
dZ:function dZ(a){this.a=a},
fM:function fM(a){this.a=a},
ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(){},
l:function l(){},
h:function h(){},
eb:function eb(){},
n:function n(){},
H:function H(){},
as:function as(){},
S:function S(){},
N:function N(){},
y:function y(){},
T:function T(a){this.a=a},
jA:function jA(a){this.a=a},
jx:function jx(a){this.a=a},
jy:function jy(a){this.a=a},
jz:function jz(a,b){this.a=a
this.b=b},
bK:function bK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kh:function kh(a,b){this.a=a
this.b=b},
kg:function kg(a){this.a=a},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
kq:function kq(){},
kp:function kp(a){this.a=a},
kr:function kr(){},
ks:function ks(){},
h6:function h6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fD:function fD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qo:function(a){var s
if(t.v.b(a)){s=J.nP(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.dv(a.data,a.height,a.width)},
qn:function(a){if(a instanceof P.dv)return{data:a.a,height:a.b,width:a.c}
return a},
bo:function(a){var s,r,q,p,o
if(a==null)return null
s=P.li(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
qm:function(a){var s={}
a.I(0,new P.kw(s))
return s},
k9:function k9(){},
kb:function kb(a,b){this.a=a
this.b=b},
kc:function kc(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(a){this.a=a},
ka:function ka(a,b){this.a=a
this.b=b},
e5:function e5(a,b){this.a=a
this.b=b},
i9:function i9(){},
ia:function ia(){},
k1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oV:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
h4:function h4(){},
a6:function a6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aQ:function aQ(){},
eh:function eh(){},
aU:function aU(){},
ez:function ez(){},
iQ:function iQ(){},
c5:function c5(){},
f0:function f0(){},
m:function m(){},
aW:function aW(){},
fd:function fd(){},
fT:function fT(){},
fU:function fU(){},
h0:function h0(){},
h1:function h1(){},
he:function he(){},
hf:function hf(){},
hn:function hn(){},
ho:function ho(){},
bh:function bh(){},
hL:function hL(){},
dP:function dP(){},
hM:function hM(a){this.a=a},
dQ:function dQ(){},
b4:function b4(){},
eA:function eA(){},
fz:function fz(){},
eN:function eN(){},
eW:function eW(){},
ha:function ha(){},
hb:function hb(){}},W={
lV:function(){var s=document.createElement("a")
return s},
l7:function(){var s=document.createElement("canvas")
return s},
o4:function(a,b,c){var s,r=document.body
r.toString
s=C.q.ah(r,a,b,c)
s.toString
r=new H.aZ(new W.a2(s),new W.i0(),t.ac.K("aZ<i.E>"))
return t.h.a(r.gaJ(r))},
i1:function(a){return"wheel"},
cw:function(a){var s,r,q="element tag unavailable"
try{s=J.aL(a)
if(typeof s.ge6(a)=="string")q=s.ge6(a)}catch(r){H.ag(r)}return q},
o7:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ag(s)}return q},
k0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mL:function(a,b,c,d){var s=W.k0(W.k0(W.k0(W.k0(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
a0:function(a,b,c,d){var s=new W.fL(a,b,c==null?null:W.n5(new W.k_(c),t.aD),!1)
s.he()
return s},
mJ:function(a){var s=W.lV(),r=window.location
s=new W.cd(new W.k6(s,r))
s.ew(a)
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
mP:function(){var s=t.N,r=P.m9(C.A,s),q=H.d(["TEMPLATE"],t.s)
s=new W.hi(r,P.cH(s),P.cH(s),P.cH(s),null)
s.eA(null,new H.cN(C.A,new W.kd(),t.eM),q,null)
return s},
n5:function(a,b){var s=$.aK
if(s===C.f)return a
return s.dm(a,b)},
t:function t(){},
hI:function hI(){},
dL:function dL(){},
dM:function dM(){},
bP:function bP(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
aB:function aB(){},
hS:function hS(){},
J:function J(){},
cs:function cs(){},
hT:function hT(){},
aq:function aq(){},
aO:function aO(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
b7:function b7(){},
hX:function hX(){},
ct:function ct(){},
cu:function cu(){},
e2:function e2(){},
hY:function hY(){},
fA:function fA(a,b){this.a=a
this.b=b},
E:function E(){},
i0:function i0(){},
j:function j(){},
e:function e(){},
al:function al(){},
bT:function bT(){},
e4:function e4(){},
e6:function e6(){},
aD:function aD(){},
id:function id(){},
bB:function bB(){},
bC:function bC(){},
bV:function bV(){},
bX:function bX(){},
bE:function bE(){},
iq:function iq(){},
iI:function iI(){},
bY:function bY(){},
ep:function ep(){},
iJ:function iJ(a){this.a=a},
eq:function eq(){},
iK:function iK(a){this.a=a},
aF:function aF(){},
er:function er(){},
am:function am(){},
a2:function a2(a){this.a=a},
w:function w(){},
cT:function cT(){},
aG:function aG(){},
eF:function eF(){},
eO:function eO(){},
iY:function iY(a){this.a=a},
eQ:function eQ(){},
av:function av(){},
eS:function eS(){},
aH:function aH(){},
eT:function eT(){},
aI:function aI(){},
eZ:function eZ(){},
j9:function j9(a){this.a=a},
aw:function aw(){},
bg:function bg(){},
cZ:function cZ(){},
f2:function f2(){},
f3:function f3(){},
c7:function c7(){},
ax:function ax(){},
ad:function ad(){},
f6:function f6(){},
f7:function f7(){},
jg:function jg(){},
aJ:function aJ(){},
bH:function bH(){},
fc:function fc(){},
jk:function jk(){},
aY:function aY(){},
jB:function jB(){},
fu:function fu(){},
bk:function bk(){},
cb:function cb(){},
cc:function cc(){},
fB:function fB(){},
db:function db(){},
fQ:function fQ(){},
dg:function dg(){},
h9:function h9(){},
hg:function hg(){},
fy:function fy(){},
fI:function fI(a){this.a=a},
lb:function lb(a,b){this.a=a
this.$ti=b},
fL:function fL(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k_:function k_(a){this.a=a},
lr:function lr(a){this.$ti=a},
cd:function cd(a){this.a=a},
M:function M(){},
cU:function cU(a){this.a=a},
iN:function iN(a){this.a=a},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
dm:function dm(){},
k7:function k7(){},
k8:function k8(){},
hi:function hi(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kd:function kd(){},
hh:function hh(){},
cA:function cA(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
an:function an(){},
k6:function k6(a,b){this.a=a
this.b=b},
hs:function hs(a){this.a=a
this.b=!1},
kl:function kl(a){this.a=a},
fC:function fC(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fN:function fN(){},
fO:function fO(){},
fR:function fR(){},
fS:function fS(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h2:function h2(){},
h3:function h3(){},
h5:function h5(){},
dn:function dn(){},
dp:function dp(){},
h7:function h7(){},
h8:function h8(){},
hd:function hd(){},
hj:function hj(){},
hk:function hk(){},
dr:function dr(){},
ds:function ds(){},
hl:function hl(){},
hm:function hm(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){}},K={
Q:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.b(P.p("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.E(a,0)
r=C.a.E(b,0)
if(s>r){q=r
r=s
s=q}return new K.iT(s,r)},
u:function(a){var s=new K.iZ()
s.er(a)
return s},
b3:function b3(){},
e8:function e8(){},
it:function it(){},
ac:function ac(){this.a=null},
iT:function iT(a,b){this.a=a
this.b=b},
iZ:function iZ(){this.a=null}},L={
ji:function(){var s=new L.jh()
s.a=new H.C(t.cn)
s.b=new H.C(t.w)
s.c=P.cH(t.X)
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
jh:function jh(){var _=this
_.d=_.c=_.b=_.a=null},
fe:function fe(a){this.b=a
this.a=this.c=null}},O={
l8:function(a){var s=new O.aj(a.K("aj<0>"))
s.bJ(a)
return s},
aj:function aj(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cP:function cP(){this.b=this.a=null},
el:function el(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(){},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(){},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(){},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(){},
iu:function iu(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cO:function cO(){},
iv:function iv(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aS:function aS(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ix:function ix(){var _=this
_.e=_.d=_.c=_.b=null},
iy:function iy(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iz:function iz(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f5:function f5(){}},E={
mG:function(){if(J.l2(window.navigator.vendor,"Google"))return C.G
if(J.l2(window.navigator.userAgent,"Firefox"))return C.r
var s=window.navigator.appVersion
if(J.b0(s).F(s,"Trident")||C.a.F(s,"Edge"))return C.t
if(J.l2(window.navigator.appName,"Microsoft"))return C.t
return C.H},
mH:function(){var s=window.navigator.appVersion
if(J.b0(s).F(s,"Win"))return C.a0
if(C.a.F(s,"Mac"))return C.B
if(C.a.F(s,"Linux"))return C.a1
return C.a2},
oy:function(a,b){var s=new E.iU(a)
s.eq(a,b)
return s},
oG:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.mr(a,!0,!0,!0,!1)
s=W.l7()
r=s.style
r.width="100%"
r.height="100%"
J.l4(a).n(0,s)
return E.mr(s,!0,!0,!0,!1)},
mr:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.f9(),n=t.z,m=C.i.cK(a,"webgl2",P.og(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.o(P.p("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.oy(m,a)
n=new T.jd(m)
n.b=m.getParameter(3379)
m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.fs(a)
s=new X.ik()
s.c=new X.ar(!1,!1,!1)
s.d=P.cH(t.e)
n.b=s
s=new X.iL(n)
s.f=0
s.r=V.be()
s.x=V.be()
s.ch=s.Q=1
n.c=s
s=new X.ir(n)
s.r=0
s.x=V.be()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.jj(n)
s.f=V.be()
s.r=V.be()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.d([],t.eG)
s=$.i3
n.Q=(s==null?$.i3=new E.fJ(E.mG(),E.mH()):s).a===C.r?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.a0(q,"contextmenu",n.gfe(),!1))
n.z.push(W.a0(a,"focus",n.gfk(),!1))
n.z.push(W.a0(a,"blur",n.gf8(),!1))
n.z.push(W.a0(q,"keyup",n.gfo(),!1))
n.z.push(W.a0(q,"keydown",n.gfm(),!1))
n.z.push(W.a0(a,"mousedown",n.gft(),!1))
n.z.push(W.a0(a,"mouseup",n.gfz(),!1))
n.z.push(W.a0(a,p,n.gfv(),!1))
r=n.z
W.i1(a)
W.i1(a)
r.push(W.a0(a,W.i1(a),n.gfB(),!1))
n.z.push(W.a0(q,p,n.gfg(),!1))
n.z.push(W.a0(q,"mouseup",n.gfi(),!1))
n.z.push(W.a0(q,"pointerlockchange",n.gfD(),!1))
n.z.push(W.a0(a,"touchstart",n.gfQ(),!1))
n.z.push(W.a0(a,"touchend",n.gfM(),!1))
n.z.push(W.a0(a,"touchmove",n.gfO(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.ak(Date.now(),!1)
o.db=0
o.d7()
return o},
hP:function hP(){},
bA:function bA(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bR:function bR(a){this.b=a},
c2:function c2(a){this.b=a},
fJ:function fJ(a,b){this.a=a
this.b=b},
iU:function iU(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
f9:function f9(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
jf:function jf(a){this.a=a}},Z={
lq:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cg(c)),35044)
a.bindBuffer(b,null)
return new Z.fv(b,s)},
ay:function(a){return new Z.bj(a)},
fv:function fv(a,b){this.a=a
this.b=b},
dT:function dT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jV:function jV(a){this.a=a},
dU:function dU(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bW:function bW(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a){this.a=a}},D={
L:function(){var s=new D.bS()
s.d=0
return s},
hQ:function hQ(){},
bS:function bS(){var _=this
_.d=_.c=_.b=_.a=null},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
U:function U(){this.b=null},
b9:function b9(){this.b=null},
ba:function ba(){this.b=null},
G:function G(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dR:function dR(){},
by:function by(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
V:function V(){},
cF:function cF(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
eH:function eH(){},
eU:function eU(){}},X={dV:function dV(a,b){this.a=a
this.b=b},ef:function ef(a,b){this.a=a
this.b=b},ik:function ik(){var _=this
_.d=_.c=_.b=_.a=null},cK:function cK(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ir:function ir(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},bZ:function bZ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},iL:function iL(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c_:function c_(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eI:function eI(){},d0:function d0(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},jj:function jj(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fs:function fs(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
o6:function(a){var s=new X.ic(),r=new V.ap(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.mn
if(r==null){r=V.mm(0,0,1,1)
$.mn=r}s.r=r
return s},
l6:function l6(){},
ic:function ic(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eC:function eC(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ja:function ja(){}},V={
hF:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qM:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bj(a-b,s)
return(a<0?a+s:a)+b},
I:function(a,b,c){if(a==null)return C.a.aj("null",c)
$.F().toString
return C.a.aj(C.d.e8(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cm:function(a,b,c){var s,r,q,p,o,n,m=H.d([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.q)(a),++q){p=V.I(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.c(m,o)
s=C.a.aj(m[o],r)
n=m.length
if(o>=n)return H.c(m,o)
m[o]=s}return m},
lO:function(a){return C.d.iq(Math.pow(2,C.V.cq(Math.log(H.qk(a))/Math.log(2))))},
eo:function(){var s=$.mb
return s==null?$.mb=V.aT(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aT:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ma:function(a,b,c){var s=c.D(),r=b.aC(s).D(),q=s.aC(r),p=new V.z(a.a,a.b,a.c),o=r.T(0).a6(p),n=q.T(0).a6(p),m=s.T(0).a6(p)
return V.aT(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
be:function(){var s=$.me
return s==null?$.me=new V.a1(0,0):s},
ll:function(){var s=$.aV
return s==null?$.aV=new V.P(0,0,0):s},
mm:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eM(a,b,c,d)},
d9:function(){var s=$.mD
return s==null?$.mD=new V.z(0,0,0):s},
oM:function(){var s=$.jH
return s==null?$.jH=new V.z(-1,0,0):s},
lp:function(){var s=$.jI
return s==null?$.jI=new V.z(0,1,0):s},
mE:function(){var s=$.jJ
return s==null?$.jJ=new V.z(0,0,1):s},
aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i4:function i4(){},
en:function en(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bd:function bd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a1:function a1(a,b){this.a=a
this.b=b},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a,b,c,d){var _=this
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
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
bi:function bi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qH:function(a){P.oH(C.S,new V.kX(a))},
oB:function(a){var s=new V.j4()
s.eu(a,!0)
return s},
b5:function b5(){},
kX:function kX(a){this.a=a},
e_:function e_(a){var _=this
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
iR:function iR(a){this.a=a
this.c=null},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j4:function j4(){this.b=this.a=null},
j6:function j6(a){this.a=a},
j5:function j5(a){this.a=a},
j7:function j7(a){this.a=a}},U={
l9:function(){var s=new U.hR()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
m2:function(a){var s=new U.cp()
s.a=a
return s},
hR:function hR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cp:function cp(){this.b=this.a=null},
bU:function bU(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
X:function X(){},
d6:function d6(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d8:function d8(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={e3:function e3(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ng:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="testCanvas",a1=null,a2="modifiers",a3=V.oB("Test 018"),a4=W.l7()
a4.className="pageLargeCanvas"
a4.id=a0
a3.a.appendChild(a4)
s=t.i
a3.dg(H.d(["A test of the Material Lighting shader where a diffuse texture and ","inverse diffuse texture are used. Grass is only shown in the dark. ","Dirt is shown where the directional light is shining."],s))
a3.hg(H.d(["shapes"],s))
a3.dg(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a0)
if(r==null)H.o(P.p("Failed to find an element with the identifier, testCanvas."))
q=E.oG(r,!0,!0,!0,!1)
p=new E.bA()
p.a=""
p.b=!0
o=t.b1
n=O.l8(o)
p.y=n
n.bk(p.ghY(),p.gi0())
p.dy=p.dx=p.db=p.cy=p.cx=p.ch=p.Q=p.z=null
p.saa(0,a1)
p.sbe(a1)
p.saa(0,F.nk(8,8))
n=new U.bU()
n.bJ(t.ah)
n.bk(n.gf0(),n.gfI())
n.e=null
n.f=V.eo()
n.r=0
m=q.x
l=new U.d7()
k=U.l9()
k.scJ(0,!0)
k.scu(6.283185307179586)
k.scw(0)
k.sY(0,0)
k.scv(100)
k.sW(0)
k.scf(0.5)
l.b=k
j=l.gaO()
k.gA().n(0,j)
k=U.l9()
k.scJ(0,!0)
k.scu(6.283185307179586)
k.scw(0)
k.sY(0,0)
k.scv(100)
k.sW(0)
k.scf(0.5)
l.c=k
k.gA().n(0,j)
l.d=null
l.r=l.f=l.e=!1
l.y=l.x=2.5
l.Q=4
l.ch=l.cx=!1
l.db=l.cy=0
l.dx=null
l.dy=0
l.fx=l.fr=null
i=new X.ar(!1,!1,!1)
h=l.d
l.d=i
k=new D.G(a2,h,i)
k.b=!0
l.O(k)
k=l.f
if(k!==!1){l.f=!1
k=new D.G("invertX",k,!1)
k.b=!0
l.O(k)}k=l.r
if(k!==!1){l.r=!1
k=new D.G("invertY",k,!1)
k.b=!0
l.O(k)}l.b8(m)
n.n(0,l)
m=q.x
l=new U.d6()
k=U.l9()
k.scJ(0,!0)
k.scu(6.283185307179586)
k.scw(0)
k.sY(0,0)
k.scv(100)
k.sW(0)
k.scf(0.2)
l.b=k
k.gA().n(0,l.gaO())
l.c=null
l.d=!1
l.e=2.5
l.r=4
l.x=l.y=!1
l.z=0
l.Q=null
l.ch=0
l.cy=l.cx=null
i=new X.ar(!0,!1,!1)
h=l.c
l.c=i
k=new D.G(a2,h,i)
k.b=!0
l.O(k)
l.b8(m)
n.n(0,l)
m=q.x
l=new U.d8()
l.c=0.01
l.e=l.d=0
i=new X.ar(!1,!1,!1)
l.b=i
k=new D.G(a2,a1,i)
k.b=!0
l.O(k)
l.b8(m)
n.n(0,l)
p.sbe(n)
g=q.f.dR("../resources/Dirt.png")
f=q.f.dR("../resources/Grass.png")
e=new O.el()
n=O.l8(t.hc)
e.e=n
n.bk(e.gf4(),e.gf6())
n=new O.aS(e,"emission")
n.c=new A.ab(!1,!1,!1)
n.f=new V.aa(0,0,0)
e.f=n
n=new O.aS(e,"ambient")
n.c=new A.ab(!1,!1,!1)
n.f=new V.aa(0,0,0)
e.r=n
n=new O.aS(e,"diffuse")
n.c=new A.ab(!1,!1,!1)
n.f=new V.aa(0,0,0)
e.x=n
n=new O.aS(e,"invDiffuse")
n.c=new A.ab(!1,!1,!1)
n.f=new V.aa(0,0,0)
e.y=n
n=new O.iz(e,"specular")
n.c=new A.ab(!1,!1,!1)
n.f=new V.aa(0,0,0)
n.ch=100
e.z=n
n=new O.iv(e,"bump")
n.c=new A.ab(!1,!1,!1)
e.Q=n
e.ch=null
n=new O.aS(e,"reflect")
n.c=new A.ab(!1,!1,!1)
n.f=new V.aa(0,0,0)
e.cx=n
n=new O.iy(e,"refract")
n.c=new A.ab(!1,!1,!1)
n.f=new V.aa(0,0,0)
n.ch=1
e.cy=n
n=new O.iu(e,"alpha")
n.c=new A.ab(!1,!1,!1)
n.f=1
e.db=n
n=new D.cF()
n.bJ(t.gj)
n.e=H.d([],t.bb)
n.f=H.d([],t.cP)
n.r=H.d([],t.eb)
n.x=H.d([],t.du)
n.z=n.y=null
n.cM(n.gf2(),n.gfG(),n.gfK())
e.dx=n
m=new O.ix()
m.b=new V.ap(0,0,0,0)
m.c=1
m.d=10
m.e=!1
e.dy=m
m=n.y
n=m==null?n.y=D.L():m
n.n(0,e.gfY())
n=e.dx
m=n.z
n=m==null?n.z=D.L():m
n.n(0,e.gbm())
e.fr=null
n=e.dx
d=V.lp()
m=U.m2(V.ma(V.ll(),d,new V.z(-1,-1,-1)))
c=new V.aa(1,1,1)
l=new D.by()
l.c=new V.aa(1,1,1)
l.a=V.mE()
l.d=V.lp()
l.e=V.oM()
h=l.b
l.b=m
m.gA().n(0,l.gex())
m=new D.G("mover",h,l.b)
m.b=!0
l.ax(m)
if(!l.c.q(0,c)){h=l.c
l.c=c
m=new D.G("color",h,c)
m.b=!0
l.ax(m)}n.n(0,l)
e.x.sb0(g)
e.y.sb0(f)
n=new M.e3()
n.a=!0
o=O.l8(o)
n.e=o
o.bk(n.gfa(),n.gfc())
n.y=n.x=n.r=n.f=null
b=X.o6(a1)
a=new X.eC()
a.c=1.0471975511965976
a.d=0.1
a.e=2000
a.sbe(a1)
o=a.c
$.F().toString
if(!(Math.abs(o-1.0471975511965976)<1e-9)){a.c=1.0471975511965976
o=new D.G("fov",o,1.0471975511965976)
o.b=!0
a.aL(o)}o=a.d
$.F().toString
if(!(Math.abs(o-0.1)<1e-9)){a.d=0.1
o=new D.G("near",o,0.1)
o.b=!0
a.aL(o)}o=a.e
$.F().toString
if(!(Math.abs(o-2000)<1e-9)){a.e=2000
o=new D.G("far",o,2000)
o.b=!0
a.aL(o)}o=n.b
if(o!==a){if(o!=null)o.gA().B(0,n.gap())
h=n.b
n.b=a
a.gA().n(0,n.gap())
o=new D.G("camera",h,n.b)
o.b=!0
n.ay(o)}o=n.c
if(o!==b){if(o!=null)o.gA().B(0,n.gap())
h=n.c
n.c=b
b.gA().n(0,n.gap())
o=new D.G("target",h,n.c)
o.b=!0
n.ay(o)}n.se7(a1)
n.se7(e)
n.e.n(0,p)
n.b.sbe(U.m2(V.aT(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
o=q.d
if(o!==n){if(o!=null)o.gA().B(0,q.gcR())
q.d=n
n.gA().n(0,q.gcR())
q.cS()}o=new V.iR("shapes")
s=s.getElementById("shapes")
o.c=s
if(s==null)H.o("Failed to find shapes for RadioGroup")
o.ar(0,"Cube",new M.kM(p))
o.ar(0,"Cuboid",new M.kN(p))
o.ar(0,"Cylinder",new M.kO(p))
o.ar(0,"Cone",new M.kP(p))
o.ar(0,"LatLonSphere",new M.kQ(p))
o.ar(0,"IsoSphere",new M.kR(p))
o.bs(0,"Sphere",new M.kS(p),!0)
o.ar(0,"Toroid",new M.kT(p))
o.ar(0,"Knot",new M.kU(p))
s=q.Q
if(s==null)s=q.Q=D.L()
o=s.b
s=o==null?s.b=H.d([],t.f):o
s.push(new M.kV(a3,e))
V.qH(q)},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a,b){this.a=a
this.b=b}},A={
ok:function(a,b){var s=a.bb,r=new A.em(b,s)
r.es(b,s)
r.ep(a,b)
return r},
ol:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gao(a5)+a6.gao(a6)+a7.gao(a7)+a8.gao(a8)+a9.gao(a9)+b0.gao(b0)+b1.gao(b1)+b2.gao(b2)+b3.gao(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.q)(b4),++r)a+="_"+H.f(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.q)(b5),++r)a+="_"+H.f(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.q)(b6),++r)a+="_"+H.f(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.q)(b7),++r)a+="_"+H.f(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
for(o=b5.length,r=0;r<o;++r,p=!0)q+=b5[r].b
for(o=b6.length,r=0;r<o;++r,p=!0)q+=b6[r].b
for(n=b7.length,r=0;r<n;++r,p=!0)q+=b7[r].b
n=b1.b||!1
if(!n){n=b2.b||!1
m=n}else m=!0
l=s>0
s=a6.b||!1
if(!s){s=a7.b||!1
if(!s){s=a8.b||!1
if(!s)s=a9.b||!1
else s=!0
k=s}else k=!0}else k=!0
s=a9.b||!1
j=s||l||o>0||m
s=a7.b||!1
if(!s){s=a8.b||!1
if(!s){s=a9.b||!1
i=s}else i=!0}else i=!0
if(!i){s=b0.b||!1
h=s||m}else h=!0
g=b0.b||!1
f=a5.b||a6.b||a7.b||a8.b||a9.b||b0.b||b1.b||b2.b||b3.b
e=a4>0
d=h||g||j||!1
c=l&&i
a0=a0&&f
b=$.bs()
if(h){s=$.br()
b=new Z.bj(b.a|s.a)}if(g){s=$.bq()
b=new Z.bj(b.a|s.a)}if(f){s=$.bt()
b=new Z.bj(b.a|s.a)}if(e){s=$.bp()
b=new Z.bj(b.a|s.a)}return new A.iw(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
kt:function(a,b,c){if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
ku:function(a,b,c){var s
A.kt(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hG(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.b){s+="   "+c+"Color = texture2D("+c+"Txt, txt2D).rgb;\n"
a.a=s}a.a=s+"}\n"},
pP:function(a,b){var s=a.a,r=s.b||!1
if(!r)return
r=b.a+="// === Emission ===\n"
b.a=r+"\n"
A.kt(b,s,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(s.b){s=r+"   return texture2D(emissionTxt, txt2D).rgb;\n"
b.a=s}else s=r
s+="}\n"
b.a=s
b.a=s+"\n"},
pL:function(a,b){var s=a.b,r=s.b||!1
if(!r)return
r=b.a+="// === Ambient ===\n"
b.a=r+"\n"
A.ku(b,s,"ambient")
b.a+="\n"},
pN:function(a,b){var s=a.c,r=s.b||!1
if(!r)return
r=b.a+="// === Diffuse ===\n"
b.a=r+"\n"
A.ku(b,s,"diffuse")
s=b.a+="\n"
s+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=s
s+="{\n"
b.a=s
s+="   float scalar = dot(norm, -litVec);\n"
b.a=s
s+=u.e
b.a=s
s+="   return diffuseColor*scalar;\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
pQ:function(a,b){var s=a.d,r=s.b||!1
if(!r)return
r=b.a+="// === Inverse Diffuse ===\n"
b.a=r+"\n"
A.ku(b,s,"invDiffuse")
s=b.a+="\n"
s+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=s
s+="{\n"
b.a=s
s+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=s
s+=u.e
b.a=s
s+="   return invDiffuseColor*scalar;\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
pW:function(a,b){var s=a.e,r=s.b||!1
if(!r)return
r=b.a+="// === Specular ===\n"
r+="\n"
b.a=r
b.a=r+"uniform float shininess;\n"
A.ku(b,s,"specular")
s=b.a+="\n"
s+="vec3 specular(vec3 norm, vec3 litVec)\n"
b.a=s
s+="{\n"
b.a=s
s+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=s
s+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
b.a=s
s+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
b.a=s
s+=u.e
b.a=s
s+="   return specularColor*pow(scalar, shininess);\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
pS:function(a,b){var s,r,q
if(!a.k4)return
s=b.a+="// === Normal ===\n"
s=b.a=s+"\n"
r=a.f.b
if(r){s+="uniform sampler2D bumpTxt;\n"
b.a=s
s=b.a=s+"\n"}s+="vec3 normal()\n"
b.a=s
s=b.a=s+"{\n"
q=r||!1
if(!q||!1)s=b.a=s+"   return normalize(normalVec);\n"
else{s=(r?b.a=s+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":b.a=s+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n"
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
pU:function(a,b){var s=a.r,r=s.b||!1
if(!r)return
r=b.a+="// === Reflection ===\n"
b.a=r+"\n"
A.kt(b,s,"reflect")
r=b.a+="\n"
r+="vec3 reflect(vec3 refl)\n"
b.a=r
r=b.a=r+"{\n"
if(s.b){s=r+"   vec3 scalar = texture2D(reflectTxt, txt2D).rgb;\n"
b.a=s}else s=r
s+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=s
s+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
pV:function(a,b){var s=a.x,r=s.b||!1
if(!r)return
r=b.a+="// === Refraction ===\n"
b.a=r+"\n"
A.kt(b,s,"refract")
r=b.a+="uniform float refraction;\n"
r+="\n"
b.a=r
r+="vec3 refract(vec3 refl)\n"
b.a=r
r=b.a=r+"{\n"
if(s.b){s=r+"   vec3 scalar = texture2D(refractTxt, txt2D).rgb;\n"
b.a=s}else s=r
s+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=s
s+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=s
s+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
pM:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.f(s)
q=A.hG(r)
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
if(typeof s!=="number")return s.ae()
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
s=a.b.b||!1
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
s=a.c.b||!1
if(s)n.push("diffuse(norm, normDir)")
s=a.d.b||!1
if(s)n.push("invDiffuse(norm, normDir)")
s=a.e.b||!1
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
pO:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.f(s)
q=A.hG(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.ae()
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
l=a.b.b||!1
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.d([],p)
p=a.c.b||!1
if(p)k.push("diffuse(norm, lit.viewDir)")
p=a.d.b||!1
if(p)k.push("invDiffuse(norm, lit.viewDir)")
p=a.e.b||!1
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
pT:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.f(s)
q=A.hG(r)
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
if(typeof s!=="number")return s.ae()
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
m=a.b.b||!1
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
p=a.c.b||!1
if(p)i.push("diffuse(norm, normDir)")
p=a.d.b||!1
if(p)i.push("invDiffuse(norm, normDir)")
p=a.e.b||!1
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
pX:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.f(s)
q=A.hG(r)
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
if(typeof s!=="number")return s.ae()
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
if(m){s=$.i3
if(s==null)s=$.i3=new E.fJ(E.mG(),E.mH())
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
p=a.b.b||!1
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
s=a.c.b||!1
if(s)g.push("diffuse(norm, litVec)")
s=a.d.b||!1
if(s)g.push("invDiffuse(norm, litVec)")
s=a.e.b||!1
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
s=a.b.b||!1
if(s)r.push("ambientColor")
s=a.c.b||!1
if(s)r.push("diffuse(norm, litVec)")
s=a.d.b||!1
if(s)r.push("invDiffuse(norm, litVec)")
s=a.e.b||!1
if(s)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.b.j(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
pY:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.T("")
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
o=a.y.b
if(o)p=h.a=p+"uniform sampler2D alphaTxt;\n"
p+="float alphaValue()\n"
h.a=p
p=h.a=p+"{\n"
n=o||!1
if(!n)p=h.a=p+"   return 1.0;\n"
else if(o||!1){if(o){p+="   float a = texture2D(alphaTxt, txt2D).a;\n"
h.a=p}p+="   if (a <= 0.000001) discard;\n"
h.a=p
p+="   return a;\n"
h.a=p}p+="}\n"
h.a=p
h.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.pM(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.pO(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.pT(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.q)(o),++m)A.pX(a,o[m],h)
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
s=a.b.b||!1
if(s)h.a+="   setAmbientColor();\n"
s=a.c.b||!1
if(s)h.a+="   setDiffuseColor();\n"
s=a.d.b||!1
if(s)h.a+="   setInvDiffuseColor();\n"
s=a.e.b||!1
if(s)h.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ab(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ab(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ab(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.q)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.c(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ab(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a.b||!1
if(s)l.push("emissionColor()")
s=a.r.b||!1
if(s)l.push("reflect(refl)")
s=a.x.b||!1
if(s)l.push("refract(refl)")
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
s=b.a+="uniform BendingValue bendValues["+a.aV+"];\n"
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
hG:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.a.ab(a,1)},
lo:function(a,b,c,d,e){var s=new A.jo(a,c,e)
s.f=d
P.ip(d,0,!1,t.e)
return s},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a){this.a=a},
ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a,b){var _=this
_.iE=_.dz=_.dw=_.bb=_.aV=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iQ=_.iP=_.iO=_.co=_.cn=_.cm=_.cl=_.ck=_.cj=_.ci=_.cg=_.iN=_.dH=_.iM=_.iL=_.dG=_.iK=_.dF=_.iJ=_.dE=_.iI=_.dD=_.iH=_.dC=_.dB=_.iG=_.dA=_.iF=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dS:function dS(a,b){this.a=a
this.b=b},
e1:function e1(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b){this.a=a
this.b=b},
eV:function eV(a,b){this.a=a
this.b=b},
iw:function iw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aV=b5
_.bb=b6
_.dw=b7},
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
cW:function cW(){},
ff:function ff(){},
jt:function jt(a){this.a=a},
fh:function fh(a,b,c){this.a=a
this.c=b
this.d=c},
jq:function jq(a,b,c){this.a=a
this.c=b
this.d=c},
jr:function jr(a,b,c){this.a=a
this.c=b
this.d=c},
js:function js(a,b,c){this.a=a
this.c=b
this.d=c},
jo:function jo(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
fg:function fg(a,b,c){this.a=a
this.c=b
this.d=c},
jp:function jp(a,b,c){this.a=a
this.c=b
this.d=c},
fi:function fi(a,b,c){this.a=a
this.c=b
this.d=c},
fj:function fj(a,b,c){this.a=a
this.c=b
this.d=c},
ju:function ju(a,b,c){this.a=a
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
lJ:function(a,b,c,d){var s=F.j0()
F.dA(s,b,c,d,a,1,0,0,1)
F.dA(s,b,c,d,a,0,1,0,3)
F.dA(s,b,c,d,a,0,0,1,2)
F.dA(s,b,c,d,a,-1,0,0,0)
F.dA(s,b,c,d,a,0,-1,0,0)
F.dA(s,b,c,d,a,0,0,-1,3)
s.am()
return s},
ko:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dA:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.z(f,e+a3,d+a4)
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
h.d=g}k=F.ko(g)
j=F.ko(f)
i=F.l_(a1,a2,new F.kn(h,F.ko(e),F.ko(d),j,k,a0),b)
if(i!=null)a.aY(i)},
na:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0<3)return null
s=F.j0()
r=b?-1:1
q=-6.283185307179586/a0
p=H.d([],t.j)
o=s.a
n=new V.z(0,0,r).D()
p.push(o.hk(new V.bG(a,-1,-1,-1),new V.ap(1,1,1,1),new V.P(0,0,c),new V.z(0,0,r),new V.a1(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(typeof i!=="number")return H.v(i)
n=new V.z(k,j,r).D()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
o.toString
e=F.ca(new V.bG(a,-1,-1,-1),null,new V.ap(h,f,g,1),new V.P(k*i,j*i,c),new V.z(0,0,r),new V.a1(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.n(0,e)
p.push(e)}s.d.hi(p)
return s},
n8:function(a,b,c){return F.qp(!0,a,1,new F.kx(1,c),b)},
qp:function(a,b,c,d,e){var s,r=null
if(e<3)return r
if(c<1)return r
s=F.l_(c,e,new F.kz(d),r)
if(s==null)return r
s.am()
s.bt()
if(b)s.aY(F.na(3,!1,1,new F.kA(d),e))
s.aY(F.na(1,!0,-1,new F.kB(d),e))
return s},
qD:function(a,b){var s=F.l_(a,b,new F.kL(),null)
s.d.bB()
s.am()
s.bt()
return s},
a8:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
b=b.D()
s=b.a
r=b.b
q=b.c
p=F.ca(h,h,h,new V.P(s,r,q),b,h,h,h,0)
o=a.hK(p,new F.da())
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
p.saT(0,new V.ap(n,m,l,1))
k=Math.sqrt(s*s+r*r)
j=Math.atan2(r,s)/1.5707963267948966
if(j<0)j=-j
i=Math.atan2(k,q)/3.141592653589793
p.sb0(new V.a1(j,i<0?-i:i))
a.a.n(0,p)
return p},
R:function(a,b,c,d,e){var s,r,q,p
if(e<=0)a.d.bs(0,b,d,c)
else{s=F.a8(a,b.r.v(0,c.r).p(0,0.5))
r=F.a8(a,c.r.v(0,d.r).p(0,0.5))
q=F.a8(a,d.r.v(0,b.r).p(0,0.5))
p=e-1
F.R(a,b,s,q,p)
F.R(a,s,c,r,p)
F.R(a,r,q,s,p)
F.R(a,q,r,d,p)}},
nk:function(a,b){var s,r,q={}
q.a=s
q.a=null
q.a=new F.kY()
r=F.lJ(a,null,new F.kZ(q,1),b)
r.bt()
return r},
qL:function(){return F.n9(15,30,0.5,1,new F.l0())},
qC:function(){return F.n9(12,120,0.3,1,new F.kK(3,2))},
n9:function(a,b,c,d,e){var s=F.l_(a,b,new F.ky(e,d,b,c),null)
if(s==null)return null
s.am()
s.bt()
return s},
l_:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.j0()
r=H.d([],t.j)
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.ca(e,e,new V.ap(n,0,0,1),e,e,new V.a1(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.ce(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.ca(e,e,new V.ap(h,g,f,1),e,e,new V.a1(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.ce(d))}}s.d.hj(a+1,b+1,r)
return s},
cy:function(a,b,c){var s=new F.cx(),r=a.a
if(r==null)H.o(P.p(u.j))
if(r!=b.a||r!=c.a)H.o(P.p(u.i))
s.bp(a)
s.bq(b)
s.d8(c)
s.a.a.d.b.push(s)
s.a.a.U()
return s},
oe:function(a,b){var s=new F.ei(),r=a.a
if(r==null)H.o(P.p("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.o(P.p("May not create a line with vertices attached to different shapes."))
s.bp(a)
s.bq(b)
s.a.a.c.b.push(s)
s.a.a.U()
return s},
j0:function(){var s=new F.j_(),r=new F.jK(s)
r.b=!1
r.c=H.d([],t.j)
s.a=r
r=new F.j3(s)
r.b=H.d([],t.l)
s.b=r
r=new F.j2(s)
r.b=H.d([],t.L)
s.c=r
r=new F.j1(s)
r.b=H.d([],t.b)
s.d=r
s.e=null
return s},
ca:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.ft(),p=new F.jS()
p.b=H.d([],t.l)
q.b=p
p=new F.jP()
s=t.L
p.b=H.d([],s)
p.c=H.d([],s)
q.c=p
p=new F.jL()
s=t.b
p.b=H.d([],s)
p.c=H.d([],s)
p.d=H.d([],s)
q.d=p
h=$.nC()
q.e=0
p=$.bs()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.br().a)!==0?e:r
q.x=(s&$.bq().a)!==0?b:r
q.y=(s&$.bt().a)!==0?f:r
q.z=(s&$.bN().a)!==0?g:r
q.Q=(s&$.nD().a)!==0?c:r
q.ch=(s&$.cn().a)!==0?i:0
q.cx=(s&$.bp().a)!==0?a:r
return q},
kn:function kn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kx:function kx(a,b){this.a=a
this.b=b},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kL:function kL(){},
kY:function kY(){},
kZ:function kZ(a,b){this.a=a
this.b=b},
l0:function l0(){},
kK:function kK(a,b){this.a=a
this.b=b},
ky:function ky(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cx:function cx(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i8:function i8(){},
j8:function j8(){},
ei:function ei(){this.b=this.a=null},
il:function il(){},
jn:function jn(){},
eG:function eG(){this.a=null},
j_:function j_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j1:function j1(a){this.a=a
this.b=null},
j2:function j2(a){this.a=a
this.b=null},
j3:function j3(a){this.a=a
this.b=null},
ft:function ft(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jU:function jU(a){this.a=a},
jT:function jT(a){this.a=a},
jK:function jK(a){this.a=a
this.c=this.b=null},
jL:function jL(){this.d=this.c=this.b=null},
jM:function jM(a,b){this.a=a
this.b=b},
jN:function jN(a,b){this.a=a
this.b=b},
jP:function jP(){this.c=this.b=null},
jQ:function jQ(){},
da:function da(){},
jR:function jR(){},
jO:function jO(){},
iO:function iO(){},
jS:function jS(){this.b=null}},T={f8:function f8(){},jb:function jb(){},jc:function jc(){var _=this
_.y=_.d=_.c=_.b=_.a=null},jd:function jd(a){var _=this
_.a=a
_.e=_.d=_.b=null},je:function je(a,b,c,d,e,f,g){var _=this
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
H.lf.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gR:function(a){return H.cV(a)},
i:function(a){return"Instance of '"+H.f(H.eK(a))+"'"}}
J.ec.prototype={
i:function(a){return String(a)},
gR:function(a){return a?519018:218159},
$iaA:1}
J.cE.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0}}
J.bb.prototype={
gR:function(a){return 0},
i:function(a){return String(a)},
$im7:1}
J.eD.prototype={}
J.bI.prototype={}
J.aE.prototype={
i:function(a){var s=a[$.np()]
if(s==null)return this.em(a)
return"JavaScript function for "+H.f(J.a5(s))},
$iaC:1}
J.x.prototype={
cD:function(a,b){if(!!a.fixed$length)H.o(P.B("removeAt"))
if(b<0||b>=a.length)throw H.b(P.eL(b,null))
return a.splice(b,1)[0]},
B:function(a,b){var s
if(!!a.fixed$length)H.o(P.B("remove"))
for(s=0;s<a.length;++s)if(J.D(a[s],b)){a.splice(s,1)
return!0}return!1},
ag:function(a,b){var s,r
if(!!a.fixed$length)H.o(P.B("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.q)(b),++r)a.push(b[r])},
I:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.b6(a))}},
j:function(a,b){var s,r,q=P.ip(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.f(a[s])
if(s>=q.length)return H.c(q,s)
q[s]=r}return q.join(b)},
hV:function(a){return this.j(a,"")},
hO:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.b(P.b6(a))}return s},
hP:function(a,b,c){return this.hO(a,b,c,t.z)},
hN:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.b(P.b6(a))}throw H.b(H.ih())},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
ghM:function(a){if(a.length>0)return a[0]
throw H.b(H.ih())},
gau:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.ih())},
dh:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.b(P.b6(a))}return!1},
b3:function(a,b){if(!!a.immutable$list)H.o(P.B("sort"))
H.oE(a,b==null?J.pC():b)},
ei:function(a){return this.b3(a,null)},
F:function(a,b){var s
for(s=0;s<a.length;++s)if(J.D(a[s],b))return!0
return!1},
i:function(a){return P.lc(a,"[","]")},
gP:function(a){return new J.a9(a,a.length)},
gR:function(a){return H.cV(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.o(P.B("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.cl(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.o(P.B("indexed set"))
if(b>=a.length||b<0)throw H.b(H.cl(a,b))
a[b]=c},
$ik:1,
$ih:1,
$in:1}
J.ii.prototype={}
J.a9.prototype={
gC:function(a){return this.d},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bD.prototype={
aU:function(a,b){var s
if(typeof b!="number")throw H.b(H.az(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbx(b)
if(this.gbx(a)===s)return 0
if(this.gbx(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbx:function(a){return a===0?1/a<0:a<0},
iq:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.B(""+a+".toInt()"))},
cq:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.B(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.B(""+a+".round()"))},
e8:function(a,b){var s
if(b>20)throw H.b(P.a4(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbx(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
bj:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eo:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.da(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.da(a,b)},
da:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.B("Result of truncating division is "+H.f(s)+": "+H.f(a)+" ~/ "+b))},
aQ:function(a,b){var s
if(a>0)s=this.d9(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
h7:function(a,b){if(b<0)throw H.b(H.az(b))
return this.d9(a,b)},
d9:function(a,b){return b>31?0:a>>>b},
$ia_:1,
$iS:1}
J.cD.prototype={$il:1}
J.cC.prototype={}
J.aP.prototype={
X:function(a,b){if(b<0)throw H.b(H.cl(a,b))
if(b>=a.length)H.o(H.cl(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.b(H.cl(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!="string")throw H.b(P.lW(b,null,null))
return a+b},
b_:function(a,b,c,d){var s,r,q=P.bf(b,c,a.length)
if(!H.ch(q))H.o(H.az(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
a7:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a4(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a5:function(a,b){return this.a7(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.eL(b,null))
if(b>c)throw H.b(P.eL(b,null))
if(c>a.length)throw H.b(P.eL(c,null))
return a.substring(b,c)},
ab:function(a,b){return this.t(a,b,null)},
is:function(a){return a.toLowerCase()},
p:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.P)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aj:function(a,b){var s=b-a.length
if(s<=0)return a
return this.p(" ",s)+a},
bv:function(a,b,c){var s
if(c<0||c>a.length)throw H.b(P.a4(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dM:function(a,b){return this.bv(a,b,0)},
hs:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.a4(c,0,s,null,null))
return H.nl(a,b,c)},
F:function(a,b){return this.hs(a,b,0)},
aU:function(a,b){var s
if(typeof b!="string")throw H.b(H.az(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gR:function(a){var s,r,q
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
H.r.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.X(this.a,b)}}
H.k.prototype={}
H.cJ.prototype={
gP:function(a){return new H.bc(this,this.gm(this))},
bG:function(a,b){return this.el(0,b)}}
H.bc.prototype={
gC:function(a){var s=this.d
return s},
u:function(){var s,r=this,q=r.a,p=J.b0(q),o=p.gm(q)
if(r.b!=o)throw H.b(P.b6(q))
s=r.c
if(typeof o!=="number")return H.v(o)
if(s>=o){r.d=null
return!1}r.d=p.J(q,s);++r.c
return!0}}
H.aR.prototype={
gP:function(a){return new H.ek(J.b2(this.a),this.b)},
gm:function(a){return J.aM(this.a)},
J:function(a,b){return this.b.$1(J.hH(this.a,b))}}
H.cv.prototype={$ik:1}
H.ek.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gC(r))
return!0}s.a=null
return!1},
gC:function(a){var s=this.a
return s}}
H.cN.prototype={
gm:function(a){return J.aM(this.a)},
J:function(a,b){return this.b.$1(J.hH(this.a,b))}}
H.aZ.prototype={
gP:function(a){return new H.fw(J.b2(this.a),this.b)}}
H.fw.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gC(s)))return!0
return!1},
gC:function(a){var s=this.a
return s.gC(s)}}
H.cz.prototype={}
H.fp.prototype={
l:function(a,b,c){throw H.b(P.B("Cannot modify an unmodifiable list"))}}
H.c8.prototype={}
H.cq.prototype={
i:function(a){return P.lk(this)},
l:function(a,b,c){H.o1()},
$iH:1}
H.cr.prototype={
gm:function(a){return this.a},
cc:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cc(0,b))return null
return this.d0(b)},
d0:function(a){return this.b[a]},
I:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.d0(q))}}}
H.jl.prototype={
ai:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.fo.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iP.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hc.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bx.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nn(r==null?"unknown":r)+"'"},
$iaC:1,
giw:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f4.prototype={}
H.eY.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nn(s)+"'"}}
H.bQ.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bQ))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gR:function(a){var s,r=this.c
if(r==null)s=H.cV(this.a)
else s=typeof r!=="object"?J.ah(r):H.cV(r)
return(s^H.cV(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.eK(s))+"'")}}
H.eP.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.C.prototype={
gm:function(a){return this.a},
gbw:function(a){return this.a===0},
ga0:function(a){return new H.cG(this,H.dC(this).K("cG<1>"))},
giv:function(a){var s=this,r=H.dC(s)
return H.oj(s.ga0(s),new H.ij(s),r.c,r.Q[1])},
cc:function(a,b){var s=this.b
if(s==null)return!1
return this.eN(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bn(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bn(p,b)
q=r==null?n:r.b
return q}else return o.hT(b)},
hT:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.d1(p,q.dN(a))
r=q.dO(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cV(s==null?q.b=q.c_():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cV(r==null?q.c=q.c_():r,b,c)}else q.hU(b,c)},
hU:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.c_()
s=p.dN(a)
r=p.d1(o,s)
if(r==null)p.c4(o,s,[p.c0(a,b)])
else{q=p.dO(r,a)
if(q>=0)r[q].b=b
else r.push(p.c0(a,b))}},
I:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.b6(s))
r=r.c}},
cV:function(a,b,c){var s=this.bn(a,b)
if(s==null)this.c4(a,b,this.c0(b,c))
else s.b=c},
eY:function(){this.r=this.r+1&67108863},
c0:function(a,b){var s,r=this,q=new H.im(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.eY()
return q},
dN:function(a){return J.ah(a)&0x3ffffff},
dO:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.D(a[r].a,b))return r
return-1},
i:function(a){return P.lk(this)},
bn:function(a,b){return a[b]},
d1:function(a,b){return a[b]},
c4:function(a,b,c){a[b]=c},
eR:function(a,b){delete a[b]},
eN:function(a,b){return this.bn(a,b)!=null},
c_:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c4(r,s,r)
this.eR(r,s)
return r}}
H.ij.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.dC(this.a).K("2(1)")}}
H.im.prototype={}
H.cG.prototype={
gm:function(a){return this.a.a},
gP:function(a){var s=this.a,r=new H.ej(s,s.r)
r.c=s.e
return r}}
H.ej.prototype={
gC:function(a){return this.d},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.b6(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kE.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.kF.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kG.prototype={
$1:function(a){return this.a(a)}}
H.ed.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$iml:1}
H.cQ.prototype={$icQ:1}
H.Y.prototype={$iY:1}
H.c0.prototype={
gm:function(a){return a.length},
$iA:1}
H.bF.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]},
l:function(a,b,c){H.b_(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.cR.prototype={
l:function(a,b,c){H.b_(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$in:1}
H.es.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.et.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.eu.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.ev.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.ew.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.cS.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.c1.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b_(b,a,a.length)
return a[b]},
$ic1:1,
$ibh:1}
H.dh.prototype={}
H.di.prototype={}
H.dj.prototype={}
H.dk.prototype={}
H.au.prototype={
K:function(a){return H.hq(v.typeUniverse,this,a)},
b4:function(a){return H.pb(v.typeUniverse,this,a)}}
H.fP.prototype={}
H.fK.prototype={
i:function(a){return this.a}}
H.du.prototype={}
P.jX.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:16}
P.jW.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.jY.prototype={
$0:function(){this.a.$0()}}
P.jZ.prototype={
$0:function(){this.a.$0()}}
P.dt.prototype={
eB:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ck(new P.kf(this,b),0),a)
else throw H.b(P.B("`setTimeout()` not found."))},
eC:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ck(new P.ke(this,a,Date.now(),b),0),a)
else throw H.b(P.B("Periodic timer."))},
$id_:1}
P.kf.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.ke.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eo(s,o)}q.c=p
r.d.$1(q)}}
P.ce.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bJ.prototype={
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
if(r instanceof P.ce){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.c(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.b2(s)
if(o instanceof P.bJ){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dq.prototype={
gP:function(a){return new P.bJ(this.a())}}
P.fx.prototype={}
P.cY.prototype={}
P.f_.prototype={}
P.d_.prototype={}
P.km.prototype={}
P.kv.prototype={
$0:function(){var s=H.b(this.a)
s.stack=J.a5(this.b)
throw s}}
P.k3.prototype={
il:function(a){var s,r,q,p=null
try{if(C.f===$.aK){a.$0()
return}P.q7(p,p,this,a)}catch(q){s=H.ag(q)
r=H.lL(q)
P.n3(p,p,this,s,r)}},
im:function(a,b){var s,r,q,p=null
try{if(C.f===$.aK){a.$1(b)
return}P.q8(p,p,this,a,b)}catch(q){s=H.ag(q)
r=H.lL(q)
P.n3(p,p,this,s,r)}},
io:function(a,b){return this.im(a,b,t.z)},
ho:function(a){return new P.k4(this,a)},
dm:function(a,b){return new P.k5(this,a,b)}}
P.k4.prototype={
$0:function(){return this.a.il(this.b)}}
P.k5.prototype={
$1:function(a){return this.a.io(this.b,a)},
$S:function(){return this.c.K("~(0)")}}
P.dd.prototype={
gP:function(a){var s=new P.de(this,this.r)
s.c=this.e
return s},
gm:function(a){return this.a},
F:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eK(b)
return r}},
eK:function(a){var s=this.d
if(s==null)return!1
return this.bR(s[this.bN(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cW(s==null?q.b=P.ls():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cW(r==null?q.c=P.ls():r,b)}else return q.eE(0,b)},
eE:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.ls()
s=q.bN(b)
r=p[s]
if(r==null)p[s]=[q.bM(b)]
else{if(q.bR(r,b)>=0)return!1
r.push(q.bM(b))}return!0},
B:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fT(this.c,b)
else return this.fS(0,b)},
fS:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bN(b)
r=n[s]
q=o.bR(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dd(p)
return!0},
cW:function(a,b){if(a[b]!=null)return!1
a[b]=this.bM(b)
return!0},
fT:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dd(s)
delete a[b]
return!0},
cX:function(){this.r=1073741823&this.r+1},
bM:function(a){var s,r=this,q=new P.k2(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cX()
return q},
dd:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cX()},
bN:function(a){return J.ah(a)&1073741823},
bR:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.D(a[r].a,b))return r
return-1}}
P.k2.prototype={}
P.de.prototype={
gC:function(a){return this.d},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.b6(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cB.prototype={}
P.io.prototype={
$2:function(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:3}
P.cI.prototype={$ik:1,$ih:1,$in:1}
P.i.prototype={
gP:function(a){return new H.bc(a,this.gm(a))},
J:function(a,b){return this.h(a,b)},
gbw:function(a){return this.gm(a)===0},
ir:function(a,b){var s,r,q,p,o=this
if(o.gbw(a)){s=J.ld(0,H.bL(a).K("i.E"))
return s}r=o.h(a,0)
q=P.ip(o.gm(a),r,!0,H.bL(a).K("i.E"))
p=1
while(!0){s=o.gm(a)
if(typeof s!=="number")return H.v(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.c(q,p)
q[p]=s;++p}return q},
cG:function(a){return this.ir(a,!0)},
hJ:function(a,b,c,d){var s
P.bf(b,c,this.gm(a))
for(s=b;s<c;++s)this.l(a,s,d)},
i:function(a){return P.lc(a,"[","]")}}
P.cL.prototype={}
P.is.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.f(a)
r.a=s+": "
r.a+=H.f(b)},
$S:17}
P.W.prototype={
I:function(a,b){var s,r
for(s=J.b2(this.ga0(a));s.u();){r=s.gC(s)
b.$2(r,this.h(a,r))}},
gm:function(a){return J.aM(this.ga0(a))},
i:function(a){return P.lk(a)},
$iH:1}
P.hr.prototype={
l:function(a,b,c){throw H.b(P.B("Cannot modify unmodifiable map"))}}
P.cM.prototype={
h:function(a,b){return J.co(this.a,b)},
l:function(a,b,c){J.l1(this.a,b,c)},
I:function(a,b){J.l3(this.a,b)},
gm:function(a){return J.aM(this.a)},
i:function(a){return J.a5(this.a)},
$iH:1}
P.c9.prototype={}
P.dl.prototype={
ag:function(a,b){var s
for(s=J.b2(b);s.u();)this.n(0,s.gC(s))},
i:function(a){return P.lc(this,"{","}")},
J:function(a,b){var s,r,q,p="index"
P.nT(b,p)
P.mk(b,p)
for(s=P.oW(this,this.r),r=0;s.u();){q=s.d
if(b===r)return q;++r}throw H.b(P.O(b,this,p,null,r))},
$ik:1,
$ih:1}
P.df.prototype={}
P.dy.prototype={}
P.jE.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ag(r)}return null}}
P.jF.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ag(r)}return null}}
P.hN.prototype={
hX:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bf(a2,a3,a1.length)
if(a3==null)throw H.b(P.mj("Invalid range"))
s=$.nF()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.E(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.kD(C.a.E(a1,l))
h=H.kD(C.a.E(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.c(s,g)
f=s[g]
if(f>=0){g=C.a.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.T("")
e=p}else e=p
d=e.a+=C.a.t(a1,q,r)
e.a=d+H.at(k)
q=l
continue}}throw H.b(P.a3("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.t(a1,q,a3)
d=e.length
if(o>=0)P.lX(a1,n,a3,o,m,d)
else{c=C.c.bj(d-1,4)+1
if(c===1)throw H.b(P.a3(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.b_(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.lX(a1,n,a3,o,m,b)
else{c=C.c.bj(b,4)
if(c===1)throw H.b(P.a3(a,a1,a3))
if(c>1)a1=C.a.b_(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hO.prototype={}
P.dW.prototype={}
P.dY.prototype={}
P.i2.prototype={}
P.ig.prototype={
i:function(a){return this.a}}
P.ie.prototype={
eO:function(a,b,c){var s,r,q,p,o,n,m=null
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
default:n=m}if(n!=null){if(o==null)o=new P.T("")
if(p>b)o.a+=C.a.t(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.nR(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.jC.prototype={
ghI:function(){return C.Q}}
P.jG.prototype={
cd:function(a){var s,r,q,p=P.bf(0,null,a.length)
if(p==null)throw H.b(P.mj("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.kk(r)
if(q.eT(a,0,p)!==p){J.nM(a,p-1)
q.c7()}return new Uint8Array(r.subarray(0,H.pu(0,q.b,r.length)))}}
P.kk.prototype={
c7:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.c(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.c(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.c(r,q)
r[q]=189},
hf:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.c7()
return!1}},
eT:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.E(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hf(p,C.a.E(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c7()}else if(p<=2047){o=l.b
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
P.jD.prototype={
cd:function(a){var s=this.a,r=P.oK(s,a,0,null)
if(r!=null)return r
return new P.kj(s).ht(a,0,null,!0)}}
P.kj.prototype={
ht:function(a,b,c,d){var s,r,q,p,o=this,n=P.bf(b,c,J.aM(a))
if(b===n)return""
s=P.pq(a,b,n)
if(typeof n!=="number")return n.Z()
n-=b
r=o.bO(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.pr(q)
o.b=0
throw H.b(P.a3(p,a,b+o.c))}return r},
bO:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.Z()
if(c-b>1000){s=C.c.a3(b+c,2)
r=q.bO(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bO(a,s,c,d)}return q.hy(a,b,c,d)},
hy:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.T(""),f=b+1,e=a.length
if(b<0||b>=e)return H.c(a,b)
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
g.a+=H.at(a[l])}else g.a+=P.f1(a,f,n)
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
aU:function(a,b){return C.c.aU(this.a,b.a)},
gR:function(a){var s=this.a
return(s^C.c.aQ(s,30))&1073741823},
i:function(a){var s=this,r=P.o2(H.ou(s)),q=P.e0(H.os(s)),p=P.e0(H.oo(s)),o=P.e0(H.op(s)),n=P.e0(H.or(s)),m=P.e0(H.ot(s)),l=P.o3(H.oq(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.a_.prototype={}
P.bz.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bz&&this.a===b.a},
gR:function(a){return C.c.gR(this.a)},
aU:function(a,b){return C.c.aU(this.a,b.a)},
i:function(a){var s,r,q,p=new P.i_(),o=this.a
if(o<0)return"-"+new P.bz(0-o).i(0)
s=p.$1(C.c.a3(o,6e7)%60)
r=p.$1(C.c.a3(o,1e6)%60)
q=new P.hZ().$1(o%1e6)
return""+C.c.a3(o,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.hZ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.i_.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.K.prototype={}
P.dN.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.i5(s)
return"Assertion failed"}}
P.ey.prototype={
i:function(a){return"Throw of null."}}
P.ai.prototype={
gbQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbP:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbQ()+o+m
if(!q.a)return l
s=q.gbP()
r=P.i5(q.b)
return l+s+": "+r}}
P.c4.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.f(q):""
else if(q==null)s=": Not greater than or equal to "+H.f(r)
else if(q>r)s=": Not in inclusive range "+H.f(r)+".."+H.f(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.f(r)
return s}}
P.ea.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var s,r=this.b
if(typeof r!=="number")return r.a9()
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
P.dX.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.i5(s)+"."}}
P.eB.prototype={
i:function(a){return"Out of Memory"},
$iK:1}
P.cX.prototype={
i:function(a){return"Stack Overflow"},
$iK:1}
P.dZ.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fM.prototype={
i:function(a){return"Exception: "+this.a}}
P.ib.prototype={
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
for(o=e;o<m;++o){n=C.a.X(d,o)
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
return f+j+h+i+"\n"+C.a.p(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.f(e)+")"):f}}
P.aC.prototype={}
P.l.prototype={}
P.h.prototype={
bG:function(a,b){return new H.aZ(this,b,H.dC(this).K("aZ<h.E>"))},
gm:function(a){var s,r=this.gP(this)
for(s=0;r.u();)++s
return s},
gaJ:function(a){var s,r=this.gP(this)
if(!r.u())throw H.b(H.ih())
s=r.gC(r)
if(r.u())throw H.b(H.o9())
return s},
J:function(a,b){var s,r,q
P.mk(b,"index")
for(s=this.gP(this),r=0;s.u();){q=s.gC(s)
if(b===r)return q;++r}throw H.b(P.O(b,this,"index",null,r))},
i:function(a){return P.o8(this,"(",")")}}
P.eb.prototype={}
P.n.prototype={$ik:1,$ih:1}
P.H.prototype={}
P.as.prototype={
gR:function(a){return P.N.prototype.gR.call(C.j,this)},
i:function(a){return"null"}}
P.S.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
q:function(a,b){return this===b},
gR:function(a){return H.cV(this)},
i:function(a){return"Instance of '"+H.f(H.eK(this))+"'"},
toString:function(){return this.i(this)}}
P.y.prototype={}
P.T.prototype={
gm:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jA.prototype={
$2:function(a,b){var s,r,q,p=J.dH(b).dM(b,"=")
if(p===-1){if(b!=="")J.l1(a,P.lB(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.ab(b,p+1)
q=this.a
J.l1(a,P.lB(s,0,s.length,q,!0),P.lB(r,0,r.length,q,!0))}return a}}
P.jx.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv4 address, "+a,this.a,b))}}
P.jy.prototype={
$2:function(a,b){throw H.b(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jz.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kH(C.a.t(this.b,a,b),16)
if(typeof s!=="number")return s.a9()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bK.prototype={
gc6:function(){var s,r,q,p=this,o=p.x
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
else o=H.o(H.lh("Field '_text' has been assigned during initialization."))}return o},
gR:function(a){var s=this,r=s.z
if(r==null){r=C.a.gR(s.gc6())
if(s.z==null)s.z=r
else r=H.o(H.lh("Field 'hashCode' has been assigned during initialization."))}return r},
gcC:function(){var s=this,r=s.Q
if(r==null){r=new P.c9(P.my(s.gbh(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.o(H.lh("Field 'queryParameters' has been assigned during initialization."))}return r},
gea:function(){return this.b},
gcs:function(a){var s=this.c
if(s==null)return""
if(C.a.a5(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbz:function(a){var s=this.d
return s==null?P.mU(this.a):s},
gbh:function(a){var s=this.f
return s==null?"":s},
gcr:function(){var s=this.r
return s==null?"":s},
e4:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a5(s,"/"))s="/"+s
q=s
p=P.lz(null,0,0,b)
return new P.bK(n,l,j,k,q,p,o.r)},
gdI:function(){return this.c!=null},
gdL:function(){return this.f!=null},
gdJ:function(){return this.r!=null},
i:function(a){return this.gc6()},
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbH()&&s.c!=null===b.gdI()&&s.b===b.gea()&&s.gcs(s)===b.gcs(b)&&s.gbz(s)===b.gbz(b)&&s.e===b.ge0(b)&&s.f!=null===b.gdL()&&s.gbh(s)===b.gbh(b)&&s.r!=null===b.gdJ()&&s.gcr()===b.gcr()},
$ifr:1,
gbH:function(){return this.a},
ge0:function(a){return this.e}}
P.kh.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.f(P.ki(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.f(P.ki(C.h,b,C.e,!0))}}}
P.kg.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.b2(b),r=this.a;s.u();)r.$2(a,s.gC(s))}}
P.jw.prototype={
ge9:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.c(m,0)
s=o.a
m=m[0]+1
r=C.a.bv(s,"?",m)
q=s.length
if(r>=0){p=P.dz(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.fD("data","",n,n,P.dz(s,m,q,C.z,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kq.prototype={
$1:function(a){return new Uint8Array(96)}}
P.kp.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.c(s,a)
s=s[a]
J.nN(s,0,96,b)
return s},
$S:18}
P.kr.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.E(b,q)^96
if(p>=r)return H.c(a,p)
a[p]=c}}}
P.ks.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.E(b,0),r=C.a.E(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.c(a,p)
a[p]=c}}}
P.h6.prototype={
gdI:function(){return this.c>0},
gdK:function(){return this.c>0&&this.d+1<this.e},
gdL:function(){return this.f<this.r},
gdJ:function(){return this.r<this.a.length},
gd2:function(){return this.b===4&&C.a.a5(this.a,"http")},
gd3:function(){return this.b===5&&C.a.a5(this.a,"https")},
gbH:function(){var s=this.x
return s==null?this.x=this.eL():s},
eL:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gd2())return"http"
if(s.gd3())return"https"
if(r===4&&C.a.a5(s.a,"file"))return"file"
if(r===7&&C.a.a5(s.a,"package"))return"package"
return C.a.t(s.a,0,r)},
gea:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcs:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbz:function(a){var s=this
if(s.gdK())return P.kH(C.a.t(s.a,s.d+1,s.e),null)
if(s.gd2())return 80
if(s.gd3())return 443
return 0},
ge0:function(a){return C.a.t(this.a,this.e,this.f)},
gbh:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gcr:function(){var s=this.r,r=this.a
return s<r.length?C.a.ab(r,s+1):""},
gcC:function(){var s=this
if(s.f>=s.r)return C.a_
return new P.c9(P.my(s.gbh(s)),t.U)},
e4:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbH(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gdK()?n.gbz(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a5(r,"/"))r="/"+r
p=P.lz(m,0,0,b)
q=n.r
o=q<j.length?C.a.ab(j,q+1):m
return new P.bK(l,i,s,h,r,p,o)},
gR:function(a){var s=this.y
return s==null?this.y=C.a.gR(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifr:1}
P.fD.prototype={}
W.t.prototype={}
W.hI.prototype={
gm:function(a){return a.length}}
W.dL.prototype={
i:function(a){return String(a)}}
W.dM.prototype={
i:function(a){return String(a)}}
W.bP.prototype={$ibP:1}
W.bu.prototype={$ibu:1}
W.bv.prototype={$ibv:1}
W.bw.prototype={
cK:function(a,b,c){if(c!=null)return a.getContext(b,P.qm(c))
return a.getContext(b)},
ed:function(a,b){return this.cK(a,b,null)},
$ibw:1}
W.aB.prototype={
gm:function(a){return a.length}}
W.hS.prototype={
gm:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.cs.prototype={
gm:function(a){return a.length}}
W.hT.prototype={}
W.aq.prototype={}
W.aO.prototype={}
W.hU.prototype={
gm:function(a){return a.length}}
W.hV.prototype={
gm:function(a){return a.length}}
W.hW.prototype={
gm:function(a){return a.length}}
W.b7.prototype={$ib7:1}
W.hX.prototype={
i:function(a){return String(a)}}
W.ct.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.cu.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaI(a))+" x "+H.f(this.gaD(a))},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aL(b)
s=a.left==s.gby(b)&&a.top==s.gbD(b)&&this.gaI(a)==s.gaI(b)&&this.gaD(a)==s.gaD(b)}else s=!1
return s},
gR:function(a){return W.mL(J.ah(a.left),J.ah(a.top),J.ah(this.gaI(a)),J.ah(this.gaD(a)))},
gdq:function(a){return a.bottom},
gaD:function(a){return a.height},
gby:function(a){return a.left},
gcF:function(a){return a.right},
gbD:function(a){return a.top},
gaI:function(a){return a.width},
$ia6:1}
W.e2.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.hY.prototype={
gm:function(a){return a.length}}
W.fA.prototype={
gbw:function(a){return this.a.firstElementChild==null},
gm:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var s=this.cG(this)
return new J.a9(s,s.length)}}
W.E.prototype={
ghn:function(a){return new W.fI(a)},
gdr:function(a){return new W.fA(a,a.children)},
gds:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.a9()
if(q<0)q=-q*0
if(typeof p!=="number")return p.a9()
if(p<0)p=-p*0
return new P.a6(s,r,q,p,t.q)},
i:function(a){return a.localName},
ah:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.m5
if(s==null){s=H.d([],t.Q)
r=new W.cU(s)
s.push(W.mJ(null))
s.push(W.mP())
$.m5=r
d=r}else d=s
s=$.m4
if(s==null){s=new W.hs(d)
$.m4=s
c=s}else{s.a=d
c=s}}if($.b8==null){s=document
r=s.implementation.createHTMLDocument("")
$.b8=r
$.la=r.createRange()
r=$.b8.createElement("base")
t.D.a(r)
r.href=s.baseURI
$.b8.head.appendChild(r)}s=$.b8
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.b8
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.b8.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.b.F(C.Y,a.tagName)){$.la.selectNodeContents(q)
s=$.la
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.b8.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.b8.body)J.lU(q)
c.cL(p)
document.adoptNode(p)
return p},
hw:function(a,b,c){return this.ah(a,b,c,null)},
ef:function(a,b){a.textContent=null
a.appendChild(this.ah(a,b,null,null))},
ge6:function(a){return a.tagName},
$iE:1}
W.i0.prototype={
$1:function(a){return t.h.b(a)}}
W.j.prototype={$ij:1}
W.e.prototype={
hh:function(a,b,c,d){if(c!=null)this.eF(a,b,c,!1)},
eF:function(a,b,c,d){return a.addEventListener(b,H.ck(c,1),!1)},
$ie:1}
W.al.prototype={$ial:1}
W.bT.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1,
$ibT:1}
W.e4.prototype={
gm:function(a){return a.length}}
W.e6.prototype={
gm:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.id.prototype={
gm:function(a){return a.length}}
W.bB.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.bC.prototype={
gdt:function(a){return a.data},
$ibC:1}
W.bV.prototype={$ibV:1}
W.bX.prototype={$ibX:1}
W.bE.prototype={$ibE:1}
W.iq.prototype={
i:function(a){return String(a)}}
W.iI.prototype={
gm:function(a){return a.length}}
W.bY.prototype={$ibY:1}
W.ep.prototype={
h:function(a,b){return P.bo(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga0:function(a){var s=H.d([],t.s)
this.I(a,new W.iJ(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
W.iJ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eq.prototype={
h:function(a,b){return P.bo(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga0:function(a){var s=H.d([],t.s)
this.I(a,new W.iK(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
W.iK.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aF.prototype={$iaF:1}
W.er.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.am.prototype={$iam:1}
W.a2.prototype={
gaJ:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.b(P.lm("No elements"))
if(r>1)throw H.b(P.lm("More than one element"))
s=s.firstChild
s.toString
return s},
ag:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.c(r,b)
s.replaceChild(c,r[b])},
gP:function(a){var s=this.a.childNodes
return new W.cA(s,s.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.c(s,b)
return s[b]}}
W.w.prototype={
ie:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
ij:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nK(s,b,a)}catch(q){H.ag(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.ek(a):s},
fV:function(a,b,c){return a.replaceChild(b,c)},
$iw:1}
W.cT.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.aG.prototype={
gm:function(a){return a.length},
$iaG:1}
W.eF.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.eO.prototype={
h:function(a,b){return P.bo(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga0:function(a){var s=H.d([],t.s)
this.I(a,new W.iY(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
W.iY.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eQ.prototype={
gm:function(a){return a.length}}
W.av.prototype={$iav:1}
W.eS.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.aH.prototype={$iaH:1}
W.eT.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.aI.prototype={
gm:function(a){return a.length},
$iaI:1}
W.eZ.prototype={
h:function(a,b){return a.getItem(H.lD(b))},
l:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga0:function(a){var s=H.d([],t.s)
this.I(a,new W.j9(s))
return s},
gm:function(a){return a.length},
$iH:1}
W.j9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.bg.prototype={$ibg:1}
W.cZ.prototype={
ah:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bI(a,b,c,d)
s=W.o4("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.a2(r).ag(0,new W.a2(s))
return r}}
W.f2.prototype={
ah:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bI(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.ah(s.createElement("table"),b,c,d)
s.toString
s=new W.a2(s)
q=s.gaJ(s)
q.toString
s=new W.a2(q)
p=s.gaJ(s)
r.toString
p.toString
new W.a2(r).ag(0,new W.a2(p))
return r}}
W.f3.prototype={
ah:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bI(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.D.ah(s.createElement("table"),b,c,d)
s.toString
s=new W.a2(s)
q=s.gaJ(s)
r.toString
q.toString
new W.a2(r).ag(0,new W.a2(q))
return r}}
W.c7.prototype={$ic7:1}
W.ax.prototype={$iax:1}
W.ad.prototype={$iad:1}
W.f6.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.f7.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.jg.prototype={
gm:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.bH.prototype={$ibH:1}
W.fc.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.jk.prototype={
gm:function(a){return a.length}}
W.aY.prototype={}
W.jB.prototype={
i:function(a){return String(a)}}
W.fu.prototype={
gm:function(a){return a.length}}
W.bk.prototype={
ghA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.B("deltaY is not supported"))},
ghz:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.B("deltaX is not supported"))},
$ibk:1}
W.cb.prototype={
fX:function(a,b){return a.requestAnimationFrame(H.ck(b,1))},
eS:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cc.prototype={$icc:1}
W.fB.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.db.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aL(b)
s=a.left==s.gby(b)&&a.top==s.gbD(b)&&a.width==s.gaI(b)&&a.height==s.gaD(b)}else s=!1
return s},
gR:function(a){return W.mL(J.ah(a.left),J.ah(a.top),J.ah(a.width),J.ah(a.height))},
gaD:function(a){return a.height},
gaI:function(a){return a.width}}
W.fQ.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.dg.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.h9.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.hg.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ik:1,
$iA:1,
$ih:1,
$in:1}
W.fy.prototype={
I:function(a,b){var s,r,q,p,o
for(s=this.ga0(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
ga0:function(a){var s,r,q,p,o=this.a.attributes,n=H.d([],t.s)
for(s=o.length,r=t.gH,q=0;q<s;++q){if(q>=o.length)return H.c(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.fI.prototype={
h:function(a,b){return this.a.getAttribute(H.lD(b))},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.ga0(this).length}}
W.lb.prototype={}
W.fL.prototype={
he:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nL(s,this.c,r,!1)}}}
W.k_.prototype={
$1:function(a){return this.a.$1(a)}}
W.lr.prototype={}
W.cd.prototype={
ew:function(a){var s
if($.dc.gbw($.dc)){for(s=0;s<262;++s)$.dc.l(0,C.X[s],W.qv())
for(s=0;s<12;++s)$.dc.l(0,C.o[s],W.qw())}},
aR:function(a){return $.nG().F(0,W.cw(a))},
as:function(a,b,c){var s=$.dc.h(0,H.f(W.cw(a))+"::"+b)
if(s==null)s=$.dc.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$ian:1}
W.M.prototype={
gP:function(a){return new W.cA(a,this.gm(a))}}
W.cU.prototype={
aR:function(a){return C.b.dh(this.a,new W.iN(a))},
as:function(a,b,c){return C.b.dh(this.a,new W.iM(a,b,c))},
$ian:1}
W.iN.prototype={
$1:function(a){return a.aR(this.a)}}
W.iM.prototype={
$1:function(a){return a.as(this.a,this.b,this.c)}}
W.dm.prototype={
eA:function(a,b,c,d){var s,r,q
this.a.ag(0,c)
s=b.bG(0,new W.k7())
r=b.bG(0,new W.k8())
this.b.ag(0,s)
q=this.c
q.ag(0,C.w)
q.ag(0,r)},
aR:function(a){return this.a.F(0,W.cw(a))},
as:function(a,b,c){var s=this,r=W.cw(a),q=s.c
if(q.F(0,H.f(r)+"::"+b))return s.d.hl(c)
else if(q.F(0,"*::"+b))return s.d.hl(c)
else{q=s.b
if(q.F(0,H.f(r)+"::"+b))return!0
else if(q.F(0,"*::"+b))return!0
else if(q.F(0,H.f(r)+"::*"))return!0
else if(q.F(0,"*::*"))return!0}return!1},
$ian:1}
W.k7.prototype={
$1:function(a){return!C.b.F(C.o,a)}}
W.k8.prototype={
$1:function(a){return C.b.F(C.o,a)}}
W.hi.prototype={
as:function(a,b,c){if(this.en(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.F(0,b)
return!1}}
W.kd.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.hh.prototype={
aR:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cw(a)==="foreignObject")return!1
if(s)return!0
return!1},
as:function(a,b,c){if(b==="is"||C.a.a5(b,"on"))return!1
return this.aR(a)},
$ian:1}
W.cA.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.co(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gC:function(a){return this.d}}
W.an.prototype={}
W.k6.prototype={}
W.hs.prototype={
cL:function(a){var s=this,r=new W.kl(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
b7:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.lU(a)
else b.removeChild(a)},
h1:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.nO(a)
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
try{r=J.a5(a)}catch(p){H.ag(p)}try{q=W.cw(a)
this.h0(a,b,n,r,q,m,l)}catch(p){if(H.ag(p) instanceof P.ai)throw p
else{this.b7(a,b)
window
o="Removing corrupted element "+H.f(r)
if(typeof console!="undefined")window.console.warn(o)}}},
h0:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.b7(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aR(a)){m.b7(a,b)
window
s="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.as(a,"is",g)){m.b7(a,b)
window
s="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.ga0(f)
r=H.d(s.slice(0),H.lC(s).K("x<1>"))
for(q=f.ga0(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.c(r,q)
p=r[q]
o=m.a
n=J.nS(p)
H.lD(p)
if(!o.as(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.aW.b(a))m.cL(a.content)}}
W.kl.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.h1(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.b7(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.lm("Corrupt HTML")
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
W.fC.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fN.prototype={}
W.fO.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h5.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.h7.prototype={}
W.h8.prototype={}
W.hd.prototype={}
W.hj.prototype={}
W.hk.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.hl.prototype={}
W.hm.prototype={}
W.ht.prototype={}
W.hu.prototype={}
W.hv.prototype={}
W.hw.prototype={}
W.hx.prototype={}
W.hy.prototype={}
W.hz.prototype={}
W.hA.prototype={}
W.hB.prototype={}
W.hC.prototype={}
P.k9.prototype={
cp:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bF:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.lF(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.ak)return new Date(a.a)
if(t.fv.b(a))throw H.b(P.jv("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.G.b(a))return a
if(t.bX.b(a))return a
if(t.v.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.cp(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.c(r,s)
r[s]=p
J.l3(a,new P.kb(n,o))
return n.a}if(t.aH.b(a)){s=o.cp(a)
n=o.b
if(s>=n.length)return H.c(n,s)
p=n[s]
if(p!=null)return p
return o.hv(a,s)}if(t.eH.b(a)){s=o.cp(a)
r=o.b
q=r.length
if(s>=q)return H.c(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.c(r,s)
r[s]=p
o.hQ(a,new P.kc(n,o))
return n.b}throw H.b(P.jv("structured clone of other type"))},
hv:function(a,b){var s,r=J.b0(a),q=r.gm(a),p=new Array(q),o=this.b
if(b>=o.length)return H.c(o,b)
o[b]=p
if(typeof q!=="number")return H.v(q)
s=0
for(;s<q;++s){o=this.bF(r.h(a,s))
if(s>=p.length)return H.c(p,s)
p[s]=o}return p}}
P.kb.prototype={
$2:function(a,b){this.a.a[a]=this.b.bF(b)},
$S:3}
P.kc.prototype={
$2:function(a,b){this.a.b[a]=this.b.bF(b)},
$S:3}
P.dv.prototype={$ibC:1,
gdt:function(a){return this.a}}
P.kw.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.ka.prototype={
hQ:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e5.prototype={
gbo:function(){var s=this.b,r=H.dC(s)
return new H.aR(new H.aZ(s,new P.i9(),r.K("aZ<i.E>")),new P.ia(),r.K("aR<i.E,E>"))},
l:function(a,b,c){var s=this.gbo()
J.nQ(s.b.$1(J.hH(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.aM(this.gbo().a)},
h:function(a,b){var s=this.gbo()
return s.b.$1(J.hH(s.a,b))},
gP:function(a){var s=P.lj(this.gbo(),!1,t.h)
return new J.a9(s,s.length)}}
P.i9.prototype={
$1:function(a){return t.h.b(a)}}
P.ia.prototype={
$1:function(a){return t.h.a(a)}}
P.h4.prototype={
gcF:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
gdq:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.v(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.f(s.a)+", "+H.f(s.b)+") "+H.f(s.c)+" x "+H.f(s.d)},
q:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.q.b(b)){s=n.a
r=J.aL(b)
if(s==r.gby(b)){q=n.b
if(q==r.gbD(b)){p=n.c
if(typeof s!=="number")return s.v()
if(typeof p!=="number")return H.v(p)
o=n.$ti.c
if(o.a(s+p)===r.gcF(b)){s=n.d
if(typeof q!=="number")return q.v()
if(typeof s!=="number")return H.v(s)
r=o.a(q+s)===r.gdq(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gR:function(a){var s,r=this,q=r.a,p=J.ah(q),o=r.b,n=J.ah(o),m=r.c
if(typeof q!=="number")return q.v()
if(typeof m!=="number")return H.v(m)
s=r.$ti.c
m=C.c.gR(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.v()
if(typeof q!=="number")return H.v(q)
q=C.c.gR(s.a(o+q))
return P.oV(P.k1(P.k1(P.k1(P.k1(0,p),n),m),q))}}
P.a6.prototype={
gby:function(a){return this.a},
gbD:function(a){return this.b},
gaI:function(a){return this.c},
gaD:function(a){return this.d}}
P.aQ.prototype={$iaQ:1}
P.eh.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.aU.prototype={$iaU:1}
P.ez.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.iQ.prototype={
gm:function(a){return a.length}}
P.c5.prototype={$ic5:1}
P.f0.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.m.prototype={
gdr:function(a){return new P.e5(a,new W.a2(a))},
ah:function(a,b,c,d){var s,r,q,p,o,n=H.d([],t.Q)
n.push(W.mJ(null))
n.push(W.mP())
n.push(new W.hh())
c=new W.hs(new W.cU(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.q.hw(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.a2(q)
o=n.gaJ(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$im:1}
P.aW.prototype={$iaW:1}
P.fd.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.fT.prototype={}
P.fU.prototype={}
P.h0.prototype={}
P.h1.prototype={}
P.he.prototype={}
P.hf.prototype={}
P.hn.prototype={}
P.ho.prototype={}
P.bh.prototype={$ik:1,$ih:1,$in:1}
P.hL.prototype={
gm:function(a){return a.length}}
P.dP.prototype={
h:function(a,b){return P.bo(a.get(b))},
I:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
ga0:function(a){var s=H.d([],t.s)
this.I(a,new P.hM(s))
return s},
gm:function(a){return a.size},
l:function(a,b,c){throw H.b(P.B("Not supported"))},
$iH:1}
P.hM.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dQ.prototype={
gm:function(a){return a.length}}
P.b4.prototype={}
P.eA.prototype={
gm:function(a){return a.length}}
P.fz.prototype={}
P.eN.prototype={
ip:function(a,b,c,d,e,f,g){var s
if(t.v.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.qn(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.bO("Incorrect number or type of arguments"))}}
P.eW.prototype={
gm:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.b(P.O(b,a,null,null,null))
s=P.bo(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$in:1}
P.ha.prototype={}
P.hb.prototype={}
K.b3.prototype={
aE:function(a,b){return!0},
i:function(a){return"all"}}
K.e8.prototype={
aE:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aE(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.it.prototype={}
K.ac.prototype={
aE:function(a,b){return!this.ej(0,b)},
i:function(a){return"!["+this.cO(0)+"]"}}
K.iT.prototype={
aE:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.at(this.a),r=H.at(this.b)
return s+".."+r}}
K.iZ.prototype={
er:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.p("May not create a Set with zero characters."))
s=new H.C(t.E)
for(r=new H.bc(a,a.gm(a));r.u();){q=r.d
s.l(0,q,!0)}p=P.lj(s.ga0(s),!0,t.e)
C.b.ei(p)
this.a=p},
aE:function(a,b){return C.b.F(this.a,b)},
i:function(a){return P.f1(this.a,0,null)}}
L.eX.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.fe(this.a.k(0,b))
p.a=H.d([],t.B)
p.c=!1
this.c.push(p)
return p},
hL:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aE(0,a))return p}return null},
i:function(a){return this.b},
dc:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.F(0,l))m+=" (consume)"
for(l=n.d.c,l=l.ga0(l),l=l.gP(l);l.u();){r=l.gC(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.f(r)+" => ["+H.f(q)+"]")
m=s.c.F(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.q)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.fa.prototype={
i:function(a){var s=H.lQ(this.b,"\n","\\n"),r=H.lQ(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fb.prototype={
aG:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.q)(c),++r){q=c[r]
this.c.l(0,q,b)}},
i:function(a){return this.b}}
L.jh.prototype={
k:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eX(this,b)
s.c=H.d([],t.br)
this.a.l(0,b,s)}return s},
N:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.fb(a)
s.c=new H.C(t.dO)
this.b.l(0,a,s)}return s},
cH:function(a){return this.it(a)},
it:function(a){var s=this
return P.pK(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cH(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.d([],c)
a0=H.d([],c)
a1=H.d([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.cD(a1,0)
else{if(!r.u()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.hL(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.f1(a0,0,null)
throw H.b(P.p("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.o(P.B("removeRange"))
P.bf(0,k,a0.length)
a0.splice(0,k-0)
C.b.ag(a1,a0)
a0=H.d([],c)
b=H.d([],c)
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
if(d.d!=null){g=P.f1(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.fa(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.F(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.oT()
case 1:return P.oU(o)}}},t.eB)},
i:function(a){var s,r=new P.T(""),q=this.d
if(q!=null)r.a=q.dc()+"\n"
for(q=this.a,q=q.giv(q),q=q.gP(q);q.u();){s=q.gC(q)
if(s!=this.d)r.a+=s.dc()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.fe.prototype={
i:function(a){return this.b.b+": "+this.cO(0)}}
O.aj.prototype={
bJ:function(a){this.a=H.d([],a.K("x<0*>"))
this.c=this.b=null},
cM:function(a,b,c){this.b=b
this.c=a},
bk:function(a,b){return this.cM(a,null,b)},
fF:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
ev:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gm:function(a){return this.a.length},
gP:function(a){var s=this.a
return new J.a9(s,s.length)},
J:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.c(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.dC(q).K("x<aj.T*>")
if(q.fF(H.d([b],p))){s=q.a
r=s.length
s.push(b)
q.ev(r,H.d([b],p))}},
$ih:1}
O.cP.prototype={
gm:function(a){return this.a.length},
gA:function(){var s=this.b
return s==null?this.b=D.L():s},
aK:function(){var s=this.b
if(s!=null)s.G(null)},
ga1:function(a){var s=this.a
if(s.length>0)return C.b.gau(s)
else return V.eo()},
e2:function(a){var s=this.a
if(a==null)s.push(V.eo())
else s.push(a)
this.aK()},
cB:function(){var s=this.a
if(s.length>0){s.pop()
this.aK()}}}
E.hP.prototype={}
E.bA.prototype={
saa:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gA().B(0,q.gdY())
s=q.c
if(s!=null)s.gA().n(0,q.gdY())
r=new D.G("shape",p,q.c)
r.b=!0
q.aF(r)}},
sbe:function(a){var s,r,q=this
if(!J.D(q.r,a)){s=q.r
if(s!=null)s.gA().B(0,q.gdW())
if(a!=null)a.gA().n(0,q.gdW())
q.r=a
r=new D.G("mover",s,a)
r.b=!0
q.aF(r)}},
aw:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.b1(0,b,q):null
if(!J.D(o,q.x)){s=q.x
q.x=o
r=new D.G("matrix",s,o)
r.b=!0
q.aF(r)}for(p=q.y.a,p=new J.a9(p,p.length);p.u();)p.d.aw(0,b)},
aZ:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga1(q))
else o.push(p.p(0,q.ga1(q)))
q.aK()
a.e3(r.f)
q=a.dy
s=(q&&C.b).gau(q)
if(s!=null&&r.d!=null)s.ii(a,r)
for(q=r.y.a,q=new J.a9(q,q.length);q.u();)q.d.aZ(a)
a.e1()
a.dx.cB()},
aF:function(a){var s=this.z
if(s!=null)s.G(a)},
U:function(){return this.aF(null)},
dZ:function(a){this.e=null
this.aF(a)},
i3:function(){return this.dZ(null)},
dX:function(a){this.aF(a)},
i2:function(){return this.dX(null)},
dV:function(a){this.aF(a)},
i_:function(){return this.dV(null)},
hZ:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdU(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bS()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.U()},
i1:function(a,b){var s,r
for(s=b.gP(b),r=this.gdU();s.u();)s.gC(s).gA().B(0,r)
this.U()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bR.prototype={
i:function(a){return this.b}}
E.c2.prototype={
i:function(a){return this.b}}
E.fJ.prototype={}
E.iU.prototype={
eq:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.ak(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cP()
r=t.p
s.a=H.d([],r)
s.gA().n(0,new E.iV(q))
q.cy=s
s=new O.cP()
s.a=H.d([],r)
s.gA().n(0,new E.iW(q))
q.db=s
s=new O.cP()
s.a=H.d([],r)
s.gA().n(0,new E.iX(q))
q.dx=s
s=H.d([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.C(t.h9)},
gic:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga1(q)
s=r.db
s=r.z=q.p(0,s.ga1(s))
q=s}return q},
e3:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gau(s):a)},
e1:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.iV.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.iW.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.iX.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.f9.prototype={
cT:function(a){this.e5()},
cS:function(){return this.cT(null)},
ghR:function(){var s,r=this,q=Date.now(),p=C.c.a3(P.m3(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.ak(q,!1)
return s/p},
d7:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.p()
if(typeof p!=="number")return H.v(p)
s=C.d.cq(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.p()
r=C.d.cq(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.ms(C.n,q.gik())}},
e5:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.F.eS(s)
r=W.n5(new E.jf(this),t.H)
r.toString
C.F.fX(s,r)}},
ih:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d7()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.ak(p,!1)
q.y=P.m3(p-q.r.a).a*0.000001
p=q.cy
C.b.sm(p.a,0)
p.aK()
p=q.db
C.b.sm(p.a,0)
p.aK()
p=q.dx
C.b.sm(p.a,0)
p.aK()
p=q.dy
p.toString
C.b.sm(p,0)
q.dy.push(null)
m.aZ(n.e)}q=n.Q
if(q!=null)q.G(null)}catch(o){s=H.ag(o)
r=H.lL(o)
P.lP("Error: "+H.f(s))
P.lP("Stack: "+H.f(r))
throw H.b(s)}}}
E.jf.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ih()}}}
Z.fv.prototype={}
Z.dT.prototype={
c8:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ag(q)
r=P.p('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.f(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.f(s.e)+"]"}}
Z.jV.prototype={}
Z.dU.prototype={
aW:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
c8:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].c8(a)},
iu:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aZ:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.c(q,r)
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
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(n,", ")+"\nAttrs:   "+C.b.j(p,", ")}}
Z.bW.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.eK(this.c))+"'")+"]"}}
Z.bj.prototype={
gcN:function(a){var s=this.a,r=(s&$.bs().a)!==0?3:0
if((s&$.br().a)!==0)r+=3
if((s&$.bq().a)!==0)r+=3
if((s&$.bt().a)!==0)r+=2
if((s&$.bN().a)!==0)r+=3
if((s&$.dI().a)!==0)r+=3
if((s&$.dJ().a)!==0)r+=4
if((s&$.cn().a)!==0)++r
return(s&$.bp().a)!==0?r+4:r},
hm:function(a){var s,r=$.bs(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.br()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bq()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bt()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bN()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dI()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dJ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cn()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bp()
if((q&r.a)!==0)if(s===a)return r
return $.nE()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bj))return!1
return this.a===b.a},
i:function(a){var s=H.d([],t.i),r=this.a
if((r&$.bs().a)!==0)s.push("Pos")
if((r&$.br().a)!==0)s.push("Norm")
if((r&$.bq().a)!==0)s.push("Binm")
if((r&$.bt().a)!==0)s.push("Txt2D")
if((r&$.bN().a)!==0)s.push("TxtCube")
if((r&$.dI().a)!==0)s.push("Clr3")
if((r&$.dJ().a)!==0)s.push("Clr4")
if((r&$.cn().a)!==0)s.push("Weight")
if((r&$.bp().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.hQ.prototype={}
D.bS.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=H.d([],t.f):s).push(b)},
B:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.F(q,b)
if(q===!0){q=r.a
s=(q&&C.b).B(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.F(q,b)
if(q===!0){q=r.b
s=(q&&C.b).B(q,b)||s}return s},
G:function(a){var s,r,q,p=this,o={}
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
return!0}if(!r)C.b.I(P.lj(s,!0,t.dm),new D.i6(o))
s=p.b
if(s!=null){p.b=H.d([],t.f)
C.b.I(s,new D.i7(o))}return!0},
hG:function(){return this.G(null)},
av:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.G(s)}}}}
D.i6.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.i7.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.U.prototype={}
D.b9.prototype={}
D.ba.prototype={}
D.G.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.dV.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dV))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ef.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ef))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.ik.prototype={
i8:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
i4:function(a){this.c=a.b
this.d.B(0,a.a)
return!1}}
X.cK.prototype={}
X.ir.prototype={
b5:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.p()
s=b.b
r=o.ch
if(typeof s!=="number")return s.p()
q=m.v(0,new V.a1(l*k,s*r))
r=o.a.gaS()
p=new X.bZ(a,V.be(),o.x,r,q)
p.b=!0
o.z=new P.ak(n,!1)
o.x=q
return p},
cA:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.ee()
if(typeof s!=="number")return s.ae()
this.r=(s&~r)>>>0
return!1},
bf:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.b5(a,b))
return!0},
i9:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaS()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.p()
o=a.b
n=m.cy
if(typeof o!=="number")return o.p()
r=new X.c_(new V.ae(q*p,o*n),s,r)
r.b=!0
l.G(r)
return!0},
fs:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cK(c,p.a.gaS(),b)
q.b=!0
r.G(q)
p.y=new P.ak(s,!1)
p.x=V.be()}}
X.ar.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.ar))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bZ.prototype={}
X.iL.prototype={
bS:function(a,b,c){var s=this,r=new P.ak(Date.now(),!1),q=s.a.gaS(),p=new X.bZ(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cA:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.G(this.bS(a,b,!0))
return!0},
bg:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.ee()
if(typeof r!=="number")return r.ae()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.G(s.bS(a,b,!0))
return!0},
bf:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.bS(a,b,!1))
return!0},
ia:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaS()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.p()
p=a.b
o=n.ch
if(typeof p!=="number")return p.p()
s=new X.c_(new V.ae(r*q,p*o),s,b)
s.b=!0
m.G(s)
return!0},
gdu:function(){var s=this.b
return s==null?this.b=D.L():s},
gcI:function(){var s=this.c
return s==null?this.c=D.L():s},
gdT:function(){var s=this.d
return s==null?this.d=D.L():s}}
X.c_.prototype={}
X.eI.prototype={}
X.d0.prototype={}
X.jj.prototype={
b5:function(a,b){var s=this,r=new P.ak(Date.now(),!1),q=a.length>0?a[0]:V.be(),p=s.a.gaS(),o=new X.d0(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
i7:function(a){var s=this.b
if(s==null)return!1
s.G(this.b5(a,!0))
return!0},
i5:function(a){var s=this.c
if(s==null)return!1
s.G(this.b5(a,!0))
return!0},
i6:function(a){var s=this.d
if(s==null)return!1
s.G(this.b5(a,!1))
return!0}}
X.fs.prototype={
gaS:function(){var s=this.a,r=C.i.gds(s).c
r.toString
s=C.i.gds(s).d
s.toString
return V.mm(0,0,r,s)},
cZ:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.ef(s,new X.ar(r,a.altKey,a.shiftKey))},
aP:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ar(r,a.altKey,a.shiftKey)},
c5:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.ar(r,a.altKey,a.shiftKey)},
aB:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.Z()
if(typeof o!=="number")return H.v(o)
s=r.top
if(typeof p!=="number")return p.Z()
if(typeof s!=="number")return H.v(s)
return new V.a1(q-o,p-s)},
b6:function(a){return new V.ae(a.movementX,a.movementY)},
c1:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.d([],t.cS)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
o=C.d.an(p.pageX)
C.d.an(p.pageY)
n=k.left
if(typeof n!=="number")return H.v(n)
C.d.an(p.pageX)
m=C.d.an(p.pageY)
l=k.top
if(typeof l!=="number")return H.v(l)
j.push(new V.a1(o-n,m-l))}return j},
az:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dV(s,new X.ar(r,a.altKey,a.shiftKey))},
bT:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.Z()
if(typeof n!=="number")return H.v(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.Z()
if(typeof p!=="number")return H.v(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.v(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.v(p)
p=r<p}else p=!1
return p},
fl:function(a){this.f=!0},
f9:function(a){this.f=!1},
ff:function(a){if(this.f&&this.bT(a))a.preventDefault()},
fp:function(a){var s
if(!this.f)return
s=this.cZ(a)
this.b.i8(s)},
fn:function(a){var s
if(!this.f)return
s=this.cZ(a)
this.b.i4(s)},
fu:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aP(a)
if(p.x){s=p.az(a)
r=p.b6(a)
if(p.d.cA(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.az(a)
q=p.aB(a)
if(p.c.cA(s,q))a.preventDefault()},
fA:function(a){var s,r,q,p=this
p.aP(a)
s=p.az(a)
if(p.x){r=p.b6(a)
if(p.d.bg(s,r))a.preventDefault()
return}if(p.r)return
q=p.aB(a)
if(p.c.bg(s,q))a.preventDefault()},
fj:function(a){var s,r,q,p=this
if(!p.bT(a)){p.aP(a)
s=p.az(a)
if(p.x){r=p.b6(a)
if(p.d.bg(s,r))a.preventDefault()
return}if(p.r)return
q=p.aB(a)
if(p.c.bg(s,q))a.preventDefault()}},
fw:function(a){var s,r,q,p=this
p.aP(a)
s=p.az(a)
if(p.x){r=p.b6(a)
if(p.d.bf(s,r))a.preventDefault()
return}if(p.r)return
q=p.aB(a)
if(p.c.bf(s,q))a.preventDefault()},
fh:function(a){var s,r,q,p=this
if(!p.bT(a)){p.aP(a)
s=p.az(a)
if(p.x){r=p.b6(a)
if(p.d.bf(s,r))a.preventDefault()
return}if(p.r)return
q=p.aB(a)
if(p.c.bf(s,q))a.preventDefault()}},
fC:function(a){var s,r,q=this
q.aP(a)
s=new V.ae((a&&C.E).ghz(a),C.E.ghA(a)).p(0,q.Q)
if(q.x){if(q.d.i9(s))a.preventDefault()
return}if(q.r)return
r=q.aB(a)
if(q.c.ia(s,r))a.preventDefault()},
fE:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.az(q.y)
r=q.aB(q.y)
q.d.fs(s,r,p)}},
fR:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c5(a)
s=r.c1(a)
if(r.e.i7(s))a.preventDefault()},
fN:function(a){var s
this.c5(a)
s=this.c1(a)
if(this.e.i5(s))a.preventDefault()},
fP:function(a){var s
this.c5(a)
s=this.c1(a)
if(this.e.i6(s))a.preventDefault()}}
D.dR.prototype={$iV:1}
D.by.prototype={
ax:function(a){var s=this.r
if(s!=null)s.G(a)},
ey:function(){return this.ax(null)},
$iV:1}
D.V.prototype={}
D.cF.prototype={
ax:function(a){var s=this.y
if(s!=null)s.G(a)},
d5:function(a){var s=this.z
if(s!=null)s.G(a)},
fq:function(){return this.d5(null)},
fH:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(q==null||this.eM(q))return!1}return!0},
f3:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gd4(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o instanceof D.by)this.f.push(o)
n=o.r
if(n==null){n=new D.bS()
n.d=0
o.r=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}s=new D.b9()
s.b=!0
this.ax(s)},
fL:function(a,b){var s,r,q
for(s=b.gP(b),r=this.gd4();s.u();){q=s.gC(s)
C.b.B(this.e,q)
q.gA().B(0,r)}s=new D.ba()
s.b=!0
this.ax(s)},
eM:function(a){var s=C.b.F(this.f,a)
return s}}
D.eH.prototype={$iV:1}
D.eU.prototype={$iV:1}
V.aa.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aa))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.ap.prototype={
cG:function(a){var s=this
return H.d([s.a,s.b,s.c,s.d],t.m)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ap))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.i4.prototype={}
V.en.prototype={
ad:function(a,b){var s=this,r=H.d([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.en))return!1
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
V.bd.prototype={
ad:function(a,b){var s=this,r=H.d([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
dP:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.F().toString
if(Math.abs(b3-0)<1e-9)return V.eo()
s=1/b3
r=-l
q=-a2
return V.aT((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
p:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aT(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bE:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.z(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bi:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.P(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bd))return!1
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
H:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.cm(H.d([n.a,n.e,n.y,n.cx],m),3,0),k=V.cm(H.d([n.b,n.f,n.z,n.cy],m),3,0),j=V.cm(H.d([n.c,n.r,n.Q,n.db],m),3,0),i=V.cm(H.d([n.d,n.x,n.ch,n.dx],m),3,0)
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
M:function(){return this.H("")}}
V.a1.prototype={
a4:function(a){return new V.ae(a.a-this.a,a.b-this.b)},
v:function(a,b){return new V.a1(this.a+b.a,this.b+b.b)},
S:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.be()
return new V.a1(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.P.prototype={
v:function(a,b){return new V.P(this.a+b.a,this.b+b.b,this.c+b.c)},
Z:function(a,b){return new V.P(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.P(this.a*b,this.b*b,this.c*b)},
S:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.ll()
return new V.P(this.a/b,this.b/b,this.c/b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.P))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.bG.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bG))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.eM.prototype={
gac:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eM))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
V.ae.prototype={
bc:function(a){return Math.sqrt(this.a6(this))},
a6:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.v(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.v(r)
return q*p+s*r},
p:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.p()
if(typeof b!=="number")return H.v(b)
s=this.b
if(typeof s!=="number")return s.p()
return new V.ae(r*b,s*b)},
S:function(a,b){var s,r
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.mA
return s==null?$.mA=new V.ae(0,0):s}s=this.a
if(typeof s!=="number")return s.S()
r=this.b
if(typeof r!=="number")return r.S()
return new V.ae(s/b,r/b)},
q:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
s=b.a
r=this.a
$.F().toString
if(typeof s!=="number")return s.Z()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.Z()
if(typeof r!=="number")return H.v(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.z.prototype={
bc:function(a){return Math.sqrt(this.a6(this))},
a6:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ct:function(a,b){return new V.z(V.hF(this.a,a.a,b),V.hF(this.b,a.b,b),V.hF(this.c,a.c,b))},
D:function(){var s=this,r=Math.sqrt(s.a6(s))
if(r===1)return s
return s.S(0,r)},
aC:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.z(s*r-q*p,q*o-n*r,n*p-s*o)},
v:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
T:function(a){return new V.z(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
S:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.d9()
return new V.z(this.a/b,this.b/b,this.c/b)},
dQ:function(){$.F().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.z))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.bi.prototype={
bc:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
S:function(a,b){var s,r=this
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.mF
return s==null?$.mF=new V.bi(0,0,0,0):s}return new V.bi(r.a/b,r.b/b,r.c/b,r.d/b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bi))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.I(s.a,3,0)+", "+V.I(s.b,3,0)+", "+V.I(s.c,3,0)+", "+V.I(s.d,3,0)+"]"}}
U.hR.prototype={
bL:function(a){var s=V.qM(a,this.c,this.b)
return s},
gA:function(){var s=this.y
return s==null?this.y=D.L():s},
O:function(a){var s=this.y
if(s!=null)s.G(a)},
scJ:function(a,b){},
scu:function(a){var s,r=this,q=r.b
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bL(s)}q=new D.G("maximumLocation",q,r.b)
q.b=!0
r.O(q)}},
scw:function(a){var s,r=this,q=r.c
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bL(s)}q=new D.G("minimumLocation",q,r.c)
q.b=!0
r.O(q)}},
sY:function(a,b){var s,r=this
b=r.bL(b)
s=r.d
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.G("location",s,b)
s.b=!0
r.O(s)}},
scv:function(a){var s,r,q=this,p=q.e
$.F().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.G("maximumVelocity",p,a)
p.b=!0
q.O(p)}},
sW:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.G("velocity",r,a)
r.b=!0
s.O(r)}},
scf:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.G("dampening",s,a)
s.b=!0
this.O(s)}},
aw:function(a,b){var s,r,q,p=this,o=p.f
$.F().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sY(0,p.d+s*b)
o=p.x
$.F().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sW(s)}}}
U.cp.prototype={
gA:function(){var s=this.b
return s==null?this.b=D.L():s},
b1:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cp))return!1
return J.D(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.bU.prototype={
gA:function(){var s=this.e
return s==null?this.e=D.L():s},
O:function(a){var s=this.e
if(s!=null)s.G(a)},
a8:function(){return this.O(null)},
f1:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaO(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gA()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.b9()
s.b=!0
this.O(s)},
fJ:function(a,b){var s,r
for(s=b.gP(b),r=this.gaO();s.u();)s.gC(s).gA().B(0,r)
s=new D.ba()
s.b=!0
this.O(s)},
b1:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.a9()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.a9(p,p.length),s=null;p.u();){o=p.d
if(o!=null){r=o.b1(0,b,c)
if(r!=null)s=s==null?r:r.p(0,s)}}q.f=s==null?V.eo():s
p=q.e
if(p!=null)p.av(0)}return q.f},
q:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bU))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.c(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.c(p,r)
if(!J.D(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iX:1}
U.X.prototype={}
U.d6.prototype={
gA:function(){var s=this.cy
return s==null?this.cy=D.L():s},
O:function(a){var s=this.cy
if(s!=null)s.G(a)},
a8:function(){return this.O(null)},
b8:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gdu().n(0,s.gbU())
s.a.c.gdT().n(0,s.gbW())
s.a.c.gcI().n(0,s.gbY())
return!0},
bV:function(a){var s=this
if(!J.D(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bX:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.y)return
if(l.x){s=a.y.a4(a.d)
s=s.a6(s)
r=l.r
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a4(a.d).p(0,2).S(0,s.gac())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.p()
q=l.e
if(typeof q!=="number")return H.v(q)
r.sW(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a4(q).p(0,2).S(0,s.gac())
r=l.b
o=p.a
if(typeof o!=="number")return o.T()
n=l.e
if(typeof n!=="number")return H.v(n)
m=l.z
if(typeof m!=="number")return H.v(m)
r.sY(0,-o*n+m)
l.b.sW(0)
l.Q=a.z.a4(q).p(0,2).S(0,s.gac())}l.a8()},
bZ:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a6(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.p()
q=p.e
if(typeof q!=="number")return H.v(q)
s.sW(r*10*q)
p.a8()}},
b1:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.a9()
if(o<n){p.ch=n
s=b.y
p.b.aw(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.aT(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iX:1}
U.d7.prototype={
gA:function(){var s=this.fx
return s==null?this.fx=D.L():s},
O:function(a){var s=this.fx
if(s!=null)s.G(a)},
a8:function(){return this.O(null)},
b8:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gdu().n(0,q.gbU())
q.a.c.gdT().n(0,q.gbW())
q.a.c.gcI().n(0,q.gbY())
s=q.a.d
r=s.f
s=r==null?s.f=D.L():r
s.n(0,q.geU())
s=q.a.d
r=s.d
s=r==null?s.d=D.L():r
s.n(0,q.geW())
s=q.a.e
r=s.b
s=r==null?s.b=D.L():r
s.n(0,q.ghc())
s=q.a.e
r=s.d
s=r==null?s.d=D.L():r
s.n(0,q.gha())
s=q.a.e
r=s.c
s=r==null?s.c=D.L():r
s.n(0,q.gh8())
return!0},
aq:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.T()
s=-s}if(this.r){if(typeof r!=="number")return r.T()
r=-r}return new V.ae(s,r)},
bV:function(a){var s=this
t.d.a(a)
if(!J.D(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bX:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a4(a.d)
s=s.a6(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aq(a.y.a4(a.d).p(0,2).S(0,s.gac()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.T()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sW(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.T()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sW(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aq(r.a4(q).p(0,2).S(0,s.gac()))
r=l.c
o=p.a
if(typeof o!=="number")return o.T()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sY(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.T()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sY(0,-n*o+r)
l.b.sW(0)
l.c.sW(0)
l.dx=l.aq(a.z.a4(q).p(0,2).S(0,s.gac()))}l.a8()},
bZ:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a6(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.T()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sW(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.T()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sW(-r*10*s)
p.a8()}},
eV:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eX:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.D(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.aq(r.a4(q).p(0,2).S(0,s.gac()))
r=l.c
o=p.a
if(typeof o!=="number")return o.T()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sY(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.T()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sY(0,-n*o+r)
l.b.sW(0)
l.c.sW(0)
l.dx=l.aq(a.z.a4(q).p(0,2).S(0,s.gac()))
l.a8()},
hd:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hb:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a4(a.d)
s=s.a6(s)
r=l.Q
if(typeof r!=="number")return H.v(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.aq(a.y.a4(a.d).p(0,2).S(0,s.gac()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.T()
q=l.y
if(typeof q!=="number")return H.v(q)
r.sW(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.T()
r=l.x
if(typeof r!=="number")return H.v(r)
q.sW(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.aq(r.a4(q).p(0,2).S(0,s.gac()))
r=l.c
o=p.a
if(typeof o!=="number")return o.T()
n=l.y
if(typeof n!=="number")return H.v(n)
m=l.cy
if(typeof m!=="number")return H.v(m)
r.sY(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.T()
o=l.x
if(typeof o!=="number")return H.v(o)
r=l.db
if(typeof r!=="number")return H.v(r)
m.sY(0,-n*o+r)
l.b.sW(0)
l.c.sW(0)
l.dx=l.aq(a.z.a4(q).p(0,2).S(0,s.gac()))}l.a8()},
h9:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a6(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.T()
q=p.y
if(typeof q!=="number")return H.v(q)
s.sW(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.T()
s=p.x
if(typeof s!=="number")return H.v(s)
q.sW(-r*10*s)
p.a8()}},
b1:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.a9()
if(o<n){p.dy=n
s=b.y
p.c.aw(0,s)
p.b.aw(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.aT(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.p(0,V.aT(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iX:1}
U.d8.prototype={
gA:function(){var s=this.r
return s==null?this.r=D.L():s},
O:function(a){var s=this.r
if(s!=null)s.G(a)},
b8:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.L():r
r=p.geZ()
s.n(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.L():q).n(0,r)
return!0},
f_:function(a){var s,r,q,p,o=this
if(!J.D(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.p()
p=s+r*q
if(s!==p){o.d=p
s=new D.G("zoom",s,p)
s.b=!0
o.O(s)}},
b1:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aT(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iX:1}
M.e3.prototype={
ay:function(a){var s=this.y
if(s!=null)s.G(a)},
ez:function(){return this.ay(null)},
fb:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gap(),q=t.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bS()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.b9()
s.b=!0
this.ay(s)},
fd:function(a,b){var s,r
for(s=b.gP(b),r=this.gap();s.u();)s.gC(s).gA().B(0,r)
s=new D.ba()
s.b=!0
this.ay(s)},
se7:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gA().B(0,r.gap())
s=r.d
r.d=a
if(a!=null)a.gA().n(0,r.gap())
q=new D.G("technique",s,r.d)
q.b=!0
r.ay(q)}},
gA:function(){var s=this.y
return s==null?this.y=D.L():s},
aZ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.e3(d.d)
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
if(typeof q!=="number")return H.v(q)
m=C.d.an(n*q)
n=o.b
if(typeof p!=="number")return H.v(p)
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
g=V.aT(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.e2(g)
r=$.md
if(r==null){r=V.ll()
o=V.lp()
n=$.mB
r=V.ma(r,o,n==null?$.mB=new V.z(0,0,-1):n)
$.md=r
f=r}else f=r
s=s.b
if(s!=null){e=s.a
if(e!=null)f=e.p(0,f)}a.db.e2(f)
s=d.d
if(s!=null)s.aw(0,a)
for(s=d.e.a,s=new J.a9(s,s.length);s.u();)s.d.aw(0,a)
for(s=d.e.a,s=new J.a9(s,s.length);s.u();)s.d.aZ(a)
d.b.toString
a.cy.cB()
a.db.cB()
d.c.toString
a.e1()}}
A.dO.prototype={}
A.hK.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hH:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hB:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.ab.prototype={
gao:function(a){var s=this.b?2:0
return 0|s|0},
i:function(a){var s=this.b?2:0
return""+(0|s|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.ab))return!1
s=this.b===b.b&&!0
return s}}
A.em.prototype={
ep:function(c9,d0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8="uniform mat4 objMat;\n"
c4.z=c9
s=new P.T("")
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
c4.e=c4.d_(l,35633)
c4.f=c4.d_(c4.d,35632)
q=c4.a
o=q.createProgram()
c4.r=o
q.attachShader(o,c4.e)
q.attachShader(c4.r,c4.f)
q.linkProgram(c4.r)
if(!q.getProgramParameter(c4.r,35714)){j=q.getProgramInfoLog(c4.r)
q.deleteProgram(c4.r)
H.o(P.p("Failed to link shader: "+H.f(j)))}c4.h4()
c4.h6()
c4.Q=c4.x.h(0,"posAttr")
c4.cx=c4.x.h(0,"normAttr")
c4.ch=c4.x.h(0,"binmAttr")
c4.cy=c4.x.h(0,"txt2DAttr")
c4.db=c4.x.h(0,"txtCubeAttr")
c4.dx=c4.x.h(0,"bendAttr")
if(c9.dy)c4.id=t.I.a(c4.y.V(0,"invViewMat"))
if(r)c4.dy=t.I.a(c4.y.V(0,"objMat"))
if(p)c4.fr=t.I.a(c4.y.V(0,"viewObjMat"))
r=t.I
c4.fy=r.a(c4.y.V(0,"projViewObjMat"))
if(c9.go)c4.fx=r.a(c4.y.V(0,"viewMat"))
if(c9.x1)c4.k1=t.O.a(c4.y.V(0,"txt2DMat"))
if(c9.x2)c4.k2=r.a(c4.y.V(0,"txtCubeMat"))
if(c9.y1)c4.k3=r.a(c4.y.V(0,"colorMat"))
c4.r1=H.d([],t.hg)
q=c9.aV
if(q>0){c4.k4=c4.y.V(0,"bendMatCount")
for(i=0;i<q;++i){p=c4.r1
o=c4.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.o(P.p(c6+n+c7))
p.push(r.a(h))}}if(c9.a.b)c4.rx=t.c.a(c4.y.V(0,"emissionTxt"))
if(c9.b.b)c4.x2=t.c.a(c4.y.V(0,"ambientTxt"))
if(c9.c.b)c4.aV=t.c.a(c4.y.V(0,"diffuseTxt"))
if(c9.d.b)c4.dz=t.c.a(c4.y.V(0,"invDiffuseTxt"))
r=c9.e
q=r.b||!1
if(q){c4.dB=t.n.a(c4.y.V(0,"shininess"))
if(r.b)c4.dA=t.c.a(c4.y.V(0,"specularTxt"))}if(c9.f.b)c4.dC=t.c.a(c4.y.V(0,"bumpTxt"))
if(c9.db){c4.dD=t.o.a(c4.y.V(0,"envSampler"))
if(c9.r.b)c4.dE=t.c.a(c4.y.V(0,"reflectTxt"))
r=c9.x
q=r.b||!1
if(q){c4.dF=t.n.a(c4.y.V(0,"refraction"))
if(r.b)c4.dG=t.c.a(c4.y.V(0,"refractTxt"))}}if(c9.y.b)c4.dH=t.c.a(c4.y.V(0,"alphaTxt"))
if(c9.k1){r=c9.z
q=r.length
if(q!==0){c4.cg=new H.C(t.J)
c4.ci=new H.C(t.en)
for(p=t.r,o=t.n,n=t.d6,g=0;g<r.length;r.length===q||(0,H.q)(r),++g){f=r[g]
e=f.a
d="barLight"+H.f(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){b=c4.y
a=d+"s["+i+"].startPnt"
h=b.h(0,a)
if(h==null)H.o(P.p(c6+a+c7))
p.a(h)
b=c4.y
a=d+"s["+i+"].endPnt"
a0=b.h(0,a)
if(a0==null)H.o(P.p(c6+a+c7))
p.a(a0)
b=c4.y
a=d+"s["+i+"].color"
a1=b.h(0,a)
if(a1==null)H.o(P.p(c6+a+c7))
p.a(a1)
if(typeof e!=="number")return e.ae()
if((e&4)!==0){b=c4.y
a=d+"s["+i+"].att0"
a2=b.h(0,a)
if(a2==null)H.o(P.p(c6+a+c7))
o.a(a2)
b=c4.y
a=d+"s["+i+"].att1"
a3=b.h(0,a)
if(a3==null)H.o(P.p(c6+a+c7))
o.a(a3)
b=c4.y
a=d+"s["+i+"].att2"
a4=b.h(0,a)
if(a4==null)H.o(P.p(c6+a+c7))
o.a(a4)
a5=a4
a6=a3
a7=a2}else{a5=c5
a6=a5
a7=a6}c.push(new A.d1(h,a0,a1,a7,a6,a5))}c4.ci.l(0,e,c)
m=c4.cg
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.o(P.p(c6+a+c7))
m.l(0,e,h)}}r=c9.Q
q=r.length
if(q!==0){c4.cj=new H.C(t.J)
c4.ck=new H.C(t.af)
for(p=t.r,o=t.c,n=t.dv,g=0;g<r.length;r.length===q||(0,H.q)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.f(e)
c=H.d([],n)
for(m=f.b,i=0;i<m;++i){if(typeof e!=="number")return e.ae()
b=(e&1)!==0
if(b){a=c4.y
a8=d+"s["+i+"].objUp"
h=a.h(0,a8)
if(h==null)H.o(P.p(c6+a8+c7))
p.a(h)
a=c4.y
a8=d+"s["+i+"].objRight"
a0=a.h(0,a8)
if(a0==null)H.o(P.p(c6+a8+c7))
p.a(a0)
a=c4.y
a8=d+"s["+i+"].objDir"
a1=a.h(0,a8)
if(a1==null)H.o(P.p(c6+a8+c7))
p.a(a1)
a9=a1
b0=a0
b1=h}else{a9=c5
b0=a9
b1=b0}a=c4.y
a8=d+"s["+i+"].viewDir"
h=a.h(0,a8)
if(h==null)H.o(P.p(c6+a8+c7))
p.a(h)
a=c4.y
a8=d+"s["+i+"].color"
a0=a.h(0,a8)
if(a0==null)H.o(P.p(c6+a8+c7))
p.a(a0)
if(b){b=c4.y
a=d+"sTexture2D"+i
a1=b.h(0,a)
if(a1==null)H.o(P.p(c6+a+c7))
o.a(a1)
b2=a1}else b2=c5
c.push(new A.d2(b1,b0,a9,h,a0,b2))}c4.ck.l(0,e,c)
m=c4.cj
b=c4.y
a=d+"Count"
h=b.h(0,a)
if(h==null)H.o(P.p(c6+a+c7))
m.l(0,e,h)}}r=c9.ch
q=r.length
if(q!==0){c4.cl=new H.C(t.J)
c4.cm=new H.C(t.gr)
for(p=t.r,o=t.O,n=t.o,m=t.y,b=t.n,a=t.by,g=0;g<r.length;r.length===q||(0,H.q)(r),++g){f=r[g]
e=f.a
d="pointLight"+H.f(e)
c=H.d([],a)
for(a8=f.b,i=0;i<a8;++i){b3=c4.y
b4=d+"s["+i+"].point"
h=b3.h(0,b4)
if(h==null)H.o(P.p(c6+b4+c7))
p.a(h)
b3=c4.y
b4=d+"s["+i+"].viewPnt"
a0=b3.h(0,b4)
if(a0==null)H.o(P.p(c6+b4+c7))
p.a(a0)
b3=c4.y
b4=d+"s["+i+"].color"
a1=b3.h(0,b4)
if(a1==null)H.o(P.p(c6+b4+c7))
p.a(a1)
if(typeof e!=="number")return e.ae()
if((e&3)!==0){b3=c4.y
b4=d+"s["+i+"].invViewRotMat"
a2=b3.h(0,b4)
if(a2==null)H.o(P.p(c6+b4+c7))
o.a(a2)
b5=a2}else b5=c5
if((e&1)!==0){b3=c4.y
b4=d+"sTextureCube"+i
a2=b3.h(0,b4)
if(a2==null)H.o(P.p(c6+b4+c7))
n.a(a2)
b2=a2}else b2=c5
if((e&2)!==0){b3=c4.y
b4=d+"sShadowCube"+i
a2=b3.h(0,b4)
if(a2==null)H.o(P.p(c6+b4+c7))
n.a(a2)
b3=c4.y
b4=d+"s["+i+"].shadowAdj"
a3=b3.h(0,b4)
if(a3==null)H.o(P.p(c6+b4+c7))
m.a(a3)
b6=a2
b7=a3}else{b6=c5
b7=b6}if((e&4)!==0){b3=c4.y
b4=d+"s["+i+"].att0"
a2=b3.h(0,b4)
if(a2==null)H.o(P.p(c6+b4+c7))
b.a(a2)
b3=c4.y
b4=d+"s["+i+"].att1"
a3=b3.h(0,b4)
if(a3==null)H.o(P.p(c6+b4+c7))
b.a(a3)
b3=c4.y
b4=d+"s["+i+"].att2"
a4=b3.h(0,b4)
if(a4==null)H.o(P.p(c6+b4+c7))
b.a(a4)
a5=a4
a6=a3
a7=a2}else{a5=c5
a6=a5
a7=a6}c.push(new A.d4(h,a0,b5,a1,b2,b6,b7,a7,a6,a5))}c4.cm.l(0,e,c)
a8=c4.cl
b3=c4.y
b4=d+"Count"
h=b3.h(0,b4)
if(h==null)H.o(P.p(c6+b4+c7))
a8.l(0,e,h)}}r=c9.cx
q=r.length
if(q!==0){c4.cn=new H.C(t.J)
c4.co=new H.C(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.c,b=t.fF,g=0;g<r.length;r.length===q||(0,H.q)(r),++g){f=r[g]
e=f.a
d="spotLight"+H.f(e)
c=H.d([],b)
for(a=f.b,i=0;i<a;++i){a8=c4.y
b3=d+"s["+i+"].objPnt"
h=a8.h(0,b3)
if(h==null)H.o(P.p(c6+b3+c7))
p.a(h)
a8=c4.y
b3=d+"s["+i+"].objDir"
a0=a8.h(0,b3)
if(a0==null)H.o(P.p(c6+b3+c7))
p.a(a0)
a8=c4.y
b3=d+"s["+i+"].viewPnt"
a1=a8.h(0,b3)
if(a1==null)H.o(P.p(c6+b3+c7))
p.a(a1)
a8=c4.y
b3=d+"s["+i+"].color"
a2=a8.h(0,b3)
if(a2==null)H.o(P.p(c6+b3+c7))
p.a(a2)
if(typeof e!=="number")return e.ae()
if((e&3)!==0){a8=c4.y
b3=d+"s["+i+"].objUp"
a3=a8.h(0,b3)
if(a3==null)H.o(P.p(c6+b3+c7))
p.a(a3)
a8=c4.y
b3=d+"s["+i+"].objRight"
a4=a8.h(0,b3)
if(a4==null)H.o(P.p(c6+b3+c7))
p.a(a4)
a8=c4.y
b3=d+"s["+i+"].tuScalar"
b8=a8.h(0,b3)
if(b8==null)H.o(P.p(c6+b3+c7))
o.a(b8)
a8=c4.y
b3=d+"s["+i+"].tvScalar"
b9=a8.h(0,b3)
if(b9==null)H.o(P.p(c6+b3+c7))
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
if(a3==null)H.o(P.p(c6+b4+c7))
n.a(a3)
b7=a3}else b7=c5
if((e&8)!==0){b3=c4.y
b4=d+"s["+i+"].cutoff"
a3=b3.h(0,b4)
if(a3==null)H.o(P.p(c6+b4+c7))
o.a(a3)
b3=c4.y
b4=d+"s["+i+"].coneAngle"
a4=b3.h(0,b4)
if(a4==null)H.o(P.p(c6+b4+c7))
o.a(a4)
c2=a4
c3=a3}else{c2=c5
c3=c2}if((e&4)!==0){b3=c4.y
b4=d+"s["+i+"].att0"
a3=b3.h(0,b4)
if(a3==null)H.o(P.p(c6+b4+c7))
o.a(a3)
b3=c4.y
b4=d+"s["+i+"].att1"
a4=b3.h(0,b4)
if(a4==null)H.o(P.p(c6+b4+c7))
o.a(a4)
b3=c4.y
b4=d+"s["+i+"].att2"
b8=b3.h(0,b4)
if(b8==null)H.o(P.p(c6+b4+c7))
o.a(b8)
a5=b8
a6=a4
a7=a3}else{a5=c5
a6=a5
a7=a6}if((e&1)!==0){b3=c4.y
b4=d+"sTexture2D"+i
a3=b3.h(0,b4)
if(a3==null)H.o(P.p(c6+b4+c7))
m.a(a3)
b2=a3}else b2=c5
if(a8){a8=c4.y
b3=d+"sShadow2D"+i
a3=a8.h(0,b3)
if(a3==null)H.o(P.p(c6+b3+c7))
m.a(a3)
b6=a3}else b6=c5
c.push(new A.d5(h,a0,a1,a2,b1,b0,c1,c0,b7,c3,c2,a7,a6,a5,b2,b6))}c4.co.l(0,e,c)
a=c4.cn
a8=c4.y
b3=d+"Count"
h=a8.h(0,b3)
if(h==null)H.o(P.p(c6+b3+c7))
a.l(0,e,h)}}}},
al:function(a,b){if(b!=null&&b.d)a.eg(b)},
h3:function(a,b){}}
A.dS.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.e1.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.eJ.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.eV.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.iw.prototype={
i:function(a){return this.bb}}
A.d1.prototype={}
A.d2.prototype={}
A.d4.prototype={}
A.d5.prototype={}
A.cW.prototype={
es:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
d_:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.b(P.p("Error compiling shader '"+H.f(q)+"': "+H.f(s)))}return q},
h4:function(){var s,r,q,p=this,o=H.d([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dO(n,r.name,q))}p.x=new A.hK(o)},
h6:function(){var s,r,q,p=this,o=H.d([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.v(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hx(r.type,r.size,r.name,q))}p.y=new A.jt(o)},
aN:function(a,b,c){var s=this.a
if(a===1)return new A.fh(s,b,c)
else return A.lo(s,this.r,b,a,c)},
eP:function(a,b,c){var s=this.a
if(a===1)return new A.fl(s,b,c)
else return A.lo(s,this.r,b,a,c)},
eQ:function(a,b,c){var s=this.a
if(a===1)return new A.fm(s,b,c)
else return A.lo(s,this.r,b,a,c)},
br:function(a,b){return new P.fM(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hx:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aN(b,c,d)
case 5121:return s.aN(b,c,d)
case 5122:return s.aN(b,c,d)
case 5123:return s.aN(b,c,d)
case 5124:return s.aN(b,c,d)
case 5125:return s.aN(b,c,d)
case 5126:return new A.fg(s.a,c,d)
case 35664:return new A.jp(s.a,c,d)
case 35665:return new A.fi(s.a,c,d)
case 35666:return new A.fj(s.a,c,d)
case 35667:return new A.jq(s.a,c,d)
case 35668:return new A.jr(s.a,c,d)
case 35669:return new A.js(s.a,c,d)
case 35674:return new A.ju(s.a,c,d)
case 35675:return new A.fk(s.a,c,d)
case 35676:return new A.d3(s.a,c,d)
case 35678:return s.eP(b,c,d)
case 35680:return s.eQ(b,c,d)
case 35670:throw H.b(s.br("BOOL",c))
case 35671:throw H.b(s.br("BOOL_VEC2",c))
case 35672:throw H.b(s.br("BOOL_VEC3",c))
case 35673:throw H.b(s.br("BOOL_VEC4",c))
default:throw H.b(P.p("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.ff.prototype={}
A.jt.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
V:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.M()},
M:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.fh.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.jq.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.jr.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.js.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.jo.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.fg.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.jp.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.fi.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fj.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.ju.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.fk.prototype={
ak:function(a){var s=new Float32Array(H.cg(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.d3.prototype={
ak:function(a){var s=new Float32Array(H.cg(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.fl.prototype={
eg:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fm.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.kn.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.ct(q.b,b).ct(q.d.ct(q.c,b),c)
a.sY(0,new V.P(p.a,p.b,p.c))
a.sbC(p.D())
q=1-b
s=1-c
a.sdl(new V.bG(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)}}
F.kx.prototype={
$2:function(a,b){return V.hF(this.a,this.b,b)}}
F.kz.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hF(-1,1,c),n=this.a.$2(b,c)
if(typeof n!=="number")return H.v(n)
q=-q*n
s=p*n
a.sY(0,new V.P(q,s,o))
a.sbC(new V.z(q,s,o).D())
a.sdl(new V.bG(1-c,2+c,-1,-1))}}
F.kA.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.kB.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kL.prototype={
$3:function(a,b,c){var s=c*3.141592653589793,r=Math.sin(s),q=b*6.283185307179586
q=new V.z(Math.cos(q)*r,Math.cos(s),Math.sin(q)*r).D()
a.sY(0,new V.P(q.a,q.b,q.c))}}
F.kY.prototype={
$2:function(a,b){return 0}}
F.kZ.prototype={
$3:function(a,b,c){var s,r=this.a.a.$2(b,c)
if(typeof r!=="number")return H.v(r)
s=a.f
r=new V.z(s.a,s.b,s.c).D().p(0,this.b+r)
a.sY(0,new V.P(r.a,r.b,r.c))}}
F.l0.prototype={
$1:function(a){return new V.P(Math.cos(a),Math.sin(a),0)}}
F.kK.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.P(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)}}
F.ky.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lT(l.$1(m),k)
k=J.lT(l.$1(m+3.141592653589793/n.c),k).Z(0,j)
s=new V.z(k.a,k.b,k.c).D()
l=$.mC
if(l==null){l=new V.z(1,0,0)
$.mC=l
r=l}else r=l
q=s.aC(!J.D(s,r)?V.mE():r).D()
r=q.aC(s).D()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.p(0,l*k)
k=q.p(0,o*k)
a.sY(0,j.v(0,new V.P(l.a-k.a,l.b-k.b,l.c-k.c)))}}
F.cx.prototype={
b9:function(){var s=this
if(!s.gba()){C.b.B(s.a.a.d.b,s)
s.a.a.U()}s.c2()
s.c3()
s.fU()},
bp:function(a){this.a=a
a.d.b.push(this)},
bq:function(a){this.b=a
a.d.c.push(this)},
d8:function(a){this.c=a
a.d.d.push(this)},
c2:function(){var s=this.a
if(s!=null){C.b.B(s.d.b,this)
this.a=null}},
c3:function(){var s=this.b
if(s!=null){C.b.B(s.d.c,this)
this.b=null}},
fU:function(){var s=this.c
if(s!=null){C.b.B(s.d.d,this)
this.c=null}},
gba:function(){return this.a==null||this.b==null||this.c==null},
eH:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.d9()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.dQ())return p
return q.D()},
eJ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.Z(0,n)
q=new V.z(o.a,o.b,o.c).D()
o=r.Z(0,n)
return q.aC(new V.z(o.a,o.b,o.c).D()).D()},
cb:function(){var s,r=this
if(r.d!=null)return!0
s=r.eH()
if(s==null){s=r.eJ()
if(s==null)return!1}r.d=s
r.a.a.U()
return!0},
eG:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.d9()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.dQ())return p
return q.D()},
eI:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.F().toString
if(Math.abs(p-0)<1e-9){j=b.Z(0,e)
o=new V.z(j.a,j.b,j.c).D()
if(q.a-r.a<0)o=o.T(0)}else{n=(j-s.b)/p
j=b.Z(0,e).p(0,n).v(0,e).Z(0,h)
o=new V.z(j.a,j.b,j.c).D()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.T(0)}j=l.d
if(j!=null){m=j.D()
o=m.aC(o).D().aC(m).D()}return o},
c9:function(){var s,r=this
if(r.e!=null)return!0
s=r.eG()
if(s==null){s=r.eI()
if(s==null)return!1}r.e=s
r.a.a.U()
return!0},
aM:function(a,b){var s=b.a
if(s==null)throw H.b(P.p("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==s)throw H.b(P.p("May not replace a face's vertex with a vertex attached to a different shape."))},
ghr:function(a){var s=this
if(J.D(s.a,s.b))return!0
if(J.D(s.b,s.c))return!0
if(J.D(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
H:function(a){var s,r,q=this
if(q.gba())return a+"disposed"
s=a+C.a.aj(J.a5(q.a.e),0)+", "+C.a.aj(J.a5(q.b.e),0)+", "+C.a.aj(J.a5(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
M:function(){return this.H("")}}
F.i8.prototype={}
F.j8.prototype={
aX:function(a,b,c){var s,r=b.a
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
F.ei.prototype={
b9:function(){var s=this
if(!s.gba()){C.b.B(s.a.a.c.b,s)
s.a.a.U()}s.c2()
s.c3()},
bp:function(a){this.a=a
a.c.b.push(this)},
bq:function(a){this.b=a
a.c.c.push(this)},
c2:function(){var s=this.a
if(s!=null){C.b.B(s.c.b,this)
this.a=null}},
c3:function(){var s=this.b
if(s!=null){C.b.B(s.c.c,this)
this.b=null}},
gba:function(){return this.a==null||this.b==null},
aM:function(a,b){var s=b.a
if(s==null)throw H.b(P.p("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==s)throw H.b(P.p("May not replace a line's vertex with a vertex attached to a different shape."))},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
H:function(a){if(this.gba())return a+"disposed"
return a+C.a.aj(J.a5(this.a.e),0)+", "+C.a.aj(J.a5(this.b.e),0)},
M:function(){return this.H("")}}
F.il.prototype={}
F.jn.prototype={
aX:function(a,b,c){var s,r=b.a
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
i:function(a){return this.M()},
H:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.aj(J.a5(s.e),0)},
M:function(){return this.H("")}}
F.j_.prototype={
gA:function(){var s=this.e
return s==null?this.e=D.L():s},
aY:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.w()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.q)(e),++q){p=e[q]
f.a.n(0,p.hu())}f.a.w()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.q)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.w()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
l=n[m]
f.b.a.a.n(0,l)
m=new F.eG()
if(l.a==null)H.o(P.p("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.G(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.q)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.w()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.v()
n+=s
m=m.c
if(n>=m.length)return H.c(m,n)
i=m[n]
n=f.c.a
n.a.n(0,j)
n.a.n(0,i)
F.oe(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.q)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.w()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.c(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.v()
n+=s
m=m.c
if(n>=m.length)return H.c(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.w()
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
F.cy(j,i,g)}e=f.e
if(e!=null)e.av(0)},
am:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.am()||!1
if(!r.a.am())s=!1
q=r.e
if(q!=null)q.av(0)
return s},
hK:function(a,b){var s,r,q,p=this.a.c.length
for(s=0;s<p;++s){r=this.a.c
if(s>=r.length)return H.c(r,s)
q=r[s]
if(b.aX(0,a,q))return q}return null},
fW:function(a,b){var s,r,q,p,o,n
this.a.n(0,a)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.q)(b),++r){q=b[r]
for(;p=q.d,p.b.length+p.c.length+p.d.length>0;){p=p.h(0,0)
o=p.a
if(o==null||p.b==null||p.c==null)H.o(P.p("May not replace a face's vertex when the point has been disposed."))
if(J.D(o,q)){p.aM(q,a)
o=p.a
if(o!=null){C.b.B(o.d.b,p)
p.a=null}p.a=a
a.d.b.push(p)
n=1}else n=0
if(J.D(p.b,q)){p.aM(q,a)
o=p.b
if(o!=null){C.b.B(o.d.c,p)
p.b=null}p.b=a
a.d.c.push(p);++n}if(J.D(p.c,q)){p.aM(q,a)
o=p.c
if(o!=null){C.b.B(o.d.d,p)
p.c=null}p.c=a
a.d.d.push(p);++n}if(n>0){p=p.a.a.e
if(p!=null)p.G(null)}}for(;p=q.c,p.b.length+p.c.length>0;){p=p.h(0,0)
o=p.a
if(o==null||p.b==null)H.o(P.p("May not replace a line's vertex when the point has been disposed."))
if(J.D(o,q)){p.aM(q,a)
o=p.a
if(o!=null){C.b.B(o.c.b,p)
p.a=null}p.a=a
a.c.b.push(p)
n=1}else n=0
if(J.D(p.b,q)){p.aM(q,a)
o=p.b
if(o!=null){C.b.B(o.c.c,p)
p.b=null}p.b=a
a.c.c.push(p);++n}if(n>0){p=p.a.a.e
if(p!=null)p.G(null)}}for(;p=q.b.b,p.length>0;){p=p[0]
o=p.a
if(o==null)H.o(P.p("May not replace a point's vertex when the point has been disposed."))
if(J.D(o,q)){if(a.a==null)H.o(P.p("May not replace a point's vertex with a vertex which is not attached to a shape."))
o=p.a
if(o!=null){C.b.B(o.b.b,p)
p.a=null}p.a=a
a.b.b.push(p)
n=1}else n=0
if(n>0){p=p.a.a.e
if(p!=null)p.G(null)}}this.a.B(0,q)}},
dS:function(a,b){var s,r,q,p,o,n,m=this,l=m.e
if(l!=null)++l.d
l=m.a.c
s=H.d(l.slice(0),H.lC(l).K("x<1>"))
for(l=t.j;s.length!==0;){r=C.b.ghM(s)
C.b.cD(s,0)
if(r!=null){q=H.d([],l)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.c(s,p)
o=s[p]
if(o!=null&&a.aX(0,r,o)){q.push(o)
C.b.cD(s,p)}}if(q.length>1){n=b.aY(q)
if(n!=null){m.fW(n,q)
s.push(n)}}}}m.a.w()
m.c.bB()
m.d.bB()
m.b.ig()
m.c.cE(new F.jn())
m.d.cE(new F.j8())
l=m.e
if(l!=null)l.av(0)},
bt:function(){this.dS(new F.da(),new F.iO())},
hp:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.bs().a)!==0?1:0
if((s&$.br().a)!==0)++r
if((s&$.bq().a)!==0)++r
if((s&$.bt().a)!==0)++r
if((s&$.bN().a)!==0)++r
if((s&$.dI().a)!==0)++r
if((s&$.dJ().a)!==0)++r
if((s&$.cn().a)!==0)++r
if((s&$.bp().a)!==0)++r
q=a6.gcN(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.d(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.d(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.hm(k)
i=j.gcN(j)
if(k>=m)return H.c(n,k)
n[k]=new Z.dT(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.c(g,h)
f=g[h].hW(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.c(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.cg(o)),35044)
s.bindBuffer(a3,null)
a=new Z.dU(new Z.fv(a3,b),n,a6)
a.b=H.d([],t.aZ)
if(a2.b.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.w()
a0.push(m.e)}a1=Z.lq(s,34963,a0)
a.b.push(new Z.bW(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.w()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.c(m,k)
m=m[k].b
m.a.a.w()
a0.push(m.e)}a1=Z.lq(s,34963,a0)
a.b.push(new Z.bW(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.w()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.c(m,k)
m=m[k].b
m.a.a.w()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.c(m,k)
m=m[k].c
m.a.a.w()
a0.push(m.e)}a1=Z.lq(s,34963,a0)
a.b.push(new Z.bW(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.d([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.H(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.H(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.H(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.H(r))}return C.b.j(q,"\n")},
U:function(){var s=this.e
if(s!=null)s.G(null)}}
F.j1.prototype={
bs:function(a,b,c,d){var s,r=this.a
r.a.n(0,b)
r.a.n(0,c)
r.a.n(0,d)
s=new F.cx()
r=b.a
if(r==null)H.o(P.p(u.j))
if(r!=c.a||r!=d.a)H.o(P.p(u.i))
s.bp(b)
s.bq(c)
s.d8(d)
s.a.a.d.b.push(s)
s.a.a.U()
return s},
hi:function(a){var s,r,q,p,o,n=H.d([],t.b),m=a.length
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
n.push(F.cy(s,p,o))}}return n},
hj:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=H.d([],t.b)
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
f.push(F.cy(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cy(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cy(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.cy(j,g,k))}n=!n}p=!p}return f},
gm:function(a){return this.b.length},
cE:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.c(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.aX(0,n,l)){n.b9()
break}}}}},
bB:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=q.ghr(q)
if(r)q.b9()}},
am:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cb())q=!1
return q},
ca:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].c9())q=!1
return q},
i:function(a){return this.M()},
H:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(a))
return C.b.j(p,"\n")},
M:function(){return this.H("")}}
F.j2.prototype={
gm:function(a){return this.b.length},
cE:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.c(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.aX(0,n,l)){n.b9()
break}}}}},
bB:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=J.D(q.a,q.b)
if(r)q.b9()}},
i:function(a){return this.M()},
H:function(a){var s,r,q=H.d([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.c(r,s)
q.push(r[s].H(a+(""+s+". ")))}return C.b.j(q,"\n")},
M:function(){return this.H("")}}
F.j3.prototype={
gm:function(a){return this.b.length},
ig:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.c(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.b.B(q.b.b,r)
q=r.a.a.e
if(q!=null)q.G(null)
q=r.a
if(q!=null){C.b.B(q.b.b,r)
r.a=null}}}},
i:function(a){return this.M()},
H:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(a))
return C.b.j(p,"\n")},
M:function(){return this.H("")}}
F.ft.prototype={
ce:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.ca(s.cx,p,m,r,q,o,n,a,l)},
hu:function(){return this.ce(null)},
sY:function(a,b){var s
if(!J.D(this.f,b)){this.f=b
s=this.a
if(s!=null)s.U()}},
scz:function(a){var s
a=a==null?null:a.D()
if(!J.D(this.r,a)){this.r=a
s=this.a
if(s!=null)s.U()}},
sdn:function(a){var s
a=a==null?null:a.D()
if(!J.D(this.x,a)){this.x=a
s=this.a
if(s!=null)s.U()}},
sb0:function(a){var s
if(!J.D(this.y,a)){this.y=a
s=this.a
if(s!=null)s.U()}},
sbC:function(a){var s
if(!J.D(this.z,a)){this.z=a
s=this.a
if(s!=null)s.U()}},
saT:function(a,b){var s
if(!J.D(this.Q,b)){this.Q=b
s=this.a
if(s!=null)s.U()}},
seb:function(a,b){var s
if(this.ch!==b){this.ch=b
s=this.a
if(s!=null)s.U()}},
sdl:function(a){var s
if(!J.D(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.U()}},
hW:function(a){var s,r,q=this
if(a.q(0,$.bs())){s=q.f
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.br())){s=q.r
r=t.m
if(s==null)return H.d([0,1,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.bq())){s=q.x
r=t.m
if(s==null)return H.d([0,0,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.bt())){s=q.y
r=t.m
if(s==null)return H.d([0,0],r)
else return H.d([s.a,s.b],r)}else if(a.q(0,$.bN())){s=q.z
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.dI())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.q(0,$.dJ())){s=q.Q
if(s==null)return H.d([1,1,1,1],t.m)
else return s.cG(0)}else if(a.q(0,$.cn()))return H.d([q.ch],t.m)
else if(a.q(0,$.bp())){s=q.cx
r=t.m
if(s==null)return H.d([-1,-1,-1,-1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else return H.d([],t.m)},
cb:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d9()
r.d.I(0,new F.jU(q))
r.r=q.a.D()
q=r.a
if(q!=null){q.U()
q=r.a.e
if(q!=null)q.av(0)}return!0},
c9:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.d9()
r.d.I(0,new F.jT(q))
r.x=q.a.D()
q=r.a
if(q!=null){q.U()
q=r.a.e
if(q!=null)q.av(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
H:function(a){var s,r,q=this,p="-",o=H.d([],t.i)
o.push(C.a.aj(J.a5(q.e),0))
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
M:function(){return this.H("")}}
F.jU.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.jT.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.jK.prototype={
w:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.c(s,p)
s[p].e=q;++q}this.b=!1}},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.p("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.U()
return!0},
hk:function(a,b,c,d,e,f){var s=F.ca(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gm:function(a){return this.c.length},
B:function(a,b){var s,r
if(b==null)return!1
s=this.a
if(b.a!==s)return!1
if(b.b.b.length===0){r=b.c
if(r.b.length===0&&r.c.length===0){r=b.d
r=r.b.length===0&&r.c.length===0&&r.d.length===0}else r=!1}else r=!1
if(!r)throw H.b(P.p("May not remove a vertex without first making it empty."))
b.a=null
C.b.B(this.c,b)
s.U()
return this.b=!0},
am:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cb()
return!0},
ca:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].c9()
return!0},
hq:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r.D()
if(!J.D(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.G(null)}}}}return!0},
i:function(a){return this.M()},
H:function(a){var s,r,q,p
this.w()
s=H.d([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].H(a))
return C.b.j(s,"\n")},
M:function(){return this.H("")}}
F.jL.prototype={
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
I:function(a,b){var s=this
C.b.I(s.b,b)
C.b.I(s.c,new F.jM(s,b))
C.b.I(s.d,new F.jN(s,b))},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
F.jM.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.jN.prototype={
$1:function(a){var s=this.a
if(!J.D(a.a,s)&&!J.D(a.b,s))this.b.$1(a)}}
F.jP.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.c(r,s)
return r[s]}else{if(b<0)return H.c(r,b)
return r[b]}},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
F.jQ.prototype={}
F.da.prototype={
aX:function(a,b,c){return J.D(b.f,c.f)}}
F.jR.prototype={}
F.jO.prototype={
aY:function(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null
for(s=a7.length,r=a6,q=r,p=q,o=p,n=o,m=n,l=0,k=0,j=0,i=0,h=0,g=0,f=0;f<s;++f){e=a7[f]
d=e.f
if(d!=null){m=m==null?d:new V.P(m.a+d.a,m.b+d.b,m.c+d.c);++l}c=e.r
if(c!=null)n=n==null?c:new V.z(n.a+c.a,n.b+c.b,n.c+c.c)
b=e.x
if(b!=null)o=o==null?b:new V.z(o.a+b.a,o.b+b.b,o.c+b.c)
a=e.y
if(a!=null){q=q==null?a:new V.a1(q.a+a.a,q.b+a.b);++j}a0=e.z
if(a0!=null){r=r==null?a0:new V.z(r.a+a0.a,r.b+a0.b,r.c+a0.c);++i}a1=e.Q
if(a1!=null){a2=a1.a
a3=a1.b
a4=a1.c
a1=a1.d
if(p==null){a1=[a2,a3,a4,a1]
p=new V.bi(a1[0],a1[1],a1[2],a1[3])}else{a1=[a2,a3,a4,a1]
a2=a1[0]
a3=a1[1]
a4=a1[2]
a1=a1[3]
p=new V.bi(p.a+a2,p.b+a3,p.c+a4,p.d+a1)}++k}a1=e.ch
if(typeof a1!=="number")return H.v(a1)
g+=a1;++h}a5=F.ca(a6,a6,a6,a6,a6,a6,a6,a6,0)
if(l<=0||m==null)a5.sY(0,a6)
else a5.sY(0,m.S(0,l))
if(n==null)a5.scz(a6)
else a5.scz(n.D())
if(o==null)a5.sdn(a6)
else a5.sdn(o.D())
if(j<=0||q==null)a5.sb0(a6)
else a5.sb0(q.S(0,j))
if(i<=0||r==null)a5.sbC(a6)
else a5.sbC(r.S(0,i))
if(k<=0||p==null)a5.saT(0,a6)
else{s=p.S(0,k)
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
a5.saT(0,new V.ap(a1,a2,a3,s))}if(h<=0)a5.seb(0,0)
else a5.seb(0,g/h)
return a5}}
F.iO.prototype={
aY:function(a){var s,r,q,p=V.d9()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.z(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.D()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)a[r].scz(p)
return null}}
F.jS.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].H(""))
return C.b.j(p,"\n")}}
O.el.prototype={
gA:function(){var s=this.fr
return s==null?this.fr=D.L():s},
a_:function(a){var s=this.fr
if(s!=null)s.G(a)},
bK:function(){return this.a_(null)},
d6:function(a){this.a=null
this.a_(a)},
fZ:function(){return this.d6(null)},
f5:function(a,b){var s=new D.b9()
s.b=!0
this.a_(s)},
f7:function(a,b){var s=new D.ba()
s.b=!0
this.a_(s)},
cY:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.C(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
o=p.gat()
n=d.h(0,p.gat())
d.l(0,o,n==null?1:n)}m=H.d([],t.am)
d.I(0,new O.iA(f,m))
C.b.b3(m,new O.iB())
l=new H.C(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){o=l.h(0,0)
l.l(0,0,o==null?1:o)}k=H.d([],t.M)
l.I(0,new O.iC(f,k))
C.b.b3(k,new O.iD())
j=new H.C(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
o=p.gat()
n=j.h(0,p.gat())
j.l(0,o,n==null?1:n)}i=H.d([],t.d1)
j.I(0,new O.iE(f,i))
C.b.b3(i,new O.iF())
h=new H.C(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.q)(e),++q){p=e[q]
r=p.gat()
o=h.h(0,p.gat())
h.l(0,r,o==null?1:o)}g=H.d([],t.cz)
h.I(0,new O.iG(f,g))
C.b.b3(g,new O.iH())
e=C.c.a3(f.e.a.length+3,4)
f.dy.toString
return A.ol(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
af:function(a,b){if(b!=null)if(!C.b.F(a,b)){b.a=a.length
a.push(b)}},
aw:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.a9(s,s.length);s.u();){r=s.d
r.toString
q=$.jJ
if(q==null)q=$.jJ=new V.z(0,0,1)
r.a=q
p=$.jI
r.d=p==null?$.jI=new V.z(0,1,0):p
p=$.jH
r.e=p==null?$.jH=new V.z(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bE(q).D()
r.d=o.bE(r.d).D()
r.e=o.bE(r.e).D()}}}},
ii:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cY()
s=b6.fr.h(0,b5.bb)
if(s==null){s=A.ok(b5,b6.a)
r=s.b
if(r.length===0)H.o(P.p("May not cache a shader with no name."))
if(b6.fr.cc(0,r))H.o(P.p('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.l(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.dw
b5=b7.e
if(!(b5 instanceof Z.dU))b5=b7.e=null
if(b5==null||!b5.d.q(0,p)){b5=q.k4
if(b5)b7.d.am()
o=q.r1
if(o){n=b7.d
m=n.e
if(m!=null)++m.d
n.d.ca()
n.a.ca()
n=n.e
if(n!=null)n.av(0)}n=q.rx
if(n){m=b7.d
l=m.e
if(l!=null)++l.d
m.a.hq()
m=m.e
if(m!=null)m.av(0)}k=b7.d.hp(new Z.jV(b6.a),p)
k.aW($.bs()).e=b4.a.Q.c
if(b5)k.aW($.br()).e=b4.a.cx.c
if(o)k.aW($.bq()).e=b4.a.ch.c
if(q.r2)k.aW($.bt()).e=b4.a.cy.c
if(n)k.aW($.bN()).e=b4.a.db.c
if(q.ry)k.aW($.bp()).e=b4.a.dx.c
b7.e=k}j=H.d([],t.bw)
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.hH()
if(q.fr){b5=b4.a
n=b6.dx
n=n.ga1(n)
b5=b5.dy
b5.toString
b5.ak(n.ad(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.ga1(n)
m=b6.dx
m=b6.cx=n.p(0,m.ga1(m))
n=m}b5=b5.fr
b5.toString
b5.ak(n.ad(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.gic()
m=b6.dx
m=b6.ch=n.p(0,m.ga1(m))
n=m}b5=b5.fy
b5.toString
b5.ak(n.ad(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.ga1(n)
b5=b5.fx
b5.toString
b5.ak(n.ad(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.ak(C.j.ad(n,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.ak(C.j.ad(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.ak(C.j.ad(n,!0))}if(q.aV>0){i=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,i)
for(h=0;h<i;++h){b5=b4.a
n=b4.e.a
if(h>=n.length)return H.c(n,h)
n=n[h]
b5=b5.r1
if(h>=b5.length)return H.c(b5,h)
b5=b5[h]
g=new Float32Array(H.cg(n.ad(0,!0)))
b5.a.uniformMatrix4fv(b5.d,!1,g)}}if(q.a.b){b4.af(j,b4.f.d)
b5=b4.a
n=b4.f.d
b5.al(b5.rx,n)}if(q.k1){if(q.b.b){b4.af(j,b4.r.d)
b5=b4.a
n=b4.r.d
b5.al(b5.x2,n)}if(q.c.b){b4.af(j,b4.x.d)
b5=b4.a
n=b4.x.d
b5.al(b5.aV,n)}if(q.d.b){b4.af(j,b4.y.d)
b5=b4.a
n=b4.y.d
b5.al(b5.dz,n)}b5=q.e
n=b5.b||!1
if(n){n=b4.a
m=b4.z.ch
n=n.dB
n.a.uniform1f(n.d,m)}if(b5.b){b4.af(j,b4.z.d)
b5=b4.a
n=b4.z.d
b5.al(b5.dA,n)}b5=q.z
if(b5.length>0){f=new H.C(t.a)
for(n=b4.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.q)(n),++e){d=n[e]
c=d.gat()
b=f.h(0,c)
if(b==null)b=0
f.l(0,c,b+1)
a=J.co(b4.a.ci.h(0,c),b)
l=d.giy()
a0=$.aV
l=l.bi(a0==null?$.aV=new V.P(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.giD()
a0=$.aV
l=l.bi(a0==null?$.aV=new V.P(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaT(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.gdv()){l=d.gdi()
a0=a.e
a0.a.uniform1f(a0.d,l)
l=d.gdj()
a0=a.f
a0.a.uniform1f(a0.d,l)
l=d.gdk()
a0=a.r
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.q)(b5),++e){m=b5[e].a
i=f.h(0,m)
if(i==null)i=0
m=b4.a.cg.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.Q
if(b5.length>0){n=b6.db
a1=n.ga1(n)
a2=new H.C(t.a)
for(n=b4.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.q)(n),++e){d=n[e]
b=a2.h(0,0)
if(b==null)b=0
a2.l(0,0,b+1)
a=J.co(b4.a.ck.h(0,0),b)
l=a1.bE(d.a).D()
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
m=b4.a.cj.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.ch
if(b5.length>0){n=b6.db
a1=n.ga1(n)
a5=new H.C(t.a)
for(n=b4.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.q)(n),++e){d=n[e]
c=d.gat()
b=a5.h(0,c)
if(b==null)b=0
a5.l(0,c,b+1)
a=J.co(b4.a.cm.h(0,c),b)
a6=a1.p(0,d.ga1(d))
l=d.ga1(d)
a0=$.aV
l=l.bi(a0==null?$.aV=new V.P(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=$.aV
l=a6.bi(l==null?$.aV=new V.P(0,0,0):l)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaT(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gaH()
l=a6.dP(0)
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
g=new Float32Array(H.cg(new V.en(a0,a3,a4,a7,a8,a9,b0,b1,l).ad(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,g)
d.gaH()
l=d.gaH()
if(!C.b.F(j,l)){l.a=j.length
j.push(l)}l=d.gaH()
a0=l.gbd(l)
if(a0){a0=a.f
a0.toString
a3=l.gbd(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.ghS(l))}d.gb2()
l=d.geh()
a0=a.x
a0.toString
a3=l.ghD(l)
a4=l.ghE(l)
a7=l.ghF()
l=l.ghC()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gb2()
if(!C.b.F(j,l)){l.a=j.length
j.push(l)}l=d.gb2()
a0=l.gbd(l)
if(a0){a0=a.r
a0.toString
a3=l.gbd(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.ghS(l))}if(d.gdv()){l=d.gdi()
a0=a.y
a0.a.uniform1f(a0.d,l)
l=d.gdj()
a0=a.z
a0.a.uniform1f(a0.d,l)
l=d.gdk()
a0=a.Q
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.q)(b5),++e){m=b5[e].a
i=a5.h(0,m)
if(i==null)i=0
m=b4.a.cl.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.cx
if(b5.length>0){n=b6.db
a1=n.ga1(n)
b3=new H.C(t.a)
for(n=b4.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.q)(n),++e){d=n[e]
c=d.gat()
b=b3.h(0,c)
if(b==null)b=0
b3.l(0,c,b+1)
a=J.co(b4.a.co.h(0,c),b)
l=d.gib(d)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.giB(d).D()
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=a1.bi(d.gib(d))
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaT(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gaH()
l=d.gcI()
a0=a.f
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gcF(d)
a0=a.r
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.giR()
a0=a.x
a0.a.uniform1f(a0.d,l)
l=d.giS()
a0=a.y
a0.a.uniform1f(a0.d,l)
d.gaH()
l=d.gaH()
if(!C.b.F(j,l)){l.a=j.length
j.push(l)}l=d.gaH()
a0=l.gbd(l)
if(a0){a0=a.dx
a3=l.d
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}d.gb2()
l=d.geh()
a0=a.z
a0.toString
a3=l.ghD(l)
a4=l.ghE(l)
a7=l.ghF()
l=l.ghC()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gb2()
if(!C.b.F(j,l)){l.a=j.length
j.push(l)}l=d.gb2()
a0=l.gbd(l)
if(a0){a0=a.dy
a3=l.d
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}if(d.giC()){l=d.giA()
a0=a.Q
a0.a.uniform1f(a0.d,l)
l=d.giz()
a0=a.ch
a0.a.uniform1f(a0.d,l)}if(d.gdv()){l=d.gdi()
a0=a.cx
a0.a.uniform1f(a0.d,l)
l=d.gdj()
a0=a.cy
a0.a.uniform1f(a0.d,l)
l=d.gdk()
a0=a.db
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.q)(b5),++e){m=b5[e].a
i=b3.h(0,m)
if(i==null)i=0
m=b4.a.cn.h(0,m)
m.a.uniform1i(m.d,i)}}}if(q.f.b){b4.af(j,b4.Q.d)
b5=b4.a
n=b4.Q.d
b5.al(b5.dC,n)}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.ga1(n).dP(0)}b5=b5.id
b5.toString
b5.ak(n.ad(0,!0))}if(q.db){b4.af(j,b4.ch)
b5=b4.a
n=b4.ch
b5.h3(b5.dD,n)
if(q.r.b){b4.af(j,b4.cx.d)
b5=b4.a
n=b4.cx.d
b5.al(b5.dE,n)}b5=q.x
n=b5.b||!1
if(n){n=b4.a
m=b4.cy.ch
n=n.dF
n.a.uniform1f(n.d,m)}if(b5.b){b4.af(j,b4.cy.d)
b5=b4.a
n=b4.cy.d
b5.al(b5.dG,n)}}b5=q.y
n=b5.b||!1
if(n){if(b5.b){b4.af(j,b4.db.d)
n=b4.a
m=b4.db.d
n.al(n.dH,m)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h){n=j[h]
if(!n.c&&n.d){n.c=!0
o.activeTexture(33984+n.a)
o.bindTexture(3553,n.b)}}n=b7.e
n.c8(b6)
n.aZ(b6)
n.iu(b6)
b5=b5.b||!1
if(b5)o.disable(3042)
for(h=0;h<j.length;++h){b5=j[h]
if(b5.c){b5.c=!1
o.activeTexture(33984+b5.a)
o.bindTexture(3553,null)}}b5=b4.a
b5.toString
o.useProgram(null)
b5.x.hB()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cY().bb}}
O.iA.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.dS(a,C.c.a3(b+3,4)*4))}}
O.iB.prototype={
$2:function(a,b){return J.dK(a.a,b.a)}}
O.iC.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.e1(a,C.c.a3(b+3,4)*4))}}
O.iD.prototype={
$2:function(a,b){return J.dK(a.a,b.a)}}
O.iE.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.eJ(a,C.c.a3(b+3,4)*4))}}
O.iF.prototype={
$2:function(a,b){return J.dK(a.a,b.a)}}
O.iG.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.eV(a,C.c.a3(b+3,4)*4))}}
O.iH.prototype={
$2:function(a,b){return J.dK(a.a,b.a)}}
O.iu.prototype={
aA:function(){var s,r=this
r.cP()
s=r.f
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.G(r.b,s,1)
s.b=!0
r.a.a_(s)}}}
O.cO.prototype={
a_:function(a){return this.a.a_(a)},
bK:function(){return this.a_(null)},
aA:function(){},
h2:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
s=s.b||!1
if(s){s=a.b||!1
r=!s}else r=!0
q.c=a
if(r)q.aA()
s=q.a
s.a=null
s.a_(null)}},
sb0:function(a){var s,r,q=this
if(!q.c.b)q.h2(new A.ab(!1,!0,!1))
s=q.d
if(s!==a){if(s!=null)s.gA().B(0,q.gbm())
r=q.d
q.d=a
a.gA().n(0,q.gbm())
s=new D.G(q.b+".texture2D",r,q.d)
s.b=!0
q.a.a_(s)}}}
O.iv.prototype={}
O.aS.prototype={
aA:function(){var s,r,q=this
q.cP()
s=new V.aa(1,1,1)
if(!q.f.q(0,s)){r=q.f
q.f=s
s=new D.G(q.b+".color",r,s)
s.b=!0
q.a.a_(s)}}}
O.ix.prototype={}
O.iy.prototype={
aA:function(){var s,r=this
r.cQ()
s=r.ch
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.G(r.b+".refraction",s,1)
s.b=!0
r.a.a_(s)}}}
O.iz.prototype={
aA:function(){var s,r=this
r.cQ()
s=r.ch
$.F().toString
if(!(Math.abs(s-100)<1e-9)){r.ch=100
s=new D.G(r.b+".shininess",s,100)
s.b=!0
r.a.a_(s)}}}
O.f5.prototype={}
T.f8.prototype={}
T.jb.prototype={}
T.jc.prototype={
gA:function(){var s=this.y
return s==null?this.y=D.L():s}}
T.jd.prototype={
dR:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.jc()
r.a=0
r.b=o
r.d=r.c=!1
W.a0(s,"load",new T.je(this,r,s,!1,o,!1,!1),!1)
return r},
h_:function(a,b,c){var s,r,q,p
b=V.lO(b)
s=V.lO(a.width)
r=V.lO(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.l7()
q.width=s
q.height=r
p=C.i.ed(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.qo(p.getImageData(0,0,q.width,q.height))}}}
T.je.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.h_(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,q.f?1:0)
C.a3.ip(o,p,0,6408,6408,5121,r)
if(q.r)o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.hG()}++s.e}}
X.l6.prototype={}
X.ic.prototype={
gA:function(){var s=this.x
return s==null?this.x=D.L():s}}
X.eC.prototype={
gA:function(){var s=this.f
return s==null?this.f=D.L():s},
aL:function(a){var s=this.f
if(s!=null)s.G(a)},
eD:function(){return this.aL(null)},
sbe:function(a){var s,r,q=this
if(!J.D(q.b,a)){s=q.b
if(s!=null)s.gA().B(0,q.gcU())
r=q.b
q.b=a
if(a!=null)a.gA().n(0,q.gcU())
s=new D.G("mover",r,q.b)
s.b=!0
q.aL(s)}}}
X.ja.prototype={}
V.b5.prototype={
bl:function(a){this.b=new P.ie(C.T)
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
m=k.b.eO(o,0,o.length)
l=m==null?o:m
C.R.ef(n,H.lQ(l," ","&nbsp;"))
l=n.style
l.color=b
C.b.gau(k.d).push(n)}},
e_:function(a,b){var s,r,q,p=this
p.d=H.d([],t.u)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bu()
r.toString
q=new H.r(s)
q=new P.bJ(r.cH(new H.bc(q,q.gm(q))).a())
for(;q.u();)p.bA(q.gC(q))}}
V.kX.prototype={
$1:function(a){var s=C.d.e8(this.a.ghR(),2)
if(s!=="0.00")P.lP(s+" fps")}}
V.e_.prototype={
bA:function(a){var s=this
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
bu:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()\\-+*%!&|=.,?:;",i="OpenDoubleStr",h="CloseDoubleStr",g="EscDoubleStr",f="OpenSingleStr",e="CloseSingleStr",d="EscSingleStr",c="Slash",b="Comment",a="EndComment",a0="MLComment",a1="MLCStar",a2="Whitespace",a3=L.ji()
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
a3.k(0,i).j(0,i).a.push(new K.b3())
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
a3.k(0,f).j(0,f).a.push(new K.b3())
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
r=new K.ac()
q=t.B
r.a=H.d([],q)
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
r=new K.ac()
r.a=H.d([],q)
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
r.aG(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aG(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aG(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a3}}
V.e7.prototype={
bA:function(a){var s=this
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
bu:function(){var s,r,q,p="Start",o="Id",n="Int",m="FloatDot",l="Float",k="Sym",j="<>{}()[]\\-+*%!&|=.,?:;",i="Slash",h="Comment",g="EndComment",f="Preprocess",e="EndPreprocess",d="Whitespace",c=L.ji()
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
c.k(0,i).j(0,k).a.push(new K.b3())
r=c.k(0,h).j(0,g)
s=K.u(new H.r("\n"))
r.a.push(s)
s=c.k(0,h).j(0,h)
r=new K.ac()
q=t.B
r.a=H.d([],q)
s.a.push(r)
s=K.u(new H.r("\n"))
r.a.push(s)
s=c.k(0,p).j(0,f)
r=K.u(new H.r("#"))
s.a.push(r)
r=c.k(0,f).j(0,f)
s=new K.ac()
s.a=H.d([],q)
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
s.aG(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],r))
s.aG(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],r))
s.aG(0,"Builtin",H.d(["gl_FragColor","gl_Position"],r))
return c}}
V.e9.prototype={
bA:function(a){var s=this,r="#111"
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
bu:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.ji()
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
j.k(0,m).j(0,m).a.push(new K.b3())
j.k(0,q).j(0,k).a.push(new K.b3())
s=j.k(0,k).j(0,k)
r=new K.ac()
r.a=H.d([],t.B)
s.a.push(r)
s=K.u(new H.r('</\\-!>=_"'))
r.a.push(s)
s=K.Q("a","z")
r.a.push(s)
s=K.Q("A","Z")
r.a.push(s)
s=j.k(0,n)
s.d=s.a.N("Symbol")
s=j.k(0,l)
s.d=s.a.N("String")
s=j.k(0,p)
r=s.a.N(p)
s.d=r
r.aG(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],t.i))
r=j.k(0,o)
r.d=r.a.N(o)
r=j.k(0,k)
r.d=r.a.N(k)
return j}}
V.eE.prototype={
e_:function(a,b){this.d=H.d([],t.u)
this.L(C.b.j(b,"\n"),"#111")},
bA:function(a){},
bu:function(){return null}}
V.iR.prototype={
bs:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.mw().gcC().h(0,H.f(s))
if(r==null)if(d){c.$0()
k.de(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.l4(k.c).n(0,o)
m=W.o7("radio")
m.checked=q
m.name=s
W.a0(m,"change",new V.iS(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.l4(k.c).n(0,p.createElement("br"))},
ar:function(a,b,c){return this.bs(a,b,c,!1)},
de:function(a){var s,r,q=P.mw(),p=t.X,o=P.oh(q.gcC(),p,p)
o.l(0,this.a,a)
s=q.e4(0,o)
p=window.history
r=s.gc6()
p.toString
p.replaceState(new P.ka([],[]).bF(""),"",r)}}
V.iS.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.de(s.d)}}}
V.j4.prototype={
eu:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.a0(o,"scroll",new V.j6(m),!1)},
dg:function(a){var s,r,q,p,o,n,m,l
this.h5()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.hV(a)
q.toString
p=new H.r(p)
p=new P.bJ(q.cH(new H.bc(p,p.gm(p))).a())
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
if(H.nl(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.c(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.ki(C.x,q,C.e,!1)
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
ec:function(a){var s,r,q,p=new V.e_("dart")
p.bl("dart")
s=new V.e7("glsl")
s.bl("glsl")
r=new V.e9("html")
r.bl("html")
q=C.b.hN(H.d([p,s,r],t.b7),new V.j7(a))
if(q!=null)return q
p=new V.eE("plain")
p.bl("plain")
return p},
df:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.d([],t.V)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.dH(q).a5(q,"+")){b2[r]=C.a.ab(q,1)
a8.push(1)
s=!0}else if(C.a.a5(q,"-")){b2[r]=C.a.ab(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.ec(b0)
p.e_(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.ki(C.x,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lV()
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.q)(q),++a1)a0.appendChild(q[a1])
d.appendChild(c)
d.appendChild(b)
d.appendChild(a0)
m.appendChild(d)}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.q)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.b.gP(q);a4.u();)b.appendChild(a4.gC(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
hg:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
h5:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=L.ji()
s.d=s.k(0,o)
r=s.k(0,o).j(0,n)
q=K.u(new H.r("*"))
r.a.push(q)
r.c=!0
r=s.k(0,n).j(0,n)
q=new K.ac()
p=t.B
q.a=H.d([],p)
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
q=new K.ac()
q.a=H.d([],p)
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
q=new K.ac()
q.a=H.d([],p)
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
r=new K.ac()
r.a=H.d([],p)
q.a.push(r)
q=K.u(new H.r("|]"))
r.a.push(q)
q=s.k(0,i).j(0,h)
r=K.u(new H.r("]"))
q.a.push(r)
q.c=!0
q=s.k(0,i).j(0,i)
r=new K.ac()
r.a=H.d([],p)
q.a.push(r)
q=K.u(new H.r("|]"))
r.a.push(q)
s.k(0,o).j(0,g).a.push(new K.b3())
q=s.k(0,g).j(0,g)
r=new K.ac()
r.a=H.d([],p)
q.a.push(r)
q=K.u(new H.r("*_`["))
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
V.j6.prototype={
$1:function(a){P.ms(C.n,new V.j5(this.a))}}
V.j5.prototype={
$0:function(){var s=C.d.an(document.documentElement.scrollTop),r=this.a.style,q=H.f(-0.01*s)+"px"
r.top=q}}
V.j7.prototype={
$1:function(a){return a.a===this.a}}
M.kM.prototype={
$0:function(){this.a.saa(0,F.lJ(1,null,null,1))}}
M.kN.prototype={
$0:function(){this.a.saa(0,F.lJ(8,null,null,8))}}
M.kO.prototype={
$0:function(){this.a.saa(0,F.n8(!0,40,1))}}
M.kP.prototype={
$0:function(){this.a.saa(0,F.n8(!1,40,0))}}
M.kQ.prototype={
$0:function(){this.a.saa(0,F.qD(10,20))}}
M.kR.prototype={
$0:function(){var s=F.j0(),r=Math.sqrt(5)/2+0.5,q=F.a8(s,new V.z(-1,r,0)),p=F.a8(s,new V.z(1,r,0)),o=-r,n=F.a8(s,new V.z(-1,o,0)),m=F.a8(s,new V.z(1,o,0)),l=F.a8(s,new V.z(0,-1,o)),k=F.a8(s,new V.z(0,1,o)),j=F.a8(s,new V.z(0,-1,r)),i=F.a8(s,new V.z(0,1,r)),h=F.a8(s,new V.z(r,0,1)),g=F.a8(s,new V.z(r,0,-1)),f=F.a8(s,new V.z(o,0,1)),e=F.a8(s,new V.z(o,0,-1))
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
s.dS(new F.da(),new F.jO())
this.a.saa(0,s)}}
M.kS.prototype={
$0:function(){this.a.saa(0,F.nk(6,6))}}
M.kT.prototype={
$0:function(){this.a.saa(0,F.qL())}}
M.kU.prototype={
$0:function(){this.a.saa(0,F.qC())}}
M.kV.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a,p=t.s
s.df("Vertex Shader","glsl",0,H.d((q==null?null:q.c).split("\n"),p))
r=r.a
s.df("Fragment Shader","glsl",0,H.d((r==null?null:r.d).split("\n"),p))}};(function aliases(){var s=J.a.prototype
s.ek=s.i
s=J.bb.prototype
s.em=s.i
s=P.h.prototype
s.el=s.bG
s=W.E.prototype
s.bI=s.ah
s=W.dm.prototype
s.en=s.as
s=K.e8.prototype
s.ej=s.aE
s.cO=s.i
s=O.cO.prototype
s.cP=s.aA
s=O.aS.prototype
s.cQ=s.aA})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pC","oc",21)
r(P,"qh","oO",8)
r(P,"qi","oP",8)
r(P,"qj","oQ",8)
q(P,"n7","qc",9)
r(W,"rT","i1",22)
p(W,"qv",4,null,["$4"],["oR"],14,0)
p(W,"qw",4,null,["$4"],["oS"],14,0)
var j
o(j=E.bA.prototype,"gdY",0,0,null,["$1","$0"],["dZ","i3"],0,0)
o(j,"gdW",0,0,null,["$1","$0"],["dX","i2"],0,0)
o(j,"gdU",0,0,null,["$1","$0"],["dV","i_"],0,0)
n(j,"ghY","hZ",4)
n(j,"gi0","i1",4)
o(j=E.f9.prototype,"gcR",0,0,null,["$1","$0"],["cT","cS"],0,0)
m(j,"gik","e5",9)
l(j=X.fs.prototype,"gfk","fl",5)
l(j,"gf8","f9",5)
l(j,"gfe","ff",2)
l(j,"gfo","fp",10)
l(j,"gfm","fn",10)
l(j,"gft","fu",2)
l(j,"gfz","fA",2)
l(j,"gfi","fj",2)
l(j,"gfv","fw",2)
l(j,"gfg","fh",2)
l(j,"gfB","fC",19)
l(j,"gfD","fE",5)
l(j,"gfQ","fR",6)
l(j,"gfM","fN",6)
l(j,"gfO","fP",6)
o(D.by.prototype,"gex",0,0,null,["$1","$0"],["ax","ey"],0,0)
o(j=D.cF.prototype,"gd4",0,0,null,["$1","$0"],["d5","fq"],0,0)
l(j,"gfG","fH",20)
n(j,"gf2","f3",11)
n(j,"gfK","fL",11)
k(V.ae.prototype,"gm","bc",7)
k(V.z.prototype,"gm","bc",7)
k(V.bi.prototype,"gm","bc",7)
o(j=U.bU.prototype,"gaO",0,0,null,["$1","$0"],["O","a8"],0,0)
n(j,"gf0","f1",12)
n(j,"gfI","fJ",12)
o(j=U.d6.prototype,"gaO",0,0,null,["$1","$0"],["O","a8"],0,0)
l(j,"gbU","bV",1)
l(j,"gbW","bX",1)
l(j,"gbY","bZ",1)
o(j=U.d7.prototype,"gaO",0,0,null,["$1","$0"],["O","a8"],0,0)
l(j,"gbU","bV",1)
l(j,"gbW","bX",1)
l(j,"gbY","bZ",1)
l(j,"geU","eV",1)
l(j,"geW","eX",1)
l(j,"ghc","hd",1)
l(j,"gha","hb",1)
l(j,"gh8","h9",1)
l(U.d8.prototype,"geZ","f_",1)
o(j=M.e3.prototype,"gap",0,0,null,["$1","$0"],["ay","ez"],0,0)
n(j,"gfa","fb",4)
n(j,"gfc","fd",4)
o(j=O.el.prototype,"gbm",0,0,null,["$1","$0"],["a_","bK"],0,0)
o(j,"gfY",0,0,null,["$1","$0"],["d6","fZ"],0,0)
n(j,"gf4","f5",13)
n(j,"gf6","f7",13)
o(O.cO.prototype,"gbm",0,0,null,["$1","$0"],["a_","bK"],0,0)
o(X.eC.prototype,"gcU",0,0,null,["$1","$0"],["aL","eD"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.N,null)
q(P.N,[H.lf,J.a,J.a9,P.K,P.df,P.h,H.bc,P.eb,H.cz,H.fp,H.cq,H.jl,H.iP,H.hc,H.bx,P.W,H.im,H.ej,H.ed,H.au,H.fP,P.dt,P.ce,P.bJ,P.fx,P.cY,P.f_,P.d_,P.km,P.dl,P.k2,P.de,P.i,P.hr,P.cM,P.dW,P.ig,P.kk,P.kj,P.aA,P.ak,P.S,P.bz,P.eB,P.cX,P.fM,P.ib,P.aC,P.n,P.H,P.as,P.y,P.T,P.bK,P.jw,P.h6,W.hT,W.lb,W.lr,W.cd,W.M,W.cU,W.dm,W.hh,W.cA,W.an,W.k6,W.hs,P.k9,P.dv,P.h4,P.bh,K.b3,K.e8,K.it,K.iT,K.iZ,L.eX,L.fa,L.fb,L.jh,O.aj,O.cP,E.hP,E.bA,E.bR,E.c2,E.fJ,E.iU,E.f9,Z.fv,Z.jV,Z.dU,Z.bW,Z.bj,D.hQ,D.bS,D.U,X.dV,X.ef,X.ik,X.ir,X.ar,X.iL,X.jj,X.fs,D.dR,D.by,D.V,D.eH,D.eU,V.aa,V.ap,V.i4,V.en,V.bd,V.a1,V.P,V.bG,V.eM,V.ae,V.z,V.bi,U.d6,U.d7,U.d8,M.e3,A.dO,A.hK,A.ab,A.dS,A.e1,A.eJ,A.eV,A.iw,A.d1,A.d2,A.d4,A.d5,A.ff,A.jt,F.cx,F.i8,F.ei,F.il,F.eG,F.j_,F.j1,F.j2,F.j3,F.ft,F.jK,F.jL,F.jP,F.jQ,F.jR,F.jS,O.f5,O.cO,O.ix,T.jd,X.l6,X.ja,X.eC,V.b5,V.iR,V.j4])
q(J.a,[J.ec,J.cE,J.bb,J.x,J.bD,J.aP,H.cQ,H.Y,W.e,W.hI,W.bu,W.aO,W.J,W.fC,W.aq,W.hW,W.hX,W.fE,W.cu,W.fG,W.hY,W.j,W.fN,W.aD,W.id,W.fR,W.bC,W.iq,W.iI,W.fV,W.fW,W.aF,W.fX,W.fZ,W.aG,W.h2,W.h5,W.aH,W.h7,W.aI,W.hd,W.aw,W.hj,W.jg,W.aJ,W.hl,W.jk,W.jB,W.ht,W.hv,W.hx,W.hz,W.hB,P.aQ,P.fT,P.aU,P.h0,P.iQ,P.he,P.aW,P.hn,P.hL,P.fz,P.eN,P.ha])
q(J.bb,[J.eD,J.bI,J.aE])
r(J.ii,J.x)
q(J.bD,[J.cD,J.cC])
q(P.K,[H.eg,H.ex,H.ee,H.fo,H.eP,H.fK,P.dN,P.ey,P.ai,P.fq,P.fn,P.c6,P.dX,P.dZ])
r(P.cI,P.df)
q(P.cI,[H.c8,W.fA,W.a2,P.e5])
r(H.r,H.c8)
q(P.h,[H.k,H.aR,H.aZ,P.cB])
q(H.k,[H.cJ,H.cG])
r(H.cv,H.aR)
q(P.eb,[H.ek,H.fw])
r(H.cN,H.cJ)
r(H.cr,H.cq)
q(H.bx,[H.f4,H.ij,H.kE,H.kF,H.kG,P.jX,P.jW,P.jY,P.jZ,P.kf,P.ke,P.kv,P.k4,P.k5,P.io,P.is,P.jE,P.jF,P.hZ,P.i_,P.jA,P.jx,P.jy,P.jz,P.kh,P.kg,P.kq,P.kp,P.kr,P.ks,W.i0,W.iJ,W.iK,W.iY,W.j9,W.k_,W.iN,W.iM,W.k7,W.k8,W.kd,W.kl,P.kb,P.kc,P.kw,P.i9,P.ia,P.hM,E.iV,E.iW,E.iX,E.jf,D.i6,D.i7,F.kn,F.kx,F.kz,F.kA,F.kB,F.kL,F.kY,F.kZ,F.l0,F.kK,F.ky,F.jU,F.jT,F.jM,F.jN,O.iA,O.iB,O.iC,O.iD,O.iE,O.iF,O.iG,O.iH,T.je,V.kX,V.iS,V.j6,V.j5,V.j7,M.kM,M.kN,M.kO,M.kP,M.kQ,M.kR,M.kS,M.kT,M.kU,M.kV])
q(H.f4,[H.eY,H.bQ])
r(P.cL,P.W)
q(P.cL,[H.C,W.fy])
r(H.c0,H.Y)
q(H.c0,[H.dh,H.dj])
r(H.di,H.dh)
r(H.bF,H.di)
r(H.dk,H.dj)
r(H.cR,H.dk)
q(H.cR,[H.es,H.et,H.eu,H.ev,H.ew,H.cS,H.c1])
r(H.du,H.fK)
r(P.dq,P.cB)
r(P.k3,P.km)
r(P.dd,P.dl)
r(P.dy,P.cM)
r(P.c9,P.dy)
q(P.dW,[P.hN,P.i2])
r(P.dY,P.f_)
q(P.dY,[P.hO,P.ie,P.jG,P.jD])
r(P.jC,P.i2)
q(P.S,[P.a_,P.l])
q(P.ai,[P.c4,P.ea])
r(P.fD,P.bK)
q(W.e,[W.w,W.e4,W.bY,W.av,W.dn,W.ax,W.ad,W.dr,W.fu,W.cb,P.dQ,P.b4])
q(W.w,[W.E,W.aB,W.cc])
q(W.E,[W.t,P.m])
q(W.t,[W.dL,W.dM,W.bP,W.bv,W.bw,W.b7,W.e6,W.bV,W.bX,W.eQ,W.bg,W.cZ,W.f2,W.f3,W.c7])
r(W.hS,W.aO)
r(W.cs,W.fC)
q(W.aq,[W.hU,W.hV])
r(W.fF,W.fE)
r(W.ct,W.fF)
r(W.fH,W.fG)
r(W.e2,W.fH)
r(W.al,W.bu)
r(W.fO,W.fN)
r(W.bT,W.fO)
r(W.fS,W.fR)
r(W.bB,W.fS)
r(W.aY,W.j)
q(W.aY,[W.bE,W.am,W.bH])
r(W.ep,W.fV)
r(W.eq,W.fW)
r(W.fY,W.fX)
r(W.er,W.fY)
r(W.h_,W.fZ)
r(W.cT,W.h_)
r(W.h3,W.h2)
r(W.eF,W.h3)
r(W.eO,W.h5)
r(W.dp,W.dn)
r(W.eS,W.dp)
r(W.h8,W.h7)
r(W.eT,W.h8)
r(W.eZ,W.hd)
r(W.hk,W.hj)
r(W.f6,W.hk)
r(W.ds,W.dr)
r(W.f7,W.ds)
r(W.hm,W.hl)
r(W.fc,W.hm)
r(W.bk,W.am)
r(W.hu,W.ht)
r(W.fB,W.hu)
r(W.db,W.cu)
r(W.hw,W.hv)
r(W.fQ,W.hw)
r(W.hy,W.hx)
r(W.dg,W.hy)
r(W.hA,W.hz)
r(W.h9,W.hA)
r(W.hC,W.hB)
r(W.hg,W.hC)
r(W.fI,W.fy)
r(W.fL,P.cY)
r(W.hi,W.dm)
r(P.ka,P.k9)
r(P.a6,P.h4)
r(P.fU,P.fT)
r(P.eh,P.fU)
r(P.h1,P.h0)
r(P.ez,P.h1)
r(P.c5,P.m)
r(P.hf,P.he)
r(P.f0,P.hf)
r(P.ho,P.hn)
r(P.fd,P.ho)
r(P.dP,P.fz)
r(P.eA,P.b4)
r(P.hb,P.ha)
r(P.eW,P.hb)
q(K.e8,[K.ac,L.fe])
q(E.hP,[Z.dT,A.cW,T.f8])
q(D.U,[D.b9,D.ba,D.G,X.eI])
q(X.eI,[X.cK,X.bZ,X.c_,X.d0])
q(O.aj,[D.cF,U.bU])
q(D.hQ,[U.hR,U.X])
r(U.cp,U.X)
r(A.em,A.cW)
q(A.ff,[A.fh,A.jq,A.jr,A.js,A.jo,A.fg,A.jp,A.fi,A.fj,A.ju,A.fk,A.d3,A.fl,A.fm])
r(F.j8,F.i8)
r(F.jn,F.il)
r(F.da,F.jQ)
q(F.jR,[F.jO,F.iO])
r(O.el,O.f5)
q(O.cO,[O.iu,O.iv,O.aS])
q(O.aS,[O.iy,O.iz])
r(T.jb,T.f8)
r(T.jc,T.jb)
r(X.ic,X.ja)
q(V.b5,[V.e_,V.e7,V.e9,V.eE])
s(H.c8,H.fp)
s(H.dh,P.i)
s(H.di,H.cz)
s(H.dj,P.i)
s(H.dk,H.cz)
s(P.df,P.i)
s(P.dy,P.hr)
s(W.fC,W.hT)
s(W.fE,P.i)
s(W.fF,W.M)
s(W.fG,P.i)
s(W.fH,W.M)
s(W.fN,P.i)
s(W.fO,W.M)
s(W.fR,P.i)
s(W.fS,W.M)
s(W.fV,P.W)
s(W.fW,P.W)
s(W.fX,P.i)
s(W.fY,W.M)
s(W.fZ,P.i)
s(W.h_,W.M)
s(W.h2,P.i)
s(W.h3,W.M)
s(W.h5,P.W)
s(W.dn,P.i)
s(W.dp,W.M)
s(W.h7,P.i)
s(W.h8,W.M)
s(W.hd,P.W)
s(W.hj,P.i)
s(W.hk,W.M)
s(W.dr,P.i)
s(W.ds,W.M)
s(W.hl,P.i)
s(W.hm,W.M)
s(W.ht,P.i)
s(W.hu,W.M)
s(W.hv,P.i)
s(W.hw,W.M)
s(W.hx,P.i)
s(W.hy,W.M)
s(W.hz,P.i)
s(W.hA,W.M)
s(W.hB,P.i)
s(W.hC,W.M)
s(P.fT,P.i)
s(P.fU,W.M)
s(P.h0,P.i)
s(P.h1,W.M)
s(P.he,P.i)
s(P.hf,W.M)
s(P.hn,P.i)
s(P.ho,W.M)
s(P.fz,P.W)
s(P.ha,P.i)
s(P.hb,W.M)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",a_:"double",S:"num",y:"String",aA:"bool",as:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([U*])","~(U*)","~(am*)","as(@,@)","~(l*,h<bA*>*)","~(j*)","~(bH*)","a_*()","~(~())","~()","~(bE*)","~(l*,h<V*>*)","~(l*,h<X*>*)","~(l*,h<bd*>*)","aA(E,y,y,cd)","@(@)","as(@)","as(N?,N?)","bh(@,@)","~(bk*)","aA*(h<V*>*)","l(@,@)","y(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pa(v.typeUniverse,JSON.parse('{"aE":"bb","eD":"bb","bI":"bb","qO":"j","qY":"j","qQ":"b4","qP":"e","r4":"e","r6":"e","qN":"m","qZ":"m","qR":"t","r1":"t","r_":"w","qX":"w","rw":"ad","qV":"aY","qS":"aB","r7":"aB","r5":"am","r0":"bB","r3":"bF","r2":"Y","ec":{"aA":[]},"bb":{"m7":[],"aC":[]},"x":{"n":["1"],"k":["1"],"h":["1"]},"ii":{"x":["1"],"n":["1"],"k":["1"],"h":["1"]},"bD":{"a_":[],"S":[]},"cD":{"a_":[],"l":[],"S":[]},"cC":{"a_":[],"S":[]},"aP":{"y":[]},"eg":{"K":[]},"r":{"i":["l"],"n":["l"],"k":["l"],"h":["l"],"i.E":"l"},"k":{"h":["1"]},"cJ":{"k":["1"],"h":["1"]},"aR":{"h":["2"],"h.E":"2"},"cv":{"aR":["1","2"],"k":["2"],"h":["2"],"h.E":"2"},"cN":{"cJ":["2"],"k":["2"],"h":["2"],"h.E":"2"},"aZ":{"h":["1"],"h.E":"1"},"c8":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"cq":{"H":["1","2"]},"cr":{"H":["1","2"]},"ex":{"K":[]},"ee":{"K":[]},"fo":{"K":[]},"bx":{"aC":[]},"f4":{"aC":[]},"eY":{"aC":[]},"bQ":{"aC":[]},"eP":{"K":[]},"C":{"W":["1","2"],"H":["1","2"]},"cG":{"k":["1"],"h":["1"],"h.E":"1"},"ed":{"ml":[]},"c0":{"A":["1"],"Y":[]},"bF":{"i":["a_"],"A":["a_"],"n":["a_"],"Y":[],"k":["a_"],"h":["a_"],"i.E":"a_"},"cR":{"i":["l"],"A":["l"],"n":["l"],"Y":[],"k":["l"],"h":["l"]},"es":{"i":["l"],"A":["l"],"n":["l"],"Y":[],"k":["l"],"h":["l"],"i.E":"l"},"et":{"i":["l"],"A":["l"],"n":["l"],"Y":[],"k":["l"],"h":["l"],"i.E":"l"},"eu":{"i":["l"],"A":["l"],"n":["l"],"Y":[],"k":["l"],"h":["l"],"i.E":"l"},"ev":{"i":["l"],"A":["l"],"n":["l"],"Y":[],"k":["l"],"h":["l"],"i.E":"l"},"ew":{"i":["l"],"A":["l"],"n":["l"],"Y":[],"k":["l"],"h":["l"],"i.E":"l"},"cS":{"i":["l"],"A":["l"],"n":["l"],"Y":[],"k":["l"],"h":["l"],"i.E":"l"},"c1":{"i":["l"],"bh":[],"A":["l"],"n":["l"],"Y":[],"k":["l"],"h":["l"],"i.E":"l"},"fK":{"K":[]},"du":{"K":[]},"dt":{"d_":[]},"dq":{"h":["1"],"h.E":"1"},"dd":{"dl":["1"],"k":["1"],"h":["1"]},"cB":{"h":["1"]},"cI":{"i":["1"],"n":["1"],"k":["1"],"h":["1"]},"cL":{"W":["1","2"],"H":["1","2"]},"W":{"H":["1","2"]},"cM":{"H":["1","2"]},"c9":{"H":["1","2"]},"dl":{"k":["1"],"h":["1"]},"a_":{"S":[]},"dN":{"K":[]},"ey":{"K":[]},"ai":{"K":[]},"c4":{"K":[]},"ea":{"K":[]},"fq":{"K":[]},"fn":{"K":[]},"c6":{"K":[]},"dX":{"K":[]},"eB":{"K":[]},"cX":{"K":[]},"dZ":{"K":[]},"l":{"S":[]},"n":{"k":["1"],"h":["1"]},"bK":{"fr":[]},"h6":{"fr":[]},"fD":{"fr":[]},"t":{"E":[],"w":[],"e":[]},"dL":{"E":[],"w":[],"e":[]},"dM":{"E":[],"w":[],"e":[]},"bP":{"E":[],"w":[],"e":[]},"bv":{"E":[],"w":[],"e":[]},"bw":{"E":[],"w":[],"e":[]},"aB":{"w":[],"e":[]},"b7":{"E":[],"w":[],"e":[]},"ct":{"i":["a6<S>"],"n":["a6<S>"],"A":["a6<S>"],"k":["a6<S>"],"h":["a6<S>"],"i.E":"a6<S>"},"cu":{"a6":["S"]},"e2":{"i":["y"],"n":["y"],"A":["y"],"k":["y"],"h":["y"],"i.E":"y"},"fA":{"i":["E"],"n":["E"],"k":["E"],"h":["E"],"i.E":"E"},"E":{"w":[],"e":[]},"al":{"bu":[]},"bT":{"i":["al"],"n":["al"],"A":["al"],"k":["al"],"h":["al"],"i.E":"al"},"e4":{"e":[]},"e6":{"E":[],"w":[],"e":[]},"bB":{"i":["w"],"n":["w"],"A":["w"],"k":["w"],"h":["w"],"i.E":"w"},"bV":{"E":[],"w":[],"e":[]},"bX":{"E":[],"w":[],"e":[]},"bE":{"j":[]},"bY":{"e":[]},"ep":{"W":["y","@"],"H":["y","@"]},"eq":{"W":["y","@"],"H":["y","@"]},"er":{"i":["aF"],"n":["aF"],"A":["aF"],"k":["aF"],"h":["aF"],"i.E":"aF"},"am":{"j":[]},"a2":{"i":["w"],"n":["w"],"k":["w"],"h":["w"],"i.E":"w"},"w":{"e":[]},"cT":{"i":["w"],"n":["w"],"A":["w"],"k":["w"],"h":["w"],"i.E":"w"},"eF":{"i":["aG"],"n":["aG"],"A":["aG"],"k":["aG"],"h":["aG"],"i.E":"aG"},"eO":{"W":["y","@"],"H":["y","@"]},"eQ":{"E":[],"w":[],"e":[]},"av":{"e":[]},"eS":{"i":["av"],"n":["av"],"A":["av"],"e":[],"k":["av"],"h":["av"],"i.E":"av"},"eT":{"i":["aH"],"n":["aH"],"A":["aH"],"k":["aH"],"h":["aH"],"i.E":"aH"},"eZ":{"W":["y","y"],"H":["y","y"]},"bg":{"E":[],"w":[],"e":[]},"cZ":{"E":[],"w":[],"e":[]},"f2":{"E":[],"w":[],"e":[]},"f3":{"E":[],"w":[],"e":[]},"c7":{"E":[],"w":[],"e":[]},"ax":{"e":[]},"ad":{"e":[]},"f6":{"i":["ad"],"n":["ad"],"A":["ad"],"k":["ad"],"h":["ad"],"i.E":"ad"},"f7":{"i":["ax"],"n":["ax"],"A":["ax"],"e":[],"k":["ax"],"h":["ax"],"i.E":"ax"},"bH":{"j":[]},"fc":{"i":["aJ"],"n":["aJ"],"A":["aJ"],"k":["aJ"],"h":["aJ"],"i.E":"aJ"},"aY":{"j":[]},"fu":{"e":[]},"bk":{"am":[],"j":[]},"cb":{"e":[]},"cc":{"w":[],"e":[]},"fB":{"i":["J"],"n":["J"],"A":["J"],"k":["J"],"h":["J"],"i.E":"J"},"db":{"a6":["S"]},"fQ":{"i":["aD?"],"n":["aD?"],"A":["aD?"],"k":["aD?"],"h":["aD?"],"i.E":"aD?"},"dg":{"i":["w"],"n":["w"],"A":["w"],"k":["w"],"h":["w"],"i.E":"w"},"h9":{"i":["aI"],"n":["aI"],"A":["aI"],"k":["aI"],"h":["aI"],"i.E":"aI"},"hg":{"i":["aw"],"n":["aw"],"A":["aw"],"k":["aw"],"h":["aw"],"i.E":"aw"},"fy":{"W":["y","y"],"H":["y","y"]},"fI":{"W":["y","y"],"H":["y","y"]},"cd":{"an":[]},"cU":{"an":[]},"dm":{"an":[]},"hi":{"an":[]},"hh":{"an":[]},"dv":{"bC":[]},"e5":{"i":["E"],"n":["E"],"k":["E"],"h":["E"],"i.E":"E"},"a6":{"h4":["1"]},"eh":{"i":["aQ"],"n":["aQ"],"k":["aQ"],"h":["aQ"],"i.E":"aQ"},"ez":{"i":["aU"],"n":["aU"],"k":["aU"],"h":["aU"],"i.E":"aU"},"c5":{"m":[],"E":[],"w":[],"e":[]},"f0":{"i":["y"],"n":["y"],"k":["y"],"h":["y"],"i.E":"y"},"m":{"E":[],"w":[],"e":[]},"fd":{"i":["aW"],"n":["aW"],"k":["aW"],"h":["aW"],"i.E":"aW"},"bh":{"n":["l"],"k":["l"],"h":["l"]},"dP":{"W":["y","@"],"H":["y","@"]},"dQ":{"e":[]},"b4":{"e":[]},"eA":{"e":[]},"eW":{"i":["H<@,@>"],"n":["H<@,@>"],"k":["H<@,@>"],"h":["H<@,@>"],"i.E":"H<@,@>"},"aj":{"h":["1*"],"aj.T":"1"},"b9":{"U":[]},"ba":{"U":[]},"G":{"U":[]},"cK":{"U":[]},"bZ":{"U":[]},"c_":{"U":[]},"eI":{"U":[]},"d0":{"U":[]},"dR":{"V":[]},"by":{"V":[]},"cF":{"aj":["V*"],"h":["V*"],"aj.T":"V*"},"eH":{"V":[]},"eU":{"V":[]},"cp":{"X":[]},"bU":{"aj":["X*"],"X":[],"h":["X*"],"aj.T":"X*"},"d6":{"X":[]},"d7":{"X":[]},"d8":{"X":[]},"em":{"cW":[]},"e_":{"b5":[]},"e7":{"b5":[]},"e9":{"b5":[]},"eE":{"b5":[]}}'))
H.p9(v.typeUniverse,JSON.parse('{"a9":1,"k":1,"bc":1,"ek":2,"fw":1,"cz":1,"fp":1,"c8":1,"cq":2,"ej":1,"c0":1,"bJ":1,"cY":1,"f_":2,"de":1,"cB":1,"cI":1,"cL":2,"hr":2,"cM":2,"df":1,"dy":2,"dW":2,"dY":2,"eb":1,"fL":1,"M":1,"cA":1,"b9":1,"ba":1,"G":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",j:"May not create a face with a first vertex which is not attached to a shape.",i:"May not create a face with vertices attached to different shapes."}
var t=(function rtii(){var s=H.lK
return{D:s("bP"),G:s("bu"),Y:s("bv"),gw:s("k<@>"),h:s("E"),C:s("K"),aD:s("j"),c8:s("al"),bX:s("bT"),Z:s("aC"),v:s("bC"),fS:s("bV"),gk:s("bX"),Q:s("x<an>"),s:s("x<y>"),gn:s("x<@>"),t:s("x<l>"),x:s("x<dO*>"),bb:s("x<dR*>"),am:s("x<dS*>"),g0:s("x<dT*>"),b7:s("x<b5*>"),cP:s("x<by*>"),M:s("x<e1*>"),k:s("x<b7*>"),b:s("x<cx*>"),aZ:s("x<bW*>"),L:s("x<ei*>"),u:s("x<n<b7*>*>"),B:s("x<it*>"),p:s("x<bd*>"),eb:s("x<eH*>"),cS:s("x<a1*>"),d1:s("x<eJ*>"),l:s("x<eG*>"),du:s("x<eU*>"),cz:s("x<eV*>"),eG:s("x<cY<N*>*>"),i:s("x<y*>"),fG:s("x<f5*>"),bw:s("x<f8*>"),br:s("x<fe*>"),fj:s("x<ff*>"),d6:s("x<d1*>"),dv:s("x<d2*>"),hg:s("x<d3*>"),by:s("x<d4*>"),fF:s("x<d5*>"),j:s("x<ft*>"),m:s("x<a_*>"),V:s("x<l*>"),f:s("x<~(U*)*>"),T:s("cE"),eH:s("m7"),g:s("aE"),aU:s("A<@>"),h9:s("C<y*,cW*>"),cn:s("C<y*,eX*>"),dO:s("C<y*,y*>"),w:s("C<y*,fb*>"),en:s("C<l*,n<d1*>*>"),af:s("C<l*,n<d2*>*>"),gr:s("C<l*,n<d4*>*>"),gb:s("C<l*,n<d5*>*>"),J:s("C<l*,fh*>"),E:s("C<l*,aA*>"),a:s("C<l*,l*>"),aH:s("n<@>"),eO:s("H<@,@>"),eM:s("cN<y*,y>"),bK:s("bY"),bZ:s("cQ"),dD:s("Y"),bm:s("c1"),P:s("as"),K:s("N"),q:s("a6<S>"),fv:s("ml"),ew:s("c5"),N:s("y"),g7:s("m"),bY:s("bg"),aW:s("c7"),aF:s("d_"),gc:s("bh"),ak:s("bI"),U:s("c9<y,y>"),R:s("fr"),gH:s("cc"),ac:s("a2"),cJ:s("aA"),gR:s("a_"),z:s("@"),S:s("l"),fr:s("bw*"),b1:s("bA*"),gj:s("V*"),dn:s("cK*"),hc:s("bd*"),d:s("bZ*"),F:s("c_*"),ah:s("X*"),A:s("0&*"),_:s("N*"),X:s("y*"),eB:s("fa*"),eP:s("d0*"),n:s("fg*"),r:s("fi*"),y:s("fj*"),O:s("fk*"),I:s("d3*"),c:s("fl*"),o:s("fm*"),e:s("l*"),dm:s("~(U*)*"),bG:s("m6<as>?"),W:s("N?"),H:s("S")}})();(function constants(){var s=hunkHelpers.makeConstList
C.q=W.bv.prototype
C.i=W.bw.prototype
C.R=W.b7.prototype
C.U=J.a.prototype
C.b=J.x.prototype
C.V=J.cC.prototype
C.c=J.cD.prototype
C.j=J.cE.prototype
C.d=J.bD.prototype
C.a=J.aP.prototype
C.W=J.aE.prototype
C.C=J.eD.prototype
C.a3=P.eN.prototype
C.D=W.cZ.prototype
C.p=J.bI.prototype
C.E=W.bk.prototype
C.F=W.cb.prototype
C.G=new E.bR("Browser.chrome")
C.r=new E.bR("Browser.firefox")
C.t=new E.bR("Browser.edge")
C.H=new E.bR("Browser.other")
C.a6=new P.hO()
C.I=new P.hN()
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

C.P=new P.eB()
C.e=new P.jC()
C.Q=new P.jG()
C.f=new P.k3()
C.n=new P.bz(0)
C.S=new P.bz(5e6)
C.T=new P.ig("element",!1,!1,!1)
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
C.a_=new H.cr(0,{},C.w,H.lK("cr<y*,y*>"))
C.a0=new E.c2("OperatingSystem.windows")
C.B=new E.c2("OperatingSystem.mac")
C.a1=new E.c2("OperatingSystem.linux")
C.a2=new E.c2("OperatingSystem.other")
C.a4=new P.jD(!1)
C.a5=new P.ce(null,2)})();(function staticFields(){$.mK=null
$.aN=0
$.m_=null
$.lZ=null
$.nc=null
$.n6=null
$.ni=null
$.kC=null
$.kI=null
$.lM=null
$.ci=null
$.dD=null
$.dE=null
$.lG=!1
$.aK=C.f
$.af=H.d([],H.lK("x<N>"))
$.b8=null
$.la=null
$.m5=null
$.m4=null
$.dc=P.li(t.N,t.Z)
$.i3=null
$.mb=null
$.me=null
$.aV=null
$.mn=null
$.mA=null
$.mD=null
$.mC=null
$.jH=null
$.jI=null
$.jJ=null
$.mB=null
$.mF=null
$.md=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"qW","np",function(){return H.qu("_$dart_dartClosure")})
s($,"r8","nq",function(){return H.aX(H.jm({
toString:function(){return"$receiver$"}}))})
s($,"r9","nr",function(){return H.aX(H.jm({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"ra","ns",function(){return H.aX(H.jm(null))})
s($,"rb","nt",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"re","nw",function(){return H.aX(H.jm(void 0))})
s($,"rf","nx",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"rd","nv",function(){return H.aX(H.mu(null))})
s($,"rc","nu",function(){return H.aX(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"rh","nz",function(){return H.aX(H.mu(void 0))})
s($,"rg","ny",function(){return H.aX(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"rx","lR",function(){return P.oN()})
s($,"ri","nA",function(){return new P.jE().$0()})
s($,"rj","nB",function(){return new P.jF().$0()})
s($,"ry","nF",function(){return new Int8Array(H.cg(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rB","nH",function(){return P.ox("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rR","nI",function(){return P.pv()})
s($,"rz","nG",function(){return P.m9(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rq","nE",function(){return Z.ay(0)})
s($,"rk","nC",function(){return Z.ay(511)})
s($,"rs","bs",function(){return Z.ay(1)})
s($,"rr","br",function(){return Z.ay(2)})
s($,"rm","bq",function(){return Z.ay(4)})
s($,"rt","bt",function(){return Z.ay(8)})
s($,"ru","bN",function(){return Z.ay(16)})
s($,"rn","dI",function(){return Z.ay(32)})
s($,"ro","dJ",function(){return Z.ay(64)})
s($,"rp","nD",function(){return Z.ay(96)})
s($,"rv","cn",function(){return Z.ay(128)})
s($,"rl","bp",function(){return Z.ay(256)})
s($,"qU","no",function(){return new V.i4()})
s($,"qT","F",function(){return $.no()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cQ,DataView:H.Y,ArrayBufferView:H.Y,Float32Array:H.bF,Float64Array:H.bF,Int16Array:H.es,Int32Array:H.et,Int8Array:H.eu,Uint16Array:H.ev,Uint32Array:H.ew,Uint8ClampedArray:H.cS,CanvasPixelArray:H.cS,Uint8Array:H.c1,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.hI,HTMLAnchorElement:W.dL,HTMLAreaElement:W.dM,HTMLBaseElement:W.bP,Blob:W.bu,HTMLBodyElement:W.bv,HTMLCanvasElement:W.bw,CDATASection:W.aB,CharacterData:W.aB,Comment:W.aB,ProcessingInstruction:W.aB,Text:W.aB,CSSPerspective:W.hS,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.cs,MSStyleCSSProperties:W.cs,CSS2Properties:W.cs,CSSImageValue:W.aq,CSSKeywordValue:W.aq,CSSNumericValue:W.aq,CSSPositionValue:W.aq,CSSResourceValue:W.aq,CSSUnitValue:W.aq,CSSURLImageValue:W.aq,CSSStyleValue:W.aq,CSSMatrixComponent:W.aO,CSSRotation:W.aO,CSSScale:W.aO,CSSSkew:W.aO,CSSTranslation:W.aO,CSSTransformComponent:W.aO,CSSTransformValue:W.hU,CSSUnparsedValue:W.hV,DataTransferItemList:W.hW,HTMLDivElement:W.b7,DOMException:W.hX,ClientRectList:W.ct,DOMRectList:W.ct,DOMRectReadOnly:W.cu,DOMStringList:W.e2,DOMTokenList:W.hY,Element:W.E,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.al,FileList:W.bT,FileWriter:W.e4,HTMLFormElement:W.e6,Gamepad:W.aD,History:W.id,HTMLCollection:W.bB,HTMLFormControlsCollection:W.bB,HTMLOptionsCollection:W.bB,ImageData:W.bC,HTMLImageElement:W.bV,HTMLInputElement:W.bX,KeyboardEvent:W.bE,Location:W.iq,MediaList:W.iI,MessagePort:W.bY,MIDIInputMap:W.ep,MIDIOutputMap:W.eq,MimeType:W.aF,MimeTypeArray:W.er,PointerEvent:W.am,MouseEvent:W.am,DragEvent:W.am,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cT,RadioNodeList:W.cT,Plugin:W.aG,PluginArray:W.eF,RTCStatsReport:W.eO,HTMLSelectElement:W.eQ,SourceBuffer:W.av,SourceBufferList:W.eS,SpeechGrammar:W.aH,SpeechGrammarList:W.eT,SpeechRecognitionResult:W.aI,Storage:W.eZ,CSSStyleSheet:W.aw,StyleSheet:W.aw,HTMLTableCellElement:W.bg,HTMLTableDataCellElement:W.bg,HTMLTableHeaderCellElement:W.bg,HTMLTableElement:W.cZ,HTMLTableRowElement:W.f2,HTMLTableSectionElement:W.f3,HTMLTemplateElement:W.c7,TextTrack:W.ax,TextTrackCue:W.ad,VTTCue:W.ad,TextTrackCueList:W.f6,TextTrackList:W.f7,TimeRanges:W.jg,Touch:W.aJ,TouchEvent:W.bH,TouchList:W.fc,TrackDefaultList:W.jk,CompositionEvent:W.aY,FocusEvent:W.aY,TextEvent:W.aY,UIEvent:W.aY,URL:W.jB,VideoTrackList:W.fu,WheelEvent:W.bk,Window:W.cb,DOMWindow:W.cb,Attr:W.cc,CSSRuleList:W.fB,ClientRect:W.db,DOMRect:W.db,GamepadList:W.fQ,NamedNodeMap:W.dg,MozNamedAttrMap:W.dg,SpeechRecognitionResultList:W.h9,StyleSheetList:W.hg,SVGLength:P.aQ,SVGLengthList:P.eh,SVGNumber:P.aU,SVGNumberList:P.ez,SVGPointList:P.iQ,SVGScriptElement:P.c5,SVGStringList:P.f0,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aW,SVGTransformList:P.fd,AudioBuffer:P.hL,AudioParamMap:P.dP,AudioTrackList:P.dQ,AudioContext:P.b4,webkitAudioContext:P.b4,BaseAudioContext:P.b4,OfflineAudioContext:P.eA,WebGL2RenderingContext:P.eN,SQLResultSetRowList:P.eW})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
W.dn.$nativeSuperclassTag="EventTarget"
W.dp.$nativeSuperclassTag="EventTarget"
W.dr.$nativeSuperclassTag="EventTarget"
W.ds.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.ng,[])
else M.ng([])})})()
//# sourceMappingURL=test.dart.js.map
