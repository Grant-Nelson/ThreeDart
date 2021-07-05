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
a[c]=function(){a[c]=function(){H.qD(b)}
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
if(a[b]!==s)H.qE(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lJ(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={lk:function lk(){},
lm:function(a){return new H.cY("Field '"+a+"' has been assigned during initialization.")},
kO:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
jp:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
oy:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
qe:function(a,b,c){return a},
ob:function(a,b,c,d){if(t.gw.b(a))return new H.cP(a,b,c.M("@<0>").bh(d).M("cP<1,2>"))
return new H.aZ(a,b,c.M("@<0>").bh(d).M("aZ<1,2>"))},
iC:function(){return new P.ch("No element")},
o2:function(){return new P.ch("Too many elements")},
ov:function(a,b){H.ff(a,0,J.aR(a)-1,b)},
ff:function(a,b,c,d){if(c-b<=32)H.ou(a,b,c,d)
else H.ot(a,b,c,d)},
ou:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bU(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ao()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
ot:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a6(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a6(a4+a5,2),f=g-j,e=g+j,d=J.bU(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ao()
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
cY:function cY(a){this.a=a},
r:function r(a){this.a=a},
n:function n(){},
d2:function d2(){},
bk:function bk(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cP:function cP(a,b,c){this.a=a
this.b=b
this.$ti=c},
eP:function eP(a,b){this.a=null
this.b=a
this.c=b},
d7:function d7(a,b,c){this.a=a
this.b=b
this.$ti=c},
b7:function b7(a,b,c){this.a=a
this.b=b
this.$ti=c},
fQ:function fQ(a,b){this.a=a
this.b=b},
cR:function cR(){},
fK:function fK(){},
co:function co(){},
nV:function(){throw H.c(P.D("Cannot modify unmodifiable Map"))},
nh:function(a){var s,r=H.ng(a)
if(r!=null)return r
s="minified:"+a
return s},
na:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
z:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cE(a)
return s},
dj:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mb:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.ab(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.F(q,o)|32)>r)return n}return parseInt(a,b)},
dk:function(a){return H.oe(a)},
oe:function(a){var s,r,q,p
if(a instanceof P.R)return H.av(H.b9(a),null)
if(J.eh(a)===C.T||t.ak.b(a)){s=C.t(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.av(H.b9(a),null)},
of:function(){if(!!self.location)return self.location.href
return null},
ma:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
on:function(a){var s,r,q,p=H.a([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.kC(q))throw H.c(H.eg(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.b_(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.eg(q))}return H.ma(p)},
mc:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.kC(q))throw H.c(H.eg(q))
if(q<0)throw H.c(H.eg(q))
if(q>65535)return H.on(a)}return H.ma(a)},
oo:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aC:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.b_(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.ab(a,0,1114111,null,null))},
ce:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
om:function(a){var s=H.ce(a).getFullYear()+0
return s},
ok:function(a){var s=H.ce(a).getMonth()+1
return s},
og:function(a){var s=H.ce(a).getDate()+0
return s},
oh:function(a){var s=H.ce(a).getHours()+0
return s},
oj:function(a){var s=H.ce(a).getMinutes()+0
return s},
ol:function(a){var s=H.ce(a).getSeconds()+0
return s},
oi:function(a){var s=H.ce(a).getMilliseconds()+0
return s},
n8:function(a){throw H.c(H.eg(a))},
d:function(a,b){if(a==null)J.aR(a)
throw H.c(H.cB(a,b))},
cB:function(a,b){var s,r="index"
if(!H.kC(b))return new P.aJ(!0,b,r,null)
s=J.aR(a)
if(b<0||b>=s)return P.Q(b,a,r,null,s)
return P.fa(b,r)},
qj:function(a,b,c){if(a>c)return P.ab(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.ab(b,a,c,"end",null)
return new P.aJ(!0,b,"end",null)},
eg:function(a){return new P.aJ(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.f_()
s=new Error()
s.dartException=a
r=H.qF
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qF:function(){return J.cE(this.dartException)},
h:function(a){throw H.c(a)},
q:function(a){throw H.c(P.aM(a))},
b4:function(a){var s,r,q,p,o,n
a=H.nd(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jA(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jB:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mo:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ll:function(a,b){var s=b==null,r=s?null:b.method
return new H.eK(a,r,s?null:b.receiver)},
an:function(a){if(a==null)return new H.j7(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bV(a,a.dartException)
return H.qa(a)},
bV:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qa:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.b_(r,16)&8191)===10)switch(q){case 438:return H.bV(a,H.ll(H.z(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.z(s)+" (Error "+q+")"
return H.bV(a,new H.di(p,e))}}if(a instanceof TypeError){o=$.nl()
n=$.nm()
m=$.nn()
l=$.no()
k=$.nr()
j=$.ns()
i=$.nq()
$.np()
h=$.nu()
g=$.nt()
f=o.am(s)
if(f!=null)return H.bV(a,H.ll(s,f))
else{f=n.am(s)
if(f!=null){f.method="call"
return H.bV(a,H.ll(s,f))}else{f=m.am(s)
if(f==null){f=l.am(s)
if(f==null){f=k.am(s)
if(f==null){f=j.am(s)
if(f==null){f=i.am(s)
if(f==null){f=l.am(s)
if(f==null){f=h.am(s)
if(f==null){f=g.am(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bV(a,new H.di(s,f==null?e:f.method))}}return H.bV(a,new H.fJ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dr()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bV(a,new P.aJ(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dr()
return a},
lM:function(a){var s
if(a==null)return new H.hv(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hv(a)},
ql:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
qt:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
cA:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qt)
a.$identity=s
return s},
nU:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.fk().constructor.prototype):Object.create(new H.bZ(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aT
if(typeof r!=="number")return r.R()
$.aT=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.m_(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.nQ(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.m_(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
nQ:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n7,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.nO:H.nN
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
nR:function(a,b,c,d){var s=H.lZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
m_:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.nT(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.nR(r,!p,s,b)
if(r===0){p=$.aT
if(typeof p!=="number")return p.R()
$.aT=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cF
return new Function(p+(o==null?$.cF=H.i7("self"):o)+";return "+n+"."+H.z(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aT
if(typeof p!=="number")return p.R()
$.aT=p+1
m+=p
p="return function("+m+"){return this."
o=$.cF
return new Function(p+(o==null?$.cF=H.i7("self"):o)+"."+H.z(s)+"("+m+");}")()},
nS:function(a,b,c,d){var s=H.lZ,r=H.nP
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
nT:function(a,b){var s,r,q,p,o,n,m,l=$.cF
if(l==null)l=$.cF=H.i7("self")
s=$.lY
if(s==null)s=$.lY=H.i7("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.nS(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.z(r)+"(this."+s+");"
n=$.aT
if(typeof n!=="number")return n.R()
$.aT=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.z(r)+"(this."+s+", "+m+");"
n=$.aT
if(typeof n!=="number")return n.R()
$.aT=n+1
return new Function(o+n+"}")()},
lJ:function(a,b,c,d,e,f,g){return H.nU(a,b,c,d,!!e,!!f,g)},
nN:function(a,b){return H.hJ(v.typeUniverse,H.b9(a.a),b)},
nO:function(a,b){return H.hJ(v.typeUniverse,H.b9(a.c),b)},
lZ:function(a){return a.a},
nP:function(a){return a.c},
i7:function(a){var s,r,q,p=new H.bZ("self","target","receiver","name"),o=J.lj(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bX("Field name "+a+" not found."))},
qD:function(a){throw H.c(new P.ev(a))},
qn:function(a){return v.getIsolateTag(a)},
qE:function(a){return H.h(new H.cY(a))},
rN:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qx:function(a){var s,r,q,p,o,n=$.n6.$1(a),m=$.kM[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kT[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.n_.$2(a,n)
if(q!=null){m=$.kM[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kT[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.l5(s)
$.kM[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kT[n]=s
return s}if(p==="-"){o=H.l5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nb(a,s)
if(p==="*")throw H.c(P.jE(n))
if(v.leafTags[n]===true){o=H.l5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nb(a,s)},
nb:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.lO(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
l5:function(a){return J.lO(a,!1,null,!!a.$iB)},
qz:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.l5(s)
else return J.lO(s,c,null,null)},
qr:function(){if(!0===$.lN)return
$.lN=!0
H.qs()},
qs:function(){var s,r,q,p,o,n,m,l
$.kM=Object.create(null)
$.kT=Object.create(null)
H.qq()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nc.$1(o)
if(n!=null){m=H.qz(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qq:function(){var s,r,q,p,o,n,m=C.I()
m=H.cz(C.J,H.cz(C.K,H.cz(C.u,H.cz(C.u,H.cz(C.L,H.cz(C.M,H.cz(C.N(C.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.n6=new H.kP(p)
$.n_=new H.kQ(o)
$.nc=new H.kR(n)},
cz:function(a,b){return a(b)||b},
o6:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a8("Illegal RegExp pattern ("+String(n)+")",a,null))},
nf:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qk:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nd:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lR:function(a,b,c){var s=H.qC(a,b,c)
return s},
qC:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nd(b),'g'),H.qk(c))},
cK:function cK(){},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jA:function jA(a,b,c,d,e,f){var _=this
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
fJ:function fJ(a){this.a=a},
j7:function j7(a){this.a=a},
hv:function hv(a){this.a=a
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
iE:function iE(a){this.a=a},
iH:function iH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d_:function d_(a,b){this.a=a
this.$ti=b},
eO:function eO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
eJ:function eJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cx:function(a){var s,r,q,p,o
if(t.aP.b(a))return a
s=J.bU(a)
r=s.gl(a)
q=P.d3(r,null,!1,t.A)
for(p=0;p<s.gl(a);++p){o=s.h(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
b8:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cB(b,a))},
po:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.qj(a,b,c))
return b},
dd:function dd(){},
a2:function a2(){},
cc:function cc(){},
bL:function bL(){},
de:function de(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
df:function df(){},
bM:function bM(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
mi:function(a,b){var s=b.c
return s==null?b.c=H.lz(a,b.z,!0):s},
mh:function(a,b){var s=b.c
return s==null?b.c=H.e6(a,"m4",[b.z]):s},
mj:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mj(a.z)
return s===11||s===12},
or:function(a){return a.cy},
lL:function(a){return H.lA(v.typeUniverse,a,!1)},
bv:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bv(a,s,a0,a1)
if(r===s)return b
return H.mJ(a,r,!0)
case 7:s=b.z
r=H.bv(a,s,a0,a1)
if(r===s)return b
return H.lz(a,r,!0)
case 8:s=b.z
r=H.bv(a,s,a0,a1)
if(r===s)return b
return H.mI(a,r,!0)
case 9:q=b.Q
p=H.ef(a,q,a0,a1)
if(p===q)return b
return H.e6(a,b.z,p)
case 10:o=b.z
n=H.bv(a,o,a0,a1)
m=b.Q
l=H.ef(a,m,a0,a1)
if(n===o&&l===m)return b
return H.lx(a,n,l)
case 11:k=b.z
j=H.bv(a,k,a0,a1)
i=b.Q
h=H.q7(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mH(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.ef(a,g,a0,a1)
o=b.z
n=H.bv(a,o,a0,a1)
if(f===g&&n===o)return b
return H.ly(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.i0("Attempted to substitute unexpected RTI kind "+c))}},
ef:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bv(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
q8:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bv(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
q7:function(a,b,c,d){var s,r=b.a,q=H.ef(a,r,c,d),p=b.b,o=H.ef(a,p,c,d),n=b.c,m=H.q8(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.h7()
s.a=q
s.b=o
s.c=m
return s},
a:function(a,b){a[v.arrayRti]=b
return a},
qf:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.n7(s)
return a.$S()}return null},
n9:function(a,b){var s
if(H.mj(b))if(a instanceof H.bF){s=H.qf(a)
if(s!=null)return s}return H.b9(a)},
b9:function(a){var s
if(a instanceof P.R){s=a.$ti
return s!=null?s:H.lF(a)}if(Array.isArray(a))return H.kt(a)
return H.lF(J.eh(a))},
kt:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
Y:function(a){var s=a.$ti
return s!=null?s:H.lF(a)},
lF:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pw(a,s)},
pw:function(a,b){var s=a instanceof H.bF?a.__proto__.__proto__.constructor:b,r=H.p6(v.typeUniverse,s.name)
b.$ccache=r
return r},
n7:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.lA(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pv:function(a){var s,r,q,p=this
if(p===t.K)return H.ec(p,a,H.pA)
if(!H.ba(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.ec(p,a,H.pD)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.kC
else if(r===t.gR||r===t.H)q=H.pz
else if(r===t.N)q=H.pB
else q=r===t.cJ?H.kB:null
if(q!=null)return H.ec(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.qu)){p.r="$i"+s
return H.ec(p,a,H.pC)}}else if(s===7)return H.ec(p,a,H.pt)
return H.ec(p,a,H.pr)},
ec:function(a,b,c){a.b=c
return a.b(b)},
pu:function(a){var s,r=this,q=H.pq
if(!H.ba(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.pn
else if(r===t.K)q=H.pm
else{s=H.ei(r)
if(s)q=H.ps}r.a=q
return r.a(a)},
lI:function(a){var s,r=a.y
if(!H.ba(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&H.lI(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pr:function(a){var s=this
if(a==null)return H.lI(s)
return H.U(v.typeUniverse,H.n9(a,s),null,s,null)},
pt:function(a){if(a==null)return!0
return this.z.b(a)},
pC:function(a){var s,r=this
if(a==null)return H.lI(r)
s=r.r
if(a instanceof P.R)return!!a[s]
return!!J.eh(a)[s]},
pq:function(a){var s,r=this
if(a==null){s=H.ei(r)
if(s)return a}else if(r.b(a))return a
H.mU(a,r)},
ps:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mU(a,s)},
mU:function(a,b){throw H.c(H.oX(H.mA(a,H.n9(a,b),H.av(b,null))))},
mA:function(a,b,c){var s=P.ir(a),r=H.av(b==null?H.b9(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
oX:function(a){return new H.e4("TypeError: "+a)},
ad:function(a,b){return new H.e4("TypeError: "+H.mA(a,null,b))},
pA:function(a){return a!=null},
pm:function(a){if(a!=null)return a
throw H.c(H.ad(a,"Object"))},
pD:function(a){return!0},
pn:function(a){return a},
kB:function(a){return!0===a||!1===a},
mS:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ad(a,"bool"))},
rB:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ad(a,"bool"))},
rA:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ad(a,"bool?"))},
rC:function(a){if(typeof a=="number")return a
throw H.c(H.ad(a,"double"))},
rE:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ad(a,"double"))},
rD:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ad(a,"double?"))},
kC:function(a){return typeof a=="number"&&Math.floor(a)===a},
ku:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ad(a,"int"))},
rG:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ad(a,"int"))},
rF:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ad(a,"int?"))},
pz:function(a){return typeof a=="number"},
rH:function(a){if(typeof a=="number")return a
throw H.c(H.ad(a,"num"))},
rJ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ad(a,"num"))},
rI:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ad(a,"num?"))},
pB:function(a){return typeof a=="string"},
kv:function(a){if(typeof a=="string")return a
throw H.c(H.ad(a,"String"))},
rL:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ad(a,"String"))},
rK:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ad(a,"String?"))},
q3:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.av(a[q],b)
return s},
mV:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.a([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.a.R(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.av(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.av(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.av(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.av(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.av(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
av:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.av(a.z,b)
return s}if(l===7){r=a.z
s=H.av(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.av(a.z,b)+">"
if(l===9){p=H.q9(a.z)
o=a.Q
return o.length!==0?p+("<"+H.q3(o,b)+">"):p}if(l===11)return H.mV(a,b,null)
if(l===12)return H.mV(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
q9:function(a){var s,r=H.ng(a)
if(r!=null)return r
s="minified:"+a
return s},
mK:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
p6:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.lA(a,b,!1)
else if(typeof m=="number"){s=m
r=H.e7(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.e6(a,b,q)
n[b]=o
return o}else return m},
p4:function(a,b){return H.mR(a.tR,b)},
p3:function(a,b){return H.mR(a.eT,b)},
lA:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mF(H.mD(a,null,b,c))
r.set(b,s)
return s},
hJ:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mF(H.mD(a,b,c,!0))
q.set(c,r)
return r},
p5:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.lx(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bu:function(a,b){b.a=H.pu
b.b=H.pv
return b},
e7:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aD(null,null)
s.y=b
s.cy=c
r=H.bu(a,s)
a.eC.set(c,r)
return r},
mJ:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.p1(a,b,r,c)
a.eC.set(r,s)
return s},
p1:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ba(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aD(null,null)
q.y=6
q.z=b
q.cy=c
return H.bu(a,q)},
lz:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.p0(a,b,r,c)
a.eC.set(r,s)
return s},
p0:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.ba(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ei(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ei(q.z))return q
else return H.mi(a,b)}}p=new H.aD(null,null)
p.y=7
p.z=b
p.cy=c
return H.bu(a,p)},
mI:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.oZ(a,b,r,c)
a.eC.set(r,s)
return s},
oZ:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ba(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.e6(a,"m4",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.aD(null,null)
q.y=8
q.z=b
q.cy=c
return H.bu(a,q)},
p2:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aD(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bu(a,s)
a.eC.set(q,r)
return r},
hI:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
oY:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
e6:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hI(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aD(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bu(a,r)
a.eC.set(p,q)
return q},
lx:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hI(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aD(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bu(a,o)
a.eC.set(q,n)
return n},
mH:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hI(m)
if(j>0){s=l>0?",":""
r=H.hI(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.oY(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aD(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bu(a,o)
a.eC.set(q,r)
return r},
ly:function(a,b,c,d){var s,r=b.cy+("<"+H.hI(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.p_(a,b,c,r,d)
a.eC.set(r,s)
return s},
p_:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bv(a,b,r,0)
m=H.ef(a,c,r,0)
return H.ly(a,n,m,c!==m)}}l=new H.aD(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bu(a,l)},
mD:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mF:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.oR(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mE(a,r,h,g,!1)
else if(q===46)r=H.mE(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bt(a.u,a.e,g.pop()))
break
case 94:g.push(H.p2(a.u,g.pop()))
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
H.lw(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.e6(p,n,o))
else{m=H.bt(p,a.e,n)
switch(m.y){case 11:g.push(H.ly(p,m,o,a.n))
break
default:g.push(H.lx(p,m,o))
break}}break
case 38:H.oS(a,g)
break
case 42:p=a.u
g.push(H.mJ(p,H.bt(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.lz(p,H.bt(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.mI(p,H.bt(p,a.e,g.pop()),a.n))
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
H.lw(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.mH(p,H.bt(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.lw(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.oU(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bt(a.u,a.e,i)},
oR:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mE:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mK(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.or(o)+'"')
d.push(H.hJ(s,o,n))}else d.push(p)
return m},
oS:function(a,b){var s=b.pop()
if(0===s){b.push(H.e7(a.u,1,"0&"))
return}if(1===s){b.push(H.e7(a.u,4,"1&"))
return}throw H.c(P.i0("Unexpected extended operation "+H.z(s)))},
bt:function(a,b,c){if(typeof c=="string")return H.e6(a,c,a.sEA)
else if(typeof c=="number")return H.oT(a,b,c)
else return c},
lw:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bt(a,b,c[s])},
oU:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bt(a,b,c[s])},
oT:function(a,b,c){var s,r,q=b.y
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
if(p===6){s=H.mi(a,d)
return H.U(a,b,c,s,e)}if(r===8){if(!H.U(a,b.z,c,d,e))return!1
return H.U(a,H.mh(a,b),c,d,e)}if(r===7){s=H.U(a,t.P,c,d,e)
return s&&H.U(a,b.z,c,d,e)}if(p===8){if(H.U(a,b,c,d.z,e))return!0
return H.U(a,b,c,H.mh(a,d),e)}if(p===7){s=H.U(a,b,c,t.P,e)
return s||H.U(a,b,c,d.z,e)}if(q)return!1
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
if(!H.U(a,k,c,j,e)||!H.U(a,j,e,k,c))return!1}return H.mW(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.mW(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.py(a,b,c,d,e)}return!1},
mW:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
py:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.U(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mK(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.U(a,H.hJ(a,b,l[p]),c,r[p],e))return!1
return!0},
ei:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.ba(a))if(r!==7)if(!(r===6&&H.ei(a.z)))s=r===8&&H.ei(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qu:function(a){var s
if(!H.ba(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
ba:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
mR:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aD:function aD(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
h7:function h7(){this.c=this.b=this.a=null},
h3:function h3(){},
e4:function e4(a){this.a=a},
ng:function(a){return v.mangledGlobalNames[a]},
qA:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kN:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.lN==null){H.qr()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jE("Return interceptor for "+H.z(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.k5
if(o==null)o=$.k5=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.qx(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){o=$.k5
if(o==null)o=$.k5=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
o3:function(a,b){if(a<0||a>4294967295)throw H.c(P.ab(a,0,4294967295,"length",null))
return J.o4(new Array(a),b)},
li:function(a,b){if(a<0)throw H.c(P.bX("Length must be a non-negative integer: "+a))
return H.a(new Array(a),b.M("w<0>"))},
o4:function(a,b){return J.lj(H.a(a,b.M("w<0>")))},
lj:function(a){a.fixed$length=Array
return a},
o5:function(a,b){return J.nG(a,b)},
eh:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cW.prototype
return J.eI.prototype}if(typeof a=="string")return J.bi.prototype
if(a==null)return J.cX.prototype
if(typeof a=="boolean")return J.eH.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.R)return a
return J.kN(a)},
bU:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.R)return a
return J.kN(a)},
hW:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.R)return a
return J.kN(a)},
n5:function(a){if(typeof a=="number")return J.c8.prototype
if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bQ.prototype
return a},
qm:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bQ.prototype
return a},
aQ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.R)return a
return J.kN(a)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.eh(a).q(a,b)},
lT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n5(a).K(a,b)},
lU:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.na(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bU(a).h(a,b)},
lb:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.na(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.hW(a).m(a,b,c)},
nE:function(a,b,c){return J.aQ(a).h6(a,b,c)},
nF:function(a,b,c,d){return J.aQ(a).hs(a,b,c,d)},
nG:function(a,b){return J.n5(a).aj(a,b)},
hZ:function(a,b){return J.hW(a).L(a,b)},
el:function(a,b){return J.hW(a).H(a,b)},
nH:function(a){return J.aQ(a).gai(a)},
nI:function(a){return J.aQ(a).gbD(a)},
nJ:function(a){return J.aQ(a).gdG(a)},
lc:function(a){return J.eh(a).gI(a)},
aI:function(a){return J.hW(a).gS(a)},
aR:function(a){return J.bU(a).gl(a)},
lV:function(a){return J.hW(a).ii(a)},
nK:function(a,b){return J.aQ(a).im(a,b)},
nL:function(a){return J.qm(a).iv(a)},
cE:function(a){return J.eh(a).i(a)},
b:function b(){},
eH:function eH(){},
cX:function cX(){},
bj:function bj(){},
f4:function f4(){},
bQ:function bQ(){},
aX:function aX(){},
w:function w(a){this.$ti=a},
iD:function iD(a){this.$ti=a},
ao:function ao(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c8:function c8(){},
cW:function cW(){},
eI:function eI(){},
bi:function bi(){}},P={
oI:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qb()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cA(new P.k1(q),1)).observe(s,{childList:true})
return new P.k0(q,s,r)}else if(self.setImmediate!=null)return P.qc()
return P.qd()},
oJ:function(a){self.scheduleImmediate(H.cA(new P.k2(a),0))},
oK:function(a){self.setImmediate(H.cA(new P.k3(a),0))},
oL:function(a){P.lq(C.m,a)},
lq:function(a,b){var s=C.c.a6(a.a,1000)
return P.oV(s<0?0:s,b)},
mn:function(a,b){var s=C.c.a6(a.a,1000)
return P.oW(s<0?0:s,b)},
oV:function(a,b){var s=new P.e3()
s.eN(a,b)
return s},
oW:function(a,b){var s=new P.e3()
s.eO(a,b)
return s},
ry:function(a){return new P.cv(a,1)},
oO:function(){return C.a5},
oP:function(a){return new P.cv(a,3)},
pF:function(a,b){return new P.e0(a,b.M("e0<0>"))},
q0:function(){var s,r
for(s=$.cy;s!=null;s=$.cy){$.ee=null
r=s.b
$.cy=r
if(r==null)$.ed=null
s.a.$0()}},
q6:function(){$.lG=!0
try{P.q0()}finally{$.ee=null
$.lG=!1
if($.cy!=null)$.lS().$1(P.n0())}},
q4:function(a){var s=new P.fR(a),r=$.ed
if(r==null){$.cy=$.ed=s
if(!$.lG)$.lS().$1(P.n0())}else $.ed=r.b=s},
q5:function(a){var s,r,q,p=$.cy
if(p==null){P.q4(a)
$.ee=$.ed
return}s=new P.fR(a)
r=$.ee
if(r==null){s.b=p
$.cy=$.ee=s}else{q=r.b
s.b=q
$.ee=r.b=s
if(q==null)$.ed=s}},
mm:function(a,b){var s=$.aP
if(s===C.f)return P.lq(a,b)
return P.lq(a,s.hy(b))},
oA:function(a,b){var s=$.aP
if(s===C.f)return P.mn(a,b)
return P.mn(a,s.dC(b,t.aF))},
mX:function(a,b,c,d,e){P.q5(new P.kF(d,e))},
q1:function(a,b,c,d){var s,r=$.aP
if(r===c)return d.$0()
$.aP=c
s=r
try{r=d.$0()
return r}finally{$.aP=s}},
q2:function(a,b,c,d,e){var s,r=$.aP
if(r===c)return d.$1(e)
$.aP=c
s=r
try{r=d.$1(e)
return r}finally{$.aP=s}},
k1:function k1(a){this.a=a},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
e3:function e3(){this.c=0},
kk:function kk(a,b){this.a=a
this.b=b},
kj:function kj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cv:function cv(a,b){this.a=a
this.b=b},
bS:function bS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
e0:function e0(a,b){this.a=a
this.$ti=b},
fR:function fR(a){this.a=a
this.b=null},
ci:function ci(){},
fm:function fm(){},
kr:function kr(){},
kF:function kF(a,b){this.a=a
this.b=b},
k8:function k8(){},
k9:function k9(a,b){this.a=a
this.b=b},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
o7:function(a,b){return new H.Z(a.M("@<0>").bh(b).M("Z<1,2>"))},
o8:function(a,b,c){return H.ql(a,new H.Z(b.M("@<0>").bh(c).M("Z<1,2>")))},
X:function(a,b){return new H.Z(a.M("@<0>").bh(b).M("Z<1,2>"))},
d0:function(a){return new P.dP(a.M("dP<0>"))},
lv:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
oQ:function(a,b){var s=new P.dQ(a,b)
s.c=a.e
return s},
o1:function(a,b,c){var s,r
if(P.lH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.a([],t.s)
$.am.push(a)
try{P.pE(a,s)}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}r=P.mk(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
lh:function(a,b,c){var s,r
if(P.lH(a))return b+"..."+c
s=new P.a0(b)
$.am.push(a)
try{r=s
r.a=P.mk(r.a,a,", ")}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
lH:function(a){var s,r
for(s=$.am.length,r=0;r<s;++r)if(a===$.am[r])return!0
return!1},
pE:function(a,b){var s,r,q,p,o,n,m,l=a.gS(a),k=0,j=0
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
o9:function(a,b,c){var s=P.o7(b,c)
a.H(0,new P.iI(s,b,c))
return s},
m6:function(a,b){var s,r,q=P.d0(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
ln:function(a){var s,r={}
if(P.lH(a))return"{...}"
s=new P.a0("")
try{$.am.push(a)
s.a+="{"
r.a=!0
J.el(a,new P.iM(r,s))
s.a+="}"}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dP:function dP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k7:function k7(a){this.a=a
this.c=this.b=null},
dQ:function dQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cV:function cV(){},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(){},
k:function k(){},
d5:function d5(){},
iM:function iM(a,b){this.a=a
this.b=b},
M:function M(){},
hK:function hK(){},
d6:function d6(){},
cp:function cp(a,b){this.a=a
this.$ti=b},
dm:function dm(){},
dX:function dX(){},
dR:function dR(){},
e8:function e8(){},
ea:function ea(){},
oD:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.oE(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
oE:function(a,b,c,d){var s=a?$.nw():$.nv()
if(s==null)return null
if(0===c&&d===b.length)return P.mt(s,b)
return P.mt(s,b.subarray(c,P.bn(c,d,b.length)))},
mt:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.an(r)}return null},
lX:function(a,b,c,d,e,f){if(C.c.bu(f,4)!==0)throw H.c(P.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a8("Invalid base64 padding, more than two '=' characters",a,b))},
pl:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
pk:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.bU(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
jO:function jO(){},
jN:function jN(){},
i4:function i4(){},
i5:function i5(){},
es:function es(){},
eu:function eu(){},
io:function io(){},
iB:function iB(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
iA:function iA(a){this.a=a},
jL:function jL(){},
jP:function jP(){},
kp:function kp(a){this.b=0
this.c=a},
jM:function jM(a){this.a=a},
ko:function ko(a){this.a=a
this.b=16
this.c=0},
kS:function(a,b){var s=H.mb(a,b)
if(s!=null)return s
throw H.c(P.a8(a,null,null))},
nZ:function(a){if(a instanceof H.bF)return a.i(0)
return"Instance of '"+H.dk(a)+"'"},
d3:function(a,b,c,d){var s,r=c?J.li(a,d):J.o3(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iJ:function(a,b,c){var s,r=H.a([],c.M("w<0>"))
for(s=J.aI(a);s.u();)r.push(s.gC(s))
if(b)return r
return J.lj(r)},
oa:function(a,b,c){var s,r,q=J.li(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
fo:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.bn(b,c,r)
return H.mc(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.oo(a,b,P.bn(b,c,a.length))
return P.ox(a,b,c)},
ox:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.ab(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.ab(c,b,a.length,o,o))
r=J.aI(a)
for(q=0;q<b;++q)if(!r.u())throw H.c(P.ab(b,0,q,o,o))
p=[]
if(s)for(;r.u();)p.push(r.gC(r))
else for(q=b;q<c;++q){if(!r.u())throw H.c(P.ab(c,b,q,o,o))
p.push(r.gC(r))}return H.mc(p)},
op:function(a){return new H.eJ(a,H.o6(a,!1,!0,!1,!1,!1))},
mk:function(a,b,c){var s=J.aI(b)
if(!s.u())return a
if(c.length===0){do a+=H.z(s.gC(s))
while(s.u())}else{a+=H.z(s.gC(s))
for(;s.u();)a=a+c+H.z(s.gC(s))}return a},
mq:function(){var s=H.of()
if(s!=null)return P.oC(s)
throw H.c(P.D("'Uri.base' is not supported"))},
kn:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.nC().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghO().cp(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aC(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
nW:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
nX:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ex:function(a){if(a>=10)return""+a
return"0"+a},
m1:function(a){return new P.bG(1000*a)},
ir:function(a){if(typeof a=="number"||H.kB(a)||null==a)return J.cE(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nZ(a)},
i0:function(a){return new P.eo(a)},
bX:function(a){return new P.aJ(!1,null,null,a)},
fa:function(a,b){return new P.dl(null,null,!0,a,b,"Value not in range")},
ab:function(a,b,c,d,e){return new P.dl(b,c,!0,a,d,"Invalid value")},
bn:function(a,b,c){if(0>a||a>c)throw H.c(P.ab(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ab(b,a,c,"end",null))
return b}return c},
md:function(a,b){if(a<0)throw H.c(P.ab(a,0,null,b,null))
return a},
Q:function(a,b,c,d,e){var s=e==null?J.aR(b):e
return new P.eF(s,!0,a,c,"Index out of range")},
D:function(a){return new P.fL(a)},
jE:function(a){return new P.fI(a)},
lp:function(a){return new P.ch(a)},
aM:function(a){return new P.et(a)},
f:function(a){return new P.h4(a)},
a8:function(a,b,c){return new P.ix(a,b,c)},
lQ:function(a){H.qA(a)},
oC:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.F(a5,4)^58)*3|C.a.F(a5,0)^100|C.a.F(a5,1)^97|C.a.F(a5,2)^116|C.a.F(a5,3)^97)>>>0
if(s===0)return P.mp(a4<a4?C.a.t(a5,0,a4):a5,5,a3).gen()
else if(s===32)return P.mp(C.a.t(a5,5,a4),0,a3).gen()}r=P.d3(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.mY(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.mY(a5,0,q,20,r)===20)r[7]=q
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
a5=C.a.b9(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.aa(a5,"http",0)){if(i&&o+3===n&&C.a.aa(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.b9(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.aa(a5,"https",0)){if(i&&o+4===n&&C.a.aa(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.b9(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.t(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.hp(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.pe(a5,0,q)
else{if(q===0)P.cw(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.pf(a5,d,p-1):""
b=P.pb(a5,p,o,!1)
i=o+1
if(i<n){a=H.mb(C.a.t(a5,i,n),a3)
a0=P.pd(a==null?H.h(P.a8("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pc(a5,n,m,a3,j,b!=null)
a2=m<l?P.lC(a5,m+1,l,a3):a3
return new P.bT(j,c,b,a0,a1,a2,l<a4?P.pa(a5,l+1,a4):a3)},
ms:function(a){var s=t.N
return C.b.hV(H.a(a.split("&"),t.s),P.X(s,s),new P.jJ(C.e))},
oB:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jG(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.Y(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.kS(C.a.t(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.kS(C.a.t(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
mr:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.jH(a),c=new P.jI(d,a)
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
l=C.b.gay(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.oB(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.b_(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
mL:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cw:function(a,b,c){throw H.c(P.a8(c,a,b))},
pd:function(a,b){if(a!=null&&a===P.mL(b))return null
return a},
pb:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.Y(a,b)===91){s=c-1
if(C.a.Y(a,s)!==93)P.cw(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.p8(a,r,s)
if(q<s){p=q+1
o=P.mQ(a,C.a.aa(a,"25",p)?q+3:p,s,"%25")}else o=""
P.mr(a,r,q)
return C.a.t(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.Y(a,n)===58){q=C.a.bG(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.mQ(a,C.a.aa(a,"25",p)?q+3:p,c,"%25")}else o=""
P.mr(a,b,q)
return"["+C.a.t(a,b,q)+o+"]"}return P.ph(a,b,c)},
p8:function(a,b,c){var s=C.a.bG(a,"%",b)
return s>=b&&s<c?s:c},
mQ:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a0(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.Y(a,s)
if(p===37){o=P.lD(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a0("")
m=i.a+=C.a.t(a,r,s)
if(n)o=C.a.t(a,s,s+3)
else if(o==="%")P.cw(a,s,"ZoneID should not contain % anymore")
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
n.a+=P.lB(p)
s+=k
r=s}}}if(i==null)return C.a.t(a,b,c)
if(r<c)i.a+=C.a.t(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
ph:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.Y(a,s)
if(o===37){n=P.lD(a,s,!0)
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
if(m)P.cw(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.Y(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a0("")
m=q}else m=q
m.a+=l
m.a+=P.lB(o)
s+=j
r=s}}}}if(q==null)return C.a.t(a,b,c)
if(r<c){l=C.a.t(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pe:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.mN(C.a.F(a,b)))P.cw(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.F(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cw(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.t(a,b,c)
return P.p7(r?a.toLowerCase():a)},
p7:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pf:function(a,b,c){return P.e9(a,b,c,C.Y,!1)},
pc:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.e9(a,b,c,C.y,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a2(s,"/"))s="/"+s
return P.pg(s,e,f)},
pg:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a2(a,"/"))return P.pi(a,!s||c)
return P.pj(a)},
lC:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bX("Both query and queryParameters specified"))
return P.e9(a,b,c,C.k,!0)}if(d==null)return null
s=new P.a0("")
r.a=""
d.H(0,new P.kl(new P.km(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
pa:function(a,b,c){return P.e9(a,b,c,C.k,!0)},
lD:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.Y(a,b+1)
r=C.a.Y(a,n)
q=H.kO(s)
p=H.kO(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.b_(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aC(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.t(a,b,b+3).toUpperCase()
return null},
lB:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.F(k,a>>>4)
s[2]=C.a.F(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.hi(a,6*q)&63|r
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
e9:function(a,b,c,d,e){var s=P.mP(a,b,c,d,e)
return s==null?C.a.t(a,b,c):s},
mP:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.Y(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.lD(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cw(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.Y(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.lB(o)}}if(p==null){p=new P.a0("")
n=p}else n=p
n.a+=C.a.t(a,q,r)
n.a+=H.z(m)
if(typeof l!=="number")return H.n8(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.t(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
mO:function(a){if(C.a.a2(a,"."))return!0
return C.a.dY(a,"/.")!==-1},
pj:function(a){var s,r,q,p,o,n,m
if(!P.mO(a))return a
s=H.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.G(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.j(s,"/")},
pi:function(a,b){var s,r,q,p,o,n
if(!P.mO(a))return!b?P.mM(a):a
s=H.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gay(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gay(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.mM(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.j(s,"/")},
mM:function(a){var s,r,q,p=a.length
if(p>=2&&P.mN(C.a.F(a,0)))for(s=1;s<p;++s){r=C.a.F(a,s)
if(r===58)return C.a.t(a,0,s)+"%3A"+C.a.ad(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
p9:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.F(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bX("Invalid URL encoding"))}}return s},
lE:function(a,b,c,d,e){var s,r,q,p,o=b
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
p.push(P.p9(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.a4.cp(p)},
mN:function(a){var s=a|32
return 97<=s&&s<=122},
mp:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.a([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.F(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a8(k,a,r))}}if(q<0&&r>b)throw H.c(P.a8(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.F(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gay(j)
if(p!==44||r!==n+7||!C.a.aa(a,"base64",n+1))throw H.c(P.a8("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.H.i1(0,a,m,s)
else{l=P.mP(a,m,s,C.k,!0)
if(l!=null)a=C.a.b9(a,m,s,l)}return new P.jF(a,j,c)},
pp:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.a(new Array(22),t.gN)
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
mY:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.nD()
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
ij:function ij(){},
ik:function ik(){},
L:function L(){},
eo:function eo(a){this.a=a},
fB:function fB(){},
f_:function f_(){},
aJ:function aJ(a,b,c,d){var _=this
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
fL:function fL(a){this.a=a},
fI:function fI(a){this.a=a},
ch:function ch(a){this.a=a},
et:function et(a){this.a=a},
f2:function f2(){},
dr:function dr(){},
ev:function ev(a){this.a=a},
h4:function h4(a){this.a=a},
ix:function ix(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(){},
eG:function eG(){},
aj:function aj(){},
R:function R(){},
a0:function a0(a){this.a=a},
jJ:function jJ(a){this.a=a},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
jI:function jI(a,b){this.a=a
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
km:function km(a,b){this.a=a
this.b=b},
kl:function kl(a){this.a=a},
jF:function jF(a,b,c){this.a=a
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
qh:function(a){var s,r,q,p
if(t.x.b(a)){s=J.nJ(a)
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
qg:function(a){if(a instanceof P.e5)return{data:a.a,height:a.b,width:a.c}
return a},
bw:function(a){var s,r,q,p,o
if(a==null)return null
s=P.X(t.N,t.A)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
mT:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kB(a))return a
if(t.f.b(a))return P.n1(a)
if(t.m.b(a)){s=[]
J.el(a,new P.kw(s))
a=s}return a},
n1:function(a){var s={}
J.el(a,new P.kG(s))
return s},
ke:function ke(){},
kg:function kg(a,b){this.a=a
this.b=b},
kh:function kh(a,b){this.a=a
this.b=b},
e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},
kw:function kw(a){this.a=a},
kG:function kG(a){this.a=a},
kf:function kf(a,b){this.a=a
this.b=b},
eB:function eB(a,b){this.a=a
this.b=b},
iv:function iv(){},
iw:function iw(){},
hn:function hn(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aY:function aY(){},
eM:function eM(){},
b1:function b1(){},
f0:function f0(){},
j8:function j8(){},
cg:function cg(){},
fn:function fn(){},
o:function o(){},
b3:function b3(){},
fA:function fA(){},
hb:function hb(){},
hc:function hc(){},
hj:function hj(){},
hk:function hk(){},
hx:function hx(){},
hy:function hy(){},
hG:function hG(){},
hH:function hH(){},
i2:function i2(){},
eq:function eq(){},
i3:function i3(a){this.a=a},
er:function er(){},
bc:function bc(){},
f1:function f1(){},
fT:function fT(){},
cf:function cf(){},
fi:function fi(){},
ht:function ht(){},
hu:function hu(){}},W={
lW:function(){var s=document.createElement("a")
s.toString
return s},
ld:function(){var s=document.createElement("canvas")
s.toString
return s},
nY:function(a,b,c){var s=document.body
s.toString
s=new H.b7(new W.a7(C.p.ak(s,a,b,c)),new W.il(),t.ac.M("b7<k.E>"))
return t.h.a(s.gaQ(s))},
im:function(a){return"wheel"},
cQ:function(a){var s,r,q="element tag unavailable"
try{s=J.aQ(a)
s.gel(a)
q=s.gel(a)}catch(r){H.an(r)}return q},
o0:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.an(s)}return q},
k6:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mC:function(a,b,c,d){var s=W.k6(W.k6(W.k6(W.k6(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a5:function(a,b,c,d){var s=new W.dN(a,b,c==null?null:W.mZ(new W.k4(c),t.aD),!1)
s.hp()
return s},
mB:function(a){var s=W.lW(),r=window
s=new W.cu(new W.kb(s,r.location))
s.eH(a)
return s},
oM:function(a,b,c,d){return!0},
oN:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
mG:function(){var s=t.N,r=P.m6(C.z,s),q=H.a(["TEMPLATE"],t.s)
s=new W.hB(r,P.d0(s),P.d0(s),P.d0(s),null)
s.eM(null,new H.d7(C.z,new W.ki(),t.dv),q,null)
return s},
mZ:function(a,b){var s=$.aP
if(s===C.f)return a
return s.dC(a,b)},
v:function v(){},
i_:function i_(){},
em:function em(){},
en:function en(){},
bY:function bY(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
cI:function cI(){},
aK:function aK(){},
ib:function ib(){},
K:function K(){},
cM:function cM(){},
ic:function ic(){},
ax:function ax(){},
aW:function aW(){},
id:function id(){},
ie:function ie(){},
ig:function ig(){},
be:function be(){},
ih:function ih(){},
cN:function cN(){},
cO:function cO(){},
ey:function ey(){},
ii:function ii(){},
fU:function fU(a,b){this.a=a
this.b=b},
E:function E(){},
il:function il(){},
m:function m(){},
e:function e(){},
ai:function ai(){},
c3:function c3(){},
eA:function eA(){},
eC:function eC(){},
ay:function ay(){},
iz:function iz(){},
bI:function bI(){},
bJ:function bJ(){},
c5:function c5(){},
c7:function c7(){},
bK:function bK(){},
iK:function iK(){},
j0:function j0(){},
c9:function c9(){},
eS:function eS(){},
j1:function j1(a){this.a=a},
eT:function eT(){},
j2:function j2(a){this.a=a},
aA:function aA(){},
eU:function eU(){},
ar:function ar(){},
a7:function a7(a){this.a=a},
t:function t(){},
dg:function dg(){},
aB:function aB(){},
f6:function f6(){},
fc:function fc(){},
jf:function jf(a){this.a=a},
fe:function fe(){},
as:function as(){},
fg:function fg(){},
aE:function aE(){},
fh:function fh(){},
aF:function aF(){},
fl:function fl(){},
jo:function jo(a){this.a=a},
ak:function ak(){},
bp:function bp(){},
ds:function ds(){},
fp:function fp(){},
fq:function fq(){},
cj:function cj(){},
at:function at(){},
ag:function ag(){},
fs:function fs(){},
ft:function ft(){},
ju:function ju(){},
au:function au(){},
bP:function bP(){},
fz:function fz(){},
jz:function jz(){},
b5:function b5(){},
jK:function jK(){},
fO:function fO(){},
bs:function bs(){},
cs:function cs(){},
ct:function ct(){},
fV:function fV(){},
dM:function dM(){},
h8:function h8(){},
dS:function dS(){},
hs:function hs(){},
hz:function hz(){},
fS:function fS(){},
h1:function h1(a){this.a=a},
lg:function lg(a,b){this.a=a
this.$ti=b},
dN:function dN(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
k4:function k4(a){this.a=a},
lu:function lu(a){this.$ti=a},
cu:function cu(a){this.a=a},
P:function P(){},
dh:function dh(a){this.a=a},
j5:function j5(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
dY:function dY(){},
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
cS:function cS(a,b){var _=this
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
dZ:function dZ(){},
e_:function e_(){},
hq:function hq(){},
hr:function hr(){},
hw:function hw(){},
hC:function hC(){},
hD:function hD(){},
e1:function e1(){},
e2:function e2(){},
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
S:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.f("The given low and high character strings for a Range must have one and only one characters."))
s=C.a.F(a,0)
r=C.a.F(b,0)
if(s>r){q=r
r=s
s=q}return new K.f9(s,r)},
aS:function aS(){},
cU:function cU(){},
af:function af(a){this.a=a},
f9:function f9(a,b){this.a=a
this.b=b},
u:function u(a){this.a=a}},L={
jx:function(){var s=t.N
return new L.jw(P.X(s,t.dl),P.X(s,t.f7),P.d0(s))},
fj:function fj(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fx:function fx(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a,b){this.b=a
this.c=b},
jw:function jw(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dv:function dv(a,b){this.b=a
this.c=!1
this.a=b}},O={
le:function(a){return new O.ap(H.a([],a.M("w<0>")),a.M("ap<0>"))},
ap:function ap(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
dc:function dc(a){this.a=a
this.b=null},
eR:function(a,b){return new O.da(new V.aU(0,0,0),a,b,new A.aV(!1,!1,!1))},
d8:function d8(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
iT:function iT(a,b){this.a=a
this.b=b},
iU:function iU(){},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(){},
iX:function iX(a,b){this.a=a
this.b=b},
iY:function iY(){},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(){},
iN:function iN(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
d9:function d9(){},
iO:function iO(a,b,c){var _=this
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
iQ:function iQ(a){this.b=a},
iR:function iR(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iS:function iS(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
dt:function dt(){}},E={
my:function(){var s=window.navigator.vendor
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
mz:function(){var s=window.navigator.appVersion
s.toString
if(C.a.B(s,"Win"))return C.a0
if(C.a.B(s,"Mac"))return C.A
if(C.a.B(s,"Linux"))return C.a1
return C.a2},
oq:function(a,b){var s
Date.now()
s=t.fA
s=new E.jb(a,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1),new O.dc(H.a([],s)),new O.dc(H.a([],s)),new O.dc(H.a([],s)),H.a([null],t.bc),P.X(t.N,t.fg))
s.eF(a,b)
return s},
oz:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.ml(a,!0,!0,!0,!1)
s=W.ld()
r=s.style
r.width="100%"
r.height="100%"
J.nI(a).n(0,s)
return E.ml(s,!0,!0,!0,!1)},
ml:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.A,l=t.gW.a(C.i.cW(a,"webgl2",P.o8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.oq(l,a)
m=H.ku(l.getParameter(3379))
H.ku(l.getParameter(34076))
r=H.a([],t.g9)
q=$.ip
p=new X.fN(a,r,(q==null?$.ip=new E.h2(E.my(),E.mz()):q).a===C.q?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.a5(o,"contextmenu",p.gfq(),!1))
r.push(W.a5(a,"focus",p.gfz(),!1))
r.push(W.a5(a,"blur",p.gfk(),!1))
r.push(W.a5(o,"keyup",p.gfD(),!1))
r.push(W.a5(o,"keydown",p.gfB(),!1))
r.push(W.a5(a,"mousedown",p.gfH(),!1))
r.push(W.a5(a,"mouseup",p.gfL(),!1))
r.push(W.a5(a,n,p.gfJ(),!1))
W.im(a)
W.im(a)
r.push(W.a5(a,W.im(a),p.gfN(),!1))
r.push(W.a5(o,n,p.gft(),!1))
r.push(W.a5(o,"mouseup",p.gfv(),!1))
r.push(W.a5(o,"pointerlockchange",p.gfP(),!1))
r.push(W.a5(a,"touchstart",p.gh1(),!1))
r.push(W.a5(a,"touchend",p.gfY(),!1))
r.push(W.a5(a,"touchmove",p.gh_(),!1))
m=new E.fw(a,s,new T.jr(l,m),p,new P.a_(Date.now(),!1))
m.dj()
return m},
i6:function i6(){},
bH:function bH(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
c_:function c_(a){this.b=a},
cd:function cd(a){this.b=a},
h2:function h2(a,b){this.a=a
this.b=b},
jb:function jb(a,b,c,d,e,f,g,h){var _=this
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
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
fw:function fw(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.Q=null
_.cx=!1
_.cy=e
_.db=0},
jt:function jt(a){this.a=a}},Z={
lt:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cx(c)),35044)
a.bindBuffer(b,null)
return new Z.fP(b,s)},
aH:function(a){return new Z.br(a)},
fP:function fP(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
k_:function k_(a){this.a=a},
cG:function cG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a){this.a=a}},D={
O:function(){return new D.c2()},
i8:function i8(){},
c2:function c2(){var _=this
_.c=_.b=_.a=null
_.d=0},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
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
cZ:function cZ(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={cH:function cH(a,b){this.a=a
this.b=b},eL:function eL(a,b){this.a=a
this.b=b},iF:function iF(a,b){this.c=a
this.d=b},d4:function d4(a,b,c){this.x=a
this.c=b
this.d=c},iL:function iL(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},ca:function ca(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},j3:function j3(a,b,c,d,e){var _=this
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
_.d=d},jy:function jy(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fN:function fN(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
o_:function(a){var s=new V.aw(0,0,0,1),r=$.mg
if(r==null){r=V.mf(0,0,1,1)
$.mg=r}return new X.iy(s,r)},
iy:function iy(a,b){this.a=a
this.r=b
this.x=null},
f3:function f3(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jq:function jq(){}},V={
hX:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
qH:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bu(a-b,s)
return(a<0?a+s:a)+b},
C:function(a,b,c){$.F().toString
return C.a.an(C.d.cS(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cC:function(a,b,c){var s,r,q,p,o,n,m,l=H.a([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.F().toString
n=C.a.an(C.d.cS(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.an(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
lP:function(a){return C.d.it(Math.pow(2,C.d.cD(Math.log(a)/Math.log(2))))},
aN:function(){var s=$.m9
return s==null?$.m9=V.b0(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
b0:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m8:function(a,b,c){var s=c.D(),r=b.aI(s).D(),q=s.aI(r),p=new V.x(a.a,a.b,a.c)
return V.b0(r.a,q.a,s.a,r.bd(0).a8(p),r.b,q.b,s.b,q.bd(0).a8(p),r.c,q.c,s.c,s.bd(0).a8(p),0,0,0,1)},
lo:function(){var s=$.b2
return s==null?$.b2=new V.N(0,0,0):s},
mf:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.fb(a,b,c,d)},
dK:function(){var s=$.mw
return s==null?$.mw=new V.x(0,0,0):s},
oG:function(){var s=$.jQ
return s==null?$.jQ=new V.x(-1,0,0):s},
ls:function(){var s=$.jR
return s==null?$.jR=new V.x(0,1,0):s},
dJ:function(){var s=$.jS
return s==null?$.jS=new V.x(0,0,1):s},
oF:function(a,b,c){return new V.x(a,b,c)},
oH:function(){var s=$.mx
return s==null?$.mx=new V.bq(0,0,0,0):s},
aU:function aU(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iq:function iq(){},
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
a6:function a6(a,b){this.a=a
this.b=b},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qB:function(a){P.oA(C.R,new V.l6(a))},
os:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a5(n,"scroll",new V.jl(s),!1)
return new V.jj(o)},
aL:function aL(){},
l6:function l6(a){this.a=a},
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
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
ja:function ja(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jj:function jj(a){this.a=a
this.b=null},
jl:function jl(a){this.a=a},
jk:function jk(a){this.a=a},
jm:function jm(a){this.a=a}},U={
ia:function(){return new U.i9()},
m0:function(a){var s=V.aN(),r=new U.cJ(s)
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
cJ:function cJ(a){this.a=a
this.b=null},
c4:function c4(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a1:function a1(){},
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
_.y=null},
qy:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="testCanvas",a0=null,a1="modifiers",a2=V.os("Test 018"),a3=W.ld()
a3.className="pageLargeCanvas"
a3.id=a
a2.a.appendChild(a3).toString
s=t.s
a2.du(H.a(["A test of the Material Lighting shader where a diffuse texture and ","inverse diffuse texture are used. Grass is only shown in the dark. ","Dirt is shown where the directional light is shining."],s))
a2.hr(H.a(["shapes"],s))
a2.du(H.a(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.oz(r,!0,!0,!0,!1)
p=t.f4
o=O.le(p)
n=new E.bH(o)
o.bv(n.gi2(),n.gi5())
n.sac(0,a0)
n.sbq(a0)
n.sac(0,F.ne(8,8))
o=new U.c4(V.aN(),H.a([],t.eJ))
o.bv(o.gfc(),o.gfU())
m=q.x
l=U.ia()
k=U.ia()
j=$.bR
if(j==null)j=$.bR=new V.a6(0,0)
j=new U.dH(l,k,new X.a9(!1,!1,!1),j,V.aN())
l.scV(0,!0)
l.scG(6.283185307179586)
l.scI(0)
l.sZ(0,0)
l.scH(100)
l.sa1(0)
l.scr(0.5)
i=j.gaY()
l.gv().n(0,i)
k.scV(0,!0)
k.scG(6.283185307179586)
k.scI(0)
k.sZ(0,0)
k.scH(100)
k.sa1(0)
k.scr(0.5)
k.gv().n(0,i)
l=new X.a9(!1,!1,!1)
if(!j.d.q(0,l)){h=j.d
j.d=l
j.T(new D.H(a1,h,l))}j.bm(m)
o.n(0,j)
U.ia()
if($.bR==null)$.bR=new V.a6(0,0)
V.aN()
l=U.ia()
k=$.bR
if(k==null)k=$.bR=new V.a6(0,0)
k=new U.dG(l,new X.a9(!1,!1,!1),k,V.aN())
l.scV(0,!0)
l.scG(6.283185307179586)
l.scI(0)
l.sZ(0,0)
l.scH(100)
l.sa1(0)
l.scr(0.2)
l.gv().n(0,k.gaY())
l=new X.a9(!0,!1,!1)
if(!k.c.q(0,l)){h=k.c
k.c=l
k.T(new D.H(a1,h,l))}k.bm(m)
o.n(0,k)
l=new X.a9(!1,!1,!1)
k=new U.dI(l,V.aN())
j=new X.a9(!1,!1,!1)
if(!l.q(0,j)){k.b=j
k.T(new D.H(a1,l,j))}k.bm(m)
o.n(0,k)
n.sbq(o)
o=q.f
g=o.e5("../resources/Dirt.png")
f=o.e5("../resources/Grass.png")
o=O.le(t.gc)
e=new O.d8(o)
o.bv(e.gfg(),e.gfi())
o=e.ge4()
o.gv().n(0,e.gdh())
o.ge3().n(0,e.gbg())
o=e.ge4()
d=V.ls()
m=U.m0(V.m8(V.lo(),d,new V.x(-1,-1,-1)))
l=new V.aU(1,1,1)
k=new D.c1(new V.aU(1,1,1),V.dJ(),V.ls(),V.oG())
h=k.a
k.a=m
m.gv().n(0,k.geJ())
k.aC(new D.H("mover",h,k.a))
if(!k.b.q(0,l)){h=k.b
k.b=l
k.aC(new D.H("color",h,l))}o.n(0,k)
e.gdH().sba(g)
e.ge0().sba(f)
p=O.le(p)
o=new M.ez(p)
p.bv(o.gfm(),o.gfo())
c=X.o_(a0)
b=new X.f3(1.0471975511965976,0.1)
b.sbq(a0)
m=b.c
$.F().toString
if(!(Math.abs(m-1.0471975511965976)<1e-9)){b.c=1.0471975511965976
b.aU(new D.H("fov",m,1.0471975511965976))}m=b.d
$.F().toString
if(!(Math.abs(m-0.1)<1e-9)){b.d=0.1
b.aU(new D.H("near",m,0.1))}m=b.e
$.F().toString
if(!(Math.abs(m-2000)<1e-9)){b.e=2000
b.aU(new D.H("far",m,2000))}m=o.b
if(m!==b){if(m!=null)m.gv().A(0,o.gau())
h=o.b
o.b=b
b.gv().n(0,o.gau())
o.aD(new D.H("camera",h,o.b))}m=o.c
if(m!==c){if(m!=null)m.gv().A(0,o.gau())
h=o.c
o.c=c
c.gv().n(0,o.gau())
o.aD(new D.H("target",h,o.c))}o.sem(a0)
o.sem(e)
p.n(0,n)
p=o.b
if(p!=null)p.sbq(U.m0(V.b0(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
p=q.d
if(p!==o){if(p!=null)p.gv().A(0,q.gd1())
q.d=o
o.gv().n(0,q.gd1())
q.d2()}r=s.getElementById("shapes")
if(r==null)H.h(P.f("Failed to find shapes for RadioGroup"))
s=new V.j9("shapes",!0,r)
s.av(0,"Cube",new M.kW(n))
s.av(0,"Cuboid",new M.kX(n))
s.av(0,"Cylinder",new M.kY(n))
s.av(0,"Cone",new M.kZ(n))
s.av(0,"LatLonSphere",new M.l_(n))
s.av(0,"IsoSphere",new M.l0(n))
s.bB(0,"Sphere",new M.l1(n),!0)
s.av(0,"Toroid",new M.l2(n))
s.av(0,"Knot",new M.l3(n))
s=q.Q
if(s==null)s=q.Q=D.O()
p=s.b
s=p==null?s.b=H.a([],t.a):p
s.push(new M.l4(a2,e))
V.qB(q)},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a,b){this.a=a
this.b=b}},A={
oc:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gat(a5)+a6.gat(a6)+a7.gat(a7)+a8.gat(a8)+a9.gat(a9)+b0.gat(b0)+b1.gat(b1)+b2.gat(b2)+b3.gat(b3)+"_"
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
b=$.bA()
if(h){s=$.bz()
b=new Z.br(b.a|s.a)}if(g)b=new Z.br(b.a|$.by().a)
if(f)b=new Z.br(b.a|$.bB().a)
if(e)b=new Z.br(b.a|$.bx().a)
return new A.iP(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
kD:function(a,b,c){if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kE:function(a,b,c){var s
A.kD(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hY(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.b){s+="   "+c+"Color = texture2D("+c+"Txt, txt2D).rgb;\n"
a.a=s}a.a=s+"}\n"},
pK:function(a,b){var s=a.a,r=s.b||!1
if(!r)return
r=b.a+="// === Emission ===\n"
b.a=r+"\n"
A.kD(b,s,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(s.b){s=r+"   return texture2D(emissionTxt, txt2D).rgb;\n"
b.a=s}else s=r
s+="}\n"
b.a=s
b.a=s+"\n"},
pG:function(a,b){var s=a.b,r=s.b||!1
if(!r)return
r=b.a+="// === Ambient ===\n"
b.a=r+"\n"
A.kE(b,s,"ambient")
b.a+="\n"},
pI:function(a,b){var s=a.c,r=s.b||!1
if(!r)return
r=b.a+="// === Diffuse ===\n"
b.a=r+"\n"
A.kE(b,s,"diffuse")
s=b.a+="\n"
s+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=s
s+="{\n"
b.a=s
s+="   float scalar = dot(norm, -litVec);\n"
b.a=s
s+=u.q
b.a=s
s+="   return diffuseColor*scalar;\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
pL:function(a,b){var s=a.d,r=s.b||!1
if(!r)return
r=b.a+="// === Inverse Diffuse ===\n"
b.a=r+"\n"
A.kE(b,s,"invDiffuse")
s=b.a+="\n"
s+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=s
s+="{\n"
b.a=s
s+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=s
s+=u.q
b.a=s
s+="   return invDiffuseColor*scalar;\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
pR:function(a,b){var s=a.e,r=s.b||!1
if(!r)return
r=b.a+="// === Specular ===\n"
r+="\n"
b.a=r
b.a=r+"uniform float shininess;\n"
A.kE(b,s,"specular")
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
s+=u.q
b.a=s
s+="   return specularColor*pow(scalar, shininess);\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
pN:function(a,b){var s,r,q
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
pP:function(a,b){var s=a.r,r=s.b||!1
if(!r)return
r=b.a+="// === Reflection ===\n"
b.a=r+"\n"
A.kD(b,s,"reflect")
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
pQ:function(a,b){var s=a.x,r=s.b||!1
if(!r)return
r=b.a+="// === Refraction ===\n"
b.a=r+"\n"
A.kD(b,s,"refract")
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
pH:function(a,b,c){var s,r,q,p,o,n,m=b.b
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
s=a.b.b||!1
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
pJ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
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
m=H.a([],p)
l=a.b.b||!1
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.h
k=H.a([],p)
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
pO:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
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
m=a.b.b||!1
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
pS:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
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
if(m){s=$.ip
if(s==null)s=$.ip=new E.h2(E.my(),E.mz())
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
p=a.b.b||!1
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
pM:function(a,b){var s,r
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
pT:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.a0(""),j=""+"precision mediump float;\n"
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
A.pK(a,k)
A.pG(a,k)
A.pI(a,k)
A.pL(a,k)
A.pR(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.pP(a,k)
A.pQ(a,k)}A.pN(a,k)
q=k.a+="// === Alpha ===\n"
q=k.a=q+"\n"
p=a.y.b
if(p)q=k.a=q+"uniform sampler2D alphaTxt;\n"
q+="float alphaValue()\n"
k.a=q
q=k.a=q+"{\n"
o=p||!1
if(!o)q=k.a=q+"   return 1.0;\n"
else if(p||!1){if(p){q+="   float a = texture2D(alphaTxt, txt2D).a;\n"
k.a=q}q+="   if (a <= 0.000001) discard;\n"
k.a=q
q+="   return a;\n"
k.a=q}q+="}\n"
k.a=q
k.a=q+"\n"
q=a.k1
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pH(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pJ(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pO(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.pS(a,p[n],k)
A.pM(a,k)}p=k.a+="// === Main ===\n"
p+="\n"
k.a=p
p+="void main()\n"
k.a=p
p+="{\n"
k.a=p
p=k.a=p+"   float alpha = alphaValue();\n"
s=s?k.a=p+"   vec3 norm = normal();\n":p
if(j)k.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.a([],t.s)
if(q){k.a+=u.N
m.push("lightAccum")
j=a.b.b||!1
if(j)k.a+="   setAmbientColor();\n"
j=a.c.b||!1
if(j)k.a+="   setDiffuseColor();\n"
j=a.d.b||!1
if(j)k.a+="   setInvDiffuseColor();\n"
j=a.e.b||!1
if(j)k.a+="   setSpecularColor();\n"
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ad(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ad(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ad(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.ad(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}j=a.a.b||!1
if(j)m.push("emissionColor()")
j=a.r.b||!1
if(j)m.push("reflect(refl)")
j=a.x.b||!1
if(j)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.b.j(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
pU:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bF+"];\n"
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
pW:function(a,b){var s
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
pV:function(a,b){var s
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
pY:function(a,b){var s,r
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
pZ:function(a,b){var s,r
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
pX:function(a,b){var s
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
q_:function(a,b){var s
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
return a[0].toUpperCase()+C.a.ad(a,1)},
lr:function(a,b,c,d,e){var s=new A.fC(H.a([],t.t),a,c,e)
s.f=d
s.e=P.d3(d,0,!1,t.S)
return s},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(a){this.a=a},
aV:function aV(a,b,c){this.a=a
this.b=b
this.c=c},
eQ:function eQ(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.iO=_.dS=_.iN=_.iM=_.dR=_.iL=_.dQ=_.iK=_.dP=_.iJ=_.dO=_.iI=_.dN=_.dM=_.iH=_.dL=_.iG=_.dK=_.b3=_.bF=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cs=c
_.ct=d
_.cu=e
_.cv=f
_.cw=g
_.cz=h
_.cA=i
_.cB=j
_.iR=_.iQ=_.iP=null
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
iP:function iP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bF=b5
_.b3=b6
_.dK=b7},
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
dn:function dn(){},
a3:function a3(){},
jD:function jD(a){this.a=a},
cm:function cm(a,b,c){this.a=a
this.c=b
this.d=c},
fE:function fE(a,b,c){this.a=a
this.c=b
this.d=c},
fF:function fF(a,b,c){this.a=a
this.c=b
this.d=c},
fG:function fG(a,b,c){this.a=a
this.c=b
this.d=c},
fC:function fC(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
dw:function dw(a,b,c){this.a=a
this.c=b
this.d=c},
fD:function fD(a,b,c){this.a=a
this.c=b
this.d=c},
dx:function dx(a,b,c){this.a=a
this.c=b
this.d=c},
dy:function dy(a,b,c){this.a=a
this.c=b
this.d=c},
fH:function fH(a,b,c){this.a=a
this.c=b
this.d=c},
dB:function dB(a,b,c){this.a=a
this.c=b
this.d=c},
cn:function cn(a,b,c){this.a=a
this.c=b
this.d=c},
dD:function dD(a,b,c){this.a=a
this.c=b
this.d=c},
dE:function dE(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lK:function(a,b,c,d){var s=F.jh()
F.eb(s,b,c,d,a,1,0,0,1)
F.eb(s,b,c,d,a,0,1,0,3)
F.eb(s,b,c,d,a,0,0,1,2)
F.eb(s,b,c,d,a,-1,0,0,0)
F.eb(s,b,c,d,a,0,-1,0,0)
F.eb(s,b,c,d,a,0,0,-1,3)
s.ar()
return s},
kx:function(a){var s=a.a>0?1:0
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
i.d=h}k=F.kx(h)
j=F.kx(g)
a.b7(F.l9(a0,a1,new F.ks(i,F.kx(f),F.kx(e),j,k,c),b))},
n4:function(a,b,c,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(a1<3)throw H.c(P.f("Must have 3 or more sizes for a disk."))
s=F.jh()
r=b?-1:1
q=-6.283185307179586/a1
p=t.k
o=H.a([],p)
n=s.gV()
m=new V.x(0,0,r).D()
o.push(n.hv(new V.bN(a,-1,-1,-1),new V.aw(1,1,1,1),new V.N(0,0,c),new V.x(0,0,r),new V.T(0.5,0.5),m))
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
d=F.cr(new V.bN(a,-1,-1,-1),null,new V.aw(g,e,f,1),new V.N(j*h,i*h,c),new V.x(0,0,r),new V.T(j*0.5+0.5,i*0.5+0.5),m,null,0)
n.n(0,d)
o.push(d)}s.gO().ht(o)
return s},
n2:function(a,b,c){return F.qi(!0,a,1,new F.kH(1,c),b)},
qi:function(a,b,c,d,e){var s
if(e<3)throw H.c(P.f("Must have 3 or more sizes for a cylindrical shape."))
if(c<1)throw H.c(P.f("Must have 1 or more divisionss for a cylindrical shape."))
s=F.l9(c,e,new F.kJ(d),null)
s.ar()
s.bC()
if(b)s.b7(F.n4(3,!1,1,new F.kK(d),e))
s.b7(F.n4(1,!0,-1,new F.kL(d),e))
return s},
qw:function(a,b){var s=F.l9(a,b,new F.kV(),null)
s.gO().bM()
s.ar()
s.bC()
return s},
ah:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
b=b.D()
s=b.a
r=b.b
q=b.c
p=F.cr(h,h,h,new V.N(s,r,q),b,h,h,h,0)
o=a.hQ(p,new F.dL())
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
p.sb2(0,new V.aw(n,m,l,1))
k=Math.sqrt(s*s+r*r)
j=Math.atan2(r,s)/1.5707963267948966
if(j<0)j=-j
i=Math.atan2(k,q)/3.141592653589793
p.sba(new V.T(j,i<0?-i:i))
a.gV().n(0,p)
return p},
V:function(a,b,c,d,e){var s,r,q,p,o,n,m
if(e<=0)a.gO().bB(0,b,d,c)
else{s=b.r
if(s==null)s=V.dJ()
r=c.r
if(r==null)r=V.dJ()
q=d.r
if(q==null)q=V.dJ()
p=F.ah(a,s.R(0,r).K(0,0.5))
o=F.ah(a,r.R(0,q).K(0,0.5))
n=F.ah(a,q.R(0,s).K(0,0.5))
m=e-1
F.V(a,b,p,n,m)
F.V(a,p,c,o,m)
F.V(a,o,n,p,m)
F.V(a,n,o,d,m)}},
ne:function(a,b){var s=F.lK(a,null,new F.l7(1,new F.l8()),b)
s.bC()
return s},
qG:function(){return F.n3(15,30,0.5,1,new F.la())},
qv:function(){return F.n3(12,120,0.3,1,new F.kU(3,2))},
n3:function(a,b,c,d,e){var s=F.l9(a,b,new F.kI(e,d,b,c),null)
s.ar()
s.bC()
return s},
l9:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.jh()
r=t.k
q=H.a([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.y(s,H.a([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.cr(d,d,new V.aw(m,0,0,1),d,d,new V.T(o,1),d,d,0)
n.n(0,l)
c.$3(l,o,0)
q.push(l.cq(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.y(s,H.a([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.cr(d,d,new V.aw(g,f,e,1),d,d,new V.T(o,j),d,d,0)
h.n(0,l)
c.$3(l,o,k)
q.push(l.cq(a0))}}s.gO().hu(a+1,b+1,q)
return s},
jh:function(){return new F.jg()},
cr:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cq()
h=$.nx()
s=$.bA()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bz().a)!==0)q.r=e
if((r&$.by().a)!==0)q.x=b
if((r&$.bB().a)!==0)q.y=f
if((r&$.bW().a)!==0)q.z=g
if((r&$.ny().a)!==0)q.Q=c
if((r&$.cD().a)!==0)q.ch=i
if((r&$.bx().a)!==0)q.cx=a
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
kV:function kV(){},
l8:function l8(){},
l7:function l7(a,b){this.a=a
this.b=b},
la:function la(){},
kU:function kU(a,b){this.a=a
this.b=b},
kI:function kI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iu:function iu(){},
jn:function jn(){},
eN:function eN(){this.b=this.a=null},
iG:function iG(){},
jC:function jC(){},
f7:function f7(){this.a=null},
jg:function jg(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ji:function ji(a,b,c,d,e,f,g){var _=this
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
bO:function bO(a,b){this.a=a
this.b=b},
cq:function cq(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jZ:function jZ(a){this.a=a},
jY:function jY(a){this.a=a},
y:function y(a,b){this.a=a
this.b=!1
this.c=b},
al:function al(a,b,c){this.b=a
this.c=b
this.d=c},
jT:function jT(a,b){this.a=a
this.b=b},
jU:function jU(a,b){this.a=a
this.b=b},
aG:function aG(a,b){this.b=a
this.c=b},
jW:function jW(){},
dL:function dL(){},
jX:function jX(){},
jV:function jV(){},
j6:function j6(){},
b6:function b6(a){this.b=a}},T={ck:function ck(){},fu:function fu(){},fv:function fv(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.y=null},jr:function jr(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=0},js:function js(a,b,c,d,e,f,g){var _=this
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
H.lk.prototype={}
J.b.prototype={
q:function(a,b){return a===b},
gI:function(a){return H.dj(a)},
i:function(a){return"Instance of '"+H.dk(a)+"'"}}
J.eH.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iae:1}
J.cX.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.bj.prototype={
gI:function(a){return 0},
i:function(a){return String(a)},
$im5:1}
J.f4.prototype={}
J.bQ.prototype={}
J.aX.prototype={
i:function(a){var s=a[$.nj()]
if(s==null)return this.eA(a)
return"JavaScript function for "+J.cE(s)},
$icT:1}
J.w.prototype={
cO:function(a,b){if(!!a.fixed$length)H.h(P.D("removeAt"))
if(b<0||b>=a.length)throw H.c(P.fa(b,null))
return a.splice(b,1)[0]},
A:function(a,b){var s
if(!!a.fixed$length)H.h(P.D("remove"))
for(s=0;s<a.length;++s)if(J.G(a[s],b)){a.splice(s,1)
return!0}return!1},
ah:function(a,b){if(!!a.fixed$length)H.h(P.D("addAll"))
this.eR(a,b)
return},
eR:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aM(a))
for(s=0;s<r;++s)a.push(b[s])},
H:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aM(a))}},
j:function(a,b){var s,r,q=a.length,p=P.d3(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.z(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
i_:function(a){return this.j(a,"")},
hU:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.aM(a))}return s},
hV:function(a,b,c){return this.hU(a,b,c,t.A)},
hT:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aM(a))}throw H.c(H.iC())},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghS:function(a){if(a.length>0)return a[0]
throw H.c(H.iC())},
gay:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.iC())},
dv:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aM(a))}return!1},
bf:function(a,b){if(!!a.immutable$list)H.h(P.D("sort"))
H.ov(a,b==null?J.px():b)},
ew:function(a){return this.bf(a,null)},
B:function(a,b){var s
for(s=0;s<a.length;++s)if(J.G(a[s],b))return!0
return!1},
i:function(a){return P.lh(a,"[","]")},
gS:function(a){return new J.ao(a,a.length)},
gI:function(a){return H.dj(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.h(P.D("set length"))
if(b>a.length)H.kt(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cB(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.h(P.D("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cB(a,b))
a[b]=c},
$iA:1,
$in:1,
$ij:1,
$ip:1}
J.iD.prototype={}
J.ao.prototype={
gC:function(a){return H.Y(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.c8.prototype={
aj:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbI(b)
if(this.gbI(a)===s)return 0
if(this.gbI(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbI:function(a){return a===0?1/a<0:a<0},
it:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.D(""+a+".toInt()"))},
cD:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.D(""+a+".floor()"))},
as:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.D(""+a+".round()"))},
cS:function(a,b){var s
if(b>20)throw H.c(P.ab(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbI(a))return"-"+s
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
bu:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eC:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dm(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dm(a,b)},
dm:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.D("Result of truncating division is "+H.z(s)+": "+H.z(a)+" ~/ "+b))},
b_:function(a,b){var s
if(a>0)s=this.dl(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hi:function(a,b){if(b<0)throw H.c(H.eg(b))
return this.dl(a,b)},
dl:function(a,b){return b>31?0:a>>>b},
$iI:1,
$ia4:1}
J.cW.prototype={$ii:1}
J.eI.prototype={}
J.bi.prototype={
Y:function(a,b){if(b<0)throw H.c(H.cB(a,b))
if(b>=a.length)H.h(H.cB(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.cB(a,b))
return a.charCodeAt(b)},
R:function(a,b){return a+b},
b9:function(a,b,c,d){var s=P.bn(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
aa:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.ab(c,0,a.length,null,null))
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
iv:function(a){return a.toLowerCase()},
K:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.O)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
an:function(a,b){var s=b-a.length
if(s<=0)return a
return this.K(" ",s)+a},
bG:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.ab(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dY:function(a,b){return this.bG(a,b,0)},
hC:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.ab(c,0,s,null,null))
return H.nf(a,b,c)},
B:function(a,b){return this.hC(a,b,0)},
aj:function(a,b){var s
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
H.cY.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.r.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.Y(this.a,b)}}
H.n.prototype={}
H.d2.prototype={
gS:function(a){return new H.bk(this,this.gl(this))},
bR:function(a,b){return this.ez(0,b)}}
H.bk.prototype={
gC:function(a){return H.Y(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=J.bU(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.aM(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.L(q,s);++r.c
return!0}}
H.aZ.prototype={
gS:function(a){return new H.eP(J.aI(this.a),this.b)},
gl:function(a){return J.aR(this.a)},
L:function(a,b){return this.b.$1(J.hZ(this.a,b))}}
H.cP.prototype={$in:1}
H.eP.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gC(r))
return!0}s.a=null
return!1},
gC:function(a){return H.Y(this).Q[1].a(this.a)}}
H.d7.prototype={
gl:function(a){return J.aR(this.a)},
L:function(a,b){return this.b.$1(J.hZ(this.a,b))}}
H.b7.prototype={
gS:function(a){return new H.fQ(J.aI(this.a),this.b)}}
H.fQ.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gC(s)))return!0
return!1},
gC:function(a){var s=this.a
return s.gC(s)}}
H.cR.prototype={}
H.fK.prototype={
m:function(a,b,c){throw H.c(P.D("Cannot modify an unmodifiable list"))}}
H.co.prototype={}
H.cK.prototype={
i:function(a){return P.ln(this)},
m:function(a,b,c){H.nV()},
$iJ:1}
H.cL.prototype={
gl:function(a){return this.a},
co:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.co(0,b))return null
return this.dc(b)},
dc:function(a){return this.b[a]},
H:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.dc(q))}}}
H.jA.prototype={
am:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.fJ.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.j7.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hv.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bF.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nh(r==null?"unknown":r)+"'"},
$icT:1,
giz:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fr.prototype={}
H.fk.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nh(s)+"'"}}
H.bZ.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bZ))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gI:function(a){var s,r=this.c
if(r==null)s=H.dj(this.a)
else s=typeof r!=="object"?J.lc(r):H.dj(r)
return(s^H.dj(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.z(this.d)+"' of "+("Instance of '"+H.dk(s)+"'")}}
H.fd.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.Z.prototype={
gl:function(a){return this.a},
gbH:function(a){return this.a===0},
ga4:function(a){return new H.d_(this,H.Y(this).M("d_<1>"))},
giy:function(a){var s=this,r=H.Y(s)
return H.ob(s.ga4(s),new H.iE(s),r.c,r.Q[1])},
co:function(a,b){var s=this.b
if(s==null)return!1
return this.eZ(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bx(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bx(p,b)
q=r==null?n:r.b
return q}else return o.hY(b)},
hY:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.dd(p,q.dZ(a))
r=q.e_(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.d5(s==null?q.b=q.ca():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.d5(r==null?q.c=q.ca():r,b,c)}else q.hZ(b,c)},
hZ:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.ca()
s=p.dZ(a)
r=p.dd(o,s)
if(r==null)p.cf(o,s,[p.cb(a,b)])
else{q=p.e_(r,a)
if(q>=0)r[q].b=b
else r.push(p.cb(a,b))}},
H:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aM(s))
r=r.c}},
d5:function(a,b,c){var s=this.bx(a,b)
if(s==null)this.cf(a,b,this.cb(b,c))
else s.b=c},
f9:function(){this.r=this.r+1&67108863},
cb:function(a,b){var s,r=this,q=new H.iH(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.f9()
return q},
dZ:function(a){return J.lc(a)&0x3ffffff},
e_:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1},
i:function(a){return P.ln(this)},
bx:function(a,b){return a[b]},
dd:function(a,b){return a[b]},
cf:function(a,b,c){a[b]=c},
f2:function(a,b){delete a[b]},
eZ:function(a,b){return this.bx(a,b)!=null},
ca:function(){var s="<non-identifier-key>",r=Object.create(null)
this.cf(r,s,r)
this.f2(r,s)
return r}}
H.iE.prototype={
$1:function(a){var s=this.a
return H.Y(s).Q[1].a(s.h(0,a))},
$S:function(){return H.Y(this.a).M("2(1)")}}
H.iH.prototype={}
H.d_.prototype={
gl:function(a){return this.a.a},
gS:function(a){var s=this.a,r=new H.eO(s,s.r)
r.c=s.e
return r}}
H.eO.prototype={
gC:function(a){return H.Y(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aM(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kP.prototype={
$1:function(a){return this.a(a)},
$S:37}
H.kQ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:58}
H.kR.prototype={
$1:function(a){return this.a(a)},
$S:49}
H.eJ.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ime:1}
H.dd.prototype={$idd:1}
H.a2.prototype={$ia2:1}
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
H.de.prototype={
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
H.df.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.bM.prototype={
gl:function(a){return a.length},
h:function(a,b){H.b8(b,a,a.length)
return a[b]},
$ibM:1,
$icl:1}
H.dT.prototype={}
H.dU.prototype={}
H.dV.prototype={}
H.dW.prototype={}
H.aD.prototype={
M:function(a){return H.hJ(v.typeUniverse,this,a)},
bh:function(a){return H.p5(v.typeUniverse,this,a)}}
H.h7.prototype={}
H.h3.prototype={
i:function(a){return this.a}}
H.e4.prototype={}
P.k1.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:48}
P.k0.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:46}
P.k2.prototype={
$0:function(){this.a.$0()},
$S:12}
P.k3.prototype={
$0:function(){this.a.$0()},
$S:12}
P.e3.prototype={
eN:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cA(new P.kk(this,b),0),a)
else throw H.c(P.D("`setTimeout()` not found."))},
eO:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cA(new P.kj(this,a,Date.now(),b),0),a)
else throw H.c(P.D("Periodic timer."))},
$ijv:1}
P.kk.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:0}
P.kj.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eC(s,o)}q.c=p
r.d.$1(q)},
$S:12}
P.cv.prototype={
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
if(r instanceof P.cv){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aI(s)
if(o instanceof P.bS){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.e0.prototype={
gS:function(a){return new P.bS(this.a())}}
P.fR.prototype={}
P.ci.prototype={}
P.fm.prototype={}
P.kr.prototype={}
P.kF.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:0}
P.k8.prototype={
ip:function(a){var s,r,q,p=null
try{if(C.f===$.aP){a.$0()
return}P.q1(p,p,this,a)}catch(q){s=H.an(q)
r=H.lM(q)
P.mX(p,p,this,s,r)}},
iq:function(a,b){var s,r,q,p=null
try{if(C.f===$.aP){a.$1(b)
return}P.q2(p,p,this,a,b)}catch(q){s=H.an(q)
r=H.lM(q)
P.mX(p,p,this,s,r)}},
ir:function(a,b){return this.iq(a,b,t.A)},
hy:function(a){return new P.k9(this,a)},
dC:function(a,b){return new P.ka(this,a,b)}}
P.k9.prototype={
$0:function(){return this.a.ip(this.b)},
$S:0}
P.ka.prototype={
$1:function(a){return this.a.ir(this.b,a)},
$S:function(){return this.c.M("~(0)")}}
P.dP.prototype={
gS:function(a){var s=new P.dQ(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
B:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eY(b)
return r}},
eY:function(a){var s=this.d
if(s==null)return!1
return this.c1(s[this.bY(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.d6(s==null?q.b=P.lv():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.d6(r==null?q.c=P.lv():r,b)}else return q.eQ(0,b)},
eQ:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.lv()
s=q.bY(b)
r=p[s]
if(r==null)p[s]=[q.bX(b)]
else{if(q.c1(r,b)>=0)return!1
r.push(q.bX(b))}return!0},
A:function(a,b){if((b&1073741823)===b)return this.h4(this.c,b)
else return this.h3(0,b)},
h3:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bY(b)
r=n[s]
q=o.c1(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dq(p)
return!0},
d6:function(a,b){if(a[b]!=null)return!1
a[b]=this.bX(b)
return!0},
h4:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dq(s)
delete a[b]
return!0},
d7:function(){this.r=this.r+1&1073741823},
bX:function(a){var s,r=this,q=new P.k7(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.d7()
return q},
dq:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.d7()},
bY:function(a){return J.lc(a)&1073741823},
c1:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1}}
P.k7.prototype={}
P.dQ.prototype={
gC:function(a){return H.Y(this).c.a(this.d)},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aM(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cV.prototype={}
P.iI.prototype={
$2:function(a,b){this.a.m(0,this.b.a(a),this.c.a(b))},
$S:15}
P.d1.prototype={$in:1,$ij:1,$ip:1}
P.k.prototype={
gS:function(a){return new H.bk(a,this.gl(a))},
L:function(a,b){return this.h(a,b)},
H:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.aM(a))}},
gbH:function(a){return this.gl(a)===0},
iu:function(a,b){var s,r,q,p,o=this
if(o.gbH(a)){s=J.li(0,H.b9(a).M("k.E"))
return s}r=o.h(a,0)
q=P.d3(o.gl(a),r,!0,H.b9(a).M("k.E"))
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
cR:function(a){return this.iu(a,!0)},
hP:function(a,b,c,d){var s
H.b9(a).M("k.E").a(d)
P.bn(b,c,this.gl(a))
for(s=b;s<c;++s)this.m(a,s,d)},
i:function(a){return P.lh(a,"[","]")}}
P.d5.prototype={}
P.iM.prototype={
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
for(s=J.aI(this.ga4(a)),r=H.b9(a).M("M.V");s.u();){q=s.gC(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.aR(this.ga4(a))},
i:function(a){return P.ln(a)},
$iJ:1}
P.hK.prototype={
m:function(a,b,c){throw H.c(P.D("Cannot modify unmodifiable map"))}}
P.d6.prototype={
h:function(a,b){return J.lU(this.a,b)},
m:function(a,b,c){J.lb(this.a,b,c)},
H:function(a,b){J.el(this.a,b)},
gl:function(a){return J.aR(this.a)},
i:function(a){return J.cE(this.a)},
$iJ:1}
P.cp.prototype={}
P.dm.prototype={
ah:function(a,b){var s
for(s=J.aI(b);s.u();)this.n(0,s.gC(s))},
i:function(a){return P.lh(this,"{","}")},
L:function(a,b){var s,r,q,p,o="index"
H.qe(b,o,t.S)
P.md(b,o)
for(s=P.oQ(this,this.r),r=H.Y(s).c,q=0;s.u();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.Q(b,this,o,null,q))}}
P.dX.prototype={$in:1,$ij:1}
P.dR.prototype={}
P.e8.prototype={}
P.ea.prototype={}
P.jO.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.an(r)}return null},
$S:17}
P.jN.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.an(r)}return null},
$S:17}
P.i4.prototype={
i1:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.bn(a3,a4,a2.length)
s=$.nA()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.F(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.kO(C.a.F(a2,k))
g=H.kO(C.a.F(a2,k+1))
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
d.a=c+H.aC(j)
p=k
continue}}throw H.c(P.a8("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.t(a2,p,a4)
d=r.length
if(n>=0)P.lX(a2,m,a4,n,l,d)
else{b=C.c.bu(d-1,4)+1
if(b===1)throw H.c(P.a8(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.b9(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.lX(a2,m,a4,n,l,a)
else{b=C.c.bu(a,4)
if(b===1)throw H.c(P.a8(a0,a2,a4))
if(b>1)a2=C.a.b9(a2,a4,a4,b===2?"==":"=")}return a2}}
P.i5.prototype={}
P.es.prototype={}
P.eu.prototype={}
P.io.prototype={}
P.iB.prototype={
i:function(a){return this.a}}
P.iA.prototype={
f_:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
P.jL.prototype={
ghO:function(){return C.P}}
P.jP.prototype={
cp:function(a){var s,r,q,p=P.bn(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.kp(r)
if(q.f4(a,0,p)!==p){C.a.Y(a,p-1)
q.cj()}return new Uint8Array(r.subarray(0,H.po(0,q.b,s)))}}
P.kp.prototype={
cj:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
hq:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.cj()
return!1}},
f4:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.Y(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.F(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hq(p,C.a.F(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.cj()}else if(p<=2047){o=l.b
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
P.jM.prototype={
cp:function(a){var s=this.a,r=P.oD(s,a,0,null)
if(r!=null)return r
return new P.ko(s).hD(a,0,null,!0)}}
P.ko.prototype={
hD:function(a,b,c,d){var s,r,q,p,o=this,n=P.bn(b,c,J.aR(a))
if(b===n)return""
s=P.pk(a,b,n)
r=o.bZ(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.pl(q)
o.b=0
throw H.c(P.a8(p,a,b+o.c))}return r},
bZ:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.a6(b+c,2)
r=q.bZ(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bZ(a,s,c,d)}return q.hI(a,b,c,d)},
hI:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a0(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.F("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.F(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aC(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aC(j)
break
case 65:g.a+=H.aC(j);--f
break
default:p=g.a+=H.aC(j)
g.a=p+H.aC(j)
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
g.a+=H.aC(a[l])}else g.a+=P.fo(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aC(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.a_.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.a_&&this.a===b.a&&!0},
aj:function(a,b){return C.c.aj(this.a,b.a)},
gI:function(a){var s=this.a
return(s^C.c.b_(s,30))&1073741823},
i:function(a){var s=this,r=P.nW(H.om(s)),q=P.ex(H.ok(s)),p=P.ex(H.og(s)),o=P.ex(H.oh(s)),n=P.ex(H.oj(s)),m=P.ex(H.ol(s)),l=P.nX(H.oi(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bG.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bG&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
aj:function(a,b){return C.c.aj(this.a,b.a)},
i:function(a){var s,r,q,p=new P.ik(),o=this.a
if(o<0)return"-"+new P.bG(0-o).i(0)
s=p.$1(C.c.a6(o,6e7)%60)
r=p.$1(C.c.a6(o,1e6)%60)
q=new P.ij().$1(o%1e6)
return""+C.c.a6(o,36e8)+":"+s+":"+r+"."+q}}
P.ij.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:30}
P.ik.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:30}
P.L.prototype={}
P.eo.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.ir(s)
return"Assertion failed"}}
P.fB.prototype={}
P.f_.prototype={
i:function(a){return"Throw of null."}}
P.aJ.prototype={
gc0:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc_:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gc0()+o+m
if(!q.a)return l
s=q.gc_()
r=P.ir(q.b)
return l+s+": "+r}}
P.dl.prototype={
gc0:function(){return"RangeError"},
gc_:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.z(q):""
else if(q==null)s=": Not greater than or equal to "+H.z(r)
else if(q>r)s=": Not in inclusive range "+H.z(r)+".."+H.z(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.z(r)
return s}}
P.eF.prototype={
gc0:function(){return"RangeError"},
gc_:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.fL.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fI.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.ch.prototype={
i:function(a){return"Bad state: "+this.a}}
P.et.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ir(s)+"."}}
P.f2.prototype={
i:function(a){return"Out of Memory"},
$iL:1}
P.dr.prototype={
i:function(a){return"Stack Overflow"},
$iL:1}
P.ev.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.h4.prototype={
i:function(a){return"Exception: "+this.a}}
P.ix.prototype={
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
bR:function(a,b){return new H.b7(this,b,H.Y(this).M("b7<j.E>"))},
gl:function(a){var s,r=this.gS(this)
for(s=0;r.u();)++s
return s},
gaQ:function(a){var s,r=this.gS(this)
if(!r.u())throw H.c(H.iC())
s=r.gC(r)
if(r.u())throw H.c(H.o2())
return s},
L:function(a,b){var s,r,q
P.md(b,"index")
for(s=this.gS(this),r=0;s.u();){q=s.gC(s)
if(b===r)return q;++r}throw H.c(P.Q(b,this,"index",null,r))},
i:function(a){return P.o1(this,"(",")")}}
P.eG.prototype={}
P.aj.prototype={
gI:function(a){return P.R.prototype.gI.call(C.U,this)},
i:function(a){return"null"}}
P.R.prototype={constructor:P.R,$iR:1,
q:function(a,b){return this===b},
gI:function(a){return H.dj(this)},
i:function(a){return"Instance of '"+H.dk(this)+"'"},
toString:function(){return this.i(this)}}
P.a0.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jJ.prototype={
$2:function(a,b){var s,r,q,p=C.a.dY(b,"=")
if(p===-1){if(b!=="")J.lb(a,P.lE(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.t(b,0,p)
r=C.a.ad(b,p+1)
q=this.a
J.lb(a,P.lE(s,0,s.length,q,!0),P.lE(r,0,r.length,q,!0))}return a},
$S:44}
P.jG.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.jH.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.jI.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.kS(C.a.t(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:41}
P.bT.prototype={
gci:function(){var s,r,q,p=this,o=p.x
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
else o=H.h(H.lm("_text"))}return o},
gI:function(a){var s=this,r=s.z
if(r==null){r=C.a.gI(s.gci())
if(s.z==null)s.z=r
else r=H.h(H.lm("hashCode"))}return r},
gcN:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.cp(P.ms(r==null?"":r),t.dw)
if(s.Q==null)s.Q=r
else r=H.h(H.lm("queryParameters"))}return r},
geo:function(){return this.b},
gcE:function(a){var s=this.c
if(s==null)return""
if(C.a.a2(s,"["))return C.a.t(s,1,s.length-1)
return s},
gbK:function(a){var s=this.d
return s==null?P.mL(this.a):s},
gcM:function(a){var s=this.f
return s==null?"":s},
gdT:function(){var s=this.r
return s==null?"":s},
ej:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a2(s,"/"))s="/"+s
q=s
p=P.lC(null,0,0,b)
return new P.bT(n,l,j,k,q,p,o.r)},
gdU:function(){return this.c!=null},
gdX:function(){return this.f!=null},
gdV:function(){return this.r!=null},
i:function(a){return this.gci()},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbS())if(q.c!=null===b.gdU())if(q.b===b.geo())if(q.gcE(q)===b.gcE(b))if(q.gbK(q)===b.gbK(b))if(q.e===b.gef(b)){s=q.f
r=s==null
if(!r===b.gdX()){if(r)s=""
if(s===b.gcM(b)){s=q.r
r=s==null
if(!r===b.gdV()){if(r)s=""
s=s===b.gdT()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifM:1,
gbS:function(){return this.a},
gef:function(a){return this.e}}
P.km.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.kn(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.kn(C.h,b,C.e,!0)}},
$S:40}
P.kl.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aI(b),r=this.a;s.u();)r.$2(a,s.gC(s))},
$S:6}
P.jF.prototype={
gen:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bG(s,"?",m)
q=s.length
if(r>=0){p=P.e9(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fX("data","",n,n,P.e9(s,m,q,C.y,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.ky.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.a_.hP(s,0,96,b)
return s},
$S:39}
P.kz.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.F(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.kA.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.F(b,0),r=C.a.F(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:23}
P.hp.prototype={
gdU:function(){return this.c>0},
gdW:function(){return this.c>0&&this.d+1<this.e},
gdX:function(){return this.f<this.r},
gdV:function(){return this.r<this.a.length},
gbS:function(){var s=this.x
return s==null?this.x=this.eX():s},
eX:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a2(r.a,"http"))return"http"
if(q===5&&C.a.a2(r.a,"https"))return"https"
if(s&&C.a.a2(r.a,"file"))return"file"
if(q===7&&C.a.a2(r.a,"package"))return"package"
return C.a.t(r.a,0,q)},
geo:function(){var s=this.c,r=this.b+3
return s>r?C.a.t(this.a,r,s-1):""},
gcE:function(a){var s=this.c
return s>0?C.a.t(this.a,s,this.d):""},
gbK:function(a){var s,r=this
if(r.gdW())return P.kS(C.a.t(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a2(r.a,"http"))return 80
if(s===5&&C.a.a2(r.a,"https"))return 443
return 0},
gef:function(a){return C.a.t(this.a,this.e,this.f)},
gcM:function(a){var s=this.f,r=this.r
return s<r?C.a.t(this.a,s+1,r):""},
gdT:function(){var s=this.r,r=this.a
return s<r.length?C.a.ad(r,s+1):""},
gcN:function(){var s=this
if(s.f>=s.r)return C.Z
return new P.cp(P.ms(s.gcM(s)),t.dw)},
ej:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbS(),k=l==="file",j=n.c,i=j>0?C.a.t(n.a,n.b+3,j):"",h=n.gdW()?n.gbK(n):m
j=n.c
if(j>0)s=C.a.t(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.t(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a2(r,"/"))r="/"+r
p=P.lC(m,0,0,b)
q=n.r
o=q<j.length?C.a.ad(j,q+1):m
return new P.bT(l,i,s,h,r,p,o)},
gI:function(a){var s=this.y
return s==null?this.y=C.a.gI(this.a):s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifM:1}
P.fX.prototype={}
W.v.prototype={}
W.i_.prototype={
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
cW:function(a,b,c){if(c!=null)return a.getContext(b,P.n1(c))
return a.getContext(b)},
er:function(a,b){return this.cW(a,b,null)},
$ibE:1}
W.cI.prototype={$icI:1}
W.aK.prototype={
gl:function(a){return a.length}}
W.ib.prototype={
gl:function(a){return a.length}}
W.K.prototype={$iK:1}
W.cM.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ic.prototype={}
W.ax.prototype={}
W.aW.prototype={}
W.id.prototype={
gl:function(a){return a.length}}
W.ie.prototype={
gl:function(a){return a.length}}
W.ig.prototype={
gl:function(a){return a.length}}
W.be.prototype={$ibe:1}
W.ih.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cN.prototype={
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
W.cO.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.z(r)+", "
s=a.top
s.toString
return r+H.z(s)+") "+H.z(this.gaP(a))+" x "+H.z(this.gaJ(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.aQ(b)
if(s===r.gbJ(b)){s=a.top
s.toString
s=s===r.gbO(b)&&this.gaP(a)===r.gaP(b)&&this.gaJ(a)===r.gaJ(b)}else s=!1}else s=!1
return s},
gI:function(a){var s,r=a.left
r.toString
r=C.d.gI(r)
s=a.top
s.toString
return W.mC(r,C.d.gI(s),C.d.gI(this.gaP(a)),C.d.gI(this.gaJ(a)))},
gdE:function(a){var s=a.bottom
s.toString
return s},
gde:function(a){return a.height},
gaJ:function(a){var s=this.gde(a)
s.toString
return s},
gbJ:function(a){var s=a.left
s.toString
return s},
gcQ:function(a){var s=a.right
s.toString
return s},
gbO:function(a){var s=a.top
s.toString
return s},
gds:function(a){return a.width},
gaP:function(a){var s=this.gds(a)
s.toString
return s},
$iac:1}
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
W.ii.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.fU.prototype={
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
gS:function(a){var s=this.cR(this)
return new J.ao(s,s.length)}}
W.E.prototype={
gai:function(a){return new W.h1(a)},
gbD:function(a){var s=a.children
s.toString
return new W.fU(a,s)},
gdF:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.ac(p,s,r,q,t.I)},
i:function(a){var s=a.localName
s.toString
return s},
ak:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.m3
if(s==null){s=H.a([],t.Q)
r=new W.dh(s)
s.push(W.mB(null))
s.push(W.mG())
$.m3=r
d=r}else d=s
s=$.m2
if(s==null){s=new W.hL(d)
$.m2=s
c=s}else{s.a=d
c=s}}if($.bf==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.bf=r
r=r.createRange()
r.toString
$.lf=r
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
if(s){$.lf.selectNodeContents(q)
s=$.lf
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.bf.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.bf.body)J.lV(q)
c.cX(p)
document.adoptNode(p).toString
return p},
hG:function(a,b,c){return this.ak(a,b,c,null)},
es:function(a,b){var s
a.textContent=null
s=a.appendChild(this.ak(a,b,null,null))
s.toString},
gel:function(a){var s=a.tagName
s.toString
return s},
$iE:1}
W.il.prototype={
$1:function(a){return t.h.b(a)},
$S:24}
W.m.prototype={$im:1}
W.e.prototype={
hs:function(a,b,c,d){if(c!=null)this.eS(a,b,c,!1)},
eS:function(a,b,c,d){return a.addEventListener(b,H.cA(c,1),!1)},
$ie:1}
W.ai.prototype={$iai:1}
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
W.ay.prototype={$iay:1}
W.iz.prototype={
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
gdG:function(a){var s=a.data
s.toString
return s},
$ibJ:1}
W.c5.prototype={$ic5:1}
W.c7.prototype={$ic7:1}
W.bK.prototype={$ibK:1}
W.iK.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.j0.prototype={
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
this.H(a,new W.j2(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Not supported"))},
$iJ:1}
W.j2.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.aA.prototype={$iaA:1}
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
W.ar.prototype={$iar:1}
W.a7.prototype={
gaQ:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.lp("No elements"))
if(r>1)throw H.c(P.lp("More than one element"))
s=s.firstChild
s.toString
return s},
ah:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gS:function(a){var s=this.a.childNodes
return new W.cS(s,s.length)},
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
J.nE(s,b,a)}catch(q){H.an(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.ey(a):s},
h6:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$it:1}
W.dg.prototype={
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
W.aB.prototype={
gl:function(a){return a.length},
$iaB:1}
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
this.H(a,new W.jf(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Not supported"))},
$iJ:1}
W.jf.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.fe.prototype={
gl:function(a){return a.length}}
W.as.prototype={$ias:1}
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
W.aE.prototype={$iaE:1}
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
W.aF.prototype={
gl:function(a){return a.length},
$iaF:1}
W.fl.prototype={
h:function(a,b){return a.getItem(H.kv(b))},
m:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga4:function(a){var s=H.a([],t.s)
this.H(a,new W.jo(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iJ:1}
W.jo.prototype={
$2:function(a,b){return this.a.push(a)},
$S:50}
W.ak.prototype={$iak:1}
W.bp.prototype={$ibp:1}
W.ds.prototype={
ak:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bT(a,b,c,d)
s=W.nY("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a7(r).ah(0,new W.a7(s))
return r}}
W.fp.prototype={
ak:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bT(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a7(C.C.ak(r,b,c,d))
r=new W.a7(r.gaQ(r))
new W.a7(s).ah(0,new W.a7(r.gaQ(r)))
return s}}
W.fq.prototype={
ak:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bT(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a7(C.C.ak(r,b,c,d))
new W.a7(s).ah(0,new W.a7(r.gaQ(r)))
return s}}
W.cj.prototype={$icj:1}
W.at.prototype={$iat:1}
W.ag.prototype={$iag:1}
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
W.ju.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.au.prototype={$iau:1}
W.bP.prototype={$ibP:1}
W.fz.prototype={
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
W.jz.prototype={
gl:function(a){return a.length}}
W.b5.prototype={}
W.jK.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fO.prototype={
gl:function(a){return a.length}}
W.bs.prototype={
ghK:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.D("deltaY is not supported"))},
ghJ:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.D("deltaX is not supported"))},
$ibs:1}
W.cs.prototype={
h8:function(a,b){var s=a.requestAnimationFrame(H.cA(b,1))
s.toString
return s},
f3:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ct.prototype={$ict:1}
W.fV.prototype={
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
r=J.aQ(b)
if(s===r.gbJ(b)){s=a.top
s.toString
if(s===r.gbO(b)){s=a.width
s.toString
if(s===r.gaP(b)){s=a.height
s.toString
r=s===r.gaJ(b)
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
return W.mC(p,s,r,C.d.gI(q))},
gde:function(a){return a.height},
gaJ:function(a){var s=a.height
s.toString
return s},
gds:function(a){return a.width},
gaP:function(a){var s=a.width
s.toString
return s}}
W.h8.prototype={
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
W.hs.prototype={
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
W.hz.prototype={
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
W.fS.prototype={
H:function(a,b){var s,r,q,p,o
for(s=this.ga4(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,H.kv(q.getAttribute(o)))}},
ga4:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.a([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.d(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.h1.prototype={
h:function(a,b){return this.a.getAttribute(H.kv(b))},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga4(this).length}}
W.lg.prototype={}
W.dN.prototype={
hp:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.nF(s,this.c,r,!1)}}}
W.k4.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.lu.prototype={}
W.cu.prototype={
eH:function(a){var s
if($.dO.gbH($.dO)){for(s=0;s<262;++s)$.dO.m(0,C.W[s],W.qo())
for(s=0;s<12;++s)$.dO.m(0,C.n[s],W.qp())}},
b0:function(a){return $.nB().B(0,W.cQ(a))},
aw:function(a,b,c){var s=$.dO.h(0,W.cQ(a)+"::"+b)
if(s==null)s=$.dO.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaO:1}
W.P.prototype={
gS:function(a){return new W.cS(a,this.gl(a))}}
W.dh.prototype={
b0:function(a){return C.b.dv(this.a,new W.j5(a))},
aw:function(a,b,c){return C.b.dv(this.a,new W.j4(a,b,c))},
$iaO:1}
W.j5.prototype={
$1:function(a){return a.b0(this.a)},
$S:26}
W.j4.prototype={
$1:function(a){return a.aw(this.a,this.b,this.c)},
$S:26}
W.dY.prototype={
eM:function(a,b,c,d){var s,r,q
this.a.ah(0,c)
s=b.bR(0,new W.kc())
r=b.bR(0,new W.kd())
this.b.ah(0,s)
q=this.c
q.ah(0,C.v)
q.ah(0,r)},
b0:function(a){return this.a.B(0,W.cQ(a))},
aw:function(a,b,c){var s=this,r=W.cQ(a),q=s.c
if(q.B(0,r+"::"+b))return s.d.hw(c)
else if(q.B(0,"*::"+b))return s.d.hw(c)
else{q=s.b
if(q.B(0,r+"::"+b))return!0
else if(q.B(0,"*::"+b))return!0
else if(q.B(0,r+"::*"))return!0
else if(q.B(0,"*::*"))return!0}return!1},
$iaO:1}
W.kc.prototype={
$1:function(a){return!C.b.B(C.n,a)},
$S:27}
W.kd.prototype={
$1:function(a){return C.b.B(C.n,a)},
$S:27}
W.hB.prototype={
aw:function(a,b,c){if(this.eB(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.B(0,b)
return!1}}
W.ki.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:35}
W.hA.prototype={
b0:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cQ(a)==="foreignObject")return!1
if(s)return!0
return!1},
aw:function(a,b,c){if(b==="is"||C.a.a2(b,"on"))return!1
return this.b0(a)},
$iaO:1}
W.cS.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lU(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gC:function(a){return H.Y(this).c.a(this.d)}}
W.kb.prototype={}
W.hL.prototype={
cX:function(a){var s,r=new W.kq(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
bl:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.lV(a)
else b.removeChild(a).toString},
hc:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.nH(a)
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
try{r=J.cE(a)}catch(n){H.an(n)}try{q=W.cQ(a)
this.hb(a,b,l,r,q,k,j)}catch(n){if(H.an(n) instanceof P.aJ)throw n
else{this.bl(a,b)
p=window
p.toString
p="Removing corrupted element "+H.z(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
hb:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.bl(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.b0(a)){m.bl(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.z(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.aw(a,"is",g)){m.bl(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.ga4(f)
q=H.a(s.slice(0),H.kt(s))
for(p=f.ga4(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.nL(o)
H.kv(o)
if(!r.aw(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.z(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.cX(s)}}}
W.kq.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.hc(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.bl(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.lp("Corrupt HTML")
throw H.c(n)}}catch(p){H.an(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:34}
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
W.dZ.prototype={}
W.e_.prototype={}
W.hq.prototype={}
W.hr.prototype={}
W.hw.prototype={}
W.hC.prototype={}
W.hD.prototype={}
W.e1.prototype={}
W.e2.prototype={}
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
cC:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bQ:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.kB(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.a_)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.jE("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.x.b(a))return a
if(t.cH.b(a)||t.dE.b(a)||t.bK.b(a))return a
if(t.f.b(a)){s=n.cC(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.el(a,new P.kg(m,n))
return m.a}if(t.m.b(a)){s=n.cC(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.hF(a,s)}if(t.eH.b(a)){s=n.cC(a)
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
n.hW(a,new P.kh(m,n))
return m.b}throw H.c(P.jE("structured clone of other type"))},
hF:function(a,b){var s,r,q=J.bU(a),p=q.gl(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bQ(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.kg.prototype={
$2:function(a,b){this.a.a[a]=this.b.bQ(b)},
$S:15}
P.kh.prototype={
$2:function(a,b){this.a.b[a]=this.b.bQ(b)},
$S:33}
P.e5.prototype={$ibJ:1,
gdG:function(a){return this.a}}
P.kw.prototype={
$1:function(a){this.a.push(P.mT(a))},
$S:31}
P.kG.prototype={
$2:function(a,b){this.a[a]=P.mT(b)},
$S:15}
P.kf.prototype={
hW:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.eB.prototype={
gbj:function(){var s=this.b,r=H.Y(s)
return new H.aZ(new H.b7(s,new P.iv(),r.M("b7<k.E>")),new P.iw(),r.M("aZ<k.E,E>"))},
H:function(a,b){C.b.H(P.iJ(this.gbj(),!1,t.h),b)},
m:function(a,b,c){var s=this.gbj()
J.nK(s.b.$1(J.hZ(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.aR(this.gbj().a)},
h:function(a,b){var s=this.gbj()
return s.b.$1(J.hZ(s.a,b))},
gS:function(a){var s=P.iJ(this.gbj(),!1,t.h)
return new J.ao(s,s.length)}}
P.iv.prototype={
$1:function(a){return t.h.b(a)},
$S:24}
P.iw.prototype={
$1:function(a){return t.h.a(a)},
$S:60}
P.hn.prototype={
gcQ:function(a){return this.$ti.c.a(this.a+this.c)},
gdE:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.I.b(b)){s=o.a
r=J.aQ(b)
if(s===r.gbJ(b)){q=o.b
if(q===r.gbO(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcQ(b)&&p.a(q+o.d)===r.gdE(b)}else s=!1}else s=!1}else s=!1
return s},
gI:function(a){var s=this,r=s.a,q=C.c.gI(r),p=s.b,o=C.c.gI(p),n=s.$ti.c
r=C.c.gI(n.a(r+s.c))
p=C.c.gI(n.a(p+s.d))
return H.oy(H.jp(H.jp(H.jp(H.jp(0,q),o),r),p))}}
P.ac.prototype={
gbJ:function(a){return this.a},
gbO:function(a){return this.b},
gaP:function(a){return this.c},
gaJ:function(a){return this.d}}
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
P.j8.prototype={
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
gbD:function(a){return new P.eB(a,new W.a7(a))},
ak:function(a,b,c,d){var s,r,q,p,o=H.a([],t.Q)
o.push(W.mB(null))
o.push(W.mG())
o.push(new W.hA())
c=new W.hL(new W.dh(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.p.hG(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a7(q)
p=r.gaQ(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$io:1}
P.b3.prototype={$ib3:1}
P.fA.prototype={
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
this.H(a,new P.i3(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
m:function(a,b,c){throw H.c(P.D("Not supported"))},
$iJ:1}
P.i3.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
P.er.prototype={
gl:function(a){return a.length}}
P.bc.prototype={}
P.f1.prototype={
gl:function(a){return a.length}}
P.fT.prototype={}
P.cf.prototype={
is:function(a,b,c,d,e,f,g){var s
if(t.x.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.qg(g))
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
P.ht.prototype={}
P.hu.prototype={}
K.aS.prototype={
aK:function(a,b){return!0},
i:function(a){return"all"},
$ib_:1}
K.cU.prototype={
aK:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aK(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$ib_:1}
K.af.prototype={
aK:function(a,b){return!this.ex(0,b)},
i:function(a){return"!["+this.bU(0)+"]"}}
K.f9.prototype={
aK:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.aC(this.a),r=H.aC(this.b)
return s+".."+r},
$ib_:1}
K.u.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.Z(t.fX)
for(r=new H.bk(a,a.gl(a)),q=H.Y(r).c;r.u();)s.m(0,q.a(r.d),!0)
p=P.iJ(s.ga4(s),!0,t.S)
C.b.ew(p)
this.a=p},
aK:function(a,b){return C.b.B(this.a,b)},
i:function(a){return P.fo(this.a,0,null)},
$ib_:1}
L.fj.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dv(this.a.k(0,b),H.a([],t.z))
s.push(p)
return p},
hR:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aK(0,a))return p}return null},
i:function(a){return this.b},
dn:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.B(0,s==null?null:s.b))l+=" (consume)"
s=m.d
if(s==null)s=null
else{s=s.c
s=s.ga4(s)}s=J.aI(s==null?H.a([],t.s):s)
for(;s.u();){r=s.gC(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.B(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.q)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bU(0))}return l.charCodeAt(0)==0?l:l}}
L.fx.prototype={
i:function(a){var s=H.lR(this.b,"\n","\\n"),r=H.lR(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fy.prototype={
aN:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.q)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.jw.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.fj(this,b,H.a([],t.ab))
s.m(0,b,r)}return r},
P:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fy(a,P.X(s,s))
r.m(0,a,q)}return q},
cT:function(a){return this.iw(a)},
iw:function(a){var s=this
return P.pF(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1,a2
return function $async$cT(a3,a4){if(a3===1){o=a4
q=p}while(true)switch(q){case 0:c=s.d
b=t.t
a0=H.a([],b)
a1=H.a([],b)
a2=H.a([],b)
n=H.Y(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a2.length!==0)h=C.b.cO(a2,0)
else{if(!r.u()){q=3
break}h=n.a(r.d)}a1.push(h);++k
g=c==null
f=g?null:c.hR(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.fo(a1,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.z(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a1.fixed$length)H.h(P.D("removeRange"))
P.bn(0,i,a1.length)
a1.splice(0,i-0)
C.b.ah(a2,a1)
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
g=new L.fx(d==null?g.b:d,e,k)
l=g}i=a1.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.B(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.oO()
case 1:return P.oP(o)}}},t.bJ)},
i:function(a){var s,r=new P.a0(""),q=this.d
if(q!=null)r.a=""+(q.dn()+"\n")
for(q=this.a,q=q.giy(q),q=q.gS(q);q.u();){s=q.gC(q)
if(s!=this.d)r.a+=H.z(s==null?null:s.dn())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.dv.prototype={
i:function(a){return this.b.b+": "+this.bU(0)}}
O.ap.prototype={
cY:function(a,b,c){this.b=b
this.c=a},
bv:function(a,b){return this.cY(a,null,b)},
fR:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
eG:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var s=this.a
return new J.ao(s,s.length)},
L:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r,q=this,p=H.Y(q).M("w<ap.T>")
if(q.fR(H.a([b],p))){s=q.a
r=s.length
s.push(b)
q.eG(r,H.a([b],p))}},
$ij:1}
O.dc.prototype={
gl:function(a){return this.a.length},
gv:function(){var s=this.b
return s==null?this.b=D.O():s},
aT:function(){var s=this.b
return s==null?null:s.G(null)},
ga5:function(a){var s=this.a
if(s.length>0)return C.b.gay(s)
else return V.aN()},
eh:function(a){this.a.push(a)
this.aT()},
cL:function(){var s=this.a
if(s.length>0){s.pop()
this.aT()}}}
E.i6.prototype={}
E.bH.prototype={
sac:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().A(0,s.gec())
if(b!=null)b.gv().n(0,s.gec())
s.aL(new D.H("shape",r,b))}},
sbq:function(a){var s,r,q=this
if(!J.G(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gv().A(0,q.gea())
if(a!=null)a.gv().n(0,q.gea())
r=q.r
q.aL(new D.H("mover",s,r))}},
aB:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.bc(0,b,q)
if(!J.G(o,q.x)){s=q.x
q.x=o
q.aL(new D.H("matrix",s,o))}for(p=q.y.a,p=new J.ao(p,p.length),r=H.Y(p).c;p.u();)r.a(p.d).aB(0,b)},
b8:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga5(q))
else o.push(p.K(0,q.ga5(q)))
q.aT()
a.ei(r.f)
s=C.b.gay(a.dy)
if(r.d!=null)if(s!=null)s.il(a,r)
for(p=r.y.a,p=new J.ao(p,p.length),o=H.Y(p).c;p.u();)o.a(p.d).b8(a)
a.eg()
q.cL()},
aL:function(a){var s=this.z
return s==null?null:s.G(a)},
U:function(){return this.aL(null)},
ed:function(a){this.e=null
this.aL(a)},
i8:function(){return this.ed(null)},
eb:function(a){return this.aL(a)},
i7:function(){return this.eb(null)},
e9:function(a){return this.aL(a)},
i4:function(){return this.e9(null)},
i3:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ge8(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.c2()
m=n.a;(m==null?n.a=H.a([],q):m).push(r)}this.U()},
i6:function(a,b){var s,r
for(s=b.gS(b),r=this.ge8();s.u();)s.gC(s).gv().A(0,r)
this.U()},
i:function(a){return"Unnamed entity"}}
E.c_.prototype={
i:function(a){return this.b}}
E.cd.prototype={
i:function(a){return this.b}}
E.h2.prototype={}
E.jb.prototype={
eF:function(a,b){var s=this
s.cy.gv().n(0,new E.jc(s))
s.db.gv().n(0,new E.jd(s))
s.dx.gv().n(0,new E.je(s))},
gih:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga5(q).K(0,s.ga5(s))
q=s}return q},
ei:function(a){var s=this.dy
return s.push(a==null?C.b.gay(s):a)},
eg:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.jc.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:2}
E.jd.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:2}
E.je.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:2}
E.fw.prototype={
d3:function(a){this.ek()},
d2:function(){return this.d3(null)},
ghX:function(){var s,r=this,q=Date.now(),p=C.c.a6(P.m1(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a_(q,!1)
return s/p},
dj:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.cD(r*o)
r=s.clientHeight
r.toString
p=C.d.cD(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.mm(C.m,this.gio())}},
ek:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.E.f3(s)
r=W.mZ(new E.jt(this),t.H)
r.toString
C.E.h8(s,r)}},
ik:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.dj()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a_(p,!1)
q.y=P.m1(p-q.r.a).a*0.000001
p=q.cy
C.b.sl(p.a,0)
p.aT()
p=q.db
C.b.sl(p.a,0)
p.aT()
p=q.dx
C.b.sl(p.a,0)
p.aT()
p=q.dy
C.b.sl(p,0)
p.push(null)
m.b8(q)}q=n.Q
if(q!=null)q.G(null)}catch(o){s=H.an(o)
r=H.lM(o)
P.lQ("Error: "+H.z(s))
P.lQ("Stack: "+H.z(r))
throw H.c(s)}}}
E.jt.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ik()}},
$S:32}
Z.fP.prototype={}
Z.c0.prototype={
ck:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.an(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.z(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.k_.prototype={}
Z.cG.prototype={
b4:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
ck:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].ck(a)}},
ix:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
b8:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.a([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.dk(p.c)+"'")+"]")}o=H.a([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.q)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(l,", ")+"\nAttrs:   "+C.b.j(o,", ")}}
Z.c6.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.dk(this.c)+"'")+"]"}}
Z.br.prototype={
gcZ:function(a){var s=this.a,r=(s&$.bA().a)!==0?3:0
if((s&$.bz().a)!==0)r+=3
if((s&$.by().a)!==0)r+=3
if((s&$.bB().a)!==0)r+=2
if((s&$.bW().a)!==0)r+=3
if((s&$.ej().a)!==0)r+=3
if((s&$.ek().a)!==0)r+=4
if((s&$.cD().a)!==0)++r
return(s&$.bx().a)!==0?r+4:r},
hx:function(a){var s,r=$.bA(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bz()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.by()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bB()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bW()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ej()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ek()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cD()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bx()
if((q&r.a)!==0)if(s===a)return r
return $.nz()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.br))return!1
return this.a===b.a},
i:function(a){var s=H.a([],t.s),r=this.a
if((r&$.bA().a)!==0)s.push("Pos")
if((r&$.bz().a)!==0)s.push("Norm")
if((r&$.by().a)!==0)s.push("Binm")
if((r&$.bB().a)!==0)s.push("Txt2D")
if((r&$.bW().a)!==0)s.push("TxtCube")
if((r&$.ej().a)!==0)s.push("Clr3")
if((r&$.ek().a)!==0)s.push("Clr4")
if((r&$.cD().a)!==0)s.push("Weight")
if((r&$.bx().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.j(s,"|")}}
D.i8.prototype={}
D.c2.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=H.a([],t.a):s).push(b)},
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
return!0}if(!o)C.b.H(P.iJ(p,!0,t.h2),new D.is(s))
r=q.b
if(r!=null){q.b=H.a([],t.a)
C.b.H(r,new D.it(s))}return!0},
hM:function(){return this.G(null)},
aA:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.G(s)}}}}
D.is.prototype={
$1:function(a){a.$1(this.a)},
$S:29}
D.it.prototype={
$1:function(a){a.$1(this.a)},
$S:29}
D.W.prototype={}
D.bg.prototype={}
D.bh.prototype={}
D.H.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.z(this.d)+" => "+H.z(this.e)}}
X.cH.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cH))return!1
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
X.iF.prototype={}
X.d4.prototype={}
X.iL.prototype={
bi:function(a,b){var s,r=this,q=Date.now(),p=r.x.R(0,new V.T(b.a,b.b)),o=r.a.gb1(),n=$.aa
if(n==null)n=$.aa=new V.T(0,0)
s=r.x
r.z=new P.a_(q,!1)
r.x=p
return new X.ca(a,n,s,o,p)},
cK:function(a,b){this.r=a.a
return!1},
bs:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
br:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.bi(a,b))
return!0},
ic:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gb1()
r=this.x
Date.now()
q.G(new X.cb(new V.a6(a.a,a.b),s,r))
return!0},
fG:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.G(new X.d4(c,q.a.gb1(),b))
q.y=new P.a_(s,!1)
s=$.aa
q.x=s==null?$.aa=new V.T(0,0):s}}
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
X.ca.prototype={}
X.j3.prototype={
c2:function(a,b,c){var s=this,r=new P.a_(Date.now(),!1),q=s.a.gb1(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.ca(a,p,o,q,b)},
cK:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.G(this.c2(a,b,!0))
return!0},
bs:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.G(r.c2(a,b,!0))
return!0},
br:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.c2(a,b,!1))
return!0},
ie:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gb1()
Date.now()
r.G(new X.cb(new V.a6(a.a,a.b),s,b))
return!0},
gdI:function(){var s=this.b
return s==null?this.b=D.O():s},
gcU:function(){var s=this.c
return s==null?this.c=D.O():s},
ge7:function(){var s=this.d
return s==null?this.d=D.O():s}}
X.cb.prototype={}
X.f8.prototype={}
X.du.prototype={}
X.jy.prototype={
bi:function(a,b){var s,r,q,p,o=this,n=new P.a_(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.aa
if(r==null){r=new V.T(0,0)
$.aa=r
s=r}else s=r}r=o.a.gb1()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.du(q,p,r,s)},
ib:function(a){var s=this.b
if(s==null)return!1
s.G(this.bi(a,!0))
return!0},
i9:function(a){var s=this.c
if(s==null)return!1
s.G(this.bi(a,!0))
return!0},
ia:function(a){var s=this.d
if(s==null)return!1
s.G(this.bi(a,!1))
return!0}}
X.fN.prototype={
gb5:function(a){var s=this.b
return s==null?this.b=new X.iF(new X.a9(!1,!1,!1),P.d0(t.S)):s},
ga9:function(){var s,r=this.c
if(r==null){r=$.aa
if(r==null){r=$.aa=new V.T(0,0)
s=r}else s=r
r=this.c=new X.j3(this,r,s,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1))}return r},
gal:function(){var s=this.d
if(s==null){s=$.aa
if(s==null)s=$.aa=new V.T(0,0)
s=this.d=new X.iL(this,s,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1))}return s},
gbb:function(){var s,r=this.e
if(r==null){r=$.aa
if(r==null){r=$.aa=new V.T(0,0)
s=r}else s=r
r=this.e=new X.jy(this,r,s,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1))}return r},
gb1:function(){var s=this.a
return V.mf(0,0,C.i.gdF(s).c,C.i.gdF(s).d)},
d9:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eL(p,new X.a9(s,r,q))},
aZ:function(a){var s,r,q=this.gb5(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a9(p,s,r)},
cg:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gb5(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a9(s,r===!0,q===!0)},
aH:function(a){var s,r,q,p
if(a==null){s=$.aa
return s==null?$.aa=new V.T(0,0):s}s=this.a.getBoundingClientRect()
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
bk:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a6(r,s)},
cc:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.a([],t.cG)
r=a.touches
if(r==null)r=H.a([],t.gT)
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
s.push(new V.T(n-m,l-k))}return s},
aE:function(a){var s,r,q,p
if(a==null)return new X.cH(0,new X.a9(!1,!1,!1))
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
return new X.cH(s,new X.a9(r,q,p))},
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
fA:function(a){return this.f=!0},
fl:function(a){return this.f=!1},
fs:function(a){if(this.f&&this.c3(a))a.preventDefault()},
fE:function(a){var s,r,q=this
if(!q.f)return
s=q.d9(a)
r=q.gb5(q)
r.c=s.b
r.d.n(0,s.a)},
fC:function(a){var s,r,q=this
if(!q.f)return
s=q.d9(a)
r=q.gb5(q)
r.c=s.b
r.d.A(0,s.a)},
fI:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aZ(a)
if(p.x){s=p.aE(a)
r=p.bk(a)
if(p.gal().cK(s,r))a.preventDefault()
return}s=p.aE(a)
q=p.aH(a)
if(p.ga9().cK(s,q))a.preventDefault()},
fM:function(a){var s,r,q,p=this
p.aZ(a)
s=p.aE(a)
if(p.x){r=p.bk(a)
if(p.gal().bs(s,r))a.preventDefault()
return}q=p.aH(a)
if(p.ga9().bs(s,q))a.preventDefault()},
fw:function(a){var s,r,q,p=this
if(!p.c3(a)){p.aZ(a)
s=p.aE(a)
if(p.x){r=p.bk(a)
if(p.gal().bs(s,r))a.preventDefault()
return}q=p.aH(a)
if(p.ga9().bs(s,q))a.preventDefault()}},
fK:function(a){var s,r,q,p=this
p.aZ(a)
s=p.aE(a)
if(p.x){r=p.bk(a)
if(p.gal().br(s,r))a.preventDefault()
return}q=p.aH(a)
if(p.ga9().br(s,q))a.preventDefault()},
fu:function(a){var s,r,q,p=this
if(!p.c3(a)){p.aZ(a)
s=p.aE(a)
if(p.x){r=p.bk(a)
if(p.gal().br(s,r))a.preventDefault()
return}q=p.aH(a)
if(p.ga9().br(s,q))a.preventDefault()}},
fO:function(a){var s,r,q=this
q.aZ(a)
s=new V.a6(C.D.ghJ(a),C.D.ghK(a)).K(0,q.Q)
if(q.x){if(q.gal().ic(s))a.preventDefault()
return}r=q.aH(a)
if(q.ga9().ie(s,r))a.preventDefault()},
fQ:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aE(q.y)
r=q.aH(q.y)
q.gal().fG(s,r,p)}},
h2:function(a){var s,r=this
r.a.focus()
r.f=!0
r.cg(a)
s=r.cc(a)
if(r.gbb().ib(s))a.preventDefault()},
fZ:function(a){var s
this.cg(a)
s=this.cc(a)
if(this.gbb().i9(s))a.preventDefault()},
h0:function(a){var s
this.cg(a)
s=this.cc(a)
if(this.gbb().ia(s))a.preventDefault()}}
D.c1.prototype={
aC:function(a){var s=this.r
return s==null?null:s.G(a)},
eK:function(){return this.aC(null)},
$iaz:1}
D.cZ.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.O():s},
ge3:function(){var s=this.z
return s==null?this.z=D.O():s},
aC:function(a){var s=this.y
return s==null?null:s.G(a)},
dg:function(a){var s=this.z
return s==null?null:s.G(a)},
fF:function(){return this.dg(null)},
fT:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.eI(a[r]))return!1
return!0},
ff:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gdf(),q=this.f,p=t.a,o=0;o<b.length;b.length===s||(0,H.q)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.c2()
l=m.a;(l==null?m.a=H.a([],p):l).push(r)}this.aC(new D.bg())},
fX:function(a,b){var s,r,q,p
for(s=b.gS(b),r=this.gdf(),q=this.e;s.u();){p=s.gC(s)
C.b.A(q,p)
p.gv().A(0,r)}this.aC(new D.bh())},
eI:function(a){var s=C.b.B(this.f,a)
return s}}
V.aU.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aU))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.aw.prototype={
cR:function(a){var s=this
return H.a([s.a,s.b,s.c,s.d],t.n)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aw))return!1
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
V.iq.prototype={}
V.db.prototype={
ae:function(a,b){var s=this,r=H.a([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cC(H.a([o.a,o.d,o.r],n),3,0),l=V.cC(H.a([o.b,o.e,o.x],n),3,0),k=V.cC(H.a([o.c,o.f,o.y],n),3,0)
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
e1:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.F().toString
if(Math.abs(b3-0)<1e-9)return V.aN()
s=1/b3
r=-l
q=-a2
return V.b0((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
K:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.b0(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bP:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.x(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bt:function(a){var s=this,r=a.a,q=a.b,p=a.c
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
J:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cC(H.a([n.a,n.e,n.y,n.cx],m),3,0),k=V.cC(H.a([n.b,n.f,n.z,n.cy],m),3,0),j=V.cC(H.a([n.c,n.r,n.Q,n.db],m),3,0),i=V.cC(H.a([n.d,n.x,n.ch,n.dx],m),3,0)
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
af:function(a){return new V.a6(a.a-this.a,a.b-this.b)},
R:function(a,b){return new V.T(this.a+b.a,this.b+b.b)},
a_:function(a,b){var s
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.aa
return s==null?$.aa=new V.T(0,0):s}return new V.T(this.a/b,this.b/b)},
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
R:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
aR:function(a,b){return new V.N(this.a-b.a,this.b-b.b,this.c-b.c)},
K:function(a,b){return new V.N(this.a*b,this.b*b,this.c*b)},
a_:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.lo()
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
gaz:function(){var s=this.c,r=this.d
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
V.a6.prototype={
bo:function(a){return Math.sqrt(this.a8(this))},
a8:function(a){return this.a*a.a+this.b*a.b},
K:function(a,b){return new V.a6(this.a*b,this.b*b)},
a_:function(a,b){var s
$.F().toString
if(Math.abs(b-0)<1e-9){s=$.bR
return s==null?$.bR=new V.a6(0,0):s}return new V.a6(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
s=b.a
$.F().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.x.prototype={
bo:function(a){return Math.sqrt(this.a8(this))},
a8:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cF:function(a,b){return new V.x(V.hX(this.a,a.a,b),V.hX(this.b,a.b,b),V.hX(this.c,a.c,b))},
D:function(){var s=this,r=Math.sqrt(s.a8(s))
if(r===1)return s
return s.a_(0,r)},
aI:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.x(s*r-q*p,q*o-n*r,n*p-s*o)},
R:function(a,b){return new V.x(this.a+b.a,this.b+b.b,this.c+b.c)},
bd:function(a){return new V.x(-this.a,-this.b,-this.c)},
K:function(a,b){return new V.x(this.a*b,this.b*b,this.c*b)},
a_:function(a,b){$.F().toString
if(Math.abs(b-0)<1e-9)return V.dK()
return new V.x(this.a/b,this.b/b,this.c/b)},
e2:function(){$.F().toString
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
bo:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
a_:function(a,b){var s=this
$.F().toString
if(Math.abs(b-0)<1e-9)return V.oH()
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
U.i9.prototype={
bW:function(a){var s=V.qH(a,this.c,this.b)
return s},
gv:function(){var s=this.y
return s==null?this.y=D.O():s},
T:function(a){var s=this.y
return s==null?null:s.G(a)},
scV:function(a,b){},
scG:function(a){var s,r=this,q=r.b
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bW(s)}r.T(new D.H("maximumLocation",q,r.b))}},
scI:function(a){var s,r=this,q=r.c
$.F().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bW(s)}r.T(new D.H("minimumLocation",q,r.c))}},
sZ:function(a,b){var s,r=this
b=r.bW(b)
s=r.d
$.F().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.T(new D.H("location",s,b))}},
scH:function(a){var s,r,q=this,p=q.e
$.F().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.T(new D.H("maximumVelocity",p,a))}},
sa1:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.F().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.T(new D.H("velocity",r,a))}},
scr:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.F().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.T(new D.H("dampening",s,a))}},
aB:function(a,b){var s,r,q,p=this,o=p.f
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
U.cJ.prototype={
gv:function(){var s=this.b
return s==null?this.b=D.O():s},
bc:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cJ))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.c4.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.O():s},
T:function(a){var s=this.e
return s==null?null:s.G(a)},
ab:function(){return this.T(null)},
fd:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaY(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
if(o!=null){n=o.gv()
m=n.a;(m==null?n.a=H.a([],q):m).push(r)}}this.T(new D.bg())},
fV:function(a,b){var s,r
for(s=b.gS(b),r=this.gaY();s.u();)s.gC(s).gv().A(0,r)
this.T(new D.bh())},
bc:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ao(o,o.length),n=H.Y(o).c,s=null;o.u();){r=n.a(o.d)
if(r!=null){q=r.bc(0,b,c)
s=s==null?q:q.K(0,s)}}p.f=s==null?V.aN():s
o=p.e
if(o!=null)o.aA(0)}return p.f},
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
$ia1:1}
U.a1.prototype={}
U.dG.prototype={
gv:function(){var s=this.cy
return s==null?this.cy=D.O():s},
T:function(a){var s=this.cy
return s==null?null:s.G(a)},
ab:function(){return this.T(null)},
bm:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.ga9().gdI().n(0,s.gc4())
a.ga9().ge7().n(0,s.gc6())
a.ga9().gcU().n(0,s.gc8())
return!0},
c5:function(a){var s=this,r=s.c,q=s.a
if(!r.q(0,q==null?null:q.gb5(q).c))return
s.x=s.y=!0
s.z=s.b.d},
c7:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.af(a.d)
if(s.a8(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sZ(0,-a.y.af(r).K(0,2).a_(0,s.gaz()).a*2.5+p.z)
q.sa1(0)
p.Q=a.z.af(r).K(0,2).a_(0,s.gaz())
p.ab()},
c9:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a8(s)>0.0001){r.b.sa1(r.Q.a*10*2.5)
r.ab()}},
bc:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.aB(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.b0(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$ia1:1}
U.dH.prototype={
gv:function(){var s=this.fx
return s==null?this.fx=D.O():s},
T:function(a){var s=this.fx
return s==null?null:s.G(a)},
ab:function(){return this.T(null)},
bm:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.ga9().gdI().n(0,q.gc4())
a.ga9().ge7().n(0,q.gc6())
a.ga9().gcU().n(0,q.gc8())
s=a.gal()
r=s.f
s=r==null?s.f=D.O():r
s.n(0,q.gf5())
s=a.gal()
r=s.d
s=r==null?s.d=D.O():r
s.n(0,q.gf7())
s=a.gbb()
r=s.b
s=r==null?s.b=D.O():r
s.n(0,q.ghn())
s=a.gbb()
r=s.d
s=r==null?s.d=D.O():r
s.n(0,q.ghl())
s=a.gbb()
r=s.c
s=r==null?s.c=D.O():r
s.n(0,q.ghj())
return!0},
aX:function(a){return new V.a6(a.a,a.b)},
c5:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
c7:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.af(a.d)
if(s.a8(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aX(a.y.af(r).K(0,2).a_(0,s.gaz()))
p=n.c
p.sZ(0,-q.a*2.5+n.cy)
o=n.b
o.sZ(0,-q.b*2.5+n.db)
o.sa1(0)
p.sa1(0)
n.dx=n.aX(a.z.af(r).K(0,2).a_(0,s.gaz()))
n.ab()},
c9:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a8(s)>0.0001){r.c.sa1(-r.dx.a*10*2.5)
r.b.sa1(-r.dx.b*10*2.5)
r.ab()}},
f6:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
f8:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.aX(a.y.af(r).K(0,2).a_(0,s.gaz()))
p=n.c
p.sZ(0,-q.a*2.5+n.cy)
o=n.b
o.sZ(0,-q.b*2.5+n.db)
o.sa1(0)
p.sa1(0)
n.dx=n.aX(a.z.af(r).K(0,2).a_(0,s.gaz()))
n.ab()},
ho:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
hm:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.af(a.d)
if(s.a8(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aX(a.y.af(r).K(0,2).a_(0,s.gaz()))
p=n.c
p.sZ(0,-q.a*2.5+n.cy)
o=n.b
o.sZ(0,-q.b*2.5+n.db)
o.sa1(0)
p.sa1(0)
n.dx=n.aX(a.z.af(r).K(0,2).a_(0,s.gaz()))
n.ab()},
hk:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a8(s)>0.0001){r.c.sa1(-r.dx.a*10*2.5)
r.b.sa1(-r.dx.b*10*2.5)
r.ab()}},
bc:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.aB(0,s)
n=p.b
n.aB(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.b0(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.K(0,V.b0(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia1:1}
U.dI.prototype={
gv:function(){var s=this.r
return s==null?this.r=D.O():s},
T:function(a){var s=this.r
return s==null?null:s.G(a)},
bm:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.ga9()
r=s.e
s=r==null?s.e=D.O():r
r=this.gfa()
s.n(0,r)
s=a.gal()
q=s.e;(q==null?s.e=D.O():q).n(0,r)
return!0},
fb:function(a){var s=this,r=s.b,q=s.a
if(!r.q(0,q==null?null:q.gb5(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.T(new D.H("zoom",r,q))}},
bc:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.b0(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$ia1:1}
M.ez.prototype={
aD:function(a){var s=this.y
return s==null?null:s.G(a)},
eL:function(){return this.aD(null)},
fn:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gau(),q=t.a,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.c2()
m=n.a;(m==null?n.a=H.a([],q):m).push(r)}this.aD(new D.bg())},
fp:function(a,b){var s,r
for(s=b.gS(b),r=this.gau();s.u();)s.gC(s).gv().A(0,r)
this.aD(new D.bh())},
sem:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gv().A(0,r.gau())
s=r.d
r.d=a
if(a!=null)a.gv().n(0,r.gau())
r.aD(new D.H("technique",s,r.d))}},
gv:function(){var s=this.y
return s==null?this.y=D.O():s},
b8:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.ei(d.d)
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
g=V.b0(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.eh(g)
f=$.nk()
e=s.b
if(e!=null)f=e.a.K(0,f)
a.db.eh(f)}s=d.d
if(s!=null)s.aB(0,a)
for(s=d.e.a,r=new J.ao(s,s.length),o=H.Y(r).c;r.u();)o.a(r.d).aB(0,a)
for(s=new J.ao(s,s.length),r=H.Y(s).c;s.u();)r.a(s.d).b8(a)
if(d.b!=null){a.cy.cL()
a.db.cL()}a.eg()}}
A.ep.prototype={}
A.i1.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hN:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hL:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.aV.prototype={
gat:function(a){var s=this.b?2:0
return s|0},
i:function(a){var s=this.b?2:0
return""+(s|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.aV))return!1
s=this.b===b.b&&!0
return s}}
A.eQ.prototype={
eE:function(d7,d8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=null,d1=u.C,d2="Required uniform value, ",d3=", was not defined or used in shader.",d4=c9.x,d5=new P.a0(""),d6=d4.fr
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
A.pU(d4,d5)
A.pW(d4,d5)
A.pV(d4,d5)
A.pY(d4,d5)
A.pZ(d4,d5)
A.pX(d4,d5)
A.q_(d4,d5)
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
m=A.pT(d4)
c9.c=n
c9.d=m
l=c9.da(n,35633)
k=c9.da(c9.d,35632)
s=c9.a
q=s.createProgram()
q.toString
c9.e=q
s.attachShader(c9.gaF(),l)
s.attachShader(c9.gaF(),k)
s.linkProgram(c9.gaF())
if(!H.mS(s.getProgramParameter(c9.gaF(),35714))){j=s.getProgramInfoLog(c9.gaF())
if(j==null)j="undefined log error"
s.deleteProgram(c9.e)
H.h(P.f("Failed to link shader: "+j))}c9.hf()
c9.hh()
c9.y=c9.gai(c9).h(0,"posAttr")
c9.Q=c9.gai(c9).h(0,"normAttr")
c9.z=c9.gai(c9).h(0,"binmAttr")
c9.ch=c9.gai(c9).h(0,"txt2DAttr")
c9.cx=c9.gai(c9).h(0,"txtCubeAttr")
c9.cy=c9.gai(c9).h(0,"bendAttr")
if(d4.dy)c9.fy=t.j.a(c9.gX().W(0,"invViewMat"))
if(d6)c9.db=t.j.a(c9.gX().W(0,"objMat"))
if(r)c9.dx=t.j.a(c9.gX().W(0,"viewObjMat"))
d6=t.j
c9.fr=d6.a(c9.gX().W(0,"projViewObjMat"))
if(d4.go)c9.dy=d6.a(c9.gX().W(0,"viewMat"))
if(d4.x1)c9.go=t.E.a(c9.gX().W(0,"txt2DMat"))
if(d4.x2)c9.id=d6.a(c9.gX().W(0,"txtCubeMat"))
if(d4.y1)c9.k1=d6.a(c9.gX().W(0,"colorMat"))
c9.k3=H.a([],t.p)
s=d4.bF
if(s>0){c9.k2=t.w.a(c9.gX().W(0,"bendMatCount"))
for(i=0;i<s;++i){r=c9.k3
h=c9.r
if(h==null)H.h(P.f(d1))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.h(P.f(d2+q+d3))
r.push(d6.a(g))}}if(d4.a.b)c9.r1=t.G.a(c9.gX().W(0,"emissionTxt"))
if(d4.b.b)c9.ry=t.G.a(c9.gX().W(0,"ambientTxt"))
if(d4.c.b)c9.y1=t.G.a(c9.gX().W(0,"diffuseTxt"))
if(d4.d.b)c9.b3=t.G.a(c9.gX().W(0,"invDiffuseTxt"))
d6=d4.e
s=d6.b||!1
if(s){c9.dM=t.v.a(c9.gX().W(0,"shininess"))
if(d6.b)c9.dL=t.G.a(c9.gX().W(0,"specularTxt"))}if(d4.f.b)c9.dN=t.G.a(c9.gX().W(0,"bumpTxt"))
if(d4.db){c9.dO=t.bz.a(c9.gX().W(0,"envSampler"))
if(d4.r.b)c9.dP=t.G.a(c9.gX().W(0,"reflectTxt"))
d6=d4.x
s=d6.b||!1
if(s){c9.dQ=t.v.a(c9.gX().W(0,"refraction"))
if(d6.b)c9.dR=t.G.a(c9.gX().W(0,"refractTxt"))}}if(d4.y.b)c9.dS=t.G.a(c9.gX().W(0,"alphaTxt"))
if(d4.k1){d6=d4.z
s=d6.length
if(s!==0){r=t.S
c9.cs=P.X(r,t.W)
c9.ct=P.X(r,t.O)
for(r=t.w,q=t.g,p=t.v,o=t.c,f=0;f<d6.length;d6.length===s||(0,H.q)(d6),++f){e=d6[f]
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
a9=a8}b.push(new A.dz(g,a2,a3,a9,a8,a7))}c9.ct.m(0,d,b)
a=c9.cs
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.m(0,d,r.a(g))}}d6=d4.Q
s=d6.length
if(s!==0){r=t.S
c9.cu=P.X(r,t.W)
c9.cv=P.X(r,t.d)
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
b.push(new A.dA(b2,b1,b0,g,a2,b3))}c9.cv.m(0,d,b)
a=c9.cu
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.m(0,d,r.a(g))}}d6=d4.ch
s=d6.length
if(s!==0){r=t.S
c9.cw=P.X(r,t.W)
c9.cz=P.X(r,t.l)
for(r=t.w,q=t.g,p=t.E,o=t.bz,a=t.r,a0=t.v,a1=t.B,f=0;f<d6.length;d6.length===s||(0,H.q)(d6),++f){e=d6[f]
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
a9=a8}b.push(new A.dC(g,a2,c0,a3,b3,c1,c2,a9,a8,a7))}c9.cz.m(0,d,b)
b4=c9.cw
h=c9.r
if(h==null)H.h(P.f(d1))
b5=c+"Count"
g=h.h(0,b5)
if(g==null)H.h(P.f(d2+b5+d3))
b4.m(0,d,r.a(g))}}d4=d4.cx
d6=d4.length
if(d6!==0){s=t.S
c9.cA=P.X(s,t.W)
c9.cB=P.X(s,t.R)
for(s=t.w,r=t.g,q=t.v,p=t.r,o=t.G,a=t.J,f=0;f<d4.length;d4.length===d6||(0,H.q)(d4),++f){e=d4[f]
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
b.push(new A.dF(g,a2,a3,a4,b2,b1,c6,c5,c2,c8,c7,a9,a8,a7,b3,c1))}c9.cB.m(0,d,b)
a0=c9.cA
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"Count"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
a0.m(0,d,s.a(g))}}}},
aq:function(a,b){if(b!=null&&b.d)if(a!=null)a.eu(b)},
he:function(a,b){}}
A.bb.prototype={
i:function(a){return"barLight"+this.a}}
A.bd.prototype={
i:function(a){return"dirLight"+this.a}}
A.bm.prototype={
i:function(a){return"pointLight"+this.a}}
A.bo.prototype={
i:function(a){return"spotLight"+this.a}}
A.iP.prototype={
i:function(a){return this.b3}}
A.dz.prototype={}
A.dA.prototype={}
A.dC.prototype={}
A.dF.prototype={}
A.dn.prototype={
gai:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gX:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaF:function(){var s=this.e
if(s==null)throw H.c(P.f(u.p))
return s},
da:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.mS(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.z(q)+'": '+s))}return q},
hf:function(){var s,r,q,p,o=this,n=u.p,m=H.a([],t.eu),l=o.a,k=H.ku(l.getProgramParameter(o.gaF(),35721))
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
m.push(new A.ep(l,q,p))}o.f=new A.i1(m)},
hh:function(){var s,r,q,p,o,n,m=this,l=u.p,k=H.a([],t.dC),j=m.a,i=H.ku(j.getProgramParameter(m.gaF(),35718))
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
k.push(m.hH(o,n,q,p))}m.r=new A.jD(k)},
aW:function(a,b,c){var s=this.a
if(a===1)return new A.cm(s,b,c)
else return A.lr(s,this.e,b,a,c)},
f0:function(a,b,c){var s=this.a
if(a===1)return new A.dD(s,b,c)
else return A.lr(s,this.e,b,a,c)},
f1:function(a,b,c){var s=this.a
if(a===1)return new A.dE(s,b,c)
else return A.lr(s,this.e,b,a,c)},
bA:function(a,b){return new P.h4(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hH:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aW(b,c,d)
case 5121:return s.aW(b,c,d)
case 5122:return s.aW(b,c,d)
case 5123:return s.aW(b,c,d)
case 5124:return s.aW(b,c,d)
case 5125:return s.aW(b,c,d)
case 5126:return new A.dw(s.a,c,d)
case 35664:return new A.fD(s.a,c,d)
case 35665:return new A.dx(s.a,c,d)
case 35666:return new A.dy(s.a,c,d)
case 35667:return new A.fE(s.a,c,d)
case 35668:return new A.fF(s.a,c,d)
case 35669:return new A.fG(s.a,c,d)
case 35674:return new A.fH(s.a,c,d)
case 35675:return new A.dB(s.a,c,d)
case 35676:return new A.cn(s.a,c,d)
case 35678:return s.f0(b,c,d)
case 35680:return s.f1(b,c,d)
case 35670:throw H.c(s.bA("BOOL",c))
case 35671:throw H.c(s.bA("BOOL_VEC2",c))
case 35672:throw H.c(s.bA("BOOL_VEC3",c))
case 35673:throw H.c(s.bA("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.a3.prototype={}
A.jD.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
W:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.w()},
w:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cm.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fE.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fF.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fG.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fC.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.dw.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.fD.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dx.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dy.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.fH.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dB.prototype={
ap:function(a){var s=new Float32Array(H.cx(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.cn.prototype={
ap:function(a){var s=new Float32Array(H.cx(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dD.prototype={
eu:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.dE.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.ks.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cF(q.b,b).cF(q.d.cF(q.c,b),c)
a.sZ(0,new V.N(p.a,p.b,p.c))
a.sbN(p.D())
q=1-b
s=1-c
a.sdB(new V.bN(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)},
$S:5}
F.kH.prototype={
$2:function(a,b){return V.hX(this.a,this.b,b)},
$S:18}
F.kJ.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.hX(-1,1,c),n=this.a.$2(b,c)
q=-q*n
s=p*n
a.sZ(0,new V.N(q,s,o))
a.sbN(new V.x(q,s,o).D())
a.sdB(new V.bN(1-c,2+c,-1,-1))},
$S:5}
F.kK.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:16}
F.kL.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:16}
F.kV.prototype={
$3:function(a,b,c){var s=c*3.141592653589793,r=Math.sin(s),q=b*6.283185307179586
q=new V.x(Math.cos(q)*r,Math.cos(s),Math.sin(q)*r).D()
a.sZ(0,new V.N(q.a,q.b,q.c))},
$S:5}
F.l8.prototype={
$2:function(a,b){return 0},
$S:18}
F.l7.prototype={
$3:function(a,b,c){var s,r=this.b.$2(b,c)
if(typeof r!=="number")return H.n8(r)
s=a.f
r=(s!=null?new V.x(s.a,s.b,s.c):V.dJ()).D().K(0,this.a+r)
a.sZ(0,new V.N(r.a,r.b,r.c))},
$S:5}
F.la.prototype={
$1:function(a){return new V.N(Math.cos(a),Math.sin(a),0)},
$S:25}
F.kU.prototype={
$1:function(a){var s=this.a*a,r=2+Math.cos(s),q=this.b*a
return new V.N(r*Math.cos(q)/2,r*Math.sin(q)/2,Math.sin(s)/2)},
$S:25}
F.kI.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.lT(l.$1(m),k)
k=J.lT(l.$1(m+3.141592653589793/n.c),k).aR(0,j)
s=new V.x(k.a,k.b,k.c).D()
r=$.mv
if(r==null){r=new V.x(1,0,0)
$.mv=r}q=s.aI(!s.q(0,r)?V.dJ():r).D()
r=q.aI(s).D()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.K(0,l*k)
k=q.K(0,o*k)
a.sZ(0,j.R(0,new V.N(l.a-k.a,l.b-k.b,l.c-k.c)))},
$S:5}
F.aq.prototype={
aS:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f(u.D))
if(r!==b.a||r!==c.a)throw H.c(P.f(u.R))
s.e=s.d=null
s.by(a)
s.bz(b)
s.dk(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gO().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.U()}},
bn:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.b.A(r.gO().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.U()}}s.cd()
s.ce()
s.h5()},
by:function(a){this.a=a
a.gO().b.push(this)},
bz:function(a){this.b=a
a.gO().c.push(this)},
dk:function(a){this.c=a
a.gO().d.push(this)},
cd:function(){var s=this.a
if(s!=null)C.b.A(s.gO().b,this)
this.a=null},
ce:function(){var s=this.b
if(s!=null)C.b.A(s.gO().c,this)
this.b=null},
h5:function(){var s=this.c
if(s!=null)C.b.A(s.gO().d,this)
this.c=null},
eU:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.dK()
if(n!=null)q=q.R(0,n)
if(s!=null)q=q.R(0,s)
if(r!=null)q=q.R(0,r)
if(q.e2())return p
return q.D()},
eW:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aR(0,n)
q=new V.x(o.a,o.b,o.c).D()
o=r.aR(0,n)
return q.aI(new V.x(o.a,o.b,o.c).D()).D()},
cn:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eU()
if(s==null){s=q.eW()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.U()}return!0},
eT:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.dK()
if(n!=null)q=q.R(0,n)
if(s!=null)q=q.R(0,s)
if(r!=null)q=q.R(0,r)
if(q.e2())return p
return q.D()},
eV:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.F().toString
if(Math.abs(p-0)<1e-9){j=b.aR(0,e)
o=new V.x(j.a,j.b,j.c).D()
if(q.a-r.a<0)o=o.bd(0)}else{n=(j-s.b)/p
j=b.aR(0,e).K(0,n).R(0,e).aR(0,h)
o=new V.x(j.a,j.b,j.c).D()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.bd(0)}m=l.d
if(m!=null){m=m.D()
o=m.aI(o).D().aI(m).D()}return o},
cl:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eT()
if(s==null){s=q.eV()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.U()}return!0},
aV:function(a,b){var s,r=b.a
if(r==null)throw H.c(P.f("May not replace a face's vertex with a vertex which is not attached to a shape."))
s=a.a
if(s!==r)throw H.c(P.f("May not replace a face's vertex with a vertex attached to a different shape."))},
ghB:function(a){var s=this
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
p=a+C.a.an(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gE(o)
p=p+C.a.an(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gE(o)
s=p+C.a.an(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.w()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.w()
return s+((p==null?"-":p)+"}")},
w:function(){return this.J("")}}
F.iu.prototype={}
F.jn.prototype={
b6:function(a,b,c){var s,r=null,q=b.a
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
eD:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.f("May not create a line with vertices attached to different shapes."))
s.by(a)
s.bz(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga7(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.U()}},
bn:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.b.A(r.ga7(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.U()}}s.cd()
s.ce()},
by:function(a){this.a=a
a.ga7(a).b.push(this)},
bz:function(a){this.b=a
a.ga7(a).c.push(this)},
cd:function(){var s=this.a
if(s!=null)C.b.A(s.ga7(s).b,this)
this.a=null},
ce:function(){var s=this.b
if(s!=null)C.b.A(s.ga7(s).c,this)
this.b=null},
aV:function(a,b){var s,r=b.a
if(r==null)throw H.c(P.f("May not replace a line's vertex with a vertex which is not attached to a shape."))
s=a.a
if(s!==r)throw H.c(P.f("May not replace a line's vertex with a vertex attached to a different shape."))},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
J:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gE(s)
s=a+C.a.an(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gE(r)
return s+C.a.an(C.c.i(r==null?-1:r),0)},
w:function(){return this.J("")}}
F.iG.prototype={}
F.jC.prototype={
b6:function(a,b,c){var s,r=null,q=b.a
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
return a+C.a.an(C.c.i(s),0)},
w:function(){return this.J("")}}
F.jg.prototype={
gV:function(){var s=this.a
return s==null?this.a=new F.y(this,H.a([],t.k)):s},
gaM:function(a){var s=this.b
return s==null?this.b=new F.bO(this,H.a([],t.q)):s},
ga7:function(a){var s=this.c
return s==null?this.c=new F.dq(this,H.a([],t.L)):s},
gO:function(){var s=this.d
return s==null?this.d=new F.dp(this,H.a([],t.u)):s},
gv:function(){var s=this.e
return s==null?this.e=D.O():s},
b7:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.gV().a0()
s=b.gV().c.length
for(a0=a1.gV().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.y(b,H.a([],q))
n.n(0,o.hE())}b.gV().a0()
for(a0=a1.gaM(a1).b,r=a0.length,n=t.q,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){m=a0[p]
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
l=(k==null?b.c=new F.dq(b,H.a([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,e)
new F.eN().eD(f,e)}for(a0=a1.gO().b,r=a0.length,n=t.u,p=0;p<a0.length;a0.length===r||(0,H.q)(a0),++p){d=a0[p]
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
l=(k==null?b.d=new F.dp(b,H.a([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,e)
k=l.a;(k==null?l.a=new F.y(l,H.a([],q)):k).n(0,c)
new F.aq().aS(f,e,c)}a0=b.e
if(a0!=null)a0.aA(0)},
ar:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gO().ar()||!1
if(!r.gV().ar())s=!1
q=r.e
if(q!=null)q.aA(0)
return s},
hQ:function(a,b){var s,r,q,p,o=this,n=o.gV().c.length
for(s=t.k,r=0;r<n;++r){q=o.a
q=(q==null?o.a=new F.y(o,H.a([],s)):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
if(b.b6(0,a,p))return p}return null},
h7:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.gV().n(0,a)
for(s=b.length,r=t.q,q=t.L,p=t.u,o=t.k,n=0;n<b.length;b.length===s||(0,H.q)(b),++n){m=b[n]
while(!0){l=m.d
if(l==null){l=m.d=new F.al(H.a([],p),H.a([],p),H.a([],p))
k=l}else k=l
if(!(l.b.length+l.c.length+l.d.length>0))break
l=k.h(0,0)
k=l.a
if(k==null||l.b==null||l.c==null)H.h(P.f("May not replace a face's vertex when the point has been disposed."))
if(J.G(k,m)){l.aV(m,a)
k=l.a
if(k!=null){j=k.d
C.b.A((j==null?k.d=new F.al(H.a([],p),H.a([],p),H.a([],p)):j).b,l)}l.a=null
l.a=a
k=a.d;(k==null?a.d=new F.al(H.a([],p),H.a([],p),H.a([],p)):k).b.push(l)
i=1}else i=0
if(J.G(l.b,m)){l.aV(m,a)
k=l.b
if(k!=null){j=k.d
C.b.A((j==null?k.d=new F.al(H.a([],p),H.a([],p),H.a([],p)):j).c,l)}l.b=null
l.b=a
k=a.d;(k==null?a.d=new F.al(H.a([],p),H.a([],p),H.a([],p)):k).c.push(l);++i}if(J.G(l.c,m)){l.aV(m,a)
k=l.c
if(k!=null){j=k.d
C.b.A((j==null?k.d=new F.al(H.a([],p),H.a([],p),H.a([],p)):j).d,l)}l.c=null
l.c=a
k=a.d;(k==null?a.d=new F.al(H.a([],p),H.a([],p),H.a([],p)):k).d.push(l);++i}if(i>0){l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.G(null)}}}}while(!0){l=m.c
if(l==null){l=m.c=new F.aG(H.a([],q),H.a([],q))
k=l}else k=l
if(!(l.b.length+l.c.length>0))break
l=k.h(0,0)
k=l.a
if(k==null||l.b==null)H.h(P.f("May not replace a line's vertex when the point has been disposed."))
if(J.G(k,m)){l.aV(m,a)
k=l.a
if(k!=null){j=k.c
C.b.A((j==null?k.c=new F.aG(H.a([],q),H.a([],q)):j).b,l)}l.a=null
l.a=a
k=a.c;(k==null?a.c=new F.aG(H.a([],q),H.a([],q)):k).b.push(l)
i=1}else i=0
if(J.G(l.b,m)){l.aV(m,a)
k=l.b
if(k!=null){j=k.c
C.b.A((j==null?k.c=new F.aG(H.a([],q),H.a([],q)):j).c,l)}l.b=null
l.b=a
k=a.c;(k==null?a.c=new F.aG(H.a([],q),H.a([],q)):k).c.push(l);++i}if(i>0){l=l.a
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
e6:function(a,b){var s,r,q,p,o,n,m=this,l=m.e
if(l!=null)++l.d
l=m.gV().c
s=H.a(l.slice(0),H.kt(l))
for(l=t.k;s.length!==0;){r=C.b.ghS(s)
C.b.cO(s,0)
q=H.a([],l)
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.b6(0,r,o)){q.push(o)
C.b.cO(s,p)}}if(q.length>1){n=b.b7(q)
if(n!=null){m.h7(n,q)
s.push(n)}}}m.gV().a0()
m.ga7(m).bM()
m.gO().bM()
m.gaM(m).ij()
m.ga7(m).cP(new F.jC())
m.gO().cP(new F.jn())
l=m.e
if(l!=null)l.aA(0)},
bC:function(){this.e6(new F.dL(),new F.j6())},
hz:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=34962,b={},a=e.gV().c.length,a0=a3.a,a1=(a0&$.bA().a)!==0?1:0
if((a0&$.bz().a)!==0)++a1
if((a0&$.by().a)!==0)++a1
if((a0&$.bB().a)!==0)++a1
if((a0&$.bW().a)!==0)++a1
if((a0&$.ej().a)!==0)++a1
if((a0&$.ek().a)!==0)++a1
if((a0&$.cD().a)!==0)++a1
if((a0&$.bx().a)!==0)++a1
s=a3.gcZ(a3)
r=P.d3(a*s,0,!1,t.gR)
b.a=0
q=P.oa(a1,new F.ji(b,e,a3,s*4,a,s,r),t.eT)
a0=a2.a
p=a0.createBuffer()
p.toString
a0.bindBuffer(c,p)
a0.bufferData(c,new Float32Array(H.cx(r)),35044)
a0.bindBuffer(c,d)
o=new Z.cG(new Z.fP(c,p),H.a([],t.fv),q,a3)
if(e.gaM(e).b.length!==0){n=H.a([],t.t)
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
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],m)):i).a0()}k=k.e}n.push(k==null?0:k);++l}h=Z.lt(a0,34963,n)
o.b.push(new Z.c6(0,n.length,h))}if(e.ga7(e).b.length!==0){n=H.a([],t.t)
p=t.L
m=t.k
l=0
while(!0){k=e.c
if(k==null){k=e.c=new F.dq(e,H.a([],p))
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
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],m)):i).a0()}k=k.e}n.push(k==null?0:k);++l}h=Z.lt(a0,34963,n)
o.b.push(new Z.c6(1,n.length,h))}if(e.gO().b.length!==0){n=H.a([],t.t)
p=t.u
m=t.k
l=0
while(!0){k=e.d
if(k==null){k=e.d=new F.dp(e,H.a([],p))
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
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.a([],m)):i).a0()}k=k.e}n.push(k==null?0:k);++l}h=Z.lt(a0,34963,n)
o.b.push(new Z.c6(4,n.length,h))}return o},
i:function(a){var s=this,r="   ",q=H.a([],t.s)
if(s.gV().c.length!==0){q.push("Vertices:")
q.push(s.gV().J(r))}if(s.gaM(s).b.length!==0){q.push("Points:")
q.push(s.gaM(s).J(r))}if(s.ga7(s).b.length!==0){q.push("Lines:")
q.push(s.ga7(s).J(r))}if(s.gO().b.length!==0){q.push("Faces:")
q.push(s.gO().J(r))}return C.b.j(q,"\n")},
U:function(){var s=this.e
return s==null?null:s.G(null)}}
F.ji.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hx(a),e=f.gcZ(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.y(o,H.a([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].i0(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.c0(f,e,c*4,g.d)},
$S:47}
F.dp.prototype={
bB:function(a,b,c,d){var s,r=this.a
r.gV().n(0,b)
r.gV().n(0,c)
r.gV().n(0,d)
s=new F.aq()
r=b.a
if(r==null)H.h(P.f(u.D))
if(r!=c.a||r!=d.a)H.h(P.f(u.R))
s.by(b)
s.bz(c)
s.dk(d)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gO().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.U()}return s},
ht:function(a){var s,r,q,p,o,n,m,l,k=H.a([],t.u),j=a.length
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
l=new F.aq()
l.aS(s,o,n)
k.push(l)}}return k},
hu:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.a([],t.u)
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
e=new F.aq()
e.aS(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,f)
e=new F.aq()
e.aS(j,g,f)
d.push(e)}else{(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,f)
e=new F.aq()
e.aS(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,f)
k=s.a;(k==null?s.a=new F.y(s,H.a([],r)):k).n(0,j)
e=new F.aq()
e.aS(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gl:function(a){return this.b.length},
cP:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gV().c.length-1,q=t.u,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.a([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.d
if(o==null)o=n.d=new F.al(H.a([],q),H.a([],q),H.a([],q))
m=o.b.length+o.c.length+o.d.length-1
for(;m>=0;m=k){o=n.d
l=(o==null?n.d=new F.al(H.a([],q),H.a([],q),H.a([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.d
if(a.b6(0,l,(o==null?n.d=new F.al(H.a([],q),H.a([],q),H.a([],q)):o).h(0,j))){l.bn()
break}}}}},
bM:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.ghB(q))q.bn()}},
ar:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cn())q=!1
return q},
cm:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].cl())q=!1
return q},
i:function(a){return this.w()},
J:function(a){var s,r,q,p=H.a([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(a))
return C.b.j(p,"\n")},
w:function(){return this.J("")}}
F.dq.prototype={
gl:function(a){return this.b.length},
cP:function(a){var s,r,q,p,o,n,m,l,k,j
for(s=this.a,r=s.gV().c.length-1,q=t.L,p=t.k;r>=0;--r){o=s.a
o=(o==null?s.a=new F.y(s,H.a([],p)):o).c
if(r>=o.length)return H.d(o,r)
n=o[r]
o=n.c
if(o==null)o=n.c=new F.aG(H.a([],q),H.a([],q))
m=o.b.length+o.c.length-1
for(;m>=0;m=k){o=n.c
l=(o==null?n.c=new F.aG(H.a([],q),H.a([],q)):o).h(0,m)
for(k=m-1,j=k;j>=0;--j){o=n.c
if(a.b6(0,l,(o==null?n.c=new F.aG(H.a([],q),H.a([],q)):o).h(0,j))){l.bn()
break}}}}},
bM:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.G(q.a,q.b))q.bn()}},
i:function(a){return this.w()},
J:function(a){var s,r=H.a([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].J(a+(""+s+". ")))}return C.b.j(r,"\n")},
w:function(){return this.J("")}}
F.bO.prototype={
gl:function(a){return this.b.length},
ij:function(){var s,r,q,p,o,n,m
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
F.cq.prototype={
cq:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.cr(s.cx,p,m,r,q,o,n,a,l)},
hE:function(){return this.cq(null)},
gaM:function(a){var s=this.b
return s==null?this.b=new F.b6(H.a([],t.q)):s},
ga7:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.aG(H.a([],s),H.a([],s))}return s},
gO:function(){var s=this.d
if(s==null){s=t.u
s=this.d=new F.al(H.a([],s),H.a([],s),H.a([],s))}return s},
gE:function(a){var s=this.a
if(s!=null)s.gV().a0()
return this.e},
sZ:function(a,b){var s
if(!J.G(this.f,b)){this.f=b
s=this.a
if(s!=null)s.U()}},
scJ:function(a){var s
a=a==null?null:a.D()
if(!J.G(this.r,a)){this.r=a
s=this.a
if(s!=null)s.U()}},
sdD:function(a){var s
a=a==null?null:a.D()
if(!J.G(this.x,a)){this.x=a
s=this.a
if(s!=null)s.U()}},
sba:function(a){var s
if(!J.G(this.y,a)){this.y=a
s=this.a
if(s!=null)s.U()}},
sbN:function(a){var s
if(!J.G(this.z,a)){this.z=a
s=this.a
if(s!=null)s.U()}},
sb2:function(a,b){var s
if(!J.G(this.Q,b)){this.Q=b
s=this.a
if(s!=null)s.U()}},
sep:function(a,b){var s
if(this.ch!==b){this.ch=b
s=this.a
if(s!=null)s.U()}},
sdB:function(a){var s
if(!J.G(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.U()}},
i0:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.bA())){s=o.f
s=s==null?n:H.a([s.a,s.b,s.c],t.n)
return s==null?H.a([0,0,0],t.n):s}else if(a.q(0,$.bz())){s=o.r
s=s==null?n:H.a([s.a,s.b,s.c],t.n)
return s==null?H.a([0,1,0],t.n):s}else if(a.q(0,$.by())){s=o.x
s=s==null?n:H.a([s.a,s.b,s.c],t.n)
return s==null?H.a([0,0,1],t.n):s}else if(a.q(0,$.bB())){s=o.y
s=s==null?n:H.a([s.a,s.b],t.n)
return s==null?H.a([0,0],t.n):s}else if(a.q(0,$.bW())){s=o.z
s=s==null?n:H.a([s.a,s.b,s.c],t.n)
return s==null?H.a([0,0,0],t.n):s}else if(a.q(0,$.ej())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.a([q,p,s==null?1:s],t.n)}else if(a.q(0,$.ek())){s=o.Q
s=s==null?n:s.cR(0)
return s==null?H.a([1,1,1,1],t.n):s}else if(a.q(0,$.cD()))return H.a([o.ch],t.n)
else if(a.q(0,$.bx())){s=o.cx
s=s==null?n:H.a([s.a,s.b,s.c,s.d],t.n)
return s==null?H.a([-1,-1,-1,-1],t.n):s}else return H.a([],t.n)},
cn:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dK()
p.gO().H(0,new F.jZ(o))
p.r=o.a.D()
if(r){s.U()
o=s.e
if(o!=null)o.aA(0)}return!0},
cl:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dK()
p.gO().H(0,new F.jY(o))
p.x=o.a.D()
if(r){s.U()
o=s.e
if(o!=null)o.aA(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
J:function(a){var s,r,q=this,p=null,o="-",n=H.a([],t.s)
n.push(C.a.an(C.c.i(q.e),0))
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
F.jZ.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.R(0,r)}},
$S:9}
F.jY.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.R(0,r)}},
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
s.U()
return!0},
hv:function(a,b,c,d,e,f){var s=F.cr(a,null,b,c,d,e,f,null,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
A:function(a,b){var s,r=this.a
if(b.a!==r)return!1
if(b.gaM(b).b.length===0){s=b.ga7(b)
if(s.b.length===0&&s.c.length===0){s=b.gO()
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)throw H.c(P.f("May not remove a vertex without first making it empty."))
b.a=null
C.b.A(this.c,b)
r.U()
return this.b=!0},
ar:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cn()
return!0},
cm:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].cl()
return!0},
hA:function(){var s,r,q,p,o,n
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
F.al.prototype={
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
C.b.H(s.c,new F.jT(s,b))
C.b.H(s.d,new F.jU(s,b))},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.a([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
return C.b.j(p,"\n")}}
F.jT.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)},
$S:9}
F.jU.prototype={
$1:function(a){var s=this.a
if(!J.G(a.a,s)&&!J.G(a.b,s))this.b.$1(a)},
$S:9}
F.aG.prototype={
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
F.jW.prototype={}
F.dL.prototype={
b6:function(a,b,c){return J.G(b.f,c.f)}}
F.jX.prototype={}
F.jV.prototype={
b7:function(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null
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
p=new V.bq(p.a+a3,p.b+a4,p.c+a5,p.d+a2)}++k}g+=e.ch;++h}a6=F.cr(a7,a7,a7,a7,a7,a7,a7,a7,0)
if(l<=0||m==null)a6.sZ(0,a7)
else a6.sZ(0,m.a_(0,l))
if(n==null)a6.scJ(a7)
else a6.scJ(n.D())
if(o==null)a6.sdD(a7)
else a6.sdD(o.D())
if(j<=0||q==null)a6.sba(a7)
else a6.sba(q.a_(0,j))
if(i<=0||r==null)a6.sbN(a7)
else a6.sbN(r.a_(0,i))
if(k<=0||p==null)a6.sb2(0,a7)
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
a6.sb2(0,new V.aw(a2,a3,a4,s))}if(h<=0)a6.sep(0,0)
else a6.sep(0,g/h)
return a6}}
F.j6.prototype={
b7:function(a){var s,r,q,p=V.dK()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.x(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.D()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)a[r].scJ(p)
return null}}
F.b6.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.w()},
w:function(){var s,r,q,p=H.a([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].J(""))
return C.b.j(p,"\n")}}
O.d8.prototype={
gv:function(){var s=this.fr
return s==null?this.fr=D.O():s},
a3:function(a){var s=this.fr
return s==null?null:s.G(a)},
bV:function(){return this.a3(null)},
di:function(a){this.a=null
this.a3(a)},
h9:function(){return this.di(null)},
fh:function(a,b){return this.a3(new D.bg())},
fj:function(a,b){return this.a3(new D.bh())},
ge4:function(){var s=this,r=s.dx
if(r==null){r=new D.cZ(H.a([],t.i),H.a([],t.U),H.a([],t.o),H.a([],t.D),H.a([],t.e))
r.cY(r.gfe(),r.gfS(),r.gfW())
r.gv().n(0,s.gdh())
r.ge3().n(0,s.gbg())
s.dx=r}return r},
gdH:function(){var s=this.x
return s==null?this.x=O.eR(this,"diffuse"):s},
ge0:function(){var s=this.y
return s==null?this.y=O.eR(this,"invDiffuse"):s},
d8:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.Z(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.a([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gax()
o=a1.h(0,q.gax())
a1.m(0,p,o==null?1:o)}n=H.a([],t.cn)
a1.H(0,new O.iT(b,n))
C.b.bf(n,new O.iU())
m=new H.Z(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.a([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.a([],t.fD)
m.H(0,new O.iV(b,l))
C.b.bf(l,new O.iW())
k=new H.Z(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.a([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gax()
o=k.h(0,q.gax())
k.m(0,p,o==null?1:o)}j=H.a([],t.eg)
k.H(0,new O.iX(b,j))
C.b.bf(j,new O.iY())
i=new H.Z(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.a([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.q)(a0),++r){q=a0[r]
s=q.gax()
p=i.h(0,q.gax())
i.m(0,s,p==null?1:p)}h=H.a([],t.c3)
i.H(0,new O.iZ(b,h))
C.b.bf(h,new O.j_())
a0=C.c.a6(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.iQ(new V.aw(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.eR(b,"emission"):a2).c
s=b.r
s=(s==null?b.r=O.eR(b,"ambient"):s).c
p=b.gdH().c
o=b.ge0().c
g=b.z
g=(g==null?b.z=new O.iS(new V.aU(0,0,0),b,"specular",new A.aV(!1,!1,!1)):g).c
f=b.Q
f=(f==null?b.Q=new O.iO(b,"bump",new A.aV(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.eR(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.iR(new V.aU(0,0,0),b,"refract",new A.aV(!1,!1,!1)):d).c
c=b.db
return A.oc(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.iN(b,"alpha",new A.aV(!1,!1,!1)):c).c,n,l,j,h)},
ag:function(a,b){if(b!=null)if(!C.b.B(a,b)){b.a=a.length
a.push(b)}},
aB:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aI(m==null?H.a([],t.e):m)
s=H.Y(m).c
for(;m.u();){r=s.a(m.d)
q=$.jS
if(q==null)q=$.jS=new V.x(0,0,1)
r.c=q
p=$.jR
r.d=p==null?$.jR=new V.x(0,1,0):p
p=$.jQ
r.e=p==null?$.jQ=new V.x(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bP(q).D()
r.d=n.bP(r.d).D()
r.e=n.bP(r.e).D()}}},
il:function(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=a8.a
if(b0==null){s=a8.d8()
r=s.b3
q=b1.fr
b0=q.h(0,r)
if(b0==null){p=b1.a
o=t.S
n=t.W
b0=new A.eQ(s,H.a([],t.p),P.X(o,n),P.X(o,t.O),P.X(o,n),P.X(o,t.d),P.X(o,n),P.X(o,t.l),P.X(o,n),P.X(o,t.R),p,r)
b0.eE(s,p)
if(r.length===0)H.h(P.f("May not cache a shader with no name."))
if(q.co(0,r))H.h(P.f('Shader cache already contains a shader by the name "'+r+'".'))
q.m(0,r,b0)}b0=a8.a=b0
b2.e=null}m=b0.x
l=m.dK
s=b2.e
if(!(s instanceof Z.cG))s=b2.e=null
if(s==null||!s.d.q(0,l)){s=m.k4
if(s){r=b2.d
if(r!=null)r.ar()}r=m.r1
if(r){q=b2.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gO().cm()
q.gV().cm()
q=q.e
if(q!=null)q.aA(0)}}q=m.rx
if(q){p=b2.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gV().hA()
p=p.e
if(p!=null)p.aA(0)}}p=b2.d
k=p==null?a9:p.hz(new Z.k_(b1.a),l)
if(k==null)return
p=k.b4($.bA())
if(p!=null){o=b0.y
o=o==null?a9:o.c
p.e=o==null?0:o}if(s){s=k.b4($.bz())
if(s!=null){p=b0.Q
p=p==null?a9:p.c
s.e=p==null?1:p}}if(r){s=k.b4($.by())
if(s!=null){r=b0.z
r=r==null?a9:r.c
s.e=r==null?2:r}}if(m.r2){s=k.b4($.bB())
if(s!=null){r=b0.ch
r=r==null?a9:r.c
s.e=r==null?3:r}}if(q){s=k.b4($.bW())
if(s!=null){r=b0.cx
r=r==null?a9:r.c
s.e=r==null?4:r}}if(m.ry){s=k.b4($.bx())
if(s!=null){r=b0.cy
r=r==null?a9:r.c
s.e=r==null?5:r}}b2.e=k}j=H.a([],t.ga)
s=b1.a
s.useProgram(b0.e)
b0.gai(b0).hN()
if(m.fr){r=b1.dx
r=r.ga5(r)
q=b0.db
if(q!=null)q.ap(r.ae(0,!0))}if(m.fx){r=b1.cx
if(r==null){r=b1.db
q=b1.dx
q=b1.cx=r.ga5(r).K(0,q.ga5(q))
r=q}q=b0.dx
if(q!=null)q.ap(r.ae(0,!0))}r=b1.ch
if(r==null){r=b1.dx
r=b1.ch=b1.gih().K(0,r.ga5(r))}q=b0.fr
if(q!=null)q.ap(r.ae(0,!0))
if(m.go){r=b1.db
r=r.ga5(r)
q=b0.dy
if(q!=null)q.ap(r.ae(0,!0))}if(m.x1){r=$.m7
if(r==null){r=new V.db(1,0,0,0,1,0,0,0,1)
$.m7=r}q=b0.go
if(q!=null)q.ap(r.ae(0,!0))}if(m.x2){r=V.aN()
q=b0.id
if(q!=null)q.ap(r.ae(0,!0))}if(m.y1){r=V.aN()
q=b0.k1
if(q!=null)q.ap(r.ae(0,!0))}if(m.bF>0){r=a8.e.a
i=r.length
q=b0.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.d(r,h)
q=r[h]
p=b0.k3
if(h>=p.length)return H.d(p,h)
p=p[h]
g=new Float32Array(H.cx(q.ae(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}if(m.a.b){r=a8.f
a8.ag(j,r==null?a9:r.d)
r=a8.f
r=r==null?a9:r.d
b0.aq(b0.r1,r)}if(m.k1){if(m.b.b){r=a8.r
a8.ag(j,r==null?a9:r.d)
r=a8.r
r=r==null?a9:r.d
b0.aq(b0.ry,r)}if(m.c.b){r=a8.x
a8.ag(j,r==null?a9:r.d)
r=a8.x
r=r==null?a9:r.d
b0.aq(b0.y1,r)}if(m.d.b){r=a8.y
a8.ag(j,r==null?a9:r.d)
r=a8.y
r=r==null?a9:r.d
b0.aq(b0.b3,r)}r=m.e
q=r.b||!1
if(q){q=a8.z
q=q==null?a9:q.ch
if(q==null)q=100
p=b0.dM
if(p!=null)p.a.uniform1f(p.d,q)}if(r.b){r=a8.z
a8.ag(j,r==null?a9:r.d)
r=a8.z
r=r==null?a9:r.d
b0.aq(b0.dL,r)}r=m.z
if(r.length>0){f=new H.Z(t.y)
q=a8.dx
q=q==null?a9:q.e
if(q==null)q=H.a([],t.i)
p=q.length
o=t.c
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gax()
b=f.h(0,c)
if(b==null)b=0
f.m(0,c,b+1)
n=b0.ct.h(0,c)
if(n==null)n=H.a([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.giA()
a0=$.b2
n=n.bt(a0==null?$.b2=new V.N(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giF()
a0=$.b2
n=n.bt(a0==null?$.b2=new V.N(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gb2(d)
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
if(d.gdJ()){n=d.gdw()
a0=a.e
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdz()
a0=a.f
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdA()
a0=a.r
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=b0.cs.h(0,p)
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
n=b0.cv.h(0,0)
if(n==null)n=H.a([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=a1.bP(d.c).D()
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.b
a0=a.f
a0.a.uniform3f(a0.d,n.a,n.b,n.c)}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=b0.cu.h(0,p)
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
c=d.gax()
b=a3.h(0,c)
if(b==null)b=0
a3.m(0,c,b+1)
n=b0.cz.h(0,c)
if(n==null)n=H.a([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
a4=a1.K(0,d.ga5(d))
n=d.ga5(d)
a0=$.b2
n=n.bt(a0==null?$.b2=new V.N(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=$.b2
n=a4.bt(n==null?$.b2=new V.N(0,0,0):n)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gb2(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaO()
n=a4.e1(0)
a0=a.d
if(a0!=null){g=new Float32Array(H.cx(new V.db(n.a,n.b,n.c,n.e,n.f,n.r,n.y,n.z,n.Q).ae(0,!0)))
a0.a.uniformMatrix3fv(a0.d,!1,g)}d.gaO()
n=d.gaO()
if(!C.b.B(j,n)){n.a=j.length
j.push(n)}n=d.gaO()
a0=n.gbp(n)
if(a0){a0=a.f
if(a0!=null){a5=n.gbp(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gE(n))}}d.gbe()
n=d.gev()
a0=a.x
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gbe()
if(!C.b.B(j,n)){n.a=j.length
j.push(n)}n=d.gbe()
a0=n.gbp(n)
if(a0){a0=a.r
if(a0!=null){a5=n.gbp(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gE(n))}}if(d.gdJ()){n=d.gdw()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdz()
a0=a.z
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdA()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a3.h(0,p)
if(i==null)i=0
p=b0.cw.h(0,p)
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
c=d.gax()
b=a7.h(0,c)
if(b==null)b=0
a7.m(0,c,b+1)
n=b0.cB.h(0,c)
if(n==null)n=H.a([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.gig(d)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giD(d).D()
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=a1.bt(d.gig(d))
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gb2(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaO()
n=d.gcU()
a0=a.f
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gcQ(d)
a0=a.r
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.giS()
a0=a.x
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.giT()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
d.gaO()
n=d.gaO()
if(!C.b.B(j,n)){n.a=j.length
j.push(n)}n=d.gaO()
a0=n.gbp(n)
if(a0){a0=a.dx
if(a0!=null){a5=n.d
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.a)}}d.gbe()
n=d.gev()
a0=a.z
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gbe()
if(!C.b.B(j,n)){n.a=j.length
j.push(n)}n=d.gbe()
a0=n.gbp(n)
if(a0){a0=a.dy
if(a0!=null){a5=n.d
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.a)}}if(d.giE()){n=d.giC()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.giB()
a0=a.ch
if(a0!=null)a0.a.uniform1f(a0.d,n)}if(d.gdJ()){n=d.gdw()
a0=a.cx
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdz()
a0=a.cy
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gdA()
a0=a.db
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a7.h(0,p)
if(i==null)i=0
p=b0.cA.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.f.b){r=a8.Q
a8.ag(j,r==null?a9:r.d)
r=a8.Q
r=r==null?a9:r.d
b0.aq(b0.dN,r)}if(m.dy){r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga5(r).e1(0)}q=b0.fy
if(q!=null)q.ap(r.ae(0,!0))}if(m.db){a8.ag(j,a9)
b0.he(b0.dO,a9)
if(m.r.b){r=a8.cx
a8.ag(j,r==null?a9:r.d)
r=a8.cx
r=r==null?a9:r.d
b0.aq(b0.dP,r)}r=m.x
q=r.b||!1
if(q){q=a8.cy
q=q==null?a9:q.ch
if(q==null)q=0
p=b0.dQ
if(p!=null)p.a.uniform1f(p.d,q)}if(r.b){r=a8.cy
a8.ag(j,r==null?a9:r.d)
r=a8.cy
r=r==null?a9:r.d
b0.aq(b0.dR,r)}}r=m.y
q=r.b||!1
if(q){if(r.b){q=a8.db
a8.ag(j,q==null?a9:q.d)
q=a8.db
q=q==null?a9:q.d
b0.aq(b0.dS,q)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h){q=j[h]
if(!q.c&&q.d){q.c=!0
s.activeTexture(33984+q.a)
s.bindTexture(3553,q.b)}}q=t.ed.a(b2.e)
q.ck(b1)
q.b8(b1)
q.ix(b1)
r=r.b||!1
if(r)s.disable(3042)
for(h=0;h<j.length;++h){r=j[h]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(3553,a9)}}s.useProgram(a9)
b0.gai(b0).hL()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.d8().b3}}
O.iT.prototype={
$2:function(a,b){return this.b.push(new A.bb(a,C.c.a6(b+3,4)*4))},
$S:7}
O.iU.prototype={
$2:function(a,b){return C.c.aj(a.a,b.a)},
$S:51}
O.iV.prototype={
$2:function(a,b){return this.b.push(new A.bd(a,C.c.a6(b+3,4)*4))},
$S:7}
O.iW.prototype={
$2:function(a,b){return C.c.aj(a.a,b.a)},
$S:52}
O.iX.prototype={
$2:function(a,b){return this.b.push(new A.bm(a,C.c.a6(b+3,4)*4))},
$S:7}
O.iY.prototype={
$2:function(a,b){return C.c.aj(a.a,b.a)},
$S:53}
O.iZ.prototype={
$2:function(a,b){return this.b.push(new A.bo(a,C.c.a6(b+3,4)*4))},
$S:7}
O.j_.prototype={
$2:function(a,b){return C.c.aj(a.a,b.a)},
$S:54}
O.iN.prototype={
aG:function(){var s,r=this
r.d_()
s=r.f
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.a3(new D.H(r.b,s,1))}}}
O.d9.prototype={
a3:function(a){return this.a.a3(a)},
bV:function(){return this.a3(null)},
aG:function(){},
hd:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
s=s.b||!1
if(s){s=a.b||!1
r=!s}else r=!0
q.c=a
if(r)q.aG()
s=q.a
s.a=null
s.a3(null)}},
sba:function(a){var s,r,q=this
if(!q.c.b)q.hd(new A.aV(!1,!0,!1))
s=q.d
if(s!==a){if(s!=null)s.gv().A(0,q.gbg())
r=q.d
q.d=a
a.gv().n(0,q.gbg())
q.a.a3(new D.H(q.b+".texture2D",r,q.d))}}}
O.iO.prototype={}
O.da.prototype={
aG:function(){var s,r,q=this
q.d_()
s=new V.aU(1,1,1)
if(!q.f.q(0,s)){r=q.f
q.f=s
q.a.a3(new D.H(q.b+".color",r,s))}}}
O.iQ.prototype={}
O.iR.prototype={
aG:function(){var s,r=this
r.d0()
s=r.ch
$.F().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.a3(new D.H(r.b+".refraction",s,1))}}}
O.iS.prototype={
aG:function(){var s,r=this
r.d0()
s=r.ch
$.F().toString
if(!(Math.abs(s-100)<1e-9)){r.ch=100
r.a.a3(new D.H(r.b+".shininess",s,100))}}}
O.dt.prototype={}
T.ck.prototype={}
T.fu.prototype={}
T.fv.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.O():s}}
T.jr.prototype={
e5:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.fv(o)
W.a5(s,"load",new T.js(this,r,s,!1,o,!1,!1),!1)
return r},
ha:function(a,b,c){var s,r,q,p,o,n
b=V.lP(b)
s=a.width
r=V.lP(s==null?512:s)
s=a.height
q=V.lP(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.ld()
p.width=r
p.height=q
o=t.ar.a(C.i.er(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.qh(o.getImageData(0,0,s,n==null?512:n))}}}
T.js.prototype={
$1:function(a){var s,r,q=this,p=q.c
p.width
p.height
s=q.a
r=s.ha(p,s.b,q.d)
p.width
p.height
p=s.a
p.bindTexture(3553,q.e)
p.pixelStorei(37440,0)
C.a3.is(p,3553,0,6408,6408,5121,r)
p.bindTexture(3553,null)
p=q.b
if(!p.d){p.d=!0
p=p.y
if(p!=null)p.hM()}++s.e},
$S:3}
X.iy.prototype={
gv:function(){var s=this.x
return s==null?this.x=D.O():s}}
X.f3.prototype={
gv:function(){var s=this.f
return s==null?this.f=D.O():s},
aU:function(a){var s=this.f
return s==null?null:s.G(a)},
eP:function(){return this.aU(null)},
sbq:function(a){var s,r,q=this
if(!J.G(q.b,a)){s=q.b
if(s!=null)s.gv().A(0,q.gd4())
r=q.b
q.b=a
if(a!=null)a.gv().n(0,q.gd4())
q.aU(new D.H("mover",r,q.b))}}}
X.jq.prototype={}
V.aL.prototype={
bw:function(a){this.b=new P.iA(C.S)
this.c=null
this.d=H.a([],t.F)},
N:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.d
if(j.length===0)j.push(H.a([],t.C))
s=a.split("\n")
for(j=s.length,r=t.C,q=!0,p=0;p<j;++p){o=s[p]
if(q)q=!1
else k.d.push(H.a([],r))
n=document.createElement("div")
n.className="codePart"
m=k.b.f_(o,0,o.length)
l=m==null?o:m
l=H.lR(l," ","&nbsp;")
C.Q.es(n,l)
l=n.style
l.color=b
C.b.gay(k.d).push(n)}},
ee:function(a,b){var s,r,q,p=this
p.d=H.a([],t.F)
s=C.b.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bE()
if(r!=null)for(q=new H.r(s),q=new P.bS(r.cT(new H.bk(q,q.gl(q))).a());q.u();)p.bL(q.gC(q))}}
V.l6.prototype={
$1:function(a){var s=C.d.cS(this.a.ghX(),2)
if(s!=="0.00")P.lQ(s+" fps")},
$S:55}
V.ew.prototype={
bL:function(a){var s=this
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
bE:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()\\-+*%!&|=.,?:;",h="OpenDoubleStr",g="CloseDoubleStr",f="EscDoubleStr",e="OpenSingleStr",d="CloseSingleStr",c="EscSingleStr",b="Slash",a="Comment",a0="EndComment",a1="MLComment",a2="MLCStar",a3="Whitespace",a4=L.jx()
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
a4.k(0,h).j(0,h).a.push(new K.aS())
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
a4.k(0,e).j(0,e).a.push(new K.aS())
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
s.a.push(new K.af(p))
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
s.a.push(new K.af(q))
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
r.aN(0,"Class",H.a(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],s))
r.aN(0,"Type",H.a(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
r.aN(0,"Reserved",H.a(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return a4}}
V.eD.prototype={
bL:function(a){var s=this
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
bE:function(){var s,r,q,p,o="Start",n="Id",m="Int",l="FloatDot",k="Float",j="Sym",i="<>{}()[]\\-+*%!&|=.,?:;",h="Slash",g="Comment",f="EndComment",e="Preprocess",d="EndPreprocess",c="Whitespace",b=L.jx()
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
b.k(0,h).j(0,j).a.push(new K.aS())
q=b.k(0,g).j(0,f)
s=new K.u(H.a([],r))
s.p(new H.r("\n"))
q.a.push(s)
s=b.k(0,g).j(0,g)
q=t.z
p=H.a([],q)
s.a.push(new K.af(p))
s=new K.u(H.a([],r))
s.p(new H.r("\n"))
p.push(s)
s=b.k(0,o).j(0,e)
p=new K.u(H.a([],r))
p.p(new H.r("#"))
s.a.push(p)
p=b.k(0,e).j(0,e)
q=H.a([],q)
p.a.push(new K.af(q))
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
r.aN(0,"Type",H.a(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],p))
r.aN(0,"Reserved",H.a(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],p))
r.aN(0,"Builtin",H.a(["gl_FragColor","gl_Position"],p))
return b}}
V.eE.prototype={
bL:function(a){var s=this,r="#111"
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
bE:function(){var s,r,q,p="Start",o="Id",n="Attr",m="Sym",l="OpenStr",k="CloseStr",j="Other",i=L.jx()
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
i.k(0,l).j(0,l).a.push(new K.aS())
i.k(0,p).j(0,j).a.push(new K.aS())
s=i.k(0,j).j(0,j)
q=H.a([],t.z)
s.a.push(new K.af(q))
r=new K.u(H.a([],r))
r.p(new H.r('</\\-!>=_"'))
q.push(r)
q.push(K.S("a","z"))
q.push(K.S("A","Z"))
q=i.k(0,m)
q.d=q.a.P("Symbol")
q=i.k(0,k)
q.d=q.a.P("String")
q=i.k(0,o)
r=q.a.P(o)
q.d=r
r.aN(0,"Reserved",H.a(["DOCTYPE","html","head","meta","link","title","body","script"],t.s))
r=i.k(0,n)
r.d=r.a.P(n)
r=i.k(0,j)
r.d=r.a.P(j)
return i}}
V.f5.prototype={
ee:function(a,b){this.d=H.a([],t.F)
this.N(C.b.j(b,"\n"),"#111")},
bL:function(a){},
bE:function(){return null}}
V.j9.prototype={
bB:function(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=l.a,j=P.mq().gcN().h(0,k)
if(j==null)if(d){c.$0()
l.dr(b)
s=!0}else s=!1
else if(j===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
p=l.c
o=J.aQ(p)
o.gbD(p).n(0,q)
n=W.o0("radio")
n.checked=s
n.name=k
W.a5(n,"change",new V.ja(l,n,c,b),!1)
q.children.toString
q.appendChild(n).toString
m=r.createElement("span")
m.textContent=b
q.appendChild(m).toString
p=o.gbD(p)
r=r.createElement("br")
r.toString
p.n(0,r)},
av:function(a,b,c){return this.bB(a,b,c,!1)},
dr:function(a){var s,r,q=P.mq(),p=t.N,o=P.o9(q.gcN(),p,p)
o.m(0,this.a,a)
s=q.ej(0,o)
p=window.history
p.toString
r=s.gci()
p.replaceState(new P.kf([],[]).bQ(""),"",r)}}
V.ja.prototype={
$1:function(a){var s=this,r=s.b.checked
if(r===!0){s.c.$0()
s.a.dr(s.d)}},
$S:3}
V.jj.prototype={
du:function(a){var s,r,q,p,o,n,m=this.hg(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.r(C.b.i_(a)),s=new P.bS(m.cT(new H.bk(s,s.gl(s))).a());s.u();){r=s.gC(s)
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
if(H.nf(r,"|",0)){p=r.split("|")
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
eq:function(a){var s,r,q,p=t.F,o=new V.ew("dart",H.a([],p))
o.bw("dart")
s=new V.eD("glsl",H.a([],p))
s.bw("glsl")
r=new V.eE("html",H.a([],p))
r.bw("html")
q=C.b.hT(H.a([o,s,r],t.g6),new V.jm(a))
if(q!=null)return q
p=new V.f5("plain",H.a([],p))
p.bw("plain")
return p},
dt:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=H.a([],t.t)
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.a.a2(q,"+")){b2[r]=C.a.ad(q,1)
a8.push(1)
s=!0}else if(C.a.a2(q,"-")){b2[r]=C.a.ad(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.eq(b0)
p.ee(0,b2)
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
h=W.lW()
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
for(a4=C.b.gS(q);a4.u();)b.appendChild(a4.gC(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
hr:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
hg:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
f=L.jx()
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
s.a.push(new K.af(p))
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
s.a.push(new K.af(p))
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
s.a.push(new K.af(p))
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
p.a.push(new K.af(s))
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
p.a.push(new K.af(s))
p=new K.u(H.a([],r))
p.p(new H.r("|]"))
s.push(p)
f.k(0,o).j(0,g).a.push(new K.aS())
p=f.k(0,g).j(0,g)
q=H.a([],q)
p.a.push(new K.af(q))
r=new K.u(H.a([],r))
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
V.jl.prototype={
$1:function(a){P.mm(C.m,new V.jk(this.a))},
$S:3}
V.jk.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.as(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.z(-0.01*s)+"px"
q.top=r},
$S:0}
V.jm.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:56}
M.kW.prototype={
$0:function(){this.a.sac(0,F.lK(1,null,null,1))},
$S:0}
M.kX.prototype={
$0:function(){this.a.sac(0,F.lK(8,null,null,8))},
$S:0}
M.kY.prototype={
$0:function(){this.a.sac(0,F.n2(!0,40,1))},
$S:0}
M.kZ.prototype={
$0:function(){this.a.sac(0,F.n2(!1,40,0))},
$S:0}
M.l_.prototype={
$0:function(){this.a.sac(0,F.qw(10,20))},
$S:0}
M.l0.prototype={
$0:function(){var s=F.jh(),r=Math.sqrt(5)/2+0.5,q=F.ah(s,new V.x(-1,r,0)),p=F.ah(s,new V.x(1,r,0)),o=-r,n=F.ah(s,new V.x(-1,o,0)),m=F.ah(s,new V.x(1,o,0)),l=F.ah(s,new V.x(0,-1,o)),k=F.ah(s,new V.x(0,1,o)),j=F.ah(s,new V.x(0,-1,r)),i=F.ah(s,new V.x(0,1,r)),h=F.ah(s,new V.x(r,0,1)),g=F.ah(s,new V.x(r,0,-1)),f=F.ah(s,new V.x(o,0,1)),e=F.ah(s,new V.x(o,0,-1))
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
s.e6(new F.dL(),new F.jV())
this.a.sac(0,s)},
$S:0}
M.l1.prototype={
$0:function(){this.a.sac(0,F.ne(6,6))},
$S:0}
M.l2.prototype={
$0:function(){this.a.sac(0,F.qG())},
$S:0}
M.l3.prototype={
$0:function(){this.a.sac(0,F.qv())},
$S:0}
M.l4.prototype={
$1:function(a){var s,r=this.a,q=this.b,p=q.a
p=p==null?null:p.c
s=t.s
r.dt("Vertex Shader","glsl",0,H.a((p==null?"":p).split("\n"),s))
q=q.a
q=q==null?null:q.d
r.dt("Fragment Shader","glsl",0,H.a((q==null?"":q).split("\n"),s))},
$S:2};(function aliases(){var s=J.b.prototype
s.ey=s.i
s=J.bj.prototype
s.eA=s.i
s=P.j.prototype
s.ez=s.bR
s=W.E.prototype
s.bT=s.ak
s=W.dY.prototype
s.eB=s.aw
s=K.cU.prototype
s.ex=s.aK
s.bU=s.i
s=O.d9.prototype
s.d_=s.aG
s=O.da.prototype
s.d0=s.aG})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"px","o5",57)
r(P,"qb","oJ",13)
r(P,"qc","oK",13)
r(P,"qd","oL",13)
q(P,"n0","q6",0)
r(W,"rO","im",59)
p(W,"qo",4,null,["$4"],["oM"],21,0)
p(W,"qp",4,null,["$4"],["oN"],21,0)
var j
o(j=E.bH.prototype,"gec",0,0,null,["$1","$0"],["ed","i8"],1,0)
o(j,"gea",0,0,null,["$1","$0"],["eb","i7"],1,0)
o(j,"ge8",0,0,null,["$1","$0"],["e9","i4"],1,0)
n(j,"gi2","i3",8)
n(j,"gi5","i6",8)
o(j=E.fw.prototype,"gd1",0,0,null,["$1","$0"],["d3","d2"],1,0)
m(j,"gio","ek",0)
l(j=X.fN.prototype,"gfz","fA",3)
l(j,"gfk","fl",3)
l(j,"gfq","fs",4)
l(j,"gfD","fE",28)
l(j,"gfB","fC",28)
l(j,"gfH","fI",4)
l(j,"gfL","fM",4)
l(j,"gfv","fw",4)
l(j,"gfJ","fK",4)
l(j,"gft","fu",4)
l(j,"gfN","fO",36)
l(j,"gfP","fQ",3)
l(j,"gh1","h2",11)
l(j,"gfY","fZ",11)
l(j,"gh_","h0",11)
o(D.c1.prototype,"geJ",0,0,null,["$1","$0"],["aC","eK"],1,0)
o(j=D.cZ.prototype,"gdf",0,0,null,["$1","$0"],["dg","fF"],1,0)
l(j,"gfS","fT",38)
n(j,"gfe","ff",22)
n(j,"gfW","fX",22)
k(V.a6.prototype,"gl","bo",14)
k(V.x.prototype,"gl","bo",14)
k(V.bq.prototype,"gl","bo",14)
o(j=U.c4.prototype,"gaY",0,0,null,["$1","$0"],["T","ab"],1,0)
n(j,"gfc","fd",20)
n(j,"gfU","fV",20)
o(j=U.dG.prototype,"gaY",0,0,null,["$1","$0"],["T","ab"],1,0)
l(j,"gc4","c5",10)
l(j,"gc6","c7",10)
l(j,"gc8","c9",10)
o(j=U.dH.prototype,"gaY",0,0,null,["$1","$0"],["T","ab"],1,0)
l(j,"gc4","c5",2)
l(j,"gc6","c7",2)
l(j,"gc8","c9",2)
l(j,"gf5","f6",2)
l(j,"gf7","f8",2)
l(j,"ghn","ho",2)
l(j,"ghl","hm",2)
l(j,"ghj","hk",2)
l(U.dI.prototype,"gfa","fb",2)
o(j=M.ez.prototype,"gau",0,0,null,["$1","$0"],["aD","eL"],1,0)
n(j,"gfm","fn",8)
n(j,"gfo","fp",8)
o(j=O.d8.prototype,"gbg",0,0,null,["$1","$0"],["a3","bV"],1,0)
o(j,"gdh",0,0,null,["$1","$0"],["di","h9"],1,0)
n(j,"gfg","fh",19)
n(j,"gfi","fj",19)
o(O.d9.prototype,"gbg",0,0,null,["$1","$0"],["a3","bV"],1,0)
o(X.f3.prototype,"gd4",0,0,null,["$1","$0"],["aU","eP"],1,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.R,null)
q(P.R,[H.lk,J.b,J.ao,P.L,P.dR,P.j,H.bk,P.eG,H.cR,H.fK,H.cK,H.jA,H.j7,H.hv,H.bF,P.M,H.iH,H.eO,H.eJ,H.aD,H.h7,P.e3,P.cv,P.bS,P.fR,P.ci,P.fm,P.kr,P.ea,P.k7,P.dQ,P.k,P.hK,P.d6,P.dm,P.es,P.iB,P.kp,P.ko,P.a_,P.bG,P.f2,P.dr,P.h4,P.ix,P.aj,P.a0,P.bT,P.jF,P.hp,W.ic,W.lg,W.lu,W.cu,W.P,W.dh,W.dY,W.hA,W.cS,W.kb,W.hL,P.ke,P.e5,P.hn,K.aS,K.cU,K.f9,K.u,L.fj,L.fx,L.fy,L.jw,O.ap,O.dc,E.i6,E.bH,E.c_,E.cd,E.h2,E.jb,E.fw,Z.fP,Z.k_,Z.cG,Z.c6,Z.br,D.i8,D.c2,D.W,X.cH,X.eL,X.iF,X.iL,X.a9,X.j3,X.jy,X.fN,D.c1,V.aU,V.aw,V.iq,V.db,V.bl,V.T,V.N,V.bN,V.fb,V.a6,V.x,V.bq,U.dG,U.dH,U.dI,M.ez,A.ep,A.i1,A.aV,A.bb,A.bd,A.bm,A.bo,A.iP,A.dz,A.dA,A.dC,A.dF,A.a3,A.jD,F.aq,F.iu,F.eN,F.iG,F.f7,F.jg,F.dp,F.dq,F.bO,F.cq,F.y,F.al,F.aG,F.jW,F.jX,F.b6,O.dt,O.d9,O.iQ,T.jr,X.jq,X.f3,V.aL,V.j9,V.jj])
q(J.b,[J.eH,J.cX,J.bj,J.w,J.c8,J.bi,H.dd,H.a2,W.e,W.i_,W.bC,W.cI,W.aW,W.K,W.fW,W.ax,W.ig,W.ih,W.fY,W.cO,W.h_,W.ii,W.m,W.h5,W.ay,W.iz,W.h9,W.bJ,W.iK,W.j0,W.hd,W.he,W.aA,W.hf,W.hh,W.aB,W.hl,W.ho,W.aE,W.hq,W.aF,W.hw,W.ak,W.hC,W.ju,W.au,W.hE,W.jz,W.jK,W.hM,W.hO,W.hQ,W.hS,W.hU,P.aY,P.hb,P.b1,P.hj,P.j8,P.hx,P.b3,P.hG,P.i2,P.fT,P.cf,P.ht])
q(J.bj,[J.f4,J.bQ,J.aX])
r(J.iD,J.w)
q(J.c8,[J.cW,J.eI])
q(P.L,[H.cY,P.fB,H.eK,H.fJ,H.fd,H.h3,P.eo,P.f_,P.aJ,P.fL,P.fI,P.ch,P.et,P.ev])
r(P.d1,P.dR)
q(P.d1,[H.co,W.fU,W.a7,P.eB])
r(H.r,H.co)
q(P.j,[H.n,H.aZ,H.b7,P.cV])
q(H.n,[H.d2,H.d_])
r(H.cP,H.aZ)
q(P.eG,[H.eP,H.fQ])
r(H.d7,H.d2)
r(H.cL,H.cK)
r(H.di,P.fB)
q(H.bF,[H.fr,H.iE,H.kP,H.kQ,H.kR,P.k1,P.k0,P.k2,P.k3,P.kk,P.kj,P.kF,P.k9,P.ka,P.iI,P.iM,P.jO,P.jN,P.ij,P.ik,P.jJ,P.jG,P.jH,P.jI,P.km,P.kl,P.ky,P.kz,P.kA,W.il,W.j1,W.j2,W.jf,W.jo,W.k4,W.j5,W.j4,W.kc,W.kd,W.ki,W.kq,P.kg,P.kh,P.kw,P.kG,P.iv,P.iw,P.i3,E.jc,E.jd,E.je,E.jt,D.is,D.it,F.ks,F.kH,F.kJ,F.kK,F.kL,F.kV,F.l8,F.l7,F.la,F.kU,F.kI,F.ji,F.jZ,F.jY,F.jT,F.jU,O.iT,O.iU,O.iV,O.iW,O.iX,O.iY,O.iZ,O.j_,T.js,V.l6,V.ja,V.jl,V.jk,V.jm,M.kW,M.kX,M.kY,M.kZ,M.l_,M.l0,M.l1,M.l2,M.l3,M.l4])
q(H.fr,[H.fk,H.bZ])
r(P.d5,P.M)
q(P.d5,[H.Z,W.fS])
r(H.cc,H.a2)
q(H.cc,[H.dT,H.dV])
r(H.dU,H.dT)
r(H.bL,H.dU)
r(H.dW,H.dV)
r(H.de,H.dW)
q(H.de,[H.eV,H.eW,H.eX,H.eY,H.eZ,H.df,H.bM])
r(H.e4,H.h3)
r(P.e0,P.cV)
r(P.k8,P.kr)
r(P.dX,P.ea)
r(P.dP,P.dX)
r(P.e8,P.d6)
r(P.cp,P.e8)
q(P.es,[P.i4,P.io])
r(P.eu,P.fm)
q(P.eu,[P.i5,P.iA,P.jP,P.jM])
r(P.jL,P.io)
q(P.aJ,[P.dl,P.eF])
r(P.fX,P.bT)
q(W.e,[W.t,W.eA,W.c9,W.as,W.dZ,W.at,W.ag,W.e1,W.fO,W.cs,P.er,P.bc])
q(W.t,[W.E,W.aK,W.ct])
q(W.E,[W.v,P.o])
q(W.v,[W.em,W.en,W.bY,W.bD,W.bE,W.be,W.eC,W.c5,W.c7,W.fe,W.bp,W.ds,W.fp,W.fq,W.cj])
r(W.ib,W.aW)
r(W.cM,W.fW)
q(W.ax,[W.id,W.ie])
r(W.fZ,W.fY)
r(W.cN,W.fZ)
r(W.h0,W.h_)
r(W.ey,W.h0)
r(W.ai,W.bC)
r(W.h6,W.h5)
r(W.c3,W.h6)
r(W.ha,W.h9)
r(W.bI,W.ha)
r(W.b5,W.m)
q(W.b5,[W.bK,W.ar,W.bP])
r(W.eS,W.hd)
r(W.eT,W.he)
r(W.hg,W.hf)
r(W.eU,W.hg)
r(W.hi,W.hh)
r(W.dg,W.hi)
r(W.hm,W.hl)
r(W.f6,W.hm)
r(W.fc,W.ho)
r(W.e_,W.dZ)
r(W.fg,W.e_)
r(W.hr,W.hq)
r(W.fh,W.hr)
r(W.fl,W.hw)
r(W.hD,W.hC)
r(W.fs,W.hD)
r(W.e2,W.e1)
r(W.ft,W.e2)
r(W.hF,W.hE)
r(W.fz,W.hF)
r(W.bs,W.ar)
r(W.hN,W.hM)
r(W.fV,W.hN)
r(W.dM,W.cO)
r(W.hP,W.hO)
r(W.h8,W.hP)
r(W.hR,W.hQ)
r(W.dS,W.hR)
r(W.hT,W.hS)
r(W.hs,W.hT)
r(W.hV,W.hU)
r(W.hz,W.hV)
r(W.h1,W.fS)
r(W.dN,P.ci)
r(W.hB,W.dY)
r(P.kf,P.ke)
r(P.ac,P.hn)
r(P.hc,P.hb)
r(P.eM,P.hc)
r(P.hk,P.hj)
r(P.f0,P.hk)
r(P.cg,P.o)
r(P.hy,P.hx)
r(P.fn,P.hy)
r(P.hH,P.hG)
r(P.fA,P.hH)
r(P.eq,P.fT)
r(P.f1,P.bc)
r(P.hu,P.ht)
r(P.fi,P.hu)
q(K.cU,[K.af,L.dv])
q(E.i6,[Z.c0,A.dn,T.ck])
q(D.W,[D.bg,D.bh,D.H,X.f8])
q(X.f8,[X.d4,X.ca,X.cb,X.du])
q(O.ap,[D.cZ,U.c4])
q(D.i8,[U.i9,U.a1])
r(U.cJ,U.a1)
r(A.eQ,A.dn)
q(A.a3,[A.cm,A.fE,A.fF,A.fG,A.fC,A.dw,A.fD,A.dx,A.dy,A.fH,A.dB,A.cn,A.dD,A.dE])
r(F.jn,F.iu)
r(F.jC,F.iG)
r(F.dL,F.jW)
q(F.jX,[F.jV,F.j6])
r(O.d8,O.dt)
q(O.d9,[O.iN,O.iO,O.da])
q(O.da,[O.iR,O.iS])
r(T.fu,T.ck)
r(T.fv,T.fu)
r(X.iy,X.jq)
q(V.aL,[V.ew,V.eD,V.eE,V.f5])
s(H.co,H.fK)
s(H.dT,P.k)
s(H.dU,H.cR)
s(H.dV,P.k)
s(H.dW,H.cR)
s(P.dR,P.k)
s(P.e8,P.hK)
s(P.ea,P.dm)
s(W.fW,W.ic)
s(W.fY,P.k)
s(W.fZ,W.P)
s(W.h_,P.k)
s(W.h0,W.P)
s(W.h5,P.k)
s(W.h6,W.P)
s(W.h9,P.k)
s(W.ha,W.P)
s(W.hd,P.M)
s(W.he,P.M)
s(W.hf,P.k)
s(W.hg,W.P)
s(W.hh,P.k)
s(W.hi,W.P)
s(W.hl,P.k)
s(W.hm,W.P)
s(W.ho,P.M)
s(W.dZ,P.k)
s(W.e_,W.P)
s(W.hq,P.k)
s(W.hr,W.P)
s(W.hw,P.M)
s(W.hC,P.k)
s(W.hD,W.P)
s(W.e1,P.k)
s(W.e2,W.P)
s(W.hE,P.k)
s(W.hF,W.P)
s(W.hM,P.k)
s(W.hN,W.P)
s(W.hO,P.k)
s(W.hP,W.P)
s(W.hQ,P.k)
s(W.hR,W.P)
s(W.hS,P.k)
s(W.hT,W.P)
s(W.hU,P.k)
s(W.hV,W.P)
s(P.hb,P.k)
s(P.hc,W.P)
s(P.hj,P.k)
s(P.hk,W.P)
s(P.hx,P.k)
s(P.hy,W.P)
s(P.hG,P.k)
s(P.hH,W.P)
s(P.fT,P.M)
s(P.ht,P.k)
s(P.hu,W.P)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",I:"double",a4:"num",l:"String",ae:"bool",aj:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","~([W?])","~(W)","~(m)","~(ar)","~(cq,I,I)","~(l,@)","~(i,i)","~(i,j<bH>)","~(aq)","~(W?)","~(bP)","aj()","~(~())","I()","~(@,@)","I(I)","@()","I(I,I)","~(i,j<bl>)","~(i,j<a1?>)","ae(E,l,l,cu)","~(i,j<az>)","~(cl,l,i)","ae(t)","N(I)","ae(aO)","ae(l)","~(bK)","~(~(W))","l(i)","~(@)","~(a4)","aj(@,@)","~(t,t?)","l(l)","~(bs)","@(@)","ae(j<az>)","cl(@,@)","~(l,l?)","i(i,i)","~(l[@])","~(l,i)","J<l,l>(J<l,l>,l)","~(R?,R?)","aj(~())","c0(i)","aj(@)","@(l)","~(l,l)","i(bb,bb)","i(bd,bd)","i(bm,bm)","i(bo,bo)","~(jv)","ae(aL?)","i(@,@)","@(@,l)","l(e)","E(t)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.p4(v.typeUniverse,JSON.parse('{"f4":"bj","bQ":"bj","aX":"bj","qJ":"m","qV":"m","qL":"bc","qK":"e","r1":"e","r4":"e","qI":"o","qW":"o","qM":"v","qZ":"v","qX":"t","qU":"t","ru":"ag","qQ":"b5","qN":"aK","r5":"aK","r3":"ar","qY":"bI","qR":"K","qS":"ak","r0":"bL","r_":"a2","eH":{"ae":[]},"bj":{"m5":[]},"w":{"p":["1"],"n":["1"],"j":["1"],"A":["1"]},"iD":{"w":["1"],"p":["1"],"n":["1"],"j":["1"],"A":["1"]},"c8":{"I":[],"a4":[]},"cW":{"I":[],"i":[],"a4":[]},"eI":{"I":[],"a4":[]},"bi":{"l":[],"A":["@"]},"cY":{"L":[]},"r":{"k":["i"],"p":["i"],"n":["i"],"j":["i"],"k.E":"i"},"n":{"j":["1"]},"d2":{"n":["1"],"j":["1"]},"aZ":{"j":["2"],"j.E":"2"},"cP":{"aZ":["1","2"],"n":["2"],"j":["2"],"j.E":"2"},"d7":{"d2":["2"],"n":["2"],"j":["2"],"j.E":"2"},"b7":{"j":["1"],"j.E":"1"},"co":{"k":["1"],"p":["1"],"n":["1"],"j":["1"]},"cK":{"J":["1","2"]},"cL":{"J":["1","2"]},"di":{"L":[]},"eK":{"L":[]},"fJ":{"L":[]},"bF":{"cT":[]},"fr":{"cT":[]},"fk":{"cT":[]},"bZ":{"cT":[]},"fd":{"L":[]},"Z":{"M":["1","2"],"J":["1","2"],"M.V":"2"},"d_":{"n":["1"],"j":["1"],"j.E":"1"},"eJ":{"me":[]},"cc":{"B":["1"],"a2":[],"A":["1"]},"bL":{"k":["I"],"B":["I"],"p":["I"],"a2":[],"n":["I"],"A":["I"],"j":["I"],"k.E":"I"},"de":{"k":["i"],"B":["i"],"p":["i"],"a2":[],"n":["i"],"A":["i"],"j":["i"]},"eV":{"k":["i"],"B":["i"],"p":["i"],"a2":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"eW":{"k":["i"],"B":["i"],"p":["i"],"a2":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"eX":{"k":["i"],"B":["i"],"p":["i"],"a2":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"eY":{"k":["i"],"B":["i"],"p":["i"],"a2":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"eZ":{"k":["i"],"B":["i"],"p":["i"],"a2":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"df":{"k":["i"],"B":["i"],"p":["i"],"a2":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"bM":{"k":["i"],"cl":[],"B":["i"],"p":["i"],"a2":[],"n":["i"],"A":["i"],"j":["i"],"k.E":"i"},"h3":{"L":[]},"e4":{"L":[]},"e3":{"jv":[]},"e0":{"j":["1"],"j.E":"1"},"dP":{"dm":["1"],"n":["1"],"j":["1"]},"cV":{"j":["1"]},"d1":{"k":["1"],"p":["1"],"n":["1"],"j":["1"]},"d5":{"M":["1","2"],"J":["1","2"]},"M":{"J":["1","2"]},"d6":{"J":["1","2"]},"cp":{"J":["1","2"]},"dX":{"dm":["1"],"n":["1"],"j":["1"]},"I":{"a4":[]},"i":{"a4":[]},"p":{"n":["1"],"j":["1"]},"eo":{"L":[]},"fB":{"L":[]},"f_":{"L":[]},"aJ":{"L":[]},"dl":{"L":[]},"eF":{"L":[]},"fL":{"L":[]},"fI":{"L":[]},"ch":{"L":[]},"et":{"L":[]},"f2":{"L":[]},"dr":{"L":[]},"ev":{"L":[]},"bT":{"fM":[]},"hp":{"fM":[]},"fX":{"fM":[]},"v":{"E":[],"t":[],"e":[]},"be":{"E":[],"t":[],"e":[]},"E":{"t":[],"e":[]},"ai":{"bC":[]},"bK":{"m":[]},"ar":{"m":[]},"t":{"e":[]},"as":{"e":[]},"at":{"e":[]},"ag":{"e":[]},"bP":{"m":[]},"b5":{"m":[]},"bs":{"ar":[],"m":[]},"cu":{"aO":[]},"em":{"E":[],"t":[],"e":[]},"en":{"E":[],"t":[],"e":[]},"bY":{"E":[],"t":[],"e":[]},"bD":{"E":[],"t":[],"e":[]},"bE":{"E":[],"t":[],"e":[]},"aK":{"t":[],"e":[]},"cN":{"k":["ac<a4>"],"p":["ac<a4>"],"B":["ac<a4>"],"n":["ac<a4>"],"j":["ac<a4>"],"A":["ac<a4>"],"k.E":"ac<a4>"},"cO":{"ac":["a4"]},"ey":{"k":["l"],"p":["l"],"B":["l"],"n":["l"],"j":["l"],"A":["l"],"k.E":"l"},"fU":{"k":["E"],"p":["E"],"n":["E"],"j":["E"],"k.E":"E"},"c3":{"k":["ai"],"p":["ai"],"B":["ai"],"n":["ai"],"j":["ai"],"A":["ai"],"k.E":"ai"},"eA":{"e":[]},"eC":{"E":[],"t":[],"e":[]},"bI":{"k":["t"],"p":["t"],"B":["t"],"n":["t"],"j":["t"],"A":["t"],"k.E":"t"},"c5":{"E":[],"t":[],"e":[]},"c7":{"E":[],"t":[],"e":[]},"c9":{"e":[]},"eS":{"M":["l","@"],"J":["l","@"],"M.V":"@"},"eT":{"M":["l","@"],"J":["l","@"],"M.V":"@"},"eU":{"k":["aA"],"p":["aA"],"B":["aA"],"n":["aA"],"j":["aA"],"A":["aA"],"k.E":"aA"},"a7":{"k":["t"],"p":["t"],"n":["t"],"j":["t"],"k.E":"t"},"dg":{"k":["t"],"p":["t"],"B":["t"],"n":["t"],"j":["t"],"A":["t"],"k.E":"t"},"f6":{"k":["aB"],"p":["aB"],"B":["aB"],"n":["aB"],"j":["aB"],"A":["aB"],"k.E":"aB"},"fc":{"M":["l","@"],"J":["l","@"],"M.V":"@"},"fe":{"E":[],"t":[],"e":[]},"fg":{"k":["as"],"p":["as"],"B":["as"],"e":[],"n":["as"],"j":["as"],"A":["as"],"k.E":"as"},"fh":{"k":["aE"],"p":["aE"],"B":["aE"],"n":["aE"],"j":["aE"],"A":["aE"],"k.E":"aE"},"fl":{"M":["l","l"],"J":["l","l"],"M.V":"l"},"bp":{"E":[],"t":[],"e":[]},"ds":{"E":[],"t":[],"e":[]},"fp":{"E":[],"t":[],"e":[]},"fq":{"E":[],"t":[],"e":[]},"cj":{"E":[],"t":[],"e":[]},"fs":{"k":["ag"],"p":["ag"],"B":["ag"],"n":["ag"],"j":["ag"],"A":["ag"],"k.E":"ag"},"ft":{"k":["at"],"p":["at"],"B":["at"],"e":[],"n":["at"],"j":["at"],"A":["at"],"k.E":"at"},"fz":{"k":["au"],"p":["au"],"B":["au"],"n":["au"],"j":["au"],"A":["au"],"k.E":"au"},"fO":{"e":[]},"cs":{"e":[]},"ct":{"t":[],"e":[]},"fV":{"k":["K"],"p":["K"],"B":["K"],"n":["K"],"j":["K"],"A":["K"],"k.E":"K"},"dM":{"ac":["a4"]},"h8":{"k":["ay?"],"p":["ay?"],"B":["ay?"],"n":["ay?"],"j":["ay?"],"A":["ay?"],"k.E":"ay?"},"dS":{"k":["t"],"p":["t"],"B":["t"],"n":["t"],"j":["t"],"A":["t"],"k.E":"t"},"hs":{"k":["aF"],"p":["aF"],"B":["aF"],"n":["aF"],"j":["aF"],"A":["aF"],"k.E":"aF"},"hz":{"k":["ak"],"p":["ak"],"B":["ak"],"n":["ak"],"j":["ak"],"A":["ak"],"k.E":"ak"},"fS":{"M":["l","l"],"J":["l","l"]},"h1":{"M":["l","l"],"J":["l","l"],"M.V":"l"},"dN":{"ci":["1"]},"dh":{"aO":[]},"dY":{"aO":[]},"hB":{"aO":[]},"hA":{"aO":[]},"e5":{"bJ":[]},"eB":{"k":["E"],"p":["E"],"n":["E"],"j":["E"],"k.E":"E"},"ac":{"hn":["1"]},"eM":{"k":["aY"],"p":["aY"],"n":["aY"],"j":["aY"],"k.E":"aY"},"f0":{"k":["b1"],"p":["b1"],"n":["b1"],"j":["b1"],"k.E":"b1"},"cg":{"o":[],"E":[],"t":[],"e":[]},"fn":{"k":["l"],"p":["l"],"n":["l"],"j":["l"],"k.E":"l"},"o":{"E":[],"t":[],"e":[]},"fA":{"k":["b3"],"p":["b3"],"n":["b3"],"j":["b3"],"k.E":"b3"},"eq":{"M":["l","@"],"J":["l","@"],"M.V":"@"},"er":{"e":[]},"bc":{"e":[]},"f1":{"e":[]},"fi":{"k":["J<@,@>"],"p":["J<@,@>"],"n":["J<@,@>"],"j":["J<@,@>"],"k.E":"J<@,@>"},"cU":{"b_":[]},"aS":{"b_":[]},"af":{"b_":[]},"f9":{"b_":[]},"u":{"b_":[]},"dv":{"b_":[]},"ap":{"j":["1"],"ap.T":"1"},"bg":{"W":[]},"bh":{"W":[]},"H":{"W":[]},"d4":{"W":[]},"ca":{"W":[]},"cb":{"W":[]},"f8":{"W":[]},"du":{"W":[]},"nM":{"az":[]},"c1":{"az":[]},"od":{"az":[]},"ow":{"az":[]},"cZ":{"ap":["az"],"j":["az"],"ap.T":"az"},"cJ":{"a1":[]},"c4":{"ap":["a1?"],"a1":[],"j":["a1?"],"ap.T":"a1?"},"dG":{"a1":[]},"dH":{"a1":[]},"dI":{"a1":[]},"cm":{"a3":[]},"cn":{"a3":[]},"eQ":{"dn":[]},"fE":{"a3":[]},"fF":{"a3":[]},"fG":{"a3":[]},"fC":{"a3":[]},"dw":{"a3":[]},"fD":{"a3":[]},"dx":{"a3":[]},"dy":{"a3":[]},"fH":{"a3":[]},"dB":{"a3":[]},"dD":{"a3":[]},"dE":{"a3":[]},"d8":{"dt":[]},"fu":{"ck":[]},"fv":{"ck":[]},"ew":{"aL":[]},"eD":{"aL":[]},"eE":{"aL":[]},"f5":{"aL":[]},"cl":{"p":["i"],"n":["i"],"j":["i"]}}'))
H.p3(v.typeUniverse,JSON.parse('{"ao":1,"n":1,"bk":1,"eP":2,"fQ":1,"cR":1,"fK":1,"co":1,"cK":2,"eO":1,"cc":1,"ci":1,"bS":1,"fm":2,"dQ":1,"cV":1,"d1":1,"d5":2,"hK":2,"d6":2,"dX":1,"dR":1,"e8":2,"ea":1,"es":2,"eu":2,"eG":1,"dN":1,"P":1,"cS":1,"bg":1,"bh":1,"H":1}'))
var u={M:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",S:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",b:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",U:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",q:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",h:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",N:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",D:"May not create a face with a first vertex which is not attached to a shape.",R:"May not create a face with vertices attached to different shapes.",p:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lL
return{cR:s("bY"),fK:s("bC"),Y:s("bD"),eT:s("c0"),ed:s("cG"),gA:s("bE"),ar:s("cI"),gw:s("n<@>"),h:s("E"),f4:s("bH"),bU:s("L"),aD:s("m"),c8:s("ai"),bX:s("c3"),b:s("cT"),x:s("bJ"),fS:s("c5"),gk:s("c7"),eu:s("w<ep>"),i:s("w<nM>"),cn:s("w<bb>"),U:s("w<c1>"),fD:s("w<bd>"),C:s("w<be>"),u:s("w<aq>"),fv:s("w<c6>"),e:s("w<az>"),L:s("w<eN>"),F:s("w<p<be>>"),z:s("w<b_>"),fA:s("w<bl>"),Q:s("w<aO>"),q:s("w<f7>"),cG:s("w<T>"),eg:s("w<bm>"),o:s("w<od>"),D:s("w<ow>"),c3:s("w<bo>"),g9:s("w<ci<R>>"),s:s("w<l>"),ga:s("w<ck>"),gT:s("w<au>"),ab:s("w<dv>"),gN:s("w<cl>"),dC:s("w<a3>"),c:s("w<dz>"),V:s("w<dA>"),B:s("w<dC>"),J:s("w<dF>"),k:s("w<cq>"),n:s("w<I>"),gn:s("w<@>"),t:s("w<i>"),g6:s("w<aL?>"),eJ:s("w<a1?>"),bc:s("w<dt?>"),p:s("w<cn?>"),a:s("w<~(W)>"),aP:s("A<@>"),T:s("cX"),eH:s("m5"),M:s("aX"),aU:s("B<@>"),fX:s("Z<i,ae>"),y:s("Z<i,i>"),O:s("p<dz>"),d:s("p<dA>"),l:s("p<dC>"),R:s("p<dF>"),m:s("p<@>"),bv:s("d4"),f:s("J<@,@>"),dv:s("d7<l,l>"),gc:s("bl"),bK:s("c9"),Z:s("ca"),bZ:s("cb"),cH:s("dd"),dE:s("a2"),bm:s("bM"),P:s("aj"),K:s("R"),I:s("ac<a4>"),fJ:s("me"),ew:s("cg"),fg:s("dn"),N:s("l"),g7:s("o"),bY:s("bp"),aW:s("cj"),aF:s("jv"),bJ:s("fx"),dr:s("du"),v:s("dw"),w:s("cm"),g:s("dx"),r:s("dy"),E:s("dB"),j:s("cn"),G:s("dD"),bz:s("dE"),ak:s("bQ"),dw:s("cp<l,l>"),dD:s("fM"),h9:s("ct"),ac:s("a7"),cJ:s("ae"),gR:s("I"),A:s("@"),S:s("i"),aw:s("0&*"),_:s("R*"),bG:s("m4<aj>?"),X:s("R?"),gW:s("cf?"),dl:s("fj?"),f7:s("fy?"),W:s("cm?"),H:s("a4"),h2:s("~(W)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.p=W.bD.prototype
C.i=W.bE.prototype
C.Q=W.be.prototype
C.T=J.b.prototype
C.b=J.w.prototype
C.c=J.cW.prototype
C.U=J.cX.prototype
C.d=J.c8.prototype
C.a=J.bi.prototype
C.V=J.aX.prototype
C.a_=H.bM.prototype
C.B=J.f4.prototype
C.a3=P.cf.prototype
C.C=W.ds.prototype
C.o=J.bQ.prototype
C.D=W.bs.prototype
C.E=W.cs.prototype
C.F=new E.c_("Browser.chrome")
C.q=new E.c_("Browser.firefox")
C.r=new E.c_("Browser.edge")
C.G=new E.c_("Browser.other")
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

C.O=new P.f2()
C.e=new P.jL()
C.P=new P.jP()
C.f=new P.k8()
C.m=new P.bG(0)
C.R=new P.bG(5e6)
C.S=new P.iB("element",!1,!1,!1)
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
C.Z=new H.cL(0,{},C.v,H.lL("cL<l,l>"))
C.a0=new E.cd("OperatingSystem.windows")
C.A=new E.cd("OperatingSystem.mac")
C.a1=new E.cd("OperatingSystem.linux")
C.a2=new E.cd("OperatingSystem.other")
C.a4=new P.jM(!1)
C.a5=new P.cv(null,2)})();(function staticFields(){$.k5=null
$.aT=0
$.cF=null
$.lY=null
$.n6=null
$.n_=null
$.nc=null
$.kM=null
$.kT=null
$.lN=null
$.cy=null
$.ed=null
$.ee=null
$.lG=!1
$.aP=C.f
$.am=H.a([],H.lL("w<R>"))
$.bf=null
$.lf=null
$.m3=null
$.m2=null
$.dO=P.X(t.N,t.b)
$.ip=null
$.m7=null
$.m9=null
$.aa=null
$.b2=null
$.mg=null
$.bR=null
$.mw=null
$.mv=null
$.jQ=null
$.jR=null
$.jS=null
$.mu=null
$.mx=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"qT","nj",function(){return H.qn("_$dart_dartClosure")})
s($,"r6","nl",function(){return H.b4(H.jB({
toString:function(){return"$receiver$"}}))})
s($,"r7","nm",function(){return H.b4(H.jB({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"r8","nn",function(){return H.b4(H.jB(null))})
s($,"r9","no",function(){return H.b4(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rc","nr",function(){return H.b4(H.jB(void 0))})
s($,"rd","ns",function(){return H.b4(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rb","nq",function(){return H.b4(H.mo(null))})
s($,"ra","np",function(){return H.b4(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"rf","nu",function(){return H.b4(H.mo(void 0))})
s($,"re","nt",function(){return H.b4(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"rv","lS",function(){return P.oI()})
s($,"rg","nv",function(){return new P.jO().$0()})
s($,"rh","nw",function(){return new P.jN().$0()})
s($,"rw","nA",function(){return new Int8Array(H.cx(H.a([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"rz","nC",function(){return P.op("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"rM","nD",function(){return P.pp()})
s($,"rx","nB",function(){return P.m6(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"ro","nz",function(){return Z.aH(0)})
s($,"ri","nx",function(){return Z.aH(511)})
s($,"rq","bA",function(){return Z.aH(1)})
s($,"rp","bz",function(){return Z.aH(2)})
s($,"rk","by",function(){return Z.aH(4)})
s($,"rr","bB",function(){return Z.aH(8)})
s($,"rs","bW",function(){return Z.aH(16)})
s($,"rl","ej",function(){return Z.aH(32)})
s($,"rm","ek",function(){return Z.aH(64)})
s($,"rn","ny",function(){return Z.aH(96)})
s($,"rt","cD",function(){return Z.aH(128)})
s($,"rj","bx",function(){return Z.aH(256)})
s($,"qP","ni",function(){return new V.iq()})
r($,"qO","F",function(){return $.ni()})
r($,"r2","nk",function(){var q=V.lo(),p=V.ls(),o=$.mu
return V.m8(q,p,o==null?$.mu=V.oF(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.b,AnimationEffectTiming:J.b,AnimationEffectTimingReadOnly:J.b,AnimationTimeline:J.b,AnimationWorkletGlobalScope:J.b,AuthenticatorAssertionResponse:J.b,AuthenticatorAttestationResponse:J.b,AuthenticatorResponse:J.b,BackgroundFetchFetch:J.b,BackgroundFetchManager:J.b,BackgroundFetchSettledFetch:J.b,BarProp:J.b,BarcodeDetector:J.b,BluetoothRemoteGATTDescriptor:J.b,Body:J.b,BudgetState:J.b,CacheStorage:J.b,CanvasGradient:J.b,CanvasPattern:J.b,Client:J.b,Clients:J.b,CookieStore:J.b,Coordinates:J.b,Credential:J.b,CredentialUserData:J.b,CredentialsContainer:J.b,Crypto:J.b,CryptoKey:J.b,CSS:J.b,CSSVariableReferenceValue:J.b,CustomElementRegistry:J.b,DataTransfer:J.b,DataTransferItem:J.b,DeprecatedStorageInfo:J.b,DeprecatedStorageQuota:J.b,DeprecationReport:J.b,DetectedBarcode:J.b,DetectedFace:J.b,DetectedText:J.b,DeviceAcceleration:J.b,DeviceRotationRate:J.b,DirectoryEntry:J.b,DirectoryReader:J.b,DocumentOrShadowRoot:J.b,DocumentTimeline:J.b,DOMError:J.b,DOMImplementation:J.b,Iterator:J.b,DOMMatrix:J.b,DOMMatrixReadOnly:J.b,DOMParser:J.b,DOMPoint:J.b,DOMPointReadOnly:J.b,DOMQuad:J.b,DOMStringMap:J.b,Entry:J.b,External:J.b,FaceDetector:J.b,FederatedCredential:J.b,FileEntry:J.b,DOMFileSystem:J.b,FontFace:J.b,FontFaceSource:J.b,FormData:J.b,GamepadButton:J.b,GamepadPose:J.b,Geolocation:J.b,Position:J.b,Headers:J.b,HTMLHyperlinkElementUtils:J.b,IdleDeadline:J.b,ImageBitmap:J.b,ImageBitmapRenderingContext:J.b,ImageCapture:J.b,InputDeviceCapabilities:J.b,IntersectionObserver:J.b,IntersectionObserverEntry:J.b,InterventionReport:J.b,KeyframeEffect:J.b,KeyframeEffectReadOnly:J.b,MediaCapabilities:J.b,MediaCapabilitiesInfo:J.b,MediaDeviceInfo:J.b,MediaError:J.b,MediaKeyStatusMap:J.b,MediaKeySystemAccess:J.b,MediaKeys:J.b,MediaKeysPolicy:J.b,MediaMetadata:J.b,MediaSession:J.b,MediaSettingsRange:J.b,MemoryInfo:J.b,MessageChannel:J.b,Metadata:J.b,MutationObserver:J.b,WebKitMutationObserver:J.b,MutationRecord:J.b,NavigationPreloadManager:J.b,Navigator:J.b,NavigatorAutomationInformation:J.b,NavigatorConcurrentHardware:J.b,NavigatorCookies:J.b,NavigatorUserMediaError:J.b,NodeFilter:J.b,NodeIterator:J.b,NonDocumentTypeChildNode:J.b,NonElementParentNode:J.b,NoncedElement:J.b,OffscreenCanvasRenderingContext2D:J.b,OverconstrainedError:J.b,PaintRenderingContext2D:J.b,PaintSize:J.b,PaintWorkletGlobalScope:J.b,PasswordCredential:J.b,Path2D:J.b,PaymentAddress:J.b,PaymentInstruments:J.b,PaymentManager:J.b,PaymentResponse:J.b,PerformanceEntry:J.b,PerformanceLongTaskTiming:J.b,PerformanceMark:J.b,PerformanceMeasure:J.b,PerformanceNavigation:J.b,PerformanceNavigationTiming:J.b,PerformanceObserver:J.b,PerformanceObserverEntryList:J.b,PerformancePaintTiming:J.b,PerformanceResourceTiming:J.b,PerformanceServerTiming:J.b,PerformanceTiming:J.b,Permissions:J.b,PhotoCapabilities:J.b,PositionError:J.b,Presentation:J.b,PresentationReceiver:J.b,PublicKeyCredential:J.b,PushManager:J.b,PushMessageData:J.b,PushSubscription:J.b,PushSubscriptionOptions:J.b,Range:J.b,RelatedApplication:J.b,ReportBody:J.b,ReportingObserver:J.b,ResizeObserver:J.b,ResizeObserverEntry:J.b,RTCCertificate:J.b,RTCIceCandidate:J.b,mozRTCIceCandidate:J.b,RTCLegacyStatsReport:J.b,RTCRtpContributingSource:J.b,RTCRtpReceiver:J.b,RTCRtpSender:J.b,RTCSessionDescription:J.b,mozRTCSessionDescription:J.b,RTCStatsResponse:J.b,Screen:J.b,ScrollState:J.b,ScrollTimeline:J.b,Selection:J.b,SharedArrayBuffer:J.b,SpeechRecognitionAlternative:J.b,SpeechSynthesisVoice:J.b,StaticRange:J.b,StorageManager:J.b,StyleMedia:J.b,StylePropertyMap:J.b,StylePropertyMapReadonly:J.b,SyncManager:J.b,TaskAttributionTiming:J.b,TextDetector:J.b,TextMetrics:J.b,TrackDefault:J.b,TreeWalker:J.b,TrustedHTML:J.b,TrustedScriptURL:J.b,TrustedURL:J.b,UnderlyingSourceBase:J.b,URLSearchParams:J.b,VRCoordinateSystem:J.b,VRDisplayCapabilities:J.b,VREyeParameters:J.b,VRFrameData:J.b,VRFrameOfReference:J.b,VRPose:J.b,VRStageBounds:J.b,VRStageBoundsPoint:J.b,VRStageParameters:J.b,ValidityState:J.b,VideoPlaybackQuality:J.b,VideoTrack:J.b,VTTRegion:J.b,WindowClient:J.b,WorkletAnimation:J.b,WorkletGlobalScope:J.b,XPathEvaluator:J.b,XPathExpression:J.b,XPathNSResolver:J.b,XPathResult:J.b,XMLSerializer:J.b,XSLTProcessor:J.b,Bluetooth:J.b,BluetoothCharacteristicProperties:J.b,BluetoothRemoteGATTServer:J.b,BluetoothRemoteGATTService:J.b,BluetoothUUID:J.b,BudgetService:J.b,Cache:J.b,DOMFileSystemSync:J.b,DirectoryEntrySync:J.b,DirectoryReaderSync:J.b,EntrySync:J.b,FileEntrySync:J.b,FileReaderSync:J.b,FileWriterSync:J.b,HTMLAllCollection:J.b,Mojo:J.b,MojoHandle:J.b,MojoWatcher:J.b,NFC:J.b,PagePopupController:J.b,Report:J.b,Request:J.b,Response:J.b,SubtleCrypto:J.b,USBAlternateInterface:J.b,USBConfiguration:J.b,USBDevice:J.b,USBEndpoint:J.b,USBInTransferResult:J.b,USBInterface:J.b,USBIsochronousInTransferPacket:J.b,USBIsochronousInTransferResult:J.b,USBIsochronousOutTransferPacket:J.b,USBIsochronousOutTransferResult:J.b,USBOutTransferResult:J.b,WorkerLocation:J.b,WorkerNavigator:J.b,Worklet:J.b,IDBCursor:J.b,IDBCursorWithValue:J.b,IDBFactory:J.b,IDBIndex:J.b,IDBKeyRange:J.b,IDBObjectStore:J.b,IDBObservation:J.b,IDBObserver:J.b,IDBObserverChanges:J.b,SVGAngle:J.b,SVGAnimatedAngle:J.b,SVGAnimatedBoolean:J.b,SVGAnimatedEnumeration:J.b,SVGAnimatedInteger:J.b,SVGAnimatedLength:J.b,SVGAnimatedLengthList:J.b,SVGAnimatedNumber:J.b,SVGAnimatedNumberList:J.b,SVGAnimatedPreserveAspectRatio:J.b,SVGAnimatedRect:J.b,SVGAnimatedString:J.b,SVGAnimatedTransformList:J.b,SVGMatrix:J.b,SVGPoint:J.b,SVGPreserveAspectRatio:J.b,SVGRect:J.b,SVGUnitTypes:J.b,AudioListener:J.b,AudioParam:J.b,AudioTrack:J.b,AudioWorkletGlobalScope:J.b,AudioWorkletProcessor:J.b,PeriodicWave:J.b,WebGLActiveInfo:J.b,ANGLEInstancedArrays:J.b,ANGLE_instanced_arrays:J.b,WebGLBuffer:J.b,WebGLCanvas:J.b,WebGLColorBufferFloat:J.b,WebGLCompressedTextureASTC:J.b,WebGLCompressedTextureATC:J.b,WEBGL_compressed_texture_atc:J.b,WebGLCompressedTextureETC1:J.b,WEBGL_compressed_texture_etc1:J.b,WebGLCompressedTextureETC:J.b,WebGLCompressedTexturePVRTC:J.b,WEBGL_compressed_texture_pvrtc:J.b,WebGLCompressedTextureS3TC:J.b,WEBGL_compressed_texture_s3tc:J.b,WebGLCompressedTextureS3TCsRGB:J.b,WebGLDebugRendererInfo:J.b,WEBGL_debug_renderer_info:J.b,WebGLDebugShaders:J.b,WEBGL_debug_shaders:J.b,WebGLDepthTexture:J.b,WEBGL_depth_texture:J.b,WebGLDrawBuffers:J.b,WEBGL_draw_buffers:J.b,EXTsRGB:J.b,EXT_sRGB:J.b,EXTBlendMinMax:J.b,EXT_blend_minmax:J.b,EXTColorBufferFloat:J.b,EXTColorBufferHalfFloat:J.b,EXTDisjointTimerQuery:J.b,EXTDisjointTimerQueryWebGL2:J.b,EXTFragDepth:J.b,EXT_frag_depth:J.b,EXTShaderTextureLOD:J.b,EXT_shader_texture_lod:J.b,EXTTextureFilterAnisotropic:J.b,EXT_texture_filter_anisotropic:J.b,WebGLFramebuffer:J.b,WebGLGetBufferSubDataAsync:J.b,WebGLLoseContext:J.b,WebGLExtensionLoseContext:J.b,WEBGL_lose_context:J.b,OESElementIndexUint:J.b,OES_element_index_uint:J.b,OESStandardDerivatives:J.b,OES_standard_derivatives:J.b,OESTextureFloat:J.b,OES_texture_float:J.b,OESTextureFloatLinear:J.b,OES_texture_float_linear:J.b,OESTextureHalfFloat:J.b,OES_texture_half_float:J.b,OESTextureHalfFloatLinear:J.b,OES_texture_half_float_linear:J.b,OESVertexArrayObject:J.b,OES_vertex_array_object:J.b,WebGLProgram:J.b,WebGLQuery:J.b,WebGLRenderbuffer:J.b,WebGLRenderingContext:J.b,WebGLSampler:J.b,WebGLShader:J.b,WebGLShaderPrecisionFormat:J.b,WebGLSync:J.b,WebGLTexture:J.b,WebGLTimerQueryEXT:J.b,WebGLTransformFeedback:J.b,WebGLUniformLocation:J.b,WebGLVertexArrayObject:J.b,WebGLVertexArrayObjectOES:J.b,WebGL:J.b,WebGL2RenderingContextBase:J.b,Database:J.b,SQLError:J.b,SQLResultSet:J.b,SQLTransaction:J.b,ArrayBuffer:H.dd,DataView:H.a2,ArrayBufferView:H.a2,Float32Array:H.bL,Float64Array:H.bL,Int16Array:H.eV,Int32Array:H.eW,Int8Array:H.eX,Uint16Array:H.eY,Uint32Array:H.eZ,Uint8ClampedArray:H.df,CanvasPixelArray:H.df,Uint8Array:H.bM,HTMLAudioElement:W.v,HTMLBRElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLLIElement:W.v,HTMLLabelElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMediaElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLVideoElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,AccessibleNodeList:W.i_,HTMLAnchorElement:W.em,HTMLAreaElement:W.en,HTMLBaseElement:W.bY,Blob:W.bC,HTMLBodyElement:W.bD,HTMLCanvasElement:W.bE,CanvasRenderingContext2D:W.cI,CDATASection:W.aK,CharacterData:W.aK,Comment:W.aK,ProcessingInstruction:W.aK,Text:W.aK,CSSPerspective:W.ib,CSSCharsetRule:W.K,CSSConditionRule:W.K,CSSFontFaceRule:W.K,CSSGroupingRule:W.K,CSSImportRule:W.K,CSSKeyframeRule:W.K,MozCSSKeyframeRule:W.K,WebKitCSSKeyframeRule:W.K,CSSKeyframesRule:W.K,MozCSSKeyframesRule:W.K,WebKitCSSKeyframesRule:W.K,CSSMediaRule:W.K,CSSNamespaceRule:W.K,CSSPageRule:W.K,CSSRule:W.K,CSSStyleRule:W.K,CSSSupportsRule:W.K,CSSViewportRule:W.K,CSSStyleDeclaration:W.cM,MSStyleCSSProperties:W.cM,CSS2Properties:W.cM,CSSImageValue:W.ax,CSSKeywordValue:W.ax,CSSNumericValue:W.ax,CSSPositionValue:W.ax,CSSResourceValue:W.ax,CSSUnitValue:W.ax,CSSURLImageValue:W.ax,CSSStyleValue:W.ax,CSSMatrixComponent:W.aW,CSSRotation:W.aW,CSSScale:W.aW,CSSSkew:W.aW,CSSTranslation:W.aW,CSSTransformComponent:W.aW,CSSTransformValue:W.id,CSSUnparsedValue:W.ie,DataTransferItemList:W.ig,HTMLDivElement:W.be,DOMException:W.ih,ClientRectList:W.cN,DOMRectList:W.cN,DOMRectReadOnly:W.cO,DOMStringList:W.ey,DOMTokenList:W.ii,Element:W.E,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,SubmitEvent:W.m,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ai,FileList:W.c3,FileWriter:W.eA,HTMLFormElement:W.eC,Gamepad:W.ay,History:W.iz,HTMLCollection:W.bI,HTMLFormControlsCollection:W.bI,HTMLOptionsCollection:W.bI,ImageData:W.bJ,HTMLImageElement:W.c5,HTMLInputElement:W.c7,KeyboardEvent:W.bK,Location:W.iK,MediaList:W.j0,MessagePort:W.c9,MIDIInputMap:W.eS,MIDIOutputMap:W.eT,MimeType:W.aA,MimeTypeArray:W.eU,PointerEvent:W.ar,MouseEvent:W.ar,DragEvent:W.ar,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,DocumentType:W.t,Node:W.t,NodeList:W.dg,RadioNodeList:W.dg,Plugin:W.aB,PluginArray:W.f6,RTCStatsReport:W.fc,HTMLSelectElement:W.fe,SourceBuffer:W.as,SourceBufferList:W.fg,SpeechGrammar:W.aE,SpeechGrammarList:W.fh,SpeechRecognitionResult:W.aF,Storage:W.fl,CSSStyleSheet:W.ak,StyleSheet:W.ak,HTMLTableCellElement:W.bp,HTMLTableDataCellElement:W.bp,HTMLTableHeaderCellElement:W.bp,HTMLTableElement:W.ds,HTMLTableRowElement:W.fp,HTMLTableSectionElement:W.fq,HTMLTemplateElement:W.cj,TextTrack:W.at,TextTrackCue:W.ag,VTTCue:W.ag,TextTrackCueList:W.fs,TextTrackList:W.ft,TimeRanges:W.ju,Touch:W.au,TouchEvent:W.bP,TouchList:W.fz,TrackDefaultList:W.jz,CompositionEvent:W.b5,FocusEvent:W.b5,TextEvent:W.b5,UIEvent:W.b5,URL:W.jK,VideoTrackList:W.fO,WheelEvent:W.bs,Window:W.cs,DOMWindow:W.cs,Attr:W.ct,CSSRuleList:W.fV,ClientRect:W.dM,DOMRect:W.dM,GamepadList:W.h8,NamedNodeMap:W.dS,MozNamedAttrMap:W.dS,SpeechRecognitionResultList:W.hs,StyleSheetList:W.hz,SVGLength:P.aY,SVGLengthList:P.eM,SVGNumber:P.b1,SVGNumberList:P.f0,SVGPointList:P.j8,SVGScriptElement:P.cg,SVGStringList:P.fn,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.b3,SVGTransformList:P.fA,AudioBuffer:P.i2,AudioParamMap:P.eq,AudioTrackList:P.er,AudioContext:P.bc,webkitAudioContext:P.bc,BaseAudioContext:P.bc,OfflineAudioContext:P.f1,WebGL2RenderingContext:P.cf,SQLResultSetRowList:P.fi})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cc.$nativeSuperclassTag="ArrayBufferView"
H.dT.$nativeSuperclassTag="ArrayBufferView"
H.dU.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
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
var s=M.qy
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
