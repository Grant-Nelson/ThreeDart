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
a[c]=function(){a[c]=function(){H.qC(b)}
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
if(a[b]!==s)H.qD(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lI(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={lj:function lj(){},
ll:function(a){return new H.cX("Field '"+a+"' has been assigned during initialization.")},
kN:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
jo:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ox:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
qd:function(a,b,c){return a},
oa:function(a,b,c,d){if(t.gw.b(a))return new H.cO(a,b,c.M("@<0>").bi(d).M("cO<1,2>"))
return new H.aZ(a,b,c.M("@<0>").bi(d).M("aZ<1,2>"))},
iB:function(){return new P.ch("No element")},
o1:function(){return new P.ch("Too many elements")},
ou:function(a,b){H.ff(a,0,J.aT(a)-1,b)},
ff:function(a,b,c,d){if(c-b<=32)H.ot(a,b,c,d)
else H.os(a,b,c,d)},
ot:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bU(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ap()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
os:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a6(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a6(a4+a5,2),f=g-j,e=g+j,d=J.bU(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ap()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.G(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.m(a3,p,d.h(a3,r))
d.m(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.h(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.m(a3,p,d.h(a3,r))
l=r+1
d.m(a3,r,d.h(a3,q))
d.m(a3,q,o)
q=m
r=l
break}else{d.m(a3,p,d.h(a3,q))
d.m(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.m(a3,p,d.h(a3,r))
d.m(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.m(a3,p,d.h(a3,r))
l=r+1
d.m(a3,r,d.h(a3,q))
d.m(a3,q,o)
r=l}else{d.m(a3,p,d.h(a3,q))
d.m(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.m(a3,a4,d.h(a3,a2))
d.m(a3,a2,b)
a2=q+1
d.m(a3,a5,d.h(a3,a2))
d.m(a3,a2,a0)
H.ff(a3,a4,r-2,a6)
H.ff(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.G(a6.$2(d.h(a3,r),b),0);)++r
for(;J.G(a6.$2(d.h(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.m(a3,p,d.h(a3,r))
d.m(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.m(a3,p,d.h(a3,r))
l=r+1
d.m(a3,r,d.h(a3,q))
d.m(a3,q,o)
r=l}else{d.m(a3,p,d.h(a3,q))
d.m(a3,q,o)}q=m
break}}H.ff(a3,r,q,a6)}else H.ff(a3,r,q,a6)},
cX:function cX(a){this.a=a},
r:function r(a){this.a=a},
n:function n(){},
d1:function d1(){},
bk:function bk(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cO:function cO(a,b,c){this.a=a
this.b=b
this.$ti=c},
eP:function eP(a,b){this.a=null
this.b=a
this.c=b},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
b7:function b7(a,b,c){this.a=a
this.b=b
this.$ti=c},
fP:function fP(a,b){this.a=a
this.b=b},
cQ:function cQ(){},
fJ:function fJ(){},
cn:function cn(){},
nU:function(){throw H.c(P.D("Cannot modify unmodifiable Map"))},
ng:function(a){var s,r=H.nf(a)
if(r!=null)return r
s="minified:"+a
return s},
n9:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
z:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cD(a)
return s},
di:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
ma:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.ac(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.F(q,o)|32)>r)return n}return parseInt(a,b)},
dj:function(a){return H.od(a)},
od:function(a){var s,r,q,p
if(a instanceof P.R)return H.aw(H.b9(a),null)
if(J.eh(a)===C.T||t.ak.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.aw(H.b9(a),null)},
oe:function(){if(!!self.location)return self.location.href
return null},
m9:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
om:function(a){var s,r,q,p=H.a([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.kB(q))throw H.c(H.eg(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.b2(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.eg(q))}return H.m9(p)},
mb:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.kB(q))throw H.c(H.eg(q))
if(q<0)throw H.c(H.eg(q))
if(q>65535)return H.om(a)}return H.m9(a)},
on:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aE:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.b2(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.ac(a,0,1114111,null,null))},
ce:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ol:function(a){var s=H.ce(a).getFullYear()+0
return s},
oj:function(a){var s=H.ce(a).getMonth()+1
return s},
of:function(a){var s=H.ce(a).getDate()+0
return s},
og:function(a){var s=H.ce(a).getHours()+0
return s},
oi:function(a){var s=H.ce(a).getMinutes()+0
return s},
ok:function(a){var s=H.ce(a).getSeconds()+0
return s},
oh:function(a){var s=H.ce(a).getMilliseconds()+0
return s},
n7:function(a){throw H.c(H.eg(a))},
d:function(a,b){if(a==null)J.aT(a)
throw H.c(H.cA(a,b))},
cA:function(a,b){var s,r="index"
if(!H.kB(b))return new P.aL(!0,b,r,null)
s=J.aT(a)
if(b<0||b>=s)return P.Q(b,a,r,null,s)
return P.fa(b,r)},
qi:function(a,b,c){if(a>c)return P.ac(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.ac(b,a,c,"end",null)
return new P.aL(!0,b,"end",null)},
eg:function(a){return new P.aL(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.f_()
s=new Error()
s.dartException=a
r=H.qE
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qE:function(){return J.cD(this.dartException)},
h:function(a){throw H.c(a)},
q:function(a){throw H.c(P.aO(a))},
b4:function(a){var s,r,q,p,o,n
a=H.nc(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jz(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jA:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mn:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lk:function(a,b){var s=b==null,r=s?null:b.method
return new H.eK(a,r,s?null:b.receiver)},
ao:function(a){if(a==null)return new H.j6(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bV(a,a.dartException)
return H.q9(a)},
bV:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q9:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.b2(r,16)&8191)===10)switch(q){case 438:return H.bV(a,H.lk(H.z(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.z(s)+" (Error "+q+")"
return H.bV(a,new H.dh(p,e))}}if(a instanceof TypeError){o=$.nk()
n=$.nl()
m=$.nm()
l=$.nn()
k=$.nq()
j=$.nr()
i=$.np()
$.no()
h=$.nt()
g=$.ns()
f=o.an(s)
if(f!=null)return H.bV(a,H.lk(s,f))
else{f=n.an(s)
if(f!=null){f.method="call"
return H.bV(a,H.lk(s,f))}else{f=m.an(s)
if(f==null){f=l.an(s)
if(f==null){f=k.an(s)
if(f==null){f=j.an(s)
if(f==null){f=i.an(s)
if(f==null){f=l.an(s)
if(f==null){f=h.an(s)
if(f==null){f=g.an(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bV(a,new H.dh(s,f==null?e:f.method))}}return H.bV(a,new H.fI(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dq()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bV(a,new P.aL(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dq()
return a},
lL:function(a){var s
if(a==null)return new H.hu(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hu(a)},
qk:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qs:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
cz:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qs)
a.$identity=s
return s},
nT:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.fk().constructor.prototype):Object.create(new H.bZ(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aV
if(typeof r!=="number")return r.T()
$.aV=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lZ(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nP(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lZ(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nP:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n6,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.nN:H.nM
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nQ:function(a,b,c,d){var s=H.lY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lZ:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nS(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nQ(r,!p,s,b)
if(r===0){p=$.aV
if(typeof p!=="number")return p.T()
$.aV=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cE
return new Function(p+(o==null?$.cE=H.i6("self"):o)+";return "+n+"."+H.z(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aV
if(typeof p!=="number")return p.T()
$.aV=p+1
m+=p
p="return function("+m+"){return this."
o=$.cE
return new Function(p+(o==null?$.cE=H.i6("self"):o)+"."+H.z(s)+"("+m+");}")()},
nR:function(a,b,c,d){var s=H.lY,r=H.nO
switch(b?-1:a){case 0:throw H.c(new H.fd("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nS:function(a,b){var s,r,q,p,o,n,m,l=$.cE
if(l==null)l=$.cE=H.i6("self")
s=$.lX
if(s==null)s=$.lX=H.i6("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.nR(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.z(r)+"(this."+s+");"
n=$.aV
if(typeof n!=="number")return n.T()
$.aV=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.z(r)+"(this."+s+", "+m+");"
n=$.aV
if(typeof n!=="number")return n.T()
$.aV=n+1
return new Function(o+n+"}")()},
lI:function(a,b,c,d,e,f,g){return H.nT(a,b,c,d,!!e,!!f,g)},
nM:function(a,b){return H.hI(v.typeUniverse,H.b9(a.a),b)},
nN:function(a,b){return H.hI(v.typeUniverse,H.b9(a.c),b)},
lY:function(a){return a.a},
nO:function(a){return a.c},
i6:function(a){var s,r,q,p=new H.bZ("self","target","receiver","name"),o=J.li(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bX("Field name "+a+" not found."))},
qC:function(a){throw H.c(new P.ev(a))},
qm:function(a){return v.getIsolateTag(a)},
qD:function(a){return H.h(new H.cX(a))},
rM:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qw:function(a){var s,r,q,p,o,n=$.n5.$1(a),m=$.kL[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kS[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mZ.$2(a,n)
if(q!=null){m=$.kL[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kS[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.l4(s)
$.kL[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kS[n]=s
return s}if(p==="-"){o=H.l4(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.na(a,s)
if(p==="*")throw H.c(P.jD(n))
if(v.leafTags[n]===true){o=H.l4(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.na(a,s)},
na:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lN(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
l4:function(a){return J.lN(a,!1,null,!!a.$iB)},
qy:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.l4(s)
else return J.lN(s,c,null,null)},
qq:function(){if(!0===$.lM)return
$.lM=!0
H.qr()},
qr:function(){var s,r,q,p,o,n,m,l
$.kL=Object.create(null)
$.kS=Object.create(null)
H.qp()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nb.$1(o)
if(n!=null){m=H.qy(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qp:function(){var s,r,q,p,o,n,m=C.I()
m=H.cy(C.J,H.cy(C.K,H.cy(C.u,H.cy(C.u,H.cy(C.L,H.cy(C.M,H.cy(C.N(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.n5=new H.kO(p)
$.mZ=new H.kP(o)
$.nb=new H.kQ(n)},
cy:function(a,b){return a(b)||b},
o5:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a9("Illegal RegExp pattern ("+String(n)+")",a,null))},
ne:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qj:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nc:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lQ:function(a,b,c){var s=H.qB(a,b,c)
return s},
qB:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nc(b),'g'),H.qj(c))},
cJ:function cJ(){},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jz:function jz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dh:function dh(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
fI:function fI(a){this.a=a},
j6:function j6(a){this.a=a},
hu:function hu(a){this.a=a
this.b=null},
bF:function bF(){},
fr:function fr(){},
fk:function fk(){},
bZ:function bZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fd:function fd(a){this.a=a},
Z:function Z(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iD:function iD(a){this.a=a},
iG:function iG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cZ:function cZ(a,b){this.a=a
this.$ti=b},
eO:function eO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
eJ:function eJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cw:function(a){var s,r,q,p,o
if(t.aP.b(a))return a
s=J.bU(a)
r=s.gl(a)
q=P.d2(r,null,!1,t.A)
for(p=0;p<s.gl(a);++p){o=s.h(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
b8:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cA(b,a))},
pn:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.qi(a,b,c))
return b},
dc:function dc(){},
a3:function a3(){},
cc:function cc(){},
bL:function bL(){},
dd:function dd(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
de:function de(){},
bM:function bM(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
mh:function(a,b){var s=b.c
return s==null?b.c=H.ly(a,b.z,!0):s},
mg:function(a,b){var s=b.c
return s==null?b.c=H.e6(a,"m3",[b.z]):s},
mi:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mi(a.z)
return s===11||s===12},
oq:function(a){return a.cy},
lK:function(a){return H.lz(v.typeUniverse,a,!1)},
bv:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bv(a,s,a0,a1)
if(r===s)return b
return H.mI(a,r,!0)
case 7:s=b.z
r=H.bv(a,s,a0,a1)
if(r===s)return b
return H.ly(a,r,!0)
case 8:s=b.z
r=H.bv(a,s,a0,a1)
if(r===s)return b
return H.mH(a,r,!0)
case 9:q=b.Q
p=H.ef(a,q,a0,a1)
if(p===q)return b
return H.e6(a,b.z,p)
case 10:o=b.z
n=H.bv(a,o,a0,a1)
m=b.Q
l=H.ef(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lw(a,n,l)
case 11:k=b.z
j=H.bv(a,k,a0,a1)
i=b.Q
h=H.q6(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mG(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.ef(a,g,a0,a1)
o=b.z
n=H.bv(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lx(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.i_("Attempted to substitute unexpected RTI kind "+c))}},
ef:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bv(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
q7:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bv(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
q6:function(a,b,c,d){var s,r=b.a,q=H.ef(a,r,c,d),p=b.b,o=H.ef(a,p,c,d),n=b.c,m=H.q7(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.h6()
s.a=q
s.b=o
s.c=m
return s},
a:function(a,b){a[v.arrayRti]=b
return a},
qe:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.n6(s)
return a.$S()}return null},
n8:function(a,b){var s
if(H.mi(b))if(a instanceof H.bF){s=H.qe(a)
if(s!=null)return s}return H.b9(a)},
b9:function(a){var s
if(a instanceof P.R){s=a.$ti
return s!=null?s:H.lE(a)}if(Array.isArray(a))return H.ks(a)
return H.lE(J.eh(a))},
ks:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
Y:function(a){var s=a.$ti
return s!=null?s:H.lE(a)},
lE:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pv(a,s)},
pv:function(a,b){var s=a instanceof H.bF?a.__proto__.__proto__.constructor:b,r=H.p5(v.typeUniverse,s.name)
b.$ccache=r
return r},
n6:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lz(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pu:function(a){var s,r,q,p=this
if(p===t.K)return H.ec(p,a,H.pz)
if(!H.ba(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.ec(p,a,H.pC)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.kB
else if(r===t.gR||r===t.H)q=H.py
else if(r===t.N)q=H.pA
else q=r===t.cJ?H.kA:null
if(q!=null)return H.ec(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.qt)){p.r="$i"+s
return H.ec(p,a,H.pB)}}else if(s===7)return H.ec(p,a,H.ps)
return H.ec(p,a,H.pq)},
ec:function(a,b,c){a.b=c
return a.b(b)},
pt:function(a){var s,r=this,q=H.pp
if(!H.ba(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.pm
else if(r===t.K)q=H.pl
else{s=H.ei(r)
if(s)q=H.pr}r.a=q
return r.a(a)},
lH:function(a){var s,r=a.y
if(!H.ba(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.lH(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pq:function(a){var s=this
if(a==null)return H.lH(s)
return H.U(v.typeUniverse,H.n8(a,s),null,s,null)},
ps:function(a){if(a==null)return!0
return this.z.b(a)},
pB:function(a){var s,r=this
if(a==null)return H.lH(r)
s=r.r
if(a instanceof P.R)return!!a[s]
return!!J.eh(a)[s]},
pp:function(a){var s,r=this
if(a==null){s=H.ei(r)
if(s)return a}else if(r.b(a))return a
H.mT(a,r)},
pr:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mT(a,s)},
mT:function(a,b){throw H.c(H.oW(H.mz(a,H.n8(a,b),H.aw(b,null))))},
mz:function(a,b,c){var s=P.iq(a),r=H.aw(b==null?H.b9(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
oW:function(a){return new H.e4("TypeError: "+a)},
ae:function(a,b){return new H.e4("TypeError: "+H.mz(a,null,b))},
pz:function(a){return a!=null},
pl:function(a){if(a!=null)return a
throw H.c(H.ae(a,"Object"))},
pC:function(a){return!0},
pm:function(a){return a},
kA:function(a){return!0===a||!1===a},
mR:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ae(a,"bool"))},
rA:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ae(a,"bool"))},
rz:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ae(a,"bool?"))},
rB:function(a){if(typeof a=="number")return a
throw H.c(H.ae(a,"double"))},
rD:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ae(a,"double"))},
rC:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ae(a,"double?"))},
kB:function(a){return typeof a=="number"&&Math.floor(a)===a},
kt:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ae(a,"int"))},
rF:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ae(a,"int"))},
rE:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ae(a,"int?"))},
py:function(a){return typeof a=="number"},
rG:function(a){if(typeof a=="number")return a
throw H.c(H.ae(a,"num"))},
rI:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ae(a,"num"))},
rH:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ae(a,"num?"))},
pA:function(a){return typeof a=="string"},
ku:function(a){if(typeof a=="string")return a
throw H.c(H.ae(a,"String"))},
rK:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ae(a,"String"))},
rJ:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ae(a,"String?"))},
q2:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.aw(a[q],b)
return s},
mU:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.a([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.a.T(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.aw(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.aw(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.aw(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.aw(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.aw(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
aw:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.aw(a.z,b)
return s}if(l===7){r=a.z
s=H.aw(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.aw(a.z,b)+">"
if(l===9){p=H.q8(a.z)
o=a.Q
return o.length!==0?p+("<"+H.q2(o,b)+">"):p}if(l===11)return H.mU(a,b,null)
if(l===12)return H.mU(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
q8:function(a){var s,r=H.nf(a)
if(r!=null)return r
s="minified:"+a
return s},
mJ:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
p5:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lz(a,b,!1)
else if(typeof m=="number"){s=m
r=H.e7(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.e6(a,b,q)
n[b]=o
return o}else return m},
p3:function(a,b){return H.mQ(a.tR,b)},
p2:function(a,b){return H.mQ(a.eT,b)},
lz:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mE(H.mC(a,null,b,c))
r.set(b,s)
return s},
hI:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mE(H.mC(a,b,c,!0))
q.set(c,r)
return r},
p4:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lw(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bu:function(a,b){b.a=H.pt
b.b=H.pu
return b},
e7:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aF(null,null)
s.y=b
s.cy=c
r=H.bu(a,s)
a.eC.set(c,r)
return r},
mI:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.p0(a,b,r,c)
a.eC.set(r,s)
return s},
p0:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ba(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aF(null,null)
q.y=6
q.z=b
q.cy=c
return H.bu(a,q)},
ly:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.p_(a,b,r,c)
a.eC.set(r,s)
return s},
p_:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.ba(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ei(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ei(q.z))return q
else return H.mh(a,b)}}p=new H.aF(null,null)
p.y=7
p.z=b
p.cy=c
return H.bu(a,p)},
mH:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oY(a,b,r,c)
a.eC.set(r,s)
return s},
oY:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ba(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.e6(a,"m3",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.aF(null,null)
q.y=8
q.z=b
q.cy=c
return H.bu(a,q)},
p1:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aF(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bu(a,s)
a.eC.set(q,r)
return r},
hH:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oX:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
e6:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hH(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aF(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bu(a,r)
a.eC.set(p,q)
return q},
lw:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hH(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aF(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bu(a,o)
a.eC.set(q,n)
return n},
mG:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hH(m)
if(j>0){s=l>0?",":""
r=H.hH(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oX(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aF(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bu(a,o)
a.eC.set(q,r)
return r},
lx:function(a,b,c,d){var s,r=b.cy+("<"+H.hH(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oZ(a,b,c,r,d)
a.eC.set(r,s)
return s},
oZ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bv(a,b,r,0)
m=H.ef(a,c,r,0)
return H.lx(a,n,m,c!==m)}}l=new H.aF(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bu(a,l)},
mC:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mE:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.oQ(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mD(a,r,h,g,!1)
else if(q===46)r=H.mD(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bt(a.u,a.e,g.pop()))
break
case 94:g.push(H.p1(a.u,g.pop()))
break
case 35:g.push(H.e7(a.u,5,"#"))
break
case 64:g.push(H.e7(a.u,2,"@"))
break
case 126:g.push(H.e7(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.lv(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.e6(p,n,o))
else{m=H.bt(p,a.e,n)
switch(m.y){case 11:g.push(H.lx(p,m,o,a.n))
break
default:g.push(H.lw(p,m,o))
break}}break
case 38:H.oR(a,g)
break
case 42:p=a.u
g.push(H.mI(p,H.bt(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.ly(p,H.bt(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.mH(p,H.bt(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.h6()
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
H.lv(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.mG(p,H.bt(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.lv(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.oT(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bt(a.u,a.e,i)},
oQ:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mD:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mJ(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.oq(o)+'"')
d.push(H.hI(s,o,n))}else d.push(p)
return m},
oR:function(a,b){var s=b.pop()
if(0===s){b.push(H.e7(a.u,1,"0&"))
return}if(1===s){b.push(H.e7(a.u,4,"1&"))
return}throw H.c(P.i_("Unexpected extended operation "+H.z(s)))},
bt:function(a,b,c){if(typeof c=="string")return H.e6(a,c,a.sEA)
else if(typeof c=="number")return H.oS(a,b,c)
else return c},
lv:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bt(a,b,c[s])},
oT:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bt(a,b,c[s])},
oS:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.i_("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.i_("Bad index "+c+" for "+b.i(0)))},
U:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.ba(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.ba(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.U(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.U(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.U(a,b.z,c,d,e)
if(r===6)return H.U(a,b.z,c,d,e)
return r!==7}if(r===6)return H.U(a,b.z,c,d,e)
if(p===6){s=H.mh(a,d)
return H.U(a,b,c,s,e)}if(r===8){if(!H.U(a,b.z,c,d,e))return!1
return H.U(a,H.mg(a,b),c,d,e)}if(r===7){s=H.U(a,t.P,c,d,e)
return s&&H.U(a,b.z,c,d,e)}if(p===8){if(H.U(a,b,c,d.z,e))return!0
return H.U(a,b,c,H.mg(a,d),e)}if(p===7){s=H.U(a,b,c,t.P,e)
return s||H.U(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.c)return!0
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
if(!H.U(a,k,c,j,e)||!H.U(a,j,e,k,c))return!1}return H.mV(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.mV(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.px(a,b,c,d,e)}return!1},
mV:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.U(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.U(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.U(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.U(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.U(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
px:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.U(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mJ(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.U(a,H.hI(a,b,l[p]),c,r[p],e))return!1
return!0},
ei:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.ba(a))if(r!==7)if(!(r===6&&H.ei(a.z)))s=r===8&&H.ei(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qt:function(a){var s
if(!H.ba(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
ba:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
mQ:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aF:function aF(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
h6:function h6(){this.c=this.b=this.a=null},
h2:function h2(){},
e4:function e4(a){this.a=a},
nf:function(a){return v.mangledGlobalNames[a]},
qz:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kM:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lM==null){H.qq()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jD("Return interceptor for "+H.z(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.k4
if(o==null)o=$.k4=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.qw(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){o=$.k4
if(o==null)o=$.k4=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
o2:function(a,b){if(a<0||a>4294967295)throw H.c(P.ac(a,0,4294967295,"length",null))
return J.o3(new Array(a),b)},
lh:function(a,b){if(a<0)throw H.c(P.bX("Length must be a non-negative integer: "+a))
return H.a(new Array(a),b.M("w<0>"))},
o3:function(a,b){return J.li(H.a(a,b.M("w<0>")))},
li:function(a){a.fixed$length=Array
return a},
o4:function(a,b){return J.nF(a,b)},
eh:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cV.prototype
return J.eI.prototype}if(typeof a=="string")return J.bi.prototype
if(a==null)return J.cW.prototype
if(typeof a=="boolean")return J.eH.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.R)return a
return J.kM(a)},
bU:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.R)return a
return J.kM(a)},
hV:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.R)return a
return J.kM(a)},
n4:function(a){if(typeof a=="number")return J.c8.prototype
if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bQ.prototype
return a},
ql:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bQ.prototype
return a},
aS:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.R)return a
return J.kM(a)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eh(a).q(a,b)},
lS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n4(a).K(a,b)},
lT:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bU(a).h(a,b)},
la:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.n9(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hV(a).m(a,b,c)},
nD:function(a,b,c){return J.aS(a).hf(a,b,c)},
nE:function(a,b,c,d){return J.aS(a).hz(a,b,c,d)},
nF:function(a,b){return J.n4(a).ak(a,b)},
hY:function(a,b){return J.hV(a).L(a,b)},
el:function(a,b){return J.hV(a).H(a,b)},
nG:function(a){return J.aS(a).gaj(a)},
nH:function(a){return J.aS(a).gbE(a)},
nI:function(a){return J.aS(a).gdO(a)},
lb:function(a){return J.eh(a).gI(a)},
aK:function(a){return J.hV(a).gV(a)},
aT:function(a){return J.bU(a).gl(a)},
lU:function(a){return J.hV(a).iq(a)},
nJ:function(a,b){return J.aS(a).iu(a,b)},
nK:function(a){return J.ql(a).iC(a)},
cD:function(a){return J.eh(a).i(a)},
b:function b(){},
eH:function eH(){},
cW:function cW(){},
bj:function bj(){},
f4:function f4(){},
bQ:function bQ(){},
aX:function aX(){},
w:function w(a){this.$ti=a},
iC:function iC(a){this.$ti=a},
ap:function ap(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c8:function c8(){},
cV:function cV(){},
eI:function eI(){},
bi:function bi(){}},P={
oH:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qa()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cz(new P.k0(q),1)).observe(s,{childList:true})
return new P.k_(q,s,r)}else if(self.setImmediate!=null)return P.qb()
return P.qc()},
oI:function(a){self.scheduleImmediate(H.cz(new P.k1(a),0))},
oJ:function(a){self.setImmediate(H.cz(new P.k2(a),0))},
oK:function(a){P.lp(C.m,a)},
lp:function(a,b){var s=C.c.a6(a.a,1000)
return P.oU(s<0?0:s,b)},
mm:function(a,b){var s=C.c.a6(a.a,1000)
return P.oV(s<0?0:s,b)},
oU:function(a,b){var s=new P.e3()
s.eW(a,b)
return s},
oV:function(a,b){var s=new P.e3()
s.eX(a,b)
return s},
rx:function(a){return new P.cu(a,1)},
oN:function(){return C.a5},
oO:function(a){return new P.cu(a,3)},
pE:function(a,b){return new P.e0(a,b.M("e0<0>"))},
q_:function(){var s,r
for(s=$.cx;s!=null;s=$.cx){$.ee=null
r=s.b
$.cx=r
if(r==null)$.ed=null
s.a.$0()}},
q5:function(){$.lF=!0
try{P.q_()}finally{$.ee=null
$.lF=!1
if($.cx!=null)$.lR().$1(P.n_())}},
q3:function(a){var s=new P.fQ(a),r=$.ed
if(r==null){$.cx=$.ed=s
if(!$.lF)$.lR().$1(P.n_())}else $.ed=r.b=s},
q4:function(a){var s,r,q,p=$.cx
if(p==null){P.q3(a)
$.ee=$.ed
return}s=new P.fQ(a)
r=$.ee
if(r==null){s.b=p
$.cx=$.ee=s}else{q=r.b
s.b=q
$.ee=r.b=s
if(q==null)$.ed=s}},
ml:function(a,b){var s=$.aR
if(s===C.f)return P.lp(a,b)
return P.lp(a,s.hF(b))},
oz:function(a,b){var s=$.aR
if(s===C.f)return P.mm(a,b)
return P.mm(a,s.dK(b,t.aF))},
mW:function(a,b,c,d,e){P.q4(new P.kE(d,e))},
q0:function(a,b,c,d){var s,r=$.aR
if(r===c)return d.$0()
$.aR=c
s=r
try{r=d.$0()
return r}finally{$.aR=s}},
q1:function(a,b,c,d,e){var s,r=$.aR
if(r===c)return d.$1(e)
$.aR=c
s=r
try{r=d.$1(e)
return r}finally{$.aR=s}},
k0:function k0(a){this.a=a},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
e3:function e3(){this.c=0},
kj:function kj(a,b){this.a=a
this.b=b},
ki:function ki(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cu:function cu(a,b){this.a=a
this.b=b},
bS:function bS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e0:function e0(a,b){this.a=a
this.$ti=b},
fQ:function fQ(a){this.a=a
this.b=null},
ci:function ci(){},
fm:function fm(){},
kq:function kq(){},
kE:function kE(a,b){this.a=a
this.b=b},
k7:function k7(){},
k8:function k8(a,b){this.a=a
this.b=b},
k9:function k9(a,b,c){this.a=a
this.b=b
this.c=c},
o6:function(a,b){return new H.Z(a.M("@<0>").bi(b).M("Z<1,2>"))},
o7:function(a,b,c){return H.qk(a,new H.Z(b.M("@<0>").bi(c).M("Z<1,2>")))},
X:function(a,b){return new H.Z(a.M("@<0>").bi(b).M("Z<1,2>"))},
d_:function(a){return new P.dP(a.M("dP<0>"))},
lu:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oP:function(a,b){var s=new P.dQ(a,b)
s.c=a.e
return s},
o0:function(a,b,c){var s,r
if(P.lG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.a([],t.s)
$.an.push(a)
try{P.pD(a,s)}finally{if(0>=$.an.length)return H.d($.an,-1)
$.an.pop()}r=P.mj(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
lg:function(a,b,c){var s,r
if(P.lG(a))return b+"..."+c
s=new P.a0(b)
$.an.push(a)
try{r=s
r.a=P.mj(r.a,a,", ")}finally{if(0>=$.an.length)return H.d($.an,-1)
$.an.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lG:function(a){var s,r
for(s=$.an.length,r=0;r<s;++r)if(a===$.an[r])return!0
return!1},
pD:function(a,b){var s,r,q,p,o,n,m,l=a.gV(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.z(l.gC(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.u()){if(j<=4){b.push(H.z(p))
return}r=H.z(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.u();p=o,o=n){n=l.gC(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.z(p)
r=H.z(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
o8:function(a,b,c){var s=P.o6(b,c)
a.H(0,new P.iH(s,b,c))
return s},
m5:function(a,b){var s,r,q=P.d_(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
lm:function(a){var s,r={}
if(P.lG(a))return"{...}"
s=new P.a0("")
try{$.an.push(a)
s.a+="{"
r.a=!0
J.el(a,new P.iL(r,s))
s.a+="}"}finally{if(0>=$.an.length)return H.d($.an,-1)
$.an.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dP:function dP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k6:function k6(a){this.a=a
this.c=this.b=null},
dQ:function dQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cU:function cU(){},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(){},
k:function k(){},
d4:function d4(){},
iL:function iL(a,b){this.a=a
this.b=b},
M:function M(){},
hJ:function hJ(){},
d5:function d5(){},
co:function co(a,b){this.a=a
this.$ti=b},
dl:function dl(){},
dX:function dX(){},
dR:function dR(){},
e8:function e8(){},
ea:function ea(){},
oC:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oD(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oD:function(a,b,c,d){var s=a?$.nv():$.nu()
if(s==null)return null
if(0===c&&d===b.length)return P.ms(s,b)
return P.ms(s,b.subarray(c,P.bn(c,d,b.length)))},
ms:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ao(r)}return null},
lW:function(a,b,c,d,e,f){if(C.c.bv(f,4)!==0)throw H.c(P.a9("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a9("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a9("Invalid base64 padding, more than two '=' characters",a,b))},
pk:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pj:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.bU(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jN:function jN(){},
jM:function jM(){},
i3:function i3(){},
i4:function i4(){},
es:function es(){},
eu:function eu(){},
im:function im(){},
iA:function iA(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
iz:function iz(a){this.a=a},
jK:function jK(){},
jO:function jO(){},
ko:function ko(a){this.b=0
this.c=a},
jL:function jL(a){this.a=a},
kn:function kn(a){this.a=a
this.b=16
this.c=0},
kR:function(a,b){var s=H.ma(a,b)
if(s!=null)return s
throw H.c(P.a9(a,null,null))},
nY:function(a){if(a instanceof H.bF)return a.i(0)
return"Instance of '"+H.dj(a)+"'"},
d2:function(a,b,c,d){var s,r=c?J.lh(a,d):J.o2(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iI:function(a,b,c){var s,r=H.a([],c.M("w<0>"))
for(s=J.aK(a);s.u();)r.push(s.gC(s))
if(b)return r
return J.li(r)},
o9:function(a,b,c){var s,r,q=J.lh(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
fo:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bn(b,c,r)
return H.mb(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.on(a,b,P.bn(b,c,a.length))
return P.ow(a,b,c)},
ow:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.ac(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.ac(c,b,a.length,o,o))
r=J.aK(a)
for(q=0;q<b;++q)if(!r.u())throw H.c(P.ac(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gC(r))
else for(q=b;q<c;++q){if(!r.u())throw H.c(P.ac(c,b,q,o,o))
p.push(r.gC(r))}return H.mb(p)},
oo:function(a){return new H.eJ(a,H.o5(a,!1,!0,!1,!1,!1))},
mj:function(a,b,c){var s=J.aK(b)
if(!s.u())return a
if(c.length===0){do a+=H.z(s.gC(s))
while(s.u())}else{a+=H.z(s.gC(s))
for(;s.u();)a=a+c+H.z(s.gC(s))}return a},
mp:function(){var s=H.oe()
if(s!=null)return P.oB(s)
throw H.c(P.D("'Uri.base' is not supported"))},
km:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nB().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghV().ct(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aE(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nV:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nW:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ex:function(a){if(a>=10)return""+a
return"0"+a},
m0:function(a){return new P.bG(1000*a)},
iq:function(a){if(typeof a=="number"||H.kA(a)||null==a)return J.cD(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nY(a)},
i_:function(a){return new P.eo(a)},
bX:function(a){return new P.aL(!1,null,null,a)},
fa:function(a,b){return new P.dk(null,null,!0,a,b,"Value not in range")},
ac:function(a,b,c,d,e){return new P.dk(b,c,!0,a,d,"Invalid value")},
bn:function(a,b,c){if(0>a||a>c)throw H.c(P.ac(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ac(b,a,c,"end",null))
return b}return c},
mc:function(a,b){if(a<0)throw H.c(P.ac(a,0,null,b,null))
return a},
Q:function(a,b,c,d,e){var s=e==null?J.aT(b):e
return new P.eF(s,!0,a,c,"Index out of range")},
D:function(a){return new P.fK(a)},
jD:function(a){return new P.fH(a)},
lo:function(a){return new P.ch(a)},
aO:function(a){return new P.et(a)},
f:function(a){return new P.h3(a)},
a9:function(a,b,c){return new P.iw(a,b,c)},
lP:function(a){H.qz(a)},
oB:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.F(a5,4)^58)*3|C.a.F(a5,0)^100|C.a.F(a5,1)^97|C.a.F(a5,2)^116|C.a.F(a5,3)^97)>>>0
if(s===0)return P.mo(a4<a4?C.a.t(a5,0,a4):a5,5,a3).gex()
else if(s===32)return P.mo(C.a.t(a5,5,a4),0,a3).gex()}r=P.d2(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mX(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.mX(a5,0,q,20,r)===20)r[7]=q
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.aa(a5,"..",n)))h=m>n+2&&C.a.aa(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.aa(a5,"file",0)){if(p<=0){if(!C.a.aa(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.t(a5,n,a4)
q-=0
i=s-0
m+=i
l+=i
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=C.a.bb(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.aa(a5,"http",0)){if(i&&o+3===n&&C.a.aa(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.bb(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.aa(a5,"https",0)){if(i&&o+4===n&&C.a.aa(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.bb(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.t(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.ho(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.pd(a5,0,q)
else{if(q===0)P.cv(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.pe(a5,d,p-1):""
b=P.pa(a5,p,o,!1)
i=o+1
if(i<n){a=H.ma(C.a.t(a5,i,n),a3)
a0=P.pc(a==null?H.h(P.a9("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pb(a5,n,m,a3,j,b!=null)
a2=m<l?P.lB(a5,m+1,l,a3):a3
return new P.bT(j,c,b,a0,a1,a2,l<a4?P.p9(a5,l+1,a4):a3)},
mr:function(a){var s=t.N
return C.b.i1(H.a(a.split("&"),t.s),P.X(s,s),new P.jI(C.e))},
oA:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jF(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.Y(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.kR(C.a.t(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.kR(C.a.t(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
mq:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.jG(a),c=new P.jH(d,a)
if(a.length<2)d.$1("address is too short")
s=H.a([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.Y(a,r)
if(n===58){if(r===b){++r
if(C.a.Y(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gaz(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.oA(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.b2(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
mK:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cv:function(a,b,c){throw H.c(P.a9(c,a,b))},
pc:function(a,b){if(a!=null&&a===P.mK(b))return null
return a},
pa:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.Y(a,b)===91){s=c-1
if(C.a.Y(a,s)!==93)P.cv(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.p7(a,r,s)
if(q<s){p=q+1
o=P.mP(a,C.a.aa(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mq(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.Y(a,n)===58){q=C.a.bI(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mP(a,C.a.aa(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mq(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.pg(a,b,c)},
p7:function(a,b,c){var s=C.a.bI(a,"%",b)
return s>=b&&s<c?s:c},
mP:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a0(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.Y(a,s)
if(p===37){o=P.lC(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a0("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.cv(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a0("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.Y(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.t(a,r,s)
if(i==null){i=new P.a0("")
n=i}else n=i
n.a+=j
n.a+=P.lA(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pg:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.Y(a,s)
if(o===37){n=P.lC(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a0("")
l=C.a.t(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.t(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.x,m)
m=(C.x[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a0("")
if(r<s){q.a+=C.a.t(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.cv(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.Y(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a0("")
m=q}else m=q
m.a+=l
m.a+=P.lA(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pd:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mM(C.a.F(a,b)))P.cv(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.F(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cv(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.p6(r?a.toLowerCase():a)},
p6:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pe:function(a,b,c){return P.e9(a,b,c,C.Y,!1)},
pb:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.e9(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a2(s,"/"))s="/"+s
return P.pf(s,e,f)},
pf:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a2(a,"/"))return P.ph(a,!s||c)
return P.pi(a)},
lB:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bX("Both query and queryParameters specified"))
return P.e9(a,b,c,C.k,!0)}if(d==null)return null
s=new P.a0("")
r.a=""
d.H(0,new P.kk(new P.kl(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
p9:function(a,b,c){return P.e9(a,b,c,C.k,!0)},
lC:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.Y(a,b+1)
r=C.a.Y(a,n)
q=H.kN(s)
p=H.kN(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.b2(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aE(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
lA:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.F(k,a>>>4)
s[2]=C.a.F(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.hp(a,6*q)&63|r
if(o>=p)return H.d(s,o)
s[o]=37
m=o+1
l=C.a.F(k,n>>>4)
if(m>=p)return H.d(s,m)
s[m]=l
l=o+2
m=C.a.F(k,n&15)
if(l>=p)return H.d(s,l)
s[l]=m
o+=3}}return P.fo(s,0,null)},
e9:function(a,b,c,d,e){var s=P.mO(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
mO:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.Y(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lC(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cv(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.Y(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.lA(o)}}if(p==null){p=new P.a0("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.z(m)
if(typeof l!=="number")return H.n7(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mN:function(a){if(C.a.a2(a,"."))return!0
return C.a.e7(a,"/.")!==-1},
pi:function(a){var s,r,q,p,o,n,m
if(!P.mN(a))return a
s=H.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.G(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
ph:function(a,b){var s,r,q,p,o,n
if(!P.mN(a))return!b?P.mL(a):a
s=H.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaz(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaz(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.mL(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
mL:function(a){var s,r,q,p=a.length
if(p>=2&&P.mM(C.a.F(a,0)))for(s=1;s<p;++s){r=C.a.F(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.ad(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
p8:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.F(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bX("Invalid URL encoding"))}}return s},
lD:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.F(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.t(a,b,c)
else p=new H.r(C.a.t(a,b,c))}else{p=H.a([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.F(a,o)
if(r>127)throw H.c(P.bX("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bX("Truncated URI"))
p.push(P.p8(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.ct(p)},
mM:function(a){var s=a|32
return 97<=s&&s<=122},
mo:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.a([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.F(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a9(k,a,r))}}if(q<0&&r>b)throw H.c(P.a9(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.F(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaz(j)
if(p!==44||r!==n+7||!C.a.aa(a,"base64",n+1))throw H.c(P.a9("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.H.i8(0,a,m,s)
else{l=P.mO(a,m,s,C.k,!0)
if(l!=null)a=C.a.bb(a,m,s,l)}return new P.jE(a,j,c)},
po:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.a(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.kx(h)
q=new P.ky()
p=new P.kz()
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
mX:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.nC()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.d(m,d)
q=m[d]
p=C.a.F(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.d(e,n)
e[n]=r}return d},
a_:function a_(a,b){this.a=a
this.b=b},
bG:function bG(a){this.a=a},
ii:function ii(){},
ij:function ij(){},
L:function L(){},
eo:function eo(a){this.a=a},
fA:function fA(){},
f_:function f_(){},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dk:function dk(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eF:function eF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fK:function fK(a){this.a=a},
fH:function fH(a){this.a=a},
ch:function ch(a){this.a=a},
et:function et(a){this.a=a},
f2:function f2(){},
dq:function dq(){},
ev:function ev(a){this.a=a},
h3:function h3(a){this.a=a},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(){},
eG:function eG(){},
ak:function ak(){},
R:function R(){},
a0:function a0(a){this.a=a},
jI:function jI(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
jH:function jH(a,b){this.a=a
this.b=b},
bT:function bT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kl:function kl(a,b){this.a=a
this.b=b},
kk:function kk(a){this.a=a},
jE:function jE(a,b,c){this.a=a
this.b=b
this.c=c},
kx:function kx(a){this.a=a},
ky:function ky(){},
kz:function kz(){},
ho:function ho(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fW:function fW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qg:function(a){var s,r,q,p
if(t.x.b(a)){s=J.nI(a)
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
return new P.e5(r,q,p)},
qf:function(a){if(a instanceof P.e5)return{data:a.a,height:a.b,width:a.c}
return a},
bw:function(a){var s,r,q,p,o
if(a==null)return null
s=P.X(t.N,t.A)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
mS:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kA(a))return a
if(t.f.b(a))return P.n0(a)
if(t.r.b(a)){s=[]
J.el(a,new P.kv(s))
a=s}return a},
n0:function(a){var s={}
J.el(a,new P.kF(s))
return s},
kd:function kd(){},
kf:function kf(a,b){this.a=a
this.b=b},
kg:function kg(a,b){this.a=a
this.b=b},
e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function kv(a){this.a=a},
kF:function kF(a){this.a=a},
ke:function ke(a,b){this.a=a
this.b=b},
eB:function eB(a,b){this.a=a
this.b=b},
iu:function iu(){},
iv:function iv(){},
hm:function hm(){},
ad:function ad(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aY:function aY(){},
eM:function eM(){},
b1:function b1(){},
f0:function f0(){},
j7:function j7(){},
cg:function cg(){},
fn:function fn(){},
o:function o(){},
b3:function b3(){},
fz:function fz(){},
ha:function ha(){},
hb:function hb(){},
hi:function hi(){},
hj:function hj(){},
hw:function hw(){},
hx:function hx(){},
hF:function hF(){},
hG:function hG(){},
i1:function i1(){},
eq:function eq(){},
i2:function i2(a){this.a=a},
er:function er(){},
bc:function bc(){},
f1:function f1(){},
fS:function fS(){},
cf:function cf(){},
fi:function fi(){},
hs:function hs(){},
ht:function ht(){}},W={
lV:function(){var s=document.createElement("a")
s.toString
return s},
lc:function(){var s=document.createElement("canvas")
s.toString
return s},
nX:function(a,b,c){var s=document.body
s.toString
s=new H.b7(new W.a8(C.p.al(s,a,b,c)),new W.ik(),t.ac.M("b7<k.E>"))
return t.h.a(s.gaS(s))},
il:function(a){return"wheel"},
cP:function(a){var s,r,q="element tag unavailable"
try{s=J.aS(a)
s.gev(a)
q=s.gev(a)}catch(r){H.ao(r)}return q},
o_:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ao(s)}return q},
k5:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mB:function(a,b,c,d){var s=W.k5(W.k5(W.k5(W.k5(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a6:function(a,b,c,d){var s=new W.dN(a,b,c==null?null:W.mY(new W.k3(c),t.aD),!1)
s.hw()
return s},
mA:function(a){var s=W.lV(),r=window
s=new W.ct(new W.ka(s,r.location))
s.eQ(a)
return s},
oL:function(a,b,c,d){return!0},
oM:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
o.href=c
s=o.hostname
p=p.b
if(s==p.hostname){r=o.port
q=p.port
q.toString
if(r===q){r=o.protocol
p=p.protocol
p.toString
p=r===p}else p=!1}else p=!1
if(!p)if(s==="")if(o.port===""){p=o.protocol
p=p===":"||p===""}else p=!1
else p=!1
else p=!0
return p},
mF:function(){var s=t.N,r=P.m5(C.z,s),q=H.a(["TEMPLATE"],t.s)
s=new W.hA(r,P.d_(s),P.d_(s),P.d_(s),null)
s.eV(null,new H.d6(C.z,new W.kh(),t.dv),q,null)
return s},
mY:function(a,b){var s=$.aR
if(s===C.f)return a
return s.dK(a,b)},
v:function v(){},
hZ:function hZ(){},
em:function em(){},
en:function en(){},
bY:function bY(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
cH:function cH(){},
aM:function aM(){},
ia:function ia(){},
K:function K(){},
cL:function cL(){},
ib:function ib(){},
az:function az(){},
aW:function aW(){},
ic:function ic(){},
id:function id(){},
ie:function ie(){},
be:function be(){},
ig:function ig(){},
cM:function cM(){},
cN:function cN(){},
ey:function ey(){},
ih:function ih(){},
fT:function fT(a,b){this.a=a
this.b=b},
E:function E(){},
ik:function ik(){},
m:function m(){},
e:function e(){},
aj:function aj(){},
c3:function c3(){},
eA:function eA(){},
eC:function eC(){},
aA:function aA(){},
iy:function iy(){},
bI:function bI(){},
bJ:function bJ(){},
c5:function c5(){},
c7:function c7(){},
bK:function bK(){},
iJ:function iJ(){},
j_:function j_(){},
c9:function c9(){},
eS:function eS(){},
j0:function j0(a){this.a=a},
eT:function eT(){},
j1:function j1(a){this.a=a},
aC:function aC(){},
eU:function eU(){},
as:function as(){},
a8:function a8(a){this.a=a},
t:function t(){},
df:function df(){},
aD:function aD(){},
f6:function f6(){},
fc:function fc(){},
je:function je(a){this.a=a},
fe:function fe(){},
at:function at(){},
fg:function fg(){},
aG:function aG(){},
fh:function fh(){},
aH:function aH(){},
fl:function fl(){},
jn:function jn(a){this.a=a},
al:function al(){},
bp:function bp(){},
dr:function dr(){},
fp:function fp(){},
fq:function fq(){},
cj:function cj(){},
au:function au(){},
ah:function ah(){},
fs:function fs(){},
ft:function ft(){},
jt:function jt(){},
av:function av(){},
bP:function bP(){},
fy:function fy(){},
jy:function jy(){},
b5:function b5(){},
jJ:function jJ(){},
fN:function fN(){},
bs:function bs(){},
cr:function cr(){},
cs:function cs(){},
fU:function fU(){},
dM:function dM(){},
h7:function h7(){},
dS:function dS(){},
hr:function hr(){},
hy:function hy(){},
fR:function fR(){},
h0:function h0(a){this.a=a},
lf:function lf(a,b){this.a=a
this.$ti=b},
dN:function dN(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k3:function k3(a){this.a=a},
lt:function lt(a){this.$ti=a},
ct:function ct(a){this.a=a},
P:function P(){},
dg:function dg(a){this.a=a},
j4:function j4(a){this.a=a},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
dY:function dY(){},
kb:function kb(){},
kc:function kc(){},
hA:function hA(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kh:function kh(){},
hz:function hz(){},
cR:function cR(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ka:function ka(a,b){this.a=a
this.b=b},
hK:function hK(a){this.a=a
this.b=0},
kp:function kp(a){this.a=a},
fV:function fV(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h4:function h4(){},
h5:function h5(){},
h8:function h8(){},
h9:function h9(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hk:function hk(){},
hl:function hl(){},
hn:function hn(){},
dZ:function dZ(){},
e_:function e_(){},
hp:function hp(){},
hq:function hq(){},
hv:function hv(){},
hB:function hB(){},
hC:function hC(){},
e1:function e1(){},
e2:function e2(){},
hD:function hD(){},
hE:function hE(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){}},K={
S:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.f("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.F(a,0)
r=C.a.F(b,0)
if(s>r){q=r
r=s
s=q}return new K.f9(s,r)},
aU:function aU(){},
cT:function cT(){},
ag:function ag(a){this.a=a},
f9:function f9(a,b){this.a=a
this.b=b},
u:function u(a){this.a=a}},L={
jw:function(){var s=t.N
return new L.jv(P.X(s,t.dl),P.X(s,t.f7),P.d_(s))},
fj:function fj(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
fx:function fx(a,b){this.b=a
this.c=b},
jv:function jv(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dv:function dv(a,b){this.b=a
this.c=!1
this.a=b}},O={
ld:function(a){return new O.aq(H.a([],a.M("w<0>")),a.M("aq<0>"))},
aq:function aq(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
db:function db(a){this.a=a
this.b=null},
eR:function(a,b){return new O.d9(new V.a1(0,0,0),a,b,new A.ay(!1,!1,!1))},
d7:function d7(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(){},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(){},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(){},
iY:function iY(a,b){this.a=a
this.b=b},
iZ:function iZ(){},
iM:function iM(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
d8:function d8(){},
iN:function iN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
d9:function d9(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iP:function iP(a){this.b=a},
iQ:function iQ(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iR:function iR(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
ds:function ds(){}},E={
mx:function(){var s=window.navigator.vendor
s.toString
if(C.a.B(s,"Google"))return C.F
s=window.navigator.userAgent
s.toString
if(C.a.B(s,"Firefox"))return C.q
s=window.navigator.appVersion
s.toString
if(C.a.B(s,"Trident")||C.a.B(s,"Edge"))return C.r
s=window.navigator.appName
s.toString
if(C.a.B(s,"Microsoft"))return C.r
return C.G},
my:function(){var s=window.navigator.appVersion
s.toString
if(C.a.B(s,"Win"))return C.a0
if(C.a.B(s,"Mac"))return C.A
if(C.a.B(s,"Linux"))return C.a1
return C.a2},
op:function(a,b){var s
Date.now()
s=t.fA
s=new E.ja(a,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1),new O.db(H.a([],s)),new O.db(H.a([],s)),new O.db(H.a([],s)),H.a([null],t.bc),P.X(t.N,t.fg))
s.eO(a,b)
return s},
oy:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.mk(a,!0,!0,!0,!1)
s=W.lc()
r=s.style
r.width="100%"
r.height="100%"
J.nH(a).n(0,s)
return E.mk(s,!0,!0,!0,!1)},
mk:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.A,l=t.gW.a(C.i.d1(a,"webgl2",P.o7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.op(l,a)
H.kt(l.getParameter(3379))
m=H.kt(l.getParameter(34076))
r=H.a([],t.g9)
q=$.io
p=new X.fM(a,r,(q==null?$.io=new E.h1(E.mx(),E.my()):q).a===C.q?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.a6(o,"contextmenu",p.gfC(),!1))
r.push(W.a6(a,"focus",p.gfI(),!1))
r.push(W.a6(a,"blur",p.gfu(),!1))
r.push(W.a6(o,"keyup",p.gfM(),!1))
r.push(W.a6(o,"keydown",p.gfK(),!1))
r.push(W.a6(a,"mousedown",p.gfQ(),!1))
r.push(W.a6(a,"mouseup",p.gfU(),!1))
r.push(W.a6(a,n,p.gfS(),!1))
W.il(a)
W.il(a)
r.push(W.a6(a,W.il(a),p.gfW(),!1))
r.push(W.a6(o,n,p.gfE(),!1))
r.push(W.a6(o,"mouseup",p.gfG(),!1))
r.push(W.a6(o,"pointerlockchange",p.gfY(),!1))
r.push(W.a6(a,"touchstart",p.gha(),!1))
r.push(W.a6(a,"touchend",p.gh6(),!1))
r.push(W.a6(a,"touchmove",p.gh8(),!1))
m=new E.fv(a,s,new T.jq(l,m),p,new P.a_(Date.now(),!1))
m.dr()
return m},
i5:function i5(){},
bH:function bH(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
c_:function c_(a){this.b=a},
cd:function cd(a){this.b=a},
h1:function h1(a,b){this.a=a
this.b=b},
ja:function ja(a,b,c,d,e,f,g,h){var _=this
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
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
fv:function fv(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.Q=null
_.cx=!1
_.cy=e
_.db=0},
js:function js(a){this.a=a}},Z={
ls:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cw(c)),35044)
a.bindBuffer(b,null)
return new Z.fO(b,s)},
aJ:function(a){return new Z.br(a)},
fO:function fO(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jZ:function jZ(a){this.a=a},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a){this.a=a}},D={
O:function(){return new D.c2()},
i7:function i7(){},
c2:function c2(){var _=this
_.c=_.b=_.a=null
_.d=0},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
W:function W(){},
bg:function bg(){},
bh:function bh(){},
H:function H(a,b,c){this.c=a
this.d=b
this.e=c},
c1:function c1(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cY:function cY(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={cG:function cG(a,b){this.a=a
this.b=b},eL:function eL(a,b){this.a=a
this.b=b},iE:function iE(a,b){this.c=a
this.d=b},d3:function d3(a,b,c){this.x=a
this.c=b
this.d=c},iK:function iK(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},ca:function ca(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},j2:function j2(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},cb:function cb(a,b,c){this.x=a
this.c=b
this.d=c},f8:function f8(){},du:function du(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jx:function jx(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fM:function fM(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
nZ:function(a){var s=new V.ax(0,0,0,1),r=$.mf
if(r==null){r=V.me(0,0,1,1)
$.mf=r}return new X.ix(s,r)},
ix:function ix(a,b){this.a=a
this.r=b
this.x=null},
f3:function f3(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jp:function jp(){}},V={
hW:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qG:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bv(a-b,s)
return(a<0?a+s:a)+b},
C:function(a,b,c){$.F().toString
return C.a.ao(C.d.cY(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cB:function(a,b,c){var s,r,q,p,o,n,m,l=H.a([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.F().toString
n=C.a.ao(C.d.cY(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.ao(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
lO:function(a){return C.d.iA(Math.pow(2,C.d.cI(Math.log(a)/Math.log(2))))},
aP:function(){var s=$.m8
return s==null?$.m8=V.b0(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
b0:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m7:function(a,b,c){var s=c.D(),r=b.aK(s).D(),q=s.aK(r),p=new V.x(a.a,a.b,a.c)
return V.b0(r.a,q.a,s.a,r.be(0).a8(p),r.b,q.b,s.b,q.be(0).a8(p),r.c,q.c,s.c,s.be(0).a8(p),0,0,0,1)},
ln:function(){var s=$.b2
return s==null?$.b2=new V.N(0,0,0):s},
me:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.fb(a,b,c,d)},
dK:function(){var s=$.mv
return s==null?$.mv=new V.x(0,0,0):s},
oF:function(){var s=$.jP
return s==null?$.jP=new V.x(-1,0,0):s},
lr:function(){var s=$.jQ
return s==null?$.jQ=new V.x(0,1,0):s},
dJ:function(){var s=$.jR
return s==null?$.jR=new V.x(0,0,1):s},
oE:function(a,b,c){return new V.x(a,b,c)},
oG:function(){var s=$.mw
return s==null?$.mw=new V.bq(0,0,0,0):s},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(){},
da:function da(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bl:function bl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fb:function fb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(a,b){this.a=a
this.b=b},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qA:function(a){P.oz(C.R,new V.l5(a))},
or:function(a){var s,r,q,p,o,n=document,m=n.body
if(m==null)throw H.c(P.f("The html document body was null."))
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
W.a6(n,"scroll",new V.jk(s),!1)
return new V.ji(o)},
aN:function aN(){},
l5:function l5(a){this.a=a},
ew:function ew(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eD:function eD(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eE:function eE(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
f5:function f5(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ji:function ji(a){this.a=a
this.b=null},
jk:function jk(a){this.a=a},
jj:function jj(a){this.a=a},
jl:function jl(a){this.a=a}},U={
i9:function(){return new U.i8()},
m_:function(a){var s=V.aP(),r=new U.cI(s)
if(!s.q(0,a))r.a=a
return r},
i8:function i8(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cI:function cI(a){this.a=a
this.b=null},
c4:function c4(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a2:function a2(){},
dG:function dG(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
dH:function dH(a,b,c,d,e){var _=this
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
dI:function dI(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={ez:function ez(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
ob:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gau(a5)+a6.gau(a6)+a7.gau(a7)+a8.gau(a8)+a9.gau(a9)+b0.gau(b0)+b1.gau(b1)+b2.gau(b2)+b3.gau(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.q)(b4),++r)a+="_"+b4[r].a}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.q)(b5),++r)a+="_"+b5[r].a}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.q)(b6),++r)a+="_"+b6[r].a}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.q)(b7),++r)a+="_"+b7[r].a}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.bA()
if(h){s=$.bz()
b=new Z.br(b.a|s.a)}if(g)b=new Z.br(b.a|$.by().a)
if(f)b=new Z.br(b.a|$.bB().a)
if(e)b=new Z.br(b.a|$.bx().a)
return new A.iO(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
kC:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
kD:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.kC(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hX(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
pJ:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kC(b,r,"emission")
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
pF:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kD(b,r,"ambient")
b.a+="\n"},
pH:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kD(b,r,"diffuse")
r=b.a+="\n"
r+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = dot(norm, -litVec);\n"
b.a=r
r+=u.q
b.a=r
r+="   return diffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
pK:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kD(b,r,"invDiffuse")
r=b.a+="\n"
r+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=r
r+=u.q
b.a=r
r+="   return invDiffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
pQ:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kD(b,r,"specular")
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
r+=u.q
b.a=r
r+="   return specularColor*pow(scalar, shininess);\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
pM:function(a,b){var s,r,q
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
pO:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kC(b,r,"reflect")
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
pP:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kC(b,r,"refract")
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
pG:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hX(r)
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
p+=u.M
c.a=p
p+=u.b
c.a=p
c.a=p+"\n"}p=t.s
o=H.a([],p)
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
o=H.a([],p)
s=a.b
if(!s.a)s=s.c
else s=!0
if(s)o.push("ambientColor")
if(a.dx){c.a+=u.h
o.push("highLight")
s=c.a+="   vec3 litPnt  = "+r+"ClosestPoint(lit);\n"
s+="   vec3 litView = (viewMat*vec4(litPnt, 1.0)).xyz;\n"
c.a=s
s+="   vec3 normDir = normalize(viewPos - litView);\n"
c.a=s
s+="   vec3 intensity = "+r+"Intensity(normDir, litPnt, lit);\n"
c.a=s
c.a=s+"   if(length(intensity) > 0.0001) {\n"
n=H.a([],p)
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
c.a=s+u.N
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
pI:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.hX(r)
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
p=c.a+="uniform "+q+" "+r+"s["+j+"];\n"
if(s)for(o=0;o<j;++o)p=c.a+="uniform sampler2D "+r+"sTexture2D"+o+";\n"
p+="\n"
c.a=p
n=s?", sampler2D txt2D":""
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+n+")\n"
c.a=p
c.a=p+"{\n"
p=t.s
m=H.a([],p)
l=a.b
if(!l.a)l=l.c
else l=!0
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.h
k=H.a([],p)
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
p+=u.N
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
pN:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hX(r)
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
if(m){p+=u.M
c.a=p
p+=u.b
c.a=p
p+="\n"
c.a=p}if(o)p=c.a=p+"   vec3 invNormDir = lit.invViewRotMat*normDir;\n"
if(n){p+="   float depth = dot(textureCube(shadowCube, invNormDir), lit.shadowAdj);\n"
c.a=p
p+=u.S
c.a=p
p+=u.U
c.a=p
c.a=p+"\n"}p=t.s
j=H.a([],p)
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
j=H.a([],p)
m=a.b
if(!m.a)m=m.c
else m=!0
if(m)j.push("ambientColor")
if(a.dx){c.a+=u.h
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
m=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
m+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=m
c.a=m+"   if(length(intensity) > 0.0001) {\n"
i=H.a([],p)
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
p+=u.N
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
pR:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hX(r)
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
if(l){s+=u.M
c.a=s
s+=u.b
c.a=s
s=c.a=s+"\n"}s+="   vec3 normDir = normalize(dir);\n"
c.a=s
s+="   float zScale = dot(normDir, lit.objDir);\n"
c.a=s
s+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
if(m){s=$.io
if(s==null)s=$.io=new E.h1(E.mx(),E.my())
p=c.a
if(s.b===C.A){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
s+=u.S
c.a=s
s+=u.U
c.a=s
c.a=s+"\n"}s=t.s
h=H.a([],s)
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
h=H.a([],s)
p=a.b
if(!p.a)p=p.c
else p=!0
if(p)h.push("ambientColor")
if(a.dx){c.a+=u.h
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
p=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
p+="   if(length(intensity) > 0.0001) {\n"
c.a=p
c.a=p+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=H.a([],s)
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
s+=u.N
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
pL:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.a([],t.s)
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
pS:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j=new P.a0(""),i=""+"precision mediump float;\n"
j.a=i
i=j.a=i+"\n"
s=a.k4
if(s){i+="varying vec3 normalVec;\n"
j.a=i}if(a.r1){i+="varying vec3 binormalVec;\n"
j.a=i}if(a.r2){i+="varying vec2 txt2D;\n"
j.a=i}if(a.rx){i+="varying vec3 txtCube;\n"
j.a=i}if(a.k2){i+="varying vec3 objPos;\n"
j.a=i}i=j.a=(a.k3?j.a=i+"varying vec3 viewPos;\n":i)+"\n"
r=a.y1
if(r){i+="uniform mat4 colorMat;\n"
j.a=i}if(a.go){i+="uniform mat4 viewMat;\n"
j.a=i}if(a.dy)i=j.a=i+"uniform mat4 invViewMat;\n"
j.a=i+"\n"
A.pJ(a,j)
A.pF(a,j)
A.pH(a,j)
A.pK(a,j)
A.pQ(a,j)
i=a.db
if(i){q=j.a+="// === Environmental ===\n"
q+="\n"
j.a=q
q+="uniform samplerCube envSampler;\n"
j.a=q
j.a=q+"\n"
A.pO(a,j)
A.pP(a,j)}A.pM(a,j)
q=j.a+="// === Alpha ===\n"
q=j.a=q+"\n"
p=a.y
o=p.a
if(o){q+="uniform float alpha;\n"
j.a=q}p=p.c
q=(p?j.a=q+"uniform samplerCube alphaTxt;\n":q)+"float alphaValue()\n"
j.a=q
q=j.a=q+"{\n"
if(!o)n=p
else n=!0
if(!n)q=j.a=q+"   return 1.0;\n"
else if(p){if(o){q+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
j.a=q}else{q+="   float a = textureCube(alphaTxt, txtCube).a;\n"
j.a=q}q+="   if (a <= 0.000001) discard;\n"
j.a=q
q+="   return a;\n"
j.a=q}else if(o){q+="   return alpha;\n"
j.a=q}q+="}\n"
j.a=q
j.a=q+"\n"
q=a.k1
if(q){for(p=a.z,o=p.length,m=0;m<p.length;p.length===o||(0,H.q)(p),++m)A.pG(a,p[m],j)
for(p=a.Q,o=p.length,m=0;m<p.length;p.length===o||(0,H.q)(p),++m)A.pI(a,p[m],j)
for(p=a.ch,o=p.length,m=0;m<p.length;p.length===o||(0,H.q)(p),++m)A.pN(a,p[m],j)
for(p=a.cx,o=p.length,m=0;m<p.length;p.length===o||(0,H.q)(p),++m)A.pR(a,p[m],j)
A.pL(a,j)}p=j.a+="// === Main ===\n"
p+="\n"
j.a=p
p+="void main()\n"
j.a=p
p+="{\n"
j.a=p
p=j.a=p+"   float alpha = alphaValue();\n"
s=s?j.a=p+"   vec3 norm = normal();\n":p
if(i)j.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=H.a([],t.s)
if(q){j.a+=u.N
l.push("lightAccum")
i=a.b
if(!i.a)i=i.c
else i=!0
if(i)j.a+="   setAmbientColor();\n"
i=a.c
if(!i.a)i=i.c
else i=!0
if(i)j.a+="   setDiffuseColor();\n"
i=a.d
if(!i.a)i=i.c
else i=!0
if(i)j.a+="   setInvDiffuseColor();\n"
i=a.e
if(!i.a)i=i.c
else i=!0
if(i)j.a+="   setSpecularColor();\n"
for(i=a.z,s=i.length,m=0;m<i.length;i.length===s||(0,H.q)(i),++m){q="barLight"+i[m].a
if(0>=q.length)return H.d(q,0)
j.a+=k+(q[0].toUpperCase()+C.a.ad(q,1))+"Values(norm);\n"}for(i=a.Q,s=i.length,m=0;m<i.length;i.length===s||(0,H.q)(i),++m){q="dirLight"+i[m].a
if(0>=q.length)return H.d(q,0)
j.a+=k+(q[0].toUpperCase()+C.a.ad(q,1))+"Values(norm);\n"}for(i=a.ch,s=i.length,m=0;m<i.length;i.length===s||(0,H.q)(i),++m){q="pointLight"+i[m].a
if(0>=q.length)return H.d(q,0)
j.a+=k+(q[0].toUpperCase()+C.a.ad(q,1))+"Values(norm);\n"}for(i=a.cx,s=i.length,m=0;m<i.length;i.length===s||(0,H.q)(i),++m){q="spotLight"+i[m].a
if(0>=q.length)return H.d(q,0)
j.a+=k+(q[0].toUpperCase()+C.a.ad(q,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}i=a.a
if(!i.a)i=i.c
else i=!0
if(i)l.push("emissionColor()")
i=a.r
if(!i.a)i=i.c
else i=!0
if(i)l.push("reflect(refl)")
i=a.x
if(!i.a)i=i.c
else i=!0
if(i)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
i=j.a+="   vec4 objClr = vec4("+C.b.j(l," + ")+", alpha);\n"
if(r)i=j.a=i+"   objClr = colorMat*objClr;\n"
i+="   gl_FragColor = objClr;\n"
j.a=i
i=j.a=i+"}\n"
return i.charCodeAt(0)==0?i:i},
pT:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.b5+"];\n"
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
pV:function(a,b){var s
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
pU:function(a,b){var s
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
pX:function(a,b){var s,r
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
pY:function(a,b){var s,r
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
pW:function(a,b){var s
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
pZ:function(a,b){var s
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
hX:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ad(a,1)},
lq:function(a,b,c,d,e){var s=new A.fB(H.a([],t.t),a,c,e)
s.f=d
s.e=P.d2(d,0,!1,t.S)
return s},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a){this.a=a},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.e1=_.iR=_.e0=_.e_=_.iQ=_.dZ=_.dY=_.dX=_.iP=_.dW=_.dV=_.dU=_.iO=_.dT=_.dS=_.iN=_.dR=_.bH=_.bG=_.b5=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cz=c
_.cA=d
_.cB=e
_.cC=f
_.cD=g
_.cE=h
_.cF=i
_.cG=j
_.iU=_.iT=_.iS=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
bb:function bb(a,b){this.a=a
this.b=b},
bd:function bd(a,b){this.a=a
this.b=b},
bm:function bm(a,b){this.a=a
this.b=b},
bo:function bo(a,b){this.a=a
this.b=b},
iO:function iO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.b5=b5
_.bG=b6
_.bH=b7},
dz:function dz(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dA:function dA(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dC:function dC(a,b,c,d,e,f,g,h,i,j){var _=this
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
dF:function dF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dm:function dm(){},
a4:function a4(){},
jC:function jC(a){this.a=a},
cl:function cl(a,b,c){this.a=a
this.c=b
this.d=c},
fD:function fD(a,b,c){this.a=a
this.c=b
this.d=c},
fE:function fE(a,b,c){this.a=a
this.c=b
this.d=c},
fF:function fF(a,b,c){this.a=a
this.c=b
this.d=c},
fB:function fB(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
dw:function dw(a,b,c){this.a=a
this.c=b
this.d=c},
fC:function fC(a,b,c){this.a=a
this.c=b
this.d=c},
dx:function dx(a,b,c){this.a=a
this.c=b
this.d=c},
dy:function dy(a,b,c){this.a=a
this.c=b
this.d=c},
fG:function fG(a,b,c){this.a=a
this.c=b
this.d=c},
dB:function dB(a,b,c){this.a=a
this.c=b
this.d=c},
cm:function cm(a,b,c){this.a=a
this.c=b
this.d=c},
dD:function dD(a,b,c){this.a=a
this.c=b
this.d=c},
dE:function dE(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lJ:function(a,b,c,d){var s=F.jg()
F.eb(s,b,c,d,a,1,0,0,1)
F.eb(s,b,c,d,a,0,1,0,3)
F.eb(s,b,c,d,a,0,0,1,2)
F.eb(s,b,c,d,a,-1,0,0,0)
F.eb(s,b,c,d,a,0,-1,0,0)
F.eb(s,b,c,d,a,0,0,-1,3)
s.ar()
return s},
kw:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
eb:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.x(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.x(s+a4,r+a2,q+a3)
o=new V.x(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.x(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.kw(h)
j=F.kw(g)
a.b9(F.l8(a0,a1,new F.kr(i,F.kw(f),F.kw(e),j,k,c),b))},
n3:function(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a1<3)throw H.c(P.f("Must have 3 or more sizes for a disk."))
s=F.jg()
r=b?-1:1
q=-6.283185307179586/a1
p=t.k
o=H.a([],p)
n=s.gX()
m=new V.x(0,0,r).D()
o.push(n.hC(new V.bN(a,-1,-1,-1),new V.ax(1,1,1,1),new V.N(0,0,c),new V.x(0,0,r),new V.T(0.5,0.5),m))
for(l=0;l<=a1;++l){k=q*l
j=r*Math.sin(k)
i=Math.cos(k)
h=a0.$1(l/a1)
n=s.a
if(n==null)n=s.a=new F.y(s,H.a([],p))
m=new V.x(j,i,r).D()
if(j<0)g=0
else g=j>1?1:j
f=i<0
if(f)e=0
else e=i>1?1:i
if(f)f=0
else f=i>1?1:i
d=F.cq(new V.bN(a,-1,-1,-1),null,new V.ax(g,e,f,1),new V.N(j*h,i*h,c),new V.x(0,0,r),new V.T(j*0.5+0.5,i*0.5+0.5),m,null,0)
n.n(0,d)
o.push(d)}s.gR().hA(o)
return s},
n1:function(a,b,c){return F.qh(!0,a,1,new F.kG(1,c),b)},
qh:function(a,b,c,d,e){var s
if(e<3)throw H.c(P.f("Must have 3 or more sizes for a cylindrical shape."))
if(c<1)throw H.c(P.f("Must have 1 or more divisionss for a cylindrical shape."))
s=F.l8(c,e,new F.kI(d),null)
s.ar()
s.bD()
if(b)s.b9(F.n3(3,!1,1,new F.kJ(d),e))
s.b9(F.n3(1,!0,-1,new F.kK(d),e))
return s},
qv:function(a,b){var s=F.l8(a,b,new F.kU(),null)
s.gR().bO()
s.ar()
s.bD()
return s},
ai:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
b=b.D()
s=b.a
r=b.b
q=b.c
p=F.cq(h,h,h,new V.N(s,r,q),b,h,h,h,0)
o=a.hX(p,new F.dL())
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
p.sas(0,new V.ax(n,m,l,1))
k=Math.sqrt(s*s+r*r)
j=Math.atan2(r,s)/1.5707963267948966
if(j<0)j=-j
i=Math.atan2(k,q)/3.141592653589793
p.scW(new V.T(j,i<0?-i:i))
a.gX().n(0,p)
return p},
V:function(a,b,c,d,e){var s,r,q,p,o,n,m
if(e<=0)a.gR().bC(0,b,d,c)
else{s=b.r
if(s==null)s=V.dJ()
r=c.r
if(r==null)r=V.dJ()
q=d.r
if(q==null)q=V.dJ()
p=F.ai(a,s.T(0,r).K(0,0.5))
o=F.ai(a,r.T(0,q).K(0,0.5))
n=F.ai(a,q.T(0,s).K(0,0.5))
m=e-1
F.V(a,b,p,n,m)
F.V(a,p,c,o,m)
F.V(a,o,n,p,m)
F.V(a,n,o,d,m)}},
nd:function(a,b){var s=F.lJ(a,null,new F.l6(1,new F.l7()),b)
s.bD()
return s},
qF:function(){return F.n2(15,30,0.5,1,new F.l9())},
qu:function(){return F.n2(12,120,0.3,1,new F.kT(3,2))},
n2:function(a,b,c,d,e){var s=F.l8(a,b,new F.kH(e,d,b,c),null)
s.ar()
s.bD()
return s},
l8:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.jg()
r=t.k
q=H.a([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.y(s,H.a([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.cq(d,d,new V.ax(m,0,0,1),d,d,new V.T(o,1),d,d,0)
n.n(0,l)
c.$3(l,o,0)
q.push(l.cu(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.y(s,H.a([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.cq(d,d,new V.ax(g,f,e,1),d,d,new V.T(o,j),d,d,0)
h.n(0,l)
c.$3(l,o,k)
q.push(l.cu(a0))}}s.gR().hB(a+1,b+1,q)
return s},
jg:function(){return new F.jf()},
cq:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cp()
h=$.nw()
s=$.bA()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bz().a)!==0)q.r=e
if((r&$.by().a)!==0)q.x=b
if((r&$.bW().a)!==0)q.y=f
if((r&$.bB().a)!==0)q.z=g
if((r&$.nx().a)!==0)q.Q=c
if((r&$.cC().a)!==0)q.ch=i
if((r&$.bx().a)!==0)q.cx=a
return q},
kr:function kr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kG:function kG(a,b){this.a=a
this.b=b},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kU:function kU(){},
l7:function l7(){},
l6:function l6(a,b){this.a=a
this.b=b},
l9:function l9(){},
kT:function kT(a,b){this.a=a
this.b=b},
kH:function kH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ar:function ar(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
it:function it(){},
jm:function jm(){},
eN:function eN(){this.b=this.a=null},
iF:function iF(){},
jB:function jB(){},
f7:function f7(){this.a=null},
jf:function jf(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
jh:function jh(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dn:function dn(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
bO:function bO(a,b){this.a=a
this.b=b},
cp:function cp(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jY:function jY(a){this.a=a},
jX:function jX(a){this.a=a},
y:function y(a,b){this.a=a
this.b=!1
this.c=b},
am:function am(a,b,c){this.b=a
this.c=b
this.d=c},
jS:function jS(a,b){this.a=a
this.b=b},
jT:function jT(a,b){this.a=a
this.b=b},
aI:function aI(a,b){this.b=a
this.c=b},
jV:function jV(){},
dL:function dL(){},
jW:function jW(){},
jU:function jU(){},
j5:function j5(){},
b6:function b6(a){this.b=a}},T={dt:function dt(){},fu:function fu(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},jq:function jq(a,b){var _=this
_.a=a
_.c=b
_.e=_.d=0},jr:function jr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
qx:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="modifiers",a1=V.or("Test 011"),a2=W.lc()
a2.className="pageLargeCanvas"
a2.id=b
a1.a.appendChild(a2).toString
s=t.s
a1.dE(H.a(["A test of the Material Lighting shader with cube textures and ","a directional light. The cube textures are for ambient, diffuse, ","and specular."],s))
a1.hy(H.a(["shapes"],s))
a1.dE(H.a(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(b)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.oy(r,!0,!0,!0,!1)
p=t.f4
o=O.ld(p)
n=new E.bH(o)
o.bw(n.gi9(),n.gic())
n.sac(0,a)
n.sbr(a)
n.sac(0,F.nd(8,8))
o=new U.c4(V.aP(),H.a([],t.eJ))
o.bw(o.gfl(),o.gh2())
m=q.x
l=U.i9()
k=U.i9()
j=$.bR
if(j==null)j=$.bR=new V.a7(0,0)
j=new U.dH(l,k,new X.aa(!1,!1,!1),j,V.aP())
l.sd0(0,!0)
l.scL(6.283185307179586)
l.scN(0)
l.sZ(0,0)
l.scM(100)
l.sa1(0)
l.scv(0.5)
i=j.gb0()
l.gv().n(0,i)
k.sd0(0,!0)
k.scL(6.283185307179586)
k.scN(0)
k.sZ(0,0)
k.scM(100)
k.sa1(0)
k.scv(0.5)
k.gv().n(0,i)
l=new X.aa(!1,!1,!1)
if(!j.d.q(0,l)){h=j.d
j.d=l
j.U(new D.H(a0,h,l))}if(!j.r){j.r=!0
j.U(new D.H("invertY",!1,!0))}j.bn(m)
o.n(0,j)
U.i9()
if($.bR==null)$.bR=new V.a7(0,0)
V.aP()
l=U.i9()
k=$.bR
if(k==null)k=$.bR=new V.a7(0,0)
k=new U.dG(l,new X.aa(!1,!1,!1),k,V.aP())
l.sd0(0,!0)
l.scL(6.283185307179586)
l.scN(0)
l.sZ(0,0)
l.scM(100)
l.sa1(0)
l.scv(0.2)
l.gv().n(0,k.gb0())
l=new X.aa(!0,!1,!1)
if(!k.c.q(0,l)){h=k.c
k.c=l
k.U(new D.H(a0,h,l))}k.bn(m)
o.n(0,k)
l=new X.aa(!1,!1,!1)
k=new U.dI(l,V.aP())
j=new X.aa(!1,!1,!1)
if(!l.q(0,j)){k.b=j
k.U(new D.H(a0,l,j))}k.bn(m)
o.n(0,k)
n.sbr(o)
o=q.f
g=o.ee("../resources/earthColor")
m=O.ld(t.gc)
f=new O.d7(m)
m.bw(f.gfp(),f.gfs())
m=f.ged()
m.gv().n(0,f.gdn())
m.gec().n(0,f.gbh())
m=f.ged()
e=V.lr()
l=U.m_(V.m7(V.ln(),e,new V.x(-1,-1,-1)))
k=new V.a1(1,1,1)
j=new D.c1(new V.a1(1,1,1),V.dJ(),V.lr(),V.oF())
h=j.a
j.a=l
l.gv().n(0,j.geS())
j.aE(new D.H("mover",h,j.a))
if(!j.b.q(0,k)){h=j.b
j.b=k
j.aE(new D.H("color",h,k))}m.n(0,j)
m=f.gcn()
m.sas(0,new V.a1(0.2,0.2,0.2))
m=f.gcw()
m.sas(0,new V.a1(0.8,0.8,0.8))
f.gcn().saC(g)
f.gcw().saC(g)
f.gbU().saC(o.ee("../resources/earthSpecular"))
o=f.gbU()
o.ci(new A.ay(!0,!1,o.c.c))
o.dt(10)
p=O.ld(p)
o=new M.ez(p)
p.bw(o.gfw(),o.gfA())
d=X.nZ(a)
c=new X.f3(1.0471975511965976,0.1)
c.sbr(a)
m=c.c
$.F().toString
if(!(Math.abs(m-1.0471975511965976)<1e-9)){c.c=1.0471975511965976
c.aW(new D.H("fov",m,1.0471975511965976))}m=c.d
$.F().toString
if(!(Math.abs(m-0.1)<1e-9)){c.d=0.1
c.aW(new D.H("near",m,0.1))}m=c.e
$.F().toString
if(!(Math.abs(m-2000)<1e-9)){c.e=2000
c.aW(new D.H("far",m,2000))}m=o.b
if(m!==c){if(m!=null)m.gv().A(0,o.gav())
h=o.b
o.b=c
c.gv().n(0,o.gav())
o.aF(new D.H("camera",h,o.b))}m=o.c
if(m!==d){if(m!=null)m.gv().A(0,o.gav())
h=o.c
o.c=d
d.gv().n(0,o.gav())
o.aF(new D.H("target",h,o.c))}o.sew(a)
o.sew(f)
p.n(0,n)
p=o.b
if(p!=null)p.sbr(U.m_(V.b0(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
p=q.d
if(p!==o){if(p!=null)p.gv().A(0,q.gd7())
q.d=o
o.gv().n(0,q.gd7())
q.d8()}r=s.getElementById("shapes")
if(r==null)H.h(P.f("Failed to find shapes for RadioGroup"))
s=new V.j8("shapes",!0,r)
s.aw(0,"Cube",new R.kV(n))
s.aw(0,"Cuboid",new R.kW(n))
s.aw(0,"Cylinder",new R.kX(n))
s.aw(0,"Cone",new R.kY(n))
s.aw(0,"LatLonSphere",new R.kZ(n))
s.aw(0,"IsoSphere",new R.l_(n))
s.bC(0,"Sphere",new R.l0(n),!0)
s.aw(0,"Toroid",new R.l1(n))
s.aw(0,"Knot",new R.l2(n))
s=q.Q
if(s==null)s=q.Q=D.O()
p=s.b
s=p==null?s.b=H.a([],t.b):p
s.push(new R.l3(a1,f))
V.qA(q)},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,R]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lj.prototype={}
J.b.prototype={
q:function(a,b){return a===b},
gI:function(a){return H.di(a)},
i:function(a){return"Instance of '"+H.dj(a)+"'"}}
J.eH.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iaf:1}
J.cW.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.bj.prototype={
gI:function(a){return 0},
i:function(a){return String(a)},
$im4:1}
J.f4.prototype={}
J.bQ.prototype={}
J.aX.prototype={
i:function(a){var s=a[$.ni()]
if(s==null)return this.eJ(a)
return"JavaScript function for "+J.cD(s)},
$icS:1}
J.w.prototype={
cT:function(a,b){if(!!a.fixed$length)H.h(P.D("removeAt"))
if(b<0||b>=a.length)throw H.c(P.fa(b,null))
return a.splice(b,1)[0]},
A:function(a,b){var s
if(!!a.fixed$length)H.h(P.D("remove"))
for(s=0;s<a.length;++s)if(J.G(a[s],b)){a.splice(s,1)
return!0}return!1},
ai:function(a,b){if(!!a.fixed$length)H.h(P.D("addAll"))
this.f_(a,b)
return},
f_:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aO(a))
for(s=0;s<r;++s)a.push(b[s])},
H:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aO(a))}},
j:function(a,b){var s,r,q=a.length,p=P.d2(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.z(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
i6:function(a){return this.j(a,"")},
i0:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aO(a))}return s},
i1:function(a,b,c){return this.i0(a,b,c,t.A)},
i_:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aO(a))}throw H.c(H.iB())},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghZ:function(a){if(a.length>0)return a[0]
throw H.c(H.iB())},
gaz:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.iB())},
dF:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aO(a))}return!1},
bg:function(a,b){if(!!a.immutable$list)H.h(P.D("sort"))
H.ou(a,b==null?J.pw():b)},
eF:function(a){return this.bg(a,null)},
B:function(a,b){var s
for(s=0;s<a.length;++s)if(J.G(a[s],b))return!0
return!1},
i:function(a){return P.lg(a,"[","]")},
gV:function(a){return new J.ap(a,a.length)},
gI:function(a){return H.di(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.h(P.D("set length"))
if(b>a.length)H.ks(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cA(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.h(P.D("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cA(a,b))
a[b]=c},
$iA:1,
$in:1,
$ij:1,
$ip:1}
J.iC.prototype={}
J.ap.prototype={
gC:function(a){return H.Y(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.c8.prototype={
ak:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbK(b)
if(this.gbK(a)===s)return 0
if(this.gbK(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbK:function(a){return a===0?1/a<0:a<0},
iA:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.D(""+a+".toInt()"))},
cI:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.D(""+a+".floor()"))},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.D(""+a+".round()"))},
cY:function(a,b){var s
if(b>20)throw H.c(P.ac(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbK(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
bv:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eL:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dw(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dw(a,b)},
dw:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.D("Result of truncating division is "+H.z(s)+": "+H.z(a)+" ~/ "+b))},
b2:function(a,b){var s
if(a>0)s=this.dv(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hp:function(a,b){if(b<0)throw H.c(H.eg(b))
return this.dv(a,b)},
dv:function(a,b){return b>31?0:a>>>b},
$iI:1,
$ia5:1}
J.cV.prototype={$ii:1}
J.eI.prototype={}
J.bi.prototype={
Y:function(a,b){if(b<0)throw H.c(H.cA(a,b))
if(b>=a.length)H.h(H.cA(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.cA(a,b))
return a.charCodeAt(b)},
T:function(a,b){return a+b},
bb:function(a,b,c,d){var s=P.bn(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
aa:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.ac(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a2:function(a,b){return this.aa(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fa(b,null))
if(b>c)throw H.c(P.fa(b,null))
if(c>a.length)throw H.c(P.fa(c,null))
return a.substring(b,c)},
ad:function(a,b){return this.t(a,b,null)},
iC:function(a){return a.toLowerCase()},
K:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.O)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ao:function(a,b){var s=b-a.length
if(s<=0)return a
return this.K(" ",s)+a},
bI:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.ac(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
e7:function(a,b){return this.bI(a,b,0)},
hJ:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.ac(c,0,s,null,null))
return H.ne(a,b,c)},
B:function(a,b){return this.hJ(a,b,0)},
ak:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gI:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl:function(a){return a.length},
$iA:1,
$il:1}
H.cX.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.r.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.Y(this.a,b)}}
H.n.prototype={}
H.d1.prototype={
gV:function(a){return new H.bk(this,this.gl(this))},
bS:function(a,b){return this.eI(0,b)}}
H.bk.prototype={
gC:function(a){return H.Y(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=J.bU(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.aO(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.L(q,s);++r.c
return!0}}
H.aZ.prototype={
gV:function(a){return new H.eP(J.aK(this.a),this.b)},
gl:function(a){return J.aT(this.a)},
L:function(a,b){return this.b.$1(J.hY(this.a,b))}}
H.cO.prototype={$in:1}
H.eP.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gC(r))
return!0}s.a=null
return!1},
gC:function(a){return H.Y(this).Q[1].a(this.a)}}
H.d6.prototype={
gl:function(a){return J.aT(this.a)},
L:function(a,b){return this.b.$1(J.hY(this.a,b))}}
H.b7.prototype={
gV:function(a){return new H.fP(J.aK(this.a),this.b)}}
H.fP.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gC(s)))return!0
return!1},
gC:function(a){var s=this.a
return s.gC(s)}}
H.cQ.prototype={}
H.fJ.prototype={
m:function(a,b,c){throw H.c(P.D("Cannot modify an unmodifiable list"))}}
H.cn.prototype={}
H.cJ.prototype={
i:function(a){return P.lm(this)},
m:function(a,b,c){H.nU()},
$iJ:1}
H.cK.prototype={
gl:function(a){return this.a},
cs:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cs(0,b))return null
return this.di(b)},
di:function(a){return this.b[a]},
H:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.di(q))}}}
H.jz.prototype={
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
H.dh.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eK.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fI.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.j6.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hu.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bF.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.ng(r==null?"unknown":r)+"'"},
$icS:1,
giG:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fr.prototype={}
H.fk.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.ng(s)+"'"}}
H.bZ.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bZ))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gI:function(a){var s,r=this.c
if(r==null)s=H.di(this.a)
else s=typeof r!=="object"?J.lb(r):H.di(r)
return(s^H.di(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.z(this.d)+"' of "+("Instance of '"+H.dj(s)+"'")}}
H.fd.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.Z.prototype={
gl:function(a){return this.a},
gbJ:function(a){return this.a===0},
ga4:function(a){return new H.cZ(this,H.Y(this).M("cZ<1>"))},
giF:function(a){var s=this,r=H.Y(s)
return H.oa(s.ga4(s),new H.iD(s),r.c,r.Q[1])},
cs:function(a,b){var s=this.b
if(s==null)return!1
return this.f7(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.by(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.by(p,b)
q=r==null?n:r.b
return q}else return o.i4(b)},
i4:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.dj(p,q.e8(a))
r=q.e9(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.dc(s==null?q.b=q.cc():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.dc(r==null?q.c=q.cc():r,b,c)}else q.i5(b,c)},
i5:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.cc()
s=p.e8(a)
r=p.dj(o,s)
if(r==null)p.cj(o,s,[p.cd(a,b)])
else{q=p.e9(r,a)
if(q>=0)r[q].b=b
else r.push(p.cd(a,b))}},
H:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aO(s))
r=r.c}},
dc:function(a,b,c){var s=this.by(a,b)
if(s==null)this.cj(a,b,this.cd(b,c))
else s.b=c},
fi:function(){this.r=this.r+1&67108863},
cd:function(a,b){var s,r=this,q=new H.iG(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.fi()
return q},
e8:function(a){return J.lb(a)&0x3ffffff},
e9:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1},
i:function(a){return P.lm(this)},
by:function(a,b){return a[b]},
dj:function(a,b){return a[b]},
cj:function(a,b,c){a[b]=c},
fb:function(a,b){delete a[b]},
f7:function(a,b){return this.by(a,b)!=null},
cc:function(){var s="<non-identifier-key>",r=Object.create(null)
this.cj(r,s,r)
this.fb(r,s)
return r}}
H.iD.prototype={
$1:function(a){var s=this.a
return H.Y(s).Q[1].a(s.h(0,a))},
$S:function(){return H.Y(this.a).M("2(1)")}}
H.iG.prototype={}
H.cZ.prototype={
gl:function(a){return this.a.a},
gV:function(a){var s=this.a,r=new H.eO(s,s.r)
r.c=s.e
return r}}
H.eO.prototype={
gC:function(a){return H.Y(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aO(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kO.prototype={
$1:function(a){return this.a(a)},
$S:37}
H.kP.prototype={
$2:function(a,b){return this.a(a,b)},
$S:58}
H.kQ.prototype={
$1:function(a){return this.a(a)},
$S:49}
H.eJ.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imd:1}
H.dc.prototype={$idc:1}
H.a3.prototype={$ia3:1}
H.cc.prototype={
gl:function(a){return a.length},
$iA:1,
$iB:1}
H.bL.prototype={
h:function(a,b){H.b8(b,a,a.length)
return a[b]},
m:function(a,b,c){H.b8(b,a,a.length)
a[b]=c},
$in:1,
$ij:1,
$ip:1}
H.dd.prototype={
m:function(a,b,c){H.b8(b,a,a.length)
a[b]=c},
$in:1,
$ij:1,
$ip:1}
H.eV.prototype={
h:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.eW.prototype={
h:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.eX.prototype={
h:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.eY.prototype={
h:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.eZ.prototype={
h:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.de.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.bM.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b8(b,a,a.length)
return a[b]},
$ibM:1,
$ick:1}
H.dT.prototype={}
H.dU.prototype={}
H.dV.prototype={}
H.dW.prototype={}
H.aF.prototype={
M:function(a){return H.hI(v.typeUniverse,this,a)},
bi:function(a){return H.p4(v.typeUniverse,this,a)}}
H.h6.prototype={}
H.h2.prototype={
i:function(a){return this.a}}
H.e4.prototype={}
P.k0.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:48}
P.k_.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:46}
P.k1.prototype={
$0:function(){this.a.$0()},
$S:12}
P.k2.prototype={
$0:function(){this.a.$0()},
$S:12}
P.e3.prototype={
eW:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cz(new P.kj(this,b),0),a)
else throw H.c(P.D("`setTimeout()` not found."))},
eX:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cz(new P.ki(this,a,Date.now(),b),0),a)
else throw H.c(P.D("Periodic timer."))},
$iju:1}
P.kj.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:0}
P.ki.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eL(s,o)}q.c=p
r.d.$1(q)},
$S:12}
P.cu.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.z(this.a)+")"}}
P.bS.prototype={
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
if(r instanceof P.cu){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aK(s)
if(o instanceof P.bS){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.e0.prototype={
gV:function(a){return new P.bS(this.a())}}
P.fQ.prototype={}
P.ci.prototype={}
P.fm.prototype={}
P.kq.prototype={}
P.kE.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:0}
P.k7.prototype={
iw:function(a){var s,r,q,p=null
try{if(C.f===$.aR){a.$0()
return}P.q0(p,p,this,a)}catch(q){s=H.ao(q)
r=H.lL(q)
P.mW(p,p,this,s,r)}},
ix:function(a,b){var s,r,q,p=null
try{if(C.f===$.aR){a.$1(b)
return}P.q1(p,p,this,a,b)}catch(q){s=H.ao(q)
r=H.lL(q)
P.mW(p,p,this,s,r)}},
iy:function(a,b){return this.ix(a,b,t.A)},
hF:function(a){return new P.k8(this,a)},
dK:function(a,b){return new P.k9(this,a,b)}}
P.k8.prototype={
$0:function(){return this.a.iw(this.b)},
$S:0}
P.k9.prototype={
$1:function(a){return this.a.iy(this.b,a)},
$S:function(){return this.c.M("~(0)")}}
P.dP.prototype={
gV:function(a){var s=new P.dQ(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
B:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.f6(b)
return r}},
f6:function(a){var s=this.d
if(s==null)return!1
return this.c3(s[this.c_(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dd(s==null?q.b=P.lu():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dd(r==null?q.c=P.lu():r,b)}else return q.eZ(0,b)},
eZ:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lu()
s=q.c_(b)
r=p[s]
if(r==null)p[s]=[q.bZ(b)]
else{if(q.c3(r,b)>=0)return!1
r.push(q.bZ(b))}return!0},
A:function(a,b){if((b&1073741823)===b)return this.hd(this.c,b)
else return this.hc(0,b)},
hc:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.c_(b)
r=n[s]
q=o.c3(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dA(p)
return!0},
dd:function(a,b){if(a[b]!=null)return!1
a[b]=this.bZ(b)
return!0},
hd:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dA(s)
delete a[b]
return!0},
de:function(){this.r=this.r+1&1073741823},
bZ:function(a){var s,r=this,q=new P.k6(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.de()
return q},
dA:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.de()},
c_:function(a){return J.lb(a)&1073741823},
c3:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1}}
P.k6.prototype={}
P.dQ.prototype={
gC:function(a){return H.Y(this).c.a(this.d)},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aO(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cU.prototype={}
P.iH.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:15}
P.d0.prototype={$in:1,$ij:1,$ip:1}
P.k.prototype={
gV:function(a){return new H.bk(a,this.gl(a))},
L:function(a,b){return this.h(a,b)},
H:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.aO(a))}},
gbJ:function(a){return this.gl(a)===0},
iB:function(a,b){var s,r,q,p,o=this
if(o.gbJ(a)){s=J.lh(0,H.b9(a).M("k.E"))
return s}r=o.h(a,0)
q=P.d2(o.gl(a),r,!0,H.b9(a).M("k.E"))
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
cX:function(a){return this.iB(a,!0)},
hW:function(a,b,c,d){var s
H.b9(a).M("k.E").a(d)
P.bn(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.lg(a,"[","]")}}
P.d4.prototype={}
P.iL.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.z(a)
r.a=s+": "
r.a+=H.z(b)},
$S:45}
P.M.prototype={
H:function(a,b){var s,r,q
for(s=J.aK(this.ga4(a)),r=H.b9(a).M("M.V");s.u();){q=s.gC(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.aT(this.ga4(a))},
i:function(a){return P.lm(a)},
$iJ:1}
P.hJ.prototype={
m:function(a,b,c){throw H.c(P.D("Cannot modify unmodifiable map"))}}
P.d5.prototype={
h:function(a,b){return J.lT(this.a,b)},
m:function(a,b,c){J.la(this.a,b,c)},
H:function(a,b){J.el(this.a,b)},
gl:function(a){return J.aT(this.a)},
i:function(a){return J.cD(this.a)},
$iJ:1}
P.co.prototype={}
P.dl.prototype={
ai:function(a,b){var s
for(s=J.aK(b);s.u();)this.n(0,s.gC(s))},
i:function(a){return P.lg(this,"{","}")},
L:function(a,b){var s,r,q,p,o="index"
H.qd(b,o,t.S)
P.mc(b,o)
for(s=P.oP(this,this.r),r=H.Y(s).c,q=0;s.u();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.Q(b,this,o,null,q))}}
P.dX.prototype={$in:1,$ij:1}
P.dR.prototype={}
P.e8.prototype={}
P.ea.prototype={}
P.jN.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ao(r)}return null},
$S:17}
P.jM.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ao(r)}return null},
$S:17}
P.i3.prototype={
i8:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bn(a3,a4,a2.length)
s=$.nz()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.F(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.kN(C.a.F(a2,k))
g=H.kN(C.a.F(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.d(s,f)
e=s[f]
if(e>=0){f=C.a.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a0("")
d=o}else d=o
c=d.a+=C.a.t(a2,p,q)
d.a=c+H.aE(j)
p=k
continue}}throw H.c(P.a9("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.t(a2,p,a4)
d=r.length
if(n>=0)P.lW(a2,m,a4,n,l,d)
else{b=C.c.bv(d-1,4)+1
if(b===1)throw H.c(P.a9(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.bb(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.lW(a2,m,a4,n,l,a)
else{b=C.c.bv(a,4)
if(b===1)throw H.c(P.a9(a0,a2,a4))
if(b>1)a2=C.a.bb(a2,a4,a4,b===2?"==":"=")}return a2}}
P.i4.prototype={}
P.es.prototype={}
P.eu.prototype={}
P.im.prototype={}
P.iA.prototype={
i:function(a){return this.a}}
P.iz.prototype={
f8:function(a,b,c){var s,r,q,p,o,n,m,l=null
for(s=a.length,r=this.a,q=r.e,p=r.d,r=r.c,o=b,n=l;o<c;++o){if(o>=s)return H.d(a,o)
switch(a[o]){case"&":m="&amp;"
break
case'"':m=r?"&quot;":l
break
case"'":m=p?"&#39;":l
break
case"<":m="&lt;"
break
case">":m="&gt;"
break
case"/":m=q?"&#47;":l
break
default:m=l}if(m!=null){if(n==null)n=new P.a0("")
if(o>b)n.a+=C.a.t(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.a.t(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.jK.prototype={
ghV:function(){return C.P}}
P.jO.prototype={
ct:function(a){var s,r,q,p=P.bn(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.ko(r)
if(q.fd(a,0,p)!==p){C.a.Y(a,p-1)
q.cm()}return new Uint8Array(r.subarray(0,H.pn(0,q.b,s)))}}
P.ko.prototype={
cm:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
hx:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.d(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(q>=o)return H.d(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=s&63|128
return!0}else{n.cm()
return!1}},
fd:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.Y(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.F(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hx(p,C.a.F(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.cm()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.d(s,o)
s[o]=p>>>6|192
l.b=m+1
s[m]=p&63|128}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=p>>>12|224
o=l.b=m+1
if(m>=r)return H.d(s,m)
s[m]=p>>>6&63|128
l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=p&63|128}}}return q}}
P.jL.prototype={
ct:function(a){var s=this.a,r=P.oC(s,a,0,null)
if(r!=null)return r
return new P.kn(s).hK(a,0,null,!0)}}
P.kn.prototype={
hK:function(a,b,c,d){var s,r,q,p,o=this,n=P.bn(b,c,J.aT(a))
if(b===n)return""
s=P.pj(a,b,n)
r=o.c0(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.pk(q)
o.b=0
throw H.c(P.a9(p,a,b+o.c))}return r},
c0:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a6(b+c,2)
r=q.c0(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.c0(a,s,c,d)}return q.hP(a,b,c,d)},
hP:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a0(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.F("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.F(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aE(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aE(j)
break
case 65:g.a+=H.aE(j);--f
break
default:p=g.a+=H.aE(j)
g.a=p+H.aE(j)
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
g.a+=H.aE(a[l])}else g.a+=P.fo(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aE(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.a_.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.a_&&this.a===b.a&&!0},
ak:function(a,b){return C.c.ak(this.a,b.a)},
gI:function(a){var s=this.a
return(s^C.c.b2(s,30))&1073741823},
i:function(a){var s=this,r=P.nV(H.ol(s)),q=P.ex(H.oj(s)),p=P.ex(H.of(s)),o=P.ex(H.og(s)),n=P.ex(H.oi(s)),m=P.ex(H.ok(s)),l=P.nW(H.oh(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bG.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bG&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
ak:function(a,b){return C.c.ak(this.a,b.a)},
i:function(a){var s,r,q,p=new P.ij(),o=this.a
if(o<0)return"-"+new P.bG(0-o).i(0)
s=p.$1(C.c.a6(o,6e7)%60)
r=p.$1(C.c.a6(o,1e6)%60)
q=new P.ii().$1(o%1e6)
return""+C.c.a6(o,36e8)+":"+s+":"+r+"."+q}}
P.ii.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:30}
P.ij.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:30}
P.L.prototype={}
P.eo.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.iq(s)
return"Assertion failed"}}
P.fA.prototype={}
P.f_.prototype={
i:function(a){return"Throw of null."}}
P.aL.prototype={
gc2:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc1:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gc2()+o+m
if(!q.a)return l
s=q.gc1()
r=P.iq(q.b)
return l+s+": "+r}}
P.dk.prototype={
gc2:function(){return"RangeError"},
gc1:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.z(q):""
else if(q==null)s=": Not greater than or equal to "+H.z(r)
else if(q>r)s=": Not in inclusive range "+H.z(r)+".."+H.z(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.z(r)
return s}}
P.eF.prototype={
gc2:function(){return"RangeError"},
gc1:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.fK.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fH.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.ch.prototype={
i:function(a){return"Bad state: "+this.a}}
P.et.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iq(s)+"."}}
P.f2.prototype={
i:function(a){return"Out of Memory"},
$iL:1}
P.dq.prototype={
i:function(a){return"Stack Overflow"},
$iL:1}
P.ev.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.h3.prototype={
i:function(a){return"Exception: "+this.a}}
P.iw.prototype={
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
i=""}h=C.a.t(d,k,l)
return f+j+h+i+"\n"+C.a.K(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.z(e)+")"):f}}
P.j.prototype={
bS:function(a,b){return new H.b7(this,b,H.Y(this).M("b7<j.E>"))},
gl:function(a){var s,r=this.gV(this)
for(s=0;r.u();)++s
return s},
gaS:function(a){var s,r=this.gV(this)
if(!r.u())throw H.c(H.iB())
s=r.gC(r)
if(r.u())throw H.c(H.o1())
return s},
L:function(a,b){var s,r,q
P.mc(b,"index")
for(s=this.gV(this),r=0;s.u();){q=s.gC(s)
if(b===r)return q;++r}throw H.c(P.Q(b,this,"index",null,r))},
i:function(a){return P.o0(this,"(",")")}}
P.eG.prototype={}
P.ak.prototype={
gI:function(a){return P.R.prototype.gI.call(C.U,this)},
i:function(a){return"null"}}
P.R.prototype={constructor:P.R,$iR:1,
q:function(a,b){return this===b},
gI:function(a){return H.di(this)},
i:function(a){return"Instance of '"+H.dj(this)+"'"},
toString:function(){return this.i(this)}}
P.a0.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jI.prototype={
$2:function(a,b){var s,r,q,p=C.a.e7(b,"=")
if(p===-1){if(b!=="")J.la(a,P.lD(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.ad(b,p+1)
q=this.a
J.la(a,P.lD(s,0,s.length,q,!0),P.lD(r,0,r.length,q,!0))}return a},
$S:44}
P.jF.prototype={
$2:function(a,b){throw H.c(P.a9("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.jG.prototype={
$2:function(a,b){throw H.c(P.a9("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.jH.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kR(C.a.t(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:41}
P.bT.prototype={
gcl:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?""+o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.z(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.h(H.ll("_text"))}return o},
gI:function(a){var s=this,r=s.z
if(r==null){r=C.a.gI(s.gcl())
if(s.z==null)s.z=r
else r=H.h(H.ll("hashCode"))}return r},
gcS:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.co(P.mr(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.h(H.ll("queryParameters"))}return r},
gey:function(){return this.b},
gcJ:function(a){var s=this.c
if(s==null)return""
if(C.a.a2(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbM:function(a){var s=this.d
return s==null?P.mK(this.a):s},
gcR:function(a){var s=this.f
return s==null?"":s},
ge2:function(){var s=this.r
return s==null?"":s},
es:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a2(s,"/"))s="/"+s
q=s
p=P.lB(null,0,0,b)
return new P.bT(n,l,j,k,q,p,o.r)},
ge3:function(){return this.c!=null},
ge6:function(){return this.f!=null},
ge4:function(){return this.r!=null},
i:function(a){return this.gcl()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbT())if(q.c!=null===b.ge3())if(q.b===b.gey())if(q.gcJ(q)===b.gcJ(b))if(q.gbM(q)===b.gbM(b))if(q.e===b.geo(b)){s=q.f
r=s==null
if(!r===b.ge6()){if(r)s=""
if(s===b.gcR(b)){s=q.r
r=s==null
if(!r===b.ge4()){if(r)s=""
s=s===b.ge2()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifL:1,
gbT:function(){return this.a},
geo:function(a){return this.e}}
P.kl.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.km(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.km(C.h,b,C.e,!0)}},
$S:40}
P.kk.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aK(b),r=this.a;s.u();)r.$2(a,s.gC(s))},
$S:6}
P.jE.prototype={
gex:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bI(s,"?",m)
q=s.length
if(r>=0){p=P.e9(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fW("data","",n,n,P.e9(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kx.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.a_.hW(s,0,96,b)
return s},
$S:39}
P.ky.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.F(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.kz.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.F(b,0),r=C.a.F(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.ho.prototype={
ge3:function(){return this.c>0},
ge5:function(){return this.c>0&&this.d+1<this.e},
ge6:function(){return this.f<this.r},
ge4:function(){return this.r<this.a.length},
gbT:function(){var s=this.x
return s==null?this.x=this.f5():s},
f5:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a2(r.a,"http"))return"http"
if(q===5&&C.a.a2(r.a,"https"))return"https"
if(s&&C.a.a2(r.a,"file"))return"file"
if(q===7&&C.a.a2(r.a,"package"))return"package"
return C.a.t(r.a,0,q)},
gey:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcJ:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbM:function(a){var s,r=this
if(r.ge5())return P.kR(C.a.t(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a2(r.a,"http"))return 80
if(s===5&&C.a.a2(r.a,"https"))return 443
return 0},
geo:function(a){return C.a.t(this.a,this.e,this.f)},
gcR:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
ge2:function(){var s=this.r,r=this.a
return s<r.length?C.a.ad(r,s+1):""},
gcS:function(){var s=this
if(s.f>=s.r)return C.Z
return new P.co(P.mr(s.gcR(s)),t.dw)},
es:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbT(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.ge5()?n.gbM(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a2(r,"/"))r="/"+r
p=P.lB(m,0,0,b)
q=n.r
o=q<j.length?C.a.ad(j,q+1):m
return new P.bT(l,i,s,h,r,p,o)},
gI:function(a){var s=this.y
return s==null?this.y=C.a.gI(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifL:1}
P.fW.prototype={}
W.v.prototype={}
W.hZ.prototype={
gl:function(a){return a.length}}
W.em.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.en.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bY.prototype={$ibY:1}
W.bC.prototype={$ibC:1}
W.bD.prototype={$ibD:1}
W.bE.prototype={
d1:function(a,b,c){if(c!=null)return a.getContext(b,P.n0(c))
return a.getContext(b)},
eB:function(a,b){return this.d1(a,b,null)},
$ibE:1}
W.cH.prototype={$icH:1}
W.aM.prototype={
gl:function(a){return a.length}}
W.ia.prototype={
gl:function(a){return a.length}}
W.K.prototype={$iK:1}
W.cL.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ib.prototype={}
W.az.prototype={}
W.aW.prototype={}
W.ic.prototype={
gl:function(a){return a.length}}
W.id.prototype={
gl:function(a){return a.length}}
W.ie.prototype={
gl:function(a){return a.length}}
W.be.prototype={$ibe:1}
W.ig.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cM.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.cN.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.z(r)+", "
s=a.top
s.toString
return r+H.z(s)+") "+H.z(this.gaR(a))+" x "+H.z(this.gaL(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.aS(b)
if(s===r.gbL(b)){s=a.top
s.toString
s=s===r.gbP(b)&&this.gaR(a)===r.gaR(b)&&this.gaL(a)===r.gaL(b)}else s=!1}else s=!1
return s},
gI:function(a){var s,r=a.left
r.toString
r=C.d.gI(r)
s=a.top
s.toString
return W.mB(r,C.d.gI(s),C.d.gI(this.gaR(a)),C.d.gI(this.gaL(a)))},
gdM:function(a){var s=a.bottom
s.toString
return s},
gdk:function(a){return a.height},
gaL:function(a){var s=this.gdk(a)
s.toString
return s},
gbL:function(a){var s=a.left
s.toString
return s},
gcV:function(a){var s=a.right
s.toString
return s},
gbP:function(a){var s=a.top
s.toString
return s},
gdC:function(a){return a.width},
gaR:function(a){var s=this.gdC(a)
s.toString
return s},
$iad:1}
W.ey.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.ih.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.fT.prototype={
gbJ:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gV:function(a){var s=this.cX(this)
return new J.ap(s,s.length)}}
W.E.prototype={
gaj:function(a){return new W.h0(a)},
gbE:function(a){var s=a.children
s.toString
return new W.fT(a,s)},
gdN:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.ad(p,s,r,q,t.I)},
i:function(a){var s=a.localName
s.toString
return s},
al:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.m2
if(s==null){s=H.a([],t.Q)
r=new W.dg(s)
s.push(W.mA(null))
s.push(W.mF())
$.m2=r
d=r}else d=s
s=$.m1
if(s==null){s=new W.hK(d)
$.m1=s
c=s}else{s.a=d
c=s}}if($.bf==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.bf=r
r=r.createRange()
r.toString
$.le=r
r=$.bf.createElement("base")
t.cR.a(r)
s=s.baseURI
s.toString
r.href=s
$.bf.head.appendChild(r).toString}s=$.bf
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.bf
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.bf.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.b.B(C.X,s)}else s=!1
if(s){$.le.selectNodeContents(q)
s=$.le
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.bf.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.bf.body)J.lU(q)
c.d2(p)
document.adoptNode(p).toString
return p},
hN:function(a,b,c){return this.al(a,b,c,null)},
eC:function(a,b){var s
a.textContent=null
s=a.appendChild(this.al(a,b,null,null))
s.toString},
gev:function(a){var s=a.tagName
s.toString
return s},
$iE:1}
W.ik.prototype={
$1:function(a){return t.h.b(a)},
$S:24}
W.m.prototype={$im:1}
W.e.prototype={
hz:function(a,b,c,d){if(c!=null)this.f0(a,b,c,!1)},
f0:function(a,b,c,d){return a.addEventListener(b,H.cz(c,1),!1)},
$ie:1}
W.aj.prototype={$iaj:1}
W.c3.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1,
$ic3:1}
W.eA.prototype={
gl:function(a){return a.length}}
W.eC.prototype={
gl:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.iy.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.bI.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.bJ.prototype={
gdO:function(a){var s=a.data
s.toString
return s},
$ibJ:1}
W.c5.prototype={$ic5:1}
W.c7.prototype={$ic7:1}
W.bK.prototype={$ibK:1}
W.iJ.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.j_.prototype={
gl:function(a){return a.length}}
W.c9.prototype={$ic9:1}
W.eS.prototype={
h:function(a,b){return P.bw(a.get(b))},
H:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bw(s.value[1]))}},
ga4:function(a){var s=H.a([],t.s)
this.H(a,new W.j0(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Not supported"))},
$iJ:1}
W.j0.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.eT.prototype={
h:function(a,b){return P.bw(a.get(b))},
H:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bw(s.value[1]))}},
ga4:function(a){var s=H.a([],t.s)
this.H(a,new W.j1(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Not supported"))},
$iJ:1}
W.j1.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.aC.prototype={$iaC:1}
W.eU.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.as.prototype={$ias:1}
W.a8.prototype={
gaS:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.lo("No elements"))
if(r>1)throw H.c(P.lo("More than one element"))
s=s.firstChild
s.toString
return s},
ai:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gV:function(a){var s=this.a.childNodes
return new W.cR(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.t.prototype={
iq:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
iu:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nD(s,b,a)}catch(q){H.ao(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eH(a):s},
hf:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$it:1}
W.df.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.aD.prototype={
gl:function(a){return a.length},
$iaD:1}
W.f6.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.fc.prototype={
h:function(a,b){return P.bw(a.get(b))},
H:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bw(s.value[1]))}},
ga4:function(a){var s=H.a([],t.s)
this.H(a,new W.je(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Not supported"))},
$iJ:1}
W.je.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.fe.prototype={
gl:function(a){return a.length}}
W.at.prototype={$iat:1}
W.fg.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.aG.prototype={$iaG:1}
W.fh.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.aH.prototype={
gl:function(a){return a.length},
$iaH:1}
W.fl.prototype={
h:function(a,b){return a.getItem(H.ku(b))},
m:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga4:function(a){var s=H.a([],t.s)
this.H(a,new W.jn(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iJ:1}
W.jn.prototype={
$2:function(a,b){return this.a.push(a)},
$S:50}
W.al.prototype={$ial:1}
W.bp.prototype={$ibp:1}
W.dr.prototype={
al:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bV(a,b,c,d)
s=W.nX("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a8(r).ai(0,new W.a8(s))
return r}}
W.fp.prototype={
al:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bV(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a8(C.C.al(r,b,c,d))
r=new W.a8(r.gaS(r))
new W.a8(s).ai(0,new W.a8(r.gaS(r)))
return s}}
W.fq.prototype={
al:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bV(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a8(C.C.al(r,b,c,d))
new W.a8(s).ai(0,new W.a8(r.gaS(r)))
return s}}
W.cj.prototype={$icj:1}
W.au.prototype={$iau:1}
W.ah.prototype={$iah:1}
W.fs.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.ft.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.jt.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.av.prototype={$iav:1}
W.bP.prototype={$ibP:1}
W.fy.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.jy.prototype={
gl:function(a){return a.length}}
W.b5.prototype={}
W.jJ.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fN.prototype={
gl:function(a){return a.length}}
W.bs.prototype={
ghR:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.D("deltaY is not supported"))},
ghQ:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.D("deltaX is not supported"))},
$ibs:1}
W.cr.prototype={
hh:function(a,b){var s=a.requestAnimationFrame(H.cz(b,1))
s.toString
return s},
fc:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cs.prototype={$ics:1}
W.fU.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.dM.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.z(r)+", "
s=a.top
s.toString
s=r+H.z(s)+") "
r=a.width
r.toString
r=s+H.z(r)+" x "
s=a.height
s.toString
return r+H.z(s)},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.aS(b)
if(s===r.gbL(b)){s=a.top
s.toString
if(s===r.gbP(b)){s=a.width
s.toString
if(s===r.gaR(b)){s=a.height
s.toString
r=s===r.gaL(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gI:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gI(p)
s=a.top
s.toString
s=C.d.gI(s)
r=a.width
r.toString
r=C.d.gI(r)
q=a.height
q.toString
return W.mB(p,s,r,C.d.gI(q))},
gdk:function(a){return a.height},
gaL:function(a){var s=a.height
s.toString
return s},
gdC:function(a){return a.width},
gaR:function(a){var s=a.width
s.toString
return s}}
W.h7.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.dS.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.hr.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.hy.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.fR.prototype={
H:function(a,b){var s,r,q,p,o
for(s=this.ga4(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,H.ku(q.getAttribute(o)))}},
ga4:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.a([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.d(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.h0.prototype={
h:function(a,b){return this.a.getAttribute(H.ku(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga4(this).length}}
W.lf.prototype={}
W.dN.prototype={
hw:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nE(s,this.c,r,!1)}}}
W.k3.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.lt.prototype={}
W.ct.prototype={
eQ:function(a){var s
if($.dO.gbJ($.dO)){for(s=0;s<262;++s)$.dO.m(0,C.W[s],W.qn())
for(s=0;s<12;++s)$.dO.m(0,C.n[s],W.qo())}},
b3:function(a){return $.nA().B(0,W.cP(a))},
ax:function(a,b,c){var s=$.dO.h(0,W.cP(a)+"::"+b)
if(s==null)s=$.dO.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaQ:1}
W.P.prototype={
gV:function(a){return new W.cR(a,this.gl(a))}}
W.dg.prototype={
b3:function(a){return C.b.dF(this.a,new W.j4(a))},
ax:function(a,b,c){return C.b.dF(this.a,new W.j3(a,b,c))},
$iaQ:1}
W.j4.prototype={
$1:function(a){return a.b3(this.a)},
$S:26}
W.j3.prototype={
$1:function(a){return a.ax(this.a,this.b,this.c)},
$S:26}
W.dY.prototype={
eV:function(a,b,c,d){var s,r,q
this.a.ai(0,c)
s=b.bS(0,new W.kb())
r=b.bS(0,new W.kc())
this.b.ai(0,s)
q=this.c
q.ai(0,C.v)
q.ai(0,r)},
b3:function(a){return this.a.B(0,W.cP(a))},
ax:function(a,b,c){var s=this,r=W.cP(a),q=s.c
if(q.B(0,r+"::"+b))return s.d.hD(c)
else if(q.B(0,"*::"+b))return s.d.hD(c)
else{q=s.b
if(q.B(0,r+"::"+b))return!0
else if(q.B(0,"*::"+b))return!0
else if(q.B(0,r+"::*"))return!0
else if(q.B(0,"*::*"))return!0}return!1},
$iaQ:1}
W.kb.prototype={
$1:function(a){return!C.b.B(C.n,a)},
$S:27}
W.kc.prototype={
$1:function(a){return C.b.B(C.n,a)},
$S:27}
W.hA.prototype={
ax:function(a,b,c){if(this.eK(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.B(0,b)
return!1}}
W.kh.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:35}
W.hz.prototype={
b3:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cP(a)==="foreignObject")return!1
if(s)return!0
return!1},
ax:function(a,b,c){if(b==="is"||C.a.a2(b,"on"))return!1
return this.b3(a)},
$iaQ:1}
W.cR.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lT(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gC:function(a){return H.Y(this).c.a(this.d)}}
W.ka.prototype={}
W.hK.prototype={
d2:function(a){var s,r=new W.kp(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
bm:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.lU(a)
else b.removeChild(a).toString},
hl:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.nG(a)
j=k.a.getAttribute("is")
p=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var i=c.childNodes
if(c.lastChild&&c.lastChild!==i[i.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var h=0
if(c.children)h=c.children.length
for(var g=0;g<h;g++){var f=c.children[g]
if(f.id=='attributes'||f.name=='attributes'||f.id=='lastChild'||f.name=='lastChild'||f.id=='previousSibling'||f.name=='previousSibling'||f.id=='children'||f.name=='children')return true}return false}(a)
p.toString
s=p
if(s)o=!0
else{p=!(a.attributes instanceof NamedNodeMap)
p.toString
o=p}l=o}catch(n){H.ao(n)}r="element unprintable"
try{r=J.cD(a)}catch(n){H.ao(n)}try{q=W.cP(a)
this.hk(a,b,l,r,q,k,j)}catch(n){if(H.ao(n) instanceof P.aL)throw n
else{this.bm(a,b)
p=window
p.toString
p="Removing corrupted element "+H.z(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
hk:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.bm(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.b3(a)){m.bm(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.z(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.ax(a,"is",g)){m.bm(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.ga4(f)
q=H.a(s.slice(0),H.ks(s))
for(p=f.ga4(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.nK(o)
H.ku(o)
if(!r.ax(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.z(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.d2(s)}}}
W.kp.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.hl(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.bm(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.lo("Corrupt HTML")
throw H.c(n)}}catch(p){H.ao(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:34}
W.fV.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h8.prototype={}
W.h9.prototype={}
W.hc.prototype={}
W.hd.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.hg.prototype={}
W.hh.prototype={}
W.hk.prototype={}
W.hl.prototype={}
W.hn.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.hp.prototype={}
W.hq.prototype={}
W.hv.prototype={}
W.hB.prototype={}
W.hC.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.hD.prototype={}
W.hE.prototype={}
W.hL.prototype={}
W.hM.prototype={}
W.hN.prototype={}
W.hO.prototype={}
W.hP.prototype={}
W.hQ.prototype={}
W.hR.prototype={}
W.hS.prototype={}
W.hT.prototype={}
W.hU.prototype={}
P.kd.prototype={
cH:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bR:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.kA(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.a_)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.jD("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.x.b(a))return a
if(t.cH.b(a)||t.dE.b(a)||t.bu.b(a))return a
if(t.f.b(a)){s=n.cH(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.el(a,new P.kf(m,n))
return m.a}if(t.r.b(a)){s=n.cH(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.hM(a,s)}if(t.eH.b(a)){s=n.cH(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.b=r[s]
if(p!=null)return p
o={}
o.toString
m.b=o
if(s>=q)return H.d(r,s)
r[s]=o
n.i2(a,new P.kg(m,n))
return m.b}throw H.c(P.jD("structured clone of other type"))},
hM:function(a,b){var s,r,q=J.bU(a),p=q.gl(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bR(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.kf.prototype={
$2:function(a,b){this.a.a[a]=this.b.bR(b)},
$S:15}
P.kg.prototype={
$2:function(a,b){this.a.b[a]=this.b.bR(b)},
$S:33}
P.e5.prototype={$ibJ:1,
gdO:function(a){return this.a}}
P.kv.prototype={
$1:function(a){this.a.push(P.mS(a))},
$S:31}
P.kF.prototype={
$2:function(a,b){this.a[a]=P.mS(b)},
$S:15}
P.ke.prototype={
i2:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.eB.prototype={
gbk:function(){var s=this.b,r=H.Y(s)
return new H.aZ(new H.b7(s,new P.iu(),r.M("b7<k.E>")),new P.iv(),r.M("aZ<k.E,E>"))},
H:function(a,b){C.b.H(P.iI(this.gbk(),!1,t.h),b)},
m:function(a,b,c){var s=this.gbk()
J.nJ(s.b.$1(J.hY(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.aT(this.gbk().a)},
h:function(a,b){var s=this.gbk()
return s.b.$1(J.hY(s.a,b))},
gV:function(a){var s=P.iI(this.gbk(),!1,t.h)
return new J.ap(s,s.length)}}
P.iu.prototype={
$1:function(a){return t.h.b(a)},
$S:24}
P.iv.prototype={
$1:function(a){return t.h.a(a)},
$S:60}
P.hm.prototype={
gcV:function(a){return this.$ti.c.a(this.a+this.c)},
gdM:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.aS(b)
if(s===r.gbL(b)){q=o.b
if(q===r.gbP(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcV(b)&&p.a(q+o.d)===r.gdM(b)}else s=!1}else s=!1}else s=!1
return s},
gI:function(a){var s=this,r=s.a,q=C.c.gI(r),p=s.b,o=C.c.gI(p),n=s.$ti.c
r=C.c.gI(n.a(r+s.c))
p=C.c.gI(n.a(p+s.d))
return H.ox(H.jo(H.jo(H.jo(H.jo(0,q),o),r),p))}}
P.ad.prototype={
gbL:function(a){return this.a},
gbP:function(a){return this.b},
gaR:function(a){return this.c},
gaL:function(a){return this.d}}
P.aY.prototype={$iaY:1}
P.eM.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.b1.prototype={$ib1:1}
P.f0.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.j7.prototype={
gl:function(a){return a.length}}
P.cg.prototype={$icg:1}
P.fn.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.o.prototype={
gbE:function(a){return new P.eB(a,new W.a8(a))},
al:function(a,b,c,d){var s,r,q,p,o=H.a([],t.Q)
o.push(W.mA(null))
o.push(W.mF())
o.push(new W.hz())
c=new W.hK(new W.dg(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.p.hN(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a8(q)
p=r.gaS(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$io:1}
P.b3.prototype={$ib3:1}
P.fz.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.ha.prototype={}
P.hb.prototype={}
P.hi.prototype={}
P.hj.prototype={}
P.hw.prototype={}
P.hx.prototype={}
P.hF.prototype={}
P.hG.prototype={}
P.i1.prototype={
gl:function(a){return a.length}}
P.eq.prototype={
h:function(a,b){return P.bw(a.get(b))},
H:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bw(s.value[1]))}},
ga4:function(a){var s=H.a([],t.s)
this.H(a,new P.i2(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Not supported"))},
$iJ:1}
P.i2.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
P.er.prototype={
gl:function(a){return a.length}}
P.bc.prototype={}
P.f1.prototype={
gl:function(a){return a.length}}
P.fS.prototype={}
P.cf.prototype={
iz:function(a,b,c,d,e,f,g){var s
if(t.x.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.qf(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bX("Incorrect number or type of arguments"))},
$icf:1}
P.fi.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.Q(b,a,null,null,null))
s=P.bw(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.hs.prototype={}
P.ht.prototype={}
K.aU.prototype={
aM:function(a,b){return!0},
i:function(a){return"all"},
$ib_:1}
K.cT.prototype={
aM:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aM(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$ib_:1}
K.ag.prototype={
aM:function(a,b){return!this.eG(0,b)},
i:function(a){return"!["+this.bW(0)+"]"}}
K.f9.prototype={
aM:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.aE(this.a),r=H.aE(this.b)
return s+".."+r},
$ib_:1}
K.u.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.Z(t.fX)
for(r=new H.bk(a,a.gl(a)),q=H.Y(r).c;r.u();)s.m(0,q.a(r.d),!0)
p=P.iI(s.ga4(s),!0,t.S)
C.b.eF(p)
this.a=p},
aM:function(a,b){return C.b.B(this.a,b)},
i:function(a){return P.fo(this.a,0,null)},
$ib_:1}
L.fj.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dv(this.a.k(0,b),H.a([],t.z))
s.push(p)
return p},
hY:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aM(0,a))return p}return null},
i:function(a){return this.b},
dz:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.B(0,s==null?null:s.b))l+=" (consume)"
s=m.d
if(s==null)s=null
else{s=s.c
s=s.ga4(s)}s=J.aK(s==null?H.a([],t.s):s)
for(;s.u();){r=s.gC(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.B(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.q)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bW(0))}return l.charCodeAt(0)==0?l:l}}
L.fw.prototype={
i:function(a){var s=H.lQ(this.b,"\n","\\n"),r=H.lQ(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fx.prototype={
aP:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.q)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.jv.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.fj(this,b,H.a([],t.ab))
s.m(0,b,r)}return r},
S:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fx(a,P.X(s,s))
r.m(0,a,q)}return q},
cZ:function(a){return this.iD(a)},
iD:function(a){var s=this
return P.pE(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$cZ(a3,a4){if(a3===1){o=a4
q=p}while(true)switch(q){case 0:c=s.d
b=t.t
a0=H.a([],b)
a1=H.a([],b)
a2=H.a([],b)
n=H.Y(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a2.length!==0)h=C.b.cT(a2,0)
else{if(!r.u()){q=3
break}h=n.a(r.d)}a1.push(h);++k
g=c==null
f=g?null:c.hY(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.fo(a1,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.z(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a1.fixed$length)H.h(P.D("removeRange"))
P.bn(0,i,a1.length)
a1.splice(0,i-0)
C.b.ai(a2,a1)
a1=H.a([],b)
a0=H.a([],b)
c=s.d
q=!m.B(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)a0.push(h)
c=f.b
g=c.d
if(g!=null){e=P.fo(a0,0,null)
g=c.d
if(g==null)l=null
else{d=g.c.h(0,e)
g=new L.fw(d==null?g.b:d,e,k)
l=g}i=a1.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.B(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.oN()
case 1:return P.oO(o)}}},t.bJ)},
i:function(a){var s,r=new P.a0(""),q=this.d
if(q!=null)r.a=""+(q.dz()+"\n")
for(q=this.a,q=q.giF(q),q=q.gV(q);q.u();){s=q.gC(q)
if(s!=this.d)r.a+=H.z(s==null?null:s.dz())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.dv.prototype={
i:function(a){return this.b.b+": "+this.bW(0)}}
O.aq.prototype={
d3:function(a,b,c){this.b=b
this.c=a},
bw:function(a,b){return this.d3(a,null,b)},
h_:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
eP:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var s=this.a
return new J.ap(s,s.length)},
L:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.Y(q).M("w<aq.T>")
if(q.h_(H.a([b],p))){s=q.a
r=s.length
s.push(b)
q.eP(r,H.a([b],p))}},
$ij:1}
O.db.prototype={
gl:function(a){return this.a.length},
gv:function(){var s=this.b
return s==null?this.b=D.O():s},
aV:function(){var s=this.b
return s==null?null:s.G(null)},
ga5:function(a){var s=this.a
if(s.length>0)return C.b.gaz(s)
else return V.aP()},
eq:function(a){this.a.push(a)
this.aV()},
cQ:function(){var s=this.a
if(s.length>0){s.pop()
this.aV()}}}
E.i5.prototype={}
E.bH.prototype={
sac:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().A(0,s.gel())
if(b!=null)b.gv().n(0,s.gel())
s.aN(new D.H("shape",r,b))}},
sbr:function(a){var s,r,q=this
if(!J.G(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gv().A(0,q.gej())
if(a!=null)a.gv().n(0,q.gej())
r=q.r
q.aN(new D.H("mover",s,r))}},
aD:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.bd(0,b,q)
if(!J.G(o,q.x)){s=q.x
q.x=o
q.aN(new D.H("matrix",s,o))}for(p=q.y.a,p=new J.ap(p,p.length),r=H.Y(p).c;p.u();)r.a(p.d).aD(0,b)},
ba:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga5(q))
else o.push(p.K(0,q.ga5(q)))
q.aV()
a.er(r.f)
s=C.b.gaz(a.dy)
if(r.d!=null)if(s!=null)s.it(a,r)
for(p=r.y.a,p=new J.ap(p,p.length),o=H.Y(p).c;p.u();)o.a(p.d).ba(a)
a.ep()
q.cQ()},
aN:function(a){var s=this.z
return s==null?null:s.G(a)},
W:function(){return this.aN(null)},
em:function(a){this.e=null
this.aN(a)},
ih:function(){return this.em(null)},
ek:function(a){return this.aN(a)},
ig:function(){return this.ek(null)},
ei:function(a){return this.aN(a)},
ib:function(){return this.ei(null)},
ia:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.geh(),q=t.b,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.c2()
m=n.a;(m==null?n.a=H.a([],q):m).push(r)}this.W()},
ie:function(a,b){var s,r
for(s=b.gV(b),r=this.geh();s.u();)s.gC(s).gv().A(0,r)
this.W()},
i:function(a){return"Unnamed entity"}}
E.c_.prototype={
i:function(a){return this.b}}
E.cd.prototype={
i:function(a){return this.b}}
E.h1.prototype={}
E.ja.prototype={
eO:function(a,b){var s=this
s.cy.gv().n(0,new E.jb(s))
s.db.gv().n(0,new E.jc(s))
s.dx.gv().n(0,new E.jd(s))},
gip:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga5(q).K(0,s.ga5(s))
q=s}return q},
er:function(a){var s=this.dy
return s.push(a==null?C.b.gaz(s):a)},
ep:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.jb.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:2}
E.jc.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:2}
E.jd.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:2}
E.fv.prototype={
d9:function(a){this.eu()},
d8:function(){return this.d9(null)},
gi3:function(){var s,r=this,q=Date.now(),p=C.c.a6(P.m0(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a_(q,!1)
return s/p},
dr:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.cI(r*o)
r=s.clientHeight
r.toString
p=C.d.cI(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.ml(C.m,this.giv())}},
eu:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.E.fc(s)
r=W.mY(new E.js(this),t.H)
r.toString
C.E.hh(s,r)}},
is:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.dr()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a_(p,!1)
q.y=P.m0(p-q.r.a).a*0.000001
p=q.cy
C.b.sl(p.a,0)
p.aV()
p=q.db
C.b.sl(p.a,0)
p.aV()
p=q.dx
C.b.sl(p.a,0)
p.aV()
p=q.dy
C.b.sl(p,0)
p.push(null)
m.ba(q)}q=n.Q
if(q!=null)q.G(null)}catch(o){s=H.ao(o)
r=H.lL(o)
P.lP("Error: "+H.z(s))
P.lP("Stack: "+H.z(r))
throw H.c(s)}}}
E.js.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.is()}},
$S:32}
Z.fO.prototype={}
Z.c0.prototype={
co:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ao(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.z(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.jZ.prototype={}
Z.cF.prototype={
b6:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
co:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].co(a)}},
iE:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
ba:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.a([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.dj(p.c)+"'")+"]")}o=H.a([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.q)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(l,", ")+"\nAttrs:   "+C.b.j(o,", ")}}
Z.c6.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.dj(this.c)+"'")+"]"}}
Z.br.prototype={
gd4:function(a){var s=this.a,r=(s&$.bA().a)!==0?3:0
if((s&$.bz().a)!==0)r+=3
if((s&$.by().a)!==0)r+=3
if((s&$.bW().a)!==0)r+=2
if((s&$.bB().a)!==0)r+=3
if((s&$.ej().a)!==0)r+=3
if((s&$.ek().a)!==0)r+=4
if((s&$.cC().a)!==0)++r
return(s&$.bx().a)!==0?r+4:r},
hE:function(a){var s,r=$.bA(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bz()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.by()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bW()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bB()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ej()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ek()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cC()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bx()
if((q&r.a)!==0)if(s===a)return r
return $.ny()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.br))return!1
return this.a===b.a},
i:function(a){var s=H.a([],t.s),r=this.a
if((r&$.bA().a)!==0)s.push("Pos")
if((r&$.bz().a)!==0)s.push("Norm")
if((r&$.by().a)!==0)s.push("Binm")
if((r&$.bW().a)!==0)s.push("Txt2D")
if((r&$.bB().a)!==0)s.push("TxtCube")
if((r&$.ej().a)!==0)s.push("Clr3")
if((r&$.ek().a)!==0)s.push("Clr4")
if((r&$.cC().a)!==0)s.push("Weight")
if((r&$.bx().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.i7.prototype={}
D.c2.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=H.a([],t.b):s).push(b)},
A:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.B(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.A(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.B(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.A(p,b)
s=p===!0||s}return s},
G:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.W():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.H(P.iI(p,!0,t.h2),new D.ir(s))
r=q.b
if(r!=null){q.b=H.a([],t.b)
C.b.H(r,new D.is(s))}return!0},
hT:function(){return this.G(null)},
aB:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.G(s)}}}}
D.ir.prototype={
$1:function(a){a.$1(this.a)},
$S:29}
D.is.prototype={
$1:function(a){a.$1(this.a)},
$S:29}
D.W.prototype={}
D.bg.prototype={}
D.bh.prototype={}
D.H.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.z(this.d)+" => "+H.z(this.e)}}
X.cG.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cG))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.eL.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eL))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.iE.prototype={}
X.d3.prototype={}
X.iK.prototype={
bj:function(a,b){var s,r=this,q=Date.now(),p=r.x.T(0,new V.T(b.a,b.b)),o=r.a.gb4(),n=$.ab
if(n==null)n=$.ab=new V.T(0,0)
s=r.x
r.z=new P.a_(q,!1)
r.x=p
return new X.ca(a,n,s,o,p)},
cP:function(a,b){this.r=a.a
return!1},
bt:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bs:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.bj(a,b))
return!0},
il:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gb4()
r=this.x
Date.now()
q.G(new X.cb(new V.a7(a.a,a.b),s,r))
return!0},
fP:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.G(new X.d3(c,q.a.gb4(),b))
q.y=new P.a_(s,!1)
s=$.ab
q.x=s==null?$.ab=new V.T(0,0):s}}
X.aa.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.aa))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.j(s,"+")}}
X.ca.prototype={}
X.j2.prototype={
c4:function(a,b,c){var s=this,r=new P.a_(Date.now(),!1),q=s.a.gb4(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.ca(a,p,o,q,b)},
cP:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.G(this.c4(a,b,!0))
return!0},
bt:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.G(r.c4(a,b,!0))
return!0},
bs:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.c4(a,b,!1))
return!0},
im:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gb4()
Date.now()
r.G(new X.cb(new V.a7(a.a,a.b),s,b))
return!0},
gdP:function(){var s=this.b
return s==null?this.b=D.O():s},
gd_:function(){var s=this.c
return s==null?this.c=D.O():s},
geg:function(){var s=this.d
return s==null?this.d=D.O():s}}
X.cb.prototype={}
X.f8.prototype={}
X.du.prototype={}
X.jx.prototype={
bj:function(a,b){var s,r,q,p,o=this,n=new P.a_(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.ab
if(r==null){r=new V.T(0,0)
$.ab=r
s=r}else s=r}r=o.a.gb4()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.du(q,p,r,s)},
ik:function(a){var s=this.b
if(s==null)return!1
s.G(this.bj(a,!0))
return!0},
ii:function(a){var s=this.c
if(s==null)return!1
s.G(this.bj(a,!0))
return!0},
ij:function(a){var s=this.d
if(s==null)return!1
s.G(this.bj(a,!1))
return!0}}
X.fM.prototype={
gb7:function(a){var s=this.b
return s==null?this.b=new X.iE(new X.aa(!1,!1,!1),P.d_(t.S)):s},
ga9:function(){var s,r=this.c
if(r==null){r=$.ab
if(r==null){r=$.ab=new V.T(0,0)
s=r}else s=r
r=this.c=new X.j2(this,r,s,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1))}return r},
gam:function(){var s=this.d
if(s==null){s=$.ab
if(s==null)s=$.ab=new V.T(0,0)
s=this.d=new X.iK(this,s,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1))}return s},
gbc:function(){var s,r=this.e
if(r==null){r=$.ab
if(r==null){r=$.ab=new V.T(0,0)
s=r}else s=r
r=this.e=new X.jx(this,r,s,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1))}return r},
gb4:function(){var s=this.a
return V.me(0,0,C.i.gdN(s).c,C.i.gdN(s).d)},
dg:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eL(p,new X.aa(s,r,q))},
b1:function(a){var s,r,q=this.gb7(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.aa(p,s,r)},
ck:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gb7(this)
r=a.altKey
q=a.shiftKey
p.c=new X.aa(s,r===!0,q===!0)},
aJ:function(a){var s,r,q,p
if(a==null){s=$.ab
return s==null?$.ab=new V.T(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.T(r-p,q-s)},
bl:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a7(r,s)},
ce:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.a([],t.cG)
r=a.touches
if(r==null)r=H.a([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.at(n)
m=o.pageY
m.toString
C.d.at(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.at(l)
l=o.pageY
l.toString
l=C.d.at(l)
k=j.top
k.toString
s.push(new V.T(n-m,l-k))}return s},
aG:function(a){var s,r,q,p
if(a==null)return new X.cG(0,new X.aa(!1,!1,!1))
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
return new X.cG(s,new X.aa(r,q,p))},
c5:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
fJ:function(a){return this.f=!0},
fv:function(a){return this.f=!1},
fD:function(a){if(this.f&&this.c5(a))a.preventDefault()},
fN:function(a){var s,r,q=this
if(!q.f)return
s=q.dg(a)
r=q.gb7(q)
r.c=s.b
r.d.n(0,s.a)},
fL:function(a){var s,r,q=this
if(!q.f)return
s=q.dg(a)
r=q.gb7(q)
r.c=s.b
r.d.A(0,s.a)},
fR:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.b1(a)
if(p.x){s=p.aG(a)
r=p.bl(a)
if(p.gam().cP(s,r))a.preventDefault()
return}s=p.aG(a)
q=p.aJ(a)
if(p.ga9().cP(s,q))a.preventDefault()},
fV:function(a){var s,r,q,p=this
p.b1(a)
s=p.aG(a)
if(p.x){r=p.bl(a)
if(p.gam().bt(s,r))a.preventDefault()
return}q=p.aJ(a)
if(p.ga9().bt(s,q))a.preventDefault()},
fH:function(a){var s,r,q,p=this
if(!p.c5(a)){p.b1(a)
s=p.aG(a)
if(p.x){r=p.bl(a)
if(p.gam().bt(s,r))a.preventDefault()
return}q=p.aJ(a)
if(p.ga9().bt(s,q))a.preventDefault()}},
fT:function(a){var s,r,q,p=this
p.b1(a)
s=p.aG(a)
if(p.x){r=p.bl(a)
if(p.gam().bs(s,r))a.preventDefault()
return}q=p.aJ(a)
if(p.ga9().bs(s,q))a.preventDefault()},
fF:function(a){var s,r,q,p=this
if(!p.c5(a)){p.b1(a)
s=p.aG(a)
if(p.x){r=p.bl(a)
if(p.gam().bs(s,r))a.preventDefault()
return}q=p.aJ(a)
if(p.ga9().bs(s,q))a.preventDefault()}},
fX:function(a){var s,r,q=this
q.b1(a)
s=new V.a7(C.D.ghQ(a),C.D.ghR(a)).K(0,q.Q)
if(q.x){if(q.gam().il(s))a.preventDefault()
return}r=q.aJ(a)
if(q.ga9().im(s,r))a.preventDefault()},
fZ:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aG(q.y)
r=q.aJ(q.y)
q.gam().fP(s,r,p)}},
hb:function(a){var s,r=this
r.a.focus()
r.f=!0
r.ck(a)
s=r.ce(a)
if(r.gbc().ik(s))a.preventDefault()},
h7:function(a){var s
this.ck(a)
s=this.ce(a)
if(this.gbc().ii(s))a.preventDefault()},
h9:function(a){var s
this.ck(a)
s=this.ce(a)
if(this.gbc().ij(s))a.preventDefault()}}
D.c1.prototype={
aE:function(a){var s=this.r
return s==null?null:s.G(a)},
eT:function(){return this.aE(null)},
$iaB:1}
D.cY.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.O():s},
gec:function(){var s=this.z
return s==null?this.z=D.O():s},
aE:function(a){var s=this.y
return s==null?null:s.G(a)},
dm:function(a){var s=this.z
return s==null?null:s.G(a)},
fO:function(){return this.dm(null)},
h1:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.eR(a[r]))return!1
return!0},
fo:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gdl(),q=this.f,p=t.b,o=0;o<b.length;b.length===s||(0,H.q)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.c2()
l=m.a;(l==null?m.a=H.a([],p):l).push(r)}this.aE(new D.bg())},
h5:function(a,b){var s,r,q,p
for(s=b.gV(b),r=this.gdl(),q=this.e;s.u();){p=s.gC(s)
C.b.A(q,p)
p.gv().A(0,r)}this.aE(new D.bh())},
eR:function(a){var s=C.b.B(this.f,a)
return s}}
V.a1.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.ax.prototype={
cX:function(a){var s=this
return H.a([s.a,s.b,s.c,s.d],t.n)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ax))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"}}
V.ip.prototype={}
V.da.prototype={
ae:function(a,b){var s=this,r=H.a([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.da))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cB(H.a([o.a,o.d,o.r],n),3,0),l=V.cB(H.a([o.b,o.e,o.x],n),3,0),k=V.cB(H.a([o.c,o.f,o.y],n),3,0)
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
V.bl.prototype={
ae:function(a,b){var s=this,r=H.a([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
ea:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.F().toString
if(Math.abs(b3-0)<1e-9)return V.aP()
s=1/b3
r=-l
q=-a2
return V.b0((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
K:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.b0(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bQ:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.x(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bu:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.N(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bl))return!1
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
i:function(a){return this.w()},
J:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cB(H.a([n.a,n.e,n.y,n.cx],m),3,0),k=V.cB(H.a([n.b,n.f,n.z,n.cy],m),3,0),j=V.cB(H.a([n.c,n.r,n.Q,n.db],m),3,0),i=V.cB(H.a([n.d,n.x,n.ch,n.dx],m),3,0)
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
w:function(){return this.J("")}}
V.T.prototype={
af:function(a){return new V.a7(a.a-this.a,a.b-this.b)},
T:function(a,b){return new V.T(this.a+b.a,this.b+b.b)},
a_:function(a,b){var s
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.ab
return s==null?$.ab=new V.T(0,0):s}return new V.T(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"},
w:function(){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.N.prototype={
T:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
aT:function(a,b){return new V.N(this.a-b.a,this.b-b.b,this.c-b.c)},
K:function(a,b){return new V.N(this.a*b,this.b*b,this.c*b)},
a_:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.ln()
return new V.N(this.a/b,this.b/b,this.c/b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.N))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"},
w:function(){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.bN.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bN))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"}}
V.fb.prototype={
gaA:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.fb))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"}}
V.a7.prototype={
bp:function(a){return Math.sqrt(this.a8(this))},
a8:function(a){return this.a*a.a+this.b*a.b},
K:function(a,b){return new V.a7(this.a*b,this.b*b)},
a_:function(a,b){var s
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.bR
return s==null?$.bR=new V.a7(0,0):s}return new V.a7(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.x.prototype={
bp:function(a){return Math.sqrt(this.a8(this))},
a8:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cK:function(a,b){return new V.x(V.hW(this.a,a.a,b),V.hW(this.b,a.b,b),V.hW(this.c,a.c,b))},
D:function(){var s=this,r=Math.sqrt(s.a8(s))
if(r===1)return s
return s.a_(0,r)},
aK:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.x(s*r-q*p,q*o-n*r,n*p-s*o)},
T:function(a,b){return new V.x(this.a+b.a,this.b+b.b,this.c+b.c)},
be:function(a){return new V.x(-this.a,-this.b,-this.c)},
K:function(a,b){return new V.x(this.a*b,this.b*b,this.c*b)},
a_:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.dK()
return new V.x(this.a/b,this.b/b,this.c/b)},
eb:function(){$.F().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.x))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"},
w:function(){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.bq.prototype={
bp:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
a_:function(a,b){var s=this
$.F().toString
if(Math.abs(b-0)<1e-9)return V.oG()
return new V.bq(s.a/b,s.b/b,s.c/b,s.d/b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bq))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"}}
U.i8.prototype={
bY:function(a){var s=V.qG(a,this.c,this.b)
return s},
gv:function(){var s=this.y
return s==null?this.y=D.O():s},
U:function(a){var s=this.y
return s==null?null:s.G(a)},
sd0:function(a,b){},
scL:function(a){var s,r=this,q=r.b
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bY(s)}r.U(new D.H("maximumLocation",q,r.b))}},
scN:function(a){var s,r=this,q=r.c
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bY(s)}r.U(new D.H("minimumLocation",q,r.c))}},
sZ:function(a,b){var s,r=this
b=r.bY(b)
s=r.d
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.U(new D.H("location",s,b))}},
scM:function(a){var s,r,q=this,p=q.e
$.F().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.U(new D.H("maximumVelocity",p,a))}},
sa1:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.U(new D.H("velocity",r,a))}},
scv:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.U(new D.H("dampening",s,a))}},
aD:function(a,b){var s,r,q,p=this,o=p.f
$.F().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sZ(0,p.d+s*b)
o=p.x
$.F().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa1(s)}}}
U.cI.prototype={
gv:function(){var s=this.b
return s==null?this.b=D.O():s},
bd:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cI))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.c4.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.O():s},
U:function(a){var s=this.e
return s==null?null:s.G(a)},
ab:function(){return this.U(null)},
fm:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gb0(),q=t.b,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gv()
m=n.a;(m==null?n.a=H.a([],q):m).push(r)}}this.U(new D.bg())},
h3:function(a,b){var s,r
for(s=b.gV(b),r=this.gb0();s.u();)s.gC(s).gv().A(0,r)
this.U(new D.bh())},
bd:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ap(o,o.length),n=H.Y(o).c,s=null;o.u();){r=n.a(o.d)
if(r!=null){q=r.bd(0,b,c)
s=s==null?q:q.K(0,s)}}p.f=s==null?V.aP():s
o=p.e
if(o!=null)o.aB(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c4))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.G(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia2:1}
U.a2.prototype={}
U.dG.prototype={
gv:function(){var s=this.cy
return s==null?this.cy=D.O():s},
U:function(a){var s=this.cy
return s==null?null:s.G(a)},
ab:function(){return this.U(null)},
bn:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.ga9().gdP().n(0,s.gc6())
a.ga9().geg().n(0,s.gc8())
a.ga9().gd_().n(0,s.gca())
return!0},
c7:function(a){var s=this,r=s.c,q=s.a
if(!r.q(0,q==null?null:q.gb7(q).c))return
s.x=s.y=!0
s.z=s.b.d},
c9:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.af(a.d)
if(s.a8(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sZ(0,-a.y.af(r).K(0,2).a_(0,s.gaA()).a*2.5+p.z)
q.sa1(0)
p.Q=a.z.af(r).K(0,2).a_(0,s.gaA())
p.ab()},
cb:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a8(s)>0.0001){r.b.sa1(r.Q.a*10*2.5)
r.ab()}},
bd:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.aD(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.b0(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$ia2:1}
U.dH.prototype={
gv:function(){var s=this.fx
return s==null?this.fx=D.O():s},
U:function(a){var s=this.fx
return s==null?null:s.G(a)},
ab:function(){return this.U(null)},
bn:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.ga9().gdP().n(0,q.gc6())
a.ga9().geg().n(0,q.gc8())
a.ga9().gd_().n(0,q.gca())
s=a.gam()
r=s.f
s=r==null?s.f=D.O():r
s.n(0,q.gfe())
s=a.gam()
r=s.d
s=r==null?s.d=D.O():r
s.n(0,q.gfg())
s=a.gbc()
r=s.b
s=r==null?s.b=D.O():r
s.n(0,q.ghu())
s=a.gbc()
r=s.d
s=r==null?s.d=D.O():r
s.n(0,q.ghs())
s=a.gbc()
r=s.c
s=r==null?s.c=D.O():r
s.n(0,q.ghq())
return!0},
aZ:function(a){var s=a.b
if(this.r)s=-s
return new V.a7(a.a,s)},
c7:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
c9:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.af(a.d)
if(s.a8(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aZ(a.y.af(r).K(0,2).a_(0,s.gaA()))
p=n.c
p.sZ(0,-q.a*2.5+n.cy)
o=n.b
o.sZ(0,-q.b*2.5+n.db)
o.sa1(0)
p.sa1(0)
n.dx=n.aZ(a.z.af(r).K(0,2).a_(0,s.gaA()))
n.ab()},
cb:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a8(s)>0.0001){r.c.sa1(-r.dx.a*10*2.5)
r.b.sa1(-r.dx.b*10*2.5)
r.ab()}},
ff:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
fh:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.aZ(a.y.af(r).K(0,2).a_(0,s.gaA()))
p=n.c
p.sZ(0,-q.a*2.5+n.cy)
o=n.b
o.sZ(0,-q.b*2.5+n.db)
o.sa1(0)
p.sa1(0)
n.dx=n.aZ(a.z.af(r).K(0,2).a_(0,s.gaA()))
n.ab()},
hv:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
ht:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.af(a.d)
if(s.a8(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aZ(a.y.af(r).K(0,2).a_(0,s.gaA()))
p=n.c
p.sZ(0,-q.a*2.5+n.cy)
o=n.b
o.sZ(0,-q.b*2.5+n.db)
o.sa1(0)
p.sa1(0)
n.dx=n.aZ(a.z.af(r).K(0,2).a_(0,s.gaA()))
n.ab()},
hr:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a8(s)>0.0001){r.c.sa1(-r.dx.a*10*2.5)
r.b.sa1(-r.dx.b*10*2.5)
r.ab()}},
bd:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.aD(0,s)
n=p.b
n.aD(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.b0(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.K(0,V.b0(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia2:1}
U.dI.prototype={
gv:function(){var s=this.r
return s==null?this.r=D.O():s},
U:function(a){var s=this.r
return s==null?null:s.G(a)},
bn:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.ga9()
r=s.e
s=r==null?s.e=D.O():r
r=this.gfj()
s.n(0,r)
s=a.gam()
q=s.e;(q==null?s.e=D.O():q).n(0,r)
return!0},
fk:function(a){var s=this,r=s.b,q=s.a
if(!r.q(0,q==null?null:q.gb7(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.U(new D.H("zoom",r,q))}},
bd:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.b0(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$ia2:1}
M.ez.prototype={
aF:function(a){var s=this.y
return s==null?null:s.G(a)},
eU:function(){return this.aF(null)},
fz:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gav(),q=t.b,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.c2()
m=n.a;(m==null?n.a=H.a([],q):m).push(r)}this.aF(new D.bg())},
fB:function(a,b){var s,r
for(s=b.gV(b),r=this.gav();s.u();)s.gC(s).gv().A(0,r)
this.aF(new D.bh())},
sew:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gv().A(0,r.gav())
s=r.d
r.d=a
if(a!=null)a.gv().n(0,r.gav())
r.aF(new D.H("technique",s,r.d))}},
gv:function(){var s=this.y
return s==null?this.y=D.O():s},
ba:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.er(d.d)
s=d.c
if(s!=null){r=a.a
r.bindFramebuffer(36160,null)
r.enable(2884)
r.enable(2929)
r.depthFunc(513)
q=r.drawingBufferWidth
if(q==null)q=512
p=r.drawingBufferHeight
if(p==null)p=512
o=s.r
n=C.d.at(o.a*q)
m=C.d.at(o.b*p)
l=C.d.at(o.c*q)
a.c=l
o=C.d.at(o.d*p)
a.d=o
r.viewport(n,m,l,o)
r.clearDepth(2000)
s=s.a
r.clearColor(s.a,s.b,s.c,s.d)
r.clear(16640)}s=d.b
if(s!=null){r=a.c
o=a.d
l=s.c
k=s.d
j=s.e
i=j-k
h=1/Math.tan(l*0.5)
g=V.b0(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.eq(g)
f=$.nj()
e=s.b
if(e!=null)f=e.a.K(0,f)
a.db.eq(f)}s=d.d
if(s!=null)s.aD(0,a)
for(s=d.e.a,r=new J.ap(s,s.length),o=H.Y(r).c;r.u();)o.a(r.d).aD(0,a)
for(s=new J.ap(s,s.length),r=H.Y(s).c;s.u();)r.a(s.d).ba(a)
if(d.b!=null){a.cy.cQ()
a.db.cQ()}a.ep()}}
A.ep.prototype={}
A.i0.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hU:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hS:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.ay.prototype={
gau:function(a){var s=this.a?1:0
return s|(this.c?4:0)|0},
i:function(a){var s=this.a?1:0
return""+(s|(this.c?4:0)|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.ay))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.eQ.prototype={
eN:function(d7,d8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=null,d1=u.C,d2="Required uniform value, ",d3=", was not defined or used in shader.",d4=c9.x,d5=new P.a0(""),d6=d4.fr
if(d6){s=""+"uniform mat4 objMat;\n"
d5.a=s}else s=""
r=d4.fx
s=(r?d5.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
d5.a=s
s+="\n"
d5.a=s
s=d5.a=s+"attribute vec3 posAttr;\n"
q=d4.k4
if(q){s+="attribute vec3 normAttr;\n"
d5.a=s}p=d4.r1
d5.a=(p?d5.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.pT(d4,d5)
A.pV(d4,d5)
A.pU(d4,d5)
A.pX(d4,d5)
A.pY(d4,d5)
A.pW(d4,d5)
A.pZ(d4,d5)
s=d5.a+="vec4 getPos()\n"
s+="{\n"
d5.a=s
o=d4.ry
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
d5.a=s
s+="}\n"
d5.a=s
s+="\n"
d5.a=s
s+="void main()\n"
d5.a=s
s=d5.a=s+"{\n"
if(o){s+="   setupBendData();\n"
d5.a=s}if(q){s+="   normalVec = getNorm();\n"
d5.a=s}if(p){s+="   binormalVec = getBinm();\n"
d5.a=s}if(d4.r2){s+="   txt2D = getTxt2D();\n"
d5.a=s}if(d4.rx){s+="   txtCube = getTxtCube();\n"
d5.a=s}if(d4.k2){s+="   objPos = getObjPos();\n"
d5.a=s}s=(d4.k3?d5.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
d5.a=s
s+="}\n"
d5.a=s
s=d5.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
m=A.pS(d4)
c9.c=n
c9.d=m
l=c9.dh(n,35633)
k=c9.dh(c9.d,35632)
s=c9.a
q=s.createProgram()
q.toString
c9.e=q
s.attachShader(c9.gaH(),l)
s.attachShader(c9.gaH(),k)
s.linkProgram(c9.gaH())
if(!H.mR(s.getProgramParameter(c9.gaH(),35714))){j=s.getProgramInfoLog(c9.gaH())
if(j==null)j="undefined log error"
s.deleteProgram(c9.e)
H.h(P.f("Failed to link shader: "+j))}c9.hm()
c9.ho()
c9.y=c9.gaj(c9).h(0,"posAttr")
c9.Q=c9.gaj(c9).h(0,"normAttr")
c9.z=c9.gaj(c9).h(0,"binmAttr")
c9.ch=c9.gaj(c9).h(0,"txt2DAttr")
c9.cx=c9.gaj(c9).h(0,"txtCubeAttr")
c9.cy=c9.gaj(c9).h(0,"bendAttr")
if(d4.dy)c9.fy=t.j.a(c9.gO().N(0,"invViewMat"))
if(d6)c9.db=t.j.a(c9.gO().N(0,"objMat"))
if(r)c9.dx=t.j.a(c9.gO().N(0,"viewObjMat"))
d6=t.j
c9.fr=d6.a(c9.gO().N(0,"projViewObjMat"))
if(d4.go)c9.dy=d6.a(c9.gO().N(0,"viewMat"))
if(d4.x1)c9.go=t.bK.a(c9.gO().N(0,"txt2DMat"))
if(d4.x2)c9.id=d6.a(c9.gO().N(0,"txtCubeMat"))
if(d4.y1)c9.k1=d6.a(c9.gO().N(0,"colorMat"))
c9.k3=H.a([],t.p)
s=d4.b5
if(s>0){c9.k2=t.w.a(c9.gO().N(0,"bendMatCount"))
for(i=0;i<s;++i){r=c9.k3
h=c9.r
if(h==null)H.h(P.f(d1))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.h(P.f(d2+q+d3))
r.push(d6.a(g))}}d6=d4.a
if(d6.a)c9.k4=t.g.a(c9.gO().N(0,"emissionClr"))
if(d6.c)c9.r2=t.a.a(c9.gO().N(0,"emissionTxt"))
d6=d4.b
if(d6.a)c9.rx=t.g.a(c9.gO().N(0,"ambientClr"))
if(d6.c)c9.x1=t.a.a(c9.gO().N(0,"ambientTxt"))
d6=d4.c
if(d6.a)c9.x2=t.g.a(c9.gO().N(0,"diffuseClr"))
if(d6.c)c9.y2=t.a.a(c9.gO().N(0,"diffuseTxt"))
d6=d4.d
if(d6.a)c9.b5=t.g.a(c9.gO().N(0,"invDiffuseClr"))
if(d6.c)c9.bH=t.a.a(c9.gO().N(0,"invDiffuseTxt"))
d6=d4.e
s=d6.a
if(!s)r=d6.c
else r=!0
if(r){c9.dT=t.v.a(c9.gO().N(0,"shininess"))
if(s)c9.dR=t.g.a(c9.gO().N(0,"specularClr"))
if(d6.c)c9.dS=t.a.a(c9.gO().N(0,"specularTxt"))}if(d4.f.c)c9.dU=t.a.a(c9.gO().N(0,"bumpTxt"))
if(d4.db){d6=t.a
c9.dV=d6.a(c9.gO().N(0,"envSampler"))
s=d4.r
if(s.a)c9.dW=t.g.a(c9.gO().N(0,"reflectClr"))
if(s.c)c9.dX=d6.a(c9.gO().N(0,"reflectTxt"))
s=d4.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){c9.dY=t.v.a(c9.gO().N(0,"refraction"))
if(r)c9.dZ=t.g.a(c9.gO().N(0,"refractClr"))
if(s.c)c9.e_=d6.a(c9.gO().N(0,"refractTxt"))}}d6=d4.y
if(d6.a)c9.e0=t.v.a(c9.gO().N(0,"alpha"))
if(d6.c)c9.e1=t.a.a(c9.gO().N(0,"alphaTxt"))
if(d4.k1){d6=d4.z
s=d6.length
if(s!==0){r=t.S
c9.cz=P.X(r,t.W)
c9.cA=P.X(r,t.O)
for(r=t.w,q=t.g,p=t.v,o=t.d,f=0;f<d6.length;d6.length===s||(0,H.q)(d6),++f){e=d6[f]
d=e.a
c="barLight"+d
b=H.a([],o)
for(a=e.b,a0=(d&4)!==0,i=0;i<a;++i){h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].startPnt"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
q.a(g)
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].endPnt"
a2=h.h(0,a1)
if(a2==null)H.h(P.f(d2+a1+d3))
q.a(a2)
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].color"
a3=h.h(0,a1)
if(a3==null)H.h(P.f(d2+a1+d3))
q.a(a3)
if(a0){h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].att0"
a4=h.h(0,a1)
if(a4==null)H.h(P.f(d2+a1+d3))
p.a(a4)
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].att1"
a5=h.h(0,a1)
if(a5==null)H.h(P.f(d2+a1+d3))
p.a(a5)
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].att2"
a6=h.h(0,a1)
if(a6==null)H.h(P.f(d2+a1+d3))
p.a(a6)
a7=a6
a8=a5
a9=a4}else{a7=d0
a8=a7
a9=a8}b.push(new A.dz(g,a2,a3,a9,a8,a7))}c9.cA.m(0,d,b)
a=c9.cz
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.m(0,d,r.a(g))}}d6=d4.Q
s=d6.length
if(s!==0){r=t.S
c9.cB=P.X(r,t.W)
c9.cC=P.X(r,t.l)
for(r=t.w,q=t.g,p=t.G,o=t.V,f=0;f<d6.length;d6.length===s||(0,H.q)(d6),++f){e=d6[f]
d=e.a
c="dirLight"+d
b=H.a([],o)
for(a=e.b,a0=(d&1)!==0,i=0;i<a;++i){if(a0){h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].objUp"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
q.a(g)
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].objRight"
a2=h.h(0,a1)
if(a2==null)H.h(P.f(d2+a1+d3))
q.a(a2)
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].objDir"
a3=h.h(0,a1)
if(a3==null)H.h(P.f(d2+a1+d3))
q.a(a3)
b0=a3
b1=a2
b2=g}else{b0=d0
b1=b0
b2=b1}h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].viewDir"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
q.a(g)
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].color"
a2=h.h(0,a1)
if(a2==null)H.h(P.f(d2+a1+d3))
q.a(a2)
if(a0){h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"sTexture2D"+i
a3=h.h(0,a1)
if(a3==null)H.h(P.f(d2+a1+d3))
p.a(a3)
b3=a3}else b3=d0
b.push(new A.dA(b2,b1,b0,g,a2,b3))}c9.cC.m(0,d,b)
a=c9.cB
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.m(0,d,r.a(g))}}d6=d4.ch
s=d6.length
if(s!==0){r=t.S
c9.cD=P.X(r,t.W)
c9.cE=P.X(r,t.m)
for(r=t.w,q=t.g,p=t.bK,o=t.a,a=t.E,a0=t.v,a1=t.B,f=0;f<d6.length;d6.length===s||(0,H.q)(d6),++f){e=d6[f]
d=e.a
c="pointLight"+d
b=H.a([],a1)
for(b4=e.b,b5=(d&4)!==0,b6=(d&2)!==0,b7=(d&1)!==0,b8=(d&3)!==0,i=0;i<b4;++i){h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].point"
g=h.h(0,b9)
if(g==null)H.h(P.f(d2+b9+d3))
q.a(g)
h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].viewPnt"
a2=h.h(0,b9)
if(a2==null)H.h(P.f(d2+b9+d3))
q.a(a2)
h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].color"
a3=h.h(0,b9)
if(a3==null)H.h(P.f(d2+b9+d3))
q.a(a3)
if(b8){h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].invViewRotMat"
a4=h.h(0,b9)
if(a4==null)H.h(P.f(d2+b9+d3))
p.a(a4)
c0=a4}else c0=d0
if(b7){h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"sTextureCube"+i
a4=h.h(0,b9)
if(a4==null)H.h(P.f(d2+b9+d3))
o.a(a4)
b3=a4}else b3=d0
if(b6){h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"sShadowCube"+i
a4=h.h(0,b9)
if(a4==null)H.h(P.f(d2+b9+d3))
o.a(a4)
h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].shadowAdj"
a5=h.h(0,b9)
if(a5==null)H.h(P.f(d2+b9+d3))
a.a(a5)
c1=a4
c2=a5}else{c1=d0
c2=c1}if(b5){h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].att0"
a4=h.h(0,b9)
if(a4==null)H.h(P.f(d2+b9+d3))
a0.a(a4)
h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].att1"
a5=h.h(0,b9)
if(a5==null)H.h(P.f(d2+b9+d3))
a0.a(a5)
h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].att2"
a6=h.h(0,b9)
if(a6==null)H.h(P.f(d2+b9+d3))
a0.a(a6)
a7=a6
a8=a5
a9=a4}else{a7=d0
a8=a7
a9=a8}b.push(new A.dC(g,a2,c0,a3,b3,c1,c2,a9,a8,a7))}c9.cE.m(0,d,b)
b4=c9.cD
h=c9.r
if(h==null)H.h(P.f(d1))
b5=c+"Count"
g=h.h(0,b5)
if(g==null)H.h(P.f(d2+b5+d3))
b4.m(0,d,r.a(g))}}d4=d4.cx
d6=d4.length
if(d6!==0){s=t.S
c9.cF=P.X(s,t.W)
c9.cG=P.X(s,t.R)
for(s=t.w,r=t.g,q=t.v,p=t.E,o=t.G,a=t.J,f=0;f<d4.length;d4.length===d6||(0,H.q)(d4),++f){e=d4[f]
d=e.a
c="spotLight"+d
b=H.a([],a)
for(a0=e.b,a1=(d&2)!==0,b4=(d&1)!==0,b5=(d&4)!==0,b6=(d&8)!==0,b7=(d&3)!==0,i=0;i<a0;++i){h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].objPnt"
g=h.h(0,b8)
if(g==null)H.h(P.f(d2+b8+d3))
r.a(g)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].objDir"
a2=h.h(0,b8)
if(a2==null)H.h(P.f(d2+b8+d3))
r.a(a2)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].viewPnt"
a3=h.h(0,b8)
if(a3==null)H.h(P.f(d2+b8+d3))
r.a(a3)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].color"
a4=h.h(0,b8)
if(a4==null)H.h(P.f(d2+b8+d3))
r.a(a4)
if(b7){h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].objUp"
a5=h.h(0,b8)
if(a5==null)H.h(P.f(d2+b8+d3))
r.a(a5)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].objRight"
a6=h.h(0,b8)
if(a6==null)H.h(P.f(d2+b8+d3))
r.a(a6)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].tuScalar"
c3=h.h(0,b8)
if(c3==null)H.h(P.f(d2+b8+d3))
q.a(c3)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].tvScalar"
c4=h.h(0,b8)
if(c4==null)H.h(P.f(d2+b8+d3))
q.a(c4)
c5=c4
c6=c3
b1=a6
b2=a5}else{c5=d0
c6=c5
b1=c6
b2=b1}if(a1){h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].shadowAdj"
a5=h.h(0,b8)
if(a5==null)H.h(P.f(d2+b8+d3))
p.a(a5)
c2=a5}else c2=d0
if(b6){h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].cutoff"
a5=h.h(0,b8)
if(a5==null)H.h(P.f(d2+b8+d3))
q.a(a5)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].coneAngle"
a6=h.h(0,b8)
if(a6==null)H.h(P.f(d2+b8+d3))
q.a(a6)
c7=a6
c8=a5}else{c7=d0
c8=c7}if(b5){h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].att0"
a5=h.h(0,b8)
if(a5==null)H.h(P.f(d2+b8+d3))
q.a(a5)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].att1"
a6=h.h(0,b8)
if(a6==null)H.h(P.f(d2+b8+d3))
q.a(a6)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].att2"
c3=h.h(0,b8)
if(c3==null)H.h(P.f(d2+b8+d3))
q.a(c3)
a7=c3
a8=a6
a9=a5}else{a7=d0
a8=a7
a9=a8}if(b4){h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"sTexture2D"+i
a5=h.h(0,b8)
if(a5==null)H.h(P.f(d2+b8+d3))
o.a(a5)
b3=a5}else b3=d0
if(a1){h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"sShadow2D"+i
a5=h.h(0,b8)
if(a5==null)H.h(P.f(d2+b8+d3))
o.a(a5)
c1=a5}else c1=d0
b.push(new A.dF(g,a2,a3,a4,b2,b1,c6,c5,c2,c8,c7,a9,a8,a7,b3,c1))}c9.cG.m(0,d,b)
a0=c9.cF
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"Count"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
a0.m(0,d,s.a(g))}}}},
ah:function(a,b){if(b!=null&&b.d>=6)if(a!=null)a.eD(b)}}
A.bb.prototype={
i:function(a){return"barLight"+this.a}}
A.bd.prototype={
i:function(a){return"dirLight"+this.a}}
A.bm.prototype={
i:function(a){return"pointLight"+this.a}}
A.bo.prototype={
i:function(a){return"spotLight"+this.a}}
A.iO.prototype={
i:function(a){return this.bG}}
A.dz.prototype={}
A.dA.prototype={}
A.dC.prototype={}
A.dF.prototype={}
A.dm.prototype={
gaj:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gO:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaH:function(){var s=this.e
if(s==null)throw H.c(P.f(u.p))
return s},
dh:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.mR(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.z(q)+'": '+s))}return q},
hm:function(){var s,r,q,p,o=this,n=u.p,m=H.a([],t.eu),l=o.a,k=H.kt(l.getProgramParameter(o.gaH(),35721))
for(s=0;s<k;++s){r=o.e
if(r==null)H.h(P.f(n))
q=l.getActiveAttrib(r,s)
q.toString
r=o.e
if(r==null)H.h(P.f(n))
p=q.name
p.toString
p=l.getAttribLocation(r,p)
p.toString
q=q.name
q.toString
m.push(new A.ep(l,q,p))}o.f=new A.i0(m)},
ho:function(){var s,r,q,p,o,n,m=this,l=u.p,k=H.a([],t.dC),j=m.a,i=H.kt(j.getProgramParameter(m.gaH(),35718))
for(s=0;s<i;++s){r=m.e
if(r==null)H.h(P.f(l))
q=j.getActiveUniform(r,s)
q.toString
r=m.e
if(r==null)H.h(P.f(l))
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
k.push(m.hO(o,n,q,p))}m.r=new A.jC(k)},
aY:function(a,b,c){var s=this.a
if(a===1)return new A.cl(s,b,c)
else return A.lq(s,this.e,b,a,c)},
f9:function(a,b,c){var s=this.a
if(a===1)return new A.dD(s,b,c)
else return A.lq(s,this.e,b,a,c)},
fa:function(a,b,c){var s=this.a
if(a===1)return new A.dE(s,b,c)
else return A.lq(s,this.e,b,a,c)},
bB:function(a,b){return new P.h3(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hO:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aY(b,c,d)
case 5121:return s.aY(b,c,d)
case 5122:return s.aY(b,c,d)
case 5123:return s.aY(b,c,d)
case 5124:return s.aY(b,c,d)
case 5125:return s.aY(b,c,d)
case 5126:return new A.dw(s.a,c,d)
case 35664:return new A.fC(s.a,c,d)
case 35665:return new A.dx(s.a,c,d)
case 35666:return new A.dy(s.a,c,d)
case 35667:return new A.fD(s.a,c,d)
case 35668:return new A.fE(s.a,c,d)
case 35669:return new A.fF(s.a,c,d)
case 35674:return new A.fG(s.a,c,d)
case 35675:return new A.dB(s.a,c,d)
case 35676:return new A.cm(s.a,c,d)
case 35678:return s.f9(b,c,d)
case 35680:return s.fa(b,c,d)
case 35670:throw H.c(s.bB("BOOL",c))
case 35671:throw H.c(s.bB("BOOL_VEC2",c))
case 35672:throw H.c(s.bB("BOOL_VEC3",c))
case 35673:throw H.c(s.bB("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.a4.prototype={}
A.jC.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
N:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.w()},
w:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cl.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fD.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fE.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fF.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fB.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.dw.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.fC.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dx.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dy.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.fG.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dB.prototype={
aq:function(a){var s=new Float32Array(H.cw(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.cm.prototype={
aq:function(a){var s=new Float32Array(H.cw(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dD.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.dE.prototype={
eD:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.kr.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cK(q.b,b).cK(q.d.cK(q.c,b),c)
a.sZ(0,new V.N(p.a,p.b,p.c))
a.saC(p.D())
q=1-b
s=1-c
a.sdJ(new V.bN(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)},
$S:5}
F.kG.prototype={
$2:function(a,b){return V.hW(this.a,this.b,b)},
$S:18}
F.kI.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hW(-1,1,c),n=this.a.$2(b,c)
q=-q*n
s=p*n
a.sZ(0,new V.N(q,s,o))
a.saC(new V.x(q,s,o).D())
a.sdJ(new V.bN(1-c,2+c,-1,-1))},
$S:5}
F.kJ.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:16}
F.kK.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:16}
F.kU.prototype={
$3:function(a,b,c){var s=c*3.141592653589793,r=Math.sin(s),q=b*6.283185307179586
q=new V.x(Math.cos(q)*r,Math.cos(s),Math.sin(q)*r).D()
a.sZ(0,new V.N(q.a,q.b,q.c))},
$S:5}
F.l7.prototype={
$2:function(a,b){return 0},
$S:18}
F.l6.prototype={
$3:function(a,b,c){var s,r=this.b.$2(b,c)
if(typeof r!=="number")return H.n7(r)
s=a.f
r=(s!=null?new V.x(s.a,s.b,s.c):V.dJ()).D().K(0,this.a+r)
a.sZ(0,new V.N(r.a,r.b,r.c))},
$S:5}
F.l9.prototype={
$1:function(a){return new V.N(Math.cos(a),Math.sin(a),0)},
$S:25}
F.kT.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.N(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)},
$S:25}
F.kH.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lS(l.$1(m),k)
k=J.lS(l.$1(m+3.141592653589793/n.c),k).aT(0,j)
s=new V.x(k.a,k.b,k.c).D()
r=$.mu
if(r==null){r=new V.x(1,0,0)
$.mu=r}q=s.aK(!s.q(0,r)?V.dJ():r).D()
r=q.aK(s).D()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.K(0,l*k)
k=q.K(0,o*k)
a.sZ(0,j.T(0,new V.N(l.a-k.a,l.b-k.b,l.c-k.c)))},
$S:5}
F.ar.prototype={
aU:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f(u.D))
if(r!==b.a||r!==c.a)throw H.c(P.f(u.R))
s.e=s.d=null
s.bz(a)
s.bA(b)
s.du(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gR().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.W()}},
bo:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.A(r.gR().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.W()}}s.cf()
s.cg()
s.he()},
bz:function(a){this.a=a
a.gR().b.push(this)},
bA:function(a){this.b=a
a.gR().c.push(this)},
du:function(a){this.c=a
a.gR().d.push(this)},
cf:function(){var s=this.a
if(s!=null)C.b.A(s.gR().b,this)
this.a=null},
cg:function(){var s=this.b
if(s!=null)C.b.A(s.gR().c,this)
this.b=null},
he:function(){var s=this.c
if(s!=null)C.b.A(s.gR().d,this)
this.c=null},
f2:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.dK()
if(n!=null)q=q.T(0,n)
if(s!=null)q=q.T(0,s)
if(r!=null)q=q.T(0,r)
if(q.eb())return p
return q.D()},
f4:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aT(0,n)
q=new V.x(o.a,o.b,o.c).D()
o=r.aT(0,n)
return q.aK(new V.x(o.a,o.b,o.c).D()).D()},
cr:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.f2()
if(s==null){s=q.f4()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.W()}return!0},
f1:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.dK()
if(n!=null)q=q.T(0,n)
if(s!=null)q=q.T(0,s)
if(r!=null)q=q.T(0,r)
if(q.eb())return p
return q.D()},
f3:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.F().toString
if(Math.abs(p-0)<1e-9){j=b.aT(0,e)
o=new V.x(j.a,j.b,j.c).D()
if(q.a-r.a<0)o=o.be(0)}else{n=(j-s.b)/p
j=b.aT(0,e).K(0,n).T(0,e).aT(0,h)
o=new V.x(j.a,j.b,j.c).D()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.be(0)}m=l.d
if(m!=null){m=m.D()
o=m.aK(o).D().aK(m).D()}return o},
cp:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.f1()
if(s==null){s=q.f3()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.W()}return!0},
aX:function(a,b){var s,r=b.a
if(r==null)throw H.c(P.f("May not replace a face's vertex with a vertex which is not attached to a shape."))
s=a.a
if(s!==r)throw H.c(P.f("May not replace a face's vertex with a vertex attached to a different shape."))},
ghI:function(a){var s=this
if(J.G(s.a,s.b))return!0
if(J.G(s.b,s.c))return!0
if(J.G(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
J:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gE(p)
p=a+C.a.ao(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gE(o)
p=p+C.a.ao(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gE(o)
s=p+C.a.ao(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.w()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.w()
return s+((p==null?"-":p)+"}")},
w:function(){return this.J("")}}
F.it.prototype={}
F.jm.prototype={
b8:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gE(q)
s=c.a
if(q==(s==null?r:s.gE(s))){q=b.b
q=q==null?r:q.gE(q)
s=c.b
if(q==(s==null?r:s.gE(s))){q=b.c
q=q==null?r:q.gE(q)
s=c.c
q=q==(s==null?r:s.gE(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gE(q)
s=c.b
if(q==(s==null?r:s.gE(s))){q=b.b
q=q==null?r:q.gE(q)
s=c.c
if(q==(s==null?r:s.gE(s))){q=b.c
q=q==null?r:q.gE(q)
s=c.a
q=q==(s==null?r:s.gE(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gE(q)
s=c.c
if(q==(s==null?r:s.gE(s))){q=b.b
q=q==null?r:q.gE(q)
s=c.a
if(q==(s==null?r:s.gE(s))){q=b.c
q=q==null?r:q.gE(q)
s=c.b
q=q==(s==null?r:s.gE(s))}else q=!1
return q}else return!1}}}}
F.eN.prototype={
eM:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.f("May not create a line with vertices attached to different shapes."))
s.bz(a)
s.bA(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga7(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.W()}},
bo:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.A(r.ga7(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.W()}}s.cf()
s.cg()},
bz:function(a){this.a=a
a.ga7(a).b.push(this)},
bA:function(a){this.b=a
a.ga7(a).c.push(this)},
cf:function(){var s=this.a
if(s!=null)C.b.A(s.ga7(s).b,this)
this.a=null},
cg:function(){var s=this.b
if(s!=null)C.b.A(s.ga7(s).c,this)
this.b=null},
aX:function(a,b){var s,r=b.a
if(r==null)throw H.c(P.f("May not replace a line's vertex with a vertex which is not attached to a shape."))
s=a.a
if(s!==r)throw H.c(P.f("May not replace a line's vertex with a vertex attached to a different shape."))},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
J:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gE(s)
s=a+C.a.ao(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gE(r)
return s+C.a.ao(C.c.i(r==null?-1:r),0)},
w:function(){return this.J("")}}
F.iF.prototype={}
F.jB.prototype={
b8:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gE(q)
s=c.a
if(q==(s==null?r:s.gE(s))){q=b.b
q=q==null?r:q.gE(q)
s=c.b
return q==(s==null?r:s.gE(s))}else{q=b.a
q=q==null?r:q.gE(q)
s=c.b
if(q==(s==null?r:s.gE(s))){q=b.b
q=q==null?r:q.gE(q)
s=c.a
return q==(s==null?r:s.gE(s))}else return!1}}}
F.f7.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
J:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gE(s)
return a+C.a.ao(C.c.i(s),0)},
w:function(){return this.J("")}}
F.jf.prototype={
gX:function(){var s=this.a
return s==null?this.a=new F.y(this,H.a([],t.k)):s},
gaO:function(a){var s=this.b
return s==null?this.b=new F.bO(this,H.a([],t.q)):s},
ga7:function(a){var s=this.c
return s==null?this.c=new F.dp(this,H.a([],t.L)):s},
gR:function(){var s=this.d
return s==null?this.d=new F.dn(this,H.a([],t.u)):s},
gv:function(){var s=this.e
return s==null?this.e=D.O():s},
b9:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.gX().a0()
s=b.gX().c.length
for(a0=a1.gX().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.y(b,H.a([],q))
n.n(0,o.hL())}b.gX().a0()
for(a0=a1.gaO(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.a([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],q)):i).a0()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.bO(b,H.a([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,h)
l=new F.f7()
if(h.a==null)H.h(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.b6(H.a([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.bO(k,H.a([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.G(a)}}}for(a0=a1.ga7(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.a([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],q)):i).a0()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.a([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],q)):i).a0()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.dp(b,H.a([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,e)
new F.eN().eM(f,e)}for(a0=a1.gR().b,r=a0.length,n=t.u,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.a([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],q)):i).a0()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.a([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],q)):i).a0()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.a([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],q)):i).a0()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.dn(b,H.a([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,e)
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,c)
new F.ar().aU(f,e,c)}a0=b.e
if(a0!=null)a0.aB(0)},
ar:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gR().ar()||!1
if(!r.gX().ar())s=!1
q=r.e
if(q!=null)q.aB(0)
return s},
hX:function(a,b){var s,r,q,p,o=this,n=o.gX().c.length
for(s=t.k,r=0;r<n;++r){q=o.a
q=(q==null?o.a=new F.y(o,H.a([],s)):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
if(b.b8(0,a,p))return p}return null},
hg:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.gX().n(0,a)
for(s=b.length,r=t.q,q=t.L,p=t.u,o=t.k,n=0;n<b.length;b.length===s||(0,H.q)(b),++n){m=b[n]
while(!0){l=m.d
if(l==null){l=m.d=new F.am(H.a([],p),H.a([],p),H.a([],p))
k=l}else k=l
if(!(l.b.length+l.c.length+l.d.length>0))break
l=k.h(0,0)
k=l.a
if(k==null||l.b==null||l.c==null)H.h(P.f("May not replace a face's vertex when the point has been disposed."))
if(J.G(k,m)){l.aX(m,a)
k=l.a
if(k!=null){j=k.d
C.b.A((j==null?k.d=new F.am(H.a([],p),H.a([],p),H.a([],p)):j).b,l)}l.a=null
l.a=a
k=a.d;(k==null?a.d=new F.am(H.a([],p),H.a([],p),H.a([],p)):k).b.push(l)
i=1}else i=0
if(J.G(l.b,m)){l.aX(m,a)
k=l.b
if(k!=null){j=k.d
C.b.A((j==null?k.d=new F.am(H.a([],p),H.a([],p),H.a([],p)):j).c,l)}l.b=null
l.b=a
k=a.d;(k==null?a.d=new F.am(H.a([],p),H.a([],p),H.a([],p)):k).c.push(l);++i}if(J.G(l.c,m)){l.aX(m,a)
k=l.c
if(k!=null){j=k.d
C.b.A((j==null?k.d=new F.am(H.a([],p),H.a([],p),H.a([],p)):j).d,l)}l.c=null
l.c=a
k=a.d;(k==null?a.d=new F.am(H.a([],p),H.a([],p),H.a([],p)):k).d.push(l);++i}if(i>0){l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.G(null)}}}}while(!0){l=m.c
if(l==null){l=m.c=new F.aI(H.a([],q),H.a([],q))
k=l}else k=l
if(!(l.b.length+l.c.length>0))break
l=k.h(0,0)
k=l.a
if(k==null||l.b==null)H.h(P.f("May not replace a line's vertex when the point has been disposed."))
if(J.G(k,m)){l.aX(m,a)
k=l.a
if(k!=null){j=k.c
C.b.A((j==null?k.c=new F.aI(H.a([],q),H.a([],q)):j).b,l)}l.a=null
l.a=a
k=a.c;(k==null?a.c=new F.aI(H.a([],q),H.a([],q)):k).b.push(l)
i=1}else i=0
if(J.G(l.b,m)){l.aX(m,a)
k=l.b
if(k!=null){j=k.c
C.b.A((j==null?k.c=new F.aI(H.a([],q),H.a([],q)):j).c,l)}l.b=null
l.b=a
k=a.c;(k==null?a.c=new F.aI(H.a([],q),H.a([],q)):k).c.push(l);++i}if(i>0){l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.G(null)}}}}while(!0){l=m.b
if(l==null){l=m.b=new F.b6(H.a([],r))
k=l}else k=l
if(!(l.b.length>0))break
l=k.b
if(0>=l.length)return H.d(l,0)
l=l[0]
k=l.a
if(k==null)H.h(P.f("May not replace a point's vertex when the point has been disposed."))
if(J.G(k,m)){if(a.a==null)H.h(P.f("May not replace a point's vertex with a vertex which is not attached to a shape."))
k=l.a
if(k!=null){j=k.b
C.b.A((j==null?k.b=new F.b6(H.a([],r)):j).b,l)}l.a=null
l.a=a
k=a.b;(k==null?a.b=new F.b6(H.a([],r)):k).b.push(l)
i=1}else i=0
if(i>0){l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.G(null)}}}}l=h.a;(l==null?h.a=new F.y(h,H.a([],o)):l).A(0,m)}},
ef:function(a,b){var s,r,q,p,o,n,m=this,l=m.e
if(l!=null)++l.d
l=m.gX().c
s=H.a(l.slice(0),H.ks(l))
for(l=t.k;s.length!==0;){r=C.b.ghZ(s)
C.b.cT(s,0)
q=H.a([],l)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.b8(0,r,o)){q.push(o)
C.b.cT(s,p)}}if(q.length>1){n=b.b9(q)
if(n!=null){m.hg(n,q)
s.push(n)}}}m.gX().a0()
m.ga7(m).bO()
m.gR().bO()
m.gaO(m).ir()
m.ga7(m).cU(new F.jB())
m.gR().cU(new F.jm())
l=m.e
if(l!=null)l.aB(0)},
bD:function(){this.ef(new F.dL(),new F.j5())},
hG:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=34962,b={},a=e.gX().c.length,a0=a3.a,a1=(a0&$.bA().a)!==0?1:0
if((a0&$.bz().a)!==0)++a1
if((a0&$.by().a)!==0)++a1
if((a0&$.bW().a)!==0)++a1
if((a0&$.bB().a)!==0)++a1
if((a0&$.ej().a)!==0)++a1
if((a0&$.ek().a)!==0)++a1
if((a0&$.cC().a)!==0)++a1
if((a0&$.bx().a)!==0)++a1
s=a3.gd4(a3)
r=P.d2(a*s,0,!1,t.gR)
b.a=0
q=P.o9(a1,new F.jh(b,e,a3,s*4,a,s,r),t.eT)
a0=a2.a
p=a0.createBuffer()
p.toString
a0.bindBuffer(c,p)
a0.bufferData(c,new Float32Array(H.cw(r)),35044)
a0.bindBuffer(c,d)
o=new Z.cF(new Z.fO(c,p),H.a([],t.fv),q,a3)
if(e.gaO(e).b.length!==0){n=H.a([],t.t)
p=t.q
m=t.k
l=0
while(!0){k=e.b
if(k==null){k=e.b=new F.bO(e,H.a([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
k=k[l].a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],m)):i).a0()}k=k.e}n.push(k==null?0:k);++l}h=Z.ls(a0,34963,n)
o.b.push(new Z.c6(0,n.length,h))}if(e.ga7(e).b.length!==0){n=H.a([],t.t)
p=t.L
m=t.k
l=0
while(!0){k=e.c
if(k==null){k=e.c=new F.dp(e,H.a([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
g=k[l]
k=g.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],m)):i).a0()}k=k.e}n.push(k==null?0:k)
k=g.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],m)):i).a0()}k=k.e}n.push(k==null?0:k);++l}h=Z.ls(a0,34963,n)
o.b.push(new Z.c6(1,n.length,h))}if(e.gR().b.length!==0){n=H.a([],t.t)
p=t.u
m=t.k
l=0
while(!0){k=e.d
if(k==null){k=e.d=new F.dn(e,H.a([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
f=k[l]
k=f.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],m)):i).a0()}k=k.e}n.push(k==null?0:k)
k=f.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],m)):i).a0()}k=k.e}n.push(k==null?0:k)
k=f.c
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],m)):i).a0()}k=k.e}n.push(k==null?0:k);++l}h=Z.ls(a0,34963,n)
o.b.push(new Z.c6(4,n.length,h))}return o},
i:function(a){var s=this,r="   ",q=H.a([],t.s)
if(s.gX().c.length!==0){q.push("Vertices:")
q.push(s.gX().J(r))}if(s.gaO(s).b.length!==0){q.push("Points:")
q.push(s.gaO(s).J(r))}if(s.ga7(s).b.length!==0){q.push("Lines:")
q.push(s.ga7(s).J(r))}if(s.gR().b.length!==0){q.push("Faces:")
q.push(s.gR().J(r))}return C.b.j(q,"\n")},
W:function(){var s=this.e
return s==null?null:s.G(null)}}
F.jh.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hE(a),e=f.gd4(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.y(o,H.a([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].i7(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.c0(f,e,c*4,g.d)},
$S:47}
F.dn.prototype={
bC:function(a,b,c,d){var s,r=this.a
r.gX().n(0,b)
r.gX().n(0,c)
r.gX().n(0,d)
s=new F.ar()
r=b.a
if(r==null)H.h(P.f(u.D))
if(r!=c.a||r!=d.a)H.h(P.f(u.R))
s.bz(b)
s.bA(c)
s.du(d)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gR().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.W()}return s},
hA:function(a){var s,r,q,p,o,n,m,l,k=H.a([],t.u),j=a.length
if(j>0){s=a[0]
for(r=this.a,q=t.k,p=2;p<j;++p){o=p-1
n=a.length
if(o>=n)return H.d(a,o)
o=a[o]
if(p>=n)return H.d(a,p)
n=a[p]
m=r.a;(m==null?r.a=new F.y(r,H.a([],q)):m).n(0,s)
m=r.a;(m==null?r.a=new F.y(r,H.a([],q)):m).n(0,o)
m=r.a;(m==null?r.a=new F.y(r,H.a([],q)):m).n(0,n)
l=new F.ar()
l.aU(s,o,n)
k.push(l)}}return k},
hB:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.a([],t.u)
for(s=this.a,r=t.k,q=b,p=0,o=!1,n=1;n<a;++n,++p,++q){for(m=o,l=1;l<b;++l,q=h){k=c.length
if(p<0||p>=k)return H.d(c,p)
j=c[p];++p
if(p>=k)return H.d(c,p)
i=c[p]
h=q+1
if(h<0||h>=k)return H.d(c,h)
g=c[h]
if(q<0||q>=k)return H.d(c,q)
f=c[q]
k=s.a
if(m){(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,g)
e=new F.ar()
e.aU(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,f)
e=new F.ar()
e.aU(j,g,f)
d.push(e)}else{(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,f)
e=new F.ar()
e.aU(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,f)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,j)
e=new F.ar()
e.aU(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gl:function(a){return this.b.length},
cU:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gX().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.a([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.am(H.a([],q),H.a([],q),H.a([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.am(H.a([],q),H.a([],q),H.a([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.b8(0,l,(o==null?n.d=new F.am(H.a([],q),H.a([],q),H.a([],q)):o).h(0,j))){l.bo()
break}}}}},
bO:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.ghI(q))q.bo()}},
ar:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cr())q=!1
return q},
cq:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cp())q=!1
return q},
i:function(a){return this.w()},
J:function(a){var s,r,q,p=H.a([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(a))
return C.b.j(p,"\n")},
w:function(){return this.J("")}}
F.dp.prototype={
gl:function(a){return this.b.length},
cU:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gX().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.a([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.aI(H.a([],q),H.a([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.aI(H.a([],q),H.a([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.b8(0,l,(o==null?n.c=new F.aI(H.a([],q),H.a([],q)):o).h(0,j))){l.bo()
break}}}}},
bO:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.G(q.a,q.b))q.bo()}},
i:function(a){return this.w()},
J:function(a){var s,r=H.a([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].J(a+(""+s+". ")))}return C.b.j(r,"\n")},
w:function(){return this.J("")}}
F.bO.prototype={
gl:function(a){return this.b.length},
ir:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1,q=t.q;r>=0;--r){if(r>=s.length)return H.d(s,r)
p=s[r].a
if(p==null)o=null
else{n=p.b
p=(n==null?p.b=new F.b6(H.a([],q)):n).b.length
o=p}if((o==null?0:o)>1){if(r>=s.length)return H.d(s,r)
m=s[r]
p=m.a
if(p!=null){p=p.a
if(p!=null){n=p.b
C.b.A((n==null?p.b=new F.bO(p,H.a([],q)):n).b,m)}p=m.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.G(null)}}}p=m.a
if(p!=null){n=p.b
C.b.A((n==null?p.b=new F.b6(H.a([],q)):n).b,m)}m.a=null}}},
i:function(a){return this.w()},
J:function(a){var s,r,q,p=H.a([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(a))
return C.b.j(p,"\n")},
w:function(){return this.J("")}}
F.cp.prototype={
cu:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.cq(s.cx,p,m,r,q,o,n,a,l)},
hL:function(){return this.cu(null)},
gaO:function(a){var s=this.b
return s==null?this.b=new F.b6(H.a([],t.q)):s},
ga7:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.aI(H.a([],s),H.a([],s))}return s},
gR:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.am(H.a([],s),H.a([],s),H.a([],s))}return s},
gE:function(a){var s=this.a
if(s!=null)s.gX().a0()
return this.e},
sZ:function(a,b){var s
if(!J.G(this.f,b)){this.f=b
s=this.a
if(s!=null)s.W()}},
scO:function(a){var s
a=a==null?null:a.D()
if(!J.G(this.r,a)){this.r=a
s=this.a
if(s!=null)s.W()}},
sdL:function(a){var s
a=a==null?null:a.D()
if(!J.G(this.x,a)){this.x=a
s=this.a
if(s!=null)s.W()}},
scW:function(a){var s
if(!J.G(this.y,a)){this.y=a
s=this.a
if(s!=null)s.W()}},
saC:function(a){var s
if(!J.G(this.z,a)){this.z=a
s=this.a
if(s!=null)s.W()}},
sas:function(a,b){var s
if(!J.G(this.Q,b)){this.Q=b
s=this.a
if(s!=null)s.W()}},
sez:function(a,b){var s
if(this.ch!==b){this.ch=b
s=this.a
if(s!=null)s.W()}},
sdJ:function(a){var s
if(!J.G(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.W()}},
i7:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.bA())){s=o.f
s=s==null?n:H.a([s.a,s.b,s.c],t.n)
return s==null?H.a([0,0,0],t.n):s}else if(a.q(0,$.bz())){s=o.r
s=s==null?n:H.a([s.a,s.b,s.c],t.n)
return s==null?H.a([0,1,0],t.n):s}else if(a.q(0,$.by())){s=o.x
s=s==null?n:H.a([s.a,s.b,s.c],t.n)
return s==null?H.a([0,0,1],t.n):s}else if(a.q(0,$.bW())){s=o.y
s=s==null?n:H.a([s.a,s.b],t.n)
return s==null?H.a([0,0],t.n):s}else if(a.q(0,$.bB())){s=o.z
s=s==null?n:H.a([s.a,s.b,s.c],t.n)
return s==null?H.a([0,0,0],t.n):s}else if(a.q(0,$.ej())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.a([q,p,s==null?1:s],t.n)}else if(a.q(0,$.ek())){s=o.Q
s=s==null?n:s.cX(0)
return s==null?H.a([1,1,1,1],t.n):s}else if(a.q(0,$.cC()))return H.a([o.ch],t.n)
else if(a.q(0,$.bx())){s=o.cx
s=s==null?n:H.a([s.a,s.b,s.c,s.d],t.n)
return s==null?H.a([-1,-1,-1,-1],t.n):s}else return H.a([],t.n)},
cr:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dK()
p.gR().H(0,new F.jY(o))
p.r=o.a.D()
if(r){s.W()
o=s.e
if(o!=null)o.aB(0)}return!0},
cp:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dK()
p.gR().H(0,new F.jX(o))
p.x=o.a.D()
if(r){s.W()
o=s.e
if(o!=null)o.aB(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
J:function(a){var s,r,q=this,p=null,o="-",n=H.a([],t.s)
n.push(C.a.ao(C.c.i(q.e),0))
s=q.f
s=s==null?p:s.w()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.w()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.w()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.w()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.w()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.w()
n.push(s==null?o:s)
n.push(V.C(q.ch,3,0))
s=q.cx
s=s==null?p:s.w()
n.push(s==null?o:s)
r=C.b.j(n,", ")
return a+"{"+r+"}"},
w:function(){return this.J("")}}
F.jY.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.T(0,r)}},
$S:9}
F.jX.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.T(0,r)}},
$S:9}
F.y.prototype={
a0:function(){var s,r,q
if(this.b){s=this.c
r=s.length
for(q=0;q<r;++q)s[q].e=q
this.b=!1}},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.f("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.W()
return!0},
hC:function(a,b,c,d,e,f){var s=F.cq(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
A:function(a,b){var s,r=this.a
if(b.a!==r)return!1
if(b.gaO(b).b.length===0){s=b.ga7(b)
if(s.b.length===0&&s.c.length===0){s=b.gR()
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)throw H.c(P.f("May not remove a vertex without first making it empty."))
b.a=null
C.b.A(this.c,b)
r.W()
return this.b=!0},
ar:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cr()
return!0},
cq:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cp()
return!0},
hH:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.D()
if(!J.G(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.G(null)}}}}}return!0},
i:function(a){return this.w()},
J:function(a){var s,r,q,p
this.a0()
s=H.a([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].J(a))
return C.b.j(s,"\n")},
w:function(){return this.J("")}}
F.am.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
H:function(a,b){var s=this
C.b.H(s.b,b)
C.b.H(s.c,new F.jS(s,b))
C.b.H(s.d,new F.jT(s,b))},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.a([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
return C.b.j(p,"\n")}}
F.jS.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)},
$S:9}
F.jT.prototype={
$1:function(a){var s=this.a
if(!J.G(a.a,s)&&!J.G(a.b,s))this.b.$1(a)},
$S:9}
F.aI.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.a([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
return C.b.j(p,"\n")}}
F.jV.prototype={}
F.dL.prototype={
b8:function(a,b,c){return J.G(b.f,c.f)}}
F.jW.prototype={}
F.jU.prototype={
b9:function(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null
for(s=a8.length,r=a7,q=r,p=q,o=p,n=o,m=n,l=0,k=0,j=0,i=0,h=0,g=0,f=0;f<s;++f){e=a8[f]
d=e.f
if(d!=null){m=m==null?d:new V.N(m.a+d.a,m.b+d.b,m.c+d.c);++l}c=e.r
if(c!=null)n=n==null?c:new V.x(n.a+c.a,n.b+c.b,n.c+c.c)
b=e.x
if(b!=null)o=o==null?b:new V.x(o.a+b.a,o.b+b.b,o.c+b.c)
a=e.y
if(a!=null){q=q==null?a:new V.T(q.a+a.a,q.b+a.b);++j}a0=e.z
if(a0!=null){r=r==null?a0:new V.x(r.a+a0.a,r.b+a0.b,r.c+a0.c);++i}a1=e.Q
if(a1!=null){a2=a1.a
a3=a1.b
a4=a1.c
a5=a1.d
if(p==null){a2=[a2,a3,a4,a5]
p=new V.bq(a2[0],a2[1],a2[2],a2[3])}else{a2=[a2,a3,a4,a5]
a3=a2[0]
a4=a2[1]
a5=a2[2]
a2=a2[3]
p=new V.bq(p.a+a3,p.b+a4,p.c+a5,p.d+a2)}++k}g+=e.ch;++h}a6=F.cq(a7,a7,a7,a7,a7,a7,a7,a7,0)
if(l<=0||m==null)a6.sZ(0,a7)
else a6.sZ(0,m.a_(0,l))
if(n==null)a6.scO(a7)
else a6.scO(n.D())
if(o==null)a6.sdL(a7)
else a6.sdL(o.D())
if(j<=0||q==null)a6.scW(a7)
else a6.scW(q.a_(0,j))
if(i<=0||r==null)a6.saC(a7)
else a6.saC(r.a_(0,i))
if(k<=0||p==null)a6.sas(0,a7)
else{s=p.a_(0,k)
s=[s.a,s.b,s.c,s.d]
a2=s[0]
a3=s[1]
a4=s[2]
s=s[3]
if(a2<0)a2=0
else if(a2>1)a2=1
if(a3<0)a3=0
else if(a3>1)a3=1
if(a4<0)a4=0
else if(a4>1)a4=1
if(s<0)s=0
else if(s>1)s=1
a6.sas(0,new V.ax(a2,a3,a4,s))}if(h<=0)a6.sez(0,0)
else a6.sez(0,g/h)
return a6}}
F.j5.prototype={
b9:function(a){var s,r,q,p=V.dK()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.x(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.D()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)a[r].scO(p)
return null}}
F.b6.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.a([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
return C.b.j(p,"\n")}}
O.d7.prototype={
gv:function(){var s=this.fr
return s==null?this.fr=D.O():s},
a3:function(a){var s=this.fr
return s==null?null:s.G(a)},
bX:function(){return this.a3(null)},
dq:function(a){this.a=null
this.a3(a)},
hi:function(){return this.dq(null)},
fq:function(a,b){return this.a3(new D.bg())},
ft:function(a,b){return this.a3(new D.bh())},
ged:function(){var s=this,r=s.dx
if(r==null){r=new D.cY(H.a([],t.i),H.a([],t.U),H.a([],t.o),H.a([],t.D),H.a([],t.e))
r.d3(r.gfn(),r.gh0(),r.gh4())
r.gv().n(0,s.gdn())
r.gec().n(0,s.gbh())
s.dx=r}return r},
gcn:function(){var s=this.r
return s==null?this.r=O.eR(this,"ambient"):s},
gcw:function(){var s=this.x
return s==null?this.x=O.eR(this,"diffuse"):s},
gbU:function(){var s=this.z
return s==null?this.z=new O.iR(new V.a1(0,0,0),this,"specular",new A.ay(!1,!1,!1)):s},
df:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.Z(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.a([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gay()
o=a1.h(0,q.gay())
a1.m(0,p,o==null?1:o)}n=H.a([],t.cn)
a1.H(0,new O.iS(b,n))
C.b.bg(n,new O.iT())
m=new H.Z(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.a([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.a([],t.fD)
m.H(0,new O.iU(b,l))
C.b.bg(l,new O.iV())
k=new H.Z(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.a([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gay()
o=k.h(0,q.gay())
k.m(0,p,o==null?1:o)}j=H.a([],t.eg)
k.H(0,new O.iW(b,j))
C.b.bg(j,new O.iX())
i=new H.Z(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.a([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.q)(a0),++r){q=a0[r]
s=q.gay()
p=i.h(0,q.gay())
i.m(0,s,p==null?1:p)}h=H.a([],t.c3)
i.H(0,new O.iY(b,h))
C.b.bg(h,new O.iZ())
a0=C.c.a6(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.iP(new V.ax(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.eR(b,"emission"):a2).c
s=b.gcn().c
p=b.gcw().c
o=b.y
o=(o==null?b.y=O.eR(b,"invDiffuse"):o).c
g=b.gbU().c
f=b.Q
f=(f==null?b.Q=new O.iN(b,"bump",new A.ay(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.eR(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.iQ(new V.a1(0,0,0),b,"refract",new A.ay(!1,!1,!1)):d).c
c=b.db
return A.ob(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.iM(b,"alpha",new A.ay(!1,!1,!1)):c).c,n,l,j,h)},
ag:function(a,b){if(b!=null)if(!C.b.B(a,b)){b.a=a.length
a.push(b)}},
aD:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aK(m==null?H.a([],t.e):m)
s=H.Y(m).c
for(;m.u();){r=s.a(m.d)
q=$.jR
if(q==null)q=$.jR=new V.x(0,0,1)
r.c=q
p=$.jQ
r.d=p==null?$.jQ=new V.x(0,1,0):p
p=$.jP
r.e=p==null?$.jP=new V.x(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bQ(q).D()
r.d=n.bQ(r.d).D()
r.e=n.bQ(r.e).D()}}},
it:function(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=a8.a
if(b0==null){s=a8.df()
r=s.bG
q=b1.fr
b0=q.h(0,r)
if(b0==null){p=b1.a
o=t.S
n=t.W
b0=new A.eQ(s,H.a([],t.p),P.X(o,n),P.X(o,t.O),P.X(o,n),P.X(o,t.l),P.X(o,n),P.X(o,t.m),P.X(o,n),P.X(o,t.R),p,r)
b0.eN(s,p)
if(r.length===0)H.h(P.f("May not cache a shader with no name."))
if(q.cs(0,r))H.h(P.f('Shader cache already contains a shader by the name "'+r+'".'))
q.m(0,r,b0)}b0=a8.a=b0
b2.e=null}m=b0.x
l=m.bH
s=b2.e
if(!(s instanceof Z.cF))s=b2.e=null
if(s==null||!s.d.q(0,l)){s=m.k4
if(s){r=b2.d
if(r!=null)r.ar()}r=m.r1
if(r){q=b2.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gR().cq()
q.gX().cq()
q=q.e
if(q!=null)q.aB(0)}}q=m.rx
if(q){p=b2.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gX().hH()
p=p.e
if(p!=null)p.aB(0)}}p=b2.d
k=p==null?a9:p.hG(new Z.jZ(b1.a),l)
if(k==null)return
p=k.b6($.bA())
if(p!=null){o=b0.y
o=o==null?a9:o.c
p.e=o==null?0:o}if(s){s=k.b6($.bz())
if(s!=null){p=b0.Q
p=p==null?a9:p.c
s.e=p==null?1:p}}if(r){s=k.b6($.by())
if(s!=null){r=b0.z
r=r==null?a9:r.c
s.e=r==null?2:r}}if(m.r2){s=k.b6($.bW())
if(s!=null){r=b0.ch
r=r==null?a9:r.c
s.e=r==null?3:r}}if(q){s=k.b6($.bB())
if(s!=null){r=b0.cx
r=r==null?a9:r.c
s.e=r==null?4:r}}if(m.ry){s=k.b6($.bx())
if(s!=null){r=b0.cy
r=r==null?a9:r.c
s.e=r==null?5:r}}b2.e=k}j=H.a([],t.ga)
s=b1.a
s.useProgram(b0.e)
b0.gaj(b0).hU()
if(m.fr){r=b1.dx
r=r.ga5(r)
q=b0.db
if(q!=null)q.aq(r.ae(0,!0))}if(m.fx){r=b1.cx
if(r==null){r=b1.db
q=b1.dx
q=b1.cx=r.ga5(r).K(0,q.ga5(q))
r=q}q=b0.dx
if(q!=null)q.aq(r.ae(0,!0))}r=b1.ch
if(r==null){r=b1.dx
r=b1.ch=b1.gip().K(0,r.ga5(r))}q=b0.fr
if(q!=null)q.aq(r.ae(0,!0))
if(m.go){r=b1.db
r=r.ga5(r)
q=b0.dy
if(q!=null)q.aq(r.ae(0,!0))}if(m.x1){r=$.m6
if(r==null){r=new V.da(1,0,0,0,1,0,0,0,1)
$.m6=r}q=b0.go
if(q!=null)q.aq(r.ae(0,!0))}if(m.x2){r=V.aP()
q=b0.id
if(q!=null)q.aq(r.ae(0,!0))}if(m.y1){r=V.aP()
q=b0.k1
if(q!=null)q.aq(r.ae(0,!0))}if(m.b5>0){r=a8.e.a
i=r.length
q=b0.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.d(r,h)
q=r[h]
p=b0.k3
if(h>=p.length)return H.d(p,h)
p=p[h]
g=new Float32Array(H.cw(q.ae(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}r=m.a
if(r.a){q=a8.f
q=q==null?a9:q.f
if(q==null)q=new V.a1(0,0,0)
p=b0.k4
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.c){r=a8.f
a8.ag(j,r==null?a9:r.e)
r=a8.f
r=r==null?a9:r.e
b0.ah(b0.r2,r)}if(m.k1){r=m.b
if(r.a){q=a8.r
q=q==null?a9:q.f
if(q==null)q=new V.a1(0,0,0)
p=b0.rx
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.c){r=a8.r
a8.ag(j,r==null?a9:r.e)
r=a8.r
r=r==null?a9:r.e
b0.ah(b0.x1,r)}r=m.c
if(r.a){q=a8.x
q=q==null?a9:q.f
if(q==null)q=new V.a1(0,0,0)
p=b0.x2
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.c){r=a8.x
a8.ag(j,r==null?a9:r.e)
r=a8.x
r=r==null?a9:r.e
b0.ah(b0.y2,r)}r=m.d
if(r.a){q=a8.y
q=q==null?a9:q.f
if(q==null)q=new V.a1(0,0,0)
p=b0.b5
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.c){r=a8.y
a8.ag(j,r==null?a9:r.e)
r=a8.y
r=r==null?a9:r.e
b0.ah(b0.bH,r)}r=m.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){p=a8.z
p=p==null?a9:p.ch
if(p==null)p=100
o=b0.dT
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a8.z
q=q==null?a9:q.f
if(q==null)q=new V.a1(1,1,1)
p=b0.dR
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.c){r=a8.z
a8.ag(j,r==null?a9:r.e)
r=a8.z
r=r==null?a9:r.e
b0.ah(b0.dS,r)}r=m.z
if(r.length>0){f=new H.Z(t.y)
q=a8.dx
q=q==null?a9:q.e
if(q==null)q=H.a([],t.i)
p=q.length
o=t.d
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gay()
b=f.h(0,c)
if(b==null)b=0
f.m(0,c,b+1)
n=b0.cA.h(0,c)
if(n==null)n=H.a([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.giH()
a0=$.b2
n=n.bu(a0==null?$.b2=new V.N(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giM()
a0=$.b2
n=n.bu(a0==null?$.b2=new V.N(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gas(d)
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
if(d.gdQ()){n=d.gdG()
a0=a.e
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdH()
a0=a.f
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdI()
a0=a.r
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=b0.cz.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=b1.db
a1=q.ga5(q)
a2=new H.Z(t.y)
q=a8.dx
q=q==null?a9:q.f
if(q==null)q=H.a([],t.U)
p=q.length
o=t.V
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
b=a2.h(0,0)
if(b==null)b=0
a2.m(0,0,b+1)
n=b0.cC.h(0,0)
if(n==null)n=H.a([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=a1.bQ(d.c).D()
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.b
a0=a.f
a0.a.uniform3f(a0.d,n.a,n.b,n.c)}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=b0.cB.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.ch
if(r.length>0){q=b1.db
a1=q.ga5(q)
a3=new H.Z(t.y)
q=a8.dx
q=q==null?a9:q.r
if(q==null)q=H.a([],t.o)
p=q.length
o=t.B
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gay()
b=a3.h(0,c)
if(b==null)b=0
a3.m(0,c,b+1)
n=b0.cE.h(0,c)
if(n==null)n=H.a([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
a4=a1.K(0,d.ga5(d))
n=d.ga5(d)
a0=$.b2
n=n.bu(a0==null?$.b2=new V.N(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=$.b2
n=a4.bu(n==null?$.b2=new V.N(0,0,0):n)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gas(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaQ()
n=a4.ea(0)
a0=a.d
if(a0!=null){g=new Float32Array(H.cw(new V.da(n.a,n.b,n.c,n.e,n.f,n.r,n.y,n.z,n.Q).ae(0,!0)))
a0.a.uniformMatrix3fv(a0.d,!1,g)}d.gaQ()
n=d.gaQ()
if(!C.b.B(j,n)){n.a=j.length
j.push(n)}n=d.gaQ()
a0=n.gbq(n)
if(a0){a0=a.f
if(a0!=null){a5=n.d
a6=a0.a
a0=a0.d
if(a5<6)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.a)}}d.gbf()
n=d.geE()
a0=a.x
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gbf()
if(!C.b.B(j,n)){n.a=j.length
j.push(n)}n=d.gbf()
a0=n.gbq(n)
if(a0){a0=a.r
if(a0!=null){a5=n.d
a6=a0.a
a0=a0.d
if(a5<6)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.a)}}if(d.gdQ()){n=d.gdG()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdH()
a0=a.z
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdI()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a3.h(0,p)
if(i==null)i=0
p=b0.cD.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=b1.db
a1=q.ga5(q)
a7=new H.Z(t.y)
q=a8.dx
q=q==null?a9:q.x
if(q==null)q=H.a([],t.D)
p=q.length
o=t.J
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gay()
b=a7.h(0,c)
if(b==null)b=0
a7.m(0,c,b+1)
n=b0.cG.h(0,c)
if(n==null)n=H.a([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.gio(d)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giK(d).D()
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=a1.bu(d.gio(d))
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gas(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaQ()
n=d.gd_()
a0=a.f
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gcV(d)
a0=a.r
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giV()
a0=a.x
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.giW()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
d.gaQ()
n=d.gaQ()
if(!C.b.B(j,n)){n.a=j.length
j.push(n)}n=d.gaQ()
a0=n.gbq(n)
if(a0){a0=a.dx
if(a0!=null){a5=n.gbq(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gE(n))}}d.gbf()
n=d.geE()
a0=a.z
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gbf()
if(!C.b.B(j,n)){n.a=j.length
j.push(n)}n=d.gbf()
a0=n.gbq(n)
if(a0){a0=a.dy
if(a0!=null){a5=n.gbq(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gE(n))}}if(d.giL()){n=d.giJ()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.giI()
a0=a.ch
if(a0!=null)a0.a.uniform1f(a0.d,n)}if(d.gdQ()){n=d.gdG()
a0=a.cx
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdH()
a0=a.cy
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdI()
a0=a.db
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a7.h(0,p)
if(i==null)i=0
p=b0.cF.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.f.c){r=a8.Q
a8.ag(j,r==null?a9:r.e)
r=a8.Q
r=r==null?a9:r.e
b0.ah(b0.dU,r)}if(m.dy){r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga5(r).ea(0)}q=b0.fy
if(q!=null)q.aq(r.ae(0,!0))}if(m.db){a8.ag(j,a9)
b0.ah(b0.dV,a9)
r=m.r
if(r.a){q=a8.cx
q=q==null?a9:q.f
if(q==null)q=new V.a1(1,1,1)
p=b0.dW
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.c){r=a8.cx
a8.ag(j,r==null?a9:r.e)
r=a8.cx
r=r==null?a9:r.e
b0.ah(b0.dX,r)}r=m.x
q=r.a
if(!q)p=r.c
else p=!0
if(p){p=a8.cy
p=p==null?a9:p.ch
if(p==null)p=0
o=b0.dY
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a8.cy
q=q==null?a9:q.f
if(q==null)q=new V.a1(1,1,1)
p=b0.dZ
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.c){r=a8.cy
a8.ag(j,r==null?a9:r.e)
r=a8.cy
r=r==null?a9:r.e
b0.ah(b0.e_,r)}}r=m.y
q=r.a
p=!q
if(p)o=r.c
else o=!0
if(o){if(q){q=a8.db
q=q==null?a9:q.f
if(q==null)q=1
o=b0.e0
if(o!=null)o.a.uniform1f(o.d,q)}if(r.c){q=a8.db
a8.ag(j,q==null?a9:q.e)
q=a8.db
q=q==null?a9:q.e
b0.ah(b0.e1,q)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h){q=j[h]
if(!q.c&&q.d>=6){q.c=!0
s.activeTexture(33984+q.a)
s.bindTexture(34067,q.b)}}q=t.ed.a(b2.e)
q.co(b1)
q.ba(b1)
q.iE(b1)
if(p)r=r.c
else r=!0
if(r)s.disable(3042)
for(h=0;h<j.length;++h){r=j[h]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(34067,a9)}}s.useProgram(a9)
b0.gaj(b0).hS()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.df().bG}}
O.iS.prototype={
$2:function(a,b){return this.b.push(new A.bb(a,C.c.a6(b+3,4)*4))},
$S:7}
O.iT.prototype={
$2:function(a,b){return C.c.ak(a.a,b.a)},
$S:51}
O.iU.prototype={
$2:function(a,b){return this.b.push(new A.bd(a,C.c.a6(b+3,4)*4))},
$S:7}
O.iV.prototype={
$2:function(a,b){return C.c.ak(a.a,b.a)},
$S:52}
O.iW.prototype={
$2:function(a,b){return this.b.push(new A.bm(a,C.c.a6(b+3,4)*4))},
$S:7}
O.iX.prototype={
$2:function(a,b){return C.c.ak(a.a,b.a)},
$S:53}
O.iY.prototype={
$2:function(a,b){return this.b.push(new A.bo(a,C.c.a6(b+3,4)*4))},
$S:7}
O.iZ.prototype={
$2:function(a,b){return C.c.ak(a.a,b.a)},
$S:54}
O.iM.prototype={
aI:function(){var s,r=this
r.d5()
s=r.f
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.a3(new D.H(r.b,s,1))}}}
O.d8.prototype={
a3:function(a){return this.a.a3(a)},
bX:function(){return this.a3(null)},
aI:function(){},
ci:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aI()
s=q.a
s.a=null
s.a3(null)}},
saC:function(a){var s,r=this,q=r.c
if(!q.c)r.ci(new A.ay(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gv().A(0,r.gbh())
s=r.e
r.e=a
a.gv().n(0,r.gbh())
r.a.a3(new D.H(r.b+".textureCube",s,r.e))}}}
O.iN.prototype={}
O.d9.prototype={
ds:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.a3(new D.H(r.b+".color",s,a))}},
aI:function(){this.d5()
this.ds(new V.a1(1,1,1))},
sas:function(a,b){this.ci(new A.ay(!0,!1,this.c.c))
this.ds(b)}}
O.iP.prototype={}
O.iQ.prototype={
aI:function(){var s,r=this
r.d6()
s=r.ch
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.a3(new D.H(r.b+".refraction",s,1))}}}
O.iR.prototype={
dt:function(a){var s=this,r=s.ch
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.a3(new D.H(s.b+".shininess",r,a))}},
aI:function(){this.d6()
this.dt(100)}}
O.ds.prototype={}
T.dt.prototype={}
T.fu.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.O():s}}
T.jq.prototype={
ee:function(a){var s,r=this,q=34067,p=a+"/posx.png",o=a+"/posy.png",n=a+"/posz.png",m=a+"/negx.png",l=a+"/negy.png",k=a+"/negz.png",j=r.a,i=j.createTexture()
i.toString
j.bindTexture(q,i)
j.texParameteri(q,10242,10497)
j.texParameteri(q,10243,10497)
j.texParameteri(q,10241,9729)
j.texParameteri(q,10240,9729)
j.bindTexture(q,null)
s=new T.fu(i)
r.b_(s,i,p,34069,!1,!1)
r.b_(s,i,m,34070,!1,!1)
r.b_(s,i,o,34071,!1,!1)
r.b_(s,i,l,34072,!1,!1)
r.b_(s,i,n,34073,!1,!1)
r.b_(s,i,k,34074,!1,!1)
return s},
b_:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.a6(s,"load",new T.jr(this,s,!1,b,!1,d,a),!1)},
hj:function(a,b,c){var s,r,q,p,o,n
b=V.lO(b)
s=a.width
r=V.lO(s==null?512:s)
s=a.height
q=V.lO(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.lc()
p.width=r
p.height=q
o=t.ar.a(C.i.eB(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.qg(o.getImageData(0,0,s,n==null?512:n))}}}
T.jr.prototype={
$1:function(a){var s=this,r=s.a,q=r.hj(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.a3.iz(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.hT()}++r.e},
$S:3}
X.ix.prototype={
gv:function(){var s=this.x
return s==null?this.x=D.O():s}}
X.f3.prototype={
gv:function(){var s=this.f
return s==null?this.f=D.O():s},
aW:function(a){var s=this.f
return s==null?null:s.G(a)},
eY:function(){return this.aW(null)},
sbr:function(a){var s,r,q=this
if(!J.G(q.b,a)){s=q.b
if(s!=null)s.gv().A(0,q.gda())
r=q.b
q.b=a
if(a!=null)a.gv().n(0,q.gda())
q.aW(new D.H("mover",r,q.b))}}}
X.jp.prototype={}
V.aN.prototype={
bx:function(a){this.b=new P.iz(C.S)
this.c=null
this.d=H.a([],t.F)},
P:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.a([],t.C))
s=a.split("\n")
for(j=s.length,r=t.C,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.a([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.f8(o,0,o.length)
l=m==null?o:m
l=H.lQ(l," ","&nbsp;")
C.Q.eC(n,l)
l=n.style
l.color=b
C.b.gaz(k.d).push(n)}},
en:function(a,b){var s,r,q,p=this
p.d=H.a([],t.F)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bF()
if(r!=null)for(q=new H.r(s),q=new P.bS(r.cZ(new H.bk(q,q.gl(q))).a());q.u();)p.bN(q.gC(q))}}
V.l5.prototype={
$1:function(a){var s=C.d.cY(this.a.gi3(),2)
if(s!=="0.00")P.lP(s+" fps")},
$S:55}
V.ew.prototype={
bN:function(a){var s=this
switch(a.a){case"Class":s.P(a.b,"#551")
break
case"Comment":s.P(a.b,"#777")
break
case"Id":s.P(a.b,"#111")
break
case"Num":s.P(a.b,"#191")
break
case"Reserved":s.P(a.b,"#119")
break
case"String":s.P(a.b,"#171")
break
case"Symbol":s.P(a.b,"#616")
break
case"Type":s.P(a.b,"#B11")
break
case"Whitespace":s.P(a.b,"#111")
break}},
bF:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()\\-+*%!&|=.,?:;",h="OpenDoubleStr",g="CloseDoubleStr",f="EscDoubleStr",e="OpenSingleStr",d="CloseSingleStr",c="EscSingleStr",b="Slash",a="Comment",a0="EndComment",a1="MLComment",a2="MLCStar",a3="Whitespace",a4=L.jw()
a4.d=a4.k(0,o)
s=a4.k(0,o).j(0,n)
r=t.t
q=new K.u(H.a([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.S("a","z"))
s.push(K.S("A","Z"))
s=a4.k(0,n).j(0,n)
q=new K.u(H.a([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.S("0","9"))
s.push(K.S("a","z"))
s.push(K.S("A","Z"))
a4.k(0,o).j(0,m).a.push(K.S("0","9"))
a4.k(0,m).j(0,m).a.push(K.S("0","9"))
s=a4.k(0,m).j(0,l)
q=new K.u(H.a([],r))
q.p(new H.r("."))
s.a.push(q)
a4.k(0,l).j(0,k).a.push(K.S("0","9"))
a4.k(0,k).j(0,k).a.push(K.S("0","9"))
q=a4.k(0,o).j(0,j)
s=new K.u(H.a([],r))
s.p(new H.r(i))
q.a.push(s)
s=a4.k(0,j).j(0,j)
q=new K.u(H.a([],r))
q.p(new H.r(i))
s.a.push(q)
q=a4.k(0,o).j(0,h)
s=new K.u(H.a([],r))
s.p(new H.r('"'))
q.a.push(s)
s=a4.k(0,h).j(0,g)
q=new K.u(H.a([],r))
q.p(new H.r('"'))
s.a.push(q)
q=a4.k(0,h).j(0,f)
s=new K.u(H.a([],r))
s.p(new H.r("\\"))
q.a.push(s)
s=a4.k(0,f).j(0,h)
q=new K.u(H.a([],r))
q.p(new H.r('"'))
s.a.push(q)
a4.k(0,h).j(0,h).a.push(new K.aU())
q=a4.k(0,o).j(0,e)
s=new K.u(H.a([],r))
s.p(new H.r("'"))
q.a.push(s)
s=a4.k(0,e).j(0,d)
q=new K.u(H.a([],r))
q.p(new H.r("'"))
s.a.push(q)
q=a4.k(0,e).j(0,c)
s=new K.u(H.a([],r))
s.p(new H.r("\\"))
q.a.push(s)
s=a4.k(0,c).j(0,e)
q=new K.u(H.a([],r))
q.p(new H.r("'"))
s.a.push(q)
a4.k(0,e).j(0,e).a.push(new K.aU())
q=a4.k(0,o).j(0,b)
s=new K.u(H.a([],r))
s.p(new H.r("/"))
q.a.push(s)
s=a4.k(0,b).j(0,a)
q=new K.u(H.a([],r))
q.p(new H.r("/"))
s.a.push(q)
q=a4.k(0,a).j(0,a0)
s=new K.u(H.a([],r))
s.p(new H.r("\n"))
q.a.push(s)
s=a4.k(0,a).j(0,a)
q=t.z
p=H.a([],q)
s.a.push(new K.ag(p))
s=new K.u(H.a([],r))
s.p(new H.r("\n"))
p.push(s)
s=a4.k(0,b).j(0,a1)
p=new K.u(H.a([],r))
p.p(new H.r("*"))
s.a.push(p)
p=a4.k(0,a1).j(0,a2)
s=new K.u(H.a([],r))
s.p(new H.r("*"))
p.a.push(s)
s=a4.k(0,a2).j(0,a1)
q=H.a([],q)
s.a.push(new K.ag(q))
s=new K.u(H.a([],r))
s.p(new H.r("*"))
q.push(s)
s=a4.k(0,a2).j(0,a0)
q=new K.u(H.a([],r))
q.p(new H.r("/"))
s.a.push(q)
q=a4.k(0,o).j(0,a3)
s=new K.u(H.a([],r))
s.p(new H.r(" \n\t"))
q.a.push(s)
s=a4.k(0,a3).j(0,a3)
r=new K.u(H.a([],r))
r.p(new H.r(" \n\t"))
s.a.push(r)
r=a4.k(0,m)
r.d=r.a.S("Num")
r=a4.k(0,k)
r.d=r.a.S("Num")
r=a4.k(0,j)
r.d=r.a.S("Symbol")
r=a4.k(0,g)
r.d=r.a.S("String")
r=a4.k(0,d)
r.d=r.a.S("String")
r=a4.k(0,a0)
r.d=r.a.S(a)
r=a4.k(0,a3)
r.d=r.a.S(a3)
r=a4.k(0,n)
r=r.d=r.a.S(n)
s=t.s
r.aP(0,"Class",H.a(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aP(0,"Type",H.a(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aP(0,"Reserved",H.a(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a4}}
V.eD.prototype={
bN:function(a){var s=this
switch(a.a){case"Builtin":s.P(a.b,"#411")
break
case"Comment":s.P(a.b,"#777")
break
case"Id":s.P(a.b,"#111")
break
case"Num":s.P(a.b,"#191")
break
case"Preprocess":s.P(a.b,"#737")
break
case"Reserved":s.P(a.b,"#119")
break
case"Symbol":s.P(a.b,"#611")
break
case"Type":s.P(a.b,"#171")
break
case"Whitespace":s.P(a.b,"#111")
break}},
bF:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()[]\\-+*%!&|=.,?:;",h="Slash",g="Comment",f="EndComment",e="Preprocess",d="EndPreprocess",c="Whitespace",b=L.jw()
b.d=b.k(0,o)
s=b.k(0,o).j(0,n)
r=t.t
q=new K.u(H.a([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.S("a","z"))
s.push(K.S("A","Z"))
s=b.k(0,n).j(0,n)
q=new K.u(H.a([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.S("0","9"))
s.push(K.S("a","z"))
s.push(K.S("A","Z"))
b.k(0,o).j(0,m).a.push(K.S("0","9"))
b.k(0,m).j(0,m).a.push(K.S("0","9"))
s=b.k(0,m).j(0,l)
q=new K.u(H.a([],r))
q.p(new H.r("."))
s.a.push(q)
b.k(0,l).j(0,k).a.push(K.S("0","9"))
b.k(0,k).j(0,k).a.push(K.S("0","9"))
q=b.k(0,o).j(0,j)
s=new K.u(H.a([],r))
s.p(new H.r(i))
q.a.push(s)
s=b.k(0,j).j(0,j)
q=new K.u(H.a([],r))
q.p(new H.r(i))
s.a.push(q)
q=b.k(0,o).j(0,h)
s=new K.u(H.a([],r))
s.p(new H.r("/"))
q.a.push(s)
s=b.k(0,h).j(0,g)
q=new K.u(H.a([],r))
q.p(new H.r("/"))
s.a.push(q)
b.k(0,h).j(0,j).a.push(new K.aU())
q=b.k(0,g).j(0,f)
s=new K.u(H.a([],r))
s.p(new H.r("\n"))
q.a.push(s)
s=b.k(0,g).j(0,g)
q=t.z
p=H.a([],q)
s.a.push(new K.ag(p))
s=new K.u(H.a([],r))
s.p(new H.r("\n"))
p.push(s)
s=b.k(0,o).j(0,e)
p=new K.u(H.a([],r))
p.p(new H.r("#"))
s.a.push(p)
p=b.k(0,e).j(0,e)
q=H.a([],q)
p.a.push(new K.ag(q))
p=new K.u(H.a([],r))
p.p(new H.r("\n"))
q.push(p)
p=b.k(0,e).j(0,d)
q=new K.u(H.a([],r))
q.p(new H.r("\n"))
p.a.push(q)
q=b.k(0,o).j(0,c)
p=new K.u(H.a([],r))
p.p(new H.r(" \n\t"))
q.a.push(p)
p=b.k(0,c).j(0,c)
r=new K.u(H.a([],r))
r.p(new H.r(" \n\t"))
p.a.push(r)
r=b.k(0,m)
r.d=r.a.S("Num")
r=b.k(0,k)
r.d=r.a.S("Num")
r=b.k(0,j)
r.d=r.a.S("Symbol")
r=b.k(0,f)
r.d=r.a.S(g)
r=b.k(0,d)
r.d=r.a.S(e)
r=b.k(0,c)
r.d=r.a.S(c)
r=b.k(0,n)
r=r.d=r.a.S(n)
p=t.s
r.aP(0,"Type",H.a(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],p))
r.aP(0,"Reserved",H.a(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],p))
r.aP(0,"Builtin",H.a(["gl_FragColor","gl_Position"],p))
return b}}
V.eE.prototype={
bN:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.P(a.b,"#911")
s.P("=",r)
break
case"Id":s.P(a.b,r)
break
case"Other":s.P(a.b,r)
break
case"Reserved":s.P(a.b,"#119")
break
case"String":s.P(a.b,"#171")
break
case"Symbol":s.P(a.b,"#616")
break}},
bF:function(){var s,r,q,p="Start",o="Id",n="Attr",m="Sym",l="OpenStr",k="CloseStr",j="Other",i=L.jw()
i.d=i.k(0,p)
s=i.k(0,p).j(0,o)
r=t.t
q=new K.u(H.a([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.S("a","z"))
s.push(K.S("A","Z"))
s=i.k(0,o).j(0,o)
q=new K.u(H.a([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.S("0","9"))
s.push(K.S("a","z"))
s.push(K.S("A","Z"))
s=i.k(0,o).j(0,n)
q=new K.u(H.a([],r))
q.p(new H.r("="))
s.a.push(q)
s.c=!0
s=i.k(0,p).j(0,m)
q=new K.u(H.a([],r))
q.p(new H.r("</\\-!>="))
s.a.push(q)
q=i.k(0,m).j(0,m)
s=new K.u(H.a([],r))
s.p(new H.r("</\\-!>="))
q.a.push(s)
s=i.k(0,p).j(0,l)
q=new K.u(H.a([],r))
q.p(new H.r('"'))
s.a.push(q)
q=i.k(0,l).j(0,k)
s=new K.u(H.a([],r))
s.p(new H.r('"'))
q.a.push(s)
s=i.k(0,l).j(0,"EscStr")
q=new K.u(H.a([],r))
q.p(new H.r("\\"))
s.a.push(q)
q=i.k(0,"EscStr").j(0,l)
s=new K.u(H.a([],r))
s.p(new H.r('"'))
q.a.push(s)
i.k(0,l).j(0,l).a.push(new K.aU())
i.k(0,p).j(0,j).a.push(new K.aU())
s=i.k(0,j).j(0,j)
q=H.a([],t.z)
s.a.push(new K.ag(q))
r=new K.u(H.a([],r))
r.p(new H.r('</\\-!>=_"'))
q.push(r)
q.push(K.S("a","z"))
q.push(K.S("A","Z"))
q=i.k(0,m)
q.d=q.a.S("Symbol")
q=i.k(0,k)
q.d=q.a.S("String")
q=i.k(0,o)
r=q.a.S(o)
q.d=r
r.aP(0,"Reserved",H.a(["DOCTYPE","html","head","meta","link","title","body","script"],t.s))
r=i.k(0,n)
r.d=r.a.S(n)
r=i.k(0,j)
r.d=r.a.S(j)
return i}}
V.f5.prototype={
en:function(a,b){this.d=H.a([],t.F)
this.P(C.b.j(b,"\n"),"#111")},
bN:function(a){},
bF:function(){return null}}
V.j8.prototype={
bC:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.mp().gcS().h(0,k)
if(j==null)if(d){c.$0()
l.dB(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.aS(p)
o.gbE(p).n(0,q)
n=W.o_("radio")
n.checked=s
n.name=k
W.a6(n,"change",new V.j9(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gbE(p)
r=r.createElement("br")
r.toString
p.n(0,r)},
aw:function(a,b,c){return this.bC(a,b,c,!1)},
dB:function(a){var s,r,q=P.mp(),p=t.N,o=P.o8(q.gcS(),p,p)
o.m(0,this.a,a)
s=q.es(0,o)
p=window.history
p.toString
r=s.gcl()
p.replaceState(new P.ke([],[]).bR(""),"",r)}}
V.j9.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.dB(s.d)}},
$S:3}
V.ji.prototype={
dE:function(a){var s,r,q,p,o,n,m=this.hn(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.r(C.b.i6(a)),s=new P.bS(m.cZ(new H.bk(s,s.gl(s))).a());s.u();){r=s.gC(s)
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
if(H.ne(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.km(C.w,r,C.e,!1)
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
eA:function(a){var s,r,q,p=t.F,o=new V.ew("dart",H.a([],p))
o.bx("dart")
s=new V.eD("glsl",H.a([],p))
s.bx("glsl")
r=new V.eE("html",H.a([],p))
r.bx("html")
q=C.b.i_(H.a([o,s,r],t.g6),new V.jl(a))
if(q!=null)return q
p=new V.f5("plain",H.a([],p))
p.bx("plain")
return p},
dD:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.a([],t.t)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.a2(q,"+")){b2[r]=C.a.ad(q,1)
a8.push(1)
s=!0}else if(C.a.a2(q,"-")){b2[r]=C.a.ad(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.eA(b0)
p.en(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.km(C.w,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lV()
h.href="#"+l
h.textContent=a9
i.appendChild(h).toString
j.appendChild(i).toString
k.appendChild(j).toString
m.appendChild(k).toString
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.q)(q),++a1)a0.appendChild(q[a1]).toString
d.appendChild(c).toString
d.appendChild(b).toString
d.appendChild(a0).toString
m.appendChild(d).toString}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.q)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.b.gV(q);a4.u();)b.appendChild(a4.gC(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
hy:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
q=t.bY
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
hn:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
f=L.jw()
f.d=f.k(0,o)
s=f.k(0,o).j(0,n)
r=t.t
q=new K.u(H.a([],r))
q.p(new H.r("*"))
s.a.push(q)
s.c=!0
s=f.k(0,n).j(0,n)
q=t.z
p=H.a([],q)
s.a.push(new K.ag(p))
s=new K.u(H.a([],r))
s.p(new H.r("*"))
p.push(s)
s=f.k(0,n).j(0,"BoldEnd")
p=new K.u(H.a([],r))
p.p(new H.r("*"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,m)
p=new K.u(H.a([],r))
p.p(new H.r("_"))
s.a.push(p)
s.c=!0
s=f.k(0,m).j(0,m)
p=H.a([],q)
s.a.push(new K.ag(p))
s=new K.u(H.a([],r))
s.p(new H.r("_"))
p.push(s)
s=f.k(0,m).j(0,l)
p=new K.u(H.a([],r))
p.p(new H.r("_"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,k)
p=new K.u(H.a([],r))
p.p(new H.r("`"))
s.a.push(p)
s.c=!0
s=f.k(0,k).j(0,k)
p=H.a([],q)
s.a.push(new K.ag(p))
s=new K.u(H.a([],r))
s.p(new H.r("`"))
p.push(s)
s=f.k(0,k).j(0,"CodeEnd")
p=new K.u(H.a([],r))
p.p(new H.r("`"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,j)
p=new K.u(H.a([],r))
p.p(new H.r("["))
s.a.push(p)
s.c=!0
s=f.k(0,j).j(0,i)
p=new K.u(H.a([],r))
p.p(new H.r("|"))
s.a.push(p)
p=f.k(0,j).j(0,h)
s=new K.u(H.a([],r))
s.p(new H.r("]"))
p.a.push(s)
p.c=!0
p=f.k(0,j).j(0,j)
s=H.a([],q)
p.a.push(new K.ag(s))
p=new K.u(H.a([],r))
p.p(new H.r("|]"))
s.push(p)
p=f.k(0,i).j(0,h)
s=new K.u(H.a([],r))
s.p(new H.r("]"))
p.a.push(s)
p.c=!0
p=f.k(0,i).j(0,i)
s=H.a([],q)
p.a.push(new K.ag(s))
p=new K.u(H.a([],r))
p.p(new H.r("|]"))
s.push(p)
f.k(0,o).j(0,g).a.push(new K.aU())
p=f.k(0,g).j(0,g)
q=H.a([],q)
p.a.push(new K.ag(q))
r=new K.u(H.a([],r))
r.p(new H.r("*_`["))
q.push(r)
r=f.k(0,"BoldEnd")
r.d=r.a.S(n)
r=f.k(0,l)
r.d=r.a.S(m)
r=f.k(0,"CodeEnd")
r.d=r.a.S(k)
r=f.k(0,h)
r.d=r.a.S("Link")
r=f.k(0,g)
r.d=r.a.S(g)
return this.b=f}}
V.jk.prototype={
$1:function(a){P.ml(C.m,new V.jj(this.a))},
$S:3}
V.jj.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.at(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.z(-0.01*s)+"px"
q.top=r},
$S:0}
V.jl.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:56}
R.kV.prototype={
$0:function(){this.a.sac(0,F.lJ(1,null,null,1))},
$S:0}
R.kW.prototype={
$0:function(){this.a.sac(0,F.lJ(8,null,null,8))},
$S:0}
R.kX.prototype={
$0:function(){this.a.sac(0,F.n1(!0,40,1))},
$S:0}
R.kY.prototype={
$0:function(){this.a.sac(0,F.n1(!1,40,0))},
$S:0}
R.kZ.prototype={
$0:function(){this.a.sac(0,F.qv(10,20))},
$S:0}
R.l_.prototype={
$0:function(){var s=F.jg(),r=Math.sqrt(5)/2+0.5,q=F.ai(s,new V.x(-1,r,0)),p=F.ai(s,new V.x(1,r,0)),o=-r,n=F.ai(s,new V.x(-1,o,0)),m=F.ai(s,new V.x(1,o,0)),l=F.ai(s,new V.x(0,-1,o)),k=F.ai(s,new V.x(0,1,o)),j=F.ai(s,new V.x(0,-1,r)),i=F.ai(s,new V.x(0,1,r)),h=F.ai(s,new V.x(r,0,1)),g=F.ai(s,new V.x(r,0,-1)),f=F.ai(s,new V.x(o,0,1)),e=F.ai(s,new V.x(o,0,-1))
F.V(s,q,e,k,2)
F.V(s,q,k,p,2)
F.V(s,q,p,i,2)
F.V(s,q,i,f,2)
F.V(s,q,f,e,2)
F.V(s,p,k,g,2)
F.V(s,k,e,l,2)
F.V(s,e,f,n,2)
F.V(s,f,i,j,2)
F.V(s,i,p,h,2)
F.V(s,m,g,l,2)
F.V(s,m,l,n,2)
F.V(s,m,n,j,2)
F.V(s,m,j,h,2)
F.V(s,m,h,g,2)
F.V(s,l,g,k,2)
F.V(s,n,l,e,2)
F.V(s,j,n,f,2)
F.V(s,h,j,i,2)
F.V(s,g,h,p,2)
s.ef(new F.dL(),new F.jU())
this.a.sac(0,s)},
$S:0}
R.l0.prototype={
$0:function(){this.a.sac(0,F.nd(6,6))},
$S:0}
R.l1.prototype={
$0:function(){this.a.sac(0,F.qF())},
$S:0}
R.l2.prototype={
$0:function(){this.a.sac(0,F.qu())},
$S:0}
R.l3.prototype={
$1:function(a){var s,r=this.a,q=this.b,p=q.a
p=p==null?null:p.c
s=t.s
r.dD("Vertex Shader","glsl",0,H.a((p==null?"":p).split("\n"),s))
q=q.a
q=q==null?null:q.d
r.dD("Fragment Shader","glsl",0,H.a((q==null?"":q).split("\n"),s))},
$S:2};(function aliases(){var s=J.b.prototype
s.eH=s.i
s=J.bj.prototype
s.eJ=s.i
s=P.j.prototype
s.eI=s.bS
s=W.E.prototype
s.bV=s.al
s=W.dY.prototype
s.eK=s.ax
s=K.cT.prototype
s.eG=s.aM
s.bW=s.i
s=O.d8.prototype
s.d5=s.aI
s=O.d9.prototype
s.d6=s.aI})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pw","o4",57)
r(P,"qa","oI",13)
r(P,"qb","oJ",13)
r(P,"qc","oK",13)
q(P,"n_","q5",0)
r(W,"rN","il",59)
p(W,"qn",4,null,["$4"],["oL"],21,0)
p(W,"qo",4,null,["$4"],["oM"],21,0)
var j
o(j=E.bH.prototype,"gel",0,0,null,["$1","$0"],["em","ih"],1,0)
o(j,"gej",0,0,null,["$1","$0"],["ek","ig"],1,0)
o(j,"geh",0,0,null,["$1","$0"],["ei","ib"],1,0)
n(j,"gi9","ia",8)
n(j,"gic","ie",8)
o(j=E.fv.prototype,"gd7",0,0,null,["$1","$0"],["d9","d8"],1,0)
m(j,"giv","eu",0)
l(j=X.fM.prototype,"gfI","fJ",3)
l(j,"gfu","fv",3)
l(j,"gfC","fD",4)
l(j,"gfM","fN",28)
l(j,"gfK","fL",28)
l(j,"gfQ","fR",4)
l(j,"gfU","fV",4)
l(j,"gfG","fH",4)
l(j,"gfS","fT",4)
l(j,"gfE","fF",4)
l(j,"gfW","fX",36)
l(j,"gfY","fZ",3)
l(j,"gha","hb",11)
l(j,"gh6","h7",11)
l(j,"gh8","h9",11)
o(D.c1.prototype,"geS",0,0,null,["$1","$0"],["aE","eT"],1,0)
o(j=D.cY.prototype,"gdl",0,0,null,["$1","$0"],["dm","fO"],1,0)
l(j,"gh0","h1",38)
n(j,"gfn","fo",22)
n(j,"gh4","h5",22)
k(V.a7.prototype,"gl","bp",14)
k(V.x.prototype,"gl","bp",14)
k(V.bq.prototype,"gl","bp",14)
o(j=U.c4.prototype,"gb0",0,0,null,["$1","$0"],["U","ab"],1,0)
n(j,"gfl","fm",20)
n(j,"gh2","h3",20)
o(j=U.dG.prototype,"gb0",0,0,null,["$1","$0"],["U","ab"],1,0)
l(j,"gc6","c7",10)
l(j,"gc8","c9",10)
l(j,"gca","cb",10)
o(j=U.dH.prototype,"gb0",0,0,null,["$1","$0"],["U","ab"],1,0)
l(j,"gc6","c7",2)
l(j,"gc8","c9",2)
l(j,"gca","cb",2)
l(j,"gfe","ff",2)
l(j,"gfg","fh",2)
l(j,"ghu","hv",2)
l(j,"ghs","ht",2)
l(j,"ghq","hr",2)
l(U.dI.prototype,"gfj","fk",2)
o(j=M.ez.prototype,"gav",0,0,null,["$1","$0"],["aF","eU"],1,0)
n(j,"gfw","fz",8)
n(j,"gfA","fB",8)
o(j=O.d7.prototype,"gbh",0,0,null,["$1","$0"],["a3","bX"],1,0)
o(j,"gdn",0,0,null,["$1","$0"],["dq","hi"],1,0)
n(j,"gfp","fq",19)
n(j,"gfs","ft",19)
o(O.d8.prototype,"gbh",0,0,null,["$1","$0"],["a3","bX"],1,0)
o(X.f3.prototype,"gda",0,0,null,["$1","$0"],["aW","eY"],1,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.R,null)
q(P.R,[H.lj,J.b,J.ap,P.L,P.dR,P.j,H.bk,P.eG,H.cQ,H.fJ,H.cJ,H.jz,H.j6,H.hu,H.bF,P.M,H.iG,H.eO,H.eJ,H.aF,H.h6,P.e3,P.cu,P.bS,P.fQ,P.ci,P.fm,P.kq,P.ea,P.k6,P.dQ,P.k,P.hJ,P.d5,P.dl,P.es,P.iA,P.ko,P.kn,P.a_,P.bG,P.f2,P.dq,P.h3,P.iw,P.ak,P.a0,P.bT,P.jE,P.ho,W.ib,W.lf,W.lt,W.ct,W.P,W.dg,W.dY,W.hz,W.cR,W.ka,W.hK,P.kd,P.e5,P.hm,K.aU,K.cT,K.f9,K.u,L.fj,L.fw,L.fx,L.jv,O.aq,O.db,E.i5,E.bH,E.c_,E.cd,E.h1,E.ja,E.fv,Z.fO,Z.jZ,Z.cF,Z.c6,Z.br,D.i7,D.c2,D.W,X.cG,X.eL,X.iE,X.iK,X.aa,X.j2,X.jx,X.fM,D.c1,V.a1,V.ax,V.ip,V.da,V.bl,V.T,V.N,V.bN,V.fb,V.a7,V.x,V.bq,U.dG,U.dH,U.dI,M.ez,A.ep,A.i0,A.ay,A.bb,A.bd,A.bm,A.bo,A.iO,A.dz,A.dA,A.dC,A.dF,A.a4,A.jC,F.ar,F.it,F.eN,F.iF,F.f7,F.jf,F.dn,F.dp,F.bO,F.cp,F.y,F.am,F.aI,F.jV,F.jW,F.b6,O.ds,O.d8,O.iP,T.jq,X.jp,X.f3,V.aN,V.j8,V.ji])
q(J.b,[J.eH,J.cW,J.bj,J.w,J.c8,J.bi,H.dc,H.a3,W.e,W.hZ,W.bC,W.cH,W.aW,W.K,W.fV,W.az,W.ie,W.ig,W.fX,W.cN,W.fZ,W.ih,W.m,W.h4,W.aA,W.iy,W.h8,W.bJ,W.iJ,W.j_,W.hc,W.hd,W.aC,W.he,W.hg,W.aD,W.hk,W.hn,W.aG,W.hp,W.aH,W.hv,W.al,W.hB,W.jt,W.av,W.hD,W.jy,W.jJ,W.hL,W.hN,W.hP,W.hR,W.hT,P.aY,P.ha,P.b1,P.hi,P.j7,P.hw,P.b3,P.hF,P.i1,P.fS,P.cf,P.hs])
q(J.bj,[J.f4,J.bQ,J.aX])
r(J.iC,J.w)
q(J.c8,[J.cV,J.eI])
q(P.L,[H.cX,P.fA,H.eK,H.fI,H.fd,H.h2,P.eo,P.f_,P.aL,P.fK,P.fH,P.ch,P.et,P.ev])
r(P.d0,P.dR)
q(P.d0,[H.cn,W.fT,W.a8,P.eB])
r(H.r,H.cn)
q(P.j,[H.n,H.aZ,H.b7,P.cU])
q(H.n,[H.d1,H.cZ])
r(H.cO,H.aZ)
q(P.eG,[H.eP,H.fP])
r(H.d6,H.d1)
r(H.cK,H.cJ)
r(H.dh,P.fA)
q(H.bF,[H.fr,H.iD,H.kO,H.kP,H.kQ,P.k0,P.k_,P.k1,P.k2,P.kj,P.ki,P.kE,P.k8,P.k9,P.iH,P.iL,P.jN,P.jM,P.ii,P.ij,P.jI,P.jF,P.jG,P.jH,P.kl,P.kk,P.kx,P.ky,P.kz,W.ik,W.j0,W.j1,W.je,W.jn,W.k3,W.j4,W.j3,W.kb,W.kc,W.kh,W.kp,P.kf,P.kg,P.kv,P.kF,P.iu,P.iv,P.i2,E.jb,E.jc,E.jd,E.js,D.ir,D.is,F.kr,F.kG,F.kI,F.kJ,F.kK,F.kU,F.l7,F.l6,F.l9,F.kT,F.kH,F.jh,F.jY,F.jX,F.jS,F.jT,O.iS,O.iT,O.iU,O.iV,O.iW,O.iX,O.iY,O.iZ,T.jr,V.l5,V.j9,V.jk,V.jj,V.jl,R.kV,R.kW,R.kX,R.kY,R.kZ,R.l_,R.l0,R.l1,R.l2,R.l3])
q(H.fr,[H.fk,H.bZ])
r(P.d4,P.M)
q(P.d4,[H.Z,W.fR])
r(H.cc,H.a3)
q(H.cc,[H.dT,H.dV])
r(H.dU,H.dT)
r(H.bL,H.dU)
r(H.dW,H.dV)
r(H.dd,H.dW)
q(H.dd,[H.eV,H.eW,H.eX,H.eY,H.eZ,H.de,H.bM])
r(H.e4,H.h2)
r(P.e0,P.cU)
r(P.k7,P.kq)
r(P.dX,P.ea)
r(P.dP,P.dX)
r(P.e8,P.d5)
r(P.co,P.e8)
q(P.es,[P.i3,P.im])
r(P.eu,P.fm)
q(P.eu,[P.i4,P.iz,P.jO,P.jL])
r(P.jK,P.im)
q(P.aL,[P.dk,P.eF])
r(P.fW,P.bT)
q(W.e,[W.t,W.eA,W.c9,W.at,W.dZ,W.au,W.ah,W.e1,W.fN,W.cr,P.er,P.bc])
q(W.t,[W.E,W.aM,W.cs])
q(W.E,[W.v,P.o])
q(W.v,[W.em,W.en,W.bY,W.bD,W.bE,W.be,W.eC,W.c5,W.c7,W.fe,W.bp,W.dr,W.fp,W.fq,W.cj])
r(W.ia,W.aW)
r(W.cL,W.fV)
q(W.az,[W.ic,W.id])
r(W.fY,W.fX)
r(W.cM,W.fY)
r(W.h_,W.fZ)
r(W.ey,W.h_)
r(W.aj,W.bC)
r(W.h5,W.h4)
r(W.c3,W.h5)
r(W.h9,W.h8)
r(W.bI,W.h9)
r(W.b5,W.m)
q(W.b5,[W.bK,W.as,W.bP])
r(W.eS,W.hc)
r(W.eT,W.hd)
r(W.hf,W.he)
r(W.eU,W.hf)
r(W.hh,W.hg)
r(W.df,W.hh)
r(W.hl,W.hk)
r(W.f6,W.hl)
r(W.fc,W.hn)
r(W.e_,W.dZ)
r(W.fg,W.e_)
r(W.hq,W.hp)
r(W.fh,W.hq)
r(W.fl,W.hv)
r(W.hC,W.hB)
r(W.fs,W.hC)
r(W.e2,W.e1)
r(W.ft,W.e2)
r(W.hE,W.hD)
r(W.fy,W.hE)
r(W.bs,W.as)
r(W.hM,W.hL)
r(W.fU,W.hM)
r(W.dM,W.cN)
r(W.hO,W.hN)
r(W.h7,W.hO)
r(W.hQ,W.hP)
r(W.dS,W.hQ)
r(W.hS,W.hR)
r(W.hr,W.hS)
r(W.hU,W.hT)
r(W.hy,W.hU)
r(W.h0,W.fR)
r(W.dN,P.ci)
r(W.hA,W.dY)
r(P.ke,P.kd)
r(P.ad,P.hm)
r(P.hb,P.ha)
r(P.eM,P.hb)
r(P.hj,P.hi)
r(P.f0,P.hj)
r(P.cg,P.o)
r(P.hx,P.hw)
r(P.fn,P.hx)
r(P.hG,P.hF)
r(P.fz,P.hG)
r(P.eq,P.fS)
r(P.f1,P.bc)
r(P.ht,P.hs)
r(P.fi,P.ht)
q(K.cT,[K.ag,L.dv])
q(E.i5,[Z.c0,A.dm,T.dt])
q(D.W,[D.bg,D.bh,D.H,X.f8])
q(X.f8,[X.d3,X.ca,X.cb,X.du])
q(O.aq,[D.cY,U.c4])
q(D.i7,[U.i8,U.a2])
r(U.cI,U.a2)
r(A.eQ,A.dm)
q(A.a4,[A.cl,A.fD,A.fE,A.fF,A.fB,A.dw,A.fC,A.dx,A.dy,A.fG,A.dB,A.cm,A.dD,A.dE])
r(F.jm,F.it)
r(F.jB,F.iF)
r(F.dL,F.jV)
q(F.jW,[F.jU,F.j5])
r(O.d7,O.ds)
q(O.d8,[O.iM,O.iN,O.d9])
q(O.d9,[O.iQ,O.iR])
r(T.fu,T.dt)
r(X.ix,X.jp)
q(V.aN,[V.ew,V.eD,V.eE,V.f5])
s(H.cn,H.fJ)
s(H.dT,P.k)
s(H.dU,H.cQ)
s(H.dV,P.k)
s(H.dW,H.cQ)
s(P.dR,P.k)
s(P.e8,P.hJ)
s(P.ea,P.dl)
s(W.fV,W.ib)
s(W.fX,P.k)
s(W.fY,W.P)
s(W.fZ,P.k)
s(W.h_,W.P)
s(W.h4,P.k)
s(W.h5,W.P)
s(W.h8,P.k)
s(W.h9,W.P)
s(W.hc,P.M)
s(W.hd,P.M)
s(W.he,P.k)
s(W.hf,W.P)
s(W.hg,P.k)
s(W.hh,W.P)
s(W.hk,P.k)
s(W.hl,W.P)
s(W.hn,P.M)
s(W.dZ,P.k)
s(W.e_,W.P)
s(W.hp,P.k)
s(W.hq,W.P)
s(W.hv,P.M)
s(W.hB,P.k)
s(W.hC,W.P)
s(W.e1,P.k)
s(W.e2,W.P)
s(W.hD,P.k)
s(W.hE,W.P)
s(W.hL,P.k)
s(W.hM,W.P)
s(W.hN,P.k)
s(W.hO,W.P)
s(W.hP,P.k)
s(W.hQ,W.P)
s(W.hR,P.k)
s(W.hS,W.P)
s(W.hT,P.k)
s(W.hU,W.P)
s(P.ha,P.k)
s(P.hb,W.P)
s(P.hi,P.k)
s(P.hj,W.P)
s(P.hw,P.k)
s(P.hx,W.P)
s(P.hF,P.k)
s(P.hG,W.P)
s(P.fS,P.M)
s(P.hs,P.k)
s(P.ht,W.P)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",I:"double",a5:"num",l:"String",af:"bool",ak:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","~([W?])","~(W)","~(m)","~(as)","~(cp,I,I)","~(l,@)","~(i,i)","~(i,j<bH>)","~(ar)","~(W?)","~(bP)","ak()","~(~())","I()","~(@,@)","I(I)","@()","I(I,I)","~(i,j<bl>)","~(i,j<a2?>)","af(E,l,l,ct)","~(i,j<aB>)","~(ck,l,i)","af(t)","N(I)","af(aQ)","af(l)","~(bK)","~(~(W))","l(i)","~(@)","~(a5)","ak(@,@)","~(t,t?)","l(l)","~(bs)","@(@)","af(j<aB>)","ck(@,@)","~(l,l?)","i(i,i)","~(l[@])","~(l,i)","J<l,l>(J<l,l>,l)","~(R?,R?)","ak(~())","c0(i)","ak(@)","@(l)","~(l,l)","i(bb,bb)","i(bd,bd)","i(bm,bm)","i(bo,bo)","~(ju)","af(aN?)","i(@,@)","@(@,l)","l(e)","E(t)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.p3(v.typeUniverse,JSON.parse('{"f4":"bj","bQ":"bj","aX":"bj","qI":"m","qU":"m","qK":"bc","qJ":"e","r0":"e","r3":"e","qH":"o","qV":"o","qL":"v","qY":"v","qW":"t","qT":"t","rt":"ah","qP":"b5","qM":"aM","r4":"aM","r2":"as","qX":"bI","qQ":"K","qR":"al","r_":"bL","qZ":"a3","eH":{"af":[]},"bj":{"m4":[]},"w":{"p":["1"],"n":["1"],"j":["1"],"A":["1"]},"iC":{"w":["1"],"p":["1"],"n":["1"],"j":["1"],"A":["1"]},"c8":{"I":[],"a5":[]},"cV":{"I":[],"i":[],"a5":[]},"eI":{"I":[],"a5":[]},"bi":{"l":[],"A":["@"]},"cX":{"L":[]},"r":{"k":["i"],"p":["i"],"n":["i"],"j":["i"],"k.E":"i"},"n":{"j":["1"]},"d1":{"n":["1"],"j":["1"]},"aZ":{"j":["2"],"j.E":"2"},"cO":{"aZ":["1","2"],"n":["2"],"j":["2"],"j.E":"2"},"d6":{"d1":["2"],"n":["2"],"j":["2"],"j.E":"2"},"b7":{"j":["1"],"j.E":"1"},"cn":{"k":["1"],"p":["1"],"n":["1"],"j":["1"]},"cJ":{"J":["1","2"]},"cK":{"J":["1","2"]},"dh":{"L":[]},"eK":{"L":[]},"fI":{"L":[]},"bF":{"cS":[]},"fr":{"cS":[]},"fk":{"cS":[]},"bZ":{"cS":[]},"fd":{"L":[]},"Z":{"M":["1","2"],"J":["1","2"],"M.V":"2"},"cZ":{"n":["1"],"j":["1"],"j.E":"1"},"eJ":{"md":[]},"cc":{"B":["1"],"a3":[],"A":["1"]},"bL":{"k":["I"],"B":["I"],"p":["I"],"a3":[],"n":["I"],"A":["I"],"j":["I"],"k.E":"I"},"dd":{"k":["i"],"B":["i"],"p":["i"],"a3":[],"n":["i"],"A":["i"],"j":["i"]},"eV":{"k":["i"],"B":["i"],"p":["i"],"a3":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"eW":{"k":["i"],"B":["i"],"p":["i"],"a3":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"eX":{"k":["i"],"B":["i"],"p":["i"],"a3":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"eY":{"k":["i"],"B":["i"],"p":["i"],"a3":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"eZ":{"k":["i"],"B":["i"],"p":["i"],"a3":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"de":{"k":["i"],"B":["i"],"p":["i"],"a3":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"bM":{"k":["i"],"ck":[],"B":["i"],"p":["i"],"a3":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"h2":{"L":[]},"e4":{"L":[]},"e3":{"ju":[]},"e0":{"j":["1"],"j.E":"1"},"dP":{"dl":["1"],"n":["1"],"j":["1"]},"cU":{"j":["1"]},"d0":{"k":["1"],"p":["1"],"n":["1"],"j":["1"]},"d4":{"M":["1","2"],"J":["1","2"]},"M":{"J":["1","2"]},"d5":{"J":["1","2"]},"co":{"J":["1","2"]},"dX":{"dl":["1"],"n":["1"],"j":["1"]},"I":{"a5":[]},"i":{"a5":[]},"p":{"n":["1"],"j":["1"]},"eo":{"L":[]},"fA":{"L":[]},"f_":{"L":[]},"aL":{"L":[]},"dk":{"L":[]},"eF":{"L":[]},"fK":{"L":[]},"fH":{"L":[]},"ch":{"L":[]},"et":{"L":[]},"f2":{"L":[]},"dq":{"L":[]},"ev":{"L":[]},"bT":{"fL":[]},"ho":{"fL":[]},"fW":{"fL":[]},"v":{"E":[],"t":[],"e":[]},"be":{"E":[],"t":[],"e":[]},"E":{"t":[],"e":[]},"aj":{"bC":[]},"bK":{"m":[]},"as":{"m":[]},"t":{"e":[]},"at":{"e":[]},"au":{"e":[]},"ah":{"e":[]},"bP":{"m":[]},"b5":{"m":[]},"bs":{"as":[],"m":[]},"ct":{"aQ":[]},"em":{"E":[],"t":[],"e":[]},"en":{"E":[],"t":[],"e":[]},"bY":{"E":[],"t":[],"e":[]},"bD":{"E":[],"t":[],"e":[]},"bE":{"E":[],"t":[],"e":[]},"aM":{"t":[],"e":[]},"cM":{"k":["ad<a5>"],"p":["ad<a5>"],"B":["ad<a5>"],"n":["ad<a5>"],"j":["ad<a5>"],"A":["ad<a5>"],"k.E":"ad<a5>"},"cN":{"ad":["a5"]},"ey":{"k":["l"],"p":["l"],"B":["l"],"n":["l"],"j":["l"],"A":["l"],"k.E":"l"},"fT":{"k":["E"],"p":["E"],"n":["E"],"j":["E"],"k.E":"E"},"c3":{"k":["aj"],"p":["aj"],"B":["aj"],"n":["aj"],"j":["aj"],"A":["aj"],"k.E":"aj"},"eA":{"e":[]},"eC":{"E":[],"t":[],"e":[]},"bI":{"k":["t"],"p":["t"],"B":["t"],"n":["t"],"j":["t"],"A":["t"],"k.E":"t"},"c5":{"E":[],"t":[],"e":[]},"c7":{"E":[],"t":[],"e":[]},"c9":{"e":[]},"eS":{"M":["l","@"],"J":["l","@"],"M.V":"@"},"eT":{"M":["l","@"],"J":["l","@"],"M.V":"@"},"eU":{"k":["aC"],"p":["aC"],"B":["aC"],"n":["aC"],"j":["aC"],"A":["aC"],"k.E":"aC"},"a8":{"k":["t"],"p":["t"],"n":["t"],"j":["t"],"k.E":"t"},"df":{"k":["t"],"p":["t"],"B":["t"],"n":["t"],"j":["t"],"A":["t"],"k.E":"t"},"f6":{"k":["aD"],"p":["aD"],"B":["aD"],"n":["aD"],"j":["aD"],"A":["aD"],"k.E":"aD"},"fc":{"M":["l","@"],"J":["l","@"],"M.V":"@"},"fe":{"E":[],"t":[],"e":[]},"fg":{"k":["at"],"p":["at"],"B":["at"],"e":[],"n":["at"],"j":["at"],"A":["at"],"k.E":"at"},"fh":{"k":["aG"],"p":["aG"],"B":["aG"],"n":["aG"],"j":["aG"],"A":["aG"],"k.E":"aG"},"fl":{"M":["l","l"],"J":["l","l"],"M.V":"l"},"bp":{"E":[],"t":[],"e":[]},"dr":{"E":[],"t":[],"e":[]},"fp":{"E":[],"t":[],"e":[]},"fq":{"E":[],"t":[],"e":[]},"cj":{"E":[],"t":[],"e":[]},"fs":{"k":["ah"],"p":["ah"],"B":["ah"],"n":["ah"],"j":["ah"],"A":["ah"],"k.E":"ah"},"ft":{"k":["au"],"p":["au"],"B":["au"],"e":[],"n":["au"],"j":["au"],"A":["au"],"k.E":"au"},"fy":{"k":["av"],"p":["av"],"B":["av"],"n":["av"],"j":["av"],"A":["av"],"k.E":"av"},"fN":{"e":[]},"cr":{"e":[]},"cs":{"t":[],"e":[]},"fU":{"k":["K"],"p":["K"],"B":["K"],"n":["K"],"j":["K"],"A":["K"],"k.E":"K"},"dM":{"ad":["a5"]},"h7":{"k":["aA?"],"p":["aA?"],"B":["aA?"],"n":["aA?"],"j":["aA?"],"A":["aA?"],"k.E":"aA?"},"dS":{"k":["t"],"p":["t"],"B":["t"],"n":["t"],"j":["t"],"A":["t"],"k.E":"t"},"hr":{"k":["aH"],"p":["aH"],"B":["aH"],"n":["aH"],"j":["aH"],"A":["aH"],"k.E":"aH"},"hy":{"k":["al"],"p":["al"],"B":["al"],"n":["al"],"j":["al"],"A":["al"],"k.E":"al"},"fR":{"M":["l","l"],"J":["l","l"]},"h0":{"M":["l","l"],"J":["l","l"],"M.V":"l"},"dN":{"ci":["1"]},"dg":{"aQ":[]},"dY":{"aQ":[]},"hA":{"aQ":[]},"hz":{"aQ":[]},"e5":{"bJ":[]},"eB":{"k":["E"],"p":["E"],"n":["E"],"j":["E"],"k.E":"E"},"ad":{"hm":["1"]},"eM":{"k":["aY"],"p":["aY"],"n":["aY"],"j":["aY"],"k.E":"aY"},"f0":{"k":["b1"],"p":["b1"],"n":["b1"],"j":["b1"],"k.E":"b1"},"cg":{"o":[],"E":[],"t":[],"e":[]},"fn":{"k":["l"],"p":["l"],"n":["l"],"j":["l"],"k.E":"l"},"o":{"E":[],"t":[],"e":[]},"fz":{"k":["b3"],"p":["b3"],"n":["b3"],"j":["b3"],"k.E":"b3"},"eq":{"M":["l","@"],"J":["l","@"],"M.V":"@"},"er":{"e":[]},"bc":{"e":[]},"f1":{"e":[]},"fi":{"k":["J<@,@>"],"p":["J<@,@>"],"n":["J<@,@>"],"j":["J<@,@>"],"k.E":"J<@,@>"},"cT":{"b_":[]},"aU":{"b_":[]},"ag":{"b_":[]},"f9":{"b_":[]},"u":{"b_":[]},"dv":{"b_":[]},"aq":{"j":["1"],"aq.T":"1"},"bg":{"W":[]},"bh":{"W":[]},"H":{"W":[]},"d3":{"W":[]},"ca":{"W":[]},"cb":{"W":[]},"f8":{"W":[]},"du":{"W":[]},"nL":{"aB":[]},"c1":{"aB":[]},"oc":{"aB":[]},"ov":{"aB":[]},"cY":{"aq":["aB"],"j":["aB"],"aq.T":"aB"},"cI":{"a2":[]},"c4":{"aq":["a2?"],"a2":[],"j":["a2?"],"aq.T":"a2?"},"dG":{"a2":[]},"dH":{"a2":[]},"dI":{"a2":[]},"cl":{"a4":[]},"cm":{"a4":[]},"eQ":{"dm":[]},"fD":{"a4":[]},"fE":{"a4":[]},"fF":{"a4":[]},"fB":{"a4":[]},"dw":{"a4":[]},"fC":{"a4":[]},"dx":{"a4":[]},"dy":{"a4":[]},"fG":{"a4":[]},"dB":{"a4":[]},"dD":{"a4":[]},"dE":{"a4":[]},"d7":{"ds":[]},"fu":{"dt":[]},"ew":{"aN":[]},"eD":{"aN":[]},"eE":{"aN":[]},"f5":{"aN":[]},"ck":{"p":["i"],"n":["i"],"j":["i"]}}'))
H.p2(v.typeUniverse,JSON.parse('{"ap":1,"n":1,"bk":1,"eP":2,"fP":1,"cQ":1,"fJ":1,"cn":1,"cJ":2,"eO":1,"cc":1,"ci":1,"bS":1,"fm":2,"dQ":1,"cU":1,"d0":1,"d4":2,"hJ":2,"d5":2,"dX":1,"dR":1,"e8":2,"ea":1,"es":2,"eu":2,"eG":1,"dN":1,"P":1,"cR":1,"bg":1,"bh":1,"H":1}'))
var u={M:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",S:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",b:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",U:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",q:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",h:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",N:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",D:"May not create a face with a first vertex which is not attached to a shape.",R:"May not create a face with vertices attached to different shapes.",p:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lK
return{cR:s("bY"),fK:s("bC"),Y:s("bD"),eT:s("c0"),ed:s("cF"),gA:s("bE"),ar:s("cH"),gw:s("n<@>"),h:s("E"),f4:s("bH"),bU:s("L"),aD:s("m"),c8:s("aj"),bX:s("c3"),c:s("cS"),x:s("bJ"),fS:s("c5"),gk:s("c7"),eu:s("w<ep>"),i:s("w<nL>"),cn:s("w<bb>"),U:s("w<c1>"),fD:s("w<bd>"),C:s("w<be>"),u:s("w<ar>"),fv:s("w<c6>"),e:s("w<aB>"),L:s("w<eN>"),F:s("w<p<be>>"),z:s("w<b_>"),fA:s("w<bl>"),Q:s("w<aQ>"),q:s("w<f7>"),cG:s("w<T>"),eg:s("w<bm>"),o:s("w<oc>"),D:s("w<ov>"),c3:s("w<bo>"),g9:s("w<ci<R>>"),s:s("w<l>"),ga:s("w<dt>"),gT:s("w<av>"),ab:s("w<dv>"),gN:s("w<ck>"),dC:s("w<a4>"),d:s("w<dz>"),V:s("w<dA>"),B:s("w<dC>"),J:s("w<dF>"),k:s("w<cp>"),n:s("w<I>"),gn:s("w<@>"),t:s("w<i>"),g6:s("w<aN?>"),eJ:s("w<a2?>"),bc:s("w<ds?>"),p:s("w<cm?>"),b:s("w<~(W)>"),aP:s("A<@>"),T:s("cW"),eH:s("m4"),M:s("aX"),aU:s("B<@>"),fX:s("Z<i,af>"),y:s("Z<i,i>"),O:s("p<dz>"),l:s("p<dA>"),m:s("p<dC>"),R:s("p<dF>"),r:s("p<@>"),bv:s("d3"),f:s("J<@,@>"),dv:s("d6<l,l>"),gc:s("bl"),bu:s("c9"),Z:s("ca"),bZ:s("cb"),cH:s("dc"),dE:s("a3"),bm:s("bM"),P:s("ak"),K:s("R"),I:s("ad<a5>"),fJ:s("md"),ew:s("cg"),fg:s("dm"),N:s("l"),g7:s("o"),bY:s("bp"),aW:s("cj"),aF:s("ju"),bJ:s("fw"),dr:s("du"),v:s("dw"),w:s("cl"),g:s("dx"),E:s("dy"),bK:s("dB"),j:s("cm"),G:s("dD"),a:s("dE"),ak:s("bQ"),dw:s("co<l,l>"),dD:s("fL"),h9:s("cs"),ac:s("a8"),cJ:s("af"),gR:s("I"),A:s("@"),S:s("i"),aw:s("0&*"),_:s("R*"),bG:s("m3<ak>?"),X:s("R?"),gW:s("cf?"),dl:s("fj?"),f7:s("fx?"),W:s("cl?"),H:s("a5"),h2:s("~(W)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.p=W.bD.prototype
C.i=W.bE.prototype
C.Q=W.be.prototype
C.T=J.b.prototype
C.b=J.w.prototype
C.c=J.cV.prototype
C.U=J.cW.prototype
C.d=J.c8.prototype
C.a=J.bi.prototype
C.V=J.aX.prototype
C.a_=H.bM.prototype
C.B=J.f4.prototype
C.a3=P.cf.prototype
C.C=W.dr.prototype
C.o=J.bQ.prototype
C.D=W.bs.prototype
C.E=W.cr.prototype
C.F=new E.c_("Browser.chrome")
C.q=new E.c_("Browser.firefox")
C.r=new E.c_("Browser.edge")
C.G=new E.c_("Browser.other")
C.a6=new P.i4()
C.H=new P.i3()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.I=function() {
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
C.N=function(getTagFallback) {
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
C.J=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.K=function(hooks) {
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
C.M=function(hooks) {
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
C.L=function(hooks) {
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

C.O=new P.f2()
C.e=new P.jK()
C.P=new P.jO()
C.f=new P.k7()
C.m=new P.bG(0)
C.R=new P.bG(5e6)
C.S=new P.iA("element",!1,!1,!1)
C.j=H.a(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.W=H.a(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
C.k=H.a(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.l=H.a(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.X=H.a(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
C.v=H.a(s([]),t.s)
C.Y=H.a(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.w=H.a(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.a(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.x=H.a(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.y=H.a(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.z=H.a(s(["bind","if","ref","repeat","syntax"]),t.s)
C.n=H.a(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
C.Z=new H.cK(0,{},C.v,H.lK("cK<l,l>"))
C.a0=new E.cd("OperatingSystem.windows")
C.A=new E.cd("OperatingSystem.mac")
C.a1=new E.cd("OperatingSystem.linux")
C.a2=new E.cd("OperatingSystem.other")
C.a4=new P.jL(!1)
C.a5=new P.cu(null,2)})();(function staticFields(){$.k4=null
$.aV=0
$.cE=null
$.lX=null
$.n5=null
$.mZ=null
$.nb=null
$.kL=null
$.kS=null
$.lM=null
$.cx=null
$.ed=null
$.ee=null
$.lF=!1
$.aR=C.f
$.an=H.a([],H.lK("w<R>"))
$.bf=null
$.le=null
$.m2=null
$.m1=null
$.dO=P.X(t.N,t.c)
$.io=null
$.m6=null
$.m8=null
$.ab=null
$.b2=null
$.mf=null
$.bR=null
$.mv=null
$.mu=null
$.jP=null
$.jQ=null
$.jR=null
$.mt=null
$.mw=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qS","ni",function(){return H.qm("_$dart_dartClosure")})
s($,"r5","nk",function(){return H.b4(H.jA({
toString:function(){return"$receiver$"}}))})
s($,"r6","nl",function(){return H.b4(H.jA({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"r7","nm",function(){return H.b4(H.jA(null))})
s($,"r8","nn",function(){return H.b4(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rb","nq",function(){return H.b4(H.jA(void 0))})
s($,"rc","nr",function(){return H.b4(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"ra","np",function(){return H.b4(H.mn(null))})
s($,"r9","no",function(){return H.b4(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"re","nt",function(){return H.b4(H.mn(void 0))})
s($,"rd","ns",function(){return H.b4(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"ru","lR",function(){return P.oH()})
s($,"rf","nu",function(){return new P.jN().$0()})
s($,"rg","nv",function(){return new P.jM().$0()})
s($,"rv","nz",function(){return new Int8Array(H.cw(H.a([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"ry","nB",function(){return P.oo("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rL","nC",function(){return P.po()})
s($,"rw","nA",function(){return P.m5(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rn","ny",function(){return Z.aJ(0)})
s($,"rh","nw",function(){return Z.aJ(511)})
s($,"rp","bA",function(){return Z.aJ(1)})
s($,"ro","bz",function(){return Z.aJ(2)})
s($,"rj","by",function(){return Z.aJ(4)})
s($,"rq","bW",function(){return Z.aJ(8)})
s($,"rr","bB",function(){return Z.aJ(16)})
s($,"rk","ej",function(){return Z.aJ(32)})
s($,"rl","ek",function(){return Z.aJ(64)})
s($,"rm","nx",function(){return Z.aJ(96)})
s($,"rs","cC",function(){return Z.aJ(128)})
s($,"ri","bx",function(){return Z.aJ(256)})
s($,"qO","nh",function(){return new V.ip()})
r($,"qN","F",function(){return $.nh()})
r($,"r1","nj",function(){var q=V.ln(),p=V.lr(),o=$.mt
return V.m7(q,p,o==null?$.mt=V.oE(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.b,AnimationEffectTiming:J.b,AnimationEffectTimingReadOnly:J.b,AnimationTimeline:J.b,AnimationWorkletGlobalScope:J.b,AuthenticatorAssertionResponse:J.b,AuthenticatorAttestationResponse:J.b,AuthenticatorResponse:J.b,BackgroundFetchFetch:J.b,BackgroundFetchManager:J.b,BackgroundFetchSettledFetch:J.b,BarProp:J.b,BarcodeDetector:J.b,BluetoothRemoteGATTDescriptor:J.b,Body:J.b,BudgetState:J.b,CacheStorage:J.b,CanvasGradient:J.b,CanvasPattern:J.b,Client:J.b,Clients:J.b,CookieStore:J.b,Coordinates:J.b,Credential:J.b,CredentialUserData:J.b,CredentialsContainer:J.b,Crypto:J.b,CryptoKey:J.b,CSS:J.b,CSSVariableReferenceValue:J.b,CustomElementRegistry:J.b,DataTransfer:J.b,DataTransferItem:J.b,DeprecatedStorageInfo:J.b,DeprecatedStorageQuota:J.b,DeprecationReport:J.b,DetectedBarcode:J.b,DetectedFace:J.b,DetectedText:J.b,DeviceAcceleration:J.b,DeviceRotationRate:J.b,DirectoryEntry:J.b,DirectoryReader:J.b,DocumentOrShadowRoot:J.b,DocumentTimeline:J.b,DOMError:J.b,DOMImplementation:J.b,Iterator:J.b,DOMMatrix:J.b,DOMMatrixReadOnly:J.b,DOMParser:J.b,DOMPoint:J.b,DOMPointReadOnly:J.b,DOMQuad:J.b,DOMStringMap:J.b,Entry:J.b,External:J.b,FaceDetector:J.b,FederatedCredential:J.b,FileEntry:J.b,DOMFileSystem:J.b,FontFace:J.b,FontFaceSource:J.b,FormData:J.b,GamepadButton:J.b,GamepadPose:J.b,Geolocation:J.b,Position:J.b,Headers:J.b,HTMLHyperlinkElementUtils:J.b,IdleDeadline:J.b,ImageBitmap:J.b,ImageBitmapRenderingContext:J.b,ImageCapture:J.b,InputDeviceCapabilities:J.b,IntersectionObserver:J.b,IntersectionObserverEntry:J.b,InterventionReport:J.b,KeyframeEffect:J.b,KeyframeEffectReadOnly:J.b,MediaCapabilities:J.b,MediaCapabilitiesInfo:J.b,MediaDeviceInfo:J.b,MediaError:J.b,MediaKeyStatusMap:J.b,MediaKeySystemAccess:J.b,MediaKeys:J.b,MediaKeysPolicy:J.b,MediaMetadata:J.b,MediaSession:J.b,MediaSettingsRange:J.b,MemoryInfo:J.b,MessageChannel:J.b,Metadata:J.b,MutationObserver:J.b,WebKitMutationObserver:J.b,MutationRecord:J.b,NavigationPreloadManager:J.b,Navigator:J.b,NavigatorAutomationInformation:J.b,NavigatorConcurrentHardware:J.b,NavigatorCookies:J.b,NavigatorUserMediaError:J.b,NodeFilter:J.b,NodeIterator:J.b,NonDocumentTypeChildNode:J.b,NonElementParentNode:J.b,NoncedElement:J.b,OffscreenCanvasRenderingContext2D:J.b,OverconstrainedError:J.b,PaintRenderingContext2D:J.b,PaintSize:J.b,PaintWorkletGlobalScope:J.b,PasswordCredential:J.b,Path2D:J.b,PaymentAddress:J.b,PaymentInstruments:J.b,PaymentManager:J.b,PaymentResponse:J.b,PerformanceEntry:J.b,PerformanceLongTaskTiming:J.b,PerformanceMark:J.b,PerformanceMeasure:J.b,PerformanceNavigation:J.b,PerformanceNavigationTiming:J.b,PerformanceObserver:J.b,PerformanceObserverEntryList:J.b,PerformancePaintTiming:J.b,PerformanceResourceTiming:J.b,PerformanceServerTiming:J.b,PerformanceTiming:J.b,Permissions:J.b,PhotoCapabilities:J.b,PositionError:J.b,Presentation:J.b,PresentationReceiver:J.b,PublicKeyCredential:J.b,PushManager:J.b,PushMessageData:J.b,PushSubscription:J.b,PushSubscriptionOptions:J.b,Range:J.b,RelatedApplication:J.b,ReportBody:J.b,ReportingObserver:J.b,ResizeObserver:J.b,ResizeObserverEntry:J.b,RTCCertificate:J.b,RTCIceCandidate:J.b,mozRTCIceCandidate:J.b,RTCLegacyStatsReport:J.b,RTCRtpContributingSource:J.b,RTCRtpReceiver:J.b,RTCRtpSender:J.b,RTCSessionDescription:J.b,mozRTCSessionDescription:J.b,RTCStatsResponse:J.b,Screen:J.b,ScrollState:J.b,ScrollTimeline:J.b,Selection:J.b,SharedArrayBuffer:J.b,SpeechRecognitionAlternative:J.b,SpeechSynthesisVoice:J.b,StaticRange:J.b,StorageManager:J.b,StyleMedia:J.b,StylePropertyMap:J.b,StylePropertyMapReadonly:J.b,SyncManager:J.b,TaskAttributionTiming:J.b,TextDetector:J.b,TextMetrics:J.b,TrackDefault:J.b,TreeWalker:J.b,TrustedHTML:J.b,TrustedScriptURL:J.b,TrustedURL:J.b,UnderlyingSourceBase:J.b,URLSearchParams:J.b,VRCoordinateSystem:J.b,VRDisplayCapabilities:J.b,VREyeParameters:J.b,VRFrameData:J.b,VRFrameOfReference:J.b,VRPose:J.b,VRStageBounds:J.b,VRStageBoundsPoint:J.b,VRStageParameters:J.b,ValidityState:J.b,VideoPlaybackQuality:J.b,VideoTrack:J.b,VTTRegion:J.b,WindowClient:J.b,WorkletAnimation:J.b,WorkletGlobalScope:J.b,XPathEvaluator:J.b,XPathExpression:J.b,XPathNSResolver:J.b,XPathResult:J.b,XMLSerializer:J.b,XSLTProcessor:J.b,Bluetooth:J.b,BluetoothCharacteristicProperties:J.b,BluetoothRemoteGATTServer:J.b,BluetoothRemoteGATTService:J.b,BluetoothUUID:J.b,BudgetService:J.b,Cache:J.b,DOMFileSystemSync:J.b,DirectoryEntrySync:J.b,DirectoryReaderSync:J.b,EntrySync:J.b,FileEntrySync:J.b,FileReaderSync:J.b,FileWriterSync:J.b,HTMLAllCollection:J.b,Mojo:J.b,MojoHandle:J.b,MojoWatcher:J.b,NFC:J.b,PagePopupController:J.b,Report:J.b,Request:J.b,Response:J.b,SubtleCrypto:J.b,USBAlternateInterface:J.b,USBConfiguration:J.b,USBDevice:J.b,USBEndpoint:J.b,USBInTransferResult:J.b,USBInterface:J.b,USBIsochronousInTransferPacket:J.b,USBIsochronousInTransferResult:J.b,USBIsochronousOutTransferPacket:J.b,USBIsochronousOutTransferResult:J.b,USBOutTransferResult:J.b,WorkerLocation:J.b,WorkerNavigator:J.b,Worklet:J.b,IDBCursor:J.b,IDBCursorWithValue:J.b,IDBFactory:J.b,IDBIndex:J.b,IDBKeyRange:J.b,IDBObjectStore:J.b,IDBObservation:J.b,IDBObserver:J.b,IDBObserverChanges:J.b,SVGAngle:J.b,SVGAnimatedAngle:J.b,SVGAnimatedBoolean:J.b,SVGAnimatedEnumeration:J.b,SVGAnimatedInteger:J.b,SVGAnimatedLength:J.b,SVGAnimatedLengthList:J.b,SVGAnimatedNumber:J.b,SVGAnimatedNumberList:J.b,SVGAnimatedPreserveAspectRatio:J.b,SVGAnimatedRect:J.b,SVGAnimatedString:J.b,SVGAnimatedTransformList:J.b,SVGMatrix:J.b,SVGPoint:J.b,SVGPreserveAspectRatio:J.b,SVGRect:J.b,SVGUnitTypes:J.b,AudioListener:J.b,AudioParam:J.b,AudioTrack:J.b,AudioWorkletGlobalScope:J.b,AudioWorkletProcessor:J.b,PeriodicWave:J.b,WebGLActiveInfo:J.b,ANGLEInstancedArrays:J.b,ANGLE_instanced_arrays:J.b,WebGLBuffer:J.b,WebGLCanvas:J.b,WebGLColorBufferFloat:J.b,WebGLCompressedTextureASTC:J.b,WebGLCompressedTextureATC:J.b,WEBGL_compressed_texture_atc:J.b,WebGLCompressedTextureETC1:J.b,WEBGL_compressed_texture_etc1:J.b,WebGLCompressedTextureETC:J.b,WebGLCompressedTexturePVRTC:J.b,WEBGL_compressed_texture_pvrtc:J.b,WebGLCompressedTextureS3TC:J.b,WEBGL_compressed_texture_s3tc:J.b,WebGLCompressedTextureS3TCsRGB:J.b,WebGLDebugRendererInfo:J.b,WEBGL_debug_renderer_info:J.b,WebGLDebugShaders:J.b,WEBGL_debug_shaders:J.b,WebGLDepthTexture:J.b,WEBGL_depth_texture:J.b,WebGLDrawBuffers:J.b,WEBGL_draw_buffers:J.b,EXTsRGB:J.b,EXT_sRGB:J.b,EXTBlendMinMax:J.b,EXT_blend_minmax:J.b,EXTColorBufferFloat:J.b,EXTColorBufferHalfFloat:J.b,EXTDisjointTimerQuery:J.b,EXTDisjointTimerQueryWebGL2:J.b,EXTFragDepth:J.b,EXT_frag_depth:J.b,EXTShaderTextureLOD:J.b,EXT_shader_texture_lod:J.b,EXTTextureFilterAnisotropic:J.b,EXT_texture_filter_anisotropic:J.b,WebGLFramebuffer:J.b,WebGLGetBufferSubDataAsync:J.b,WebGLLoseContext:J.b,WebGLExtensionLoseContext:J.b,WEBGL_lose_context:J.b,OESElementIndexUint:J.b,OES_element_index_uint:J.b,OESStandardDerivatives:J.b,OES_standard_derivatives:J.b,OESTextureFloat:J.b,OES_texture_float:J.b,OESTextureFloatLinear:J.b,OES_texture_float_linear:J.b,OESTextureHalfFloat:J.b,OES_texture_half_float:J.b,OESTextureHalfFloatLinear:J.b,OES_texture_half_float_linear:J.b,OESVertexArrayObject:J.b,OES_vertex_array_object:J.b,WebGLProgram:J.b,WebGLQuery:J.b,WebGLRenderbuffer:J.b,WebGLRenderingContext:J.b,WebGLSampler:J.b,WebGLShader:J.b,WebGLShaderPrecisionFormat:J.b,WebGLSync:J.b,WebGLTexture:J.b,WebGLTimerQueryEXT:J.b,WebGLTransformFeedback:J.b,WebGLUniformLocation:J.b,WebGLVertexArrayObject:J.b,WebGLVertexArrayObjectOES:J.b,WebGL:J.b,WebGL2RenderingContextBase:J.b,Database:J.b,SQLError:J.b,SQLResultSet:J.b,SQLTransaction:J.b,ArrayBuffer:H.dc,DataView:H.a3,ArrayBufferView:H.a3,Float32Array:H.bL,Float64Array:H.bL,Int16Array:H.eV,Int32Array:H.eW,Int8Array:H.eX,Uint16Array:H.eY,Uint32Array:H.eZ,Uint8ClampedArray:H.de,CanvasPixelArray:H.de,Uint8Array:H.bM,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.hZ,HTMLAnchorElement:W.em,HTMLAreaElement:W.en,HTMLBaseElement:W.bY,Blob:W.bC,HTMLBodyElement:W.bD,HTMLCanvasElement:W.bE,CanvasRenderingContext2D:W.cH,CDATASection:W.aM,CharacterData:W.aM,Comment:W.aM,ProcessingInstruction:W.aM,Text:W.aM,CSSPerspective:W.ia,CSSCharsetRule:W.K,CSSConditionRule:W.K,CSSFontFaceRule:W.K,CSSGroupingRule:W.K,CSSImportRule:W.K,CSSKeyframeRule:W.K,MozCSSKeyframeRule:W.K,WebKitCSSKeyframeRule:W.K,CSSKeyframesRule:W.K,MozCSSKeyframesRule:W.K,WebKitCSSKeyframesRule:W.K,CSSMediaRule:W.K,CSSNamespaceRule:W.K,CSSPageRule:W.K,CSSRule:W.K,CSSStyleRule:W.K,CSSSupportsRule:W.K,CSSViewportRule:W.K,CSSStyleDeclaration:W.cL,MSStyleCSSProperties:W.cL,CSS2Properties:W.cL,CSSImageValue:W.az,CSSKeywordValue:W.az,CSSNumericValue:W.az,CSSPositionValue:W.az,CSSResourceValue:W.az,CSSUnitValue:W.az,CSSURLImageValue:W.az,CSSStyleValue:W.az,CSSMatrixComponent:W.aW,CSSRotation:W.aW,CSSScale:W.aW,CSSSkew:W.aW,CSSTranslation:W.aW,CSSTransformComponent:W.aW,CSSTransformValue:W.ic,CSSUnparsedValue:W.id,DataTransferItemList:W.ie,HTMLDivElement:W.be,DOMException:W.ig,ClientRectList:W.cM,DOMRectList:W.cM,DOMRectReadOnly:W.cN,DOMStringList:W.ey,DOMTokenList:W.ih,Element:W.E,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,SubmitEvent:W.m,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aj,FileList:W.c3,FileWriter:W.eA,HTMLFormElement:W.eC,Gamepad:W.aA,History:W.iy,HTMLCollection:W.bI,HTMLFormControlsCollection:W.bI,HTMLOptionsCollection:W.bI,ImageData:W.bJ,HTMLImageElement:W.c5,HTMLInputElement:W.c7,KeyboardEvent:W.bK,Location:W.iJ,MediaList:W.j_,MessagePort:W.c9,MIDIInputMap:W.eS,MIDIOutputMap:W.eT,MimeType:W.aC,MimeTypeArray:W.eU,PointerEvent:W.as,MouseEvent:W.as,DragEvent:W.as,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,DocumentType:W.t,Node:W.t,NodeList:W.df,RadioNodeList:W.df,Plugin:W.aD,PluginArray:W.f6,RTCStatsReport:W.fc,HTMLSelectElement:W.fe,SourceBuffer:W.at,SourceBufferList:W.fg,SpeechGrammar:W.aG,SpeechGrammarList:W.fh,SpeechRecognitionResult:W.aH,Storage:W.fl,CSSStyleSheet:W.al,StyleSheet:W.al,HTMLTableCellElement:W.bp,HTMLTableDataCellElement:W.bp,HTMLTableHeaderCellElement:W.bp,HTMLTableElement:W.dr,HTMLTableRowElement:W.fp,HTMLTableSectionElement:W.fq,HTMLTemplateElement:W.cj,TextTrack:W.au,TextTrackCue:W.ah,VTTCue:W.ah,TextTrackCueList:W.fs,TextTrackList:W.ft,TimeRanges:W.jt,Touch:W.av,TouchEvent:W.bP,TouchList:W.fy,TrackDefaultList:W.jy,CompositionEvent:W.b5,FocusEvent:W.b5,TextEvent:W.b5,UIEvent:W.b5,URL:W.jJ,VideoTrackList:W.fN,WheelEvent:W.bs,Window:W.cr,DOMWindow:W.cr,Attr:W.cs,CSSRuleList:W.fU,ClientRect:W.dM,DOMRect:W.dM,GamepadList:W.h7,NamedNodeMap:W.dS,MozNamedAttrMap:W.dS,SpeechRecognitionResultList:W.hr,StyleSheetList:W.hy,SVGLength:P.aY,SVGLengthList:P.eM,SVGNumber:P.b1,SVGNumberList:P.f0,SVGPointList:P.j7,SVGScriptElement:P.cg,SVGStringList:P.fn,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.b3,SVGTransformList:P.fz,AudioBuffer:P.i1,AudioParamMap:P.eq,AudioTrackList:P.er,AudioContext:P.bc,webkitAudioContext:P.bc,BaseAudioContext:P.bc,OfflineAudioContext:P.f1,WebGL2RenderingContext:P.cf,SQLResultSetRowList:P.fi})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cc.$nativeSuperclassTag="ArrayBufferView"
H.dT.$nativeSuperclassTag="ArrayBufferView"
H.dU.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.dV.$nativeSuperclassTag="ArrayBufferView"
H.dW.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
W.dZ.$nativeSuperclassTag="EventTarget"
W.e_.$nativeSuperclassTag="EventTarget"
W.e1.$nativeSuperclassTag="EventTarget"
W.e2.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=R.qx
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
