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
a[c]=function(){a[c]=function(){H.qQ(b)}
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
if(a[b]!==s)H.qR(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lV"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lV(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={lv:function lv(){},
lx:function(a){return new H.cX("Field '"+a+"' has been assigned during initialization.")},
kO:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
jq:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
oO:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
qt:function(a,b,c){return a},
or:function(a,b,c,d){if(t.gw.b(a))return new H.cN(a,b,c.L("@<0>").bk(d).L("cN<1,2>"))
return new H.aZ(a,b,c.L("@<0>").bk(d).L("aZ<1,2>"))},
iD:function(){return new P.cc("No element")},
oi:function(){return new P.cc("Too many elements")},
oL:function(a,b){H.fe(a,0,J.aR(a)-1,b)},
fe:function(a,b,c,d){if(c-b<=32)H.oK(a,b,c,d)
else H.oJ(a,b,c,d)},
oK:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.cz(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.az()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
oJ:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.ab(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.ab(a4+a5,2),f=g-j,e=g+j,d=J.cz(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.az()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.az()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.az()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.az()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.az()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.az()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.az()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.az()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.az()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.X(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.fe(a3,a4,r-2,a6)
H.fe(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.X(a6.$2(d.h(a3,r),b),0);)++r
for(;J.X(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.fe(a3,r,q,a6)}else H.fe(a3,r,q,a6)},
cX:function cX(a){this.a=a},
r:function r(a){this.a=a},
n:function n(){},
d1:function d1(){},
bh:function bh(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
eO:function eO(a,b){this.a=null
this.b=a
this.c=b},
d5:function d5(a,b,c){this.a=a
this.b=b
this.$ti=c},
b6:function b6(a,b,c){this.a=a
this.b=b
this.$ti=c},
fQ:function fQ(a,b){this.a=a
this.b=b},
cQ:function cQ(){},
fI:function fI(){},
cj:function cj(){},
ob:function(){throw H.c(P.B("Cannot modify unmodifiable Map"))},
ny:function(a){var s,r=H.nx(a)
if(r!=null)return r
s="minified:"+a
return s},
nq:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
y:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cB(a)
return s},
dh:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mq:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.aa(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.G(q,o)|32)>r)return n}return parseInt(a,b)},
di:function(a){return H.ou(a)},
ou:function(a){var s,r,q,p
if(a instanceof P.Q)return H.aq(H.b8(a),null)
if(J.ef(a)===C.T||t.ak.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.aq(H.b8(a),null)},
ov:function(){if(!!self.location)return self.location.href
return null},
mp:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
oD:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.kC(q))throw H.c(H.ee(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.b7(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.ee(q))}return H.mp(p)},
mr:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.kC(q))throw H.c(H.ee(q))
if(q<0)throw H.c(H.ee(q))
if(q>65535)return H.oD(a)}return H.mp(a)},
oE:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
av:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.b7(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.aa(a,0,1114111,null,null))},
c8:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oC:function(a){var s=H.c8(a).getFullYear()+0
return s},
oA:function(a){var s=H.c8(a).getMonth()+1
return s},
ow:function(a){var s=H.c8(a).getDate()+0
return s},
ox:function(a){var s=H.c8(a).getHours()+0
return s},
oz:function(a){var s=H.c8(a).getMinutes()+0
return s},
oB:function(a){var s=H.c8(a).getSeconds()+0
return s},
oy:function(a){var s=H.c8(a).getMilliseconds()+0
return s},
no:function(a){throw H.c(H.ee(a))},
d:function(a,b){if(a==null)J.aR(a)
throw H.c(H.cx(a,b))},
cx:function(a,b){var s,r="index"
if(!H.kC(b))return new P.aC(!0,b,r,null)
s=J.aR(a)
if(b<0||b>=s)return P.P(b,a,r,null,s)
return P.f9(b,r)},
qx:function(a,b,c){if(a>c)return P.aa(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aa(b,a,c,"end",null)
return new P.aC(!0,b,"end",null)},
ee:function(a){return new P.aC(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.eZ()
s=new Error()
s.dartException=a
r=H.qS
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qS:function(){return J.cB(this.dartException)},
i:function(a){throw H.c(a)},
q:function(a){throw H.c(P.aG(a))},
b4:function(a){var s,r,q,p,o,n
a=H.nt(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jB(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jC:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mE:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lw:function(a,b){var s=b==null,r=s?null:b.method
return new H.eI(a,r,s?null:b.receiver)},
ak:function(a){if(a==null)return new H.j8(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bN(a,a.dartException)
return H.qp(a)},
bN:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qp:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.b7(r,16)&8191)===10)switch(q){case 438:return H.bN(a,H.lw(H.y(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.y(s)+" (Error "+q+")"
return H.bN(a,new H.dg(p,e))}}if(a instanceof TypeError){o=$.nC()
n=$.nD()
m=$.nE()
l=$.nF()
k=$.nI()
j=$.nJ()
i=$.nH()
$.nG()
h=$.nL()
g=$.nK()
f=o.ax(s)
if(f!=null)return H.bN(a,H.lw(s,f))
else{f=n.ax(s)
if(f!=null){f.method="call"
return H.bN(a,H.lw(s,f))}else{f=m.ax(s)
if(f==null){f=l.ax(s)
if(f==null){f=k.ax(s)
if(f==null){f=j.ax(s)
if(f==null){f=i.ax(s)
if(f==null){f=l.ax(s)
if(f==null){f=h.ax(s)
if(f==null){f=g.ax(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bN(a,new H.dg(s,f==null?e:f.method))}}return H.bN(a,new H.fH(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dq()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bN(a,new P.aC(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dq()
return a},
lY:function(a){var s
if(a==null)return new H.hv(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hv(a)},
qz:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qH:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
cw:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qH)
a.$identity=s
return s},
oa:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.fj().constructor.prototype):Object.create(new H.bS(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aT
if(typeof r!=="number")return r.X()
$.aT=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.mc(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.o6(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.mc(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
o6:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nn,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.o4:H.o3
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
o7:function(a,b,c,d){var s=H.mb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
mc:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.o9(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.o7(r,!p,s,b)
if(r===0){p=$.aT
if(typeof p!=="number")return p.X()
$.aT=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cC
return new Function(p+(o==null?$.cC=H.i7("self"):o)+";return "+n+"."+H.y(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aT
if(typeof p!=="number")return p.X()
$.aT=p+1
m+=p
p="return function("+m+"){return this."
o=$.cC
return new Function(p+(o==null?$.cC=H.i7("self"):o)+"."+H.y(s)+"("+m+");}")()},
o8:function(a,b,c,d){var s=H.mb,r=H.o5
switch(b?-1:a){case 0:throw H.c(new H.fc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
o9:function(a,b){var s,r,q,p,o,n,m,l=$.cC
if(l==null)l=$.cC=H.i7("self")
s=$.ma
if(s==null)s=$.ma=H.i7("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.o8(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.y(r)+"(this."+s+");"
n=$.aT
if(typeof n!=="number")return n.X()
$.aT=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.y(r)+"(this."+s+", "+m+");"
n=$.aT
if(typeof n!=="number")return n.X()
$.aT=n+1
return new Function(o+n+"}")()},
lV:function(a,b,c,d,e,f,g){return H.oa(a,b,c,d,!!e,!!f,g)},
o3:function(a,b){return H.hJ(v.typeUniverse,H.b8(a.a),b)},
o4:function(a,b){return H.hJ(v.typeUniverse,H.b8(a.c),b)},
mb:function(a){return a.a},
o5:function(a){return a.c},
i7:function(a){var s,r,q,p=new H.bS("self","target","receiver","name"),o=J.lu(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bQ("Field name "+a+" not found."))},
qQ:function(a){throw H.c(new P.et(a))},
qB:function(a){return v.getIsolateTag(a)},
qR:function(a){return H.i(new H.cX(a))},
rZ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qK:function(a){var s,r,q,p,o,n=$.nm.$1(a),m=$.kM[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kT[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ne.$2(a,n)
if(q!=null){m=$.kM[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kT[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.lg(s)
$.kM[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kT[n]=s
return s}if(p==="-"){o=H.lg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nr(a,s)
if(p==="*")throw H.c(P.jF(n))
if(v.leafTags[n]===true){o=H.lg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nr(a,s)},
nr:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.m_(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
lg:function(a){return J.m_(a,!1,null,!!a.$iA)},
qM:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.lg(s)
else return J.m_(s,c,null,null)},
qF:function(){if(!0===$.lZ)return
$.lZ=!0
H.qG()},
qG:function(){var s,r,q,p,o,n,m,l
$.kM=Object.create(null)
$.kT=Object.create(null)
H.qE()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ns.$1(o)
if(n!=null){m=H.qM(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qE:function(){var s,r,q,p,o,n,m=C.I()
m=H.cv(C.J,H.cv(C.K,H.cv(C.u,H.cv(C.u,H.cv(C.L,H.cv(C.M,H.cv(C.N(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nm=new H.kP(p)
$.ne=new H.kQ(o)
$.ns=new H.kR(n)},
cv:function(a,b){return a(b)||b},
om:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a7("Illegal RegExp pattern ("+String(n)+")",a,null))},
nv:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qy:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nt:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m2:function(a,b,c){var s=H.qP(a,b,c)
return s},
qP:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nt(b),'g'),H.qy(c))},
cH:function cH(){},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jB:function jB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dg:function dg(a,b){this.a=a
this.b=b},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(a){this.a=a},
j8:function j8(a){this.a=a},
hv:function hv(a){this.a=a
this.b=null},
by:function by(){},
fq:function fq(){},
fj:function fj(){},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fc:function fc(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iF:function iF(a){this.a=a},
iI:function iI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cZ:function cZ(a,b){this.a=a
this.$ti=b},
eM:function eM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
eH:function eH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ct:function(a){return a},
b7:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cx(b,a))},
pD:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.qx(a,b,c))
return b},
db:function db(){},
a1:function a1(){},
c6:function c6(){},
bE:function bE(){},
dc:function dc(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
dd:function dd(){},
bF:function bF(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
my:function(a,b){var s=b.c
return s==null?b.c=H.lL(a,b.z,!0):s},
mx:function(a,b){var s=b.c
return s==null?b.c=H.e4(a,"mi",[b.z]):s},
mz:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mz(a.z)
return s===11||s===12},
oH:function(a){return a.cy},
lX:function(a){return H.lM(v.typeUniverse,a,!1)},
bq:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bq(a,s,a0,a1)
if(r===s)return b
return H.mY(a,r,!0)
case 7:s=b.z
r=H.bq(a,s,a0,a1)
if(r===s)return b
return H.lL(a,r,!0)
case 8:s=b.z
r=H.bq(a,s,a0,a1)
if(r===s)return b
return H.mX(a,r,!0)
case 9:q=b.Q
p=H.ed(a,q,a0,a1)
if(p===q)return b
return H.e4(a,b.z,p)
case 10:o=b.z
n=H.bq(a,o,a0,a1)
m=b.Q
l=H.ed(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lJ(a,n,l)
case 11:k=b.z
j=H.bq(a,k,a0,a1)
i=b.Q
h=H.qm(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mW(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.ed(a,g,a0,a1)
o=b.z
n=H.bq(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lK(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.i0("Attempted to substitute unexpected RTI kind "+c))}},
ed:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bq(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qn:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bq(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
qm:function(a,b,c,d){var s,r=b.a,q=H.ed(a,r,c,d),p=b.b,o=H.ed(a,p,c,d),n=b.c,m=H.qn(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.h7()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
qu:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.nn(s)
return a.$S()}return null},
np:function(a,b){var s
if(H.mz(b))if(a instanceof H.by){s=H.qu(a)
if(s!=null)return s}return H.b8(a)},
b8:function(a){var s
if(a instanceof P.Q){s=a.$ti
return s!=null?s:H.lR(a)}if(Array.isArray(a))return H.kt(a)
return H.lR(J.ef(a))},
kt:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
W:function(a){var s=a.$ti
return s!=null?s:H.lR(a)},
lR:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pL(a,s)},
pL:function(a,b){var s=a instanceof H.by?a.__proto__.__proto__.constructor:b,r=H.pl(v.typeUniverse,s.name)
b.$ccache=r
return r},
nn:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lM(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pK:function(a){var s,r,q,p=this
if(p===t.K)return H.ea(p,a,H.pP)
if(!H.b9(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.ea(p,a,H.pS)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.kC
else if(r===t.gR||r===t.H)q=H.pO
else if(r===t.N)q=H.pQ
else q=r===t.cJ?H.kB:null
if(q!=null)return H.ea(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.qI)){p.r="$i"+s
return H.ea(p,a,H.pR)}}else if(s===7)return H.ea(p,a,H.pI)
return H.ea(p,a,H.pG)},
ea:function(a,b,c){a.b=c
return a.b(b)},
pJ:function(a){var s,r=this,q=H.pF
if(!H.b9(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.pC
else if(r===t.K)q=H.pB
else{s=H.eg(r)
if(s)q=H.pH}r.a=q
return r.a(a)},
lU:function(a){var s,r=a.y
if(!H.b9(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.lU(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pG:function(a){var s=this
if(a==null)return H.lU(s)
return H.S(v.typeUniverse,H.np(a,s),null,s,null)},
pI:function(a){if(a==null)return!0
return this.z.b(a)},
pR:function(a){var s,r=this
if(a==null)return H.lU(r)
s=r.r
if(a instanceof P.Q)return!!a[s]
return!!J.ef(a)[s]},
pF:function(a){var s,r=this
if(a==null){s=H.eg(r)
if(s)return a}else if(r.b(a))return a
H.n8(a,r)},
pH:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.n8(a,s)},
n8:function(a,b){throw H.c(H.pb(H.mP(a,H.np(a,b),H.aq(b,null))))},
mP:function(a,b,c){var s=P.is(a),r=H.aq(b==null?H.b8(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
pb:function(a){return new H.e2("TypeError: "+a)},
ab:function(a,b){return new H.e2("TypeError: "+H.mP(a,null,b))},
pP:function(a){return a!=null},
pB:function(a){if(a!=null)return a
throw H.c(H.ab(a,"Object"))},
pS:function(a){return!0},
pC:function(a){return a},
kB:function(a){return!0===a||!1===a},
n6:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ab(a,"bool"))},
rN:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool"))},
rM:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ab(a,"bool?"))},
rO:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"double"))},
rQ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double"))},
rP:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"double?"))},
kC:function(a){return typeof a=="number"&&Math.floor(a)===a},
ku:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ab(a,"int"))},
rS:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int"))},
rR:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ab(a,"int?"))},
pO:function(a){return typeof a=="number"},
rT:function(a){if(typeof a=="number")return a
throw H.c(H.ab(a,"num"))},
rV:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num"))},
rU:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ab(a,"num?"))},
pQ:function(a){return typeof a=="string"},
kv:function(a){if(typeof a=="string")return a
throw H.c(H.ab(a,"String"))},
rX:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String"))},
rW:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ab(a,"String?"))},
qi:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.aq(a[q],b)
return s},
n9:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.a.X(m,a5[j])
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
if(l===9){p=H.qo(a.z)
o=a.Q
return o.length!==0?p+("<"+H.qi(o,b)+">"):p}if(l===11)return H.n9(a,b,null)
if(l===12)return H.n9(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
qo:function(a){var s,r=H.nx(a)
if(r!=null)return r
s="minified:"+a
return s},
mZ:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pl:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lM(a,b,!1)
else if(typeof m=="number"){s=m
r=H.e5(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.e4(a,b,q)
n[b]=o
return o}else return m},
pj:function(a,b){return H.n5(a.tR,b)},
pi:function(a,b){return H.n5(a.eT,b)},
lM:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mU(H.mS(a,null,b,c))
r.set(b,s)
return s},
hJ:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mU(H.mS(a,b,c,!0))
q.set(c,r)
return r},
pk:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lJ(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bp:function(a,b){b.a=H.pJ
b.b=H.pK
return b},
e5:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aw(null,null)
s.y=b
s.cy=c
r=H.bp(a,s)
a.eC.set(c,r)
return r},
mY:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.pg(a,b,r,c)
a.eC.set(r,s)
return s},
pg:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b9(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aw(null,null)
q.y=6
q.z=b
q.cy=c
return H.bp(a,q)},
lL:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.pf(a,b,r,c)
a.eC.set(r,s)
return s},
pf:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b9(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.eg(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.eg(q.z))return q
else return H.my(a,b)}}p=new H.aw(null,null)
p.y=7
p.z=b
p.cy=c
return H.bp(a,p)},
mX:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.pd(a,b,r,c)
a.eC.set(r,s)
return s},
pd:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b9(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.e4(a,"mi",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.aw(null,null)
q.y=8
q.z=b
q.cy=c
return H.bp(a,q)},
ph:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aw(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bp(a,s)
a.eC.set(q,r)
return r},
hI:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
pc:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
e4:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hI(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aw(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bp(a,r)
a.eC.set(p,q)
return q},
lJ:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hI(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aw(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bp(a,o)
a.eC.set(q,n)
return n},
mW:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hI(m)
if(j>0){s=l>0?",":""
r=H.hI(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.pc(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aw(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bp(a,o)
a.eC.set(q,r)
return r},
lK:function(a,b,c,d){var s,r=b.cy+("<"+H.hI(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.pe(a,b,c,r,d)
a.eC.set(r,s)
return s},
pe:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bq(a,b,r,0)
m=H.ed(a,c,r,0)
return H.lK(a,n,m,c!==m)}}l=new H.aw(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bp(a,l)},
mS:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mU:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.p5(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mT(a,r,h,g,!1)
else if(q===46)r=H.mT(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bo(a.u,a.e,g.pop()))
break
case 94:g.push(H.ph(a.u,g.pop()))
break
case 35:g.push(H.e5(a.u,5,"#"))
break
case 64:g.push(H.e5(a.u,2,"@"))
break
case 126:g.push(H.e5(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.lI(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.e4(p,n,o))
else{m=H.bo(p,a.e,n)
switch(m.y){case 11:g.push(H.lK(p,m,o,a.n))
break
default:g.push(H.lJ(p,m,o))
break}}break
case 38:H.p6(a,g)
break
case 42:p=a.u
g.push(H.mY(p,H.bo(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.lL(p,H.bo(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.mX(p,H.bo(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.h7()
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
H.lI(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.mW(p,H.bo(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.lI(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.p8(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bo(a.u,a.e,i)},
p5:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mT:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mZ(s,o.z)[p]
if(n==null)H.i('No "'+p+'" in "'+H.oH(o)+'"')
d.push(H.hJ(s,o,n))}else d.push(p)
return m},
p6:function(a,b){var s=b.pop()
if(0===s){b.push(H.e5(a.u,1,"0&"))
return}if(1===s){b.push(H.e5(a.u,4,"1&"))
return}throw H.c(P.i0("Unexpected extended operation "+H.y(s)))},
bo:function(a,b,c){if(typeof c=="string")return H.e4(a,c,a.sEA)
else if(typeof c=="number")return H.p7(a,b,c)
else return c},
lI:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bo(a,b,c[s])},
p8:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bo(a,b,c[s])},
p7:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.i0("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.i0("Bad index "+c+" for "+b.i(0)))},
S:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
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
if(q)if(H.S(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.S(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.S(a,b.z,c,d,e)
if(r===6)return H.S(a,b.z,c,d,e)
return r!==7}if(r===6)return H.S(a,b.z,c,d,e)
if(p===6){s=H.my(a,d)
return H.S(a,b,c,s,e)}if(r===8){if(!H.S(a,b.z,c,d,e))return!1
return H.S(a,H.mx(a,b),c,d,e)}if(r===7){s=H.S(a,t.P,c,d,e)
return s&&H.S(a,b.z,c,d,e)}if(p===8){if(H.S(a,b,c,d.z,e))return!0
return H.S(a,b,c,H.mx(a,d),e)}if(p===7){s=H.S(a,b,c,t.P,e)
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
if(!H.S(a,k,c,j,e)||!H.S(a,j,e,k,c))return!1}return H.na(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.na(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pN(a,b,c,d,e)}return!1},
na:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
pN:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.S(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mZ(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.S(a,H.hJ(a,b,l[p]),c,r[p],e))return!1
return!0},
eg:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b9(a))if(r!==7)if(!(r===6&&H.eg(a.z)))s=r===8&&H.eg(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qI:function(a){var s
if(!H.b9(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b9:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
n5:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aw:function aw(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
h7:function h7(){this.c=this.b=this.a=null},
h3:function h3(){},
e2:function e2(a){this.a=a},
nx:function(a){return v.mangledGlobalNames[a]},
qN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
m_:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kN:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lZ==null){H.qF()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jF("Return interceptor for "+H.y(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.k5
if(o==null)o=$.k5=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.qK(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){o=$.k5
if(o==null)o=$.k5=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
oj:function(a,b){if(a<0||a>4294967295)throw H.c(P.aa(a,0,4294967295,"length",null))
return J.ok(new Array(a),b)},
lt:function(a,b){if(a<0)throw H.c(P.bQ("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.L("x<0>"))},
ok:function(a,b){return J.lu(H.b(a,b.L("x<0>")))},
lu:function(a){a.fixed$length=Array
return a},
ol:function(a,b){return J.nX(a,b)},
ef:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cV.prototype
return J.eG.prototype}if(typeof a=="string")return J.bf.prototype
if(a==null)return J.cW.prototype
if(typeof a=="boolean")return J.eF.prototype
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.Q)return a
return J.kN(a)},
cz:function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.Q)return a
return J.kN(a)},
hW:function(a){if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.Q)return a
return J.kN(a)},
nl:function(a){if(typeof a=="number")return J.c2.prototype
if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bI.prototype
return a},
qA:function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bI.prototype
return a},
aP:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.Q)return a
return J.kN(a)},
X:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ef(a).q(a,b)},
m5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nl(a).N(a,b)},
m6:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nq(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cz(a).h(a,b)},
ll:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.nq(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hW(a).m(a,b,c)},
nV:function(a,b,c){return J.aP(a).hh(a,b,c)},
nW:function(a,b,c,d){return J.aP(a).hC(a,b,c,d)},
nX:function(a,b){return J.nl(a).au(a,b)},
hZ:function(a,b){return J.hW(a).K(a,b)},
ej:function(a,b){return J.hW(a).H(a,b)},
nY:function(a){return J.aP(a).gak(a)},
nZ:function(a){return J.aP(a).gbI(a)},
o_:function(a){return J.aP(a).gdY(a)},
lm:function(a){return J.ef(a).gI(a)},
aB:function(a){return J.hW(a).gS(a)},
aR:function(a){return J.cz(a).gl(a)},
m7:function(a){return J.hW(a).ip(a)},
o0:function(a,b){return J.aP(a).is(a,b)},
o1:function(a){return J.qA(a).iB(a)},
cB:function(a){return J.ef(a).i(a)},
a:function a(){},
eF:function eF(){},
cW:function cW(){},
bg:function bg(){},
f3:function f3(){},
bI:function bI(){},
aX:function aX(){},
x:function x(a){this.$ti=a},
iE:function iE(a){this.$ti=a},
ag:function ag(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c2:function c2(){},
cV:function cV(){},
eG:function eG(){},
bf:function bf(){}},P={
oX:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qq()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cw(new P.k1(q),1)).observe(s,{childList:true})
return new P.k0(q,s,r)}else if(self.setImmediate!=null)return P.qr()
return P.qs()},
oY:function(a){self.scheduleImmediate(H.cw(new P.k2(a),0))},
oZ:function(a){self.setImmediate(H.cw(new P.k3(a),0))},
p_:function(a){P.lB(C.m,a)},
lB:function(a,b){var s=C.c.ab(a.a,1000)
return P.p9(s<0?0:s,b)},
mD:function(a,b){var s=C.c.ab(a.a,1000)
return P.pa(s<0?0:s,b)},
p9:function(a,b){var s=new P.e1()
s.eT(a,b)
return s},
pa:function(a,b){var s=new P.e1()
s.eU(a,b)
return s},
rK:function(a){return new P.cr(a,1)},
p2:function(){return C.a5},
p3:function(a){return new P.cr(a,3)},
pU:function(a,b){return new P.dZ(a,b.L("dZ<0>"))},
qf:function(){var s,r
for(s=$.cu;s!=null;s=$.cu){$.ec=null
r=s.b
$.cu=r
if(r==null)$.eb=null
s.a.$0()}},
ql:function(){$.lS=!0
try{P.qf()}finally{$.ec=null
$.lS=!1
if($.cu!=null)$.m4().$1(P.nf())}},
qj:function(a){var s=new P.fR(a),r=$.eb
if(r==null){$.cu=$.eb=s
if(!$.lS)$.m4().$1(P.nf())}else $.eb=r.b=s},
qk:function(a){var s,r,q,p=$.cu
if(p==null){P.qj(a)
$.ec=$.eb
return}s=new P.fR(a)
r=$.ec
if(r==null){s.b=p
$.cu=$.ec=s}else{q=r.b
s.b=q
$.ec=r.b=s
if(q==null)$.eb=s}},
mC:function(a,b){var s=$.aO
if(s===C.f)return P.lB(a,b)
return P.lB(a,s.hH(b))},
oQ:function(a,b){var s=$.aO
if(s===C.f)return P.mD(a,b)
return P.mD(a,s.dT(b,t.aF))},
nb:function(a,b,c,d,e){P.qk(new P.kF(d,e))},
qg:function(a,b,c,d){var s,r=$.aO
if(r===c)return d.$0()
$.aO=c
s=r
try{r=d.$0()
return r}finally{$.aO=s}},
qh:function(a,b,c,d,e){var s,r=$.aO
if(r===c)return d.$1(e)
$.aO=c
s=r
try{r=d.$1(e)
return r}finally{$.aO=s}},
k1:function k1(a){this.a=a},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
e1:function e1(){this.c=0},
kk:function kk(a,b){this.a=a
this.b=b},
kj:function kj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cr:function cr(a,b){this.a=a
this.b=b},
bL:function bL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dZ:function dZ(a,b){this.a=a
this.$ti=b},
fR:function fR(a){this.a=a
this.b=null},
cd:function cd(){},
fl:function fl(){},
kr:function kr(){},
kF:function kF(a,b){this.a=a
this.b=b},
k8:function k8(){},
k9:function k9(a,b){this.a=a
this.b=b},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
on:function(a,b){return new H.Y(a.L("@<0>").bk(b).L("Y<1,2>"))},
oo:function(a,b,c){return H.qz(a,new H.Y(b.L("@<0>").bk(c).L("Y<1,2>")))},
U:function(a,b){return new H.Y(a.L("@<0>").bk(b).L("Y<1,2>"))},
d_:function(a){return new P.dN(a.L("dN<0>"))},
lH:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
p4:function(a,b){var s=new P.dO(a,b)
s.c=a.e
return s},
oh:function(a,b,c){var s,r
if(P.lT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.aj.push(a)
try{P.pT(a,s)}finally{if(0>=$.aj.length)return H.d($.aj,-1)
$.aj.pop()}r=P.mA(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
ls:function(a,b,c){var s,r
if(P.lT(a))return b+"..."+c
s=new P.a_(b)
$.aj.push(a)
try{r=s
r.a=P.mA(r.a,a,", ")}finally{if(0>=$.aj.length)return H.d($.aj,-1)
$.aj.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lT:function(a){var s,r
for(s=$.aj.length,r=0;r<s;++r)if(a===$.aj[r])return!0
return!1},
pT:function(a,b){var s,r,q,p,o,n,m,l=a.gS(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.w())return
s=H.y(l.gB(l))
b.push(s)
k+=s.length+2;++j}if(!l.w()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gB(l);++j
if(!l.w()){if(j<=4){b.push(H.y(p))
return}r=H.y(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB(l);++j
for(;l.w();p=o,o=n){n=l.gB(l);++j
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
op:function(a,b,c){var s=P.on(b,c)
a.H(0,new P.iJ(s,b,c))
return s},
mk:function(a,b){var s,r,q=P.d_(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
ly:function(a){var s,r={}
if(P.lT(a))return"{...}"
s=new P.a_("")
try{$.aj.push(a)
s.a+="{"
r.a=!0
J.ej(a,new P.iN(r,s))
s.a+="}"}finally{if(0>=$.aj.length)return H.d($.aj,-1)
$.aj.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dN:function dN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k7:function k7(a){this.a=a
this.c=this.b=null},
dO:function dO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cU:function cU(){},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(){},
j:function j(){},
d3:function d3(){},
iN:function iN(a,b){this.a=a
this.b=b},
N:function N(){},
hK:function hK(){},
d4:function d4(){},
ck:function ck(a,b){this.a=a
this.$ti=b},
dk:function dk(){},
dV:function dV(){},
dP:function dP(){},
e6:function e6(){},
e8:function e8(){},
oT:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oU(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oU:function(a,b,c,d){var s=a?$.nN():$.nM()
if(s==null)return null
if(0===c&&d===b.length)return P.mJ(s,b)
return P.mJ(s,b.subarray(c,P.bk(c,d,b.length)))},
mJ:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.ak(r)}return null},
m9:function(a,b,c,d,e,f){if(C.c.bB(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
pA:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pz:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.cz(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jP:function jP(){},
jO:function jO(){},
i4:function i4(){},
i5:function i5(){},
eq:function eq(){},
es:function es(){},
ip:function ip(){},
iB:function iB(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
iA:function iA(a){this.a=a},
jM:function jM(){},
jQ:function jQ(){},
kp:function kp(a){this.b=0
this.c=a},
jN:function jN(a){this.a=a},
ko:function ko(a){this.a=a
this.b=16
this.c=0},
kS:function(a,b){var s=H.mq(a,b)
if(s!=null)return s
throw H.c(P.a7(a,null,null))},
of:function(a){if(a instanceof H.by)return a.i(0)
return"Instance of '"+H.di(a)+"'"},
eN:function(a,b,c,d){var s,r=c?J.lt(a,d):J.oj(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iK:function(a,b,c){var s,r=H.b([],c.L("x<0>"))
for(s=J.aB(a);s.w();)r.push(s.gB(s))
if(b)return r
return J.lu(r)},
oq:function(a,b,c){var s,r,q=J.lt(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
fn:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bk(b,c,r)
return H.mr(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.oE(a,b,P.bk(b,c,a.length))
return P.oN(a,b,c)},
oN:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.aa(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.aa(c,b,a.length,o,o))
r=J.aB(a)
for(q=0;q<b;++q)if(!r.w())throw H.c(P.aa(b,0,q,o,o))
p=[]
if(s)for(;r.w();)p.push(r.gB(r))
else for(q=b;q<c;++q){if(!r.w())throw H.c(P.aa(c,b,q,o,o))
p.push(r.gB(r))}return H.mr(p)},
oF:function(a){return new H.eH(a,H.om(a,!1,!0,!1,!1,!1))},
mA:function(a,b,c){var s=J.aB(b)
if(!s.w())return a
if(c.length===0){do a+=H.y(s.gB(s))
while(s.w())}else{a+=H.y(s.gB(s))
for(;s.w();)a=a+c+H.y(s.gB(s))}return a},
mG:function(){var s=H.ov()
if(s!=null)return P.oS(s)
throw H.c(P.B("'Uri.base' is not supported"))},
kn:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nT().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghV().cA(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.av(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
oc:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
od:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ev:function(a){if(a>=10)return""+a
return"0"+a},
me:function(a){return new P.bz(1000*a)},
is:function(a){if(typeof a=="number"||H.kB(a)||null==a)return J.cB(a)
if(typeof a=="string")return JSON.stringify(a)
return P.of(a)},
i0:function(a){return new P.em(a)},
bQ:function(a){return new P.aC(!1,null,null,a)},
f9:function(a,b){return new P.dj(null,null,!0,a,b,"Value not in range")},
aa:function(a,b,c,d,e){return new P.dj(b,c,!0,a,d,"Invalid value")},
bk:function(a,b,c){if(0>a||a>c)throw H.c(P.aa(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aa(b,a,c,"end",null))
return b}return c},
mt:function(a,b){if(a<0)throw H.c(P.aa(a,0,null,b,null))
return a},
P:function(a,b,c,d,e){var s=e==null?J.aR(b):e
return new P.eD(s,!0,a,c,"Index out of range")},
B:function(a){return new P.fJ(a)},
jF:function(a){return new P.fG(a)},
lA:function(a){return new P.cc(a)},
aG:function(a){return new P.er(a)},
f:function(a){return new P.h4(a)},
a7:function(a,b,c){return new P.iy(a,b,c)},
m1:function(a){H.qN(a)},
oS:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.G(a5,4)^58)*3|C.a.G(a5,0)^100|C.a.G(a5,1)^97|C.a.G(a5,2)^116|C.a.G(a5,3)^97)>>>0
if(s===0)return P.mF(a4<a4?C.a.v(a5,0,a4):a5,5,a3).gey()
else if(s===32)return P.mF(C.a.v(a5,5,a4),0,a3).gey()}r=P.eN(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.nc(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.nc(a5,0,q,20,r)===20)r[7]=q
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
k=!1}else{if(!(m<a4&&m===n+2&&C.a.ai(a5,"..",n)))h=m>n+2&&C.a.ai(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.ai(a5,"file",0)){if(p<=0){if(!C.a.ai(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.v(a5,n,a4)
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
m=f}j="file"}else if(C.a.ai(a5,"http",0)){if(i&&o+3===n&&C.a.ai(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.bc(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.ai(a5,"https",0)){if(i&&o+4===n&&C.a.ai(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.bc(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.v(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.hp(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.pt(a5,0,q)
else{if(q===0)P.cs(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.pu(a5,d,p-1):""
b=P.pq(a5,p,o,!1)
i=o+1
if(i<n){a=H.mq(C.a.v(a5,i,n),a3)
a0=P.ps(a==null?H.i(P.a7("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pr(a5,n,m,a3,j,b!=null)
a2=m<l?P.lO(a5,m+1,l,a3):a3
return new P.bM(j,c,b,a0,a1,a2,l<a4?P.pp(a5,l+1,a4):a3)},
mI:function(a){var s=t.N
return C.b.i0(H.b(a.split("&"),t.s),P.U(s,s),new P.jK(C.e))},
oR:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jH(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.Y(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.kS(C.a.v(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.kS(C.a.v(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
mH:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.jI(a),c=new P.jJ(d,a)
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
else{k=P.oR(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.b7(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
n_:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cs:function(a,b,c){throw H.c(P.a7(c,a,b))},
ps:function(a,b){if(a!=null&&a===P.n_(b))return null
return a},
pq:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.Y(a,b)===91){s=c-1
if(C.a.Y(a,s)!==93)P.cs(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.pn(a,r,s)
if(q<s){p=q+1
o=P.n4(a,C.a.ai(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mH(a,r,q)
return C.a.v(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.Y(a,n)===58){q=C.a.bL(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.n4(a,C.a.ai(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mH(a,b,q)
return"["+C.a.v(a,b,q)+o+"]"}return P.pw(a,b,c)},
pn:function(a,b,c){var s=C.a.bL(a,"%",b)
return s>=b&&s<c?s:c},
n4:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a_(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.Y(a,s)
if(p===37){o=P.lP(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a_("")
m=i.a+=C.a.v(a,r,s)
if(n)o=C.a.v(a,s,s+3)
else if(o==="%")P.cs(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a_("")
if(r<s){i.a+=C.a.v(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.Y(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.v(a,r,s)
if(i==null){i=new P.a_("")
n=i}else n=i
n.a+=j
n.a+=P.lN(p)
s+=k
r=s}}}if(i==null)return C.a.v(a,b,c)
if(r<c)i.a+=C.a.v(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
pw:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.Y(a,s)
if(o===37){n=P.lP(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a_("")
l=C.a.v(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.v(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.x,m)
m=(C.x[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a_("")
if(r<s){q.a+=C.a.v(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.cs(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.Y(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.v(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a_("")
m=q}else m=q
m.a+=l
m.a+=P.lN(o)
s+=j
r=s}}}}if(q==null)return C.a.v(a,b,c)
if(r<c){l=C.a.v(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pt:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.n1(C.a.G(a,b)))P.cs(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.G(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cs(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.v(a,b,c)
return P.pm(r?a.toLowerCase():a)},
pm:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pu:function(a,b,c){return P.e7(a,b,c,C.Y,!1)},
pr:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.e7(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a6(s,"/"))s="/"+s
return P.pv(s,e,f)},
pv:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a6(a,"/"))return P.px(a,!s||c)
return P.py(a)},
lO:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bQ("Both query and queryParameters specified"))
return P.e7(a,b,c,C.k,!0)}if(d==null)return null
s=new P.a_("")
r.a=""
d.H(0,new P.kl(new P.km(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
pp:function(a,b,c){return P.e7(a,b,c,C.k,!0)},
lP:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.Y(a,b+1)
r=C.a.Y(a,n)
q=H.kO(s)
p=H.kO(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.b7(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.av(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.v(a,b,b+3).toUpperCase()
return null},
lN:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.G(k,a>>>4)
s[2]=C.a.G(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.hs(a,6*q)&63|r
if(o>=p)return H.d(s,o)
s[o]=37
m=o+1
l=C.a.G(k,n>>>4)
if(m>=p)return H.d(s,m)
s[m]=l
l=o+2
m=C.a.G(k,n&15)
if(l>=p)return H.d(s,l)
s[l]=m
o+=3}}return P.fn(s,0,null)},
e7:function(a,b,c,d,e){var s=P.n3(a,b,c,d,e)
return s==null?C.a.v(a,b,c):s},
n3:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.Y(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lP(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cs(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.Y(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.lN(o)}}if(p==null){p=new P.a_("")
n=p}else n=p
n.a+=C.a.v(a,q,r)
n.a+=H.y(m)
if(typeof l!=="number")return H.no(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.v(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
n2:function(a){if(C.a.a6(a,"."))return!0
return C.a.ee(a,"/.")!==-1},
py:function(a){var s,r,q,p,o,n,m
if(!P.n2(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.X(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
px:function(a,b){var s,r,q,p,o,n
if(!P.n2(a))return!b?P.n0(a):a
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
r=P.n0(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
n0:function(a){var s,r,q,p=a.length
if(p>=2&&P.n1(C.a.G(a,0)))for(s=1;s<p;++s){r=C.a.G(a,s)
if(r===58)return C.a.v(a,0,s)+"%3A"+C.a.am(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
po:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.G(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bQ("Invalid URL encoding"))}}return s},
lQ:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.G(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.v(a,b,c)
else p=new H.r(C.a.v(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.G(a,o)
if(r>127)throw H.c(P.bQ("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bQ("Truncated URI"))
p.push(P.po(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cA(p)},
n1:function(a){var s=a|32
return 97<=s&&s<=122},
mF:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.G(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a7(k,a,r))}}if(q<0&&r>b)throw H.c(P.a7(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.G(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaH(j)
if(p!==44||r!==n+7||!C.a.ai(a,"base64",n+1))throw H.c(P.a7("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.H.i8(0,a,m,s)
else{l=P.n3(a,m,s,C.k,!0)
if(l!=null)a=C.a.bc(a,m,s,l)}return new P.jG(a,j,c)},
pE:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.ky(h)
q=new P.kz()
p=new P.kA()
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
nc:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.nU()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.d(m,d)
q=m[d]
p=C.a.G(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.d(e,n)
e[n]=r}return d},
Z:function Z(a,b){this.a=a
this.b=b},
bz:function bz(a){this.a=a},
ik:function ik(){},
il:function il(){},
M:function M(){},
em:function em(a){this.a=a},
fz:function fz(){},
eZ:function eZ(){},
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
eD:function eD(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fJ:function fJ(a){this.a=a},
fG:function fG(a){this.a=a},
cc:function cc(a){this.a=a},
er:function er(a){this.a=a},
f1:function f1(){},
dq:function dq(){},
et:function et(a){this.a=a},
h4:function h4(a){this.a=a},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
h:function h(){},
eE:function eE(){},
ah:function ah(){},
Q:function Q(){},
a_:function a_(a){this.a=a},
jK:function jK(a){this.a=a},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
jJ:function jJ(a,b){this.a=a
this.b=b},
bM:function bM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
km:function km(a,b){this.a=a
this.b=b},
kl:function kl(a){this.a=a},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function ky(a){this.a=a},
kz:function kz(){},
kA:function kA(){},
hp:function hp(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fX:function fX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
qw:function(a){var s,r,q,p
if(t.x.b(a)){s=J.o_(a)
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
return new P.e3(r,q,p)},
qv:function(a){if(a instanceof P.e3)return{data:a.a,height:a.b,width:a.c}
return a},
br:function(a){var s,r,q,p,o
if(a==null)return null
s=P.U(t.N,t.A)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
n7:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kB(a))return a
if(t.f.b(a))return P.ng(a)
if(t.E.b(a)){s=[]
J.ej(a,new P.kw(s))
a=s}return a},
ng:function(a){var s={}
J.ej(a,new P.kG(s))
return s},
ke:function ke(){},
kg:function kg(a,b){this.a=a
this.b=b},
kh:function kh(a,b){this.a=a
this.b=b},
e3:function e3(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(a){this.a=a},
kG:function kG(a){this.a=a},
kf:function kf(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
iw:function iw(){},
ix:function ix(){},
hn:function hn(){},
af:function af(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aY:function aY(){},
eK:function eK(){},
b1:function b1(){},
f_:function f_(){},
j9:function j9(){},
ca:function ca(){},
fm:function fm(){},
o:function o(){},
b3:function b3(){},
fy:function fy(){},
hb:function hb(){},
hc:function hc(){},
hj:function hj(){},
hk:function hk(){},
hx:function hx(){},
hy:function hy(){},
hG:function hG(){},
hH:function hH(){},
i2:function i2(){},
eo:function eo(){},
i3:function i3(a){this.a=a},
ep:function ep(){},
bb:function bb(){},
f0:function f0(){},
fT:function fT(){},
c9:function c9(){},
fh:function fh(){},
ht:function ht(){},
hu:function hu(){}},W={
m8:function(){var s=document.createElement("a")
s.toString
return s},
ln:function(){var s=document.createElement("canvas")
s.toString
return s},
oe:function(a,b,c){var s=document.body
s.toString
s=new H.b6(new W.a6(C.p.av(s,a,b,c)),new W.im(),t.ac.L("b6<j.E>"))
return t.h.a(s.gaZ(s))},
io:function(a){return"wheel"},
cO:function(a){var s,r,q="element tag unavailable"
try{s=J.aP(a)
s.gew(a)
q=s.gew(a)}catch(r){H.ak(r)}return q},
og:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.ak(s)}return q},
k6:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mR:function(a,b,c,d){var s=W.k6(W.k6(W.k6(W.k6(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a3:function(a,b,c,d){var s=new W.dL(a,b,c==null?null:W.nd(new W.k4(c),t.aD),!1)
s.hz()
return s},
mQ:function(a){var s=W.m8(),r=window
s=new W.cq(new W.kb(s,r.location))
s.eO(a)
return s},
p0:function(a,b,c,d){return!0},
p1:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
mV:function(){var s=t.N,r=P.mk(C.z,s),q=H.b(["TEMPLATE"],t.s)
s=new W.hB(r,P.d_(s),P.d_(s),P.d_(s),null)
s.eS(null,new H.d5(C.z,new W.ki(),t.dv),q,null)
return s},
nd:function(a,b){var s=$.aO
if(s===C.f)return a
return s.dT(a,b)},
w:function w(){},
i_:function i_(){},
ek:function ek(){},
el:function el(){},
bR:function bR(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
cE:function cE(){},
aD:function aD(){},
ic:function ic(){},
K:function K(){},
cK:function cK(){},
id:function id(){},
ar:function ar(){},
aU:function aU(){},
ie:function ie(){},
ig:function ig(){},
ih:function ih(){},
bd:function bd(){},
ii:function ii(){},
cL:function cL(){},
cM:function cM(){},
ew:function ew(){},
ij:function ij(){},
fU:function fU(a,b){this.a=a
this.b=b},
D:function D(){},
im:function im(){},
l:function l(){},
e:function e(){},
am:function am(){},
bY:function bY(){},
ex:function ex(){},
ez:function ez(){},
aH:function aH(){},
iz:function iz(){},
bB:function bB(){},
bC:function bC(){},
c_:function c_(){},
c1:function c1(){},
bD:function bD(){},
iL:function iL(){},
j1:function j1(){},
c3:function c3(){},
eR:function eR(){},
j2:function j2(a){this.a=a},
eS:function eS(){},
j3:function j3(a){this.a=a},
aI:function aI(){},
eT:function eT(){},
ao:function ao(){},
a6:function a6(a){this.a=a},
u:function u(){},
de:function de(){},
aK:function aK(){},
f5:function f5(){},
fb:function fb(){},
jg:function jg(a){this.a=a},
fd:function fd(){},
ax:function ax(){},
ff:function ff(){},
aM:function aM(){},
fg:function fg(){},
aN:function aN(){},
fk:function fk(){},
jp:function jp(a){this.a=a},
ap:function ap(){},
bm:function bm(){},
dr:function dr(){},
fo:function fo(){},
fp:function fp(){},
cf:function cf(){},
ay:function ay(){},
ai:function ai(){},
fr:function fr(){},
fs:function fs(){},
jv:function jv(){},
az:function az(){},
bH:function bH(){},
fx:function fx(){},
jA:function jA(){},
b5:function b5(){},
jL:function jL(){},
fN:function fN(){},
bn:function bn(){},
co:function co(){},
cp:function cp(){},
fV:function fV(){},
dK:function dK(){},
h8:function h8(){},
dQ:function dQ(){},
hs:function hs(){},
hz:function hz(){},
fS:function fS(){},
h1:function h1(a){this.a=a},
lq:function lq(a,b){this.a=a
this.$ti=b},
dL:function dL(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k4:function k4(a){this.a=a},
lG:function lG(a){this.$ti=a},
cq:function cq(a){this.a=a},
O:function O(){},
df:function df(a){this.a=a},
j6:function j6(a){this.a=a},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(){},
kc:function kc(){},
kd:function kd(){},
hB:function hB(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ki:function ki(){},
hA:function hA(){},
cR:function cR(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
kb:function kb(a,b){this.a=a
this.b=b},
hL:function hL(a){this.a=a
this.b=0},
kq:function kq(a){this.a=a},
fW:function fW(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h5:function h5(){},
h6:function h6(){},
h9:function h9(){},
ha:function ha(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hl:function hl(){},
hm:function hm(){},
ho:function ho(){},
dX:function dX(){},
dY:function dY(){},
hq:function hq(){},
hr:function hr(){},
hw:function hw(){},
hC:function hC(){},
hD:function hD(){},
e_:function e_(){},
e0:function e0(){},
hE:function hE(){},
hF:function hF(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){},
hV:function hV(){}},K={
R:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.f("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.G(a,0)
r=C.a.G(b,0)
if(s>r){q=r
r=s
s=q}return new K.f8(s,r)},
aS:function aS(){},
cT:function cT(){},
ae:function ae(a){this.a=a},
f8:function f8(a,b){this.a=a
this.b=b},
v:function v(a){this.a=a}},L={
jy:function(){var s=t.N
return new L.jx(P.U(s,t.dl),P.U(s,t.f7),P.d_(s))},
fi:function fi(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
fw:function fw(a,b){this.b=a
this.c=b},
jx:function jx(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
du:function du(a,b){this.b=a
this.c=!1
this.a=b}},O={
lo:function(a){return new O.ad(H.b([],a.L("x<0>")),a.L("ad<0>"))},
ad:function ad(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
da:function da(a){this.a=a
this.b=null},
eQ:function(a,b){return new O.d8(new V.t(0,0,0),a,b,new A.al(!1,!1,!1))},
d6:function d6(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=null},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(){},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(){},
iY:function iY(a,b){this.a=a
this.b=b},
iZ:function iZ(){},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(){},
iO:function iO(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c},
eP:function eP(){},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d},
iR:function iR(a){this.b=a},
iS:function iS(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d},
iT:function iT(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d},
dn:function dn(a){var _=this
_.c=_.a=null
_.d=a
_.e=null},
ce:function ce(){}},E={
mh:function(){var s=O.lo(t.m),r=new E.bA(s)
s.bg(r.gi9(),r.gic())
r.sag(0,null)
return r},
mN:function(){var s=window.navigator.vendor
s.toString
if(C.a.C(s,"Google"))return C.F
s=window.navigator.userAgent
s.toString
if(C.a.C(s,"Firefox"))return C.q
s=window.navigator.appVersion
s.toString
if(C.a.C(s,"Trident")||C.a.C(s,"Edge"))return C.r
s=window.navigator.appName
s.toString
if(C.a.C(s,"Microsoft"))return C.r
return C.G},
mO:function(){var s=window.navigator.appVersion
s.toString
if(C.a.C(s,"Win"))return C.a0
if(C.a.C(s,"Mac"))return C.A
if(C.a.C(s,"Linux"))return C.a1
return C.a2},
oG:function(a,b){var s
Date.now()
s=t.g8
s=new E.jc(a,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1),new O.da(H.b([],s)),new O.da(H.b([],s)),new O.da(H.b([],s)),H.b([null],t.bc),P.U(t.N,t.fg))
s.eN(a,b)
return s},
oP:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.mB(a,!0,!0,!0,!1)
s=W.ln()
r=s.style
r.width="100%"
r.height="100%"
J.nZ(a).n(0,s)
return E.mB(s,!0,!0,!0,!1)},
mB:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.A,l=t.gW.a(C.i.d6(a,"webgl2",P.oo(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.oG(l,a)
H.ku(l.getParameter(3379))
m=H.ku(l.getParameter(34076))
r=H.b([],t.g9)
q=$.iq
p=new X.fL(a,r,(q==null?$.iq=new E.h2(E.mN(),E.mO()):q).a===C.q?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.a3(o,"contextmenu",p.gfB(),!1))
r.push(W.a3(a,"focus",p.gfH(),!1))
r.push(W.a3(a,"blur",p.gft(),!1))
r.push(W.a3(o,"keyup",p.gfL(),!1))
r.push(W.a3(o,"keydown",p.gfJ(),!1))
r.push(W.a3(a,"mousedown",p.gfP(),!1))
r.push(W.a3(a,"mouseup",p.gfT(),!1))
r.push(W.a3(a,n,p.gfR(),!1))
W.io(a)
W.io(a)
r.push(W.a3(a,W.io(a),p.gfV(),!1))
r.push(W.a3(o,n,p.gfD(),!1))
r.push(W.a3(o,"mouseup",p.gfF(),!1))
r.push(W.a3(o,"pointerlockchange",p.gfX(),!1))
r.push(W.a3(a,"touchstart",p.ghc(),!1))
r.push(W.a3(a,"touchend",p.gh8(),!1))
r.push(W.a3(a,"touchmove",p.gha(),!1))
m=new E.fu(a,s,new T.js(l,m),p,new P.Z(Date.now(),!1))
m.dA()
return m},
i6:function i6(){},
bA:function bA(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bT:function bT(a){this.b=a},
c7:function c7(a){this.b=a},
h2:function h2(a,b){this.a=a
this.b=b},
jc:function jc(a,b,c,d,e,f,g,h){var _=this
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
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
fu:function fu(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.Q=null
_.cx=!1
_.cy=e
_.db=0},
ju:function ju(a){this.a=a}},Z={
lF:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.ct(c)),35044)
a.bindBuffer(b,null)
return new Z.fO(b,s)},
aA:function(a){return new Z.bK(a)},
fO:function fO(a,b){this.a=a
this.b=b},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
fP:function fP(a){this.a=a},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(a){this.a=a}},D={
J:function(){return new D.bX()},
i8:function i8(){},
bX:function bX(){var _=this
_.c=_.b=_.a=null
_.d=0},
it:function it(a){this.a=a},
iu:function iu(a){this.a=a},
T:function T(){},
aV:function aV(){},
aW:function aW(){},
F:function F(a,b,c){this.c=a
this.d=b
this.e=c},
bW:function bW(a,b,c,d){var _=this
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
_.c=_.b=null},
qL:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6=34067,a7="modifiers",a8=V.oI("Test 014"),a9=W.ln()
a9.className="pageLargeCanvas"
a9.id=a4
a8.a.appendChild(a9).toString
s=t.s
a8.dM(H.b(["Test of Material Lighting shader with different reflections and refractions. No alpha is being used. The background cube map is being painted onto the object."],s))
a8.hB(H.b(["controls","shapes"],s))
a8.dM(H.b(["\xab[Back to Tests|../]"],s))
r=document.getElementById(a4)
if(r==null)H.i(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.oP(r,!0,!0,!0,!1)
p=X.lr(a5)
p.sdW(0,!1)
o=E.mh()
o.sag(0,F.nw())
s=q.f
n=s.a
m=n.createTexture()
m.toString
n.bindTexture(a6,m)
n.texParameteri(a6,10242,10497)
n.texParameteri(a6,10243,10497)
n.texParameteri(a6,10241,9729)
n.texParameteri(a6,10240,9729)
n.bindTexture(a6,a5)
l=new T.ft(m)
s.b5(l,m,"../resources/maskonaive/posx.jpg",34069,!1,!1)
s.b5(l,m,"../resources/maskonaive/negx.jpg",34070,!1,!1)
s.b5(l,m,"../resources/maskonaive/posy.jpg",34071,!1,!1)
s.b5(l,m,"../resources/maskonaive/negy.jpg",34072,!1,!1)
s.b5(l,m,"../resources/maskonaive/posz.jpg",34073,!1,!1)
s.b5(l,m,"../resources/maskonaive/negz.jpg",34074,!1,!1)
m=O.lo(t.gc)
k=new O.d6(m)
m.bg(k.gfo(),k.gfq())
m=k.gek()
m.gt().n(0,k.gdw())
s=k.gbE()
m.gej().n(0,s)
m=k.gek()
j=V.lD()
n=U.md(V.mm(V.lz(),j,new V.C(-1,-1,-1)))
i=new V.t(1,1,1)
h=new D.bW(new V.t(1,1,1),V.lE(),V.lD(),V.oW())
g=h.a
h.a=n
n.gt().n(0,h.geQ())
h.aK(new D.F("mover",g,h.a))
if(!h.b.q(0,i)){g=h.b
h.b=i
h.aK(new D.F("color",g,i))}m.n(0,h)
n=k.gan()
n.su(0,new V.t(0.1,0.1,0.1))
n=k.gao()
n.su(0,new V.t(0.1,0.1,0.1))
n=k.gah()
n.su(0,new V.t(1,1,1))
n=k.gah()
n.bF(new A.al(!0,!1,!1))
n.dC(10)
n=k.ch
if(n!==l){if(n!=null)n.gt().M(0,s)
g=k.ch
k.ch=l
l.gt().n(0,s)
k.a7(new D.F("environment",g,k.ch))}k.ga0().saQ(0.6)
s=k.ga0()
s.su(0,new V.t(0.2,0.3,1))
s=k.gap()
s.su(0,new V.t(0.6,0.6,0.6))
f=new U.bZ(V.an(),H.b([],t.eJ))
f.bg(f.gfk(),f.gh0())
s=q.x
n=U.ib()
m=U.ib()
i=$.bJ
if(i==null)i=$.bJ=new V.a5(0,0)
i=new U.dG(n,m,new X.a8(!1,!1,!1),i,V.an())
n.sd5(0,!0)
n.scR(6.283185307179586)
n.scT(0)
n.sa3(0,0)
n.scS(100)
n.sa5(0)
n.scC(0.5)
h=i.gb2()
n.gt().n(0,h)
m.sd5(0,!0)
m.scR(6.283185307179586)
m.scT(0)
m.sa3(0,0)
m.scS(100)
m.sa5(0)
m.scC(0.5)
m.gt().n(0,h)
n=new X.a8(!1,!1,!1)
if(!i.d.q(0,n)){g=i.d
i.d=n
i.T(new D.F(a7,g,n))}i.bp(s)
f.n(0,i)
U.ib()
if($.bJ==null)$.bJ=new V.a5(0,0)
V.an()
n=U.ib()
m=$.bJ
if(m==null)m=$.bJ=new V.a5(0,0)
m=new U.dF(n,new X.a8(!1,!1,!1),m,V.an())
n.sd5(0,!0)
n.scR(6.283185307179586)
n.scT(0)
n.sa3(0,0)
n.scS(100)
n.sa5(0)
n.scC(0.2)
n.gt().n(0,m.gb2())
n=new X.a8(!0,!1,!1)
if(!m.c.q(0,n)){g=m.c
m.c=n
m.T(new D.F(a7,g,n))}m.bp(s)
f.n(0,m)
n=new X.a8(!1,!1,!1)
m=new U.dH(n,V.an())
i=new X.a8(!1,!1,!1)
if(!n.q(0,i)){m.b=i
m.T(new D.F(a7,n,i))}m.bp(s)
f.n(0,m)
f.n(0,U.md(V.b0(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=X.mo(f)
s=E.mh()
d=new M.cJ(s)
c=F.ji()
n=c.gW()
m=new V.C(-1,-1,1).E()
b=n.bH(new V.au(1,2,4,6),V.i9(255,0,0),new V.L(-1,-1,0),new V.V(0,1),m,a5)
m=c.gW()
n=new V.C(1,-1,1).E()
a=m.bH(new V.au(0,3,4,6),V.i9(0,0,255),new V.L(1,-1,0),new V.V(1,1),n,a5)
n=c.gW()
m=new V.C(1,1,1).E()
a0=n.bH(new V.au(0,2,5,6),V.i9(0,128,0),new V.L(1,1,0),new V.V(1,0),m,a5)
m=c.gW()
n=$.a9
if(n==null)n=$.a9=new V.V(0,0)
i=new V.C(-1,1,1).E()
a1=m.bH(new V.au(0,2,4,7),V.i9(255,255,0),new V.L(-1,1,0),n,i,a5)
c.gU().dK(H.b([b,a,a0,a1],t.k))
c.aA()
s.sag(0,c)
d.sbq(a5)
d.sby(0,a5)
d.sbz(a5)
s=new O.dn(new V.t(1,1,1))
g=s.c
s.c=l
l.gt().n(0,s.gbE())
s.a7(new D.F("boxTexture",g,s.c))
d.sbz(s)
d.sby(0,p)
d.sbq(e)
s=O.lo(t.m)
a2=new M.cP(s)
s.bg(a2.gfv(),a2.gfz())
a3=X.lr(a5)
a2.sbq(a5)
a2.sby(0,a3)
a2.sbz(a5)
a2.sbq(e)
a2.sbz(k)
a2.sby(0,p)
s.n(0,o)
t.fA.a(a2.c).sdW(0,!1)
s=t.ba
n=H.b([d,a2],s)
s=new M.cF(H.b([],s))
s.bg(s.gh4(),s.gh6())
s.ac(0,n)
n=q.d
if(n!==s){if(n!=null)n.gt().M(0,q.gdf())
q.d=s
s.gt().n(0,q.gdf())
q.dg()}s=V.ms("controls")
s.cs(0,"Silver",new D.kY(k),!0)
s.a4(0,"Gold",new D.kZ(k))
s.a4(0,"Glass",new D.l_(k))
s.a4(0,"Blue Glass",new D.l8(k))
s.a4(0,"Water Bubble",new D.l9(k))
s.a4(0,"No Reflection",new D.la(k))
s.a4(0,"Pink Distort",new D.lb(k))
s.a4(0,"Cloak",new D.lc(k))
s.a4(0,"White and Shiny",new D.ld(k))
s=V.ms("shapes")
s.a4(0,"Cube",new D.le(o))
s.a4(0,"Cuboid",new D.lf(o))
s.a4(0,"Cylinder",new D.l0(o))
s.a4(0,"Cone",new D.l1(o))
s.a4(0,"Cylindrical",new D.l2(o))
s.a4(0,"Sphere",new D.l3(o))
s.a4(0,"Spherical",new D.l4(o))
s.cs(0,"Toroid",new D.l5(o),!0)
s.a4(0,"Knot",new D.l6(o))
s=q.Q
if(s==null)s=q.Q=D.J()
n=s.b
s=n==null?s.b=H.b([],t.a):n
s.push(new D.l7(a8,k))
V.qO(q)},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
lc:function lc(a){this.a=a},
ld:function ld(a){this.a=a},
le:function le(a){this.a=a},
lf:function lf(a){this.a=a},
kX:function kX(){},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
kW:function kW(){},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
kV:function kV(){},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a,b){this.a=a
this.b=b}},X={cD:function cD(a,b){this.a=a
this.b=b},eJ:function eJ(a,b){this.a=a
this.b=b},iG:function iG(a,b){this.c=a
this.d=b},d2:function d2(a,b,c){this.x=a
this.c=b
this.d=c},iM:function iM(a,b,c,d){var _=this
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
_.d=e},j4:function j4(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},c5:function c5(a,b,c){this.x=a
this.c=b
this.d=c},f7:function f7(){},dt:function dt(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jz:function jz(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fL:function fL(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
lr:function(a){var s=new V.aF(0,0,0,1),r=$.mw
if(r==null){r=V.mv(0,0,1,1)
$.mw=r}return new X.eA(s,r)},
mo:function(a){var s,r,q=new X.f2(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gt().n(0,q.geV())
q.aE(new D.F("mover",s,q.b))}r=q.c
$.G().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.aE(new D.F("fov",r,1.0471975511965976))}r=q.d
$.G().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.aE(new D.F("near",r,0.1))}r=q.e
$.G().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.aE(new D.F("far",r,2000))}return q},
eA:function eA(a,b){var _=this
_.a=a
_.b=!0
_.r=b
_.x=null},
iC:function iC(){this.b=null},
f2:function f2(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jr:function jr(){}},V={
i9:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aF(s,r,q,1)},
hX:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qT:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bB(a-b,s)
return(a<0?a+s:a)+b},
E:function(a,b,c){$.G().toString
return C.a.ay(C.d.d2(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cy:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.G().toString
n=C.a.ay(C.d.d2(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.ay(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
m0:function(a){return C.d.iy(Math.pow(2,C.d.cM(Math.log(a)/Math.log(2))))},
an:function(){var s=$.mn
return s==null?$.mn=V.b0(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
b0:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mm:function(a,b,c){var s=c.E(),r=b.aP(s).E(),q=s.aP(r),p=new V.C(a.a,a.b,a.c)
return V.b0(r.a,q.a,s.a,r.bf(0).ad(p),r.b,q.b,s.b,q.bf(0).ad(p),r.c,q.c,s.c,s.bf(0).ad(p),0,0,0,1)},
lz:function(){var s=$.b2
return s==null?$.b2=new V.L(0,0,0):s},
mv:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.fa(a,b,c,d)},
dI:function(){var s=$.mM
return s==null?$.mM=new V.C(0,0,0):s},
oW:function(){var s=$.jR
return s==null?$.jR=new V.C(-1,0,0):s},
lD:function(){var s=$.jS
return s==null?$.jS=new V.C(0,1,0):s},
lE:function(){var s=$.jT
return s==null?$.jT=new V.C(0,0,1):s},
oV:function(a,b,c){return new V.C(a,b,c)},
t:function t(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ir:function ir(){},
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
V:function V(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fa:function fa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
qO:function(a){P.oQ(C.R,new V.lh(a))},
ms:function(a){var s=document.getElementById(a)
if(s==null)throw H.c(P.f("Failed to find "+a+" for RadioGroup"))
return new V.ja(a,!0,s)},
oI:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a3(n,"scroll",new V.jm(s),!1)
return new V.jk(o)},
aE:function aE(){},
lh:function lh(a){this.a=a},
eu:function eu(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eB:function eB(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eC:function eC(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
f4:function f4(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jk:function jk(a){this.a=a
this.b=null},
jm:function jm(a){this.a=a},
jl:function jl(a){this.a=a},
jn:function jn(a){this.a=a}},U={
ib:function(){return new U.ia()},
md:function(a){var s=V.an(),r=new U.cG(s)
if(!s.q(0,a))r.a=a
return r},
ia:function ia(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cG:function cG(a){this.a=a
this.b=null},
bZ:function bZ(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a0:function a0(){},
dF:function dF(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
dG:function dG(a,b,c,d,e){var _=this
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
dH:function dH(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={cF:function cF(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},cJ:function cJ(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},cP:function cP(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
os:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=""+"MaterialLight_"+a4.gaD(a4)+a5.gaD(a5)+a6.gaD(a6)+a7.gaD(a7)+a8.gaD(a8)+a9.gaD(a9)+b0.gaD(b0)+b1.gaD(b1)+b2.gaD(b2)+"_"
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
c=$.aQ()
if(h){s=$.bu()
c=new Z.bK(c.a|s.a)}if(g)c=new Z.bK(c.a|$.bt().a)
if(f)c=new Z.bK(c.a|$.bs().a)
return new A.iQ(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
kD:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
kE:function(a,b,c){var s
A.kD(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hY(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
pZ:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kD(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
pV:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kE(b,r,"ambient")
b.a+="\n"},
pX:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kE(b,r,"diffuse")
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
q_:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kE(b,r,"invDiffuse")
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
q5:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kE(b,r,"specular")
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
q1:function(a,b){var s,r,q
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
q3:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kD(b,r,"reflect")
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
q4:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kD(b,r,"refract")
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
pW:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hY(r)
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
pY:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.hY(r)
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
q2:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hY(r)
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
q6:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hY(r)
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
if(m){s=$.iq
if(s==null)s=$.iq=new E.h2(E.mN(),E.mO())
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
q0:function(a,b){var s,r
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
q7:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.a_(""),j=""+"precision mediump float;\n"
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
A.pZ(a,k)
A.pV(a,k)
A.pX(a,k)
A.q_(a,k)
A.q5(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.q3(a,k)
A.q4(a,k)}A.q1(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pW(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pY(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.q2(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.q6(a,p[n],k)
A.q0(a,k)}p=k.a+="// === Main ===\n"
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
k.a+=l+(q[0].toUpperCase()+C.a.am(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.am(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.am(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.am(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)j=!1
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
q8:function(a,b){var s,r,q
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
qa:function(a,b){var s
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
q9:function(a,b){var s
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
qc:function(a,b){var s,r
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
qd:function(a,b){var s,r
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
qb:function(a,b){var s
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
qe:function(a,b){var s
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
hY:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.am(a,1)},
lC:function(a,b,c,d,e){var s=new A.fA(H.b([],t.t),a,c,e)
s.f=d
s.e=P.eN(d,0,!1,t.S)
return s},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(a){this.a=a},
al:function al(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.iU=_.iT=_.e8=_.iS=_.iR=_.e7=_.e6=_.iQ=_.iP=_.e5=_.e4=_.iO=_.iN=_.e3=_.iM=_.iL=_.e2=_.e1=_.bK=_.ba=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cD=c
_.cE=d
_.cF=e
_.cG=f
_.cH=g
_.cI=h
_.cJ=i
_.cK=j
_.iX=_.iW=_.iV=null
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
iQ:function iQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bK=b6
_.e1=b7},
dy:function dy(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dz:function dz(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dB:function dB(a,b,c,d,e,f,g,h,i,j){var _=this
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
dE:function dE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a2:function a2(){},
jE:function jE(a){this.a=a},
ch:function ch(a,b,c){this.a=a
this.c=b
this.d=c},
fC:function fC(a,b,c){this.a=a
this.c=b
this.d=c},
fD:function fD(a,b,c){this.a=a
this.c=b
this.d=c},
fE:function fE(a,b,c){this.a=a
this.c=b
this.d=c},
fA:function fA(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
dv:function dv(a,b,c){this.a=a
this.c=b
this.d=c},
fB:function fB(a,b,c){this.a=a
this.c=b
this.d=c},
dw:function dw(a,b,c){this.a=a
this.c=b
this.d=c},
dx:function dx(a,b,c){this.a=a
this.c=b
this.d=c},
fF:function fF(a,b,c){this.a=a
this.c=b
this.d=c},
dA:function dA(a,b,c){this.a=a
this.c=b
this.d=c},
ci:function ci(a,b,c){this.a=a
this.c=b
this.d=c},
dC:function dC(a,b,c){this.a=a
this.c=b
this.d=c},
dD:function dD(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lW:function(a,b,c,d){var s=F.ji()
F.e9(s,b,c,d,a,1,0,0,1)
F.e9(s,b,c,d,a,0,1,0,3)
F.e9(s,b,c,d,a,0,0,1,2)
F.e9(s,b,c,d,a,-1,0,0,0)
F.e9(s,b,c,d,a,0,-1,0,0)
F.e9(s,b,c,d,a,0,0,-1,3)
s.aA()
return s},
kx:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
e9:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.C(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.C(s+a4,r+a2,q+a3)
o=new V.C(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.C(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.kx(h)
j=F.kx(g)
a.bu(F.m3(a0,a1,new F.ks(i,F.kx(f),F.kx(e),j,k,c),b))},
nk:function(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a1<3)throw H.c(P.f("Must have 3 or more sizes for a disk."))
s=F.ji()
r=b?-1:1
q=-6.283185307179586/a1
p=t.k
o=H.b([],p)
n=s.gW()
m=new V.C(0,0,r).E()
o.push(n.hE(new V.au(a,-1,-1,-1),new V.aF(1,1,1,1),new V.L(0,0,c),new V.C(0,0,r),new V.V(0.5,0.5),m))
for(l=0;l<=a1;++l){k=q*l
j=r*Math.sin(k)
i=Math.cos(k)
h=a0.$1(l/a1)
n=s.a
if(n==null)n=s.a=new F.z(s,H.b([],p))
m=new V.C(j,i,r).E()
if(j<0)g=0
else g=j>1?1:j
f=i<0
if(f)e=0
else e=i>1?1:i
if(f)f=0
else f=i>1?1:i
d=F.fM(new V.au(a,-1,-1,-1),null,new V.aF(g,e,f,1),new V.L(j*h,i*h,c),new V.C(0,0,r),new V.V(j*0.5+0.5,i*0.5+0.5),m,null,0)
n.n(0,d)
o.push(d)}s.gU().dK(o)
return s},
nh:function(a,b,c){return F.ni(!0,a,1,new F.kH(1,c),b)},
ni:function(a,b,c,d,e){var s
if(e<3)throw H.c(P.f("Must have 3 or more sizes for a cylindrical shape."))
if(c<1)throw H.c(P.f("Must have 1 or more divisionss for a cylindrical shape."))
s=F.m3(c,e,new F.kJ(d),null)
s.aA()
s.ct()
if(b)s.bu(F.nk(3,!1,1,new F.kK(d),e))
s.bu(F.nk(1,!0,-1,new F.kL(d),e))
return s},
nu:function(a,b,c){var s=F.lW(a,null,new F.li(1,b==null?new F.lj():b),c)
s.ct()
return s},
nw:function(){return F.nj(15,30,0.5,1,new F.lk())},
qJ:function(){return F.nj(12,120,0.3,1,new F.kU(3,2))},
nj:function(a,b,c,d,e){var s=F.m3(a,b,new F.kI(e,d,b,c),null)
s.aA()
s.ct()
return s},
m3:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.ji()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.z(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.fM(d,d,new V.aF(m,0,0,1),d,d,new V.V(o,1),d,d,0)
n.n(0,l)
c.$3(l,o,0)
q.push(l.cB(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.z(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.fM(d,d,new V.aF(g,f,e,1),d,d,new V.V(o,j),d,d,0)
h.n(0,l)
c.$3(l,o,k)
q.push(l.cB(a0))}}s.gU().hD(a+1,b+1,q)
return s},
ji:function(){return new F.jh()},
fM:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cl()
h=$.nO()
s=$.aQ()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bu().a)!==0)q.r=e
if((r&$.bt().a)!==0)q.x=b
if((r&$.bO().a)!==0)q.y=f
if((r&$.bP().a)!==0)q.z=g
if((r&$.nP().a)!==0)q.Q=c
if((r&$.cA().a)!==0)q.ch=i
if((r&$.bs().a)!==0)q.cx=a
return q},
ks:function ks(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kH:function kH(a,b){this.a=a
this.b=b},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
lj:function lj(){},
li:function li(a,b){this.a=a
this.b=b},
lk:function lk(){},
kU:function kU(a,b){this.a=a
this.b=b},
kI:function kI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
as:function as(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iv:function iv(){},
jo:function jo(){},
eL:function eL(){this.b=this.a=null},
iH:function iH(){},
jD:function jD(){},
f6:function f6(){this.a=null},
jh:function jh(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
jj:function jj(a,b,c,d,e,f,g){var _=this
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
bG:function bG(a,b){this.a=a
this.b=b},
cl:function cl(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
k_:function k_(a){this.a=a},
jZ:function jZ(a){this.a=a},
z:function z(a,b){this.a=a
this.b=!1
this.c=b},
cm:function cm(a,b,c){this.b=a
this.c=b
this.d=c},
jU:function jU(a,b){this.a=a
this.b=b},
jV:function jV(a,b){this.a=a
this.b=b},
cn:function cn(a,b){this.b=a
this.c=b},
jX:function jX(){},
jW:function jW(){},
jY:function jY(){},
j7:function j7(){},
dJ:function dJ(a){this.b=a}},T={ds:function ds(){},ft:function ft(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},js:function js(a,b){var _=this
_.a=a
_.c=b
_.e=_.d=0},jt:function jt(a,b,c,d,e,f,g){var _=this
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
H.lv.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gI:function(a){return H.dh(a)},
i:function(a){return"Instance of '"+H.di(a)+"'"}}
J.eF.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iac:1}
J.cW.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.bg.prototype={
gI:function(a){return 0},
i:function(a){return String(a)},
$imj:1}
J.f3.prototype={}
J.bI.prototype={}
J.aX.prototype={
i:function(a){var s=a[$.nA()]
if(s==null)return this.eI(a)
return"JavaScript function for "+J.cB(s)},
$icS:1}
J.x.prototype={
cZ:function(a,b){if(!!a.fixed$length)H.i(P.B("removeAt"))
if(b<0||b>=a.length)throw H.c(P.f9(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var s
if(!!a.fixed$length)H.i(P.B("remove"))
for(s=0;s<a.length;++s)if(J.X(a[s],b)){a.splice(s,1)
return!0}return!1},
ac:function(a,b){if(!!a.fixed$length)H.i(P.B("addAll"))
this.eY(a,b)
return},
eY:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aG(a))
for(s=0;s<r;++s)a.push(b[s])},
H:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aG(a))}},
j:function(a,b){var s,r,q=a.length,p=P.eN(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.y(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
i5:function(a){return this.j(a,"")},
i_:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aG(a))}return s},
i0:function(a,b,c){return this.i_(a,b,c,t.A)},
hZ:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aG(a))}throw H.c(H.iD())},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghY:function(a){if(a.length>0)return a[0]
throw H.c(H.iD())},
gaH:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.iD())},
dO:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aG(a))}return!1},
bi:function(a,b){if(!!a.immutable$list)H.i(P.B("sort"))
H.oL(a,b==null?J.pM():b)},
eE:function(a){return this.bi(a,null)},
C:function(a,b){var s
for(s=0;s<a.length;++s)if(J.X(a[s],b))return!0
return!1},
i:function(a){return P.ls(a,"[","]")},
gS:function(a){return new J.ag(a,a.length)},
gI:function(a){return H.dh(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.i(P.B("set length"))
if(b>a.length)H.kt(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cx(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.i(P.B("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cx(a,b))
a[b]=c},
$in:1,
$ih:1,
$ip:1}
J.iE.prototype={}
J.ag.prototype={
gB:function(a){return H.W(this).c.a(this.d)},
w:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.c2.prototype={
au:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbN(b)
if(this.gbN(a)===s)return 0
if(this.gbN(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbN:function(a){return a===0?1/a<0:a<0},
iy:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.B(""+a+".toInt()"))},
cM:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.B(""+a+".floor()"))},
aB:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.B(""+a+".round()"))},
d2:function(a,b){var s
if(b>20)throw H.c(P.aa(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbN(a))return"-"+s
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
bB:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eK:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dE(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.dE(a,b)},
dE:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.B("Result of truncating division is "+H.y(s)+": "+H.y(a)+" ~/ "+b))},
b7:function(a,b){var s
if(a>0)s=this.dD(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hs:function(a,b){if(b<0)throw H.c(H.ee(b))
return this.dD(a,b)},
dD:function(a,b){return b>31?0:a>>>b},
$iI:1,
$ia4:1}
J.cV.prototype={$ik:1}
J.eG.prototype={}
J.bf.prototype={
Y:function(a,b){if(b<0)throw H.c(H.cx(a,b))
if(b>=a.length)H.i(H.cx(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.cx(a,b))
return a.charCodeAt(b)},
X:function(a,b){return a+b},
bc:function(a,b,c,d){var s=P.bk(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
ai:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a6:function(a,b){return this.ai(a,b,0)},
v:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.f9(b,null))
if(b>c)throw H.c(P.f9(b,null))
if(c>a.length)throw H.c(P.f9(c,null))
return a.substring(b,c)},
am:function(a,b){return this.v(a,b,null)},
iB:function(a){return a.toLowerCase()},
N:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.O)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ay:function(a,b){var s=b-a.length
if(s<=0)return a
return this.N(" ",s)+a},
bL:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ee:function(a,b){return this.bL(a,b,0)},
hK:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aa(c,0,s,null,null))
return H.nv(a,b,c)},
C:function(a,b){return this.hK(a,b,0)},
au:function(a,b){var s
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
$im:1}
H.cX.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.r.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.Y(this.a,b)}}
H.n.prototype={}
H.d1.prototype={
gS:function(a){return new H.bh(this,this.gl(this))},
bW:function(a,b){return this.eH(0,b)}}
H.bh.prototype={
gB:function(a){return H.W(this).c.a(this.d)},
w:function(){var s,r=this,q=r.a,p=J.cz(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.aG(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.K(q,s);++r.c
return!0}}
H.aZ.prototype={
gS:function(a){return new H.eO(J.aB(this.a),this.b)},
gl:function(a){return J.aR(this.a)},
K:function(a,b){return this.b.$1(J.hZ(this.a,b))}}
H.cN.prototype={$in:1}
H.eO.prototype={
w:function(){var s=this,r=s.b
if(r.w()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){return H.W(this).Q[1].a(this.a)}}
H.d5.prototype={
gl:function(a){return J.aR(this.a)},
K:function(a,b){return this.b.$1(J.hZ(this.a,b))}}
H.b6.prototype={
gS:function(a){return new H.fQ(J.aB(this.a),this.b)}}
H.fQ.prototype={
w:function(){var s,r
for(s=this.a,r=this.b;s.w();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.cQ.prototype={}
H.fI.prototype={
m:function(a,b,c){throw H.c(P.B("Cannot modify an unmodifiable list"))}}
H.cj.prototype={}
H.cH.prototype={
i:function(a){return P.ly(this)},
m:function(a,b,c){H.ob()},
$iH:1}
H.cI.prototype={
gl:function(a){return this.a},
cz:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cz(0,b))return null
return this.dq(b)},
dq:function(a){return this.b[a]},
H:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.dq(q))}}}
H.jB.prototype={
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
H.dg.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eI.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fH.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.j8.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hv.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.by.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.ny(r==null?"unknown":r)+"'"},
$icS:1,
giE:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fq.prototype={}
H.fj.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.ny(s)+"'"}}
H.bS.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bS))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gI:function(a){var s,r=this.c
if(r==null)s=H.dh(this.a)
else s=typeof r!=="object"?J.lm(r):H.dh(r)
return(s^H.dh(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.y(this.d)+"' of "+("Instance of '"+H.di(s)+"'")}}
H.fc.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.Y.prototype={
gl:function(a){return this.a},
gbM:function(a){return this.a===0},
ga8:function(a){return new H.cZ(this,H.W(this).L("cZ<1>"))},
giD:function(a){var s=this,r=H.W(s)
return H.or(s.ga8(s),new H.iF(s),r.c,r.Q[1])},
cz:function(a,b){var s=this.b
if(s==null)return!1
return this.f6(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bD(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bD(p,b)
q=r==null?n:r.b
return q}else return o.i3(b)},
i3:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.dr(p,q.eg(a))
r=q.eh(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.di(s==null?q.b=q.ce():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.di(r==null?q.c=q.ce():r,b,c)}else q.i4(b,c)},
i4:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.ce()
s=p.eg(a)
r=p.dr(o,s)
if(r==null)p.cm(o,s,[p.cf(a,b)])
else{q=p.eh(r,a)
if(q>=0)r[q].b=b
else r.push(p.cf(a,b))}},
H:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aG(s))
r=r.c}},
di:function(a,b,c){var s=this.bD(a,b)
if(s==null)this.cm(a,b,this.cf(b,c))
else s.b=c},
fh:function(){this.r=this.r+1&67108863},
cf:function(a,b){var s,r=this,q=new H.iI(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.fh()
return q},
eg:function(a){return J.lm(a)&0x3ffffff},
eh:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.X(a[r].a,b))return r
return-1},
i:function(a){return P.ly(this)},
bD:function(a,b){return a[b]},
dr:function(a,b){return a[b]},
cm:function(a,b,c){a[b]=c},
fa:function(a,b){delete a[b]},
f6:function(a,b){return this.bD(a,b)!=null},
ce:function(){var s="<non-identifier-key>",r=Object.create(null)
this.cm(r,s,r)
this.fa(r,s)
return r}}
H.iF.prototype={
$1:function(a){var s=this.a
return H.W(s).Q[1].a(s.h(0,a))},
$S:function(){return H.W(this.a).L("2(1)")}}
H.iI.prototype={}
H.cZ.prototype={
gl:function(a){return this.a.a},
gS:function(a){var s=this.a,r=new H.eM(s,s.r)
r.c=s.e
return r}}
H.eM.prototype={
gB:function(a){return H.W(this).c.a(this.d)},
w:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aG(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kP.prototype={
$1:function(a){return this.a(a)},
$S:39}
H.kQ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:59}
H.kR.prototype={
$1:function(a){return this.a(a)},
$S:50}
H.eH.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imu:1}
H.db.prototype={$idb:1}
H.a1.prototype={$ia1:1}
H.c6.prototype={
gl:function(a){return a.length},
$iA:1}
H.bE.prototype={
h:function(a,b){H.b7(b,a,a.length)
return a[b]},
m:function(a,b,c){H.b7(b,a,a.length)
a[b]=c},
$in:1,
$ih:1,
$ip:1}
H.dc.prototype={
m:function(a,b,c){H.b7(b,a,a.length)
a[b]=c},
$in:1,
$ih:1,
$ip:1}
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
H.dd.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b7(b,a,a.length)
return a[b]}}
H.bF.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b7(b,a,a.length)
return a[b]},
$ibF:1,
$icg:1}
H.dR.prototype={}
H.dS.prototype={}
H.dT.prototype={}
H.dU.prototype={}
H.aw.prototype={
L:function(a){return H.hJ(v.typeUniverse,this,a)},
bk:function(a){return H.pk(v.typeUniverse,this,a)}}
H.h7.prototype={}
H.h3.prototype={
i:function(a){return this.a}}
H.e2.prototype={}
P.k1.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:49}
P.k0.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:47}
P.k2.prototype={
$0:function(){this.a.$0()},
$S:13}
P.k3.prototype={
$0:function(){this.a.$0()},
$S:13}
P.e1.prototype={
eT:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cw(new P.kk(this,b),0),a)
else throw H.c(P.B("`setTimeout()` not found."))},
eU:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cw(new P.kj(this,a,Date.now(),b),0),a)
else throw H.c(P.B("Periodic timer."))},
$ijw:1}
P.kk.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:0}
P.kj.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eK(s,o)}q.c=p
r.d.$1(q)},
$S:13}
P.cr.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.y(this.a)+")"}}
P.bL.prototype={
gB:function(a){var s=this.c
if(s==null)return this.b
return s.gB(s)},
w:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.w())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.cr){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aB(s)
if(o instanceof P.bL){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dZ.prototype={
gS:function(a){return new P.bL(this.a())}}
P.fR.prototype={}
P.cd.prototype={}
P.fl.prototype={}
P.kr.prototype={}
P.kF.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:0}
P.k8.prototype={
iu:function(a){var s,r,q,p=null
try{if(C.f===$.aO){a.$0()
return}P.qg(p,p,this,a)}catch(q){s=H.ak(q)
r=H.lY(q)
P.nb(p,p,this,s,r)}},
iv:function(a,b){var s,r,q,p=null
try{if(C.f===$.aO){a.$1(b)
return}P.qh(p,p,this,a,b)}catch(q){s=H.ak(q)
r=H.lY(q)
P.nb(p,p,this,s,r)}},
iw:function(a,b){return this.iv(a,b,t.A)},
hH:function(a){return new P.k9(this,a)},
dT:function(a,b){return new P.ka(this,a,b)}}
P.k9.prototype={
$0:function(){return this.a.iu(this.b)},
$S:0}
P.ka.prototype={
$1:function(a){return this.a.iw(this.b,a)},
$S:function(){return this.c.L("~(0)")}}
P.dN.prototype={
gS:function(a){var s=new P.dO(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
C:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.f5(b)
return r}},
f5:function(a){var s=this.d
if(s==null)return!1
return this.c5(s[this.c1(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dj(s==null?q.b=P.lH():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dj(r==null?q.c=P.lH():r,b)}else return q.eX(0,b)},
eX:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lH()
s=q.c1(b)
r=p[s]
if(r==null)p[s]=[q.c0(b)]
else{if(q.c5(r,b)>=0)return!1
r.push(q.c0(b))}return!0},
M:function(a,b){if((b&1073741823)===b)return this.hf(this.c,b)
else return this.he(0,b)},
he:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.c1(b)
r=n[s]
q=o.c5(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dG(p)
return!0},
dj:function(a,b){if(a[b]!=null)return!1
a[b]=this.c0(b)
return!0},
hf:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dG(s)
delete a[b]
return!0},
dk:function(){this.r=this.r+1&1073741823},
c0:function(a){var s,r=this,q=new P.k7(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dk()
return q},
dG:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dk()},
c1:function(a){return J.lm(a)&1073741823},
c5:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.X(a[r].a,b))return r
return-1}}
P.k7.prototype={}
P.dO.prototype={
gB:function(a){return H.W(this).c.a(this.d)},
w:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aG(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cU.prototype={}
P.iJ.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:15}
P.d0.prototype={$in:1,$ih:1,$ip:1}
P.j.prototype={
gS:function(a){return new H.bh(a,this.gl(a))},
K:function(a,b){return this.h(a,b)},
H:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.aG(a))}},
gbM:function(a){return this.gl(a)===0},
iA:function(a,b){var s,r,q,p,o=this
if(o.gbM(a)){s=J.lt(0,H.b8(a).L("j.E"))
return s}r=o.h(a,0)
q=P.eN(o.gl(a),r,!0,H.b8(a).L("j.E"))
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
iz:function(a){return this.iA(a,!0)},
hW:function(a,b,c,d){var s
H.b8(a).L("j.E").a(d)
P.bk(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.ls(a,"[","]")}}
P.d3.prototype={}
P.iN.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.y(a)
r.a=s+": "
r.a+=H.y(b)},
$S:46}
P.N.prototype={
H:function(a,b){var s,r,q
for(s=J.aB(this.ga8(a)),r=H.b8(a).L("N.V");s.w();){q=s.gB(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.aR(this.ga8(a))},
i:function(a){return P.ly(a)},
$iH:1}
P.hK.prototype={
m:function(a,b,c){throw H.c(P.B("Cannot modify unmodifiable map"))}}
P.d4.prototype={
h:function(a,b){return J.m6(this.a,b)},
m:function(a,b,c){J.ll(this.a,b,c)},
H:function(a,b){J.ej(this.a,b)},
gl:function(a){return J.aR(this.a)},
i:function(a){return J.cB(this.a)},
$iH:1}
P.ck.prototype={}
P.dk.prototype={
ac:function(a,b){var s
for(s=J.aB(b);s.w();)this.n(0,s.gB(s))},
i:function(a){return P.ls(this,"{","}")},
K:function(a,b){var s,r,q,p,o="index"
H.qt(b,o,t.S)
P.mt(b,o)
for(s=P.p4(this,this.r),r=H.W(s).c,q=0;s.w();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.P(b,this,o,null,q))}}
P.dV.prototype={$in:1,$ih:1}
P.dP.prototype={}
P.e6.prototype={}
P.e8.prototype={}
P.jP.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.ak(r)}return null},
$S:17}
P.jO.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.ak(r)}return null},
$S:17}
P.i4.prototype={
i8:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bk(a3,a4,a2.length)
s=$.nR()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.G(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.kO(C.a.G(a2,k))
g=H.kO(C.a.G(a2,k+1))
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
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.a_("")
d=o}else d=o
c=d.a+=C.a.v(a2,p,q)
d.a=c+H.av(j)
p=k
continue}}throw H.c(P.a7("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.v(a2,p,a4)
d=r.length
if(n>=0)P.m9(a2,m,a4,n,l,d)
else{b=C.c.bB(d-1,4)+1
if(b===1)throw H.c(P.a7(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.bc(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.m9(a2,m,a4,n,l,a)
else{b=C.c.bB(a,4)
if(b===1)throw H.c(P.a7(a0,a2,a4))
if(b>1)a2=C.a.bc(a2,a4,a4,b===2?"==":"=")}return a2}}
P.i5.prototype={}
P.eq.prototype={}
P.es.prototype={}
P.ip.prototype={}
P.iB.prototype={
i:function(a){return this.a}}
P.iA.prototype={
f7:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
default:m=l}if(m!=null){if(n==null)n=new P.a_("")
if(o>b)n.a+=C.a.v(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.a.v(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.jM.prototype={
ghV:function(){return C.P}}
P.jQ.prototype={
cA:function(a){var s,r,q,p=P.bk(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.kp(r)
if(q.fc(a,0,p)!==p){C.a.Y(a,p-1)
q.cr()}return new Uint8Array(r.subarray(0,H.pD(0,q.b,s)))}}
P.kp.prototype={
cr:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
hA:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.cr()
return!1}},
fc:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.Y(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.G(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hA(p,C.a.G(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.cr()}else if(p<=2047){o=l.b
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
P.jN.prototype={
cA:function(a){var s=this.a,r=P.oT(s,a,0,null)
if(r!=null)return r
return new P.ko(s).hL(a,0,null,!0)}}
P.ko.prototype={
hL:function(a,b,c,d){var s,r,q,p,o=this,n=P.bk(b,c,J.aR(a))
if(b===n)return""
s=P.pz(a,b,n)
r=o.c2(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.pA(q)
o.b=0
throw H.c(P.a7(p,a,b+o.c))}return r},
c2:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.ab(b+c,2)
r=q.c2(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.c2(a,s,c,d)}return q.hQ(a,b,c,d)},
hQ:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a_(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.G("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.G(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.av(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.av(j)
break
case 65:g.a+=H.av(j);--f
break
default:p=g.a+=H.av(j)
g.a=p+H.av(j)
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
g.a+=H.av(a[l])}else g.a+=P.fn(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.av(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.Z.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.Z&&this.a===b.a&&!0},
au:function(a,b){return C.c.au(this.a,b.a)},
gI:function(a){var s=this.a
return(s^C.c.b7(s,30))&1073741823},
i:function(a){var s=this,r=P.oc(H.oC(s)),q=P.ev(H.oA(s)),p=P.ev(H.ow(s)),o=P.ev(H.ox(s)),n=P.ev(H.oz(s)),m=P.ev(H.oB(s)),l=P.od(H.oy(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bz.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bz&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
au:function(a,b){return C.c.au(this.a,b.a)},
i:function(a){var s,r,q,p=new P.il(),o=this.a
if(o<0)return"-"+new P.bz(0-o).i(0)
s=p.$1(C.c.ab(o,6e7)%60)
r=p.$1(C.c.ab(o,1e6)%60)
q=new P.ik().$1(o%1e6)
return""+C.c.ab(o,36e8)+":"+s+":"+r+"."+q}}
P.ik.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:30}
P.il.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:30}
P.M.prototype={}
P.em.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.is(s)
return"Assertion failed"}}
P.fz.prototype={}
P.eZ.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gc4:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc3:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gc4()+o+m
if(!q.a)return l
s=q.gc3()
r=P.is(q.b)
return l+s+": "+r}}
P.dj.prototype={
gc4:function(){return"RangeError"},
gc3:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.y(q):""
else if(q==null)s=": Not greater than or equal to "+H.y(r)
else if(q>r)s=": Not in inclusive range "+H.y(r)+".."+H.y(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.y(r)
return s}}
P.eD.prototype={
gc4:function(){return"RangeError"},
gc3:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.fJ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fG.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.cc.prototype={
i:function(a){return"Bad state: "+this.a}}
P.er.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.is(s)+"."}}
P.f1.prototype={
i:function(a){return"Out of Memory"},
$iM:1}
P.dq.prototype={
i:function(a){return"Stack Overflow"},
$iM:1}
P.et.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.h4.prototype={
i:function(a){return"Exception: "+this.a}}
P.iy.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.v(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.G(d,o)
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
i=""}h=C.a.v(d,k,l)
return f+j+h+i+"\n"+C.a.N(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.y(e)+")"):f}}
P.h.prototype={
bW:function(a,b){return new H.b6(this,b,H.W(this).L("b6<h.E>"))},
gl:function(a){var s,r=this.gS(this)
for(s=0;r.w();)++s
return s},
gaZ:function(a){var s,r=this.gS(this)
if(!r.w())throw H.c(H.iD())
s=r.gB(r)
if(r.w())throw H.c(H.oi())
return s},
K:function(a,b){var s,r,q
P.mt(b,"index")
for(s=this.gS(this),r=0;s.w();){q=s.gB(s)
if(b===r)return q;++r}throw H.c(P.P(b,this,"index",null,r))},
i:function(a){return P.oh(this,"(",")")}}
P.eE.prototype={}
P.ah.prototype={
gI:function(a){return P.Q.prototype.gI.call(C.U,this)},
i:function(a){return"null"}}
P.Q.prototype={constructor:P.Q,$iQ:1,
q:function(a,b){return this===b},
gI:function(a){return H.dh(this)},
i:function(a){return"Instance of '"+H.di(this)+"'"},
toString:function(){return this.i(this)}}
P.a_.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jK.prototype={
$2:function(a,b){var s,r,q,p=C.a.ee(b,"=")
if(p===-1){if(b!=="")J.ll(a,P.lQ(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.v(b,0,p)
r=C.a.am(b,p+1)
q=this.a
J.ll(a,P.lQ(s,0,s.length,q,!0),P.lQ(r,0,r.length,q,!0))}return a},
$S:45}
P.jH.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.jI.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.jJ.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kS(C.a.v(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:42}
P.bM.prototype={
gcq:function(){var s,r,q,p=this,o=p.x
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
else o=H.i(H.lx("_text"))}return o},
gI:function(a){var s=this,r=s.z
if(r==null){r=C.a.gI(s.gcq())
if(s.z==null)s.z=r
else r=H.i(H.lx("hashCode"))}return r},
gcY:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.ck(P.mI(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.i(H.lx("queryParameters"))}return r},
gez:function(){return this.b},
gcN:function(a){var s=this.c
if(s==null)return""
if(C.a.a6(s,"["))return C.a.v(s,1,s.length-1)
return s},
gbQ:function(a){var s=this.d
return s==null?P.n_(this.a):s},
gcX:function(a){var s=this.f
return s==null?"":s},
ge9:function(){var s=this.r
return s==null?"":s},
eu:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a6(s,"/"))s="/"+s
q=s
p=P.lO(null,0,0,b)
return new P.bM(n,l,j,k,q,p,o.r)},
gea:function(){return this.c!=null},
ged:function(){return this.f!=null},
geb:function(){return this.r!=null},
i:function(a){return this.gcq()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbX())if(q.c!=null===b.gea())if(q.b===b.gez())if(q.gcN(q)===b.gcN(b))if(q.gbQ(q)===b.gbQ(b))if(q.e===b.ger(b)){s=q.f
r=s==null
if(!r===b.ged()){if(r)s=""
if(s===b.gcX(b)){s=q.r
r=s==null
if(!r===b.geb()){if(r)s=""
s=s===b.ge9()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifK:1,
gbX:function(){return this.a},
ger:function(a){return this.e}}
P.km.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.kn(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.kn(C.h,b,C.e,!0)}},
$S:41}
P.kl.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aB(b),r=this.a;s.w();)r.$2(a,s.gB(s))},
$S:6}
P.jG.prototype={
gey:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bL(s,"?",m)
q=s.length
if(r>=0){p=P.e7(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fX("data","",n,n,P.e7(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.ky.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.a_.hW(s,0,96,b)
return s},
$S:40}
P.kz.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.G(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:22}
P.kA.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.G(b,0),r=C.a.G(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:22}
P.hp.prototype={
gea:function(){return this.c>0},
gec:function(){return this.c>0&&this.d+1<this.e},
ged:function(){return this.f<this.r},
geb:function(){return this.r<this.a.length},
gbX:function(){var s=this.x
return s==null?this.x=this.f4():s},
f4:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a6(r.a,"http"))return"http"
if(q===5&&C.a.a6(r.a,"https"))return"https"
if(s&&C.a.a6(r.a,"file"))return"file"
if(q===7&&C.a.a6(r.a,"package"))return"package"
return C.a.v(r.a,0,q)},
gez:function(){var s=this.c,r=this.b+3
return s>r?C.a.v(this.a,r,s-1):""},
gcN:function(a){var s=this.c
return s>0?C.a.v(this.a,s,this.d):""},
gbQ:function(a){var s,r=this
if(r.gec())return P.kS(C.a.v(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a6(r.a,"http"))return 80
if(s===5&&C.a.a6(r.a,"https"))return 443
return 0},
ger:function(a){return C.a.v(this.a,this.e,this.f)},
gcX:function(a){var s=this.f,r=this.r
return s<r?C.a.v(this.a,s+1,r):""},
ge9:function(){var s=this.r,r=this.a
return s<r.length?C.a.am(r,s+1):""},
gcY:function(){var s=this
if(s.f>=s.r)return C.Z
return new P.ck(P.mI(s.gcX(s)),t.dw)},
eu:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbX(),k=l==="file",j=n.c,i=j>0?C.a.v(n.a,n.b+3,j):"",h=n.gec()?n.gbQ(n):m
j=n.c
if(j>0)s=C.a.v(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.v(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a6(r,"/"))r="/"+r
p=P.lO(m,0,0,b)
q=n.r
o=q<j.length?C.a.am(j,q+1):m
return new P.bM(l,i,s,h,r,p,o)},
gI:function(a){var s=this.y
return s==null?this.y=C.a.gI(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifK:1}
P.fX.prototype={}
W.w.prototype={}
W.i_.prototype={
gl:function(a){return a.length}}
W.ek.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.el.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bR.prototype={$ibR:1}
W.bv.prototype={$ibv:1}
W.bw.prototype={$ibw:1}
W.bx.prototype={
d6:function(a,b,c){if(c!=null)return a.getContext(b,P.ng(c))
return a.getContext(b)},
eB:function(a,b){return this.d6(a,b,null)},
$ibx:1}
W.cE.prototype={$icE:1}
W.aD.prototype={
gl:function(a){return a.length}}
W.ic.prototype={
gl:function(a){return a.length}}
W.K.prototype={$iK:1}
W.cK.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.id.prototype={}
W.ar.prototype={}
W.aU.prototype={}
W.ie.prototype={
gl:function(a){return a.length}}
W.ig.prototype={
gl:function(a){return a.length}}
W.ih.prototype={
gl:function(a){return a.length}}
W.bd.prototype={$ibd:1}
W.ii.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cL.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.cM.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.y(r)+", "
s=a.top
s.toString
return r+H.y(s)+") "+H.y(this.gaY(a))+" x "+H.y(this.gaS(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.aP(b)
if(s===r.gbO(b)){s=a.top
s.toString
s=s===r.gbT(b)&&this.gaY(a)===r.gaY(b)&&this.gaS(a)===r.gaS(b)}else s=!1}else s=!1
return s},
gI:function(a){var s,r=a.left
r.toString
r=C.d.gI(r)
s=a.top
s.toString
return W.mR(r,C.d.gI(s),C.d.gI(this.gaY(a)),C.d.gI(this.gaS(a)))},
gdU:function(a){var s=a.bottom
s.toString
return s},
gds:function(a){return a.height},
gaS:function(a){var s=this.gds(a)
s.toString
return s},
gbO:function(a){var s=a.left
s.toString
return s},
gd1:function(a){var s=a.right
s.toString
return s},
gbT:function(a){var s=a.top
s.toString
return s},
gdI:function(a){return a.width},
gaY:function(a){var s=this.gdI(a)
s.toString
return s},
$iaf:1}
W.ew.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.ij.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.fU.prototype={
gbM:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gS:function(a){var s=this.iz(this)
return new J.ag(s,s.length)}}
W.D.prototype={
gak:function(a){return new W.h1(a)},
gbI:function(a){var s=a.children
s.toString
return new W.fU(a,s)},
gdX:function(a){var s,r,q,p=a.clientLeft
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
av:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.mg
if(s==null){s=H.b([],t.Q)
r=new W.df(s)
s.push(W.mQ(null))
s.push(W.mV())
$.mg=r
d=r}else d=s
s=$.mf
if(s==null){s=new W.hL(d)
$.mf=s
c=s}else{s.a=d
c=s}}if($.be==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.be=r
r=r.createRange()
r.toString
$.lp=r
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
s=!C.b.C(C.X,s)}else s=!1
if(s){$.lp.selectNodeContents(q)
s=$.lp
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.be.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.be.body)J.m7(q)
c.d7(p)
document.adoptNode(p).toString
return p},
hO:function(a,b,c){return this.av(a,b,c,null)},
eC:function(a,b){var s
a.textContent=null
s=a.appendChild(this.av(a,b,null,null))
s.toString},
gew:function(a){var s=a.tagName
s.toString
return s},
$iD:1}
W.im.prototype={
$1:function(a){return t.h.b(a)},
$S:23}
W.l.prototype={$il:1}
W.e.prototype={
hC:function(a,b,c,d){if(c!=null)this.eZ(a,b,c,!1)},
eZ:function(a,b,c,d){return a.addEventListener(b,H.cw(c,1),!1)},
$ie:1}
W.am.prototype={$iam:1}
W.bY.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1,
$ibY:1}
W.ex.prototype={
gl:function(a){return a.length}}
W.ez.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.iz.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.bB.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.bC.prototype={
gdY:function(a){var s=a.data
s.toString
return s},
$ibC:1}
W.c_.prototype={$ic_:1}
W.c1.prototype={$ic1:1}
W.bD.prototype={$ibD:1}
W.iL.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.j1.prototype={
gl:function(a){return a.length}}
W.c3.prototype={$ic3:1}
W.eR.prototype={
h:function(a,b){return P.br(a.get(b))},
H:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.br(s.value[1]))}},
ga8:function(a){var s=H.b([],t.s)
this.H(a,new W.j2(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Not supported"))},
$iH:1}
W.j2.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.eS.prototype={
h:function(a,b){return P.br(a.get(b))},
H:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.br(s.value[1]))}},
ga8:function(a){var s=H.b([],t.s)
this.H(a,new W.j3(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Not supported"))},
$iH:1}
W.j3.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.aI.prototype={$iaI:1}
W.eT.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.ao.prototype={$iao:1}
W.a6.prototype={
gaZ:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.lA("No elements"))
if(r>1)throw H.c(P.lA("More than one element"))
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
gS:function(a){var s=this.a.childNodes
return new W.cR(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.u.prototype={
ip:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
is:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nV(s,b,a)}catch(q){H.ak(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eG(a):s},
hh:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$iu:1}
W.de.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.aK.prototype={
gl:function(a){return a.length},
$iaK:1}
W.f5.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.fb.prototype={
h:function(a,b){return P.br(a.get(b))},
H:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.br(s.value[1]))}},
ga8:function(a){var s=H.b([],t.s)
this.H(a,new W.jg(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Not supported"))},
$iH:1}
W.jg.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.fd.prototype={
gl:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.ff.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.aM.prototype={$iaM:1}
W.fg.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.aN.prototype={
gl:function(a){return a.length},
$iaN:1}
W.fk.prototype={
h:function(a,b){return a.getItem(H.kv(b))},
m:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga8:function(a){var s=H.b([],t.s)
this.H(a,new W.jp(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iH:1}
W.jp.prototype={
$2:function(a,b){return this.a.push(a)},
$S:51}
W.ap.prototype={$iap:1}
W.bm.prototype={$ibm:1}
W.dr.prototype={
av:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bY(a,b,c,d)
s=W.oe("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a6(r).ac(0,new W.a6(s))
return r}}
W.fo.prototype={
av:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bY(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a6(C.C.av(r,b,c,d))
r=new W.a6(r.gaZ(r))
new W.a6(s).ac(0,new W.a6(r.gaZ(r)))
return s}}
W.fp.prototype={
av:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bY(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a6(C.C.av(r,b,c,d))
new W.a6(s).ac(0,new W.a6(r.gaZ(r)))
return s}}
W.cf.prototype={$icf:1}
W.ay.prototype={$iay:1}
W.ai.prototype={$iai:1}
W.fr.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.fs.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.jv.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.az.prototype={$iaz:1}
W.bH.prototype={$ibH:1}
W.fx.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.jA.prototype={
gl:function(a){return a.length}}
W.b5.prototype={}
W.jL.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fN.prototype={
gl:function(a){return a.length}}
W.bn.prototype={
ghS:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.B("deltaY is not supported"))},
ghR:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.B("deltaX is not supported"))},
$ibn:1}
W.co.prototype={
hi:function(a,b){var s=a.requestAnimationFrame(H.cw(b,1))
s.toString
return s},
fb:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cp.prototype={$icp:1}
W.fV.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.dK.prototype={
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
r=J.aP(b)
if(s===r.gbO(b)){s=a.top
s.toString
if(s===r.gbT(b)){s=a.width
s.toString
if(s===r.gaY(b)){s=a.height
s.toString
r=s===r.gaS(b)
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
return W.mR(p,s,r,C.d.gI(q))},
gds:function(a){return a.height},
gaS:function(a){var s=a.height
s.toString
return s},
gdI:function(a){return a.width},
gaY:function(a){var s=a.width
s.toString
return s}}
W.h8.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.dQ.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.hs.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.hz.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$iA:1,
$ih:1,
$ip:1}
W.fS.prototype={
H:function(a,b){var s,r,q,p,o
for(s=this.ga8(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,H.kv(q.getAttribute(o)))}},
ga8:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.b([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.d(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.h1.prototype={
h:function(a,b){return this.a.getAttribute(H.kv(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga8(this).length}}
W.lq.prototype={}
W.dL.prototype={
hz:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nW(s,this.c,r,!1)}}}
W.k4.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.lG.prototype={}
W.cq.prototype={
eO:function(a){var s
if($.dM.gbM($.dM)){for(s=0;s<262;++s)$.dM.m(0,C.W[s],W.qC())
for(s=0;s<12;++s)$.dM.m(0,C.n[s],W.qD())}},
b8:function(a){return $.nS().C(0,W.cO(a))},
aF:function(a,b,c){var s=$.dM.h(0,W.cO(a)+"::"+b)
if(s==null)s=$.dM.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaJ:1}
W.O.prototype={
gS:function(a){return new W.cR(a,this.gl(a))}}
W.df.prototype={
b8:function(a){return C.b.dO(this.a,new W.j6(a))},
aF:function(a,b,c){return C.b.dO(this.a,new W.j5(a,b,c))},
$iaJ:1}
W.j6.prototype={
$1:function(a){return a.b8(this.a)},
$S:26}
W.j5.prototype={
$1:function(a){return a.aF(this.a,this.b,this.c)},
$S:26}
W.dW.prototype={
eS:function(a,b,c,d){var s,r,q
this.a.ac(0,c)
s=b.bW(0,new W.kc())
r=b.bW(0,new W.kd())
this.b.ac(0,s)
q=this.c
q.ac(0,C.v)
q.ac(0,r)},
b8:function(a){return this.a.C(0,W.cO(a))},
aF:function(a,b,c){var s=this,r=W.cO(a),q=s.c
if(q.C(0,r+"::"+b))return s.d.hF(c)
else if(q.C(0,"*::"+b))return s.d.hF(c)
else{q=s.b
if(q.C(0,r+"::"+b))return!0
else if(q.C(0,"*::"+b))return!0
else if(q.C(0,r+"::*"))return!0
else if(q.C(0,"*::*"))return!0}return!1},
$iaJ:1}
W.kc.prototype={
$1:function(a){return!C.b.C(C.n,a)},
$S:27}
W.kd.prototype={
$1:function(a){return C.b.C(C.n,a)},
$S:27}
W.hB.prototype={
aF:function(a,b,c){if(this.eJ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.C(0,b)
return!1}}
W.ki.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:37}
W.hA.prototype={
b8:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cO(a)==="foreignObject")return!1
if(s)return!0
return!1},
aF:function(a,b,c){if(b==="is"||C.a.a6(b,"on"))return!1
return this.b8(a)},
$iaJ:1}
W.cR.prototype={
w:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.m6(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return H.W(this).c.a(this.d)}}
W.kb.prototype={}
W.hL.prototype={
d7:function(a){var s,r=new W.kq(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
bo:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.m7(a)
else b.removeChild(a).toString},
hm:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.nY(a)
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
o=p}l=o}catch(n){H.ak(n)}r="element unprintable"
try{r=J.cB(a)}catch(n){H.ak(n)}try{q=W.cO(a)
this.hl(a,b,l,r,q,k,j)}catch(n){if(H.ak(n) instanceof P.aC)throw n
else{this.bo(a,b)
p=window
p.toString
p="Removing corrupted element "+H.y(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
hl:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.bo(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.b8(a)){m.bo(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.y(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.aF(a,"is",g)){m.bo(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.ga8(f)
q=H.b(s.slice(0),H.kt(s))
for(p=f.ga8(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.o1(o)
H.kv(o)
if(!r.aF(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.y(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.d7(s)}}}
W.kq.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.hm(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.bo(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.lA("Corrupt HTML")
throw H.c(n)}}catch(p){H.ak(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:35}
W.fW.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h5.prototype={}
W.h6.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.hd.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.hg.prototype={}
W.hh.prototype={}
W.hi.prototype={}
W.hl.prototype={}
W.hm.prototype={}
W.ho.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.hq.prototype={}
W.hr.prototype={}
W.hw.prototype={}
W.hC.prototype={}
W.hD.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.hE.prototype={}
W.hF.prototype={}
W.hM.prototype={}
W.hN.prototype={}
W.hO.prototype={}
W.hP.prototype={}
W.hQ.prototype={}
W.hR.prototype={}
W.hS.prototype={}
W.hT.prototype={}
W.hU.prototype={}
W.hV.prototype={}
P.ke.prototype={
cL:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bV:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.kB(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.Z)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.jF("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.x.b(a))return a
if(t.cH.b(a)||t.dE.b(a)||t.bu.b(a))return a
if(t.f.b(a)){s=n.cL(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.ej(a,new P.kg(m,n))
return m.a}if(t.E.b(a)){s=n.cL(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.hN(a,s)}if(t.eH.b(a)){s=n.cL(a)
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
n.i1(a,new P.kh(m,n))
return m.b}throw H.c(P.jF("structured clone of other type"))},
hN:function(a,b){var s,r,q=J.cz(a),p=q.gl(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bV(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.kg.prototype={
$2:function(a,b){this.a.a[a]=this.b.bV(b)},
$S:15}
P.kh.prototype={
$2:function(a,b){this.a.b[a]=this.b.bV(b)},
$S:34}
P.e3.prototype={$ibC:1,
gdY:function(a){return this.a}}
P.kw.prototype={
$1:function(a){this.a.push(P.n7(a))},
$S:33}
P.kG.prototype={
$2:function(a,b){this.a[a]=P.n7(b)},
$S:15}
P.kf.prototype={
i1:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.ey.prototype={
gbm:function(){var s=this.b,r=H.W(s)
return new H.aZ(new H.b6(s,new P.iw(),r.L("b6<j.E>")),new P.ix(),r.L("aZ<j.E,D>"))},
H:function(a,b){C.b.H(P.iK(this.gbm(),!1,t.h),b)},
m:function(a,b,c){var s=this.gbm()
J.o0(s.b.$1(J.hZ(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.aR(this.gbm().a)},
h:function(a,b){var s=this.gbm()
return s.b.$1(J.hZ(s.a,b))},
gS:function(a){var s=P.iK(this.gbm(),!1,t.h)
return new J.ag(s,s.length)}}
P.iw.prototype={
$1:function(a){return t.h.b(a)},
$S:23}
P.ix.prototype={
$1:function(a){return t.h.a(a)},
$S:61}
P.hn.prototype={
gd1:function(a){return this.$ti.c.a(this.a+this.c)},
gdU:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.aP(b)
if(s===r.gbO(b)){q=o.b
if(q===r.gbT(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gd1(b)&&p.a(q+o.d)===r.gdU(b)}else s=!1}else s=!1}else s=!1
return s},
gI:function(a){var s=this,r=s.a,q=C.c.gI(r),p=s.b,o=C.c.gI(p),n=s.$ti.c
r=C.c.gI(n.a(r+s.c))
p=C.c.gI(n.a(p+s.d))
return H.oO(H.jq(H.jq(H.jq(H.jq(0,q),o),r),p))}}
P.af.prototype={
gbO:function(a){return this.a},
gbT:function(a){return this.b},
gaY:function(a){return this.c},
gaS:function(a){return this.d}}
P.aY.prototype={$iaY:1}
P.eK.prototype={
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
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$ip:1}
P.b1.prototype={$ib1:1}
P.f_.prototype={
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
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$ip:1}
P.j9.prototype={
gl:function(a){return a.length}}
P.ca.prototype={$ica:1}
P.fm.prototype={
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
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$ip:1}
P.o.prototype={
gbI:function(a){return new P.ey(a,new W.a6(a))},
av:function(a,b,c,d){var s,r,q,p,o=H.b([],t.Q)
o.push(W.mQ(null))
o.push(W.mV())
o.push(new W.hA())
c=new W.hL(new W.df(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.p.hO(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a6(q)
p=r.gaZ(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$io:1}
P.b3.prototype={$ib3:1}
P.fy.prototype={
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
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$ip:1}
P.hb.prototype={}
P.hc.prototype={}
P.hj.prototype={}
P.hk.prototype={}
P.hx.prototype={}
P.hy.prototype={}
P.hG.prototype={}
P.hH.prototype={}
P.i2.prototype={
gl:function(a){return a.length}}
P.eo.prototype={
h:function(a,b){return P.br(a.get(b))},
H:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.br(s.value[1]))}},
ga8:function(a){var s=H.b([],t.s)
this.H(a,new P.i3(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Not supported"))},
$iH:1}
P.i3.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
P.ep.prototype={
gl:function(a){return a.length}}
P.bb.prototype={}
P.f0.prototype={
gl:function(a){return a.length}}
P.fT.prototype={}
P.c9.prototype={
ix:function(a,b,c,d,e,f,g){var s
if(t.x.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.qv(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bQ("Incorrect number or type of arguments"))},
$ic9:1}
P.fh.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.P(b,a,null,null,null))
s=P.br(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
K:function(a,b){return this.h(a,b)},
$in:1,
$ih:1,
$ip:1}
P.ht.prototype={}
P.hu.prototype={}
K.aS.prototype={
aT:function(a,b){return!0},
i:function(a){return"all"},
$ib_:1}
K.cT.prototype={
aT:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aT(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$ib_:1}
K.ae.prototype={
aT:function(a,b){return!this.eF(0,b)},
i:function(a){return"!["+this.bZ(0)+"]"}}
K.f8.prototype={
aT:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.av(this.a),r=H.av(this.b)
return s+".."+r},
$ib_:1}
K.v.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.Y(t.fX)
for(r=new H.bh(a,a.gl(a)),q=H.W(r).c;r.w();)s.m(0,q.a(r.d),!0)
p=P.iK(s.ga8(s),!0,t.S)
C.b.eE(p)
this.a=p},
aT:function(a,b){return C.b.C(this.a,b)},
i:function(a){return P.fn(this.a,0,null)},
$ib_:1}
L.fi.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.du(this.a.k(0,b),H.b([],t.z))
s.push(p)
return p},
hX:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aT(0,a))return p}return null},
i:function(a){return this.b},
dF:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.C(0,s==null?null:s.b))l+=" (consume)"
s=m.d
if(s==null)s=null
else{s=s.c
s=s.ga8(s)}s=J.aB(s==null?H.b([],t.s):s)
for(;s.w();){r=s.gB(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.C(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.q)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bZ(0))}return l.charCodeAt(0)==0?l:l}}
L.fv.prototype={
i:function(a){var s=H.m2(this.b,"\n","\\n"),r=H.m2(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fw.prototype={
aV:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.q)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.jx.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.fi(this,b,H.b([],t.ab))
s.m(0,b,r)}return r},
P:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fw(a,P.U(s,s))
r.m(0,a,q)}return q},
d3:function(a){return this.iC(a)},
iC:function(a){var s=this
return P.pU(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$d3(a3,a4){if(a3===1){o=a4
q=p}while(true)switch(q){case 0:c=s.d
b=t.t
a0=H.b([],b)
a1=H.b([],b)
a2=H.b([],b)
n=H.W(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a2.length!==0)h=C.b.cZ(a2,0)
else{if(!r.w()){q=3
break}h=n.a(r.d)}a1.push(h);++k
g=c==null
f=g?null:c.hX(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.fn(a1,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.y(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a1.fixed$length)H.i(P.B("removeRange"))
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
if(g!=null){e=P.fn(a0,0,null)
g=c.d
if(g==null)l=null
else{d=g.c.h(0,e)
g=new L.fv(d==null?g.b:d,e,k)
l=g}i=a1.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.C(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.p2()
case 1:return P.p3(o)}}},t.bJ)},
i:function(a){var s,r=new P.a_(""),q=this.d
if(q!=null)r.a=""+(q.dF()+"\n")
for(q=this.a,q=q.giD(q),q=q.gS(q);q.w();){s=q.gB(q)
if(s!=this.d)r.a+=H.y(s==null?null:s.dF())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.du.prototype={
i:function(a){return this.b.b+": "+this.bZ(0)}}
O.ad.prototype={
d8:function(a,b,c){this.b=b
this.c=a},
bg:function(a,b){return this.d8(a,null,b)},
dv:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
de:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var s=this.a
return new J.ag(s,s.length)},
K:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.W(q).L("x<ad.T>")
if(q.dv(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.de(r,H.b([b],p))}},
ac:function(a,b){var s,r
if(this.dv(b)){s=this.a
r=s.length
C.b.ac(s,b)
this.de(r,b)}},
$ih:1}
O.da.prototype={
gl:function(a){return this.a.length},
gt:function(){var s=this.b
return s==null?this.b=D.J():s},
b1:function(){var s=this.b
return s==null?null:s.D(null)},
ga9:function(a){var s=this.a
if(s.length>0)return C.b.gaH(s)
else return V.an()},
bS:function(a){this.a.push(a)
this.b1()},
aU:function(){var s=this.a
if(s.length>0){s.pop()
this.b1()}}}
E.i6.prototype={}
E.bA.prototype={
sag:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().M(0,s.geo())
if(b!=null)b.gt().n(0,s.geo())
s.bP(new D.F("shape",r,b))}},
aC:function(a,b){var s,r
for(s=this.y.a,s=new J.ag(s,s.length),r=H.W(s).c;s.w();)r.a(s.d).aC(0,b)},
aq:function(a){var s,r,q,p=this,o=a.dx
o.a.push(o.ga9(o))
o.b1()
a.cW(p.f)
s=C.b.gaH(a.dy)
if(p.d!=null)if(s!=null)s.es(a,p)
for(r=p.y.a,r=new J.ag(r,r.length),q=H.W(r).c;r.w();)q.a(r.d).aq(a)
a.cV()
o.aU()},
bP:function(a){var s=this.z
return s==null?null:s.D(a)},
aa:function(){return this.bP(null)},
ep:function(a){this.e=null
this.bP(a)},
ig:function(){return this.ep(null)},
en:function(a){return this.bP(a)},
ib:function(){return this.en(null)},
ia:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gem(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bX()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.aa()},
ie:function(a,b){var s,r
for(s=b.gS(b),r=this.gem();s.w();)s.gB(s).gt().M(0,r)
this.aa()},
i:function(a){return"Unnamed entity"}}
E.bT.prototype={
i:function(a){return this.b}}
E.c7.prototype={
i:function(a){return this.b}}
E.h2.prototype={}
E.jc.prototype={
eN:function(a,b){var s=this
s.cy.gt().n(0,new E.jd(s))
s.db.gt().n(0,new E.je(s))
s.dx.gt().n(0,new E.jf(s))},
gio:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga9(q).N(0,s.ga9(s))
q=s}return q},
cW:function(a){var s=this.dy
return s.push(a==null?C.b.gaH(s):a)},
cV:function(){var s=this.dy
if(s.length>1)s.pop()},
dN:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.f("May not cache a shader with no name."))
s=this.fr
if(s.cz(0,r))throw H.c(P.f('Shader cache already contains a shader by the name "'+r+'".'))
s.m(0,r,a)}}
E.jd.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:2}
E.je.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:2}
E.jf.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:2}
E.fu.prototype={
dh:function(a){this.ev()},
dg:function(){return this.dh(null)},
gi2:function(){var s,r=this,q=Date.now(),p=C.c.ab(P.me(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.Z(q,!1)
return s/p},
dA:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.cM(r*o)
r=s.clientHeight
r.toString
p=C.d.cM(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.mC(C.m,this.git())}},
ev:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.E.fb(s)
r=W.nd(new E.ju(this),t.H)
r.toString
C.E.hi(s,r)}},
ir:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.dA()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.Z(p,!1)
q.y=P.me(p-q.r.a).a*0.000001
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
m.aq(q)}q=n.Q
if(q!=null)q.D(null)}catch(o){s=H.ak(o)
r=H.lY(o)
P.m1("Error: "+H.y(s))
P.m1("Stack: "+H.y(r))
throw H.c(s)}}}
E.ju.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ir()}},
$S:32}
Z.fO.prototype={}
Z.bU.prototype={
a2:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ak(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.y(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.fP.prototype={}
Z.bV.prototype={
aR:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
a2:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].a2(a)}},
aX:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
aq:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
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
Z.bK.prototype={
gda:function(a){var s=this.a,r=(s&$.aQ().a)!==0?3:0
if((s&$.bu().a)!==0)r+=3
if((s&$.bt().a)!==0)r+=3
if((s&$.bO().a)!==0)r+=2
if((s&$.bP().a)!==0)r+=3
if((s&$.eh().a)!==0)r+=3
if((s&$.ei().a)!==0)r+=4
if((s&$.cA().a)!==0)++r
return(s&$.bs().a)!==0?r+4:r},
hG:function(a){var s,r=$.aQ(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bu()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bt()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bO()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.eh()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ei()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cA()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bs()
if((q&r.a)!==0)if(s===a)return r
return $.nQ()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bK))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.aQ().a)!==0)s.push("Pos")
if((r&$.bu().a)!==0)s.push("Norm")
if((r&$.bt().a)!==0)s.push("Binm")
if((r&$.bO().a)!==0)s.push("Txt2D")
if((r&$.bP().a)!==0)s.push("TxtCube")
if((r&$.eh().a)!==0)s.push("Clr3")
if((r&$.ei().a)!==0)s.push("Clr4")
if((r&$.cA().a)!==0)s.push("Weight")
if((r&$.bs().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.i8.prototype={}
D.bX.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
M:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.C(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.M(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.C(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.M(p,b)
s=p===!0||s}return s},
D:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.T():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.H(P.iK(p,!0,t.h2),new D.it(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.H(r,new D.iu(s))}return!0},
hT:function(){return this.D(null)},
aJ:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.D(s)}}}}
D.it.prototype={
$1:function(a){a.$1(this.a)},
$S:29}
D.iu.prototype={
$1:function(a){a.$1(this.a)},
$S:29}
D.T.prototype={}
D.aV.prototype={}
D.aW.prototype={}
D.F.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.y(this.d)+" => "+H.y(this.e)}}
X.cD.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cD))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.eJ.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eJ))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.iG.prototype={}
X.d2.prototype={}
X.iM.prototype={
bl:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.V(o.a+b.a,o.b+b.b)
o=q.a.gb9()
s=$.a9
if(s==null)s=$.a9=new V.V(0,0)
r=q.x
q.z=new P.Z(p,!1)
q.x=n
return new X.c4(a,s,r,o,n)},
cU:function(a,b){this.r=a.a
return!1},
bw:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bv:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.bl(a,b))
return!0},
ik:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gb9()
r=this.x
Date.now()
q.D(new X.c5(new V.a5(a.a,a.b),s,r))
return!0},
fO:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.D(new X.d2(c,q.a.gb9(),b))
q.y=new P.Z(s,!1)
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
X.j4.prototype={
c6:function(a,b,c){var s=this,r=new P.Z(Date.now(),!1),q=s.a.gb9(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.c4(a,p,o,q,b)},
cU:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.D(this.c6(a,b,!0))
return!0},
bw:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.D(r.c6(a,b,!0))
return!0},
bv:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.c6(a,b,!1))
return!0},
il:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gb9()
Date.now()
r.D(new X.c5(new V.a5(a.a,a.b),s,b))
return!0},
ge_:function(){var s=this.b
return s==null?this.b=D.J():s},
gd4:function(){var s=this.c
return s==null?this.c=D.J():s},
gel:function(){var s=this.d
return s==null?this.d=D.J():s}}
X.c5.prototype={}
X.f7.prototype={}
X.dt.prototype={}
X.jz.prototype={
bl:function(a,b){var s,r,q,p,o=this,n=new P.Z(Date.now(),!1)
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
return new X.dt(q,p,r,s)},
ij:function(a){var s=this.b
if(s==null)return!1
s.D(this.bl(a,!0))
return!0},
ih:function(a){var s=this.c
if(s==null)return!1
s.D(this.bl(a,!0))
return!0},
ii:function(a){var s=this.d
if(s==null)return!1
s.D(this.bl(a,!1))
return!0}}
X.fL.prototype={
gbb:function(a){var s=this.b
return s==null?this.b=new X.iG(new X.a8(!1,!1,!1),P.d_(t.S)):s},
gaf:function(){var s,r=this.c
if(r==null){r=$.a9
if(r==null){r=$.a9=new V.V(0,0)
s=r}else s=r
r=this.c=new X.j4(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
gaw:function(){var s=this.d
if(s==null){s=$.a9
if(s==null)s=$.a9=new V.V(0,0)
s=this.d=new X.iM(this,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return s},
gbd:function(){var s,r=this.e
if(r==null){r=$.a9
if(r==null){r=$.a9=new V.V(0,0)
s=r}else s=r
r=this.e=new X.jz(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
gb9:function(){var s=this.a
return V.mv(0,0,C.i.gdX(s).c,C.i.gdX(s).d)},
dm:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eJ(p,new X.a8(s,r,q))},
b6:function(a){var s,r,q=this.gbb(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a8(p,s,r)},
cn:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gbb(this)
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
bn:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a5(r,s)},
ci:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.aB(n)
m=o.pageY
m.toString
C.d.aB(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.aB(l)
l=o.pageY
l.toString
l=C.d.aB(l)
k=j.top
k.toString
s.push(new V.V(n-m,l-k))}return s},
aL:function(a){var s,r,q,p
if(a==null)return new X.cD(0,new X.a8(!1,!1,!1))
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
return new X.cD(s,new X.a8(r,q,p))},
c7:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
fI:function(a){return this.f=!0},
fu:function(a){return this.f=!1},
fC:function(a){if(this.f&&this.c7(a))a.preventDefault()},
fM:function(a){var s,r,q=this
if(!q.f)return
s=q.dm(a)
r=q.gbb(q)
r.c=s.b
r.d.n(0,s.a)},
fK:function(a){var s,r,q=this
if(!q.f)return
s=q.dm(a)
r=q.gbb(q)
r.c=s.b
r.d.M(0,s.a)},
fQ:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.b6(a)
if(p.x){s=p.aL(a)
r=p.bn(a)
if(p.gaw().cU(s,r))a.preventDefault()
return}s=p.aL(a)
q=p.aO(a)
if(p.gaf().cU(s,q))a.preventDefault()},
fU:function(a){var s,r,q,p=this
p.b6(a)
s=p.aL(a)
if(p.x){r=p.bn(a)
if(p.gaw().bw(s,r))a.preventDefault()
return}q=p.aO(a)
if(p.gaf().bw(s,q))a.preventDefault()},
fG:function(a){var s,r,q,p=this
if(!p.c7(a)){p.b6(a)
s=p.aL(a)
if(p.x){r=p.bn(a)
if(p.gaw().bw(s,r))a.preventDefault()
return}q=p.aO(a)
if(p.gaf().bw(s,q))a.preventDefault()}},
fS:function(a){var s,r,q,p=this
p.b6(a)
s=p.aL(a)
if(p.x){r=p.bn(a)
if(p.gaw().bv(s,r))a.preventDefault()
return}q=p.aO(a)
if(p.gaf().bv(s,q))a.preventDefault()},
fE:function(a){var s,r,q,p=this
if(!p.c7(a)){p.b6(a)
s=p.aL(a)
if(p.x){r=p.bn(a)
if(p.gaw().bv(s,r))a.preventDefault()
return}q=p.aO(a)
if(p.gaf().bv(s,q))a.preventDefault()}},
fW:function(a){var s,r,q=this
q.b6(a)
s=new V.a5(C.D.ghR(a),C.D.ghS(a)).N(0,q.Q)
if(q.x){if(q.gaw().ik(s))a.preventDefault()
return}r=q.aO(a)
if(q.gaf().il(s,r))a.preventDefault()},
fY:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aL(q.y)
r=q.aO(q.y)
q.gaw().fO(s,r,p)}},
hd:function(a){var s,r=this
r.a.focus()
r.f=!0
r.cn(a)
s=r.ci(a)
if(r.gbd().ij(s))a.preventDefault()},
h9:function(a){var s
this.cn(a)
s=this.ci(a)
if(this.gbd().ih(s))a.preventDefault()},
hb:function(a){var s
this.cn(a)
s=this.ci(a)
if(this.gbd().ii(s))a.preventDefault()}}
D.bW.prototype={
aK:function(a){var s=this.r
return s==null?null:s.D(a)},
eR:function(){return this.aK(null)},
$iat:1}
D.cY.prototype={
gt:function(){var s=this.y
return s==null?this.y=D.J():s},
gej:function(){var s=this.z
return s==null?this.z=D.J():s},
aK:function(a){var s=this.y
return s==null?null:s.D(a)},
du:function(a){var s=this.z
return s==null?null:s.D(a)},
fN:function(){return this.du(null)},
h_:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.eP(a[r]))return!1
return!0},
fn:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gdt(),q=this.f,p=t.a,o=0;o<b.length;b.length===s||(0,H.q)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.bX()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.aK(new D.aV())},
h3:function(a,b){var s,r,q,p
for(s=b.gS(b),r=this.gdt(),q=this.e;s.w();){p=s.gB(s)
C.b.M(q,p)
p.gt().M(0,r)}this.aK(new D.aW())},
eP:function(a){var s=C.b.C(this.f,a)
return s}}
V.t.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.t))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.aF.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aF))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.E(s.a,3,0)+", "+V.E(s.b,3,0)+", "+V.E(s.c,3,0)+", "+V.E(s.d,3,0)+"]"},
A:function(){var s=this
return"["+V.E(s.a,3,0)+", "+V.E(s.b,3,0)+", "+V.E(s.c,3,0)+", "+V.E(s.d,3,0)+"]"}}
V.ir.prototype={}
V.d9.prototype={
al:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cy(H.b([o.a,o.d,o.r],n),3,0),l=V.cy(H.b([o.b,o.e,o.x],n),3,0),k=V.cy(H.b([o.c,o.f,o.y],n),3,0)
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
al:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
cO:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.G().toString
if(Math.abs(b3-0)<1e-9)return V.an()
s=1/b3
r=-l
q=-a2
return V.b0((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
N:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.b0(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bU:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.C(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bA:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.L(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
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
J:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cy(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cy(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cy(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cy(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
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
A:function(){return this.J("")}}
V.V.prototype={
ar:function(a){return new V.a5(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"},
A:function(){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.L.prototype={
X:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
b_:function(a,b){return new V.L(this.a-b.a,this.b-b.b,this.c-b.c)},
N:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.L))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"},
A:function(){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
V.au.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.au))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.E(s.a,3,0)+", "+V.E(s.b,3,0)+", "+V.E(s.c,3,0)+", "+V.E(s.d,3,0)+"]"},
A:function(){var s=this
return"["+V.E(s.a,3,0)+", "+V.E(s.b,3,0)+", "+V.E(s.c,3,0)+", "+V.E(s.d,3,0)+"]"}}
V.fa.prototype={
gaI:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.fa))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.E(s.a,3,0)+", "+V.E(s.b,3,0)+", "+V.E(s.c,3,0)+", "+V.E(s.d,3,0)+"]"}}
V.a5.prototype={
cP:function(a){return Math.sqrt(this.ad(this))},
ad:function(a){return this.a*a.a+this.b*a.b},
N:function(a,b){return new V.a5(this.a*b,this.b*b)},
as:function(a,b){var s
$.G().toString
if(Math.abs(b-0)<1e-9){s=$.bJ
return s==null?$.bJ=new V.a5(0,0):s}return new V.a5(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+"]"}}
V.C.prototype={
cP:function(a){return Math.sqrt(this.ad(this))},
ad:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cQ:function(a,b){return new V.C(V.hX(this.a,a.a,b),V.hX(this.b,a.b,b),V.hX(this.c,a.c,b))},
E:function(){var s=this,r=Math.sqrt(s.ad(s))
if(r===1)return s
return s.as(0,r)},
aP:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.C(s*r-q*p,q*o-n*r,n*p-s*o)},
X:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
bf:function(a){return new V.C(-this.a,-this.b,-this.c)},
N:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
as:function(a,b){$.G().toString
if(Math.abs(b-0)<1e-9)return V.dI()
return new V.C(this.a/b,this.b/b,this.c/b)},
ei:function(){$.G().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.C))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"},
A:function(){return"["+V.E(this.a,3,0)+", "+V.E(this.b,3,0)+", "+V.E(this.c,3,0)+"]"}}
U.ia.prototype={
c_:function(a){var s=V.qT(a,this.c,this.b)
return s},
gt:function(){var s=this.y
return s==null?this.y=D.J():s},
T:function(a){var s=this.y
return s==null?null:s.D(a)},
sd5:function(a,b){},
scR:function(a){var s,r=this,q=r.b
$.G().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.c_(s)}r.T(new D.F("maximumLocation",q,r.b))}},
scT:function(a){var s,r=this,q=r.c
$.G().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.c_(s)}r.T(new D.F("minimumLocation",q,r.c))}},
sa3:function(a,b){var s,r=this
b=r.c_(b)
s=r.d
$.G().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.T(new D.F("location",s,b))}},
scS:function(a){var s,r,q=this,p=q.e
$.G().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.T(new D.F("maximumVelocity",p,a))}},
sa5:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.G().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.T(new D.F("velocity",r,a))}},
scC:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.G().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.T(new D.F("dampening",s,a))}},
aC:function(a,b){var s,r,q,p=this,o=p.f
$.G().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa3(0,p.d+s*b)
o=p.x
$.G().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa5(s)}}}
U.cG.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.J():s},
be:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cG))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.bZ.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.J():s},
T:function(a){var s=this.e
return s==null?null:s.D(a)},
aj:function(){return this.T(null)},
fl:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gb2(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gt()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.T(new D.aV())},
h1:function(a,b){var s,r
for(s=b.gS(b),r=this.gb2();s.w();)s.gB(s).gt().M(0,r)
this.T(new D.aW())},
be:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ag(o,o.length),n=H.W(o).c,s=null;o.w();){r=n.a(o.d)
if(r!=null){q=r.be(0,b,c)
s=s==null?q:q.N(0,s)}}p.f=s==null?V.an():s
o=p.e
if(o!=null)o.aJ(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bZ))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.X(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia0:1}
U.a0.prototype={}
U.dF.prototype={
gt:function(){var s=this.cy
return s==null?this.cy=D.J():s},
T:function(a){var s=this.cy
return s==null?null:s.D(a)},
aj:function(){return this.T(null)},
bp:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.gaf().ge_().n(0,s.gc8())
a.gaf().gel().n(0,s.gca())
a.gaf().gd4().n(0,s.gcc())
return!0},
c9:function(a){var s=this,r=s.c,q=s.a
if(!r.q(0,q==null?null:q.gbb(q).c))return
s.x=s.y=!0
s.z=s.b.d},
cb:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.ar(a.d)
if(s.ad(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sa3(0,-a.y.ar(r).N(0,2).as(0,s.gaI()).a*2.5+p.z)
q.sa5(0)
p.Q=a.z.ar(r).N(0,2).as(0,s.gaI())
p.aj()},
cd:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.ad(s)>0.0001){r.b.sa5(r.Q.a*10*2.5)
r.aj()}},
be:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.aC(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.b0(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$ia0:1}
U.dG.prototype={
gt:function(){var s=this.fx
return s==null?this.fx=D.J():s},
T:function(a){var s=this.fx
return s==null?null:s.D(a)},
aj:function(){return this.T(null)},
bp:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.gaf().ge_().n(0,q.gc8())
a.gaf().gel().n(0,q.gca())
a.gaf().gd4().n(0,q.gcc())
s=a.gaw()
r=s.f
s=r==null?s.f=D.J():r
s.n(0,q.gfd())
s=a.gaw()
r=s.d
s=r==null?s.d=D.J():r
s.n(0,q.gff())
s=a.gbd()
r=s.b
s=r==null?s.b=D.J():r
s.n(0,q.ghx())
s=a.gbd()
r=s.d
s=r==null?s.d=D.J():r
s.n(0,q.ghv())
s=a.gbd()
r=s.c
s=r==null?s.c=D.J():r
s.n(0,q.ght())
return!0},
b4:function(a){return new V.a5(a.a,a.b)},
c9:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
cb:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ar(a.d)
if(s.ad(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.b4(a.y.ar(r).N(0,2).as(0,s.gaI()))
p=n.c
p.sa3(0,-q.a*2.5+n.cy)
o=n.b
o.sa3(0,-q.b*2.5+n.db)
o.sa5(0)
p.sa5(0)
n.dx=n.b4(a.z.ar(r).N(0,2).as(0,s.gaI()))
n.aj()},
cd:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ad(s)>0.0001){r.c.sa5(-r.dx.a*10*2.5)
r.b.sa5(-r.dx.b*10*2.5)
r.aj()}},
fe:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
fg:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.b4(a.y.ar(r).N(0,2).as(0,s.gaI()))
p=n.c
p.sa3(0,-q.a*2.5+n.cy)
o=n.b
o.sa3(0,-q.b*2.5+n.db)
o.sa5(0)
p.sa5(0)
n.dx=n.b4(a.z.ar(r).N(0,2).as(0,s.gaI()))
n.aj()},
hy:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hw:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ar(a.d)
if(s.ad(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.b4(a.y.ar(r).N(0,2).as(0,s.gaI()))
p=n.c
p.sa3(0,-q.a*2.5+n.cy)
o=n.b
o.sa3(0,-q.b*2.5+n.db)
o.sa5(0)
p.sa5(0)
n.dx=n.b4(a.z.ar(r).N(0,2).as(0,s.gaI()))
n.aj()},
hu:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ad(s)>0.0001){r.c.sa5(-r.dx.a*10*2.5)
r.b.sa5(-r.dx.b*10*2.5)
r.aj()}},
be:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.aC(0,s)
n=p.b
n.aC(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.b0(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.N(0,V.b0(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia0:1}
U.dH.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.J():s},
T:function(a){var s=this.r
return s==null?null:s.D(a)},
bp:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gaf()
r=s.e
s=r==null?s.e=D.J():r
r=this.gfi()
s.n(0,r)
s=a.gaw()
q=s.e;(q==null?s.e=D.J():q).n(0,r)
return!0},
fj:function(a){var s=this,r=s.b,q=s.a
if(!r.q(0,q==null?null:q.gbb(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.T(new D.F("zoom",r,q))}},
be:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.b0(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$ia0:1}
M.cF.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.J():s},
a_:function(a){var s=this.r
return s==null?null:s.D(a)},
bj:function(){return this.a_(null)},
h5:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gZ(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p].gt()
n=o.a;(n==null?o.a=H.b([],q):n).push(r)}this.a_(new D.aV())},
h7:function(a,b){var s,r
for(s=b.gS(b),r=this.gZ();s.w();)s.gB(s).gt().M(0,r)
this.a_(new D.aW())},
aq:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.ag(s,s.length),r=H.W(s).c;s.w();)r.a(s.d).aq(a)
q.f=!1},
$iaL:1}
M.cJ.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.J():s},
a_:function(a){var s=this.r
return s==null?null:s.D(a)},
bj:function(){return this.a_(null)},
sbq:function(a){var s,r,q=this
if(a==null)a=new X.iC()
s=q.b
if(s!==a){if(s!=null)s.gt().M(0,q.gZ())
r=q.b
q.b=a
a.gt().n(0,q.gZ())
q.a_(new D.F("camera",r,q.b))}},
sby:function(a,b){var s,r,q=this
if(b==null)b=X.lr(null)
s=q.c
if(s!==b){if(s!=null)s.gt().M(0,q.gZ())
r=q.c
q.c=b
b.gt().n(0,q.gZ())
q.a_(new D.F("target",r,q.c))}},
sbz:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().M(0,r.gZ())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.gZ())
r.a_(new D.F("technique",s,r.d))}},
aq:function(a){var s,r=this
a.cW(r.d)
s=r.c
if(s!=null)s.a2(a)
s=r.b
if(s!=null)s.a2(a)
s=r.e
s.aC(0,a)
s.aq(a)
s=r.b
if(s!=null)s.aX(a)
a.cV()},
$iaL:1}
M.cP.prototype={
a_:function(a){var s=this.y
return s==null?null:s.D(a)},
bj:function(){return this.a_(null)},
fw:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gZ(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bX()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.a_(new D.aV())},
fA:function(a,b){var s,r
for(s=b.gS(b),r=this.gZ();s.w();)s.gB(s).gt().M(0,r)
this.a_(new D.aW())},
sbq:function(a){var s,r,q=this
if(a==null)a=X.mo(null)
s=q.b
if(s!==a){if(s!=null)s.gt().M(0,q.gZ())
r=q.b
q.b=a
a.gt().n(0,q.gZ())
q.a_(new D.F("camera",r,q.b))}},
sby:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gt().M(0,r.gZ())
s=r.c
r.c=b
b.gt().n(0,r.gZ())
r.a_(new D.F("target",s,r.c))}},
sbz:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().M(0,r.gZ())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.gZ())
r.a_(new D.F("technique",s,r.d))}},
gt:function(){var s=this.y
return s==null?this.y=D.J():s},
aq:function(a){var s,r,q,p=this
a.cW(p.d)
s=p.c
if(s!=null)s.a2(a)
s=p.b
if(s!=null)s.a2(a)
s=p.d
if(s!=null)s.aC(0,a)
for(s=p.e.a,r=new J.ag(s,s.length),q=H.W(r).c;r.w();)q.a(r.d).aC(0,a)
for(s=new J.ag(s,s.length),r=H.W(s).c;s.w();)r.a(s.d).aq(a)
if(p.b!=null){a.cy.aU()
a.db.aU()}a.cV()},
$iaL:1}
A.en.prototype={}
A.i1.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hU:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dZ:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.al.prototype={
gaD:function(a){var s=this.a?1:0
return s|0},
i:function(a){var s=this.a?1:0
return""+(s|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.al))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.d7.prototype={
eM:function(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6=u.C,c7="Required uniform value, ",c8=", was not defined or used in shader.",c9=c4.x,d0=new P.a_(""),d1=c9.fr
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
A.q8(c9,d0)
A.qa(c9,d0)
A.q9(c9,d0)
A.qc(c9,d0)
A.qd(c9,d0)
A.qb(c9,d0)
A.qe(c9,d0)
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
c4.ef(0,s.charCodeAt(0)==0?s:s,A.q7(c9))
c4.y=c4.gak(c4).h(0,"posAttr")
c4.Q=c4.gak(c4).h(0,"normAttr")
c4.z=c4.gak(c4).h(0,"binmAttr")
c4.ch=c4.gak(c4).h(0,"txt2DAttr")
c4.cx=c4.gak(c4).h(0,"txtCubeAttr")
c4.cy=c4.gak(c4).h(0,"bendAttr")
if(c9.dy)c4.fy=t.j.a(c4.gR().V(0,"invViewMat"))
if(d1)c4.db=t.j.a(c4.gR().V(0,"objMat"))
if(r)c4.dx=t.j.a(c4.gR().V(0,"viewObjMat"))
d1=t.j
c4.fr=d1.a(c4.gR().V(0,"projViewObjMat"))
if(c9.go)c4.dy=d1.a(c4.gR().V(0,"viewMat"))
if(c9.x1)c4.go=t.bK.a(c4.gR().V(0,"txt2DMat"))
if(c9.x2)c4.id=d1.a(c4.gR().V(0,"txtCubeMat"))
if(c9.y1)c4.k1=d1.a(c4.gR().V(0,"colorMat"))
c4.k3=H.b([],t.p)
s=c9.ba
if(s>0){c4.k2=t.w.a(c4.gR().V(0,"bendMatCount"))
for(n=0;n<s;++n){r=c4.k3
m=c4.r
if(m==null)H.i(P.f(c6))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.i(P.f(c7+q+c8))
r.push(d1.a(l))}}if(c9.a.a)c4.k4=t.g.a(c4.gR().V(0,"emissionClr"))
if(c9.b.a)c4.rx=t.g.a(c4.gR().V(0,"ambientClr"))
if(c9.c.a)c4.x2=t.g.a(c4.gR().V(0,"diffuseClr"))
if(c9.d.a)c4.ba=t.g.a(c4.gR().V(0,"invDiffuseClr"))
d1=c9.e.a
if(!d1)s=!1
else s=!0
if(s){c4.e3=t.v.a(c4.gR().V(0,"shininess"))
if(d1)c4.e2=t.g.a(c4.gR().V(0,"specularClr"))}if(c9.db){c4.e4=t.l.a(c4.gR().V(0,"envSampler"))
if(c9.r.a)c4.e5=t.g.a(c4.gR().V(0,"reflectClr"))
d1=c9.x.a
if(!d1)s=!1
else s=!0
if(s){c4.e6=t.v.a(c4.gR().V(0,"refraction"))
if(d1)c4.e7=t.g.a(c4.gR().V(0,"refractClr"))}}if(c9.y.a)c4.e8=t.v.a(c4.gR().V(0,"alpha"))
if(c9.k1){d1=c9.z
s=d1.length
if(s!==0){r=t.S
c4.cD=P.U(r,t.W)
c4.cE=P.U(r,t.O)
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
a4=a3}g.push(new A.dy(l,c,b,a4,a3,a2))}c4.cE.m(0,i,g)
f=c4.cD
m=c4.r
if(m==null)H.i(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.i(P.f(c7+e+c8))
f.m(0,i,r.a(l))}}d1=c9.Q
s=d1.length
if(s!==0){r=t.S
c4.cF=P.U(r,t.W)
c4.cG=P.U(r,t.d)
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
g.push(new A.dz(a7,a6,a5,l,c,a8))}c4.cG.m(0,i,g)
f=c4.cF
m=c4.r
if(m==null)H.i(P.f(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.i(P.f(c7+e+c8))
f.m(0,i,r.a(l))}}d1=c9.ch
s=d1.length
if(s!==0){r=t.S
c4.cH=P.U(r,t.W)
c4.cI=P.U(r,t.r)
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
a4=a3}g.push(new A.dB(l,c,b5,b,a8,b6,b7,a4,a3,a2))}c4.cI.m(0,i,g)
a9=c4.cH
m=c4.r
if(m==null)H.i(P.f(c6))
b0=h+"Count"
l=m.h(0,b0)
if(l==null)H.i(P.f(c7+b0+c8))
a9.m(0,i,r.a(l))}}c9=c9.cx
d1=c9.length
if(d1!==0){s=t.S
c4.cJ=P.U(s,t.W)
c4.cK=P.U(s,t.R)
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
g.push(new A.dE(l,c,b,a,a7,a6,c1,c0,b7,c3,c2,a4,a3,a2,a8,b6))}c4.cK.m(0,i,g)
e=c4.cJ
m=c4.r
if(m==null)H.i(P.f(c6))
d=h+"Count"
l=m.h(0,d)
if(l==null)H.i(P.f(c7+d+c8))
e.m(0,i,s.a(l))}}}},
hn:function(a,b){if(b!=null&&b.d>=6)if(a!=null)a.d9(b)}}
A.ba.prototype={
i:function(a){return"barLight"+this.a}}
A.bc.prototype={
i:function(a){return"dirLight"+this.a}}
A.bj.prototype={
i:function(a){return"pointLight"+this.a}}
A.bl.prototype={
i:function(a){return"spotLight"+this.a}}
A.iQ.prototype={
i:function(a){return this.bK}}
A.dy.prototype={}
A.dz.prototype={}
A.dB.prototype={}
A.dE.prototype={}
A.cb.prototype={
ef:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.dn(b,35633)
r=n.dn(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaM(),s)
q.attachShader(n.gaM(),r)
q.linkProgram(n.gaM())
if(!H.n6(q.getProgramParameter(n.gaM(),35714))){o=q.getProgramInfoLog(n.gaM())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.i(P.f("Failed to link shader: "+o))}n.hp()
n.hr()},
gak:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gR:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaM:function(){var s=this.e
if(s==null)throw H.c(P.f(u.F))
return s},
a2:function(a){a.a.useProgram(this.e)
this.gak(this).hU()},
dn:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.n6(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.y(q)+'": '+s))}return q},
hp:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.ku(l.getProgramParameter(o.gaM(),35721))
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
m.push(new A.en(l,q,p))}o.f=new A.i1(m)},
hr:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.ku(j.getProgramParameter(m.gaM(),35718))
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
k.push(m.hP(o,n,q,p))}m.r=new A.jE(k)},
b3:function(a,b,c){var s=this.a
if(a===1)return new A.ch(s,b,c)
else return A.lC(s,this.e,b,a,c)},
f8:function(a,b,c){var s=this.a
if(a===1)return new A.dC(s,b,c)
else return A.lC(s,this.e,b,a,c)},
f9:function(a,b,c){var s=this.a
if(a===1)return new A.dD(s,b,c)
else return A.lC(s,this.e,b,a,c)},
bG:function(a,b){return new P.h4(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hP:function(a,b,c,d){var s=this
switch(a){case 5120:return s.b3(b,c,d)
case 5121:return s.b3(b,c,d)
case 5122:return s.b3(b,c,d)
case 5123:return s.b3(b,c,d)
case 5124:return s.b3(b,c,d)
case 5125:return s.b3(b,c,d)
case 5126:return new A.dv(s.a,c,d)
case 35664:return new A.fB(s.a,c,d)
case 35665:return new A.dw(s.a,c,d)
case 35666:return new A.dx(s.a,c,d)
case 35667:return new A.fC(s.a,c,d)
case 35668:return new A.fD(s.a,c,d)
case 35669:return new A.fE(s.a,c,d)
case 35674:return new A.fF(s.a,c,d)
case 35675:return new A.dA(s.a,c,d)
case 35676:return new A.ci(s.a,c,d)
case 35678:return s.f8(b,c,d)
case 35680:return s.f9(b,c,d)
case 35670:throw H.c(s.bG("BOOL",c))
case 35671:throw H.c(s.bG("BOOL_VEC2",c))
case 35672:throw H.c(s.bG("BOOL_VEC3",c))
case 35673:throw H.c(s.bG("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.dp.prototype={}
A.a2.prototype={}
A.jE.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
V:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.A()},
A:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.ch.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fC.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fD.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fE.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fA.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.dv.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.fB.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dw.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dx.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.fF.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dA.prototype={
at:function(a){var s=new Float32Array(H.ct(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.ci.prototype={
at:function(a){var s=new Float32Array(H.ct(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dC.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.dD.prototype={
d9:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.ks.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cQ(q.b,b).cQ(q.d.cQ(q.c,b),c)
a.sa3(0,new V.L(p.a,p.b,p.c))
a.sex(p.E())
q=1-b
s=1-c
a.sdS(new V.au(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)},
$S:5}
F.kH.prototype={
$2:function(a,b){return V.hX(this.a,this.b,b)},
$S:9}
F.kJ.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hX(-1,1,c),n=this.a.$2(b,c)
q=-q*n
s=p*n
a.sa3(0,new V.L(q,s,o))
a.sex(new V.C(q,s,o).E())
a.sdS(new V.au(1-c,2+c,-1,-1))},
$S:5}
F.kK.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:16}
F.kL.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:16}
F.lj.prototype={
$2:function(a,b){return 0},
$S:9}
F.li.prototype={
$3:function(a,b,c){var s,r=this.b.$2(b,c)
if(typeof r!=="number")return H.no(r)
s=a.f
r=(s!=null?new V.C(s.a,s.b,s.c):V.lE()).E().N(0,this.a+r)
a.sa3(0,new V.L(r.a,r.b,r.c))},
$S:5}
F.lk.prototype={
$1:function(a){return new V.L(Math.cos(a),Math.sin(a),0)},
$S:25}
F.kU.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.L(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)},
$S:25}
F.kI.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.m5(l.$1(m),k)
k=J.m5(l.$1(m+3.141592653589793/n.c),k).b_(0,j)
s=new V.C(k.a,k.b,k.c).E()
r=$.mL
if(r==null){r=new V.C(1,0,0)
$.mL=r}q=s.aP(!s.q(0,r)?V.lE():r).E()
r=q.aP(s).E()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.N(0,l*k)
k=q.N(0,o*k)
a.sa3(0,j.X(0,new V.L(l.a-k.a,l.b-k.b,l.c-k.c)))},
$S:5}
F.as.prototype={
b0:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.co(a)
s.cp(b)
s.ho(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gU().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.aa()}},
br:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.M(r.gU().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.aa()}}s.cj()
s.ck()
s.hg()},
co:function(a){this.a=a
a.gU().b.push(this)},
cp:function(a){this.b=a
a.gU().c.push(this)},
ho:function(a){this.c=a
a.gU().d.push(this)},
cj:function(){var s=this.a
if(s!=null)C.b.M(s.gU().b,this)
this.a=null},
ck:function(){var s=this.b
if(s!=null)C.b.M(s.gU().c,this)
this.b=null},
hg:function(){var s=this.c
if(s!=null)C.b.M(s.gU().d,this)
this.c=null},
f1:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.dI()
if(n!=null)q=q.X(0,n)
if(s!=null)q=q.X(0,s)
if(r!=null)q=q.X(0,r)
if(q.ei())return p
return q.E()},
f3:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.b_(0,n)
q=new V.C(o.a,o.b,o.c).E()
o=r.b_(0,n)
return q.aP(new V.C(o.a,o.b,o.c).E()).E()},
cw:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.f1()
if(s==null){s=q.f3()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.aa()}return!0},
f0:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.dI()
if(n!=null)q=q.X(0,n)
if(s!=null)q=q.X(0,s)
if(r!=null)q=q.X(0,r)
if(q.ei())return p
return q.E()},
f2:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.G().toString
if(Math.abs(p-0)<1e-9){j=b.b_(0,e)
o=new V.C(j.a,j.b,j.c).E()
if(q.a-r.a<0)o=o.bf(0)}else{n=(j-s.b)/p
j=b.b_(0,e).N(0,n).X(0,e).b_(0,h)
o=new V.C(j.a,j.b,j.c).E()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.bf(0)}m=l.d
if(m!=null){m=m.E()
o=m.aP(o).E().aP(m).E()}return o},
cu:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.f0()
if(s==null){s=q.f2()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.aa()}return!0},
ghJ:function(a){var s=this
if(J.X(s.a,s.b))return!0
if(J.X(s.b,s.c))return!0
if(J.X(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
J:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gF(p)
p=a+C.a.ay(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gF(o)
p=p+C.a.ay(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gF(o)
s=p+C.a.ay(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.A()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.A()
return s+((p==null?"-":p)+"}")},
A:function(){return this.J("")}}
F.iv.prototype={}
F.jo.prototype={
bt:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gF(q)
s=c.a
if(q==(s==null?r:s.gF(s))){q=b.b
q=q==null?r:q.gF(q)
s=c.b
if(q==(s==null?r:s.gF(s))){q=b.c
q=q==null?r:q.gF(q)
s=c.c
q=q==(s==null?r:s.gF(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gF(q)
s=c.b
if(q==(s==null?r:s.gF(s))){q=b.b
q=q==null?r:q.gF(q)
s=c.c
if(q==(s==null?r:s.gF(s))){q=b.c
q=q==null?r:q.gF(q)
s=c.a
q=q==(s==null?r:s.gF(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gF(q)
s=c.c
if(q==(s==null?r:s.gF(s))){q=b.b
q=q==null?r:q.gF(q)
s=c.a
if(q==(s==null?r:s.gF(s))){q=b.c
q=q==null?r:q.gF(q)
s=c.b
q=q==(s==null?r:s.gF(s))}else q=!1
return q}else return!1}}}}
F.eL.prototype={
eL:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.f("May not create a line with vertices attached to different shapes."))
s.co(a)
s.cp(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gae(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.aa()}},
br:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.M(r.gae(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.aa()}}s.cj()
s.ck()},
co:function(a){this.a=a
a.gae(a).b.push(this)},
cp:function(a){this.b=a
a.gae(a).c.push(this)},
cj:function(){var s=this.a
if(s!=null)C.b.M(s.gae(s).b,this)
this.a=null},
ck:function(){var s=this.b
if(s!=null)C.b.M(s.gae(s).c,this)
this.b=null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
J:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gF(s)
s=a+C.a.ay(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gF(r)
return s+C.a.ay(C.c.i(r==null?-1:r),0)},
A:function(){return this.J("")}}
F.iH.prototype={}
F.jD.prototype={
bt:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gF(q)
s=c.a
if(q==(s==null?r:s.gF(s))){q=b.b
q=q==null?r:q.gF(q)
s=c.b
return q==(s==null?r:s.gF(s))}else{q=b.a
q=q==null?r:q.gF(q)
s=c.b
if(q==(s==null?r:s.gF(s))){q=b.b
q=q==null?r:q.gF(q)
s=c.a
return q==(s==null?r:s.gF(s))}else return!1}}}
F.f6.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
J:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gF(s)
return a+C.a.ay(C.c.i(s),0)},
A:function(){return this.J("")}}
F.jh.prototype={
gW:function(){var s=this.a
return s==null?this.a=new F.z(this,H.b([],t.k)):s},
gbx:function(a){var s=this.b
return s==null?this.b=new F.bG(this,H.b([],t.q)):s},
gae:function(a){var s=this.c
return s==null?this.c=new F.dm(this,H.b([],t.L)):s},
gU:function(){var s=this.d
return s==null?this.d=new F.dl(this,H.b([],t.u)):s},
gt:function(){var s=this.e
return s==null?this.e=D.J():s},
bu:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.gW().a1()
s=b.gW().c.length
for(a0=a1.gW().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.z(b,H.b([],q))
n.n(0,o.hM())}b.gW().a1()
for(a0=a1.gbx(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.z(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).a1()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.bG(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,h)
l=new F.f6()
if(h.a==null)H.i(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.dJ(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.bG(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.D(a)}}}for(a0=a1.gae(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.z(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).a1()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.z(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).a1()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.dm(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,e)
new F.eL().eL(f,e)}for(a0=a1.gU().b,r=a0.length,n=t.u,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.z(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).a1()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.z(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).a1()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.z(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.z(j,H.b([],q)):i).a1()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.dl(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,e)
k=l.a;(k==null?l.a=new F.z(l,H.b([],q)):k).n(0,c)
new F.as().b0(f,e,c)}a0=b.e
if(a0!=null)a0.aJ(0)},
aA:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gU().aA()||!1
if(!r.gW().aA())s=!1
q=r.e
if(q!=null)q.aJ(0)
return s},
i7:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
m=n.gW().c
s=H.b(m.slice(0),H.kt(m))
for(m=t.k;s.length!==0;){r=C.b.ghY(s)
C.b.cZ(s,0)
q=H.b([],m)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.bt(0,r,o)){q.push(o)
C.b.cZ(s,p)}}if(q.length>1)b.bu(q)}n.gW().a1()
n.gae(n).d_()
n.gU().d_()
n.gbx(n).iq()
n.gae(n).d0(new F.jD())
n.gU().d0(new F.jo())
m=n.e
if(m!=null)m.aJ(0)},
ct:function(){this.i7(new F.jW(),new F.j7())},
dV:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=34962,c={},b=f.gW().c.length,a=$.aQ(),a0=a3.a,a1=(a0&a.a)!==0?1:0
if((a0&$.bu().a)!==0)++a1
if((a0&$.bt().a)!==0)++a1
if((a0&$.bO().a)!==0)++a1
if((a0&$.bP().a)!==0)++a1
if((a0&$.eh().a)!==0)++a1
if((a0&$.ei().a)!==0)++a1
if((a0&$.cA().a)!==0)++a1
if((a0&$.bs().a)!==0)++a1
s=a3.gda(a3)
r=P.eN(b*s,0,!1,t.gR)
c.a=0
q=P.oq(a1,new F.jj(c,f,a3,s*4,b,s,r),t.eT)
a=a2.a
a0=a.createBuffer()
a0.toString
a.bindBuffer(d,a0)
a.bufferData(d,new Float32Array(H.ct(r)),35044)
a.bindBuffer(d,e)
p=new Z.bV(new Z.fO(d,a0),H.b([],t.fv),q,a3)
if(f.gbx(f).b.length!==0){o=H.b([],t.t)
a0=t.q
n=t.k
m=0
while(!0){l=f.b
if(l==null){l=f.b=new F.bG(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
l=l[m].a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).a1()}l=l.e}o.push(l==null?0:l);++m}i=Z.lF(a,34963,o)
p.b.push(new Z.c0(0,o.length,i))}if(f.gae(f).b.length!==0){o=H.b([],t.t)
a0=t.L
n=t.k
m=0
while(!0){l=f.c
if(l==null){l=f.c=new F.dm(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
h=l[m]
l=h.a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).a1()}l=l.e}o.push(l==null?0:l)
l=h.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).a1()}l=l.e}o.push(l==null?0:l);++m}i=Z.lF(a,34963,o)
p.b.push(new Z.c0(1,o.length,i))}if(f.gU().b.length!==0){o=H.b([],t.t)
a0=t.u
n=t.k
m=0
while(!0){l=f.d
if(l==null){l=f.d=new F.dl(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.d(l,m)
g=l[m]
l=g.a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).a1()}l=l.e}o.push(l==null?0:l)
l=g.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).a1()}l=l.e}o.push(l==null?0:l)
l=g.c
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.z(k,H.b([],n)):j).a1()}l=l.e}o.push(l==null?0:l);++m}i=Z.lF(a,34963,o)
p.b.push(new Z.c0(4,o.length,i))}return p},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.gW().c.length!==0){q.push("Vertices:")
q.push(s.gW().J(r))}if(s.gbx(s).b.length!==0){q.push("Points:")
q.push(s.gbx(s).J(r))}if(s.gae(s).b.length!==0){q.push("Lines:")
q.push(s.gae(s).J(r))}if(s.gU().b.length!==0){q.push("Faces:")
q.push(s.gU().J(r))}return C.b.j(q,"\n")},
aa:function(){var s=this.e
return s==null?null:s.D(null)}}
F.jj.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hG(a),e=f.gda(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.z(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].i6(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bU(f,e,c*4,g.d)},
$S:48}
F.dl.prototype={
dK:function(a){var s,r,q,p,o,n,m,l,k=H.b([],t.u),j=a.length
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
l=new F.as()
l.b0(s,o,n)
k.push(l)}}return k},
hD:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.u)
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
d0:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gW().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.z(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.cm(H.b([],q),H.b([],q),H.b([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.cm(H.b([],q),H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.bt(0,l,(o==null?n.d=new F.cm(H.b([],q),H.b([],q),H.b([],q)):o).h(0,j))){l.br()
break}}}}},
d_:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.ghJ(q))q.br()}},
aA:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cw())q=!1
return q},
cv:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cu())q=!1
return q},
i:function(a){return this.A()},
J:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(a))
return C.b.j(p,"\n")},
A:function(){return this.J("")}}
F.dm.prototype={
gl:function(a){return this.b.length},
d0:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gW().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.z(s,H.b([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.cn(H.b([],q),H.b([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.cn(H.b([],q),H.b([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.bt(0,l,(o==null?n.c=new F.cn(H.b([],q),H.b([],q)):o).h(0,j))){l.br()
break}}}}},
d_:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.X(q.a,q.b))q.br()}},
i:function(a){return this.A()},
J:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].J(a+(""+s+". ")))}return C.b.j(r,"\n")},
A:function(){return this.J("")}}
F.bG.prototype={
gl:function(a){return this.b.length},
iq:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1,q=t.q;r>=0;--r){if(r>=s.length)return H.d(s,r)
p=s[r].a
if(p==null)o=null
else{n=p.b
p=(n==null?p.b=new F.dJ(H.b([],q)):n).b.length
o=p}if((o==null?0:o)>1){if(r>=s.length)return H.d(s,r)
m=s[r]
p=m.a
if(p!=null){p=p.a
if(p!=null){n=p.b
C.b.M((n==null?p.b=new F.bG(p,H.b([],q)):n).b,m)}p=m.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.D(null)}}}p=m.a
if(p!=null){n=p.b
C.b.M((n==null?p.b=new F.dJ(H.b([],q)):n).b,m)}m.a=null}}},
i:function(a){return this.A()},
J:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(a))
return C.b.j(p,"\n")},
A:function(){return this.J("")}}
F.cl.prototype={
cB:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.fM(s.cx,p,m,r,q,o,n,a,l)},
hM:function(){return this.cB(null)},
gae:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.cn(H.b([],s),H.b([],s))}return s},
gU:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.cm(H.b([],s),H.b([],s),H.b([],s))}return s},
gF:function(a){var s=this.a
if(s!=null)s.gW().a1()
return this.e},
sa3:function(a,b){var s
if(!J.X(this.f,b)){this.f=b
s=this.a
if(s!=null)s.aa()}},
sex:function(a){var s
if(!J.X(this.z,a)){this.z=a
s=this.a
if(s!=null)s.aa()}},
sdS:function(a){var s
if(!J.X(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.aa()}},
i6:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.aQ())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.bu())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.q(0,$.bt())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.q(0,$.bO())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.q(0,$.bP())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.q(0,$.eh())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.q(0,$.ei())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.q(0,$.cA()))return H.b([o.ch],t.n)
else if(a.q(0,$.bs())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
cw:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dI()
p.gU().H(0,new F.k_(o))
p.r=o.a.E()
if(r){s.aa()
o=s.e
if(o!=null)o.aJ(0)}return!0},
cu:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dI()
p.gU().H(0,new F.jZ(o))
p.x=o.a.E()
if(r){s.aa()
o=s.e
if(o!=null)o.aJ(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
J:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.ay(C.c.i(q.e),0))
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
n.push(V.E(q.ch,3,0))
s=q.cx
s=s==null?p:s.A()
n.push(s==null?o:s)
r=C.b.j(n,", ")
return a+"{"+r+"}"},
A:function(){return this.J("")}}
F.k_.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.X(0,r)}},
$S:10}
F.jZ.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.X(0,r)}},
$S:10}
F.z.prototype={
a1:function(){var s,r,q
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
s.aa()
return!0},
dL:function(a,b,c,d,e,f,g){var s=F.fM(a,null,b,c,d,e,f,g,0)
this.n(0,s)
return s},
bH:function(a,b,c,d,e,f){return this.dL(a,b,c,null,d,e,f)},
hE:function(a,b,c,d,e,f){return this.dL(a,b,c,d,e,f,null)},
gl:function(a){return this.c.length},
aA:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cw()
return!0},
cv:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cu()
return!0},
hI:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.E()
if(!J.X(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.D(null)}}}}}return!0},
i:function(a){return this.A()},
J:function(a){var s,r,q,p
this.a1()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].J(a))
return C.b.j(s,"\n")},
A:function(){return this.J("")}}
F.cm.prototype={
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
C.b.H(s.c,new F.jU(s,b))
C.b.H(s.d,new F.jV(s,b))},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
return C.b.j(p,"\n")}}
F.jU.prototype={
$1:function(a){if(!J.X(a.a,this.a))this.b.$1(a)},
$S:10}
F.jV.prototype={
$1:function(a){var s=this.a
if(!J.X(a.a,s)&&!J.X(a.b,s))this.b.$1(a)},
$S:10}
F.cn.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
return C.b.j(p,"\n")}}
F.jX.prototype={}
F.jW.prototype={
bt:function(a,b,c){return J.X(b.f,c.f)}}
F.jY.prototype={}
F.j7.prototype={
bu:function(a){var s,r,q,p,o,n=V.dI()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.C(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.E()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){p=a[r]
q=n.E()
if(!J.X(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.D(null)}}}return null}}
F.dJ.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
A:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
return C.b.j(p,"\n")}}
O.d6.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.J():s},
a7:function(a){var s=this.fr
return s==null?null:s.D(a)},
cg:function(){return this.a7(null)},
dz:function(a){this.a=null
this.a7(a)},
hj:function(){return this.dz(null)},
fp:function(a,b){return this.a7(new D.aV())},
fs:function(a,b){return this.a7(new D.aW())},
gek:function(){var s=this,r=s.dx
if(r==null){r=new D.cY(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.d8(r.gfm(),r.gfZ(),r.gh2())
r.gt().n(0,s.gdw())
r.gej().n(0,s.gbE())
s.dx=r}return r},
gan:function(){var s=this.r
return s==null?this.r=O.eQ(this,"ambient"):s},
gao:function(){var s=this.x
return s==null?this.x=O.eQ(this,"diffuse"):s},
gah:function(){var s=this.z
return s==null?this.z=new O.iT(new V.t(0,0,0),this,"specular",new A.al(!1,!1,!1)):s},
gap:function(){var s=this.cx
return s==null?this.cx=O.eQ(this,"reflect"):s},
ga0:function(){var s=this.cy
return s==null?this.cy=new O.iS(new V.t(0,0,0),this,"refract",new A.al(!1,!1,!1)):s},
dl:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.Y(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gaG()
o=a1.h(0,q.gaG())
a1.m(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.H(0,new O.iU(b,n))
C.b.bi(n,new O.iV())
m=new H.Y(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],t.fD)
m.H(0,new O.iW(b,l))
C.b.bi(l,new O.iX())
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
k.H(0,new O.iY(b,j))
C.b.bi(j,new O.iZ())
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
i.H(0,new O.j_(b,h))
C.b.bi(h,new O.j0())
a0=C.c.ab(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.iR(new V.aF(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.eQ(b,"emission"):a2).c
s=b.gan().c
p=b.gao().c
o=b.y
o=(o==null?b.y=O.eQ(b,"invDiffuse"):o).c
g=b.gah().c
f=b.Q
f=(f==null?b.Q=new O.iP(b,"bump",new A.al(!1,!1,!1)):f).c
e=b.gap().c
d=b.ga0().c
c=b.db
return A.os(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.iO(b,"alpha",new A.al(!1,!1,!1)):c).c,n,l,j,h)},
f_:function(a,b){if(b!=null)if(!C.b.C(a,b)){b.a=a.length
a.push(b)}},
aC:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aB(m==null?H.b([],t.e):m)
s=H.W(m).c
for(;m.w();){r=s.a(m.d)
q=$.jT
if(q==null)q=$.jT=new V.C(0,0,1)
r.c=q
p=$.jS
r.d=p==null?$.jS=new V.C(0,1,0):p
p=$.jR
r.e=p==null?$.jR=new V.C(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bU(q).E()
r.d=n.bU(r.d).E()
r.e=n.bU(r.e).E()}}},
es:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.dl()
r=s.bK
a9=t.eI.a(b0.fr.h(0,r))
if(a9==null){q=b0.a
p=t.S
o=t.W
a9=new A.d7(s,H.b([],t.p),P.U(p,o),P.U(p,t.O),P.U(p,o),P.U(p,t.d),P.U(p,o),P.U(p,t.r),P.U(p,o),P.U(p,t.R),q,r)
a9.eM(s,q)
b0.dN(a9)}a9=a7.a=a9
b1.e=null}n=a9.x
m=n.e1
s=b1.e
if(!(s instanceof Z.bV))s=b1.e=null
if(s==null||!s.d.q(0,m)){s=n.k4
if(s){r=b1.d
if(r!=null)r.aA()}r=n.r1
if(r){q=b1.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gU().cv()
q.gW().cv()
q=q.e
if(q!=null)q.aJ(0)}}q=n.rx
if(q){p=b1.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gW().hI()
p=p.e
if(p!=null)p.aJ(0)}}p=b1.d
l=p==null?a8:p.dV(new Z.fP(b0.a),m)
if(l==null)return
p=l.aR($.aQ())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=l.aR($.bu())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=l.aR($.bt())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(n.r2){s=l.aR($.bO())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=l.aR($.bP())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(n.ry){s=l.aR($.bs())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=l}k=H.b([],t.ga)
a9.a2(b0)
if(n.fr){s=b0.dx
s=s.ga9(s)
r=a9.db
if(r!=null)r.at(s.al(0,!0))}if(n.fx){s=b0.cx
if(s==null){s=b0.db
r=b0.dx
r=b0.cx=s.ga9(s).N(0,r.ga9(r))
s=r}r=a9.dx
if(r!=null)r.at(s.al(0,!0))}s=b0.ch
if(s==null){s=b0.dx
s=b0.ch=b0.gio().N(0,s.ga9(s))}r=a9.fr
if(r!=null)r.at(s.al(0,!0))
if(n.go){s=b0.db
s=s.ga9(s)
r=a9.dy
if(r!=null)r.at(s.al(0,!0))}if(n.x1){s=$.ml
if(s==null){s=new V.d9(1,0,0,0,1,0,0,0,1)
$.ml=s}r=a9.go
if(r!=null)r.at(s.al(0,!0))}if(n.x2){s=V.an()
r=a9.id
if(r!=null)r.at(s.al(0,!0))}if(n.y1){s=V.an()
r=a9.k1
if(r!=null)r.at(s.al(0,!0))}if(n.ba>0){s=a7.e.a
j=s.length
r=a9.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.d(s,i)
r=s[i]
q=a9.k3
if(i>=q.length)return H.d(q,i)
q=q[i]
h=new Float32Array(H.ct(r.al(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}if(n.a.a){s=a7.f
s=s==null?a8:s.f
if(s==null)s=new V.t(0,0,0)
r=a9.k4
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.k1){if(n.b.a){s=a7.r
s=s==null?a8:s.f
if(s==null)s=new V.t(0,0,0)
r=a9.rx
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.c.a){s=a7.x
s=s==null?a8:s.f
if(s==null)s=new V.t(0,0,0)
r=a9.x2
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.d.a){s=a7.y
s=s==null?a8:s.f
if(s==null)s=new V.t(0,0,0)
r=a9.ba
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.e.a
if(!s)r=!1
else r=!0
if(r){r=a7.z
r=r==null?a8:r.ch
if(r==null)r=100
q=a9.e3
if(q!=null)q.a.uniform1f(q.d,r)}if(s){s=a7.z
s=s==null?a8:s.f
if(s==null)s=new V.t(1,1,1)
r=a9.e2
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.z
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
o=a9.cE.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.giF()
a=$.b2
o=o.bA(a==null?$.b2=new V.L(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giK()
a=$.b2
o=o.bA(a==null?$.b2=new V.L(0,0,0):a)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gu(e)
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
if(e.ge0()){o=e.gdP()
a=b.e
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdQ()
a=b.f
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdR()
a=b.r
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a9.cD.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=b0.db
a0=r.ga9(r)
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
o=a9.cG.h(0,0)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=a0.bU(e.c).E()
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.b
a=b.f
a.a.uniform3f(a.d,o.a,o.b,o.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a9.cF.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=b0.db
a0=r.ga9(r)
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
o=a9.cI.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
a3=a0.N(0,e.ga9(e))
o=e.ga9(e)
a=$.b2
o=o.bA(a==null?$.b2=new V.L(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=$.b2
o=a3.bA(o==null?$.b2=new V.L(0,0,0):o)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gu(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaW()
o=a3.cO(0)
a=b.d
if(a!=null){h=new Float32Array(H.ct(new V.d9(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).al(0,!0)))
a.a.uniformMatrix3fv(a.d,!1,h)}e.gaW()
o=e.gaW()
if(!C.b.C(k,o)){o.a=k.length
k.push(o)}o=e.gaW()
a=o.gbs(o)
if(a){a=b.f
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(a4<6)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}e.gbh()
o=e.geD()
a=b.x
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gbh()
if(!C.b.C(k,o)){o.a=k.length
k.push(o)}o=e.gbh()
a=o.gbs(o)
if(a){a=b.r
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(a4<6)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}if(e.ge0()){o=e.gdP()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdQ()
a=b.z
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdR()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a2.h(0,q)
if(j==null)j=0
q=a9.cH.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=b0.db
a0=r.ga9(r)
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
o=a9.cK.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.d(o,c)
b=o[c]
o=e.gim(e)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giI(e).E()
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=a0.bA(e.gim(e))
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gu(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaW()
o=e.gd4()
a=b.f
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gd1(e)
a=b.r
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giY()
a=b.x
if(a!=null)a.a.uniform1f(a.d,o)
o=e.giZ()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
e.gaW()
o=e.gaW()
if(!C.b.C(k,o)){o.a=k.length
k.push(o)}o=e.gaW()
a=o.gbs(o)
if(a){a=b.dx
if(a!=null){a4=o.gbs(o)
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.gF(o))}}e.gbh()
o=e.geD()
a=b.z
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gbh()
if(!C.b.C(k,o)){o.a=k.length
k.push(o)}o=e.gbh()
a=o.gbs(o)
if(a){a=b.dy
if(a!=null){a4=o.gbs(o)
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.gF(o))}}if(e.giJ()){o=e.giH()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)
o=e.giG()
a=b.ch
if(a!=null)a.a.uniform1f(a.d,o)}if(e.ge0()){o=e.gdP()
a=b.cx
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdQ()
a=b.cy
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdR()
a=b.db
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a6.h(0,q)
if(j==null)j=0
q=a9.cJ.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.dy){s=b0.Q
if(s==null){s=b0.db
s=b0.Q=s.ga9(s).cO(0)}r=a9.fy
if(r!=null)r.at(s.al(0,!0))}if(n.db){a7.f_(k,a7.ch)
s=a7.ch
a9.hn(a9.e4,s)
if(n.r.a){s=a7.cx
s=s==null?a8:s.f
if(s==null)s=new V.t(1,1,1)
r=a9.e5
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.x.a
if(!s)r=!1
else r=!0
if(r){r=a7.cy
r=r==null?a8:r.ch
if(r==null)r=0
q=a9.e6
if(q!=null)q.a.uniform1f(q.d,r)}if(s){s=a7.cy
s=s==null?a8:s.f
if(s==null)s=new V.t(1,1,1)
r=a9.e7
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}}s=n.y.a
r=!s
if(r)q=!1
else q=!0
if(q){if(s){s=a7.db
s=s==null?a8:s.f
if(s==null)s=1
q=a9.e8
if(q!=null)q.a.uniform1f(q.d,s)}s=b0.a
s.enable(3042)
s.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].a2(b0)
s=t.ed.a(b1.e)
s.a2(b0)
s.aq(b0)
s.aX(b0)
if(r)s=!1
else s=!0
if(s)b0.a.disable(3042)
for(s=b0.a,i=0;i<k.length;++i){r=k[i]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(34067,a8)}}s.useProgram(a8)
a9.gak(a9).dZ()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.dl().bK}}
O.iU.prototype={
$2:function(a,b){return this.b.push(new A.ba(a,C.c.ab(b+3,4)*4))},
$S:7}
O.iV.prototype={
$2:function(a,b){return C.c.au(a.a,b.a)},
$S:52}
O.iW.prototype={
$2:function(a,b){return this.b.push(new A.bc(a,C.c.ab(b+3,4)*4))},
$S:7}
O.iX.prototype={
$2:function(a,b){return C.c.au(a.a,b.a)},
$S:53}
O.iY.prototype={
$2:function(a,b){return this.b.push(new A.bj(a,C.c.ab(b+3,4)*4))},
$S:7}
O.iZ.prototype={
$2:function(a,b){return C.c.au(a.a,b.a)},
$S:54}
O.j_.prototype={
$2:function(a,b){return this.b.push(new A.bl(a,C.c.ab(b+3,4)*4))},
$S:7}
O.j0.prototype={
$2:function(a,b){return C.c.au(a.a,b.a)},
$S:55}
O.iO.prototype={
aN:function(){var s,r=this
r.dc()
s=r.f
$.G().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.a7(new D.F(r.b,s,1))}}}
O.eP.prototype={
aN:function(){},
bF:function(a){var s,r,q=this
if(!q.c.q(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aN()
s=q.a
s.a=null
s.a7(null)}}}
O.iP.prototype={}
O.d8.prototype={
dB:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.a7(new D.F(r.b+".color",s,a))}},
aN:function(){this.dc()
this.dB(new V.t(1,1,1))},
su:function(a,b){this.bF(new A.al(!0,!1,!1))
this.dB(b)}}
O.iR.prototype={}
O.iS.prototype={
cl:function(a){var s=this,r=s.ch
$.G().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.a7(new D.F(s.b+".refraction",r,a))}},
aN:function(){this.dd()
this.cl(1)},
saQ:function(a){var s=this
if(a<=0){s.bF(new A.al(!1,!1,!1))
s.cl(0)}else{s.bF(new A.al(!0,!1,!1))
s.cl(a)}}}
O.iT.prototype={
dC:function(a){var s=this,r=s.ch
$.G().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.a7(new D.F(s.b+".shininess",r,a))}},
aN:function(){this.dd()
this.dC(100)}}
O.dn.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.J():s},
a7:function(a){var s=this.e
return s==null?null:s.D(a)},
cg:function(){return this.a7(null)},
es:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.dm.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.dp(a.a,"Skybox")
s.ef(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.gak(s).h(0,"posAttr")
r=t.v
s.y=r.a(s.gR().h(0,"fov"))
s.z=r.a(s.gR().h(0,"ratio"))
s.Q=t.g.a(s.gR().h(0,"boxClr"))
s.ch=t.l.a(s.gR().h(0,"boxTxt"))
s.cx=t.j.a(s.gR().h(0,"viewMat"))
a.dN(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.dV(new Z.fP(a.a),$.aQ())
if(r==null)r=l
else{q=r.aR($.aQ())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.x
p=p==null?l:p.c}q.e=p==null?0:p}}b.e=r}o=m.c
if(o==null)return
o.a=1
o.a2(a)
r=a.d
q=a.c
p=m.a
if(p!=null){p.a2(a)
n=p.y
if(n!=null)n.a.uniform1f(n.d,1.0471975511965976)
n=p.z
if(n!=null)n.a.uniform1f(n.d,r/q)
r=p.ch
if(r!=null)r.d9(o)
r=m.d
q=p.Q
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)
r=a.db
r=r.ga9(r).cO(0)
p=p.cx
if(p!=null)p.at(r.al(0,!0))}r=b.e
if(r instanceof Z.bV){r.a2(a)
r.aq(a)
r.aX(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.gak(r).dZ()}o.aX(a)}}
O.ce.prototype={}
T.ds.prototype={}
T.ft.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.J():s},
a2:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
aX:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.js.prototype={
b5:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.a3(s,"load",new T.jt(this,s,!1,b,!1,d,a),!1)},
hk:function(a,b,c){var s,r,q,p,o,n
b=V.m0(b)
s=a.width
r=V.m0(s==null?512:s)
s=a.height
q=V.m0(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.ln()
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
return P.qw(o.getImageData(0,0,s,n==null?512:n))}}}
T.jt.prototype={
$1:function(a){var s=this,r=s.a,q=r.hk(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.a3.ix(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.hT()}++r.e},
$S:3}
X.eA.prototype={
gt:function(){var s=this.x
return s==null?this.x=D.J():s},
aE:function(a){var s=this.x
return s==null?null:s.D(a)},
sdW:function(a,b){if(this.b){this.b=!1
this.aE(new D.F("clearColor",!0,!1))}},
a2:function(a){var s,r,q,p,o,n,m,l=a.a
l.bindFramebuffer(36160,null)
l.enable(2884)
l.enable(2929)
l.depthFunc(513)
s=l.drawingBufferWidth
if(s==null)s=512
r=l.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.d.aB(q.a*s)
o=C.d.aB(q.b*r)
n=C.d.aB(q.c*s)
a.c=n
q=C.d.aB(q.d*r)
a.d=q
l.viewport(p,o,n,q)
l.clearDepth(2000)
if(this.b){q=this.a
l.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
if(m>0)l.clear(m)}}
X.iC.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.J():s},
a2:function(a){var s
a.cy.bS(V.an())
s=V.an()
a.db.bS(s)},
aX:function(a){a.cy.aU()
a.db.aU()}}
X.f2.prototype={
gt:function(){var s=this.f
return s==null?this.f=D.J():s},
aE:function(a){var s=this.f
return s==null?null:s.D(a)},
eW:function(){return this.aE(null)},
a2:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.b0(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bS(i)
s=$.nB()
r=q.b
if(r!=null)s=r.be(0,a,q).N(0,s)
a.db.bS(s)},
aX:function(a){a.cy.aU()
a.db.aU()}}
X.jr.prototype={}
V.aE.prototype={
bC:function(a){this.b=new P.iA(C.S)
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
m=k.b.f7(o,0,o.length)
l=m==null?o:m
l=H.m2(l," ","&nbsp;")
C.Q.eC(n,l)
l=n.style
l.color=b
C.b.gaH(k.d).push(n)}},
eq:function(a,b){var s,r,q,p=this
p.d=H.b([],t.F)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bJ()
if(r!=null)for(q=new H.r(s),q=new P.bL(r.d3(new H.bh(q,q.gl(q))).a());q.w();)p.bR(q.gB(q))}}
V.lh.prototype={
$1:function(a){var s=C.d.d2(this.a.gi2(),2)
if(s!=="0.00")P.m1(s+" fps")},
$S:56}
V.eu.prototype={
bR:function(a){var s=this
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
bJ:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()\\-+*%!&|=.,?:;",h="OpenDoubleStr",g="CloseDoubleStr",f="EscDoubleStr",e="OpenSingleStr",d="CloseSingleStr",c="EscSingleStr",b="Slash",a="Comment",a0="EndComment",a1="MLComment",a2="MLCStar",a3="Whitespace",a4=L.jy()
a4.d=a4.k(0,o)
s=a4.k(0,o).j(0,n)
r=t.t
q=new K.v(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
s=a4.k(0,n).j(0,n)
q=new K.v(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("0","9"))
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
a4.k(0,o).j(0,m).a.push(K.R("0","9"))
a4.k(0,m).j(0,m).a.push(K.R("0","9"))
s=a4.k(0,m).j(0,l)
q=new K.v(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
a4.k(0,l).j(0,k).a.push(K.R("0","9"))
a4.k(0,k).j(0,k).a.push(K.R("0","9"))
q=a4.k(0,o).j(0,j)
s=new K.v(H.b([],r))
s.p(new H.r(i))
q.a.push(s)
s=a4.k(0,j).j(0,j)
q=new K.v(H.b([],r))
q.p(new H.r(i))
s.a.push(q)
q=a4.k(0,o).j(0,h)
s=new K.v(H.b([],r))
s.p(new H.r('"'))
q.a.push(s)
s=a4.k(0,h).j(0,g)
q=new K.v(H.b([],r))
q.p(new H.r('"'))
s.a.push(q)
q=a4.k(0,h).j(0,f)
s=new K.v(H.b([],r))
s.p(new H.r("\\"))
q.a.push(s)
s=a4.k(0,f).j(0,h)
q=new K.v(H.b([],r))
q.p(new H.r('"'))
s.a.push(q)
a4.k(0,h).j(0,h).a.push(new K.aS())
q=a4.k(0,o).j(0,e)
s=new K.v(H.b([],r))
s.p(new H.r("'"))
q.a.push(s)
s=a4.k(0,e).j(0,d)
q=new K.v(H.b([],r))
q.p(new H.r("'"))
s.a.push(q)
q=a4.k(0,e).j(0,c)
s=new K.v(H.b([],r))
s.p(new H.r("\\"))
q.a.push(s)
s=a4.k(0,c).j(0,e)
q=new K.v(H.b([],r))
q.p(new H.r("'"))
s.a.push(q)
a4.k(0,e).j(0,e).a.push(new K.aS())
q=a4.k(0,o).j(0,b)
s=new K.v(H.b([],r))
s.p(new H.r("/"))
q.a.push(s)
s=a4.k(0,b).j(0,a)
q=new K.v(H.b([],r))
q.p(new H.r("/"))
s.a.push(q)
q=a4.k(0,a).j(0,a0)
s=new K.v(H.b([],r))
s.p(new H.r("\n"))
q.a.push(s)
s=a4.k(0,a).j(0,a)
q=t.z
p=H.b([],q)
s.a.push(new K.ae(p))
s=new K.v(H.b([],r))
s.p(new H.r("\n"))
p.push(s)
s=a4.k(0,b).j(0,a1)
p=new K.v(H.b([],r))
p.p(new H.r("*"))
s.a.push(p)
p=a4.k(0,a1).j(0,a2)
s=new K.v(H.b([],r))
s.p(new H.r("*"))
p.a.push(s)
s=a4.k(0,a2).j(0,a1)
q=H.b([],q)
s.a.push(new K.ae(q))
s=new K.v(H.b([],r))
s.p(new H.r("*"))
q.push(s)
s=a4.k(0,a2).j(0,a0)
q=new K.v(H.b([],r))
q.p(new H.r("/"))
s.a.push(q)
q=a4.k(0,o).j(0,a3)
s=new K.v(H.b([],r))
s.p(new H.r(" \n\t"))
q.a.push(s)
s=a4.k(0,a3).j(0,a3)
r=new K.v(H.b([],r))
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
r.aV(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aV(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aV(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a4}}
V.eB.prototype={
bR:function(a){var s=this
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
bJ:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()[]\\-+*%!&|=.,?:;",h="Slash",g="Comment",f="EndComment",e="Preprocess",d="EndPreprocess",c="Whitespace",b=L.jy()
b.d=b.k(0,o)
s=b.k(0,o).j(0,n)
r=t.t
q=new K.v(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
s=b.k(0,n).j(0,n)
q=new K.v(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("0","9"))
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
b.k(0,o).j(0,m).a.push(K.R("0","9"))
b.k(0,m).j(0,m).a.push(K.R("0","9"))
s=b.k(0,m).j(0,l)
q=new K.v(H.b([],r))
q.p(new H.r("."))
s.a.push(q)
b.k(0,l).j(0,k).a.push(K.R("0","9"))
b.k(0,k).j(0,k).a.push(K.R("0","9"))
q=b.k(0,o).j(0,j)
s=new K.v(H.b([],r))
s.p(new H.r(i))
q.a.push(s)
s=b.k(0,j).j(0,j)
q=new K.v(H.b([],r))
q.p(new H.r(i))
s.a.push(q)
q=b.k(0,o).j(0,h)
s=new K.v(H.b([],r))
s.p(new H.r("/"))
q.a.push(s)
s=b.k(0,h).j(0,g)
q=new K.v(H.b([],r))
q.p(new H.r("/"))
s.a.push(q)
b.k(0,h).j(0,j).a.push(new K.aS())
q=b.k(0,g).j(0,f)
s=new K.v(H.b([],r))
s.p(new H.r("\n"))
q.a.push(s)
s=b.k(0,g).j(0,g)
q=t.z
p=H.b([],q)
s.a.push(new K.ae(p))
s=new K.v(H.b([],r))
s.p(new H.r("\n"))
p.push(s)
s=b.k(0,o).j(0,e)
p=new K.v(H.b([],r))
p.p(new H.r("#"))
s.a.push(p)
p=b.k(0,e).j(0,e)
q=H.b([],q)
p.a.push(new K.ae(q))
p=new K.v(H.b([],r))
p.p(new H.r("\n"))
q.push(p)
p=b.k(0,e).j(0,d)
q=new K.v(H.b([],r))
q.p(new H.r("\n"))
p.a.push(q)
q=b.k(0,o).j(0,c)
p=new K.v(H.b([],r))
p.p(new H.r(" \n\t"))
q.a.push(p)
p=b.k(0,c).j(0,c)
r=new K.v(H.b([],r))
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
r.aV(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],p))
r.aV(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],p))
r.aV(0,"Builtin",H.b(["gl_FragColor","gl_Position"],p))
return b}}
V.eC.prototype={
bR:function(a){var s=this,r="#111"
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
bJ:function(){var s,r,q,p="Start",o="Id",n="Attr",m="Sym",l="OpenStr",k="CloseStr",j="Other",i=L.jy()
i.d=i.k(0,p)
s=i.k(0,p).j(0,o)
r=t.t
q=new K.v(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
s=i.k(0,o).j(0,o)
q=new K.v(H.b([],r))
q.p(new H.r("_"))
s=s.a
s.push(q)
s.push(K.R("0","9"))
s.push(K.R("a","z"))
s.push(K.R("A","Z"))
s=i.k(0,o).j(0,n)
q=new K.v(H.b([],r))
q.p(new H.r("="))
s.a.push(q)
s.c=!0
s=i.k(0,p).j(0,m)
q=new K.v(H.b([],r))
q.p(new H.r("</\\-!>="))
s.a.push(q)
q=i.k(0,m).j(0,m)
s=new K.v(H.b([],r))
s.p(new H.r("</\\-!>="))
q.a.push(s)
s=i.k(0,p).j(0,l)
q=new K.v(H.b([],r))
q.p(new H.r('"'))
s.a.push(q)
q=i.k(0,l).j(0,k)
s=new K.v(H.b([],r))
s.p(new H.r('"'))
q.a.push(s)
s=i.k(0,l).j(0,"EscStr")
q=new K.v(H.b([],r))
q.p(new H.r("\\"))
s.a.push(q)
q=i.k(0,"EscStr").j(0,l)
s=new K.v(H.b([],r))
s.p(new H.r('"'))
q.a.push(s)
i.k(0,l).j(0,l).a.push(new K.aS())
i.k(0,p).j(0,j).a.push(new K.aS())
s=i.k(0,j).j(0,j)
q=H.b([],t.z)
s.a.push(new K.ae(q))
r=new K.v(H.b([],r))
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
r.aV(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],t.s))
r=i.k(0,n)
r.d=r.a.P(n)
r=i.k(0,j)
r.d=r.a.P(j)
return i}}
V.f4.prototype={
eq:function(a,b){this.d=H.b([],t.F)
this.O(C.b.j(b,"\n"),"#111")},
bR:function(a){},
bJ:function(){return null}}
V.ja.prototype={
cs:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.mG().gcY().h(0,k)
if(j==null)if(d){c.$0()
l.dH(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.aP(p)
o.gbI(p).n(0,q)
n=W.og("radio")
n.checked=s
n.name=k
W.a3(n,"change",new V.jb(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gbI(p)
r=r.createElement("br")
r.toString
p.n(0,r)},
a4:function(a,b,c){return this.cs(a,b,c,!1)},
dH:function(a){var s,r,q=P.mG(),p=t.N,o=P.op(q.gcY(),p,p)
o.m(0,this.a,a)
s=q.eu(0,o)
p=window.history
p.toString
r=s.gcq()
p.replaceState(new P.kf([],[]).bV(""),"",r)}}
V.jb.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.dH(s.d)}},
$S:3}
V.jk.prototype={
dM:function(a){var s,r,q,p,o,n,m=this.hq(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.r(C.b.i5(a)),s=new P.bL(m.d3(new H.bh(s,s.gl(s))).a());s.w();){r=s.gB(s)
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
if(H.nv(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.kn(C.w,r,C.e,!1)
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
eA:function(a){var s,r,q,p=t.F,o=new V.eu("dart",H.b([],p))
o.bC("dart")
s=new V.eB("glsl",H.b([],p))
s.bC("glsl")
r=new V.eC("html",H.b([],p))
r.bC("html")
q=C.b.hZ(H.b([o,s,r],t.g6),new V.jn(a))
if(q!=null)return q
p=new V.f4("plain",H.b([],p))
p.bC("plain")
return p},
dJ:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.b([],t.t)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.a6(q,"+")){b2[r]=C.a.am(q,1)
a8.push(1)
s=!0}else if(C.a.a6(q,"-")){b2[r]=C.a.am(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.eA(b0)
p.eq(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.kn(C.w,a9,C.e,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.m8()
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
for(a4=C.b.gS(q);a4.w();)b.appendChild(a4.gB(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
hB:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
hq:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
f=L.jy()
f.d=f.k(0,o)
s=f.k(0,o).j(0,n)
r=t.t
q=new K.v(H.b([],r))
q.p(new H.r("*"))
s.a.push(q)
s.c=!0
s=f.k(0,n).j(0,n)
q=t.z
p=H.b([],q)
s.a.push(new K.ae(p))
s=new K.v(H.b([],r))
s.p(new H.r("*"))
p.push(s)
s=f.k(0,n).j(0,"BoldEnd")
p=new K.v(H.b([],r))
p.p(new H.r("*"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,m)
p=new K.v(H.b([],r))
p.p(new H.r("_"))
s.a.push(p)
s.c=!0
s=f.k(0,m).j(0,m)
p=H.b([],q)
s.a.push(new K.ae(p))
s=new K.v(H.b([],r))
s.p(new H.r("_"))
p.push(s)
s=f.k(0,m).j(0,l)
p=new K.v(H.b([],r))
p.p(new H.r("_"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,k)
p=new K.v(H.b([],r))
p.p(new H.r("`"))
s.a.push(p)
s.c=!0
s=f.k(0,k).j(0,k)
p=H.b([],q)
s.a.push(new K.ae(p))
s=new K.v(H.b([],r))
s.p(new H.r("`"))
p.push(s)
s=f.k(0,k).j(0,"CodeEnd")
p=new K.v(H.b([],r))
p.p(new H.r("`"))
s.a.push(p)
s.c=!0
s=f.k(0,o).j(0,j)
p=new K.v(H.b([],r))
p.p(new H.r("["))
s.a.push(p)
s.c=!0
s=f.k(0,j).j(0,i)
p=new K.v(H.b([],r))
p.p(new H.r("|"))
s.a.push(p)
p=f.k(0,j).j(0,h)
s=new K.v(H.b([],r))
s.p(new H.r("]"))
p.a.push(s)
p.c=!0
p=f.k(0,j).j(0,j)
s=H.b([],q)
p.a.push(new K.ae(s))
p=new K.v(H.b([],r))
p.p(new H.r("|]"))
s.push(p)
p=f.k(0,i).j(0,h)
s=new K.v(H.b([],r))
s.p(new H.r("]"))
p.a.push(s)
p.c=!0
p=f.k(0,i).j(0,i)
s=H.b([],q)
p.a.push(new K.ae(s))
p=new K.v(H.b([],r))
p.p(new H.r("|]"))
s.push(p)
f.k(0,o).j(0,g).a.push(new K.aS())
p=f.k(0,g).j(0,g)
q=H.b([],q)
p.a.push(new K.ae(q))
r=new K.v(H.b([],r))
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
V.jm.prototype={
$1:function(a){P.mC(C.m,new V.jl(this.a))},
$S:3}
V.jl.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.aB(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.y(-0.01*s)+"px"
q.top=r},
$S:0}
V.jn.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:57}
D.kY.prototype={
$0:function(){var s=this.a,r=s.gan()
r.su(0,new V.t(0.1,0.1,0.1))
r=s.gao()
r.su(0,new V.t(0.2,0.2,0.2))
r=s.gah()
r.su(0,new V.t(1,1,1))
s.ga0().su(0,new V.t(0,0,0))
s=s.gap()
s.su(0,new V.t(1,1,1))},
$S:0}
D.kZ.prototype={
$0:function(){var s=this.a,r=s.gan()
r.su(0,new V.t(0.11,0.11,0.1))
r=s.gao()
r.su(0,new V.t(0.21,0.21,0.2))
r=s.gah()
r.su(0,new V.t(1,1,1))
s.ga0().su(0,new V.t(0,0,0))
s=s.gap()
s.su(0,new V.t(1,0.9,0.5))},
$S:0}
D.l_.prototype={
$0:function(){var s=this.a,r=s.gan()
r.su(0,new V.t(0.1,0.1,0.1))
r=s.gao()
r.su(0,new V.t(0.1,0.1,0.1))
r=s.gah()
r.su(0,new V.t(1,1,1))
s.ga0().saQ(0.4)
r=s.ga0()
r.su(0,new V.t(0.6,0.6,0.6))
s=s.gap()
s.su(0,new V.t(0.4,0.4,0.4))},
$S:0}
D.l8.prototype={
$0:function(){var s=this.a,r=s.gan()
r.su(0,new V.t(0.1,0.1,0.1))
r=s.gao()
r.su(0,new V.t(0.1,0.1,0.1))
r=s.gah()
r.su(0,new V.t(1,1,1))
s.ga0().saQ(0.4)
r=s.ga0()
r.su(0,new V.t(0.2,0.3,1))
s=s.gap()
s.su(0,new V.t(0.3,0.3,0.3))},
$S:0}
D.l9.prototype={
$0:function(){var s=this.a,r=s.gan()
r.su(0,new V.t(0.1,0.1,0.1))
r=s.gao()
r.su(0,new V.t(0.1,0.1,0.1))
r=s.gah()
r.su(0,new V.t(1,1,1))
s.ga0().saQ(0.6)
r=s.ga0()
r.su(0,new V.t(0.8,0.8,0.8))
s=s.gap()
s.su(0,new V.t(0.2,0.2,0.2))},
$S:0}
D.la.prototype={
$0:function(){var s=this.a,r=s.gan()
r.su(0,new V.t(0.1,0.1,0.1))
r=s.gao()
r.su(0,new V.t(0.1,0.1,0.1))
r=s.gah()
r.su(0,new V.t(1,1,1))
s.ga0().saQ(0.6)
r=s.ga0()
r.su(0,new V.t(1,1,1))
s.gap().su(0,new V.t(0,0,0))},
$S:0}
D.lb.prototype={
$0:function(){var s=this.a,r=s.gan()
r.su(0,new V.t(0.1,0.1,0.1))
r=s.gao()
r.su(0,new V.t(0.1,0.1,0.1))
r=s.gah()
r.su(0,new V.t(1,1,1))
s.ga0().saQ(0.9)
r=s.ga0()
r.su(0,new V.t(1,0.8,0.8))
s.gap().su(0,new V.t(0,0,0))},
$S:0}
D.lc.prototype={
$0:function(){var s=this.a,r=s.gan()
r.su(0,new V.t(0,0,0))
r=s.gao()
r.su(0,new V.t(0.1,0.1,0.1))
r=s.gah()
r.su(0,new V.t(0.1,0.1,0.1))
s.ga0().saQ(0.99)
r=s.ga0()
r.su(0,new V.t(0.95,0.95,0.95))
s.gap().su(0,new V.t(0,0,0))},
$S:0}
D.ld.prototype={
$0:function(){var s=this.a,r=s.gan()
r.su(0,new V.t(0.3,0.3,0.3))
r=s.gao()
r.su(0,new V.t(0.5,0.5,0.5))
r=s.gah()
r.su(0,new V.t(1,1,1))
s.ga0().su(0,new V.t(0,0,0))
s=s.gap()
s.su(0,new V.t(0.3,0.3,0.3))},
$S:0}
D.le.prototype={
$0:function(){this.a.sag(0,F.lW(1,null,null,1))},
$S:0}
D.lf.prototype={
$0:function(){this.a.sag(0,F.lW(15,null,new D.kX(),15))},
$S:0}
D.kX.prototype={
$3:function(a,b,c){var s=Math.cos(c*4*3.141592653589793+3.141592653589793),r=Math.cos(b*4*3.141592653589793+3.141592653589793),q=a.f
if(q==null)q=V.lz()
s=new V.C(q.a,q.b,q.c).E().N(0,s*0.1+r*0.1)
a.sa3(0,q.X(0,new V.L(s.a,s.b,s.c)))},
$S:5}
D.l0.prototype={
$0:function(){this.a.sag(0,F.nh(!0,30,1))},
$S:0}
D.l1.prototype={
$0:function(){this.a.sag(0,F.nh(!1,30,0))},
$S:0}
D.l2.prototype={
$0:function(){this.a.sag(0,F.ni(!0,!0,25,new D.kW(),50))},
$S:0}
D.kW.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8},
$S:9}
D.l3.prototype={
$0:function(){this.a.sag(0,F.nu(6,null,6))},
$S:0}
D.l4.prototype={
$0:function(){this.a.sag(0,F.nu(10,new D.kV(),10))},
$S:0}
D.kV.prototype={
$2:function(a,b){var s=a-0.5,r=b-0.5
return Math.cos(Math.sqrt(s*s+r*r)*3.141592653589793)*0.3},
$S:9}
D.l5.prototype={
$0:function(){this.a.sag(0,F.nw())},
$S:0}
D.l6.prototype={
$0:function(){this.a.sag(0,F.qJ())},
$S:0}
D.l7.prototype={
$1:function(a){var s,r=this.a,q=this.b,p=q.a
p=p==null?null:p.c
s=t.s
r.dJ("Vertex Shader","glsl",0,H.b((p==null?"":p).split("\n"),s))
q=q.a
q=q==null?null:q.d
r.dJ("Fragment Shader","glsl",0,H.b((q==null?"":q).split("\n"),s))},
$S:2};(function aliases(){var s=J.a.prototype
s.eG=s.i
s=J.bg.prototype
s.eI=s.i
s=P.h.prototype
s.eH=s.bW
s=W.D.prototype
s.bY=s.av
s=W.dW.prototype
s.eJ=s.aF
s=K.cT.prototype
s.eF=s.aT
s.bZ=s.i
s=O.eP.prototype
s.dc=s.aN
s=O.d8.prototype
s.dd=s.aN})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pM","ol",58)
r(P,"qq","oY",14)
r(P,"qr","oZ",14)
r(P,"qs","p_",14)
q(P,"nf","ql",0)
r(W,"t_","io",60)
p(W,"qC",4,null,["$4"],["p0"],21,0)
p(W,"qD",4,null,["$4"],["p1"],21,0)
var j
o(j=E.bA.prototype,"geo",0,0,null,["$1","$0"],["ep","ig"],1,0)
o(j,"gem",0,0,null,["$1","$0"],["en","ib"],1,0)
n(j,"gi9","ia",8)
n(j,"gic","ie",8)
o(j=E.fu.prototype,"gdf",0,0,null,["$1","$0"],["dh","dg"],1,0)
m(j,"git","ev",0)
l(j=X.fL.prototype,"gfH","fI",3)
l(j,"gft","fu",3)
l(j,"gfB","fC",4)
l(j,"gfL","fM",28)
l(j,"gfJ","fK",28)
l(j,"gfP","fQ",4)
l(j,"gfT","fU",4)
l(j,"gfF","fG",4)
l(j,"gfR","fS",4)
l(j,"gfD","fE",4)
l(j,"gfV","fW",36)
l(j,"gfX","fY",3)
l(j,"ghc","hd",12)
l(j,"gh8","h9",12)
l(j,"gha","hb",12)
o(D.bW.prototype,"geQ",0,0,null,["$1","$0"],["aK","eR"],1,0)
o(j=D.cY.prototype,"gdt",0,0,null,["$1","$0"],["du","fN"],1,0)
l(j,"gfZ","h_",38)
n(j,"gfm","fn",24)
n(j,"gh2","h3",24)
k(V.a5.prototype,"gl","cP",31)
k(V.C.prototype,"gl","cP",31)
o(j=U.bZ.prototype,"gb2",0,0,null,["$1","$0"],["T","aj"],1,0)
n(j,"gfk","fl",20)
n(j,"gh0","h1",20)
o(j=U.dF.prototype,"gb2",0,0,null,["$1","$0"],["T","aj"],1,0)
l(j,"gc8","c9",11)
l(j,"gca","cb",11)
l(j,"gcc","cd",11)
o(j=U.dG.prototype,"gb2",0,0,null,["$1","$0"],["T","aj"],1,0)
l(j,"gc8","c9",2)
l(j,"gca","cb",2)
l(j,"gcc","cd",2)
l(j,"gfd","fe",2)
l(j,"gff","fg",2)
l(j,"ghx","hy",2)
l(j,"ghv","hw",2)
l(j,"ght","hu",2)
l(U.dH.prototype,"gfi","fj",2)
o(j=M.cF.prototype,"gZ",0,0,null,["$1","$0"],["a_","bj"],1,0)
n(j,"gh4","h5",19)
n(j,"gh6","h7",19)
o(M.cJ.prototype,"gZ",0,0,null,["$1","$0"],["a_","bj"],1,0)
o(j=M.cP.prototype,"gZ",0,0,null,["$1","$0"],["a_","bj"],1,0)
n(j,"gfv","fw",8)
n(j,"gfz","fA",8)
o(j=O.d6.prototype,"gbE",0,0,null,["$1","$0"],["a7","cg"],1,0)
o(j,"gdw",0,0,null,["$1","$0"],["dz","hj"],1,0)
n(j,"gfo","fp",18)
n(j,"gfq","fs",18)
o(O.dn.prototype,"gbE",0,0,null,["$1","$0"],["a7","cg"],1,0)
o(X.f2.prototype,"geV",0,0,null,["$1","$0"],["aE","eW"],1,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.Q,null)
q(P.Q,[H.lv,J.a,J.ag,P.M,P.dP,P.h,H.bh,P.eE,H.cQ,H.fI,H.cH,H.jB,H.j8,H.hv,H.by,P.N,H.iI,H.eM,H.eH,H.aw,H.h7,P.e1,P.cr,P.bL,P.fR,P.cd,P.fl,P.kr,P.e8,P.k7,P.dO,P.j,P.hK,P.d4,P.dk,P.eq,P.iB,P.kp,P.ko,P.Z,P.bz,P.f1,P.dq,P.h4,P.iy,P.ah,P.a_,P.bM,P.jG,P.hp,W.id,W.lq,W.lG,W.cq,W.O,W.df,W.dW,W.hA,W.cR,W.kb,W.hL,P.ke,P.e3,P.hn,K.aS,K.cT,K.f8,K.v,L.fi,L.fv,L.fw,L.jx,O.ad,O.da,E.i6,E.bA,E.bT,E.c7,E.h2,E.jc,E.fu,Z.fO,Z.fP,Z.bV,Z.c0,Z.bK,D.i8,D.bX,D.T,X.cD,X.eJ,X.iG,X.iM,X.a8,X.j4,X.jz,X.fL,D.bW,V.t,V.aF,V.ir,V.d9,V.bi,V.V,V.L,V.au,V.fa,V.a5,V.C,U.dF,U.dG,U.dH,M.cJ,M.cP,A.en,A.i1,A.al,A.ba,A.bc,A.bj,A.bl,A.iQ,A.dy,A.dz,A.dB,A.dE,A.a2,A.jE,F.as,F.iv,F.eL,F.iH,F.f6,F.jh,F.dl,F.dm,F.bG,F.cl,F.z,F.cm,F.cn,F.jX,F.jY,F.dJ,O.ce,O.eP,O.iR,T.js,X.jr,X.iC,X.f2,V.aE,V.ja,V.jk])
q(J.a,[J.eF,J.cW,J.bg,J.x,J.c2,J.bf,H.db,H.a1,W.e,W.i_,W.bv,W.cE,W.aU,W.K,W.fW,W.ar,W.ih,W.ii,W.fY,W.cM,W.h_,W.ij,W.l,W.h5,W.aH,W.iz,W.h9,W.bC,W.iL,W.j1,W.hd,W.he,W.aI,W.hf,W.hh,W.aK,W.hl,W.ho,W.aM,W.hq,W.aN,W.hw,W.ap,W.hC,W.jv,W.az,W.hE,W.jA,W.jL,W.hM,W.hO,W.hQ,W.hS,W.hU,P.aY,P.hb,P.b1,P.hj,P.j9,P.hx,P.b3,P.hG,P.i2,P.fT,P.c9,P.ht])
q(J.bg,[J.f3,J.bI,J.aX])
r(J.iE,J.x)
q(J.c2,[J.cV,J.eG])
q(P.M,[H.cX,P.fz,H.eI,H.fH,H.fc,H.h3,P.em,P.eZ,P.aC,P.fJ,P.fG,P.cc,P.er,P.et])
r(P.d0,P.dP)
q(P.d0,[H.cj,W.fU,W.a6,P.ey])
r(H.r,H.cj)
q(P.h,[H.n,H.aZ,H.b6,P.cU])
q(H.n,[H.d1,H.cZ])
r(H.cN,H.aZ)
q(P.eE,[H.eO,H.fQ])
r(H.d5,H.d1)
r(H.cI,H.cH)
r(H.dg,P.fz)
q(H.by,[H.fq,H.iF,H.kP,H.kQ,H.kR,P.k1,P.k0,P.k2,P.k3,P.kk,P.kj,P.kF,P.k9,P.ka,P.iJ,P.iN,P.jP,P.jO,P.ik,P.il,P.jK,P.jH,P.jI,P.jJ,P.km,P.kl,P.ky,P.kz,P.kA,W.im,W.j2,W.j3,W.jg,W.jp,W.k4,W.j6,W.j5,W.kc,W.kd,W.ki,W.kq,P.kg,P.kh,P.kw,P.kG,P.iw,P.ix,P.i3,E.jd,E.je,E.jf,E.ju,D.it,D.iu,F.ks,F.kH,F.kJ,F.kK,F.kL,F.lj,F.li,F.lk,F.kU,F.kI,F.jj,F.k_,F.jZ,F.jU,F.jV,O.iU,O.iV,O.iW,O.iX,O.iY,O.iZ,O.j_,O.j0,T.jt,V.lh,V.jb,V.jm,V.jl,V.jn,D.kY,D.kZ,D.l_,D.l8,D.l9,D.la,D.lb,D.lc,D.ld,D.le,D.lf,D.kX,D.l0,D.l1,D.l2,D.kW,D.l3,D.l4,D.kV,D.l5,D.l6,D.l7])
q(H.fq,[H.fj,H.bS])
r(P.d3,P.N)
q(P.d3,[H.Y,W.fS])
r(H.c6,H.a1)
q(H.c6,[H.dR,H.dT])
r(H.dS,H.dR)
r(H.bE,H.dS)
r(H.dU,H.dT)
r(H.dc,H.dU)
q(H.dc,[H.eU,H.eV,H.eW,H.eX,H.eY,H.dd,H.bF])
r(H.e2,H.h3)
r(P.dZ,P.cU)
r(P.k8,P.kr)
r(P.dV,P.e8)
r(P.dN,P.dV)
r(P.e6,P.d4)
r(P.ck,P.e6)
q(P.eq,[P.i4,P.ip])
r(P.es,P.fl)
q(P.es,[P.i5,P.iA,P.jQ,P.jN])
r(P.jM,P.ip)
q(P.aC,[P.dj,P.eD])
r(P.fX,P.bM)
q(W.e,[W.u,W.ex,W.c3,W.ax,W.dX,W.ay,W.ai,W.e_,W.fN,W.co,P.ep,P.bb])
q(W.u,[W.D,W.aD,W.cp])
q(W.D,[W.w,P.o])
q(W.w,[W.ek,W.el,W.bR,W.bw,W.bx,W.bd,W.ez,W.c_,W.c1,W.fd,W.bm,W.dr,W.fo,W.fp,W.cf])
r(W.ic,W.aU)
r(W.cK,W.fW)
q(W.ar,[W.ie,W.ig])
r(W.fZ,W.fY)
r(W.cL,W.fZ)
r(W.h0,W.h_)
r(W.ew,W.h0)
r(W.am,W.bv)
r(W.h6,W.h5)
r(W.bY,W.h6)
r(W.ha,W.h9)
r(W.bB,W.ha)
r(W.b5,W.l)
q(W.b5,[W.bD,W.ao,W.bH])
r(W.eR,W.hd)
r(W.eS,W.he)
r(W.hg,W.hf)
r(W.eT,W.hg)
r(W.hi,W.hh)
r(W.de,W.hi)
r(W.hm,W.hl)
r(W.f5,W.hm)
r(W.fb,W.ho)
r(W.dY,W.dX)
r(W.ff,W.dY)
r(W.hr,W.hq)
r(W.fg,W.hr)
r(W.fk,W.hw)
r(W.hD,W.hC)
r(W.fr,W.hD)
r(W.e0,W.e_)
r(W.fs,W.e0)
r(W.hF,W.hE)
r(W.fx,W.hF)
r(W.bn,W.ao)
r(W.hN,W.hM)
r(W.fV,W.hN)
r(W.dK,W.cM)
r(W.hP,W.hO)
r(W.h8,W.hP)
r(W.hR,W.hQ)
r(W.dQ,W.hR)
r(W.hT,W.hS)
r(W.hs,W.hT)
r(W.hV,W.hU)
r(W.hz,W.hV)
r(W.h1,W.fS)
r(W.dL,P.cd)
r(W.hB,W.dW)
r(P.kf,P.ke)
r(P.af,P.hn)
r(P.hc,P.hb)
r(P.eK,P.hc)
r(P.hk,P.hj)
r(P.f_,P.hk)
r(P.ca,P.o)
r(P.hy,P.hx)
r(P.fm,P.hy)
r(P.hH,P.hG)
r(P.fy,P.hH)
r(P.eo,P.fT)
r(P.f0,P.bb)
r(P.hu,P.ht)
r(P.fh,P.hu)
q(K.cT,[K.ae,L.du])
q(E.i6,[Z.bU,A.cb,T.ds])
q(D.T,[D.aV,D.aW,D.F,X.f7])
q(X.f7,[X.d2,X.c4,X.c5,X.dt])
q(O.ad,[D.cY,U.bZ,M.cF])
q(D.i8,[U.ia,U.a0])
r(U.cG,U.a0)
q(A.cb,[A.d7,A.dp])
q(A.a2,[A.ch,A.fC,A.fD,A.fE,A.fA,A.dv,A.fB,A.dw,A.dx,A.fF,A.dA,A.ci,A.dC,A.dD])
r(F.jo,F.iv)
r(F.jD,F.iH)
r(F.jW,F.jX)
r(F.j7,F.jY)
q(O.ce,[O.d6,O.dn])
q(O.eP,[O.iO,O.iP,O.d8])
q(O.d8,[O.iS,O.iT])
r(T.ft,T.ds)
r(X.eA,X.jr)
q(V.aE,[V.eu,V.eB,V.eC,V.f4])
s(H.cj,H.fI)
s(H.dR,P.j)
s(H.dS,H.cQ)
s(H.dT,P.j)
s(H.dU,H.cQ)
s(P.dP,P.j)
s(P.e6,P.hK)
s(P.e8,P.dk)
s(W.fW,W.id)
s(W.fY,P.j)
s(W.fZ,W.O)
s(W.h_,P.j)
s(W.h0,W.O)
s(W.h5,P.j)
s(W.h6,W.O)
s(W.h9,P.j)
s(W.ha,W.O)
s(W.hd,P.N)
s(W.he,P.N)
s(W.hf,P.j)
s(W.hg,W.O)
s(W.hh,P.j)
s(W.hi,W.O)
s(W.hl,P.j)
s(W.hm,W.O)
s(W.ho,P.N)
s(W.dX,P.j)
s(W.dY,W.O)
s(W.hq,P.j)
s(W.hr,W.O)
s(W.hw,P.N)
s(W.hC,P.j)
s(W.hD,W.O)
s(W.e_,P.j)
s(W.e0,W.O)
s(W.hE,P.j)
s(W.hF,W.O)
s(W.hM,P.j)
s(W.hN,W.O)
s(W.hO,P.j)
s(W.hP,W.O)
s(W.hQ,P.j)
s(W.hR,W.O)
s(W.hS,P.j)
s(W.hT,W.O)
s(W.hU,P.j)
s(W.hV,W.O)
s(P.hb,P.j)
s(P.hc,W.O)
s(P.hj,P.j)
s(P.hk,W.O)
s(P.hx,P.j)
s(P.hy,W.O)
s(P.hG,P.j)
s(P.hH,W.O)
s(P.fT,P.N)
s(P.ht,P.j)
s(P.hu,W.O)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",I:"double",a4:"num",m:"String",ac:"bool",ah:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","~([T?])","~(T)","~(l)","~(ao)","~(cl,I,I)","~(m,@)","~(k,k)","~(k,h<bA>)","I(I,I)","~(as)","~(T?)","~(bH)","ah()","~(~())","~(@,@)","I(I)","@()","~(k,h<bi>)","~(k,h<aL>)","~(k,h<a0?>)","ac(D,m,m,cq)","~(cg,m,k)","ac(u)","~(k,h<at>)","L(I)","ac(aJ)","ac(m)","~(bD)","~(~(T))","m(k)","I()","~(a4)","~(@)","ah(@,@)","~(u,u?)","~(bn)","m(m)","ac(h<at>)","@(@)","cg(@,@)","~(m,m?)","k(k,k)","~(m[@])","~(m,k)","H<m,m>(H<m,m>,m)","~(Q?,Q?)","ah(~())","bU(k)","ah(@)","@(m)","~(m,m)","k(ba,ba)","k(bc,bc)","k(bj,bj)","k(bl,bl)","~(jw)","ac(aE?)","k(@,@)","@(@,m)","m(e)","D(u)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pj(v.typeUniverse,JSON.parse('{"f3":"bg","bI":"bg","aX":"bg","qV":"l","r6":"l","qX":"bb","qW":"e","rd":"e","rg":"e","qU":"o","r7":"o","qY":"w","ra":"w","r8":"u","r5":"u","rG":"ai","r1":"b5","qZ":"aD","rh":"aD","rf":"ao","r9":"bB","r2":"K","r3":"ap","rc":"bE","rb":"a1","eF":{"ac":[]},"bg":{"mj":[]},"x":{"p":["1"],"n":["1"],"h":["1"]},"iE":{"x":["1"],"p":["1"],"n":["1"],"h":["1"]},"c2":{"I":[],"a4":[]},"cV":{"I":[],"k":[],"a4":[]},"eG":{"I":[],"a4":[]},"bf":{"m":[]},"cX":{"M":[]},"r":{"j":["k"],"p":["k"],"n":["k"],"h":["k"],"j.E":"k"},"n":{"h":["1"]},"d1":{"n":["1"],"h":["1"]},"aZ":{"h":["2"],"h.E":"2"},"cN":{"aZ":["1","2"],"n":["2"],"h":["2"],"h.E":"2"},"d5":{"d1":["2"],"n":["2"],"h":["2"],"h.E":"2"},"b6":{"h":["1"],"h.E":"1"},"cj":{"j":["1"],"p":["1"],"n":["1"],"h":["1"]},"cH":{"H":["1","2"]},"cI":{"H":["1","2"]},"dg":{"M":[]},"eI":{"M":[]},"fH":{"M":[]},"by":{"cS":[]},"fq":{"cS":[]},"fj":{"cS":[]},"bS":{"cS":[]},"fc":{"M":[]},"Y":{"N":["1","2"],"H":["1","2"],"N.V":"2"},"cZ":{"n":["1"],"h":["1"],"h.E":"1"},"eH":{"mu":[]},"c6":{"A":["1"],"a1":[]},"bE":{"j":["I"],"A":["I"],"p":["I"],"a1":[],"n":["I"],"h":["I"],"j.E":"I"},"dc":{"j":["k"],"A":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"]},"eU":{"j":["k"],"A":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"eV":{"j":["k"],"A":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"eW":{"j":["k"],"A":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"eX":{"j":["k"],"A":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"eY":{"j":["k"],"A":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"dd":{"j":["k"],"A":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"bF":{"j":["k"],"cg":[],"A":["k"],"p":["k"],"a1":[],"n":["k"],"h":["k"],"j.E":"k"},"h3":{"M":[]},"e2":{"M":[]},"e1":{"jw":[]},"dZ":{"h":["1"],"h.E":"1"},"dN":{"dk":["1"],"n":["1"],"h":["1"]},"cU":{"h":["1"]},"d0":{"j":["1"],"p":["1"],"n":["1"],"h":["1"]},"d3":{"N":["1","2"],"H":["1","2"]},"N":{"H":["1","2"]},"d4":{"H":["1","2"]},"ck":{"H":["1","2"]},"dV":{"dk":["1"],"n":["1"],"h":["1"]},"I":{"a4":[]},"k":{"a4":[]},"p":{"n":["1"],"h":["1"]},"em":{"M":[]},"fz":{"M":[]},"eZ":{"M":[]},"aC":{"M":[]},"dj":{"M":[]},"eD":{"M":[]},"fJ":{"M":[]},"fG":{"M":[]},"cc":{"M":[]},"er":{"M":[]},"f1":{"M":[]},"dq":{"M":[]},"et":{"M":[]},"bM":{"fK":[]},"hp":{"fK":[]},"fX":{"fK":[]},"w":{"D":[],"u":[],"e":[]},"bd":{"D":[],"u":[],"e":[]},"D":{"u":[],"e":[]},"am":{"bv":[]},"bD":{"l":[]},"ao":{"l":[]},"u":{"e":[]},"ax":{"e":[]},"ay":{"e":[]},"ai":{"e":[]},"bH":{"l":[]},"b5":{"l":[]},"bn":{"ao":[],"l":[]},"cq":{"aJ":[]},"ek":{"D":[],"u":[],"e":[]},"el":{"D":[],"u":[],"e":[]},"bR":{"D":[],"u":[],"e":[]},"bw":{"D":[],"u":[],"e":[]},"bx":{"D":[],"u":[],"e":[]},"aD":{"u":[],"e":[]},"cL":{"j":["af<a4>"],"p":["af<a4>"],"A":["af<a4>"],"n":["af<a4>"],"h":["af<a4>"],"j.E":"af<a4>"},"cM":{"af":["a4"]},"ew":{"j":["m"],"p":["m"],"A":["m"],"n":["m"],"h":["m"],"j.E":"m"},"fU":{"j":["D"],"p":["D"],"n":["D"],"h":["D"],"j.E":"D"},"bY":{"j":["am"],"p":["am"],"A":["am"],"n":["am"],"h":["am"],"j.E":"am"},"ex":{"e":[]},"ez":{"D":[],"u":[],"e":[]},"bB":{"j":["u"],"p":["u"],"A":["u"],"n":["u"],"h":["u"],"j.E":"u"},"c_":{"D":[],"u":[],"e":[]},"c1":{"D":[],"u":[],"e":[]},"c3":{"e":[]},"eR":{"N":["m","@"],"H":["m","@"],"N.V":"@"},"eS":{"N":["m","@"],"H":["m","@"],"N.V":"@"},"eT":{"j":["aI"],"p":["aI"],"A":["aI"],"n":["aI"],"h":["aI"],"j.E":"aI"},"a6":{"j":["u"],"p":["u"],"n":["u"],"h":["u"],"j.E":"u"},"de":{"j":["u"],"p":["u"],"A":["u"],"n":["u"],"h":["u"],"j.E":"u"},"f5":{"j":["aK"],"p":["aK"],"A":["aK"],"n":["aK"],"h":["aK"],"j.E":"aK"},"fb":{"N":["m","@"],"H":["m","@"],"N.V":"@"},"fd":{"D":[],"u":[],"e":[]},"ff":{"j":["ax"],"p":["ax"],"A":["ax"],"e":[],"n":["ax"],"h":["ax"],"j.E":"ax"},"fg":{"j":["aM"],"p":["aM"],"A":["aM"],"n":["aM"],"h":["aM"],"j.E":"aM"},"fk":{"N":["m","m"],"H":["m","m"],"N.V":"m"},"bm":{"D":[],"u":[],"e":[]},"dr":{"D":[],"u":[],"e":[]},"fo":{"D":[],"u":[],"e":[]},"fp":{"D":[],"u":[],"e":[]},"cf":{"D":[],"u":[],"e":[]},"fr":{"j":["ai"],"p":["ai"],"A":["ai"],"n":["ai"],"h":["ai"],"j.E":"ai"},"fs":{"j":["ay"],"p":["ay"],"A":["ay"],"e":[],"n":["ay"],"h":["ay"],"j.E":"ay"},"fx":{"j":["az"],"p":["az"],"A":["az"],"n":["az"],"h":["az"],"j.E":"az"},"fN":{"e":[]},"co":{"e":[]},"cp":{"u":[],"e":[]},"fV":{"j":["K"],"p":["K"],"A":["K"],"n":["K"],"h":["K"],"j.E":"K"},"dK":{"af":["a4"]},"h8":{"j":["aH?"],"p":["aH?"],"A":["aH?"],"n":["aH?"],"h":["aH?"],"j.E":"aH?"},"dQ":{"j":["u"],"p":["u"],"A":["u"],"n":["u"],"h":["u"],"j.E":"u"},"hs":{"j":["aN"],"p":["aN"],"A":["aN"],"n":["aN"],"h":["aN"],"j.E":"aN"},"hz":{"j":["ap"],"p":["ap"],"A":["ap"],"n":["ap"],"h":["ap"],"j.E":"ap"},"fS":{"N":["m","m"],"H":["m","m"]},"h1":{"N":["m","m"],"H":["m","m"],"N.V":"m"},"dL":{"cd":["1"]},"df":{"aJ":[]},"dW":{"aJ":[]},"hB":{"aJ":[]},"hA":{"aJ":[]},"e3":{"bC":[]},"ey":{"j":["D"],"p":["D"],"n":["D"],"h":["D"],"j.E":"D"},"af":{"hn":["1"]},"eK":{"j":["aY"],"p":["aY"],"n":["aY"],"h":["aY"],"j.E":"aY"},"f_":{"j":["b1"],"p":["b1"],"n":["b1"],"h":["b1"],"j.E":"b1"},"ca":{"o":[],"D":[],"u":[],"e":[]},"fm":{"j":["m"],"p":["m"],"n":["m"],"h":["m"],"j.E":"m"},"o":{"D":[],"u":[],"e":[]},"fy":{"j":["b3"],"p":["b3"],"n":["b3"],"h":["b3"],"j.E":"b3"},"eo":{"N":["m","@"],"H":["m","@"],"N.V":"@"},"ep":{"e":[]},"bb":{"e":[]},"f0":{"e":[]},"fh":{"j":["H<@,@>"],"p":["H<@,@>"],"n":["H<@,@>"],"h":["H<@,@>"],"j.E":"H<@,@>"},"cT":{"b_":[]},"aS":{"b_":[]},"ae":{"b_":[]},"f8":{"b_":[]},"v":{"b_":[]},"du":{"b_":[]},"ad":{"h":["1"],"ad.T":"1"},"aV":{"T":[]},"aW":{"T":[]},"F":{"T":[]},"d2":{"T":[]},"c4":{"T":[]},"c5":{"T":[]},"f7":{"T":[]},"dt":{"T":[]},"o2":{"at":[]},"bW":{"at":[]},"ot":{"at":[]},"oM":{"at":[]},"cY":{"ad":["at"],"h":["at"],"ad.T":"at"},"cG":{"a0":[]},"bZ":{"ad":["a0?"],"a0":[],"h":["a0?"],"ad.T":"a0?"},"dF":{"a0":[]},"dG":{"a0":[]},"dH":{"a0":[]},"cF":{"ad":["aL"],"aL":[],"h":["aL"],"ad.T":"aL"},"cJ":{"aL":[]},"cP":{"aL":[]},"ch":{"a2":[]},"ci":{"a2":[]},"d7":{"cb":[]},"dp":{"cb":[]},"fC":{"a2":[]},"fD":{"a2":[]},"fE":{"a2":[]},"fA":{"a2":[]},"dv":{"a2":[]},"fB":{"a2":[]},"dw":{"a2":[]},"dx":{"a2":[]},"fF":{"a2":[]},"dA":{"a2":[]},"dC":{"a2":[]},"dD":{"a2":[]},"d6":{"ce":[]},"dn":{"ce":[]},"ft":{"ds":[]},"eu":{"aE":[]},"eB":{"aE":[]},"eC":{"aE":[]},"f4":{"aE":[]},"cg":{"p":["k"],"n":["k"],"h":["k"]}}'))
H.pi(v.typeUniverse,JSON.parse('{"ag":1,"n":1,"bh":1,"eO":2,"fQ":1,"cQ":1,"fI":1,"cj":1,"cH":2,"eM":1,"c6":1,"cd":1,"bL":1,"fl":2,"dO":1,"cU":1,"d0":1,"d3":2,"hK":2,"d4":2,"dV":1,"dP":1,"e6":2,"e8":1,"eq":2,"es":2,"eE":1,"dL":1,"O":1,"cR":1,"aV":1,"aW":1,"F":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lX
return{cR:s("bR"),fK:s("bv"),Y:s("bw"),eT:s("bU"),ed:s("bV"),gA:s("bx"),ar:s("cE"),gw:s("n<@>"),h:s("D"),m:s("bA"),bU:s("M"),aD:s("l"),c8:s("am"),bX:s("bY"),fA:s("eA"),b:s("cS"),x:s("bC"),fS:s("c_"),gk:s("c1"),eu:s("x<en>"),i:s("x<o2>"),cn:s("x<ba>"),U:s("x<bW>"),fD:s("x<bc>"),C:s("x<bd>"),u:s("x<as>"),fv:s("x<c0>"),e:s("x<at>"),L:s("x<eL>"),F:s("x<p<bd>>"),z:s("x<b_>"),g8:s("x<bi>"),Q:s("x<aJ>"),q:s("x<f6>"),cG:s("x<V>"),eg:s("x<bj>"),o:s("x<ot>"),ba:s("x<aL>"),D:s("x<oM>"),c3:s("x<bl>"),g9:s("x<cd<Q>>"),s:s("x<m>"),ga:s("x<ds>"),gT:s("x<az>"),ab:s("x<du>"),gN:s("x<cg>"),dC:s("x<a2>"),c:s("x<dy>"),V:s("x<dz>"),B:s("x<dB>"),J:s("x<dE>"),k:s("x<cl>"),n:s("x<I>"),gn:s("x<@>"),t:s("x<k>"),g6:s("x<aE?>"),eJ:s("x<a0?>"),bc:s("x<ce?>"),p:s("x<ci?>"),a:s("x<~(T)>"),T:s("cW"),eH:s("mj"),M:s("aX"),aU:s("A<@>"),fX:s("Y<k,ac>"),y:s("Y<k,k>"),O:s("p<dy>"),d:s("p<dz>"),r:s("p<dB>"),R:s("p<dE>"),E:s("p<@>"),bv:s("d2"),f:s("H<@,@>"),dv:s("d5<m,m>"),gc:s("bi"),bu:s("c3"),Z:s("c4"),bZ:s("c5"),cH:s("db"),dE:s("a1"),bm:s("bF"),P:s("ah"),K:s("Q"),I:s("af<a4>"),fJ:s("mu"),ew:s("ca"),fg:s("cb"),N:s("m"),g7:s("o"),bY:s("bm"),aW:s("cf"),aF:s("jw"),bJ:s("fv"),dr:s("dt"),v:s("dv"),w:s("ch"),g:s("dw"),bw:s("dx"),bK:s("dA"),j:s("ci"),G:s("dC"),l:s("dD"),ak:s("bI"),dw:s("ck<m,m>"),dD:s("fK"),h9:s("cp"),ac:s("a6"),cJ:s("ac"),gR:s("I"),A:s("@"),S:s("k"),aw:s("0&*"),_:s("Q*"),bG:s("mi<ah>?"),eI:s("d7?"),X:s("Q?"),gW:s("c9?"),dm:s("dp?"),dl:s("fi?"),f7:s("fw?"),W:s("ch?"),H:s("a4"),h2:s("~(T)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.p=W.bw.prototype
C.i=W.bx.prototype
C.Q=W.bd.prototype
C.T=J.a.prototype
C.b=J.x.prototype
C.c=J.cV.prototype
C.U=J.cW.prototype
C.d=J.c2.prototype
C.a=J.bf.prototype
C.V=J.aX.prototype
C.a_=H.bF.prototype
C.B=J.f3.prototype
C.a3=P.c9.prototype
C.C=W.dr.prototype
C.o=J.bI.prototype
C.D=W.bn.prototype
C.E=W.co.prototype
C.F=new E.bT("Browser.chrome")
C.q=new E.bT("Browser.firefox")
C.r=new E.bT("Browser.edge")
C.G=new E.bT("Browser.other")
C.a6=new P.i5()
C.H=new P.i4()
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

C.O=new P.f1()
C.e=new P.jM()
C.P=new P.jQ()
C.f=new P.k8()
C.m=new P.bz(0)
C.R=new P.bz(5e6)
C.S=new P.iB("element",!1,!1,!1)
C.j=H.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.W=H.b(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
C.k=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.l=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.X=H.b(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
C.v=H.b(s([]),t.s)
C.Y=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.w=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.x=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.y=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.z=H.b(s(["bind","if","ref","repeat","syntax"]),t.s)
C.n=H.b(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
C.Z=new H.cI(0,{},C.v,H.lX("cI<m,m>"))
C.a0=new E.c7("OperatingSystem.windows")
C.A=new E.c7("OperatingSystem.mac")
C.a1=new E.c7("OperatingSystem.linux")
C.a2=new E.c7("OperatingSystem.other")
C.a4=new P.jN(!1)
C.a5=new P.cr(null,2)})();(function staticFields(){$.k5=null
$.aT=0
$.cC=null
$.ma=null
$.nm=null
$.ne=null
$.ns=null
$.kM=null
$.kT=null
$.lZ=null
$.cu=null
$.eb=null
$.ec=null
$.lS=!1
$.aO=C.f
$.aj=H.b([],H.lX("x<Q>"))
$.be=null
$.lp=null
$.mg=null
$.mf=null
$.dM=P.U(t.N,t.b)
$.iq=null
$.ml=null
$.mn=null
$.a9=null
$.b2=null
$.mw=null
$.bJ=null
$.mM=null
$.mL=null
$.jR=null
$.jS=null
$.jT=null
$.mK=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"r4","nA",function(){return H.qB("_$dart_dartClosure")})
s($,"ri","nC",function(){return H.b4(H.jC({
toString:function(){return"$receiver$"}}))})
s($,"rj","nD",function(){return H.b4(H.jC({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"rk","nE",function(){return H.b4(H.jC(null))})
s($,"rl","nF",function(){return H.b4(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"ro","nI",function(){return H.b4(H.jC(void 0))})
s($,"rp","nJ",function(){return H.b4(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rn","nH",function(){return H.b4(H.mE(null))})
s($,"rm","nG",function(){return H.b4(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"rr","nL",function(){return H.b4(H.mE(void 0))})
s($,"rq","nK",function(){return H.b4(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"rH","m4",function(){return P.oX()})
s($,"rs","nM",function(){return new P.jP().$0()})
s($,"rt","nN",function(){return new P.jO().$0()})
s($,"rI","nR",function(){return new Int8Array(H.ct(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rL","nT",function(){return P.oF("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rY","nU",function(){return P.pE()})
s($,"rJ","nS",function(){return P.mk(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"rA","nQ",function(){return Z.aA(0)})
s($,"ru","nO",function(){return Z.aA(511)})
s($,"rC","aQ",function(){return Z.aA(1)})
s($,"rB","bu",function(){return Z.aA(2)})
s($,"rw","bt",function(){return Z.aA(4)})
s($,"rD","bO",function(){return Z.aA(8)})
s($,"rE","bP",function(){return Z.aA(16)})
s($,"rx","eh",function(){return Z.aA(32)})
s($,"ry","ei",function(){return Z.aA(64)})
s($,"rz","nP",function(){return Z.aA(96)})
s($,"rF","cA",function(){return Z.aA(128)})
s($,"rv","bs",function(){return Z.aA(256)})
s($,"r0","nz",function(){return new V.ir()})
r($,"r_","G",function(){return $.nz()})
r($,"re","nB",function(){var q=V.lz(),p=V.lD(),o=$.mK
return V.mm(q,p,o==null?$.mK=V.oV(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.db,DataView:H.a1,ArrayBufferView:H.a1,Float32Array:H.bE,Float64Array:H.bE,Int16Array:H.eU,Int32Array:H.eV,Int8Array:H.eW,Uint16Array:H.eX,Uint32Array:H.eY,Uint8ClampedArray:H.dd,CanvasPixelArray:H.dd,Uint8Array:H.bF,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.i_,HTMLAnchorElement:W.ek,HTMLAreaElement:W.el,HTMLBaseElement:W.bR,Blob:W.bv,HTMLBodyElement:W.bw,HTMLCanvasElement:W.bx,CanvasRenderingContext2D:W.cE,CDATASection:W.aD,CharacterData:W.aD,Comment:W.aD,ProcessingInstruction:W.aD,Text:W.aD,CSSPerspective:W.ic,CSSCharsetRule:W.K,CSSConditionRule:W.K,CSSFontFaceRule:W.K,CSSGroupingRule:W.K,CSSImportRule:W.K,CSSKeyframeRule:W.K,MozCSSKeyframeRule:W.K,WebKitCSSKeyframeRule:W.K,CSSKeyframesRule:W.K,MozCSSKeyframesRule:W.K,WebKitCSSKeyframesRule:W.K,CSSMediaRule:W.K,CSSNamespaceRule:W.K,CSSPageRule:W.K,CSSRule:W.K,CSSStyleRule:W.K,CSSSupportsRule:W.K,CSSViewportRule:W.K,CSSStyleDeclaration:W.cK,MSStyleCSSProperties:W.cK,CSS2Properties:W.cK,CSSImageValue:W.ar,CSSKeywordValue:W.ar,CSSNumericValue:W.ar,CSSPositionValue:W.ar,CSSResourceValue:W.ar,CSSUnitValue:W.ar,CSSURLImageValue:W.ar,CSSStyleValue:W.ar,CSSMatrixComponent:W.aU,CSSRotation:W.aU,CSSScale:W.aU,CSSSkew:W.aU,CSSTranslation:W.aU,CSSTransformComponent:W.aU,CSSTransformValue:W.ie,CSSUnparsedValue:W.ig,DataTransferItemList:W.ih,HTMLDivElement:W.bd,DOMException:W.ii,ClientRectList:W.cL,DOMRectList:W.cL,DOMRectReadOnly:W.cM,DOMStringList:W.ew,DOMTokenList:W.ij,Element:W.D,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,SubmitEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.am,FileList:W.bY,FileWriter:W.ex,HTMLFormElement:W.ez,Gamepad:W.aH,History:W.iz,HTMLCollection:W.bB,HTMLFormControlsCollection:W.bB,HTMLOptionsCollection:W.bB,ImageData:W.bC,HTMLImageElement:W.c_,HTMLInputElement:W.c1,KeyboardEvent:W.bD,Location:W.iL,MediaList:W.j1,MessagePort:W.c3,MIDIInputMap:W.eR,MIDIOutputMap:W.eS,MimeType:W.aI,MimeTypeArray:W.eT,PointerEvent:W.ao,MouseEvent:W.ao,DragEvent:W.ao,Document:W.u,DocumentFragment:W.u,HTMLDocument:W.u,ShadowRoot:W.u,XMLDocument:W.u,DocumentType:W.u,Node:W.u,NodeList:W.de,RadioNodeList:W.de,Plugin:W.aK,PluginArray:W.f5,RTCStatsReport:W.fb,HTMLSelectElement:W.fd,SourceBuffer:W.ax,SourceBufferList:W.ff,SpeechGrammar:W.aM,SpeechGrammarList:W.fg,SpeechRecognitionResult:W.aN,Storage:W.fk,CSSStyleSheet:W.ap,StyleSheet:W.ap,HTMLTableCellElement:W.bm,HTMLTableDataCellElement:W.bm,HTMLTableHeaderCellElement:W.bm,HTMLTableElement:W.dr,HTMLTableRowElement:W.fo,HTMLTableSectionElement:W.fp,HTMLTemplateElement:W.cf,TextTrack:W.ay,TextTrackCue:W.ai,VTTCue:W.ai,TextTrackCueList:W.fr,TextTrackList:W.fs,TimeRanges:W.jv,Touch:W.az,TouchEvent:W.bH,TouchList:W.fx,TrackDefaultList:W.jA,CompositionEvent:W.b5,FocusEvent:W.b5,TextEvent:W.b5,UIEvent:W.b5,URL:W.jL,VideoTrackList:W.fN,WheelEvent:W.bn,Window:W.co,DOMWindow:W.co,Attr:W.cp,CSSRuleList:W.fV,ClientRect:W.dK,DOMRect:W.dK,GamepadList:W.h8,NamedNodeMap:W.dQ,MozNamedAttrMap:W.dQ,SpeechRecognitionResultList:W.hs,StyleSheetList:W.hz,SVGLength:P.aY,SVGLengthList:P.eK,SVGNumber:P.b1,SVGNumberList:P.f_,SVGPointList:P.j9,SVGScriptElement:P.ca,SVGStringList:P.fm,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.b3,SVGTransformList:P.fy,AudioBuffer:P.i2,AudioParamMap:P.eo,AudioTrackList:P.ep,AudioContext:P.bb,webkitAudioContext:P.bb,BaseAudioContext:P.bb,OfflineAudioContext:P.f0,WebGL2RenderingContext:P.c9,SQLResultSetRowList:P.fh})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.dR.$nativeSuperclassTag="ArrayBufferView"
H.dS.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.dT.$nativeSuperclassTag="ArrayBufferView"
H.dU.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
W.dX.$nativeSuperclassTag="EventTarget"
W.dY.$nativeSuperclassTag="EventTarget"
W.e_.$nativeSuperclassTag="EventTarget"
W.e0.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=D.qL
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
