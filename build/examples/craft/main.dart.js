(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}var z=function(){var s=function(){}
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
if(typeof n=="function")n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){H.rB(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)H.rC(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.mw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.mw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.mw(this,a,b,c,true,false,e).prototype
return s}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var s=[]
for(var r=0;r<h.length;r++){var q=h[r]
if(typeof q=="string")q=a[q]
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
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var s=0;s<w.length;s++){if(w[s]==C)continue
if(w[s][a])return w[s][a]}}var C={},H={lZ:function lZ(){},
m0:function(a){return new H.d9("Field '"+a+"' has been assigned during initialization.")},
lF:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
jV:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
pB:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
lB:function(a,b,c){return a},
pb:function(a,b){if(t.x.b(a))return new H.d_(a,b)
return new H.bQ(a,b)},
p6:function(){return new P.dz("No element")},
pz:function(a,b){H.fj(a,0,J.aU(a)-1,b)},
fj:function(a,b,c,d){if(c-b<=32)H.py(a,b,c,d)
else H.px(a,b,c,d)},
py:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.c3(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aA()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
px:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a3(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a3(a4+a5,2),f=g-j,e=g+j,d=J.c3(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aA()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aA()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aA()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aA()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aA()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aA()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aA()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aA()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aA()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.a6(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.k(a3,p,d.h(a3,r))
d.k(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.h(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.k(a3,p,d.h(a3,r))
l=r+1
d.k(a3,r,d.h(a3,q))
d.k(a3,q,o)
q=m
r=l
break}else{d.k(a3,p,d.h(a3,q))
d.k(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.k(a3,p,d.h(a3,r))
d.k(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.k(a3,p,d.h(a3,r))
l=r+1
d.k(a3,r,d.h(a3,q))
d.k(a3,q,o)
r=l}else{d.k(a3,p,d.h(a3,q))
d.k(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.k(a3,a4,d.h(a3,a2))
d.k(a3,a2,b)
a2=q+1
d.k(a3,a5,d.h(a3,a2))
d.k(a3,a2,a0)
H.fj(a3,a4,r-2,a6)
H.fj(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.a6(a6.$2(d.h(a3,r),b),0);)++r
for(;J.a6(a6.$2(d.h(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.k(a3,p,d.h(a3,r))
d.k(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.k(a3,p,d.h(a3,r))
l=r+1
d.k(a3,r,d.h(a3,q))
d.k(a3,q,o)
r=l}else{d.k(a3,p,d.h(a3,q))
d.k(a3,q,o)}q=m
break}}H.fj(a3,r,q,a6)}else H.fj(a3,r,q,a6)},
d9:function d9(a){this.a=a},
O:function O(a){this.a=a},
k:function k(){},
dd:function dd(){},
bP:function bP(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bQ:function bQ(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=null
this.b=a
this.c=b},
bR:function bR(a,b){this.a=a
this.b=b},
dG:function dG(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b},
d1:function d1(){},
fS:function fS(){},
cB:function cB(){},
cy:function cy(a){this.a=a},
p_:function(){throw H.c(P.A("Cannot modify unmodifiable Map"))},
oh:function(a){var s,r=H.og(a)
if(r!=null)return r
s="minified:"+a
return s},
oa:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
r:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.eg(a)
return s},
dr:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
m4:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.b(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a5(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.D(q,o)|32)>r)return n}return parseInt(a,b)},
ds:function(a){return H.pg(a)},
pg:function(a){var s,r,q,p
if(a instanceof P.C)return H.ar(H.c5(a),null)
if(J.c2(a)===C.Y||t.cC.b(a)){s=C.r(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ar(H.c5(a),null)},
pi:function(){if(!!self.location)return self.location.href
return null},
n7:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
pq:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.lt(q))throw H.c(H.c1(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.bm(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.c1(q))}return H.n7(p)},
n8:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.lt(q))throw H.c(H.c1(q))
if(q<0)throw H.c(H.c1(q))
if(q>65535)return H.pq(a)}return H.n7(a)},
pr:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
b4:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.bm(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.a5(a,0,1114111,null,null))},
bY:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
pp:function(a){var s=H.bY(a).getFullYear()+0
return s},
pn:function(a){var s=H.bY(a).getMonth()+1
return s},
pj:function(a){var s=H.bY(a).getDate()+0
return s},
pk:function(a){var s=H.bY(a).getHours()+0
return s},
pm:function(a){var s=H.bY(a).getMinutes()+0
return s},
po:function(a){var s=H.bY(a).getSeconds()+0
return s},
pl:function(a){var s=H.bY(a).getMilliseconds()+0
return s},
bm:function(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
C.b.af(s,b)
q.b=""
if(c!=null&&c.a!==0)c.B(0,new H.jA(q,r,s))
""+q.a
return J.oL(a,new H.j2(C.a8,0,s,r,0))},
ph:function(a,b,c){var s,r,q,p
if(b instanceof Array)s=c==null||c.a===0
else s=!1
if(s){r=b
q=r.length
if(q===0){if(!!a.$0)return a.$0()}else if(q===1){if(!!a.$1)return a.$1(r[0])}else if(q===2){if(!!a.$2)return a.$2(r[0],r[1])}else if(q===3){if(!!a.$3)return a.$3(r[0],r[1],r[2])}else if(q===4){if(!!a.$4)return a.$4(r[0],r[1],r[2],r[3])}else if(q===5)if(!!a.$5)return a.$5(r[0],r[1],r[2],r[3],r[4])
p=a[""+"$"+q]
if(p!=null)return p.apply(a,r)}return H.pf(a,b,c)},
pf:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b instanceof Array?b:P.cp(b,!0),h=i.length,g=a.$R
if(h<g)return H.bm(a,i,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.c2(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return H.bm(a,i,c)
if(h===g)return o.apply(a,i)
return H.bm(a,i,c)}if(q instanceof Array){if(c!=null&&c.a!==0)return H.bm(a,i,c)
if(h>g+q.length)return H.bm(a,i,null)
C.b.af(i,q.slice(h-g))
return o.apply(a,i)}else{if(h>g)return H.bm(a,i,c)
n=Object.keys(q)
if(c==null)for(r=n.length,m=0;m<n.length;n.length===r||(0,H.o)(n),++m){l=q[n[m]]
if(C.u===l)return H.bm(a,i,c)
C.b.m(i,l)}else{for(r=n.length,k=0,m=0;m<n.length;n.length===r||(0,H.o)(n),++m){j=n[m]
if(c.bZ(0,j)){++k
C.b.m(i,c.h(0,j))}else{l=q[j]
if(C.u===l)return H.bm(a,i,c)
C.b.m(i,l)}}if(k!==c.a)return H.bm(a,i,c)}return o.apply(a,i)}},
my:function(a){throw H.c(H.c1(a))},
b:function(a,b){if(a==null)J.aU(a)
throw H.c(H.cN(a,b))},
cN:function(a,b){var s,r="index"
if(!H.lt(b))return new P.aF(!0,b,r,null)
s=J.aU(a)
if(b<0||b>=s)return P.K(b,a,r,null,s)
return P.fa(b,r)},
rg:function(a,b,c){if(a>c)return P.a5(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a5(b,a,c,"end",null)
return new P.aF(!0,b,"end",null)},
c1:function(a){return new P.aF(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.f0()
s=new Error()
s.dartException=a
r=H.rD
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
rD:function(){return J.eg(this.dartException)},
f:function(a){throw H.c(a)},
o:function(a){throw H.c(P.be(a))},
b5:function(a){var s,r,q,p,o,n
a=H.od(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.ke(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
kf:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
nk:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
m_:function(a,b){var s=b==null,r=s?null:b.method
return new H.eJ(a,r,s?null:b.receiver)},
ad:function(a){if(a==null)return new H.jv(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.c6(a,a.dartException)
return H.r9(a)},
c6:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
r9:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.bm(r,16)&8191)===10)switch(q){case 438:return H.c6(a,H.m_(H.r(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.r(s)+" (Error "+q+")"
return H.c6(a,new H.dq(p,e))}}if(a instanceof TypeError){o=$.op()
n=$.oq()
m=$.or()
l=$.os()
k=$.ov()
j=$.ow()
i=$.ou()
$.ot()
h=$.oy()
g=$.ox()
f=o.ax(s)
if(f!=null)return H.c6(a,H.m_(s,f))
else{f=n.ax(s)
if(f!=null){f.method="call"
return H.c6(a,H.m_(s,f))}else{f=m.ax(s)
if(f==null){f=l.ax(s)
if(f==null){f=k.ax(s)
if(f==null){f=j.ax(s)
if(f==null){f=i.ax(s)
if(f==null){f=l.ax(s)
if(f==null){f=h.ax(s)
if(f==null){f=g.ax(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.c6(a,new H.dq(s,f==null?e:f.method))}}return H.c6(a,new H.fR(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dx()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.c6(a,new P.aF(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dx()
return a},
by:function(a){var s
if(a==null)return new H.dV(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.dV(a)},
ri:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
rn:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.h("Unsupported number of arguments for wrapped closure"))},
bw:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.rn)
a.$identity=s
return s},
oZ:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.fp().constructor.prototype):Object.create(new H.c9(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aV
if(typeof r!=="number")return r.K()
$.aV=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.mU(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.oV(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.mU(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
oV:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.o7,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.oT:H.oS
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
oW:function(a,b,c,d){var s=H.mS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
mU:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.oY(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.oW(r,!p,s,b)
if(r===0){p=$.aV
if(typeof p!=="number")return p.K()
$.aV=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cQ
return new Function(p+(o==null?$.cQ=H.iA("self"):o)+";return "+n+"."+H.r(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aV
if(typeof p!=="number")return p.K()
$.aV=p+1
m+=p
p="return function("+m+"){return this."
o=$.cQ
return new Function(p+(o==null?$.cQ=H.iA("self"):o)+"."+H.r(s)+"("+m+");}")()},
oX:function(a,b,c,d){var s=H.mS,r=H.oU
switch(b?-1:a){case 0:throw H.c(new H.ff("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
oY:function(a,b){var s,r,q,p,o,n,m,l=$.cQ
if(l==null)l=$.cQ=H.iA("self")
s=$.mR
if(s==null)s=$.mR=H.iA("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.oX(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.r(r)+"(this."+s+");"
n=$.aV
if(typeof n!=="number")return n.K()
$.aV=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.r(r)+"(this."+s+", "+m+");"
n=$.aV
if(typeof n!=="number")return n.K()
$.aV=n+1
return new Function(o+n+"}")()},
mw:function(a,b,c,d,e,f,g){return H.oZ(a,b,c,d,!!e,!!f,g)},
oS:function(a,b){return H.hT(v.typeUniverse,H.c5(a.a),b)},
oT:function(a,b){return H.hT(v.typeUniverse,H.c5(a.c),b)},
mS:function(a){return a.a},
oU:function(a){return a.c},
iA:function(a){var s,r,q,p=new H.c9("self","target","receiver","name"),o=J.lY(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bc("Field name "+a+" not found."))},
rB:function(a){throw H.c(new P.eu(a))},
o5:function(a){return v.getIsolateTag(a)},
rC:function(a){return H.f(new H.d9(a))},
ug:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
rr:function(a){var s,r,q,p,o,n=$.o6.$1(a),m=$.lD[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lJ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.o2.$2(a,n)
if(q!=null){m=$.lD[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lJ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.lK(s)
$.lD[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.lJ[n]=s
return s}if(p==="-"){o=H.lK(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ob(a,s)
if(p==="*")throw H.c(P.ko(n))
if(v.leafTags[n]===true){o=H.lK(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ob(a,s)},
ob:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.mA(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
lK:function(a){return J.mA(a,!1,null,!!a.$iz)},
ru:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.lK(s)
else return J.mA(s,c,null,null)},
rl:function(){if(!0===$.mz)return
$.mz=!0
H.rm()},
rm:function(){var s,r,q,p,o,n,m,l
$.lD=Object.create(null)
$.lJ=Object.create(null)
H.rk()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.oc.$1(o)
if(n!=null){m=H.ru(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
rk:function(){var s,r,q,p,o,n,m=C.K()
m=H.cM(C.L,H.cM(C.M,H.cM(C.t,H.cM(C.t,H.cM(C.N,H.cM(C.O,H.cM(C.P(C.r),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.o6=new H.lG(p)
$.o2=new H.lH(o)
$.oc=new H.lI(n)},
cM:function(a,b){return a(b)||b},
pa:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a7("Illegal RegExp pattern ("+String(n)+")",a,null))},
oe:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
rh:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
od:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
of:function(a,b,c){var s=H.rA(a,b,c)
return s},
rA:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.od(b),'g'),H.rh(c))},
cV:function cV(a,b){this.a=a
this.$ti=b},
cU:function cU(){},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j2:function j2(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
jA:function jA(a,b,c){this.a=a
this.b=b
this.c=c},
ke:function ke(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dq:function dq(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(a){this.a=a},
jv:function jv(a){this.a=a},
dV:function dV(a){this.a=a
this.b=null},
bE:function bE(){},
fv:function fv(){},
fp:function fp(){},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ff:function ff(a){this.a=a},
l5:function l5(){},
Q:function Q(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j3:function j3(a){this.a=a},
j5:function j5(a,b){this.a=a
this.b=b
this.c=null},
bi:function bi(a){this.a=a},
eL:function eL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
lG:function lG(a){this.a=a},
lH:function lH(a){this.a=a},
lI:function lI(a){this.a=a},
eH:function eH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cJ:function(a){var s,r,q,p,o
if(t.bg.b(a))return a
s=J.c3(a)
r=s.gj(a)
q=P.aw(r,null,!1)
for(p=0;p<s.gj(a);++p){o=s.h(a,p)
if(p>=r)return H.b(q,p)
q[p]=o}return q},
b7:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cN(b,a))},
qn:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.rg(a,b,c))
return b},
dl:function dl(){},
V:function V(){},
ct:function ct(){},
bT:function bT(){},
dm:function dm(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
dn:function dn(){},
bU:function bU(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
nf:function(a,b){var s=b.c
return s==null?b.c=H.mj(a,b.z,!0):s},
ne:function(a,b){var s=b.c
return s==null?b.c=H.e1(a,"cj",[b.z]):s},
ng:function(a){var s=a.y
if(s===6||s===7||s===8)return H.ng(a.z)
return s===11||s===12},
pv:function(a){return a.cy},
mx:function(a){return H.mk(v.typeUniverse,a,!1)},
bv:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bv(a,s,a0,a1)
if(r===s)return b
return H.nG(a,r,!0)
case 7:s=b.z
r=H.bv(a,s,a0,a1)
if(r===s)return b
return H.mj(a,r,!0)
case 8:s=b.z
r=H.bv(a,s,a0,a1)
if(r===s)return b
return H.nF(a,r,!0)
case 9:q=b.Q
p=H.e9(a,q,a0,a1)
if(p===q)return b
return H.e1(a,b.z,p)
case 10:o=b.z
n=H.bv(a,o,a0,a1)
m=b.Q
l=H.e9(a,m,a0,a1)
if(n===o&&l===m)return b
return H.mh(a,n,l)
case 11:k=b.z
j=H.bv(a,k,a0,a1)
i=b.Q
h=H.r6(a,i,a0,a1)
if(j===k&&h===i)return b
return H.nE(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.e9(a,g,a0,a1)
o=b.z
n=H.bv(a,o,a0,a1)
if(f===g&&n===o)return b
return H.mi(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.io("Attempted to substitute unexpected RTI kind "+c))}},
e9:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bv(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
r7:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bv(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
r6:function(a,b,c,d){var s,r=b.a,q=H.e9(a,r,c,d),p=b.b,o=H.e9(a,p,c,d),n=b.c,m=H.r7(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.hi()
s.a=q
s.b=o
s.c=m
return s},
ui:function(a,b){a[v.arrayRti]=b
return a},
rd:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.o7(s)
return a.$S()}return null},
o8:function(a,b){var s
if(H.ng(b))if(a instanceof H.bE){s=H.rd(a)
if(s!=null)return s}return H.c5(a)},
c5:function(a){var s
if(a instanceof P.C){s=a.$ti
return s!=null?s:H.ms(a)}if(Array.isArray(a))return H.nP(a)
return H.ms(J.c2(a))},
nP:function(a){var s=a[v.arrayRti],r=t.ce
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a_:function(a){var s=a.$ti
return s!=null?s:H.ms(a)},
ms:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.qw(a,s)},
qw:function(a,b){var s=a instanceof H.bE?a.__proto__.__proto__.constructor:b,r=H.q3(v.typeUniverse,s.name)
b.$ccache=r
return r},
o7:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.mk(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
qv:function(a){var s,r,q,p=this
if(p===t.K)return H.e6(p,a,H.qA)
if(!H.b8(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.e6(p,a,H.qD)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.lt
else if(r===t.cb||r===t.H)q=H.qz
else if(r===t.N)q=H.qB
else q=r===t.w?H.i4:null
if(q!=null)return H.e6(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.ro)){p.r="$i"+s
return H.e6(p,a,H.qC)}}else if(s===7)return H.e6(p,a,H.qs)
return H.e6(p,a,H.qq)},
e6:function(a,b,c){a.b=c
return a.b(b)},
qu:function(a){var s,r=this,q=H.qp
if(!H.b8(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.ql
else if(r===t.K)q=H.qj
else{s=H.eb(r)
if(s)q=H.qr}r.a=q
return r.a(a)},
mv:function(a){var s,r=a.y
if(!H.b8(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.mv(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qq:function(a){var s=this
if(a==null)return H.mv(s)
return H.M(v.typeUniverse,H.o8(a,s),null,s,null)},
qs:function(a){if(a==null)return!0
return this.z.b(a)},
qC:function(a){var s,r=this
if(a==null)return H.mv(r)
s=r.r
if(a instanceof P.C)return!!a[s]
return!!J.c2(a)[s]},
qp:function(a){var s,r=this
if(a==null){s=H.eb(r)
if(s)return a}else if(r.b(a))return a
H.nS(a,r)},
qr:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.nS(a,s)},
nS:function(a,b){throw H.c(H.pU(H.nz(a,H.o8(a,b),H.ar(b,null))))},
nz:function(a,b,c){var s=P.cg(a),r=H.ar(b==null?H.c5(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
pU:function(a){return new H.e_("TypeError: "+a)},
a9:function(a,b){return new H.e_("TypeError: "+H.nz(a,null,b))},
qA:function(a){return a!=null},
qj:function(a){if(a!=null)return a
throw H.c(H.a9(a,"Object"))},
qD:function(a){return!0},
ql:function(a){return a},
i4:function(a){return!0===a||!1===a},
nQ:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a9(a,"bool"))},
u3:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a9(a,"bool"))},
u2:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a9(a,"bool?"))},
u4:function(a){if(typeof a=="number")return a
throw H.c(H.a9(a,"double"))},
u6:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a9(a,"double"))},
u5:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a9(a,"double?"))},
lt:function(a){return typeof a=="number"&&Math.floor(a)===a},
ll:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a9(a,"int"))},
u8:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a9(a,"int"))},
u7:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a9(a,"int?"))},
qz:function(a){return typeof a=="number"},
u9:function(a){if(typeof a=="number")return a
throw H.c(H.a9(a,"num"))},
ub:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a9(a,"num"))},
ua:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a9(a,"num?"))},
qB:function(a){return typeof a=="string"},
qk:function(a){if(typeof a=="string")return a
throw H.c(H.a9(a,"String"))},
ud:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a9(a,"String"))},
uc:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a9(a,"String?"))},
r3:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ar(a[q],b)
return s},
nT:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.b(a5,j)
m=C.a.K(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.ar(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.ar(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.ar(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.ar(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.ar(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ar:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ar(a.z,b)
return s}if(l===7){r=a.z
s=H.ar(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.ar(a.z,b)+">"
if(l===9){p=H.r8(a.z)
o=a.Q
return o.length!==0?p+("<"+H.r3(o,b)+">"):p}if(l===11)return H.nT(a,b,null)
if(l===12)return H.nT(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.b(b,n)
return b[n]}return"?"},
r8:function(a){var s,r=H.og(a)
if(r!=null)return r
s="minified:"+a
return s},
nH:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
q3:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.mk(a,b,!1)
else if(typeof m=="number"){s=m
r=H.e2(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.e1(a,b,q)
n[b]=o
return o}else return m},
q1:function(a,b){return H.nO(a.tR,b)},
q0:function(a,b){return H.nO(a.eT,b)},
mk:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.nD(H.nB(a,null,b,c))
r.set(b,s)
return s},
hT:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.nD(H.nB(a,b,c,!0))
q.set(c,r)
return r},
q2:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.mh(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bu:function(a,b){b.a=H.qu
b.b=H.qv
return b},
e2:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ax(null,null)
s.y=b
s.cy=c
r=H.bu(a,s)
a.eC.set(c,r)
return r},
nG:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.pZ(a,b,r,c)
a.eC.set(r,s)
return s},
pZ:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b8(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ax(null,null)
q.y=6
q.z=b
q.cy=c
return H.bu(a,q)},
mj:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.pY(a,b,r,c)
a.eC.set(r,s)
return s},
pY:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b8(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.eb(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.eb(q.z))return q
else return H.nf(a,b)}}p=new H.ax(null,null)
p.y=7
p.z=b
p.cy=c
return H.bu(a,p)},
nF:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.pW(a,b,r,c)
a.eC.set(r,s)
return s},
pW:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b8(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.e1(a,"cj",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ax(null,null)
q.y=8
q.z=b
q.cy=c
return H.bu(a,q)},
q_:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ax(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bu(a,s)
a.eC.set(q,r)
return r},
hS:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
pV:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
e1:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hS(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ax(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bu(a,r)
a.eC.set(p,q)
return q},
mh:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hS(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ax(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bu(a,o)
a.eC.set(q,n)
return n},
nE:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hS(m)
if(j>0){s=l>0?",":""
r=H.hS(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.pV(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ax(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bu(a,o)
a.eC.set(q,r)
return r},
mi:function(a,b,c,d){var s,r=b.cy+("<"+H.hS(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.pX(a,b,c,r,d)
a.eC.set(r,s)
return s},
pX:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bv(a,b,r,0)
m=H.e9(a,c,r,0)
return H.mi(a,n,m,c!==m)}}l=new H.ax(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bu(a,l)},
nB:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nD:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.pO(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.nC(a,r,h,g,!1)
else if(q===46)r=H.nC(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bt(a.u,a.e,g.pop()))
break
case 94:g.push(H.q_(a.u,g.pop()))
break
case 35:g.push(H.e2(a.u,5,"#"))
break
case 64:g.push(H.e2(a.u,2,"@"))
break
case 126:g.push(H.e2(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.mg(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.e1(p,n,o))
else{m=H.bt(p,a.e,n)
switch(m.y){case 11:g.push(H.mi(p,m,o,a.n))
break
default:g.push(H.mh(p,m,o))
break}}break
case 38:H.pP(a,g)
break
case 42:p=a.u
g.push(H.nG(p,H.bt(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.mj(p,H.bt(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.nF(p,H.bt(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.hi()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
H.mg(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.nE(p,H.bt(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.mg(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.pR(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bt(a.u,a.e,i)},
pO:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
nC:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.nH(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.pv(o)+'"')
d.push(H.hT(s,o,n))}else d.push(p)
return m},
pP:function(a,b){var s=b.pop()
if(0===s){b.push(H.e2(a.u,1,"0&"))
return}if(1===s){b.push(H.e2(a.u,4,"1&"))
return}throw H.c(P.io("Unexpected extended operation "+H.r(s)))},
bt:function(a,b,c){if(typeof c=="string")return H.e1(a,c,a.sEA)
else if(typeof c=="number")return H.pQ(a,b,c)
else return c},
mg:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bt(a,b,c[s])},
pR:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bt(a,b,c[s])},
pQ:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.io("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.io("Bad index "+c+" for "+b.i(0)))},
M:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b8(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b8(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.M(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.M(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.M(a,b.z,c,d,e)
if(r===6)return H.M(a,b.z,c,d,e)
return r!==7}if(r===6)return H.M(a,b.z,c,d,e)
if(p===6){s=H.nf(a,d)
return H.M(a,b,c,s,e)}if(r===8){if(!H.M(a,b.z,c,d,e))return!1
return H.M(a,H.ne(a,b),c,d,e)}if(r===7){s=H.M(a,t.P,c,d,e)
return s&&H.M(a,b.z,c,d,e)}if(p===8){if(H.M(a,b,c,d.z,e))return!0
return H.M(a,b,c,H.ne(a,d),e)}if(p===7){s=H.M(a,b,c,t.P,e)
return s||H.M(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Y)return!0
if(p===12){if(b===t.M)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.M(a,k,c,j,e)||!H.M(a,j,e,k,c))return!1}return H.nW(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.nW(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.qy(a,b,c,d,e)}return!1},
nW:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.M(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.M(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.M(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.M(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.M(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
qy:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.M(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.nH(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.M(a,H.hT(a,b,l[p]),c,r[p],e))return!1
return!0},
eb:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b8(a))if(r!==7)if(!(r===6&&H.eb(a.z)))s=r===8&&H.eb(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ro:function(a){var s
if(!H.b8(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b8:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
nO:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ax:function ax(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
hi:function hi(){this.c=this.b=this.a=null},
hd:function hd(){},
e_:function e_(a){this.a=a},
o9:function(a){return t.d.b(a)||t.B.b(a)||t.cF.b(a)||t.I.b(a)||t.a1.b(a)||t.cg.b(a)||t.bj.b(a)},
og:function(a){return v.mangledGlobalNames[a]},
rv:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
mA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
lE:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.mz==null){H.rl()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.ko("Return interceptor for "+H.r(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.l2
if(o==null)o=$.l2=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.rr(a)
if(p!=null)return p
if(typeof a=="function")return C.a_
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){o=$.l2
if(o==null)o=$.l2=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
p7:function(a){if(a<0||a>4294967295)throw H.c(P.a5(a,0,4294967295,"length",null))
return J.p8(new Array(a))},
lX:function(a){if(a<0)throw H.c(P.bc("Length must be a non-negative integer: "+a))
return new Array(a)},
eE:function(a){return new Array(a)},
p8:function(a){return J.lY(a)},
lY:function(a){a.fixed$length=Array
return a},
p9:function(a,b){return J.oI(a,b)},
c2:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d5.prototype
return J.eG.prototype}if(typeof a=="string")return J.bM.prototype
if(a==null)return J.cn.prototype
if(typeof a=="boolean")return J.eF.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
return a}if(a instanceof P.C)return a
return J.lE(a)},
c3:function(a){if(typeof a=="string")return J.bM.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
return a}if(a instanceof P.C)return a
return J.lE(a)},
i5:function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
return a}if(a instanceof P.C)return a
return J.lE(a)},
rj:function(a){if(typeof a=="number")return J.co.prototype
if(typeof a=="string")return J.bM.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.cA.prototype
return a},
c4:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
return a}if(a instanceof P.C)return a
return J.lE(a)},
a6:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.c2(a).l(a,b)},
mN:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oa(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c3(a).h(a,b)},
lS:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.oa(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.i5(a).k(a,b,c)},
oG:function(a,b,c){return J.c4(a).iV(a,b,c)},
oH:function(a,b,c,d){return J.c4(a).jm(a,b,c,d)},
oI:function(a,b){return J.rj(a).ab(a,b)},
ik:function(a,b){return J.i5(a).G(a,b)},
ee:function(a,b){return J.i5(a).B(a,b)},
mO:function(a){return J.c4(a).gef(a)},
oJ:function(a){return J.c4(a).gej(a)},
ef:function(a){return J.c2(a).gu(a)},
at:function(a){return J.i5(a).gT(a)},
aU:function(a){return J.c3(a).gj(a)},
oK:function(a,b){return J.i5(a).eN(a,b)},
oL:function(a,b){return J.c2(a).eT(a,b)},
oM:function(a,b){return J.c4(a).kf(a,b)},
eg:function(a){return J.c2(a).i(a)},
a:function a(){},
eF:function eF(){},
cn:function cn(){},
bf:function bf(){},
f5:function f5(){},
cA:function cA(){},
aZ:function aZ(){},
aJ:function aJ(){},
eI:function eI(){},
af:function af(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
co:function co(){},
d5:function d5(){},
eG:function eG(){},
bM:function bM(){}},P={
pH:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.ra()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bw(new P.kM(q),1)).observe(s,{childList:true})
return new P.kL(q,s,r)}else if(self.setImmediate!=null)return P.rb()
return P.rc()},
pI:function(a){self.scheduleImmediate(H.bw(new P.kN(a),0))},
pJ:function(a){self.setImmediate(H.bw(new P.kO(a),0))},
pK:function(a){P.m9(C.j,a)},
m9:function(a,b){var s=C.c.a3(a.a,1000)
return P.pS(s<0?0:s,b)},
nj:function(a,b){var s=C.c.a3(a.a,1000)
return P.pT(s<0?0:s,b)},
pS:function(a,b){var s=new P.dZ()
s.fS(a,b)
return s},
pT:function(a,b){var s=new P.dZ()
s.fT(a,b)
return s},
u0:function(a){return new P.cF(a,1)},
pL:function(){return C.ab},
pM:function(a){return new P.cF(a,3)},
qF:function(a){return new P.dW(a)},
ip:function(a,b){var s=H.lB(a,"error",t.K)
return new P.ek(s,b==null?P.mP(a):b)},
mP:function(a){var s
if(t.C.b(a)){s=a.gbP()
if(s!=null)return s}return C.T},
me:function(a,b){var s,r
for(;s=a.a,s===2;)a=a.c
if(s>=4){r=b.cw()
b.a=a.a
b.c=a.c
P.dJ(b,r)}else{r=b.c
b.a=2
b.c=a
a.dU(r)}},
dJ:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e={},d=e.a=a
for(s=t.c;!0;){r={}
q=d.a===8
if(b==null){if(q){s=d.c
P.lw(f,f,d.b,s.a,s.b)}return}r.a=b
p=b.a
for(d=b;p!=null;d=p,p=o){d.a=null
P.dJ(e.a,d)
r.a=p
o=p.a}n=e.a
m=n.c
r.b=q
r.c=m
l=!q
if(l){k=d.c
k=(k&1)!==0||(k&15)===8}else k=!0
if(k){j=d.b.b
if(q){k=n.b===j
k=!(k||k)}else k=!1
if(k){P.lw(f,f,n.b,m.a,m.b)
return}i=$.N
if(i!==j)$.N=j
else i=f
d=d.c
if((d&15)===8)new P.l_(r,e,q).$0()
else if(l){if((d&1)!==0)new P.kZ(r,m).$0()}else if((d&2)!==0)new P.kY(e,r).$0()
if(i!=null)$.N=i
d=r.c
if(s.b(d)){n=r.a.$ti
n=n.a1("cj<2>").b(d)||!n.Q[1].b(d)}else n=!1
if(n){h=r.a.b
if(d.a>=4){g=h.c
h.c=null
b=h.bU(g)
h.a=d.a
h.c=d.c
e.a=d
continue}else P.me(d,h)
return}}h=r.a.b
g=h.c
h.c=null
b=h.bU(g)
d=r.b
n=r.c
if(!d){h.a=4
h.c=n}else{h.a=8
h.c=n}e.a=h
d=h}},
r1:function(a,b){if(t.l.b(a))return a
if(t.b6.b(a))return a
throw H.c(P.oO(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
r0:function(){var s,r
for(s=$.cK;s!=null;s=$.cK){$.e8=null
r=s.b
$.cK=r
if(r==null)$.e7=null
s.a.$0()}},
r5:function(){$.mt=!0
try{P.r0()}finally{$.e8=null
$.mt=!1
if($.cK!=null)$.mK().$1(P.o3())}},
o_:function(a){var s=new P.h0(a),r=$.e7
if(r==null){$.cK=$.e7=s
if(!$.mt)$.mK().$1(P.o3())}else $.e7=r.b=s},
r4:function(a){var s,r,q,p=$.cK
if(p==null){P.o_(a)
$.e8=$.e7
return}s=new P.h0(a)
r=$.e8
if(r==null){s.b=p
$.cK=$.e8=s}else{q=r.b
s.b=q
$.e8=r.b=s
if(q==null)$.e7=s}},
ry:function(a){var s=null,r=$.N
if(C.e===r){P.cL(s,s,C.e,a)
return}P.cL(s,s,r,r.cK(a))},
m8:function(a,b){var s=$.N
if(s===C.e)return P.m9(a,b)
return P.m9(a,s.cK(b))},
k9:function(a,b){var s=$.N
if(s===C.e)return P.nj(a,b)
return P.nj(a,s.ec(b,t.ae))},
lw:function(a,b,c,d,e){P.r4(new P.lx(d,e))},
nX:function(a,b,c,d){var s,r=$.N
if(r===c)return d.$0()
$.N=c
s=r
try{r=d.$0()
return r}finally{$.N=s}},
nY:function(a,b,c,d,e){var s,r=$.N
if(r===c)return d.$1(e)
$.N=c
s=r
try{r=d.$1(e)
return r}finally{$.N=s}},
r2:function(a,b,c,d,e,f){var s,r=$.N
if(r===c)return d.$2(e,f)
$.N=c
s=r
try{r=d.$2(e,f)
return r}finally{$.N=s}},
cL:function(a,b,c,d){if(C.e!==c)d=c.cK(d)
P.o_(d)},
kM:function kM(a){this.a=a},
kL:function kL(a,b,c){this.a=a
this.b=b
this.c=c},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
dZ:function dZ(){this.c=0},
le:function le(a,b){this.a=a
this.b=b},
ld:function ld(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cF:function cF(a,b){this.a=a
this.b=b},
cH:function cH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dW:function dW(a){this.a=a},
ek:function ek(a,b){this.a=a
this.b=b},
h4:function h4(){},
dH:function dH(a,b){this.a=a
this.$ti=b},
hj:function hj(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aT:function aT(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
kQ:function kQ(a,b){this.a=a
this.b=b},
kX:function kX(a,b){this.a=a
this.b=b},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a,b,c){this.a=a
this.b=b
this.c=c},
kS:function kS(a,b){this.a=a
this.b=b},
kW:function kW(a,b){this.a=a
this.b=b},
kR:function kR(a,b,c){this.a=a
this.b=b
this.c=c},
l_:function l_(a,b,c){this.a=a
this.b=b
this.c=c},
l0:function l0(a){this.a=a},
kZ:function kZ(a,b){this.a=a
this.b=b},
kY:function kY(a,b){this.a=a
this.b=b},
h0:function h0(a){this.a=a
this.b=null},
fr:function fr(){},
fs:function fs(){},
lk:function lk(){},
lx:function lx(a,b){this.a=a
this.b=b},
l6:function l6(){},
l7:function l7(a,b){this.a=a
this.b=b},
l8:function l8(a,b,c){this.a=a
this.b=b
this.c=c},
mX:function(a,b,c){return H.ri(a,new H.Q(b.a1("@<0>").ce(c).a1("Q<1,2>")))},
L:function(a,b){return new H.Q(a.a1("@<0>").ce(b).a1("Q<1,2>"))},
mY:function(a){return new P.dK(a.a1("dK<0>"))},
mf:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
pN:function(a,b){var s=new P.dL(a,b)
s.c=a.e
return s},
p5:function(a,b,c){var s,r
if(P.mu(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.ah.push(a)
try{P.qE(a,s)}finally{if(0>=$.ah.length)return H.b($.ah,-1)
$.ah.pop()}r=P.nh(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
lW:function(a,b,c){var s,r
if(P.mu(a))return b+"..."+c
s=new P.X(b)
$.ah.push(a)
try{r=s
r.a=P.nh(r.a,a,", ")}finally{if(0>=$.ah.length)return H.b($.ah,-1)
$.ah.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mu:function(a){var s,r
for(s=$.ah.length,r=0;r<s;++r)if(a===$.ah[r])return!0
return!1},
qE:function(a,b){var s,r,q,p,o,n,m,l=a.gT(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.r(l.gE(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.b(b,-1)
r=b.pop()
if(0>=b.length)return H.b(b,-1)
q=b.pop()}else{p=l.gE(l);++j
if(!l.t()){if(j<=4){b.push(H.r(p))
return}r=H.r(p)
if(0>=b.length)return H.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gE(l);++j
for(;l.t();p=o,o=n){n=l.gE(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.r(p)
r=H.r(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
m1:function(a){var s,r={}
if(P.mu(a))return"{...}"
s=new P.X("")
try{$.ah.push(a)
s.a+="{"
r.a=!0
J.ee(a,new P.j8(r,s))
s.a+="}"}finally{if(0>=$.ah.length)return H.b($.ah,-1)
$.ah.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dK:function dK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
l4:function l4(a){this.a=a
this.c=this.b=null},
dL:function dL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d4:function d4(){},
dc:function dc(){},
p:function p(){},
df:function df(){},
j8:function j8(a,b){this.a=a
this.b=b},
a0:function a0(){},
hU:function hU(){},
dg:function dg(){},
bq:function bq(a,b){this.a=a
this.$ti=b},
fh:function fh(){},
dS:function dS(){},
dM:function dM(){},
e3:function e3(){},
e5:function e5(){},
pF:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.pG(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
pG:function(a,b,c,d){var s=a?$.oA():$.oz()
if(s==null)return null
if(0===c&&d===b.length)return P.np(s,b)
return P.np(s,b.subarray(c,P.bn(c,d,b.length)))},
np:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ad(r)}return null},
mQ:function(a,b,c,d,e,f){if(C.c.b8(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
qi:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
qh:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.c3(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
ky:function ky(){},
kx:function kx(){},
iw:function iw(){},
ix:function ix(){},
ep:function ep(){},
es:function es(){},
iR:function iR(){},
kv:function kv(){},
kz:function kz(){},
lj:function lj(a){this.b=0
this.c=a},
kw:function kw(a){this.a=a},
li:function li(a){this.a=a
this.b=16
this.c=0},
ea:function(a,b){var s=H.m4(a,b)
if(s!=null)return s
throw H.c(P.a7(a,null,null))},
p3:function(a){if(a instanceof H.bE)return a.i(0)
return"Instance of '"+H.ds(a)+"'"},
aw:function(a,b,c){var s,r=c?J.lX(a):J.p7(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
cp:function(a,b){var s,r=[]
for(s=J.at(a);s.t();)r.push(s.gE(s))
if(b)return r
return J.lY(r)},
mZ:function(a,b){var s,r,q=J.lX(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.b(q,s)
q[s]=r}return q},
fu:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bn(b,c,r)
return H.n8(b>0||c<r?s.slice(b,c):s)}if(t.cr.b(a))return H.pr(a,b,P.bn(b,c,a.length))
return P.pA(a,b,c)},
pA:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a5(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a5(c,b,a.length,o,o))
r=J.at(a)
for(q=0;q<b;++q)if(!r.t())throw H.c(P.a5(b,0,q,o,o))
p=[]
if(s)for(;r.t();)p.push(r.gE(r))
else for(q=b;q<c;++q){if(!r.t())throw H.c(P.a5(c,b,q,o,o))
p.push(r.gE(r))}return H.n8(p)},
pt:function(a){return new H.eH(a,H.pa(a,!1,!0,!1,!1,!1))},
nh:function(a,b,c){var s=J.at(b)
if(!s.t())return a
if(c.length===0){do a+=H.r(s.gE(s))
while(s.t())}else{a+=H.r(s.gE(s))
for(;s.t();)a=a+c+H.r(s.gE(s))}return a},
n5:function(a,b,c,d){return new P.f_(a,b,c,d)},
nm:function(){var s=H.pi()
if(s!=null)return P.pE(s)
throw H.c(P.A("'Uri.base' is not supported"))},
lh:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.f){s=$.oE().b
s=s.test(b)}else s=!1
if(s)return b
r=c.gjG().cO(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.b(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.b4(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
p0:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
p1:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ev:function(a){if(a>=10)return""+a
return"0"+a},
mV:function(a){return new P.aH(1000*a)},
cg:function(a){if(typeof a=="number"||H.i4(a)||null==a)return J.eg(a)
if(typeof a=="string")return JSON.stringify(a)
return P.p3(a)},
io:function(a){return new P.ej(a)},
bc:function(a){return new P.aF(!1,null,null,a)},
oO:function(a,b,c){return new P.aF(!0,a,b,c)},
ps:function(a){var s=null
return new P.cw(s,s,!1,s,s,a)},
fa:function(a,b){return new P.cw(null,null,!0,a,b,"Value not in range")},
a5:function(a,b,c,d,e){return new P.cw(b,c,!0,a,d,"Invalid value")},
bn:function(a,b,c){if(0>a||a>c)throw H.c(P.a5(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.a5(b,a,c,"end",null))
return b}return c},
n9:function(a,b){if(a<0)throw H.c(P.a5(a,0,null,b,null))
return a},
K:function(a,b,c,d,e){var s=e==null?J.aU(b):e
return new P.eC(s,!0,a,c,"Index out of range")},
A:function(a){return new P.fT(a)},
ko:function(a){return new P.fQ(a)},
m7:function(a){return new P.dz(a)},
be:function(a){return new P.er(a)},
h:function(a){return new P.hf(a)},
a7:function(a,b,c){return new P.iZ(a,b,c)},
mC:function(a){H.rv(a)},
pE:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.nl(a4<a4?C.a.q(a5,0,a4):a5,5,a3).gfg()
else if(s===32)return P.nl(C.a.q(a5,5,a4),0,a3).gfg()}r=P.aw(8,0,!1)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.nZ(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.nZ(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
if(k)if(p>q+3){j=a3
k=!1}else{i=o>0
if(i&&o+1===n){j=a3
k=!1}else{if(!(m<a4&&m===n+2&&C.a.ad(a5,"..",n)))h=m>n+2&&C.a.ad(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.ad(a5,"file",0)){if(p<=0){if(!C.a.ad(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.q(a5,n,a4)
q-=0
i=s-0
m+=i
l+=i
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=C.a.bw(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.ad(a5,"http",0)){if(i&&o+3===n&&C.a.ad(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.bw(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.ad(a5,"https",0)){if(i&&o+4===n&&C.a.ad(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.bw(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.q(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.hB(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.qb(a5,0,q)
else{if(q===0)P.cI(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.qc(a5,d,p-1):""
b=P.q8(a5,p,o,!1)
i=o+1
if(i<n){a=H.m4(C.a.q(a5,i,n),a3)
a0=P.qa(a==null?H.f(P.a7("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.q9(a5,n,m,a3,j,b!=null)
a2=m<l?P.mm(a5,m+1,l,a3):a3
return new P.c0(j,c,b,a0,a1,a2,l<a4?P.q7(a5,l+1,a4):a3)},
no:function(a){var s=t.N
return C.b.jJ(a.split("&"),P.L(s,s),new P.kt(C.f))},
pD:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.kq(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.X(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.ea(C.a.q(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.b(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.ea(C.a.q(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.b(j,q)
j[q]=o
return j},
nn:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.kr(a),c=new P.ks(d,a)
if(a.length<2)d.$1("address is too short")
s=[]
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.X(a,r)
if(n===58){if(r===b){++r
if(C.a.X(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gb4(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.pD(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.b(j,h)
j[h]=0
e=h+1
if(e>=16)return H.b(j,e)
j[e]=0
h+=2}else{e=C.c.bm(g,8)
if(h<0||h>=16)return H.b(j,h)
j[h]=e
e=h+1
if(e>=16)return H.b(j,e)
j[e]=g&255
h+=2}}return j},
nI:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cI:function(a,b,c){throw H.c(P.a7(c,a,b))},
qa:function(a,b){if(a!=null&&a===P.nI(b))return null
return a},
q8:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.X(a,b)===91){s=c-1
if(C.a.X(a,s)!==93)P.cI(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.q5(a,r,s)
if(q<s){p=q+1
o=P.nN(a,C.a.ad(a,"25",p)?q+3:p,s,"%25")}else o=""
P.nn(a,r,q)
return C.a.q(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.X(a,n)===58){q=C.a.c0(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.nN(a,C.a.ad(a,"25",p)?q+3:p,c,"%25")}else o=""
P.nn(a,b,q)
return"["+C.a.q(a,b,q)+o+"]"}return P.qe(a,b,c)},
q5:function(a,b,c){var s=C.a.c0(a,"%",b)
return s>=b&&s<c?s:c},
nN:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.X(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.X(a,s)
if(p===37){o=P.mn(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.X("")
m=i.a+=C.a.q(a,r,s)
if(n)o=C.a.q(a,s,s+3)
else if(o==="%")P.cI(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.X("")
if(r<s){i.a+=C.a.q(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.X(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.q(a,r,s)
if(i==null){i=new P.X("")
n=i}else n=i
n.a+=j
n.a+=P.ml(p)
s+=k
r=s}}}if(i==null)return C.a.q(a,b,c)
if(r<c)i.a+=C.a.q(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
qe:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.X(a,s)
if(o===37){n=P.mn(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.X("")
l=C.a.q(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.q(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.b(C.x,m)
m=(C.x[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.X("")
if(r<s){q.a+=C.a.q(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.b(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.cI(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.X(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.q(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.X("")
m=q}else m=q
m.a+=l
m.a+=P.ml(o)
s+=j
r=s}}}}if(q==null)return C.a.q(a,b,c)
if(r<c){l=C.a.q(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
qb:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.nK(C.a.D(a,b)))P.cI(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.b(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cI(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.q(a,b,c)
return P.q4(r?a.toLowerCase():a)},
q4:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
qc:function(a,b,c){return P.e4(a,b,c,C.a2,!1)},
q9:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.e4(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.ac(s,"/"))s="/"+s
return P.qd(s,e,f)},
qd:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.ac(a,"/"))return P.qf(a,!s||c)
return P.qg(a)},
mm:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bc("Both query and queryParameters specified"))
return P.e4(a,b,c,C.l,!0)}if(d==null)return null
s=new P.X("")
r.a=""
d.B(0,new P.lf(new P.lg(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
q7:function(a,b,c){return P.e4(a,b,c,C.l,!0)},
mn:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.X(a,b+1)
r=C.a.X(a,n)
q=H.lF(s)
p=H.lF(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.bm(o,4)
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.b4(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.q(a,b,b+3).toUpperCase()
return null},
ml:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.D(k,a>>>4)
s[2]=C.a.D(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.j2(a,6*q)&63|r
if(o>=p)return H.b(s,o)
s[o]=37
m=o+1
l=C.a.D(k,n>>>4)
if(m>=p)return H.b(s,m)
s[m]=l
l=o+2
m=C.a.D(k,n&15)
if(l>=p)return H.b(s,l)
s[l]=m
o+=3}}return P.fu(s,0,null)},
e4:function(a,b,c,d,e){var s=P.nM(a,b,c,d,e)
return s==null?C.a.q(a,b,c):s},
nM:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.X(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.b(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.mn(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.b(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cI(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.X(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.ml(o)}}if(p==null){p=new P.X("")
n=p}else n=p
n.a+=C.a.q(a,q,r)
n.a+=H.r(m)
if(typeof l!=="number")return H.my(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.q(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
nL:function(a){if(C.a.ac(a,"."))return!0
return C.a.eH(a,"/.")!==-1},
qg:function(a){var s,r,q,p,o,n,m
if(!P.nL(a))return a
s=[]
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.a6(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.b(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.p(s,"/")},
qf:function(a,b){var s,r,q,p,o,n
if(!P.nL(a))return!b?P.nJ(a):a
s=[]
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gb4(s)!==".."){if(0>=s.length)return H.b(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.b(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gb4(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.b(s,0)
r=P.nJ(s[0])
if(0>=s.length)return H.b(s,0)
s[0]=r}return C.b.p(s,"/")},
nJ:function(a){var s,r,q,p=a.length
if(p>=2&&P.nK(C.a.D(a,0)))for(s=1;s<p;++s){r=C.a.D(a,s)
if(r===58)return C.a.q(a,0,s)+"%3A"+C.a.aC(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.b(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
q6:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bc("Invalid URL encoding"))}}return s},
mo:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.D(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.f!==d)q=!1
else q=!0
if(q)return C.a.q(a,b,c)
else p=new H.O(C.a.q(a,b,c))}else{p=[]
for(q=a.length,o=b;o<c;++o){r=C.a.D(a,o)
if(r>127)throw H.c(P.bc("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bc("Truncated URI"))
p.push(P.q6(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.aa.cO(p)},
nK:function(a){var s=a|32
return 97<=s&&s<=122},
nl:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=[b-1]
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a7(k,a,r))}}if(q<0&&r>b)throw H.c(P.a7(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gb4(j)
if(p!==44||r!==n+7||!C.a.ad(a,"base64",n+1))throw H.c(P.a7("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.J.jT(0,a,m,s)
else{l=P.nM(a,m,s,C.l,!0)
if(l!=null)a=C.a.bw(a,m,s,l)}return new P.kp(a,j,c)},
qo:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=J.eE(22)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.lq(h)
q=new P.lr()
p=new P.ls()
o=r.$2(0,225)
q.$3(o,n,1)
q.$3(o,m,14)
q.$3(o,l,34)
q.$3(o,k,3)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(14,225)
q.$3(o,n,1)
q.$3(o,m,15)
q.$3(o,l,34)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(15,225)
q.$3(o,n,1)
q.$3(o,"%",225)
q.$3(o,l,34)
q.$3(o,k,9)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(1,225)
q.$3(o,n,1)
q.$3(o,l,34)
q.$3(o,k,10)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(2,235)
q.$3(o,n,139)
q.$3(o,k,131)
q.$3(o,m,146)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(3,235)
q.$3(o,n,11)
q.$3(o,k,68)
q.$3(o,m,18)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(4,229)
q.$3(o,n,5)
p.$3(o,"AZ",229)
q.$3(o,l,102)
q.$3(o,"@",68)
q.$3(o,"[",232)
q.$3(o,k,138)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(5,229)
q.$3(o,n,5)
p.$3(o,"AZ",229)
q.$3(o,l,102)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(6,231)
p.$3(o,"19",7)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(7,231)
p.$3(o,"09",7)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,172)
q.$3(o,i,205)
q.$3(r.$2(8,8),"]",5)
o=r.$2(9,235)
q.$3(o,n,11)
q.$3(o,m,16)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(16,235)
q.$3(o,n,11)
q.$3(o,m,17)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(17,235)
q.$3(o,n,11)
q.$3(o,k,9)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(10,235)
q.$3(o,n,11)
q.$3(o,m,18)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(18,235)
q.$3(o,n,11)
q.$3(o,m,19)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(19,235)
q.$3(o,n,11)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(11,235)
q.$3(o,n,11)
q.$3(o,k,10)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(12,236)
q.$3(o,n,12)
q.$3(o,j,12)
q.$3(o,i,205)
o=r.$2(13,237)
q.$3(o,n,13)
q.$3(o,j,13)
p.$3(r.$2(20,245),"az",21)
o=r.$2(21,245)
p.$3(o,"az",21)
p.$3(o,"09",21)
q.$3(o,"+-.",21)
return h},
nZ:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.oF()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.b(m,d)
q=m[d]
p=C.a.D(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.b(e,n)
e[n]=r}return d},
jt:function jt(a,b){this.a=a
this.b=b},
P:function P(a,b){this.a=a
this.b=b},
aH:function aH(a){this.a=a},
iO:function iO(){},
iP:function iP(){},
E:function E(){},
ej:function ej(a){this.a=a},
fE:function fE(){},
f0:function f0(){},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cw:function cw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eC:function eC(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fT:function fT(a){this.a=a},
fQ:function fQ(a){this.a=a},
dz:function dz(a){this.a=a},
er:function er(a){this.a=a},
f3:function f3(){},
dx:function dx(){},
eu:function eu(a){this.a=a},
hf:function hf(a){this.a=a},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(){},
eD:function eD(){},
W:function W(){},
C:function C(){},
hK:function hK(){},
X:function X(a){this.a=a},
kt:function kt(a){this.a=a},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
ks:function ks(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
lg:function lg(a,b){this.a=a
this.b=b},
lf:function lf(a){this.a=a},
kp:function kp(a,b,c){this.a=a
this.b=b
this.c=c},
lq:function lq(a){this.a=a},
lr:function lr(){},
ls:function ls(){},
hB:function hB(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
h7:function h7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
rf:function(a){var s,r,q,p
if(t.I.b(a)){s=J.oJ(a)
r=s.constructor===Array
r.toString
if(r){r=typeof CanvasPixelArray!=="undefined"
r.toString
if(r){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}}return a}r=a.data
r.toString
q=a.height
q.toString
p=a.width
p.toString
return new P.e0(r,q,p)},
re:function(a){if(a instanceof P.e0)return{data:a.a,height:a.b,width:a.c}
return a},
bx:function(a){var s,r,q,p,o
if(a==null)return null
s=P.L(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
nR:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.i4(a))return a
if(t.f.b(a))return P.o4(a)
if(t.b.b(a)){s=[]
J.ee(a,new P.lm(s))
a=s}return a},
o4:function(a){var s={}
J.ee(a,new P.lC(s))
return s},
l9:function l9(){},
lb:function lb(a,b){this.a=a
this.b=b},
lc:function lc(a,b){this.a=a
this.b=b},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
lm:function lm(a){this.a=a},
lC:function lC(a){this.a=a},
la:function la(a,b){this.a=a
this.b=b},
ez:function ez(a,b){this.a=a
this.b=b},
iX:function iX(){},
iY:function iY(){},
d8:function d8(){},
qm:function(a,b,c,d){var s,r
if(b){s=[c]
C.b.af(s,d)
d=s}r=P.cp(J.oK(d,P.rp()),!0)
return P.ln(H.ph(a,r,null))},
mq:function(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){H.ad(s)}return!1},
nV:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
ln:function(a){if(a==null||typeof a=="string"||typeof a=="number"||H.i4(a))return a
if(a instanceof P.b_)return a.a
if(H.o9(a))return a
if(t.Q.b(a))return a
if(a instanceof P.P)return H.bY(a)
if(t.Y.b(a))return P.nU(a,"$dart_jsFunction",new P.lo())
return P.nU(a,"_$dart_jsObject",new P.lp($.mM()))},
nU:function(a,b,c){var s=P.nV(a,b)
if(s==null){s=c.$1(a)
P.mq(a,b,s)}return s},
mp:function(a){var s,r
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.o9(a))return a
else if(a instanceof Object&&t.Q.b(a))return a
else if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)H.f(P.bc("DateTime is outside valid range: "+H.r(s)))
H.lB(!1,"isUtc",t.w)
return new P.P(s,!1)}else if(a.constructor===$.mM())return a.o
else return P.o0(a)},
o0:function(a){if(typeof a=="function")return P.mr(a,$.lR(),new P.ly())
if(a instanceof Array)return P.mr(a,$.mL(),new P.lz())
return P.mr(a,$.mL(),new P.lA())},
mr:function(a,b,c){var s=P.nV(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
P.mq(a,b,s)}return s},
lo:function lo(){},
lp:function lp(a){this.a=a},
ly:function ly(){},
lz:function lz(){},
lA:function lA(){},
b_:function b_(a){this.a=a},
d6:function d6(a){this.a=a},
bN:function bN(a){this.a=a},
cG:function cG(){},
rw:function(a,b){var s=new P.aT($.N,b.a1("aT<0>")),r=new P.dH(s,b.a1("dH<0>"))
a.then(H.bw(new P.lL(r),1),H.bw(new P.lM(r),1))
return s},
ju:function ju(a){this.a=a},
lL:function lL(a){this.a=a},
lM:function lM(a){this.a=a},
l1:function l1(){},
hz:function hz(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bh:function bh(){},
eK:function eK(){},
bk:function bk(){},
f1:function f1(){},
jz:function jz(){},
ft:function ft(){},
m:function m(){},
bp:function bp(){},
fC:function fC(){},
hn:function hn(){},
ho:function ho(){},
hv:function hv(){},
hw:function hw(){},
hI:function hI(){},
hJ:function hJ(){},
hQ:function hQ(){},
hR:function hR(){},
is:function is(){},
el:function el(){},
iv:function iv(a){this.a=a},
em:function em(){},
bd:function bd(){},
f2:function f2(){},
h1:function h1(){},
cx:function cx(){},
fm:function fm(){},
hF:function hF(){},
hG:function hG(){}},W={
oN:function(){var s=document.createElement("a")
s.toString
return s},
oP:function(a){var s=new Audio(a)
s.toString
return s},
lT:function(){var s=document.createElement("canvas")
s.toString
return s},
iQ:function(a){return"wheel"},
l3:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
nA:function(a,b,c,d){var s=W.l3(W.l3(W.l3(W.l3(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
R:function(a,b,c,d){var s=W.o1(new W.kP(c),t.B)
if(s!=null&&!0)J.oH(a,b,s,!1)
return new W.he(a,b,s,!1)},
o1:function(a,b){var s=$.N
if(s===C.e)return a
return s.ec(a,b)},
n:function n(){},
il:function il(){},
eh:function eh(){},
ei:function ei(){},
c8:function c8(){},
bC:function bC(){},
bD:function bD(){},
cS:function cS(){},
aG:function aG(){},
iH:function iH(){},
F:function F(){},
cW:function cW(){},
iI:function iI(){},
av:function av(){},
aW:function aW(){},
iJ:function iJ(){},
iK:function iK(){},
iL:function iL(){},
iM:function iM(){},
cY:function cY(){},
cZ:function cZ(){},
ew:function ew(){},
iN:function iN(){},
h3:function h3(a,b){this.a=a
this.b=b},
G:function G(){},
j:function j(){},
d:function d(){},
ak:function ak(){},
ci:function ci(){},
ey:function ey(){},
eA:function eA(){},
aI:function aI(){},
j1:function j1(){},
bJ:function bJ(){},
bK:function bK(){},
cl:function cl(){},
bO:function bO(){},
j6:function j6(){},
bS:function bS(){},
jp:function jp(){},
cr:function cr(){},
eQ:function eQ(){},
jq:function jq(a){this.a=a},
eR:function eR(){},
jr:function jr(a){this.a=a},
aM:function aM(){},
eS:function eS(){},
an:function an(){},
h2:function h2(a){this.a=a},
w:function w(){},
dp:function dp(){},
aN:function aN(){},
f8:function f8(){},
fe:function fe(){},
jL:function jL(a){this.a=a},
fg:function fg(){},
ay:function ay(){},
fk:function fk(){},
aO:function aO(){},
fl:function fl(){},
aP:function aP(){},
fq:function fq(){},
jU:function jU(a){this.a=a},
ao:function ao(){},
bo:function bo(){},
az:function az(){},
ag:function ag(){},
fw:function fw(){},
fx:function fx(){},
k7:function k7(){},
aQ:function aQ(){},
c_:function c_(){},
fB:function fB(){},
kc:function kc(){},
b6:function b6(){},
ku:function ku(){},
fW:function fW(){},
br:function br(){},
bs:function bs(){},
aS:function aS(){},
h5:function h5(){},
dI:function dI(){},
hk:function hk(){},
dN:function dN(){},
hE:function hE(){},
hL:function hL(){},
lV:function lV(a,b){this.a=a
this.$ti=b},
he:function he(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
kP:function kP(a){this.a=a},
md:function md(a){this.$ti=a},
J:function J(){},
d2:function d2(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
h6:function h6(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hg:function hg(){},
hh:function hh(){},
hl:function hl(){},
hm:function hm(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hx:function hx(){},
hy:function hy(){},
hA:function hA(){},
dT:function dT(){},
dU:function dU(){},
hC:function hC(){},
hD:function hD(){},
hH:function hH(){},
hM:function hM(){},
hN:function hN(){},
dX:function dX(){},
dY:function dY(){},
hO:function hO(){},
hP:function hP(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){}},L={
pd:function(a){var s,r,q,p,o=P.aw(256,0,!1),n=P.aw(256,0,!1)
for(s=0;s<256;++s)n[s]=s
r=P.ea("6364136223846793005",null)
q=P.ea("1442695040888963407",null)
a=C.c.dc(C.c.dc(C.c.dc(a*r+q,64)*r+q,64)*r+q,64)
for(s=255;s>=0;--s){a=((a*r+q&-1)>>>0)-0
p=C.c.b8(a+31,s+1)
if(p>=256)return H.b(n,p)
o[s]=n[p]
n[p]=n[s]}return new L.jw(o)},
jw:function jw(a){this.a=a},
fn:function fn(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
fA:function fA(a,b){this.b=a
this.c=b},
ka:function ka(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
kd:function kd(a,b){this.b=a
this.c=!1
this.a=b}},B={
a1:function(a,b){return new B.bl(a,b)},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bl:function bl(a,b){this.a=a
this.b=b},
oR:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
oQ:function(a,b){if(a===b)return!1
if(b===0)return!0
if(a===1)return b>=200&&b<=205
if(b===1)return!(a>=200&&a<=205)
return!(a>=200&&a<=205)&&b>=200&&b<=205},
mT:function(a){var s=new B.iD(a,new Uint8Array(12288),[])
s.fF(a)
return s},
rs:function(){var s,r=V.pw("3Dart Craft")
r.Z(["This example is in development and may still have a few issues and glitches."])
s=W.lT()
s.className="pageLargeCanvas"
s.id="targetCanvas"
r.a.appendChild(s).toString
r.jl(["buttons"])
r.cG(1,"About")
r.Z(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ","This example has no server backing it so none of the changes are persisted. It would take very little ","to turn this into a simple online game."])
r.Z(["\xab[Back to Examples List|../../]"])
r.cG(1,"Controls")
r.Z(["\u2022 _Currently there are no controls for mobile browsers_"])
r.Z(["\u2022 *Esc* to release the mouse capture"])
r.Z(["\u2022 *W* or *Up arrow* to move forward"])
r.Z(["\u2022 *S* or *Down arrow* to move backward"])
r.Z(["\u2022 *A* or *Left arrow* to strife left"])
r.Z(["\u2022 *D* or *Right arrow* to strife right"])
r.Z(["\u2022 *Space bar* to jump"])
r.Z(["\u2022 *Tab* cycles the block selected which can be placed"])
r.Z(["\u2022 *Shift-Tab* cycles the selection in the reverse direction"])
r.Z(["\u2022 *Left click* or *Q* removes the currently highlighted block"])
r.Z(["\u2022 *Right click* or *E* places the selected block on the highlighted block"])
r.Z(["\u2022 *O* to return the starting location"])
r.cG(1,"Help wanted")
r.Z(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ","check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."])
r.Z(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."])
P.m8(C.j,B.rt())},
rz:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=document,d0=c9.getElementById("targetCanvas")
if(d0==null)H.f(P.h("Failed to find an element with the identifier, targetCanvas."))
s=E.pC(d0,!0,!0,!0,!1)
r=t.S
q=new B.jn(s,P.L(r,t.u),P.L(r,t.aH),[])
p=new V.S(1,1,1)
o=V.cv()
o=U.bG(V.n1(o,V.mc(),o.ap(new V.q(0.5,-1,0.2))))
n=new D.cX(new V.S(1,1,1),V.mc(),V.mb(),V.nu())
m=n.a
n.a=o
o.gn().m(0,n.ghV())
n.aU(new D.B("mover",m,n.a))
if(!n.b.l(0,p)){m=n.b
n.b=p
n.aU(new D.B("color",m,p))}q.e=n
l=q.H(q.C("boundary"),!1)
k=q.H(q.C("brick"),!1)
j=q.H(q.C("dirt"),!1)
i=q.H(q.C("dryLeavesSide"),!1)
h=q.H(q.C("dryLeavesTop"),!1)
g=q.H(q.C("leaves"),!1)
f=q.H(q.C("rock"),!1)
e=q.H(q.C("sand"),!1)
d=q.H(q.C("trunkEnd"),!1)
c=q.H(q.C("trunkSide"),!1)
b=q.H(q.C("trunkTilted"),!1)
a=q.H(q.C("turfSide"),!1)
a0=q.H(q.C("turfTop"),!1)
a1=q.H(q.C("woodEnd"),!1)
a2=q.H(q.C("woodSide"),!1)
a3=q.H(q.C("woodTilted"),!1)
a4=q.H(q.C("blackShine"),!0)
a5=q.H(q.C("redShine"),!0)
a6=q.H(q.C("yellowShine"),!0)
a7=q.H(q.C("whiteShine"),!0)
a8=q.H(q.C("mushroomBottom"),!1)
a9=q.H(q.C("mushroomSide"),!1)
b0=q.H(q.C("mushroomTop"),!1)
b1=q.H(q.C("grass"),!1)
b2=q.H(q.C("fern"),!1)
b3=q.H(q.C("blueFlowers"),!1)
b4=q.H(q.C("redFlowers"),!1)
b5=q.H(q.C("whiteFlowers"),!1)
C.b.af(q.gdf().e,[q.C("water1"),q.C("water2"),q.C("water3")])
b6=q.H(q.gdf(),!0)
q.W(100,l,l,l,l,l,l)
q.W(101,j,j,j,j,j,j)
q.W(102,a0,j,a,a,a,a)
q.W(103,f,f,f,f,f,f)
q.W(104,e,e,e,e,e,e)
q.W(105,h,j,i,i,i,i)
q.W(106,d,d,c,c,c,c)
q.W(107,c,c,b,b,d,d)
q.W(108,b,b,d,d,b,b)
q.W(109,k,k,k,k,k,k)
q.W(110,a5,a5,a5,a5,a5,a5)
q.W(111,a7,a7,a7,a7,a7,a7)
q.W(112,a6,a6,a6,a6,a6,a6)
q.W(113,a4,a4,a4,a4,a4,a4)
q.W(114,g,g,g,g,g,g)
q.W(115,a1,a1,a2,a2,a2,a2)
q.W(116,a2,a2,a3,a3,a1,a1)
q.W(117,a3,a3,a1,a1,a3,a3)
q.W(1,b6,b6,b6,b6,b6,b6)
q.bf(200,[b1])
q.bf(201,[b2])
q.bf(202,[b5])
q.bf(203,[b3])
q.bf(204,[b4])
q.bf(205,[b0,a8,a9])
b7=B.qt()
p=[]
b8=new B.h_(q,b7,[],[],p)
b8.fI(q,b7)
o=s.r
b9=new B.jT(P.L(r,t.bl))
b9.bd(o,"./sounds/sandHit.mp3",[104])
b9.bd(o,"./sounds/grassHit.mp3",[101,102,200,201,202,203,204,205])
b9.bd(o,"./sounds/woodHit.mp3",[106,107,108,115,116,117])
b9.bd(o,"./sounds/stoneHit.mp3",[100,103,109,110,111,112,113])
b9.bd(o,"./sounds/waterHit.mp3",[1])
b9.bd(o,"./sounds/leavesHit.mp3",[105,114])
c0=B.pe(s.x,b8,b9)
r=O.lU()
c1=new M.ex(r)
r.bO(c1.ghX(),c1.ghZ())
c2=X.p4(new V.bF(0.576,0.784,0.929,1))
c3=new X.f4(1.0471975511965976,0.1)
c3.seP(null)
o=c3.c
$.v().toString
if(!(Math.abs(o-1.0471975511965976)<1e-9)){c3.c=1.0471975511965976
c3.bc(new D.B("fov",o,1.0471975511965976))}o=c3.d
$.v().toString
if(!(Math.abs(o-0.1)<1e-9)){c3.d=0.1
c3.bc(new D.B("near",o,0.1))}o=c3.e
$.v().toString
if(!(Math.abs(o-2000)<1e-9)){c3.e=2000
c3.bc(new D.B("far",o,2000))}o=c1.b
if(o!==c3){if(o!=null)o.gn().U(0,c1.gba())
m=c1.b
c1.b=c3
c3.gn().m(0,c1.gba())
c1.bb(new D.B("camera",m,c1.b))}o=c1.c
if(o!==c2){if(o!=null)o.gn().U(0,c1.gba())
m=c1.c
c1.c=c2
c2.gn().m(0,c1.gba())
c1.bb(new D.B("target",m,c1.c))}o=c1.f
if(o==null)o=c1.f=D.D()
o.m(0,b8.gkv(b8))
o=c1.b
if(o!=null)o.seP(c0.y)
for(o=p.length,n=r.a,c4=0;c4<p.length;p.length===o||(0,H.o)(p),++c4){c5=p[c4]
if(r.bD([c5])){c6=n.length
n.push(c5)
c7=r.c
if(c7!=null)c7.$2(c6,[c5])}}r.m(0,c0.dx)
b8.f=c0
r=s.d
if(r!==c1){if(r!=null)r.gn().U(0,s.gdn())
s.d=c1
c1.gn().m(0,s.gdn())
s.dq()}c0.di()
P.k9(C.X,b8.gkz())
P.k9(C.W,b8.gfk())
P.k9(C.U,b8.gjp())
d0=c9.getElementById("buttons")
c8=c9.createElement("button")
c8.textContent="Fullscreen"
W.R(c8,"click",new B.lN(s),!1)
if(d0!=null)J.mO(d0).m(0,c8)
P.k9(C.V,new B.lO(s,b8))},
qt:function(){var s,r,q,p,o=P.nm().gfa().h(0,"seed")
if(o!=null){if(o==="test")return new B.jY()
if(o==="checkers")return new B.iC()
s=H.m4(o,null)
if(s==null)s=-1}else s=-1
if(s<=0){s=C.S.jS(4294967296)
r=P.nm().fb(0,P.mX(["seed",""+s],t.N,t.z))
q=window.history
q.toString
p=r.gcD()
q.pushState(new P.la([],[]).c6(null),"3Dart Craft",p)}q=L.pd(s)
return new B.jB(q,new Uint8Array(484))},
pe:function(b1,b2,b3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1=X.b0(),a2=X.b0(),a3=X.b0(),a4=X.b0(),a5=X.b0(),a6=X.b0(),a7=U.eq(),a8=U.eq(),a9=U.eq(),b0=new U.dF(a1,a2,a3,a4,a5,a6,a7,a8,a9,V.jo(),V.jo(),V.am())
a1.a7(39)
a1.a7(68)
s=b0.gii()
a1.gaw().m(0,s)
a2.a7(37)
a2.a7(65)
a2.gaw().m(0,s)
a3.a7(81)
a3.gaw().m(0,s)
a4.a7(69)
a4.gaw().m(0,s)
a5.a7(40)
a5.a7(83)
a5.gaw().m(0,s)
a6.a7(38)
a6.a7(87)
a6.gaw().m(0,s)
a7.san(30)
a7.sb0(0)
s=b0.gaJ()
a7.gn().m(0,s)
a8.san(30)
a8.sb0(0)
a8.gn().m(0,s)
a9.san(30)
a9.sb0(0)
a9.gn().m(0,s)
b0.a4(b1)
a7.san(6)
a8.san(60)
a8.se6(0,-100)
a9.san(6)
a9=U.eq()
a8=U.eq()
a7=$.kA
a1=a7==null?$.kA=new V.ac(0,0):a7
r=new U.dE(a9,a8,new X.b2(!1,!1,!1),a1,V.am())
a9.sdg(0,!0)
a9.sd5(6.283185307179586)
a9.sd6(0)
a9.sY(0,0)
a9.san(100)
a9.sS(0)
a9.sb0(0.5)
a1=r.gaJ()
a9.gn().m(0,a1)
a8.sdg(0,!0)
a8.sd5(6.283185307179586)
a8.sd6(0)
a8.sY(0,0)
a8.san(100)
a8.sS(0)
a8.sb0(0.5)
a8.gn().m(0,a1)
a1=new X.b2(!1,!1,!1)
if(!r.d.l(0,a1)){q=r.d
r.d=a1
r.w(new D.B("modifiers",q,a1))}r.a4(b1)
a9.sd5(1.5707963267948966)
a9.sd6(-1.5707963267948966)
a9.sb0(1)
a8.sb0(1)
a9.sdg(0,!1)
r.gn().m(0,new B.jx(b0,r))
p=U.j0([b0,r])
a1=new U.cm(V.am())
a1.a=r
r.gn().m(0,a1.gaJ())
a1.w(new D.B("mover",a0,a1.a))
o=U.j0([a1,b0,U.bG(V.m3(1,-1,1,1))])
a1=U.bG(V.eP(-0.5,-0.5,-0.5))
a2=new U.du(V.am())
a2.sfj(-0.1)
a2.sf2(0,0)
a2.sfd(0)
a3=a2.d
$.v().toString
if(!(Math.abs(a3-0)<1e-9)){a2.d=0
a2.w(new D.B("deltaYaw",a3,0))}a3=a2.e
$.v().toString
if(!(Math.abs(a3-0.1)<1e-9)){a2.e=0.1
a2.w(new D.B("deltaPitch",a3,0.1))}a3=a2.f
$.v().toString
if(!(Math.abs(a3-0)<1e-9)){a2.f=0
a2.w(new D.B("deltaRoll",a3,0))}n=U.j0([a1,a2,U.bG(V.eP(0.5,0.5,0.5)),U.bG(V.m3(0.04,-0.04,0.04,1)),U.bG(V.eP(-0.15,0.06,-0.2)),o])
m=U.j0([U.bG(V.m3(0.005,-0.005,0.005,1)),U.bG(V.eP(0,0,-0.2)),o])
a1=$.aa()
a2=$.ae()
a2=new Z.a2(a1.a|a2.a)
l=new F.jM()
a1=l.gaq()
a3=new V.y(-1,-1,1).N()
k=a1.bW(new V.bW(1,2,4,6),V.iF(255,0,0),new V.q(-1,-1,0),new V.I(0,1),a3,a2)
a3=l.gaq()
a1=new V.y(1,-1,1).N()
j=a3.bW(new V.bW(0,3,4,6),V.iF(0,0,255),new V.q(1,-1,0),new V.I(1,1),a1,a2)
a1=l.gaq()
a3=new V.y(1,1,1).N()
i=a1.bW(new V.bW(0,2,5,6),V.iF(0,128,0),new V.q(1,1,0),new V.I(1,0),a3,a2)
a3=l.gaq()
a1=$.a8
if(a1==null)a1=$.a8=new V.I(0,0)
a4=new V.y(-1,1,1).N()
h=a3.bW(new V.bW(0,2,4,7),V.iF(255,255,0),new V.q(-1,1,0),a1,a4,a2)
l.gaF().jn([k,j,i,h])
l.b_()
a1=b2.a
a2=a1.r
if(a2==null){a2=a1.dw("crosshair")
a1.r=a2}g=E.cf(a0,m,l,a2)
f=E.cf(a0,n,a0,a0)
e=[]
a2=a1.d
a3=a2.length
a4=f.y
a5=a4.a
d=0
for(;d<a2.length;a2.length===a3||(0,H.o)(a2),++d){c=E.cf(a0,a0,a0,a2[d])
if(a4.bD([c])){b=a5.length
a5.push(c)
a6=a4.c
if(a6!=null)a6.$2(b,[c])}e.push(c)}a2=V.cv()
a3=$.nd
if(a3==null)a3=$.nd=V.fd(0,0,0,0,0,0)
a4=V.cC()
a5=$.aB()
a6=a1.f
if(a6==null){a6=a1.dw("selection")
a1.f=a6
a1=a6}else a1=a6
a=E.cf(a0,a0,a0,a1)
a5=new B.f6(b0,r,b2,b3,new B.iE(b2,a2,a3,a4,a5,[],[],[]),p,o,a,E.cf([g,f,a],a0,a0,a0),e)
b0.dy=a5.gdN()
b0.gn().m(0,a5.gdT())
p.gn().m(0,a5.gjg())
a5.hx(b1)
a5.e3()
return a5},
m6:function(a,b){var s,r
if(b==null){s=$.aa()
r=$.ae()
r=new Z.a2(s.a|r.a|$.as().a)
s=r}else s=b
r=a==null?null:a.d.length
return new B.jP(a,s,P.aw(r==null?1:r,null,!1))},
aj:function aj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iC:function iC(){},
iD:function iD(a,b,c){var _=this
_.b=_.a=0
_.c=a
_.d=b
_.e=c
_.f=!1
_.x=_.r=!0},
iE:function iE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
lN:function lN(a){this.a=a},
lO:function lO(a,b){this.a=a
this.b=b},
et:function et(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jn:function jn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.x=_.r=_.f=_.e=null},
eZ:function eZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!0
_.f=0
_.r=null
_.x=e
_.y=f
_.z=g
_.db=h
_.dx=i
_.dy=j},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(a){this.a=a},
jB:function jB(a,b){this.a=a
this.b=b
this.c=null},
jD:function jD(a){this.a=a},
jC:function jC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jE:function jE(a){this.a=a},
jP:function jP(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(a){this.a=a},
jY:function jY(){this.a=null},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
h_:function h_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null}},K={im:function im(){},eB:function eB(){},bj:function bj(a){this.a=a},Z:function Z(a){this.a=a}},F={
n6:function(a){var s=new F.f7(a)
W.R(a,"playing",s.gia(),!1)
W.R(a,"pause",s.gi8(),!1)
return s},
it:function it(){this.b=this.a=0},
iu:function iu(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
f7:function f7(a){this.a=a
this.b=!1},
cD:function(a,b,c,d,e,f,g,h,i){var s=new F.kF(),r=h.a
if((r&$.aa().a)!==0)s.f=d
if((r&$.as().a)!==0)s.r=e
if((r&$.bA().a)!==0)s.x=b
if((r&$.ae().a)!==0)s.y=f
if((r&$.c7().a)!==0)s.z=g
if((r&$.oB().a)!==0)s.Q=c
if((r&$.cP().a)!==0)s.ch=i
if((r&$.bz().a)!==0)s.cx=a
return s},
d0:function d0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
jF:function jF(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=0
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.Q=_.z=null},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
jM:function jM(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
jO:function jO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dw:function dw(a,b){this.a=a
this.b=b},
fi:function fi(a,b){this.a=a
this.b=b},
jN:function jN(a){this.b=a},
kF:function kF(){var _=this
_.d=_.c=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
kJ:function kJ(a){this.a=a},
kI:function kI(a){this.a=a},
aq:function aq(a,b){this.a=a
this.b=!1
this.c=b},
cE:function cE(a,b,c){this.b=a
this.c=b
this.d=c},
kG:function kG(a,b){this.a=a
this.b=b},
kH:function kH(a,b){this.a=a
this.b=b}},O={
lU:function(){return new O.cd([])},
cd:function cd(a){this.a=a
this.c=this.b=null},
dk:function dk(a){this.a=a
this.b=null},
n_:function(){var s=O.lU(),r=new O.eN(s)
s.bO(r.ghL(),r.ghN())
s=r.geL()
s.gn().m(0,r.gdV())
s.geK().m(0,r.gbB())
return r},
eO:function(a,b){return new O.dj(new V.S(0,0,0),a,b,new A.au(!1,!1,!1))},
eN:function eN(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
jf:function jf(a,b){this.a=a
this.b=b},
jg:function jg(){},
jh:function jh(a,b){this.a=a
this.b=b},
ji:function ji(){},
jj:function jj(a,b){this.a=a
this.b=b},
jk:function jk(){},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(){},
j9:function j9(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
di:function di(){},
ja:function ja(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
dj:function dj(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
jc:function jc(a){this.b=a},
jd:function jd(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
je:function je(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
jX:function jX(){}},Y={
rE:function(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0==null)a0=$.ii()
s=a1.a&a0.aN(0).a
r=c.a-d.a
q=c.b-d.b
p=c.c-d.c
o=$.aB()
if(r!==0){if(r>0){n=$.aC()
m=n.a
if((s&m)===m){m=b.a-(a.a+a.d)
$.v().toString
l=Math.abs(m)<1e-9?0:m/r
k=!0}else{n=o
l=0
k=!1}}else{n=$.aD()
m=n.a
if((s&m)===m){m=b.a+b.d-a.a
$.v().toString
l=Math.abs(m)<1e-9?0:m/r
k=!0}else{n=o
l=0
k=!1}}if(k&&l<100&&l>=0&&l<=1){j=a.b+q*l
m=b.b
$.v().toString
if(j-1e-9<m+b.e&&m-1e-9<j+a.e){i=a.c+p*l
m=b.c
if(i-1e-9<m+b.f&&m-1e-9<i+a.f){h=n
g=l}else{h=o
g=100}}else{h=o
g=100}}else{h=o
g=100}}else{n=o
h=n
g=100
l=0}if(q!==0){if(q>0){f=$.b9()
m=f.a
if((s&m)===m){m=b.b-(a.b+a.e)
$.v().toString
l=Math.abs(m)<1e-9?0:m/q
n=f
k=!0}else k=!1}else{f=$.aE()
m=f.a
if((s&m)===m){m=b.b+b.e-a.b
$.v().toString
l=Math.abs(m)<1e-9?0:m/q
n=f
k=!0}else k=!1}if(k&&l<g&&l>=0&&l<=1){e=a.a+r*l
m=b.a
$.v().toString
if(e-1e-9<m+b.d&&m-1e-9<e+a.d){i=a.c+p*l
m=b.c
if(i-1e-9<m+b.f&&m-1e-9<i+a.f){h=n
g=l}}}}if(p!==0){if(p>0){f=$.ba()
m=f.a
if((s&m)===m){s=b.c-(a.c+a.f)
$.v().toString
l=Math.abs(s)<1e-9?0:s/p
n=f
k=!0}else k=!1}else{f=$.bb()
m=f.a
if((s&m)===m){s=b.c+b.f-a.c
$.v().toString
l=Math.abs(s)<1e-9?0:s/p
n=f
k=!0}else k=!1}if(k&&l<g&&l>=0&&l<=1){e=a.a+r*l
s=b.a
$.v().toString
if(e-1e-9<s+b.d&&s-1e-9<e+a.d){j=a.b+q*l
s=b.b
if(j-1e-9<s+b.e&&s-1e-9<j+a.e){h=n
g=l}}}}if(h.l(0,o))return new Y.fD(o,a.f0(b)?C.D:C.E,0)
return new Y.fD(h,C.n,g)},
cz:function cz(a){this.b=a},
en:function en(){},
fD:function fD(a,b,c){this.y=a
this.a=b
this.b=c}},E={
cf:function(a,b,c,d){var s,r,q=O.lU(),p=new E.ce(q)
q.bO(p.gjU(),p.gjX())
s=p.c
if(s!=c){p.d=p.c=c
p.e=null
if(s!=null)s.gn().U(0,p.gc2())
if(c!=null)c.gn().m(0,p.gc2())
p.ay(new D.B("shape",s,c))}s=p.f
if(s!=d){p.f=d
if(s!=null)s.gn().U(0,p.geZ())
if(d!=null)d.gn().m(0,p.geZ())
p.dD()
p.ay(new D.B("technique",s,d))}if(!J.a6(p.r,b)){r=p.r
p.r=b
if(r!=null)r.gn().U(0,p.geW())
if(b!=null)b.gn().m(0,p.geW())
s=p.r
p.ay(new D.B("mover",r,s))}if(a!=null)q.af(0,a)
return p},
p2:function(a,b){var s,r,q,p=P.o0(P.ln(a))
for(s=p.a,r=0;r<5;++r){q=b[r]
if(q in s){p.js(q,null)
return!0}}return!1},
nx:function(){var s=window.navigator.vendor
s.toString
if(C.a.M(s,"Google"))return C.H
s=window.navigator.userAgent
s.toString
if(C.a.M(s,"Firefox"))return C.p
s=window.navigator.appVersion
s.toString
if(C.a.M(s,"Trident")||C.a.M(s,"Edge"))return C.q
s=window.navigator.appName
s.toString
if(C.a.M(s,"Microsoft"))return C.q
return C.I},
ny:function(){var s=window.navigator.appVersion
s.toString
if(C.a.M(s,"Win"))return C.a4
if(C.a.M(s,"Mac"))return C.B
if(C.a.M(s,"Linux"))return C.a5
return C.a6},
pu:function(a,b){var s
Date.now()
s=new E.jH(a,new P.P(Date.now(),!1),new P.P(Date.now(),!1),new O.dk([]),new O.dk([]),new O.dk([]),[null],P.L(t.N,t.cK))
s.fH(a,b)
return s},
pC:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.ni(a,!0,!0,!0,!1)
s=W.lT()
r=s.style
r.width="100%"
r.height="100%"
J.mO(a).m(0,s)
return E.ni(s,!0,!0,!0,!1)},
ni:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.ba.a(C.i.dh(a,"webgl2",P.mX(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.h("Failed to get the rendering context for WebGL."))
s=E.pu(l,a)
m=H.ll(l.getParameter(3379))
H.ll(l.getParameter(34076))
r=[]
q=$.iS
p=new X.fV(a,r,(q==null?$.iS=new E.hc(E.nx(),E.ny()):q).a===C.p?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.R(o,"contextmenu",p.gi2(),!1))
r.push(W.R(a,"focus",p.gic(),!1))
r.push(W.R(a,"blur",p.ghT(),!1))
r.push(W.R(o,"keyup",p.gcr(),!1))
r.push(W.R(o,"keydown",p.gcb(),!1))
r.push(W.R(a,"mousedown",p.gim(),!1))
r.push(W.R(a,"mouseup",p.gir(),!1))
r.push(W.R(a,n,p.gip(),!1))
W.iQ(a)
W.iQ(a)
r.push(W.R(a,W.iQ(a),p.git(),!1))
r.push(W.R(o,n,p.gi4(),!1))
r.push(W.R(o,"mouseup",p.gi6(),!1))
r.push(W.R(o,"pointerlockchange",p.giw(),!1))
r.push(W.R(a,"touchstart",p.giK(),!1))
r.push(W.R(a,"touchend",p.giG(),!1))
r.push(W.R(a,"touchmove",p.giI(),!1))
m=new E.fy(a,s,new T.k4(l,m),new F.it(),p,new P.P(Date.now(),!1))
m.dX()
return m},
iy:function iy(){},
ce:function ce(a){var _=this
_.b=!0
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
ca:function ca(a){this.b=a},
cu:function cu(a){this.b=a},
hc:function hc(a,b){this.a=a
this.b=b},
jH:function jH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.d=_.c=512
_.e=0
_.r=b
_.x=c
_.y=0
_.cx=_.ch=_.Q=_.z=null
_.cy=d
_.db=e
_.dx=f
_.dy=g
_.fr=h},
jI:function jI(a){this.a=a},
jJ:function jJ(a){this.a=a},
jK:function jK(a){this.a=a},
fo:function fo(){},
fy:function fy(a,b,c,d,e,f){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.r=d
_.x=e
_.cx=!1
_.cy=f
_.db=0},
k6:function k6(a){this.a=a}},Z={
nw:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Float32Array(H.cJ(c)),35044)
a.bindBuffer(b,null)
return new Z.fX(b,s)},
fY:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cJ(c)),35044)
a.bindBuffer(b,null)
return new Z.fX(b,s)},
aR:function(a){return new Z.a2(a)},
fX:function fX(a,b){this.a=a
this.b=b},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
kK:function kK(a){this.a=a},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function a2(a){this.a=a}},D={
D:function(){return new D.ch()},
iB:function iB(){},
ch:function ch(){var _=this
_.c=_.b=_.a=null
_.d=0},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
T:function T(){},
aX:function aX(){},
aY:function aY(){},
B:function B(a,b,c){this.c=a
this.d=b
this.e=c},
cX:function cX(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
db:function db(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={
b0:function(){var s=new X.d7([])
s.c9(s.gfJ(),s.gfL(),s.gfN())
return s},
cR:function cR(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
bg:function bg(a){this.c=a},
d7:function d7(a){var _=this
_.f=null
_.r=!1
_.y=null
_.a=a
_.c=_.b=null},
j4:function j4(a){this.b=this.a=null
this.d=a},
de:function de(a,b,c){this.x=a
this.c=b
this.d=c},
j7:function j7(a,b,c,d){var _=this
_.a=a
_.f=_.d=_.b=null
_.r=0
_.x=b
_.y=c
_.z=d
_.ch=_.Q=1},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
cs:function cs(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},
js:function js(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},
f9:function f9(){},
dB:function dB(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},
kb:function kb(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},
fV:function fV(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.r=_.f=!1
_.y=null
_.z=b
_.Q=c},
p4:function(a){var s,r
if(a==null)s=new V.bF(0,0,0,1)
else s=a
r=$.nc
if(r==null){r=V.m5(0,0,1,1)
$.nc=r}return new X.j_(s,r)},
j_:function j_(a,b){this.a=a
this.r=b
this.x=null},
f4:function f4(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jW:function jW(){}},N={
rx:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=b1.a,a3=a2+b1.d,a4=b1.b,a5=a4+b1.e,a6=b1.c,a7=a6+b1.f,a8=$.aB(),a9=b0.a
if(a9<a2){s=a2-a9
r=b0.d
if(s>r)return new N.Y(a1,a1,0,a8,!1)
s/=r
q=$.aC()
p=a2
o=!1
n=-1}else if(a9>a3){s=a3-a9
r=b0.d
if(s<r)return new N.Y(a1,a1,0,a8,!1)
s/=r
q=$.aD()
p=a3
o=!1
n=1}else{q=a8
o=!0
s=-1
n=0
p=0}r=b0.b
if(r<a4){m=a4-r
l=b0.e
if(m>l)return new N.Y(a1,a1,0,a8,!1)
m/=l
k=$.b9()
j=a4
o=!1
i=-1}else if(r>a5){m=a5-r
l=b0.e
if(m<l)return new N.Y(a1,a1,0,a8,!1)
m/=l
k=$.aE()
j=a5
o=!1
i=1}else{k=a8
m=-1
i=0
j=0}l=b0.c
if(l<a6){h=a6-l
g=b0.f
if(h>g)return new N.Y(a1,a1,0,a8,!1)
h/=g
f=$.ba()
e=a6
o=!1
d=-1}else if(l>a7){h=a7-l
g=b0.f
if(h<g)return new N.Y(a1,a1,0,a8,!1)
h/=g
f=$.bb()
e=a7
o=!1
d=1}else{f=a8
h=-1
d=0
e=0}if(o)return new N.Y(new V.q(a9,r,l),new V.y(b0.d,b0.e,b0.f).N().aQ(0),0,$.ij(),!0)
if(m>s)c=h>m?2:1
else c=h>s?2:0
switch(c){case 0:b=r+b0.e*s
$.v().toString
if(!(a4-1e-9<b&&b<a5))return new N.Y(a1,a1,0,a8,!1)
a=l+b0.f*s
if(!(a6-1e-9<a&&a<a7))return new N.Y(a1,a1,0,a8,!1)
return new N.Y(new V.q(p,b,a),new V.y(n,0,0),s,q,!0)
case 1:a0=a9+b0.d*m
$.v().toString
if(!(a2-1e-9<a0&&a0<a3))return new N.Y(a1,a1,0,a8,!1)
a=l+b0.f*m
if(!(a6-1e-9<a&&a<a7))return new N.Y(a1,a1,0,a8,!1)
return new N.Y(new V.q(a0,j,a),new V.y(0,i,0),m,k,!0)
default:a0=a9+b0.d*h
$.v().toString
if(!(a2-1e-9<a0&&a0<a3))return new N.Y(a1,a1,0,a8,!1)
b=r+b0.e*h
if(!(a4-1e-9<b&&b<a5))return new N.Y(a1,a1,0,a8,!1)
return new N.Y(new V.q(a0,b,e),new V.y(0,0,d),h,f,!0)}},
eo:function eo(){},
Y:function Y(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.a=e}},V={
iF:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.bF(s,r,q,1)},
al:function(a){return new V.U(a)},
lP:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.b8(a-b,s)
return(a<0?a+s:a)+b},
t:function(a,b,c){$.v().toString
return C.a.b5(C.d.dd(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cO:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.o)(a),++p){o=a[p]
$.v().toString
n=C.a.b5(C.d.dd(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.b(l,m)
s=C.a.b5(l[m],q)
r=l.length
if(m>=r)return H.b(l,m)
l[m]=s}return l},
mB:function(a){return C.d.aP(Math.pow(2,C.d.bs(Math.log(a)/Math.log(2))))},
jo:function(){var s=$.n0
return s==null?$.n0=new V.aL(1,0,0,0,1,0,0,0,1):s},
m2:function(a){var s=Math.cos(a),r=Math.sin(a)
return new V.aL(s,0,-r,0,1,0,r,0,s)},
am:function(){var s=$.n4
return s==null?$.n4=V.b1(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
b1:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.cq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eP:function(a,b,c){return V.b1(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
m3:function(a,b,c,d){return V.b1(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
n2:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.b1(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
n3:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.b1(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
n1:function(a,b,c){var s=c.N(),r=b.bH(s).N(),q=s.bH(r),p=new V.y(a.a,a.b,a.c)
return V.b1(r.a,q.a,s.a,r.aQ(0).a8(p),r.b,q.b,s.b,q.aQ(0).a8(p),r.c,q.c,s.c,s.aQ(0).a8(p),0,0,0,1)},
cv:function(){var s=$.b3
return s==null?$.b3=new V.q(0,0,0):s},
bV:function(a,b,c){return new V.q(a,b,c)},
na:function(a,b){return new V.fb(a.a,a.b,a.c,b.a,b.b,b.c)},
m5:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.fc(a,b,c,d)},
fd:function(a,b,c,d,e,f){if(d<0){a+=d
d=-d}if(e<0){b+=e
e=-e}if(f<0){c+=f
f=-f}return new V.dt(a,b,c,d,e,f)},
cC:function(){var s=$.kE
return s==null?$.kE=new V.y(0,0,0):s},
nu:function(){var s=$.kB
return s==null?$.kB=new V.y(-1,0,0):s},
mb:function(){var s=$.kC
return s==null?$.kC=new V.y(0,1,0):s},
mc:function(){var s=$.kD
return s==null?$.kD=new V.y(0,0,1):s},
nv:function(){var s=$.ns
return s==null?$.ns=new V.y(0,0,-1):s},
nq:function(a,b,c){return new V.y(a,b,c)},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iT:function iT(){},
U:function U(a){this.a=a},
aL:function aL(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
cq:function cq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
I:function I(a,b){this.a=a
this.b=b},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fb:function fb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fc:function fc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dt:function dt(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ac:function ac(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
pw:function(a){var s,r,q,p,o,n=document,m=n.body
if(m==null)throw H.c(P.h("The html document body was null."))
s=n.createElement("div")
s.className="scrollTop"
m.appendChild(s).toString
r=n.createElement("div")
r.className="scrollPage"
m.appendChild(r).toString
q=n.createElement("div")
q.className="pageCenter"
r.appendChild(q).toString
if(a.length!==0){n.title=a
p=n.createElement("div")
p.className="pageTitle"
p.textContent=a
q.appendChild(p).toString}o=n.createElement("div")
o.toString
q.appendChild(o).toString
W.R(n,"scroll",new V.jS(s),!1)
return new V.jQ(o)},
jQ:function jQ(a){this.a=a
this.b=null},
jS:function jS(a){this.a=a},
jR:function jR(a){this.a=a}},U={
eq:function(){return new U.iG()},
bG:function(a){var s=V.am(),r=new U.cT(s)
if(!s.l(0,a))r.a=a
return r},
j0:function(a){var s=new U.ck(V.am(),[])
s.bO(s.gfP(),s.giA())
s.af(0,a)
return s},
iG:function iG(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.r=_.f=0
_.y=null},
cT:function cT(a){this.a=a
this.b=null},
ck:function ck(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
cm:function cm(a){var _=this
_.b=_.a=null
_.c=a
_.d=0},
a4:function a4(){},
du:function du(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0
_.x=a
_.y=null},
dE:function dE(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.cx=_.ch=_.r=_.f=!1
_.db=_.cy=0
_.dx=d
_.dy=0
_.fr=e
_.fx=null},
dF:function dF(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
_.cy=0
_.db=l
_.dy=_.dx=null}},M={ex:function ex(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=_.f=null}},A={
pc:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gL(a5)+a6.gL(a6)+a7.gL(a7)+a8.gL(a8)+a9.gL(a9)+b0.gL(b0)+b1.gL(b1)+b2.gL(b2)+b3.gL(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.o)(b4),++r)a+="_"+b4[r].a}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.o)(b5),++r)a+="_"+b5[r].a}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.o)(b6),++r)a+="_"+b6[r].a}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.o)(b7),++r)a+="_"+b7[r].a}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.aa()
if(h){s=$.as()
b=new Z.a2(b.a|s.a)}if(g)b=new Z.a2(b.a|$.bA().a)
if(f)b=new Z.a2(b.a|$.ae().a)
if(e)b=new Z.a2(b.a|$.bz().a)
return new A.jb(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
lu:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
lv:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.lu(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.i6(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
qK:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.lu(b,r,"emission")
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
qG:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.lv(b,r,"ambient")
b.a+="\n"},
qI:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.lv(b,r,"diffuse")
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
qL:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.lv(b,r,"invDiffuse")
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
qR:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.lv(b,r,"specular")
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
qN:function(a,b){var s,r,q
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
qP:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.lu(b,r,"reflect")
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
qQ:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.lu(b,r,"refract")
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
qH:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.i6(r)
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
c.a=p+"\n"}o=[]
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.b.p(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=[]
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
n=[]
s=a.c
if(s.a||s.b||!1)n.push("diffuse(norm, normDir)")
s=a.d
if(s.a||s.b||!1)n.push("invDiffuse(norm, normDir)")
s=a.e
if(s.a||s.b||!1)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.b.p(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.p(o," + ")+");\n"
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
qJ:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+s
q=A.i6(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
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
p=c.a+="uniform "+q+" "+r+"s["+k+"];\n"
if(s)for(o=0;o<k;++o)p=c.a+="uniform sampler2D "+r+"sTexture2D"+o+";\n"
p+="\n"
c.a=p
n=s?", sampler2D txt2D":""
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+n+")\n"
c.a=p
c.a=p+"{\n"
m=[]
p=a.b
if(p.a||p.b||!1)m.push("ambientColor")
if(a.dx){c.a+=u.k
l=[]
p=a.c
if(p.a||p.b||!1)l.push("diffuse(norm, lit.viewDir)")
p=a.d
if(p.a||p.b||!1)l.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(p.a||p.b||!1)l.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.b.p(l," + ")+");\n"}else c.a+="   highLight = "+C.b.p(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.b.p(m," + ")+");\n"
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
if(s){for(s=p,o=0;o<k;++o){c.a+="   if("+r+"Count <= "+o+") return lightAccum;\n"
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+o+"], "+r+"sTexture2D"+o+");\n"}k=s}else{k=c.a+="   for(int i = 0; i < "+k+"; ++i)\n"
k+="   {\n"
c.a=k
k+="      if(i >= "+r+"Count) break;\n"
c.a=k
k+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=k
k=c.a=k+"   }\n"}k+="   return lightAccum;\n"
c.a=k
k+="}\n"
c.a=k
c.a=k+"\n"},
qO:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.i6(r)
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
c.a=p+"\n"}j=[]
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
p=c.a+="   return "+C.b.p(j," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=p
c.a=p+"{\n"
j=[]
p=a.b
if(p.a||p.b||!1)j.push("ambientColor")
if(a.dx){c.a+=u.k
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
p=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
p+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=p
c.a=p+"   if(length(intensity) > 0.0001) {\n"
i=[]
p=a.c
if(p.a||p.b||!1)i.push("diffuse(norm, normDir)")
p=a.d
if(p.a||p.b||!1)i.push("invDiffuse(norm, normDir)")
p=a.e
if(p.a||p.b||!1)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.b.p(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.b.p(j," + ")+");\n"
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
qS:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.i6(r)
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
if(m){s=$.iS
if(s==null)s=$.iS=new E.hc(E.nx(),E.ny())
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
c.a=s+"\n"}h=[]
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
s=c.a+="   return "+C.b.p(h," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=s
c.a=s+"{\n"
h=[]
s=a.b
if(s.a||s.b||!1)h.push("ambientColor")
if(a.dx){c.a+=u.k
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
s=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
s+="   if(length(intensity) > 0.0001) {\n"
c.a=s
c.a=s+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=[]
s=a.c
if(s.a||s.b||!1)g.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)g.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.b.p(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.p(h," + ")+");\n"
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
qM:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=[]
s=a.b
if(s.a||s.b||!1)r.push("ambientColor")
s=a.c
if(s.a||s.b||!1)r.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)r.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.b.p(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
qT:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.X(""),j=""+"precision mediump float;\n"
k.a=j
j=k.a=j+"\n"
s=a.k4
if(s){j+="varying vec3 normalVec;\n"
k.a=j}if(a.r1){j+="varying vec3 binormalVec;\n"
k.a=j}if(a.r2){j+="varying vec2 txt2D;\n"
k.a=j}if(a.rx){j+="varying vec3 txtCube;\n"
k.a=j}if(a.k2){j+="varying vec3 objPos;\n"
k.a=j}j=k.a=(a.k3?k.a=j+"varying vec3 viewPos;\n":j)+"\n"
r=a.y1
if(r){j+="uniform mat4 colorMat;\n"
k.a=j}if(a.go){j+="uniform mat4 viewMat;\n"
k.a=j}if(a.dy)j=k.a=j+"uniform mat4 invViewMat;\n"
k.a=j+"\n"
A.qK(a,k)
A.qG(a,k)
A.qI(a,k)
A.qL(a,k)
A.qR(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.qP(a,k)
A.qQ(a,k)}A.qN(a,k)
q=k.a+="// === Alpha ===\n"
q=k.a=q+"\n"
p=a.y
o=p.a
if(o){q+="uniform float alpha;\n"
k.a=q}p=p.b
if(p)q=k.a=q+"uniform sampler2D alphaTxt;\n"
q+="float alphaValue()\n"
k.a=q
q=k.a=q+"{\n"
if(!(o||p||!1))q=k.a=q+"   return 1.0;\n"
else if(p||!1){if(o){if(p){q+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
k.a=q}}else if(p){q+="   float a = texture2D(alphaTxt, txt2D).a;\n"
k.a=q}q+="   if (a <= 0.000001) discard;\n"
k.a=q
q+="   return a;\n"
k.a=q}else if(o){q+="   return alpha;\n"
k.a=q}q+="}\n"
k.a=q
k.a=q+"\n"
q=a.k1
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.qH(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.qJ(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.qO(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.qS(a,p[n],k)
A.qM(a,k)}p=k.a+="// === Main ===\n"
p+="\n"
k.a=p
p+="void main()\n"
k.a=p
p+="{\n"
k.a=p
p=k.a=p+"   float alpha = alphaValue();\n"
if(s){s=p+"   vec3 norm = normal();\n"
k.a=s}else s=p
j=j?k.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n":s
m=[]
if(q){k.a=j+u.o
m.push("lightAccum")
j=a.b
if(j.a||j.b||!1)k.a+="   setAmbientColor();\n"
j=a.c
if(j.a||j.b||!1)k.a+="   setDiffuseColor();\n"
j=a.d
if(j.a||j.b||!1)k.a+="   setInvDiffuseColor();\n"
j=a.e
if(j.a||j.b||!1)k.a+="   setSpecularColor();\n"
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.b(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.aC(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.b(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.aC(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.b(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.aC(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.b(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.aC(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}j=a.a
if(j.a||j.b||!1)m.push("emissionColor()")
j=a.r
if(j.a||j.b||!1)m.push("reflect(refl)")
j=a.x
if(j.a||j.b||!1)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.b.p(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
qU:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bp+"];\n"
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
qW:function(a,b){var s
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
qV:function(a,b){var s
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
qY:function(a,b){var s,r
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
qZ:function(a,b){var s,r
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
qX:function(a,b){var s
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
r_:function(a,b){var s
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
i6:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.aC(a,1)},
ma:function(a,b,c,d,e){var s=new A.kh([],a,c,e)
s.f=d
s.e=P.aw(d,0,!1)
return s},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a){this.a=a},
au:function au(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function eM(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.kM=_.eA=_.ez=_.kL=_.ey=_.ex=_.ew=_.kK=_.ev=_.eu=_.es=_.kJ=_.er=_.eq=_.kI=_.ep=_.eo=_.en=_.bq=_.bp=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cQ=c
_.cR=d
_.cS=e
_.cT=f
_.cU=g
_.cV=h
_.cW=i
_.cX=j
_.kP=_.kO=_.kN=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
bB:function bB(a,b){this.a=a
this.b=b},
bI:function bI(a,b){this.a=a
this.b=b},
bX:function bX(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b){this.a=a
this.b=b},
jb:function jb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bp=b5
_.bq=b6
_.en=b7},
fI:function fI(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
fJ:function fJ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
fM:function fM(a,b,c,d,e,f,g,h,i,j){var _=this
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
fP:function fP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dv:function dv(){},
kg:function kg(){},
km:function km(a){this.a=a},
dD:function dD(a,b,c){this.a=a
this.c=b
this.d=c},
kj:function kj(a,b,c){this.a=a
this.c=b
this.d=c},
kk:function kk(a,b,c){this.a=a
this.c=b
this.d=c},
kl:function kl(a,b,c){this.a=a
this.c=b
this.d=c},
kh:function kh(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
fF:function fF(a,b,c){this.a=a
this.c=b
this.d=c},
ki:function ki(a,b,c){this.a=a
this.c=b
this.d=c},
fG:function fG(a,b,c){this.a=a
this.c=b
this.d=c},
fH:function fH(a,b,c){this.a=a
this.c=b
this.d=c},
kn:function kn(a,b,c){this.a=a
this.c=b
this.d=c},
fK:function fK(a,b,c){this.a=a
this.c=b
this.d=c},
fL:function fL(a,b,c){this.a=a
this.c=b
this.d=c},
fN:function fN(a,b,c){this.a=a
this.c=b
this.d=c},
fO:function fO(a,b,c){this.a=a
this.c=b
this.d=c}},T={k0:function k0(){},k1:function k1(){},k2:function k2(a){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=a
_.f=null},k3:function k3(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.y=null},k4:function k4(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=0},k5:function k5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,L,B,K,F,O,Y,E,Z,D,X,N,V,U,M,A,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lZ.prototype={}
J.a.prototype={
l:function(a,b){return a===b},
gu:function(a){return H.dr(a)},
i:function(a){return"Instance of '"+H.ds(a)+"'"},
eT:function(a,b){throw H.c(P.n5(a,b.geO(),b.gf6(),b.geQ()))}}
J.eF.prototype={
i:function(a){return String(a)},
gu:function(a){return a?519018:218159},
$iaA:1}
J.cn.prototype={
l:function(a,b){return null==b},
i:function(a){return"null"},
gu:function(a){return 0},
$iW:1}
J.bf.prototype={
gu:function(a){return 0},
i:function(a){return String(a)},
$imW:1}
J.f5.prototype={}
J.cA.prototype={}
J.aZ.prototype={
i:function(a){var s=a[$.lR()]
if(s==null)return this.fz(a)
return"JavaScript function for "+H.r(J.eg(s))},
$id3:1}
J.aJ.prototype={
m:function(a,b){if(!!a.fixed$length)H.f(P.A("add"))
a.push(b)},
U:function(a,b){var s
if(!!a.fixed$length)H.f(P.A("remove"))
for(s=0;s<a.length;++s)if(J.a6(a[s],b)){a.splice(s,1)
return!0}return!1},
af:function(a,b){var s
if(!!a.fixed$length)H.f(P.A("addAll"))
if(Array.isArray(b)){this.fX(a,b)
return}for(s=J.at(b);s.t();)a.push(s.gE(s))},
fX:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.be(a))
for(s=0;s<r;++s)a.push(b[s])},
B:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.be(a))}},
d4:function(a,b){return new H.bR(a,b)},
eN:function(a,b){return this.d4(a,b,t.z)},
p:function(a,b){var s,r,q=a.length,p=P.aw(q,"",!1)
for(s=0;s<a.length;++s){r=H.r(a[s])
if(s>=q)return H.b(p,s)
p[s]=r}return p.join(b)},
jO:function(a){return this.p(a,"")},
jI:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.be(a))}return s},
jJ:function(a,b,c){return this.jI(a,b,c,t.z)},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
gb4:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.p6())},
bA:function(a,b){if(!!a.immutable$list)H.f(P.A("sort"))
H.pz(a,b==null?J.qx():b)},
fs:function(a){return this.bA(a,null)},
M:function(a,b){var s
for(s=0;s<a.length;++s)if(J.a6(a[s],b))return!0
return!1},
i:function(a){return P.lW(a,"[","]")},
gT:function(a){return new J.af(a,a.length)},
gu:function(a){return H.dr(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.f(P.A("set length"))
if(b>a.length)H.nP(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cN(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.f(P.A("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cN(a,b))
a[b]=c},
$ix:1,
$ik:1,
$ii:1,
$il:1}
J.eI.prototype={}
J.af.prototype={
gE:function(a){return H.a_(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.co.prototype={
ab:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gc1(b)
if(this.gc1(a)===s)return 0
if(this.gc1(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc1:function(a){return a===0?1/a<0:a<0},
aP:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.A(""+a+".toInt()"))},
bs:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.A(""+a+".floor()"))},
aH:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.A(""+a+".round()"))},
jt:function(a,b,c){if(C.c.ab(b,c)>0)throw H.c(H.c1(b))
if(this.ab(a,b)<0)return b
if(this.ab(a,c)>0)return c
return a},
dd:function(a,b){var s
if(b>20)throw H.c(P.a5(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gc1(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
b8:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
fE:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e0(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.e0(a,b)},
e0:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.A("Result of truncating division is "+H.r(s)+": "+H.r(a)+" ~/ "+b))},
fq:function(a,b){if(b<0)throw H.c(H.c1(b))
return b>31?0:a<<b>>>0},
bm:function(a,b){var s
if(a>0)s=this.e_(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
j2:function(a,b){if(b<0)throw H.c(H.c1(b))
return this.e_(a,b)},
e_:function(a,b){return b>31?0:a>>>b},
$iai:1,
$ia3:1}
J.d5.prototype={
dc:function(a,b){var s=this.fq(1,b-1)
return((a&s-1)>>>0)-((a&s)>>>0)},
$ie:1}
J.eG.prototype={}
J.bM.prototype={
X:function(a,b){if(b<0)throw H.c(H.cN(a,b))
if(b>=a.length)H.f(H.cN(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.cN(a,b))
return a.charCodeAt(b)},
K:function(a,b){return a+b},
bw:function(a,b,c,d){var s=P.bn(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
ad:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a5(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
ac:function(a,b){return this.ad(a,b,0)},
q:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fa(b,null))
if(b>c)throw H.c(P.fa(b,null))
if(c>a.length)throw H.c(P.fa(c,null))
return a.substring(b,c)},
aC:function(a,b){return this.q(a,b,null)},
v:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
b5:function(a,b){var s=b-a.length
if(s<=0)return a
return this.v(" ",s)+a},
c0:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a5(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
eH:function(a,b){return this.c0(a,b,0)},
jw:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a5(c,0,s,null,null))
return H.oe(a,b,c)},
M:function(a,b){return this.jw(a,b,0)},
ab:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gu:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gj:function(a){return a.length},
$ix:1,
$iu:1}
H.d9.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.O.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.a.X(this.a,b)}}
H.k.prototype={}
H.dd.prototype={
gT:function(a){return new H.bP(this,this.gj(this))}}
H.bP.prototype={
gE:function(a){return H.a_(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=J.c3(q),o=p.gj(q)
if(r.b!==o)throw H.c(P.be(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.G(q,s);++r.c
return!0}}
H.bQ.prototype={
gT:function(a){return new H.dh(J.at(this.a),this.b)},
gj:function(a){return J.aU(this.a)},
G:function(a,b){return this.b.$1(J.ik(this.a,b))}}
H.d_.prototype={$ik:1}
H.dh.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gE(r))
return!0}s.a=null
return!1},
gE:function(a){return H.a_(this).Q[1].a(this.a)}}
H.bR.prototype={
gj:function(a){return J.aU(this.a)},
G:function(a,b){return this.b.$1(J.ik(this.a,b))}}
H.dG.prototype={
gT:function(a){return new H.fZ(J.at(this.a),this.b)}}
H.fZ.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gE(s)))return!0
return!1},
gE:function(a){var s=this.a
return s.gE(s)}}
H.d1.prototype={}
H.fS.prototype={
k:function(a,b,c){throw H.c(P.A("Cannot modify an unmodifiable list"))}}
H.cB.prototype={}
H.cy.prototype={
gu:function(a){var s=this._hashCode
if(s!=null)return s
s=664597*J.ef(this.a)&536870911
this._hashCode=s
return s},
i:function(a){return'Symbol("'+H.r(this.a)+'")'},
l:function(a,b){if(b==null)return!1
return b instanceof H.cy&&this.a==b.a},
$idA:1}
H.cV.prototype={}
H.cU.prototype={
i:function(a){return P.m1(this)},
k:function(a,b,c){H.p_()},
$iH:1}
H.bH.prototype={
gj:function(a){return this.a},
bZ:function(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bZ(0,b))return null
return this.dL(b)},
dL:function(a){return this.b[a]},
B:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.dL(q))}}}
H.j2.prototype={
geO:function(){var s=this.a
return s},
gf6:function(){var s,r,q,p,o=this
if(o.c===1)return C.v
s=o.d
r=s.length-o.e.length-o.f
if(r===0)return C.v
q=[]
for(p=0;p<r;++p){if(p>=s.length)return H.b(s,p)
q.push(s[p])}q.fixed$length=Array
q.immutable$list=Array
return q},
geQ:function(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return C.z
s=k.e
r=s.length
q=k.d
p=q.length-r-k.f
if(r===0)return C.z
o=new H.Q(t.bV)
for(n=0;n<r;++n){if(n>=s.length)return H.b(s,n)
m=s[n]
l=p+n
if(l<0||l>=q.length)return H.b(q,l)
o.k(0,new H.cy(m),q[l])}return new H.cV(o,t.s)}}
H.jA.prototype={
$2:function(a,b){var s=this.a
s.b=s.b+"$"+a
this.b.push(a)
this.c.push(b);++s.a},
$S:5}
H.ke.prototype={
ax:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dq.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eJ.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fR.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.jv.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.dV.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$idy:1}
H.bE.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.oh(r==null?"unknown":r)+"'"},
$id3:1,
gkB:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fv.prototype={}
H.fp.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.oh(s)+"'"}}
H.c9.prototype={
l:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.c9))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gu:function(a){var s,r=this.c
if(r==null)s=H.dr(this.a)
else s=typeof r!=="object"?J.ef(r):H.dr(r)
return(s^H.dr(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.r(this.d)+"' of "+("Instance of '"+H.ds(s)+"'")}}
H.ff.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.l5.prototype={}
H.Q.prototype={
gj:function(a){return this.a},
gb3:function(a){return new H.bi(this)},
gky:function(a){return H.pb(new H.bi(this),new H.j3(this))},
bZ:function(a,b){var s=this.b
if(s==null)return!1
return this.hm(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bS(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bS(p,b)
q=r==null?n:r.b
return q}else return o.jN(b)},
jN:function(a){var s,r,q=this.d
if(q==null)return null
s=this.dM(q,J.ef(a)&0x3ffffff)
r=this.eI(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.dz(s==null?m.b=m.cp():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.dz(r==null?m.c=m.cp():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.cp()
p=J.ef(b)&0x3ffffff
o=m.dM(q,p)
if(o==null)m.cA(q,p,[m.cq(b,c)])
else{n=m.eI(o,b)
if(n>=0)o[n].b=c
else o.push(m.cq(b,c))}}},
B:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.be(s))
r=r.c}},
dz:function(a,b,c){var s=this.bS(a,b)
if(s==null)this.cA(a,b,this.cq(b,c))
else s.b=c},
cq:function(a,b){var s=this,r=new H.j5(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
eI:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1},
i:function(a){return P.m1(this)},
bS:function(a,b){return a[b]},
dM:function(a,b){return a[b]},
cA:function(a,b,c){a[b]=c},
hq:function(a,b){delete a[b]},
hm:function(a,b){return this.bS(a,b)!=null},
cp:function(){var s="<non-identifier-key>",r=Object.create(null)
this.cA(r,s,r)
this.hq(r,s)
return r}}
H.j3.prototype={
$1:function(a){var s=this.a
return H.a_(s).Q[1].a(s.h(0,a))},
$S:function(){return H.a_(this.a).a1("2(1)")}}
H.j5.prototype={}
H.bi.prototype={
gj:function(a){return this.a.a},
gT:function(a){var s=this.a,r=new H.eL(s,s.r)
r.c=s.e
return r}}
H.eL.prototype={
gE:function(a){return H.a_(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.be(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.lG.prototype={
$1:function(a){return this.a(a)},
$S:13}
H.lH.prototype={
$2:function(a,b){return this.a(a,b)},
$S:49}
H.lI.prototype={
$1:function(a){return this.a(a)},
$S:37}
H.eH.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inb:1}
H.dl.prototype={$idl:1}
H.V.prototype={$iV:1,$iap:1}
H.ct.prototype={
gj:function(a){return a.length},
$ix:1,
$iz:1}
H.bT.prototype={
h:function(a,b){H.b7(b,a,a.length)
return a[b]},
k:function(a,b,c){H.b7(b,a,a.length)
a[b]=c},
$ik:1,
$ii:1,
$il:1}
H.dm.prototype={
k:function(a,b,c){H.b7(b,a,a.length)
a[b]=c},
$ik:1,
$ii:1,
$il:1}
H.eU.prototype={
h:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.eV.prototype={
h:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.eW.prototype={
h:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.eX.prototype={
h:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.eY.prototype={
h:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.dn.prototype={
gj:function(a){return a.length},
h:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.bU.prototype={
gj:function(a){return a.length},
h:function(a,b){H.b7(b,a,a.length)
return a[b]},
$ibU:1,
$idC:1}
H.dO.prototype={}
H.dP.prototype={}
H.dQ.prototype={}
H.dR.prototype={}
H.ax.prototype={
a1:function(a){return H.hT(v.typeUniverse,this,a)},
ce:function(a){return H.q2(v.typeUniverse,this,a)}}
H.hi.prototype={}
H.hd.prototype={
i:function(a){return this.a}}
H.e_.prototype={}
P.kM.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
P.kL.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:46}
P.kN.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:12}
P.kO.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:12}
P.dZ.prototype={
fS:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bw(new P.le(this,b),0),a)
else throw H.c(P.A("`setTimeout()` not found."))},
fT:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bw(new P.ld(this,a,Date.now(),b),0),a)
else throw H.c(P.A("Periodic timer."))},
$ik8:1}
P.le.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$C:"$0",
$R:0,
$S:1}
P.ld.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.fE(s,o)}q.c=p
r.d.$1(q)},
$C:"$0",
$R:0,
$S:12}
P.cF.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.r(this.a)+")"}}
P.cH.prototype={
gE:function(a){var s=this.c
if(s==null)return this.b
return s.gE(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.cF){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.b(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.at(s)
if(o instanceof P.cH){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dW.prototype={
gT:function(a){return new P.cH(this.a())}}
P.ek.prototype={
i:function(a){return H.r(this.a)},
$iE:1,
gbP:function(){return this.b}}
P.h4.prototype={
eh:function(a){var s,r
H.lB(a,"error",t.K)
s=this.a
if(s.a!==0)throw H.c(P.m7("Future already completed"))
r=P.mP(a)
s.ha(a,r)}}
P.dH.prototype={
jv:function(a,b){var s=this.a
if(s.a!==0)throw H.c(P.m7("Future already completed"))
s.h9(b)}}
P.hj.prototype={
jR:function(a){if((this.c&15)!==6)return!0
return this.b.b.da(this.d,a.a)},
jM:function(a){var s=this.e,r=a.a,q=this.b.b
if(t.l.b(s))return q.kj(s,r,a.b)
else return q.da(s,r)}}
P.aT.prototype={
fe:function(a,b,c){var s,r,q=$.N
if(q!==C.e)b=b!=null?P.r1(b,q):b
s=new P.aT(q,c.a1("aT<0>"))
r=b==null?1:3
this.dA(new P.hj(s,r,a,b,this.$ti.a1("@<1>").ce(c).a1("hj<1,2>")))
return s},
kq:function(a,b){return this.fe(a,null,b)},
dA:function(a){var s,r=this,q=r.a
if(q<=1){a.a=r.c
r.c=a}else{if(q===2){q=r.c
s=q.a
if(s<4){q.dA(a)
return}r.a=s
r.c=q.c}P.cL(null,null,r.b,new P.kQ(r,a))}},
dU:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=m.c
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){s=m.c
n=s.a
if(n<4){s.dU(a)
return}m.a=n
m.c=s.c}l.a=m.bU(a)
P.cL(null,null,m.b,new P.kX(l,m))}},
cw:function(){var s=this.c
this.c=null
return this.bU(s)},
bU:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
hg:function(a){var s,r,q,p=this
p.a=1
try{a.fe(new P.kT(p),new P.kU(p),t.P)}catch(q){s=H.ad(q)
r=H.by(q)
P.ry(new P.kV(p,s,r))}},
dH:function(a){var s=this,r=s.cw()
s.a=4
s.c=a
P.dJ(s,r)},
bR:function(a,b){var s=this,r=s.cw(),q=P.ip(a,b)
s.a=8
s.c=q
P.dJ(s,r)},
h9:function(a){if(this.$ti.a1("cj<1>").b(a)){this.hh(a)
return}this.hb(a)},
hb:function(a){this.a=1
P.cL(null,null,this.b,new P.kS(this,a))},
hh:function(a){var s=this
if(s.$ti.b(a)){if(a.a===8){s.a=1
P.cL(null,null,s.b,new P.kW(s,a))}else P.me(a,s)
return}s.hg(a)},
ha:function(a,b){this.a=1
P.cL(null,null,this.b,new P.kR(this,a,b))},
$icj:1}
P.kQ.prototype={
$0:function(){P.dJ(this.a,this.b)},
$S:1}
P.kX.prototype={
$0:function(){P.dJ(this.b,this.a.a)},
$S:1}
P.kT.prototype={
$1:function(a){var s,r,q,p=this.a
p.a=0
try{p.dH(p.$ti.c.a(a))}catch(q){s=H.ad(q)
r=H.by(q)
p.bR(s,r)}},
$S:17}
P.kU.prototype={
$2:function(a,b){this.a.bR(a,b)},
$C:"$2",
$R:2,
$S:38}
P.kV.prototype={
$0:function(){this.a.bR(this.b,this.c)},
$S:1}
P.kS.prototype={
$0:function(){this.a.dH(this.b)},
$S:1}
P.kW.prototype={
$0:function(){P.me(this.b,this.a)},
$S:1}
P.kR.prototype={
$0:function(){this.a.bR(this.b,this.c)},
$S:1}
P.l_.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.kh(q.d)}catch(p){s=H.ad(p)
r=H.by(p)
q=m.c&&m.b.a.c.a===s
o=m.a
if(q)o.c=m.b.a.c
else o.c=P.ip(s,r)
o.b=!0
return}if(l instanceof P.aT&&l.a>=4){if(l.a===8){q=m.a
q.c=l.c
q.b=!0}return}if(t.c.b(l)){n=m.b.a
q=m.a
q.c=l.kq(new P.l0(n),t.z)
q.b=!1}},
$S:1}
P.l0.prototype={
$1:function(a){return this.a},
$S:47}
P.kZ.prototype={
$0:function(){var s,r,q,p,o
try{q=this.a
p=q.a
q.c=p.b.b.da(p.d,this.b)}catch(o){s=H.ad(o)
r=H.by(o)
q=this.a
q.c=P.ip(s,r)
q.b=!0}},
$S:1}
P.kY.prototype={
$0:function(){var s,r,q,p,o,n,m=this
try{s=m.a.a.c
p=m.b
if(p.a.jR(s)&&p.a.e!=null){p.c=p.a.jM(s)
p.b=!1}}catch(o){r=H.ad(o)
q=H.by(o)
p=m.a.a.c
n=m.b
if(p.a===r)n.c=p
else n.c=P.ip(r,q)
n.b=!0}},
$S:1}
P.h0.prototype={}
P.fr.prototype={}
P.fs.prototype={}
P.lk.prototype={}
P.lx.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:1}
P.l6.prototype={
kl:function(a){var s,r,q,p=null
try{if(C.e===$.N){a.$0()
return}P.nX(p,p,this,a)}catch(q){s=H.ad(q)
r=H.by(q)
P.lw(p,p,this,s,r)}},
kn:function(a,b){var s,r,q,p=null
try{if(C.e===$.N){a.$1(b)
return}P.nY(p,p,this,a,b)}catch(q){s=H.ad(q)
r=H.by(q)
P.lw(p,p,this,s,r)}},
ko:function(a,b){return this.kn(a,b,t.z)},
cK:function(a){return new P.l7(this,a)},
ec:function(a,b){return new P.l8(this,a,b)},
ki:function(a){if($.N===C.e)return a.$0()
return P.nX(null,null,this,a)},
kh:function(a){return this.ki(a,t.z)},
km:function(a,b){if($.N===C.e)return a.$1(b)
return P.nY(null,null,this,a,b)},
da:function(a,b){return this.km(a,b,t.z,t.z)},
kk:function(a,b,c){if($.N===C.e)return a.$2(b,c)
return P.r2(null,null,this,a,b,c)},
kj:function(a,b,c){return this.kk(a,b,c,t.z,t.z,t.z)}}
P.l7.prototype={
$0:function(){return this.a.kl(this.b)},
$S:1}
P.l8.prototype={
$1:function(a){return this.a.ko(this.b,a)},
$S:function(){return this.c.a1("~(0)")}}
P.dK.prototype={
gT:function(a){var s=new P.dL(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
M:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.hj(b)
return r}},
hj:function(a){var s=this.d
if(s==null)return!1
return this.cm(s[this.ci(a)],a)>=0},
m:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dG(s==null?q.b=P.mf():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dG(r==null?q.c=P.mf():r,b)}else return q.fV(0,b)},
fV:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.mf()
s=q.ci(b)
r=p[s]
if(r==null)p[s]=[q.cg(b)]
else{if(q.cm(r,b)>=0)return!1
r.push(q.cg(b))}return!0},
U:function(a,b){if((b&1073741823)===b)return this.iU(this.c,b)
else return this.iT(0,b)},
iT:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.ci(b)
r=n[s]
q=o.cm(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.e2(p)
return!0},
dG:function(a,b){if(a[b]!=null)return!1
a[b]=this.cg(b)
return!0},
iU:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.e2(s)
delete a[b]
return!0},
dP:function(){this.r=this.r+1&1073741823},
cg:function(a){var s,r=this,q=new P.l4(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dP()
return q},
e2:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dP()},
ci:function(a){return J.ef(a)&1073741823},
cm:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1}}
P.l4.prototype={}
P.dL.prototype={
gE:function(a){return H.a_(this).c.a(this.d)},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.be(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.d4.prototype={}
P.dc.prototype={$ik:1,$ii:1,$il:1}
P.p.prototype={
gT:function(a){return new H.bP(a,this.gj(a))},
G:function(a,b){return this.h(a,b)},
B:function(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.c(P.be(a))}},
geJ:function(a){return this.gj(a)===0},
d4:function(a,b){return new H.bR(a,b)},
eN:function(a,b){return this.d4(a,b,t.z)},
ks:function(a,b){var s,r,q,p,o=this
if(o.geJ(a)){s=J.lX(0)
return s}r=o.h(a,0)
q=P.aw(o.gj(a),r,!0)
for(p=1;p<o.gj(a);++p){s=o.h(a,p)
if(p>=q.length)return H.b(q,p)
q[p]=s}return q},
kr:function(a){return this.ks(a,!0)},
eB:function(a,b,c,d){var s
H.c5(a).a1("p.E").a(d)
P.bn(b,c,this.gj(a))
for(s=b;s<c;++s)this.k(a,s,d)},
i:function(a){return P.lW(a,"[","]")}}
P.df.prototype={}
P.j8.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.r(a)
r.a=s+": "
r.a+=H.r(b)},
$S:63}
P.a0.prototype={
B:function(a,b){var s,r,q
for(s=J.at(this.gb3(a)),r=H.c5(a).a1("a0.V");s.t();){q=s.gE(s)
b.$2(q,r.a(this.h(a,q)))}},
gj:function(a){return J.aU(this.gb3(a))},
i:function(a){return P.m1(a)},
$iH:1}
P.hU.prototype={
k:function(a,b,c){throw H.c(P.A("Cannot modify unmodifiable map"))}}
P.dg.prototype={
h:function(a,b){return J.mN(this.a,b)},
k:function(a,b,c){J.lS(this.a,b,c)},
B:function(a,b){J.ee(this.a,b)},
gj:function(a){return J.aU(this.a)},
i:function(a){return J.eg(this.a)},
$iH:1}
P.bq.prototype={}
P.fh.prototype={
i:function(a){return P.lW(this,"{","}")},
G:function(a,b){var s,r,q,p,o="index"
H.lB(b,o,t.S)
P.n9(b,o)
for(s=P.pN(this,this.r),r=H.a_(s).c,q=0;s.t();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.K(b,this,o,null,q))}}
P.dS.prototype={$ik:1,$ii:1}
P.dM.prototype={}
P.e3.prototype={}
P.e5.prototype={}
P.ky.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ad(r)}return null},
$S:19}
P.kx.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ad(r)}return null},
$S:19}
P.iw.prototype={
jT:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bn(a2,a3,a1.length)
s=$.oD()
for(r=s.length,q=a2,p=q,o=null,n=-1,m=-1,l=0;q<a3;q=k){k=q+1
j=C.a.D(a1,q)
if(j===37){i=k+2
if(i<=a3){h=H.lF(C.a.D(a1,k))
g=H.lF(C.a.D(a1,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.b(s,f)
e=s[f]
if(e>=0){f=C.a.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.X("")
d=o}else d=o
d.a+=C.a.q(a1,p,q)
d.a+=H.b4(j)
p=k
continue}}throw H.c(P.a7("Invalid base64 data",a1,q))}if(o!=null){r=o.a+=C.a.q(a1,p,a3)
d=r.length
if(n>=0)P.mQ(a1,m,a3,n,l,d)
else{c=C.c.b8(d-1,4)+1
if(c===1)throw H.c(P.a7(a,a1,a3))
for(;c<4;){r+="="
o.a=r;++c}}r=o.a
return C.a.bw(a1,a2,a3,r.charCodeAt(0)==0?r:r)}b=a3-a2
if(n>=0)P.mQ(a1,m,a3,n,l,b)
else{c=C.c.b8(b,4)
if(c===1)throw H.c(P.a7(a,a1,a3))
if(c>1)a1=C.a.bw(a1,a3,a3,c===2?"==":"=")}return a1}}
P.ix.prototype={}
P.ep.prototype={}
P.es.prototype={}
P.iR.prototype={}
P.kv.prototype={
gjG:function(){return C.R}}
P.kz.prototype={
cO:function(a){var s,r,q,p=P.bn(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.lj(r)
if(q.hs(a,0,p)!==p){C.a.X(a,p-1)
q.cF()}return new Uint8Array(r.subarray(0,H.qn(0,q.b,s)))}}
P.lj.prototype={
cF:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.b(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.b(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.b(r,q)
r[q]=189},
jk:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.b(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(p>=o)return H.b(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(q>=o)return H.b(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(p>=o)return H.b(r,p)
r[p]=s&63|128
return!0}else{n.cF()
return!1}},
hs:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.jk(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.cF()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.b(s,o)
s[o]=p>>>6|192
l.b=m+1
s[m]=p&63|128}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.b(s,o)
s[o]=p>>>12|224
o=l.b=m+1
if(m>=r)return H.b(s,m)
s[m]=p>>>6&63|128
l.b=o+1
if(o>=r)return H.b(s,o)
s[o]=p&63|128}}}return q}}
P.kw.prototype={
cO:function(a){var s=this.a,r=P.pF(s,a,0,null)
if(r!=null)return r
return new P.li(s).jx(a,0,null,!0)}}
P.li.prototype={
jx:function(a,b,c,d){var s,r,q,p,o=this,n=P.bn(b,c,J.aU(a))
if(b===n)return""
s=P.qh(a,b,n)
r=o.cj(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.qi(q)
o.b=0
throw H.c(P.a7(p,a,b+o.c))}return r},
cj:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a3(b+c,2)
r=q.cj(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.cj(a,s,c,d)}return q.jA(a,b,c,d)},
jA:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.X(""),f=b+1,e=a.length
if(b<0||b>=e)return H.b(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.D("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.D(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.b4(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.b4(j)
break
case 65:g.a+=H.b4(j);--f
break
default:p=g.a+=H.b4(j)
g.a=p+H.b4(j)
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
g.a+=H.b4(a[l])}else g.a+=P.fu(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.b4(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.jt.prototype={
$2:function(a,b){var s=this.b,r=this.a,q=s.a+=r.a
q+=a.a
s.a=q
s.a=q+": "
s.a+=P.cg(b)
r.a=", "},
$S:33}
P.P.prototype={
l:function(a,b){if(b==null)return!1
return b instanceof P.P&&this.a===b.a&&!0},
ab:function(a,b){return C.c.ab(this.a,b.a)},
gu:function(a){var s=this.a
return(s^C.c.bm(s,30))&1073741823},
i:function(a){var s=this,r=P.p0(H.pp(s)),q=P.ev(H.pn(s)),p=P.ev(H.pj(s)),o=P.ev(H.pk(s)),n=P.ev(H.pm(s)),m=P.ev(H.po(s)),l=P.p1(H.pl(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.aH.prototype={
l:function(a,b){if(b==null)return!1
return b instanceof P.aH&&this.a===b.a},
gu:function(a){return C.c.gu(this.a)},
ab:function(a,b){return C.c.ab(this.a,b.a)},
i:function(a){var s,r,q,p=new P.iP(),o=this.a
if(o<0)return"-"+new P.aH(0-o).i(0)
s=p.$1(C.c.a3(o,6e7)%60)
r=p.$1(C.c.a3(o,1e6)%60)
q=new P.iO().$1(o%1e6)
return""+C.c.a3(o,36e8)+":"+s+":"+r+"."+q}}
P.iO.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.iP.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.E.prototype={
gbP:function(){return H.by(this.$thrownJsError)}}
P.ej.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.cg(s)
return"Assertion failed"}}
P.fE.prototype={}
P.f0.prototype={
i:function(a){return"Throw of null."}}
P.aF.prototype={
gcl:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gck:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+H.r(n),l=q.gcl()+o+m
if(!q.a)return l
s=q.gck()
r=P.cg(q.b)
return l+s+": "+r}}
P.cw.prototype={
gcl:function(){return"RangeError"},
gck:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.r(q):""
else if(q==null)s=": Not greater than or equal to "+H.r(r)
else if(q>r)s=": Not in inclusive range "+H.r(r)+".."+H.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.r(r)
return s}}
P.eC.prototype={
gcl:function(){return"RangeError"},
gck:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.f_.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new P.X("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=P.cg(n)
j.a=", "}k.d.B(0,new P.jt(j,i))
m=P.cg(k.a)
l=i.i(0)
r="NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"
return r}}
P.fT.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fQ.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.dz.prototype={
i:function(a){return"Bad state: "+this.a}}
P.er.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cg(s)+"."}}
P.f3.prototype={
i:function(a){return"Out of Memory"},
gbP:function(){return null},
$iE:1}
P.dx.prototype={
i:function(a){return"Stack Overflow"},
gbP:function(){return null},
$iE:1}
P.eu.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.hf.prototype={
i:function(a){return"Exception: "+this.a}}
P.iZ.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.q(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.D(d,o)
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
i=""}h=C.a.q(d,k,l)
return f+j+h+i+"\n"+C.a.v(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.r(e)+")"):f}}
P.i.prototype={
gj:function(a){var s,r=this.gT(this)
for(s=0;r.t();)++s
return s},
G:function(a,b){var s,r,q
P.n9(b,"index")
for(s=this.gT(this),r=0;s.t();){q=s.gE(s)
if(b===r)return q;++r}throw H.c(P.K(b,this,"index",null,r))},
i:function(a){return P.p5(this,"(",")")}}
P.eD.prototype={}
P.W.prototype={
gu:function(a){return P.C.prototype.gu.call(C.Z,this)},
i:function(a){return"null"}}
P.C.prototype={constructor:P.C,$iC:1,
l:function(a,b){return this===b},
gu:function(a){return H.dr(this)},
i:function(a){return"Instance of '"+H.ds(this)+"'"},
eT:function(a,b){throw H.c(P.n5(this,b.geO(),b.gf6(),b.geQ()))},
toString:function(){return this.i(this)}}
P.hK.prototype={
i:function(a){return""},
$idy:1}
P.X.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.kt.prototype={
$2:function(a,b){var s,r,q,p=C.a.eH(b,"=")
if(p===-1){if(b!=="")J.lS(a,P.mo(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.q(b,0,p)
r=C.a.aC(b,p+1)
q=this.a
J.lS(a,P.mo(s,0,s.length,q,!0),P.mo(r,0,r.length,q,!0))}return a},
$S:35}
P.kq.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:39}
P.kr.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.ks.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.ea(C.a.q(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:58}
P.c0.prototype={
gcD:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?""+o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.r(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.f(H.m0("_text"))}return o},
gu:function(a){var s=this,r=s.z
if(r==null){r=C.a.gu(s.gcD())
if(s.z==null)s.z=r
else r=H.f(H.m0("hashCode"))}return r},
gfa:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.bq(P.no(r==null?"":r),t.i)
if(s.Q==null)s.Q=r
else r=H.f(H.m0("queryParameters"))}return r},
gfh:function(){return this.b},
gd0:function(a){var s=this.c
if(s==null)return""
if(C.a.ac(s,"["))return C.a.q(s,1,s.length-1)
return s},
gc3:function(a){var s=this.d
return s==null?P.nI(this.a):s},
gd9:function(a){var s=this.f
return s==null?"":s},
geC:function(){var s=this.r
return s==null?"":s},
fb:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.ac(s,"/"))s="/"+s
q=s
p=P.mm(null,0,0,b)
return new P.c0(n,l,j,k,q,p,o.r)},
geD:function(){return this.c!=null},
geG:function(){return this.f!=null},
geE:function(){return this.r!=null},
i:function(a){return this.gcD()},
l:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.k.b(b))if(q.a===b.gc8())if(q.c!=null===b.geD())if(q.b===b.gfh())if(q.gd0(q)===b.gd0(b))if(q.gc3(q)===b.gc3(b))if(q.e===b.gf1(b)){s=q.f
r=s==null
if(!r===b.geG()){if(r)s=""
if(s===b.gd9(b)){s=q.r
r=s==null
if(!r===b.geE()){if(r)s=""
s=s===b.geC()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifU:1,
gc8:function(){return this.a},
gf1:function(a){return this.e}}
P.lg.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.lh(C.h,a,C.f,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.lh(C.h,b,C.f,!0)}},
$S:32}
P.lf.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.at(b),r=this.a;s.t();)r.$2(a,s.gE(s))},
$S:5}
P.kp.prototype={
gfg:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.b(m,0)
s=o.a
m=m[0]+1
r=C.a.c0(s,"?",m)
q=s.length
if(r>=0){p=P.e4(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.h7("data","",n,n,P.e4(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.lq.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.b(s,a)
s=s[a]
C.A.eB(s,0,96,b)
return s},
$S:62}
P.lr.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.D(b,r)^96
if(q>=96)return H.b(a,q)
a[q]=c}},
$S:16}
P.ls.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.D(b,0),r=C.a.D(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.b(a,q)
a[q]=c}},
$S:16}
P.hB.prototype={
geD:function(){return this.c>0},
geF:function(){return this.c>0&&this.d+1<this.e},
geG:function(){return this.f<this.r},
geE:function(){return this.r<this.a.length},
gc8:function(){var s=this.x
return s==null?this.x=this.hk():s},
hk:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.ac(r.a,"http"))return"http"
if(q===5&&C.a.ac(r.a,"https"))return"https"
if(s&&C.a.ac(r.a,"file"))return"file"
if(q===7&&C.a.ac(r.a,"package"))return"package"
return C.a.q(r.a,0,q)},
gfh:function(){var s=this.c,r=this.b+3
return s>r?C.a.q(this.a,r,s-1):""},
gd0:function(a){var s=this.c
return s>0?C.a.q(this.a,s,this.d):""},
gc3:function(a){var s,r=this
if(r.geF())return P.ea(C.a.q(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.ac(r.a,"http"))return 80
if(s===5&&C.a.ac(r.a,"https"))return 443
return 0},
gf1:function(a){return C.a.q(this.a,this.e,this.f)},
gd9:function(a){var s=this.f,r=this.r
return s<r?C.a.q(this.a,s+1,r):""},
geC:function(){var s=this.r,r=this.a
return s<r.length?C.a.aC(r,s+1):""},
gfa:function(){var s=this
if(s.f>=s.r)return C.a3
return new P.bq(P.no(s.gd9(s)),t.i)},
fb:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gc8(),k=l==="file",j=n.c,i=j>0?C.a.q(n.a,n.b+3,j):"",h=n.geF()?n.gc3(n):m
j=n.c
if(j>0)s=C.a.q(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.q(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.ac(r,"/"))r="/"+r
p=P.mm(m,0,0,b)
q=n.r
o=q<j.length?C.a.aC(j,q+1):m
return new P.c0(l,i,s,h,r,p,o)},
gu:function(a){var s=this.y
return s==null?this.y=C.a.gu(this.a):s},
l:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.k.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifU:1}
P.h7.prototype={}
W.n.prototype={}
W.il.prototype={
gj:function(a){return a.length}}
W.eh.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ei.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.c8.prototype={$ic8:1}
W.bC.prototype={$ibC:1}
W.bD.prototype={
dh:function(a,b,c){if(c!=null)return a.getContext(b,P.o4(c))
return a.getContext(b)},
fm:function(a,b){return this.dh(a,b,null)},
$ibD:1}
W.cS.prototype={$icS:1}
W.aG.prototype={
gj:function(a){return a.length}}
W.iH.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.cW.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.iI.prototype={}
W.av.prototype={}
W.aW.prototype={}
W.iJ.prototype={
gj:function(a){return a.length}}
W.iK.prototype={
gj:function(a){return a.length}}
W.iL.prototype={
gj:function(a){return a.length}}
W.iM.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cY.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.cZ.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.r(r)+", "
s=a.top
s.toString
return r+H.r(s)+") "+H.r(this.gb7(a))+" x "+H.r(this.gb2(a))},
l:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.c4(b)
if(s===r.gag(b)){s=a.top
s.toString
s=s===r.gc4(b)&&this.gb7(a)===r.gb7(b)&&this.gb2(a)===r.gb2(b)}else s=!1}else s=!1
return s},
gu:function(a){var s,r=a.left
r.toString
r=C.d.gu(r)
s=a.top
s.toString
return W.nA(r,C.d.gu(s),C.d.gu(this.gb7(a)),C.d.gu(this.gb2(a)))},
ged:function(a){var s=a.bottom
s.toString
return s},
gdO:function(a){return a.height},
gb2:function(a){var s=this.gdO(a)
s.toString
return s},
gag:function(a){var s=a.left
s.toString
return s},
gaj:function(a){var s=a.right
s.toString
return s},
gc4:function(a){var s=a.top
s.toString
return s},
ge4:function(a){return a.width},
gb7:function(a){var s=this.ge4(a)
s.toString
return s},
$iab:1}
W.ew.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.iN.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.h3.prototype={
geJ:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
this.a.replaceChild(c,s[b]).toString},
m:function(a,b){this.a.appendChild(b).toString
return b},
gT:function(a){var s=this.kr(this)
return new J.af(s,s.length)}}
W.G.prototype={
gef:function(a){var s=a.children
s.toString
return new W.h3(a,s)},
geg:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.ab(p,s,r,q,t.q)},
i:function(a){var s=a.localName
s.toString
return s},
$iG:1}
W.j.prototype={$ij:1}
W.d.prototype={
jm:function(a,b,c,d){if(c!=null)this.fY(a,b,c,!1)},
fY:function(a,b,c,d){return a.addEventListener(b,H.bw(c,1),!1)},
$id:1}
W.ak.prototype={$iak:1}
W.ci.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1,
$ici:1}
W.ey.prototype={
gj:function(a){return a.length}}
W.eA.prototype={
gj:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.j1.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.bJ.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.bK.prototype={
gej:function(a){var s=a.data
s.toString
return s},
$ibK:1}
W.cl.prototype={$icl:1}
W.bO.prototype={$ibO:1}
W.j6.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bS.prototype={}
W.jp.prototype={
gj:function(a){return a.length}}
W.cr.prototype={$icr:1}
W.eQ.prototype={
h:function(a,b){return P.bx(a.get(b))},
B:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bx(s.value[1]))}},
gb3:function(a){var s=[]
this.B(a,new W.jq(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Not supported"))},
$iH:1}
W.jq.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eR.prototype={
h:function(a,b){return P.bx(a.get(b))},
B:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bx(s.value[1]))}},
gb3:function(a){var s=[]
this.B(a,new W.jr(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Not supported"))},
$iH:1}
W.jr.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aM.prototype={$iaM:1}
W.eS.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.an.prototype={$ian:1}
W.h2.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.b(r,b)
s.replaceChild(c,r[b]).toString},
gT:function(a){var s=this.a.childNodes
return new W.d2(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.b(s,b)
return s[b]}}
W.w.prototype={
kf:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.oG(s,b,a)}catch(q){H.ad(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.fw(a):s},
iV:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$iw:1}
W.dp.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.aN.prototype={
gj:function(a){return a.length},
$iaN:1}
W.f8.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.fe.prototype={
h:function(a,b){return P.bx(a.get(b))},
B:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bx(s.value[1]))}},
gb3:function(a){var s=[]
this.B(a,new W.jL(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Not supported"))},
$iH:1}
W.jL.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.fg.prototype={
gj:function(a){return a.length}}
W.ay.prototype={$iay:1}
W.fk.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.aO.prototype={$iaO:1}
W.fl.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.aP.prototype={
gj:function(a){return a.length},
$iaP:1}
W.fq.prototype={
h:function(a,b){return a.getItem(H.qk(b))},
k:function(a,b,c){a.setItem(b,c)},
B:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gb3:function(a){var s=[]
this.B(a,new W.jU(s))
return s},
gj:function(a){var s=a.length
s.toString
return s},
$iH:1}
W.jU.prototype={
$2:function(a,b){return this.a.push(a)},
$S:31}
W.ao.prototype={$iao:1}
W.bo.prototype={$ibo:1}
W.az.prototype={$iaz:1}
W.ag.prototype={$iag:1}
W.fw.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.fx.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.k7.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.aQ.prototype={$iaQ:1}
W.c_.prototype={$ic_:1}
W.fB.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.kc.prototype={
gj:function(a){return a.length}}
W.b6.prototype={}
W.ku.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fW.prototype={
gj:function(a){return a.length}}
W.br.prototype={
gjC:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.A("deltaY is not supported"))},
gjB:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.A("deltaX is not supported"))},
$ibr:1}
W.bs.prototype={
iW:function(a,b){var s=a.requestAnimationFrame(H.bw(b,1))
s.toString
return s},
hr:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibs:1}
W.aS.prototype={$iaS:1}
W.h5.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.dI.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.r(r)+", "
s=a.top
s.toString
s=r+H.r(s)+") "
r=a.width
r.toString
r=s+H.r(r)+" x "
s=a.height
s.toString
return r+H.r(s)},
l:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.c4(b)
if(s===r.gag(b)){s=a.top
s.toString
if(s===r.gc4(b)){s=a.width
s.toString
if(s===r.gb7(b)){s=a.height
s.toString
r=s===r.gb2(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gu:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gu(p)
s=a.top
s.toString
s=C.d.gu(s)
r=a.width
r.toString
r=C.d.gu(r)
q=a.height
q.toString
return W.nA(p,s,r,C.d.gu(q))},
gdO:function(a){return a.height},
gb2:function(a){var s=a.height
s.toString
return s},
ge4:function(a){return a.width},
gb7:function(a){var s=a.width
s.toString
return s}}
W.hk.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.dN.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.hE.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.hL.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ix:1,
$ik:1,
$iz:1,
$ii:1,
$il:1}
W.lV.prototype={}
W.he.prototype={}
W.kP.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.md.prototype={}
W.J.prototype={
gT:function(a){return new W.d2(a,this.gj(a))}}
W.d2.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.mN(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gE:function(a){return H.a_(this).c.a(this.d)}}
W.h6.prototype={}
W.h8.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.hb.prototype={}
W.hg.prototype={}
W.hh.prototype={}
W.hl.prototype={}
W.hm.prototype={}
W.hp.prototype={}
W.hq.prototype={}
W.hr.prototype={}
W.hs.prototype={}
W.ht.prototype={}
W.hu.prototype={}
W.hx.prototype={}
W.hy.prototype={}
W.hA.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.hC.prototype={}
W.hD.prototype={}
W.hH.prototype={}
W.hM.prototype={}
W.hN.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.hO.prototype={}
W.hP.prototype={}
W.hV.prototype={}
W.hW.prototype={}
W.hX.prototype={}
W.hY.prototype={}
W.hZ.prototype={}
W.i_.prototype={}
W.i0.prototype={}
W.i1.prototype={}
W.i2.prototype={}
W.i3.prototype={}
P.l9.prototype={
cY:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
c6:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.i4(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.P)return new Date(a.a)
if(t.a7.b(a))throw H.c(P.ko("structured clone of RegExp"))
if(t.cZ.b(a))return a
if(t.d.b(a))return a
if(t.da.b(a))return a
if(t.I.b(a))return a
if(t.o.b(a)||t.t.b(a)||t.cB.b(a))return a
if(t.f.b(a)){s=n.cY(a)
r=n.b
q=r.length
if(s>=q)return H.b(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.b(r,s)
r[s]=p
J.ee(a,new P.lb(m,n))
return m.a}if(t.b.b(a)){s=n.cY(a)
m=n.b
if(s>=m.length)return H.b(m,s)
p=m[s]
if(p!=null)return p
return n.jy(a,s)}if(t.m.b(a)){s=n.cY(a)
r=n.b
q=r.length
if(s>=q)return H.b(r,s)
p=m.b=r[s]
if(p!=null)return p
o={}
o.toString
m.b=o
if(s>=q)return H.b(r,s)
r[s]=o
n.jK(a,new P.lc(m,n))
return m.b}throw H.c(P.ko("structured clone of other type"))},
jy:function(a,b){var s,r,q=J.c3(a),p=q.gj(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.b(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.c6(q.h(a,r))
if(r>=o.length)return H.b(o,r)
o[r]=s}return o}}
P.lb.prototype={
$2:function(a,b){this.a.a[a]=this.b.c6(b)},
$S:18}
P.lc.prototype={
$2:function(a,b){this.a.b[a]=this.b.c6(b)},
$S:45}
P.e0.prototype={$ibK:1,
gej:function(a){return this.a}}
P.lm.prototype={
$1:function(a){this.a.push(P.nR(a))},
$S:6}
P.lC.prototype={
$2:function(a,b){this.a[a]=P.nR(b)},
$S:18}
P.la.prototype={
jK:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.ez.prototype={
gbC:function(){return new H.bQ(new H.dG(this.b,new P.iX()),new P.iY())},
B:function(a,b){C.b.B(P.cp(this.gbC(),!1),b)},
k:function(a,b,c){var s=this.gbC()
J.oM(s.b.$1(J.ik(s.a,b)),c)},
m:function(a,b){this.b.a.appendChild(b).toString},
gj:function(a){return J.aU(this.gbC().a)},
h:function(a,b){var s=this.gbC()
return s.b.$1(J.ik(s.a,b))},
gT:function(a){var s=P.cp(this.gbC(),!1)
return new J.af(s,s.length)}}
P.iX.prototype={
$1:function(a){return t.h.b(a)},
$S:48}
P.iY.prototype={
$1:function(a){return t.h.a(a)},
$S:56}
P.d8.prototype={$id8:1}
P.lo.prototype={
$1:function(a){var s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.qm,a,!1)
P.mq(s,$.lR(),a)
return s},
$S:13}
P.lp.prototype={
$1:function(a){return new this.a(a)},
$S:13}
P.ly.prototype={
$1:function(a){return new P.d6(a)},
$S:29}
P.lz.prototype={
$1:function(a){return new P.bN(a)},
$S:60}
P.lA.prototype={
$1:function(a){return new P.b_(a)},
$S:30}
P.b_.prototype={
h:function(a,b){return P.mp(this.a[b])},
k:function(a,b,c){if(typeof b!="string"&&typeof b!="number")throw H.c(P.bc("property is not a String or num"))
this.a[b]=P.ln(c)},
l:function(a,b){if(b==null)return!1
return b instanceof P.b_&&this.a===b.a},
i:function(a){var s,r
try{s=String(this.a)
return s}catch(r){H.ad(r)
s=this.fC(0)
return s}},
js:function(a,b){var s=this.a,r=b==null?null:P.cp(new H.bR(b,P.rq()),!0)
return P.mp(s[a].apply(s,r))},
gu:function(a){return 0}}
P.d6.prototype={}
P.bN.prototype={
dF:function(a){var s=this,r=a<0||a>=s.gj(s)
if(r)throw H.c(P.a5(a,0,s.gj(s),null,null))},
h:function(a,b){this.dF(b)
return this.fA(0,b)},
k:function(a,b,c){this.dF(b)
this.fD(0,b,c)},
gj:function(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw H.c(P.m7("Bad JsArray length"))},
$ik:1,
$ii:1,
$il:1}
P.cG.prototype={
k:function(a,b,c){return this.fB(0,b,c)}}
P.ju.prototype={
i:function(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
P.lL.prototype={
$1:function(a){return this.a.jv(0,a)},
$S:6}
P.lM.prototype={
$1:function(a){if(a==null)return this.a.eh(new P.ju(a===undefined))
return this.a.eh(a)},
$S:6}
P.l1.prototype={
jS:function(a){if(a<=0||a>4294967296)throw H.c(P.ps("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.hz.prototype={
gaj:function(a){return this.$ti.c.a(this.a+this.c)},
ged:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
l:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.c4(b)
if(s===r.gag(b)){q=o.b
if(q===r.gc4(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gaj(b)&&p.a(q+o.d)===r.ged(b)}else s=!1}else s=!1}else s=!1
return s},
gu:function(a){var s=this,r=s.a,q=C.c.gu(r),p=s.b,o=C.c.gu(p),n=s.$ti.c
r=C.c.gu(n.a(r+s.c))
p=C.c.gu(n.a(p+s.d))
return H.pB(H.jV(H.jV(H.jV(H.jV(0,q),o),r),p))}}
P.ab.prototype={
gag:function(a){return this.a},
gc4:function(a){return this.b},
gb7:function(a){return this.c},
gb2:function(a){return this.d}}
P.bh.prototype={$ibh:1}
P.eK.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ik:1,
$ii:1,
$il:1}
P.bk.prototype={$ibk:1}
P.f1.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ik:1,
$ii:1,
$il:1}
P.jz.prototype={
gj:function(a){return a.length}}
P.ft.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ik:1,
$ii:1,
$il:1}
P.m.prototype={
gef:function(a){return new P.ez(a,new W.h2(a))}}
P.bp.prototype={$ibp:1}
P.fC.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ik:1,
$ii:1,
$il:1}
P.hn.prototype={}
P.ho.prototype={}
P.hv.prototype={}
P.hw.prototype={}
P.hI.prototype={}
P.hJ.prototype={}
P.hQ.prototype={}
P.hR.prototype={}
P.is.prototype={
gj:function(a){return a.length}}
P.el.prototype={
h:function(a,b){return P.bx(a.get(b))},
B:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bx(s.value[1]))}},
gb3:function(a){var s=[]
this.B(a,new P.iv(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Not supported"))},
$iH:1}
P.iv.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.em.prototype={
gj:function(a){return a.length}}
P.bd.prototype={}
P.f2.prototype={
gj:function(a){return a.length}}
P.h1.prototype={}
P.cx.prototype={
kp:function(a,b,c,d,e,f,g){var s
if(t.I.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.re(g))
return}if(t.b0.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bc("Incorrect number or type of arguments"))},
$icx:1}
P.fm.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.K(b,a,null,null,null))
s=P.bx(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.A("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ik:1,
$ii:1,
$il:1}
P.hF.prototype={}
P.hG.prototype={}
L.jw.prototype={}
B.iU.prototype={
au:function(a){var s,r,q,p,o,n,m,l,k,j=this,i=$.oj()
if(a>=8)return H.b(i,a)
s=i[a]
r=j.c.as(0,s).as(0,$.mH().v(0,s.a+s.b))
i=r.a
q=r.b
p=2-i*i-q*q
if(p>0){o=p*p
n=j.e
m=j.b.K(0,s)
l=j.a
m=l[l[C.d.aP(m.a)&255]+C.d.aP(m.b)&255]
k=$.ok()[m>>>1&7]
j.e=n+o*o*(k.a*i+k.b*q)}}}
B.bl.prototype={
K:function(a,b){return new B.bl(this.a+b.a,this.b+b.b)},
as:function(a,b){return new B.bl(this.a-b.a,this.b-b.b)},
v:function(a,b){return new B.bl(this.a*b,this.b*b)},
i:function(a){return H.r(this.a)+", "+H.r(this.b)}}
K.im.prototype={
bt:function(a,b){return!0},
i:function(a){return"all"}}
K.eB.prototype={
bt:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].bt(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.bj.prototype={
bt:function(a,b){return!this.fv(0,b)},
i:function(a){return"!["+this.ca(0)+"]"}}
K.Z.prototype={
a0:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.h("May not create a Set with zero characters."))
s=new H.Q(t.c_)
for(r=new H.bP(a,a.gj(a)),q=H.a_(r).c;r.t();)s.k(0,q.a(r.d),!0)
p=P.cp(new H.bi(s),!0)
C.b.fs(p)
this.a=p},
bt:function(a,b){return C.b.M(this.a,b)},
i:function(a){return P.fu(this.a,0,null)}}
L.fn.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.kd(this.a.O(0,b),[])
s.push(p)
return p},
jH:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.bt(0,a))return p}return null},
i:function(a){return this.b},
e1:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.M(0,s==null?null:s.b))m+=" (consume)"
s=n.d
s=s==null?null:new H.bi(s.c)
s=J.at(s==null?[]:s)
for(;s.t();){r=s.gE(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.M(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.ca(0))}return m.charCodeAt(0)==0?m:m}}
L.fz.prototype={
i:function(a){var s=H.of(this.b,"\n","\\n"),r=H.of(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fA.prototype={
i:function(a){return this.b}}
L.ka.prototype={
O:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.fn(this,b,[])
s.k(0,b,r)}return r},
bM:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fA(a,P.L(s,s))
r.k(0,a,q)}return q},
ff:function(a){return this.kt(a)},
kt:function(a){var s=this
return P.qF(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$ff(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=H.a_(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a0.length
if(h!==0){if(!!a0.fixed$length)H.f(P.A("removeAt"))
if(0>=h)H.f(P.fa(0,null))
g=a0.splice(0,1)[0]}else{if(!r.t()){q=3
break}g=n.a(r.d)}b.push(g);++k
h=d==null
f=h?null:d.jH(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.fu(b,0,null)
throw H.c(P.h("Untokenizable string [state: "+H.r(h?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!b.fixed$length)H.f(P.A("removeRange"))
P.bn(0,i,b.length)
b.splice(0,i-0)
C.b.af(a0,b)
b=[]
c=[]
d=s.d
q=!m.M(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)c.push(g)
d=f.b
h=d.d
if(h!=null){e=P.fu(c,0,null)
h=d.d
if(h==null)l=null
else{h.c.h(0,e)
h=h.b
h=new L.fz(h,e,k)
l=h}i=b.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.M(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.pL()
case 1:return P.pM(o)}}},t.aR)},
i:function(a){var s,r,q=new P.X(""),p=this.d
if(p!=null)q.a=""+(p.e1()+"\n")
for(p=this.a,p=p.gky(p),p=new H.dh(J.at(p.a),p.b),s=H.a_(p).Q[1];p.t();){r=s.a(p.a)
if(r!=this.d)q.a+=H.r(r==null?null:r.e1())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.kd.prototype={
i:function(a){return this.b.b+": "+this.ca(0)}}
F.it.prototype={
jQ:function(a){var s,r=W.oP(a)
r.autoplay=!1
r.preload="auto";++this.a
s=F.n6(r)
W.R(r,"load",new F.iu(this,s),!1)
return s}}
F.iu.prototype={
$1:function(a){var s=this.b
if(!s.b)s.b=!0;--this.a.b},
$S:3}
F.eT.prototype={
hu:function(){var s,r,q,p,o
for(s=this.b,r=s.length,q=0;q<r;++q){p=s[q]
o=p.a.paused
o.toString
if(o)return p}if(r<this.c){r=this.a.a.cloneNode(!0)
r.toString
p=F.n6(t.O.a(r))
s.push(p)
return p}return null},
ka:function(a,b){var s,r,q=this.hu()
if(q!=null){s=q.a.paused
s.toString}else s=!1
if(s){if(b>1)b=1
s=q.a
r=s.volume
r.toString
$.v().toString
if(!(Math.abs(r-b)<1e-9))s.volume=b
s=q.a.play()
s.toString
P.rw(s,t.z)
return!0}return!1}}
F.f7.prototype={
ib:function(a){return null},
i9:function(a){return null}}
O.cd.prototype={
c9:function(a,b,c){this.b=b
this.c=a},
bO:function(a,b){return this.c9(a,null,b)},
bD:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
dQ:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gj:function(a){return this.a.length},
gT:function(a){var s=this.a
return new J.af(s,s.length)},
G:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.b(s,b)
return s[b]},
m:function(a,b){var s,r
if(this.bD([b])){s=this.a
r=s.length
s.push(b)
this.dQ(r,[b])}},
af:function(a,b){var s,r
if(this.bD(b)){s=this.a
r=s.length
C.b.af(s,b)
this.dQ(r,b)}},
$ii:1}
O.dk.prototype={
gj:function(a){return this.a.length},
gn:function(){var s=this.b
return s==null?this.b=D.D():s},
b9:function(){var s=this.b
return s==null?null:s.A(null)},
ga9:function(a){var s=this.a
if(s.length>0)return C.b.gb4(s)
else return V.am()},
f8:function(a){this.a.push(a)
this.b9()},
d8:function(){var s=this.a
if(s.length>0){s.pop()
this.b9()}}}
Y.cz.prototype={
i:function(a){return this.b}}
Y.en.prototype={
i:function(a){switch(this.a){case C.D:return"intesected"
case C.E:return"noCollision"
case C.a9:return"outOfRange at "+H.r(this.b)
case C.n:return"collision at "+H.r(this.b)
default:return"Unknown collision value"}}}
Y.fD.prototype={
i:function(a){var s=this.fu(0)
return s+(this.a===C.n?" "+this.y.i(0):"")}}
E.iy.prototype={}
E.ce.prototype={
dD:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.af(s,s.length),r=H.a_(s).c;s.t();){q=r.a(s.d)
if(q.f==null)q.dD()}},
sdj:function(a){var s=this,r=s.d
if(r!=a){s.c=null
s.d=a
s.e=null
if(r!=null)r.gn().U(0,s.gc2())
if(a!=null)a.gn().m(0,s.gc2())
s.ay(new D.B("shapeBuilder",r,a))}},
ak:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.aI(0,b,q)
if(!J.a6(o,q.x)){s=q.x
q.x=o
q.ay(new D.B("matrix",s,o))}p=q.f
if(p!=null)p.ak(0,b)
for(p=q.y.a,p=new J.af(p,p.length),r=H.a_(p).c;p.t();)r.a(p.d).ak(0,b)},
bv:function(a){var s,r,q,p,o=this
if(!o.b)return
s=a.dx
r=o.x
q=s.a
if(r==null)q.push(s.ga9(s))
else q.push(r.v(0,s.ga9(s)))
s.b9()
a.f9(o.f)
p=C.b.gb4(a.dy)
if(o.d!=null)if(p!=null)p.ke(a,o)
for(r=o.y.a,r=new J.af(r,r.length),q=H.a_(r).c;r.t();)q.a(r.d).bv(a)
a.f5()
s.d8()},
ay:function(a){var s=this.z
return s==null?null:s.A(a)},
ai:function(){return this.ay(null)},
eY:function(a){this.e=null
this.ay(a)},
k_:function(){return this.eY(null)},
f_:function(a){return this.ay(a)},
k0:function(){return this.f_(null)},
eX:function(a){return this.ay(a)},
jZ:function(){return this.eX(null)},
eV:function(a){return this.ay(a)},
jW:function(){return this.eV(null)},
jV:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.geU(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.ch()
n=o.a;(n==null?o.a=[]:n).push(r)}this.ai()},
jY:function(a,b){var s,r
for(s=b.gT(b),r=this.geU();s.t();)s.gE(s).gn().U(0,r)
this.ai()},
i:function(a){return"Unnamed entity"}}
E.ca.prototype={
i:function(a){return this.b}}
E.cu.prototype={
i:function(a){return this.b}}
E.hc.prototype={}
E.jH.prototype={
fH:function(a,b){var s=this
s.cy.gn().m(0,new E.jI(s))
s.db.gn().m(0,new E.jJ(s))
s.dx.gn().m(0,new E.jK(s))},
gkc:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga9(q).v(0,s.ga9(s))
q=s}return q},
f9:function(a){var s=this.dy
return s.push(a==null?C.b.gb4(s):a)},
f5:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.jI.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:0}
E.jJ.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:0}
E.jK.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:0}
E.fo.prototype={}
E.fy.prototype={
dr:function(a){this.fc()},
dq:function(){return this.dr(null)},
gjL:function(){var s,r=this,q=Date.now(),p=C.c.a3(P.mV(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.P(q,!1)
return s/p},
dX:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.bs(r*o)
r=s.clientHeight
r.toString
p=C.d.bs(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.m8(C.j,this.gkg())}},
fc:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.G.hr(s)
r=W.o1(new E.k6(this),t.H)
r.toString
C.G.iW(s,r)}},
kd:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.dX()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.P(p,!1)
q.y=P.mV(p-q.r.a).a*0.000001
p=q.cy
C.b.sj(p.a,0)
p.b9()
p=q.db
C.b.sj(p.a,0)
p.b9()
p=q.dx
C.b.sj(p.a,0)
p.b9()
p=q.dy
C.b.sj(p,0)
p.push(null)
m.bv(q)}}catch(o){s=H.ad(o)
r=H.by(o)
P.mC("Error: "+H.r(s))
P.mC("Stack: "+H.r(r))
throw H.c(s)}}}
E.k6.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.kd()}},
$S:34}
Z.fX.prototype={}
Z.cb.prototype={
aZ:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ad(q)
r=P.h('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.r(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.kK.prototype={}
Z.cc.prototype={
br:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
aZ:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.b(r,s)
r[s].aZ(a)}},
bN:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.b(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
bv:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.b(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.ds(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.p(m,", ")+"\nAttrs:   "+C.b.p(o,", ")}}
Z.bL.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ds(this.c)+"'")+"]"}}
Z.a2.prototype={
gei:function(a){var s=this.a,r=(s&$.aa().a)!==0?1:0
if((s&$.as().a)!==0)++r
if((s&$.bA().a)!==0)++r
if((s&$.ae().a)!==0)++r
if((s&$.c7().a)!==0)++r
if((s&$.ec().a)!==0)++r
if((s&$.ed().a)!==0)++r
if((s&$.cP().a)!==0)++r
return(s&$.bz().a)!==0?r+1:r},
gbz:function(a){var s=this.a,r=(s&$.aa().a)!==0?3:0
if((s&$.as().a)!==0)r+=3
if((s&$.bA().a)!==0)r+=3
if((s&$.ae().a)!==0)r+=2
if((s&$.c7().a)!==0)r+=3
if((s&$.ec().a)!==0)r+=3
if((s&$.ed().a)!==0)r+=4
if((s&$.cP().a)!==0)++r
return(s&$.bz().a)!==0?r+4:r},
cJ:function(a){var s,r=$.aa(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.as()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bA()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ae()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c7()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ec()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ed()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bz()
if((q&r.a)!==0)if(s===a)return r
return $.oC()},
l:function(a,b){if(b==null)return!1
if(!(b instanceof Z.a2))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.aa().a)!==0)s.push("Pos")
if((r&$.as().a)!==0)s.push("Norm")
if((r&$.bA().a)!==0)s.push("Binm")
if((r&$.ae().a)!==0)s.push("Txt2D")
if((r&$.c7().a)!==0)s.push("TxtCube")
if((r&$.ec().a)!==0)s.push("Clr3")
if((r&$.ed().a)!==0)s.push("Clr4")
if((r&$.cP().a)!==0)s.push("Weight")
if((r&$.bz().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.p(s,"|")}}
D.iB.prototype={}
D.ch.prototype={
m:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
U:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.M(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.U(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.M(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.U(p,b)
s=p===!0||s}return s},
A:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.T():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.B(P.cp(p,!0),new D.iV(s))
r=q.b
if(r!=null){q.b=[]
C.b.B(r,new D.iW(s))}return!0},
el:function(){return this.A(null)},
aO:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.A(s)}}}}
D.iV.prototype={
$1:function(a){a.$1(this.a)},
$S:20}
D.iW.prototype={
$1:function(a){a.$1(this.a)},
$S:20}
D.T.prototype={}
D.aX.prototype={}
D.aY.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.r(this.d)+" => "+H.r(this.e)}}
X.cR.prototype={
l:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cR))return!1
if(this.a!==b.a)return!1
if(!this.b.l(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.aK.prototype={
l:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aK))return!1
if(this.a!==b.a)return!1
if(!this.b.l(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.bg.prototype={}
X.d7.prototype={
gaw:function(){var s=this.y
return s==null?this.y=D.D():s},
e7:function(a,b){return this.m(0,new X.aK(a,new X.b2(!1,!1,b)))},
a7:function(a){return this.e7(a,!1)},
ds:function(a){return null},
fM:function(a){var s,r,q
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,H.o)(a),++q)if(C.b.M(r,a[q]))return!1
return!0},
fK:function(a,b){return this.ds(new D.aX())},
fO:function(a,b){return this.ds(new D.aY())},
cc:function(a){var s,r=this
if(!r.r&&a instanceof X.bg)if(C.b.M(r.a,a.c)){r.r=!0
s=r.y
if(s!=null)s.A(a)}},
cs:function(a){if(this.r&&a instanceof X.bg)if(C.b.M(this.a,a.c))this.r=!1},
a4:function(a){var s,r,q=this
if(q.f!=null)return!1
q.f=a
s=a.gbI(a)
r=s.b
if(r==null)r=s.b=D.D()
r.m(0,q.gcb())
r=s.a
s=r==null?s.a=D.D():r
s.m(0,q.gcr())
return!0}}
X.j4.prototype={}
X.de.prototype={}
X.j7.prototype={
bj:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.I(o.a+b.a*q.Q,o.b+b.b*q.ch)
o=q.a.gbY()
s=$.a8
if(s==null)s=$.a8=new V.I(0,0)
r=q.x
q.z=new P.P(p,!1)
q.x=n
return new X.cs(a,s,r,o,n)},
d7:function(a,b){var s
this.r=a.a
s=this.b
if(s==null)return!1
s.A(this.bj(a,b))
return!0},
bK:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bJ:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.bj(a,b))
return!0},
k8:function(a){return!1},
il:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.A(new X.de(c,q.a.gbY(),b))
q.y=new P.P(s,!1)
s=$.a8
q.x=s==null?$.a8=new V.I(0,0):s}}
X.b2.prototype={
l:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.b2))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.p(s,"+")}}
X.cs.prototype={}
X.js.prototype={
cn:function(a,b,c){var s=this,r=new P.P(Date.now(),!1),q=s.a.gbY(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.cs(a,p,o,q,b)},
d7:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.A(this.cn(a,b,!0))
return!0},
bK:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.A(r.cn(a,b,!0))
return!0},
bJ:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.cn(a,b,!1))
return!0},
k9:function(a,b){return!1}}
X.f9.prototype={}
X.dB.prototype={}
X.kb.prototype={
bj:function(a,b){var s,r,q,p,o=this,n=new P.P(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a8
if(r==null){r=new V.I(0,0)
$.a8=r
s=r}else s=r}r=o.a.gbY()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.dB(q,p,r,s)},
k7:function(a){var s=this.b
if(s==null)return!1
s.A(this.bj(a,!0))
return!0},
k5:function(a){var s=this.c
if(s==null)return!1
s.A(this.bj(a,!0))
return!0},
k6:function(a){var s=this.d
if(s==null)return!1
s.A(this.bj(a,!1))
return!0}}
X.fV.prototype={
gbI:function(a){var s=this.b
return s==null?this.b=new X.j4(P.mY(t.S)):s},
gaG:function(){var s,r=this.c
if(r==null){r=$.a8
if(r==null){r=$.a8=new V.I(0,0)
s=r}else s=r
r=this.c=new X.js(this,r,s,new P.P(Date.now(),!1),new P.P(Date.now(),!1))}return r},
gam:function(){var s=this.d
if(s==null){s=$.a8
if(s==null)s=$.a8=new V.I(0,0)
s=this.d=new X.j7(this,s,new P.P(Date.now(),!1),new P.P(Date.now(),!1))}return s},
gbx:function(){var s,r=this.e
if(r==null){r=$.a8
if(r==null){r=$.a8=new V.I(0,0)
s=r}else s=r
r=this.e=new X.kb(this,r,s,new P.P(Date.now(),!1),new P.P(Date.now(),!1))}return r},
gbY:function(){var s=this.a
return V.m5(0,0,C.i.geg(s).c,C.i.geg(s).d)},
dJ:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.aK(p,new X.b2(s,r,q))},
bl:function(a){var s
this.gbI(this)
s=a.ctrlKey
s.toString
if(!s)a.metaKey.toString
a.altKey.toString
a.shiftKey.toString},
cB:function(a){var s=a.ctrlKey
if(s!==!0)a.metaKey
this.gbI(this)
a.altKey
a.shiftKey},
aW:function(a){var s,r,q,p
if(a==null){s=$.a8
return s==null?$.a8=new V.I(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.I(r-p,q-s)},
bE:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.ac(r,s)},
cv:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.aH(n)
m=o.pageY
m.toString
C.d.aH(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.aH(l)
l=o.pageY
l.toString
l=C.d.aH(l)
k=j.top
k.toString
s.push(new V.I(n-m,l-k))}return s},
aR:function(a){var s,r,q,p
if(a==null)return new X.cR(0,new X.b2(!1,!1,!1))
s=a.buttons
if(s==null)s=0
r=a.ctrlKey
r.toString
if(!r){r=a.metaKey
r.toString}else r=!0
q=a.altKey
q.toString
p=a.shiftKey
p.toString
return new X.cR(s,new X.b2(r,q,p))},
co:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
n.toString
s=a.pageX
s.toString
r=a.pageY
r.toString
q=n.left
q.toString
p=s-q
if(p<0)return!1
s=n.top
s.toString
o=r-s
if(o<0)return!1
s=n.width
s.toString
if(p<s){n=n.height
n.toString
n=o<n}else n=!1
return n},
ie:function(a){return this.f=!0},
hU:function(a){return this.f=!1},
i3:function(a){if(this.f&&this.co(a))a.preventDefault()},
cs:function(a){var s,r,q=this
if(!q.f)return
s=q.dJ(a)
r=q.gbI(q)
r.d.m(0,s.a)
r=r.a
r=r==null?null:r.A(new X.bg(s))
if(r===!0)a.preventDefault()},
cc:function(a){var s,r,q=this
if(!q.f)return
s=q.dJ(a)
r=q.gbI(q)
r.d.U(0,s.a)
r=r.b
r=r==null?null:r.A(new X.bg(s))
if(r===!0)a.preventDefault()},
io:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.bl(a)
if(p.x){s=p.aR(a)
r=p.bE(a)
if(p.gam().d7(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aR(a)
q=p.aW(a)
if(p.gaG().d7(s,q))a.preventDefault()},
is:function(a){var s,r,q,p=this
p.bl(a)
s=p.aR(a)
if(p.x){r=p.bE(a)
if(p.gam().bK(s,r))a.preventDefault()
return}if(p.r)return
q=p.aW(a)
if(p.gaG().bK(s,q))a.preventDefault()},
i7:function(a){var s,r,q,p=this
if(!p.co(a)){p.bl(a)
s=p.aR(a)
if(p.x){r=p.bE(a)
if(p.gam().bK(s,r))a.preventDefault()
return}if(p.r)return
q=p.aW(a)
if(p.gaG().bK(s,q))a.preventDefault()}},
iq:function(a){var s,r,q,p=this
p.bl(a)
s=p.aR(a)
if(p.x){r=p.bE(a)
if(p.gam().bJ(s,r))a.preventDefault()
return}if(p.r)return
q=p.aW(a)
if(p.gaG().bJ(s,q))a.preventDefault()},
i5:function(a){var s,r,q,p=this
if(!p.co(a)){p.bl(a)
s=p.aR(a)
if(p.x){r=p.bE(a)
if(p.gam().bJ(s,r))a.preventDefault()
return}if(p.r)return
q=p.aW(a)
if(p.gaG().bJ(s,q))a.preventDefault()}},
iu:function(a){var s,r,q=this
q.bl(a)
s=new V.ac(C.F.gjB(a),C.F.gjC(a)).v(0,q.Q)
if(q.x){if(q.gam().k8(s))a.preventDefault()
return}if(q.r)return
r=q.aW(a)
if(q.gaG().k9(s,r))a.preventDefault()},
ix:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aR(q.y)
r=q.aW(q.y)
q.gam().il(s,r,p)}},
iL:function(a){var s,r=this
r.a.focus()
r.f=!0
r.cB(a)
s=r.cv(a)
if(r.gbx().k7(s))a.preventDefault()},
iH:function(a){var s
this.cB(a)
s=this.cv(a)
if(this.gbx().k5(s))a.preventDefault()},
iJ:function(a){var s
this.cB(a)
s=this.cv(a)
if(this.gbx().k6(s))a.preventDefault()}}
N.eo.prototype={
i:function(a){return this.a?"intesection":"noIntesection"}}
N.Y.prototype={
i:function(a){var s=this
return s.ft(0)+" "+H.r(s.b)+" <"+H.r(s.c)+"> "+H.r(s.d)+" "+s.e.i(0)}}
D.cX.prototype={
aU:function(a){var s=this.r
return s==null?null:s.A(a)},
hW:function(){return this.aU(null)},
$ida:1}
D.db.prototype={
gn:function(){var s=this.y
return s==null?this.y=D.D():s},
geK:function(){var s=this.z
return s==null?this.z=D.D():s},
aU:function(a){var s=this.y
return s==null?null:s.A(a)},
dS:function(a){var s=this.z
return s==null?null:s.A(a)},
ik:function(){return this.dS(null)},
iz:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)if(this.hl(a[r]))return!1
return!0},
hK:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdR(),q=this.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
q.push(o)
n=o.r
if(n==null)n=o.r=new D.ch()
m=n.a;(m==null?n.a=[]:m).push(r)}this.aU(new D.aX())},
iD:function(a,b){var s,r,q,p
for(s=b.gT(b),r=this.gdR(),q=this.e;s.t();){p=s.gE(s)
C.b.U(q,p)
p.gn().U(0,r)}this.aU(new D.aY())},
hl:function(a){var s=C.b.M(this.f,a)
return s}}
V.S.prototype={
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.S))return!1
s=b.a
$.v().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+", "+V.t(this.c,3,0)+"]"}}
V.bF.prototype={
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bF))return!1
s=b.a
$.v().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.t(s.a,3,0)+", "+V.t(s.b,3,0)+", "+V.t(s.c,3,0)+", "+V.t(s.d,3,0)+"]"},
F:function(){var s=this
return"["+V.t(s.a,3,0)+", "+V.t(s.b,3,0)+", "+V.t(s.c,3,0)+", "+V.t(s.d,3,0)+"]"}}
V.iT.prototype={}
V.U.prototype={
ct:function(a,b){var s=this.a,r=a.a,q=(s&r)===r?b.a:$.aB().a,p=b.a
return q|((s&p)===p?r:$.aB().a)},
aN:function(a){var s=this
return new V.U($.ij().a&s.a|s.ct($.aD(),$.aC())|s.ct($.aE(),$.b9())|s.ct($.bb(),$.ba()))},
l:function(a,b){if(b==null)return!1
if(!(b instanceof V.U))return!1
return this.a===b.a},
i:function(a){var s,r,q
$.ii()
$.ij()
s=[]
r=this.a
q=$.aD().a
if((r&q)===q)s.push("XPos")
q=$.mI().a
if((r&q)===q)s.push("XCenter")
q=$.aC().a
if((r&q)===q)s.push("XNeg")
q=$.aE().a
if((r&q)===q)s.push("YPos")
q=$.mJ().a
if((r&q)===q)s.push("YCenter")
q=$.b9().a
if((r&q)===q)s.push("YNeg")
q=$.bb().a
if((r&q)===q)s.push("ZPos")
q=$.on().a
if((r&q)===q)s.push("ZCenter")
q=$.ba().a
if((r&q)===q)s.push("ZNeg")
if(s.length<=0)return"None"
return C.b.p(s,"|")}}
V.aL.prototype={
ao:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
aN:function(a){var s,r=this,q=r.a,p=r.e,o=r.y,n=p*o,m=r.f,l=r.x,k=r.d,j=r.b,i=j*o,h=r.c,g=l*h,f=r.r,e=j*m-p*h,d=q*(n-m*l)-k*(i-g)+f*e
$.v().toString
if(Math.abs(d-0)<1e-9)return V.jo()
s=1/d
return new V.aL((n-l*m)*s,(g-i)*s,e*s,(f*m-k*o)*s,(q*o-f*h)*s,(k*h-q*m)*s,(k*l-f*p)*s,(f*j-q*l)*s,(q*p-k*j)*s)},
az:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.y(s.a*r+s.b*q+s.c*p,s.d*r+s.e*q+s.f*p,s.r*r+s.x*q+s.y*p)},
R:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.q(s.a*r+s.b*q+s.c*p,s.d*r+s.e*q+s.f*p,s.r*r+s.x*q+s.y*p)},
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aL))return!1
s=b.a
$.v().toString
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
i:function(a){var s,r,q,p,o=this,n=V.cO([o.a,o.d,o.r],3,0),m=V.cO([o.b,o.e,o.x],3,0),l=V.cO([o.c,o.f,o.y],3,0),k=n.length
if(0>=k)return H.b(n,0)
s="["+n[0]+", "
r=m.length
if(0>=r)return H.b(m,0)
s=s+m[0]+", "
q=l.length
if(0>=q)return H.b(l,0)
s=s+l[0]+",\n"
if(1>=k)return H.b(n,1)
p=" "+n[1]+", "
if(1>=r)return H.b(m,1)
p=p+m[1]+", "
if(1>=q)return H.b(l,1)
p=s+(p+l[1]+",\n")
if(2>=k)return H.b(n,2)
k=" "+n[2]+", "
if(2>=r)return H.b(m,2)
k=k+m[2]+", "
if(2>=q)return H.b(l,2)
return p+(k+l[2]+"]")}}
V.cq.prototype={
ao:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
aN:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.v().toString
if(Math.abs(b3-0)<1e-9)return V.am()
s=1/b3
r=-l
q=-a2
return V.b1((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
v:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.b1(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
az:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.y(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
R:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.q(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cq))return!1
s=b.a
$.v().toString
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
i:function(a){return this.F()},
P:function(a){var s,r,q,p,o,n=this,m=V.cO([n.a,n.e,n.y,n.cx],3,0),l=V.cO([n.b,n.f,n.z,n.cy],3,0),k=V.cO([n.c,n.r,n.Q,n.db],3,0),j=V.cO([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
F:function(){return this.P("")}}
V.I.prototype={
ap:function(a){return new V.ac(a.a-this.a,a.b-this.b)},
l:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
s=b.a
$.v().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+"]"},
F:function(){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+"]"}}
V.q.prototype={
ap:function(a){return new V.y(a.a-this.a,a.b-this.b,a.c-this.c)},
K:function(a,b){return new V.q(this.a+b.a,this.b+b.b,this.c+b.c)},
as:function(a,b){return new V.q(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.q(this.a*b,this.b*b,this.c*b)},
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.q))return!1
s=b.a
$.v().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+", "+V.t(this.c,3,0)+"]"},
F:function(){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+", "+V.t(this.c,3,0)+"]"}}
V.bW.prototype={
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bW))return!1
s=b.a
$.v().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.t(s.a,3,0)+", "+V.t(s.b,3,0)+", "+V.t(s.c,3,0)+", "+V.t(s.d,3,0)+"]"},
F:function(){var s=this
return"["+V.t(s.a,3,0)+", "+V.t(s.b,3,0)+", "+V.t(s.c,3,0)+", "+V.t(s.d,3,0)+"]"}}
V.fb.prototype={
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.fb))return!1
s=b.a
$.v().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
if(!(Math.abs(b.e-r.e)<1e-9))return!1
if(!(Math.abs(b.f-r.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.t(s.a,3,0)+", "+V.t(s.b,3,0)+", "+V.t(s.c,3,0)+", "+V.t(s.d,3,0)+", "+V.t(s.e,3,0)+", "+V.t(s.f,3,0)+"]"}}
V.fc.prototype={
gbu:function(){var s=this.c,r=this.d
return s>r?r:s},
eR:function(a){var s,r,q,p,o=this,n=$.aB(),m=a.a,l=o.a
if(m<l){s=$.aC()
n=new V.U(n.a|s.a)}else{s=n.a
n=m>=l+o.c?new V.U(s|$.aD().a):new V.U(s|$.mI().a)}s=a.b
r=o.b
if(s<r)n=new V.U(n.a|$.b9().a)
else{q=n.a
n=s>=r+o.d?new V.U(q|$.aE().a):new V.U(q|$.mJ().a)}q=n.a
p=$.aC().a
if(!((q&p)===p)){p=$.aD().a
l=(q&p)===p?l+o.c:m}m=$.b9().a
if(!((q&m)===m)){m=$.aE().a
r=(q&m)===m?r+o.d:s}return new V.I(l,r)},
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.fc))return!1
s=b.a
$.v().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.t(s.a,3,0)+", "+V.t(s.b,3,0)+", "+V.t(s.c,3,0)+", "+V.t(s.d,3,0)+"]"}}
V.dt.prototype={
f0:function(a){var s=this,r=a.a,q=s.a
$.v().toString
if(q-1e-9<r+a.d&&r-1e-9<q+s.d){r=a.b
q=s.b
if(q-1e-9<r+a.e&&r-1e-9<q+s.e){r=a.c
q=s.c
r=q-1e-9<r+a.f&&r-1e-9<q+s.f}else r=!1}else r=!1
return r},
c5:function(a,b){var s=this
return V.fd(s.a+b.a,s.b+b.b,s.c+b.c,s.d,s.e,s.f)},
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dt))return!1
s=b.a
$.v().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
if(!(Math.abs(b.e-r.e)<1e-9))return!1
if(!(Math.abs(b.f-r.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.t(s.a,3,0)+", "+V.t(s.b,3,0)+", "+V.t(s.c,3,0)+", "+V.t(s.d,3,0)+", "+V.t(s.e,3,0)+", "+V.t(s.f,3,0)+"]"}}
V.ac.prototype={
d2:function(a){return Math.sqrt(this.a8(this))},
a8:function(a){return this.a*a.a+this.b*a.b},
v:function(a,b){return new V.ac(this.a*b,this.b*b)},
ar:function(a,b){var s
$.v().toString
if(Math.abs(b-0)<1e-9){s=$.kA
return s==null?$.kA=new V.ac(0,0):s}return new V.ac(this.a/b,this.b/b)},
l:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
s=b.a
$.v().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+"]"}}
V.y.prototype={
d2:function(a){return Math.sqrt(this.a8(this))},
a8:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
N:function(){var s=this,r=Math.sqrt(s.a8(s))
if(r===1)return s
return s.ar(0,r)},
bH:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.y(s*r-q*p,q*o-n*r,n*p-s*o)},
K:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
aQ:function(a){return new V.y(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.y(this.a*b,this.b*b,this.c*b)},
ar:function(a,b){$.v().toString
if(Math.abs(b-0)<1e-9)return V.cC()
return new V.y(this.a/b,this.b/b,this.c/b)},
d1:function(){$.v().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.y))return!1
s=b.a
$.v().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+", "+V.t(this.c,3,0)+"]"},
F:function(){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+", "+V.t(this.c,3,0)+"]"}}
U.iG.prototype={
cf:function(a){var s=this.a,r=this.c,q=this.b
if(s)return V.lP(a,r,q)
else{if(a<r)s=r
else s=a>q?q:a
return s}},
gn:function(){var s=this.y
return s==null?this.y=D.D():s},
w:function(a){var s=this.y
return s==null?null:s.A(a)},
sdg:function(a,b){var s=this.a
if(s!==b){this.a=b
this.w(new D.B("wrap",s,b))}},
sd5:function(a){var s,r=this,q=r.b
$.v().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.cf(s)}r.w(new D.B("maximumLocation",q,r.b))}},
sd6:function(a){var s,r=this,q=r.c
$.v().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.cf(s)}r.w(new D.B("minimumLocation",q,r.c))}},
sY:function(a,b){var s,r=this
b=r.cf(b)
s=r.d
$.v().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.w(new D.B("location",s,b))}},
san:function(a){var s,r,q=this,p=q.e
$.v().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.w(new D.B("maximumVelocity",p,a))}},
sS:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.v().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.w(new D.B("velocity",r,a))}},
se6:function(a,b){var s=this.r
$.v().toString
if(!(Math.abs(s-b)<1e-9)){this.r=b
this.w(new D.B("acceleration",s,b))}},
sb0:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.v().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.w(new D.B("dampening",s,a))}},
ak:function(a,b){var s,r,q,p=this,o=p.f
$.v().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sY(0,p.d+s*b)
o=p.x
$.v().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sS(s)}}}
U.cT.prototype={
gn:function(){var s=this.b
return s==null?this.b=D.D():s},
aI:function(a,b,c){return this.a},
l:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cT))return!1
return this.a.l(0,b.a)},
i:function(a){return"Constant: "+this.a.P("          ")}}
U.ck.prototype={
gn:function(){var s=this.e
return s==null?this.e=D.D():s},
w:function(a){var s=this.e
return s==null?null:s.A(a)},
ae:function(){return this.w(null)},
fQ:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaJ(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p!=null){o=p.gn()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.w(new D.aX())},
iB:function(a,b){var s,r
for(s=b.gT(b),r=this.gaJ();s.t();)s.gE(s).gn().U(0,r)
this.w(new D.aY())},
aI:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.af(o,o.length),n=H.a_(o).c,s=null;o.t();){r=n.a(o.d)
if(r!=null){q=r.aI(0,b,c)
s=s==null?q:q.v(0,s)}}p.f=s==null?V.am():s
o=p.e
if(o!=null)o.aO(0)}return p.f},
l:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ck))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.b(s,p)
o=s[p]
if(p>=q.length)return H.b(q,p)
if(!J.a6(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia4:1}
U.cm.prototype={
gn:function(){var s=this.b
return s==null?this.b=D.D():s},
w:function(a){var s=this.b
return s==null?null:s.A(a)},
ae:function(){return this.w(null)},
aI:function(a,b,c){var s,r=this,q=r.d,p=b.e
if(q<p){r.d=p
q=r.b
if(q!=null)++q.d
q=r.a
s=q==null?null:q.aI(0,b,c).aN(0)
r.c=s==null?V.am():s
q=r.b
if(q!=null)q.aO(0)}return r.c},
l:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cm))return!1
if(this.a!=b.a)return!1
return!0},
i:function(a){return"Invert"},
$ia4:1}
U.a4.prototype={}
U.du.prototype={
gn:function(){var s=this.y
return s==null?this.y=D.D():s},
w:function(a){var s=this.y
return s==null?null:s.A(a)},
sfj:function(a){var s
a=V.lP(a,0,6.283185307179586)
s=this.a
$.v().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.w(new D.B("yaw",s,a))}},
sf2:function(a,b){var s
b=V.lP(b,0,6.283185307179586)
s=this.b
$.v().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.w(new D.B("pitch",s,b))}},
sfd:function(a){var s
a=V.lP(a,0,6.283185307179586)
s=this.c
$.v().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.w(new D.B("roll",s,a))}},
aI:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(p<o){q.r=o
p=q.y
if(p!=null)++p.d
q.sfj(q.a+q.d*b.y)
q.sf2(0,q.b+q.e*b.y)
q.sfd(q.c+q.f*b.y)
p=q.c
s=Math.cos(p)
r=Math.sin(p)
q.x=V.b1(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).v(0,V.n3(q.b)).v(0,V.n2(q.a))
p=q.y
if(p!=null)p.aO(0)}return q.x},
l:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.du))return!1
s=q.a
r=b.a
$.v().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.t(s.a,3,0)+", "+V.t(s.b,3,0)+", "+V.t(s.c,3,0)+"], ["+V.t(s.d,3,0)+", "+V.t(s.e,3,0)+", "+V.t(s.f,3,0)+"]"}}
U.dE.prototype={
gn:function(){var s=this.fx
return s==null?this.fx=D.D():s},
w:function(a){var s=this.fx
return s==null?null:s.A(a)},
ae:function(){return this.w(null)},
a4:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.gaG()
r=s.b
s=r==null?s.b=D.D():r
s.m(0,q.ghC())
s=a.gaG()
r=s.d
s=r==null?s.d=D.D():r
s.m(0,q.ghE())
s=a.gaG()
r=s.c
s=r==null?s.c=D.D():r
s.m(0,q.ghG())
s=a.gam()
r=s.f
s=r==null?s.f=D.D():r
s.m(0,q.ghy())
s=a.gam()
r=s.d
s=r==null?s.d=D.D():r
s.m(0,q.ghA())
s=a.gbx()
r=s.b
s=r==null?s.b=D.D():r
s.m(0,q.gjb())
s=a.gbx()
r=s.d
s=r==null?s.d=D.D():r
s.m(0,q.gj9())
s=a.gbx()
r=s.c
s=r==null?s.c=D.D():r
s.m(0,q.gj7())
return!0},
bi:function(a){return new V.ac(a.a,a.b)},
hD:function(a){var s=this
t.Z.a(a)
if(!s.d.l(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hF:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ap(a.d)
if(s.a8(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.bi(a.y.ap(r).v(0,2).ar(0,s.gbu()))
p=n.c
p.sY(0,-q.a*2.5+n.cy)
o=n.b
o.sY(0,-q.b*2.5+n.db)
o.sS(0)
p.sS(0)
n.dx=n.bi(a.z.ap(r).v(0,2).ar(0,s.gbu()))
n.ae()},
hH:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a8(s)>0.0001){r.c.sS(-r.dx.a*10*2.5)
r.b.sS(-r.dx.b*10*2.5)
r.ae()}},
hz:function(a){var s=this
if(t.b7.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
hB:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.l(0,a.x.b))return
s=a.c
r=a.d
q=n.bi(a.y.ap(r).v(0,2).ar(0,s.gbu()))
p=n.c
p.sY(0,-q.a*2.5+n.cy)
o=n.b
o.sY(0,-q.b*2.5+n.db)
o.sS(0)
p.sS(0)
n.dx=n.bi(a.z.ap(r).v(0,2).ar(0,s.gbu()))
n.ae()},
jc:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
ja:function(a){var s,r,q,p,o,n=this
t.aM.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ap(a.d)
if(s.a8(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.bi(a.y.ap(r).v(0,2).ar(0,s.gbu()))
p=n.c
p.sY(0,-q.a*2.5+n.cy)
o=n.b
o.sY(0,-q.b*2.5+n.db)
o.sS(0)
p.sS(0)
n.dx=n.bi(a.z.ap(r).v(0,2).ar(0,s.gbu()))
n.ae()},
j8:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a8(s)>0.0001){r.c.sS(-r.dx.a*10*2.5)
r.b.sS(-r.dx.b*10*2.5)
r.ae()}},
aI:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(q<p){r.dy=p
s=b.y
q=r.c
q.ak(0,s)
p=r.b
p.ak(0,s)
r.fr=V.n2(p.d).v(0,V.n3(q.d))}return r.fr},
$ia4:1}
U.dF.prototype={
gn:function(){var s=this.dx
return s==null?this.dx=D.D():s},
w:function(a){var s=this.dx
return s==null?null:s.A(a)},
ae:function(){return this.w(null)},
sfi:function(a){var s,r=this
if(!r.z.l(0,a)){s=r.z
r.z=a
r.Q=a.aN(0)
r.w(new D.B("velocityRotation",s,r.z))}},
sS:function(a){this.r.sS(a.a)
this.x.sS(a.b)
this.y.sS(a.c)},
gY:function(a){return new V.q(this.r.d,this.x.d,this.y.d)},
sY:function(a,b){this.r.sY(0,b.a)
this.x.sY(0,b.b)
this.y.sY(0,b.c)},
ij:function(a){return this.w(a)},
cE:function(a,b,c,d,e){if(a.r)e+=d
else if(b.r)e-=d
else e=e>0?e-Math.min(e,c):e+Math.min(-e,c)
return e},
a4:function(a){var s=this,r=s.a.a4(a)&&!0
r=s.b.a4(a)&&r
r=s.c.a4(a)&&r
r=s.d.a4(a)&&r
r=s.e.a4(a)&&r
return s.f.a4(a)&&r},
aI:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.cy,g=b.e
if(h<g){i.cy=g
s=i.gY(i)
r=b.y
if(r>0.1)r=0.1
q=60*r
p=15*r
h=i.r
g=i.x
o=i.y
n=i.Q.az(new V.y(h.f,g.f,o.f))
m=i.cE(i.a,i.b,q,p,n.a)
l=i.cE(i.c,i.d,q,p,n.b)
k=i.cE(i.e,i.f,q,p,n.c)
i.sS(i.z.az(new V.y(m,l,k)))
h.ak(0,r)
g.ak(0,r)
o.ak(0,r)
j=i.dy
if(j!=null)i.sY(0,j.$2(s,i.gY(i)))
i.db=V.eP(h.d,-g.d,o.d)}return i.db},
$ia4:1}
M.ex.prototype={
bb:function(a){var s=this.y
return s==null?null:s.A(a)},
fR:function(){return this.bb(null)},
hY:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gba(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.ch()
n=o.a;(n==null?o.a=[]:n).push(r)}this.bb(new D.aX())},
i_:function(a,b){var s,r
for(s=b.gT(b),r=this.gba();s.t();)s.gE(s).gn().U(0,r)
this.bb(new D.aY())},
gn:function(){var s=this.y
return s==null?this.y=D.D():s},
bv:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.f
if(d!=null)d.A(new E.fo())
a.f9(e.d)
d=e.c
if(d!=null){s=a.a
s.bindFramebuffer(36160,null)
s.enable(2884)
s.enable(2929)
s.depthFunc(513)
r=s.drawingBufferWidth
if(r==null)r=512
q=s.drawingBufferHeight
if(q==null)q=512
p=d.r
o=C.d.aH(p.a*r)
n=C.d.aH(p.b*q)
m=C.d.aH(p.c*r)
a.c=m
p=C.d.aH(p.d*q)
a.d=p
s.viewport(o,n,m,p)
s.clearDepth(2000)
d=d.a
s.clearColor(d.a,d.b,d.c,d.d)
s.clear(16640)}d=e.b
if(d!=null){s=a.c
p=a.d
m=d.c
l=d.d
k=d.e
j=k-l
i=1/Math.tan(m*0.5)
h=V.b1(-i/(s/p),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
a.cy.f8(h)
g=$.oo()
f=d.b
if(f!=null)g=f.aI(0,a,d).v(0,g)
a.db.f8(g)}for(d=e.e.a,s=new J.af(d,d.length),p=H.a_(s).c;s.t();)p.a(s.d).ak(0,a)
for(d=new J.af(d,d.length),s=H.a_(d).c;d.t();)s.a(d.d).bv(a)
if(e.b!=null){a.cy.d8()
a.db.d8()}a.f5()}}
A.iq.prototype={}
A.ir.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
jF:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
jD:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.au.prototype={
gL:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
l:function(a,b){if(b==null)return!1
if(!(b instanceof A.au))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.eM.prototype={
fG:function(d6,d7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8=this,c9=null,d0=u.C,d1="Required uniform value, ",d2=", was not defined or used in shader.",d3=c8.x,d4=new P.X(""),d5=d3.fr
if(d5){s=""+"uniform mat4 objMat;\n"
d4.a=s}else s=""
r=d3.fx
s=(r?d4.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
d4.a=s
s+="\n"
d4.a=s
s=d4.a=s+"attribute vec3 posAttr;\n"
q=d3.k4
if(q){s+="attribute vec3 normAttr;\n"
d4.a=s}p=d3.r1
d4.a=(p?d4.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.qU(d3,d4)
A.qW(d3,d4)
A.qV(d3,d4)
A.qY(d3,d4)
A.qZ(d3,d4)
A.qX(d3,d4)
A.r_(d3,d4)
s=d4.a+="vec4 getPos()\n"
s+="{\n"
d4.a=s
o=d3.ry
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
d4.a=s
s+="}\n"
d4.a=s
s+="\n"
d4.a=s
s+="void main()\n"
d4.a=s
s=d4.a=s+"{\n"
if(o){s+="   setupBendData();\n"
d4.a=s}if(q){s+="   normalVec = getNorm();\n"
d4.a=s}if(p){s+="   binormalVec = getBinm();\n"
d4.a=s}if(d3.r2){s+="   txt2D = getTxt2D();\n"
d4.a=s}if(d3.rx){s+="   txtCube = getTxtCube();\n"
d4.a=s}if(d3.k2){s+="   objPos = getObjPos();\n"
d4.a=s}s=(d3.k3?d4.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
d4.a=s
s+="}\n"
d4.a=s
s=d4.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
m=A.qT(d3)
c8.c=n
c8.d=m
l=c8.dK(n,35633)
k=c8.dK(c8.d,35632)
s=c8.a
q=s.createProgram()
q.toString
c8.e=q
s.attachShader(c8.gaT(),l)
s.attachShader(c8.gaT(),k)
s.linkProgram(c8.gaT())
if(!H.nQ(s.getProgramParameter(c8.gaT(),35714))){j=s.getProgramInfoLog(c8.gaT())
if(j==null)j="undefined log error"
s.deleteProgram(c8.e)
H.f(P.h("Failed to link shader: "+j))}c8.j_()
c8.j1()
c8.y=c8.gaK(c8).h(0,"posAttr")
c8.Q=c8.gaK(c8).h(0,"normAttr")
c8.z=c8.gaK(c8).h(0,"binmAttr")
c8.ch=c8.gaK(c8).h(0,"txt2DAttr")
c8.cx=c8.gaK(c8).h(0,"txtCubeAttr")
c8.cy=c8.gaK(c8).h(0,"bendAttr")
if(d3.dy)c8.fy=t.j.a(c8.gJ().I(0,"invViewMat"))
if(d5)c8.db=t.j.a(c8.gJ().I(0,"objMat"))
if(r)c8.dx=t.j.a(c8.gJ().I(0,"viewObjMat"))
d5=t.j
c8.fr=d5.a(c8.gJ().I(0,"projViewObjMat"))
if(d3.go)c8.dy=d5.a(c8.gJ().I(0,"viewMat"))
if(d3.x1)c8.go=t.e.a(c8.gJ().I(0,"txt2DMat"))
if(d3.x2)c8.id=d5.a(c8.gJ().I(0,"txtCubeMat"))
if(d3.y1)c8.k1=d5.a(c8.gJ().I(0,"colorMat"))
c8.k3=[]
s=d3.bp
if(s>0){c8.k2=t.v.a(c8.gJ().I(0,"bendMatCount"))
for(i=0;i<s;++i){r=c8.k3
h=c8.r
if(h==null)H.f(P.h(d0))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.f(P.h(d1+q+d2))
r.push(d5.a(g))}}d5=d3.a
if(d5.a)c8.k4=t.g.a(c8.gJ().I(0,"emissionClr"))
if(d5.b)c8.r1=t.G.a(c8.gJ().I(0,"emissionTxt"))
d5=d3.b
if(d5.a)c8.rx=t.g.a(c8.gJ().I(0,"ambientClr"))
if(d5.b)c8.ry=t.G.a(c8.gJ().I(0,"ambientTxt"))
d5=d3.c
if(d5.a)c8.x2=t.g.a(c8.gJ().I(0,"diffuseClr"))
if(d5.b)c8.y1=t.G.a(c8.gJ().I(0,"diffuseTxt"))
d5=d3.d
if(d5.a)c8.bp=t.g.a(c8.gJ().I(0,"invDiffuseClr"))
if(d5.b)c8.bq=t.G.a(c8.gJ().I(0,"invDiffuseTxt"))
d5=d3.e
s=d5.a
if(s||d5.b||!1){c8.eq=t.n.a(c8.gJ().I(0,"shininess"))
if(s)c8.eo=t.g.a(c8.gJ().I(0,"specularClr"))
if(d5.b)c8.ep=t.G.a(c8.gJ().I(0,"specularTxt"))}if(d3.f.b)c8.er=t.G.a(c8.gJ().I(0,"bumpTxt"))
if(d3.db){c8.es=t.a.a(c8.gJ().I(0,"envSampler"))
d5=d3.r
if(d5.a)c8.eu=t.g.a(c8.gJ().I(0,"reflectClr"))
if(d5.b)c8.ev=t.G.a(c8.gJ().I(0,"reflectTxt"))
d5=d3.x
s=d5.a
if(s||d5.b||!1){c8.ew=t.n.a(c8.gJ().I(0,"refraction"))
if(s)c8.ex=t.g.a(c8.gJ().I(0,"refractClr"))
if(d5.b)c8.ey=t.G.a(c8.gJ().I(0,"refractTxt"))}}d5=d3.y
if(d5.a)c8.ez=t.n.a(c8.gJ().I(0,"alpha"))
if(d5.b)c8.eA=t.G.a(c8.gJ().I(0,"alphaTxt"))
if(d3.k1){d5=d3.z
s=d5.length
if(s!==0){r=t.S
c8.cQ=P.L(r,t.W)
c8.cR=P.L(r,t.J)
for(r=t.v,q=t.g,p=t.n,f=0;f<d5.length;d5.length===s||(0,H.o)(d5),++f){e=d5[f]
d=e.a
c="barLight"+d
b=[]
for(o=e.b,a=(d&4)!==0,i=0;i<o;++i){h=c8.r
if(h==null)H.f(P.h(d0))
a0=c+"s["+i+"].startPnt"
g=h.h(0,a0)
if(g==null)H.f(P.h(d1+a0+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.h(d0))
a0=c+"s["+i+"].endPnt"
a1=h.h(0,a0)
if(a1==null)H.f(P.h(d1+a0+d2))
q.a(a1)
h=c8.r
if(h==null)H.f(P.h(d0))
a0=c+"s["+i+"].color"
a2=h.h(0,a0)
if(a2==null)H.f(P.h(d1+a0+d2))
q.a(a2)
if(a){h=c8.r
if(h==null)H.f(P.h(d0))
a0=c+"s["+i+"].att0"
a3=h.h(0,a0)
if(a3==null)H.f(P.h(d1+a0+d2))
p.a(a3)
h=c8.r
if(h==null)H.f(P.h(d0))
a0=c+"s["+i+"].att1"
a4=h.h(0,a0)
if(a4==null)H.f(P.h(d1+a0+d2))
p.a(a4)
h=c8.r
if(h==null)H.f(P.h(d0))
a0=c+"s["+i+"].att2"
a5=h.h(0,a0)
if(a5==null)H.f(P.h(d1+a0+d2))
p.a(a5)
a6=a5
a7=a4
a8=a3}else{a6=c9
a7=a6
a8=a7}b.push(new A.fI(g,a1,a2,a8,a7,a6))}c8.cR.k(0,d,b)
o=c8.cQ
h=c8.r
if(h==null)H.f(P.h(d0))
a=c+"Count"
g=h.h(0,a)
if(g==null)H.f(P.h(d1+a+d2))
o.k(0,d,r.a(g))}}d5=d3.Q
s=d5.length
if(s!==0){r=t.S
c8.cS=P.L(r,t.W)
c8.cT=P.L(r,t.L)
for(r=t.v,q=t.g,p=t.G,f=0;f<d5.length;d5.length===s||(0,H.o)(d5),++f){e=d5[f]
d=e.a
c="dirLight"+d
b=[]
for(o=e.b,a=(d&1)!==0,i=0;i<o;++i){if(a){h=c8.r
if(h==null)H.f(P.h(d0))
a0=c+"s["+i+"].objUp"
g=h.h(0,a0)
if(g==null)H.f(P.h(d1+a0+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.h(d0))
a0=c+"s["+i+"].objRight"
a1=h.h(0,a0)
if(a1==null)H.f(P.h(d1+a0+d2))
q.a(a1)
h=c8.r
if(h==null)H.f(P.h(d0))
a0=c+"s["+i+"].objDir"
a2=h.h(0,a0)
if(a2==null)H.f(P.h(d1+a0+d2))
q.a(a2)
a9=a2
b0=a1
b1=g}else{a9=c9
b0=a9
b1=b0}h=c8.r
if(h==null)H.f(P.h(d0))
a0=c+"s["+i+"].viewDir"
g=h.h(0,a0)
if(g==null)H.f(P.h(d1+a0+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.h(d0))
a0=c+"s["+i+"].color"
a1=h.h(0,a0)
if(a1==null)H.f(P.h(d1+a0+d2))
q.a(a1)
if(a){h=c8.r
if(h==null)H.f(P.h(d0))
a0=c+"sTexture2D"+i
a2=h.h(0,a0)
if(a2==null)H.f(P.h(d1+a0+d2))
p.a(a2)
b2=a2}else b2=c9
b.push(new A.fJ(b1,b0,a9,g,a1,b2))}c8.cT.k(0,d,b)
o=c8.cS
h=c8.r
if(h==null)H.f(P.h(d0))
a=c+"Count"
g=h.h(0,a)
if(g==null)H.f(P.h(d1+a+d2))
o.k(0,d,r.a(g))}}d5=d3.ch
s=d5.length
if(s!==0){r=t.S
c8.cU=P.L(r,t.W)
c8.cV=P.L(r,t.V)
for(r=t.v,q=t.g,p=t.e,o=t.a,a=t.F,a0=t.n,f=0;f<d5.length;d5.length===s||(0,H.o)(d5),++f){e=d5[f]
d=e.a
c="pointLight"+d
b=[]
for(b3=e.b,b4=(d&4)!==0,b5=(d&2)!==0,b6=(d&1)!==0,b7=(d&3)!==0,i=0;i<b3;++i){h=c8.r
if(h==null)H.f(P.h(d0))
b8=c+"s["+i+"].point"
g=h.h(0,b8)
if(g==null)H.f(P.h(d1+b8+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.h(d0))
b8=c+"s["+i+"].viewPnt"
a1=h.h(0,b8)
if(a1==null)H.f(P.h(d1+b8+d2))
q.a(a1)
h=c8.r
if(h==null)H.f(P.h(d0))
b8=c+"s["+i+"].color"
a2=h.h(0,b8)
if(a2==null)H.f(P.h(d1+b8+d2))
q.a(a2)
if(b7){h=c8.r
if(h==null)H.f(P.h(d0))
b8=c+"s["+i+"].invViewRotMat"
a3=h.h(0,b8)
if(a3==null)H.f(P.h(d1+b8+d2))
p.a(a3)
b9=a3}else b9=c9
if(b6){h=c8.r
if(h==null)H.f(P.h(d0))
b8=c+"sTextureCube"+i
a3=h.h(0,b8)
if(a3==null)H.f(P.h(d1+b8+d2))
o.a(a3)
b2=a3}else b2=c9
if(b5){h=c8.r
if(h==null)H.f(P.h(d0))
b8=c+"sShadowCube"+i
a3=h.h(0,b8)
if(a3==null)H.f(P.h(d1+b8+d2))
o.a(a3)
h=c8.r
if(h==null)H.f(P.h(d0))
b8=c+"s["+i+"].shadowAdj"
a4=h.h(0,b8)
if(a4==null)H.f(P.h(d1+b8+d2))
a.a(a4)
c0=a3
c1=a4}else{c0=c9
c1=c0}if(b4){h=c8.r
if(h==null)H.f(P.h(d0))
b8=c+"s["+i+"].att0"
a3=h.h(0,b8)
if(a3==null)H.f(P.h(d1+b8+d2))
a0.a(a3)
h=c8.r
if(h==null)H.f(P.h(d0))
b8=c+"s["+i+"].att1"
a4=h.h(0,b8)
if(a4==null)H.f(P.h(d1+b8+d2))
a0.a(a4)
h=c8.r
if(h==null)H.f(P.h(d0))
b8=c+"s["+i+"].att2"
a5=h.h(0,b8)
if(a5==null)H.f(P.h(d1+b8+d2))
a0.a(a5)
a6=a5
a7=a4
a8=a3}else{a6=c9
a7=a6
a8=a7}b.push(new A.fM(g,a1,b9,a2,b2,c0,c1,a8,a7,a6))}c8.cV.k(0,d,b)
b3=c8.cU
h=c8.r
if(h==null)H.f(P.h(d0))
b4=c+"Count"
g=h.h(0,b4)
if(g==null)H.f(P.h(d1+b4+d2))
b3.k(0,d,r.a(g))}}d3=d3.cx
d5=d3.length
if(d5!==0){s=t.S
c8.cW=P.L(s,t.W)
c8.cX=P.L(s,t.R)
for(s=t.v,r=t.g,q=t.n,p=t.F,o=t.G,f=0;f<d3.length;d3.length===d5||(0,H.o)(d3),++f){e=d3[f]
d=e.a
c="spotLight"+d
b=[]
for(a=e.b,a0=(d&2)!==0,b3=(d&1)!==0,b4=(d&4)!==0,b5=(d&8)!==0,b6=(d&3)!==0,i=0;i<a;++i){h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"s["+i+"].objPnt"
g=h.h(0,b7)
if(g==null)H.f(P.h(d1+b7+d2))
r.a(g)
h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"s["+i+"].objDir"
a1=h.h(0,b7)
if(a1==null)H.f(P.h(d1+b7+d2))
r.a(a1)
h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"s["+i+"].viewPnt"
a2=h.h(0,b7)
if(a2==null)H.f(P.h(d1+b7+d2))
r.a(a2)
h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"s["+i+"].color"
a3=h.h(0,b7)
if(a3==null)H.f(P.h(d1+b7+d2))
r.a(a3)
if(b6){h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"s["+i+"].objUp"
a4=h.h(0,b7)
if(a4==null)H.f(P.h(d1+b7+d2))
r.a(a4)
h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"s["+i+"].objRight"
a5=h.h(0,b7)
if(a5==null)H.f(P.h(d1+b7+d2))
r.a(a5)
h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"s["+i+"].tuScalar"
c2=h.h(0,b7)
if(c2==null)H.f(P.h(d1+b7+d2))
q.a(c2)
h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"s["+i+"].tvScalar"
c3=h.h(0,b7)
if(c3==null)H.f(P.h(d1+b7+d2))
q.a(c3)
c4=c3
c5=c2
b0=a5
b1=a4}else{c4=c9
c5=c4
b0=c5
b1=b0}if(a0){h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"s["+i+"].shadowAdj"
a4=h.h(0,b7)
if(a4==null)H.f(P.h(d1+b7+d2))
p.a(a4)
c1=a4}else c1=c9
if(b5){h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"s["+i+"].cutoff"
a4=h.h(0,b7)
if(a4==null)H.f(P.h(d1+b7+d2))
q.a(a4)
h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"s["+i+"].coneAngle"
a5=h.h(0,b7)
if(a5==null)H.f(P.h(d1+b7+d2))
q.a(a5)
c6=a5
c7=a4}else{c6=c9
c7=c6}if(b4){h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"s["+i+"].att0"
a4=h.h(0,b7)
if(a4==null)H.f(P.h(d1+b7+d2))
q.a(a4)
h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"s["+i+"].att1"
a5=h.h(0,b7)
if(a5==null)H.f(P.h(d1+b7+d2))
q.a(a5)
h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"s["+i+"].att2"
c2=h.h(0,b7)
if(c2==null)H.f(P.h(d1+b7+d2))
q.a(c2)
a6=c2
a7=a5
a8=a4}else{a6=c9
a7=a6
a8=a7}if(b3){h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"sTexture2D"+i
a4=h.h(0,b7)
if(a4==null)H.f(P.h(d1+b7+d2))
o.a(a4)
b2=a4}else b2=c9
if(a0){h=c8.r
if(h==null)H.f(P.h(d0))
b7=c+"sShadow2D"+i
a4=h.h(0,b7)
if(a4==null)H.f(P.h(d1+b7+d2))
o.a(a4)
c0=a4}else c0=c9
b.push(new A.fP(g,a1,a2,a3,b1,b0,c5,c4,c1,c7,c6,a8,a7,a6,b2,c0))}c8.cX.k(0,d,b)
a=c8.cW
h=c8.r
if(h==null)H.f(P.h(d0))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.f(P.h(d1+a0+d2))
a.k(0,d,s.a(g))}}}},
aE:function(a,b){if(b!=null&&b.gah(b))if(a!=null)a.fo(b)},
iZ:function(a,b){}}
A.bB.prototype={
i:function(a){return"barLight"+this.a}}
A.bI.prototype={
i:function(a){return"dirLight"+this.a}}
A.bX.prototype={
i:function(a){return"pointLight"+this.a}}
A.bZ.prototype={
i:function(a){return"spotLight"+this.a}}
A.jb.prototype={
i:function(a){return this.bq}}
A.fI.prototype={}
A.fJ.prototype={}
A.fM.prototype={}
A.fP.prototype={}
A.dv.prototype={
gaK:function(a){var s=this.f
if(s==null)throw H.c(P.h("Must initialize the shader prior to getting the attributes."))
return s},
gJ:function(){var s=this.r
if(s==null)throw H.c(P.h(u.C))
return s},
gaT:function(){var s=this.e
if(s==null)throw H.c(P.h(u.F))
return s},
dK:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.nQ(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.h('Error compiling shader "'+H.r(q)+'": '+s))}return q},
j_:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.ll(l.getProgramParameter(o.gaT(),35721))
for(s=0;s<k;++s){r=o.e
if(r==null)H.f(P.h(n))
q=l.getActiveAttrib(r,s)
q.toString
r=o.e
if(r==null)H.f(P.h(n))
p=q.name
p.toString
p=l.getAttribLocation(r,p)
p.toString
q=q.name
q.toString
m.push(new A.iq(l,q,p))}o.f=new A.ir(m)},
j1:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.ll(j.getProgramParameter(m.gaT(),35718))
for(s=0;s<i;++s){r=m.e
if(r==null)H.f(P.h(l))
q=j.getActiveUniform(r,s)
q.toString
r=m.e
if(r==null)H.f(P.h(l))
p=q.name
p.toString
p=j.getUniformLocation(r,p)
p.toString
o=q.type
o.toString
n=q.size
n.toString
q=q.name
q.toString
k.push(m.jz(o,n,q,p))}m.r=new A.km(k)},
bh:function(a,b,c){var s=this.a
if(a===1)return new A.dD(s,b,c)
else return A.ma(s,this.e,b,a,c)},
hn:function(a,b,c){var s=this.a
if(a===1)return new A.fN(s,b,c)
else return A.ma(s,this.e,b,a,c)},
ho:function(a,b,c){var s=this.a
if(a===1)return new A.fO(s,b,c)
else return A.ma(s,this.e,b,a,c)},
bV:function(a,b){return new P.hf(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
jz:function(a,b,c,d){var s=this
switch(a){case 5120:return s.bh(b,c,d)
case 5121:return s.bh(b,c,d)
case 5122:return s.bh(b,c,d)
case 5123:return s.bh(b,c,d)
case 5124:return s.bh(b,c,d)
case 5125:return s.bh(b,c,d)
case 5126:return new A.fF(s.a,c,d)
case 35664:return new A.ki(s.a,c,d)
case 35665:return new A.fG(s.a,c,d)
case 35666:return new A.fH(s.a,c,d)
case 35667:return new A.kj(s.a,c,d)
case 35668:return new A.kk(s.a,c,d)
case 35669:return new A.kl(s.a,c,d)
case 35674:return new A.kn(s.a,c,d)
case 35675:return new A.fK(s.a,c,d)
case 35676:return new A.fL(s.a,c,d)
case 35678:return s.hn(b,c,d)
case 35680:return s.ho(b,c,d)
case 35670:throw H.c(s.bV("BOOL",c))
case 35671:throw H.c(s.bV("BOOL_VEC2",c))
case 35672:throw H.c(s.bV("BOOL_VEC3",c))
case 35673:throw H.c(s.bV("BOOL_VEC4",c))
default:throw H.c(P.h("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.kg.prototype={}
A.km.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
I:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.h("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.F()},
F:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.dD.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.kj.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.kk.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.kl.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.kh.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.fF.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.ki.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.fG.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.fH.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.kn.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.fK.prototype={
aB:function(a){var s=new Float32Array(H.cJ(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.fL.prototype={
aB:function(a){var s=new Float32Array(H.cJ(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.fN.prototype={
fo:function(a){var s=a.gah(a),r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.ga_(a))},
i:function(a){return"UniformSampler2D: "+this.c}}
A.fO.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.d0.prototype={
hd:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cC()
if(n!=null)q=q.K(0,n)
if(s!=null)q=q.K(0,s)
if(r!=null)q=q.K(0,r)
if(q.d1())return p
return q.N()},
hf:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.as(0,n)
q=new V.y(o.a,o.b,o.c).N()
o=r.as(0,n)
return q.bH(new V.y(o.a,o.b,o.c).N()).N()},
cN:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.hd()
if(s==null){s=q.hf()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.ai()}return!0},
hc:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cC()
if(n!=null)q=q.K(0,n)
if(s!=null)q=q.K(0,s)
if(r!=null)q=q.K(0,r)
if(q.d1())return p
return q.N()},
he:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.v().toString
if(Math.abs(p-0)<1e-9){j=b.as(0,e)
o=new V.y(j.a,j.b,j.c).N()
if(q.a-r.a<0)o=o.aQ(0)}else{n=(j-s.b)/p
j=b.as(0,e).v(0,n).K(0,e).as(0,h)
o=new V.y(j.a,j.b,j.c).N()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aQ(0)}m=l.d
if(m!=null){m=m.N()
o=m.bH(o).N().bH(m).N()}return o},
cM:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.hc()
if(s==null){s=q.he()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.ai()}return!0},
l:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
P:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.ga_(p)
p=a+C.a.b5(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.ga_(o)
p=p+C.a.b5(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.ga_(o)
s=p+C.a.b5(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.F()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.F()
return s+((p==null?"-":p)+"}")},
F:function(){return this.P("")}}
F.jF.prototype={
gn:function(){var s=this.Q
return s==null?this.Q=D.D():s},
bG:function(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a8.length,a5=a3.c,a6=a4*a5,a7=P.aw(a6,0,!1)
for(s=a3.b,r=a3.a,q=0,p=0;p<s;++p){o=r.cJ(p)
for(n=0;n<a4;++n){if(n>=a8.length)return H.b(a8,n)
m=a8[n].eM(o)
l=q+n*a5
for(k=m.length,j=0;j<k;++j){i=m[j]
if(l<0||l>=a6)return H.b(a7,l)
a7[l]=i;++l}}q+=o.gbz(o)}if((r.a&$.aa().a)!==0){h=a3.z
for(p=a4-1,a5=a8.length;p>=0;--p){if(p>=a5)return H.b(a8,p)
g=a8[p].f
if(g!=null)if(h==null)h=V.fd(g.a,g.b,g.c,0,0,0)
else{f=g.a
e=g.b
d=g.c
c=h.d
b=h.a
if(f<b)c+=b-f
else{if(f>b+c)c=f-b
f=b}a=h.e
a0=h.b
if(e<a0)a+=a0-e
else{if(e>a0+a)a=e-a0
e=a0}a1=h.f
a2=h.c
if(d<a2)a1+=a2-d
else{if(d>a2+a1)a1=d-a2
d=a2}h=new V.dt(f,e,d,c,a,a1)}}a3.z=h}l=a3.d
a3.d=l+a4
C.b.af(a3.f,a7)
a3.ai()
return l},
bF:function(a){var s,r,q,p,o,n,m,l,k=a.length
if(k>=3){s=(k-2)*3
r=P.aw(s,0,!1)
q=a.length
if(0>=q)return H.b(a,0)
p=a[0]
for(o=2,n=0;o<k;++o,n+=3){if(n>=s)return H.b(r,n)
r[n]=p
m=n+1
l=o-1
if(l>=q)return H.b(a,l)
l=a[l]
if(m>=s)return H.b(r,m)
r[m]=l
l=n+2
if(o>=q)return H.b(a,o)
m=a[o]
if(l>=s)return H.b(r,l)
r[l]=m}C.b.af(this.y,r)
this.ai()}},
jo:function(a){var s,r,q,p,o,n,m,l,k,j,i=a.length
if(i>=3){s=(i-2)*3
r=P.aw(s,0,!1)
for(q=a.length,p=!1,o=2,n=0;o<i;++o,n+=3){m=o-2
l=n+1
k=o-1
j=n+2
if(p){if(m>=q)return H.b(a,m)
m=a[m]
if(n>=s)return H.b(r,n)
r[n]=m
if(k>=q)return H.b(a,k)
k=a[k]
if(l>=s)return H.b(r,l)
r[l]=k
if(o>=q)return H.b(a,o)
k=a[o]
if(j>=s)return H.b(r,j)
r[j]=k
p=!1}else{if(k>=q)return H.b(a,k)
k=a[k]
if(n>=s)return H.b(r,n)
r[n]=k
if(m>=q)return H.b(a,m)
m=a[m]
if(l>=s)return H.b(r,l)
r[l]=m
if(o>=q)return H.b(a,o)
m=a[o]
if(j>=s)return H.b(r,j)
r[j]=m
p=!0}}C.b.af(this.y,r)
this.ai()}},
ai:function(){var s=this.Q
return s==null?null:s.A(null)},
b_:function(){return!1},
bn:function(){return!1},
bX:function(){return!1},
ee:function(a,b){var s,r,q,p,o,n=this,m={},l=n.a
if(!b.l(0,l))throw H.c(P.h("Shape was reduced to "+l.i(0)+" so can not build for "+b.i(0)+"."))
m.a=0
n.e=P.mZ(n.b,new F.jG(m,n,n.c*4))
m=a.a
s=Z.nw(m,34962,n.f)
r=n.e
q=[]
p=n.r
if(p.length!==0){o=Z.fY(m,34963,p)
q.push(new Z.bL(0,p.length,o))}p=n.x
if(p.length!==0){o=Z.fY(m,34963,p)
q.push(new Z.bL(1,p.length,o))}p=n.y
if(p.length!==0){o=Z.fY(m,34963,p)
q.push(new Z.bL(4,p.length,o))}return new Z.cc(s,q,r,l)}}
F.jG.prototype={
$1:function(a){var s=this.b.a.cJ(a),r=s.gbz(s),q=this.a,p=q.a
q.a=p+r
return new Z.cb(s,r,p*4,this.c)},
$S:25}
F.jM.prototype={
gaq:function(){var s=this.a
return s==null?this.a=new F.aq(this,[]):s},
gf4:function(a){var s=this.b
return s==null?this.b=new F.jN([]):s},
gd3:function(a){var s=this.c
return s==null?this.c=new F.fi(this,[]):s},
gaF:function(){var s=this.d
return s==null?this.d=new F.dw(this,[]):s},
gn:function(){var s=this.e
return s==null?this.e=D.D():s},
b_:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gaF().b_()||!1
if(!r.gaq().b_())s=!1
q=r.e
if(q!=null)q.aO(0)
return s},
bn:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gaF().bn()||!1
if(!r.gaq().bn())s=!1
q=r.e
if(q!=null)q.aO(0)
return s},
bX:function(){var s=this.e
if(s!=null)++s.d
this.gaq().bX()
s=this.e
if(s!=null)s.aO(0)
return!0},
ee:function(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f={},e=h.gaq().c.length,d=a0.gei(a0),c=a0.gbz(a0),b=P.aw(e*c,0,!1)
f.a=0
s=P.mZ(d,new F.jO(f,h,a0,c*4,e,c,b))
r=a.a
q=new Z.cc(Z.nw(r,34962,b),[],s,a0)
h.gf4(h)
if(h.gd3(h).b.length!==0){p=[]
o=0
while(!0){n=h.c
if(n==null){n=h.c=new F.fi(h,[])
m=n}else m=n
if(!(o<n.b.length))break
n=m.b
if(o>=n.length)return H.b(n,o)
l=n[o]
n=l.a
if(n==null)n=g
else{m=n.a
if(m!=null){k=m.a;(k==null?m.a=new F.aq(m,[]):k).aX()}n=n.e}p.push(n==null?0:n)
n=l.b
if(n==null)n=g
else{m=n.a
if(m!=null){k=m.a;(k==null?m.a=new F.aq(m,[]):k).aX()}n=n.e}p.push(n==null?0:n);++o}j=Z.fY(r,34963,p)
q.b.push(new Z.bL(1,p.length,j))}if(h.gaF().b.length!==0){p=[]
o=0
while(!0){n=h.d
if(n==null){n=h.d=new F.dw(h,[])
m=n}else m=n
if(!(o<n.b.length))break
n=m.b
if(o>=n.length)return H.b(n,o)
i=n[o]
n=i.a
if(n==null)n=g
else{m=n.a
if(m!=null){k=m.a;(k==null?m.a=new F.aq(m,[]):k).aX()}n=n.e}p.push(n==null?0:n)
n=i.b
if(n==null)n=g
else{m=n.a
if(m!=null){k=m.a;(k==null?m.a=new F.aq(m,[]):k).aX()}n=n.e}p.push(n==null?0:n)
n=i.c
if(n==null)n=g
else{m=n.a
if(m!=null){k=m.a;(k==null?m.a=new F.aq(m,[]):k).aX()}n=n.e}p.push(n==null?0:n);++o}j=Z.fY(r,34963,p)
q.b.push(new Z.bL(4,p.length,j))}return q},
i:function(a){var s=this,r=[]
if(s.gaq().c.length!==0){r.push("Vertices:")
r.push(s.gaq().P("   "))}s.gf4(s)
if(s.gd3(s).b.length!==0){r.push("Lines:")
r.push(s.gd3(s).P("   "))}if(s.gaF().b.length!==0){r.push("Faces:")
r.push(s.gaF().P("   "))}return C.b.p(r,"\n")},
ai:function(){var s=this.e
return s==null?null:s.A(null)}}
F.jO.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.cJ(a),f=g.gbz(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.aq(o,[]):m).c
if(n>=m.length)return H.b(m,n)
l=m[n].eM(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.b(r,k)
r[k]=i;++k}}e.a+=f
return new Z.cb(g,f,d*4,h.d)},
$S:25}
F.dw.prototype={
jn:function(a){var s,r,q,p,o,n,m=[],l=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
o=s.a;(o==null?s.a=new F.aq(s,[]):o).m(0,l)
o=s.a;(o==null?s.a=new F.aq(s,[]):o).m(0,q)
o=s.a;(o==null?s.a=new F.aq(s,[]):o).m(0,p)
n=new F.d0()
o=l.a
if(o==null)H.f(P.h("May not create a face with a first vertex which is not attached to a shape."))
if(o!=q.a||o!=p.a)H.f(P.h("May not create a face with vertices attached to different shapes."))
n.a=l
o=l.d;(o==null?l.d=new F.cE([],[],[]):o).b.push(n)
n.b=q
o=q.d;(o==null?q.d=new F.cE([],[],[]):o).c.push(n)
n.c=p
q=p.d;(q==null?p.d=new F.cE([],[],[]):q).d.push(n)
q=n.a
if(q!=null){q=q.a
if(q!=null){p=q.d;(p==null?q.d=new F.dw(q,[]):p).b.push(n)}}q=n.a
if(q!=null){q=q.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}m.push(n)}return m},
gj:function(a){return this.b.length},
b_:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].cN())q=!1
return q},
bn:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].cM())q=!1
return q},
i:function(a){return this.F()},
P:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].P(a))
return C.b.p(p,"\n")},
F:function(){return this.P("")}}
F.fi.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.F()},
P:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.b(q,s)
r.push(q[s].P(a+(""+s+". ")))}return C.b.p(r,"\n")},
F:function(){return this.P("")}}
F.jN.prototype={
gj:function(a){return 0},
i:function(a){return this.F()},
P:function(a){var s,r,q=[]
for(s=this.b,r=0;!1;++r)q.push(s[r].P(a))
return C.b.p(q,"\n")},
F:function(){return this.P("")}}
F.kF.prototype={
gaF:function(){var s=this.d
return s==null?this.d=new F.cE([],[],[]):s},
ga_:function(a){var s=this.a
if(s!=null)s.gaq().aX()
return this.e},
eM:function(a){var s,r,q,p,o=this,n=null
if(a.l(0,$.aa())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.l(0,$.as())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.l(0,$.bA())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.l(0,$.ae())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.l(0,$.c7())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.l(0,$.ec())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.l(0,$.ed())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.l(0,$.cP()))return[o.ch]
else if(a.l(0,$.bz())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
cN:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cC()
p.gaF().B(0,new F.kJ(o))
p.r=o.a.N()
if(r){s.ai()
o=s.e
if(o!=null)o.aO(0)}return!0},
cM:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cC()
p.gaF().B(0,new F.kI(o))
p.x=o.a.N()
if(r){s.ai()
o=s.e
if(o!=null)o.aO(0)}return!0},
l:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
P:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.a.b5(C.c.i(q.e),0))
s=q.f
s=s==null?p:s.F()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.F()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.F()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.F()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.F()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.F()
n.push(s==null?o:s)
n.push(V.t(q.ch,3,0))
s=q.cx
s=s==null?p:s.F()
n.push(s==null?o:s)
r=C.b.p(n,", ")
return a+"{"+r+"}"},
F:function(){return this.P("")}}
F.kJ.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.K(0,r)}},
$S:9}
F.kI.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.K(0,r)}},
$S:9}
F.aq.prototype={
aX:function(){},
m:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.h("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.ai()
return!0},
bW:function(a,b,c,d,e,f){var s=F.cD(a,null,b,c,null,d,e,f,0)
this.m(0,s)
return s},
gj:function(a){return this.c.length},
b_:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].cN()
return!0},
bn:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].cM()
return!0},
bX:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.N()
if(!J.a6(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.A(null)}}}}}return!0},
i:function(a){return this.F()},
P:function(a){var s,r,q,p
this.aX()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].P(a))
return C.b.p(s,"\n")},
F:function(){return this.P("")}}
F.cE.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
B:function(a,b){var s=this
C.b.B(s.b,b)
C.b.B(s.c,new F.kG(s,b))
C.b.B(s.d,new F.kH(s,b))},
i:function(a){return this.F()},
F:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].P(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].P(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].P(""))
return C.b.p(p,"\n")}}
F.kG.prototype={
$1:function(a){if(!J.a6(a.a,this.a))this.b.$1(a)},
$S:9}
F.kH.prototype={
$1:function(a){var s=this.a
if(!J.a6(a.a,s)&&!J.a6(a.b,s))this.b.$1(a)},
$S:9}
O.eN.prototype={
gn:function(){var s=this.fr
return s==null?this.fr=D.D():s},
a5:function(a){var s=this.fr
return s==null?null:s.A(a)},
cd:function(){return this.a5(null)},
dW:function(a){this.a=null
this.a5(a)},
iX:function(){return this.dW(null)},
hM:function(a,b){return this.a5(new D.aX())},
hO:function(a,b){return this.a5(new D.aY())},
geL:function(){var s=this,r=s.dx
if(r==null){r=new D.db([],[],[],[],[])
r.c9(r.ghJ(),r.giy(),r.giC())
r.gn().m(0,s.gdV())
r.geK().m(0,s.gbB())
s.dx=r}return r},
gek:function(){var s=this.f
return s==null?this.f=O.eO(this,"emission"):s},
gcI:function(){var s=this.r
return s==null?this.r=O.eO(this,"ambient"):s},
gcP:function(){var s=this.x
return s==null?this.x=O.eO(this,"diffuse"):s},
gdk:function(){var s=this.z
return s==null?this.z=new O.je(new V.S(0,0,0),this,"specular",new A.au(!1,!1,!1)):s},
gcH:function(a){var s=this.db
return s==null?this.db=new O.j9(this,"alpha",new A.au(!1,!1,!1)):s},
dI:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=t.y,a0=new H.Q(a),a1=c.dx
a1=a1==null?b:a1.e
if(a1==null)a1=[]
s=a1.length
r=0
for(;r<a1.length;a1.length===s||(0,H.o)(a1),++r){q=a1[r]
p=q.gaL()
o=a0.h(0,q.gaL())
a0.k(0,p,o==null?1:o)}n=[]
a0.B(0,new O.jf(c,n))
C.b.bA(n,new O.jg())
m=new H.Q(a)
a1=c.dx
a1=a1==null?b:a1.f
if(a1==null)a1=[]
s=a1.length
r=0
for(;r<a1.length;a1.length===s||(0,H.o)(a1),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=[]
m.B(0,new O.jh(c,l))
C.b.bA(l,new O.ji())
k=new H.Q(a)
a1=c.dx
a1=a1==null?b:a1.r
if(a1==null)a1=[]
s=a1.length
r=0
for(;r<a1.length;a1.length===s||(0,H.o)(a1),++r){q=a1[r]
p=q.gaL()
o=k.h(0,q.gaL())
k.k(0,p,o==null?1:o)}j=[]
k.B(0,new O.jj(c,j))
C.b.bA(j,new O.jk())
i=new H.Q(a)
a=c.dx
a=a==null?b:a.x
if(a==null)a=[]
a1=a.length
r=0
for(;r<a.length;a.length===a1||(0,H.o)(a),++r){q=a[r]
s=q.gaL()
p=i.h(0,q.gaL())
i.k(0,s,p==null?1:p)}h=[]
i.B(0,new O.jl(c,h))
C.b.bA(h,new O.jm())
a=C.c.a3(c.e.a.length+3,4)
if(c.dy==null)c.dy=new O.jc(new V.bF(0,0,0,0))
a1=c.gek().c
s=c.gcI().c
p=c.gcP().c
o=c.y
o=(o==null?c.y=O.eO(c,"invDiffuse"):o).c
g=c.gdk().c
f=c.Q
f=(f==null?c.Q=new O.ja(c,"bump",new A.au(!1,!1,!1)):f).c
e=c.cx
e=(e==null?c.cx=O.eO(c,"reflect"):e).c
d=c.cy
return A.pc(!1,!1,!1,!1,a*4,a1,s,p,o,g,f,e,(d==null?c.cy=new O.jd(new V.S(0,0,0),c,"refract",new A.au(!1,!1,!1)):d).c,c.gcH(c).c,n,l,j,h)},
at:function(a,b){if(b!=null)if(!C.b.M(a,b)){b.sa_(0,a.length)
a.push(b)}},
ak:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.at(m==null?[]:m)
s=H.a_(m).c
for(;m.t();){r=s.a(m.d)
q=$.kD
if(q==null)q=$.kD=new V.y(0,0,1)
r.c=q
p=$.kC
r.d=p==null?$.kC=new V.y(0,1,0):p
p=$.kB
r.e=p==null?$.kB=new V.y(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.az(q).N()
r.d=n.az(r.d).N()
r.e=n.az(r.e).N()}}},
ke:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.dI()
r=s.bq
q=b0.fr
a9=q.h(0,r)
if(a9==null){p=b0.a
o=t.S
n=t.W
a9=new A.eM(s,[],P.L(o,n),P.L(o,t.J),P.L(o,n),P.L(o,t.L),P.L(o,n),P.L(o,t.V),P.L(o,n),P.L(o,t.R),p,r)
a9.fG(s,p)
if(r.length===0)H.f(P.h("May not cache a shader with no name."))
if(q.bZ(0,r))H.f(P.h('Shader cache already contains a shader by the name "'+r+'".'))
q.k(0,r,a9)}a9=a7.a=a9
b1.e=null}m=a9.x
l=m.en
s=b1.e
if(!(s instanceof Z.cc))s=b1.e=null
if(s==null||!s.d.l(0,l)){s=m.k4
if(s){r=b1.d
if(r!=null)r.b_()}r=m.r1
if(r){q=b1.d
if(q!=null)q.bn()}q=m.rx
if(q){p=b1.d
if(p!=null)p.bX()}p=b1.d
k=p==null?a8:p.ee(new Z.kK(b0.a),l)
if(k==null)return
p=k.br($.aa())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=k.br($.as())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=k.br($.bA())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(m.r2){s=k.br($.ae())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=k.br($.c7())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(m.ry){s=k.br($.bz())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=k}j=[]
s=b0.a
s.useProgram(a9.e)
a9.gaK(a9).jF()
if(m.fr){r=b0.dx
r=r.ga9(r)
q=a9.db
if(q!=null)q.aB(r.ao(0,!0))}if(m.fx){r=b0.cx
if(r==null){r=b0.db
q=b0.dx
q=b0.cx=r.ga9(r).v(0,q.ga9(q))
r=q}q=a9.dx
if(q!=null)q.aB(r.ao(0,!0))}r=b0.ch
if(r==null){r=b0.dx
r=b0.ch=b0.gkc().v(0,r.ga9(r))}q=a9.fr
if(q!=null)q.aB(r.ao(0,!0))
if(m.go){r=b0.db
r=r.ga9(r)
q=a9.dy
if(q!=null)q.aB(r.ao(0,!0))}if(m.x1){r=V.jo()
q=a9.go
if(q!=null)q.aB(r.ao(0,!0))}if(m.x2){r=V.am()
q=a9.id
if(q!=null)q.aB(r.ao(0,!0))}if(m.y1){r=V.am()
q=a9.k1
if(q!=null)q.aB(r.ao(0,!0))}if(m.bp>0){r=a7.e.a
i=r.length
q=a9.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.b(r,h)
q=r[h]
p=a9.k3
if(h>=p.length)return H.b(p,h)
p=p[h]
g=new Float32Array(H.cJ(q.ao(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}r=m.a
if(r.a){q=a7.f
q=q==null?a8:q.f
if(q==null)q=new V.S(0,0,0)
p=a9.k4
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.f
a7.at(j,r==null?a8:r.d)
r=a7.f
r=r==null?a8:r.d
a9.aE(a9.r1,r)}if(m.k1){r=m.b
if(r.a){q=a7.r
q=q==null?a8:q.f
if(q==null)q=new V.S(0,0,0)
p=a9.rx
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.r
a7.at(j,r==null?a8:r.d)
r=a7.r
r=r==null?a8:r.d
a9.aE(a9.ry,r)}r=m.c
if(r.a){q=a7.x
q=q==null?a8:q.f
if(q==null)q=new V.S(0,0,0)
p=a9.x2
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.x
a7.at(j,r==null?a8:r.d)
r=a7.x
r=r==null?a8:r.d
a9.aE(a9.y1,r)}r=m.d
if(r.a){q=a7.y
q=q==null?a8:q.f
if(q==null)q=new V.S(0,0,0)
p=a9.bp
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.y
a7.at(j,r==null?a8:r.d)
r=a7.y
r=r==null?a8:r.d
a9.aE(a9.bq,r)}r=m.e
q=r.a
if(q||r.b||!1){p=a7.z
p=p==null?a8:p.ch
if(p==null)p=100
o=a9.eq
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a7.z
q=q==null?a8:q.f
if(q==null)q=new V.S(1,1,1)
p=a9.eo
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.z
a7.at(j,r==null?a8:r.d)
r=a7.z
r=r==null?a8:r.d
a9.aE(a9.ep,r)}r=m.z
if(r.length>0){f=new H.Q(t.y)
q=a7.dx
q=q==null?a8:q.e
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.o)(q),++e){d=q[e]
c=d.gaL()
b=f.h(0,c)
if(b==null)b=0
f.k(0,c,b+1)
o=a9.cR.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.b(o,b)
a=o[b]
o=d.gkC()
n=$.b3
o=o.R(n==null?$.b3=new V.q(0,0,0):n)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gkH()
n=$.b3
o=o.R(n==null?$.b3=new V.q(0,0,0):n)
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gbo(d)
n=a.d
n.a.uniform3f(n.d,o.a,o.b,o.c)
if(d.gem()){o=d.ge8()
n=a.e
if(n!=null)n.a.uniform1f(n.d,o)
o=d.ge9()
n=a.f
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gea()
n=a.r
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.o)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=a9.cQ.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=b0.db
a0=q.ga9(q)
a1=new H.Q(t.y)
q=a7.dx
q=q==null?a8:q.f
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.o)(q),++e){d=q[e]
b=a1.h(0,0)
if(b==null)b=0
a1.k(0,0,b+1)
o=a9.cT.h(0,0)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.b(o,b)
a=o[b]
o=a0.az(d.c).N()
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.b
n=a.f
n.a.uniform3f(n.d,o.a,o.b,o.c)}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.o)(r),++e){p=r[e].a
i=a1.h(0,p)
if(i==null)i=0
p=a9.cS.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.ch
if(r.length>0){q=b0.db
a0=q.ga9(q)
a2=new H.Q(t.y)
q=a7.dx
q=q==null?a8:q.r
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.o)(q),++e){d=q[e]
c=d.gaL()
b=a2.h(0,c)
if(b==null)b=0
a2.k(0,c,b+1)
o=a9.cV.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.b(o,b)
a=o[b]
a3=a0.v(0,d.ga9(d))
o=d.ga9(d)
n=$.b3
o=o.R(n==null?$.b3=new V.q(0,0,0):n)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=$.b3
o=a3.R(o==null?$.b3=new V.q(0,0,0):o)
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gbo(d)
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
d.gb6()
o=a3.aN(0)
n=a.d
if(n!=null){g=new Float32Array(H.cJ(new V.aL(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).ao(0,!0)))
n.a.uniformMatrix3fv(n.d,!1,g)}d.gb6()
o=d.gb6()
if(!C.b.M(j,o)){o.sa_(0,j.length)
j.push(o)}o=d.gb6()
n=o.gah(o)
if(n){n=a.f
if(n!=null){a4=o.gah(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.ga_(o))}}d.gby()
o=d.gfp()
n=a.x
if(n!=null)n.a.uniform4f(n.d,o.a,o.b,o.c,o.d)
o=d.gby()
if(!C.b.M(j,o)){o.sa_(0,j.length)
j.push(o)}o=d.gby()
n=o.gah(o)
if(n){n=a.r
if(n!=null){a4=o.gah(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.ga_(o))}}if(d.gem()){o=d.ge8()
n=a.y
if(n!=null)n.a.uniform1f(n.d,o)
o=d.ge9()
n=a.z
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gea()
n=a.Q
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.o)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=a9.cU.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=b0.db
a0=q.ga9(q)
a6=new H.Q(t.y)
q=a7.dx
q=q==null?a8:q.x
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.o)(q),++e){d=q[e]
c=d.gaL()
b=a6.h(0,c)
if(b==null)b=0
a6.k(0,c,b+1)
o=a9.cX.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.b(o,b)
a=o[b]
o=d.gkb(d)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gkF(d).N()
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=a0.R(d.gkb(d))
n=a.d
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gbo(d)
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
d.gb6()
o=d.gkS()
n=a.f
if(n!=null)n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gaj(d)
n=a.r
if(n!=null)n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gkQ()
n=a.x
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gkR()
n=a.y
if(n!=null)n.a.uniform1f(n.d,o)
d.gb6()
o=d.gb6()
if(!C.b.M(j,o)){o.sa_(0,j.length)
j.push(o)}o=d.gb6()
n=o.gah(o)
if(n){n=a.dx
if(n!=null){a4=o.gah(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.ga_(o))}}d.gby()
o=d.gfp()
n=a.z
if(n!=null)n.a.uniform4f(n.d,o.a,o.b,o.c,o.d)
o=d.gby()
if(!C.b.M(j,o)){o.sa_(0,j.length)
j.push(o)}o=d.gby()
n=o.gah(o)
if(n){n=a.dy
if(n!=null){a4=o.gah(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.ga_(o))}}if(d.gkG()){o=d.gkE()
n=a.Q
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gkD()
n=a.ch
if(n!=null)n.a.uniform1f(n.d,o)}if(d.gem()){o=d.ge8()
n=a.cx
if(n!=null)n.a.uniform1f(n.d,o)
o=d.ge9()
n=a.cy
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gea()
n=a.db
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.o)(r),++e){p=r[e].a
i=a6.h(0,p)
if(i==null)i=0
p=a9.cW.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.f.b){r=a7.Q
a7.at(j,r==null?a8:r.d)
r=a7.Q
r=r==null?a8:r.d
a9.aE(a9.er,r)}if(m.dy){r=b0.Q
if(r==null){r=b0.db
r=b0.Q=r.ga9(r).aN(0)}q=a9.fy
if(q!=null)q.aB(r.ao(0,!0))}if(m.db){a7.at(j,a8)
a9.iZ(a9.es,a8)
r=m.r
if(r.a){q=a7.cx
q=q==null?a8:q.f
if(q==null)q=new V.S(1,1,1)
p=a9.eu
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.cx
a7.at(j,r==null?a8:r.d)
r=a7.cx
r=r==null?a8:r.d
a9.aE(a9.ev,r)}r=m.x
q=r.a
if(q||r.b||!1){p=a7.cy
p=p==null?a8:p.ch
if(p==null)p=0
o=a9.ew
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a7.cy
q=q==null?a8:q.f
if(q==null)q=new V.S(1,1,1)
p=a9.ex
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.cy
a7.at(j,r==null?a8:r.d)
r=a7.cy
r=r==null?a8:r.d
a9.aE(a9.ey,r)}}r=m.y
q=r.a
p=!q
if(!p||r.b||!1){if(q){q=a7.db
q=q==null?a8:q.f
if(q==null)q=1
o=a9.ez
if(o!=null)o.a.uniform1f(o.d,q)}if(r.b){q=a7.db
a7.at(j,q==null?a8:q.d)
q=a7.db
q=q==null?a8:q.d
a9.aE(a9.eA,q)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].aZ(b0)
q=t.D.a(b1.e)
q.aZ(b0)
q.bv(b0)
q.bN(b0)
if(!p||r.b||!1)s.disable(3042)
for(h=0;h<j.length;++h)j[h].bN(b0)
s.useProgram(a8)
a9.gaK(a9).jD()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.dI().bq}}
O.jf.prototype={
$2:function(a,b){return this.b.push(new A.bB(a,C.c.a3(b+3,4)*4))},
$S:7}
O.jg.prototype={
$2:function(a,b){return C.c.ab(a.a,b.a)},
$S:50}
O.jh.prototype={
$2:function(a,b){return this.b.push(new A.bI(a,C.c.a3(b+3,4)*4))},
$S:7}
O.ji.prototype={
$2:function(a,b){return C.c.ab(a.a,b.a)},
$S:51}
O.jj.prototype={
$2:function(a,b){return this.b.push(new A.bX(a,C.c.a3(b+3,4)*4))},
$S:7}
O.jk.prototype={
$2:function(a,b){return C.c.ab(a.a,b.a)},
$S:52}
O.jl.prototype={
$2:function(a,b){return this.b.push(new A.bZ(a,C.c.a3(b+3,4)*4))},
$S:7}
O.jm.prototype={
$2:function(a,b){return C.c.ab(a.a,b.a)},
$S:53}
O.j9.prototype={
aV:function(){var s,r=this
r.dl()
s=r.f
$.v().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.a5(new D.B(r.b,s,1))}}}
O.di.prototype={
a5:function(a){return this.a.a5(a)},
cd:function(){return this.a5(null)},
aV:function(){},
cz:function(a){var s,r,q=this
if(!q.c.l(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aV()
s=q.a
s.a=null
s.a5(null)}},
sbL:function(a){var s,r=this,q=r.c
if(!q.b)r.cz(new A.au(q.a,!0,!1))
q=r.d
if(q!==a){if(q!=null)q.gn().U(0,r.gbB())
s=r.d
r.d=a
a.gn().m(0,r.gbB())
r.a.a5(new D.B(r.b+".texture2D",s,r.d))}}}
O.ja.prototype={}
O.dj.prototype={
dY:function(a){var s,r=this
if(!r.f.l(0,a)){s=r.f
r.f=a
r.a.a5(new D.B(r.b+".color",s,a))}},
aV:function(){this.dl()
this.dY(new V.S(1,1,1))},
sbo:function(a,b){this.cz(new A.au(!0,this.c.b,!1))
this.dY(b)}}
O.jc.prototype={}
O.jd.prototype={
aV:function(){var s,r=this
r.dm()
s=r.ch
$.v().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.a5(new D.B(r.b+".refraction",s,1))}}}
O.je.prototype={
dZ:function(a){var s=this,r=s.ch
$.v().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.a5(new D.B(s.b+".shininess",r,a))}},
aV:function(){this.dm()
this.dZ(100)}}
O.jX.prototype={}
T.k0.prototype={}
T.k1.prototype={}
T.k2.prototype={
ga_:function(a){return this.a},
sa_:function(a,b){this.a=b},
gah:function(a){var s=this.d
if(s==null)s=this.c
s=s==null?null:s.gah(s)
return s===!0},
gn:function(){var s=this.f
return s==null?this.f=D.D():s},
aZ:function(a){var s
if(this.d==null){s=this.d=this.c
if(s!=null)s.aZ(a)}},
bN:function(a){var s=this.d
if(s!=null){s.bN(a)
this.d=null}}}
T.k3.prototype={
ga_:function(a){return this.a},
sa_:function(a,b){this.a=b},
gah:function(a){return this.d},
gn:function(){var s=this.y
return s==null?this.y=D.D():s},
aZ:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}},
bN:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(3553,null)}}}
T.k4.prototype={
jP:function(a,b,c,d){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9987)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.k3(o)
W.R(s,"load",new T.k5(this,r,s,!1,o,!1,!0),!1)
return r},
iY:function(a,b,c){var s,r,q,p,o,n
b=V.mB(b)
s=a.width
r=V.mB(s==null?512:s)
s=a.height
q=V.mB(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.lT()
p.width=r
p.height=q
o=t.r.a(C.i.fm(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.rf(o.getImageData(0,0,s,n==null?512:n))}}}
T.k5.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.iY(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,0)
C.a7.kp(o,p,0,6408,6408,5121,r)
o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.el()}++s.e},
$S:3}
X.j_.prototype={
gn:function(){var s=this.x
return s==null?this.x=D.D():s}}
X.f4.prototype={
gn:function(){var s=this.f
return s==null?this.f=D.D():s},
bc:function(a){var s=this.f
return s==null?null:s.A(a)},
fU:function(){return this.bc(null)},
seP:function(a){var s,r,q=this
if(!J.a6(q.b,a)){s=q.b
if(s!=null)s.gn().U(0,q.gdt())
r=q.b
q.b=a
if(a!=null)a.gn().m(0,q.gdt())
q.bc(new D.B("mover",r,q.b))}}}
X.jW.prototype={}
V.jQ.prototype={
cG:function(a,b){var s,r,q,p,o
a=C.c.jt(a,0,4)
s=P.lh(C.w,b,C.f,!1)
r=document.createElement("div")
r.className="textHeader"
r.id=s
q=r.style
q.toString
p=""+(28-a*3)+"px"
q.fontSize=p
o=W.oN()
o.href="#"+s
o.textContent=b
r.appendChild(o).toString
this.a.appendChild(r).toString},
Z:function(a){var s,r,q,p,o,n,m=this.j0(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.O(C.b.jO(a)),s=new P.cH(m.ff(new H.bP(s,s.gj(s))).a());s.t();){r=s.gE(s)
switch(r.a){case"Bold":q=l.createElement("div")
q.className="boldPar"
q.textContent=r.b
k.appendChild(q).toString
break
case"Italic":q=l.createElement("div")
q.className="italicPar"
q.textContent=r.b
k.appendChild(q).toString
break
case"Code":q=l.createElement("div")
q.className="codePar"
q.textContent=r.b
k.appendChild(q).toString
break
case"Link":r=r.b
if(H.oe(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.b(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.lh(C.w,r,C.f,!1)
o=l.createElement("a")
o.className="linkPar"
o.href="#"+n
o.textContent=r
k.appendChild(o).toString}break
case"Other":q=l.createElement("div")
q.className="normalPar"
q.textContent=r.b
k.appendChild(q).toString
break}}this.a.appendChild(k).toString},
jl:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
k.id="shellTable"
s=k.style
s.width="100%"
s.padding="0px"
s.marginLeft=m
s.marginRight=m
this.a.appendChild(k).toString
r=k.insertRow(-1)
s=r.insertCell(-1)
s.toString
q=t.aL
s=q.a(s).style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=m
s.marginRight=m
for(p=0;p<1;++p){o=l.createElement("div")
o.id=a[p]
s=o.style
s.textAlign="left"
s=o.style
s.verticalAlign="top"
s=r.insertCell(-1)
s.toString
q.a(s)
n=s.style
n.textAlign="center"
n.verticalAlign="top"
n.marginLeft=m
n.marginRight=m
s.appendChild(o).toString}},
j0:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
s=t.N
h=new L.ka(P.L(s,t.aJ),P.L(s,t.aX),P.mY(s))
h.d=h.O(0,q)
s=h.O(0,q).p(0,p)
r=new K.Z([])
r.a0(new H.O("*"))
s.a.push(r)
s.c=!0
s=[]
h.O(0,p).p(0,p).a.push(new K.bj(s))
r=new K.Z([])
r.a0(new H.O("*"))
s.push(r)
r=h.O(0,p).p(0,"BoldEnd")
s=new K.Z([])
s.a0(new H.O("*"))
r.a.push(s)
r.c=!0
r=h.O(0,q).p(0,o)
s=new K.Z([])
s.a0(new H.O("_"))
r.a.push(s)
r.c=!0
r=[]
h.O(0,o).p(0,o).a.push(new K.bj(r))
s=new K.Z([])
s.a0(new H.O("_"))
r.push(s)
s=h.O(0,o).p(0,n)
r=new K.Z([])
r.a0(new H.O("_"))
s.a.push(r)
s.c=!0
s=h.O(0,q).p(0,m)
r=new K.Z([])
r.a0(new H.O("`"))
s.a.push(r)
s.c=!0
s=[]
h.O(0,m).p(0,m).a.push(new K.bj(s))
r=new K.Z([])
r.a0(new H.O("`"))
s.push(r)
r=h.O(0,m).p(0,"CodeEnd")
s=new K.Z([])
s.a0(new H.O("`"))
r.a.push(s)
r.c=!0
r=h.O(0,q).p(0,l)
s=new K.Z([])
s.a0(new H.O("["))
r.a.push(s)
r.c=!0
r=h.O(0,l).p(0,k)
s=new K.Z([])
s.a0(new H.O("|"))
r.a.push(s)
s=h.O(0,l).p(0,j)
r=new K.Z([])
r.a0(new H.O("]"))
s.a.push(r)
s.c=!0
s=[]
h.O(0,l).p(0,l).a.push(new K.bj(s))
r=new K.Z([])
r.a0(new H.O("|]"))
s.push(r)
r=h.O(0,k).p(0,j)
s=new K.Z([])
s.a0(new H.O("]"))
r.a.push(s)
r.c=!0
r=[]
h.O(0,k).p(0,k).a.push(new K.bj(r))
s=new K.Z([])
s.a0(new H.O("|]"))
r.push(s)
h.O(0,q).p(0,i).a.push(new K.im())
s=[]
h.O(0,i).p(0,i).a.push(new K.bj(s))
r=new K.Z([])
r.a0(new H.O("*_`["))
s.push(r)
r=h.O(0,"BoldEnd")
r.d=r.a.bM(p)
r=h.O(0,n)
r.d=r.a.bM(o)
r=h.O(0,"CodeEnd")
r.d=r.a.bM(m)
r=h.O(0,j)
r.d=r.a.bM("Link")
r=h.O(0,i)
r.d=r.a.bM(i)
return this.b=h}}
V.jS.prototype={
$1:function(a){P.m8(C.j,new V.jR(this.a))},
$S:3}
V.jR.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.aH(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.r(-0.01*s)+"px"
q.top=r},
$S:1}
B.aj.prototype={
ge5:function(){var s=this
return new B.aj(s.a,s.b+1,s.c,s.d,s.e,s.f)},
geb:function(){var s=this
return new B.aj(s.a,s.b-1,s.c,s.d,s.e,s.f)},
gaj:function(a){var s=this,r=s.a+1,q=s.d,p=s.f
if(r>=16){q+=16
p=p==null?null:p.gaj(p)
r=0}return new B.aj(r,s.b,s.c,q,s.e,p)},
gag:function(a){var s=this,r=s.a-1,q=s.d,p=s.f
if(r<0){q-=16
p=p==null?null:p.gag(p)
r=15}return new B.aj(r,s.b,s.c,q,s.e,p)},
gaM:function(){var s=this,r=s.c+1,q=s.e,p=s.f
if(r>=16){q+=16
p=p==null?null:p.gaM()
r=0}return new B.aj(s.a,s.b,r,s.d,q,p)},
gaY:function(a){var s=this,r=s.c-1,q=s.e,p=s.f
if(r<0){q-=16
p=p==null?null:p.gaY(p)
r=15}return new B.aj(s.a,s.b,r,s.d,q,p)},
eS:function(a){var s=this
if(a.l(0,$.aC()))return s.gag(s)
else if(a.l(0,$.aD()))return s.gaj(s)
else if(a.l(0,$.b9()))return s.geb()
else if(a.l(0,$.aE()))return s.ge5()
else if(a.l(0,$.ba()))return s.gaY(s)
else if(a.l(0,$.bb()))return s.gaM()
else return null},
gcL:function(){var s=this
return V.fd(s.a+s.d,s.b,s.c+s.e,1,1,1)},
i:function(a){var s=this
return H.r(s.f)+".block("+s.a+", "+s.b+", "+s.c+", ("+s.d+", "+s.e+"), "+B.oR(s.gL(s))+")"},
gL:function(a){var s=this,r=s.f
r=r==null?null:r.al(s.a,s.b,s.c)
if(r==null)r=s.b<0?100:0
return r},
sL:function(a,b){var s=this,r=s.f
if(r!=null)r.V(s.a,s.b,s.c,b)}}
B.iC.prototype={
c_:function(a){var s,r,q
for(s=0;s<16;++s)for(r=0;r<16;++r)for(q=0;q<10;++q)a.V(s,q,r,this.hv(s,q,r))
a.d_()},
hv:function(a,b,c){var s=a===0
if(s||c===0)return s&&c===0?112:110
if(a===1&&c===1)return 110
return C.c.b8(a+b+c,2)===0?113:111}}
B.iD.prototype={
fF:function(a){var s,r,q,p,o,n,m,l,k,j=null
for(s=this.c.e,r=s.length,q=this.e,p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
n=E.cf(j,j,j,j)
m=o.y
if(m.bD([n])){l=m.a
k=l.length
l.push(n)
m=m.c
if(m!=null)m.$2(k,[n])}q.push(n)}},
i:function(a){return"chunk("+this.a+", "+this.b+")"},
d_:function(){var s,r=this
r.x=!1
r.f=!0
r.saS(!1)
s=r.gag(r)
if(s!=null)s.f=!0
s=r.gaj(r)
if(s!=null)s.f=!0
s=r.gaM()
if(s!=null)s.f=!0
s=r.gaY(r)
if(s!=null)s.f=!0},
al:function(a,b,c){var s,r
if(b<0)return 100
if(b>=48)return 0
if(a<0)return 0
if(a>=16)return 0
if(c<0)return 0
if(c>=16)return 0
s=this.d
r=(a*48+b)*16+c
if(r<0||r>=12288)return H.b(s,r)
return s[r]},
bT:function(a,b,c,d){var s=a==null?null:a.c7(b,c,d)
return s==null?0:s},
c7:function(a,b,c){var s,r,q=this
if(b<0)return 100
if(b>=48)return 0
if(a<0)return q.bT(q.gag(q),a+16,b,c)
if(a>=16)return q.bT(q.gaj(q),a-16,b,c)
if(c<0)return q.bT(q.gaY(q),a,b,c+16)
if(c>=16)return q.bT(q.gaM(),a,b,c-16)
s=q.d
r=(a*48+b)*16+c
if(r<0||r>=12288)return H.b(s,r)
return s[r]},
V:function(a,b,c,d){var s,r
if(b<0)return!1
if(b>=48)return!1
if(a<0)return!1
if(a>=16)return!1
if(c<0)return!1
if(c>=16)return!1
s=this.d
r=(a*48+b)*16+c
if(r<0||r>=12288)return H.b(s,r)
s[r]=d
return!0},
gag:function(a){return this.c.b1(this.a-16,this.b)},
gaM:function(){return this.c.b1(this.a,this.b+16)},
gaj:function(a){return this.c.b1(this.a+16,this.b)},
gaY:function(a){return this.c.b1(this.a,this.b-16)},
de:function(a,b,c){var s,r
for(s=47;s>=0;--s){r=this.al(a,s,b)
if(r>=100&&r<=117)return s}return c},
ku:function(a,b){return this.de(a,b,48)},
kw:function(){var s,r=this
if(r.x||!r.r)return
r.f=r.r=!1
s=B.m6(r.c.a,null)
s.jr(r)
s.cZ(0,r.e)},
saS:function(a){var s,r,q
for(s=this.e,r=s.length,q=0;q<r;++q)s[q].b=a},
kx:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(h.x||h.r){h.saS(!1)
return}s=V.m5(h.a,h.b,16,16)
r=s.eR(a)
q=a.a
p=r.a-q
o=a.b
n=r.b-o
if(p*p+n*n<100){h.saS(!0)
return}m=s.eR(b)
l=new V.ac(b.a-q,b.b-o)
k=l.ar(0,Math.sqrt(l.a8(l)))
j=new V.ac(m.a-q,m.b-o)
i=j.a8(j)
if(i>6400){h.saS(!1)
return}h.saS(k.a8(j.ar(0,i))>0)}}
B.iE.prototype={
ju:function(a,b,c){var s,r,q=this
q.b=b
q.c=a
q.d=c
q.e=$.aB()
q.hi()
for(;q.j3(););s=q.b
r=q.d
q.b=s.K(0,new V.q(r.a,r.b,r.c))
return!0},
hi:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.c,a7=a5.b,a8=a6.c5(0,new V.y(a7.a,a7.b,a7.c))
a7=a8.c5(0,a5.d)
a6=a8.a
s=a7.a
r=Math.min(a6,s)
q=Math.max(a6+a8.d,s+a7.d)
s=a8.b
a6=a7.b
p=Math.min(s,a6)
o=Math.max(s+a8.e,a6+a7.e)
a6=a8.c
s=a7.c
n=Math.min(a6,s)
m=Math.max(a6+a8.f,s+a7.f)
a7=a5.a
l=a7.al(r,p,n)
k=a7.al(r+(q-r),p+(o-p),n+(m-n))
if(l==null||k==null)return
j=k.a+k.d
i=k.c+k.e
a6=a5.f
C.b.sj(a6,0)
a7=a5.r
C.b.sj(a7,0)
s=a5.x
C.b.sj(s,0)
h=k.b
g=l
while(!0){if(!(g!=null&&g.a+g.d<=j))break
f=g
while(!0){if(!(f!=null&&f.b<=h))break
e=f
while(!0){if(!(e!=null&&e.c+e.e<=i))break
d=e.gL(e)
if(d>=100&&d<=117){c=$.aB()
b=e.gag(e)
d=b.gL(b)
d=d>=100&&d<=117
if(d){d=$.aC()
c=new V.U(c.a|d.a)}b=e.gaj(e)
d=b.gL(b)
d=d>=100&&d<=117
if(d)c=new V.U(c.a|$.aD().a)
d=e.a
a=e.b
a0=e.c
a1=e.d
a2=e.e
a3=e.f
b=new B.aj(d,a-1,a0,a1,a2,a3)
a4=b.gL(b)
a4=a4>=100&&a4<=117
if(a4)c=new V.U(c.a|$.b9().a)
b=new B.aj(d,a+1,a0,a1,a2,a3)
d=b.gL(b)
d=d>=100&&d<=117
if(d)c=new V.U(c.a|$.aE().a)
b=e.gaY(e)
d=b.gL(b)
d=d>=100&&d<=117
if(d)c=new V.U(c.a|$.ba().a)
b=e.gaM()
d=b.gL(b)
d=d>=100&&d<=117
if(d)c=new V.U(c.a|$.bb().a)
d=$.om()
if(!c.l(0,d)){a6.push(e.gcL())
a=$.ii().a
a7.push(new V.U(d.a&a&~c.a))
s.push(!1)}}e=e.gaM()}f=new B.aj(f.a,f.b+1,f.c,f.d,f.e,f.f)}g=g.gaj(g)}},
j3:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(d.d.d1())return!1
s=d.c
r=d.b
q=s.c5(0,new V.y(r.a,r.b,r.c))
p=$.aB()
for(s=d.f,r=d.x,o=d.r,n=0,m=-1,l=0;l<s.length;++l){if(l>=r.length)return H.b(r,l)
if(!r[l]){k=s[l]
if(l>=o.length)return H.b(o,l)
j=o[l]
i=d.d
h=$.kE
if(h==null)h=$.kE=new V.y(0,0,0)
g=Y.rE(q,k,i,h,$.ii(),j)
if(g.a===C.n)if(p.l(0,$.aB())||n>g.b){p=g.y
n=g.b
m=l}}}if(p.l(0,$.aB()))return!1
if(m<0||m>=r.length)return H.b(r,m)
r[m]=!0
f=d.d.v(0,n)
e=d.d.v(0,1-n)
if(p.l(0,$.aD())||p.l(0,$.aC())){s=d.b
d.b=new V.q(s.a+f.a,s.b+f.b,s.c+f.c)
d.d=new V.y(0,e.b,e.c)}else if(p.l(0,$.aE())||p.l(0,$.b9())){s=d.b
d.b=new V.q(s.a+f.a,s.b+f.b,s.c+f.c)
d.d=new V.y(e.a,0,e.c)}else if(p.l(0,$.bb())||p.l(0,$.ba())){s=d.b
d.b=new V.q(s.a+f.a,s.b+f.b,s.c+f.c)
d.d=new V.y(e.a,e.b,0)}d.e=new V.U(d.e.a|p.a)
return!0},
i:function(a){return"Collider("+this.b.i(0)+", "+H.r(this.e)+")"}}
B.lN.prototype={
$1:function(a){E.p2(this.a.b,["webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen","oRequestFullscreen","requestFullscreen"])
return!0},
$S:4}
B.lO.prototype={
$1:function(a){var s=this.b
P.mC(C.d.dd(this.a.gjL(),2)+" fps, "+("chunks: "+s.d.length+", graveyard: "+s.c.length+", player: "+s.gcu().i(0)))},
$S:54}
B.et.prototype={}
B.jn.prototype={
gdf:function(){var s=this.x
if(s==null)s=this.x=new T.k2([])
return s},
C:function(a){return this.a.f.jP("./textures/"+a+".png",!0,!1,!1)},
H:function(a,b){var s,r=O.n_(),q=r.gcI()
q.sbo(0,new V.S(0.8,0.8,0.8))
q=r.gcP()
q.sbo(0,new V.S(0.4,0.4,0.4))
r.gcI().sbL(a)
r.gcP().sbL(a)
r.gcH(r).sbL(a)
s=this.e
if(s!=null)r.geL().m(0,s)
if(b){q=r.gdk()
q.sbo(0,new V.S(0.5,0.5,0.5))
q.cz(new A.au(!0,q.c.b,!1))
q.dZ(3)}q=this.d
q.push(r)
return q.length-1},
dw:function(a){var s=this.C(a),r=O.n_()
r.gek().sbL(s)
r.gcH(r).sbL(s)
return r},
W:function(a,b,c,d,e,f,g){var s=new B.et(b,c,d,e,f,g)
this.b.k(0,a,s)
return s},
bf:function(a,b){this.c.k(0,a,b)
return b}}
B.eZ.prototype={
i:function(a){var s=this
return"NeighborBlockInfo("+H.r(s.a)+", "+s.b.i(0)+", "+s.c.i(0)+", "+s.d+")"}}
B.f6.prototype={
hx:function(a){var s,r,q=this
a.r=!0
s=a.gam()
s.ch=s.Q=0.4
s=X.b0()
s.a7(32)
s.a4(a)
s.gaw().m(0,q.gig())
s=X.b0()
s.a7(9)
s.e7(9,!0)
s.a4(a)
s.gaw().m(0,q.ghR())
s=X.b0()
s.a7(69)
s.a7(81)
s.a4(a)
s.gaw().m(0,q.ghP())
s=a.gam()
r=s.b
s=r==null?s.b=D.D():r
s.m(0,q.gi0())
s=X.b0()
s.a7(79)
s.a4(a)
s.gaw().m(0,q.giE())
s=q.a
s.r.san(6)
r=s.x
r.san(60)
r.se6(0,-100)
s.y.san(6)
s.dy=q.gdN()
s.gn().m(0,q.gdT())
s.a4(a)
s=q.b
s.a4(a)
s.gn().m(0,new B.jy(q))},
di:function(){var s=C.d.aP(0.5),r=this.c.b1(s,s),q=r==null?null:r.ku(s,s)
if(q==null)q=0
s=this.a
s.sY(0,new V.q(0.5,q+10,0.5))
s.sS(V.cC())},
iF:function(a){this.di()},
ih:function(a){if(this.e)this.a.x.sS(30)},
hS:function(a){var s,r=this
t.U.a(a)
s=r.f
if(a.c.b.c){--s
r.f=s
if(s<0)r.f=19}else{++s
r.f=s
if(s>=20)r.f=0}r.e3()},
hQ:function(a){this.dE(t.U.a(a).c.a===69)},
i1:function(a){this.dE(t.Z.a(a).x.a===2)},
dE:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.r
if(f==null)return
s=f.a
if(a){r=h.f
if(r<0||r>=20)return H.b($.iz,r)
q=$.iz[r]
r=s==null
p=r?g:s.gL(s)
if(p==null)p=0
o=f.b
n=o.a
if((n&$.aE().a)!==0)if(p>=200&&p<=205)return
if(q>=200&&q<=205){if(r)m=g
else{m=s.geb()
m=m.gL(m)}if(m==null)m=0
if(!(m>=100&&m<=117))return}if(q===106){m=$.aD()
l=$.aC()
if((n&(m.a|l.a))!==0)q=108
else{m=$.bb()
l=$.ba()
if((n&(m.a|l.a))!==0)q=107}}else if(q===115){m=$.aD()
l=$.aC()
if((n&(m.a|l.a))!==0)q=117
else{m=$.bb()
l=$.ba()
if((n&(m.a|l.a))!==0)q=116}}s=r?g:s.eS(o.aN(0))
r=h.a
r=r.gY(r)
k=$.mF().c5(0,new V.y(r.a,r.b,r.c))
r=s==null?g:s.gcL().f0(k)
if(r!==!1)return}else q=0
if(s!=null){j=s.f
if(j!=null){r=h.d
if(a)r.f3(q)
else r.f3(s.gL(s))
s.sL(0,q)
if(q===0){i=s.ge5()
r=i.gL(i)
r=r>=200&&r<=205
if(r)i.sL(0,0)}j.r=!0
r=s.a
if(r<=0){n=j.gag(j)
if(n!=null)n.r=!0}n=s.c
if(n<=0){m=j.gaY(j)
if(m!=null)m.r=!0}if(r>=15){r=j.gaj(j)
if(r!=null)r.r=!0}if(n>=15){r=j.gaM()
if(r!=null)r.r=!0}}}},
iv:function(a){},
hw:function(a,b){var s,r,q=this,p=a.ap(b)
if(p.a8(p)<100){s=q.x
s.ju($.mF(),a,p)
s=s.e
r=$.aE()
s=s.a
r=r.a
r=(s&r)===r
q.e=r
if(r)q.a.x.sS(0)}s=q.x.b
return s},
ji:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=null,g=a==null
if(!g){s=a.a
s=(s==null?h:s.gL(s))===0}else s=!1
if(s)return!1
r=g?h:a.a
s=r!=null
if(s){g=g?h:a.d
g==null?0:g
g=r.gL(r)===0||r.gL(r)===100}else g=!1
if(g)a=h
this.r=a
if(a==null)this.db.b=!1
else if(s){g=$.aa()
s=$.ae()
q=B.m6(h,new Z.a2(g.a|s.a))
p=new V.q(r.d+r.a+0.5,r.b+0.5,r.e+r.c+0.5)
o=q.a2(0)
s=$.i9()
g=$.ie()
n=$.ig()
m=$.ia()
q.aa(o,p,s,g,n,m,$.ih(),!0,1.1)
l=$.ic()
k=$.i7()
j=$.i8()
i=$.id()
q.aa(o,p,l,k,j,i,$.ib(),!0,1.1)
q.aa(o,p,s,k,l,g,$.mE(),!0,1.1)
q.aa(o,p,n,i,j,m,$.mG(),!0,1.1)
q.aa(o,p,g,l,i,n,$.lQ(),!0,1.1)
q.aa(o,p,m,j,k,s,$.mD(),!0,1.1)
s=this.db
q.cZ(0,[s])
s.b=!0}return!0},
jh:function(a){var s,r,q=this.z.f,p=V.na(q.R(V.cv()),q.az(new V.y(0,0,-6))),o=p.a,n=p.d,m=p.b,l=p.e,k=p.c,j=p.f,i=V.na(new V.q(o+n,m+l,k+j),new V.y(n,l,j).aQ(0))
j=this.c
s=new B.eZ(j.al(o,m,k),$.ij(),p,0)
for(r=0;!this.ji(s);){s=j.fn(s==null?null:s.a,p,i,r);++r}},
e3:function(){var s=B.m6(this.c.a,null),r=this.f
if(r<0||r>=20)return H.b($.iz,r)
s.du(null,0,0,0,$.iz[r],!1,1)
s.cZ(0,this.dy)}}
B.jx.prototype={
$1:function(a){this.a.sfi(V.m2(-this.b.c.d))},
$S:0}
B.jy.prototype={
$1:function(a){var s=this.a
s.a.sfi(V.m2(-s.b.c.d))},
$S:0}
B.jB.prototype={
c_:function(a){var s,r=this
r.c=a
r.iQ()
s=r.c
if(s!=null)C.A.eB(s.d,0,12288,0)
r.j5()
r.h7()
r.h5()
r.je()
r.h1()
r.iN()
r.fW()
r.jd()
a.d_()},
av:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=this.c
if(j==null)return 0
s=(a+j.a)*c
r=(b+j.b)*c
q=new B.bl(s,r)
p=q.K(0,$.ol().v(0,s+r))
r=Math.floor(p.a)
s=Math.floor(p.b)
o=new B.bl(r,s)
n=o.K(0,$.mH().v(0,r+s))
m=p.as(0,o)
q=new B.iU(this.a.a,o,q.as(0,n),m)
q.au(0)
q.au(1)
s=m.a
r=m.b
l=s+r
if(l<=1){k=1-l
if(k>s||k>r)if(s>r)q.au(2)
else q.au(3)
else q.au(4)
q.au(5)}else{k=2-l
if(k<s||k<r)if(s>r)q.au(6)
else q.au(7)
else q.au(5)
q.au(4)}return q.e/47*0.5+0.5},
cC:function(a,b){var s=this.b,r=(a+3)*22+(b+3)
if(r<0||r>=484)return H.b(s,r)
return s[r]},
iQ:function(){var s,r,q,p,o,n=this
for(s=n.b,r=0,q=-3;q<19;++q)for(p=-3;p<19;++p){o=C.d.aP(Math.pow(0.6*n.av(q,p,0.001)+0.3*n.av(q,p,0.01)+0.1*n.av(q,p,0.1),2)*48)
if(o>=48)o=47
if(r<0||r>=484)return H.b(s,r)
s[r]=o;++r}},
j5:function(){var s,r
for(s=0;s<16;++s)for(r=0;r<16;++r)this.j6(s,r)},
j6:function(a,b){var s,r,q,p,o,n=this.c
if(n==null)return
s=this.cC(a,b)
for(r=s-2,q=s<8,p=0;p<=s;++p){if(q)o=r<=p?104:103
else if(s===p)o=102
else o=r<=p?101:103
n.V(a,p,b,o)}},
h7:function(){var s,r
for(s=0;s<16;++s)for(r=0;r<16;++r)this.h8(s,r)},
h8:function(a,b){var s,r,q=this.c
if(q==null)return
s=q.de(a,b,0)
if(s<8)for(r=8;r>s;--r)q.V(a,r,b,1)},
h5:function(){var s,r
for(s=-1;s<=16;++s)for(r=-1;r<=16;++r)this.h6(s,r)},
h6:function(a,b){var s,r,q,p,o,n,m=this.c
if(m==null)return
if(this.cC(a,b)<8)for(s=10;s>6;--s)for(r=-1;r<=1;++r)for(q=a+r,p=-1;p<=1;++p){o=b+p
n=m.al(q,s,o)
if(n===102||n===105)m.V(q,s,o,104)}},
je:function(){var s,r
for(s=-3;s<19;++s)for(r=-3;r<19;++r)if(this.av(s,r,1.5)<0.1)this.h2(s,r)},
h2:function(a,b){var s,r,q,p=this,o=p.c
if(o==null)return
s=a+o.a
if(s>=-30)if(s<30){s=b+o.b
s=s>=-30&&s<30}else s=!1
else s=!1
if(s)return
r=p.cC(a,b)
if(r<10)return
for(q=1;q<8;++q)o.V(a,r+q,b,106)
p.h3(a,b)
p.h4(a,r+8,b)},
h3:function(a,b){var s,r,q,p,o,n,m=this.c
if(m==null)return
for(s=-3;s<=3;++s)for(r=s*s,q=a+s,p=-3;p<=3;++p)if(r+p*p<=10)for(o=b+p,n=47;n>=0;--n)if(m.al(q,n,o)===102){m.V(q,n,o,105)
break}},
h4:function(a,b,c){var s,r,q,p,o,n,m,l,k=this.c
if(k==null)return
for(s=-3;s<=3;++s)for(r=s*s,q=a+s,p=-3;p<=3;++p)for(o=r+p*p,n=b+p,m=-3;m<=3;++m)if(o+m*m<=12){l=c+m
if(k.al(q,n,l)===0)k.V(q,n,l,114)}},
iN:function(){var s,r,q,p,o,n=this
for(s=0;s<16;++s)for(r=s-400,q=s+400,p=0;p<16;++p)if(n.av(s,p,12.5)<0.1)n.bg(s,p,204)
else if(n.av(q,p,12.5)<0.1)n.bg(s,p,203)
else{o=p+400
if(n.av(s,o,12.5)<0.1)n.bg(s,p,202)
else if(n.av(q,o,12.5)<0.15)n.bg(s,p,200)
else if(n.av(r,p,12.5)<0.1)n.bg(s,p,201)
else if(n.av(s,p-400,12.5)<0.08)n.bg(s,p,205)}},
bg:function(a,b,c){var s,r,q=this.c
if(q==null)return
s=q.de(a,b,0)
r=q.al(a,s,b)
if(r!==102&&r!==105)return
q.V(a,s+1,b,c)},
h1:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.c
if(g==null)return
s=g.a
if(s+16>=-30)if(s<=30){s=g.b
s=s+16<-30||s>30}else s=!0
else s=!0
if(s)return
r=new B.jD(g)
for(q=30;q>=0;q-=2){p=30-q+3
for(o=-p,s=q-1,n=o;n<=p;++n)for(m=o;m<=p;++m){r.$4(n,q,m,111)
r.$4(n,s,m,111)}for(l=o-1,k=o-2,j=p+1,i=p+2,h=-2;h<=2;++h){r.$4(l,q,h,109)
r.$4(l,s,h,109)
r.$4(k,s,h,109)
r.$4(j,q,h,109)
r.$4(j,s,h,109)
r.$4(i,s,h,109)
r.$4(h,q,l,109)
r.$4(h,s,l,109)
r.$4(h,s,k,109)
r.$4(h,q,j,109)
r.$4(h,s,j,109)
r.$4(h,s,i,109)}s=q+1
r.$4(l,s,2,109)
r.$4(k,q,2,109)
r.$4(l,s,-2,109)
r.$4(k,q,-2,109)
r.$4(j,s,2,109)
r.$4(i,q,2,109)
r.$4(j,s,-2,109)
r.$4(i,q,-2,109)
r.$4(2,s,l,109)
r.$4(2,q,k,109)
r.$4(-2,s,l,109)
r.$4(-2,q,k,109)
r.$4(2,s,j,109)
r.$4(2,q,i,109)
r.$4(-2,s,j,109)
r.$4(-2,q,i,109)}},
fW:function(){var s,r,q=this.c
if(q==null)return
s=q.a
if(s+16>=-36)if(s<=12){s=q.b
s=s+16<-28||s>-22}else s=!0
else s=!0
if(s)return
r=new B.jC(q,-12,40,-25)
r.$5(110,0,0,[0,1,2,3,4,4,3,2,4,4,3,2,1,0],[1,0,0,0,1,2,3,3,4,5,6,6,6,5])
r.$5(110,6,0,[0,1,2,3,4,4,4,3,2,1,0,0,0,0,0,0],[0,0,0,1,2,3,4,5,6,6,6,5,4,3,2,1])
r.$5(113,12,0,[0,0,0,0,0,1,2,1,2,3,3,3,3,3],[2,3,4,5,6,1,1,4,4,2,3,4,5,6])
r.$5(113,17,0,[0,0,0,0,0,0,1,2,1,2,3,3,3,3],[1,2,3,4,5,6,1,1,4,4,2,3,5,6])
r.$5(113,22,0,[0,2,1,1,1,1,1,1],[1,1,1,2,3,4,5,6])},
jd:function(){var s,r,q,p,o,n=this.c
if(n==null)return
s=n.a
if(s+16>=-3)if(s<=3){s=n.b
s=s+16<-3||s>3}else s=!0
else s=!0
if(s)return
r=new B.jE(n)
for(q=-3;q<=3;++q)for(p=0;p<=7;++p)for(s=2+p,o=-3;o<=3;++o)r.$4(q,s,o,0)
r.$4(0,2,0,113)
r.$4(0,3,0,112)
r.$4(0,4,0,112)
r.$4(0,5,0,112)
r.$4(0,6,0,112)}}
B.jD.prototype={
$4:function(a,b,c,d){var s=this.a
return s.V(a-s.a,b,c-s.b,d)},
$S:27}
B.jC.prototype={
$5:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=this
for(s=d.length-1,r=k.a,q=k.b+b,p=k.c+c,o=k.d;s>=0;--s){if(s>=d.length)return H.b(d,s)
n=d[s]
if(typeof n!=="number")return H.my(n)
m=r.a
if(s>=e.length)return H.b(e,s)
l=e[s]
if(typeof l!=="number")return H.my(l)
r.V(q+n-m,p-l,o-r.b,a)}},
$S:57}
B.jE.prototype={
$4:function(a,b,c,d){var s=this.a
return s.V(a-s.a,b,c-s.b,d)},
$S:27}
B.jP.prototype={
jr:function(a){var s,r,q
for(s=15;s>=0;--s)for(r=47;r>=-1;--r)for(q=15;q>=0;--q)this.du(a,s,r,q,a.c7(s,r,q),!1,1)},
cZ:function(a,b){var s,r,q,p
for(s=b.length-1;s>=0;--s){if(s>=b.length)return H.b(b,s)
r=b[s]
q=this.c
if(s>=q.length)return H.b(q,s)
p=q[s]
if(p!=null){r.sdj(p)
r.b=p.f.length!==0}else{r.sdj(null)
r.b=!1}}this.c=[]},
a2:function(a){var s,r=this.c
if(a<0||a>=r.length)return H.b(r,a)
s=r[a]
if(s==null){r=this.b
s=new F.jF(r,r.gei(r),r.gbz(r),[],[],[],[],[])
r=this.c
if(a>=r.length)return H.b(r,a)
r[a]=s}return s},
du:function(a,b,c,d,e,f,g){var s,r=this,q=new V.q(b,c,d)
if(a!=null){b+=a.a
d+=a.b}s=new V.q(b+0.5,c+0.5,d+0.5)
if(e===0)return
else if(e===1)r.dv(a,s,q,e,!1,g)
else if(e>=200&&e<=205)if(e===201)r.fZ(s)
else if(e===205)r.h_(s)
else r.h0(s,e)
else if(e>=100&&e<=117)r.dv(a,s,q,e,!1,g)},
bk:function(a,b,c,d){var s=null,r=$.aa(),q=$.ae()
return F.cD(s,s,s,a,b,new V.I(c,d),s,new Z.a2(r.a|q.a|$.as().a),0)},
aa:function(a,b,c,d,e,f,g,h,i){var s=this,r=a.bG([s.bk(b.K(0,c.v(0,i)),g,0,0),s.bk(b.K(0,d.v(0,i)),g,0,1),s.bk(b.K(0,e.v(0,i)),g,1,1),s.bk(b.K(0,f.v(0,i)),g,1,0)]),q=r+1,p=r+2,o=r+3
a.bF([r,q,p,o])
if(h)a.bF([p,q,r,o])},
dv:function(a,b,c,d,e,f){var s=this,r=s.a,q=r==null?null:r.b.h(0,d)
if(q==null)return
if(s.be(a,d,c,0,1,0))s.aa(s.a2(q.a),b,$.i9(),$.ie(),$.ig(),$.ia(),$.ih(),!1,f)
if(s.be(a,d,c,0,-1,0))s.aa(s.a2(q.b),b,$.ic(),$.i7(),$.i8(),$.id(),$.ib(),!1,f)
if(s.be(a,d,c,-1,0,0))s.aa(s.a2(q.c),b,$.i9(),$.i7(),$.ic(),$.ie(),$.mE(),!1,f)
if(s.be(a,d,c,1,0,0))s.aa(s.a2(q.d),b,$.ig(),$.id(),$.i8(),$.ia(),$.mG(),!1,f)
if(s.be(a,d,c,0,0,1))s.aa(s.a2(q.e),b,$.ie(),$.ic(),$.id(),$.ig(),$.lQ(),!1,f)
if(s.be(a,d,c,0,0,-1))s.aa(s.a2(q.f),b,$.ia(),$.i8(),$.i7(),$.i9(),$.mD(),!1,f)},
be:function(a,b,c,d,e,f){if(a==null)return!0
e+=C.d.aP(c.b)
if(e<0)return!1
if(e>=48)return!0
return B.oQ(b,a.c7(d+C.d.aP(c.a),e,f+C.d.aP(c.c)))},
dB:function(a,b,c,d){var s=Math.cos(c)*0.5,r=Math.sin(c)*0.5,q=-r,p=-s
this.aa(a,b,new V.q(s,0,q),new V.q(s,-0.5,q),new V.q(p,-0.5,r),new V.q(p,0,r),new V.y(r,0,s),!0,1)},
h0:function(a,b){var s=this,r=s.a,q=r==null?null:r.c.h(0,b)
if(q==null)return
if(0>=q.length)return H.b(q,0)
s.dB(s.a2(q[0]),a,0.39269908169872414,!0)
if(0>=q.length)return H.b(q,0)
s.dB(s.a2(q[0]),a,1.9634954084936207,!0)},
bQ:function(a,b,c){var s=V.m2(c)
this.aa(a,b,s.R(new V.q(0.4,-0.1,-0.4)),s.R(new V.q(0,-0.5,0)),s.R(new V.q(0.4,-0.1,0.4)),s.R(new V.q(0.8,0,0)),$.ih(),!0,1)},
fZ:function(a){var s=this,r=s.a,q=r==null?null:r.c.h(0,201)
if(q==null)return
if(0>=q.length)return H.b(q,0)
s.bQ(s.a2(q[0]),a,0.3141592653589793)
if(0>=q.length)return H.b(q,0)
s.bQ(s.a2(q[0]),a,1.7278759594743864)
if(0>=q.length)return H.b(q,0)
s.bQ(s.a2(q[0]),a,3.6128315516282616)
if(0>=q.length)return H.b(q,0)
s.bQ(s.a2(q[0]),a,5.026548245743669)},
h_:function(b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.a,b6=b5==null?b4:b5.c.h(0,205)
if(b6==null)return
if(0>=b6.length)return H.b(b6,0)
s=b3.a2(b6[0])
if(1>=b6.length)return H.b(b6,1)
r=b3.a2(b6[1])
if(2>=b6.length)return H.b(b6,2)
q=b3.a2(b6[2])
p=[]
o=[]
for(b5=b7.a,n=b7.b,m=b7.c,l=0;l<=2;l+=0.25){k=3.141592653589793*l
j=Math.cos(k)
i=Math.sin(k)
h=new V.aL(j,0,-i,0,1,0,i,0,j)
k=h.R(new V.q(0.07,-0.1,0))
g=$.lQ()
f=h.az(g)
e=Math.abs(l-1)
d=$.aa()
c=$.ae()
c=d.a|c.a|$.as().a
p.push(F.cD(b4,b4,b4,new V.q(b5+k.a,n+k.b,m+k.c),f,new V.I(e,0),b4,new Z.a2(c),0))
f=h.R(new V.q(0.1,-0.5,0))
p.push(F.cD(b4,b4,b4,new V.q(b5+f.a,n+f.b,m+f.c),h.az(g),new V.I(e,1),b4,new Z.a2(c),0))
b=h.R(new V.q(0.1,-0.5,0))
a=h.R(new V.q(0.1,0,0))
o.push(F.cD(b4,b4,b4,new V.q(b5+b.a,n+b.b,m+b.c),$.ib(),new V.I(a.a+0.5,a.c+0.5),b4,new Z.a2(c),0))}a0=q.bG(p)
a1=r.bG(o)
a2=p.length
a3=J.eE(a2)
for(a4=0;a4<a2;++a4)a3[a4]=a0+a4
q.jo(a3)
a2=o.length
a3=J.eE(a2)
for(a4=0;a4<a2;++a4)a3[a4]=a1+a4
r.bF(a3)
a5=[]
a6=[]
a5.push(b3.bk(b7.K(0,new V.q(0,0.05,0)),$.ih(),0.5,0.5))
a6.push(b3.bk(b7.K(0,new V.q(0,-0.1,0)),$.ib(),0.5,0.5))
for(l=0;l<=1;l+=0.1){k=-6.283185307179586*l
j=Math.cos(k)
i=Math.sin(k)
a7=new V.aL(j,0,-i,0,1,0,i,0,j)
b=a7.R(new V.q(0.4,-0.15,0))
a=a7.R(new V.q(0.5,0,0))
k=$.aa()
g=$.ae()
g=k.a|g.a|$.as().a
a5.push(F.cD(b4,b4,b4,new V.q(b5+b.a,n+b.b,m+b.c),b4,new V.I(a.a+0.5,a.c+0.5),b4,new Z.a2(g),0))
k=6.283185307179586*l
j=Math.cos(k)
i=Math.sin(k)
a8=new V.aL(j,0,-i,0,1,0,i,0,j)
a9=a8.R(new V.q(0.4,-0.15,0))
b0=a8.R(new V.q(0.5,0,0))
a6.push(F.cD(b4,b4,b4,new V.q(b5+a9.a,n+a9.b,m+a9.c),b4,new V.I(b0.a+0.5,b0.c+0.5),b4,new Z.a2(g),0))}b1=s.bG(a5)
b2=r.bG(a6)
a2=a5.length
a3=J.eE(a2)
for(a4=0;a4<a2;++a4)a3[a4]=b1+a4
s.bF(a3)
a2=a6.length
a3=J.eE(a2)
for(a4=0;a4<a2;++a4)a3[a4]=b2+a4
r.bF(a3)}}
B.jT.prototype={
bd:function(a,b,c){var s,r=a.jQ(b),q=[],p=new F.eT(r,q,10)
q.push(r)
for(r=c.length,q=this.a,s=0;s<c.length;c.length===r||(0,H.o)(c),++s)q.k(0,c[s],p)},
f3:function(a){var s=this.a.h(0,a)
if(s!=null)s.ka(0,1)}}
B.jY.prototype={
c_:function(a){var s=this
s.a=a
s.hp()
if(s.aD(-2,1))s.j4()
if(s.aD(-1,1)){s.a6(5,9,3,7,2,11)
s.dC(6,10,4,5,1,9,1)}if(s.aD(0,1)){s.a6(2,10,6,12,10,1)
s.a6(6,10,2,1,10,12)
s.a6(2,10,10,12,10,1)
s.a6(10,10,2,1,10,12)}if(s.aD(1,1))s.iO()
if(s.aD(1,0))s.iP()
if(s.aD(1,-1))s.iM()
if(s.aD(-2,0))s.jf()
if(s.aD(-2,-1))s.hI()
if(s.aD(-2,-2))s.iR()
a.d_()},
hp:function(){var s,r,q,p,o,n=this.a
if(n==null)return
for(s=0;s<16;++s)for(r=s===1,q=s!==0,p=0;p<16;++p){for(o=0;o<8;++o)n.V(s,o,p,103)
for(o=8;o<9;++o)n.V(s,o,p,101)
if(!q||p===0)n.V(s,9,p,113)
else if(r&&p===1)n.V(s,9,p,110)
else n.V(s,9,p,102)}},
j4:function(){var s,r,q,p,o,n,m,l=this.a
if(l==null)return
for(s=-6;s<=6;++s)for(r=s*s,q=8+s,p=-6;p<=6;++p)for(o=r+p*p,n=17+p,m=-6;m<=6;++m)if(o+m*m<=37)l.V(q,n,8+m,104)},
iO:function(){var s=new B.jZ(this)
s.$3(0,0,0)
s.$3(0,1,1)
s.$3(0,2,2)
s.$3(1,2,3)
s.$3(1,1,4)
s.$3(1,0,5)
s.$3(2,0,0)
s.$3(2,0,2)
s.$3(2,1,1)
s.$3(2,1,3)
s.$3(2,2,2)
s.$3(2,2,4)},
iP:function(){var s=new B.k_(this)
s.$3(0,0,1)
s.$3(0,1,2)
s.$3(0,2,3)
s.$3(0,3,4)
s.$3(1,0,2)
s.$3(1,1,3)
s.$3(1,2,4)
s.$3(1,3,5)
s.$3(2,0,5)
s.$3(2,1,4)
s.$3(2,2,3)
s.$3(2,3,2)
s.$3(3,0,4)
s.$3(3,1,3)
s.$3(3,2,2)
s.$3(3,3,1)},
iM:function(){var s,r,q
for(s=0;s<20;s+=2)for(r=2+s,q=0;q<20;q+=2)this.a6(r,10,2+q,1,8,1)},
iR:function(){var s,r,q
for(s=0;s<6;++s){r=2+s
q=16-r*2+1
this.a6(r,10+s,r,q,1,q)}},
jf:function(){var s,r,q
for(s=0;s<4;++s){r=2+s*3
q=s+2
this.a6(3,10,r,12,q,1)
this.a6(3,10+s+1,r+1,12,1,2)
this.a6(3,10,r+3,12,q,1)}},
hI:function(){var s,r,q
for(s=0;s<6;++s){r=2+s*2
q=s+2
this.a6(3,10,r,12,q,1)
this.a6(3,10+s+1,r+1,12,1,1)
this.a6(3,10,r+2,12,q,1)}},
aD:function(a,b){var s=this.a,r=s==null,q=r?null:s.a
if(q===a*16){s=r?null:s.b
s=s===b*16}else s=!1
return s},
dC:function(a,b,c,d,e,f,g){var s,r,q,p,o,n=this.a
if(n==null)return
for(s=0;s<d;++s)for(r=a+s,q=0;q<e;++q)for(p=b+q,o=0;o<f;++o)n.V(r,p,c+o,g)},
a6:function(a,b,c,d,e,f){return this.dC(a,b,c,d,e,f,109)}}
B.jZ.prototype={
$3:function(a,b,c){return this.a.a6(2+4*a,10+c,2+4*b,4,1,4)},
$S:28}
B.k_.prototype={
$3:function(a,b,c){return this.a.a6(2+4*a,10,2+4*b,1,c,1)},
$S:28}
B.h_.prototype={
fI:function(a,b){var s,r,q,p=this,o=p.a.d,n=o.length,m=p.e,l=0
for(;l<o.length;o.length===n||(0,H.o)(o),++l)m.push(E.cf(null,null,null,o[l]))
for(o=p.c,s=0;s<140;++s)o.push(B.mT(p))
for(o=p.b,r=-32;r<32;r+=16)for(q=-32;q<32;q+=16)o.c_(p.f7(r,q))},
b1:function(a,b){var s,r,q,p
for(s=this.d,r=s.length,q=0;q<r;++q){p=s[q]
if(p.a===a&&p.b===b)return p}return null},
al:function(a,b,c){var s,r,q,p=C.d.bs(a),o=C.d.bs(b),n=C.d.bs(c),m=p<0?p-16+1:p,l=n<0?n-16+1:n
m=C.c.a3(m,16)*16
l=C.c.a3(l,16)*16
s=this.b1(m,l)
if(s==null)return null
r=p-m
q=n-l
if(r<0)r+=16
return new B.aj(r,o,q<0?q+16:q,m,l,s)},
gcu:function(){var s=this.f
s=s==null?null:s.z.f.R(V.cv())
return s==null?V.cv():s},
kA:function(a){this.jj(this.gcu())},
fl:function(a){var s=this.gcu()
this.ht(s)
this.iS(s)},
jq:function(a){var s=this.a.gdf(),r=s.b,q=s.e,p=q.length
r=(r+1)%p
if(r<p){s.b=r
s.c=q[r]
s=s.f
if(s!=null)s.el()}return null},
f7:function(a,b){var s,r=this.c,q=r.length
if(q!==0){if(0>=q)return H.b(r,-1)
r=r.pop()
s=r}else s=null
if(s==null)s=B.mT(this)
s.a=a
s.b=b
s.x=s.f=!0
s.saS(!1)
this.d.push(s)
return s},
jE:function(a){var s=C.b.U(this.d,a)
if(s){a.f=!1
a.saS(!1)
a.x=!0
a.r=!1
this.c.push(a)
return!0}return!1},
jj:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.al(a.a,a.b,a.c)
if(b==null)return
s=c.r
r=b.f
if(s!=r){c.r=r
s=b.d
q=s-128
p=s+128
r=b.e
o=r-128
n=r+128
for(m=c.d,l=m.length-1;l>=0;--l){if(l>=m.length)return H.b(m,l)
k=m[l]
j=k.a
if(q<=j)if(p>j){j=k.b
j=o>j||n<=j}else j=!0
else j=!0
if(j)c.jE(k)}i=s-64
h=s+64
g=r-64
f=r+64
for(e=i;e<h;e+=16)for(d=g;d<f;d+=16)if(c.b1(e,d)==null)c.f7(e,d)}},
ht:function(a){var s,r,q,p,o,n,m,l,k,j=a.a-8,i=a.c-8
for(s=this.d,r=s.length,q=null,p=1e-9,o=0;o<r;++o){n=s[o]
if(n.x){m=n.a-j
l=n.b-i
k=m*m+l*l
if(q==null||p>k){p=k
q=n}}}if(q!=null)this.b.c_(q)},
iS:function(a){var s,r,q,p,o,n,m,l,k,j=a.a-8,i=a.c-8
for(s=this.d,r=s.length,q=null,p=1e-9,o=0;o<r;++o){n=s[o]
if(n.f&&!n.x){m=n.a-j
l=n.b-i
k=m*m+l*l
if(q==null||p>k){p=k
q=n}}}if(q!=null){q.f=!1
q.r=!0}},
fn:function(a,b,c,d){var s,r
if(a==null)return null
s=N.rx(c,a.gcL())
if(!s.a)return null
else{r=s.e
a=a.eS(r)}if(a==null)return null
return new B.eZ(a,r,b,d)},
ak:function(a,b){var s,r,q,p,o,n,m,l=this.f,k=l==null?null:l.z.f
if(k==null)k=V.am()
s=k.R(V.cv())
r=k.R(new V.q(0,0,-16))
q=new V.I(s.a,s.c)
p=new V.I(r.a,r.c)
for(l=this.d,o=l.length,n=0;n<l.length;l.length===o||(0,H.o)(l),++n){m=l[n]
m.kw()
m.kx(q,p)}}};(function aliases(){var s=J.a.prototype
s.fw=s.i
s=J.bf.prototype
s.fz=s.i
s=P.C.prototype
s.fC=s.i
s=P.b_.prototype
s.fA=s.h
s.fB=s.k
s=P.cG.prototype
s.fD=s.k
s=K.eB.prototype
s.fv=s.bt
s.ca=s.i
s=Y.en.prototype
s.fu=s.i
s=N.eo.prototype
s.ft=s.i
s=O.di.prototype
s.dl=s.aV
s=O.dj.prototype
s.dm=s.aV})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_0i,k=hunkHelpers._instance_1i
s(J,"qx","p9",59)
r(P,"ra","pI",11)
r(P,"rb","pJ",11)
r(P,"rc","pK",11)
q(P,"o3","r5",1)
r(W,"uh","iQ",61)
r(P,"rq","ln",44)
r(P,"rp","mp",41)
var j
p(j=F.f7.prototype,"gia","ib",3)
p(j,"gi8","i9",3)
o(j=E.ce.prototype,"gc2",0,0,function(){return[null]},["$1","$0"],["eY","k_"],2,0)
o(j,"geZ",0,0,function(){return[null]},["$1","$0"],["f_","k0"],2,0)
o(j,"geW",0,0,function(){return[null]},["$1","$0"],["eX","jZ"],2,0)
o(j,"geU",0,0,function(){return[null]},["$1","$0"],["eV","jW"],2,0)
n(j,"gjU","jV",8)
n(j,"gjX","jY",8)
o(j=E.fy.prototype,"gdn",0,0,function(){return[null]},["$1","$0"],["dr","dq"],2,0)
m(j,"gkg","fc",1)
p(j=X.d7.prototype,"gfL","fM",36)
n(j,"gfJ","fK",21)
n(j,"gfN","fO",21)
p(j,"gcb","cc",0)
p(j,"gcr","cs",0)
p(j=X.fV.prototype,"gic","ie",3)
p(j,"ghT","hU",3)
p(j,"gi2","i3",4)
p(j,"gcr","cs",22)
p(j,"gcb","cc",22)
p(j,"gim","io",4)
p(j,"gir","is",4)
p(j,"gi6","i7",4)
p(j,"gip","iq",4)
p(j,"gi4","i5",4)
p(j,"git","iu",40)
p(j,"giw","ix",3)
p(j,"giK","iL",10)
p(j,"giG","iH",10)
p(j,"giI","iJ",10)
o(D.cX.prototype,"ghV",0,0,function(){return[null]},["$1","$0"],["aU","hW"],2,0)
o(j=D.db.prototype,"gdR",0,0,function(){return[null]},["$1","$0"],["dS","ik"],2,0)
p(j,"giy","iz",42)
n(j,"ghJ","hK",23)
n(j,"giC","iD",23)
l(V.ac.prototype,"gj","d2",15)
l(V.y.prototype,"gj","d2",15)
o(j=U.ck.prototype,"gaJ",0,0,function(){return[null]},["$1","$0"],["w","ae"],2,0)
n(j,"gfP","fQ",24)
n(j,"giA","iB",24)
o(U.cm.prototype,"gaJ",0,0,function(){return[null]},["$1","$0"],["w","ae"],2,0)
o(j=U.dE.prototype,"gaJ",0,0,function(){return[null]},["$1","$0"],["w","ae"],2,0)
p(j,"ghC","hD",0)
p(j,"ghE","hF",0)
p(j,"ghG","hH",0)
p(j,"ghy","hz",0)
p(j,"ghA","hB",0)
p(j,"gjb","jc",0)
p(j,"gj9","ja",0)
p(j,"gj7","j8",0)
o(j=U.dF.prototype,"gaJ",0,0,function(){return[null]},["$1","$0"],["w","ae"],2,0)
p(j,"gii","ij",0)
o(j=M.ex.prototype,"gba",0,0,function(){return[null]},["$1","$0"],["bb","fR"],2,0)
n(j,"ghX","hY",8)
n(j,"ghZ","i_",8)
o(j=O.eN.prototype,"gbB",0,0,function(){return[null]},["$1","$0"],["a5","cd"],2,0)
o(j,"gdV",0,0,function(){return[null]},["$1","$0"],["dW","iX"],2,0)
n(j,"ghL","hM",26)
n(j,"ghN","hO",26)
o(O.di.prototype,"gbB",0,0,function(){return[null]},["$1","$0"],["a5","cd"],2,0)
o(X.f4.prototype,"gdt",0,0,function(){return[null]},["$1","$0"],["bc","fU"],2,0)
q(B,"rt","rz",1)
p(j=B.f6.prototype,"giE","iF",0)
p(j,"gig","ih",0)
p(j,"ghR","hS",0)
p(j,"ghP","hQ",0)
p(j,"gi0","i1",0)
p(j,"gdT","iv",0)
n(j,"gdN","hw",55)
p(j,"gjg","jh",0)
p(j=B.h_.prototype,"gkz","kA",6)
p(j,"gfk","fl",6)
p(j,"gjp","jq",6)
k(j,"gkv","ak",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.C,null)
q(P.C,[H.lZ,J.a,J.af,P.E,P.dM,P.i,H.bP,P.eD,H.d1,H.fS,H.cy,P.dg,H.cU,H.j2,H.bE,H.ke,H.jv,H.dV,H.l5,P.a0,H.j5,H.eL,H.eH,H.ax,H.hi,P.dZ,P.cF,P.cH,P.ek,P.h4,P.hj,P.aT,P.h0,P.fr,P.fs,P.lk,P.e5,P.l4,P.dL,P.p,P.hU,P.fh,P.ep,P.lj,P.li,P.P,P.aH,P.f3,P.dx,P.hf,P.iZ,P.W,P.hK,P.X,P.c0,P.kp,P.hB,W.iI,W.lV,W.md,W.J,W.d2,P.l9,P.e0,P.b_,P.ju,P.l1,P.hz,L.jw,B.iU,B.bl,K.im,K.eB,K.Z,L.fn,L.fz,L.fA,L.ka,F.it,F.eT,F.f7,O.cd,O.dk,Y.cz,Y.en,E.iy,E.ce,E.ca,E.cu,E.hc,E.jH,D.T,E.fy,Z.fX,Z.kK,Z.cc,Z.bL,Z.a2,D.iB,D.ch,X.cR,X.aK,X.j4,X.j7,X.b2,X.js,X.kb,X.fV,N.eo,D.cX,V.S,V.bF,V.iT,V.U,V.aL,V.cq,V.I,V.q,V.bW,V.fb,V.fc,V.dt,V.ac,V.y,U.cm,U.dE,U.dF,M.ex,A.iq,A.ir,A.au,A.bB,A.bI,A.bX,A.bZ,A.jb,A.fI,A.fJ,A.fM,A.fP,A.kg,A.km,F.d0,F.jF,F.jM,F.dw,F.fi,F.jN,F.kF,F.aq,F.cE,O.jX,O.di,O.jc,T.k4,X.jW,X.f4,V.jQ,B.aj,B.iC,B.iD,B.iE,B.et,B.jn,B.eZ,B.f6,B.jB,B.jP,B.jT,B.jY,B.h_])
q(J.a,[J.eF,J.cn,J.bf,J.aJ,J.co,J.bM,H.dl,H.V,W.d,W.il,W.bC,W.cS,W.aW,W.F,W.h6,W.av,W.iL,W.iM,W.h8,W.cZ,W.ha,W.iN,W.j,W.hg,W.aI,W.j1,W.hl,W.bK,W.j6,W.jp,W.hp,W.hq,W.aM,W.hr,W.ht,W.aN,W.hx,W.hA,W.aO,W.hC,W.aP,W.hH,W.ao,W.hM,W.k7,W.aQ,W.hO,W.kc,W.ku,W.hV,W.hX,W.hZ,W.i0,W.i2,P.d8,P.bh,P.hn,P.bk,P.hv,P.jz,P.hI,P.bp,P.hQ,P.is,P.h1,P.cx,P.hF])
q(J.bf,[J.f5,J.cA,J.aZ])
r(J.eI,J.aJ)
q(J.co,[J.d5,J.eG])
q(P.E,[H.d9,P.fE,H.eJ,H.fR,H.ff,H.hd,P.ej,P.f0,P.aF,P.f_,P.fT,P.fQ,P.dz,P.er,P.eu])
r(P.dc,P.dM)
q(P.dc,[H.cB,W.h3,W.h2,P.ez])
r(H.O,H.cB)
q(P.i,[H.k,H.bQ,H.dG,P.d4])
q(H.k,[H.dd,H.bi])
r(H.d_,H.bQ)
q(P.eD,[H.dh,H.fZ])
r(H.bR,H.dd)
r(P.e3,P.dg)
r(P.bq,P.e3)
r(H.cV,P.bq)
r(H.bH,H.cU)
q(H.bE,[H.jA,H.fv,H.j3,H.lG,H.lH,H.lI,P.kM,P.kL,P.kN,P.kO,P.le,P.ld,P.kQ,P.kX,P.kT,P.kU,P.kV,P.kS,P.kW,P.kR,P.l_,P.l0,P.kZ,P.kY,P.lx,P.l7,P.l8,P.j8,P.ky,P.kx,P.jt,P.iO,P.iP,P.kt,P.kq,P.kr,P.ks,P.lg,P.lf,P.lq,P.lr,P.ls,W.jq,W.jr,W.jL,W.jU,W.kP,P.lb,P.lc,P.lm,P.lC,P.iX,P.iY,P.lo,P.lp,P.ly,P.lz,P.lA,P.lL,P.lM,P.iv,F.iu,E.jI,E.jJ,E.jK,E.k6,D.iV,D.iW,F.jG,F.jO,F.kJ,F.kI,F.kG,F.kH,O.jf,O.jg,O.jh,O.ji,O.jj,O.jk,O.jl,O.jm,T.k5,V.jS,V.jR,B.lN,B.lO,B.jx,B.jy,B.jD,B.jC,B.jE,B.jZ,B.k_])
r(H.dq,P.fE)
q(H.fv,[H.fp,H.c9])
r(P.df,P.a0)
r(H.Q,P.df)
r(H.ct,H.V)
q(H.ct,[H.dO,H.dQ])
r(H.dP,H.dO)
r(H.bT,H.dP)
r(H.dR,H.dQ)
r(H.dm,H.dR)
q(H.dm,[H.eU,H.eV,H.eW,H.eX,H.eY,H.dn,H.bU])
r(H.e_,H.hd)
r(P.dW,P.d4)
r(P.dH,P.h4)
r(P.l6,P.lk)
r(P.dS,P.e5)
r(P.dK,P.dS)
q(P.ep,[P.iw,P.iR])
r(P.es,P.fs)
q(P.es,[P.ix,P.kz,P.kw])
r(P.kv,P.iR)
q(P.aF,[P.cw,P.eC])
r(P.h7,P.c0)
q(W.d,[W.w,W.ey,W.cr,W.ay,W.dT,W.az,W.ag,W.dX,W.fW,W.bs,W.aS,P.em,P.bd])
q(W.w,[W.G,W.aG])
q(W.G,[W.n,P.m])
q(W.n,[W.eh,W.ei,W.bS,W.bD,W.eA,W.cl,W.fg,W.bo])
r(W.c8,W.bS)
r(W.iH,W.aW)
r(W.cW,W.h6)
q(W.av,[W.iJ,W.iK])
r(W.h9,W.h8)
r(W.cY,W.h9)
r(W.hb,W.ha)
r(W.ew,W.hb)
r(W.ak,W.bC)
r(W.hh,W.hg)
r(W.ci,W.hh)
r(W.hm,W.hl)
r(W.bJ,W.hm)
r(W.b6,W.j)
q(W.b6,[W.bO,W.an,W.c_])
r(W.eQ,W.hp)
r(W.eR,W.hq)
r(W.hs,W.hr)
r(W.eS,W.hs)
r(W.hu,W.ht)
r(W.dp,W.hu)
r(W.hy,W.hx)
r(W.f8,W.hy)
r(W.fe,W.hA)
r(W.dU,W.dT)
r(W.fk,W.dU)
r(W.hD,W.hC)
r(W.fl,W.hD)
r(W.fq,W.hH)
r(W.hN,W.hM)
r(W.fw,W.hN)
r(W.dY,W.dX)
r(W.fx,W.dY)
r(W.hP,W.hO)
r(W.fB,W.hP)
r(W.br,W.an)
r(W.hW,W.hV)
r(W.h5,W.hW)
r(W.dI,W.cZ)
r(W.hY,W.hX)
r(W.hk,W.hY)
r(W.i_,W.hZ)
r(W.dN,W.i_)
r(W.i1,W.i0)
r(W.hE,W.i1)
r(W.i3,W.i2)
r(W.hL,W.i3)
r(W.he,P.fr)
r(P.la,P.l9)
q(P.b_,[P.d6,P.cG])
r(P.bN,P.cG)
r(P.ab,P.hz)
r(P.ho,P.hn)
r(P.eK,P.ho)
r(P.hw,P.hv)
r(P.f1,P.hw)
r(P.hJ,P.hI)
r(P.ft,P.hJ)
r(P.hR,P.hQ)
r(P.fC,P.hR)
r(P.el,P.h1)
r(P.f2,P.bd)
r(P.hG,P.hF)
r(P.fm,P.hG)
q(K.eB,[K.bj,L.kd])
r(Y.fD,Y.en)
q(D.T,[E.fo,D.aX,D.aY,D.B,X.bg,X.f9])
q(E.iy,[Z.cb,A.dv,T.k0])
q(O.cd,[X.d7,D.db,U.ck])
q(X.f9,[X.de,X.cs,X.dB])
r(N.Y,N.eo)
q(D.iB,[U.iG,U.a4])
q(U.a4,[U.cT,U.du])
r(A.eM,A.dv)
q(A.kg,[A.dD,A.kj,A.kk,A.kl,A.kh,A.fF,A.ki,A.fG,A.fH,A.kn,A.fK,A.fL,A.fN,A.fO])
r(O.eN,O.jX)
q(O.di,[O.j9,O.ja,O.dj])
q(O.dj,[O.jd,O.je])
r(T.k1,T.k0)
q(T.k1,[T.k2,T.k3])
r(X.j_,X.jW)
s(H.cB,H.fS)
s(H.dO,P.p)
s(H.dP,H.d1)
s(H.dQ,P.p)
s(H.dR,H.d1)
s(P.dM,P.p)
s(P.e3,P.hU)
s(P.e5,P.fh)
s(W.h6,W.iI)
s(W.h8,P.p)
s(W.h9,W.J)
s(W.ha,P.p)
s(W.hb,W.J)
s(W.hg,P.p)
s(W.hh,W.J)
s(W.hl,P.p)
s(W.hm,W.J)
s(W.hp,P.a0)
s(W.hq,P.a0)
s(W.hr,P.p)
s(W.hs,W.J)
s(W.ht,P.p)
s(W.hu,W.J)
s(W.hx,P.p)
s(W.hy,W.J)
s(W.hA,P.a0)
s(W.dT,P.p)
s(W.dU,W.J)
s(W.hC,P.p)
s(W.hD,W.J)
s(W.hH,P.a0)
s(W.hM,P.p)
s(W.hN,W.J)
s(W.dX,P.p)
s(W.dY,W.J)
s(W.hO,P.p)
s(W.hP,W.J)
s(W.hV,P.p)
s(W.hW,W.J)
s(W.hX,P.p)
s(W.hY,W.J)
s(W.hZ,P.p)
s(W.i_,W.J)
s(W.i0,P.p)
s(W.i1,W.J)
s(W.i2,P.p)
s(W.i3,W.J)
s(P.cG,P.p)
s(P.hn,P.p)
s(P.ho,W.J)
s(P.hv,P.p)
s(P.hw,W.J)
s(P.hI,P.p)
s(P.hJ,W.J)
s(P.hQ,P.p)
s(P.hR,W.J)
s(P.h1,P.a0)
s(P.hF,P.p)
s(P.hG,W.J)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",ai:"double",a3:"num",u:"String",aA:"bool",W:"Null",l:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~(T)","~()","~([T?])","~(j)","~(an)","~(u,@)","~(@)","~(e,e)","~(e,i<ce>)","~(d0)","~(c_)","~(~())","W()","@(@)","u(e)","ai()","~(dC,u,e)","W(@)","~(@,@)","@()","~(~(T))","~(e,i<aK>)","~(bO)","~(e,i<da>)","~(e,i<a4?>)","cb(e)","~(e,i<cq>)","aA(e,e,e,e)","~(e,e,e)","d6(@)","b_(@)","~(u,u)","~(u,u?)","~(dA,@)","~(a3)","H<u,u>(H<u,u>,u)","aA(i<aK>)","@(u)","W(C,dy)","~(u,e)","~(br)","C?(@)","aA(i<da>)","~(u[@])","C?(C?)","W(@,@)","W(~())","aT<@>(@)","aA(w)","@(@,u)","e(bB,bB)","e(bI,bI)","e(bX,bX)","e(bZ,bZ)","~(k8)","q(q,q)","G(w)","W(e,e,e,l<e>,l<e>)","e(e,e)","e(@,@)","bN<@>(@)","u(d)","dC(@,@)","~(C?,C?)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.q1(v.typeUniverse,JSON.parse('{"f5":"bf","cA":"bf","aZ":"bf","rG":"j","tb":"j","rI":"bd","rH":"d","tu":"d","tx":"d","rF":"m","tc":"m","rJ":"n","tq":"w","t6":"w","tX":"ag","tW":"bS","rN":"b6","t5":"aS","rK":"aG","ty":"aG","tw":"an","tr":"bJ","t2":"F","t3":"ao","tt":"bT","ts":"V","eF":{"aA":[]},"cn":{"W":[]},"bf":{"mW":[]},"aJ":{"l":["1"],"k":["1"],"i":["1"],"x":["1"]},"eI":{"l":["1"],"k":["1"],"i":["1"],"x":["1"]},"co":{"ai":[],"a3":[]},"d5":{"ai":[],"e":[],"a3":[]},"eG":{"ai":[],"a3":[]},"bM":{"u":[],"x":["@"]},"d9":{"E":[]},"O":{"l":["e"],"k":["e"],"i":["e"],"p.E":"e"},"k":{"i":["1"]},"dd":{"k":["1"],"i":["1"]},"bQ":{"i":["2"]},"d_":{"k":["2"],"i":["2"]},"bR":{"k":["2"],"i":["2"]},"dG":{"i":["1"]},"cB":{"l":["1"],"k":["1"],"i":["1"]},"cy":{"dA":[]},"cV":{"bq":["1","2"],"H":["1","2"]},"cU":{"H":["1","2"]},"bH":{"H":["1","2"]},"dq":{"E":[]},"eJ":{"E":[]},"fR":{"E":[]},"dV":{"dy":[]},"bE":{"d3":[]},"fv":{"d3":[]},"fp":{"d3":[]},"c9":{"d3":[]},"ff":{"E":[]},"Q":{"H":["1","2"],"a0.V":"2"},"bi":{"k":["1"],"i":["1"]},"eH":{"nb":[]},"V":{"ap":[]},"ct":{"z":["1"],"V":[],"ap":[],"x":["1"]},"bT":{"z":["ai"],"l":["ai"],"V":[],"k":["ai"],"ap":[],"x":["ai"],"i":["ai"],"p.E":"ai"},"dm":{"z":["e"],"l":["e"],"V":[],"k":["e"],"ap":[],"x":["e"],"i":["e"]},"eU":{"z":["e"],"l":["e"],"V":[],"k":["e"],"ap":[],"x":["e"],"i":["e"],"p.E":"e"},"eV":{"z":["e"],"l":["e"],"V":[],"k":["e"],"ap":[],"x":["e"],"i":["e"],"p.E":"e"},"eW":{"z":["e"],"l":["e"],"V":[],"k":["e"],"ap":[],"x":["e"],"i":["e"],"p.E":"e"},"eX":{"z":["e"],"l":["e"],"V":[],"k":["e"],"ap":[],"x":["e"],"i":["e"],"p.E":"e"},"eY":{"z":["e"],"l":["e"],"V":[],"k":["e"],"ap":[],"x":["e"],"i":["e"],"p.E":"e"},"dn":{"z":["e"],"l":["e"],"V":[],"k":["e"],"ap":[],"x":["e"],"i":["e"],"p.E":"e"},"bU":{"dC":[],"z":["e"],"l":["e"],"V":[],"k":["e"],"ap":[],"x":["e"],"i":["e"],"p.E":"e"},"hd":{"E":[]},"e_":{"E":[]},"aT":{"cj":["1"]},"dZ":{"k8":[]},"dW":{"i":["1"]},"ek":{"E":[]},"dH":{"h4":["1"]},"dK":{"k":["1"],"i":["1"]},"d4":{"i":["1"]},"dc":{"l":["1"],"k":["1"],"i":["1"]},"df":{"H":["1","2"]},"a0":{"H":["1","2"]},"dg":{"H":["1","2"]},"bq":{"H":["1","2"]},"dS":{"k":["1"],"i":["1"]},"ai":{"a3":[]},"e":{"a3":[]},"l":{"k":["1"],"i":["1"]},"ej":{"E":[]},"fE":{"E":[]},"f0":{"E":[]},"aF":{"E":[]},"cw":{"E":[]},"eC":{"E":[]},"f_":{"E":[]},"fT":{"E":[]},"fQ":{"E":[]},"dz":{"E":[]},"er":{"E":[]},"f3":{"E":[]},"dx":{"E":[]},"eu":{"E":[]},"hK":{"dy":[]},"c0":{"fU":[]},"hB":{"fU":[]},"h7":{"fU":[]},"G":{"w":[],"d":[]},"ak":{"bC":[]},"bO":{"j":[]},"an":{"j":[]},"w":{"d":[]},"ay":{"d":[]},"az":{"d":[]},"ag":{"d":[]},"c_":{"j":[]},"b6":{"j":[]},"br":{"an":[],"j":[]},"n":{"G":[],"w":[],"d":[]},"eh":{"G":[],"w":[],"d":[]},"ei":{"G":[],"w":[],"d":[]},"c8":{"G":[],"w":[],"d":[]},"bD":{"G":[],"w":[],"d":[]},"aG":{"w":[],"d":[]},"cY":{"l":["ab<a3>"],"z":["ab<a3>"],"k":["ab<a3>"],"i":["ab<a3>"],"x":["ab<a3>"],"p.E":"ab<a3>"},"cZ":{"ab":["a3"]},"ew":{"l":["u"],"z":["u"],"k":["u"],"i":["u"],"x":["u"],"p.E":"u"},"h3":{"l":["G"],"k":["G"],"i":["G"],"p.E":"G"},"ci":{"l":["ak"],"z":["ak"],"k":["ak"],"i":["ak"],"x":["ak"],"p.E":"ak"},"ey":{"d":[]},"eA":{"G":[],"w":[],"d":[]},"bJ":{"l":["w"],"z":["w"],"k":["w"],"i":["w"],"x":["w"],"p.E":"w"},"cl":{"G":[],"w":[],"d":[]},"bS":{"G":[],"w":[],"d":[]},"cr":{"d":[]},"eQ":{"H":["u","@"],"a0.V":"@"},"eR":{"H":["u","@"],"a0.V":"@"},"eS":{"l":["aM"],"z":["aM"],"k":["aM"],"i":["aM"],"x":["aM"],"p.E":"aM"},"h2":{"l":["w"],"k":["w"],"i":["w"],"p.E":"w"},"dp":{"l":["w"],"z":["w"],"k":["w"],"i":["w"],"x":["w"],"p.E":"w"},"f8":{"l":["aN"],"z":["aN"],"k":["aN"],"i":["aN"],"x":["aN"],"p.E":"aN"},"fe":{"H":["u","@"],"a0.V":"@"},"fg":{"G":[],"w":[],"d":[]},"fk":{"l":["ay"],"z":["ay"],"d":[],"k":["ay"],"i":["ay"],"x":["ay"],"p.E":"ay"},"fl":{"l":["aO"],"z":["aO"],"k":["aO"],"i":["aO"],"x":["aO"],"p.E":"aO"},"fq":{"H":["u","u"],"a0.V":"u"},"bo":{"G":[],"w":[],"d":[]},"fw":{"l":["ag"],"z":["ag"],"k":["ag"],"i":["ag"],"x":["ag"],"p.E":"ag"},"fx":{"l":["az"],"z":["az"],"d":[],"k":["az"],"i":["az"],"x":["az"],"p.E":"az"},"fB":{"l":["aQ"],"z":["aQ"],"k":["aQ"],"i":["aQ"],"x":["aQ"],"p.E":"aQ"},"fW":{"d":[]},"bs":{"d":[]},"aS":{"d":[]},"h5":{"l":["F"],"z":["F"],"k":["F"],"i":["F"],"x":["F"],"p.E":"F"},"dI":{"ab":["a3"]},"hk":{"l":["aI?"],"z":["aI?"],"k":["aI?"],"i":["aI?"],"x":["aI?"],"p.E":"aI?"},"dN":{"l":["w"],"z":["w"],"k":["w"],"i":["w"],"x":["w"],"p.E":"w"},"hE":{"l":["aP"],"z":["aP"],"k":["aP"],"i":["aP"],"x":["aP"],"p.E":"aP"},"hL":{"l":["ao"],"z":["ao"],"k":["ao"],"i":["ao"],"x":["ao"],"p.E":"ao"},"e0":{"bK":[]},"ez":{"l":["G"],"k":["G"],"i":["G"],"p.E":"G"},"bN":{"l":["1"],"k":["1"],"i":["1"],"p.E":"1"},"ab":{"hz":["1"]},"eK":{"l":["bh"],"k":["bh"],"i":["bh"],"p.E":"bh"},"f1":{"l":["bk"],"k":["bk"],"i":["bk"],"p.E":"bk"},"ft":{"l":["u"],"k":["u"],"i":["u"],"p.E":"u"},"m":{"G":[],"w":[],"d":[]},"fC":{"l":["bp"],"k":["bp"],"i":["bp"],"p.E":"bp"},"el":{"H":["u","@"],"a0.V":"@"},"em":{"d":[]},"bd":{"d":[]},"f2":{"d":[]},"fm":{"l":["H<@,@>"],"k":["H<@,@>"],"i":["H<@,@>"],"p.E":"H<@,@>"},"cd":{"i":["1"]},"fo":{"T":[]},"aX":{"T":[]},"aY":{"T":[]},"B":{"T":[]},"bg":{"T":[]},"d7":{"i":["aK"]},"de":{"T":[]},"cs":{"T":[]},"f9":{"T":[]},"dB":{"T":[]},"cX":{"da":[]},"db":{"i":["da"]},"cT":{"a4":[]},"ck":{"a4":[],"i":["a4?"]},"cm":{"a4":[]},"du":{"a4":[]},"dE":{"a4":[]},"dF":{"a4":[]},"eM":{"dv":[]},"dC":{"l":["e"],"k":["e"],"i":["e"],"ap":[]}}'))
H.q0(v.typeUniverse,JSON.parse('{"aJ":1,"eI":1,"af":1,"k":1,"dd":1,"bP":1,"bQ":2,"d_":2,"dh":2,"bR":2,"dG":1,"fZ":1,"d1":1,"fS":1,"cB":1,"cU":2,"bi":1,"eL":1,"ct":1,"cH":1,"dW":1,"fr":1,"fs":2,"dL":1,"d4":1,"dc":1,"p":1,"df":2,"a0":2,"hU":2,"dg":2,"fh":1,"dS":1,"dM":1,"e3":2,"e5":1,"ep":2,"es":2,"i":1,"l":1,"eD":1,"he":1,"J":1,"d2":1,"bN":1,"cG":1,"cd":1,"aX":1,"aY":1,"B":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.mx
return{O:s("c8"),d:s("bC"),D:s("cc"),E:s("bD"),r:s("cS"),s:s("cV<dA,@>"),u:s("et"),x:s("k<@>"),h:s("G"),C:s("E"),B:s("j"),cZ:s("ak"),da:s("ci"),Y:s("d3"),c:s("cj<@>"),I:s("bK"),b0:s("cl"),ce:s("aJ<@>"),bg:s("x<@>"),T:s("cn"),m:s("mW"),M:s("aZ"),p:s("z<@>"),bV:s("Q<dA,@>"),c_:s("Q<e,aA>"),y:s("Q<e,e>"),U:s("bg"),cF:s("d8"),J:s("l<fI>"),L:s("l<fJ>"),V:s("l<fM>"),R:s("l<fP>"),b:s("l<@>"),aH:s("l<e>"),b7:s("de"),f:s("H<@,@>"),cB:s("cr"),Z:s("cs"),bl:s("eT"),o:s("dl"),t:s("V"),cr:s("bU"),a1:s("w"),P:s("W"),K:s("C"),q:s("ab<a3>"),a7:s("nb"),cK:s("dv"),N:s("u"),aL:s("bo"),ae:s("k8"),aR:s("fz"),aM:s("dB"),Q:s("ap"),n:s("fF"),v:s("dD"),g:s("fG"),F:s("fH"),e:s("fK"),j:s("fL"),G:s("fN"),a:s("fO"),cC:s("cA"),i:s("bq<u,u>"),k:s("fU"),cg:s("bs"),bj:s("aS"),w:s("aA"),cb:s("ai"),z:s("@"),b6:s("@(C)"),l:s("@(C,dy)"),S:s("e"),A:s("0&*"),_:s("C*"),bc:s("cj<W>?"),X:s("C?"),ba:s("cx?"),aJ:s("fn?"),aX:s("fA?"),W:s("dD?"),H:s("a3")}})();(function constants(){var s=hunkHelpers.makeConstList
C.i=W.bD.prototype
C.Y=J.a.prototype
C.b=J.aJ.prototype
C.c=J.d5.prototype
C.Z=J.cn.prototype
C.d=J.co.prototype
C.a=J.bM.prototype
C.a_=J.aZ.prototype
C.A=H.bU.prototype
C.C=J.f5.prototype
C.a7=P.cx.prototype
C.o=J.cA.prototype
C.F=W.br.prototype
C.G=W.bs.prototype
C.H=new E.ca("Browser.chrome")
C.p=new E.ca("Browser.firefox")
C.q=new E.ca("Browser.edge")
C.I=new E.ca("Browser.other")
C.ac=new P.ix()
C.J=new P.iw()
C.r=function getTagFallback(o) {
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
C.t=function(hooks) { return hooks; }

C.Q=new P.f3()
C.f=new P.kv()
C.R=new P.kz()
C.S=new P.l1()
C.u=new H.l5()
C.e=new P.l6()
C.T=new P.hK()
C.j=new P.aH(0)
C.U=new P.aH(25e4)
C.V=new P.aH(5e6)
C.W=new P.aH(7e4)
C.X=new P.aH(75e4)
C.k=s([0,0,32776,33792,1,10240,0,0])
C.l=s([0,0,65490,45055,65535,34815,65534,18431])
C.m=s([0,0,26624,1023,65534,2047,65534,2047])
C.v=s([])
C.a2=s([0,0,32722,12287,65534,34815,65534,18431])
C.w=s([0,0,65498,45055,65535,34815,65534,18431])
C.h=s([0,0,24576,1023,65534,34815,65534,18431])
C.x=s([0,0,32754,11263,65534,34815,65534,18431])
C.y=s([0,0,65490,12287,65535,34815,65534,18431])
C.a0=s([])
C.a3=new H.bH(0,{},C.a0,H.mx("bH<u,u>"))
C.a1=s([])
C.z=new H.bH(0,{},C.a1,H.mx("bH<dA,@>"))
C.a4=new E.cu("OperatingSystem.windows")
C.B=new E.cu("OperatingSystem.mac")
C.a5=new E.cu("OperatingSystem.linux")
C.a6=new E.cu("OperatingSystem.other")
C.a8=new H.cy("call")
C.D=new Y.cz("Type.Intesected")
C.E=new Y.cz("Type.NoCollision")
C.a9=new Y.cz("Type.OutOfRange")
C.n=new Y.cz("Type.Collision")
C.aa=new P.kw(!1)
C.ab=new P.cF(null,2)})();(function staticFields(){$.l2=null
$.aV=0
$.cQ=null
$.mR=null
$.o6=null
$.o2=null
$.oc=null
$.lD=null
$.lJ=null
$.mz=null
$.cK=null
$.e7=null
$.e8=null
$.mt=!1
$.N=C.e
$.ah=[]
$.iS=null
$.n0=null
$.n4=null
$.a8=null
$.b3=null
$.nc=null
$.nd=null
$.kA=null
$.kE=null
$.nt=null
$.kB=null
$.kC=null
$.nr=null
$.kD=null
$.ns=null
$.iz=[101,102,103,104,105,106,115,109,110,111,112,113,1,114,200,201,202,203,204,205]})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"t4","lR",function(){return H.o5("_$dart_dartClosure")})
s($,"tz","op",function(){return H.b5(H.kf({
toString:function(){return"$receiver$"}}))})
s($,"tA","oq",function(){return H.b5(H.kf({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"tB","or",function(){return H.b5(H.kf(null))})
s($,"tC","os",function(){return H.b5(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"tF","ov",function(){return H.b5(H.kf(void 0))})
s($,"tG","ow",function(){return H.b5(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"tE","ou",function(){return H.b5(H.nk(null))})
s($,"tD","ot",function(){return H.b5(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"tI","oy",function(){return H.b5(H.nk(void 0))})
s($,"tH","ox",function(){return H.b5(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"tY","mK",function(){return P.pH()})
s($,"tJ","oz",function(){return new P.ky().$0()})
s($,"tK","oA",function(){return new P.kx().$0()})
s($,"tZ","oD",function(){return new Int8Array(H.cJ([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2]))})
s($,"u1","oE",function(){return P.pt("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"uf","oF",function(){return P.qo()})
s($,"u_","mL",function(){return H.o5("_$dart_dartObject")})
s($,"ue","mM",function(){return function DartObject(a){this.o=a}})
r($,"t8","ok",function(){return[B.a1(5,2),B.a1(2,5),B.a1(-5,2),B.a1(-2,5),B.a1(5,-2),B.a1(2,-5),B.a1(-5,-2),B.a1(-2,-5)]})
r($,"t7","oj",function(){return[B.a1(1,0),B.a1(0,1),B.a1(1,-1),B.a1(-1,1),B.a1(1,1),B.a1(0,0),B.a1(2,0),B.a1(0,2)]})
s($,"ta","ol",function(){return B.a1(-0.211324865405187,-0.211324865405187)})
s($,"t9","mH",function(){return B.a1(0.366025403784439,0.366025403784439)})
s($,"tQ","oC",function(){return Z.aR(0)})
s($,"tS","aa",function(){return Z.aR(1)})
s($,"tR","as",function(){return Z.aR(2)})
s($,"tM","bA",function(){return Z.aR(4)})
s($,"tT","ae",function(){return Z.aR(8)})
s($,"tU","c7",function(){return Z.aR(16)})
s($,"tN","ec",function(){return Z.aR(32)})
s($,"tO","ed",function(){return Z.aR(64)})
s($,"tP","oB",function(){return Z.aR(96)})
s($,"tV","cP",function(){return Z.aR(128)})
s($,"tL","bz",function(){return Z.aR(256)})
s($,"rM","oi",function(){return new V.iT()})
r($,"rL","v",function(){return $.oi()})
s($,"tg","aB",function(){return V.al(0)})
s($,"td","ii",function(){return V.al(511)})
s($,"tj","aD",function(){return V.al(1)})
s($,"th","mI",function(){return V.al(2)})
s($,"ti","aC",function(){return V.al(4)})
s($,"tm","aE",function(){return V.al(8)})
s($,"tk","mJ",function(){return V.al(16)})
s($,"tl","b9",function(){return V.al(32)})
s($,"tp","bb",function(){return V.al(64)})
s($,"tn","on",function(){return V.al(128)})
s($,"to","ba",function(){return V.al(256)})
s($,"tf","ij",function(){return V.al(146)})
s($,"te","om",function(){return V.al(365)})
r($,"tv","oo",function(){return V.n1(V.cv(),V.mb(),V.nv())})
s($,"t_","mF",function(){return V.fd(-0.25,-1.5,-0.25,0.5,1.9,0.5)})
s($,"t1","ih",function(){return V.mb()})
s($,"rT","ib",function(){var q=$.nr
return q==null?$.nr=V.nq(0,-1,0):q})
s($,"rZ","mE",function(){var q=$.nt
return q==null?$.nt=V.nq(1,0,0):q})
s($,"t0","mG",function(){return V.nu()})
s($,"rW","lQ",function(){return V.mc()})
s($,"rQ","mD",function(){return V.nv()})
s($,"rX","ie",function(){return V.bV(-0.5,0.5,0.5)})
s($,"rY","ig",function(){return V.bV(0.5,0.5,0.5)})
s($,"rU","ic",function(){return V.bV(-0.5,-0.5,0.5)})
s($,"rV","id",function(){return V.bV(0.5,-0.5,0.5)})
s($,"rR","i9",function(){return V.bV(-0.5,0.5,-0.5)})
s($,"rS","ia",function(){return V.bV(0.5,0.5,-0.5)})
s($,"rO","i7",function(){return V.bV(-0.5,-0.5,-0.5)})
s($,"rP","i8",function(){return V.bV(0.5,-0.5,-0.5)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.dl,DataView:H.V,ArrayBufferView:H.V,Float32Array:H.bT,Float64Array:H.bT,Int16Array:H.eU,Int32Array:H.eV,Int8Array:H.eW,Uint16Array:H.eX,Uint32Array:H.eY,Uint8ClampedArray:H.dn,CanvasPixelArray:H.dn,Uint8Array:H.bU,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLBodyElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLDivElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableColElement:W.n,HTMLTableElement:W.n,HTMLTableRowElement:W.n,HTMLTableSectionElement:W.n,HTMLTemplateElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.il,HTMLAnchorElement:W.eh,HTMLAreaElement:W.ei,HTMLAudioElement:W.c8,Blob:W.bC,HTMLCanvasElement:W.bD,CanvasRenderingContext2D:W.cS,CDATASection:W.aG,CharacterData:W.aG,Comment:W.aG,ProcessingInstruction:W.aG,Text:W.aG,CSSPerspective:W.iH,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.cW,MSStyleCSSProperties:W.cW,CSS2Properties:W.cW,CSSImageValue:W.av,CSSKeywordValue:W.av,CSSNumericValue:W.av,CSSPositionValue:W.av,CSSResourceValue:W.av,CSSUnitValue:W.av,CSSURLImageValue:W.av,CSSStyleValue:W.av,CSSMatrixComponent:W.aW,CSSRotation:W.aW,CSSScale:W.aW,CSSSkew:W.aW,CSSTranslation:W.aW,CSSTransformComponent:W.aW,CSSTransformValue:W.iJ,CSSUnparsedValue:W.iK,DataTransferItemList:W.iL,DOMException:W.iM,ClientRectList:W.cY,DOMRectList:W.cY,DOMRectReadOnly:W.cZ,DOMStringList:W.ew,DOMTokenList:W.iN,Element:W.G,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.ak,FileList:W.ci,FileWriter:W.ey,HTMLFormElement:W.eA,Gamepad:W.aI,History:W.j1,HTMLCollection:W.bJ,HTMLFormControlsCollection:W.bJ,HTMLOptionsCollection:W.bJ,ImageData:W.bK,HTMLImageElement:W.cl,KeyboardEvent:W.bO,Location:W.j6,HTMLVideoElement:W.bS,HTMLMediaElement:W.bS,MediaList:W.jp,MessagePort:W.cr,MIDIInputMap:W.eQ,MIDIOutputMap:W.eR,MimeType:W.aM,MimeTypeArray:W.eS,PointerEvent:W.an,MouseEvent:W.an,DragEvent:W.an,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,Attr:W.w,DocumentType:W.w,Node:W.w,NodeList:W.dp,RadioNodeList:W.dp,Plugin:W.aN,PluginArray:W.f8,RTCStatsReport:W.fe,HTMLSelectElement:W.fg,SourceBuffer:W.ay,SourceBufferList:W.fk,SpeechGrammar:W.aO,SpeechGrammarList:W.fl,SpeechRecognitionResult:W.aP,Storage:W.fq,CSSStyleSheet:W.ao,StyleSheet:W.ao,HTMLTableCellElement:W.bo,HTMLTableDataCellElement:W.bo,HTMLTableHeaderCellElement:W.bo,TextTrack:W.az,TextTrackCue:W.ag,VTTCue:W.ag,TextTrackCueList:W.fw,TextTrackList:W.fx,TimeRanges:W.k7,Touch:W.aQ,TouchEvent:W.c_,TouchList:W.fB,TrackDefaultList:W.kc,CompositionEvent:W.b6,FocusEvent:W.b6,TextEvent:W.b6,UIEvent:W.b6,URL:W.ku,VideoTrackList:W.fW,WheelEvent:W.br,Window:W.bs,DOMWindow:W.bs,DedicatedWorkerGlobalScope:W.aS,ServiceWorkerGlobalScope:W.aS,SharedWorkerGlobalScope:W.aS,WorkerGlobalScope:W.aS,CSSRuleList:W.h5,ClientRect:W.dI,DOMRect:W.dI,GamepadList:W.hk,NamedNodeMap:W.dN,MozNamedAttrMap:W.dN,SpeechRecognitionResultList:W.hE,StyleSheetList:W.hL,IDBKeyRange:P.d8,SVGLength:P.bh,SVGLengthList:P.eK,SVGNumber:P.bk,SVGNumberList:P.f1,SVGPointList:P.jz,SVGStringList:P.ft,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGScriptElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGTransform:P.bp,SVGTransformList:P.fC,AudioBuffer:P.is,AudioParamMap:P.el,AudioTrackList:P.em,AudioContext:P.bd,webkitAudioContext:P.bd,BaseAudioContext:P.bd,OfflineAudioContext:P.f2,WebGL2RenderingContext:P.cx,SQLResultSetRowList:P.fm})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLAudioElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLVideoElement:true,HTMLMediaElement:false,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBKeyRange:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.dO.$nativeSuperclassTag="ArrayBufferView"
H.dP.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
H.dQ.$nativeSuperclassTag="ArrayBufferView"
H.dR.$nativeSuperclassTag="ArrayBufferView"
H.dm.$nativeSuperclassTag="ArrayBufferView"
W.dT.$nativeSuperclassTag="EventTarget"
W.dU.$nativeSuperclassTag="EventTarget"
W.dX.$nativeSuperclassTag="EventTarget"
W.dY.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=B.rs
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map
