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
a[c]=function(){a[c]=function(){H.qk(b)}
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
if(a[b]!==s)H.ql(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ly"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ly"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.ly(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={l8:function l8(){},
la:function(a){return new H.cW("Field '"+a+"' has been assigned during initialization.")},
kF:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
jj:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
of:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
pW:function(a,b,c){return a},
nT:function(a,b,c,d){if(t.gw.b(a))return new H.cM(a,b,c.K("@<0>").bm(d).K("cM<1,2>"))
return new H.aX(a,b,c.K("@<0>").bm(d).K("aX<1,2>"))},
l5:function(){return new P.cd("No element")},
nL:function(){return new P.cd("Too many elements")},
oc:function(a,b){H.fa(a,0,J.aP(a)-1,b)},
fa:function(a,b,c,d){if(c-b<=32)H.ob(a,b,c,d)
else H.oa(a,b,c,d)},
ob:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.cy(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ax()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
oa:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a7(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a7(a4+a5,2),f=g-j,e=g+j,d=J.cy(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ax()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ax()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ax()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ax()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ax()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ax()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ax()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ax()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ax()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.a6(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.fa(a3,a4,r-2,a6)
H.fa(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.a6(a6.$2(d.h(a3,r),b),0);)++r
for(;J.a6(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.fa(a3,r,q,a6)}else H.fa(a3,r,q,a6)},
cW:function cW(a){this.a=a},
r:function r(a){this.a=a},
n:function n(){},
d0:function d0(){},
bg:function bg(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aX:function aX(a,b,c){this.a=a
this.b=b
this.$ti=c},
cM:function cM(a,b,c){this.a=a
this.b=b
this.$ti=c},
eL:function eL(a,b){this.a=null
this.b=a
this.c=b},
d4:function d4(a,b,c){this.a=a
this.b=b
this.$ti=c},
b4:function b4(a,b,c){this.a=a
this.b=b
this.$ti=c},
fO:function fO(a,b){this.a=a
this.b=b},
cP:function cP(){},
fG:function fG(){},
ck:function ck(){},
nE:function(){throw H.c(P.B("Cannot modify unmodifiable Map"))},
n1:function(a){var s,r=H.n0(a)
if(r!=null)return r
s="minified:"+a
return s},
mW:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
y:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cA(a)
return s},
dh:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
m4:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.e(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.aa(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.F(q,o)|32)>r)return n}return parseInt(a,b)},
di:function(a){return H.nW(a)},
nW:function(a){var s,r,q,p
if(a instanceof P.O)return H.aq(H.b6(a),null)
if(J.ec(a)===C.U||t.ak.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.aq(H.b6(a),null)},
nX:function(){if(!!self.location)return self.location.href
return null},
m3:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
o4:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.ky(q))throw H.c(H.eb(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.b7(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.eb(q))}return H.m3(p)},
m5:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.ky(q))throw H.c(H.eb(q))
if(q<0)throw H.c(H.eb(q))
if(q>65535)return H.o4(a)}return H.m3(a)},
o5:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
au:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.b7(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.aa(a,0,1114111,null,null))},
c8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o3:function(a){var s=H.c8(a).getFullYear()+0
return s},
o1:function(a){var s=H.c8(a).getMonth()+1
return s},
nY:function(a){var s=H.c8(a).getDate()+0
return s},
nZ:function(a){var s=H.c8(a).getHours()+0
return s},
o0:function(a){var s=H.c8(a).getMinutes()+0
return s},
o2:function(a){var s=H.c8(a).getSeconds()+0
return s},
o_:function(a){var s=H.c8(a).getMilliseconds()+0
return s},
q7:function(a){throw H.c(H.eb(a))},
e:function(a,b){if(a==null)J.aP(a)
throw H.c(H.cw(a,b))},
cw:function(a,b){var s,r="index"
if(!H.ky(b))return new P.aC(!0,b,r,null)
s=J.aP(a)
if(b<0||b>=s)return P.N(b,a,r,null,s)
return P.f5(b,r)},
q_:function(a,b,c){if(a>c)return P.aa(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aa(b,a,c,"end",null)
return new P.aC(!0,b,"end",null)},
eb:function(a){return new P.aC(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.eV()
s=new Error()
s.dartException=a
r=H.qm
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qm:function(){return J.cA(this.dartException)},
h:function(a){throw H.c(a)},
q:function(a){throw H.c(P.aF(a))},
b2:function(a){var s,r,q,p,o,n
a=H.mZ(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jy(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jz:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mh:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
l9:function(a,b){var s=b==null,r=s?null:b.method
return new H.eF(a,r,s?null:b.receiver)},
al:function(a){if(a==null)return new H.j3(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bO(a,a.dartException)
return H.pS(a)},
bO:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
pS:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.b7(r,16)&8191)===10)switch(q){case 438:return H.bO(a,H.l9(H.y(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.y(s)+" (Error "+q+")"
return H.bO(a,new H.dg(p,e))}}if(a instanceof TypeError){o=$.n5()
n=$.n6()
m=$.n7()
l=$.n8()
k=$.nb()
j=$.nc()
i=$.na()
$.n9()
h=$.ne()
g=$.nd()
f=o.av(s)
if(f!=null)return H.bO(a,H.l9(s,f))
else{f=n.av(s)
if(f!=null){f.method="call"
return H.bO(a,H.l9(s,f))}else{f=m.av(s)
if(f==null){f=l.av(s)
if(f==null){f=k.av(s)
if(f==null){f=j.av(s)
if(f==null){f=i.av(s)
if(f==null){f=l.av(s)
if(f==null){f=h.av(s)
if(f==null){f=g.av(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bO(a,new H.dg(s,f==null?e:f.method))}}return H.bO(a,new H.fF(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dq()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bO(a,new P.aC(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dq()
return a},
lA:function(a){var s
if(a==null)return new H.ht(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.ht(a)},
q1:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qb:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
cv:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qb)
a.$identity=s
return s},
nD:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.ff().constructor.prototype):Object.create(new H.bS(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aR
if(typeof r!=="number")return r.a1()
$.aR=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lP(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nz(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lP(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nz:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mU,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.nx:H.nw
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nA:function(a,b,c,d){var s=H.lO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lP:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nC(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nA(r,!p,s,b)
if(r===0){p=$.aR
if(typeof p!=="number")return p.a1()
$.aR=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cB
return new Function(p+(o==null?$.cB=H.i6("self"):o)+";return "+n+"."+H.y(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aR
if(typeof p!=="number")return p.a1()
$.aR=p+1
m+=p
p="return function("+m+"){return this."
o=$.cB
return new Function(p+(o==null?$.cB=H.i6("self"):o)+"."+H.y(s)+"("+m+");}")()},
nB:function(a,b,c,d){var s=H.lO,r=H.ny
switch(b?-1:a){case 0:throw H.c(new H.f8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
nC:function(a,b){var s,r,q,p,o,n,m,l=$.cB
if(l==null)l=$.cB=H.i6("self")
s=$.lN
if(s==null)s=$.lN=H.i6("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.nB(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.y(r)+"(this."+s+");"
n=$.aR
if(typeof n!=="number")return n.a1()
$.aR=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.y(r)+"(this."+s+", "+m+");"
n=$.aR
if(typeof n!=="number")return n.a1()
$.aR=n+1
return new Function(o+n+"}")()},
ly:function(a,b,c,d,e,f,g){return H.nD(a,b,c,d,!!e,!!f,g)},
nw:function(a,b){return H.hI(v.typeUniverse,H.b6(a.a),b)},
nx:function(a,b){return H.hI(v.typeUniverse,H.b6(a.c),b)},
lO:function(a){return a.a},
ny:function(a){return a.c},
i6:function(a){var s,r,q,p=new H.bS("self","target","receiver","name"),o=J.l7(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bQ("Field name "+a+" not found."))},
qk:function(a){throw H.c(new P.eq(a))},
q4:function(a){return v.getIsolateTag(a)},
ql:function(a){return H.h(new H.cW(a))},
rt:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qd:function(a){var s,r,q,p,o,n=$.mT.$1(a),m=$.kD[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kJ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.mQ.$2(a,n)
if(q!=null){m=$.kD[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kJ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kV(s)
$.kD[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kJ[n]=s
return s}if(p==="-"){o=H.kV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.mX(a,s)
if(p==="*")throw H.c(P.jB(n))
if(v.leafTags[n]===true){o=H.kV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.mX(a,s)},
mX:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lD(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kV:function(a){return J.lD(a,!1,null,!!a.$iA)},
qf:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kV(s)
else return J.lD(s,c,null,null)},
q9:function(){if(!0===$.lB)return
$.lB=!0
H.qa()},
qa:function(){var s,r,q,p,o,n,m,l
$.kD=Object.create(null)
$.kJ=Object.create(null)
H.q8()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.mY.$1(o)
if(n!=null){m=H.qf(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
q8:function(){var s,r,q,p,o,n,m=C.J()
m=H.cu(C.K,H.cu(C.L,H.cu(C.u,H.cu(C.u,H.cu(C.M,H.cu(C.N,H.cu(C.O(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.mT=new H.kG(p)
$.mQ=new H.kH(o)
$.mY=new H.kI(n)},
cu:function(a,b){return a(b)||b},
nP:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a7("Illegal RegExp pattern ("+String(n)+")",a,null))},
n_:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
q0:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mZ:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lG:function(a,b,c){var s=H.qi(a,b,c)
return s},
qi:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mZ(b),'g'),H.q0(c))},
cG:function cG(){},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jy:function jy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dg:function dg(a,b){this.a=a
this.b=b},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a){this.a=a},
j3:function j3(a){this.a=a},
ht:function ht(a){this.a=a
this.b=null},
bA:function bA(){},
fm:function fm(){},
ff:function ff(){},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f8:function f8(a){this.a=a},
U:function U(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iC:function iC(a){this.a=a},
iE:function iE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cY:function cY(a,b){this.a=a
this.$ti=b},
eJ:function eJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
eE:function eE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cs:function(a){return a},
b5:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cw(b,a))},
p5:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.q_(a,b,c))
return b},
db:function db(){},
a_:function a_(){},
c6:function c6(){},
bG:function bG(){},
dc:function dc(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
dd:function dd(){},
bH:function bH(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
mb:function(a,b){var s=b.c
return s==null?b.c=H.ln(a,b.z,!0):s},
ma:function(a,b){var s=b.c
return s==null?b.c=H.e1(a,"lV",[b.z]):s},
mc:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mc(a.z)
return s===11||s===12},
o8:function(a){return a.cy},
lz:function(a){return H.lo(v.typeUniverse,a,!1)},
br:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.br(a,s,a0,a1)
if(r===s)return b
return H.mz(a,r,!0)
case 7:s=b.z
r=H.br(a,s,a0,a1)
if(r===s)return b
return H.ln(a,r,!0)
case 8:s=b.z
r=H.br(a,s,a0,a1)
if(r===s)return b
return H.my(a,r,!0)
case 9:q=b.Q
p=H.ea(a,q,a0,a1)
if(p===q)return b
return H.e1(a,b.z,p)
case 10:o=b.z
n=H.br(a,o,a0,a1)
m=b.Q
l=H.ea(a,m,a0,a1)
if(n===o&&l===m)return b
return H.ll(a,n,l)
case 11:k=b.z
j=H.br(a,k,a0,a1)
i=b.Q
h=H.pP(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mx(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.ea(a,g,a0,a1)
o=b.z
n=H.br(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lm(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.i_("Attempted to substitute unexpected RTI kind "+c))}},
ea:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.br(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
pQ:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.br(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
pP:function(a,b,c,d){var s,r=b.a,q=H.ea(a,r,c,d),p=b.b,o=H.ea(a,p,c,d),n=b.c,m=H.pQ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.h5()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
pX:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.mU(s)
return a.$S()}return null},
mV:function(a,b){var s
if(H.mc(b))if(a instanceof H.bA){s=H.pX(a)
if(s!=null)return s}return H.b6(a)},
b6:function(a){var s
if(a instanceof P.O){s=a.$ti
return s!=null?s:H.lu(a)}if(Array.isArray(a))return H.lt(a)
return H.lu(J.ec(a))},
lt:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
T:function(a){var s=a.$ti
return s!=null?s:H.lu(a)},
lu:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pd(a,s)},
pd:function(a,b){var s=a instanceof H.bA?a.__proto__.__proto__.constructor:b,r=H.oO(v.typeUniverse,s.name)
b.$ccache=r
return r},
mU:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lo(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pc:function(a){var s,r,q,p=this
if(p===t.K)return H.e7(p,a,H.ph)
if(!H.b7(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.e7(p,a,H.pk)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.ky
else if(r===t.gR||r===t.H)q=H.pg
else if(r===t.N)q=H.pi
else q=r===t.cJ?H.kx:null
if(q!=null)return H.e7(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.qc)){p.r="$i"+s
return H.e7(p,a,H.pj)}}else if(s===7)return H.e7(p,a,H.pa)
return H.e7(p,a,H.p8)},
e7:function(a,b,c){a.b=c
return a.b(b)},
pb:function(a){var s,r=this,q=H.p7
if(!H.b7(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.p4
else if(r===t.K)q=H.p3
else{s=H.ed(r)
if(s)q=H.p9}r.a=q
return r.a(a)},
lx:function(a){var s,r=a.y
if(!H.b7(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.lx(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
p8:function(a){var s=this
if(a==null)return H.lx(s)
return H.Q(v.typeUniverse,H.mV(a,s),null,s,null)},
pa:function(a){if(a==null)return!0
return this.z.b(a)},
pj:function(a){var s,r=this
if(a==null)return H.lx(r)
s=r.r
if(a instanceof P.O)return!!a[s]
return!!J.ec(a)[s]},
p7:function(a){var s,r=this
if(a==null){s=H.ed(r)
if(s)return a}else if(r.b(a))return a
H.mK(a,r)},
p9:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mK(a,s)},
mK:function(a,b){throw H.c(H.oE(H.mq(a,H.mV(a,b),H.aq(b,null))))},
mq:function(a,b,c){var s=P.ir(a),r=H.aq(b==null?H.b6(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
oE:function(a){return new H.e_("TypeError: "+a)},
ab:function(a,b){return new H.e_("TypeError: "+H.mq(a,null,b))},
ph:function(a){return a!=null},
p3:function(a){if(a!=null)return a
throw H.c(H.ab(a,"Object"))},
pk:function(a){return!0},
p4:function(a){return a},
kx:function(a){return!0===a||!1===a},
mI:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ab(a,"bool"))},
rh:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool"))},
rg:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool?"))},
ri:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"double"))},
rk:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double"))},
rj:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double?"))},
ky:function(a){return typeof a=="number"&&Math.floor(a)===a},
kq:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ab(a,"int"))},
rm:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int"))},
rl:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int?"))},
pg:function(a){return typeof a=="number"},
rn:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"num"))},
rp:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num"))},
ro:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num?"))},
pi:function(a){return typeof a=="string"},
kr:function(a){if(typeof a=="string")return a
throw H.c(H.ab(a,"String"))},
rr:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String"))},
rq:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String?"))},
pL:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.aq(a[q],b)
return s},
mL:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.e(a5,j)
m=C.a.a1(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.aq(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.aq(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.aq(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.aq(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.aq(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
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
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.aq(a.z,b)+">"
if(l===9){p=H.pR(a.z)
o=a.Q
return o.length!==0?p+("<"+H.pL(o,b)+">"):p}if(l===11)return H.mL(a,b,null)
if(l===12)return H.mL(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
pR:function(a){var s,r=H.n0(a)
if(r!=null)return r
s="minified:"+a
return s},
mA:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
oO:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lo(a,b,!1)
else if(typeof m=="number"){s=m
r=H.e2(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.e1(a,b,q)
n[b]=o
return o}else return m},
oM:function(a,b){return H.mH(a.tR,b)},
oL:function(a,b){return H.mH(a.eT,b)},
lo:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mv(H.mt(a,null,b,c))
r.set(b,s)
return s},
hI:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mv(H.mt(a,b,c,!0))
q.set(c,r)
return r},
oN:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.ll(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bq:function(a,b){b.a=H.pb
b.b=H.pc
return b},
e2:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.av(null,null)
s.y=b
s.cy=c
r=H.bq(a,s)
a.eC.set(c,r)
return r},
mz:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.oJ(a,b,r,c)
a.eC.set(r,s)
return s},
oJ:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b7(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.av(null,null)
q.y=6
q.z=b
q.cy=c
return H.bq(a,q)},
ln:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.oI(a,b,r,c)
a.eC.set(r,s)
return s},
oI:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b7(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ed(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ed(q.z))return q
else return H.mb(a,b)}}p=new H.av(null,null)
p.y=7
p.z=b
p.cy=c
return H.bq(a,p)},
my:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oG(a,b,r,c)
a.eC.set(r,s)
return s},
oG:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b7(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.e1(a,"lV",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.av(null,null)
q.y=8
q.z=b
q.cy=c
return H.bq(a,q)},
oK:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.av(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bq(a,s)
a.eC.set(q,r)
return r},
hH:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oF:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
e1:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hH(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.av(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bq(a,r)
a.eC.set(p,q)
return q},
ll:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hH(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.av(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bq(a,o)
a.eC.set(q,n)
return n},
mx:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hH(m)
if(j>0){s=l>0?",":""
r=H.hH(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oF(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.av(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bq(a,o)
a.eC.set(q,r)
return r},
lm:function(a,b,c,d){var s,r=b.cy+("<"+H.hH(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.oH(a,b,c,r,d)
a.eC.set(r,s)
return s},
oH:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.br(a,b,r,0)
m=H.ea(a,c,r,0)
return H.lm(a,n,m,c!==m)}}l=new H.av(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bq(a,l)},
mt:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mv:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.oy(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mu(a,r,h,g,!1)
else if(q===46)r=H.mu(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bp(a.u,a.e,g.pop()))
break
case 94:g.push(H.oK(a.u,g.pop()))
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
H.lk(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.e1(p,n,o))
else{m=H.bp(p,a.e,n)
switch(m.y){case 11:g.push(H.lm(p,m,o,a.n))
break
default:g.push(H.ll(p,m,o))
break}}break
case 38:H.oz(a,g)
break
case 42:p=a.u
g.push(H.mz(p,H.bp(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.ln(p,H.bp(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.my(p,H.bp(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.h5()
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
H.lk(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.mx(p,H.bp(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.lk(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.oB(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bp(a.u,a.e,i)},
oy:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mu:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mA(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.o8(o)+'"')
d.push(H.hI(s,o,n))}else d.push(p)
return m},
oz:function(a,b){var s=b.pop()
if(0===s){b.push(H.e2(a.u,1,"0&"))
return}if(1===s){b.push(H.e2(a.u,4,"1&"))
return}throw H.c(P.i_("Unexpected extended operation "+H.y(s)))},
bp:function(a,b,c){if(typeof c=="string")return H.e1(a,c,a.sEA)
else if(typeof c=="number")return H.oA(a,b,c)
else return c},
lk:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bp(a,b,c[s])},
oB:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bp(a,b,c[s])},
oA:function(a,b,c){var s,r,q=b.y
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
Q:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b7(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b7(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.Q(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.Q(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.Q(a,b.z,c,d,e)
if(r===6)return H.Q(a,b.z,c,d,e)
return r!==7}if(r===6)return H.Q(a,b.z,c,d,e)
if(p===6){s=H.mb(a,d)
return H.Q(a,b,c,s,e)}if(r===8){if(!H.Q(a,b.z,c,d,e))return!1
return H.Q(a,H.ma(a,b),c,d,e)}if(r===7){s=H.Q(a,t.P,c,d,e)
return s&&H.Q(a,b.z,c,d,e)}if(p===8){if(H.Q(a,b,c,d.z,e))return!0
return H.Q(a,b,c,H.ma(a,d),e)}if(p===7){s=H.Q(a,b,c,t.P,e)
return s||H.Q(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.b)return!0
if(p===12){if(b===t.O)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.Q(a,k,c,j,e)||!H.Q(a,j,e,k,c))return!1}return H.mM(a,b.z,c,d.z,e)}if(p===11){if(b===t.O)return!0
if(s)return!1
return H.mM(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pf(a,b,c,d,e)}return!1},
mM:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.Q(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.Q(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.Q(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.Q(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.Q(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pf:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.Q(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mA(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.Q(a,H.hI(a,b,l[p]),c,r[p],e))return!1
return!0},
ed:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b7(a))if(r!==7)if(!(r===6&&H.ed(a.z)))s=r===8&&H.ed(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qc:function(a){var s
if(!H.b7(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b7:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
mH:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
av:function av(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
h5:function h5(){this.c=this.b=this.a=null},
h1:function h1(){},
e_:function e_(a){this.a=a},
n0:function(a){return v.mangledGlobalNames[a]},
qg:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kE:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lB==null){H.q9()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jB("Return interceptor for "+H.y(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.k3
if(o==null)o=$.k3=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.qd(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){o=$.k3
if(o==null)o=$.k3=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
nM:function(a,b){if(a<0||a>4294967295)throw H.c(P.aa(a,0,4294967295,"length",null))
return J.nN(new Array(a),b)},
l6:function(a,b){if(a<0)throw H.c(P.bQ("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.K("x<0>"))},
nN:function(a,b){return J.l7(H.b(a,b.K("x<0>")))},
l7:function(a){a.fixed$length=Array
return a},
nO:function(a,b){return J.nq(a,b)},
ec:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cU.prototype
return J.eD.prototype}if(typeof a=="string")return J.be.prototype
if(a==null)return J.cV.prototype
if(typeof a=="boolean")return J.eC.prototype
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.O)return a
return J.kE(a)},
cy:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.O)return a
return J.kE(a)},
hV:function(a){if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.O)return a
return J.kE(a)},
q2:function(a){if(typeof a=="number")return J.c2.prototype
if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bK.prototype
return a},
q3:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bK.prototype
return a},
aA:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.O)return a
return J.kE(a)},
a6:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ec(a).q(a,b)},
lI:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mW(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cy(a).h(a,b)},
kX:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mW(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hV(a).m(a,b,c)},
no:function(a,b,c){return J.aA(a).he(a,b,c)},
np:function(a,b,c,d){return J.aA(a).hx(a,b,c,d)},
nq:function(a,b){return J.q2(a).as(a,b)},
hY:function(a,b){return J.hV(a).J(a,b)},
eg:function(a,b){return J.hV(a).D(a,b)},
nr:function(a){return J.aA(a).gaf(a)},
lJ:function(a){return J.aA(a).gaQ(a)},
ns:function(a){return J.aA(a).gdR(a)},
kY:function(a){return J.ec(a).gH(a)},
aB:function(a){return J.hV(a).gP(a)},
aP:function(a){return J.cy(a).gl(a)},
lK:function(a){return J.hV(a).ih(a)},
nt:function(a,b){return J.aA(a).ij(a,b)},
nu:function(a){return J.q3(a).it(a)},
cA:function(a){return J.ec(a).i(a)},
a:function a(){},
eC:function eC(){},
cV:function cV(){},
bf:function bf(){},
f_:function f_(){},
bK:function bK(){},
aV:function aV(){},
x:function x(a){this.$ti=a},
iB:function iB(a){this.$ti=a},
ag:function ag(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c2:function c2(){},
cU:function cU(){},
eD:function eD(){},
be:function be(){}},P={
op:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.pT()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cv(new P.k_(q),1)).observe(s,{childList:true})
return new P.jZ(q,s,r)}else if(self.setImmediate!=null)return P.pU()
return P.pV()},
oq:function(a){self.scheduleImmediate(H.cv(new P.k0(a),0))},
or:function(a){self.setImmediate(H.cv(new P.k1(a),0))},
os:function(a){P.le(C.m,a)},
le:function(a,b){var s=C.c.a7(a.a,1000)
return P.oC(s<0?0:s,b)},
mg:function(a,b){var s=C.c.a7(a.a,1000)
return P.oD(s<0?0:s,b)},
oC:function(a,b){var s=new P.dZ()
s.eS(a,b)
return s},
oD:function(a,b){var s=new P.dZ()
s.eT(a,b)
return s},
re:function(a){return new P.cq(a,1)},
ov:function(){return C.a5},
ow:function(a){return new P.cq(a,3)},
pm:function(a,b){return new P.dW(a,b.K("dW<0>"))},
pI:function(){var s,r
for(s=$.ct;s!=null;s=$.ct){$.e9=null
r=s.b
$.ct=r
if(r==null)$.e8=null
s.a.$0()}},
pO:function(){$.lv=!0
try{P.pI()}finally{$.e9=null
$.lv=!1
if($.ct!=null)$.lH().$1(P.mR())}},
pM:function(a){var s=new P.fP(a),r=$.e8
if(r==null){$.ct=$.e8=s
if(!$.lv)$.lH().$1(P.mR())}else $.e8=r.b=s},
pN:function(a){var s,r,q,p=$.ct
if(p==null){P.pM(a)
$.e9=$.e8
return}s=new P.fP(a)
r=$.e9
if(r==null){s.b=p
$.ct=$.e9=s}else{q=r.b
s.b=q
$.e9=r.b=s
if(q==null)$.e8=s}},
mf:function(a,b){var s=$.aN
if(s===C.f)return P.le(a,b)
return P.le(a,s.hC(b))},
oh:function(a,b){var s=$.aN
if(s===C.f)return P.mg(a,b)
return P.mg(a,s.dL(b,t.aF))},
mN:function(a,b,c,d,e){P.pN(new P.kB(d,e))},
pJ:function(a,b,c,d){var s,r=$.aN
if(r===c)return d.$0()
$.aN=c
s=r
try{r=d.$0()
return r}finally{$.aN=s}},
pK:function(a,b,c,d,e){var s,r=$.aN
if(r===c)return d.$1(e)
$.aN=c
s=r
try{r=d.$1(e)
return r}finally{$.aN=s}},
k_:function k_(a){this.a=a},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
dZ:function dZ(){this.c=0},
kh:function kh(a,b){this.a=a
this.b=b},
kg:function kg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cq:function cq(a,b){this.a=a
this.b=b},
bM:function bM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dW:function dW(a,b){this.a=a
this.$ti=b},
fP:function fP(a){this.a=a
this.b=null},
ce:function ce(){},
fh:function fh(){},
ko:function ko(){},
kB:function kB(a,b){this.a=a
this.b=b},
k6:function k6(){},
k7:function k7(a,b){this.a=a
this.b=b},
k8:function k8(a,b,c){this.a=a
this.b=b
this.c=c},
nQ:function(a,b){return new H.U(a.K("@<0>").bm(b).K("U<1,2>"))},
nR:function(a,b,c){return H.q1(a,new H.U(b.K("@<0>").bm(c).K("U<1,2>")))},
S:function(a,b){return new H.U(a.K("@<0>").bm(b).K("U<1,2>"))},
cZ:function(a){return new P.dK(a.K("dK<0>"))},
lj:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ox:function(a,b){var s=new P.dL(a,b)
s.c=a.e
return s},
nK:function(a,b,c){var s,r
if(P.lw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.ak.push(a)
try{P.pl(a,s)}finally{if(0>=$.ak.length)return H.e($.ak,-1)
$.ak.pop()}r=P.md(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
l4:function(a,b,c){var s,r
if(P.lw(a))return b+"..."+c
s=new P.X(b)
$.ak.push(a)
try{r=s
r.a=P.md(r.a,a,", ")}finally{if(0>=$.ak.length)return H.e($.ak,-1)
$.ak.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lw:function(a){var s,r
for(s=$.ak.length,r=0;r<s;++r)if(a===$.ak[r])return!0
return!1},
pl:function(a,b){var s,r,q,p,o,n,m,l=a.gP(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.v())return
s=H.y(l.gB(l))
b.push(s)
k+=s.length+2;++j}if(!l.v()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gB(l);++j
if(!l.v()){if(j<=4){b.push(H.y(p))
return}r=H.y(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB(l);++j
for(;l.v();p=o,o=n){n=l.gB(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.y(p)
r=H.y(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
lX:function(a,b,c){var s=P.nQ(b,c)
a.D(0,new P.iF(s,b,c))
return s},
lY:function(a,b){var s,r,q=P.cZ(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
lb:function(a){var s,r={}
if(P.lw(a))return"{...}"
s=new P.X("")
try{$.ak.push(a)
s.a+="{"
r.a=!0
J.eg(a,new P.iJ(r,s))
s.a+="}"}finally{if(0>=$.ak.length)return H.e($.ak,-1)
$.ak.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dK:function dK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k5:function k5(a){this.a=a
this.c=this.b=null},
dL:function dL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cT:function cT(){},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(){},
j:function j(){},
d2:function d2(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
L:function L(){},
hJ:function hJ(){},
d3:function d3(){},
cl:function cl(a,b){this.a=a
this.$ti=b},
dk:function dk(){},
dS:function dS(){},
dM:function dM(){},
e3:function e3(){},
e5:function e5(){},
ok:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.ol(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
ol:function(a,b,c,d){var s=a?$.ng():$.nf()
if(s==null)return null
if(0===c&&d===b.length)return P.ml(s,b)
return P.ml(s,b.subarray(c,P.bk(c,d,b.length)))},
ml:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.al(r)}return null},
lM:function(a,b,c,d,e,f){if(C.c.bE(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
p2:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
p1:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.cy(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jM:function jM(){},
jL:function jL(){},
i3:function i3(){},
i4:function i4(){},
en:function en(){},
ep:function ep(){},
io:function io(){},
iz:function iz(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
iy:function iy(a){this.a=a},
jJ:function jJ(){},
jN:function jN(){},
km:function km(a){this.b=0
this.c=a},
jK:function jK(a){this.a=a},
kl:function kl(a){this.a=a
this.b=16
this.c=0},
hW:function(a,b){var s=H.m4(a,b)
if(s!=null)return s
throw H.c(P.a7(a,null,null))},
nI:function(a){if(a instanceof H.bA)return a.i(0)
return"Instance of '"+H.di(a)+"'"},
eK:function(a,b,c,d){var s,r=c?J.l6(a,d):J.nM(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iG:function(a,b,c){var s,r=H.b([],c.K("x<0>"))
for(s=J.aB(a);s.v();)r.push(s.gB(s))
if(b)return r
return J.l7(r)},
nS:function(a,b,c){var s,r,q=J.l6(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.e(q,s)
q[s]=r}return q},
fj:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bk(b,c,r)
return H.m5(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.o5(a,b,P.bk(b,c,a.length))
return P.oe(a,b,c)},
oe:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.aa(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.aa(c,b,a.length,o,o))
r=J.aB(a)
for(q=0;q<b;++q)if(!r.v())throw H.c(P.aa(b,0,q,o,o))
p=[]
if(s)for(;r.v();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.v())throw H.c(P.aa(c,b,q,o,o))
p.push(r.gB(r))}return H.m5(p)},
o6:function(a){return new H.eE(a,H.nP(a,!1,!0,!1,!1,!1))},
md:function(a,b,c){var s=J.aB(b)
if(!s.v())return a
if(c.length===0){do a+=H.y(s.gB(s))
while(s.v())}else{a+=H.y(s.gB(s))
for(;s.v();)a=a+c+H.y(s.gB(s))}return a},
jE:function(){var s=H.nX()
if(s!=null)return P.oj(s)
throw H.c(P.B("'Uri.base' is not supported"))},
kk:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nm().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghO().cs(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.au(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nF:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nG:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
es:function(a){if(a>=10)return""+a
return"0"+a},
lR:function(a){return new P.bB(1000*a)},
ir:function(a){if(typeof a=="number"||H.kx(a)||null==a)return J.cA(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nI(a)},
i_:function(a){return new P.ej(a)},
bQ:function(a){return new P.aC(!1,null,null,a)},
f5:function(a,b){return new P.dj(null,null,!0,a,b,"Value not in range")},
aa:function(a,b,c,d,e){return new P.dj(b,c,!0,a,d,"Invalid value")},
bk:function(a,b,c){if(0>a||a>c)throw H.c(P.aa(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aa(b,a,c,"end",null))
return b}return c},
m6:function(a,b){if(a<0)throw H.c(P.aa(a,0,null,b,null))
return a},
N:function(a,b,c,d,e){var s=e==null?J.aP(b):e
return new P.eA(s,!0,a,c,"Index out of range")},
B:function(a){return new P.fH(a)},
jB:function(a){return new P.fE(a)},
ld:function(a){return new P.cd(a)},
aF:function(a){return new P.eo(a)},
f:function(a){return new P.h2(a)},
a7:function(a,b,c){return new P.iw(a,b,c)},
lF:function(a){H.qg(a)},
oj:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.F(a5,4)^58)*3|C.a.F(a5,0)^100|C.a.F(a5,1)^97|C.a.F(a5,2)^116|C.a.F(a5,3)^97)>>>0
if(s===0)return P.mi(a4<a4?C.a.u(a5,0,a4):a5,5,a3).gew()
else if(s===32)return P.mi(C.a.u(a5,5,a4),0,a3).gew()}r=P.eK(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mO(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.mO(a5,0,q,20,r)===20)r[7]=q
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
s=2}a5=g+C.a.u(a5,n,a4)
q-=0
i=s-0
m+=i
l+=i
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=C.a.bd(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.ad(a5,"http",0)){if(i&&o+3===n&&C.a.ad(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.bd(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.ad(a5,"https",0)){if(i&&o+4===n&&C.a.ad(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.bd(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.u(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.hn(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.oW(a5,0,q)
else{if(q===0)P.cr(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.oX(a5,d,p-1):""
b=P.oT(a5,p,o,!1)
i=o+1
if(i<n){a=H.m4(C.a.u(a5,i,n),a3)
a0=P.oV(a==null?H.h(P.a7("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.oU(a5,n,m,a3,j,b!=null)
a2=m<l?P.lq(a5,m+1,l,a3):a3
return new P.bN(j,c,b,a0,a1,a2,l<a4?P.oS(a5,l+1,a4):a3)},
mk:function(a){var s=t.N
return C.b.hT(H.b(a.split("&"),t.s),P.S(s,s),new P.jH(C.e))},
oi:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jD(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.V(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.hW(C.a.u(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.e(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.hW(C.a.u(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.e(j,q)
j[q]=o
return j},
mj:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.jF(a),c=new P.jG(d,a)
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
l=C.b.gaG(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.oi(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.e(j,h)
j[h]=0
e=h+1
if(e>=16)return H.e(j,e)
j[e]=0
h+=2}else{e=C.c.b7(g,8)
if(h<0||h>=16)return H.e(j,h)
j[h]=e
e=h+1
if(e>=16)return H.e(j,e)
j[e]=g&255
h+=2}}return j},
mB:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cr:function(a,b,c){throw H.c(P.a7(c,a,b))},
oV:function(a,b){if(a!=null&&a===P.mB(b))return null
return a},
oT:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.V(a,b)===91){s=c-1
if(C.a.V(a,s)!==93)P.cr(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.oQ(a,r,s)
if(q<s){p=q+1
o=P.mG(a,C.a.ad(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mj(a,r,q)
return C.a.u(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.V(a,n)===58){q=C.a.bL(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mG(a,C.a.ad(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mj(a,b,q)
return"["+C.a.u(a,b,q)+o+"]"}return P.oZ(a,b,c)},
oQ:function(a,b,c){var s=C.a.bL(a,"%",b)
return s>=b&&s<c?s:c},
mG:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.X(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.V(a,s)
if(p===37){o=P.lr(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.X("")
m=i.a+=C.a.u(a,r,s)
if(n)o=C.a.u(a,s,s+3)
else if(o==="%")P.cr(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.e(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.X("")
if(r<s){i.a+=C.a.u(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.V(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.u(a,r,s)
if(i==null){i=new P.X("")
n=i}else n=i
n.a+=j
n.a+=P.lp(p)
s+=k
r=s}}}if(i==null)return C.a.u(a,b,c)
if(r<c)i.a+=C.a.u(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
oZ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.V(a,s)
if(o===37){n=P.lr(a,s,!0)
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
if(m>=8)return H.e(C.x,m)
m=(C.x[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.X("")
if(r<s){q.a+=C.a.u(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.e(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.cr(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.V(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.u(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.X("")
m=q}else m=q
m.a+=l
m.a+=P.lp(o)
s+=j
r=s}}}}if(q==null)return C.a.u(a,b,c)
if(r<c){l=C.a.u(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
oW:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mD(C.a.F(a,b)))P.cr(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.F(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.e(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cr(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.u(a,b,c)
return P.oP(r?a.toLowerCase():a)},
oP:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oX:function(a,b,c){return P.e4(a,b,c,C.Z,!1)},
oU:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.e4(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a2(s,"/"))s="/"+s
return P.oY(s,e,f)},
oY:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a2(a,"/"))return P.p_(a,!s||c)
return P.p0(a)},
lq:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bQ("Both query and queryParameters specified"))
return P.e4(a,b,c,C.k,!0)}if(d==null)return null
s=new P.X("")
r.a=""
d.D(0,new P.ki(new P.kj(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
oS:function(a,b,c){return P.e4(a,b,c,C.k,!0)},
lr:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.V(a,b+1)
r=C.a.V(a,n)
q=H.kF(s)
p=H.kF(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.b7(o,4)
if(n>=8)return H.e(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.au(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.u(a,b,b+3).toUpperCase()
return null},
lp:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.F(k,a>>>4)
s[2]=C.a.F(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.hn(a,6*q)&63|r
if(o>=p)return H.e(s,o)
s[o]=37
m=o+1
l=C.a.F(k,n>>>4)
if(m>=p)return H.e(s,m)
s[m]=l
l=o+2
m=C.a.F(k,n&15)
if(l>=p)return H.e(s,l)
s[l]=m
o+=3}}return P.fj(s,0,null)},
e4:function(a,b,c,d,e){var s=P.mF(a,b,c,d,e)
return s==null?C.a.u(a,b,c):s},
mF:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.V(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.e(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lr(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.e(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cr(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.V(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.lp(o)}}if(p==null){p=new P.X("")
n=p}else n=p
n.a+=C.a.u(a,q,r)
n.a+=H.y(m)
if(typeof l!=="number")return H.q7(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.u(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mE:function(a){if(C.a.a2(a,"."))return!0
return C.a.ed(a,"/.")!==-1},
p0:function(a){var s,r,q,p,o,n,m
if(!P.mE(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.a6(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.e(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
p_:function(a,b){var s,r,q,p,o,n
if(!P.mE(a))return!b?P.mC(a):a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaG(s)!==".."){if(0>=s.length)return H.e(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.e(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaG(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.e(s,0)
r=P.mC(s[0])
if(0>=s.length)return H.e(s,0)
s[0]=r}return C.b.j(s,"/")},
mC:function(a){var s,r,q,p=a.length
if(p>=2&&P.mD(C.a.F(a,0)))for(s=1;s<p;++s){r=C.a.F(a,s)
if(r===58)return C.a.u(a,0,s)+"%3A"+C.a.ah(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.e(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
oR:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.F(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bQ("Invalid URL encoding"))}}return s},
ls:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.F(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.u(a,b,c)
else p=new H.r(C.a.u(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.F(a,o)
if(r>127)throw H.c(P.bQ("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bQ("Truncated URI"))
p.push(P.oR(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cs(p)},
mD:function(a){var s=a|32
return 97<=s&&s<=122},
mi:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.F(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a7(k,a,r))}}if(q<0&&r>b)throw H.c(P.a7(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.F(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaG(j)
if(p!==44||r!==n+7||!C.a.ad(a,"base64",n+1))throw H.c(P.a7("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.I.i1(0,a,m,s)
else{l=P.mF(a,m,s,C.k,!0)
if(l!=null)a=C.a.bd(a,m,s,l)}return new P.jC(a,j,c)},
p6:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.ku(h)
q=new P.kv()
p=new P.kw()
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
mO:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.nn()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.e(m,d)
q=m[d]
p=C.a.F(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.e(e,n)
e[n]=r}return d},
W:function W(a,b){this.a=a
this.b=b},
bB:function bB(a){this.a=a},
ij:function ij(){},
ik:function ik(){},
K:function K(){},
ej:function ej(a){this.a=a},
fx:function fx(){},
eV:function eV(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dj:function dj(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eA:function eA(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fH:function fH(a){this.a=a},
fE:function fE(a){this.a=a},
cd:function cd(a){this.a=a},
eo:function eo(a){this.a=a},
eY:function eY(){},
dq:function dq(){},
eq:function eq(a){this.a=a},
h2:function h2(a){this.a=a},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(){},
eB:function eB(){},
ai:function ai(){},
O:function O(){},
X:function X(a){this.a=a},
jH:function jH(a){this.a=a},
jD:function jD(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a,b){this.a=a
this.b=b},
bN:function bN(a,b,c,d,e,f,g){var _=this
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
jC:function jC(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function ku(a){this.a=a},
kv:function kv(){},
kw:function kw(){},
hn:function hn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fV:function fV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
pZ:function(a){var s,r,q,p
if(t.I.b(a)){s=J.ns(a)
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
pY:function(a){if(a instanceof P.e0)return{data:a.a,height:a.b,width:a.c}
return a},
bs:function(a){var s,r,q,p,o
if(a==null)return null
s=P.S(t.N,t.A)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
mJ:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kx(a))return a
if(t.f.b(a))return P.mS(a)
if(t.aH.b(a)){s=[]
J.eg(a,new P.ks(s))
a=s}return a},
mS:function(a){var s={}
J.eg(a,new P.kC(s))
return s},
kc:function kc(){},
kd:function kd(a,b){this.a=a
this.b=b},
ke:function ke(a,b){this.a=a
this.b=b},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
ks:function ks(a){this.a=a},
kC:function kC(a){this.a=a},
hx:function hx(a,b){this.a=a
this.b=b},
ev:function ev(a,b){this.a=a
this.b=b},
iu:function iu(){},
iv:function iv(){},
hl:function hl(){},
af:function af(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aW:function aW(){},
eH:function eH(){},
b_:function b_(){},
eW:function eW(){},
j4:function j4(){},
ca:function ca(){},
fi:function fi(){},
o:function o(){},
b1:function b1(){},
fw:function fw(){},
h9:function h9(){},
ha:function ha(){},
hh:function hh(){},
hi:function hi(){},
hv:function hv(){},
hw:function hw(){},
hF:function hF(){},
hG:function hG(){},
i1:function i1(){},
el:function el(){},
i2:function i2(a){this.a=a},
em:function em(){},
b9:function b9(){},
eX:function eX(){},
fR:function fR(){},
c9:function c9(){},
fd:function fd(){},
hr:function hr(){},
hs:function hs(){}},W={
lL:function(){var s=document.createElement("a")
s.toString
return s},
kZ:function(){var s=document.createElement("canvas")
s.toString
return s},
nH:function(a,b,c){var s=document.body
s.toString
s=new H.b4(new W.a5(C.p.at(s,a,b,c)),new W.il(),t.ac.K("b4<j.E>"))
return t.h.a(s.gb_(s))},
im:function(a){return"wheel"},
cN:function(a){var s,r,q="element tag unavailable"
try{s=J.aA(a)
s.geu(a)
q=s.geu(a)}catch(r){H.al(r)}return q},
l3:function(a){var s=document.createElement("img")
s.toString
if(a!=null)s.src=a
return s},
nJ:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.al(s)}return q},
k4:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ms:function(a,b,c,d){var s=W.k4(W.k4(W.k4(W.k4(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
Y:function(a,b,c,d){var s=new W.dI(a,b,c==null?null:W.mP(new W.k2(c),t.aD),!1)
s.hu()
return s},
mr:function(a){var s=W.lL(),r=window
s=new W.cp(new W.k9(s,r.location))
s.eN(a)
return s},
ot:function(a,b,c,d){return!0},
ou:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
mw:function(){var s=t.N,r=P.lY(C.z,s),q=H.b(["TEMPLATE"],t.s)
s=new W.hA(r,P.cZ(s),P.cZ(s),P.cZ(s),null)
s.eR(null,new H.d4(C.z,new W.kf(),t.dv),q,null)
return s},
mP:function(a,b){var s=$.aN
if(s===C.f)return a
return s.dL(a,b)},
v:function v(){},
hZ:function hZ(){},
eh:function eh(){},
ei:function ei(){},
bR:function bR(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
cD:function cD(){},
aD:function aD(){},
ib:function ib(){},
J:function J(){},
cJ:function cJ(){},
ic:function ic(){},
ar:function ar(){},
aS:function aS(){},
id:function id(){},
ie:function ie(){},
ig:function ig(){},
bc:function bc(){},
ih:function ih(){},
cK:function cK(){},
cL:function cL(){},
et:function et(){},
ii:function ii(){},
fS:function fS(a,b){this.a=a
this.b=b},
C:function C(){},
il:function il(){},
m:function m(){},
d:function d(){},
am:function am(){},
bY:function bY(){},
eu:function eu(){},
ew:function ew(){},
aG:function aG(){},
ix:function ix(){},
bD:function bD(){},
bE:function bE(){},
c_:function c_(){},
c1:function c1(){},
bF:function bF(){},
iH:function iH(){},
iY:function iY(){},
c3:function c3(){},
eN:function eN(){},
iZ:function iZ(a){this.a=a},
eO:function eO(){},
j_:function j_(a){this.a=a},
aH:function aH(){},
eP:function eP(){},
ao:function ao(){},
a5:function a5(a){this.a=a},
t:function t(){},
de:function de(){},
aJ:function aJ(){},
f1:function f1(){},
f7:function f7(){},
jb:function jb(a){this.a=a},
f9:function f9(){},
aw:function aw(){},
fb:function fb(){},
aL:function aL(){},
fc:function fc(){},
aM:function aM(){},
fg:function fg(){},
ji:function ji(a){this.a=a},
ap:function ap(){},
bm:function bm(){},
dr:function dr(){},
fk:function fk(){},
fl:function fl(){},
cg:function cg(){},
ax:function ax(){},
aj:function aj(){},
fn:function fn(){},
fo:function fo(){},
js:function js(){},
ay:function ay(){},
bJ:function bJ(){},
fv:function fv(){},
jx:function jx(){},
b3:function b3(){},
jI:function jI(){},
fL:function fL(){},
bo:function bo(){},
cn:function cn(){},
co:function co(){},
fT:function fT(){},
dH:function dH(){},
h6:function h6(){},
dN:function dN(){},
hq:function hq(){},
hy:function hy(){},
fQ:function fQ(){},
h_:function h_(a){this.a=a},
l1:function l1(a,b){this.a=a
this.$ti=b},
dI:function dI(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k2:function k2(a){this.a=a},
li:function li(a){this.$ti=a},
cp:function cp(a){this.a=a},
M:function M(){},
df:function df(a){this.a=a},
j2:function j2(a){this.a=a},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(){},
ka:function ka(){},
kb:function kb(){},
hA:function hA(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kf:function kf(){},
hz:function hz(){},
cQ:function cQ(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
k9:function k9(a,b){this.a=a
this.b=b},
hK:function hK(a){this.a=a
this.b=0},
kn:function kn(a){this.a=a},
fU:function fU(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h3:function h3(){},
h4:function h4(){},
h7:function h7(){},
h8:function h8(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hj:function hj(){},
hk:function hk(){},
hm:function hm(){},
dU:function dU(){},
dV:function dV(){},
ho:function ho(){},
hp:function hp(){},
hu:function hu(){},
hB:function hB(){},
hC:function hC(){},
dX:function dX(){},
dY:function dY(){},
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
P:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.f("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.F(a,0)
r=C.a.F(b,0)
if(s>r){q=r
r=s
s=q}return new K.f4(s,r)},
aQ:function aQ(){},
cS:function cS(){},
ae:function ae(a){this.a=a},
f4:function f4(a,b){this.a=a
this.b=b},
u:function u(a){this.a=a}},L={
jv:function(){var s=t.N
return new L.ju(P.S(s,t.dl),P.S(s,t.f7),P.cZ(s))},
fe:function fe(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a,b){this.b=a
this.c=b},
ju:function ju(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dt:function dt(a,b){this.b=a
this.c=!1
this.a=b}},O={
l_:function(a){return new O.ad(H.b([],a.K("x<0>")),a.K("ad<0>"))},
ad:function ad(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
da:function da(a){this.a=a
this.b=null},
eM:function(a,b){return new O.d8(new V.w(0,0,0),a,b,new A.ah(!1,!1,!1))},
d5:function d5(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=null},
iQ:function iQ(a,b){this.a=a
this.b=b},
iR:function iR(){},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(){},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(){},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(){},
iK:function iK(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
d7:function d7(){},
iL:function iL(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
d8:function d8(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iN:function iN(a){this.b=a},
iO:function iO(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iP:function iP(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
dn:function dn(a){var _=this
_.c=_.a=null
_.d=a
_.e=null},
cf:function cf(){}},E={
lU:function(){var s=O.l_(t.m),r=new E.bC(s)
s.bh(r.gi2(),r.gi5())
r.sbY(0,null)
return r},
mo:function(){var s=window.navigator.vendor
s.toString
if(C.a.C(s,"Google"))return C.G
s=window.navigator.userAgent
s.toString
if(C.a.C(s,"Firefox"))return C.q
s=window.navigator.appVersion
s.toString
if(C.a.C(s,"Trident")||C.a.C(s,"Edge"))return C.r
s=window.navigator.appName
s.toString
if(C.a.C(s,"Microsoft"))return C.r
return C.H},
mp:function(){var s=window.navigator.appVersion
s.toString
if(C.a.C(s,"Win"))return C.a1
if(C.a.C(s,"Mac"))return C.A
if(C.a.C(s,"Linux"))return C.a2
return C.a3},
o7:function(a,b){var s
Date.now()
s=t.g8
s=new E.j7(a,new P.W(Date.now(),!1),new P.W(Date.now(),!1),new O.da(H.b([],s)),new O.da(H.b([],s)),new O.da(H.b([],s)),H.b([null],t.bc),P.S(t.N,t.fg))
s.eM(a,b)
return s},
og:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.me(a,!0,!0,!0,!1)
s=W.kZ()
r=s.style
r.width="100%"
r.height="100%"
J.lJ(a).n(0,s)
return E.me(s,!0,!0,!0,!1)},
me:function(a,b,c,d,e){var s,r,q,p,o,n,m="mousemove",l=t.A,k=t.gW.a(C.i.cZ(a,"webgl2",P.nR(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],l,l)))
if(k==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.o7(k,a)
l=H.kq(k.getParameter(3379))
r=H.kq(k.getParameter(34076))
q=H.b([],t.g9)
p=$.ip
o=new X.fJ(a,q,(p==null?$.ip=new E.h0(E.mo(),E.mp()):p).a===C.q?0.16666666666666666:0.005555555555555556)
n=document
n.toString
q.push(W.Y(n,"contextmenu",o.gfz(),!1))
q.push(W.Y(a,"focus",o.gfF(),!1))
q.push(W.Y(a,"blur",o.gfq(),!1))
q.push(W.Y(n,"keyup",o.gfJ(),!1))
q.push(W.Y(n,"keydown",o.gfH(),!1))
q.push(W.Y(a,"mousedown",o.gfN(),!1))
q.push(W.Y(a,"mouseup",o.gfR(),!1))
q.push(W.Y(a,m,o.gfP(),!1))
W.im(a)
W.im(a)
q.push(W.Y(a,W.im(a),o.gfT(),!1))
q.push(W.Y(n,m,o.gfB(),!1))
q.push(W.Y(n,"mouseup",o.gfD(),!1))
q.push(W.Y(n,"pointerlockchange",o.gfV(),!1))
q.push(W.Y(a,"touchstart",o.gha(),!1))
q.push(W.Y(a,"touchend",o.gh6(),!1))
q.push(W.Y(a,"touchmove",o.gh8(),!1))
r=new E.fs(a,s,new T.jo(k,l,r),o,new P.W(Date.now(),!1))
r.ds()
return r},
i5:function i5(){},
bC:function bC(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bT:function bT(a){this.b=a},
c7:function c7(a){this.b=a},
h0:function h0(a,b){this.a=a
this.b=b},
j7:function j7(a,b,c,d,e,f,g,h){var _=this
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
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
fs:function fs(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.Q=null
_.cx=!1
_.cy=e
_.db=0},
jr:function jr(a){this.a=a}},Z={
lh:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cs(c)),35044)
a.bindBuffer(b,null)
return new Z.fM(b,s)},
az:function(a){return new Z.bn(a)},
fM:function fM(a,b){this.a=a
this.b=b},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
fN:function fN(a){this.a=a},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
bn:function bn(a){this.a=a}},D={
H:function(){return new D.bX()},
i7:function i7(){},
bX:function bX(){var _=this
_.c=_.b=_.a=null
_.d=0},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
R:function R(){},
aT:function aT(){},
aU:function aU(){},
E:function E(a,b,c){this.c=a
this.d=b
this.e=c},
bW:function bW(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cX:function cX(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={cC:function cC(a,b){this.a=a
this.b=b},eG:function eG(a,b){this.a=a
this.b=b},iD:function iD(a,b){this.c=a
this.d=b},d1:function d1(a,b,c){this.x=a
this.c=b
this.d=c},iI:function iI(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},c4:function c4(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},j0:function j0(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},c5:function c5(a,b,c){this.x=a
this.c=b
this.d=c},f3:function f3(){},ds:function ds(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jw:function jw(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fJ:function fJ(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
l2:function(a){var s=new V.ba(0,0,0,1),r=$.m9
if(r==null){r=V.m8(0,0,1,1)
$.m9=r}return new X.ex(s,r)},
m1:function(a){var s,r,q=new X.eZ(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gt().n(0,q.geU())
q.aD(new D.E("mover",s,q.b))}r=q.c
$.G().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.aD(new D.E("fov",r,1.0471975511965976))}r=q.d
$.G().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.aD(new D.E("near",r,0.1))}r=q.e
$.G().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.aD(new D.E("far",r,2000))}return q},
ex:function ex(a,b){var _=this
_.a=a
_.b=!0
_.r=b
_.x=null},
iA:function iA(){this.b=null},
eZ:function eZ(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jk:function jk(){}},V={
i8:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.ba(s,r,q,1)},
lC:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qn:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bE(a-b,s)
return(a<0?a+s:a)+b},
D:function(a,b,c){$.G().toString
return C.a.aw(C.d.cV(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cx:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.G().toString
n=C.a.aw(C.d.cV(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.e(l,m)
s=C.a.aw(l[m],q)
r=l.length
if(m>=r)return H.e(l,m)
l[m]=s}return l},
lE:function(a){return C.d.iq(Math.pow(2,C.d.cG(Math.log(a)/Math.log(2))))},
an:function(){var s=$.m0
return s==null?$.m0=V.aZ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aZ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m_:function(a,b,c){var s=c.N(),r=b.bw(s).N(),q=s.bw(r),p=new V.F(a.a,a.b,a.c)
return V.aZ(r.a,q.a,s.a,r.bg(0).a9(p),r.b,q.b,s.b,q.bg(0).a9(p),r.c,q.c,s.c,s.bg(0).a9(p),0,0,0,1)},
m2:function(){var s=$.b0
return s==null?$.b0=new V.a3(0,0,0):s},
m8:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.f6(a,b,c,d)},
fK:function(){var s=$.mn
return s==null?$.mn=new V.F(0,0,0):s},
on:function(){var s=$.jO
return s==null?$.jO=new V.F(-1,0,0):s},
lg:function(){var s=$.jP
return s==null?$.jP=new V.F(0,1,0):s},
oo:function(){var s=$.jQ
return s==null?$.jQ=new V.F(0,0,1):s},
om:function(a,b,c){return new V.F(a,b,c)},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iq:function iq(){},
d9:function d9(a,b,c,d,e,f,g,h,i){var _=this
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
V:function V(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
bi:function bi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function a4(a,b){this.a=a
this.b=b},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
qh:function(a){P.oh(C.S,new V.kW(a))},
o9:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.Y(n,"scroll",new V.jg(s),!1)
return new V.je(o)},
aE:function aE(){},
kW:function kW(a){this.a=a},
er:function er(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
ey:function ey(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
ez:function ez(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
f0:function f0(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
je:function je(a){this.a=a
this.b=null},
jg:function jg(a){this.a=a},
jf:function jf(a){this.a=a},
jh:function jh(a){this.a=a},
jl:function jl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jn:function jn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jm:function jm(){}},U={
ia:function(){return new U.i9()},
lQ:function(a){var s=V.an(),r=new U.cF(s)
if(!s.q(0,a))r.a=a
return r},
i9:function i9(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cF:function cF(a){this.a=a
this.b=null},
bZ:function bZ(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
Z:function Z(){},
dE:function dE(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
dF:function dF(a,b,c,d,e){var _=this
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
dG:function dG(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={cE:function cE(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},cI:function cI(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},cO:function cO(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
nU:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gaC(a5)+a6.gaC(a6)+a7.gaC(a7)+a8.gaC(a8)+a9.gaC(a9)+b0.gaC(b0)+b1.gaC(b1)+b2.gaC(b2)+b3.gaC(b3)+"_"
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
b=$.aO()
if(h){s=$.bv()
b=new Z.bn(b.a|s.a)}if(g)b=new Z.bn(b.a|$.bu().a)
if(f)b=new Z.bn(b.a|$.bw().a)
if(e)b=new Z.bn(b.a|$.bt().a)
return new A.iM(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
kz:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kA:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.kz(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hX(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
pr:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kz(b,r,"emission")
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
pn:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kA(b,r,"ambient")
b.a+="\n"},
pp:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
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
ps:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
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
py:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
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
pu:function(a,b){var s,r,q
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
pw:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kz(b,r,"reflect")
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
px:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kz(b,r,"refract")
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
po:function(a,b,c){var s,r,q,p,o,n,m=b.b
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
n=H.b([],p)
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
pq:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
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
m=H.b([],p)
l=a.b
if(l.a||l.b||!1)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.b([],p)
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
pv:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
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
i=H.b([],p)
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
pz:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
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
if(m){s=$.ip
if(s==null)s=$.ip=new E.h0(E.mo(),E.mp())
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
g=H.b([],s)
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
pt:function(a,b){var s,r
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
pA:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.X(""),j=""+"precision mediump float;\n"
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
A.pr(a,k)
A.pn(a,k)
A.pp(a,k)
A.ps(a,k)
A.py(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.pw(a,k)
A.px(a,k)}A.pu(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.po(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pq(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pv(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pz(a,p[n],k)
A.pt(a,k)}p=k.a+="// === Main ===\n"
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
j=a.b
if(j.a||j.b||!1)k.a+="   setAmbientColor();\n"
j=a.c
if(j.a||j.b||!1)k.a+="   setDiffuseColor();\n"
j=a.d
if(j.a||j.b||!1)k.a+="   setInvDiffuseColor();\n"
j=a.e
if(j.a||j.b||!1)k.a+="   setSpecularColor();\n"
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.e(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ah(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.e(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ah(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.e(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ah(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.e(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ah(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}j=a.a
if(j.a||j.b||!1)m.push("emissionColor()")
j=a.r
if(j.a||j.b||!1)m.push("reflect(refl)")
j=a.x
if(j.a||j.b||!1)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.b.j(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
pB:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.ba+"];\n"
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
pD:function(a,b){var s
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
pC:function(a,b){var s
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
pF:function(a,b){var s,r
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
pG:function(a,b){var s,r
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
pE:function(a,b){var s
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
pH:function(a,b){var s
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
hX:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.a.ah(a,1)},
lf:function(a,b,c,d,e){var s=new A.fy(H.b([],t.t),a,c,e)
s.f=d
s.e=P.eK(d,0,!1,t.S)
return s},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a){this.a=a},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.iH=_.e7=_.e6=_.iG=_.e5=_.e4=_.e3=_.iF=_.e2=_.e1=_.e0=_.iE=_.e_=_.dZ=_.iD=_.dY=_.dX=_.dW=_.bb=_.ba=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cv=c
_.cw=d
_.cz=e
_.cA=f
_.cB=g
_.cC=h
_.cD=i
_.cE=j
_.iK=_.iJ=_.iI=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b8:function b8(a,b){this.a=a
this.b=b},
bb:function bb(a,b){this.a=a
this.b=b},
bj:function bj(a,b){this.a=a
this.b=b},
bl:function bl(a,b){this.a=a
this.b=b},
iM:function iM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.ba=b5
_.bb=b6
_.dW=b7},
dx:function dx(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dy:function dy(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dA:function dA(a,b,c,d,e,f,g,h,i,j){var _=this
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
dD:function dD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cb:function cb(){},
dp:function dp(a,b){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
a0:function a0(){},
jA:function jA(a){this.a=a},
ci:function ci(a,b,c){this.a=a
this.c=b
this.d=c},
fA:function fA(a,b,c){this.a=a
this.c=b
this.d=c},
fB:function fB(a,b,c){this.a=a
this.c=b
this.d=c},
fC:function fC(a,b,c){this.a=a
this.c=b
this.d=c},
fy:function fy(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
du:function du(a,b,c){this.a=a
this.c=b
this.d=c},
fz:function fz(a,b,c){this.a=a
this.c=b
this.d=c},
dv:function dv(a,b,c){this.a=a
this.c=b
this.d=c},
dw:function dw(a,b,c){this.a=a
this.c=b
this.d=c},
fD:function fD(a,b,c){this.a=a
this.c=b
this.d=c},
dz:function dz(a,b,c){this.a=a
this.c=b
this.d=c},
cj:function cj(a,b,c){this.a=a
this.c=b
this.d=c},
dB:function dB(a,b,c){this.a=a
this.c=b
this.d=c},
dC:function dC(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kt:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
e6:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.F(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.F(s+a4,r+a2,q+a3)
o=new V.F(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.F(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.kt(h)
j=F.kt(g)
a.i0(F.qj(a0,a1,new F.kp(i,F.kt(f),F.kt(e),j,k,c),b))},
qj:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.lc()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.z(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.jR(d,d,new V.ba(m,0,0,1),d,d,new V.V(o,1),d,d,0)
n.n(0,l)
c.$3(l,o,0)
q.push(l.ct(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.z(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.jR(d,d,new V.ba(g,f,e,1),d,d,new V.V(o,j),d,d,0)
h.n(0,l)
c.$3(l,o,k)
q.push(l.ct(a0))}}s.ga3().hz(a+1,b+1,q)
return s},
lc:function(){return new F.jc()},
jR:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cm()
h=$.nh()
s=$.aO()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bv().a)!==0)q.r=e
if((r&$.bu().a)!==0)q.x=b
if((r&$.bw().a)!==0)q.y=f
if((r&$.bP().a)!==0)q.z=g
if((r&$.ni().a)!==0)q.Q=c
if((r&$.cz().a)!==0)q.ch=i
if((r&$.bt().a)!==0)q.cx=a
return q},
kp:function kp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
as:function as(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eI:function eI(){this.b=this.a=null},
f2:function f2(){this.a=null},
jc:function jc(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
jd:function jd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dl:function dl(a,b){this.a=a
this.b=b},
dm:function dm(a,b){this.a=a
this.b=b},
cc:function cc(a,b){this.a=a
this.b=b},
cm:function cm(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jY:function jY(a){this.a=a},
jX:function jX(a){this.a=a},
z:function z(a,b){this.a=a
this.b=!1
this.c=b},
jS:function jS(a,b,c){this.b=a
this.c=b
this.d=c},
jT:function jT(a,b){this.a=a
this.b=b},
jU:function jU(a,b){this.a=a
this.b=b},
jV:function jV(a,b){this.b=a
this.c=b},
jW:function jW(a){this.b=a}},T={bI:function bI(){},fp:function fp(){},fq:function fq(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.y=null},fr:function fr(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},jo:function jo(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0},jq:function jq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},jp:function jp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
qe:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7="bumpMaps",a8="controls",a9=34067,b0="modifiers",b1=V.o9("Test 015"),b2=W.kZ()
b2.className="pageLargeCanvas"
b2.id=a5
b1.a.appendChild(b2).toString
s=t.s
b1.dF(H.b(["Test of Material Lighting shader with bump mapping, reflections, refractions."],s))
b1.hw(H.b(["bumpMaps","controls"],s))
b1.dF(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a5)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.og(r,!0,!0,!0,!1)
p=X.l2(a6)
p.sdP(0,!1)
o=E.lU()
n=F.lc()
F.e6(n,a6,a6,1,1,1,0,0,1)
F.e6(n,a6,a6,1,1,0,1,0,3)
F.e6(n,a6,a6,1,1,0,0,1,2)
F.e6(n,a6,a6,1,1,-1,0,0,0)
F.e6(n,a6,a6,1,1,0,-1,0,0)
F.e6(n,a6,a6,1,1,0,0,-1,3)
n.aP()
o.sbY(0,n)
m=q.f
l=m.a
k=l.createTexture()
k.toString
l.bindTexture(a9,k)
l.texParameteri(a9,10242,10497)
l.texParameteri(a9,10243,10497)
l.texParameteri(a9,10241,9729)
l.texParameteri(a9,10240,9729)
l.bindTexture(a9,a6)
j=new T.fr(k)
m.b5(j,k,"../resources/maskonaive/posx.jpg",34069,!1,!1)
m.b5(j,k,"../resources/maskonaive/negx.jpg",34070,!1,!1)
m.b5(j,k,"../resources/maskonaive/posy.jpg",34071,!1,!1)
m.b5(j,k,"../resources/maskonaive/negy.jpg",34072,!1,!1)
m.b5(j,k,"../resources/maskonaive/posz.jpg",34073,!1,!1)
m.b5(j,k,"../resources/maskonaive/negz.jpg",34074,!1,!1)
k=O.l_(t.gc)
i=new O.d5(k)
k.bh(i.gfm(),i.gfo())
k=i.gej()
k.gt().n(0,i.gdq())
m=i.gaM()
k.gei().n(0,m)
k=i.gej()
h=V.lg()
l=U.lQ(V.m_(V.m2(),h,new V.F(-1,-1,-1)))
g=new D.bW(new V.w(1,1,1),V.oo(),V.lg(),V.on())
f=g.a
g.a=l
l.gt().n(0,g.geP())
g.aJ(new D.E("mover",f,g.a))
l=new V.w(1,1,1)
if(!g.b.q(0,l)){f=g.b
g.b=l
g.aJ(new D.E("color",f,l))}k.n(0,g)
l=i.gaj()
l.sw(0,new V.w(0.1,0.1,0.1))
l=i.gak()
l.sw(0,new V.w(0.1,0.1,0.1))
i.gbZ().sw(0,new V.w(0,0,0))
l=i.gbZ()
l.bs(new A.ah(!0,l.c.b,!1))
l.dv(10)
l=i.ch
if(l!==j){if(l!=null)l.gt().S(0,m)
f=i.ch
i.ch=j
j.gt().n(0,m)
i.U(new D.E("environment",f,i.ch))}i.gZ().saR(0.6)
m=i.gZ()
m.sw(0,new V.w(0.2,0.3,1))
m=i.gam()
m.sw(0,new V.w(0.6,0.6,0.6))
e=new U.bZ(V.an(),H.b([],t.eJ))
e.bh(e.gfi(),e.gfZ())
m=q.x
l=U.ia()
k=U.ia()
g=$.bL
if(g==null)g=$.bL=new V.a4(0,0)
g=new U.dF(l,k,new X.a8(!1,!1,!1),g,V.an())
l.scY(0,!0)
l.scM(6.283185307179586)
l.scO(0)
l.sal(0,0)
l.scN(100)
l.sa0(0)
l.scu(0.5)
d=g.gb2()
l.gt().n(0,d)
k.scY(0,!0)
k.scM(6.283185307179586)
k.scO(0)
k.sal(0,0)
k.scN(100)
k.sa0(0)
k.scu(0.5)
k.gt().n(0,d)
l=new X.a8(!1,!1,!1)
if(!g.d.q(0,l)){f=g.d
g.d=l
g.R(new D.E(b0,f,l))}g.bu(m)
e.n(0,g)
U.ia()
if($.bL==null)$.bL=new V.a4(0,0)
V.an()
l=U.ia()
k=$.bL
if(k==null)k=$.bL=new V.a4(0,0)
k=new U.dE(l,new X.a8(!1,!1,!1),k,V.an())
l.scY(0,!0)
l.scM(6.283185307179586)
l.scO(0)
l.sal(0,0)
l.scN(100)
l.sa0(0)
l.scu(0.2)
l.gt().n(0,k.gb2())
l=new X.a8(!0,!1,!1)
if(!k.c.q(0,l)){f=k.c
k.c=l
k.R(new D.E(b0,f,l))}k.bu(m)
e.n(0,k)
l=new X.a8(!1,!1,!1)
k=new U.dG(l,V.an())
g=new X.a8(!1,!1,!1)
if(!l.q(0,g)){k.b=g
k.R(new D.E(b0,l,g))}k.bu(m)
e.n(0,k)
e.n(0,U.lQ(V.aZ(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.m1(e)
m=E.lU()
b=new M.cI(m)
n=F.lc()
l=n.ga6()
k=new V.F(-1,-1,1).N()
a=l.bJ(new V.bi(1,2,4,6),V.i8(255,0,0),new V.a3(-1,-1,0),new V.V(0,1),k,a6)
k=n.ga6()
l=new V.F(1,-1,1).N()
a0=k.bJ(new V.bi(0,3,4,6),V.i8(0,0,255),new V.a3(1,-1,0),new V.V(1,1),l,a6)
l=n.ga6()
k=new V.F(1,1,1).N()
a1=l.bJ(new V.bi(0,2,5,6),V.i8(0,128,0),new V.a3(1,1,0),new V.V(1,0),k,a6)
k=n.ga6()
l=$.a9
if(l==null)l=$.a9=new V.V(0,0)
g=new V.F(-1,1,1).N()
a2=k.bJ(new V.bi(0,2,4,7),V.i8(255,255,0),new V.a3(-1,1,0),l,g,a6)
n.ga3().hy(H.b([a,a0,a1,a2],t.k))
n.aP()
m.sbY(0,n)
b.sbv(a6)
b.sbA(0,a6)
b.sbB(a6)
m=new O.dn(new V.w(1,1,1))
f=m.c
m.c=j
j.gt().n(0,m.gaM())
m.U(new D.E("boxTexture",f,m.c))
b.sbB(m)
b.sbA(0,p)
b.sbv(c)
m=O.l_(t.m)
a3=new M.cO(m)
m.bh(a3.gft(),a3.gfv())
a4=X.l2(a6)
a3.sbv(a6)
a3.sbA(0,a4)
a3.sbB(a6)
a3.sbv(c)
a3.sbB(i)
a3.sbA(0,p)
m.n(0,o)
t.fA.a(a3.c).sdP(0,!1)
m=t.ba
l=H.b([b,a3],m)
m=new M.cE(H.b([],m))
m.bh(m.gh2(),m.gh4())
m.a8(0,l)
l=q.d
if(l!==m){if(l!=null)l.gt().S(0,q.gd6())
q.d=m
m.gt().n(0,q.gd6())
q.d7()}r=s.getElementById(a8)
if(r==null)H.h(P.f("Failed to find controls for RadioGroup"))
m=new V.j5(a8,!0,r)
m.dD(0,"Silver",new B.kK(i),!0)
m.ai(0,"Gold",new B.kL(i))
m.ai(0,"Glass",new B.kM(i))
m.ai(0,"Blue Glass",new B.kN(i))
m.ai(0,"Water Bubble",new B.kO(i))
m.ai(0,"No Reflection",new B.kP(i))
m.ai(0,"Pink Distort",new B.kQ(i))
m.ai(0,"Cloak",new B.kR(i))
m.ai(0,"White and Shiny",new B.kS(i))
r=s.getElementById(a7)
if(r==null)H.h(P.f("Failed to find bumpMaps for Texture2DGroup"))
s=new V.jl(a7,!0,r,new B.kT(i,q))
s.ai(0,"../resources/BumpMap1.png",!0)
s.n(0,"../resources/BumpMap2.png")
s.n(0,"../resources/BumpMap3.png")
s.n(0,"../resources/BumpMap4.png")
s.n(0,"../resources/BumpMap5.png")
s.n(0,"../resources/ScrewBumpMap.png")
s.n(0,"../resources/CtrlPnlBumpMap.png")
s=q.Q
if(s==null)s=q.Q=D.H()
m=s.b
s=m==null?s.b=H.b([],t.a):m
s.push(new B.kU(b1,i))
V.qh(q)},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a,b){this.a=a
this.b=b},
kU:function kU(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l8.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gH:function(a){return H.dh(a)},
i:function(a){return"Instance of '"+H.di(a)+"'"}}
J.eC.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iac:1}
J.cV.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.bf.prototype={
gH:function(a){return 0},
i:function(a){return String(a)},
$ilW:1}
J.f_.prototype={}
J.bK.prototype={}
J.aV.prototype={
i:function(a){var s=a[$.n3()]
if(s==null)return this.eH(a)
return"JavaScript function for "+J.cA(s)},
$icR:1}
J.x.prototype={
S:function(a,b){var s
if(!!a.fixed$length)H.h(P.B("remove"))
for(s=0;s<a.length;++s)if(J.a6(a[s],b)){a.splice(s,1)
return!0}return!1},
a8:function(a,b){if(!!a.fixed$length)H.h(P.B("addAll"))
this.eX(a,b)
return},
eX:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aF(a))
for(s=0;s<r;++s)a.push(b[s])},
D:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aF(a))}},
j:function(a,b){var s,r,q=a.length,p=P.eK(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.y(a[s])
if(s>=q)return H.e(p,s)
p[s]=r}return p.join(b)},
hY:function(a){return this.j(a,"")},
hS:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aF(a))}return s},
hT:function(a,b,c){return this.hS(a,b,c,t.A)},
hR:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aF(a))}throw H.c(H.l5())},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gaG:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.l5())},
dH:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aF(a))}return!1},
bj:function(a,b){if(!!a.immutable$list)H.h(P.B("sort"))
H.oc(a,b==null?J.pe():b)},
eD:function(a){return this.bj(a,null)},
C:function(a,b){var s
for(s=0;s<a.length;++s)if(J.a6(a[s],b))return!0
return!1},
i:function(a){return P.l4(a,"[","]")},
gP:function(a){return new J.ag(a,a.length)},
gH:function(a){return H.dh(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.h(P.B("set length"))
if(b>a.length)H.lt(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cw(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.h(P.B("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cw(a,b))
a[b]=c},
$in:1,
$ii:1,
$ip:1}
J.iB.prototype={}
J.ag.prototype={
gB:function(a){return H.T(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.c2.prototype={
as:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbN(b)
if(this.gbN(a)===s)return 0
if(this.gbN(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbN:function(a){return a===0?1/a<0:a<0},
iq:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.B(""+a+".toInt()"))},
cG:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.B(""+a+".floor()"))},
az:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.B(""+a+".round()"))},
cV:function(a,b){var s
if(b>20)throw H.c(P.aa(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbN(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
bE:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eJ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dz(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dz(a,b)},
dz:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.B("Result of truncating division is "+H.y(s)+": "+H.y(a)+" ~/ "+b))},
b7:function(a,b){var s
if(a>0)s=this.dw(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hn:function(a,b){if(b<0)throw H.c(H.eb(b))
return this.dw(a,b)},
dw:function(a,b){return b>31?0:a>>>b},
$ia1:1,
$ia2:1}
J.cU.prototype={$ik:1}
J.eD.prototype={}
J.be.prototype={
V:function(a,b){if(b<0)throw H.c(H.cw(a,b))
if(b>=a.length)H.h(H.cw(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.cw(a,b))
return a.charCodeAt(b)},
a1:function(a,b){return a+b},
bd:function(a,b,c,d){var s=P.bk(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
ad:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a2:function(a,b){return this.ad(a,b,0)},
u:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.f5(b,null))
if(b>c)throw H.c(P.f5(b,null))
if(c>a.length)throw H.c(P.f5(c,null))
return a.substring(b,c)},
ah:function(a,b){return this.u(a,b,null)},
it:function(a){return a.toLowerCase()},
T:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.P)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aw:function(a,b){var s=b-a.length
if(s<=0)return a
return this.T(" ",s)+a},
bL:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ed:function(a,b){return this.bL(a,b,0)},
hE:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aa(c,0,s,null,null))
return H.n_(a,b,c)},
C:function(a,b){return this.hE(a,b,0)},
as:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gH:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl:function(a){return a.length},
$il:1}
H.cW.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.r.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.V(this.a,b)}}
H.n.prototype={}
H.d0.prototype={
gP:function(a){return new H.bg(this,this.gl(this))},
bW:function(a,b){return this.eG(0,b)}}
H.bg.prototype={
gB:function(a){return H.T(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a,p=J.cy(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.aF(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.J(q,s);++r.c
return!0}}
H.aX.prototype={
gP:function(a){return new H.eL(J.aB(this.a),this.b)},
gl:function(a){return J.aP(this.a)},
J:function(a,b){return this.b.$1(J.hY(this.a,b))}}
H.cM.prototype={$in:1}
H.eL.prototype={
v:function(){var s=this,r=s.b
if(r.v()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){return H.T(this).Q[1].a(this.a)}}
H.d4.prototype={
gl:function(a){return J.aP(this.a)},
J:function(a,b){return this.b.$1(J.hY(this.a,b))}}
H.b4.prototype={
gP:function(a){return new H.fO(J.aB(this.a),this.b)}}
H.fO.prototype={
v:function(){var s,r
for(s=this.a,r=this.b;s.v();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.cP.prototype={}
H.fG.prototype={
m:function(a,b,c){throw H.c(P.B("Cannot modify an unmodifiable list"))}}
H.ck.prototype={}
H.cG.prototype={
i:function(a){return P.lb(this)},
m:function(a,b,c){H.nE()},
$iI:1}
H.cH.prototype={
gl:function(a){return this.a},
cr:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cr(0,b))return null
return this.dh(b)},
dh:function(a){return this.b[a]},
D:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.dh(q))}}}
H.jy.prototype={
av:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dg.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eF.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fF.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.j3.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.ht.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bA.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.n1(r==null?"unknown":r)+"'"},
$icR:1,
giw:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fm.prototype={}
H.ff.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.n1(s)+"'"}}
H.bS.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bS))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gH:function(a){var s,r=this.c
if(r==null)s=H.dh(this.a)
else s=typeof r!=="object"?J.kY(r):H.dh(r)
return(s^H.dh(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.y(this.d)+"' of "+("Instance of '"+H.di(s)+"'")}}
H.f8.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.U.prototype={
gl:function(a){return this.a},
gbM:function(a){return this.a===0},
ga4:function(a){return new H.cY(this,H.T(this).K("cY<1>"))},
giv:function(a){var s=this,r=H.T(s)
return H.nT(s.ga4(s),new H.iC(s),r.c,r.Q[1])},
cr:function(a,b){var s=this.b
if(s==null)return!1
return this.f4(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bG(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bG(p,b)
q=r==null?n:r.b
return q}else return o.hW(b)},
hW:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.di(p,q.ef(a))
r=q.eg(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.d9(s==null?q.b=q.cg():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.d9(r==null?q.c=q.cg():r,b,c)}else q.hX(b,c)},
hX:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.cg()
s=p.ef(a)
r=p.di(o,s)
if(r==null)p.cl(o,s,[p.ci(a,b)])
else{q=p.eg(r,a)
if(q>=0)r[q].b=b
else r.push(p.ci(a,b))}},
D:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aF(s))
r=r.c}},
d9:function(a,b,c){var s=this.bG(a,b)
if(s==null)this.cl(a,b,this.ci(b,c))
else s.b=c},
ff:function(){this.r=this.r+1&67108863},
ci:function(a,b){var s,r=this,q=new H.iE(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.ff()
return q},
ef:function(a){return J.kY(a)&0x3ffffff},
eg:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1},
i:function(a){return P.lb(this)},
bG:function(a,b){return a[b]},
di:function(a,b){return a[b]},
cl:function(a,b,c){a[b]=c},
f8:function(a,b){delete a[b]},
f4:function(a,b){return this.bG(a,b)!=null},
cg:function(){var s="<non-identifier-key>",r=Object.create(null)
this.cl(r,s,r)
this.f8(r,s)
return r}}
H.iC.prototype={
$1:function(a){var s=this.a
return H.T(s).Q[1].a(s.h(0,a))},
$S:function(){return H.T(this.a).K("2(1)")}}
H.iE.prototype={}
H.cY.prototype={
gl:function(a){return this.a.a},
gP:function(a){var s=this.a,r=new H.eJ(s,s.r)
r.c=s.e
return r}}
H.eJ.prototype={
gB:function(a){return H.T(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aF(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kG.prototype={
$1:function(a){return this.a(a)},
$S:41}
H.kH.prototype={
$2:function(a,b){return this.a(a,b)},
$S:47}
H.kI.prototype={
$1:function(a){return this.a(a)},
$S:40}
H.eE.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im7:1}
H.db.prototype={$idb:1}
H.a_.prototype={$ia_:1}
H.c6.prototype={
gl:function(a){return a.length},
$iA:1}
H.bG.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]},
m:function(a,b,c){H.b5(b,a,a.length)
a[b]=c},
$in:1,
$ii:1,
$ip:1}
H.dc.prototype={
m:function(a,b,c){H.b5(b,a,a.length)
a[b]=c},
$in:1,
$ii:1,
$ip:1}
H.eQ.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.eR.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.eS.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.eT.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.eU.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.dd.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.bH.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b5(b,a,a.length)
return a[b]},
$ibH:1,
$ich:1}
H.dO.prototype={}
H.dP.prototype={}
H.dQ.prototype={}
H.dR.prototype={}
H.av.prototype={
K:function(a){return H.hI(v.typeUniverse,this,a)},
bm:function(a){return H.oN(v.typeUniverse,this,a)}}
H.h5.prototype={}
H.h1.prototype={
i:function(a){return this.a}}
H.e_.prototype={}
P.k_.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:29}
P.jZ.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:37}
P.k0.prototype={
$0:function(){this.a.$0()},
$S:10}
P.k1.prototype={
$0:function(){this.a.$0()},
$S:10}
P.dZ.prototype={
eS:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cv(new P.kh(this,b),0),a)
else throw H.c(P.B("`setTimeout()` not found."))},
eT:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cv(new P.kg(this,a,Date.now(),b),0),a)
else throw H.c(P.B("Periodic timer."))},
$ijt:1}
P.kh.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.kg.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eJ(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.cq.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.y(this.a)+")"}}
P.bM.prototype={
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
if(r instanceof P.cq){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aB(s)
if(o instanceof P.bM){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dW.prototype={
gP:function(a){return new P.bM(this.a())}}
P.fP.prototype={}
P.ce.prototype={}
P.fh.prototype={}
P.ko.prototype={}
P.kB.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:1}
P.k6.prototype={
il:function(a){var s,r,q,p=null
try{if(C.f===$.aN){a.$0()
return}P.pJ(p,p,this,a)}catch(q){s=H.al(q)
r=H.lA(q)
P.mN(p,p,this,s,r)}},
im:function(a,b){var s,r,q,p=null
try{if(C.f===$.aN){a.$1(b)
return}P.pK(p,p,this,a,b)}catch(q){s=H.al(q)
r=H.lA(q)
P.mN(p,p,this,s,r)}},
io:function(a,b){return this.im(a,b,t.A)},
hC:function(a){return new P.k7(this,a)},
dL:function(a,b){return new P.k8(this,a,b)}}
P.k7.prototype={
$0:function(){return this.a.il(this.b)},
$S:1}
P.k8.prototype={
$1:function(a){return this.a.io(this.b,a)},
$S:function(){return this.c.K("~(0)")}}
P.dK.prototype={
gP:function(a){var s=new P.dL(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
C:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.f3(b)
return r}},
f3:function(a){var s=this.d
if(s==null)return!1
return this.c7(s[this.c3(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.da(s==null?q.b=P.lj():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.da(r==null?q.c=P.lj():r,b)}else return q.eW(0,b)},
eW:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lj()
s=q.c3(b)
r=p[s]
if(r==null)p[s]=[q.c2(b)]
else{if(q.c7(r,b)>=0)return!1
r.push(q.c2(b))}return!0},
S:function(a,b){if((b&1073741823)===b)return this.hd(this.c,b)
else return this.hc(0,b)},
hc:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.c3(b)
r=n[s]
q=o.c7(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dB(p)
return!0},
da:function(a,b){if(a[b]!=null)return!1
a[b]=this.c2(b)
return!0},
hd:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dB(s)
delete a[b]
return!0},
dc:function(){this.r=this.r+1&1073741823},
c2:function(a){var s,r=this,q=new P.k5(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dc()
return q},
dB:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dc()},
c3:function(a){return J.kY(a)&1073741823},
c7:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a6(a[r].a,b))return r
return-1}}
P.k5.prototype={}
P.dL.prototype={
gB:function(a){return H.T(this).c.a(this.d)},
v:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aF(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cT.prototype={}
P.iF.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:11}
P.d_.prototype={$in:1,$ii:1,$ip:1}
P.j.prototype={
gP:function(a){return new H.bg(a,this.gl(a))},
J:function(a,b){return this.h(a,b)},
D:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.aF(a))}},
gbM:function(a){return this.gl(a)===0},
is:function(a,b){var s,r,q,p,o=this
if(o.gbM(a)){s=J.l6(0,H.b6(a).K("j.E"))
return s}r=o.h(a,0)
q=P.eK(o.gl(a),r,!0,H.b6(a).K("j.E"))
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s}return q},
ir:function(a){return this.is(a,!0)},
hP:function(a,b,c,d){var s
H.b6(a).K("j.E").a(d)
P.bk(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.l4(a,"[","]")}}
P.d2.prototype={}
P.iJ.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.y(a)
r.a=s+": "
r.a+=H.y(b)},
$S:31}
P.L.prototype={
D:function(a,b){var s,r,q
for(s=J.aB(this.ga4(a)),r=H.b6(a).K("L.V");s.v();){q=s.gB(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.aP(this.ga4(a))},
i:function(a){return P.lb(a)},
$iI:1}
P.hJ.prototype={
m:function(a,b,c){throw H.c(P.B("Cannot modify unmodifiable map"))}}
P.d3.prototype={
h:function(a,b){return J.lI(this.a,b)},
m:function(a,b,c){J.kX(this.a,b,c)},
D:function(a,b){J.eg(this.a,b)},
gl:function(a){return J.aP(this.a)},
i:function(a){return J.cA(this.a)},
$iI:1}
P.cl.prototype={}
P.dk.prototype={
a8:function(a,b){var s
for(s=J.aB(b);s.v();)this.n(0,s.gB(s))},
i:function(a){return P.l4(this,"{","}")},
J:function(a,b){var s,r,q,p,o="index"
H.pW(b,o,t.S)
P.m6(b,o)
for(s=P.ox(this,this.r),r=H.T(s).c,q=0;s.v();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.N(b,this,o,null,q))}}
P.dS.prototype={$in:1,$ii:1}
P.dM.prototype={}
P.e3.prototype={}
P.e5.prototype={}
P.jM.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.al(r)}return null},
$S:26}
P.jL.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.al(r)}return null},
$S:26}
P.i3.prototype={
i1:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bk(a3,a4,a2.length)
s=$.nk()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.F(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.kF(C.a.F(a2,k))
g=H.kF(C.a.F(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.e(s,f)
e=s[f]
if(e>=0){f=C.a.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.X("")
d=o}else d=o
c=d.a+=C.a.u(a2,p,q)
d.a=c+H.au(j)
p=k
continue}}throw H.c(P.a7("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.u(a2,p,a4)
d=r.length
if(n>=0)P.lM(a2,m,a4,n,l,d)
else{b=C.c.bE(d-1,4)+1
if(b===1)throw H.c(P.a7(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.bd(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.lM(a2,m,a4,n,l,a)
else{b=C.c.bE(a,4)
if(b===1)throw H.c(P.a7(a0,a2,a4))
if(b>1)a2=C.a.bd(a2,a4,a4,b===2?"==":"=")}return a2}}
P.i4.prototype={}
P.en.prototype={}
P.ep.prototype={}
P.io.prototype={}
P.iz.prototype={
i:function(a){return this.a}}
P.iy.prototype={
f5:function(a,b,c){var s,r,q,p,o,n,m,l=null
for(s=a.length,r=this.a,q=r.e,p=r.d,r=r.c,o=b,n=l;o<c;++o){if(o>=s)return H.e(a,o)
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
default:m=l}if(m!=null){if(n==null)n=new P.X("")
if(o>b)n.a+=C.a.u(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.a.u(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.jJ.prototype={
ghO:function(){return C.Q}}
P.jN.prototype={
cs:function(a){var s,r,q,p=P.bk(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.km(r)
if(q.fa(a,0,p)!==p){C.a.V(a,p-1)
q.cn()}return new Uint8Array(r.subarray(0,H.p5(0,q.b,s)))}}
P.km.prototype={
cn:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
hv:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.e(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(p>=o)return H.e(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(q>=o)return H.e(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(p>=o)return H.e(r,p)
r[p]=s&63|128
return!0}else{n.cn()
return!1}},
fa:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.F(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hv(p,C.a.F(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.cn()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.e(s,o)
s[o]=p>>>6|192
l.b=m+1
s[m]=p&63|128}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.e(s,o)
s[o]=p>>>12|224
o=l.b=m+1
if(m>=r)return H.e(s,m)
s[m]=p>>>6&63|128
l.b=o+1
if(o>=r)return H.e(s,o)
s[o]=p&63|128}}}return q}}
P.jK.prototype={
cs:function(a){var s=this.a,r=P.ok(s,a,0,null)
if(r!=null)return r
return new P.kl(s).hF(a,0,null,!0)}}
P.kl.prototype={
hF:function(a,b,c,d){var s,r,q,p,o=this,n=P.bk(b,c,J.aP(a))
if(b===n)return""
s=P.p1(a,b,n)
r=o.c4(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.p2(q)
o.b=0
throw H.c(P.a7(p,a,b+o.c))}return r},
c4:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a7(b+c,2)
r=q.c4(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.c4(a,s,c,d)}return q.hK(a,b,c,d)},
hK:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.X(""),f=b+1,e=a.length
if(b<0||b>=e)return H.e(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.F("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.F(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.au(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.au(j)
break
case 65:g.a+=H.au(j);--f
break
default:p=g.a+=H.au(j)
g.a=p+H.au(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(f<0||f>=e)return H.e(a,f)
s=a[f]}o=f+1
if(f<0||f>=e)return H.e(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(o<0||o>=e)return H.e(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(l>=e)return H.e(a,l)
g.a+=H.au(a[l])}else g.a+=P.fj(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.au(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.W.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.W&&this.a===b.a&&!0},
as:function(a,b){return C.c.as(this.a,b.a)},
gH:function(a){var s=this.a
return(s^C.c.b7(s,30))&1073741823},
i:function(a){var s=this,r=P.nF(H.o3(s)),q=P.es(H.o1(s)),p=P.es(H.nY(s)),o=P.es(H.nZ(s)),n=P.es(H.o0(s)),m=P.es(H.o2(s)),l=P.nG(H.o_(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bB.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bB&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
as:function(a,b){return C.c.as(this.a,b.a)},
i:function(a){var s,r,q,p=new P.ik(),o=this.a
if(o<0)return"-"+new P.bB(0-o).i(0)
s=p.$1(C.c.a7(o,6e7)%60)
r=p.$1(C.c.a7(o,1e6)%60)
q=new P.ij().$1(o%1e6)
return""+C.c.a7(o,36e8)+":"+s+":"+r+"."+q}}
P.ij.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.ik.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.K.prototype={}
P.ej.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.ir(s)
return"Assertion failed"}}
P.fx.prototype={}
P.eV.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gc6:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc5:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gc6()+o+m
if(!q.a)return l
s=q.gc5()
r=P.ir(q.b)
return l+s+": "+r}}
P.dj.prototype={
gc6:function(){return"RangeError"},
gc5:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.y(q):""
else if(q==null)s=": Not greater than or equal to "+H.y(r)
else if(q>r)s=": Not in inclusive range "+H.y(r)+".."+H.y(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.y(r)
return s}}
P.eA.prototype={
gc6:function(){return"RangeError"},
gc5:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.fH.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fE.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.cd.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eo.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ir(s)+"."}}
P.eY.prototype={
i:function(a){return"Out of Memory"},
$iK:1}
P.dq.prototype={
i:function(a){return"Stack Overflow"},
$iK:1}
P.eq.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.h2.prototype={
i:function(a){return"Exception: "+this.a}}
P.iw.prototype={
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
i=""}h=C.a.u(d,k,l)
return f+j+h+i+"\n"+C.a.T(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.y(e)+")"):f}}
P.i.prototype={
bW:function(a,b){return new H.b4(this,b,H.T(this).K("b4<i.E>"))},
gl:function(a){var s,r=this.gP(this)
for(s=0;r.v();)++s
return s},
gb_:function(a){var s,r=this.gP(this)
if(!r.v())throw H.c(H.l5())
s=r.gB(r)
if(r.v())throw H.c(H.nL())
return s},
J:function(a,b){var s,r,q
P.m6(b,"index")
for(s=this.gP(this),r=0;s.v();){q=s.gB(s)
if(b===r)return q;++r}throw H.c(P.N(b,this,"index",null,r))},
i:function(a){return P.nK(this,"(",")")}}
P.eB.prototype={}
P.ai.prototype={
gH:function(a){return P.O.prototype.gH.call(C.V,this)},
i:function(a){return"null"}}
P.O.prototype={constructor:P.O,$iO:1,
q:function(a,b){return this===b},
gH:function(a){return H.dh(this)},
i:function(a){return"Instance of '"+H.di(this)+"'"},
toString:function(){return this.i(this)}}
P.X.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jH.prototype={
$2:function(a,b){var s,r,q,p=C.a.ed(b,"=")
if(p===-1){if(b!=="")J.kX(a,P.ls(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.u(b,0,p)
r=C.a.ah(b,p+1)
q=this.a
J.kX(a,P.ls(s,0,s.length,q,!0),P.ls(r,0,r.length,q,!0))}return a},
$S:42}
P.jD.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:46}
P.jF.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:48}
P.jG.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.hW(C.a.u(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:58}
P.bN.prototype={
gbH:function(){var s,r,q,p=this,o=p.x
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
else o=H.h(H.la("_text"))}return o},
gH:function(a){var s=this,r=s.z
if(r==null){r=C.a.gH(s.gbH())
if(s.z==null)s.z=r
else r=H.h(H.la("hashCode"))}return r},
gbz:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.cl(P.mk(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.h(H.la("queryParameters"))}return r},
gex:function(){return this.b},
gcH:function(a){var s=this.c
if(s==null)return""
if(C.a.a2(s,"["))return C.a.u(s,1,s.length-1)
return s},
gbR:function(a){var s=this.d
return s==null?P.mB(this.a):s},
gcS:function(a){var s=this.f
return s==null?"":s},
ge8:function(){var s=this.r
return s==null?"":s},
cT:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a2(s,"/"))s="/"+s
q=s
p=P.lq(null,0,0,b)
return new P.bN(n,l,j,k,q,p,o.r)},
ge9:function(){return this.c!=null},
gec:function(){return this.f!=null},
gea:function(){return this.r!=null},
i:function(a){return this.gbH()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbX())if(q.c!=null===b.ge9())if(q.b===b.gex())if(q.gcH(q)===b.gcH(b))if(q.gbR(q)===b.gbR(b))if(q.e===b.geq(b)){s=q.f
r=s==null
if(!r===b.gec()){if(r)s=""
if(s===b.gcS(b)){s=q.r
r=s==null
if(!r===b.gea()){if(r)s=""
s=s===b.ge8()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifI:1,
gbX:function(){return this.a},
geq:function(a){return this.e}}
P.kj.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.kk(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.kk(C.h,b,C.e,!0)}},
$S:30}
P.ki.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aB(b),r=this.a;s.v();)r.$2(a,s.gB(s))},
$S:5}
P.jC.prototype={
gew:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.e(m,0)
s=o.a
m=m[0]+1
r=C.a.bL(s,"?",m)
q=s.length
if(r>=0){p=P.e4(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fV("data","",n,n,P.e4(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.e(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.ku.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.e(s,a)
s=s[a]
C.a0.hP(s,0,96,b)
return s},
$S:43}
P.kv.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.F(b,r)^96
if(q>=96)return H.e(a,q)
a[q]=c}},
$S:16}
P.kw.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.F(b,0),r=C.a.F(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.e(a,q)
a[q]=c}},
$S:16}
P.hn.prototype={
ge9:function(){return this.c>0},
geb:function(){return this.c>0&&this.d+1<this.e},
gec:function(){return this.f<this.r},
gea:function(){return this.r<this.a.length},
gbX:function(){var s=this.x
return s==null?this.x=this.f2():s},
f2:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a2(r.a,"http"))return"http"
if(q===5&&C.a.a2(r.a,"https"))return"https"
if(s&&C.a.a2(r.a,"file"))return"file"
if(q===7&&C.a.a2(r.a,"package"))return"package"
return C.a.u(r.a,0,q)},
gex:function(){var s=this.c,r=this.b+3
return s>r?C.a.u(this.a,r,s-1):""},
gcH:function(a){var s=this.c
return s>0?C.a.u(this.a,s,this.d):""},
gbR:function(a){var s,r=this
if(r.geb())return P.hW(C.a.u(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a2(r.a,"http"))return 80
if(s===5&&C.a.a2(r.a,"https"))return 443
return 0},
geq:function(a){return C.a.u(this.a,this.e,this.f)},
gcS:function(a){var s=this.f,r=this.r
return s<r?C.a.u(this.a,s+1,r):""},
ge8:function(){var s=this.r,r=this.a
return s<r.length?C.a.ah(r,s+1):""},
gbz:function(){var s=this
if(s.f>=s.r)return C.a_
return new P.cl(P.mk(s.gcS(s)),t.dw)},
cT:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbX(),k=l==="file",j=n.c,i=j>0?C.a.u(n.a,n.b+3,j):"",h=n.geb()?n.gbR(n):m
j=n.c
if(j>0)s=C.a.u(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.u(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a2(r,"/"))r="/"+r
p=P.lq(m,0,0,b)
q=n.r
o=q<j.length?C.a.ah(j,q+1):m
return new P.bN(l,i,s,h,r,p,o)},
gH:function(a){var s=this.y
return s==null?this.y=C.a.gH(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifI:1}
P.fV.prototype={}
W.v.prototype={}
W.hZ.prototype={
gl:function(a){return a.length}}
W.eh.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ei.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bR.prototype={$ibR:1}
W.bx.prototype={$ibx:1}
W.by.prototype={$iby:1}
W.bz.prototype={
cZ:function(a,b,c){if(c!=null)return a.getContext(b,P.mS(c))
return a.getContext(b)},
ez:function(a,b){return this.cZ(a,b,null)},
$ibz:1}
W.cD.prototype={$icD:1}
W.aD.prototype={
gl:function(a){return a.length}}
W.ib.prototype={
gl:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.cJ.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ic.prototype={}
W.ar.prototype={}
W.aS.prototype={}
W.id.prototype={
gl:function(a){return a.length}}
W.ie.prototype={
gl:function(a){return a.length}}
W.ig.prototype={
gl:function(a){return a.length}}
W.bc.prototype={$ibc:1}
W.ih.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cK.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.cL.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.y(r)+", "
s=a.top
s.toString
return r+H.y(s)+") "+H.y(this.gaZ(a))+" x "+H.y(this.gaT(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.aA(b)
if(s===r.gbO(b)){s=a.top
s.toString
s=s===r.gbU(b)&&this.gaZ(a)===r.gaZ(b)&&this.gaT(a)===r.gaT(b)}else s=!1}else s=!1
return s},
gH:function(a){var s,r=a.left
r.toString
r=C.d.gH(r)
s=a.top
s.toString
return W.ms(r,C.d.gH(s),C.d.gH(this.gaZ(a)),C.d.gH(this.gaT(a)))},
gdM:function(a){var s=a.bottom
s.toString
return s},
gdj:function(a){return a.height},
gaT:function(a){var s=this.gdj(a)
s.toString
return s},
gbO:function(a){var s=a.left
s.toString
return s},
gcU:function(a){var s=a.right
s.toString
return s},
gbU:function(a){var s=a.top
s.toString
return s},
gdC:function(a){return a.width},
gaZ:function(a){var s=this.gdC(a)
s.toString
return s},
$iaf:1}
W.et.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.ii.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.fS.prototype={
gbM:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gP:function(a){var s=this.ir(this)
return new J.ag(s,s.length)}}
W.C.prototype={
gaf:function(a){return new W.h_(a)},
gaQ:function(a){var s=a.children
s.toString
return new W.fS(a,s)},
gdQ:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.af(p,s,r,q,t.q)},
i:function(a){var s=a.localName
s.toString
return s},
at:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.lT
if(s==null){s=H.b([],t.Q)
r=new W.df(s)
s.push(W.mr(null))
s.push(W.mw())
$.lT=r
d=r}else d=s
s=$.lS
if(s==null){s=new W.hK(d)
$.lS=s
c=s}else{s.a=d
c=s}}if($.bd==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.bd=r
r=r.createRange()
r.toString
$.l0=r
r=$.bd.createElement("base")
t.cR.a(r)
s=s.baseURI
s.toString
r.href=s
$.bd.head.appendChild(r).toString}s=$.bd
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.bd
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.bd.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.b.C(C.Y,s)}else s=!1
if(s){$.l0.selectNodeContents(q)
s=$.l0
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.bd.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.bd.body)J.lK(q)
c.d_(p)
document.adoptNode(p).toString
return p},
hI:function(a,b,c){return this.at(a,b,c,null)},
eA:function(a,b){var s
a.textContent=null
s=a.appendChild(this.at(a,b,null,null))
s.toString},
geu:function(a){var s=a.tagName
s.toString
return s},
$iC:1}
W.il.prototype={
$1:function(a){return t.h.b(a)},
$S:17}
W.m.prototype={$im:1}
W.d.prototype={
hx:function(a,b,c,d){if(c!=null)this.eY(a,b,c,!1)},
eY:function(a,b,c,d){return a.addEventListener(b,H.cv(c,1),!1)},
$id:1}
W.am.prototype={$iam:1}
W.bY.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1,
$ibY:1}
W.eu.prototype={
gl:function(a){return a.length}}
W.ew.prototype={
gl:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.ix.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.bD.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.bE.prototype={
gdR:function(a){var s=a.data
s.toString
return s},
$ibE:1}
W.c_.prototype={$ic_:1}
W.c1.prototype={$ic1:1}
W.bF.prototype={$ibF:1}
W.iH.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.iY.prototype={
gl:function(a){return a.length}}
W.c3.prototype={$ic3:1}
W.eN.prototype={
h:function(a,b){return P.bs(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bs(s.value[1]))}},
ga4:function(a){var s=H.b([],t.s)
this.D(a,new W.iZ(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Not supported"))},
$iI:1}
W.iZ.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eO.prototype={
h:function(a,b){return P.bs(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bs(s.value[1]))}},
ga4:function(a){var s=H.b([],t.s)
this.D(a,new W.j_(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Not supported"))},
$iI:1}
W.j_.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aH.prototype={$iaH:1}
W.eP.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.ao.prototype={$iao:1}
W.a5.prototype={
gb_:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.ld("No elements"))
if(r>1)throw H.c(P.ld("More than one element"))
s=s.firstChild
s.toString
return s},
a8:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b]).toString},
gP:function(a){var s=this.a.childNodes
return new W.cQ(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.t.prototype={
ih:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
ij:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.no(s,b,a)}catch(q){H.al(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eF(a):s},
he:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$it:1}
W.de.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.aJ.prototype={
gl:function(a){return a.length},
$iaJ:1}
W.f1.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.f7.prototype={
h:function(a,b){return P.bs(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bs(s.value[1]))}},
ga4:function(a){var s=H.b([],t.s)
this.D(a,new W.jb(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Not supported"))},
$iI:1}
W.jb.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.f9.prototype={
gl:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.fb.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.aL.prototype={$iaL:1}
W.fc.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.aM.prototype={
gl:function(a){return a.length},
$iaM:1}
W.fg.prototype={
h:function(a,b){return a.getItem(H.kr(b))},
m:function(a,b,c){a.setItem(b,c)},
D:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga4:function(a){var s=H.b([],t.s)
this.D(a,new W.ji(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iI:1}
W.ji.prototype={
$2:function(a,b){return this.a.push(a)},
$S:60}
W.ap.prototype={$iap:1}
W.bm.prototype={$ibm:1}
W.dr.prototype={
at:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.c_(a,b,c,d)
s=W.nH("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a5(r).a8(0,new W.a5(s))
return r}}
W.fk.prototype={
at:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.c_(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a5(C.D.at(r,b,c,d))
r=new W.a5(r.gb_(r))
new W.a5(s).a8(0,new W.a5(r.gb_(r)))
return s}}
W.fl.prototype={
at:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.c_(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a5(C.D.at(r,b,c,d))
new W.a5(s).a8(0,new W.a5(r.gb_(r)))
return s}}
W.cg.prototype={$icg:1}
W.ax.prototype={$iax:1}
W.aj.prototype={$iaj:1}
W.fn.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.fo.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.js.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ay.prototype={$iay:1}
W.bJ.prototype={$ibJ:1}
W.fv.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.jx.prototype={
gl:function(a){return a.length}}
W.b3.prototype={}
W.jI.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fL.prototype={
gl:function(a){return a.length}}
W.bo.prototype={
ghM:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.B("deltaY is not supported"))},
ghL:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.B("deltaX is not supported"))},
$ibo:1}
W.cn.prototype={
hf:function(a,b){var s=a.requestAnimationFrame(H.cv(b,1))
s.toString
return s},
f9:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.co.prototype={$ico:1}
W.fT.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.dH.prototype={
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
if(t.q.b(b)){s=a.left
s.toString
r=J.aA(b)
if(s===r.gbO(b)){s=a.top
s.toString
if(s===r.gbU(b)){s=a.width
s.toString
if(s===r.gaZ(b)){s=a.height
s.toString
r=s===r.gaT(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gH:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gH(p)
s=a.top
s.toString
s=C.d.gH(s)
r=a.width
r.toString
r=C.d.gH(r)
q=a.height
q.toString
return W.ms(p,s,r,C.d.gH(q))},
gdj:function(a){return a.height},
gaT:function(a){var s=a.height
s.toString
return s},
gdC:function(a){return a.width},
gaZ:function(a){var s=a.width
s.toString
return s}}
W.h6.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.dN.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.hq.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.hy.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$in:1,
$iA:1,
$ii:1,
$ip:1}
W.fQ.prototype={
D:function(a,b){var s,r,q,p,o
for(s=this.ga4(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,H.kr(q.getAttribute(o)))}},
ga4:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.b([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.e(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.h_.prototype={
h:function(a,b){return this.a.getAttribute(H.kr(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga4(this).length}}
W.l1.prototype={}
W.dI.prototype={
hu:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.np(s,this.c,r,!1)}}}
W.k2.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.li.prototype={}
W.cp.prototype={
eN:function(a){var s
if($.dJ.gbM($.dJ)){for(s=0;s<262;++s)$.dJ.m(0,C.X[s],W.q5())
for(s=0;s<12;++s)$.dJ.m(0,C.n[s],W.q6())}},
b8:function(a){return $.nl().C(0,W.cN(a))},
aE:function(a,b,c){var s=$.dJ.h(0,W.cN(a)+"::"+b)
if(s==null)s=$.dJ.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaI:1}
W.M.prototype={
gP:function(a){return new W.cQ(a,this.gl(a))}}
W.df.prototype={
b8:function(a){return C.b.dH(this.a,new W.j2(a))},
aE:function(a,b,c){return C.b.dH(this.a,new W.j1(a,b,c))},
$iaI:1}
W.j2.prototype={
$1:function(a){return a.b8(this.a)},
$S:18}
W.j1.prototype={
$1:function(a){return a.aE(this.a,this.b,this.c)},
$S:18}
W.dT.prototype={
eR:function(a,b,c,d){var s,r,q
this.a.a8(0,c)
s=b.bW(0,new W.ka())
r=b.bW(0,new W.kb())
this.b.a8(0,s)
q=this.c
q.a8(0,C.v)
q.a8(0,r)},
b8:function(a){return this.a.C(0,W.cN(a))},
aE:function(a,b,c){var s=this,r=W.cN(a),q=s.c
if(q.C(0,r+"::"+b))return s.d.hA(c)
else if(q.C(0,"*::"+b))return s.d.hA(c)
else{q=s.b
if(q.C(0,r+"::"+b))return!0
else if(q.C(0,"*::"+b))return!0
else if(q.C(0,r+"::*"))return!0
else if(q.C(0,"*::*"))return!0}return!1},
$iaI:1}
W.ka.prototype={
$1:function(a){return!C.b.C(C.n,a)},
$S:19}
W.kb.prototype={
$1:function(a){return C.b.C(C.n,a)},
$S:19}
W.hA.prototype={
aE:function(a,b,c){if(this.eI(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.C(0,b)
return!1}}
W.kf.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:39}
W.hz.prototype={
b8:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cN(a)==="foreignObject")return!1
if(s)return!0
return!1},
aE:function(a,b,c){if(b==="is"||C.a.a2(b,"on"))return!1
return this.b8(a)},
$iaI:1}
W.cQ.prototype={
v:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lI(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return H.T(this).c.a(this.d)}}
W.k9.prototype={}
W.hK.prototype={
d_:function(a){var s,r=new W.kn(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
br:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.lK(a)
else b.removeChild(a).toString},
hi:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.nr(a)
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
o=p}l=o}catch(n){H.al(n)}r="element unprintable"
try{r=J.cA(a)}catch(n){H.al(n)}try{q=W.cN(a)
this.hh(a,b,l,r,q,k,j)}catch(n){if(H.al(n) instanceof P.aC)throw n
else{this.br(a,b)
p=window
p.toString
p="Removing corrupted element "+H.y(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
hh:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.br(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.b8(a)){m.br(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.y(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.aE(a,"is",g)){m.br(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.ga4(f)
q=H.b(s.slice(0),H.lt(s))
for(p=f.ga4(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.e(q,p)
o=q[p]
r=m.a
n=J.nu(o)
H.kr(o)
if(!r.aE(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.y(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.d_(s)}}}
W.kn.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.hi(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.br(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.ld("Corrupt HTML")
throw H.c(n)}}catch(p){H.al(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:35}
W.fU.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h7.prototype={}
W.h8.prototype={}
W.hb.prototype={}
W.hc.prototype={}
W.hd.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.hg.prototype={}
W.hj.prototype={}
W.hk.prototype={}
W.hm.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.ho.prototype={}
W.hp.prototype={}
W.hu.prototype={}
W.hB.prototype={}
W.hC.prototype={}
W.dX.prototype={}
W.dY.prototype={}
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
P.kc.prototype={
cF:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bD:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.kx(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.W)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.jB("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.I.b(a))return a
if(t.cH.b(a)||t.dE.b(a)||t.bu.b(a))return a
if(t.f.b(a)){s=n.cF(a)
r=n.b
q=r.length
if(s>=q)return H.e(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.e(r,s)
r[s]=p
J.eg(a,new P.kd(m,n))
return m.a}if(t.aH.b(a)){s=n.cF(a)
m=n.b
if(s>=m.length)return H.e(m,s)
p=m[s]
if(p!=null)return p
return n.hH(a,s)}if(t.eH.b(a)){s=n.cF(a)
r=n.b
q=r.length
if(s>=q)return H.e(r,s)
p=m.b=r[s]
if(p!=null)return p
o={}
o.toString
m.b=o
if(s>=q)return H.e(r,s)
r[s]=o
n.hU(a,new P.ke(m,n))
return m.b}throw H.c(P.jB("structured clone of other type"))},
hH:function(a,b){var s,r,q=J.cy(a),p=q.gl(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.e(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bD(q.h(a,r))
if(r>=o.length)return H.e(o,r)
o[r]=s}return o}}
P.kd.prototype={
$2:function(a,b){this.a.a[a]=this.b.bD(b)},
$S:11}
P.ke.prototype={
$2:function(a,b){this.a.b[a]=this.b.bD(b)},
$S:34}
P.e0.prototype={$ibE:1,
gdR:function(a){return this.a}}
P.ks.prototype={
$1:function(a){this.a.push(P.mJ(a))},
$S:33}
P.kC.prototype={
$2:function(a,b){this.a[a]=P.mJ(b)},
$S:11}
P.hx.prototype={
hU:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.ev.prototype={
gbo:function(){var s=this.b,r=H.T(s)
return new H.aX(new H.b4(s,new P.iu(),r.K("b4<j.E>")),new P.iv(),r.K("aX<j.E,C>"))},
D:function(a,b){C.b.D(P.iG(this.gbo(),!1,t.h),b)},
m:function(a,b,c){var s=this.gbo()
J.nt(s.b.$1(J.hY(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.aP(this.gbo().a)},
h:function(a,b){var s=this.gbo()
return s.b.$1(J.hY(s.a,b))},
gP:function(a){var s=P.iG(this.gbo(),!1,t.h)
return new J.ag(s,s.length)}}
P.iu.prototype={
$1:function(a){return t.h.b(a)},
$S:17}
P.iv.prototype={
$1:function(a){return t.h.a(a)},
$S:28}
P.hl.prototype={
gcU:function(a){return this.$ti.c.a(this.a+this.c)},
gdM:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.aA(b)
if(s===r.gbO(b)){q=o.b
if(q===r.gbU(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcU(b)&&p.a(q+o.d)===r.gdM(b)}else s=!1}else s=!1}else s=!1
return s},
gH:function(a){var s=this,r=s.a,q=C.c.gH(r),p=s.b,o=C.c.gH(p),n=s.$ti.c
r=C.c.gH(n.a(r+s.c))
p=C.c.gH(n.a(p+s.d))
return H.of(H.jj(H.jj(H.jj(H.jj(0,q),o),r),p))}}
P.af.prototype={
gbO:function(a){return this.a},
gbU:function(a){return this.b},
gaZ:function(a){return this.c},
gaT:function(a){return this.d}}
P.aW.prototype={$iaW:1}
P.eH.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$ip:1}
P.b_.prototype={$ib_:1}
P.eW.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$ip:1}
P.j4.prototype={
gl:function(a){return a.length}}
P.ca.prototype={$ica:1}
P.fi.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$ip:1}
P.o.prototype={
gaQ:function(a){return new P.ev(a,new W.a5(a))},
at:function(a,b,c,d){var s,r,q,p,o=H.b([],t.Q)
o.push(W.mr(null))
o.push(W.mw())
o.push(new W.hz())
c=new W.hK(new W.df(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.p.hI(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a5(q)
p=r.gb_(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$io:1}
P.b1.prototype={$ib1:1}
P.fw.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$ip:1}
P.h9.prototype={}
P.ha.prototype={}
P.hh.prototype={}
P.hi.prototype={}
P.hv.prototype={}
P.hw.prototype={}
P.hF.prototype={}
P.hG.prototype={}
P.i1.prototype={
gl:function(a){return a.length}}
P.el.prototype={
h:function(a,b){return P.bs(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bs(s.value[1]))}},
ga4:function(a){var s=H.b([],t.s)
this.D(a,new P.i2(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Not supported"))},
$iI:1}
P.i2.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.em.prototype={
gl:function(a){return a.length}}
P.b9.prototype={}
P.eX.prototype={
gl:function(a){return a.length}}
P.fR.prototype={}
P.c9.prototype={
ev:function(a,b,c,d,e,f,g){var s
if(t.I.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.pY(g))
return}if(t.R.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bQ("Incorrect number or type of arguments"))},
$ic9:1}
P.fd.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.N(b,a,null,null,null))
s=P.bs(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$in:1,
$ii:1,
$ip:1}
P.hr.prototype={}
P.hs.prototype={}
K.aQ.prototype={
aU:function(a,b){return!0},
i:function(a){return"all"},
$iaY:1}
K.cS.prototype={
aU:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aU(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$iaY:1}
K.ae.prototype={
aU:function(a,b){return!this.eE(0,b)},
i:function(a){return"!["+this.c0(0)+"]"}}
K.f4.prototype={
aU:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.au(this.a),r=H.au(this.b)
return s+".."+r},
$iaY:1}
K.u.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.U(t.fX)
for(r=new H.bg(a,a.gl(a)),q=H.T(r).c;r.v();)s.m(0,q.a(r.d),!0)
p=P.iG(s.ga4(s),!0,t.S)
C.b.eD(p)
this.a=p},
aU:function(a,b){return C.b.C(this.a,b)},
i:function(a){return P.fj(this.a,0,null)},
$iaY:1}
L.fe.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dt(this.a.k(0,b),H.b([],t.z))
s.push(p)
return p},
hQ:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aU(0,a))return p}return null},
i:function(a){return this.b},
dA:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.C(0,s==null?null:s.b))l+=" (consume)"
s=m.d
if(s==null)s=null
else{s=s.c
s=s.ga4(s)}s=J.aB(s==null?H.b([],t.s):s)
for(;s.v();){r=s.gB(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.C(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.q)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.c0(0))}return l.charCodeAt(0)==0?l:l}}
L.ft.prototype={
i:function(a){var s=H.lG(this.b,"\n","\\n"),r=H.lG(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fu.prototype={
aW:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.q)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.ju.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.fe(this,b,H.b([],t.ab))
s.m(0,b,r)}return r},
O:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fu(a,P.S(s,s))
r.m(0,a,q)}return q},
cW:function(a){return this.iu(a)},
iu:function(a){var s=this
return P.pm(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$cW(a3,a4){if(a3===1){o=a4
q=p}while(true)switch(q){case 0:c=s.d
b=t.t
a0=H.b([],b)
a1=H.b([],b)
a2=H.b([],b)
n=H.T(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a2.length
if(h!==0){if(!!a2.fixed$length)H.h(P.B("removeAt"))
if(0>=h)H.h(P.f5(0,null))
g=a2.splice(0,1)[0]}else{if(!r.v()){q=3
break}g=n.a(r.d)}a1.push(g);++k
h=c==null
f=h?null:c.hQ(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.fj(a1,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.y(h?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a1.fixed$length)H.h(P.B("removeRange"))
P.bk(0,i,a1.length)
a1.splice(0,i-0)
C.b.a8(a2,a1)
a1=H.b([],b)
a0=H.b([],b)
c=s.d
q=!m.C(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)a0.push(g)
c=f.b
h=c.d
if(h!=null){e=P.fj(a0,0,null)
h=c.d
if(h==null)l=null
else{d=h.c.h(0,e)
h=new L.ft(d==null?h.b:d,e,k)
l=h}i=a1.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.C(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.ov()
case 1:return P.ow(o)}}},t.bJ)},
i:function(a){var s,r=new P.X(""),q=this.d
if(q!=null)r.a=""+(q.dA()+"\n")
for(q=this.a,q=q.giv(q),q=q.gP(q);q.v();){s=q.gB(q)
if(s!=this.d)r.a+=H.y(s==null?null:s.dA())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.dt.prototype={
i:function(a){return this.b.b+": "+this.c0(0)}}
O.ad.prototype={
d0:function(a,b,c){this.b=b
this.c=a},
bh:function(a,b){return this.d0(a,null,b)},
dn:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
d5:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gP:function(a){var s=this.a
return new J.ag(s,s.length)},
J:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.T(q).K("x<ad.T>")
if(q.dn(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.d5(r,H.b([b],p))}},
a8:function(a,b){var s,r
if(this.dn(b)){s=this.a
r=s.length
C.b.a8(s,b)
this.d5(r,b)}},
$ii:1}
O.da.prototype={
gl:function(a){return this.a.length},
gt:function(){var s=this.b
return s==null?this.b=D.H():s},
b1:function(){var s=this.b
return s==null?null:s.G(null)},
ga5:function(a){var s=this.a
if(s.length>0)return C.b.gaG(s)
else return V.an()},
bT:function(a){this.a.push(a)
this.b1()},
aV:function(){var s=this.a
if(s.length>0){s.pop()
this.b1()}}}
E.i5.prototype={}
E.bC.prototype={
sbY:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().S(0,s.gen())
if(b!=null)b.gt().n(0,s.gen())
s.bP(new D.E("shape",r,b))}},
aB:function(a,b){var s,r
for(s=this.y.a,s=new J.ag(s,s.length),r=H.T(s).c;s.v();)r.a(s.d).aB(0,b)},
an:function(a){var s,r,q,p=this,o=a.dx
o.a.push(o.ga5(o))
o.b1()
a.cR(p.f)
s=C.b.gaG(a.dy)
if(p.d!=null)if(s!=null)s.er(a,p)
for(r=p.y.a,r=new J.ag(r,r.length),q=H.T(r).c;r.v();)q.a(r.d).an(a)
a.cQ()
o.aV()},
bP:function(a){var s=this.z
return s==null?null:s.G(a)},
ac:function(){return this.bP(null)},
eo:function(a){this.e=null
this.bP(a)},
i7:function(){return this.eo(null)},
em:function(a){return this.bP(a)},
i4:function(){return this.em(null)},
i3:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gel(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bX()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.ac()},
i6:function(a,b){var s,r
for(s=b.gP(b),r=this.gel();s.v();)s.gB(s).gt().S(0,r)
this.ac()},
i:function(a){return"Unnamed entity"}}
E.bT.prototype={
i:function(a){return this.b}}
E.c7.prototype={
i:function(a){return this.b}}
E.h0.prototype={}
E.j7.prototype={
eM:function(a,b){var s=this
s.cy.gt().n(0,new E.j8(s))
s.db.gt().n(0,new E.j9(s))
s.dx.gt().n(0,new E.ja(s))},
gig:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga5(q).T(0,s.ga5(s))
q=s}return q},
cR:function(a){var s=this.dy
return s.push(a==null?C.b.gaG(s):a)},
cQ:function(){var s=this.dy
if(s.length>1)s.pop()},
dG:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.f("May not cache a shader with no name."))
s=this.fr
if(s.cr(0,r))throw H.c(P.f('Shader cache already contains a shader by the name "'+r+'".'))
s.m(0,r,a)}}
E.j8.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:2}
E.j9.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:2}
E.ja.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:2}
E.fs.prototype={
d8:function(a){this.es()},
d7:function(){return this.d8(null)},
ghV:function(){var s,r=this,q=Date.now(),p=C.c.a7(P.lR(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.W(q,!1)
return s/p},
ds:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.cG(r*o)
r=s.clientHeight
r.toString
p=C.d.cG(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.mf(C.m,this.gik())}},
es:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.F.f9(s)
r=W.mP(new E.jr(this),t.H)
r.toString
C.F.hf(s,r)}},
ii:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.ds()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.W(p,!1)
q.y=P.lR(p-q.r.a).a*0.000001
p=q.cy
C.b.sl(p.a,0)
p.b1()
p=q.db
C.b.sl(p.a,0)
p.b1()
p=q.dx
C.b.sl(p.a,0)
p.b1()
p=q.dy
C.b.sl(p,0)
p.push(null)
m.an(q)}q=n.Q
if(q!=null)q.G(null)}catch(o){s=H.al(o)
r=H.lA(o)
P.lF("Error: "+H.y(s))
P.lF("Stack: "+H.y(r))
throw H.c(s)}}}
E.jr.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ii()}},
$S:32}
Z.fM.prototype={}
Z.bU.prototype={
Y:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.al(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.y(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.fN.prototype={}
Z.bV.prototype={
aS:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
Y:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.e(r,s)
r[s].Y(a)}},
aA:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.e(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
an:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.e(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.di(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.q)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(l,", ")+"\nAttrs:   "+C.b.j(o,", ")}}
Z.c0.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.di(this.c)+"'")+"]"}}
Z.bn.prototype={
gd2:function(a){var s=this.a,r=(s&$.aO().a)!==0?3:0
if((s&$.bv().a)!==0)r+=3
if((s&$.bu().a)!==0)r+=3
if((s&$.bw().a)!==0)r+=2
if((s&$.bP().a)!==0)r+=3
if((s&$.ee().a)!==0)r+=3
if((s&$.ef().a)!==0)r+=4
if((s&$.cz().a)!==0)++r
return(s&$.bt().a)!==0?r+4:r},
hB:function(a){var s,r=$.aO(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bv()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bu()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bw()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ee()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ef()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cz()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bt()
if((q&r.a)!==0)if(s===a)return r
return $.nj()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bn))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.aO().a)!==0)s.push("Pos")
if((r&$.bv().a)!==0)s.push("Norm")
if((r&$.bu().a)!==0)s.push("Binm")
if((r&$.bw().a)!==0)s.push("Txt2D")
if((r&$.bP().a)!==0)s.push("TxtCube")
if((r&$.ee().a)!==0)s.push("Clr3")
if((r&$.ef().a)!==0)s.push("Clr4")
if((r&$.cz().a)!==0)s.push("Weight")
if((r&$.bt().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.i7.prototype={}
D.bX.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
S:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.C(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.S(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.C(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.S(p,b)
s=p===!0||s}return s},
G:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.R():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.D(P.iG(p,!0,t.h2),new D.is(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.D(r,new D.it(s))}return!0},
dU:function(){return this.G(null)},
aX:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.G(s)}}}}
D.is.prototype={
$1:function(a){a.$1(this.a)},
$S:27}
D.it.prototype={
$1:function(a){a.$1(this.a)},
$S:27}
D.R.prototype={}
D.aT.prototype={}
D.aU.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.y(this.d)+" => "+H.y(this.e)}}
X.cC.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cC))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.eG.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eG))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.iD.prototype={}
X.d1.prototype={}
X.iI.prototype={
bn:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.V(o.a+b.a,o.b+b.b)
o=q.a.gb9()
s=$.a9
if(s==null)s=$.a9=new V.V(0,0)
r=q.x
q.z=new P.W(p,!1)
q.x=n
return new X.c4(a,s,r,o,n)},
cP:function(a,b){this.r=a.a
return!1},
by:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bx:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.bn(a,b))
return!0},
ib:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gb9()
r=this.x
Date.now()
q.G(new X.c5(new V.a4(a.a,a.b),s,r))
return!0},
fM:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.G(new X.d1(c,q.a.gb9(),b))
q.y=new P.W(s,!1)
s=$.a9
q.x=s==null?$.a9=new V.V(0,0):s}}
X.a8.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a8))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.j(s,"+")}}
X.c4.prototype={}
X.j0.prototype={
c8:function(a,b,c){var s=this,r=new P.W(Date.now(),!1),q=s.a.gb9(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.c4(a,p,o,q,b)},
cP:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.G(this.c8(a,b,!0))
return!0},
by:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.G(r.c8(a,b,!0))
return!0},
bx:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.c8(a,b,!1))
return!0},
ic:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gb9()
Date.now()
r.G(new X.c5(new V.a4(a.a,a.b),s,b))
return!0},
gdT:function(){var s=this.b
return s==null?this.b=D.H():s},
gcX:function(){var s=this.c
return s==null?this.c=D.H():s},
gek:function(){var s=this.d
return s==null?this.d=D.H():s}}
X.c5.prototype={}
X.f3.prototype={}
X.ds.prototype={}
X.jw.prototype={
bn:function(a,b){var s,r,q,p,o=this,n=new P.W(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a9
if(r==null){r=new V.V(0,0)
$.a9=r
s=r}else s=r}r=o.a.gb9()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.ds(q,p,r,s)},
ia:function(a){var s=this.b
if(s==null)return!1
s.G(this.bn(a,!0))
return!0},
i8:function(a){var s=this.c
if(s==null)return!1
s.G(this.bn(a,!0))
return!0},
i9:function(a){var s=this.d
if(s==null)return!1
s.G(this.bn(a,!1))
return!0}}
X.fJ.prototype={
gbc:function(a){var s=this.b
return s==null?this.b=new X.iD(new X.a8(!1,!1,!1),P.cZ(t.S)):s},
gab:function(){var s,r=this.c
if(r==null){r=$.a9
if(r==null){r=$.a9=new V.V(0,0)
s=r}else s=r
r=this.c=new X.j0(this,r,s,new P.W(Date.now(),!1),new P.W(Date.now(),!1))}return r},
gau:function(){var s=this.d
if(s==null){s=$.a9
if(s==null)s=$.a9=new V.V(0,0)
s=this.d=new X.iI(this,s,new P.W(Date.now(),!1),new P.W(Date.now(),!1))}return s},
gbe:function(){var s,r=this.e
if(r==null){r=$.a9
if(r==null){r=$.a9=new V.V(0,0)
s=r}else s=r
r=this.e=new X.jw(this,r,s,new P.W(Date.now(),!1),new P.W(Date.now(),!1))}return r},
gb9:function(){var s=this.a
return V.m8(0,0,C.i.gdQ(s).c,C.i.gdQ(s).d)},
de:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eG(p,new X.a8(s,r,q))},
b6:function(a){var s,r,q=this.gbc(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a8(p,s,r)},
cm:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gbc(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a8(s,r===!0,q===!0)},
aO:function(a){var s,r,q,p
if(a==null){s=$.a9
return s==null?$.a9=new V.V(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.V(r-p,q-s)},
bq:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a4(r,s)},
cj:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.az(n)
m=o.pageY
m.toString
C.d.az(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.az(l)
l=o.pageY
l.toString
l=C.d.az(l)
k=j.top
k.toString
s.push(new V.V(n-m,l-k))}return s},
aK:function(a){var s,r,q,p
if(a==null)return new X.cC(0,new X.a8(!1,!1,!1))
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
return new X.cC(s,new X.a8(r,q,p))},
c9:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
fG:function(a){return this.f=!0},
fs:function(a){return this.f=!1},
fA:function(a){if(this.f&&this.c9(a))a.preventDefault()},
fK:function(a){var s,r,q=this
if(!q.f)return
s=q.de(a)
r=q.gbc(q)
r.c=s.b
r.d.n(0,s.a)},
fI:function(a){var s,r,q=this
if(!q.f)return
s=q.de(a)
r=q.gbc(q)
r.c=s.b
r.d.S(0,s.a)},
fO:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.b6(a)
if(p.x){s=p.aK(a)
r=p.bq(a)
if(p.gau().cP(s,r))a.preventDefault()
return}s=p.aK(a)
q=p.aO(a)
if(p.gab().cP(s,q))a.preventDefault()},
fS:function(a){var s,r,q,p=this
p.b6(a)
s=p.aK(a)
if(p.x){r=p.bq(a)
if(p.gau().by(s,r))a.preventDefault()
return}q=p.aO(a)
if(p.gab().by(s,q))a.preventDefault()},
fE:function(a){var s,r,q,p=this
if(!p.c9(a)){p.b6(a)
s=p.aK(a)
if(p.x){r=p.bq(a)
if(p.gau().by(s,r))a.preventDefault()
return}q=p.aO(a)
if(p.gab().by(s,q))a.preventDefault()}},
fQ:function(a){var s,r,q,p=this
p.b6(a)
s=p.aK(a)
if(p.x){r=p.bq(a)
if(p.gau().bx(s,r))a.preventDefault()
return}q=p.aO(a)
if(p.gab().bx(s,q))a.preventDefault()},
fC:function(a){var s,r,q,p=this
if(!p.c9(a)){p.b6(a)
s=p.aK(a)
if(p.x){r=p.bq(a)
if(p.gau().bx(s,r))a.preventDefault()
return}q=p.aO(a)
if(p.gab().bx(s,q))a.preventDefault()}},
fU:function(a){var s,r,q=this
q.b6(a)
s=new V.a4(C.E.ghL(a),C.E.ghM(a)).T(0,q.Q)
if(q.x){if(q.gau().ib(s))a.preventDefault()
return}r=q.aO(a)
if(q.gab().ic(s,r))a.preventDefault()},
fW:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aK(q.y)
r=q.aO(q.y)
q.gau().fM(s,r,p)}},
hb:function(a){var s,r=this
r.a.focus()
r.f=!0
r.cm(a)
s=r.cj(a)
if(r.gbe().ia(s))a.preventDefault()},
h7:function(a){var s
this.cm(a)
s=this.cj(a)
if(this.gbe().i8(s))a.preventDefault()},
h9:function(a){var s
this.cm(a)
s=this.cj(a)
if(this.gbe().i9(s))a.preventDefault()}}
D.bW.prototype={
aJ:function(a){var s=this.r
return s==null?null:s.G(a)},
eQ:function(){return this.aJ(null)},
$iat:1}
D.cX.prototype={
gt:function(){var s=this.y
return s==null?this.y=D.H():s},
gei:function(){var s=this.z
return s==null?this.z=D.H():s},
aJ:function(a){var s=this.y
return s==null?null:s.G(a)},
dm:function(a){var s=this.z
return s==null?null:s.G(a)},
fL:function(){return this.dm(null)},
fY:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.eO(a[r]))return!1
return!0},
fl:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gdl(),q=this.f,p=t.a,o=0;o<b.length;b.length===s||(0,H.q)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.bX()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.aJ(new D.aT())},
h1:function(a,b){var s,r,q,p
for(s=b.gP(b),r=this.gdl(),q=this.e;s.v();){p=s.gB(s)
C.b.S(q,p)
p.gt().S(0,r)}this.aJ(new D.aU())},
eO:function(a){var s=C.b.C(this.f,a)
return s}}
V.w.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.w))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.ba.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ba))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"},
A:function(){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.iq.prototype={}
V.d9.prototype={
ag:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d9))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cx(H.b([o.a,o.d,o.r],n),3,0),l=V.cx(H.b([o.b,o.e,o.x],n),3,0),k=V.cx(H.b([o.c,o.f,o.y],n),3,0)
n=m.length
if(0>=n)return H.e(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.e(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.e(k,0)
s=s+k[0]+",\n"
if(1>=n)return H.e(m,1)
p=" "+m[1]+", "
if(1>=r)return H.e(l,1)
p=p+l[1]+", "
if(1>=q)return H.e(k,1)
p=s+(p+k[1]+",\n")
if(2>=n)return H.e(m,2)
n=" "+m[2]+", "
if(2>=r)return H.e(l,2)
n=n+l[2]+", "
if(2>=q)return H.e(k,2)
return p+(n+k[2]+"]")}}
V.bh.prototype={
ag:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
cI:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.G().toString
if(Math.abs(b3-0)<1e-9)return V.an()
s=1/b3
r=-l
q=-a2
return V.aZ((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
T:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aZ(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bV:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.F(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bC:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.a3(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
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
i:function(a){return this.A()},
I:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cx(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cx(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cx(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cx(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
m=l.length
if(0>=m)return H.e(l,0)
s="["+l[0]+", "
r=k.length
if(0>=r)return H.e(k,0)
s=s+k[0]+", "
q=j.length
if(0>=q)return H.e(j,0)
s=s+j[0]+", "
p=i.length
if(0>=p)return H.e(i,0)
s=s+i[0]+",\n"
o=a+" "
if(1>=m)return H.e(l,1)
o=o+l[1]+", "
if(1>=r)return H.e(k,1)
o=o+k[1]+", "
if(1>=q)return H.e(j,1)
o=o+j[1]+", "
if(1>=p)return H.e(i,1)
o=s+(o+i[1]+",\n")
s=a+" "
if(2>=m)return H.e(l,2)
s=s+l[2]+", "
if(2>=r)return H.e(k,2)
s=s+k[2]+", "
if(2>=q)return H.e(j,2)
s=s+j[2]+", "
if(2>=p)return H.e(i,2)
s=o+(s+i[2]+",\n")
o=a+" "
if(3>=m)return H.e(l,3)
o=o+l[3]+", "
if(3>=r)return H.e(k,3)
o=o+k[3]+", "
if(3>=q)return H.e(j,3)
o=o+j[3]+", "
if(3>=p)return H.e(i,3)
return s+(o+i[3]+"]")},
A:function(){return this.I("")}}
V.V.prototype={
ao:function(a){return new V.a4(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"},
A:function(){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.a3.prototype={
bk:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a3))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"},
A:function(){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.bi.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bi))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"},
A:function(){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.f6.prototype={
gaI:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.f6))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.D(s.a,3,0)+", "+V.D(s.b,3,0)+", "+V.D(s.c,3,0)+", "+V.D(s.d,3,0)+"]"}}
V.a4.prototype={
cJ:function(a){return Math.sqrt(this.a9(this))},
a9:function(a){return this.a*a.a+this.b*a.b},
T:function(a,b){return new V.a4(this.a*b,this.b*b)},
ap:function(a,b){var s
$.G().toString
if(Math.abs(b-0)<1e-9){s=$.bL
return s==null?$.bL=new V.a4(0,0):s}return new V.a4(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.F.prototype={
cJ:function(a){return Math.sqrt(this.a9(this))},
a9:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cK:function(a,b){return new V.F(V.lC(this.a,a.a,b),V.lC(this.b,a.b,b),V.lC(this.c,a.c,b))},
N:function(){var s=this,r=Math.sqrt(s.a9(s))
if(r===1)return s
return s.ap(0,r)},
bw:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.F(s*r-q*p,q*o-n*r,n*p-s*o)},
a1:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
bg:function(a){return new V.F(-this.a,-this.b,-this.c)},
ap:function(a,b){$.G().toString
if(Math.abs(b-0)<1e-9)return V.fK()
return new V.F(this.a/b,this.b/b,this.c/b)},
eh:function(){$.G().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.F))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"},
A:function(){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
U.i9.prototype={
c1:function(a){var s=V.qn(a,this.c,this.b)
return s},
gt:function(){var s=this.y
return s==null?this.y=D.H():s},
R:function(a){var s=this.y
return s==null?null:s.G(a)},
scY:function(a,b){},
scM:function(a){var s,r=this,q=r.b
$.G().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.c1(s)}r.R(new D.E("maximumLocation",q,r.b))}},
scO:function(a){var s,r=this,q=r.c
$.G().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.c1(s)}r.R(new D.E("minimumLocation",q,r.c))}},
sal:function(a,b){var s,r=this
b=r.c1(b)
s=r.d
$.G().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.R(new D.E("location",s,b))}},
scN:function(a){var s,r,q=this,p=q.e
$.G().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.R(new D.E("maximumVelocity",p,a))}},
sa0:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.G().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.R(new D.E("velocity",r,a))}},
scu:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.G().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.R(new D.E("dampening",s,a))}},
aB:function(a,b){var s,r,q,p=this,o=p.f
$.G().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sal(0,p.d+s*b)
o=p.x
$.G().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa0(s)}}}
U.cF.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.H():s},
bf:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cF))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.bZ.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.H():s},
R:function(a){var s=this.e
return s==null?null:s.G(a)},
ae:function(){return this.R(null)},
fj:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gb2(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gt()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.R(new D.aT())},
h_:function(a,b){var s,r
for(s=b.gP(b),r=this.gb2();s.v();)s.gB(s).gt().S(0,r)
this.R(new D.aU())},
bf:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ag(o,o.length),n=H.T(o).c,s=null;o.v();){r=n.a(o.d)
if(r!=null){q=r.bf(0,b,c)
s=s==null?q:q.T(0,s)}}p.f=s==null?V.an():s
o=p.e
if(o!=null)o.aX(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bZ))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.e(s,p)
o=s[p]
if(p>=q.length)return H.e(q,p)
if(!J.a6(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$iZ:1}
U.Z.prototype={}
U.dE.prototype={
gt:function(){var s=this.cy
return s==null?this.cy=D.H():s},
R:function(a){var s=this.cy
return s==null?null:s.G(a)},
ae:function(){return this.R(null)},
bu:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.gab().gdT().n(0,s.gca())
a.gab().gek().n(0,s.gcc())
a.gab().gcX().n(0,s.gce())
return!0},
cb:function(a){var s=this,r=s.c,q=s.a
if(!r.q(0,q==null?null:q.gbc(q).c))return
s.x=s.y=!0
s.z=s.b.d},
cd:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.ao(a.d)
if(s.a9(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sal(0,-a.y.ao(r).T(0,2).ap(0,s.gaI()).a*2.5+p.z)
q.sa0(0)
p.Q=a.z.ao(r).T(0,2).ap(0,s.gaI())
p.ae()},
cf:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a9(s)>0.0001){r.b.sa0(r.Q.a*10*2.5)
r.ae()}},
bf:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.aB(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.aZ(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$iZ:1}
U.dF.prototype={
gt:function(){var s=this.fx
return s==null?this.fx=D.H():s},
R:function(a){var s=this.fx
return s==null?null:s.G(a)},
ae:function(){return this.R(null)},
bu:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.gab().gdT().n(0,q.gca())
a.gab().gek().n(0,q.gcc())
a.gab().gcX().n(0,q.gce())
s=a.gau()
r=s.f
s=r==null?s.f=D.H():r
s.n(0,q.gfb())
s=a.gau()
r=s.d
s=r==null?s.d=D.H():r
s.n(0,q.gfd())
s=a.gbe()
r=s.b
s=r==null?s.b=D.H():r
s.n(0,q.ghs())
s=a.gbe()
r=s.d
s=r==null?s.d=D.H():r
s.n(0,q.ghq())
s=a.gbe()
r=s.c
s=r==null?s.c=D.H():r
s.n(0,q.gho())
return!0},
b4:function(a){return new V.a4(a.a,a.b)},
cb:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
cd:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ao(a.d)
if(s.a9(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.b4(a.y.ao(r).T(0,2).ap(0,s.gaI()))
p=n.c
p.sal(0,-q.a*2.5+n.cy)
o=n.b
o.sal(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.b4(a.z.ao(r).T(0,2).ap(0,s.gaI()))
n.ae()},
cf:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a9(s)>0.0001){r.c.sa0(-r.dx.a*10*2.5)
r.b.sa0(-r.dx.b*10*2.5)
r.ae()}},
fc:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
fe:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.b4(a.y.ao(r).T(0,2).ap(0,s.gaI()))
p=n.c
p.sal(0,-q.a*2.5+n.cy)
o=n.b
o.sal(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.b4(a.z.ao(r).T(0,2).ap(0,s.gaI()))
n.ae()},
ht:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hr:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ao(a.d)
if(s.a9(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.b4(a.y.ao(r).T(0,2).ap(0,s.gaI()))
p=n.c
p.sal(0,-q.a*2.5+n.cy)
o=n.b
o.sal(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.b4(a.z.ao(r).T(0,2).ap(0,s.gaI()))
n.ae()},
hp:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a9(s)>0.0001){r.c.sa0(-r.dx.a*10*2.5)
r.b.sa0(-r.dx.b*10*2.5)
r.ae()}},
bf:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.aB(0,s)
n=p.b
n.aB(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.aZ(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.T(0,V.aZ(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iZ:1}
U.dG.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.H():s},
R:function(a){var s=this.r
return s==null?null:s.G(a)},
bu:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gab()
r=s.e
s=r==null?s.e=D.H():r
r=this.gfg()
s.n(0,r)
s=a.gau()
q=s.e;(q==null?s.e=D.H():q).n(0,r)
return!0},
fh:function(a){var s=this,r=s.b,q=s.a
if(!r.q(0,q==null?null:q.gbc(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.R(new D.E("zoom",r,q))}},
bf:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aZ(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iZ:1}
M.cE.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.H():s},
X:function(a){var s=this.r
return s==null?null:s.G(a)},
bl:function(){return this.X(null)},
h3:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gW(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p].gt()
n=o.a;(n==null?o.a=H.b([],q):n).push(r)}this.X(new D.aT())},
h5:function(a,b){var s,r
for(s=b.gP(b),r=this.gW();s.v();)s.gB(s).gt().S(0,r)
this.X(new D.aU())},
an:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.ag(s,s.length),r=H.T(s).c;s.v();)r.a(s.d).an(a)
q.f=!1},
$iaK:1}
M.cI.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.H():s},
X:function(a){var s=this.r
return s==null?null:s.G(a)},
bl:function(){return this.X(null)},
sbv:function(a){var s,r,q=this
if(a==null)a=new X.iA()
s=q.b
if(s!==a){if(s!=null)s.gt().S(0,q.gW())
r=q.b
q.b=a
a.gt().n(0,q.gW())
q.X(new D.E("camera",r,q.b))}},
sbA:function(a,b){var s,r,q=this
if(b==null)b=X.l2(null)
s=q.c
if(s!==b){if(s!=null)s.gt().S(0,q.gW())
r=q.c
q.c=b
b.gt().n(0,q.gW())
q.X(new D.E("target",r,q.c))}},
sbB:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().S(0,r.gW())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.gW())
r.X(new D.E("technique",s,r.d))}},
an:function(a){var s,r=this
a.cR(r.d)
s=r.c
if(s!=null)s.Y(a)
s=r.b
if(s!=null)s.Y(a)
s=r.e
s.aB(0,a)
s.an(a)
s=r.b
if(s!=null)s.aA(a)
a.cQ()},
$iaK:1}
M.cO.prototype={
X:function(a){var s=this.y
return s==null?null:s.G(a)},
bl:function(){return this.X(null)},
fu:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gW(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bX()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.X(new D.aT())},
fw:function(a,b){var s,r
for(s=b.gP(b),r=this.gW();s.v();)s.gB(s).gt().S(0,r)
this.X(new D.aU())},
sbv:function(a){var s,r,q=this
if(a==null)a=X.m1(null)
s=q.b
if(s!==a){if(s!=null)s.gt().S(0,q.gW())
r=q.b
q.b=a
a.gt().n(0,q.gW())
q.X(new D.E("camera",r,q.b))}},
sbA:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gt().S(0,r.gW())
s=r.c
r.c=b
b.gt().n(0,r.gW())
r.X(new D.E("target",s,r.c))}},
sbB:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().S(0,r.gW())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.gW())
r.X(new D.E("technique",s,r.d))}},
gt:function(){var s=this.y
return s==null?this.y=D.H():s},
an:function(a){var s,r,q,p=this
a.cR(p.d)
s=p.c
if(s!=null)s.Y(a)
s=p.b
if(s!=null)s.Y(a)
s=p.d
if(s!=null)s.aB(0,a)
for(s=p.e.a,r=new J.ag(s,s.length),q=H.T(r).c;r.v();)q.a(r.d).aB(0,a)
for(s=new J.ag(s,s.length),r=H.T(s).c;s.v();)r.a(s.d).an(a)
if(p.b!=null){a.cy.aV()
a.db.aV()}a.cQ()},
$iaK:1}
A.ek.prototype={}
A.i0.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hN:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dS:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.ah.prototype={
gaC:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.ah))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.d6.prototype={
eL:function(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6=u.C,c7="Required uniform value, ",c8=", was not defined or used in shader.",c9=c4.x,d0=new P.X(""),d1=c9.fr
if(d1){s=""+"uniform mat4 objMat;\n"
d0.a=s}else s=""
r=c9.fx
s=(r?d0.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
d0.a=s
s+="\n"
d0.a=s
s=d0.a=s+"attribute vec3 posAttr;\n"
q=c9.k4
if(q){s+="attribute vec3 normAttr;\n"
d0.a=s}p=c9.r1
d0.a=(p?d0.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.pB(c9,d0)
A.pD(c9,d0)
A.pC(c9,d0)
A.pF(c9,d0)
A.pG(c9,d0)
A.pE(c9,d0)
A.pH(c9,d0)
s=d0.a+="vec4 getPos()\n"
s+="{\n"
d0.a=s
o=c9.ry
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
d0.a=s
s+="}\n"
d0.a=s
s+="\n"
d0.a=s
s+="void main()\n"
d0.a=s
s=d0.a=s+"{\n"
if(o){s+="   setupBendData();\n"
d0.a=s}if(q){s+="   normalVec = getNorm();\n"
d0.a=s}if(p){s+="   binormalVec = getBinm();\n"
d0.a=s}if(c9.r2){s+="   txt2D = getTxt2D();\n"
d0.a=s}if(c9.rx){s+="   txtCube = getTxtCube();\n"
d0.a=s}if(c9.k2){s+="   objPos = getObjPos();\n"
d0.a=s}s=(c9.k3?d0.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
d0.a=s
s+="}\n"
d0.a=s
s=d0.a=s+"\n"
c4.ee(0,s.charCodeAt(0)==0?s:s,A.pA(c9))
c4.y=c4.gaf(c4).h(0,"posAttr")
c4.Q=c4.gaf(c4).h(0,"normAttr")
c4.z=c4.gaf(c4).h(0,"binmAttr")
c4.ch=c4.gaf(c4).h(0,"txt2DAttr")
c4.cx=c4.gaf(c4).h(0,"txtCubeAttr")
c4.cy=c4.gaf(c4).h(0,"bendAttr")
if(c9.dy)c4.fy=t.j.a(c4.gE().L(0,"invViewMat"))
if(d1)c4.db=t.j.a(c4.gE().L(0,"objMat"))
if(r)c4.dx=t.j.a(c4.gE().L(0,"viewObjMat"))
d1=t.j
c4.fr=d1.a(c4.gE().L(0,"projViewObjMat"))
if(c9.go)c4.dy=d1.a(c4.gE().L(0,"viewMat"))
if(c9.x1)c4.go=t.bK.a(c4.gE().L(0,"txt2DMat"))
if(c9.x2)c4.id=d1.a(c4.gE().L(0,"txtCubeMat"))
if(c9.y1)c4.k1=d1.a(c4.gE().L(0,"colorMat"))
c4.k3=H.b([],t.p)
s=c9.ba
if(s>0){c4.k2=t.w.a(c4.gE().L(0,"bendMatCount"))
for(n=0;n<s;++n){r=c4.k3
m=c4.r
if(m==null)H.h(P.f(c6))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.h(P.f(c7+q+c8))
r.push(d1.a(l))}}d1=c9.a
if(d1.a)c4.k4=t.g.a(c4.gE().L(0,"emissionClr"))
if(d1.b)c4.r1=t.G.a(c4.gE().L(0,"emissionTxt"))
d1=c9.b
if(d1.a)c4.rx=t.g.a(c4.gE().L(0,"ambientClr"))
if(d1.b)c4.ry=t.G.a(c4.gE().L(0,"ambientTxt"))
d1=c9.c
if(d1.a)c4.x2=t.g.a(c4.gE().L(0,"diffuseClr"))
if(d1.b)c4.y1=t.G.a(c4.gE().L(0,"diffuseTxt"))
d1=c9.d
if(d1.a)c4.ba=t.g.a(c4.gE().L(0,"invDiffuseClr"))
if(d1.b)c4.bb=t.G.a(c4.gE().L(0,"invDiffuseTxt"))
d1=c9.e
s=d1.a
if(s||d1.b||!1){c4.dZ=t.u.a(c4.gE().L(0,"shininess"))
if(s)c4.dX=t.g.a(c4.gE().L(0,"specularClr"))
if(d1.b)c4.dY=t.G.a(c4.gE().L(0,"specularTxt"))}if(c9.f.b)c4.e_=t.G.a(c4.gE().L(0,"bumpTxt"))
if(c9.db){c4.e0=t.l.a(c4.gE().L(0,"envSampler"))
d1=c9.r
if(d1.a)c4.e1=t.g.a(c4.gE().L(0,"reflectClr"))
if(d1.b)c4.e2=t.G.a(c4.gE().L(0,"reflectTxt"))
d1=c9.x
s=d1.a
if(s||d1.b||!1){c4.e3=t.u.a(c4.gE().L(0,"refraction"))
if(s)c4.e4=t.g.a(c4.gE().L(0,"refractClr"))
if(d1.b)c4.e5=t.G.a(c4.gE().L(0,"refractTxt"))}}d1=c9.y
if(d1.a)c4.e6=t.u.a(c4.gE().L(0,"alpha"))
if(d1.b)c4.e7=t.G.a(c4.gE().L(0,"alphaTxt"))
if(c9.k1){d1=c9.z
s=d1.length
if(s!==0){r=t.S
c4.cv=P.S(r,t.W)
c4.cw=P.S(r,t.d)
for(r=t.w,q=t.g,p=t.u,o=t.c,k=0;k<d1.length;d1.length===s||(0,H.q)(d1),++k){j=d1[k]
i=j.a
h="barLight"+i
g=H.b([],o)
for(f=j.b,e=(i&4)!==0,n=0;n<f;++n){m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].startPnt"
l=m.h(0,d)
if(l==null)H.h(P.f(c7+d+c8))
q.a(l)
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].endPnt"
c=m.h(0,d)
if(c==null)H.h(P.f(c7+d+c8))
q.a(c)
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].color"
b=m.h(0,d)
if(b==null)H.h(P.f(c7+d+c8))
q.a(b)
if(e){m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].att0"
a=m.h(0,d)
if(a==null)H.h(P.f(c7+d+c8))
p.a(a)
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].att1"
a0=m.h(0,d)
if(a0==null)H.h(P.f(c7+d+c8))
p.a(a0)
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].att2"
a1=m.h(0,d)
if(a1==null)H.h(P.f(c7+d+c8))
p.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c5
a3=a2
a4=a3}g.push(new A.dx(l,c,b,a4,a3,a2))}c4.cw.m(0,i,g)
f=c4.cv
m=c4.r
if(m==null)H.h(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.f(c7+e+c8))
f.m(0,i,r.a(l))}}d1=c9.Q
s=d1.length
if(s!==0){r=t.S
c4.cz=P.S(r,t.W)
c4.cA=P.S(r,t.r)
for(r=t.w,q=t.g,p=t.G,o=t.V,k=0;k<d1.length;d1.length===s||(0,H.q)(d1),++k){j=d1[k]
i=j.a
h="dirLight"+i
g=H.b([],o)
for(f=j.b,e=(i&1)!==0,n=0;n<f;++n){if(e){m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].objUp"
l=m.h(0,d)
if(l==null)H.h(P.f(c7+d+c8))
q.a(l)
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].objRight"
c=m.h(0,d)
if(c==null)H.h(P.f(c7+d+c8))
q.a(c)
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].objDir"
b=m.h(0,d)
if(b==null)H.h(P.f(c7+d+c8))
q.a(b)
a5=b
a6=c
a7=l}else{a5=c5
a6=a5
a7=a6}m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].viewDir"
l=m.h(0,d)
if(l==null)H.h(P.f(c7+d+c8))
q.a(l)
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"s["+n+"].color"
c=m.h(0,d)
if(c==null)H.h(P.f(c7+d+c8))
q.a(c)
if(e){m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"sTexture2D"+n
b=m.h(0,d)
if(b==null)H.h(P.f(c7+d+c8))
p.a(b)
a8=b}else a8=c5
g.push(new A.dy(a7,a6,a5,l,c,a8))}c4.cA.m(0,i,g)
f=c4.cz
m=c4.r
if(m==null)H.h(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.f(c7+e+c8))
f.m(0,i,r.a(l))}}d1=c9.ch
s=d1.length
if(s!==0){r=t.S
c4.cB=P.S(r,t.W)
c4.cC=P.S(r,t.x)
for(r=t.w,q=t.g,p=t.bK,o=t.l,f=t.bw,e=t.u,d=t.B,k=0;k<d1.length;d1.length===s||(0,H.q)(d1),++k){j=d1[k]
i=j.a
h="pointLight"+i
g=H.b([],d)
for(a9=j.b,b0=(i&4)!==0,b1=(i&2)!==0,b2=(i&1)!==0,b3=(i&3)!==0,n=0;n<a9;++n){m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].point"
l=m.h(0,b4)
if(l==null)H.h(P.f(c7+b4+c8))
q.a(l)
m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].viewPnt"
c=m.h(0,b4)
if(c==null)H.h(P.f(c7+b4+c8))
q.a(c)
m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].color"
b=m.h(0,b4)
if(b==null)H.h(P.f(c7+b4+c8))
q.a(b)
if(b3){m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].invViewRotMat"
a=m.h(0,b4)
if(a==null)H.h(P.f(c7+b4+c8))
p.a(a)
b5=a}else b5=c5
if(b2){m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"sTextureCube"+n
a=m.h(0,b4)
if(a==null)H.h(P.f(c7+b4+c8))
o.a(a)
a8=a}else a8=c5
if(b1){m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"sShadowCube"+n
a=m.h(0,b4)
if(a==null)H.h(P.f(c7+b4+c8))
o.a(a)
m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].shadowAdj"
a0=m.h(0,b4)
if(a0==null)H.h(P.f(c7+b4+c8))
f.a(a0)
b6=a
b7=a0}else{b6=c5
b7=b6}if(b0){m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].att0"
a=m.h(0,b4)
if(a==null)H.h(P.f(c7+b4+c8))
e.a(a)
m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].att1"
a0=m.h(0,b4)
if(a0==null)H.h(P.f(c7+b4+c8))
e.a(a0)
m=c4.r
if(m==null)H.h(P.f(c6))
b4=h+"s["+n+"].att2"
a1=m.h(0,b4)
if(a1==null)H.h(P.f(c7+b4+c8))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c5
a3=a2
a4=a3}g.push(new A.dA(l,c,b5,b,a8,b6,b7,a4,a3,a2))}c4.cC.m(0,i,g)
a9=c4.cB
m=c4.r
if(m==null)H.h(P.f(c6))
b0=h+"Count"
l=m.h(0,b0)
if(l==null)H.h(P.f(c7+b0+c8))
a9.m(0,i,r.a(l))}}c9=c9.cx
d1=c9.length
if(d1!==0){s=t.S
c4.cD=P.S(s,t.W)
c4.cE=P.S(s,t.E)
for(s=t.w,r=t.g,q=t.u,p=t.bw,o=t.G,f=t.M,k=0;k<c9.length;c9.length===d1||(0,H.q)(c9),++k){j=c9[k]
i=j.a
h="spotLight"+i
g=H.b([],f)
for(e=j.b,d=(i&2)!==0,a9=(i&1)!==0,b0=(i&4)!==0,b1=(i&8)!==0,b2=(i&3)!==0,n=0;n<e;++n){m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].objPnt"
l=m.h(0,b3)
if(l==null)H.h(P.f(c7+b3+c8))
r.a(l)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].objDir"
c=m.h(0,b3)
if(c==null)H.h(P.f(c7+b3+c8))
r.a(c)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].viewPnt"
b=m.h(0,b3)
if(b==null)H.h(P.f(c7+b3+c8))
r.a(b)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].color"
a=m.h(0,b3)
if(a==null)H.h(P.f(c7+b3+c8))
r.a(a)
if(b2){m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].objUp"
a0=m.h(0,b3)
if(a0==null)H.h(P.f(c7+b3+c8))
r.a(a0)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].objRight"
a1=m.h(0,b3)
if(a1==null)H.h(P.f(c7+b3+c8))
r.a(a1)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].tuScalar"
b8=m.h(0,b3)
if(b8==null)H.h(P.f(c7+b3+c8))
q.a(b8)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].tvScalar"
b9=m.h(0,b3)
if(b9==null)H.h(P.f(c7+b3+c8))
q.a(b9)
c0=b9
c1=b8
a6=a1
a7=a0}else{c0=c5
c1=c0
a6=c1
a7=a6}if(d){m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].shadowAdj"
a0=m.h(0,b3)
if(a0==null)H.h(P.f(c7+b3+c8))
p.a(a0)
b7=a0}else b7=c5
if(b1){m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].cutoff"
a0=m.h(0,b3)
if(a0==null)H.h(P.f(c7+b3+c8))
q.a(a0)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].coneAngle"
a1=m.h(0,b3)
if(a1==null)H.h(P.f(c7+b3+c8))
q.a(a1)
c2=a1
c3=a0}else{c2=c5
c3=c2}if(b0){m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].att0"
a0=m.h(0,b3)
if(a0==null)H.h(P.f(c7+b3+c8))
q.a(a0)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].att1"
a1=m.h(0,b3)
if(a1==null)H.h(P.f(c7+b3+c8))
q.a(a1)
m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"s["+n+"].att2"
b8=m.h(0,b3)
if(b8==null)H.h(P.f(c7+b3+c8))
q.a(b8)
a2=b8
a3=a1
a4=a0}else{a2=c5
a3=a2
a4=a3}if(a9){m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"sTexture2D"+n
a0=m.h(0,b3)
if(a0==null)H.h(P.f(c7+b3+c8))
o.a(a0)
a8=a0}else a8=c5
if(d){m=c4.r
if(m==null)H.h(P.f(c6))
b3=h+"sShadow2D"+n
a0=m.h(0,b3)
if(a0==null)H.h(P.f(c7+b3+c8))
o.a(a0)
b6=a0}else b6=c5
g.push(new A.dD(l,c,b,a,a7,a6,c1,c0,b7,c3,c2,a4,a3,a2,a8,b6))}c4.cE.m(0,i,g)
e=c4.cD
m=c4.r
if(m==null)H.h(P.f(c6))
d=h+"Count"
l=m.h(0,d)
if(l==null)H.h(P.f(c7+d+c8))
e.m(0,i,s.a(l))}}}},
ay:function(a,b){if(b!=null&&b.d)if(a!=null)a.eB(b)},
hj:function(a,b){if(b!=null&&b.d>=6)if(a!=null)a.d1(b)}}
A.b8.prototype={
i:function(a){return"barLight"+this.a}}
A.bb.prototype={
i:function(a){return"dirLight"+this.a}}
A.bj.prototype={
i:function(a){return"pointLight"+this.a}}
A.bl.prototype={
i:function(a){return"spotLight"+this.a}}
A.iM.prototype={
i:function(a){return this.bb}}
A.dx.prototype={}
A.dy.prototype={}
A.dA.prototype={}
A.dD.prototype={}
A.cb.prototype={
ee:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.df(b,35633)
r=n.df(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaL(),s)
q.attachShader(n.gaL(),r)
q.linkProgram(n.gaL())
if(!H.mI(q.getProgramParameter(n.gaL(),35714))){o=q.getProgramInfoLog(n.gaL())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.h(P.f("Failed to link shader: "+o))}n.hk()
n.hm()},
gaf:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gE:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaL:function(){var s=this.e
if(s==null)throw H.c(P.f(u.F))
return s},
Y:function(a){a.a.useProgram(this.e)
this.gaf(this).hN()},
df:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.mI(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.y(q)+'": '+s))}return q},
hk:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.kq(l.getProgramParameter(o.gaL(),35721))
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
m.push(new A.ek(l,q,p))}o.f=new A.i0(m)},
hm:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.kq(j.getProgramParameter(m.gaL(),35718))
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
k.push(m.hJ(o,n,q,p))}m.r=new A.jA(k)},
b3:function(a,b,c){var s=this.a
if(a===1)return new A.ci(s,b,c)
else return A.lf(s,this.e,b,a,c)},
f6:function(a,b,c){var s=this.a
if(a===1)return new A.dB(s,b,c)
else return A.lf(s,this.e,b,a,c)},
f7:function(a,b,c){var s=this.a
if(a===1)return new A.dC(s,b,c)
else return A.lf(s,this.e,b,a,c)},
bI:function(a,b){return new P.h2(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hJ:function(a,b,c,d){var s=this
switch(a){case 5120:return s.b3(b,c,d)
case 5121:return s.b3(b,c,d)
case 5122:return s.b3(b,c,d)
case 5123:return s.b3(b,c,d)
case 5124:return s.b3(b,c,d)
case 5125:return s.b3(b,c,d)
case 5126:return new A.du(s.a,c,d)
case 35664:return new A.fz(s.a,c,d)
case 35665:return new A.dv(s.a,c,d)
case 35666:return new A.dw(s.a,c,d)
case 35667:return new A.fA(s.a,c,d)
case 35668:return new A.fB(s.a,c,d)
case 35669:return new A.fC(s.a,c,d)
case 35674:return new A.fD(s.a,c,d)
case 35675:return new A.dz(s.a,c,d)
case 35676:return new A.cj(s.a,c,d)
case 35678:return s.f6(b,c,d)
case 35680:return s.f7(b,c,d)
case 35670:throw H.c(s.bI("BOOL",c))
case 35671:throw H.c(s.bI("BOOL_VEC2",c))
case 35672:throw H.c(s.bI("BOOL_VEC3",c))
case 35673:throw H.c(s.bI("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.dp.prototype={}
A.a0.prototype={}
A.jA.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
L:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.A()},
A:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.ci.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fA.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fB.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fC.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fy.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.du.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.fz.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dv.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dw.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.fD.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dz.prototype={
aq:function(a){var s=new Float32Array(H.cs(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.cj.prototype={
aq:function(a){var s=new Float32Array(H.cs(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dB.prototype={
eB:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.dC.prototype={
d1:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.kp.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cK(q.b,b).cK(q.d.cK(q.c,b),c)
q=new V.a3(p.a,p.b,p.c)
if(!J.a6(a.f,q)){a.f=q
q=a.a
if(q!=null)q.ac()}a.sip(p.N())
q=1-b
s=1-c
s=new V.bi(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.a6(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.ac()}},
$S:59}
F.as.prototype={
b0:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.a=a
a.ga3().b.push(s)
s.b=b
b.ga3().c.push(s)
s.c=c
c.ga3().d.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga3().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.ac()}},
f_:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.fK()
if(n!=null)q=q.a1(0,n)
if(s!=null)q=q.a1(0,s)
if(r!=null)q=q.a1(0,r)
if(q.eh())return p
return q.N()},
f1:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.bk(0,n)
q=new V.F(o.a,o.b,o.c).N()
o=r.bk(0,n)
return q.bw(new V.F(o.a,o.b,o.c).N()).N()},
cq:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.f_()
if(s==null){s=q.f1()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.ac()}return!0},
eZ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.fK()
if(n!=null)q=q.a1(0,n)
if(s!=null)q=q.a1(0,s)
if(r!=null)q=q.a1(0,r)
if(q.eh())return p
return q.N()},
f0:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.G().toString
if(Math.abs(p-0)<1e-9){j=b.bk(0,e)
o=new V.F(j.a,j.b,j.c).N()
if(q.a-r.a<0)o=o.bg(0)}else{n=(j-s.b)/p
j=b.bk(0,e)
j=new V.a3(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).bk(0,h)
o=new V.F(j.a,j.b,j.c).N()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.bg(0)}m=l.d
if(m!=null){m=m.N()
o=m.bw(o).N().bw(m).N()}return o},
co:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eZ()
if(s==null){s=q.f0()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.ac()}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
I:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gaa(p)
p=a+C.a.aw(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gaa(o)
p=p+C.a.aw(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gaa(o)
s=p+C.a.aw(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.A()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.A()
return s+((p==null?"-":p)+"}")},
A:function(){return this.I("")}}
F.eI.prototype={
eK:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.f("May not create a line with vertices attached to different shapes."))
s.a=a
a.gaH(a).b.push(s)
s.b=b
b.gaH(b).c.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gaH(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.ac()}},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
I:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gaa(s)
s=a+C.a.aw(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gaa(r)
return s+C.a.aw(C.c.i(r==null?-1:r),0)},
A:function(){return this.I("")}}
F.f2.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
I:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gaa(s)
return a+C.a.aw(C.c.i(s),0)},
A:function(){return this.I("")}}
F.jc.prototype={
ga6:function(){var s=this.a
return s==null?this.a=new F.z(this,H.b([],t.k)):s},
gbQ:function(a){var s=this.b
return s==null?this.b=new F.cc(this,H.b([],t.J)):s},
gaH:function(a){var s=this.c
return s==null?this.c=new F.dm(this,H.b([],t.L)):s},
ga3:function(){var s=this.d
return s==null?this.d=new F.dl(this,H.b([],t.v)):s},
gt:function(){var s=this.e
return s==null?this.e=D.H():s},
i0:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.ga6().a_()
s=b.ga6().c.length
for(a0=a1.ga6().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.z(b,H.b([],q))
n.n(0,o.hG())}b.ga6().a_()
for(a0=a1.gbQ(a1).b,r=a0.length,n=t.J,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.z(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).a_()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.e(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.cc(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,h)
l=new F.f2()
if(h.a==null)H.h(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.jW(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.cc(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.G(a)}}}for(a0=a1.gaH(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.z(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).a_()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.e(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.z(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).a_()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.e(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.dm(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,e)
new F.eI().eK(f,e)}for(a0=a1.ga3().b,r=a0.length,n=t.v,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.z(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).a_()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.e(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.z(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).a_()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.e(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.z(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).a_()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.e(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.dl(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,e)
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,c)
new F.as().b0(f,e,c)}a0=b.e
if(a0!=null)a0.aX(0)},
aP:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.ga3().aP()||!1
if(!r.ga6().aP())s=!1
q=r.e
if(q!=null)q.aX(0)
return s},
dN:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=34962,c={},b=f.ga6().c.length,a=$.aO(),a0=a3.a,a1=(a0&a.a)!==0?1:0
if((a0&$.bv().a)!==0)++a1
if((a0&$.bu().a)!==0)++a1
if((a0&$.bw().a)!==0)++a1
if((a0&$.bP().a)!==0)++a1
if((a0&$.ee().a)!==0)++a1
if((a0&$.ef().a)!==0)++a1
if((a0&$.cz().a)!==0)++a1
if((a0&$.bt().a)!==0)++a1
s=a3.gd2(a3)
r=P.eK(b*s,0,!1,t.gR)
c.a=0
q=P.nS(a1,new F.jd(c,f,a3,s*4,b,s,r),t.eT)
a=a2.a
a0=a.createBuffer()
a0.toString
a.bindBuffer(d,a0)
a.bufferData(d,new Float32Array(H.cs(r)),35044)
a.bindBuffer(d,e)
p=new Z.bV(new Z.fM(d,a0),H.b([],t.fv),q,a3)
if(f.gbQ(f).b.length!==0){o=H.b([],t.t)
a0=t.J
n=t.k
m=0
while(!0){l=f.b
if(l==null){l=f.b=new F.cc(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.e(l,m)
l=l[m].a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).a_()}l=l.e}o.push(l==null?0:l);++m}i=Z.lh(a,34963,o)
p.b.push(new Z.c0(0,o.length,i))}if(f.gaH(f).b.length!==0){o=H.b([],t.t)
a0=t.L
n=t.k
m=0
while(!0){l=f.c
if(l==null){l=f.c=new F.dm(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.e(l,m)
h=l[m]
l=h.a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).a_()}l=l.e}o.push(l==null?0:l)
l=h.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).a_()}l=l.e}o.push(l==null?0:l);++m}i=Z.lh(a,34963,o)
p.b.push(new Z.c0(1,o.length,i))}if(f.ga3().b.length!==0){o=H.b([],t.t)
a0=t.v
n=t.k
m=0
while(!0){l=f.d
if(l==null){l=f.d=new F.dl(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.e(l,m)
g=l[m]
l=g.a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).a_()}l=l.e}o.push(l==null?0:l)
l=g.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).a_()}l=l.e}o.push(l==null?0:l)
l=g.c
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).a_()}l=l.e}o.push(l==null?0:l);++m}i=Z.lh(a,34963,o)
p.b.push(new Z.c0(4,o.length,i))}return p},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.ga6().c.length!==0){q.push("Vertices:")
q.push(s.ga6().I(r))}if(s.gbQ(s).b.length!==0){q.push("Points:")
q.push(s.gbQ(s).I(r))}if(s.gaH(s).b.length!==0){q.push("Lines:")
q.push(s.gaH(s).I(r))}if(s.ga3().b.length!==0){q.push("Faces:")
q.push(s.ga3().I(r))}return C.b.j(q,"\n")},
ac:function(){var s=this.e
return s==null?null:s.G(null)}}
F.jd.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hB(a),e=f.gd2(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.z(o,H.b([],n)):l).c
if(m>=l.length)return H.e(l,m)
k=l[m].hZ(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.e(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bU(f,e,c*4,g.d)},
$S:45}
F.dl.prototype={
hy:function(a){var s,r,q,p,o,n,m,l=H.b([],t.v),k=a[0]
for(s=this.a,r=t.k,q=2;q<4;++q){p=a[q-1]
o=a[q]
n=s.a;(n==null?s.a=new F.z(s,H.b([],r)):n).n(0,k)
n=s.a;(n==null?s.a=new F.z(s,H.b([],r)):n).n(0,p)
n=s.a;(n==null?s.a=new F.z(s,H.b([],r)):n).n(0,o)
m=new F.as()
m.b0(k,p,o)
l.push(m)}return l},
hz:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.v)
for(s=this.a,r=t.k,q=b,p=0,o=!1,n=1;n<a;++n,++p,++q){for(m=o,l=1;l<b;++l,q=h){k=c.length
if(p<0||p>=k)return H.e(c,p)
j=c[p];++p
if(p>=k)return H.e(c,p)
i=c[p]
h=q+1
if(h<0||h>=k)return H.e(c,h)
g=c[h]
if(q<0||q>=k)return H.e(c,q)
f=c[q]
k=s.a
if(m){(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,g)
e=new F.as()
e.b0(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,f)
e=new F.as()
e.b0(j,g,f)
d.push(e)}else{(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,f)
e=new F.as()
e.b0(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,f)
k=s.a;(k==null?s.a=new F.z(s,H.b([],r)):k).n(0,j)
e=new F.as()
e.b0(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gl:function(a){return this.b.length},
aP:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cq())q=!1
return q},
cp:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].co())q=!1
return q},
i:function(a){return this.A()},
I:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(a))
return C.b.j(p,"\n")},
A:function(){return this.I("")}}
F.dm.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
I:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.e(q,s)
r.push(q[s].I(a+(""+s+". ")))}return C.b.j(r,"\n")},
A:function(){return this.I("")}}
F.cc.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
I:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(a))
return C.b.j(p,"\n")},
A:function(){return this.I("")}}
F.cm.prototype={
ct:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.jR(s.cx,p,m,r,q,o,n,a,l)},
hG:function(){return this.ct(null)},
gaH:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.jV(H.b([],s),H.b([],s))}return s},
ga3:function(){var s=this.d
if(s==null){s=t.v
s=this.d=new F.jS(H.b([],s),H.b([],s),H.b([],s))}return s},
gaa:function(a){var s=this.a
if(s!=null)s.ga6().a_()
return this.e},
sip:function(a){var s
if(!J.a6(this.z,a)){this.z=a
s=this.a
if(s!=null)s.ac()}},
hZ:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.aO())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.bv())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.q(0,$.bu())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.q(0,$.bw())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.q(0,$.bP())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.ee())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.q(0,$.ef())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.q(0,$.cz()))return H.b([o.ch],t.n)
else if(a.q(0,$.bt())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
cq:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.fK()
p.ga3().D(0,new F.jY(o))
p.r=o.a.N()
if(r){s.ac()
o=s.e
if(o!=null)o.aX(0)}return!0},
co:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.fK()
p.ga3().D(0,new F.jX(o))
p.x=o.a.N()
if(r){s.ac()
o=s.e
if(o!=null)o.aX(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
I:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.aw(C.c.i(q.e),0))
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
n.push(V.D(q.ch,3,0))
s=q.cx
s=s==null?p:s.A()
n.push(s==null?o:s)
r=C.b.j(n,", ")
return a+"{"+r+"}"},
A:function(){return this.I("")}}
F.jY.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.a1(0,r)}},
$S:7}
F.jX.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.a1(0,r)}},
$S:7}
F.z.prototype={
a_:function(){},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.f("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.ac()
return!0},
bJ:function(a,b,c,d,e,f){var s=F.jR(a,null,b,c,null,d,e,f,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
aP:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cq()
return!0},
cp:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].co()
return!0},
hD:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.N()
if(!J.a6(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.G(null)}}}}}return!0},
i:function(a){return this.A()},
I:function(a){var s,r,q,p
this.a_()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].I(a))
return C.b.j(s,"\n")},
A:function(){return this.I("")}}
F.jS.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
D:function(a,b){var s=this
C.b.D(s.b,b)
C.b.D(s.c,new F.jT(s,b))
C.b.D(s.d,new F.jU(s,b))},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
return C.b.j(p,"\n")}}
F.jT.prototype={
$1:function(a){if(!J.a6(a.a,this.a))this.b.$1(a)},
$S:7}
F.jU.prototype={
$1:function(a){var s=this.a
if(!J.a6(a.a,s)&&!J.a6(a.b,s))this.b.$1(a)},
$S:7}
F.jV.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
return C.b.j(p,"\n")}}
F.jW.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
return C.b.j(p,"\n")}}
O.d5.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.H():s},
U:function(a){var s=this.fr
return s==null?null:s.G(a)},
bp:function(){return this.U(null)},
dr:function(a){this.a=null
this.U(a)},
hg:function(){return this.dr(null)},
fn:function(a,b){return this.U(new D.aT())},
fp:function(a,b){return this.U(new D.aU())},
gej:function(){var s=this,r=s.dx
if(r==null){r=new D.cX(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.d0(r.gfk(),r.gfX(),r.gh0())
r.gt().n(0,s.gdq())
r.gei().n(0,s.gaM())
s.dx=r}return r},
gaj:function(){var s=this.r
return s==null?this.r=O.eM(this,"ambient"):s},
gak:function(){var s=this.x
return s==null?this.x=O.eM(this,"diffuse"):s},
gbZ:function(){var s=this.z
return s==null?this.z=new O.iP(new V.w(0,0,0),this,"specular",new A.ah(!1,!1,!1)):s},
gdO:function(){var s=this.Q
return s==null?this.Q=new O.iL(this,"bump",new A.ah(!1,!1,!1)):s},
gam:function(){var s=this.cx
return s==null?this.cx=O.eM(this,"reflect"):s},
gZ:function(){var s=this.cy
return s==null?this.cy=new O.iO(new V.w(0,0,0),this,"refract",new A.ah(!1,!1,!1)):s},
dd:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.U(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gaF()
o=a1.h(0,q.gaF())
a1.m(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.D(0,new O.iQ(b,n))
C.b.bj(n,new O.iR())
m=new H.U(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],t.fD)
m.D(0,new O.iS(b,l))
C.b.bj(l,new O.iT())
k=new H.U(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.b([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gaF()
o=k.h(0,q.gaF())
k.m(0,p,o==null?1:o)}j=H.b([],t.eg)
k.D(0,new O.iU(b,j))
C.b.bj(j,new O.iV())
i=new H.U(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.b([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.q)(a0),++r){q=a0[r]
s=q.gaF()
p=i.h(0,q.gaF())
i.m(0,s,p==null?1:p)}h=H.b([],t.c3)
i.D(0,new O.iW(b,h))
C.b.bj(h,new O.iX())
a0=C.c.a7(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.iN(new V.ba(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.eM(b,"emission"):a2).c
s=b.gaj().c
p=b.gak().c
o=b.y
o=(o==null?b.y=O.eM(b,"invDiffuse"):o).c
g=b.gbZ().c
f=b.gdO().c
e=b.gam().c
d=b.gZ().c
c=b.db
return A.nU(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.iK(b,"alpha",new A.ah(!1,!1,!1)):c).c,n,l,j,h)},
ar:function(a,b){if(b!=null)if(!C.b.C(a,b)){b.saa(0,a.length)
a.push(b)}},
aB:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aB(m==null?H.b([],t.e):m)
s=H.T(m).c
for(;m.v();){r=s.a(m.d)
q=$.jQ
if(q==null)q=$.jQ=new V.F(0,0,1)
r.c=q
p=$.jP
r.d=p==null?$.jP=new V.F(0,1,0):p
p=$.jO
r.e=p==null?$.jO=new V.F(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bV(q).N()
r.d=n.bV(r.d).N()
r.e=n.bV(r.e).N()}}},
er:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.dd()
r=s.bb
a9=t.eI.a(b0.fr.h(0,r))
if(a9==null){q=b0.a
p=t.S
o=t.W
a9=new A.d6(s,H.b([],t.p),P.S(p,o),P.S(p,t.d),P.S(p,o),P.S(p,t.r),P.S(p,o),P.S(p,t.x),P.S(p,o),P.S(p,t.E),q,r)
a9.eL(s,q)
b0.dG(a9)}a9=a7.a=a9
b1.e=null}n=a9.x
m=n.dW
s=b1.e
if(!(s instanceof Z.bV))s=b1.e=null
if(s==null||!s.d.q(0,m)){s=n.k4
if(s){r=b1.d
if(r!=null)r.aP()}r=n.r1
if(r){q=b1.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.ga3().cp()
q.ga6().cp()
q=q.e
if(q!=null)q.aX(0)}}q=n.rx
if(q){p=b1.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.ga6().hD()
p=p.e
if(p!=null)p.aX(0)}}p=b1.d
l=p==null?a8:p.dN(new Z.fN(b0.a),m)
if(l==null)return
p=l.aS($.aO())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=l.aS($.bv())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=l.aS($.bu())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(n.r2){s=l.aS($.bw())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=l.aS($.bP())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(n.ry){s=l.aS($.bt())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=l}k=H.b([],t.ga)
a9.Y(b0)
if(n.fr){s=b0.dx
s=s.ga5(s)
r=a9.db
if(r!=null)r.aq(s.ag(0,!0))}if(n.fx){s=b0.cx
if(s==null){s=b0.db
r=b0.dx
r=b0.cx=s.ga5(s).T(0,r.ga5(r))
s=r}r=a9.dx
if(r!=null)r.aq(s.ag(0,!0))}s=b0.ch
if(s==null){s=b0.dx
s=b0.ch=b0.gig().T(0,s.ga5(s))}r=a9.fr
if(r!=null)r.aq(s.ag(0,!0))
if(n.go){s=b0.db
s=s.ga5(s)
r=a9.dy
if(r!=null)r.aq(s.ag(0,!0))}if(n.x1){s=$.lZ
if(s==null){s=new V.d9(1,0,0,0,1,0,0,0,1)
$.lZ=s}r=a9.go
if(r!=null)r.aq(s.ag(0,!0))}if(n.x2){s=V.an()
r=a9.id
if(r!=null)r.aq(s.ag(0,!0))}if(n.y1){s=V.an()
r=a9.k1
if(r!=null)r.aq(s.ag(0,!0))}if(n.ba>0){s=a7.e.a
j=s.length
r=a9.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.e(s,i)
r=s[i]
q=a9.k3
if(i>=q.length)return H.e(q,i)
q=q[i]
h=new Float32Array(H.cs(r.ag(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=a7.f
r=r==null?a8:r.f
if(r==null)r=new V.w(0,0,0)
q=a9.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.f
a7.ar(k,s==null?a8:s.d)
s=a7.f
s=s==null?a8:s.d
a9.ay(a9.r1,s)}if(n.k1){s=n.b
if(s.a){r=a7.r
r=r==null?a8:r.f
if(r==null)r=new V.w(0,0,0)
q=a9.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.r
a7.ar(k,s==null?a8:s.d)
s=a7.r
s=s==null?a8:s.d
a9.ay(a9.ry,s)}s=n.c
if(s.a){r=a7.x
r=r==null?a8:r.f
if(r==null)r=new V.w(0,0,0)
q=a9.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.x
a7.ar(k,s==null?a8:s.d)
s=a7.x
s=s==null?a8:s.d
a9.ay(a9.y1,s)}s=n.d
if(s.a){r=a7.y
r=r==null?a8:r.f
if(r==null)r=new V.w(0,0,0)
q=a9.ba
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.y
a7.ar(k,s==null?a8:s.d)
s=a7.y
s=s==null?a8:s.d
a9.ay(a9.bb,s)}s=n.e
r=s.a
if(r||s.b||!1){q=a7.z
q=q==null?a8:q.ch
if(q==null)q=100
p=a9.dZ
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.z
r=r==null?a8:r.f
if(r==null)r=new V.w(1,1,1)
q=a9.dX
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.z
a7.ar(k,s==null?a8:s.d)
s=a7.z
s=s==null?a8:s.d
a9.ay(a9.dY,s)}s=n.z
if(s.length>0){g=new H.U(t.y)
r=a7.dx
r=r==null?a8:r.e
if(r==null)r=H.b([],t.i)
q=r.length
p=t.c
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gaF()
c=g.h(0,d)
if(c==null)c=0
g.m(0,d,c+1)
o=a9.cw.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.e(o,c)
b=o[c]
o=e.gix()
a=$.b0
o=o.bC(a==null?$.b0=new V.a3(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giC()
a=$.b0
o=o.bC(a==null?$.b0=new V.a3(0,0,0):a)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gw(e)
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
if(e.gdV()){o=e.gdI()
a=b.e
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdJ()
a=b.f
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdK()
a=b.r
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a9.cv.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=b0.db
a0=r.ga5(r)
a1=new H.U(t.y)
r=a7.dx
r=r==null?a8:r.f
if(r==null)r=H.b([],t.U)
q=r.length
p=t.V
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
c=a1.h(0,0)
if(c==null)c=0
a1.m(0,0,c+1)
o=a9.cA.h(0,0)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.e(o,c)
b=o[c]
o=a0.bV(e.c).N()
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.b
a=b.f
a.a.uniform3f(a.d,o.a,o.b,o.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a9.cz.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=b0.db
a0=r.ga5(r)
a2=new H.U(t.y)
r=a7.dx
r=r==null?a8:r.r
if(r==null)r=H.b([],t.o)
q=r.length
p=t.B
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gaF()
c=a2.h(0,d)
if(c==null)c=0
a2.m(0,d,c+1)
o=a9.cC.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.e(o,c)
b=o[c]
a3=a0.T(0,e.ga5(e))
o=e.ga5(e)
a=$.b0
o=o.bC(a==null?$.b0=new V.a3(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=$.b0
o=a3.bC(o==null?$.b0=new V.a3(0,0,0):o)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gw(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaY()
o=a3.cI(0)
a=b.d
if(a!=null){h=new Float32Array(H.cs(new V.d9(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).ag(0,!0)))
a.a.uniformMatrix3fv(a.d,!1,h)}e.gaY()
o=e.gaY()
if(!C.b.C(k,o)){o.saa(0,k.length)
k.push(o)}o=e.gaY()
a=o.gcL(o)
if(a){a=b.f
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(a4<6)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}e.gbi()
o=e.geC()
a=b.x
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gbi()
if(!C.b.C(k,o)){o.saa(0,k.length)
k.push(o)}o=e.gbi()
a=o.gcL(o)
if(a){a=b.r
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(a4<6)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}if(e.gdV()){o=e.gdI()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdJ()
a=b.z
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdK()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a2.h(0,q)
if(j==null)j=0
q=a9.cB.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=b0.db
a0=r.ga5(r)
a6=new H.U(t.y)
r=a7.dx
r=r==null?a8:r.x
if(r==null)r=H.b([],t.D)
q=r.length
p=t.M
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gaF()
c=a6.h(0,d)
if(c==null)c=0
a6.m(0,d,c+1)
o=a9.cE.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.e(o,c)
b=o[c]
o=e.gie(e)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giA(e).N()
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=a0.bC(e.gie(e))
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gw(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaY()
o=e.gcX()
a=b.f
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gcU(e)
a=b.r
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giL()
a=b.x
if(a!=null)a.a.uniform1f(a.d,o)
o=e.giM()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
e.gaY()
o=e.gaY()
if(!C.b.C(k,o)){o.saa(0,k.length)
k.push(o)}o=e.gaY()
a=o.gcL(o)
if(a){a=b.dx
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}e.gbi()
o=e.geC()
a=b.z
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gbi()
if(!C.b.C(k,o)){o.saa(0,k.length)
k.push(o)}o=e.gbi()
a=o.gcL(o)
if(a){a=b.dy
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}if(e.giB()){o=e.giz()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)
o=e.giy()
a=b.ch
if(a!=null)a.a.uniform1f(a.d,o)}if(e.gdV()){o=e.gdI()
a=b.cx
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdJ()
a=b.cy
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdK()
a=b.db
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a6.h(0,q)
if(j==null)j=0
q=a9.cD.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.b){s=a7.Q
a7.ar(k,s==null?a8:s.d)
s=a7.Q
s=s==null?a8:s.d
a9.ay(a9.e_,s)}if(n.dy){s=b0.Q
if(s==null){s=b0.db
s=b0.Q=s.ga5(s).cI(0)}r=a9.fy
if(r!=null)r.aq(s.ag(0,!0))}if(n.db){a7.ar(k,a7.ch)
s=a7.ch
a9.hj(a9.e0,s)
s=n.r
if(s.a){r=a7.cx
r=r==null?a8:r.f
if(r==null)r=new V.w(1,1,1)
q=a9.e1
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.cx
a7.ar(k,s==null?a8:s.d)
s=a7.cx
s=s==null?a8:s.d
a9.ay(a9.e2,s)}s=n.x
r=s.a
if(r||s.b||!1){q=a7.cy
q=q==null?a8:q.ch
if(q==null)q=0
p=a9.e3
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.cy
r=r==null?a8:r.f
if(r==null)r=new V.w(1,1,1)
q=a9.e4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.cy
a7.ar(k,s==null?a8:s.d)
s=a7.cy
s=s==null?a8:s.d
a9.ay(a9.e5,s)}}s=n.y
r=s.a
q=!r
if(!q||s.b||!1){if(r){r=a7.db
r=r==null?a8:r.f
if(r==null)r=1
p=a9.e6
if(p!=null)p.a.uniform1f(p.d,r)}if(s.b){r=a7.db
a7.ar(k,r==null?a8:r.d)
r=a7.db
r=r==null?a8:r.d
a9.ay(a9.e7,r)}r=b0.a
r.enable(3042)
r.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].Y(b0)
r=t.ed.a(b1.e)
r.Y(b0)
r.an(b0)
r.aA(b0)
if(!q||s.b||!1)b0.a.disable(3042)
for(i=0;i<k.length;++i)k[i].aA(b0)
b0.a.useProgram(a8)
a9.gaf(a9).dS()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.dd().bb}}
O.iQ.prototype={
$2:function(a,b){return this.b.push(new A.b8(a,C.c.a7(b+3,4)*4))},
$S:8}
O.iR.prototype={
$2:function(a,b){return C.c.as(a.a,b.a)},
$S:49}
O.iS.prototype={
$2:function(a,b){return this.b.push(new A.bb(a,C.c.a7(b+3,4)*4))},
$S:8}
O.iT.prototype={
$2:function(a,b){return C.c.as(a.a,b.a)},
$S:50}
O.iU.prototype={
$2:function(a,b){return this.b.push(new A.bj(a,C.c.a7(b+3,4)*4))},
$S:8}
O.iV.prototype={
$2:function(a,b){return C.c.as(a.a,b.a)},
$S:51}
O.iW.prototype={
$2:function(a,b){return this.b.push(new A.bl(a,C.c.a7(b+3,4)*4))},
$S:8}
O.iX.prototype={
$2:function(a,b){return C.c.as(a.a,b.a)},
$S:52}
O.iK.prototype={
aN:function(){var s,r=this
r.d3()
s=r.f
$.G().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.U(new D.E(r.b,s,1))}}}
O.d7.prototype={
U:function(a){return this.a.U(a)},
bp:function(){return this.U(null)},
aN:function(){},
bs:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aN()
s=q.a
s.a=null
s.U(null)}}}
O.iL.prototype={}
O.d8.prototype={
du:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.U(new D.E(r.b+".color",s,a))}},
aN:function(){this.d3()
this.du(new V.w(1,1,1))},
sw:function(a,b){this.bs(new A.ah(!0,this.c.b,!1))
this.du(b)}}
O.iN.prototype={}
O.iO.prototype={
ck:function(a){var s=this,r=s.ch
$.G().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.U(new D.E(s.b+".refraction",r,a))}},
aN:function(){this.d4()
this.ck(1)},
saR:function(a){var s=this,r=s.c.b
if(a<=0){s.bs(new A.ah(!1,r,!1))
s.ck(0)}else{s.bs(new A.ah(!0,r,!1))
s.ck(a)}}}
O.iP.prototype={
dv:function(a){var s=this,r=s.ch
$.G().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.U(new D.E(s.b+".shininess",r,a))}},
aN:function(){this.d4()
this.dv(100)}}
O.dn.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.H():s},
U:function(a){var s=this.e
return s==null?null:s.G(a)},
bp:function(){return this.U(null)},
er:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.dm.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.dp(a.a,"Skybox")
s.ee(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.gaf(s).h(0,"posAttr")
r=t.u
s.y=r.a(s.gE().h(0,"fov"))
s.z=r.a(s.gE().h(0,"ratio"))
s.Q=t.g.a(s.gE().h(0,"boxClr"))
s.ch=t.l.a(s.gE().h(0,"boxTxt"))
s.cx=t.j.a(s.gE().h(0,"viewMat"))
a.dG(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.dN(new Z.fN(a.a),$.aO())
if(r==null)r=l
else{q=r.aS($.aO())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.x
p=p==null?l:p.c}q.e=p==null?0:p}}b.e=r}o=m.c
if(o==null)return
o.a=1
o.Y(a)
r=a.d
q=a.c
p=m.a
if(p!=null){p.Y(a)
n=p.y
if(n!=null)n.a.uniform1f(n.d,1.0471975511965976)
n=p.z
if(n!=null)n.a.uniform1f(n.d,r/q)
r=p.ch
if(r!=null)r.d1(o)
r=m.d
q=p.Q
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)
r=a.db
r=r.ga5(r).cI(0)
p=p.cx
if(p!=null)p.aq(r.ag(0,!0))}r=b.e
if(r instanceof Z.bV){r.Y(a)
r.an(a)
r.aA(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.gaf(r).dS()}o.aA(a)}}
O.cf.prototype={}
T.bI.prototype={}
T.fp.prototype={}
T.fq.prototype={
saa:function(a,b){this.a=b},
gt:function(){var s=this.y
return s==null?this.y=D.H():s},
Y:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}},
aA:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(3553,null)}}}
T.fr.prototype={
saa:function(a,b){this.a=b},
gt:function(){var s=this.e
return s==null?this.e=D.H():s},
Y:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
aA:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.jo.prototype={
i_:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null)
this.dk()
s=W.l3(a)
r=new T.fq(o)
W.Y(s,"load",new T.jq(this,r,s,!1,o,!1,!1),!1)
return r},
b5:function(a,b,c,d,e,f){var s=W.l3(c)
this.dk()
W.Y(s,"load",new T.jp(this,s,!1,b,!1,d,a),!1)},
dt:function(a,b,c){var s,r,q,p,o,n
b=V.lE(b)
s=a.width
r=V.lE(s==null?512:s)
s=a.height
q=V.lE(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.kZ()
p.width=r
p.height=q
o=t.ar.a(C.i.ez(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.pZ(o.getImageData(0,0,s,n==null?512:n))}},
dk:function(){return this.d++},
dg:function(){return this.e++}}
T.jq.prototype={
$1:function(a){var s,r,q=this,p=q.c
p.width
p.height
s=q.a
r=s.dt(p,s.b,q.d)
p.width
p.height
p=s.a
p.bindTexture(3553,q.e)
p.pixelStorei(37440,0)
C.C.ev(p,3553,0,6408,6408,5121,r)
p.bindTexture(3553,null)
p=q.b
if(!p.d){p.d=!0
p=p.y
if(p!=null)p.dU()}s.dg()},
$S:3}
T.jp.prototype={
$1:function(a){var s=this,r=s.a,q=r.dt(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.C.ev(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.dU()}r.dg()},
$S:3}
X.ex.prototype={
gt:function(){var s=this.x
return s==null?this.x=D.H():s},
aD:function(a){var s=this.x
return s==null?null:s.G(a)},
sdP:function(a,b){if(this.b){this.b=!1
this.aD(new D.E("clearColor",!0,!1))}},
Y:function(a){var s,r,q,p,o,n,m,l=a.a
l.bindFramebuffer(36160,null)
l.enable(2884)
l.enable(2929)
l.depthFunc(513)
s=l.drawingBufferWidth
if(s==null)s=512
r=l.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.d.az(q.a*s)
o=C.d.az(q.b*r)
n=C.d.az(q.c*s)
a.c=n
q=C.d.az(q.d*r)
a.d=q
l.viewport(p,o,n,q)
l.clearDepth(2000)
if(this.b){q=this.a
l.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
if(m>0)l.clear(m)}}
X.iA.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.H():s},
Y:function(a){var s
a.cy.bT(V.an())
s=V.an()
a.db.bT(s)},
aA:function(a){a.cy.aV()
a.db.aV()}}
X.eZ.prototype={
gt:function(){var s=this.f
return s==null?this.f=D.H():s},
aD:function(a){var s=this.f
return s==null?null:s.G(a)},
eV:function(){return this.aD(null)},
Y:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.aZ(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bT(i)
s=$.n4()
r=q.b
if(r!=null)s=r.bf(0,a,q).T(0,s)
a.db.bT(s)},
aA:function(a){a.cy.aV()
a.db.aV()}}
X.jk.prototype={}
V.aE.prototype={
bF:function(a){this.b=new P.iy(C.T)
this.c=null
this.d=H.b([],t.F)},
M:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.b([],t.C))
s=a.split("\n")
for(j=s.length,r=t.C,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.b([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.f5(o,0,o.length)
l=m==null?o:m
l=H.lG(l," ","&nbsp;")
C.R.eA(n,l)
l=n.style
l.color=b
C.b.gaG(k.d).push(n)}},
ep:function(a,b){var s,r,q,p=this
p.d=H.b([],t.F)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bK()
if(r!=null)for(q=new H.r(s),q=new P.bM(r.cW(new H.bg(q,q.gl(q))).a());q.v();)p.bS(q.gB(q))}}
V.kW.prototype={
$1:function(a){var s=C.d.cV(this.a.ghV(),2)
if(s!=="0.00")P.lF(s+" fps")},
$S:53}
V.er.prototype={
bS:function(a){var s=this
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
bK:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()\\-+*%!&|=.,?:;",h="OpenDoubleStr",g="CloseDoubleStr",f="EscDoubleStr",e="OpenSingleStr",d="CloseSingleStr",c="EscSingleStr",b="Slash",a="Comment",a0="EndComment",a1="MLComment",a2="MLCStar",a3="Whitespace",a4=L.jv()
a4.d=a4.k(0,o)
s=a4.k(0,o).j(0,n)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.P("a","z"))
s.push(K.P("A","Z"))
s=a4.k(0,n).j(0,n)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.P("0","9"))
s.push(K.P("a","z"))
s.push(K.P("A","Z"))
a4.k(0,o).j(0,m).a.push(K.P("0","9"))
a4.k(0,m).j(0,m).a.push(K.P("0","9"))
s=a4.k(0,m).j(0,l)
q=new K.u(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
a4.k(0,l).j(0,k).a.push(K.P("0","9"))
a4.k(0,k).j(0,k).a.push(K.P("0","9"))
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
a4.k(0,h).j(0,h).a.push(new K.aQ())
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
a4.k(0,e).j(0,e).a.push(new K.aQ())
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
r.d=r.a.O("Num")
r=a4.k(0,k)
r.d=r.a.O("Num")
r=a4.k(0,j)
r.d=r.a.O("Symbol")
r=a4.k(0,g)
r.d=r.a.O("String")
r=a4.k(0,d)
r.d=r.a.O("String")
r=a4.k(0,a0)
r.d=r.a.O(a)
r=a4.k(0,a3)
r.d=r.a.O(a3)
r=a4.k(0,n)
r=r.d=r.a.O(n)
s=t.s
r.aW(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aW(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aW(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a4}}
V.ey.prototype={
bS:function(a){var s=this
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
bK:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()[]\\-+*%!&|=.,?:;",h="Slash",g="Comment",f="EndComment",e="Preprocess",d="EndPreprocess",c="Whitespace",b=L.jv()
b.d=b.k(0,o)
s=b.k(0,o).j(0,n)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.P("a","z"))
s.push(K.P("A","Z"))
s=b.k(0,n).j(0,n)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.P("0","9"))
s.push(K.P("a","z"))
s.push(K.P("A","Z"))
b.k(0,o).j(0,m).a.push(K.P("0","9"))
b.k(0,m).j(0,m).a.push(K.P("0","9"))
s=b.k(0,m).j(0,l)
q=new K.u(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
b.k(0,l).j(0,k).a.push(K.P("0","9"))
b.k(0,k).j(0,k).a.push(K.P("0","9"))
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
b.k(0,h).j(0,j).a.push(new K.aQ())
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
r.d=r.a.O("Num")
r=b.k(0,k)
r.d=r.a.O("Num")
r=b.k(0,j)
r.d=r.a.O("Symbol")
r=b.k(0,f)
r.d=r.a.O(g)
r=b.k(0,d)
r.d=r.a.O(e)
r=b.k(0,c)
r.d=r.a.O(c)
r=b.k(0,n)
r=r.d=r.a.O(n)
p=t.s
r.aW(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],p))
r.aW(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],p))
r.aW(0,"Builtin",H.b(["gl_FragColor","gl_Position"],p))
return b}}
V.ez.prototype={
bS:function(a){var s=this,r="#111"
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
bK:function(){var s,r,q,p="Start",o="Id",n="Attr",m="Sym",l="OpenStr",k="CloseStr",j="Other",i=L.jv()
i.d=i.k(0,p)
s=i.k(0,p).j(0,o)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.P("a","z"))
s.push(K.P("A","Z"))
s=i.k(0,o).j(0,o)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.P("0","9"))
s.push(K.P("a","z"))
s.push(K.P("A","Z"))
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
i.k(0,l).j(0,l).a.push(new K.aQ())
i.k(0,p).j(0,j).a.push(new K.aQ())
s=i.k(0,j).j(0,j)
q=H.b([],t.z)
s.a.push(new K.ae(q))
r=new K.u(H.b([],r))
r.p(new H.r('</\\-!>=_"'))
q.push(r)
q.push(K.P("a","z"))
q.push(K.P("A","Z"))
q=i.k(0,m)
q.d=q.a.O("Symbol")
q=i.k(0,k)
q.d=q.a.O("String")
q=i.k(0,o)
r=q.a.O(o)
q.d=r
r.aW(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],t.s))
r=i.k(0,n)
r.d=r.a.O(n)
r=i.k(0,j)
r.d=r.a.O(j)
return i}}
V.f0.prototype={
ep:function(a,b){this.d=H.b([],t.F)
this.M(C.b.j(b,"\n"),"#111")},
bS:function(a){},
bK:function(){return null}}
V.j5.prototype={
dD:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.jE().gbz().h(0,k)
if(j==null)if(d){c.$0()
l.bt(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.aA(p)
o.gaQ(p).n(0,q)
n=W.nJ("radio")
n.checked=s
n.name=k
W.Y(n,"change",new V.j6(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gaQ(p)
r=r.createElement("br")
r.toString
p.n(0,r)},
ai:function(a,b,c){return this.dD(a,b,c,!1)},
bt:function(a){var s,r,q=P.jE(),p=t.N,o=P.lX(q.gbz(),p,p)
o.m(0,this.a,a)
s=q.cT(0,o)
p=window.history
p.toString
r=s.gbH()
p.replaceState(new P.hx([],[]).bD(""),"",r)}}
V.j6.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.bt(s.d)}},
$S:3}
V.je.prototype={
dF:function(a){var s,r,q,p,o,n,m=this.hl(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.r(C.b.hY(a)),s=new P.bM(m.cW(new H.bg(s,s.gl(s))).a());s.v();){r=s.gB(s)
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
if(H.n_(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.e(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.kk(C.w,r,C.e,!1)
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
ey:function(a){var s,r,q,p=t.F,o=new V.er("dart",H.b([],p))
o.bF("dart")
s=new V.ey("glsl",H.b([],p))
s.bF("glsl")
r=new V.ez("html",H.b([],p))
r.bF("html")
q=C.b.hR(H.b([o,s,r],t.g6),new V.jh(a))
if(q!=null)return q
p=new V.f0("plain",H.b([],p))
p.bF("plain")
return p},
dE:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.b([],t.t)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.a2(q,"+")){b2[r]=C.a.ah(q,1)
a8.push(1)
s=!0}else if(C.a.a2(q,"-")){b2[r]=C.a.ah(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.ey(b0)
p.ep(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.kk(C.w,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.lL()
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
if(r>=a8.length)return H.e(a8,r)
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
for(a4=C.b.gP(q);a4.v();)b.appendChild(a4.gB(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
hw:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
for(p=0;p<2;++p){o=l.createElement("div")
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
hl:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
f=L.jv()
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
f.k(0,o).j(0,g).a.push(new K.aQ())
p=f.k(0,g).j(0,g)
q=H.b([],q)
p.a.push(new K.ae(q))
r=new K.u(H.b([],r))
r.p(new H.r("*_`["))
q.push(r)
r=f.k(0,"BoldEnd")
r.d=r.a.O(n)
r=f.k(0,l)
r.d=r.a.O(m)
r=f.k(0,"CodeEnd")
r.d=r.a.O(k)
r=f.k(0,h)
r.d=r.a.O("Link")
r=f.k(0,g)
r.d=r.a.O(g)
return this.b=f}}
V.jg.prototype={
$1:function(a){P.mf(C.m,new V.jf(this.a))},
$S:3}
V.jf.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.az(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.y(-0.01*s)+"px"
q.top=r},
$S:1}
V.jh.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:54}
V.jl.prototype={
ai:function(a,b,c){var s,r,q,p,o,n,m=this,l=W.l3(null)
l.src=b
l.width=64
l.height=64
s=l.style
s.border="solid 2px white"
s=m.c
r=J.aA(s)
q=r.gaQ(s)
p=q.gl(q)
W.Y(l,"click",new V.jn(m,l,b,p),!1)
r.gaQ(s).n(0,l)
s=r.gaQ(s)
r=document.createElement("br")
r.toString
s.n(0,r)
o=P.jE().gbz().h(0,m.a)
if(o==null){m.bt(p)
n=c}else n=P.hW(o,null)===p
if(n)l.click()},
n:function(a,b){return this.ai(a,b,!1)},
bt:function(a){var s,r,q=P.jE(),p=t.N,o=P.lX(q.gbz(),p,p)
o.m(0,this.a,""+a)
s=q.cT(0,o)
p=window.history
p.toString
r=s.gbH()
p.replaceState(new P.hx([],[]).bD(""),"",r)}}
V.jn.prototype={
$1:function(a){var s=this,r=s.a,q=J.lJ(r.c)
q.D(q,new V.jm())
q=s.b.style
q.border="solid 2px black"
r.d.$1(s.c)
r.bt(s.d)},
$S:4}
V.jm.prototype={
$1:function(a){var s
if(t.R.b(a)){s=a.style
s.border="solid 2px white"}},
$S:55}
B.kK.prototype={
$0:function(){var s=this.a,r=s.gaj()
r.sw(0,new V.w(0.1,0.1,0.1))
r=s.gak()
r.sw(0,new V.w(0.2,0.2,0.2))
s.gZ().sw(0,new V.w(0,0,0))
s.gam().sw(0,new V.w(1,1,1))},
$S:1}
B.kL.prototype={
$0:function(){var s=this.a,r=s.gaj()
r.sw(0,new V.w(0.11,0.11,0.1))
r=s.gak()
r.sw(0,new V.w(0.21,0.21,0.2))
s.gZ().sw(0,new V.w(0,0,0))
s=s.gam()
s.sw(0,new V.w(1,0.9,0.5))},
$S:1}
B.kM.prototype={
$0:function(){var s=this.a,r=s.gaj()
r.sw(0,new V.w(0.1,0.1,0.1))
r=s.gak()
r.sw(0,new V.w(0.1,0.1,0.1))
s.gZ().saR(0.4)
r=s.gZ()
r.sw(0,new V.w(0.6,0.6,0.6))
s=s.gam()
s.sw(0,new V.w(0.4,0.4,0.4))},
$S:1}
B.kN.prototype={
$0:function(){var s=this.a,r=s.gaj()
r.sw(0,new V.w(0.1,0.1,0.1))
r=s.gak()
r.sw(0,new V.w(0.1,0.1,0.1))
s.gZ().saR(0.4)
r=s.gZ()
r.sw(0,new V.w(0.2,0.3,1))
s=s.gam()
s.sw(0,new V.w(0.3,0.3,0.3))},
$S:1}
B.kO.prototype={
$0:function(){var s=this.a,r=s.gaj()
r.sw(0,new V.w(0.1,0.1,0.1))
r=s.gak()
r.sw(0,new V.w(0.1,0.1,0.1))
s.gZ().saR(0.6)
r=s.gZ()
r.sw(0,new V.w(0.8,0.8,0.8))
s=s.gam()
s.sw(0,new V.w(0.2,0.2,0.2))},
$S:1}
B.kP.prototype={
$0:function(){var s=this.a,r=s.gaj()
r.sw(0,new V.w(0.1,0.1,0.1))
r=s.gak()
r.sw(0,new V.w(0.1,0.1,0.1))
s.gZ().saR(0.6)
s.gZ().sw(0,new V.w(1,1,1))
s.gam().sw(0,new V.w(0,0,0))},
$S:1}
B.kQ.prototype={
$0:function(){var s=this.a,r=s.gaj()
r.sw(0,new V.w(0.1,0.1,0.1))
r=s.gak()
r.sw(0,new V.w(0.1,0.1,0.1))
s.gZ().saR(0.9)
r=s.gZ()
r.sw(0,new V.w(1,0.8,0.8))
s.gam().sw(0,new V.w(0,0,0))},
$S:1}
B.kR.prototype={
$0:function(){var s,r=this.a
r.gaj().sw(0,new V.w(0,0,0))
s=r.gak()
s.sw(0,new V.w(0.1,0.1,0.1))
r.gZ().saR(0.99)
s=r.gZ()
s.sw(0,new V.w(0.95,0.95,0.95))
r.gam().sw(0,new V.w(0,0,0))},
$S:1}
B.kS.prototype={
$0:function(){var s=this.a,r=s.gaj()
r.sw(0,new V.w(0.3,0.3,0.3))
r=s.gak()
r.sw(0,new V.w(0.5,0.5,0.5))
s.gZ().sw(0,new V.w(0,0,0))
s=s.gam()
s.sw(0,new V.w(0.3,0.3,0.3))},
$S:1}
B.kT.prototype={
$1:function(a){var s,r=this.a.gdO(),q=this.b.f.i_(a),p=r.c
if(!p.b)r.bs(new A.ah(p.a,!0,!1))
p=r.d
if(p!==q){if(p!=null)p.gt().S(0,r.gaM())
s=r.d
r.d=q
q.gt().n(0,r.gaM())
r.a.U(new D.E(r.b+".texture2D",s,r.d))}},
$S:56}
B.kU.prototype={
$1:function(a){var s,r=this.a,q=this.b,p=q.a
p=p==null?null:p.c
s=t.s
r.dE("Vertex Shader","glsl",0,H.b((p==null?"":p).split("\n"),s))
q=q.a
q=q==null?null:q.d
r.dE("Fragment Shader","glsl",0,H.b((q==null?"":q).split("\n"),s))},
$S:2};(function aliases(){var s=J.a.prototype
s.eF=s.i
s=J.bf.prototype
s.eH=s.i
s=P.i.prototype
s.eG=s.bW
s=W.C.prototype
s.c_=s.at
s=W.dT.prototype
s.eI=s.aE
s=K.cS.prototype
s.eE=s.aU
s.c0=s.i
s=O.d7.prototype
s.d3=s.aN
s=O.d8.prototype
s.d4=s.aN})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pe","nO",57)
r(P,"pT","oq",9)
r(P,"pU","or",9)
r(P,"pV","os",9)
q(P,"mR","pO",1)
r(W,"ru","im",44)
p(W,"q5",4,null,["$4"],["ot"],21,0)
p(W,"q6",4,null,["$4"],["ou"],21,0)
var j
o(j=E.bC.prototype,"gen",0,0,null,["$1","$0"],["eo","i7"],0,0)
o(j,"gel",0,0,null,["$1","$0"],["em","i4"],0,0)
n(j,"gi2","i3",6)
n(j,"gi5","i6",6)
o(j=E.fs.prototype,"gd6",0,0,null,["$1","$0"],["d8","d7"],0,0)
m(j,"gik","es",1)
l(j=X.fJ.prototype,"gfF","fG",3)
l(j,"gfq","fs",3)
l(j,"gfz","fA",4)
l(j,"gfJ","fK",25)
l(j,"gfH","fI",25)
l(j,"gfN","fO",4)
l(j,"gfR","fS",4)
l(j,"gfD","fE",4)
l(j,"gfP","fQ",4)
l(j,"gfB","fC",4)
l(j,"gfT","fU",36)
l(j,"gfV","fW",3)
l(j,"gha","hb",12)
l(j,"gh6","h7",12)
l(j,"gh8","h9",12)
o(D.bW.prototype,"geP",0,0,null,["$1","$0"],["aJ","eQ"],0,0)
o(j=D.cX.prototype,"gdl",0,0,null,["$1","$0"],["dm","fL"],0,0)
l(j,"gfX","fY",38)
n(j,"gfk","fl",24)
n(j,"gh0","h1",24)
k(V.a4.prototype,"gl","cJ",15)
k(V.F.prototype,"gl","cJ",15)
o(j=U.bZ.prototype,"gb2",0,0,null,["$1","$0"],["R","ae"],0,0)
n(j,"gfi","fj",20)
n(j,"gfZ","h_",20)
o(j=U.dE.prototype,"gb2",0,0,null,["$1","$0"],["R","ae"],0,0)
l(j,"gca","cb",13)
l(j,"gcc","cd",13)
l(j,"gce","cf",13)
o(j=U.dF.prototype,"gb2",0,0,null,["$1","$0"],["R","ae"],0,0)
l(j,"gca","cb",2)
l(j,"gcc","cd",2)
l(j,"gce","cf",2)
l(j,"gfb","fc",2)
l(j,"gfd","fe",2)
l(j,"ghs","ht",2)
l(j,"ghq","hr",2)
l(j,"gho","hp",2)
l(U.dG.prototype,"gfg","fh",2)
o(j=M.cE.prototype,"gW",0,0,null,["$1","$0"],["X","bl"],0,0)
n(j,"gh2","h3",23)
n(j,"gh4","h5",23)
o(M.cI.prototype,"gW",0,0,null,["$1","$0"],["X","bl"],0,0)
o(j=M.cO.prototype,"gW",0,0,null,["$1","$0"],["X","bl"],0,0)
n(j,"gft","fu",6)
n(j,"gfv","fw",6)
o(j=O.d5.prototype,"gaM",0,0,null,["$1","$0"],["U","bp"],0,0)
o(j,"gdq",0,0,null,["$1","$0"],["dr","hg"],0,0)
n(j,"gfm","fn",22)
n(j,"gfo","fp",22)
o(O.d7.prototype,"gaM",0,0,null,["$1","$0"],["U","bp"],0,0)
o(O.dn.prototype,"gaM",0,0,null,["$1","$0"],["U","bp"],0,0)
o(X.eZ.prototype,"geU",0,0,null,["$1","$0"],["aD","eV"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.O,null)
q(P.O,[H.l8,J.a,J.ag,P.K,P.dM,P.i,H.bg,P.eB,H.cP,H.fG,H.cG,H.jy,H.j3,H.ht,H.bA,P.L,H.iE,H.eJ,H.eE,H.av,H.h5,P.dZ,P.cq,P.bM,P.fP,P.ce,P.fh,P.ko,P.e5,P.k5,P.dL,P.j,P.hJ,P.d3,P.dk,P.en,P.iz,P.km,P.kl,P.W,P.bB,P.eY,P.dq,P.h2,P.iw,P.ai,P.X,P.bN,P.jC,P.hn,W.ic,W.l1,W.li,W.cp,W.M,W.df,W.dT,W.hz,W.cQ,W.k9,W.hK,P.kc,P.e0,P.hl,K.aQ,K.cS,K.f4,K.u,L.fe,L.ft,L.fu,L.ju,O.ad,O.da,E.i5,E.bC,E.bT,E.c7,E.h0,E.j7,E.fs,Z.fM,Z.fN,Z.bV,Z.c0,Z.bn,D.i7,D.bX,D.R,X.cC,X.eG,X.iD,X.iI,X.a8,X.j0,X.jw,X.fJ,D.bW,V.w,V.ba,V.iq,V.d9,V.bh,V.V,V.a3,V.bi,V.f6,V.a4,V.F,U.dE,U.dF,U.dG,M.cI,M.cO,A.ek,A.i0,A.ah,A.b8,A.bb,A.bj,A.bl,A.iM,A.dx,A.dy,A.dA,A.dD,A.a0,A.jA,F.as,F.eI,F.f2,F.jc,F.dl,F.dm,F.cc,F.cm,F.z,F.jS,F.jV,F.jW,O.cf,O.d7,O.iN,T.jo,X.jk,X.iA,X.eZ,V.aE,V.j5,V.je,V.jl])
q(J.a,[J.eC,J.cV,J.bf,J.x,J.c2,J.be,H.db,H.a_,W.d,W.hZ,W.bx,W.cD,W.aS,W.J,W.fU,W.ar,W.ig,W.ih,W.fW,W.cL,W.fY,W.ii,W.m,W.h3,W.aG,W.ix,W.h7,W.bE,W.iH,W.iY,W.hb,W.hc,W.aH,W.hd,W.hf,W.aJ,W.hj,W.hm,W.aL,W.ho,W.aM,W.hu,W.ap,W.hB,W.js,W.ay,W.hD,W.jx,W.jI,W.hL,W.hN,W.hP,W.hR,W.hT,P.aW,P.h9,P.b_,P.hh,P.j4,P.hv,P.b1,P.hF,P.i1,P.fR,P.c9,P.hr])
q(J.bf,[J.f_,J.bK,J.aV])
r(J.iB,J.x)
q(J.c2,[J.cU,J.eD])
q(P.K,[H.cW,P.fx,H.eF,H.fF,H.f8,H.h1,P.ej,P.eV,P.aC,P.fH,P.fE,P.cd,P.eo,P.eq])
r(P.d_,P.dM)
q(P.d_,[H.ck,W.fS,W.a5,P.ev])
r(H.r,H.ck)
q(P.i,[H.n,H.aX,H.b4,P.cT])
q(H.n,[H.d0,H.cY])
r(H.cM,H.aX)
q(P.eB,[H.eL,H.fO])
r(H.d4,H.d0)
r(H.cH,H.cG)
r(H.dg,P.fx)
q(H.bA,[H.fm,H.iC,H.kG,H.kH,H.kI,P.k_,P.jZ,P.k0,P.k1,P.kh,P.kg,P.kB,P.k7,P.k8,P.iF,P.iJ,P.jM,P.jL,P.ij,P.ik,P.jH,P.jD,P.jF,P.jG,P.kj,P.ki,P.ku,P.kv,P.kw,W.il,W.iZ,W.j_,W.jb,W.ji,W.k2,W.j2,W.j1,W.ka,W.kb,W.kf,W.kn,P.kd,P.ke,P.ks,P.kC,P.iu,P.iv,P.i2,E.j8,E.j9,E.ja,E.jr,D.is,D.it,F.kp,F.jd,F.jY,F.jX,F.jT,F.jU,O.iQ,O.iR,O.iS,O.iT,O.iU,O.iV,O.iW,O.iX,T.jq,T.jp,V.kW,V.j6,V.jg,V.jf,V.jh,V.jn,V.jm,B.kK,B.kL,B.kM,B.kN,B.kO,B.kP,B.kQ,B.kR,B.kS,B.kT,B.kU])
q(H.fm,[H.ff,H.bS])
r(P.d2,P.L)
q(P.d2,[H.U,W.fQ])
r(H.c6,H.a_)
q(H.c6,[H.dO,H.dQ])
r(H.dP,H.dO)
r(H.bG,H.dP)
r(H.dR,H.dQ)
r(H.dc,H.dR)
q(H.dc,[H.eQ,H.eR,H.eS,H.eT,H.eU,H.dd,H.bH])
r(H.e_,H.h1)
r(P.dW,P.cT)
r(P.k6,P.ko)
r(P.dS,P.e5)
r(P.dK,P.dS)
r(P.e3,P.d3)
r(P.cl,P.e3)
q(P.en,[P.i3,P.io])
r(P.ep,P.fh)
q(P.ep,[P.i4,P.iy,P.jN,P.jK])
r(P.jJ,P.io)
q(P.aC,[P.dj,P.eA])
r(P.fV,P.bN)
q(W.d,[W.t,W.eu,W.c3,W.aw,W.dU,W.ax,W.aj,W.dX,W.fL,W.cn,P.em,P.b9])
q(W.t,[W.C,W.aD,W.co])
q(W.C,[W.v,P.o])
q(W.v,[W.eh,W.ei,W.bR,W.by,W.bz,W.bc,W.ew,W.c_,W.c1,W.f9,W.bm,W.dr,W.fk,W.fl,W.cg])
r(W.ib,W.aS)
r(W.cJ,W.fU)
q(W.ar,[W.id,W.ie])
r(W.fX,W.fW)
r(W.cK,W.fX)
r(W.fZ,W.fY)
r(W.et,W.fZ)
r(W.am,W.bx)
r(W.h4,W.h3)
r(W.bY,W.h4)
r(W.h8,W.h7)
r(W.bD,W.h8)
r(W.b3,W.m)
q(W.b3,[W.bF,W.ao,W.bJ])
r(W.eN,W.hb)
r(W.eO,W.hc)
r(W.he,W.hd)
r(W.eP,W.he)
r(W.hg,W.hf)
r(W.de,W.hg)
r(W.hk,W.hj)
r(W.f1,W.hk)
r(W.f7,W.hm)
r(W.dV,W.dU)
r(W.fb,W.dV)
r(W.hp,W.ho)
r(W.fc,W.hp)
r(W.fg,W.hu)
r(W.hC,W.hB)
r(W.fn,W.hC)
r(W.dY,W.dX)
r(W.fo,W.dY)
r(W.hE,W.hD)
r(W.fv,W.hE)
r(W.bo,W.ao)
r(W.hM,W.hL)
r(W.fT,W.hM)
r(W.dH,W.cL)
r(W.hO,W.hN)
r(W.h6,W.hO)
r(W.hQ,W.hP)
r(W.dN,W.hQ)
r(W.hS,W.hR)
r(W.hq,W.hS)
r(W.hU,W.hT)
r(W.hy,W.hU)
r(W.h_,W.fQ)
r(W.dI,P.ce)
r(W.hA,W.dT)
r(P.hx,P.kc)
r(P.af,P.hl)
r(P.ha,P.h9)
r(P.eH,P.ha)
r(P.hi,P.hh)
r(P.eW,P.hi)
r(P.ca,P.o)
r(P.hw,P.hv)
r(P.fi,P.hw)
r(P.hG,P.hF)
r(P.fw,P.hG)
r(P.el,P.fR)
r(P.eX,P.b9)
r(P.hs,P.hr)
r(P.fd,P.hs)
q(K.cS,[K.ae,L.dt])
q(E.i5,[Z.bU,A.cb,T.bI])
q(D.R,[D.aT,D.aU,D.E,X.f3])
q(X.f3,[X.d1,X.c4,X.c5,X.ds])
q(O.ad,[D.cX,U.bZ,M.cE])
q(D.i7,[U.i9,U.Z])
r(U.cF,U.Z)
q(A.cb,[A.d6,A.dp])
q(A.a0,[A.ci,A.fA,A.fB,A.fC,A.fy,A.du,A.fz,A.dv,A.dw,A.fD,A.dz,A.cj,A.dB,A.dC])
q(O.cf,[O.d5,O.dn])
q(O.d7,[O.iK,O.iL,O.d8])
q(O.d8,[O.iO,O.iP])
q(T.bI,[T.fp,T.fr])
r(T.fq,T.fp)
r(X.ex,X.jk)
q(V.aE,[V.er,V.ey,V.ez,V.f0])
s(H.ck,H.fG)
s(H.dO,P.j)
s(H.dP,H.cP)
s(H.dQ,P.j)
s(H.dR,H.cP)
s(P.dM,P.j)
s(P.e3,P.hJ)
s(P.e5,P.dk)
s(W.fU,W.ic)
s(W.fW,P.j)
s(W.fX,W.M)
s(W.fY,P.j)
s(W.fZ,W.M)
s(W.h3,P.j)
s(W.h4,W.M)
s(W.h7,P.j)
s(W.h8,W.M)
s(W.hb,P.L)
s(W.hc,P.L)
s(W.hd,P.j)
s(W.he,W.M)
s(W.hf,P.j)
s(W.hg,W.M)
s(W.hj,P.j)
s(W.hk,W.M)
s(W.hm,P.L)
s(W.dU,P.j)
s(W.dV,W.M)
s(W.ho,P.j)
s(W.hp,W.M)
s(W.hu,P.L)
s(W.hB,P.j)
s(W.hC,W.M)
s(W.dX,P.j)
s(W.dY,W.M)
s(W.hD,P.j)
s(W.hE,W.M)
s(W.hL,P.j)
s(W.hM,W.M)
s(W.hN,P.j)
s(W.hO,W.M)
s(W.hP,P.j)
s(W.hQ,W.M)
s(W.hR,P.j)
s(W.hS,W.M)
s(W.hT,P.j)
s(W.hU,W.M)
s(P.h9,P.j)
s(P.ha,W.M)
s(P.hh,P.j)
s(P.hi,W.M)
s(P.hv,P.j)
s(P.hw,W.M)
s(P.hF,P.j)
s(P.hG,W.M)
s(P.fR,P.L)
s(P.hr,P.j)
s(P.hs,W.M)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",a1:"double",a2:"num",l:"String",ac:"bool",ai:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([R?])","~()","~(R)","~(m)","~(ao)","~(l,@)","~(k,i<bC>)","~(as)","~(k,k)","~(~())","ai()","~(@,@)","~(bJ)","~(R?)","l(k)","a1()","~(ch,l,k)","ac(t)","ac(aI)","ac(l)","~(k,i<Z?>)","ac(C,l,l,cp)","~(k,i<bh>)","~(k,i<aK>)","~(k,i<at>)","~(bF)","@()","~(~(R))","C(t)","ai(@)","~(l,l?)","~(O?,O?)","~(a2)","~(@)","ai(@,@)","~(t,t?)","~(bo)","ai(~())","ac(i<at>)","l(l)","@(l)","@(@)","I<l,l>(I<l,l>,l)","ch(@,@)","l(d)","bU(k)","~(l,k)","@(@,l)","~(l[@])","k(b8,b8)","k(bb,bb)","k(bj,bj)","k(bl,bl)","~(jt)","ac(aE?)","~(C)","~(l)","k(@,@)","k(k,k)","~(cm,a1,a1)","~(l,l)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oM(v.typeUniverse,JSON.parse('{"f_":"bf","bK":"bf","aV":"bf","qp":"m","qB":"m","qr":"b9","qq":"d","qI":"d","qL":"d","qo":"o","qC":"o","qs":"v","qF":"v","qD":"t","qA":"t","ra":"aj","qw":"b3","qt":"aD","qM":"aD","qK":"ao","qE":"bD","qx":"J","qy":"ap","qH":"bG","qG":"a_","eC":{"ac":[]},"bf":{"lW":[]},"x":{"p":["1"],"n":["1"],"i":["1"]},"iB":{"x":["1"],"p":["1"],"n":["1"],"i":["1"]},"c2":{"a1":[],"a2":[]},"cU":{"a1":[],"k":[],"a2":[]},"eD":{"a1":[],"a2":[]},"be":{"l":[]},"cW":{"K":[]},"r":{"j":["k"],"p":["k"],"n":["k"],"i":["k"],"j.E":"k"},"n":{"i":["1"]},"d0":{"n":["1"],"i":["1"]},"aX":{"i":["2"],"i.E":"2"},"cM":{"aX":["1","2"],"n":["2"],"i":["2"],"i.E":"2"},"d4":{"d0":["2"],"n":["2"],"i":["2"],"i.E":"2"},"b4":{"i":["1"],"i.E":"1"},"ck":{"j":["1"],"p":["1"],"n":["1"],"i":["1"]},"cG":{"I":["1","2"]},"cH":{"I":["1","2"]},"dg":{"K":[]},"eF":{"K":[]},"fF":{"K":[]},"bA":{"cR":[]},"fm":{"cR":[]},"ff":{"cR":[]},"bS":{"cR":[]},"f8":{"K":[]},"U":{"L":["1","2"],"I":["1","2"],"L.V":"2"},"cY":{"n":["1"],"i":["1"],"i.E":"1"},"eE":{"m7":[]},"c6":{"A":["1"],"a_":[]},"bG":{"j":["a1"],"A":["a1"],"p":["a1"],"a_":[],"n":["a1"],"i":["a1"],"j.E":"a1"},"dc":{"j":["k"],"A":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"]},"eQ":{"j":["k"],"A":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"eR":{"j":["k"],"A":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"eS":{"j":["k"],"A":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"eT":{"j":["k"],"A":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"eU":{"j":["k"],"A":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"dd":{"j":["k"],"A":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"bH":{"j":["k"],"ch":[],"A":["k"],"p":["k"],"a_":[],"n":["k"],"i":["k"],"j.E":"k"},"h1":{"K":[]},"e_":{"K":[]},"dZ":{"jt":[]},"dW":{"i":["1"],"i.E":"1"},"dK":{"dk":["1"],"n":["1"],"i":["1"]},"cT":{"i":["1"]},"d_":{"j":["1"],"p":["1"],"n":["1"],"i":["1"]},"d2":{"L":["1","2"],"I":["1","2"]},"L":{"I":["1","2"]},"d3":{"I":["1","2"]},"cl":{"I":["1","2"]},"dS":{"dk":["1"],"n":["1"],"i":["1"]},"a1":{"a2":[]},"k":{"a2":[]},"p":{"n":["1"],"i":["1"]},"ej":{"K":[]},"fx":{"K":[]},"eV":{"K":[]},"aC":{"K":[]},"dj":{"K":[]},"eA":{"K":[]},"fH":{"K":[]},"fE":{"K":[]},"cd":{"K":[]},"eo":{"K":[]},"eY":{"K":[]},"dq":{"K":[]},"eq":{"K":[]},"bN":{"fI":[]},"hn":{"fI":[]},"fV":{"fI":[]},"v":{"C":[],"t":[],"d":[]},"bc":{"C":[],"t":[],"d":[]},"C":{"t":[],"d":[]},"am":{"bx":[]},"bF":{"m":[]},"ao":{"m":[]},"t":{"d":[]},"aw":{"d":[]},"ax":{"d":[]},"aj":{"d":[]},"bJ":{"m":[]},"b3":{"m":[]},"bo":{"ao":[],"m":[]},"cp":{"aI":[]},"eh":{"C":[],"t":[],"d":[]},"ei":{"C":[],"t":[],"d":[]},"bR":{"C":[],"t":[],"d":[]},"by":{"C":[],"t":[],"d":[]},"bz":{"C":[],"t":[],"d":[]},"aD":{"t":[],"d":[]},"cK":{"j":["af<a2>"],"p":["af<a2>"],"A":["af<a2>"],"n":["af<a2>"],"i":["af<a2>"],"j.E":"af<a2>"},"cL":{"af":["a2"]},"et":{"j":["l"],"p":["l"],"A":["l"],"n":["l"],"i":["l"],"j.E":"l"},"fS":{"j":["C"],"p":["C"],"n":["C"],"i":["C"],"j.E":"C"},"bY":{"j":["am"],"p":["am"],"A":["am"],"n":["am"],"i":["am"],"j.E":"am"},"eu":{"d":[]},"ew":{"C":[],"t":[],"d":[]},"bD":{"j":["t"],"p":["t"],"A":["t"],"n":["t"],"i":["t"],"j.E":"t"},"c_":{"C":[],"t":[],"d":[]},"c1":{"C":[],"t":[],"d":[]},"c3":{"d":[]},"eN":{"L":["l","@"],"I":["l","@"],"L.V":"@"},"eO":{"L":["l","@"],"I":["l","@"],"L.V":"@"},"eP":{"j":["aH"],"p":["aH"],"A":["aH"],"n":["aH"],"i":["aH"],"j.E":"aH"},"a5":{"j":["t"],"p":["t"],"n":["t"],"i":["t"],"j.E":"t"},"de":{"j":["t"],"p":["t"],"A":["t"],"n":["t"],"i":["t"],"j.E":"t"},"f1":{"j":["aJ"],"p":["aJ"],"A":["aJ"],"n":["aJ"],"i":["aJ"],"j.E":"aJ"},"f7":{"L":["l","@"],"I":["l","@"],"L.V":"@"},"f9":{"C":[],"t":[],"d":[]},"fb":{"j":["aw"],"p":["aw"],"A":["aw"],"d":[],"n":["aw"],"i":["aw"],"j.E":"aw"},"fc":{"j":["aL"],"p":["aL"],"A":["aL"],"n":["aL"],"i":["aL"],"j.E":"aL"},"fg":{"L":["l","l"],"I":["l","l"],"L.V":"l"},"bm":{"C":[],"t":[],"d":[]},"dr":{"C":[],"t":[],"d":[]},"fk":{"C":[],"t":[],"d":[]},"fl":{"C":[],"t":[],"d":[]},"cg":{"C":[],"t":[],"d":[]},"fn":{"j":["aj"],"p":["aj"],"A":["aj"],"n":["aj"],"i":["aj"],"j.E":"aj"},"fo":{"j":["ax"],"p":["ax"],"A":["ax"],"d":[],"n":["ax"],"i":["ax"],"j.E":"ax"},"fv":{"j":["ay"],"p":["ay"],"A":["ay"],"n":["ay"],"i":["ay"],"j.E":"ay"},"fL":{"d":[]},"cn":{"d":[]},"co":{"t":[],"d":[]},"fT":{"j":["J"],"p":["J"],"A":["J"],"n":["J"],"i":["J"],"j.E":"J"},"dH":{"af":["a2"]},"h6":{"j":["aG?"],"p":["aG?"],"A":["aG?"],"n":["aG?"],"i":["aG?"],"j.E":"aG?"},"dN":{"j":["t"],"p":["t"],"A":["t"],"n":["t"],"i":["t"],"j.E":"t"},"hq":{"j":["aM"],"p":["aM"],"A":["aM"],"n":["aM"],"i":["aM"],"j.E":"aM"},"hy":{"j":["ap"],"p":["ap"],"A":["ap"],"n":["ap"],"i":["ap"],"j.E":"ap"},"fQ":{"L":["l","l"],"I":["l","l"]},"h_":{"L":["l","l"],"I":["l","l"],"L.V":"l"},"dI":{"ce":["1"]},"df":{"aI":[]},"dT":{"aI":[]},"hA":{"aI":[]},"hz":{"aI":[]},"e0":{"bE":[]},"ev":{"j":["C"],"p":["C"],"n":["C"],"i":["C"],"j.E":"C"},"af":{"hl":["1"]},"eH":{"j":["aW"],"p":["aW"],"n":["aW"],"i":["aW"],"j.E":"aW"},"eW":{"j":["b_"],"p":["b_"],"n":["b_"],"i":["b_"],"j.E":"b_"},"ca":{"o":[],"C":[],"t":[],"d":[]},"fi":{"j":["l"],"p":["l"],"n":["l"],"i":["l"],"j.E":"l"},"o":{"C":[],"t":[],"d":[]},"fw":{"j":["b1"],"p":["b1"],"n":["b1"],"i":["b1"],"j.E":"b1"},"el":{"L":["l","@"],"I":["l","@"],"L.V":"@"},"em":{"d":[]},"b9":{"d":[]},"eX":{"d":[]},"fd":{"j":["I<@,@>"],"p":["I<@,@>"],"n":["I<@,@>"],"i":["I<@,@>"],"j.E":"I<@,@>"},"cS":{"aY":[]},"aQ":{"aY":[]},"ae":{"aY":[]},"f4":{"aY":[]},"u":{"aY":[]},"dt":{"aY":[]},"ad":{"i":["1"],"ad.T":"1"},"aT":{"R":[]},"aU":{"R":[]},"E":{"R":[]},"d1":{"R":[]},"c4":{"R":[]},"c5":{"R":[]},"f3":{"R":[]},"ds":{"R":[]},"nv":{"at":[]},"bW":{"at":[]},"nV":{"at":[]},"od":{"at":[]},"cX":{"ad":["at"],"i":["at"],"ad.T":"at"},"cF":{"Z":[]},"bZ":{"ad":["Z?"],"Z":[],"i":["Z?"],"ad.T":"Z?"},"dE":{"Z":[]},"dF":{"Z":[]},"dG":{"Z":[]},"cE":{"ad":["aK"],"aK":[],"i":["aK"],"ad.T":"aK"},"cI":{"aK":[]},"cO":{"aK":[]},"ci":{"a0":[]},"cj":{"a0":[]},"d6":{"cb":[]},"dp":{"cb":[]},"fA":{"a0":[]},"fB":{"a0":[]},"fC":{"a0":[]},"fy":{"a0":[]},"du":{"a0":[]},"fz":{"a0":[]},"dv":{"a0":[]},"dw":{"a0":[]},"fD":{"a0":[]},"dz":{"a0":[]},"dB":{"a0":[]},"dC":{"a0":[]},"d5":{"cf":[]},"dn":{"cf":[]},"fp":{"bI":[]},"fr":{"bI":[]},"fq":{"bI":[]},"er":{"aE":[]},"ey":{"aE":[]},"ez":{"aE":[]},"f0":{"aE":[]},"ch":{"p":["k"],"n":["k"],"i":["k"]}}'))
H.oL(v.typeUniverse,JSON.parse('{"ag":1,"n":1,"bg":1,"eL":2,"fO":1,"cP":1,"fG":1,"ck":1,"cG":2,"eJ":1,"c6":1,"ce":1,"bM":1,"fh":2,"dL":1,"cT":1,"d_":1,"d2":2,"hJ":2,"d3":2,"dS":1,"dM":1,"e3":2,"e5":1,"en":2,"ep":2,"eB":1,"dI":1,"M":1,"cQ":1,"aT":1,"aU":1,"E":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lz
return{cR:s("bR"),fK:s("bx"),Y:s("by"),eT:s("bU"),ed:s("bV"),gA:s("bz"),ar:s("cD"),gw:s("n<@>"),h:s("C"),m:s("bC"),bU:s("K"),aD:s("m"),c8:s("am"),bX:s("bY"),fA:s("ex"),b:s("cR"),I:s("bE"),R:s("c_"),gk:s("c1"),eu:s("x<ek>"),i:s("x<nv>"),cn:s("x<b8>"),U:s("x<bW>"),fD:s("x<bb>"),C:s("x<bc>"),v:s("x<as>"),fv:s("x<c0>"),e:s("x<at>"),L:s("x<eI>"),F:s("x<p<bc>>"),z:s("x<aY>"),g8:s("x<bh>"),Q:s("x<aI>"),J:s("x<f2>"),cG:s("x<V>"),eg:s("x<bj>"),o:s("x<nV>"),ba:s("x<aK>"),D:s("x<od>"),c3:s("x<bl>"),g9:s("x<ce<O>>"),s:s("x<l>"),ga:s("x<bI>"),gT:s("x<ay>"),ab:s("x<dt>"),gN:s("x<ch>"),dC:s("x<a0>"),c:s("x<dx>"),V:s("x<dy>"),B:s("x<dA>"),M:s("x<dD>"),k:s("x<cm>"),n:s("x<a1>"),gn:s("x<@>"),t:s("x<k>"),g6:s("x<aE?>"),eJ:s("x<Z?>"),bc:s("x<cf?>"),p:s("x<cj?>"),a:s("x<~(R)>"),T:s("cV"),eH:s("lW"),O:s("aV"),aU:s("A<@>"),fX:s("U<k,ac>"),y:s("U<k,k>"),d:s("p<dx>"),r:s("p<dy>"),x:s("p<dA>"),E:s("p<dD>"),aH:s("p<@>"),bv:s("d1"),f:s("I<@,@>"),dv:s("d4<l,l>"),gc:s("bh"),bu:s("c3"),Z:s("c4"),bZ:s("c5"),cH:s("db"),dE:s("a_"),bm:s("bH"),P:s("ai"),K:s("O"),q:s("af<a2>"),fJ:s("m7"),ew:s("ca"),fg:s("cb"),N:s("l"),g7:s("o"),bY:s("bm"),aW:s("cg"),aF:s("jt"),bJ:s("ft"),dr:s("ds"),u:s("du"),w:s("ci"),g:s("dv"),bw:s("dw"),bK:s("dz"),j:s("cj"),G:s("dB"),l:s("dC"),ak:s("bK"),dw:s("cl<l,l>"),dD:s("fI"),h9:s("co"),ac:s("a5"),cJ:s("ac"),gR:s("a1"),A:s("@"),S:s("k"),aw:s("0&*"),_:s("O*"),bG:s("lV<ai>?"),eI:s("d6?"),X:s("O?"),gW:s("c9?"),dm:s("dp?"),dl:s("fe?"),f7:s("fu?"),W:s("ci?"),H:s("a2"),h2:s("~(R)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.p=W.by.prototype
C.i=W.bz.prototype
C.R=W.bc.prototype
C.U=J.a.prototype
C.b=J.x.prototype
C.c=J.cU.prototype
C.V=J.cV.prototype
C.d=J.c2.prototype
C.a=J.be.prototype
C.W=J.aV.prototype
C.a0=H.bH.prototype
C.B=J.f_.prototype
C.C=P.c9.prototype
C.D=W.dr.prototype
C.o=J.bK.prototype
C.E=W.bo.prototype
C.F=W.cn.prototype
C.G=new E.bT("Browser.chrome")
C.q=new E.bT("Browser.firefox")
C.r=new E.bT("Browser.edge")
C.H=new E.bT("Browser.other")
C.a6=new P.i4()
C.I=new P.i3()
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

C.P=new P.eY()
C.e=new P.jJ()
C.Q=new P.jN()
C.f=new P.k6()
C.m=new P.bB(0)
C.S=new P.bB(5e6)
C.T=new P.iz("element",!1,!1,!1)
C.j=H.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.X=H.b(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
C.k=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.l=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.Y=H.b(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
C.v=H.b(s([]),t.s)
C.Z=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.w=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.x=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.y=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.z=H.b(s(["bind","if","ref","repeat","syntax"]),t.s)
C.n=H.b(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
C.a_=new H.cH(0,{},C.v,H.lz("cH<l,l>"))
C.a1=new E.c7("OperatingSystem.windows")
C.A=new E.c7("OperatingSystem.mac")
C.a2=new E.c7("OperatingSystem.linux")
C.a3=new E.c7("OperatingSystem.other")
C.a4=new P.jK(!1)
C.a5=new P.cq(null,2)})();(function staticFields(){$.k3=null
$.aR=0
$.cB=null
$.lN=null
$.mT=null
$.mQ=null
$.mY=null
$.kD=null
$.kJ=null
$.lB=null
$.ct=null
$.e8=null
$.e9=null
$.lv=!1
$.aN=C.f
$.ak=H.b([],H.lz("x<O>"))
$.bd=null
$.l0=null
$.lT=null
$.lS=null
$.dJ=P.S(t.N,t.b)
$.ip=null
$.lZ=null
$.m0=null
$.a9=null
$.b0=null
$.m9=null
$.bL=null
$.mn=null
$.jO=null
$.jP=null
$.jQ=null
$.mm=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qz","n3",function(){return H.q4("_$dart_dartClosure")})
s($,"qN","n5",function(){return H.b2(H.jz({
toString:function(){return"$receiver$"}}))})
s($,"qO","n6",function(){return H.b2(H.jz({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"qP","n7",function(){return H.b2(H.jz(null))})
s($,"qQ","n8",function(){return H.b2(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qT","nb",function(){return H.b2(H.jz(void 0))})
s($,"qU","nc",function(){return H.b2(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"qS","na",function(){return H.b2(H.mh(null))})
s($,"qR","n9",function(){return H.b2(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"qW","ne",function(){return H.b2(H.mh(void 0))})
s($,"qV","nd",function(){return H.b2(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"rb","lH",function(){return P.op()})
s($,"qX","nf",function(){return new P.jM().$0()})
s($,"qY","ng",function(){return new P.jL().$0()})
s($,"rc","nk",function(){return new Int8Array(H.cs(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rf","nm",function(){return P.o6("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rs","nn",function(){return P.p6()})
s($,"rd","nl",function(){return P.lY(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"r4","nj",function(){return Z.az(0)})
s($,"qZ","nh",function(){return Z.az(511)})
s($,"r6","aO",function(){return Z.az(1)})
s($,"r5","bv",function(){return Z.az(2)})
s($,"r0","bu",function(){return Z.az(4)})
s($,"r7","bw",function(){return Z.az(8)})
s($,"r8","bP",function(){return Z.az(16)})
s($,"r1","ee",function(){return Z.az(32)})
s($,"r2","ef",function(){return Z.az(64)})
s($,"r3","ni",function(){return Z.az(96)})
s($,"r9","cz",function(){return Z.az(128)})
s($,"r_","bt",function(){return Z.az(256)})
s($,"qv","n2",function(){return new V.iq()})
r($,"qu","G",function(){return $.n2()})
r($,"qJ","n4",function(){var q=V.m2(),p=V.lg(),o=$.mm
return V.m_(q,p,o==null?$.mm=V.om(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.db,DataView:H.a_,ArrayBufferView:H.a_,Float32Array:H.bG,Float64Array:H.bG,Int16Array:H.eQ,Int32Array:H.eR,Int8Array:H.eS,Uint16Array:H.eT,Uint32Array:H.eU,Uint8ClampedArray:H.dd,CanvasPixelArray:H.dd,Uint8Array:H.bH,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.hZ,HTMLAnchorElement:W.eh,HTMLAreaElement:W.ei,HTMLBaseElement:W.bR,Blob:W.bx,HTMLBodyElement:W.by,HTMLCanvasElement:W.bz,CanvasRenderingContext2D:W.cD,CDATASection:W.aD,CharacterData:W.aD,Comment:W.aD,ProcessingInstruction:W.aD,Text:W.aD,CSSPerspective:W.ib,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.cJ,MSStyleCSSProperties:W.cJ,CSS2Properties:W.cJ,CSSImageValue:W.ar,CSSKeywordValue:W.ar,CSSNumericValue:W.ar,CSSPositionValue:W.ar,CSSResourceValue:W.ar,CSSUnitValue:W.ar,CSSURLImageValue:W.ar,CSSStyleValue:W.ar,CSSMatrixComponent:W.aS,CSSRotation:W.aS,CSSScale:W.aS,CSSSkew:W.aS,CSSTranslation:W.aS,CSSTransformComponent:W.aS,CSSTransformValue:W.id,CSSUnparsedValue:W.ie,DataTransferItemList:W.ig,HTMLDivElement:W.bc,DOMException:W.ih,ClientRectList:W.cK,DOMRectList:W.cK,DOMRectReadOnly:W.cL,DOMStringList:W.et,DOMTokenList:W.ii,Element:W.C,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,SubmitEvent:W.m,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.am,FileList:W.bY,FileWriter:W.eu,HTMLFormElement:W.ew,Gamepad:W.aG,History:W.ix,HTMLCollection:W.bD,HTMLFormControlsCollection:W.bD,HTMLOptionsCollection:W.bD,ImageData:W.bE,HTMLImageElement:W.c_,HTMLInputElement:W.c1,KeyboardEvent:W.bF,Location:W.iH,MediaList:W.iY,MessagePort:W.c3,MIDIInputMap:W.eN,MIDIOutputMap:W.eO,MimeType:W.aH,MimeTypeArray:W.eP,PointerEvent:W.ao,MouseEvent:W.ao,DragEvent:W.ao,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,DocumentType:W.t,Node:W.t,NodeList:W.de,RadioNodeList:W.de,Plugin:W.aJ,PluginArray:W.f1,RTCStatsReport:W.f7,HTMLSelectElement:W.f9,SourceBuffer:W.aw,SourceBufferList:W.fb,SpeechGrammar:W.aL,SpeechGrammarList:W.fc,SpeechRecognitionResult:W.aM,Storage:W.fg,CSSStyleSheet:W.ap,StyleSheet:W.ap,HTMLTableCellElement:W.bm,HTMLTableDataCellElement:W.bm,HTMLTableHeaderCellElement:W.bm,HTMLTableElement:W.dr,HTMLTableRowElement:W.fk,HTMLTableSectionElement:W.fl,HTMLTemplateElement:W.cg,TextTrack:W.ax,TextTrackCue:W.aj,VTTCue:W.aj,TextTrackCueList:W.fn,TextTrackList:W.fo,TimeRanges:W.js,Touch:W.ay,TouchEvent:W.bJ,TouchList:W.fv,TrackDefaultList:W.jx,CompositionEvent:W.b3,FocusEvent:W.b3,TextEvent:W.b3,UIEvent:W.b3,URL:W.jI,VideoTrackList:W.fL,WheelEvent:W.bo,Window:W.cn,DOMWindow:W.cn,Attr:W.co,CSSRuleList:W.fT,ClientRect:W.dH,DOMRect:W.dH,GamepadList:W.h6,NamedNodeMap:W.dN,MozNamedAttrMap:W.dN,SpeechRecognitionResultList:W.hq,StyleSheetList:W.hy,SVGLength:P.aW,SVGLengthList:P.eH,SVGNumber:P.b_,SVGNumberList:P.eW,SVGPointList:P.j4,SVGScriptElement:P.ca,SVGStringList:P.fi,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.b1,SVGTransformList:P.fw,AudioBuffer:P.i1,AudioParamMap:P.el,AudioTrackList:P.em,AudioContext:P.b9,webkitAudioContext:P.b9,BaseAudioContext:P.b9,OfflineAudioContext:P.eX,WebGL2RenderingContext:P.c9,SQLResultSetRowList:P.fd})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.dO.$nativeSuperclassTag="ArrayBufferView"
H.dP.$nativeSuperclassTag="ArrayBufferView"
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.dQ.$nativeSuperclassTag="ArrayBufferView"
H.dR.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
W.dU.$nativeSuperclassTag="EventTarget"
W.dV.$nativeSuperclassTag="EventTarget"
W.dX.$nativeSuperclassTag="EventTarget"
W.dY.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=B.qe
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
