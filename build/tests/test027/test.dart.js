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
a[c]=function(){a[c]=function(){H.qU(b)}
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
if(a[b]!==s)H.qV(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lW(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={lu:function lu(){},
lw:function(a){return new H.cY("Field '"+a+"' has been assigned during initialization.")},
kU:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
jx:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
oS:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
qx:function(a,b,c){return a},
ov:function(a,b,c,d){if(t.gw.b(a))return new H.cO(a,b,c.M("@<0>").bl(d).M("cO<1,2>"))
return new H.aZ(a,b,c.M("@<0>").bl(d).M("aZ<1,2>"))},
iK:function(){return new P.cd("No element")},
om:function(){return new P.cd("Too many elements")},
oP:function(a,b){H.ff(a,0,J.aR(a)-1,b)},
ff:function(a,b,c,d){if(c-b<=32)H.oO(a,b,c,d)
else H.oN(a,b,c,d)},
oO:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.cA(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.av()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
oN:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.aa(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.aa(a4+a5,2),f=g-j,e=g+j,d=J.cA(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.av()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.W(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
if(r<i&&q>h){for(;J.W(a6.$2(d.h(a3,r),b),0);)++r
for(;J.W(a6.$2(d.h(a3,q),a0),0);)--q
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
cY:function cY(a){this.a=a},
r:function r(a){this.a=a},
n:function n(){},
d2:function d2(){},
bh:function bh(a,b){var _=this
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
eQ:function eQ(a,b){this.a=null
this.b=a
this.c=b},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
b6:function b6(a,b,c){this.a=a
this.b=b
this.$ti=c},
fT:function fT(a,b){this.a=a
this.b=b},
cR:function cR(){},
fL:function fL(){},
ck:function ck(){},
of:function(){throw H.c(P.C("Cannot modify unmodifiable Map"))},
nC:function(a){var s,r=H.nB(a)
if(r!=null)return r
s="minified:"+a
return s},
nu:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
x:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cC(a)
return s},
dj:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mu:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.aa(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.F(q,o)|32)>r)return n}return parseInt(a,b)},
dk:function(a){return H.oy(a)},
oy:function(a){var s,r,q,p
if(a instanceof P.P)return H.aq(H.b8(a),null)
if(J.eh(a)===C.U||t.ak.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.aq(H.b8(a),null)},
oz:function(){if(!!self.location)return self.location.href
return null},
mt:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oH:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.i_(q))throw H.c(H.eg(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.b4(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.eg(q))}return H.mt(p)},
mv:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.i_(q))throw H.c(H.eg(q))
if(q<0)throw H.c(H.eg(q))
if(q>65535)return H.oH(a)}return H.mt(a)},
oI:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aw:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.b4(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.aa(a,0,1114111,null,null))},
c9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oG:function(a){var s=H.c9(a).getFullYear()+0
return s},
oE:function(a){var s=H.c9(a).getMonth()+1
return s},
oA:function(a){var s=H.c9(a).getDate()+0
return s},
oB:function(a){var s=H.c9(a).getHours()+0
return s},
oD:function(a){var s=H.c9(a).getMinutes()+0
return s},
oF:function(a){var s=H.c9(a).getSeconds()+0
return s},
oC:function(a){var s=H.c9(a).getMilliseconds()+0
return s},
ns:function(a){throw H.c(H.eg(a))},
d:function(a,b){if(a==null)J.aR(a)
throw H.c(H.cy(a,b))},
cy:function(a,b){var s,r="index"
if(!H.i_(b))return new P.aD(!0,b,r,null)
s=J.aR(a)
if(b<0||b>=s)return P.O(b,a,r,null,s)
return P.fa(b,r)},
qB:function(a,b,c){if(a>c)return P.aa(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aa(b,a,c,"end",null)
return new P.aD(!0,b,"end",null)},
eg:function(a){return new P.aD(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.f_()
s=new Error()
s.dartException=a
r=H.qW
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qW:function(){return J.cC(this.dartException)},
i:function(a){throw H.c(a)},
q:function(a){throw H.c(P.aG(a))},
b4:function(a){var s,r,q,p,o,n
a=H.nx(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jI(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jJ:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mI:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lv:function(a,b){var s=b==null,r=s?null:b.method
return new H.eK(a,r,s?null:b.receiver)},
al:function(a){if(a==null)return new H.jf(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bP(a,a.dartException)
return H.qt(a)},
bP:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qt:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.b4(r,16)&8191)===10)switch(q){case 438:return H.bP(a,H.lv(H.x(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.x(s)+" (Error "+q+")"
return H.bP(a,new H.di(p,e))}}if(a instanceof TypeError){o=$.nG()
n=$.nH()
m=$.nI()
l=$.nJ()
k=$.nM()
j=$.nN()
i=$.nL()
$.nK()
h=$.nP()
g=$.nO()
f=o.at(s)
if(f!=null)return H.bP(a,H.lv(s,f))
else{f=n.at(s)
if(f!=null){f.method="call"
return H.bP(a,H.lv(s,f))}else{f=m.at(s)
if(f==null){f=l.at(s)
if(f==null){f=k.at(s)
if(f==null){f=j.at(s)
if(f==null){f=i.at(s)
if(f==null){f=l.at(s)
if(f==null){f=h.at(s)
if(f==null){f=g.at(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bP(a,new H.di(s,f==null?e:f.method))}}return H.bP(a,new H.fK(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dt()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bP(a,new P.aD(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dt()
return a},
lY:function(a){var s
if(a==null)return new H.hy(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hy(a)},
qD:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qL:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
cx:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qL)
a.$identity=s
return s},
oe:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.fk().constructor.prototype):Object.create(new H.bT(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aT
if(typeof r!=="number")return r.W()
$.aT=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.mb(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.oa(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.mb(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
oa:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nr,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.o8:H.o7
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
ob:function(a,b,c,d){var s=H.ma
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
mb:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.od(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.ob(r,!p,s,b)
if(r===0){p=$.aT
if(typeof p!=="number")return p.W()
$.aT=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cD
return new Function(p+(o==null?$.cD=H.id("self"):o)+";return "+n+"."+H.x(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aT
if(typeof p!=="number")return p.W()
$.aT=p+1
m+=p
p="return function("+m+"){return this."
o=$.cD
return new Function(p+(o==null?$.cD=H.id("self"):o)+"."+H.x(s)+"("+m+");}")()},
oc:function(a,b,c,d){var s=H.ma,r=H.o9
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
od:function(a,b){var s,r,q,p,o,n,m,l=$.cD
if(l==null)l=$.cD=H.id("self")
s=$.m9
if(s==null)s=$.m9=H.id("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.oc(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.x(r)+"(this."+s+");"
n=$.aT
if(typeof n!=="number")return n.W()
$.aT=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.x(r)+"(this."+s+", "+m+");"
n=$.aT
if(typeof n!=="number")return n.W()
$.aT=n+1
return new Function(o+n+"}")()},
lW:function(a,b,c,d,e,f,g){return H.oe(a,b,c,d,!!e,!!f,g)},
o7:function(a,b){return H.hM(v.typeUniverse,H.b8(a.a),b)},
o8:function(a,b){return H.hM(v.typeUniverse,H.b8(a.c),b)},
ma:function(a){return a.a},
o9:function(a){return a.c},
id:function(a){var s,r,q,p=new H.bT("self","target","receiver","name"),o=J.lt(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bR("Field name "+a+" not found."))},
qU:function(a){throw H.c(new P.ew(a))},
qF:function(a){return v.getIsolateTag(a)},
qV:function(a){return H.i(new H.cY(a))},
t1:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qO:function(a){var s,r,q,p,o,n=$.nq.$1(a),m=$.kS[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kZ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ni.$2(a,n)
if(q!=null){m=$.kS[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kZ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.ld(s)
$.kS[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kZ[n]=s
return s}if(p==="-"){o=H.ld(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nv(a,s)
if(p==="*")throw H.c(P.jM(n))
if(v.leafTags[n]===true){o=H.ld(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nv(a,s)},
nv:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.m_(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ld:function(a){return J.m_(a,!1,null,!!a.$iB)},
qQ:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.ld(s)
else return J.m_(s,c,null,null)},
qJ:function(){if(!0===$.lZ)return
$.lZ=!0
H.qK()},
qK:function(){var s,r,q,p,o,n,m,l
$.kS=Object.create(null)
$.kZ=Object.create(null)
H.qI()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nw.$1(o)
if(n!=null){m=H.qQ(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qI:function(){var s,r,q,p,o,n,m=C.J()
m=H.cw(C.K,H.cw(C.L,H.cw(C.u,H.cw(C.u,H.cw(C.M,H.cw(C.N,H.cw(C.O(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nq=new H.kV(p)
$.ni=new H.kW(o)
$.nw=new H.kX(n)},
cw:function(a,b){return a(b)||b},
oq:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a7("Illegal RegExp pattern ("+String(n)+")",a,null))},
nz:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qC:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nx:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m1:function(a,b,c){var s=H.qT(a,b,c)
return s},
qT:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nx(b),'g'),H.qC(c))},
cI:function cI(){},
cJ:function cJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jI:function jI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
di:function di(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
fK:function fK(a){this.a=a},
jf:function jf(a){this.a=a},
hy:function hy(a){this.a=a
this.b=null},
bA:function bA(){},
fr:function fr(){},
fk:function fk(){},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fd:function fd(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iM:function iM(a){this.a=a},
iP:function iP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d_:function d_(a,b){this.a=a
this.$ti=b},
eO:function eO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
eJ:function eJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cu:function(a){return a},
b7:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cy(b,a))},
pH:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.qB(a,b,c))
return b},
dd:function dd(){},
a1:function a1(){},
c7:function c7(){},
bG:function bG(){},
de:function de(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
df:function df(){},
bH:function bH(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
mB:function(a,b){var s=b.c
return s==null?b.c=H.lM(a,b.z,!0):s},
mA:function(a,b){var s=b.c
return s==null?b.c=H.e6(a,"mh",[b.z]):s},
mC:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mC(a.z)
return s===11||s===12},
oL:function(a){return a.cy},
lX:function(a){return H.lN(v.typeUniverse,a,!1)},
br:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.br(a,s,a0,a1)
if(r===s)return b
return H.n1(a,r,!0)
case 7:s=b.z
r=H.br(a,s,a0,a1)
if(r===s)return b
return H.lM(a,r,!0)
case 8:s=b.z
r=H.br(a,s,a0,a1)
if(r===s)return b
return H.n0(a,r,!0)
case 9:q=b.Q
p=H.ef(a,q,a0,a1)
if(p===q)return b
return H.e6(a,b.z,p)
case 10:o=b.z
n=H.br(a,o,a0,a1)
m=b.Q
l=H.ef(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lK(a,n,l)
case 11:k=b.z
j=H.br(a,k,a0,a1)
i=b.Q
h=H.qq(a,i,a0,a1)
if(j===k&&h===i)return b
return H.n_(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.ef(a,g,a0,a1)
o=b.z
n=H.br(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lL(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.i5("Attempted to substitute unexpected RTI kind "+c))}},
ef:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.br(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qr:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.br(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
qq:function(a,b,c,d){var s,r=b.a,q=H.ef(a,r,c,d),p=b.b,o=H.ef(a,p,c,d),n=b.c,m=H.qr(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.ha()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
qy:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.nr(s)
return a.$S()}return null},
nt:function(a,b){var s
if(H.mC(b))if(a instanceof H.bA){s=H.qy(a)
if(s!=null)return s}return H.b8(a)},
b8:function(a){var s
if(a instanceof P.P){s=a.$ti
return s!=null?s:H.lS(a)}if(Array.isArray(a))return H.kA(a)
return H.lS(J.eh(a))},
kA:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
V:function(a){var s=a.$ti
return s!=null?s:H.lS(a)},
lS:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pP(a,s)},
pP:function(a,b){var s=a instanceof H.bA?a.__proto__.__proto__.constructor:b,r=H.pp(v.typeUniverse,s.name)
b.$ccache=r
return r},
nr:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lN(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pO:function(a){var s,r,q,p=this
if(p===t.K)return H.ec(p,a,H.pT)
if(!H.b9(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.ec(p,a,H.pW)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.i_
else if(r===t.gR||r===t.H)q=H.pS
else if(r===t.N)q=H.pU
else q=r===t.cJ?H.kH:null
if(q!=null)return H.ec(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.qM)){p.r="$i"+s
return H.ec(p,a,H.pV)}}else if(s===7)return H.ec(p,a,H.pM)
return H.ec(p,a,H.pK)},
ec:function(a,b,c){a.b=c
return a.b(b)},
pN:function(a){var s,r=this,q=H.pJ
if(!H.b9(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.pG
else if(r===t.K)q=H.pF
else{s=H.ei(r)
if(s)q=H.pL}r.a=q
return r.a(a)},
lV:function(a){var s,r=a.y
if(!H.b9(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.lV(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pK:function(a){var s=this
if(a==null)return H.lV(s)
return H.R(v.typeUniverse,H.nt(a,s),null,s,null)},
pM:function(a){if(a==null)return!0
return this.z.b(a)},
pV:function(a){var s,r=this
if(a==null)return H.lV(r)
s=r.r
if(a instanceof P.P)return!!a[s]
return!!J.eh(a)[s]},
pJ:function(a){var s,r=this
if(a==null){s=H.ei(r)
if(s)return a}else if(r.b(a))return a
H.nc(a,r)},
pL:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.nc(a,s)},
nc:function(a,b){throw H.c(H.pf(H.mT(a,H.nt(a,b),H.aq(b,null))))},
mT:function(a,b,c){var s=P.iy(a),r=H.aq(b==null?H.b8(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
pf:function(a){return new H.e4("TypeError: "+a)},
ab:function(a,b){return new H.e4("TypeError: "+H.mT(a,null,b))},
pT:function(a){return a!=null},
pF:function(a){if(a!=null)return a
throw H.c(H.ab(a,"Object"))},
pW:function(a){return!0},
pG:function(a){return a},
kH:function(a){return!0===a||!1===a},
na:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ab(a,"bool"))},
rQ:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool"))},
rP:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool?"))},
rR:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"double"))},
rT:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double"))},
rS:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double?"))},
i_:function(a){return typeof a=="number"&&Math.floor(a)===a},
hZ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ab(a,"int"))},
rV:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int"))},
rU:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int?"))},
pS:function(a){return typeof a=="number"},
rW:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"num"))},
rY:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num"))},
rX:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num?"))},
pU:function(a){return typeof a=="string"},
kB:function(a){if(typeof a=="string")return a
throw H.c(H.ab(a,"String"))},
t_:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String"))},
rZ:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String?"))},
qm:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.aq(a[q],b)
return s},
nd:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
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
if(l===9){p=H.qs(a.z)
o=a.Q
return o.length!==0?p+("<"+H.qm(o,b)+">"):p}if(l===11)return H.nd(a,b,null)
if(l===12)return H.nd(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
qs:function(a){var s,r=H.nB(a)
if(r!=null)return r
s="minified:"+a
return s},
n2:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pp:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lN(a,b,!1)
else if(typeof m=="number"){s=m
r=H.e7(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.e6(a,b,q)
n[b]=o
return o}else return m},
pn:function(a,b){return H.n9(a.tR,b)},
pm:function(a,b){return H.n9(a.eT,b)},
lN:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mY(H.mW(a,null,b,c))
r.set(b,s)
return s},
hM:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mY(H.mW(a,b,c,!0))
q.set(c,r)
return r},
po:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lK(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bq:function(a,b){b.a=H.pN
b.b=H.pO
return b},
e7:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ax(null,null)
s.y=b
s.cy=c
r=H.bq(a,s)
a.eC.set(c,r)
return r},
n1:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.pk(a,b,r,c)
a.eC.set(r,s)
return s},
pk:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b9(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ax(null,null)
q.y=6
q.z=b
q.cy=c
return H.bq(a,q)},
lM:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.pj(a,b,r,c)
a.eC.set(r,s)
return s},
pj:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b9(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ei(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ei(q.z))return q
else return H.mB(a,b)}}p=new H.ax(null,null)
p.y=7
p.z=b
p.cy=c
return H.bq(a,p)},
n0:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.ph(a,b,r,c)
a.eC.set(r,s)
return s},
ph:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b9(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.e6(a,"mh",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.ax(null,null)
q.y=8
q.z=b
q.cy=c
return H.bq(a,q)},
pl:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ax(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bq(a,s)
a.eC.set(q,r)
return r},
hL:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
pg:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
e6:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hL(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ax(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bq(a,r)
a.eC.set(p,q)
return q},
lK:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hL(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ax(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bq(a,o)
a.eC.set(q,n)
return n},
n_:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hL(m)
if(j>0){s=l>0?",":""
r=H.hL(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.pg(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ax(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bq(a,o)
a.eC.set(q,r)
return r},
lL:function(a,b,c,d){var s,r=b.cy+("<"+H.hL(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.pi(a,b,c,r,d)
a.eC.set(r,s)
return s},
pi:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.br(a,b,r,0)
m=H.ef(a,c,r,0)
return H.lL(a,n,m,c!==m)}}l=new H.ax(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bq(a,l)},
mW:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mY:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.p9(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mX(a,r,h,g,!1)
else if(q===46)r=H.mX(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bp(a.u,a.e,g.pop()))
break
case 94:g.push(H.pl(a.u,g.pop()))
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
H.lJ(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.e6(p,n,o))
else{m=H.bp(p,a.e,n)
switch(m.y){case 11:g.push(H.lL(p,m,o,a.n))
break
default:g.push(H.lK(p,m,o))
break}}break
case 38:H.pa(a,g)
break
case 42:p=a.u
g.push(H.n1(p,H.bp(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.lM(p,H.bp(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.n0(p,H.bp(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.ha()
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
H.lJ(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.n_(p,H.bp(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.lJ(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.pc(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bp(a.u,a.e,i)},
p9:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mX:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.n2(s,o.z)[p]
if(n==null)H.i('No "'+p+'" in "'+H.oL(o)+'"')
d.push(H.hM(s,o,n))}else d.push(p)
return m},
pa:function(a,b){var s=b.pop()
if(0===s){b.push(H.e7(a.u,1,"0&"))
return}if(1===s){b.push(H.e7(a.u,4,"1&"))
return}throw H.c(P.i5("Unexpected extended operation "+H.x(s)))},
bp:function(a,b,c){if(typeof c=="string")return H.e6(a,c,a.sEA)
else if(typeof c=="number")return H.pb(a,b,c)
else return c},
lJ:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bp(a,b,c[s])},
pc:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bp(a,b,c[s])},
pb:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.i5("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.i5("Bad index "+c+" for "+b.i(0)))},
R:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b9(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b9(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.R(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.R(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.R(a,b.z,c,d,e)
if(r===6)return H.R(a,b.z,c,d,e)
return r!==7}if(r===6)return H.R(a,b.z,c,d,e)
if(p===6){s=H.mB(a,d)
return H.R(a,b,c,s,e)}if(r===8){if(!H.R(a,b.z,c,d,e))return!1
return H.R(a,H.mA(a,b),c,d,e)}if(r===7){s=H.R(a,t.P,c,d,e)
return s&&H.R(a,b.z,c,d,e)}if(p===8){if(H.R(a,b,c,d.z,e))return!0
return H.R(a,b,c,H.mA(a,d),e)}if(p===7){s=H.R(a,b,c,t.P,e)
return s||H.R(a,b,c,d.z,e)}if(q)return!1
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
if(!H.R(a,k,c,j,e)||!H.R(a,j,e,k,c))return!1}return H.ne(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.ne(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pR(a,b,c,d,e)}return!1},
ne:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.R(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.R(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.R(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.R(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.R(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pR:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.R(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.n2(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.R(a,H.hM(a,b,l[p]),c,r[p],e))return!1
return!0},
ei:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b9(a))if(r!==7)if(!(r===6&&H.ei(a.z)))s=r===8&&H.ei(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qM:function(a){var s
if(!H.b9(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b9:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
n9:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ax:function ax(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
ha:function ha(){this.c=this.b=this.a=null},
h6:function h6(){},
e4:function e4(a){this.a=a},
nB:function(a){return v.mangledGlobalNames[a]},
qR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
m_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kT:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lZ==null){H.qJ()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jM("Return interceptor for "+H.x(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.kc
if(o==null)o=$.kc=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.qO(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){o=$.kc
if(o==null)o=$.kc=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
on:function(a,b){if(a<0||a>4294967295)throw H.c(P.aa(a,0,4294967295,"length",null))
return J.oo(new Array(a),b)},
ls:function(a,b){if(a<0)throw H.c(P.bR("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.M("w<0>"))},
oo:function(a,b){return J.lt(H.b(a,b.M("w<0>")))},
lt:function(a){a.fixed$length=Array
return a},
op:function(a,b){return J.o0(a,b)},
eh:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cW.prototype
return J.eI.prototype}if(typeof a=="string")return J.bf.prototype
if(a==null)return J.cX.prototype
if(typeof a=="boolean")return J.eH.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.P)return a
return J.kT(a)},
cA:function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.P)return a
return J.kT(a)},
i0:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.P)return a
return J.kT(a)},
np:function(a){if(typeof a=="number")return J.c3.prototype
if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bL.prototype
return a},
qE:function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bL.prototype
return a},
aP:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.P)return a
return J.kT(a)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eh(a).q(a,b)},
m4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.np(a).K(a,b)},
m5:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nu(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cA(a).h(a,b)},
lj:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.nu(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.i0(a).m(a,b,c)},
nZ:function(a,b,c){return J.aP(a).hp(a,b,c)},
o_:function(a,b,c,d){return J.aP(a).hK(a,b,c,d)},
o0:function(a,b){return J.np(a).aq(a,b)},
i3:function(a,b){return J.i0(a).L(a,b)},
em:function(a,b){return J.i0(a).G(a,b)},
o1:function(a){return J.aP(a).gai(a)},
o2:function(a){return J.aP(a).gbE(a)},
o3:function(a){return J.aP(a).gdU(a)},
lk:function(a){return J.eh(a).gH(a)},
aC:function(a){return J.i0(a).gT(a)},
aR:function(a){return J.cA(a).gl(a)},
m6:function(a){return J.i0(a).iw(a)},
o4:function(a,b){return J.aP(a).iz(a,b)},
o5:function(a){return J.qE(a).iI(a)},
cC:function(a){return J.eh(a).i(a)},
a:function a(){},
eH:function eH(){},
cX:function cX(){},
bg:function bg(){},
f4:function f4(){},
bL:function bL(){},
aX:function aX(){},
w:function w(a){this.$ti=a},
iL:function iL(a){this.$ti=a},
ag:function ag(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c3:function c3(){},
cW:function cW(){},
eI:function eI(){},
bf:function bf(){}},P={
p0:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qu()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cx(new P.k8(q),1)).observe(s,{childList:true})
return new P.k7(q,s,r)}else if(self.setImmediate!=null)return P.qv()
return P.qw()},
p1:function(a){self.scheduleImmediate(H.cx(new P.k9(a),0))},
p2:function(a){self.setImmediate(H.cx(new P.ka(a),0))},
p3:function(a){P.lC(C.m,a)},
lC:function(a,b){var s=C.c.aa(a.a,1000)
return P.pd(s<0?0:s,b)},
mH:function(a,b){var s=C.c.aa(a.a,1000)
return P.pe(s<0?0:s,b)},
pd:function(a,b){var s=new P.e3()
s.f3(a,b)
return s},
pe:function(a,b){var s=new P.e3()
s.f4(a,b)
return s},
rN:function(a){return new P.cs(a,1)},
p6:function(){return C.a5},
p7:function(a){return new P.cs(a,3)},
pY:function(a,b){return new P.e0(a,b.M("e0<0>"))},
qj:function(){var s,r
for(s=$.cv;s!=null;s=$.cv){$.ee=null
r=s.b
$.cv=r
if(r==null)$.ed=null
s.a.$0()}},
qp:function(){$.lT=!0
try{P.qj()}finally{$.ee=null
$.lT=!1
if($.cv!=null)$.m3().$1(P.nj())}},
qn:function(a){var s=new P.fU(a),r=$.ed
if(r==null){$.cv=$.ed=s
if(!$.lT)$.m3().$1(P.nj())}else $.ed=r.b=s},
qo:function(a){var s,r,q,p=$.cv
if(p==null){P.qn(a)
$.ee=$.ed
return}s=new P.fU(a)
r=$.ee
if(r==null){s.b=p
$.cv=$.ee=s}else{q=r.b
s.b=q
$.ee=r.b=s
if(q==null)$.ed=s}},
mG:function(a,b){var s=$.aO
if(s===C.f)return P.lC(a,b)
return P.lC(a,s.hP(b))},
oU:function(a,b){var s=$.aO
if(s===C.f)return P.mH(a,b)
return P.mH(a,s.dQ(b,t.aF))},
nf:function(a,b,c,d,e){P.qo(new P.kK(d,e))},
qk:function(a,b,c,d){var s,r=$.aO
if(r===c)return d.$0()
$.aO=c
s=r
try{r=d.$0()
return r}finally{$.aO=s}},
ql:function(a,b,c,d,e){var s,r=$.aO
if(r===c)return d.$1(e)
$.aO=c
s=r
try{r=d.$1(e)
return r}finally{$.aO=s}},
k8:function k8(a){this.a=a},
k7:function k7(a,b,c){this.a=a
this.b=b
this.c=c},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
e3:function e3(){this.c=0},
kr:function kr(a,b){this.a=a
this.b=b},
kq:function kq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cs:function cs(a,b){this.a=a
this.b=b},
bN:function bN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e0:function e0(a,b){this.a=a
this.$ti=b},
fU:function fU(a){this.a=a
this.b=null},
ce:function ce(){},
fm:function fm(){},
ky:function ky(){},
kK:function kK(a,b){this.a=a
this.b=b},
kf:function kf(){},
kg:function kg(a,b){this.a=a
this.b=b},
kh:function kh(a,b,c){this.a=a
this.b=b
this.c=c},
or:function(a,b){return new H.Y(a.M("@<0>").bl(b).M("Y<1,2>"))},
os:function(a,b,c){return H.qD(a,new H.Y(b.M("@<0>").bl(c).M("Y<1,2>")))},
T:function(a,b){return new H.Y(a.M("@<0>").bl(b).M("Y<1,2>"))},
d0:function(a){return new P.dP(a.M("dP<0>"))},
lI:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
p8:function(a,b){var s=new P.dQ(a,b)
s.c=a.e
return s},
ol:function(a,b,c){var s,r
if(P.lU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.ak.push(a)
try{P.pX(a,s)}finally{if(0>=$.ak.length)return H.d($.ak,-1)
$.ak.pop()}r=P.mD(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
lr:function(a,b,c){var s,r
if(P.lU(a))return b+"..."+c
s=new P.a0(b)
$.ak.push(a)
try{r=s
r.a=P.mD(r.a,a,", ")}finally{if(0>=$.ak.length)return H.d($.ak,-1)
$.ak.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lU:function(a){var s,r
for(s=$.ak.length,r=0;r<s;++r)if(a===$.ak[r])return!0
return!1},
pX:function(a,b){var s,r,q,p,o,n,m,l=a.gT(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.v())return
s=H.x(l.gA(l))
b.push(s)
k+=s.length+2;++j}if(!l.v()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gA(l);++j
if(!l.v()){if(j<=4){b.push(H.x(p))
return}r=H.x(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gA(l);++j
for(;l.v();p=o,o=n){n=l.gA(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.x(p)
r=H.x(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
ot:function(a,b,c){var s=P.or(b,c)
a.G(0,new P.iQ(s,b,c))
return s},
mk:function(a,b){var s,r,q=P.d0(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
lx:function(a){var s,r={}
if(P.lU(a))return"{...}"
s=new P.a0("")
try{$.ak.push(a)
s.a+="{"
r.a=!0
J.em(a,new P.iU(r,s))
s.a+="}"}finally{if(0>=$.ak.length)return H.d($.ak,-1)
$.ak.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dP:function dP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ke:function ke(a){this.a=a
this.c=this.b=null},
dQ:function dQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cV:function cV(){},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(){},
j:function j(){},
d4:function d4(){},
iU:function iU(a,b){this.a=a
this.b=b},
M:function M(){},
hN:function hN(){},
d5:function d5(){},
cl:function cl(a,b){this.a=a
this.$ti=b},
dn:function dn(){},
dX:function dX(){},
dR:function dR(){},
e8:function e8(){},
ea:function ea(){},
oX:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oY(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oY:function(a,b,c,d){var s=a?$.nR():$.nQ()
if(s==null)return null
if(0===c&&d===b.length)return P.mN(s,b)
return P.mN(s,b.subarray(c,P.bk(c,d,b.length)))},
mN:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.al(r)}return null},
m8:function(a,b,c,d,e,f){if(C.c.bz(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
pE:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pD:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.cA(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jW:function jW(){},
jV:function jV(){},
ia:function ia(){},
ib:function ib(){},
et:function et(){},
ev:function ev(){},
iv:function iv(){},
iI:function iI(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
iH:function iH(a){this.a=a},
jT:function jT(){},
jX:function jX(){},
kw:function kw(a){this.b=0
this.c=a},
jU:function jU(a){this.a=a},
kv:function kv(a){this.a=a
this.b=16
this.c=0},
kY:function(a,b){var s=H.mu(a,b)
if(s!=null)return s
throw H.c(P.a7(a,null,null))},
oj:function(a){if(a instanceof H.bA)return a.i(0)
return"Instance of '"+H.dk(a)+"'"},
eP:function(a,b,c,d){var s,r=c?J.ls(a,d):J.on(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iR:function(a,b,c){var s,r=H.b([],c.M("w<0>"))
for(s=J.aC(a);s.v();)r.push(s.gA(s))
if(b)return r
return J.lt(r)},
ou:function(a,b,c){var s,r,q=J.ls(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
fo:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bk(b,c,r)
return H.mv(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.oI(a,b,P.bk(b,c,a.length))
return P.oR(a,b,c)},
oR:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.aa(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.aa(c,b,a.length,o,o))
r=J.aC(a)
for(q=0;q<b;++q)if(!r.v())throw H.c(P.aa(b,0,q,o,o))
p=[]
if(s)for(;r.v();)p.push(r.gA(r))
else for(q=b;q<c;++q){if(!r.v())throw H.c(P.aa(c,b,q,o,o))
p.push(r.gA(r))}return H.mv(p)},
oJ:function(a){return new H.eJ(a,H.oq(a,!1,!0,!1,!1,!1))},
mD:function(a,b,c){var s=J.aC(b)
if(!s.v())return a
if(c.length===0){do a+=H.x(s.gA(s))
while(s.v())}else{a+=H.x(s.gA(s))
for(;s.v();)a=a+c+H.x(s.gA(s))}return a},
mK:function(){var s=H.oz()
if(s!=null)return P.oW(s)
throw H.c(P.C("'Uri.base' is not supported"))},
ku:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nX().b
s=s.test(b)}else s=!1
if(s)return b
r=c.gi1().cs(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aw(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
og:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
oh:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ey:function(a){if(a>=10)return""+a
return"0"+a},
mc:function(a){return new P.bB(1000*a)},
iy:function(a){if(typeof a=="number"||H.kH(a)||null==a)return J.cC(a)
if(typeof a=="string")return JSON.stringify(a)
return P.oj(a)},
i5:function(a){return new P.ep(a)},
bR:function(a){return new P.aD(!1,null,null,a)},
fa:function(a,b){return new P.dl(null,null,!0,a,b,"Value not in range")},
aa:function(a,b,c,d,e){return new P.dl(b,c,!0,a,d,"Invalid value")},
bk:function(a,b,c){if(0>a||a>c)throw H.c(P.aa(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aa(b,a,c,"end",null))
return b}return c},
mw:function(a,b){if(a<0)throw H.c(P.aa(a,0,null,b,null))
return a},
O:function(a,b,c,d,e){var s=e==null?J.aR(b):e
return new P.eF(s,!0,a,c,"Index out of range")},
C:function(a){return new P.fM(a)},
jM:function(a){return new P.fJ(a)},
lB:function(a){return new P.cd(a)},
aG:function(a){return new P.eu(a)},
f:function(a){return new P.h7(a)},
a7:function(a,b,c){return new P.iE(a,b,c)},
m0:function(a){H.qR(a)},
oW:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.F(a5,4)^58)*3|C.a.F(a5,0)^100|C.a.F(a5,1)^97|C.a.F(a5,2)^116|C.a.F(a5,3)^97)>>>0
if(s===0)return P.mJ(a4<a4?C.a.u(a5,0,a4):a5,5,a3).geE()
else if(s===32)return P.mJ(C.a.u(a5,5,a4),0,a3).geE()}r=P.eP(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.ng(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.ng(a5,0,q,20,r)===20)r[7]=q
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.ag(a5,"..",n)))h=m>n+2&&C.a.ag(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.ag(a5,"file",0)){if(p<=0){if(!C.a.ag(a5,"/",n)){g="file:///"
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
a5=C.a.bc(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.ag(a5,"http",0)){if(i&&o+3===n&&C.a.ag(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.bc(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.ag(a5,"https",0)){if(i&&o+4===n&&C.a.ag(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.bc(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.u(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.hs(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.px(a5,0,q)
else{if(q===0)P.ct(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.py(a5,d,p-1):""
b=P.pu(a5,p,o,!1)
i=o+1
if(i<n){a=H.mu(C.a.u(a5,i,n),a3)
a0=P.pw(a==null?H.i(P.a7("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pv(a5,n,m,a3,j,b!=null)
a2=m<l?P.lP(a5,m+1,l,a3):a3
return new P.bO(j,c,b,a0,a1,a2,l<a4?P.pt(a5,l+1,a4):a3)},
mM:function(a){var s=t.N
return C.b.i7(H.b(a.split("&"),t.s),P.T(s,s),new P.jR(C.e))},
oV:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jO(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.Y(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.kY(C.a.u(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.kY(C.a.u(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
mL:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.jP(a),c=new P.jQ(d,a)
if(a.length<2)d.$1("address is too short")
s=H.b([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.Y(a,r)
if(n===58){if(r===b){++r
if(C.a.Y(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gaH(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.oV(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.b4(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
n3:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ct:function(a,b,c){throw H.c(P.a7(c,a,b))},
pw:function(a,b){if(a!=null&&a===P.n3(b))return null
return a},
pu:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.Y(a,b)===91){s=c-1
if(C.a.Y(a,s)!==93)P.ct(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.pr(a,r,s)
if(q<s){p=q+1
o=P.n8(a,C.a.ag(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mL(a,r,q)
return C.a.u(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.Y(a,n)===58){q=C.a.bG(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.n8(a,C.a.ag(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mL(a,b,q)
return"["+C.a.u(a,b,q)+o+"]"}return P.pA(a,b,c)},
pr:function(a,b,c){var s=C.a.bG(a,"%",b)
return s>=b&&s<c?s:c},
n8:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a0(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.Y(a,s)
if(p===37){o=P.lQ(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a0("")
m=i.a+=C.a.u(a,r,s)
if(n)o=C.a.u(a,s,s+3)
else if(o==="%")P.ct(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a0("")
if(r<s){i.a+=C.a.u(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.Y(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.u(a,r,s)
if(i==null){i=new P.a0("")
n=i}else n=i
n.a+=j
n.a+=P.lO(p)
s+=k
r=s}}}if(i==null)return C.a.u(a,b,c)
if(r<c)i.a+=C.a.u(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pA:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.Y(a,s)
if(o===37){n=P.lQ(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a0("")
l=C.a.u(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.u(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.x,m)
m=(C.x[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a0("")
if(r<s){q.a+=C.a.u(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.ct(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.Y(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.u(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a0("")
m=q}else m=q
m.a+=l
m.a+=P.lO(o)
s+=j
r=s}}}}if(q==null)return C.a.u(a,b,c)
if(r<c){l=C.a.u(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
px:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.n5(C.a.F(a,b)))P.ct(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.F(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.ct(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.u(a,b,c)
return P.pq(r?a.toLowerCase():a)},
pq:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
py:function(a,b,c){return P.e9(a,b,c,C.Z,!1)},
pv:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.e9(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a3(s,"/"))s="/"+s
return P.pz(s,e,f)},
pz:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a3(a,"/"))return P.pB(a,!s||c)
return P.pC(a)},
lP:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bR("Both query and queryParameters specified"))
return P.e9(a,b,c,C.k,!0)}if(d==null)return null
s=new P.a0("")
r.a=""
d.G(0,new P.ks(new P.kt(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
pt:function(a,b,c){return P.e9(a,b,c,C.k,!0)},
lQ:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.Y(a,b+1)
r=C.a.Y(a,n)
q=H.kU(s)
p=H.kU(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.b4(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aw(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.u(a,b,b+3).toUpperCase()
return null},
lO:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.F(k,a>>>4)
s[2]=C.a.F(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.hA(a,6*q)&63|r
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
e9:function(a,b,c,d,e){var s=P.n7(a,b,c,d,e)
return s==null?C.a.u(a,b,c):s},
n7:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.Y(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lQ(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ct(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.Y(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.lO(o)}}if(p==null){p=new P.a0("")
n=p}else n=p
n.a+=C.a.u(a,q,r)
n.a+=H.x(m)
if(typeof l!=="number")return H.ns(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.u(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
n6:function(a){if(C.a.a3(a,"."))return!0
return C.a.eh(a,"/.")!==-1},
pC:function(a){var s,r,q,p,o,n,m
if(!P.n6(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.W(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
pB:function(a,b){var s,r,q,p,o,n
if(!P.n6(a))return!b?P.n4(a):a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaH(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaH(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.n4(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
n4:function(a){var s,r,q,p=a.length
if(p>=2&&P.n5(C.a.F(a,0)))for(s=1;s<p;++s){r=C.a.F(a,s)
if(r===58)return C.a.u(a,0,s)+"%3A"+C.a.ak(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
ps:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.F(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bR("Invalid URL encoding"))}}return s},
lR:function(a,b,c,d,e){var s,r,q,p,o=b
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
if(r>127)throw H.c(P.bR("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bR("Truncated URI"))
p.push(P.ps(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cs(p)},
n5:function(a){var s=a|32
return 97<=s&&s<=122},
mJ:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.F(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a7(k,a,r))}}if(q<0&&r>b)throw H.c(P.a7(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.F(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaH(j)
if(p!==44||r!==n+7||!C.a.ag(a,"base64",n+1))throw H.c(P.a7("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.I.ih(0,a,m,s)
else{l=P.n7(a,m,s,C.k,!0)
if(l!=null)a=C.a.bc(a,m,s,l)}return new P.jN(a,j,c)},
pI:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.kE(h)
q=new P.kF()
p=new P.kG()
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
ng:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.nY()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.d(m,d)
q=m[d]
p=C.a.F(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.d(e,n)
e[n]=r}return d},
Z:function Z(a,b){this.a=a
this.b=b},
bB:function bB(a){this.a=a},
ir:function ir(){},
is:function is(){},
L:function L(){},
ep:function ep(a){this.a=a},
fC:function fC(){},
f_:function f_(){},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dl:function dl(a,b,c,d,e,f){var _=this
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
fM:function fM(a){this.a=a},
fJ:function fJ(a){this.a=a},
cd:function cd(a){this.a=a},
eu:function eu(a){this.a=a},
f2:function f2(){},
dt:function dt(){},
ew:function ew(a){this.a=a},
h7:function h7(a){this.a=a},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c},
h:function h(){},
eG:function eG(){},
ai:function ai(){},
P:function P(){},
a0:function a0(a){this.a=a},
jR:function jR(a){this.a=a},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
jQ:function jQ(a,b){this.a=a
this.b=b},
bO:function bO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kt:function kt(a,b){this.a=a
this.b=b},
ks:function ks(a){this.a=a},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function kE(a){this.a=a},
kF:function kF(){},
kG:function kG(){},
hs:function hs(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
h_:function h_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qA:function(a){var s,r,q,p
if(t.x.b(a)){s=J.o3(a)
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
qz:function(a){if(a instanceof P.e5)return{data:a.a,height:a.b,width:a.c}
return a},
bs:function(a){var s,r,q,p,o
if(a==null)return null
s=P.T(t.N,t.A)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
nb:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kH(a))return a
if(t.f.b(a))return P.nk(a)
if(t.E.b(a)){s=[]
J.em(a,new P.kC(s))
a=s}return a},
nk:function(a){var s={}
J.em(a,new P.kL(s))
return s},
kl:function kl(){},
kn:function kn(a,b){this.a=a
this.b=b},
ko:function ko(a,b){this.a=a
this.b=b},
e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},
kC:function kC(a){this.a=a},
kL:function kL(a){this.a=a},
km:function km(a,b){this.a=a
this.b=b},
eB:function eB(a,b){this.a=a
this.b=b},
iC:function iC(){},
iD:function iD(){},
hq:function hq(){},
af:function af(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aY:function aY(){},
eM:function eM(){},
b1:function b1(){},
f0:function f0(){},
jg:function jg(){},
cb:function cb(){},
fn:function fn(){},
o:function o(){},
b3:function b3(){},
fB:function fB(){},
he:function he(){},
hf:function hf(){},
hm:function hm(){},
hn:function hn(){},
hA:function hA(){},
hB:function hB(){},
hJ:function hJ(){},
hK:function hK(){},
i7:function i7(){},
er:function er(){},
i8:function i8(a){this.a=a},
es:function es(){},
bb:function bb(){},
f1:function f1(){},
fW:function fW(){},
ca:function ca(){},
fi:function fi(){},
hw:function hw(){},
hx:function hx(){}},W={
m7:function(){var s=document.createElement("a")
s.toString
return s},
ll:function(){var s=document.createElement("canvas")
s.toString
return s},
oi:function(a,b,c){var s=document.body
s.toString
s=new H.b6(new W.a6(C.p.ar(s,a,b,c)),new W.it(),t.ac.M("b6<j.E>"))
return t.h.a(s.gaW(s))},
iu:function(a){return"wheel"},
cP:function(a){var s,r,q="element tag unavailable"
try{s=J.aP(a)
s.geB(a)
q=s.geB(a)}catch(r){H.al(r)}return q},
ok:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.al(s)}return q},
kd:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mV:function(a,b,c,d){var s=W.kd(W.kd(W.kd(W.kd(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a3:function(a,b,c,d){var s=new W.dN(a,b,c==null?null:W.nh(new W.kb(c),t.aD),!1)
s.hH()
return s},
mU:function(a){var s=W.m7(),r=window
s=new W.cr(new W.ki(s,r.location))
s.eX(a)
return s},
p4:function(a,b,c,d){return!0},
p5:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
mZ:function(){var s=t.N,r=P.mk(C.z,s),q=H.b(["TEMPLATE"],t.s)
s=new W.hE(r,P.d0(s),P.d0(s),P.d0(s),null)
s.f2(null,new H.d6(C.z,new W.kp(),t.dv),q,null)
return s},
nh:function(a,b){var s=$.aO
if(s===C.f)return a
return s.dQ(a,b)},
v:function v(){},
i4:function i4(){},
en:function en(){},
eo:function eo(){},
bS:function bS(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
cF:function cF(){},
aE:function aE(){},
ij:function ij(){},
J:function J(){},
cL:function cL(){},
ik:function ik(){},
as:function as(){},
aU:function aU(){},
il:function il(){},
im:function im(){},
io:function io(){},
bd:function bd(){},
ip:function ip(){},
cM:function cM(){},
cN:function cN(){},
ez:function ez(){},
iq:function iq(){},
fX:function fX(a,b){this.a=a
this.b=b},
E:function E(){},
it:function it(){},
l:function l(){},
e:function e(){},
an:function an(){},
bZ:function bZ(){},
eA:function eA(){},
eC:function eC(){},
aH:function aH(){},
iG:function iG(){},
bD:function bD(){},
bE:function bE(){},
c0:function c0(){},
c2:function c2(){},
bF:function bF(){},
iS:function iS(){},
j8:function j8(){},
c4:function c4(){},
eS:function eS(){},
j9:function j9(a){this.a=a},
eT:function eT(){},
ja:function ja(a){this.a=a},
aI:function aI(){},
eU:function eU(){},
ao:function ao(){},
a6:function a6(a){this.a=a},
t:function t(){},
dg:function dg(){},
aK:function aK(){},
f6:function f6(){},
fc:function fc(){},
jn:function jn(a){this.a=a},
fe:function fe(){},
ay:function ay(){},
fg:function fg(){},
aM:function aM(){},
fh:function fh(){},
aN:function aN(){},
fl:function fl(){},
jw:function jw(a){this.a=a},
ap:function ap(){},
bm:function bm(){},
du:function du(){},
fp:function fp(){},
fq:function fq(){},
cg:function cg(){},
az:function az(){},
aj:function aj(){},
fs:function fs(){},
ft:function ft(){},
jC:function jC(){},
aA:function aA(){},
bK:function bK(){},
fA:function fA(){},
jH:function jH(){},
b5:function b5(){},
jS:function jS(){},
fQ:function fQ(){},
bo:function bo(){},
cp:function cp(){},
cq:function cq(){},
fY:function fY(){},
dM:function dM(){},
hb:function hb(){},
dS:function dS(){},
hv:function hv(){},
hC:function hC(){},
fV:function fV(){},
h4:function h4(a){this.a=a},
lq:function lq(a,b){this.a=a
this.$ti=b},
dN:function dN(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
kb:function kb(a){this.a=a},
lH:function lH(a){this.$ti=a},
cr:function cr(a){this.a=a},
N:function N(){},
dh:function dh(a){this.a=a},
jd:function jd(a){this.a=a},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
dY:function dY(){},
kj:function kj(){},
kk:function kk(){},
hE:function hE(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kp:function kp(){},
hD:function hD(){},
cS:function cS(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ki:function ki(a,b){this.a=a
this.b=b},
hO:function hO(a){this.a=a
this.b=0},
kx:function kx(a){this.a=a},
fZ:function fZ(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h8:function h8(){},
h9:function h9(){},
hc:function hc(){},
hd:function hd(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
ho:function ho(){},
hp:function hp(){},
hr:function hr(){},
dZ:function dZ(){},
e_:function e_(){},
ht:function ht(){},
hu:function hu(){},
hz:function hz(){},
hF:function hF(){},
hG:function hG(){},
e1:function e1(){},
e2:function e2(){},
hH:function hH(){},
hI:function hI(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){}},K={
Q:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.f("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.F(a,0)
r=C.a.F(b,0)
if(s>r){q=r
r=s
s=q}return new K.f9(s,r)},
aS:function aS(){},
cU:function cU(){},
ae:function ae(a){this.a=a},
f9:function f9(a,b){this.a=a
this.b=b},
u:function u(a){this.a=a}},L={
jF:function(){var s=t.N
return new L.jE(P.T(s,t.dl),P.T(s,t.f7),P.d0(s))},
fj:function fj(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fy:function fy(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a,b){this.b=a
this.c=b},
jE:function jE(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dw:function dw(a,b){this.b=a
this.c=!1
this.a=b}},O={
lm:function(a){return new O.ad(H.b([],a.M("w<0>")),a.M("ad<0>"))},
ad:function ad(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
dc:function dc(a){this.a=a
this.b=null},
ml:function(){var s=O.lm(t.gc),r=new O.d8(s)
s.bg(r.gfz(),r.gfB())
s=r.gen()
s.gt().n(0,r.gdr())
s.gem().n(0,r.gaK())
return r},
eR:function(a,b){return new O.da(new V.X(0,0,0),a,b,new A.ar(!1,!1,!1))},
d8:function d8(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
j0:function j0(a,b){this.a=a
this.b=b},
j1:function j1(){},
j2:function j2(a,b){this.a=a
this.b=b},
j3:function j3(){},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(){},
j6:function j6(a,b){this.a=a
this.b=b},
j7:function j7(){},
iV:function iV(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
d9:function d9(){},
iW:function iW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
da:function da(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iY:function iY(a){this.b=a},
iZ:function iZ(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
j_:function j_(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
dr:function dr(a){var _=this
_.c=_.a=null
_.d=a
_.e=null},
cf:function cf(){}},E={
lp:function(){var s=O.lm(t.m),r=new E.bC(s)
s.bg(r.gii(),r.gil())
r.sab(0,null)
return r},
mR:function(){var s=window.navigator.vendor
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
mS:function(){var s=window.navigator.appVersion
s.toString
if(C.a.C(s,"Win"))return C.a1
if(C.a.C(s,"Mac"))return C.A
if(C.a.C(s,"Linux"))return C.a2
return C.a3},
oK:function(a,b){var s
Date.now()
s=t.fA
s=new E.jj(a,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1),new O.dc(H.b([],s)),new O.dc(H.b([],s)),new O.dc(H.b([],s)),H.b([null],t.bc),P.T(t.N,t.fg))
s.eW(a,b)
return s},
oT:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.mF(a,!0,!0,!0,!1)
s=W.ll()
r=s.style
r.width="100%"
r.height="100%"
J.o2(a).n(0,s)
return E.mF(s,!0,!0,!0,!1)},
mF:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.A,l=t.gW.a(C.i.d2(a,"webgl2",P.os(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.oK(l,a)
H.hZ(l.getParameter(3379))
m=H.hZ(l.getParameter(34076))
r=H.b([],t.g9)
q=$.iw
p=new X.fO(a,r,(q==null?$.iw=new E.h5(E.mR(),E.mS()):q).a===C.q?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.a3(o,"contextmenu",p.gfJ(),!1))
r.push(W.a3(a,"focus",p.gfP(),!1))
r.push(W.a3(a,"blur",p.gfD(),!1))
r.push(W.a3(o,"keyup",p.gfT(),!1))
r.push(W.a3(o,"keydown",p.gfR(),!1))
r.push(W.a3(a,"mousedown",p.gfX(),!1))
r.push(W.a3(a,"mouseup",p.gh0(),!1))
r.push(W.a3(a,n,p.gfZ(),!1))
W.iu(a)
W.iu(a)
r.push(W.a3(a,W.iu(a),p.gh2(),!1))
r.push(W.a3(o,n,p.gfL(),!1))
r.push(W.a3(o,"mouseup",p.gfN(),!1))
r.push(W.a3(o,"pointerlockchange",p.gh4(),!1))
r.push(W.a3(a,"touchstart",p.ghk(),!1))
r.push(W.a3(a,"touchend",p.ghg(),!1))
r.push(W.a3(a,"touchmove",p.ghi(),!1))
m=new E.fx(a,s,new T.jz(l,m),p,new P.Z(Date.now(),!1))
m.dt()
return m},
ic:function ic(){},
bC:function bC(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bU:function bU(a){this.b=a},
c8:function c8(a){this.b=a},
h5:function h5(a,b){this.a=a
this.b=b},
jj:function jj(a,b,c,d,e,f,g,h){var _=this
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
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
fx:function fx(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.Q=null
_.cx=!1
_.cy=e
_.db=0},
jB:function jB(a){this.a=a}},Z={
lG:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cu(c)),35044)
a.bindBuffer(b,null)
return new Z.fR(b,s)},
aB:function(a){return new Z.bn(a)},
fR:function fR(a,b){this.a=a
this.b=b},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
fS:function fS(a){this.a=a},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
bn:function bn(a){this.a=a}},D={
G:function(){return new D.bY()},
ie:function ie(){},
bY:function bY(){var _=this
_.c=_.b=_.a=null
_.d=0},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
S:function S(){},
aV:function aV(){},
aW:function aW(){},
z:function z(a,b,c){this.c=a
this.d=b
this.e=c},
bX:function bX(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cZ:function cZ(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={cE:function cE(a,b){this.a=a
this.b=b},eL:function eL(a,b){this.a=a
this.b=b},iN:function iN(a,b){this.c=a
this.d=b},d3:function d3(a,b,c){this.x=a
this.c=b
this.d=c},iT:function iT(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},c5:function c5(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},jb:function jb(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},c6:function c6(a,b,c){this.x=a
this.c=b
this.d=c},f8:function f8(){},dv:function dv(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jG:function jG(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fO:function fO(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
mg:function(a){var s=new V.am(0,0,0,1),r=V.lA()
return new X.iF(s,r)},
ly:function(a){var s,r,q=new X.f3(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gt().n(0,q.gf5())
q.a4(new D.z("mover",s,q.b))}r=q.c
$.F().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.a4(new D.z("fov",r,1.0471975511965976))}r=q.d
$.F().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.a4(new D.z("near",r,0.1))}r=q.e
$.F().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.a4(new D.z("far",r,2000))}return q},
i9:function i9(a,b,c){var _=this
_.d=_.c=_.b=_.a=512
_.f=!1
_.x=_.r=1
_.Q=_.z=_.y=null
_.ch=a
_.cx=b
_.cy=!0
_.db=2000
_.dx=!0
_.dy=c
_.fr=null},
iF:function iF(a,b){this.a=a
this.r=b
this.x=null},
iJ:function iJ(){this.b=null},
f3:function f3(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jy:function jy(){}},V={
ig:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.am(s,r,q,1)},
i1:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
li:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bz(a-b,s)
return(a<0?a+s:a)+b},
A:function(a,b,c){$.F().toString
return C.a.au(C.d.cZ(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cz:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.F().toString
n=C.a.au(C.d.cZ(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.au(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
ej:function(a){return C.d.iF(Math.pow(2,C.d.cH(Math.log(a)/Math.log(2))))},
ah:function(){var s=$.ms
return s==null?$.ms=V.b0(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
b0:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mr:function(a,b,c){return V.b0(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mo:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.b0(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
mp:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.b0(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
mq:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.b0(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)},
mn:function(a,b,c){var s=c.D(),r=b.aP(s).D(),q=s.aP(r),p=new V.D(a.a,a.b,a.c)
return V.b0(r.a,q.a,s.a,r.bf(0).ad(p),r.b,q.b,s.b,q.bf(0).ad(p),r.c,q.c,s.c,s.bf(0).ad(p),0,0,0,1)},
lz:function(){var s=$.b2
return s==null?$.b2=new V.K(0,0,0):s},
lA:function(){var s=$.mz
return s==null?$.mz=V.my(0,0,1,1):s},
my:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.fb(a,b,c,d)},
dK:function(){var s=$.mQ
return s==null?$.mQ=new V.D(0,0,0):s},
p_:function(){var s=$.jY
return s==null?$.jY=new V.D(-1,0,0):s},
lE:function(){var s=$.jZ
return s==null?$.jZ=new V.D(0,1,0):s},
lF:function(){var s=$.k_
return s==null?$.k_=new V.D(0,0,1):s},
oZ:function(a,b,c){return new V.D(a,b,c)},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ix:function ix(){},
db:function db(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bi:function bi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
U:function U(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fb:function fb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
qS:function(a){P.oU(C.S,new V.le(a))},
oM:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a3(n,"scroll",new V.jt(s),!1)
return new V.jr(o)},
aF:function aF(){},
le:function le(a){this.a=a},
ex:function ex(a,b){var _=this
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
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jr:function jr(a){this.a=a
this.b=null},
jt:function jt(a){this.a=a},
js:function js(a){this.a=a},
ju:function ju(a){this.a=a},
qP:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2="testCanvas",b3=null,b4=34067,b5="modifiers",b6=V.oM("Test 027"),b7=W.ll()
b7.className="pageLargeCanvas"
b7.id=b2
b6.a.appendChild(b7).toString
s=t.s
b6.dI(H.b(["Test of a back buffer target for rendering to a texture. ","That back buffer texture is applied to a box."],s))
b6.hJ(H.b(["shapes"],s))
b6.dI(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(b2)
if(r==null)H.i(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.oT(r,!0,!0,!0,!1)
p=U.mi()
o=new U.dm(V.ah())
o.seG(0)
o.sew(0,0)
o.seA(0)
n=o.d
$.F().toString
if(!(Math.abs(n-0.1)<1e-9)){o.d=0.1
o.N(new D.z("deltaYaw",n,0.1))}n=o.e
$.F().toString
if(!(Math.abs(n-0.21)<1e-9)){o.e=0.21
o.N(new D.z("deltaPitch",n,0.21))}n=o.f
$.F().toString
if(!(Math.abs(n-0.32)<1e-9)){o.f=0.32
o.N(new D.z("deltaRoll",n,0.32))}p.n(0,o)
p.n(0,U.ln(V.mr(0,0,5)))
m=X.ly(p)
o=T.mE(b3)
l=new X.i9(o,new V.am(0,0,0,1),V.lA())
l.saD(0,512)
l.say(0,512)
k=new V.am(0,0,0,1)
if(!l.cx.q(0,k)){j=l.cx
l.cx=k
l.a4(new D.z("color",j,k))}if(l.cy){l.cy=!1
l.a4(new D.z("clearColor",!0,!1))}n=l.db
$.F().toString
if(!(Math.abs(n-2000)<1e-9)){l.db=2000
l.a4(new D.z("depth",n,2000))}n=l.r
$.F().toString
if(!(Math.abs(n-1)<1e-9)){l.r=1
l.a4(new D.z("autoResizeScalarX",n,1))}n=l.x
$.F().toString
if(!(Math.abs(n-1)<1e-9)){l.x=1
l.a4(new D.z("autoResizeScalarY",n,1))}i=V.lA()
if(!l.dy.q(0,i)){j=l.dy
l.dy=i
l.a4(new D.z("region",j,i))}n=q.f
h=n.a
g=h.createTexture()
g.toString
h.bindTexture(b4,g)
h.texParameteri(b4,10242,10497)
h.texParameteri(b4,10243,10497)
h.texParameteri(b4,10241,9729)
h.texParameteri(b4,10240,9729)
h.bindTexture(b4,b3)
f=new T.fw(g)
n.b1(f,g,"../resources/maskonaive/posx.jpg",34069,!1,!1)
n.b1(f,g,"../resources/maskonaive/negx.jpg",34070,!1,!1)
n.b1(f,g,"../resources/maskonaive/posy.jpg",34071,!1,!1)
n.b1(f,g,"../resources/maskonaive/negy.jpg",34072,!1,!1)
n.b1(f,g,"../resources/maskonaive/posz.jpg",34073,!1,!1)
n.b1(f,g,"../resources/maskonaive/negz.jpg",34074,!1,!1)
g=E.lp()
e=new M.cK(g)
d=F.jp()
n=d.gV()
h=new V.D(-1,-1,1).D()
c=n.bD(new V.av(1,2,4,6),V.ig(255,0,0),new V.K(-1,-1,0),new V.U(0,1),h,b3)
h=d.gV()
n=new V.D(1,-1,1).D()
b=h.bD(new V.av(0,3,4,6),V.ig(0,0,255),new V.K(1,-1,0),new V.U(1,1),n,b3)
n=d.gV()
h=new V.D(1,1,1).D()
a=n.bD(new V.av(0,2,5,6),V.ig(0,128,0),new V.K(1,1,0),new V.U(1,0),h,b3)
h=d.gV()
n=$.a9
if(n==null)n=$.a9=new V.U(0,0)
a0=new V.D(-1,1,1).D()
a1=h.bD(new V.av(0,2,4,7),V.ig(255,255,0),new V.K(-1,1,0),n,a0,b3)
d.gU().dG(H.b([c,b,a,a1],t.k))
d.ax()
g.sab(0,d)
e.sb6(b3)
e.sbx(0,b3)
e.sbd(b3)
n=new O.dr(new V.X(1,1,1))
j=n.c
n.c=f
f.gt().n(0,n.gaK())
n.X(new D.z("boxTexture",j,n.c))
e.sbd(n)
e.sbx(0,l)
e.sb6(m)
a2=E.lp()
a2.sab(0,F.nA())
a3=O.ml()
n=a3.gen()
a4=V.lE()
h=U.ln(V.mn(V.lz(),a4,new V.D(0,-1,-1)))
g=new V.X(1,1,1)
a0=new D.bX(new V.X(1,1,1),V.lF(),V.lE(),V.p_())
j=a0.a
a0.a=h
h.gt().n(0,a0.geZ())
a0.aJ(new D.z("mover",j,a0.a))
if(!a0.b.q(0,g)){j=a0.b
a0.b=g
a0.aJ(new D.z("color",j,g))}n.n(0,a0)
n=a3.gdK()
n.sb8(0,new V.X(0,0,1))
n=a3.gdV()
n.sb8(0,new V.X(0,1,0))
n=a3.gbT()
n.sb8(0,new V.X(1,0,0))
n=a3.gbT()
n.cf(new A.ar(!0,n.c.b,!1))
n.dv(10)
a5=M.mf()
a5.sb6(m)
a5.sbd(a3)
a5.sbx(0,l)
a5.e.n(0,a2)
a6=U.mi()
n=q.x
h=U.ii()
g=U.ii()
a0=$.bM
if(a0==null)a0=$.bM=new V.a5(0,0)
a0=new U.dI(h,g,new X.a8(!1,!1,!1),a0,V.ah())
h.sd1(0,!0)
h.scN(6.283185307179586)
h.scP(0)
h.sa1(0,0)
h.scO(100)
h.sa2(0)
h.scu(0.5)
a7=a0.gb2()
h.gt().n(0,a7)
g.sd1(0,!0)
g.scN(6.283185307179586)
g.scP(0)
g.sa1(0,0)
g.scO(100)
g.sa2(0)
g.scu(0.5)
g.gt().n(0,a7)
h=new X.a8(!1,!1,!1)
if(!a0.d.q(0,h)){j=a0.d
a0.d=h
a0.N(new D.z(b5,j,h))}a0.bq(n)
a6.n(0,a0)
U.ii()
if($.bM==null)$.bM=new V.a5(0,0)
V.ah()
h=U.ii()
g=$.bM
if(g==null)g=$.bM=new V.a5(0,0)
g=new U.dH(h,new X.a8(!1,!1,!1),g,V.ah())
h.sd1(0,!0)
h.scN(6.283185307179586)
h.scP(0)
h.sa1(0,0)
h.scO(100)
h.sa2(0)
h.scu(0.2)
h.gt().n(0,g.gb2())
h=new X.a8(!0,!1,!1)
if(!g.c.q(0,h)){j=g.c
g.c=h
g.N(new D.z(b5,j,h))}g.bq(n)
a6.n(0,g)
h=new X.a8(!1,!1,!1)
g=new U.dJ(h,V.ah())
a0=new X.a8(!1,!1,!1)
if(!h.q(0,a0)){g.b=a0
g.N(new D.z(b5,h,a0))}g.bq(n)
a6.n(0,g)
a6.n(0,U.ln(V.mr(0,0,5)))
a8=X.ly(a6)
a9=E.lp()
a9.sab(0,F.kM(1,b3,b3,1))
b0=O.ml()
n=b0.gdY()
h=n.c
if(!h.b)n.cf(new A.ar(h.a,!0,!1))
h=n.d
if(h!==o){if(h!=null)h.gt().O(0,n.gaK())
j=n.d
n.d=o
o.gt().n(0,n.gaK())
n.a.X(new D.z(n.b+".texture2D",j,n.d))}b1=M.mf()
b1.sb6(a8)
b1.sbd(b0)
b1.e.n(0,a9)
o=t.ba
n=H.b([e,a5,b1],o)
o=new M.cG(H.b([],o))
o.bg(o.ghc(),o.ghe())
o.ac(0,n)
n=q.d
if(n!==o){if(n!=null)n.gt().O(0,q.gd8())
q.d=o
o.gt().n(0,q.gd8())
q.d9()}r=s.getElementById("shapes")
if(r==null)H.i(P.f("Failed to find shapes for RadioGroup"))
s=new V.jh("shapes",!0,r)
s.dE(0,"Cube",new V.l3(a9),!0)
s.aE(0,"Cuboid",new V.l4(a9))
s.aE(0,"Cylinder",new V.l5(a9))
s.aE(0,"Cone",new V.l6(a9))
s.aE(0,"Cylindrical",new V.l7(a9))
s.aE(0,"Sphere",new V.l8(a9))
s.aE(0,"Spherical",new V.l9(a9))
s.aE(0,"Toroid",new V.la(a9))
s.aE(0,"Knot",new V.lb(a9))
s=q.Q
if(s==null)s=q.Q=D.G()
o=s.b
s=o==null?s.b=H.b([],t.a):o
s.push(new V.lc(b6,b0))
V.qS(q)},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
l2:function l2(){},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
l1:function l1(){},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
l0:function l0(){},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
lc:function lc(a,b){this.a=a
this.b=b}},U={
ii:function(){return new U.ih()},
ln:function(a){var s=V.ah(),r=new U.cH(s)
if(!s.q(0,a))r.a=a
return r},
mi:function(){var s=new U.c_(V.ah(),H.b([],t.eJ))
s.bg(s.gf0(),s.gh8())
return s},
ih:function ih(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cH:function cH(a){this.a=a
this.b=null},
c_:function c_(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a_:function a_(){},
dm:function dm(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0
_.x=a
_.y=null},
dH:function dH(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
dI:function dI(a,b,c,d,e){var _=this
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
dJ:function dJ(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={
mf:function(){var s,r=O.lm(t.m),q=new M.cQ(r)
r.bg(q.gfF(),q.gfH())
s=X.mg(null)
q.sb6(null)
q.sbx(0,s)
q.sbd(null)
return q},
cG:function cG(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},
cK:function cK(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},
cQ:function cQ(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
ow:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gaC(a5)+a6.gaC(a6)+a7.gaC(a7)+a8.gaC(a8)+a9.gaC(a9)+b0.gaC(b0)+b1.gaC(b1)+b2.gaC(b2)+b3.gaC(b3)+"_"
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
b=$.aQ()
if(h){s=$.bv()
b=new Z.bn(b.a|s.a)}if(g)b=new Z.bn(b.a|$.bu().a)
if(f)b=new Z.bn(b.a|$.bw().a)
if(e)b=new Z.bn(b.a|$.bt().a)
return new A.iX(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
kI:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kJ:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.kI(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.i2(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
q2:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kI(b,r,"emission")
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
pZ:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kJ(b,r,"ambient")
b.a+="\n"},
q0:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kJ(b,r,"diffuse")
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
q3:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kJ(b,r,"invDiffuse")
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
q9:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kJ(b,r,"specular")
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
q5:function(a,b){var s,r,q
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
q7:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kI(b,r,"reflect")
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
q8:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kI(b,r,"refract")
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
q_:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.i2(r)
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
q1:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.i2(r)
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
q6:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.i2(r)
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
qa:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.i2(r)
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
if(m){s=$.iw
if(s==null)s=$.iw=new E.h5(E.mR(),E.mS())
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
q4:function(a,b){var s,r
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
qb:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.a0(""),j=""+"precision mediump float;\n"
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
A.q2(a,k)
A.pZ(a,k)
A.q0(a,k)
A.q3(a,k)
A.q9(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.q7(a,k)
A.q8(a,k)}A.q5(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.q_(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.q1(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.q6(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.qa(a,p[n],k)
A.q4(a,k)}p=k.a+="// === Main ===\n"
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
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ak(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ak(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ak(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ak(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}j=a.a
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
qc:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.b9+"];\n"
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
qe:function(a,b){var s
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
qd:function(a,b){var s
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
qg:function(a,b){var s,r
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
qh:function(a,b){var s,r
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
qf:function(a,b){var s
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
qi:function(a,b){var s
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
i2:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ak(a,1)},
lD:function(a,b,c,d,e){var s=new A.fD(H.b([],t.t),a,c,e)
s.f=d
s.e=P.eP(d,0,!1,t.S)
return s},
eq:function eq(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a){this.a=a},
ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.iW=_.eb=_.ea=_.iV=_.e9=_.e8=_.e7=_.iU=_.e6=_.e5=_.e4=_.iT=_.e3=_.e2=_.iS=_.e1=_.e0=_.e_=_.ba=_.b9=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cw=c
_.cz=d
_.cA=e
_.cB=f
_.cC=g
_.cD=h
_.cE=i
_.cF=j
_.iZ=_.iY=_.iX=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
ba:function ba(a,b){this.a=a
this.b=b},
bc:function bc(a,b){this.a=a
this.b=b},
bj:function bj(a,b){this.a=a
this.b=b},
bl:function bl(a,b){this.a=a
this.b=b},
iX:function iX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.b9=b5
_.ba=b6
_.e_=b7},
dA:function dA(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dB:function dB(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dD:function dD(a,b,c,d,e,f,g,h,i,j){var _=this
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
dG:function dG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cc:function cc(){},
ds:function ds(a,b){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
a2:function a2(){},
jL:function jL(a){this.a=a},
ci:function ci(a,b,c){this.a=a
this.c=b
this.d=c},
fF:function fF(a,b,c){this.a=a
this.c=b
this.d=c},
fG:function fG(a,b,c){this.a=a
this.c=b
this.d=c},
fH:function fH(a,b,c){this.a=a
this.c=b
this.d=c},
fD:function fD(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
dx:function dx(a,b,c){this.a=a
this.c=b
this.d=c},
fE:function fE(a,b,c){this.a=a
this.c=b
this.d=c},
dy:function dy(a,b,c){this.a=a
this.c=b
this.d=c},
dz:function dz(a,b,c){this.a=a
this.c=b
this.d=c},
fI:function fI(a,b,c){this.a=a
this.c=b
this.d=c},
dC:function dC(a,b,c){this.a=a
this.c=b
this.d=c},
cj:function cj(a,b,c){this.a=a
this.c=b
this.d=c},
dE:function dE(a,b,c){this.a=a
this.c=b
this.d=c},
dF:function dF(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kM:function(a,b,c,d){var s=F.jp()
F.eb(s,b,c,d,a,1,0,0,1)
F.eb(s,b,c,d,a,0,1,0,3)
F.eb(s,b,c,d,a,0,0,1,2)
F.eb(s,b,c,d,a,-1,0,0,0)
F.eb(s,b,c,d,a,0,-1,0,0)
F.eb(s,b,c,d,a,0,0,-1,3)
s.ax()
return s},
kD:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
eb:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.D(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.D(s+a4,r+a2,q+a3)
o=new V.D(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.D(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.kD(h)
j=F.kD(g)
a.bt(F.m2(a0,a1,new F.kz(i,F.kD(f),F.kD(e),j,k,c),b))},
no:function(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a1<3)throw H.c(P.f("Must have 3 or more sizes for a disk."))
s=F.jp()
r=b?-1:1
q=-6.283185307179586/a1
p=t.k
o=H.b([],p)
n=s.gV()
m=new V.D(0,0,r).D()
o.push(n.hM(new V.av(a,-1,-1,-1),new V.am(1,1,1,1),new V.K(0,0,c),new V.D(0,0,r),new V.U(0.5,0.5),m))
for(l=0;l<=a1;++l){k=q*l
j=r*Math.sin(k)
i=Math.cos(k)
h=a0.$1(l/a1)
n=s.a
if(n==null)n=s.a=new F.y(s,H.b([],p))
m=new V.D(j,i,r).D()
if(j<0)g=0
else g=j>1?1:j
f=i<0
if(f)e=0
else e=i>1?1:i
if(f)f=0
else f=i>1?1:i
d=F.fP(new V.av(a,-1,-1,-1),null,new V.am(g,e,f,1),new V.K(j*h,i*h,c),new V.D(0,0,r),new V.U(j*0.5+0.5,i*0.5+0.5),m,null,0)
n.n(0,d)
o.push(d)}s.gU().dG(o)
return s},
nl:function(a,b,c,d){return F.nm(!0,a,b,new F.kN(1,d),c)},
nm:function(a,b,c,d,e){var s
if(e<3)throw H.c(P.f("Must have 3 or more sizes for a cylindrical shape."))
if(c<1)throw H.c(P.f("Must have 1 or more divisionss for a cylindrical shape."))
s=F.m2(c,e,new F.kP(d),null)
s.ax()
s.cn()
if(b)s.bt(F.no(3,!1,1,new F.kQ(d),e))
s.bt(F.no(1,!0,-1,new F.kR(d),e))
return s},
ny:function(a,b,c){var s=F.kM(a,null,new F.lf(1,b==null?new F.lg():b),c)
s.cn()
return s},
nA:function(){return F.nn(15,30,0.5,1,new F.lh())},
qN:function(){return F.nn(12,120,0.3,1,new F.l_(3,2))},
nn:function(a,b,c,d,e){var s=F.m2(a,b,new F.kO(e,d,b,c),null)
s.ax()
s.cn()
return s},
m2:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.jp()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.y(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.fP(d,d,new V.am(m,0,0,1),d,d,new V.U(o,1),d,d,0)
n.n(0,l)
c.$3(l,o,0)
q.push(l.ct(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.y(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.fP(d,d,new V.am(g,f,e,1),d,d,new V.U(o,j),d,d,0)
h.n(0,l)
c.$3(l,o,k)
q.push(l.ct(a0))}}s.gU().hL(a+1,b+1,q)
return s},
jp:function(){return new F.jo()},
fP:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cm()
h=$.nS()
s=$.aQ()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bv().a)!==0)q.r=e
if((r&$.bu().a)!==0)q.x=b
if((r&$.bw().a)!==0)q.y=f
if((r&$.bQ().a)!==0)q.z=g
if((r&$.nT().a)!==0)q.Q=c
if((r&$.cB().a)!==0)q.ch=i
if((r&$.bt().a)!==0)q.cx=a
return q},
kz:function kz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kN:function kN(a,b){this.a=a
this.b=b},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
lg:function lg(){},
lf:function lf(a,b){this.a=a
this.b=b},
lh:function lh(){},
l_:function l_(a,b){this.a=a
this.b=b},
kO:function kO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
at:function at(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iB:function iB(){},
jv:function jv(){},
eN:function eN(){this.b=this.a=null},
iO:function iO(){},
jK:function jK(){},
f7:function f7(){this.a=null},
jo:function jo(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
jq:function jq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dp:function dp(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
bI:function bI(a,b){this.a=a
this.b=b},
cm:function cm(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
k6:function k6(a){this.a=a},
k5:function k5(a){this.a=a},
y:function y(a,b){this.a=a
this.b=!1
this.c=b},
cn:function cn(a,b,c){this.b=a
this.c=b
this.d=c},
k0:function k0(a,b){this.a=a
this.b=b},
k1:function k1(a,b){this.a=a
this.b=b},
co:function co(a,b){this.b=a
this.c=b},
k3:function k3(){},
k2:function k2(){},
k4:function k4(){},
je:function je(){},
dL:function dL(a){this.b=a}},T={
mE:function(a){return new T.fv(a)},
bJ:function bJ(){},
fu:function fu(){},
fv:function fv(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.x=_.r=_.f=_.e=0
_.y=null},
fw:function fw(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},
jz:function jz(a,b){var _=this
_.a=a
_.c=b
_.e=_.d=0},
jA:function jA(a,b,c,d,e,f,g){var _=this
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
H.lu.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gH:function(a){return H.dj(a)},
i:function(a){return"Instance of '"+H.dk(a)+"'"}}
J.eH.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iac:1}
J.cX.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.bg.prototype={
gH:function(a){return 0},
i:function(a){return String(a)},
$imj:1}
J.f4.prototype={}
J.bL.prototype={}
J.aX.prototype={
i:function(a){var s=a[$.nE()]
if(s==null)return this.eR(a)
return"JavaScript function for "+J.cC(s)},
$icT:1}
J.w.prototype={
cV:function(a,b){if(!!a.fixed$length)H.i(P.C("removeAt"))
if(b<0||b>=a.length)throw H.c(P.fa(b,null))
return a.splice(b,1)[0]},
O:function(a,b){var s
if(!!a.fixed$length)H.i(P.C("remove"))
for(s=0;s<a.length;++s)if(J.W(a[s],b)){a.splice(s,1)
return!0}return!1},
ac:function(a,b){if(!!a.fixed$length)H.i(P.C("addAll"))
this.f8(a,b)
return},
f8:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aG(a))
for(s=0;s<r;++s)a.push(b[s])},
G:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aG(a))}},
j:function(a,b){var s,r,q=a.length,p=P.eP(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.x(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
ic:function(a){return this.j(a,"")},
i6:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aG(a))}return s},
i7:function(a,b,c){return this.i6(a,b,c,t.A)},
i5:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aG(a))}throw H.c(H.iK())},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gi4:function(a){if(a.length>0)return a[0]
throw H.c(H.iK())},
gaH:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.iK())},
dL:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aG(a))}return!1},
bi:function(a,b){if(!!a.immutable$list)H.i(P.C("sort"))
H.oP(a,b==null?J.pQ():b)},
eN:function(a){return this.bi(a,null)},
C:function(a,b){var s
for(s=0;s<a.length;++s)if(J.W(a[s],b))return!0
return!1},
i:function(a){return P.lr(a,"[","]")},
gT:function(a){return new J.ag(a,a.length)},
gH:function(a){return H.dj(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.i(P.C("set length"))
if(b>a.length)H.kA(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cy(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.i(P.C("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cy(a,b))
a[b]=c},
$in:1,
$ih:1,
$ip:1}
J.iL.prototype={}
J.ag.prototype={
gA:function(a){return H.V(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.c3.prototype={
aq:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbI(b)
if(this.gbI(a)===s)return 0
if(this.gbI(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbI:function(a){return a===0?1/a<0:a<0},
iF:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.C(""+a+".toInt()"))},
cH:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.C(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.C(""+a+".round()"))},
cZ:function(a,b){var s
if(b>20)throw H.c(P.aa(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbI(a))return"-"+s
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
bz:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eT:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dz(a,b)},
aa:function(a,b){return(a|0)===a?a/b|0:this.dz(a,b)},
dz:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.C("Result of truncating division is "+H.x(s)+": "+H.x(a)+" ~/ "+b))},
b4:function(a,b){var s
if(a>0)s=this.dw(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hA:function(a,b){if(b<0)throw H.c(H.eg(b))
return this.dw(a,b)},
dw:function(a,b){return b>31?0:a>>>b},
$iI:1,
$ia4:1}
J.cW.prototype={$ik:1}
J.eI.prototype={}
J.bf.prototype={
Y:function(a,b){if(b<0)throw H.c(H.cy(a,b))
if(b>=a.length)H.i(H.cy(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.cy(a,b))
return a.charCodeAt(b)},
W:function(a,b){return a+b},
bc:function(a,b,c,d){var s=P.bk(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
ag:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a3:function(a,b){return this.ag(a,b,0)},
u:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fa(b,null))
if(b>c)throw H.c(P.fa(b,null))
if(c>a.length)throw H.c(P.fa(c,null))
return a.substring(b,c)},
ak:function(a,b){return this.u(a,b,null)},
iI:function(a){return a.toLowerCase()},
K:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.P)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
au:function(a,b){var s=b-a.length
if(s<=0)return a
return this.K(" ",s)+a},
bG:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
eh:function(a,b){return this.bG(a,b,0)},
hS:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aa(c,0,s,null,null))
return H.nz(a,b,c)},
C:function(a,b){return this.hS(a,b,0)},
aq:function(a,b){var s
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
$im:1}
H.cY.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.r.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.Y(this.a,b)}}
H.n.prototype={}
H.d2.prototype={
gT:function(a){return new H.bh(this,this.gl(this))},
bR:function(a,b){return this.eQ(0,b)}}
H.bh.prototype={
gA:function(a){return H.V(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a,p=J.cA(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.aG(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.L(q,s);++r.c
return!0}}
H.aZ.prototype={
gT:function(a){return new H.eQ(J.aC(this.a),this.b)},
gl:function(a){return J.aR(this.a)},
L:function(a,b){return this.b.$1(J.i3(this.a,b))}}
H.cO.prototype={$in:1}
H.eQ.prototype={
v:function(){var s=this,r=s.b
if(r.v()){s.a=s.c.$1(r.gA(r))
return!0}s.a=null
return!1},
gA:function(a){return H.V(this).Q[1].a(this.a)}}
H.d6.prototype={
gl:function(a){return J.aR(this.a)},
L:function(a,b){return this.b.$1(J.i3(this.a,b))}}
H.b6.prototype={
gT:function(a){return new H.fT(J.aC(this.a),this.b)}}
H.fT.prototype={
v:function(){var s,r
for(s=this.a,r=this.b;s.v();)if(r.$1(s.gA(s)))return!0
return!1},
gA:function(a){var s=this.a
return s.gA(s)}}
H.cR.prototype={}
H.fL.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify an unmodifiable list"))}}
H.ck.prototype={}
H.cI.prototype={
i:function(a){return P.lx(this)},
m:function(a,b,c){H.of()},
$iH:1}
H.cJ.prototype={
gl:function(a){return this.a},
cr:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cr(0,b))return null
return this.di(b)},
di:function(a){return this.b[a]},
G:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.di(q))}}}
H.jI.prototype={
at:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.di.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eK.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fK.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.jf.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hy.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bA.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nC(r==null?"unknown":r)+"'"},
$icT:1,
giL:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fr.prototype={}
H.fk.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nC(s)+"'"}}
H.bT.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bT))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gH:function(a){var s,r=this.c
if(r==null)s=H.dj(this.a)
else s=typeof r!=="object"?J.lk(r):H.dj(r)
return(s^H.dj(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.x(this.d)+"' of "+("Instance of '"+H.dk(s)+"'")}}
H.fd.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.Y.prototype={
gl:function(a){return this.a},
gbH:function(a){return this.a===0},
ga6:function(a){return new H.d_(this,H.V(this).M("d_<1>"))},
giK:function(a){var s=this,r=H.V(s)
return H.ov(s.ga6(s),new H.iM(s),r.c,r.Q[1])},
cr:function(a,b){var s=this.b
if(s==null)return!1
return this.fg(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bB(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bB(p,b)
q=r==null?n:r.b
return q}else return o.ia(b)},
ia:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.dj(p,q.ej(a))
r=q.ek(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.dc(s==null?q.b=q.ca():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.dc(r==null?q.c=q.ca():r,b,c)}else q.ib(b,c)},
ib:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.ca()
s=p.ej(a)
r=p.dj(o,s)
if(r==null)p.cg(o,s,[p.cb(a,b)])
else{q=p.ek(r,a)
if(q>=0)r[q].b=b
else r.push(p.cb(a,b))}},
G:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aG(s))
r=r.c}},
dc:function(a,b,c){var s=this.bB(a,b)
if(s==null)this.cg(a,b,this.cb(b,c))
else s.b=c},
fs:function(){this.r=this.r+1&67108863},
cb:function(a,b){var s,r=this,q=new H.iP(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.fs()
return q},
ej:function(a){return J.lk(a)&0x3ffffff},
ek:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
return-1},
i:function(a){return P.lx(this)},
bB:function(a,b){return a[b]},
dj:function(a,b){return a[b]},
cg:function(a,b,c){a[b]=c},
fk:function(a,b){delete a[b]},
fg:function(a,b){return this.bB(a,b)!=null},
ca:function(){var s="<non-identifier-key>",r=Object.create(null)
this.cg(r,s,r)
this.fk(r,s)
return r}}
H.iM.prototype={
$1:function(a){var s=this.a
return H.V(s).Q[1].a(s.h(0,a))},
$S:function(){return H.V(this.a).M("2(1)")}}
H.iP.prototype={}
H.d_.prototype={
gl:function(a){return this.a.a},
gT:function(a){var s=this.a,r=new H.eO(s,s.r)
r.c=s.e
return r}}
H.eO.prototype={
gA:function(a){return H.V(this).c.a(this.d)},
v:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aG(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kV.prototype={
$1:function(a){return this.a(a)},
$S:39}
H.kW.prototype={
$2:function(a,b){return this.a(a,b)},
$S:59}
H.kX.prototype={
$1:function(a){return this.a(a)},
$S:50}
H.eJ.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imx:1}
H.dd.prototype={$idd:1}
H.a1.prototype={$ia1:1}
H.c7.prototype={
gl:function(a){return a.length},
$iB:1}
H.bG.prototype={
h:function(a,b){H.b7(b,a,a.length)
return a[b]},
m:function(a,b,c){H.b7(b,a,a.length)
a[b]=c},
$in:1,
$ih:1,
$ip:1}
H.de.prototype={
m:function(a,b,c){H.b7(b,a,a.length)
a[b]=c},
$in:1,
$ih:1,
$ip:1}
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
H.eZ.prototype={
h:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.df.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.bH.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b7(b,a,a.length)
return a[b]},
$ibH:1,
$ich:1}
H.dT.prototype={}
H.dU.prototype={}
H.dV.prototype={}
H.dW.prototype={}
H.ax.prototype={
M:function(a){return H.hM(v.typeUniverse,this,a)},
bl:function(a){return H.po(v.typeUniverse,this,a)}}
H.ha.prototype={}
H.h6.prototype={
i:function(a){return this.a}}
H.e4.prototype={}
P.k8.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:49}
P.k7.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:47}
P.k9.prototype={
$0:function(){this.a.$0()},
$S:13}
P.ka.prototype={
$0:function(){this.a.$0()},
$S:13}
P.e3.prototype={
f3:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cx(new P.kr(this,b),0),a)
else throw H.c(P.C("`setTimeout()` not found."))},
f4:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cx(new P.kq(this,a,Date.now(),b),0),a)
else throw H.c(P.C("Periodic timer."))},
$ijD:1}
P.kr.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.kq.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eT(s,o)}q.c=p
r.d.$1(q)},
$S:13}
P.cs.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.x(this.a)+")"}}
P.bN.prototype={
gA:function(a){var s=this.c
if(s==null)return this.b
return s.gA(s)},
v:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.v())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.cs){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aC(s)
if(o instanceof P.bN){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.e0.prototype={
gT:function(a){return new P.bN(this.a())}}
P.fU.prototype={}
P.ce.prototype={}
P.fm.prototype={}
P.ky.prototype={}
P.kK.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:1}
P.kf.prototype={
iB:function(a){var s,r,q,p=null
try{if(C.f===$.aO){a.$0()
return}P.qk(p,p,this,a)}catch(q){s=H.al(q)
r=H.lY(q)
P.nf(p,p,this,s,r)}},
iC:function(a,b){var s,r,q,p=null
try{if(C.f===$.aO){a.$1(b)
return}P.ql(p,p,this,a,b)}catch(q){s=H.al(q)
r=H.lY(q)
P.nf(p,p,this,s,r)}},
iD:function(a,b){return this.iC(a,b,t.A)},
hP:function(a){return new P.kg(this,a)},
dQ:function(a,b){return new P.kh(this,a,b)}}
P.kg.prototype={
$0:function(){return this.a.iB(this.b)},
$S:1}
P.kh.prototype={
$1:function(a){return this.a.iD(this.b,a)},
$S:function(){return this.c.M("~(0)")}}
P.dP.prototype={
gT:function(a){var s=new P.dQ(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
C:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ff(b)
return r}},
ff:function(a){var s=this.d
if(s==null)return!1
return this.c1(s[this.bY(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dd(s==null?q.b=P.lI():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dd(r==null?q.c=P.lI():r,b)}else return q.f7(0,b)},
f7:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lI()
s=q.bY(b)
r=p[s]
if(r==null)p[s]=[q.bX(b)]
else{if(q.c1(r,b)>=0)return!1
r.push(q.bX(b))}return!0},
O:function(a,b){if((b&1073741823)===b)return this.hn(this.c,b)
else return this.hm(0,b)},
hm:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bY(b)
r=n[s]
q=o.c1(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dB(p)
return!0},
dd:function(a,b){if(a[b]!=null)return!1
a[b]=this.bX(b)
return!0},
hn:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dB(s)
delete a[b]
return!0},
de:function(){this.r=this.r+1&1073741823},
bX:function(a){var s,r=this,q=new P.ke(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.de()
return q},
dB:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.de()},
bY:function(a){return J.lk(a)&1073741823},
c1:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
return-1}}
P.ke.prototype={}
P.dQ.prototype={
gA:function(a){return H.V(this).c.a(this.d)},
v:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aG(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cV.prototype={}
P.iQ.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:15}
P.d1.prototype={$in:1,$ih:1,$ip:1}
P.j.prototype={
gT:function(a){return new H.bh(a,this.gl(a))},
L:function(a,b){return this.h(a,b)},
G:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.aG(a))}},
gbH:function(a){return this.gl(a)===0},
iH:function(a,b){var s,r,q,p,o=this
if(o.gbH(a)){s=J.ls(0,H.b8(a).M("j.E"))
return s}r=o.h(a,0)
q=P.eP(o.gl(a),r,!0,H.b8(a).M("j.E"))
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
iG:function(a){return this.iH(a,!0)},
i2:function(a,b,c,d){var s
H.b8(a).M("j.E").a(d)
P.bk(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.lr(a,"[","]")}}
P.d4.prototype={}
P.iU.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.x(a)
r.a=s+": "
r.a+=H.x(b)},
$S:46}
P.M.prototype={
G:function(a,b){var s,r,q
for(s=J.aC(this.ga6(a)),r=H.b8(a).M("M.V");s.v();){q=s.gA(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.aR(this.ga6(a))},
i:function(a){return P.lx(a)},
$iH:1}
P.hN.prototype={
m:function(a,b,c){throw H.c(P.C("Cannot modify unmodifiable map"))}}
P.d5.prototype={
h:function(a,b){return J.m5(this.a,b)},
m:function(a,b,c){J.lj(this.a,b,c)},
G:function(a,b){J.em(this.a,b)},
gl:function(a){return J.aR(this.a)},
i:function(a){return J.cC(this.a)},
$iH:1}
P.cl.prototype={}
P.dn.prototype={
ac:function(a,b){var s
for(s=J.aC(b);s.v();)this.n(0,s.gA(s))},
i:function(a){return P.lr(this,"{","}")},
L:function(a,b){var s,r,q,p,o="index"
H.qx(b,o,t.S)
P.mw(b,o)
for(s=P.p8(this,this.r),r=H.V(s).c,q=0;s.v();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.O(b,this,o,null,q))}}
P.dX.prototype={$in:1,$ih:1}
P.dR.prototype={}
P.e8.prototype={}
P.ea.prototype={}
P.jW.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.al(r)}return null},
$S:17}
P.jV.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.al(r)}return null},
$S:17}
P.ia.prototype={
ih:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bk(a3,a4,a2.length)
s=$.nV()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.F(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.kU(C.a.F(a2,k))
g=H.kU(C.a.F(a2,k+1))
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
c=d.a+=C.a.u(a2,p,q)
d.a=c+H.aw(j)
p=k
continue}}throw H.c(P.a7("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.u(a2,p,a4)
d=r.length
if(n>=0)P.m8(a2,m,a4,n,l,d)
else{b=C.c.bz(d-1,4)+1
if(b===1)throw H.c(P.a7(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.bc(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.m8(a2,m,a4,n,l,a)
else{b=C.c.bz(a,4)
if(b===1)throw H.c(P.a7(a0,a2,a4))
if(b>1)a2=C.a.bc(a2,a4,a4,b===2?"==":"=")}return a2}}
P.ib.prototype={}
P.et.prototype={}
P.ev.prototype={}
P.iv.prototype={}
P.iI.prototype={
i:function(a){return this.a}}
P.iH.prototype={
fh:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
if(o>b)n.a+=C.a.u(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.a.u(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.jT.prototype={
gi1:function(){return C.Q}}
P.jX.prototype={
cs:function(a){var s,r,q,p=P.bk(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.kw(r)
if(q.fm(a,0,p)!==p){C.a.Y(a,p-1)
q.cm()}return new Uint8Array(r.subarray(0,H.pH(0,q.b,s)))}}
P.kw.prototype={
cm:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
hI:function(a,b){var s,r,q,p,o,n=this
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
fm:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.Y(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.F(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hI(p,C.a.F(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
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
P.jU.prototype={
cs:function(a){var s=this.a,r=P.oX(s,a,0,null)
if(r!=null)return r
return new P.kv(s).hT(a,0,null,!0)}}
P.kv.prototype={
hT:function(a,b,c,d){var s,r,q,p,o=this,n=P.bk(b,c,J.aR(a))
if(b===n)return""
s=P.pD(a,b,n)
r=o.bZ(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.pE(q)
o.b=0
throw H.c(P.a7(p,a,b+o.c))}return r},
bZ:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.aa(b+c,2)
r=q.bZ(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bZ(a,s,c,d)}return q.hY(a,b,c,d)},
hY:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a0(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.F("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.F(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aw(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aw(j)
break
case 65:g.a+=H.aw(j);--f
break
default:p=g.a+=H.aw(j)
g.a=p+H.aw(j)
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
g.a+=H.aw(a[l])}else g.a+=P.fo(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aw(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.Z.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.Z&&this.a===b.a&&!0},
aq:function(a,b){return C.c.aq(this.a,b.a)},
gH:function(a){var s=this.a
return(s^C.c.b4(s,30))&1073741823},
i:function(a){var s=this,r=P.og(H.oG(s)),q=P.ey(H.oE(s)),p=P.ey(H.oA(s)),o=P.ey(H.oB(s)),n=P.ey(H.oD(s)),m=P.ey(H.oF(s)),l=P.oh(H.oC(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bB.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bB&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
aq:function(a,b){return C.c.aq(this.a,b.a)},
i:function(a){var s,r,q,p=new P.is(),o=this.a
if(o<0)return"-"+new P.bB(0-o).i(0)
s=p.$1(C.c.aa(o,6e7)%60)
r=p.$1(C.c.aa(o,1e6)%60)
q=new P.ir().$1(o%1e6)
return""+C.c.aa(o,36e8)+":"+s+":"+r+"."+q}}
P.ir.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:30}
P.is.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:30}
P.L.prototype={}
P.ep.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.iy(s)
return"Assertion failed"}}
P.fC.prototype={}
P.f_.prototype={
i:function(a){return"Throw of null."}}
P.aD.prototype={
gc0:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc_:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gc0()+o+m
if(!q.a)return l
s=q.gc_()
r=P.iy(q.b)
return l+s+": "+r}}
P.dl.prototype={
gc0:function(){return"RangeError"},
gc_:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.x(q):""
else if(q==null)s=": Not greater than or equal to "+H.x(r)
else if(q>r)s=": Not in inclusive range "+H.x(r)+".."+H.x(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.x(r)
return s}}
P.eF.prototype={
gc0:function(){return"RangeError"},
gc_:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.fM.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fJ.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.cd.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eu.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iy(s)+"."}}
P.f2.prototype={
i:function(a){return"Out of Memory"},
$iL:1}
P.dt.prototype={
i:function(a){return"Stack Overflow"},
$iL:1}
P.ew.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.h7.prototype={
i:function(a){return"Exception: "+this.a}}
P.iE.prototype={
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
return f+j+h+i+"\n"+C.a.K(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.x(e)+")"):f}}
P.h.prototype={
bR:function(a,b){return new H.b6(this,b,H.V(this).M("b6<h.E>"))},
gl:function(a){var s,r=this.gT(this)
for(s=0;r.v();)++s
return s},
gaW:function(a){var s,r=this.gT(this)
if(!r.v())throw H.c(H.iK())
s=r.gA(r)
if(r.v())throw H.c(H.om())
return s},
L:function(a,b){var s,r,q
P.mw(b,"index")
for(s=this.gT(this),r=0;s.v();){q=s.gA(s)
if(b===r)return q;++r}throw H.c(P.O(b,this,"index",null,r))},
i:function(a){return P.ol(this,"(",")")}}
P.eG.prototype={}
P.ai.prototype={
gH:function(a){return P.P.prototype.gH.call(C.V,this)},
i:function(a){return"null"}}
P.P.prototype={constructor:P.P,$iP:1,
q:function(a,b){return this===b},
gH:function(a){return H.dj(this)},
i:function(a){return"Instance of '"+H.dk(this)+"'"},
toString:function(){return this.i(this)}}
P.a0.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jR.prototype={
$2:function(a,b){var s,r,q,p=C.a.eh(b,"=")
if(p===-1){if(b!=="")J.lj(a,P.lR(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.u(b,0,p)
r=C.a.ak(b,p+1)
q=this.a
J.lj(a,P.lR(s,0,s.length,q,!0),P.lR(r,0,r.length,q,!0))}return a},
$S:45}
P.jO.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.jP.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.jQ.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kY(C.a.u(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:42}
P.bO.prototype={
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
if(s!=null)o=o+":"+H.x(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.i(H.lw("_text"))}return o},
gH:function(a){var s=this,r=s.z
if(r==null){r=C.a.gH(s.gcl())
if(s.z==null)s.z=r
else r=H.i(H.lw("hashCode"))}return r},
gcU:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.cl(P.mM(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.i(H.lw("queryParameters"))}return r},
geF:function(){return this.b},
gcI:function(a){var s=this.c
if(s==null)return""
if(C.a.a3(s,"["))return C.a.u(s,1,s.length-1)
return s},
gbL:function(a){var s=this.d
return s==null?P.n3(this.a):s},
gcT:function(a){var s=this.f
return s==null?"":s},
gec:function(){var s=this.r
return s==null?"":s},
ey:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a3(s,"/"))s="/"+s
q=s
p=P.lP(null,0,0,b)
return new P.bO(n,l,j,k,q,p,o.r)},
ged:function(){return this.c!=null},
geg:function(){return this.f!=null},
gee:function(){return this.r!=null},
i:function(a){return this.gcl()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbS())if(q.c!=null===b.ged())if(q.b===b.geF())if(q.gcI(q)===b.gcI(b))if(q.gbL(q)===b.gbL(b))if(q.e===b.gev(b)){s=q.f
r=s==null
if(!r===b.geg()){if(r)s=""
if(s===b.gcT(b)){s=q.r
r=s==null
if(!r===b.gee()){if(r)s=""
s=s===b.gec()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifN:1,
gbS:function(){return this.a},
gev:function(a){return this.e}}
P.kt.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.ku(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.ku(C.h,b,C.e,!0)}},
$S:41}
P.ks.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aC(b),r=this.a;s.v();)r.$2(a,s.gA(s))},
$S:6}
P.jN.prototype={
geE:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bG(s,"?",m)
q=s.length
if(r>=0){p=P.e9(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.h_("data","",n,n,P.e9(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kE.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.a0.i2(s,0,96,b)
return s},
$S:40}
P.kF.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.F(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:22}
P.kG.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.F(b,0),r=C.a.F(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:22}
P.hs.prototype={
ged:function(){return this.c>0},
gef:function(){return this.c>0&&this.d+1<this.e},
geg:function(){return this.f<this.r},
gee:function(){return this.r<this.a.length},
gbS:function(){var s=this.x
return s==null?this.x=this.fe():s},
fe:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a3(r.a,"http"))return"http"
if(q===5&&C.a.a3(r.a,"https"))return"https"
if(s&&C.a.a3(r.a,"file"))return"file"
if(q===7&&C.a.a3(r.a,"package"))return"package"
return C.a.u(r.a,0,q)},
geF:function(){var s=this.c,r=this.b+3
return s>r?C.a.u(this.a,r,s-1):""},
gcI:function(a){var s=this.c
return s>0?C.a.u(this.a,s,this.d):""},
gbL:function(a){var s,r=this
if(r.gef())return P.kY(C.a.u(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a3(r.a,"http"))return 80
if(s===5&&C.a.a3(r.a,"https"))return 443
return 0},
gev:function(a){return C.a.u(this.a,this.e,this.f)},
gcT:function(a){var s=this.f,r=this.r
return s<r?C.a.u(this.a,s+1,r):""},
gec:function(){var s=this.r,r=this.a
return s<r.length?C.a.ak(r,s+1):""},
gcU:function(){var s=this
if(s.f>=s.r)return C.a_
return new P.cl(P.mM(s.gcT(s)),t.dw)},
ey:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbS(),k=l==="file",j=n.c,i=j>0?C.a.u(n.a,n.b+3,j):"",h=n.gef()?n.gbL(n):m
j=n.c
if(j>0)s=C.a.u(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.u(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a3(r,"/"))r="/"+r
p=P.lP(m,0,0,b)
q=n.r
o=q<j.length?C.a.ak(j,q+1):m
return new P.bO(l,i,s,h,r,p,o)},
gH:function(a){var s=this.y
return s==null?this.y=C.a.gH(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifN:1}
P.h_.prototype={}
W.v.prototype={}
W.i4.prototype={
gl:function(a){return a.length}}
W.en.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.eo.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bS.prototype={$ibS:1}
W.bx.prototype={$ibx:1}
W.by.prototype={$iby:1}
W.bz.prototype={
d2:function(a,b,c){if(c!=null)return a.getContext(b,P.nk(c))
return a.getContext(b)},
eI:function(a,b){return this.d2(a,b,null)},
$ibz:1}
W.cF.prototype={$icF:1}
W.aE.prototype={
gl:function(a){return a.length}}
W.ij.prototype={
gl:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.cL.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ik.prototype={}
W.as.prototype={}
W.aU.prototype={}
W.il.prototype={
gl:function(a){return a.length}}
W.im.prototype={
gl:function(a){return a.length}}
W.io.prototype={
gl:function(a){return a.length}}
W.bd.prototype={$ibd:1}
W.ip.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cM.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.cN.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.x(r)+", "
s=a.top
s.toString
return r+H.x(s)+") "+H.x(this.gaD(a))+" x "+H.x(this.gay(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.aP(b)
if(s===r.gbJ(b)){s=a.top
s.toString
s=s===r.gbO(b)&&this.gaD(a)===r.gaD(b)&&this.gay(a)===r.gay(b)}else s=!1}else s=!1
return s},
gH:function(a){var s,r=a.left
r.toString
r=C.d.gH(r)
s=a.top
s.toString
return W.mV(r,C.d.gH(s),C.d.gH(this.gaD(a)),C.d.gH(this.gay(a)))},
gdR:function(a){var s=a.bottom
s.toString
return s},
gdk:function(a){return a.height},
gay:function(a){var s=this.gdk(a)
s.toString
return s},
gbJ:function(a){var s=a.left
s.toString
return s},
gcY:function(a){var s=a.right
s.toString
return s},
gbO:function(a){var s=a.top
s.toString
return s},
gdD:function(a){return a.width},
gaD:function(a){var s=this.gdD(a)
s.toString
return s},
$iaf:1}
W.ez.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.iq.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.fX.prototype={
gbH:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gT:function(a){var s=this.iG(this)
return new J.ag(s,s.length)}}
W.E.prototype={
gai:function(a){return new W.h4(a)},
gbE:function(a){var s=a.children
s.toString
return new W.fX(a,s)},
gdT:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.af(p,s,r,q,t.I)},
i:function(a){var s=a.localName
s.toString
return s},
ar:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.me
if(s==null){s=H.b([],t.Q)
r=new W.dh(s)
s.push(W.mU(null))
s.push(W.mZ())
$.me=r
d=r}else d=s
s=$.md
if(s==null){s=new W.hO(d)
$.md=s
c=s}else{s.a=d
c=s}}if($.be==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.be=r
r=r.createRange()
r.toString
$.lo=r
r=$.be.createElement("base")
t.cR.a(r)
s=s.baseURI
s.toString
r.href=s
$.be.head.appendChild(r).toString}s=$.be
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.be
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.be.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.b.C(C.Y,s)}else s=!1
if(s){$.lo.selectNodeContents(q)
s=$.lo
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.be.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.be.body)J.m6(q)
c.d3(p)
document.adoptNode(p).toString
return p},
hW:function(a,b,c){return this.ar(a,b,c,null)},
eJ:function(a,b){var s
a.textContent=null
s=a.appendChild(this.ar(a,b,null,null))
s.toString},
geB:function(a){var s=a.tagName
s.toString
return s},
$iE:1}
W.it.prototype={
$1:function(a){return t.h.b(a)},
$S:23}
W.l.prototype={$il:1}
W.e.prototype={
hK:function(a,b,c,d){if(c!=null)this.f9(a,b,c,!1)},
f9:function(a,b,c,d){return a.addEventListener(b,H.cx(c,1),!1)},
$ie:1}
W.an.prototype={$ian:1}
W.bZ.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1,
$ibZ:1}
W.eA.prototype={
gl:function(a){return a.length}}
W.eC.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.iG.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.bD.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.bE.prototype={
gdU:function(a){var s=a.data
s.toString
return s},
$ibE:1}
W.c0.prototype={$ic0:1}
W.c2.prototype={$ic2:1}
W.bF.prototype={$ibF:1}
W.iS.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.j8.prototype={
gl:function(a){return a.length}}
W.c4.prototype={$ic4:1}
W.eS.prototype={
h:function(a,b){return P.bs(a.get(b))},
G:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bs(s.value[1]))}},
ga6:function(a){var s=H.b([],t.s)
this.G(a,new W.j9(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iH:1}
W.j9.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.eT.prototype={
h:function(a,b){return P.bs(a.get(b))},
G:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bs(s.value[1]))}},
ga6:function(a){var s=H.b([],t.s)
this.G(a,new W.ja(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iH:1}
W.ja.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.aI.prototype={$iaI:1}
W.eU.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.ao.prototype={$iao:1}
W.a6.prototype={
gaW:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.lB("No elements"))
if(r>1)throw H.c(P.lB("More than one element"))
s=s.firstChild
s.toString
return s},
ac:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gT:function(a){var s=this.a.childNodes
return new W.cS(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.t.prototype={
iw:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
iz:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nZ(s,b,a)}catch(q){H.al(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eP(a):s},
hp:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$it:1}
W.dg.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.aK.prototype={
gl:function(a){return a.length},
$iaK:1}
W.f6.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.fc.prototype={
h:function(a,b){return P.bs(a.get(b))},
G:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bs(s.value[1]))}},
ga6:function(a){var s=H.b([],t.s)
this.G(a,new W.jn(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iH:1}
W.jn.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.fe.prototype={
gl:function(a){return a.length}}
W.ay.prototype={$iay:1}
W.fg.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.aM.prototype={$iaM:1}
W.fh.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.aN.prototype={
gl:function(a){return a.length},
$iaN:1}
W.fl.prototype={
h:function(a,b){return a.getItem(H.kB(b))},
m:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga6:function(a){var s=H.b([],t.s)
this.G(a,new W.jw(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iH:1}
W.jw.prototype={
$2:function(a,b){return this.a.push(a)},
$S:51}
W.ap.prototype={$iap:1}
W.bm.prototype={$ibm:1}
W.du.prototype={
ar:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bU(a,b,c,d)
s=W.oi("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a6(r).ac(0,new W.a6(s))
return r}}
W.fp.prototype={
ar:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bU(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a6(C.D.ar(r,b,c,d))
r=new W.a6(r.gaW(r))
new W.a6(s).ac(0,new W.a6(r.gaW(r)))
return s}}
W.fq.prototype={
ar:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bU(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a6(C.D.ar(r,b,c,d))
new W.a6(s).ac(0,new W.a6(r.gaW(r)))
return s}}
W.cg.prototype={$icg:1}
W.az.prototype={$iaz:1}
W.aj.prototype={$iaj:1}
W.fs.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.ft.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.jC.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.aA.prototype={$iaA:1}
W.bK.prototype={$ibK:1}
W.fA.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.jH.prototype={
gl:function(a){return a.length}}
W.b5.prototype={}
W.jS.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fQ.prototype={
gl:function(a){return a.length}}
W.bo.prototype={
gi_:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.C("deltaY is not supported"))},
ghZ:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.C("deltaX is not supported"))},
$ibo:1}
W.cp.prototype={
hq:function(a,b){var s=a.requestAnimationFrame(H.cx(b,1))
s.toString
return s},
fl:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cq.prototype={$icq:1}
W.fY.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.dM.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.x(r)+", "
s=a.top
s.toString
s=r+H.x(s)+") "
r=a.width
r.toString
r=s+H.x(r)+" x "
s=a.height
s.toString
return r+H.x(s)},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.aP(b)
if(s===r.gbJ(b)){s=a.top
s.toString
if(s===r.gbO(b)){s=a.width
s.toString
if(s===r.gaD(b)){s=a.height
s.toString
r=s===r.gay(b)
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
return W.mV(p,s,r,C.d.gH(q))},
gdk:function(a){return a.height},
gay:function(a){var s=a.height
s.toString
return s},
gdD:function(a){return a.width},
gaD:function(a){var s=a.width
s.toString
return s}}
W.hb.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.dS.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.hv.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.hC.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iB:1,
$ih:1,
$ip:1}
W.fV.prototype={
G:function(a,b){var s,r,q,p,o
for(s=this.ga6(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,H.kB(q.getAttribute(o)))}},
ga6:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.b([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.d(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.h4.prototype={
h:function(a,b){return this.a.getAttribute(H.kB(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga6(this).length}}
W.lq.prototype={}
W.dN.prototype={
hH:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.o_(s,this.c,r,!1)}}}
W.kb.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.lH.prototype={}
W.cr.prototype={
eX:function(a){var s
if($.dO.gbH($.dO)){for(s=0;s<262;++s)$.dO.m(0,C.X[s],W.qG())
for(s=0;s<12;++s)$.dO.m(0,C.n[s],W.qH())}},
b5:function(a){return $.nW().C(0,W.cP(a))},
aF:function(a,b,c){var s=$.dO.h(0,W.cP(a)+"::"+b)
if(s==null)s=$.dO.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaJ:1}
W.N.prototype={
gT:function(a){return new W.cS(a,this.gl(a))}}
W.dh.prototype={
b5:function(a){return C.b.dL(this.a,new W.jd(a))},
aF:function(a,b,c){return C.b.dL(this.a,new W.jc(a,b,c))},
$iaJ:1}
W.jd.prototype={
$1:function(a){return a.b5(this.a)},
$S:26}
W.jc.prototype={
$1:function(a){return a.aF(this.a,this.b,this.c)},
$S:26}
W.dY.prototype={
f2:function(a,b,c,d){var s,r,q
this.a.ac(0,c)
s=b.bR(0,new W.kj())
r=b.bR(0,new W.kk())
this.b.ac(0,s)
q=this.c
q.ac(0,C.v)
q.ac(0,r)},
b5:function(a){return this.a.C(0,W.cP(a))},
aF:function(a,b,c){var s=this,r=W.cP(a),q=s.c
if(q.C(0,r+"::"+b))return s.d.hN(c)
else if(q.C(0,"*::"+b))return s.d.hN(c)
else{q=s.b
if(q.C(0,r+"::"+b))return!0
else if(q.C(0,"*::"+b))return!0
else if(q.C(0,r+"::*"))return!0
else if(q.C(0,"*::*"))return!0}return!1},
$iaJ:1}
W.kj.prototype={
$1:function(a){return!C.b.C(C.n,a)},
$S:27}
W.kk.prototype={
$1:function(a){return C.b.C(C.n,a)},
$S:27}
W.hE.prototype={
aF:function(a,b,c){if(this.eS(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.C(0,b)
return!1}}
W.kp.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:37}
W.hD.prototype={
b5:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cP(a)==="foreignObject")return!1
if(s)return!0
return!1},
aF:function(a,b,c){if(b==="is"||C.a.a3(b,"on"))return!1
return this.b5(a)},
$iaJ:1}
W.cS.prototype={
v:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.m5(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gA:function(a){return H.V(this).c.a(this.d)}}
W.ki.prototype={}
W.hO.prototype={
d3:function(a){var s,r=new W.kx(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
bp:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.m6(a)
else b.removeChild(a).toString},
hu:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.o1(a)
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
try{r=J.cC(a)}catch(n){H.al(n)}try{q=W.cP(a)
this.ht(a,b,l,r,q,k,j)}catch(n){if(H.al(n) instanceof P.aD)throw n
else{this.bp(a,b)
p=window
p.toString
p="Removing corrupted element "+H.x(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
ht:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.bp(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.b5(a)){m.bp(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.x(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.aF(a,"is",g)){m.bp(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.ga6(f)
q=H.b(s.slice(0),H.kA(s))
for(p=f.ga6(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.o5(o)
H.kB(o)
if(!r.aF(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.x(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.d3(s)}}}
W.kx.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.hu(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.bp(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.lB("Corrupt HTML")
throw H.c(n)}}catch(p){H.al(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:35}
W.fZ.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h8.prototype={}
W.h9.prototype={}
W.hc.prototype={}
W.hd.prototype={}
W.hg.prototype={}
W.hh.prototype={}
W.hi.prototype={}
W.hj.prototype={}
W.hk.prototype={}
W.hl.prototype={}
W.ho.prototype={}
W.hp.prototype={}
W.hr.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.ht.prototype={}
W.hu.prototype={}
W.hz.prototype={}
W.hF.prototype={}
W.hG.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.hH.prototype={}
W.hI.prototype={}
W.hP.prototype={}
W.hQ.prototype={}
W.hR.prototype={}
W.hS.prototype={}
W.hT.prototype={}
W.hU.prototype={}
W.hV.prototype={}
W.hW.prototype={}
W.hX.prototype={}
W.hY.prototype={}
P.kl.prototype={
cG:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bQ:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.kH(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.Z)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.jM("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.x.b(a))return a
if(t.cH.b(a)||t.dE.b(a)||t.bu.b(a))return a
if(t.f.b(a)){s=n.cG(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.em(a,new P.kn(m,n))
return m.a}if(t.E.b(a)){s=n.cG(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.hV(a,s)}if(t.eH.b(a)){s=n.cG(a)
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
n.i8(a,new P.ko(m,n))
return m.b}throw H.c(P.jM("structured clone of other type"))},
hV:function(a,b){var s,r,q=J.cA(a),p=q.gl(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bQ(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.kn.prototype={
$2:function(a,b){this.a.a[a]=this.b.bQ(b)},
$S:15}
P.ko.prototype={
$2:function(a,b){this.a.b[a]=this.b.bQ(b)},
$S:34}
P.e5.prototype={$ibE:1,
gdU:function(a){return this.a}}
P.kC.prototype={
$1:function(a){this.a.push(P.nb(a))},
$S:33}
P.kL.prototype={
$2:function(a,b){this.a[a]=P.nb(b)},
$S:15}
P.km.prototype={
i8:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.eB.prototype={
gbn:function(){var s=this.b,r=H.V(s)
return new H.aZ(new H.b6(s,new P.iC(),r.M("b6<j.E>")),new P.iD(),r.M("aZ<j.E,E>"))},
G:function(a,b){C.b.G(P.iR(this.gbn(),!1,t.h),b)},
m:function(a,b,c){var s=this.gbn()
J.o4(s.b.$1(J.i3(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.aR(this.gbn().a)},
h:function(a,b){var s=this.gbn()
return s.b.$1(J.i3(s.a,b))},
gT:function(a){var s=P.iR(this.gbn(),!1,t.h)
return new J.ag(s,s.length)}}
P.iC.prototype={
$1:function(a){return t.h.b(a)},
$S:23}
P.iD.prototype={
$1:function(a){return t.h.a(a)},
$S:61}
P.hq.prototype={
gcY:function(a){return this.$ti.c.a(this.a+this.c)},
gdR:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.aP(b)
if(s===r.gbJ(b)){q=o.b
if(q===r.gbO(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcY(b)&&p.a(q+o.d)===r.gdR(b)}else s=!1}else s=!1}else s=!1
return s},
gH:function(a){var s=this,r=s.a,q=C.c.gH(r),p=s.b,o=C.c.gH(p),n=s.$ti.c
r=C.c.gH(n.a(r+s.c))
p=C.c.gH(n.a(p+s.d))
return H.oS(H.jx(H.jx(H.jx(H.jx(0,q),o),r),p))}}
P.af.prototype={
gbJ:function(a){return this.a},
gbO:function(a){return this.b},
gaD:function(a){return this.c},
gay:function(a){return this.d}}
P.aY.prototype={$iaY:1}
P.eM.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
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
if(s)throw H.c(P.O(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$ip:1}
P.jg.prototype={
gl:function(a){return a.length}}
P.cb.prototype={$icb:1}
P.fn.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$ip:1}
P.o.prototype={
gbE:function(a){return new P.eB(a,new W.a6(a))},
ar:function(a,b,c,d){var s,r,q,p,o=H.b([],t.Q)
o.push(W.mU(null))
o.push(W.mZ())
o.push(new W.hD())
c=new W.hO(new W.dh(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.p.hW(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a6(q)
p=r.gaW(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$io:1}
P.b3.prototype={$ib3:1}
P.fB.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$ip:1}
P.he.prototype={}
P.hf.prototype={}
P.hm.prototype={}
P.hn.prototype={}
P.hA.prototype={}
P.hB.prototype={}
P.hJ.prototype={}
P.hK.prototype={}
P.i7.prototype={
gl:function(a){return a.length}}
P.er.prototype={
h:function(a,b){return P.bs(a.get(b))},
G:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bs(s.value[1]))}},
ga6:function(a){var s=H.b([],t.s)
this.G(a,new P.i8(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Not supported"))},
$iH:1}
P.i8.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
P.es.prototype={
gl:function(a){return a.length}}
P.bb.prototype={}
P.f1.prototype={
gl:function(a){return a.length}}
P.fW.prototype={}
P.ca.prototype={
eC:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.i_(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.x.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.qz(g))
return}if(t.fS.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bR("Incorrect number or type of arguments"))},
iE:function(a,b,c,d,e,f,g){return this.eC(a,b,c,d,e,f,g,null,null,null)},
$ica:1}
P.fi.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.O(b,a,null,null,null))
s=P.bs(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$ip:1}
P.hw.prototype={}
P.hx.prototype={}
K.aS.prototype={
aR:function(a,b){return!0},
i:function(a){return"all"},
$ib_:1}
K.cU.prototype={
aR:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aR(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$ib_:1}
K.ae.prototype={
aR:function(a,b){return!this.eO(0,b)},
i:function(a){return"!["+this.bV(0)+"]"}}
K.f9.prototype={
aR:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.aw(this.a),r=H.aw(this.b)
return s+".."+r},
$ib_:1}
K.u.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.Y(t.fX)
for(r=new H.bh(a,a.gl(a)),q=H.V(r).c;r.v();)s.m(0,q.a(r.d),!0)
p=P.iR(s.ga6(s),!0,t.S)
C.b.eN(p)
this.a=p},
aR:function(a,b){return C.b.C(this.a,b)},
i:function(a){return P.fo(this.a,0,null)},
$ib_:1}
L.fj.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dw(this.a.k(0,b),H.b([],t.z))
s.push(p)
return p},
i3:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aR(0,a))return p}return null},
i:function(a){return this.b},
dA:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.C(0,s==null?null:s.b))l+=" (consume)"
s=m.d
if(s==null)s=null
else{s=s.c
s=s.ga6(s)}s=J.aC(s==null?H.b([],t.s):s)
for(;s.v();){r=s.gA(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.C(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.q)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bV(0))}return l.charCodeAt(0)==0?l:l}}
L.fy.prototype={
i:function(a){var s=H.m1(this.b,"\n","\\n"),r=H.m1(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fz.prototype={
aT:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.q)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.jE.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.fj(this,b,H.b([],t.ab))
s.m(0,b,r)}return r},
S:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fz(a,P.T(s,s))
r.m(0,a,q)}return q},
d_:function(a){return this.iJ(a)},
iJ:function(a){var s=this
return P.pY(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$d_(a3,a4){if(a3===1){o=a4
q=p}while(true)switch(q){case 0:c=s.d
b=t.t
a0=H.b([],b)
a1=H.b([],b)
a2=H.b([],b)
n=H.V(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a2.length!==0)h=C.b.cV(a2,0)
else{if(!r.v()){q=3
break}h=n.a(r.d)}a1.push(h);++k
g=c==null
f=g?null:c.i3(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.fo(a1,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.x(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a1.fixed$length)H.i(P.C("removeRange"))
P.bk(0,i,a1.length)
a1.splice(0,i-0)
C.b.ac(a2,a1)
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
case 6:if(!f.c)a0.push(h)
c=f.b
g=c.d
if(g!=null){e=P.fo(a0,0,null)
g=c.d
if(g==null)l=null
else{d=g.c.h(0,e)
g=new L.fy(d==null?g.b:d,e,k)
l=g}i=a1.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.C(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.p6()
case 1:return P.p7(o)}}},t.bJ)},
i:function(a){var s,r=new P.a0(""),q=this.d
if(q!=null)r.a=""+(q.dA()+"\n")
for(q=this.a,q=q.giK(q),q=q.gT(q);q.v();){s=q.gA(q)
if(s!=this.d)r.a+=H.x(s==null?null:s.dA())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.dw.prototype={
i:function(a){return this.b.b+": "+this.bV(0)}}
O.ad.prototype={
d4:function(a,b,c){this.b=b
this.c=a},
bg:function(a,b){return this.d4(a,null,b)},
dq:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
dl:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gT:function(a){var s=this.a
return new J.ag(s,s.length)},
L:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.V(q).M("w<ad.T>")
if(q.dq(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.dl(r,H.b([b],p))}},
ac:function(a,b){var s,r
if(this.dq(b)){s=this.a
r=s.length
C.b.ac(s,b)
this.dl(r,b)}},
$ih:1}
O.dc.prototype={
gl:function(a){return this.a.length},
gt:function(){var s=this.b
return s==null?this.b=D.G():s},
aZ:function(){var s=this.b
return s==null?null:s.B(null)},
ga7:function(a){var s=this.a
if(s.length>0)return C.b.gaH(s)
else return V.ah()},
bN:function(a){this.a.push(a)
this.aZ()},
aS:function(){var s=this.a
if(s.length>0){s.pop()
this.aZ()}}}
E.ic.prototype={}
E.bC.prototype={
sab:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().O(0,s.ger())
if(b!=null)b.gt().n(0,s.ger())
s.bK(new D.z("shape",r,b))}},
aB:function(a,b){var s,r
for(s=this.y.a,s=new J.ag(s,s.length),r=H.V(s).c;s.v();)r.a(s.d).aB(0,b)},
al:function(a){var s,r,q,p=this,o=a.dx
o.a.push(o.ga7(o))
o.aZ()
a.cS(p.f)
s=C.b.gaH(a.dy)
if(p.d!=null)if(s!=null)s.ex(a,p)
for(r=p.y.a,r=new J.ag(r,r.length),q=H.V(r).c;r.v();)q.a(r.d).al(a)
a.cR()
o.aS()},
bK:function(a){var s=this.z
return s==null?null:s.B(a)},
a8:function(){return this.bK(null)},
es:function(a){this.e=null
this.bK(a)},
io:function(){return this.es(null)},
eq:function(a){return this.bK(a)},
ik:function(){return this.eq(null)},
ij:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gep(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bY()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.a8()},
im:function(a,b){var s,r
for(s=b.gT(b),r=this.gep();s.v();)s.gA(s).gt().O(0,r)
this.a8()},
i:function(a){return"Unnamed entity"}}
E.bU.prototype={
i:function(a){return this.b}}
E.c8.prototype={
i:function(a){return this.b}}
E.h5.prototype={}
E.jj.prototype={
eW:function(a,b){var s=this
s.cy.gt().n(0,new E.jk(s))
s.db.gt().n(0,new E.jl(s))
s.dx.gt().n(0,new E.jm(s))},
giv:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga7(q).K(0,s.ga7(s))
q=s}return q},
cS:function(a){var s=this.dy
return s.push(a==null?C.b.gaH(s):a)},
cR:function(){var s=this.dy
if(s.length>1)s.pop()},
dJ:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.f("May not cache a shader with no name."))
s=this.fr
if(s.cr(0,r))throw H.c(P.f('Shader cache already contains a shader by the name "'+r+'".'))
s.m(0,r,a)}}
E.jk.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:2}
E.jl.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:2}
E.jm.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:2}
E.fx.prototype={
da:function(a){this.ez()},
d9:function(){return this.da(null)},
gi9:function(){var s,r=this,q=Date.now(),p=C.c.aa(P.mc(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.Z(q,!1)
return s/p},
dt:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.cH(r*o)
r=s.clientHeight
r.toString
p=C.d.cH(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.mG(C.m,this.giA())}},
ez:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.F.fl(s)
r=W.nh(new E.jB(this),t.H)
r.toString
C.F.hq(s,r)}},
iy:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.dt()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.Z(p,!1)
q.y=P.mc(p-q.r.a).a*0.000001
p=q.cy
C.b.sl(p.a,0)
p.aZ()
p=q.db
C.b.sl(p.a,0)
p.aZ()
p=q.dx
C.b.sl(p.a,0)
p.aZ()
p=q.dy
C.b.sl(p,0)
p.push(null)
m.al(q)}q=n.Q
if(q!=null)q.B(null)}catch(o){s=H.al(o)
r=H.lY(o)
P.m0("Error: "+H.x(s))
P.m0("Stack: "+H.x(r))
throw H.c(s)}}}
E.jB.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.iy()}},
$S:32}
Z.fR.prototype={}
Z.bV.prototype={
a5:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.al(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.x(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.fS.prototype={}
Z.bW.prototype={
aQ:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
a5:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].a5(a)}},
aA:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
al:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.dk(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.q)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(l,", ")+"\nAttrs:   "+C.b.j(o,", ")}}
Z.c1.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.dk(this.c)+"'")+"]"}}
Z.bn.prototype={
gd5:function(a){var s=this.a,r=(s&$.aQ().a)!==0?3:0
if((s&$.bv().a)!==0)r+=3
if((s&$.bu().a)!==0)r+=3
if((s&$.bw().a)!==0)r+=2
if((s&$.bQ().a)!==0)r+=3
if((s&$.ek().a)!==0)r+=3
if((s&$.el().a)!==0)r+=4
if((s&$.cB().a)!==0)++r
return(s&$.bt().a)!==0?r+4:r},
hO:function(a){var s,r=$.aQ(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bv()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bu()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bw()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bQ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ek()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.el()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cB()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bt()
if((q&r.a)!==0)if(s===a)return r
return $.nU()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bn))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.aQ().a)!==0)s.push("Pos")
if((r&$.bv().a)!==0)s.push("Norm")
if((r&$.bu().a)!==0)s.push("Binm")
if((r&$.bw().a)!==0)s.push("Txt2D")
if((r&$.bQ().a)!==0)s.push("TxtCube")
if((r&$.ek().a)!==0)s.push("Clr3")
if((r&$.el().a)!==0)s.push("Clr4")
if((r&$.cB().a)!==0)s.push("Weight")
if((r&$.bt().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.ie.prototype={}
D.bY.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
O:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.C(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.O(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.C(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.O(p,b)
s=p===!0||s}return s},
B:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.S():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.G(P.iR(p,!0,t.h2),new D.iz(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.G(r,new D.iA(s))}return!0},
cv:function(){return this.B(null)},
az:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.B(s)}}}}
D.iz.prototype={
$1:function(a){a.$1(this.a)},
$S:29}
D.iA.prototype={
$1:function(a){a.$1(this.a)},
$S:29}
D.S.prototype={}
D.aV.prototype={}
D.aW.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.x(this.d)+" => "+H.x(this.e)}}
X.cE.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cE))return!1
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
X.iN.prototype={}
X.d3.prototype={}
X.iT.prototype={
bm:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.U(o.a+b.a,o.b+b.b)
o=q.a.gb7()
s=$.a9
if(s==null)s=$.a9=new V.U(0,0)
r=q.x
q.z=new P.Z(p,!1)
q.x=n
return new X.c5(a,s,r,o,n)},
cQ:function(a,b){this.r=a.a
return!1},
bv:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bu:function(a,b){var s=this.d
if(s==null)return!1
s.B(this.bm(a,b))
return!0},
is:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gb7()
r=this.x
Date.now()
q.B(new X.c6(new V.a5(a.a,a.b),s,r))
return!0},
fW:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.B(new X.d3(c,q.a.gb7(),b))
q.y=new P.Z(s,!1)
s=$.a9
q.x=s==null?$.a9=new V.U(0,0):s}}
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
X.c5.prototype={}
X.jb.prototype={
c2:function(a,b,c){var s=this,r=new P.Z(Date.now(),!1),q=s.a.gb7(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.c5(a,p,o,q,b)},
cQ:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.B(this.c2(a,b,!0))
return!0},
bv:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.B(r.c2(a,b,!0))
return!0},
bu:function(a,b){var s=this.d
if(s==null)return!1
s.B(this.c2(a,b,!1))
return!0},
it:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gb7()
Date.now()
r.B(new X.c6(new V.a5(a.a,a.b),s,b))
return!0},
gdX:function(){var s=this.b
return s==null?this.b=D.G():s},
gd0:function(){var s=this.c
return s==null?this.c=D.G():s},
geo:function(){var s=this.d
return s==null?this.d=D.G():s}}
X.c6.prototype={}
X.f8.prototype={}
X.dv.prototype={}
X.jG.prototype={
bm:function(a,b){var s,r,q,p,o=this,n=new P.Z(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a9
if(r==null){r=new V.U(0,0)
$.a9=r
s=r}else s=r}r=o.a.gb7()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.dv(q,p,r,s)},
ir:function(a){var s=this.b
if(s==null)return!1
s.B(this.bm(a,!0))
return!0},
ip:function(a){var s=this.c
if(s==null)return!1
s.B(this.bm(a,!0))
return!0},
iq:function(a){var s=this.d
if(s==null)return!1
s.B(this.bm(a,!1))
return!0}}
X.fO.prototype={
gbb:function(a){var s=this.b
return s==null?this.b=new X.iN(new X.a8(!1,!1,!1),P.d0(t.S)):s},
gaf:function(){var s,r=this.c
if(r==null){r=$.a9
if(r==null){r=$.a9=new V.U(0,0)
s=r}else s=r
r=this.c=new X.jb(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
gas:function(){var s=this.d
if(s==null){s=$.a9
if(s==null)s=$.a9=new V.U(0,0)
s=this.d=new X.iT(this,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return s},
gbe:function(){var s,r=this.e
if(r==null){r=$.a9
if(r==null){r=$.a9=new V.U(0,0)
s=r}else s=r
r=this.e=new X.jG(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
gb7:function(){var s=this.a
return V.my(0,0,C.i.gdT(s).c,C.i.gdT(s).d)},
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
return new X.eL(p,new X.a8(s,r,q))},
b3:function(a){var s,r,q=this.gbb(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a8(p,s,r)},
ci:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gbb(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a8(s,r===!0,q===!0)},
aO:function(a){var s,r,q,p
if(a==null){s=$.a9
return s==null?$.a9=new V.U(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.U(r-p,q-s)},
bo:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a5(r,s)},
cc:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.a9(n)
m=o.pageY
m.toString
C.d.a9(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.a9(l)
l=o.pageY
l.toString
l=C.d.a9(l)
k=j.top
k.toString
s.push(new V.U(n-m,l-k))}return s},
aL:function(a){var s,r,q,p
if(a==null)return new X.cE(0,new X.a8(!1,!1,!1))
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
return new X.cE(s,new X.a8(r,q,p))},
c3:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
fQ:function(a){return this.f=!0},
fE:function(a){return this.f=!1},
fK:function(a){if(this.f&&this.c3(a))a.preventDefault()},
fU:function(a){var s,r,q=this
if(!q.f)return
s=q.dg(a)
r=q.gbb(q)
r.c=s.b
r.d.n(0,s.a)},
fS:function(a){var s,r,q=this
if(!q.f)return
s=q.dg(a)
r=q.gbb(q)
r.c=s.b
r.d.O(0,s.a)},
fY:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.b3(a)
if(p.x){s=p.aL(a)
r=p.bo(a)
if(p.gas().cQ(s,r))a.preventDefault()
return}s=p.aL(a)
q=p.aO(a)
if(p.gaf().cQ(s,q))a.preventDefault()},
h1:function(a){var s,r,q,p=this
p.b3(a)
s=p.aL(a)
if(p.x){r=p.bo(a)
if(p.gas().bv(s,r))a.preventDefault()
return}q=p.aO(a)
if(p.gaf().bv(s,q))a.preventDefault()},
fO:function(a){var s,r,q,p=this
if(!p.c3(a)){p.b3(a)
s=p.aL(a)
if(p.x){r=p.bo(a)
if(p.gas().bv(s,r))a.preventDefault()
return}q=p.aO(a)
if(p.gaf().bv(s,q))a.preventDefault()}},
h_:function(a){var s,r,q,p=this
p.b3(a)
s=p.aL(a)
if(p.x){r=p.bo(a)
if(p.gas().bu(s,r))a.preventDefault()
return}q=p.aO(a)
if(p.gaf().bu(s,q))a.preventDefault()},
fM:function(a){var s,r,q,p=this
if(!p.c3(a)){p.b3(a)
s=p.aL(a)
if(p.x){r=p.bo(a)
if(p.gas().bu(s,r))a.preventDefault()
return}q=p.aO(a)
if(p.gaf().bu(s,q))a.preventDefault()}},
h3:function(a){var s,r,q=this
q.b3(a)
s=new V.a5(C.E.ghZ(a),C.E.gi_(a)).K(0,q.Q)
if(q.x){if(q.gas().is(s))a.preventDefault()
return}r=q.aO(a)
if(q.gaf().it(s,r))a.preventDefault()},
h5:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aL(q.y)
r=q.aO(q.y)
q.gas().fW(s,r,p)}},
hl:function(a){var s,r=this
r.a.focus()
r.f=!0
r.ci(a)
s=r.cc(a)
if(r.gbe().ir(s))a.preventDefault()},
hh:function(a){var s
this.ci(a)
s=this.cc(a)
if(this.gbe().ip(s))a.preventDefault()},
hj:function(a){var s
this.ci(a)
s=this.cc(a)
if(this.gbe().iq(s))a.preventDefault()}}
D.bX.prototype={
aJ:function(a){var s=this.r
return s==null?null:s.B(a)},
f_:function(){return this.aJ(null)},
$iau:1}
D.cZ.prototype={
gt:function(){var s=this.y
return s==null?this.y=D.G():s},
gem:function(){var s=this.z
return s==null?this.z=D.G():s},
aJ:function(a){var s=this.y
return s==null?null:s.B(a)},
dn:function(a){var s=this.z
return s==null?null:s.B(a)},
fV:function(){return this.dn(null)},
h7:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.eY(a[r]))return!1
return!0},
fw:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gdm(),q=this.f,p=t.a,o=0;o<b.length;b.length===s||(0,H.q)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.bY()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.aJ(new D.aV())},
hb:function(a,b){var s,r,q,p
for(s=b.gT(b),r=this.gdm(),q=this.e;s.v();){p=s.gA(s)
C.b.O(q,p)
p.gt().O(0,r)}this.aJ(new D.aW())},
eY:function(a){var s=C.b.C(this.f,a)
return s}}
V.X.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.X))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.am.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.am))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.ix.prototype={}
V.db.prototype={
aj:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.db))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cz(H.b([o.a,o.d,o.r],n),3,0),l=V.cz(H.b([o.b,o.e,o.x],n),3,0),k=V.cz(H.b([o.c,o.f,o.y],n),3,0)
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
V.bi.prototype={
aj:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
cJ:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.F().toString
if(Math.abs(b3-0)<1e-9)return V.ah()
s=1/b3
r=-l
q=-a2
return V.b0((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
K:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.b0(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bP:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.D(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
by:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.K(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
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
I:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cz(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cz(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cz(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cz(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
w:function(){return this.I("")}}
V.U.prototype={
am:function(a){return new V.a5(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"},
w:function(){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.K.prototype={
W:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
aX:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
K:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.K))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"},
w:function(){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.av.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.av))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.fb.prototype={
gaI:function(){var s=this.c,r=this.d
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
return"["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+", "+V.A(s.d,3,0)+"]"}}
V.a5.prototype={
cK:function(a){return Math.sqrt(this.ad(this))},
ad:function(a){return this.a*a.a+this.b*a.b},
K:function(a,b){return new V.a5(this.a*b,this.b*b)},
an:function(a,b){var s
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.bM
return s==null?$.bM=new V.a5(0,0):s}return new V.a5(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.D.prototype={
cK:function(a){return Math.sqrt(this.ad(this))},
ad:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cL:function(a,b){return new V.D(V.i1(this.a,a.a,b),V.i1(this.b,a.b,b),V.i1(this.c,a.c,b))},
D:function(){var s=this,r=Math.sqrt(s.ad(s))
if(r===1)return s
return s.an(0,r)},
aP:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.D(s*r-q*p,q*o-n*r,n*p-s*o)},
W:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
bf:function(a){return new V.D(-this.a,-this.b,-this.c)},
K:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
an:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.dK()
return new V.D(this.a/b,this.b/b,this.c/b)},
el:function(){$.F().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.D))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"},
w:function(){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.ih.prototype={
bW:function(a){var s=V.li(a,this.c,this.b)
return s},
gt:function(){var s=this.y
return s==null?this.y=D.G():s},
N:function(a){var s=this.y
return s==null?null:s.B(a)},
sd1:function(a,b){},
scN:function(a){var s,r=this,q=r.b
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bW(s)}r.N(new D.z("maximumLocation",q,r.b))}},
scP:function(a){var s,r=this,q=r.c
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bW(s)}r.N(new D.z("minimumLocation",q,r.c))}},
sa1:function(a,b){var s,r=this
b=r.bW(b)
s=r.d
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.N(new D.z("location",s,b))}},
scO:function(a){var s,r,q=this,p=q.e
$.F().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.N(new D.z("maximumVelocity",p,a))}},
sa2:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.N(new D.z("velocity",r,a))}},
scu:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.N(new D.z("dampening",s,a))}},
aB:function(a,b){var s,r,q,p=this,o=p.f
$.F().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa1(0,p.d+s*b)
o=p.x
$.F().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa2(s)}}}
U.cH.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.G():s},
aV:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cH))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.c_.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.G():s},
N:function(a){var s=this.e
return s==null?null:s.B(a)},
ah:function(){return this.N(null)},
f1:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gb2(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gt()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.N(new D.aV())},
h9:function(a,b){var s,r
for(s=b.gT(b),r=this.gb2();s.v();)s.gA(s).gt().O(0,r)
this.N(new D.aW())},
aV:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ag(o,o.length),n=H.V(o).c,s=null;o.v();){r=n.a(o.d)
if(r!=null){q=r.aV(0,b,c)
s=s==null?q:q.K(0,s)}}p.f=s==null?V.ah():s
o=p.e
if(o!=null)o.az(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c_))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.W(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia_:1}
U.a_.prototype={}
U.dm.prototype={
gt:function(){var s=this.y
return s==null?this.y=D.G():s},
N:function(a){var s=this.y
return s==null?null:s.B(a)},
seG:function(a){var s
a=V.li(a,0,6.283185307179586)
s=this.a
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.N(new D.z("yaw",s,a))}},
sew:function(a,b){var s
b=V.li(b,0,6.283185307179586)
s=this.b
$.F().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.N(new D.z("pitch",s,b))}},
seA:function(a){var s
a=V.li(a,0,6.283185307179586)
s=this.c
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.N(new D.z("roll",s,a))}},
aV:function(a,b,c){var s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.seG(s.a+s.d*b.y)
s.sew(0,s.b+s.e*b.y)
s.seA(s.c+s.f*b.y)
s.x=V.mq(s.c).K(0,V.mp(s.b)).K(0,V.mo(s.a))
r=s.y
if(r!=null)r.az(0)}return s.x},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.dm))return!1
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
return"Rotator: ["+V.A(s.a,3,0)+", "+V.A(s.b,3,0)+", "+V.A(s.c,3,0)+"], ["+V.A(s.d,3,0)+", "+V.A(s.e,3,0)+", "+V.A(s.f,3,0)+"]"}}
U.dH.prototype={
gt:function(){var s=this.cy
return s==null?this.cy=D.G():s},
N:function(a){var s=this.cy
return s==null?null:s.B(a)},
ah:function(){return this.N(null)},
bq:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.gaf().gdX().n(0,s.gc4())
a.gaf().geo().n(0,s.gc6())
a.gaf().gd0().n(0,s.gc8())
return!0},
c5:function(a){var s=this,r=s.c,q=s.a
if(!r.q(0,q==null?null:q.gbb(q).c))return
s.x=s.y=!0
s.z=s.b.d},
c7:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.am(a.d)
if(s.ad(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sa1(0,-a.y.am(r).K(0,2).an(0,s.gaI()).a*2.5+p.z)
q.sa2(0)
p.Q=a.z.am(r).K(0,2).an(0,s.gaI())
p.ah()},
c9:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.ad(s)>0.0001){r.b.sa2(r.Q.a*10*2.5)
r.ah()}},
aV:function(a,b,c){var s=this,r=s.ch,q=b.e
if(r<q){s.ch=q
r=s.b
r.aB(0,b.y)
s.cx=V.mq(r.d)}return s.cx},
$ia_:1}
U.dI.prototype={
gt:function(){var s=this.fx
return s==null?this.fx=D.G():s},
N:function(a){var s=this.fx
return s==null?null:s.B(a)},
ah:function(){return this.N(null)},
bq:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.gaf().gdX().n(0,q.gc4())
a.gaf().geo().n(0,q.gc6())
a.gaf().gd0().n(0,q.gc8())
s=a.gas()
r=s.f
s=r==null?s.f=D.G():r
s.n(0,q.gfn())
s=a.gas()
r=s.d
s=r==null?s.d=D.G():r
s.n(0,q.gfp())
s=a.gbe()
r=s.b
s=r==null?s.b=D.G():r
s.n(0,q.ghF())
s=a.gbe()
r=s.d
s=r==null?s.d=D.G():r
s.n(0,q.ghD())
s=a.gbe()
r=s.c
s=r==null?s.c=D.G():r
s.n(0,q.ghB())
return!0},
b0:function(a){return new V.a5(a.a,a.b)},
c5:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
c7:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.am(a.d)
if(s.ad(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.b0(a.y.am(r).K(0,2).an(0,s.gaI()))
p=n.c
p.sa1(0,-q.a*2.5+n.cy)
o=n.b
o.sa1(0,-q.b*2.5+n.db)
o.sa2(0)
p.sa2(0)
n.dx=n.b0(a.z.am(r).K(0,2).an(0,s.gaI()))
n.ah()},
c9:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ad(s)>0.0001){r.c.sa2(-r.dx.a*10*2.5)
r.b.sa2(-r.dx.b*10*2.5)
r.ah()}},
fo:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
fq:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.b0(a.y.am(r).K(0,2).an(0,s.gaI()))
p=n.c
p.sa1(0,-q.a*2.5+n.cy)
o=n.b
o.sa1(0,-q.b*2.5+n.db)
o.sa2(0)
p.sa2(0)
n.dx=n.b0(a.z.am(r).K(0,2).an(0,s.gaI()))
n.ah()},
hG:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hE:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.am(a.d)
if(s.ad(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.b0(a.y.am(r).K(0,2).an(0,s.gaI()))
p=n.c
p.sa1(0,-q.a*2.5+n.cy)
o=n.b
o.sa1(0,-q.b*2.5+n.db)
o.sa2(0)
p.sa2(0)
n.dx=n.b0(a.z.am(r).K(0,2).an(0,s.gaI()))
n.ah()},
hC:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ad(s)>0.0001){r.c.sa2(-r.dx.a*10*2.5)
r.b.sa2(-r.dx.b*10*2.5)
r.ah()}},
aV:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(q<p){r.dy=p
s=b.y
q=r.c
q.aB(0,s)
p=r.b
p.aB(0,s)
r.fr=V.mo(p.d).K(0,V.mp(q.d))}return r.fr},
$ia_:1}
U.dJ.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.G():s},
N:function(a){var s=this.r
return s==null?null:s.B(a)},
bq:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gaf()
r=s.e
s=r==null?s.e=D.G():r
r=this.gft()
s.n(0,r)
s=a.gas()
q=s.e;(q==null?s.e=D.G():q).n(0,r)
return!0},
fu:function(a){var s=this,r=s.b,q=s.a
if(!r.q(0,q==null?null:q.gbb(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.N(new D.z("zoom",r,q))}},
aV:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.b0(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$ia_:1}
M.cG.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.G():s},
a_:function(a){var s=this.r
return s==null?null:s.B(a)},
bj:function(){return this.a_(null)},
hd:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gZ(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p].gt()
n=o.a;(n==null?o.a=H.b([],q):n).push(r)}this.a_(new D.aV())},
hf:function(a,b){var s,r
for(s=b.gT(b),r=this.gZ();s.v();)s.gA(s).gt().O(0,r)
this.a_(new D.aW())},
al:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.ag(s,s.length),r=H.V(s).c;s.v();)r.a(s.d).al(a)
q.f=!1},
$iaL:1}
M.cK.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.G():s},
a_:function(a){var s=this.r
return s==null?null:s.B(a)},
bj:function(){return this.a_(null)},
sb6:function(a){var s,r,q=this
if(a==null)a=new X.iJ()
s=q.b
if(s!==a){if(s!=null)s.gt().O(0,q.gZ())
r=q.b
q.b=a
a.gt().n(0,q.gZ())
q.a_(new D.z("camera",r,q.b))}},
sbx:function(a,b){var s,r,q=this
if(b==null)b=X.mg(null)
s=q.c
if(s!==b){if(s!=null)s.gt().O(0,q.gZ())
r=q.c
q.c=b
b.gt().n(0,q.gZ())
q.a_(new D.z("target",r,q.c))}},
sbd:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().O(0,r.gZ())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.gZ())
r.a_(new D.z("technique",s,r.d))}},
al:function(a){var s,r=this
a.cS(r.d)
s=r.c
if(s!=null)s.a5(a)
s=r.b
if(s!=null)s.a5(a)
s=r.e
s.aB(0,a)
s.al(a)
s=r.b
if(s!=null)s.aA(a)
s=r.c
if(s!=null)s.aA(a)
a.cR()},
$iaL:1}
M.cQ.prototype={
a_:function(a){var s=this.y
return s==null?null:s.B(a)},
bj:function(){return this.a_(null)},
fG:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gZ(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bY()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.a_(new D.aV())},
fI:function(a,b){var s,r
for(s=b.gT(b),r=this.gZ();s.v();)s.gA(s).gt().O(0,r)
this.a_(new D.aW())},
sb6:function(a){var s,r,q=this
if(a==null)a=X.ly(null)
s=q.b
if(s!==a){if(s!=null)s.gt().O(0,q.gZ())
r=q.b
q.b=a
a.gt().n(0,q.gZ())
q.a_(new D.z("camera",r,q.b))}},
sbx:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gt().O(0,r.gZ())
s=r.c
r.c=b
b.gt().n(0,r.gZ())
r.a_(new D.z("target",s,r.c))}},
sbd:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().O(0,r.gZ())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.gZ())
r.a_(new D.z("technique",s,r.d))}},
gt:function(){var s=this.y
return s==null?this.y=D.G():s},
al:function(a){var s,r,q,p=this
a.cS(p.d)
s=p.c
if(s!=null)s.a5(a)
s=p.b
if(s!=null)s.a5(a)
s=p.d
if(s!=null)s.aB(0,a)
for(s=p.e.a,r=new J.ag(s,s.length),q=H.V(r).c;r.v();)q.a(r.d).aB(0,a)
for(s=new J.ag(s,s.length),r=H.V(s).c;s.v();)r.a(s.d).al(a)
if(p.b!=null){a.cy.aS()
a.db.aS()}s=p.c
if(s!=null)s.aA(a)
a.cR()},
$iaL:1}
A.eq.prototype={}
A.i6.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
i0:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dW:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.ar.prototype={
gaC:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.ar))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.d7.prototype={
eV:function(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6=u.C,c7="Required uniform value, ",c8=", was not defined or used in shader.",c9=c4.x,d0=new P.a0(""),d1=c9.fr
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
A.qc(c9,d0)
A.qe(c9,d0)
A.qd(c9,d0)
A.qg(c9,d0)
A.qh(c9,d0)
A.qf(c9,d0)
A.qi(c9,d0)
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
c4.ei(0,s.charCodeAt(0)==0?s:s,A.qb(c9))
c4.y=c4.gai(c4).h(0,"posAttr")
c4.Q=c4.gai(c4).h(0,"normAttr")
c4.z=c4.gai(c4).h(0,"binmAttr")
c4.ch=c4.gai(c4).h(0,"txt2DAttr")
c4.cx=c4.gai(c4).h(0,"txtCubeAttr")
c4.cy=c4.gai(c4).h(0,"bendAttr")
if(c9.dy)c4.fy=t.j.a(c4.gE().P(0,"invViewMat"))
if(d1)c4.db=t.j.a(c4.gE().P(0,"objMat"))
if(r)c4.dx=t.j.a(c4.gE().P(0,"viewObjMat"))
d1=t.j
c4.fr=d1.a(c4.gE().P(0,"projViewObjMat"))
if(c9.go)c4.dy=d1.a(c4.gE().P(0,"viewMat"))
if(c9.x1)c4.go=t.bK.a(c4.gE().P(0,"txt2DMat"))
if(c9.x2)c4.id=d1.a(c4.gE().P(0,"txtCubeMat"))
if(c9.y1)c4.k1=d1.a(c4.gE().P(0,"colorMat"))
c4.k3=H.b([],t.p)
s=c9.b9
if(s>0){c4.k2=t.w.a(c4.gE().P(0,"bendMatCount"))
for(n=0;n<s;++n){r=c4.k3
m=c4.r
if(m==null)H.i(P.f(c6))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.i(P.f(c7+q+c8))
r.push(d1.a(l))}}d1=c9.a
if(d1.a)c4.k4=t.g.a(c4.gE().P(0,"emissionClr"))
if(d1.b)c4.r1=t.G.a(c4.gE().P(0,"emissionTxt"))
d1=c9.b
if(d1.a)c4.rx=t.g.a(c4.gE().P(0,"ambientClr"))
if(d1.b)c4.ry=t.G.a(c4.gE().P(0,"ambientTxt"))
d1=c9.c
if(d1.a)c4.x2=t.g.a(c4.gE().P(0,"diffuseClr"))
if(d1.b)c4.y1=t.G.a(c4.gE().P(0,"diffuseTxt"))
d1=c9.d
if(d1.a)c4.b9=t.g.a(c4.gE().P(0,"invDiffuseClr"))
if(d1.b)c4.ba=t.G.a(c4.gE().P(0,"invDiffuseTxt"))
d1=c9.e
s=d1.a
if(s||d1.b||!1){c4.e2=t.v.a(c4.gE().P(0,"shininess"))
if(s)c4.e0=t.g.a(c4.gE().P(0,"specularClr"))
if(d1.b)c4.e1=t.G.a(c4.gE().P(0,"specularTxt"))}if(c9.f.b)c4.e3=t.G.a(c4.gE().P(0,"bumpTxt"))
if(c9.db){c4.e4=t.l.a(c4.gE().P(0,"envSampler"))
d1=c9.r
if(d1.a)c4.e5=t.g.a(c4.gE().P(0,"reflectClr"))
if(d1.b)c4.e6=t.G.a(c4.gE().P(0,"reflectTxt"))
d1=c9.x
s=d1.a
if(s||d1.b||!1){c4.e7=t.v.a(c4.gE().P(0,"refraction"))
if(s)c4.e8=t.g.a(c4.gE().P(0,"refractClr"))
if(d1.b)c4.e9=t.G.a(c4.gE().P(0,"refractTxt"))}}d1=c9.y
if(d1.a)c4.ea=t.v.a(c4.gE().P(0,"alpha"))
if(d1.b)c4.eb=t.G.a(c4.gE().P(0,"alphaTxt"))
if(c9.k1){d1=c9.z
s=d1.length
if(s!==0){r=t.S
c4.cw=P.T(r,t.W)
c4.cz=P.T(r,t.O)
for(r=t.w,q=t.g,p=t.v,o=t.c,k=0;k<d1.length;d1.length===s||(0,H.q)(d1),++k){j=d1[k]
i=j.a
h="barLight"+i
g=H.b([],o)
for(f=j.b,e=(i&4)!==0,n=0;n<f;++n){m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].startPnt"
l=m.h(0,d)
if(l==null)H.i(P.f(c7+d+c8))
q.a(l)
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].endPnt"
c=m.h(0,d)
if(c==null)H.i(P.f(c7+d+c8))
q.a(c)
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].color"
b=m.h(0,d)
if(b==null)H.i(P.f(c7+d+c8))
q.a(b)
if(e){m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].att0"
a=m.h(0,d)
if(a==null)H.i(P.f(c7+d+c8))
p.a(a)
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].att1"
a0=m.h(0,d)
if(a0==null)H.i(P.f(c7+d+c8))
p.a(a0)
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].att2"
a1=m.h(0,d)
if(a1==null)H.i(P.f(c7+d+c8))
p.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c5
a3=a2
a4=a3}g.push(new A.dA(l,c,b,a4,a3,a2))}c4.cz.m(0,i,g)
f=c4.cw
m=c4.r
if(m==null)H.i(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.i(P.f(c7+e+c8))
f.m(0,i,r.a(l))}}d1=c9.Q
s=d1.length
if(s!==0){r=t.S
c4.cA=P.T(r,t.W)
c4.cB=P.T(r,t.d)
for(r=t.w,q=t.g,p=t.G,o=t.V,k=0;k<d1.length;d1.length===s||(0,H.q)(d1),++k){j=d1[k]
i=j.a
h="dirLight"+i
g=H.b([],o)
for(f=j.b,e=(i&1)!==0,n=0;n<f;++n){if(e){m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].objUp"
l=m.h(0,d)
if(l==null)H.i(P.f(c7+d+c8))
q.a(l)
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].objRight"
c=m.h(0,d)
if(c==null)H.i(P.f(c7+d+c8))
q.a(c)
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].objDir"
b=m.h(0,d)
if(b==null)H.i(P.f(c7+d+c8))
q.a(b)
a5=b
a6=c
a7=l}else{a5=c5
a6=a5
a7=a6}m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].viewDir"
l=m.h(0,d)
if(l==null)H.i(P.f(c7+d+c8))
q.a(l)
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"s["+n+"].color"
c=m.h(0,d)
if(c==null)H.i(P.f(c7+d+c8))
q.a(c)
if(e){m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"sTexture2D"+n
b=m.h(0,d)
if(b==null)H.i(P.f(c7+d+c8))
p.a(b)
a8=b}else a8=c5
g.push(new A.dB(a7,a6,a5,l,c,a8))}c4.cB.m(0,i,g)
f=c4.cA
m=c4.r
if(m==null)H.i(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.i(P.f(c7+e+c8))
f.m(0,i,r.a(l))}}d1=c9.ch
s=d1.length
if(s!==0){r=t.S
c4.cC=P.T(r,t.W)
c4.cD=P.T(r,t.r)
for(r=t.w,q=t.g,p=t.bK,o=t.l,f=t.bw,e=t.v,d=t.B,k=0;k<d1.length;d1.length===s||(0,H.q)(d1),++k){j=d1[k]
i=j.a
h="pointLight"+i
g=H.b([],d)
for(a9=j.b,b0=(i&4)!==0,b1=(i&2)!==0,b2=(i&1)!==0,b3=(i&3)!==0,n=0;n<a9;++n){m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].point"
l=m.h(0,b4)
if(l==null)H.i(P.f(c7+b4+c8))
q.a(l)
m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].viewPnt"
c=m.h(0,b4)
if(c==null)H.i(P.f(c7+b4+c8))
q.a(c)
m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].color"
b=m.h(0,b4)
if(b==null)H.i(P.f(c7+b4+c8))
q.a(b)
if(b3){m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].invViewRotMat"
a=m.h(0,b4)
if(a==null)H.i(P.f(c7+b4+c8))
p.a(a)
b5=a}else b5=c5
if(b2){m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"sTextureCube"+n
a=m.h(0,b4)
if(a==null)H.i(P.f(c7+b4+c8))
o.a(a)
a8=a}else a8=c5
if(b1){m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"sShadowCube"+n
a=m.h(0,b4)
if(a==null)H.i(P.f(c7+b4+c8))
o.a(a)
m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].shadowAdj"
a0=m.h(0,b4)
if(a0==null)H.i(P.f(c7+b4+c8))
f.a(a0)
b6=a
b7=a0}else{b6=c5
b7=b6}if(b0){m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].att0"
a=m.h(0,b4)
if(a==null)H.i(P.f(c7+b4+c8))
e.a(a)
m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].att1"
a0=m.h(0,b4)
if(a0==null)H.i(P.f(c7+b4+c8))
e.a(a0)
m=c4.r
if(m==null)H.i(P.f(c6))
b4=h+"s["+n+"].att2"
a1=m.h(0,b4)
if(a1==null)H.i(P.f(c7+b4+c8))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c5
a3=a2
a4=a3}g.push(new A.dD(l,c,b5,b,a8,b6,b7,a4,a3,a2))}c4.cD.m(0,i,g)
a9=c4.cC
m=c4.r
if(m==null)H.i(P.f(c6))
b0=h+"Count"
l=m.h(0,b0)
if(l==null)H.i(P.f(c7+b0+c8))
a9.m(0,i,r.a(l))}}c9=c9.cx
d1=c9.length
if(d1!==0){s=t.S
c4.cE=P.T(s,t.W)
c4.cF=P.T(s,t.R)
for(s=t.w,r=t.g,q=t.v,p=t.bw,o=t.G,f=t.J,k=0;k<c9.length;c9.length===d1||(0,H.q)(c9),++k){j=c9[k]
i=j.a
h="spotLight"+i
g=H.b([],f)
for(e=j.b,d=(i&2)!==0,a9=(i&1)!==0,b0=(i&4)!==0,b1=(i&8)!==0,b2=(i&3)!==0,n=0;n<e;++n){m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].objPnt"
l=m.h(0,b3)
if(l==null)H.i(P.f(c7+b3+c8))
r.a(l)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].objDir"
c=m.h(0,b3)
if(c==null)H.i(P.f(c7+b3+c8))
r.a(c)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].viewPnt"
b=m.h(0,b3)
if(b==null)H.i(P.f(c7+b3+c8))
r.a(b)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].color"
a=m.h(0,b3)
if(a==null)H.i(P.f(c7+b3+c8))
r.a(a)
if(b2){m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].objUp"
a0=m.h(0,b3)
if(a0==null)H.i(P.f(c7+b3+c8))
r.a(a0)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].objRight"
a1=m.h(0,b3)
if(a1==null)H.i(P.f(c7+b3+c8))
r.a(a1)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].tuScalar"
b8=m.h(0,b3)
if(b8==null)H.i(P.f(c7+b3+c8))
q.a(b8)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].tvScalar"
b9=m.h(0,b3)
if(b9==null)H.i(P.f(c7+b3+c8))
q.a(b9)
c0=b9
c1=b8
a6=a1
a7=a0}else{c0=c5
c1=c0
a6=c1
a7=a6}if(d){m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].shadowAdj"
a0=m.h(0,b3)
if(a0==null)H.i(P.f(c7+b3+c8))
p.a(a0)
b7=a0}else b7=c5
if(b1){m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].cutoff"
a0=m.h(0,b3)
if(a0==null)H.i(P.f(c7+b3+c8))
q.a(a0)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].coneAngle"
a1=m.h(0,b3)
if(a1==null)H.i(P.f(c7+b3+c8))
q.a(a1)
c2=a1
c3=a0}else{c2=c5
c3=c2}if(b0){m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].att0"
a0=m.h(0,b3)
if(a0==null)H.i(P.f(c7+b3+c8))
q.a(a0)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].att1"
a1=m.h(0,b3)
if(a1==null)H.i(P.f(c7+b3+c8))
q.a(a1)
m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"s["+n+"].att2"
b8=m.h(0,b3)
if(b8==null)H.i(P.f(c7+b3+c8))
q.a(b8)
a2=b8
a3=a1
a4=a0}else{a2=c5
a3=a2
a4=a3}if(a9){m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"sTexture2D"+n
a0=m.h(0,b3)
if(a0==null)H.i(P.f(c7+b3+c8))
o.a(a0)
a8=a0}else a8=c5
if(d){m=c4.r
if(m==null)H.i(P.f(c6))
b3=h+"sShadow2D"+n
a0=m.h(0,b3)
if(a0==null)H.i(P.f(c7+b3+c8))
o.a(a0)
b6=a0}else b6=c5
g.push(new A.dG(l,c,b,a,a7,a6,c1,c0,b7,c3,c2,a4,a3,a2,a8,b6))}c4.cF.m(0,i,g)
e=c4.cE
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"Count"
l=m.h(0,d)
if(l==null)H.i(P.f(c7+d+c8))
e.m(0,i,s.a(l))}}}},
aw:function(a,b){if(b!=null&&b.d)if(a!=null)a.eK(b)},
hv:function(a,b){}}
A.ba.prototype={
i:function(a){return"barLight"+this.a}}
A.bc.prototype={
i:function(a){return"dirLight"+this.a}}
A.bj.prototype={
i:function(a){return"pointLight"+this.a}}
A.bl.prototype={
i:function(a){return"spotLight"+this.a}}
A.iX.prototype={
i:function(a){return this.ba}}
A.dA.prototype={}
A.dB.prototype={}
A.dD.prototype={}
A.dG.prototype={}
A.cc.prototype={
ei:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.dh(b,35633)
r=n.dh(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaM(),s)
q.attachShader(n.gaM(),r)
q.linkProgram(n.gaM())
if(!H.na(q.getProgramParameter(n.gaM(),35714))){o=q.getProgramInfoLog(n.gaM())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.i(P.f("Failed to link shader: "+o))}n.hx()
n.hz()},
gai:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gE:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaM:function(){var s=this.e
if(s==null)throw H.c(P.f(u.F))
return s},
a5:function(a){a.a.useProgram(this.e)
this.gai(this).i0()},
dh:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.na(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.x(q)+'": '+s))}return q},
hx:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.hZ(l.getProgramParameter(o.gaM(),35721))
for(s=0;s<k;++s){r=o.e
if(r==null)H.i(P.f(n))
q=l.getActiveAttrib(r,s)
q.toString
r=o.e
if(r==null)H.i(P.f(n))
p=q.name
p.toString
p=l.getAttribLocation(r,p)
p.toString
q=q.name
q.toString
m.push(new A.eq(l,q,p))}o.f=new A.i6(m)},
hz:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.hZ(j.getProgramParameter(m.gaM(),35718))
for(s=0;s<i;++s){r=m.e
if(r==null)H.i(P.f(l))
q=j.getActiveUniform(r,s)
q.toString
r=m.e
if(r==null)H.i(P.f(l))
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
k.push(m.hX(o,n,q,p))}m.r=new A.jL(k)},
b_:function(a,b,c){var s=this.a
if(a===1)return new A.ci(s,b,c)
else return A.lD(s,this.e,b,a,c)},
fi:function(a,b,c){var s=this.a
if(a===1)return new A.dE(s,b,c)
else return A.lD(s,this.e,b,a,c)},
fj:function(a,b,c){var s=this.a
if(a===1)return new A.dF(s,b,c)
else return A.lD(s,this.e,b,a,c)},
bC:function(a,b){return new P.h7(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hX:function(a,b,c,d){var s=this
switch(a){case 5120:return s.b_(b,c,d)
case 5121:return s.b_(b,c,d)
case 5122:return s.b_(b,c,d)
case 5123:return s.b_(b,c,d)
case 5124:return s.b_(b,c,d)
case 5125:return s.b_(b,c,d)
case 5126:return new A.dx(s.a,c,d)
case 35664:return new A.fE(s.a,c,d)
case 35665:return new A.dy(s.a,c,d)
case 35666:return new A.dz(s.a,c,d)
case 35667:return new A.fF(s.a,c,d)
case 35668:return new A.fG(s.a,c,d)
case 35669:return new A.fH(s.a,c,d)
case 35674:return new A.fI(s.a,c,d)
case 35675:return new A.dC(s.a,c,d)
case 35676:return new A.cj(s.a,c,d)
case 35678:return s.fi(b,c,d)
case 35680:return s.fj(b,c,d)
case 35670:throw H.c(s.bC("BOOL",c))
case 35671:throw H.c(s.bC("BOOL_VEC2",c))
case 35672:throw H.c(s.bC("BOOL_VEC3",c))
case 35673:throw H.c(s.bC("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.ds.prototype={}
A.a2.prototype={}
A.jL.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
P:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.w()},
w:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.ci.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fF.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fG.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fH.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fD.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.dx.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.fE.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dy.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dz.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.fI.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dC.prototype={
ao:function(a){var s=new Float32Array(H.cu(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.cj.prototype={
ao:function(a){var s=new Float32Array(H.cu(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dE.prototype={
eK:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.dF.prototype={
eL:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.kz.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cL(q.b,b).cL(q.d.cL(q.c,b),c)
a.sa1(0,new V.K(p.a,p.b,p.c))
a.seD(p.D())
q=1-b
s=1-c
a.sdP(new V.av(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)},
$S:5}
F.kN.prototype={
$2:function(a,b){return V.i1(this.a,this.b,b)},
$S:9}
F.kP.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.i1(-1,1,c),n=this.a.$2(b,c)
q=-q*n
s=p*n
a.sa1(0,new V.K(q,s,o))
a.seD(new V.D(q,s,o).D())
a.sdP(new V.av(1-c,2+c,-1,-1))},
$S:5}
F.kQ.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:16}
F.kR.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:16}
F.lg.prototype={
$2:function(a,b){return 0},
$S:9}
F.lf.prototype={
$3:function(a,b,c){var s,r=this.b.$2(b,c)
if(typeof r!=="number")return H.ns(r)
s=a.f
r=(s!=null?new V.D(s.a,s.b,s.c):V.lF()).D().K(0,this.a+r)
a.sa1(0,new V.K(r.a,r.b,r.c))},
$S:5}
F.lh.prototype={
$1:function(a){return new V.K(Math.cos(a),Math.sin(a),0)},
$S:25}
F.l_.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.K(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)},
$S:25}
F.kO.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.m4(l.$1(m),k)
k=J.m4(l.$1(m+3.141592653589793/n.c),k).aX(0,j)
s=new V.D(k.a,k.b,k.c).D()
r=$.mP
if(r==null){r=new V.D(1,0,0)
$.mP=r}q=s.aP(!s.q(0,r)?V.lF():r).D()
r=q.aP(s).D()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.K(0,l*k)
k=q.K(0,o*k)
a.sa1(0,j.W(0,new V.K(l.a-k.a,l.b-k.b,l.c-k.c)))},
$S:5}
F.at.prototype={
aY:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.cj(a)
s.ck(b)
s.hw(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gU().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a8()}},
br:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.O(r.gU().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a8()}}s.cd()
s.ce()
s.ho()},
cj:function(a){this.a=a
a.gU().b.push(this)},
ck:function(a){this.b=a
a.gU().c.push(this)},
hw:function(a){this.c=a
a.gU().d.push(this)},
cd:function(){var s=this.a
if(s!=null)C.b.O(s.gU().b,this)
this.a=null},
ce:function(){var s=this.b
if(s!=null)C.b.O(s.gU().c,this)
this.b=null},
ho:function(){var s=this.c
if(s!=null)C.b.O(s.gU().d,this)
this.c=null},
fb:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.dK()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.el())return p
return q.D()},
fd:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aX(0,n)
q=new V.D(o.a,o.b,o.c).D()
o=r.aX(0,n)
return q.aP(new V.D(o.a,o.b,o.c).D()).D()},
cq:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.fb()
if(s==null){s=q.fd()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a8()}return!0},
fa:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.dK()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.el())return p
return q.D()},
fc:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.F().toString
if(Math.abs(p-0)<1e-9){j=b.aX(0,e)
o=new V.D(j.a,j.b,j.c).D()
if(q.a-r.a<0)o=o.bf(0)}else{n=(j-s.b)/p
j=b.aX(0,e).K(0,n).W(0,e).aX(0,h)
o=new V.D(j.a,j.b,j.c).D()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.bf(0)}m=l.d
if(m!=null){m=m.D()
o=m.aP(o).D().aP(m).D()}return o},
co:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.fa()
if(s==null){s=q.fc()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a8()}return!0},
ghR:function(a){var s=this
if(J.W(s.a,s.b))return!0
if(J.W(s.b,s.c))return!0
if(J.W(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
I:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gJ(p)
p=a+C.a.au(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gJ(o)
p=p+C.a.au(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gJ(o)
s=p+C.a.au(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.w()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.w()
return s+((p==null?"-":p)+"}")},
w:function(){return this.I("")}}
F.iB.prototype={}
F.jv.prototype={
bs:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gJ(q)
s=c.a
if(q==(s==null?r:s.gJ(s))){q=b.b
q=q==null?r:q.gJ(q)
s=c.b
if(q==(s==null?r:s.gJ(s))){q=b.c
q=q==null?r:q.gJ(q)
s=c.c
q=q==(s==null?r:s.gJ(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gJ(q)
s=c.b
if(q==(s==null?r:s.gJ(s))){q=b.b
q=q==null?r:q.gJ(q)
s=c.c
if(q==(s==null?r:s.gJ(s))){q=b.c
q=q==null?r:q.gJ(q)
s=c.a
q=q==(s==null?r:s.gJ(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gJ(q)
s=c.c
if(q==(s==null?r:s.gJ(s))){q=b.b
q=q==null?r:q.gJ(q)
s=c.a
if(q==(s==null?r:s.gJ(s))){q=b.c
q=q==null?r:q.gJ(q)
s=c.b
q=q==(s==null?r:s.gJ(s))}else q=!1
return q}else return!1}}}}
F.eN.prototype={
eU:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.f("May not create a line with vertices attached to different shapes."))
s.cj(a)
s.ck(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gae(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a8()}},
br:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.O(r.gae(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a8()}}s.cd()
s.ce()},
cj:function(a){this.a=a
a.gae(a).b.push(this)},
ck:function(a){this.b=a
a.gae(a).c.push(this)},
cd:function(){var s=this.a
if(s!=null)C.b.O(s.gae(s).b,this)
this.a=null},
ce:function(){var s=this.b
if(s!=null)C.b.O(s.gae(s).c,this)
this.b=null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
I:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gJ(s)
s=a+C.a.au(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gJ(r)
return s+C.a.au(C.c.i(r==null?-1:r),0)},
w:function(){return this.I("")}}
F.iO.prototype={}
F.jK.prototype={
bs:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gJ(q)
s=c.a
if(q==(s==null?r:s.gJ(s))){q=b.b
q=q==null?r:q.gJ(q)
s=c.b
return q==(s==null?r:s.gJ(s))}else{q=b.a
q=q==null?r:q.gJ(q)
s=c.b
if(q==(s==null?r:s.gJ(s))){q=b.b
q=q==null?r:q.gJ(q)
s=c.a
return q==(s==null?r:s.gJ(s))}else return!1}}}
F.f7.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
I:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gJ(s)
return a+C.a.au(C.c.i(s),0)},
w:function(){return this.I("")}}
F.jo.prototype={
gV:function(){var s=this.a
return s==null?this.a=new F.y(this,H.b([],t.k)):s},
gbw:function(a){var s=this.b
return s==null?this.b=new F.bI(this,H.b([],t.q)):s},
gae:function(a){var s=this.c
return s==null?this.c=new F.dq(this,H.b([],t.L)):s},
gU:function(){var s=this.d
return s==null?this.d=new F.dp(this,H.b([],t.u)):s},
gt:function(){var s=this.e
return s==null?this.e=D.G():s},
bt:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.gV().a0()
s=b.gV().c.length
for(a0=a1.gV().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.y(b,H.b([],q))
n.n(0,o.hU())}b.gV().a0()
for(a0=a1.gbw(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).a0()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.bI(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,h)
l=new F.f7()
if(h.a==null)H.i(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.dL(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.bI(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.B(a)}}}for(a0=a1.gae(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).a0()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).a0()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.dq(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,e)
new F.eN().eU(f,e)}for(a0=a1.gU().b,r=a0.length,n=t.u,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).a0()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).a0()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).a0()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.dp(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,e)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).n(0,c)
new F.at().aY(f,e,c)}a0=b.e
if(a0!=null)a0.az(0)},
ax:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gU().ax()||!1
if(!r.gV().ax())s=!1
q=r.e
if(q!=null)q.az(0)
return s},
ig:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.gV().c
s=H.b(m.slice(0),H.kA(m))
for(m=t.k;s.length!==0;){r=C.b.gi4(s)
C.b.cV(s,0)
q=H.b([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.bs(0,r,o)){q.push(o)
C.b.cV(s,p)}}if(q.length>1)b.bt(q)}n.gV().a0()
n.gae(n).cW()
n.gU().cW()
n.gbw(n).ix()
n.gae(n).cX(new F.jK())
n.gU().cX(new F.jv())
m=n.e
if(m!=null)m.az(0)},
cn:function(){this.ig(new F.k2(),new F.je())},
dS:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=34962,c={},b=f.gV().c.length,a=$.aQ(),a0=a3.a,a1=(a0&a.a)!==0?1:0
if((a0&$.bv().a)!==0)++a1
if((a0&$.bu().a)!==0)++a1
if((a0&$.bw().a)!==0)++a1
if((a0&$.bQ().a)!==0)++a1
if((a0&$.ek().a)!==0)++a1
if((a0&$.el().a)!==0)++a1
if((a0&$.cB().a)!==0)++a1
if((a0&$.bt().a)!==0)++a1
s=a3.gd5(a3)
r=P.eP(b*s,0,!1,t.gR)
c.a=0
q=P.ou(a1,new F.jq(c,f,a3,s*4,b,s,r),t.eT)
a=a2.a
a0=a.createBuffer()
a0.toString
a.bindBuffer(d,a0)
a.bufferData(d,new Float32Array(H.cu(r)),35044)
a.bindBuffer(d,e)
p=new Z.bW(new Z.fR(d,a0),H.b([],t.fv),q,a3)
if(f.gbw(f).b.length!==0){o=H.b([],t.t)
a0=t.q
n=t.k
m=0
while(!0){l=f.b
if(l==null){l=f.b=new F.bI(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
l=l[m].a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).a0()}l=l.e}o.push(l==null?0:l);++m}i=Z.lG(a,34963,o)
p.b.push(new Z.c1(0,o.length,i))}if(f.gae(f).b.length!==0){o=H.b([],t.t)
a0=t.L
n=t.k
m=0
while(!0){l=f.c
if(l==null){l=f.c=new F.dq(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
h=l[m]
l=h.a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).a0()}l=l.e}o.push(l==null?0:l)
l=h.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).a0()}l=l.e}o.push(l==null?0:l);++m}i=Z.lG(a,34963,o)
p.b.push(new Z.c1(1,o.length,i))}if(f.gU().b.length!==0){o=H.b([],t.t)
a0=t.u
n=t.k
m=0
while(!0){l=f.d
if(l==null){l=f.d=new F.dp(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
g=l[m]
l=g.a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).a0()}l=l.e}o.push(l==null?0:l)
l=g.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).a0()}l=l.e}o.push(l==null?0:l)
l=g.c
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).a0()}l=l.e}o.push(l==null?0:l);++m}i=Z.lG(a,34963,o)
p.b.push(new Z.c1(4,o.length,i))}return p},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.gV().c.length!==0){q.push("Vertices:")
q.push(s.gV().I(r))}if(s.gbw(s).b.length!==0){q.push("Points:")
q.push(s.gbw(s).I(r))}if(s.gae(s).b.length!==0){q.push("Lines:")
q.push(s.gae(s).I(r))}if(s.gU().b.length!==0){q.push("Faces:")
q.push(s.gU().I(r))}return C.b.j(q,"\n")},
a8:function(){var s=this.e
return s==null?null:s.B(null)}}
F.jq.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hO(a),e=f.gd5(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.y(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].ie(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bV(f,e,c*4,g.d)},
$S:48}
F.dp.prototype={
dG:function(a){var s,r,q,p,o,n,m,l,k=H.b([],t.u),j=a.length
if(j>0){s=a[0]
for(r=this.a,q=t.k,p=2;p<j;++p){o=p-1
n=a.length
if(o>=n)return H.d(a,o)
o=a[o]
if(p>=n)return H.d(a,p)
n=a[p]
m=r.a;(m==null?r.a=new F.y(r,H.b([],q)):m).n(0,s)
m=r.a;(m==null?r.a=new F.y(r,H.b([],q)):m).n(0,o)
m=r.a;(m==null?r.a=new F.y(r,H.b([],q)):m).n(0,n)
l=new F.at()
l.aY(s,o,n)
k.push(l)}}return k},
hL:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.u)
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
if(m){(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,g)
e=new F.at()
e.aY(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
e=new F.at()
e.aY(j,g,f)
d.push(e)}else{(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
e=new F.at()
e.aY(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,f)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).n(0,j)
e=new F.at()
e.aY(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gl:function(a){return this.b.length},
cX:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gV().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.cn(H.b([],q),H.b([],q),H.b([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.cn(H.b([],q),H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.bs(0,l,(o==null?n.d=new F.cn(H.b([],q),H.b([],q),H.b([],q)):o).h(0,j))){l.br()
break}}}}},
cW:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.ghR(q))q.br()}},
ax:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cq())q=!1
return q},
cp:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].co())q=!1
return q},
i:function(a){return this.w()},
I:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(a))
return C.b.j(p,"\n")},
w:function(){return this.I("")}}
F.dq.prototype={
gl:function(a){return this.b.length},
cX:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gV().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.co(H.b([],q),H.b([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.co(H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.bs(0,l,(o==null?n.c=new F.co(H.b([],q),H.b([],q)):o).h(0,j))){l.br()
break}}}}},
cW:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.W(q.a,q.b))q.br()}},
i:function(a){return this.w()},
I:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].I(a+(""+s+". ")))}return C.b.j(r,"\n")},
w:function(){return this.I("")}}
F.bI.prototype={
gl:function(a){return this.b.length},
ix:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1,q=t.q;r>=0;--r){if(r>=s.length)return H.d(s,r)
p=s[r].a
if(p==null)o=null
else{n=p.b
p=(n==null?p.b=new F.dL(H.b([],q)):n).b.length
o=p}if((o==null?0:o)>1){if(r>=s.length)return H.d(s,r)
m=s[r]
p=m.a
if(p!=null){p=p.a
if(p!=null){n=p.b
C.b.O((n==null?p.b=new F.bI(p,H.b([],q)):n).b,m)}p=m.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.B(null)}}}p=m.a
if(p!=null){n=p.b
C.b.O((n==null?p.b=new F.dL(H.b([],q)):n).b,m)}m.a=null}}},
i:function(a){return this.w()},
I:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(a))
return C.b.j(p,"\n")},
w:function(){return this.I("")}}
F.cm.prototype={
ct:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fP(s.cx,p,m,r,q,o,n,a,l)},
hU:function(){return this.ct(null)},
gae:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.co(H.b([],s),H.b([],s))}return s},
gU:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.cn(H.b([],s),H.b([],s),H.b([],s))}return s},
gJ:function(a){var s=this.a
if(s!=null)s.gV().a0()
return this.e},
sa1:function(a,b){var s
if(!J.W(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a8()}},
seD:function(a){var s
if(!J.W(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a8()}},
sdP:function(a){var s
if(!J.W(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a8()}},
ie:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.aQ())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.bv())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.q(0,$.bu())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.q(0,$.bw())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.q(0,$.bQ())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.ek())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.q(0,$.el())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.q(0,$.cB()))return H.b([o.ch],t.n)
else if(a.q(0,$.bt())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
cq:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dK()
p.gU().G(0,new F.k6(o))
p.r=o.a.D()
if(r){s.a8()
o=s.e
if(o!=null)o.az(0)}return!0},
co:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dK()
p.gU().G(0,new F.k5(o))
p.x=o.a.D()
if(r){s.a8()
o=s.e
if(o!=null)o.az(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
I:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.au(C.c.i(q.e),0))
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
n.push(V.A(q.ch,3,0))
s=q.cx
s=s==null?p:s.w()
n.push(s==null?o:s)
r=C.b.j(n,", ")
return a+"{"+r+"}"},
w:function(){return this.I("")}}
F.k6.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:10}
F.k5.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:10}
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
s.a8()
return!0},
dH:function(a,b,c,d,e,f,g){var s=F.fP(a,null,b,c,d,e,f,g,0)
this.n(0,s)
return s},
bD:function(a,b,c,d,e,f){return this.dH(a,b,c,null,d,e,f)},
hM:function(a,b,c,d,e,f){return this.dH(a,b,c,d,e,f,null)},
gl:function(a){return this.c.length},
ax:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cq()
return!0},
cp:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].co()
return!0},
hQ:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.D()
if(!J.W(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.B(null)}}}}}return!0},
i:function(a){return this.w()},
I:function(a){var s,r,q,p
this.a0()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].I(a))
return C.b.j(s,"\n")},
w:function(){return this.I("")}}
F.cn.prototype={
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
G:function(a,b){var s=this
C.b.G(s.b,b)
C.b.G(s.c,new F.k0(s,b))
C.b.G(s.d,new F.k1(s,b))},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
return C.b.j(p,"\n")}}
F.k0.prototype={
$1:function(a){if(!J.W(a.a,this.a))this.b.$1(a)},
$S:10}
F.k1.prototype={
$1:function(a){var s=this.a
if(!J.W(a.a,s)&&!J.W(a.b,s))this.b.$1(a)},
$S:10}
F.co.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
return C.b.j(p,"\n")}}
F.k3.prototype={}
F.k2.prototype={
bs:function(a,b,c){return J.W(b.f,c.f)}}
F.k4.prototype={}
F.je.prototype={
bt:function(a){var s,r,q,p,o,n=V.dK()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.D(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.D()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){p=a[r]
q=n.D()
if(!J.W(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.B(null)}}}return null}}
F.dL.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
return C.b.j(p,"\n")}}
O.d8.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.G():s},
X:function(a){var s=this.fr
return s==null?null:s.B(a)},
bk:function(){return this.X(null)},
ds:function(a){this.a=null
this.X(a)},
hr:function(){return this.ds(null)},
fA:function(a,b){return this.X(new D.aV())},
fC:function(a,b){return this.X(new D.aW())},
gen:function(){var s=this,r=s.dx
if(r==null){r=new D.cZ(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.d4(r.gfv(),r.gh6(),r.gha())
r.gt().n(0,s.gdr())
r.gem().n(0,s.gaK())
s.dx=r}return r},
gdY:function(){var s=this.f
return s==null?this.f=O.eR(this,"emission"):s},
gdK:function(){var s=this.r
return s==null?this.r=O.eR(this,"ambient"):s},
gdV:function(){var s=this.x
return s==null?this.x=O.eR(this,"diffuse"):s},
gbT:function(){var s=this.z
return s==null?this.z=new O.j_(new V.X(0,0,0),this,"specular",new A.ar(!1,!1,!1)):s},
df:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.Y(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gaG()
o=a1.h(0,q.gaG())
a1.m(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.G(0,new O.j0(b,n))
C.b.bi(n,new O.j1())
m=new H.Y(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],t.fD)
m.G(0,new O.j2(b,l))
C.b.bi(l,new O.j3())
k=new H.Y(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.b([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gaG()
o=k.h(0,q.gaG())
k.m(0,p,o==null?1:o)}j=H.b([],t.eg)
k.G(0,new O.j4(b,j))
C.b.bi(j,new O.j5())
i=new H.Y(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.b([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.q)(a0),++r){q=a0[r]
s=q.gaG()
p=i.h(0,q.gaG())
i.m(0,s,p==null?1:p)}h=H.b([],t.c3)
i.G(0,new O.j6(b,h))
C.b.bi(h,new O.j7())
a0=C.c.aa(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.iY(new V.am(0,0,0,0))
a2=b.gdY().c
s=b.gdK().c
p=b.gdV().c
o=b.y
o=(o==null?b.y=O.eR(b,"invDiffuse"):o).c
g=b.gbT().c
f=b.Q
f=(f==null?b.Q=new O.iW(b,"bump",new A.ar(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.eR(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.iZ(new V.X(0,0,0),b,"refract",new A.ar(!1,!1,!1)):d).c
c=b.db
return A.ow(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.iV(b,"alpha",new A.ar(!1,!1,!1)):c).c,n,l,j,h)},
ap:function(a,b){if(b!=null)if(!C.b.C(a,b)){b.a=a.length
a.push(b)}},
aB:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aC(m==null?H.b([],t.e):m)
s=H.V(m).c
for(;m.v();){r=s.a(m.d)
q=$.k_
if(q==null)q=$.k_=new V.D(0,0,1)
r.c=q
p=$.jZ
r.d=p==null?$.jZ=new V.D(0,1,0):p
p=$.jY
r.e=p==null?$.jY=new V.D(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bP(q).D()
r.d=n.bP(r.d).D()
r.e=n.bP(r.e).D()}}},
ex:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.df()
r=s.ba
a9=t.eI.a(b0.fr.h(0,r))
if(a9==null){q=b0.a
p=t.S
o=t.W
a9=new A.d7(s,H.b([],t.p),P.T(p,o),P.T(p,t.O),P.T(p,o),P.T(p,t.d),P.T(p,o),P.T(p,t.r),P.T(p,o),P.T(p,t.R),q,r)
a9.eV(s,q)
b0.dJ(a9)}a9=a7.a=a9
b1.e=null}n=a9.x
m=n.e_
s=b1.e
if(!(s instanceof Z.bW))s=b1.e=null
if(s==null||!s.d.q(0,m)){s=n.k4
if(s){r=b1.d
if(r!=null)r.ax()}r=n.r1
if(r){q=b1.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gU().cp()
q.gV().cp()
q=q.e
if(q!=null)q.az(0)}}q=n.rx
if(q){p=b1.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gV().hQ()
p=p.e
if(p!=null)p.az(0)}}p=b1.d
l=p==null?a8:p.dS(new Z.fS(b0.a),m)
if(l==null)return
p=l.aQ($.aQ())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=l.aQ($.bv())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=l.aQ($.bu())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(n.r2){s=l.aQ($.bw())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=l.aQ($.bQ())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(n.ry){s=l.aQ($.bt())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=l}k=H.b([],t.ga)
a9.a5(b0)
if(n.fr){s=b0.dx
s=s.ga7(s)
r=a9.db
if(r!=null)r.ao(s.aj(0,!0))}if(n.fx){s=b0.cx
if(s==null){s=b0.db
r=b0.dx
r=b0.cx=s.ga7(s).K(0,r.ga7(r))
s=r}r=a9.dx
if(r!=null)r.ao(s.aj(0,!0))}s=b0.ch
if(s==null){s=b0.dx
s=b0.ch=b0.giv().K(0,s.ga7(s))}r=a9.fr
if(r!=null)r.ao(s.aj(0,!0))
if(n.go){s=b0.db
s=s.ga7(s)
r=a9.dy
if(r!=null)r.ao(s.aj(0,!0))}if(n.x1){s=$.mm
if(s==null){s=new V.db(1,0,0,0,1,0,0,0,1)
$.mm=s}r=a9.go
if(r!=null)r.ao(s.aj(0,!0))}if(n.x2){s=V.ah()
r=a9.id
if(r!=null)r.ao(s.aj(0,!0))}if(n.y1){s=V.ah()
r=a9.k1
if(r!=null)r.ao(s.aj(0,!0))}if(n.b9>0){s=a7.e.a
j=s.length
r=a9.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.d(s,i)
r=s[i]
q=a9.k3
if(i>=q.length)return H.d(q,i)
q=q[i]
h=new Float32Array(H.cu(r.aj(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=a7.f
r=r==null?a8:r.f
if(r==null)r=new V.X(0,0,0)
q=a9.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.f
a7.ap(k,s==null?a8:s.d)
s=a7.f
s=s==null?a8:s.d
a9.aw(a9.r1,s)}if(n.k1){s=n.b
if(s.a){r=a7.r
r=r==null?a8:r.f
if(r==null)r=new V.X(0,0,0)
q=a9.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.r
a7.ap(k,s==null?a8:s.d)
s=a7.r
s=s==null?a8:s.d
a9.aw(a9.ry,s)}s=n.c
if(s.a){r=a7.x
r=r==null?a8:r.f
if(r==null)r=new V.X(0,0,0)
q=a9.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.x
a7.ap(k,s==null?a8:s.d)
s=a7.x
s=s==null?a8:s.d
a9.aw(a9.y1,s)}s=n.d
if(s.a){r=a7.y
r=r==null?a8:r.f
if(r==null)r=new V.X(0,0,0)
q=a9.b9
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.y
a7.ap(k,s==null?a8:s.d)
s=a7.y
s=s==null?a8:s.d
a9.aw(a9.ba,s)}s=n.e
r=s.a
if(r||s.b||!1){q=a7.z
q=q==null?a8:q.ch
if(q==null)q=100
p=a9.e2
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.z
r=r==null?a8:r.f
if(r==null)r=new V.X(1,1,1)
q=a9.e0
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.z
a7.ap(k,s==null?a8:s.d)
s=a7.z
s=s==null?a8:s.d
a9.aw(a9.e1,s)}s=n.z
if(s.length>0){g=new H.Y(t.y)
r=a7.dx
r=r==null?a8:r.e
if(r==null)r=H.b([],t.i)
q=r.length
p=t.c
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gaG()
c=g.h(0,d)
if(c==null)c=0
g.m(0,d,c+1)
o=a9.cz.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.giM()
a=$.b2
o=o.by(a==null?$.b2=new V.K(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giR()
a=$.b2
o=o.by(a==null?$.b2=new V.K(0,0,0):a)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gb8(e)
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
if(e.gdZ()){o=e.gdM()
a=b.e
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdN()
a=b.f
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdO()
a=b.r
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a9.cw.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=b0.db
a0=r.ga7(r)
a1=new H.Y(t.y)
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
o=a9.cB.h(0,0)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=a0.bP(e.c).D()
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.b
a=b.f
a.a.uniform3f(a.d,o.a,o.b,o.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a9.cA.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=b0.db
a0=r.ga7(r)
a2=new H.Y(t.y)
r=a7.dx
r=r==null?a8:r.r
if(r==null)r=H.b([],t.o)
q=r.length
p=t.B
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gaG()
c=a2.h(0,d)
if(c==null)c=0
a2.m(0,d,c+1)
o=a9.cD.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
a3=a0.K(0,e.ga7(e))
o=e.ga7(e)
a=$.b2
o=o.by(a==null?$.b2=new V.K(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=$.b2
o=a3.by(o==null?$.b2=new V.K(0,0,0):o)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gb8(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaU()
o=a3.cJ(0)
a=b.d
if(a!=null){h=new Float32Array(H.cu(new V.db(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).aj(0,!0)))
a.a.uniformMatrix3fv(a.d,!1,h)}e.gaU()
o=e.gaU()
if(!C.b.C(k,o)){o.a=k.length
k.push(o)}o=e.gaU()
a=o.gcM(o)
if(a){a=b.f
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(a4<6)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}e.gbh()
o=e.geM()
a=b.x
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gbh()
if(!C.b.C(k,o)){o.a=k.length
k.push(o)}o=e.gbh()
a=o.gcM(o)
if(a){a=b.r
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(a4<6)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}if(e.gdZ()){o=e.gdM()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdN()
a=b.z
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdO()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a2.h(0,q)
if(j==null)j=0
q=a9.cC.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=b0.db
a0=r.ga7(r)
a6=new H.Y(t.y)
r=a7.dx
r=r==null?a8:r.x
if(r==null)r=H.b([],t.D)
q=r.length
p=t.J
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gaG()
c=a6.h(0,d)
if(c==null)c=0
a6.m(0,d,c+1)
o=a9.cF.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.giu(e)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giP(e).D()
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=a0.by(e.giu(e))
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gb8(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaU()
o=e.gd0()
a=b.f
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gcY(e)
a=b.r
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gj_()
a=b.x
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gj0()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
e.gaU()
o=e.gaU()
if(!C.b.C(k,o)){o.a=k.length
k.push(o)}o=e.gaU()
a=o.gcM(o)
if(a){a=b.dx
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}e.gbh()
o=e.geM()
a=b.z
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gbh()
if(!C.b.C(k,o)){o.a=k.length
k.push(o)}o=e.gbh()
a=o.gcM(o)
if(a){a=b.dy
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}if(e.giQ()){o=e.giO()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)
o=e.giN()
a=b.ch
if(a!=null)a.a.uniform1f(a.d,o)}if(e.gdZ()){o=e.gdM()
a=b.cx
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdN()
a=b.cy
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdO()
a=b.db
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a6.h(0,q)
if(j==null)j=0
q=a9.cE.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.b){s=a7.Q
a7.ap(k,s==null?a8:s.d)
s=a7.Q
s=s==null?a8:s.d
a9.aw(a9.e3,s)}if(n.dy){s=b0.Q
if(s==null){s=b0.db
s=b0.Q=s.ga7(s).cJ(0)}r=a9.fy
if(r!=null)r.ao(s.aj(0,!0))}if(n.db){a7.ap(k,a8)
a9.hv(a9.e4,a8)
s=n.r
if(s.a){r=a7.cx
r=r==null?a8:r.f
if(r==null)r=new V.X(1,1,1)
q=a9.e5
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.cx
a7.ap(k,s==null?a8:s.d)
s=a7.cx
s=s==null?a8:s.d
a9.aw(a9.e6,s)}s=n.x
r=s.a
if(r||s.b||!1){q=a7.cy
q=q==null?a8:q.ch
if(q==null)q=0
p=a9.e7
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.cy
r=r==null?a8:r.f
if(r==null)r=new V.X(1,1,1)
q=a9.e8
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a7.cy
a7.ap(k,s==null?a8:s.d)
s=a7.cy
s=s==null?a8:s.d
a9.aw(a9.e9,s)}}s=n.y
r=s.a
q=!r
if(!q||s.b||!1){if(r){r=a7.db
r=r==null?a8:r.f
if(r==null)r=1
p=a9.ea
if(p!=null)p.a.uniform1f(p.d,r)}if(s.b){r=a7.db
a7.ap(k,r==null?a8:r.d)
r=a7.db
r=r==null?a8:r.d
a9.aw(a9.eb,r)}r=b0.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b0.a,i=0;i<k.length;++i){p=k[i]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=t.ed.a(b1.e)
p.a5(b0)
p.al(b0)
p.aA(b0)
if(!q||s.b||!1)r.disable(3042)
for(i=0;i<k.length;++i){s=k[i]
if(s.c){s.c=!1
r.activeTexture(33984+s.a)
r.bindTexture(3553,a8)}}r.useProgram(a8)
a9.gai(a9).dW()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.df().ba}}
O.j0.prototype={
$2:function(a,b){return this.b.push(new A.ba(a,C.c.aa(b+3,4)*4))},
$S:7}
O.j1.prototype={
$2:function(a,b){return C.c.aq(a.a,b.a)},
$S:52}
O.j2.prototype={
$2:function(a,b){return this.b.push(new A.bc(a,C.c.aa(b+3,4)*4))},
$S:7}
O.j3.prototype={
$2:function(a,b){return C.c.aq(a.a,b.a)},
$S:53}
O.j4.prototype={
$2:function(a,b){return this.b.push(new A.bj(a,C.c.aa(b+3,4)*4))},
$S:7}
O.j5.prototype={
$2:function(a,b){return C.c.aq(a.a,b.a)},
$S:54}
O.j6.prototype={
$2:function(a,b){return this.b.push(new A.bl(a,C.c.aa(b+3,4)*4))},
$S:7}
O.j7.prototype={
$2:function(a,b){return C.c.aq(a.a,b.a)},
$S:55}
O.iV.prototype={
aN:function(){var s,r=this
r.d6()
s=r.f
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.X(new D.z(r.b,s,1))}}}
O.d9.prototype={
X:function(a){return this.a.X(a)},
bk:function(){return this.X(null)},
aN:function(){},
cf:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aN()
s=q.a
s.a=null
s.X(null)}}}
O.iW.prototype={}
O.da.prototype={
du:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.X(new D.z(r.b+".color",s,a))}},
aN:function(){this.d6()
this.du(new V.X(1,1,1))},
sb8:function(a,b){this.cf(new A.ar(!0,this.c.b,!1))
this.du(b)}}
O.iY.prototype={}
O.iZ.prototype={
aN:function(){var s,r=this
r.d7()
s=r.ch
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.X(new D.z(r.b+".refraction",s,1))}}}
O.j_.prototype={
dv:function(a){var s=this,r=s.ch
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.X(new D.z(s.b+".shininess",r,a))}},
aN:function(){this.d7()
this.dv(100)}}
O.dr.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.G():s},
X:function(a){var s=this.e
return s==null?null:s.B(a)},
bk:function(){return this.X(null)},
ex:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.dm.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.ds(a.a,"Skybox")
s.ei(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.gai(s).h(0,"posAttr")
r=t.v
s.y=r.a(s.gE().h(0,"fov"))
s.z=r.a(s.gE().h(0,"ratio"))
s.Q=t.g.a(s.gE().h(0,"boxClr"))
s.ch=t.l.a(s.gE().h(0,"boxTxt"))
s.cx=t.j.a(s.gE().h(0,"viewMat"))
a.dJ(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.dS(new Z.fS(a.a),$.aQ())
if(r==null)r=l
else{q=r.aQ($.aQ())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.x
p=p==null?l:p.c}q.e=p==null?0:p}}b.e=r}o=m.c
if(o==null)return
o.a=1
if(!o.c&&o.d>=6){o.c=!0
r=a.a
r.activeTexture(33985)
r.bindTexture(34067,o.b)}r=a.d
q=a.c
p=m.a
if(p!=null){p.a5(a)
n=p.y
if(n!=null)n.a.uniform1f(n.d,1.0471975511965976)
n=p.z
if(n!=null)n.a.uniform1f(n.d,r/q)
r=p.ch
if(r!=null)r.eL(o)
r=m.d
q=p.Q
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)
r=a.db
r=r.ga7(r).cJ(0)
p=p.cx
if(p!=null)p.ao(r.aj(0,!0))}r=b.e
if(r instanceof Z.bW){r.a5(a)
r.al(a)
r.aA(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.gai(r).dW()}if(o.c){o.c=!1
r=a.a
r.activeTexture(33984+o.a)
r.bindTexture(34067,l)}}}
O.cf.prototype={}
T.bJ.prototype={}
T.fu.prototype={}
T.fv.prototype={
gt:function(){var s=this.y
return s==null?this.y=D.G():s}}
T.fw.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.G():s}}
T.jz.prototype={
b1:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.a3(s,"load",new T.jA(this,s,!1,b,!1,d,a),!1)},
hs:function(a,b,c){var s,r,q,p,o,n
b=V.ej(b)
s=a.width
r=V.ej(s==null?512:s)
s=a.height
q=V.ej(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.ll()
p.width=r
p.height=q
o=t.ar.a(C.i.eI(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.qA(o.getImageData(0,0,s,n==null?512:n))}}}
T.jA.prototype={
$1:function(a){var s=this,r=s.a,q=r.hs(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.C.iE(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.cv()}++r.e},
$S:3}
X.i9.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.G():s},
a4:function(a){var s=this.fr
return s==null?null:s.B(a)},
saD:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
r.a4(new D.z("width",s,b))}},
say:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
r.a4(new D.z("height",s,b))}},
a5:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=3553,d=36161,c=36160
if(g.y==null){s=a.a
r=g.ch
q=g.a
p=g.b
o=H.hZ(s.getParameter(3379))
n=V.ej(q)
m=V.ej(p)
o=V.ej(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
l.toString
s.bindTexture(e,l)
s.texParameteri(e,10242,33071)
s.texParameteri(e,10243,33071)
s.texParameteri(e,10241,9729)
s.texParameteri(e,10240,9729)
C.C.eC(s,e,0,6408,n,m,0,6408,5121,f)
s.bindTexture(e,f)
k=T.mE(l)
k.e=q
k.f=p
k.r=n
k.x=m
if(!k.d){k.d=!0
q=k.y
if(q!=null)q.cv()}r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
q=r.y
if(q!=null)q.cv()
q=r.b
g.z=q
g.c=r.r
g.d=r.x
s.bindTexture(e,q)
r=s.createRenderbuffer()
r.toString
g.Q=r
s.bindRenderbuffer(d,r)
s.renderbufferStorage(d,33189,g.c,g.d)
r=s.createFramebuffer()
r.toString
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
j=g.dy
r=j.c
a.c=C.d.a9(r*g.a)
q=j.d
a.d=C.d.a9(q*g.b)
p=g.c
i=C.d.a9(j.a*p)
l=g.d
s.viewport(i,C.d.a9(j.b*l),C.d.a9(r*p),C.d.a9(q*l))
s.clearDepth(g.db)
if(g.cy){r=g.cx
q=r.a
p=r.b
l=r.c
r=r.d
s.clearColor(q,p,l,r)
h=16640}else h=256
if(h>0)s.clear(h)},
aA:function(a){a.a.bindFramebuffer(36160,null)}}
X.iF.prototype={
gt:function(){var s=this.x
return s==null?this.x=D.G():s},
a5:function(a){var s,r,q,p,o,n,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
s=m.drawingBufferWidth
if(s==null)s=512
r=m.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.d.a9(q.a*s)
o=C.d.a9(q.b*r)
n=C.d.a9(q.c*s)
a.c=n
q=C.d.a9(q.d*r)
a.d=q
m.viewport(p,o,n,q)
m.clearDepth(2000)
q=this.a
m.clearColor(q.a,q.b,q.c,q.d)
m.clear(16640)},
aA:function(a){}}
X.iJ.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.G():s},
a5:function(a){var s
a.cy.bN(V.ah())
s=V.ah()
a.db.bN(s)},
aA:function(a){a.cy.aS()
a.db.aS()}}
X.f3.prototype={
gt:function(){var s=this.f
return s==null?this.f=D.G():s},
a4:function(a){var s=this.f
return s==null?null:s.B(a)},
f6:function(){return this.a4(null)},
a5:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.b0(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bN(i)
s=$.nF()
r=q.b
if(r!=null)s=r.aV(0,a,q).K(0,s)
a.db.bN(s)},
aA:function(a){a.cy.aS()
a.db.aS()}}
X.jy.prototype={}
V.aF.prototype={
bA:function(a){this.b=new P.iH(C.T)
this.c=null
this.d=H.b([],t.F)},
R:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.b([],t.C))
s=a.split("\n")
for(j=s.length,r=t.C,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.b([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.fh(o,0,o.length)
l=m==null?o:m
l=H.m1(l," ","&nbsp;")
C.R.eJ(n,l)
l=n.style
l.color=b
C.b.gaH(k.d).push(n)}},
eu:function(a,b){var s,r,q,p=this
p.d=H.b([],t.F)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bF()
if(r!=null)for(q=new H.r(s),q=new P.bN(r.d_(new H.bh(q,q.gl(q))).a());q.v();)p.bM(q.gA(q))}}
V.le.prototype={
$1:function(a){var s=C.d.cZ(this.a.gi9(),2)
if(s!=="0.00")P.m0(s+" fps")},
$S:56}
V.ex.prototype={
bM:function(a){var s=this
switch(a.a){case"Class":s.R(a.b,"#551")
break
case"Comment":s.R(a.b,"#777")
break
case"Id":s.R(a.b,"#111")
break
case"Num":s.R(a.b,"#191")
break
case"Reserved":s.R(a.b,"#119")
break
case"String":s.R(a.b,"#171")
break
case"Symbol":s.R(a.b,"#616")
break
case"Type":s.R(a.b,"#B11")
break
case"Whitespace":s.R(a.b,"#111")
break}},
bF:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()\\-+*%!&|=.,?:;",h="OpenDoubleStr",g="CloseDoubleStr",f="EscDoubleStr",e="OpenSingleStr",d="CloseSingleStr",c="EscSingleStr",b="Slash",a="Comment",a0="EndComment",a1="MLComment",a2="MLCStar",a3="Whitespace",a4=L.jF()
a4.d=a4.k(0,o)
s=a4.k(0,o).j(0,n)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.Q("a","z"))
s.push(K.Q("A","Z"))
s=a4.k(0,n).j(0,n)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.Q("0","9"))
s.push(K.Q("a","z"))
s.push(K.Q("A","Z"))
a4.k(0,o).j(0,m).a.push(K.Q("0","9"))
a4.k(0,m).j(0,m).a.push(K.Q("0","9"))
s=a4.k(0,m).j(0,l)
q=new K.u(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
a4.k(0,l).j(0,k).a.push(K.Q("0","9"))
a4.k(0,k).j(0,k).a.push(K.Q("0","9"))
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
a4.k(0,h).j(0,h).a.push(new K.aS())
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
a4.k(0,e).j(0,e).a.push(new K.aS())
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
r.aT(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aT(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aT(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a4}}
V.eD.prototype={
bM:function(a){var s=this
switch(a.a){case"Builtin":s.R(a.b,"#411")
break
case"Comment":s.R(a.b,"#777")
break
case"Id":s.R(a.b,"#111")
break
case"Num":s.R(a.b,"#191")
break
case"Preprocess":s.R(a.b,"#737")
break
case"Reserved":s.R(a.b,"#119")
break
case"Symbol":s.R(a.b,"#611")
break
case"Type":s.R(a.b,"#171")
break
case"Whitespace":s.R(a.b,"#111")
break}},
bF:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()[]\\-+*%!&|=.,?:;",h="Slash",g="Comment",f="EndComment",e="Preprocess",d="EndPreprocess",c="Whitespace",b=L.jF()
b.d=b.k(0,o)
s=b.k(0,o).j(0,n)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.Q("a","z"))
s.push(K.Q("A","Z"))
s=b.k(0,n).j(0,n)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.Q("0","9"))
s.push(K.Q("a","z"))
s.push(K.Q("A","Z"))
b.k(0,o).j(0,m).a.push(K.Q("0","9"))
b.k(0,m).j(0,m).a.push(K.Q("0","9"))
s=b.k(0,m).j(0,l)
q=new K.u(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
b.k(0,l).j(0,k).a.push(K.Q("0","9"))
b.k(0,k).j(0,k).a.push(K.Q("0","9"))
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
b.k(0,h).j(0,j).a.push(new K.aS())
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
r.aT(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],p))
r.aT(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],p))
r.aT(0,"Builtin",H.b(["gl_FragColor","gl_Position"],p))
return b}}
V.eE.prototype={
bM:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.R(a.b,"#911")
s.R("=",r)
break
case"Id":s.R(a.b,r)
break
case"Other":s.R(a.b,r)
break
case"Reserved":s.R(a.b,"#119")
break
case"String":s.R(a.b,"#171")
break
case"Symbol":s.R(a.b,"#616")
break}},
bF:function(){var s,r,q,p="Start",o="Id",n="Attr",m="Sym",l="OpenStr",k="CloseStr",j="Other",i=L.jF()
i.d=i.k(0,p)
s=i.k(0,p).j(0,o)
r=t.t
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.Q("a","z"))
s.push(K.Q("A","Z"))
s=i.k(0,o).j(0,o)
q=new K.u(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.Q("0","9"))
s.push(K.Q("a","z"))
s.push(K.Q("A","Z"))
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
i.k(0,l).j(0,l).a.push(new K.aS())
i.k(0,p).j(0,j).a.push(new K.aS())
s=i.k(0,j).j(0,j)
q=H.b([],t.z)
s.a.push(new K.ae(q))
r=new K.u(H.b([],r))
r.p(new H.r('</\\-!>=_"'))
q.push(r)
q.push(K.Q("a","z"))
q.push(K.Q("A","Z"))
q=i.k(0,m)
q.d=q.a.S("Symbol")
q=i.k(0,k)
q.d=q.a.S("String")
q=i.k(0,o)
r=q.a.S(o)
q.d=r
r.aT(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],t.s))
r=i.k(0,n)
r.d=r.a.S(n)
r=i.k(0,j)
r.d=r.a.S(j)
return i}}
V.f5.prototype={
eu:function(a,b){this.d=H.b([],t.F)
this.R(C.b.j(b,"\n"),"#111")},
bM:function(a){},
bF:function(){return null}}
V.jh.prototype={
dE:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.mK().gcU().h(0,k)
if(j==null)if(d){c.$0()
l.dC(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.aP(p)
o.gbE(p).n(0,q)
n=W.ok("radio")
n.checked=s
n.name=k
W.a3(n,"change",new V.ji(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gbE(p)
r=r.createElement("br")
r.toString
p.n(0,r)},
aE:function(a,b,c){return this.dE(a,b,c,!1)},
dC:function(a){var s,r,q=P.mK(),p=t.N,o=P.ot(q.gcU(),p,p)
o.m(0,this.a,a)
s=q.ey(0,o)
p=window.history
p.toString
r=s.gcl()
p.replaceState(new P.km([],[]).bQ(""),"",r)}}
V.ji.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.dC(s.d)}},
$S:3}
V.jr.prototype={
dI:function(a){var s,r,q,p,o,n,m=this.hy(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.r(C.b.ic(a)),s=new P.bN(m.d_(new H.bh(s,s.gl(s))).a());s.v();){r=s.gA(s)
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
if(H.nz(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.ku(C.w,r,C.e,!1)
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
eH:function(a){var s,r,q,p=t.F,o=new V.ex("dart",H.b([],p))
o.bA("dart")
s=new V.eD("glsl",H.b([],p))
s.bA("glsl")
r=new V.eE("html",H.b([],p))
r.bA("html")
q=C.b.i5(H.b([o,s,r],t.g6),new V.ju(a))
if(q!=null)return q
p=new V.f5("plain",H.b([],p))
p.bA("plain")
return p},
dF:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.b([],t.t)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.a3(q,"+")){b2[r]=C.a.ak(q,1)
a8.push(1)
s=!0}else if(C.a.a3(q,"-")){b2[r]=C.a.ak(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.eH(b0)
p.eu(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.ku(C.w,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.m7()
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
for(a4=C.b.gT(q);a4.v();)b.appendChild(a4.gA(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
hJ:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
hy:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
f=L.jF()
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
f.k(0,o).j(0,g).a.push(new K.aS())
p=f.k(0,g).j(0,g)
q=H.b([],q)
p.a.push(new K.ae(q))
r=new K.u(H.b([],r))
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
V.jt.prototype={
$1:function(a){P.mG(C.m,new V.js(this.a))},
$S:3}
V.js.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.a9(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.x(-0.01*s)+"px"
q.top=r},
$S:1}
V.ju.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:57}
V.l3.prototype={
$0:function(){this.a.sab(0,F.kM(1,null,null,1))},
$S:1}
V.l4.prototype={
$0:function(){this.a.sab(0,F.kM(15,null,new V.l2(),15))},
$S:1}
V.l2.prototype={
$3:function(a,b,c){var s=Math.cos(c*4*3.141592653589793+3.141592653589793),r=Math.cos(b*4*3.141592653589793+3.141592653589793),q=a.f
if(q==null)q=V.lz()
s=new V.D(q.a,q.b,q.c).D().K(0,s*0.1+r*0.1)
a.sa1(0,q.W(0,new V.K(s.a,s.b,s.c)))},
$S:5}
V.l5.prototype={
$0:function(){this.a.sab(0,F.nl(!0,1,30,1))},
$S:1}
V.l6.prototype={
$0:function(){this.a.sab(0,F.nl(!1,5,30,0))},
$S:1}
V.l7.prototype={
$0:function(){this.a.sab(0,F.nm(!0,!0,25,new V.l1(),50))},
$S:1}
V.l1.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8},
$S:9}
V.l8.prototype={
$0:function(){this.a.sab(0,F.ny(6,null,6))},
$S:1}
V.l9.prototype={
$0:function(){this.a.sab(0,F.ny(10,new V.l0(),10))},
$S:1}
V.l0.prototype={
$2:function(a,b){var s=a-0.5,r=b-0.5
return Math.cos(Math.sqrt(s*s+r*r)*3.141592653589793)*0.3},
$S:9}
V.la.prototype={
$0:function(){this.a.sab(0,F.nA())},
$S:1}
V.lb.prototype={
$0:function(){this.a.sab(0,F.qN())},
$S:1}
V.lc.prototype={
$1:function(a){var s,r=this.a,q=this.b,p=q.a
p=p==null?null:p.c
s=t.s
r.dF("Vertex Shader","glsl",0,H.b((p==null?"":p).split("\n"),s))
q=q.a
q=q==null?null:q.d
r.dF("Fragment Shader","glsl",0,H.b((q==null?"":q).split("\n"),s))},
$S:2};(function aliases(){var s=J.a.prototype
s.eP=s.i
s=J.bg.prototype
s.eR=s.i
s=P.h.prototype
s.eQ=s.bR
s=W.E.prototype
s.bU=s.ar
s=W.dY.prototype
s.eS=s.aF
s=K.cU.prototype
s.eO=s.aR
s.bV=s.i
s=O.d9.prototype
s.d6=s.aN
s=O.da.prototype
s.d7=s.aN})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pQ","op",58)
r(P,"qu","p1",14)
r(P,"qv","p2",14)
r(P,"qw","p3",14)
q(P,"nj","qp",1)
r(W,"t2","iu",60)
p(W,"qG",4,null,["$4"],["p4"],21,0)
p(W,"qH",4,null,["$4"],["p5"],21,0)
var j
o(j=E.bC.prototype,"ger",0,0,null,["$1","$0"],["es","io"],0,0)
o(j,"gep",0,0,null,["$1","$0"],["eq","ik"],0,0)
n(j,"gii","ij",8)
n(j,"gil","im",8)
o(j=E.fx.prototype,"gd8",0,0,null,["$1","$0"],["da","d9"],0,0)
m(j,"giA","ez",1)
l(j=X.fO.prototype,"gfP","fQ",3)
l(j,"gfD","fE",3)
l(j,"gfJ","fK",4)
l(j,"gfT","fU",28)
l(j,"gfR","fS",28)
l(j,"gfX","fY",4)
l(j,"gh0","h1",4)
l(j,"gfN","fO",4)
l(j,"gfZ","h_",4)
l(j,"gfL","fM",4)
l(j,"gh2","h3",36)
l(j,"gh4","h5",3)
l(j,"ghk","hl",12)
l(j,"ghg","hh",12)
l(j,"ghi","hj",12)
o(D.bX.prototype,"geZ",0,0,null,["$1","$0"],["aJ","f_"],0,0)
o(j=D.cZ.prototype,"gdm",0,0,null,["$1","$0"],["dn","fV"],0,0)
l(j,"gh6","h7",38)
n(j,"gfv","fw",24)
n(j,"gha","hb",24)
k(V.a5.prototype,"gl","cK",31)
k(V.D.prototype,"gl","cK",31)
o(j=U.c_.prototype,"gb2",0,0,null,["$1","$0"],["N","ah"],0,0)
n(j,"gf0","f1",20)
n(j,"gh8","h9",20)
o(j=U.dH.prototype,"gb2",0,0,null,["$1","$0"],["N","ah"],0,0)
l(j,"gc4","c5",11)
l(j,"gc6","c7",11)
l(j,"gc8","c9",11)
o(j=U.dI.prototype,"gb2",0,0,null,["$1","$0"],["N","ah"],0,0)
l(j,"gc4","c5",2)
l(j,"gc6","c7",2)
l(j,"gc8","c9",2)
l(j,"gfn","fo",2)
l(j,"gfp","fq",2)
l(j,"ghF","hG",2)
l(j,"ghD","hE",2)
l(j,"ghB","hC",2)
l(U.dJ.prototype,"gft","fu",2)
o(j=M.cG.prototype,"gZ",0,0,null,["$1","$0"],["a_","bj"],0,0)
n(j,"ghc","hd",19)
n(j,"ghe","hf",19)
o(M.cK.prototype,"gZ",0,0,null,["$1","$0"],["a_","bj"],0,0)
o(j=M.cQ.prototype,"gZ",0,0,null,["$1","$0"],["a_","bj"],0,0)
n(j,"gfF","fG",8)
n(j,"gfH","fI",8)
o(j=O.d8.prototype,"gaK",0,0,null,["$1","$0"],["X","bk"],0,0)
o(j,"gdr",0,0,null,["$1","$0"],["ds","hr"],0,0)
n(j,"gfz","fA",18)
n(j,"gfB","fC",18)
o(O.d9.prototype,"gaK",0,0,null,["$1","$0"],["X","bk"],0,0)
o(O.dr.prototype,"gaK",0,0,null,["$1","$0"],["X","bk"],0,0)
o(X.f3.prototype,"gf5",0,0,null,["$1","$0"],["a4","f6"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.P,null)
q(P.P,[H.lu,J.a,J.ag,P.L,P.dR,P.h,H.bh,P.eG,H.cR,H.fL,H.cI,H.jI,H.jf,H.hy,H.bA,P.M,H.iP,H.eO,H.eJ,H.ax,H.ha,P.e3,P.cs,P.bN,P.fU,P.ce,P.fm,P.ky,P.ea,P.ke,P.dQ,P.j,P.hN,P.d5,P.dn,P.et,P.iI,P.kw,P.kv,P.Z,P.bB,P.f2,P.dt,P.h7,P.iE,P.ai,P.a0,P.bO,P.jN,P.hs,W.ik,W.lq,W.lH,W.cr,W.N,W.dh,W.dY,W.hD,W.cS,W.ki,W.hO,P.kl,P.e5,P.hq,K.aS,K.cU,K.f9,K.u,L.fj,L.fy,L.fz,L.jE,O.ad,O.dc,E.ic,E.bC,E.bU,E.c8,E.h5,E.jj,E.fx,Z.fR,Z.fS,Z.bW,Z.c1,Z.bn,D.ie,D.bY,D.S,X.cE,X.eL,X.iN,X.iT,X.a8,X.jb,X.jG,X.fO,D.bX,V.X,V.am,V.ix,V.db,V.bi,V.U,V.K,V.av,V.fb,V.a5,V.D,U.dH,U.dI,U.dJ,M.cK,M.cQ,A.eq,A.i6,A.ar,A.ba,A.bc,A.bj,A.bl,A.iX,A.dA,A.dB,A.dD,A.dG,A.a2,A.jL,F.at,F.iB,F.eN,F.iO,F.f7,F.jo,F.dp,F.dq,F.bI,F.cm,F.y,F.cn,F.co,F.k3,F.k4,F.dL,O.cf,O.d9,O.iY,T.jz,X.jy,X.iJ,X.f3,V.aF,V.jh,V.jr])
q(J.a,[J.eH,J.cX,J.bg,J.w,J.c3,J.bf,H.dd,H.a1,W.e,W.i4,W.bx,W.cF,W.aU,W.J,W.fZ,W.as,W.io,W.ip,W.h0,W.cN,W.h2,W.iq,W.l,W.h8,W.aH,W.iG,W.hc,W.bE,W.iS,W.j8,W.hg,W.hh,W.aI,W.hi,W.hk,W.aK,W.ho,W.hr,W.aM,W.ht,W.aN,W.hz,W.ap,W.hF,W.jC,W.aA,W.hH,W.jH,W.jS,W.hP,W.hR,W.hT,W.hV,W.hX,P.aY,P.he,P.b1,P.hm,P.jg,P.hA,P.b3,P.hJ,P.i7,P.fW,P.ca,P.hw])
q(J.bg,[J.f4,J.bL,J.aX])
r(J.iL,J.w)
q(J.c3,[J.cW,J.eI])
q(P.L,[H.cY,P.fC,H.eK,H.fK,H.fd,H.h6,P.ep,P.f_,P.aD,P.fM,P.fJ,P.cd,P.eu,P.ew])
r(P.d1,P.dR)
q(P.d1,[H.ck,W.fX,W.a6,P.eB])
r(H.r,H.ck)
q(P.h,[H.n,H.aZ,H.b6,P.cV])
q(H.n,[H.d2,H.d_])
r(H.cO,H.aZ)
q(P.eG,[H.eQ,H.fT])
r(H.d6,H.d2)
r(H.cJ,H.cI)
r(H.di,P.fC)
q(H.bA,[H.fr,H.iM,H.kV,H.kW,H.kX,P.k8,P.k7,P.k9,P.ka,P.kr,P.kq,P.kK,P.kg,P.kh,P.iQ,P.iU,P.jW,P.jV,P.ir,P.is,P.jR,P.jO,P.jP,P.jQ,P.kt,P.ks,P.kE,P.kF,P.kG,W.it,W.j9,W.ja,W.jn,W.jw,W.kb,W.jd,W.jc,W.kj,W.kk,W.kp,W.kx,P.kn,P.ko,P.kC,P.kL,P.iC,P.iD,P.i8,E.jk,E.jl,E.jm,E.jB,D.iz,D.iA,F.kz,F.kN,F.kP,F.kQ,F.kR,F.lg,F.lf,F.lh,F.l_,F.kO,F.jq,F.k6,F.k5,F.k0,F.k1,O.j0,O.j1,O.j2,O.j3,O.j4,O.j5,O.j6,O.j7,T.jA,V.le,V.ji,V.jt,V.js,V.ju,V.l3,V.l4,V.l2,V.l5,V.l6,V.l7,V.l1,V.l8,V.l9,V.l0,V.la,V.lb,V.lc])
q(H.fr,[H.fk,H.bT])
r(P.d4,P.M)
q(P.d4,[H.Y,W.fV])
r(H.c7,H.a1)
q(H.c7,[H.dT,H.dV])
r(H.dU,H.dT)
r(H.bG,H.dU)
r(H.dW,H.dV)
r(H.de,H.dW)
q(H.de,[H.eV,H.eW,H.eX,H.eY,H.eZ,H.df,H.bH])
r(H.e4,H.h6)
r(P.e0,P.cV)
r(P.kf,P.ky)
r(P.dX,P.ea)
r(P.dP,P.dX)
r(P.e8,P.d5)
r(P.cl,P.e8)
q(P.et,[P.ia,P.iv])
r(P.ev,P.fm)
q(P.ev,[P.ib,P.iH,P.jX,P.jU])
r(P.jT,P.iv)
q(P.aD,[P.dl,P.eF])
r(P.h_,P.bO)
q(W.e,[W.t,W.eA,W.c4,W.ay,W.dZ,W.az,W.aj,W.e1,W.fQ,W.cp,P.es,P.bb])
q(W.t,[W.E,W.aE,W.cq])
q(W.E,[W.v,P.o])
q(W.v,[W.en,W.eo,W.bS,W.by,W.bz,W.bd,W.eC,W.c0,W.c2,W.fe,W.bm,W.du,W.fp,W.fq,W.cg])
r(W.ij,W.aU)
r(W.cL,W.fZ)
q(W.as,[W.il,W.im])
r(W.h1,W.h0)
r(W.cM,W.h1)
r(W.h3,W.h2)
r(W.ez,W.h3)
r(W.an,W.bx)
r(W.h9,W.h8)
r(W.bZ,W.h9)
r(W.hd,W.hc)
r(W.bD,W.hd)
r(W.b5,W.l)
q(W.b5,[W.bF,W.ao,W.bK])
r(W.eS,W.hg)
r(W.eT,W.hh)
r(W.hj,W.hi)
r(W.eU,W.hj)
r(W.hl,W.hk)
r(W.dg,W.hl)
r(W.hp,W.ho)
r(W.f6,W.hp)
r(W.fc,W.hr)
r(W.e_,W.dZ)
r(W.fg,W.e_)
r(W.hu,W.ht)
r(W.fh,W.hu)
r(W.fl,W.hz)
r(W.hG,W.hF)
r(W.fs,W.hG)
r(W.e2,W.e1)
r(W.ft,W.e2)
r(W.hI,W.hH)
r(W.fA,W.hI)
r(W.bo,W.ao)
r(W.hQ,W.hP)
r(W.fY,W.hQ)
r(W.dM,W.cN)
r(W.hS,W.hR)
r(W.hb,W.hS)
r(W.hU,W.hT)
r(W.dS,W.hU)
r(W.hW,W.hV)
r(W.hv,W.hW)
r(W.hY,W.hX)
r(W.hC,W.hY)
r(W.h4,W.fV)
r(W.dN,P.ce)
r(W.hE,W.dY)
r(P.km,P.kl)
r(P.af,P.hq)
r(P.hf,P.he)
r(P.eM,P.hf)
r(P.hn,P.hm)
r(P.f0,P.hn)
r(P.cb,P.o)
r(P.hB,P.hA)
r(P.fn,P.hB)
r(P.hK,P.hJ)
r(P.fB,P.hK)
r(P.er,P.fW)
r(P.f1,P.bb)
r(P.hx,P.hw)
r(P.fi,P.hx)
q(K.cU,[K.ae,L.dw])
q(E.ic,[Z.bV,A.cc,T.bJ])
q(D.S,[D.aV,D.aW,D.z,X.f8])
q(X.f8,[X.d3,X.c5,X.c6,X.dv])
q(O.ad,[D.cZ,U.c_,M.cG])
q(D.ie,[U.ih,U.a_])
q(U.a_,[U.cH,U.dm])
q(A.cc,[A.d7,A.ds])
q(A.a2,[A.ci,A.fF,A.fG,A.fH,A.fD,A.dx,A.fE,A.dy,A.dz,A.fI,A.dC,A.cj,A.dE,A.dF])
r(F.jv,F.iB)
r(F.jK,F.iO)
r(F.k2,F.k3)
r(F.je,F.k4)
q(O.cf,[O.d8,O.dr])
q(O.d9,[O.iV,O.iW,O.da])
q(O.da,[O.iZ,O.j_])
q(T.bJ,[T.fu,T.fw])
r(T.fv,T.fu)
q(X.jy,[X.i9,X.iF])
q(V.aF,[V.ex,V.eD,V.eE,V.f5])
s(H.ck,H.fL)
s(H.dT,P.j)
s(H.dU,H.cR)
s(H.dV,P.j)
s(H.dW,H.cR)
s(P.dR,P.j)
s(P.e8,P.hN)
s(P.ea,P.dn)
s(W.fZ,W.ik)
s(W.h0,P.j)
s(W.h1,W.N)
s(W.h2,P.j)
s(W.h3,W.N)
s(W.h8,P.j)
s(W.h9,W.N)
s(W.hc,P.j)
s(W.hd,W.N)
s(W.hg,P.M)
s(W.hh,P.M)
s(W.hi,P.j)
s(W.hj,W.N)
s(W.hk,P.j)
s(W.hl,W.N)
s(W.ho,P.j)
s(W.hp,W.N)
s(W.hr,P.M)
s(W.dZ,P.j)
s(W.e_,W.N)
s(W.ht,P.j)
s(W.hu,W.N)
s(W.hz,P.M)
s(W.hF,P.j)
s(W.hG,W.N)
s(W.e1,P.j)
s(W.e2,W.N)
s(W.hH,P.j)
s(W.hI,W.N)
s(W.hP,P.j)
s(W.hQ,W.N)
s(W.hR,P.j)
s(W.hS,W.N)
s(W.hT,P.j)
s(W.hU,W.N)
s(W.hV,P.j)
s(W.hW,W.N)
s(W.hX,P.j)
s(W.hY,W.N)
s(P.he,P.j)
s(P.hf,W.N)
s(P.hm,P.j)
s(P.hn,W.N)
s(P.hA,P.j)
s(P.hB,W.N)
s(P.hJ,P.j)
s(P.hK,W.N)
s(P.fW,P.M)
s(P.hw,P.j)
s(P.hx,W.N)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",I:"double",a4:"num",m:"String",ac:"bool",ai:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([S?])","~()","~(S)","~(l)","~(ao)","~(cm,I,I)","~(m,@)","~(k,k)","~(k,h<bC>)","I(I,I)","~(at)","~(S?)","~(bK)","ai()","~(~())","~(@,@)","I(I)","@()","~(k,h<bi>)","~(k,h<aL>)","~(k,h<a_?>)","ac(E,m,m,cr)","~(ch,m,k)","ac(t)","~(k,h<au>)","K(I)","ac(aJ)","ac(m)","~(bF)","~(~(S))","m(k)","I()","~(a4)","~(@)","ai(@,@)","~(t,t?)","~(bo)","m(m)","ac(h<au>)","@(@)","ch(@,@)","~(m,m?)","k(k,k)","~(m[@])","~(m,k)","H<m,m>(H<m,m>,m)","~(P?,P?)","ai(~())","bV(k)","ai(@)","@(m)","~(m,m)","k(ba,ba)","k(bc,bc)","k(bj,bj)","k(bl,bl)","~(jD)","ac(aF?)","k(@,@)","@(@,m)","m(e)","E(t)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pn(v.typeUniverse,JSON.parse('{"f4":"bg","bL":"bg","aX":"bg","qY":"l","r9":"l","r_":"bb","qZ":"e","rg":"e","rj":"e","qX":"o","ra":"o","r0":"v","rd":"v","rb":"t","r8":"t","rJ":"aj","r4":"b5","r1":"aE","rk":"aE","ri":"ao","rc":"bD","r5":"J","r6":"ap","rf":"bG","re":"a1","eH":{"ac":[]},"bg":{"mj":[]},"w":{"p":["1"],"n":["1"],"h":["1"]},"iL":{"w":["1"],"p":["1"],"n":["1"],"h":["1"]},"c3":{"I":[],"a4":[]},"cW":{"I":[],"k":[],"a4":[]},"eI":{"I":[],"a4":[]},"bf":{"m":[]},"cY":{"L":[]},"r":{"j":["k"],"p":["k"],"n":["k"],"h":["k"],"j.E":"k"},"n":{"h":["1"]},"d2":{"n":["1"],"h":["1"]},"aZ":{"h":["2"],"h.E":"2"},"cO":{"aZ":["1","2"],"n":["2"],"h":["2"],"h.E":"2"},"d6":{"d2":["2"],"n":["2"],"h":["2"],"h.E":"2"},"b6":{"h":["1"],"h.E":"1"},"ck":{"j":["1"],"p":["1"],"n":["1"],"h":["1"]},"cI":{"H":["1","2"]},"cJ":{"H":["1","2"]},"di":{"L":[]},"eK":{"L":[]},"fK":{"L":[]},"bA":{"cT":[]},"fr":{"cT":[]},"fk":{"cT":[]},"bT":{"cT":[]},"fd":{"L":[]},"Y":{"M":["1","2"],"H":["1","2"],"M.V":"2"},"d_":{"n":["1"],"h":["1"],"h.E":"1"},"eJ":{"mx":[]},"c7":{"B":["1"],"a1":[]},"bG":{"j":["I"],"B":["I"],"p":["I"],"a1":[],"n":["I"],"h":["I"],"j.E":"I"},"de":{"j":["k"],"B":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"]},"eV":{"j":["k"],"B":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"eW":{"j":["k"],"B":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"eX":{"j":["k"],"B":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"eY":{"j":["k"],"B":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"eZ":{"j":["k"],"B":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"df":{"j":["k"],"B":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"bH":{"j":["k"],"ch":[],"B":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"h6":{"L":[]},"e4":{"L":[]},"e3":{"jD":[]},"e0":{"h":["1"],"h.E":"1"},"dP":{"dn":["1"],"n":["1"],"h":["1"]},"cV":{"h":["1"]},"d1":{"j":["1"],"p":["1"],"n":["1"],"h":["1"]},"d4":{"M":["1","2"],"H":["1","2"]},"M":{"H":["1","2"]},"d5":{"H":["1","2"]},"cl":{"H":["1","2"]},"dX":{"dn":["1"],"n":["1"],"h":["1"]},"I":{"a4":[]},"k":{"a4":[]},"p":{"n":["1"],"h":["1"]},"ep":{"L":[]},"fC":{"L":[]},"f_":{"L":[]},"aD":{"L":[]},"dl":{"L":[]},"eF":{"L":[]},"fM":{"L":[]},"fJ":{"L":[]},"cd":{"L":[]},"eu":{"L":[]},"f2":{"L":[]},"dt":{"L":[]},"ew":{"L":[]},"bO":{"fN":[]},"hs":{"fN":[]},"h_":{"fN":[]},"v":{"E":[],"t":[],"e":[]},"bd":{"E":[],"t":[],"e":[]},"E":{"t":[],"e":[]},"an":{"bx":[]},"bF":{"l":[]},"ao":{"l":[]},"t":{"e":[]},"ay":{"e":[]},"az":{"e":[]},"aj":{"e":[]},"bK":{"l":[]},"b5":{"l":[]},"bo":{"ao":[],"l":[]},"cr":{"aJ":[]},"en":{"E":[],"t":[],"e":[]},"eo":{"E":[],"t":[],"e":[]},"bS":{"E":[],"t":[],"e":[]},"by":{"E":[],"t":[],"e":[]},"bz":{"E":[],"t":[],"e":[]},"aE":{"t":[],"e":[]},"cM":{"j":["af<a4>"],"p":["af<a4>"],"B":["af<a4>"],"n":["af<a4>"],"h":["af<a4>"],"j.E":"af<a4>"},"cN":{"af":["a4"]},"ez":{"j":["m"],"p":["m"],"B":["m"],"n":["m"],"h":["m"],"j.E":"m"},"fX":{"j":["E"],"p":["E"],"n":["E"],"h":["E"],"j.E":"E"},"bZ":{"j":["an"],"p":["an"],"B":["an"],"n":["an"],"h":["an"],"j.E":"an"},"eA":{"e":[]},"eC":{"E":[],"t":[],"e":[]},"bD":{"j":["t"],"p":["t"],"B":["t"],"n":["t"],"h":["t"],"j.E":"t"},"c0":{"E":[],"t":[],"e":[]},"c2":{"E":[],"t":[],"e":[]},"c4":{"e":[]},"eS":{"M":["m","@"],"H":["m","@"],"M.V":"@"},"eT":{"M":["m","@"],"H":["m","@"],"M.V":"@"},"eU":{"j":["aI"],"p":["aI"],"B":["aI"],"n":["aI"],"h":["aI"],"j.E":"aI"},"a6":{"j":["t"],"p":["t"],"n":["t"],"h":["t"],"j.E":"t"},"dg":{"j":["t"],"p":["t"],"B":["t"],"n":["t"],"h":["t"],"j.E":"t"},"f6":{"j":["aK"],"p":["aK"],"B":["aK"],"n":["aK"],"h":["aK"],"j.E":"aK"},"fc":{"M":["m","@"],"H":["m","@"],"M.V":"@"},"fe":{"E":[],"t":[],"e":[]},"fg":{"j":["ay"],"p":["ay"],"B":["ay"],"e":[],"n":["ay"],"h":["ay"],"j.E":"ay"},"fh":{"j":["aM"],"p":["aM"],"B":["aM"],"n":["aM"],"h":["aM"],"j.E":"aM"},"fl":{"M":["m","m"],"H":["m","m"],"M.V":"m"},"bm":{"E":[],"t":[],"e":[]},"du":{"E":[],"t":[],"e":[]},"fp":{"E":[],"t":[],"e":[]},"fq":{"E":[],"t":[],"e":[]},"cg":{"E":[],"t":[],"e":[]},"fs":{"j":["aj"],"p":["aj"],"B":["aj"],"n":["aj"],"h":["aj"],"j.E":"aj"},"ft":{"j":["az"],"p":["az"],"B":["az"],"e":[],"n":["az"],"h":["az"],"j.E":"az"},"fA":{"j":["aA"],"p":["aA"],"B":["aA"],"n":["aA"],"h":["aA"],"j.E":"aA"},"fQ":{"e":[]},"cp":{"e":[]},"cq":{"t":[],"e":[]},"fY":{"j":["J"],"p":["J"],"B":["J"],"n":["J"],"h":["J"],"j.E":"J"},"dM":{"af":["a4"]},"hb":{"j":["aH?"],"p":["aH?"],"B":["aH?"],"n":["aH?"],"h":["aH?"],"j.E":"aH?"},"dS":{"j":["t"],"p":["t"],"B":["t"],"n":["t"],"h":["t"],"j.E":"t"},"hv":{"j":["aN"],"p":["aN"],"B":["aN"],"n":["aN"],"h":["aN"],"j.E":"aN"},"hC":{"j":["ap"],"p":["ap"],"B":["ap"],"n":["ap"],"h":["ap"],"j.E":"ap"},"fV":{"M":["m","m"],"H":["m","m"]},"h4":{"M":["m","m"],"H":["m","m"],"M.V":"m"},"dN":{"ce":["1"]},"dh":{"aJ":[]},"dY":{"aJ":[]},"hE":{"aJ":[]},"hD":{"aJ":[]},"e5":{"bE":[]},"eB":{"j":["E"],"p":["E"],"n":["E"],"h":["E"],"j.E":"E"},"af":{"hq":["1"]},"eM":{"j":["aY"],"p":["aY"],"n":["aY"],"h":["aY"],"j.E":"aY"},"f0":{"j":["b1"],"p":["b1"],"n":["b1"],"h":["b1"],"j.E":"b1"},"cb":{"o":[],"E":[],"t":[],"e":[]},"fn":{"j":["m"],"p":["m"],"n":["m"],"h":["m"],"j.E":"m"},"o":{"E":[],"t":[],"e":[]},"fB":{"j":["b3"],"p":["b3"],"n":["b3"],"h":["b3"],"j.E":"b3"},"er":{"M":["m","@"],"H":["m","@"],"M.V":"@"},"es":{"e":[]},"bb":{"e":[]},"f1":{"e":[]},"fi":{"j":["H<@,@>"],"p":["H<@,@>"],"n":["H<@,@>"],"h":["H<@,@>"],"j.E":"H<@,@>"},"cU":{"b_":[]},"aS":{"b_":[]},"ae":{"b_":[]},"f9":{"b_":[]},"u":{"b_":[]},"dw":{"b_":[]},"ad":{"h":["1"],"ad.T":"1"},"aV":{"S":[]},"aW":{"S":[]},"z":{"S":[]},"d3":{"S":[]},"c5":{"S":[]},"c6":{"S":[]},"f8":{"S":[]},"dv":{"S":[]},"o6":{"au":[]},"bX":{"au":[]},"ox":{"au":[]},"oQ":{"au":[]},"cZ":{"ad":["au"],"h":["au"],"ad.T":"au"},"cH":{"a_":[]},"c_":{"ad":["a_?"],"a_":[],"h":["a_?"],"ad.T":"a_?"},"dm":{"a_":[]},"dH":{"a_":[]},"dI":{"a_":[]},"dJ":{"a_":[]},"cG":{"ad":["aL"],"aL":[],"h":["aL"],"ad.T":"aL"},"cK":{"aL":[]},"cQ":{"aL":[]},"ci":{"a2":[]},"cj":{"a2":[]},"d7":{"cc":[]},"ds":{"cc":[]},"fF":{"a2":[]},"fG":{"a2":[]},"fH":{"a2":[]},"fD":{"a2":[]},"dx":{"a2":[]},"fE":{"a2":[]},"dy":{"a2":[]},"dz":{"a2":[]},"fI":{"a2":[]},"dC":{"a2":[]},"dE":{"a2":[]},"dF":{"a2":[]},"d8":{"cf":[]},"dr":{"cf":[]},"fu":{"bJ":[]},"fw":{"bJ":[]},"fv":{"bJ":[]},"ex":{"aF":[]},"eD":{"aF":[]},"eE":{"aF":[]},"f5":{"aF":[]},"ch":{"p":["k"],"n":["k"],"h":["k"]}}'))
H.pm(v.typeUniverse,JSON.parse('{"ag":1,"n":1,"bh":1,"eQ":2,"fT":1,"cR":1,"fL":1,"ck":1,"cI":2,"eO":1,"c7":1,"ce":1,"bN":1,"fm":2,"dQ":1,"cV":1,"d1":1,"d4":2,"hN":2,"d5":2,"dX":1,"dR":1,"e8":2,"ea":1,"et":2,"ev":2,"eG":1,"dN":1,"N":1,"cS":1,"aV":1,"aW":1,"z":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lX
return{cR:s("bS"),fK:s("bx"),Y:s("by"),eT:s("bV"),ed:s("bW"),gA:s("bz"),ar:s("cF"),gw:s("n<@>"),h:s("E"),m:s("bC"),bU:s("L"),aD:s("l"),c8:s("an"),bX:s("bZ"),b:s("cT"),x:s("bE"),fS:s("c0"),gk:s("c2"),eu:s("w<eq>"),i:s("w<o6>"),cn:s("w<ba>"),U:s("w<bX>"),fD:s("w<bc>"),C:s("w<bd>"),u:s("w<at>"),fv:s("w<c1>"),e:s("w<au>"),L:s("w<eN>"),F:s("w<p<bd>>"),z:s("w<b_>"),fA:s("w<bi>"),Q:s("w<aJ>"),q:s("w<f7>"),cG:s("w<U>"),eg:s("w<bj>"),o:s("w<ox>"),ba:s("w<aL>"),D:s("w<oQ>"),c3:s("w<bl>"),g9:s("w<ce<P>>"),s:s("w<m>"),ga:s("w<bJ>"),gT:s("w<aA>"),ab:s("w<dw>"),gN:s("w<ch>"),dC:s("w<a2>"),c:s("w<dA>"),V:s("w<dB>"),B:s("w<dD>"),J:s("w<dG>"),k:s("w<cm>"),n:s("w<I>"),gn:s("w<@>"),t:s("w<k>"),g6:s("w<aF?>"),eJ:s("w<a_?>"),bc:s("w<cf?>"),p:s("w<cj?>"),a:s("w<~(S)>"),T:s("cX"),eH:s("mj"),M:s("aX"),aU:s("B<@>"),fX:s("Y<k,ac>"),y:s("Y<k,k>"),O:s("p<dA>"),d:s("p<dB>"),r:s("p<dD>"),R:s("p<dG>"),E:s("p<@>"),bv:s("d3"),f:s("H<@,@>"),dv:s("d6<m,m>"),gc:s("bi"),bu:s("c4"),Z:s("c5"),bZ:s("c6"),cH:s("dd"),dE:s("a1"),bm:s("bH"),P:s("ai"),K:s("P"),I:s("af<a4>"),fJ:s("mx"),ew:s("cb"),fg:s("cc"),N:s("m"),g7:s("o"),bY:s("bm"),aW:s("cg"),aF:s("jD"),bJ:s("fy"),dr:s("dv"),v:s("dx"),w:s("ci"),g:s("dy"),bw:s("dz"),bK:s("dC"),j:s("cj"),G:s("dE"),l:s("dF"),ak:s("bL"),dw:s("cl<m,m>"),dD:s("fN"),h9:s("cq"),ac:s("a6"),cJ:s("ac"),gR:s("I"),A:s("@"),S:s("k"),aw:s("0&*"),_:s("P*"),bG:s("mh<ai>?"),eI:s("d7?"),X:s("P?"),gW:s("ca?"),dm:s("ds?"),dl:s("fj?"),f7:s("fz?"),W:s("ci?"),H:s("a4"),h2:s("~(S)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.p=W.by.prototype
C.i=W.bz.prototype
C.R=W.bd.prototype
C.U=J.a.prototype
C.b=J.w.prototype
C.c=J.cW.prototype
C.V=J.cX.prototype
C.d=J.c3.prototype
C.a=J.bf.prototype
C.W=J.aX.prototype
C.a0=H.bH.prototype
C.B=J.f4.prototype
C.C=P.ca.prototype
C.D=W.du.prototype
C.o=J.bL.prototype
C.E=W.bo.prototype
C.F=W.cp.prototype
C.G=new E.bU("Browser.chrome")
C.q=new E.bU("Browser.firefox")
C.r=new E.bU("Browser.edge")
C.H=new E.bU("Browser.other")
C.a6=new P.ib()
C.I=new P.ia()
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

C.P=new P.f2()
C.e=new P.jT()
C.Q=new P.jX()
C.f=new P.kf()
C.m=new P.bB(0)
C.S=new P.bB(5e6)
C.T=new P.iI("element",!1,!1,!1)
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
C.a_=new H.cJ(0,{},C.v,H.lX("cJ<m,m>"))
C.a1=new E.c8("OperatingSystem.windows")
C.A=new E.c8("OperatingSystem.mac")
C.a2=new E.c8("OperatingSystem.linux")
C.a3=new E.c8("OperatingSystem.other")
C.a4=new P.jU(!1)
C.a5=new P.cs(null,2)})();(function staticFields(){$.kc=null
$.aT=0
$.cD=null
$.m9=null
$.nq=null
$.ni=null
$.nw=null
$.kS=null
$.kZ=null
$.lZ=null
$.cv=null
$.ed=null
$.ee=null
$.lT=!1
$.aO=C.f
$.ak=H.b([],H.lX("w<P>"))
$.be=null
$.lo=null
$.me=null
$.md=null
$.dO=P.T(t.N,t.b)
$.iw=null
$.mm=null
$.ms=null
$.a9=null
$.b2=null
$.mz=null
$.bM=null
$.mQ=null
$.mP=null
$.jY=null
$.jZ=null
$.k_=null
$.mO=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"r7","nE",function(){return H.qF("_$dart_dartClosure")})
s($,"rl","nG",function(){return H.b4(H.jJ({
toString:function(){return"$receiver$"}}))})
s($,"rm","nH",function(){return H.b4(H.jJ({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"rn","nI",function(){return H.b4(H.jJ(null))})
s($,"ro","nJ",function(){return H.b4(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rr","nM",function(){return H.b4(H.jJ(void 0))})
s($,"rs","nN",function(){return H.b4(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rq","nL",function(){return H.b4(H.mI(null))})
s($,"rp","nK",function(){return H.b4(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"ru","nP",function(){return H.b4(H.mI(void 0))})
s($,"rt","nO",function(){return H.b4(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"rK","m3",function(){return P.p0()})
s($,"rv","nQ",function(){return new P.jW().$0()})
s($,"rw","nR",function(){return new P.jV().$0()})
s($,"rL","nV",function(){return new Int8Array(H.cu(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rO","nX",function(){return P.oJ("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"t0","nY",function(){return P.pI()})
s($,"rM","nW",function(){return P.mk(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rD","nU",function(){return Z.aB(0)})
s($,"rx","nS",function(){return Z.aB(511)})
s($,"rF","aQ",function(){return Z.aB(1)})
s($,"rE","bv",function(){return Z.aB(2)})
s($,"rz","bu",function(){return Z.aB(4)})
s($,"rG","bw",function(){return Z.aB(8)})
s($,"rH","bQ",function(){return Z.aB(16)})
s($,"rA","ek",function(){return Z.aB(32)})
s($,"rB","el",function(){return Z.aB(64)})
s($,"rC","nT",function(){return Z.aB(96)})
s($,"rI","cB",function(){return Z.aB(128)})
s($,"ry","bt",function(){return Z.aB(256)})
s($,"r3","nD",function(){return new V.ix()})
r($,"r2","F",function(){return $.nD()})
r($,"rh","nF",function(){var q=V.lz(),p=V.lE(),o=$.mO
return V.mn(q,p,o==null?$.mO=V.oZ(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.dd,DataView:H.a1,ArrayBufferView:H.a1,Float32Array:H.bG,Float64Array:H.bG,Int16Array:H.eV,Int32Array:H.eW,Int8Array:H.eX,Uint16Array:H.eY,Uint32Array:H.eZ,Uint8ClampedArray:H.df,CanvasPixelArray:H.df,Uint8Array:H.bH,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.i4,HTMLAnchorElement:W.en,HTMLAreaElement:W.eo,HTMLBaseElement:W.bS,Blob:W.bx,HTMLBodyElement:W.by,HTMLCanvasElement:W.bz,CanvasRenderingContext2D:W.cF,CDATASection:W.aE,CharacterData:W.aE,Comment:W.aE,ProcessingInstruction:W.aE,Text:W.aE,CSSPerspective:W.ij,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.cL,MSStyleCSSProperties:W.cL,CSS2Properties:W.cL,CSSImageValue:W.as,CSSKeywordValue:W.as,CSSNumericValue:W.as,CSSPositionValue:W.as,CSSResourceValue:W.as,CSSUnitValue:W.as,CSSURLImageValue:W.as,CSSStyleValue:W.as,CSSMatrixComponent:W.aU,CSSRotation:W.aU,CSSScale:W.aU,CSSSkew:W.aU,CSSTranslation:W.aU,CSSTransformComponent:W.aU,CSSTransformValue:W.il,CSSUnparsedValue:W.im,DataTransferItemList:W.io,HTMLDivElement:W.bd,DOMException:W.ip,ClientRectList:W.cM,DOMRectList:W.cM,DOMRectReadOnly:W.cN,DOMStringList:W.ez,DOMTokenList:W.iq,Element:W.E,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,SubmitEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.an,FileList:W.bZ,FileWriter:W.eA,HTMLFormElement:W.eC,Gamepad:W.aH,History:W.iG,HTMLCollection:W.bD,HTMLFormControlsCollection:W.bD,HTMLOptionsCollection:W.bD,ImageData:W.bE,HTMLImageElement:W.c0,HTMLInputElement:W.c2,KeyboardEvent:W.bF,Location:W.iS,MediaList:W.j8,MessagePort:W.c4,MIDIInputMap:W.eS,MIDIOutputMap:W.eT,MimeType:W.aI,MimeTypeArray:W.eU,PointerEvent:W.ao,MouseEvent:W.ao,DragEvent:W.ao,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,DocumentType:W.t,Node:W.t,NodeList:W.dg,RadioNodeList:W.dg,Plugin:W.aK,PluginArray:W.f6,RTCStatsReport:W.fc,HTMLSelectElement:W.fe,SourceBuffer:W.ay,SourceBufferList:W.fg,SpeechGrammar:W.aM,SpeechGrammarList:W.fh,SpeechRecognitionResult:W.aN,Storage:W.fl,CSSStyleSheet:W.ap,StyleSheet:W.ap,HTMLTableCellElement:W.bm,HTMLTableDataCellElement:W.bm,HTMLTableHeaderCellElement:W.bm,HTMLTableElement:W.du,HTMLTableRowElement:W.fp,HTMLTableSectionElement:W.fq,HTMLTemplateElement:W.cg,TextTrack:W.az,TextTrackCue:W.aj,VTTCue:W.aj,TextTrackCueList:W.fs,TextTrackList:W.ft,TimeRanges:W.jC,Touch:W.aA,TouchEvent:W.bK,TouchList:W.fA,TrackDefaultList:W.jH,CompositionEvent:W.b5,FocusEvent:W.b5,TextEvent:W.b5,UIEvent:W.b5,URL:W.jS,VideoTrackList:W.fQ,WheelEvent:W.bo,Window:W.cp,DOMWindow:W.cp,Attr:W.cq,CSSRuleList:W.fY,ClientRect:W.dM,DOMRect:W.dM,GamepadList:W.hb,NamedNodeMap:W.dS,MozNamedAttrMap:W.dS,SpeechRecognitionResultList:W.hv,StyleSheetList:W.hC,SVGLength:P.aY,SVGLengthList:P.eM,SVGNumber:P.b1,SVGNumberList:P.f0,SVGPointList:P.jg,SVGScriptElement:P.cb,SVGStringList:P.fn,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.b3,SVGTransformList:P.fB,AudioBuffer:P.i7,AudioParamMap:P.er,AudioTrackList:P.es,AudioContext:P.bb,webkitAudioContext:P.bb,BaseAudioContext:P.bb,OfflineAudioContext:P.f1,WebGL2RenderingContext:P.ca,SQLResultSetRowList:P.fi})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c7.$nativeSuperclassTag="ArrayBufferView"
H.dT.$nativeSuperclassTag="ArrayBufferView"
H.dU.$nativeSuperclassTag="ArrayBufferView"
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.dV.$nativeSuperclassTag="ArrayBufferView"
H.dW.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
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
var s=V.qP
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
