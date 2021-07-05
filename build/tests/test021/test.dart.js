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
a[c]=function(){a[c]=function(){H.qr(b)}
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
if(a[b]!==s)H.qs(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lu"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lu(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={l4:function l4(){},
l6:function(a){return new H.cO("Field '"+a+"' has been assigned during initialization.")},
kB:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
jh:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
or:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
q5:function(a,b,c){return a},
o4:function(a,b,c,d){if(t.gw.b(a))return new H.cE(a,b,c.K("@<0>").b8(d).K("cE<1,2>"))
return new H.aU(a,b,c.K("@<0>").b8(d).K("aU<1,2>"))},
iu:function(){return new P.c7("No element")},
nW:function(){return new P.c7("Too many elements")},
oo:function(a,b){H.f8(a,0,J.aN(a)-1,b)},
f8:function(a,b,c,d){if(c-b<=32)H.on(a,b,c,d)
else H.om(a,b,c,d)},
on:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bM(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ap()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
om:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a3(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a3(a4+a5,2),f=g-j,e=g+j,d=J.bM(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
if(J.K(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.f8(a3,a4,r-2,a6)
H.f8(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.K(a6.$2(d.h(a3,r),b),0);)++r
for(;J.K(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.f8(a3,r,q,a6)}else H.f8(a3,r,q,a6)},
cO:function cO(a){this.a=a},
r:function r(a){this.a=a},
n:function n(){},
cT:function cT(){},
bg:function bg(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
cE:function cE(a,b,c){this.a=a
this.b=b
this.$ti=c},
eG:function eG(a,b){this.a=null
this.b=a
this.c=b},
cY:function cY(a,b,c){this.a=a
this.b=b
this.$ti=c},
b2:function b2(a,b,c){this.a=a
this.b=b
this.$ti=c},
fI:function fI(a,b){this.a=a
this.b=b},
cG:function cG(){},
fB:function fB(){},
cd:function cd(){},
nN:function(){throw H.c(P.C("Cannot modify unmodifiable Map"))},
na:function(a){var s,r=H.n9(a)
if(r!=null)return r
s="minified:"+a
return s},
n2:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
y:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ct(a)
return s},
d7:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
m_:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.aa(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.D(q,o)|32)>r)return n}return parseInt(a,b)},
d8:function(a){return H.o7(a)},
o7:function(a){var s,r,q,p
if(a instanceof P.Q)return H.at(H.b5(a),null)
if(J.e7(a)===C.T||t.ak.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.at(H.b5(a),null)},
o8:function(){if(!!self.location)return self.location.href
return null},
lZ:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
og:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.kp(q))throw H.c(H.e6(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aX(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.e6(q))}return H.lZ(p)},
m0:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.kp(q))throw H.c(H.e6(q))
if(q<0)throw H.c(H.e6(q))
if(q>65535)return H.og(a)}return H.lZ(a)},
oh:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aA:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aX(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.aa(a,0,1114111,null,null))},
c5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
of:function(a){var s=H.c5(a).getFullYear()+0
return s},
od:function(a){var s=H.c5(a).getMonth()+1
return s},
o9:function(a){var s=H.c5(a).getDate()+0
return s},
oa:function(a){var s=H.c5(a).getHours()+0
return s},
oc:function(a){var s=H.c5(a).getMinutes()+0
return s},
oe:function(a){var s=H.c5(a).getSeconds()+0
return s},
ob:function(a){var s=H.c5(a).getMilliseconds()+0
return s},
n0:function(a){throw H.c(H.e6(a))},
d:function(a,b){if(a==null)J.aN(a)
throw H.c(H.cq(a,b))},
cq:function(a,b){var s,r="index"
if(!H.kp(b))return new P.aG(!0,b,r,null)
s=J.aN(a)
if(b<0||b>=s)return P.P(b,a,r,null,s)
return P.f3(b,r)},
q8:function(a,b,c){if(a>c)return P.aa(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aa(b,a,c,"end",null)
return new P.aG(!0,b,"end",null)},
e6:function(a){return new P.aG(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.eT()
s=new Error()
s.dartException=a
r=H.qt
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qt:function(){return J.ct(this.dartException)},
h:function(a){throw H.c(a)},
q:function(a){throw H.c(P.aK(a))},
b0:function(a){var s,r,q,p,o,n
a=H.n5(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jq(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jr:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mc:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
l5:function(a,b){var s=b==null,r=s?null:b.method
return new H.eB(a,r,s?null:b.receiver)},
an:function(a){if(a==null)return new H.j0(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bN(a,a.dartException)
return H.q1(a)},
bN:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
q1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aX(r,16)&8191)===10)switch(q){case 438:return H.bN(a,H.l5(H.y(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.y(s)+" (Error "+q+")"
return H.bN(a,new H.d6(p,e))}}if(a instanceof TypeError){o=$.ne()
n=$.nf()
m=$.ng()
l=$.nh()
k=$.nk()
j=$.nl()
i=$.nj()
$.ni()
h=$.nn()
g=$.nm()
f=o.al(s)
if(f!=null)return H.bN(a,H.l5(s,f))
else{f=n.al(s)
if(f!=null){f.method="call"
return H.bN(a,H.l5(s,f))}else{f=m.al(s)
if(f==null){f=l.al(s)
if(f==null){f=k.al(s)
if(f==null){f=j.al(s)
if(f==null){f=i.al(s)
if(f==null){f=l.al(s)
if(f==null){f=h.al(s)
if(f==null){f=g.al(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bN(a,new H.d6(s,f==null?e:f.method))}}return H.bN(a,new H.fA(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dg()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bN(a,new P.aG(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dg()
return a},
lx:function(a){var s
if(a==null)return new H.hn(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hn(a)},
qa:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qi:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
cp:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qi)
a.$identity=s
return s},
nM:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.fd().constructor.prototype):Object.create(new H.bR(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aP
if(typeof r!=="number")return r.W()
$.aP=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lM(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nI(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lM(a,n,f)
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
nJ:function(a,b,c,d){var s=H.lK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lM:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nL(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nJ(r,!p,s,b)
if(r===0){p=$.aP
if(typeof p!=="number")return p.W()
$.aP=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cv
return new Function(p+(o==null?$.cv=H.i_("self"):o)+";return "+n+"."+H.y(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aP
if(typeof p!=="number")return p.W()
$.aP=p+1
m+=p
p="return function("+m+"){return this."
o=$.cv
return new Function(p+(o==null?$.cv=H.i_("self"):o)+"."+H.y(s)+"("+m+");}")()},
nK:function(a,b,c,d){var s=H.lK,r=H.nH
switch(b?-1:a){case 0:throw H.c(new H.f6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nL:function(a,b){var s,r,q,p,o,n,m,l=$.cv
if(l==null)l=$.cv=H.i_("self")
s=$.lJ
if(s==null)s=$.lJ=H.i_("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.nK(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.y(r)+"(this."+s+");"
n=$.aP
if(typeof n!=="number")return n.W()
$.aP=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.y(r)+"(this."+s+", "+m+");"
n=$.aP
if(typeof n!=="number")return n.W()
$.aP=n+1
return new Function(o+n+"}")()},
lu:function(a,b,c,d,e,f,g){return H.nM(a,b,c,d,!!e,!!f,g)},
nF:function(a,b){return H.hB(v.typeUniverse,H.b5(a.a),b)},
nG:function(a,b){return H.hB(v.typeUniverse,H.b5(a.c),b)},
lK:function(a){return a.a},
nH:function(a){return a.c},
i_:function(a){var s,r,q,p=new H.bR("self","target","receiver","name"),o=J.l3(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.cu("Field name "+a+" not found."))},
qr:function(a){throw H.c(new P.em(a))},
qc:function(a){return v.getIsolateTag(a)},
qs:function(a){return H.h(new H.cO(a))},
rA:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ql:function(a){var s,r,q,p,o,n=$.mZ.$1(a),m=$.kz[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kG[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mS.$2(a,n)
if(q!=null){m=$.kz[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kG[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kP(s)
$.kz[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kG[n]=s
return s}if(p==="-"){o=H.kP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.n3(a,s)
if(p==="*")throw H.c(P.ju(n))
if(v.leafTags[n]===true){o=H.kP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.n3(a,s)},
n3:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lz(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kP:function(a){return J.lz(a,!1,null,!!a.$iB)},
qn:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kP(s)
else return J.lz(s,c,null,null)},
qg:function(){if(!0===$.ly)return
$.ly=!0
H.qh()},
qh:function(){var s,r,q,p,o,n,m,l
$.kz=Object.create(null)
$.kG=Object.create(null)
H.qf()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.n4.$1(o)
if(n!=null){m=H.qn(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qf:function(){var s,r,q,p,o,n,m=C.I()
m=H.co(C.J,H.co(C.K,H.co(C.u,H.co(C.u,H.co(C.L,H.co(C.M,H.co(C.N(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mZ=new H.kC(p)
$.mS=new H.kD(o)
$.n4=new H.kE(n)},
co:function(a,b){return a(b)||b},
o_:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a8("Illegal RegExp pattern ("+String(n)+")",a,null))},
n7:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
q9:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n5:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lB:function(a,b,c){var s=H.qq(a,b,c)
return s},
qq:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n5(b),'g'),H.q9(c))},
cz:function cz(){},
cA:function cA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jq:function jq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d6:function d6(a,b){this.a=a
this.b=b},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
fA:function fA(a){this.a=a},
j0:function j0(a){this.a=a},
hn:function hn(a){this.a=a
this.b=null},
bx:function bx(){},
fk:function fk(){},
fd:function fd(){},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(a){this.a=a},
X:function X(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iw:function iw(a){this.a=a},
iz:function iz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cQ:function cQ(a,b){this.a=a
this.$ti=b},
eF:function eF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kC:function kC(a){this.a=a},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
eA:function eA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e1:function(a){var s,r,q,p,o
if(t.aP.b(a))return a
s=J.bM(a)
r=s.gl(a)
q=P.cU(r,null,!1,t.A)
for(p=0;p<s.gl(a);++p){o=s.h(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
b3:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cq(b,a))},
pf:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.q8(a,b,c))
return b},
d1:function d1(){},
a1:function a1(){},
c2:function c2(){},
bC:function bC(){},
d2:function d2(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
d3:function d3(){},
bD:function bD(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
m6:function(a,b){var s=b.c
return s==null?b.c=H.lj(a,b.z,!0):s},
m5:function(a,b){var s=b.c
return s==null?b.c=H.dW(a,"lQ",[b.z]):s},
m7:function(a){var s=a.y
if(s===6||s===7||s===8)return H.m7(a.z)
return s===11||s===12},
ok:function(a){return a.cy},
lw:function(a){return H.lk(v.typeUniverse,a,!1)},
bo:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bo(a,s,a0,a1)
if(r===s)return b
return H.mB(a,r,!0)
case 7:s=b.z
r=H.bo(a,s,a0,a1)
if(r===s)return b
return H.lj(a,r,!0)
case 8:s=b.z
r=H.bo(a,s,a0,a1)
if(r===s)return b
return H.mA(a,r,!0)
case 9:q=b.Q
p=H.e5(a,q,a0,a1)
if(p===q)return b
return H.dW(a,b.z,p)
case 10:o=b.z
n=H.bo(a,o,a0,a1)
m=b.Q
l=H.e5(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lh(a,n,l)
case 11:k=b.z
j=H.bo(a,k,a0,a1)
i=b.Q
h=H.pZ(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mz(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.e5(a,g,a0,a1)
o=b.z
n=H.bo(a,o,a0,a1)
if(f===g&&n===o)return b
return H.li(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hT("Attempted to substitute unexpected RTI kind "+c))}},
e5:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bo(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
q_:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bo(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pZ:function(a,b,c,d){var s,r=b.a,q=H.e5(a,r,c,d),p=b.b,o=H.e5(a,p,c,d),n=b.c,m=H.q_(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.h_()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
q6:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.n_(s)
return a.$S()}return null},
n1:function(a,b){var s
if(H.m7(b))if(a instanceof H.bx){s=H.q6(a)
if(s!=null)return s}return H.b5(a)},
b5:function(a){var s
if(a instanceof P.Q){s=a.$ti
return s!=null?s:H.lp(a)}if(Array.isArray(a))return H.kg(a)
return H.lp(J.e7(a))},
kg:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
W:function(a){var s=a.$ti
return s!=null?s:H.lp(a)},
lp:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pn(a,s)},
pn:function(a,b){var s=a instanceof H.bx?a.__proto__.__proto__.constructor:b,r=H.oY(v.typeUniverse,s.name)
b.$ccache=r
return r},
n_:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lk(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pm:function(a){var s,r,q,p=this
if(p===t.K)return H.e2(p,a,H.pr)
if(!H.b6(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.e2(p,a,H.pu)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.kp
else if(r===t.gR||r===t.H)q=H.pq
else if(r===t.N)q=H.ps
else q=r===t.cJ?H.ko:null
if(q!=null)return H.e2(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.qj)){p.r="$i"+s
return H.e2(p,a,H.pt)}}else if(s===7)return H.e2(p,a,H.pk)
return H.e2(p,a,H.pi)},
e2:function(a,b,c){a.b=c
return a.b(b)},
pl:function(a){var s,r=this,q=H.ph
if(!H.b6(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.pe
else if(r===t.K)q=H.pd
else{s=H.e8(r)
if(s)q=H.pj}r.a=q
return r.a(a)},
ls:function(a){var s,r=a.y
if(!H.b6(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.ls(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pi:function(a){var s=this
if(a==null)return H.ls(s)
return H.S(v.typeUniverse,H.n1(a,s),null,s,null)},
pk:function(a){if(a==null)return!0
return this.z.b(a)},
pt:function(a){var s,r=this
if(a==null)return H.ls(r)
s=r.r
if(a instanceof P.Q)return!!a[s]
return!!J.e7(a)[s]},
ph:function(a){var s,r=this
if(a==null){s=H.e8(r)
if(s)return a}else if(r.b(a))return a
H.mM(a,r)},
pj:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mM(a,s)},
mM:function(a,b){throw H.c(H.oO(H.ms(a,H.n1(a,b),H.at(b,null))))},
ms:function(a,b,c){var s=P.ii(a),r=H.at(b==null?H.b5(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
oO:function(a){return new H.dV("TypeError: "+a)},
ac:function(a,b){return new H.dV("TypeError: "+H.ms(a,null,b))},
pr:function(a){return a!=null},
pd:function(a){if(a!=null)return a
throw H.c(H.ac(a,"Object"))},
pu:function(a){return!0},
pe:function(a){return a},
ko:function(a){return!0===a||!1===a},
mK:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ac(a,"bool"))},
ro:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ac(a,"bool"))},
rn:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ac(a,"bool?"))},
rp:function(a){if(typeof a=="number")return a
throw H.c(H.ac(a,"double"))},
rr:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"double"))},
rq:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"double?"))},
kp:function(a){return typeof a=="number"&&Math.floor(a)===a},
kh:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ac(a,"int"))},
rt:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ac(a,"int"))},
rs:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ac(a,"int?"))},
pq:function(a){return typeof a=="number"},
ru:function(a){if(typeof a=="number")return a
throw H.c(H.ac(a,"num"))},
rw:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"num"))},
rv:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ac(a,"num?"))},
ps:function(a){return typeof a=="string"},
ki:function(a){if(typeof a=="string")return a
throw H.c(H.ac(a,"String"))},
ry:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ac(a,"String"))},
rx:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ac(a,"String?"))},
pV:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.at(a[q],b)
return s},
mN:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.a.W(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.at(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.at(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.at(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.at(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.at(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
at:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.at(a.z,b)
return s}if(l===7){r=a.z
s=H.at(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.at(a.z,b)+">"
if(l===9){p=H.q0(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pV(o,b)+">"):p}if(l===11)return H.mN(a,b,null)
if(l===12)return H.mN(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
q0:function(a){var s,r=H.n9(a)
if(r!=null)return r
s="minified:"+a
return s},
mC:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
oY:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lk(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dX(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dW(a,b,q)
n[b]=o
return o}else return m},
oW:function(a,b){return H.mJ(a.tR,b)},
oV:function(a,b){return H.mJ(a.eT,b)},
lk:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mx(H.mv(a,null,b,c))
r.set(b,s)
return s},
hB:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mx(H.mv(a,b,c,!0))
q.set(c,r)
return r},
oX:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lh(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bn:function(a,b){b.a=H.pl
b.b=H.pm
return b},
dX:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aB(null,null)
s.y=b
s.cy=c
r=H.bn(a,s)
a.eC.set(c,r)
return r},
mB:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oT(a,b,r,c)
a.eC.set(r,s)
return s},
oT:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b6(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aB(null,null)
q.y=6
q.z=b
q.cy=c
return H.bn(a,q)},
lj:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oS(a,b,r,c)
a.eC.set(r,s)
return s},
oS:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b6(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.e8(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.e8(q.z))return q
else return H.m6(a,b)}}p=new H.aB(null,null)
p.y=7
p.z=b
p.cy=c
return H.bn(a,p)},
mA:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oQ(a,b,r,c)
a.eC.set(r,s)
return s},
oQ:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b6(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dW(a,"lQ",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.aB(null,null)
q.y=8
q.z=b
q.cy=c
return H.bn(a,q)},
oU:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aB(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bn(a,s)
a.eC.set(q,r)
return r},
hA:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oP:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dW:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hA(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aB(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bn(a,r)
a.eC.set(p,q)
return q},
lh:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hA(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aB(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bn(a,o)
a.eC.set(q,n)
return n},
mz:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hA(m)
if(j>0){s=l>0?",":""
r=H.hA(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oP(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aB(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bn(a,o)
a.eC.set(q,r)
return r},
li:function(a,b,c,d){var s,r=b.cy+("<"+H.hA(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oR(a,b,c,r,d)
a.eC.set(r,s)
return s},
oR:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bo(a,b,r,0)
m=H.e5(a,c,r,0)
return H.li(a,n,m,c!==m)}}l=new H.aB(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bn(a,l)},
mv:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mx:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.oI(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mw(a,r,h,g,!1)
else if(q===46)r=H.mw(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bm(a.u,a.e,g.pop()))
break
case 94:g.push(H.oU(a.u,g.pop()))
break
case 35:g.push(H.dX(a.u,5,"#"))
break
case 64:g.push(H.dX(a.u,2,"@"))
break
case 126:g.push(H.dX(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.lg(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dW(p,n,o))
else{m=H.bm(p,a.e,n)
switch(m.y){case 11:g.push(H.li(p,m,o,a.n))
break
default:g.push(H.lh(p,m,o))
break}}break
case 38:H.oJ(a,g)
break
case 42:p=a.u
g.push(H.mB(p,H.bm(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.lj(p,H.bm(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.mA(p,H.bm(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.h_()
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
H.lg(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.mz(p,H.bm(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.lg(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.oL(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bm(a.u,a.e,i)},
oI:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mw:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mC(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.ok(o)+'"')
d.push(H.hB(s,o,n))}else d.push(p)
return m},
oJ:function(a,b){var s=b.pop()
if(0===s){b.push(H.dX(a.u,1,"0&"))
return}if(1===s){b.push(H.dX(a.u,4,"1&"))
return}throw H.c(P.hT("Unexpected extended operation "+H.y(s)))},
bm:function(a,b,c){if(typeof c=="string")return H.dW(a,c,a.sEA)
else if(typeof c=="number")return H.oK(a,b,c)
else return c},
lg:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bm(a,b,c[s])},
oL:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bm(a,b,c[s])},
oK:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hT("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hT("Bad index "+c+" for "+b.i(0)))},
S:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b6(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b6(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.S(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.S(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.S(a,b.z,c,d,e)
if(r===6)return H.S(a,b.z,c,d,e)
return r!==7}if(r===6)return H.S(a,b.z,c,d,e)
if(p===6){s=H.m6(a,d)
return H.S(a,b,c,s,e)}if(r===8){if(!H.S(a,b.z,c,d,e))return!1
return H.S(a,H.m5(a,b),c,d,e)}if(r===7){s=H.S(a,t.P,c,d,e)
return s&&H.S(a,b.z,c,d,e)}if(p===8){if(H.S(a,b,c,d.z,e))return!0
return H.S(a,b,c,H.m5(a,d),e)}if(p===7){s=H.S(a,b,c,t.P,e)
return s||H.S(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.b)return!0
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
if(!H.S(a,k,c,j,e)||!H.S(a,j,e,k,c))return!1}return H.mO(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.mO(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pp(a,b,c,d,e)}return!1},
mO:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.S(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.S(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.S(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.S(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.S(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pp:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.S(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mC(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.S(a,H.hB(a,b,l[p]),c,r[p],e))return!1
return!0},
e8:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b6(a))if(r!==7)if(!(r===6&&H.e8(a.z)))s=r===8&&H.e8(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qj:function(a){var s
if(!H.b6(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b6:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
mJ:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aB:function aB(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
h_:function h_(){this.c=this.b=this.a=null},
fW:function fW(){},
dV:function dV(a){this.a=a},
n9:function(a){return v.mangledGlobalNames[a]},
qo:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kA:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.ly==null){H.qg()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.ju("Return interceptor for "+H.y(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jT
if(o==null)o=$.jT=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.ql(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){o=$.jT
if(o==null)o=$.jT=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
nX:function(a,b){if(a<0||a>4294967295)throw H.c(P.aa(a,0,4294967295,"length",null))
return J.nY(new Array(a),b)},
l2:function(a,b){if(a<0)throw H.c(P.cu("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.K("w<0>"))},
nY:function(a,b){return J.l3(H.b(a,b.K("w<0>")))},
l3:function(a){a.fixed$length=Array
return a},
nZ:function(a,b){return J.nz(a,b)},
e7:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cM.prototype
return J.ez.prototype}if(typeof a=="string")return J.be.prototype
if(a==null)return J.cN.prototype
if(typeof a=="boolean")return J.ey.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.Q)return a
return J.kA(a)},
bM:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.Q)return a
return J.kA(a)},
hO:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.Q)return a
return J.kA(a)},
mY:function(a){if(typeof a=="number")return J.bZ.prototype
if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bH.prototype
return a},
qb:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bH.prototype
return a},
b4:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.Q)return a
return J.kA(a)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.e7(a).q(a,b)},
lE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mY(a).w(a,b)},
lF:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n2(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bM(a).h(a,b)},
kV:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.n2(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hO(a).m(a,b,c)},
nx:function(a,b,c){return J.b4(a).h3(a,b,c)},
ny:function(a,b,c,d){return J.b4(a).hn(a,b,c,d)},
nz:function(a,b){return J.mY(a).ai(a,b)},
hR:function(a,b){return J.hO(a).J(a,b)},
eb:function(a,b){return J.hO(a).F(a,b)},
nA:function(a){return J.b4(a).gah(a)},
nB:function(a){return J.b4(a).gbv(a)},
kW:function(a){return J.e7(a).gG(a)},
aF:function(a){return J.hO(a).gR(a)},
aN:function(a){return J.bM(a).gl(a)},
lG:function(a){return J.hO(a).ii(a)},
nC:function(a,b){return J.b4(a).im(a,b)},
nD:function(a){return J.qb(a).iu(a)},
ct:function(a){return J.e7(a).i(a)},
a:function a(){},
ey:function ey(){},
cN:function cN(){},
bf:function bf(){},
eY:function eY(){},
bH:function bH(){},
aS:function aS(){},
w:function w(a){this.$ti=a},
iv:function iv(a){this.$ti=a},
ag:function ag(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bZ:function bZ(){},
cM:function cM(){},
ez:function ez(){},
be:function be(){}},P={
oz:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.q2()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cp(new P.jP(q),1)).observe(s,{childList:true})
return new P.jO(q,s,r)}else if(self.setImmediate!=null)return P.q3()
return P.q4()},
oA:function(a){self.scheduleImmediate(H.cp(new P.jQ(a),0))},
oB:function(a){self.setImmediate(H.cp(new P.jR(a),0))},
oC:function(a){P.lb(C.m,a)},
lb:function(a,b){var s=C.c.a3(a.a,1000)
return P.oM(s<0?0:s,b)},
mb:function(a,b){var s=C.c.a3(a.a,1000)
return P.oN(s<0?0:s,b)},
oM:function(a,b){var s=new P.dU()
s.eK(a,b)
return s},
oN:function(a,b){var s=new P.dU()
s.eL(a,b)
return s},
rl:function(a){return new P.cl(a,1)},
oF:function(){return C.a4},
oG:function(a){return new P.cl(a,3)},
pw:function(a,b){return new P.dR(a,b.K("dR<0>"))},
pS:function(){var s,r
for(s=$.cn;s!=null;s=$.cn){$.e4=null
r=s.b
$.cn=r
if(r==null)$.e3=null
s.a.$0()}},
pY:function(){$.lq=!0
try{P.pS()}finally{$.e4=null
$.lq=!1
if($.cn!=null)$.lD().$1(P.mT())}},
pW:function(a){var s=new P.fJ(a),r=$.e3
if(r==null){$.cn=$.e3=s
if(!$.lq)$.lD().$1(P.mT())}else $.e3=r.b=s},
pX:function(a){var s,r,q,p=$.cn
if(p==null){P.pW(a)
$.e4=$.e3
return}s=new P.fJ(a)
r=$.e4
if(r==null){s.b=p
$.cn=$.e4=s}else{q=r.b
s.b=q
$.e4=r.b=s
if(q==null)$.e3=s}},
ma:function(a,b){var s=$.aM
if(s===C.f)return P.lb(a,b)
return P.lb(a,s.hw(b))},
ot:function(a,b){var s=$.aM
if(s===C.f)return P.mb(a,b)
return P.mb(a,s.dt(b,t.aF))},
mP:function(a,b,c,d,e){P.pX(new P.ks(d,e))},
pT:function(a,b,c,d){var s,r=$.aM
if(r===c)return d.$0()
$.aM=c
s=r
try{r=d.$0()
return r}finally{$.aM=s}},
pU:function(a,b,c,d,e){var s,r=$.aM
if(r===c)return d.$1(e)
$.aM=c
s=r
try{r=d.$1(e)
return r}finally{$.aM=s}},
jP:function jP(a){this.a=a},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
dU:function dU(){this.c=0},
k7:function k7(a,b){this.a=a
this.b=b},
k6:function k6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cl:function cl(a,b){this.a=a
this.b=b},
bK:function bK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dR:function dR(a,b){this.a=a
this.$ti=b},
fJ:function fJ(a){this.a=a
this.b=null},
c8:function c8(){},
ff:function ff(){},
ke:function ke(){},
ks:function ks(a,b){this.a=a
this.b=b},
jW:function jW(){},
jX:function jX(a,b){this.a=a
this.b=b},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
o0:function(a,b){return new H.X(a.K("@<0>").b8(b).K("X<1,2>"))},
o1:function(a,b,c){return H.qa(a,new H.X(b.K("@<0>").b8(c).K("X<1,2>")))},
U:function(a,b){return new H.X(a.K("@<0>").b8(b).K("X<1,2>"))},
cR:function(a){return new P.dF(a.K("dF<0>"))},
lf:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oH:function(a,b){var s=new P.dG(a,b)
s.c=a.e
return s},
nV:function(a,b,c){var s,r
if(P.lr(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.am.push(a)
try{P.pv(a,s)}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}r=P.m8(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
l1:function(a,b,c){var s,r
if(P.lr(a))return b+"..."+c
s=new P.a0(b)
$.am.push(a)
try{r=s
r.a=P.m8(r.a,a,", ")}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lr:function(a){var s,r
for(s=$.am.length,r=0;r<s;++r)if(a===$.am[r])return!0
return!1},
pv:function(a,b){var s,r,q,p,o,n,m,l=a.gR(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.y(l.gC(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.u()){if(j<=4){b.push(H.y(p))
return}r=H.y(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.u();p=o,o=n){n=l.gC(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.y(p)
r=H.y(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
o2:function(a,b,c){var s=P.o0(b,c)
a.F(0,new P.iA(s,b,c))
return s},
lS:function(a,b){var s,r,q=P.cR(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
l7:function(a){var s,r={}
if(P.lr(a))return"{...}"
s=new P.a0("")
try{$.am.push(a)
s.a+="{"
r.a=!0
J.eb(a,new P.iE(r,s))
s.a+="}"}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dF:function dF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jV:function jV(a){this.a=a
this.c=this.b=null},
dG:function dG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cL:function cL(){},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
cS:function cS(){},
k:function k(){},
cW:function cW(){},
iE:function iE(a,b){this.a=a
this.b=b},
M:function M(){},
hC:function hC(){},
cX:function cX(){},
ce:function ce(a,b){this.a=a
this.$ti=b},
dc:function dc(){},
dN:function dN(){},
dH:function dH(){},
dY:function dY(){},
e_:function e_(){},
ow:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.ox(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
ox:function(a,b,c,d){var s=a?$.np():$.no()
if(s==null)return null
if(0===c&&d===b.length)return P.mh(s,b)
return P.mh(s,b.subarray(c,P.bi(c,d,b.length)))},
mh:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.an(r)}return null},
lI:function(a,b,c,d,e,f){if(C.c.bp(f,4)!==0)throw H.c(P.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a8("Invalid base64 padding, more than two '=' characters",a,b))},
pc:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pb:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.bM(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jE:function jE(){},
jD:function jD(){},
hX:function hX(){},
hY:function hY(){},
ei:function ei(){},
el:function el(){},
ie:function ie(){},
it:function it(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
is:function is(a){this.a=a},
jB:function jB(){},
jF:function jF(){},
kc:function kc(a){this.b=0
this.c=a},
jC:function jC(a){this.a=a},
kb:function kb(a){this.a=a
this.b=16
this.c=0},
kF:function(a,b){var s=H.m_(a,b)
if(s!=null)return s
throw H.c(P.a8(a,null,null))},
nS:function(a){if(a instanceof H.bx)return a.i(0)
return"Instance of '"+H.d8(a)+"'"},
cU:function(a,b,c,d){var s,r=c?J.l2(a,d):J.nX(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iB:function(a,b,c){var s,r=H.b([],c.K("w<0>"))
for(s=J.aF(a);s.u();)r.push(s.gC(s))
if(b)return r
return J.l3(r)},
o3:function(a,b,c){var s,r,q=J.l2(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
fh:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bi(b,c,r)
return H.m0(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.oh(a,b,P.bi(b,c,a.length))
return P.oq(a,b,c)},
oq:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.aa(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.aa(c,b,a.length,o,o))
r=J.aF(a)
for(q=0;q<b;++q)if(!r.u())throw H.c(P.aa(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gC(r))
else for(q=b;q<c;++q){if(!r.u())throw H.c(P.aa(c,b,q,o,o))
p.push(r.gC(r))}return H.m0(p)},
oi:function(a){return new H.eA(a,H.o_(a,!1,!0,!1,!1,!1))},
m8:function(a,b,c){var s=J.aF(b)
if(!s.u())return a
if(c.length===0){do a+=H.y(s.gC(s))
while(s.u())}else{a+=H.y(s.gC(s))
for(;s.u();)a=a+c+H.y(s.gC(s))}return a},
me:function(){var s=H.o8()
if(s!=null)return P.ov(s)
throw H.c(P.C("'Uri.base' is not supported"))},
ka:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nv().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghM().ci(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aA(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nO:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nP:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
eo:function(a){if(a>=10)return""+a
return"0"+a},
lN:function(a){return new P.by(1000*a)},
ii:function(a){if(typeof a=="number"||H.ko(a)||null==a)return J.ct(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nS(a)},
hT:function(a){return new P.ee(a)},
cu:function(a){return new P.aG(!1,null,null,a)},
f3:function(a,b){return new P.d9(null,null,!0,a,b,"Value not in range")},
aa:function(a,b,c,d,e){return new P.d9(b,c,!0,a,d,"Invalid value")},
bi:function(a,b,c){if(0>a||a>c)throw H.c(P.aa(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aa(b,a,c,"end",null))
return b}return c},
m1:function(a,b){if(a<0)throw H.c(P.aa(a,0,null,b,null))
return a},
P:function(a,b,c,d,e){var s=e==null?J.aN(b):e
return new P.ew(s,!0,a,c,"Index out of range")},
C:function(a){return new P.fC(a)},
ju:function(a){return new P.fz(a)},
la:function(a){return new P.c7(a)},
aK:function(a){return new P.ej(a)},
f:function(a){return new P.fX(a)},
a8:function(a,b,c){return new P.ip(a,b,c)},
lA:function(a){H.qo(a)},
ov:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.md(a4<a4?C.a.t(a5,0,a4):a5,5,a3).gek()
else if(s===32)return P.md(C.a.t(a5,5,a4),0,a3).gek()}r=P.cU(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mQ(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.mQ(a5,0,q,20,r)===20)r[7]=q
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.a8(a5,"..",n)))h=m>n+2&&C.a.a8(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.a8(a5,"file",0)){if(p<=0){if(!C.a.a8(a5,"/",n)){g="file:///"
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
a5=C.a.b3(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.a8(a5,"http",0)){if(i&&o+3===n&&C.a.a8(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.b3(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.a8(a5,"https",0)){if(i&&o+4===n&&C.a.a8(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.b3(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.t(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.hh(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.p5(a5,0,q)
else{if(q===0)P.cm(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.p6(a5,d,p-1):""
b=P.p2(a5,p,o,!1)
i=o+1
if(i<n){a=H.m_(C.a.t(a5,i,n),a3)
a0=P.p4(a==null?H.h(P.a8("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.p3(a5,n,m,a3,j,b!=null)
a2=m<l?P.lm(a5,m+1,l,a3):a3
return new P.bL(j,c,b,a0,a1,a2,l<a4?P.p1(a5,l+1,a4):a3)},
mg:function(a){var s=t.N
return C.b.hS(H.b(a.split("&"),t.s),P.U(s,s),new P.jz(C.e))},
ou:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jw(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.V(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.kF(C.a.t(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.kF(C.a.t(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
mf:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.jx(a),c=new P.jy(d,a)
if(a.length<2)d.$1("address is too short")
s=H.b([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.V(a,r)
if(n===58){if(r===b){++r
if(C.a.V(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gaA(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.ou(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.aX(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
mD:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cm:function(a,b,c){throw H.c(P.a8(c,a,b))},
p4:function(a,b){if(a!=null&&a===P.mD(b))return null
return a},
p2:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.V(a,b)===91){s=c-1
if(C.a.V(a,s)!==93)P.cm(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.p_(a,r,s)
if(q<s){p=q+1
o=P.mI(a,C.a.a8(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mf(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.V(a,n)===58){q=C.a.by(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mI(a,C.a.a8(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mf(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.p8(a,b,c)},
p_:function(a,b,c){var s=C.a.by(a,"%",b)
return s>=b&&s<c?s:c},
mI:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a0(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.V(a,s)
if(p===37){o=P.ln(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a0("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.cm(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a0("")
if(r<s){i.a+=C.a.t(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.V(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.t(a,r,s)
if(i==null){i=new P.a0("")
n=i}else n=i
n.a+=j
n.a+=P.ll(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
p8:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.V(a,s)
if(o===37){n=P.ln(a,s,!0)
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
if(m>=8)return H.d(C.i,m)
m=(C.i[m]&1<<(o&15))!==0}else m=!1
if(m)P.cm(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.V(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a0("")
m=q}else m=q
m.a+=l
m.a+=P.ll(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
p5:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mF(C.a.D(a,b)))P.cm(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cm(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.oZ(r?a.toLowerCase():a)},
oZ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p6:function(a,b,c){return P.dZ(a,b,c,C.Y,!1)},
p3:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dZ(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a1(s,"/"))s="/"+s
return P.p7(s,e,f)},
p7:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a1(a,"/"))return P.p9(a,!s||c)
return P.pa(a)},
lm:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.cu("Both query and queryParameters specified"))
return P.dZ(a,b,c,C.j,!0)}if(d==null)return null
s=new P.a0("")
r.a=""
d.F(0,new P.k8(new P.k9(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
p1:function(a,b,c){return P.dZ(a,b,c,C.j,!0)},
ln:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.V(a,b+1)
r=C.a.V(a,n)
q=H.kB(s)
p=H.kB(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aX(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aA(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
ll:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.D(k,a>>>4)
s[2]=C.a.D(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.hd(a,6*q)&63|r
if(o>=p)return H.d(s,o)
s[o]=37
m=o+1
l=C.a.D(k,n>>>4)
if(m>=p)return H.d(s,m)
s[m]=l
l=o+2
m=C.a.D(k,n&15)
if(l>=p)return H.d(s,l)
s[l]=m
o+=3}}return P.fh(s,0,null)},
dZ:function(a,b,c,d,e){var s=P.mH(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
mH:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.V(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.ln(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.i,n)
n=(C.i[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cm(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.V(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.ll(o)}}if(p==null){p=new P.a0("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.y(m)
if(typeof l!=="number")return H.n0(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mG:function(a){if(C.a.a1(a,"."))return!0
return C.a.dT(a,"/.")!==-1},
pa:function(a){var s,r,q,p,o,n,m
if(!P.mG(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.K(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
p9:function(a,b){var s,r,q,p,o,n
if(!P.mG(a))return!b?P.mE(a):a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaA(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaA(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.mE(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
mE:function(a){var s,r,q,p=a.length
if(p>=2&&P.mF(C.a.D(a,0)))for(s=1;s<p;++s){r=C.a.D(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.aa(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.k,q)
q=(C.k[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
p0:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.cu("Invalid URL encoding"))}}return s},
lo:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.D(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.t(a,b,c)
else p=new H.r(C.a.t(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.D(a,o)
if(r>127)throw H.c(P.cu("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.cu("Truncated URI"))
p.push(P.p0(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a3.ci(p)},
mF:function(a){var s=a|32
return 97<=s&&s<=122},
md:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a8(k,a,r))}}if(q<0&&r>b)throw H.c(P.a8(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaA(j)
if(p!==44||r!==n+7||!C.a.a8(a,"base64",n+1))throw H.c(P.a8("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.H.i0(0,a,m,s)
else{l=P.mH(a,m,s,C.j,!0)
if(l!=null)a=C.a.b3(a,m,s,l)}return new P.jv(a,j,c)},
pg:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.kl(h)
q=new P.km()
p=new P.kn()
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
mQ:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.nw()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.d(m,d)
q=m[d]
p=C.a.D(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.d(e,n)
e[n]=r}return d},
Z:function Z(a,b){this.a=a
this.b=b},
by:function by(a){this.a=a},
ia:function ia(){},
ib:function ib(){},
L:function L(){},
ee:function ee(a){this.a=a},
fs:function fs(){},
eT:function eT(){},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d9:function d9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ew:function ew(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fC:function fC(a){this.a=a},
fz:function fz(a){this.a=a},
c7:function c7(a){this.a=a},
ej:function ej(a){this.a=a},
eW:function eW(){},
dg:function dg(){},
em:function em(a){this.a=a},
fX:function fX(a){this.a=a},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(){},
ex:function ex(){},
aj:function aj(){},
Q:function Q(){},
a0:function a0(a){this.a=a},
jz:function jz(a){this.a=a},
jw:function jw(a){this.a=a},
jx:function jx(a){this.a=a},
jy:function jy(a,b){this.a=a
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
k9:function k9(a,b){this.a=a
this.b=b},
k8:function k8(a){this.a=a},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
kl:function kl(a){this.a=a},
km:function km(){},
kn:function kn(){},
hh:function hh(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fP:function fP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
bp:function(a){var s,r,q,p,o
if(a==null)return null
s=P.U(t.N,t.A)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
mL:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.ko(a))return a
if(t.f.b(a))return P.mU(a)
if(t.r.b(a)){s=[]
J.eb(a,new P.kj(s))
a=s}return a},
mU:function(a){var s={}
J.eb(a,new P.kt(s))
return s},
k1:function k1(){},
k3:function k3(a,b){this.a=a
this.b=b},
k4:function k4(a,b){this.a=a
this.b=b},
kj:function kj(a){this.a=a},
kt:function kt(a){this.a=a},
k2:function k2(a,b){this.a=a
this.b=b},
es:function es(a,b){this.a=a
this.b=b},
im:function im(){},
io:function io(){},
hf:function hf(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aT:function aT(){},
eD:function eD(){},
aY:function aY(){},
eU:function eU(){},
j1:function j1(){},
c6:function c6(){},
fg:function fg(){},
o:function o(){},
b_:function b_(){},
fr:function fr(){},
h3:function h3(){},
h4:function h4(){},
hb:function hb(){},
hc:function hc(){},
hp:function hp(){},
hq:function hq(){},
hy:function hy(){},
hz:function hz(){},
hV:function hV(){},
eg:function eg(){},
hW:function hW(a){this.a=a},
eh:function eh(){},
b8:function b8(){},
eV:function eV(){},
fL:function fL(){},
da:function da(){},
fb:function fb(){},
hl:function hl(){},
hm:function hm(){}},W={
lH:function(){var s=document.createElement("a")
s.toString
return s},
lL:function(){var s=document.createElement("canvas")
s.toString
return s},
nR:function(a,b,c){var s=document.body
s.toString
s=new H.b2(new W.a6(C.p.aj(s,a,b,c)),new W.ic(),t.ac.K("b2<k.E>"))
return t.h.a(s.gaO(s))},
id:function(a){return"wheel"},
cF:function(a){var s,r,q="element tag unavailable"
try{s=J.b4(a)
s.geh(a)
q=s.geh(a)}catch(r){H.an(r)}return q},
nU:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.an(s)}return q},
jU:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mu:function(a,b,c,d){var s=W.jU(W.jU(W.jU(W.jU(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a7:function(a,b,c,d){var s=new W.dD(a,b,c==null?null:W.mR(new W.jS(c),t.aD),!1)
s.hk()
return s},
mt:function(a){var s=W.lH(),r=window
s=new W.ck(new W.jZ(s,r.location))
s.eB(a)
return s},
oD:function(a,b,c,d){return!0},
oE:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
my:function(){var s=t.N,r=P.lS(C.z,s),q=H.b(["TEMPLATE"],t.s)
s=new W.ht(r,P.cR(s),P.cR(s),P.cR(s),null)
s.eI(null,new H.cY(C.z,new W.k5(),t.dv),q,null)
return s},
mR:function(a,b){var s=$.aM
if(s===C.f)return a
return s.dt(a,b)},
v:function v(){},
hS:function hS(){},
ec:function ec(){},
ed:function ed(){},
bQ:function bQ(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
aH:function aH(){},
i3:function i3(){},
J:function J(){},
cB:function cB(){},
i4:function i4(){},
au:function au(){},
aR:function aR(){},
i5:function i5(){},
i6:function i6(){},
i7:function i7(){},
ba:function ba(){},
i8:function i8(){},
cC:function cC(){},
cD:function cD(){},
ep:function ep(){},
i9:function i9(){},
fM:function fM(a,b){this.a=a
this.b=b},
F:function F(){},
ic:function ic(){},
m:function m(){},
e:function e(){},
ah:function ah(){},
bV:function bV(){},
er:function er(){},
et:function et(){},
aw:function aw(){},
ir:function ir(){},
bA:function bA(){},
cK:function cK(){},
bY:function bY(){},
bB:function bB(){},
iC:function iC(){},
iU:function iU(){},
c_:function c_(){},
eL:function eL(){},
iV:function iV(a){this.a=a},
eM:function eM(){},
iW:function iW(a){this.a=a},
ay:function ay(){},
eN:function eN(){},
ap:function ap(){},
a6:function a6(a){this.a=a},
t:function t(){},
d4:function d4(){},
az:function az(){},
f_:function f_(){},
f5:function f5(){},
j8:function j8(a){this.a=a},
f7:function f7(){},
aq:function aq(){},
f9:function f9(){},
aC:function aC(){},
fa:function fa(){},
aD:function aD(){},
fe:function fe(){},
jg:function jg(a){this.a=a},
al:function al(){},
bk:function bk(){},
dh:function dh(){},
fi:function fi(){},
fj:function fj(){},
c9:function c9(){},
ar:function ar(){},
af:function af(){},
fl:function fl(){},
fm:function fm(){},
jk:function jk(){},
as:function as(){},
bG:function bG(){},
fq:function fq(){},
jp:function jp(){},
b1:function b1(){},
jA:function jA(){},
fG:function fG(){},
bl:function bl(){},
ci:function ci(){},
cj:function cj(){},
fN:function fN(){},
dC:function dC(){},
h0:function h0(){},
dI:function dI(){},
hk:function hk(){},
hr:function hr(){},
fK:function fK(){},
fU:function fU(a){this.a=a},
l_:function l_(a,b){this.a=a
this.$ti=b},
dD:function dD(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jS:function jS(a){this.a=a},
le:function le(a){this.$ti=a},
ck:function ck(a){this.a=a},
O:function O(){},
d5:function d5(a){this.a=a},
iZ:function iZ(a){this.a=a},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(){},
k_:function k_(){},
k0:function k0(){},
ht:function ht(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k5:function k5(){},
hs:function hs(){},
cH:function cH(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
jZ:function jZ(a,b){this.a=a
this.b=b},
hD:function hD(a){this.a=a
this.b=0},
kd:function kd(a){this.a=a},
fO:function fO(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fY:function fY(){},
fZ:function fZ(){},
h1:function h1(){},
h2:function h2(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hd:function hd(){},
he:function he(){},
hg:function hg(){},
dP:function dP(){},
dQ:function dQ(){},
hi:function hi(){},
hj:function hj(){},
ho:function ho(){},
hu:function hu(){},
hv:function hv(){},
dS:function dS(){},
dT:function dT(){},
hw:function hw(){},
hx:function hx(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){}},K={
R:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.f("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.D(a,0)
r=C.a.D(b,0)
if(s>r){q=r
r=s
s=q}return new K.f2(s,r)},
aO:function aO(){},
cJ:function cJ(){},
ae:function ae(a){this.a=a},
f2:function f2(a,b){this.a=a
this.b=b},
u:function u(a){this.a=a}},L={
jn:function(){var s=t.N
return new L.jm(P.U(s,t.dl),P.U(s,t.f7),P.cR(s))},
fc:function fc(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fo:function fo(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a,b){this.b=a
this.c=b},
jm:function jm(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dk:function dk(a,b){this.b=a
this.c=!1
this.a=b}},O={
kX:function(a){return new O.ao(H.b([],a.K("w<0>")),a.K("ao<0>"))},
ao:function ao(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
d0:function d0(a){this.a=a
this.b=null},
lT:function(){var s=O.kX(t.gc),r=new O.cZ(s)
s.bq(r.gfd(),r.gff())
s=r.gdY()
s.gv().n(0,r.gd8())
s.gdX().n(0,r.gcV())
return r},
eJ:function(a,b){return new O.d_(new V.Y(0,0,0),a,b,new A.aJ(!1,!1,!1))},
cZ:function cZ(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(){},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(){},
iP:function iP(a,b){this.a=a
this.b=b},
iQ:function iQ(){},
iR:function iR(a,b){this.a=a
this.b=b},
iS:function iS(){},
iF:function iF(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c},
eI:function eI(){},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d},
iI:function iI(a){this.b=a},
iJ:function iJ(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d},
iK:function iK(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d},
di:function di(){}},E={
kZ:function(){var s=O.kX(t.l),r=new E.bz(s)
s.bq(r.gi1(),r.gi4())
r.sae(0,null)
r.sbn(null)
r.saL(null)
return r},
mq:function(){var s=window.navigator.vendor
s.toString
if(C.a.E(s,"Google"))return C.F
s=window.navigator.userAgent
s.toString
if(C.a.E(s,"Firefox"))return C.q
s=window.navigator.appVersion
s.toString
if(C.a.E(s,"Trident")||C.a.E(s,"Edge"))return C.r
s=window.navigator.appName
s.toString
if(C.a.E(s,"Microsoft"))return C.r
return C.G},
mr:function(){var s=window.navigator.appVersion
s.toString
if(C.a.E(s,"Win"))return C.a0
if(C.a.E(s,"Mac"))return C.A
if(C.a.E(s,"Linux"))return C.a1
return C.a2},
oj:function(a,b){var s
Date.now()
s=t.fA
s=new E.j4(a,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1),new O.d0(H.b([],s)),new O.d0(H.b([],s)),new O.d0(H.b([],s)),H.b([null],t.bc),P.U(t.N,t.fg))
s.eA(a,b)
return s},
os:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.m9(a,!0,!0,!0,!1)
s=W.lL()
r=s.style
r.width="100%"
r.height="100%"
J.nB(a).n(0,s)
return E.m9(s,!0,!0,!0,!1)},
m9:function(a,b,c,d,e){var s,r,q,p,o="mousemove",n=t.A,m=t.gW.a(C.l.eo(a,"webgl2",P.o1(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n)))
if(m==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.oj(m,a)
H.kh(m.getParameter(3379))
H.kh(m.getParameter(34076))
n=H.b([],t.g9)
r=$.ig
q=new X.fE(a,n,(r==null?$.ig=new E.fV(E.mq(),E.mr()):r).a===C.q?0.16666666666666666:0.005555555555555556)
p=document
p.toString
n.push(W.a7(p,"contextmenu",q.gfn(),!1))
n.push(W.a7(a,"focus",q.gfu(),!1))
n.push(W.a7(a,"blur",q.gfh(),!1))
n.push(W.a7(p,"keyup",q.gfA(),!1))
n.push(W.a7(p,"keydown",q.gfw(),!1))
n.push(W.a7(a,"mousedown",q.gfE(),!1))
n.push(W.a7(a,"mouseup",q.gfI(),!1))
n.push(W.a7(a,o,q.gfG(),!1))
W.id(a)
W.id(a)
n.push(W.a7(a,W.id(a),q.gfK(),!1))
n.push(W.a7(p,o,q.gfp(),!1))
n.push(W.a7(p,"mouseup",q.gfs(),!1))
n.push(W.a7(p,"pointerlockchange",q.gfM(),!1))
n.push(W.a7(a,"touchstart",q.gfZ(),!1))
n.push(W.a7(a,"touchend",q.gfV(),!1))
n.push(W.a7(a,"touchmove",q.gfX(),!1))
n=new E.fn(a,s,q,new P.Z(Date.now(),!1))
n.da()
return n},
hZ:function hZ(){},
bz:function bz(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bS:function bS(a){this.b=a},
c3:function c3(a){this.b=a},
fV:function fV(a,b){this.a=a
this.b=b},
j4:function j4(a,b,c,d,e,f,g,h){var _=this
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
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
fn:function fn(a,b,c,d){var _=this
_.b=a
_.d=null
_.e=b
_.x=c
_.Q=null
_.cx=!1
_.cy=d
_.db=0},
jj:function jj(a){this.a=a}},Z={
ld:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.e1(c)),35044)
a.bindBuffer(b,null)
return new Z.fH(b,s)},
aE:function(a){return new Z.bJ(a)},
fH:function fH(a,b){this.a=a
this.b=b},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jN:function jN(a){this.a=a},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bX:function bX(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a){this.a=a}},D={
N:function(){return new D.bU()},
i0:function i0(){},
bU:function bU(){var _=this
_.c=_.b=_.a=null
_.d=0},
ij:function ij(a){this.a=a},
ik:function ik(a){this.a=a},
T:function T(){},
bc:function bc(){},
bd:function bd(){},
E:function E(a,b,c){this.c=a
this.d=b
this.e=c},
cP:function cP(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null},
c4:function c4(a,b){var _=this
_.a=a
_.b=null
_.c=b
_.f=_.e=_.d=null
_.r=1
_.y=_.x=0
_.z=!0
_.Q=null}},X={cx:function cx(a,b){this.a=a
this.b=b},eC:function eC(a,b){this.a=a
this.b=b},ix:function ix(a,b){this.c=a
this.d=b},cV:function cV(a,b,c){this.x=a
this.c=b
this.d=c},iD:function iD(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},c0:function c0(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},iX:function iX(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},c1:function c1(a,b,c){this.x=a
this.c=b
this.d=c},f1:function f1(){},dj:function dj(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jo:function jo(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fE:function fE(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
nT:function(a){var s=new V.aQ(0,0,0,1),r=$.m4
if(r==null){r=V.m3(0,0,1,1)
$.m4=r}return new X.iq(s,r)},
iq:function iq(a,b){this.a=a
this.r=b
this.x=null},
eX:function eX(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
ji:function ji(){}},V={
hP:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
kU:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bp(a-b,s)
return(a<0?a+s:a)+b},
x:function(a,b,c){$.D().toString
return C.a.am(C.d.cJ(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cr:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.D().toString
n=C.a.am(C.d.cJ(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.am(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
ai:function(){var s=$.iT
return s==null?$.iT=V.aX(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aX:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lY:function(a,b,c){return V.aX(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
l8:function(a,b,c,d){return V.aX(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lV:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aX(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
lW:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aX(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
lX:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aX(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)},
o6:function(){var s=$.aZ
return s==null?$.aZ=new V.V(0,0,0):s},
m3:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f4(a,b,c,d)},
dz:function(){var s=$.mn
return s==null?$.mn=new V.G(0,0,0):s},
mo:function(){var s=$.mm
return s==null?$.mm=new V.G(0,0,1):s},
mi:function(a,b,c){return new V.G(a,b,c)},
oy:function(a){return new V.G(a.a,a.b,a.c)},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ih:function ih(){},
eK:function eK(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aW:function aW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a2:function a2(a,b){this.a=a
this.b=b},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4:function f4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(a,b){this.a=a
this.b=b},
G:function G(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qp:function(a){P.ot(C.R,new V.kQ(a))},
ol:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a7(n,"scroll",new V.jd(s),!1)
return new V.jb(o)},
aI:function aI(){},
kQ:function kQ(a){this.a=a},
en:function en(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eu:function eu(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
ev:function ev(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eZ:function eZ(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jb:function jb(a){this.a=a
this.b=null},
jd:function jd(a){this.a=a},
jc:function jc(a){this.a=a},
je:function je(a){this.a=a}},U={
i2:function(){return new U.i1()},
ek:function(a){var s=V.ai(),r=new U.cy(s)
if(!s.q(0,a))r.a=a
return r},
l0:function(){var s=new U.bW(V.ai(),H.b([],t.eJ))
s.bq(s.geF(),s.gfR())
return s},
i1:function i1(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cy:function cy(a){this.a=a
this.b=null},
bW:function bW(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a_:function a_(){},
db:function db(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0
_.x=a
_.y=null},
dw:function dw(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
dx:function dx(a,b,c,d,e){var _=this
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
dy:function dy(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null},
lt:function(a,b,c,d,e,f,g,h){var s,r,q,p,o=c>1?1:c,n=d>1?1:d,m=e>1?1:e,l=new V.Y(o,n,m),k=U.l0()
k.n(0,U.ek(V.lY(0,0,2)))
m=new U.db(V.ai())
m.sem(0)
m.sea(0,0)
m.seg(0)
o=m.d
$.D().toString
if(!(Math.abs(o-f)<1e-9)){m.d=f
m.L(new D.E("deltaYaw",o,f))}o=m.e
$.D().toString
if(!(Math.abs(o-g)<1e-9)){m.e=g
m.L(new D.E("deltaPitch",o,g))}o=m.f
$.D().toString
if(!(Math.abs(o-h)<1e-9)){m.f=h
m.L(new D.E("deltaRoll",o,h))}k.n(0,m)
s=E.kZ()
o=U.l0()
o.n(0,U.ek(V.l8(0.1,0.1,0.1,1)))
o.n(0,k)
s.saL(o)
s.sae(0,F.n6(8,8))
o=O.lT()
o.gdE().saH(0,l)
s.sbn(o)
r=new D.c4(V.ai(),new V.Y(1,1,1))
q=r.b
r.b=k
k.gv().n(0,r.geD())
r.ab(new D.E("mover",q,r.b))
if(!r.c.q(0,l)){q=r.c
r.c=l
r.ab(new D.E("color",q,l))}p=$.mp
if(p==null){p=new V.dA(1,0.00390625,0.0000152587890625,0)
$.mp=p}if(!J.K(r.f,p)){q=r.f
r.f=p
r.ab(new D.E("shadowAdjust",q,p))}o=r.r
$.D().toString
if(!(Math.abs(o-1)<1e-9)){r.r=1
r.ab(new D.E("attenuation0",o,1))}o=r.x
$.D().toString
if(!(Math.abs(o-0.5)<1e-9)){r.x=0.5
r.ab(new D.E("attenuation1",o,0.5))}o=r.y
$.D().toString
if(!(Math.abs(o-0.15)<1e-9)){r.y=0.15
r.ab(new D.E("attenuation2",o,0.15))}a.gdY().n(0,r)
b.e.n(0,s)},
qm:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="testCanvas",b=null,a="modifiers",a0=V.ol("Test 021"),a1=W.lL()
a1.className="pageLargeCanvas"
a1.id=c
a0.a.appendChild(a1).toString
s=t.s
a0.dn(H.b(["Test of the Material Lighting shader with multiple moving point lights. ","Emissive spheres are added at the lights sources."],s))
a0.hm(H.b(["shapes"],s))
a0.dn(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(c)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.os(r,!0,!0,!0,!1)
p=E.kZ()
p.saL(U.ek(V.ai()))
p.sae(0,F.n8())
o=E.kZ()
o.saL(U.ek(V.l8(3,3,3,1)))
n=F.lv(1,b,b,1)
n.cu()
o.sae(0,n)
m=U.l0()
n=q.x
l=U.i2()
k=U.i2()
j=$.bI
if(j==null)j=$.bI=new V.a5(0,0)
j=new U.dx(l,k,new X.a9(!1,!1,!1),j,V.ai())
l.scL(0,!0)
l.scz(6.283185307179586)
l.scB(0)
l.sZ(0,0)
l.scA(100)
l.sa0(0)
l.sck(0.5)
i=j.gaV()
l.gv().n(0,i)
k.scL(0,!0)
k.scz(6.283185307179586)
k.scB(0)
k.sZ(0,0)
k.scA(100)
k.sa0(0)
k.sck(0.5)
k.gv().n(0,i)
l=new X.a9(!1,!1,!1)
if(!j.d.q(0,l)){h=j.d
j.d=l
j.L(new D.E(a,h,l))}j.be(n)
m.n(0,j)
U.i2()
if($.bI==null)$.bI=new V.a5(0,0)
V.ai()
l=U.i2()
k=$.bI
if(k==null)k=$.bI=new V.a5(0,0)
k=new U.dw(l,new X.a9(!1,!1,!1),k,V.ai())
l.scL(0,!0)
l.scz(6.283185307179586)
l.scB(0)
l.sZ(0,0)
l.scA(100)
l.sa0(0)
l.sck(0.2)
l.gv().n(0,k.gaV())
l=new X.a9(!0,!1,!1)
if(!k.c.q(0,l)){h=k.c
k.c=l
k.L(new D.E(a,h,l))}k.be(n)
m.n(0,k)
l=new X.a9(!1,!1,!1)
k=new U.dy(l,V.ai())
j=new X.a9(!1,!1,!1)
if(!l.q(0,j)){k.b=j
k.L(new D.E(a,l,j))}k.be(n)
m.n(0,k)
m.n(0,U.ek(V.lY(0,0,5)))
g=O.lT()
n=g.gdq()
n.saH(0,new V.Y(0.15,0.15,0.15))
n=g.gdw()
n.saH(0,new V.Y(0.4,0.4,0.4))
n=g.gbK()
n.saH(0,new V.Y(0.3,0.3,0.3))
n=g.gbK()
n.dd(new A.aJ(!0,!1,!1))
n.de(100)
n=O.kX(t.l)
f=new M.eq(n)
n.bq(f.gfj(),f.gfl())
e=X.nT(b)
d=new X.eX(1.0471975511965976,0.1)
d.saL(b)
l=d.c
$.D().toString
if(!(Math.abs(l-1.0471975511965976)<1e-9)){d.c=1.0471975511965976
d.aS(new D.E("fov",l,1.0471975511965976))}l=d.d
$.D().toString
if(!(Math.abs(l-0.1)<1e-9)){d.d=0.1
d.aS(new D.E("near",l,0.1))}l=d.e
$.D().toString
if(!(Math.abs(l-2000)<1e-9)){d.e=2000
d.aS(new D.E("far",l,2000))}l=f.b
if(l!==d){if(l!=null)l.gv().N(0,f.gaw())
h=f.b
f.b=d
d.gv().n(0,f.gaw())
f.aC(new D.E("camera",h,f.b))}l=f.c
if(l!==e){if(l!=null)l.gv().N(0,f.gaw())
h=f.c
f.c=e
e.gv().n(0,f.gaw())
f.aC(new D.E("target",h,f.c))}f.sbn(b)
f.sbn(g)
n.n(0,o)
n.n(0,p)
n=f.b
if(n!=null)n.saL(m)
n=q.d
if(n!==f){if(n!=null)n.gv().N(0,q.gcS())
q.d=f
f.gv().n(0,q.gcS())
q.cT()}U.lt(g,f,1,0,0,0.3,0,0)
U.lt(g,f,0,1,0,0,0.4,0)
U.lt(g,f,0,0,1,0.5,0.5,0)
r=s.getElementById("shapes")
if(r==null)H.h(P.f("Failed to find shapes for RadioGroup"))
s=new V.j2("shapes",!0,r)
s.bd(0,"Cube",new U.kI(p))
s.bd(0,"Cylinder",new U.kJ(p))
s.bd(0,"Cone",new U.kK(p))
s.bd(0,"Sphere",new U.kL(p))
s.dl(0,"Toroid",new U.kM(p),!0)
s.bd(0,"Knot",new U.kN(p))
s=q.Q
if(s==null)s=q.Q=D.N()
n=s.b
s=n==null?s.b=H.b([],t.a):n
s.push(new U.kO(a0,g))
V.qp(q)},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a,b){this.a=a
this.b=b}},M={eq:function eq(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
o5:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=""+"MaterialLight_"+a4.gav(a4)+a5.gav(a5)+a6.gav(a6)+a7.gav(a7)+a8.gav(a8)+a9.gav(a9)+b0.gav(b0)+b1.gav(b1)+b2.gav(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.q)(b3),++r)b+="_"+b3[r].a}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.q)(b4),++r)b+="_"+b4[r].a}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.q)(b5),++r)b+="_"+b5[r].a}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.q)(b6),++r)b+="_"+b6[r].a}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
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
c=$.bt()
if(h){s=$.bs()
c=new Z.bJ(c.a|s.a)}if(g)c=new Z.bJ(c.a|$.br().a)
if(f)c=new Z.bJ(c.a|$.bq().a)
return new A.iH(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
kq:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kr:function(a,b,c){var s
A.kq(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hQ(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
pB:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kq(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
px:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kr(b,r,"ambient")
b.a+="\n"},
pz:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kr(b,r,"diffuse")
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
pC:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kr(b,r,"invDiffuse")
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
pI:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kr(b,r,"specular")
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
pE:function(a,b){var s,r,q
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
pG:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kq(b,r,"reflect")
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
pH:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kq(b,r,"refract")
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
py:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hQ(r)
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
c.a=p+"\n"}p=t.s
o=H.b([],p)
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
o=H.b([],p)
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
n=H.b([],p)
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
pA:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.hQ(r)
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
m=H.b([],p)
if(!a.b.a)l=!1
else l=!0
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.b([],p)
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
pF:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hQ(r)
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
c.a=p+"\n"}p=t.s
j=H.b([],p)
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
j=H.b([],p)
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
i=H.b([],p)
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
pJ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hQ(r)
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
if(m){s=$.ig
if(s==null)s=$.ig=new E.fV(E.mq(),E.mr())
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
s+=u.v
c.a=s
s+=u.q
c.a=s
c.a=s+"\n"}s=t.s
h=H.b([],s)
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
h=H.b([],s)
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
g=H.b([],s)
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
pD:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.b([],t.s)
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
pK:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.a0(""),j=""+"precision mediump float;\n"
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
A.pB(a,k)
A.px(a,k)
A.pz(a,k)
A.pC(a,k)
A.pI(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.pG(a,k)
A.pH(a,k)}A.pE(a,k)
q=k.a+="// === Alpha ===\n"
q=k.a=q+"\n"
p=a.y.a
if(p)q=k.a=q+"uniform float alpha;\n"
q+="float alphaValue()\n"
k.a=q
q=k.a=q+"{\n"
if(!p)o=!1
else o=!0
if(!o)q=k.a=q+"   return 1.0;\n"
else if(p){q+="   return alpha;\n"
k.a=q}q+="}\n"
k.a=q
k.a=q+"\n"
q=a.k1
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.py(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pA(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pF(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pJ(a,p[n],k)
A.pD(a,k)}p=k.a+="// === Main ===\n"
p+="\n"
k.a=p
p+="void main()\n"
k.a=p
p+="{\n"
k.a=p
p=k.a=p+"   float alpha = alphaValue();\n"
s=s?k.a=p+"   vec3 norm = normal();\n":p
if(j)k.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.b([],t.s)
if(q){k.a+=u.o
m.push("lightAccum")
if(!a.b.a)j=!1
else j=!0
if(j)k.a+="   setAmbientColor();\n"
if(!a.c.a)j=!1
else j=!0
if(j)k.a+="   setDiffuseColor();\n"
if(!a.d.a)j=!1
else j=!0
if(j)k.a+="   setInvDiffuseColor();\n"
if(!a.e.a)j=!1
else j=!0
if(j)k.a+="   setSpecularColor();\n"
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.aa(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.aa(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.aa(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.aa(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)j=!1
else j=!0
if(j)m.push("emissionColor()")
if(!a.r.a)j=!1
else j=!0
if(j)m.push("reflect(refl)")
if(!a.x.a)j=!1
else j=!0
if(j)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.b.j(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
pL:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.b_+"];\n"
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
pN:function(a,b){var s
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
pM:function(a,b){var s
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
pP:function(a,b){var s,r
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
pQ:function(a,b){var s,r
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
pO:function(a,b){var s
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
pR:function(a,b){var s
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
hQ:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.aa(a,1)},
lc:function(a,b,c,d,e){var s=new A.ft(H.b([],t.t),a,c,e)
s.f=d
s.e=P.cU(d,0,!1,t.S)
return s},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
hU:function hU(a){this.a=a},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.c=c},
eH:function eH(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.iN=_.iM=_.dM=_.iL=_.iK=_.dL=_.dK=_.iJ=_.iI=_.dJ=_.dI=_.iH=_.iG=_.dH=_.iF=_.iE=_.dG=_.dF=_.bx=_.b_=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cl=c
_.cm=d
_.cn=e
_.co=f
_.cp=g
_.cq=h
_.cr=i
_.cs=j
_.iQ=_.iP=_.iO=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b7:function b7(a,b){this.a=a
this.b=b},
b9:function b9(a,b){this.a=a
this.b=b},
bh:function bh(a,b){this.a=a
this.b=b},
bj:function bj(a,b){this.a=a
this.b=b},
iH:function iH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.b_=b5
_.bx=b6
_.dF=b7},
dp:function dp(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dq:function dq(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ds:function ds(a,b,c,d,e,f,g,h,i,j){var _=this
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
dv:function dv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dd:function dd(){},
a3:function a3(){},
jt:function jt(a){this.a=a},
cb:function cb(a,b,c){this.a=a
this.c=b
this.d=c},
fv:function fv(a,b,c){this.a=a
this.c=b
this.d=c},
fw:function fw(a,b,c){this.a=a
this.c=b
this.d=c},
fx:function fx(a,b,c){this.a=a
this.c=b
this.d=c},
ft:function ft(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
dl:function dl(a,b,c){this.a=a
this.c=b
this.d=c},
fu:function fu(a,b,c){this.a=a
this.c=b
this.d=c},
dm:function dm(a,b,c){this.a=a
this.c=b
this.d=c},
dn:function dn(a,b,c){this.a=a
this.c=b
this.d=c},
fy:function fy(a,b,c){this.a=a
this.c=b
this.d=c},
dr:function dr(a,b,c){this.a=a
this.c=b
this.d=c},
cc:function cc(a,b,c){this.a=a
this.c=b
this.d=c},
dt:function dt(a,b,c){this.a=a
this.c=b
this.d=c},
du:function du(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lv:function(a,b,c,d){var s=F.l9()
F.e0(s,b,c,d,a,1,0,0,1)
F.e0(s,b,c,d,a,0,1,0,3)
F.e0(s,b,c,d,a,0,0,1,2)
F.e0(s,b,c,d,a,-1,0,0,0)
F.e0(s,b,c,d,a,0,-1,0,0)
F.e0(s,b,c,d,a,0,0,-1,3)
s.ay()
return s},
kk:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
e0:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.G(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.G(s+a4,r+a2,q+a3)
o=new V.G(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.G(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.kk(h)
j=F.kk(g)
a.bj(F.lC(a0,a1,new F.kf(i,F.kk(f),F.kk(e),j,k,c),b))},
mX:function(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a1<3)throw H.c(P.f("Must have 3 or more sizes for a disk."))
s=F.l9()
r=b?-1:1
q=-6.283185307179586/a1
p=t.k
o=H.b([],p)
n=s.gY()
m=new V.G(0,0,r).M()
o.push(n.hq(new V.bE(a,-1,-1,-1),new V.aQ(1,1,1,1),new V.V(0,0,c),new V.G(0,0,r),new V.a2(0.5,0.5),m))
for(l=0;l<=a1;++l){k=q*l
j=r*Math.sin(k)
i=Math.cos(k)
h=a0.$1(l/a1)
n=s.a
if(n==null)n=s.a=new F.z(s,H.b([],p))
m=new V.G(j,i,r).M()
if(j<0)g=0
else g=j>1?1:j
f=i<0
if(f)e=0
else e=i>1?1:i
if(f)f=0
else f=i>1?1:i
d=F.fF(new V.bE(a,-1,-1,-1),null,new V.aQ(g,e,f,1),new V.V(j*h,i*h,c),new V.G(0,0,r),new V.a2(j*0.5+0.5,i*0.5+0.5),m,null,0)
n.n(0,d)
o.push(d)}s.gS().ho(o)
return s},
mV:function(a,b,c){return F.q7(!0,a,1,new F.ku(1,c),b)},
q7:function(a,b,c,d,e){var s
if(e<3)throw H.c(P.f("Must have 3 or more sizes for a cylindrical shape."))
if(c<1)throw H.c(P.f("Must have 1 or more divisionss for a cylindrical shape."))
s=F.lC(c,e,new F.kw(d),null)
s.ay()
s.cc()
if(b)s.bj(F.mX(3,!1,1,new F.kx(d),e))
s.bj(F.mX(1,!0,-1,new F.ky(d),e))
return s},
n6:function(a,b){var s=F.lv(a,null,new F.kR(1,new F.kS()),b)
s.cc()
return s},
n8:function(){return F.mW(15,30,0.5,1,new F.kT())},
qk:function(){return F.mW(12,120,0.3,1,new F.kH(3,2))},
mW:function(a,b,c,d,e){var s=F.lC(a,b,new F.kv(e,d,b,c),null)
s.ay()
s.cc()
return s},
lC:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.l9()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.z(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.fF(d,d,new V.aQ(m,0,0,1),d,d,new V.a2(o,1),d,d,0)
n.n(0,l)
c.$3(l,o,0)
q.push(l.cj(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.z(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.fF(d,d,new V.aQ(g,f,e,1),d,d,new V.a2(o,j),d,d,0)
h.n(0,l)
c.$3(l,o,k)
q.push(l.cj(a0))}}s.gS().hp(a+1,b+1,q)
return s},
l9:function(){return new F.j9()},
fF:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cf()
h=$.nq()
s=$.bt()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bs().a)!==0)q.r=e
if((r&$.br().a)!==0)q.x=b
if((r&$.bO().a)!==0)q.y=f
if((r&$.bP().a)!==0)q.z=g
if((r&$.nr().a)!==0)q.Q=c
if((r&$.cs().a)!==0)q.ch=i
if((r&$.bq().a)!==0)q.cx=a
return q},
kf:function kf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ku:function ku(a,b){this.a=a
this.b=b},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kS:function kS(){},
kR:function kR(a,b){this.a=a
this.b=b},
kT:function kT(){},
kH:function kH(a,b){this.a=a
this.b=b},
kv:function kv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
av:function av(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
il:function il(){},
jf:function jf(){},
eE:function eE(){this.b=this.a=null},
iy:function iy(){},
js:function js(){},
f0:function f0(){this.a=null},
j9:function j9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ja:function ja(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
de:function de(a,b){this.a=a
this.b=b},
df:function df(a,b){this.a=a
this.b=b},
bF:function bF(a,b){this.a=a
this.b=b},
cf:function cf(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jM:function jM(a){this.a=a},
jL:function jL(a){this.a=a},
z:function z(a,b){this.a=a
this.b=!1
this.c=b},
cg:function cg(a,b,c){this.b=a
this.c=b
this.d=c},
jG:function jG(a,b){this.a=a
this.b=b},
jH:function jH(a,b){this.a=a
this.b=b},
ch:function ch(a,b){this.b=a
this.c=b},
jJ:function jJ(){},
jI:function jI(){},
jK:function jK(){},
j_:function j_(){},
dB:function dB(a){this.b=a}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l4.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gG:function(a){return H.d7(a)},
i:function(a){return"Instance of '"+H.d8(a)+"'"}}
J.ey.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iad:1}
J.cN.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.bf.prototype={
gG:function(a){return 0},
i:function(a){return String(a)},
$ilR:1}
J.eY.prototype={}
J.bH.prototype={}
J.aS.prototype={
i:function(a){var s=a[$.nc()]
if(s==null)return this.ev(a)
return"JavaScript function for "+J.ct(s)},
$icI:1}
J.w.prototype={
cG:function(a,b){if(!!a.fixed$length)H.h(P.C("removeAt"))
if(b<0||b>=a.length)throw H.c(P.f3(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var s
if(!!a.fixed$length)H.h(P.C("remove"))
for(s=0;s<a.length;++s)if(J.K(a[s],b)){a.splice(s,1)
return!0}return!1},
ag:function(a,b){if(!!a.fixed$length)H.h(P.C("addAll"))
this.eO(a,b)
return},
eO:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aK(a))
for(s=0;s<r;++s)a.push(b[s])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aK(a))}},
j:function(a,b){var s,r,q=a.length,p=P.cU(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.y(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
hY:function(a){return this.j(a,"")},
hR:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aK(a))}return s},
hS:function(a,b,c){return this.hR(a,b,c,t.A)},
hQ:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aK(a))}throw H.c(H.iu())},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghP:function(a){if(a.length>0)return a[0]
throw H.c(H.iu())},
gaA:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.iu())},
dr:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aK(a))}return!1},
b7:function(a,b){if(!!a.immutable$list)H.h(P.C("sort"))
H.oo(a,b==null?J.po():b)},
eq:function(a){return this.b7(a,null)},
E:function(a,b){var s
for(s=0;s<a.length;++s)if(J.K(a[s],b))return!0
return!1},
i:function(a){return P.l1(a,"[","]")},
gR:function(a){return new J.ag(a,a.length)},
gG:function(a){return H.d7(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.h(P.C("set length"))
if(b>a.length)H.kg(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cq(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.h(P.C("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cq(a,b))
a[b]=c},
$iA:1,
$in:1,
$ij:1,
$ip:1}
J.iv.prototype={}
J.ag.prototype={
gC:function(a){return H.W(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bZ.prototype={
ai:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbA(b)
if(this.gbA(a)===s)return 0
if(this.gbA(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbA:function(a){return a===0?1/a<0:a<0},
dN:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.C(""+a+".floor()"))},
as:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.C(""+a+".round()"))},
cJ:function(a,b){var s
if(b>20)throw H.c(P.aa(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbA(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
w:function(a,b){return a*b},
bp:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ex:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dg(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.dg(a,b)},
dg:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.C("Result of truncating division is "+H.y(s)+": "+H.y(a)+" ~/ "+b))},
aX:function(a,b){var s
if(a>0)s=this.df(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hd:function(a,b){if(b<0)throw H.c(H.e6(b))
return this.df(a,b)},
df:function(a,b){return b>31?0:a>>>b},
$iH:1,
$ia4:1}
J.cM.prototype={$ii:1}
J.ez.prototype={}
J.be.prototype={
V:function(a,b){if(b<0)throw H.c(H.cq(a,b))
if(b>=a.length)H.h(H.cq(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.cq(a,b))
return a.charCodeAt(b)},
W:function(a,b){return a+b},
b3:function(a,b,c,d){var s=P.bi(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
a8:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a1:function(a,b){return this.a8(a,b,0)},
t:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.f3(b,null))
if(b>c)throw H.c(P.f3(b,null))
if(c>a.length)throw H.c(P.f3(c,null))
return a.substring(b,c)},
aa:function(a,b){return this.t(a,b,null)},
iu:function(a){return a.toLowerCase()},
w:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.O)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
am:function(a,b){var s=b-a.length
if(s<=0)return a
return this.w(" ",s)+a},
by:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dT:function(a,b){return this.by(a,b,0)},
hA:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aa(c,0,s,null,null))
return H.n7(a,b,c)},
E:function(a,b){return this.hA(a,b,0)},
ai:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gG:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl:function(a){return a.length},
$iA:1,
$il:1}
H.cO.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.r.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.V(this.a,b)}}
H.n.prototype={}
H.cT.prototype={
gR:function(a){return new H.bg(this,this.gl(this))},
bI:function(a,b){return this.eu(0,b)}}
H.bg.prototype={
gC:function(a){return H.W(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=J.bM(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.aK(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.J(q,s);++r.c
return!0}}
H.aU.prototype={
gR:function(a){return new H.eG(J.aF(this.a),this.b)},
gl:function(a){return J.aN(this.a)},
J:function(a,b){return this.b.$1(J.hR(this.a,b))}}
H.cE.prototype={$in:1}
H.eG.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gC(r))
return!0}s.a=null
return!1},
gC:function(a){return H.W(this).Q[1].a(this.a)}}
H.cY.prototype={
gl:function(a){return J.aN(this.a)},
J:function(a,b){return this.b.$1(J.hR(this.a,b))}}
H.b2.prototype={
gR:function(a){return new H.fI(J.aF(this.a),this.b)}}
H.fI.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gC(s)))return!0
return!1},
gC:function(a){var s=this.a
return s.gC(s)}}
H.cG.prototype={}
H.fB.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify an unmodifiable list"))}}
H.cd.prototype={}
H.cz.prototype={
i:function(a){return P.l7(this)},
m:function(a,b,c){H.nN()},
$iI:1}
H.cA.prototype={
gl:function(a){return this.a},
cg:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cg(0,b))return null
return this.d3(b)},
d3:function(a){return this.b[a]},
F:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.d3(q))}}}
H.jq.prototype={
al:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.d6.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eB.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fA.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.j0.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hn.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bx.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.na(r==null?"unknown":r)+"'"},
$icI:1,
gix:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fk.prototype={}
H.fd.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.na(s)+"'"}}
H.bR.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bR))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gG:function(a){var s,r=this.c
if(r==null)s=H.d7(this.a)
else s=typeof r!=="object"?J.kW(r):H.d7(r)
return(s^H.d7(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.y(this.d)+"' of "+("Instance of '"+H.d8(s)+"'")}}
H.f6.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.X.prototype={
gl:function(a){return this.a},
gbz:function(a){return this.a===0},
ga2:function(a){return new H.cQ(this,H.W(this).K("cQ<1>"))},
giw:function(a){var s=this,r=H.W(s)
return H.o4(s.ga2(s),new H.iw(s),r.c,r.Q[1])},
cg:function(a,b){var s=this.b
if(s==null)return!1
return this.eX(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bs(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bs(p,b)
q=r==null?n:r.b
return q}else return o.hV(b)},
hV:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.d4(p,q.dU(a))
r=q.dV(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cX(s==null?q.b=q.c1():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cX(r==null?q.c=q.c1():r,b,c)}else q.hW(b,c)},
hW:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.c1()
s=p.dU(a)
r=p.d4(o,s)
if(r==null)p.c6(o,s,[p.c2(a,b)])
else{q=p.dV(r,a)
if(q>=0)r[q].b=b
else r.push(p.c2(a,b))}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aK(s))
r=r.c}},
cX:function(a,b,c){var s=this.bs(a,b)
if(s==null)this.c6(a,b,this.c2(b,c))
else s.b=c},
f7:function(){this.r=this.r+1&67108863},
c2:function(a,b){var s,r=this,q=new H.iz(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.f7()
return q},
dU:function(a){return J.kW(a)&0x3ffffff},
dV:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.K(a[r].a,b))return r
return-1},
i:function(a){return P.l7(this)},
bs:function(a,b){return a[b]},
d4:function(a,b){return a[b]},
c6:function(a,b,c){a[b]=c},
f0:function(a,b){delete a[b]},
eX:function(a,b){return this.bs(a,b)!=null},
c1:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c6(r,s,r)
this.f0(r,s)
return r}}
H.iw.prototype={
$1:function(a){var s=this.a
return H.W(s).Q[1].a(s.h(0,a))},
$S:function(){return H.W(this.a).K("2(1)")}}
H.iz.prototype={}
H.cQ.prototype={
gl:function(a){return this.a.a},
gR:function(a){var s=this.a,r=new H.eF(s,s.r)
r.c=s.e
return r}}
H.eF.prototype={
gC:function(a){return H.W(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aK(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kC.prototype={
$1:function(a){return this.a(a)},
$S:37}
H.kD.prototype={
$2:function(a,b){return this.a(a,b)},
$S:58}
H.kE.prototype={
$1:function(a){return this.a(a)},
$S:49}
H.eA.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im2:1}
H.d1.prototype={$id1:1}
H.a1.prototype={$ia1:1}
H.c2.prototype={
gl:function(a){return a.length},
$iA:1,
$iB:1}
H.bC.prototype={
h:function(a,b){H.b3(b,a,a.length)
return a[b]},
m:function(a,b,c){H.b3(b,a,a.length)
a[b]=c},
$in:1,
$ij:1,
$ip:1}
H.d2.prototype={
m:function(a,b,c){H.b3(b,a,a.length)
a[b]=c},
$in:1,
$ij:1,
$ip:1}
H.eO.prototype={
h:function(a,b){H.b3(b,a,a.length)
return a[b]}}
H.eP.prototype={
h:function(a,b){H.b3(b,a,a.length)
return a[b]}}
H.eQ.prototype={
h:function(a,b){H.b3(b,a,a.length)
return a[b]}}
H.eR.prototype={
h:function(a,b){H.b3(b,a,a.length)
return a[b]}}
H.eS.prototype={
h:function(a,b){H.b3(b,a,a.length)
return a[b]}}
H.d3.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b3(b,a,a.length)
return a[b]}}
H.bD.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b3(b,a,a.length)
return a[b]},
$ibD:1,
$ica:1}
H.dJ.prototype={}
H.dK.prototype={}
H.dL.prototype={}
H.dM.prototype={}
H.aB.prototype={
K:function(a){return H.hB(v.typeUniverse,this,a)},
b8:function(a){return H.oX(v.typeUniverse,this,a)}}
H.h_.prototype={}
H.fW.prototype={
i:function(a){return this.a}}
H.dV.prototype={}
P.jP.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:48}
P.jO.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:46}
P.jQ.prototype={
$0:function(){this.a.$0()},
$S:13}
P.jR.prototype={
$0:function(){this.a.$0()},
$S:13}
P.dU.prototype={
eK:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cp(new P.k7(this,b),0),a)
else throw H.c(P.C("`setTimeout()` not found."))},
eL:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cp(new P.k6(this,a,Date.now(),b),0),a)
else throw H.c(P.C("Periodic timer."))},
$ijl:1}
P.k7.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.k6.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.ex(s,o)}q.c=p
r.d.$1(q)},
$S:13}
P.cl.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.y(this.a)+")"}}
P.bK.prototype={
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
if(r instanceof P.cl){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aF(s)
if(o instanceof P.bK){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dR.prototype={
gR:function(a){return new P.bK(this.a())}}
P.fJ.prototype={}
P.c8.prototype={}
P.ff.prototype={}
P.ke.prototype={}
P.ks.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.jW.prototype={
ip:function(a){var s,r,q,p=null
try{if(C.f===$.aM){a.$0()
return}P.pT(p,p,this,a)}catch(q){s=H.an(q)
r=H.lx(q)
P.mP(p,p,this,s,r)}},
iq:function(a,b){var s,r,q,p=null
try{if(C.f===$.aM){a.$1(b)
return}P.pU(p,p,this,a,b)}catch(q){s=H.an(q)
r=H.lx(q)
P.mP(p,p,this,s,r)}},
ir:function(a,b){return this.iq(a,b,t.A)},
hw:function(a){return new P.jX(this,a)},
dt:function(a,b){return new P.jY(this,a,b)}}
P.jX.prototype={
$0:function(){return this.a.ip(this.b)},
$S:2}
P.jY.prototype={
$1:function(a){return this.a.ir(this.b,a)},
$S:function(){return this.c.K("~(0)")}}
P.dF.prototype={
gR:function(a){var s=new P.dG(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
E:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eW(b)
return r}},
eW:function(a){var s=this.d
if(s==null)return!1
return this.bT(s[this.bP(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cZ(s==null?q.b=P.lf():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cZ(r==null?q.c=P.lf():r,b)}else return q.eN(0,b)},
eN:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lf()
s=q.bP(b)
r=p[s]
if(r==null)p[s]=[q.bO(b)]
else{if(q.bT(r,b)>=0)return!1
r.push(q.bO(b))}return!0},
N:function(a,b){if((b&1073741823)===b)return this.h1(this.c,b)
else return this.h0(0,b)},
h0:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bP(b)
r=n[s]
q=o.bT(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.di(p)
return!0},
cZ:function(a,b){if(a[b]!=null)return!1
a[b]=this.bO(b)
return!0},
h1:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.di(s)
delete a[b]
return!0},
d_:function(){this.r=this.r+1&1073741823},
bO:function(a){var s,r=this,q=new P.jV(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.d_()
return q},
di:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.d_()},
bP:function(a){return J.kW(a)&1073741823},
bT:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.K(a[r].a,b))return r
return-1}}
P.jV.prototype={}
P.dG.prototype={
gC:function(a){return H.W(this).c.a(this.d)},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aK(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cL.prototype={}
P.iA.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:10}
P.cS.prototype={$in:1,$ij:1,$ip:1}
P.k.prototype={
gR:function(a){return new H.bg(a,this.gl(a))},
J:function(a,b){return this.h(a,b)},
F:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.aK(a))}},
gbz:function(a){return this.gl(a)===0},
it:function(a,b){var s,r,q,p,o=this
if(o.gbz(a)){s=J.l2(0,H.b5(a).K("k.E"))
return s}r=o.h(a,0)
q=P.cU(o.gl(a),r,!0,H.b5(a).K("k.E"))
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
is:function(a){return this.it(a,!0)},
hN:function(a,b,c,d){var s
H.b5(a).K("k.E").a(d)
P.bi(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.l1(a,"[","]")}}
P.cW.prototype={}
P.iE.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.y(a)
r.a=s+": "
r.a+=H.y(b)},
$S:45}
P.M.prototype={
F:function(a,b){var s,r,q
for(s=J.aF(this.ga2(a)),r=H.b5(a).K("M.V");s.u();){q=s.gC(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.aN(this.ga2(a))},
i:function(a){return P.l7(a)},
$iI:1}
P.hC.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify unmodifiable map"))}}
P.cX.prototype={
h:function(a,b){return J.lF(this.a,b)},
m:function(a,b,c){J.kV(this.a,b,c)},
F:function(a,b){J.eb(this.a,b)},
gl:function(a){return J.aN(this.a)},
i:function(a){return J.ct(this.a)},
$iI:1}
P.ce.prototype={}
P.dc.prototype={
ag:function(a,b){var s
for(s=J.aF(b);s.u();)this.n(0,s.gC(s))},
i:function(a){return P.l1(this,"{","}")},
J:function(a,b){var s,r,q,p,o="index"
H.q5(b,o,t.S)
P.m1(b,o)
for(s=P.oH(this,this.r),r=H.W(s).c,q=0;s.u();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.P(b,this,o,null,q))}}
P.dN.prototype={$in:1,$ij:1}
P.dH.prototype={}
P.dY.prototype={}
P.e_.prototype={}
P.jE.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.an(r)}return null},
$S:17}
P.jD.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.an(r)}return null},
$S:17}
P.hX.prototype={
i0:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bi(a3,a4,a2.length)
s=$.nt()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.D(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.kB(C.a.D(a2,k))
g=H.kB(C.a.D(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.d(s,f)
e=s[f]
if(e>=0){f=C.a.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a0("")
d=o}else d=o
c=d.a+=C.a.t(a2,p,q)
d.a=c+H.aA(j)
p=k
continue}}throw H.c(P.a8("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.t(a2,p,a4)
d=r.length
if(n>=0)P.lI(a2,m,a4,n,l,d)
else{b=C.c.bp(d-1,4)+1
if(b===1)throw H.c(P.a8(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.b3(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.lI(a2,m,a4,n,l,a)
else{b=C.c.bp(a,4)
if(b===1)throw H.c(P.a8(a0,a2,a4))
if(b>1)a2=C.a.b3(a2,a4,a4,b===2?"==":"=")}return a2}}
P.hY.prototype={}
P.ei.prototype={}
P.el.prototype={}
P.ie.prototype={}
P.it.prototype={
i:function(a){return this.a}}
P.is.prototype={
eY:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
P.jB.prototype={
ghM:function(){return C.P}}
P.jF.prototype={
ci:function(a){var s,r,q,p=P.bi(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.kc(r)
if(q.f2(a,0,p)!==p){C.a.V(a,p-1)
q.cb()}return new Uint8Array(r.subarray(0,H.pf(0,q.b,s)))}}
P.kc.prototype={
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
return!0}else{n.cb()
return!1}},
f2:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hl(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.cb()}else if(p<=2047){o=l.b
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
P.jC.prototype={
ci:function(a){var s=this.a,r=P.ow(s,a,0,null)
if(r!=null)return r
return new P.kb(s).hB(a,0,null,!0)}}
P.kb.prototype={
hB:function(a,b,c,d){var s,r,q,p,o=this,n=P.bi(b,c,J.aN(a))
if(b===n)return""
s=P.pb(a,b,n)
r=o.bQ(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.pc(q)
o.b=0
throw H.c(P.a8(p,a,b+o.c))}return r},
bQ:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a3(b+c,2)
r=q.bQ(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bQ(a,s,c,d)}return q.hG(a,b,c,d)},
hG:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a0(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.D("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.D(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aA(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aA(j)
break
case 65:g.a+=H.aA(j);--f
break
default:p=g.a+=H.aA(j)
g.a=p+H.aA(j)
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
g.a+=H.aA(a[l])}else g.a+=P.fh(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aA(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.Z.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.Z&&this.a===b.a&&!0},
ai:function(a,b){return C.c.ai(this.a,b.a)},
gG:function(a){var s=this.a
return(s^C.c.aX(s,30))&1073741823},
i:function(a){var s=this,r=P.nO(H.of(s)),q=P.eo(H.od(s)),p=P.eo(H.o9(s)),o=P.eo(H.oa(s)),n=P.eo(H.oc(s)),m=P.eo(H.oe(s)),l=P.nP(H.ob(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.by.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.by&&this.a===b.a},
gG:function(a){return C.c.gG(this.a)},
ai:function(a,b){return C.c.ai(this.a,b.a)},
i:function(a){var s,r,q,p=new P.ib(),o=this.a
if(o<0)return"-"+new P.by(0-o).i(0)
s=p.$1(C.c.a3(o,6e7)%60)
r=p.$1(C.c.a3(o,1e6)%60)
q=new P.ia().$1(o%1e6)
return""+C.c.a3(o,36e8)+":"+s+":"+r+"."+q}}
P.ia.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:30}
P.ib.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:30}
P.L.prototype={}
P.ee.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.ii(s)
return"Assertion failed"}}
P.fs.prototype={}
P.eT.prototype={
i:function(a){return"Throw of null."}}
P.aG.prototype={
gbS:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbR:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbS()+o+m
if(!q.a)return l
s=q.gbR()
r=P.ii(q.b)
return l+s+": "+r}}
P.d9.prototype={
gbS:function(){return"RangeError"},
gbR:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.y(q):""
else if(q==null)s=": Not greater than or equal to "+H.y(r)
else if(q>r)s=": Not in inclusive range "+H.y(r)+".."+H.y(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.y(r)
return s}}
P.ew.prototype={
gbS:function(){return"RangeError"},
gbR:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.fC.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fz.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.c7.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ej.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ii(s)+"."}}
P.eW.prototype={
i:function(a){return"Out of Memory"},
$iL:1}
P.dg.prototype={
i:function(a){return"Stack Overflow"},
$iL:1}
P.em.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fX.prototype={
i:function(a){return"Exception: "+this.a}}
P.ip.prototype={
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
for(o=e;o<m;++o){n=C.a.V(d,o)
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
return f+j+h+i+"\n"+C.a.w(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.y(e)+")"):f}}
P.j.prototype={
bI:function(a,b){return new H.b2(this,b,H.W(this).K("b2<j.E>"))},
gl:function(a){var s,r=this.gR(this)
for(s=0;r.u();)++s
return s},
gaO:function(a){var s,r=this.gR(this)
if(!r.u())throw H.c(H.iu())
s=r.gC(r)
if(r.u())throw H.c(H.nW())
return s},
J:function(a,b){var s,r,q
P.m1(b,"index")
for(s=this.gR(this),r=0;s.u();){q=s.gC(s)
if(b===r)return q;++r}throw H.c(P.P(b,this,"index",null,r))},
i:function(a){return P.nV(this,"(",")")}}
P.ex.prototype={}
P.aj.prototype={
gG:function(a){return P.Q.prototype.gG.call(C.U,this)},
i:function(a){return"null"}}
P.Q.prototype={constructor:P.Q,$iQ:1,
q:function(a,b){return this===b},
gG:function(a){return H.d7(this)},
i:function(a){return"Instance of '"+H.d8(this)+"'"},
toString:function(){return this.i(this)}}
P.a0.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jz.prototype={
$2:function(a,b){var s,r,q,p=C.a.dT(b,"=")
if(p===-1){if(b!=="")J.kV(a,P.lo(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.aa(b,p+1)
q=this.a
J.kV(a,P.lo(s,0,s.length,q,!0),P.lo(r,0,r.length,q,!0))}return a},
$S:44}
P.jw.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.jx.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.jy.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kF(C.a.t(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:41}
P.bL.prototype={
gca:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?""+o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.y(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.h(H.l6("_text"))}return o},
gG:function(a){var s=this,r=s.z
if(r==null){r=C.a.gG(s.gca())
if(s.z==null)s.z=r
else r=H.h(H.l6("hashCode"))}return r},
gcF:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.ce(P.mg(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.h(H.l6("queryParameters"))}return r},
gel:function(){return this.b},
gcv:function(a){var s=this.c
if(s==null)return""
if(C.a.a1(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbC:function(a){var s=this.d
return s==null?P.mD(this.a):s},
gcE:function(a){var s=this.f
return s==null?"":s},
gdO:function(){var s=this.r
return s==null?"":s},
ee:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a1(s,"/"))s="/"+s
q=s
p=P.lm(null,0,0,b)
return new P.bL(n,l,j,k,q,p,o.r)},
gdP:function(){return this.c!=null},
gdS:function(){return this.f!=null},
gdQ:function(){return this.r!=null},
i:function(a){return this.gca()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbJ())if(q.c!=null===b.gdP())if(q.b===b.gel())if(q.gcv(q)===b.gcv(b))if(q.gbC(q)===b.gbC(b))if(q.e===b.ge9(b)){s=q.f
r=s==null
if(!r===b.gdS()){if(r)s=""
if(s===b.gcE(b)){s=q.r
r=s==null
if(!r===b.gdQ()){if(r)s=""
s=s===b.gdO()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifD:1,
gbJ:function(){return this.a},
ge9:function(a){return this.e}}
P.k9.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.ka(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.ka(C.h,b,C.e,!0)}},
$S:40}
P.k8.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aF(b),r=this.a;s.u();)r.$2(a,s.gC(s))},
$S:5}
P.jv.prototype={
gek:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.by(s,"?",m)
q=s.length
if(r>=0){p=P.dZ(s,r+1,q,C.j,!1)
q=r}else p=n
m=o.c=new P.fP("data","",n,n,P.dZ(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kl.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.a_.hN(s,0,96,b)
return s},
$S:39}
P.km.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.D(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.kn.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.D(b,0),r=C.a.D(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.hh.prototype={
gdP:function(){return this.c>0},
gdR:function(){return this.c>0&&this.d+1<this.e},
gdS:function(){return this.f<this.r},
gdQ:function(){return this.r<this.a.length},
gbJ:function(){var s=this.x
return s==null?this.x=this.eV():s},
eV:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a1(r.a,"http"))return"http"
if(q===5&&C.a.a1(r.a,"https"))return"https"
if(s&&C.a.a1(r.a,"file"))return"file"
if(q===7&&C.a.a1(r.a,"package"))return"package"
return C.a.t(r.a,0,q)},
gel:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcv:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbC:function(a){var s,r=this
if(r.gdR())return P.kF(C.a.t(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a1(r.a,"http"))return 80
if(s===5&&C.a.a1(r.a,"https"))return 443
return 0},
ge9:function(a){return C.a.t(this.a,this.e,this.f)},
gcE:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gdO:function(){var s=this.r,r=this.a
return s<r.length?C.a.aa(r,s+1):""},
gcF:function(){var s=this
if(s.f>=s.r)return C.Z
return new P.ce(P.mg(s.gcE(s)),t.dw)},
ee:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbJ(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gdR()?n.gbC(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a1(r,"/"))r="/"+r
p=P.lm(m,0,0,b)
q=n.r
o=q<j.length?C.a.aa(j,q+1):m
return new P.bL(l,i,s,h,r,p,o)},
gG:function(a){var s=this.y
return s==null?this.y=C.a.gG(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifD:1}
P.fP.prototype={}
W.v.prototype={}
W.hS.prototype={
gl:function(a){return a.length}}
W.ec.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ed.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bQ.prototype={$ibQ:1}
W.bu.prototype={$ibu:1}
W.bv.prototype={$ibv:1}
W.bw.prototype={
eo:function(a,b,c){var s=a.getContext(b,P.mU(c))
return s},
$ibw:1}
W.aH.prototype={
gl:function(a){return a.length}}
W.i3.prototype={
gl:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.cB.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.i4.prototype={}
W.au.prototype={}
W.aR.prototype={}
W.i5.prototype={
gl:function(a){return a.length}}
W.i6.prototype={
gl:function(a){return a.length}}
W.i7.prototype={
gl:function(a){return a.length}}
W.ba.prototype={$iba:1}
W.i8.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cC.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.cD.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.y(r)+", "
s=a.top
s.toString
return r+H.y(s)+") "+H.y(this.gaN(a))+" x "+H.y(this.gaJ(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.b4(b)
if(s===r.gbB(b)){s=a.top
s.toString
s=s===r.gbF(b)&&this.gaN(a)===r.gaN(b)&&this.gaJ(a)===r.gaJ(b)}else s=!1}else s=!1
return s},
gG:function(a){var s,r=a.left
r.toString
r=C.d.gG(r)
s=a.top
s.toString
return W.mu(r,C.d.gG(s),C.d.gG(this.gaN(a)),C.d.gG(this.gaJ(a)))},
gdu:function(a){var s=a.bottom
s.toString
return s},
gd5:function(a){return a.height},
gaJ:function(a){var s=this.gd5(a)
s.toString
return s},
gbB:function(a){var s=a.left
s.toString
return s},
gbE:function(a){var s=a.right
s.toString
return s},
gbF:function(a){var s=a.top
s.toString
return s},
gdk:function(a){return a.width},
gaN:function(a){var s=this.gdk(a)
s.toString
return s},
$iab:1}
W.ep.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.i9.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.fM.prototype={
gbz:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gR:function(a){var s=this.is(this)
return new J.ag(s,s.length)}}
W.F.prototype={
gah:function(a){return new W.fU(a)},
gbv:function(a){var s=a.children
s.toString
return new W.fM(a,s)},
gdv:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.ab(p,s,r,q,t.I)},
i:function(a){var s=a.localName
s.toString
return s},
aj:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lP
if(s==null){s=H.b([],t.Q)
r=new W.d5(s)
s.push(W.mt(null))
s.push(W.my())
$.lP=r
d=r}else d=s
s=$.lO
if(s==null){s=new W.hD(d)
$.lO=s
c=s}else{s.a=d
c=s}}if($.bb==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.bb=r
r=r.createRange()
r.toString
$.kY=r
r=$.bb.createElement("base")
t.cR.a(r)
s=s.baseURI
s.toString
r.href=s
$.bb.head.appendChild(r).toString}s=$.bb
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.bb
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.bb.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.b.E(C.X,s)}else s=!1
if(s){$.kY.selectNodeContents(q)
s=$.kY
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.bb.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.bb.body)J.lG(q)
c.cM(p)
document.adoptNode(p).toString
return p},
hE:function(a,b,c){return this.aj(a,b,c,null)},
ep:function(a,b){var s
a.textContent=null
s=a.appendChild(this.aj(a,b,null,null))
s.toString},
geh:function(a){var s=a.tagName
s.toString
return s},
$iF:1}
W.ic.prototype={
$1:function(a){return t.h.b(a)},
$S:24}
W.m.prototype={$im:1}
W.e.prototype={
hn:function(a,b,c,d){if(c!=null)this.eP(a,b,c,!1)},
eP:function(a,b,c,d){return a.addEventListener(b,H.cp(c,1),!1)},
$ie:1}
W.ah.prototype={$iah:1}
W.bV.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1,
$ibV:1}
W.er.prototype={
gl:function(a){return a.length}}
W.et.prototype={
gl:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.ir.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.bA.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.cK.prototype={$icK:1}
W.bY.prototype={$ibY:1}
W.bB.prototype={$ibB:1}
W.iC.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.iU.prototype={
gl:function(a){return a.length}}
W.c_.prototype={$ic_:1}
W.eL.prototype={
h:function(a,b){return P.bp(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bp(s.value[1]))}},
ga2:function(a){var s=H.b([],t.s)
this.F(a,new W.iV(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
W.iV.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eM.prototype={
h:function(a,b){return P.bp(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bp(s.value[1]))}},
ga2:function(a){var s=H.b([],t.s)
this.F(a,new W.iW(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
W.iW.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.ay.prototype={$iay:1}
W.eN.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.ap.prototype={$iap:1}
W.a6.prototype={
gaO:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.la("No elements"))
if(r>1)throw H.c(P.la("More than one element"))
s=s.firstChild
s.toString
return s},
ag:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gR:function(a){var s=this.a.childNodes
return new W.cH(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.t.prototype={
ii:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
im:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nx(s,b,a)}catch(q){H.an(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.es(a):s},
h3:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$it:1}
W.d4.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.az.prototype={
gl:function(a){return a.length},
$iaz:1}
W.f_.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.f5.prototype={
h:function(a,b){return P.bp(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bp(s.value[1]))}},
ga2:function(a){var s=H.b([],t.s)
this.F(a,new W.j8(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
W.j8.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.f7.prototype={
gl:function(a){return a.length}}
W.aq.prototype={$iaq:1}
W.f9.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.aC.prototype={$iaC:1}
W.fa.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.aD.prototype={
gl:function(a){return a.length},
$iaD:1}
W.fe.prototype={
h:function(a,b){return a.getItem(H.ki(b))},
m:function(a,b,c){a.setItem(b,c)},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga2:function(a){var s=H.b([],t.s)
this.F(a,new W.jg(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iI:1}
W.jg.prototype={
$2:function(a,b){return this.a.push(a)},
$S:50}
W.al.prototype={$ial:1}
W.bk.prototype={$ibk:1}
W.dh.prototype={
aj:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bL(a,b,c,d)
s=W.nR("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a6(r).ag(0,new W.a6(s))
return r}}
W.fi.prototype={
aj:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bL(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a6(C.C.aj(r,b,c,d))
r=new W.a6(r.gaO(r))
new W.a6(s).ag(0,new W.a6(r.gaO(r)))
return s}}
W.fj.prototype={
aj:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bL(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a6(C.C.aj(r,b,c,d))
new W.a6(s).ag(0,new W.a6(r.gaO(r)))
return s}}
W.c9.prototype={$ic9:1}
W.ar.prototype={$iar:1}
W.af.prototype={$iaf:1}
W.fl.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.fm.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.jk.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.as.prototype={$ias:1}
W.bG.prototype={$ibG:1}
W.fq.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.jp.prototype={
gl:function(a){return a.length}}
W.b1.prototype={}
W.jA.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fG.prototype={
gl:function(a){return a.length}}
W.bl.prototype={
ghI:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.C("deltaY is not supported"))},
ghH:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.C("deltaX is not supported"))},
$ibl:1}
W.ci.prototype={
h4:function(a,b){var s=a.requestAnimationFrame(H.cp(b,1))
s.toString
return s},
f1:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cj.prototype={$icj:1}
W.fN.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.dC.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.y(r)+", "
s=a.top
s.toString
s=r+H.y(s)+") "
r=a.width
r.toString
r=s+H.y(r)+" x "
s=a.height
s.toString
return r+H.y(s)},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.b4(b)
if(s===r.gbB(b)){s=a.top
s.toString
if(s===r.gbF(b)){s=a.width
s.toString
if(s===r.gaN(b)){s=a.height
s.toString
r=s===r.gaJ(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gG:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gG(p)
s=a.top
s.toString
s=C.d.gG(s)
r=a.width
r.toString
r=C.d.gG(r)
q=a.height
q.toString
return W.mu(p,s,r,C.d.gG(q))},
gd5:function(a){return a.height},
gaJ:function(a){var s=a.height
s.toString
return s},
gdk:function(a){return a.width},
gaN:function(a){var s=a.width
s.toString
return s}}
W.h0.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.dI.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.hk.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iA:1,
$in:1,
$iB:1,
$ij:1,
$ip:1}
W.fK.prototype={
F:function(a,b){var s,r,q,p,o
for(s=this.ga2(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,H.ki(q.getAttribute(o)))}},
ga2:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.b([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.d(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.fU.prototype={
h:function(a,b){return this.a.getAttribute(H.ki(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga2(this).length}}
W.l_.prototype={}
W.dD.prototype={
hk:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.ny(s,this.c,r,!1)}}}
W.jS.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.le.prototype={}
W.ck.prototype={
eB:function(a){var s
if($.dE.gbz($.dE)){for(s=0;s<262;++s)$.dE.m(0,C.W[s],W.qd())
for(s=0;s<12;++s)$.dE.m(0,C.n[s],W.qe())}},
aY:function(a){return $.nu().E(0,W.cF(a))},
ax:function(a,b,c){var s=$.dE.h(0,W.cF(a)+"::"+b)
if(s==null)s=$.dE.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaL:1}
W.O.prototype={
gR:function(a){return new W.cH(a,this.gl(a))}}
W.d5.prototype={
aY:function(a){return C.b.dr(this.a,new W.iZ(a))},
ax:function(a,b,c){return C.b.dr(this.a,new W.iY(a,b,c))},
$iaL:1}
W.iZ.prototype={
$1:function(a){return a.aY(this.a)},
$S:25}
W.iY.prototype={
$1:function(a){return a.ax(this.a,this.b,this.c)},
$S:25}
W.dO.prototype={
eI:function(a,b,c,d){var s,r,q
this.a.ag(0,c)
s=b.bI(0,new W.k_())
r=b.bI(0,new W.k0())
this.b.ag(0,s)
q=this.c
q.ag(0,C.v)
q.ag(0,r)},
aY:function(a){return this.a.E(0,W.cF(a))},
ax:function(a,b,c){var s=this,r=W.cF(a),q=s.c
if(q.E(0,r+"::"+b))return s.d.hr(c)
else if(q.E(0,"*::"+b))return s.d.hr(c)
else{q=s.b
if(q.E(0,r+"::"+b))return!0
else if(q.E(0,"*::"+b))return!0
else if(q.E(0,r+"::*"))return!0
else if(q.E(0,"*::*"))return!0}return!1},
$iaL:1}
W.k_.prototype={
$1:function(a){return!C.b.E(C.n,a)},
$S:26}
W.k0.prototype={
$1:function(a){return C.b.E(C.n,a)},
$S:26}
W.ht.prototype={
ax:function(a,b,c){if(this.ew(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.E(0,b)
return!1}}
W.k5.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:35}
W.hs.prototype={
aY:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cF(a)==="foreignObject")return!1
if(s)return!0
return!1},
ax:function(a,b,c){if(b==="is"||C.a.a1(b,"on"))return!1
return this.aY(a)},
$iaL:1}
W.cH.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lF(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gC:function(a){return H.W(this).c.a(this.d)}}
W.jZ.prototype={}
W.hD.prototype={
cM:function(a){var s,r=new W.kd(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
bc:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.lG(a)
else b.removeChild(a).toString},
h7:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.nA(a)
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
o=p}l=o}catch(n){H.an(n)}r="element unprintable"
try{r=J.ct(a)}catch(n){H.an(n)}try{q=W.cF(a)
this.h6(a,b,l,r,q,k,j)}catch(n){if(H.an(n) instanceof P.aG)throw n
else{this.bc(a,b)
p=window
p.toString
p="Removing corrupted element "+H.y(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
h6:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.bc(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.aY(a)){m.bc(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.y(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.ax(a,"is",g)){m.bc(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.ga2(f)
q=H.b(s.slice(0),H.kg(s))
for(p=f.ga2(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.nD(o)
H.ki(o)
if(!r.ax(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.y(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.cM(s)}}}
W.kd.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.h7(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.bc(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.la("Corrupt HTML")
throw H.c(n)}}catch(p){H.an(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:34}
W.fO.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h5.prototype={}
W.h6.prototype={}
W.h7.prototype={}
W.h8.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.hd.prototype={}
W.he.prototype={}
W.hg.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.hi.prototype={}
W.hj.prototype={}
W.ho.prototype={}
W.hu.prototype={}
W.hv.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.hw.prototype={}
W.hx.prototype={}
W.hE.prototype={}
W.hF.prototype={}
W.hG.prototype={}
W.hH.prototype={}
W.hI.prototype={}
W.hJ.prototype={}
W.hK.prototype={}
W.hL.prototype={}
W.hM.prototype={}
W.hN.prototype={}
P.k1.prototype={
ct:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bH:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.ko(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.Z)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.ju("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.gb.b(a))return a
if(t.cH.b(a)||t.dE.b(a)||t.bK.b(a))return a
if(t.f.b(a)){s=n.ct(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.eb(a,new P.k3(m,n))
return m.a}if(t.r.b(a)){s=n.ct(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.hD(a,s)}if(t.eH.b(a)){s=n.ct(a)
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
n.hT(a,new P.k4(m,n))
return m.b}throw H.c(P.ju("structured clone of other type"))},
hD:function(a,b){var s,r,q=J.bM(a),p=q.gl(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bH(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.k3.prototype={
$2:function(a,b){this.a.a[a]=this.b.bH(b)},
$S:10}
P.k4.prototype={
$2:function(a,b){this.a.b[a]=this.b.bH(b)},
$S:33}
P.kj.prototype={
$1:function(a){this.a.push(P.mL(a))},
$S:31}
P.kt.prototype={
$2:function(a,b){this.a[a]=P.mL(b)},
$S:10}
P.k2.prototype={
hT:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.es.prototype={
gba:function(){var s=this.b,r=H.W(s)
return new H.aU(new H.b2(s,new P.im(),r.K("b2<k.E>")),new P.io(),r.K("aU<k.E,F>"))},
F:function(a,b){C.b.F(P.iB(this.gba(),!1,t.h),b)},
m:function(a,b,c){var s=this.gba()
J.nC(s.b.$1(J.hR(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.aN(this.gba().a)},
h:function(a,b){var s=this.gba()
return s.b.$1(J.hR(s.a,b))},
gR:function(a){var s=P.iB(this.gba(),!1,t.h)
return new J.ag(s,s.length)}}
P.im.prototype={
$1:function(a){return t.h.b(a)},
$S:24}
P.io.prototype={
$1:function(a){return t.h.a(a)},
$S:60}
P.hf.prototype={
gbE:function(a){return this.$ti.c.a(this.a+this.c)},
gdu:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.b4(b)
if(s===r.gbB(b)){q=o.b
if(q===r.gbF(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gbE(b)&&p.a(q+o.d)===r.gdu(b)}else s=!1}else s=!1}else s=!1
return s},
gG:function(a){var s=this,r=s.a,q=C.c.gG(r),p=s.b,o=C.c.gG(p),n=s.$ti.c
r=C.c.gG(n.a(r+s.c))
p=C.c.gG(n.a(p+s.d))
return H.or(H.jh(H.jh(H.jh(H.jh(0,q),o),r),p))}}
P.ab.prototype={
gbB:function(a){return this.a},
gbF:function(a){return this.b},
gaN:function(a){return this.c},
gaJ:function(a){return this.d}}
P.aT.prototype={$iaT:1}
P.eD.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.aY.prototype={$iaY:1}
P.eU.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.j1.prototype={
gl:function(a){return a.length}}
P.c6.prototype={$ic6:1}
P.fg.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.o.prototype={
gbv:function(a){return new P.es(a,new W.a6(a))},
aj:function(a,b,c,d){var s,r,q,p,o=H.b([],t.Q)
o.push(W.mt(null))
o.push(W.my())
o.push(new W.hs())
c=new W.hD(new W.d5(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.p.hE(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a6(q)
p=r.gaO(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$io:1}
P.b_.prototype={$ib_:1}
P.fr.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.h3.prototype={}
P.h4.prototype={}
P.hb.prototype={}
P.hc.prototype={}
P.hp.prototype={}
P.hq.prototype={}
P.hy.prototype={}
P.hz.prototype={}
P.hV.prototype={
gl:function(a){return a.length}}
P.eg.prototype={
h:function(a,b){return P.bp(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bp(s.value[1]))}},
ga2:function(a){var s=H.b([],t.s)
this.F(a,new P.hW(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iI:1}
P.hW.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.eh.prototype={
gl:function(a){return a.length}}
P.b8.prototype={}
P.eV.prototype={
gl:function(a){return a.length}}
P.fL.prototype={}
P.da.prototype={$ida:1}
P.fb.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=P.bp(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$in:1,
$ij:1,
$ip:1}
P.hl.prototype={}
P.hm.prototype={}
K.aO.prototype={
aK:function(a,b){return!0},
i:function(a){return"all"},
$iaV:1}
K.cJ.prototype={
aK:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aK(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$iaV:1}
K.ae.prototype={
aK:function(a,b){return!this.er(0,b)},
i:function(a){return"!["+this.bM(0)+"]"}}
K.f2.prototype={
aK:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.aA(this.a),r=H.aA(this.b)
return s+".."+r},
$iaV:1}
K.u.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.X(t.fX)
for(r=new H.bg(a,a.gl(a)),q=H.W(r).c;r.u();)s.m(0,q.a(r.d),!0)
p=P.iB(s.ga2(s),!0,t.S)
C.b.eq(p)
this.a=p},
aK:function(a,b){return C.b.E(this.a,b)},
i:function(a){return P.fh(this.a,0,null)},
$iaV:1}
L.fc.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dk(this.a.k(0,b),H.b([],t.z))
s.push(p)
return p},
hO:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aK(0,a))return p}return null},
i:function(a){return this.b},
dh:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.E(0,s==null?null:s.b))l+=" (consume)"
s=m.d
if(s==null)s=null
else{s=s.c
s=s.ga2(s)}s=J.aF(s==null?H.b([],t.s):s)
for(;s.u();){r=s.gC(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.E(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.q)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bM(0))}return l.charCodeAt(0)==0?l:l}}
L.fo.prototype={
i:function(a){var s=H.lB(this.b,"\n","\\n"),r=H.lB(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fp.prototype={
aM:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.q)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.jm.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.fc(this,b,H.b([],t.ab))
s.m(0,b,r)}return r},
P:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fp(a,P.U(s,s))
r.m(0,a,q)}return q},
cK:function(a){return this.iv(a)},
iv:function(a){var s=this
return P.pw(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$cK(a3,a4){if(a3===1){o=a4
q=p}while(true)switch(q){case 0:c=s.d
b=t.t
a0=H.b([],b)
a1=H.b([],b)
a2=H.b([],b)
n=H.W(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a2.length!==0)h=C.b.cG(a2,0)
else{if(!r.u()){q=3
break}h=n.a(r.d)}a1.push(h);++k
g=c==null
f=g?null:c.hO(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.fh(a1,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.y(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a1.fixed$length)H.h(P.C("removeRange"))
P.bi(0,i,a1.length)
a1.splice(0,i-0)
C.b.ag(a2,a1)
a1=H.b([],b)
a0=H.b([],b)
c=s.d
q=!m.E(0,l.a)?7:8
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
if(g!=null){e=P.fh(a0,0,null)
g=c.d
if(g==null)l=null
else{d=g.c.h(0,e)
g=new L.fo(d==null?g.b:d,e,k)
l=g}i=a1.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.E(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.oF()
case 1:return P.oG(o)}}},t.bJ)},
i:function(a){var s,r=new P.a0(""),q=this.d
if(q!=null)r.a=""+(q.dh()+"\n")
for(q=this.a,q=q.giw(q),q=q.gR(q);q.u();){s=q.gC(q)
if(s!=this.d)r.a+=H.y(s==null?null:s.dh())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.dk.prototype={
i:function(a){return this.b.b+": "+this.bM(0)}}
O.ao.prototype={
cN:function(a,b,c){this.b=b
this.c=a},
bq:function(a,b){return this.cN(a,null,b)},
fO:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
fa:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gR:function(a){var s=this.a
return new J.ag(s,s.length)},
J:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.W(q).K("w<ao.T>")
if(q.fO(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.fa(r,H.b([b],p))}},
$ij:1}
O.d0.prototype={
gl:function(a){return this.a.length},
gv:function(){var s=this.b
return s==null?this.b=D.N():s},
aR:function(){var s=this.b
return s==null?null:s.H(null)},
ga6:function(a){var s=this.a
if(s.length>0)return C.b.gaA(s)
else return V.ai()},
ec:function(a){this.a.push(a)
this.aR()},
cD:function(){var s=this.a
if(s.length>0){s.pop()
this.aR()}}}
E.hZ.prototype={}
E.bz.prototype={
cY:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.ag(s,s.length),r=H.W(s).c;s.u();){q=r.a(s.d)
if(q.f==null)q.cY()}},
sae:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().N(0,s.ge4())
if(b!=null)b.gv().n(0,s.ge4())
s.ar(new D.E("shape",r,b))}},
sbn:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gv().N(0,s.ge6())
if(a!=null)a.gv().n(0,s.ge6())
s.cY()
s.ar(new D.E("technique",r,a))}},
saL:function(a){var s,r,q=this
if(!J.K(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gv().N(0,q.ge2())
if(a!=null)a.gv().n(0,q.ge2())
r=q.r
q.ar(new D.E("mover",s,r))}},
at:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.au(0,b,q)
if(!J.K(o,q.x)){s=q.x
q.x=o
q.ar(new D.E("matrix",s,o))}p=q.f
if(p!=null)p.at(0,b)
for(p=q.y.a,p=new J.ag(p,p.length),r=H.W(p).c;p.u();)r.a(p.d).at(0,b)},
b2:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga6(q))
else o.push(p.w(0,q.ga6(q)))
q.aR()
a.ed(r.f)
s=C.b.gaA(a.dy)
if(r.d!=null)if(s!=null)s.il(a,r)
for(p=r.y.a,p=new J.ag(p,p.length),o=H.W(p).c;p.u();)o.a(p.d).b2(a)
a.eb()
q.cD()},
ar:function(a){var s=this.z
return s==null?null:s.H(a)},
a_:function(){return this.ar(null)},
e5:function(a){this.e=null
this.ar(a)},
i7:function(){return this.e5(null)},
e7:function(a){return this.ar(a)},
i8:function(){return this.e7(null)},
e3:function(a){return this.ar(a)},
i6:function(){return this.e3(null)},
e1:function(a){return this.ar(a)},
i3:function(){return this.e1(null)},
i2:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ge0(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bU()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.a_()},
i5:function(a,b){var s,r
for(s=b.gR(b),r=this.ge0();s.u();)s.gC(s).gv().N(0,r)
this.a_()},
i:function(a){return"Unnamed entity"}}
E.bS.prototype={
i:function(a){return this.b}}
E.c3.prototype={
i:function(a){return this.b}}
E.fV.prototype={}
E.j4.prototype={
eA:function(a,b){var s=this
s.cy.gv().n(0,new E.j5(s))
s.db.gv().n(0,new E.j6(s))
s.dx.gv().n(0,new E.j7(s))},
gih:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga6(q).w(0,s.ga6(s))
q=s}return q},
ed:function(a){var s=this.dy
return s.push(a==null?C.b.gaA(s):a)},
eb:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.j5.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.j6.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.j7.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.fn.prototype={
cU:function(a){this.ef()},
cT:function(){return this.cU(null)},
ghU:function(){var s,r=this,q=Date.now(),p=C.c.a3(P.lN(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.Z(q,!1)
return s/p},
da:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.dN(r*o)
r=s.clientHeight
r.toString
p=C.d.dN(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.ma(C.m,this.gio())}},
ef:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.E.f1(s)
r=W.mR(new E.jj(this),t.H)
r.toString
C.E.h4(s,r)}},
ik:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.da()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.Z(p,!1)
q.y=P.lN(p-q.r.a).a*0.000001
p=q.cy
C.b.sl(p.a,0)
p.aR()
p=q.db
C.b.sl(p.a,0)
p.aR()
p=q.dx
C.b.sl(p.a,0)
p.aR()
p=q.dy
C.b.sl(p,0)
p.push(null)
m.b2(q)}q=n.Q
if(q!=null)q.H(null)}catch(o){s=H.an(o)
r=H.lx(o)
P.lA("Error: "+H.y(s))
P.lA("Stack: "+H.y(r))
throw H.c(s)}}}
E.jj.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ik()}},
$S:32}
Z.fH.prototype={}
Z.bT.prototype={
bu:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.an(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.y(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.jN.prototype={}
Z.cw.prototype={
b0:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
bu:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].bu(a)}},
ej:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
b2:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.d8(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.q)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(l,", ")+"\nAttrs:   "+C.b.j(o,", ")}}
Z.bX.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d8(this.c)+"'")+"]"}}
Z.bJ.prototype={
gcP:function(a){var s=this.a,r=(s&$.bt().a)!==0?3:0
if((s&$.bs().a)!==0)r+=3
if((s&$.br().a)!==0)r+=3
if((s&$.bO().a)!==0)r+=2
if((s&$.bP().a)!==0)r+=3
if((s&$.e9().a)!==0)r+=3
if((s&$.ea().a)!==0)r+=4
if((s&$.cs().a)!==0)++r
return(s&$.bq().a)!==0?r+4:r},
hs:function(a){var s,r=$.bt(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bs()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.br()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bO()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.e9()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ea()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cs()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bq()
if((q&r.a)!==0)if(s===a)return r
return $.ns()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bJ))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.bt().a)!==0)s.push("Pos")
if((r&$.bs().a)!==0)s.push("Norm")
if((r&$.br().a)!==0)s.push("Binm")
if((r&$.bO().a)!==0)s.push("Txt2D")
if((r&$.bP().a)!==0)s.push("TxtCube")
if((r&$.e9().a)!==0)s.push("Clr3")
if((r&$.ea().a)!==0)s.push("Clr4")
if((r&$.cs().a)!==0)s.push("Weight")
if((r&$.bq().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.i0.prototype={}
D.bU.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
N:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.E(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.N(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.E(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.N(p,b)
s=p===!0||s}return s},
H:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.T():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.F(P.iB(p,!0,t.h2),new D.ij(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.F(r,new D.ik(s))}return!0},
an:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.H(s)}}}}
D.ij.prototype={
$1:function(a){a.$1(this.a)},
$S:29}
D.ik.prototype={
$1:function(a){a.$1(this.a)},
$S:29}
D.T.prototype={}
D.bc.prototype={}
D.bd.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.y(this.d)+" => "+H.y(this.e)}}
X.cx.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cx))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.eC.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eC))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.ix.prototype={}
X.cV.prototype={}
X.iD.prototype={
b9:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.a2(o.a+b.a,o.b+b.b)
o=q.a.gaZ()
s=$.ak
if(s==null)s=$.ak=new V.a2(0,0)
r=q.x
q.z=new P.Z(p,!1)
q.x=n
return new X.c0(a,s,r,o,n)},
cC:function(a,b){this.r=a.a
return!1},
bl:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bk:function(a,b){var s=this.d
if(s==null)return!1
s.H(this.b9(a,b))
return!0},
ic:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaZ()
r=this.x
Date.now()
q.H(new X.c1(new V.a5(a.a,a.b),s,r))
return!0},
fD:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.H(new X.cV(c,q.a.gaZ(),b))
q.y=new P.Z(s,!1)
s=$.ak
q.x=s==null?$.ak=new V.a2(0,0):s}}
X.a9.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a9))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.j(s,"+")}}
X.c0.prototype={}
X.iX.prototype={
bU:function(a,b,c){var s=this,r=new P.Z(Date.now(),!1),q=s.a.gaZ(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.c0(a,p,o,q,b)},
cC:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.H(this.bU(a,b,!0))
return!0},
bl:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.H(r.bU(a,b,!0))
return!0},
bk:function(a,b){var s=this.d
if(s==null)return!1
s.H(this.bU(a,b,!1))
return!0},
ie:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaZ()
Date.now()
r.H(new X.c1(new V.a5(a.a,a.b),s,b))
return!0},
gdA:function(){var s=this.b
return s==null?this.b=D.N():s},
gbG:function(){var s=this.c
return s==null?this.c=D.N():s},
gdZ:function(){var s=this.d
return s==null?this.d=D.N():s}}
X.c1.prototype={}
X.f1.prototype={}
X.dj.prototype={}
X.jo.prototype={
b9:function(a,b){var s,r,q,p,o=this,n=new P.Z(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.ak
if(r==null){r=new V.a2(0,0)
$.ak=r
s=r}else s=r}r=o.a.gaZ()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.dj(q,p,r,s)},
ib:function(a){var s=this.b
if(s==null)return!1
s.H(this.b9(a,!0))
return!0},
i9:function(a){var s=this.c
if(s==null)return!1
s.H(this.b9(a,!0))
return!0},
ia:function(a){var s=this.d
if(s==null)return!1
s.H(this.b9(a,!1))
return!0}}
X.fE.prototype={
gb1:function(a){var s=this.b
return s==null?this.b=new X.ix(new X.a9(!1,!1,!1),P.cR(t.S)):s},
ga7:function(){var s,r=this.c
if(r==null){r=$.ak
if(r==null){r=$.ak=new V.a2(0,0)
s=r}else s=r
r=this.c=new X.iX(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
gak:function(){var s=this.d
if(s==null){s=$.ak
if(s==null)s=$.ak=new V.a2(0,0)
s=this.d=new X.iD(this,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return s},
gb5:function(){var s,r=this.e
if(r==null){r=$.ak
if(r==null){r=$.ak=new V.a2(0,0)
s=r}else s=r
r=this.e=new X.jo(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
gaZ:function(){var s=this.a
return V.m3(0,0,C.l.gdv(s).c,C.l.gdv(s).d)},
d1:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eC(p,new X.a9(s,r,q))},
aW:function(a){var s,r,q=this.gb1(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a9(p,s,r)},
c7:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gb1(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a9(s,r===!0,q===!0)},
aG:function(a){var s,r,q,p
if(a==null){s=$.ak
return s==null?$.ak=new V.a2(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.a2(r-p,q-s)},
bb:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a5(r,s)},
c3:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.as(n)
m=o.pageY
m.toString
C.d.as(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.as(l)
l=o.pageY
l.toString
l=C.d.as(l)
k=j.top
k.toString
s.push(new V.a2(n-m,l-k))}return s},
aD:function(a){var s,r,q,p
if(a==null)return new X.cx(0,new X.a9(!1,!1,!1))
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
return new X.cx(s,new X.a9(r,q,p))},
bV:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
fv:function(a){return this.f=!0},
fi:function(a){return this.f=!1},
fo:function(a){if(this.f&&this.bV(a))a.preventDefault()},
fB:function(a){var s,r,q=this
if(!q.f)return
s=q.d1(a)
r=q.gb1(q)
r.c=s.b
r.d.n(0,s.a)},
fz:function(a){var s,r,q=this
if(!q.f)return
s=q.d1(a)
r=q.gb1(q)
r.c=s.b
r.d.N(0,s.a)},
fF:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aW(a)
if(p.x){s=p.aD(a)
r=p.bb(a)
if(p.gak().cC(s,r))a.preventDefault()
return}s=p.aD(a)
q=p.aG(a)
if(p.ga7().cC(s,q))a.preventDefault()},
fJ:function(a){var s,r,q,p=this
p.aW(a)
s=p.aD(a)
if(p.x){r=p.bb(a)
if(p.gak().bl(s,r))a.preventDefault()
return}q=p.aG(a)
if(p.ga7().bl(s,q))a.preventDefault()},
ft:function(a){var s,r,q,p=this
if(!p.bV(a)){p.aW(a)
s=p.aD(a)
if(p.x){r=p.bb(a)
if(p.gak().bl(s,r))a.preventDefault()
return}q=p.aG(a)
if(p.ga7().bl(s,q))a.preventDefault()}},
fH:function(a){var s,r,q,p=this
p.aW(a)
s=p.aD(a)
if(p.x){r=p.bb(a)
if(p.gak().bk(s,r))a.preventDefault()
return}q=p.aG(a)
if(p.ga7().bk(s,q))a.preventDefault()},
fq:function(a){var s,r,q,p=this
if(!p.bV(a)){p.aW(a)
s=p.aD(a)
if(p.x){r=p.bb(a)
if(p.gak().bk(s,r))a.preventDefault()
return}q=p.aG(a)
if(p.ga7().bk(s,q))a.preventDefault()}},
fL:function(a){var s,r,q=this
q.aW(a)
s=new V.a5(C.D.ghH(a),C.D.ghI(a)).w(0,q.Q)
if(q.x){if(q.gak().ic(s))a.preventDefault()
return}r=q.aG(a)
if(q.ga7().ie(s,r))a.preventDefault()},
fN:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aD(q.y)
r=q.aG(q.y)
q.gak().fD(s,r,p)}},
h_:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c7(a)
s=r.c3(a)
if(r.gb5().ib(s))a.preventDefault()},
fW:function(a){var s
this.c7(a)
s=this.c3(a)
if(this.gb5().i9(s))a.preventDefault()},
fY:function(a){var s
this.c7(a)
s=this.c3(a)
if(this.gb5().ia(s))a.preventDefault()}}
D.cP.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.N():s},
gdX:function(){var s=this.z
return s==null?this.z=D.N():s},
ab:function(a){var s=this.y
return s==null?null:s.H(a)},
d7:function(a){var s=this.z
return s==null?null:s.H(a)},
fC:function(){return this.d7(null)},
fQ:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.eC(a[r]))return!1
return!0},
fc:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gd6(),q=this.r,p=t.a,o=0;o<b.length;b.length===s||(0,H.q)(b),++o){n=b[o]
q.push(n)
m=n.Q
if(m==null)m=n.Q=new D.bU()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.ab(new D.bc())},
fU:function(a,b){var s,r,q,p
for(s=b.gR(b),r=this.gd6(),q=this.e;s.u();){p=s.gC(s)
C.b.N(q,p)
p.gv().N(0,r)}this.ab(new D.bd())},
eC:function(a){var s=C.b.E(this.r,a)
return s}}
D.c4.prototype={
ab:function(a){var s=this.Q
return s==null?null:s.H(a)},
eE:function(){return this.ab(null)},
$iax:1}
V.Y.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Y))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.aQ.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aQ))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"},
A:function(){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.ih.prototype={}
V.eK.prototype={
ao:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eK))return!1
s=b.a
$.D().toString
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cr(H.b([o.a,o.d,o.r],n),3,0),l=V.cr(H.b([o.b,o.e,o.x],n),3,0),k=V.cr(H.b([o.c,o.f,o.y],n),3,0)
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
V.aW.prototype={
ao:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
hX:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.D().toString
if(Math.abs(b3-0)<1e-9)return V.ai()
s=1/b3
r=-l
q=-a2
return V.aX((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
w:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aX(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bo:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.V(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aW))return!1
s=b.a
$.D().toString
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
i:function(a){return this.A()},
I:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cr(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cr(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cr(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cr(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
A:function(){return this.I("")}}
V.a2.prototype={
ac:function(a){return new V.a5(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"},
A:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.V.prototype={
W:function(a,b){return new V.V(this.a+b.a,this.b+b.b,this.c+b.c)},
aP:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
w:function(a,b){return new V.V(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.V))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
A:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.bE.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bE))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"},
A:function(){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.f4.prototype={
gaB:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.f4))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.a5.prototype={
bg:function(a){return Math.sqrt(this.a4(this))},
a4:function(a){return this.a*a.a+this.b*a.b},
w:function(a,b){return new V.a5(this.a*b,this.b*b)},
ad:function(a,b){var s
$.D().toString
if(Math.abs(b-0)<1e-9){s=$.bI
return s==null?$.bI=new V.a5(0,0):s}return new V.a5(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.G.prototype={
bg:function(a){return Math.sqrt(this.a4(this))},
a4:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cw:function(a,b){return new V.G(V.hP(this.a,a.a,b),V.hP(this.b,a.b,b),V.hP(this.c,a.c,b))},
M:function(){var s=this,r=Math.sqrt(s.a4(s))
if(r===1)return s
return s.ad(0,r)},
aI:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.G(s*r-q*p,q*o-n*r,n*p-s*o)},
W:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
b6:function(a){return new V.G(-this.a,-this.b,-this.c)},
w:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
ad:function(a,b){$.D().toString
if(Math.abs(b-0)<1e-9)return V.dz()
return new V.G(this.a/b,this.b/b,this.c/b)},
dW:function(){$.D().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.G))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
A:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.dA.prototype={
bg:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dA))return!1
s=b.a
$.D().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
U.i1.prototype={
bN:function(a){var s=V.kU(a,this.c,this.b)
return s},
gv:function(){var s=this.y
return s==null?this.y=D.N():s},
L:function(a){var s=this.y
return s==null?null:s.H(a)},
scL:function(a,b){},
scz:function(a){var s,r=this,q=r.b
$.D().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bN(s)}r.L(new D.E("maximumLocation",q,r.b))}},
scB:function(a){var s,r=this,q=r.c
$.D().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bN(s)}r.L(new D.E("minimumLocation",q,r.c))}},
sZ:function(a,b){var s,r=this
b=r.bN(b)
s=r.d
$.D().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.L(new D.E("location",s,b))}},
scA:function(a){var s,r,q=this,p=q.e
$.D().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.L(new D.E("maximumVelocity",p,a))}},
sa0:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.D().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.L(new D.E("velocity",r,a))}},
sck:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.D().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.L(new D.E("dampening",s,a))}},
at:function(a,b){var s,r,q,p=this,o=p.f
$.D().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sZ(0,p.d+s*b)
o=p.x
$.D().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa0(s)}}}
U.cy.prototype={
gv:function(){var s=this.b
return s==null?this.b=D.N():s},
au:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cy))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.bW.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.N():s},
L:function(a){var s=this.e
return s==null?null:s.H(a)},
a9:function(){return this.L(null)},
eG:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaV(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gv()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.L(new D.bc())},
fS:function(a,b){var s,r
for(s=b.gR(b),r=this.gaV();s.u();)s.gC(s).gv().N(0,r)
this.L(new D.bd())},
au:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ag(o,o.length),n=H.W(o).c,s=null;o.u();){r=n.a(o.d)
if(r!=null){q=r.au(0,b,c)
s=s==null?q:q.w(0,s)}}p.f=s==null?V.ai():s
o=p.e
if(o!=null)o.an(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bW))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.K(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia_:1}
U.a_.prototype={}
U.db.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.N():s},
L:function(a){var s=this.y
return s==null?null:s.H(a)},
sem:function(a){var s
a=V.kU(a,0,6.283185307179586)
s=this.a
$.D().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.L(new D.E("yaw",s,a))}},
sea:function(a,b){var s
b=V.kU(b,0,6.283185307179586)
s=this.b
$.D().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.L(new D.E("pitch",s,b))}},
seg:function(a){var s
a=V.kU(a,0,6.283185307179586)
s=this.c
$.D().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.L(new D.E("roll",s,a))}},
au:function(a,b,c){var s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sem(s.a+s.d*b.y)
s.sea(0,s.b+s.e*b.y)
s.seg(s.c+s.f*b.y)
s.x=V.lX(s.c).w(0,V.lW(s.b)).w(0,V.lV(s.a))
r=s.y
if(r!=null)r.an(0)}return s.x},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.db))return!1
s=q.a
r=b.a
$.D().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+"], ["+V.x(s.d,3,0)+", "+V.x(s.e,3,0)+", "+V.x(s.f,3,0)+"]"}}
U.dw.prototype={
gv:function(){var s=this.cy
return s==null?this.cy=D.N():s},
L:function(a){var s=this.cy
return s==null?null:s.H(a)},
a9:function(){return this.L(null)},
be:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.ga7().gdA().n(0,s.gbW())
a.ga7().gdZ().n(0,s.gbY())
a.ga7().gbG().n(0,s.gc_())
return!0},
bX:function(a){var s=this,r=s.c,q=s.a
if(!r.q(0,q==null?null:q.gb1(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bZ:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.ac(a.d)
if(s.a4(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sZ(0,-a.y.ac(r).w(0,2).ad(0,s.gaB()).a*2.5+p.z)
q.sa0(0)
p.Q=a.z.ac(r).w(0,2).ad(0,s.gaB())
p.a9()},
c0:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a4(s)>0.0001){r.b.sa0(r.Q.a*10*2.5)
r.a9()}},
au:function(a,b,c){var s=this,r=s.ch,q=b.e
if(r<q){s.ch=q
r=s.b
r.at(0,b.y)
s.cx=V.lX(r.d)}return s.cx},
$ia_:1}
U.dx.prototype={
gv:function(){var s=this.fx
return s==null?this.fx=D.N():s},
L:function(a){var s=this.fx
return s==null?null:s.H(a)},
a9:function(){return this.L(null)},
be:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.ga7().gdA().n(0,q.gbW())
a.ga7().gdZ().n(0,q.gbY())
a.ga7().gbG().n(0,q.gc_())
s=a.gak()
r=s.f
s=r==null?s.f=D.N():r
s.n(0,q.gf3())
s=a.gak()
r=s.d
s=r==null?s.d=D.N():r
s.n(0,q.gf5())
s=a.gb5()
r=s.b
s=r==null?s.b=D.N():r
s.n(0,q.ghi())
s=a.gb5()
r=s.d
s=r==null?s.d=D.N():r
s.n(0,q.ghg())
s=a.gb5()
r=s.c
s=r==null?s.c=D.N():r
s.n(0,q.ghe())
return!0},
aU:function(a){return new V.a5(a.a,a.b)},
bX:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bZ:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ac(a.d)
if(s.a4(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aU(a.y.ac(r).w(0,2).ad(0,s.gaB()))
p=n.c
p.sZ(0,-q.a*2.5+n.cy)
o=n.b
o.sZ(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aU(a.z.ac(r).w(0,2).ad(0,s.gaB()))
n.a9()},
c0:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a4(s)>0.0001){r.c.sa0(-r.dx.a*10*2.5)
r.b.sa0(-r.dx.b*10*2.5)
r.a9()}},
f4:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
f6:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.aU(a.y.ac(r).w(0,2).ad(0,s.gaB()))
p=n.c
p.sZ(0,-q.a*2.5+n.cy)
o=n.b
o.sZ(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aU(a.z.ac(r).w(0,2).ad(0,s.gaB()))
n.a9()},
hj:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hh:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ac(a.d)
if(s.a4(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aU(a.y.ac(r).w(0,2).ad(0,s.gaB()))
p=n.c
p.sZ(0,-q.a*2.5+n.cy)
o=n.b
o.sZ(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aU(a.z.ac(r).w(0,2).ad(0,s.gaB()))
n.a9()},
hf:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a4(s)>0.0001){r.c.sa0(-r.dx.a*10*2.5)
r.b.sa0(-r.dx.b*10*2.5)
r.a9()}},
au:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(q<p){r.dy=p
s=b.y
q=r.c
q.at(0,s)
p=r.b
p.at(0,s)
r.fr=V.lV(p.d).w(0,V.lW(q.d))}return r.fr},
$ia_:1}
U.dy.prototype={
gv:function(){var s=this.r
return s==null?this.r=D.N():s},
L:function(a){var s=this.r
return s==null?null:s.H(a)},
be:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.ga7()
r=s.e
s=r==null?s.e=D.N():r
r=this.gf8()
s.n(0,r)
s=a.gak()
q=s.e;(q==null?s.e=D.N():q).n(0,r)
return!0},
f9:function(a){var s=this,r=s.b,q=s.a
if(!r.q(0,q==null?null:q.gb1(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.L(new D.E("zoom",r,q))}},
au:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.l8(s,s,s,1)}return r.f},
$ia_:1}
M.eq.prototype={
aC:function(a){var s=this.y
return s==null?null:s.H(a)},
eH:function(){return this.aC(null)},
fk:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaw(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bU()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.aC(new D.bc())},
fm:function(a,b){var s,r
for(s=b.gR(b),r=this.gaw();s.u();)s.gC(s).gv().N(0,r)
this.aC(new D.bd())},
sbn:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gv().N(0,r.gaw())
s=r.d
r.d=a
if(a!=null)a.gv().n(0,r.gaw())
r.aC(new D.E("technique",s,r.d))}},
gv:function(){var s=this.y
return s==null?this.y=D.N():s},
b2:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.ed(d.d)
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
n=C.d.as(o.a*q)
m=C.d.as(o.b*p)
l=C.d.as(o.c*q)
a.c=l
o=C.d.as(o.d*p)
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
g=V.aX(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.ec(g)
f=$.nd()
e=s.b
if(e!=null)f=e.au(0,a,s).w(0,f)
a.db.ec(f)}s=d.d
if(s!=null)s.at(0,a)
for(s=d.e.a,r=new J.ag(s,s.length),o=H.W(r).c;r.u();)o.a(r.d).at(0,a)
for(s=new J.ag(s,s.length),r=H.W(s).c;s.u();)r.a(s.d).b2(a)
if(d.b!=null){a.cy.cD()
a.db.cD()}a.eb()}}
A.ef.prototype={}
A.hU.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hK:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hJ:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.aJ.prototype={
gav:function(a){var s=this.a?1:0
return s|0},
i:function(a){var s=this.a?1:0
return""+(s|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.aJ))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.eH.prototype={
ez:function(d7,d8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=null,d1=u.C,d2="Required uniform value, ",d3=", was not defined or used in shader.",d4=c9.x,d5=new P.a0(""),d6=d4.fr
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
A.pL(d4,d5)
A.pN(d4,d5)
A.pM(d4,d5)
A.pP(d4,d5)
A.pQ(d4,d5)
A.pO(d4,d5)
A.pR(d4,d5)
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
m=A.pK(d4)
c9.c=n
c9.d=m
l=c9.d2(n,35633)
k=c9.d2(c9.d,35632)
s=c9.a
q=s.createProgram()
q.toString
c9.e=q
s.attachShader(c9.gaE(),l)
s.attachShader(c9.gaE(),k)
s.linkProgram(c9.gaE())
if(!H.mK(s.getProgramParameter(c9.gaE(),35714))){j=s.getProgramInfoLog(c9.gaE())
if(j==null)j="undefined log error"
s.deleteProgram(c9.e)
H.h(P.f("Failed to link shader: "+j))}c9.ha()
c9.hc()
c9.y=c9.gah(c9).h(0,"posAttr")
c9.Q=c9.gah(c9).h(0,"normAttr")
c9.z=c9.gah(c9).h(0,"binmAttr")
c9.ch=c9.gah(c9).h(0,"txt2DAttr")
c9.cx=c9.gah(c9).h(0,"txtCubeAttr")
c9.cy=c9.gah(c9).h(0,"bendAttr")
if(d4.dy)c9.fy=t.j.a(c9.gU().T(0,"invViewMat"))
if(d6)c9.db=t.j.a(c9.gU().T(0,"objMat"))
if(r)c9.dx=t.j.a(c9.gU().T(0,"viewObjMat"))
d6=t.j
c9.fr=d6.a(c9.gU().T(0,"projViewObjMat"))
if(d4.go)c9.dy=d6.a(c9.gU().T(0,"viewMat"))
if(d4.x1)c9.go=t.E.a(c9.gU().T(0,"txt2DMat"))
if(d4.x2)c9.id=d6.a(c9.gU().T(0,"txtCubeMat"))
if(d4.y1)c9.k1=d6.a(c9.gU().T(0,"colorMat"))
c9.k3=H.b([],t.p)
s=d4.b_
if(s>0){c9.k2=t.w.a(c9.gU().T(0,"bendMatCount"))
for(i=0;i<s;++i){r=c9.k3
h=c9.r
if(h==null)H.h(P.f(d1))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.h(P.f(d2+q+d3))
r.push(d6.a(g))}}if(d4.a.a)c9.k4=t.g.a(c9.gU().T(0,"emissionClr"))
if(d4.b.a)c9.rx=t.g.a(c9.gU().T(0,"ambientClr"))
if(d4.c.a)c9.x2=t.g.a(c9.gU().T(0,"diffuseClr"))
if(d4.d.a)c9.b_=t.g.a(c9.gU().T(0,"invDiffuseClr"))
d6=d4.e.a
if(!d6)s=!1
else s=!0
if(s){c9.dH=t.v.a(c9.gU().T(0,"shininess"))
if(d6)c9.dG=t.g.a(c9.gU().T(0,"specularClr"))}if(d4.db){c9.dI=t.bz.a(c9.gU().T(0,"envSampler"))
if(d4.r.a)c9.dJ=t.g.a(c9.gU().T(0,"reflectClr"))
d6=d4.x.a
if(!d6)s=!1
else s=!0
if(s){c9.dK=t.v.a(c9.gU().T(0,"refraction"))
if(d6)c9.dL=t.g.a(c9.gU().T(0,"refractClr"))}}if(d4.y.a)c9.dM=t.v.a(c9.gU().T(0,"alpha"))
if(d4.k1){d6=d4.z
s=d6.length
if(s!==0){r=t.S
c9.cl=P.U(r,t.W)
c9.cm=P.U(r,t.O)
for(r=t.w,q=t.g,p=t.v,o=t.c,f=0;f<d6.length;d6.length===s||(0,H.q)(d6),++f){e=d6[f]
d=e.a
c="barLight"+d
b=H.b([],o)
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
a9=a8}b.push(new A.dp(g,a2,a3,a9,a8,a7))}c9.cm.m(0,d,b)
a=c9.cl
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.m(0,d,r.a(g))}}d6=d4.Q
s=d6.length
if(s!==0){r=t.S
c9.cn=P.U(r,t.W)
c9.co=P.U(r,t.d)
for(r=t.w,q=t.g,p=t.G,o=t.V,f=0;f<d6.length;d6.length===s||(0,H.q)(d6),++f){e=d6[f]
d=e.a
c="dirLight"+d
b=H.b([],o)
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
b.push(new A.dq(b2,b1,b0,g,a2,b3))}c9.co.m(0,d,b)
a=c9.cn
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.m(0,d,r.a(g))}}d6=d4.ch
s=d6.length
if(s!==0){r=t.S
c9.cp=P.U(r,t.W)
c9.cq=P.U(r,t.m)
for(r=t.w,q=t.g,p=t.E,o=t.bz,a=t.x,a0=t.v,a1=t.B,f=0;f<d6.length;d6.length===s||(0,H.q)(d6),++f){e=d6[f]
d=e.a
c="pointLight"+d
b=H.b([],a1)
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
a9=a8}b.push(new A.ds(g,a2,c0,a3,b3,c1,c2,a9,a8,a7))}c9.cq.m(0,d,b)
b4=c9.cp
h=c9.r
if(h==null)H.h(P.f(d1))
b5=c+"Count"
g=h.h(0,b5)
if(g==null)H.h(P.f(d2+b5+d3))
b4.m(0,d,r.a(g))}}d4=d4.cx
d6=d4.length
if(d6!==0){s=t.S
c9.cr=P.U(s,t.W)
c9.cs=P.U(s,t.R)
for(s=t.w,r=t.g,q=t.v,p=t.x,o=t.G,a=t.J,f=0;f<d4.length;d4.length===d6||(0,H.q)(d4),++f){e=d4[f]
d=e.a
c="spotLight"+d
b=H.b([],a)
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
b.push(new A.dv(g,a2,a3,a4,b2,b1,c6,c5,c2,c8,c7,a9,a8,a7,b3,c1))}c9.cs.m(0,d,b)
a0=c9.cr
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"Count"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
a0.m(0,d,s.a(g))}}}},
h8:function(a,b){}}
A.b7.prototype={
i:function(a){return"barLight"+this.a}}
A.b9.prototype={
i:function(a){return"dirLight"+this.a}}
A.bh.prototype={
i:function(a){return"pointLight"+this.a}}
A.bj.prototype={
i:function(a){return"spotLight"+this.a}}
A.iH.prototype={
i:function(a){return this.bx}}
A.dp.prototype={}
A.dq.prototype={}
A.ds.prototype={}
A.dv.prototype={}
A.dd.prototype={
gah:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gU:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaE:function(){var s=this.e
if(s==null)throw H.c(P.f(u.F))
return s},
d2:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.mK(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.y(q)+'": '+s))}return q},
ha:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.kh(l.getProgramParameter(o.gaE(),35721))
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
m.push(new A.ef(l,q,p))}o.f=new A.hU(m)},
hc:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.kh(j.getProgramParameter(m.gaE(),35718))
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
k.push(m.hF(o,n,q,p))}m.r=new A.jt(k)},
aT:function(a,b,c){var s=this.a
if(a===1)return new A.cb(s,b,c)
else return A.lc(s,this.e,b,a,c)},
eZ:function(a,b,c){var s=this.a
if(a===1)return new A.dt(s,b,c)
else return A.lc(s,this.e,b,a,c)},
f_:function(a,b,c){var s=this.a
if(a===1)return new A.du(s,b,c)
else return A.lc(s,this.e,b,a,c)},
bt:function(a,b){return new P.fX(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hF:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aT(b,c,d)
case 5121:return s.aT(b,c,d)
case 5122:return s.aT(b,c,d)
case 5123:return s.aT(b,c,d)
case 5124:return s.aT(b,c,d)
case 5125:return s.aT(b,c,d)
case 5126:return new A.dl(s.a,c,d)
case 35664:return new A.fu(s.a,c,d)
case 35665:return new A.dm(s.a,c,d)
case 35666:return new A.dn(s.a,c,d)
case 35667:return new A.fv(s.a,c,d)
case 35668:return new A.fw(s.a,c,d)
case 35669:return new A.fx(s.a,c,d)
case 35674:return new A.fy(s.a,c,d)
case 35675:return new A.dr(s.a,c,d)
case 35676:return new A.cc(s.a,c,d)
case 35678:return s.eZ(b,c,d)
case 35680:return s.f_(b,c,d)
case 35670:throw H.c(s.bt("BOOL",c))
case 35671:throw H.c(s.bt("BOOL_VEC2",c))
case 35672:throw H.c(s.bt("BOOL_VEC3",c))
case 35673:throw H.c(s.bt("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.a3.prototype={}
A.jt.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
T:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.A()},
A:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cb.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fv.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fw.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fx.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.ft.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.dl.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.fu.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dm.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dn.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.fy.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dr.prototype={
aq:function(a){var s=new Float32Array(H.e1(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.cc.prototype={
aq:function(a){var s=new Float32Array(H.e1(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dt.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.du.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.kf.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cw(q.b,b).cw(q.d.cw(q.c,b),c)
a.sZ(0,new V.V(p.a,p.b,p.c))
a.sei(p.M())
q=1-b
s=1-c
a.sds(new V.bE(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)},
$S:8}
F.ku.prototype={
$2:function(a,b){return V.hP(this.a,this.b,b)},
$S:18}
F.kw.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hP(-1,1,c),n=this.a.$2(b,c)
q=-q*n
s=p*n
a.sZ(0,new V.V(q,s,o))
a.sei(new V.G(q,s,o).M())
a.sds(new V.bE(1-c,2+c,-1,-1))},
$S:8}
F.kx.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:16}
F.ky.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:16}
F.kS.prototype={
$2:function(a,b){return 0},
$S:18}
F.kR.prototype={
$3:function(a,b,c){var s,r=this.b.$2(b,c)
if(typeof r!=="number")return H.n0(r)
s=a.f
r=(s!=null?new V.G(s.a,s.b,s.c):V.mo()).M().w(0,this.a+r)
a.sZ(0,new V.V(r.a,r.b,r.c))},
$S:8}
F.kT.prototype={
$1:function(a){return new V.V(Math.cos(a),Math.sin(a),0)},
$S:28}
F.kH.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.V(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)},
$S:28}
F.kv.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lE(l.$1(m),k)
k=J.lE(l.$1(m+3.141592653589793/n.c),k).aP(0,j)
s=new V.G(k.a,k.b,k.c).M()
r=$.mk
if(r==null){r=new V.G(1,0,0)
$.mk=r}q=s.aI(!s.q(0,r)?V.mo():r).M()
r=q.aI(s).M()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.w(0,l*k)
k=q.w(0,o*k)
a.sZ(0,j.W(0,new V.V(l.a-k.a,l.b-k.b,l.c-k.c)))},
$S:8}
F.av.prototype={
aQ:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.c8(a)
s.c9(b)
s.h9(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gS().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}},
bf:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.N(r.gS().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}}s.c4()
s.c5()
s.h2()},
c8:function(a){this.a=a
a.gS().b.push(this)},
c9:function(a){this.b=a
a.gS().c.push(this)},
h9:function(a){this.c=a
a.gS().d.push(this)},
c4:function(){var s=this.a
if(s!=null)C.b.N(s.gS().b,this)
this.a=null},
c5:function(){var s=this.b
if(s!=null)C.b.N(s.gS().c,this)
this.b=null},
h2:function(){var s=this.c
if(s!=null)C.b.N(s.gS().d,this)
this.c=null},
eS:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.dz()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.dW())return p
return q.M()},
eU:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aP(0,n)
q=new V.G(o.a,o.b,o.c).M()
o=r.aP(0,n)
return q.aI(new V.G(o.a,o.b,o.c).M()).M()},
cf:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eS()
if(s==null){s=q.eU()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a_()}return!0},
eR:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.dz()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.dW())return p
return q.M()},
eT:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.D().toString
if(Math.abs(p-0)<1e-9){j=b.aP(0,e)
o=new V.G(j.a,j.b,j.c).M()
if(q.a-r.a<0)o=o.b6(0)}else{n=(j-s.b)/p
j=b.aP(0,e).w(0,n).W(0,e).aP(0,h)
o=new V.G(j.a,j.b,j.c).M()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b6(0)}m=l.d
if(m!=null){m=m.M()
o=m.aI(o).M().aI(m).M()}return o},
cd:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eR()
if(s==null){s=q.eT()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a_()}return!0},
ghz:function(a){var s=this
if(J.K(s.a,s.b))return!0
if(J.K(s.b,s.c))return!0
if(J.K(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
I:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gB(p)
p=a+C.a.am(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gB(o)
p=p+C.a.am(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gB(o)
s=p+C.a.am(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.A()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.A()
return s+((p==null?"-":p)+"}")},
A:function(){return this.I("")}}
F.il.prototype={}
F.jf.prototype={
bi:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gB(q)
s=c.a
if(q==(s==null?r:s.gB(s))){q=b.b
q=q==null?r:q.gB(q)
s=c.b
if(q==(s==null?r:s.gB(s))){q=b.c
q=q==null?r:q.gB(q)
s=c.c
q=q==(s==null?r:s.gB(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gB(q)
s=c.b
if(q==(s==null?r:s.gB(s))){q=b.b
q=q==null?r:q.gB(q)
s=c.c
if(q==(s==null?r:s.gB(s))){q=b.c
q=q==null?r:q.gB(q)
s=c.a
q=q==(s==null?r:s.gB(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gB(q)
s=c.c
if(q==(s==null?r:s.gB(s))){q=b.b
q=q==null?r:q.gB(q)
s=c.a
if(q==(s==null?r:s.gB(s))){q=b.c
q=q==null?r:q.gB(q)
s=c.b
q=q==(s==null?r:s.gB(s))}else q=!1
return q}else return!1}}}}
F.eE.prototype={
ey:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.f("May not create a line with vertices attached to different shapes."))
s.c8(a)
s.c9(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga5(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}},
bf:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.N(r.ga5(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a_()}}s.c4()
s.c5()},
c8:function(a){this.a=a
a.ga5(a).b.push(this)},
c9:function(a){this.b=a
a.ga5(a).c.push(this)},
c4:function(){var s=this.a
if(s!=null)C.b.N(s.ga5(s).b,this)
this.a=null},
c5:function(){var s=this.b
if(s!=null)C.b.N(s.ga5(s).c,this)
this.b=null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
I:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gB(s)
s=a+C.a.am(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gB(r)
return s+C.a.am(C.c.i(r==null?-1:r),0)},
A:function(){return this.I("")}}
F.iy.prototype={}
F.js.prototype={
bi:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gB(q)
s=c.a
if(q==(s==null?r:s.gB(s))){q=b.b
q=q==null?r:q.gB(q)
s=c.b
return q==(s==null?r:s.gB(s))}else{q=b.a
q=q==null?r:q.gB(q)
s=c.b
if(q==(s==null?r:s.gB(s))){q=b.b
q=q==null?r:q.gB(q)
s=c.a
return q==(s==null?r:s.gB(s))}else return!1}}}
F.f0.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
I:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gB(s)
return a+C.a.am(C.c.i(s),0)},
A:function(){return this.I("")}}
F.j9.prototype={
gY:function(){var s=this.a
return s==null?this.a=new F.z(this,H.b([],t.k)):s},
gbm:function(a){var s=this.b
return s==null?this.b=new F.bF(this,H.b([],t.q)):s},
ga5:function(a){var s=this.c
return s==null?this.c=new F.df(this,H.b([],t.L)):s},
gS:function(){var s=this.d
return s==null?this.d=new F.de(this,H.b([],t.u)):s},
gv:function(){var s=this.e
return s==null?this.e=D.N():s},
bj:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.gY().X()
s=b.gY().c.length
for(a0=a1.gY().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.z(b,H.b([],q))
n.n(0,o.hC())}b.gY().X()
for(a0=a1.gbm(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.z(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.bF(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,h)
l=new F.f0()
if(h.a==null)H.h(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.dB(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.bF(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.H(a)}}}for(a0=a1.ga5(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.z(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.z(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.df(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,e)
new F.eE().ey(f,e)}for(a0=a1.gS().b,r=a0.length,n=t.u,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.z(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.z(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.z(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).X()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.de(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,e)
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,c)
new F.av().aQ(f,e,c)}a0=b.e
if(a0!=null)a0.an(0)},
ay:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gS().ay()||!1
if(!r.gY().ay())s=!1
q=r.e
if(q!=null)q.an(0)
return s},
i_:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.gY().c
s=H.b(m.slice(0),H.kg(m))
for(m=t.k;s.length!==0;){r=C.b.ghP(s)
C.b.cG(s,0)
q=H.b([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.bi(0,r,o)){q.push(o)
C.b.cG(s,p)}}if(q.length>1)b.bj(q)}n.gY().X()
n.ga5(n).cH()
n.gS().cH()
n.gbm(n).ij()
n.ga5(n).cI(new F.js())
n.gS().cI(new F.jf())
m=n.e
if(m!=null)m.an(0)},
cc:function(){this.i_(new F.jI(),new F.j_())},
cu:function(){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
n.gS().cu()
for(s=n.gY().c.length-1,m=t.k;s>=0;--s){r=n.a
r=(r==null?n.a=new F.z(n,H.b([],m)):r).c
if(s>=r.length)return H.d(r,s)
q=r[s]
p=q.r
if(p!=null)q.se_(new V.G(-p.a,-p.b,-p.c))
o=q.x
if(o!=null){o=new V.G(-o.a,-o.b,-o.c).M()
if(!J.K(q.x,o)){q.x=o
r=q.a
if(r!=null){r=r.e
if(r!=null)r.H(null)}}}}m=n.e
if(m!=null)m.an(0)},
hx:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=34962,b={},a=e.gY().c.length,a0=a3.a,a1=(a0&$.bt().a)!==0?1:0
if((a0&$.bs().a)!==0)++a1
if((a0&$.br().a)!==0)++a1
if((a0&$.bO().a)!==0)++a1
if((a0&$.bP().a)!==0)++a1
if((a0&$.e9().a)!==0)++a1
if((a0&$.ea().a)!==0)++a1
if((a0&$.cs().a)!==0)++a1
if((a0&$.bq().a)!==0)++a1
s=a3.gcP(a3)
r=P.cU(a*s,0,!1,t.gR)
b.a=0
q=P.o3(a1,new F.ja(b,e,a3,s*4,a,s,r),t.eT)
a0=a2.a
p=a0.createBuffer()
p.toString
a0.bindBuffer(c,p)
a0.bufferData(c,new Float32Array(H.e1(r)),35044)
a0.bindBuffer(c,d)
o=new Z.cw(new Z.fH(c,p),H.b([],t.fv),q,a3)
if(e.gbm(e).b.length!==0){n=H.b([],t.t)
p=t.q
m=t.k
l=0
while(!0){k=e.b
if(k==null){k=e.b=new F.bF(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
k=k[l].a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k);++l}h=Z.ld(a0,34963,n)
o.b.push(new Z.bX(0,n.length,h))}if(e.ga5(e).b.length!==0){n=H.b([],t.t)
p=t.L
m=t.k
l=0
while(!0){k=e.c
if(k==null){k=e.c=new F.df(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
g=k[l]
k=g.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k)
k=g.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k);++l}h=Z.ld(a0,34963,n)
o.b.push(new Z.bX(1,n.length,h))}if(e.gS().b.length!==0){n=H.b([],t.t)
p=t.u
m=t.k
l=0
while(!0){k=e.d
if(k==null){k=e.d=new F.de(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
f=k[l]
k=f.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k)
k=f.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k)
k=f.c
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],m)):i).X()}k=k.e}n.push(k==null?0:k);++l}h=Z.ld(a0,34963,n)
o.b.push(new Z.bX(4,n.length,h))}return o},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.gY().c.length!==0){q.push("Vertices:")
q.push(s.gY().I(r))}if(s.gbm(s).b.length!==0){q.push("Points:")
q.push(s.gbm(s).I(r))}if(s.ga5(s).b.length!==0){q.push("Lines:")
q.push(s.ga5(s).I(r))}if(s.gS().b.length!==0){q.push("Faces:")
q.push(s.gS().I(r))}return C.b.j(q,"\n")},
a_:function(){var s=this.e
return s==null?null:s.H(null)}}
F.ja.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hs(a),e=f.gcP(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.z(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].hZ(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bT(f,e,c*4,g.d)},
$S:47}
F.de.prototype={
ho:function(a){var s,r,q,p,o,n,m,l,k=H.b([],t.u),j=a.length
if(j>0){s=a[0]
for(r=this.a,q=t.k,p=2;p<j;++p){o=p-1
n=a.length
if(o>=n)return H.d(a,o)
o=a[o]
if(p>=n)return H.d(a,p)
n=a[p]
m=r.a;(m==null?r.a=new F.z(r,H.b([],q)):m).n(0,s)
m=r.a;(m==null?r.a=new F.z(r,H.b([],q)):m).n(0,o)
m=r.a;(m==null?r.a=new F.z(r,H.b([],q)):m).n(0,n)
l=new F.av()
l.aQ(s,o,n)
k.push(l)}}return k},
hp:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.u)
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
if(m){(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,g)
e=new F.av()
e.aQ(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,f)
e=new F.av()
e.aQ(j,g,f)
d.push(e)}else{(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,f)
e=new F.av()
e.aQ(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,f)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,j)
e=new F.av()
e.aQ(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gl:function(a){return this.b.length},
cI:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gY().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.z(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.cg(H.b([],q),H.b([],q),H.b([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.cg(H.b([],q),H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.bi(0,l,(o==null?n.d=new F.cg(H.b([],q),H.b([],q),H.b([],q)):o).h(0,j))){l.bf()
break}}}}},
cH:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.ghz(q))q.bf()}},
ay:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cf())q=!1
return q},
ce:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cd())q=!1
return q},
cu:function(){var s,r,q,p,o,n,m,l
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
o=p.b
p.b=p.c
p.c=o
n=p.d
if(n!=null)p.d=new V.G(-n.a,-n.b,-n.c)
m=p.e
if(m!=null)p.e=new V.G(-m.a,-m.b,-m.c)
l=p.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.H(null)}}}},
i:function(a){return this.A()},
I:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(a))
return C.b.j(p,"\n")},
A:function(){return this.I("")}}
F.df.prototype={
gl:function(a){return this.b.length},
cI:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gY().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.z(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.ch(H.b([],q),H.b([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.ch(H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.bi(0,l,(o==null?n.c=new F.ch(H.b([],q),H.b([],q)):o).h(0,j))){l.bf()
break}}}}},
cH:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.K(q.a,q.b))q.bf()}},
i:function(a){return this.A()},
I:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].I(a+(""+s+". ")))}return C.b.j(r,"\n")},
A:function(){return this.I("")}}
F.bF.prototype={
gl:function(a){return this.b.length},
ij:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1,q=t.q;r>=0;--r){if(r>=s.length)return H.d(s,r)
p=s[r].a
if(p==null)o=null
else{n=p.b
p=(n==null?p.b=new F.dB(H.b([],q)):n).b.length
o=p}if((o==null?0:o)>1){if(r>=s.length)return H.d(s,r)
m=s[r]
p=m.a
if(p!=null){p=p.a
if(p!=null){n=p.b
C.b.N((n==null?p.b=new F.bF(p,H.b([],q)):n).b,m)}p=m.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.H(null)}}}p=m.a
if(p!=null){n=p.b
C.b.N((n==null?p.b=new F.dB(H.b([],q)):n).b,m)}m.a=null}}},
i:function(a){return this.A()},
I:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(a))
return C.b.j(p,"\n")},
A:function(){return this.I("")}}
F.cf.prototype={
cj:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fF(s.cx,p,m,r,q,o,n,a,l)},
hC:function(){return this.cj(null)},
ga5:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.ch(H.b([],s),H.b([],s))}return s},
gS:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.cg(H.b([],s),H.b([],s),H.b([],s))}return s},
gB:function(a){var s=this.a
if(s!=null)s.gY().X()
return this.e},
sZ:function(a,b){var s
if(!J.K(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a_()}},
se_:function(a){var s
a=a.M()
if(!J.K(this.r,a)){this.r=a
s=this.a
if(s!=null)s.a_()}},
sei:function(a){var s
if(!J.K(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a_()}},
sds:function(a){var s
if(!J.K(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a_()}},
hZ:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.bt())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.bs())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.q(0,$.br())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.q(0,$.bO())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.q(0,$.bP())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.e9())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.q(0,$.ea())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.q(0,$.cs()))return H.b([o.ch],t.n)
else if(a.q(0,$.bq())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
cf:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dz()
p.gS().F(0,new F.jM(o))
p.r=o.a.M()
if(r){s.a_()
o=s.e
if(o!=null)o.an(0)}return!0},
cd:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dz()
p.gS().F(0,new F.jL(o))
p.x=o.a.M()
if(r){s.a_()
o=s.e
if(o!=null)o.an(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
I:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.am(C.c.i(q.e),0))
s=q.f
s=s==null?p:s.A()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.A()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.A()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.A()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.A()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.A()
n.push(s==null?o:s)
n.push(V.x(q.ch,3,0))
s=q.cx
s=s==null?p:s.A()
n.push(s==null?o:s)
r=C.b.j(n,", ")
return a+"{"+r+"}"},
A:function(){return this.I("")}}
F.jM.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:9}
F.jL.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:9}
F.z.prototype={
X:function(){var s,r,q
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
s.a_()
return!0},
hq:function(a,b,c,d,e,f){var s=F.fF(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
ay:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cf()
return!0},
ce:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cd()
return!0},
hy:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.M()
if(!J.K(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.H(null)}}}}}return!0},
i:function(a){return this.A()},
I:function(a){var s,r,q,p
this.X()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].I(a))
return C.b.j(s,"\n")},
A:function(){return this.I("")}}
F.cg.prototype={
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
F:function(a,b){var s=this
C.b.F(s.b,b)
C.b.F(s.c,new F.jG(s,b))
C.b.F(s.d,new F.jH(s,b))},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
return C.b.j(p,"\n")}}
F.jG.prototype={
$1:function(a){if(!J.K(a.a,this.a))this.b.$1(a)},
$S:9}
F.jH.prototype={
$1:function(a){var s=this.a
if(!J.K(a.a,s)&&!J.K(a.b,s))this.b.$1(a)},
$S:9}
F.ch.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
return C.b.j(p,"\n")}}
F.jJ.prototype={}
F.jI.prototype={
bi:function(a,b,c){return J.K(b.f,c.f)}}
F.jK.prototype={}
F.j_.prototype={
bj:function(a){var s,r,q,p=V.dz()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.G(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.M()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)a[r].se_(p)
return null}}
F.dB.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
return C.b.j(p,"\n")}}
O.cZ.prototype={
gv:function(){var s=this.fr
return s==null?this.fr=D.N():s},
af:function(a){var s=this.fr
return s==null?null:s.H(a)},
eJ:function(){return this.af(null)},
d9:function(a){this.a=null
this.af(a)},
h5:function(){return this.d9(null)},
fe:function(a,b){return this.af(new D.bc())},
fg:function(a,b){return this.af(new D.bd())},
gdY:function(){var s=this,r=s.dx
if(r==null){r=new D.cP(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.cN(r.gfb(),r.gfP(),r.gfT())
r.gv().n(0,s.gd8())
r.gdX().n(0,s.gcV())
s.dx=r}return r},
gdE:function(){var s=this.f
return s==null?this.f=O.eJ(this,"emission"):s},
gdq:function(){var s=this.r
return s==null?this.r=O.eJ(this,"ambient"):s},
gdw:function(){var s=this.x
return s==null?this.x=O.eJ(this,"diffuse"):s},
gbK:function(){var s=this.z
return s==null?this.z=new O.iK(new V.Y(0,0,0),this,"specular",new A.aJ(!1,!1,!1)):s},
d0:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.X(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gaz()
o=a1.h(0,q.gaz())
a1.m(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.F(0,new O.iL(b,n))
C.b.b7(n,new O.iM())
m=new H.X(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gaz()
o=m.h(0,q.gaz())
m.m(0,p,o==null?1:o)}l=H.b([],t.fD)
m.F(0,new O.iN(b,l))
C.b.b7(l,new O.iO())
k=new H.X(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.b([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){p=k.h(0,4)
k.m(0,4,p==null?1:p)}j=H.b([],t.eg)
k.F(0,new O.iP(b,j))
C.b.b7(j,new O.iQ())
i=new H.X(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.b([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.q)(a0),++r){q=a0[r]
s=q.gaz()
p=i.h(0,q.gaz())
i.m(0,s,p==null?1:p)}h=H.b([],t.c3)
i.F(0,new O.iR(b,h))
C.b.b7(h,new O.iS())
a0=C.c.a3(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.iI(new V.aQ(0,0,0,0))
a2=b.gdE().c
s=b.gdq().c
p=b.gdw().c
o=b.y
o=(o==null?b.y=O.eJ(b,"invDiffuse"):o).c
g=b.gbK().c
f=b.Q
f=(f==null?b.Q=new O.iG(b,"bump",new A.aJ(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.eJ(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.iJ(new V.Y(0,0,0),b,"refract",new A.aJ(!1,!1,!1)):d).c
c=b.db
return A.o5(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.iF(b,"alpha",new A.aJ(!1,!1,!1)):c).c,n,l,j,h)},
eQ:function(a,b){},
at:function(a,b){var s,r,q,p=this.dx
p=J.aF(p==null?H.b([],t.e):p)
s=H.W(p).c
for(;p.u();){r=s.a(p.d)
q=r.b
q=q==null?null:q.au(0,b,r)
if(q==null){q=$.iT
if(q==null){q=new V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.iT=q}}r.a=q}},
il:function(c0,c1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=this,b8=null,b9=b7.a
if(b9==null){s=b7.d0()
r=s.bx
q=c0.fr
b9=q.h(0,r)
if(b9==null){p=c0.a
o=t.S
n=t.W
b9=new A.eH(s,H.b([],t.p),P.U(o,n),P.U(o,t.O),P.U(o,n),P.U(o,t.d),P.U(o,n),P.U(o,t.m),P.U(o,n),P.U(o,t.R),p,r)
b9.ez(s,p)
if(r.length===0)H.h(P.f("May not cache a shader with no name."))
if(q.cg(0,r))H.h(P.f('Shader cache already contains a shader by the name "'+r+'".'))
q.m(0,r,b9)}b9=b7.a=b9
c1.e=null}m=b9.x
l=m.dF
s=c1.e
if(!(s instanceof Z.cw))s=c1.e=null
if(s==null||!s.d.q(0,l)){s=m.k4
if(s){r=c1.d
if(r!=null)r.ay()}r=m.r1
if(r){q=c1.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gS().ce()
q.gY().ce()
q=q.e
if(q!=null)q.an(0)}}q=m.rx
if(q){p=c1.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gY().hy()
p=p.e
if(p!=null)p.an(0)}}p=c1.d
k=p==null?b8:p.hx(new Z.jN(c0.a),l)
if(k==null)return
p=k.b0($.bt())
if(p!=null){o=b9.y
o=o==null?b8:o.c
p.e=o==null?0:o}if(s){s=k.b0($.bs())
if(s!=null){p=b9.Q
p=p==null?b8:p.c
s.e=p==null?1:p}}if(r){s=k.b0($.br())
if(s!=null){r=b9.z
r=r==null?b8:r.c
s.e=r==null?2:r}}if(m.r2){s=k.b0($.bO())
if(s!=null){r=b9.ch
r=r==null?b8:r.c
s.e=r==null?3:r}}if(q){s=k.b0($.bP())
if(s!=null){r=b9.cx
r=r==null?b8:r.c
s.e=r==null?4:r}}if(m.ry){s=k.b0($.bq())
if(s!=null){r=b9.cy
r=r==null?b8:r.c
s.e=r==null?5:r}}c1.e=k}j=H.b([],t.ga)
s=c0.a
s.useProgram(b9.e)
b9.gah(b9).hK()
if(m.fr){r=c0.dx
r=r.ga6(r)
q=b9.db
if(q!=null)q.aq(r.ao(0,!0))}if(m.fx){r=c0.cx
if(r==null){r=c0.db
q=c0.dx
q=c0.cx=r.ga6(r).w(0,q.ga6(q))
r=q}q=b9.dx
if(q!=null)q.aq(r.ao(0,!0))}r=c0.ch
if(r==null){r=c0.dx
r=c0.ch=c0.gih().w(0,r.ga6(r))}q=b9.fr
if(q!=null)q.aq(r.ao(0,!0))
if(m.go){r=c0.db
r=r.ga6(r)
q=b9.dy
if(q!=null)q.aq(r.ao(0,!0))}if(m.x1){r=$.lU
if(r==null){r=new V.eK(1,0,0,0,1,0,0,0,1)
$.lU=r}q=b9.go
if(q!=null)q.aq(r.ao(0,!0))}if(m.x2){r=V.ai()
q=b9.id
if(q!=null)q.aq(r.ao(0,!0))}if(m.y1){r=V.ai()
q=b9.k1
if(q!=null)q.aq(r.ao(0,!0))}if(m.b_>0){r=b7.e.a
i=r.length
q=b9.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.d(r,h)
q=r[h]
p=b9.k3
if(h>=p.length)return H.d(p,h)
p=p[h]
g=new Float32Array(H.e1(q.ao(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}if(m.a.a){r=b7.f
r=r==null?b8:r.f
if(r==null)r=new V.Y(0,0,0)
q=b9.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.k1){if(m.b.a){r=b7.r
r=r==null?b8:r.f
if(r==null)r=new V.Y(0,0,0)
q=b9.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.c.a){r=b7.x
r=r==null?b8:r.f
if(r==null)r=new V.Y(0,0,0)
q=b9.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.d.a){r=b7.y
r=r==null?b8:r.f
if(r==null)r=new V.Y(0,0,0)
q=b9.b_
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.e.a
if(!r)q=!1
else q=!0
if(q){q=b7.z
q=q==null?b8:q.ch
if(q==null)q=100
p=b9.dH
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=b7.z
r=r==null?b8:r.f
if(r==null)r=new V.Y(1,1,1)
q=b9.dG
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.z
if(r.length>0){f=new H.X(t.y)
q=b7.dx
q=q==null?b8:q.e
if(q==null)q=H.b([],t.i)
p=q.length
o=t.c
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gaz()
b=f.h(0,c)
if(b==null)b=0
f.m(0,c,b+1)
n=b9.cm.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.giz()
a0=$.aZ
n=n.bo(a0==null?$.aZ=new V.V(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giD()
a0=$.aZ
n=n.bo(a0==null?$.aZ=new V.V(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaH(d)
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
if(d.ghL()){n=d.ght()
a0=a.e
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.ghu()
a0=a.f
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.ghv()
a0=a.r
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=b9.cl.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=c0.db
a1=q.ga6(q)
a2=new H.X(t.y)
q=b7.dx
q=q==null?b8:q.f
if(q==null)q=H.b([],t.U)
p=q.length
o=a1.a
n=a1.b
a0=a1.c
a3=a1.e
a4=a1.f
a5=a1.r
a6=a1.y
a7=a1.z
a8=a1.Q
a9=t.V
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gaz()
b=a2.h(0,c)
if(b==null)b=0
a2.m(0,c,b+1)
b0=b9.co.h(0,c)
if(b0==null)b0=H.b([],a9)
if(b>>>0!==b||b>=b0.length)return H.d(b0,b)
a=b0[b]
b0=d.gdz(d)
b0=new V.G(C.d.w(o,b0.gdB(b0))+C.d.w(n,b0.gdC(b0))+C.d.w(a0,b0.gdD()),C.d.w(a3,b0.gdB(b0))+C.d.w(a4,b0.gdC(b0))+C.d.w(a5,b0.gdD()),C.d.w(a6,b0.gdB(b0))+C.d.w(a7,b0.gdC(b0))+C.d.w(a8,b0.gdD())).M()
b1=a.e
b1.a.uniform3f(b1.d,b0.a,b0.b,b0.c)
b0=d.gaH(d)
b1=a.f
b1.a.uniform3f(b1.d,b0.a,b0.b,b0.c)
d.gb4()
b0=d.gdz(d)
b1=a.d
if(b1!=null)b1.a.uniform3f(b1.d,b0.a,b0.b,b0.c)
b0=d.gbG()
b1=a.b
if(b1!=null)b1.a.uniform3f(b1.d,b0.a,b0.b,b0.c)
b0=d.gbE(d)
b1=a.c
if(b1!=null)b1.a.uniform3f(b1.d,b0.a,b0.b,b0.c)
b0=d.gb4()
if(!C.b.E(j,b0)){b0.sB(0,j.length)
j.push(b0)}b0=d.gb4()
b1=b0.gbh(b0)
if(b1){b1=a.r
if(b1!=null){b2=b0.gbh(b0)
b3=b1.a
b1=b1.d
if(!b2)b3.uniform1i(b1,0)
else b3.uniform1i(b1,b0.gB(b0))}}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=b9.cn.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.ch
if(r.length>0){q=c0.db
a1=q.ga6(q)
b4=new H.X(t.y)
q=b7.dx
q=q==null?b8:q.r
if(q==null)q=H.b([],t.o)
p=q.length
o=t.B
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
b=b4.h(0,4)
if(b==null)b=0
b4.m(0,4,b+1)
n=b9.cq.h(0,4)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
b5=a1.w(0,d.a)
n=d.a
a0=$.aZ
n=n.bo(a0==null?$.aZ=new V.V(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=$.aZ
n=b5.bo(n==null?$.aZ=new V.V(0,0,0):n)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.c
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.r
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.x
a0=a.z
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.y
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=b4.h(0,p)
if(i==null)i=0
p=b9.cp.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=c0.db
a1=q.ga6(q)
b6=new H.X(t.y)
q=b7.dx
q=q==null?b8:q.x
if(q==null)q=H.b([],t.D)
p=q.length
o=t.J
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gaz()
b=b6.h(0,c)
if(b==null)b=0
b6.m(0,c,b+1)
n=b9.cs.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.gig(d)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gdz(d).M()
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=a1.bo(d.gig(d))
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gaH(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gb4()
n=d.gbG()
a0=a.f
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gbE(d)
a0=a.r
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giR()
a0=a.x
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.giS()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
d.gb4()
n=d.gb4()
if(!C.b.E(j,n)){n.sB(0,j.length)
j.push(n)}n=d.gb4()
a0=n.gbh(n)
if(a0){a0=a.dx
if(a0!=null){a3=n.gbh(n)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,n.gB(n))}}d.gcO()
n=d.giy()
a0=a.z
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gcO()
if(!C.b.E(j,n)){n.sB(0,j.length)
j.push(n)}n=d.gcO()
a0=n.gbh(n)
if(a0){a0=a.dy
if(a0!=null){a3=n.gbh(n)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,n.gB(n))}}if(d.giC()){n=d.giB()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.giA()
a0=a.ch
if(a0!=null)a0.a.uniform1f(a0.d,n)}if(d.ghL()){n=d.ght()
a0=a.cx
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.ghu()
a0=a.cy
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.ghv()
a0=a.db
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=b6.h(0,p)
if(i==null)i=0
p=b9.cr.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.dy){r=c0.Q
if(r==null){r=c0.db
r=c0.Q=r.ga6(r).hX(0)}q=b9.fy
if(q!=null)q.aq(r.ao(0,!0))}if(m.db){b7.eQ(j,b8)
b9.h8(b9.dI,b8)
if(m.r.a){r=b7.cx
r=r==null?b8:r.f
if(r==null)r=new V.Y(1,1,1)
q=b9.dJ
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.x.a
if(!r)q=!1
else q=!0
if(q){q=b7.cy
q=q==null?b8:q.ch
if(q==null)q=0
p=b9.dK
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=b7.cy
r=r==null?b8:r.f
if(r==null)r=new V.Y(1,1,1)
q=b9.dL
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}}r=m.y.a
q=!r
if(q)p=!1
else p=!0
if(p){if(r){r=b7.db
r=r==null?b8:r.f
if(r==null)r=1
p=b9.dM
if(p!=null)p.a.uniform1f(p.d,r)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].bu(c0)
r=t.ed.a(c1.e)
r.bu(c0)
r.b2(c0)
r.ej(c0)
if(q)r=!1
else r=!0
if(r)s.disable(3042)
for(h=0;h<j.length;++h)j[h].ej(c0)
s.useProgram(b8)
b9.gah(b9).hJ()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.d0().bx}}
O.iL.prototype={
$2:function(a,b){return this.b.push(new A.b7(a,C.c.a3(b+3,4)*4))},
$S:6}
O.iM.prototype={
$2:function(a,b){return C.c.ai(a.a,b.a)},
$S:51}
O.iN.prototype={
$2:function(a,b){return this.b.push(new A.b9(a,C.c.a3(b+3,4)*4))},
$S:6}
O.iO.prototype={
$2:function(a,b){return C.c.ai(a.a,b.a)},
$S:52}
O.iP.prototype={
$2:function(a,b){return this.b.push(new A.bh(a,C.c.a3(b+3,4)*4))},
$S:6}
O.iQ.prototype={
$2:function(a,b){return C.c.ai(a.a,b.a)},
$S:53}
O.iR.prototype={
$2:function(a,b){return this.b.push(new A.bj(a,C.c.a3(b+3,4)*4))},
$S:6}
O.iS.prototype={
$2:function(a,b){return C.c.ai(a.a,b.a)},
$S:54}
O.iF.prototype={
aF:function(){var s,r=this
r.cQ()
s=r.f
$.D().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.af(new D.E(r.b,s,1))}}}
O.eI.prototype={
aF:function(){},
dd:function(a){var s,r,q=this
if(!q.c.q(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aF()
s=q.a
s.a=null
s.af(null)}}}
O.iG.prototype={}
O.d_.prototype={
dc:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.af(new D.E(r.b+".color",s,a))}},
aF:function(){this.cQ()
this.dc(new V.Y(1,1,1))},
saH:function(a,b){this.dd(new A.aJ(!0,!1,!1))
this.dc(b)}}
O.iI.prototype={}
O.iJ.prototype={
aF:function(){var s,r=this
r.cR()
s=r.ch
$.D().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.af(new D.E(r.b+".refraction",s,1))}}}
O.iK.prototype={
de:function(a){var s=this,r=s.ch
$.D().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.af(new D.E(s.b+".shininess",r,a))}},
aF:function(){this.cR()
this.de(100)}}
O.di.prototype={}
X.iq.prototype={
gv:function(){var s=this.x
return s==null?this.x=D.N():s}}
X.eX.prototype={
gv:function(){var s=this.f
return s==null?this.f=D.N():s},
aS:function(a){var s=this.f
return s==null?null:s.H(a)},
eM:function(){return this.aS(null)},
saL:function(a){var s,r,q=this
if(!J.K(q.b,a)){s=q.b
if(s!=null)s.gv().N(0,q.gcW())
r=q.b
q.b=a
if(a!=null)a.gv().n(0,q.gcW())
q.aS(new D.E("mover",r,q.b))}}}
X.ji.prototype={}
V.aI.prototype={
br:function(a){this.b=new P.is(C.S)
this.c=null
this.d=H.b([],t.F)},
O:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.b([],t.C))
s=a.split("\n")
for(j=s.length,r=t.C,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.b([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.eY(o,0,o.length)
l=m==null?o:m
l=H.lB(l," ","&nbsp;")
C.Q.ep(n,l)
l=n.style
l.color=b
C.b.gaA(k.d).push(n)}},
e8:function(a,b){var s,r,q,p=this
p.d=H.b([],t.F)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bw()
if(r!=null)for(q=new H.r(s),q=new P.bK(r.cK(new H.bg(q,q.gl(q))).a());q.u();)p.bD(q.gC(q))}}
V.kQ.prototype={
$1:function(a){var s=C.d.cJ(this.a.ghU(),2)
if(s!=="0.00")P.lA(s+" fps")},
$S:55}
V.en.prototype={
bD:function(a){var s=this
switch(a.a){case"Class":s.O(a.b,"#551")
break
case"Comment":s.O(a.b,"#777")
break
case"Id":s.O(a.b,"#111")
break
case"Num":s.O(a.b,"#191")
break
case"Reserved":s.O(a.b,"#119")
break
case"String":s.O(a.b,"#171")
break
case"Symbol":s.O(a.b,"#616")
break
case"Type":s.O(a.b,"#B11")
break
case"Whitespace":s.O(a.b,"#111")
break}},
bw:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()\\-+*%!&|=.,?:;",h="OpenDoubleStr",g="CloseDoubleStr",f="EscDoubleStr",e="OpenSingleStr",d="CloseSingleStr",c="EscSingleStr",b="Slash",a="Comment",a0="EndComment",a1="MLComment",a2="MLCStar",a3="Whitespace",a4=L.jn()
a4.d=a4.k(0,o)
s=a4.k(0,o).j(0,n)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
s=a4.k(0,n).j(0,n)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("0","9"))
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
a4.k(0,o).j(0,m).a.push(K.R("0","9"))
a4.k(0,m).j(0,m).a.push(K.R("0","9"))
s=a4.k(0,m).j(0,l)
q=new K.u(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
a4.k(0,l).j(0,k).a.push(K.R("0","9"))
a4.k(0,k).j(0,k).a.push(K.R("0","9"))
q=a4.k(0,o).j(0,j)
s=new K.u(H.b([],r))
s.p(new H.r(i))
q.a.push(s)
s=a4.k(0,j).j(0,j)
q=new K.u(H.b([],r))
q.p(new H.r(i))
s.a.push(q)
q=a4.k(0,o).j(0,h)
s=new K.u(H.b([],r))
s.p(new H.r('"'))
q.a.push(s)
s=a4.k(0,h).j(0,g)
q=new K.u(H.b([],r))
q.p(new H.r('"'))
s.a.push(q)
q=a4.k(0,h).j(0,f)
s=new K.u(H.b([],r))
s.p(new H.r("\\"))
q.a.push(s)
s=a4.k(0,f).j(0,h)
q=new K.u(H.b([],r))
q.p(new H.r('"'))
s.a.push(q)
a4.k(0,h).j(0,h).a.push(new K.aO())
q=a4.k(0,o).j(0,e)
s=new K.u(H.b([],r))
s.p(new H.r("'"))
q.a.push(s)
s=a4.k(0,e).j(0,d)
q=new K.u(H.b([],r))
q.p(new H.r("'"))
s.a.push(q)
q=a4.k(0,e).j(0,c)
s=new K.u(H.b([],r))
s.p(new H.r("\\"))
q.a.push(s)
s=a4.k(0,c).j(0,e)
q=new K.u(H.b([],r))
q.p(new H.r("'"))
s.a.push(q)
a4.k(0,e).j(0,e).a.push(new K.aO())
q=a4.k(0,o).j(0,b)
s=new K.u(H.b([],r))
s.p(new H.r("/"))
q.a.push(s)
s=a4.k(0,b).j(0,a)
q=new K.u(H.b([],r))
q.p(new H.r("/"))
s.a.push(q)
q=a4.k(0,a).j(0,a0)
s=new K.u(H.b([],r))
s.p(new H.r("\n"))
q.a.push(s)
s=a4.k(0,a).j(0,a)
q=t.z
p=H.b([],q)
s.a.push(new K.ae(p))
s=new K.u(H.b([],r))
s.p(new H.r("\n"))
p.push(s)
s=a4.k(0,b).j(0,a1)
p=new K.u(H.b([],r))
p.p(new H.r("*"))
s.a.push(p)
p=a4.k(0,a1).j(0,a2)
s=new K.u(H.b([],r))
s.p(new H.r("*"))
p.a.push(s)
s=a4.k(0,a2).j(0,a1)
q=H.b([],q)
s.a.push(new K.ae(q))
s=new K.u(H.b([],r))
s.p(new H.r("*"))
q.push(s)
s=a4.k(0,a2).j(0,a0)
q=new K.u(H.b([],r))
q.p(new H.r("/"))
s.a.push(q)
q=a4.k(0,o).j(0,a3)
s=new K.u(H.b([],r))
s.p(new H.r(" \n\t"))
q.a.push(s)
s=a4.k(0,a3).j(0,a3)
r=new K.u(H.b([],r))
r.p(new H.r(" \n\t"))
s.a.push(r)
r=a4.k(0,m)
r.d=r.a.P("Num")
r=a4.k(0,k)
r.d=r.a.P("Num")
r=a4.k(0,j)
r.d=r.a.P("Symbol")
r=a4.k(0,g)
r.d=r.a.P("String")
r=a4.k(0,d)
r.d=r.a.P("String")
r=a4.k(0,a0)
r.d=r.a.P(a)
r=a4.k(0,a3)
r.d=r.a.P(a3)
r=a4.k(0,n)
r=r.d=r.a.P(n)
s=t.s
r.aM(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aM(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aM(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a4}}
V.eu.prototype={
bD:function(a){var s=this
switch(a.a){case"Builtin":s.O(a.b,"#411")
break
case"Comment":s.O(a.b,"#777")
break
case"Id":s.O(a.b,"#111")
break
case"Num":s.O(a.b,"#191")
break
case"Preprocess":s.O(a.b,"#737")
break
case"Reserved":s.O(a.b,"#119")
break
case"Symbol":s.O(a.b,"#611")
break
case"Type":s.O(a.b,"#171")
break
case"Whitespace":s.O(a.b,"#111")
break}},
bw:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()[]\\-+*%!&|=.,?:;",h="Slash",g="Comment",f="EndComment",e="Preprocess",d="EndPreprocess",c="Whitespace",b=L.jn()
b.d=b.k(0,o)
s=b.k(0,o).j(0,n)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
s=b.k(0,n).j(0,n)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("0","9"))
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
b.k(0,o).j(0,m).a.push(K.R("0","9"))
b.k(0,m).j(0,m).a.push(K.R("0","9"))
s=b.k(0,m).j(0,l)
q=new K.u(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
b.k(0,l).j(0,k).a.push(K.R("0","9"))
b.k(0,k).j(0,k).a.push(K.R("0","9"))
q=b.k(0,o).j(0,j)
s=new K.u(H.b([],r))
s.p(new H.r(i))
q.a.push(s)
s=b.k(0,j).j(0,j)
q=new K.u(H.b([],r))
q.p(new H.r(i))
s.a.push(q)
q=b.k(0,o).j(0,h)
s=new K.u(H.b([],r))
s.p(new H.r("/"))
q.a.push(s)
s=b.k(0,h).j(0,g)
q=new K.u(H.b([],r))
q.p(new H.r("/"))
s.a.push(q)
b.k(0,h).j(0,j).a.push(new K.aO())
q=b.k(0,g).j(0,f)
s=new K.u(H.b([],r))
s.p(new H.r("\n"))
q.a.push(s)
s=b.k(0,g).j(0,g)
q=t.z
p=H.b([],q)
s.a.push(new K.ae(p))
s=new K.u(H.b([],r))
s.p(new H.r("\n"))
p.push(s)
s=b.k(0,o).j(0,e)
p=new K.u(H.b([],r))
p.p(new H.r("#"))
s.a.push(p)
p=b.k(0,e).j(0,e)
q=H.b([],q)
p.a.push(new K.ae(q))
p=new K.u(H.b([],r))
p.p(new H.r("\n"))
q.push(p)
p=b.k(0,e).j(0,d)
q=new K.u(H.b([],r))
q.p(new H.r("\n"))
p.a.push(q)
q=b.k(0,o).j(0,c)
p=new K.u(H.b([],r))
p.p(new H.r(" \n\t"))
q.a.push(p)
p=b.k(0,c).j(0,c)
r=new K.u(H.b([],r))
r.p(new H.r(" \n\t"))
p.a.push(r)
r=b.k(0,m)
r.d=r.a.P("Num")
r=b.k(0,k)
r.d=r.a.P("Num")
r=b.k(0,j)
r.d=r.a.P("Symbol")
r=b.k(0,f)
r.d=r.a.P(g)
r=b.k(0,d)
r.d=r.a.P(e)
r=b.k(0,c)
r.d=r.a.P(c)
r=b.k(0,n)
r=r.d=r.a.P(n)
p=t.s
r.aM(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],p))
r.aM(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],p))
r.aM(0,"Builtin",H.b(["gl_FragColor","gl_Position"],p))
return b}}
V.ev.prototype={
bD:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.O(a.b,"#911")
s.O("=",r)
break
case"Id":s.O(a.b,r)
break
case"Other":s.O(a.b,r)
break
case"Reserved":s.O(a.b,"#119")
break
case"String":s.O(a.b,"#171")
break
case"Symbol":s.O(a.b,"#616")
break}},
bw:function(){var s,r,q,p="Start",o="Id",n="Attr",m="Sym",l="OpenStr",k="CloseStr",j="Other",i=L.jn()
i.d=i.k(0,p)
s=i.k(0,p).j(0,o)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
s=i.k(0,o).j(0,o)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("0","9"))
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
s=i.k(0,o).j(0,n)
q=new K.u(H.b([],r))
q.p(new H.r("="))
s.a.push(q)
s.c=!0
s=i.k(0,p).j(0,m)
q=new K.u(H.b([],r))
q.p(new H.r("</\\-!>="))
s.a.push(q)
q=i.k(0,m).j(0,m)
s=new K.u(H.b([],r))
s.p(new H.r("</\\-!>="))
q.a.push(s)
s=i.k(0,p).j(0,l)
q=new K.u(H.b([],r))
q.p(new H.r('"'))
s.a.push(q)
q=i.k(0,l).j(0,k)
s=new K.u(H.b([],r))
s.p(new H.r('"'))
q.a.push(s)
s=i.k(0,l).j(0,"EscStr")
q=new K.u(H.b([],r))
q.p(new H.r("\\"))
s.a.push(q)
q=i.k(0,"EscStr").j(0,l)
s=new K.u(H.b([],r))
s.p(new H.r('"'))
q.a.push(s)
i.k(0,l).j(0,l).a.push(new K.aO())
i.k(0,p).j(0,j).a.push(new K.aO())
s=i.k(0,j).j(0,j)
q=H.b([],t.z)
s.a.push(new K.ae(q))
r=new K.u(H.b([],r))
r.p(new H.r('</\\-!>=_"'))
q.push(r)
q.push(K.R("a","z"))
q.push(K.R("A","Z"))
q=i.k(0,m)
q.d=q.a.P("Symbol")
q=i.k(0,k)
q.d=q.a.P("String")
q=i.k(0,o)
r=q.a.P(o)
q.d=r
r.aM(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],t.s))
r=i.k(0,n)
r.d=r.a.P(n)
r=i.k(0,j)
r.d=r.a.P(j)
return i}}
V.eZ.prototype={
e8:function(a,b){this.d=H.b([],t.F)
this.O(C.b.j(b,"\n"),"#111")},
bD:function(a){},
bw:function(){return null}}
V.j2.prototype={
dl:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.me().gcF().h(0,k)
if(j==null)if(d){c.$0()
l.dj(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.b4(p)
o.gbv(p).n(0,q)
n=W.nU("radio")
n.checked=s
n.name=k
W.a7(n,"change",new V.j3(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gbv(p)
r=r.createElement("br")
r.toString
p.n(0,r)},
bd:function(a,b,c){return this.dl(a,b,c,!1)},
dj:function(a){var s,r,q=P.me(),p=t.N,o=P.o2(q.gcF(),p,p)
o.m(0,this.a,a)
s=q.ee(0,o)
p=window.history
p.toString
r=s.gca()
p.replaceState(new P.k2([],[]).bH(""),"",r)}}
V.j3.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.dj(s.d)}},
$S:3}
V.jb.prototype={
dn:function(a){var s,r,q,p,o,n,m=this.hb(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.r(C.b.hY(a)),s=new P.bK(m.cK(new H.bg(s,s.gl(s))).a());s.u();){r=s.gC(s)
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
if(H.n7(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.ka(C.w,r,C.e,!1)
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
en:function(a){var s,r,q,p=t.F,o=new V.en("dart",H.b([],p))
o.br("dart")
s=new V.eu("glsl",H.b([],p))
s.br("glsl")
r=new V.ev("html",H.b([],p))
r.br("html")
q=C.b.hQ(H.b([o,s,r],t.g6),new V.je(a))
if(q!=null)return q
p=new V.eZ("plain",H.b([],p))
p.br("plain")
return p},
dm:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.b([],t.t)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.a1(q,"+")){b2[r]=C.a.aa(q,1)
a8.push(1)
s=!0}else if(C.a.a1(q,"-")){b2[r]=C.a.aa(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.en(b0)
p.e8(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.ka(C.w,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lH()
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
for(a4=C.b.gR(q);a4.u();)b.appendChild(a4.gC(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
hm:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
hb:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
f=L.jn()
f.d=f.k(0,o)
s=f.k(0,o).j(0,n)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("*"))
s.a.push(q)
s.c=!0
s=f.k(0,n).j(0,n)
q=t.z
p=H.b([],q)
s.a.push(new K.ae(p))
s=new K.u(H.b([],r))
s.p(new H.r("*"))
p.push(s)
s=f.k(0,n).j(0,"BoldEnd")
p=new K.u(H.b([],r))
p.p(new H.r("*"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,m)
p=new K.u(H.b([],r))
p.p(new H.r("_"))
s.a.push(p)
s.c=!0
s=f.k(0,m).j(0,m)
p=H.b([],q)
s.a.push(new K.ae(p))
s=new K.u(H.b([],r))
s.p(new H.r("_"))
p.push(s)
s=f.k(0,m).j(0,l)
p=new K.u(H.b([],r))
p.p(new H.r("_"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,k)
p=new K.u(H.b([],r))
p.p(new H.r("`"))
s.a.push(p)
s.c=!0
s=f.k(0,k).j(0,k)
p=H.b([],q)
s.a.push(new K.ae(p))
s=new K.u(H.b([],r))
s.p(new H.r("`"))
p.push(s)
s=f.k(0,k).j(0,"CodeEnd")
p=new K.u(H.b([],r))
p.p(new H.r("`"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,j)
p=new K.u(H.b([],r))
p.p(new H.r("["))
s.a.push(p)
s.c=!0
s=f.k(0,j).j(0,i)
p=new K.u(H.b([],r))
p.p(new H.r("|"))
s.a.push(p)
p=f.k(0,j).j(0,h)
s=new K.u(H.b([],r))
s.p(new H.r("]"))
p.a.push(s)
p.c=!0
p=f.k(0,j).j(0,j)
s=H.b([],q)
p.a.push(new K.ae(s))
p=new K.u(H.b([],r))
p.p(new H.r("|]"))
s.push(p)
p=f.k(0,i).j(0,h)
s=new K.u(H.b([],r))
s.p(new H.r("]"))
p.a.push(s)
p.c=!0
p=f.k(0,i).j(0,i)
s=H.b([],q)
p.a.push(new K.ae(s))
p=new K.u(H.b([],r))
p.p(new H.r("|]"))
s.push(p)
f.k(0,o).j(0,g).a.push(new K.aO())
p=f.k(0,g).j(0,g)
q=H.b([],q)
p.a.push(new K.ae(q))
r=new K.u(H.b([],r))
r.p(new H.r("*_`["))
q.push(r)
r=f.k(0,"BoldEnd")
r.d=r.a.P(n)
r=f.k(0,l)
r.d=r.a.P(m)
r=f.k(0,"CodeEnd")
r.d=r.a.P(k)
r=f.k(0,h)
r.d=r.a.P("Link")
r=f.k(0,g)
r.d=r.a.P(g)
return this.b=f}}
V.jd.prototype={
$1:function(a){P.ma(C.m,new V.jc(this.a))},
$S:3}
V.jc.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.as(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.y(-0.01*s)+"px"
q.top=r},
$S:2}
V.je.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:56}
U.kI.prototype={
$0:function(){this.a.sae(0,F.lv(1,null,null,1))},
$S:2}
U.kJ.prototype={
$0:function(){this.a.sae(0,F.mV(!0,40,1))},
$S:2}
U.kK.prototype={
$0:function(){this.a.sae(0,F.mV(!1,40,0))},
$S:2}
U.kL.prototype={
$0:function(){this.a.sae(0,F.n6(6,6))},
$S:2}
U.kM.prototype={
$0:function(){this.a.sae(0,F.n8())},
$S:2}
U.kN.prototype={
$0:function(){this.a.sae(0,F.qk())},
$S:2}
U.kO.prototype={
$1:function(a){var s,r=this.a,q=this.b,p=q.a
p=p==null?null:p.c
s=t.s
r.dm("Vertex Shader","glsl",0,H.b((p==null?"":p).split("\n"),s))
q=q.a
q=q==null?null:q.d
r.dm("Fragment Shader","glsl",0,H.b((q==null?"":q).split("\n"),s))},
$S:1};(function aliases(){var s=J.a.prototype
s.es=s.i
s=J.bf.prototype
s.ev=s.i
s=P.j.prototype
s.eu=s.bI
s=W.F.prototype
s.bL=s.aj
s=W.dO.prototype
s.ew=s.ax
s=K.cJ.prototype
s.er=s.aK
s.bM=s.i
s=O.eI.prototype
s.cQ=s.aF
s=O.d_.prototype
s.cR=s.aF})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"po","nZ",57)
r(P,"q2","oA",15)
r(P,"q3","oB",15)
r(P,"q4","oC",15)
q(P,"mT","pY",2)
r(W,"rB","id",59)
p(W,"qd",4,null,["$4"],["oD"],20,0)
p(W,"qe",4,null,["$4"],["oE"],20,0)
var j
o(j=E.bz.prototype,"ge4",0,0,null,["$1","$0"],["e5","i7"],0,0)
o(j,"ge6",0,0,null,["$1","$0"],["e7","i8"],0,0)
o(j,"ge2",0,0,null,["$1","$0"],["e3","i6"],0,0)
o(j,"ge0",0,0,null,["$1","$0"],["e1","i3"],0,0)
n(j,"gi1","i2",7)
n(j,"gi4","i5",7)
o(j=E.fn.prototype,"gcS",0,0,null,["$1","$0"],["cU","cT"],0,0)
m(j,"gio","ef",2)
l(j=X.fE.prototype,"gfu","fv",3)
l(j,"gfh","fi",3)
l(j,"gfn","fo",4)
l(j,"gfA","fB",27)
l(j,"gfw","fz",27)
l(j,"gfE","fF",4)
l(j,"gfI","fJ",4)
l(j,"gfs","ft",4)
l(j,"gfG","fH",4)
l(j,"gfp","fq",4)
l(j,"gfK","fL",36)
l(j,"gfM","fN",3)
l(j,"gfZ","h_",12)
l(j,"gfV","fW",12)
l(j,"gfX","fY",12)
o(j=D.cP.prototype,"gd6",0,0,null,["$1","$0"],["d7","fC"],0,0)
l(j,"gfP","fQ",38)
n(j,"gfb","fc",22)
n(j,"gfT","fU",22)
o(D.c4.prototype,"geD",0,0,null,["$1","$0"],["ab","eE"],0,0)
k(V.a5.prototype,"gl","bg",14)
k(V.G.prototype,"gl","bg",14)
k(V.dA.prototype,"gl","bg",14)
o(j=U.bW.prototype,"gaV",0,0,null,["$1","$0"],["L","a9"],0,0)
n(j,"geF","eG",19)
n(j,"gfR","fS",19)
o(j=U.dw.prototype,"gaV",0,0,null,["$1","$0"],["L","a9"],0,0)
l(j,"gbW","bX",11)
l(j,"gbY","bZ",11)
l(j,"gc_","c0",11)
o(j=U.dx.prototype,"gaV",0,0,null,["$1","$0"],["L","a9"],0,0)
l(j,"gbW","bX",1)
l(j,"gbY","bZ",1)
l(j,"gc_","c0",1)
l(j,"gf3","f4",1)
l(j,"gf5","f6",1)
l(j,"ghi","hj",1)
l(j,"ghg","hh",1)
l(j,"ghe","hf",1)
l(U.dy.prototype,"gf8","f9",1)
o(j=M.eq.prototype,"gaw",0,0,null,["$1","$0"],["aC","eH"],0,0)
n(j,"gfj","fk",7)
n(j,"gfl","fm",7)
o(j=O.cZ.prototype,"gcV",0,0,null,["$1","$0"],["af","eJ"],0,0)
o(j,"gd8",0,0,null,["$1","$0"],["d9","h5"],0,0)
n(j,"gfd","fe",21)
n(j,"gff","fg",21)
o(X.eX.prototype,"gcW",0,0,null,["$1","$0"],["aS","eM"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.Q,null)
q(P.Q,[H.l4,J.a,J.ag,P.L,P.dH,P.j,H.bg,P.ex,H.cG,H.fB,H.cz,H.jq,H.j0,H.hn,H.bx,P.M,H.iz,H.eF,H.eA,H.aB,H.h_,P.dU,P.cl,P.bK,P.fJ,P.c8,P.ff,P.ke,P.e_,P.jV,P.dG,P.k,P.hC,P.cX,P.dc,P.ei,P.it,P.kc,P.kb,P.Z,P.by,P.eW,P.dg,P.fX,P.ip,P.aj,P.a0,P.bL,P.jv,P.hh,W.i4,W.l_,W.le,W.ck,W.O,W.d5,W.dO,W.hs,W.cH,W.jZ,W.hD,P.k1,P.hf,K.aO,K.cJ,K.f2,K.u,L.fc,L.fo,L.fp,L.jm,O.ao,O.d0,E.hZ,E.bz,E.bS,E.c3,E.fV,E.j4,E.fn,Z.fH,Z.jN,Z.cw,Z.bX,Z.bJ,D.i0,D.bU,D.T,X.cx,X.eC,X.ix,X.iD,X.a9,X.iX,X.jo,X.fE,D.c4,V.Y,V.aQ,V.ih,V.eK,V.aW,V.a2,V.V,V.bE,V.f4,V.a5,V.G,V.dA,U.dw,U.dx,U.dy,M.eq,A.ef,A.hU,A.aJ,A.b7,A.b9,A.bh,A.bj,A.iH,A.dp,A.dq,A.ds,A.dv,A.a3,A.jt,F.av,F.il,F.eE,F.iy,F.f0,F.j9,F.de,F.df,F.bF,F.cf,F.z,F.cg,F.ch,F.jJ,F.jK,F.dB,O.di,O.eI,O.iI,X.ji,X.eX,V.aI,V.j2,V.jb])
q(J.a,[J.ey,J.cN,J.bf,J.w,J.bZ,J.be,H.d1,H.a1,W.e,W.hS,W.bu,W.aR,W.J,W.fO,W.au,W.i7,W.i8,W.fQ,W.cD,W.fS,W.i9,W.m,W.fY,W.aw,W.ir,W.h1,W.cK,W.iC,W.iU,W.h5,W.h6,W.ay,W.h7,W.h9,W.az,W.hd,W.hg,W.aC,W.hi,W.aD,W.ho,W.al,W.hu,W.jk,W.as,W.hw,W.jp,W.jA,W.hE,W.hG,W.hI,W.hK,W.hM,P.aT,P.h3,P.aY,P.hb,P.j1,P.hp,P.b_,P.hy,P.hV,P.fL,P.da,P.hl])
q(J.bf,[J.eY,J.bH,J.aS])
r(J.iv,J.w)
q(J.bZ,[J.cM,J.ez])
q(P.L,[H.cO,P.fs,H.eB,H.fA,H.f6,H.fW,P.ee,P.eT,P.aG,P.fC,P.fz,P.c7,P.ej,P.em])
r(P.cS,P.dH)
q(P.cS,[H.cd,W.fM,W.a6,P.es])
r(H.r,H.cd)
q(P.j,[H.n,H.aU,H.b2,P.cL])
q(H.n,[H.cT,H.cQ])
r(H.cE,H.aU)
q(P.ex,[H.eG,H.fI])
r(H.cY,H.cT)
r(H.cA,H.cz)
r(H.d6,P.fs)
q(H.bx,[H.fk,H.iw,H.kC,H.kD,H.kE,P.jP,P.jO,P.jQ,P.jR,P.k7,P.k6,P.ks,P.jX,P.jY,P.iA,P.iE,P.jE,P.jD,P.ia,P.ib,P.jz,P.jw,P.jx,P.jy,P.k9,P.k8,P.kl,P.km,P.kn,W.ic,W.iV,W.iW,W.j8,W.jg,W.jS,W.iZ,W.iY,W.k_,W.k0,W.k5,W.kd,P.k3,P.k4,P.kj,P.kt,P.im,P.io,P.hW,E.j5,E.j6,E.j7,E.jj,D.ij,D.ik,F.kf,F.ku,F.kw,F.kx,F.ky,F.kS,F.kR,F.kT,F.kH,F.kv,F.ja,F.jM,F.jL,F.jG,F.jH,O.iL,O.iM,O.iN,O.iO,O.iP,O.iQ,O.iR,O.iS,V.kQ,V.j3,V.jd,V.jc,V.je,U.kI,U.kJ,U.kK,U.kL,U.kM,U.kN,U.kO])
q(H.fk,[H.fd,H.bR])
r(P.cW,P.M)
q(P.cW,[H.X,W.fK])
r(H.c2,H.a1)
q(H.c2,[H.dJ,H.dL])
r(H.dK,H.dJ)
r(H.bC,H.dK)
r(H.dM,H.dL)
r(H.d2,H.dM)
q(H.d2,[H.eO,H.eP,H.eQ,H.eR,H.eS,H.d3,H.bD])
r(H.dV,H.fW)
r(P.dR,P.cL)
r(P.jW,P.ke)
r(P.dN,P.e_)
r(P.dF,P.dN)
r(P.dY,P.cX)
r(P.ce,P.dY)
q(P.ei,[P.hX,P.ie])
r(P.el,P.ff)
q(P.el,[P.hY,P.is,P.jF,P.jC])
r(P.jB,P.ie)
q(P.aG,[P.d9,P.ew])
r(P.fP,P.bL)
q(W.e,[W.t,W.er,W.c_,W.aq,W.dP,W.ar,W.af,W.dS,W.fG,W.ci,P.eh,P.b8])
q(W.t,[W.F,W.aH,W.cj])
q(W.F,[W.v,P.o])
q(W.v,[W.ec,W.ed,W.bQ,W.bv,W.bw,W.ba,W.et,W.bY,W.f7,W.bk,W.dh,W.fi,W.fj,W.c9])
r(W.i3,W.aR)
r(W.cB,W.fO)
q(W.au,[W.i5,W.i6])
r(W.fR,W.fQ)
r(W.cC,W.fR)
r(W.fT,W.fS)
r(W.ep,W.fT)
r(W.ah,W.bu)
r(W.fZ,W.fY)
r(W.bV,W.fZ)
r(W.h2,W.h1)
r(W.bA,W.h2)
r(W.b1,W.m)
q(W.b1,[W.bB,W.ap,W.bG])
r(W.eL,W.h5)
r(W.eM,W.h6)
r(W.h8,W.h7)
r(W.eN,W.h8)
r(W.ha,W.h9)
r(W.d4,W.ha)
r(W.he,W.hd)
r(W.f_,W.he)
r(W.f5,W.hg)
r(W.dQ,W.dP)
r(W.f9,W.dQ)
r(W.hj,W.hi)
r(W.fa,W.hj)
r(W.fe,W.ho)
r(W.hv,W.hu)
r(W.fl,W.hv)
r(W.dT,W.dS)
r(W.fm,W.dT)
r(W.hx,W.hw)
r(W.fq,W.hx)
r(W.bl,W.ap)
r(W.hF,W.hE)
r(W.fN,W.hF)
r(W.dC,W.cD)
r(W.hH,W.hG)
r(W.h0,W.hH)
r(W.hJ,W.hI)
r(W.dI,W.hJ)
r(W.hL,W.hK)
r(W.hk,W.hL)
r(W.hN,W.hM)
r(W.hr,W.hN)
r(W.fU,W.fK)
r(W.dD,P.c8)
r(W.ht,W.dO)
r(P.k2,P.k1)
r(P.ab,P.hf)
r(P.h4,P.h3)
r(P.eD,P.h4)
r(P.hc,P.hb)
r(P.eU,P.hc)
r(P.c6,P.o)
r(P.hq,P.hp)
r(P.fg,P.hq)
r(P.hz,P.hy)
r(P.fr,P.hz)
r(P.eg,P.fL)
r(P.eV,P.b8)
r(P.hm,P.hl)
r(P.fb,P.hm)
q(K.cJ,[K.ae,L.dk])
q(E.hZ,[Z.bT,A.dd])
q(D.T,[D.bc,D.bd,D.E,X.f1])
q(X.f1,[X.cV,X.c0,X.c1,X.dj])
q(O.ao,[D.cP,U.bW])
q(D.i0,[U.i1,U.a_])
q(U.a_,[U.cy,U.db])
r(A.eH,A.dd)
q(A.a3,[A.cb,A.fv,A.fw,A.fx,A.ft,A.dl,A.fu,A.dm,A.dn,A.fy,A.dr,A.cc,A.dt,A.du])
r(F.jf,F.il)
r(F.js,F.iy)
r(F.jI,F.jJ)
r(F.j_,F.jK)
r(O.cZ,O.di)
q(O.eI,[O.iF,O.iG,O.d_])
q(O.d_,[O.iJ,O.iK])
r(X.iq,X.ji)
q(V.aI,[V.en,V.eu,V.ev,V.eZ])
s(H.cd,H.fB)
s(H.dJ,P.k)
s(H.dK,H.cG)
s(H.dL,P.k)
s(H.dM,H.cG)
s(P.dH,P.k)
s(P.dY,P.hC)
s(P.e_,P.dc)
s(W.fO,W.i4)
s(W.fQ,P.k)
s(W.fR,W.O)
s(W.fS,P.k)
s(W.fT,W.O)
s(W.fY,P.k)
s(W.fZ,W.O)
s(W.h1,P.k)
s(W.h2,W.O)
s(W.h5,P.M)
s(W.h6,P.M)
s(W.h7,P.k)
s(W.h8,W.O)
s(W.h9,P.k)
s(W.ha,W.O)
s(W.hd,P.k)
s(W.he,W.O)
s(W.hg,P.M)
s(W.dP,P.k)
s(W.dQ,W.O)
s(W.hi,P.k)
s(W.hj,W.O)
s(W.ho,P.M)
s(W.hu,P.k)
s(W.hv,W.O)
s(W.dS,P.k)
s(W.dT,W.O)
s(W.hw,P.k)
s(W.hx,W.O)
s(W.hE,P.k)
s(W.hF,W.O)
s(W.hG,P.k)
s(W.hH,W.O)
s(W.hI,P.k)
s(W.hJ,W.O)
s(W.hK,P.k)
s(W.hL,W.O)
s(W.hM,P.k)
s(W.hN,W.O)
s(P.h3,P.k)
s(P.h4,W.O)
s(P.hb,P.k)
s(P.hc,W.O)
s(P.hp,P.k)
s(P.hq,W.O)
s(P.hy,P.k)
s(P.hz,W.O)
s(P.fL,P.M)
s(P.hl,P.k)
s(P.hm,W.O)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",H:"double",a4:"num",l:"String",ad:"bool",aj:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([T?])","~(T)","~()","~(m)","~(ap)","~(l,@)","~(i,i)","~(i,j<bz>)","~(cf,H,H)","~(av)","~(@,@)","~(T?)","~(bG)","aj()","H()","~(~())","H(H)","@()","H(H,H)","~(i,j<a_?>)","ad(F,l,l,ck)","~(i,j<aW>)","~(i,j<ax>)","~(ca,l,i)","ad(t)","ad(aL)","ad(l)","~(bB)","V(H)","~(~(T))","l(i)","~(@)","~(a4)","aj(@,@)","~(t,t?)","l(l)","~(bl)","@(@)","ad(j<ax>)","ca(@,@)","~(l,l?)","i(i,i)","~(l[@])","~(l,i)","I<l,l>(I<l,l>,l)","~(Q?,Q?)","aj(~())","bT(i)","aj(@)","@(l)","~(l,l)","i(b7,b7)","i(b9,b9)","i(bh,bh)","i(bj,bj)","~(jl)","ad(aI?)","i(@,@)","@(@,l)","l(e)","F(t)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oW(v.typeUniverse,JSON.parse('{"eY":"bf","bH":"bf","aS":"bf","qv":"m","qH":"m","qx":"b8","qw":"e","qO":"e","qR":"e","qu":"o","qI":"o","qy":"v","qL":"v","qJ":"t","qG":"t","rh":"af","qC":"b1","qz":"aH","qS":"aH","qQ":"ap","qK":"bA","qD":"J","qE":"al","qN":"bC","qM":"a1","ey":{"ad":[]},"bf":{"lR":[]},"w":{"p":["1"],"n":["1"],"j":["1"],"A":["1"]},"iv":{"w":["1"],"p":["1"],"n":["1"],"j":["1"],"A":["1"]},"bZ":{"H":[],"a4":[]},"cM":{"H":[],"i":[],"a4":[]},"ez":{"H":[],"a4":[]},"be":{"l":[],"A":["@"]},"cO":{"L":[]},"r":{"k":["i"],"p":["i"],"n":["i"],"j":["i"],"k.E":"i"},"n":{"j":["1"]},"cT":{"n":["1"],"j":["1"]},"aU":{"j":["2"],"j.E":"2"},"cE":{"aU":["1","2"],"n":["2"],"j":["2"],"j.E":"2"},"cY":{"cT":["2"],"n":["2"],"j":["2"],"j.E":"2"},"b2":{"j":["1"],"j.E":"1"},"cd":{"k":["1"],"p":["1"],"n":["1"],"j":["1"]},"cz":{"I":["1","2"]},"cA":{"I":["1","2"]},"d6":{"L":[]},"eB":{"L":[]},"fA":{"L":[]},"bx":{"cI":[]},"fk":{"cI":[]},"fd":{"cI":[]},"bR":{"cI":[]},"f6":{"L":[]},"X":{"M":["1","2"],"I":["1","2"],"M.V":"2"},"cQ":{"n":["1"],"j":["1"],"j.E":"1"},"eA":{"m2":[]},"c2":{"B":["1"],"a1":[],"A":["1"]},"bC":{"k":["H"],"B":["H"],"p":["H"],"a1":[],"n":["H"],"A":["H"],"j":["H"],"k.E":"H"},"d2":{"k":["i"],"B":["i"],"p":["i"],"a1":[],"n":["i"],"A":["i"],"j":["i"]},"eO":{"k":["i"],"B":["i"],"p":["i"],"a1":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"eP":{"k":["i"],"B":["i"],"p":["i"],"a1":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"eQ":{"k":["i"],"B":["i"],"p":["i"],"a1":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"eR":{"k":["i"],"B":["i"],"p":["i"],"a1":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"eS":{"k":["i"],"B":["i"],"p":["i"],"a1":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"d3":{"k":["i"],"B":["i"],"p":["i"],"a1":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"bD":{"k":["i"],"ca":[],"B":["i"],"p":["i"],"a1":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"fW":{"L":[]},"dV":{"L":[]},"dU":{"jl":[]},"dR":{"j":["1"],"j.E":"1"},"dF":{"dc":["1"],"n":["1"],"j":["1"]},"cL":{"j":["1"]},"cS":{"k":["1"],"p":["1"],"n":["1"],"j":["1"]},"cW":{"M":["1","2"],"I":["1","2"]},"M":{"I":["1","2"]},"cX":{"I":["1","2"]},"ce":{"I":["1","2"]},"dN":{"dc":["1"],"n":["1"],"j":["1"]},"H":{"a4":[]},"i":{"a4":[]},"p":{"n":["1"],"j":["1"]},"ee":{"L":[]},"fs":{"L":[]},"eT":{"L":[]},"aG":{"L":[]},"d9":{"L":[]},"ew":{"L":[]},"fC":{"L":[]},"fz":{"L":[]},"c7":{"L":[]},"ej":{"L":[]},"eW":{"L":[]},"dg":{"L":[]},"em":{"L":[]},"bL":{"fD":[]},"hh":{"fD":[]},"fP":{"fD":[]},"v":{"F":[],"t":[],"e":[]},"ba":{"F":[],"t":[],"e":[]},"F":{"t":[],"e":[]},"ah":{"bu":[]},"bB":{"m":[]},"ap":{"m":[]},"t":{"e":[]},"aq":{"e":[]},"ar":{"e":[]},"af":{"e":[]},"bG":{"m":[]},"b1":{"m":[]},"bl":{"ap":[],"m":[]},"ck":{"aL":[]},"ec":{"F":[],"t":[],"e":[]},"ed":{"F":[],"t":[],"e":[]},"bQ":{"F":[],"t":[],"e":[]},"bv":{"F":[],"t":[],"e":[]},"bw":{"F":[],"t":[],"e":[]},"aH":{"t":[],"e":[]},"cC":{"k":["ab<a4>"],"p":["ab<a4>"],"B":["ab<a4>"],"n":["ab<a4>"],"j":["ab<a4>"],"A":["ab<a4>"],"k.E":"ab<a4>"},"cD":{"ab":["a4"]},"ep":{"k":["l"],"p":["l"],"B":["l"],"n":["l"],"j":["l"],"A":["l"],"k.E":"l"},"fM":{"k":["F"],"p":["F"],"n":["F"],"j":["F"],"k.E":"F"},"bV":{"k":["ah"],"p":["ah"],"B":["ah"],"n":["ah"],"j":["ah"],"A":["ah"],"k.E":"ah"},"er":{"e":[]},"et":{"F":[],"t":[],"e":[]},"bA":{"k":["t"],"p":["t"],"B":["t"],"n":["t"],"j":["t"],"A":["t"],"k.E":"t"},"bY":{"F":[],"t":[],"e":[]},"c_":{"e":[]},"eL":{"M":["l","@"],"I":["l","@"],"M.V":"@"},"eM":{"M":["l","@"],"I":["l","@"],"M.V":"@"},"eN":{"k":["ay"],"p":["ay"],"B":["ay"],"n":["ay"],"j":["ay"],"A":["ay"],"k.E":"ay"},"a6":{"k":["t"],"p":["t"],"n":["t"],"j":["t"],"k.E":"t"},"d4":{"k":["t"],"p":["t"],"B":["t"],"n":["t"],"j":["t"],"A":["t"],"k.E":"t"},"f_":{"k":["az"],"p":["az"],"B":["az"],"n":["az"],"j":["az"],"A":["az"],"k.E":"az"},"f5":{"M":["l","@"],"I":["l","@"],"M.V":"@"},"f7":{"F":[],"t":[],"e":[]},"f9":{"k":["aq"],"p":["aq"],"B":["aq"],"e":[],"n":["aq"],"j":["aq"],"A":["aq"],"k.E":"aq"},"fa":{"k":["aC"],"p":["aC"],"B":["aC"],"n":["aC"],"j":["aC"],"A":["aC"],"k.E":"aC"},"fe":{"M":["l","l"],"I":["l","l"],"M.V":"l"},"bk":{"F":[],"t":[],"e":[]},"dh":{"F":[],"t":[],"e":[]},"fi":{"F":[],"t":[],"e":[]},"fj":{"F":[],"t":[],"e":[]},"c9":{"F":[],"t":[],"e":[]},"fl":{"k":["af"],"p":["af"],"B":["af"],"n":["af"],"j":["af"],"A":["af"],"k.E":"af"},"fm":{"k":["ar"],"p":["ar"],"B":["ar"],"e":[],"n":["ar"],"j":["ar"],"A":["ar"],"k.E":"ar"},"fq":{"k":["as"],"p":["as"],"B":["as"],"n":["as"],"j":["as"],"A":["as"],"k.E":"as"},"fG":{"e":[]},"ci":{"e":[]},"cj":{"t":[],"e":[]},"fN":{"k":["J"],"p":["J"],"B":["J"],"n":["J"],"j":["J"],"A":["J"],"k.E":"J"},"dC":{"ab":["a4"]},"h0":{"k":["aw?"],"p":["aw?"],"B":["aw?"],"n":["aw?"],"j":["aw?"],"A":["aw?"],"k.E":"aw?"},"dI":{"k":["t"],"p":["t"],"B":["t"],"n":["t"],"j":["t"],"A":["t"],"k.E":"t"},"hk":{"k":["aD"],"p":["aD"],"B":["aD"],"n":["aD"],"j":["aD"],"A":["aD"],"k.E":"aD"},"hr":{"k":["al"],"p":["al"],"B":["al"],"n":["al"],"j":["al"],"A":["al"],"k.E":"al"},"fK":{"M":["l","l"],"I":["l","l"]},"fU":{"M":["l","l"],"I":["l","l"],"M.V":"l"},"dD":{"c8":["1"]},"d5":{"aL":[]},"dO":{"aL":[]},"ht":{"aL":[]},"hs":{"aL":[]},"es":{"k":["F"],"p":["F"],"n":["F"],"j":["F"],"k.E":"F"},"ab":{"hf":["1"]},"eD":{"k":["aT"],"p":["aT"],"n":["aT"],"j":["aT"],"k.E":"aT"},"eU":{"k":["aY"],"p":["aY"],"n":["aY"],"j":["aY"],"k.E":"aY"},"c6":{"o":[],"F":[],"t":[],"e":[]},"fg":{"k":["l"],"p":["l"],"n":["l"],"j":["l"],"k.E":"l"},"o":{"F":[],"t":[],"e":[]},"fr":{"k":["b_"],"p":["b_"],"n":["b_"],"j":["b_"],"k.E":"b_"},"eg":{"M":["l","@"],"I":["l","@"],"M.V":"@"},"eh":{"e":[]},"b8":{"e":[]},"eV":{"e":[]},"fb":{"k":["I<@,@>"],"p":["I<@,@>"],"n":["I<@,@>"],"j":["I<@,@>"],"k.E":"I<@,@>"},"cJ":{"aV":[]},"aO":{"aV":[]},"ae":{"aV":[]},"f2":{"aV":[]},"u":{"aV":[]},"dk":{"aV":[]},"ao":{"j":["1"],"ao.T":"1"},"bc":{"T":[]},"bd":{"T":[]},"E":{"T":[]},"cV":{"T":[]},"c0":{"T":[]},"c1":{"T":[]},"f1":{"T":[]},"dj":{"T":[]},"nE":{"ax":[]},"nQ":{"ax":[]},"c4":{"ax":[]},"op":{"ax":[]},"cP":{"ao":["ax"],"j":["ax"],"ao.T":"ax"},"cy":{"a_":[]},"bW":{"ao":["a_?"],"a_":[],"j":["a_?"],"ao.T":"a_?"},"db":{"a_":[]},"dw":{"a_":[]},"dx":{"a_":[]},"dy":{"a_":[]},"cb":{"a3":[]},"cc":{"a3":[]},"eH":{"dd":[]},"fv":{"a3":[]},"fw":{"a3":[]},"fx":{"a3":[]},"ft":{"a3":[]},"dl":{"a3":[]},"fu":{"a3":[]},"dm":{"a3":[]},"dn":{"a3":[]},"fy":{"a3":[]},"dr":{"a3":[]},"dt":{"a3":[]},"du":{"a3":[]},"cZ":{"di":[]},"en":{"aI":[]},"eu":{"aI":[]},"ev":{"aI":[]},"eZ":{"aI":[]},"ca":{"p":["i"],"n":["i"],"j":["i"]}}'))
H.oV(v.typeUniverse,JSON.parse('{"ag":1,"n":1,"bg":1,"eG":2,"fI":1,"cG":1,"fB":1,"cd":1,"cz":2,"eF":1,"c2":1,"c8":1,"bK":1,"ff":2,"dG":1,"cL":1,"cS":1,"cW":2,"hC":2,"cX":2,"dN":1,"dH":1,"dY":2,"e_":1,"ei":2,"el":2,"ex":1,"dD":1,"O":1,"cH":1,"bc":1,"bd":1,"E":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lw
return{cR:s("bQ"),fK:s("bu"),Y:s("bv"),eT:s("bT"),ed:s("cw"),gA:s("bw"),gw:s("n<@>"),h:s("F"),l:s("bz"),bU:s("L"),aD:s("m"),c8:s("ah"),bX:s("bV"),b:s("cI"),gb:s("cK"),gk:s("bY"),eu:s("w<ef>"),i:s("w<nE>"),cn:s("w<b7>"),U:s("w<nQ>"),fD:s("w<b9>"),C:s("w<ba>"),u:s("w<av>"),fv:s("w<bX>"),e:s("w<ax>"),L:s("w<eE>"),F:s("w<p<ba>>"),z:s("w<aV>"),fA:s("w<aW>"),Q:s("w<aL>"),q:s("w<f0>"),cG:s("w<a2>"),eg:s("w<bh>"),o:s("w<c4>"),D:s("w<op>"),c3:s("w<bj>"),g9:s("w<c8<Q>>"),s:s("w<l>"),ga:s("w<qT>"),gT:s("w<as>"),ab:s("w<dk>"),gN:s("w<ca>"),dC:s("w<a3>"),c:s("w<dp>"),V:s("w<dq>"),B:s("w<ds>"),J:s("w<dv>"),k:s("w<cf>"),n:s("w<H>"),gn:s("w<@>"),t:s("w<i>"),g6:s("w<aI?>"),eJ:s("w<a_?>"),bc:s("w<di?>"),p:s("w<cc?>"),a:s("w<~(T)>"),aP:s("A<@>"),T:s("cN"),eH:s("lR"),M:s("aS"),aU:s("B<@>"),fX:s("X<i,ad>"),y:s("X<i,i>"),O:s("p<dp>"),d:s("p<dq>"),m:s("p<ds>"),R:s("p<dv>"),r:s("p<@>"),bv:s("cV"),f:s("I<@,@>"),dv:s("cY<l,l>"),gc:s("aW"),bK:s("c_"),Z:s("c0"),bZ:s("c1"),cH:s("d1"),dE:s("a1"),bm:s("bD"),P:s("aj"),K:s("Q"),I:s("ab<a4>"),fJ:s("m2"),ew:s("c6"),fg:s("dd"),N:s("l"),g7:s("o"),bY:s("bk"),aW:s("c9"),aF:s("jl"),bJ:s("fo"),dr:s("dj"),v:s("dl"),w:s("cb"),g:s("dm"),x:s("dn"),E:s("dr"),j:s("cc"),G:s("dt"),bz:s("du"),ak:s("bH"),dw:s("ce<l,l>"),dD:s("fD"),h9:s("cj"),ac:s("a6"),cJ:s("ad"),gR:s("H"),A:s("@"),S:s("i"),aw:s("0&*"),_:s("Q*"),bG:s("lQ<aj>?"),X:s("Q?"),gW:s("da?"),dl:s("fc?"),f7:s("fp?"),W:s("cb?"),H:s("a4"),h2:s("~(T)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.p=W.bv.prototype
C.l=W.bw.prototype
C.Q=W.ba.prototype
C.T=J.a.prototype
C.b=J.w.prototype
C.c=J.cM.prototype
C.U=J.cN.prototype
C.d=J.bZ.prototype
C.a=J.be.prototype
C.V=J.aS.prototype
C.a_=H.bD.prototype
C.B=J.eY.prototype
C.C=W.dh.prototype
C.o=J.bH.prototype
C.D=W.bl.prototype
C.E=W.ci.prototype
C.F=new E.bS("Browser.chrome")
C.q=new E.bS("Browser.firefox")
C.r=new E.bS("Browser.edge")
C.G=new E.bS("Browser.other")
C.a5=new P.hY()
C.H=new P.hX()
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

C.O=new P.eW()
C.e=new P.jB()
C.P=new P.jF()
C.f=new P.jW()
C.m=new P.by(0)
C.R=new P.by(5e6)
C.S=new P.it("element",!1,!1,!1)
C.i=H.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.W=H.b(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
C.j=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.k=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.X=H.b(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
C.v=H.b(s([]),t.s)
C.Y=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.w=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.x=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.y=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.z=H.b(s(["bind","if","ref","repeat","syntax"]),t.s)
C.n=H.b(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
C.Z=new H.cA(0,{},C.v,H.lw("cA<l,l>"))
C.a0=new E.c3("OperatingSystem.windows")
C.A=new E.c3("OperatingSystem.mac")
C.a1=new E.c3("OperatingSystem.linux")
C.a2=new E.c3("OperatingSystem.other")
C.a3=new P.jC(!1)
C.a4=new P.cl(null,2)})();(function staticFields(){$.jT=null
$.aP=0
$.cv=null
$.lJ=null
$.mZ=null
$.mS=null
$.n4=null
$.kz=null
$.kG=null
$.ly=null
$.cn=null
$.e3=null
$.e4=null
$.lq=!1
$.aM=C.f
$.am=H.b([],H.lw("w<Q>"))
$.bb=null
$.kY=null
$.lP=null
$.lO=null
$.dE=P.U(t.N,t.b)
$.ig=null
$.lU=null
$.iT=null
$.ak=null
$.aZ=null
$.m4=null
$.bI=null
$.mn=null
$.mk=null
$.ml=null
$.mm=null
$.mj=null
$.mp=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qF","nc",function(){return H.qc("_$dart_dartClosure")})
s($,"qU","ne",function(){return H.b0(H.jr({
toString:function(){return"$receiver$"}}))})
s($,"qV","nf",function(){return H.b0(H.jr({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qW","ng",function(){return H.b0(H.jr(null))})
s($,"qX","nh",function(){return H.b0(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"r_","nk",function(){return H.b0(H.jr(void 0))})
s($,"r0","nl",function(){return H.b0(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qZ","nj",function(){return H.b0(H.mc(null))})
s($,"qY","ni",function(){return H.b0(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"r2","nn",function(){return H.b0(H.mc(void 0))})
s($,"r1","nm",function(){return H.b0(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"ri","lD",function(){return P.oz()})
s($,"r3","no",function(){return new P.jE().$0()})
s($,"r4","np",function(){return new P.jD().$0()})
s($,"rj","nt",function(){return new Int8Array(H.e1(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rm","nv",function(){return P.oi("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rz","nw",function(){return P.pg()})
s($,"rk","nu",function(){return P.lS(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rb","ns",function(){return Z.aE(0)})
s($,"r5","nq",function(){return Z.aE(511)})
s($,"rd","bt",function(){return Z.aE(1)})
s($,"rc","bs",function(){return Z.aE(2)})
s($,"r7","br",function(){return Z.aE(4)})
s($,"re","bO",function(){return Z.aE(8)})
s($,"rf","bP",function(){return Z.aE(16)})
s($,"r8","e9",function(){return Z.aE(32)})
s($,"r9","ea",function(){return Z.aE(64)})
s($,"ra","nr",function(){return Z.aE(96)})
s($,"rg","cs",function(){return Z.aE(128)})
s($,"r6","bq",function(){return Z.aE(256)})
s($,"qB","nb",function(){return new V.ih()})
r($,"qA","D",function(){return $.nb()})
r($,"qP","nd",function(){var q,p,o,n,m,l=V.o6(),k=$.ml
if(k==null)k=$.ml=V.mi(0,1,0)
q=$.mj
p=(q==null?$.mj=V.mi(0,0,-1):q).M()
o=k.aI(p).M()
n=p.aI(o)
m=V.oy(l)
return V.aX(o.a,n.a,p.a,o.b6(0).a4(m),o.b,n.b,p.b,n.b6(0).a4(m),o.c,n.c,p.c,p.b6(0).a4(m),0,0,0,1)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.d1,DataView:H.a1,ArrayBufferView:H.a1,Float32Array:H.bC,Float64Array:H.bC,Int16Array:H.eO,Int32Array:H.eP,Int8Array:H.eQ,Uint16Array:H.eR,Uint32Array:H.eS,Uint8ClampedArray:H.d3,CanvasPixelArray:H.d3,Uint8Array:H.bD,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLImageElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.hS,HTMLAnchorElement:W.ec,HTMLAreaElement:W.ed,HTMLBaseElement:W.bQ,Blob:W.bu,HTMLBodyElement:W.bv,HTMLCanvasElement:W.bw,CDATASection:W.aH,CharacterData:W.aH,Comment:W.aH,ProcessingInstruction:W.aH,Text:W.aH,CSSPerspective:W.i3,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.cB,MSStyleCSSProperties:W.cB,CSS2Properties:W.cB,CSSImageValue:W.au,CSSKeywordValue:W.au,CSSNumericValue:W.au,CSSPositionValue:W.au,CSSResourceValue:W.au,CSSUnitValue:W.au,CSSURLImageValue:W.au,CSSStyleValue:W.au,CSSMatrixComponent:W.aR,CSSRotation:W.aR,CSSScale:W.aR,CSSSkew:W.aR,CSSTranslation:W.aR,CSSTransformComponent:W.aR,CSSTransformValue:W.i5,CSSUnparsedValue:W.i6,DataTransferItemList:W.i7,HTMLDivElement:W.ba,DOMException:W.i8,ClientRectList:W.cC,DOMRectList:W.cC,DOMRectReadOnly:W.cD,DOMStringList:W.ep,DOMTokenList:W.i9,Element:W.F,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,SubmitEvent:W.m,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ah,FileList:W.bV,FileWriter:W.er,HTMLFormElement:W.et,Gamepad:W.aw,History:W.ir,HTMLCollection:W.bA,HTMLFormControlsCollection:W.bA,HTMLOptionsCollection:W.bA,ImageData:W.cK,HTMLInputElement:W.bY,KeyboardEvent:W.bB,Location:W.iC,MediaList:W.iU,MessagePort:W.c_,MIDIInputMap:W.eL,MIDIOutputMap:W.eM,MimeType:W.ay,MimeTypeArray:W.eN,PointerEvent:W.ap,MouseEvent:W.ap,DragEvent:W.ap,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,DocumentType:W.t,Node:W.t,NodeList:W.d4,RadioNodeList:W.d4,Plugin:W.az,PluginArray:W.f_,RTCStatsReport:W.f5,HTMLSelectElement:W.f7,SourceBuffer:W.aq,SourceBufferList:W.f9,SpeechGrammar:W.aC,SpeechGrammarList:W.fa,SpeechRecognitionResult:W.aD,Storage:W.fe,CSSStyleSheet:W.al,StyleSheet:W.al,HTMLTableCellElement:W.bk,HTMLTableDataCellElement:W.bk,HTMLTableHeaderCellElement:W.bk,HTMLTableElement:W.dh,HTMLTableRowElement:W.fi,HTMLTableSectionElement:W.fj,HTMLTemplateElement:W.c9,TextTrack:W.ar,TextTrackCue:W.af,VTTCue:W.af,TextTrackCueList:W.fl,TextTrackList:W.fm,TimeRanges:W.jk,Touch:W.as,TouchEvent:W.bG,TouchList:W.fq,TrackDefaultList:W.jp,CompositionEvent:W.b1,FocusEvent:W.b1,TextEvent:W.b1,UIEvent:W.b1,URL:W.jA,VideoTrackList:W.fG,WheelEvent:W.bl,Window:W.ci,DOMWindow:W.ci,Attr:W.cj,CSSRuleList:W.fN,ClientRect:W.dC,DOMRect:W.dC,GamepadList:W.h0,NamedNodeMap:W.dI,MozNamedAttrMap:W.dI,SpeechRecognitionResultList:W.hk,StyleSheetList:W.hr,SVGLength:P.aT,SVGLengthList:P.eD,SVGNumber:P.aY,SVGNumberList:P.eU,SVGPointList:P.j1,SVGScriptElement:P.c6,SVGStringList:P.fg,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.b_,SVGTransformList:P.fr,AudioBuffer:P.hV,AudioParamMap:P.eg,AudioTrackList:P.eh,AudioContext:P.b8,webkitAudioContext:P.b8,BaseAudioContext:P.b8,OfflineAudioContext:P.eV,WebGL2RenderingContext:P.da,SQLResultSetRowList:P.fb})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.dJ.$nativeSuperclassTag="ArrayBufferView"
H.dK.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.dL.$nativeSuperclassTag="ArrayBufferView"
H.dM.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
W.dP.$nativeSuperclassTag="EventTarget"
W.dQ.$nativeSuperclassTag="EventTarget"
W.dS.$nativeSuperclassTag="EventTarget"
W.dT.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=U.qm
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
